'use strict';

define([
  'models/media-gallery',
  'text!templates/media-gallery-branded-layout.html.tpl',
  //
  'jquery',
  'slick',
  'caption',
  'iscroll'
], function (
        MediaGalleryItemModel,
        templateLayout
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
          caption: $(".mg-capt", o).html().trim(),
          thumb: _this.thumborThumb($(".mg-img", o).attr('src'))
        };
        _this.collection.add(new MediaGalleryItemModel(data));
      });
    },
    
    thumborThumb: function(src) {
      var thumborConfig = $.extend(true, {}, window.appThumborConfig, {thumbor: {
          hasResize: true, 
          hasTrim: false, 
          isSmart: true,
          resizeWidth: "188",
          resizeHeight: "188"
      }});      
      var data = {
        hash: src.split('/').pop().split(".")[0]
      };
      var thumbor = new thumborUrlBuilder(thumborConfig);
      thumbor.setAmazonUrlPath(thumborConfig.amazonS3Path, data);
      var url = thumbor.finalUrl();
      return url;
    },
    
    thumborHiRes: function(src) {
      var thumborConfig = $.extend(true, {}, window.appThumborConfig, {thumbor: {
          hasResize: false, 
          hasTrim: false, 
          isSmart: false,
          fitIn: {E:2000,F:2000}
      }});  
    
      delete thumborConfig.resizeWidth;
      delete thumborConfig.resizeHeight;
      
      var data = {
        hash: src.split('/').pop().split(".")[0]
      };
      var thumbor = new thumborUrlBuilder(thumborConfig);
      thumbor.setAmazonUrlPath(thumborConfig.amazonS3Path, data);
      var url = thumbor.finalUrl();
      return url;
    },
    
    
    
    renderDesk: function () {   
      var layoutTpl = _.template(templateLayout);
      this.$layout = $(layoutTpl());
      this.$layout.css('opacity', 0.001).addClass('render desktop');
      this._render();    
      this.fullScreen();
      this.bindings();  
      this.$layout.css('opacity', 1).addClass('initialized');
     },
    
    
    renderTab: function(){
      var layoutTpl = _.template(templateLayout);
      this.$layout = $(layoutTpl());
      this.$layout.css('opacity', 0.001).addClass('render tablet');
      this._render();    
      this.fullScreen();
      this.bindings();  
      this.$layout.css('opacity', 1).addClass('initialized');
    },

    renderMob: function () {
      var layoutTpl = _.template(templateLayout);
      this.$layout = $(layoutTpl());
      this.$layout.css('opacity', 0.001).addClass('render mobile');
      this._render();    
      this.fullScreen();
      this.bindings();  
      this.$layout.css('opacity', 1).addClass('initialized');
    },
    
    _render: function () {      
      var thumbsRdr = "";
      var itemsRdr = "";
      var captRdr = "";
      var numersRdr = "";
      var clength = this.collection.length;
      this.collection.each(function (item, i) {
        if (item.get('type') === 'item') {
          captRdr += "<div class='mgb-caption'><h3><span class='ui'></span><span class='tx'>" + item.attributes.title + "</span></h3><p>" + item.attributes.caption + "</p></div>";
          itemsRdr += '<div class="item"><div class="img-w"><img  src="' + item.attributes.img + '" alt="" /><a href="#" class="zoom"></a></div></div>';
          thumbsRdr += '<a href="#" class="mgb-thumb"><img  src="' + item.attributes.thumb + '" alt="" /><span>' + ((i < 9) ? "0" + (i + 1) : (i + 1)) + '</span></a>';
          numersRdr += "<div class='mgb-numer'><div class='num'>" + (i + 1) + "/" + clength + "</div></div>";
        }
      });
      this.$captions = $("<div class='mgb-captions'>" + captRdr + "</div>");
      this.$slider = $("<div class='mgb-slider'>" + itemsRdr + "</div>");
      this.$thumbs = $("<div class='mgb-thumbs'>" + thumbsRdr + "</div>");
      this.$numers = $("<div class='mgb-numers'>" + numersRdr + "</div>");
      this.$share = $('<div class="mgb-share"><div id="facebook_share" class="share_btn" ></div><div id="twitter_share" class="share_btn" ></div><div id="gplus_share" class="share_btn" ></div><div id="whatsapp_share" class="share_btn" ></div></div>');
      $('.mgb-slider-w', this.$layout).append(this.$slider);
      $('.mgb-captions-w', this.$layout).append(this.$captions);
      $('.mgb-thumbs-w', this.$layout).append(this.$thumbs);
      $('.mgb-numers-w', this.$layout).append(this.$numers);
      $('.mgb-share-w', this.$layout).append(this.$share); 
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
        initialSlide: this.currentItem - 1,
        adaptiveHeight: true
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
    },

 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  


    // B I N D I N G S
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
      $('.mgb-caption', this.$layout).on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var $parent = $this.parents('.mgb-captions-w');
        if ($parent.hasClass('opened')) {
          $parent.removeClass('opened');
          $('.mgb-footer', $this.$layout).removeClass('opened');
        }
        else {
          $parent.addClass('opened');
          $('.mgb-footer', $this.$layout).addClass('opened');
        }
      });
      // thumbs toggle
      $('.mgb-thumbs-button, .mgb-thumbs-close', this.$layout).on('click', function (e) {
        e.preventDefault();
        var $o = _this.$layout;
        if ($o.hasClass('thumbs')) {
          $o.removeClass('thumbs');
        }
        else {
          $o.addClass('thumbs');
        }
        var interval;
        interval = setInterval(function () {
          _this.$slider.slick('setPosition');
          _this.$thumbs.iscroll.refresh();
          _this.thumbGo(_this.currentItem - 1);
        }, 25);
        setTimeout(function () {
          clearInterval(interval);
        }, 1000);
      });
      // thumb click
      var $thumbItems = this.$thumbs.find('.mgb-thumb');
      $thumbItems.on('click', function (e) {
        e.preventDefault();
        var position = $thumbItems.index(this);
        _this.$slider.slick('slickGoTo', position);
        if (_this.$layout.hasClass('tablet') || _this.$layout.hasClass('mobile')) {
          $('.mgb-thumbs-close', this.$layout).trigger('click');
        }
      });
      // thumbs up/down

      $('#mgb-thumbs-up', this.$layout).on('touchstart mousedown', function (e) {
        $(this).addClass('scroll');
        _this.$thumbs.iscroll.scrollBy(0, 100, 300);
      });
      $('#mgb-thumbs-dw', this.$layout).on('touchstart mousedown', function (e) {
        $(this).addClass('scroll');
        _this.$thumbs.iscroll.scrollBy(0, -100, 300);
      });

      $('#mgb-thumbs-up', this.$layout).on('touchend mouseup mouseleave', function (e) {
        $(this).removeClass('scroll');
      });
      $('#mgb-thumbs-dw', this.$layout).on('touchend mouseup mouseleave', function (e) {
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
      $('#mgb-thumbs-up, #mgb-thumbs-dw', this.$layout).on('click', function (e) {
        e.preventDefault();
      });
      // HI RES
      $('.zoom', this.$layout).on('click', function (e) {
        e.preventDefault();
        var src = $(this).parent('.img-w').children('img').attr('src');       
        var dest = _this.thumborHiRes(src);
        var $hiRes = $("<div class='mgb-hi-res'><a href='#' class='mgb-hi-res-close'></a><img src='"+dest+"'></div>");
        _this.$layout.append($hiRes); 
        $('.mgb-hi-res-close', $hiRes).one('click', function (e) {
          e.preventDefault();
          $('.mgb-hi-res', this.$layout).remove();
        });       
      });

      
      
    }





    

  });
  
  return MediaGallryBrandedView;

}

);