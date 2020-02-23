_Component({
                selector: 'einstein-chamber-page',
                c: 'EinsteinChamberPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['puzzle','isLoading'],
                children: {cmhlCjnFA:'new-item-btn',cB52Ci_TG:'flk-spinner',ciNdUnI_7:'layout'},
                render: function (component) {
                    let cmppP7B = this._lc('ciNdUnI_7', {parent:component,content:(layout) => {let elJQuvZ = eo('div');
let el742BD = eo('div',null,null,`class`,`d-flex justify-content-between`);
let elzKwZi = eo('div',null,null,`class`,`meta`);
let elW2HNN = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elV21qM = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let elwwZm6 = eo('a',null,null,`title`,`${trans(`Shop`)}`,`href`,`/einstein-chamber/shop`,`class`,`m-l-1`);
let elwO25a = eo('span',null,null,`class`,`shopping-cart`);
ec('span');
ec('a');
let elCka7l = eo('a',null,null,`title`,`${trans(`Help`)}`,`href`,`/einstein-chamber/unlock`);
let el6ZSN9 = eo('i',null,null,`class`,`${fas('question-circle') + ' fa-2x ml-2 v-middle icon'}`);
ec('i');
ec('a');
ec('div');
let cmppwa_ = this._lc('cmhlCjnFA', {parent:component,parentTop:layout,props:{label:'Add new challenge',icon:'plus',color:'success',link:'/einstein-chamber/new-puzzle'},attrs:{class:`${fas('plus') + ' icon'}`},style:{color:`${'success'}`}});
ec('div');
let elS51EM = eo('div',null,null,`class`,`challenge-btn w-100 h-100 text-center my-5`);
let el9yLaS = eo('a',null,null,`class`,`btn btn-primary btn-xl`,`href`,`${component.puzzle ? '/einstein-chamber/puzzles/' + component.puzzle.id : ''}`);
text(`Start a challenge`);
ec('a');
ec('div');
let cnd4bM6 = component.isLoading;
this.setState('stuUpYB', cnd4bM6);
let cndo9Sk = ! component.puzzle;
this.setState('strERuM', cndo9Sk);
if (cnd4bM6) { 
let cmpFXZt = this._lc('cB52Ci_TG', {parent:component,parentTop:layout,state:'stuUpYB'});
}else if (cndo9Sk) { 
let elUCs4I = eo('h1',null,null,`class`,`m-t-1 text-center`);
text(`No more available puzzles at the moment, please check again later!`);
ec('h1');
}ec('div');
}});

                    this.isReadyToGo();
                }
        });