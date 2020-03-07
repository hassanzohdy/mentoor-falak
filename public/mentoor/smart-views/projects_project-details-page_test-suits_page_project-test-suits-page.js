_Component({
                selector: 'project-test-suits-page',
                c: 'ProjectTestSuitsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','testCaseIsOpened','openModal','detectChanges','confirmRemoving','openTestCase','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove','confirmDeletingTestCase','removeTestCase','confirmRemovingTestCase','submitTestCase','testCaseType','testSuit','testCaseHeading','testCase','preConditionsTestCasesIds','requestTestCases'],
                children: {c_0y_262T:'flk-dropdown-list',c17q2jurp:'flk-dropdown-list',cP1jd5ePq:'flk-file-input',cgChzCU1o:'project-layout',cMxpnIT3E:'flk-dropdown-list',cbb8rUWty:'flk-modal',cgmAyU7V_:'flk-alert',c3BLff_nE:'flk-alert'},
                render: function (component) {
                    let cmp0793 = this._lc('cgChzCU1o', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cnd0bFu = ! component.testCaseIsOpened;
this.setState('stjTc2w', cnd0bFu);
if (cnd0bFu) { 
let el7_qO7 = eo('button','DOOf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elG9QOX = eo('i','fr5f',null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Test suit`);
ec('button');
let elhmjtH = eo('h1','pXgf',null,`class`,`m-y-1`);
text(`${ component.project.name } Test suits
        (${ component.project.testSuits.length })`);
ec('h1');
let el4Nao0 = eo('table','5nOf',null,`class`,`table table-striped buttoned`);
let elMwmxa = eo('thead','IgRf');
let eliSYgq = eo('tr','Etff');
let elCgFx2 = eo('th','iyHf');
text(`#`);
ec('th');
let elkOeHu = eo('th','1jaf');
text(`Name`);
ec('th');
let eli_htq = eo('th','Skuf');
text(`User Story`);
ec('th');
let elHNVAy = eo('th','WpOf');
text(`Test Cases`);
ec('th');
let eldnJDr = eo('th','jIwf');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elhw3Xh = eo('tbody','flhf');
let cndgr8y = Is.empty(component.project.testSuits);
this.setState('stZXKmG', cndgr8y);
if (cndgr8y) { 
let elt86J4 = eo('tr','xf9f');
let ellr_bg = eo('td','uzGf',null, 'style', {textAlign:'center'},`colspan`,`5`);
text(`No Test suits Yet`);
ec('td');
ec('tr');
}for (let index in component.project.testSuits) {
let record = component.project.testSuits[index]; 
 let ii8RBV = record.id+ index;
let elp0uCx = eo('tr','ypG8xmk8Mfie' + index+ii8RBV);
let ellFxrh = eo('td','_Juff'+ii8RBV);
text(record.id);
ec('td');
let el_Ecif = eo('td','Udkff'+ii8RBV);
text(record.name);
ec('td');
let elCCBRP = eo('td','Yl8ff'+ii8RBV,null,`title`,``);
text(record.userStory.title.readMoreChars(20));
ec('td');

                    setTimeout(function () {
                        let $el = elCCBRP;
                        
            true && tippyTooltip($el, {arrow:true,content:`${record.userStory.title}`});
        ;
                    }, 20);                
                let elce9Cz = eo('td','egIff'+ii8RBV);
let elXuokN = eo('a','65Iff'+ii8RBV,null, eventListeners, {onclick:[function(e) {var $el = this;record.viewTestCases = ! record.viewTestCases; component.detectChanges()}]},`href`,`#`);
let elSmyyk = eo('span','cTzff'+ii8RBV);
text(record.testCases.length);
ec('span');
ec('a');
ec('td');
let el_ys0m = eo('td','Jb3ff'+ii8RBV);
let cndJfEr = record.canBeModified;
this.setState('st34ee4', cndJfEr);
if (cndJfEr) { 
let ellU6tv = eo('button','mngff'+ii8RBV,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elnUPjD = eo('i','robff'+ii8RBV,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = ellU6tv;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Test suit')}`});
        ;
                    }, 20);                
                let elhzHuR = eo('button','HqEff'+ii8RBV,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elG08qt = eo('i','kgnff'+ii8RBV,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elhzHuR;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Test suit')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
let cndrBcU = record.viewTestCases;
this.setState('stsFC5p', cndrBcU);
if (cndrBcU) { 
let elTWTKG = eo('tr','KWjff'+ii8RBV);
for (let i in ['positive', 'negative']) {
let type = ['positive', 'negative'][i]; 
 let ii1tzv = '8K39tjq' + i;
let elY8QVL = eo('td','gFIjteRnbytW' + i+ii8RBV+ii1tzv,null,`colspan`,`2`,`class`,`test-case-type v-top text-center ${ type }`);
let el2zXRQ = eo('h4','vveff'+ii8RBV+ii1tzv,null,`class`,`bold text-capitalize ${cls({'green-text': type == 'positive', 'red-text': type == 'negative'})}`);
text(`${ type }
                            (${ record.testCasesList[type] ? record.testCasesList[type].length : 0 })`);
let elUlbAg = eo('button','Kecff'+ii8RBV+ii1tzv,null, eventListeners, {onclick:[function(e) {var $el = this;component.openTestCase(type, record, {}, null, index)}]},`class`,`btn btn-sm btn-circle ${cls({'btn-success': type == 'positive', 'btn-danger': type == 'negative'})}`,`title`,``,`type`,`button`);
let elb_H7d = eo('i','e3lff'+ii8RBV+ii1tzv,null,`class`,`${fas('plus')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elUlbAg;
                        
            true && tippyTooltip($el, {arrow:true,content:`Add new ${ type } test case`});
        ;
                    }, 20);                
                ec('h4');
let cnd87HP = record.testCasesList[type];
this.setState('stD9rEl', cnd87HP);
if (cnd87HP) { 
let elfF2WE = eo('div','qvJff'+ii8RBV+ii1tzv,null,`class`,`table-responsive test-cases-list`);
let elbRA5J = eo('table','YhRff'+ii8RBV+ii1tzv,null,`class`,`table table-bordered`);
let elMwCAy = eo('thead','ycKff'+ii8RBV+ii1tzv);
let elcMieU = eo('tr','u6Yff'+ii8RBV+ii1tzv);
let elFZBBU = eo('th','W_Cff'+ii8RBV+ii1tzv);
text(`#`);
ec('th');
let elfWy6j = eo('th','NNVff'+ii8RBV+ii1tzv);
text(`Test Case`);
ec('th');
let ela3NE5 = eo('th','luTff'+ii8RBV+ii1tzv);
text(`Priority`);
ec('th');
let elLd0TW = eo('th','tdpff'+ii8RBV+ii1tzv);
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elMDs5I = eo('tbody','Lu0ff'+ii8RBV+ii1tzv);
for (let testCaseIndex in record.testCasesList[type]) {
let testCase = record.testCasesList[type][testCaseIndex]; 
 let ii0xZu = 'm3ZBano' + testCaseIndex;
let el5OZiA = eo('tr','1MJd6YgIHQvQ' + testCaseIndex+ii8RBV+ii1tzv+ii0xZu);
let elbBPSB = eo('td','OwCff'+ii8RBV+ii1tzv+ii0xZu);
text(testCase.id);
ec('td');
let el755r4 = eo('td','dgTff'+ii8RBV+ii1tzv+ii0xZu);
let elIPzy6 = eo('a','XGlff'+ii8RBV+ii1tzv+ii0xZu,null,`href`,`${URLS.project(component.project, 'test-cases', testCase)}`);
text(testCase.title);
ec('a');
ec('td');
let el5_9_E = eo('td','npQff'+ii8RBV+ii1tzv+ii0xZu);
text(testCase.priority);
ec('td');
let eliY5Pg = eo('td','bLGff'+ii8RBV+ii1tzv+ii0xZu);
let cndS50L = testCase.canBeModified;
this.setState('stuTATR', cndS50L);
if (cndS50L) { 
let elCj7DI = eo('button','WM7ff'+ii8RBV+ii1tzv+ii0xZu,null, eventListeners, {onclick:[function(e) {var $el = this;component.openTestCase(type, record, testCase, testCaseIndex, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-purple btn-sm btn-circle`);
let el1SX78 = eo('i','bUvff'+ii8RBV+ii1tzv+ii0xZu,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elCj7DI;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Test case')}`});
        ;
                    }, 20);                
                let eljeh6K = eo('button','P7yff'+ii8RBV+ii1tzv+ii0xZu,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemovingTestCase(testCase, testCaseIndex, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elCuroF = eo('i','q7Jff'+ii8RBV+ii1tzv+ii0xZu,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eljeh6K;
                        
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
}let cndgWfh = component.testCaseIsOpened;
this.setState('stEkd1G', cndgWfh);
if (cndgWfh) { 
let elePTsf = eo('form','_Pcf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitTestCase($el)}]});

                if (! elePTsf.formHandler) {
                    window.cfrmdlr = elePTsf.formHandler = new FormHandler(elePTsf, component);
                } else {
                    window.cfrmdlr = elePTsf.formHandler;
                }
            let elZ7MU2 = ev('input','TUDf',null, eventListeners, {oninput:[function(e) {component.testCaseType = this.value;}]},`value`,`${fval(component.testCaseType)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elZ7MU2.value = fval(component.testCaseType);
let elIwdyU = ev('input','7tWf',null, eventListeners, {oninput:[function(e) {component.testSuit.id = this.value;}]},`value`,`${fval(component.testSuit.id)}`,`name`,`${(`testSuit`).toInputName()}`,`type`,`hidden`);
elIwdyU.value = fval(component.testSuit.id);
let elwMUkF = ev('input','qQ3f',null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elwMUkF.value = fval(component.project.id);
let elrYLm8 = eo('h1','UWyf');
text(component.testCaseHeading);
ec('h1');
let elg5hID = eo('div','cgtf',null,`class`,`row`);
let el_X55f = eo('div','iFUf',null,`class`,`col-sm-6`);
ec('div');
let elYqw73 = eo('div','6Jnf',null,`class`,`col-sm-6`);
ec('div');
ec('div');
let elT4Pcb = eo('div','qa_f',null,`class`,`row`);
let elqcGnt = eo('div','W5kf',null,`class`,`col-sm-12`);
let elOveOb = eo('div','fNif',null,`class`,`form-group ${cls({'group-error': !!elePTsf.formHandler.getError(`title`) })}`);
let elJfXDc = eo('label','j2rf',null,`for`,`title`);
text(trans('Test case title'));
let elV9rI7 = eo('span','hY0f',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elxjC1i = ev('input','z0Gf',null, eventListeners, {oninput:[function(e) {component.testCase.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elePTsf.formHandler.addError(`title`, 'required', trans('validation.required'));}return elePTsf.formHandler.removeError(`title`);}]},`value`,`${fval(component.testCase.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Test case title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elxjC1i.value = fval(component.testCase.title);
let cnd1YZF = elePTsf.formHandler.getError(`title`);
this.setState('stbYa8l', cnd1YZF);
if (cnd1YZF) { 
let el193A_ = eo('div','jctf',null,`class`,`alert alert-danger`);
text(elePTsf.formHandler.getError(`title`));
ec('div');
}ec('div');
ec('div');
let elOQbRl = eo('div',null,null,`class`,`col-sm-12`);
let elIsnDL = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elePTsf.formHandler.getError(`description`) })}`);
let elUwZID = eo('label',null,null,`for`,`description`);
text(trans('Test case description'));
let elTDHwG = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el9ZC1Q = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elePTsf.formHandler.addError(`description`, 'required', trans('validation.required'));}return elePTsf.formHandler.removeError(`description`);}]},`value`,`${fval(component.testCase.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Test case description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
el9ZC1Q.value = fval(component.testCase.description);
ec('textarea');
let cndo7bm = elePTsf.formHandler.getError(`description`);
this.setState('stFxunR', cndo7bm);
if (cndo7bm) { 
let elY1ZXM = eo('div','rhEf',null,`class`,`alert alert-danger`);
text(elePTsf.formHandler.getError(`description`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elfCTAD = eo('div',null,null,`class`,`row`);
let elZ3LC2 = eo('div',null,null,`class`,`col-sm-6`);
let elvOdSm = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elePTsf.formHandler.getError(`preconditions`) })}`);
let elAOBfv = eo('label',null,null,`for`,`preconditions`);
text(trans('Test case Preconditions'));
ec('label');
let elccJQo = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.preconditions = this.value;}]},`value`,`${fval(component.testCase.preconditions)}`,`name`,`${(`preconditions`).toInputName()}`,`placeholder`,`${trans(`Test case Preconditions`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`preconditions`);
elccJQo.value = fval(component.testCase.preconditions);
ec('textarea');
ec('div');
ec('div');
let elU7G4D = eo('div',null,null,`class`,`col-sm-6`);
let elHPlyE = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elePTsf.formHandler.getError(`notes`) })}`);
let elcYzyI = eo('label',null,null,`for`,`notes`);
text(trans('Test case notes'));
ec('label');
let el1VM2A = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.notes = this.value;}]},`value`,`${fval(component.testCase.notes)}`,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Test case notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
el1VM2A.value = fval(component.testCase.notes);
ec('textarea');
ec('div');
ec('div');
ec('div');
let el75seM = eo('div',null,null,`class`,`row`);
let elXtYhx = eo('div',null,null,`class`,`col-sm-6`);
let cmplkcI = this._lc('c_0y_262T', {parent:component,parentTop:projectLayout,props:{multiple:true,lazyLoading:true,except:component.testCase.id,value:component.preConditionsTestCasesIds,request:component.requestTestCases.bind(component)},boolAttrs:{multiple:true},attrs:{name:`${(`preConditionsTestCases[]`).toInputName()}`,label:'Pre Conditions Test Cases'}});
ec('div');
let eloA9Lp = eo('div',null,null,`class`,`col-sm-6`);
let cmpb9Vk = this._lc('c17q2jurp', {parent:component,parentTop:projectLayout,props:{items:PRIORITIES,value:component.testCase.priority},attrs:{name:`${(`priority`).toInputName()}`,label:'Priority',required:''}});
ec('div');
ec('div');
let elmL7mL = eo('div',null,null,`class`,`row`);
let el6XkRg = eo('div',null,null,`class`,`col-sm-6`);
let el5mcYW = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elePTsf.formHandler.getError(`postConditions`) })}`);
let elU8tMU = eo('label',null,null,`for`,`postConditions`);
text(trans('Test case PostConditions'));
ec('label');
let elan6dH = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.postConditions = this.value;}]},`value`,`${fval(component.testCase.postConditions)}`,`name`,`${(`postConditions`).toInputName()}`,`placeholder`,`${trans(`Test case PostConditions`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`postConditions`);
elan6dH.value = fval(component.testCase.postConditions);
ec('textarea');
ec('div');
ec('div');
let elcfS6n = eo('div',null,null,`class`,`col-sm-6`);
let elDCn9M = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elePTsf.formHandler.getError(`data`) })}`);
let elMN1v8 = eo('label',null,null,`for`,`data`);
text(trans('Test case data'));
let el2PPkF = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elIpC8B = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.data = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elePTsf.formHandler.addError(`data`, 'required', trans('validation.required'));}return elePTsf.formHandler.removeError(`data`);}]},`value`,`${fval(component.testCase.data)}`,`name`,`${(`data`).toInputName()}`,`placeholder`,`${trans(`Test case data`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`data`);
elIpC8B.value = fval(component.testCase.data);
ec('textarea');
let cndHn01 = elePTsf.formHandler.getError(`data`);
this.setState('stmg8Uh', cndHn01);
if (cndHn01) { 
let elIyaJk = eo('div','2kyf',null,`class`,`alert alert-danger`);
text(elePTsf.formHandler.getError(`data`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elFP7nO = eo('div',null,null,`class`,`row`);
let elA4med = eo('div',null,null,`class`,`col-sm-4`);
let elAjJdO = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elePTsf.formHandler.getError(`stepsToReproduce`) })}`);
let elgN_2g = eo('label',null,null,`for`,`stepsToReproduce`);
text(trans('Steps To Reproduce'));
let elEarvu = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elBgTQb = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.stepsToReproduce = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elePTsf.formHandler.addError(`stepsToReproduce`, 'required', trans('validation.required'));}return elePTsf.formHandler.removeError(`stepsToReproduce`);}]},`value`,`${fval(component.testCase.stepsToReproduce)}`,`name`,`${(`stepsToReproduce`).toInputName()}`,`placeholder`,`${trans(`Steps To Reproduce (Each step in one line without numbering the line)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`stepsToReproduce`);
elBgTQb.value = fval(component.testCase.stepsToReproduce);
ec('textarea');
let cndGyjM = elePTsf.formHandler.getError(`stepsToReproduce`);
this.setState('stZopUj', cndGyjM);
if (cndGyjM) { 
let elMmNZD = eo('div','MELf',null,`class`,`alert alert-danger`);
text(elePTsf.formHandler.getError(`stepsToReproduce`));
ec('div');
}ec('div');
ec('div');
let elIrZO2 = eo('div',null,null,`class`,`col-sm-4`);
let elb7sKb = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elePTsf.formHandler.getError(`expectedBehavior`) })}`);
let elTrRlw = eo('label',null,null,`for`,`expectedBehavior`);
text(trans('Expected Behavior'));
let elQuwYZ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elddt9G = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.expectedBehavior = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elePTsf.formHandler.addError(`expectedBehavior`, 'required', trans('validation.required'));}return elePTsf.formHandler.removeError(`expectedBehavior`);}]},`value`,`${fval(component.testCase.expectedBehavior)}`,`name`,`${(`expectedBehavior`).toInputName()}`,`placeholder`,`${trans(`Expected Behavior`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`expectedBehavior`);
elddt9G.value = fval(component.testCase.expectedBehavior);
ec('textarea');
let cndwkWb = elePTsf.formHandler.getError(`expectedBehavior`);
this.setState('stf4K2R', cndwkWb);
if (cndwkWb) { 
let elM86qy = eo('div','uV8f',null,`class`,`alert alert-danger`);
text(elePTsf.formHandler.getError(`expectedBehavior`));
ec('div');
}ec('div');
ec('div');
let elu3x0h = eo('div',null,null,`class`,`col-sm-4`);
let el2Dihz = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elePTsf.formHandler.getError(`actualResult`) })}`);
let elizZqc = eo('label',null,null,`for`,`actualResult`);
text(trans('Actual Result'));
ec('label');
let elEICat = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.actualResult = this.value;}]},`value`,`${fval(component.testCase.actualResult)}`,`name`,`${(`actualResult`).toInputName()}`,`placeholder`,`${trans(`Actual Result`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`actualResult`);
elEICat.value = fval(component.testCase.actualResult);
ec('textarea');
ec('div');
ec('div');
ec('div');
let elQRmky = eo('div',null,null,`class`,`m-t-2`);
let cmpqhsa = this._lc('cP1jd5ePq', {parent:component,parentTop:projectLayout,content:(flkFileInput) => {let elOnrtX = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let el_p3ZP = eo('strong',null,null,`class`,`ml-1`);
text(`Upload Test Case Automation File`);
ec('strong');
},attrs:{name:`${(`attachment`).toInputName()}`,class:'btn btn-cyan bold',label:'Test Case Automation File'}});
ec('div');
let elpDbZM = eo('div',null,null,`class`,`m-t-1 text-center`);
let elxw3zz = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.testCaseIsOpened = false}]}, boolAttrs, {disabled:component.isSending},`type`,`button`,`class`,`btn btn-danger bold`);
text(`Cancel`);
ec('button');
let elCaemg = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
}}});
let cnd4TKt = component.modalIsOpened;
this.setState('st5bMFE', cnd4TKt);
if (cnd4TKt) { 
component.modal = this._lc('cbb8rUWty', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let eldjM6U = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! eldjM6U.formHandler) {
                    window.cfrmdlr = eldjM6U.formHandler = new FormHandler(eldjM6U, component);
                } else {
                    window.cfrmdlr = eldjM6U.formHandler;
                }
            let ely566r = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
ely566r.value = fval(component.project.id);
let elxcNhN = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!eldjM6U.formHandler.getError(`name`) })}`);
let elaIuH1 = eo('label',null,null,`for`,`name`);
text(trans('Test suit Name'));
let elQEmHd = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eliVZp4 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eldjM6U.formHandler.addError(`name`, 'required', trans('validation.required'));}return eldjM6U.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Test suit Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
eliVZp4.value = fval(component.record.name);
let cndzlKM = eldjM6U.formHandler.getError(`name`);
this.setState('stm0XaM', cndzlKM);
if (cndzlKM) { 
let elosrm4 = eo('div','6Trf',null,`class`,`alert alert-danger`);
text(eldjM6U.formHandler.getError(`name`));
ec('div');
}ec('div');
let cmp83av = this._lc('cMxpnIT3E', {parent:component,parentTop:flkModal,props:{required:true,value:Object.get(component.record.userStory, 'id', ''),lazyLoading:true,request:loadUserStories.bind(component)},attrs:{name:`${(`userStory`).toInputName()}`,label:'User Story'},state:'st5bMFE'});
let eldTRsL = eo('div',null,null,`class`,`m-t-1 text-center`);
let eliTBBW = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'st5bMFE'});
}let cndPcM2 = component.confirmDelete;
this.setState('std0Nza', cndPcM2);
if (cndPcM2) { 
let cmpwh0F = this._lc('cgmAyU7V_', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},attrs:{message:'Are you sure you want to delete this test suit? This will delete also all related test cases.'},state:'std0Nza'});
}let cndsYRt = component.confirmDeletingTestCase;
this.setState('stnfphd', cndsYRt);
if (cndsYRt) { 
let cmpT4gy = this._lc('c3BLff_nE', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDeletingTestCase = null},onconfirm:function(e) {let $el = this; component.removeTestCase()}},state:'stnfphd'});
}
                    this.isReadyToGo();
                }
        });