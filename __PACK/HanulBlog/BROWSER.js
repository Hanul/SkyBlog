HanulBlog.MAIN=METHOD({run:function(){"use strict";HanulBlog.MATCH_VIEW({uri:"**",target:HanulBlog.Layout}),HanulBlog.MATCH_VIEW({uri:["","list/{page}","list/{tag}/{page}"],target:HanulBlog.List}),HanulBlog.MATCH_VIEW({uri:"view/{id}",target:HanulBlog.View}),HanulBlog.MATCH_VIEW({uri:["new","update/{id}"],target:HanulBlog.Form}),HanulBlog.MATCH_VIEW({uri:"login",target:HanulBlog.Login})}}),function(){function e(e){this.tokens=[],this.tokens.links={},this.options=e||u.defaults,this.rules=h.normal,this.options.gfm&&(this.rules=this.options.tables?h.tables:h.gfm)}function t(e,t){if(this.options=t||u.defaults,this.links=e,this.rules=p.normal,this.renderer=this.options.renderer||new n,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.rules=this.options.breaks?p.breaks:p.gfm:this.options.pedantic&&(this.rules=p.pedantic)}function n(e){this.options=e||{}}function r(e){this.tokens=[],this.token=null,this.options=e||u.defaults,this.options.renderer=this.options.renderer||new n,this.renderer=this.options.renderer,this.renderer.options=this.options}function i(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function o(e){return e.replace(/&([#\w]+);/g,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?String.fromCharCode("x"===t.charAt(1)?parseInt(t.substring(2),16):+t.substring(1)):""})}function s(e,t){return e=e.source,t=t||"",function n(r,i){return r?(i=i.source||i,i=i.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(r,i),n):new RegExp(e,t)}}function l(){}function a(e){for(var t,n,r=1;r<arguments.length;r++){t=arguments[r];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}function u(t,n,o){if(o||"function"==typeof n){o||(o=n,n=null),n=a({},u.defaults,n||{});var s,l,h=n.highlight,p=0;try{s=e.lex(t,n)}catch(c){return o(c)}l=s.length;var g=function(e){if(e)return n.highlight=h,o(e);var t;try{t=r.parse(s,n)}catch(i){e=i}return n.highlight=h,e?o(e):o(null,t)};if(!h||h.length<3)return g();if(delete n.highlight,!l)return g();for(;p<s.length;p++)!function(e){return"code"!==e.type?--l||g():h(e.text,e.lang,function(t,n){return t?g(t):null==n||n===e.text?--l||g():(e.text=n,e.escaped=!0,void(--l||g()))})}(s[p])}else try{return n&&(n=a({},u.defaults,n)),r.parse(e.lex(t,n),n)}catch(c){if(c.message+="\nPlease report this to https://github.com/chjj/marked.",(n||u.defaults).silent)return"<p>An error occured:</p><pre>"+i(c.message+"",!0)+"</pre>";throw c}}var h={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:l,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:l,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:l,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};h.bullet=/(?:[*+-]|\d+\.)/,h.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,h.item=s(h.item,"gm")(/bull/g,h.bullet)(),h.list=s(h.list)(/bull/g,h.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+h.def.source+")")(),h.blockquote=s(h.blockquote)("def",h.def)(),h._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",h.html=s(h.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,h._tag)(),h.paragraph=s(h.paragraph)("hr",h.hr)("heading",h.heading)("lheading",h.lheading)("blockquote",h.blockquote)("tag","<"+h._tag)("def",h.def)(),h.normal=a({},h),h.gfm=a({},h.normal,{fences:/^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,paragraph:/^/}),h.gfm.paragraph=s(h.paragraph)("(?!","(?!"+h.gfm.fences.source.replace("\\1","\\2")+"|"+h.list.source.replace("\\1","\\3")+"|")(),h.tables=a({},h.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),e.rules=h,e.lex=function(t,n){var r=new e(n);return r.lex(t)},e.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},e.prototype.token=function(e,t,n){for(var r,i,o,s,l,a,u,p,c,e=e.replace(/^ +$/gm,"");e;)if((o=this.rules.newline.exec(e))&&(e=e.substring(o[0].length),o[0].length>1&&this.tokens.push({type:"space"})),o=this.rules.code.exec(e))e=e.substring(o[0].length),o=o[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?o:o.replace(/\n+$/,"")});else if(o=this.rules.fences.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"code",lang:o[2],text:o[3]});else if(o=this.rules.heading.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"heading",depth:o[1].length,text:o[2]});else if(t&&(o=this.rules.nptable.exec(e))){for(e=e.substring(o[0].length),a={type:"table",header:o[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:o[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:o[3].replace(/\n$/,"").split("\n")},p=0;p<a.align.length;p++)a.align[p]=/^ *-+: *$/.test(a.align[p])?"right":/^ *:-+: *$/.test(a.align[p])?"center":/^ *:-+ *$/.test(a.align[p])?"left":null;for(p=0;p<a.cells.length;p++)a.cells[p]=a.cells[p].split(/ *\| */);this.tokens.push(a)}else if(o=this.rules.lheading.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"heading",depth:"="===o[2]?1:2,text:o[1]});else if(o=this.rules.hr.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"hr"});else if(o=this.rules.blockquote.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"blockquote_start"}),o=o[0].replace(/^ *> ?/gm,""),this.token(o,t,!0),this.tokens.push({type:"blockquote_end"});else if(o=this.rules.list.exec(e)){for(e=e.substring(o[0].length),s=o[2],this.tokens.push({type:"list_start",ordered:s.length>1}),o=o[0].match(this.rules.item),r=!1,c=o.length,p=0;c>p;p++)a=o[p],u=a.length,a=a.replace(/^ *([*+-]|\d+\.) +/,""),~a.indexOf("\n ")&&(u-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+u+"}","gm"),"")),this.options.smartLists&&p!==c-1&&(l=h.bullet.exec(o[p+1])[0],s===l||s.length>1&&l.length>1||(e=o.slice(p+1).join("\n")+e,p=c-1)),i=r||/\n\n(?!\s*$)/.test(a),p!==c-1&&(r="\n"===a.charAt(a.length-1),i||(i=r)),this.tokens.push({type:i?"loose_item_start":"list_item_start"}),this.token(a,!1,n),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(o=this.rules.html.exec(e))e=e.substring(o[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:"pre"===o[1]||"script"===o[1]||"style"===o[1],text:o[0]});else if(!n&&t&&(o=this.rules.def.exec(e)))e=e.substring(o[0].length),this.tokens.links[o[1].toLowerCase()]={href:o[2],title:o[3]};else if(t&&(o=this.rules.table.exec(e))){for(e=e.substring(o[0].length),a={type:"table",header:o[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:o[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:o[3].replace(/(?: *\| *)?\n$/,"").split("\n")},p=0;p<a.align.length;p++)a.align[p]=/^ *-+: *$/.test(a.align[p])?"right":/^ *:-+: *$/.test(a.align[p])?"center":/^ *:-+ *$/.test(a.align[p])?"left":null;for(p=0;p<a.cells.length;p++)a.cells[p]=a.cells[p].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(a)}else if(t&&(o=this.rules.paragraph.exec(e)))e=e.substring(o[0].length),this.tokens.push({type:"paragraph",text:"\n"===o[1].charAt(o[1].length-1)?o[1].slice(0,-1):o[1]});else if(o=this.rules.text.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"text",text:o[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var p={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:l,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:l,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};p._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,p._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,p.link=s(p.link)("inside",p._inside)("href",p._href)(),p.reflink=s(p.reflink)("inside",p._inside)(),p.normal=a({},p),p.pedantic=a({},p.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),p.gfm=a({},p.normal,{escape:s(p.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:s(p.text)("]|","~]|")("|","|https?://|")()}),p.breaks=a({},p.gfm,{br:s(p.br)("{2,}","*")(),text:s(p.gfm.text)("{2,}","*")()}),t.rules=p,t.output=function(e,n,r){var i=new t(n,r);return i.output(e)},t.prototype.output=function(e){for(var t,n,r,o,s="";e;)if(o=this.rules.escape.exec(e))e=e.substring(o[0].length),s+=o[1];else if(o=this.rules.autolink.exec(e))e=e.substring(o[0].length),"@"===o[2]?(n=this.mangle(":"===o[1].charAt(6)?o[1].substring(7):o[1]),r=this.mangle("mailto:")+n):(n=i(o[1]),r=n),s+=this.renderer.link(r,null,n);else if(this.inLink||!(o=this.rules.url.exec(e))){if(o=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(o[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(o[0])&&(this.inLink=!1),e=e.substring(o[0].length),s+=this.options.sanitize?i(o[0]):o[0];else if(o=this.rules.link.exec(e))e=e.substring(o[0].length),this.inLink=!0,s+=this.outputLink(o,{href:o[2],title:o[3]}),this.inLink=!1;else if((o=this.rules.reflink.exec(e))||(o=this.rules.nolink.exec(e))){if(e=e.substring(o[0].length),t=(o[2]||o[1]).replace(/\s+/g," "),t=this.links[t.toLowerCase()],!t||!t.href){s+=o[0].charAt(0),e=o[0].substring(1)+e;continue}this.inLink=!0,s+=this.outputLink(o,t),this.inLink=!1}else if(o=this.rules.strong.exec(e))e=e.substring(o[0].length),s+=this.renderer.strong(this.output(o[2]||o[1]));else if(o=this.rules.em.exec(e))e=e.substring(o[0].length),s+=this.renderer.em(this.output(o[2]||o[1]));else if(o=this.rules.code.exec(e))e=e.substring(o[0].length),s+=this.renderer.codespan(i(o[2],!0));else if(o=this.rules.br.exec(e))e=e.substring(o[0].length),s+=this.renderer.br();else if(o=this.rules.del.exec(e))e=e.substring(o[0].length),s+=this.renderer.del(this.output(o[1]));else if(o=this.rules.text.exec(e))e=e.substring(o[0].length),s+=i(this.smartypants(o[0]));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(o[0].length),n=i(o[1]),r=n,s+=this.renderer.link(r,null,n);return s},t.prototype.outputLink=function(e,t){var n=i(t.href),r=t.title?i(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,i(e[1]))},t.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/--/g,"—").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},t.prototype.mangle=function(e){for(var t,n="",r=e.length,i=0;r>i;i++)t=e.charCodeAt(i),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},n.prototype.code=function(e,t,n){if(this.options.highlight){var r=this.options.highlight(e,t);null!=r&&r!==e&&(n=!0,e=r)}return t?'<pre><code class="'+this.options.langPrefix+i(t,!0)+'">'+(n?e:i(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:i(e,!0))+"\n</code></pre>"},n.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},n.prototype.html=function(e){return e},n.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},n.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},n.prototype.list=function(e,t){var n=t?"ol":"ul";return"<"+n+">\n"+e+"</"+n+">\n"},n.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},n.prototype.paragraph=function(e){return"<p>"+e.replace(/\n/g,"<br>")+"</p>\n"},n.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},n.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},n.prototype.tablecell=function(e,t){var n=t.header?"th":"td",r=t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">";return r+e+"</"+n+">\n"},n.prototype.strong=function(e){return"<strong>"+e+"</strong>"},n.prototype.em=function(e){return"<em>"+e+"</em>"},n.prototype.codespan=function(e){return"<code>"+e+"</code>"},n.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},n.prototype.del=function(e){return"<del>"+e+"</del>"},n.prototype.link=function(e,t,n){if(this.options.sanitize){try{var r=decodeURIComponent(o(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(i){return""}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:"))return""}var s='<a href="'+e+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>"},n.prototype.image=function(e,t,n){var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},r.parse=function(e,t,n){var i=new r(t,n);return i.parse(e)},r.prototype.parse=function(e){this.inline=new t(e.links,this.options,this.renderer),this.tokens=e.reverse();for(var n="";this.next();)n+=this.tok();return n},r.prototype.next=function(){return this.token=this.tokens.pop()},r.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},r.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},r.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,i,o="",s="";for(n="",e=0;e<this.token.header.length;e++)r={header:!0,align:this.token.align[e]},n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(o+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",i=0;i<t.length;i++)n+=this.renderer.tablecell(this.inline.output(t[i]),{header:!1,align:this.token.align[i]});s+=this.renderer.tablerow(n)}return this.renderer.table(o,s);case"blockquote_start":for(var s="";"blockquote_end"!==this.next().type;)s+=this.tok();return this.renderer.blockquote(s);case"list_start":for(var s="",l=this.token.ordered;"list_end"!==this.next().type;)s+=this.tok();return this.renderer.list(s,l);case"list_item_start":for(var s="";"list_item_end"!==this.next().type;)s+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(s);case"loose_item_start":for(var s="";"list_item_end"!==this.next().type;)s+=this.tok();return this.renderer.listitem(s);case"html":var a=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(a);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}},l.exec=l,u.options=u.setOptions=function(e){return a(u.defaults,e),u},u.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new n,xhtml:!1},u.Parser=r,u.parser=r.parse,u.Renderer=n,u.Lexer=e,u.lexer=e.lex,u.InlineLexer=t,u.inlineLexer=t.output,u.parse=u,"undefined"!=typeof module&&"object"==typeof exports?module.exports=u:"function"==typeof define&&define.amd?define(function(){return u}):this.marked=u}.call(function(){return this||("undefined"!=typeof window?window:global)}()),HanulBlog.ArticleDom=CLASS({init:function(e,t,n){"use strict";var r,i,o,s,l,a=n.articleData,u=n.isViewMode;r=UUI.PANEL({style:{margin:10},contentStyle:{border:"1px solid #ccc"},c:[H3({style:{padding:10,fontWeight:"bold"},c:u===!0?a.title:A({style:{textDecoration:"none"},href:HanulBlog.HREF("view/"+a.id),c:a.title}),on:{tap:function(e){HanulBlog.GO("view/"+a.id),e.stopDefault()}}}),i=P({style:{borderTop:"1px solid #ccc",padding:10,fontSize:14}})]}),i.getEl().setAttribute("class","markdown-body"),i.getEl().innerHTML=marked(a.content),t.getPanel=o=function(){return r},t.hideContent=s=function(){i.hide()},t.showContent=l=function(){i.show()}}}),HanulBlog.Form=CLASS({preset:function(){"use strict";return VIEW},init:function(e){"use strict";var t=DIV({style:{padding:10},c:UUI.VALID_FORM({errorMsgs:{category:{size:function(e){return"카테고리는 "+e.max+"글자 미만으로 입력해주세요."}},content:{notEmpty:"내용을 입력해주세요."}},errorMsgStyle:{padding:"5px 10px",backgroundColor:"#D83F25",color:"#fff"},c:[UUI.FULL_INPUT({style:{border:"1px solid #999"},placeholder:"카테고리",name:"category"}),UUI.FULL_INPUT({style:{marginTop:10,border:"1px solid #999"},placeholder:"제목",name:"title"}),UUI.FULL_TEXTAREA({style:{marginTop:10,border:"1px solid #999",height:300},placeholder:"내용",name:"content"}),UUI.FULL_SUBMIT({style:{marginTop:10,backgroundColor:BROWSER_CONFIG.HanulBlog.baseColor,color:"#fff",fontWeight:"bold"},value:"글 작성"})],on:{submit:function(e,t){var n=t.getData();HanulBlog.ArticleModel.create(n,{notValid:t.showErrors,success:function(e){HanulBlog.GO("view/"+e.id)}})}}})}).appendTo(HanulBlog.Layout.getContent());TITLE(CONFIG.title+" :: 글작성"),e.on("close",function(){t.remove()})}}),HanulBlog.Layout=CLASS(function(e){"use strict";var t,n;return e.getContent=n=function(){return t},{preset:function(){return VIEW},init:function(e){var n,r,i=HanulBlog.STORE("passwordStore"),o=HanulBlog.ROOM("authRoom"),s=Yogurt.MenuLayout({toolbar:Yogurt.Toolbar({style:{onDisplayResize:function(e){return e>Yogurt.MenuLayout.getHideMenuWinWidth()?{display:"none"}:{display:"block"}}},left:Yogurt.ToolbarButton({img:IMG({src:Yogurt.R("menu.png")}),on:{tap:function(){s.toggleLeftMenu()}}}),title:H1({c:A({style:{textDecoration:"none"},href:HanulBlog.HREF(""),c:CONFIG.title}),on:{tap:function(e){HanulBlog.GO(""),e.stopDefault()}}})}),leftMenu:DIV({style:{color:"#fff",fontWeight:"bold"},c:[H1({style:{padding:10,fontSize:30,fontWeight:"bold",onDisplayResize:function(e){return e>Yogurt.MenuLayout.getHideMenuWinWidth()?{display:"block"}:{display:"none"}}},c:A({style:{textDecoration:"none"},href:HanulBlog.HREF(""),c:CONFIG.title}),on:{tap:function(e){HanulBlog.GO(""),e.stopDefault()}}}),n=DIV({c:UUI.BUTTON_H({style:{padding:"10px 10px 5px 10px"},title:A({style:{textDecoration:"none"},href:HanulBlog.HREF(""),c:"전체보기"}),on:{tap:function(e){HanulBlog.GO(""),s.hideLeftMenu(),e.stopDefault()}}})}),r=DIV(),void 0===BROWSER_CONFIG.HanulBlog.email?"":A({style:{padding:10,textDecoration:"none"},c:BROWSER_CONFIG.HanulBlog.email,href:"mailto:"+BROWSER_CONFIG.HanulBlog.email})]}),c:t=DIV()}).appendTo(BODY);o.send({methodName:"auth",data:i.get("password")},function(e){void 0!==r&&r.append(UUI.BUTTON_H({style:{padding:10},title:e===!0?"글 작성":"로그인",on:{tap:function(){HanulBlog.GO(e===!0?"new":"login"),s.hideLeftMenu()}}}))}),HanulBlog.CategoryModel.find({sort:{articleCount:-1}},EACH(function(e){var t;n.append(UUI.BUTTON_H({style:{padding:"5px 10px"},title:[t=SPAN({c:e.id})," ("+e.articleCount+")"],href:HanulBlog.HREF("list/"+e.id+"/1"),on:{tap:function(t){HanulBlog.GO("list/"+e.id+"/1"),s.hideLeftMenu(),t.stopDefault()}}})),GET({host:"tagengine.btncafe.com",uri:"__REP_TAG",paramStr:"tag="+encodeURIComponent(e.id)},function(e){t.empty(),t.append(e)})})),e.on("close",function(){o.exit(),s.remove(),r=void 0,t=void 0})}}}),HanulBlog.List=CLASS({preset:function(){"use strict";return VIEW},init:function(e){"use strict";var t,n,r=[],i=!1,o=DIV({style:{paddingBottom:10},c:[UUI.BUTTON({style:{marginRight:10,marginTop:10,flt:"right",color:"#4183c4"},title:"내용 닫기",on:{tap:function(e,t){i!==!0?(EACH(r,function(e){e.hideContent()}),i=!0,t.setTitle("내용 열기")):(EACH(r,function(e){e.showContent()}),i=!1,t.setTitle("내용 닫기"))}}}),CLEAR_BOTH(),t=UUI.LIST(),n=UUI.LIST(),CLEAR_BOTH()]}).appendTo(HanulBlog.Layout.getContent());e.on("paramsChange",function(e){var i=e.tag,o=e.page;o=void 0===o?1:INTEGER(o),t.removeAllItems(),r=[],HanulBlog.ArticleModel.find({filter:{category:i},start:(o-1)*BROWSER_CONFIG.HanulBlog.listArticleCount,count:BROWSER_CONFIG.HanulBlog.listArticleCount},EACH(function(e){var n=HanulBlog.ArticleDom({articleData:e});t.addItem({key:e.id,item:LI({c:n.getPanel()})}),r.push(n)})),n.removeAllItems(),HanulBlog.ArticleModel.count({filter:{category:i}},function(e){REPEAT((e-1)/BROWSER_CONFIG.HanulBlog.listArticleCount+1,function(e){n.addItem({key:e+1,item:LI({style:{flt:"left",marginLeft:10},c:A({style:{cursor:"pointer"},c:e+1,href:HanulBlog.HREF("list/"+(void 0===i?"":i+"/")+(e+1)),on:{tap:function(t){HanulBlog.GO("list/"+(void 0===i?"":i+"/")+(e+1)),t.stopDefault()}}})})})})}),TITLE(void 0===i?CONFIG.title:CONFIG.title+" :: "+i)}),e.on("close",function(){o.remove()})}}),HanulBlog.Login=CLASS({preset:function(){"use strict";return VIEW},init:function(e){"use strict";var t=HanulBlog.STORE("passwordStore"),n=HanulBlog.ROOM("authRoom"),r=DIV({style:{padding:10},c:UUI.VALID_FORM({c:[UUI.FULL_INPUT({style:{border:"1px solid #999"},placeholder:"비밀번호",name:"password",type:"password"}),UUI.FULL_CHECKBOX({style:{marginTop:10},label:"로그인을 유지하시겠습니까?",name:"isRememberMe"}),UUI.FULL_SUBMIT({style:{marginTop:10,backgroundColor:BROWSER_CONFIG.HanulBlog.baseColor,color:"#fff",fontWeight:"bold"},value:"로그인"})],on:{submit:function(e,r){var i=r.getData();n.send({methodName:"auth",data:i.password},function(e){e===!0?(t.save({name:"password",value:i.password,isToSession:i.isRememberMe!==!0}),HanulBlog.REFRESH("")):UUI.MODAL({style:{padding:"20px 30px",backgroundColor:BROWSER_CONFIG.HanulBlog.baseColor,color:"#fff"},c:"비밀번호가 다릅니다."})})}}})}).appendTo(HanulBlog.Layout.getContent());TITLE(CONFIG.title+" :: 로그인"),e.on("close",function(){n.exit(),r.remove()})}}),HanulBlog.View=CLASS({preset:function(){"use strict";return VIEW},init:function(e){"use strict";var t=DIV().appendTo(HanulBlog.Layout.getContent());e.on("paramsChange",function(e){var n=e.id;HanulBlog.ArticleModel.get(n,function(e){t.empty(),t.append(UUI.BUTTON({style:{marginLeft:10,marginTop:10,flt:"left",color:"#4183c4"},title:"뒤로가기",on:{tap:function(){history.back()}}})),t.append(CLEAR_BOTH()),t.append(HanulBlog.ArticleDom({articleData:e,isViewMode:!0}).getPanel()),TITLE(CONFIG.title+" :: "+e.title)})}),e.on("close",function(){t.remove()})}});