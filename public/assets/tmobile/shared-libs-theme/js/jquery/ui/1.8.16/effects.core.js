jQuery.effects||(function(h,e){h.effects={};h.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(n,m){h.fx.step[m]=function(o){if(!o.colorInit){o.start=l(o.elem,m);o.end=j(o.end);o.colorInit=true}o.elem.style[m]="rgb("+Math.max(Math.min(parseInt((o.pos*(o.end[0]-o.start[0]))+o.start[0],10),255),0)+","+Math.max(Math.min(parseInt((o.pos*(o.end[1]-o.start[1]))+o.start[1],10),255),0)+","+Math.max(Math.min(parseInt((o.pos*(o.end[2]-o.start[2]))+o.start[2],10),255),0)+")"}});function j(n){var m;if(n&&n.constructor==Array&&n.length==3){return n}if(m=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(n)){return[parseInt(m[1],10),parseInt(m[2],10),parseInt(m[3],10)]}if(m=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(n)){return[parseFloat(m[1])*2.55,parseFloat(m[2])*2.55,parseFloat(m[3])*2.55]}if(m=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(n)){return[parseInt(m[1],16),parseInt(m[2],16),parseInt(m[3],16)]}if(m=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(n)){return[parseInt(m[1]+m[1],16),parseInt(m[2]+m[2],16),parseInt(m[3]+m[3],16)]}if(m=/rgba\(0, 0, 0, 0\)/.exec(n)){return a.transparent}return a[h.trim(n).toLowerCase()]}function l(o,m){var n;do{n=h.curCSS(o,m);if(n!=""&&n!="transparent"||h.nodeName(o,"body")){break}m="backgroundColor"}while(o=o.parentNode);return j(n)}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]};var f=["add","remove","toggle"],c={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};function g(){var p=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,q={},n,o;if(p&&p.length&&p[0]&&p[p[0]]){var m=p.length;while(m--){n=p[m];if(typeof p[n]=="string"){o=n.replace(/\-(\w)/g,function(r,s){return s.toUpperCase()});q[o]=p[n]}}}else{for(n in p){if(typeof p[n]==="string"){q[n]=p[n]}}}return q}function b(n){var m,o;for(m in n){o=n[m];if(o==null||h.isFunction(o)||m in c||(/scrollbar/).test(m)||(!(/color/i).test(m)&&isNaN(parseFloat(o)))){delete n[m]}}return n}function i(m,o){var p={_:0},n;for(n in o){if(m[n]!=o[n]){p[n]=o[n]}}return p}h.effects.animateClass=function(m,n,p,o){if(h.isFunction(p)){o=p;p=null}return this.queue(function(){var t=h(this),q=t.attr("style")||" ",u=b(g.call(this)),s,r=t.attr("class");h.each(f,function(v,w){if(m[w]){t[w+"Class"](m[w])}});s=b(g.call(this));t.attr("class",r);t.animate(i(u,s),{queue:false,duration:n,easing:p,complete:function(){h.each(f,function(v,w){if(m[w]){t[w+"Class"](m[w])}});if(typeof t.attr("style")=="object"){t.attr("style").cssText="";t.attr("style").cssText=q}else{t.attr("style",q)}if(o){o.apply(this,arguments)}h.dequeue(this)}})})};h.fn.extend({_addClass:h.fn.addClass,addClass:function(n,m,p,o){return m?h.effects.animateClass.apply(this,[{add:n},m,p,o]):this._addClass(n)},_removeClass:h.fn.removeClass,removeClass:function(n,m,p,o){return m?h.effects.animateClass.apply(this,[{remove:n},m,p,o]):this._removeClass(n)},_toggleClass:h.fn.toggleClass,toggleClass:function(o,n,m,q,p){if(typeof n=="boolean"||n===e){if(!m){return this._toggleClass(o,n)}else{return h.effects.animateClass.apply(this,[(n?{add:o}:{remove:o}),m,q,p])}}else{return h.effects.animateClass.apply(this,[{toggle:o},n,m,q])}},switchClass:function(m,o,n,q,p){return h.effects.animateClass.apply(this,[{add:o,remove:m},n,q,p])}});h.extend(h.effects,{version:"1.8.16",save:function(n,o){for(var m=0;m<o.length;m++){if(o[m]!==null){n.data("ec.storage."+o[m],n[0].style[o[m]])}}},restore:function(n,o){for(var m=0;m<o.length;m++){if(o[m]!==null){n.css(o[m],n.data("ec.storage."+o[m]))}}},setMode:function(m,n){if(n=="toggle"){n=m.is(":hidden")?"show":"hide"}return n},getBaseline:function(n,o){var p,m;switch(n[0]){case"top":p=0;break;case"middle":p=0.5;break;case"bottom":p=1;break;default:p=n[0]/o.height}switch(n[1]){case"left":m=0;break;case"center":m=0.5;break;case"right":m=1;break;default:m=n[1]/o.width}return{x:m,y:p}},createWrapper:function(m){if(m.parent().is(".ui-effects-wrapper")){return m.parent()}var n={width:m.outerWidth(true),height:m.outerHeight(true),"float":m.css("float")},p=h("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),o=document.activeElement;m.wrap(p);if(m[0]===o||h.contains(m[0],o)){h(o).focus()}p=m.parent();if(m.css("position")=="static"){p.css({position:"relative"});m.css({position:"relative"})}else{h.extend(n,{position:m.css("position"),zIndex:m.css("z-index")});h.each(["top","left","bottom","right"],function(q,r){n[r]=m.css(r);if(isNaN(parseInt(n[r],10))){n[r]="auto"}});m.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}return p.css(n).show()},removeWrapper:function(m){var n,o=document.activeElement;if(m.parent().is(".ui-effects-wrapper")){n=m.parent().replaceWith(m);if(m[0]===o||h.contains(m[0],o)){h(o).focus()}return n}return m},setTransition:function(n,p,m,o){o=o||{};h.each(p,function(r,q){unit=n.cssUnit(q);if(unit[0]>0){o[q]=unit[0]*m+unit[1]}});return o}});function d(n,m,o,p){if(typeof n=="object"){p=m;o=null;m=n;n=m.effect}if(h.isFunction(m)){p=m;o=null;m={}}if(typeof m=="number"||h.fx.speeds[m]){p=o;o=m;m={}}if(h.isFunction(o)){p=o;o=null}m=m||{};o=o||m.duration;o=h.fx.off?0:typeof o=="number"?o:o in h.fx.speeds?h.fx.speeds[o]:h.fx.speeds._default;p=p||m.complete;return[n,m,o,p]}function k(m){if(!m||typeof m==="number"||h.fx.speeds[m]){return true}if(typeof m==="string"&&!h.effects[m]){return true}return false}h.fn.extend({effect:function(p,o,r,t){var n=d.apply(this,arguments),q={options:n[1],duration:n[2],callback:n[3]},s=q.options.mode,m=h.effects[p];if(h.fx.off||!m){if(s){return this[s](q.duration,q.callback)}else{return this.each(function(){if(q.callback){q.callback.call(this)}})}}return m.call(this,q)},_show:h.fn.show,show:function(n){if(k(n)){return this._show.apply(this,arguments)}else{var m=d.apply(this,arguments);m[1].mode="show";return this.effect.apply(this,m)}},_hide:h.fn.hide,hide:function(n){if(k(n)){return this._hide.apply(this,arguments)}else{var m=d.apply(this,arguments);m[1].mode="hide";return this.effect.apply(this,m)}},__toggle:h.fn.toggle,toggle:function(n){if(k(n)||typeof n==="boolean"||h.isFunction(n)){return this.__toggle.apply(this,arguments)}else{var m=d.apply(this,arguments);m[1].mode="toggle";return this.effect.apply(this,m)}},cssUnit:function(m){var n=this.css(m),o=[];h.each(["em","px","%","pt"],function(p,q){if(n.indexOf(q)>0){o=[parseFloat(n),q]}});return o}});h.easing.jswing=h.easing.swing;h.extend(h.easing,{def:"easeOutQuad",swing:function(n,o,m,q,p){return h.easing[h.easing.def](n,o,m,q,p)},easeInQuad:function(n,o,m,q,p){return q*(o/=p)*o+m},easeOutQuad:function(n,o,m,q,p){return -q*(o/=p)*(o-2)+m},easeInOutQuad:function(n,o,m,q,p){if((o/=p/2)<1){return q/2*o*o+m}return -q/2*((--o)*(o-2)-1)+m},easeInCubic:function(n,o,m,q,p){return q*(o/=p)*o*o+m},easeOutCubic:function(n,o,m,q,p){return q*((o=o/p-1)*o*o+1)+m},easeInOutCubic:function(n,o,m,q,p){if((o/=p/2)<1){return q/2*o*o*o+m}return q/2*((o-=2)*o*o+2)+m},easeInQuart:function(n,o,m,q,p){return q*(o/=p)*o*o*o+m},easeOutQuart:function(n,o,m,q,p){return -q*((o=o/p-1)*o*o*o-1)+m},easeInOutQuart:function(n,o,m,q,p){if((o/=p/2)<1){return q/2*o*o*o*o+m}return -q/2*((o-=2)*o*o*o-2)+m},easeInQuint:function(n,o,m,q,p){return q*(o/=p)*o*o*o*o+m},easeOutQuint:function(n,o,m,q,p){return q*((o=o/p-1)*o*o*o*o+1)+m},easeInOutQuint:function(n,o,m,q,p){if((o/=p/2)<1){return q/2*o*o*o*o*o+m}return q/2*((o-=2)*o*o*o*o+2)+m},easeInSine:function(n,o,m,q,p){return -q*Math.cos(o/p*(Math.PI/2))+q+m},easeOutSine:function(n,o,m,q,p){return q*Math.sin(o/p*(Math.PI/2))+m},easeInOutSine:function(n,o,m,q,p){return -q/2*(Math.cos(Math.PI*o/p)-1)+m},easeInExpo:function(n,o,m,q,p){return(o==0)?m:q*Math.pow(2,10*(o/p-1))+m},easeOutExpo:function(n,o,m,q,p){return(o==p)?m+q:q*(-Math.pow(2,-10*o/p)+1)+m},easeInOutExpo:function(n,o,m,q,p){if(o==0){return m}if(o==p){return m+q}if((o/=p/2)<1){return q/2*Math.pow(2,10*(o-1))+m}return q/2*(-Math.pow(2,-10*--o)+2)+m},easeInCirc:function(n,o,m,q,p){return -q*(Math.sqrt(1-(o/=p)*o)-1)+m},easeOutCirc:function(n,o,m,q,p){return q*Math.sqrt(1-(o=o/p-1)*o)+m},easeInOutCirc:function(n,o,m,q,p){if((o/=p/2)<1){return -q/2*(Math.sqrt(1-o*o)-1)+m}return q/2*(Math.sqrt(1-(o-=2)*o)+1)+m},easeInElastic:function(n,q,m,w,v){var r=1.70158;var u=0;var o=w;if(q==0){return m}if((q/=v)==1){return m+w}if(!u){u=v*0.3}if(o<Math.abs(w)){o=w;var r=u/4}else{var r=u/(2*Math.PI)*Math.asin(w/o)}return -(o*Math.pow(2,10*(q-=1))*Math.sin((q*v-r)*(2*Math.PI)/u))+m},easeOutElastic:function(n,q,m,w,v){var r=1.70158;var u=0;var o=w;if(q==0){return m}if((q/=v)==1){return m+w}if(!u){u=v*0.3}if(o<Math.abs(w)){o=w;var r=u/4}else{var r=u/(2*Math.PI)*Math.asin(w/o)}return o*Math.pow(2,-10*q)*Math.sin((q*v-r)*(2*Math.PI)/u)+w+m},easeInOutElastic:function(n,q,m,w,v){var r=1.70158;var u=0;var o=w;if(q==0){return m}if((q/=v/2)==2){return m+w}if(!u){u=v*(0.3*1.5)}if(o<Math.abs(w)){o=w;var r=u/4}else{var r=u/(2*Math.PI)*Math.asin(w/o)}if(q<1){return -0.5*(o*Math.pow(2,10*(q-=1))*Math.sin((q*v-r)*(2*Math.PI)/u))+m}return o*Math.pow(2,-10*(q-=1))*Math.sin((q*v-r)*(2*Math.PI)/u)*0.5+w+m},easeInBack:function(n,o,m,r,q,p){if(p==e){p=1.70158}return r*(o/=q)*o*((p+1)*o-p)+m},easeOutBack:function(n,o,m,r,q,p){if(p==e){p=1.70158}return r*((o=o/q-1)*o*((p+1)*o+p)+1)+m},easeInOutBack:function(n,o,m,r,q,p){if(p==e){p=1.70158}if((o/=q/2)<1){return r/2*(o*o*(((p*=(1.525))+1)*o-p))+m}return r/2*((o-=2)*o*(((p*=(1.525))+1)*o+p)+2)+m},easeInBounce:function(n,o,m,q,p){return q-h.easing.easeOutBounce(n,p-o,0,q,p)+m},easeOutBounce:function(n,o,m,q,p){if((o/=p)<(1/2.75)){return q*(7.5625*o*o)+m}else{if(o<(2/2.75)){return q*(7.5625*(o-=(1.5/2.75))*o+0.75)+m}else{if(o<(2.5/2.75)){return q*(7.5625*(o-=(2.25/2.75))*o+0.9375)+m}else{return q*(7.5625*(o-=(2.625/2.75))*o+0.984375)+m}}}},easeInOutBounce:function(n,o,m,q,p){if(o<p/2){return h.easing.easeInBounce(n,o*2,0,q,p)*0.5+m}return h.easing.easeOutBounce(n,o*2-p,0,q,p)*0.5+q*0.5+m}})})(jQuery);