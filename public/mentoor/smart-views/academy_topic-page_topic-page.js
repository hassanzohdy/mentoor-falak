_Component({
                selector: 'topic-page',
                c: 'TopicPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['topic','openAnswerText','preview','answerData','form','submitAnswer','storeAnswer','isValidForm','isSending','cancelBtn','user','handleAnswerDisplay','approveMsg','startQuest','btns','showQuestAnswer','disableQuestBtn','editAnswer','currentUserAnswer'],
                children: {cTG9fcf5D:'flk-spinner',c9b4Q3_0u:'flk-time-ago',ceDnS7L5p:'flk-facebook-share',cfqqj5scJ:'markdown',cl9ZfGIX0:'flk-audio-player',cv78JIIJX:'markdown',c04UVdp0c:'markdown',cg5GYgnxo:'flk-alert',cgapyug7t:'user-online',cUX6ICYAa:'markdown',cHljQlL4Q:'markdown',cNMtgvLl0:'gold-icon',cFOs2aZyC:'gold-icon',chJcFvjZ2:'layout'},
                render: function (component) {
                    let cmp7jDm = this._lc('chJcFvjZ2', {parent:component,content:(layout) => {let cndDj59 = Is.empty(component.topic);
this.setState('st4A0Fe', cndDj59);
if (cndDj59) { 
let cmpo5nt = this._lc('cTG9fcf5D', {parent:component,parentTop:layout,state:'st4A0Fe'});
}let cndFkHb = ! Is.empty(component.topic);
this.setState('stzAXOu', cndFkHb);
if (cndFkHb) { 
let elep8d4 = eo('div','hnAf',null,`class`,`row topicDetails`);
let el06q6r = eo('div','eTtf',null,`class`,`col-lg-9 col-md-8`);
let elv5VNk = eo('section','huEf');
let elGZMO3 = eo('header','xztf',null,`class`,`topicTitle`);
let elB6n65 = eo('h2','ekWf',null,`class`,`text-capitalize bold trackImage`);
let elEzL9Q = eo('a','yWuf',null,`href`,`${URLS.track(component.topic.track)}`);
let elbgE0H = ev('img','IyVf',null,`src`,`${component.topic.track.image}`,`class`,`mr-2 v-top`,`title`,`${component.topic.track.name}`,`alt`,`${component.topic.track.name}`);
ec('a');
let ely2tBc = eo('div','8zXf',null,`class`,`d-inline-block`);
text( component.topic.title );
let elQ1Wn2 = eo('div','ZmMf',null,`class`,`text-muted dateFont mt-1 font-weight-normal`);
let elC92JO = eo('i','zmOf',null,`class`,`${fas('calendar') + ' mx-2 icon'}`);
ec('i');
let cmpIE6t = this._lc('c9b4Q3_0u', {parent:component,parentTop:layout,props:{timestamp:component.topic.createdAt.timestamp},state:'stzAXOu'});
let elyvP7B = eo('div','GAwf',null,`class`,`m-t-1`);
let cmpRXYV = this._lc('ceDnS7L5p', {parent:component,parentTop:layout,state:'stzAXOu'});
ec('div');
ec('div');
ec('div');
ec('h2');
ec('header');
let elvvIBR = eo('p','9wKf',null,`class`,`topicDesc`);
text( component.topic.shortDescription );
ec('p');
let cnd2Cld = component.topic.userAnswer && component.topic.userAnswer.status == 'rejected' && (component.topic.userAnswer.comment || component.topic.userAnswer.recordNote);
this.setState('stJzPdZ', cnd2Cld);
if (cnd2Cld) { 
let eleS191 = eo('footer','I64f',null,`class`,`card p-2 m-b-1`);
let elxMCVF = eo('h3','8LHf',null,`class`,`red-text bold m-b-1`);
text(`Your answer has been rejected :(`);
ec('h3');
let elH1ET0 = eo('span','VO3f',null,`class`,`d-inline-block`);
text(`Note by:`);
ec('span');
let elCst2h = eo('strong','tLnf',null,`class`,`d-inline-block`);
text(component.topic.userAnswer.commentBy.name);
ec('strong');
let elVVwTD = eo('p','zZuf',null,`class`,`notes`);
let cndQXsw = component.topic.userAnswer.comment;
this.setState('stnsDgL', cndQXsw);
if (cndQXsw) { 
let cmpiO8R = this._lc('cfqqj5scJ', {parent:component,parentTop:layout,props:{content:component.topic.userAnswer.comment},state:'stnsDgL'});
}ec('p');
let cndnegI = component.topic.userAnswer.recordNote;
this.setState('stnDoyz', cndnegI);
if (cndnegI) { 
let cmpXS0L = this._lc('cl9ZfGIX0', {parent:component,parentTop:layout,props:{src:component.topic.userAnswer.recordNote},attrs:{src:`${component.topic.userAnswer.recordNote}`},state:'stnDoyz'});
}ec('footer');
}let elLBYlg = eo('div',null,null,`class`,`metaInfo`);
let elg_HJ1 = eo('h3',null,null,`class`,`infoTitle bold`);
text(`Quest`);
ec('h3');
ec('div');
let elIaLtR = eo('p',null,null,`class`,`topicQuest m-b-2`);
let cnd6Pu3 = component.topic.quest;
this.setState('strEZTJ', cnd6Pu3);
if (cnd6Pu3) { 
let cmpN_1G = this._lc('cv78JIIJX', {parent:component,parentTop:layout,props:{content:component.topic.quest},state:'strEZTJ'});
}ec('p');
ec('section');
let cndz8Iq = component.openAnswerText;
this.setState('stNQuYw', cndz8Iq);
let cndHGvF = ! Is.empty(component.topic.answers);
this.setState('stIHYTi', cndHGvF);
if (cndz8Iq) { 
let elJu3ij = eo('div','aG5f',null,`class`,`answerForm`);
let elIlOfV = eo('h3','yOkf',null,`class`,`bold mb-3`);
text(`Please be aware of the following notes when you submit your answer`);
ec('h3');
let elv5MeF = eo('ul','AAbf',null,`id`,`notes-list`);
let elp_ULE = eo('li','orCf');
text(`Don't forget to read about`);
let elq2E2K = eo('a','yO7f',null,`href`,`/writing-notes`,`class`,`bold mx-2 teal-text`);
text(`writing
                            notes`);
ec('a');
text(`before starting the quest.`);
ec('li');
let elTjPGX = eo('li','Dl9f',null,`class`,`bold`);
text(`DO NOT copy/paste the answer, write it with your own words and understanding.`);
ec('li');
let elqZ_BO = eo('li','knkf');
text(`Your answer is not meant to be ideal, so read about the quest and write what you know.`);
ec('li');
let elxbrMs = eo('li','uBdf');
text(`Make your answer simple and understandable.`);
ec('li');
let elie_Pz = eo('li','DuOf');
text(`You can use markdown syntax in your answer, so use it especially in writing code.`);
ec('li');
let elDO2WL = eo('li','Uyif');
text(`Always put references at the bottom of your answer from the articles/books you used in your
                        answer.`);
ec('li');
let elH3u3j = eo('li','Yfwf');
text(`Stick to the quest requirements, don't explain anything else.`);
ec('li');
let elvW2k3 = eo('li','hP4f');
text(`Your answer will be reviewed before publishing it to public, still write what you only know for
                        the quest.`);
ec('li');
let elNRDFP = eo('li','XfUf');
text(`Once the answer is posted, you can't change it while it is pending., so don't forget to`);
let el6A5U7 = eo('button','Yjpf',null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = ! component.preview}]},`type`,`button`,`class`,`btn btn-sm btn-success`);
text(`preview`);
ec('button');
text(`it before posting.`);
ec('li');
let elyhBDu = eo('li','zCSf');
text(`If the answer is rejected, you can edit it and try again.`);
ec('li');
ec('ul');
let cnd4tG7 = component.preview;
this.setState('stlQREa', cnd4tG7);
if (cnd4tG7) { 
let elZWd3e = eo('h1','lbGf');
text(`Answer preview`);
ec('h1');
let cmpsSRT = this._lc('c04UVdp0c', {parent:component,parentTop:layout,props:{content:component.answerData},state:'stlQREa'});
let elWSkww = eo('button','aFNf',null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = false}]},`class`,`btn btn-purple`);
text(`Back to code`);
ec('button');
}let cndbU3i = component.form;
this.setState('stIEaAR', cndbU3i);
if (cndbU3i) { 
let cmpgKi3 = this._lc('cg5GYgnxo', {parent:component,parentTop:layout,events:{onconfirm:function(e) {let $el = this; component.submitAnswer(component.form)},onclose:function(e) {let $el = this; component.form = null}},state:'stIEaAR'});
}let cndt2x5 = component.openAnswerText;
this.setState('stOCuoS', cndt2x5);
if (cndt2x5) { 
let elPDrFe = eo('form','jEsf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.form = $el;}]});

                if (! elPDrFe.formHandler) {
                    window.cfrmdlr = elPDrFe.formHandler = new FormHandler(elPDrFe, component);
                } else {
                    window.cfrmdlr = elPDrFe.formHandler;
                }
            let elUSqiy = eo('textarea','mMJf',null, eventListeners, {oninput:[function(e) {component.answerData = this.value;},function(e) {var $el = this;component.storeAnswer($el.value)},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elPDrFe.formHandler.addError(`answer`, 'required', trans('validation.required'));}return elPDrFe.formHandler.removeError(`answer`);}]},`value`,`${fval(component.answerData)}`,`name`,`${(`answer`).toInputName()}`,`placeholder`,`${trans(`Write your answer ;)`)}`,`type`,`textarea`,`rows`,`8`,`class`,`form-control mb-4`,`dir`,`auto`,`id`,`answer`);
elUSqiy.value = fval(component.answerData);
ec('textarea');
let cndElHY = elPDrFe.formHandler.getError(`answer`);
this.setState('stDbxm7', cndElHY);
if (cndElHY) { 
let el0LO_1 = eo('div','CzRf',null,`class`,`alert alert-danger`);
text(elPDrFe.formHandler.getError(`answer`));
ec('div');
}let elNeHiL = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.isSending},`class`,`btn btn-primary float-right`);
text(`Send`);
ec('button');
let el91gdZ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = true}]},`type`,`button`,`class`,`btn btn-success float-right`);
text(`Preview`);
ec('button');
ec('form');
}let cndArGU = component.cancelBtn;
this.setState('stnlaeN', cndArGU);
if (cndArGU) { 
let el5XsoA = eo('button','2yEf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openAnswerText = !component.openAnswerText; component.cancelBtn = false}]},`class`,`btn btn-danger float-right mr-2`);
text(`Cancel`);
ec('button');
}ec('div');
}else if (cndHGvF) { 
let elMOaTd = eo('div');
let eln4DHO = eo('h4',null,null,`class`,`answersTitle bold m-b-2`);
text(`Answers ( ${ component.topic.answers.length } )`);
ec('h4');
let cndAGVZ = ! component.topic.public && !component.topic.answered && component.user.id != 1;
this.setState('stjjLCr', cndAGVZ);
let cnd0UpZ = !(cndAGVZ);
this.setState('stn997M', cnd0UpZ);
if (cndAGVZ) { 
let elrWKmH = eo('h2','iVuf',null,`class`,`text-center bold teal-text`);
text(`You need to answer first to see other's answers!`);
ec('h2');
}else { 
for (let i in component.topic.answers) {
let answer = component.topic.answers[i]; 
 let ii5DAs = 'td3sZBp' + i;
let elqwSG7 = eo('div','ijB5hBYfi1ru' + i+ii5DAs,null,`class`,`card m-b-2`);
let elOJPpE = eo('div','Ubtff'+ii5DAs,null,`class`,`card-body`);
let elI6gKj = eo('div','Y5Nff'+ii5DAs,null,`class`,`d-flex justify-content-between mb-3`);
let eld78j6 = eo('div','nNPff'+ii5DAs,null,`class`,`answerMeta w-100`);
let el_1sST = eo('span','Jh3ff'+ii5DAs,null, eventListeners, {onclick:[function(e) {var $el = this;component.handleAnswerDisplay(answer);}]},`class`,`mainColor text-capitalize mr-2 pointer bold d-block`);
let elKzozi = eo('span','k9yff'+ii5DAs);
elKzozi.cls = {'green-text': answer.by.id == component.user.id, 'blue-text': answer.by.id != component.user.id};

            for (let className in elKzozi.cls) {
                elKzozi.classList.toggle(className, elKzozi.cls[className]);
            }  
            text(answer.by.name);
ec('span');
let cmpxzFj = this._lc('cgapyug7t', {parent:component,parentTop:layout,props:{id:answer.by.id},attrs:{id:`${answer.by.id}`},state:'stn997M',insideLoop:true,index:"" +ii5DAs});
let cndHf7V = answer.by.id == component.user.id && answer.status != 'approved';
this.setState('st35rvl', cndHf7V);
let cndH4Hk = answer.display == DISPLAYED;
this.setState('stuyjbN', cndH4Hk);
let cndlbce = answer.display == HIDDEN;
this.setState('std298c', cndlbce);
if (cndHf7V) { 
let el5ZTSo = eo('span','uFOff'+ii5DAs,null,`class`,`text-capitalize badge align-bottom ml-3 mb-1`);
el5ZTSo.cls = answerStatusClass(answer.status);

            for (let className in el5ZTSo.cls) {
                el5ZTSo.classList.toggle(className, el5ZTSo.cls[className]);
            }  
            text( answer.status );
ec('span');
}let cndH1tU = answer.display == SEMI_DISPLAYED;
this.setState('stw3Kca', cndH1tU);
let cndcN4L = cndH4Hk;
this.setState('st_uTuu', cndcN4L);
let cnd7avZ = cndlbce;
this.setState('st0uHBT', cnd7avZ);
if (cndH1tU) { 
let elzJhFO = eo('i','4OCff'+ii5DAs,null,`title`,`${trans(`Display`)}`,`class`,`${fas('angle-down') + ' float-right fa-2x icon'}`);
ec('i');
}else if (cndcN4L) { 
let elnrTI3 = eo('i','INTff'+ii5DAs,null,`title`,`${trans(`Hide`)}`,`class`,`${fas('minus') + ' float-right fa-2x icon'}`);
ec('i');
}else if (cnd7avZ) { 
let elFDKr7 = eo('i','yj9ff'+ii5DAs,null,`title`,`${trans(`Semi display`)}`,`class`,`${fas('plus') + ' float-right fa-2x icon'}`);
ec('i');
}ec('span');
let elJpTEv = eo('small','jNqff'+ii5DAs,null,`class`,`text-muted d-block`);
text( answer.createdAt.format );
ec('small');
ec('div');
ec('div');
let cndzNWC = answer.display == SEMI_DISPLAYED;
this.setState('st0NFQW', cndzNWC);
let cndlMHT = answer.display == DISPLAYED;
this.setState('stfZtPn', cndlMHT);
if (cndzNWC) { 
let cmpxMI8 = this._lc('cUX6ICYAa', {parent:component,parentTop:layout,props:{content:answer.answer.split('\n').slice(0, 10).join('\n')},state:'st0NFQW',insideLoop:true,index:"" +ii5DAs});
let cndjCqo = answer.answer.split('\n').length > 10;
this.setState('stFT6Oc', cndjCqo);
if (cndjCqo) { 
let elYQ2Uq = eo('p','6s7ff'+ii5DAs,null, eventListeners, {onclick:[function(e) {var $el = this;component.handleAnswerDisplay(answer)}]},`class`,`pointer bold pink-text`);
text(`Read more...`);
ec('p');
}}else if (cndlMHT) { 
let cmpRZjQ = this._lc('cHljQlL4Q', {parent:component,parentTop:layout,props:{content:answer.answer},state:'stfZtPn',insideLoop:true,index:"" +ii5DAs});
}ec('div');
ec('div');
}
}ec('div');
}ec('div');
let elp4Xtd = eo('div',null,null,`class`,`col-lg-3 col-md-4 text-center`);
let elCz28L = eo('div',null,null,`class`,`card`);
let elaiyTU = eo('div',null,null,`class`,`card-body`);
let cndbZmt = component.approveMsg.show;
this.setState('stvLyQo', cndbZmt);
if (cndbZmt) { 
let elmpvhX = eo('div','9Ovf',null,`class`,`mb-3`);
let elQRRPn = eo('span','bv8f',null,`class`,`badge text-uppercase`);
elQRRPn.cls = answerStatusClass(component.approveMsg.status);

            for (let className in elQRRPn.cls) {
                elQRRPn.classList.toggle(className, elQRRPn.cls[className]);
            }  
            text(component.approveMsg.status);
ec('span');
let cndBlPf = component.approveMsg.status === 'rejected';
this.setState('strStnj', cndBlPf);
if (cndBlPf) { 
let elCIWvn = eo('span','VTWf');
text(component.approveMsg.msg);
ec('span');
}ec('div');
}let el23PiN = eo('div',null,null,`class`,`topicEsTime`);
let cndJWLT = component.topic.userAnswer && component.topic.userAnswer.status == 'approved';
this.setState('stDFsDT', cndJWLT);
let cndbKOq = !(cndJWLT);
this.setState('stpCCkG', cndbKOq);
if (cndJWLT) { 
let cndNdWz = component.topic.userAnswer.prize != component.topic.prize;
this.setState('ste_rHo', cndNdWz);
if (cndNdWz) { 
let ela6WoX = eo('span','lq6f',null,`class`,`reward-status`);
ela6WoX.cls = {'up': component.topic.userAnswer.prize > component.topic.prize, down: component.topic.userAnswer.prize < component.topic.prize};

            for (let className in ela6WoX.cls) {
                ela6WoX.classList.toggle(className, ela6WoX.cls[className]);
            }  
            ec('span');
}let cmp9AeZ = this._lc('cNMtgvLl0', {parent:component,parentTop:layout});
let elRYkQp = eo('span',null,null,`class`,`bold`);
elRYkQp.cls = {'green-text': component.topic.userAnswer.prize > component.topic.prize, 'red-text': component.topic.userAnswer.prize < component.topic.prize};

            for (let className in elRYkQp.cls) {
                elRYkQp.classList.toggle(className, elRYkQp.cls[className]);
            }  
            text(component.topic.userAnswer.prize.format());
ec('span');
let cndKckq = component.topic.userAnswer && component.topic.userAnswer.prize != component.topic.prize;
this.setState('stK98Ij', cndKckq);
if (cndKckq) { 
let elXCdDf = eo('div','NnGf',null,`class`,`bold p-l-4`);
elXCdDf.cls = {'red-text': component.topic.userAnswer.prize < component.topic.prize, 'green-text': component.topic.userAnswer.prize > component.topic.prize};

            for (let className in elXCdDf.cls) {
                elXCdDf.classList.toggle(className, elXCdDf.cls[className]);
            }  
            let elRyVjV = eo('span','xJcf');
text(component.topic.userAnswer.prize > component.topic.prize ? '+' : '-');
ec('span');
let elueWSE = eo('span','dwmf');
text(Math.abs(component.topic.userAnswer.prize - component.topic.prize).format());
ec('span');
ec('div');
}}else { 
let cmpB_uq = this._lc('cFOs2aZyC', {parent:component,parentTop:layout,props:{coins:component.topic.prize},state:'stpCCkG'});
}let cndisn2 = component.startQuest;
this.setState('stazDWl', cndisn2);
if (cndisn2) { 
let elq7sox = eo('div','hpOf');
let cndhWCw = ! component.topic.subscribed;
this.setState('stCxV_V', cndhWCw);
let cnd4Zd_ = !(cndhWCw);
this.setState('stCEgRs', cnd4Zd_);
if (cndhWCw) { 
let el5eJAH = eo('a','4Enf',null,`href`,`/academy`,`class`,`btn btn-sm btn-danger bold`);
text(`Subscribe to answer!`);
let elRM1Dd = eo('i','L7Of',null,`class`,`${fas('lock') + ' icon ml-2 icon'}`);
ec('i');
ec('a');
}else { 
let elrVZ05 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.showQuestAnswer()}]}, boolAttrs, {disabled:component.disableQuestBtn},`class`,`btn text-uppercase`);
elrVZ05.cls = component.btns;

            for (let className in elrVZ05.cls) {
                elrVZ05.classList.toggle(className, elrVZ05.cls[className]);
            }  
            text( component.openAnswerText ? 'Cancel' : 'Start quest' );
let cndTy30 = ! component.user.isLoggedIn();
this.setState('sta0I0B', cndTy30);
if (cndTy30) { 
let elAZPNb = eo('i','CLdf',null,`class`,`${fas('lock') + ' icon ml-2 icon'}`);
ec('i');
}ec('button');
}ec('div');
}let cndi5yV = component.approveMsg.status === 'rejected';
this.setState('stjL4MC', cndi5yV);
if (cndi5yV) { 
let elWHQWI = eo('div','5S_f',null, eventListeners, {onclick:[function(e) {var $el = this;component.editAnswer(component.currentUserAnswer.id, component.currentUserAnswer.answer)}]},`title`,`${trans(`Edit your answer`)}`,`class`,`text-info cursor text-center`);
let elRUBgs = eo('i','Qudf',null,`class`,`${fas('edit') + ' icon'}`);
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