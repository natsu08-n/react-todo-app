(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{14:function(t,e,i){},15:function(t,e,i){},17:function(t,e,i){"use strict";i.r(e);var n=i(1),o=i.n(n),c=i(8),s=i.n(c),r=(i(14),i(2)),a=i(3),d=i(5),l=i(4),u=i(7),j=i(9),p=(i(15),i(0)),b=function(t){Object(d.a)(i,t);var e=Object(l.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(a.a)(i,[{key:"render",value:function(){var t=this.props,e=t.title,i=t.description,n=Object(j.a)(t,["title","description"]);return Object(p.jsxs)("div",Object(u.a)(Object(u.a)({className:"ToDoListItem"},n),{},{children:[Object(p.jsx)("div",{className:"ToDoListItem-title",children:e}),Object(p.jsx)("div",{className:"ToDoListItem-description",children:i})]}))}}]),i}(n.Component),O=function(t){Object(d.a)(i,t);var e=Object(l.a)(i);function i(){var t;Object(r.a)(this,i);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={todoList:JSON.parse(localStorage.getItem("todoList"))||[]},t.addTodo=function(e,i){t.setState({todoList:t.state.todoList.concat(e)},(function(){localStorage.setItem("todoList",JSON.stringify(t.state.todoList)),i&&i()}))},t.removeTodo=function(e,i){t.setState({todoList:t.state.todoList.filter((function(t){return t!==e}))},(function(){localStorage.setItem("todoList",JSON.stringify(t.state.todoList)),i&&i()}))},t}return Object(a.a)(i,[{key:"render",value:function(){var t=this;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h2",{children:"ToDo\u30ea\u30b9\u30c8"}),Object(p.jsxs)("form",{className:"App-form",onSubmit:function(e){e.preventDefault();var i=e.target.elements.title,n=e.target.elements.description;t.addTodo({title:i.value,description:n.value},(function(){i.value="",n.value=""}))},children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{id:"title",placeholder:"title"}),Object(p.jsx)("textarea",{id:"description",placeholder:"description"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{type:"submit",children:"\u767b\u9332"}),Object(p.jsx)("p",{children:"\u524a\u9664\u3059\u308b\u306b\u306f\u4f5c\u6210\u3057\u305fToDo\u30ea\u30b9\u30c8\u3092\u62bc\u4e0b"})]})]}),Object(p.jsx)("div",{children:this.state.todoList.map((function(e){return Object(p.jsx)(b,{title:e.title,description:e.description,onClick:function(){return t.removeTodo(e)}},e.title)}))})]})}}]),i}(n.Component),f=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,18)).then((function(e){var i=e.getCLS,n=e.getFID,o=e.getFCP,c=e.getLCP,s=e.getTTFB;i(t),n(t),o(t),c(t),s(t)}))};s.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.e5c72834.chunk.js.map