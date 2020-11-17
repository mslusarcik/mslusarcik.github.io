+function(d){var c=function(f,e){this.init("popover",f,e)};if(!d.fn.tooltip){throw new Error("Popover requires tooltip.js")}c.VERSION="3.3.4";c.DEFAULTS=d.extend({},d.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});c.prototype=d.extend({},d.fn.tooltip.Constructor.prototype);c.prototype.constructor=c;c.prototype.getDefaults=function(){return c.DEFAULTS};c.prototype.setContent=function(){var g=this.tip();var f=this.getTitle();var e=this.getContent();g.find(".popover-title")[this.options.html?"html":"text"](f);g.find(".popover-content").children().detach().end()[this.options.html?(typeof e=="string"?"html":"append"):"text"](e);g.removeClass("fade top bottom left right in");if(!g.find(".popover-title").html()){g.find(".popover-title").hide()}};c.prototype.hasContent=function(){return this.getTitle()||this.getContent()};c.prototype.getContent=function(){var e=this.$element;var f=this.options;return e.attr("data-content")||(typeof f.content=="function"?f.content.call(e[0]):f.content)};c.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find(".arrow"))};function b(e){return this.each(function(){var h=d(this);var g=h.data("bs.popover");var f=typeof e=="object"&&e;if(!g&&/destroy|hide/.test(e)){return}if(!g){h.data("bs.popover",(g=new c(this,f)))}if(typeof e=="string"){g[e]()}})}var a=d.fn.popover;d.fn.popover=b;d.fn.popover.Constructor=c;d.fn.popover.noConflict=function(){d.fn.popover=a;return this}}(jQuery);