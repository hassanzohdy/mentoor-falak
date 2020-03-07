_Component({
                selector: 'shop-page',
                c: 'EinsteinChamberShop', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','categories'],
                children: {cxoOtb4dd:'flk-spinner',cU2b7FT6m:'champer-moderate',cWmRdMZEa:'einstein-category-card',ceKK374s3:'layout'},
                render: function (component) {
                    let cmpEQHS = this._lc('ceKK374s3', {parent:component,content:(layout) => {let cnd9NBa = component.isLoading;
this.setState('stuQxIl', cnd9NBa);
let cndBwi3 = !(cnd9NBa);
this.setState('st_25fu', cndBwi3);
if (cnd9NBa) { 
let cmpBqRj = this._lc('cxoOtb4dd', {parent:component,parentTop:layout,state:'stuQxIl'});
}else { 
let elhD9UJ = eo('div',null,null,`class`,`m-b-2 d-flex justify-content-between`);
let el7em9_ = eo('div',null,null,`class`,`meta`);
let elKDkLt = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let el25KTi = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let elM7yJ_ = eo('span',null,null,`class`,`shop badge badge-default m-l-1`);
text(`Shop`);
ec('span');
ec('div');
let cmp72mz = this._lc('cU2b7FT6m', {parent:component,parentTop:layout,state:'st_25fu'});
ec('div');
let elx861H = eo('div',null,null,`class`,`row`);
for (let i in component.categories) {
let category = component.categories[i]; 
 let iiagtX = 'IkQTngR' + i;
let elnaE3d = eo('div','9X0TjrDwKX9T' + i+iiagtX,null,`class`,`col-6 col-sm-4 col-md-3 m-b-2`);
let cmpD00A = this._lc('cWmRdMZEa', {parent:component,parentTop:layout,props:{category:category},state:'st_25fu',insideLoop:true,index:"" +iiagtX});
ec('div');
}
ec('div');
}}});

                    this.isReadyToGo();
                }
        });