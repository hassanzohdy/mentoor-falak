_Component({
                selector: 'topic-page',
                c: 'TopicPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['topic','openAnswerText','preview','answerData','form','submitAnswer','storeAnswer','isValidForm','isSending','cancelBtn','user','handleAnswerDisplay','approveMsg','startQuest','btns','showQuestAnswer','disableQuestBtn','editAnswer','currentUserAnswer'],
                children: {cXeVWZU5g:'flk-spinner',cUjO_DA61:'flk-time-ago',chXDSIBkQ:'flk-facebook-share',cQqi3QCWn:'markdown',cqzvtwW0B:'flk-audio-player',c68A4KNf0:'markdown',chAMHvec9:'markdown',cGWTHZzmL:'flk-alert',cwp7HeCCL:'user-online',cYZl1B_CQ:'markdown',c7qlIkzQ9:'markdown',cXHHVgnzF:'gold-icon',co1oLTkMZ:'gold-icon',cFIROZBDp:'layout'},
                render: function (component) {
                    let cmpiu_z = this._lc('cFIROZBDp', {parent:component,content:(layout) => {let cndIW3q = Is.empty(component.topic);
this.setState('stjUtsy', cndIW3q);
if (cndIW3q) { 
let cmpWFLU = this._lc('cXeVWZU5g', {parent:component,parentTop:layout,state:'stjUtsy'});
}let cndcUOf = ! Is.empty(component.topic);
this.setState('stDKHCD', cndcUOf);
if (cndcUOf) { 
let elRyjkV = eo('div','BoFf',null,`class`,`row topicDetails`);
let elKFLNj = eo('div','Adrf',null,`class`,`col-lg-9 col-md-8`);
let elLtF_E = eo('section','uEWf');
let elTCk9h = eo('header','7Kwf',null,`class`,`topicTitle`);
let elUeaNU = eo('h2','Isxf',null,`class`,`text-capitalize bold trackImage`);
let elxM37E = eo('a','ViNf',null,`href`,`${URLS.track(component.topic.track)}`);
let el9lD07 = ev('img','wjwf',null,`src`,`${component.topic.track.image}`,`class`,`mr-2 v-top`,`title`,`${component.topic.track.name}`,`alt`,`${component.topic.track.name}`);
ec('a');
let elhrPRk = eo('div','q33f',null,`class`,`d-inline-block`);
text( component.topic.title );
let elTTisC = eo('div','4q3f',null,`class`,`text-muted dateFont mt-1 font-weight-normal`);
let elYvStV = eo('i','n3Hf',null,`class`,`${fas('calendar') + ' mx-2 icon'}`);
ec('i');
let cmpGpA9 = this._lc('cUjO_DA61', {parent:component,parentTop:layout,props:{timestamp:component.topic.createdAt.timestamp},state:'stDKHCD'});
let elE2zvo = eo('div','bQxf',null,`class`,`m-t-1`);
let cmpHo68 = this._lc('chXDSIBkQ', {parent:component,parentTop:layout,state:'stDKHCD'});
ec('div');
ec('div');
ec('div');
ec('h2');
ec('header');
let eldKeRZ = eo('p','rGSf',null,`class`,`topicDesc`);
text( component.topic.shortDescription );
ec('p');
let cndnvC0 = component.topic.userAnswer && component.topic.userAnswer.status == 'rejected' && (component.topic.userAnswer.comment || component.topic.userAnswer.recordNote);
this.setState('stbrtsp', cndnvC0);
if (cndnvC0) { 
let elXc26L = eo('footer','EHkf',null,`class`,`card p-2 m-b-1`);
let elsXqD4 = eo('h3','hMmf',null,`class`,`red-text bold m-b-1`);
text(`Your answer has been rejected :(`);
ec('h3');
let elAdDap = eo('span','DIdf',null,`class`,`d-inline-block`);
text(`Note by:`);
ec('span');
let elCVzKL = eo('strong','4VEf',null,`class`,`d-inline-block`);
text(component.topic.userAnswer.commentBy.name);
ec('strong');
let elyYUoW = eo('p','6ypf',null,`class`,`notes`);
let cndeNQ2 = component.topic.userAnswer.comment;
this.setState('stZNLnl', cndeNQ2);
if (cndeNQ2) { 
let cmp0ZBn = this._lc('cQqi3QCWn', {parent:component,parentTop:layout,props:{content:component.topic.userAnswer.comment},state:'stZNLnl'});
}ec('p');
let cndaf4T = component.topic.userAnswer.recordNote;
this.setState('stRsgwR', cndaf4T);
if (cndaf4T) { 
let cmpDKg0 = this._lc('cqzvtwW0B', {parent:component,parentTop:layout,props:{src:component.topic.userAnswer.recordNote},attrs:{src:`${component.topic.userAnswer.recordNote}`},state:'stRsgwR'});
}ec('footer');
}let elDddqy = eo('div',null,null,`class`,`metaInfo`);
let elnbuDo = eo('h3',null,null,`class`,`infoTitle bold`);
text(`Quest`);
ec('h3');
ec('div');
let elHUcL6 = eo('p',null,null,`class`,`topicQuest m-b-2`);
let cndXLjY = component.topic.quest;
this.setState('stF0qJP', cndXLjY);
if (cndXLjY) { 
let cmpw5g2 = this._lc('c68A4KNf0', {parent:component,parentTop:layout,props:{content:component.topic.quest},state:'stF0qJP'});
}ec('p');
ec('section');
let cndZdry = component.openAnswerText;
this.setState('stJpQIi', cndZdry);
let cndb2Wi = ! Is.empty(component.topic.answers);
this.setState('st8mPyo', cndb2Wi);
if (cndZdry) { 
let elRHerZ = eo('div','6B8f',null,`class`,`answerForm`);
let eljMhso = eo('h3','hf0f',null,`class`,`bold mb-3`);
text(`Please be aware of the following notes when you submit your answer`);
ec('h3');
let elYr5ls = eo('ul','YDnf',null,`id`,`notes-list`);
let elG2F0l = eo('li','AZJf');
text(`Don't forget to read about`);
let elv7p0u = eo('a','Qz0f',null,`href`,`/writing-notes`,`class`,`bold mx-2 teal-text`);
text(`writing
                            notes`);
ec('a');
text(`before starting the quest.`);
ec('li');
let elN33d4 = eo('li','2oGf',null,`class`,`bold`);
text(`DO NOT copy/paste the answer, write it with your own words and understanding.`);
ec('li');
let el5Ac4O = eo('li','nXOf');
text(`Your answer is not meant to be ideal, so read about the quest and write what you know.`);
ec('li');
let elCesfl = eo('li','upxf');
text(`Make your answer simple and understandable.`);
ec('li');
let elgDbs5 = eo('li','0t8f');
text(`You can use markdown syntax in your answer, so use it especially in writing code.`);
ec('li');
let eliIBRs = eo('li','IpWf');
text(`Always put references at the bottom of your answer from the articles/books you used in your
                        answer.`);
ec('li');
let elSis5B = eo('li','vbwf');
text(`Stick to the quest requirements, don't explain anything else.`);
ec('li');
let elHLN_9 = eo('li','lJuf');
text(`Your answer will be reviewed before publishing it to public, still write what you only know for
                        the quest.`);
ec('li');
let elhecqq = eo('li','Ya2f');
text(`Once the answer is posted, you can't change it while it is pending., so don't forget to`);
let elEuogS = eo('button','U5qf',null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = ! component.preview}]},`type`,`button`,`class`,`btn btn-sm btn-success`);
text(`preview`);
ec('button');
text(`it before posting.`);
ec('li');
let elXYZKg = eo('li','fOZf');
text(`If the answer is rejected, you can edit it and try again.`);
ec('li');
ec('ul');
let cndp5Bp = component.preview;
this.setState('stfoDeQ', cndp5Bp);
if (cndp5Bp) { 
let elGrH06 = eo('h1','Oi9f');
text(`Answer preview`);
ec('h1');
let cmpB38D = this._lc('chAMHvec9', {parent:component,parentTop:layout,props:{content:component.answerData},state:'stfoDeQ'});
let el2ajOg = eo('button','40gf',null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = false}]},`class`,`btn btn-purple`);
text(`Back to code`);
ec('button');
}let cnd1igP = component.form;
this.setState('stOF0bO', cnd1igP);
if (cnd1igP) { 
let cmphbbp = this._lc('cGWTHZzmL', {parent:component,parentTop:layout,events:{onconfirm:function(e) {let $el = this; component.submitAnswer(component.form)},onclose:function(e) {let $el = this; component.form = null}},state:'stOF0bO'});
}let cnd95lX = component.openAnswerText;
this.setState('st3suju', cnd95lX);
if (cnd95lX) { 
let el73UNf = eo('form','CGkf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.form = $el;}]});

                if (! el73UNf.formHandler) {
                    window.cfrmdlr = el73UNf.formHandler = new FormHandler(el73UNf, component);
                } else {
                    window.cfrmdlr = el73UNf.formHandler;
                }
            let elpfEBj = eo('textarea','18If',null, eventListeners, {oninput:[function(e) {component.answerData = this.value;},function(e) {var $el = this;component.storeAnswer($el.value)},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el73UNf.formHandler.addError(`answer`, 'required', trans('validation.required'));}return el73UNf.formHandler.removeError(`answer`);}]},`value`,`${fval(component.answerData)}`,`name`,`${(`answer`).toInputName()}`,`placeholder`,`${trans(`Write your answer ;)`)}`,`type`,`textarea`,`rows`,`8`,`class`,`form-control mb-4`,`dir`,`auto`,`id`,`answer`);
elpfEBj.value = fval(component.answerData);
ec('textarea');
let cndbPTK = el73UNf.formHandler.getError(`answer`);
this.setState('stR8nM2', cndbPTK);
if (cndbPTK) { 
let elTao7A = eo('div','YBLf',null,`class`,`alert alert-danger`);
text(el73UNf.formHandler.getError(`answer`));
ec('div');
}let elBdYad = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.isSending},`class`,`btn btn-primary float-right`);
text(`Send`);
ec('button');
let eltGInc = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = true}]},`type`,`button`,`class`,`btn btn-success float-right`);
text(`Preview`);
ec('button');
ec('form');
}let cndJhJs = component.cancelBtn;
this.setState('stcQ5EI', cndJhJs);
if (cndJhJs) { 
let elfvCEb = eo('button','jDff',null, eventListeners, {onclick:[function(e) {var $el = this;component.openAnswerText = !component.openAnswerText; component.cancelBtn = false}]},`class`,`btn btn-danger float-right mr-2`);
text(`Cancel`);
ec('button');
}ec('div');
}else if (cndb2Wi) { 
let el2Wa4i = eo('div');
let el6pU9f = eo('h4',null,null,`class`,`answersTitle bold m-b-2`);
text(`Answers ( ${ component.topic.answers.length } )`);
ec('h4');
let cndTjtp = ! component.topic.public && !component.topic.answered && component.user.id != 1;
this.setState('stPwTad', cndTjtp);
let cnd6fjp = !(cndTjtp);
this.setState('st5rhg7', cnd6fjp);
if (cndTjtp) { 
let el0pB6n = eo('h2','uXjf',null,`class`,`text-center bold teal-text`);
text(`You need to answer first to see other's answers!`);
ec('h2');
}else { 
for (let i in component.topic.answers) {
let answer = component.topic.answers[i]; 
 let ii41r8 = 'pdP8fo9' + i;
let elwhTek = eo('div','H79NVIT1W6Gz' + i+ii41r8,null,`class`,`card m-b-2`);
let elRQSH7 = eo('div','n8kff'+ii41r8,null,`class`,`card-body`);
let eln11SU = eo('div','cwrff'+ii41r8,null,`class`,`d-flex justify-content-between mb-3`);
let elCUPl3 = eo('div','eofff'+ii41r8,null,`class`,`answerMeta w-100`);
let elhBxw_ = eo('span','K2Xff'+ii41r8,null, eventListeners, {onclick:[function(e) {var $el = this;component.handleAnswerDisplay(answer);}]},`class`,`mainColor text-capitalize mr-2 pointer bold d-block`);
let elYrsRm = eo('span','FMpff'+ii41r8);
elYrsRm.cls = {'green-text': answer.by.id == component.user.id, 'blue-text': answer.by.id != component.user.id};

            for (let className in elYrsRm.cls) {
                elYrsRm.classList.toggle(className, elYrsRm.cls[className]);
            }  
            text(answer.by.name);
ec('span');
let cmptXLZ = this._lc('cwp7HeCCL', {parent:component,parentTop:layout,props:{id:answer.by.id},attrs:{id:`${answer.by.id}`},state:'st5rhg7',insideLoop:true,index:"" +ii41r8});
let cnd8llX = answer.by.id == component.user.id && answer.status != 'approved';
this.setState('stw86aB', cnd8llX);
let cnd5IZj = answer.display == DISPLAYED;
this.setState('stGyyrZ', cnd5IZj);
let cndAz9c = answer.display == HIDDEN;
this.setState('st1FILD', cndAz9c);
if (cnd8llX) { 
let elTZhUc = eo('span','9Wwff'+ii41r8,null,`class`,`text-capitalize badge align-bottom ml-3 mb-1`);
elTZhUc.cls = answerStatusClass(answer.status);

            for (let className in elTZhUc.cls) {
                elTZhUc.classList.toggle(className, elTZhUc.cls[className]);
            }  
            text( answer.status );
ec('span');
}let cndDe4K = answer.display == SEMI_DISPLAYED;
this.setState('stDlewo', cndDe4K);
let cndYvWE = cnd5IZj;
this.setState('stj29nI', cndYvWE);
let cndtJ53 = cndAz9c;
this.setState('stv6Qbn', cndtJ53);
if (cndDe4K) { 
let el8FDM4 = eo('i','Ndoff'+ii41r8,null,`title`,`${trans(`Display`)}`,`class`,`${fas('angle-down') + ' float-right fa-2x icon'}`);
ec('i');
}else if (cndYvWE) { 
let elgsqdM = eo('i','K96ff'+ii41r8,null,`title`,`${trans(`Hide`)}`,`class`,`${fas('minus') + ' float-right fa-2x icon'}`);
ec('i');
}else if (cndtJ53) { 
let elebfQm = eo('i','n8Sff'+ii41r8,null,`title`,`${trans(`Semi display`)}`,`class`,`${fas('plus') + ' float-right fa-2x icon'}`);
ec('i');
}ec('span');
let elaKxoT = eo('small','W8xff'+ii41r8,null,`class`,`text-muted d-block`);
text( answer.createdAt.format );
ec('small');
ec('div');
ec('div');
let cndKXg3 = answer.display == SEMI_DISPLAYED;
this.setState('stkNEsA', cndKXg3);
let cndVJhD = answer.display == DISPLAYED;
this.setState('st3Xe9S', cndVJhD);
if (cndKXg3) { 
let cmpifSK = this._lc('cYZl1B_CQ', {parent:component,parentTop:layout,props:{content:answer.answer.split('\n').slice(0, 10).join('\n')},state:'stkNEsA',insideLoop:true,index:"" +ii41r8});
let cndk6dm = answer.answer.split('\n').length > 10;
this.setState('stwDTFo', cndk6dm);
if (cndk6dm) { 
let el4DZMy = eo('p','cBcff'+ii41r8,null, eventListeners, {onclick:[function(e) {var $el = this;component.handleAnswerDisplay(answer)}]},`class`,`pointer bold pink-text`);
text(`Read more...`);
ec('p');
}}else if (cndVJhD) { 
let cmp7BXN = this._lc('c7qlIkzQ9', {parent:component,parentTop:layout,props:{content:answer.answer},state:'st3Xe9S',insideLoop:true,index:"" +ii41r8});
}ec('div');
ec('div');
}
}ec('div');
}ec('div');
let el4eERY = eo('div',null,null,`class`,`col-lg-3 col-md-4 text-center`);
let el00e7Y = eo('div',null,null,`class`,`card`);
let ellT509 = eo('div',null,null,`class`,`card-body`);
let cnd9kbc = component.approveMsg.show;
this.setState('stbFa3O', cnd9kbc);
if (cnd9kbc) { 
let elmoFnw = eo('div','LcYf',null,`class`,`mb-3`);
let elt2ksL = eo('span','EJef',null,`class`,`badge text-uppercase`);
elt2ksL.cls = answerStatusClass(component.approveMsg.status);

            for (let className in elt2ksL.cls) {
                elt2ksL.classList.toggle(className, elt2ksL.cls[className]);
            }  
            text(component.approveMsg.status);
ec('span');
let cndUGIS = component.approveMsg.status === 'rejected';
this.setState('st78KY9', cndUGIS);
if (cndUGIS) { 
let elA7Y6T = eo('span','Iumf');
text(component.approveMsg.msg);
ec('span');
}ec('div');
}let elxbIZj = eo('div',null,null,`class`,`topicEsTime`);
let cndo2Jr = component.topic.userAnswer && component.topic.userAnswer.status == 'approved';
this.setState('stvD9Oo', cndo2Jr);
let cndnDW8 = !(cndo2Jr);
this.setState('sttIVr2', cndnDW8);
if (cndo2Jr) { 
let cndJVhR = component.topic.userAnswer.prize != component.topic.prize;
this.setState('stki74p', cndJVhR);
if (cndJVhR) { 
let elAm5xb = eo('span','9Qkf',null,`class`,`reward-status`);
elAm5xb.cls = {'up': component.topic.userAnswer.prize > component.topic.prize, down: component.topic.userAnswer.prize < component.topic.prize};

            for (let className in elAm5xb.cls) {
                elAm5xb.classList.toggle(className, elAm5xb.cls[className]);
            }  
            ec('span');
}let cmpv1zT = this._lc('cXHHVgnzF', {parent:component,parentTop:layout});
let eloiGmt = eo('span',null,null,`class`,`bold`);
eloiGmt.cls = {'green-text': component.topic.userAnswer.prize > component.topic.prize, 'red-text': component.topic.userAnswer.prize < component.topic.prize};

            for (let className in eloiGmt.cls) {
                eloiGmt.classList.toggle(className, eloiGmt.cls[className]);
            }  
            text(component.topic.userAnswer.prize.format());
ec('span');
let cnd9RTr = component.topic.userAnswer && component.topic.userAnswer.prize != component.topic.prize;
this.setState('stEK8Oq', cnd9RTr);
if (cnd9RTr) { 
let elbkHKZ = eo('div','JtXf',null,`class`,`bold p-l-4`);
elbkHKZ.cls = {'red-text': component.topic.userAnswer.prize < component.topic.prize, 'green-text': component.topic.userAnswer.prize > component.topic.prize};

            for (let className in elbkHKZ.cls) {
                elbkHKZ.classList.toggle(className, elbkHKZ.cls[className]);
            }  
            let elJvszW = eo('span','8baf');
text(component.topic.userAnswer.prize > component.topic.prize ? '+' : '-');
ec('span');
let elkcrsM = eo('span','wgTf');
text(Math.abs(component.topic.userAnswer.prize - component.topic.prize).format());
ec('span');
ec('div');
}}else { 
let cmpdDSr = this._lc('co1oLTkMZ', {parent:component,parentTop:layout,props:{coins:component.topic.prize},state:'sttIVr2'});
}let cnduZv1 = component.startQuest;
this.setState('stNxCar', cnduZv1);
if (cnduZv1) { 
let elSmHw6 = eo('div','AKuf');
let cndSvII = ! component.topic.subscribed;
this.setState('stDQdxo', cndSvII);
let cnd8Jv8 = !(cndSvII);
this.setState('stKaus3', cnd8Jv8);
if (cndSvII) { 
let elPm0Zi = eo('a','lwof',null,`href`,`/academy`,`class`,`btn btn-sm btn-danger bold`);
text(`Subscribe to answer!`);
let elOWQKh = eo('i','aX6f',null,`class`,`${fas('lock') + ' icon ml-2 icon'}`);
ec('i');
ec('a');
}else { 
let elUGYzx = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.showQuestAnswer()}]}, boolAttrs, {disabled:component.disableQuestBtn},`class`,`btn text-uppercase`);
elUGYzx.cls = component.btns;

            for (let className in elUGYzx.cls) {
                elUGYzx.classList.toggle(className, elUGYzx.cls[className]);
            }  
            text( component.openAnswerText ? 'Cancel' : 'Start quest' );
let cndECce = ! component.user.isLoggedIn();
this.setState('stvMqRU', cndECce);
if (cndECce) { 
let elvOWGD = eo('i','wb2f',null,`class`,`${fas('lock') + ' icon ml-2 icon'}`);
ec('i');
}ec('button');
}ec('div');
}let cndgHkj = component.approveMsg.status === 'rejected';
this.setState('st7Qf1I', cndgHkj);
if (cndgHkj) { 
let elgRziP = eo('div','bJTf',null, eventListeners, {onclick:[function(e) {var $el = this;component.editAnswer(component.currentUserAnswer.id, component.currentUserAnswer.answer)}]},`title`,`${trans(`Edit your answer`)}`,`class`,`text-info cursor text-center`);
let el6OZ7W = eo('i','ejNf',null,`class`,`${fas('edit') + ' icon'}`);
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