(window["webpackJsonppencils-details-widget"]=window["webpackJsonppencils-details-widget"]||[]).push([[0],{62:function(e){e.exports=JSON.parse('{"common":{"couldNotFetchData":"Unfortunately we could not fetch entity data","widgetName":"Details about \'{{widgetNamePlaceholder}}\'","name":"Name","value":"Value","loading":"Loading...","notAuthenticated":"User is not authenticated."},"entities":{"pencils":{"id":"ID","brand":"entities.pencils.brand","model":"entities.pencils.model","size":"entities.pencils.size"}}}')},63:function(e){e.exports=JSON.parse('{"common":{"couldNotFetchData":"Non \xe8 stato possibile caricare i dati dell\'entit\xe0","widgetName":"Dettagli a proposito di \'{{widgetNamePlaceholder}}\'","name":"Nome","value":"Valore","loading":"Caricamento in corso...","notAuthenticated":"L\'utente non \xe8 autenticato."},"entities":{"pencils":{"id":"ID","brand":"entit\xe0.pencils.brand","model":"entit\xe0.pencils.model","size":"entit\xe0.pencils.size"}}}')},72:function(e,t,n){e.exports=n(92)},73:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);n(73);var a=n(27),r=n(28),i=n(35),c=n(20),o=n(29),l=n(65),s=n(24),u=n(0),p=n.n(u),d=n(12),f=n.n(d),m=p.a.createContext(null),b=n(16),h=n.n(b),O=n(31),y=n(37),v=n(23),k=n(124),w=n(64),E=n(3),j=n.n(E),g=(j.a.shape({initialized:j.a.bool,authenticated:j.a.bool}),n(66));j.a.oneOfType([j.a.func,j.a.shape({current:j.a.elementType}),j.a.shape(null)]);var P=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?t:null},D=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?null:t},N=n(126),C=(j.a.shape({id:j.a.number,brand:j.a.string,model:j.a.string,size:j.a.number}),n(118)),S=n(122),z=n(121),x=n(119),R=n(120),A=function(e){var t=e.t,n=e.pencils;return p.a.createElement(C.a,null,p.a.createElement(x.a,null,p.a.createElement(R.a,null,p.a.createElement(z.a,null,t("common.name")),p.a.createElement(z.a,null,t("common.value")))),p.a.createElement(S.a,null,p.a.createElement(R.a,null,p.a.createElement(z.a,null,p.a.createElement("span",null,t("entities.pencils.id"))),p.a.createElement(z.a,null,p.a.createElement("span",null,n.id))),p.a.createElement(R.a,null,p.a.createElement(z.a,null,p.a.createElement("span",null,t("entities.pencils.brand"))),p.a.createElement(z.a,null,p.a.createElement("span",null,n.brand))),p.a.createElement(R.a,null,p.a.createElement(z.a,null,p.a.createElement("span",null,t("entities.pencils.model"))),p.a.createElement(z.a,null,p.a.createElement("span",null,n.model))),p.a.createElement(R.a,null,p.a.createElement(z.a,null,p.a.createElement("span",null,t("entities.pencils.size"))),p.a.createElement(z.a,null,p.a.createElement("span",null,n.size)))))};A.defaultProps={pencils:[]};var F=Object(v.b)()(A),T=function(e){var t=e.t,n=e.pencils;return p.a.createElement(N.a,null,p.a.createElement("h3",null,t("common.widgetName",{widgetNamePlaceholder:"Pencils"})),p.a.createElement(F,{pencils:n}))};T.defaultProps={pencils:{}};var U=Object(v.b)()(T),L=n(4),M=n(127),I=n(129),J=n(123),K=n(5),H=n(128),V=n(59),W=n.n(V),B=n(60),G=n.n(B),q=n(58),Q=n.n(q),X=n(61),Y=n.n(X),Z={success:Q.a,error:W.a,info:G.a},$={success:3e3,error:null,info:5e3},_=function e(t){var n=t.className,a=t.classes,r=t.status,i=t.message,c=t.onClose,o=!!i,l=r||e.INFO,s=Z[l],u=$[l],d=p.a.createElement("span",{className:a.message},p.a.createElement(s,{className:Object(L.a)(a.icon,a.iconStatus)}),i);return p.a.createElement(M.a,{open:o,onClose:c,autoHideDuration:u},p.a.createElement(I.a,{className:Object(L.a)(a[l],n),message:d,action:[p.a.createElement(H.a,{key:"close","aria-label":"close",color:"inherit",onClick:c},p.a.createElement(Y.a,{className:a.icon}))]}))};_.SUCCESS="success",_.ERROR="error",_.defaultProps={message:null,className:"",status:_.INFO="info",onClose:function(){}};var ee=Object(K.a)((function(e){return{message:{display:"flex",alignItems:"center"},icon:{fontSize:20},iconStatus:{opacity:.9,marginRight:e.spacing(1)},success:{backgroundColor:J.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main}}}),{withTheme:!0})(_),te=function(){var e=Object(O.a)(h.a.mark((function e(t,n){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:if(204!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",{});case 5:return e.abrupt("return",a.status>=200&&a.status<300?a.json():Promise.reject(new Error(a.statusText||a.status)));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var re=function(){var e=Object(O.a)(h.a.mark((function e(t,n){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("api/pencils","/").concat(n),r=ae({},{headers:new Headers({Authorization:"Bearer ".concat(window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:""),"Content-Type":"application/json"})},{method:"GET"}),e.abrupt("return",te(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ie=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={loading:!0,pencils:{},notificationStatus:null,notificationMessage:null},n.theme=Object(w.a)(),n.closeNotification=n.closeNotification.bind(Object(y.a)(n)),n.fetchData=n.fetchData.bind(Object(y.a)(n)),n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.keycloak;e.initialized&&e.authenticated&&this.fetchData()}},{key:"componentDidUpdate",value:function(e){var t=this.props.keycloak,n=t.initialized&&t.authenticated,a=e.keycloak.authenticated!==n;n&&a&&this.fetchData()}},{key:"fetchData",value:function(){var e=Object(O.a)(h.a.mark((function e(){var t,n,a,r,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.keycloak,a=t.id,r=t.serviceUrl,!(n.initialized&&n.authenticated)||!a){e.next=13;break}return e.prev=3,e.next=6,re(r,a);case 6:i=e.sent,this.setState((function(){return{pencils:i,loading:!1}})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.t;(0,t.onError)(e),this.setState((function(){return{notificationMessage:n("common.couldNotFetchData"),notificationStatus:ee.ERROR,loading:!1}}))}},{key:"closeNotification",value:function(){this.setState({notificationMessage:null})}},{key:"render",value:function(){var e=this.state,t=e.pencils,n=e.notificationStatus,a=e.notificationMessage,r=e.loading,i=this.props,c=i.t,o=i.keycloak;return p.a.createElement(k.a,{theme:this.theme},p.a.createElement(D,{keycloak:o},c("common.notAuthenticated")),p.a.createElement(P,{keycloak:o},r&&c("common.loading"),!r&&p.a.createElement(U,{pencils:t})),p.a.createElement(ee,{status:n,message:a,onClose:this.closeNotification}))}}]),t}(p.a.Component);ie.defaultProps={onError:function(){},serviceUrl:""};var ce=function(e){var t=function(t){function n(){var t,r;Object(a.a)(this,n);for(var o=arguments.length,l=new Array(o),s=0;s<o;s++)l[s]=arguments[s];return(r=Object(i.a)(this,(t=Object(c.a)(n)).call.apply(t,[this].concat(l)))).renderWrappedComponent=function(t){var n=r.props,a=n.forwardedRef,i=Object(g.a)(n,["forwardedRef"]);return p.a.createElement(e,Object.assign({},i,{ref:a,keycloak:t}))},r}return Object(o.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return p.a.createElement(m.Consumer,null,this.renderWrappedComponent)}}]),n}(u.Component);return t.defaultProps={forwardedRef:function(){}},Object(u.forwardRef)((function(e,n){return p.a.createElement(t,Object.assign({},e,{forwardedRef:n}))}))}(Object(v.b)()(ie)),oe=n(49),le={en:n(62),it:n(63)};function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var ue=Object.keys(le).reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(s.a)({},t,Object(s.a)({},"translation",le[t])))}),{}),pe=(oe.a.t,function(e){!function(e,t){oe.a.use(v.a).init({defaultNs:"translation",interpolation:{escapeValue:!1},resources:ue,lng:e||t,fallbackLng:t,react:{useSuspense:!1}})}(e,"en")});function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var me=function(){return window&&window.entando&&window.entando.keycloak&&fe({},window.entando.keycloak,{initialized:!0})||{initialized:!1}},be="service-url",he="locale",Oe=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).mountPoint=null,n.unsubscribeFromKeycloakEvent=null,n.keycloak=me(),n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"connectedCallback",value:function(){var e,t,n=this;this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint),this.keycloak=fe({},me(),{initialized:!0}),this.unsubscribeFromKeycloakEvent=(e="keycloak",t=function(){n.keycloak=fe({},me(),{initialized:!0}),n.render()},window.addEventListener(e,t),function(){window.removeEventListener(e,t)}),this.render()}},{key:"render",value:function(){var e=this,t=this.getAttribute(be)||"",n=this.getAttribute(he);pe(n);var a=this.getAttribute("id"),r=p.a.createElement(ce,{id:a,onError:function(t){var n=new CustomEvent("".concat("pencils.details.","error"),{details:{error:t}});e.dispatchEvent(n)},serviceUrl:t});f.a.render(p.a.createElement(m.Provider,{value:this.keycloak},r),this.mountPoint)}},{key:"disconnectedCallback",value:function(){this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent()}}]),t}(Object(l.a)(HTMLElement));customElements.define("pencils-details",Oe)}},[[72,1,2]]]);
//# sourceMappingURL=main.ce9f48d1.chunk.js.map