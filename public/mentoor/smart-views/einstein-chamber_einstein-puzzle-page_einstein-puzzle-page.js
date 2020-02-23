_Component({
                selector: 'einstein-puzzle-page',
                c: 'EinsteinPuzzlePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','puzzle','startQuest','hideForm','preview','submitAnswer','tagsService','answerData','storeAnswer','getProperBadge','user','isSending'],
                children: {cN997YYEe:'flk-spinner',cp0MFhbdz:'flk-facebook-share',c3_BbiAqX:'markdown',caZHv2KRc:'flk-audio-player',czM8tabTM:'markdown',cywssXvgU:'markdown',cf9CNWUce:'flk-dropdown-list',cNTfgzQ5M:'markdown',c1xyxyHOZ:'gold-icon',cqqsEJGaY:'layout'},
                render: function (component) {
                    let cmpMjKS = this._lc('cqqsEJGaY', {parent:component,content:(layout) => {let el9meBs = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elcCIny = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let elopL2R = eo('a',null,null,`title`,`${trans(`Shop`)}`,`href`,`/einstein-chamber/shop`,`class`,`m-l-1`);
let elWETbn = eo('span',null,null,`class`,`shopping-cart`);
ec('span');
ec('a');
let eld4s3o = eo('a',null,null,`title`,`${trans(`Help`)}`,`href`,`/einstein-chamber/unlock`);
let elL_Y8H = eo('i',null,null,`class`,`${fas('question-circle') + ' fa-2x ml-2 v-middle icon'}`);
ec('i');
ec('a');
let cndEUCL = component.isLoading;
this.setState('st4aIEv', cndEUCL);
let cnddwfv = !(cndEUCL);
this.setState('stx2EQR', cnddwfv);
if (cndEUCL) { 
let cmpIa9m = this._lc('cN997YYEe', {parent:component,parentTop:layout,state:'st4aIEv'});
}else { 
let cnds0zQ = component.puzzle.public;
this.setState('stWKcPC', cnds0zQ);
if (cnds0zQ) { 
let el9ulGR = eo('span','KRBf',null,`class`,`ml-2 badge badge-primary`);
text(`Public`);
ec('span');
}let cndHOPR = component.puzzle && component.puzzle.public;
this.setState('stNxMUh', cndHOPR);
if (cndHOPR) { 
let elEzr5b = eo('div','02pf',null,`class`,`m-y-1`);
let cmpU8Eb = this._lc('cp0MFhbdz', {parent:component,parentTop:layout,state:'stNxMUh'});
ec('div');
}let cndPV6I = component.puzzle.status && component.puzzle.status == 'approved';
this.setState('stEGX7z', cndPV6I);
if (cndPV6I) { 
let eleOgtq = eo('div','r0Qf');
let elmtM20 = eo('a','HUxf',null,`href`,`/einstein-chamber/puzzles/${ component.puzzle.id }/answers`,`class`,`btn btn-pink bold`);
text(`See how others
                solved it!`);
ec('a');
ec('div');
}let elXYGq_ = eo('div',null,null,`class`,`puzzle row`);
let elKGV_A = eo('div',null,null,`class`,`col-9`);
let elBbxRZ = eo('h1',null,null,`class`,`m-v-1`);
text( component.puzzle.title );
let elbh1pu = eo('strong',null,null,`class`,`green-text ml-2`);
text(component.puzzle.category.name);
ec('strong');
ec('h1');
let cnd2QRD = component.puzzle.status == 'rejected';
this.setState('stHmnX6', cnd2QRD);
if (cnd2QRD) { 
let el1CaaH = eo('div','I7qf',null,`class`,`card p-1 m-b-1`);
let el9HLqA = eo('div','dycf',null,`class`,`bold red-text`);
text(`You're previous answer had some issues, please check the following
                        comment and act accordingly.`);
ec('div');
let el7h_B2 = eo('div','eSRf',null,`class`,`m-y-1`);
let el1J4Po = eo('span','cudf');
text(`By:`);
ec('span');
let ellBsFe = eo('strong','AQIf',null,`class`,`ml-2`);
text(component.puzzle.commentBy.name);
ec('strong');
let cndP3c5 = component.puzzle.comment;
this.setState('stPQmrp', cndP3c5);
if (cndP3c5) { 
let cmp3I9r = this._lc('c3_BbiAqX', {parent:component,parentTop:layout,props:{content:component.puzzle.comment},state:'stPQmrp'});
}let cndt5w0 = component.puzzle.recordNote;
this.setState('stwRLHJ', cndt5w0);
if (cndt5w0) { 
let cmpe_Rx = this._lc('caZHv2KRc', {parent:component,parentTop:layout,props:{src:component.puzzle.recordNote},attrs:{src:`${component.puzzle.recordNote}`},state:'stwRLHJ'});
}ec('div');
ec('div');
}let cmpBq8V = this._lc('czM8tabTM', {parent:component,parentTop:layout,props:{content:component.puzzle.quest}});
let cndQU15 = component.puzzle.answer;
this.setState('stsh48z', cndQU15);
if (cndQU15) { 
let elLOAIP = eo('h1','dNjf',null,`class`,`m-v-1 teal-text`);
text(`Your previous answer`);
ec('h1');
let elnDmUV = ev('hr','7OPf');
let cmp4kIy = this._lc('cywssXvgU', {parent:component,parentTop:layout,props:{content:component.puzzle.answer},state:'stsh48z'});
}let cndQnaw = component.startQuest;
this.setState('stZGY4z', cndQnaw);
if (cndQnaw) { 
let el6_qbz = eo('div','WDuf',null,`class`,`m-t-1`);
el6_qbz.cls = {'d-none': component.hideForm};

            for (let className in el6_qbz.cls) {
                el6_qbz.classList.toggle(className, el6_qbz.cls[className]);
            }  
            let elQ4sUS = eo('h1','6XBf',null,`class`,`m-v-1`);
text(`Notes before answering.`);
ec('h1');
let eluR_xM = eo('ul','9Hcf',null,`class`,`font-weight-normal`);
let elqtRpN = eo('li','Asxf',null,`class`,`red-text bold`);
text(`Any code without comments makes your answer get rejected!`);
ec('li');
let eldEhp7 = eo('li','i55f',null,`class`,`pink-text bold`);
text(`the code MUST BE WORKING or it will get rejected!`);
ec('li');
let elDcOm_ = eo('li','thjf');
text(`You can use markdown syntax in your answer, so use it especially in writing code.`);
ec('li');
let elvzgFP = eo('li','abSf');
text(`Add the code in the answer box then put it on`);
let elLFGxN = eo('a','8Zyf',null,`href`,`https://codepen.io/`,`class`,`bold m-h-1 teal-text`,`target`,`_blank`);
text(`Codepen`);
ec('a');
text(`if your challenge is
                            about`);
let ellvmQr = eo('strong','zQOf',null,`class`,`mx-2`);
text(`HTML, CSS, Javascript, Typescript or SCSS`);
ec('strong');
text(`and put it on`);
let elIJY0v = eo('a','vyQf',null,`href`,`https://tehplayground.com`,`class`,`bold m-h-1 green-text`,`target`,`_blank`);
text(`Tehplayground`);
ec('a');
text(`If your challenge is about`);
let elXGXUI = eo('strong','Y0yf',null,`class`,`mx-2`);
text(`PHP`);
ec('strong');
text(`after that put the link at the bottom of the answer or it will get`);
let eluM5IJ = eo('span','_10f',null,`class`,`ml-1 red-text bold`);
text(`rejected`);
ec('span');
text(`.`);
ec('li');
let elmWTy_ = eo('li','anXf');
text(`Stick to the puzzle requirements.`);
ec('li');
let elG7pWz = eo('li','Od4f');
text(`Your answer will be reviewed, you can not edit it again it if it gets`);
let elcQEpL = eo('span','C3_f',null,`class`,`ml-1 red-text bold`);
text(`rejected`);
ec('span');
text(`.`);
ec('li');
let elu7AHv = eo('li','HQ7f');
let elt3ZIN = eo('strong','uidf',null,`class`,`mr-1`);
text(`Double`);
ec('strong');
text(`check the answer before submitting it, you can't change it again, so don't forget to`);
let ellqe12 = eo('button','zIXf',null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = ! component.preview}]},`type`,`button`,`class`,`btn btn-sm btn-success`);
text(`preview`);
ec('button');
text(`it.`);
ec('li');
let eln6uNz = eo('li','xKQf');
text(`If the puzzle is about creating a`);
let el95nl0 = eo('strong','QwNf',null,`class`,`mx-2`);
text(`built in function`);
ec('strong');
text(`in
                            programming language,`);
let elIVBFH = eo('strong','yPEf',null,`class`,`mx-2`);
text(`DO NOT`);
ec('strong');
text(`use it, but implement it.`);
ec('li');
let el8V6d9 = eo('li','lxIf');
text(`If the answer is`);
let elm8tC5 = eo('span','pdTf',null,`class`,`mx-1 red-text bold`);
text(`rejected`);
ec('span');
text(`,
                            the puzzle may appear again later.`);
ec('li');
ec('ul');
let elihKdM = eo('p','moGf',null,`class`,`orange-text bold`);
text(`If the answer got`);
let elJg3RQ = eo('span','y7cf',null,`class`,`mx-1 red-text bold`);
text(`rejected`);
ec('span');
text(`,
                        you will lose the reward of the puzzle from your gold, thus try to understand the quest
                        properly.`);
ec('p');
let eldho8F = eo('div','iiEf',null,`class`,`row`);
let eldXDo2 = eo('form','qKrf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitAnswer($el)}]},`class`,`col`);

                if (! eldXDo2.formHandler) {
                    window.cfrmdlr = eldXDo2.formHandler = new FormHandler(eldXDo2, component);
                } else {
                    window.cfrmdlr = eldXDo2.formHandler;
                }
            let ellLaeY = eo('section','Iqxf',null,`class`,`tags form-group`);
let cmpaa28 = this._lc('cf9CNWUce', {parent:component,parentTop:layout,props:{imageable:true,multiple:true,lazyLoading:true,service:component.tagsService},boolAttrs:{multiple:true},attrs:{name:`${(`language`).toInputName()}`,label:'Choose a language to answer with',required:''},style:{position:'top'},state:'stZGY4z'});
ec('section');
let elwhWMy = eo('textarea','vVKf',null, eventListeners, {oninput:[function(e) {component.answerData = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eldXDo2.formHandler.addError(`answer`, 'required', trans('validation.required'));}return eldXDo2.formHandler.removeError(`answer`);}],onkeyup:[function(e) {var $el = this;component.storeAnswer($el.value)}]},`value`,`${fval(component.answerData)}`,`name`,`${(`answer`).toInputName()}`,`placeholder`,`${trans(`Write your answer ;)`)}`,`type`,`textarea`,`rows`,`10`,`class`,`form-control mb-4`,`id`,`answer`);
elwhWMy.value = fval(component.answerData);
ec('textarea');
let cndwnWQ = eldXDo2.formHandler.getError(`answer`);
this.setState('st8HX7k', cndwnWQ);
if (cndwnWQ) { 
let elybKr2 = eo('div','6P7f',null,`class`,`alert alert-danger`);
text(eldXDo2.formHandler.getError(`answer`));
ec('div');
}let elq3gjj = eo('button',null,null,`class`,`btn btn-primary float-right`);
text(`Send`);
ec('button');
let elOJRUb = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = ! component.preview}]},`class`,`btn btn-success float-right`,`type`,`button`);
text(`Preview`);
ec('button');
let el1mr7d = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.startQuest = false}]},`class`,`btn btn-danger float-right mr-2`,`type`,`button`);
text(`Cancel`);
ec('button');
ec('form');
let cndBQs0 = component.preview && component.answerData;
this.setState('stWoWJ1', cndBQs0);
if (cndBQs0) { 
let el5nJbE = eo('div','Ap_f',null,`class`,`col-6`);
let cmpUIya = this._lc('cNTfgzQ5M', {parent:component,parentTop:layout,props:{content:component.answerData},state:'stWoWJ1'});
ec('div');
}ec('div');
ec('div');
}ec('div');
let elrJ0Fn = eo('div',null,null,`class`,`col`);
let elgAR0_ = eo('div',null,null,`class`,`card m-t-0`);
let elycCKL = eo('div',null,null,`title`,`${trans(`Level ${ component.puzzle.level }`)}`,`class`,`text-center level`);
text(component.puzzle.level);
ec('div');
let cnd2Fni = component.puzzle.status == 'active';
this.setState('steWG86', cnd2Fni);
let cndQo5J = component.puzzle.status;
this.setState('std1Hn8', cndQo5J);
if (cnd2Fni) { 
let elSHFm0 = eo('div','t0yf',null,`class`,`text-center bold status active`);
ec('div');
}else if (cndQo5J) { 
let elFaxRi = eo('div',null,null,`class`,`text-center bold status`);
let elI_xa8 = eo('span',null,null,`class`,`badge`);
elI_xa8.cls = component.getProperBadge(component.puzzle.status);

            for (let className in elI_xa8.cls) {
                elI_xa8.classList.toggle(className, elI_xa8.cls[className]);
            }  
            text(component.puzzle.status);
ec('span');
ec('div');
}let elIN423 = eo('div',null,null,`class`,`bold text-center m-v-1`);
let elbcbAA = eo('div');
text(`Reward`);
ec('div');
let cmp4Vta = this._lc('c1xyxyHOZ', {parent:component,parentTop:layout,props:{coins:component.puzzle.reward}});
ec('div');
let cndEMdK = component.puzzle.status == 'approved';
this.setState('st0rGcB', cndEMdK);
if (cndEMdK) { 
let elE8Tax = eo('i','N9Rf',null,`title`,`${trans(`Solved`)}`,`class`,`${fas('check') + ' green-text fa-2x text-center icon'}`);
ec('i');
}let el2o2MF = eo('div',null,null,`class`,`text-center m-b-1`);
let cnddHE6 = component.user.isLoggedIn() && ['active', 'rejected'].includes(component.puzzle.status);
this.setState('stDTUlY', cnddHE6);
if (cnddHE6) { 
let eln743S = eo('button','zN7f',null, eventListeners, {onclick:[function(e) {var $el = this;component.startQuest = ! component.startQuest}]}, boolAttrs, {disabled:component.isSending},`class`,`btn text-uppercase`);
eln743S.cls = {'btn-primary': ! component.startQuest, 'btn-danger': component.startQuest};

            for (let className in eln743S.cls) {
                eln743S.classList.toggle(className, eln743S.cls[className]);
            }  
            text( component.startQuest ? 'Cancel' : 'Start quest' );
ec('button');
}let cnduhDF = ! component.user.isLoggedIn();
this.setState('stM32Fm', cnduhDF);
if (cnduhDF) { 
let elbxEIh = eo('a','Xu1f',null,`href`,`/login`,`class`,`btn bold btn-danger text-uppercase`);
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