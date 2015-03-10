"use strict";

define([], function() {
  var pollPost = Backbone.Model.extend({
    appApiUrl: window.appApiUrl,
    appApiKey: window.appApiKey,
    votingDelay: 99999,
    //browserFingerprint: new Fingerprint({canvas: true, ie_activex: true, screen_resolution: true}).get(),
    browserFingerprint: Math.floor((Math.random() * 10000) + 1),
    initialize: function(attributes, options) {
      this.url = this.appApiUrl + "polls.json/" + attributes.pollId + "/answer/" + attributes.answerId + "?api_key=" + this.appApiKey;
      this.set('browserFingerprint', this.browserFingerprint);
      this.set('delay', attributes.delay);
      this.url2 = this.appApiUrl + "polls.json/" + attributes.pollId + "/result" + "?api_key=" + this.appApiKey;
    },
    fetch2: function(options){
      this.url = this.url2;
      this.fetch(options);
    }
  });
  return pollPost;
});
