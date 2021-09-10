(this["webpackJsonpcreate-react-app-with-typescript"]=this["webpackJsonpcreate-react-app-with-typescript"]||[]).push([[0],{106:function(e,t,n){},11:function(e){e.exports=JSON.parse('{"baseAddress":"https://api.nome.fi:54321/v1/"}')},164:function(e,t,n){},165:function(e,t,n){},168:function(e,t,n){},169:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),c=n.n(o),i=n(205),s=n(224),l=n(19),d=n(40),u=n(27),j=n(13),h=n(14),b=n(200),f=Object(b.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(img/chess.jpg)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(2,0,2)}}})),m=n(203),p=n(120),g=n(228),x=n(74),O=n(225),v=n(209),y=n(81),w=n.n(y),k=n(112),S=n(11),C=n(12),N=n.n(C);var I=n(1),A=function(e){var t=e.onLoginRedirect,n=e.history,r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.useState)(t),r=Object(j.a)(n,2),o=r[0],c=r[1];return{onChange:function(e){c(Object(u.a)(Object(u.a)({},o),{},Object(d.a)({},e.target.name,e.target.value)))},onSubmit:function(){var t=Object(k.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,e();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),values:o}}((function(){(e=s,N.a.post(S.baseAddress+"login",e).then((function(e){return e})).catch((function(e){if(e.response)return e.response}))).then((function(e){if(401===e.status){var a=e.data;alert(a)}else{var r=e.data;r&&("admin"===r.user.permissionLevel?(localStorage.setItem("token",r.token),localStorage.setItem("refreshToken",r.refreshToken),n.push(t)):alert("you are not admin"))}}));var e}),{email:"",password:""}),o=r.onChange,c=r.onSubmit,s=r.values;var l=f();return localStorage.getItem("token")?Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(h.a,{to:"/dashboard"})}):Object(I.jsxs)(m.a,{container:!0,component:"main",className:l.root,children:[Object(I.jsx)(i.a,{}),Object(I.jsx)(m.a,{item:!0,xs:!1,sm:4,md:7,className:l.image}),Object(I.jsx)(m.a,{item:!0,xs:12,sm:8,md:5,component:p.a,elevation:6,square:!0,children:Object(I.jsxs)("div",{className:l.paper,children:[Object(I.jsx)(g.a,{className:l.avatar}),Object(I.jsx)(x.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(I.jsxs)("form",{className:l.form,noValidate:!0,onSubmit:c,children:[Object(I.jsx)(O.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Username",name:"email",onChange:o,autoComplete:"email",autoFocus:!0}),Object(I.jsx)(O.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",onChange:o,label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(I.jsx)(v.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:l.submit,children:"Sign In"})]})]})})]})},E=n(73),D=n.n(E),R=n(210),T=n(211),L=n(212),F=Object(b.a)((function(e){return{root:{maxWidth:300,borderRadius:40,padding:30,lineHeight:1.5,boxShadow:"0px 2px 8px rgba(0,0,0,0.05)",transition:"transform 280ms ease-in-out, box-shadow 200ms ease-in-out","&:hover":{transform:"translateY(-10px)",boxShadow:"0px 4px 16px rgba(0,0,0,0.1)"}},keys:{marginTop:20,display:"flex"},keyIcon:{marginLeft:20,fontSize:34,transform:"rotate(-90deg)",color:"rgb(37, 150, 190)",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"7px"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:18,fontWeight:400},pos:{marginBottom:12}}}));function z(e){return N.a.get(S.baseAddress+"key",{headers:{Authorization:"token ".concat(e)}}).then((function(e){return e.data})).catch((function(e){console.error(e)}))}function K(){var e=F(),t=localStorage.getItem("token"),n=r.a.useState(0),o=Object(j.a)(n,2),c=o[0],i=o[1];return Object(a.useEffect)((function(){z(t).then((function(e){i(e.length)})).catch((function(e){return console.log(e)}))})),Object(I.jsxs)(R.a,{className:e.root,children:[Object(I.jsxs)(T.a,{children:[Object(I.jsx)(x.a,{className:e.title,gutterBottom:!0,children:"Available Keys"}),Object(I.jsxs)(x.a,{className:e.keys,variant:"h4",component:"h5",children:[c,Object(I.jsx)(D.a,{className:e.keyIcon})]})]}),Object(I.jsx)(L.a,{children:Object(I.jsx)(v.a,{href:"/dashboard/keys",size:"small",children:"Learn More"})})]})}var W=n(213);function H(e){return N.a.get(S.baseAddress+"target",{headers:{Authorization:"token ".concat(e)}}).then((function(e){return e.data})).catch((function(e){console.error(e)}))}function B(){var e=F(),t=localStorage.getItem("token"),n=r.a.useState(0),o=Object(j.a)(n,2),c=o[0],i=o[1];return Object(a.useEffect)((function(){H(t).then((function(e){return i(e.length)})).catch((function(e){return console.log(e)}))}),[]),Object(I.jsxs)(R.a,{className:e.root,children:[Object(I.jsxs)(T.a,{children:[Object(I.jsx)(x.a,{className:e.title,gutterBottom:!0,children:"Available Targets"}),Object(I.jsxs)(x.a,{className:e.keys,variant:"h4",component:"h5",children:[c,Object(I.jsx)(W.a,{className:e.keyIcon})]})]}),Object(I.jsx)(L.a,{children:Object(I.jsx)(v.a,{size:"small",children:"Learn More"})})]})}var G=220,M=Object(b.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),height:55},appBarShift:{width:"calc(100% - ".concat(G,"px)"),height:55,marginLeft:G,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},title:{fontSize:14,fontWeight:500,marginLeft:20},items:{fontSize:15,marginTop:"0.2rem"},selected:{backgroundColor:"rgb(197, 250, 211) !important",color:"green",fontWeight:60},hide:{display:"none"},drawer:{width:G,flexShrink:0},drawerPaper:{width:G},drawerHeader:Object(u.a)(Object(u.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-220},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}})),P=(n(79),n(42)),U=n(229),q=n(214);n(65);var V=n(16),J=n.n(V);var Y=function(e){Object(l.a)(e);var t=function(e){e.preventDefault(),function(e,t,n){var a=localStorage.getItem("token"),r={name:e,owner:t,expiresAt:n},o={method:"post",headers:{Authorization:"token ".concat(a)},url:S.baseAddress+"key",data:r};return N()(o).then((function(e){return e})).catch((function(e){if(e.response)return e.response}))}(e.target.name.value,e.target.owner.value,e.target.expire.value).then((function(e){if(console.log(e),400===e.status)alert(e.data);else if(403===e.status)alert(e.data);else{var t=e.data.key;J()({text:"Key created",button:{text:"Copy key"},content:{element:"input",attributes:{placeholder:"key",type:"input",value:t}}}).then((function(){var e=document.createElement("textarea");document.body.appendChild(e),e.value=t,e.select(),document.execCommand("copy"),document.body.removeChild(e),J()("Key copied!",{icon:"success"})}))}}))};return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(P.a,{closeOnDocumentClick:!1,trigger:Object(I.jsx)(U.a,{title:"Create a new key",children:Object(I.jsx)(q.a,{children:Object(I.jsx)(D.a,{})})}),modal:!0,children:function(e){return Object(I.jsxs)("div",{className:"modal",children:[Object(I.jsx)("button",{className:"close",onClick:e,children:"\xd7"}),Object(I.jsx)("div",{className:"header",children:" Add a new key "}),Object(I.jsx)("div",{className:"content",children:Object(I.jsxs)("form",{onSubmit:t,children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("label",{htmlFor:"inputAddress",children:"Name"}),Object(I.jsx)("input",{type:"text",name:"name",placeholder:""})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("label",{htmlFor:"inputAddress2",children:"Owner"}),Object(I.jsx)("input",{type:"text",name:"owner",placeholder:""})]}),Object(I.jsxs)("div",{children:["Expires At",Object(I.jsx)("input",{name:"expire",type:"datetime-local",defaultValue:"2022-01-01T00:00"}),Object(I.jsx)(v.a,{style:{marginTop:"20px"},type:"submit",variant:"contained",color:"primary",children:"Submit"})]})]})}),Object(I.jsx)("button",{className:"close",onClick:function(){e()},children:"\xd7"})]})}})})};var X=function(e){Object(l.a)(e);var t=function(e){e.preventDefault();var t=e.target.name.value;(function(e,t,n,a){var r=localStorage.getItem("token"),o={key:e,name:t,url:n,details:a},c={method:"post",headers:{Authorization:"token ".concat(r)},url:S.baseAddress+"target",data:o};return N()(c).then((function(e){return e})).catch((function(e){if(e.response)return e.response}))})(e.target.key.value,t,"http://nmas.nome.fi:"+e.target.url.value,e.target.details.value).then((function(e){console.log(e),400===e.status||403===e.status?alert(e.data):(alert("created success !"),window.location.reload(!1))}))};return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(P.a,{trigger:Object(I.jsx)(U.a,{title:"Create a new target",children:Object(I.jsx)(q.a,{children:Object(I.jsx)(W.a,{})})}),modal:!0,children:function(e){return Object(I.jsxs)("div",{className:"modal",children:[Object(I.jsx)("button",{className:"close",onClick:e,children:"\xd7"}),Object(I.jsx)("div",{className:"header",children:" Add a new target "}),Object(I.jsx)("div",{className:"content",children:Object(I.jsxs)("form",{onSubmit:t,children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("label",{htmlFor:"inputAddress",children:"Name"}),Object(I.jsx)("input",{type:"text",name:"name",placeholder:""})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("label",{htmlFor:"inputAddress2",children:"Key"}),Object(I.jsx)("input",{type:"text",name:"key",placeholder:""})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("label",{htmlFor:"inputAddress2",children:"Port"}),Object(I.jsx)("input",{type:"text",name:"url",placeholder:"50000"})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("label",{htmlFor:"inputAddress2",children:"Details"}),Object(I.jsx)("input",{type:"text",name:"details",placeholder:""})]}),Object(I.jsx)(v.a,{style:{marginTop:"20px"},type:"submit",variant:"contained",color:"primary",children:"Submit"})]})}),Object(I.jsx)("button",{className:"close",onClick:function(){e()},children:"\xd7"})]})}})})},Z=n(84),Q=n.n(Z);function $(e){var t=localStorage.getItem("token"),n={includeUsers:!0,key:e},a={method:"get",headers:{Authorization:"token ".concat(t)},url:S.baseAddress+"key",params:n};return N()(a).then((function(e){return e})).catch((function(e){if(e.response)return e.response}))}var _=n(33);var ee=function(e){if("action"===e.column.colId&&e.event.target.dataset.action){var t=e.event.target.dataset.action;if("edit"===t){console.log(e.data);var n=e.data.id;J()({text:"Change user to available port. E.g: 50001",content:"input",button:{text:"Search!",closeModal:!1}}).then((function(e){if(!e)throw null;var t;H(localStorage.getItem("token")).then((function(a){a.map((function(e){return{id:e.key.id,port:parseInt(e.url.slice(20))}})).map((function(n){e==n.port&&(t=n.id)})),t>0?function(e,t){var n=localStorage.getItem("token"),a={keyId:t},r={method:"patch",headers:{Authorization:"token ".concat(n)},url:S.baseAddress+"user/"+e,data:a};return N()(r).then((function(e){return e})).catch((function(e){if(e.response)return e.response}))}(n,t).then((function(e){J.a.stopLoading(),J.a.close(),alert("Change port Ok")})).catch((function(e){return console.log(e)})):(J.a.stopLoading(),J.a.close(),alert("wrong port"))}))})).catch((function(e){e&&J()("Oh noes!","The AJAX request failed!","error")}))}"update"===t&&e.api.stopEditing(!1),"cancel"===t&&e.api.stopEditing(!0)}},te=function(e){e.api.refreshCells({columns:["action"],rowNodes:[e.node],force:!0})},ne=function(e){e.api.refreshCells({columns:["action"],rowNodes:[e.node],force:!0})},ae=(n(55),n(56),[{headerName:"Name",field:"name",sortable:!0,flex:1},{headerName:"Email",field:"email",sortable:!0,editable:!1,flex:1,filter:"agTextColumnFilter",floatingFilter:!0},{headerName:"Action",minWidth:150,cellRenderer:function(e){var t=document.createElement("div"),n=e.api.getEditingCells().some((function(t){return t.rowIndex===e.node.rowIndex}));return t.innerHTML=n?'\n    <i class="fa fa-check" data-action="update" style="color:green"></i>\n    <i class="fa fa-times" data-action="cancel"></i>\n  ':'\n    <i class="fa fa-edit" data-action="edit" style="color:blue"></i>\n  ',t},editable:!1,colId:"action",width:80}]),re={editable:!0,resizable:!0,colSpan:function(e){return 2===e.data?3:1},filter:!0},oe=function(e){var t=e.usersInfo;return Object(I.jsxs)("div",{className:"ag-theme-alpine",style:{width:"100%",height:"500px",marginLeft:"50px"},children:[Object(I.jsx)("h4",{children:"Result"}),Object(I.jsx)("div",{style:{height:"80%",width:"80%"},children:Object(I.jsx)(_.AgGridReact,{columnDefs:ae,rowData:t,onRowEditingStopped:ne,onRowEditingStarted:te,onCellClicked:ee,rowSelection:"multiple",editType:"fullRow",defaultColDef:re,suppressClickEdit:!0,enableRangeSelection:!0,suppressCopyRowsToClipboard:!0})})]})},ce=[{headerName:"Name",field:"name",sortable:!0,filter:!0,flex:1},{headerName:"Email",field:"email",sortable:!0,filter:!0,editable:!1,flex:1}],ie={editable:!0,resizable:!0,colSpan:function(e){return 2===e.data?3:1},filter:!0},se=function(e){var t=e.usersInfo;return Object(I.jsxs)("div",{className:"ag-theme-alpine",style:{width:"80%",height:"350px",marginLeft:"50px"},children:[Object(I.jsx)("h4",{children:"Result"}),Object(I.jsx)(_.AgGridReact,{columnDefs:ce,rowData:t,rowSelection:"multiple",editType:"fullRow",defaultColDef:ie,suppressClickEdit:!0,enableRangeSelection:!0,domLayout:"autoHeight",suppressCopyRowsToClipboard:!0})]})};var le=function(e){var t=r.a.useState([]),n=Object(j.a)(t,2),a=n[0],o=n[1],c=r.a.useState([]),i=Object(j.a)(c,2),s=i[0],l=i[1],d=r.a.useState(!1),u=Object(j.a)(d,2),h=u[0],b=u[1],f=function(e){e.preventDefault(),$(e.target.key.value).then((function(e){console.log(e.data[0].users),void 0===e.data[0]?alert("Invalid key"):l(e.data[0].users)}))},m=function(){(function(){var e=localStorage.getItem("token");return N.a.get(S.baseAddress+"user",{headers:{Authorization:"token ".concat(e)}}).then((function(e){return e.data})).catch((function(e){console.error(e)}))})().then((function(e){return o(e)})).catch((function(e){return console.log("SHOW USERS ERROR",e)})),b(!h)};return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(P.a,{trigger:Object(I.jsx)(U.a,{title:"Search users by key",children:Object(I.jsx)(q.a,{children:Object(I.jsx)(Q.a,{})})}),modal:!0,closeOnDocumentClick:!1,children:function(e){return Object(I.jsxs)("div",{className:"modal",children:[Object(I.jsx)("button",{className:"close",onClick:e,children:"\xd7"}),Object(I.jsx)("div",{className:"header",children:" Search users by key "}),Object(I.jsx)("div",{children:Object(I.jsxs)("form",{onSubmit:f,children:[Object(I.jsx)("br",{}),Object(I.jsxs)(I.Fragment,{children:["Key: ",Object(I.jsx)("input",{type:"text",name:"key",className:"form-control key-input",id:"inputAddress",placeholder:""}),"\xa0 "]}),Object(I.jsx)(v.a,{type:"submit",variant:"contained",color:"primary",onClick:function(){return b(!1)},children:Object(I.jsx)(Q.a,{})}),Object(I.jsxs)(v.a,{style:{float:"right",marginRight:"7.5rem"},type:"submit",variant:"contained",color:"primary",onClick:m,children:[h?"Hide":"Show"," all users"]}),h&&Object(I.jsxs)("div",{children:[Object(I.jsx)(oe,{usersInfo:a}),Object(I.jsx)("br",{})]}),!h&&Object(I.jsxs)("div",{children:[Object(I.jsx)(se,{usersInfo:s}),Object(I.jsx)("br",{})]}),Object(I.jsx)("br",{})]})}),Object(I.jsx)("button",{className:"close",onClick:function(){e()},children:"\xd7"})]})}})})},de=Object(b.a)((function(e){return{root:{maxWidth:300,borderRadius:40,padding:30,lineHeight:1.5,boxShadow:"0px 2px 8px rgba(0,0,0,0.05)"}}})),ue=function(e){Object(l.a)(e);var t=de();return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("h1",{children:"Tools"}),Object(I.jsx)(R.a,{className:t.root,children:Object(I.jsxs)(T.a,{children:[Object(I.jsx)(Y,{}),Object(I.jsx)(X,{}),Object(I.jsx)(le,{})]})})]})};var je=function(e){if("action"===e.column.colId&&e.event.target.dataset.action){var t=e.event.target.dataset.action;if("edit"===t&&e.api.startEditingCell({rowIndex:e.node.rowIndex,colKey:e.columnApi.getDisplayedCenterColumns()[0].colId}),"delete"===t){console.log(e.data);var n=e.data,a=n.id,r=n.name;J()({title:"Are you sure to delete this row? Name: "+r,text:"Once deleted, you will not be able to recover this key!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(t){t&&(function(e){var t=localStorage.getItem("token");return N.a.delete(S.baseAddress+"target/"+e,{headers:{Authorization:"token ".concat(t)}}).then((function(e){return e.data})).catch((function(e){console.error(e)}))}(a).then((function(e){return console.log(e)})).catch((function(e){return console.error(e)})),J()("Deleted!","Your key has been deleted!","success"),e.api.applyTransaction({remove:[e.node.data]}))}))}"update"===t&&e.api.stopEditing(!1),"cancel"===t&&e.api.stopEditing(!0)}},he=function(e){e.api.refreshCells({columns:["action"],rowNodes:[e.node],force:!0})},be=function(e){e.api.refreshCells({columns:["action"],rowNodes:[e.node],force:!0})};n(80);n(106);var fe=[{headerName:"Name",field:"name",sortable:!0,filter:!0,flex:1},{headerName:"Email",field:"email",sortable:!0,filter:!0,editable:!1,flex:1}],me={editable:!0,width:220,colSpan:function(e){return 2===e.data?3:1},filter:!0},pe=function(e){var t=e.usersInfo;return Object(I.jsx)("div",{className:"ag-theme-alpine",style:{width:"90%",marginLeft:"1rem"},children:Object(I.jsx)(_.AgGridReact,{columnDefs:fe,overlayLoadingTemplate:'<span className="ag-overlay-loading-center">Please wait while your rows are loading</span>',rowData:t,rowSelection:"multiple",editType:"fullRow",defaultColDef:me,suppressClickEdit:!0,enableRangeSelection:!0,domLayout:"autoHeight",suppressCopyRowsToClipboard:!0})})},ge=function(e){var t=e.show,n=e.onSetShow,o=e.selectedKey,c=r.a.useState([]),i=Object(j.a)(c,2),s=i[0],l=i[1];return Object(a.useEffect)((function(){$(o).then((function(e){l(e.data[0].users)}))}),[o]),Object(I.jsx)(I.Fragment,{children:t&&Object(I.jsx)(P.a,{open:t,modal:!0,closeOnDocumentClick:!0,onClose:function(){return n(!1)},children:function(){return Object(I.jsxs)("div",{className:"modal",children:[Object(I.jsx)("button",{className:"close",onClick:function(){return n(!1)},children:"\xd7"}),Object(I.jsx)("div",{className:"header",children:" Email "}),Object(I.jsxs)("div",{children:[Object(I.jsx)("br",{}),Object(I.jsx)(pe,{usersInfo:s}),Object(I.jsx)("br",{})]})]})}})})},xe=n(114),Oe=n.n(xe),ve=(n(164),[{headerName:"Name",field:"name",sortable:!0,filter:"agTextColumnFilter",floatingFilter:!0},{headerName:"Key",field:"key",editable:!1,sortable:!0,filter:!0,flex:1,valueGetter:function(e){return e.data.key.key}},{headerName:"Details",field:"details",sortable:!0,filter:!0,flex:1},{headerName:"URL",field:"url",sortable:!0,flex:1,filter:"agTextColumnFilter",floatingFilter:!0},{headerName:"Action",minWidth:150,cellRenderer:function(e){var t=document.createElement("div"),n=e.api.getEditingCells().some((function(t){return t.rowIndex===e.node.rowIndex}));return t.innerHTML=n?'\n    <i class="fa fa-check" data-action="update" style="color:green"></i>\n    <i class="fa fa-times" data-action="cancel"></i>\n  ':'\n    <i class="fa fa-edit" data-action="edit" style="color:blue"></i>\n    <i class="fa fa-trash" data-action="delete" style="color:red"></i>\n  ',t},editable:!1,colId:"action",width:80}]),ye={editable:!0,resizable:!0,colSpan:function(e){return 2===e.data?3:1}},we=function(e){J()({title:"Are you sure to update this row?",icon:"warning",buttons:!0,dangerMode:!0}).then((function(t){if(t){var n=e.data;(function(e,t,n,a){var r=localStorage.getItem("token"),o={name:e,details:t,url:n},c={method:"patch",headers:{Authorization:"token ".concat(r)},url:S.baseAddress+"target/"+a,data:o};return N()(c).then((function(e){return e})).catch((function(e){if(e.response)return e.response}))})(n.name,n.details,n.url,n.id).then((function(e){403===e.status?J()("Error!",e.data,"warning"):J()("Updated!",e.data,"success")})).catch((function(e){return console.error(e)}))}}))},ke=function(e){Object(l.a)(e);var t=Object(a.useState)(),n=Object(j.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(!1),i=Object(j.a)(c,2),s=i[0],d=i[1],u=Object(a.useState)(""),h=Object(j.a)(u,2),b=h[0],f=h[1],m=localStorage.getItem("token");return Object(a.useEffect)((function(){H(m).then((function(e){console.log(e),o(e)})).catch((function(e){return console.log(e)}))}),[]),Object(I.jsxs)("div",{className:"ag-theme-alpine container",style:{width:"80%",height:"500px",marginTop:"3rem",marginLeft:"0px"},children:[Object(I.jsxs)("div",{id:"containerIntro",children:[Object(I.jsx)("h1",{children:"Active Targets"}),"\xa0",Object(I.jsxs)("p",{className:"tooltip",children:[Object(I.jsx)(Oe.a,{color:"primary"}),Object(I.jsxs)("span",{className:"tooltiptext",children:[Object(I.jsx)("b",{children:"Double click"})," in ",Object(I.jsx)("b",{children:" key"})," to show the user information!"]})]})]}),s&&Object(I.jsx)(ge,{show:s,onSetShow:d,selectedKey:b}),Object(I.jsx)(_.AgGridReact,{onRowEditingStopped:be,onRowEditingStarted:he,onCellClicked:je,onCellDoubleClicked:function(e){f(e.value),d(!0)},overlayLoadingTemplate:'<span className="ag-overlay-loading-center">Please wait while your rows are loading</span>',columnDefs:ve,rowData:r,rowSelection:"multiple",editType:"fullRow",defaultColDef:ye,suppressClickEdit:!0,enableRangeSelection:!0,clipboardDeliminator:",",onRowValueChanged:we,suppressCopyRowsToClipboard:!0,stopEditingWhenCellsLoseFocus:!0,domLayout:"autoHeight"})]})},Se=(n(165),function(e){Object(l.a)(e);var t=M();return Object(I.jsxs)("div",{className:"container",children:[Object(I.jsx)("div",{className:t.drawerHeader}),Object(I.jsx)("h1",{children:"Dashboard"}),Object(I.jsxs)("div",{className:"progress",children:[Object(I.jsx)("div",{className:"keys",children:Object(I.jsx)(K,{})}),Object(I.jsx)("div",{className:"active-keys",children:Object(I.jsx)(B,{})}),Object(I.jsx)("div",{className:"tools",children:Object(I.jsx)(ue,{})})]}),Object(I.jsx)("div",{children:Object(I.jsx)(ke,{})})]})}),Ce=n(57),Ne=n.n(Ce),Ie=(n(166),function(e){if("action"===e.column.colId&&e.event.target.dataset.action){var t=e.event.target.dataset.action;"edit"===t&&e.api.startEditingCell({rowIndex:e.node.rowIndex,colKey:e.columnApi.getDisplayedCenterColumns()[0].colId}),"update"===t&&e.api.stopEditing(!1),"cancel"===t&&e.api.stopEditing(!0)}}),Ae=function(e){e.api.refreshCells({columns:["action"],rowNodes:[e.node],force:!0})},Ee=function(e){e.api.refreshCells({columns:["action"],rowNodes:[e.node],force:!0})},De=function(){function e(){}return e.prototype.init=function(e){this.eInput=document.createElement("input"),this.eInput.value=e.value,Ne()(this.eInput).datepicker({dateFormat:"yy-mm-ddT00:00:00.000Z"})},e.prototype.getGui=function(){return this.eInput},e.prototype.afterGuiAttached=function(){this.eInput.focus(),this.eInput.select()},e.prototype.getValue=function(){return this.eInput.value},e.prototype.destroy=function(){},e.prototype.isPopup=function(){return!1},e};var Re=[{headerName:"Key",field:"key",sortable:!0,filter:!0,editable:!1,flex:2},{headerName:"Name",field:"name",sortable:!0,filter:!0,flex:1},{headerName:"Owner",field:"owner",sortable:!0,filter:!0,editable:!1,flex:1},{headerName:"Expires at",field:"expiresAt",sortable:!0,filter:!0,flex:1.5,maxWidth:400,cellEditor:"datePicker",valueFormatter:function(e){var t=(new Date).toISOString().substring(0,10),n=new Date(e.value).toISOString().substring(0,10);return n+" ("+Math.floor((Date.parse(n)-Date.parse(t))/864e5)+" days left)"}},{headerName:"Action",minWidth:150,cellRenderer:function(e){var t=document.createElement("div"),n=e.api.getEditingCells().some((function(t){return t.rowIndex===e.node.rowIndex}));return t.innerHTML=n?'\n    <i class="fa fa-check" data-action="update" style="color:green"></i>\n    <i class="fa fa-times" data-action="cancel"></i>\n  ':'\n    <i class="fa fa-edit" data-action="edit" style="color:blue"></i>\n  ',t},editable:!1,colId:"action",width:80}],Te={editable:!0,width:220,colSpan:function(e){return 2===e.data?3:1},filter:!0},Le=function(e){console.log(e.data),J()({title:"Are you sure to update this row?",icon:"warning",buttons:!0,dangerMode:!0}).then((function(t){if(t){var n=e.data;(function(e,t,n){var a=localStorage.getItem("token"),r={name:t,expiresAt:n},o={method:"patch",headers:{Authorization:"token ".concat(a)},url:S.baseAddress+"key/"+e,data:r};return N()(o).then((function(e){return e})).catch((function(e){if(e.response)return e.response}))})(n.id,n.name,n.expiresAt).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),J()("Updated!","Your key has been updated!","success")}}))},Fe=function(e){Object(l.a)(e);var t=Object(a.useState)(),n=Object(j.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(!1),i=Object(j.a)(c,2),s=i[0],d=i[1],u=Object(a.useState)(""),h=Object(j.a)(u,2),b=h[0],f=h[1],m=localStorage.getItem("token");return Object(a.useEffect)((function(){z(m).then((function(e){return o(e)})).catch((function(e){return console.log(e)}))}),[]),Object(I.jsxs)("div",{className:"ag-theme-alpine container",style:{width:"80%",height:"500px",marginTop:"100px"},children:[Object(I.jsx)("h1",{children:"Available Keys"}),s&&Object(I.jsx)(ge,{show:s,onSetShow:d,selectedKey:b}),Object(I.jsx)(_.AgGridReact,{onRowEditingStopped:Ee,onRowEditingStarted:Ae,onCellClicked:Ie,onCellDoubleClicked:function(e){f(e.value),d(!0)},columnDefs:Re,rowData:r,rowSelection:"multiple",editType:"fullRow",defaultColDef:Te,suppressClickEdit:!0,enableRangeSelection:!0,onRowValueChanged:Le,suppressCopyRowsToClipboard:!0,domLayout:"autoHeight",components:{datePicker:De()}})]})},ze=n(4),Ke=n(215),We=n(216),He=n(115),Be=n.n(He),Ge=function(e){var t=e.open,n=e.handleDrawerOpen,a=e.onLogOut,r=M();return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(i.a,{}),Object(I.jsx)(Ke.a,{position:"fixed",className:Object(ze.a)(r.appBar,Object(d.a)({},r.appBarShift,t)),color:"default",style:{background:"inherit",boxShadow:"none"},children:Object(I.jsxs)(We.a,{children:[Object(I.jsx)(q.a,{color:"inherit","aria-label":"open drawer",onClick:n,edge:"start",className:Object(ze.a)(r.menuButton,t&&r.hide),children:Object(I.jsx)(Be.a,{})}),Object(I.jsx)(x.a,{variant:"h6",noWrap:!0}),Object(I.jsx)(v.a,{href:"/",onClick:a,style:{marginLeft:"80%",fontSize:16},color:"inherit",children:"Log-out"})]})})]})},Me=n(39),Pe=n(22),Ue=n(227),qe=n(208),Ve=n(219),Je=n(220),Ye=n(222),Xe=n(217),Ze=n(218),Qe=n(221),$e=n(223);function _e(e){return N.a.post(S.baseAddress+"/login",{token:e}).then((function(e){return e.data})).catch((function(e){return e.response.status}))}n(168);var et=function(e){var t=e.open,n=e.handleDrawerClose,o=e.onLogOut,c=M(),i=Object(Pe.a)(),s=r.a.useState(0),l=Object(j.a)(s,2),d=l[0],u=l[1],h=function(e,t){u(t)};return Object(a.useEffect)((function(){switch(window.location.pathname){case"/dashboard":u(0);break;case"/dashboard/keys":u(1);break;default:u(0)}}),[d]),Object(a.useEffect)((function(){var e=localStorage.getItem("token"),t=localStorage.getItem("refreshToken");z(e).then((function(e){void 0===e?_e(t).then((function(e){403===e?(o(),window.location.reload(!1)):(localStorage.setItem("token",e.token),window.location.reload(!1))})):console.log("token is OKay")})).catch((function(e){return console.log(e)}))}),[]),Object(a.useEffect)((function(){var e=localStorage.getItem("token"),t=localStorage.getItem("refreshToken");z(e).then((function(e){void 0===e?_e(t).then((function(e){403===e?(o(),window.location.reload(!1)):(localStorage.setItem("token",e.token),window.location.reload(!1))})):console.log("token is OK")})).catch((function(e){return console.log(e)}))}),[d]),Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(Ue.a,{className:c.drawer,variant:"persistent",anchor:"left",open:t,classes:{paper:c.drawerPaper},children:[Object(I.jsx)("div",{className:c.drawerHeader,children:Object(I.jsx)(q.a,{color:"inherit",onClick:n,children:"ltr"===i.direction?Object(I.jsx)(Xe.a,{}):Object(I.jsx)(Ze.a,{})})}),Object(I.jsx)(x.a,{className:c.title,gutterBottom:!0,children:"GENERAL"}),Object(I.jsxs)(qe.a,{component:"nav","aria-label":"main folders",children:[Object(I.jsxs)(Ve.a,{button:!0,component:Me.b,to:"/dashboard",classes:{selected:c.selected},selected:0===d,onClick:function(e){return h(0,0)},children:[Object(I.jsx)(Je.a,{children:Object(I.jsx)(Qe.a,{})}),Object(I.jsx)(Ye.a,{primary:Object(I.jsx)(x.a,{className:c.items,color:"textSecondary",gutterBottom:!0,children:"Dashboard"})})]}),Object(I.jsx)("br",{}),Object(I.jsx)(x.a,{className:c.title,gutterBottom:!0,children:"TOOLS"}),Object(I.jsxs)(Ve.a,{button:!0,component:Me.b,to:"/dashboard/keys",classes:{selected:c.selected},selected:1===d,onClick:function(e){return h(0,1)},children:[Object(I.jsx)(Je.a,{children:Object(I.jsx)($e.a,{})}),Object(I.jsx)(Ye.a,{primary:Object(I.jsx)(x.a,{className:c.items,color:"textSecondary",gutterBottom:!0,children:"Keys"})})]})]})]})})},tt=function(e){var t=e.open,n=e.onLogOut,a=e.handleDrawerClose,r=e.handleDrawerOpen,o=M();return localStorage.getItem("token")?Object(I.jsxs)("div",{className:o.root,children:[Object(I.jsx)(Ge,{open:t,handleDrawerOpen:r,onLogOut:n}),Object(I.jsx)(et,{open:t,handleDrawerClose:a,onLogOut:n})]}):Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(h.a,{to:"/"})})},nt=function(e){Object(l.a)(e);var t=M(),n=r.a.useState(!0),a=Object(j.a)(n,2),o=a[0],c=a[1];return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(h.d,{children:[Object(I.jsx)(h.b,{exact:!0,path:"/",render:function(e){return Object(I.jsx)(A,Object(u.a)(Object(u.a)({},e),{},{onLoginRedirect:"/dashboard"}))}}),Object(I.jsxs)("div",{children:[Object(I.jsx)(tt,{open:o,handleDrawerOpen:function(){return c(!0)},handleDrawerClose:function(){return c(!1)},onLogOut:function(){localStorage.removeItem("token"),localStorage.removeItem("refreshToken")}}),Object(I.jsxs)("main",{className:Object(ze.a)(t.content,Object(d.a)({},t.contentShift,o)),children:[Object(I.jsx)(h.b,{path:"/dashboard",exact:!0,render:function(e){return Object(I.jsx)(Se,Object(u.a)({},e))}}),Object(I.jsx)(h.b,{path:"/dashboard/keys",render:function(e){return Object(I.jsx)(Fe,Object(u.a)({},e))}}),Object(I.jsx)(h.b,{path:"/dashboard/active-keys",render:function(e){return Object(I.jsx)(ke,Object(u.a)({},e))}})]})]})]})})},at=function(e){return Object(l.a)(e),Object(I.jsx)(Me.a,{children:Object(I.jsx)(nt,{})})},rt=n(116),ot=n.n(rt),ct=n(117),it=Object(ct.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:ot.a.A400},background:{default:"#f9f9f9"}}});c.a.render(Object(I.jsxs)(s.a,{theme:it,children:[Object(I.jsx)(i.a,{}),Object(I.jsx)(at,{})]}),document.querySelector("#root"))},79:function(e,t,n){}},[[169,1,2]]]);
//# sourceMappingURL=main.75db19eb.chunk.js.map