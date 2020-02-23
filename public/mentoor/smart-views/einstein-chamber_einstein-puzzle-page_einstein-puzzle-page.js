_Component({
                selector: 'einstein-puzzle-page',
                c: 'EinsteinPuzzlePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','puzzle','startQuest','hideForm','submitAnswer','tags','answerData','storeAnswer','getProperBadge','user','isSending'],
                children: {cBxtmKXIJ:'flk-spinner',c9SLyGQVN:'flk-facebook-share',caIm19Z8O:'markdown',c0fNXwQx_:'flk-audio-player',cEkxHPnpr:'markdown',csdGFK1gY:'markdown',cieYdLjWZ:'flk-dropdown-list',cdYzk0_HN:'markdown-input',cX7BEAEbZ:'gold-icon',c5xmolQZf:'layout'},
                render: function (component) {
                    let cmp8mPh = this._lc('c5xmolQZf', {parent:component,content:(layout) => {let elvb3k0 = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elkyVJQ = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let elDpzyq = eo('a',null,null,`title`,`${trans(`Shop`)}`,`href`,`/einstein-chamber/shop`,`class`,`m-l-1`);
let elfcBAD = eo('span',null,null,`class`,`shopping-cart`);
ec('span');
ec('a');
let elA_3ty = eo('a',null,null,`title`,`${trans(`Help`)}`,`href`,`/einstein-chamber/unlock`);
let eldHbYb = eo('i',null,null,`class`,`${fas('question-circle') + ' fa-2x ml-2 v-middle icon'}`);
ec('i');
ec('a');
let cnd81Zp = component.isLoading;
this.setState('stz6cjV', cnd81Zp);
let cndSbHy = !(cnd81Zp);
this.setState('stPv_7w', cndSbHy);
if (cnd81Zp) { 
let cmpFDpj = this._lc('cBxtmKXIJ', {parent:component,parentTop:layout,state:'stz6cjV'});
}else { 
let cndrcSl = component.puzzle.public;
this.setState('stV5UBd', cndrcSl);
if (cndrcSl) { 
let elPpugb = eo('span','ORtf',null,`class`,`ml-2 badge badge-primary`);
text(`Public`);
ec('span');
}let cndXRhW = component.puzzle && component.puzzle.public;
this.setState('stRXYL9', cndXRhW);
if (cndXRhW) { 
let elfatMz = eo('div','LzOf',null,`class`,`m-y-1`);
let cmp8vqR = this._lc('c9SLyGQVN', {parent:component,parentTop:layout,state:'stRXYL9'});
ec('div');
}let cndUJSO = component.puzzle.status && component.puzzle.status == 'approved';
this.setState('stnGeNC', cndUJSO);
if (cndUJSO) { 
let elqA4W0 = eo('div','7LOf');
let elmxl2H = eo('a','mqBf',null,`href`,`/einstein-chamber/puzzles/${ component.puzzle.id }/answers`,`class`,`btn btn-pink bold`);
text(`See how others
                solved it!`);
ec('a');
ec('div');
}let elm56Nw = eo('div',null,null,`class`,`puzzle row`);
let eluBnZg = eo('div',null,null,`class`,`col-9`);
let elLAx6r = eo('h1',null,null,`class`,`m-v-1`);
text( component.puzzle.title );
let el9N0UW = eo('strong',null,null,`class`,`green-text ml-2`);
text(component.puzzle.category.name);
ec('strong');
ec('h1');
let cndoaSD = component.puzzle.status == 'rejected';
this.setState('stRc58B', cndoaSD);
if (cndoaSD) { 
let elQI71I = eo('div','SIaf',null,`class`,`card p-1 m-b-1`);
let eldxjWP = eo('div','6Y_f',null,`class`,`bold red-text`);
text(`You're previous answer had some issues, please check the following
                        comment and act accordingly.`);
ec('div');
let elAj_Nf = eo('div','SY_f',null,`class`,`m-y-1`);
let elMzYmS = eo('span','x47f');
text(`By:`);
ec('span');
let el20Cnn = eo('strong','h2ff',null,`class`,`ml-2`);
text(component.puzzle.commentBy.name);
ec('strong');
let cndK13I = component.puzzle.comment;
this.setState('stcdkpj', cndK13I);
if (cndK13I) { 
let cmpOxQE = this._lc('caIm19Z8O', {parent:component,parentTop:layout,props:{content:component.puzzle.comment},state:'stcdkpj'});
}let cndza8Z = component.puzzle.recordNote;
this.setState('st8Df9P', cndza8Z);
if (cndza8Z) { 
let cmpbUVd = this._lc('c0fNXwQx_', {parent:component,parentTop:layout,props:{src:component.puzzle.recordNote},attrs:{src:`${component.puzzle.recordNote}`},state:'st8Df9P'});
}ec('div');
ec('div');
}let cmpadvc = this._lc('cEkxHPnpr', {parent:component,parentTop:layout,props:{content:component.puzzle.quest}});
let cnd3veK = component.puzzle.answer;
this.setState('sti35Jq', cnd3veK);
if (cnd3veK) { 
let eleKvL0 = eo('h1','zOJf',null,`class`,`m-v-1 teal-text`);
text(`Your previous answer`);
ec('h1');
let elS1A4C = ev('hr','ACZf');
let cmpP85L = this._lc('csdGFK1gY', {parent:component,parentTop:layout,props:{content:component.puzzle.answer},state:'sti35Jq'});
}let cndg8g_ = component.startQuest;
this.setState('stAa658', cndg8g_);
if (cndg8g_) { 
let elYZvBt = eo('div','Jetf',null,`class`,`m-t-1`);
elYZvBt.cls = {'d-none': component.hideForm};

            for (let className in elYZvBt.cls) {
                elYZvBt.classList.toggle(className, elYZvBt.cls[className]);
            }  
            let elmc7c5 = eo('h1','GNKf',null,`class`,`m-v-1`);
text(`Notes before answering.`);
ec('h1');
let elCHhr0 = eo('ul','ABEf',null,`class`,`font-weight-normal`);
let elzAY68 = eo('li','_OAf',null,`class`,`red-text bold`);
text(`Any code without comments makes your answer get rejected!`);
ec('li');
let eleFVJA = eo('li','R0Cf',null,`class`,`pink-text bold`);
text(`the code MUST BE WORKING or it will get rejected!`);
ec('li');
let elMs4fg = eo('li','xNIf');
text(`You can use markdown syntax in your answer, so use it especially in writing code.`);
ec('li');
let elHJnLk = eo('li','9kff');
text(`Add the code in the answer box then put it on`);
let elHqqqC = eo('a','fbxf',null,`href`,`https://codepen.io/`,`class`,`bold m-h-1 teal-text`,`target`,`_blank`);
text(`Codepen`);
ec('a');
text(`if your challenge is
                            about`);
let el8rPdf = eo('strong','Y8Bf',null,`class`,`mx-2`);
text(`HTML, CSS, Javascript, Typescript or SCSS`);
ec('strong');
text(`and put it on`);
let eloUEln = eo('a','lxWf',null,`href`,`https://tehplayground.com`,`class`,`bold m-h-1 green-text`,`target`,`_blank`);
text(`Tehplayground`);
ec('a');
text(`If your challenge is about`);
let elKBEXM = eo('strong','k84f',null,`class`,`mx-2`);
text(`PHP`);
ec('strong');
text(`after that put the link at the bottom of the answer or it will get`);
let eleVuYk = eo('span','de_f',null,`class`,`ml-1 red-text bold`);
text(`rejected`);
ec('span');
text(`.`);
ec('li');
let eltjfrk = eo('li','8orf');
text(`Stick to the puzzle requirements.`);
ec('li');
let elCeVXo = eo('li','rV2f');
text(`Your answer will be reviewed, you can not edit it again it if it gets`);
let el4QR7t = eo('span','mltf',null,`class`,`ml-1 red-text bold`);
text(`rejected`);
ec('span');
text(`.`);
ec('li');
let elh1VM3 = eo('li','tntf');
let elPwXrs = eo('strong','y4xf',null,`class`,`mr-1`);
text(`Double`);
ec('strong');
text(`check the answer before submitting it, you can't change it again.`);
ec('li');
let elstzyn = eo('li','u3Jf');
text(`If the puzzle is about creating a`);
let el3tQpq = eo('strong','fWxf',null,`class`,`mx-2`);
text(`built in function`);
ec('strong');
text(`in
                            programming language,`);
let elrgit8 = eo('strong','gdVf',null,`class`,`mx-2`);
text(`DO NOT`);
ec('strong');
text(`use it, but implement it.`);
ec('li');
let ell6Ky8 = eo('li','K7Zf');
text(`If the answer is`);
let elKDHux = eo('span','nLGf',null,`class`,`mx-1 red-text bold`);
text(`rejected`);
ec('span');
text(`,
                            the puzzle may appear again later.`);
ec('li');
ec('ul');
let elNkgdO = eo('p','3fXf',null,`class`,`orange-text bold`);
text(`If the answer got`);
let elqP9a8 = eo('span','ElKf',null,`class`,`mx-1 red-text bold`);
text(`rejected`);
ec('span');
text(`,
                        you will lose the reward of the puzzle from your gold, thus try to understand the quest
                        properly.`);
ec('p');
let el8KGzk = eo('div','Lbrf',null,`class`,`row`);
let elc1Unn = eo('form','clkf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitAnswer($el)}]},`class`,`col`);

                if (! elc1Unn.formHandler) {
                    window.cfrmdlr = elc1Unn.formHandler = new FormHandler(elc1Unn, component);
                } else {
                    window.cfrmdlr = elc1Unn.formHandler;
                }
            let elbW4KC = eo('section','Sm9f',null,`class`,`tags form-group`);
let cmpHWKo = this._lc('cieYdLjWZ', {parent:component,parentTop:layout,props:{items:component.tags,multiple:true},boolAttrs:{multiple:true},attrs:{name:`${(`language`).toInputName()}`,label:'Choose a language to answer with',required:''},style:{position:'top'},state:'stAa658'});
ec('section');
let cmpLTZY = this._lc('cdYzk0_HN', {parent:component,parentTop:layout,props:{value:component.answerData},events:{onkeyup:function(e) {let $el = this; component.storeAnswer($el.value)}},attrs:{name:`${(`answer`).toInputName()}`,placeholder:`${trans(`Write your answer ;)`)}`,required:''},state:'stAa658'});
let elv030A = eo('button','95wf',null,`class`,`btn btn-primary float-right`);
text(`Send`);
ec('button');
let el4xa4H = eo('button','0rhf',null, eventListeners, {onclick:[function(e) {var $el = this;component.startQuest = false}]},`class`,`btn btn-danger float-right mr-2`,`type`,`button`);
text(`Cancel`);
ec('button');
ec('form');
ec('div');
ec('div');
}ec('div');
let elRA7tc = eo('div',null,null,`class`,`col`);
let elmGQgG = eo('div',null,null,`class`,`card m-t-0`);
let eltPpyO = eo('div',null,null,`title`,`${trans(`Level ${ component.puzzle.level }`)}`,`class`,`text-center level`);
text(component.puzzle.level);
ec('div');
let cndLPb9 = component.puzzle.status == 'active';
this.setState('st1mDvt', cndLPb9);
let cndx0VV = component.puzzle.status;
this.setState('stTBwAb', cndx0VV);
if (cndLPb9) { 
let elndAim = eo('div','2g8f',null,`class`,`text-center bold status active`);
ec('div');
}else if (cndx0VV) { 
let elgb0z1 = eo('div',null,null,`class`,`text-center bold status`);
let el4DWTl = eo('span',null,null,`class`,`badge`);
el4DWTl.cls = component.getProperBadge(component.puzzle.status);

            for (let className in el4DWTl.cls) {
                el4DWTl.classList.toggle(className, el4DWTl.cls[className]);
            }  
            text(component.puzzle.status);
ec('span');
ec('div');
}let elabLcl = eo('div',null,null,`class`,`bold text-center m-v-1`);
let el54bfW = eo('div');
text(`Reward`);
ec('div');
let cmpWjWj = this._lc('cX7BEAEbZ', {parent:component,parentTop:layout,props:{coins:component.puzzle.reward}});
ec('div');
let cndxdwU = component.puzzle.status == 'approved';
this.setState('stfVblt', cndxdwU);
if (cndxdwU) { 
let elDDIV3 = eo('i','N0kf',null,`title`,`${trans(`Solved`)}`,`class`,`${fas('check') + ' green-text fa-2x text-center icon'}`);
ec('i');
}let elisUuy = eo('div',null,null,`class`,`text-center m-b-1`);
let cndpGaB = component.user.isLoggedIn() && ['active', 'rejected'].includes(component.puzzle.status);
this.setState('st09udi', cndpGaB);
if (cndpGaB) { 
let el4puSR = eo('button','ZO0f',null, eventListeners, {onclick:[function(e) {var $el = this;component.startQuest = ! component.startQuest}]}, boolAttrs, {disabled:component.isSending},`class`,`btn text-uppercase`);
el4puSR.cls = {'btn-primary': ! component.startQuest, 'btn-danger': component.startQuest};

            for (let className in el4puSR.cls) {
                el4puSR.classList.toggle(className, el4puSR.cls[className]);
            }  
            text( component.startQuest ? 'Cancel' : 'Start quest' );
ec('button');
}let cnd_T5R = ! component.user.isLoggedIn();
this.setState('stRlSjw', cnd_T5R);
if (cnd_T5R) { 
let elRuuGa = eo('a','Tt5f',null,`href`,`/login`,`class`,`btn bold btn-danger text-uppercase`);
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