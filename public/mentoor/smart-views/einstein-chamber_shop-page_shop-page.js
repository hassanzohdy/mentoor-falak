_Component({
                selector: 'shop-page',
                c: 'EinsteinChamberShop', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','categories'],
                children: {cI2L1XmQ3:'flk-spinner',c8NbuLwfI:'champer-moderate',coBoL8aRD:'new-item-btn',cVdLcVK3_:'einstein-category-card',cs4FD951S:'layout'},
                render: function (component) {
                    let cmpJZzh = this._lc('cs4FD951S', {parent:component,content:(layout) => {let cndN0pO = component.isLoading;
this.setState('stnok6Y', cndN0pO);
let cndM99s = !(cndN0pO);
this.setState('stoljNs', cndM99s);
if (cndN0pO) { 
let cmpdW1n = this._lc('cI2L1XmQ3', {parent:component,parentTop:layout,state:'stnok6Y'});
}else { 
let elGTLRB = eo('div',null,null,`class`,`m-b-2 d-flex justify-content-between`);
let elNy8IX = eo('div',null,null,`class`,`meta`);
let elmt0He = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let el2eH56 = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let elI_eGW = eo('span',null,null,`class`,`shop badge badge-default m-l-1`);
text(`Shop`);
ec('span');
ec('div');
let cmpybpV = this._lc('c8NbuLwfI', {parent:component,parentTop:layout,state:'stoljNs'});
let cmpc8Ft = this._lc('coBoL8aRD', {parent:component,parentTop:layout,props:{label:'Add new challenge',icon:'plus',color:'success',link:'/einstein-chamber/new-puzzle'},attrs:{class:`${fas('plus') + ' icon'}`},style:{color:`${'success'}`},state:'stoljNs'});
ec('div');
let elknztb = eo('div',null,null,`class`,`row`);
for (let i in component.categories) {
let category = component.categories[i]; 
 let iiwP5V = 'Tc2yxS7' + i;
let el75Xt6 = eo('div','CtvFw77ztXIl' + i+iiwP5V,null,`class`,`col-6 col-sm-4 col-md-3 m-b-2`);
let cmpf6hc = this._lc('cVdLcVK3_', {parent:component,parentTop:layout,props:{category:category},state:'stoljNs',insideLoop:true,index:"" +iiwP5V});
ec('div');
}
ec('div');
}}});

                    this.isReadyToGo();
                }
        });