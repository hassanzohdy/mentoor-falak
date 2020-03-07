_Component({
                selector: 'shop-page',
                c: 'EinsteinChamberShop', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','categories'],
                children: {cGAZSbiqk:'flk-spinner',cnp0yBBQu:'champer-moderate',cx_A0S7_5:'einstein-category-card',cBNgCDT2d:'layout'},
                render: function (component) {
                    let cmp35Kl = this._lc('cBNgCDT2d', {parent:component,content:(layout) => {let cndgNSo = component.isLoading;
this.setState('stkwjZH', cndgNSo);
let cndozE6 = !(cndgNSo);
this.setState('st8yK9d', cndozE6);
if (cndgNSo) { 
let cmp0aBd = this._lc('cGAZSbiqk', {parent:component,parentTop:layout,state:'stkwjZH'});
}else { 
let elXEMJu = eo('div',null,null,`class`,`m-b-2 d-flex justify-content-between`);
let elojfKM = eo('div',null,null,`class`,`meta`);
let elYg7TE = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elI0wJB = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let elh4zdn = eo('span',null,null,`class`,`shop badge badge-default m-l-1`);
text(`Shop`);
ec('span');
ec('div');
let cmp6ySH = this._lc('cnp0yBBQu', {parent:component,parentTop:layout,state:'st8yK9d'});
ec('div');
let elTsHCV = eo('div',null,null,`class`,`row`);
for (let i in component.categories) {
let category = component.categories[i]; 
 let iiCeRn = 'RRn5Px8' + i;
let elAANjE = eo('div','tuf2K4fHkGda' + i+iiCeRn,null,`class`,`col-6 col-sm-4 col-md-3 m-b-2`);
let cmpMXRO = this._lc('cx_A0S7_5', {parent:component,parentTop:layout,props:{category:category},state:'st8yK9d',insideLoop:true,index:"" +iiCeRn});
ec('div');
}
ec('div');
}}});

                    this.isReadyToGo();
                }
        });