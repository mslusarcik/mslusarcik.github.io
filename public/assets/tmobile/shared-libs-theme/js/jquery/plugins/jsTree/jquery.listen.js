(function(i){var q="indexer",l=i.event,g=l.special,f=i.listen=function(k,j,h,a){if(typeof j!="object"){a=h;h=j;j=document}c(k.split(/\s+/),function(n){n=f.fixes[n]||n;var m=e(j,n)||e(j,n,new d(n,j));m.append(h,a);m.start()})},e=function(a,j,h){return i.data(a,j+"."+q,h)};i.fn[q]=function(h){return this[0]&&e(this[0],h)||null};i[q]=function(h){return e(document,h)};i.extend(f,{regex:/^((?:\w*?|\*))(?:([#.])([\w-]+))?$/,fixes:{focus:"focusin",blur:"focusout"},cache:function(h){this.caching=h}});i.each(f.fixes,function(j,h){g[h]={setup:function(){if(i.browser.msie){return !1}this.addEventListener(j,g[h].handler,!0)},teardown:function(){if(i.browser.msie){return !1}this.removeEventListener(j,g[h].handler,!0)},handler:function(a){arguments[0]=a=l.fix(a);a.type=h;return l.handle.apply(this,arguments)}}});i.fn.listen=function(j,h,k){return this.each(function(){f(j,this,h,k)})};function d(j,h){i.extend(this,{ids:{},tags:{},listener:h,event:j});this.id=d.instances.push(this)}d.instances=[];d.prototype={constructor:d,handle:function(j){var h=j.stopPropagation;j.stopPropagation=function(){j.stopped=1;h.apply(this,arguments)};e(this,j.type).parse(j);j.stopPropagation=h;h=j.data=null},on:0,bubbles:0,start:function(){var h=this;if(!h.on){l.add(h.listener,h.event,h.handle);h.on=1}},stop:function(){var h=this;if(h.on){l.remove(h.listener,h.event,h.handle);h.on=0}},cache:function(j,h){return i.data(j,"listenCache_"+this.id,h)},parse:function(h){var k=this,m=h.data||h.target,j=arguments,a;if(!f.caching||!(a=k.cache(m))){a=[];if(m.id&&k.ids[m.id]){b(a,k.ids[m.id])}c([m.nodeName,"*"],function(o){var n=k.tags[o];if(n){c((m.className+" *").split(" "),function(p){if(p&&n[p]){b(a,n[p])}})}});if(f.caching){k.cache(m,a)}}if(a[0]){c(a,function(n){if(n.apply(m,j)===!1){h.preventDefault();h.stopPropagation()}})}if(!h.stopped&&(m=m.parentNode)&&(m.nodeName=="A"||k.bubbles&&m!=k.listener)){h.data=m;k.parse(h)}a=j=m=null},append:function(h,a){var j=this;c(h.split(/\s*,\s*/),function(m){var k=f.regex.exec(m);if(!k){throw'$.listen > "'+m+'" is not a supported selector.'}var p=k[2]=="#"&&k[3],o=k[1].toUpperCase()||"*",n=k[3]||"*";if(p){(j.ids[p]||(j.ids[p]=[])).push(a)}else{if(o){o=j.tags[o]=j.tags[o]||{};(o[n]||(o[n]=[])).push(a)}}})}};function c(k,h,n){for(var m=0,j=k.length;m<j;m++){h.call(n,k[m],m)}}function b(j,h){j.push.apply(j,h);return j}i(window).unload(function(){if(typeof d=="function"){c(d.instances,function(a){a.stop();i.removeData(a.listener,a.event+"."+q);a.ids=a.names=a.listener=null})}})})(jQuery);