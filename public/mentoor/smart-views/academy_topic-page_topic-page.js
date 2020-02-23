_Component({
                selector: 'topic-page',
                c: 'TopicPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['topic','openAnswerText','form','submitAnswer','storeAnswer','answerData','isValidForm','isSending','cancelBtn','user','handleAnswerDisplay','approveMsg','startQuest','btns','showQuestAnswer','disableQuestBtn','editAnswer','currentUserAnswer'],
                children: {cAgS4L4jx:'flk-spinner',c1ZGKloRB:'flk-time-ago',cxDtrtsx_:'flk-facebook-share',cP7t9Wbqh:'markdown',cdsthu2Po:'flk-audio-player',c5y20XGcc:'markdown',czIay3Es0:'flk-alert',c9TQazB4T:'markdown-input',c3lPH8Avx:'user-online',cpxYRnbmM:'markdown',c4URvEv8v:'markdown',cLcgvrCnm:'gold-icon',cmo3EABCS:'gold-icon',cnCp6IwzN:'layout'},
                render: function (component) {
                    let cmp6ESj = this._lc('cnCp6IwzN', {parent:component,content:(layout) => {let cndUkyJ = Is.empty(component.topic);
this.setState('stRjzIg', cndUkyJ);
if (cndUkyJ) { 
let cmpc8j5 = this._lc('cAgS4L4jx', {parent:component,parentTop:layout,state:'stRjzIg'});
}let cndkatc = ! Is.empty(component.topic);
this.setState('stQQkzN', cndkatc);
if (cndkatc) { 
let elW3POA = eo('div','alMf',null,`class`,`row topicDetails`);
let elz7pNm = eo('div','lzGf',null,`class`,`col-lg-9 col-md-8`);
let el3de73 = eo('section','mK7f');
let el46x8F = eo('header','onTf',null,`class`,`topicTitle`);
let el9kkKp = eo('h2','JmIf',null,`class`,`text-capitalize bold trackImage`);
let elVJyIC = eo('a','5FLf',null,`href`,`${URLS.track(component.topic.track)}`);
let elyffJS = ev('img','kb5f',null,`src`,`${component.topic.track.image}`,`class`,`mr-2 v-top`,`title`,`${component.topic.track.name}`,`alt`,`${component.topic.track.name}`);
ec('a');
let elbxpDn = eo('div','rJVf',null,`class`,`d-inline-block`);
text( component.topic.title );
let elg_CrK = eo('div','NpWf',null,`class`,`text-muted dateFont mt-1 font-weight-normal`);
let elqbuZE = eo('i','14lf',null,`class`,`${fas('calendar') + ' mx-2 icon'}`);
ec('i');
let cmpMJkv = this._lc('c1ZGKloRB', {parent:component,parentTop:layout,props:{timestamp:component.topic.createdAt.timestamp},state:'stQQkzN'});
let elGnjwt = eo('div','03lf',null,`class`,`m-t-1`);
let cmptxHo = this._lc('cxDtrtsx_', {parent:component,parentTop:layout,state:'stQQkzN'});
ec('div');
ec('div');
ec('div');
ec('h2');
ec('header');
let el05Hf2 = eo('p','tatf',null,`class`,`topicDesc`);
text( component.topic.shortDescription );
ec('p');
let cndL0Xs = component.topic.userAnswer && component.topic.userAnswer.status == 'rejected' && (component.topic.userAnswer.comment || component.topic.userAnswer.recordNote);
this.setState('stD8ooB', cndL0Xs);
if (cndL0Xs) { 
let elyjB81 = eo('footer','eYTf',null,`class`,`card p-2 m-b-1`);
let elomlLy = eo('h3','2VHf',null,`class`,`red-text bold m-b-1`);
text(`Your answer has been rejected :(`);
ec('h3');
let elrXv4S = eo('span','Af1f',null,`class`,`d-inline-block`);
text(`Note by:`);
ec('span');
let elY0wF7 = eo('strong','eoLf',null,`class`,`d-inline-block`);
text(component.topic.userAnswer.commentBy.name);
ec('strong');
let elmJKfo = eo('p','nrvf',null,`class`,`notes`);
let cnduaFM = component.topic.userAnswer.comment;
this.setState('st7DzRf', cnduaFM);
if (cnduaFM) { 
let cmp1fUs = this._lc('cP7t9Wbqh', {parent:component,parentTop:layout,props:{content:component.topic.userAnswer.comment},state:'st7DzRf'});
}ec('p');
let cndILkr = component.topic.userAnswer.recordNote;
this.setState('stRocMv', cndILkr);
if (cndILkr) { 
let cmpLStz = this._lc('cdsthu2Po', {parent:component,parentTop:layout,props:{src:component.topic.userAnswer.recordNote},attrs:{src:`${component.topic.userAnswer.recordNote}`},state:'stRocMv'});
}ec('footer');
}let eleKo27 = eo('div',null,null,`class`,`metaInfo`);
let elrc7Xd = eo('h3',null,null,`class`,`infoTitle bold`);
text(`Quest`);
ec('h3');
ec('div');
let eliruQc = eo('p',null,null,`class`,`topicQuest m-b-2`);
let cndBLxS = component.topic.quest;
this.setState('st8cA78', cndBLxS);
if (cndBLxS) { 
let cmplgYE = this._lc('c5y20XGcc', {parent:component,parentTop:layout,props:{content:component.topic.quest},state:'st8cA78'});
}ec('p');
ec('section');
let cndo3E1 = component.openAnswerText;
this.setState('stw_kqW', cndo3E1);
let cndCObn = ! Is.empty(component.topic.answers);
this.setState('stql6Xw', cndCObn);
if (cndo3E1) { 
let el_Vk81 = eo('div','lWyf',null,`class`,`answerForm`);
let elUak79 = eo('h3','Iy4f',null,`class`,`bold mb-3`);
text(`Please be aware of the following notes when you submit your answer`);
ec('h3');
let elgIAod = eo('ul','Es0f',null,`id`,`notes-list`);
let elWydjA = eo('li','Tf_f');
text(`Don't forget to read about`);
let eluagUV = eo('a','Oydf',null,`href`,`/writing-notes`,`class`,`bold mx-2 teal-text`);
text(`writing
                            notes`);
ec('a');
text(`before starting the quest.`);
ec('li');
let elNWo7b = eo('li','GMnf',null,`class`,`bold`);
text(`DO NOT copy/paste the answer, write it with your own words and understanding.`);
ec('li');
let elmqoph = eo('li','A5yf');
text(`Your answer is not meant to be ideal, so read about the quest and write what you know.`);
ec('li');
let elOBceD = eo('li','aUcf');
text(`Make your answer simple and understandable.`);
ec('li');
let elAluza = eo('li','f3af');
text(`You can use markdown syntax in your answer, so use it especially in writing code.`);
ec('li');
let elZvbeH = eo('li','m8Df');
text(`Always put references at the bottom of your answer from the articles/books you used in your
                        answer.`);
ec('li');
let el6SFCu = eo('li','mmFf');
text(`Stick to the quest requirements, don't explain anything else.`);
ec('li');
let elgmYc0 = eo('li','lkJf');
text(`Your answer will be reviewed before publishing it to public, still write what you only know for
                        the quest.`);
ec('li');
let el8gpOZ = eo('li','Ah5f');
text(`Once the answer is posted, you can't change it while it is pending.`);
ec('li');
let elyXrQ8 = eo('li','xtuf');
text(`If the answer is rejected, you can edit it and try again.`);
ec('li');
ec('ul');
let cndhw4n = component.form;
this.setState('stDMT0K', cndhw4n);
if (cndhw4n) { 
let cmpqQVg = this._lc('czIay3Es0', {parent:component,parentTop:layout,events:{onconfirm:function(e) {let $el = this; component.submitAnswer(component.form)},onclose:function(e) {let $el = this; component.form = null}},state:'stDMT0K'});
}let cndH4B3 = component.openAnswerText;
this.setState('stRAZaz', cndH4B3);
if (cndH4B3) { 
let elFYmH9 = eo('form','GlUf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.form = $el;}]});

                if (! elFYmH9.formHandler) {
                    window.cfrmdlr = elFYmH9.formHandler = new FormHandler(elFYmH9, component);
                } else {
                    window.cfrmdlr = elFYmH9.formHandler;
                }
            let cmp1GRR = this._lc('c9TQazB4T', {parent:component,parentTop:layout,props:{value:component.answerData},events:{oninput:function(e) {let $el = this; component.storeAnswer(e)}},attrs:{placeholder:`${trans(`Write your answer ;)`)}`,type:'textarea',required:''},state:'stRAZaz'});
let eljx5pA = eo('button','BB0f',null, boolAttrs, {disabled:!component.isValidForm || component.isSending},`class`,`btn btn-primary float-right`);
text(`Send`);
ec('button');
ec('form');
}let cndFW7x = component.cancelBtn;
this.setState('sti_3im', cndFW7x);
if (cndFW7x) { 
let el31dEz = eo('button','uOHf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openAnswerText = !component.openAnswerText; component.cancelBtn = false}]},`class`,`btn btn-danger float-right mr-2`);
text(`Cancel`);
ec('button');
}ec('div');
}else if (cndCObn) { 
let elPmFjt = eo('div');
let elyIJ6s = eo('h4',null,null,`class`,`answersTitle bold m-b-2`);
text(`Answers ( ${ component.topic.answers.length } )`);
ec('h4');
let cndx6On = ! component.topic.public && !component.topic.answered && component.user.id != 1;
this.setState('stuE1N4', cndx6On);
let cndAzOY = !(cndx6On);
this.setState('stPNk5L', cndAzOY);
if (cndx6On) { 
let elzxwbM = eo('h2','8ief',null,`class`,`text-center bold teal-text`);
text(`You need to answer first to see other's answers!`);
ec('h2');
}else { 
for (let i in component.topic.answers) {
let answer = component.topic.answers[i]; 
 let ii1_0D = '9Dz9PkL' + i;
let el5RUFS = eo('div','Y00TBDRkqVs8' + i+ii1_0D,null,`class`,`card m-b-2`);
let elFCO1h = eo('div','N7lff'+ii1_0D,null,`class`,`card-body`);
let elATPfP = eo('div','A_Eff'+ii1_0D,null,`class`,`d-flex justify-content-between mb-3`);
let elTNicK = eo('div','hn5ff'+ii1_0D,null,`class`,`answerMeta w-100`);
let elDyayR = eo('span','Xioff'+ii1_0D,null, eventListeners, {onclick:[function(e) {var $el = this;component.handleAnswerDisplay(answer);}]},`class`,`mainColor text-capitalize mr-2 pointer bold d-block`);
let elb3ASn = eo('span','pkqff'+ii1_0D);
elb3ASn.cls = {'green-text': answer.by.id == component.user.id, 'blue-text': answer.by.id != component.user.id};

            for (let className in elb3ASn.cls) {
                elb3ASn.classList.toggle(className, elb3ASn.cls[className]);
            }  
            text(answer.by.name);
ec('span');
let cmp4_Kl = this._lc('c3lPH8Avx', {parent:component,parentTop:layout,props:{id:answer.by.id},attrs:{id:`${answer.by.id}`},state:'stPNk5L',insideLoop:true,index:"" +ii1_0D});
let cndjMSL = answer.by.id == component.user.id && answer.status != 'approved';
this.setState('stqGJIO', cndjMSL);
let cndg6dt = answer.display == DISPLAYED;
this.setState('stuaLK3', cndg6dt);
let cndi4kO = answer.display == HIDDEN;
this.setState('stlglxC', cndi4kO);
if (cndjMSL) { 
let elwNAyg = eo('span','ENdff'+ii1_0D,null,`class`,`text-capitalize badge align-bottom ml-3 mb-1`);
elwNAyg.cls = answerStatusClass(answer.status);

            for (let className in elwNAyg.cls) {
                elwNAyg.classList.toggle(className, elwNAyg.cls[className]);
            }  
            text( answer.status );
ec('span');
}let cndXXVm = answer.display == SEMI_DISPLAYED;
this.setState('stNVTOO', cndXXVm);
let cndHwzr = cndg6dt;
this.setState('stPc6fR', cndHwzr);
let cndiWs2 = cndi4kO;
this.setState('stZng0G', cndiWs2);
if (cndXXVm) { 
let eldi8dE = eo('i','huyff'+ii1_0D,null,`title`,`${trans(`Display`)}`,`class`,`${fas('angle-down') + ' float-right fa-2x icon'}`);
ec('i');
}else if (cndHwzr) { 
let elORlEd = eo('i','Wq0ff'+ii1_0D,null,`title`,`${trans(`Hide`)}`,`class`,`${fas('minus') + ' float-right fa-2x icon'}`);
ec('i');
}else if (cndiWs2) { 
let elA4qNa = eo('i','7HNff'+ii1_0D,null,`title`,`${trans(`Semi display`)}`,`class`,`${fas('plus') + ' float-right fa-2x icon'}`);
ec('i');
}ec('span');
let elyHVog = eo('small','Uabff'+ii1_0D,null,`class`,`text-muted d-block`);
text( answer.createdAt.format );
ec('small');
ec('div');
ec('div');
let cndg325 = answer.display == SEMI_DISPLAYED;
this.setState('stWUoRu', cndg325);
let cnd_4m8 = answer.display == DISPLAYED;
this.setState('stdGzG_', cnd_4m8);
if (cndg325) { 
let cmp3ZQ_ = this._lc('cpxYRnbmM', {parent:component,parentTop:layout,props:{content:answer.answer.split('\n').slice(0, 10).join('\n')},state:'stWUoRu',insideLoop:true,index:"" +ii1_0D});
let cndAOaK = answer.answer.split('\n').length > 10;
this.setState('st1WRwp', cndAOaK);
if (cndAOaK) { 
let el3Vtal = eo('p','Wupff'+ii1_0D,null, eventListeners, {onclick:[function(e) {var $el = this;component.handleAnswerDisplay(answer)}]},`class`,`pointer bold pink-text`);
text(`Read more...`);
ec('p');
}}else if (cnd_4m8) { 
let cmpy_zk = this._lc('c4URvEv8v', {parent:component,parentTop:layout,props:{content:answer.answer},state:'stdGzG_',insideLoop:true,index:"" +ii1_0D});
}ec('div');
ec('div');
}
}ec('div');
}ec('div');
let elxx_wl = eo('div',null,null,`class`,`col-lg-3 col-md-4 text-center`);
let elt6G0F = eo('div',null,null,`class`,`card`);
let eliRZaa = eo('div',null,null,`class`,`card-body`);
let cnddnEX = component.approveMsg.show;
this.setState('stwKoY0', cnddnEX);
if (cnddnEX) { 
let elTTM1W = eo('div','QZXf',null,`class`,`mb-3`);
let elM5rZV = eo('span','aPlf',null,`class`,`badge text-uppercase`);
elM5rZV.cls = answerStatusClass(component.approveMsg.status);

            for (let className in elM5rZV.cls) {
                elM5rZV.classList.toggle(className, elM5rZV.cls[className]);
            }  
            text(component.approveMsg.status);
ec('span');
let cndmQ85 = component.approveMsg.status === 'rejected';
this.setState('sthxzpw', cndmQ85);
if (cndmQ85) { 
let elY5w7_ = eo('span','gDnf');
text(component.approveMsg.msg);
ec('span');
}ec('div');
}let elyF810 = eo('div',null,null,`class`,`topicEsTime`);
let cndIaKm = component.topic.userAnswer && component.topic.userAnswer.status == 'approved';
this.setState('stJqLgq', cndIaKm);
let cndPuX_ = !(cndIaKm);
this.setState('stK6sP3', cndPuX_);
if (cndIaKm) { 
let cndzOpE = component.topic.userAnswer.prize != component.topic.prize;
this.setState('stuHjNo', cndzOpE);
if (cndzOpE) { 
let eljiM_s = eo('span','In5f',null,`class`,`reward-status`);
eljiM_s.cls = {'up': component.topic.userAnswer.prize > component.topic.prize, down: component.topic.userAnswer.prize < component.topic.prize};

            for (let className in eljiM_s.cls) {
                eljiM_s.classList.toggle(className, eljiM_s.cls[className]);
            }  
            ec('span');
}let cmpeGp6 = this._lc('cLcgvrCnm', {parent:component,parentTop:layout});
let elOvamu = eo('span',null,null,`class`,`bold`);
elOvamu.cls = {'green-text': component.topic.userAnswer.prize > component.topic.prize, 'red-text': component.topic.userAnswer.prize < component.topic.prize};

            for (let className in elOvamu.cls) {
                elOvamu.classList.toggle(className, elOvamu.cls[className]);
            }  
            text(component.topic.userAnswer.prize.format());
ec('span');
let cndS1wv = component.topic.userAnswer && component.topic.userAnswer.prize != component.topic.prize;
this.setState('stLARLl', cndS1wv);
if (cndS1wv) { 
let elhEiw1 = eo('div','NIif',null,`class`,`bold p-l-4`);
elhEiw1.cls = {'red-text': component.topic.userAnswer.prize < component.topic.prize, 'green-text': component.topic.userAnswer.prize > component.topic.prize};

            for (let className in elhEiw1.cls) {
                elhEiw1.classList.toggle(className, elhEiw1.cls[className]);
            }  
            let el62Dy7 = eo('span','ZLff');
text(component.topic.userAnswer.prize > component.topic.prize ? '+' : '-');
ec('span');
let elHpwUX = eo('span','koXf');
text(Math.abs(component.topic.userAnswer.prize - component.topic.prize).format());
ec('span');
ec('div');
}}else { 
let cmpVyQQ = this._lc('cmo3EABCS', {parent:component,parentTop:layout,props:{coins:component.topic.prize},state:'stK6sP3'});
}let cndhODc = component.startQuest;
this.setState('stuxFZS', cndhODc);
if (cndhODc) { 
let elSCeKG = eo('div','e6Qf');
let cndut4p = ! component.topic.subscribed;
this.setState('st5jwIC', cndut4p);
let cndeXkb = !(cndut4p);
this.setState('stnc3dL', cndeXkb);
if (cndut4p) { 
let elpUA9W = eo('a','8_Wf',null,`href`,`/academy`,`class`,`btn btn-sm btn-danger bold`);
text(`Subscribe to answer!`);
let elYxons = eo('i','UM_f',null,`class`,`${fas('lock') + ' icon ml-2 icon'}`);
ec('i');
ec('a');
}else { 
let elYK7VR = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.showQuestAnswer()}]}, boolAttrs, {disabled:component.disableQuestBtn},`class`,`btn text-uppercase`);
elYK7VR.cls = component.btns;

            for (let className in elYK7VR.cls) {
                elYK7VR.classList.toggle(className, elYK7VR.cls[className]);
            }  
            text( component.openAnswerText ? 'Cancel' : 'Start quest' );
let cndpTz4 = ! component.user.isLoggedIn();
this.setState('stLVYzU', cndpTz4);
if (cndpTz4) { 
let elu21dw = eo('i','rhGf',null,`class`,`${fas('lock') + ' icon ml-2 icon'}`);
ec('i');
}ec('button');
}ec('div');
}let cnd79hA = component.approveMsg.status === 'rejected';
this.setState('staxXM5', cnd79hA);
if (cnd79hA) { 
let elfs9B2 = eo('div','w2Hf',null, eventListeners, {onclick:[function(e) {var $el = this;component.editAnswer(component.currentUserAnswer.id, component.currentUserAnswer.answer)}]},`title`,`${trans(`Edit your answer`)}`,`class`,`text-info cursor text-center`);
let elKwvZV = eo('i','KRef',null,`class`,`${fas('edit') + ' icon'}`);
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