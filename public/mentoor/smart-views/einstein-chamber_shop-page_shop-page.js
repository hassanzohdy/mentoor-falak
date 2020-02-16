_Component({
                selector: 'shop-page',
                c: 'EinsteinChamberShop', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','categories'],
                children: {crE6jQ5On:'flk-spinner',cGU1kcm9N:'einstein-category-card',ctn7P8nWy:'layout'},
                render: function (component) {
                    let cmp5sHr = this._lc('ctn7P8nWy', {parent:component,content:(layout) => {let cndprVh = component.isLoading;
this.setState('stZ_3cW', cndprVh);
let cndiiqA = !(cndprVh);
this.setState('stu_IHr', cndiiqA);
if (cndprVh) { 
let cmpwSS1 = this._lc('crE6jQ5On', {parent:component,parentTop:layout,state:'stZ_3cW'});
}else { 
let elWwMMd = eo('div',null,null,`class`,`m-b-2`);
let elXn7I1 = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let el5kEg3 = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let elEMNsK = eo('span',null,null,`class`,`shop badge badge-default m-l-1`);
text(`Shop`);
ec('span');
ec('div');
let elZgRJd = eo('div',null,null,`class`,`row`);
for (let i in component.categories) {
let category = component.categories[i]; 
 let iioQYw = 'WYRNHPj' + i;
let elSMokH = eo('div','fxmhWekZW4sW' + i+iioQYw,null,`class`,`col-6 col-sm-4 col-md-3 m-b-2`);
let cmp_WYk = this._lc('cGU1kcm9N', {parent:component,parentTop:layout,props:{category:category},state:'stu_IHr',insideLoop:true,index:"" +iioQYw});
ec('div');
}
ec('div');
}}});

                    this.isReadyToGo();
                }
        });