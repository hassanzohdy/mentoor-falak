_Component({
                selector: 'einstein-puzzle-answers-page',
                c: 'EinsteinPuzzleAnswersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['hasSomethingWentWrong','isLoading','puzzle'],
                children: {cmmfySU1d:'flk-spinner',cc2PfOUdh:'flk-time-ago',cet7aDfD4:'markdown',cB_A3jaUT:'markdown',ci7lPIgue:'layout'},
                render: function (component) {
                    let cmpynII = this._lc('ci7lPIgue', {parent:component,content:(layout) => {let el__Tyj = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let el71tsv = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let elcHCGt = eo('a',null,null,`title`,`${trans(`Shop`)}`,`href`,`/einstein-chamber/shop`,`class`,`m-l-1`);
let elH1bIz = eo('span',null,null,`class`,`shopping-cart`);
ec('span');
ec('a');
let cndiVGI = component.hasSomethingWentWrong;
this.setState('stfYvO8', cndiVGI);
let cnd_Pfe = component.isLoading;
this.setState('stHpyPw', cnd_Pfe);
let cndKJ9Q = !(cndiVGI||cnd_Pfe);
this.setState('stnCnnW', cndKJ9Q);
if (cndiVGI) { 
let elkskhb = eo('h1','pEwf',null,`class`,`text-center bold m-y-2`);
text(component.hasSomethingWentWrong);
ec('h1');
}else if (cnd_Pfe) { 
let cmplihx = this._lc('cmmfySU1d', {parent:component,parentTop:layout,state:'stHpyPw'});
}else { 
let elR0N7X = eo('div',null,null,`class`,`puzzle row`);
let elRCZlO = eo('div',null,null,`class`,`col-9`);
let elCjXYq = eo('h1',null,null,`class`,`m-v-1`);
text( component.puzzle.title );
let el6BjXI = eo('strong',null,null,`class`,`green-text ml-2`);
text(component.puzzle.category.name);
ec('strong');
ec('h1');
let elriiQz = eo('h1',null,null,`class`,`teal-text m-t-1 m-b-2`);
text(`Answers (${ component.puzzle.answers.length })`);
ec('h1');
for (let i in component.puzzle.answers) {
let answer = component.puzzle.answers[i]; 
 let iicACO = 'wcg3CN0' + i;
let el46P6e = eo('div','lG8kVRDeryZd' + i+iicACO,null,`class`,`card p-2 m-b-3`);
let el5Ys1x = eo('h3','eLKff'+iicACO);
text(answer.by.name);
ec('h3');
let cmpPi40 = this._lc('cc2PfOUdh', {parent:component,parentTop:layout,props:{timestamp:answer.createdAt.timestamp},attrs:{class:'mt-1 grey-text'},state:'stnCnnW',insideLoop:true,index:"" +iicACO});
let cndu43M = answer.answer;
this.setState('stpYTnc', cndu43M);
if (cndu43M) { 
let cmpjXyb = this._lc('cet7aDfD4', {parent:component,parentTop:layout,props:{content:answer.answer},state:'stpYTnc',insideLoop:true,index:"" +iicACO});
}ec('div');
}
ec('div');
let el6VnKy = eo('div',null,null,`class`,`col-3 card p-t-1 m-t-10`);
let elFM_5G = eo('h3');
text(`Puzzle`);
ec('h3');
let cmpCMFR = this._lc('cB_A3jaUT', {parent:component,parentTop:layout,props:{content:component.puzzle.quest}});
ec('div');
ec('div');
}}});

                    this.isReadyToGo();
                }
        });