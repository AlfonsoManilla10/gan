import{a as R}from"./chunk-ILPDLS5K.js";import{a as U}from"./chunk-BSPFLHYX.js";import{b as P,d as z,e as I,f as T,g as L,h as F,q as A,u as D}from"./chunk-TOZGBBW3.js";import{d as N}from"./chunk-ARH7HIPE.js";import{W as y,na as k}from"./chunk-KPZBUCCV.js";import{a as s}from"./chunk-QR7RS26O.js";import{b as O}from"./chunk-RGXTWLH4.js";import{Db as _,Ib as d,La as p,Pb as i,Qa as n,Rb as C,T as b,Vb as S,Wb as x,Xb as M,Z as f,Zb as E,_a as g,_b as u,da as v,jb as c,ub as e,vb as t,wb as m}from"./chunk-COZJJN5U.js";var V=s.ruta_base_api,j=(()=>{class a{constructor(){this._http=f(O)}saveCorreoNewsletter(l,r){let o=new FormData;return o.append("division",l.toString()),o.append("mail",r),this._http.post(`${V}home/registra_mailchimp`,o)}static{this.\u0275fac=function(r){return new(r||a)}}static{this.\u0275prov=b({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})();var B=()=>["/registro-usuario"],G=()=>["/anunciate-nosotros"],Y=()=>["/aviso-de-privacidad"],le=(()=>{class a{constructor(){this.FACEBOOK=s.facebook,this.TWITTER=s.twitter,this.YOUTUBE=s.youtube,this.INSTAGRAM=s.instagram,this.LOGO=s.nombre_division.toLowerCase(),this.URL_WHATS_MOVIL=s.url_whats_movil,this.DIVISION=s.division,this._generalService=f(N),this._footerService=f(j),this.show_modal=g(!1),this.correo="",this.anio=g(""),this.message=g({title:"",message:""}),this.anio.set(new Date().getFullYear().toString())}saveCorreo(){this.show_modal.set(!0);let l=/^[a-z0-9!#$%&'*+\=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;if(this.correo.length==0||!l.test(this.correo)){this.showMessageModal("Correo invalido","El correo ingresado no es valido, reviselo e intentelo de nuevo");return}this._footerService.saveCorreoNewsletter(this.DIVISION,this.correo).subscribe(r=>{let o=r.success?"Correo guardado":"Algo salio mal";this.correo="",this.showMessageModal(o,r.msg)})}clickWhatsApp(){this._generalService.clickWhatsapp(this.DIVISION).subscribe()}topPagina(){window.scroll(0,0)}showMessageModal(l,r){this.message.update(o=>o={title:l,message:r}),this.show_modal.set(!0)}static{this.\u0275fac=function(r){return new(r||a)}}static{this.\u0275cmp=v({type:a,selectors:[["app-footer"]],standalone:!0,features:[E],decls:80,vars:21,consts:[[1,"footer","pos-relative","mt-4"],[1,"footer__top","padding-footer","text-c-white","bg-c-site","d-flex","flex-wrap","justify-content-center","align-items-center","gap-1"],[1,"footer__top-info","flex-grow-1"],[1,"footer__top-info--title"],[1,"fw-600","ff-roboto"],[1,"footer__top-info--sub_title","invisible-movil"],[1,"footer__top-form"],[1,"d-flex","gap-1","flex-wrap","justify-content-center",3,"ngSubmit"],["type","email","name","input_newsletter","id","input_newsletter","placeholder","mail@dominio.com","maxlength","50",1,"bg-c-white","text-c-gris","flex-grow-1","p-1_5","ff-roboto","fw-400",3,"ngModelChange","ngModel"],["type","submit",1,"p-1","pl-3","pr-3","text-upcase","bg-c-light-gray"],[1,"footer__middle","mb-1","padding-footer","d-grid","gap-1","text-c-dark-gray","ff-roboto","fw-500"],[1,"info-empresa"],[1,"footer__middle-title","invisible-movil","fw-700"],[1,"fs-normal"],[1,"footer__middle-title","invisible-desktop","fw-700"],[1,"email-info"],["href","mailto:info@pecuarios.com"],[1,"tel-info","mb-1"],["href","tel:+522313124060"],[1,"footer__middle-redes","d-flex","align-items-center","gap-1"],["target","_blank","title","Facebook",3,"href"],[1,"icon-pec-face-color"],["target","_blank","title","Twitter",3,"href"],[1,"icon-pec-x-twitter-cuadro"],[1,"path1"],[1,"path2"],[1,"path3"],["target","_blank","title","Youtube",3,"href"],[1,"icon-pec-youtube-color"],[1,"path4"],[1,"path5"],["target","_blank","title","Instagram",3,"href"],["src","assets/images/logos/logo_insta_footer.svg","alt","Logo instagram","width","28","height","28"],[1,"registrate"],[1,"footer__middle-title","fw-700"],[1,"mb-1_5"],[1,"btn-footer","pt-0_5","pb-0_5","pr-2","pl-2","d-inline-block","bg-c-site","text-c-white",3,"routerLink"],[1,"anunciate"],[1,"btn-footer","pt-0_5","pb-0_5","pr-2","pl-2","d-inline-block","bg-c-dark-gray","text-c-white",3,"routerLink"],[1,"footer__bottom","padding-footer","d-flex","align-items-center","gap-2","gap-row-1","flex-wrap","bg-c-dark-gray","text-c-white","ff-sans"],["alt","Logo pecuarios","width","156","height","40",1,"logo_white",3,"src"],[1,"derechos_reservados","fw-300"],["href","https://pecuarios.com/",1,"text-c-white"],[1,"aviso-privacidad","fw-600","ml-auto","text-c-white",3,"routerLink"],[1,"items-flotantes-footer","pos-fixed","d-flex","justify-content-center","align-items-center","flex-column",2,"z-index","9999"],["target","_blank",1,"whatsapp",3,"click","href"],[1,"icon-pec-whatsapp"],[1,"icon-pec-arrow","inicio-pagina","d-flex","justify-content-center","align-items-center","bg-c-white","cursor-pointer",3,"click"],[3,"show_modal"],[3,"message"]],template:function(r,o){r&1&&(e(0,"footer",0)(1,"section",1)(2,"div",2)(3,"p",3)(4,"b",4),i(5,"SUSCR\xCDBETE AL NEWSLETTER"),t()(),e(6,"p",5),i(7,"Subimos notas todos los d\xEDas con los temas m\xE1s relevantes del sector pecuario"),t()(),e(8,"div",6)(9,"form",7),_("ngSubmit",function(){return o.saveCorreo()}),e(10,"input",8),M("ngModelChange",function(w){return x(o.correo,w)||(o.correo=w),w}),t(),e(11,"button",9)(12,"b",4),i(13,"Enviar"),t()()()()(),e(14,"section",10)(15,"div",11)(16,"p",12)(17,"b"),i(18,"Nos encantar\xEDa saber de ti"),t()(),e(19,"address",13)(20,"p",14)(21,"b"),i(22,"Contacto"),t()(),e(23,"p",15),i(24,"Email: "),e(25,"a",16),i(26,"info@pecuarios.com"),t()(),e(27,"p",17),i(28,"Tel. "),e(29,"a",18),i(30," +52 231 312 4060 "),t()()(),e(31,"div",19)(32,"a",20),m(33,"span",21),t(),e(34,"a",22)(35,"span",23),m(36,"span",24)(37,"span",25)(38,"span",26),t()(),e(39,"a",27)(40,"span",28),m(41,"span",24)(42,"span",25)(43,"span",26)(44,"span",29)(45,"span",30),t()(),e(46,"a",31),m(47,"img",32),t()()(),e(48,"div",33)(49,"p",34)(50,"b"),i(51,"Personaliza tu contenido"),t()(),e(52,"p",35),i(53,"Como usuario registrado puedes personalizar los temas que te son m\xE1s relevantes"),t(),e(54,"a",36),i(55,"Reg\xEDstrate aqu\xED"),t()(),e(56,"div",37)(57,"p",34),i(58,"An\xFAnciate con nosotros"),t(),e(59,"p",35),i(60,"Nuestra comunidad es una de las m\xE1s grandes en Latinoam\xE9rica. Conoce los grandes alcances que puedes tener trabajando con nosotros."),t(),e(61,"a",38),i(62,"Cont\xE1ctanos"),t()()(),e(63,"section",39),m(64,"img",40),e(65,"p",41),i(66),e(67,"a",42),i(68,"Pecuarios.com"),t()(),e(69,"a",43),i(70," Aviso de privacidad "),t()()(),e(71,"div",44)(72,"a",45),_("click",function(){return o.clickWhatsApp()}),e(73,"span",46),m(74,"span",24)(75,"span",25)(76,"span",26),t()(),e(77,"span",47),_("click",function(){return o.topPagina()}),t()(),e(78,"app-modal-template",48),m(79,"app-modal-respuesta",49),t()),r&2&&(n(10),S("ngModel",o.correo),n(22),d("href","https://www.facebook.com/",o.FACEBOOK,"/?ref=sgm",p),n(2),d("href","https://twitter.com/",o.TWITTER,"",p),n(5),d("href","https://www.youtube.com/c/",o.YOUTUBE,"",p),n(7),d("href","https://www.instagram.com/",o.INSTAGRAM,"/",p),n(8),c("routerLink",u(18,B)),n(7),c("routerLink",u(19,G)),n(3),d("src","./assets/images/logos-sitios/",o.LOGO,"-blanco.svg",p),n(2),C(" Derechos reservados \xA9 2000 - ",o.anio()," , "),n(3),c("routerLink",u(20,Y)),n(3),c("href",o.URL_WHATS_MOVIL,p),n(6),c("show_modal",o.show_modal),n(),c("message",o.message))},dependencies:[k,y,D,F,P,z,I,A,L,T,U,R],styles:[".padding-footer[_ngcontent-%COMP%]{padding:1.5rem 5%}.footer__top-info--title[_ngcontent-%COMP%]{font-size:1.65rem}.footer__top-info--sub_title[_ngcontent-%COMP%]{font-size:1.4rem}@media (max-width: 767px){.footer__top-info[_ngcontent-%COMP%]{text-align:center}}.footer__top-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:1.25rem}.footer__top-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:1.4rem}.footer__middle[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr 1fr;font-size:1.35rem}.footer__middle-title[_ngcontent-%COMP%]{font-size:1.6rem}@media (max-width: 767px){.footer__middle-redes[_ngcontent-%COMP%]{justify-content:center}}.footer__middle-redes[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:2rem}@media (max-width: 767px){.footer__middle[_ngcontent-%COMP%]{grid-template-columns:1fr;row-gap:2rem;text-align:center}}.footer__bottom[_ngcontent-%COMP%]{font-size:1.2rem}.footer__bottom[_ngcontent-%COMP%]   .derechos_reservados[_ngcontent-%COMP%]{font-size:1.1rem}@media (max-width: 799px){.footer__bottom[_ngcontent-%COMP%]{text-align:center;justify-content:center;row-gap:1rem}.footer__bottom[_ngcontent-%COMP%]   .aviso-privacidad[_ngcontent-%COMP%]{margin:0}}@media (min-width: 1024px){.invisible-desktop[_ngcontent-%COMP%]{display:none}}@media (max-width: 1023px){.invisible-movil[_ngcontent-%COMP%]{display:none}}.inicio-pagina[_ngcontent-%COMP%]{font-size:1.35rem;width:2.75rem;height:2.75rem;border-radius:50%;transform:rotate(270deg);box-shadow:-1px 1px 4px #9e9e9e}.whatsapp[_ngcontent-%COMP%]{font-size:3.25rem}@media (min-width: 1280px){.whatsapp[_ngcontent-%COMP%]{display:none}}.items-flotantes-footer[_ngcontent-%COMP%]{bottom:3rem;right:1.5rem}"],changeDetection:0})}}return a})();export{le as a};
