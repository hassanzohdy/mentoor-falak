_Component({
                selector: 'shop-page',
                c: 'EinsteinChamberShop', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','categories'],
                children: {cn6WTAZwB:'flk-spinner',c57kXE99G:'einstein-category-card',c3RmXZHRa:'layout'},
                render: function (component) {
                    let cmp30Ag = this._lc('c3RmXZHRa', {parent:component,content:(layout) => {let cndgOJF = component.isLoading;
this.setState('stOwOlS', cndgOJF);
let cndA6cX = !(cndgOJF);
this.setState('stoN5ap', cndA6cX);
if (cndgOJF) { 
let cmpr1do = this._lc('cn6WTAZwB', {parent:component,parentTop:layout,state:'stOwOlS'});
}else { 
let elNvBb4 = eo('div',null,null,`class`,`m-b-2`);
let elprZnj = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let eliGwJc = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let elWrno4 = eo('span',null,null,`class`,`shop badge badge-default m-l-1`);
text(`Shop`);
ec('span');
ec('div');
let elKdC0B = eo('div',null,null,`class`,`row`);
for (let i in component.categories) {
let category = component.categories[i]; 
 let iikC2k = '_OBEuG8' + i;
let elrdEAM = eo('div','tGFxsybrGDyk' + i+iikC2k,null,`class`,`col-6 col-sm-4 col-md-3 m-b-2`);
let cmpCxV7 = this._lc('c57kXE99G', {parent:component,parentTop:layout,props:{category:category},state:'stoN5ap',insideLoop:true,index:"" +iikC2k});
ec('div');
}
ec('div');
}}});

                    this.isReadyToGo();
                }
        });