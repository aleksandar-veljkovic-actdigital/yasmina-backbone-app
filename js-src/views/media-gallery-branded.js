'use strict';

define([
  'models/media-gallery',
  'text!templates/media-gallery-branded-layout-desk.html.tpl',
  //
  'jquery',
  'slick',
  'caption'
], function (
        MediaGalleryItemModel,
        templateLayoutDedsk
        ) {

  var MediaGallryBrandedView = Backbone.View.extend({
    
    $layout: $(),
    $slider: $(),
    $captions: $(),
    $thumbs: $(),
    currentItem: 1,
    id: null,
    appThumborConfig: false,
    
    initialize: function (attributes) {
            
      this.$elem = attributes.$elem;
      this.collection = new Backbone.Collection([], {model: MediaGalleryItemModel});
      this.currentItem = parseInt(attributes.currentItem);
      this.id = parseInt(attributes.id);
      this.appThumborConfig = $.extend(true, {}, window.appThumborConfig, {thumbor: {
          hasResize: true, 
          hasTrim: false, 
          isSmart: true,
          resizeWidth: "110",
          resizeHeight: "110"
      }});
      
    },
    
    
    parse: function () {
      var _this = this;
      $('.mg-item', _this.$elem).each(function (i, o) {
        var data = {
          type: "item",
          title: $("h3", o).text(),
          img: $(".mg-img", o).attr('src'),
          caption: $(".mg-capt", o).html().trim(),
          thumb: _this.thumborThumb($(".mg-img", o).attr('src'))
        };
        _this.collection.add(new MediaGalleryItemModel(data));
      });    
      
    },
    
    thumborThumb: function(src) {
      //url = src.match(/(https?:\/\/[^\s]+)/g, src);
      var data = {
        hash: src.split('/').pop().split(".")[0]
      };
      var thumbor = new thumborUrlBuilder(this.appThumborConfig);
      thumbor.setAmazonUrlPath(this.appThumborConfig.amazonS3Path, data);
      var url = thumbor.finalUrl();
      return url;
    },
    
    
    
    renderDesk: function () {
      var layoutTpl = _.template(templateLayoutDedsk);
      var $layout;
      this.$layout = $layout = $(layoutTpl());
      var itemsRdr = "";
      var captRdr = "";   
      var thumbsRdr = "";
      $layout.css('opacity', 0.001).addClass('render');  
      
      
      this.collection.each(function (item, i) {
        if (item.get('type') === 'item') {
          captRdr += "<div class='mgb-caption'><h3>" + item.attributes.title + "</h3><p>" + item.attributes.caption + "</p></div>";
          itemsRdr += '<div class="item"><img  src="' + item.attributes.img + '" alt="" /></div>';
          thumbsRdr += '<div class="mgb-thumb"><img  src="' + item.attributes.thumb + '" alt="" /></div>';
        }
      });
      this.$captions = $("<div class='mgb-captions'>" + captRdr + "</div>");
      this.$slider = $("<div class='mgb-slider'>" + itemsRdr + "</div>");
      this.$thumbs = $("<div class='mgb-thumbs'>" + thumbsRdr + "</div>");
      $('.mgb-slider-w', $layout).append(this.$slider);
      $('.mgb-captions-w', $layout).append(this.$captions);
      $('.mgb-thumbs-w', $layout).append(this.$thumbs);
      this.fullScreen();
      this.bindings();      
      $layout.css('opacity', 1).addClass('initialized');
    },


    bindings: function () {
      var _this = this;
      // captions      
      this.$captions.galleryCaption({autoHeight: true});
      this.$captions.data('galleryCaption').goTo(this.currentItem - 1);
      // slider      
      this.slider(this.$slider);
      // thumbs
      this.thumbs(this.$thumbs);
      // close button
      var _this = this;
      $('.mgb-close-button', this.$layout).click(function (e) {
        e.preventDefault();
        _this.close();
      });
      // captions toggle
      $('.mgb-caption').on('click', function(e){
        e.preventDefault();
        $this = $(this);
        $parent = $this.parents('.mgb-captions-w');
        if ($parent.hasClass('opened')){
          $parent.removeClass('opened');
        } 
        else {
          $parent.addClass('opened');
        }        
      });
      // list toggle
      $('.mgb-thumbs-button').on('click', function(e){
        e.preventDefault();
        var $o = _this.$layout;
        if ($o.hasClass('thumbs')){
          $o.removeClass('thumbs');
        } 
        else {
          $o.addClass('thumbs');
        }  
        var interval;
        interval = setInterval(function(){
          _this.$slider.slick('setPosition');
          //_this.$thumbs.slick('setPosition');
        },25);        
        setTimeout(function(){
          clearInterval(interval);
        },2000); 
      });
    },
    
    
    close: function() {      
      this.$layout.remove();
      this.undelegateEvents();
      this.remove();
      window.backboneApp.router.clearState();      
    },
    
    
    fullScreen: function () {
      $('body').append(this.$layout);   
    },
    
    
    thumbs: function ($target) {
      var _this = this;

      /*
      $target.slick({
        centerMode: true,
        centerPadding: ($(window).height() / 2) - 110 + 'px',
        vertical: true,
        rows: 1,
        slidesPerRow: 1,
        //slidesToShow: Math.floor( $(window).height() / 110 ) - 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        prevArrow: "<a href='#' class='mgb-prev'>prev</a>",
        nextArrow: "<a href='#' class='mgb-next'>next</a>",
        initialSlide: this.currentItem - 1,
        infinite: false,
        asNavFor: '.mgb-slider'
      });
      */
      

    },   
    
    slider: function ($target) {
      var _this = this;
      $target.on('afterChange', function (slick, currentSlide) {
        _this.currentItem = currentSlide.currentSlide;
        _this.sliderAfterChange(slick, currentSlide);
      });
      $target.one('init', function () {
        // $(window).trigger('resize');
      });
      $target.slick({
        rtl: true,
        rows: 1,
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        prevArrow: "<a href='#' class='mgb-prev'></a>",
        nextArrow: "<a href='#' class='mgb-next'></a>",
        initialSlide: this.currentItem - 1
      });
    },
    
    sliderAfterChange: function(slick, currentSlide){      
      window.backboneApp.router.navigate('media-gallery-branded/' + this.id + "/" + (this.currentItem+1), {trigger: false, replace: true});
      this.$captions.data('galleryCaption').goTo(this.currentItem);
    }

  });

  return MediaGallryBrandedView;

}

);