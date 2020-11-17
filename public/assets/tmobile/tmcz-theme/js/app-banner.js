function __setCookie(d,e,b){var c=new Date();
c.setTime(c.getTime()+(b*24*60*60*1000));
var a=c.toGMTString();
document.cookie=d+"="+e+"; expires="+a
}function __getCookie(a){a=a+"=";
var d=document.cookie.split(";");
for(var c=0;
c<d.length;
c++){var b=d[c].trim();
return b.indexOf(a)==0?b.substring(a.length,b.length):""
}}var PlatformDetect=function(){this.UA=navigator.userAgent.toLowerCase()
};
PlatformDetect.prototype={constructor:PlatformDetect,isAndroid:function(){return this.UA.match(/android/gi)!==null
},isIOS:function(){return this.UA.match(/(iPad|iPhone|iPod)/gi)!==null
},isWindowsPhone:function(){return this.UA.match(/IEMobile/gi)!==null
}};
var mtmApp={title:"Můj T-Mobile",description:"T-Mobile Czech Republic a.s.<br>Získat - v Google Play",icon:"https://www.t-mobile.cz/um/GANGpages/selfcare-mobile/images/custom/xhdpi/mtm-icon.png",button:"Zobrazit",scheme:"",store:{platform:{android:"market://details?id=cz.tmobile.oneapp",ios:"https://itunes.apple.com/cz/app/muj-t-mobile/id562858149",unsupported:{errMessage:"Omlouváme se, ale pro vaše zařízení není Můj T-Mobile aplikace dostupná."}}},showAgainIn:7};
var AppBanner=function(g,e,d,c,a){this.detect=new PlatformDetect(),this.title=g,this.description=e,this.icon=new Image(),this.iconUrl=d,this.iconLoaded=false,this.buttonText=c,this.appId=null,this.appUrlScheme=a,this.storeUrlScheme=null,this.platform=null;
if(this.detect.isAndroid()){this.platform="android"
}else{if(this.detect.isWindowsPhone()){this.platform="windows"
}}if(!this.platform||__getCookie("ab-closed")){return
}var f=document.getElementsByTagName("meta");
for(var b=0;
b<f.length;
b++){if(this.platform=="android"&&f[b].getAttribute("name")=="google-play-app"){this.appId=f[b].getAttribute("content").split("app-id=")[1];
this.storeUrlScheme="market://details?id="+this.appId;
break
}if(this.platform=="windows"&&f[b].getAttribute("name")=="msApplication-PackageFamilyName"){this.appId=f[b].getAttribute("content").split("app-id=")[1];
this.storeUrlScheme="ms-windows-store:PDP?PFN="+this.appId;
break
}}if(this.storeUrlScheme){this.create()
}};
AppBanner.prototype={constructor:AppBanner,create:function(){this.banner=document.createElement("div");
this.banner.setAttribute("id","app-banner");
this.banner.setAttribute("class",this.platform+" app-banner");
this.banner.innerHTML='<div class="app-banner-inner"><a href="#" class="ico-close ab-close" role="button">&times;</a><div class="ab-info"><img src="'+this.iconUrl+'" alt="" /><div><strong>'+this.title+'</strong><span class="ab-description">'+this.description+'</span></div></div><a href="'+this.appUrlScheme+'" class="ab-button" role="button">'+this.buttonText+"</a></div>";
var a=this;
this.icon.onload=function(){document.body.insertBefore(a.banner,document.body.firstChild);
a.iconLoaded=true;
document.documentElement.classList.add("app-banner-loaded")
};
this.icon.src=this.iconUrl;
this.closeButton=this.banner.querySelectorAll(".ab-close")[0];
this.closeButton.addEventListener("click",this.close);
this.openButton=this.banner.querySelectorAll(".ab-button")[0];
this.openButton.addEventListener("click",this.open)
},open:function(c){c.preventDefault();
var b="",a=new PlatformDetect();
if(a.isAndroid()){b=mtmApp.store.platform.android
}else{if(a.isIOS()){b=mtmApp.store.platform.ios
}}if(b){window.location=b
}else{alert(mtmApp.store.platform.unsupported.errMessage)
}__setCookie("ab-closed","true",mtmApp.showAgainIn)
},close:function(b){b.preventDefault();
var a=document.getElementById("app-banner");
a.parentNode.removeChild(a);
document.documentElement.classList.remove("app-banner-loaded");
__setCookie("ab-closed","true",mtmApp.showAgainIn)
}};
window.onload=function(){new AppBanner(mtmApp.title,mtmApp.description,mtmApp.icon,mtmApp.button,mtmApp.scheme);
var a=new PlatformDetect();
if(a.isAndroid()){document.documentElement.classList.add("android")
}};