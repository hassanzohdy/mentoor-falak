_Component({
                selector: 'einstein-chamber-page',
                c: 'EinsteinChamberPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['puzzle','isLoading'],
                children: {cjMwK4Fzt:'new-item-btn',clRJKUB1j:'flk-spinner',cV3W61Pmr:'layout'},
                render: function (component) {
                    let cmppnhM = this._lc('cV3W61Pmr', {parent:component,content:(layout) => {let elBcTOG = eo('div');
let elpvTag = eo('div',null,null,`class`,`d-flex justify-content-between`);
let elJF35a = eo('div',null,null,`class`,`meta`);
let el6EbHF = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let eld426E = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let el1EkFq = eo('a',null,null,`title`,`${trans(`Shop`)}`,`href`,`/einstein-chamber/shop`,`class`,`m-l-1`);
let elajvu2 = eo('span',null,null,`class`,`shopping-cart`);
ec('span');
ec('a');
let elfQ0ud = eo('a',null,null,`title`,`${trans(`Help`)}`,`href`,`/einstein-chamber/unlock`);
let elad1AU = eo('i',null,null,`class`,`${fas('question-circle')} fa-2x ml-2 v-middle icon`);
ec('i');
ec('a');
ec('div');
let cmpd3kg = this._lc('cjMwK4Fzt', {parent:component,parentTop:layout,props:{label:'Add new challenge',icon:'plus',color:'success',link:'/einstein-chamber/new-puzzle'},attrs:{class:`${fas('plus')} icon`}});
ec('div');
let elq5ZOJ = eo('div',null,null,`class`,`challenge-btn w-100 h-100 text-center my-5`);
let elEBt2U = eo('a',null,null,`class`,`btn btn-primary btn-xl`,`href`,`${component.puzzle ? '/einstein-chamber/puzzles/' + component.puzzle.id : ''}`);
text(`Start a challenge`);
ec('a');
ec('div');
let cndbIKZ = component.isLoading;
this.setState('stt47Bw', cndbIKZ);
let cndmtjG = ! component.puzzle;
this.setState('stDm6RO', cndmtjG);
if (cndbIKZ) { 
let cmpJNjW = this._lc('clRJKUB1j', {parent:component,parentTop:layout,state:'stt47Bw'});
}else if (cndmtjG) { 
let elN8AoT = eo('h1',null,null,`class`,`m-t-1 text-center`);
text(`No more available puzzles at the moment, please check again later!`);
ec('h1');
}ec('div');
}});

                    this.isReadyToGo();
                }
        });