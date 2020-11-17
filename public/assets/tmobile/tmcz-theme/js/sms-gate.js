function isBrowserIE(){var c=window.navigator.userAgent;
var b=c.indexOf("MSIE ");
if(b>0){return parseInt(c.substring(b+5,c.indexOf(".",b)),10)
}var a=c.indexOf("Trident/");
if(a>0){var e=c.indexOf("rv:");
return parseInt(c.substring(e+3,c.indexOf(".",e)),10)
}var d=c.indexOf("Edge/");
if(d>0){return parseInt(c.substring(d+5,c.indexOf(".",d)),10)
}return false
}function getNoOfSMSAsciiOnly(a){var c=a.length;
var b=160;
if(c>b){b=b-6;
msgs=Math.floor((c+(b-1))/b)
}else{msgs=1
}return msgs
}function noDiacritic(c){var b="áäčďéěíĺľňóôőöŕšťúůűüýřžÁÄČĎÉĚÍĹĽŇÓÔŐÖŔŠŤÚŮŰÜÝŘŽ",a="aacdeeillnoooorstuuuuyrzAACDEEILLNOOOORSTUUUUYRZ",d="";
for(i=0;
i<c.length;
i++){if(b.indexOf(c.charAt(i))!==-1){d+=a.charAt(b.indexOf(c.charAt(i)))
}else{d+=c.charAt(i)
}}return d
}jQuery.fn.tmTextareaLimit=function(){return jQuery(this).each(function(){var j=jQuery(this);
if(j.data("tm-textarea-limit")!="init"){var a=j.attr("maxlength"),d=j.data("tm-textarea-limit"),c=d.split("=");
var k=j.val().length;
jQuery('<p class="pull-right like-label">'+c[0]+' <strong class="ultra-bold"><span id="textLen">'+k+"</span></strong> "+c[1]+' <strong class="ultra-bold"><span id="maxlength">'+a+"</span></strong> "+c[2]+"</p>").insertBefore(j);
if(j.data("tm-textarea-messagesplit")!=null){var b=j.data("tm-textarea-messagesplit"),h=b.split("=");
jQuery('<p class="mt-small mb-0">'+h[0]+'<strong class="ultra-bold"><span id="smss">1</span></strong>'+h[1]+"</p>").insertAfter(j);
var f=j.next().find("span#smss")
}var d=j.prev().find("span#maxlength");
var e=j.prev().find("span#textLen");
function g(){var l=j.val().length;
d.html(a-l<0?0:a-l);
e.html(l);
if(f!=null){f.html(getNoOfSMSAsciiOnly(j.val()))
}if(l>a){j.val(j.val().substring(0,a))
}}g();
j.keyup(g).keydown(g).focus(g).blur(g);
j.data("tm-textarea-limit","init")
}})
};
jQuery.fn.tmTextareaTemplates=function(){return jQuery(this).each(function(){var b=jQuery(this);
if(b.data("tm-textarea-templates")!="init"){var a=jQuery("#"+b.data("tm-textarea-templates-to"));
b.change(function(){if(b.find("option:selected").prevAll().length!=0){a.val(b.find("option:selected").text());
b.selectpicker("val",0);
window.setTimeout(function(){a.focus()
},50)
}});
b.data("tm-textarea-templates","init")
}})
};
jQuery.fn.tmSmiles=function(){return jQuery(this).each(function(){var a=jQuery(this);
if(a.data("tm-smiles")!="init"){var b=jQuery("#"+a.attr("title"));
a.removeAttr("title");
a.find("a").append('<span class="wrap-gate-smile"><span class="gate-smile"></span></span>');
a.find("a").click(function(){b.val(b.val()+jQuery(this).attr("title")).focus();
return false
});
a.data("tm-smiles","init")
}})
};
jQuery.fn.gtMmsUpload=function(){function a(){var b=document.createElement("input");
b.type="file";
return("multiple" in b&&typeof File!=="undefined"&&typeof(new XMLHttpRequest()).upload!=="undefined")
}if(a()){jQuery(".no-js-upload").hide();
return jQuery(this).each(function(){if(jQuery(this).data("gt-mms-upload")!=="init"){var k=jQuery(this),b=k.wrap('<div id="qq-uploader" class="qq-uploader-wrapper" />').parent(),j=k.data("tm-upload-thumbs")==undefined?false:k.data("tm-upload-thumbs"),g=k.attr("title"),c=k.data("tm-upload-max-limit")==undefined?999:parseInt(k.data("tm-upload-max-limit")),f=k.data("tm-upload-file-size")==undefined?0:parseInt(k.data("tm-upload-file-size")*1000),l=k.data("tm-upload-file-type")==undefined?[]:k.data("tm-upload-file-type").replace(/\*./g,"").split(";"),e=k.data("tm-upload-uploader"),d=jQuery("html").attr("lang")!==undefined?jQuery("html").attr("lang"):"cs";
var h=new qq.FileUploader({element:b[0],action:e,debug:false,sizeLimit:f,maxLimit:c,lang:d,allowedExtensions:l,buttonText:g,messages:{typeError:tmTranslate("qqUploaderTypeError",d),sizeError:tmTranslate("qqUploaderSizeError",d),minSizeError:tmTranslate("qqUploaderMinSizeError",d),maxLimitError:tmTranslate("qqUploaderMaxLimitError",d),emptyError:tmTranslate("qqUploaderEmptyError",d),onLeave:tmTranslate("qqUploaderOnLeave",d)},onProgress:function(p,o,m,n){if(c<0){b.addClass("qq-uploader-wrapper-disable");
h.getHandler().cancel(p)
}},onSubmit:function(n,m){c=c-1;
h.updateMaxLimit(c)
},onCancel:function(n,m){c=c+1;
h.updateMaxLimit(c);
if(c!=0){b.removeClass("qq-uploader-wrapper-disable")
}jQuery("#qq-uploader .qq-upload-list li").eq(n).hide();
jQuery("#qq-uploader .qq-uploaded-list li").eq(n).hide()
},onComplete:function(q,p,o){if(o.success){if(c==0){b.addClass("qq-uploader-wrapper-disable")
}if(j){var n;
switch("."+p.split(".").pop()){case".bmp":case".jpg":case".jpeg":case".gif":case".png":n='<img src="closed/attachment?id='+o.id+'" width="95" height="95" alt="'+Math.ceil(o.length/1000)+'kB" class="img-thumbnail" />';
break;
default:n='<img src="closed/attachment?id='+o.id+'" width="95" height="95" alt="'+Math.ceil(o.length/1000)+'kB" class="img-thumbnail" />'
}var m='<input type="hidden" name="att-'+o.id+'" value="1" />';
b.find(".qq-upload-list li").eq(q).hide();
b.find(".qq-uploaded-list").addClass("qq-uploaded-list-thumbs uploadify-thumbs-active").append('<li data-tm-uploadify-queue-thumb-name="'+p+'" data-tm-uploadify-att-id="'+o.id+'" class="qq-uploaded-list-thumb qq-uploaded-list-delete">'+n+'<span class="qq-uploaded-list-thumb-close ico-remove-sign" data-ico-width="15" data-ico-height="15"></span>'+m+"</li>");
b.tmSVGIcon()
}}else{c=c+1;
h.updateMaxLimit(c);
alert(tmLangTexts.qqUploaderFailed[d].replace("{file}",p));
b.find(".qq-upload-fail").hide()
}}});
b.on("click",".qq-uploaded-list-delete",function(){c=c+1;
h.updateMaxLimit(c);
if(c!==0){b.removeClass("qq-uploader-wrapper-disable")
}if(jQuery(this).get(0).tagName.toLowerCase()=="li"){var m=jQuery(this).data("tm-uploadify-att-id");
jQuery.ajax({url:"closed/ajax/remove-attachment?id="+m});
jQuery(this).remove()
}else{var m=jQuery(this).parent().data("tm-uploadify-att-id");
jQuery.ajax({url:"closed/ajax/remove-attachment?id="+m});
jQuery(this).parent().remove()
}return false
});
jQuery(this).data("gt-mms-upload","init")
}})
}else{}};
jQuery(document).ready(function(){var b=jQuery("#play-captcha-text"),d=jQuery("#play-captcha-text-ie"),a=document.getElementById("main-audio"),c;
if(isBrowserIE()){d.removeClass("hidden")
}else{c=function(e){return !e.paused
};
b.removeClass("hidden");
b.click(function(f){f.preventDefault();
if(!c(a)){a.play()
}})
}jQuery(".textarea-limit").tmTextareaLimit();
jQuery(".textarea-templates").tmTextareaTemplates();
jQuery(".gate-smiles").tmSmiles();
jQuery('input[type="file"].js-mms-upload').gtMmsUpload();
jQuery(".js-input-tags").each(function(){var r=jQuery(this);
r.tagsinput({cancelConfirmKeysOnEmpty:false});
r.on("itemAdded",function(w){jQuery(this).parent().tmSVGIcon();
r.tagsinput("input").val("")
});
var j=r.prev(".bootstrap-tagsinput"),u=jQuery('<button type="button" class="btn btn-sm btn-link btn-taglist"><i class="ico-magazine"></i></button>'),n=jQuery('<ul class="dropdown-menu gt-suggestions-menu"></ul>'),t="",f,o,h="highlighted";
j.addClass("with-btn-taglist input-lg").append(u);
j.tmSVGIcon();
function e(w,x){if(w.name!==undefined){w.value=w.value.replace(/.*<(.*)>/,"$1");
x.append('<li><a href="" class="suggestion-item" data-item-name="'+w.name+'" data-item-number="'+w.value+'">'+w.name+'<span class="pull-right">'+w.value+"</span></a></li>")
}else{x.append('<li><a href="" class="suggestion-item">'+w.value+"</a></li>")
}}function m(){j.removeClass("open");
n.find("li").removeClass("hidden "+h)
}function q(w){var x=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
return x.test(w)
}function s(w){var x=/\[.*]/;
return x.test(w)
}function p(w){var x=l(w);
r.tagsinput("add",x)
}function l(x){var w;
if(x.data("item-number")!==undefined&&x.data("item-name")!==undefined){if(q(x.data("item-number"))||s(x.data("item-number"))){w=x.data("item-number")
}else{w='"'+x.data("item-name")+'" <'+x.data("item-number")+">"
}}else{if(x.data("item-number")!==undefined){w=x.data("item-number")
}else{w=x.text()
}}return w
}function g(y){if(y.length){var x=y.position().top,w=Math.round((x/n.height())*100)/100;
if(w<0||w>=0.8){n.scrollTop(x)
}}}function k(w){w.addClass(h)
}function v(w){w.removeClass(h)
}u.click(function(){if(j.hasClass("open")){m()
}else{j.addClass("open")
}});
n.on("click",".suggestion-item",function(w){w.preventDefault();
p(jQuery(this));
m()
}).on("mouseenter","li",function(){k(jQuery(this).not(".suggestion-category"));
f=r.tagsinput("input").val();
o=l(jQuery(this).not(".suggestion-category").find(".suggestion-item"));
if(o!==""){r.tagsinput("input").val("")
}}).on("mouseleave","li",function(){v(jQuery(this).not(".suggestion-category"))
});
jQuery("body").on("click",function(w){if(!jQuery(w.target).is(r)&&!jQuery(w.target).is(u)&&!jQuery(w.target).parent().is(u)){m()
}});
j.find("input").on("keyup",function(B){if(B.which!==13){j.addClass("open")
}var z=jQuery(this),y=n.find("> li > a"),C,w,x;
if(B.which!==40&&B.which!==38&&B.which!==13){y.each(function(){var E=jQuery(this),D=noDiacritic(E.text().toLowerCase()),F=noDiacritic(z.val().toLowerCase());
if(D.search(F)>-1){E.parent().removeClass("hidden")
}else{E.parent().addClass("hidden")
}})
}C=n.find("."+h);
if(B.which===40){if(!C.length){w=n.find("> li").not(".suggestion-category, .hidden").first();
k(w)
}else{v(n.find("> li"));
w=C.nextAll().not(".suggestion-category, .hidden").first();
if(w.length===0){w=C.siblings().not(".suggestion-category, .hidden").first()
}k(w)
}r.tagsinput("input").val(l(w.find(".suggestion-item")));
g(w)
}else{if(B.which===38){if(!C.length){x=n.find("> li").not(".suggestion-category, .hidden").last();
k(x)
}else{v(n.find("> li"));
x=C.prevAll().not(".suggestion-category, .hidden").first();
if(x.length===0){x=C.siblings().not(".suggestion-category, .hidden").last()
}k(x)
}r.tagsinput("input").val(l(x.find(".suggestion-item")));
g(x)
}else{if(B.which===27){r.tagsinput("input").val("");
m()
}else{if(B.which===13){var A=n.find("."+h+" .suggestion-item").eq(0);
if(A.length){p(A);
m()
}}}}}});
if(r.hasClass("autocomplete-sms")){jQuery.ajax({url:"/sms/_DATA/data/phone-numbers.xml",dataType:"xml",success:function(w){var x=jQuery("contact",w).map(function(){return{value:(jQuery(this).attr("name")==undefined||jQuery(this).attr("number").match(/^\[.*\]$/))?jQuery(this).attr("number"):""+jQuery(this).attr("name")+" <"+jQuery(this).attr("number")+">",name:jQuery(this).attr("name"),category:jQuery(this).parent().attr("name"),categoryUrl:jQuery(this).parent().attr("url"),categoryLinkText:jQuery(this).parent().attr("linkText"),categoryLinkUrl:jQuery(this).parent().attr("linkUrl")}
}).get();
jQuery.each(x,function(y,z){if(z.category!==t){if(z.categoryLinkUrl===undefined&&z.categoryLinkText===undefined){n.append('<li class="suggestion-category"><span>'+z.category+"</span></li>")
}else{if(z.categoryUrl===undefined){n.append('<li class="suggestion-category"><span title="'+z.categoryLinkUrl+'" class="suggestion-link">'+z.categoryLinkText+"</span> <span>"+z.category+"</span></li>")
}else{n.append('<li class="suggestion-category"><span><a href="'+z.categoryLinkUrl+'" class="suggestion-link bold">'+z.categoryLinkText+'</a></span> <span><a href="'+z.categoryUrl+'" class=suggestion-category-link">'+z.category+"</a></span></li>")
}}e(z,n);
t=z.category
}else{e(z,n)
}});
j.append(n)
}})
}if(r.hasClass("autocomplete-mails")){jQuery.ajax({url:"/sms/_DATA/data/mails.xml",dataType:"xml",success:function(w){var x=jQuery("mail",w).map(function(){return{name:(jQuery(this).attr("name")==undefined?jQuery(this).text():jQuery(this).attr("name")),value:jQuery(this).text()}
}).get();
jQuery.each(x,function(y,z){e(z,n)
});
j.append(n)
}})
}});
if(jQuery(".user-info").parent().is(".signed-in")){jQuery("body").addClass("signed-in")
}});