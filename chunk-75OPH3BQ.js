import{b as F,c as u,d as w,e as x,h as L,j as G,k as M,t as E,v as N}from"./chunk-TOZGBBW3.js";import{h as O,i as k}from"./chunk-B2E53Q3J.js";import"./chunk-ARH7HIPE.js";import{V as b,W as y}from"./chunk-KPZBUCCV.js";import{a as p}from"./chunk-QR7RS26O.js";import{b as _}from"./chunk-HCO6HHKT.js";import"./chunk-RGXTWLH4.js";import{k as C,w as S}from"./chunk-VIKG75FC.js";import{$b as c,Db as f,Pb as m,Qa as r,Z as s,Zb as h,_b as v,da as g,jb as n,ub as a,vb as l,wb as d}from"./chunk-COZJJN5U.js";var D=t=>({"invalid-input":t}),P=t=>({active:t}),T=t=>({"bg-c-site":t}),B=()=>["/restablecer-contrasena"],X=(()=>{class t{constructor(){this.route=s(b),this.titleService=s(_),this.formBuilder=s(E),this._usuarioService=s(k),this._loginService=s(O),this.division=p.division,this.errorLogin=!1,this.errorMessagge="",this.formGroup=this.formBuilder.group({email:["",[u.required,u.email]],password:["",[u.required]]}),this.titleService.setTitle("Iniciar Sesi\xF3n en "+p.nombre_division+p.dominio),this._loginService.existLogin().subscribe(i=>{i&&this.route.navigate(["/"])})}ngOnInit(){}Login(){this.formGroup.valid&&this._loginService.login(this.formGroup.value.email,this.formGroup.value.password).subscribe(i=>{if(i.success)this._usuarioService.saveUser(i.data),this._usuarioService.setToken(i.data.token),location.replace("/");else{this.errorMessagge=i.msg||"",this.errorLogin=!0,setTimeout(()=>{this.errorLogin=!1},4e3);return}})}getError(i){let o=!1,e=this.formGroup.get(i);return e!=null&&e.touched&&e.errors!=null&&(o=!0),o}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=g({type:t,selectors:[["app-login"]],standalone:!0,features:[h],decls:16,vars:16,consts:[[1,"cont-login","bg-c-white","m-0-auto"],[1,"separador-contenido-barra","text-upcase","bg-c-site","p-1","text-c-white","ff-sans-condensed","fw-700","fsz-medium","mb-1"],[1,"cont-form","p-3","m-0-auto"],[3,"ngSubmit","formGroup"],[1,"form-grupo","txt-alg-rg"],["type","email","name","email","placeholder","Correo Electr\xF3nico","formControlName","email",1,"form-control",3,"ngClass"],["type","password","name","password","placeholder","Contrase\xF1a","formControlName","password",1,"form-control",3,"ngClass"],[1,"alert-danger","pb-1","w-100","text-center","d-block","text-c-site",3,"ngClass"],["type","submit",1,"boton-general",3,"disabled","ngClass"],[1,"separador-linea-contenido"],[1,"text-c-site",3,"routerLink"]],template:function(o,e){o&1&&(a(0,"section")(1,"div",0)(2,"div",1),m(3," Iniciar Sesi\xF3n "),l(),a(4,"div",2)(5,"form",3),f("ngSubmit",function(){return e.Login()}),a(6,"div",4),d(7,"input",5)(8,"input",6),a(9,"span",7),m(10,"*Correo / Constrase\xF1a incorrectos."),l(),a(11,"button",8),m(12,"Entrar"),l(),d(13,"hr",9),a(14,"a",10),m(15,"Olvid\xE9 la contrase\xF1a"),l()()()()()()),o&2&&(r(5),n("formGroup",e.formGroup),r(2),n("ngClass",c(7,D,e.getError("email"))),r(),n("ngClass",c(9,D,e.getError("password"))),r(),n("ngClass",c(11,P,e.errorLogin)),r(2),n("disabled",e.formGroup.invalid)("ngClass",c(13,T,e.formGroup.valid)),r(3),n("routerLink",v(15,B)))},dependencies:[S,C,N,L,F,w,x,G,M,y],styles:[".cont-login[_ngcontent-%COMP%]{width:90%;max-width:1140px;min-height:350px}@media (max-width: 767px){.cont-login[_ngcontent-%COMP%]{margin-top:3rem}}.cont-login[_ngcontent-%COMP%]   .cont-form[_ngcontent-%COMP%]{max-width:370px}.alert-danger[_ngcontent-%COMP%]{transition:opacity 1s,height 2s;height:0;opacity:0}.active[_ngcontent-%COMP%]{height:25px;opacity:1;transition:opacity 2s,height 1s}"],changeDetection:0})}}return t})();export{X as default};
