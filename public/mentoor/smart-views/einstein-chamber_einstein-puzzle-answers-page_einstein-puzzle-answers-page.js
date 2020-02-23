_Component({
                selector: 'einstein-puzzle-answers-page',
                c: 'EinsteinPuzzleAnswersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['hasSomethingWentWrong','isLoading','puzzle'],
                children: {cGIYFf4uJ:'flk-spinner',c4tZcbNXN:'flk-time-ago',c8wMz6z7j:'markdown',cU0h_S4ZC:'markdown',cOs56UpzW:'layout'},
                render: function (component) {
                    let cmpf0DQ = this._lc('cOs56UpzW', {parent:component,content:(layout) => {let elAPzqw = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elGh3vN = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let el4ObG5 = eo('a',null,null,`title`,`${trans(`Shop`)}`,`href`,`/einstein-chamber/shop`,`class`,`m-l-1`);
let elA8nCr = eo('span',null,null,`class`,`shopping-cart`);
ec('span');
ec('a');
let cnd6wIY = component.hasSomethingWentWrong;
this.setState('stIN6LY', cnd6wIY);
let cndFviM = component.isLoading;
this.setState('stjRHE3', cndFviM);
let cndjd1K = !(cnd6wIY||cndFviM);
this.setState('stSdD3W', cndjd1K);
if (cnd6wIY) { 
let elomx6d = eo('h1','YOFf',null,`class`,`text-center bold m-y-2`);
text(component.hasSomethingWentWrong);
ec('h1');
}else if (cndFviM) { 
let cmp5ZUp = this._lc('cGIYFf4uJ', {parent:component,parentTop:layout,state:'stjRHE3'});
}else { 
let el7_3xR = eo('div',null,null,`class`,`puzzle row`);
let elxZhzu = eo('div',null,null,`class`,`col-9`);
let elW4buQ = eo('h1',null,null,`class`,`m-v-1`);
text( component.puzzle.title );
let elzKPMz = eo('strong',null,null,`class`,`green-text ml-2`);
text(component.puzzle.category.name);
ec('strong');
ec('h1');
let elUuMwz = eo('h1',null,null,`class`,`teal-text m-t-1 m-b-2`);
text(`Answers (${ component.puzzle.answers.length })`);
ec('h1');
for (let i in component.puzzle.answers) {
let answer = component.puzzle.answers[i]; 
 let iiF10L = 'fMa8Z14' + i;
let eldkKfe = eo('div','iEZZdqoa3czM' + i+iiF10L,null,`class`,`card p-2 m-b-3`);
let elM1X0y = eo('h3','TxEff'+iiF10L);
text(answer.by.name);
ec('h3');
let cmpb_qP = this._lc('c4tZcbNXN', {parent:component,parentTop:layout,props:{timestamp:answer.createdAt.timestamp},attrs:{class:'mt-1 grey-text'},state:'stSdD3W',insideLoop:true,index:"" +iiF10L});
let cnd477i = answer.answer;
this.setState('std7Mrm', cnd477i);
if (cnd477i) { 
let cmpg3j0 = this._lc('c8wMz6z7j', {parent:component,parentTop:layout,props:{content:answer.answer},state:'std7Mrm',insideLoop:true,index:"" +iiF10L});
}ec('div');
}
ec('div');
let el8pYHB = eo('div',null,null,`class`,`col-3 card p-t-1 m-t-10`);
let elFIP4L = eo('h3');
text(`Puzzle`);
ec('h3');
let cmpzpRw = this._lc('cU0h_S4ZC', {parent:component,parentTop:layout,props:{content:component.puzzle.quest}});
ec('div');
ec('div');
}}});

                    this.isReadyToGo();
                }
        });