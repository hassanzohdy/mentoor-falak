_Component({
                selector: 'shop-page',
                c: 'EinsteinChamberShop', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','categories'],
                children: {c4aYY98iH:'flk-spinner',c1D5AMufW:'champer-moderate',c3aonEInv:'einstein-category-card',cU60nT_dB:'layout'},
                render: function (component) {
                    let cmp1OiL = this._lc('cU60nT_dB', {parent:component,content:(layout) => {let cndDiqN = component.isLoading;
this.setState('stT4nUH', cndDiqN);
let cndtjVC = !(cndDiqN);
this.setState('stKtK3w', cndtjVC);
if (cndDiqN) { 
let cmpE8tf = this._lc('c4aYY98iH', {parent:component,parentTop:layout,state:'stT4nUH'});
}else { 
let elsKF2c = eo('div',null,null,`class`,`m-b-2 d-flex justify-content-between`);
let elOZOGJ = eo('div',null,null,`class`,`meta`);
let el7lUIv = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elGnK1V = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let elMD5uI = eo('span',null,null,`class`,`shop badge badge-default m-l-1`);
text(`Shop`);
ec('span');
ec('div');
let cmpY1Vy = this._lc('c1D5AMufW', {parent:component,parentTop:layout,state:'stKtK3w'});
ec('div');
let elE7W8q = eo('div',null,null,`class`,`row`);
for (let i in component.categories) {
let category = component.categories[i]; 
 let iiQDYa = 'B2SuUic' + i;
let elcPnix = eo('div','uf8R0hbmIqIa' + i+iiQDYa,null,`class`,`col-6 col-sm-4 col-md-3 m-b-2`);
let cmpxMVJ = this._lc('c3aonEInv', {parent:component,parentTop:layout,props:{category:category},state:'stKtK3w',insideLoop:true,index:"" +iiQDYa});
ec('div');
}
ec('div');
}}});

                    this.isReadyToGo();
                }
        });