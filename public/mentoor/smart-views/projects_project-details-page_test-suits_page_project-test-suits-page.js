_Component({
                selector: 'project-test-suits-page',
                c: 'ProjectTestSuitsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','testCaseIsOpened','openModal','detectChanges','confirmRemoving','openTestCase','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove','confirmDeletingTestCase','removeTestCase','confirmRemovingTestCase','submitTestCase','testCaseType','testSuit','testCaseHeading','testCase','preConditionsTestCasesIds','requestTestCases'],
                children: {cVInmPiHx:'flk-dropdown-list',cPEl55Uo3:'flk-dropdown-list',cDWdEuxtQ:'flk-file-input',cDmKPUZFv:'project-layout',cLvVNGcvX:'flk-dropdown-list',cZ0_PiqmA:'flk-modal',cfMcTWBg9:'flk-alert',c26JwRdJg:'flk-alert'},
                render: function (component) {
                    let cmp7SFr = this._lc('cDmKPUZFv', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndO_Ml = ! component.testCaseIsOpened;
this.setState('stZCQeb', cndO_Ml);
if (cndO_Ml) { 
let el8I21X = eo('button','MIbf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elA91Sc = eo('i','R9cf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Test suit`);
ec('button');
let elY3XS1 = eo('h1','N0Mf',null,`class`,`m-y-1`);
text(`${ component.project.name } Test suits
        (${ component.project.testSuits.length })`);
ec('h1');
let elJauKT = eo('table','vERf',null,`class`,`table table-striped buttoned`);
let elKl9fs = eo('thead','dIpf');
let ele4F_X = eo('tr','Vf4f');
let el2HY1e = eo('th','w5Qf');
text(`#`);
ec('th');
let elzln1c = eo('th','Lf8f');
text(`Name`);
ec('th');
let eltpBVC = eo('th','IiLf');
text(`User Story`);
ec('th');
let elVxFu9 = eo('th','RGsf');
text(`Test Cases`);
ec('th');
let elt9mkP = eo('th','wnCf');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let el4w2Hs = eo('tbody','jief');
let cndyVUz = Is.empty(component.project.testSuits);
this.setState('st4efq6', cndyVUz);
if (cndyVUz) { 
let elqFHap = eo('tr','4B8f');
let elgAkn5 = eo('td','xUPf',null, 'style', {textAlign:'center'},`colspan`,`5`);
text(`No Test suits Yet`);
ec('td');
ec('tr');
}for (let index in component.project.testSuits) {
let record = component.project.testSuits[index]; 
 let iisr7S = record.id+ index;
let el811lV = eo('tr','r7kUlWhRkFOg' + index+iisr7S);
let elVhqFb = eo('td','9eVff'+iisr7S);
text(record.id);
ec('td');
let elLyaQ3 = eo('td','QN_ff'+iisr7S);
text(record.name);
ec('td');
let elVbAAM = eo('td','e4zff'+iisr7S,null,`title`,``);
text(record.userStory.title.readMoreChars(20));
ec('td');

                    setTimeout(function () {
                        let $el = elVbAAM;
                        
            true && tippyTooltip($el, {arrow:true,content:`${record.userStory.title}`});
        ;
                    }, 20);                
                let elslfcg = eo('td','r30ff'+iisr7S);
let elgWj5t = eo('a','maGff'+iisr7S,null, eventListeners, {onclick:[function(e) {var $el = this;record.viewTestCases = ! record.viewTestCases; component.detectChanges()}]},`href`,`#`);
let el8EHLZ = eo('span','0e9ff'+iisr7S);
text(record.testCases.length);
ec('span');
ec('a');
ec('td');
let elZHeQH = eo('td','Edyff'+iisr7S);
let cnd__Of = record.canBeModified;
this.setState('stAUR1B', cnd__Of);
if (cnd__Of) { 
let el9oVwm = eo('button','zFTff'+iisr7S,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elAQu_V = eo('i','4lAff'+iisr7S,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el9oVwm;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Test suit')}`});
        ;
                    }, 20);                
                let elxqOcv = eo('button','qw7ff'+iisr7S,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elY_KiO = eo('i','i0gff'+iisr7S,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elxqOcv;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Test suit')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
let cndySbo = record.viewTestCases;
this.setState('stjcP1i', cndySbo);
if (cndySbo) { 
let elKyNe_ = eo('tr','y4Lff'+iisr7S);
for (let i in ['positive', 'negative']) {
let type = ['positive', 'negative'][i]; 
 let ii23Mp = 'MHxMd1h' + i;
let elz5VVD = eo('td','KufRLS1hvLEb' + i+iisr7S+ii23Mp,null,`colspan`,`2`,`class`,`test-case-type v-top text-center ${ type }`);
let elwda1N = eo('h4','Yj0ff'+iisr7S+ii23Mp,null,`class`,`bold text-capitalize`);
elwda1N.cls = {'green-text': type == 'positive', 'red-text': type == 'negative'};

            for (let className in elwda1N.cls) {
                elwda1N.classList.toggle(className, elwda1N.cls[className]);
            }  
            text(`${ type }
                            (${ record.testCasesList[type] ? record.testCasesList[type].length : 0 })`);
let elhLX37 = eo('button','Oa1ff'+iisr7S+ii23Mp,null, eventListeners, {onclick:[function(e) {var $el = this;component.openTestCase(type, record, {}, null, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle`);
elhLX37.cls = {'btn-success': type == 'positive', 'btn-danger': type == 'negative'};

            for (let className in elhLX37.cls) {
                elhLX37.classList.toggle(className, elhLX37.cls[className]);
            }  
            let elzS7qw = eo('i','fpFff'+iisr7S+ii23Mp,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elhLX37;
                        
            true && tippyTooltip($el, {arrow:true,content:`Add new ${ type } test case`});
        ;
                    }, 20);                
                ec('h4');
let cndN7xu = record.testCasesList[type];
this.setState('stojSG0', cndN7xu);
if (cndN7xu) { 
let elrul8Y = eo('div','5pvff'+iisr7S+ii23Mp,null,`class`,`table-responsive test-cases-list`);
let el4EpdO = eo('table','73uff'+iisr7S+ii23Mp,null,`class`,`table table-bordered`);
let elfPNZo = eo('thead','0A1ff'+iisr7S+ii23Mp);
let elPk6TF = eo('tr','2HBff'+iisr7S+ii23Mp);
let eln43Bv = eo('th','4V_ff'+iisr7S+ii23Mp);
text(`#`);
ec('th');
let el0VL88 = eo('th','_Whff'+iisr7S+ii23Mp);
text(`Test Case`);
ec('th');
let ele4mxR = eo('th','l3Off'+iisr7S+ii23Mp);
text(`Priority`);
ec('th');
let elZZxzy = eo('th','jKgff'+iisr7S+ii23Mp);
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elMbEme = eo('tbody','SGMff'+iisr7S+ii23Mp);
for (let testCaseIndex in record.testCasesList[type]) {
let testCase = record.testCasesList[type][testCaseIndex]; 
 let iiEDC_ = '5Jy7J1W' + testCaseIndex;
let elUzX5W = eo('tr','4V_WK2sAErjD' + testCaseIndex+iisr7S+ii23Mp+iiEDC_);
let elmJFO6 = eo('td','NSlff'+iisr7S+ii23Mp+iiEDC_);
text(testCase.id);
ec('td');
let elvmUqe = eo('td','Klzff'+iisr7S+ii23Mp+iiEDC_);
let elUvQLV = eo('a','KlFff'+iisr7S+ii23Mp+iiEDC_,null,`href`,`${URLS.project(component.project, 'test-cases', testCase)}`);
text(testCase.title);
ec('a');
ec('td');
let elceuZ7 = eo('td','S3Sff'+iisr7S+ii23Mp+iiEDC_);
text(testCase.priority);
ec('td');
let eltwPpf = eo('td','hFaff'+iisr7S+ii23Mp+iiEDC_);
let cndr14t = testCase.canBeModified;
this.setState('stnZSOk', cndr14t);
if (cndr14t) { 
let elVHnqL = eo('button','CDDff'+iisr7S+ii23Mp+iiEDC_,null, eventListeners, {onclick:[function(e) {var $el = this;component.openTestCase(type, record, testCase, testCaseIndex, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-purple btn-sm btn-circle`);
let elmpzba = eo('i','kZqff'+iisr7S+ii23Mp+iiEDC_,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elVHnqL;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Test case')}`});
        ;
                    }, 20);                
                let elUr3Fp = eo('button','EzQff'+iisr7S+ii23Mp+iiEDC_,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemovingTestCase(testCase, testCaseIndex, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let el_Psbn = eo('i','zi8ff'+iisr7S+ii23Mp+iiEDC_,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elUr3Fp;
                        
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
}let cnd1Xxs = component.testCaseIsOpened;
this.setState('sttuhk3', cnd1Xxs);
if (cnd1Xxs) { 
let elhibp6 = eo('form','_v8f',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitTestCase($el)}]});

                if (! elhibp6.formHandler) {
                    window.cfrmdlr = elhibp6.formHandler = new FormHandler(elhibp6, component);
                } else {
                    window.cfrmdlr = elhibp6.formHandler;
                }
            let elXSd7v = ev('input','l8zf',null, eventListeners, {oninput:[function(e) {component.testCaseType = this.value;}]},`value`,`${fval(component.testCaseType)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elXSd7v.value = fval(component.testCaseType);
let elWRI9m = ev('input','3Tbf',null, eventListeners, {oninput:[function(e) {component.testSuit.id = this.value;}]},`value`,`${fval(component.testSuit.id)}`,`name`,`${(`testSuit`).toInputName()}`,`type`,`hidden`);
elWRI9m.value = fval(component.testSuit.id);
let elbeDNi = ev('input','ItAf',null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elbeDNi.value = fval(component.project.id);
let eleymGy = eo('h1','T4Qf');
text(component.testCaseHeading);
ec('h1');
let el5AJ09 = eo('div','diZf',null,`class`,`row`);
let elAjXNi = eo('div','v1Df',null,`class`,`col-sm-6`);
ec('div');
let el32WhE = eo('div','vb4f',null,`class`,`col-sm-6`);
ec('div');
ec('div');
let elOIHtr = eo('div','rqyf',null,`class`,`row`);
let el7Rhfy = eo('div','4Zhf',null,`class`,`col-sm-12`);
let elc1fxX = eo('div','Tvqf',null,`class`,`form-group`);
elc1fxX.cls = {'group-error': !!elhibp6.formHandler.getError(`title`) };

            for (let className in elc1fxX.cls) {
                elc1fxX.classList.toggle(className, elc1fxX.cls[className]);
            }  
            let elWA22X = eo('label','AV6f',null,`for`,`title`);
text(trans('Test case title'));
let elCUgKo = eo('span','ieBf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elb_BXy = ev('input','dW2f',null, eventListeners, {oninput:[function(e) {component.testCase.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elhibp6.formHandler.addError(`title`, 'required', trans('validation.required'));}return elhibp6.formHandler.removeError(`title`);}]},`value`,`${fval(component.testCase.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Test case title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elb_BXy.value = fval(component.testCase.title);
let cnd5HCw = elhibp6.formHandler.getError(`title`);
this.setState('stNw69P', cnd5HCw);
if (cnd5HCw) { 
let elr0D6P = eo('div','SBYf',null,`class`,`alert alert-danger`);
text(elhibp6.formHandler.getError(`title`));
ec('div');
}ec('div');
ec('div');
let eljkmJc = eo('div',null,null,`class`,`col-sm-12`);
let elNN8Fo = eo('div',null,null,`class`,`form-group`);
elNN8Fo.cls = {'group-error': !!elhibp6.formHandler.getError(`description`) };

            for (let className in elNN8Fo.cls) {
                elNN8Fo.classList.toggle(className, elNN8Fo.cls[className]);
            }  
            let elA0d3Z = eo('label',null,null,`for`,`description`);
text(trans('Test case description'));
let elmUGzI = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elU22r3 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elhibp6.formHandler.addError(`description`, 'required', trans('validation.required'));}return elhibp6.formHandler.removeError(`description`);}]},`value`,`${fval(component.testCase.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Test case description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elU22r3.value = fval(component.testCase.description);
ec('textarea');
let cndYm73 = elhibp6.formHandler.getError(`description`);
this.setState('styHX5M', cndYm73);
if (cndYm73) { 
let elibvRd = eo('div','UOnf',null,`class`,`alert alert-danger`);
text(elhibp6.formHandler.getError(`description`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elHuwhU = eo('div',null,null,`class`,`row`);
let elbkGAw = eo('div',null,null,`class`,`col-sm-6`);
let elHOmhg = eo('div',null,null,`class`,`form-group`);
elHOmhg.cls = {'group-error': !!elhibp6.formHandler.getError(`preconditions`) };

            for (let className in elHOmhg.cls) {
                elHOmhg.classList.toggle(className, elHOmhg.cls[className]);
            }  
            let elm3yWK = eo('label',null,null,`for`,`preconditions`);
text(trans('Test case Preconditions'));
ec('label');
let el54FN8 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.preconditions = this.value;}]},`value`,`${fval(component.testCase.preconditions)}`,`name`,`${(`preconditions`).toInputName()}`,`placeholder`,`${trans(`Test case Preconditions`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`preconditions`);
el54FN8.value = fval(component.testCase.preconditions);
ec('textarea');
ec('div');
ec('div');
let el11XkA = eo('div',null,null,`class`,`col-sm-6`);
let elbOnly = eo('div',null,null,`class`,`form-group`);
elbOnly.cls = {'group-error': !!elhibp6.formHandler.getError(`notes`) };

            for (let className in elbOnly.cls) {
                elbOnly.classList.toggle(className, elbOnly.cls[className]);
            }  
            let elCS_qO = eo('label',null,null,`for`,`notes`);
text(trans('Test case notes'));
ec('label');
let elPdcdj = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.notes = this.value;}]},`value`,`${fval(component.testCase.notes)}`,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Test case notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
elPdcdj.value = fval(component.testCase.notes);
ec('textarea');
ec('div');
ec('div');
ec('div');
let el4uJm6 = eo('div',null,null,`class`,`row`);
let elQw4UD = eo('div',null,null,`class`,`col-sm-6`);
let cmpzFwi = this._lc('cVInmPiHx', {parent:component,parentTop:projectLayout,props:{multiple:true,lazyLoading:true,except:component.testCase.id,value:component.preConditionsTestCasesIds,request:component.requestTestCases.bind(component)},boolAttrs:{multiple:true},attrs:{name:`${(`preConditionsTestCases[]`).toInputName()}`,label:'Pre Conditions Test Cases'}});
ec('div');
let elU2ZXX = eo('div',null,null,`class`,`col-sm-6`);
let cmpT_kt = this._lc('cPEl55Uo3', {parent:component,parentTop:projectLayout,props:{items:PRIORITIES,value:component.testCase.priority},attrs:{name:`${(`priority`).toInputName()}`,label:'Priority',required:''}});
ec('div');
ec('div');
let elF9rAs = eo('div',null,null,`class`,`row`);
let elYAcpE = eo('div',null,null,`class`,`col-sm-6`);
let eltLNG2 = eo('div',null,null,`class`,`form-group`);
eltLNG2.cls = {'group-error': !!elhibp6.formHandler.getError(`postConditions`) };

            for (let className in eltLNG2.cls) {
                eltLNG2.classList.toggle(className, eltLNG2.cls[className]);
            }  
            let el8QGPl = eo('label',null,null,`for`,`postConditions`);
text(trans('Test case PostConditions'));
ec('label');
let elTPzFZ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.postConditions = this.value;}]},`value`,`${fval(component.testCase.postConditions)}`,`name`,`${(`postConditions`).toInputName()}`,`placeholder`,`${trans(`Test case PostConditions`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`postConditions`);
elTPzFZ.value = fval(component.testCase.postConditions);
ec('textarea');
ec('div');
ec('div');
let elaFZMU = eo('div',null,null,`class`,`col-sm-6`);
let elv1uLR = eo('div',null,null,`class`,`form-group`);
elv1uLR.cls = {'group-error': !!elhibp6.formHandler.getError(`data`) };

            for (let className in elv1uLR.cls) {
                elv1uLR.classList.toggle(className, elv1uLR.cls[className]);
            }  
            let elCaVnN = eo('label',null,null,`for`,`data`);
text(trans('Test case data'));
let ellYaBt = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elqkJkN = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.data = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elhibp6.formHandler.addError(`data`, 'required', trans('validation.required'));}return elhibp6.formHandler.removeError(`data`);}]},`value`,`${fval(component.testCase.data)}`,`name`,`${(`data`).toInputName()}`,`placeholder`,`${trans(`Test case data`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`data`);
elqkJkN.value = fval(component.testCase.data);
ec('textarea');
let cndkJjz = elhibp6.formHandler.getError(`data`);
this.setState('stT6NgI', cndkJjz);
if (cndkJjz) { 
let elxVMvV = eo('div','qztf',null,`class`,`alert alert-danger`);
text(elhibp6.formHandler.getError(`data`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elXhKRx = eo('div',null,null,`class`,`row`);
let elmzyVz = eo('div',null,null,`class`,`col-sm-4`);
let elBG_Op = eo('div',null,null,`class`,`form-group`);
elBG_Op.cls = {'group-error': !!elhibp6.formHandler.getError(`stepsToReproduce`) };

            for (let className in elBG_Op.cls) {
                elBG_Op.classList.toggle(className, elBG_Op.cls[className]);
            }  
            let eldLxUD = eo('label',null,null,`for`,`stepsToReproduce`);
text(trans('Steps To Reproduce'));
let elahiBr = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elGPsOT = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.stepsToReproduce = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elhibp6.formHandler.addError(`stepsToReproduce`, 'required', trans('validation.required'));}return elhibp6.formHandler.removeError(`stepsToReproduce`);}]},`value`,`${fval(component.testCase.stepsToReproduce)}`,`name`,`${(`stepsToReproduce`).toInputName()}`,`placeholder`,`${trans(`Steps To Reproduce (Each step in one line without numbering the line)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`stepsToReproduce`);
elGPsOT.value = fval(component.testCase.stepsToReproduce);
ec('textarea');
let cnd7o9U = elhibp6.formHandler.getError(`stepsToReproduce`);
this.setState('stQ3XwA', cnd7o9U);
if (cnd7o9U) { 
let elypjmg = eo('div','LKzf',null,`class`,`alert alert-danger`);
text(elhibp6.formHandler.getError(`stepsToReproduce`));
ec('div');
}ec('div');
ec('div');
let elyCVzQ = eo('div',null,null,`class`,`col-sm-4`);
let el6ioqm = eo('div',null,null,`class`,`form-group`);
el6ioqm.cls = {'group-error': !!elhibp6.formHandler.getError(`expectedBehavior`) };

            for (let className in el6ioqm.cls) {
                el6ioqm.classList.toggle(className, el6ioqm.cls[className]);
            }  
            let elQdA4d = eo('label',null,null,`for`,`expectedBehavior`);
text(trans('Expected Behavior'));
let elNRYSR = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elMsE6f = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.expectedBehavior = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elhibp6.formHandler.addError(`expectedBehavior`, 'required', trans('validation.required'));}return elhibp6.formHandler.removeError(`expectedBehavior`);}]},`value`,`${fval(component.testCase.expectedBehavior)}`,`name`,`${(`expectedBehavior`).toInputName()}`,`placeholder`,`${trans(`Expected Behavior`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`expectedBehavior`);
elMsE6f.value = fval(component.testCase.expectedBehavior);
ec('textarea');
let cnd4Q9b = elhibp6.formHandler.getError(`expectedBehavior`);
this.setState('st7tWu9', cnd4Q9b);
if (cnd4Q9b) { 
let elxCLXw = eo('div','fXof',null,`class`,`alert alert-danger`);
text(elhibp6.formHandler.getError(`expectedBehavior`));
ec('div');
}ec('div');
ec('div');
let elOq69b = eo('div',null,null,`class`,`col-sm-4`);
let elgWK77 = eo('div',null,null,`class`,`form-group`);
elgWK77.cls = {'group-error': !!elhibp6.formHandler.getError(`actualResult`) };

            for (let className in elgWK77.cls) {
                elgWK77.classList.toggle(className, elgWK77.cls[className]);
            }  
            let elcolBu = eo('label',null,null,`for`,`actualResult`);
text(trans('Actual Result'));
ec('label');
let eleEL5M = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.actualResult = this.value;}]},`value`,`${fval(component.testCase.actualResult)}`,`name`,`${(`actualResult`).toInputName()}`,`placeholder`,`${trans(`Actual Result`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`actualResult`);
eleEL5M.value = fval(component.testCase.actualResult);
ec('textarea');
ec('div');
ec('div');
ec('div');
let elmP7R0 = eo('div',null,null,`class`,`m-t-2`);
let cmpOhs0 = this._lc('cDWdEuxtQ', {parent:component,parentTop:projectLayout,content:(flkFileInput) => {let elP3hqj = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elCEAHC = eo('strong',null,null,`class`,`ml-1`);
text(`Upload Test Case Automation File`);
ec('strong');
},attrs:{name:`${(`attachment`).toInputName()}`,class:'btn btn-cyan bold',label:'Test Case Automation File'}});
ec('div');
let elYOBf0 = eo('div',null,null,`class`,`m-t-1 text-center`);
let elzLFSQ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.testCaseIsOpened = false}]}, boolAttrs, {disabled:component.isSending},`type`,`button`,`class`,`btn btn-danger bold`);
text(`Cancel`);
ec('button');
let elx4MwV = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
}}});
let cndaFDw = component.modalIsOpened;
this.setState('steKmgV', cndaFDw);
if (cndaFDw) { 
component.modal = this._lc('cZ0_PiqmA', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elN7y9H = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elN7y9H.formHandler) {
                    window.cfrmdlr = elN7y9H.formHandler = new FormHandler(elN7y9H, component);
                } else {
                    window.cfrmdlr = elN7y9H.formHandler;
                }
            let elycMna = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elycMna.value = fval(component.project.id);
let elxRQVJ = eo('div',null,null,`class`,`form-group`);
elxRQVJ.cls = {'group-error': !!elN7y9H.formHandler.getError(`name`) };

            for (let className in elxRQVJ.cls) {
                elxRQVJ.classList.toggle(className, elxRQVJ.cls[className]);
            }  
            let el035_k = eo('label',null,null,`for`,`name`);
text(trans('Test suit Name'));
let el2l8J_ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elGqegL = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elN7y9H.formHandler.addError(`name`, 'required', trans('validation.required'));}return elN7y9H.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Test suit Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elGqegL.value = fval(component.record.name);
let cnd3yTA = elN7y9H.formHandler.getError(`name`);
this.setState('stqREhP', cnd3yTA);
if (cnd3yTA) { 
let elfYtTO = eo('div','Pl3f',null,`class`,`alert alert-danger`);
text(elN7y9H.formHandler.getError(`name`));
ec('div');
}ec('div');
let cmp8bPP = this._lc('cLvVNGcvX', {parent:component,parentTop:flkModal,props:{required:true,value:Object.get(component.record.userStory, 'id', ''),lazyLoading:true,request:loadUserStories.bind(component)},attrs:{name:`${(`userStory`).toInputName()}`,label:'User Story'},state:'steKmgV'});
let elDKmwi = eo('div',null,null,`class`,`m-t-1 text-center`);
let elDUL5K = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'steKmgV'});
}let cndlWjU = component.confirmDelete;
this.setState('st3ThnH', cndlWjU);
if (cndlWjU) { 
let cmpExXX = this._lc('cfMcTWBg9', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},attrs:{message:'Are you sure you want to delete this test suit? This will delete also all related test cases.'},state:'st3ThnH'});
}let cndUWEF = component.confirmDeletingTestCase;
this.setState('stK2A42', cndUWEF);
if (cndUWEF) { 
let cmpC0Lo = this._lc('c26JwRdJg', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDeletingTestCase = null},onconfirm:function(e) {let $el = this; component.removeTestCase()}},state:'stK2A42'});
}
                    this.isReadyToGo();
                }
        });