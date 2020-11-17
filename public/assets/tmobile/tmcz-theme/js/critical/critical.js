/*! EnhanceJS: a progressive enhancement boilerplate. Copyright 2014 @scottjehl, Filament Group, Inc. Licensed MIT */
(function(i,c){var g=i.setTimeout;
var f={};
var l=i.document,b=l.documentElement,k=l.head||l.getElementsByTagName("head")[0],e="fullcss",j="fulljs",h="fonts",a=["enhanced"];
function d(m,q,s){var o=i.document.createElement("link");
var p=q||i.document.getElementsByTagName("script")[0];
var r=i.document.styleSheets;
o.rel="stylesheet";
o.href=m;
o.media="only x";
p.parentNode.insertBefore(o,p);
function n(){var u;
for(var t=0;
t<r.length;
t++){if(r[t].href&&r[t].href.indexOf(m)>-1){u=true
}}if(u){o.media=s||"all"
}else{g(n)
}}n();
return o
}f.loadCSS=d;
if(!("querySelector" in l)){return
}b.className+=" "+a.join(" ");
i.enhance=f
}(this));
var className="no-js",el=document.documentElement;
if(el.classList){el.classList.remove(className)
}else{el.className=el.className.replace(new RegExp("(^|\\b)"+className.split(" ").join("|")+"(\\b|$)","gi")," ")
}document.documentElement.className+=" js";