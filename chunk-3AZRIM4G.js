import{b as y}from"./chunk-Y5MFQ2LY.js";import{h as E}from"./chunk-HY274QHY.js";import{W as b,na as S}from"./chunk-KPZBUCCV.js";import{a as f}from"./chunk-QR7RS26O.js";import"./chunk-HCO6HHKT.js";import{b as w}from"./chunk-RGXTWLH4.js";import"./chunk-VIKG75FC.js";import{Eb as _,Ka as m,La as v,Pb as c,Qa as n,Qb as l,T as u,Z as p,Zb as x,_a as P,_b as O,da as M,eb as d,jb as r,pb as g,ub as t,vb as o,wb as a}from"./chunk-COZJJN5U.js";var k=f.ruta_base_api,z=(()=>{class i{constructor(){this._http=p(w)}getEventos(e){return this._http.get(`${k}home/eventos/${e}`)}static{this.\u0275fac=function(s){return new(s||i)}}static{this.\u0275prov=u({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var H=()=>["/eventos"];function L(i,C){if(i&1&&(t(0,"div",8)(1,"a",10)(2,"div",11),a(3,"img",12),o(),t(4,"div",13),a(5,"h4",14),t(6,"div",15)(7,"div",16),a(8,"span",17),t(9,"span",18),c(10),o()(),t(11,"div",19)(12,"span",20),a(13,"span",21)(14,"span",22)(15,"span",23)(16,"span",24),o(),t(17,"span",18),c(18),o()()()()()()),i&2){let e=_();n(),r("href","evento/"+e.arr_eventos()[0].liga,v),n(2),r("src",e.arr_eventos()[0].resource.medium,v),n(2),r("innerHTML",e.arr_eventos()[0].nombre,m),n(5),l(e.arr_eventos()[0].fecha),n(8),l(e.arr_eventos()[0].ubicacion)}}function T(i,C){if(i&1&&(t(0,"div",8)(1,"a",10)(2,"div",11),a(3,"img",25),o(),t(4,"div",13),a(5,"h4",14),t(6,"div",15)(7,"div",16),a(8,"span",17),t(9,"span",18),c(10),o()(),t(11,"div",19)(12,"span",20),a(13,"span",21)(14,"span",22)(15,"span",23)(16,"span",24),o(),t(17,"span",18),c(18),o()()()()()()),i&2){let e=_();n(),r("href","evento/"+e.arr_eventos()[1].liga,v),n(2),r("src",e.arr_eventos()[1].resource.medium,v),n(2),r("innerHTML",e.arr_eventos()[1].nombre,m),n(5),l(e.arr_eventos()[1].fecha),n(8),l(e.arr_eventos()[1].ubicacion)}}function U(i,C){if(i&1&&(t(0,"div",8)(1,"a",10)(2,"div",11),a(3,"img",26),o(),t(4,"div",13),a(5,"h4",14),t(6,"div",15)(7,"div",16),a(8,"span",17),t(9,"span",18),c(10),o()(),t(11,"div",19)(12,"span",20),a(13,"span",21)(14,"span",22)(15,"span",23)(16,"span",24),o(),t(17,"span",18),c(18),o()()()()()()),i&2){let e=_();n(),r("href","evento/"+e.arr_eventos()[2].liga,v),n(2),r("src",e.arr_eventos()[2].resource.small,v),n(2),r("innerHTML",e.arr_eventos()[2].nombre,m),n(5),l(e.arr_eventos()[2].fecha),n(8),l(e.arr_eventos()[2].ubicacion)}}var j=f.division,W=(()=>{class i{constructor(){this._eventosService=p(z),this.arr_eventos=P([])}ngOnInit(){this._eventosService.getEventos(j).subscribe(e=>{this.arr_eventos.set(e.data);let s=new E(".swiper-eventos",{modules:[y],loop:!1,pagination:{el:".swiper-pagination-eventos",clickable:!0},spaceBetween:16,breakpoints:{0:{slidesPerView:1},568:{slidesPerView:2},1024:{slidesPerView:3}}})})}static{this.\u0275fac=function(s){return new(s||i)}}static{this.\u0275cmp=M({type:i,selectors:[["app-eventos"]],standalone:!0,features:[x],decls:17,vars:5,consts:[[1,"top__seccion","bd-bottom","bd-c-site","mb-2","bd-w-2","d-flex","justify-content-space-between","align-items-center","lh-1"],[1,"top__seccion-tag","bg-c-site","text-c-white","ff-roboto","fw-500"],[1,"text-c-site","ff-roboto","fw-500",3,"routerLink"],[1,"icon-pec-circulo-flecha"],[1,"cont-carr-eventos","pos-relative"],[1,"swiper","swiper-eventos"],[1,"swiper-wrapper"],[1,"swiper-slide"],[1,"evento-carta","w-100","bg-c-white"],[1,"swiper-pagination","swiper-pagination-eventos"],[3,"href"],[1,"evento-img","font-size-0","position-relative","d-flex"],["loading","lazy","width","267","height","152","alt","evento 1",1,"w-100","h-100",3,"src"],[1,"evento-contenido"],[1,"cut-text","cut-2","text-c-dark","mb-1",3,"innerHTML"],[1,"evento-botones"],[1,"fecha-evento","d-flex","gap-0_5","text-c-white"],[1,"icon-pec-carta-calendario","text-c-site"],[1,"cut-text","cut-1"],[1,"lugar-evento","d-flex","gap-0_5","text-c-white"],[1,"icon-pec-pin"],[1,"path1"],[1,"path2"],[1,"path3"],[1,"path4"],["loading","lazy","width","267","height","152","alt","evento 2",1,"w-100","h-100",3,"src"],["loading","lazy","width","267","height","152","alt","evento 3",1,"w-100","h-100",3,"src"]],template:function(s,h){s&1&&(t(0,"section")(1,"div",0)(2,"span",1),c(3,"Eventos"),o(),t(4,"a",2),c(5," Ver todo "),a(6,"span",3),o()(),t(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7),d(11,L,19,5,"div",8),o(),t(12,"div",7),d(13,T,19,5,"div",8),o(),t(14,"div",7),d(15,U,19,5,"div",8),o()()(),a(16,"div",9),o()()),s&2&&(n(4),r("routerLink",O(4,H)),n(7),g(11,h.arr_eventos()[0]?11:-1),n(2),g(13,h.arr_eventos()[1]?13:-1),n(2),g(15,h.arr_eventos()[2]?15:-1))},dependencies:[S,b],styles:[".cont-carr-eventos[_ngcontent-%COMP%]   .evento-carta[_ngcontent-%COMP%]   .evento-img[_ngcontent-%COMP%]{aspect-ratio:16/9}.cont-carr-eventos[_ngcontent-%COMP%]   .evento-carta[_ngcontent-%COMP%]   .evento-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover}.cont-carr-eventos[_ngcontent-%COMP%]   .evento-carta[_ngcontent-%COMP%]   .evento-contenido[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{line-height:1.1;padding:.65rem;height:55px;font-size:1.65rem;font-weight:500}.cont-carr-eventos[_ngcontent-%COMP%]   .evento-carta[_ngcontent-%COMP%]   .evento-contenido[_ngcontent-%COMP%]   .evento-botones[_ngcontent-%COMP%]{background-color:#585858}.cont-carr-eventos[_ngcontent-%COMP%]   .evento-carta[_ngcontent-%COMP%]   .evento-contenido[_ngcontent-%COMP%]   .evento-botones[_ngcontent-%COMP%]   [class^=icon-][_ngcontent-%COMP%]{font-size:1.5rem}.cont-carr-eventos[_ngcontent-%COMP%]   .evento-carta[_ngcontent-%COMP%]   .evento-contenido[_ngcontent-%COMP%]   .evento-botones[_ngcontent-%COMP%]   .fecha-evento[_ngcontent-%COMP%]{border-bottom:1px solid #fff}.cont-carr-eventos[_ngcontent-%COMP%]   .evento-carta[_ngcontent-%COMP%]   .evento-contenido[_ngcontent-%COMP%]   .evento-botones[_ngcontent-%COMP%]   .fecha-evento[_ngcontent-%COMP%], .cont-carr-eventos[_ngcontent-%COMP%]   .evento-carta[_ngcontent-%COMP%]   .evento-contenido[_ngcontent-%COMP%]   .evento-botones[_ngcontent-%COMP%]   .lugar-evento[_ngcontent-%COMP%]{padding:.65rem;font-size:1rem;font-weight:500}@media (max-width: 1023px){.cont-carr-eventos[_ngcontent-%COMP%]{margin-bottom:5rem}.cont-carr-eventos[_ngcontent-%COMP%]   .swiper-pagination[_ngcontent-%COMP%]{bottom:-3.5rem}}"]})}}return i})();export{W as EventosComponent};
