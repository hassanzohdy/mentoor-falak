_Component({
                selector: 'topic-page',
                c: 'TopicPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['topic','openAnswerText','preview','answerData','form','submitAnswer','storeAnswer','isValidForm','isSending','cancelBtn','user','handleAnswerDisplay','approveMsg','startQuest','btns','showQuestAnswer','disableQuestBtn','editAnswer','currentUserAnswer'],
                children: {cYncO4VwL:'flk-spinner',cViAhgMEp:'flk-time-ago',cQ32vlCBv:'flk-facebook-share',cBij0YWaZ:'markdown',c3NJeGPc5:'flk-audio-player',cFMUnqqGV:'markdown',cQACFGFv4:'markdown',c00VPcdjN:'flk-alert',cbV1dXfzU:'markdown-input',cnLAkugrP:'user-online',cpmNwBOBX:'markdown',czp46jHD8:'markdown',ceYZkLJEr:'gold-icon',cw1cCl5da:'gold-icon',cEaL1Y7zA:'layout'},
                render: function (component) {
                    let cmpSpVm = this._lc('cEaL1Y7zA', {parent:component,content:(layout) => {let cndTyxh = Is.empty(component.topic);
this.setState('stdeHrY', cndTyxh);
if (cndTyxh) { 
let cmpf1qb = this._lc('cYncO4VwL', {parent:component,parentTop:layout,state:'stdeHrY'});
}let cndLuHu = ! Is.empty(component.topic);
this.setState('stp88tX', cndLuHu);
if (cndLuHu) { 
let eljjVIY = eo('div','X1Qf',null,`class`,`row topicDetails`);
let elAfBm7 = eo('div','XEhf',null,`class`,`col-lg-9 col-md-8`);
let elrLNQ7 = eo('section','y9Wf');
let else21r = eo('header','RnFf',null,`class`,`topicTitle`);
let elEy3mk = eo('h2','oA7f',null,`class`,`text-capitalize bold trackImage`);
let el12tNu = eo('a','vLef',null,`href`,`${URLS.track(component.topic.track)}`);
let el7BoHz = ev('img','OfJf',null,`src`,`${component.topic.track.image}`,`class`,`mr-2 v-top`,`title`,`${component.topic.track.name}`,`alt`,`${component.topic.track.name}`);
ec('a');
let elgPmij = eo('div','VW9f',null,`class`,`d-inline-block`);
text( component.topic.title );
let el0IwzI = eo('div','YEbf',null,`class`,`text-muted dateFont mt-1 font-weight-normal`);
let elpY_NI = eo('i','JJrf',null,`class`,`${fas('calendar') + ' mx-2 icon'}`);
ec('i');
let cmpIWbc = this._lc('cViAhgMEp', {parent:component,parentTop:layout,props:{timestamp:component.topic.createdAt.timestamp},state:'stp88tX'});
let el5Qybq = eo('div','NIff',null,`class`,`m-t-1`);
let cmp5cTq = this._lc('cQ32vlCBv', {parent:component,parentTop:layout,state:'stp88tX'});
ec('div');
ec('div');
ec('div');
ec('h2');
ec('header');
let elrRJni = eo('p','6wxf',null,`class`,`topicDesc`);
text( component.topic.shortDescription );
ec('p');
let cndf856 = component.topic.userAnswer && component.topic.userAnswer.status == 'rejected' && (component.topic.userAnswer.comment || component.topic.userAnswer.recordNote);
this.setState('stadQj0', cndf856);
if (cndf856) { 
let elMPBnh = eo('footer','BjFf',null,`class`,`card p-2 m-b-1`);
let elypHkt = eo('h3','HVZf',null,`class`,`red-text bold m-b-1`);
text(`Your answer has been rejected :(`);
ec('h3');
let elkIDj_ = eo('span','sQWf',null,`class`,`d-inline-block`);
text(`Note by:`);
ec('span');
let eldjtiR = eo('strong','uBqf',null,`class`,`d-inline-block`);
text(component.topic.userAnswer.commentBy.name);
ec('strong');
let elpwiSR = eo('p','hxRf',null,`class`,`notes`);
let cnd7URY = component.topic.userAnswer.comment;
this.setState('stfGhNs', cnd7URY);
if (cnd7URY) { 
let cmpmOZV = this._lc('cBij0YWaZ', {parent:component,parentTop:layout,props:{content:component.topic.userAnswer.comment},state:'stfGhNs'});
}ec('p');
let cnd0a5K = component.topic.userAnswer.recordNote;
this.setState('stxzwdI', cnd0a5K);
if (cnd0a5K) { 
let cmpTWuO = this._lc('c3NJeGPc5', {parent:component,parentTop:layout,props:{src:component.topic.userAnswer.recordNote},attrs:{src:`${component.topic.userAnswer.recordNote}`},state:'stxzwdI'});
}ec('footer');
}let elZzQMz = eo('div',null,null,`class`,`metaInfo`);
let ela599x = eo('h3',null,null,`class`,`infoTitle bold`);
text(`Quest`);
ec('h3');
ec('div');
let el766XZ = eo('p',null,null,`class`,`topicQuest m-b-2`);
let cndIqQK = component.topic.quest;
this.setState('stdmpvT', cndIqQK);
if (cndIqQK) { 
let cmpjr2l = this._lc('cFMUnqqGV', {parent:component,parentTop:layout,props:{content:component.topic.quest},state:'stdmpvT'});
}ec('p');
ec('section');
let cndQeII = component.openAnswerText;
this.setState('stO2oWX', cndQeII);
let cndOsbz = ! Is.empty(component.topic.answers);
this.setState('stdod8D', cndOsbz);
if (cndQeII) { 
let elLI6QC = eo('div','eNwf',null,`class`,`answerForm`);
let elGyn7E = eo('h3','Tscf',null,`class`,`bold mb-3`);
text(`Please be aware of the following notes when you submit your answer`);
ec('h3');
let el6g2du = eo('ul','rz_f',null,`id`,`notes-list`);
let elU49ZC = eo('li','65Vf');
text(`Don't forget to read about`);
let elJo2v6 = eo('a','xLPf',null,`href`,`/writing-notes`,`class`,`bold mx-2 teal-text`);
text(`writing
                            notes`);
ec('a');
text(`before starting the quest.`);
ec('li');
let elE8KKJ = eo('li','FZ_f',null,`class`,`bold`);
text(`DO NOT copy/paste the answer, write it with your own words and understanding.`);
ec('li');
let elMaDiv = eo('li','JbHf');
text(`Your answer is not meant to be ideal, so read about the quest and write what you know.`);
ec('li');
let elykN75 = eo('li','Tf9f');
text(`Make your answer simple and understandable.`);
ec('li');
let elKj300 = eo('li','b01f');
text(`You can use markdown syntax in your answer, so use it especially in writing code.`);
ec('li');
let el1OxHD = eo('li','4fcf');
text(`Always put references at the bottom of your answer from the articles/books you used in your
                        answer.`);
ec('li');
let elHCg3W = eo('li','9nFf');
text(`Stick to the quest requirements, don't explain anything else.`);
ec('li');
let elIEaLT = eo('li','lTjf');
text(`Your answer will be reviewed before publishing it to public, still write what you only know for
                        the quest.`);
ec('li');
let elrcFKV = eo('li','Zfcf');
text(`Once the answer is posted, you can't change it while it is pending., so don't forget to`);
let eliyLb6 = eo('button','YOff',null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = ! component.preview}]},`type`,`button`,`class`,`btn btn-sm btn-success`);
text(`preview`);
ec('button');
text(`it before posting.`);
ec('li');
let elJjj3i = eo('li','UAZf');
text(`If the answer is rejected, you can edit it and try again.`);
ec('li');
ec('ul');
let cndux8H = component.preview;
this.setState('st9veJf', cndux8H);
if (cndux8H) { 
let elak5yl = eo('h1','sxlf');
text(`Answer preview`);
ec('h1');
let cmpGOeg = this._lc('cQACFGFv4', {parent:component,parentTop:layout,props:{content:component.answerData},state:'st9veJf'});
let eloRMFk = eo('button','TK0f',null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = false}]},`class`,`btn btn-purple`);
text(`Back to code`);
ec('button');
}let cndnwU2 = component.form;
this.setState('st3CtxQ', cndnwU2);
if (cndnwU2) { 
let cmp9dkb = this._lc('c00VPcdjN', {parent:component,parentTop:layout,events:{onconfirm:function(e) {let $el = this; component.submitAnswer(component.form)},onclose:function(e) {let $el = this; component.form = null}},state:'st3CtxQ'});
}let cndApGI = component.openAnswerText;
this.setState('stYUyj4', cndApGI);
if (cndApGI) { 
let el34MLZ = eo('form','e2Mf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.form = $el;}]});

                if (! el34MLZ.formHandler) {
                    window.cfrmdlr = el34MLZ.formHandler = new FormHandler(el34MLZ, component);
                } else {
                    window.cfrmdlr = el34MLZ.formHandler;
                }
            let cmpotwl = this._lc('cbV1dXfzU', {parent:component,parentTop:layout,props:{value:component.answerData},events:{oninput:function(e) {let $el = this; component.storeAnswer(e)}},attrs:{placeholder:`${trans(`Write your answer ;)`)}`,type:'textarea',required:''},state:'stYUyj4'});
let elI7eHs = eo('button','jwXf',null, boolAttrs, {disabled:!component.isValidForm || component.isSending},`class`,`btn btn-primary float-right`);
text(`Send`);
ec('button');
let elhx83a = eo('button','5icf',null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = true}]},`type`,`button`,`class`,`btn btn-success float-right`);
text(`Preview`);
ec('button');
ec('form');
}let cndXqdH = component.cancelBtn;
this.setState('stEC4Lg', cndXqdH);
if (cndXqdH) { 
let el862SX = eo('button','hAef',null, eventListeners, {onclick:[function(e) {var $el = this;component.openAnswerText = !component.openAnswerText; component.cancelBtn = false}]},`class`,`btn btn-danger float-right mr-2`);
text(`Cancel`);
ec('button');
}ec('div');
}else if (cndOsbz) { 
let elGaz2S = eo('div');
let elfYI9a = eo('h4',null,null,`class`,`answersTitle bold m-b-2`);
text(`Answers ( ${ component.topic.answers.length } )`);
ec('h4');
let cndXk4X = ! component.topic.public && !component.topic.answered && component.user.id != 1;
this.setState('stkCmWB', cndXk4X);
let cndJn9E = !(cndXk4X);
this.setState('stlRMq1', cndJn9E);
if (cndXk4X) { 
let elwDEAz = eo('h2','sTWf',null,`class`,`text-center bold teal-text`);
text(`You need to answer first to see other's answers!`);
ec('h2');
}else { 
for (let i in component.topic.answers) {
let answer = component.topic.answers[i]; 
 let iiGAVo = 'QjdX6Fz' + i;
let elBWdJ6 = eo('div','QQtQxqC6vnAg' + i+iiGAVo,null,`class`,`card m-b-2`);
let elCY7OC = eo('div','MKNff'+iiGAVo,null,`class`,`card-body`);
let el0SiYb = eo('div','2Hhff'+iiGAVo,null,`class`,`d-flex justify-content-between mb-3`);
let elwbDYC = eo('div','7iOff'+iiGAVo,null,`class`,`answerMeta w-100`);
let elt3UG0 = eo('span','VqCff'+iiGAVo,null, eventListeners, {onclick:[function(e) {var $el = this;component.handleAnswerDisplay(answer);}]},`class`,`mainColor text-capitalize mr-2 pointer bold d-block`);
let eld2xFF = eo('span','PIiff'+iiGAVo);
eld2xFF.cls = {'green-text': answer.by.id == component.user.id, 'blue-text': answer.by.id != component.user.id};

            for (let className in eld2xFF.cls) {
                eld2xFF.classList.toggle(className, eld2xFF.cls[className]);
            }  
            text(answer.by.name);
ec('span');
let cmpod8V = this._lc('cnLAkugrP', {parent:component,parentTop:layout,props:{id:answer.by.id},attrs:{id:`${answer.by.id}`},state:'stlRMq1',insideLoop:true,index:"" +iiGAVo});
let cndl4Ap = answer.by.id == component.user.id && answer.status != 'approved';
this.setState('stpo7fo', cndl4Ap);
let cndHFKw = answer.display == DISPLAYED;
this.setState('stlq3nQ', cndHFKw);
let cnd2s8D = answer.display == HIDDEN;
this.setState('stlYtLQ', cnd2s8D);
if (cndl4Ap) { 
let elAUBNC = eo('span','8XUff'+iiGAVo,null,`class`,`text-capitalize badge align-bottom ml-3 mb-1`);
elAUBNC.cls = answerStatusClass(answer.status);

            for (let className in elAUBNC.cls) {
                elAUBNC.classList.toggle(className, elAUBNC.cls[className]);
            }  
            text( answer.status );
ec('span');
}let cndxvUG = answer.display == SEMI_DISPLAYED;
this.setState('stQwUW4', cndxvUG);
let cndSa1g = cndHFKw;
this.setState('stgxUvd', cndSa1g);
let cndn7IH = cnd2s8D;
this.setState('st_yL6O', cndn7IH);
if (cndxvUG) { 
let el9uYes = eo('i','z8wff'+iiGAVo,null,`title`,`${trans(`Display`)}`,`class`,`${fas('angle-down') + ' float-right fa-2x icon'}`);
ec('i');
}else if (cndSa1g) { 
let elhsHaW = eo('i','NSqff'+iiGAVo,null,`title`,`${trans(`Hide`)}`,`class`,`${fas('minus') + ' float-right fa-2x icon'}`);
ec('i');
}else if (cndn7IH) { 
let elcLOdK = eo('i','4LVff'+iiGAVo,null,`title`,`${trans(`Semi display`)}`,`class`,`${fas('plus') + ' float-right fa-2x icon'}`);
ec('i');
}ec('span');
let elGrxn_ = eo('small','c1yff'+iiGAVo,null,`class`,`text-muted d-block`);
text( answer.createdAt.format );
ec('small');
ec('div');
ec('div');
let cndgrDe = answer.display == SEMI_DISPLAYED;
this.setState('stkSaDM', cndgrDe);
let cndw9Pz = answer.display == DISPLAYED;
this.setState('sth07lA', cndw9Pz);
if (cndgrDe) { 
let cmpoGXn = this._lc('cpmNwBOBX', {parent:component,parentTop:layout,props:{content:answer.answer.split('\n').slice(0, 10).join('\n')},state:'stkSaDM',insideLoop:true,index:"" +iiGAVo});
let cndP9ZG = answer.answer.split('\n').length > 10;
this.setState('strXgGe', cndP9ZG);
if (cndP9ZG) { 
let elHhR6q = eo('p','0ANff'+iiGAVo,null, eventListeners, {onclick:[function(e) {var $el = this;component.handleAnswerDisplay(answer)}]},`class`,`pointer bold pink-text`);
text(`Read more...`);
ec('p');
}}else if (cndw9Pz) { 
let cmp6ZwC = this._lc('czp46jHD8', {parent:component,parentTop:layout,props:{content:answer.answer},state:'sth07lA',insideLoop:true,index:"" +iiGAVo});
}ec('div');
ec('div');
}
}ec('div');
}ec('div');
let elvwSsK = eo('div',null,null,`class`,`col-lg-3 col-md-4 text-center`);
let el7zUSd = eo('div',null,null,`class`,`card`);
let elJnWu2 = eo('div',null,null,`class`,`card-body`);
let cndJqZj = component.approveMsg.show;
this.setState('stOHvgT', cndJqZj);
if (cndJqZj) { 
let elmhdGP = eo('div','XGNf',null,`class`,`mb-3`);
let elpGZ2T = eo('span','0qef',null,`class`,`badge text-uppercase`);
elpGZ2T.cls = answerStatusClass(component.approveMsg.status);

            for (let className in elpGZ2T.cls) {
                elpGZ2T.classList.toggle(className, elpGZ2T.cls[className]);
            }  
            text(component.approveMsg.status);
ec('span');
let cnd5Lqr = component.approveMsg.status === 'rejected';
this.setState('st3Qhcv', cnd5Lqr);
if (cnd5Lqr) { 
let elewg07 = eo('span','kzhf');
text(component.approveMsg.msg);
ec('span');
}ec('div');
}let elKgTZt = eo('div',null,null,`class`,`topicEsTime`);
let cndFg3w = component.topic.userAnswer && component.topic.userAnswer.status == 'approved';
this.setState('stRHXPS', cndFg3w);
let cndI7bl = !(cndFg3w);
this.setState('st4hg_e', cndI7bl);
if (cndFg3w) { 
let cndUk8P = component.topic.userAnswer.prize != component.topic.prize;
this.setState('stolxjR', cndUk8P);
if (cndUk8P) { 
let elObTYo = eo('span','1AHf',null,`class`,`reward-status`);
elObTYo.cls = {'up': component.topic.userAnswer.prize > component.topic.prize, down: component.topic.userAnswer.prize < component.topic.prize};

            for (let className in elObTYo.cls) {
                elObTYo.classList.toggle(className, elObTYo.cls[className]);
            }  
            ec('span');
}let cmpvt2X = this._lc('ceYZkLJEr', {parent:component,parentTop:layout});
let el6PY5s = eo('span',null,null,`class`,`bold`);
el6PY5s.cls = {'green-text': component.topic.userAnswer.prize > component.topic.prize, 'red-text': component.topic.userAnswer.prize < component.topic.prize};

            for (let className in el6PY5s.cls) {
                el6PY5s.classList.toggle(className, el6PY5s.cls[className]);
            }  
            text(component.topic.userAnswer.prize.format());
ec('span');
let cnduf27 = component.topic.userAnswer && component.topic.userAnswer.prize != component.topic.prize;
this.setState('stlaVAu', cnduf27);
if (cnduf27) { 
let el_HRrw = eo('div','HeGf',null,`class`,`bold p-l-4`);
el_HRrw.cls = {'red-text': component.topic.userAnswer.prize < component.topic.prize, 'green-text': component.topic.userAnswer.prize > component.topic.prize};

            for (let className in el_HRrw.cls) {
                el_HRrw.classList.toggle(className, el_HRrw.cls[className]);
            }  
            let elFDXRM = eo('span','s9xf');
text(component.topic.userAnswer.prize > component.topic.prize ? '+' : '-');
ec('span');
let elUrG4P = eo('span','ZYbf');
text(Math.abs(component.topic.userAnswer.prize - component.topic.prize).format());
ec('span');
ec('div');
}}else { 
let cmpj2aZ = this._lc('cw1cCl5da', {parent:component,parentTop:layout,props:{coins:component.topic.prize},state:'st4hg_e'});
}let cndfVaq = component.startQuest;
this.setState('stSvkD2', cndfVaq);
if (cndfVaq) { 
let elxsEN7 = eo('div','QZzf');
let cndTUE3 = ! component.topic.subscribed;
this.setState('stsVrrA', cndTUE3);
let cndjqx5 = !(cndTUE3);
this.setState('stRvXdL', cndjqx5);
if (cndTUE3) { 
let eliK885 = eo('a','eUxf',null,`href`,`/academy`,`class`,`btn btn-sm btn-danger bold`);
text(`Subscribe to answer!`);
let el7O2ha = eo('i','Dsvf',null,`class`,`${fas('lock') + ' icon ml-2 icon'}`);
ec('i');
ec('a');
}else { 
let el39JP3 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.showQuestAnswer()}]}, boolAttrs, {disabled:component.disableQuestBtn},`class`,`btn text-uppercase`);
el39JP3.cls = component.btns;

            for (let className in el39JP3.cls) {
                el39JP3.classList.toggle(className, el39JP3.cls[className]);
            }  
            text( component.openAnswerText ? 'Cancel' : 'Start quest' );
let cndEya5 = ! component.user.isLoggedIn();
this.setState('stBaIYz', cndEya5);
if (cndEya5) { 
let ellwvKF = eo('i','TGOf',null,`class`,`${fas('lock') + ' icon ml-2 icon'}`);
ec('i');
}ec('button');
}ec('div');
}let cndFKtB = component.approveMsg.status === 'rejected';
this.setState('strYPi4', cndFKtB);
if (cndFKtB) { 
let eliD_Gt = eo('div','H_5f',null, eventListeners, {onclick:[function(e) {var $el = this;component.editAnswer(component.currentUserAnswer.id, component.currentUserAnswer.answer)}]},`title`,`${trans(`Edit your answer`)}`,`class`,`text-info cursor text-center`);
let eloSnTd = eo('i','la5f',null,`class`,`${fas('edit') + ' icon'}`);
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