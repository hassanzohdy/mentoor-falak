_Component({
                selector: 'einstein-chamber-page',
                c: 'EinsteinChamberPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','puzzle'],
                children: {cb9jsZoB2:'flk-spinner',cgLZ0r8ti:'layout'},
                render: function (component) {
                    let cmp2EEw = this._lc('cgLZ0r8ti', {parent:component,content:(layout) => {let elrmerk = eo('div');
let elsKY6L = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elEeGsA = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let el_ORjm = eo('a',null,null,`title`,`${trans(`Shop`)}`,`href`,`/einstein-chamber/shop`,`class`,`m-l-1`);
let elGAEbx = eo('span',null,null,`class`,`shopping-cart`);
ec('span');
ec('a');
let ellF9in = eo('a',null,null,`title`,`${trans(`Help`)}`,`href`,`/einstein-chamber/unlock`);
let elPF2r2 = eo('i',null,null,`class`,`${fas('question-circle') + ' fa-2x ml-2 v-middle icon'}`);
ec('i');
ec('a');
let cndffHx = component.isLoading;
this.setState('stT36LY', cndffHx);
let cndEdZj = ! component.puzzle;
this.setState('stpPW8Z', cndEdZj);
if (cndffHx) { 
let cmpimYk = this._lc('cb9jsZoB2', {parent:component,parentTop:layout,state:'stT36LY'});
}else if (cndEdZj) { 
let elsiiHc = eo('h1',null,null,`class`,`m-t-1 text-center`);
text(`No more available puzzles at the moment, please check again later!`);
ec('h1');
}ec('div');
}});

                    this.isReadyToGo();
                }
        });