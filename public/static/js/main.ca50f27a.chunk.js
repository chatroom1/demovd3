(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(23)},16:function(e,t,a){},18:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),s=a.n(i),l=(a(16),a(1)),c=a(2),o=a(4),m=a(3),u=a(5),d=(a(18),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("p",{className:"lead"},"Project qu\u1ea3n l\xfd th\xe0nh vi\xean b\u1eb1ng React JS v\u1edbi d\u1eef li\u1ec7u Json"),r.a.createElement("hr",{className:"my-2"}),r.a.createElement("p",null,"V\u1edbi d\u1eef li\u1ec7u Json"),r.a.createElement("p",{className:"lead"},r.a.createElement("a",{className:"btn btn-primary btn-lg",href:"Jumbo action link",role:"button"},"Jumbo action name")))))}}]),t}(n.Component)),p=a(6),h=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).isChangeEdit=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(p.a)({},t,n))},a.eventButton=function(){a.props.ChangeEditUserStatus();var e={};e.id=a.state.id,e.name=a.state.name,e.tel=a.state.tel,e.permission=a.state.permission,a.props.DataUserEdit(e)},a.state={id:a.props.EditUserObject.id,name:a.props.EditUserObject.name,tel:a.props.EditUserObject.tel,permission:a.props.EditUserObject.permission},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"card text-left bg-primary mt-2"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"}," S\u1eeda th\xe0nh vi\xean "),r.a.createElement("form",{method:"post"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null," H\u1ecd t\xean "),r.a.createElement("input",{type:"text",name:"name",className:"form-control",placeholder:"H\u1ecd t\xean","aria-describedby":"helpId",defaultValue:this.props.EditUserObject.name,onChange:function(t){return e.isChangeEdit(t)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null," S\u0110T "),r.a.createElement("input",{type:"text",name:"tel",defaultValue:this.props.EditUserObject.tel,onChange:function(t){return e.isChangeEdit(t)},className:"form-control",placeholder:"S\u0110T","aria-describedby":"helpId"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Quy\u1ec1n"),r.a.createElement("select",{required:!0,defaultValue:this.props.EditUserObject.permission,onChange:function(t){return e.isChangeEdit(t)},className:"custom-select",name:"permission"},r.a.createElement("option",{value:!0},"Ch\u1ecdn quy\u1ec1n m\u1eb7c \u0111\u1ecbnh"),r.a.createElement("option",{value:1},"Admin"),r.a.createElement("option",{value:2},"Modrator"),r.a.createElement("option",{value:3},"Normal"))),r.a.createElement("button",{type:"reset",className:"btn btn-warning btn-lg btn-block",onClick:function(){return e.eventButton()}},"S\u1eeda")))))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).isSearchChange=function(e){a.setState({tempvalue:e.target.value}),console.log(a.state.tempvalue),a.props.getSearch(a.state.tempvalue)},a.HienThiNut=function(){return a.props.trangthai?r.a.createElement("button",{type:"button",className:"btn btn-primary btn-block",onClick:function(){return a.props.ketnoi()}},"\u0110\xf3ng l\u1ea1i"):r.a.createElement("button",{type:"button",className:"btn btn-primary btn-block",onClick:function(){return a.props.ketnoi()}},"Th\xeam m\u1edbi")},a.getDataUserEdit=function(e){a.setState({userEditObj:e}),a.props.EditUserDataObj(e)},a.XuLyEditStatus=function(){if(!0===a.props.getEditStatus)return console.log("Da zo xu ly status"),r.a.createElement(h,{ChangeEditUserStatus:function(){return a.props.getChangeEditUserStatus()},EditUserObject:a.props.getEditUserObject,DataUserEdit:function(e){return a.getDataUserEdit(e)}})},a.state={tempvalue:"",userEditObj:{}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.XuLyEditStatus(),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"btn-group"},r.a.createElement("input",{type:"text",className:"form-control",onChange:function(t){return e.isSearchChange(t)},placeholder:"Nh\u1eadp t\xecm ki\u1ebfm","aria-describedby":"helpId",style:{width:"600px"}}),r.a.createElement("div",{className:"btn btn-info",onClick:function(t){return e.props.getSearch(e.state.tempvalue)}},"T\xecm ki\u1ebfm"))),r.a.createElement("div",{className:"form-group"},this.HienThiNut()))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).PermissionShow=function(){return 1===a.props.Permissions?"Admin":2===a.props.Permissions?"Modrator":3===a.props.Permissions?"Normal":void 0},a.getUser=function(){a.props.getEdit()},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("tr",null,r.a.createElement("td",{scope:"row"},this.props.id),r.a.createElement("td",null,this.props.name),r.a.createElement("td",null,this.props.tel),r.a.createElement("td",null,this.PermissionShow()),r.a.createElement("td",null,r.a.createElement("div",{className:"btn btn-warning sua",onClick:function(){return e.getUser()}},r.a.createElement("i",{className:"fa fa-edit"},"S\u1eeda")),r.a.createElement("div",{className:"btn btn-danger xoa",onClick:function(t){return e.props.DeleteButtonUser(e.props.id)}},r.a.createElement("i",{className:"fa fa-edit"},"Xo\xe1"))))}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).Laydulieu=function(){return a.props.data.map(function(e,t){return r.a.createElement(b,{key:t,id:e.id,name:e.name,tel:e.tel,Permissions:e.permission,getEdit:function(t){return a.props.getEditUser(e)},DeleteButtonUser:function(e){return a.props.getIdDelete(e)}})})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("table",{className:"table table-striped table-inverse table-hover"},r.a.createElement("thead",{className:"thead-inverse"},r.a.createElement("tr",null,r.a.createElement("th",null," STT "),r.a.createElement("th",null," H\u1ecd t\xean "),r.a.createElement("th",null," \u0110i\u1ec7n tho\u1ea1i "),r.a.createElement("th",null," Quy\u1ec1n "),r.a.createElement("th",null," T\xe1c v\u1ee5 "))),r.a.createElement("tbody",null,this.Laydulieu())))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).isChangeForm=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(p.a)({},t,n));var r={};r.id=a.state.id,r.name=a.state.name,r.tel=a.state.tel,r.permission=a.state.permission},a.HienThiForm=function(){if(!0===a.props.hienThiForm)return r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card text-left mt-2"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"}," Th\xeam th\xe0nh vi\xean "),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null," H\u1ecd t\xean "),r.a.createElement("input",{type:"text",name:"name",className:"form-control",placeholder:"H\u1ecd t\xean","aria-describedby":"helpId",onChange:function(e){return a.isChangeForm(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null," S\u0110T "),r.a.createElement("input",{type:"text",name:"tel",className:"form-control",placeholder:"S\u0110T","aria-describedby":"helpId",onChange:function(e){return a.isChangeForm(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"my-input"},"Quy\u1ec1n"),r.a.createElement("select",{id:"my-input",className:"form-control",name:"permission",onChange:function(e){return a.isChangeForm(e)}},r.a.createElement("option",{value:!0},"Ch\u1ecdn quy\u1ec1n m\u1eb7c \u0111\u1ecbnh"),r.a.createElement("option",{value:1},"Admin"),r.a.createElement("option",{value:2},"Modrator"),r.a.createElement("option",{value:3},"Normal"))),r.a.createElement("button",{type:"reset",className:"btn btn-primary btn-lg btn-block",onClick:function(e,t,n){return a.props.AddUserData(a.state.name,a.state.tel,a.state.permission)}},"Th\xeam m\u1edbi")))))},a.state={id:"",name:"",tel:"",permission:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log(this.props.hienThiForm),r.a.createElement("div",null,this.HienThiForm())}}]),t}(n.Component),g=a(9),N=a(20),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).DoiTrangThai=function(){a.setState({hienThiForm:!a.state.hienThiForm})},a.getTextSearch=function(e){a.setState({dataSearch:e})},a.addUserData=function(e,t,n){var r={};r.id=N(),r.name=e,r.tel=t,r.permission=parseInt(n),console.log("Day la item"),console.log(r);var i=a.state.data;a.setState({data:i})},a.editUserData=function(e){a.setState({EditUserStatus:!0,EditUserObject:e})},a.ChangeEditUserStatus=function(){a.setState({EditUserStatus:!1})},a.getEditUserData=function(e){a.state.data.forEach(function(t,a){e.id===t.id&&(t.name=e.name,t.tel=e.tel,t.permission=parseInt(e.permission))})},a.DeleteUser=function(e){var t=a.state.data;t=t.filter(function(t){return t.id!=e}),a.setState({data:t})},a.state={hienThiForm:!1,data:g,dataSearch:"",EditUserStatus:!1,EditUserObject:{}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=[];return this.state.data.forEach(function(a){-1!==a.name.indexOf(e.state.dataSearch)&&t.push(a)}),r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement("div",{className:"searchform"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(E,{ketnoi:function(){return e.DoiTrangThai()},trangthai:this.state.hienThiForm,getSearch:function(t){return e.getTextSearch(t)},getEditStatus:this.state.EditUserStatus,getChangeEditUserStatus:function(){return e.ChangeEditUserStatus()},getEditUserObject:this.state.EditUserObject,EditUserDataObj:function(t){return e.getEditUserData(t)}})),r.a.createElement("div",{className:"col-12"},r.a.createElement("hr",null)),r.a.createElement("div",{className:"col"},r.a.createElement(f,{data:t,getEditUser:function(t){return e.editUserData(t)},getIdDelete:function(t){return e.DeleteUser(t)}})),r.a.createElement(v,{hienThiForm:this.state.hienThiForm,AddUserData:function(t,a,n){return e.addUserData(t,a,n)}})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e){e.exports=[{id:1,name:"Nguyen Nhan",tel:"03954716235",permission:1},{id:2,name:"Iron Man",tel:"03954716235",permission:2},{id:3,name:"Join Center",tel:"044854716235",permission:3},{id:4,name:"Nuth third",tel:"03954716235",permission:1},{id:5,name:"Nguyen Nhan",tel:"03954716235",permission:1}]}},[[10,2,1]]]);
//# sourceMappingURL=main.ca50f27a.chunk.js.map