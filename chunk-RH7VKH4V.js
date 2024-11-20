import{b as W,d as L,g as z,u as H}from"./chunk-TOZGBBW3.js";import{a as S}from"./chunk-QR7RS26O.js";import{b as N}from"./chunk-RGXTWLH4.js";import{u as O,w as A}from"./chunk-VIKG75FC.js";import{Db as f,Eb as d,Ib as m,Pb as p,Qa as s,Qb as h,T as I,Vb as M,Wb as D,Xb as j,Z as g,Zb as P,_a as c,ca as E,cc as B,da as T,ec as $,jb as F,ma as b,na as x,qb as k,sa as V,sb as y,tb as C,ua as v,ub as o,vb as r,wb as _,zb as w}from"./chunk-COZJJN5U.js";var G=S.ruta_base_api,R=(()=>{class a{constructor(){this._http=g(N),this.isFiltrosVisibles$=new v}getFiltraFiltros(e,t,i,n){let l=new FormData;return l.append("division",e.toString()),l.append("categoria",t),l.append("empresa",i),l.append("autor",n),this._http.post(`${G}magazine/filtra_filtros_articulos`,l)}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})();function J(a,u){if(a&1){let e=w();o(0,"li",6)(1,"input",14),f("click",function(){let i=b(e).$implicit,n=d();return x(n.updateFiltros("categorias",i.id))}),r(),o(2,"label",15),p(3),r()()}if(a&2){let e=u.$implicit,t=d();s(),m("id","id_cat-",e.id,""),F("checked",t.categorias_seleccionadas().includes(e.id)?"checked":""),s(),m("for","id_cat-",e.id,""),s(),h(e.nombre)}}function K(a,u){if(a&1){let e=w();o(0,"li",6)(1,"input",16),f("click",function(){let i=b(e).$implicit,n=d();return x(n.updateFiltros("empresas",i.id))}),r(),o(2,"label",15),p(3),r()()}if(a&2){let e=u.$implicit,t=d();s(),m("id","ce-",e.id,""),F("checked",t.empresas_seleccionadas().includes(e.id)?"checked":""),s(),m("for","ce-",e.id,""),s(),h(e.nombre)}}function Q(a,u){if(a&1){let e=w();o(0,"li",6)(1,"input",17),f("click",function(){let i=b(e).$implicit,n=d();return x(n.updateFiltros("autores",i.id))}),r(),o(2,"label",15),p(3),r()()}if(a&2){let e=u.$implicit,t=d();s(),m("id","ca-",e.id,""),F("checked",t.autores_seleccionadas().includes(e.id)?"checked":""),s(),m("for","ca-",e.id,""),s(),h(e.nombre)}}var U=S.division,me=(()=>{class a{constructor(){this._filtroService=g(R),this.numero_resultados=V(0),this.onFiltros=new v,this.mapaPlural={"=0":"0 resultados encontrados.","=1":"1 resultado encontrado.",other:"# resultados encontrados."},this.arr_categorias=c([]),this.arr_empresas=c([]),this.arr_autores=c([]),this.categorias_seleccionadas=c([]),this.empresas_seleccionadas=c([]),this.autores_seleccionadas=c([]),this.palabra_buscada=c(""),this._filtroService.getFiltraFiltros(U,"0","0","0").subscribe(e=>{e.success&&(this.arr_categorias.set(e.data.categorias),this.arr_empresas.set(e.data.empresas),this.arr_autores.set(e.data.autores))})}updateFiltros(e,t){switch(e){case"categorias":this.categorias_seleccionadas().includes(t)?this.categorias_seleccionadas().splice(this.categorias_seleccionadas().indexOf(t),1):this.categorias_seleccionadas().push(t);break;case"empresas":this.empresas_seleccionadas().includes(t)?this.empresas_seleccionadas().splice(this.empresas_seleccionadas().indexOf(t),1):this.empresas_seleccionadas().push(t);break;case"autores":this.autores_seleccionadas().includes(t)?this.autores_seleccionadas().splice(this.autores_seleccionadas().indexOf(t),1):this.autores_seleccionadas().push(t);break;default:break}this._filtroService.getFiltraFiltros(U,this.categorias_seleccionadas().join(),this.empresas_seleccionadas().join(),this.autores_seleccionadas().join()).subscribe(i=>{i.success&&(this.arr_categorias.set(i.data.categorias),this.arr_empresas.set(i.data.empresas),this.arr_autores.set(i.data.autores))}),this.onFiltros.emit({categorias_seleccinadas:this.categorias_seleccionadas(),empresas_seleccinadas:this.empresas_seleccionadas(),autores_seleccinadas:this.autores_seleccionadas(),palabra_buscada:this.palabra_buscada()})}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275cmp=T({type:a,selectors:[["app-filtro"]],inputs:{numero_resultados:[E.SignalBased,"numero_resultados"]},outputs:{onFiltros:"onFiltros"},standalone:!0,features:[P],decls:33,vars:5,consts:[[1,"cont-filtro-principal","pt-1","pb-1","mb-1"],[1,"filtro-general","d-flex","flex-wrap","w-100"],[1,"filtro-col","w-100","p-0","mt-1"],[1,"titulo-filtro","ff-sans-condensed","text-c-dark-gray","pr-2","pl-2"],[1,"separador-filtro","mt-1_5","mb-1_5","ml-2","mr-2","bg-c-site"],[1,"lista-elementos-filtro","pl-2","pr-2"],[2,"display","block"],[1,"filtro-buscador","d-flex","gap-1","flex-wrap","w-100","mt-2","mb-1","pr-2","pl-2"],[1,"filtro-form","flex-grow-3"],[1,"filtro-form-grupo","d-flex","align-items-center"],["type","text","name","palabra_buscada",1,"bor-rad-15","w-100","pl-1_5","pr-1_5",3,"ngModelChange","keyup","ngModel"],["type","submit",1,"icon-pec-lupa","bor-rad-15","pos-relative","bg-c-gray"],[1,"filtro-num-result","d-flex","align-items-center","flex-grow-1"],["id","num-res-filtro",1,"pos-relative","pl-1_5","fw-lighter"],["type","checkbox",1,"check_categoria",3,"click","checked","id"],[1,"fw-bold","pos-relative",3,"for"],["type","checkbox",1,"check_empresa",3,"click","checked","id"],["type","checkbox",1,"check_autor",3,"click","checked","id"]],template:function(t,i){t&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4",3),p(4,"Categor\xEDas"),r(),_(5,"hr",4),o(6,"ul",5),y(7,J,4,6,"li",6,k),r()(),o(9,"div",2)(10,"h4",3),p(11,"Empresas"),r(),_(12,"hr",4),o(13,"ul",5),y(14,K,4,6,"li",6,k),r()(),o(16,"div",2)(17,"h4",3),p(18,"Autores"),r(),_(19,"hr",4),o(20,"ul",5),y(21,Q,4,6,"li",6,k),r()()(),o(23,"div",7)(24,"div",8)(25,"div",9)(26,"input",10),j("ngModelChange",function(l){return D(i.palabra_buscada,l)||(i.palabra_buscada=l),l}),f("keyup",function(){return i.updateFiltros("",0)}),r(),_(27,"button",11),r()(),o(28,"div",12)(29,"i")(30,"span",13),p(31),B(32,"i18nPlural"),r()()()()()),t&2&&(s(7),C(i.arr_categorias()),s(7),C(i.arr_empresas()),s(7),C(i.arr_autores()),s(5),M("ngModel",i.palabra_buscada),s(5),h($(32,2,i.numero_resultados(),i.mapaPlural)))},dependencies:[A,O,H,W,L,z],changeDetection:0})}}return a})();export{me as FiltroComponent};
