import"./chunk-3QXNCE4J.js";import{a as oe}from"./chunk-SMTHFKF7.js";import{a as re}from"./chunk-OPO3KT7X.js";import"./chunk-ZV2R3LMA.js";import"./chunk-ILPDLS5K.js";import"./chunk-TOZGBBW3.js";import{h as ie,i as ae}from"./chunk-B2E53Q3J.js";import{d as te}from"./chunk-ARH7HIPE.js";import{H as Y,V as Z,W as ee}from"./chunk-KPZBUCCV.js";import{a as ne}from"./chunk-MO4VOJ6B.js";import{a as v}from"./chunk-QR7RS26O.js";import{b as K}from"./chunk-HCO6HHKT.js";import{b as J}from"./chunk-RGXTWLH4.js";import{n as H,o as G,p as X,v as q,w as W}from"./chunk-VIKG75FC.js";import{Db as T,Eb as u,Ka as O,Kb as P,Lb as A,Mb as N,N as j,Pb as d,Qa as l,Qb as M,Rb as I,Sb as F,T as k,Y as $,Z as f,Zb as U,_a as c,_b as y,cc as V,da as L,dc as z,eb as g,ec as Q,fb as B,gb as R,jb as _,ma as x,na as S,pb as b,ub as r,vb as n,wb as m,zb as E}from"./chunk-COZJJN5U.js";var se=(()=>{class t{constructor(e){this.http=e,this.BaseRuta=v.ruta_base_api}getTotalVacantesNormales(e){return this.http.get(`${this.BaseRuta}bolsa_trabajo/get_total_vacantes/${e}`)}saveVisita(e,i,a,s){let o=new FormData;return o.append("id_contenido",e.toString()),o.append("id_empresa",i.toString()),o.append("division",a.toString()),o.append("id_usuario",s.toString()),this.http.post(`${this.BaseRuta}bolsa_trabajo/save_vista_vacantes`,o)}getVacantes(e,i){let a=i?1:0;return this.http.get(`${this.BaseRuta}bolsa_trabajo/get_vacantes/${e}/${a}`)}getVacantesBorrador(e,i,a,s){let o=i?1:0;return this.http.get(`${this.BaseRuta}bolsa_trabajo/get_vacantes_borrador/${e}/${o}/${a}/${s}`)}getGirosVacante(e){return this.http.get(`${this.BaseRuta}bolsa_trabajo/get_giros/${e}`)}getVacanteId(e,i){return this.http.get(`${this.BaseRuta}bolsa_trabajo/get_vacante_id/${e}/${i}`)}getVacanteBorradorId(e,i){return this.http.get(`${this.BaseRuta}bolsa_trabajo/get_vacante_id/${e}/${i}/1`)}saveVacante(e,i,a,s){let o=new FormData;return o.append("division",e.toString()),o.append("usuario",i.toString()),o.append("empresa",s.empresa),o.append("giro",s.giro.toString()),o.append("pais",s.pais.toString()),o.append("estado",s.estado.toString()),o.append("profesion",s.profesion.toString()),o.append("puesto",s.puesto),o.append("descripcion",s.descripcion),o.append("token",a),o.append("nombre_contacto",s.nombre_contacto.toString()),o.append("correo_contacto",s.correo_contacto.toString()),this.http.post(`${this.BaseRuta}bolsa_trabajo/saveNuevaVacante`,o)}static{this.\u0275fac=function(i){return new(i||t)($(J))}}static{this.\u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var pe=["contacto"],_e=()=>[import("./chunk-GCLK6MJR.js").then(t=>t.ModalTemplateComponent),import("./chunk-CNCTEBU7.js").then(t=>t.ModalNuevaVacanteComponent)],me=()=>[import("./chunk-GCLK6MJR.js").then(t=>t.ModalTemplateComponent),import("./chunk-GCLK6MJR.js").then(t=>t.ModalLoginComponent)],le=()=>["/registro-usuario"];function ue(t,p){if(t&1&&(r(0,"app-modal-template",13),m(1,"app-modal-nueva-vacante"),n()),t&2){let e=u();_("show_modal",e.show_modal_nueva_vacante)}}function he(t,p){if(t&1&&(r(0,"app-modal-template",13),m(1,"app-modal-login"),n()),t&2){let e=u();_("show_modal",e.show_modal_login)}}function ge(t,p){if(t&1){let e=E();r(0,"ul",1)(1,"li",14)(2,"a",15),T("click",function(){x(e);let a=u();return S(a.scrollForm())}),m(3,"span",16),d(4," Aplicar "),n()(),r(5,"li",17)(6,"a",18),T("click",function(){x(e);let a=u();return S(a.openModalPublicar())}),d(7," Publicar vacante "),n()()()}}function ve(t,p){if(t&1){let e=E();r(0,"div",19)(1,"p",20),d(2,"PARA PODER CONTACTAR DEBES SER USUARIO REGISTRADO."),n(),r(3,"div",21)(4,"button",22),T("click",function(){x(e);let a=u();return S(a.openModalLogin())}),d(5,"INGRESA"),n(),r(6,"a",23),d(7," REG\xCDSTRATE "),n()()()}t&2&&(l(6),_("routerLink",y(1,le)))}function fe(t,p){t&1&&(r(0,"div"),d(1,"Puebla, CDMX, Quer\xE9taro o Guadalajara"),n())}function be(t,p){t&1&&(r(0,"div"),d(1,"Puebla, CDMX, Quer\xE9taro o Guadalajara"),n())}function Ce(t,p){t&1&&(r(0,"div"),d(1,"Puebla, CDMX, Quer\xE9taro o Guadalajara"),n())}function xe(t,p){if(t&1&&(r(0,"div"),d(1),n()),t&2){let e=u(2);l(),F("",e.vacante().estado,", ",e.vacante().pais,"")}}function Se(t,p){if(t&1&&(r(0,"li"),m(1,"span",34),d(2),n()),t&2){let e=u(2);l(2),I(" ",e.vacante().empresa," ")}}function Te(t,p){if(t&1&&(r(0,"div",6)(1,"ul",5)(2,"li")(3,"span",24),m(4,"span",25)(5,"span",26)(6,"span",27)(7,"span",28),n(),r(8,"div",29),g(9,fe,2,0,"div",30)(10,be,2,0,"div",30)(11,Ce,2,0,"div",30)(12,xe,2,2,"div",31),n()(),r(13,"li"),m(14,"span",32),d(15),n(),r(16,"li"),m(17,"span",33),r(18,"b"),d(19),V(20,"number"),n(),d(21," visitas "),n(),g(22,Se,3,1,"li"),n()()),t&2){let e=u();l(8),_("ngSwitch",e.vacante().id),l(),_("ngSwitchCase",1450),l(),_("ngSwitchCase",1451),l(),_("ngSwitchCase",1452),l(4),I(" ",e.vacante().fecha," "),l(4),M(z(20,7,e.vacante().visitas+1)),l(3),b(22,e.vacante().empresa!=""?22:-1)}}function we(t,p){if(t&1&&(r(0,"div",7),m(1,"span",35),r(2,"b"),d(3,"Contacto:"),n(),d(4),n()),t&2){let e=u();l(4),I(" ",e.vacante().contacto," ")}}function Ee(t,p){if(t&1&&(r(0,"div",12,0),m(2,"app-form-contacto",36),n()),t&2){let e=u();l(2),_("tipo_disenio","nuevo")("exist_file",!0)("tipo","vacante")("action_recaptcha","solicitud_vacante")("titulo","CONTACTAR AL SOLICITANTE")("id_elemento",e.vacante().id)}}function Ie(t,p){if(t&1){let e=E();r(0,"div",37)(1,"p",20),d(2,"PARA PODER CONTACTAR DEBES SER USUARIO REGISTRADO."),n(),r(3,"div",21)(4,"button",22),T("click",function(){x(e);let a=u();return S(a.openModalLogin())}),d(5,"INGRESA"),n(),r(6,"a",23),d(7," REG\xCDSTRATE "),n()()()}t&2&&(l(6),_("routerLink",y(1,le)))}var D=v.division,qe=(()=>{class t{constructor(){this.cargando_datos=c(!1),this.is_modal_vacante_open=c(!1),this.is_modal_publicar_vacante_open=c(!1),this.is_borrador=c(!1),this.show_modal_nueva_vacante=c(!1),this.show_modal_login=c(!1),this.is_user_loggin=c(!1),this.user_name=c(""),this.user_email=c(""),this.user_picture=c(""),this.user_id=c(0),this.user_estado=c(""),this.user_pais=c(""),this.correo=c(""),this.password=c(""),this.message_login=c("Correo y/o contrase\xF1a incorrectos"),this.error_login=c(!1),this.enviado=c(!1),this.is_modal_visible=c(!1),this.vacante=c({id:0,puesto:"",url_amigable:"",profesion:"",visitas:0,detalle:"",giro:"",contacto:"",pais:"",estado:"",empresa:"",id_empresa:0,fecha:"",solicitudes:0}),this._general_service=f(te),this._title_service=f(K),this._activated_router=f(Y),this._router=f(Z),this._vacante_service=f(se),this._loginService=f(ie),this._usuarioService=f(ae),this._general_service.$paginaLoader.emit(!0),this._activated_router.params.subscribe(e=>{window.scrollTo(0,0),this._title_service.setTitle("Bolsa de trabajo en "+v.nombre_division);let i=e["url-bolsa"],a=e["id-vacante"],s=this._router.parseUrl(this._router.url),o=this._router.url.split("/")[1],w="/"+o+"/"+a+"/"+i,C=s.queryParamMap.get("tokenmailchimp");C!=null?this.loginMailchimp(C,w):(o=="bolsa-trabajo-borrador"&&this.is_borrador.set(!0),this.is_borrador()?this._vacante_service.getVacanteBorradorId(D,a).subscribe(h=>{h.success&&this.vacante.set(h.data)},h=>{},()=>{this._general_service.$paginaLoader.emit(!1)}):this._vacante_service.getVacanteId(D,a).subscribe(h=>{h.success&&(i!=h.data.url_amigable?location.replace("/bolsa-trabajo"):(this.vacante.set(h.data),v.production&&!v.isSandbox&&!this.is_borrador()&&this._usuarioService.getUserService().pipe(j(ce=>this._vacante_service.saveVisita(Number(this.vacante().id),Number(this.vacante().id_empresa),D,ce.id))).subscribe()))},h=>{},()=>{this._general_service.$paginaLoader.emit(!1)}))}),this._general_service.existLogin().subscribe(e=>{e?this._general_service.getTokenUsuario().pipe(j(i=>this._general_service.ValidateLogin(i))).subscribe(i=>{if(i.success){this.is_user_loggin.set(!0);let a=i.data.nombre,s=i.data.email,o=i.data.foto,w=i.data.id,C=i.data.estado,h=i.data.pais;a!=null&&this.user_name.set(a),s!=null&&this.user_email.set(s),C!=null&&this.user_estado.set(C),h!=null&&this.user_pais.set(h),o!=null&&o!=""?this.user_picture.set(v.url_secure+"display/"+o):this.user_picture.set(v.url_secure+"display/avatarmini.jpg"),w!=null&&this.user_id.set(Number(w))}}):this.is_user_loggin.set(!1)})}ngOnInit(){}ngOnDestroy(){}openModalPublicar(){this.show_modal_nueva_vacante.set(!0),this.is_modal_publicar_vacante_open.update(e=>!e)}Login(){let e=/^[a-z0-9!#$%&'*+\=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;if(this.correo.length==0||!e.test(this.correo())){this.message_login.set("Ingrese su correo"),this.error_login.set(!0),setTimeout(()=>{this.error_login.set(!1)},4e3);return}if(this.password().length==0){this.message_login.set("Ingrese su contrase\xF1a"),this.error_login.set(!0),setTimeout(()=>{this.error_login.set(!1)},4e3);return}this._general_service.Login(this.correo(),this.password()).subscribe(i=>{if(i.success)this._general_service.saveDataLogin(i.data).subscribe(a=>location.reload());else{this.message_login.set(i.msg||""),this.error_login.set(!0),setTimeout(()=>{this.error_login.set(!1)},3e3);return}})}loginMailchimp(e,i){this._loginService.existLogin().subscribe(a=>{a?this._router.navigate(["/"+i]):this._loginService.loginMailchimp(e).subscribe(s=>{s.success&&(this._loginService.$_login_mailchimp.emit(!0),this._usuarioService.setToken(s.data.token),this._usuarioService.saveUser(s.data)),this._router.navigate(["/"+i])})})}openModalLogin(){this.show_modal_login.set(!0),this._general_service.$showModalLogin.emit(!0)}scrollForm(){this.contacto.nativeElement.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=L({type:t,selectors:[["app-bolsa-trabajo-interior"]],viewQuery:function(i,a){if(i&1&&P(pe,5),i&2){let s;A(s=N())&&(a.contacto=s.first)}},standalone:!0,features:[U],decls:23,vars:13,consts:[["contacto",""],[1,"enlaces-columna"],[1,"cont-nota"],[1,"nota-top"],[1,"bolsa-titulo"],[1,"text-c-dark"],[1,"nota-info"],[1,"contacto",2,"font-size","1.1rem","margin-top","0.5rem","margin-bottom","2rem"],[1,"bolsa-enlaces","mb-2"],[3,"cargando","mostrar_ctrl_tamanio"],[1,"nota-body"],["_ngcontent-gde-c51","",1,"nota_id","cambiar-tamanio",3,"innerHTML"],[1,"nota-footer"],[3,"show_modal"],[1,"enlaces-columna--boton","icono"],[3,"click"],[1,"icon-pec-aplicadas"],[1,"enlaces-columna--boton","destacada"],["href","javascript:;",3,"click"],[1,"cont-mensaje-registro"],[1,"text-upcase"],[1,"cont-msg-botones"],[1,"boton-general","ff-sans-condensed","fw-700","bg-c-orange","bor-rad-0","text-center","text-c-white","w-100","text-upcase","d-block","lh-1_1","pt-1","pb-1","radius-10",3,"click"],["target","_self",1,"boton-general","ff-sans-condensed","fw-700","bg-c-orange","bor-rad-0","text-center","text-c-white","w-100","text-upcase","d-block","lh-1_1","pt-1","pb-1","radius-10",3,"routerLink"],[1,"icon-pec-pin"],[1,"path1"],[1,"path2"],[1,"path3"],[1,"path4"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"icon-pec-calendario"],[1,"icon-pec-vistas"],[1,"icon-pec-empresa"],[1,"icon-pec-solicitudes","text-c-sitio"],[3,"tipo_disenio","exist_file","tipo","action_recaptcha","titulo","id_elemento"],[1,"cont-mensaje-registro","nota-footer"]],template:function(i,a){i&1&&(g(0,ue,2,1),B(1,0,_e),g(3,he,2,1),B(4,3,me),r(6,"div"),g(7,ge,8,0,"ul",1)(8,ve,8,2),r(9,"div",2)(10,"div",3)(11,"div",4)(12,"h1",5),d(13),n(),g(14,Te,23,9,"div",6),n(),g(15,we,5,1,"div",7),r(16,"div",8),m(17,"app-links-redes",9),n()(),r(18,"div",10),m(19,"div",11),V(20,"safeUrlPipe"),n(),g(21,Ee,3,6,"div",12)(22,Ie,8,2),n()()),i&2&&(l(),R(a.show_modal_nueva_vacante()),l(3),R(a.show_modal_login()),l(3),b(7,a.is_user_loggin()?7:8),l(6),M(a.vacante().puesto),l(),b(14,a.vacante().id!=0?14:-1),l(),b(15,a.vacante().contacto!=null&&a.vacante().contacto!=""?15:-1),l(2),_("cargando",!0)("mostrar_ctrl_tamanio",!1),l(2),_("innerHTML",Q(20,10,a.vacante().detalle,"html"),O),l(2),b(21,a.is_user_loggin()?21:22))},dependencies:[W,H,G,X,q,re,ne,ee,oe],styles:[".cont-mensaje-registro[_ngcontent-%COMP%]{margin:2rem 0}.cont-mensaje-registro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:700 15px Open Sans Condensed,sans-serif;margin-bottom:10px;margin-top:10px;color:#3c3c3c;text-align:center;padding:0 2rem}.cont-mensaje-registro[_ngcontent-%COMP%]   .cont-msg-botones[_ngcontent-%COMP%]{display:flex;gap:15px;flex-direction:column}@media (min-width: 576px){.cont-mensaje-registro[_ngcontent-%COMP%]   .cont-msg-botones[_ngcontent-%COMP%]{flex-direction:row}}.cont-msg-botones[_ngcontent-%COMP%]{display:flex;gap:15px;flex-direction:column}@media (min-width: 576px){.cont-msg-botones[_ngcontent-%COMP%]{flex-direction:row}}.boton-general.radius-10[_ngcontent-%COMP%]{border-radius:10px}"]})}}return t})();export{qe as default};
