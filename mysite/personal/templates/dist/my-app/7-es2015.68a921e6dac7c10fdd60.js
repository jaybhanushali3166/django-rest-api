(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{o1NI:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J"),u=e("XpXM"),o=e("pMnS"),a=e("fL5g");class i{constructor(l,n,e,t){this.authService=l,this._shared=e,this._api=t,this.router=n}signInWithGoogle(){this.authService.signIn(a.c.PROVIDER_ID).then(l=>{localStorage.setItem("access_token",this.user.authToken),this._api.getAuthorizedId().subscribe(l=>{let n=l.email;localStorage.setItem("token",l.token),localStorage.setItem("email",n),this._shared.setEmployee(n),this.router.navigate(["/main"])})}).catch(l=>console.error(l))}ngOnInit(){this.authService.authState.subscribe(l=>{this.user=l,this.loggedIn=null!=l}),particlesJS.load("particles-js","assets/particles.json",function(){})}}var d=e("iInd"),c=e("msgi"),r=e("H+bZ"),s=t["\u0275crt"]({encapsulation:0,styles:[["#particles-js[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;width:100%;height:100%;background-image:url(back.eecacac917640b7f0dee.png);background-repeat:no-repeat;background-size:cover;background-position:50% 50%}.qcloud[_ngcontent-%COMP%]{z-index:50;position:absolute;padding:1%;size:1%}.dev[_ngcontent-%COMP%]{z-index:50;position:absolute;bottom:0;right:0;padding:1%;size:1%}.test[_ngcontent-%COMP%]{z-index:50;position:absolute;display:-webkit-box;display:flex;align-self:center}.test[_ngcontent-%COMP%]   .google-button[_ngcontent-%COMP%]{height:40px;background:#fff;color:#737373;border:1px solid #213f81;border-radius:5px;white-space:nowrap;box-shadow:1px 4px 5px 1px rgba(0,0,0,.1);z-index:2}.test[_ngcontent-%COMP%]   .google-button[_ngcontent-%COMP%]:focus, .test[_ngcontent-%COMP%]   .google-button[_ngcontent-%COMP%]:hover{box-shadow:4px 7px 8px 4px rgba(0,0,0,.1)}.test[_ngcontent-%COMP%]   .google-button[_ngcontent-%COMP%]:active{background-color:#e5e5e5;box-shadow:none;-webkit-transition-duration:10ms;transition-duration:10ms}.google-button__icon[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;margin:8px 0 8px 8px;width:18px;height:18px;box-sizing:border-box}.google-button__text[_ngcontent-%COMP%]{display:inline-block;padding:10px 24px;font-size:14px;font-weight:700;font-family:Roboto,arial,sans-serif}@media screen and (max-width:399px){#particles-js[_ngcontent-%COMP%]{width:100vh;height:100vh}}@media screen and (max-width:499px){#particles-js[_ngcontent-%COMP%]{width:100vh;height:100vh}}@media screen and (max-width:599px){#particles-js[_ngcontent-%COMP%]{width:100vh;height:100vh}}@media screen and (min-width:699px){#particles-js[_ngcontent-%COMP%]{width:100vw;height:100vh}}"]],data:{}});function p(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,0,"img",[["alt",""],["class","qcloud"],["src","../../../assets/img/welcomeeasy.png"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,10,"div",[["id","particles-js"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,9,"div",[["class","test"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,8,"button",[["class","google-button"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.signInWithGoogle()&&t),t},null,null)),(l()(),t["\u0275eld"](4,0,null,null,5,"span",[["class","google-button__icon"]],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,4,":svg:svg",[["viewBox","0 0 366 372"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,0,":svg:path",[["d","M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z"],["fill","#EA4335"],["id","Shape"]],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,0,":svg:path",[["d","M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z"],["fill","#FBBC05"],["id","Shape"]],null,null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,0,":svg:path",[["d","M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z"],["fill","#4285F4"],["id","Shape"]],null,null,null,null,null)),(l()(),t["\u0275eld"](9,0,null,null,0,":svg:path",[["d","M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z"],["fill","#34A853"]],null,null,null,null,null)),(l()(),t["\u0275eld"](10,0,null,null,1,"span",[["class","google-button__text responsive"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Sign in with Google"]))],null,null)}function m(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-sign-in",[],null,null,null,p,s)),t["\u0275did"](1,114688,null,0,i,[a.a,d.k,c.a,r.a],null,null)],function(l,n){l(n,1,0)},null)}var g=t["\u0275ccf"]("app-sign-in",i,m,{},{},[]),b=e("QHOK"),h=e("bujt"),f=e("Fwaw"),v=e("5GAg"),k=e("omvX"),x=e("SVse"),w=e("lzlj"),C=e("igqZ"),_=e("cyBs"),O=e("Mz6y"),M=e("QQfA"),y=e("hOhj"),R=e("/HVE"),P=e("IP0z"),I=e("cUpR"),z=e("Mr+X"),S=e("Gi4r");class E{constructor(l,n){this.authService=l,this._router=n,this.cards=[{title:"IT Services",description:"Some quick example text to build on the card title and make up the bulk of the card content",buttonText:"Button",img:"../../../assets/img/it.png",link:"/main/portal"},{title:"Q Cloud",description:"Some quick example text to build on the card title and make up the bulk of the card content",buttonText:"Button",img:"../../../assets/img/qcloudassist.png",link:"/user/dashboard"},{title:"Infosec Quiz",description:"Some quick example text to build on the card title and make up the bulk of the card content",buttonText:"Button",img:"../../../assets/img/infosec.png",link:"/main/portal"}],this.slides=[[]],this.authService.authState.subscribe(l=>{this.user=l,this.loggedIn=null!=l})}signOut(){localStorage.clear(),this.authService.signOut()}chunk(l,n){let e=[];for(let t=0,u=l.length;t<u;t+=n)e.push(l.slice(t,t+n));return e}ngOnInit(){this.slides=this.chunk(this.cards,3)}}var F=t["\u0275crt"]({encapsulation:0,styles:[[".card-deck[_ngcontent-%COMP%]{padding-top:10%;padding-left:10%;padding-right:10%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.pointer[_ngcontent-%COMP%]:hover{cursor:pointer}h3[_ngcontent-%COMP%]{text-align:center;font-weight:700}img[_ngcontent-%COMP%]{height:25px}.navbar-brand[_ngcontent-%COMP%]{vertical-align:middle}.avatar[_ngcontent-%COMP%]{border-radius:50%}.btn-logout[_ngcontent-%COMP%]{float:right;margin-right:10px}.feedback[_ngcontent-%COMP%]{float:right;margin-right:10px;color:#fff}.brand[_ngcontent-%COMP%]{height:35px}.w3-panel[_ngcontent-%COMP%]{margin-top:100px}.cb[_ngcontent-%COMP%]{height:100vh;background-color:#e4e1e1;background-repeat:no-repeat}.my-1[_ngcontent-%COMP%]{color:#fff}@media screen and (min-width:991px){.brand[_ngcontent-%COMP%]{height:35px}}@media screen and (max-width:990px){.brand[_ngcontent-%COMP%]{height:30px}}"]],data:{}});function j(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,10,"div",[["class","dropdown-menu dropdown-menu-right dropdown dropdown"],["role","menu"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"a",[["class","dropdown-item"],["mdbWavesEffect",""]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,2).click(e)&&u),u},null,null)),t["\u0275did"](2,16384,null,0,b.lb,[t.ElementRef],null,null),(l()(),t["\u0275ted"](3,null,["Account: ",""])),(l()(),t["\u0275eld"](4,0,null,null,2,"a",[["class","dropdown-item"],["mdbWavesEffect",""]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,5).click(e)&&u),u},null,null)),t["\u0275did"](5,16384,null,0,b.lb,[t.ElementRef],null,null),(l()(),t["\u0275ted"](6,null,["Email: ",""])),(l()(),t["\u0275eld"](7,0,null,null,3,"a",[["href","#"]],null,null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,2,"button",[["class","button btn-logout"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.signOut()&&t),t},h.b,h.a)),t["\u0275did"](9,180224,null,0,f.b,[t.ElementRef,v.h,[2,k.a]],null,null),(l()(),t["\u0275ted"](-1,0,["Sign out"]))],null,function(l,n){var e=n.component;l(n,3,0,e.user.name),l(n,6,0,e.user.email),l(n,8,0,t["\u0275nov"](n,9).disabled||null,"NoopAnimations"===t["\u0275nov"](n,9)._animationMode)})}function N(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,7,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,4,"a",[["dropdownToggle",""],["mdbWavesEffect",""],["type","button"]],[[1,"aria-haspopup",0],[1,"disabled",0],[1,"aria-expanded",0]],[[null,"click"],["document","click"],[null,"keyup.esc"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,2).click(e)&&u),"click"===n&&(u=!1!==t["\u0275nov"](l,3).onClick()&&u),"document:click"===n&&(u=!1!==t["\u0275nov"](l,3).onDocumentClick(e)&&u),"keyup.esc"===n&&(u=!1!==t["\u0275nov"](l,3).onEsc()&&u),u},null,null)),t["\u0275did"](2,16384,null,0,b.lb,[t.ElementRef],null,null),t["\u0275did"](3,147456,null,0,b.h,[b.g,t.ElementRef],null,null),(l()(),t["\u0275eld"](4,0,null,null,0,"img",[["class","avatar"]],[[8,"src",4]],null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,0,"span",[["class","caret"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,j)),t["\u0275did"](7,16384,null,0,b.f,[b.g,t.ViewContainerRef,t.TemplateRef],null,null)],null,function(l,n){var e=n.component;l(n,1,0,t["\u0275nov"](n,3).ariaHaspopup,t["\u0275nov"](n,3).isDisabled,t["\u0275nov"](n,3).isOpen),l(n,4,0,t["\u0275inlineInterpolate"](1,"",e.user.photoUrl,""))})}function L(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,15,"div",[["class","col-md-4"]],null,null,null,null,null)),t["\u0275prd"](512,null,x["\u0275NgClassImpl"],x["\u0275NgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](2,278528,null,0,x.NgClass,[x["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275pod"](3,{"d-none d-md-block":0}),(l()(),t["\u0275eld"](4,0,null,null,11,"a",[["class","waves-light"],["mdbWavesEffect",""]],[[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,5).click(e)&&u),u},null,null)),t["\u0275did"](5,16384,null,0,b.lb,[t.ElementRef],null,null),(l()(),t["\u0275eld"](6,0,null,null,9,"mat-card",[["class","my-1 morpheus-den-gradient view zoom hoverable pointer mat-card"]],null,null,null,w.b,w.a)),t["\u0275did"](7,49152,null,0,C.a,[],null,null),(l()(),t["\u0275eld"](8,0,null,0,1,"mdb-card-img",[["alt","Card image cap"]],null,null,null,_.z,_.l)),t["\u0275did"](9,49152,null,0,b.J,[],{src:[0,"src"],alt:[1,"alt"]},null),(l()(),t["\u0275eld"](10,0,null,0,5,"mdb-card-body",[],null,null,null,_.x,_.j)),t["\u0275did"](11,114688,null,0,b.F,[t.ElementRef,t.Renderer2],null,null),(l()(),t["\u0275eld"](12,0,null,0,3,"mdb-card-title",[],null,null,null,_.B,_.n)),t["\u0275did"](13,114688,null,0,b.L,[t.ElementRef,t.Renderer2],null,null),(l()(),t["\u0275eld"](14,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),t["\u0275ted"](15,null,["",""]))],function(l,n){var e=l(n,3,0,0!==n.context.index);l(n,2,0,"col-md-4",e),l(n,9,0,n.context.$implicit.img,"Card image cap"),l(n,11,0),l(n,13,0)},function(l,n){l(n,4,0,t["\u0275inlineInterpolate"](1,"",n.context.$implicit.link,"")),l(n,15,0,n.context.$implicit.title)})}function T(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"mdb-carousel-item",[],[[2,"active",null],[2,"animated",null],[2,"carousel-item-next",null],[2,"carousel-item-left",null],[2,"carousel-item-prev",null],[2,"carousel-item-right",null],[2,"carousel-item",null]],null,null,_.F,_.r)),t["\u0275did"](1,245760,[[2,4]],0,b.fb,[t.ElementRef],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,L)),t["\u0275did"](3,278528,null,0,x.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,1,0),l(n,3,0,n.context.$implicit)},function(l,n){l(n,0,0,t["\u0275nov"](n,1).active,t["\u0275nov"](n,1).animated,t["\u0275nov"](n,1).directionNext,t["\u0275nov"](n,1).directionLeft,t["\u0275nov"](n,1).directionPrev,t["\u0275nov"](n,1).directionRight,t["\u0275nov"](n,1).el)})}function D(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,19,"mdb-navbar",[["SideClass","navbar navbar-expand-lg darkenen-1"]],null,[["window","resize"],["document","scroll"]],function(l,n,e){var u=!0;return"window:resize"===n&&(u=!1!==t["\u0275nov"](l,1).onResize(e)&&u),"document:scroll"===n&&(u=!1!==t["\u0275nov"](l,1).onScroll()&&u),u},_.E,_.q)),t["\u0275did"](1,6406144,null,1,b.Y,[t.Renderer2,b.ab],{SideClass:[0,"SideClass"],containerInside:[1,"containerInside"]},null),t["\u0275qud"](603979776,1,{links:0}),(l()(),t["\u0275eld"](3,0,null,0,5,"mdb-navbar-brand",[],null,null,null,_.v,_.h)),t["\u0275did"](4,49152,null,0,b.x,[],null,null),(l()(),t["\u0275eld"](5,0,null,0,3,"a",[["class","navbar-brand"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,6).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t["\u0275did"](6,671744,null,0,d.l,[d.k,d.a,x.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](7,1),(l()(),t["\u0275eld"](8,0,null,null,0,"img",[["alt","Quantiphi"],["class","brand"],["src","../../../assets/img/easy.png"]],null,null,null,null,null)),(l()(),t["\u0275eld"](9,0,null,2,5,"li",[["class","nav-item navbar-nav ml-auto"]],null,null,null,null,null)),(l()(),t["\u0275eld"](10,16777216,null,null,4,"a",[["href","https://docs.google.com/forms/d/e/1FAIpQLSdg4mRoLcf0R_U9DQsiv0HCkd_NWugfigo2iPlYjjNn3cFUsg/viewform"],["matTooltip","Feedback Form"],["target","_blank"]],null,[[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(l,n,e){var u=!0;return"longpress"===n&&(u=!1!==t["\u0275nov"](l,11).show()&&u),"keydown"===n&&(u=!1!==t["\u0275nov"](l,11)._handleKeydown(e)&&u),"touchend"===n&&(u=!1!==t["\u0275nov"](l,11)._handleTouchend()&&u),u},null,null)),t["\u0275did"](11,212992,null,0,O.d,[M.c,t.ElementRef,y.c,t.ViewContainerRef,t.NgZone,R.a,v.c,v.h,O.b,[2,P.b],[2,O.a],[2,I.f]],{message:[0,"message"]},null),(l()(),t["\u0275eld"](12,0,null,null,2,"mat-icon",[["class","feedback mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,z.b,z.a)),t["\u0275did"](13,9158656,null,0,S.b,[t.ElementRef,S.d,[8,null],[2,S.a]],null,null),(l()(),t["\u0275ted"](-1,0,["description"])),(l()(),t["\u0275eld"](15,16777216,null,2,4,"li",[["class","nav-item dropdown navbar-nav"],["dropdown",""]],[[2,"dropup",null],[2,"open",null],[2,"show",null]],null,null,_.t,_.f)),t["\u0275prd"](512,null,b.g,b.g,[]),t["\u0275did"](17,245760,null,0,b.e,[t.ElementRef,t.Renderer2,t.ViewContainerRef,b.nb,b.c,b.g],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,N)),t["\u0275did"](19,16384,null,0,x.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](20,0,null,null,12,"div",[["class","cb"]],null,null,null,null,null)),(l()(),t["\u0275eld"](21,0,null,null,5,"div",[["class","card-deck"]],null,null,null,null,null)),(l()(),t["\u0275eld"](22,0,null,null,4,"mdb-carousel",[["class","carousel-multi-item multi-animation"]],null,[[null,"mouseleave"],[null,"mouseenter"],[null,"keyup"],[null,"click"]],function(l,n,e){var u=!0;return"mouseleave"===n&&(u=!1!==t["\u0275nov"](l,23).play()&&u),"mouseenter"===n&&(u=!1!==t["\u0275nov"](l,23).pause()&&u),"keyup"===n&&(u=!1!==t["\u0275nov"](l,23).keyboardControl(e)&&u),"click"===n&&(u=!1!==t["\u0275nov"](l,23).focus()&&u),u},_.u,_.g)),t["\u0275did"](23,4374528,null,1,b.k,[b.l,t.ElementRef,t.PLATFORM_ID,t.ChangeDetectorRef,t.Renderer2],{isControls:[0,"isControls"],class:[1,"class"],type:[2,"type"],animation:[3,"animation"]},null),t["\u0275qud"](603979776,2,{_slidesList:1}),(l()(),t["\u0275and"](16777216,null,0,1,null,T)),t["\u0275did"](26,278528,null,0,x.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](27,0,null,null,5,"div",[["class","w3-panel"],["style","text-align: center;margin-bottom: 0px;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](28,0,null,null,2,"p",[["class","w3-xlarge w3-serif"]],null,null,null,null,null)),(l()(),t["\u0275eld"](29,0,null,null,1,"i",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,['"Make it as simple as possible, but not simpler."'])),(l()(),t["\u0275eld"](31,0,null,null,1,"p",[["class","w3-large w3-serif"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["- Albert Einstein"]))],function(l,n){var e=n.component;l(n,1,0,"navbar navbar-expand-lg darkenen-1",!1);var t=l(n,7,0,"/main/portal");l(n,6,0,t),l(n,11,0,"Feedback Form"),l(n,13,0),l(n,17,0),l(n,19,0,e.user),l(n,23,0,!0,"carousel-multi-item multi-animation","carousel-multi-item","none"),l(n,26,0,e.slides)},function(l,n){l(n,5,0,t["\u0275nov"](n,6).target,t["\u0275nov"](n,6).href),l(n,12,0,t["\u0275nov"](n,13).inline,"primary"!==t["\u0275nov"](n,13).color&&"accent"!==t["\u0275nov"](n,13).color&&"warn"!==t["\u0275nov"](n,13).color),l(n,15,0,t["\u0275nov"](n,17).dropup,t["\u0275nov"](n,17).isOpen,t["\u0275nov"](n,17).isOpen)})}function V(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-portal",[],null,null,null,D,F)),t["\u0275did"](1,114688,null,0,E,[a.a,d.k],null,null)],function(l,n){l(n,1,0)},null)}var q=t["\u0275ccf"]("app-portal",E,V,{},{},[]),A=e("t68o"),B=e("zbXB"),W=e("NcP4"),Z=e("xYTU"),H=e("s7LF"),J=e("POq0"),Q=e("/Co4"),K=e("Xd0L"),U=e("s6ns"),G=e("821u"),X=e("gavF"),Y=e("JjoW"),$=e("OIZN"),ll=e("7kcP"),nl=e("qJ5m"),el=e("irV9"),tl=e("rzCp"),ul=e("yA/v");class ol{}var al=e("zMNK"),il=e("qJ50"),dl=e("zQui"),cl=e("mkRZ"),rl=e("r0V8"),sl=e("kNGD"),pl=e("02hT"),ml=e("5Bek"),gl=e("c9fC"),bl=e("HsOI"),hl=e("FVPZ"),fl=e("oapL"),vl=e("ZwOa"),kl=e("Q+lL"),xl=e("8P0U"),wl=e("W5yJ"),Cl=e("elxJ"),_l=e("BV1i"),Ol=e("lT8R"),Ml=e("pBi1"),yl=e("dFDH"),Rl=e("8rEH"),Pl=e("rWV4"),Il=e("BzsH"),zl=e("hctd"),Sl=e("dvZr");e.d(n,"MainModuleNgFactory",function(){return El});var El=t["\u0275cmf"](u.a,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,g,q,A.a,B.b,B.a,W.a,Z.a,Z.b,_.a,_.c,_.d,_.s,_.e,_.b]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,x.NgLocalization,x.NgLocaleLocalization,[t.LOCALE_ID,[2,x["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,H.x,H.x,[]),t["\u0275mpd"](4608,H.e,H.e,[]),t["\u0275mpd"](4608,J.c,J.c,[]),t["\u0275mpd"](4608,M.c,M.c,[M.i,M.e,t.ComponentFactoryResolver,M.h,M.f,t.Injector,t.NgZone,x.DOCUMENT,P.b,[2,x.Location]]),t["\u0275mpd"](5120,M.j,M.k,[M.c]),t["\u0275mpd"](5120,Q.b,Q.c,[M.c]),t["\u0275mpd"](4608,K.d,K.d,[]),t["\u0275mpd"](5120,U.c,U.d,[M.c]),t["\u0275mpd"](135680,U.e,U.e,[M.c,t.Injector,[2,x.Location],[2,U.b],U.c,[3,U.e],M.e]),t["\u0275mpd"](4608,G.h,G.h,[]),t["\u0275mpd"](5120,G.a,G.b,[M.c]),t["\u0275mpd"](5120,X.a,X.d,[M.c]),t["\u0275mpd"](4608,K.c,K.y,[[2,K.h],R.a]),t["\u0275mpd"](5120,Y.a,Y.b,[M.c]),t["\u0275mpd"](5120,O.b,O.c,[M.c]),t["\u0275mpd"](4608,I.e,K.e,[[2,K.i],[2,K.n]]),t["\u0275mpd"](5120,$.c,$.a,[[3,$.c]]),t["\u0275mpd"](5120,ll.d,ll.a,[[3,ll.d]]),t["\u0275mpd"](5120,nl.f,nl.a,[[3,nl.f]]),t["\u0275mpd"](4608,b.ab,b.ab,[]),t["\u0275mpd"](4608,b.l,b.l,[]),t["\u0275mpd"](4608,b.S,b.S,[]),t["\u0275mpd"](5120,a.b,u.b,[]),t["\u0275mpd"](4608,a.a,a.a,[a.b]),t["\u0275mpd"](4608,el.a,el.a,[ul.d,[2,ul.c],t.PLATFORM_ID,t.NgZone]),t["\u0275mpd"](1073742336,x.CommonModule,x.CommonModule,[]),t["\u0275mpd"](1073742336,d.m,d.m,[[2,d.r],[2,d.k]]),t["\u0275mpd"](1073742336,ol,ol,[]),t["\u0275mpd"](1073742336,H.w,H.w,[]),t["\u0275mpd"](1073742336,H.k,H.k,[]),t["\u0275mpd"](1073742336,H.t,H.t,[]),t["\u0275mpd"](1073742336,R.b,R.b,[]),t["\u0275mpd"](1073742336,J.d,J.d,[]),t["\u0275mpd"](1073742336,v.a,v.a,[]),t["\u0275mpd"](1073742336,P.a,P.a,[]),t["\u0275mpd"](1073742336,al.g,al.g,[]),t["\u0275mpd"](1073742336,y.d,y.d,[]),t["\u0275mpd"](1073742336,M.g,M.g,[]),t["\u0275mpd"](1073742336,y.b,y.b,[]),t["\u0275mpd"](1073742336,il.e,il.e,[]),t["\u0275mpd"](1073742336,dl.p,dl.p,[]),t["\u0275mpd"](1073742336,K.n,K.n,[[2,K.f],[2,I.f]]),t["\u0275mpd"](1073742336,K.x,K.x,[]),t["\u0275mpd"](1073742336,K.v,K.v,[]),t["\u0275mpd"](1073742336,K.s,K.s,[]),t["\u0275mpd"](1073742336,Q.e,Q.e,[]),t["\u0275mpd"](1073742336,f.c,f.c,[]),t["\u0275mpd"](1073742336,cl.a,cl.a,[]),t["\u0275mpd"](1073742336,C.c,C.c,[]),t["\u0275mpd"](1073742336,rl.b,rl.b,[]),t["\u0275mpd"](1073742336,rl.a,rl.a,[]),t["\u0275mpd"](1073742336,sl.b,sl.b,[]),t["\u0275mpd"](1073742336,U.j,U.j,[]),t["\u0275mpd"](1073742336,G.i,G.i,[]),t["\u0275mpd"](1073742336,pl.b,pl.b,[]),t["\u0275mpd"](1073742336,ml.c,ml.c,[]),t["\u0275mpd"](1073742336,gl.a,gl.a,[]),t["\u0275mpd"](1073742336,bl.d,bl.d,[]),t["\u0275mpd"](1073742336,K.o,K.o,[]),t["\u0275mpd"](1073742336,hl.a,hl.a,[]),t["\u0275mpd"](1073742336,S.c,S.c,[]),t["\u0275mpd"](1073742336,fl.c,fl.c,[]),t["\u0275mpd"](1073742336,vl.b,vl.b,[]),t["\u0275mpd"](1073742336,kl.c,kl.c,[]),t["\u0275mpd"](1073742336,X.c,X.c,[]),t["\u0275mpd"](1073742336,X.b,X.b,[]),t["\u0275mpd"](1073742336,K.z,K.z,[]),t["\u0275mpd"](1073742336,K.p,K.p,[]),t["\u0275mpd"](1073742336,Y.d,Y.d,[]),t["\u0275mpd"](1073742336,O.e,O.e,[]),t["\u0275mpd"](1073742336,$.d,$.d,[]),t["\u0275mpd"](1073742336,xl.c,xl.c,[]),t["\u0275mpd"](1073742336,wl.c,wl.c,[]),t["\u0275mpd"](1073742336,Cl.a,Cl.a,[]),t["\u0275mpd"](1073742336,_l.h,_l.h,[]),t["\u0275mpd"](1073742336,Ol.a,Ol.a,[]),t["\u0275mpd"](1073742336,Ml.a,Ml.a,[]),t["\u0275mpd"](1073742336,yl.e,yl.e,[]),t["\u0275mpd"](1073742336,ll.e,ll.e,[]),t["\u0275mpd"](1073742336,nl.g,nl.g,[]),t["\u0275mpd"](1073742336,Rl.m,Rl.m,[]),t["\u0275mpd"](1073742336,Pl.j,Pl.j,[]),t["\u0275mpd"](1073742336,Il.b,Il.b,[]),t["\u0275mpd"](1073742336,zl.a,zl.a,[]),t["\u0275mpd"](1073742336,b.i,b.i,[]),t["\u0275mpd"](1073742336,b.j,b.j,[]),t["\u0275mpd"](1073742336,b.mb,b.mb,[]),t["\u0275mpd"](1073742336,b.v,b.v,[]),t["\u0275mpd"](1073742336,b.Z,b.Z,[]),t["\u0275mpd"](1073742336,b.s,b.s,[]),t["\u0275mpd"](1073742336,b.m,b.m,[]),t["\u0275mpd"](1073742336,b.n,b.n,[]),t["\u0275mpd"](1073742336,b.r,b.r,[]),t["\u0275mpd"](1073742336,b.W,b.W,[]),t["\u0275mpd"](1073742336,b.kb,b.kb,[]),t["\u0275mpd"](1073742336,b.eb,b.eb,[]),t["\u0275mpd"](1073742336,b.t,b.t,[]),t["\u0275mpd"](1073742336,b.p,b.p,[]),t["\u0275mpd"](1073742336,b.hb,b.hb,[]),t["\u0275mpd"](1073742336,b.a,b.a,[]),t["\u0275mpd"](1073742336,b.b,b.b,[]),t["\u0275mpd"](1073742336,b.u,b.u,[]),t["\u0275mpd"](1073742336,b.gb,b.gb,[]),t["\u0275mpd"](1073742336,b.z,b.z,[]),t["\u0275mpd"](1073742336,a.d,a.d,[]),t["\u0275mpd"](1073742336,tl.a,tl.a,[]),t["\u0275mpd"](1073742336,u.a,u.a,[]),t["\u0275mpd"](1024,d.i,function(){return[[{path:"signin",component:i},{path:"portal",component:E},{path:"",redirectTo:"portal",pathMatch:"full"}]]},[]),t["\u0275mpd"](256,sl.a,{separatorKeyCodes:[Sl.f]},[]),t["\u0275mpd"](256,K.g,K.k,[])])})}}]);