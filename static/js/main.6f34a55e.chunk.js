(this["webpackJsonpshopping-app"]=this["webpackJsonpshopping-app"]||[]).push([[0],{29:function(e,t,s){},40:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),r=s(21),n=s.n(r),i=(s(29),s(9)),l=s(6),o=s(7),j=s(15),b=s(0);function m(e){var t=e.setShoppingList,s=(e.shoppingList,Object(j.a)()),c=s.register,a=s.formState.errors,r=s.handleSubmit;return Object(b.jsxs)("form",{onSubmit:r((function(e){e.id=Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10),t((function(t){return[].concat(Object(o.a)(t),[e])}))})),className:"form",children:[Object(b.jsxs)("div",{className:"form__control",children:[Object(b.jsx)("label",{htmlFor:"item",children:"Przedmiot"}),Object(b.jsx)("input",Object(l.a)({type:"text",id:"item"},c("item",{required:!0}))),a.item&&Object(b.jsx)("div",{className:"form__error",children:"Musisz wybra\u0107 przedmiot"})]}),Object(b.jsxs)("div",{className:"form__control",children:[Object(b.jsx)("label",{htmlFor:"type",children:"Dzia\u0142"}),Object(b.jsxs)("div",{className:"form__control--radio",children:[["fruits","vegitables","drinks","frozen","detergents"].map((function(e){return Object(b.jsxs)("div",{className:"form__radio",children:[Object(b.jsx)("input",Object(l.a)({type:"radio",id:e,value:e},c("type",{required:!0})),e),Object(b.jsx)("label",{htmlFor:e,className:"form__option form__option--".concat(e),children:e})]},e)})),a.type&&Object(b.jsx)("div",{className:"form__error",children:"Musisz wybra\u0107 kategori\u0119"})]})]}),Object(b.jsx)("input",{className:" btn form__submit",type:"submit",value:"Dodaj produkt"})]})}var d=s(24);function O(e){var t=e.name,s=e.data,c=e.removeElement;return Object(b.jsxs)("div",{id:"list",className:"list ".concat(t&&"list--"+t),children:[Object(b.jsx)("h2",{className:"list__header",children:t}),Object(b.jsx)("ol",{className:"list__list",children:s.map((function(e){return Object(b.jsxs)("li",{className:"list__element",children:[e.item,Object(b.jsx)("span",{className:"list__remove",children:Object(b.jsx)(d.a,{"data-testid":"remove-button",onClick:function(){c(e.id)}})})]},e.id)}))})]})}var u=s(5);function p(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),s=t[0],a=t[1];return Object(b.jsxs)("nav",{className:"nav ".concat(s&&"nav--open"),children:[Object(b.jsx)("button",{className:"hamburger",onClick:function(){a(!s)},children:Object(b.jsx)("div",{className:"hamburger-line"})}),Object(b.jsxs)("ul",{className:"nav__list",children:[Object(b.jsx)("li",{className:"nav__element",children:Object(b.jsx)(u.b,{to:"/",children:"Strona g\u0142\xf3wna"})}),Object(b.jsx)("li",{className:"nav__element",children:Object(b.jsx)(u.b,{to:"/",children:"Lista zakup\xf3w"})}),Object(b.jsx)("li",{className:"nav__element",children:Object(b.jsx)(u.b,{class:"nav__element--important",to:"/add",children:"Stw\xf3rz list\u0119"})}),Object(b.jsx)("li",{className:"nav__element",children:Object(b.jsx)(u.b,{to:"/login",children:"Zaloguj si\u0119"})}),Object(b.jsx)("li",{className:"nav__element",children:Object(b.jsx)(u.b,{to:"/register",children:"Zarejestruj si\u0119"})})]})]})}function h(){return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("p",{children:"Logo"}),Object(b.jsx)(p,{})]})}function _(e){var t=e.children;return Object(b.jsxs)("div",{className:"layout",children:[Object(b.jsx)(h,{}),t]})}function x(e){var t=e.children,s=e.clickHandler,c=e.type,a=e.color;return Object(b.jsx)("button",{className:"btn ".concat(c&&"btn--"+c," ").concat(a&&"btn--"+a),onClick:s,children:t})}var f=Object(c.createContext)(),N=function(e){var t=e.children,s=Object(c.useState)([]),a=Object(i.a)(s,2),r=a[0],n=a[1];return Object(b.jsx)(f.Provider,{value:{listToDisplay:r,setListToDisplay:n},children:t})};function g(e){var t=e.setShoppingList,s=e.shoppingList,a=Object(c.useContext)(f).setListToDisplay;return Object(b.jsxs)("div",{className:"submitList__container",children:[Object(b.jsx)(x,{type:"secondary",color:"red",clickHandler:function(){t([])},children:"Usu\u0144 list\u0119"}),Object(b.jsx)(u.b,{className:"btn btn--secondary btn--green",onClick:function(){var e;e=s,localStorage.setItem("list",JSON.stringify(e)),a(e)},to:"/",children:"Zapisz list\u0119"})]})}function v(e){var t={};return e.forEach((function(e){e.type in t||(t[e.type]=[]),e.type in t&&t[e.type].push(e)})),t}var y=function(e){return Object.keys(e).length>0?e:JSON.parse(localStorage.getItem("list"))};function w(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),s=t[0],a=t[1],r=Object(c.useContext)(f).listToDisplay;function n(e){var t=s.filter((function(t){return t.id!==e}));localStorage.setItem("list",JSON.stringify(t)),a(t)}Object(c.useEffect)((function(){a(y(r)||[])}),[]),0!==s.length&&localStorage.setItem("list",JSON.stringify(s));var l=v(s);return Object(b.jsx)(_,{children:Object(b.jsxs)("section",{className:"addContainer",children:[Object(b.jsx)("h2",{className:"add__title",children:"Stw\xf3rz list\u0119 zakup\xf3w"}),Object(b.jsx)(m,{setShoppingList:a,shoppingList:s}),Object(b.jsx)("div",{className:"shoppingList",children:l&&Object.keys(l).map((function(e){return Object(b.jsx)(O,{name:e,data:l[e],removeElement:n},e)}))}),Object(b.jsx)(g,{setShoppingList:a,shoppingList:s})]})})}function k(e){var t=e.data;return Object(c.useEffect)((function(){}),[t]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{className:"paper__header",children:t[0].type}),Object(b.jsx)("ol",{className:"paper__list",children:t.map((function(e){return Object(b.jsx)("li",{className:"paper__item ".concat(e.className),onClick:function(e){e.target.classList.toggle("paper__item--taken")},children:e.item},e.id)}))})]})}function S(){var e=Object(c.useContext)(f),t=e.listToDisplay,s=e.setListToDisplay,a=v(y(t)||[]);return console.log(a),Object(b.jsxs)("div",{className:"cardContainer",children:[Object.keys(a).length>0?Object(b.jsx)("div",{className:"paper",children:Object(b.jsx)("div",{className:"paper__lines",children:Object(b.jsxs)("div",{className:"paper__text",children:[a&&Object.keys(a).map((function(e){return Object(b.jsx)(k,{data:a[e]},e)})),Object(b.jsx)("br",{})]})})}):Object(b.jsx)("p",{className:"paper__empty",children:"Nie masz jeszcze swojej listy zakup\xf3w."}),Object(b.jsxs)("div",{className:"card__links",children:[Object.keys(a).length>0&&Object(b.jsx)(u.b,{to:"/add",className:"btn",children:"Edytuj list\u0119"}),Object(b.jsx)(u.b,{to:"/add",className:"btn btn--secondary",onClick:function(){localStorage.clear(),s([])},children:"Nowa lista"})]})]})}function z(){return Object(b.jsx)(_,{children:Object(b.jsx)(S,{})})}function L(e){var t=e.img,s=e.children;return Object(b.jsxs)("main",{className:"login__container",children:[Object(b.jsx)("img",{src:t,alt:t}),Object(b.jsx)("section",{className:"login__section",children:s})]})}function C(){var e=Object(j.a)(),t=e.register,s=e.handleSubmit,c=e.formState.errors;return Object(b.jsxs)("form",{onSubmit:s((function(e){return console.log(e)})),className:"login__form",children:[Object(b.jsxs)("div",{className:"form__control",children:[Object(b.jsx)("label",{htmlFor:"username",className:"form__label",children:"Login"}),Object(b.jsx)("input",Object(l.a)(Object(l.a)({type:"text",id:"username"},t("nickname",{required:!0})),{},{className:"form__input"})),c.nickname&&Object(b.jsx)("span",{className:"form__error",children:"To pole jest wymagane"})]}),Object(b.jsxs)("div",{className:"form__control",children:[Object(b.jsx)("label",{htmlFor:"password",className:"form__label",children:"Has\u0142o"}),Object(b.jsx)("input",Object(l.a)(Object(l.a)({type:"password",id:"password"},t("password",{required:!0})),{},{className:"form__input"})),c.password&&Object(b.jsx)("span",{className:"form__error",children:"To pole jest wymagane"})]}),Object(b.jsx)("span",{className:"label__forgot"}),Object(b.jsx)("input",{type:"submit",className:"btn form__submit",value:"Zaloguj si\u0119"})]})}var F=s.p+"static/media/loginImage.70eae111.svg";function T(){return Object(b.jsx)(_,{children:Object(b.jsxs)(L,{img:F,children:[Object(b.jsx)("h1",{className:"login__header",children:"Witaj w Shopperze"}),Object(b.jsx)("span",{className:"login__subheader",children:"mi\u0142o Ci\u0119 zn\xf3w widzie\u0107"}),Object(b.jsx)(C,{}),Object(b.jsxs)("p",{className:"form__register",children:["Nie masz konta?",Object(b.jsx)(u.b,{to:"/register",className:"register__link",children:"Zarejestruj si\u0119"})]})]})})}function D(){var e=Object(j.a)(),t=e.register,s=e.handleSubmit,c=e.formState.errors;return Object(b.jsxs)("form",{onSubmit:s((function(e){return console.log(e)})),className:"login__form",children:[Object(b.jsxs)("div",{className:"form__control",children:[Object(b.jsx)("label",{htmlFor:"username",className:"form__label",children:"Nickname"}),Object(b.jsx)("input",Object(l.a)(Object(l.a)({type:"text",id:"username"},t("nickname",{required:!0})),{},{className:"form__input"})),c.nickname&&Object(b.jsx)("span",{className:"form__error",children:"To pole jest wymagane"})]}),Object(b.jsxs)("div",{className:"form__control",children:[Object(b.jsx)("label",{htmlFor:"email",className:"form__label",children:"E-mail"}),Object(b.jsx)("input",Object(l.a)(Object(l.a)({type:"email",id:"email"},t("email",{required:!0})),{},{className:"form__input"})),c.password&&Object(b.jsx)("span",{className:"form__error",children:"To pole jest wymagane"})]}),Object(b.jsxs)("div",{className:"form__control",children:[Object(b.jsx)("label",{htmlFor:"password",className:"form__label",children:"Has\u0142o"}),Object(b.jsx)("input",Object(l.a)(Object(l.a)({type:"password",id:"password"},t("password",{required:!0})),{},{className:"form__input"})),c.password&&Object(b.jsx)("span",{className:"form__error",children:"To pole jest wymagane"})]}),Object(b.jsxs)("div",{className:"form__control",children:[Object(b.jsx)("label",{htmlFor:"password2",className:"form__label",children:"Powt\xf3rz has\u0142o"}),Object(b.jsx)("input",Object(l.a)(Object(l.a)({type:"password2",id:"password2"},t("password2",{required:!0})),{},{className:"form__input"})),c.password&&Object(b.jsx)("span",{className:"form__error",children:"To pole jest wymagane"})]}),Object(b.jsx)("span",{className:"label__forgot"}),Object(b.jsx)("input",{type:"submit",className:"btn form__submit",value:"Zarejstuj si\u0119"})]})}var q=s.p+"static/media/registerImage.f3f6193f.svg";function E(){return Object(b.jsx)(_,{children:Object(b.jsxs)(L,{img:q,children:[Object(b.jsx)("h1",{className:"login__header",children:"Witaj w Shopperze"}),Object(b.jsx)("span",{className:"login__subheader",children:"stw\xf3rz konto"}),Object(b.jsx)(D,{}),Object(b.jsxs)("p",{className:"form__register",children:["Masz ju\u017c konto?",Object(b.jsx)(u.b,{to:"/login",className:"register__link",children:"Zaloguj si\u0119"})]})]})})}var I=s(3);var Z=function(){return Object(b.jsx)(u.a,{children:Object(b.jsx)(N,{children:Object(b.jsxs)(I.c,{children:[Object(b.jsx)(I.a,{path:"/register",children:Object(b.jsx)(E,{})}),Object(b.jsx)(I.a,{path:"/login",children:Object(b.jsx)(T,{})}),Object(b.jsx)(I.a,{path:"/add",children:Object(b.jsx)(w,{})}),Object(b.jsx)(I.a,{path:"/",children:Object(b.jsx)(z,{})})]})})})},J=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,41)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),r(e),n(e)}))};n.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(Z,{})}),document.getElementById("root")),J()}},[[40,1,2]]]);
//# sourceMappingURL=main.6f34a55e.chunk.js.map