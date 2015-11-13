/*
 * set viewport based on device
 */

//scale vport for tablet device @ 0.6
if ($('html').hasClass('ua-type-tablet') || $('html').hasClass('ua-visitor-device-tablet')) {
  if ($('html').hasClass('ua-os-name-ios')) {
    $('meta[name=viewport]').attr('content', 'initial-scale=0.6, width=1072');
  }
  else {
    var screenW = (screen.width > screen.height) ? screen.height : screen.width;
    var siteW = 1100;
    var scale = (screenW / siteW);
    $('meta[name=viewport]').attr('content', 'width=' + siteW + ', user-scalable=1, initial-scale=' + scale);
  }
}