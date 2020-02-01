_Component({
                selector: 'shop-page',
                c: 'EinsteinChamberShop', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','categories'],
                children: {cnW9WazsB:'flk-spinner',cyMEGRysO:'einstein-category-card',cv6weuoIV:'layout'},
                render: function (component) {
                    let cmp0RVr = this._lc('cv6weuoIV', {parent:component,content:(layout) => {let cndv6xU = component.isLoading;
this.setState('stnszRu', cndv6xU);
let cndKEj9 = !(cndv6xU);
this.setState('stG5o2e', cndKEj9);
if (cndv6xU) { 
let cmpPCtW = this._lc('cnW9WazsB', {parent:component,parentTop:layout,state:'stnszRu'});
}else { 
let elc0OBD = eo('div',null,null,`class`,`m-b-2`);
let elYa8KL = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let el0X6HO = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let elsDpSA = eo('span',null,null,`class`,`shop badge badge-default m-l-1`);
text(`Shop`);
ec('span');
ec('div');
let el6jBnq = eo('div',null,null,`class`,`row`);
for (let i in component.categories) {
let category = component.categories[i]; 
 let iiriAb = 'D4uHXGx' + i;
let elDUqXU = eo('div','7puw6RLt3hqb' + i+iiriAb,null,`class`,`col-6 col-sm-4 col-md-3 m-b-2`);
let cmp3f1W = this._lc('cyMEGRysO', {parent:component,parentTop:layout,props:{category:category},state:'stG5o2e',insideLoop:true,index:"" +iiriAb});
ec('div');
}
ec('div');
}}});

                    this.isReadyToGo();
                }
        });