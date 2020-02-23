_Component({
                selector: 'project-test-suits-page',
                c: 'ProjectTestSuitsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','testCaseIsOpened','openModal','detectChanges','confirmRemoving','openTestCase','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove','confirmDeletingTestCase','removeTestCase','confirmRemovingTestCase','submitTestCase','testCaseType','testSuit','testCaseHeading','testCase','preConditionsTestCasesIds','requestTestCases'],
                children: {cNRANo5qA:'flk-dropdown-list',c2ezf3Fcq:'flk-dropdown-list',c0j3h03bh:'flk-file-input',c0q0U4m4Z:'project-layout',cmCO7STWJ:'flk-dropdown-list',cu1myNYoy:'flk-modal',clpEoNj5a:'flk-alert',cw4qhkRuK:'flk-alert'},
                render: function (component) {
                    let cmp6htq = this._lc('c0q0U4m4Z', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndVex6 = ! component.testCaseIsOpened;
this.setState('st0nNsF', cndVex6);
if (cndVex6) { 
let elrU0bg = eo('button','f_Gf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elFoOIc = eo('i','kcVf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Test suit`);
ec('button');
let elTN2i2 = eo('h1','hkmf',null,`class`,`m-y-1`);
text(`${ component.project.name } Test suits
        (${ component.project.testSuits.length })`);
ec('h1');
let elnNtGM = eo('table','QNnf',null,`class`,`table table-striped buttoned`);
let elJ2Wk3 = eo('thead','gaXf');
let elljkQp = eo('tr','8YHf');
let elWz3zi = eo('th','Zydf');
text(`#`);
ec('th');
let elKjW0h = eo('th','7MTf');
text(`Name`);
ec('th');
let el1DkGU = eo('th','pSRf');
text(`User Story`);
ec('th');
let el3ZtSw = eo('th','ixRf');
text(`Test Cases`);
ec('th');
let elwjPPE = eo('th','6ncf');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elQpGqZ = eo('tbody','QvOf');
let cndHPnb = Is.empty(component.project.testSuits);
this.setState('stLIr0L', cndHPnb);
if (cndHPnb) { 
let el5Yepv = eo('tr','2YRf');
let elXjtAL = eo('td','S1Qf',null, 'style', {textAlign:'center'},`colspan`,`5`);
text(`No Test suits Yet`);
ec('td');
ec('tr');
}for (let index in component.project.testSuits) {
let record = component.project.testSuits[index]; 
 let ii13sN = record.id+ index;
let elh55QZ = eo('tr','HmcSuizvVldA' + index+ii13sN);
let elITNqf = eo('td','JIVff'+ii13sN);
text(record.id);
ec('td');
let elBpn1l = eo('td','s39ff'+ii13sN);
text(record.name);
ec('td');
let elcBTwM = eo('td','zT1ff'+ii13sN,null,`title`,``);
text(record.userStory.title.readMoreChars(20));
ec('td');

                    setTimeout(function () {
                        let $el = elcBTwM;
                        
            true && tippyTooltip($el, {arrow:true,content:`${record.userStory.title}`});
        ;
                    }, 20);                
                let el8xdrT = eo('td','H68ff'+ii13sN);
let elWuwVB = eo('a','SI7ff'+ii13sN,null, eventListeners, {onclick:[function(e) {var $el = this;record.viewTestCases = ! record.viewTestCases; component.detectChanges()}]},`href`,`#`);
let elYnASF = eo('span','LKhff'+ii13sN);
text(record.testCases.length);
ec('span');
ec('a');
ec('td');
let ely8ruj = eo('td','ugsff'+ii13sN);
let cnd1_32 = record.canBeModified;
this.setState('st4YhXd', cnd1_32);
if (cnd1_32) { 
let elQMeHh = eo('button','ec0ff'+ii13sN,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elU428k = eo('i','xhaff'+ii13sN,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elQMeHh;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Test suit')}`});
        ;
                    }, 20);                
                let elyZ4EB = eo('button','CRWff'+ii13sN,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let el9gN0I = eo('i','bTIff'+ii13sN,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elyZ4EB;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Test suit')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
let cndSiUW = record.viewTestCases;
this.setState('stofFad', cndSiUW);
if (cndSiUW) { 
let eloDYI0 = eo('tr','ZTeff'+ii13sN);
for (let i in ['positive', 'negative']) {
let type = ['positive', 'negative'][i]; 
 let ii1hfh = 'etfMIzA' + i;
let elnSWu9 = eo('td','bp4djf2odnjQ' + i+ii13sN+ii1hfh,null,`colspan`,`2`,`class`,`test-case-type v-top text-center ${ type }`);
let elUf8V5 = eo('h4','vHiff'+ii13sN+ii1hfh,null,`class`,`bold text-capitalize`);
elUf8V5.cls = {'green-text': type == 'positive', 'red-text': type == 'negative'};

            for (let className in elUf8V5.cls) {
                elUf8V5.classList.toggle(className, elUf8V5.cls[className]);
            }  
            text(`${ type }
                            (${ record.testCasesList[type] ? record.testCasesList[type].length : 0 })`);
let elLx15J = eo('button','naBff'+ii13sN+ii1hfh,null, eventListeners, {onclick:[function(e) {var $el = this;component.openTestCase(type, record, {}, null, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle`);
elLx15J.cls = {'btn-success': type == 'positive', 'btn-danger': type == 'negative'};

            for (let className in elLx15J.cls) {
                elLx15J.classList.toggle(className, elLx15J.cls[className]);
            }  
            let elsC08U = eo('i','7xuff'+ii13sN+ii1hfh,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elLx15J;
                        
            true && tippyTooltip($el, {arrow:true,content:`Add new ${ type } test case`});
        ;
                    }, 20);                
                ec('h4');
let cndrGRL = record.testCasesList[type];
this.setState('stHNeyn', cndrGRL);
if (cndrGRL) { 
let elM3MX_ = eo('div','eAcff'+ii13sN+ii1hfh,null,`class`,`table-responsive test-cases-list`);
let elBmrD7 = eo('table','Bhxff'+ii13sN+ii1hfh,null,`class`,`table table-bordered`);
let el3cwWD = eo('thead','EuDff'+ii13sN+ii1hfh);
let elNB6lO = eo('tr','h6eff'+ii13sN+ii1hfh);
let elU8yh0 = eo('th','Cubff'+ii13sN+ii1hfh);
text(`#`);
ec('th');
let eliCzcW = eo('th','727ff'+ii13sN+ii1hfh);
text(`Test Case`);
ec('th');
let elXFYng = eo('th','_R9ff'+ii13sN+ii1hfh);
text(`Priority`);
ec('th');
let eln42fc = eo('th','lTwff'+ii13sN+ii1hfh);
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elIw5Mu = eo('tbody','OCsff'+ii13sN+ii1hfh);
for (let testCaseIndex in record.testCasesList[type]) {
let testCase = record.testCasesList[type][testCaseIndex]; 
 let iiR6iz = 'BSH2k0Y' + testCaseIndex;
let el_rKj5 = eo('tr','sZOho9_q4ch6' + testCaseIndex+ii13sN+ii1hfh+iiR6iz);
let el5aeEc = eo('td','CyTff'+ii13sN+ii1hfh+iiR6iz);
text(testCase.id);
ec('td');
let elBt8_y = eo('td','jErff'+ii13sN+ii1hfh+iiR6iz);
let elHBy8x = eo('a','kMrff'+ii13sN+ii1hfh+iiR6iz,null,`href`,`${URLS.project(component.project, 'test-cases', testCase)}`);
text(testCase.title);
ec('a');
ec('td');
let el6yzDS = eo('td','Bw4ff'+ii13sN+ii1hfh+iiR6iz);
text(testCase.priority);
ec('td');
let elTsieE = eo('td','BBUff'+ii13sN+ii1hfh+iiR6iz);
let cnd6crB = testCase.canBeModified;
this.setState('st7lki8', cnd6crB);
if (cnd6crB) { 
let elvwMDf = eo('button','oolff'+ii13sN+ii1hfh+iiR6iz,null, eventListeners, {onclick:[function(e) {var $el = this;component.openTestCase(type, record, testCase, testCaseIndex, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-purple btn-sm btn-circle`);
let el_3cpj = eo('i','36Rff'+ii13sN+ii1hfh+iiR6iz,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elvwMDf;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Test case')}`});
        ;
                    }, 20);                
                let elaDbag = eo('button','hT4ff'+ii13sN+ii1hfh+iiR6iz,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemovingTestCase(testCase, testCaseIndex, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let el7ITun = eo('i','9vBff'+ii13sN+ii1hfh+iiR6iz,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elaDbag;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Test case')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
}ec('td');
}
ec('tr');
}}
ec('tbody');
ec('table');
}let cndzVrO = component.testCaseIsOpened;
this.setState('styfw3m', cndzVrO);
if (cndzVrO) { 
let elTTdSD = eo('form','wRhf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitTestCase($el)}]});

                if (! elTTdSD.formHandler) {
                    window.cfrmdlr = elTTdSD.formHandler = new FormHandler(elTTdSD, component);
                } else {
                    window.cfrmdlr = elTTdSD.formHandler;
                }
            let eln9yEy = ev('input','Np2f',null, eventListeners, {oninput:[function(e) {component.testCaseType = this.value;}]},`value`,`${fval(component.testCaseType)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
eln9yEy.value = fval(component.testCaseType);
let el3dzAC = ev('input','uwLf',null, eventListeners, {oninput:[function(e) {component.testSuit.id = this.value;}]},`value`,`${fval(component.testSuit.id)}`,`name`,`${(`testSuit`).toInputName()}`,`type`,`hidden`);
el3dzAC.value = fval(component.testSuit.id);
let el0TA93 = ev('input','WQQf',null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el0TA93.value = fval(component.project.id);
let elxlaiH = eo('h1','NEKf');
text(component.testCaseHeading);
ec('h1');
let el1HgZB = eo('div','amOf',null,`class`,`row`);
let elJpsk_ = eo('div','NsSf',null,`class`,`col-sm-6`);
ec('div');
let elDaXYR = eo('div','hT_f',null,`class`,`col-sm-6`);
ec('div');
ec('div');
let elfDapy = eo('div','ksvf',null,`class`,`row`);
let el1rjfY = eo('div','YuYf',null,`class`,`col-sm-12`);
let elM9ASb = eo('div','DEWf',null,`class`,`form-group`);
elM9ASb.cls = {'group-error': !!elTTdSD.formHandler.getError(`title`) };

            for (let className in elM9ASb.cls) {
                elM9ASb.classList.toggle(className, elM9ASb.cls[className]);
            }  
            let eleowNq = eo('label','XpIf',null,`for`,`title`);
text(trans('Test case title'));
let elLn1dh = eo('span','PRof',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elWPNY1 = ev('input','o7Sf',null, eventListeners, {oninput:[function(e) {component.testCase.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTTdSD.formHandler.addError(`title`, 'required', trans('validation.required'));}return elTTdSD.formHandler.removeError(`title`);}]},`value`,`${fval(component.testCase.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Test case title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elWPNY1.value = fval(component.testCase.title);
let cndrC43 = elTTdSD.formHandler.getError(`title`);
this.setState('stFqtRx', cndrC43);
if (cndrC43) { 
let elr7Jrf = eo('div','fywf',null,`class`,`alert alert-danger`);
text(elTTdSD.formHandler.getError(`title`));
ec('div');
}ec('div');
ec('div');
let elLObSE = eo('div',null,null,`class`,`col-sm-12`);
let elvboGl = eo('div',null,null,`class`,`form-group`);
elvboGl.cls = {'group-error': !!elTTdSD.formHandler.getError(`description`) };

            for (let className in elvboGl.cls) {
                elvboGl.classList.toggle(className, elvboGl.cls[className]);
            }  
            let elLZDeb = eo('label',null,null,`for`,`description`);
text(trans('Test case description'));
let el7H7VH = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eljmgwQ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTTdSD.formHandler.addError(`description`, 'required', trans('validation.required'));}return elTTdSD.formHandler.removeError(`description`);}]},`value`,`${fval(component.testCase.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Test case description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
eljmgwQ.value = fval(component.testCase.description);
ec('textarea');
let cndOpoZ = elTTdSD.formHandler.getError(`description`);
this.setState('st2_IWj', cndOpoZ);
if (cndOpoZ) { 
let elopNvn = eo('div','Rp9f',null,`class`,`alert alert-danger`);
text(elTTdSD.formHandler.getError(`description`));
ec('div');
}ec('div');
ec('div');
ec('div');
let el0ZYfr = eo('div',null,null,`class`,`row`);
let elWAX9S = eo('div',null,null,`class`,`col-sm-6`);
let elQ2zzs = eo('div',null,null,`class`,`form-group`);
elQ2zzs.cls = {'group-error': !!elTTdSD.formHandler.getError(`preconditions`) };

            for (let className in elQ2zzs.cls) {
                elQ2zzs.classList.toggle(className, elQ2zzs.cls[className]);
            }  
            let elp7qo0 = eo('label',null,null,`for`,`preconditions`);
text(trans('Test case Preconditions'));
ec('label');
let elvfMXx = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.preconditions = this.value;}]},`value`,`${fval(component.testCase.preconditions)}`,`name`,`${(`preconditions`).toInputName()}`,`placeholder`,`${trans(`Test case Preconditions`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`preconditions`);
elvfMXx.value = fval(component.testCase.preconditions);
ec('textarea');
ec('div');
ec('div');
let elzObQ6 = eo('div',null,null,`class`,`col-sm-6`);
let elSPr9u = eo('div',null,null,`class`,`form-group`);
elSPr9u.cls = {'group-error': !!elTTdSD.formHandler.getError(`notes`) };

            for (let className in elSPr9u.cls) {
                elSPr9u.classList.toggle(className, elSPr9u.cls[className]);
            }  
            let el9tV09 = eo('label',null,null,`for`,`notes`);
text(trans('Test case notes'));
ec('label');
let elVG2o5 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.notes = this.value;}]},`value`,`${fval(component.testCase.notes)}`,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Test case notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
elVG2o5.value = fval(component.testCase.notes);
ec('textarea');
ec('div');
ec('div');
ec('div');
let elNhNYJ = eo('div',null,null,`class`,`row`);
let elWcr7Y = eo('div',null,null,`class`,`col-sm-6`);
let cmp611R = this._lc('cNRANo5qA', {parent:component,parentTop:projectLayout,props:{multiple:true,lazyLoading:true,except:component.testCase.id,value:component.preConditionsTestCasesIds,request:component.requestTestCases.bind(component)},boolAttrs:{multiple:true},attrs:{name:`${(`preConditionsTestCases[]`).toInputName()}`,label:'Pre Conditions Test Cases'}});
ec('div');
let eln64G7 = eo('div',null,null,`class`,`col-sm-6`);
let cmp8oRI = this._lc('c2ezf3Fcq', {parent:component,parentTop:projectLayout,props:{items:PRIORITIES,value:component.testCase.priority},attrs:{name:`${(`priority`).toInputName()}`,label:'Priority',required:''}});
ec('div');
ec('div');
let elrWwxZ = eo('div',null,null,`class`,`row`);
let elKmjWD = eo('div',null,null,`class`,`col-sm-6`);
let eljzONx = eo('div',null,null,`class`,`form-group`);
eljzONx.cls = {'group-error': !!elTTdSD.formHandler.getError(`postConditions`) };

            for (let className in eljzONx.cls) {
                eljzONx.classList.toggle(className, eljzONx.cls[className]);
            }  
            let elxhRRI = eo('label',null,null,`for`,`postConditions`);
text(trans('Test case PostConditions'));
ec('label');
let elCqdyw = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.postConditions = this.value;}]},`value`,`${fval(component.testCase.postConditions)}`,`name`,`${(`postConditions`).toInputName()}`,`placeholder`,`${trans(`Test case PostConditions`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`postConditions`);
elCqdyw.value = fval(component.testCase.postConditions);
ec('textarea');
ec('div');
ec('div');
let elYvrt3 = eo('div',null,null,`class`,`col-sm-6`);
let elvSJcr = eo('div',null,null,`class`,`form-group`);
elvSJcr.cls = {'group-error': !!elTTdSD.formHandler.getError(`data`) };

            for (let className in elvSJcr.cls) {
                elvSJcr.classList.toggle(className, elvSJcr.cls[className]);
            }  
            let el070QT = eo('label',null,null,`for`,`data`);
text(trans('Test case data'));
let elSYqHF = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elj1zhY = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.data = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTTdSD.formHandler.addError(`data`, 'required', trans('validation.required'));}return elTTdSD.formHandler.removeError(`data`);}]},`value`,`${fval(component.testCase.data)}`,`name`,`${(`data`).toInputName()}`,`placeholder`,`${trans(`Test case data`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`data`);
elj1zhY.value = fval(component.testCase.data);
ec('textarea');
let cnd50iK = elTTdSD.formHandler.getError(`data`);
this.setState('stzi0di', cnd50iK);
if (cnd50iK) { 
let elngAVR = eo('div','8yEf',null,`class`,`alert alert-danger`);
text(elTTdSD.formHandler.getError(`data`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elUWjLy = eo('div',null,null,`class`,`row`);
let elCTxXx = eo('div',null,null,`class`,`col-sm-4`);
let elPuCGN = eo('div',null,null,`class`,`form-group`);
elPuCGN.cls = {'group-error': !!elTTdSD.formHandler.getError(`stepsToReproduce`) };

            for (let className in elPuCGN.cls) {
                elPuCGN.classList.toggle(className, elPuCGN.cls[className]);
            }  
            let elUPt6G = eo('label',null,null,`for`,`stepsToReproduce`);
text(trans('Steps To Reproduce'));
let elDs4Vq = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elV5YKJ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.stepsToReproduce = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTTdSD.formHandler.addError(`stepsToReproduce`, 'required', trans('validation.required'));}return elTTdSD.formHandler.removeError(`stepsToReproduce`);}]},`value`,`${fval(component.testCase.stepsToReproduce)}`,`name`,`${(`stepsToReproduce`).toInputName()}`,`placeholder`,`${trans(`Steps To Reproduce (Each step in one line without numbering the line)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`stepsToReproduce`);
elV5YKJ.value = fval(component.testCase.stepsToReproduce);
ec('textarea');
let cnd9ykT = elTTdSD.formHandler.getError(`stepsToReproduce`);
this.setState('st4QvoU', cnd9ykT);
if (cnd9ykT) { 
let elZDAul = eo('div','Kf1f',null,`class`,`alert alert-danger`);
text(elTTdSD.formHandler.getError(`stepsToReproduce`));
ec('div');
}ec('div');
ec('div');
let el9b_r6 = eo('div',null,null,`class`,`col-sm-4`);
let elDkND9 = eo('div',null,null,`class`,`form-group`);
elDkND9.cls = {'group-error': !!elTTdSD.formHandler.getError(`expectedBehavior`) };

            for (let className in elDkND9.cls) {
                elDkND9.classList.toggle(className, elDkND9.cls[className]);
            }  
            let ela46Us = eo('label',null,null,`for`,`expectedBehavior`);
text(trans('Expected Behavior'));
let elfbcma = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eldF21s = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.expectedBehavior = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTTdSD.formHandler.addError(`expectedBehavior`, 'required', trans('validation.required'));}return elTTdSD.formHandler.removeError(`expectedBehavior`);}]},`value`,`${fval(component.testCase.expectedBehavior)}`,`name`,`${(`expectedBehavior`).toInputName()}`,`placeholder`,`${trans(`Expected Behavior`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`expectedBehavior`);
eldF21s.value = fval(component.testCase.expectedBehavior);
ec('textarea');
let cnduyzN = elTTdSD.formHandler.getError(`expectedBehavior`);
this.setState('stXPTQJ', cnduyzN);
if (cnduyzN) { 
let elfBcCR = eo('div','cp_f',null,`class`,`alert alert-danger`);
text(elTTdSD.formHandler.getError(`expectedBehavior`));
ec('div');
}ec('div');
ec('div');
let eljRLde = eo('div',null,null,`class`,`col-sm-4`);
let eljiBTk = eo('div',null,null,`class`,`form-group`);
eljiBTk.cls = {'group-error': !!elTTdSD.formHandler.getError(`actualResult`) };

            for (let className in eljiBTk.cls) {
                eljiBTk.classList.toggle(className, eljiBTk.cls[className]);
            }  
            let elRjLk3 = eo('label',null,null,`for`,`actualResult`);
text(trans('Actual Result'));
ec('label');
let eltfaqY = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.actualResult = this.value;}]},`value`,`${fval(component.testCase.actualResult)}`,`name`,`${(`actualResult`).toInputName()}`,`placeholder`,`${trans(`Actual Result`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`actualResult`);
eltfaqY.value = fval(component.testCase.actualResult);
ec('textarea');
ec('div');
ec('div');
ec('div');
let elC62Ci = eo('div',null,null,`class`,`m-t-2`);
let cmprayp = this._lc('c0j3h03bh', {parent:component,parentTop:projectLayout,content:(flkFileInput) => {let elHk5fm = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let eldmtnS = eo('strong',null,null,`class`,`ml-1`);
text(`Upload Test Case Automation File`);
ec('strong');
},attrs:{name:`${(`attachment`).toInputName()}`,class:'btn btn-cyan bold',label:'Test Case Automation File'}});
ec('div');
let elDb2i0 = eo('div',null,null,`class`,`m-t-1 text-center`);
let el2KZqq = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.testCaseIsOpened = false}]}, boolAttrs, {disabled:component.isSending},`type`,`button`,`class`,`btn btn-danger bold`);
text(`Cancel`);
ec('button');
let el66TJw = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
}}});
let cnd_MMz = component.modalIsOpened;
this.setState('stXsdiZ', cnd_MMz);
if (cnd_MMz) { 
component.modal = this._lc('cu1myNYoy', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elG_La5 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elG_La5.formHandler) {
                    window.cfrmdlr = elG_La5.formHandler = new FormHandler(elG_La5, component);
                } else {
                    window.cfrmdlr = elG_La5.formHandler;
                }
            let elCOksl = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elCOksl.value = fval(component.project.id);
let elv9J5q = eo('div',null,null,`class`,`form-group`);
elv9J5q.cls = {'group-error': !!elG_La5.formHandler.getError(`name`) };

            for (let className in elv9J5q.cls) {
                elv9J5q.classList.toggle(className, elv9J5q.cls[className]);
            }  
            let elGvWSf = eo('label',null,null,`for`,`name`);
text(trans('Test suit Name'));
let ell7b8B = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elveCMv = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elG_La5.formHandler.addError(`name`, 'required', trans('validation.required'));}return elG_La5.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Test suit Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elveCMv.value = fval(component.record.name);
let cndkS7B = elG_La5.formHandler.getError(`name`);
this.setState('ste4nI7', cndkS7B);
if (cndkS7B) { 
let elvQq7S = eo('div','k_Kf',null,`class`,`alert alert-danger`);
text(elG_La5.formHandler.getError(`name`));
ec('div');
}ec('div');
let cmp68hv = this._lc('cmCO7STWJ', {parent:component,parentTop:flkModal,props:{required:true,value:Object.get(component.record.userStory, 'id', ''),lazyLoading:true,request:loadUserStories.bind(component)},attrs:{name:`${(`userStory`).toInputName()}`,label:'User Story'},state:'stXsdiZ'});
let elCoAMJ = eo('div',null,null,`class`,`m-t-1 text-center`);
let elhLx46 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stXsdiZ'});
}let cndScX3 = component.confirmDelete;
this.setState('stv1_x_', cndScX3);
if (cndScX3) { 
let cmp5cGV = this._lc('clpEoNj5a', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},attrs:{message:'Are you sure you want to delete this test suit? This will delete also all related test cases.'},state:'stv1_x_'});
}let cndfG_0 = component.confirmDeletingTestCase;
this.setState('stDHVZl', cndfG_0);
if (cndfG_0) { 
let cmp44fS = this._lc('cw4qhkRuK', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDeletingTestCase = null},onconfirm:function(e) {let $el = this; component.removeTestCase()}},state:'stDHVZl'});
}
                    this.isReadyToGo();
                }
        });