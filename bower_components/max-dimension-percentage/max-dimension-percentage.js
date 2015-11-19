;(function($) {

  $.fn.maxDimensionPercentage = function(options) {
    
    var $this = $(this);
    
    options = options || {};  
    options._pct = {};
        
    switch (typeof(options.pct)) {
      case "undefined" :
        options._pct.h = 100;
        options._pct.w = 100;
        break;
      case "number"  :
        options._pct.h = options.pct;
        options._pct.w = options.pct;
        break
      case "object" :
        options._pct.h = options.pct.h || 100;
        options._pct.w = options.pct.w || 100;
        break;      
    }
    
    options.$source = options.$source || $this.offsetParent(); 
        
    $this.addClass('max-dimension-js');
    
    var returns = {};

    returns.process = function() {
      var h = Math.floor(options.$source.height() * (options._pct.h / 100));
      var w = Math.floor(options.$source.width() * (options._pct.w / 100));
      $this.css({maxHeight: h + "px", maxWidth: w + "px"});
    };

    $(document).ready(returns.process);
    $(window).load(returns.process);
    $(window).resize(returns.process);
    returns.process();

    return returns;

  };

})(jQuery);
