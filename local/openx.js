var OpenxObj = function () {
  this.oxJsTagLoaded = (typeof(OX) != "undefined") ? true : false; //true:false - load jstag external openx js lib
  this.oxInstance = "";
  this.oxAsync = '';
  this.oxSync = '';
  this.addPage = {};
  this.adUnitGroup = "";
  this.oxVar = [];
  this.deviceType = "";
  this.positionDeviceAdId = []; // div id | device | unitId | type-async
  this.componentDeviceAdId = [];
  this.componentAdCounter = 0;
  this.elementIdPlaceholder = "-holder";
  this.adUnitWithBckgClass = [];
  this.adMobileUnitWithAdvTitle = []; // div id | width

  var dd = function (toDebug) {
    if (window.console && window.console.log && window.location.hash === "#debug") {
      console.log(toDebug);
    }
  };

  this.runConfig = function () {

    var jsText = "";

    if (this.oxJsTagLoaded && this.adUnitGroup !== undefined) {
      jsText = 'var ' + this.oxInstance + ' = OX();';

      // get openx vars
      for (var i = 0; i < this.oxVar.length; i++) {
        var oxVar = this.oxVar[i];
        jsText += this.oxInstance + '.addVariable(\"' + oxVar[0] + '\", \"' + oxVar[1] + '\");';
      }

      // based on device set OpenX: AddPage Id
      jsText += this.oxInstance + '.addPage(\"' + this.adUnitGroup + '\");';

      //add to page:
      var a = document.createElement('script');
      a.type = 'text/javascript';
      a.id = 'openx-run-config-ads';
      a.text = jsText;
      var ref = document.getElementsByTagName('script')[0];
      ref.parentNode.insertBefore(a, ref);
    }
  };

  this.asyncAdUnitsRender = function () {

    var jsText = "";
    this.hideEmptyAdSlots(this.deviceType);

    if (this.oxJsTagLoaded && this.adUnitGroup !== undefined) {
      var jsText = "";

      // render adunits
      for (var j = 0; j < this.positionDeviceAdId.length; j++) {
        var ad = this.positionDeviceAdId[j];

        if (ad[1] == this.deviceType && ad[3] == 'async') {
          jsText += this.oxInstance + '.setAdUnitSlotId(\"' + ad[2] + '\", \"' + ad[0] + '\");';
        }
      }
      // load ads
      jsText += this.oxInstance + '.load();';

      // write openx ad call to DOM
      var a = document.createElement('script');
      a.type = 'text/javascript';
      a.async = true;
      a.id = 'openx-async-ads';
      a.text = jsText;
      document.body.appendChild(a);
    }
  };

  this.syncAdFetchCall = function () {
    if (this.oxJsTagLoaded && this.adUnitGroup !== undefined) {
      var device = this.deviceType;
      var jsText = "";

      jsText += this.oxInstance + '.fetchAds();';

      var a = document.createElement('script');
      a.type = 'text/javascript';
      a.async = true;
      a.id = 'openx-sync-ads';
      a.text = jsText;
      var ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];
      ref.parentNode.insertBefore(a, ref);
    }
  };

  this.syncAdRender = function (adPosition) {
    var device = this.deviceType;
    if (this.oxJsTagLoaded && this.adUnitGroup !== undefined) {
      for (var j = 0; j < this.positionDeviceAdId.length; j++) {
        var ad = this.positionDeviceAdId[j];

        if (ad[1] == this.deviceType && ad[0] == adPosition) {
          (new Function(this.oxInstance + '.showAdUnit(\"' + ad[2] + '\");'))();
        }
      }
    }
  };

  this.asyncAdControlRender = function (adUnitElementId, elementIdNum) {
    var jsText = "";
    var ads = this.componentDeviceAdId;
    var _elementIdNum = elementIdNum;

    dd(ads.length);

    if (this.oxJsTagLoaded && ads.length > 0) {
      jsText = 'var ' + this.oxInstance + ' = OX();';
      jsText += this.oxInstance + '.addPage(\"' + this.adUnitGroup + '\");';
      // set ox var
      for (var i = 0; i < this.oxVar.length; i++) {
        var oxVar = this.oxVar[i];
        jsText += this.oxInstance + '.addVariable(\"' + oxVar[0] + '\", \"' + oxVar[1] + '\");';
      }
      // loop component adunits
      if (ads.length != this.componentAdCounter) {
        jsText += this.oxInstance + '.setAdUnitSlotId(\"' + ads[this.componentAdCounter] + '\", \"' + adUnitElementId + '-' + _elementIdNum + '\");';
      } else {
        this.componentAdCounter = 0; // reset ad array, start from 0 ad unit
        jsText += this.oxInstance + '.setAdUnitSlotId(\"' + ads[this.componentAdCounter] + '\", \"' + adUnitElementId + '-' + _elementIdNum + '\");';
      }

      jsText += this.oxInstance + '.load();';

      (new Function(jsText))();
      this.componentAdCounter++;
      dd('>>> ' + jsText);
    }
  };

  this.setDevice = function () {
    // Get class name (mobile || desktop) from <html class =...
    if (document.getElementsByTagName('html')[0].className.indexOf('ua-type-mobile') > -1) {
      this.deviceType = "mobile";
    } else {
      this.deviceType = "desktop";
    }

    if (window.location.hash === "#debug") {
      console.log("OX Device :: " + this.deviceType);
    }
    if (window.location.hash === "#oxdevice") {
      alert(this.deviceType);
    }
  };

  this.setAddPageId = function () {
    this.adUnitGroup = this.addPage[this.deviceType];
  };

  this.prepareAdsArrayForComponents = function (adArray) { //@TODO try to use async render on call (no api call)
    var ads = [];
    var adsCounter = 0;

    $.each(adArray, function (key, value) {
      if (value.status == "Active") {
        ads[adsCounter] = value.id;
        adsCounter++;
      }
    });
    return ads;
  };

  this.hideEmptyAdSlots = function (deviceType) {
    var currDeviceElementId = [];
    var otherDeviceElementId = [];
    var hideElementId = [];

    for (var k = 0; k < this.positionDeviceAdId.length; k++) {
      var divId = this.positionDeviceAdId[k];
      if (divId[1] == deviceType) {
        currDeviceElementId.push(divId[0]);
      } else {
        otherDeviceElementId.push(divId[0]);
      }
    }

    hideElementId = this.diffArray(otherDeviceElementId, currDeviceElementId);

    for (var h = 0; h < hideElementId.length; h++) {
      $('#' + hideElementId[h] + this.elementIdPlaceholder).hide();
      dd('hideElementId:  #' + hideElementId[h] + this.elementIdPlaceholder);
    }
  };

  this.diffArray = function (a, b) {
    var seen = [],
      diff = [];
    for (var i = 0; i < b.length; i++)
      seen[b[i]] = true;
    for (var e = 0; e < a.length; e++)
      if (!seen[a[e]])
        diff.push(a[e]);
    return diff;
  };

  this.getDataFromOpenxAPI = function () {
    if (this.oxJsTagLoaded && this.adUnitGroup !== undefined) {
      var self = this;
      var timer = new Date().getTime();
      $.ajax({
        type: "GET",
        dataType: "JSON",
        url: "/ox/adunitgroup/" + this.adUnitGroup,
        success: function (data) {
          dd('objOpenX - API success in ' + parseInt((new Date().getTime() - timer) / 1000) + "sec");
          if (data !== null) {
            self.componentDeviceAdId = self.prepareAdsArrayForComponents(data.objects);
          }
        },
        error: function (xhr, status, errorThrown) {
          dd("Error: " + errorThrown);
          dd("Status: " + status);
          dd(xhr);
        }
      });
    }
  };

  this.setBckgForAds = function (cssClass) {  // @TODO optimise arr
    for (var k = 0; k < this.adUnitWithBckgClass.length; k++) {
      for (var i = 0; i < this.positionDeviceAdId.length; i++) {
        if (this.positionDeviceAdId[i][0] === this.adUnitWithBckgClass[k]
          && this.positionDeviceAdId[i][1] === this.deviceType
          && this.positionDeviceAdId[i][3] != "async") {
          var el = "#" + this.positionDeviceAdId[i][0] + this.elementIdPlaceholder;
          this.chkAdheight(el, cssClass);
        }
      }
    }
  }

  this.chkAdheight = function (adHolder,addToHolderCSSClass) {
    var _chkAdheightInterval = null;

    this.Init = function () {
      _chkAdheightInterval = setInterval(this._chkAdheightIntervalTick, 250);
    };

    this._chkAdheightIntervalTick = function () {
      if ($(adHolder).height() > 4) { //div > 4px height
        console.log('##  Ad-active:  ' + adHolder + '    |   ad-height: ' + $(adHolder).height());
        $(adHolder).addClass(addToHolderCSSClass);
        clearInterval(_chkAdheightInterval);
      }
    };

    this.Init();
  }

  this.setAdvTitleToAdUnits = function () {   /* @TODO optimise code */
    var adHolder, adWidth;

    for (var k = 0; k < this.adMobileUnitWithAdvTitle.length; k++) {
      for (var i = 0; i < this.positionDeviceAdId.length; i++) {
        if (this.positionDeviceAdId[i][1] == "mobile" && this.adMobileUnitWithAdvTitle[k][0] == this.positionDeviceAdId[i][0]) {
          adHolder = "#" + this.positionDeviceAdId[i][0] + this.elementIdPlaceholder;
          adWidth = this.adMobileUnitWithAdvTitle[k][1] + "px";
          this.isAdLoadedThenSetTitle(adHolder,adWidth);
        }
      }
    }
  };

  this.isAdLoadedThenSetTitle = function (adHolder,adWidth) {
    var _chkAdheightInterval = null;
    var advTitleLngAr = "إعلان";

    this.Init = function () {
      _chkAdheightInterval = setInterval(this._chkAdheightIntervalTick, 250);
    };

    this._chkAdheightIntervalTick = function () {
      if ($(adHolder).height() > 4) {
        dd('######## | Ad unit loaded: ' + adHolder + ' : ' + adWidth + '  | size:   w: ' + $(adHolder).width() + ' h:' + $(adHolder).height());
        $(adHolder).prepend('<div class="ad__separator" style="width:'+ adWidth + '" ><p class="ad__separator--txt">' + advTitleLngAr + '</p></div>');
        clearInterval(_chkAdheightInterval);
      }
    };

    this.Init();
  };

  this.init = function () {
    this.oxInstance = 'OX_page';

    if(this.oxAsync != '') {
      this.oxInstance = this.oxAsync;
    }

    this.setDevice();
    this.setAddPageId();
    this.runConfig();
    this.debugObj();
    this.adUnitWithBckgClass = ['ad-above-fold-LB','ad-above-fold-MPU'];
    this.setBckgForAds('ad--active');

    if (this.deviceType == "mobile") {
      this.adMobileUnitWithAdvTitle = [['ad-above-fold-MPU-mobile','300'], ['ad-below-fold-LB','320'], ['ad-below-fold-MPU','300']];
      this.setAdvTitleToAdUnits();
    }
  };

  this.debugObj = function () {
    dd('objOpenX :' + JSON.stringify(this));
  };
};
