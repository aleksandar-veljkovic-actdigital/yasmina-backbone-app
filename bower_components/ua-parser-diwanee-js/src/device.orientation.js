/*
 * Device orientation js
 *
 * Get/ Set device orientation
 * on resize or on orientation change
 * print <html class ..
 *
 */

(function() {

  var documentElement = window.document.documentElement;

  // Check if documentElement already has a given class.
  hasClass = function(className) {
    var regex;
    regex = new RegExp(className, 'i');
    return documentElement.className.match(regex);
  };

  // Add one or more CSS classes to the <html> element.
  addClass = function(className) {
    if (!hasClass(className)) {
      documentElement.className = documentElement.className.trim() + " " + className;
    }
  };

  // Remove single CSS class from the <html> element.
  removeClass = function(className) {
    if (hasClass(className)) {
      documentElement.className = documentElement.className.replace(" " + className, "");
    }
  };

  // Orientation Handling
  isPortrait = function() {
    return (window.innerHeight / window.innerWidth) > 1;
  };

  isLandscape = function() {
    return (window.innerHeight / window.innerWidth) < 1;
  };

  // Handle device orientation changes.
  handleOrientation = function() {
    if (isLandscape()) {
      removeClass("portrait");
      addClass("landscape");
    } else {
      removeClass("landscape");
      addClass("portrait");
    }
    return;
  };

  /*
  * Detect whether device supports orientationchange event,
  * otherwise fall back to the resize event.
  *
  */
  if (window.hasOwnProperty("onorientationchange")) {
    orientationEvent = "orientationchange";
  } else {
    orientationEvent = "resize";
  }

  // Listen for changes in orientation.
  if (window.addEventListener) {
    window.addEventListener(orientationEvent, handleOrientation, false);
  } else if (window.attachEvent) {
    window.attachEvent(orientationEvent, handleOrientation);
  } else {
    window[orientationEvent] = handleOrientation;
  }

  //init
  handleOrientation();

})();
