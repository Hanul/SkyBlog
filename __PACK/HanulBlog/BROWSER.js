HanulBlog.MAIN=METHOD({run:function(){"use strict";HanulBlog.MATCH_VIEW({uri:"**",target:HanulBlog.Layout}),HanulBlog.MATCH_VIEW({uri:["","list/{page}","list/{category}/{page}"],target:HanulBlog.List}),HanulBlog.MATCH_VIEW({uri:"view/{id}",target:HanulBlog.View}),HanulBlog.MATCH_VIEW({uri:["new","update/{id}"],target:HanulBlog.Form}),HanulBlog.MATCH_VIEW({uri:"login",target:HanulBlog.Login})}}),function(){function e(e){this.tokens=[],this.tokens.links={},this.options=e||u.defaults,this.rules=c.normal,this.options.gfm&&(this.rules=this.options.tables?c.tables:c.gfm)}function t(e,t){if(this.options=t||u.defaults,this.links=e,this.rules=h.normal,this.renderer=this.options.renderer||new n,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.rules=this.options.breaks?h.breaks:h.gfm:this.options.pedantic&&(this.rules=h.pedantic)}function n(e){this.options=e||{}}function i(e){this.tokens=[],this.token=null,this.options=e||u.defaults,this.options.renderer=this.options.renderer||new n,this.renderer=this.options.renderer,this.renderer.options=this.options}function r(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function o(e){return e.replace(/&([#\w]+);/g,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?String.fromCharCode("x"===t.charAt(1)?parseInt(t.substring(2),16):+t.substring(1)):""})}function s(e,t){return e=e.source,t=t||"",function n(i,r){return i?(r=r.source||r,r=r.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(i,r),n):new RegExp(e,t)}}function l(){}function a(e){for(var t,n,i=1;i<arguments.length;i++){t=arguments[i];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}function u(t,n,o){if(o||"function"==typeof n){o||(o=n,n=null),n=a({},u.defaults,n||{});var s,l,c=n.highlight,h=0;try{s=e.lex(t,n)}catch(p){return o(p)}l=s.length;var g=function(e){if(e)return n.highlight=c,o(e);var t;try{t=i.parse(s,n)}catch(r){e=r}return n.highlight=c,e?o(e):o(null,t)};if(!c||c.length<3)return g();if(delete n.highlight,!l)return g();for(;h<s.length;h++)!function(e){return"code"!==e.type?--l||g():c(e.text,e.lang,function(t,n){return t?g(t):null==n||n===e.text?--l||g():(e.text=n,e.escaped=!0,void(--l||g()))})}(s[h])}else try{return n&&(n=a({},u.defaults,n)),i.parse(e.lex(t,n),n)}catch(p){if(p.message+="\nPlease report this to https://github.com/chjj/marked.",(n||u.defaults).silent)return"<p>An error occured:</p><pre>"+r(p.message+"",!0)+"</pre>";throw p}}var c={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:l,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:l,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:l,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};c.bullet=/(?:[*+-]|\d+\.)/,c.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,c.item=s(c.item,"gm")(/bull/g,c.bullet)(),c.list=s(c.list)(/bull/g,c.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+c.def.source+")")(),c.blockquote=s(c.blockquote)("def",c.def)(),c._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",c.html=s(c.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,c._tag)(),c.paragraph=s(c.paragraph)("hr",c.hr)("heading",c.heading)("lheading",c.lheading)("blockquote",c.blockquote)("tag","<"+c._tag)("def",c.def)(),c.normal=a({},c),c.gfm=a({},c.normal,{fences:/^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,paragraph:/^/}),c.gfm.paragraph=s(c.paragraph)("(?!","(?!"+c.gfm.fences.source.replace("\\1","\\2")+"|"+c.list.source.replace("\\1","\\3")+"|")(),c.tables=a({},c.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),e.rules=c,e.lex=function(t,n){var i=new e(n);return i.lex(t)},e.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},e.prototype.token=function(e,t,n){for(var i,r,o,s,l,a,u,h,p,e=e.replace(/^ +$/gm,"");e;)if((o=this.rules.newline.exec(e))&&(e=e.substring(o[0].length),o[0].length>1&&this.tokens.push({type:"space"})),o=this.rules.code.exec(e))e=e.substring(o[0].length),o=o[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?o:o.replace(/\n+$/,"")});else if(o=this.rules.fences.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"code",lang:o[2],text:o[3]});else if(o=this.rules.heading.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"heading",depth:o[1].length,text:o[2]});else if(t&&(o=this.rules.nptable.exec(e))){for(e=e.substring(o[0].length),a={type:"table",header:o[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:o[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:o[3].replace(/\n$/,"").split("\n")},h=0;h<a.align.length;h++)a.align[h]=/^ *-+: *$/.test(a.align[h])?"right":/^ *:-+: *$/.test(a.align[h])?"center":/^ *:-+ *$/.test(a.align[h])?"left":null;for(h=0;h<a.cells.length;h++)a.cells[h]=a.cells[h].split(/ *\| */);this.tokens.push(a)}else if(o=this.rules.lheading.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"heading",depth:"="===o[2]?1:2,text:o[1]});else if(o=this.rules.hr.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"hr"});else if(o=this.rules.blockquote.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"blockquote_start"}),o=o[0].replace(/^ *> ?/gm,""),this.token(o,t,!0),this.tokens.push({type:"blockquote_end"});else if(o=this.rules.list.exec(e)){for(e=e.substring(o[0].length),s=o[2],this.tokens.push({type:"list_start",ordered:s.length>1}),o=o[0].match(this.rules.item),i=!1,p=o.length,h=0;p>h;h++)a=o[h],u=a.length,a=a.replace(/^ *([*+-]|\d+\.) +/,""),~a.indexOf("\n ")&&(u-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+u+"}","gm"),"")),this.options.smartLists&&h!==p-1&&(l=c.bullet.exec(o[h+1])[0],s===l||s.length>1&&l.length>1||(e=o.slice(h+1).join("\n")+e,h=p-1)),r=i||/\n\n(?!\s*$)/.test(a),h!==p-1&&(i="\n"===a.charAt(a.length-1),r||(r=i)),this.tokens.push({type:r?"loose_item_start":"list_item_start"}),this.token(a,!1,n),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(o=this.rules.html.exec(e))e=e.substring(o[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:"pre"===o[1]||"script"===o[1]||"style"===o[1],text:o[0]});else if(!n&&t&&(o=this.rules.def.exec(e)))e=e.substring(o[0].length),this.tokens.links[o[1].toLowerCase()]={href:o[2],title:o[3]};else if(t&&(o=this.rules.table.exec(e))){for(e=e.substring(o[0].length),a={type:"table",header:o[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:o[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:o[3].replace(/(?: *\| *)?\n$/,"").split("\n")},h=0;h<a.align.length;h++)a.align[h]=/^ *-+: *$/.test(a.align[h])?"right":/^ *:-+: *$/.test(a.align[h])?"center":/^ *:-+ *$/.test(a.align[h])?"left":null;for(h=0;h<a.cells.length;h++)a.cells[h]=a.cells[h].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(a)}else if(t&&(o=this.rules.paragraph.exec(e)))e=e.substring(o[0].length),this.tokens.push({type:"paragraph",text:"\n"===o[1].charAt(o[1].length-1)?o[1].slice(0,-1):o[1]});else if(o=this.rules.text.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"text",text:o[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var h={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:l,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:l,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};h._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,h._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,h.link=s(h.link)("inside",h._inside)("href",h._href)(),h.reflink=s(h.reflink)("inside",h._inside)(),h.normal=a({},h),h.pedantic=a({},h.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),h.gfm=a({},h.normal,{escape:s(h.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:s(h.text)("]|","~]|")("|","|https?://|")()}),h.breaks=a({},h.gfm,{br:s(h.br)("{2,}","*")(),text:s(h.gfm.text)("{2,}","*")()}),t.rules=h,t.output=function(e,n,i){var r=new t(n,i);return r.output(e)},t.prototype.output=function(e){for(var t,n,i,o,s="";e;)if(o=this.rules.escape.exec(e))e=e.substring(o[0].length),s+=o[1];else if(o=this.rules.autolink.exec(e))e=e.substring(o[0].length),"@"===o[2]?(n=this.mangle(":"===o[1].charAt(6)?o[1].substring(7):o[1]),i=this.mangle("mailto:")+n):(n=r(o[1]),i=n),s+=this.renderer.link(i,null,n);else if(this.inLink||!(o=this.rules.url.exec(e))){if(o=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(o[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(o[0])&&(this.inLink=!1),e=e.substring(o[0].length),s+=this.options.sanitize?r(o[0]):o[0];else if(o=this.rules.link.exec(e))e=e.substring(o[0].length),this.inLink=!0,s+=this.outputLink(o,{href:o[2],title:o[3]}),this.inLink=!1;else if((o=this.rules.reflink.exec(e))||(o=this.rules.nolink.exec(e))){if(e=e.substring(o[0].length),t=(o[2]||o[1]).replace(/\s+/g," "),t=this.links[t.toLowerCase()],!t||!t.href){s+=o[0].charAt(0),e=o[0].substring(1)+e;continue}this.inLink=!0,s+=this.outputLink(o,t),this.inLink=!1}else if(o=this.rules.strong.exec(e))e=e.substring(o[0].length),s+=this.renderer.strong(this.output(o[2]||o[1]));else if(o=this.rules.em.exec(e))e=e.substring(o[0].length),s+=this.renderer.em(this.output(o[2]||o[1]));else if(o=this.rules.code.exec(e))e=e.substring(o[0].length),s+=this.renderer.codespan(r(o[2],!0));else if(o=this.rules.br.exec(e))e=e.substring(o[0].length),s+=this.renderer.br();else if(o=this.rules.del.exec(e))e=e.substring(o[0].length),s+=this.renderer.del(this.output(o[1]));else if(o=this.rules.text.exec(e))e=e.substring(o[0].length),s+=r(this.smartypants(o[0]));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(o[0].length),n=r(o[1]),i=n,s+=this.renderer.link(i,null,n);return s},t.prototype.outputLink=function(e,t){var n=r(t.href),i=t.title?r(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,i,this.output(e[1])):this.renderer.image(n,i,r(e[1]))},t.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/--/g,"—").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},t.prototype.mangle=function(e){for(var t,n="",i=e.length,r=0;i>r;r++)t=e.charCodeAt(r),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},n.prototype.code=function(e,t,n){if(this.options.highlight){var i=this.options.highlight(e,t);null!=i&&i!==e&&(n=!0,e=i)}return t?'<pre><code class="'+this.options.langPrefix+r(t,!0)+'">'+(n?e:r(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:r(e,!0))+"\n</code></pre>"},n.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},n.prototype.html=function(e){return e},n.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},n.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},n.prototype.list=function(e,t){var n=t?"ol":"ul";return"<"+n+">\n"+e+"</"+n+">\n"},n.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},n.prototype.paragraph=function(e){return"<p>"+e.replace(/\n/g,"<br>")+"</p>\n"},n.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},n.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},n.prototype.tablecell=function(e,t){var n=t.header?"th":"td",i=t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">";return i+e+"</"+n+">\n"},n.prototype.strong=function(e){return"<strong>"+e+"</strong>"},n.prototype.em=function(e){return"<em>"+e+"</em>"},n.prototype.codespan=function(e){return"<code>"+e+"</code>"},n.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},n.prototype.del=function(e){return"<del>"+e+"</del>"},n.prototype.link=function(e,t,n){if(this.options.sanitize){try{var i=decodeURIComponent(o(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(r){return""}if(0===i.indexOf("javascript:")||0===i.indexOf("vbscript:"))return""}var s='<a href="'+e+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>"},n.prototype.image=function(e,t,n){var i='<img src="'+e+'" alt="'+n+'"';return t&&(i+=' title="'+t+'"'),i+=this.options.xhtml?"/>":">"},i.parse=function(e,t,n){var r=new i(t,n);return r.parse(e)},i.prototype.parse=function(e){this.inline=new t(e.links,this.options,this.renderer),this.tokens=e.reverse();for(var n="";this.next();)n+=this.tok();return n},i.prototype.next=function(){return this.token=this.tokens.pop()},i.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},i.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},i.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,i,r,o="",s="";for(n="",e=0;e<this.token.header.length;e++)i={header:!0,align:this.token.align[e]},n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(o+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",r=0;r<t.length;r++)n+=this.renderer.tablecell(this.inline.output(t[r]),{header:!1,align:this.token.align[r]});s+=this.renderer.tablerow(n)}return this.renderer.table(o,s);case"blockquote_start":for(var s="";"blockquote_end"!==this.next().type;)s+=this.tok();return this.renderer.blockquote(s);case"list_start":for(var s="",l=this.token.ordered;"list_end"!==this.next().type;)s+=this.tok();return this.renderer.list(s,l);case"list_item_start":for(var s="";"list_item_end"!==this.next().type;)s+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(s);case"loose_item_start":for(var s="";"list_item_end"!==this.next().type;)s+=this.tok();return this.renderer.listitem(s);case"html":var a=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(a);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}},l.exec=l,u.options=u.setOptions=function(e){return a(u.defaults,e),u},u.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new n,xhtml:!1},u.Parser=i,u.parser=i.parse,u.Renderer=n,u.Lexer=e,u.lexer=e.lex,u.InlineLexer=t,u.inlineLexer=t.output,u.parse=u,"undefined"!=typeof module&&"object"==typeof exports?module.exports=u:"function"==typeof define&&define.amd?define(function(){return u}):this.marked=u}.call(function(){return this||("undefined"!=typeof window?window:global)}()),HanulBlog.ArticleDom=CLASS({init:function(e,t,n){"use strict";var i,r,o,s,l,a,u=n.articleData,c=n.isViewMode,h=n.isShowCategory,p=CALENDAR(TIME(u.createTime));i=UUI.PANEL({style:{margin:"10px 0"},contentStyle:{border:"1px solid #ccc"},c:[H3({style:{padding:10,cursor:c===!0?void 0:"pointer"},c:[A({style:{flt:"left",textDecoration:"none",fontWeight:"bold"},href:c===!0?void 0:HanulBlog.HREF("view/"+u.id),c:[h===!0?r=SPAN({c:u.category}):"",h===!0?" :: ":"",void 0!==u.title&&""!==u.title?u.title:u.content.length>100?u.content.substring(0,100)+" ...":u.content]}),SPAN({style:{flt:"right",marginTop:1,fontSize:12,color:"#999"},c:p.getYear()+"년 "+p.getMonth()+"월 "+p.getDate()+"일 "+p.getHour()+"시 "+p.getMinute()+"분"}),CLEAR_BOTH()],on:{tap:function(e){c!==!0&&(HanulBlog.GO("view/"+u.id),e.stopDefault())}}}),DIV({style:{borderTop:"1px solid #ccc",padding:10},c:[HanulBlog.Layout.checkIsAuthed()===!0?DIV({style:{flt:"right",color:"#4183c4",marginBottom:10},c:[A({c:"글 수정",on:{tap:function(){HanulBlog.GO("update/"+u.id)}}})," ",A({c:"글 삭제",on:{tap:function(){confirm("정말 삭제하시겠습니까?")===!0&&HanulBlog.ArticleModel.remove(u.id,function(){HanulBlog.REFRESH("")})}}})]}):"",CLEAR_BOTH(),o=P({style:{fontSize:14}})]})]}),o.getEl().setAttribute("class","markdown-body"),o.getEl().innerHTML=marked(u.content),h===!0&&GET({host:"tagengine.btncafe.com",uri:"__REP_TAG",paramStr:"tag="+encodeURIComponent(u.category)},function(e){r.empty(),r.append(e)}),t.getPanel=s=function(){return i},t.hideContent=l=function(){o.hide()},t.showContent=a=function(){o.show()}}}),HanulBlog.Form=CLASS({preset:function(){"use strict";return VIEW},init:function(e){"use strict";var t,n=DIV({style:{padding:10},c:[UUI.BUTTON({style:{flt:"left",color:"#4183c4"},title:"뒤로가기",on:{tap:function(){history.back()}}}),CLEAR_BOTH()]}).appendTo(HanulBlog.Layout.getContent());e.on("paramsChange",function(i){var r=i.id;NEXT([function(e){void 0===r?(TITLE(CONFIG.title+" :: 글작성"),e()):(TITLE(CONFIG.title+" :: 글수정"),HanulBlog.ArticleModel.get(r,e))},function(){return function(i){var r,o,s;e.checkIsClosed()!==!0&&(void 0!==t&&t.remove(),n.append(t=UUI.VALID_FORM({style:{marginTop:10},errorMsgs:{category:{size:function(e){return"카테고리는 "+e.max+"글자 미만으로 입력해주세요."}},content:{notEmpty:"내용을 입력해주세요."}},errorMsgStyle:{padding:"5px 10px",backgroundColor:"#D83F25",color:"#fff"},c:[s=UUI.FULL_INPUT({style:{border:"1px solid #999"},placeholder:"카테고리",name:"category"}),UUI.FULL_INPUT({style:{marginTop:10,border:"1px solid #999"},placeholder:"제목",name:"title"}),r=DIV({style:{marginTop:10,height:300}}),UUI.FULL_SUBMIT({style:{marginTop:10,backgroundColor:BROWSER_CONFIG.HanulBlog.baseColor,color:"#fff",fontWeight:"bold"},value:void 0===i?"글 작성":"글 수정"}),UUI.FULL_UPLOAD_FORM({style:{marginTop:10},box:HanulBlog,uploadSuccess:function(e,t){t.after(P({c:"![ScreenShot]("+HanulBlog.RF("THUMB/"+e.id)+")"}))}})],on:{submit:function(e,t){var n=t.getData();void 0!==i&&(n.id=i.id),n.content=o.getValue(),(void 0===i?HanulBlog.ArticleModel.create:HanulBlog.ArticleModel.update)(n,{notValid:t.showErrors,success:function(e){HanulBlog.GO("view/"+e.id)}})}}})),o=ace.edit(r.getEl()),o.setTheme("ace/theme/twilight"),o.getSession().setMode("ace/mode/markdown"),void 0!==i&&(t.setData(i),o.setValue(i.content,1),GET({host:"tagengine.btncafe.com",uri:"__REP_TAG",paramStr:"tag="+encodeURIComponent(i.category)},s.setValue)))}}])}),e.on("close",function(){n.remove()})}}),HanulBlog.Layout=CLASS(function(e){"use strict";var t,n,i,r=!1;return e.checkIsAuthed=n=function(){return r},e.getContent=i=function(){return t},{preset:function(){return VIEW},init:function(e){var n,i,o=HanulBlog.STORE("passwordStore"),s=HanulBlog.ROOM("authRoom"),l=Yogurt.MenuLayout({toolbar:Yogurt.Toolbar({style:{onDisplayResize:function(e){return e>Yogurt.MenuLayout.getHideMenuWinWidth()?{display:"none"}:{display:"block"}}},left:Yogurt.ToolbarButton({img:IMG({src:Yogurt.R("menu.png")}),on:{tap:function(){l.toggleLeftMenu()}}}),title:H1({style:{cursor:"pointer"},c:A({style:{textDecoration:"none"},href:HanulBlog.HREF(""),c:CONFIG.title}),on:{tap:function(e){HanulBlog.GO(""),e.stopDefault()}}})}),leftMenu:DIV({style:{color:"#fff",fontWeight:"bold"},c:[H1({style:{padding:10,fontSize:30,fontWeight:"bold",cursor:"pointer",onDisplayResize:function(e){return e>Yogurt.MenuLayout.getHideMenuWinWidth()?{display:"block"}:{display:"none"}}},c:A({style:{textDecoration:"none"},href:HanulBlog.HREF(""),c:CONFIG.title}),on:{tap:function(e){HanulBlog.GO(""),e.stopDefault()}}}),n=DIV({c:UUI.BUTTON_H({style:{padding:"10px 10px 5px 10px"},title:A({style:{textDecoration:"none"},href:HanulBlog.HREF(""),c:"전체보기"}),on:{tap:function(e){HanulBlog.GO(""),l.hideLeftMenu(),e.stopDefault()}}})}),i=DIV(),void 0===BROWSER_CONFIG.HanulBlog.email?"":A({style:{padding:10,textDecoration:"none"},c:BROWSER_CONFIG.HanulBlog.email,href:"mailto:"+BROWSER_CONFIG.HanulBlog.email})]}),c:t=DIV()}).appendTo(BODY);s.send({methodName:"auth",data:o.get("password")},function(t){r=t,e.checkIsClosed()!==!0&&i.append(UUI.BUTTON_H({style:{padding:10},title:r===!0?"글 작성":"로그인",on:{tap:function(){HanulBlog.GO(r===!0?"new":"login"),l.hideLeftMenu()}}}))}),HanulBlog.CategoryModel.find({sort:{articleCount:-1}},function(t){e.checkIsClosed()!==!0&&EACH(t,function(t){var i;n.append(UUI.BUTTON_H({style:{padding:"5px 10px"},title:[i=SPAN({c:t.id})," ("+t.articleCount+")"],href:HanulBlog.HREF("list/"+t.id+"/1"),on:{tap:function(e){HanulBlog.GO("list/"+t.id+"/1"),l.hideLeftMenu(),e.stopDefault()}}})),GET({host:"tagengine.btncafe.com",uri:"__REP_TAG",paramStr:"tag="+encodeURIComponent(t.id)},function(t){e.checkIsClosed()!==!0&&(i.empty(),i.append(t))})})}),e.on("close",function(){s.exit(),l.remove(),t=void 0})}}}),HanulBlog.List=CLASS({preset:function(){"use strict";return VIEW},init:function(e){"use strict";var t,n,i,r=[],o=!1,s=DIV({style:{padding:10},c:[t=DIV({style:{flt:"left"}}),UUI.BUTTON({style:{flt:"right",color:"#4183c4"},title:"내용 닫기",on:{tap:function(e,t){o!==!0?(EACH(r,function(e){e.hideContent()}),o=!0,t.setTitle("내용 열기")):(EACH(r,function(e){e.showContent()}),o=!1,t.setTitle("내용 닫기"))}}}),CLEAR_BOTH(),n=UUI.LIST(),i=UUI.LIST(),CLEAR_BOTH()]}).appendTo(HanulBlog.Layout.getContent());e.on("paramsChange",function(o){var s=o.category,l=o.page;t.empty(),void 0!==s&&(t.append(s),GET({host:"tagengine.btncafe.com",uri:"__REP_TAG",paramStr:"tag="+encodeURIComponent(s)},function(n){e.checkIsClosed()!==!0&&(t.empty(),t.append(n))})),l=void 0===l?1:INTEGER(l),n.removeAllItems(),r=[],HanulBlog.ArticleModel.find({filter:{category:s},start:(l-1)*BROWSER_CONFIG.HanulBlog.listArticleCount,count:BROWSER_CONFIG.HanulBlog.listArticleCount},function(t){e.checkIsClosed()!==!0&&EACH(t,function(e){var t=HanulBlog.ArticleDom({articleData:e,isShowCategory:void 0===s});n.addItem({key:e.id,item:LI({c:t.getPanel()})}),r.push(t)})}),i.removeAllItems(),HanulBlog.ArticleModel.count({filter:{category:s}},function(t){e.checkIsClosed()!==!0&&REPEAT((t-1)/BROWSER_CONFIG.HanulBlog.listArticleCount+1,function(e){i.addItem({key:e+1,item:LI({style:{flt:"left",marginRight:10},c:A({c:e+1,href:HanulBlog.HREF("list/"+(void 0===s?"":s+"/")+(e+1)),on:{tap:function(t){HanulBlog.GO("list/"+(void 0===s?"":s+"/")+(e+1)),t.stopDefault()}}})})})})}),TITLE(void 0===s?CONFIG.title:CONFIG.title+" :: "+s)}),e.on("close",function(){s.remove()})}}),HanulBlog.Login=CLASS({preset:function(){"use strict";return VIEW},init:function(e){"use strict";var t=HanulBlog.STORE("passwordStore"),n=HanulBlog.ROOM("authRoom"),i=DIV({style:{padding:10},c:UUI.VALID_FORM({c:[UUI.FULL_INPUT({style:{border:"1px solid #999"},placeholder:"비밀번호",name:"password",type:"password"}),UUI.FULL_CHECKBOX({style:{marginTop:10},label:"로그인을 유지하시겠습니까?",name:"isRememberMe"}),UUI.FULL_SUBMIT({style:{marginTop:10,backgroundColor:BROWSER_CONFIG.HanulBlog.baseColor,color:"#fff",fontWeight:"bold"},value:"로그인"})],on:{submit:function(e,i){var r=i.getData();n.send({methodName:"auth",data:r.password},function(e){e===!0?(t.save({name:"password",value:r.password,isToSession:r.isRememberMe!==!0}),HanulBlog.REFRESH("")):UUI.MODAL({style:{padding:"20px 30px",backgroundColor:BROWSER_CONFIG.HanulBlog.baseColor,color:"#fff"},c:"비밀번호가 다릅니다."})})}}})}).appendTo(HanulBlog.Layout.getContent());TITLE(CONFIG.title+" :: 로그인"),e.on("close",function(){n.exit(),i.remove()})}}),HanulBlog.View=CLASS({preset:function(){"use strict";return VIEW},init:function(e){"use strict";var t=DIV({style:{padding:10}}).appendTo(HanulBlog.Layout.getContent());e.on("paramsChange",function(e){var n=e.id;HanulBlog.ArticleModel.get(n,function(e){t.empty(),t.append(UUI.BUTTON({style:{flt:"left",color:"#4183c4"},title:"뒤로가기",on:{tap:function(){history.back()}}})),t.append(CLEAR_BOTH()),t.append(HanulBlog.ArticleDom({articleData:e,isViewMode:!0}).getPanel()),TITLE(CONFIG.title+" :: "+e.title)})}),e.on("close",function(){t.remove()})}});