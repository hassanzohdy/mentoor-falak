_Component({
                selector: 'einstein-chamber-page',
                c: 'EinsteinChamberPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['puzzle','isLoading'],
                children: {cqNwvnbDx:'new-item-btn',cKYqAWDyn:'flk-spinner',cSUQCHxLU:'layout'},
                render: function (component) {
                    let cmpsLkR = this._lc('cSUQCHxLU', {parent:component,content:(layout) => {let eltn7GT = eo('div');
let elA8XCG = eo('div',null,null,`class`,`d-flex justify-content-between`);
let elsKY3_ = eo('div',null,null,`class`,`meta`);
let elRhXcl = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elMBvUD = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let elyXPZh = eo('a',null,null,`title`,`${trans(`Shop`)}`,`href`,`/einstein-chamber/shop`,`class`,`m-l-1`);
let el039Hi = eo('span',null,null,`class`,`shopping-cart`);
ec('span');
ec('a');
let eld8oVp = eo('a',null,null,`title`,`${trans(`Help`)}`,`href`,`/einstein-chamber/unlock`);
let elLX9JC = eo('i',null,null,`class`,`${fas('question-circle') + ' fa-2x ml-2 v-middle icon'}`);
ec('i');
ec('a');
ec('div');
let cmpK2yv = this._lc('cqNwvnbDx', {parent:component,parentTop:layout,props:{label:'Add new challenge',icon:'plus',color:'success',link:'/einstein-chamber/new-puzzle'},attrs:{class:`${fas('plus') + ' icon'}`},style:{color:`${'success'}`}});
ec('div');
let elkhFhx = eo('div',null,null,`class`,`challenge-btn w-100 h-100 text-center my-5`);
let elM7Hz_ = eo('a',null,null,`class`,`btn btn-primary btn-xl`,`href`,`/einstein-chamber/puzzles/${component.puzzle.id}`);
text(`Start a challenge`);
ec('a');
ec('div');
let cndPArr = component.isLoading;
this.setState('stT32TK', cndPArr);
let cndOTaX = ! component.puzzle;
this.setState('stVBDzJ', cndOTaX);
if (cndPArr) { 
let cmpfHB6 = this._lc('cKYqAWDyn', {parent:component,parentTop:layout,state:'stT32TK'});
}else if (cndOTaX) { 
let elSZEYK = eo('h1',null,null,`class`,`m-t-1 text-center`);
text(`No more available puzzles at the moment, please check again later!`);
ec('h1');
}ec('div');
}});

                    this.isReadyToGo();
                }
        });