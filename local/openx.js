if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function() {};

var OpenxObj = function() {
    this.oxAsync = "";
    this.oxSync = "";
    this.addPage = {};
    this.adUnitGroup = "";
    this.oxVar = [];
    this.deviceType = "";
    this.positionDeviceAdId = []; // div id | device | unitId
    this.componentDeviceAdId = [];
    this.componentAdCounter = 0;
    this.elementIdPlaceholder = "-holder";

    var dd = function(toDebug){
      if( window.console && window.console.log && window.location.hash === "#debug" ) {
        console.log(toDebug);
      }
    };

    this.asyncAdUnitsRender = function() {
        var jsText = "";
        this.hideEmptyAdSlots(this.deviceType);

        if (this.adUnitGroup !== undefined) {
            jsText = 'var ' + this.oxAsync + ' = OX();';
            // get openx vars
            for (var i = 0; i < this.oxVar.length; i++) {
                var oxVar = this.oxVar[i];
                jsText += this.oxAsync + '.addVariable(\"' + oxVar[0] + '\", \"' + oxVar[1] + '\");';
            }
            // based on device set OpenX: AddPage Id
            jsText += this.oxAsync + '.addPage(\"' + this.adUnitGroup + '\");';
            // render adunits
            for (var j = 0; j < this.positionDeviceAdId.length; j++) {
                var ad = this.positionDeviceAdId[j];

                if (ad[1] == this.deviceType && ad[3] == 'async') {
                    jsText += this.oxAsync + '.addAdUnit(\"' + ad[2] + '\");';
                    jsText += this.oxAsync + '.setAdUnitSlotId(\"' + ad[2] + '\", \"' + ad[0] + '\");';
                }
            }
            // load ads
            jsText += this.oxAsync + '.load();';

            // write openx ad call to DOM
            var a = document.createElement('script');
            a.type = 'text/javascript';
            a.async = true;
            //a.id = 'openxasyncads';
            a.text = jsText;
            document.body.appendChild(a);
        }
    };

    this.asyncAdControlRender = function(adUnitElementId, elementIdNum) {
        var jsText = "";
        var ads = this.componentDeviceAdId;
        var _elementIdNum = elementIdNum;

        dd(ads.length);
        if (ads.length > 0) {
            jsText = 'var ' + this.oxAsync + ' = OX();';
            jsText += this.oxAsync + '.addPage(\"' + this.adUnitGroup + '\");';
            // set ox var
            for (var i = 0; i < this.oxVar.length; i++) {
                var oxVar = this.oxVar[i];
                jsText += this.oxAsync + '.addVariable(\"' + oxVar[0] + '\", \"' + oxVar[1] + '\");';
            }
            // loop component adunits
            if (ads.length != this.componentAdCounter) {
                jsText += this.oxAsync + '.addAdUnit(\"' + ads[this.componentAdCounter] + '\");';
                jsText += this.oxAsync + '.setAdUnitSlotId(\"' + ads[this.componentAdCounter] + '\", \"' + adUnitElementId + '-' + _elementIdNum + '\");';
            } else {
                this.componentAdCounter = 0; // reset ad array, start from 0 ad unit
                jsText += this.oxAsync + '.addAdUnit(\"' + ads[this.componentAdCounter] + '\");';
                jsText += this.oxAsync + '.setAdUnitSlotId(\"' + ads[this.componentAdCounter] + '\", \"' + adUnitElementId + '-' + _elementIdNum + '\");';
            }

            jsText += this.oxAsync + '.load();';

            (new Function(jsText))();
            this.componentAdCounter++; //@TODO
            dd('>>> ' + jsText);
        }
    };

    this.syncAdFetchCall = function() {
        if (this.adUnitGroup !== undefined) {
            var device = this.deviceType;
            var jsText = "";

            jsText += 'var ' + this.oxSync + ' = OX();';
            jsText += this.oxSync + '.addPage(\"' + this.adUnitGroup + '\");';

            for (var i = 0; i < this.oxVar.length; i++) {
                var oxVar = this.oxVar[i];
                jsText += this.oxSync + '.addVariable(\"' + oxVar[0] + '\", \"' + oxVar[1] + '\");';
            }

            jsText += this.oxSync + '.fetchAds();';

            var a = document.createElement('script');
            a.type = 'text/javascript';
            //a.id = 'openxsyncads';
            a.text = jsText;
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(a, s); //document.head.appendChild(a);
        }
    };

    this.syncAdRender = function(adPosition) {
        var device = this.deviceType;
        if (this.adUnitGroup !== undefined) {
            for (var j = 0; j < this.positionDeviceAdId.length; j++) {
                var ad = this.positionDeviceAdId[j];

                if (ad[1] == this.deviceType && ad[0] == adPosition) {
                    (new Function(this.oxSync + '.showAdUnit(\"' + ad[2] + '\");'))();
                }
            }
        }
    };

    this.setDevice = function() {
        if (device.mobile() || (document.getElementsByTagName('html')[0].className.indexOf('ua-type-mobile') > -1)) {

            this.deviceType = "mobile";
        }
        else {
            this.deviceType = "desktop";
        }
        if(window.location.hash==="#debug"){
          console.log("OX Device :: " + this.deviceType);
        }
        if(window.location.hash==="#oxdevice"){
          alert(this.deviceType);
        }
    };

    this.setAddPageId = function() {
        this.adUnitGroup = this.addPage[this.deviceType];
    };

    this.prepareAdsArrayForComponents = function(adArray) {
        var ads = [];
        var adsCounter = 0;

        $.each(adArray, function(key, value) {
            if (value.status == "Active") {
                ads[adsCounter] = value.id;
                adsCounter++;
            }
        });
        return ads;
    };

    this.hideEmptyAdSlots = function(deviceType) { // @TODO - optimize Fn
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

    this.diffArray = function(a, b) {
        var seen = [],
            diff = [];
        for (var i = 0; i < b.length; i++)
            seen[b[i]] = true;
        for (var e = 0; e < a.length; e++)
            if (!seen[a[e]])
                diff.push(a[e]);
        return diff;
    };

    this.getDataFromOpenxAPI = function() {
        if (this.adUnitGroup !== undefined) {
            var self = this;
            var timer = new Date().getTime();
            $.ajax({
                type: "GET",
                dataType: "JSON",
                url: "/ox/adunitgroup/" + this.adUnitGroup,
                success: function(data) {
                    dd('objOpenX - API success in ' + parseInt((new Date().getTime() - timer)/1000) + "sec");
                    if (data !== null) {
                        self.componentDeviceAdId = self.prepareAdsArrayForComponents(data.objects);
                    }
                },
                error: function(xhr, status, errorThrown) {
                    dd("Error: " + errorThrown);
                    dd("Status: " + status);
                    dd(xhr);
                }
            });
        }
    };

    this.init = function() {
        this.setDevice();
        this.setAddPageId();
        this.debugObj();
    };

    this.debugObj = function() {
        dd('objOpenX :' + JSON.stringify(this));
    };
};