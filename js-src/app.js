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
  window.backboneApp.set.$mediaGallerySelector.each(function(i, o) {
    var $o = $(o);
    $o.addClass("media-gallery");
    $o.addClass("media-gallery-" + i);
    $o.find('.mg-start').attr('href', "#media-gallery/" + i + "/1");
  }); 
  
  return function() {
    window.backboneApp.router = Router.initialize().router;
  };  
  
});
   