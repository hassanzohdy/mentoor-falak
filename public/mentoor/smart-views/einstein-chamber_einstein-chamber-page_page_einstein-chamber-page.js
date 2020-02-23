_Component({
                selector: 'einstein-chamber-page',
                c: 'EinsteinChamberPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','puzzle'],
                children: {c9bL4dX3m:'flk-spinner',cFcGmG4x2:'layout'},
                render: function (component) {
                    let cmpmUAQ = this._lc('cFcGmG4x2', {parent:component,content:(layout) => {let elBBg4G = eo('div');
let el7736w = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elBvIom = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let elEghw4 = eo('a',null,null,`title`,`${trans(`Shop`)}`,`href`,`/einstein-chamber/shop`,`class`,`m-l-1`);
let elgtrWe = eo('span',null,null,`class`,`shopping-cart`);
ec('span');
ec('a');
let elH1wdX = eo('a',null,null,`title`,`${trans(`Help`)}`,`href`,`/einstein-chamber/unlock`);
let el7U9vZ = eo('i',null,null,`class`,`${fas('question-circle') + ' fa-2x ml-2 v-middle icon'}`);
ec('i');
ec('a');
let cndbMa6 = component.isLoading;
this.setState('stpE1qQ', cndbMa6);
let cnd11gn = ! component.puzzle;
this.setState('sthbaAR', cnd11gn);
if (cndbMa6) { 
let cmpfz7W = this._lc('c9bL4dX3m', {parent:component,parentTop:layout,state:'stpE1qQ'});
}else if (cnd11gn) { 
let elbVxGz = eo('h1',null,null,`class`,`m-t-1 text-center`);
text(`No more available puzzles at the moment, please check again later!`);
ec('h1');
}ec('div');
}});

                    this.isReadyToGo();
                }
        });