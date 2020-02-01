_Component({
                selector: 'einstein-puzzle-page',
                c: 'EinsteinPuzzlePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','puzzle','startQuest','hideForm','preview','submitAnswer','answerData','storeAnswer','getProperBadge','user','isSending'],
                children: {cyV0cky_Z:'flk-spinner',cIUUoZlnG:'flk-facebook-share',cc2dLrI86:'markdown',cHQ4f1Qyp:'flk-audio-player',cEt1nZc8G:'markdown',c_cu5HQ2Q:'markdown',cNGSEsSPz:'markdown',ckBrmX7eW:'gold-icon',cbrSOFl2r:'layout'},
                render: function (component) {
                    let cmp81tw = this._lc('cbrSOFl2r', {parent:component,content:(layout) => {let elRgO1A = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elvKC_W = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let el1Flmg = eo('a',null,null,`title`,`${trans(`Shop`)}`,`href`,`/einstein-chamber/shop`,`class`,`m-l-1`);
let eltZDDM = eo('span',null,null,`class`,`shopping-cart`);
ec('span');
ec('a');
let elrkGzg = eo('a',null,null,`title`,`${trans(`Help`)}`,`href`,`/einstein-chamber/unlock`);
let elFiy4N = eo('i',null,null,`class`,`${fas('question-circle') + ' fa-2x ml-2 v-middle icon'}`);
ec('i');
ec('a');
let cndN4om = component.isLoading;
this.setState('sttULnx', cndN4om);
let cnda5Rv = !(cndN4om);
this.setState('stkwoYk', cnda5Rv);
if (cndN4om) { 
let cmpLJqO = this._lc('cyV0cky_Z', {parent:component,parentTop:layout,state:'sttULnx'});
}else { 
let cndncO4 = component.puzzle.public;
this.setState('stJ2ZDB', cndncO4);
if (cndncO4) { 
let el4vXxh = eo('span','Bevf',null,`class`,`ml-2 badge badge-primary`);
text(`Public`);
ec('span');
}let cnd4z3d = component.puzzle && component.puzzle.public;
this.setState('stLyPj2', cnd4z3d);
if (cnd4z3d) { 
let eln2EQG = eo('div','SSvf',null,`class`,`m-y-1`);
let cmpqkDO = this._lc('cIUUoZlnG', {parent:component,parentTop:layout,state:'stLyPj2'});
ec('div');
}let cnduT3M = component.puzzle.status && component.puzzle.status == 'approved';
this.setState('stQgcAr', cnduT3M);
if (cnduT3M) { 
let eleu1kE = eo('div','oHNf');
let el4fQb9 = eo('a','QSEf',null,`href`,`/einstein-chamber/puzzles/${ component.puzzle.id }/answers`,`class`,`btn btn-pink bold`);
text(`See how others
                solved it!`);
ec('a');
ec('div');
}let elR7kAI = eo('div',null,null,`class`,`puzzle row`);
let elKI8Kh = eo('div',null,null,`class`,`col-9`);
let elOv9Fy = eo('h1',null,null,`class`,`m-v-1`);
text( component.puzzle.title );
let elXmPQR = eo('strong',null,null,`class`,`green-text ml-2`);
text(component.puzzle.category.name);
ec('strong');
ec('h1');
let cndxHnW = component.puzzle.status == 'rejected';
this.setState('stsObhf', cndxHnW);
if (cndxHnW) { 
let elhdHBD = eo('div','mwzf',null,`class`,`card p-1 m-b-1`);
let eljlJEP = eo('div','zcRf',null,`class`,`bold red-text`);
text(`You're previous answer had some issues, please check the following
                        comment and act accordingly.`);
ec('div');
let elrcauw = eo('div','1Zxf',null,`class`,`m-y-1`);
let eloAF3e = eo('span','879f');
text(`By:`);
ec('span');
let elfpbfK = eo('strong','C7Of',null,`class`,`ml-2`);
text(component.puzzle.commentBy.name);
ec('strong');
let cndFHTl = component.puzzle.comment;
this.setState('stn0_5N', cndFHTl);
if (cndFHTl) { 
let cmpZOEI = this._lc('cc2dLrI86', {parent:component,parentTop:layout,props:{content:component.puzzle.comment},state:'stn0_5N'});
}let cndmAWg = component.puzzle.recordNote;
this.setState('stM2MpO', cndmAWg);
if (cndmAWg) { 
let cmp0S2v = this._lc('cHQ4f1Qyp', {parent:component,parentTop:layout,props:{src:component.puzzle.recordNote},attrs:{src:`${component.puzzle.recordNote}`},state:'stM2MpO'});
}ec('div');
ec('div');
}let cmp60eZ = this._lc('cEt1nZc8G', {parent:component,parentTop:layout,props:{content:component.puzzle.quest}});
let cndtHwp = component.puzzle.answer;
this.setState('stuTDQE', cndtHwp);
if (cndtHwp) { 
let elAh2GK = eo('h1','Wjnf',null,`class`,`m-v-1 teal-text`);
text(`Your previous answer`);
ec('h1');
let elMBHMb = ev('hr','a8bf');
let cmp5sLQ = this._lc('c_cu5HQ2Q', {parent:component,parentTop:layout,props:{content:component.puzzle.answer},state:'stuTDQE'});
}let cndKy5D = component.startQuest;
this.setState('stpkTwL', cndKy5D);
if (cndKy5D) { 
let el0Xa2p = eo('div','q5Af',null,`class`,`m-t-1`);
el0Xa2p.cls = {'d-none': component.hideForm};

            for (let className in el0Xa2p.cls) {
                el0Xa2p.classList.toggle(className, el0Xa2p.cls[className]);
            }  
            let elu8OEj = eo('h1','v04f',null,`class`,`m-v-1`);
text(`Notes before answering.`);
ec('h1');
let elgRgxP = eo('ul','lZrf',null,`class`,`font-weight-normal`);
let elv26FX = eo('li','n5Uf',null,`class`,`red-text bold`);
text(`Any code without comments makes your answer get rejected!`);
ec('li');
let elF6VnR = eo('li','Rbxf',null,`class`,`pink-text bold`);
text(`the code MUST BE WORKING or it will get rejected!`);
ec('li');
let elcBbi9 = eo('li','3_Rf');
text(`You can use markdown syntax in your answer, so use it especially in writing code.`);
ec('li');
let eljy3uP = eo('li','h3if');
text(`Add the code in the answer box then put it on`);
let elM7KOk = eo('a','jTyf',null,`href`,`https://codepen.io/`,`class`,`bold m-h-1 teal-text`,`target`,`_blank`);
text(`Codepen`);
ec('a');
text(`if your challenge is
                            about`);
let elGyIPa = eo('strong','oqDf',null,`class`,`mx-2`);
text(`HTML, CSS, Javascript, Typescript or SCSS`);
ec('strong');
text(`and put it on`);
let elDDVAx = eo('a','6lPf',null,`href`,`https://tehplayground.com`,`class`,`bold m-h-1 green-text`,`target`,`_blank`);
text(`Tehplayground`);
ec('a');
text(`If your challenge is about`);
let el1RUnj = eo('strong','Y4Yf',null,`class`,`mx-2`);
text(`PHP`);
ec('strong');
text(`after that put the link at the bottom of the answer or it will get`);
let elLNhGR = eo('span','EBgf',null,`class`,`ml-1 red-text bold`);
text(`rejected`);
ec('span');
text(`.`);
ec('li');
let elu7BrZ = eo('li','0dcf');
text(`Stick to the puzzle requirements.`);
ec('li');
let elaIBRy = eo('li','4Wnf');
text(`Your answer will be reviewed, you can not edit it again it if it gets`);
let elfYigp = eo('span','Bxtf',null,`class`,`ml-1 red-text bold`);
text(`rejected`);
ec('span');
text(`.`);
ec('li');
let elyLFue = eo('li','ANBf');
let el4cU2g = eo('strong','wZBf',null,`class`,`mr-1`);
text(`Double`);
ec('strong');
text(`check the answer before submitting it, you can't change it again, so don't forget to`);
let elfLGUT = eo('button','2Y6f',null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = ! component.preview}]},`type`,`button`,`class`,`btn btn-sm btn-success`);
text(`preview`);
ec('button');
text(`it.`);
ec('li');
let elGwVpE = eo('li','QhNf');
text(`If the puzzle is about creating a`);
let eliuX6H = eo('strong','Nkbf',null,`class`,`mx-2`);
text(`built in function`);
ec('strong');
text(`in programming language,`);
let el_biqV = eo('strong','zsNf',null,`class`,`mx-2`);
text(`DO NOT`);
ec('strong');
text(`use it, but implement it.`);
ec('li');
let elSW23q = eo('li','Tjmf');
text(`If the answer is`);
let elmoCle = eo('span','q6Zf',null,`class`,`mx-1 red-text bold`);
text(`rejected`);
ec('span');
text(`,
                            the puzzle may appear again later.`);
ec('li');
ec('ul');
let elo90fd = eo('p','qO5f',null,`class`,`orange-text bold`);
text(`If the answer got`);
let elwT2CE = eo('span','5Uvf',null,`class`,`mx-1 red-text bold`);
text(`rejected`);
ec('span');
text(`,
                        you will lose the reward of the puzzle from your gold, thus try to understand the quest
                        properly.`);
ec('p');
let el9p8bD = eo('div','hMVf',null,`class`,`row`);
let el2Z_SR = eo('form','yjNf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitAnswer($el)}]},`class`,`col`);

                if (! el2Z_SR.formHandler) {
                    window.cfrmdlr = el2Z_SR.formHandler = new FormHandler(el2Z_SR, component);
                } else {
                    window.cfrmdlr = el2Z_SR.formHandler;
                }
            let elq9jT_ = eo('textarea','yl8f',null, eventListeners, {oninput:[function(e) {component.answerData = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el2Z_SR.formHandler.addError(`answer`, 'required', trans('validation.required'));}return el2Z_SR.formHandler.removeError(`answer`);}],onkeyup:[function(e) {var $el = this;component.storeAnswer($el.value)}]},`value`,`${fval(component.answerData)}`,`name`,`${(`answer`).toInputName()}`,`placeholder`,`${trans(`Write your answer ;)`)}`,`type`,`textarea`,`rows`,`10`,`class`,`form-control mb-4`,`id`,`answer`);
elq9jT_.value = fval(component.answerData);
ec('textarea');
let cndf_rT = el2Z_SR.formHandler.getError(`answer`);
this.setState('stWGYpP', cndf_rT);
if (cndf_rT) { 
let eliChrs = eo('div','Cpqf',null,`class`,`alert alert-danger`);
text(el2Z_SR.formHandler.getError(`answer`));
ec('div');
}let elBUFFA = eo('button',null,null,`class`,`btn btn-primary float-right`);
text(`Send`);
ec('button');
let elp6Qtw = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = ! component.preview}]},`class`,`btn btn-success float-right`,`type`,`button`);
text(`Preview`);
ec('button');
let elMHGUE = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.startQuest = false}]},`class`,`btn btn-danger float-right mr-2`,`type`,`button`);
text(`Cancel`);
ec('button');
ec('form');
let cndqU0G = component.preview && component.answerData;
this.setState('stvbuPK', cndqU0G);
if (cndqU0G) { 
let eljZ_DZ = eo('div','zvef',null,`class`,`col-6`);
let cmpXPTT = this._lc('cNGSEsSPz', {parent:component,parentTop:layout,props:{content:component.answerData},state:'stvbuPK'});
ec('div');
}ec('div');
ec('div');
}ec('div');
let elXy5gT = eo('div',null,null,`class`,`col`);
let el_ffJ6 = eo('div',null,null,`class`,`card m-t-0`);
let el1Q2tx = eo('div',null,null,`title`,`${trans(`Level ${ component.puzzle.level }`)}`,`class`,`text-center level`);
text(component.puzzle.level);
ec('div');
let cndoy9t = component.puzzle.status == 'active';
this.setState('stYDn2w', cndoy9t);
let cndOwSD = component.puzzle.status;
this.setState('stnwprC', cndOwSD);
if (cndoy9t) { 
let eljTtGi = eo('div','R2ff',null,`class`,`text-center bold status active`);
ec('div');
}else if (cndOwSD) { 
let elgbxzC = eo('div',null,null,`class`,`text-center bold status`);
let elUuM9P = eo('span',null,null,`class`,`badge`);
elUuM9P.cls = component.getProperBadge(component.puzzle.status);

            for (let className in elUuM9P.cls) {
                elUuM9P.classList.toggle(className, elUuM9P.cls[className]);
            }  
            text(component.puzzle.status);
ec('span');
ec('div');
}let elDx8M6 = eo('div',null,null,`class`,`bold text-center m-v-1`);
let elWYmFK = eo('div');
text(`Reward`);
ec('div');
let cmpqBfW = this._lc('ckBrmX7eW', {parent:component,parentTop:layout,props:{coins:component.puzzle.reward}});
ec('div');
let cndAUwf = component.puzzle.status == 'approved';
this.setState('stSdCcu', cndAUwf);
if (cndAUwf) { 
let elzeLIz = eo('i','0G3f',null,`title`,`${trans(`Solved`)}`,`class`,`${fas('check') + ' green-text fa-2x text-center icon'}`);
ec('i');
}let el89gDs = eo('div',null,null,`class`,`text-center m-b-1`);
let cnd0ZKh = component.user.isLoggedIn() && ['active', 'rejected'].includes(component.puzzle.status);
this.setState('stJJbIP', cnd0ZKh);
if (cnd0ZKh) { 
let elEx4mH = eo('button','xAuf',null, eventListeners, {onclick:[function(e) {var $el = this;component.startQuest = ! component.startQuest}]}, boolAttrs, {disabled:component.isSending},`class`,`btn text-uppercase`);
elEx4mH.cls = {'btn-primary': ! component.startQuest, 'btn-danger': component.startQuest};

            for (let className in elEx4mH.cls) {
                elEx4mH.classList.toggle(className, elEx4mH.cls[className]);
            }  
            text( component.startQuest ? 'Cancel' : 'Start quest' );
ec('button');
}let cndFPlt = ! component.user.isLoggedIn();
this.setState('stOHqFz', cndFPlt);
if (cndFPlt) { 
let el7FNCf = eo('a','ah7f',null,`href`,`/login`,`class`,`btn bold btn-danger text-uppercase`);
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