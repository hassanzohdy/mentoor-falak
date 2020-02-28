_Component({
                selector: 'shop-page',
                c: 'EinsteinChamberShop', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','categories'],
                children: {cjHlLmn2Y:'flk-spinner',cMYj9wedg:'champer-moderate',cKxoWVzCW:'einstein-category-card',cDlsLr0AR:'layout'},
                render: function (component) {
                    let cmpg3wt = this._lc('cDlsLr0AR', {parent:component,content:(layout) => {let cndj9VA = component.isLoading;
this.setState('stzoNu5', cndj9VA);
let cndL7DQ = !(cndj9VA);
this.setState('stEx4nt', cndL7DQ);
if (cndj9VA) { 
let cmp46Qv = this._lc('cjHlLmn2Y', {parent:component,parentTop:layout,state:'stzoNu5'});
}else { 
let el_RHtw = eo('div',null,null,`class`,`m-b-2 d-flex justify-content-between`);
let el8kALX = eo('div',null,null,`class`,`meta`);
let elUfcxe = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let el5wQJq = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let el95BCF = eo('span',null,null,`class`,`shop badge badge-default m-l-1`);
text(`Shop`);
ec('span');
ec('div');
let cmpFz4u = this._lc('cMYj9wedg', {parent:component,parentTop:layout,state:'stEx4nt'});
ec('div');
let elZRxwg = eo('div',null,null,`class`,`row`);
for (let i in component.categories) {
let category = component.categories[i]; 
 let iiijkK = 'uHr84Rm' + i;
let el5EdYR = eo('div','PeaI305BKAv0' + i+iiijkK,null,`class`,`col-6 col-sm-4 col-md-3 m-b-2`);
let cmphBwu = this._lc('cKxoWVzCW', {parent:component,parentTop:layout,props:{category:category},state:'stEx4nt',insideLoop:true,index:"" +iiijkK});
ec('div');
}
ec('div');
}}});

                    this.isReadyToGo();
                }
        });