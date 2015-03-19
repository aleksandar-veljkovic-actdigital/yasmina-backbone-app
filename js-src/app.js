"use strict";

define([
  'router'
], function(
        Router
        ) {

  ///////////////////////////////////////////////////////////////////////////////
  window.backboneApp = window.backboneApp || {};
  window.backboneApp.set = window.backboneApp.set || {};
  window.backboneApp.set.$mediaGallerySelector = $('.article-gallery');
  //window.backboneApp.set.device = oxAsyncGallery.deviceType;
  if ($('html').hasClass('ua-type-mobile')) {
    window.backboneApp.set.device = 'mobile';
  }
  else {
    window.backboneApp.set.device = 'desktop';
  }
  window.backboneApp.set.sharrrePhpProxyh = window.backboneApp.set.sharrrePhpProxyh || 'public/js/sharrre.php';
  window.backboneApp.set.imgBaseUrl = window.backboneApp.set.imgBaseUrl || "/0static/yasmina-scales/public/js/backbone/";
  window.backboneApp.set.gallery = {};
  window.backboneApp.set.gallery.adMobileInsertOnCount = window.backboneApp.set.gallery.adMobileInsertOnCount || 3;
  window.backboneApp.set.gallery.adMobileActionCount = window.backboneApp.set.gallery.adMobileActionCount || 3;
  ///////////////////////////////////////////////////////////////////////////////


  window.dbge = false;
  window.dbg = function(msg) {
    if (window.dbge) {
      console.log(msg);
    }
  };


  // Media Gallery enumeration
  window.backboneApp.set.$mediaGallerySelector.each(function(galleryIndex, gallery) {
    var $gallery = $(gallery);
    $gallery.addClass("media-gallery");
    $gallery.addClass("media-gallery-" + galleryIndex);
    var itemIndex = 1;
    /*
     if (window.backboneApp.set.device === 'mobile') {
     $gallery.find('.mg-start').each(function(starterIndex, starter) {
     if ((window.backboneApp.set.device === 'mobile')&&((starterIndex) % window.backboneApp.set.gallery.adMobileInsertOnCount === 0)) {          
     itemIndex++;
     }
     $(starter).attr('href', "#media-gallery/" + galleryIndex + "/" + itemIndex);
     itemIndex++;
     });
     } else {
     */
    $gallery.find('.mg-start').each(function(starterIndex, starter) {
      starterIndex = starterIndex + 1;


      console.log('--------------------------');
      console.log('starter:' + starterIndex);
      console.log('item:' + itemIndex);

      $(starter).attr('href', "#media-gallery/" + galleryIndex + "/" + itemIndex);
      itemIndex++;
      if (
              (window.backboneApp.set.device === 'mobile') &&
              ((starterIndex) % window.backboneApp.set.gallery.adMobileInsertOnCount === 0)
              )
      {
        itemIndex++;
      }
    });
    //}
  });

  return function() {
    window.backboneApp.router = Router.initialize().router;
  };

});
   