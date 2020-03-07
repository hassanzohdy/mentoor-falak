_Component({
                selector: 'topic-page',
                c: 'TopicPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['topic','openAnswerText','form','submitAnswer','storeAnswer','answerData','isValidForm','isSending','cancelBtn','user','handleAnswerDisplay','approveMsg','startQuest','btns','showQuestAnswer','disableQuestBtn','editAnswer','currentUserAnswer'],
                children: {c5Gj5gblh:'flk-spinner',cyDeN7a0l:'flk-time-ago',cSTmRyL5R:'flk-facebook-share',cQTRgYEHh:'markdown',czYjGKGsl:'flk-audio-player',cCqjvIEVG:'markdown',cup07wFZ0:'flk-alert',czfIumBHw:'markdown-input',cF5_pWmRM:'user-online',cku79CwYR:'markdown',cM52DwoHt:'markdown',cem1coDnZ:'gold-icon',cp9rflzBO:'gold-icon',cFyefOfMk:'layout'},
                render: function (component) {
                    let cmpL0r9 = this._lc('cFyefOfMk', {parent:component,content:(layout) => {let cndy20i = Is.empty(component.topic);
this.setState('stp03GH', cndy20i);
if (cndy20i) { 
let cmp0afE = this._lc('c5Gj5gblh', {parent:component,parentTop:layout,state:'stp03GH'});
}let cndpGRs = ! Is.empty(component.topic);
this.setState('stbV4oY', cndpGRs);
if (cndpGRs) { 
let elSjvgN = eo('div','C_yf',null,`class`,`row topicDetails`);
let elKlk4B = eo('div','fh6f',null,`class`,`col-lg-9 col-md-8`);
let elN8BNz = eo('section','hnQf');
let elqMLOy = eo('header','6vyf',null,`class`,`topicTitle`);
let elmUmKV = eo('h2','9cMf',null,`class`,`text-capitalize bold trackImage`);
let el5yQ4y = eo('a','Plpf',null,`href`,`${URLS.track(component.topic.track)}`);
let eljRRYa = ev('img','JPnf',null,`src`,`${component.topic.track.image}`,`class`,`mr-2 v-top`,`title`,`${component.topic.track.name}`,`alt`,`${component.topic.track.name}`);
ec('a');
let elepnDj = eo('div','Vk6f',null,`class`,`d-inline-block`);
text( component.topic.title );
let elIbZAj = eo('div','LYQf',null,`class`,`text-muted dateFont mt-1 font-weight-normal`);
let elQurZe = eo('i','7vOf',null,`class`,`${fas('calendar')} mx-2 icon`);
ec('i');
let cmpD9Kn = this._lc('cyDeN7a0l', {parent:component,parentTop:layout,props:{timestamp:component.topic.createdAt.timestamp},state:'stbV4oY'});
let elf5llV = eo('div','pbCf',null,`class`,`m-t-1`);
let cmp9L5a = this._lc('cSTmRyL5R', {parent:component,parentTop:layout,state:'stbV4oY'});
ec('div');
ec('div');
ec('div');
ec('h2');
ec('header');
let elKwGWU = eo('p','IaRf',null,`class`,`topicDesc`);
text( component.topic.shortDescription );
ec('p');
let cndJBPM = component.topic.userAnswer && component.topic.userAnswer.status == 'rejected' && (component.topic.userAnswer.comment || component.topic.userAnswer.recordNote);
this.setState('stPabTT', cndJBPM);
if (cndJBPM) { 
let el6m7KC = eo('footer','0jQf',null,`class`,`card p-2 m-b-1`);
let elDK_xv = eo('h3','OYhf',null,`class`,`red-text bold m-b-1`);
text(`Your answer has been rejected :(`);
ec('h3');
let elv19Ay = eo('span','a4Tf',null,`class`,`d-inline-block`);
text(`Note by:`);
ec('span');
let elqG3Y3 = eo('strong','jLkf',null,`class`,`d-inline-block`);
text(component.topic.userAnswer.commentBy.name);
ec('strong');
let eljuftc = eo('p','SJQf',null,`class`,`notes`);
let cndcuiQ = component.topic.userAnswer.comment;
this.setState('sthhJzZ', cndcuiQ);
if (cndcuiQ) { 
let cmpilDM = this._lc('cQTRgYEHh', {parent:component,parentTop:layout,props:{content:component.topic.userAnswer.comment},state:'sthhJzZ'});
}ec('p');
let cndxF3N = component.topic.userAnswer.recordNote;
this.setState('stU4r9X', cndxF3N);
if (cndxF3N) { 
let cmpYpNn = this._lc('czYjGKGsl', {parent:component,parentTop:layout,props:{src:component.topic.userAnswer.recordNote},attrs:{src:`${component.topic.userAnswer.recordNote}`},state:'stU4r9X'});
}ec('footer');
}let elDNB7w = eo('div',null,null,`class`,`metaInfo`);
let el24m3H = eo('h3',null,null,`class`,`infoTitle bold`);
text(`Quest`);
ec('h3');
ec('div');
let elVsmKg = eo('p',null,null,`class`,`topicQuest m-b-2`);
let cndylyo = component.topic.quest;
this.setState('stTsCaF', cndylyo);
if (cndylyo) { 
let cmp00ay = this._lc('cCqjvIEVG', {parent:component,parentTop:layout,props:{content:component.topic.quest},state:'stTsCaF'});
}ec('p');
ec('section');
let cndipAy = component.openAnswerText;
this.setState('st14Tup', cndipAy);
let cndhWpM = ! Is.empty(component.topic.answers);
this.setState('stw5htv', cndhWpM);
if (cndipAy) { 
let elI12y_ = eo('div','CRwf',null,`class`,`answerForm`);
let elYJkOw = eo('h3','PIIf',null,`class`,`bold mb-3`);
text(`Please be aware of the following notes when you submit your answer`);
ec('h3');
let elYgF6L = eo('ul','0mmf',null,`id`,`notes-list`);
let elgwIiG = eo('li','PJFf');
text(`Don't forget to read about`);
let els7JBz = eo('a','Bqrf',null,`href`,`/writing-notes`,`class`,`bold mx-2 teal-text`);
text(`writing
                            notes`);
ec('a');
text(`before starting the quest.`);
ec('li');
let el4N4st = eo('li','cq2f',null,`class`,`bold`);
text(`DO NOT copy/paste the answer, write it with your own words and understanding.`);
ec('li');
let elQ_WiI = eo('li','EhHf');
text(`Your answer is not meant to be ideal, so read about the quest and write what you know.`);
ec('li');
let elLOEwO = eo('li','fpIf');
text(`Make your answer simple and understandable.`);
ec('li');
let elrPLBX = eo('li','9Ehf');
text(`You can use markdown syntax in your answer, so use it especially in writing code.`);
ec('li');
let elPvomR = eo('li','gMIf');
text(`Always put references at the bottom of your answer from the articles/books you used in your
                        answer.`);
ec('li');
let elrHb1W = eo('li','kS_f');
text(`Stick to the quest requirements, don't explain anything else.`);
ec('li');
let elrbFqe = eo('li','7tRf');
text(`Your answer will be reviewed before publishing it to public, still write what you only know for
                        the quest.`);
ec('li');
let eloHmgE = eo('li','nZlf');
text(`Once the answer is posted, you can't change it while it is pending.`);
ec('li');
let eluqyOV = eo('li','7n4f');
text(`If the answer is rejected, you can edit it and try again.`);
ec('li');
ec('ul');
let cndJPdO = component.form;
this.setState('st1506B', cndJPdO);
if (cndJPdO) { 
let cmp64es = this._lc('cup07wFZ0', {parent:component,parentTop:layout,events:{onconfirm:function(e) {let $el = this; component.submitAnswer(component.form)},onclose:function(e) {let $el = this; component.form = null}},state:'st1506B'});
}let cndPYGU = component.openAnswerText;
this.setState('stjAD7p', cndPYGU);
if (cndPYGU) { 
let elzXcwi = eo('form','pC8f',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.form = $el;}]});

                if (! elzXcwi.formHandler) {
                    window.cfrmdlr = elzXcwi.formHandler = new FormHandler(elzXcwi, component);
                } else {
                    window.cfrmdlr = elzXcwi.formHandler;
                }
            let cmpik8Q = this._lc('czfIumBHw', {parent:component,parentTop:layout,props:{value:component.answerData},events:{oninput:function(e) {let $el = this; component.storeAnswer(e)}},attrs:{placeholder:`${trans(`Write your answer ;)`)}`,type:'textarea',required:''},state:'stjAD7p'});
let el5t9wS = eo('button','ue0f',null, boolAttrs, {disabled:!component.isValidForm || component.isSending},`class`,`btn btn-primary float-right`);
text(`Send`);
ec('button');
ec('form');
}let cndJMYq = component.cancelBtn;
this.setState('st4xeQE', cndJMYq);
if (cndJMYq) { 
let el_mWd2 = eo('button','YUAf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openAnswerText = !component.openAnswerText; component.cancelBtn = false}]},`class`,`btn btn-danger float-right mr-2`);
text(`Cancel`);
ec('button');
}ec('div');
}else if (cndhWpM) { 
let el4aASW = eo('div');
let elQLoJB = eo('h4',null,null,`class`,`answersTitle bold m-b-2`);
text(`Answers ( ${ component.topic.answers.length } )`);
ec('h4');
let cndUUVV = ! component.topic.public && !component.topic.answered && component.user.id != 1;
this.setState('stJcENy', cndUUVV);
let cndskGY = !(cndUUVV);
this.setState('stG7aBI', cndskGY);
if (cndUUVV) { 
let el0kkqq = eo('h2','ppDf',null,`class`,`text-center bold teal-text`);
text(`You need to answer first to see other's answers!`);
ec('h2');
}else { 
for (let i in component.topic.answers) {
let answer = component.topic.answers[i]; 
 let ii6sJ0 = 'QDl4__M' + i;
let elYKyIN = eo('div','36M9CbTVSqtf' + i+ii6sJ0,null,`class`,`card m-b-2`);
let elikbRn = eo('div','Zfjff'+ii6sJ0,null,`class`,`card-body`);
let el6jS2F = eo('div','voMff'+ii6sJ0,null,`class`,`d-flex justify-content-between mb-3`);
let elu3YBo = eo('div','NqSff'+ii6sJ0,null,`class`,`answerMeta w-100`);
let elfVXbB = eo('span','pCUff'+ii6sJ0,null, eventListeners, {onclick:[function(e) {var $el = this;component.handleAnswerDisplay(answer);}]},`class`,`mainColor text-capitalize mr-2 pointer bold d-block`);
let el6pRQ3 = eo('span','2Y_ff'+ii6sJ0,null,`class`,` ${cls({'green-text': answer.by.id == component.user.id, 'blue-text': answer.by.id != component.user.id})}`);
text(answer.by.name);
ec('span');
let cmp2Lpp = this._lc('cF5_pWmRM', {parent:component,parentTop:layout,props:{id:answer.by.id},attrs:{id:`${answer.by.id}`},state:'stG7aBI',insideLoop:true,index:"" +ii6sJ0});
let cndOOs5 = answer.by.id == component.user.id && answer.status != 'approved';
this.setState('stErxLZ', cndOOs5);
let cndaM0j = answer.display == DISPLAYED;
this.setState('styVBOf', cndaM0j);
let cndzur_ = answer.display == HIDDEN;
this.setState('stIZ1Yy', cndzur_);
if (cndOOs5) { 
let elzkrj8 = eo('span','Wewff'+ii6sJ0,null,`class`,`text-capitalize badge align-bottom ml-3 mb-1 ${cls(answerStatusClass(answer.status))}`);
text( answer.status );
ec('span');
}let cndAT2B = answer.display == SEMI_DISPLAYED;
this.setState('stliGJ1', cndAT2B);
let cndWVce = cndaM0j;
this.setState('stxTKo2', cndWVce);
let cnd1soZ = cndzur_;
this.setState('stPRAYU', cnd1soZ);
if (cndAT2B) { 
let elk0x2a = eo('i','J5lff'+ii6sJ0,null,`title`,`${trans(`Display`)}`,`class`,`${fas('angle-down')} float-right fa-2x icon`);
ec('i');
}else if (cndWVce) { 
let el4fIom = eo('i','0qjff'+ii6sJ0,null,`title`,`${trans(`Hide`)}`,`class`,`${fas('minus')} float-right fa-2x icon`);
ec('i');
}else if (cnd1soZ) { 
let elqyBFv = eo('i','UY7ff'+ii6sJ0,null,`title`,`${trans(`Semi display`)}`,`class`,`${fas('plus')} float-right fa-2x icon`);
ec('i');
}ec('span');
let el_4XE3 = eo('small','lG8ff'+ii6sJ0,null,`class`,`text-muted d-block`);
text( answer.createdAt.format );
ec('small');
ec('div');
ec('div');
let cndHbHy = answer.display == SEMI_DISPLAYED;
this.setState('st2XeIw', cndHbHy);
let cndgAPh = answer.display == DISPLAYED;
this.setState('stm1HxF', cndgAPh);
if (cndHbHy) { 
let cmp3NUP = this._lc('cku79CwYR', {parent:component,parentTop:layout,props:{content:answer.answer.split('\n').slice(0, 10).join('\n')},state:'st2XeIw',insideLoop:true,index:"" +ii6sJ0});
let cndM8Yy = answer.answer.split('\n').length > 10;
this.setState('stG_CV2', cndM8Yy);
if (cndM8Yy) { 
let elA0vM1 = eo('p','5aBff'+ii6sJ0,null, eventListeners, {onclick:[function(e) {var $el = this;component.handleAnswerDisplay(answer)}]},`class`,`pointer bold pink-text`);
text(`Read more...`);
ec('p');
}}else if (cndgAPh) { 
let cmpZf5V = this._lc('cM52DwoHt', {parent:component,parentTop:layout,props:{content:answer.answer},state:'stm1HxF',insideLoop:true,index:"" +ii6sJ0});
}ec('div');
ec('div');
}
}ec('div');
}ec('div');
let el1vcmm = eo('div',null,null,`class`,`col-lg-3 col-md-4 text-center`);
let elVsIWJ = eo('div',null,null,`class`,`card`);
let elRYTDi = eo('div',null,null,`class`,`card-body`);
let cnd7_6d = component.approveMsg.show;
this.setState('stNjjfB', cnd7_6d);
if (cnd7_6d) { 
let elVnSa1 = eo('div','sVuf',null,`class`,`mb-3`);
let el5n98X = eo('span','onpf',null,`class`,`badge text-uppercase ${cls(answerStatusClass(component.approveMsg.status))}`);
text(component.approveMsg.status);
ec('span');
let cndOhMk = component.approveMsg.status === 'rejected';
this.setState('stzzxlh', cndOhMk);
if (cndOhMk) { 
let el9qNpr = eo('span','YwGf');
text(component.approveMsg.msg);
ec('span');
}ec('div');
}let elHGqKv = eo('div',null,null,`class`,`topicEsTime`);
let cndxmaf = component.topic.userAnswer && component.topic.userAnswer.status == 'approved';
this.setState('std4z4S', cndxmaf);
let cndDcAW = !(cndxmaf);
this.setState('steebTz', cndDcAW);
if (cndxmaf) { 
let cnd3eJS = component.topic.userAnswer.prize != component.topic.prize;
this.setState('stoAW68', cnd3eJS);
if (cnd3eJS) { 
let elO9QK9 = eo('span','GZuf',null,`class`,`reward-status ${cls({'up': component.topic.userAnswer.prize > component.topic.prize, down: component.topic.userAnswer.prize < component.topic.prize})}`);
ec('span');
}let cmpius0 = this._lc('cem1coDnZ', {parent:component,parentTop:layout});
let elCVl7u = eo('span',null,null,`class`,`bold ${cls({'green-text': component.topic.userAnswer.prize > component.topic.prize, 'red-text': component.topic.userAnswer.prize < component.topic.prize})}`);
text(component.topic.userAnswer.prize.format());
ec('span');
let cndnhoc = component.topic.userAnswer && component.topic.userAnswer.prize != component.topic.prize;
this.setState('stUY9A_', cndnhoc);
if (cndnhoc) { 
let elR7kkg = eo('div','hoWf',null,`class`,`bold p-l-4 ${cls({'red-text': component.topic.userAnswer.prize < component.topic.prize, 'green-text': component.topic.userAnswer.prize > component.topic.prize})}`);
let el5vyFN = eo('span','5o2f');
text(component.topic.userAnswer.prize > component.topic.prize ? '+' : '-');
ec('span');
let elzs4MG = eo('span','itWf');
text(Math.abs(component.topic.userAnswer.prize - component.topic.prize).format());
ec('span');
ec('div');
}}else { 
let cmpsURd = this._lc('cp9rflzBO', {parent:component,parentTop:layout,props:{coins:component.topic.prize},state:'steebTz'});
}let cndhRzb = component.startQuest;
this.setState('stlLtet', cndhRzb);
if (cndhRzb) { 
let elXinS3 = eo('div','v5Yf');
let cndqYIU = ! component.topic.subscribed;
this.setState('stnq76D', cndqYIU);
let cndobG2 = !(cndqYIU);
this.setState('stu2Ggs', cndobG2);
if (cndqYIU) { 
let eltGHIo = eo('a','AJaf',null,`href`,`/academy`,`class`,`btn btn-sm btn-danger bold`);
text(`Subscribe to answer!`);
let el3K8ut = eo('i','_jyf',null,`class`,`${fas('lock')} icon ml-2 icon`);
ec('i');
ec('a');
}else { 
let elVju9r = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.showQuestAnswer()}]}, boolAttrs, {disabled:component.disableQuestBtn},`class`,`btn text-uppercase ${cls(component.btns)}`);
text( component.openAnswerText ? 'Cancel' : 'Start quest' );
let cndDXkj = ! component.user.isLoggedIn();
this.setState('stSjxc0', cndDXkj);
if (cndDXkj) { 
let elEbAQc = eo('i','cSGf',null,`class`,`${fas('lock')} icon ml-2 icon`);
ec('i');
}ec('button');
}ec('div');
}let cndM3Ly = component.approveMsg.status === 'rejected';
this.setState('stwLjA9', cndM3Ly);
if (cndM3Ly) { 
let elcyer4 = eo('div','2xof',null, eventListeners, {onclick:[function(e) {var $el = this;component.editAnswer(component.currentUserAnswer.id, component.currentUserAnswer.answer)}]},`title`,`${trans(`Edit your answer`)}`,`class`,`text-info cursor text-center`);
let elvSoB_ = eo('i','ELHf',null,`class`,`${fas('edit')} icon`);
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