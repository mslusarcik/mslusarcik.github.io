jQuery.ping=function(c,e){querystring="";switch(true){case (e instanceof Array):querystring=e.join("&");break;case ((e instanceof Object)&&!(e instanceof String)):var d=new Array();for(var b in e){d.push(b+"="+e[b])}querystring=d.join("&");break;default:querystring=e}var a=new Image();a.src=c+"?"+querystring};