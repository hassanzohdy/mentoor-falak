_Component({
                selector: 'einstein-chamber-page',
                c: 'EinsteinChamberPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['puzzle','isLoading'],
                children: {cS7x1ws5h:'new-item-btn',cyc8dNl5F:'flk-spinner',cz2_O1pzv:'layout'},
                render: function (component) {
                    let cmpgHBQ = this._lc('cz2_O1pzv', {parent:component,content:(layout) => {let eltEILb = eo('div');
let elyiUaA = eo('div',null,null,`class`,`d-flex justify-content-between`);
let elZu6am = eo('div',null,null,`class`,`meta`);
let elThH11 = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elSJrcf = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let elLVWys = eo('a',null,null,`title`,`${trans(`Shop`)}`,`href`,`/einstein-chamber/shop`,`class`,`m-l-1`);
let el6haoJ = eo('span',null,null,`class`,`shopping-cart`);
ec('span');
ec('a');
let eltz3uJ = eo('a',null,null,`title`,`${trans(`Help`)}`,`href`,`/einstein-chamber/unlock`);
let elThZRc = eo('i',null,null,`class`,`${fas('question-circle')} fa-2x ml-2 v-middle icon`);
ec('i');
ec('a');
ec('div');
let cmp3JeQ = this._lc('cS7x1ws5h', {parent:component,parentTop:layout,props:{label:'Add new challenge',icon:'plus',color:'success',link:'/einstein-chamber/new-puzzle'},attrs:{class:`${fas('plus')} icon`},style:{color:`${'success'}`}});
ec('div');
let elyJroS = eo('div',null,null,`class`,`challenge-btn w-100 h-100 text-center my-5`);
let elqTRqN = eo('a',null,null,`class`,`btn btn-primary btn-xl`,`href`,`${component.puzzle ? '/einstein-chamber/puzzles/' + component.puzzle.id : ''}`);
text(`Start a challenge`);
ec('a');
ec('div');
let cnd4gRY = component.isLoading;
this.setState('stkGqzG', cnd4gRY);
let cndV7AW = ! component.puzzle;
this.setState('stBpiYc', cndV7AW);
if (cnd4gRY) { 
let cmpQ3s9 = this._lc('cyc8dNl5F', {parent:component,parentTop:layout,state:'stkGqzG'});
}else if (cndV7AW) { 
let elVCXTN = eo('h1',null,null,`class`,`m-t-1 text-center`);
text(`No more available puzzles at the moment, please check again later!`);
ec('h1');
}ec('div');
}});

                    this.isReadyToGo();
                }
        });