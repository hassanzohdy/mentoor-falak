_Component({
                selector: 'einstein-puzzle-page',
                c: 'EinsteinPuzzlePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','puzzle','startQuest','hideForm','preview','submitAnswer','answerData','storeAnswer','getProperBadge','user','isSending'],
                children: {c4sDdG6UH:'flk-spinner',czwR4V90a:'flk-facebook-share',cj8jBR0yo:'markdown',ccg5j4K6i:'flk-audio-player',cwLaLovl8:'markdown',chUpwTqrk:'markdown',cIDyai45M:'markdown',c1ZzF2gAW:'gold-icon',cKi6ux10I:'layout'},
                render: function (component) {
                    let cmpy_52 = this._lc('cKi6ux10I', {parent:component,content:(layout) => {let elgjuQF = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elvg6AN = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let elBoHaM = eo('a',null,null,`title`,`${trans(`Shop`)}`,`href`,`/einstein-chamber/shop`,`class`,`m-l-1`);
let elQXLW8 = eo('span',null,null,`class`,`shopping-cart`);
ec('span');
ec('a');
let elacuhT = eo('a',null,null,`title`,`${trans(`Help`)}`,`href`,`/einstein-chamber/unlock`);
let el6RycP = eo('i',null,null,`class`,`${fas('question-circle') + ' fa-2x ml-2 v-middle icon'}`);
ec('i');
ec('a');
let cndBlR8 = component.isLoading;
this.setState('st1SBMM', cndBlR8);
let cndPs5e = !(cndBlR8);
this.setState('st6_8zC', cndPs5e);
if (cndBlR8) { 
let cmpqJUl = this._lc('c4sDdG6UH', {parent:component,parentTop:layout,state:'st1SBMM'});
}else { 
let cndEh_g = component.puzzle.public;
this.setState('sthmgPJ', cndEh_g);
if (cndEh_g) { 
let elHcYUY = eo('span','AMSf',null,`class`,`ml-2 badge badge-primary`);
text(`Public`);
ec('span');
}let cnd7Kn2 = component.puzzle && component.puzzle.public;
this.setState('stq0TZ3', cnd7Kn2);
if (cnd7Kn2) { 
let elVHKsr = eo('div','6TLf',null,`class`,`m-y-1`);
let cmpZzb8 = this._lc('czwR4V90a', {parent:component,parentTop:layout,state:'stq0TZ3'});
ec('div');
}let cndyTIK = component.puzzle.status && component.puzzle.status == 'approved';
this.setState('stBanlA', cndyTIK);
if (cndyTIK) { 
let elMqxNA = eo('div','LYzf');
let elmRJxI = eo('a','13Vf',null,`href`,`/einstein-chamber/puzzles/${ component.puzzle.id }/answers`,`class`,`btn btn-pink bold`);
text(`See how others
                solved it!`);
ec('a');
ec('div');
}let elym70d = eo('div',null,null,`class`,`puzzle row`);
let el6cr0Z = eo('div',null,null,`class`,`col-9`);
let elzSa6j = eo('h1',null,null,`class`,`m-v-1`);
text( component.puzzle.title );
let elUvSlm = eo('strong',null,null,`class`,`green-text ml-2`);
text(component.puzzle.category.name);
ec('strong');
ec('h1');
let cnd3BoH = component.puzzle.status == 'rejected';
this.setState('stIXkog', cnd3BoH);
if (cnd3BoH) { 
let elvadWX = eo('div','neof',null,`class`,`card p-1 m-b-1`);
let ellsKBw = eo('div','NMkf',null,`class`,`bold red-text`);
text(`You're previous answer had some issues, please check the following
                        comment and act accordingly.`);
ec('div');
let elokDA9 = eo('div','mccf',null,`class`,`m-y-1`);
let elc7zqD = eo('span','eiEf');
text(`By:`);
ec('span');
let elrDgvF = eo('strong','Vmif',null,`class`,`ml-2`);
text(component.puzzle.commentBy.name);
ec('strong');
let cndk9Kw = component.puzzle.comment;
this.setState('stDKI86', cndk9Kw);
if (cndk9Kw) { 
let cmpN5gb = this._lc('cj8jBR0yo', {parent:component,parentTop:layout,props:{content:component.puzzle.comment},state:'stDKI86'});
}let cndXgDf = component.puzzle.recordNote;
this.setState('stuiyO9', cndXgDf);
if (cndXgDf) { 
let cmpX1EJ = this._lc('ccg5j4K6i', {parent:component,parentTop:layout,props:{src:component.puzzle.recordNote},attrs:{src:`${component.puzzle.recordNote}`},state:'stuiyO9'});
}ec('div');
ec('div');
}let cmpNa5L = this._lc('cwLaLovl8', {parent:component,parentTop:layout,props:{content:component.puzzle.quest}});
let cnd2WqS = component.puzzle.answer;
this.setState('stDoO01', cnd2WqS);
if (cnd2WqS) { 
let elLt6I6 = eo('h1','qBKf',null,`class`,`m-v-1 teal-text`);
text(`Your previous answer`);
ec('h1');
let eln0vGe = ev('hr','OmZf');
let cmpnIib = this._lc('chUpwTqrk', {parent:component,parentTop:layout,props:{content:component.puzzle.answer},state:'stDoO01'});
}let cndI_1I = component.startQuest;
this.setState('sto9pSl', cndI_1I);
if (cndI_1I) { 
let eldrhdw = eo('div','eF1f',null,`class`,`m-t-1`);
eldrhdw.cls = {'d-none': component.hideForm};

            for (let className in eldrhdw.cls) {
                eldrhdw.classList.toggle(className, eldrhdw.cls[className]);
            }  
            let elKo501 = eo('h1','vydf',null,`class`,`m-v-1`);
text(`Notes before answering.`);
ec('h1');
let eliXgpb = eo('ul','U8cf',null,`class`,`font-weight-normal`);
let elY2DZX = eo('li','VJRf',null,`class`,`red-text bold`);
text(`Any code without comments makes your answer get rejected!`);
ec('li');
let elsZutF = eo('li','I7af',null,`class`,`pink-text bold`);
text(`the code MUST BE WORKING or it will get rejected!`);
ec('li');
let elsFf7m = eo('li','86pf');
text(`You can use markdown syntax in your answer, so use it especially in writing code.`);
ec('li');
let elokZc2 = eo('li','XgKf');
text(`Add the code in the answer box then put it on`);
let el4eiey = eo('a','hT_f',null,`href`,`https://codepen.io/`,`class`,`bold m-h-1 teal-text`,`target`,`_blank`);
text(`Codepen`);
ec('a');
text(`if your challenge is
                            about`);
let el2hBpx = eo('strong','mIpf',null,`class`,`mx-2`);
text(`HTML, CSS, Javascript, Typescript or SCSS`);
ec('strong');
text(`and put it on`);
let elSdF_V = eo('a','A8lf',null,`href`,`https://tehplayground.com`,`class`,`bold m-h-1 green-text`,`target`,`_blank`);
text(`Tehplayground`);
ec('a');
text(`If your challenge is about`);
let elXCYuR = eo('strong','ZE5f',null,`class`,`mx-2`);
text(`PHP`);
ec('strong');
text(`after that put the link at the bottom of the answer or it will get`);
let elhwmXl = eo('span','x1of',null,`class`,`ml-1 red-text bold`);
text(`rejected`);
ec('span');
text(`.`);
ec('li');
let elpdXWq = eo('li','SH2f');
text(`Stick to the puzzle requirements.`);
ec('li');
let el1F5KA = eo('li','VLWf');
text(`Your answer will be reviewed, you can not edit it again it if it gets`);
let elN7fZL = eo('span','QXTf',null,`class`,`ml-1 red-text bold`);
text(`rejected`);
ec('span');
text(`.`);
ec('li');
let elHAJxY = eo('li','lzMf');
let elF1SWm = eo('strong','MXMf',null,`class`,`mr-1`);
text(`Double`);
ec('strong');
text(`check the answer before submitting it, you can't change it again, so don't forget to`);
let el7cTRc = eo('button','MrHf',null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = ! component.preview}]},`type`,`button`,`class`,`btn btn-sm btn-success`);
text(`preview`);
ec('button');
text(`it.`);
ec('li');
let elvdcEA = eo('li','2jvf');
text(`If the puzzle is about creating a`);
let elGCQ2B = eo('strong','1UGf',null,`class`,`mx-2`);
text(`built in function`);
ec('strong');
text(`in programming language,`);
let elXGeqv = eo('strong','JDif',null,`class`,`mx-2`);
text(`DO NOT`);
ec('strong');
text(`use it, but implement it.`);
ec('li');
let el_foId = eo('li','ly0f');
text(`If the answer is`);
let elYCiui = eo('span','Jcff',null,`class`,`mx-1 red-text bold`);
text(`rejected`);
ec('span');
text(`,
                            the puzzle may appear again later.`);
ec('li');
ec('ul');
let elQQ3mD = eo('p','lqyf',null,`class`,`orange-text bold`);
text(`If the answer got`);
let eloqk9P = eo('span','lXef',null,`class`,`mx-1 red-text bold`);
text(`rejected`);
ec('span');
text(`,
                        you will lose the reward of the puzzle from your gold, thus try to understand the quest
                        properly.`);
ec('p');
let elg6skq = eo('div','iL_f',null,`class`,`row`);
let elDKTxS = eo('form','dBbf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitAnswer($el)}]},`class`,`col`);

                if (! elDKTxS.formHandler) {
                    window.cfrmdlr = elDKTxS.formHandler = new FormHandler(elDKTxS, component);
                } else {
                    window.cfrmdlr = elDKTxS.formHandler;
                }
            let elERG8O = eo('textarea','6IFf',null, eventListeners, {oninput:[function(e) {component.answerData = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDKTxS.formHandler.addError(`answer`, 'required', trans('validation.required'));}return elDKTxS.formHandler.removeError(`answer`);}],onkeyup:[function(e) {var $el = this;component.storeAnswer($el.value)}]},`value`,`${fval(component.answerData)}`,`name`,`${(`answer`).toInputName()}`,`placeholder`,`${trans(`Write your answer ;)`)}`,`type`,`textarea`,`rows`,`10`,`class`,`form-control mb-4`,`id`,`answer`);
elERG8O.value = fval(component.answerData);
ec('textarea');
let cnd8w8j = elDKTxS.formHandler.getError(`answer`);
this.setState('stpO3MW', cnd8w8j);
if (cnd8w8j) { 
let elNts0F = eo('div','Zh8f',null,`class`,`alert alert-danger`);
text(elDKTxS.formHandler.getError(`answer`));
ec('div');
}let elNMC7g = eo('button',null,null,`class`,`btn btn-primary float-right`);
text(`Send`);
ec('button');
let el9dO6s = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = ! component.preview}]},`class`,`btn btn-success float-right`,`type`,`button`);
text(`Preview`);
ec('button');
let el8AJz3 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.startQuest = false}]},`class`,`btn btn-danger float-right mr-2`,`type`,`button`);
text(`Cancel`);
ec('button');
ec('form');
let cndWH3P = component.preview && component.answerData;
this.setState('stV204M', cndWH3P);
if (cndWH3P) { 
let el_TncL = eo('div','OBof',null,`class`,`col-6`);
let cmpk6bR = this._lc('cIDyai45M', {parent:component,parentTop:layout,props:{content:component.answerData},state:'stV204M'});
ec('div');
}ec('div');
ec('div');
}ec('div');
let el1CEyP = eo('div',null,null,`class`,`col`);
let elrBHt4 = eo('div',null,null,`class`,`card m-t-0`);
let el6b58s = eo('div',null,null,`title`,`${trans(`Level ${ component.puzzle.level }`)}`,`class`,`text-center level`);
text(component.puzzle.level);
ec('div');
let cndKn2w = component.puzzle.status == 'active';
this.setState('stdT344', cndKn2w);
let cndV_aF = component.puzzle.status;
this.setState('stvI7I2', cndV_aF);
if (cndKn2w) { 
let el_DZVb = eo('div','eQTf',null,`class`,`text-center bold status active`);
ec('div');
}else if (cndV_aF) { 
let elvQMqB = eo('div',null,null,`class`,`text-center bold status`);
let elDN1de = eo('span',null,null,`class`,`badge`);
elDN1de.cls = component.getProperBadge(component.puzzle.status);

            for (let className in elDN1de.cls) {
                elDN1de.classList.toggle(className, elDN1de.cls[className]);
            }  
            text(component.puzzle.status);
ec('span');
ec('div');
}let el1xMBP = eo('div',null,null,`class`,`bold text-center m-v-1`);
let elIyKmI = eo('div');
text(`Reward`);
ec('div');
let cmpAvoX = this._lc('c1ZzF2gAW', {parent:component,parentTop:layout,props:{coins:component.puzzle.reward}});
ec('div');
let cndHdU_ = component.puzzle.status == 'approved';
this.setState('stncEj4', cndHdU_);
if (cndHdU_) { 
let el_GVHB = eo('i','Xozf',null,`title`,`${trans(`Solved`)}`,`class`,`${fas('check') + ' green-text fa-2x text-center icon'}`);
ec('i');
}let elPHT3S = eo('div',null,null,`class`,`text-center m-b-1`);
let cndz0On = component.user.isLoggedIn() && ['active', 'rejected'].includes(component.puzzle.status);
this.setState('stiXjGA', cndz0On);
if (cndz0On) { 
let eliTNv9 = eo('button','LW1f',null, eventListeners, {onclick:[function(e) {var $el = this;component.startQuest = ! component.startQuest}]}, boolAttrs, {disabled:component.isSending},`class`,`btn text-uppercase`);
eliTNv9.cls = {'btn-primary': ! component.startQuest, 'btn-danger': component.startQuest};

            for (let className in eliTNv9.cls) {
                eliTNv9.classList.toggle(className, eliTNv9.cls[className]);
            }  
            text( component.startQuest ? 'Cancel' : 'Start quest' );
ec('button');
}let cndDFpT = ! component.user.isLoggedIn();
this.setState('st6b1sU', cndDFpT);
if (cndDFpT) { 
let elW3KIT = eo('a','pSdf',null,`href`,`/login`,`class`,`btn bold btn-danger text-uppercase`);
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