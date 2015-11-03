/*
 *
 * Get data from UAParser
 * & Set device type in <html class=mobile OR desktop for ads
 * & Set what is visitor device ua-visitor-device-..
 *
 */

if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function() {};

(function() {

    var uaPrs = new UAParser();
    var ua = uaPrs.getResult();
    ua.css = {};
    var html = document.getElementsByTagName("html")[0];
    
    /*    
     * CUSTOM DEVICES SUPPORT
     */
    var nua = navigator.userAgent;
    // Samsung S5 S6
    if (nua.match(/sm-g9/i)) {
      ua.device.type = "mobile";
    }

    try {
        ua.css.osv = parseInt(ua.os.version);
        html.className = html.className + (" ua-os-version-" + ua.css.osv);
    } catch (e) {}

    try {
        ua.css.osn = ua.os.name.toLowerCase().replace(/ /g, "_");
        html.className = html.className + (" ua-os-name-" + ua.css.osn);
    } catch (e) {}

    try {
        ua.css.bwv = parseInt(ua.browser.major);
        html.className = html.className + (" ua-browser-version-" + ua.css.bwv);
    } catch (e) {}

    try {
        ua.css.bwn = ua.browser.name.toLowerCase().replace(/ /g, "_");
        html.className = html.className + (" ua-browser-name-" + ua.css.bwn);
    } catch (e) {}

    try {
        ua.css.dem = ua.device.model.toLowerCase().replace(/ /g, "_");
        html.className = html.className + (" ua-device-" + ua.css.dem);

    } catch (e) {}
    

    /*
     * set device (desktop || mobile)
     *
     * if device.type not set use defaultDevice
     * if device.type = tablet use defaultDevice
     * if device.type = mobile use mobile
     */

    try {

        var defaultDevice;

        if (ua.device.type) {
            ua.css.typ = ua.device.type.toLowerCase().replace(/ /g, "_");
        } else {
            defaultDevice = "desktop";
        }

        // get/print visitor device
        html.className = html.className + (" ua-visitor-device-" + ua.css.typ);

        // set/print for Ads and for UI/css (mobile OR desktop)
        if (defaultDevice == "desktop" || ua.css.typ == "desktop") {
            html.className = html.className + (" ua-type-desktop");
            html.className = html.className + (" desktop");
        }
        if (ua.css.typ == "tablet") {
            html.className = html.className + (" ua-type-desktop");
            html.className = html.className + (" desktop");
        }
        if (ua.css.typ == "mobile") {
            html.className = html.className + (" ua-type-mobile");
            html.className = html.className + (" mobile");
        }

    } catch (e) {
        console.log(e);
    }

    /*
     * debug
     *
     */
    if (location.hash === "#uadebug") {
        alert( $('html').attr("class"));
        //console.log(JSON.stringify(ua));
        //console.log("device not defined: " + !ua.device.type);
        //console.log("ua-parser original device type: " + ua.css.typ);
    }

})();
