'use strict';

define([
  'models/media-gallery',
  //
  'jquery'
], function (
        MediaGalleryItemModel
        ) {

  var MediaGallryBrandedView = Backbone.View.extend({
    
    initialize: function (attributes) {
      this.$elem = attributes.$elem;
      this.collection = new Backbone.Collection([], {model: MediaGalleryItemModel});
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
      console.log(this.collection);
    }

  });

  return MediaGallryBrandedView;

}

);