require("source-map-support").install();
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("node-uuid"),require("babel-polyfill"),require("eventemitter3"),require("discord.io"),require("events"),require("readline"),require("util")):"function"==typeof define&&define.amd?define(["node-uuid","babel-polyfill","eventemitter3","discord.io","events","readline","util"],t):"object"==typeof exports?exports["exobot.js"]=t(require("node-uuid"),require("babel-polyfill"),require("eventemitter3"),require("discord.io"),require("events"),require("readline"),require("util")):e["exobot.js"]=t(e["node-uuid"],e["babel-polyfill"],e.eventemitter3,e["discord.io"],e.events,e.readline,e.util)}(this,function(e,t,n,r,o,i,a){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(t.s=16)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];r(this,e),this.help=void 0,this.options=t}return o(e,[{key:"register",value:function(e){if(!e)throw new Error("No bot passed to register; fatal.");this.bot=e}},{key:"listen",value:function(){if(!this.bot)throw new Error("No bot to listen on; fatal.")}}]),e}();t.a=i},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(4),u=function(e){function t(e){var n=e.text;r(this,t);var i=o(this,Object.getPrototypeOf(t).apply(this,arguments));return i.text=n,i}return i(t,e),t}(a.a);t.a=u},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function i(e){var t=arguments.length<=1||void 0===arguments[1]?e:arguments[1];r(this,i),this.name=e,this.id=t};t.a=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(6),i=o&&o.__esModule?function(){return o["default"]}:function(){return o};Object.defineProperty(i,"a",{get:i});var a=n(1),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];r(this,e),this.options=t,this.id=t.id||o.v4.call()}return u(e,[{key:"register",value:function(e){if(!e)throw new Error("No bot passed to register; fatal.");this.bot=e,this.listen()}},{key:"listen",value:function(){if(!this.bot)throw new Error("No bot to listen on; fatal.");this.bot.on("send-message:"+this.id,this.respond.bind(this))}},{key:"receive",value:function(e){var t=e.user,n=e.text,r=e.channel,o=new a.a({user:t,text:n,channel:r,adapter:this.id});this.bot.emit("receive-message",o)}},{key:"enter",value:function(e){var t=e.user,n=e.channel,r=new a.a({user:t,channel:n,adapter:this.id,type:a.a.PRESENCE_TYPES.ENTER});this.bot.emit("receive-message",r)}},{key:"leave",value:function(e){var t=e.user,n=e.channel,r=new a.a({user:t,channel:n,adapter:this.id,type:a.a.PRESENCE_TYPES.LEAVE});this.bot.emit("receive-message",r)}},{key:"respond",value:function(e){console.log(e.text)}}]),e}();t.a=c},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(6),i=o&&o.__esModule?function(){return o["default"]}:function(){return o};Object.defineProperty(i,"a",{get:i});var a=function u(e){var t=e.user,n=e.channel,i=e.adapter,a=e.id,c=void 0===a?o.v4.call():a;r(this,u),this.user=t,this.channel=n,this.adapter=i,this.id=c};t.a=a},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),u=n(1),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=/.+/,l=function(e){function t(){r(this,t);var e=o(this,Object.getPrototypeOf(t).call(this));return e.regexp=f,e.respondFunctions=[],e.listenFunctions=[],e}return i(t,e),s(t,[{key:"register",value:function(e){var t=this;this.bot=e,this.botNameRegex=new RegExp("^(?:(?:"+e.name+"|"+e.alias+")[,\\s:.-]*)(.+)"),e.on("receive-message",function(e){t.respondFunctions.forEach(function(n){return t.process(n[0],n[1],e,!0)}),t.listenFunctions.forEach(function(n){return t.process(n[0],n[1],e)})})}},{key:"process",value:function(e,t,n){var r=arguments.length<=3||void 0===arguments[3]?!1:arguments[3];if(r){var o=this.validateBotName(n);if(!o)return;n=new u.a(c({},n,{text:o,direct:!0}))}if(e.exec&&(e=this.validate(e)),e(n)){var i=t(n);if(i){var a=new u.a(c({},n,{text:i}));this.bot.emit("send-message:"+n.adapter,a)}}}},{key:"validate",value:function(e){return function(t){return e.exec(t.text)}}},{key:"validateBotName",value:function(e){var t=this.botNameRegex.exec(e.text);if(t)return t[1]}},{key:"respond",value:function(e,t){this.respondFunctions.push([e,t])}},{key:"listen",value:function(e,t){this.listenFunctions.push([e,t])}}]),t}(a.a);t.a=l},function(e,t){e.exports=require("node-uuid")},function(e,t,n){"use strict";var r=n(3),o=n(14);Object.prototype.hasOwnProperty.call(r,"a")&&Object.defineProperty(t,"Adapter",{configurable:!1,enumerable:!0,get:function(){return r.a}});var i=o;Object.defineProperty(t,"adapters",{configurable:!1,enumerable:!0,get:function(){return i}})},function(e,t,n){"use strict";var r=n(4),o=n(17),i=n(1);Object.prototype.hasOwnProperty.call(r,"a")&&Object.defineProperty(t,"Message",{configurable:!1,enumerable:!0,get:function(){return r.a}}),Object.prototype.hasOwnProperty.call(o,"a")&&Object.defineProperty(t,"PresenceMessage",{configurable:!1,enumerable:!0,get:function(){return o.a}}),Object.prototype.hasOwnProperty.call(i,"a")&&Object.defineProperty(t,"TextMessage",{configurable:!1,enumerable:!0,get:function(){return i.a}})},function(e,t,n){"use strict";var r=n(0),o=n(18),i=n(19),a=n(20),u=n(23);Object.prototype.hasOwnProperty.call(r,"a")&&Object.defineProperty(t,"Plugin",{configurable:!1,enumerable:!0,get:function(){return r.a}}),Object.prototype.hasOwnProperty.call(o,"a")&&Object.defineProperty(t,"DatabasePlugin",{configurable:!1,enumerable:!0,get:function(){return o.a}}),Object.prototype.hasOwnProperty.call(i,"a")&&Object.defineProperty(t,"EventPlugin",{configurable:!1,enumerable:!0,get:function(){return i.a}}),Object.prototype.hasOwnProperty.call(a,"a")&&Object.defineProperty(t,"HTTPPlugin",{configurable:!1,enumerable:!0,get:function(){return a.a}});var c=u;Object.defineProperty(t,"plugins",{configurable:!1,enumerable:!0,get:function(){return c}})},function(e,t,n){var r=n(27).format,o=n(25).EventEmitter,i=t=e.exports=function(e,n){"string"==typeof e&&(e=t[e.toUpperCase()]),this.level=e||t.DEBUG,this.stream=n||process.stdout,this.stream.readable&&this.read()};t.EMERGENCY=0,t.ALERT=1,t.CRITICAL=2,t.ERROR=3,t.WARNING=4,t.NOTICE=5,t.INFO=6,t.DEBUG=7,i.prototype={read:function(){var e="",n=this,r=this.stream;r.setEncoding("utf8"),r.on("data",function(r){e+=r,"\n"==e[e.length-1]&&(e.split("\n").map(function(e){if(e.length)try{var r=e.match(/^\[([^\]]+)\] (\w+) (.*)/),o={date:new Date(r[1]),level:t[r[2]],levelString:r[2],msg:r[3]};n.emit("line",o)}catch(i){}}),e="")}),r.on("end",function(){n.emit("end")})},log:function(e,n){if(t[e]<=this.level){var o=r.apply(null,n);this.stream.write("["+new Date+"] "+e+" "+o+"\n")}},emergency:function(e){this.log("EMERGENCY",arguments)},alert:function(e){this.log("ALERT",arguments)},critical:function(e){this.log("CRITICAL",arguments)},error:function(e){this.log("ERROR",arguments)},warning:function(e){this.log("WARNING",arguments)},notice:function(e){this.log("NOTICE",arguments)},info:function(e){this.log("INFO",arguments)},debug:function(e){this.log("DEBUG",arguments)}},i.prototype.__proto__=o.prototype},function(e,t){e.exports=require("babel-polyfill")},function(e,t){e.exports=require("eventemitter3")},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(3),u=n(2),c=n(24),s=c&&c.__esModule?function(){return c["default"]}:function(){return c};Object.defineProperty(s,"a",{get:s});var f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function b(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:b(o,t,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},p=["ready","message","presence","disconnected"],h=function(e){function t(e){var n=e.token,i=e.botId,a=e.username;r(this,t);var u=o(this,Object.getPrototypeOf(t).apply(this,arguments));return u.channels={},u.disconnected=function(){u.bot.log.critical("Disconnected from Discord.")},u.botId=i,u.username=a,u.token=n,u}return i(t,e),f(t,[{key:"register",value:function(e){var n=this;l(Object.getPrototypeOf(t.prototype),"register",this).apply(this,arguments);var r=this.token,o=this.botId,i=this.username;return r&&o&&i?(this.client=new s.a.Client({token:r,autorun:!0}),void p.forEach(function(e){n.client.on(e,function(){return n[e].apply(n,arguments)}),n.client.on(e,function(){for(var t,r=arguments.length,o=Array(r),i=0;r>i;i++)o[i]=arguments[i];return(t=n.bot).emit.apply(t,["discord-"+e].concat(o))})})):void e.log.critical("token, botId, and username are required to connect to discord.")}},{key:"respond",value:function(e){this.bot.log.info("Sending "+e.text+" to "+e.channel),this.client.sendMessage({to:e.channel,message:e.text})}},{key:"ready",value:function(){this.state="connected",this.bot.emit("connected","id",this.id),this.bot.log.info("Connected to Discord."),this.client.setPresence({game:"Exobotting"})}},{key:"message",value:function(e,t,n,r,o){if(e!==this.username){if(this.client.directMessages[n])return this.whisper(e,t,n,r,o);var i=new u.a(e,t);this.receive({user:i,text:r,channel:n})}}},{key:"presence",value:function(e,n,r,o,i){if(n!==this.botId){var a=new u.a(e,n);if("online"===r)return l(Object.getPrototypeOf(t.prototype),"enter",this).call(this,{user:a,channel:i.d.channel_id});if("offline"===r)return l(Object.getPrototypeOf(t.prototype),"leave",this).call(this,{user:a,channel:i.d.channel_id})}}},{key:"whisper",value:function(e,n,r,o){if(this.bot.log.info("Received whisper from "+e+": "+o),e!==this.username){var i=new u.a(e,n),a=this.bot.name;o.slice(0,a.length).toLowerCase()!==a.toLowerCase()&&(o=this.bot.name+" "+o),l(Object.getPrototypeOf(t.prototype),"receive",this).call(this,{user:i,text:o,channel:r})}}}]),t}(a.a);t.a=h},function(e,t,n){"use strict";var r=n(15),o=n(13);Object.prototype.hasOwnProperty.call(r,"a")&&Object.defineProperty(t,"Shell",{configurable:!1,enumerable:!0,get:function(){return r.a}}),Object.prototype.hasOwnProperty.call(o,"a")&&Object.defineProperty(t,"Discord",{configurable:!1,enumerable:!0,get:function(){return o.a}})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(26),u=a&&a.__esModule?function(){return a["default"]}:function(){return a};Object.defineProperty(u,"a",{get:u});var c=n(3),s=n(2),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function y(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:y(o,t,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},p="SHELL",h=new s.a("shell"),b=function(e){function t(){r(this,t);var e=o(this,Object.getPrototypeOf(t).call(this));return e.rl=u.a.createInterface({input:process.stdin,output:process.stdout}),e}return i(t,e),f(t,[{key:"prompt",value:function(){var e=this;this.rl.question("Chat: ",function(n){l(Object.getPrototypeOf(t.prototype),"receive",e).call(e,{text:n,channel:p,user:h}),e.prompt()})}},{key:"register",value:function(e){l(Object.getPrototypeOf(t.prototype),"register",this).call(this,e),this.prompt()}}]),t}(c.a);t.a=b},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(11),i=o&&o.__esModule?function(){return o["default"]}:function(){return o};Object.defineProperty(i,"a",{get:i});var a=n(12),u=a&&a.__esModule?function(){return a["default"]}:function(){return a};Object.defineProperty(u,"a",{get:u});var c=n(10),s=c&&c.__esModule?function(){return c["default"]}:function(){return c};Object.defineProperty(s,"a",{get:s});var f=n(7),l=n(8),p=n(9),h=n(2);for(var b in f)["Exobot","User","default"].indexOf(b)<0&&function(e){Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:function(){return f[e]}})}(b);for(var b in l)["Exobot","User","default"].indexOf(b)<0&&function(e){Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:function(){return l[e]}})}(b);for(var b in p)["Exobot","User","default"].indexOf(b)<0&&function(e){Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:function(){return p[e]}})}(b);Object.prototype.hasOwnProperty.call(h,"a")&&Object.defineProperty(t,"User",{configurable:!1,enumerable:!0,get:function(){return h.a}});var y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=["on","once","emit","removeListener","listeners"],g=function(){function e(t){var n=this,o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];r(this,e),this.plugins=[],this.adapters={},this.logProcess=function(){n.log.debug(process.memoryUsage(),process.cpuUsage())},this.name=t,this.alias=o.alias,this.emitter=new u.a,this.log=new s.a(o.logLevel||s.a.WARNING),d.forEach(function(e){n[e]=n.emitter[e]}),o.adapters&&o.adapters.forEach(function(e){return n.addAdapter(e)}),o.plugins&&o.plugins.forEach(function(e){return n.addPlugin(e)}),o.logLevel===s.a.DEBUG&&setInterval(this.logProcess,1e4)}return y(e,[{key:"addPlugin",value:function(e){e.register(this),this.plugins.push(e)}},{key:"addAdapter",value:function(e){e.register(this),this.adapters[e.id]=e}}]),e}();Object.defineProperty(t,"Exobot",{configurable:!1,enumerable:!0,get:function(){return g}})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(4),u=function(e){function t(e){var n=e.type;r(this,t);var i=o(this,Object.getPrototypeOf(t).apply(this,arguments));return i.type=n,i}return i(t,e),t}(a.a);t.a=u},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),u=function(e){function t(){return r(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),t}(a.a);t.a=u},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),u=function(e){function t(){return r(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),t}(a.a);t.a=u},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),u=function(e){function t(){return r(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),t}(a.a);t.a=u},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(5),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function h(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:h(o,t,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},s=["hi","hello","sup","greetings","yo","hey","good morning","morning","good afternoon","afternoon","good evening","evening"],f=["goodbye","farwell","bye","later","see ya","cya","good night"],l=function(e,t){return new RegExp("^("+t.join("|")+")[,\\s]*"+e,"i")},p=function(e){function t(){var e,n,i,a;r(this,t);for(var u=arguments.length,c=Array(u),s=0;u>s;s++)c[s]=arguments[s];return n=i=o(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),i.help='Greetings: says "hi" back. Say "hi <botname>" for a response.',a=n,o(i,a)}return i(t,e),u(t,[{key:"register",value:function(e){c(Object.getPrototypeOf(t.prototype),"register",this).apply(this,arguments),this.listen(l(e.name,s),this.greeting),this.listen(function(e){return s.includes(e.text.toLowerCase())},this.greeting),this.respond(function(e){return s.includes(e.text.toLowerCase())},this.greeting),this.listen(l(e.name,f),this.farewell),this.listen(function(e){return f.includes(e.text.toLowerCase())},this.farewell),this.respond(function(e){return f.includes(e.text.toLowerCase())},this.farewell)}},{key:"greeting",value:function(e){var t=s[parseInt(Math.random()*s.length)];return t+", "+e.user.name+"!"}},{key:"farewell",value:function(e){var t=f[parseInt(Math.random()*f.length)];return t+", "+e.user.name+"!"}}]),t}(a.a);t.a=p},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(5),u=function(e){function t(){r(this,t);var e=o(this,Object.getPrototypeOf(t).apply(this,arguments));return e.help='Help: Explains commands. Say "<botname> help" for information.',e.pluginHelp=function(){return e.bot.plugins.filter(function(e){return e.help}).map(function(e){return e.help},[]).join("\n")},e.respond(/^help$/,e.pluginHelp),e}return i(t,e),t}(a.a);t.a=u},function(e,t,n){"use strict";var r=n(21),o=n(22);Object.prototype.hasOwnProperty.call(r,"a")&&Object.defineProperty(t,"Greetings",{configurable:!1,enumerable:!0,get:function(){return r.a}}),Object.prototype.hasOwnProperty.call(o,"a")&&Object.defineProperty(t,"Help",{configurable:!1,enumerable:!0,get:function(){return o.a}})},function(e,t){e.exports=require("discord.io")},function(e,t){e.exports=require("events")},function(e,t){e.exports=require("readline")},function(e,t){e.exports=require("util")}])});
//# sourceMappingURL=exobot.js.map