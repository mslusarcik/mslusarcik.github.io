function Sarissa(){}Sarissa.VERSION="0.9.9.4";Sarissa.PARSED_OK="Document contains no parsing errors";Sarissa.PARSED_EMPTY="Document is empty";Sarissa.PARSED_UNKNOWN_ERROR="Not well-formed or other error";Sarissa.IS_ENABLED_TRANSFORM_NODE=false;Sarissa.REMOTE_CALL_FLAG="gr.abiss.sarissa.REMOTE_CALL_FLAG";Sarissa._lastUniqueSuffix=0;Sarissa._getUniqueSuffix=function(){return Sarissa._lastUniqueSuffix++};Sarissa._SARISSA_IEPREFIX4XSLPARAM="";Sarissa._SARISSA_HAS_DOM_IMPLEMENTATION=document.implementation&&true;Sarissa._SARISSA_HAS_DOM_CREATE_DOCUMENT=Sarissa._SARISSA_HAS_DOM_IMPLEMENTATION&&document.implementation.createDocument;Sarissa._SARISSA_HAS_DOM_FEATURE=Sarissa._SARISSA_HAS_DOM_IMPLEMENTATION&&document.implementation.hasFeature;Sarissa._SARISSA_IS_MOZ=Sarissa._SARISSA_HAS_DOM_CREATE_DOCUMENT&&Sarissa._SARISSA_HAS_DOM_FEATURE;Sarissa._SARISSA_IS_SAFARI=navigator.userAgent.toLowerCase().indexOf("safari")!=-1||navigator.userAgent.toLowerCase().indexOf("konqueror")!=-1;Sarissa._SARISSA_IS_SAFARI_OLD=Sarissa._SARISSA_IS_SAFARI&&(parseInt((navigator.userAgent.match(/AppleWebKit\/(\d+)/)||{})[1],10)<420);Sarissa._SARISSA_IS_IE=document.all&&window.ActiveXObject&&navigator.userAgent.toLowerCase().indexOf("msie")>-1&&navigator.userAgent.toLowerCase().indexOf("opera")==-1;Sarissa._SARISSA_IS_OPERA=navigator.userAgent.toLowerCase().indexOf("opera")!=-1;if(!window.Node||!Node.ELEMENT_NODE){Node={ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12}}if(Sarissa._SARISSA_IS_SAFARI_OLD){HTMLHtmlElement=document.createElement("html").constructor;Node=HTMLElement={};HTMLElement.prototype=HTMLHtmlElement.__proto__.__proto__;HTMLDocument=Document=document.constructor;var x=new DOMParser();XMLDocument=x.constructor;Element=x.parseFromString("<Single />","text/xml").documentElement.constructor;x=null}if(typeof XMLDocument=="undefined"&&typeof Document!="undefined"){XMLDocument=Document}if(Sarissa._SARISSA_IS_IE){Sarissa._SARISSA_IEPREFIX4XSLPARAM="xsl:";var _SARISSA_DOM_PROGID="";var _SARISSA_XMLHTTP_PROGID="";var _SARISSA_DOM_XMLWRITER="";Sarissa.pickRecentProgID=function(f){var d=false,h;var g;for(var b=0;b<f.length&&!d;b++){try{var a=new ActiveXObject(f[b]);g=f[b];d=true}catch(c){h=c}}if(!d){throw"Could not retrieve a valid progID of Class: "+f[f.length-1]+". (original exception: "+h+")"}f=null;return g};_SARISSA_DOM_PROGID=null;_SARISSA_THREADEDDOM_PROGID=null;_SARISSA_XSLTEMPLATE_PROGID=null;_SARISSA_XMLHTTP_PROGID=null;XMLHttpRequest=function(){if(!_SARISSA_XMLHTTP_PROGID){_SARISSA_XMLHTTP_PROGID=Sarissa.pickRecentProgID(["Msxml2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"])}return new ActiveXObject(_SARISSA_XMLHTTP_PROGID)};Sarissa.getDomDocument=function(d,c){if(!_SARISSA_DOM_PROGID){_SARISSA_DOM_PROGID=Sarissa.pickRecentProgID(["Msxml2.DOMDocument.6.0","Msxml2.DOMDocument.3.0","MSXML2.DOMDocument","MSXML.DOMDocument","Microsoft.XMLDOM"])}var a=new ActiveXObject(_SARISSA_DOM_PROGID);if(c){var b="";if(d){if(c.indexOf(":")>1){b=c.substring(0,c.indexOf(":"));c=c.substring(c.indexOf(":")+1)}else{b="a"+Sarissa._getUniqueSuffix()}}if(d){a.loadXML("<"+b+":"+c+" xmlns:"+b+'="'+d+'" />')}else{a.loadXML("<"+c+" />")}}return a};Sarissa.getParseErrorText=function(a){var c=Sarissa.PARSED_OK;if(a&&a.parseError&&a.parseError.errorCode&&a.parseError.errorCode!=0){c="XML Parsing Error: "+a.parseError.reason+"\nLocation: "+a.parseError.url+"\nLine Number "+a.parseError.line+", Column "+a.parseError.linepos+":\n"+a.parseError.srcText+"\n";for(var b=0;b<a.parseError.linepos;b++){c+="-"}c+="^\n"}else{if(a.documentElement===null){c=Sarissa.PARSED_EMPTY}}return c};Sarissa.setXpathNamespaces=function(a,b){a.setProperty("SelectionLanguage","XPath");a.setProperty("SelectionNamespaces",b)};XSLTProcessor=function(){if(!_SARISSA_XSLTEMPLATE_PROGID){_SARISSA_XSLTEMPLATE_PROGID=Sarissa.pickRecentProgID(["Msxml2.XSLTemplate.6.0","MSXML2.XSLTemplate.3.0"])}this.template=new ActiveXObject(_SARISSA_XSLTEMPLATE_PROGID);this.processor=null};XSLTProcessor.prototype.importStylesheet=function(d){if(!_SARISSA_THREADEDDOM_PROGID){_SARISSA_THREADEDDOM_PROGID=Sarissa.pickRecentProgID(["MSXML2.FreeThreadedDOMDocument.6.0","MSXML2.FreeThreadedDOMDocument.3.0"])}d.setProperty("SelectionLanguage","XPath");d.setProperty("SelectionNamespaces","xmlns:xsl='http://www.w3.org/1999/XSL/Transform'");var c=new ActiveXObject(_SARISSA_THREADEDDOM_PROGID);try{c.resolveExternals=true;c.setProperty("AllowDocumentFunction",true)}catch(b){}if(d.url&&d.selectSingleNode("//xsl:*[local-name() = 'import' or local-name() = 'include']")!=null){c.async=false;c.load(d.url)}else{c.loadXML(d.xml)}c.setProperty("SelectionNamespaces","xmlns:xsl='http://www.w3.org/1999/XSL/Transform'");var a=c.selectSingleNode("//xsl:output");if(a){this.outputMethod=a.getAttribute("method")}else{delete this.outputMethod}this.template.stylesheet=c;this.processor=this.template.createProcessor();this.paramsSet=[]};XSLTProcessor.prototype.transformToDocument=function(c){var b;if(_SARISSA_THREADEDDOM_PROGID){this.processor.input=c;b=new ActiveXObject(_SARISSA_DOM_PROGID);this.processor.output=b;this.processor.transform();return b}else{if(!_SARISSA_DOM_XMLWRITER){_SARISSA_DOM_XMLWRITER=Sarissa.pickRecentProgID(["Msxml2.MXXMLWriter.6.0","Msxml2.MXXMLWriter.3.0","MSXML2.MXXMLWriter","MSXML.MXXMLWriter","Microsoft.XMLDOM"])}this.processor.input=c;b=new ActiveXObject(_SARISSA_DOM_XMLWRITER);this.processor.output=b;this.processor.transform();var a=new ActiveXObject(_SARISSA_DOM_PROGID);a.loadXML(b.output+"");return a}};XSLTProcessor.prototype.transformToFragment=function(i,d){this.processor.input=i;this.processor.transform();var g=this.processor.output;var h=d.createDocumentFragment();var b;if(this.outputMethod=="text"){h.appendChild(d.createTextNode(g))}else{if(d.body&&d.body.innerHTML){b=d.createElement("div");b.innerHTML=g;while(b.hasChildNodes()){h.appendChild(b.firstChild)}}else{var a=new ActiveXObject(_SARISSA_DOM_PROGID);if(g.substring(0,5)=="<?xml"){g=g.substring(g.indexOf("?>")+2)}var c="".concat("<my>",g,"</my>");a.loadXML(c);b=a.documentElement;while(b.hasChildNodes()){h.appendChild(b.firstChild)}}}return h};XSLTProcessor.prototype.setParameter=function(c,a,b){b=b?b:"";if(c){this.processor.addParameter(a,b,c)}else{this.processor.addParameter(a,b)}c=""+(c||"");if(!this.paramsSet[c]){this.paramsSet[c]=[]}this.paramsSet[c][a]=b};XSLTProcessor.prototype.getParameter=function(b,a){b=""+(b||"");if(this.paramsSet[b]&&this.paramsSet[b][a]){return this.paramsSet[b][a]}else{return null}};XSLTProcessor.prototype.clearParameters=function(){for(var b in this.paramsSet){for(var a in this.paramsSet[b]){if(b!=""){this.processor.addParameter(a,"",b)}else{this.processor.addParameter(a,"")}}}this.paramsSet=[]}}else{if(Sarissa._SARISSA_HAS_DOM_CREATE_DOCUMENT){Sarissa.__handleLoad__=function(a){Sarissa.__setReadyState__(a,4)};_sarissa_XMLDocument_onload=function(){Sarissa.__handleLoad__(this)};Sarissa.__setReadyState__=function(a,b){a.readyState=b;a.readystate=b;if(a.onreadystatechange!=null&&typeof a.onreadystatechange=="function"){a.onreadystatechange()}};Sarissa.getDomDocument=function(c,b){var a=document.implementation.createDocument(c?c:null,b?b:null,null);if(!a.onreadystatechange){a.onreadystatechange=null}if(!a.readyState){a.readyState=0}a.addEventListener("load",_sarissa_XMLDocument_onload,false);return a};if(window.XMLDocument){}else{if(Sarissa._SARISSA_HAS_DOM_FEATURE&&window.Document&&!Document.prototype.load&&document.implementation.hasFeature("LS","3.0")){Sarissa.getDomDocument=function(c,b){var a=document.implementation.createDocument(c?c:null,b?b:null,null);return a}}else{Sarissa.getDomDocument=function(c,b){var a=document.implementation.createDocument(c?c:null,b?b:null,null);if(a&&(c||b)&&!a.documentElement){a.appendChild(a.createElementNS(c,b))}return a}}}}}if(!window.DOMParser){if(Sarissa._SARISSA_IS_SAFARI){DOMParser=function(){};DOMParser.prototype.parseFromString=function(b,c){var a=new XMLHttpRequest();a.open("GET","data:text/xml;charset=utf-8,"+encodeURIComponent(b),false);a.send(null);return a.responseXML}}else{if(Sarissa.getDomDocument&&Sarissa.getDomDocument()&&Sarissa.getDomDocument(null,"bar").xml){DOMParser=function(){};DOMParser.prototype.parseFromString=function(a,c){var b=Sarissa.getDomDocument();b.loadXML(a);return b}}}}if((typeof(document.importNode)=="undefined")&&Sarissa._SARISSA_IS_IE){try{document.importNode=function(c,b){var a;if(c.nodeName=="#text"){return document.createTextNode(c.data)}else{if(c.nodeName=="tbody"||c.nodeName=="tr"){a=document.createElement("table")}else{if(c.nodeName=="td"){a=document.createElement("tr")}else{if(c.nodeName=="option"){a=document.createElement("select")}else{a=document.createElement("div")}}}if(b){a.innerHTML=c.xml?c.xml:c.outerHTML}else{a.innerHTML=c.xml?c.cloneNode(false).xml:c.cloneNode(false).outerHTML}return a.getElementsByTagName("*")[0]}}}catch(e){}}if(!Sarissa.getParseErrorText){Sarissa.getParseErrorText=function(a){var c=Sarissa.PARSED_OK;if((!a)||(!a.documentElement)){c=Sarissa.PARSED_EMPTY}else{if(a.documentElement.tagName=="parsererror"){c=a.documentElement.firstChild.data;c+="\n"+a.documentElement.firstChild.nextSibling.firstChild.data}else{if(a.getElementsByTagName("parsererror").length>0){var b=a.getElementsByTagName("parsererror")[0];c=Sarissa.getText(b,true)+"\n"}else{if(a.parseError&&a.parseError.errorCode!=0){c=Sarissa.PARSED_UNKNOWN_ERROR}}}}return c}}Sarissa.getText=function(h,b){var f="";var c=h.childNodes;for(var d=0;d<c.length;d++){var g=c[d];var a=g.nodeType;if(a==Node.TEXT_NODE||a==Node.CDATA_SECTION_NODE){f+=g.data}else{if(b===true&&(a==Node.ELEMENT_NODE||a==Node.DOCUMENT_NODE||a==Node.DOCUMENT_FRAGMENT_NODE)){f+=Sarissa.getText(g,true)}}}return f};if(!window.XMLSerializer&&Sarissa.getDomDocument&&Sarissa.getDomDocument("","foo",null).xml){XMLSerializer=function(){};XMLSerializer.prototype.serializeToString=function(a){return a.xml}}Sarissa.stripTags=function(a){return a?a.replace(/<[^>]+>/g,""):a};Sarissa.clearChildNodes=function(a){while(a.firstChild){a.removeChild(a.firstChild)}};Sarissa.copyChildNodes=function(d,f,g){if(Sarissa._SARISSA_IS_SAFARI&&f.nodeType==Node.DOCUMENT_NODE){f=f.documentElement}if((!d)||(!f)){throw"Both source and destination nodes must be provided"}if(!g){Sarissa.clearChildNodes(f)}var b=f.nodeType==Node.DOCUMENT_NODE?f:f.ownerDocument;var a=d.childNodes;var c;if(typeof(b.importNode)!="undefined"){for(c=0;c<a.length;c++){f.appendChild(b.importNode(a[c],true))}}else{for(c=0;c<a.length;c++){f.appendChild(a[c].cloneNode(true))}}};Sarissa.moveChildNodes=function(d,f,g){if((!d)||(!f)){throw"Both source and destination nodes must be provided"}if(!g){Sarissa.clearChildNodes(f)}var a=d.childNodes;if(d.ownerDocument==f.ownerDocument){while(d.firstChild){f.appendChild(d.firstChild)}}else{var b=f.nodeType==Node.DOCUMENT_NODE?f:f.ownerDocument;var c;if(typeof(b.importNode)!="undefined"){for(c=0;c<a.length;c++){f.appendChild(b.importNode(a[c],true))}}else{for(c=0;c<a.length;c++){f.appendChild(a[c].cloneNode(true))}}Sarissa.clearChildNodes(d)}};Sarissa.xmlize=function(f,h,d){d=d?d:"";var g=d+"<"+h+">";var b=false;if(!(f instanceof Object)||f instanceof Number||f instanceof String||f instanceof Boolean||f instanceof Date){g+=Sarissa.escape(""+f);b=true}else{g+="\n";var a=f instanceof Array;for(var c in f){g+=Sarissa.xmlize(f[c],(a?'array-item key="'+c+'"':c),d+"   ")}g+=d}return(g+=(h.indexOf(" ")!=-1?"</array-item>\n":"</"+h+">\n"))};Sarissa.escape=function(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")};Sarissa.unescape=function(a){return a.replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&")};Sarissa.updateCursor=function(b,a){if(b&&b.style&&b.style.cursor!=undefined){b.style.cursor=a}};Sarissa.updateContentFromURI=function(c,i,a,h,f){try{Sarissa.updateCursor(i,"wait");var b=new XMLHttpRequest();b.open("GET",c,true);b.onreadystatechange=function(){if(b.readyState==4){try{var j=b.responseXML;if(j&&Sarissa.getParseErrorText(j)==Sarissa.PARSED_OK){Sarissa.updateContentFromNode(b.responseXML,i,a);if(h){h(c,i)}}else{throw Sarissa.getParseErrorText(j)}}catch(k){if(h){h(c,i,k)}else{throw k}}}};if(f){var g="Sat, 1 Jan 2000 00:00:00 GMT";b.setRequestHeader("If-Modified-Since",g)}b.send("")}catch(d){Sarissa.updateCursor(i,"auto");if(h){h(c,i,d)}else{throw d}}};Sarissa.updateContentFromNode=function(f,g,a){try{Sarissa.updateCursor(g,"wait");Sarissa.clearChildNodes(g);var b=f.nodeType==Node.DOCUMENT_NODE?f:f.ownerDocument;if(b.parseError&&b.parseError.errorCode!=0){var d=document.createElement("pre");d.appendChild(document.createTextNode(Sarissa.getParseErrorText(b)));g.appendChild(d)}else{if(a){f=a.transformToDocument(f)}if(g.tagName.toLowerCase()=="textarea"||g.tagName.toLowerCase()=="input"){g.value=new XMLSerializer().serializeToString(f)}else{try{g.appendChild(g.ownerDocument.importNode(f,true))}catch(c){g.innerHTML=new XMLSerializer().serializeToString(f)}}}}catch(c){throw c}finally{Sarissa.updateCursor(g,"auto")}};Sarissa.formToQueryString=function(h){var a="";for(var g=0;g<h.elements.length;g++){var f=h.elements[g];var d=f.getAttribute("name")?f.getAttribute("name"):f.getAttribute("id");if(d&&((!f.disabled)||f.type=="hidden")){switch(f.type){case"hidden":case"text":case"textarea":case"password":a+=d+"="+encodeURIComponent(f.value)+"&";break;case"select-one":a+=d+"="+encodeURIComponent(f.options[f.selectedIndex].value)+"&";break;case"select-multiple":for(var c=0;c<f.length;c++){var b=f.options[c];if(b.selected===true){a+=d+"[]="+encodeURIComponent(b.value)+"&"}}break;case"checkbox":case"radio":if(f.checked){a+=d+"="+encodeURIComponent(f.value)+"&"}break}}}return a.substr(0,a.length-1)};Sarissa.updateContentFromForm=function(g,i,a,h){try{Sarissa.updateCursor(i,"wait");var f=Sarissa.formToQueryString(g)+"&"+Sarissa.REMOTE_CALL_FLAG+"=true";var b=new XMLHttpRequest();var c=g.getAttribute("method")&&g.getAttribute("method").toLowerCase()=="get";if(c){b.open("GET",g.getAttribute("action")+"?"+f,true)}else{b.open("POST",g.getAttribute("action"),true);b.setRequestHeader("Content-type","application/x-www-form-urlencoded");b.setRequestHeader("Content-length",f.length);b.setRequestHeader("Connection","close")}b.onreadystatechange=function(){try{if(b.readyState==4){var j=b.responseXML;if(j&&Sarissa.getParseErrorText(j)==Sarissa.PARSED_OK){Sarissa.updateContentFromNode(b.responseXML,i,a);if(h){h(g,i)}}else{throw Sarissa.getParseErrorText(j)}}}catch(k){if(h){h(g,i,k)}else{throw k}}};b.send(c?"":f)}catch(d){Sarissa.updateCursor(i,"auto");if(h){h(g,i,d)}else{throw d}}return false};Sarissa.FUNCTION_NAME_REGEXP=new RegExp("");Sarissa.getFunctionName=function(c,b){var a;if(!a){if(b){a="SarissaAnonymous"+Sarissa._getUniqueSuffix();window[a]=c}else{a=null}}if(a){window[a]=c}return a};Sarissa.setRemoteJsonCallback=function(a,h,b){if(!b){b="callback"}var g=Sarissa.getFunctionName(h,true);var f="sarissa_json_script_id_"+Sarissa._getUniqueSuffix();var d=document.getElementsByTagName("head")[0];var c=document.createElement("script");c.type="text/javascript";c.id=f;c.onload=function(){};if(a.indexOf("?")!=-1){a+=("&"+b+"="+g)}else{a+=("?"+b+"="+g)}c.src=a;d.appendChild(c);return f};