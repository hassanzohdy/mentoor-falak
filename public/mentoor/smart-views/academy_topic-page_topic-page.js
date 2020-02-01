_Component({
                selector: 'topic-page',
                c: 'TopicPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['topic','openAnswerText','preview','answerData','form','submitAnswer','storeAnswer','isValidForm','isSending','cancelBtn','user','handleAnswerDisplay','approveMsg','startQuest','btns','showQuestAnswer','disableQuestBtn','editAnswer','currentUserAnswer'],
                children: {cXcCm5DTw:'flk-spinner',cjgdXJHlT:'flk-time-ago',cSBYRlrnH:'flk-facebook-share',cgPAgDueC:'markdown',cA_0su8Ru:'flk-audio-player',c9zfkweie:'markdown',cuberYEqr:'markdown',cJorP_enT:'flk-alert',cFAveMBD7:'user-online',c76Pdy9wv:'markdown',cl6Kj6DKA:'markdown',cMDQJAUAn:'gold-icon',cCcfeE5Hl:'gold-icon',c2dN9wMKU:'layout'},
                render: function (component) {
                    let cmpRCmk = this._lc('c2dN9wMKU', {parent:component,content:(layout) => {let cndmOxa = Is.empty(component.topic);
this.setState('stccruO', cndmOxa);
if (cndmOxa) { 
let cmpzE2Y = this._lc('cXcCm5DTw', {parent:component,parentTop:layout,state:'stccruO'});
}let cndngEz = ! Is.empty(component.topic);
this.setState('stvYj9r', cndngEz);
if (cndngEz) { 
let elDUh3e = eo('div','CHDf',null,`class`,`row topicDetails`);
let elvT0oS = eo('div','7Gkf',null,`class`,`col-lg-9 col-md-8`);
let elxHemk = eo('section','na6f');
let elQTYIy = eo('header','6fIf',null,`class`,`topicTitle`);
let el_n_Xj = eo('h2','3MIf',null,`class`,`text-capitalize bold trackImage`);
let elVR1Gn = eo('a','_Waf',null,`href`,`${URLS.track(component.topic.track)}`);
let elRHQnM = ev('img','J2_f',null,`src`,`${component.topic.track.image}`,`class`,`mr-2 v-top`,`title`,`${component.topic.track.name}`,`alt`,`${component.topic.track.name}`);
ec('a');
let elt7ICo = eo('div','1uqf',null,`class`,`d-inline-block`);
text( component.topic.title );
let elmZNt3 = eo('div','9QBf',null,`class`,`text-muted dateFont mt-1 font-weight-normal`);
let el3HTUa = eo('i','TW4f',null,`class`,`${fas('calendar') + ' mx-2 icon'}`);
ec('i');
let cmpeUs5 = this._lc('cjgdXJHlT', {parent:component,parentTop:layout,props:{timestamp:component.topic.createdAt.timestamp},state:'stvYj9r'});
let el5zA6U = eo('div','fZUf',null,`class`,`m-t-1`);
let cmp2Tji = this._lc('cSBYRlrnH', {parent:component,parentTop:layout,state:'stvYj9r'});
ec('div');
ec('div');
ec('div');
ec('h2');
ec('header');
let elhg6FL = eo('p','Xnlf',null,`class`,`topicDesc`);
text( component.topic.shortDescription );
ec('p');
let cndCN1D = component.topic.userAnswer && component.topic.userAnswer.status == 'rejected' && (component.topic.userAnswer.comment || component.topic.userAnswer.recordNote);
this.setState('st4YbQL', cndCN1D);
if (cndCN1D) { 
let eleqAzq = eo('footer','cEZf',null,`class`,`card p-2 m-b-1`);
let elNBeVN = eo('h3','y2rf',null,`class`,`red-text bold m-b-1`);
text(`Your answer has been rejected :(`);
ec('h3');
let elBFLK8 = eo('span','0Rff',null,`class`,`d-inline-block`);
text(`Note by:`);
ec('span');
let elSZNaN = eo('strong','28sf',null,`class`,`d-inline-block`);
text(component.topic.userAnswer.commentBy.name);
ec('strong');
let elRw3RP = eo('p','uIbf',null,`class`,`notes`);
let cndMo8H = component.topic.userAnswer.comment;
this.setState('st4Gn75', cndMo8H);
if (cndMo8H) { 
let cmpFYKQ = this._lc('cgPAgDueC', {parent:component,parentTop:layout,props:{content:component.topic.userAnswer.comment},state:'st4Gn75'});
}ec('p');
let cndPhGo = component.topic.userAnswer.recordNote;
this.setState('stMZ2OU', cndPhGo);
if (cndPhGo) { 
let cmpcgJ2 = this._lc('cA_0su8Ru', {parent:component,parentTop:layout,props:{src:component.topic.userAnswer.recordNote},attrs:{src:`${component.topic.userAnswer.recordNote}`},state:'stMZ2OU'});
}ec('footer');
}let elAW7Bl = eo('div',null,null,`class`,`metaInfo`);
let elC3INi = eo('h3',null,null,`class`,`infoTitle bold`);
text(`Quest`);
ec('h3');
ec('div');
let elJun1f = eo('p',null,null,`class`,`topicQuest m-b-2`);
let cndcMCd = component.topic.quest;
this.setState('stMxhJn', cndcMCd);
if (cndcMCd) { 
let cmpU4gg = this._lc('c9zfkweie', {parent:component,parentTop:layout,props:{content:component.topic.quest},state:'stMxhJn'});
}ec('p');
ec('section');
let cndH69r = component.openAnswerText;
this.setState('stsU0zI', cndH69r);
let cndnqkK = ! Is.empty(component.topic.answers);
this.setState('stgYg_8', cndnqkK);
if (cndH69r) { 
let elgOU7l = eo('div','jZHf',null,`class`,`answerForm`);
let elNYbeN = eo('h3','DT1f',null,`class`,`bold mb-3`);
text(`Please be aware of the following notes when you submit your answer`);
ec('h3');
let elYWEt3 = eo('ul','hJif',null,`id`,`notes-list`);
let el1b170 = eo('li','61pf');
text(`Don't forget to read about`);
let elDm4Qb = eo('a','F1gf',null,`href`,`/writing-notes`,`class`,`bold mx-2 teal-text`);
text(`writing
                            notes`);
ec('a');
text(`before starting the quest.`);
ec('li');
let eloo26o = eo('li','ottf',null,`class`,`bold`);
text(`DO NOT copy/paste the answer, write it with your own words and understanding.`);
ec('li');
let elDsGvO = eo('li','diHf');
text(`Your answer is not meant to be ideal, so read about the quest and write what you know.`);
ec('li');
let el6KRbI = eo('li','5uef');
text(`Make your answer simple and understandable.`);
ec('li');
let el2MARi = eo('li','9Z8f');
text(`You can use markdown syntax in your answer, so use it especially in writing code.`);
ec('li');
let eltAmHN = eo('li','DtQf');
text(`Always put references at the bottom of your answer from the articles/books you used in your
                        answer.`);
ec('li');
let elOn4aR = eo('li','boKf');
text(`Stick to the quest requirements, don't explain anything else.`);
ec('li');
let el7tPqk = eo('li','v4Kf');
text(`Your answer will be reviewed before publishing it to public, still write what you only know for
                        the quest.`);
ec('li');
let elFPnk9 = eo('li','jjhf');
text(`Once the answer is posted, you can't change it while it is pending., so don't forget to`);
let eliQVF3 = eo('button','6vpf',null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = ! component.preview}]},`type`,`button`,`class`,`btn btn-sm btn-success`);
text(`preview`);
ec('button');
text(`it before posting.`);
ec('li');
let elrGMGC = eo('li','57Zf');
text(`If the answer is rejected, you can edit it and try again.`);
ec('li');
ec('ul');
let cndvyzF = component.preview;
this.setState('stUzz0S', cndvyzF);
if (cndvyzF) { 
let elv7OCR = eo('h1','T_If');
text(`Answer preview`);
ec('h1');
let cmp7FA8 = this._lc('cuberYEqr', {parent:component,parentTop:layout,props:{content:component.answerData},state:'stUzz0S'});
let elOtRLc = eo('button','sYLf',null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = false}]},`class`,`btn btn-purple`);
text(`Back to code`);
ec('button');
}let cndsk1Y = component.form;
this.setState('stIMwRg', cndsk1Y);
if (cndsk1Y) { 
let cmp_Wuu = this._lc('cJorP_enT', {parent:component,parentTop:layout,events:{onconfirm:function(e) {let $el = this; component.submitAnswer(component.form)},onclose:function(e) {let $el = this; component.form = null}},state:'stIMwRg'});
}let cnd7UJN = component.openAnswerText;
this.setState('st9j3Ux', cnd7UJN);
if (cnd7UJN) { 
let elqJtPC = eo('form','hbBf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.form = $el;}]});

                if (! elqJtPC.formHandler) {
                    window.cfrmdlr = elqJtPC.formHandler = new FormHandler(elqJtPC, component);
                } else {
                    window.cfrmdlr = elqJtPC.formHandler;
                }
            let elNOlYT = eo('textarea','ULHf',null, eventListeners, {oninput:[function(e) {component.answerData = this.value;},function(e) {var $el = this;component.storeAnswer($el.value)},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqJtPC.formHandler.addError(`answer`, 'required', trans('validation.required'));}return elqJtPC.formHandler.removeError(`answer`);}]},`value`,`${fval(component.answerData)}`,`name`,`${(`answer`).toInputName()}`,`placeholder`,`${trans(`Write your answer ;)`)}`,`type`,`textarea`,`rows`,`8`,`class`,`form-control mb-4`,`dir`,`auto`,`id`,`answer`);
elNOlYT.value = fval(component.answerData);
ec('textarea');
let cndFwC3 = elqJtPC.formHandler.getError(`answer`);
this.setState('stodqKL', cndFwC3);
if (cndFwC3) { 
let elgm5B6 = eo('div','s7Ff',null,`class`,`alert alert-danger`);
text(elqJtPC.formHandler.getError(`answer`));
ec('div');
}let elCrIpm = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.isSending},`class`,`btn btn-primary float-right`);
text(`Send`);
ec('button');
let elskCwe = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = true}]},`type`,`button`,`class`,`btn btn-success float-right`);
text(`Preview`);
ec('button');
ec('form');
}let cndnKwe = component.cancelBtn;
this.setState('st4q43i', cndnKwe);
if (cndnKwe) { 
let elN9AUv = eo('button','pOAf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openAnswerText = !component.openAnswerText; component.cancelBtn = false}]},`class`,`btn btn-danger float-right mr-2`);
text(`Cancel`);
ec('button');
}ec('div');
}else if (cndnqkK) { 
let elsIAXx = eo('div');
let elzrOO9 = eo('h4',null,null,`class`,`answersTitle bold m-b-2`);
text(`Answers ( ${ component.topic.answers.length } )`);
ec('h4');
let cndd3EN = ! component.topic.public && !component.topic.answered && component.user.id != 1;
this.setState('strEvse', cndd3EN);
let cndwPC8 = !(cndd3EN);
this.setState('stMHnT0', cndwPC8);
if (cndd3EN) { 
let el2n5p_ = eo('h2','ibBf',null,`class`,`text-center bold teal-text`);
text(`You need to answer first to see other's answers!`);
ec('h2');
}else { 
for (let i in component.topic.answers) {
let answer = component.topic.answers[i]; 
 let iiIA6_ = 'hqYbr0Z' + i;
let elYmjX7 = eo('div','5yVsE_qKkQ_u' + i+iiIA6_,null,`class`,`card m-b-2`);
let elEvVt6 = eo('div','wJkff'+iiIA6_,null,`class`,`card-body`);
let elvtMSQ = eo('div','CVtff'+iiIA6_,null,`class`,`d-flex justify-content-between mb-3`);
let elhQv0y = eo('div','cq9ff'+iiIA6_,null,`class`,`answerMeta w-100`);
let el33T9P = eo('span','O2pff'+iiIA6_,null, eventListeners, {onclick:[function(e) {var $el = this;component.handleAnswerDisplay(answer);}]},`class`,`mainColor text-capitalize mr-2 pointer bold d-block`);
let elHKus_ = eo('span','CUKff'+iiIA6_);
elHKus_.cls = {'green-text': answer.by.id == component.user.id, 'blue-text': answer.by.id != component.user.id};

            for (let className in elHKus_.cls) {
                elHKus_.classList.toggle(className, elHKus_.cls[className]);
            }  
            text(answer.by.name);
ec('span');
let cmpzBd4 = this._lc('cFAveMBD7', {parent:component,parentTop:layout,props:{id:answer.by.id},attrs:{id:`${answer.by.id}`},state:'stMHnT0',insideLoop:true,index:"" +iiIA6_});
let cndyOrL = answer.by.id == component.user.id && answer.status != 'approved';
this.setState('stTqrU5', cndyOrL);
let cnd_hJ_ = answer.display == DISPLAYED;
this.setState('stIRQ_n', cnd_hJ_);
let cndNFnU = answer.display == HIDDEN;
this.setState('stn6w5C', cndNFnU);
if (cndyOrL) { 
let eluDt6k = eo('span','hvCff'+iiIA6_,null,`class`,`text-capitalize badge align-bottom ml-3 mb-1`);
eluDt6k.cls = answerStatusClass(answer.status);

            for (let className in eluDt6k.cls) {
                eluDt6k.classList.toggle(className, eluDt6k.cls[className]);
            }  
            text( answer.status );
ec('span');
}let cndIK_u = answer.display == SEMI_DISPLAYED;
this.setState('sttHugb', cndIK_u);
let cnddKuC = cnd_hJ_;
this.setState('stiQaDT', cnddKuC);
let cndNp5k = cndNFnU;
this.setState('st1oxoZ', cndNp5k);
if (cndIK_u) { 
let elfEWOF = eo('i','hJAff'+iiIA6_,null,`title`,`${trans(`Display`)}`,`class`,`${fas('angle-down') + ' float-right fa-2x icon'}`);
ec('i');
}else if (cnddKuC) { 
let elPKNZN = eo('i','5Wsff'+iiIA6_,null,`title`,`${trans(`Hide`)}`,`class`,`${fas('minus') + ' float-right fa-2x icon'}`);
ec('i');
}else if (cndNp5k) { 
let elLYNBG = eo('i','4Mrff'+iiIA6_,null,`title`,`${trans(`Semi display`)}`,`class`,`${fas('plus') + ' float-right fa-2x icon'}`);
ec('i');
}ec('span');
let elru9mT = eo('small','9vQff'+iiIA6_,null,`class`,`text-muted d-block`);
text( answer.createdAt.format );
ec('small');
ec('div');
ec('div');
let cnd9y0O = answer.display == SEMI_DISPLAYED;
this.setState('stfbMFw', cnd9y0O);
let cndmkI4 = answer.display == DISPLAYED;
this.setState('stnOGIR', cndmkI4);
if (cnd9y0O) { 
let cmpKmjK = this._lc('c76Pdy9wv', {parent:component,parentTop:layout,props:{content:answer.answer.split('\n').slice(0, 10).join('\n')},state:'stfbMFw',insideLoop:true,index:"" +iiIA6_});
let cndFPcC = answer.answer.split('\n').length > 10;
this.setState('stj6iuo', cndFPcC);
if (cndFPcC) { 
let el07yOz = eo('p','Wgaff'+iiIA6_,null, eventListeners, {onclick:[function(e) {var $el = this;component.handleAnswerDisplay(answer)}]},`class`,`pointer bold pink-text`);
text(`Read more...`);
ec('p');
}}else if (cndmkI4) { 
let cmpiRsK = this._lc('cl6Kj6DKA', {parent:component,parentTop:layout,props:{content:answer.answer},state:'stnOGIR',insideLoop:true,index:"" +iiIA6_});
}ec('div');
ec('div');
}
}ec('div');
}ec('div');
let elGvJ91 = eo('div',null,null,`class`,`col-lg-3 col-md-4 text-center`);
let elvLAAP = eo('div',null,null,`class`,`card`);
let elCTPmX = eo('div',null,null,`class`,`card-body`);
let cnd2sqn = component.approveMsg.show;
this.setState('st59T5E', cnd2sqn);
if (cnd2sqn) { 
let elugXx0 = eo('div','LDWf',null,`class`,`mb-3`);
let elZBUMK = eo('span','6QTf',null,`class`,`badge text-uppercase`);
elZBUMK.cls = answerStatusClass(component.approveMsg.status);

            for (let className in elZBUMK.cls) {
                elZBUMK.classList.toggle(className, elZBUMK.cls[className]);
            }  
            text(component.approveMsg.status);
ec('span');
let cndKHg7 = component.approveMsg.status === 'rejected';
this.setState('stsay3a', cndKHg7);
if (cndKHg7) { 
let elKFkCC = eo('span','rUpf');
text(component.approveMsg.msg);
ec('span');
}ec('div');
}let elf9Yat = eo('div',null,null,`class`,`topicEsTime`);
let cndvbno = component.topic.userAnswer && component.topic.userAnswer.status == 'approved';
this.setState('stpNreK', cndvbno);
let cndpNpe = !(cndvbno);
this.setState('st1StRZ', cndpNpe);
if (cndvbno) { 
let cndwj7r = component.topic.userAnswer.prize != component.topic.prize;
this.setState('st0TtiO', cndwj7r);
if (cndwj7r) { 
let elUdU12 = eo('span','_Dyf',null,`class`,`reward-status`);
elUdU12.cls = {'up': component.topic.userAnswer.prize > component.topic.prize, down: component.topic.userAnswer.prize < component.topic.prize};

            for (let className in elUdU12.cls) {
                elUdU12.classList.toggle(className, elUdU12.cls[className]);
            }  
            ec('span');
}let cmpkEdI = this._lc('cMDQJAUAn', {parent:component,parentTop:layout});
let elhNeCb = eo('span',null,null,`class`,`bold`);
elhNeCb.cls = {'green-text': component.topic.userAnswer.prize > component.topic.prize, 'red-text': component.topic.userAnswer.prize < component.topic.prize};

            for (let className in elhNeCb.cls) {
                elhNeCb.classList.toggle(className, elhNeCb.cls[className]);
            }  
            text(component.topic.userAnswer.prize.format());
ec('span');
let cndS_Ig = component.topic.userAnswer && component.topic.userAnswer.prize != component.topic.prize;
this.setState('stOSLJE', cndS_Ig);
if (cndS_Ig) { 
let elaHyvA = eo('div','yvMf',null,`class`,`bold p-l-4`);
elaHyvA.cls = {'red-text': component.topic.userAnswer.prize < component.topic.prize, 'green-text': component.topic.userAnswer.prize > component.topic.prize};

            for (let className in elaHyvA.cls) {
                elaHyvA.classList.toggle(className, elaHyvA.cls[className]);
            }  
            let elKvR6x = eo('span','I5Lf');
text(component.topic.userAnswer.prize > component.topic.prize ? '+' : '-');
ec('span');
let elS30em = eo('span','wh8f');
text(Math.abs(component.topic.userAnswer.prize - component.topic.prize).format());
ec('span');
ec('div');
}}else { 
let cmpYp_N = this._lc('cCcfeE5Hl', {parent:component,parentTop:layout,props:{coins:component.topic.prize},state:'st1StRZ'});
}let cndVmrT = component.startQuest;
this.setState('st5adzm', cndVmrT);
if (cndVmrT) { 
let elp_DLd = eo('div','0SIf');
let cndCf1P = ! component.topic.subscribed;
this.setState('sthkxOc', cndCf1P);
let cndfsn0 = !(cndCf1P);
this.setState('stSs8Fq', cndfsn0);
if (cndCf1P) { 
let el0wunc = eo('a','unLf',null,`href`,`/academy`,`class`,`btn btn-sm btn-danger bold`);
text(`Subscribe to answer!`);
let elIxAbK = eo('i','_Y0f',null,`class`,`${fas('lock') + ' icon ml-2 icon'}`);
ec('i');
ec('a');
}else { 
let elU87GA = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.showQuestAnswer()}]}, boolAttrs, {disabled:component.disableQuestBtn},`class`,`btn text-uppercase`);
elU87GA.cls = component.btns;

            for (let className in elU87GA.cls) {
                elU87GA.classList.toggle(className, elU87GA.cls[className]);
            }  
            text( component.openAnswerText ? 'Cancel' : 'Start quest' );
let cndwFuZ = ! component.user.isLoggedIn();
this.setState('sti9Iu3', cndwFuZ);
if (cndwFuZ) { 
let elZaQ_i = eo('i','uX8f',null,`class`,`${fas('lock') + ' icon ml-2 icon'}`);
ec('i');
}ec('button');
}ec('div');
}let cndq60f = component.approveMsg.status === 'rejected';
this.setState('stQGaN4', cndq60f);
if (cndq60f) { 
let el_0GtA = eo('div','R8gf',null, eventListeners, {onclick:[function(e) {var $el = this;component.editAnswer(component.currentUserAnswer.id, component.currentUserAnswer.answer)}]},`title`,`${trans(`Edit your answer`)}`,`class`,`text-info cursor text-center`);
let el8mD1F = eo('i','K3Rf',null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('div');
}ec('div');
ec('div');
ec('div');
ec('div');
ec('div');
}}});

                    this.isReadyToGo();
                }
        });