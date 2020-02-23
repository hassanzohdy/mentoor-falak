_Component({
                selector: 'shop-page',
                c: 'EinsteinChamberShop', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','categories'],
                children: {cGFNLhszh:'flk-spinner',cN5LGEzJv:'champer-moderate',cVGWzYB5K:'einstein-category-card',cjlWfkcSU:'layout'},
                render: function (component) {
                    let cmpAWYt = this._lc('cjlWfkcSU', {parent:component,content:(layout) => {let cndAshg = component.isLoading;
this.setState('stSO8KG', cndAshg);
let cnd1Elt = !(cndAshg);
this.setState('stFthFO', cnd1Elt);
if (cndAshg) { 
let cmpqD2Z = this._lc('cGFNLhszh', {parent:component,parentTop:layout,state:'stSO8KG'});
}else { 
let elsiawW = eo('div',null,null,`class`,`m-b-2 d-flex justify-content-between`);
let elNJF_G = eo('div',null,null,`class`,`meta`);
let elzz0Cv = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elU9wMD = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let elWug6i = eo('span',null,null,`class`,`shop badge badge-default m-l-1`);
text(`Shop`);
ec('span');
ec('div');
let cmpWp2r = this._lc('cN5LGEzJv', {parent:component,parentTop:layout,state:'stFthFO'});
ec('div');
let el18oDG = eo('div',null,null,`class`,`row`);
for (let i in component.categories) {
let category = component.categories[i]; 
 let iiD2x3 = 'Qbb2Nlj' + i;
let elJtz8_ = eo('div','kHt24AdZdcgn' + i+iiD2x3,null,`class`,`col-6 col-sm-4 col-md-3 m-b-2`);
let cmpJdwX = this._lc('cVGWzYB5K', {parent:component,parentTop:layout,props:{category:category},state:'stFthFO',insideLoop:true,index:"" +iiD2x3});
ec('div');
}
ec('div');
}}});

                    this.isReadyToGo();
                }
        });