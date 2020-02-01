_Component({
                selector: 'einstein-puzzle-answers-page',
                c: 'EinsteinPuzzleAnswersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['hasSomethingWentWrong','isLoading','puzzle'],
                children: {cpmWW4VY0:'flk-spinner',cX8Sf9leN:'flk-time-ago',cYeXMsFBn:'markdown',c3G0oJNvZ:'markdown',cYR5JMv_J:'layout'},
                render: function (component) {
                    let cmp1D17 = this._lc('cYR5JMv_J', {parent:component,content:(layout) => {let elfo7et = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elFbWNj = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let elu1ozy = eo('a',null,null,`title`,`${trans(`Shop`)}`,`href`,`/einstein-chamber/shop`,`class`,`m-l-1`);
let elYh3P2 = eo('span',null,null,`class`,`shopping-cart`);
ec('span');
ec('a');
let cndQFhq = component.hasSomethingWentWrong;
this.setState('stZSezh', cndQFhq);
let cndCVKq = component.isLoading;
this.setState('stPpVPr', cndCVKq);
let cndZVlC = !(cndQFhq||cndCVKq);
this.setState('stOiNNQ', cndZVlC);
if (cndQFhq) { 
let eloAtWm = eo('h1','THof',null,`class`,`text-center bold m-y-2`);
text(component.hasSomethingWentWrong);
ec('h1');
}else if (cndCVKq) { 
let cmpqC_b = this._lc('cpmWW4VY0', {parent:component,parentTop:layout,state:'stPpVPr'});
}else { 
let elMHWul = eo('div',null,null,`class`,`puzzle row`);
let elgOmlc = eo('div',null,null,`class`,`col-9`);
let elXS8v9 = eo('h1',null,null,`class`,`m-v-1`);
text( component.puzzle.title );
let elprqG7 = eo('strong',null,null,`class`,`green-text ml-2`);
text(component.puzzle.category.name);
ec('strong');
ec('h1');
let elUD0E3 = eo('h1',null,null,`class`,`teal-text m-t-1 m-b-2`);
text(`Answers (${ component.puzzle.answers.length })`);
ec('h1');
for (let i in component.puzzle.answers) {
let answer = component.puzzle.answers[i]; 
 let iiZdMS = 'PABmVGo' + i;
let elJpVQm = eo('div','W8CblB5uYuWh' + i+iiZdMS,null,`class`,`card p-2 m-b-3`);
let elA2awO = eo('h3','_QGff'+iiZdMS);
text(answer.by.name);
ec('h3');
let cmp0Npm = this._lc('cX8Sf9leN', {parent:component,parentTop:layout,props:{timestamp:answer.createdAt.timestamp},attrs:{class:'mt-1 grey-text'},state:'stOiNNQ',insideLoop:true,index:"" +iiZdMS});
let cndH1E4 = answer.answer;
this.setState('stPTZty', cndH1E4);
if (cndH1E4) { 
let cmp_bT5 = this._lc('cYeXMsFBn', {parent:component,parentTop:layout,props:{content:answer.answer},state:'stPTZty',insideLoop:true,index:"" +iiZdMS});
}ec('div');
}
ec('div');
let elZC9uY = eo('div',null,null,`class`,`col-3 card p-t-1 m-t-10`);
let els3WXj = eo('h3');
text(`Puzzle`);
ec('h3');
let cmph_0Z = this._lc('c3G0oJNvZ', {parent:component,parentTop:layout,props:{content:component.puzzle.quest}});
ec('div');
ec('div');
}}});

                    this.isReadyToGo();
                }
        });