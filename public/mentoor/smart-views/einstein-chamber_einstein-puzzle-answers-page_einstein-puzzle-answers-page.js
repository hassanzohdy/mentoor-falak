_Component({
                selector: 'einstein-puzzle-answers-page',
                c: 'EinsteinPuzzleAnswersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['hasSomethingWentWrong','isLoading','puzzle'],
                children: {csHzhdW80:'flk-spinner',cEwn_ltCM:'flk-time-ago',cPm2akT1a:'markdown',cFdHoBq5O:'markdown',cQVScTGJ_:'layout'},
                render: function (component) {
                    let cmpf1kX = this._lc('cQVScTGJ_', {parent:component,content:(layout) => {let elg0Ws3 = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elMv0Z4 = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let elh0Fb9 = eo('a',null,null,`title`,`${trans(`Shop`)}`,`href`,`/einstein-chamber/shop`,`class`,`m-l-1`);
let elAs6MX = eo('span',null,null,`class`,`shopping-cart`);
ec('span');
ec('a');
let cndUNIT = component.hasSomethingWentWrong;
this.setState('stjhL1N', cndUNIT);
let cndE0O2 = component.isLoading;
this.setState('stcsxLf', cndE0O2);
let cnd0aij = !(cndUNIT||cndE0O2);
this.setState('stnPTJi', cnd0aij);
if (cndUNIT) { 
let elMEXRT = eo('h1','EkZf',null,`class`,`text-center bold m-y-2`);
text(component.hasSomethingWentWrong);
ec('h1');
}else if (cndE0O2) { 
let cmppYTa = this._lc('csHzhdW80', {parent:component,parentTop:layout,state:'stcsxLf'});
}else { 
let elze1pf = eo('div',null,null,`class`,`puzzle row`);
let elDQTsI = eo('div',null,null,`class`,`col-9`);
let eldaaVa = eo('h1',null,null,`class`,`m-v-1`);
text( component.puzzle.title );
let el6DWxN = eo('strong',null,null,`class`,`green-text ml-2`);
text(component.puzzle.category.name);
ec('strong');
ec('h1');
let elWF73P = eo('h1',null,null,`class`,`teal-text m-t-1 m-b-2`);
text(`Answers (${ component.puzzle.answers.length })`);
ec('h1');
for (let i in component.puzzle.answers) {
let answer = component.puzzle.answers[i]; 
 let iicLMB = 'ws53H3L' + i;
let elgSNAI = eo('div','r7wnmvpCk3w0' + i+iicLMB,null,`class`,`card p-2 m-b-3`);
let elEcqMj = eo('h3','ikiff'+iicLMB);
text(answer.by.name);
ec('h3');
let cmpjeyS = this._lc('cEwn_ltCM', {parent:component,parentTop:layout,props:{timestamp:answer.createdAt.timestamp},attrs:{class:'mt-1 grey-text'},state:'stnPTJi',insideLoop:true,index:"" +iicLMB});
let cnd_h1K = answer.answer;
this.setState('stBOD2z', cnd_h1K);
if (cnd_h1K) { 
let cmpAwt0 = this._lc('cPm2akT1a', {parent:component,parentTop:layout,props:{content:answer.answer},state:'stBOD2z',insideLoop:true,index:"" +iicLMB});
}ec('div');
}
ec('div');
let elY1pbi = eo('div',null,null,`class`,`col-3 card p-t-1 m-t-10`);
let elieEU1 = eo('h3');
text(`Puzzle`);
ec('h3');
let cmpRnCe = this._lc('cFdHoBq5O', {parent:component,parentTop:layout,props:{content:component.puzzle.quest}});
ec('div');
ec('div');
}}});

                    this.isReadyToGo();
                }
        });