(function() {
  
  var uaPrs = new UAParser();
  var ua = uaPrs.getResult();
  ua.css = {};
  var html = document.getElementsByTagName("html")[0];

  try {
    ua.css.osv = parseInt(ua.os.version);
    html.className = html.className + (" ua-os-version-" + ua.css.osv);
  } catch (e) {
  }

  try {
    ua.css.osn = ua.os.name.toLowerCase().replace(/ /g, "_");
    html.className = html.className + (" ua-os-name-" + ua.css.osn);
  } catch (e) {
  }

  try {
    ua.css.bwv = parseInt(ua.browser.major);
    html.className = html.className + (" ua-browser-version-" + ua.css.bwv);    
  } catch (e) {
  }

  try {
    ua.css.bwn = ua.browser.name.toLowerCase().replace(/ /g, "_");
    html.className = html.className + (" ua-browser-name-" + ua.css.bwn);
  } catch (e) {
  }

  try {
    ua.css.dem = ua.device.model.toLowerCase().replace(/ /g, "_");
    html.className = html.className + (" ua-device-" + ua.css.dem);
  } catch (e) {
  } 
  
  try {
    ua.css.typ = ua.device.type.toLowerCase().replace(/ /g, "_");
    html.className = html.className + (" ua-type-" + ua.css.typ);
  } catch (e) {
  } 

  if (location.hash === "#uadebug") {
    alert(html.className);
  }
  
})();