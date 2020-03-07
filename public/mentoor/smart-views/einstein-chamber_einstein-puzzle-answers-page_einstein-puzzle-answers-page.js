_Component({
                selector: 'einstein-puzzle-answers-page',
                c: 'EinsteinPuzzleAnswersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['hasSomethingWentWrong','isLoading','puzzle'],
                children: {cV_ls99GP:'flk-spinner',c79RMjYrx:'flk-time-ago',cwTJd4enw:'markdown',cpby5yiHj:'markdown',cxN97FWTY:'layout'},
                render: function (component) {
                    let cmpXhrR = this._lc('cxN97FWTY', {parent:component,content:(layout) => {let elYLHPq = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elsrIdn = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let elBtGZL = eo('a',null,null,`title`,`${trans(`Shop`)}`,`href`,`/einstein-chamber/shop`,`class`,`m-l-1`);
let elbGWAY = eo('span',null,null,`class`,`shopping-cart`);
ec('span');
ec('a');
let cndyplk = component.hasSomethingWentWrong;
this.setState('st4Xm_P', cndyplk);
let cndcdGs = component.isLoading;
this.setState('stkDpNh', cndcdGs);
let cnd1_Il = !(cndyplk||cndcdGs);
this.setState('stjtgM5', cnd1_Il);
if (cndyplk) { 
let el8J9KB = eo('h1','6_3f',null,`class`,`text-center bold m-y-2`);
text(component.hasSomethingWentWrong);
ec('h1');
}else if (cndcdGs) { 
let cmp3Zij = this._lc('cV_ls99GP', {parent:component,parentTop:layout,state:'stkDpNh'});
}else { 
let el4nlYL = eo('div',null,null,`class`,`puzzle row`);
let elsWU2v = eo('div',null,null,`class`,`col-9`);
let elYZ2Bo = eo('h1',null,null,`class`,`m-v-1`);
text( component.puzzle.title );
let el21DjY = eo('strong',null,null,`class`,`green-text ml-2`);
text(component.puzzle.category.name);
ec('strong');
ec('h1');
let el8PEgA = eo('h1',null,null,`class`,`teal-text m-t-1 m-b-2`);
text(`Answers (${ component.puzzle.answers.length })`);
ec('h1');
for (let i in component.puzzle.answers) {
let answer = component.puzzle.answers[i]; 
 let iiVZgY = 'XA16kns' + i;
let elrzS4l = eo('div','zseKxX9RLD1Q' + i+iiVZgY,null,`class`,`card p-2 m-b-3`);
let elh1Dxa = eo('h3','lexff'+iiVZgY);
text(answer.by.name);
ec('h3');
let cmpec6H = this._lc('c79RMjYrx', {parent:component,parentTop:layout,props:{timestamp:answer.createdAt.timestamp},attrs:{class:'mt-1 grey-text'},state:'stjtgM5',insideLoop:true,index:"" +iiVZgY});
let cndD_Gp = answer.answer;
this.setState('st9gEvD', cndD_Gp);
if (cndD_Gp) { 
let cmp_6ul = this._lc('cwTJd4enw', {parent:component,parentTop:layout,props:{content:answer.answer},state:'st9gEvD',insideLoop:true,index:"" +iiVZgY});
}ec('div');
}
ec('div');
let elA5ogH = eo('div',null,null,`class`,`col-3 card p-t-1 m-t-10`);
let elj_yRB = eo('h3');
text(`Puzzle`);
ec('h3');
let cmpvj_l = this._lc('cpby5yiHj', {parent:component,parentTop:layout,props:{content:component.puzzle.quest}});
ec('div');
ec('div');
}}});

                    this.isReadyToGo();
                }
        });