_Component({
                selector: 'project-test-suits-page',
                c: 'ProjectTestSuitsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','testCaseIsOpened','openModal','detectChanges','confirmRemoving','openTestCase','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove','confirmDeletingTestCase','removeTestCase','confirmRemovingTestCase','submitTestCase','testCaseType','testSuit','testCaseHeading','testCase','preConditionsTestCasesIds','requestTestCases'],
                children: {cjcoHdR61:'flk-dropdown-list',cZBkucgth:'flk-dropdown-list',cPqwx78FZ:'flk-file-input',c9giNtVn5:'project-layout',cjC6t7k4T:'flk-dropdown-list',cYGB1CVPI:'flk-modal',crsMEDWTv:'flk-alert',cINO8yb3G:'flk-alert'},
                render: function (component) {
                    let cmpbAfA = this._lc('c9giNtVn5', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndVGoY = ! component.testCaseIsOpened;
this.setState('stdTZtV', cndVGoY);
if (cndVGoY) { 
let elY3jWi = eo('button','ashf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let eliPYwV = eo('i','m4Nf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Test suit`);
ec('button');
let elZVDml = eo('h1','quSf',null,`class`,`m-y-1`);
text(`${ component.project.name } Test suits
        (${ component.project.testSuits.length })`);
ec('h1');
let elyta4Y = eo('table','IA2f',null,`class`,`table table-striped buttoned`);
let el2k8hm = eo('thead','Z2Yf');
let elngYva = eo('tr','Eixf');
let elDrlBH = eo('th','Hfmf');
text(`#`);
ec('th');
let elkVP6U = eo('th','inCf');
text(`Name`);
ec('th');
let ell1qjj = eo('th','NN2f');
text(`User Story`);
ec('th');
let elSPmcZ = eo('th','629f');
text(`Test Cases`);
ec('th');
let elYU9M3 = eo('th','04yf');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let eldLSKA = eo('tbody','llyf');
let cndMFfg = Is.empty(component.project.testSuits);
this.setState('st0wrh6', cndMFfg);
if (cndMFfg) { 
let eloUISQ = eo('tr','Eslf');
let eljnMs_ = eo('td','QRwf',null, 'style', {textAlign:'center'},`colspan`,`5`);
text(`No Test suits Yet`);
ec('td');
ec('tr');
}for (let index in component.project.testSuits) {
let record = component.project.testSuits[index]; 
 let ii5f_9 = record.id+ index;
let el5wpqV = eo('tr','L1oqXoGR0_5R' + index+ii5f_9);
let el0U_T7 = eo('td','Hpuff'+ii5f_9);
text(record.id);
ec('td');
let el2sU9V = eo('td','xxnff'+ii5f_9);
text(record.name);
ec('td');
let el9pz_8 = eo('td','mk2ff'+ii5f_9,null,`title`,``);
text(record.userStory.title.readMoreChars(20));
ec('td');

                    setTimeout(function () {
                        let $el = el9pz_8;
                        
            true && tippyTooltip($el, {arrow:true,content:`${record.userStory.title}`});
        ;
                    }, 20);                
                let elf6Cbw = eo('td','9Boff'+ii5f_9);
let elAERzF = eo('a','D8mff'+ii5f_9,null, eventListeners, {onclick:[function(e) {var $el = this;record.viewTestCases = ! record.viewTestCases; component.detectChanges()}]},`href`,`#`);
let elB7Yp_ = eo('span','l2Zff'+ii5f_9);
text(record.testCases.length);
ec('span');
ec('a');
ec('td');
let el0u2gh = eo('td','Hgtff'+ii5f_9);
let cndob95 = record.canBeModified;
this.setState('stOxn5N', cndob95);
if (cndob95) { 
let elUtppl = eo('button','MVFff'+ii5f_9,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let el__S6s = eo('i','LWGff'+ii5f_9,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elUtppl;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Test suit')}`});
        ;
                    }, 20);                
                let elXTvh9 = eo('button','q7eff'+ii5f_9,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elqsaSX = eo('i','BSEff'+ii5f_9,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elXTvh9;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Test suit')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
let cndQAfa = record.viewTestCases;
this.setState('stuPOp_', cndQAfa);
if (cndQAfa) { 
let el1mWp7 = eo('tr','5ilff'+ii5f_9);
for (let i in ['positive', 'negative']) {
let type = ['positive', 'negative'][i]; 
 let iii3Nr = 'yes5FpZ' + i;
let eltcNoV = eo('td','gwNt16Mrrh8E' + i+ii5f_9+iii3Nr,null,`colspan`,`2`,`class`,`test-case-type v-top text-center ${ type }`);
let el2cYg2 = eo('h4','Lw2ff'+ii5f_9+iii3Nr,null,`class`,`bold text-capitalize`);
el2cYg2.cls = {'green-text': type == 'positive', 'red-text': type == 'negative'};

            for (let className in el2cYg2.cls) {
                el2cYg2.classList.toggle(className, el2cYg2.cls[className]);
            }  
            text(`${ type }
                            (${ record.testCasesList[type] ? record.testCasesList[type].length : 0 })`);
let elZfi26 = eo('button','PQ0ff'+ii5f_9+iii3Nr,null, eventListeners, {onclick:[function(e) {var $el = this;component.openTestCase(type, record, {}, null, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle`);
elZfi26.cls = {'btn-success': type == 'positive', 'btn-danger': type == 'negative'};

            for (let className in elZfi26.cls) {
                elZfi26.classList.toggle(className, elZfi26.cls[className]);
            }  
            let elLSq8U = eo('i','hVgff'+ii5f_9+iii3Nr,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elZfi26;
                        
            true && tippyTooltip($el, {arrow:true,content:`Add new ${ type } test case`});
        ;
                    }, 20);                
                ec('h4');
let cndoKe8 = record.testCasesList[type];
this.setState('stcmquN', cndoKe8);
if (cndoKe8) { 
let elLpT1o = eo('div','cYOff'+ii5f_9+iii3Nr,null,`class`,`table-responsive test-cases-list`);
let elpQB8I = eo('table','Z3Wff'+ii5f_9+iii3Nr,null,`class`,`table table-bordered`);
let elMOhlV = eo('thead','_clff'+ii5f_9+iii3Nr);
let elbhKCX = eo('tr','N8zff'+ii5f_9+iii3Nr);
let elYXhoH = eo('th','3Sjff'+ii5f_9+iii3Nr);
text(`#`);
ec('th');
let elHGNg7 = eo('th','yagff'+ii5f_9+iii3Nr);
text(`Test Case`);
ec('th');
let elSu1Zr = eo('th','ANWff'+ii5f_9+iii3Nr);
text(`Priority`);
ec('th');
let elrfBL8 = eo('th','Jb3ff'+ii5f_9+iii3Nr);
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elYyNGv = eo('tbody','QRYff'+ii5f_9+iii3Nr);
for (let testCaseIndex in record.testCasesList[type]) {
let testCase = record.testCasesList[type][testCaseIndex]; 
 let iiHZKC = 'Vtm91e2' + testCaseIndex;
let elpwZSh = eo('tr','YNmWzHPBBMxJ' + testCaseIndex+ii5f_9+iii3Nr+iiHZKC);
let el3BQSR = eo('td','eevff'+ii5f_9+iii3Nr+iiHZKC);
text(testCase.id);
ec('td');
let el9KO5b = eo('td','SbNff'+ii5f_9+iii3Nr+iiHZKC);
let elDYKtG = eo('a','hisff'+ii5f_9+iii3Nr+iiHZKC,null,`href`,`${URLS.project(component.project, 'test-cases', testCase)}`);
text(testCase.title);
ec('a');
ec('td');
let el0Uwx4 = eo('td','Xheff'+ii5f_9+iii3Nr+iiHZKC);
text(testCase.priority);
ec('td');
let el0ZTc1 = eo('td','CdQff'+ii5f_9+iii3Nr+iiHZKC);
let cndF0JQ = testCase.canBeModified;
this.setState('sti4xPf', cndF0JQ);
if (cndF0JQ) { 
let elSypv2 = eo('button','akMff'+ii5f_9+iii3Nr+iiHZKC,null, eventListeners, {onclick:[function(e) {var $el = this;component.openTestCase(type, record, testCase, testCaseIndex, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-purple btn-sm btn-circle`);
let elB6RJz = eo('i','ECEff'+ii5f_9+iii3Nr+iiHZKC,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elSypv2;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Test case')}`});
        ;
                    }, 20);                
                let elvvQ6E = eo('button','EClff'+ii5f_9+iii3Nr+iiHZKC,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemovingTestCase(testCase, testCaseIndex, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elhjut9 = eo('i','Zl0ff'+ii5f_9+iii3Nr+iiHZKC,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elvvQ6E;
                        
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
}let cndDM8G = component.testCaseIsOpened;
this.setState('stX5KQg', cndDM8G);
if (cndDM8G) { 
let elJJAfz = eo('form','p2jf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitTestCase($el)}]});

                if (! elJJAfz.formHandler) {
                    window.cfrmdlr = elJJAfz.formHandler = new FormHandler(elJJAfz, component);
                } else {
                    window.cfrmdlr = elJJAfz.formHandler;
                }
            let elMbLup = ev('input','ZaMf',null, eventListeners, {oninput:[function(e) {component.testCaseType = this.value;}]},`value`,`${fval(component.testCaseType)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elMbLup.value = fval(component.testCaseType);
let el636k7 = ev('input','Vabf',null, eventListeners, {oninput:[function(e) {component.testSuit.id = this.value;}]},`value`,`${fval(component.testSuit.id)}`,`name`,`${(`testSuit`).toInputName()}`,`type`,`hidden`);
el636k7.value = fval(component.testSuit.id);
let elRqlNW = ev('input','JV4f',null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elRqlNW.value = fval(component.project.id);
let elKU41N = eo('h1','LDxf');
text(component.testCaseHeading);
ec('h1');
let el8JQl3 = eo('div','UXIf',null,`class`,`row`);
let elrUC3y = eo('div','v0if',null,`class`,`col-sm-6`);
ec('div');
let elTHJfv = eo('div','BRvf',null,`class`,`col-sm-6`);
ec('div');
ec('div');
let elE5Uzj = eo('div','2WZf',null,`class`,`row`);
let elyIb3P = eo('div','X4rf',null,`class`,`col-sm-12`);
let elE9erH = eo('div','MdOf',null,`class`,`form-group`);
elE9erH.cls = {'group-error': !!elJJAfz.formHandler.getError(`title`) };

            for (let className in elE9erH.cls) {
                elE9erH.classList.toggle(className, elE9erH.cls[className]);
            }  
            let eldb18D = eo('label','03cf',null,`for`,`title`);
text(trans('Test case title'));
let eluvOgA = eo('span','CYnf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elxUcWJ = ev('input','Mquf',null, eventListeners, {oninput:[function(e) {component.testCase.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elJJAfz.formHandler.addError(`title`, 'required', trans('validation.required'));}return elJJAfz.formHandler.removeError(`title`);}]},`value`,`${fval(component.testCase.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Test case title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elxUcWJ.value = fval(component.testCase.title);
let cndgyAh = elJJAfz.formHandler.getError(`title`);
this.setState('stwa5o4', cndgyAh);
if (cndgyAh) { 
let elRblh9 = eo('div','buTf',null,`class`,`alert alert-danger`);
text(elJJAfz.formHandler.getError(`title`));
ec('div');
}ec('div');
ec('div');
let eleS7eH = eo('div',null,null,`class`,`col-sm-12`);
let elYJdwQ = eo('div',null,null,`class`,`form-group`);
elYJdwQ.cls = {'group-error': !!elJJAfz.formHandler.getError(`description`) };

            for (let className in elYJdwQ.cls) {
                elYJdwQ.classList.toggle(className, elYJdwQ.cls[className]);
            }  
            let elKoQLK = eo('label',null,null,`for`,`description`);
text(trans('Test case description'));
let elLcX0u = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elaGnPx = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elJJAfz.formHandler.addError(`description`, 'required', trans('validation.required'));}return elJJAfz.formHandler.removeError(`description`);}]},`value`,`${fval(component.testCase.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Test case description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elaGnPx.value = fval(component.testCase.description);
ec('textarea');
let cndUNJ0 = elJJAfz.formHandler.getError(`description`);
this.setState('sttzxfM', cndUNJ0);
if (cndUNJ0) { 
let el2pvE1 = eo('div','vYlf',null,`class`,`alert alert-danger`);
text(elJJAfz.formHandler.getError(`description`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elQUwRj = eo('div',null,null,`class`,`row`);
let elV6S09 = eo('div',null,null,`class`,`col-sm-6`);
let elDDPDM = eo('div',null,null,`class`,`form-group`);
elDDPDM.cls = {'group-error': !!elJJAfz.formHandler.getError(`preconditions`) };

            for (let className in elDDPDM.cls) {
                elDDPDM.classList.toggle(className, elDDPDM.cls[className]);
            }  
            let elhwaoE = eo('label',null,null,`for`,`preconditions`);
text(trans('Test case Preconditions'));
ec('label');
let elppMCP = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.preconditions = this.value;}]},`value`,`${fval(component.testCase.preconditions)}`,`name`,`${(`preconditions`).toInputName()}`,`placeholder`,`${trans(`Test case Preconditions`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`preconditions`);
elppMCP.value = fval(component.testCase.preconditions);
ec('textarea');
ec('div');
ec('div');
let el6yn_w = eo('div',null,null,`class`,`col-sm-6`);
let elmMNKF = eo('div',null,null,`class`,`form-group`);
elmMNKF.cls = {'group-error': !!elJJAfz.formHandler.getError(`notes`) };

            for (let className in elmMNKF.cls) {
                elmMNKF.classList.toggle(className, elmMNKF.cls[className]);
            }  
            let el0M59d = eo('label',null,null,`for`,`notes`);
text(trans('Test case notes'));
ec('label');
let elnAhNC = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.notes = this.value;}]},`value`,`${fval(component.testCase.notes)}`,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Test case notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
elnAhNC.value = fval(component.testCase.notes);
ec('textarea');
ec('div');
ec('div');
ec('div');
let elYdJIn = eo('div',null,null,`class`,`row`);
let elHPgOB = eo('div',null,null,`class`,`col-sm-6`);
let cmpyrCq = this._lc('cjcoHdR61', {parent:component,parentTop:projectLayout,props:{multiple:true,lazyLoading:true,except:component.testCase.id,value:component.preConditionsTestCasesIds,request:component.requestTestCases.bind(component)},boolAttrs:{multiple:true},attrs:{name:`${(`preConditionsTestCases[]`).toInputName()}`,label:'Pre Conditions Test Cases'}});
ec('div');
let elKDb0h = eo('div',null,null,`class`,`col-sm-6`);
let cmprrE_ = this._lc('cZBkucgth', {parent:component,parentTop:projectLayout,props:{items:PRIORITIES,value:component.testCase.priority},attrs:{name:`${(`priority`).toInputName()}`,label:'Priority',required:''}});
ec('div');
ec('div');
let elmZriJ = eo('div',null,null,`class`,`row`);
let el8DwYq = eo('div',null,null,`class`,`col-sm-6`);
let elvpbrm = eo('div',null,null,`class`,`form-group`);
elvpbrm.cls = {'group-error': !!elJJAfz.formHandler.getError(`postConditions`) };

            for (let className in elvpbrm.cls) {
                elvpbrm.classList.toggle(className, elvpbrm.cls[className]);
            }  
            let elJeVEg = eo('label',null,null,`for`,`postConditions`);
text(trans('Test case PostConditions'));
ec('label');
let elAvURT = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.postConditions = this.value;}]},`value`,`${fval(component.testCase.postConditions)}`,`name`,`${(`postConditions`).toInputName()}`,`placeholder`,`${trans(`Test case PostConditions`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`postConditions`);
elAvURT.value = fval(component.testCase.postConditions);
ec('textarea');
ec('div');
ec('div');
let elfHvls = eo('div',null,null,`class`,`col-sm-6`);
let el80Oqj = eo('div',null,null,`class`,`form-group`);
el80Oqj.cls = {'group-error': !!elJJAfz.formHandler.getError(`data`) };

            for (let className in el80Oqj.cls) {
                el80Oqj.classList.toggle(className, el80Oqj.cls[className]);
            }  
            let elqnyaT = eo('label',null,null,`for`,`data`);
text(trans('Test case data'));
let elJZkRN = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elAyAmh = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.data = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elJJAfz.formHandler.addError(`data`, 'required', trans('validation.required'));}return elJJAfz.formHandler.removeError(`data`);}]},`value`,`${fval(component.testCase.data)}`,`name`,`${(`data`).toInputName()}`,`placeholder`,`${trans(`Test case data`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`data`);
elAyAmh.value = fval(component.testCase.data);
ec('textarea');
let cndaJl_ = elJJAfz.formHandler.getError(`data`);
this.setState('stViBux', cndaJl_);
if (cndaJl_) { 
let elL7Oow = eo('div','m5Af',null,`class`,`alert alert-danger`);
text(elJJAfz.formHandler.getError(`data`));
ec('div');
}ec('div');
ec('div');
ec('div');
let el4XVV7 = eo('div',null,null,`class`,`row`);
let elqSe2b = eo('div',null,null,`class`,`col-sm-4`);
let el31exo = eo('div',null,null,`class`,`form-group`);
el31exo.cls = {'group-error': !!elJJAfz.formHandler.getError(`stepsToReproduce`) };

            for (let className in el31exo.cls) {
                el31exo.classList.toggle(className, el31exo.cls[className]);
            }  
            let ele1xUI = eo('label',null,null,`for`,`stepsToReproduce`);
text(trans('Steps To Reproduce'));
let elzxjAn = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el52VrY = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.stepsToReproduce = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elJJAfz.formHandler.addError(`stepsToReproduce`, 'required', trans('validation.required'));}return elJJAfz.formHandler.removeError(`stepsToReproduce`);}]},`value`,`${fval(component.testCase.stepsToReproduce)}`,`name`,`${(`stepsToReproduce`).toInputName()}`,`placeholder`,`${trans(`Steps To Reproduce (Each step in one line without numbering the line)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`stepsToReproduce`);
el52VrY.value = fval(component.testCase.stepsToReproduce);
ec('textarea');
let cndZ_jm = elJJAfz.formHandler.getError(`stepsToReproduce`);
this.setState('st4dp96', cndZ_jm);
if (cndZ_jm) { 
let elybX9V = eo('div','7vcf',null,`class`,`alert alert-danger`);
text(elJJAfz.formHandler.getError(`stepsToReproduce`));
ec('div');
}ec('div');
ec('div');
let elh4HP5 = eo('div',null,null,`class`,`col-sm-4`);
let elb4WPz = eo('div',null,null,`class`,`form-group`);
elb4WPz.cls = {'group-error': !!elJJAfz.formHandler.getError(`expectedBehavior`) };

            for (let className in elb4WPz.cls) {
                elb4WPz.classList.toggle(className, elb4WPz.cls[className]);
            }  
            let elmsHcI = eo('label',null,null,`for`,`expectedBehavior`);
text(trans('Expected Behavior'));
let elJQv_o = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eleEeRe = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.expectedBehavior = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elJJAfz.formHandler.addError(`expectedBehavior`, 'required', trans('validation.required'));}return elJJAfz.formHandler.removeError(`expectedBehavior`);}]},`value`,`${fval(component.testCase.expectedBehavior)}`,`name`,`${(`expectedBehavior`).toInputName()}`,`placeholder`,`${trans(`Expected Behavior`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`expectedBehavior`);
eleEeRe.value = fval(component.testCase.expectedBehavior);
ec('textarea');
let cndfKLj = elJJAfz.formHandler.getError(`expectedBehavior`);
this.setState('std2lcf', cndfKLj);
if (cndfKLj) { 
let el9sl5q = eo('div','WRNf',null,`class`,`alert alert-danger`);
text(elJJAfz.formHandler.getError(`expectedBehavior`));
ec('div');
}ec('div');
ec('div');
let el1HOgy = eo('div',null,null,`class`,`col-sm-4`);
let elofv4H = eo('div',null,null,`class`,`form-group`);
elofv4H.cls = {'group-error': !!elJJAfz.formHandler.getError(`actualResult`) };

            for (let className in elofv4H.cls) {
                elofv4H.classList.toggle(className, elofv4H.cls[className]);
            }  
            let eles29u = eo('label',null,null,`for`,`actualResult`);
text(trans('Actual Result'));
ec('label');
let elbuZxa = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.actualResult = this.value;}]},`value`,`${fval(component.testCase.actualResult)}`,`name`,`${(`actualResult`).toInputName()}`,`placeholder`,`${trans(`Actual Result`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`actualResult`);
elbuZxa.value = fval(component.testCase.actualResult);
ec('textarea');
ec('div');
ec('div');
ec('div');
let eloDrMS = eo('div',null,null,`class`,`m-t-2`);
let cmpPpzZ = this._lc('cPqwx78FZ', {parent:component,parentTop:projectLayout,content:(flkFileInput) => {let elOGyOp = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let ele5_Tk = eo('strong',null,null,`class`,`ml-1`);
text(`Upload Test Case Automation File`);
ec('strong');
},attrs:{name:`${(`attachment`).toInputName()}`,class:'btn btn-cyan bold',label:'Test Case Automation File'}});
ec('div');
let eljuRha = eo('div',null,null,`class`,`m-t-1 text-center`);
let eljMzck = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.testCaseIsOpened = false}]}, boolAttrs, {disabled:component.isSending},`type`,`button`,`class`,`btn btn-danger bold`);
text(`Cancel`);
ec('button');
let elO7L6y = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
}}});
let cnd2iyG = component.modalIsOpened;
this.setState('st4hk1B', cnd2iyG);
if (cnd2iyG) { 
component.modal = this._lc('cYGB1CVPI', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elTEVIy = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elTEVIy.formHandler) {
                    window.cfrmdlr = elTEVIy.formHandler = new FormHandler(elTEVIy, component);
                } else {
                    window.cfrmdlr = elTEVIy.formHandler;
                }
            let elEYhkm = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elEYhkm.value = fval(component.project.id);
let elJdFU4 = eo('div',null,null,`class`,`form-group`);
elJdFU4.cls = {'group-error': !!elTEVIy.formHandler.getError(`name`) };

            for (let className in elJdFU4.cls) {
                elJdFU4.classList.toggle(className, elJdFU4.cls[className]);
            }  
            let elAYrSd = eo('label',null,null,`for`,`name`);
text(trans('Test suit Name'));
let elEzHRN = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elFn89e = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTEVIy.formHandler.addError(`name`, 'required', trans('validation.required'));}return elTEVIy.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Test suit Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elFn89e.value = fval(component.record.name);
let cndpWdp = elTEVIy.formHandler.getError(`name`);
this.setState('stZ8NsJ', cndpWdp);
if (cndpWdp) { 
let elK0jPb = eo('div','Ggxf',null,`class`,`alert alert-danger`);
text(elTEVIy.formHandler.getError(`name`));
ec('div');
}ec('div');
let cmpL8ed = this._lc('cjC6t7k4T', {parent:component,parentTop:flkModal,props:{required:true,value:Object.get(component.record.userStory, 'id', ''),lazyLoading:true,request:loadUserStories.bind(component)},attrs:{name:`${(`userStory`).toInputName()}`,label:'User Story'},state:'st4hk1B'});
let elCIgkr = eo('div',null,null,`class`,`m-t-1 text-center`);
let elSdVhK = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'st4hk1B'});
}let cndJdpP = component.confirmDelete;
this.setState('stGSJmJ', cndJdpP);
if (cndJdpP) { 
let cmpStQr = this._lc('crsMEDWTv', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},attrs:{message:'Are you sure you want to delete this test suit? This will delete also all related test cases.'},state:'stGSJmJ'});
}let cndQSdS = component.confirmDeletingTestCase;
this.setState('stDonuN', cndQSdS);
if (cndQSdS) { 
let cmp6w6j = this._lc('cINO8yb3G', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDeletingTestCase = null},onconfirm:function(e) {let $el = this; component.removeTestCase()}},state:'stDonuN'});
}
                    this.isReadyToGo();
                }
        });