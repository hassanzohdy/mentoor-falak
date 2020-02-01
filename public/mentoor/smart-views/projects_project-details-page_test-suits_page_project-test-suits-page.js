_Component({
                selector: 'project-test-suits-page',
                c: 'ProjectTestSuitsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','testCaseIsOpened','openModal','detectChanges','confirmRemoving','openTestCase','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove','confirmDeletingTestCase','removeTestCase','confirmRemovingTestCase','submitTestCase','testCaseType','testSuit','testCaseHeading','testCase','preConditionsTestCasesIds','requestTestCases'],
                children: {ceHROO3u2:'flk-dropdown-list',cFLs5m8D9:'flk-dropdown-list',co31dD6WG:'flk-file-input',c5CRSs4eI:'project-layout',cVzcrOk2s:'flk-dropdown-list',cOIvUkTyP:'flk-modal',cXnOsyJXV:'flk-alert',cICxQPBRc:'flk-alert'},
                render: function (component) {
                    let cmpQGBZ = this._lc('c5CRSs4eI', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndzan_ = ! component.testCaseIsOpened;
this.setState('st6iEUL', cndzan_);
if (cndzan_) { 
let el3UMKQ = eo('button','cF0f',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let el7US0Q = eo('i','PQRf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Test suit`);
ec('button');
let elWB25I = eo('h1','iWef',null,`class`,`m-y-1`);
text(`${ component.project.name } Test suits
        (${ component.project.testSuits.length })`);
ec('h1');
let elvrOPD = eo('table','FW2f',null,`class`,`table table-striped buttoned`);
let el5kVrS = eo('thead','BWjf');
let elqWnvG = eo('tr','SgPf');
let elbrun0 = eo('th','jkGf');
text(`#`);
ec('th');
let elInqm4 = eo('th','0gSf');
text(`Name`);
ec('th');
let el62KXe = eo('th','iatf');
text(`User Story`);
ec('th');
let elufCNl = eo('th','Y4Ef');
text(`Test Cases`);
ec('th');
let elCoJiV = eo('th','uLHf');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elA1Br0 = eo('tbody','yNmf');
let cndr5rg = Is.empty(component.project.testSuits);
this.setState('stJHfDS', cndr5rg);
if (cndr5rg) { 
let el4fWEx = eo('tr','uJRf');
let elYwhsT = eo('td','Mpif',null, 'style', {textAlign:'center'},`colspan`,`5`);
text(`No Test suits Yet`);
ec('td');
ec('tr');
}for (let index in component.project.testSuits) {
let record = component.project.testSuits[index]; 
 let ii3lcN = record.id+ index;
let elbcVvR = eo('tr','od73r_aecOom' + index+ii3lcN);
let elDmj4u = eo('td','X_Aff'+ii3lcN);
text(record.id);
ec('td');
let elVq8rG = eo('td','xm4ff'+ii3lcN);
text(record.name);
ec('td');
let elj60qF = eo('td','HSZff'+ii3lcN,null,`title`,``);
text(record.userStory.title.readMoreChars(20));
ec('td');

                    setTimeout(function () {
                        let $el = elj60qF;
                        
            true && tippyTooltip($el, {arrow:true,content:`${record.userStory.title}`});
        ;
                    }, 20);                
                let elDAXix = eo('td','62lff'+ii3lcN);
let elREvrx = eo('a','FM_ff'+ii3lcN,null, eventListeners, {onclick:[function(e) {var $el = this;record.viewTestCases = ! record.viewTestCases; component.detectChanges()}]},`href`,`#`);
let elMg2_4 = eo('span','3ZXff'+ii3lcN);
text(record.testCases.length);
ec('span');
ec('a');
ec('td');
let elAagxj = eo('td','VJJff'+ii3lcN);
let cndcllq = record.canBeModified;
this.setState('stz4o4W', cndcllq);
if (cndcllq) { 
let elYB_8x = eo('button','3p3ff'+ii3lcN,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elUWO5l = eo('i','RM0ff'+ii3lcN,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elYB_8x;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Test suit')}`});
        ;
                    }, 20);                
                let el0Tyvk = eo('button','tiBff'+ii3lcN,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let ellCNzf = eo('i','0Cbff'+ii3lcN,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el0Tyvk;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Test suit')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
let cndZnmn = record.viewTestCases;
this.setState('st1NA7D', cndZnmn);
if (cndZnmn) { 
let elnBmUE = eo('tr','A9vff'+ii3lcN);
for (let i in ['positive', 'negative']) {
let type = ['positive', 'negative'][i]; 
 let iilrlS = 'iY4Ml80' + i;
let elEEI63 = eo('td','ELzxGDsDrPcg' + i+ii3lcN+iilrlS,null,`colspan`,`2`,`class`,`test-case-type v-top text-center ${ type }`);
let eliuSn7 = eo('h4','_Pzff'+ii3lcN+iilrlS,null,`class`,`bold text-capitalize`);
eliuSn7.cls = {'green-text': type == 'positive', 'red-text': type == 'negative'};

            for (let className in eliuSn7.cls) {
                eliuSn7.classList.toggle(className, eliuSn7.cls[className]);
            }  
            text(`${ type }
                            (${ record.testCasesList[type] ? record.testCasesList[type].length : 0 })`);
let el_yQIa = eo('button','RKGff'+ii3lcN+iilrlS,null, eventListeners, {onclick:[function(e) {var $el = this;component.openTestCase(type, record, {}, null, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle`);
el_yQIa.cls = {'btn-success': type == 'positive', 'btn-danger': type == 'negative'};

            for (let className in el_yQIa.cls) {
                el_yQIa.classList.toggle(className, el_yQIa.cls[className]);
            }  
            let elbvdrX = eo('i','8qIff'+ii3lcN+iilrlS,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el_yQIa;
                        
            true && tippyTooltip($el, {arrow:true,content:`Add new ${ type } test case`});
        ;
                    }, 20);                
                ec('h4');
let cndjgQI = record.testCasesList[type];
this.setState('stDsAMi', cndjgQI);
if (cndjgQI) { 
let elPGgCN = eo('div','wJNff'+ii3lcN+iilrlS,null,`class`,`table-responsive test-cases-list`);
let elpMXc7 = eo('table','kkHff'+ii3lcN+iilrlS,null,`class`,`table table-bordered`);
let elV3qx4 = eo('thead','Crsff'+ii3lcN+iilrlS);
let elIy8wo = eo('tr','rwtff'+ii3lcN+iilrlS);
let elLMV4p = eo('th','2CSff'+ii3lcN+iilrlS);
text(`#`);
ec('th');
let elpno1R = eo('th','xjUff'+ii3lcN+iilrlS);
text(`Test Case`);
ec('th');
let el3u1a9 = eo('th','OU9ff'+ii3lcN+iilrlS);
text(`Priority`);
ec('th');
let elMGq1f = eo('th','VT1ff'+ii3lcN+iilrlS);
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let el3G7Ht = eo('tbody','ytaff'+ii3lcN+iilrlS);
for (let testCaseIndex in record.testCasesList[type]) {
let testCase = record.testCasesList[type][testCaseIndex]; 
 let iiRJys = 'WOKdBuo' + testCaseIndex;
let elUOVm2 = eo('tr','fVwcCiqL6L2Z' + testCaseIndex+ii3lcN+iilrlS+iiRJys);
let eltphjb = eo('td','0CSff'+ii3lcN+iilrlS+iiRJys);
text(testCase.id);
ec('td');
let elmWCkN = eo('td','AtGff'+ii3lcN+iilrlS+iiRJys);
let elDq25_ = eo('a','vYMff'+ii3lcN+iilrlS+iiRJys,null,`href`,`${URLS.project(component.project, 'test-cases', testCase)}`);
text(testCase.title);
ec('a');
ec('td');
let elS_07H = eo('td','hN1ff'+ii3lcN+iilrlS+iiRJys);
text(testCase.priority);
ec('td');
let elM6GAR = eo('td','TjSff'+ii3lcN+iilrlS+iiRJys);
let cndnO6Y = testCase.canBeModified;
this.setState('stKTe70', cndnO6Y);
if (cndnO6Y) { 
let el0en4N = eo('button','0Ijff'+ii3lcN+iilrlS+iiRJys,null, eventListeners, {onclick:[function(e) {var $el = this;component.openTestCase(type, record, testCase, testCaseIndex, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-purple btn-sm btn-circle`);
let eljZ6lG = eo('i','Ls9ff'+ii3lcN+iilrlS+iiRJys,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el0en4N;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Test case')}`});
        ;
                    }, 20);                
                let el8pF_X = eo('button','1hDff'+ii3lcN+iilrlS+iiRJys,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemovingTestCase(testCase, testCaseIndex, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let eleQKuY = eo('i','N0aff'+ii3lcN+iilrlS+iiRJys,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el8pF_X;
                        
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
}let cndT2T4 = component.testCaseIsOpened;
this.setState('stbDYjE', cndT2T4);
if (cndT2T4) { 
let elABZE5 = eo('form','U6gf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitTestCase($el)}]});

                if (! elABZE5.formHandler) {
                    window.cfrmdlr = elABZE5.formHandler = new FormHandler(elABZE5, component);
                } else {
                    window.cfrmdlr = elABZE5.formHandler;
                }
            let el6OWZF = ev('input','Qtvf',null, eventListeners, {oninput:[function(e) {component.testCaseType = this.value;}]},`value`,`${fval(component.testCaseType)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
el6OWZF.value = fval(component.testCaseType);
let el3XxGs = ev('input','ypmf',null, eventListeners, {oninput:[function(e) {component.testSuit.id = this.value;}]},`value`,`${fval(component.testSuit.id)}`,`name`,`${(`testSuit`).toInputName()}`,`type`,`hidden`);
el3XxGs.value = fval(component.testSuit.id);
let eleLwoY = ev('input','KxHf',null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
eleLwoY.value = fval(component.project.id);
let elt9Vj2 = eo('h1','Wief');
text(component.testCaseHeading);
ec('h1');
let elbbq2z = eo('div','n_Jf',null,`class`,`row`);
let elPnoGS = eo('div','PgPf',null,`class`,`col-sm-6`);
ec('div');
let elreN8E = eo('div','gIuf',null,`class`,`col-sm-6`);
ec('div');
ec('div');
let elI2Sox = eo('div','wCKf',null,`class`,`row`);
let elCJMld = eo('div','XhWf',null,`class`,`col-sm-12`);
let el9YxIU = eo('div','vRFf',null,`class`,`form-group`);
el9YxIU.cls = {'group-error': !!elABZE5.formHandler.getError(`title`) };

            for (let className in el9YxIU.cls) {
                el9YxIU.classList.toggle(className, el9YxIU.cls[className]);
            }  
            let el0Vk2f = eo('label','Xqgf',null,`for`,`title`);
text(trans('Test case title'));
let elP0lJE = eo('span','VlQf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elzDWAS = ev('input','qhJf',null, eventListeners, {oninput:[function(e) {component.testCase.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elABZE5.formHandler.addError(`title`, 'required', trans('validation.required'));}return elABZE5.formHandler.removeError(`title`);}]},`value`,`${fval(component.testCase.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Test case title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elzDWAS.value = fval(component.testCase.title);
let cndipaX = elABZE5.formHandler.getError(`title`);
this.setState('st2QhBM', cndipaX);
if (cndipaX) { 
let el6SZHF = eo('div','BkCf',null,`class`,`alert alert-danger`);
text(elABZE5.formHandler.getError(`title`));
ec('div');
}ec('div');
ec('div');
let elF9YNB = eo('div',null,null,`class`,`col-sm-12`);
let elgBDDU = eo('div',null,null,`class`,`form-group`);
elgBDDU.cls = {'group-error': !!elABZE5.formHandler.getError(`description`) };

            for (let className in elgBDDU.cls) {
                elgBDDU.classList.toggle(className, elgBDDU.cls[className]);
            }  
            let el47R55 = eo('label',null,null,`for`,`description`);
text(trans('Test case description'));
let el07qD4 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el6u3Zj = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elABZE5.formHandler.addError(`description`, 'required', trans('validation.required'));}return elABZE5.formHandler.removeError(`description`);}]},`value`,`${fval(component.testCase.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Test case description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
el6u3Zj.value = fval(component.testCase.description);
ec('textarea');
let cndtR4d = elABZE5.formHandler.getError(`description`);
this.setState('stZhKOz', cndtR4d);
if (cndtR4d) { 
let el4Neb8 = eo('div','gSzf',null,`class`,`alert alert-danger`);
text(elABZE5.formHandler.getError(`description`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elxtkvQ = eo('div',null,null,`class`,`row`);
let elnxn4u = eo('div',null,null,`class`,`col-sm-6`);
let elrY5Cb = eo('div',null,null,`class`,`form-group`);
elrY5Cb.cls = {'group-error': !!elABZE5.formHandler.getError(`preconditions`) };

            for (let className in elrY5Cb.cls) {
                elrY5Cb.classList.toggle(className, elrY5Cb.cls[className]);
            }  
            let elllARs = eo('label',null,null,`for`,`preconditions`);
text(trans('Test case Preconditions'));
ec('label');
let el43IqG = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.preconditions = this.value;}]},`value`,`${fval(component.testCase.preconditions)}`,`name`,`${(`preconditions`).toInputName()}`,`placeholder`,`${trans(`Test case Preconditions`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`preconditions`);
el43IqG.value = fval(component.testCase.preconditions);
ec('textarea');
ec('div');
ec('div');
let elgyJgX = eo('div',null,null,`class`,`col-sm-6`);
let elYTOFc = eo('div',null,null,`class`,`form-group`);
elYTOFc.cls = {'group-error': !!elABZE5.formHandler.getError(`notes`) };

            for (let className in elYTOFc.cls) {
                elYTOFc.classList.toggle(className, elYTOFc.cls[className]);
            }  
            let eluselw = eo('label',null,null,`for`,`notes`);
text(trans('Test case notes'));
ec('label');
let els5Pj3 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.notes = this.value;}]},`value`,`${fval(component.testCase.notes)}`,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Test case notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
els5Pj3.value = fval(component.testCase.notes);
ec('textarea');
ec('div');
ec('div');
ec('div');
let el1xvPz = eo('div',null,null,`class`,`row`);
let elYRWEg = eo('div',null,null,`class`,`col-sm-6`);
let cmpwZRc = this._lc('ceHROO3u2', {parent:component,parentTop:projectLayout,props:{multiple:true,lazyLoading:true,except:component.testCase.id,value:component.preConditionsTestCasesIds,request:component.requestTestCases.bind(component)},boolAttrs:{multiple:true},attrs:{name:`${(`preConditionsTestCases[]`).toInputName()}`,label:'Pre Conditions Test Cases'}});
ec('div');
let el6Ru0L = eo('div',null,null,`class`,`col-sm-6`);
let cmpj6sV = this._lc('cFLs5m8D9', {parent:component,parentTop:projectLayout,props:{items:PRIORITIES,value:component.testCase.priority},attrs:{name:`${(`priority`).toInputName()}`,label:'Priority',required:''}});
ec('div');
ec('div');
let elAIWmI = eo('div',null,null,`class`,`row`);
let eljZ1eK = eo('div',null,null,`class`,`col-sm-6`);
let elx3wEm = eo('div',null,null,`class`,`form-group`);
elx3wEm.cls = {'group-error': !!elABZE5.formHandler.getError(`postConditions`) };

            for (let className in elx3wEm.cls) {
                elx3wEm.classList.toggle(className, elx3wEm.cls[className]);
            }  
            let elvzWe0 = eo('label',null,null,`for`,`postConditions`);
text(trans('Test case PostConditions'));
ec('label');
let elGbNoq = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.postConditions = this.value;}]},`value`,`${fval(component.testCase.postConditions)}`,`name`,`${(`postConditions`).toInputName()}`,`placeholder`,`${trans(`Test case PostConditions`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`postConditions`);
elGbNoq.value = fval(component.testCase.postConditions);
ec('textarea');
ec('div');
ec('div');
let eljUEMz = eo('div',null,null,`class`,`col-sm-6`);
let elqcJee = eo('div',null,null,`class`,`form-group`);
elqcJee.cls = {'group-error': !!elABZE5.formHandler.getError(`data`) };

            for (let className in elqcJee.cls) {
                elqcJee.classList.toggle(className, elqcJee.cls[className]);
            }  
            let el1wfsc = eo('label',null,null,`for`,`data`);
text(trans('Test case data'));
let elkjaCx = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elWb0Bf = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.data = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elABZE5.formHandler.addError(`data`, 'required', trans('validation.required'));}return elABZE5.formHandler.removeError(`data`);}]},`value`,`${fval(component.testCase.data)}`,`name`,`${(`data`).toInputName()}`,`placeholder`,`${trans(`Test case data`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`data`);
elWb0Bf.value = fval(component.testCase.data);
ec('textarea');
let cndWQXH = elABZE5.formHandler.getError(`data`);
this.setState('st4D8Ay', cndWQXH);
if (cndWQXH) { 
let elrC8KU = eo('div','7nhf',null,`class`,`alert alert-danger`);
text(elABZE5.formHandler.getError(`data`));
ec('div');
}ec('div');
ec('div');
ec('div');
let el3BTT_ = eo('div',null,null,`class`,`row`);
let elZKaFA = eo('div',null,null,`class`,`col-sm-4`);
let elHbVdB = eo('div',null,null,`class`,`form-group`);
elHbVdB.cls = {'group-error': !!elABZE5.formHandler.getError(`stepsToReproduce`) };

            for (let className in elHbVdB.cls) {
                elHbVdB.classList.toggle(className, elHbVdB.cls[className]);
            }  
            let elRxqC4 = eo('label',null,null,`for`,`stepsToReproduce`);
text(trans('Steps To Reproduce'));
let el7y0zi = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elEGrS0 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.stepsToReproduce = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elABZE5.formHandler.addError(`stepsToReproduce`, 'required', trans('validation.required'));}return elABZE5.formHandler.removeError(`stepsToReproduce`);}]},`value`,`${fval(component.testCase.stepsToReproduce)}`,`name`,`${(`stepsToReproduce`).toInputName()}`,`placeholder`,`${trans(`Steps To Reproduce (Each step in one line without numbering the line)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`stepsToReproduce`);
elEGrS0.value = fval(component.testCase.stepsToReproduce);
ec('textarea');
let cndQE8f = elABZE5.formHandler.getError(`stepsToReproduce`);
this.setState('stkpXFB', cndQE8f);
if (cndQE8f) { 
let el2MGaP = eo('div','jDRf',null,`class`,`alert alert-danger`);
text(elABZE5.formHandler.getError(`stepsToReproduce`));
ec('div');
}ec('div');
ec('div');
let eldbCQo = eo('div',null,null,`class`,`col-sm-4`);
let elpt6er = eo('div',null,null,`class`,`form-group`);
elpt6er.cls = {'group-error': !!elABZE5.formHandler.getError(`expectedBehavior`) };

            for (let className in elpt6er.cls) {
                elpt6er.classList.toggle(className, elpt6er.cls[className]);
            }  
            let elvmNJ3 = eo('label',null,null,`for`,`expectedBehavior`);
text(trans('Expected Behavior'));
let el41HSH = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elH9HpA = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.expectedBehavior = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elABZE5.formHandler.addError(`expectedBehavior`, 'required', trans('validation.required'));}return elABZE5.formHandler.removeError(`expectedBehavior`);}]},`value`,`${fval(component.testCase.expectedBehavior)}`,`name`,`${(`expectedBehavior`).toInputName()}`,`placeholder`,`${trans(`Expected Behavior`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`expectedBehavior`);
elH9HpA.value = fval(component.testCase.expectedBehavior);
ec('textarea');
let cnd85p7 = elABZE5.formHandler.getError(`expectedBehavior`);
this.setState('strviq7', cnd85p7);
if (cnd85p7) { 
let ely6qM9 = eo('div','PfRf',null,`class`,`alert alert-danger`);
text(elABZE5.formHandler.getError(`expectedBehavior`));
ec('div');
}ec('div');
ec('div');
let el5lk_q = eo('div',null,null,`class`,`col-sm-4`);
let elz4zw6 = eo('div',null,null,`class`,`form-group`);
elz4zw6.cls = {'group-error': !!elABZE5.formHandler.getError(`actualResult`) };

            for (let className in elz4zw6.cls) {
                elz4zw6.classList.toggle(className, elz4zw6.cls[className]);
            }  
            let elmsPLi = eo('label',null,null,`for`,`actualResult`);
text(trans('Actual Result'));
ec('label');
let elJmH2D = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.actualResult = this.value;}]},`value`,`${fval(component.testCase.actualResult)}`,`name`,`${(`actualResult`).toInputName()}`,`placeholder`,`${trans(`Actual Result`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`actualResult`);
elJmH2D.value = fval(component.testCase.actualResult);
ec('textarea');
ec('div');
ec('div');
ec('div');
let elyXYon = eo('div',null,null,`class`,`m-t-2`);
let cmpAB9r = this._lc('co31dD6WG', {parent:component,parentTop:projectLayout,content:(flkFileInput) => {let elUt7uO = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elrbiIV = eo('strong',null,null,`class`,`ml-1`);
text(`Upload Test Case Automation File`);
ec('strong');
},attrs:{name:`${(`attachment`).toInputName()}`,class:'btn btn-cyan bold',label:'Test Case Automation File'}});
ec('div');
let el8QLnH = eo('div',null,null,`class`,`m-t-1 text-center`);
let el9TvAN = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.testCaseIsOpened = false}]}, boolAttrs, {disabled:component.isSending},`type`,`button`,`class`,`btn btn-danger bold`);
text(`Cancel`);
ec('button');
let el7MoLj = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
}}});
let cndw4r7 = component.modalIsOpened;
this.setState('st_BB6b', cndw4r7);
if (cndw4r7) { 
component.modal = this._lc('cOIvUkTyP', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elOtRo2 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elOtRo2.formHandler) {
                    window.cfrmdlr = elOtRo2.formHandler = new FormHandler(elOtRo2, component);
                } else {
                    window.cfrmdlr = elOtRo2.formHandler;
                }
            let eldtOCp = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
eldtOCp.value = fval(component.project.id);
let elLRDKb = eo('div',null,null,`class`,`form-group`);
elLRDKb.cls = {'group-error': !!elOtRo2.formHandler.getError(`name`) };

            for (let className in elLRDKb.cls) {
                elLRDKb.classList.toggle(className, elLRDKb.cls[className]);
            }  
            let elwu04d = eo('label',null,null,`for`,`name`);
text(trans('Test suit Name'));
let el9NqwM = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elaekUj = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elOtRo2.formHandler.addError(`name`, 'required', trans('validation.required'));}return elOtRo2.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Test suit Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elaekUj.value = fval(component.record.name);
let cnd4tal = elOtRo2.formHandler.getError(`name`);
this.setState('stUqbd1', cnd4tal);
if (cnd4tal) { 
let eltsFib = eo('div','CQPf',null,`class`,`alert alert-danger`);
text(elOtRo2.formHandler.getError(`name`));
ec('div');
}ec('div');
let cmphuEF = this._lc('cVzcrOk2s', {parent:component,parentTop:flkModal,props:{required:true,value:Object.get(component.record.userStory, 'id', ''),lazyLoading:true,request:loadUserStories.bind(component)},attrs:{name:`${(`userStory`).toInputName()}`,label:'User Story'},state:'st_BB6b'});
let elscGvI = eo('div',null,null,`class`,`m-t-1 text-center`);
let elNZzV4 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'st_BB6b'});
}let cndot1x = component.confirmDelete;
this.setState('st3veU9', cndot1x);
if (cndot1x) { 
let cmpXm5i = this._lc('cXnOsyJXV', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},attrs:{message:'Are you sure you want to delete this test suit? This will delete also all related test cases.'},state:'st3veU9'});
}let cndJVZV = component.confirmDeletingTestCase;
this.setState('stvLuN1', cndJVZV);
if (cndJVZV) { 
let cmp60jj = this._lc('cICxQPBRc', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDeletingTestCase = null},onconfirm:function(e) {let $el = this; component.removeTestCase()}},state:'stvLuN1'});
}
                    this.isReadyToGo();
                }
        });