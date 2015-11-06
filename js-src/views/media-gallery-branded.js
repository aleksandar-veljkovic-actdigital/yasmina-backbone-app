'use strict';

define([
  'models/media-gallery',
  'text!templates/media-gallery-branded-layout-desk.html.tpl',
  //
  'jquery',
  'slick',
  'caption',
  'iscroll'
], function (
        MediaGalleryItemModel,
        templateLayoutDedsk
        ) {

  var MediaGallryBrandedView = Backbone.View.extend({
    
    $layout: $(),
    $slider: $(),
    $captions: $(),
    $thumbs: $(),
    $numers: $(),
    $share: $(),
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
      var numersRdr = "";
      var clength = this.collection.length;
      $layout.css('opacity', 0.001).addClass('render');      
      this.collection.each(function (item, i) {
        if (item.get('type') === 'item') {
          captRdr += "<div class='mgb-caption'><h3><span class='tx'>" + item.attributes.title + "</span><span class='ui'>فستان خمري</span></h3><p>" + item.attributes.caption + "</p></div>";
          itemsRdr += '<div class="item"><img  src="' + item.attributes.img + '" alt="" /></div>';
          thumbsRdr += '<a href="#" class="mgb-thumb"><img  src="' + item.attributes.thumb + '" alt="" /><span>' + ((i<9)?"0"+(i + 1):(i + 1)) + '</span></a>';
          numersRdr += "<div class='mgb-numer'><div class='num'>" + (i + 1) + "/" + clength + "</div></div>";
        }
      });
      this.$captions = $("<div class='mgb-captions'>" + captRdr + "</div>");
      this.$slider = $("<div class='mgb-slider'>" + itemsRdr + "</div>");
      this.$thumbs = $("<div class='mgb-thumbs'>" + thumbsRdr + "</div>");
      this.$numers = $("<div class='mgb-numers'>" + numersRdr + "</div>");
      this.$share = $('<div class="mgb-share"><div id="facebook_share" class="share_btn" ></div><div id="whatsapp_share" class="share_btn" ></div><div id="twitter_share" class="share_btn" ></div><div id="gplus_share" class="share_btn" ></div></div>');
      $('.mgb-slider-w', $layout).append(this.$slider);
      $('.mgb-captions-w', $layout).append(this.$captions);
      $('.mgb-thumbs-w', $layout).append(this.$thumbs);
      $('.mgb-numers-w', $layout).append(this.$numers);
      $('.mgb-share-w', $layout).append(this.$share);
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
      //numeration
      this.$numers.galleryCaption({autoHeight: true});
      this.$numers.data('galleryCaption').goTo(this.currentItem - 1);
      //share on social networks
      this.sharrre(this.$share);
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
      // thumbs toggle
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
          _this.$thumbs.iscroll.refresh();
          _this.thumbGo(_this.currentItem - 1);
        },25);        
        setTimeout(function(){
          clearInterval(interval);
        },1000); 
      });
      // thumb click
      var $thumbItems = this.$thumbs.find('.mgb-thumb');
      $thumbItems.on('click', function(e){        
        e.preventDefault();
        var position = $thumbItems.index(this);
        _this.$slider.slick('slickGoTo', position);
      });
      // thumbs up/down

      $('#mgb-thumbs-up').on('touchstart mousedown', function (e) {
        $(this).addClass('scroll');
        _this.$thumbs.iscroll.scrollBy(0, 100, 300);
      });
      $('#mgb-thumbs-dw').on('touchstart mousedown', function (e) {
        $(this).addClass('scroll');
        _this.$thumbs.iscroll.scrollBy(0, -100, 300);
      });
      
      $('#mgb-thumbs-up').on('touchend mouseup mouseleave', function (e) {
        $(this).removeClass('scroll');
      });
      $('#mgb-thumbs-dw').on('touchend mouseup mouseleave', function (e) {
        $(this).removeClass('scroll');
      });      
      _this.$thumbs.iscroll.on('scrollEnd', function () {
        if ($('#mgb-thumbs-up').hasClass('scroll')) {
          _this.$thumbs.iscroll.scrollBy(0, 100, 300);
        }
        if ($('#mgb-thumbs-dw').hasClass('scroll')) {
          _this.$thumbs.iscroll.scrollBy(0, -100, 300);
        }
      });
      $('#mgb-thumbs-up, #mgb-thumbs-dw').on('click', function (e) {
        e.preventDefault();
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
      var iscroll = new IScroll($target.parent()[0], {
        mouseWheel: true,
        scrollbars: false,
        click: true        
      });      
      $.fn.iscroll = iscroll;
      this.thumbGo(this.currentItem - 1);
    }, 
    
    thumbGo: function (index) {   
      
      this.$thumbs.children().removeClass('mgb-thumb-active');
      this.$thumbs.children().eq(index).addClass('mgb-thumb-active'); 

      if ( !this.isVisible(this.$thumbs.children().eq(index), this.$thumbs.parent()) ) {
        this.$thumbs.iscroll.scrollToElement(this.$thumbs.children()[index], 400);
      }

    },

    isVisible: function ($element, $container) {
      if ($container.position().top < $element.position().top &&
              $container.position().top + $container.outerHeight(true) > $element.position().top + $element.outerHeight(true)) {
        return true;
      }
      else {
        return false;
      }
    },
    
    slider: function ($target) {
      var _this = this;
      $target.on('afterChange', function (slick, currentSlide) {
        _this.currentItem = currentSlide.currentSlide + 1;
        _this.sliderAfterChange(currentSlide - 1);
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
    
    sliderAfterChange: function( currentSlide ){      
      window.backboneApp.router.navigate('media-gallery-branded/' + this.id + "/" + ( this.currentItem ), {trigger: false, replace: true});
      this.$captions.data('galleryCaption').goTo(this.currentItem-1);
      this.$numers.data('galleryCaption').goTo(this.currentItem-1);
      this.thumbGo(this.currentItem-1);
    },
    

    
    sharrre: function ($target) {
      var url = window.location.href;
      url = url.replace(/[^\/]*$/, '1'); // always to point first image in gallery
      var imgBaseUrl = this.imgBaseUrl;
      $('#facebook_share', $target).sharrre({
        share: {
          facebook: true
        },
        template: '&nbsp;',
        enableHover: false,
        //enableTracking: true,
        click: function (api, options) {
          api.openPopup('facebook');
          $(document).trigger("galleryBrandedSharrreClick");
          $(document).trigger("galleryBrandedSharrreClickFacebook");
        },
        url: url,
        enableCounter: false
      });
      $('#twitter_share', $target).sharrre({
        share: {
          twitter: true
        },
        template: '&nbsp;',
        enableHover: false,
        //enableTracking: true,
        click: function (api, options) {
          api.openPopup('twitter');
          $(document).trigger("galleryBrandedSharrreClick");
          $(document).trigger("galleryBrandedSharrreClickTwitter");
        },
        url: url,
        enableCounter: false
      });
      $('#gplus_share', $target).sharrre({
        share: {
          googlePlus: true
        },
        template: '&nbsp;',
        enableHover: false,
        //enableTracking: true,
        click: function (api, options) {
          api.openPopup('googlePlus');
          $(document).trigger("galleryBrandedSharrreClick");
          $(document).trigger("galleryBrandedSharrreClickGplus");
        },
        url: url,
        urlCurl: '/gpluscount/' + Base64.encode(url).replace('/', ','),
        enableCounter: false
      });
      $('#whatsapp_share', $target).sharrre({
        share: {
          whatsapp: true
        },
        template: '&nbsp;',
        enableHover: false,
        //enableTracking: true,
        click: function (api, options) {
          api.openPopup('googlePlus');
          $(document).trigger("galleryBrandedSharrreClick");
          $(document).trigger("galleryBrandedSharrreClickGplus");
        },
        enableCounter: false
    /*
        buttons: {
          whatsapp: {
            utmTracking: {
              site: 'yasmina'
            }
          }
        }
        */
      });
    }

    
    

  });

  return MediaGallryBrandedView;

}

);