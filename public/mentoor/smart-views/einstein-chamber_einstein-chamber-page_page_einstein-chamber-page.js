_Component({
                selector: 'einstein-chamber-page',
                c: 'EinsteinChamberPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['puzzle','isLoading'],
                children: {cL43hdbbo:'new-item-btn',c4cT2eFEL:'flk-spinner',cSPb88hei:'layout'},
                render: function (component) {
                    let cmpEHfn = this._lc('cSPb88hei', {parent:component,content:(layout) => {let elCklB3 = eo('div');
let elCHYdU = eo('div',null,null,`class`,`d-flex justify-content-between`);
let elfGo4B = eo('div',null,null,`class`,`meta`);
let el0Wvuz = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elJ0Zbd = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let el06jo8 = eo('a',null,null,`title`,`${trans(`Shop`)}`,`href`,`/einstein-chamber/shop`,`class`,`m-l-1`);
let elztCDB = eo('span',null,null,`class`,`shopping-cart`);
ec('span');
ec('a');
let eliUVGY = eo('a',null,null,`title`,`${trans(`Help`)}`,`href`,`/einstein-chamber/unlock`);
let elIIIbA = eo('i',null,null,`class`,`${fas('question-circle')} fa-2x ml-2 v-middle icon`);
ec('i');
ec('a');
ec('div');
let cmpxIp_ = this._lc('cL43hdbbo', {parent:component,parentTop:layout,props:{label:'Add new challenge',icon:'plus',color:'success',link:'/einstein-chamber/new-puzzle'},attrs:{class:`${fas('plus')} icon`}});
ec('div');
let el2z54O = eo('div',null,null,`class`,`challenge-btn w-100 h-100 text-center my-5`);
let elljHCm = eo('a',null,null,`class`,`btn btn-primary btn-xl`,`href`,`${component.puzzle ? '/einstein-chamber/puzzles/' + component.puzzle.id : ''}`);
text(`Start a challenge`);
ec('a');
ec('div');
let cndgLbg = component.isLoading;
this.setState('styaTMk', cndgLbg);
let cndTUom = ! component.puzzle;
this.setState('stJukES', cndTUom);
if (cndgLbg) { 
let cmp0GIn = this._lc('c4cT2eFEL', {parent:component,parentTop:layout,state:'styaTMk'});
}else if (cndTUom) { 
let elxOerR = eo('h1',null,null,`class`,`m-t-1 text-center`);
text(`No more available puzzles at the moment, please check again later!`);
ec('h1');
}ec('div');
}});

                    this.isReadyToGo();
                }
        });