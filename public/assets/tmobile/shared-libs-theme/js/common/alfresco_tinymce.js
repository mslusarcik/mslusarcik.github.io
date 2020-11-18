var Accordion={init:function(a){var b=true;jQuery(a).find("div.accordion").not(".initialized").each(function(){var e=jQuery(this);var d=e.find("> .accordion-showtext").attr("title");var c=e.find("> .accordion-hidetext").attr("title");e.find("> .accordion-showtext, > .accordion-hidetext").remove();if(d&&c){e.find("> .accordion-section > .accordion-header").each(function(){if(b){Accordion.appendLink(this,'<a href="#" class="accordion-control">'+c+"</a>");b=false}else{Accordion.appendLink(this,'<a href="#" class="accordion-control">'+d+"</a>")}})}e.bind("accordionchange",function(f,g){jQuery(this).find("a.accordion-control").html(d);if(jQuery(g.newContent).is(":visible")){jQuery(g.newHeader).find("a.accordion-control").html(c);var h=jQuery(g.newHeader).offset().top;if(jQuery(window).scrollTop()>h){jQuery("html, body").animate({scrollTop:h},1)}}})}).accordion({header:".accordion-header",autoHeight:false,alwaysOpen:false,collapsible:true}).addClass("initialized")},appendLink:function(d,c,b){var a='<p class="ui-control-toggle"';if(b){a+=' title="'+b+'"'}a+=">";a+=c;a+="</p>";jQuery(d).append(a)}};jQuery(document).bind("initcontent",function(b,a){Accordion.init(a)});(function(b){function a(f,e){var h=f.find("> .ui-collapsible-header");var d=e;if(typeof e!="boolean"){e=!f.find("> .collapsible-content").is(":visible");d=f.data("collapsible-effect")}if(e){h.addClass("ui-state-active ui-corner-top ui-collapsible-header-selected").removeClass("ui-state-default ui-corner-all")}else{h.removeClass("ui-state-active ui-corner-top ui-collapsible-header-selected").addClass("ui-state-default ui-corner-all")}var g=function(){f.trigger("collapsiblechange",{header:h.get(0),content:h.next().get(0),visible:e})};h.next().toggle(d,g);if(d==e){g()}}function c(f,d){var g=d.header||".ui-collapsible-header";var e=d.effect||"fast";f.addClass("ui-helper-reset ui-widget ui-collapsible").find("> "+g).click(function(h){if(!h.isDefaultPrevented||!h.isDefaultPrevented()){f.collapsible("toggle")}}).addClass("ui-helper-reset ui-collapsible-header").next().hide().addClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-collapsible-content");f.data("collapsible-effect",e)}b.fn.extend({collapsible:function(){if(arguments[0]=="open"){a(this,true)}else{if(arguments[0]=="close"){a(this,false)}else{if(arguments[0]=="toggle"){a(this)}else{if(arguments[0]=="option"){var e=arguments[1];switch(e){case"opened":return obj.find("> .ui-collapsible-header").hasClass("ui-state-active")}}else{if(typeof arguments[0]=="object"){var d=arguments[0];this.each(function(){var f=b(this);c(f,d)})}}}}}return this}})})(jQuery);var Collapsible={init:function(a){jQuery(a).find(".collapsible-box").not(".initialized").each(function(){var d=jQuery(this);var c=d.parent().find("> .collapsible-showtext").attr("title");var b=d.parent().find("> .collapsible-hidetext").attr("title");if(c!=null&&b!=null){d.find("> .collapsible-header").each(function(){Collapsible.appendLink(this,'<a href="#">'+c+"</a>")});d.bind("collapsiblechange",function(e,f){if(f.visible){jQuery(f.header).find("> p.ui-control-toggle > a").html(b)}else{jQuery(f.header).find("> p.ui-control-toggle > a").html(c)}})}}).collapsible({header:".collapsible-header"}).find("> .collapsible-header a").click(function(b){b.preventDefault();jQuery(this).parent().click()}).addClass("initialized");if(jQuery.url.param("expand_collapsible")=="true"){jQuery(".collapsible-box").find("> .collapsible-header").click()}},appendLink:function(d,c,b){var a='<p class="ui-control-toggle"';if(b){a+=' title="'+b+'"'}a+=">";a+=c;a+="</p>";jQuery(d).append(a)}};jQuery(document).bind("initcontent",function(b,a){Collapsible.init(a)});(function(a){function b(i,f){var d=f.interval||5000;var c=f.height;var e=0;var h=function(){i.find("> .ui-headline:eq("+e+")").animate({top:-(c+5)},"slow",function(){a(this).css("top",(c+10)+"px")});e=(e+1)%i.find("> .ui-headline").size();i.find("> .ui-headline:eq("+e+")").show().animate({top:5},"slow")};var g;a(document).ready(function(){i.find("> .ui-headline").eq(0).css("top","5px");g=setInterval(h,d);i.hover(function(){clearInterval(g);g=null},function(){g=setInterval(h,d)})})}a.fn.extend({headlines:function(){var c=arguments[0]||{};this.each(function(){var d=a(this);b(d,c)});return this}})})(jQuery);var Headlines={init:function(a){jQuery(a).find(".ui-scrollup:not(.initialized)").each(function(){var c=jQuery(this);var b=150;if(c.hasClass("scrollup-small")){b=100}else{if(c.hasClass("scrollup-large")){b=200}}c.height(b);c.headlines({height:b,interval:5000})}).addClass("initialized")},parseSize:function(b){var a=jQuery(b);if(a.hasClass("scrollup-small")){return"small"}else{if(a.hasClass("scrollup-large")){return"large"}else{return"medium"}}}};jQuery(document).bind("initcontent",function(b,a){Headlines.init(a)});var LightBox={init:function(a){jQuery(a).find("div.lightbox:not(.initialized)").each(function(){var f=jQuery(this).find("> .lightbox-content");var e=parseInt(f.css("width"))||"auto";var d=parseInt(f.css("height"))||"auto";var b=f.find("img");if(b.length){e=b.attr("width");d=b.attr("height")}f.dialog({autoOpen:false,bgiframe:true,modal:false,resizable:false,width:e,height:d,title:jQuery(this).attr("lbtitle")});jQuery(this).click(function(){if(jQuery("html").hasClass("ie7")){var c=f.dialog("open").offset();jQuery("html, body").animate({scrollTop:c.top},0)}else{f.dialog("open")}})}).addClass("initialized")}};jQuery(document).bind("initcontent",function(b,a){LightBox.init(a)});var TabControl={init:function(a){jQuery(a).find("div.tabcontrol:not(.initialized)").tabs().addClass("initialized")}};jQuery(document).bind("initcontent",function(b,a){TabControl.init(a)});var TextEffects={init:function(a){jQuery(a).find(".effect-container").each(function(){var d=jQuery(this);var c=TextEffects._parseEffect(this);switch(c.effect){case"highlight":d.bind("mouseenter click",function(){d.effect("highlight",{},500)});break;case"scale":case"size":var f={width:d.innerWidth(),height:d.innerHeight()};var e={width:f.width*parseFloat(c.args)/100,height:f.height*parseFloat(c.args)/100};var b=(c.effect=="scale")?"both":"box";d.toggle(function(){d.effect("size",{from:f,to:e,scale:b})},function(){d.effect("size",{from:e,to:f,scale:b})});d.width(f.width);d.height(f.height);break;default:return}d.addClass("ui-helper-reset ui-widget");d.find("> .effect-title").addClass("ui-helper-reset ui-corner-top");d.find("> .effect-content").addClass("ui-helper-reset ui-widget-content ui-corner-bottom")})},_parseEffect:function(a){return{element:a,effect:jQuery(a).find("> .effect-name").attr("title"),args:jQuery(a).find("> .effect-args").attr("title")}}};jQuery(document).bind("initcontent",function(b,a){TextEffects.init(a)});jQuery(document).ready(function(){jQuery(document).trigger("initcontent",document)});