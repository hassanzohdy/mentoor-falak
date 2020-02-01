_Component({
                selector: 'einstein-chamber-page',
                c: 'EinsteinChamberPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','puzzle'],
                children: {cnrRNm6tP:'flk-spinner',cJBZV894r:'layout'},
                render: function (component) {
                    let cmpkH0I = this._lc('cJBZV894r', {parent:component,content:(layout) => {let elVRuEH = eo('div');
let elUy00g = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elMn7jN = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let el5tRyp = eo('a',null,null,`title`,`${trans(`Shop`)}`,`href`,`/einstein-chamber/shop`,`class`,`m-l-1`);
let elcT8kv = eo('span',null,null,`class`,`shopping-cart`);
ec('span');
ec('a');
let elgiRZw = eo('a',null,null,`title`,`${trans(`Help`)}`,`href`,`/einstein-chamber/unlock`);
let elLcnD7 = eo('i',null,null,`class`,`${fas('question-circle') + ' fa-2x ml-2 v-middle icon'}`);
ec('i');
ec('a');
let cnd3A7g = component.isLoading;
this.setState('stBwTL2', cnd3A7g);
let cndrfVJ = ! component.puzzle;
this.setState('stwrEBO', cndrfVJ);
if (cnd3A7g) { 
let cmpvVRK = this._lc('cnrRNm6tP', {parent:component,parentTop:layout,state:'stBwTL2'});
}else if (cndrfVJ) { 
let elLSOzH = eo('h1',null,null,`class`,`m-t-1 text-center`);
text(`No more available puzzles at the moment, please check again later!`);
ec('h1');
}ec('div');
}});

                    this.isReadyToGo();
                }
        });