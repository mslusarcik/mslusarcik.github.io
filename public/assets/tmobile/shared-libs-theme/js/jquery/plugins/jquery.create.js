(function(e,g,b){var d=[],f=[],c=0,a={};e.event.special.create={add:function(h){d.push(h.selector)},remove:function(i){var h=d.length;while(h--){if(d[h]===i.selector){d.splice(h,1);break}}}};e.fn.triggerCreateEvent=function(){this.each(function(){var j=this;var i=e(this);var k=d.length;for(var h=0;h<k;h++){if(i.is(d[h])){if(!e.data(j,"jqcreateevt")){e.data(j,"jqcreateevt",true);e.event.trigger("create",{},j)}else{}}i.find(d[h]).each(function(){if(!e.data(this,"jqcreateevt")){e.data(this,"jqcreateevt",true);e.event.trigger("create",{},this)}else{}})}})};e.fn.domManip=function(h,j,k){var i=k;arguments[2]=function(m){var l=i.apply(this,arguments);e(m).triggerCreateEvent();return l};return g.apply(this,arguments)};e.fn.html=function(h){if(typeof h!="string"&&(!d.length||e.isFunction(h)||typeof h==="undefined"||!h.length)){return b.apply(this,arguments)}this.empty().append(h);return this}})(jQuery,jQuery.fn.domManip,jQuery.fn.html);