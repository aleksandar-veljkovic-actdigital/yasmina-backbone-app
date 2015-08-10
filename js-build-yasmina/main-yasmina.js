//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map;
//     Backbone.js 1.2.0

//     (c) 2010-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(factory) {

  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
  // We use `self` instead of `window` for `WebWorker` support.
  var root = (typeof self == 'object' && self.self == self && self) ||
            (typeof global == 'object' && global.global == global && global);

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define('backbone',['underscore', 'jquery', 'exports'], function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    });

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore'), $;
    try { $ = require('jquery'); } catch(e) {}
    factory(root, exports, _, $);

  // Finally, as a browser global.
  } else {
    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
  }

}(function(root, Backbone, _, $) {

  // Initial Setup
  // -------------

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create local references to array methods we'll want to use later.
  var array = [];
  var slice = array.slice;

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.2.0';

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... this will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback
  // functions to an event; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {};

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Iterates over the standard `event, callback` (as well as the fancy multiple
  // space-separated events `"change blur", callback` and jQuery-style event
  // maps `{event: callback}`), reducing them by manipulating `memo`.
  // Passes a normalized single event name and callback, as well as any
  // optional `opts`.
  var eventsApi = function(iteratee, memo, name, callback, opts) {
    var i = 0, names;
    if (name && typeof name === 'object') {
      // Handle event maps.
      for (names = _.keys(name); i < names.length ; i++) {
        memo = iteratee(memo, names[i], name[names[i]], opts);
      }
    } else if (name && eventSplitter.test(name)) {
      // Handle space separated event names.
      for (names = name.split(eventSplitter); i < names.length; i++) {
        memo = iteratee(memo, names[i], callback, opts);
      }
    } else {
      memo = iteratee(memo, name, callback, opts);
    }
    return memo;
  };

  // Bind an event to a `callback` function. Passing `"all"` will bind
  // the callback to all events fired.
  Events.on = function(name, callback, context) {
    return internalOn(this, name, callback, context);
  };

  // An internal use `on` function, used to guard the `listening` argument from
  // the public API.
  var internalOn = function(obj, name, callback, context, listening) {
    obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
        context: context,
        ctx: obj,
        listening: listening
    });

    if (listening) {
      var listeners = obj._listeners || (obj._listeners = {});
      listeners[listening.id] = listening;
    }

    return obj;
  };

  // Inversion-of-control versions of `on`. Tell *this* object to listen to
  // an event in another object... keeping track of what it's listening to.
  Events.listenTo =  function(obj, name, callback) {
    if (!obj) return this;
    var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
    var listeningTo = this._listeningTo || (this._listeningTo = {});
    var listening = listeningTo[id];

    // This object is not listening to any other events on `obj` yet.
    // Setup the necessary references to track the listening callbacks.
    if (!listening) {
      var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
      listening = listeningTo[id] = {obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0};
    }

    // Bind callbacks on obj, and keep track of them on listening.
    internalOn(obj, name, callback, this, listening);
    return this;
  };

  // The reducing API that adds a callback to the `events` object.
  var onApi = function(events, name, callback, options) {
    if (callback) {
      var handlers = events[name] || (events[name] = []);
      var context = options.context, ctx = options.ctx, listening = options.listening;
      if (listening) listening.count++;

      handlers.push({ callback: callback, context: context, ctx: context || ctx, listening: listening });
    }
    return events;
  };

  // Remove one or many callbacks. If `context` is null, removes all
  // callbacks with that function. If `callback` is null, removes all
  // callbacks for the event. If `name` is null, removes all bound
  // callbacks for all events.
  Events.off =  function(name, callback, context) {
    if (!this._events) return this;
    this._events = eventsApi(offApi, this._events, name, callback, {
        context: context,
        listeners: this._listeners
    });
    return this;
  };

  // Tell this object to stop listening to either specific events ... or
  // to every object it's currently listening to.
  Events.stopListening =  function(obj, name, callback) {
    var listeningTo = this._listeningTo;
    if (!listeningTo) return this;

    var ids = obj ? [obj._listenId] : _.keys(listeningTo);

    for (var i = 0; i < ids.length; i++) {
      var listening = listeningTo[ids[i]];

      // If listening doesn't exist, this object is not currently
      // listening to obj. Break out early.
      if (!listening) break;

      listening.obj.off(name, callback, this);
    }
    if (_.isEmpty(listeningTo)) this._listeningTo = void 0;

    return this;
  };

  // The reducing API that removes a callback from the `events` object.
  var offApi = function(events, name, callback, options) {
    // No events to consider.
    if (!events) return;

    var i = 0, length, listening;
    var context = options.context, listeners = options.listeners;

    // Delete all events listeners and "drop" events.
    if (!name && !callback && !context) {
      var ids = _.keys(listeners);
      for (; i < ids.length; i++) {
        listening = listeners[ids[i]];
        delete listeners[listening.id];
        delete listening.listeningTo[listening.objId];
      }
      return;
    }

    var names = name ? [name] : _.keys(events);
    for (; i < names.length; i++) {
      name = names[i];
      var handlers = events[name];

      // Bail out if there are no events stored.
      if (!handlers) break;

      // Replace events if there are any remaining.  Otherwise, clean up.
      var remaining = [];
      for (var j = 0; j < handlers.length; j++) {
        var handler = handlers[j];
        if (
          callback && callback !== handler.callback &&
            callback !== handler.callback._callback ||
              context && context !== handler.context
        ) {
          remaining.push(handler);
        } else {
          listening = handler.listening;
          if (listening && --listening.count === 0) {
            delete listeners[listening.id];
            delete listening.listeningTo[listening.objId];
          }
        }
      }

      // Update tail event if the list has any events.  Otherwise, clean up.
      if (remaining.length) {
        events[name] = remaining;
      } else {
        delete events[name];
      }
    }
    if (_.size(events)) return events;
  };

  // Bind an event to only be triggered a single time. After the first time
  // the callback is invoked, it will be removed. When multiple events are
  // passed in using the space-separated syntax, the event will fire once for every
  // event you passed in, not once for a combination of all events
  Events.once =  function(name, callback, context) {
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
    return this.on(events, void 0, context);
  };

  // Inversion-of-control versions of `once`.
  Events.listenToOnce =  function(obj, name, callback) {
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
    return this.listenTo(obj, events);
  };

  // Reduces the event callbacks into a map of `{event: onceWrapper}`.
  // `offer` unbinds the `onceWrapper` after it as been called.
  var onceMap = function(map, name, callback, offer) {
    if (callback) {
      var once = map[name] = _.once(function() {
        offer(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
    }
    return map;
  };

  // Trigger one or many events, firing all bound callbacks. Callbacks are
  // passed the same arguments as `trigger` is, apart from the event name
  // (unless you're listening on `"all"`, which will cause your callback to
  // receive the true name of the event as the first argument).
  Events.trigger =  function(name) {
    if (!this._events) return this;

    var length = Math.max(0, arguments.length - 1);
    var args = Array(length);
    for (var i = 0; i < length; i++) args[i] = arguments[i + 1];

    eventsApi(triggerApi, this._events, name, void 0, args);
    return this;
  };

  // Handles triggering the appropriate event callbacks.
  var triggerApi = function(objEvents, name, cb, args) {
    if (objEvents) {
      var events = objEvents[name];
      var allEvents = objEvents.all;
      if (events && allEvents) allEvents = allEvents.slice();
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, [name].concat(args));
    }
    return objEvents;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
    }
  };

  // Proxy Underscore methods to a Backbone class' prototype using a
  // particular attribute as the data argument
  var addMethod = function(length, method, attribute) {
    switch (length) {
      case 1: return function() {
        return _[method](this[attribute]);
      };
      case 2: return function(value) {
        return _[method](this[attribute], value);
      };
      case 3: return function(iteratee, context) {
        return _[method](this[attribute], iteratee, context);
      };
      case 4: return function(iteratee, defaultVal, context) {
        return _[method](this[attribute], iteratee, defaultVal, context);
      };
      default: return function() {
        var args = slice.call(arguments);
        args.unshift(this[attribute]);
        return _[method].apply(_, args);
      };
    }
  };
  var addUnderscoreMethods = function(Class, methods, attribute) {
    _.each(methods, function(length, method) {
      if (_[method]) Class.prototype[method] = addMethod(length, method, attribute);
    });
  };

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId(this.cidPrefix);
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};
    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // The prefix is used to create the client id which is used to identify models locally.
    // You may want to override this if you're experiencing name clashes with model ids.
    cidPrefix: 'c',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Special-cased proxy to underscore's `_.matches` method.
    matches: function(attrs) {
      return !!_.iteratee(attrs, this)(this.attributes);
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      var attr, attrs, unset, changes, silent, changing, prev, current;
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      unset           = options.unset;
      silent          = options.silent;
      changes         = [];
      changing        = this._changing;
      this._changing  = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }
      current = this.attributes, prev = this._previousAttributes;

      // Check for changes of `id`.
      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

      // For each `set` attribute, update or delete the current value.
      for (attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          this.changed[attr] = val;
        } else {
          delete this.changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0; i < changes.length; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var val, changed = false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      for (var attr in diff) {
        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
        (changed || (changed = {}))[attr] = val;
      }
      return changed;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server, merging the response with the model's
    // local attributes. Any changed attributes will trigger a "change" event.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        if (!model.set(model.parse(resp, options), options)) return false;
        if (success) success.call(options.context, model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      var attrs, method, xhr, attributes = this.attributes, wait;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({validate: true}, options);
      wait = options.wait;

      // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.
      if (attrs && !wait) {
        if (!this.set(attrs, options)) return false;
      } else {
        if (!this._validate(attrs, options)) return false;
      }

      // Set temporary attributes if `{wait: true}`.
      if (attrs && wait) {
        this.attributes = _.extend({}, attributes, attrs);
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
        if (wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
          return false;
        }
        if (success) success.call(options.context, model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch' && !options.attrs) options.attrs = attrs;
      xhr = this.sync(method, this, options);

      // Restore attributes.
      if (attrs && wait) this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;
      var wait = options.wait;

      var destroy = function() {
        model.stopListening();
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (wait) destroy();
        if (success) success.call(options.context, model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      var xhr = false;
      if (this.isNew()) {
        _.defer(options.success);
      } else {
        wrapError(this, options);
        xhr = this.sync('delete', this, options);
      }
      if (!wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base =
        _.result(this, 'urlRoot') ||
        _.result(this.collection, 'url') ||
        urlError();
      if (this.isNew()) return base;
      var id = this.id || this.attributes[this.idAttribute];
      return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return !this.has(this.idAttribute);
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.extend(options || {}, { validate: true }));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model.
  var modelMethods = { keys: 1, values: 1, pairs: 1, invert: 1, pick: 0,
      omit: 0, chain: 1, isEmpty: 1 };

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  addUnderscoreMethods(Model, modelMethods, 'attributes');

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analogous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, remove: false};

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model){ return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set.
    add: function(models, options) {
      return this.set(models, _.extend({merge: false}, options, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      var singular = !_.isArray(models), removed;
      models = singular ? [models] : _.clone(models);
      options || (options = {});
      removed = this._removeModels(models, options);
      if (!options.silent && removed) this.trigger('update', this, options);
      return singular ? models[0] : models;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      options = _.defaults({}, options, setOptions);
      if (options.parse) models = this.parse(models, options);
      var singular = !_.isArray(models);
      models = singular ? (models ? [models] : []) : models.slice();
      var id, model, attrs, existing, sort;
      var at = options.at;
      if (at != null) at = +at;
      if (at < 0) at += this.length + 1;
      var sortable = this.comparator && (at == null) && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
      var toAdd = [], toRemove = [], modelMap = {};
      var add = options.add, merge = options.merge, remove = options.remove;
      var order = !sortable && add && remove ? [] : false;
      var orderChanged = false;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      for (var i = 0; i < models.length; i++) {
        attrs = models[i];

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        if (existing = this.get(attrs)) {
          if (remove) modelMap[existing.cid] = true;
          if (merge && attrs !== existing) {
            attrs = this._isModel(attrs) ? attrs.attributes : attrs;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
          }
          models[i] = existing;

        // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
          model = models[i] = this._prepareModel(attrs, options);
          if (!model) continue;
          toAdd.push(model);
          this._addReference(model, options);
        }

        // Do not add multiple models with the same `id`.
        model = existing || model;
        if (!model) continue;
        id = this.modelId(model.attributes);
        if (order && (model.isNew() || !modelMap[id])) {
          order.push(model);

          // Check to see if this is actually a new model at this index.
          orderChanged = orderChanged || !this.models[i] || model.cid !== this.models[i].cid;
        }

        modelMap[id] = true;
      }

      // Remove nonexistent models if appropriate.
      if (remove) {
        for (var i = 0; i < this.length; i++) {
          if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
        }
        if (toRemove.length) this._removeModels(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      if (toAdd.length || orderChanged) {
        if (sortable) sort = true;
        this.length += toAdd.length;
        if (at != null) {
          for (var i = 0; i < toAdd.length; i++) {
            this.models.splice(at + i, 0, toAdd[i]);
          }
        } else {
          if (order) this.models.length = 0;
          var orderedModels = order || toAdd;
          for (var i = 0; i < orderedModels.length; i++) {
            this.models.push(orderedModels[i]);
          }
        }
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      // Unless silenced, it's time to fire all appropriate add/sort events.
      if (!options.silent) {
        var addOpts = at != null ? _.clone(options) : options;
        for (var i = 0; i < toAdd.length; i++) {
          if (at != null) addOpts.index = at + i;
          (model = toAdd[i]).trigger('add', model, this, addOpts);
        }
        if (sort || orderChanged) this.trigger('sort', this, options);
        if (toAdd.length || toRemove.length) this.trigger('update', this, options);
      }

      // Return the added (or merged) model (or models).
      return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options = options ? _.clone(options) : {};
      for (var i = 0; i < this.models.length; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = this.models;
      this._reset();
      models = this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      return this.add(model, _.extend({at: this.length}, options));
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      this.remove(model, options);
      return model;
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      return this.add(model, _.extend({at: 0}, options));
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      this.remove(model, options);
      return model;
    },

    // Slice out a sub-array of models from the collection.
    slice: function() {
      return slice.apply(this.models, arguments);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      var id = this.modelId(this._isModel(obj) ? obj.attributes : obj);
      return this._byId[obj] || this._byId[id] || this._byId[obj.cid];
    },

    // Get the model at the given index.
    at: function(index) {
      if (index < 0) index += this.length;
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      var matches = _.matches(attrs);
      return this[first ? 'find' : 'filter'](function(model) {
        return matches(model.attributes);
      });
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      // Run sort based on type of `comparator`.
      if (_.isString(this.comparator) || this.comparator.length === 1) {
        this.models = this.sortBy(this.comparator, this);
      } else {
        this.models.sort(_.bind(this.comparator, this));
      }

      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success.call(options.context, collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      var wait = options.wait;
      if (!(model = this._prepareModel(model, options))) return false;
      if (!wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(model, resp, callbackOpts) {
        if (wait) collection.add(model, callbackOpts);
        if (success) success.call(callbackOpts.context, model, resp, callbackOpts);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models, {
        model: this.model,
        comparator: this.comparator
      });
    },

    // Define how to uniquely identify models in the collection.
    modelId: function (attrs) {
      return attrs[this.model.prototype.idAttribute || 'id'];
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (this._isModel(attrs)) {
        if (!attrs.collection) attrs.collection = this;
        return attrs;
      }
      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },

    // Internal method called by both remove and set. Does not trigger any
    // additional events. Returns true if anything was actually removed.
    _removeModels: function(models, options) {
      var i, l, index, model, removed = false;
      for (var i = 0, j = 0; i < models.length; i++) {
        var model = models[i] = this.get(models[i]);
        if (!model) continue;
        var id = this.modelId(model.attributes);
        if (id != null) delete this._byId[id];
        delete this._byId[model.cid];
        var index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;
        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }
        models[j++] = model;
        this._removeReference(model, options);
        removed = true;
      }
      // We only need to slice if models array should be smaller, which is
      // caused by some models not actually getting removed.
      if (models.length !== j) models = models.slice(0, j);
      return removed;
    },

    // Method for checking whether an object should be considered a model for
    // the purposes of adding to the collection.
    _isModel: function (model) {
      return model instanceof Model;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function(model, options) {
      this._byId[model.cid] = model;
      var id = this.modelId(model.attributes);
      if (id != null) this._byId[id] = model;
      model.on('all', this._onModelEvent, this);
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model, options) {
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (event === 'change') {
        var prevId = this.modelId(model.previousAttributes());
        var id = this.modelId(model.attributes);
        if (prevId !== id) {
          if (prevId != null) delete this._byId[prevId];
          if (id != null) this._byId[id] = model;
        }
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var collectionMethods = { forEach: 3, each: 3, map: 3, collect: 3, reduce: 4,
      foldl: 4, inject: 4, reduceRight: 4, foldr: 4, find: 3, detect: 3, filter: 3,
      select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 2,
      contains: 2, invoke: 2, max: 3, min: 3, toArray: 1, size: 1, first: 3,
      head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3,
      without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3,
      isEmpty: 1, chain: 1, sample: 3, partition: 3 };

  // Mix in each Underscore method as a proxy to `Collection#models`.
  addUnderscoreMethods(Collection, collectionMethods, 'models');

  // Underscore methods that take a property name as an argument.
  var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];

  // Use attributes instead of properties.
  _.each(attributeMethods, function(method) {
    if (!_[method]) return;
    Collection.prototype[method] = function(value, context) {
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _[method](this.models, iterator, context);
    };
  });

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    options || (options = {});
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be merged as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this._removeElement();
      this.stopListening();
      return this;
    },

    // Remove this view's element from the document and all event listeners
    // attached to it. Exposed for subclasses using an alternative DOM
    // manipulation API.
    _removeElement: function() {
      this.$el.remove();
    },

    // Change the view's element (`this.el` property) and re-delegate the
    // view's events on the new element.
    setElement: function(element) {
      this.undelegateEvents();
      this._setElement(element);
      this.delegateEvents();
      return this;
    },

    // Creates the `this.el` and `this.$el` references for this view using the
    // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
    // context or an element. Subclasses can override this to utilize an
    // alternative DOM manipulation API and are only required to set the
    // `this.el` property.
    _setElement: function(el) {
      this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
      this.el = this.$el[0];
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    delegateEvents: function(events) {
      if (!(events || (events = _.result(this, 'events')))) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[events[key]];
        if (!method) continue;
        var match = key.match(delegateEventSplitter);
        this.delegate(match[1], match[2], _.bind(method, this));
      }
      return this;
    },

    // Add a single event listener to the view's element (or a child element
    // using `selector`). This only works for delegate-able events: not `focus`,
    // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
    delegate: function(eventName, selector, listener) {
      this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
    },

    // Clears all callbacks previously bound to the view by `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      if (this.$el) this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // A finer-grained `undelegateEvents` for removing a single delegated event.
    // `selector` and `listener` are both optional.
    undelegate: function(eventName, selector, listener) {
      this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
    },

    // Produces a DOM element to be assigned to your view. Exposed for
    // subclasses using an alternative DOM manipulation API.
    _createElement: function(tagName) {
      return document.createElement(tagName);
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        this.setElement(this._createElement(_.result(this, 'tagName')));
        this._setAttributes(attrs);
      } else {
        this.setElement(_.result(this, 'el'));
      }
    },

    // Set attributes from a hash on this view's element.  Exposed for
    // subclasses using an alternative DOM manipulation API.
    _setAttributes: function(attributes) {
      this.$el.attr(attributes);
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // Pass along `textStatus` and `errorThrown` from jQuery.
    var error = options.error;
    options.error = function(xhr, textStatus, errorThrown) {
      options.textStatus = textStatus;
      options.errorThrown = errorThrown;
      if (error) error.call(options.context, xhr, textStatus, errorThrown);
    };

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        if (router.execute(callback, args, name) !== false) {
          router.trigger.apply(router, ['route:' + name].concat(args));
          router.trigger('route', name, args);
          Backbone.history.trigger('route', router, name, args);
        }
      });
      return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function(callback, args, name) {
      if (callback) callback.apply(this, args);
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional) {
                     return optional ? match : '([^/?]+)';
                   })
                   .replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    _.bindAll(this, 'checkUrl');

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function() {
      var path = this.location.pathname.replace(/[^\/]$/, '$&/');
      return path === this.root && !this.getSearch();
    },

    // Does the pathname match the root?
    matchRoot: function() {
      var path = this.decodeFragment(this.location.pathname);
      var root = path.slice(0, this.root.length - 1) + '/';
      return root === this.root;
    },

    // Unicode characters in `location.pathname` are percent encoded so they're
    // decoded for comparison. `%25` should not be decoded since it may be part
    // of an encoded parameter.
    decodeFragment: function(fragment) {
      return decodeURI(fragment.replace(/%25/g, '%2525'));
    },

    // In IE6, the hash fragment and search params are incorrect if the
    // fragment contains `?`.
    getSearch: function() {
      var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
      return match ? match[0] : '';
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the pathname and search params, without the root.
    getPath: function() {
      var path = this.decodeFragment(
        this.location.pathname + this.getSearch()
      ).slice(this.root.length - 1);
      return path.charAt(0) === '/' ? path.slice(1) : path;
    },

    // Get the cross-browser normalized URL fragment from the path or hash.
    getFragment: function(fragment) {
      if (fragment == null) {
        if (this._usePushState || !this._wantsHashChange) {
          fragment = this.getPath();
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error('Backbone.history has already been started');
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._hasHashChange   = 'onhashchange' in window;
      this._useHashChange   = this._wantsHashChange && this._hasHashChange;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.history && this.history.pushState);
      this._usePushState    = this._wantsPushState && this._hasPushState;
      this.fragment         = this.getFragment();

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          var root = this.root.slice(0, -1) || '/';
          this.location.replace(root + '#' + this.getPath());
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot()) {
          this.navigate(this.getHash(), {replace: true});
        }

      }

      // Proxy an iframe to handle location events if the browser doesn't
      // support the `hashchange` event, HTML5 history, or the user wants
      // `hashChange` but not `pushState`.
      if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
        var iframe = document.createElement('iframe');
        iframe.src = 'javascript:0';
        iframe.style.display = 'none';
        iframe.tabIndex = -1;
        var body = document.body;
        // Using `appendChild` will throw on IE < 9 if the document is not ready.
        this.iframe = body.insertBefore(iframe, body.firstChild).contentWindow;
        this.iframe.document.open().close();
        this.iframe.location.hash = '#' + this.fragment;
      }

      // Add a cross-platform `addEventListener` shim for older browsers.
      var addEventListener = window.addEventListener || function (eventName, listener) {
        return attachEvent('on' + eventName, listener);
      };

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._usePushState) {
        addEventListener('popstate', this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        addEventListener('hashchange', this.checkUrl, false);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      // Add a cross-platform `removeEventListener` shim for older browsers.
      var removeEventListener = window.removeEventListener || function (eventName, listener) {
        return detachEvent('on' + eventName, listener);
      };

      // Remove window listeners.
      if (this._usePushState) {
        removeEventListener('popstate', this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        removeEventListener('hashchange', this.checkUrl, false);
      }

      // Clean up the iframe if necessary.
      if (this.iframe) {
        document.body.removeChild(this.iframe.frameElement);
        this.iframe = null;
      }

      // Some environments will throw when clearing an undefined interval.
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();

      // If the user pressed the back button, the iframe's hash will have
      // changed and we should use that for comparison.
      if (current === this.fragment && this.iframe) {
        current = this.getHash(this.iframe);
      }

      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      // If the root doesn't match, no routes can match either.
      if (!this.matchRoot()) return false;
      fragment = this.fragment = this.getFragment(fragment);
      return _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      // Normalize the fragment.
      fragment = this.getFragment(fragment || '');

      // Don't include a trailing slash on the root.
      var root = this.root;
      if (fragment === '' || fragment.charAt(0) === '?') {
        root = root.slice(0, -1) || '/';
      }
      var url = root + fragment;

      // Strip the hash and decode for matching.
      fragment = this.decodeFragment(fragment.replace(pathStripper, ''));

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._usePushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getHash(this.iframe))) {
          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if (!options.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent` constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error.call(options.context, model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;

}));

/**
 * @license RequireJS text 2.0.14 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */
/*jslint regexp: true */
/*global require, XMLHttpRequest, ActiveXObject,
  define, window, process, Packages,
  java, location, Components, FileUtils */

define('text',['module'], function (module) {
    

    var text, fs, Cc, Ci, xpcIsWindows,
        progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'],
        xmlRegExp = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
        bodyRegExp = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        hasLocation = typeof location !== 'undefined' && location.href,
        defaultProtocol = hasLocation && location.protocol && location.protocol.replace(/\:/, ''),
        defaultHostName = hasLocation && location.hostname,
        defaultPort = hasLocation && (location.port || undefined),
        buildMap = {},
        masterConfig = (module.config && module.config()) || {};

    text = {
        version: '2.0.14',

        strip: function (content) {
            //Strips <?xml ...?> declarations so that external SVG and XML
            //documents can be added to a document without worry. Also, if the string
            //is an HTML document, only the part inside the body tag is returned.
            if (content) {
                content = content.replace(xmlRegExp, "");
                var matches = content.match(bodyRegExp);
                if (matches) {
                    content = matches[1];
                }
            } else {
                content = "";
            }
            return content;
        },

        jsEscape: function (content) {
            return content.replace(/(['\\])/g, '\\$1')
                .replace(/[\f]/g, "\\f")
                .replace(/[\b]/g, "\\b")
                .replace(/[\n]/g, "\\n")
                .replace(/[\t]/g, "\\t")
                .replace(/[\r]/g, "\\r")
                .replace(/[\u2028]/g, "\\u2028")
                .replace(/[\u2029]/g, "\\u2029");
        },

        createXhr: masterConfig.createXhr || function () {
            //Would love to dump the ActiveX crap in here. Need IE 6 to die first.
            var xhr, i, progId;
            if (typeof XMLHttpRequest !== "undefined") {
                return new XMLHttpRequest();
            } else if (typeof ActiveXObject !== "undefined") {
                for (i = 0; i < 3; i += 1) {
                    progId = progIds[i];
                    try {
                        xhr = new ActiveXObject(progId);
                    } catch (e) {}

                    if (xhr) {
                        progIds = [progId];  // so faster next time
                        break;
                    }
                }
            }

            return xhr;
        },

        /**
         * Parses a resource name into its component parts. Resource names
         * look like: module/name.ext!strip, where the !strip part is
         * optional.
         * @param {String} name the resource name
         * @returns {Object} with properties "moduleName", "ext" and "strip"
         * where strip is a boolean.
         */
        parseName: function (name) {
            var modName, ext, temp,
                strip = false,
                index = name.lastIndexOf("."),
                isRelative = name.indexOf('./') === 0 ||
                             name.indexOf('../') === 0;

            if (index !== -1 && (!isRelative || index > 1)) {
                modName = name.substring(0, index);
                ext = name.substring(index + 1);
            } else {
                modName = name;
            }

            temp = ext || modName;
            index = temp.indexOf("!");
            if (index !== -1) {
                //Pull off the strip arg.
                strip = temp.substring(index + 1) === "strip";
                temp = temp.substring(0, index);
                if (ext) {
                    ext = temp;
                } else {
                    modName = temp;
                }
            }

            return {
                moduleName: modName,
                ext: ext,
                strip: strip
            };
        },

        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,

        /**
         * Is an URL on another domain. Only works for browser use, returns
         * false in non-browser environments. Only used to know if an
         * optimized .js version of a text resource should be loaded
         * instead.
         * @param {String} url
         * @returns Boolean
         */
        useXhr: function (url, protocol, hostname, port) {
            var uProtocol, uHostName, uPort,
                match = text.xdRegExp.exec(url);
            if (!match) {
                return true;
            }
            uProtocol = match[2];
            uHostName = match[3];

            uHostName = uHostName.split(':');
            uPort = uHostName[1];
            uHostName = uHostName[0];

            return (!uProtocol || uProtocol === protocol) &&
                   (!uHostName || uHostName.toLowerCase() === hostname.toLowerCase()) &&
                   ((!uPort && !uHostName) || uPort === port);
        },

        finishLoad: function (name, strip, content, onLoad) {
            content = strip ? text.strip(content) : content;
            if (masterConfig.isBuild) {
                buildMap[name] = content;
            }
            onLoad(content);
        },

        load: function (name, req, onLoad, config) {
            //Name has format: some.module.filext!strip
            //The strip part is optional.
            //if strip is present, then that means only get the string contents
            //inside a body tag in an HTML string. For XML/SVG content it means
            //removing the <?xml ...?> declarations so the content can be inserted
            //into the current doc without problems.

            // Do not bother with the work if a build and text will
            // not be inlined.
            if (config && config.isBuild && !config.inlineText) {
                onLoad();
                return;
            }

            masterConfig.isBuild = config && config.isBuild;

            var parsed = text.parseName(name),
                nonStripName = parsed.moduleName +
                    (parsed.ext ? '.' + parsed.ext : ''),
                url = req.toUrl(nonStripName),
                useXhr = (masterConfig.useXhr) ||
                         text.useXhr;

            // Do not load if it is an empty: url
            if (url.indexOf('empty:') === 0) {
                onLoad();
                return;
            }

            //Load the text. Use XHR if possible and in a browser.
            if (!hasLocation || useXhr(url, defaultProtocol, defaultHostName, defaultPort)) {
                text.get(url, function (content) {
                    text.finishLoad(name, parsed.strip, content, onLoad);
                }, function (err) {
                    if (onLoad.error) {
                        onLoad.error(err);
                    }
                });
            } else {
                //Need to fetch the resource across domains. Assume
                //the resource has been optimized into a JS module. Fetch
                //by the module name + extension, but do not include the
                //!strip part to avoid file system issues.
                req([nonStripName], function (content) {
                    text.finishLoad(parsed.moduleName + '.' + parsed.ext,
                                    parsed.strip, content, onLoad);
                });
            }
        },

        write: function (pluginName, moduleName, write, config) {
            if (buildMap.hasOwnProperty(moduleName)) {
                var content = text.jsEscape(buildMap[moduleName]);
                write.asModule(pluginName + "!" + moduleName,
                               "define(function () { return '" +
                                   content +
                               "';});\n");
            }
        },

        writeFile: function (pluginName, moduleName, req, write, config) {
            var parsed = text.parseName(moduleName),
                extPart = parsed.ext ? '.' + parsed.ext : '',
                nonStripName = parsed.moduleName + extPart,
                //Use a '.js' file name so that it indicates it is a
                //script that can be loaded across domains.
                fileName = req.toUrl(parsed.moduleName + extPart) + '.js';

            //Leverage own load() method to load plugin value, but only
            //write out values that do not have the strip argument,
            //to avoid any potential issues with ! in file names.
            text.load(nonStripName, req, function (value) {
                //Use own write() method to construct full module value.
                //But need to create shell that translates writeFile's
                //write() to the right interface.
                var textWrite = function (contents) {
                    return write(fileName, contents);
                };
                textWrite.asModule = function (moduleName, contents) {
                    return write.asModule(moduleName, fileName, contents);
                };

                text.write(pluginName, nonStripName, textWrite, config);
            }, config);
        }
    };

    if (masterConfig.env === 'node' || (!masterConfig.env &&
            typeof process !== "undefined" &&
            process.versions &&
            !!process.versions.node &&
            !process.versions['node-webkit'] &&
            !process.versions['atom-shell'])) {
        //Using special require.nodeRequire, something added by r.js.
        fs = require.nodeRequire('fs');

        text.get = function (url, callback, errback) {
            try {
                var file = fs.readFileSync(url, 'utf8');
                //Remove BOM (Byte Mark Order) from utf8 files if it is there.
                if (file[0] === '\uFEFF') {
                    file = file.substring(1);
                }
                callback(file);
            } catch (e) {
                if (errback) {
                    errback(e);
                }
            }
        };
    } else if (masterConfig.env === 'xhr' || (!masterConfig.env &&
            text.createXhr())) {
        text.get = function (url, callback, errback, headers) {
            var xhr = text.createXhr(), header;
            xhr.open('GET', url, true);

            //Allow plugins direct access to xhr headers
            if (headers) {
                for (header in headers) {
                    if (headers.hasOwnProperty(header)) {
                        xhr.setRequestHeader(header.toLowerCase(), headers[header]);
                    }
                }
            }

            //Allow overrides specified in config
            if (masterConfig.onXhr) {
                masterConfig.onXhr(xhr, url);
            }

            xhr.onreadystatechange = function (evt) {
                var status, err;
                //Do not explicitly handle errors, those should be
                //visible via console output in the browser.
                if (xhr.readyState === 4) {
                    status = xhr.status || 0;
                    if (status > 399 && status < 600) {
                        //An http 4xx or 5xx error. Signal an error.
                        err = new Error(url + ' HTTP status: ' + status);
                        err.xhr = xhr;
                        if (errback) {
                            errback(err);
                        }
                    } else {
                        callback(xhr.responseText);
                    }

                    if (masterConfig.onXhrComplete) {
                        masterConfig.onXhrComplete(xhr, url);
                    }
                }
            };
            xhr.send(null);
        };
    } else if (masterConfig.env === 'rhino' || (!masterConfig.env &&
            typeof Packages !== 'undefined' && typeof java !== 'undefined')) {
        //Why Java, why is this so awkward?
        text.get = function (url, callback) {
            var stringBuffer, line,
                encoding = "utf-8",
                file = new java.io.File(url),
                lineSeparator = java.lang.System.getProperty("line.separator"),
                input = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file), encoding)),
                content = '';
            try {
                stringBuffer = new java.lang.StringBuffer();
                line = input.readLine();

                // Byte Order Mark (BOM) - The Unicode Standard, version 3.0, page 324
                // http://www.unicode.org/faq/utf_bom.html

                // Note that when we use utf-8, the BOM should appear as "EF BB BF", but it doesn't due to this bug in the JDK:
                // http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=4508058
                if (line && line.length() && line.charAt(0) === 0xfeff) {
                    // Eat the BOM, since we've already found the encoding on this file,
                    // and we plan to concatenating this buffer with others; the BOM should
                    // only appear at the top of a file.
                    line = line.substring(1);
                }

                if (line !== null) {
                    stringBuffer.append(line);
                }

                while ((line = input.readLine()) !== null) {
                    stringBuffer.append(lineSeparator);
                    stringBuffer.append(line);
                }
                //Make sure we return a JavaScript string and not a Java string.
                content = String(stringBuffer.toString()); //String
            } finally {
                input.close();
            }
            callback(content);
        };
    } else if (masterConfig.env === 'xpconnect' || (!masterConfig.env &&
            typeof Components !== 'undefined' && Components.classes &&
            Components.interfaces)) {
        //Avert your gaze!
        Cc = Components.classes;
        Ci = Components.interfaces;
        Components.utils['import']('resource://gre/modules/FileUtils.jsm');
        xpcIsWindows = ('@mozilla.org/windows-registry-key;1' in Cc);

        text.get = function (url, callback) {
            var inStream, convertStream, fileObj,
                readData = {};

            if (xpcIsWindows) {
                url = url.replace(/\//g, '\\');
            }

            fileObj = new FileUtils.File(url);

            //XPCOM, you so crazy
            try {
                inStream = Cc['@mozilla.org/network/file-input-stream;1']
                           .createInstance(Ci.nsIFileInputStream);
                inStream.init(fileObj, 1, 0, false);

                convertStream = Cc['@mozilla.org/intl/converter-input-stream;1']
                                .createInstance(Ci.nsIConverterInputStream);
                convertStream.init(inStream, "utf-8", inStream.available(),
                Ci.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER);

                convertStream.readString(inStream.available(), readData);
                convertStream.close();
                inStream.close();
                callback(readData.value);
            } catch (e) {
                throw new Error((fileObj && fileObj.path || '') + ': ' + e);
            }
        };
    }
    return text;
});


define('text!templates/poll-form.html.tpl',[],function () { return '<div class="w__poll--inner">\n  <h2 class="w__poll--block-title">\nإستطلاع الرأي\n  </h2>\n  <!--img src="public/assets/images/erase-poll.jpg" alt="title"-->\n  <img src="<%= img %>" alt="">\n  <h3 class="w__poll--question">\n    <%= data.name %>\n  </h3>\n  <form class="w__poll--form">\n    <div class="w__poll--radios">\n    <% _.forEach(elements, function (e) { %>\n      <% if (e.type===\'poll_answer\') { %>    \n        <label>\n          <input value=\'<%= e.id %>\' type="radio" class="" name="radio">    \n          <span>\n            <%= e.data.text %>\n          </span>\n        </label>    \n      <% } %>\n    <% }); %>\n    </div>\n    <div class="form-err"></div>\n    <div class="w-poll__footer">\n      <input type="submit" value="صوّتي" class="w__poll--btn-s"> \n    </div>\n  </form>\n</div>';});


define('text!templates/poll-submit.html.tpl',[],function () { return '<div class="w__poll--inner">\n  \n  <h2 class="w__poll--block-title">\nإستطلاع الرأي\n  </h2>\n\n  <img src="<%= img %>" alt="">\n  \n  <h3 class="w__poll--question">\n    <%= data.name %>\n  </h3>\n  \n  <div class="w-poll__content w-poll__statistics" style="position:relative;">\n    <% _.forEach(elements, function (e) { %>\n      <% if (e.type===\'poll_answer\') { %>       \n        <div class="poll-row">      \n          <div class="bar-label">        \n            <span class="text">\n              <%= e.data.text %>\n            </span>        \n            <span class="pctg">\n              <%= e.procents %>%\n            </span>        \n          </div>      \n          <div class="bar-wrap">\n            <div class="bar" style=\'width:<%= e.procents %>%\'>\n            </div>\n          </div>\n        </div>\n      <% } %>\n    <% }); %>   \n  </div>\n  \n  <div class="w-poll__footer">    \n    <a class="w-poll__link-all" href="/%D8%A5%D8%B3%D8%AA%D8%B7%D9%84%D8%A7%D8%B9%D8%A7%D8%AA-%D8%A7%D9%84%D8%B1%D8%A3%D9%8A/all-polls">\n      <span>\n        المزيد من إستطلاعات الرأي\n      </span>\n    </a>    \n </div> \n  \n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n';});



define('models/poll-form',[], function() {
  var jsonpModel = Backbone.Model.extend({
    pollId: false,
    appApiUrl: window.appApiUrl,
    appApiKey: window.appApiKey,
    defaults: {
      img: "//:0"
    },
    initialize: function(attributes, options){
      this.url = this.appApiUrl + "polls.js/" + attributes.pollId + "?expand=true&subelements=all&api_key=" + this.appApiKey;
    },    
    sync: function(method, collection, options) {
      options.dataType = "jsonp";
      return Backbone.sync(method, collection, options);
    },
    parse: function(response) {
      return response.data;
    }
  });
  return jsonpModel;
});



define('models/poll-submit',[], function() {
  var pollPost = Backbone.Model.extend({
    appApiUrl: window.appApiUrl,
    appApiKey: window.appApiKey,
    votingDelay: 99999,
    browserFingerprint: new Fingerprint({canvas: true, ie_activex: true, screen_resolution: true}).get(),
    //browserFingerprint: Math.floor((Math.random() * 10000) + 1),
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



define('views/poll',[
  'text!templates/poll-form.html.tpl',
  'text!templates/poll-submit.html.tpl',
  'models/poll-form',
  'models/poll-submit',
  //
  'jquery',
  'icheck'
], function(
        templateForm,
        templateSubmit,
        modelForm,
        modelSubmit
        )
{
  var PollView = Backbone.View.extend({
    // variables
    templateForm: _.template(templateForm),
    templateSubmit: _.template(templateSubmit),
    pollId: false,
    $elem: $(),
    goToUrl: false,
    modelForm: false,
    modelSubmit: false,
    appThumborConfig: false,
    // init
    initialize: function(attributes) {
      this.appThumborConfig = $.extend(true, {}, window.appThumborConfig, {thumbor: {hasResize: true, hasTrim: false, isSmart: true}}, {thumbor: attributes.thumbor});
      this.pollId = attributes.pollId;
      this.$elem = attributes.$elem;
      if (this.$elem.data('go-to-url')) {
        this.goToUrl = this.$elem.data('go-to-url');
      }
      this.pollFormGet();
    },
    // actions
    pollFormGet: function() {
      var _this = this;
      var model = new modelForm({pollId: this.pollId});

      model.fetch({success: function() {
          _this.modelForm = model;
          _this.pollFormRender();
        }
      });
    },
    pollFormRender: function() {
      var _this = this;
      // image
      _.each(this.modelForm.attributes.elements, function(e) {
        if (e.type === "image") {
          var thumbor = new thumborUrlBuilder(_this.appThumborConfig);
          thumbor.setAmazonUrlPath(_this.appThumborConfig.amazonS3Path, e.data);
          _this.modelForm.set('img', thumbor.finalUrl());
        }
      });
      //
      this.$elem.html(this.templateForm(this.modelForm.attributes));
      this.$elem.find('input').iCheck({
        checkboxClass: 'icheckbox_minimal',
        radioClass: 'iradio_minimal',
        increaseArea: '20%'
      });
      this.$elem.find("input[type='submit']").click(function(e) {
        e.preventDefault();
        var answerId = $(this).closest('form').find("input:radio:checked").attr('value');
        if (answerId) {
          _this.pollSubmit(answerId);
        } else {
          _this.formError(_this.$elem.find('form .w__poll--radios'), "إختاري احتمالاً");
        }


      });
      //pollSubmit

    },
    pollSubmit: function(answerId) {
      var _this = this;
      this.modelSubmit = new modelSubmit({answerId: answerId, pollId: this.pollId});
      this.modelSubmit.save({}, {
        success: function() {
          _this.pollSubmitRender();
        },
        error: function() {
          _this.modelSubmit.fetch2({
            success: function() {
              _this.pollSubmitRender();
            }
          });
        }
      });
    },
    pollSubmitRender: function() {
      var statisticElementsIdKey = {};
      var tthis = this;
      var answerSumm = 0;
      $(this.modelSubmit.attributes.elements).each(function(i, statisticElement) {
        statisticElementsIdKey[statisticElement.answerId] = statisticElement.answerCount;
        answerSumm = answerSumm + parseInt(statisticElement.answerCount);
      });
      $(this.modelForm.attributes.elements).each(function(i, questionElement) {
        if (questionElement.type === "poll_answer") {
          questionElement.answerCount = statisticElementsIdKey[questionElement.id];
          if (questionElement.answerCount) {
            questionElement.procents = Math.ceil((questionElement.answerCount / answerSumm) * 100);
          } else {
            questionElement.procents = 0;
          }
        }
      });
      this.$elem.html(this.templateSubmit(this.modelForm.attributes));
      setTimeout(function() {
        tthis.$elem.find('.w-poll__statistics').addClass('animation-trigger');
      }, 0);
    },
    formError: function(element, text, display, tmsg) {
      if ($(element).is('form')) {
        var $form = $(element);
      } else {
        var $form = $(element).closest('form');
      }
      text = text || "input error";
      display = display || $form.find(".form-err");
      tmsg = tmsg || 4500;
      var tef = (window.navigator.userAgent.indexOf("MSIE 8") > 0) ? 0 : 500;


      $(display).css({opacity: 0, display: ""});
      $(element).css({outline: "1px solid red"});

      $(display).html(text);
      $(display).fadeTo(tef, 1);

      setTimeout(function() {
        $(display).fadeTo(tef, 0, function() {
          $(display).css({display: "none"});
          $(element).css({outline: ""});
        });
      }, tmsg);
    }


  });

  return PollView;

});
// MODELS/MEDIA-GALLERY-ITEM



define('models/media-gallery',[], function() {
  var MediaGalleryItem = Backbone.Model.extend({
    defaulst: {
      title: "",
      img: "//:0",
      caption: ""
    }
  });
  return MediaGalleryItem;
});

define('text!templates/media-gallery-social-share.html.tpl',[],function () { return '<div class="mg-share">\n\n\t\t<div id="facebook_share" class="share_btn" ></div>\n    \n    <div id="whatsapp_share" class="share_btn" ></div>\n\n\t\t<div id="twitter_share" class="share_btn" ></div>\n\n\t\t<div id="gplus_share" class="share_btn" ></div>\n    \n</div>';});


define('text!templates/media-gallery-layout.html.tpl',[],function () { return '<div class="media-gallery-fullscreen desktop">\n  \n  <div class="mg-header">\n    <div class="mg-banner-a mg-banner mg-banner-lb"></div>\n    <a href="#mg-close" class="mg-close"></a>\n  </div>\n  \n  <div class="mg-main">\n    <div class=\'mg-slider-w\'></div>\n  </div><!--\n        \n  --><div class="mg-asside">\n    <div class=\'mg-numers-w\'></div>\n    <div class=\'mg-titles-w\'></div>\n    <div class=\'mg-captions-w\'></div>\n    <div class=\'mg-social-w\'></div>\n    <div class="mg-banner-b mg-banner mg-banner-mpu"></div>    \n  </div> \n  \n</div>';});


define('text!templates/media-gallery-layout-mob.html.tpl',[],function () { return '<div class="media-gallery-fullscreen mobile">\n  \n  <div class="mg-header">\n    <div class="mg-banner-a-mob mg-banner mg-banner-lb"></div>\n    <a href="#mg-close" class="mg-close"></a> \n    <div class=\'mg-numers-w\'></div> \n  </div>  \n    \n  <div class="mg-main">\n    <div class=\'mg-slider-w\'></div>\n  </div>\n        \n  <div class="mg-asside">   \n    <div class=\'mg-social-w\'></div>\n    <div class=\'mg-titles-w\'></div>\n    <div class=\'mg-captions-w\'></div>     \n  </div> \n  \n</div>';});


define('text!templates/media-gallery-layout-tab.html.tpl',[],function () { return '<div class="media-gallery-fullscreen mobile tablet">\n  \n  <div class="mg-header">\n    <div class="mg-banner-a mg-banner mg-banner-lb"></div>\n    <a href="#mg-close" class="mg-close"></a> \n    <div class=\'mg-numers-w\'></div> \n  </div>  \n    \n  <div class="mg-main">\n    <div class=\'mg-slider-w\'></div>\n  </div>\n        \n  <div class="mg-asside">   \n    <div class=\'mg-social-w\'></div>\n    <div class=\'mg-titles-w\'></div>\n    <div class=\'mg-captions-w\'></div>     \n  </div> \n  \n</div>';});


define('text!templates/media-gallery-item.html.tpl',[],function () { return '<div class="item">\n  \n  <img  src="<%=img%>" alt="" />\n  \n</div>';});


define('text!templates/media-gallery-related.html.tpl',[],function () { return '<div class="mg-related">\n  <h3>ألبومات سوف تحبينها</h3><!--\n  <% _.forEach(articles, function (a, i) { %>\n    --><a href="<%=a.link%>" class="mg-related-item mg-related-item-<%=i%>">\n          <div class="mg-related-img">\n            <img  src="<%=a.img%>" alt="" />\n          </div>\n          <p class="mg-related-title">\n            <%= a.title %>\n          </p>\n    </a><!--\n  <% }); %>\n--></div>';});

;

/*
 *  jQuery OwlCarouselRtl v.0.9.0
 *
 *  Copyright (c) 2015 Aleksandar Veljkovic
 *  https://github.com/biosonic/FullModal.git
 *
 *  Licensed under MIT
 *
 */

(function($) {

  $.fn.fullModal = function(set) {

    set = set || {};
    set.onclose = set.onclose || function() {
    };
    set.closeText = set.closeText || "<span>&#215;</span>";
    set.aditionalStyle = set.aditionalStyle || false;
    set.closeButton = set.closeButton || ((set.closeButton===false) ? false : true);

    var toReturn = {};

    var $content = $(this);
    var $fullScreenWrap = $('<div id="dwf-fullscreen-wrap" />');
    var $exodusSource = $('<div id="dfs-exodus-source" />');
    var $closeButton = $("<a href='#' class='dfs-close-button'>" + set.closeText + "</a>");
    var $headStyle = $("<style class='full-screan-style'>body > * {max-height:0!important;overflow:hidden!important;margin:0!important;padding:0!important;display:none!important;} body > #dwf-fullscreen-wrap,.chromeperfectpixel-overlay {max-height:none!important;display:block!important;} body, html {height:100%;}</style>");
    var scrollBack = $(window).scrollTop();

    $content.after($fullScreenWrap);
    $fullScreenWrap.append($content);

    $fullScreenWrap.after($exodusSource);
    $exodusSource.append($fullScreenWrap);

    if (set.closeButton === true) {
      $fullScreenWrap.append($closeButton);
    }

    $('head').append($headStyle);

    $("html").addClass('dwf-fullscreen');
    $("body").prepend($fullScreenWrap);


    if (set.aditionalStyle) {
      $('head').append("<style class='full-screan-style-aditional'>" + set.aditionalStyle + "</style>");
    }

    toReturn.close = function() {
      $exodusSource.after($content);
      $exodusSource.remove();
      $fullScreenWrap.remove();
      $headStyle.remove();
      $(".full-screan-style-aditional").remove();
      $("html").removeClass('dwf-fullscreen');
      $(window).scrollTop(scrollBack);
      set.onClose();
    };

    $closeButton.click(function(e) {
      e.preventDefault();
      toReturn.close();
    });

    return toReturn;

  };

})(jQuery);

define("fullScreen", function(){});

;
(function($) {

  $.fn.galleryCaption = function(set) {

    var set = set || {};
    var $this = $(this);
    var rreturn = {};
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
        transition : 'height .2s'
      });      
    }

    rreturn.goTo = function(itemNo) {
      if (itemNo === -1 || itemNo === false) {
        $items.css({opacity: 0, zIndex: -1}).removeClass("active");
      } else {
        var $active = $items.eq(itemNo);
        $items.css({opacity: 0, zIndex: -1}).removeClass("active");
        $active.css({opacity: 1, zIndex: 1}).addClass("active");
      }
      if (set.autoHeight && typeof($active)!=='undefined') {
        var h = $active.outerHeight(true);
        $this.css('height', h);
      }
    };

    $this.data('galleryCaption', {goTo: rreturn.goTo});


    rreturn.goTo(0);

    return rreturn;
  };

})(jQuery);
define("caption", function(){});

// views/media-gallery.js

//(function() {

define('views/media-gallery',[
  'models/media-gallery',
  'text!templates/media-gallery-social-share.html.tpl',
  'text!templates/media-gallery-layout.html.tpl',
  'text!templates/media-gallery-layout-mob.html.tpl',
  'text!templates/media-gallery-layout-tab.html.tpl',
  'text!templates/media-gallery-item.html.tpl',
  'text!templates/media-gallery-related.html.tpl',
  //
  'jquery',
  'owl',
  'owlRtl',
  'fullScreen',
  'caption',
  'sharrre'
          //'sharrre'
], function(
        MediaGalleryItemModel,
        templateSocial,
        templateLayout,
        templateLayoutMob,
        templateLayoutTab,
        templateItem,
        templateRelated
        ) {

  var gPlusSharePhp = backboneApp.set.sharrrePhpProxyh;
  var MediaGallryView = Backbone.View.extend({
    imgBaseUrl: backboneApp.set.imgBaseUrl,
    $fullScreen: $(),
    $layout: $(),
    $slider: $(),
    $captions: $(),
    $social: $(),
    $titles: $(),
    $numers: $(),
    bannerVars: {},
    currentItem: null,
    id: null,
    afterMoveUnhashedOnce: false,
    owlSliderGoTo: function(num) {
      // // will be difined after slider init
    },
    initialize: function(attributes) {
      this.bannerVars = {
        state: window.backboneApp.set.gallery.adMobileActionCount,
        trigger: window.backboneApp.set.gallery.adMobileActionCount
      };
      this.collection = new Backbone.Collection([], {model: MediaGalleryItemModel});
      this.$elem = attributes.$elem;
      this.currentItem = attributes.currentItem || 1;
      this.id = attributes.id;
    },
    parseRelated: function() {
      var _this = this;
      if ($('.mg-related .mg-related-item', _this.$elem).length > 0) {
        var relateds = [];
        $('.mg-related .mg-related-item', _this.$elem).each(function(i, o) {
          var data = {
            title: $("h3", o).text(),
            img: $(".mg-related-img", o).attr('src'),
            caption: $(".mg-related-capt", o).text(),
            link: $(o).attr('href')
          };
          relateds.push(data);
        });
        _this.collection.add(new Backbone.Model({
          title: "",
          caption: "",
          type: "related",
          articles: relateds
        }));
      }
    },
    parse: function() {
      var _this = this;
      // GET FROM DOM
      $('.mg-item', _this.$elem).each(function(i, o) {
        var data = {
          type: "item",
          title: $("h3", o).text(),
          img: $(".mg-img", o).attr('src'),
          caption: $(".mg-capt", o).html().trim()
        };
        _this.collection.add(new MediaGalleryItemModel(data));
      });
      this.parseRelated();
      this.bindObjects();
    },
    parseTab: function() {
      var _this = this;
      // GET FROM DOM
      $('.mg-item', _this.$elem).each(function(i, o) {
        var data = {
          type: "item",
          title: $("h3", o).text(),
          img: $(".mg-img", o).attr('src'),
          caption: $(".mg-capt", o).html().trim()
        };
        _this.collection.add(new MediaGalleryItemModel(data));
        //adv
        if ((i + 1) % window.backboneApp.set.gallery.adMobileInsertOnCount === 0) {
          var advModel = new MediaGalleryItemModel({
            type: 'adv',
            title: "<small>ADVERTISEMENT</small>",
            caption: ""
          });
          _this.collection.add(advModel);
        }
      });
      this.parseRelated();
      this.bindObjects();
    },
    parseMob: function() {
      var _this = this;
      // GET FROM DOM
      $('.mg-item', _this.$elem).each(function(i, o) {
        var data = {
          type: "item",
          title: $("h3", o).text(),
          img: $(".mg-img", o).attr('src'),
          caption: $(".mg-capt", o).html().trim()
        };
        _this.collection.add(new MediaGalleryItemModel(data));
        //adv
        if ((i + 1) % window.backboneApp.set.gallery.adMobileInsertOnCount === 0) {
          var advModel = new MediaGalleryItemModel({
            type: 'adv',
            title: "<small>ADVERTISEMENT</small>",
            caption: ""
          });
          _this.collection.add(advModel);
        }
      });
      this.parseRelated();
      this.bindObjects();
    },
    bindObjects: function() {
      var itemTpl = _.template(templateItem);
      var itemsRdr = "";
      var socialTpl = _.template(templateSocial);
      var relatedTpl = _.template(templateRelated);
      var captRdr = "";
      var clength = this.collection.length;
      var titlRdr = "";
      var numersRdr = "";
      this.collection.each(function(item, i) {
        captRdr = "<div class='mg-caption'><p>" + item.attributes.caption + "</p></div>" + captRdr;
        titlRdr = "<div class='mg-title'><h3>" + item.attributes.title + "</h3></div>" + titlRdr;
        numersRdr = "<div class='mg-numer'><div class='num'>" + (i + 1) + "/" + clength + "</div></div>" + numersRdr;
        if (item.get('type') === 'adv') {
          itemsRdr += "<div class='advert-wrap'><div class='advert' style='height:600px'>&nbsp;</div></div>";
          return true;
        }
        if (item.get('type') === 'item') {
          itemsRdr += itemTpl(item.attributes);
        }
        if (item.get('type') === 'related') {
          itemsRdr += relatedTpl(item.attributes);
        }
      });
      // social
      this.$social = $(socialTpl());
      this.sharrre(this.$social);
      // captions
      this.$captions = $("<div class='mg-captions'>" + captRdr + "</div>");
      this.$captions.galleryCaption({autoHeight: true});
      this.$captions.data('galleryCaption').goTo(-1);
      // titles
      this.$titles = $("<div class='mg-titles'>" + titlRdr + "</div>");
      this.$titles.galleryCaption({autoHeight: true});
      this.$titles.data('galleryCaption').goTo(-1);
      // numeration
      this.$numers = $("<div class='mg-numers'>" + numersRdr + "</div>");
      this.$numers.galleryCaption({autoHeight: true});
      this.$numers.data('galleryCaption').goTo(-1);
      // slider
      this.$slider = $("<div class='mg-slider'>" + itemsRdr + "</div>");
      this.owlSlider(this.$slider);
    },
    render: function() {
      // Layout
      var layoutTpl = _.template(templateLayout);
      var $layout;
      this.$layout = $layout = $(layoutTpl());
      $('.mg-slider-w', $layout).append(this.$slider);
      $('.mg-captions-w', $layout).append(this.$captions);
      $('.mg-titles-w', $layout).append(this.$titles);
      $('.mg-numers-w', $layout).append(this.$numers);
      $('.mg-social-w', $layout).append(this.$social);
      this.fullScreen();
    },
    renderTab: function() {
      // Layout
      var layoutTpl = _.template(templateLayoutTab);
      var $layout;
      this.$layout = $layout = $(layoutTpl());
      $('.mg-slider-w', $layout).append(this.$slider);
      $('.mg-captions-w', $layout).append(this.$captions);
      $('.mg-titles-w', $layout).append(this.$titles);
      $('.mg-numers-w', $layout).append(this.$numers);
      $('.mg-social-w', $layout).append(this.$social);
      this.fullScreen();
    },
    renderMob: function() {
      // Layout
      var layoutTpl = _.template(templateLayoutMob);
      var $layout;
      this.$layout = $layout = $(layoutTpl());
      $('.mg-slider-w', $layout).append(this.$slider);
      $('.mg-captions-w', $layout).append(this.$captions);
      $('.mg-titles-w', $layout).append(this.$titles);
      $('.mg-numers-w', $layout).append(this.$numers);
      $('.mg-social-w', $layout).append(this.$social);
      this.fullScreen();
    },
    fullScreen: function() {
      var _this = this;
      
      if(backboneApp.set.device === 'tablet'){
        $('meta[name=viewport]').attr(content='content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
      }     
      
      this.fullScreen = this.$layout.fullModal({
        onClose: function() {
          $(window).resize();
          $('#myEmbedTarget').css('width', "");
        },
        aditionalStyle: "body{background-color:black}",
        closeButton: false
      });
      $('.mg-close', this.$layout).click(function(e) {
        e.preventDefault();


        // refresh page, bad display properties baners bug fix
        if (backboneApp.set.device === 'desktop' || backboneApp.set.device === 'tablet') {        
        var loadIcon = '<img style="position:absolute;top:50%;left:50%;margin: -50px 0 0 -50px;" src="data:image/gif;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="/>';
        $('#dwf-fullscreen-wrap > *').css('display', 'none');
        $('#dwf-fullscreen-wrap').append($(loadIcon));
          location = location.origin + location.pathname;
          return;
        }


        if (
                window.navigator.userAgent.indexOf("MSIE 10") > -1
                || window.navigator.userAgent.indexOf("MSIE 9") > -1
                || window.navigator.userAgent.indexOf("MSIE 8") > -1
                ) {
          window.backboneApp.router.navigate("#closed", {trigger: true, replace: true});
          if (window.history) {
            history.replaceState('', document.title, window.location.pathname);
          }
        }
        else {
          if (window.backboneApp.set.gallery.referal) {
            window.backboneApp.router.navigate("#closed", {trigger: true, replace: true});
            if (window.history) {
              history.replaceState('', document.title, window.location.pathname);
            }
          } else {
            window.history.back();
          }
        }
      });
    },
    close: function() {
      this.fullScreen.close();
      this.undelegateEvents();
      this.remove();
    },  
    banner: function() {
      var $layout = this.$layout;
      var v = this.bannerVars;
      var owl = this.$slider.data('owlCarousel');
      var t1 = v.state >= v.trigger; // action trigger
      var t2 = $('.owl-item.active .advert-wrap', $layout).length > 0; // slide in trigger
      if (t1) { 
        $('.mg-banner-lb', $layout).html('<div id="ad-gallery-lb" />');
        $('.mg-banner-mpu', $layout).html('<div id="ad-gallery-mpu" />');
        v.state = 0;
      }
      if (t2) {
        this.$layout.addClass('banner-active-item');
        $('.owl-item .advert-wrap .advert', $layout).html('&nbsp;');
          $('.owl-item.active .advert-wrap .advert', $layout).html('<div id="ad-gallery-mpu">&nbsp;</div>');
      }
      else {
        this.$layout.removeClass('banner-active-item');
      }
      v.state++;
      if (t1 || t2) {
        oxAsyncGallery.asyncAdUnitsRender();
      }
    },    
    sharrre: function($target) {
      var url = window.location.href;
      url = url.replace(/[^\/]*$/, '1'); // always to point first image in gallery
      var imgBaseUrl = this.imgBaseUrl;
      $('#facebook_share', $target).sharrre({
        share: {
          facebook: true
        },
        template: '<a class="box" href="#"><div class="share"><img src="' + imgBaseUrl + 'fbico.png" alt="" /><span>شاركي</span></div><div class="count">{total}</div></a>',
        enableHover: false,
        enableTracking: true,
        click: function(api, options) {
          api.openPopup('facebook');
          $(document).trigger("gallerySharrreClick");
          $(document).trigger("gallerySharrreClickFacebook");
        },
        url: url
      });
      $('#twitter_share', $target).sharrre({
        share: {
          twitter: true
        },
        template: '<a class="box" href="#"><div class="share"><img src="' + imgBaseUrl + 'twitt.png" alt="" /><span>غرّدي</span></div><div class="count">{total}</div></a>',
        enableHover: false,
        enableTracking: true,
        click: function(api, options) {
          api.openPopup('twitter');
          $(document).trigger("gallerySharrreClick");
          $(document).trigger("gallerySharrreClickTwitter");
        },
        url: url
      });
      $('#gplus_share', $target).sharrre({
        share: {
          googlePlus: true
        },
        template: '<a class="box" href="#"><div class="share"><img src="' + imgBaseUrl + 'gplus.png" alt="" /><span>شاركي</span></div><div class="count">{total}</div></a>',
        enableHover: false,
        enableTracking: true,
        urlCurl: gPlusSharePhp,
        click: function(api, options) {
          api.openPopup('googlePlus');
          $(document).trigger("gallerySharrreClick");
          $(document).trigger("gallerySharrreClickGplus");
        },
        url: url
      });
      $('#whatsapp_share', $target).sharrre({
        share: {
          whatsapp: true
        },
        template: '<a class="box" href="#"><div class="share"><img src="' + imgBaseUrl + 'logo-symbol-white.svg" alt="" /><span>شاركي</span></div></a>',
        enableHover: false,
        enableTracking: true,
        buttons: {
          whatsapp: {
            utmTracking: {
              site: 'yasmina'
            }
          }
        },
        click: function(api, options) {
          window.location.href = options.text;
          _gaq.push(['_trackEvent', 'smart-whats-app-share', 'click', 'share']);
        }
      });
    },
    owlSlider: function($target) {
      var _this = this;
      $target.owlCarouselRtl({
        rtlJump: false,
        // Most important owl features
        items: 1,
        itemsCustom: false,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [1111, 1],
        itemsTablet: [1109, 1],
        itemsTabletSmall: false,
        itemsMobile: [980, 1],
        singleItem: true,
        itemsScaleUp: false,
        //Basic Speeds
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1000,
        //Autoplay
        autoPlay: false,
        stopOnHover: false,
        // Navigation
        navigation: true,
        navigationText: ["", ""],
        rewindNav: true,
        scrollPerPage: false,
        //Pagination
        pagination: false,
        paginationNumbers: false,
        // Responsive 
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        // CSS Styles
        baseClass: "owl-carousel",
        theme: "owl-theme",
        //Lazy load
        lazyLoad: false,
        lazyFollow: true,
        lazyEffect: "fade",
        //Auto height
        autoHeight: true,
        //JSON 
        jsonPath: false,
        jsonSuccess: false,
        //Mouse Events
        dragBeforeAnimFinish: true,
        mouseDrag: true,
        touchDrag: false,
        //Transitions
        transitionStyle: false,
        // Other
        addClassActive: true,
        //Callbacks
        beforeUpdate: false,
        afterUpdate: false,
        beforeInit: false,
        afterInit: function() {
          _this.afterInit();
        },
        beforeMove: function() {
          _this.beforeMove();
        },
        afterMove: function() {
          _this.afterMove();
        },
        afterAction: false,
        startDragging: false,
        afterLazyLoad: false
      });
    },
    afterInit: function() {
      var _this = this;
      var owl = this.$slider.data('owlCarousel');
      this.owlSliderGoTo = function(num) {
        owl.goToRtl(num - 1);
      };
      if (this.currentItem != owl.itemsAmount) {
        owl.jumpToRtl(this.currentItem - 1);
      } else {
        this.afterMove();
      }
      this.onResizeBinder();
    },
    onResizeBinder: function() {
      var timeout = false;
      var tthis = this;
      $(window).resize(function() {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
          tthis.onResize();
        }, 300);
      });
      tthis.onResize();
      // disabling owl resize event      
      var owl = this.$slider.data('owlCarousel');
      $(window).unbind('resize', owl.resizer);      
    },
    onResize: function() {
      $('.owl-item', this.$slider).animate({'opacity': 0},0);
      var owl = this.$slider.data('owlCarousel');
      var delta = 0;
      if (this.$layout.hasClass('desktop')) {
        delta = $('.mg-header', this.$layout).outerHeight() + 20;
      }
      else {
        delta = $('.mg-header', this.$layout).outerHeight(true) + 20;
      }
      var h = $(window).height() - delta;
      $('.owl-item .item', this.$slider).css({'height': h + "px"});
      $('.owl-item .advert-wrap', this.$slider).css({'minHeight': h + "px"});
      $('.owl-item .mg-related', this.$slider).css({'minHeight': ((h / 2) + 100) + "px"});
      $('.owl-buttons', this.$slider).css('top', (h / 2) + 'px');
      owl.updateVars();
      $('.owl-item', this.$slider).animate({'opacity': 1},800);
    },
    beforeMove: function(jen, dva) {

    },
    afterMove: function() {
      var owl = this.$slider.data('owlCarousel');
      if (!this.afterMoveUnhashedOnce) {
        window.backboneApp.router.navigate('media-gallery/' + this.id + "/" + owl.currentPositionRtl, {trigger: false, replace: true});
      }
      else {
        this.afterMoveUnhashedOnce = false;
      }
      this.$captions.data('galleryCaption').goTo(owl.currentItem);
      this.$titles.data('galleryCaption').goTo(owl.currentItem);
      this.$numers.data('galleryCaption').goTo(owl.currentItem);
      this.banner();
    }
  });

  return MediaGallryView;

});

//});


define('router',[
  'backbone'
], function(
        Backbone
        ) {

  var Router = Backbone.Router.extend({
    routes: {
      //"media-gallery/:id": "mediaGalleryIdRedirect",
      "media-gallery/:id/:pos": "mediaGallery",
      //"_bb_": "clearState",
      "*other": "defaultRoute"
    },
    initialize: function() {
      /*
       * Wiews without link
       */
      backboneApp.poll = {};
      $('.w__poll--left').each(function(i, o) {
        require(['views/poll'], function(poll) {
          var pollId = $(o).data('poll-id');
          var poll = new poll({
            pollId: pollId,
            $elem: $(o),
            thumbor: {
              resizeWidth: '342',
              resizeHeight: '230'
            }
          });
          backboneApp.poll["asside-" + i] = {};
          backboneApp.poll["asside-" + i].view = poll;
        });
      });
      $('.w__poll--right').each(function(i, o) {
        require(['views/poll'], function(poll) {
          var pollId = $(o).data('poll-id');
          var poll = new poll({
            pollId: pollId,
            $elem: $(o),
            thumbor: {
              resizeWidth: '468',
              resizeHeight: '340'
            }
          });
          backboneApp.poll["all-" + i] = {};
          backboneApp.poll["all-" + i].view = poll;
        });
      });
    },
    clearState: function() {
      // not supported ie8, ie9, android 4.1
      // Older iOS versions and Android 4.0.4 claim support, but implementation is too buggy to be useful.
      if (window.history && window.history.pushState) {
        history.pushState('', document.title, window.location.pathname);
      }
    },
    mediaGallery: function(id, currentItem) {
      currentItem = currentItem || 1;
      require(['views/media-gallery'], function(mediaGalleryView) {
        if (backboneApp.mediaGallery) {
          backboneApp.mediaGallery.afterMoveUnhashedOnce = true;
          backboneApp.mediaGallery.owlSliderGoTo(currentItem);
          return;
        }
        var $elem = $('.media-gallery-' + id);
        backboneApp.mediaGallery = new mediaGalleryView({$elem: $elem, currentItem: currentItem, id: id});
        if (backboneApp.set.device === 'desktop') {
          backboneApp.mediaGallery.parse();
          backboneApp.mediaGallery.render();
        } else if (backboneApp.set.device === 'tablet') {
          backboneApp.mediaGallery.parseTab();
          backboneApp.mediaGallery.renderTab();
        } else {
          backboneApp.mediaGallery.parseMob();
          backboneApp.mediaGallery.renderMob();
        }
      });
    },
    defaultRoute: function() {
      if (backboneApp.mediaGallery) {
        backboneApp.mediaGallery.undelegateEvents();
        backboneApp.mediaGallery.close();
        delete backboneApp.mediaGallery;
      }
    } 
  });

  return {
    initialize: function() {
      var router = new Router();
      Backbone.history.start();
      //Backbone.history.start({ pushState: true });
      return {router: router};
    }
  };




});


define('app',[
  'router'
], function(
        Router
        ) {

  // fixing location.replace on ios mobile/tab
  Backbone.History.prototype._updateHash = function(location, fragment, replace) {
    if (replace) {
      var href = location.href.replace(/(javascript:|#).*$/, '');
      if (
              window.history &&
              history.replaceState &&
              $('html').hasClass('ua-os-name-ios') &&
              $('html').hasClass('ua-browser-name-chrome')
              ) {
        history.replaceState('', document.title, href + '#' + fragment);
      }
      else {
        location.replace(href + '#' + fragment);
      }
    } else {
      // Some browsers require that `hash` contains a leading #.
      location.hash = '#' + fragment;
    }
  };


  ///////////////////////////////////////////////////////////////////////////////
  window.backboneApp = window.backboneApp || {};
  window.backboneApp.set = window.backboneApp.set || {};
  window.backboneApp.set.$mediaGallerySelector = $('.article-gallery');
  //window.backboneApp.set.device = oxAsyncGallery.deviceType;
  if ($('html').hasClass('ua-visitor-device-mobile')) {
    window.backboneApp.set.device = 'mobile';
  } 
  else if ($('html').hasClass('ua-visitor-device-tablet')) {
    window.backboneApp.set.device = 'tablet';
  }
  else {
    window.backboneApp.set.device = 'desktop';
  }
  window.backboneApp.set.sharrrePhpProxyh = window.backboneApp.set.sharrrePhpProxyh || 'public/js/sharrre.php';
  window.backboneApp.set.imgBaseUrl = window.backboneApp.set.imgBaseUrl || "/0static/yasmina-scales/public/js/backbone/";
  window.backboneApp.set.gallery = {};
  window.backboneApp.set.gallery.adMobileInsertOnCount = window.backboneApp.set.gallery.adMobileInsertOnCount || 3;
  window.backboneApp.set.gallery.adMobileActionCount = window.backboneApp.set.gallery.adMobileActionCount || 3;
  window.backboneApp.set.gallery.referal = true;
  ///////////////////////////////////////////////////////////////////////////////


  window.dbge = false;
  window.dbg = function(msg) {
    if (window.dbge) {
      console.log(msg);
    }
  };


  // Media Gallery enumeration
  window.backboneApp.set.$mediaGallerySelector.each(function(galleryIndex, gallery) {
    var $gallery = $(gallery);
    $gallery.addClass("media-gallery");
    $gallery.addClass("media-gallery-" + galleryIndex);
    var itemIndex = 1;
    $gallery.find('.mg-start').each(function(starterIndex, starter) {
      starterIndex = starterIndex + 1;
      $(starter).attr('data-href', "#media-gallery/" + galleryIndex + "/" + itemIndex);
      itemIndex++;
      if (
              (window.backboneApp.set.device === 'mobile' || window.backboneApp.set.device === 'tablet') &&
              ((starterIndex) % window.backboneApp.set.gallery.adMobileInsertOnCount === 0)
              )
      {
        itemIndex++;
      }
    });
  });

  return function() {
    window.backboneApp.router = Router.initialize().router;
    $('.mg-start').click(function(e) {
      e.preventDefault();
      var $tthis = $(this);
      window.backboneApp.set.gallery.referal = false;
      window.backboneApp.router.navigate($tthis.data('href'), {trigger: true, replace: false});
      //window.location.hash = $tthis.data('href');
    });

  };

});



window.backboneApp = {set:{}};
window.backboneApp.set.imgBaseUrl = "/assets/images/";
window.backboneApp.set.sharrrePhpProxyh = '/gpluscount/' + Base64.encode(window.location.href);


(function() {

  // Alredy Included scripts
  define("jquery", [], function() {
    return jQuery;
  });
  define("owl", [], function() {
    return jQuery.fn.owlCarousel;
  });  
  define("owlRtl", [], function() {
    return jQuery.fn.owlCarouselRtl;
  }); 
  define("icheck", [], function() {
    return jQuery.fn.iCheck;
  }); 
  define("sharrre", [], function() {
    return jQuery.fn.sharrre;
  });  

  require.config({
    //urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
      underscore: '../bower_components/underscore/underscore-min',
      backbone: '../bower_components/backbone/backbone',
      text: '../bower_components/requirejs-text/text',
      fullScreen: '../bower_components/fullmodal/full-modal',
      caption: '../bower_components/gallery-captions/gallery-caption',
      //sharrre: '../bower_components/sharrre/jquery.sharrre',
      //icheck: '../bower_components/iCheck/icheck',
      //owl: '../bower_components/owlcarousel/owl-carousel/owl.carousel.min',
      //owlRtl: '../bower_components/owlcarouselrtl/owl.carousel.rtl'
    }
  });

  require([
    'app'
  ], function(
          App
          ) {
    window.jsSHA = jsSHA;
    new App();
  });

})();

define("main-yasmina", function(){});

