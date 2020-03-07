_Component({
                selector: 'einstein-puzzle-page',
                c: 'EinsteinPuzzlePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','puzzle','startQuest','hideForm','submitAnswer','tags','answerData','storeAnswer','getProperBadge','user','isSending'],
                children: {c6fe2JuK8:'flk-spinner',ctZwJze0g:'flk-facebook-share',cQ_fLLKTN:'markdown',cNanCi3vK:'flk-audio-player',cfEt9vqPT:'markdown',c_t4xTrcz:'markdown',cTTbpf2S_:'flk-dropdown-list',cCz5meusv:'markdown-input',cyAdF0VRQ:'gold-icon',cONdff8CU:'layout'},
                render: function (component) {
                    let cmpnv2_ = this._lc('cONdff8CU', {parent:component,content:(layout) => {let eleLTuq = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elMeyvi = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let elMoneX = eo('a',null,null,`title`,`${trans(`Shop`)}`,`href`,`/einstein-chamber/shop`,`class`,`m-l-1`);
let elpkUp4 = eo('span',null,null,`class`,`shopping-cart`);
ec('span');
ec('a');
let elYOJX3 = eo('a',null,null,`title`,`${trans(`Help`)}`,`href`,`/einstein-chamber/unlock`);
let eluotok = eo('i',null,null,`class`,`${fas('question-circle')} fa-2x ml-2 v-middle icon`);
ec('i');
ec('a');
let cndkzBu = component.isLoading;
this.setState('stU6P7Y', cndkzBu);
let cnd0RfS = !(cndkzBu);
this.setState('stAf12Q', cnd0RfS);
if (cndkzBu) { 
let cmpc4w4 = this._lc('c6fe2JuK8', {parent:component,parentTop:layout,state:'stU6P7Y'});
}else { 
let cndfzu6 = component.puzzle.public;
this.setState('stzhGJs', cndfzu6);
if (cndfzu6) { 
let elJs182 = eo('span','cyaf',null,`class`,`ml-2 badge badge-primary`);
text(`Public`);
ec('span');
}let cndJhQ0 = component.puzzle && component.puzzle.public;
this.setState('stCYR3W', cndJhQ0);
if (cndJhQ0) { 
let eljRJ3R = eo('div','6Vkf',null,`class`,`m-y-1`);
let cmpgPYj = this._lc('ctZwJze0g', {parent:component,parentTop:layout,state:'stCYR3W'});
ec('div');
}let cndnhUW = component.puzzle.status && component.puzzle.status == 'approved';
this.setState('stfPYCq', cndnhUW);
if (cndnhUW) { 
let elkS9aV = eo('div','pWDf');
let el0Uy3C = eo('a','8w0f',null,`href`,`/einstein-chamber/puzzles/${ component.puzzle.id }/answers`,`class`,`btn btn-pink bold`);
text(`See how others
                solved it!`);
ec('a');
ec('div');
}let el25oHT = eo('div',null,null,`class`,`puzzle row`);
let elq9Nnu = eo('div',null,null,`class`,`col-9`);
let elOLJYi = eo('h1',null,null,`class`,`m-v-1`);
text( component.puzzle.title );
let elCNhVv = eo('strong',null,null,`class`,`green-text ml-2`);
text(component.puzzle.category.name);
ec('strong');
ec('h1');
let cndu2v9 = component.puzzle.status == 'rejected';
this.setState('stlsHMg', cndu2v9);
if (cndu2v9) { 
let el5EVFJ = eo('div','lLYf',null,`class`,`card p-1 m-b-1`);
let elIOxqV = eo('div','Ab3f',null,`class`,`bold red-text`);
text(`You're previous answer had some issues, please check the following
                        comment and act accordingly.`);
ec('div');
let elTWZmS = eo('div','zg2f',null,`class`,`m-y-1`);
let el4kWbB = eo('span','73Zf');
text(`By:`);
ec('span');
let el9LmrH = eo('strong','bvSf',null,`class`,`ml-2`);
text(component.puzzle.commentBy.name);
ec('strong');
let cndy6uc = component.puzzle.comment;
this.setState('stK6tSO', cndy6uc);
if (cndy6uc) { 
let cmpv460 = this._lc('cQ_fLLKTN', {parent:component,parentTop:layout,props:{content:component.puzzle.comment},state:'stK6tSO'});
}let cnd91_v = component.puzzle.recordNote;
this.setState('sthsvJh', cnd91_v);
if (cnd91_v) { 
let cmpVbgX = this._lc('cNanCi3vK', {parent:component,parentTop:layout,props:{src:component.puzzle.recordNote},attrs:{src:`${component.puzzle.recordNote}`},state:'sthsvJh'});
}ec('div');
ec('div');
}let cmplkX6 = this._lc('cfEt9vqPT', {parent:component,parentTop:layout,props:{content:component.puzzle.quest}});
let cnd4jWb = component.puzzle.answer;
this.setState('st42qOW', cnd4jWb);
if (cnd4jWb) { 
let elW3W0Z = eo('h1','Xe4f',null,`class`,`m-v-1 teal-text`);
text(`Your previous answer`);
ec('h1');
let el6EPaP = ev('hr','b05f');
let cmpCLsp = this._lc('c_t4xTrcz', {parent:component,parentTop:layout,props:{content:component.puzzle.answer},state:'st42qOW'});
}let cndcsDh = component.startQuest;
this.setState('stryRf9', cndcsDh);
if (cndcsDh) { 
let elmx7yk = eo('div','Wwuf',null,`class`,`m-t-1 ${cls({'d-none': component.hideForm})}`);
let elb8ni5 = eo('h1','y9df',null,`class`,`m-v-1`);
text(`Notes before answering.`);
ec('h1');
let elXMhY1 = eo('ul','dmDf',null,`class`,`font-weight-normal`);
let elsQuRu = eo('li','D9Xf',null,`class`,`red-text bold`);
text(`Any code without comments makes your answer get rejected!`);
ec('li');
let el1blYG = eo('li','y5Sf',null,`class`,`pink-text bold`);
text(`the code MUST BE WORKING or it will get rejected!`);
ec('li');
let el7Ko6E = eo('li','esXf');
text(`You can use markdown syntax in your answer, so use it especially in writing code.`);
ec('li');
let el9W3fA = eo('li','83Ef');
text(`Add the code in the answer box then put it on`);
let eleSucf = eo('a','3Wff',null,`href`,`https://codepen.io/`,`class`,`bold m-h-1 teal-text`,`target`,`_blank`);
text(`Codepen`);
ec('a');
text(`if your challenge is
                            about`);
let el7uQft = eo('strong','g2xf',null,`class`,`mx-2`);
text(`HTML, CSS, Javascript, Typescript or SCSS`);
ec('strong');
text(`and put it on`);
let eltC_5R = eo('a','GYkf',null,`href`,`https://tehplayground.com`,`class`,`bold m-h-1 green-text`,`target`,`_blank`);
text(`Tehplayground`);
ec('a');
text(`If your challenge is about`);
let elEa0oR = eo('strong','lbZf',null,`class`,`mx-2`);
text(`PHP`);
ec('strong');
text(`after that put the link at the bottom of the answer or it will get`);
let elbbTWE = eo('span','h7Mf',null,`class`,`ml-1 red-text bold`);
text(`rejected`);
ec('span');
text(`.`);
ec('li');
let elc9d0i = eo('li','CdBf');
text(`Stick to the puzzle requirements.`);
ec('li');
let elstdLZ = eo('li','11Ff');
text(`Your answer will be reviewed, you can not edit it again it if it gets`);
let eldpCA2 = eo('span','rOPf',null,`class`,`ml-1 red-text bold`);
text(`rejected`);
ec('span');
text(`.`);
ec('li');
let eleqn9j = eo('li','bhZf');
let elQZzNt = eo('strong','x2mf',null,`class`,`mr-1`);
text(`Double`);
ec('strong');
text(`check the answer before submitting it, you can't change it again.`);
ec('li');
let ellU8V7 = eo('li','QChf');
text(`If the puzzle is about creating a`);
let elvEWIG = eo('strong','wK3f',null,`class`,`mx-2`);
text(`built in function`);
ec('strong');
text(`in
                            programming language,`);
let el_TToW = eo('strong','GkEf',null,`class`,`mx-2`);
text(`DO NOT`);
ec('strong');
text(`use it, but implement it.`);
ec('li');
let elQ4Cbt = eo('li','waFf');
text(`If the answer is`);
let elOh13N = eo('span','NDvf',null,`class`,`mx-1 red-text bold`);
text(`rejected`);
ec('span');
text(`,
                            the puzzle may appear again later.`);
ec('li');
ec('ul');
let el3vjJf = eo('p','H8lf',null,`class`,`orange-text bold`);
text(`If the answer got`);
let elfkYrx = eo('span','88xf',null,`class`,`mx-1 red-text bold`);
text(`rejected`);
ec('span');
text(`,
                        you will lose the reward of the puzzle from your gold, thus try to understand the quest
                        properly.`);
ec('p');
let elxC0xO = eo('div','t6if',null,`class`,`row`);
let elY1pQ3 = eo('form','sNzf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitAnswer($el)}]},`class`,`col`);

                if (! elY1pQ3.formHandler) {
                    window.cfrmdlr = elY1pQ3.formHandler = new FormHandler(elY1pQ3, component);
                } else {
                    window.cfrmdlr = elY1pQ3.formHandler;
                }
            let elcn5H2 = eo('section','AWrf',null,`class`,`tags form-group`);
let cmpBsCd = this._lc('cTTbpf2S_', {parent:component,parentTop:layout,props:{items:component.tags,multiple:true},boolAttrs:{multiple:true},attrs:{name:`${(`language`).toInputName()}`,label:'Choose a language to answer with',position:'top',required:''},state:'stryRf9'});
ec('section');
let cmpzP8s = this._lc('cCz5meusv', {parent:component,parentTop:layout,props:{value:component.answerData},events:{onkeyup:function(e) {let $el = this; component.storeAnswer($el.value)}},attrs:{name:`${(`answer`).toInputName()}`,placeholder:`${trans(`Write your answer ;)`)}`,required:''},state:'stryRf9'});
let elqqBCF = eo('button','xpIf',null,`class`,`btn btn-primary float-right`);
text(`Send`);
ec('button');
let elyP0Fz = eo('button','iaSf',null, eventListeners, {onclick:[function(e) {var $el = this;component.startQuest = false}]},`class`,`btn btn-danger float-right mr-2`,`type`,`button`);
text(`Cancel`);
ec('button');
ec('form');
ec('div');
ec('div');
}ec('div');
let elOmGOb = eo('div',null,null,`class`,`col`);
let elkEvoO = eo('div',null,null,`class`,`card m-t-0`);
let elY7X27 = eo('div',null,null,`title`,`${trans(`Level ${ component.puzzle.level }`)}`,`class`,`text-center level`);
text(component.puzzle.level);
ec('div');
let cndh71y = component.puzzle.status == 'active';
this.setState('ste7vrx', cndh71y);
let cnd9wjh = component.puzzle.status;
this.setState('stLyvBQ', cnd9wjh);
if (cndh71y) { 
let elPmWV7 = eo('div','xBJf',null,`class`,`text-center bold status active`);
ec('div');
}else if (cnd9wjh) { 
let elowXqv = eo('div',null,null,`class`,`text-center bold status`);
let elbx0Hu = eo('span',null,null,`class`,`badge ${cls(component.getProperBadge(component.puzzle.status))}`);
text(component.puzzle.status);
ec('span');
ec('div');
}let elJAgL2 = eo('div',null,null,`class`,`bold text-center m-v-1`);
let elETiNi = eo('div');
text(`Reward`);
ec('div');
let cmpH_wD = this._lc('cyAdF0VRQ', {parent:component,parentTop:layout,props:{coins:component.puzzle.reward}});
ec('div');
let cndItoj = component.puzzle.status == 'approved';
this.setState('st42_iC', cndItoj);
if (cndItoj) { 
let eloDrtn = eo('i','mkDf',null,`title`,`${trans(`Solved`)}`,`class`,`${fas('check')} green-text fa-2x text-center icon`);
ec('i');
}let elD8neo = eo('div',null,null,`class`,`text-center m-b-1`);
let cndXLQd = component.user.isLoggedIn() && ['active', 'rejected'].includes(component.puzzle.status);
this.setState('st7cl1z', cndXLQd);
if (cndXLQd) { 
let elhpNpj = eo('button','A7Zf',null, eventListeners, {onclick:[function(e) {var $el = this;component.startQuest = ! component.startQuest}]}, boolAttrs, {disabled:component.isSending},`class`,`btn text-uppercase ${cls({'btn-primary': ! component.startQuest, 'btn-danger': component.startQuest})}`);
text( component.startQuest ? 'Cancel' : 'Start quest' );
ec('button');
}let cnd3vSg = ! component.user.isLoggedIn();
this.setState('stctgS1', cnd3vSg);
if (cnd3vSg) { 
let elrrc4R = eo('a','bqVf',null,`href`,`/login`,`class`,`btn bold btn-danger text-uppercase`);
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