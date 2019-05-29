"use strict";

define([
  'router',
  'translations-default'
], function(
        Router,
        translationsDefault
        ) {

  // @Override
  Backbone.History.prototype._updateHash = function(location, fragment, replace) {
    if (replace) {
      var href = location.href.replace(/(javascript:|#).*$/, '');
      if (window.backboneApp.set.replaceStateSuported) {
        if (fragment) {
          history.replaceState('', document.title, href + '#' + fragment);
        }
        else {
          history.replaceState('', document.title, href);
        }
      }
      else {
        location.replace(href + '#' + fragment);
      }
    } else {
      // Some browsers require that `hash` contains a leading #.
      location.hash = '#' + fragment;
    }
  };

  // translation interface
  window.backboneApp.translations = window.backboneApp.translations || {};
  window.backboneApp.translations = $.extend(true, translationsDefault, window.backboneApp.translations);
  window.backboneApp.t = function (group, txt) {
    window.backboneApp.translations[group] = window.backboneApp.translations[group] || {};
    txt = window.backboneApp.translations[group][txt] || txt;
    return txt;
  };
  Backbone.View.prototype.t = window.backboneApp.t;

  ///////////////////////////////////////////////////////////////////////////////
  window.backboneApp = window.backboneApp || {};
  window.backboneApp.set = window.backboneApp.set || {};
  window.backboneApp.set.ua = (new UAParser()).getResult();
  window.backboneApp.set.$mediaGallerySelector = $('.article-gallery:not(.branded)');
  window.backboneApp.set.$mediaGalleryBrandedSelector = $('.article-gallery.branded');
  if ($('html').hasClass('ua-visitor-device-mobile')) {
    window.backboneApp.set.device = 'mobile';
  }
  else if ($('html').hasClass('ua-visitor-device-tablet')) {
    window.backboneApp.set.device = 'tablet';
  }
  else {
    window.backboneApp.set.device = 'desktop';
  }
  window.backboneApp.set.sharrrePhpProxyh = window.backboneApp.set.sharrrePhpProxyh || 'public/js/sharrre.php';
  window.backboneApp.set.imgBaseUrl = window.backboneApp.set.imgBaseUrl || "/0static/yasmina-scales/public/js/backbone/";
  window.backboneApp.set.gallery = {};

  window.backboneApp.set.gallery.adTopTrigger = window.backboneApp.set.gallery.adTopTrigger || 3;
  window.backboneApp.set.gallery.adOverTrigger = window.backboneApp.set.gallery.adOverTrigger || 3;

  //window.backboneApp.set.gallery.adMobileInsertOnCount = window.backboneApp.set.gallery.adMobileInsertOnCount || 3;
  //window.backboneApp.set.gallery.adMobileActionCount = window.backboneApp.set.gallery.adMobileActionCount || 3;
  window.backboneApp.set.gallery.referal = true;
  ///////////////////////////////////////////////////////////////////////////////


  window.dbge = false;
  window.dbg = function(msg) {
    if (window.dbge) {
      console.log(msg);
    }
  };


  // Media Gallery enumeration
  var galleryIndex = 0;
  var mediaGalleryEnumeration = function($galleries){
    $galleries.each(function(ix, gallery) {
      var $gallery = $(gallery);
      var galleryId = $gallery.attr('data-lid') || galleryIndex;
      $gallery.addClass("media-gallery");
      $gallery.addClass("media-gallery-" + galleryId);
      var itemIndex = 1;
      $gallery.find('.mg-start').each(function(starterIndex, starter) {
        starterIndex = starterIndex + 1;
        $(starter).attr('data-href', "#media-gallery/" + galleryId + "/" + itemIndex);
        itemIndex++;
        if (
                (window.backboneApp.set.device === 'mobile' || window.backboneApp.set.device === 'tablet') &&
                ((starterIndex) % window.backboneApp.set.gallery.adMobileInsertOnCount === 0)
                )
        {
          itemIndex++;
        }
      });
      galleryIndex++;
    });
  }

  mediaGalleryEnumeration(window.backboneApp.set.$mediaGallerySelector);

  window.backboneApp.mediaGalleryNew = function(){
    var $galleries = $('.article-gallery:not(.branded):not(.media-gallery)')
    mediaGalleryEnumeration($galleries);
    var $galleriesB = $('.article-gallery.branded:not(.media-gallery-branded)')
    mediaGalleryBrandedEnumeration($galleriesB);
  }


  // Media Gallery Branded enumeration
  var mediaGalleryBrandedEnumeration = function($galleries){
    $galleries.each(function(ix, gallery) {
      var $gallery = $(gallery);
      $gallery.addClass("media-gallery-branded");
      $gallery.addClass("media-gallery-branded" + galleryIndex);
      var itemIndex = 1;
      $gallery.find('.mg-start').each(function(starterIndex, starter) {
        starterIndex = starterIndex + 1;
        $(starter).attr('data-href', "#media-gallery-branded/" + galleryIndex + "/" + itemIndex);
        itemIndex++;
      });
      galleryIndex++;
    });
  };
  mediaGalleryBrandedEnumeration(window.backboneApp.set.$mediaGalleryBrandedSelector); 


  var ua = window.backboneApp.set.ua;
  window.backboneApp.set.replaceStateSuported = !(
          (ua.browser.name === "IE" && (ua.browser.major <= 9)) ||
          (ua.browser.name === "Android Browser" && (ua.browser.major < 4.3))
  );

  return function() {
    window.backboneApp.router = Router.initialize().router;
    $(document).on('click', '.mg-start',function(e) {
      e.preventDefault();
      var $tthis = $(this);
      window.backboneApp.set.gallery.referal = false;
      window.backboneApp.router.navigate($tthis.data('href'), {trigger: true, replace: false});
      //window.location.hash = $tthis.data('href');
    });

  };

});
