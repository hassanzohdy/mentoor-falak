_Component({
                selector: 'einstein-puzzle-page',
                c: 'EinsteinPuzzlePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','puzzle','startQuest','hideForm','preview','submitAnswer','answerData','storeAnswer','getProperBadge','user','isSending'],
                children: {cuvOCo5ES:'flk-spinner',cyfcpbidO:'flk-facebook-share',c97bMBxse:'markdown',caAijZHEA:'flk-audio-player',cap4ngvDs:'markdown',ci5jAeZoK:'markdown',cfHS9HaGB:'markdown',cLjNvqfgJ:'gold-icon',cHb71qsuD:'layout'},
                render: function (component) {
                    let cmp4tU2 = this._lc('cHb71qsuD', {parent:component,content:(layout) => {let elSsx7g = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elhXhv6 = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let elW_iYt = eo('a',null,null,`title`,`${trans(`Shop`)}`,`href`,`/einstein-chamber/shop`,`class`,`m-l-1`);
let elmYnQc = eo('span',null,null,`class`,`shopping-cart`);
ec('span');
ec('a');
let elW0F77 = eo('a',null,null,`title`,`${trans(`Help`)}`,`href`,`/einstein-chamber/unlock`);
let elMrNUY = eo('i',null,null,`class`,`${fas('question-circle') + ' fa-2x ml-2 v-middle icon'}`);
ec('i');
ec('a');
let cndXOk8 = component.isLoading;
this.setState('stmBQZ0', cndXOk8);
let cndLdnD = !(cndXOk8);
this.setState('stQN9vr', cndLdnD);
if (cndXOk8) { 
let cmp8e4t = this._lc('cuvOCo5ES', {parent:component,parentTop:layout,state:'stmBQZ0'});
}else { 
let cndco1r = component.puzzle.public;
this.setState('stsA60o', cndco1r);
if (cndco1r) { 
let elTLX8X = eo('span','p1Ff',null,`class`,`ml-2 badge badge-primary`);
text(`Public`);
ec('span');
}let cndm1bu = component.puzzle && component.puzzle.public;
this.setState('stgjhmn', cndm1bu);
if (cndm1bu) { 
let elMKVTx = eo('div','qIof',null,`class`,`m-y-1`);
let cmp2jER = this._lc('cyfcpbidO', {parent:component,parentTop:layout,state:'stgjhmn'});
ec('div');
}let cndhIcI = component.puzzle.status && component.puzzle.status == 'approved';
this.setState('stdZ7_A', cndhIcI);
if (cndhIcI) { 
let el4XDvW = eo('div','s5Af');
let elGGXbZ = eo('a','8ecf',null,`href`,`/einstein-chamber/puzzles/${ component.puzzle.id }/answers`,`class`,`btn btn-pink bold`);
text(`See how others
                solved it!`);
ec('a');
ec('div');
}let elvB6cE = eo('div',null,null,`class`,`puzzle row`);
let elu2Ueo = eo('div',null,null,`class`,`col-9`);
let elQ4mmu = eo('h1',null,null,`class`,`m-v-1`);
text( component.puzzle.title );
let el9NHbk = eo('strong',null,null,`class`,`green-text ml-2`);
text(component.puzzle.category.name);
ec('strong');
ec('h1');
let cndg9f9 = component.puzzle.status == 'rejected';
this.setState('stbFQbN', cndg9f9);
if (cndg9f9) { 
let elE0cGu = eo('div','5AUf',null,`class`,`card p-1 m-b-1`);
let els6GKU = eo('div','F_If',null,`class`,`bold red-text`);
text(`You're previous answer had some issues, please check the following
                        comment and act accordingly.`);
ec('div');
let eltNu4e = eo('div','Fiwf',null,`class`,`m-y-1`);
let ellHzEI = eo('span','EZzf');
text(`By:`);
ec('span');
let elrPTtm = eo('strong','AQsf',null,`class`,`ml-2`);
text(component.puzzle.commentBy.name);
ec('strong');
let cndWTso = component.puzzle.comment;
this.setState('stq2PDu', cndWTso);
if (cndWTso) { 
let cmpylv4 = this._lc('c97bMBxse', {parent:component,parentTop:layout,props:{content:component.puzzle.comment},state:'stq2PDu'});
}let cnd4D4V = component.puzzle.recordNote;
this.setState('stQUNcI', cnd4D4V);
if (cnd4D4V) { 
let cmpvFtz = this._lc('caAijZHEA', {parent:component,parentTop:layout,props:{src:component.puzzle.recordNote},attrs:{src:`${component.puzzle.recordNote}`},state:'stQUNcI'});
}ec('div');
ec('div');
}let cmpxEHL = this._lc('cap4ngvDs', {parent:component,parentTop:layout,props:{content:component.puzzle.quest}});
let cndjiHc = component.puzzle.answer;
this.setState('stRYgt2', cndjiHc);
if (cndjiHc) { 
let eloS1Fz = eo('h1','_dyf',null,`class`,`m-v-1 teal-text`);
text(`Your previous answer`);
ec('h1');
let elnSavs = ev('hr','Cr5f');
let cmpCsxi = this._lc('ci5jAeZoK', {parent:component,parentTop:layout,props:{content:component.puzzle.answer},state:'stRYgt2'});
}let cndhJlB = component.startQuest;
this.setState('stYgD1f', cndhJlB);
if (cndhJlB) { 
let elQMzAz = eo('div','4o9f',null,`class`,`m-t-1`);
elQMzAz.cls = {'d-none': component.hideForm};

            for (let className in elQMzAz.cls) {
                elQMzAz.classList.toggle(className, elQMzAz.cls[className]);
            }  
            let ela_jar = eo('h1','X3df',null,`class`,`m-v-1`);
text(`Notes before answering.`);
ec('h1');
let eldQmnX = eo('ul','LXOf',null,`class`,`font-weight-normal`);
let elPIzz5 = eo('li','MxWf',null,`class`,`red-text bold`);
text(`Any code without comments makes your answer get rejected!`);
ec('li');
let elbBUzg = eo('li','tCVf',null,`class`,`pink-text bold`);
text(`the code MUST BE WORKING or it will get rejected!`);
ec('li');
let eloDnpH = eo('li','Q_sf');
text(`You can use markdown syntax in your answer, so use it especially in writing code.`);
ec('li');
let elrytbA = eo('li','QE4f');
text(`Add the code in the answer box then put it on`);
let elq8H8f = eo('a','uAVf',null,`href`,`https://codepen.io/`,`class`,`bold m-h-1 teal-text`,`target`,`_blank`);
text(`Codepen`);
ec('a');
text(`if your challenge is
                            about`);
let el5t7VG = eo('strong','xn4f',null,`class`,`mx-2`);
text(`HTML, CSS, Javascript, Typescript or SCSS`);
ec('strong');
text(`and put it on`);
let eldxnK4 = eo('a','wYdf',null,`href`,`https://tehplayground.com`,`class`,`bold m-h-1 green-text`,`target`,`_blank`);
text(`Tehplayground`);
ec('a');
text(`If your challenge is about`);
let elVRH6w = eo('strong','nAlf',null,`class`,`mx-2`);
text(`PHP`);
ec('strong');
text(`after that put the link at the bottom of the answer or it will get`);
let el3jLUg = eo('span','_QDf',null,`class`,`ml-1 red-text bold`);
text(`rejected`);
ec('span');
text(`.`);
ec('li');
let elgb7S5 = eo('li','B2tf');
text(`Stick to the puzzle requirements.`);
ec('li');
let elr1glB = eo('li','hjyf');
text(`Your answer will be reviewed, you can not edit it again it if it gets`);
let elB67Fc = eo('span','sonf',null,`class`,`ml-1 red-text bold`);
text(`rejected`);
ec('span');
text(`.`);
ec('li');
let elQOTd1 = eo('li','YYZf');
let elHqtu5 = eo('strong','If4f',null,`class`,`mr-1`);
text(`Double`);
ec('strong');
text(`check the answer before submitting it, you can't change it again, so don't forget to`);
let elyFP5a = eo('button','0UWf',null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = ! component.preview}]},`type`,`button`,`class`,`btn btn-sm btn-success`);
text(`preview`);
ec('button');
text(`it.`);
ec('li');
let elMZZ9Z = eo('li','PXIf');
text(`If the puzzle is about creating a`);
let elRTkAt = eo('strong','953f',null,`class`,`mx-2`);
text(`built in function`);
ec('strong');
text(`in programming language,`);
let elowrho = eo('strong','as0f',null,`class`,`mx-2`);
text(`DO NOT`);
ec('strong');
text(`use it, but implement it.`);
ec('li');
let eliGHwF = eo('li','Pskf');
text(`If the answer is`);
let elt4L42 = eo('span','mQtf',null,`class`,`mx-1 red-text bold`);
text(`rejected`);
ec('span');
text(`,
                            the puzzle may appear again later.`);
ec('li');
ec('ul');
let eld0iTL = eo('p','v5Jf',null,`class`,`orange-text bold`);
text(`If the answer got`);
let el4DnFD = eo('span','UEff',null,`class`,`mx-1 red-text bold`);
text(`rejected`);
ec('span');
text(`,
                        you will lose the reward of the puzzle from your gold, thus try to understand the quest
                        properly.`);
ec('p');
let elsYHaJ = eo('div','UUHf',null,`class`,`row`);
let elBBB4x = eo('form','P0Cf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitAnswer($el)}]},`class`,`col`);

                if (! elBBB4x.formHandler) {
                    window.cfrmdlr = elBBB4x.formHandler = new FormHandler(elBBB4x, component);
                } else {
                    window.cfrmdlr = elBBB4x.formHandler;
                }
            let el3XdL9 = eo('textarea','f1Bf',null, eventListeners, {oninput:[function(e) {component.answerData = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elBBB4x.formHandler.addError(`answer`, 'required', trans('validation.required'));}return elBBB4x.formHandler.removeError(`answer`);}],onkeyup:[function(e) {var $el = this;component.storeAnswer($el.value)}]},`value`,`${fval(component.answerData)}`,`name`,`${(`answer`).toInputName()}`,`placeholder`,`${trans(`Write your answer ;)`)}`,`type`,`textarea`,`rows`,`10`,`class`,`form-control mb-4`,`id`,`answer`);
el3XdL9.value = fval(component.answerData);
ec('textarea');
let cndAh7K = elBBB4x.formHandler.getError(`answer`);
this.setState('stRUpS_', cndAh7K);
if (cndAh7K) { 
let elNv4O2 = eo('div','w5bf',null,`class`,`alert alert-danger`);
text(elBBB4x.formHandler.getError(`answer`));
ec('div');
}let ele6YsU = eo('button',null,null,`class`,`btn btn-primary float-right`);
text(`Send`);
ec('button');
let elqMRzW = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = ! component.preview}]},`class`,`btn btn-success float-right`,`type`,`button`);
text(`Preview`);
ec('button');
let elCcAd5 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.startQuest = false}]},`class`,`btn btn-danger float-right mr-2`,`type`,`button`);
text(`Cancel`);
ec('button');
ec('form');
let cnd27QM = component.preview && component.answerData;
this.setState('st2WpbJ', cnd27QM);
if (cnd27QM) { 
let elmSHgo = eo('div','7XYf',null,`class`,`col-6`);
let cmpmMmW = this._lc('cfHS9HaGB', {parent:component,parentTop:layout,props:{content:component.answerData},state:'st2WpbJ'});
ec('div');
}ec('div');
ec('div');
}ec('div');
let el7MfFU = eo('div',null,null,`class`,`col`);
let elXxjCu = eo('div',null,null,`class`,`card m-t-0`);
let elxGXEi = eo('div',null,null,`title`,`${trans(`Level ${ component.puzzle.level }`)}`,`class`,`text-center level`);
text(component.puzzle.level);
ec('div');
let cndIsIY = component.puzzle.status == 'active';
this.setState('stZgbT0', cndIsIY);
let cndV2MD = component.puzzle.status;
this.setState('sthcNZ2', cndV2MD);
if (cndIsIY) { 
let elcNmYC = eo('div','4B5f',null,`class`,`text-center bold status active`);
ec('div');
}else if (cndV2MD) { 
let elpcwaR = eo('div',null,null,`class`,`text-center bold status`);
let eltSeL1 = eo('span',null,null,`class`,`badge`);
eltSeL1.cls = component.getProperBadge(component.puzzle.status);

            for (let className in eltSeL1.cls) {
                eltSeL1.classList.toggle(className, eltSeL1.cls[className]);
            }  
            text(component.puzzle.status);
ec('span');
ec('div');
}let elChG9f = eo('div',null,null,`class`,`bold text-center m-v-1`);
let elrsHVw = eo('div');
text(`Reward`);
ec('div');
let cmpCsIC = this._lc('cLjNvqfgJ', {parent:component,parentTop:layout,props:{coins:component.puzzle.reward}});
ec('div');
let cndhruf = component.puzzle.status == 'approved';
this.setState('steW2RD', cndhruf);
if (cndhruf) { 
let elirWSP = eo('i','KFwf',null,`title`,`${trans(`Solved`)}`,`class`,`${fas('check') + ' green-text fa-2x text-center icon'}`);
ec('i');
}let elrtxqU = eo('div',null,null,`class`,`text-center m-b-1`);
let cndR_ZV = component.user.isLoggedIn() && ['active', 'rejected'].includes(component.puzzle.status);
this.setState('stsUaEi', cndR_ZV);
if (cndR_ZV) { 
let ell4ATG = eo('button','cSvf',null, eventListeners, {onclick:[function(e) {var $el = this;component.startQuest = ! component.startQuest}]}, boolAttrs, {disabled:component.isSending},`class`,`btn text-uppercase`);
ell4ATG.cls = {'btn-primary': ! component.startQuest, 'btn-danger': component.startQuest};

            for (let className in ell4ATG.cls) {
                ell4ATG.classList.toggle(className, ell4ATG.cls[className]);
            }  
            text( component.startQuest ? 'Cancel' : 'Start quest' );
ec('button');
}let cnd1lVD = ! component.user.isLoggedIn();
this.setState('sthblHq', cnd1lVD);
if (cnd1lVD) { 
let el19u5v = eo('a','1Z9f',null,`href`,`/login`,`class`,`btn bold btn-danger text-uppercase`);
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