_Component({
                selector: 'project-test-suits-page',
                c: 'ProjectTestSuitsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','testCaseIsOpened','openModal','detectChanges','confirmRemoving','openTestCase','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove','confirmDeletingTestCase','removeTestCase','confirmRemovingTestCase','submitTestCase','testCaseType','testSuit','testCaseHeading','testCase','preConditionsTestCasesIds','requestTestCases'],
                children: {cnU_SwTXc:'flk-dropdown-list',cL4014tM6:'flk-dropdown-list',cZ9x6W0un:'flk-file-input',ckKddYRpe:'project-layout',cNFJERBm6:'flk-dropdown-list',cwE3kke4g:'flk-modal',cJwelMctP:'flk-alert',cl5mds_V0:'flk-alert'},
                render: function (component) {
                    let cmp_qxg = this._lc('ckKddYRpe', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndlvXd = ! component.testCaseIsOpened;
this.setState('st_IvOl', cndlvXd);
if (cndlvXd) { 
let elHI6_Y = eo('button','uhof',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elkyHqI = eo('i','rm1f',null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Test suit`);
ec('button');
let el21N8B = eo('h1','kUzf',null,`class`,`m-y-1`);
text(`${ component.project.name } Test suits
        (${ component.project.testSuits.length })`);
ec('h1');
let elnBUQN = eo('table','gouf',null,`class`,`table table-striped buttoned`);
let elUIpvm = eo('thead','gipf');
let elba8Si = eo('tr','RLNf');
let elobR56 = eo('th','DvTf');
text(`#`);
ec('th');
let elOJBwh = eo('th','nquf');
text(`Name`);
ec('th');
let elUktSK = eo('th','O9Xf');
text(`User Story`);
ec('th');
let el4VhhK = eo('th','gfYf');
text(`Test Cases`);
ec('th');
let el_EizK = eo('th','Qkmf');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elHi0nB = eo('tbody','1q5f');
let cndu5ks = Is.empty(component.project.testSuits);
this.setState('stYxHU8', cndu5ks);
if (cndu5ks) { 
let elo6Ioq = eo('tr','Tdlf');
let elfjiT7 = eo('td','jF8f',null, 'style', {textAlign:'center'},`colspan`,`5`);
text(`No Test suits Yet`);
ec('td');
ec('tr');
}for (let index in component.project.testSuits) {
let record = component.project.testSuits[index]; 
 let iipC3h = record.id+ index;
let elRS8dg = eo('tr','6y2h0XDyLvd2' + index+iipC3h);
let elqZSGs = eo('td','e3dff'+iipC3h);
text(record.id);
ec('td');
let elRkhC0 = eo('td','gCkff'+iipC3h);
text(record.name);
ec('td');
let elY9Rjz = eo('td','yR5ff'+iipC3h,null,`title`,``);
text(record.userStory.title.readMoreChars(20));
ec('td');

                    setTimeout(function () {
                        let $el = elY9Rjz;
                        
            true && tippyTooltip($el, {arrow:true,content:`${record.userStory.title}`});
        ;
                    }, 20);                
                let elOhxTC = eo('td','XAyff'+iipC3h);
let elnfddJ = eo('a','bp6ff'+iipC3h,null, eventListeners, {onclick:[function(e) {var $el = this;record.viewTestCases = ! record.viewTestCases; component.detectChanges()}]},`href`,`#`);
let elyuLBg = eo('span','L09ff'+iipC3h);
text(record.testCases.length);
ec('span');
ec('a');
ec('td');
let elz2ilg = eo('td','b_gff'+iipC3h);
let cnd9UcZ = record.canBeModified;
this.setState('sthtGpO', cnd9UcZ);
if (cnd9UcZ) { 
let elCo79E = eo('button','gZEff'+iipC3h,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elXT6Rs = eo('i','EpQff'+iipC3h,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elCo79E;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Test suit')}`});
        ;
                    }, 20);                
                let elmivgQ = eo('button','14Zff'+iipC3h,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elN28xE = eo('i','b79ff'+iipC3h,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elmivgQ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Test suit')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
let cndEv8e = record.viewTestCases;
this.setState('steFQwM', cndEv8e);
if (cndEv8e) { 
let el0pV8h = eo('tr','GP1ff'+iipC3h);
for (let i in ['positive', 'negative']) {
let type = ['positive', 'negative'][i]; 
 let ii14HE = 'v3uJBjH' + i;
let elZKyMO = eo('td','nLsncT80q6vG' + i+iipC3h+ii14HE,null,`colspan`,`2`,`class`,`test-case-type v-top text-center ${ type }`);
let elMQDUS = eo('h4','GtFff'+iipC3h+ii14HE,null,`class`,`bold text-capitalize ${cls({'green-text': type == 'positive', 'red-text': type == 'negative'})}`);
text(`${ type }
                            (${ record.testCasesList[type] ? record.testCasesList[type].length : 0 })`);
let elEbj7u = eo('button','s39ff'+iipC3h+ii14HE,null, eventListeners, {onclick:[function(e) {var $el = this;component.openTestCase(type, record, {}, null, index)}]},`class`,`btn btn-sm btn-circle ${cls({'btn-success': type == 'positive', 'btn-danger': type == 'negative'})}`,`title`,``,`type`,`button`);
let elWebjp = eo('i','qkiff'+iipC3h+ii14HE,null,`class`,`${fas('plus')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elEbj7u;
                        
            true && tippyTooltip($el, {arrow:true,content:`Add new ${ type } test case`});
        ;
                    }, 20);                
                ec('h4');
let cndyiBy = record.testCasesList[type];
this.setState('stWG5CU', cndyiBy);
if (cndyiBy) { 
let elXYIfU = eo('div','KLSff'+iipC3h+ii14HE,null,`class`,`table-responsive test-cases-list`);
let elPHMnB = eo('table','Srpff'+iipC3h+ii14HE,null,`class`,`table table-bordered`);
let elTYGas = eo('thead','y9Yff'+iipC3h+ii14HE);
let elp3JPw = eo('tr','Ggoff'+iipC3h+ii14HE);
let elfYRxk = eo('th','PJqff'+iipC3h+ii14HE);
text(`#`);
ec('th');
let elwFcuj = eo('th','U2Mff'+iipC3h+ii14HE);
text(`Test Case`);
ec('th');
let elRTpu7 = eo('th','bNfff'+iipC3h+ii14HE);
text(`Priority`);
ec('th');
let el4exlJ = eo('th','j6kff'+iipC3h+ii14HE);
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elSui70 = eo('tbody','YBpff'+iipC3h+ii14HE);
for (let testCaseIndex in record.testCasesList[type]) {
let testCase = record.testCasesList[type][testCaseIndex]; 
 let iimOZt = '7o5Ae9t' + testCaseIndex;
let elfp5wZ = eo('tr','qtCE2MA7Bts_' + testCaseIndex+iipC3h+ii14HE+iimOZt);
let el_gC47 = eo('td','AQ2ff'+iipC3h+ii14HE+iimOZt);
text(testCase.id);
ec('td');
let elGIyBt = eo('td','GUsff'+iipC3h+ii14HE+iimOZt);
let el3zahc = eo('a','LQkff'+iipC3h+ii14HE+iimOZt,null,`href`,`${URLS.project(component.project, 'test-cases', testCase)}`);
text(testCase.title);
ec('a');
ec('td');
let el5NhTZ = eo('td','iIQff'+iipC3h+ii14HE+iimOZt);
text(testCase.priority);
ec('td');
let el7hdDM = eo('td','Q6Lff'+iipC3h+ii14HE+iimOZt);
let cndILsu = testCase.canBeModified;
this.setState('st8J91N', cndILsu);
if (cndILsu) { 
let el3_uHM = eo('button','BAYff'+iipC3h+ii14HE+iimOZt,null, eventListeners, {onclick:[function(e) {var $el = this;component.openTestCase(type, record, testCase, testCaseIndex, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-purple btn-sm btn-circle`);
let elLXIuG = eo('i','u9Lff'+iipC3h+ii14HE+iimOZt,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el3_uHM;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Test case')}`});
        ;
                    }, 20);                
                let elrjXiA = eo('button','ic6ff'+iipC3h+ii14HE+iimOZt,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemovingTestCase(testCase, testCaseIndex, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elYRWwI = eo('i','UU2ff'+iipC3h+ii14HE+iimOZt,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elrjXiA;
                        
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
}let cndfbon = component.testCaseIsOpened;
this.setState('stzcIce', cndfbon);
if (cndfbon) { 
let elUacmU = eo('form','Dw_f',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitTestCase($el)}]});

                if (! elUacmU.formHandler) {
                    window.cfrmdlr = elUacmU.formHandler = new FormHandler(elUacmU, component);
                } else {
                    window.cfrmdlr = elUacmU.formHandler;
                }
            let elubaSl = ev('input','2Tlf',null, eventListeners, {oninput:[function(e) {component.testCaseType = this.value;}]},`value`,`${fval(component.testCaseType)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elubaSl.value = fval(component.testCaseType);
let el_CGBk = ev('input','5tzf',null, eventListeners, {oninput:[function(e) {component.testSuit.id = this.value;}]},`value`,`${fval(component.testSuit.id)}`,`name`,`${(`testSuit`).toInputName()}`,`type`,`hidden`);
el_CGBk.value = fval(component.testSuit.id);
let elO6JrO = ev('input','Vhmf',null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elO6JrO.value = fval(component.project.id);
let el3WN_m = eo('h1','769f');
text(component.testCaseHeading);
ec('h1');
let el4swTt = eo('div','92Bf',null,`class`,`row`);
let elvktGp = eo('div','huXf',null,`class`,`col-sm-6`);
ec('div');
let ely5b6Z = eo('div','i4tf',null,`class`,`col-sm-6`);
ec('div');
ec('div');
let elL8gqx = eo('div','VPWf',null,`class`,`row`);
let els7wR_ = eo('div','hWcf',null,`class`,`col-sm-12`);
let elPpt_q = eo('div','M9tf',null,`class`,`form-group ${cls({'group-error': !!elUacmU.formHandler.getError(`title`) })}`);
let elhFZsp = eo('label','a_kf',null,`for`,`title`);
text(trans('Test case title'));
let eluZeGY = eo('span','ocHf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elKKSnm = ev('input','7mJf',null, eventListeners, {oninput:[function(e) {component.testCase.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUacmU.formHandler.addError(`title`, 'required', trans('validation.required'));}return elUacmU.formHandler.removeError(`title`);}]},`value`,`${fval(component.testCase.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Test case title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elKKSnm.value = fval(component.testCase.title);
let cndubm7 = elUacmU.formHandler.getError(`title`);
this.setState('st4lGj3', cndubm7);
if (cndubm7) { 
let elG1YVo = eo('div','0Mxf',null,`class`,`alert alert-danger`);
text(elUacmU.formHandler.getError(`title`));
ec('div');
}ec('div');
ec('div');
let elZRMLq = eo('div',null,null,`class`,`col-sm-12`);
let elEuJjt = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elUacmU.formHandler.getError(`description`) })}`);
let elsNCvu = eo('label',null,null,`for`,`description`);
text(trans('Test case description'));
let elAWP_y = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elrbsRK = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUacmU.formHandler.addError(`description`, 'required', trans('validation.required'));}return elUacmU.formHandler.removeError(`description`);}]},`value`,`${fval(component.testCase.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Test case description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elrbsRK.value = fval(component.testCase.description);
ec('textarea');
let cndJF9S = elUacmU.formHandler.getError(`description`);
this.setState('st1DSOX', cndJF9S);
if (cndJF9S) { 
let elLFKB5 = eo('div','25hf',null,`class`,`alert alert-danger`);
text(elUacmU.formHandler.getError(`description`));
ec('div');
}ec('div');
ec('div');
ec('div');
let el94Ojy = eo('div',null,null,`class`,`row`);
let elNYMRn = eo('div',null,null,`class`,`col-sm-6`);
let el7EDzd = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elUacmU.formHandler.getError(`preconditions`) })}`);
let elz_rl_ = eo('label',null,null,`for`,`preconditions`);
text(trans('Test case Preconditions'));
ec('label');
let elZqBF8 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.preconditions = this.value;}]},`value`,`${fval(component.testCase.preconditions)}`,`name`,`${(`preconditions`).toInputName()}`,`placeholder`,`${trans(`Test case Preconditions`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`preconditions`);
elZqBF8.value = fval(component.testCase.preconditions);
ec('textarea');
ec('div');
ec('div');
let eldJIHQ = eo('div',null,null,`class`,`col-sm-6`);
let el0AT9w = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elUacmU.formHandler.getError(`notes`) })}`);
let el5N1P8 = eo('label',null,null,`for`,`notes`);
text(trans('Test case notes'));
ec('label');
let ely0of_ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.notes = this.value;}]},`value`,`${fval(component.testCase.notes)}`,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Test case notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
ely0of_.value = fval(component.testCase.notes);
ec('textarea');
ec('div');
ec('div');
ec('div');
let elFB28Y = eo('div',null,null,`class`,`row`);
let elCTbgd = eo('div',null,null,`class`,`col-sm-6`);
let cmpHomb = this._lc('cnU_SwTXc', {parent:component,parentTop:projectLayout,props:{multiple:true,lazyLoading:true,except:component.testCase.id,value:component.preConditionsTestCasesIds,request:component.requestTestCases.bind(component)},boolAttrs:{multiple:true},attrs:{name:`${(`preConditionsTestCases[]`).toInputName()}`,label:'Pre Conditions Test Cases'}});
ec('div');
let el0kc4q = eo('div',null,null,`class`,`col-sm-6`);
let cmp3RRd = this._lc('cL4014tM6', {parent:component,parentTop:projectLayout,props:{items:PRIORITIES,value:component.testCase.priority},attrs:{name:`${(`priority`).toInputName()}`,label:'Priority',required:''}});
ec('div');
ec('div');
let elpPVKv = eo('div',null,null,`class`,`row`);
let elEmPVc = eo('div',null,null,`class`,`col-sm-6`);
let el9ttmR = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elUacmU.formHandler.getError(`postConditions`) })}`);
let elzx9E1 = eo('label',null,null,`for`,`postConditions`);
text(trans('Test case PostConditions'));
ec('label');
let elPiKcU = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.postConditions = this.value;}]},`value`,`${fval(component.testCase.postConditions)}`,`name`,`${(`postConditions`).toInputName()}`,`placeholder`,`${trans(`Test case PostConditions`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`postConditions`);
elPiKcU.value = fval(component.testCase.postConditions);
ec('textarea');
ec('div');
ec('div');
let eljZDnS = eo('div',null,null,`class`,`col-sm-6`);
let el9YR4k = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elUacmU.formHandler.getError(`data`) })}`);
let elKHPmY = eo('label',null,null,`for`,`data`);
text(trans('Test case data'));
let elq4ypT = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elYu3S3 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.data = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUacmU.formHandler.addError(`data`, 'required', trans('validation.required'));}return elUacmU.formHandler.removeError(`data`);}]},`value`,`${fval(component.testCase.data)}`,`name`,`${(`data`).toInputName()}`,`placeholder`,`${trans(`Test case data`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`data`);
elYu3S3.value = fval(component.testCase.data);
ec('textarea');
let cnd14hM = elUacmU.formHandler.getError(`data`);
this.setState('stW6LQZ', cnd14hM);
if (cnd14hM) { 
let elKj10x = eo('div','gNMf',null,`class`,`alert alert-danger`);
text(elUacmU.formHandler.getError(`data`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elnALdj = eo('div',null,null,`class`,`row`);
let elMFdgQ = eo('div',null,null,`class`,`col-sm-4`);
let elkTf47 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elUacmU.formHandler.getError(`stepsToReproduce`) })}`);
let el2j2lZ = eo('label',null,null,`for`,`stepsToReproduce`);
text(trans('Steps To Reproduce'));
let eldRCez = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elLQfOO = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.stepsToReproduce = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUacmU.formHandler.addError(`stepsToReproduce`, 'required', trans('validation.required'));}return elUacmU.formHandler.removeError(`stepsToReproduce`);}]},`value`,`${fval(component.testCase.stepsToReproduce)}`,`name`,`${(`stepsToReproduce`).toInputName()}`,`placeholder`,`${trans(`Steps To Reproduce (Each step in one line without numbering the line)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`stepsToReproduce`);
elLQfOO.value = fval(component.testCase.stepsToReproduce);
ec('textarea');
let cnd6xht = elUacmU.formHandler.getError(`stepsToReproduce`);
this.setState('stsUC8t', cnd6xht);
if (cnd6xht) { 
let el6At5u = eo('div','G3jf',null,`class`,`alert alert-danger`);
text(elUacmU.formHandler.getError(`stepsToReproduce`));
ec('div');
}ec('div');
ec('div');
let elUxcLn = eo('div',null,null,`class`,`col-sm-4`);
let elCDsGh = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elUacmU.formHandler.getError(`expectedBehavior`) })}`);
let elOkzhH = eo('label',null,null,`for`,`expectedBehavior`);
text(trans('Expected Behavior'));
let elOfUva = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el1r8ZS = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.expectedBehavior = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUacmU.formHandler.addError(`expectedBehavior`, 'required', trans('validation.required'));}return elUacmU.formHandler.removeError(`expectedBehavior`);}]},`value`,`${fval(component.testCase.expectedBehavior)}`,`name`,`${(`expectedBehavior`).toInputName()}`,`placeholder`,`${trans(`Expected Behavior`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`expectedBehavior`);
el1r8ZS.value = fval(component.testCase.expectedBehavior);
ec('textarea');
let cndFmDQ = elUacmU.formHandler.getError(`expectedBehavior`);
this.setState('stX7tSs', cndFmDQ);
if (cndFmDQ) { 
let elKdMNT = eo('div','94Rf',null,`class`,`alert alert-danger`);
text(elUacmU.formHandler.getError(`expectedBehavior`));
ec('div');
}ec('div');
ec('div');
let elSfgsI = eo('div',null,null,`class`,`col-sm-4`);
let elpdVOA = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elUacmU.formHandler.getError(`actualResult`) })}`);
let elrVSr4 = eo('label',null,null,`for`,`actualResult`);
text(trans('Actual Result'));
ec('label');
let elgmWUN = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.actualResult = this.value;}]},`value`,`${fval(component.testCase.actualResult)}`,`name`,`${(`actualResult`).toInputName()}`,`placeholder`,`${trans(`Actual Result`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`actualResult`);
elgmWUN.value = fval(component.testCase.actualResult);
ec('textarea');
ec('div');
ec('div');
ec('div');
let elRKEN5 = eo('div',null,null,`class`,`m-t-2`);
let cmpPV5A = this._lc('cZ9x6W0un', {parent:component,parentTop:projectLayout,content:(flkFileInput) => {let eltm4c0 = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let eln_jym = eo('strong',null,null,`class`,`ml-1`);
text(`Upload Test Case Automation File`);
ec('strong');
},attrs:{name:`${(`attachment`).toInputName()}`,class:'btn btn-cyan bold',label:'Test Case Automation File'}});
ec('div');
let el04Sym = eo('div',null,null,`class`,`m-t-1 text-center`);
let elJkL32 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.testCaseIsOpened = false}]}, boolAttrs, {disabled:component.isSending},`type`,`button`,`class`,`btn btn-danger bold`);
text(`Cancel`);
ec('button');
let elu2vhS = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
}}});
let cndXVpF = component.modalIsOpened;
this.setState('stIbEFP', cndXVpF);
if (cndXVpF) { 
component.modal = this._lc('cwE3kke4g', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let el8_oMl = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el8_oMl.formHandler) {
                    window.cfrmdlr = el8_oMl.formHandler = new FormHandler(el8_oMl, component);
                } else {
                    window.cfrmdlr = el8_oMl.formHandler;
                }
            let elX3Jln = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elX3Jln.value = fval(component.project.id);
let elqH0k6 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el8_oMl.formHandler.getError(`name`) })}`);
let elYe5Y_ = eo('label',null,null,`for`,`name`);
text(trans('Test suit Name'));
let elym18E = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eldrVas = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el8_oMl.formHandler.addError(`name`, 'required', trans('validation.required'));}return el8_oMl.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Test suit Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
eldrVas.value = fval(component.record.name);
let cndfDqa = el8_oMl.formHandler.getError(`name`);
this.setState('st0OprD', cndfDqa);
if (cndfDqa) { 
let elp8A0U = eo('div','jnef',null,`class`,`alert alert-danger`);
text(el8_oMl.formHandler.getError(`name`));
ec('div');
}ec('div');
let cmpCRuU = this._lc('cNFJERBm6', {parent:component,parentTop:flkModal,props:{required:true,value:Object.get(component.record.userStory, 'id', ''),lazyLoading:true,request:loadUserStories.bind(component)},attrs:{name:`${(`userStory`).toInputName()}`,label:'User Story'},state:'stIbEFP'});
let el3u7MI = eo('div',null,null,`class`,`m-t-1 text-center`);
let elKdX2u = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stIbEFP'});
}let cndCiBY = component.confirmDelete;
this.setState('stBff1j', cndCiBY);
if (cndCiBY) { 
let cmpAPUh = this._lc('cJwelMctP', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},attrs:{message:'Are you sure you want to delete this test suit? This will delete also all related test cases.'},state:'stBff1j'});
}let cndTe8O = component.confirmDeletingTestCase;
this.setState('stlR5d4', cndTe8O);
if (cndTe8O) { 
let cmpPG8K = this._lc('cl5mds_V0', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDeletingTestCase = null},onconfirm:function(e) {let $el = this; component.removeTestCase()}},state:'stlR5d4'});
}
                    this.isReadyToGo();
                }
        });