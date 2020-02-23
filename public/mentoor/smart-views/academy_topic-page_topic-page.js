_Component({
                selector: 'topic-page',
                c: 'TopicPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['topic','openAnswerText','form','submitAnswer','storeAnswer','answerData','isValidForm','isSending','cancelBtn','user','handleAnswerDisplay','approveMsg','startQuest','btns','showQuestAnswer','disableQuestBtn','editAnswer','currentUserAnswer'],
                children: {cbUZzVbwU:'flk-spinner',cQ9Fq9_Ai:'flk-time-ago',c0q8tcuVO:'flk-facebook-share',cfE9IwWlX:'markdown',cghYymAZC:'flk-audio-player',cB_cBXGvw:'markdown',cYgepxYib:'flk-alert',cTFsD7zbG:'markdown-input',cPP4LHFBs:'user-online',cVY_Y1DHq:'markdown',cRbTGY9jg:'markdown',cCWQL1KPG:'gold-icon',cognIXMCK:'gold-icon',cGWqoSrkR:'layout'},
                render: function (component) {
                    let cmpJaoJ = this._lc('cGWqoSrkR', {parent:component,content:(layout) => {let cnd5iSA = Is.empty(component.topic);
this.setState('stpXIFc', cnd5iSA);
if (cnd5iSA) { 
let cmpu2Di = this._lc('cbUZzVbwU', {parent:component,parentTop:layout,state:'stpXIFc'});
}let cndOhP7 = ! Is.empty(component.topic);
this.setState('stM1IBv', cndOhP7);
if (cndOhP7) { 
let elp3i62 = eo('div','OpMf',null,`class`,`row topicDetails`);
let elQVu7N = eo('div','DDZf',null,`class`,`col-lg-9 col-md-8`);
let el56oY4 = eo('section','SnHf');
let elm0JPa = eo('header','lECf',null,`class`,`topicTitle`);
let elUrWgZ = eo('h2','fbWf',null,`class`,`text-capitalize bold trackImage`);
let el8At5j = eo('a','K2Df',null,`href`,`${URLS.track(component.topic.track)}`);
let elYSE9R = ev('img','ZmOf',null,`src`,`${component.topic.track.image}`,`class`,`mr-2 v-top`,`title`,`${component.topic.track.name}`,`alt`,`${component.topic.track.name}`);
ec('a');
let el3caeE = eo('div','o9Ff',null,`class`,`d-inline-block`);
text( component.topic.title );
let elMtJoY = eo('div','gqlf',null,`class`,`text-muted dateFont mt-1 font-weight-normal`);
let elzD5O1 = eo('i','cIpf',null,`class`,`${fas('calendar') + ' mx-2 icon'}`);
ec('i');
let cmpR4pa = this._lc('cQ9Fq9_Ai', {parent:component,parentTop:layout,props:{timestamp:component.topic.createdAt.timestamp},state:'stM1IBv'});
let eltJays = eo('div','G91f',null,`class`,`m-t-1`);
let cmpXcKU = this._lc('c0q8tcuVO', {parent:component,parentTop:layout,state:'stM1IBv'});
ec('div');
ec('div');
ec('div');
ec('h2');
ec('header');
let elViceP = eo('p','SlVf',null,`class`,`topicDesc`);
text( component.topic.shortDescription );
ec('p');
let cndLBtE = component.topic.userAnswer && component.topic.userAnswer.status == 'rejected' && (component.topic.userAnswer.comment || component.topic.userAnswer.recordNote);
this.setState('st1s5Tq', cndLBtE);
if (cndLBtE) { 
let elQSKi0 = eo('footer','Jnyf',null,`class`,`card p-2 m-b-1`);
let elmJgbD = eo('h3','vWzf',null,`class`,`red-text bold m-b-1`);
text(`Your answer has been rejected :(`);
ec('h3');
let eltdKWH = eo('span','0Okf',null,`class`,`d-inline-block`);
text(`Note by:`);
ec('span');
let elgCvkl = eo('strong','6xnf',null,`class`,`d-inline-block`);
text(component.topic.userAnswer.commentBy.name);
ec('strong');
let elCK1pJ = eo('p','NSzf',null,`class`,`notes`);
let cndD1oz = component.topic.userAnswer.comment;
this.setState('stnwRMq', cndD1oz);
if (cndD1oz) { 
let cmpsDH5 = this._lc('cfE9IwWlX', {parent:component,parentTop:layout,props:{content:component.topic.userAnswer.comment},state:'stnwRMq'});
}ec('p');
let cndU72Y = component.topic.userAnswer.recordNote;
this.setState('stTdOWj', cndU72Y);
if (cndU72Y) { 
let cmpNQUe = this._lc('cghYymAZC', {parent:component,parentTop:layout,props:{src:component.topic.userAnswer.recordNote},attrs:{src:`${component.topic.userAnswer.recordNote}`},state:'stTdOWj'});
}ec('footer');
}let elBeYEB = eo('div',null,null,`class`,`metaInfo`);
let elAyjsX = eo('h3',null,null,`class`,`infoTitle bold`);
text(`Quest`);
ec('h3');
ec('div');
let elRzM7I = eo('p',null,null,`class`,`topicQuest m-b-2`);
let cndpXXa = component.topic.quest;
this.setState('stC50oj', cndpXXa);
if (cndpXXa) { 
let cmpxDzH = this._lc('cB_cBXGvw', {parent:component,parentTop:layout,props:{content:component.topic.quest},state:'stC50oj'});
}ec('p');
ec('section');
let cndxb7B = component.openAnswerText;
this.setState('stFF0a1', cndxb7B);
let cndLph0 = ! Is.empty(component.topic.answers);
this.setState('stsPMas', cndLph0);
if (cndxb7B) { 
let el1zzXM = eo('div','hUPf',null,`class`,`answerForm`);
let elxslDP = eo('h3','D4rf',null,`class`,`bold mb-3`);
text(`Please be aware of the following notes when you submit your answer`);
ec('h3');
let elnRV2j = eo('ul','_fGf',null,`id`,`notes-list`);
let el_kWcR = eo('li','8upf');
text(`Don't forget to read about`);
let el5KQ20 = eo('a','H_cf',null,`href`,`/writing-notes`,`class`,`bold mx-2 teal-text`);
text(`writing
                            notes`);
ec('a');
text(`before starting the quest.`);
ec('li');
let eldlzpj = eo('li','Hf4f',null,`class`,`bold`);
text(`DO NOT copy/paste the answer, write it with your own words and understanding.`);
ec('li');
let el_ye1P = eo('li','VTmf');
text(`Your answer is not meant to be ideal, so read about the quest and write what you know.`);
ec('li');
let eloX57M = eo('li','H56f');
text(`Make your answer simple and understandable.`);
ec('li');
let elnPBKv = eo('li','pJZf');
text(`You can use markdown syntax in your answer, so use it especially in writing code.`);
ec('li');
let elr0hDc = eo('li','0wzf');
text(`Always put references at the bottom of your answer from the articles/books you used in your
                        answer.`);
ec('li');
let elhT_sF = eo('li','w2Lf');
text(`Stick to the quest requirements, don't explain anything else.`);
ec('li');
let elC5R3T = eo('li','C1Ef');
text(`Your answer will be reviewed before publishing it to public, still write what you only know for
                        the quest.`);
ec('li');
let elJGcsa = eo('li','GzSf');
text(`Once the answer is posted, you can't change it while it is pending.`);
ec('li');
let elmt7xB = eo('li','eeif');
text(`If the answer is rejected, you can edit it and try again.`);
ec('li');
ec('ul');
let cndCTpu = component.form;
this.setState('stBL_NC', cndCTpu);
if (cndCTpu) { 
let cmpCERz = this._lc('cYgepxYib', {parent:component,parentTop:layout,events:{onconfirm:function(e) {let $el = this; component.submitAnswer(component.form)},onclose:function(e) {let $el = this; component.form = null}},state:'stBL_NC'});
}let cnd7Y_c = component.openAnswerText;
this.setState('stbalez', cnd7Y_c);
if (cnd7Y_c) { 
let ellrw2_ = eo('form','mjAf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.form = $el;}]});

                if (! ellrw2_.formHandler) {
                    window.cfrmdlr = ellrw2_.formHandler = new FormHandler(ellrw2_, component);
                } else {
                    window.cfrmdlr = ellrw2_.formHandler;
                }
            let cmp3Hfw = this._lc('cTFsD7zbG', {parent:component,parentTop:layout,props:{value:component.answerData},events:{oninput:function(e) {let $el = this; component.storeAnswer(e)}},attrs:{placeholder:`${trans(`Write your answer ;)`)}`,type:'textarea',required:''},state:'stbalez'});
let elPcBBr = eo('button','zWKf',null, boolAttrs, {disabled:!component.isValidForm || component.isSending},`class`,`btn btn-primary float-right`);
text(`Send`);
ec('button');
ec('form');
}let cndon5b = component.cancelBtn;
this.setState('stw_PIY', cndon5b);
if (cndon5b) { 
let elNo2QF = eo('button','tvYf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openAnswerText = !component.openAnswerText; component.cancelBtn = false}]},`class`,`btn btn-danger float-right mr-2`);
text(`Cancel`);
ec('button');
}ec('div');
}else if (cndLph0) { 
let elhmgjO = eo('div');
let el5RUlb = eo('h4',null,null,`class`,`answersTitle bold m-b-2`);
text(`Answers ( ${ component.topic.answers.length } )`);
ec('h4');
let cndCuHE = ! component.topic.public && !component.topic.answered && component.user.id != 1;
this.setState('stXVJer', cndCuHE);
let cnd6rXO = !(cndCuHE);
this.setState('stR6kZJ', cnd6rXO);
if (cndCuHE) { 
let el82nvz = eo('h2','1fdf',null,`class`,`text-center bold teal-text`);
text(`You need to answer first to see other's answers!`);
ec('h2');
}else { 
for (let i in component.topic.answers) {
let answer = component.topic.answers[i]; 
 let iiwz3g = '2h6hbjF' + i;
let elHJEGi = eo('div','OKqqOrEG6n2k' + i+iiwz3g,null,`class`,`card m-b-2`);
let el5x6IU = eo('div','88xff'+iiwz3g,null,`class`,`card-body`);
let elzAKM4 = eo('div','XO0ff'+iiwz3g,null,`class`,`d-flex justify-content-between mb-3`);
let ellqzFY = eo('div','Lkfff'+iiwz3g,null,`class`,`answerMeta w-100`);
let elW5MQH = eo('span','W4uff'+iiwz3g,null, eventListeners, {onclick:[function(e) {var $el = this;component.handleAnswerDisplay(answer);}]},`class`,`mainColor text-capitalize mr-2 pointer bold d-block`);
let elpbNWK = eo('span','501ff'+iiwz3g);
elpbNWK.cls = {'green-text': answer.by.id == component.user.id, 'blue-text': answer.by.id != component.user.id};

            for (let className in elpbNWK.cls) {
                elpbNWK.classList.toggle(className, elpbNWK.cls[className]);
            }  
            text(answer.by.name);
ec('span');
let cmpuu6l = this._lc('cPP4LHFBs', {parent:component,parentTop:layout,props:{id:answer.by.id},attrs:{id:`${answer.by.id}`},state:'stR6kZJ',insideLoop:true,index:"" +iiwz3g});
let cnds1qh = answer.by.id == component.user.id && answer.status != 'approved';
this.setState('stN38CZ', cnds1qh);
let cndRLeA = answer.display == DISPLAYED;
this.setState('st68mZI', cndRLeA);
let cndmvuI = answer.display == HIDDEN;
this.setState('stJ5pg8', cndmvuI);
if (cnds1qh) { 
let eldnb_G = eo('span','dBSff'+iiwz3g,null,`class`,`text-capitalize badge align-bottom ml-3 mb-1`);
eldnb_G.cls = answerStatusClass(answer.status);

            for (let className in eldnb_G.cls) {
                eldnb_G.classList.toggle(className, eldnb_G.cls[className]);
            }  
            text( answer.status );
ec('span');
}let cndhWRM = answer.display == SEMI_DISPLAYED;
this.setState('st9d7hJ', cndhWRM);
let cndutfL = cndRLeA;
this.setState('st21ySS', cndutfL);
let cnd9GXs = cndmvuI;
this.setState('stcoQY9', cnd9GXs);
if (cndhWRM) { 
let elczUA7 = eo('i','j5sff'+iiwz3g,null,`title`,`${trans(`Display`)}`,`class`,`${fas('angle-down') + ' float-right fa-2x icon'}`);
ec('i');
}else if (cndutfL) { 
let elP0TDg = eo('i','CzWff'+iiwz3g,null,`title`,`${trans(`Hide`)}`,`class`,`${fas('minus') + ' float-right fa-2x icon'}`);
ec('i');
}else if (cnd9GXs) { 
let el_5hfC = eo('i','Kdsff'+iiwz3g,null,`title`,`${trans(`Semi display`)}`,`class`,`${fas('plus') + ' float-right fa-2x icon'}`);
ec('i');
}ec('span');
let eloG4RP = eo('small','5PJff'+iiwz3g,null,`class`,`text-muted d-block`);
text( answer.createdAt.format );
ec('small');
ec('div');
ec('div');
let cndqynb = answer.display == SEMI_DISPLAYED;
this.setState('sthAZAW', cndqynb);
let cndhoGu = answer.display == DISPLAYED;
this.setState('stsZgLL', cndhoGu);
if (cndqynb) { 
let cmpAgAt = this._lc('cVY_Y1DHq', {parent:component,parentTop:layout,props:{content:answer.answer.split('\n').slice(0, 10).join('\n')},state:'sthAZAW',insideLoop:true,index:"" +iiwz3g});
let cnd1sJo = answer.answer.split('\n').length > 10;
this.setState('sty9Twb', cnd1sJo);
if (cnd1sJo) { 
let elWCAmy = eo('p','3FTff'+iiwz3g,null, eventListeners, {onclick:[function(e) {var $el = this;component.handleAnswerDisplay(answer)}]},`class`,`pointer bold pink-text`);
text(`Read more...`);
ec('p');
}}else if (cndhoGu) { 
let cmp5apR = this._lc('cRbTGY9jg', {parent:component,parentTop:layout,props:{content:answer.answer},state:'stsZgLL',insideLoop:true,index:"" +iiwz3g});
}ec('div');
ec('div');
}
}ec('div');
}ec('div');
let elNvAZK = eo('div',null,null,`class`,`col-lg-3 col-md-4 text-center`);
let elzo_tD = eo('div',null,null,`class`,`card`);
let elnNg_d = eo('div',null,null,`class`,`card-body`);
let cndmPr6 = component.approveMsg.show;
this.setState('st9UQmr', cndmPr6);
if (cndmPr6) { 
let elT0SS9 = eo('div','INef',null,`class`,`mb-3`);
let eljOkB2 = eo('span','Sosf',null,`class`,`badge text-uppercase`);
eljOkB2.cls = answerStatusClass(component.approveMsg.status);

            for (let className in eljOkB2.cls) {
                eljOkB2.classList.toggle(className, eljOkB2.cls[className]);
            }  
            text(component.approveMsg.status);
ec('span');
let cndAJHE = component.approveMsg.status === 'rejected';
this.setState('stRSsdS', cndAJHE);
if (cndAJHE) { 
let elDn_Ov = eo('span','rTwf');
text(component.approveMsg.msg);
ec('span');
}ec('div');
}let el0sO2v = eo('div',null,null,`class`,`topicEsTime`);
let cnd39kl = component.topic.userAnswer && component.topic.userAnswer.status == 'approved';
this.setState('stqcZ4p', cnd39kl);
let cndWa0y = !(cnd39kl);
this.setState('stoxp2y', cndWa0y);
if (cnd39kl) { 
let cndgwNt = component.topic.userAnswer.prize != component.topic.prize;
this.setState('stmePPH', cndgwNt);
if (cndgwNt) { 
let elZxpKc = eo('span','HSvf',null,`class`,`reward-status`);
elZxpKc.cls = {'up': component.topic.userAnswer.prize > component.topic.prize, down: component.topic.userAnswer.prize < component.topic.prize};

            for (let className in elZxpKc.cls) {
                elZxpKc.classList.toggle(className, elZxpKc.cls[className]);
            }  
            ec('span');
}let cmp8FRG = this._lc('cCWQL1KPG', {parent:component,parentTop:layout});
let elh2kTX = eo('span',null,null,`class`,`bold`);
elh2kTX.cls = {'green-text': component.topic.userAnswer.prize > component.topic.prize, 'red-text': component.topic.userAnswer.prize < component.topic.prize};

            for (let className in elh2kTX.cls) {
                elh2kTX.classList.toggle(className, elh2kTX.cls[className]);
            }  
            text(component.topic.userAnswer.prize.format());
ec('span');
let cndOIAd = component.topic.userAnswer && component.topic.userAnswer.prize != component.topic.prize;
this.setState('st3oIjx', cndOIAd);
if (cndOIAd) { 
let elNZ4Ja = eo('div','OT7f',null,`class`,`bold p-l-4`);
elNZ4Ja.cls = {'red-text': component.topic.userAnswer.prize < component.topic.prize, 'green-text': component.topic.userAnswer.prize > component.topic.prize};

            for (let className in elNZ4Ja.cls) {
                elNZ4Ja.classList.toggle(className, elNZ4Ja.cls[className]);
            }  
            let elrOVFj = eo('span','K2yf');
text(component.topic.userAnswer.prize > component.topic.prize ? '+' : '-');
ec('span');
let elViW3g = eo('span','fBLf');
text(Math.abs(component.topic.userAnswer.prize - component.topic.prize).format());
ec('span');
ec('div');
}}else { 
let cmpA25i = this._lc('cognIXMCK', {parent:component,parentTop:layout,props:{coins:component.topic.prize},state:'stoxp2y'});
}let cndBxvI = component.startQuest;
this.setState('stddfGe', cndBxvI);
if (cndBxvI) { 
let els03QY = eo('div','ZbOf');
let cnd0DZX = ! component.topic.subscribed;
this.setState('stIQa2h', cnd0DZX);
let cndMasf = !(cnd0DZX);
this.setState('stKg5S_', cndMasf);
if (cnd0DZX) { 
let elUtWsQ = eo('a','snkf',null,`href`,`/academy`,`class`,`btn btn-sm btn-danger bold`);
text(`Subscribe to answer!`);
let ellUVxt = eo('i','Pz3f',null,`class`,`${fas('lock') + ' icon ml-2 icon'}`);
ec('i');
ec('a');
}else { 
let elTEH5M = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.showQuestAnswer()}]}, boolAttrs, {disabled:component.disableQuestBtn},`class`,`btn text-uppercase`);
elTEH5M.cls = component.btns;

            for (let className in elTEH5M.cls) {
                elTEH5M.classList.toggle(className, elTEH5M.cls[className]);
            }  
            text( component.openAnswerText ? 'Cancel' : 'Start quest' );
let cnd1Y_h = ! component.user.isLoggedIn();
this.setState('st73rcv', cnd1Y_h);
if (cnd1Y_h) { 
let elOSYhE = eo('i','XSaf',null,`class`,`${fas('lock') + ' icon ml-2 icon'}`);
ec('i');
}ec('button');
}ec('div');
}let cnddC6B = component.approveMsg.status === 'rejected';
this.setState('sts9XNO', cnddC6B);
if (cnddC6B) { 
let elX4SfH = eo('div','Hzlf',null, eventListeners, {onclick:[function(e) {var $el = this;component.editAnswer(component.currentUserAnswer.id, component.currentUserAnswer.answer)}]},`title`,`${trans(`Edit your answer`)}`,`class`,`text-info cursor text-center`);
let elqS1YK = eo('i','x0Rf',null,`class`,`${fas('edit') + ' icon'}`);
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