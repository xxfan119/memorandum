(this.webpackJsonpmemorandum=this.webpackJsonpmemorandum||[]).push([[0],{151:function(t,e,n){},152:function(t,e,n){},157:function(t,e,n){},160:function(t,e,n){},172:function(t,e,n){},173:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),o=n(9),s=n.n(o),a=(n(93),n(94),n(14)),r=n(15),l=n(18),d=n(17),j=n(10),b=(n(95),n(49)),u=n.n(b),h=(n(151),n(152),n(24)),p="addnote",f="addbacklog",O="deletenote",v="deletebacklog",x="addnotetype",m="deletenotetype",y=function(t){return{type:p,data:t}},g=function(t){return{type:O,data:t}},N=(n(157),n(1)),k=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){return Object(a.a)(this,n),e.call(this,t)}return Object(r.a)(n,[{key:"render",value:function(){return Object(N.jsx)("div",{className:"menu",children:Object(N.jsxs)("div",{className:"type",children:["\u5168\u90e8",this.props.title]})})}}]),n}(c.Component),C=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).toEdit=function(e){return function(){t.props.history.push("/note/".concat(e))}},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this;return Object(N.jsxs)("div",{className:"allnotes",children:[Object(N.jsx)(k,{title:"\u7b14\u8bb0"}),this.props.noteList.length?Object(N.jsx)("ul",{children:this.props.noteList.map((function(e){return Object(N.jsxs)("li",{onClick:t.toEdit(e.id),children:[e.title?Object(N.jsx)("div",{className:"title",children:e.title}):Object(N.jsx)("div",{className:"title",children:e.content}),e.title?Object(N.jsxs)("div",{className:"content",children:[e.isCollect&&Object(N.jsxs)("span",{className:"iconfont icon-shoucangxing2",children:[" ","\xa0"]}),e.id.slice(0,8)," | ",e.content]}):""]},e.id)}))}):Object(N.jsxs)("div",{className:"empty",children:[Object(N.jsx)("div",{className:"iconfont icon-19"}),Object(N.jsx)("div",{children:"\u6ca1\u6709\u7b14\u8bb0"})]})]})}}]),n}(c.Component),L=Object(h.b)((function(t){return{noteList:t.noteList}}),{addNote:y,deleteNote:g})(C),S=Object(j.e)(L),w=(n(160),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(N.jsxs)("div",{className:"allbacklogs",children:[Object(N.jsx)(k,{title:"\u5f85\u529e"}),this.props.length?Object(N.jsx)("ul",{children:this.props.backlogList.map((function(t){return Object(N.jsxs)("li",{children:[t.content," "]},t.id)}))}):Object(N.jsxs)("div",{className:"empty",children:[Object(N.jsx)("div",{className:"iconfont icon-19"}),Object(N.jsx)("div",{children:"\u6ca1\u6709\u5f85\u529e"})]})]})}}]),n}(c.Component)),z=Object(h.b)((function(t){return{backlogList:t.backlogList}}),{addBacklog:function(t){return{type:f,data:t}},deleteBacklog:function(t){return{type:v,data:t}}})(w),I=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(a.a)(this,n),(c=e.call(this,t)).add=function(){"notes"===c.state.path?c.props.history.push("/note/0"):console.log(1)},c.state={path:"notes"},c}return Object(r.a)(n,[{key:"renderContent",value:function(t){return Object(N.jsx)("div",{style:{backgroundColor:"#f1f1f1",height:"100%"},children:"notes"===this.state.path?Object(N.jsx)(S,{}):Object(N.jsx)(z,{})})}},{key:"render",value:function(){var t=this;return Object(N.jsxs)("div",{children:[Object(N.jsx)("button",{className:"addbutton",onClick:this.add,children:"+"}),Object(N.jsx)("div",{style:{position:"fixed",height:"100%",width:"100%"},children:Object(N.jsxs)(u.a,{unselectedTintColor:"#949494",tintColor:"#33A3F4",barTintColor:"#eeeded",children:[Object(N.jsx)(u.a.Item,{title:"\u7b14\u8bb0",icon:Object(N.jsx)("div",{className:"iconfont tabicon icon-biaoqianA01_biji-99"}),selectedIcon:Object(N.jsx)("div",{className:"iconfont tabicon icon-biaoqianA01_biji-99"}),selected:"notes"===this.state.path,onPress:function(){t.setState({path:"notes"})},children:this.renderContent("note")},"note"),Object(N.jsx)(u.a.Item,{icon:Object(N.jsx)("div",{className:"iconfont tabicon icon-daiban"}),selectedIcon:Object(N.jsx)("div",{className:"iconfont tabicon icon-daiban"}),title:"\u5f85\u529e",selected:"backlogs"===this.state.path,onPress:function(){t.setState({path:"backlogs"})},children:this.renderContent("backlog")},"backlog")]})})]})}}]),n}(c.Component),R=(n(161),n(85)),B=n.n(R),F=(n(167),n(68)),T=n.n(F),V=(n(172),T.a.Item),A=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(a.a)(this,n),(c=e.call(this,t)).titleRef=i.a.createRef(),c.contentRef=i.a.createRef(),c.editor=function(){var t=c.titleRef.current.value,e=c.contentRef.current.value;if(t||e){var n={id:(new Date).toISOString(),content:e,title:t,type:c.state.type,isCollect:!1};B.a.success("\u6dfb\u52a0\u6210\u529f",2),c.props.addNote(n)}},c.back=function(){c.props.history.goBack()},c.onSelect=function(t){c.setState({visible:!1,type:t.props.value,color:t.props.icon.props.style.color})},c.handleVisibleChange=function(t){c.setState({visible:t})},c.state={visible:!1,type:"\u672a\u5206\u7c7b",color:""},c}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.match.params.id;if("0"!==t){var e=this.props.noteList.find((function(e){return e.id===t})),n=null;"\u672a\u5206\u7c7b"!==e.type&&(n=this.props.notetypeList.find((function(t){return t.name===e.type}))),this.setState({type:n.name,color:n.color})}}},{key:"render",value:function(){var t=this.props.match.params.id,e={content:"",title:""};return"0"!==t&&(e=this.props.noteList.find((function(e){return e.id===t}))),Object(N.jsxs)("div",{className:"notecontent",children:[Object(N.jsxs)("div",{className:"nav",children:[Object(N.jsx)("span",{onClick:this.back,className:"iconfont icon-houtui",style:{fontSize:"20px"}}),Object(N.jsx)("span",{onClick:this.editor,className:"iconfont icon-gou",style:{fontSize:"20px"}})]}),Object(N.jsx)("div",{className:"title",children:Object(N.jsx)("input",{placeholder:"\u6807\u9898",ref:this.titleRef,defaultValue:"0"!==t?e.title:""})}),Object(N.jsxs)("div",{className:"type",children:[Object(N.jsxs)("span",{children:["\u4eca\u5929 ",(new Date).toLocaleString().slice(9,14)," "]}),Object(N.jsx)("span",{children:Object(N.jsx)("div",{id:"notetype",children:Object(N.jsx)(T.a,{visible:this.state.visible,overlay:[this.props.notetypeList.map((function(t){return Object(N.jsxs)(V,{value:t.name,icon:Object(N.jsx)("span",{className:"iconfont icon-tubiaozhizuomoban-",style:{color:t.color,fontSize:"20px"}}),children:["\xa0",Object(N.jsxs)("span",{children:[" ",t.name]})]})})),Object(N.jsxs)(V,{value:"\u672a\u5206\u7c7b",icon:Object(N.jsx)("span",{className:"iconfont icon-tubiaozhizuomoban-",style:{fontSize:"20px"}}),children:["\xa0",Object(N.jsx)("span",{children:"\u672a\u5206\u7c7b"})]}),Object(N.jsxs)(V,{icon:Object(N.jsx)("span",{className:"iconfont icon-biaoqian1"}),children:["\xa0",Object(N.jsx)("span",{children:"\u65b0\u5efa"})]})],align:{overflow:{adjustY:0,adjustX:0},offset:[-10,0]},onVisibleChange:this.handleVisibleChange,onSelect:this.onSelect,children:Object(N.jsx)("div",{style:{height:"100%",display:"flex",alignItems:"center"},children:Object(N.jsxs)("div",{children:[Object(N.jsx)("span",{className:"iconfont icon-tubiaozhizuomoban-",style:{fontSize:"20px",color:this.state.color}}),this.state.type,Object(N.jsx)("span",{className:"iconfont icon-xiaosanjiaodown"})]})})})})})]}),Object(N.jsx)("div",{className:"content",children:Object(N.jsx)("textarea",{type:"text",ref:this.contentRef,defaultValue:"0"!==t?e.content:""})})]})}}]),n}(c.Component),D=Object(h.b)((function(t){return{noteList:t.noteList,notetypeList:t.notetypeList}}),{addNote:y,deleteNote:g,addNoteType:function(t){return{type:x,data:t}}})(A),P=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)(j.a,{path:"/",exact:!0,component:I}),Object(N.jsx)(j.a,{path:"/note/:id",exact:!0,component:D})]})}}]),n}(c.Component),q=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,178)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),o(t),s(t)}))},E=n(33),J=n(34),M=[];var _=[];var X=[{name:"\u65c5\u6e38",color:"#ffbb00"},{name:"\u4e2a\u4eba",color:"#03a582"},{name:"\u751f\u6d3b",color:"#44d17a"},{name:"\u5de5\u4f5c",color:"#ff0707"}];var Y=Object(E.b)({noteList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0,n=e.type,c=e.data;switch(n){case p:t=[].concat(Object(J.a)(t),[c]);break;case O:t=t.filter((function(t){return t.id!==c.id}))}return t},backlogList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0,n=e.type,c=e.data;switch(n){case f:t=[].concat(Object(J.a)(t),[c]);break;case v:t=t.filter((function(t){return t.id!==c.id}))}return t},notetypeList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,e=arguments.length>1?arguments[1]:void 0,n=e.type,c=e.data;switch(n){case x:t=[].concat(Object(J.a)(t),[c]);break;case m:t=t.filter((function(t){return t.id!==c.id}))}return t}}),G=Object(E.c)(Y),H=n(48);s.a.render(Object(N.jsx)(i.a.StrictMode,{children:Object(N.jsx)(H.a,{children:Object(N.jsx)(h.a,{store:G,children:Object(N.jsx)(P,{})})})}),document.getElementById("root")),q()},93:function(t,e,n){},94:function(t,e,n){}},[[173,1,2]]]);
//# sourceMappingURL=main.59061c3d.chunk.js.map