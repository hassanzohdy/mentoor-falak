_Component({
                selector: 'einstein-puzzle-answers-page',
                c: 'EinsteinPuzzleAnswersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['hasSomethingWentWrong','isLoading','puzzle'],
                children: {cPuHntgi3:'flk-spinner',cbBzlsOwg:'flk-time-ago',csLTemuE2:'markdown',cL9Iejjxa:'markdown',cHdixw0yN:'layout'},
                render: function (component) {
                    let cmpOt48 = this._lc('cHdixw0yN', {parent:component,content:(layout) => {let elVrdLa = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elDf4ph = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let elKYMzx = eo('a',null,null,`title`,`${trans(`Shop`)}`,`href`,`/einstein-chamber/shop`,`class`,`m-l-1`);
let elR9EV5 = eo('span',null,null,`class`,`shopping-cart`);
ec('span');
ec('a');
let cndt6iC = component.hasSomethingWentWrong;
this.setState('st7934P', cndt6iC);
let cndmAkF = component.isLoading;
this.setState('stQXAaC', cndmAkF);
let cndt5JO = !(cndt6iC||cndmAkF);
this.setState('stPgyFE', cndt5JO);
if (cndt6iC) { 
let elOY37i = eo('h1','3i2f',null,`class`,`text-center bold m-y-2`);
text(component.hasSomethingWentWrong);
ec('h1');
}else if (cndmAkF) { 
let cmpwqmO = this._lc('cPuHntgi3', {parent:component,parentTop:layout,state:'stQXAaC'});
}else { 
let elcGdyy = eo('div',null,null,`class`,`puzzle row`);
let elJlGNH = eo('div',null,null,`class`,`col-9`);
let elI_OeE = eo('h1',null,null,`class`,`m-v-1`);
text( component.puzzle.title );
let elmtreq = eo('strong',null,null,`class`,`green-text ml-2`);
text(component.puzzle.category.name);
ec('strong');
ec('h1');
let elXhU1h = eo('h1',null,null,`class`,`teal-text m-t-1 m-b-2`);
text(`Answers (${ component.puzzle.answers.length })`);
ec('h1');
for (let i in component.puzzle.answers) {
let answer = component.puzzle.answers[i]; 
 let iifSHT = 'E_LxQ4f' + i;
let eloGRPz = eo('div','M6BSzsCuVZ55' + i+iifSHT,null,`class`,`card p-2 m-b-3`);
let elIIB5G = eo('h3','DZYff'+iifSHT);
text(answer.by.name);
ec('h3');
let cmpw130 = this._lc('cbBzlsOwg', {parent:component,parentTop:layout,props:{timestamp:answer.createdAt.timestamp},attrs:{class:'mt-1 grey-text'},state:'stPgyFE',insideLoop:true,index:"" +iifSHT});
let cndAaga = answer.answer;
this.setState('sttBg2a', cndAaga);
if (cndAaga) { 
let cmpn7Zc = this._lc('csLTemuE2', {parent:component,parentTop:layout,props:{content:answer.answer},state:'sttBg2a',insideLoop:true,index:"" +iifSHT});
}ec('div');
}
ec('div');
let elv1WA9 = eo('div',null,null,`class`,`col-3 card p-t-1 m-t-10`);
let ellyvKH = eo('h3');
text(`Puzzle`);
ec('h3');
let cmpWMIP = this._lc('cL9Iejjxa', {parent:component,parentTop:layout,props:{content:component.puzzle.quest}});
ec('div');
ec('div');
}}});

                    this.isReadyToGo();
                }
        });