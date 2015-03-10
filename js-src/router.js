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
      "_bb_": "clearState",
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
    clearState: function() {
      // not supported ie8, ie9, android 4.1
      // Older iOS versions and Android 4.0.4 claim support, but implementation is too buggy to be useful.
      if (window.history && window.history.pushState) {
        history.pushState('', document.title, window.location.pathname);
      }
    },
    mediaGallery: function(id, currentItem) {
      currentItem = currentItem || 0;
      dbg('Router: media-gallery/' + id + "/" + currentItem);
      require(['views/media-gallery'], function(mediaGalleryView) {
        dbg(backboneApp.mediaGallery);
        if (backboneApp.mediaGallery) {
          dbg('backboneApp.mediaGallery alredy initialized');
          backboneApp.mediaGallery.afterMoveUnhashedOnce = true;
          backboneApp.mediaGallery.owlSliderGoTo(currentItem);
          return;
        }
        dbg(backboneApp.mediaGallery);
        var $elem = $('.media-gallery-' + id);
        backboneApp.mediaGallery = new mediaGalleryView({$elem: $elem, currentItem: currentItem, id: id});
        if (backboneApp.set.device === 'desktop') {
          backboneApp.mediaGallery.parse();
          backboneApp.mediaGallery.render();
        } else {
          backboneApp.mediaGallery.parseMob();
          backboneApp.mediaGallery.renderMob();
        }
      });
    },
    defaultRoute: function() {
      if (backboneApp.mediaGallery) {
        backboneApp.mediaGallery.undelegateEvents();
        backboneApp.mediaGallery.close();
        delete backboneApp.mediaGallery;
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