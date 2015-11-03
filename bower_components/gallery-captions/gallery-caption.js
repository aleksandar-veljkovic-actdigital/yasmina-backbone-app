;
(function($) {

  $.fn.galleryCaption = function(set) {

    var set = set || {};
    var $this = $(this);
    var rreturn = {};
    var $active = null;
    //set.autoHeight

    // RTL
    if (set.rtl) {
      var itemNo = 0;
      $this.children().each(function(i, o) {
        var $o = $(o);
        $o.addClass("item-no-" + itemNo);
        $o.data("no", itemNo);
        itemNo++;
        $($o.parent()).prepend($o);
      });
    }


    var $items = $this.children();
    $this.css({position: "relative"});
    $items.css({opacity: 0, zIndex: -1, position: "absolute", transition: "opacity .2s"});

    if (!set.autoHeight) {
      var maxH = 0;
      $items.each(function() {
        var h = $(this).outerHeight(true);
        if (h > maxH) {
          maxH = h;
        }
      });
      $this.css({height: maxH});
    } else {
      $this.css({
        transition: 'height .2s'
      });
      $(window).resize(function () {
        if ($active) {
          var h = $active.outerHeight(true);
          $this.css('height', h);
        }
      });
    }
    
    rreturn.goTo = function(itemNo) {
      if (itemNo === -1 || itemNo === false) {
        $items.css({opacity: 0, zIndex: -1}).removeClass("active");
      } else {
        $active = $items.eq(itemNo);
        $items.css({opacity: 0, zIndex: -1}).removeClass("active");
        $active.css({opacity: 1, zIndex: 1}).addClass("active");
      }
      if (set.autoHeight && $active) {
        var h = $active.outerHeight(true);
        $this.css('height', h);
      }
    };

    $this.data('galleryCaption', {goTo: rreturn.goTo});


    rreturn.goTo(0);

    return rreturn;
  };

})(jQuery);