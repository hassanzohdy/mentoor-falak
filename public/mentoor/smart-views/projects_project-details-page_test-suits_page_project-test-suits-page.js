_Component({
                selector: 'project-test-suits-page',
                c: 'ProjectTestSuitsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','testCaseIsOpened','openModal','detectChanges','confirmRemoving','openTestCase','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove','confirmDeletingTestCase','removeTestCase','confirmRemovingTestCase','submitTestCase','testCaseType','testSuit','testCaseHeading','testCase','preConditionsTestCasesIds','requestTestCases'],
                children: {cKT9P1wOg:'flk-dropdown-list',chHrMmoQG:'flk-dropdown-list',cOt3GMcCD:'flk-file-input',ciUkjzzZZ:'project-layout',cSXRN3dgh:'flk-dropdown-list',cGOj04Je9:'flk-modal',cXuRp3QHN:'flk-alert',cDNAkzdLr:'flk-alert'},
                render: function (component) {
                    let cmprjur = this._lc('ciUkjzzZZ', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndEaZT = ! component.testCaseIsOpened;
this.setState('stIX9CV', cndEaZT);
if (cndEaZT) { 
let elqnhy2 = eo('button','7Fof',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let ellrD0a = eo('i','Aj6f',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Test suit`);
ec('button');
let elQYsOI = eo('h1','yfAf',null,`class`,`m-y-1`);
text(`${ component.project.name } Test suits
        (${ component.project.testSuits.length })`);
ec('h1');
let el0veZ9 = eo('table','1N2f',null,`class`,`table table-striped buttoned`);
let elBX0I3 = eo('thead','sGlf');
let elUyQMF = eo('tr','sPwf');
let el9IVoU = eo('th','Yozf');
text(`#`);
ec('th');
let eliEiLA = eo('th','bTCf');
text(`Name`);
ec('th');
let eli4D5f = eo('th','DIhf');
text(`User Story`);
ec('th');
let elPrgdo = eo('th','g6kf');
text(`Test Cases`);
ec('th');
let elI9juM = eo('th','K4Of');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elfi4wN = eo('tbody','RAlf');
let cndBQlf = Is.empty(component.project.testSuits);
this.setState('stJ3mRz', cndBQlf);
if (cndBQlf) { 
let el1_yds = eo('tr','0MMf');
let elTq_18 = eo('td','BrRf',null, 'style', {textAlign:'center'},`colspan`,`5`);
text(`No Test suits Yet`);
ec('td');
ec('tr');
}for (let index in component.project.testSuits) {
let record = component.project.testSuits[index]; 
 let ii7O2s = record.id+ index;
let elaDOWD = eo('tr','Lw3sdx1e_gkL' + index+ii7O2s);
let elWeVFC = eo('td','DUZff'+ii7O2s);
text(record.id);
ec('td');
let eluLcy9 = eo('td','l9Rff'+ii7O2s);
text(record.name);
ec('td');
let elYyRuz = eo('td','7m7ff'+ii7O2s,null,`title`,``);
text(record.userStory.title.readMoreChars(20));
ec('td');

                    setTimeout(function () {
                        let $el = elYyRuz;
                        
            true && tippyTooltip($el, {arrow:true,content:`${record.userStory.title}`});
        ;
                    }, 20);                
                let elvN4T8 = eo('td','G7Nff'+ii7O2s);
let elrLwmD = eo('a','wrMff'+ii7O2s,null, eventListeners, {onclick:[function(e) {var $el = this;record.viewTestCases = ! record.viewTestCases; component.detectChanges()}]},`href`,`#`);
let elebq5r = eo('span','GZlff'+ii7O2s);
text(record.testCases.length);
ec('span');
ec('a');
ec('td');
let elUvwCJ = eo('td','IO9ff'+ii7O2s);
let cndzMOv = record.canBeModified;
this.setState('stunIFK', cndzMOv);
if (cndzMOv) { 
let elzuK_F = eo('button','wtlff'+ii7O2s,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elBxu7y = eo('i','ZOyff'+ii7O2s,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elzuK_F;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Test suit')}`});
        ;
                    }, 20);                
                let eljM0Zw = eo('button','n0zff'+ii7O2s,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elBs7JZ = eo('i','h1uff'+ii7O2s,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eljM0Zw;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Test suit')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
let cndlD2z = record.viewTestCases;
this.setState('stMsxES', cndlD2z);
if (cndlD2z) { 
let el0Xd55 = eo('tr','2bkff'+ii7O2s);
for (let i in ['positive', 'negative']) {
let type = ['positive', 'negative'][i]; 
 let iiMDaT = 'GQNT2PF' + i;
let elGbPlN = eo('td','r5wWMJeUtjdf' + i+ii7O2s+iiMDaT,null,`colspan`,`2`,`class`,`test-case-type v-top text-center ${ type }`);
let eldmt8d = eo('h4','R37ff'+ii7O2s+iiMDaT,null,`class`,`bold text-capitalize`);
eldmt8d.cls = {'green-text': type == 'positive', 'red-text': type == 'negative'};

            for (let className in eldmt8d.cls) {
                eldmt8d.classList.toggle(className, eldmt8d.cls[className]);
            }  
            text(`${ type }
                            (${ record.testCasesList[type] ? record.testCasesList[type].length : 0 })`);
let elB_CFT = eo('button','XgCff'+ii7O2s+iiMDaT,null, eventListeners, {onclick:[function(e) {var $el = this;component.openTestCase(type, record, {}, null, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle`);
elB_CFT.cls = {'btn-success': type == 'positive', 'btn-danger': type == 'negative'};

            for (let className in elB_CFT.cls) {
                elB_CFT.classList.toggle(className, elB_CFT.cls[className]);
            }  
            let els1FLE = eo('i','mj1ff'+ii7O2s+iiMDaT,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elB_CFT;
                        
            true && tippyTooltip($el, {arrow:true,content:`Add new ${ type } test case`});
        ;
                    }, 20);                
                ec('h4');
let cnd6RZ_ = record.testCasesList[type];
this.setState('stTW4tl', cnd6RZ_);
if (cnd6RZ_) { 
let elEUFoB = eo('div','hGuff'+ii7O2s+iiMDaT,null,`class`,`table-responsive test-cases-list`);
let elntabp = eo('table','Y5Wff'+ii7O2s+iiMDaT,null,`class`,`table table-bordered`);
let eltCl4B = eo('thead','qvXff'+ii7O2s+iiMDaT);
let elygATT = eo('tr','zGEff'+ii7O2s+iiMDaT);
let elRcLMO = eo('th','Puhff'+ii7O2s+iiMDaT);
text(`#`);
ec('th');
let el80AVk = eo('th','FFTff'+ii7O2s+iiMDaT);
text(`Test Case`);
ec('th');
let elJJMT6 = eo('th','twAff'+ii7O2s+iiMDaT);
text(`Priority`);
ec('th');
let elSkSKb = eo('th','ko7ff'+ii7O2s+iiMDaT);
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elTT9e6 = eo('tbody','3XIff'+ii7O2s+iiMDaT);
for (let testCaseIndex in record.testCasesList[type]) {
let testCase = record.testCasesList[type][testCaseIndex]; 
 let iihZm1 = 'oseK2ak' + testCaseIndex;
let el02moy = eo('tr','OMLvbJWsW6hc' + testCaseIndex+ii7O2s+iiMDaT+iihZm1);
let elIZzV1 = eo('td','Lgqff'+ii7O2s+iiMDaT+iihZm1);
text(testCase.id);
ec('td');
let elnWhsF = eo('td','2klff'+ii7O2s+iiMDaT+iihZm1);
let elyfKB2 = eo('a','6Ljff'+ii7O2s+iiMDaT+iihZm1,null,`href`,`${URLS.project(component.project, 'test-cases', testCase)}`);
text(testCase.title);
ec('a');
ec('td');
let elN8OiU = eo('td','EU_ff'+ii7O2s+iiMDaT+iihZm1);
text(testCase.priority);
ec('td');
let eljReTm = eo('td','Kghff'+ii7O2s+iiMDaT+iihZm1);
let cndQwXY = testCase.canBeModified;
this.setState('stF4vsF', cndQwXY);
if (cndQwXY) { 
let ellPUAp = eo('button','JvHff'+ii7O2s+iiMDaT+iihZm1,null, eventListeners, {onclick:[function(e) {var $el = this;component.openTestCase(type, record, testCase, testCaseIndex, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-purple btn-sm btn-circle`);
let el7Uvb_ = eo('i','Xasff'+ii7O2s+iiMDaT+iihZm1,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = ellPUAp;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Test case')}`});
        ;
                    }, 20);                
                let el2I74B = eo('button','NAUff'+ii7O2s+iiMDaT+iihZm1,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemovingTestCase(testCase, testCaseIndex, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let el8kuz6 = eo('i','66eff'+ii7O2s+iiMDaT+iihZm1,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el2I74B;
                        
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
}let cndQmal = component.testCaseIsOpened;
this.setState('strLa9B', cndQmal);
if (cndQmal) { 
let elt9nm4 = eo('form','Eimf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitTestCase($el)}]});

                if (! elt9nm4.formHandler) {
                    window.cfrmdlr = elt9nm4.formHandler = new FormHandler(elt9nm4, component);
                } else {
                    window.cfrmdlr = elt9nm4.formHandler;
                }
            let eluUabZ = ev('input','8Aif',null, eventListeners, {oninput:[function(e) {component.testCaseType = this.value;}]},`value`,`${fval(component.testCaseType)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
eluUabZ.value = fval(component.testCaseType);
let elMQC7H = ev('input','9aZf',null, eventListeners, {oninput:[function(e) {component.testSuit.id = this.value;}]},`value`,`${fval(component.testSuit.id)}`,`name`,`${(`testSuit`).toInputName()}`,`type`,`hidden`);
elMQC7H.value = fval(component.testSuit.id);
let elGHYCg = ev('input','aagf',null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elGHYCg.value = fval(component.project.id);
let elsQeZ_ = eo('h1','FGhf');
text(component.testCaseHeading);
ec('h1');
let el1a2fP = eo('div','IAxf',null,`class`,`row`);
let eluC5WV = eo('div','4rHf',null,`class`,`col-sm-6`);
ec('div');
let elLGWEW = eo('div','MjMf',null,`class`,`col-sm-6`);
ec('div');
ec('div');
let elVJ7Ot = eo('div','Tblf',null,`class`,`row`);
let elaInYg = eo('div','7DDf',null,`class`,`col-sm-12`);
let elLXvJz = eo('div','zXyf',null,`class`,`form-group`);
elLXvJz.cls = {'group-error': !!elt9nm4.formHandler.getError(`title`) };

            for (let className in elLXvJz.cls) {
                elLXvJz.classList.toggle(className, elLXvJz.cls[className]);
            }  
            let el6yeKP = eo('label','mKLf',null,`for`,`title`);
text(trans('Test case title'));
let elybmGy = eo('span','_Qjf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elkFgoj = ev('input','Usqf',null, eventListeners, {oninput:[function(e) {component.testCase.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elt9nm4.formHandler.addError(`title`, 'required', trans('validation.required'));}return elt9nm4.formHandler.removeError(`title`);}]},`value`,`${fval(component.testCase.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Test case title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elkFgoj.value = fval(component.testCase.title);
let cndevmZ = elt9nm4.formHandler.getError(`title`);
this.setState('stxl5EW', cndevmZ);
if (cndevmZ) { 
let elkwjhd = eo('div','sh5f',null,`class`,`alert alert-danger`);
text(elt9nm4.formHandler.getError(`title`));
ec('div');
}ec('div');
ec('div');
let eldlfFj = eo('div',null,null,`class`,`col-sm-12`);
let elV3n73 = eo('div',null,null,`class`,`form-group`);
elV3n73.cls = {'group-error': !!elt9nm4.formHandler.getError(`description`) };

            for (let className in elV3n73.cls) {
                elV3n73.classList.toggle(className, elV3n73.cls[className]);
            }  
            let elDcJxR = eo('label',null,null,`for`,`description`);
text(trans('Test case description'));
let el6S2RF = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el0rY5m = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elt9nm4.formHandler.addError(`description`, 'required', trans('validation.required'));}return elt9nm4.formHandler.removeError(`description`);}]},`value`,`${fval(component.testCase.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Test case description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
el0rY5m.value = fval(component.testCase.description);
ec('textarea');
let cndNv0V = elt9nm4.formHandler.getError(`description`);
this.setState('stcGfHQ', cndNv0V);
if (cndNv0V) { 
let el37czQ = eo('div','J0Xf',null,`class`,`alert alert-danger`);
text(elt9nm4.formHandler.getError(`description`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elqEuL8 = eo('div',null,null,`class`,`row`);
let el3lOoB = eo('div',null,null,`class`,`col-sm-6`);
let elRA96o = eo('div',null,null,`class`,`form-group`);
elRA96o.cls = {'group-error': !!elt9nm4.formHandler.getError(`preconditions`) };

            for (let className in elRA96o.cls) {
                elRA96o.classList.toggle(className, elRA96o.cls[className]);
            }  
            let elEm7wl = eo('label',null,null,`for`,`preconditions`);
text(trans('Test case Preconditions'));
ec('label');
let el7vfHs = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.preconditions = this.value;}]},`value`,`${fval(component.testCase.preconditions)}`,`name`,`${(`preconditions`).toInputName()}`,`placeholder`,`${trans(`Test case Preconditions`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`preconditions`);
el7vfHs.value = fval(component.testCase.preconditions);
ec('textarea');
ec('div');
ec('div');
let eln4NLw = eo('div',null,null,`class`,`col-sm-6`);
let elB9rLJ = eo('div',null,null,`class`,`form-group`);
elB9rLJ.cls = {'group-error': !!elt9nm4.formHandler.getError(`notes`) };

            for (let className in elB9rLJ.cls) {
                elB9rLJ.classList.toggle(className, elB9rLJ.cls[className]);
            }  
            let elYIVcd = eo('label',null,null,`for`,`notes`);
text(trans('Test case notes'));
ec('label');
let elJgUIj = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.notes = this.value;}]},`value`,`${fval(component.testCase.notes)}`,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Test case notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
elJgUIj.value = fval(component.testCase.notes);
ec('textarea');
ec('div');
ec('div');
ec('div');
let elaP5ps = eo('div',null,null,`class`,`row`);
let elhZDPE = eo('div',null,null,`class`,`col-sm-6`);
let cmpY5__ = this._lc('cKT9P1wOg', {parent:component,parentTop:projectLayout,props:{multiple:true,lazyLoading:true,except:component.testCase.id,value:component.preConditionsTestCasesIds,request:component.requestTestCases.bind(component)},boolAttrs:{multiple:true},attrs:{name:`${(`preConditionsTestCases[]`).toInputName()}`,label:'Pre Conditions Test Cases'}});
ec('div');
let elxresm = eo('div',null,null,`class`,`col-sm-6`);
let cmp71aR = this._lc('chHrMmoQG', {parent:component,parentTop:projectLayout,props:{items:PRIORITIES,value:component.testCase.priority},attrs:{name:`${(`priority`).toInputName()}`,label:'Priority',required:''}});
ec('div');
ec('div');
let elONfrs = eo('div',null,null,`class`,`row`);
let elktA_T = eo('div',null,null,`class`,`col-sm-6`);
let el_sn66 = eo('div',null,null,`class`,`form-group`);
el_sn66.cls = {'group-error': !!elt9nm4.formHandler.getError(`postConditions`) };

            for (let className in el_sn66.cls) {
                el_sn66.classList.toggle(className, el_sn66.cls[className]);
            }  
            let elN9HfL = eo('label',null,null,`for`,`postConditions`);
text(trans('Test case PostConditions'));
ec('label');
let el2vN7j = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.postConditions = this.value;}]},`value`,`${fval(component.testCase.postConditions)}`,`name`,`${(`postConditions`).toInputName()}`,`placeholder`,`${trans(`Test case PostConditions`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`postConditions`);
el2vN7j.value = fval(component.testCase.postConditions);
ec('textarea');
ec('div');
ec('div');
let el8DoZQ = eo('div',null,null,`class`,`col-sm-6`);
let elEE6zL = eo('div',null,null,`class`,`form-group`);
elEE6zL.cls = {'group-error': !!elt9nm4.formHandler.getError(`data`) };

            for (let className in elEE6zL.cls) {
                elEE6zL.classList.toggle(className, elEE6zL.cls[className]);
            }  
            let elaV2US = eo('label',null,null,`for`,`data`);
text(trans('Test case data'));
let elB4TnN = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elFH6mg = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.data = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elt9nm4.formHandler.addError(`data`, 'required', trans('validation.required'));}return elt9nm4.formHandler.removeError(`data`);}]},`value`,`${fval(component.testCase.data)}`,`name`,`${(`data`).toInputName()}`,`placeholder`,`${trans(`Test case data`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`data`);
elFH6mg.value = fval(component.testCase.data);
ec('textarea');
let cndT4GQ = elt9nm4.formHandler.getError(`data`);
this.setState('stS02qG', cndT4GQ);
if (cndT4GQ) { 
let elJhuIJ = eo('div','rBNf',null,`class`,`alert alert-danger`);
text(elt9nm4.formHandler.getError(`data`));
ec('div');
}ec('div');
ec('div');
ec('div');
let el8USPa = eo('div',null,null,`class`,`row`);
let elyabhk = eo('div',null,null,`class`,`col-sm-4`);
let el5Hd_m = eo('div',null,null,`class`,`form-group`);
el5Hd_m.cls = {'group-error': !!elt9nm4.formHandler.getError(`stepsToReproduce`) };

            for (let className in el5Hd_m.cls) {
                el5Hd_m.classList.toggle(className, el5Hd_m.cls[className]);
            }  
            let eldHJwe = eo('label',null,null,`for`,`stepsToReproduce`);
text(trans('Steps To Reproduce'));
let elYUJzp = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elnEcLU = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.stepsToReproduce = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elt9nm4.formHandler.addError(`stepsToReproduce`, 'required', trans('validation.required'));}return elt9nm4.formHandler.removeError(`stepsToReproduce`);}]},`value`,`${fval(component.testCase.stepsToReproduce)}`,`name`,`${(`stepsToReproduce`).toInputName()}`,`placeholder`,`${trans(`Steps To Reproduce (Each step in one line without numbering the line)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`stepsToReproduce`);
elnEcLU.value = fval(component.testCase.stepsToReproduce);
ec('textarea');
let cndvyL2 = elt9nm4.formHandler.getError(`stepsToReproduce`);
this.setState('stMVs_3', cndvyL2);
if (cndvyL2) { 
let elvI0g8 = eo('div','NY3f',null,`class`,`alert alert-danger`);
text(elt9nm4.formHandler.getError(`stepsToReproduce`));
ec('div');
}ec('div');
ec('div');
let elqcYlq = eo('div',null,null,`class`,`col-sm-4`);
let elFJqfP = eo('div',null,null,`class`,`form-group`);
elFJqfP.cls = {'group-error': !!elt9nm4.formHandler.getError(`expectedBehavior`) };

            for (let className in elFJqfP.cls) {
                elFJqfP.classList.toggle(className, elFJqfP.cls[className]);
            }  
            let el8dtwQ = eo('label',null,null,`for`,`expectedBehavior`);
text(trans('Expected Behavior'));
let elouj5J = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elWDdQM = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.expectedBehavior = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elt9nm4.formHandler.addError(`expectedBehavior`, 'required', trans('validation.required'));}return elt9nm4.formHandler.removeError(`expectedBehavior`);}]},`value`,`${fval(component.testCase.expectedBehavior)}`,`name`,`${(`expectedBehavior`).toInputName()}`,`placeholder`,`${trans(`Expected Behavior`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`expectedBehavior`);
elWDdQM.value = fval(component.testCase.expectedBehavior);
ec('textarea');
let cndNbHp = elt9nm4.formHandler.getError(`expectedBehavior`);
this.setState('stPnJXP', cndNbHp);
if (cndNbHp) { 
let elBg6UB = eo('div','Dtxf',null,`class`,`alert alert-danger`);
text(elt9nm4.formHandler.getError(`expectedBehavior`));
ec('div');
}ec('div');
ec('div');
let elITg7N = eo('div',null,null,`class`,`col-sm-4`);
let el7FD8z = eo('div',null,null,`class`,`form-group`);
el7FD8z.cls = {'group-error': !!elt9nm4.formHandler.getError(`actualResult`) };

            for (let className in el7FD8z.cls) {
                el7FD8z.classList.toggle(className, el7FD8z.cls[className]);
            }  
            let elJaD82 = eo('label',null,null,`for`,`actualResult`);
text(trans('Actual Result'));
ec('label');
let elNH2gv = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.actualResult = this.value;}]},`value`,`${fval(component.testCase.actualResult)}`,`name`,`${(`actualResult`).toInputName()}`,`placeholder`,`${trans(`Actual Result`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`actualResult`);
elNH2gv.value = fval(component.testCase.actualResult);
ec('textarea');
ec('div');
ec('div');
ec('div');
let eltPDvY = eo('div',null,null,`class`,`m-t-2`);
let cmpWvbU = this._lc('cOt3GMcCD', {parent:component,parentTop:projectLayout,content:(flkFileInput) => {let elDujGs = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let eljjo1d = eo('strong',null,null,`class`,`ml-1`);
text(`Upload Test Case Automation File`);
ec('strong');
},attrs:{name:`${(`attachment`).toInputName()}`,class:'btn btn-cyan bold',label:'Test Case Automation File'}});
ec('div');
let elqGiLu = eo('div',null,null,`class`,`m-t-1 text-center`);
let elQweAK = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.testCaseIsOpened = false}]}, boolAttrs, {disabled:component.isSending},`type`,`button`,`class`,`btn btn-danger bold`);
text(`Cancel`);
ec('button');
let elqgObN = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
}}});
let cndiVOc = component.modalIsOpened;
this.setState('stk3mKZ', cndiVOc);
if (cndiVOc) { 
component.modal = this._lc('cGOj04Je9', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let ell_KNb = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! ell_KNb.formHandler) {
                    window.cfrmdlr = ell_KNb.formHandler = new FormHandler(ell_KNb, component);
                } else {
                    window.cfrmdlr = ell_KNb.formHandler;
                }
            let elIfLSN = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elIfLSN.value = fval(component.project.id);
let elBONpS = eo('div',null,null,`class`,`form-group`);
elBONpS.cls = {'group-error': !!ell_KNb.formHandler.getError(`name`) };

            for (let className in elBONpS.cls) {
                elBONpS.classList.toggle(className, elBONpS.cls[className]);
            }  
            let elduDQP = eo('label',null,null,`for`,`name`);
text(trans('Test suit Name'));
let elwusEa = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elVn8jB = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return ell_KNb.formHandler.addError(`name`, 'required', trans('validation.required'));}return ell_KNb.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Test suit Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elVn8jB.value = fval(component.record.name);
let cnd4HBX = ell_KNb.formHandler.getError(`name`);
this.setState('stgvId5', cnd4HBX);
if (cnd4HBX) { 
let elDsGub = eo('div','V8hf',null,`class`,`alert alert-danger`);
text(ell_KNb.formHandler.getError(`name`));
ec('div');
}ec('div');
let cmpBsAb = this._lc('cSXRN3dgh', {parent:component,parentTop:flkModal,props:{required:true,value:Object.get(component.record.userStory, 'id', ''),lazyLoading:true,request:loadUserStories.bind(component)},attrs:{name:`${(`userStory`).toInputName()}`,label:'User Story'},state:'stk3mKZ'});
let elbc0_y = eo('div',null,null,`class`,`m-t-1 text-center`);
let elpRIVL = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stk3mKZ'});
}let cndv3ak = component.confirmDelete;
this.setState('st28ME4', cndv3ak);
if (cndv3ak) { 
let cmpj5Db = this._lc('cXuRp3QHN', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},attrs:{message:'Are you sure you want to delete this test suit? This will delete also all related test cases.'},state:'st28ME4'});
}let cndL13K = component.confirmDeletingTestCase;
this.setState('st3bFnm', cndL13K);
if (cndL13K) { 
let cmpUcG7 = this._lc('cDNAkzdLr', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDeletingTestCase = null},onconfirm:function(e) {let $el = this; component.removeTestCase()}},state:'st3bFnm'});
}
                    this.isReadyToGo();
                }
        });