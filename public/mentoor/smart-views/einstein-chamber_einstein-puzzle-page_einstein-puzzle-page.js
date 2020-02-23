_Component({
                selector: 'einstein-puzzle-page',
                c: 'EinsteinPuzzlePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','puzzle','startQuest','hideForm','submitAnswer','tags','answerData','storeAnswer','getProperBadge','user','isSending'],
                children: {ctqQTRwxN:'flk-spinner',cYDY8r1Mw:'flk-facebook-share',ceTyfVATw:'markdown',c4rbEHv7r:'flk-audio-player',cLFGZkd2b:'markdown',cO7eqIpfx:'markdown',cc9HQzA1n:'flk-dropdown-list',cIcbnSbPK:'markdown-input',c9BaPvcYb:'gold-icon',cAUdI_Uk8:'layout'},
                render: function (component) {
                    let cmp9gqc = this._lc('cAUdI_Uk8', {parent:component,content:(layout) => {let elTnK0f = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elKFLuF = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let elO5XfJ = eo('a',null,null,`title`,`${trans(`Shop`)}`,`href`,`/einstein-chamber/shop`,`class`,`m-l-1`);
let elhtSx4 = eo('span',null,null,`class`,`shopping-cart`);
ec('span');
ec('a');
let elbjc5M = eo('a',null,null,`title`,`${trans(`Help`)}`,`href`,`/einstein-chamber/unlock`);
let el2ycOq = eo('i',null,null,`class`,`${fas('question-circle') + ' fa-2x ml-2 v-middle icon'}`);
ec('i');
ec('a');
let cnd4Olo = component.isLoading;
this.setState('strBSUJ', cnd4Olo);
let cndiaF2 = !(cnd4Olo);
this.setState('st6ixQ4', cndiaF2);
if (cnd4Olo) { 
let cmpOGek = this._lc('ctqQTRwxN', {parent:component,parentTop:layout,state:'strBSUJ'});
}else { 
let cndm15q = component.puzzle.public;
this.setState('sthuLuO', cndm15q);
if (cndm15q) { 
let elxA5NI = eo('span','Yrpf',null,`class`,`ml-2 badge badge-primary`);
text(`Public`);
ec('span');
}let cndLUuN = component.puzzle && component.puzzle.public;
this.setState('stwyjZU', cndLUuN);
if (cndLUuN) { 
let elEOyk0 = eo('div','hjpf',null,`class`,`m-y-1`);
let cmpwuT5 = this._lc('cYDY8r1Mw', {parent:component,parentTop:layout,state:'stwyjZU'});
ec('div');
}let cndyR4D = component.puzzle.status && component.puzzle.status == 'approved';
this.setState('stD_meP', cndyR4D);
if (cndyR4D) { 
let elaYC4n = eo('div','eTLf');
let el1uHMH = eo('a','dxjf',null,`href`,`/einstein-chamber/puzzles/${ component.puzzle.id }/answers`,`class`,`btn btn-pink bold`);
text(`See how others
                solved it!`);
ec('a');
ec('div');
}let elrXses = eo('div',null,null,`class`,`puzzle row`);
let elK9m3v = eo('div',null,null,`class`,`col-9`);
let elrGYKZ = eo('h1',null,null,`class`,`m-v-1`);
text( component.puzzle.title );
let elJO7pz = eo('strong',null,null,`class`,`green-text ml-2`);
text(component.puzzle.category.name);
ec('strong');
ec('h1');
let cndAumM = component.puzzle.status == 'rejected';
this.setState('stVf_PG', cndAumM);
if (cndAumM) { 
let elxBW03 = eo('div','ym5f',null,`class`,`card p-1 m-b-1`);
let elwMUp2 = eo('div','xXIf',null,`class`,`bold red-text`);
text(`You're previous answer had some issues, please check the following
                        comment and act accordingly.`);
ec('div');
let elpg5IG = eo('div','SrFf',null,`class`,`m-y-1`);
let elrU7nT = eo('span','t_df');
text(`By:`);
ec('span');
let elP5ttR = eo('strong','yBXf',null,`class`,`ml-2`);
text(component.puzzle.commentBy.name);
ec('strong');
let cnduWaG = component.puzzle.comment;
this.setState('stBXwI9', cnduWaG);
if (cnduWaG) { 
let cmpguLx = this._lc('ceTyfVATw', {parent:component,parentTop:layout,props:{content:component.puzzle.comment},state:'stBXwI9'});
}let cndxTrc = component.puzzle.recordNote;
this.setState('stdcVuF', cndxTrc);
if (cndxTrc) { 
let cmpNtcH = this._lc('c4rbEHv7r', {parent:component,parentTop:layout,props:{src:component.puzzle.recordNote},attrs:{src:`${component.puzzle.recordNote}`},state:'stdcVuF'});
}ec('div');
ec('div');
}let cmpu8du = this._lc('cLFGZkd2b', {parent:component,parentTop:layout,props:{content:component.puzzle.quest}});
let cndwskN = component.puzzle.answer;
this.setState('sthXxMM', cndwskN);
if (cndwskN) { 
let el_eQb1 = eo('h1','Lg8f',null,`class`,`m-v-1 teal-text`);
text(`Your previous answer`);
ec('h1');
let elJc8Uj = ev('hr','_jwf');
let cmpBHCK = this._lc('cO7eqIpfx', {parent:component,parentTop:layout,props:{content:component.puzzle.answer},state:'sthXxMM'});
}let cndweKt = component.startQuest;
this.setState('stkWJv9', cndweKt);
if (cndweKt) { 
let elzSqZS = eo('div','3Rzf',null,`class`,`m-t-1`);
elzSqZS.cls = {'d-none': component.hideForm};

            for (let className in elzSqZS.cls) {
                elzSqZS.classList.toggle(className, elzSqZS.cls[className]);
            }  
            let elEPH_e = eo('h1','b6Tf',null,`class`,`m-v-1`);
text(`Notes before answering.`);
ec('h1');
let el6ISel = eo('ul','q74f',null,`class`,`font-weight-normal`);
let elb7_Ic = eo('li','f29f',null,`class`,`red-text bold`);
text(`Any code without comments makes your answer get rejected!`);
ec('li');
let elaPa8A = eo('li','XTCf',null,`class`,`pink-text bold`);
text(`the code MUST BE WORKING or it will get rejected!`);
ec('li');
let elCiR6o = eo('li','cyZf');
text(`You can use markdown syntax in your answer, so use it especially in writing code.`);
ec('li');
let elcU0ho = eo('li','NfDf');
text(`Add the code in the answer box then put it on`);
let elaV5M8 = eo('a','YOAf',null,`href`,`https://codepen.io/`,`class`,`bold m-h-1 teal-text`,`target`,`_blank`);
text(`Codepen`);
ec('a');
text(`if your challenge is
                            about`);
let elmdk4f = eo('strong','I51f',null,`class`,`mx-2`);
text(`HTML, CSS, Javascript, Typescript or SCSS`);
ec('strong');
text(`and put it on`);
let el2l6PQ = eo('a','8YUf',null,`href`,`https://tehplayground.com`,`class`,`bold m-h-1 green-text`,`target`,`_blank`);
text(`Tehplayground`);
ec('a');
text(`If your challenge is about`);
let elgkmhH = eo('strong','Qjwf',null,`class`,`mx-2`);
text(`PHP`);
ec('strong');
text(`after that put the link at the bottom of the answer or it will get`);
let elfL4iL = eo('span','O7zf',null,`class`,`ml-1 red-text bold`);
text(`rejected`);
ec('span');
text(`.`);
ec('li');
let elePbbo = eo('li','YYlf');
text(`Stick to the puzzle requirements.`);
ec('li');
let elytNeP = eo('li','vIKf');
text(`Your answer will be reviewed, you can not edit it again it if it gets`);
let elUwZfE = eo('span','dHGf',null,`class`,`ml-1 red-text bold`);
text(`rejected`);
ec('span');
text(`.`);
ec('li');
let elNJQRa = eo('li','R3Jf');
let elDR5uc = eo('strong','25Kf',null,`class`,`mr-1`);
text(`Double`);
ec('strong');
text(`check the answer before submitting it, you can't change it again.`);
ec('li');
let elbbtyq = eo('li','XK3f');
text(`If the puzzle is about creating a`);
let elwYreW = eo('strong','OXQf',null,`class`,`mx-2`);
text(`built in function`);
ec('strong');
text(`in
                            programming language,`);
let elN_YKA = eo('strong','FNpf',null,`class`,`mx-2`);
text(`DO NOT`);
ec('strong');
text(`use it, but implement it.`);
ec('li');
let elntNmc = eo('li','zMsf');
text(`If the answer is`);
let elxBqWz = eo('span','4DOf',null,`class`,`mx-1 red-text bold`);
text(`rejected`);
ec('span');
text(`,
                            the puzzle may appear again later.`);
ec('li');
ec('ul');
let elhwYYE = eo('p','Wwvf',null,`class`,`orange-text bold`);
text(`If the answer got`);
let elDVwCA = eo('span','o24f',null,`class`,`mx-1 red-text bold`);
text(`rejected`);
ec('span');
text(`,
                        you will lose the reward of the puzzle from your gold, thus try to understand the quest
                        properly.`);
ec('p');
let elu5woE = eo('div','uI0f',null,`class`,`row`);
let elzZIPc = eo('form','_Vdf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitAnswer($el)}]},`class`,`col`);

                if (! elzZIPc.formHandler) {
                    window.cfrmdlr = elzZIPc.formHandler = new FormHandler(elzZIPc, component);
                } else {
                    window.cfrmdlr = elzZIPc.formHandler;
                }
            let elZGJnG = eo('section','UyIf',null,`class`,`tags form-group`);
let cmp2cdX = this._lc('cc9HQzA1n', {parent:component,parentTop:layout,props:{items:component.tags,multiple:true},boolAttrs:{multiple:true},attrs:{name:`${(`language`).toInputName()}`,label:'Choose a language to answer with',required:''},style:{position:'top'},state:'stkWJv9'});
ec('section');
let cmpv2pH = this._lc('cIcbnSbPK', {parent:component,parentTop:layout,props:{value:component.answerData},events:{onkeyup:function(e) {let $el = this; component.storeAnswer($el.value)}},attrs:{name:`${(`answer`).toInputName()}`,placeholder:`${trans(`Write your answer ;)`)}`,required:''},state:'stkWJv9'});
let elr1gP9 = eo('button','qWpf',null,`class`,`btn btn-primary float-right`);
text(`Send`);
ec('button');
let el73kBq = eo('button','dFDf',null, eventListeners, {onclick:[function(e) {var $el = this;component.startQuest = false}]},`class`,`btn btn-danger float-right mr-2`,`type`,`button`);
text(`Cancel`);
ec('button');
ec('form');
ec('div');
ec('div');
}ec('div');
let el15urL = eo('div',null,null,`class`,`col`);
let elSFdvu = eo('div',null,null,`class`,`card m-t-0`);
let elLGTYp = eo('div',null,null,`title`,`${trans(`Level ${ component.puzzle.level }`)}`,`class`,`text-center level`);
text(component.puzzle.level);
ec('div');
let cndXRTh = component.puzzle.status == 'active';
this.setState('st5hcdV', cndXRTh);
let cnd5wiW = component.puzzle.status;
this.setState('stZHPaL', cnd5wiW);
if (cndXRTh) { 
let elIF2v8 = eo('div','0Lqf',null,`class`,`text-center bold status active`);
ec('div');
}else if (cnd5wiW) { 
let eljvTnw = eo('div',null,null,`class`,`text-center bold status`);
let eltJjYw = eo('span',null,null,`class`,`badge`);
eltJjYw.cls = component.getProperBadge(component.puzzle.status);

            for (let className in eltJjYw.cls) {
                eltJjYw.classList.toggle(className, eltJjYw.cls[className]);
            }  
            text(component.puzzle.status);
ec('span');
ec('div');
}let elf7oNz = eo('div',null,null,`class`,`bold text-center m-v-1`);
let el7Ssjk = eo('div');
text(`Reward`);
ec('div');
let cmporYX = this._lc('c9BaPvcYb', {parent:component,parentTop:layout,props:{coins:component.puzzle.reward}});
ec('div');
let cndQJTO = component.puzzle.status == 'approved';
this.setState('st97weF', cndQJTO);
if (cndQJTO) { 
let elTZ7sP = eo('i','xsJf',null,`title`,`${trans(`Solved`)}`,`class`,`${fas('check') + ' green-text fa-2x text-center icon'}`);
ec('i');
}let elqs0b4 = eo('div',null,null,`class`,`text-center m-b-1`);
let cndCJ6w = component.user.isLoggedIn() && ['active', 'rejected'].includes(component.puzzle.status);
this.setState('stgCzmK', cndCJ6w);
if (cndCJ6w) { 
let eluNaMn = eo('button','bUIf',null, eventListeners, {onclick:[function(e) {var $el = this;component.startQuest = ! component.startQuest}]}, boolAttrs, {disabled:component.isSending},`class`,`btn text-uppercase`);
eluNaMn.cls = {'btn-primary': ! component.startQuest, 'btn-danger': component.startQuest};

            for (let className in eluNaMn.cls) {
                eluNaMn.classList.toggle(className, eluNaMn.cls[className]);
            }  
            text( component.startQuest ? 'Cancel' : 'Start quest' );
ec('button');
}let cndqG4u = ! component.user.isLoggedIn();
this.setState('stiTguZ', cndqG4u);
if (cndqG4u) { 
let el7JKAX = eo('a','t41f',null,`href`,`/login`,`class`,`btn bold btn-danger text-uppercase`);
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