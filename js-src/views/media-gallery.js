// views/media-gallery.js
'use strict';
//(function() {

define([
  'models/media-gallery',
  'text!templates/media-gallery-social-share.html.tpl',
  'text!templates/media-gallery-layout.html.tpl',
  'text!templates/media-gallery-layout-mob.html.tpl',
  'text!templates/media-gallery-layout-tab.html.tpl',
  'text!templates/media-gallery-item.html.tpl',
  'text!templates/media-gallery-related.html.tpl',
  //
  'jquery',
  'owl',
  'owlRtl',
  'fullScreen',
  'caption',
  'sharrre'
          //'sharrre'
], function(
        MediaGalleryItemModel,
        templateSocial,
        templateLayout,
        templateLayoutMob,
        templateLayoutTab,
        templateItem,
        templateRelated
        ) {

  var gPlusSharePhp = backboneApp.set.sharrrePhpProxyh;
  var MediaGallryView = Backbone.View.extend({
    imgBaseUrl: backboneApp.set.imgBaseUrl,
    $fullScreen: $(),
    $layout: $(),
    $slider: $(),
    $captions: $(),
    $social: $(),
    $titles: $(),
    $numers: $(),
    bannerVars: {},
    currentItem: null,
    id: null,
    afterMoveUnhashedOnce: false,
    owlSliderGoTo: function(num) {
      // // will be difined after slider init
    },
    initialize: function(attributes) {
      this.bannerVars = {
        topTrigger: window.backboneApp.set.gallery.adTopTrigger,
        topCounter: window.backboneApp.set.gallery.adTopTrigger,
        overTrigger: window.backboneApp.set.gallery.adOverTrigger,
        overCounter: 1
      };
      this.collection = new Backbone.Collection([], {model: MediaGalleryItemModel});
      this.$elem = attributes.$elem;
      this.currentItem = attributes.currentItem || 1;
      this.id = attributes.id;
    },
    parseRelated: function() {
      var _this = this;
      if ($('.mg-related .mg-related-item', _this.$elem).length > 0) {
        var relateds = [];
        $('.mg-related .mg-related-item', _this.$elem).each(function(i, o) {
          var data = {
            title: $("h3", o).text(),
            img: $(".mg-related-img", o).attr('src'),
            imgAlt: $(".mg-related-img", o).attr('alt') || "",
            caption: $(".mg-related-capt", o).text(),
            link: $(o).attr('href')
          };
          relateds.push(data);
        });
        _this.collection.add(new Backbone.Model({
          title: "",
          caption: "",
          type: "related",
          articles: relateds
        }));
      }
    },
    parse: function() {
      var _this = this;
      // GET FROM DOM
      $('.mg-item', _this.$elem).each(function(i, o) {
        var data = {
          type: "item",
          title: $("h3", o).text(),
          img: $(".mg-img", o).attr('src'),
          imgAlt: $(".mg-img", o).attr('alt') || "",
          caption: $(".mg-capt", o).html().trim()
        };
        _this.collection.add(new MediaGalleryItemModel(data));
      });
      this.parseRelated();
      this.bindObjects();
    },
    bindObjects: function() {
      var itemTpl = _.template(templateItem);
      var itemsRdr = "";
      var socialTpl = _.template(templateSocial);
      var relatedTpl = _.template(templateRelated);
      var captRdr = "";
      var clength = this.collection.length;
      var titlRdr = "";
      var numersRdr = "";
      this.collection.each(function(item, i) {
        captRdr = "<div class='mg-caption'><p>" + item.attributes.caption + "</p></div>" + captRdr;
        titlRdr = "<div class='mg-title'><h3>" + item.attributes.title + "</h3></div>" + titlRdr;
        numersRdr = "<div class='mg-numer'><div class='num'>" + (i + 1) + "/" + clength + "</div></div>" + numersRdr;
        /*
        if (item.get('type') === 'adv') {
          itemsRdr += "<div class='advert-wrap'><div class='advert' style='height:600px'>&nbsp;</div></div>";
          return true;
        }
        */
        if (item.get('type') === 'item') {
          itemsRdr += itemTpl(item.attributes);
        }
        if (item.get('type') === 'related') {
          itemsRdr += relatedTpl(item.attributes);
        }
      });
      // social
      this.$social = $(socialTpl());
      this.sharrre(this.$social);
      // captions
      this.$captions = $("<div class='mg-captions'>" + captRdr + "</div>");
      this.$captions.galleryCaption({autoHeight: true});
      this.$captions.data('galleryCaption').goTo(-1);
      // titles
      this.$titles = $("<div class='mg-titles'>" + titlRdr + "</div>");
      this.$titles.galleryCaption({autoHeight: true});
      this.$titles.data('galleryCaption').goTo(-1);
      // numeration
      this.$numers = $("<div class='mg-numers'>" + numersRdr + "</div>");
      this.$numers.galleryCaption({autoHeight: true});
      this.$numers.data('galleryCaption').goTo(-1);
      // slider
      this.$slider = $("<div class='mg-slider'>" + itemsRdr + "</div>");
      this.owlSlider(this.$slider);
    },
    render: function() {
      // Layout
      var layoutTpl = _.template(templateLayout);
      var $layout;
      this.$layout = $layout = $(layoutTpl());
      $('.mg-slider-w', $layout).append(this.$slider);
      $('.mg-captions-w', $layout).append(this.$captions);
      $('.mg-titles-w', $layout).append(this.$titles);
      $('.mg-numers-w', $layout).append(this.$numers);
      $('.mg-social-w', $layout).append(this.$social);
      this.fullScreen();
    },
    renderTab: function() {
      // Layout
      var layoutTpl = _.template(templateLayoutTab);
      var $layout;
      this.$layout = $layout = $(layoutTpl());
      $('.mg-slider-w', $layout).append(this.$slider);
      $('.mg-captions-w', $layout).append(this.$captions);
      $('.mg-titles-w', $layout).append(this.$titles);
      $('.mg-numers-w', $layout).append(this.$numers);
      $('.mg-social-w', $layout).append(this.$social);
      this.fullScreen();
    },
    renderMob: function() {
      // Layout
      var layoutTpl = _.template(templateLayoutMob);
      var $layout;
      this.$layout = $layout = $(layoutTpl());
      if ($(window).width() < 540 && $(window).height() < 540) {
        this.$layout.addClass('mobile-small');
      }
      $('.mg-slider-w', $layout).append(this.$slider);
      $('.mg-captions-w', $layout).append(this.$captions);
      $('.mg-titles-w', $layout).append(this.$titles);
      $('.mg-numers-w', $layout).append(this.$numers);
      $('.mg-social-w', $layout).append(this.$social);
      this.fullScreen();
    },
    fullScreen: function() {
      var _this = this;
      
      if(backboneApp.set.device === 'tablet'){
        $('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
      }     
      
      this.fullScreen = this.$layout.fullModal({
        onClose: function() {
          $(window).resize();
          $('#myEmbedTarget').css('width', "");
        },
        aditionalStyle: "body{background-color:black}",
        closeButton: false
      });
      $('.mg-close', this.$layout).click(function(e) {
        e.preventDefault();


        // refresh page, bad display properties baners bug fix
        if (backboneApp.set.device === 'desktop' || backboneApp.set.device === 'tablet') {
          var loadIcon = '<img style="position:absolute;top:50%;left:50%;margin: -50px 0 0 -50px;" src="data:image/gif;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="/>';
          $('#dwf-fullscreen-wrap > *').css('display', 'none');
          $('#dwf-fullscreen-wrap').append($(loadIcon));
          location = window.location.protocol + '//' + window.location.host + location.pathname;
          return;
        }


        if (
                window.navigator.userAgent.indexOf("MSIE 10") > -1
                || window.navigator.userAgent.indexOf("MSIE 9") > -1
                || window.navigator.userAgent.indexOf("MSIE 8") > -1
                ) {
          window.backboneApp.router.navigate("#closed", {trigger: true, replace: true});
          if (window.history) {
            history.replaceState('', document.title, window.location.pathname);
          }
        }
        else {
          if (window.backboneApp.set.gallery.referal) {
            window.backboneApp.router.navigate("#closed", {trigger: true, replace: true});
            if (window.history) {
              history.replaceState('', document.title, window.location.pathname);
            }
          } else {
            window.history.back();
          }
        }
      });
    },
    close: function() {
      this.fullScreen.close();
      this.undelegateEvents();
      this.remove();
    },     
    banner: function() {
      var $layout = this.$layout;
      var v = this.bannerVars;
      var owl = this.$slider.data('owlCarousel');
      var t1 = v.topCounter >= v.topTrigger;
      var t2 = v.overCounter >= v.overTrigger && (backboneApp.set.device === 'mobile' || backboneApp.set.device === 'tablet');
      if (t1) { 
        $('.mg-banner-lb', $layout).html('<div id="ad-gallery-lb" />');
        $('.mg-banner-mpu', $layout).html('<div id="ad-gallery-mpu" />');
        v.topCounter = 0;
      }
      v.topCounter++;      
      

      if (t2) { 
        var $overlayContainer = $('.mg-main', this.$layout);
        var $notation = $('<div class="mg-ad-overlay-notation"></div>');        
        var $overlay = $('<div class="mg-ad-overlay"></div>');
        var $topAd = $('<div id="ad-gallery-mpu">&nbsp;</div>');
        
        var $skip = $('<a class="mg-ad-overlay-skip" href="#"></a>');
        
        $layout.addClass('mg-ad-overlayed');
        $overlay.append($skip).append($notation).append($topAd).appendTo($overlayContainer);
        $skip.click(function(e){
          e.preventDefault();
          $overlay.remove();
          $layout.removeClass('mg-ad-overlayed');
        });       
        v.overCounter = 0;
      }
      v.overCounter++;
      
      
      
      
      
      
      
      
      if (t1 || t2) {
        oxAsyncGallery.asyncAdUnitsRender();
      }
    },    
    sharrre: function($target) {
      var url = window.location.href;
      url = url.replace(/[^\/]*$/, '1'); // always to point first image in gallery
      var imgBaseUrl = this.imgBaseUrl;
      $('#facebook_share', $target).sharrre({
        share: {
          facebook: true
        },
        template: '<a class="box" href="#"><div class="share"><img src="' + imgBaseUrl + 'fbico.png" alt="" /><span>شاركي</span></div><div class="count">{total}</div></a>',
        enableHover: false,
        enableTracking: true,
        click: function(api, options) {
          api.openPopup('facebook');
          $(document).trigger("gallerySharrreClick");
          $(document).trigger("gallerySharrreClickFacebook");
        },
        url: url
      });
      $('#twitter_share', $target).sharrre({
        share: {
          twitter: true
        },
        template: '<a class="box" href="#"><div class="share"><img src="' + imgBaseUrl + 'twitt.png" alt="" /><span>غرّدي</span></div><div class="count">{total}</div></a>',
        enableHover: false,
        enableTracking: true,
        click: function(api, options) {
          api.openPopup('twitter');
          $(document).trigger("gallerySharrreClick");
          $(document).trigger("gallerySharrreClickTwitter");
        },
        url: url
      });
      $('#gplus_share', $target).sharrre({
        share: {
          googlePlus: true
        },
        template: '<a class="box" href="#"><div class="share"><img src="' + imgBaseUrl + 'gplus.png" alt="" /><span>شاركي</span></div><div class="count">{total}</div></a>',
        enableHover: false,
        enableTracking: true,
        click: function(api, options) {
          api.openPopup('googlePlus');
          $(document).trigger("gallerySharrreClick");
          $(document).trigger("gallerySharrreClickGplus");
        },
        url: url,
        urlCurl: '/gpluscount/' + Base64.encode(url).replace('/', ','),
      });
      $('#whatsapp_share', $target).sharrre({
        share: {
          whatsapp: true
        },
        template: '<a class="box" href="#"><div class="share"><img src="' + imgBaseUrl + 'logo-symbol-white.svg" alt="" /><span>شاركي</span></div></a>',
        enableHover: false,
        enableTracking: true,
        buttons: {
          whatsapp: {
            utmTracking: {
              site: 'yasmina'
            }
          }
        },
        click: function(api, options) {
          window.location.href = options.text;
          _gaq.push(['_trackEvent', 'smart-whats-app-share', 'click', 'share']);
        }
      });
    },
    owlSlider: function($target) {
      var _this = this;
      $target.owlCarouselRtl({
        rtlJump: false,
        // Most important owl features
        items: 1,
        itemsCustom: false,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [1111, 1],
        itemsTablet: [1109, 1],
        itemsTabletSmall: false,
        itemsMobile: [980, 1],
        singleItem: true,
        itemsScaleUp: false,
        //Basic Speeds
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1000,
        //Autoplay
        autoPlay: false,
        stopOnHover: false,
        // Navigation
        navigation: true,
        navigationText: ["", ""],
        rewindNav: true,
        scrollPerPage: false,
        //Pagination
        pagination: false,
        paginationNumbers: false,
        // Responsive 
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        // CSS Styles
        baseClass: "owl-carousel",
        theme: "owl-theme",
        //Lazy load
        lazyLoad: false,
        lazyFollow: true,
        lazyEffect: "fade",
        //Auto height
        autoHeight: true,
        //JSON 
        jsonPath: false,
        jsonSuccess: false,
        //Mouse Events
        dragBeforeAnimFinish: true,
        mouseDrag: true,
        touchDrag: true,
        //Transitions
        transitionStyle: false,
        // Other
        addClassActive: true,
        //Callbacks
        beforeUpdate: false,
        afterUpdate: false,
        beforeInit: false,
        afterInit: function() {
          _this.afterInit();
        },
        beforeMove: function() {
          _this.beforeMove();
        },
        afterMove: function() {
          _this.afterMove();
        },
        afterAction: false,
        startDragging: false,
        afterLazyLoad: false
      });
    },
    afterInit: function() {
      var _this = this;
      var owl = this.$slider.data('owlCarousel');
      this.owlSliderGoTo = function(num) {
        owl.goToRtl(num - 1);
      };
      if (this.currentItem != owl.itemsAmount) {
        owl.jumpToRtl(this.currentItem - 1);
      } else {
        this.afterMove();
      }
      this.onResizeBinder();
    },
    onResizeBinder: function() {
      var timeout = false;
      var tthis = this;
      $(window).resize(function() {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
          tthis.onResize();
        }, 300);
      });
      tthis.onResize();
      // disabling owl resize event      
      var owl = this.$slider.data('owlCarousel');
      $(window).unbind('resize', owl.resizer);      
    },
    onResize: function() {
      $('.owl-item', this.$slider).animate({'opacity': 0},0);
      var owl = this.$slider.data('owlCarousel');
      var delta = 0;
      if (this.$layout.hasClass('desktop')) {
        delta = $('.mg-header', this.$layout).outerHeight() + 20;
      }
      else {
        delta = $('.mg-header', this.$layout).outerHeight(true) + 20;
      }
      var h = $(window).height() - delta;
      $('.owl-item .item', this.$slider).css({'height': h + "px"});
//$('.owl-item .advert-wrap', this.$slider).css({'minHeight': h + "px"});
      $('.owl-item .mg-related', this.$slider).css({'minHeight': ((h / 2) + 100) + "px"});
      $('.owl-buttons', this.$slider).css('top', (h / 2) + 'px');
      owl.updateVars();
      $('.owl-item', this.$slider).animate({'opacity': 1},800);
    },
    beforeMove: function(jen, dva) {

    },
    afterMove: function() {
      var owl = this.$slider.data('owlCarousel');
      if (!this.afterMoveUnhashedOnce) {
        window.backboneApp.router.navigate('media-gallery/' + this.id + "/" + owl.currentPositionRtl, {trigger: false, replace: true});
      }
      else {
        this.afterMoveUnhashedOnce = false;
      }
      this.$captions.data('galleryCaption').goTo(owl.currentItem);
      this.$titles.data('galleryCaption').goTo(owl.currentItem);
      this.$numers.data('galleryCaption').goTo(owl.currentItem);
      this.banner();
    }
  });

  return MediaGallryView;

});

//});