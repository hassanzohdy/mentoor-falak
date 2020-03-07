_Component({
                selector: 'topic-page',
                c: 'TopicPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['topic','openAnswerText','form','submitAnswer','storeAnswer','answerData','isValidForm','isSending','cancelBtn','user','handleAnswerDisplay','approveMsg','startQuest','btns','showQuestAnswer','disableQuestBtn','editAnswer','currentUserAnswer'],
                children: {cdVtc4SZT:'flk-spinner',cWRyrLwpv:'flk-time-ago',c0B1hgxGm:'flk-facebook-share',cmTMkIFC7:'markdown',cSouZOVF_:'flk-audio-player',cgkeXZMqk:'markdown',ccCbpP2fI:'flk-alert',ckqV8bquo:'markdown-input',cbb9r2OH4:'user-online',c40RvGPG3:'markdown',cP1Z7kHKa:'markdown',c4Ss8sYWI:'gold-icon',cdVeZ6MbA:'gold-icon',cN69yoBgb:'layout'},
                render: function (component) {
                    let cmpOvHI = this._lc('cN69yoBgb', {parent:component,content:(layout) => {let cndOr4j = Is.empty(component.topic);
this.setState('stnYudD', cndOr4j);
if (cndOr4j) { 
let cmpZOfb = this._lc('cdVtc4SZT', {parent:component,parentTop:layout,state:'stnYudD'});
}let cndVVWf = ! Is.empty(component.topic);
this.setState('stMJ6Wq', cndVVWf);
if (cndVVWf) { 
let elrkENp = eo('div','P0Tf',null,`class`,`row topicDetails`);
let elLaC4J = eo('div','0qcf',null,`class`,`col-lg-9 col-md-8`);
let elOEkOS = eo('section','dWcf');
let elQxcsr = eo('header','YZbf',null,`class`,`topicTitle`);
let el43ExD = eo('h2','fA9f',null,`class`,`text-capitalize bold trackImage`);
let elH2Pk9 = eo('a','wHvf',null,`href`,`${URLS.track(component.topic.track)}`);
let elCnRaP = ev('img','hfEf',null,`src`,`${component.topic.track.image}`,`class`,`mr-2 v-top`,`title`,`${component.topic.track.name}`,`alt`,`${component.topic.track.name}`);
ec('a');
let el7A_4w = eo('div','t1Ff',null,`class`,`d-inline-block`);
text( component.topic.title );
let eledOaK = eo('div','C76f',null,`class`,`text-muted dateFont mt-1 font-weight-normal`);
let el_VFJ8 = eo('i','7cQf',null,`class`,`${fas('calendar')} mx-2 icon`);
ec('i');
let cmpdtlA = this._lc('cWRyrLwpv', {parent:component,parentTop:layout,props:{timestamp:component.topic.createdAt.timestamp},state:'stMJ6Wq'});
let elzNH5g = eo('div','f1Gf',null,`class`,`m-t-1`);
let cmpHN16 = this._lc('c0B1hgxGm', {parent:component,parentTop:layout,state:'stMJ6Wq'});
ec('div');
ec('div');
ec('div');
ec('h2');
ec('header');
let eltplWa = eo('p','oZPf',null,`class`,`topicDesc`);
text( component.topic.shortDescription );
ec('p');
let cndsXrS = component.topic.userAnswer && component.topic.userAnswer.status == 'rejected' && (component.topic.userAnswer.comment || component.topic.userAnswer.recordNote);
this.setState('sttHU53', cndsXrS);
if (cndsXrS) { 
let elnQz8Q = eo('footer','5H3f',null,`class`,`card p-2 m-b-1`);
let el6Kmz9 = eo('h3','zIZf',null,`class`,`red-text bold m-b-1`);
text(`Your answer has been rejected :(`);
ec('h3');
let elYvVh9 = eo('span','d_if',null,`class`,`d-inline-block`);
text(`Note by:`);
ec('span');
let ellSmBt = eo('strong','uu6f',null,`class`,`d-inline-block`);
text(component.topic.userAnswer.commentBy.name);
ec('strong');
let elNzJVN = eo('p','nsyf',null,`class`,`notes`);
let cndQfJt = component.topic.userAnswer.comment;
this.setState('stlcRNB', cndQfJt);
if (cndQfJt) { 
let cmpFEEM = this._lc('cmTMkIFC7', {parent:component,parentTop:layout,props:{content:component.topic.userAnswer.comment},state:'stlcRNB'});
}ec('p');
let cndRfb4 = component.topic.userAnswer.recordNote;
this.setState('stMWgtn', cndRfb4);
if (cndRfb4) { 
let cmpDjyL = this._lc('cSouZOVF_', {parent:component,parentTop:layout,props:{src:component.topic.userAnswer.recordNote},attrs:{src:`${component.topic.userAnswer.recordNote}`},state:'stMWgtn'});
}ec('footer');
}let el371Af = eo('div',null,null,`class`,`metaInfo`);
let el2rixE = eo('h3',null,null,`class`,`infoTitle bold`);
text(`Quest`);
ec('h3');
ec('div');
let el3icKq = eo('p',null,null,`class`,`topicQuest m-b-2`);
let cndRC1r = component.topic.quest;
this.setState('st1bB_W', cndRC1r);
if (cndRC1r) { 
let cmpuq8M = this._lc('cgkeXZMqk', {parent:component,parentTop:layout,props:{content:component.topic.quest},state:'st1bB_W'});
}ec('p');
ec('section');
let cndKuSu = component.openAnswerText;
this.setState('stFrMnW', cndKuSu);
let cnd2CU3 = ! Is.empty(component.topic.answers);
this.setState('stuEBPi', cnd2CU3);
if (cndKuSu) { 
let elSHP5G = eo('div','GMDf',null,`class`,`answerForm`);
let elSTV9M = eo('h3','lqRf',null,`class`,`bold mb-3`);
text(`Please be aware of the following notes when you submit your answer`);
ec('h3');
let elMvFph = eo('ul','fubf',null,`id`,`notes-list`);
let elODCMp = eo('li','0okf');
text(`Don't forget to read about`);
let elp6yJD = eo('a','9Pqf',null,`href`,`/writing-notes`,`class`,`bold mx-2 teal-text`);
text(`writing
                            notes`);
ec('a');
text(`before starting the quest.`);
ec('li');
let elcqM8I = eo('li','em0f',null,`class`,`bold`);
text(`DO NOT copy/paste the answer, write it with your own words and understanding.`);
ec('li');
let elu4rlK = eo('li','Fluf');
text(`Your answer is not meant to be ideal, so read about the quest and write what you know.`);
ec('li');
let elaWzLk = eo('li','h9xf');
text(`Make your answer simple and understandable.`);
ec('li');
let elUb7l9 = eo('li','PiKf');
text(`You can use markdown syntax in your answer, so use it especially in writing code.`);
ec('li');
let elAB0Xy = eo('li','j1bf');
text(`Always put references at the bottom of your answer from the articles/books you used in your
                        answer.`);
ec('li');
let elDsVvw = eo('li','h3Mf');
text(`Stick to the quest requirements, don't explain anything else.`);
ec('li');
let elJA0uU = eo('li','0wcf');
text(`Your answer will be reviewed before publishing it to public, still write what you only know for
                        the quest.`);
ec('li');
let elPAHaq = eo('li','CBuf');
text(`Once the answer is posted, you can't change it while it is pending.`);
ec('li');
let el9V4Cg = eo('li','YIPf');
text(`If the answer is rejected, you can edit it and try again.`);
ec('li');
ec('ul');
let cndQHRk = component.form;
this.setState('stLS0_T', cndQHRk);
if (cndQHRk) { 
let cmpWhby = this._lc('ccCbpP2fI', {parent:component,parentTop:layout,events:{onconfirm:function(e) {let $el = this; component.submitAnswer(component.form)},onclose:function(e) {let $el = this; component.form = null}},state:'stLS0_T'});
}let cndWzax = component.openAnswerText;
this.setState('stXzo5M', cndWzax);
if (cndWzax) { 
let elGdUdY = eo('form','NJRf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.form = $el;}]});

                if (! elGdUdY.formHandler) {
                    window.cfrmdlr = elGdUdY.formHandler = new FormHandler(elGdUdY, component);
                } else {
                    window.cfrmdlr = elGdUdY.formHandler;
                }
            let cmpccb_ = this._lc('ckqV8bquo', {parent:component,parentTop:layout,props:{value:component.answerData},events:{oninput:function(e) {let $el = this; component.storeAnswer(e)}},attrs:{placeholder:`${trans(`Write your answer ;)`)}`,type:'textarea',required:''},state:'stXzo5M'});
let eluj5cf = eo('button','x2of',null, boolAttrs, {disabled:!component.isValidForm || component.isSending},`class`,`btn btn-primary float-right`);
text(`Send`);
ec('button');
ec('form');
}let cndN_Hj = component.cancelBtn;
this.setState('stBmegC', cndN_Hj);
if (cndN_Hj) { 
let elVkuHy = eo('button','0F5f',null, eventListeners, {onclick:[function(e) {var $el = this;component.openAnswerText = !component.openAnswerText; component.cancelBtn = false}]},`class`,`btn btn-danger float-right mr-2`);
text(`Cancel`);
ec('button');
}ec('div');
}else if (cnd2CU3) { 
let elHIurn = eo('div');
let elEEkJD = eo('h4',null,null,`class`,`answersTitle bold m-b-2`);
text(`Answers ( ${ component.topic.answers.length } )`);
ec('h4');
let cnd95hm = ! component.topic.public && !component.topic.answered && component.user.id != 1;
this.setState('stbUqZJ', cnd95hm);
let cndBl0W = !(cnd95hm);
this.setState('stnaefG', cndBl0W);
if (cnd95hm) { 
let elH5oe4 = eo('h2','qg2f',null,`class`,`text-center bold teal-text`);
text(`You need to answer first to see other's answers!`);
ec('h2');
}else { 
for (let i in component.topic.answers) {
let answer = component.topic.answers[i]; 
 let ii1sAL = 'OGMSNuv' + i;
let elhP2hy = eo('div','0c3Qv7rMsUgq' + i+ii1sAL,null,`class`,`card m-b-2`);
let elVLC1H = eo('div','ETZff'+ii1sAL,null,`class`,`card-body`);
let elvYOdC = eo('div','hZqff'+ii1sAL,null,`class`,`d-flex justify-content-between mb-3`);
let elohnin = eo('div','Dpfff'+ii1sAL,null,`class`,`answerMeta w-100`);
let elOnSdd = eo('span','LE2ff'+ii1sAL,null, eventListeners, {onclick:[function(e) {var $el = this;component.handleAnswerDisplay(answer);}]},`class`,`mainColor text-capitalize mr-2 pointer bold d-block`);
let elyWjcX = eo('span','pUhff'+ii1sAL,null,`class`,` ${cls({'green-text': answer.by.id == component.user.id, 'blue-text': answer.by.id != component.user.id})}`);
text(answer.by.name);
ec('span');
let cmpK4AS = this._lc('cbb9r2OH4', {parent:component,parentTop:layout,props:{id:answer.by.id},attrs:{id:`${answer.by.id}`},state:'stnaefG',insideLoop:true,index:"" +ii1sAL});
let cndB7x4 = answer.by.id == component.user.id && answer.status != 'approved';
this.setState('stLthXD', cndB7x4);
let cnd091J = answer.display == DISPLAYED;
this.setState('stehSu1', cnd091J);
let cnd88Ce = answer.display == HIDDEN;
this.setState('st80hWB', cnd88Ce);
if (cndB7x4) { 
let elNmIGS = eo('span','Ypvff'+ii1sAL,null,`class`,`text-capitalize badge align-bottom ml-3 mb-1 ${cls(answerStatusClass(answer.status))}`);
text( answer.status );
ec('span');
}let cnd_DFD = answer.display == SEMI_DISPLAYED;
this.setState('stIFiF_', cnd_DFD);
let cndPuoK = cnd091J;
this.setState('st5xrV1', cndPuoK);
let cndLNbA = cnd88Ce;
this.setState('stEAOog', cndLNbA);
if (cnd_DFD) { 
let elzMYR4 = eo('i','9CIff'+ii1sAL,null,`title`,`${trans(`Display`)}`,`class`,`${fas('angle-down')} float-right fa-2x icon`);
ec('i');
}else if (cndPuoK) { 
let el0Evoc = eo('i','I1Mff'+ii1sAL,null,`title`,`${trans(`Hide`)}`,`class`,`${fas('minus')} float-right fa-2x icon`);
ec('i');
}else if (cndLNbA) { 
let elHZcFm = eo('i','izjff'+ii1sAL,null,`title`,`${trans(`Semi display`)}`,`class`,`${fas('plus')} float-right fa-2x icon`);
ec('i');
}ec('span');
let eluWdk1 = eo('small','Ruuff'+ii1sAL,null,`class`,`text-muted d-block`);
text( answer.createdAt.format );
ec('small');
ec('div');
ec('div');
let cndNKYs = answer.display == SEMI_DISPLAYED;
this.setState('stNwFam', cndNKYs);
let cndEXIG = answer.display == DISPLAYED;
this.setState('stUNck6', cndEXIG);
if (cndNKYs) { 
let cmpEvXQ = this._lc('c40RvGPG3', {parent:component,parentTop:layout,props:{content:answer.answer.split('\n').slice(0, 10).join('\n')},state:'stNwFam',insideLoop:true,index:"" +ii1sAL});
let cndkxKL = answer.answer.split('\n').length > 10;
this.setState('st_FO9m', cndkxKL);
if (cndkxKL) { 
let elwxaJm = eo('p','Tvtff'+ii1sAL,null, eventListeners, {onclick:[function(e) {var $el = this;component.handleAnswerDisplay(answer)}]},`class`,`pointer bold pink-text`);
text(`Read more...`);
ec('p');
}}else if (cndEXIG) { 
let cmpaHQu = this._lc('cP1Z7kHKa', {parent:component,parentTop:layout,props:{content:answer.answer},state:'stUNck6',insideLoop:true,index:"" +ii1sAL});
}ec('div');
ec('div');
}
}ec('div');
}ec('div');
let elqJ9Ao = eo('div',null,null,`class`,`col-lg-3 col-md-4 text-center`);
let elFdsJc = eo('div',null,null,`class`,`card`);
let elJ2TYZ = eo('div',null,null,`class`,`card-body`);
let cnd8OQ8 = component.approveMsg.show;
this.setState('stAm_dl', cnd8OQ8);
if (cnd8OQ8) { 
let elqkBKd = eo('div','efDf',null,`class`,`mb-3`);
let elwcjhw = eo('span','v6df',null,`class`,`badge text-uppercase ${cls(answerStatusClass(component.approveMsg.status))}`);
text(component.approveMsg.status);
ec('span');
let cndWgjC = component.approveMsg.status === 'rejected';
this.setState('stfe3i9', cndWgjC);
if (cndWgjC) { 
let elWcbBV = eo('span','iqyf');
text(component.approveMsg.msg);
ec('span');
}ec('div');
}let elgizeo = eo('div',null,null,`class`,`topicEsTime`);
let cndeAZP = component.topic.userAnswer && component.topic.userAnswer.status == 'approved';
this.setState('st4WIwp', cndeAZP);
let cndS0U2 = !(cndeAZP);
this.setState('stTgJYD', cndS0U2);
if (cndeAZP) { 
let cndykgr = component.topic.userAnswer.prize != component.topic.prize;
this.setState('stLdZCV', cndykgr);
if (cndykgr) { 
let elQ6AmT = eo('span','Uoof',null,`class`,`reward-status ${cls({'up': component.topic.userAnswer.prize > component.topic.prize, down: component.topic.userAnswer.prize < component.topic.prize})}`);
ec('span');
}let cmpRJ5c = this._lc('c4Ss8sYWI', {parent:component,parentTop:layout});
let elIvq8i = eo('span',null,null,`class`,`bold ${cls({'green-text': component.topic.userAnswer.prize > component.topic.prize, 'red-text': component.topic.userAnswer.prize < component.topic.prize})}`);
text(component.topic.userAnswer.prize.format());
ec('span');
let cndMFrB = component.topic.userAnswer && component.topic.userAnswer.prize != component.topic.prize;
this.setState('st9xbLw', cndMFrB);
if (cndMFrB) { 
let elBws3P = eo('div','e3vf',null,`class`,`bold p-l-4 ${cls({'red-text': component.topic.userAnswer.prize < component.topic.prize, 'green-text': component.topic.userAnswer.prize > component.topic.prize})}`);
let elXB2yI = eo('span','YLuf');
text(component.topic.userAnswer.prize > component.topic.prize ? '+' : '-');
ec('span');
let elAXoum = eo('span','WAhf');
text(Math.abs(component.topic.userAnswer.prize - component.topic.prize).format());
ec('span');
ec('div');
}}else { 
let cmpWAhB = this._lc('cdVeZ6MbA', {parent:component,parentTop:layout,props:{coins:component.topic.prize},state:'stTgJYD'});
}let cndichu = component.startQuest;
this.setState('stKSPSV', cndichu);
if (cndichu) { 
let elqrc7p = eo('div','Sqof');
let cndl0Ee = ! component.topic.subscribed;
this.setState('stNhff7', cndl0Ee);
let cndYzUF = !(cndl0Ee);
this.setState('stq9Oo0', cndYzUF);
if (cndl0Ee) { 
let elEFT6x = eo('a','S23f',null,`href`,`/academy`,`class`,`btn btn-sm btn-danger bold`);
text(`Subscribe to answer!`);
let elIXp0s = eo('i','I3tf',null,`class`,`${fas('lock')} icon ml-2 icon`);
ec('i');
ec('a');
}else { 
let elBazNJ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.showQuestAnswer()}]}, boolAttrs, {disabled:component.disableQuestBtn},`class`,`btn text-uppercase ${cls(component.btns)}`);
text( component.openAnswerText ? 'Cancel' : 'Start quest' );
let cndwcFW = ! component.user.isLoggedIn();
this.setState('stxAnU5', cndwcFW);
if (cndwcFW) { 
let eld2qty = eo('i','1Laf',null,`class`,`${fas('lock')} icon ml-2 icon`);
ec('i');
}ec('button');
}ec('div');
}let cndSNjz = component.approveMsg.status === 'rejected';
this.setState('stXw483', cndSNjz);
if (cndSNjz) { 
let el95TBM = eo('div','xuaf',null, eventListeners, {onclick:[function(e) {var $el = this;component.editAnswer(component.currentUserAnswer.id, component.currentUserAnswer.answer)}]},`title`,`${trans(`Edit your answer`)}`,`class`,`text-info cursor text-center`);
let elbocY_ = eo('i','Z1jf',null,`class`,`${fas('edit')} icon`);
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