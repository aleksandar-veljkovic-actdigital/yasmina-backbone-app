// MODELS/MEDIA-GALLERY-ITEM

"use strict";

define([], function() {
  var MediaGalleryItem = Backbone.Model.extend({
    defaulst: {
      title: "",
      img: "//:0",
      caption: ""
    }
  });
  return MediaGalleryItem;
});