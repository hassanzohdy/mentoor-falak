_Component({
                selector: 'topic-page',
                c: 'TopicPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['topic','openAnswerText','form','submitAnswer','storeAnswer','answerData','isValidForm','isSending','cancelBtn','user','handleAnswerDisplay','approveMsg','startQuest','btns','showQuestAnswer','disableQuestBtn','editAnswer','currentUserAnswer'],
                children: {clKALoAmY:'flk-spinner',cjz640Rpx:'flk-time-ago',caVgA6s5Q:'flk-facebook-share',caOKNs6S7:'markdown',cYr7qEFE4:'flk-audio-player',c0QsoOKOI:'markdown',c4h3gF0aT:'flk-alert',cs4T2hgGx:'markdown-input',cw0eqJLFX:'user-online',c_Ss5kZcT:'markdown',c2XH4WsUk:'markdown',cUVTwWnid:'gold-icon',cqP1ny7We:'gold-icon',cWwwrcE7y:'layout'},
                render: function (component) {
                    let cmpT9ms = this._lc('cWwwrcE7y', {parent:component,content:(layout) => {let cndKj_Y = Is.empty(component.topic);
this.setState('st18piy', cndKj_Y);
if (cndKj_Y) { 
let cmp_6au = this._lc('clKALoAmY', {parent:component,parentTop:layout,state:'st18piy'});
}let cndp4Ou = ! Is.empty(component.topic);
this.setState('stSEt8J', cndp4Ou);
if (cndp4Ou) { 
let elk1IIs = eo('div','tZDf',null,`class`,`row topicDetails`);
let elD9Ms1 = eo('div','M4df',null,`class`,`col-lg-9 col-md-8`);
let elK7eL3 = eo('section','x_Gf');
let el4aGgP = eo('header','8iYf',null,`class`,`topicTitle`);
let elI2a71 = eo('h2','wiaf',null,`class`,`text-capitalize bold trackImage`);
let elepBmW = eo('a','tIqf',null,`href`,`${URLS.track(component.topic.track)}`);
let elUw3vq = ev('img','6qqf',null,`src`,`${component.topic.track.image}`,`class`,`mr-2 v-top`,`title`,`${component.topic.track.name}`,`alt`,`${component.topic.track.name}`);
ec('a');
let elBuVgi = eo('div','gsJf',null,`class`,`d-inline-block`);
text( component.topic.title );
let el0Lgu6 = eo('div','Sb0f',null,`class`,`text-muted dateFont mt-1 font-weight-normal`);
let elcJETy = eo('i','WCNf',null,`class`,`${fas('calendar')} mx-2 icon`);
ec('i');
let cmpRrlq = this._lc('cjz640Rpx', {parent:component,parentTop:layout,props:{timestamp:component.topic.createdAt.timestamp},state:'stSEt8J'});
let elgys03 = eo('div','J1nf',null,`class`,`m-t-1`);
let cmpVm26 = this._lc('caVgA6s5Q', {parent:component,parentTop:layout,state:'stSEt8J'});
ec('div');
ec('div');
ec('div');
ec('h2');
ec('header');
let elvHRae = eo('p','Jwxf',null,`class`,`topicDesc`);
text( component.topic.shortDescription );
ec('p');
let cndSq4V = component.topic.userAnswer && component.topic.userAnswer.status == 'rejected' && (component.topic.userAnswer.comment || component.topic.userAnswer.recordNote);
this.setState('st_UzZO', cndSq4V);
if (cndSq4V) { 
let eluKQyB = eo('footer','iMEf',null,`class`,`card p-2 m-b-1`);
let elbX1Fg = eo('h3','SpTf',null,`class`,`red-text bold m-b-1`);
text(`Your answer has been rejected :(`);
ec('h3');
let elt8B74 = eo('span','_XTf',null,`class`,`d-inline-block`);
text(`Note by:`);
ec('span');
let eluD8AQ = eo('strong','uCsf',null,`class`,`d-inline-block`);
text(component.topic.userAnswer.commentBy.name);
ec('strong');
let el5BRnq = eo('p','P3jf',null,`class`,`notes`);
let cndqBP_ = component.topic.userAnswer.comment;
this.setState('stMYtCN', cndqBP_);
if (cndqBP_) { 
let cmpZapr = this._lc('caOKNs6S7', {parent:component,parentTop:layout,props:{content:component.topic.userAnswer.comment},state:'stMYtCN'});
}ec('p');
let cndaY6O = component.topic.userAnswer.recordNote;
this.setState('st9rK62', cndaY6O);
if (cndaY6O) { 
let cmpgnd2 = this._lc('cYr7qEFE4', {parent:component,parentTop:layout,props:{src:component.topic.userAnswer.recordNote},attrs:{src:`${component.topic.userAnswer.recordNote}`},state:'st9rK62'});
}ec('footer');
}let el_M6nT = eo('div',null,null,`class`,`metaInfo`);
let elBGi8g = eo('h3',null,null,`class`,`infoTitle bold`);
text(`Quest`);
ec('h3');
ec('div');
let elurrMr = eo('p',null,null,`class`,`topicQuest m-b-2`);
let cndQTGe = component.topic.quest;
this.setState('stzwhoN', cndQTGe);
if (cndQTGe) { 
let cmpl8Cr = this._lc('c0QsoOKOI', {parent:component,parentTop:layout,props:{content:component.topic.quest},state:'stzwhoN'});
}ec('p');
ec('section');
let cndWBqj = component.openAnswerText;
this.setState('stn7HSk', cndWBqj);
let cndDrU6 = ! Is.empty(component.topic.answers);
this.setState('stcmyeI', cndDrU6);
if (cndWBqj) { 
let elsKSOA = eo('div','WZ3f',null,`class`,`answerForm`);
let elsn8Sr = eo('h3','EAkf',null,`class`,`bold mb-3`);
text(`Please be aware of the following notes when you submit your answer`);
ec('h3');
let elFIKGK = eo('ul','Rqrf',null,`id`,`notes-list`);
let elDSYYU = eo('li','yV9f');
text(`Don't forget to read about`);
let elFUP9b = eo('a','OZPf',null,`href`,`/writing-notes`,`class`,`bold mx-2 teal-text`);
text(`writing
                            notes`);
ec('a');
text(`before starting the quest.`);
ec('li');
let elA6CIH = eo('li','OZrf',null,`class`,`bold`);
text(`DO NOT copy/paste the answer, write it with your own words and understanding.`);
ec('li');
let elRFqHv = eo('li','Idnf');
text(`Your answer is not meant to be ideal, so read about the quest and write what you know.`);
ec('li');
let elkBVFl = eo('li','3_Cf');
text(`Make your answer simple and understandable.`);
ec('li');
let eltBNdj = eo('li','9_Xf');
text(`You can use markdown syntax in your answer, so use it especially in writing code.`);
ec('li');
let elDYZJP = eo('li','FGGf');
text(`Always put references at the bottom of your answer from the articles/books you used in your
                        answer.`);
ec('li');
let elic8FL = eo('li','Ijkf');
text(`Stick to the quest requirements, don't explain anything else.`);
ec('li');
let elf7_BM = eo('li','9plf');
text(`Your answer will be reviewed before publishing it to public, still write what you only know for
                        the quest.`);
ec('li');
let elZuFpp = eo('li','zBDf');
text(`Once the answer is posted, you can't change it while it is pending.`);
ec('li');
let elLQohV = eo('li','M1pf');
text(`If the answer is rejected, you can edit it and try again.`);
ec('li');
ec('ul');
let cndXmAW = component.form;
this.setState('stzX3L5', cndXmAW);
if (cndXmAW) { 
let cmpu3PQ = this._lc('c4h3gF0aT', {parent:component,parentTop:layout,events:{onconfirm:function(e) {let $el = this; component.submitAnswer(component.form)},onclose:function(e) {let $el = this; component.form = null}},state:'stzX3L5'});
}let cnd7Pp4 = component.openAnswerText;
this.setState('stwD43H', cnd7Pp4);
if (cnd7Pp4) { 
let el_QnHB = eo('form','UGef',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.form = $el;}]});

                if (! el_QnHB.formHandler) {
                    window.cfrmdlr = el_QnHB.formHandler = new FormHandler(el_QnHB, component);
                } else {
                    window.cfrmdlr = el_QnHB.formHandler;
                }
            let cmp5FHt = this._lc('cs4T2hgGx', {parent:component,parentTop:layout,props:{value:component.answerData},events:{oninput:function(e) {let $el = this; component.storeAnswer(e)}},attrs:{placeholder:`${trans(`Write your answer ;)`)}`,type:'textarea',required:''},state:'stwD43H'});
let elY9sU1 = eo('button','KTFf',null, boolAttrs, {disabled:!component.isValidForm || component.isSending},`class`,`btn btn-primary float-right`);
text(`Send`);
ec('button');
ec('form');
}let cndV24o = component.cancelBtn;
this.setState('stbMSXQ', cndV24o);
if (cndV24o) { 
let ellFOsX = eo('button','fOYf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openAnswerText = !component.openAnswerText; component.cancelBtn = false}]},`class`,`btn btn-danger float-right mr-2`);
text(`Cancel`);
ec('button');
}ec('div');
}else if (cndDrU6) { 
let el2oiOl = eo('div');
let elDEPFo = eo('h4',null,null,`class`,`answersTitle bold m-b-2`);
text(`Answers ( ${ component.topic.answers.length } )`);
ec('h4');
let cnds3r4 = ! component.topic.public && !component.topic.answered && component.user.id != 1;
this.setState('stQB_Ed', cnds3r4);
let cndJqRJ = !(cnds3r4);
this.setState('stYEhBH', cndJqRJ);
if (cnds3r4) { 
let elyHPCM = eo('h2','Gq_f',null,`class`,`text-center bold teal-text`);
text(`You need to answer first to see other's answers!`);
ec('h2');
}else { 
for (let i in component.topic.answers) {
let answer = component.topic.answers[i]; 
 let iieQsU = 'xAW1ahe' + i;
let elJFYIz = eo('div','rPTAM3AReDI4' + i+iieQsU,null,`class`,`card m-b-2`);
let elQvHLY = eo('div','Qqcff'+iieQsU,null,`class`,`card-body`);
let elaoCyB = eo('div','MNCff'+iieQsU,null,`class`,`d-flex justify-content-between mb-3`);
let el2I2JC = eo('div','Hq3ff'+iieQsU,null,`class`,`answerMeta w-100`);
let elVrVzv = eo('span','Rcqff'+iieQsU,null, eventListeners, {onclick:[function(e) {var $el = this;component.handleAnswerDisplay(answer);}]},`class`,`mainColor text-capitalize mr-2 pointer bold d-block`);
let elNHuk8 = eo('span','8ATff'+iieQsU,null,`class`,` ${cls({'green-text': answer.by.id == component.user.id, 'blue-text': answer.by.id != component.user.id})}`);
text(answer.by.name);
ec('span');
let cmphb0i = this._lc('cw0eqJLFX', {parent:component,parentTop:layout,props:{id:answer.by.id},attrs:{id:`${answer.by.id}`},state:'stYEhBH',insideLoop:true,index:"" +iieQsU});
let cnd_qts = answer.by.id == component.user.id && answer.status != 'approved';
this.setState('stQR7ry', cnd_qts);
let cnd10zX = answer.display == DISPLAYED;
this.setState('stQHUgT', cnd10zX);
let cndbNC6 = answer.display == HIDDEN;
this.setState('stFEvtV', cndbNC6);
if (cnd_qts) { 
let elwTODz = eo('span','eRNff'+iieQsU,null,`class`,`text-capitalize badge align-bottom ml-3 mb-1 ${cls(answerStatusClass(answer.status))}`);
text( answer.status );
ec('span');
}let cndjMFo = answer.display == SEMI_DISPLAYED;
this.setState('stTz2FR', cndjMFo);
let cndUILY = cnd10zX;
this.setState('stIjzF1', cndUILY);
let cndaQYL = cndbNC6;
this.setState('stbYDAc', cndaQYL);
if (cndjMFo) { 
let el36XWY = eo('i','RnMff'+iieQsU,null,`title`,`${trans(`Display`)}`,`class`,`${fas('angle-down')} float-right fa-2x icon`);
ec('i');
}else if (cndUILY) { 
let elQWmuK = eo('i','vecff'+iieQsU,null,`title`,`${trans(`Hide`)}`,`class`,`${fas('minus')} float-right fa-2x icon`);
ec('i');
}else if (cndaQYL) { 
let elpLbx6 = eo('i','sxxff'+iieQsU,null,`title`,`${trans(`Semi display`)}`,`class`,`${fas('plus')} float-right fa-2x icon`);
ec('i');
}ec('span');
let el787vm = eo('small','J1dff'+iieQsU,null,`class`,`text-muted d-block`);
text( answer.createdAt.format );
ec('small');
ec('div');
ec('div');
let cndeEt4 = answer.display == SEMI_DISPLAYED;
this.setState('sthhYre', cndeEt4);
let cndTZap = answer.display == DISPLAYED;
this.setState('stmYKYa', cndTZap);
if (cndeEt4) { 
let cmpHAhy = this._lc('c_Ss5kZcT', {parent:component,parentTop:layout,props:{content:answer.answer.split('\n').slice(0, 10).join('\n')},state:'sthhYre',insideLoop:true,index:"" +iieQsU});
let cndnxRE = answer.answer.split('\n').length > 10;
this.setState('stP7fsx', cndnxRE);
if (cndnxRE) { 
let elF1BCB = eo('p','d94ff'+iieQsU,null, eventListeners, {onclick:[function(e) {var $el = this;component.handleAnswerDisplay(answer)}]},`class`,`pointer bold pink-text`);
text(`Read more...`);
ec('p');
}}else if (cndTZap) { 
let cmpy04l = this._lc('c2XH4WsUk', {parent:component,parentTop:layout,props:{content:answer.answer},state:'stmYKYa',insideLoop:true,index:"" +iieQsU});
}ec('div');
ec('div');
}
}ec('div');
}ec('div');
let el87H2H = eo('div',null,null,`class`,`col-lg-3 col-md-4 text-center`);
let elvTgNt = eo('div',null,null,`class`,`card`);
let eljPfTi = eo('div',null,null,`class`,`card-body`);
let cndX6lx = component.approveMsg.show;
this.setState('styrFCw', cndX6lx);
if (cndX6lx) { 
let elX13dU = eo('div','yYJf',null,`class`,`mb-3`);
let elphsB5 = eo('span','Wlhf',null,`class`,`badge text-uppercase ${cls(answerStatusClass(component.approveMsg.status))}`);
text(component.approveMsg.status);
ec('span');
let cnd3Cvh = component.approveMsg.status === 'rejected';
this.setState('stwtN2F', cnd3Cvh);
if (cnd3Cvh) { 
let elKzzlw = eo('span','vHLf');
text(component.approveMsg.msg);
ec('span');
}ec('div');
}let elvngL0 = eo('div',null,null,`class`,`topicEsTime`);
let cnd1cCV = component.topic.userAnswer && component.topic.userAnswer.status == 'approved';
this.setState('stMnSR3', cnd1cCV);
let cndYUWM = !(cnd1cCV);
this.setState('st3_HQk', cndYUWM);
if (cnd1cCV) { 
let cndIGtU = component.topic.userAnswer.prize != component.topic.prize;
this.setState('stuvzZ6', cndIGtU);
if (cndIGtU) { 
let el5P4ZQ = eo('span','eZIf',null,`class`,`reward-status ${cls({'up': component.topic.userAnswer.prize > component.topic.prize, down: component.topic.userAnswer.prize < component.topic.prize})}`);
ec('span');
}let cmpFfOm = this._lc('cUVTwWnid', {parent:component,parentTop:layout});
let elZ1gfs = eo('span',null,null,`class`,`bold ${cls({'green-text': component.topic.userAnswer.prize > component.topic.prize, 'red-text': component.topic.userAnswer.prize < component.topic.prize})}`);
text(component.topic.userAnswer.prize.format());
ec('span');
let cndfIBu = component.topic.userAnswer && component.topic.userAnswer.prize != component.topic.prize;
this.setState('st_uz44', cndfIBu);
if (cndfIBu) { 
let el8OX6S = eo('div','X8Xf',null,`class`,`bold p-l-4 ${cls({'red-text': component.topic.userAnswer.prize < component.topic.prize, 'green-text': component.topic.userAnswer.prize > component.topic.prize})}`);
let elZcn1d = eo('span','eETf');
text(component.topic.userAnswer.prize > component.topic.prize ? '+' : '-');
ec('span');
let elZbAqT = eo('span','fyzf');
text(Math.abs(component.topic.userAnswer.prize - component.topic.prize).format());
ec('span');
ec('div');
}}else { 
let cmp_5OO = this._lc('cqP1ny7We', {parent:component,parentTop:layout,props:{coins:component.topic.prize},state:'st3_HQk'});
}let cndo0eR = component.startQuest;
this.setState('stzYQHS', cndo0eR);
if (cndo0eR) { 
let elqmM5q = eo('div','r9wf');
let cndBLN8 = ! component.topic.subscribed;
this.setState('stqkVld', cndBLN8);
let cndbx9I = !(cndBLN8);
this.setState('stPzpby', cndbx9I);
if (cndBLN8) { 
let elikebS = eo('a','b7hf',null,`href`,`/academy`,`class`,`btn btn-sm btn-danger bold`);
text(`Subscribe to answer!`);
let elhyhiQ = eo('i','Mddf',null,`class`,`${fas('lock')} icon ml-2 icon`);
ec('i');
ec('a');
}else { 
let elaNDjK = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.showQuestAnswer()}]}, boolAttrs, {disabled:component.disableQuestBtn},`class`,`btn text-uppercase ${cls(component.btns)}`);
text( component.openAnswerText ? 'Cancel' : 'Start quest' );
let cnd8tGs = ! component.user.isLoggedIn();
this.setState('stwiV2W', cnd8tGs);
if (cnd8tGs) { 
let eldEs0Q = eo('i','UONf',null,`class`,`${fas('lock')} icon ml-2 icon`);
ec('i');
}ec('button');
}ec('div');
}let cnd6ZyC = component.approveMsg.status === 'rejected';
this.setState('st8hnwn', cnd6ZyC);
if (cnd6ZyC) { 
let elu0qLP = eo('div','wtzf',null, eventListeners, {onclick:[function(e) {var $el = this;component.editAnswer(component.currentUserAnswer.id, component.currentUserAnswer.answer)}]},`title`,`${trans(`Edit your answer`)}`,`class`,`text-info cursor text-center`);
let elbUrEX = eo('i','Ds2f',null,`class`,`${fas('edit')} icon`);
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