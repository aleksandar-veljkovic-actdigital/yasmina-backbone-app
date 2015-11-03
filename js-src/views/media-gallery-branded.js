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
    currentItem: 1,
    id: null,
    
    initialize: function (attributes) {
            
      this.$elem = attributes.$elem;
      this.collection = new Backbone.Collection([], {model: MediaGalleryItemModel});
      this.currentItem = parseInt(attributes.currentItem);
      this.id = parseInt(attributes.id);
      
    },
    
    
    parse: function () {
      var _this = this;
      $('.mg-item', _this.$elem).each(function (i, o) {
        var data = {
          type: "item",
          title: $("h3", o).text(),
          img: $(".mg-img", o).attr('src'),
          caption: $(".mg-capt", o).html().trim()
        };
        _this.collection.add(new MediaGalleryItemModel(data));
      });
 
     
      
    },
    
    
    
    renderDesk: function () {
      var layoutTpl = _.template(templateLayoutDedsk);
      var $layout;
      this.$layout = $layout = $(layoutTpl());
      var itemsRdr = "";
      var captRdr = "";      
      $layout.css('opacity', 0.001).addClass('render');      
      this.collection.each(function (item, i) {
        if (item.get('type') === 'item') {
          captRdr += "<div class='mgb-caption'><h3>" + item.attributes.title + "</h3><p>" + item.attributes.caption + "</p></div>";
          itemsRdr += '<div class="item"><img  src="' + item.attributes.img + '" alt="" /></div>';
        }
      });
      this.$captions = $("<div class='mgb-captions'>" + captRdr + "</div>");
      this.$slider = $("<div class='mgb-slider'>" + itemsRdr + "</div>");
      $('.mgb-slider-w', $layout).append(this.$slider);
      $('.mgb-captions-w', $layout).append(this.$captions);
      this.fullScreen();
      this.bindings(); 
      $layout.css('opacity', 1).addClass('initialized');
    },


    bindings: function () {
      // captions      
      this.$captions.galleryCaption({autoHeight: true});
      this.$captions.data('galleryCaption').goTo(this.currentItem - 1);
      // slider      
      this.slider(this.$slider);
      // close button
      var _this = this;
      $('.mgb-close-button', this.$layout).click(function (e) {
        e.preventDefault();
        _this.close();
      });
      // captions toggle
      $('.mgb-caption').on('click', function(){
        $this = $(this);
        $parent = $this.parents('.mgb-captions-w');
        if ($parent.hasClass('opened')){
          $parent.removeClass('opened');
        } 
        else {
          $parent.addClass('opened');
        }        
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