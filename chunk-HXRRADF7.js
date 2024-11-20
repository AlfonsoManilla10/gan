import{a as Y,b as U}from"./chunk-Z4CPHQZ2.js";import{a as K}from"./chunk-ZV55WRZB.js";import"./chunk-B2E53Q3J.js";import{d as G}from"./chunk-ARH7HIPE.js";import{H as $,V as q}from"./chunk-KPZBUCCV.js";import{a as I}from"./chunk-QR7RS26O.js";import{b as J}from"./chunk-HCO6HHKT.js";import"./chunk-RGXTWLH4.js";import{s as W,w as H}from"./chunk-VIKG75FC.js";import{Db as P,Eb as h,Kb as N,Lb as k,Mb as O,Oa as R,Pb as F,Qa as m,Qb as A,Z as f,Zb as j,_a as n,cc as B,da as E,dc as L,eb as d,fb as z,hb as T,jb as S,ma as b,na as D,pb as C,qb as V,sb as y,tb as M,ub as g,vb as _,vc as Q,wb as r,zb as w}from"./chunk-COZJJN5U.js";var X=["list_cards"],Z=()=>[import("./chunk-RH7VKH4V.js").then(t=>t.FiltroComponent)],ee=()=>[import("./chunk-RRUR2LM4.js").then(t=>t.CartaNotaDestacadaComponent)],te=()=>[import("./chunk-JU4RQIXO.js").then(t=>t.CartaNotaComponent)];function ie(t,c){if(t&1&&(g(0,"h2",4),F(1),_()),t&2){let e=h();m(),A(e.description())}}function se(t,c){t&1&&r(0,"div",8)}function ae(t,c){if(t&1){let e=w();g(0,"div",9),P("click",function(){b(e);let s=h();return D(s.toggelFiltro())}),F(1," Filtrar "),r(2,"span",10),_()}}function ne(t,c){if(t&1){let e=w();g(0,"app-filtro",11),P("onFiltros",function(s){b(e);let o=h(2);return D(o.filtrar(s))}),_()}if(t&2){let e=h(2);S("numero_resultados",e.numero_resultados())}}function oe(t,c){t&1&&r(0,"div")}function ce(t,c){t&1&&(d(0,ne,1,1)(1,oe,1,0),z(2,0,Z,null,1),T(0,-1))}function re(t,c){if(t&1&&r(0,"app-carta-nota-destacada",12),t&2){let e=h(3);S("destacado",e.destacado)("seccion_name",e.name_seccion())("url",e.url_location+"/")("icon",e.icon_seccion())}}function le(t,c){t&1&&r(0,"div",13)}function de(t,c){t&1&&(d(0,re,1,4)(1,le,1,0),z(2,0,ee,null,1),T(0,-1))}function _e(t,c){if(t&1&&d(0,de,4,0),t&2){let e=h();C(0,e.exist_destacado()?0:-1)}}function he(t,c){if(t&1&&r(0,"app-carta-nota",14),t&2){let e=h().$implicit,i=h();S("magazine",e)("url",i.url_location+"/")("icon",i.icon_seccion())}}function me(t,c){t&1&&r(0,"div",15)}function ue(t,c){t&1&&(d(0,he,1,3)(1,me,1,0),z(2,0,te,null,1),T(0,-1))}function pe(t,c){t&1&&r(0,"app-msg-sin-contenido")}var x=I.nombre_division,u=I.division,Ae=(()=>{class t{constructor(){this._activateRouteService=f($),this._routerService=f(q),this._titleService=f(J),this._generalService=f(G),this._destacadosService=f(Y),this._razasService=f(U),this.name_seccion=n(""),this.num_seccion=n(0),this.seccion=n(""),this.description=n(""),this.icon_seccion=n(""),this.icon_seccion_mas_leido=n(""),this.url_location="destacado",this.exist_filtro=n(!1),this.is_filtro_visible=n(!1),this.categorias=n(""),this.empresas=n(""),this.autores=n(""),this.palabra_buscada=n(""),this.destacado={id:0,resource:{original:"",large:"",medium:"",small:""},enlace:"",categoria:0,titulo:"",extracto:"",autor:null,ruta_autor:null,fecha:"",visitas:0,exclusivo:0,destacado:0},this.arr_magazines=n([]),this.numero_resultados=n(0),this.is_disable_scroll=Q(()=>this.numero_resultados()==this.arr_magazines().length),this.cargando=n(!1),this.index=n(0),this.exist_destacado=n(!1)}ngOnDestroy(){this.seccion.set(""),this.destacado={id:0,resource:{original:"",large:"",medium:"",small:""},enlace:"",categoria:0,titulo:"",extracto:"",autor:null,ruta_autor:null,fecha:"",visitas:0,exclusivo:0,destacado:0},this.arr_magazines.set([]),this.index.set(0),this.numero_resultados.set(0),this.is_filtro_visible.set(!1)}ngOnInit(){this._activateRouteService.params.subscribe(e=>{switch(scrollTo(0,0),this.is_filtro_visible.set(!1),this.seccion.set(e.seccion),this.seccion()==null&&this.seccion.set(this._routerService.url.split("/")[1]),this.seccion()){case"fiebre-porcina-africana":this.setAttrPage("M\xC1S DE FIEBRE PORCINA AFRICANA / AFRICAN SWINE FEVER",15,"noticia","noticia"),this.setTitlePage("Fiebre Porcina Africana en "+x);break;case"jim-long":this.setAttrPage("Jim Long",10,"jim-long-letra","jim-long-letra"),this.setTitlePage(this.name_seccion()+" en "+x);break;case"razas":this.setAttrPage("Razas",0,"razas","razas"),this.setTitlePage(this.name_seccion()+" de Vacas"),this.url_location="raza";break;case"influenza-aviar":this.setAttrPage("Influenza aviar",17,"exclamation-circle","exclamation-circle"),this.setTitlePage(this.name_seccion()+" en "+x);break;case"proposicion-12":this.setAttrPage("Proposici\xF3n 12",18,"exclamation-circle","exclamation-circle"),this.setTitlePage(this.name_seccion()+" en "+x);break;case"destacados":case"noticias":this.setAttrPage("Noticias",1,"noticia","noticia"),this.setTitlePage(this.name_seccion()+" de "+x);break;case"articulos":this.setAttrPage("Art\xEDculos",2,"articulo","articulo-lapiz"),this.setTitlePage(this.name_seccion()+" de "+x);break;case"video":this.setAttrPage("Videos",4,"video","video"),this.setTitlePage("Video de "+x);break;default:this._routerService.navigate(["/destacados"]);break}this.getDescription(),this.cargarDatos()})}setAttrPage(e,i,s,o){this.name_seccion.set(e),this.num_seccion.set(i),this.icon_seccion.set(s),this.icon_seccion_mas_leido.set(o)}setTitlePage(e){this._titleService.setTitle(e)}getDescription(){let e=["art\xEDculos","noticias","videos","Proposici\xF3n 12","razas","Jim Long","Influenza aviar","M\xC1S DE FIEBRE PORCINA AFRICANA / AFRICAN SWINE FEVER"],i=["articulos","noticias","videos","proposicion-12","razas","jim-long","influenza-aviar","FPA"],o=["destacados","destacados","destacados","proposicion-12","razas","jim-long","influenza-aviar","fiebre-porcina-africana"][e.findIndex(a=>a.toLowerCase()==this.name_seccion().toLowerCase())],v=i[e.findIndex(a=>a==this.name_seccion().toLowerCase())];o!=null&&this._generalService.getMetas(o,v,u).subscribe({next:({statusCode:a,data:l})=>{this.description.set(l.description)},error:a=>this.description.set("")})}cargarDatos(){this.index.set(0),this.cargando.set(!0),this.seccion()!="razas"?this._destacadosService.getMagazines(u,this.num_seccion(),0,this.num_seccion()!=10?8:9).subscribe(e=>{if(e.success){this.cargando.set(!1);let i=e.data;i[0].destacado==1?(this.index.update(s=>s+9),this.destacado=i[0],i.splice(0,1),this.arr_magazines.set(i),this.exist_destacado.set(!0)):(this.index.set(0),this.arr_magazines.set(i),this.exist_destacado.set(!1))}}):this._razasService.getRazas(u,0,8).subscribe(e=>{if(e.success){this.cargando.set(!1);let i=e.data;i[0].destacado==1?(this.index.update(s=>s+9),this.destacado=i[0],i.splice(0,1),this.arr_magazines.set(i),this.exist_destacado.set(!0)):(this.index.set(0),this.arr_magazines.set(i),this.exist_destacado.set(!1))}})}toggelFiltro(){this.is_filtro_visible.update(e=>!e),this.is_filtro_visible()||(this.cargarDatos(),this.exist_filtro.set(!1))}scroll(e){if(!this.cargando()&&!this.is_disable_scroll()){let i=window.scrollY,s=window.innerHeight,o=this.list_cards.nativeElement.offsetHeight,v=this.list_cards.nativeElement.offsetTop;i+s>o+v-600&&(this.cargando.set(!0),this.seccion()!="razas"?this.exist_filtro()?this._destacadosService.getMagazinesFiltradoArticulos(u,this.categorias(),this.empresas(),this.autores(),this.palabra_buscada(),this.index(),8).subscribe({next:a=>{a.success&&(this.index.update(l=>l+8),this.arr_magazines.update(l=>[...l,...a.data.resultados]),this.numero_resultados.set(a.data.cantidad),setTimeout(()=>{this.cargando.set(!1)},1e3))},error:()=>{this.cargando.set(!1)}}):this._destacadosService.getMagazines(u,this.num_seccion(),this.index(),this.num_seccion()!=10?8:9).subscribe(a=>{if(a.success){let l=a.data;this.index.update(p=>p+9),this.arr_magazines.update(p=>[...p,...l]),a.data.length==0&&this.numero_resultados.set(this.arr_magazines().length),setTimeout(()=>{this.cargando.set(!1)},1e3)}}):this._razasService.getRazas(u,0,8).subscribe(a=>{if(a.success){let l=a.data;this.index.update(p=>p+8),this.arr_magazines.update(p=>[...p,...l]),a.data.length==0&&this.numero_resultados.set(this.arr_magazines().length),setTimeout(()=>{this.cargando.set(!1)},1e3)}}))}}filtrar(e){this.cargando()||(e.empresas_seleccinadas.length!=0||e.categorias_seleccinadas.length!=0||e.autores_seleccinadas.length!=0||e.palabra_buscada.trim()!=""?(this.categorias.set(e.categorias_seleccinadas.join()),this.empresas.set(e.empresas_seleccinadas.join()),this.autores.set(e.autores_seleccinadas.join()),this.palabra_buscada.set(e.palabra_buscada),this.index.set(0),this.exist_filtro.set(!0),this._destacadosService.getMagazinesFiltradoArticulos(u,this.categorias(),this.empresas(),this.autores(),this.palabra_buscada(),0,8).subscribe(i=>{i.success&&(this.arr_magazines.set(i.data.resultados),this.numero_resultados.set(i.data.cantidad),this.index.update(s=>s+8))})):(this.categorias.set(""),this.empresas.set(""),this.autores.set(""),this.palabra_buscada.set(""),this.index.set(0),this.exist_filtro.set(!1),this._destacadosService.getMagazines(u,this.num_seccion(),0,8).subscribe(i=>{if(i.success){this.cargando.set(!1);let s=i.data;s[0].destacado==1?(this.index.update(o=>o+9),this.destacado=s[0],s.splice(0,1),this.arr_magazines.set(s),this.exist_destacado.set(!0)):(this.index.set(0),this.arr_magazines.set(s),this.exist_destacado.set(!1))}})))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=E({type:t,selectors:[["app-destacados"]],viewQuery:function(i,s){if(i&1&&N(X,5),i&2){let o;k(o=O())&&(s.list_cards=o.first)}},standalone:!0,features:[j],decls:17,vars:7,consts:[["list_cards",""],[3,"scroll"],[1,"bg-c-site","d-flex","gap-1","justify-content-space-between","align-items-center","mb-1","p-1","pl-2","pr-2"],[1,"cont__title__section","text-upcase","text-c-white","ff-sans-condensed","lh-1_1","mb-0_5"],[1,"descripcion-pagina","text-c-white","fw-400"],[1,"cont-boton-filtro","text-c-white","text-upcase","cursor-pointer"],[1,"separador-contenido-barra","bg-c-site","p-1_5","mt-1","mb-1"],[1,"cont-lista-cartas"],[2,"height","18.56px"],[1,"cont-boton-filtro","text-c-white","text-upcase","cursor-pointer",3,"click"],[1,"icon-pec-filtro"],[3,"onFiltros","numero_resultados"],[3,"destacado","seccion_name","url","icon"],[2,"height","640px"],[3,"magazine","url","icon"],[2,"height","460px"]],template:function(i,s){if(i&1){let o=w();g(0,"section",1),P("scroll",function(a){return b(o),D(s.scroll(a))},!1,R),g(1,"div",2)(2,"div")(3,"h1",3),F(4),B(5,"titlecase"),_(),d(6,ie,2,1,"h2",4)(7,se,1,0),_(),d(8,ae,3,0,"div",5),_(),d(9,ce,4,0)(10,_e,1,1),r(11,"div",6),g(12,"div",7,0),y(14,ue,4,0,null,null,V),_(),d(16,pe,1,0,"app-msg-sin-contenido"),_()}i&2&&(m(4),A(L(5,5,s.name_seccion())),m(2),C(6,s.description().trim().length!=0?6:7),m(2),C(8,s.seccion()=="articulos"?8:-1),m(),C(9,s.seccion()=="articulos"&&s.is_filtro_visible()?9:10),m(5),M(s.arr_magazines()),m(2),C(16,s.arr_magazines().length==s.numero_resultados()?16:-1))},dependencies:[H,W,K],styles:[".cont-lista-cartas[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:1rem}@media (min-width: 768px){.cont-lista-cartas[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}"]})}}return t})();export{Ae as default};
