(function(F,k,T){var G={transition:"elastic",speed:300,width:false,initialWidth:"600",innerWidth:false,maxWidth:false,height:false,initialHeight:"450",innerHeight:false,maxHeight:false,scalePhotos:false,scrolling:true,inline:false,html:false,iframe:false,fastIframe:true,photo:false,href:false,title:false,rel:false,opacity:0.9,preloading:true,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",open:false,returnFocus:true,loop:true,slideshow:false,slideshowAuto:true,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:false,onLoad:false,onComplete:false,onCleanup:false,onClosed:false,overlayClose:true,escKey:true,arrowKey:true,top:false,bottom:false,left:false,right:false,fixed:false,data:false},u="colorbox",P="cbox",o=P+"Element",S=P+"_open",d=P+"_load",R=P+"_complete",r=P+"_cleanup",Y=P+"_closed",i=P+"_purge",s=F.browser.msie&&!F.support.opacity,aa=s&&F.browser.version<7,X=P+"_IE6",N,ab,ac,c,b,W,K,H,j,h,n,q,U,e,p,B,O,w,y,Z,ad,l,g,a,t,E,m,A,V,J,D,x,I;function M(ag,ae,af){af=k.createElement("div");if(ag){af.id=P+ag}af.style.cssText=ae||"";return F(af)}function L(ae,af){return Math.round((/%/.test(ae)?((af==="x"?W.width():W.height())/100):1)*parseInt(ae,10))}function z(ae){return Z.photo||/\.(gif|png|jpg|jpeg|bmp)(?:\?([^#]*))?(?:#(\.*))?$/i.test(ae)}function Q(ae){Z=F.extend({},F.data(t,u));for(ae in Z){if(F.isFunction(Z[ae])&&ae.substring(0,2)!=="on"){Z[ae]=Z[ae].call(t)}}Z.rel=Z.rel||t.rel||"nofollow";Z.href=Z.href||F(t).attr("href");Z.title=Z.title||t.title;if(typeof Z.href==="string"){Z.href=F.trim(Z.href)}}function C(ae,af){if(af){af.call(t)}F.event.trigger(ae)}function v(){var af,ah=P+"Slideshow_",ai="click."+P,aj,ag,ae;if(Z.slideshow&&b[1]){aj=function(){U.text(Z.slideshowStop).unbind(ai).bind(R,function(){if(E<b.length-1||Z.loop){af=setTimeout(I.next,Z.slideshowSpeed)}}).bind(d,function(){clearTimeout(af)}).one(ai+" "+r,ag);ab.removeClass(ah+"off").addClass(ah+"on");af=setTimeout(I.next,Z.slideshowSpeed)};ag=function(){clearTimeout(af);U.text(Z.slideshowStart).unbind([R,d,r,ai].join(" ")).one(ai,aj);ab.removeClass(ah+"on").addClass(ah+"off")};if(Z.slideshowAuto){aj()}else{ag()}}else{ab.removeClass(ah+"off "+ah+"on")}}function f(af){if(!J){jQuery("body").css({overflow:"hidden",position:"absolute",width:"100%"});t=af;Q();b=F(t);E=0;if(Z.rel!=="nofollow"){b=F("."+o).filter(function(){var ag=F.data(this,u).rel||this.rel;return(ag===Z.rel)});E=b.index(t);if(E===-1){b=b.add(t);E=b.length-1}}if(!A){A=V=true;ab.show();if(Z.returnFocus){try{t.blur();F(t).one(Y,function(){try{this.focus()}catch(ag){}})}catch(ae){}}N.css({opacity:+Z.opacity,cursor:Z.overlayClose?"pointer":"auto"}).show();Z.w=L(Z.initialWidth,"x");Z.h=L(Z.initialHeight,"y");I.position();if(aa){W.bind("resize."+X+" scroll."+X,function(){N.css({width:W.width(),height:W.height(),top:W.scrollTop(),left:W.scrollLeft()})}).trigger("resize."+X)}C(S,Z.onOpen);y.add(n).hide();w.html(Z.close)}I.load(true)}}I=F.fn[u]=F[u]=function(ae,ag){var af=this;ae=ae||{};if(!af[0]){if(af.selector){return af}af=F("<a/>");ae.open=true}if(ag){ae.onComplete=ag}af.each(function(){F.data(this,u,F.extend({},F.data(this,u)||G,ae));F(this).addClass(o)});if((F.isFunction(ae.open)&&ae.open.call(af))||ae.open){f(af[0])}return af};I.init=function(){W=F(T);ab=M().attr({id:u,"class":s?P+(aa?"IE6":"IE"):""});N=M("Overlay",aa?"position:absolute":"").hide();ac=M("Wrapper");c=M("Content").append(n=M("Title"),w=M("Close"),K=M("LoadedContent","width:0; height:0; overflow:hidden").append(H=M("LoadedContentIn")),q=M("Current"),p=M("Next").append(e=M("NextIn")),O=M("Previous").append(B=M("PreviousIn")),U=M("Slideshow").bind(S,v));ac.append(M(false,"clear:left").append(c)).children().children().css({"float":"left"});j=M(false,"position:absolute; width:9999px; visibility:hidden; display:none");F("body").prepend(N,ab.append(h=M("LoadingOverlay").add(M("LoadingGraphic")),ac,j));c.children().hover(function(){F(this).addClass("hover")},function(){F(this).removeClass("hover")}).addClass("hover");ad=c.outerHeight(true)-c.height();l=c.outerWidth(true)-c.width();g=K.outerHeight(true);a=K.outerWidth(true);ab.css({"padding-bottom":ad,"padding-right":l}).hide();p.click(function(){I.next()});O.click(function(){I.prev()});w.click(function(){I.close()});y=p.add(O).add(q).add(U);c.children().removeClass("hover");N.click(function(){if(Z.overlayClose){I.close()}});F(k).bind("keydown."+P,function(af){var ae=af.keyCode;if(A&&Z.escKey&&ae===27){af.preventDefault();I.close()}if(A&&Z.arrowKey&&b[1]){if(ae===37){af.preventDefault();O.click()}else{if(ae===39){af.preventDefault();p.click()}}}})};I.remove=function(){ab.add(N).remove();F("."+o).removeData(u).removeClass(o)};I.position=function(ag,ae){var ai=0,ah=0;W.unbind("resize."+P);ab.css("margin-left","-9999px");if(Z.fixed&&!aa){ab.css({position:"absolute"})}else{ai=W.scrollTop();ah=W.scrollLeft();ab.css({position:"absolute"})}if(Z.right!==false){ah+=Math.max(W.width()-Z.w-a-l-L(Z.right,"x"),0)}else{if(Z.left!==false){ah+=L(Z.left,"x")}else{ah=Math.round(Math.max(W.width()-Math.max(jQuery("#cboxLoadedContent").innerWidth(),300),0)/2)}}if(Z.bottom!==false){ai+=Math.max(k.documentElement.clientHeight-Z.h-g-ad-L(Z.bottom,"y"),0)}else{if(Z.top!==false){ai+=L(Z.top,"y")}else{ai+=Math.round(Math.max(k.documentElement.clientHeight-Z.h-g-ad,0)/2)}}ab.css("margin-left","0");ag=(ab.width()===Z.w+a&&ab.height()===Z.h+g)?0:ag||0;ac[0].style.width=ac[0].style.height="9999px";function aj(al,ak){h[0].style.height=h[1].style.height=al.style.height}var af=Math.max(300,jQuery("#cboxLoadedContentIn").innerWidth());if(Z.maxWidth){af=Z.maxWidth}ab.dequeue().animate({width:af,height:Z.h+g,top:ai,left:ah},{duration:ag,complete:function(){V=false;aj(this);ac[0].style.width=jQuery("#cboxLoadedContentIn").innerWidth();ac[0].style.height=jQuery("#cboxLoadedContentIn").innerHeight()+n.innerHeight();if(ae){ae()}setTimeout(function(){W.bind("resize."+P,I.position)},1)},step:function(){aj(this)}})};I.resize=function(ae){if(A){Z.w=jQuery("#cboxLoadedContentIn").innerWidth();if(K.hasClass("iframe")){Z.w=W.width()-50;K.find("iframe").width(Z.w)}n.width(Z.w);K.width(Z.w);if(!Z.maxHeight){if(W.height()<450&&jQuery("#cboxLoadedContentIn").innerHeight()+n.innerHeight()>W.height()){jQuery("body").css({overflow:"auto",position:"relative"});Z.h=jQuery("#cboxLoadedContentIn").innerHeight()+n.innerHeight();K.add(K.find("iframe")).height(Z.h)}else{if(W.height()>450&&jQuery("#cboxLoadedContentIn").innerHeight()+n.innerHeight()>W.height()){jQuery("body").css({overflow:"hidden",position:"relative"});Z.h=W.height()-50;K.add(K.find("iframe")).height(W.height()-50-n.innerHeight())}else{jQuery("body").css({overflow:"hidden",position:"relative"});Z.h=jQuery("#cboxLoadedContentIn").innerHeight()+n.innerHeight();K.add(K.find("iframe")).height(jQuery("#cboxLoadedContentIn").innerHeight())}}}else{Z.h=Z.maxHeight+n.innerHeight();K.add(K.find("iframe")).height(Z.maxHeight)}if(Z.maxWidth){Z.w=Z.maxWidth;K.addClass("maxWidth").add(K.find("iframe")).add(n).add(jQuery("#colorbox")).width(Z.w)}if(jQuery("#cboxLoadedContentIn").innerHeight()+n.innerHeight()+50>F(T).height()){ab.addClass("colorbox-is-too-high")}else{ab.removeClass("colorbox-is-too-high")}I.position(Z.transition==="none"?0:Z.speed)}};I.prep=function(af){if(!A){return}var ai,ag=Z.transition==="none"?0:Z.speed;K.remove();K=M("LoadedContent").append(M("LoadedContentIn").append(af));function ae(){Z.w=Z.w||K.width();Z.w=Z.mw&&Z.mw<Z.w?Z.mw:Z.w;return Z.w}function ah(){Z.h=Z.h||K.height();Z.h=Z.mh&&Z.mh<Z.h?Z.mh:Z.h;return Z.h}K.hide().appendTo(j.show()).css({width:ae(),overflow:Z.scrolling?"auto":"hidden"}).appendTo(c);j.hide();F(m).css({"float":"none"});if(aa){F("select").not(ab.find("select")).filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one(r,function(){this.style.visibility="inherit"})}ai=function(){var ao,aq,am,al,an=b.length,ak,aj;if(!A){return}function ap(){if(s){ab[0].style.removeAttribute("filter")}}aj=function(){clearTimeout(x);h.hide();C(R,Z.onComplete)};if(s){if(m){K.fadeIn(100)}}n.html(Z.title).add(K).show();if(an>1){if(typeof Z.current==="string"){q.html(Z.current.replace("{current}",E+1).replace("{total}",an)).show()}p[(Z.loop||E<an-1)?"show":"hide"]().html('<div id="cboxNextIn">'+Z.next+"</div>");O[(Z.loop||E)?"show":"hide"]().html('<div id="cboxPreviousIn">'+Z.previous+"</div>");ao=E?b[E-1]:b[an-1];am=E<an-1?b[E+1]:b[0];if(Z.slideshow){U.show()}if(Z.preloading){al=F.data(am,u).href||am.href;aq=F.data(ao,u).href||ao.href;al=F.isFunction(al)?al.call(am):al;aq=F.isFunction(aq)?aq.call(ao):aq;if(z(al)){F("<img/>")[0].src=al}if(z(aq)){F("<img/>")[0].src=aq}}}else{y.hide()}if(Z.iframe){ak=F("<iframe/>").addClass(P+"Iframe")[0];if(Z.fastIframe){aj()}else{F(ak).one("load",aj)}ak.name=P+(+new Date());ak.src=Z.href;ak.height=W.height()-50;ak.width=W.width()-50;if(!Z.scrolling){ak.scrolling="no"}if(s){ak.frameBorder=0;ak.allowTransparency="true"}F(ak).appendTo(K.addClass("iframe").find("> div")).one(i,function(){ak.src="//about:blank"})}else{aj()}if(Z.transition==="fade"){ab.fadeTo(ag,1,ap)}else{ap()}I.resize({innerHeight:jQuery("#cboxLoadedContentIn").innerHeight()+n.innerHeight()})};if(Z.transition==="fade"){ab.fadeTo(ag,0,function(){I.position(0,ai)})}else{I.position(ag,ai)}};I.load=function(ag){var af,ah,ae=I.prep;V=true;m=false;t=b[E];if(!ag){Q()}C(i);C(d,Z.onLoad);Z.h=Z.height?L(Z.height,"y")-g-ad:Z.innerHeight&&L(Z.innerHeight,"y");Z.w=Z.width?L(Z.width,"x")-a-l:Z.innerWidth&&L(Z.innerWidth,"x");Z.mw=Z.w;Z.mh=Z.h;if(Z.maxWidth){Z.mw=L(Z.maxWidth,"x")-a-l;Z.mw=Z.w&&Z.w<Z.mw?Z.w:Z.mw}if(Z.maxHeight){Z.mh=L(Z.maxHeight,"y")-g-ad;Z.mh=Z.h&&Z.h<Z.mh?Z.h:Z.mh}af=Z.href;x=setTimeout(function(){h.show()},100);if(Z.inline){M().hide().insertBefore(F(af)[0]).one(i,function(){F(this).replaceWith(jQuery("#cboxLoadedContentIn").children())});ae(F(af))}else{if(Z.iframe){ae(" ")}else{if(Z.html){ae(Z.html)}else{if(z(af)){F(m=new Image()).addClass(P+"Photo").error(function(){Z.title=false;ae(M("Error").text("This image could not be loaded"))}).load(function(){var ai;m.onload=null;if(Z.scalePhotos){ah=function(){m.height-=m.height*ai;m.width-=m.width*ai};if(Z.mw&&m.width>Z.mw){ai=(m.width-Z.mw)/m.width;ah()}if(Z.mh&&m.height>Z.mh){ai=(m.height-Z.mh)/m.height;ah()}}if(Z.h){m.style.marginTop=Math.max(Z.h-m.height,0)/2+"px"}if(b[1]&&(E<b.length-1||Z.loop)){m.style.cursor="pointer";m.onclick=function(){I.next()}}if(s){m.style.msInterpolationMode="bicubic"}setTimeout(function(){ae(m)},1)});setTimeout(function(){m.src=af},1)}else{if(af){if(af.charAt(0)!="#"){af=af.replace("#"," #")}j.load(af,Z.data,function(aj,ai,ak){ae(ai==="error"?M("Error").addClass("box background-red box-padding-small ico ico-ko text-red text-size-2").text("Omlouváme se, ale stránku se nepodařilo načíst. Zkuste to prosím později."):F(this).contents())})}}}}}};I.next=function(){if(!V&&b[1]&&(E<b.length-1||Z.loop)){E=E<b.length-1?E+1:0;I.load()}};I.prev=function(){if(!V&&b[1]&&(E||Z.loop)){E=E?E-1:b.length-1;I.load()}};I.close=function(){if(A&&!J){jQuery("body").css({overflow:"auto",position:"relative"});J=true;A=false;C(r,Z.onCleanup);W.unbind("."+P+" ."+X);N.fadeTo(200,0);ab.stop().fadeTo(300,0,function(){ab.add(N).css({opacity:1,cursor:"auto"}).hide();C(i);K.remove();setTimeout(function(){J=false;C(Y,Z.onClosed)},1)})}};I.element=function(){return F(t)};I.settings=G;D=function(ae){if(!((ae.button!==0&&typeof ae.button!=="undefined")||ae.ctrlKey||ae.shiftKey||ae.altKey)){ae.preventDefault();f(this)}};if(F.fn.delegate){F(k).delegate("."+o,"click",D)}else{F("."+o).live("click",D)}F(I.init)}(jQuery,document,this));