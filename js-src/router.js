"use strict";

define([
  'backbone'
], function(
        Backbone
        ) {

  var Router = Backbone.Router.extend({
    routes: {
      //"media-gallery/:id": "mediaGalleryIdRedirect",
      "media-gallery/:id/:pos": "mediaGallery",
      "media-gallery-branded/:id/:pos": "mediaGalleryBranded",
      //"_bb_": "clearState",
      "*other": "defaultRoute"
    },
    initialize: function() {
      /*
       * Wiews without link
       */
      backboneApp.poll = {};
      $('.w__poll--left').each(function(i, o) {
        require(['views/poll'], function(poll) {
          var pollId = $(o).data('poll-id');
          var poll = new poll({
            pollId: pollId,
            $elem: $(o),
            thumbor: {
              resizeWidth: '342',
              resizeHeight: '230'
            }
          });
          backboneApp.poll["asside-" + i] = {};
          backboneApp.poll["asside-" + i].view = poll;
        });
      });
      $('.w__poll--right').each(function(i, o) {
        require(['views/poll'], function(poll) {
          var pollId = $(o).data('poll-id');
          var poll = new poll({
            pollId: pollId,
            $elem: $(o),
            thumbor: {
              resizeWidth: '468',
              resizeHeight: '340'
            }
          });
          backboneApp.poll["all-" + i] = {};
          backboneApp.poll["all-" + i].view = poll;
        });
      });
    },
    mediaGallery: function(id, currentItem) {
      currentItem = currentItem || 1;
      require(['views/media-gallery'], function(mediaGalleryView) {
        if (backboneApp.mediaGallery) {
          backboneApp.mediaGallery.afterMoveUnhashedOnce = true;
          backboneApp.mediaGallery.owlSliderGoTo(currentItem);
          return;
        }
        var $elem = $('.media-gallery-' + id);
        backboneApp.mediaGallery = new mediaGalleryView({$elem: $elem, currentItem: currentItem, id: id});
        if (backboneApp.set.device === 'desktop') {
          backboneApp.mediaGallery.parse();
          backboneApp.mediaGallery.render();
        } else if (backboneApp.set.device === 'tablet') {
          backboneApp.mediaGallery.viewportRollBack = $('meta[name=viewport]').attr("content");      
          backboneApp.mediaGallery.parseTab();
          backboneApp.mediaGallery.renderTab();
        } else {
          backboneApp.mediaGallery.parseMob();
          backboneApp.mediaGallery.renderMob();
        }
      });
    },
    
    
    mediaGalleryBranded: function(id, currentItem) {
      currentItem = currentItem || 1;
      require(['views/media-gallery-branded'], function(mediaGalleryBrandedView) {
        var $elem = $('.media-gallery-branded' + id);
        backboneApp.mediaGalleryBranded = new mediaGalleryBrandedView({$elem: $elem, currentItem: currentItem, id: id});        
        if (backboneApp.set.device === 'tablet') { 
          backboneApp.mediaGalleryBranded.viewportRollBack = $('meta[name=viewport]').attr("content"); 
          $('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
        }
      }); 
    },    
    
    
    
    defaultRoute: function() {
      if (backboneApp.mediaGallery) {
        if(backboneApp.mediaGallery.viewportRollBack){
          $('meta[name=viewport]').attr("content", backboneApp.mediaGallery.viewportRollBack);
          location = window.location.protocol + '//' + window.location.host + location.pathname;
          return;
        }
        backboneApp.mediaGallery.undelegateEvents();
        backboneApp.mediaGallery.close();
        delete backboneApp.mediaGallery;
      }
      
      if (backboneApp.mediaGalleryBranded) {
        if(backboneApp.mediaGalleryBranded.viewportRollBack){
          $('meta[name=viewport]').attr("content", backboneApp.mediaGalleryBranded.viewportRollBack);
        }
        backboneApp.mediaGalleryBranded.close();
        delete backboneApp.mediaGalleryBranded;
      }
    }

  });

  return {
    initialize: function() {
      var router = new Router();
      Backbone.history.start();
      //Backbone.history.start({ pushState: true });
      return {router: router};
    }
  };




});