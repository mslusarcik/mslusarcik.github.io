jQuery.cookie=function(d,e,b){if(arguments.length>1&&String(e)!=="[object Object]"){b=jQuery.extend({},b);if(e===null||e===undefined){b.expires=-1}if(typeof b.expires==="number"){var g=b.expires,c=b.expires=new Date();c.setDate(c.getDate()+g)}e=String(e);return(document.cookie=[encodeURIComponent(d),"=",b.raw?e:cookie_encode(e),b.expires?"; expires="+b.expires.toUTCString():"",b.path?"; path="+b.path:"",b.domain?"; domain="+b.domain:"",b.secure?"; secure":""].join(""))}b=e||{};var a,f=b.raw?function(h){return h}:decodeURIComponent;return(a=new RegExp("(?:^|; )"+encodeURIComponent(d)+"=([^;]*)").exec(document.cookie))?f(a[1]):null};function cookie_encode(b){var a=encodeURIComponent(b);var c=a.replace(/(%7B|%7D|%3A|%22|%23|%5B|%5D)/g,function(d){return decodeURIComponent(d)});return c};