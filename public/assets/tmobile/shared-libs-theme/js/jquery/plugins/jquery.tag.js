if(!Array.prototype.indexOf){Array.prototype.indexOf=function(b){var a=this.length>>>0;var c=Number(arguments[1])||0;c=(c<0)?Math.ceil(c):Math.floor(c);if(c<0){c+=a}for(;c<a;c++){if(c in this&&this[c]===b){return c}}return -1}}(function(a){a.fn.tag=function(b){var c={seperator:",",unique:true,addOnEnter:true,style:{list:"taglist",item:"tag",input:"input",remove:"delete"}};b=a.extend(c,b);a(this).each(function(){if((seperator=a(this).attr("data-seperator"))!=""){b.seperator=seperator}var e=function(v){var t=v.replace(/^\s+|\s+$/g,"");if(t==""){return}var s=a("<li/>").addClass(b.style.item);var q=a("<span/>");var r=a("<span/>").html("[X]");var u=a("<a/>",{tabindex:"-1"}).addClass(b.style.remove).append(r).click(function(){a(this).closest("li").not(".ico").remove();d()});if(b.unique&&l.indexOf(t)>-1){return}l.push(t);q.html(t);s.append(q).append(" ").append(u);return s};var j=function(q){if(a(q).val()!=""){var r=e(a(q).val());if(!r){a(q).val("");a(q).width(8)}else{a(q).closest("li").not(".ico").before(r);a(q).val(a(q).val().replace(b.seperator,""));a(q).width(8).val("").focus()}d();k.html("")}};var d=function(){var q=[];a("li."+b.style.item+" > span",g).each(function(){q.push(a(this).html())});l=q;a(i).val(q.join(b.seperator))};var i=a(this);if(i.is(":input")){i.hide();var g=a("<ul/>").addClass(b.style.list).click(function(){a(this).find("input").focus()});var n=a("<input/>",{type:"text"});var p=i.val().split(b.seperator);var l=[];var f;for(f=0;f<p.length;f++){var m=e(p[f]);g.append(m)}d();i.after(g);var h=a("<li/>").addClass(b.style.input);var k=a("<span/>");k.hide();h.append(n);n.after(k);g.append(h);var o=function(r){k.html(a(r).val().replace(/\s/g,"&nbsp;"));var q=25;a(r).width(k.width()+q)};n.bind("keyup",function(){o(this)}).bind("keydown",function(r){o(this);var q=r.keyCode||r.which;if(a(this).val()==""&&(q==8||q==46)){a(this).width(a(this).val()!=""?k.width()+5:8);switch(q){case 8:a(this).closest("li").not(".ico").prev().remove();break;case 46:a(this).closest("li").not(".ico").next().remove();break}d();r.preventDefault();return false}if(a(this).val()==""){if(q==37||q==38){a(this).width(a(this).val()!=""?k.width()+5:8);a(this).closest("li").not(".ico").prev().before(a(this).closest("li").not(".ico"));a(this).focus()}if(q==39||q==40){a(this).width(a(this).val()!=""?k.width()+5:8);a(this).closest("li").not(".ico").next().after(a(this).closest("li").not(".ico"));a(this).focus()}}}).bind("keyup",function(r){o(this);var q=r.keyCode||r.which;if(b.seperator==String.fromCharCode(q)||b.seperator==q||(b.addOnEnter&&q==13)){j(this);r.preventDefault();return false}}).bind("keypress",function(r){o(this);var q=r.keyCode||r.which;if(b.seperator==String.fromCharCode(q)||b.seperator==q||(b.addOnEnter&&q==13)){j(this);r.preventDefault();return false}}).bind("blur",function(){j(this);a(this).closest("ul").append(a(this).closest("li").not(".ico"))})}})}})(jQuery);