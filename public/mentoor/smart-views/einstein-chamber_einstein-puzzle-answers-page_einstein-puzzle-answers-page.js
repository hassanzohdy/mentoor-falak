_Component({
                selector: 'einstein-puzzle-answers-page',
                c: 'EinsteinPuzzleAnswersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['hasSomethingWentWrong','isLoading','puzzle'],
                children: {cakuqSyEg:'flk-spinner',cH1v3sYWY:'flk-time-ago',cxmmnXbWd:'markdown',cF0H5qI7k:'markdown',cgty7uG9f:'layout'},
                render: function (component) {
                    let cmp_W6J = this._lc('cgty7uG9f', {parent:component,content:(layout) => {let elPXGIl = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elzs5pM = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let elbjakL = eo('a',null,null,`title`,`${trans(`Shop`)}`,`href`,`/einstein-chamber/shop`,`class`,`m-l-1`);
let elMud6m = eo('span',null,null,`class`,`shopping-cart`);
ec('span');
ec('a');
let cndOdkb = component.hasSomethingWentWrong;
this.setState('stoGijH', cndOdkb);
let cndJhZU = component.isLoading;
this.setState('stJyonJ', cndJhZU);
let cndrFgC = !(cndOdkb||cndJhZU);
this.setState('stQwblU', cndrFgC);
if (cndOdkb) { 
let elEl_8F = eo('h1','YTpf',null,`class`,`text-center bold m-y-2`);
text(component.hasSomethingWentWrong);
ec('h1');
}else if (cndJhZU) { 
let cmp9Jar = this._lc('cakuqSyEg', {parent:component,parentTop:layout,state:'stJyonJ'});
}else { 
let elNtXa0 = eo('div',null,null,`class`,`puzzle row`);
let elsk5O0 = eo('div',null,null,`class`,`col-9`);
let elzRaDD = eo('h1',null,null,`class`,`m-v-1`);
text( component.puzzle.title );
let elcgKgp = eo('strong',null,null,`class`,`green-text ml-2`);
text(component.puzzle.category.name);
ec('strong');
ec('h1');
let elNm64a = eo('h1',null,null,`class`,`teal-text m-t-1 m-b-2`);
text(`Answers (${ component.puzzle.answers.length })`);
ec('h1');
for (let i in component.puzzle.answers) {
let answer = component.puzzle.answers[i]; 
 let ii0Mvd = 'tASlG0n' + i;
let elChd4_ = eo('div','M_3M_KiD0AqI' + i+ii0Mvd,null,`class`,`card p-2 m-b-3`);
let ellmBG2 = eo('h3','DSMff'+ii0Mvd);
text(answer.by.name);
ec('h3');
let cmp58fR = this._lc('cH1v3sYWY', {parent:component,parentTop:layout,props:{timestamp:answer.createdAt.timestamp},attrs:{class:'mt-1 grey-text'},state:'stQwblU',insideLoop:true,index:"" +ii0Mvd});
let cndluym = answer.answer;
this.setState('stwbUhg', cndluym);
if (cndluym) { 
let cmpMdD5 = this._lc('cxmmnXbWd', {parent:component,parentTop:layout,props:{content:answer.answer},state:'stwbUhg',insideLoop:true,index:"" +ii0Mvd});
}ec('div');
}
ec('div');
let elXLvcc = eo('div',null,null,`class`,`col-3 card p-t-1 m-t-10`);
let elsU_nq = eo('h3');
text(`Puzzle`);
ec('h3');
let cmpCXp5 = this._lc('cF0H5qI7k', {parent:component,parentTop:layout,props:{content:component.puzzle.quest}});
ec('div');
ec('div');
}}});

                    this.isReadyToGo();
                }
        });