_Component({
                selector: 'einstein-puzzle-answers-page',
                c: 'EinsteinPuzzleAnswersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['hasSomethingWentWrong','isLoading','puzzle'],
                children: {cfVJw6FdW:'flk-spinner',c1nzco4kp:'flk-time-ago',cuH8KYeJZ:'markdown',cL5u4m_LI:'markdown',cOBiWIq_4:'layout'},
                render: function (component) {
                    let cmpzOHp = this._lc('cOBiWIq_4', {parent:component,content:(layout) => {let elHtRTm = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elKn5Xi = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let eloO5c2 = eo('a',null,null,`title`,`${trans(`Shop`)}`,`href`,`/einstein-chamber/shop`,`class`,`m-l-1`);
let elKn4Tb = eo('span',null,null,`class`,`shopping-cart`);
ec('span');
ec('a');
let cndQtgA = component.hasSomethingWentWrong;
this.setState('sthYp5Z', cndQtgA);
let cndMGmK = component.isLoading;
this.setState('sthNqqO', cndMGmK);
let cndoTOk = !(cndQtgA||cndMGmK);
this.setState('stTPWnk', cndoTOk);
if (cndQtgA) { 
let elmqtFq = eo('h1','iALf',null,`class`,`text-center bold m-y-2`);
text(component.hasSomethingWentWrong);
ec('h1');
}else if (cndMGmK) { 
let cmpHKc_ = this._lc('cfVJw6FdW', {parent:component,parentTop:layout,state:'sthNqqO'});
}else { 
let elr7YSu = eo('div',null,null,`class`,`puzzle row`);
let ely6jp7 = eo('div',null,null,`class`,`col-9`);
let elCuxew = eo('h1',null,null,`class`,`m-v-1`);
text( component.puzzle.title );
let el17dwQ = eo('strong',null,null,`class`,`green-text ml-2`);
text(component.puzzle.category.name);
ec('strong');
ec('h1');
let elhLCdD = eo('h1',null,null,`class`,`teal-text m-t-1 m-b-2`);
text(`Answers (${ component.puzzle.answers.length })`);
ec('h1');
for (let i in component.puzzle.answers) {
let answer = component.puzzle.answers[i]; 
 let iiCUee = 'ab6eHFw' + i;
let el6T1L1 = eo('div','VGaHywpaoU02' + i+iiCUee,null,`class`,`card p-2 m-b-3`);
let elq0Gs7 = eo('h3','SWlff'+iiCUee);
text(answer.by.name);
ec('h3');
let cmpLavj = this._lc('c1nzco4kp', {parent:component,parentTop:layout,props:{timestamp:answer.createdAt.timestamp},attrs:{class:'mt-1 grey-text'},state:'stTPWnk',insideLoop:true,index:"" +iiCUee});
let cndNwMp = answer.answer;
this.setState('stekoUl', cndNwMp);
if (cndNwMp) { 
let cmphwmP = this._lc('cuH8KYeJZ', {parent:component,parentTop:layout,props:{content:answer.answer},state:'stekoUl',insideLoop:true,index:"" +iiCUee});
}ec('div');
}
ec('div');
let elZnsjY = eo('div',null,null,`class`,`col-3 card p-t-1 m-t-10`);
let elcPmN8 = eo('h3');
text(`Puzzle`);
ec('h3');
let cmpfTbR = this._lc('cL5u4m_LI', {parent:component,parentTop:layout,props:{content:component.puzzle.quest}});
ec('div');
ec('div');
}}});

                    this.isReadyToGo();
                }
        });