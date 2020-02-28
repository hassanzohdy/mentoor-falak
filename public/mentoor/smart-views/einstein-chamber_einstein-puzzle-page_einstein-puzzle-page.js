_Component({
                selector: 'einstein-puzzle-page',
                c: 'EinsteinPuzzlePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','puzzle','startQuest','hideForm','submitAnswer','tags','answerData','storeAnswer','getProperBadge','user','isSending'],
                children: {cxNBDCa6L:'flk-spinner',cIMWAw3HZ:'flk-facebook-share',cQbu6UOUB:'markdown',c0hYuQZDi:'flk-audio-player',cupb6zwYr:'markdown',c5sjGG0RU:'markdown',cxYvUA0Mz:'flk-dropdown-list',cxUZUV1NZ:'markdown-input',ckthc_AWI:'gold-icon',cZ5hT3qdY:'layout'},
                render: function (component) {
                    let cmpqVlR = this._lc('cZ5hT3qdY', {parent:component,content:(layout) => {let eltb8Vc = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elrGlBp = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let elPuO2r = eo('a',null,null,`title`,`${trans(`Shop`)}`,`href`,`/einstein-chamber/shop`,`class`,`m-l-1`);
let elcV0Bl = eo('span',null,null,`class`,`shopping-cart`);
ec('span');
ec('a');
let elPCfQ7 = eo('a',null,null,`title`,`${trans(`Help`)}`,`href`,`/einstein-chamber/unlock`);
let el7xq2S = eo('i',null,null,`class`,`${fas('question-circle')} fa-2x ml-2 v-middle icon`);
ec('i');
ec('a');
let cndVvcw = component.isLoading;
this.setState('stCxOmu', cndVvcw);
let cndcrv5 = !(cndVvcw);
this.setState('stw8Svl', cndcrv5);
if (cndVvcw) { 
let cmpE1j4 = this._lc('cxNBDCa6L', {parent:component,parentTop:layout,state:'stCxOmu'});
}else { 
let cndn_U2 = component.puzzle.public;
this.setState('stgOmW7', cndn_U2);
if (cndn_U2) { 
let el5FjyP = eo('span','hB6f',null,`class`,`ml-2 badge badge-primary`);
text(`Public`);
ec('span');
}let cndzbH4 = component.puzzle && component.puzzle.public;
this.setState('stky4aw', cndzbH4);
if (cndzbH4) { 
let elbbCgf = eo('div','PzUf',null,`class`,`m-y-1`);
let cmp4Orl = this._lc('cIMWAw3HZ', {parent:component,parentTop:layout,state:'stky4aw'});
ec('div');
}let cndNHnt = component.puzzle.status && component.puzzle.status == 'approved';
this.setState('stXUhqh', cndNHnt);
if (cndNHnt) { 
let elwDGqt = eo('div','z6Ef');
let elq9F6u = eo('a','1aYf',null,`href`,`/einstein-chamber/puzzles/${ component.puzzle.id }/answers`,`class`,`btn btn-pink bold`);
text(`See how others
                solved it!`);
ec('a');
ec('div');
}let el25kjM = eo('div',null,null,`class`,`puzzle row`);
let elyg30f = eo('div',null,null,`class`,`col-9`);
let ellSaAG = eo('h1',null,null,`class`,`m-v-1`);
text( component.puzzle.title );
let el0X_7Q = eo('strong',null,null,`class`,`green-text ml-2`);
text(component.puzzle.category.name);
ec('strong');
ec('h1');
let cndtpgw = component.puzzle.status == 'rejected';
this.setState('sty3gun', cndtpgw);
if (cndtpgw) { 
let elZrrIo = eo('div','LRFf',null,`class`,`card p-1 m-b-1`);
let elMJZYp = eo('div','rfGf',null,`class`,`bold red-text`);
text(`You're previous answer had some issues, please check the following
                        comment and act accordingly.`);
ec('div');
let elupBxh = eo('div','mqBf',null,`class`,`m-y-1`);
let el8ya_S = eo('span','AIgf');
text(`By:`);
ec('span');
let el1Xa0w = eo('strong','Gcqf',null,`class`,`ml-2`);
text(component.puzzle.commentBy.name);
ec('strong');
let cndD0jL = component.puzzle.comment;
this.setState('stNpTpC', cndD0jL);
if (cndD0jL) { 
let cmpNoeN = this._lc('cQbu6UOUB', {parent:component,parentTop:layout,props:{content:component.puzzle.comment},state:'stNpTpC'});
}let cndpibI = component.puzzle.recordNote;
this.setState('stjZbeF', cndpibI);
if (cndpibI) { 
let cmpVNGv = this._lc('c0hYuQZDi', {parent:component,parentTop:layout,props:{src:component.puzzle.recordNote},attrs:{src:`${component.puzzle.recordNote}`},state:'stjZbeF'});
}ec('div');
ec('div');
}let cmpHhMI = this._lc('cupb6zwYr', {parent:component,parentTop:layout,props:{content:component.puzzle.quest}});
let cnddLmB = component.puzzle.answer;
this.setState('steaG1q', cnddLmB);
if (cnddLmB) { 
let elh8mt6 = eo('h1','Q83f',null,`class`,`m-v-1 teal-text`);
text(`Your previous answer`);
ec('h1');
let elbI8DA = ev('hr','UbUf');
let cmpsUsp = this._lc('c5sjGG0RU', {parent:component,parentTop:layout,props:{content:component.puzzle.answer},state:'steaG1q'});
}let cndGKTL = component.startQuest;
this.setState('std_JRZ', cndGKTL);
if (cndGKTL) { 
let el__lr4 = eo('div','mVbf',null,`class`,`m-t-1 ${cls({'d-none': component.hideForm})}`);
let elWKYnL = eo('h1','TUdf',null,`class`,`m-v-1`);
text(`Notes before answering.`);
ec('h1');
let el2tBGR = eo('ul','wd9f',null,`class`,`font-weight-normal`);
let elgVbZV = eo('li','A1Hf',null,`class`,`red-text bold`);
text(`Any code without comments makes your answer get rejected!`);
ec('li');
let elMfCnL = eo('li','58ef',null,`class`,`pink-text bold`);
text(`the code MUST BE WORKING or it will get rejected!`);
ec('li');
let elLIFv1 = eo('li','Tkgf');
text(`You can use markdown syntax in your answer, so use it especially in writing code.`);
ec('li');
let elmsXUd = eo('li','KkHf');
text(`Add the code in the answer box then put it on`);
let eldx0o3 = eo('a','4tPf',null,`href`,`https://codepen.io/`,`class`,`bold m-h-1 teal-text`,`target`,`_blank`);
text(`Codepen`);
ec('a');
text(`if your challenge is
                            about`);
let elMOxZv = eo('strong','TCDf',null,`class`,`mx-2`);
text(`HTML, CSS, Javascript, Typescript or SCSS`);
ec('strong');
text(`and put it on`);
let elJH3un = eo('a','KYJf',null,`href`,`https://tehplayground.com`,`class`,`bold m-h-1 green-text`,`target`,`_blank`);
text(`Tehplayground`);
ec('a');
text(`If your challenge is about`);
let elzz2xi = eo('strong','QVQf',null,`class`,`mx-2`);
text(`PHP`);
ec('strong');
text(`after that put the link at the bottom of the answer or it will get`);
let el8iMiH = eo('span','7KLf',null,`class`,`ml-1 red-text bold`);
text(`rejected`);
ec('span');
text(`.`);
ec('li');
let elMxOk4 = eo('li','8Orf');
text(`Stick to the puzzle requirements.`);
ec('li');
let elfs05H = eo('li','BmWf');
text(`Your answer will be reviewed, you can not edit it again it if it gets`);
let el3LyEF = eo('span','Nhxf',null,`class`,`ml-1 red-text bold`);
text(`rejected`);
ec('span');
text(`.`);
ec('li');
let elIp00a = eo('li','inBf');
let elIK1dT = eo('strong','7bXf',null,`class`,`mr-1`);
text(`Double`);
ec('strong');
text(`check the answer before submitting it, you can't change it again.`);
ec('li');
let elM2c2n = eo('li','rkdf');
text(`If the puzzle is about creating a`);
let el_QzT9 = eo('strong','4MEf',null,`class`,`mx-2`);
text(`built in function`);
ec('strong');
text(`in
                            programming language,`);
let elDIkmv = eo('strong','50zf',null,`class`,`mx-2`);
text(`DO NOT`);
ec('strong');
text(`use it, but implement it.`);
ec('li');
let elsW20k = eo('li','toSf');
text(`If the answer is`);
let el2Irbp = eo('span','lndf',null,`class`,`mx-1 red-text bold`);
text(`rejected`);
ec('span');
text(`,
                            the puzzle may appear again later.`);
ec('li');
ec('ul');
let elIxjqI = eo('p','CgLf',null,`class`,`orange-text bold`);
text(`If the answer got`);
let elPp0Cv = eo('span','9UHf',null,`class`,`mx-1 red-text bold`);
text(`rejected`);
ec('span');
text(`,
                        you will lose the reward of the puzzle from your gold, thus try to understand the quest
                        properly.`);
ec('p');
let elKXVzx = eo('div','Unmf',null,`class`,`row`);
let eldNEua = eo('form','WhJf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitAnswer($el)}]},`class`,`col`);

                if (! eldNEua.formHandler) {
                    window.cfrmdlr = eldNEua.formHandler = new FormHandler(eldNEua, component);
                } else {
                    window.cfrmdlr = eldNEua.formHandler;
                }
            let elfhxoG = eo('section','u34f',null,`class`,`tags form-group`);
let cmp6uH0 = this._lc('cxYvUA0Mz', {parent:component,parentTop:layout,props:{items:component.tags,multiple:true},boolAttrs:{multiple:true},attrs:{name:`${(`language`).toInputName()}`,label:'Choose a language to answer with',required:''},style:{position:'top'},state:'std_JRZ'});
ec('section');
let cmpFk5K = this._lc('cxUZUV1NZ', {parent:component,parentTop:layout,props:{value:component.answerData},events:{onkeyup:function(e) {let $el = this; component.storeAnswer($el.value)}},attrs:{name:`${(`answer`).toInputName()}`,placeholder:`${trans(`Write your answer ;)`)}`,required:''},state:'std_JRZ'});
let elAjv9l = eo('button','njsf',null,`class`,`btn btn-primary float-right`);
text(`Send`);
ec('button');
let elS2It_ = eo('button','Scuf',null, eventListeners, {onclick:[function(e) {var $el = this;component.startQuest = false}]},`class`,`btn btn-danger float-right mr-2`,`type`,`button`);
text(`Cancel`);
ec('button');
ec('form');
ec('div');
ec('div');
}ec('div');
let eli6tPe = eo('div',null,null,`class`,`col`);
let elCGmV8 = eo('div',null,null,`class`,`card m-t-0`);
let el0ZH8g = eo('div',null,null,`title`,`${trans(`Level ${ component.puzzle.level }`)}`,`class`,`text-center level`);
text(component.puzzle.level);
ec('div');
let cndDZG5 = component.puzzle.status == 'active';
this.setState('st6uue2', cndDZG5);
let cndqbdo = component.puzzle.status;
this.setState('stKT1Jj', cndqbdo);
if (cndDZG5) { 
let el6VGr1 = eo('div','NKff',null,`class`,`text-center bold status active`);
ec('div');
}else if (cndqbdo) { 
let elMzd2R = eo('div',null,null,`class`,`text-center bold status`);
let el5np0p = eo('span',null,null,`class`,`badge ${cls(component.getProperBadge(component.puzzle.status))}`);
text(component.puzzle.status);
ec('span');
ec('div');
}let elQDBsp = eo('div',null,null,`class`,`bold text-center m-v-1`);
let elmov8d = eo('div');
text(`Reward`);
ec('div');
let cmpRCuW = this._lc('ckthc_AWI', {parent:component,parentTop:layout,props:{coins:component.puzzle.reward}});
ec('div');
let cndpx67 = component.puzzle.status == 'approved';
this.setState('stB8Mce', cndpx67);
if (cndpx67) { 
let elY2yfV = eo('i','PtNf',null,`title`,`${trans(`Solved`)}`,`class`,`${fas('check')} green-text fa-2x text-center icon`);
ec('i');
}let eliRH80 = eo('div',null,null,`class`,`text-center m-b-1`);
let cndrERA = component.user.isLoggedIn() && ['active', 'rejected'].includes(component.puzzle.status);
this.setState('stw9Yh3', cndrERA);
if (cndrERA) { 
let eltHNtV = eo('button','WjYf',null, eventListeners, {onclick:[function(e) {var $el = this;component.startQuest = ! component.startQuest}]}, boolAttrs, {disabled:component.isSending},`class`,`btn text-uppercase ${cls({'btn-primary': ! component.startQuest, 'btn-danger': component.startQuest})}`);
text( component.startQuest ? 'Cancel' : 'Start quest' );
ec('button');
}let cndYDr9 = ! component.user.isLoggedIn();
this.setState('st9dT9h', cndYDr9);
if (cndYDr9) { 
let elIBZQA = eo('a','ZOYf',null,`href`,`/login`,`class`,`btn bold btn-danger text-uppercase`);
text(`Login to solve!`);
ec('a');
}ec('div');
ec('div');
ec('div');
ec('div');
}}});

                    this.isReadyToGo();
                }
        });