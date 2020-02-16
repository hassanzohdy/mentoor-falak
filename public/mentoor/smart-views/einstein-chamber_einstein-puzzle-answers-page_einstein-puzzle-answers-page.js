_Component({
                selector: 'einstein-puzzle-answers-page',
                c: 'EinsteinPuzzleAnswersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['hasSomethingWentWrong','isLoading','puzzle'],
                children: {cS9jVugfH:'flk-spinner',crJq75Ty4:'flk-time-ago',cgWMC_s7H:'markdown',ch4phC5MM:'markdown',cTLrcUvGz:'layout'},
                render: function (component) {
                    let cmpnI8s = this._lc('cTLrcUvGz', {parent:component,content:(layout) => {let elzSdID = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elDaxOn = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let elWUYBN = eo('a',null,null,`title`,`${trans(`Shop`)}`,`href`,`/einstein-chamber/shop`,`class`,`m-l-1`);
let elk0_QE = eo('span',null,null,`class`,`shopping-cart`);
ec('span');
ec('a');
let cndgYy5 = component.hasSomethingWentWrong;
this.setState('sttUVc9', cndgYy5);
let cnduKSX = component.isLoading;
this.setState('st8JPX_', cnduKSX);
let cndfzBV = !(cndgYy5||cnduKSX);
this.setState('stiXs9R', cndfzBV);
if (cndgYy5) { 
let elSp7nN = eo('h1','753f',null,`class`,`text-center bold m-y-2`);
text(component.hasSomethingWentWrong);
ec('h1');
}else if (cnduKSX) { 
let cmpsjEo = this._lc('cS9jVugfH', {parent:component,parentTop:layout,state:'st8JPX_'});
}else { 
let eliZ_AD = eo('div',null,null,`class`,`puzzle row`);
let elHlhwQ = eo('div',null,null,`class`,`col-9`);
let elM8EPU = eo('h1',null,null,`class`,`m-v-1`);
text( component.puzzle.title );
let eljDShu = eo('strong',null,null,`class`,`green-text ml-2`);
text(component.puzzle.category.name);
ec('strong');
ec('h1');
let elcDJnc = eo('h1',null,null,`class`,`teal-text m-t-1 m-b-2`);
text(`Answers (${ component.puzzle.answers.length })`);
ec('h1');
for (let i in component.puzzle.answers) {
let answer = component.puzzle.answers[i]; 
 let iii_77 = 'As9JpbA' + i;
let el1VZ03 = eo('div','MJb6142X6qB7' + i+iii_77,null,`class`,`card p-2 m-b-3`);
let el5TX85 = eo('h3','NxJff'+iii_77);
text(answer.by.name);
ec('h3');
let cmpYjUS = this._lc('crJq75Ty4', {parent:component,parentTop:layout,props:{timestamp:answer.createdAt.timestamp},attrs:{class:'mt-1 grey-text'},state:'stiXs9R',insideLoop:true,index:"" +iii_77});
let cndwkC1 = answer.answer;
this.setState('stILydu', cndwkC1);
if (cndwkC1) { 
let cmp2J2m = this._lc('cgWMC_s7H', {parent:component,parentTop:layout,props:{content:answer.answer},state:'stILydu',insideLoop:true,index:"" +iii_77});
}ec('div');
}
ec('div');
let el8lrFi = eo('div',null,null,`class`,`col-3 card p-t-1 m-t-10`);
let elbfab5 = eo('h3');
text(`Puzzle`);
ec('h3');
let cmpNmdq = this._lc('ch4phC5MM', {parent:component,parentTop:layout,props:{content:component.puzzle.quest}});
ec('div');
ec('div');
}}});

                    this.isReadyToGo();
                }
        });