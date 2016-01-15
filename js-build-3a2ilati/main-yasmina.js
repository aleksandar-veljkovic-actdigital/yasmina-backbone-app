

window.backboneApp = {set:{}};
window.backboneApp.set.imgBaseUrl = "/assets/images/";


(function() {

  // Alredy Included scripts
  define("jquery", [], function() {
    return jQuery;
  });
  define("owl", [], function() {
    return jQuery.fn.owlCarousel;
  });  
  define("owlRtl", [], function() {
    return jQuery.fn.owlCarouselRtl;
  }); 
  define("icheck", [], function() {
    return jQuery.fn.iCheck;
  }); 
  define("sharrre", [], function() {
    return jQuery.fn.sharrre;
  });  

  require.config({
    //urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
      underscore: '../bower_components/underscore/underscore-min',
      backbone: '../bower_components/backbone/backbone',
      text: '../bower_components/requirejs-text/text',
      fullScreen: '../bower_components/fullmodal/full-modal',
      caption: '../bower_components/gallery-captions/gallery-caption',
      slick: '../bower_components/slick.js/slick/slick',
      iscroll: '../bower_components/iscroll/build/iscroll',
      maxDimensionPercentage: '../bower_components/max-dimension-percentage/max-dimension-percentage'
      //sharrre: '../bower_components/sharrre/jquery.sharrre',
      //icheck: '../bower_components/iCheck/icheck',
      //owl: '../bower_components/owlcarousel/owl-carousel/owl.carousel.min',
      //owlRtl: '../bower_components/owlcarouselrtl/owl.carousel.rtl'
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
