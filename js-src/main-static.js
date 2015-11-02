"use strict";

  window.backboneApp = {set: {}};
  window.backboneApp.set.sharrrePhpProxyh = 'bower_components/sharrre/sharrre.php';
  window.backboneApp.set.imgBaseUrl = "img/";

(function() {

  define("jquery", [], function() {
    return jQuery;
  });

  require.config({
    //urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
      underscore: '../bower_components/underscore/underscore-min',
      backbone: '../bower_components/backbone/backbone',
      text: '../bower_components/requirejs-text/text',
      fullScreen: '../bower_components/fullmodal/full-modal',
      caption: '../bower_components/gallery-captions/gallery-caption',
      sharrre: '../bower_components/sharrre/jquery.sharrre',
      icheck: '../bower_components/iCheck/icheck',
      owl: '../bower_components/owlcarousel/owl-carousel/owl.carousel.min',
      owlRtl: '../bower_components/owlcarouselrtl/owl.carousel.rtl'
    }
  });

  require([
    'app'
  ], function(
          App
          ) {
    window.jsSHA = jsSHA;
    new App();
  });

})();
