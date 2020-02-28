_Component({
                selector: 'project-test-suits-page',
                c: 'ProjectTestSuitsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','testCaseIsOpened','openModal','detectChanges','confirmRemoving','openTestCase','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove','confirmDeletingTestCase','removeTestCase','confirmRemovingTestCase','submitTestCase','testCaseType','testSuit','testCaseHeading','testCase','preConditionsTestCasesIds','requestTestCases'],
                children: {chq0Hj6cH:'flk-dropdown-list',cf_VZn525:'flk-dropdown-list',ckcIRjFsI:'flk-file-input',cn7xYCpzJ:'project-layout',ckrvyQJ98:'flk-dropdown-list',c_B2P_DiD:'flk-modal',cJuX8gXkV:'flk-alert',c9ZqumsNr:'flk-alert'},
                render: function (component) {
                    let cmprjkB = this._lc('cn7xYCpzJ', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndVjL4 = ! component.testCaseIsOpened;
this.setState('stWm5U8', cndVjL4);
if (cndVjL4) { 
let ellvI4D = eo('button','693f',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elehcNF = eo('i','hngf',null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Test suit`);
ec('button');
let elPuD6l = eo('h1','mUWf',null,`class`,`m-y-1`);
text(`${ component.project.name } Test suits
        (${ component.project.testSuits.length })`);
ec('h1');
let elfQDhH = eo('table','r21f',null,`class`,`table table-striped buttoned`);
let elBC95R = eo('thead','fzef');
let elca8U2 = eo('tr','UIVf');
let elqTWeI = eo('th','TBVf');
text(`#`);
ec('th');
let elWWPoe = eo('th','Iusf');
text(`Name`);
ec('th');
let elSOtnE = eo('th','a3Lf');
text(`User Story`);
ec('th');
let elwVxue = eo('th','jJMf');
text(`Test Cases`);
ec('th');
let el_51Td = eo('th','qSJf');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let el5YYhJ = eo('tbody','Jujf');
let cndTRqg = Is.empty(component.project.testSuits);
this.setState('st2EpN0', cndTRqg);
if (cndTRqg) { 
let elQtdH5 = eo('tr','QCMf');
let elsMlar = eo('td','c0Yf',null, 'style', {textAlign:'center'},`colspan`,`5`);
text(`No Test suits Yet`);
ec('td');
ec('tr');
}for (let index in component.project.testSuits) {
let record = component.project.testSuits[index]; 
 let ii_tbk = record.id+ index;
let eleoxDQ = eo('tr','XvDABQUAF5jj' + index+ii_tbk);
let elvrJMG = eo('td','Lwnff'+ii_tbk);
text(record.id);
ec('td');
let elgxhGT = eo('td','SH1ff'+ii_tbk);
text(record.name);
ec('td');
let elzFx9W = eo('td','fuJff'+ii_tbk,null,`title`,``);
text(record.userStory.title.readMoreChars(20));
ec('td');

                    setTimeout(function () {
                        let $el = elzFx9W;
                        
            true && tippyTooltip($el, {arrow:true,content:`${record.userStory.title}`});
        ;
                    }, 20);                
                let elJXZnu = eo('td','Sjvff'+ii_tbk);
let elotQMZ = eo('a','mZCff'+ii_tbk,null, eventListeners, {onclick:[function(e) {var $el = this;record.viewTestCases = ! record.viewTestCases; component.detectChanges()}]},`href`,`#`);
let elDiSun = eo('span','34fff'+ii_tbk);
text(record.testCases.length);
ec('span');
ec('a');
ec('td');
let elRJ0aN = eo('td','wScff'+ii_tbk);
let cnd3noT = record.canBeModified;
this.setState('stA4yXS', cnd3noT);
if (cnd3noT) { 
let elb7OtU = eo('button','y8eff'+ii_tbk,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elP8NGJ = eo('i','7O8ff'+ii_tbk,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elb7OtU;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Test suit')}`});
        ;
                    }, 20);                
                let elqN0yT = eo('button','awgff'+ii_tbk,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elFNxX8 = eo('i','PNoff'+ii_tbk,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elqN0yT;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Test suit')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
let cndzVbT = record.viewTestCases;
this.setState('stiXwDh', cndzVbT);
if (cndzVbT) { 
let elnWJxO = eo('tr','AsEff'+ii_tbk);
for (let i in ['positive', 'negative']) {
let type = ['positive', 'negative'][i]; 
 let iiL5HS = 'PTpSQfa' + i;
let elJgZVT = eo('td','hyK91IOi383A' + i+ii_tbk+iiL5HS,null,`colspan`,`2`,`class`,`test-case-type v-top text-center ${ type }`);
let elI3YTT = eo('h4','XgBff'+ii_tbk+iiL5HS,null,`class`,`bold text-capitalize ${cls({'green-text': type == 'positive', 'red-text': type == 'negative'})}`);
text(`${ type }
                            (${ record.testCasesList[type] ? record.testCasesList[type].length : 0 })`);
let elOvXly = eo('button','zXBff'+ii_tbk+iiL5HS,null, eventListeners, {onclick:[function(e) {var $el = this;component.openTestCase(type, record, {}, null, index)}]},`class`,`btn btn-sm btn-circle ${cls({'btn-success': type == 'positive', 'btn-danger': type == 'negative'})}`,`title`,``,`type`,`button`);
let elzVeaC = eo('i','9Y9ff'+ii_tbk+iiL5HS,null,`class`,`${fas('plus')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elOvXly;
                        
            true && tippyTooltip($el, {arrow:true,content:`Add new ${ type } test case`});
        ;
                    }, 20);                
                ec('h4');
let cnd53CO = record.testCasesList[type];
this.setState('stPBouW', cnd53CO);
if (cnd53CO) { 
let elMKE_F = eo('div','Vecff'+ii_tbk+iiL5HS,null,`class`,`table-responsive test-cases-list`);
let elhzGes = eo('table','HRLff'+ii_tbk+iiL5HS,null,`class`,`table table-bordered`);
let elOIulo = eo('thead','H3Tff'+ii_tbk+iiL5HS);
let elPJtpH = eo('tr','EYIff'+ii_tbk+iiL5HS);
let el68iHD = eo('th','WFEff'+ii_tbk+iiL5HS);
text(`#`);
ec('th');
let el6gFG7 = eo('th','BNlff'+ii_tbk+iiL5HS);
text(`Test Case`);
ec('th');
let el5Bhm1 = eo('th','_N6ff'+ii_tbk+iiL5HS);
text(`Priority`);
ec('th');
let eljH6oj = eo('th','cCUff'+ii_tbk+iiL5HS);
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let el0PhaB = eo('tbody','MvEff'+ii_tbk+iiL5HS);
for (let testCaseIndex in record.testCasesList[type]) {
let testCase = record.testCasesList[type][testCaseIndex]; 
 let iiDVeE = '1_cvh21' + testCaseIndex;
let el9HS7k = eo('tr','e2jRvVLnCaf5' + testCaseIndex+ii_tbk+iiL5HS+iiDVeE);
let elikMr0 = eo('td','DLhff'+ii_tbk+iiL5HS+iiDVeE);
text(testCase.id);
ec('td');
let elMS5ei = eo('td','vK3ff'+ii_tbk+iiL5HS+iiDVeE);
let elFa6nm = eo('a','3ziff'+ii_tbk+iiL5HS+iiDVeE,null,`href`,`${URLS.project(component.project, 'test-cases', testCase)}`);
text(testCase.title);
ec('a');
ec('td');
let elqBb0L = eo('td','nzgff'+ii_tbk+iiL5HS+iiDVeE);
text(testCase.priority);
ec('td');
let elidKzs = eo('td','Shsff'+ii_tbk+iiL5HS+iiDVeE);
let cndOfS9 = testCase.canBeModified;
this.setState('stuET0w', cndOfS9);
if (cndOfS9) { 
let elpTnOj = eo('button','3dSff'+ii_tbk+iiL5HS+iiDVeE,null, eventListeners, {onclick:[function(e) {var $el = this;component.openTestCase(type, record, testCase, testCaseIndex, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-purple btn-sm btn-circle`);
let elUQ2r9 = eo('i','Lurff'+ii_tbk+iiL5HS+iiDVeE,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elpTnOj;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Test case')}`});
        ;
                    }, 20);                
                let elS_6wB = eo('button','oKmff'+ii_tbk+iiL5HS+iiDVeE,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemovingTestCase(testCase, testCaseIndex, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elys0Dx = eo('i','Ekkff'+ii_tbk+iiL5HS+iiDVeE,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elS_6wB;
                        
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
}let cndPMov = component.testCaseIsOpened;
this.setState('stMpqBm', cndPMov);
if (cndPMov) { 
let eldCfCL = eo('form','aRsf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitTestCase($el)}]});

                if (! eldCfCL.formHandler) {
                    window.cfrmdlr = eldCfCL.formHandler = new FormHandler(eldCfCL, component);
                } else {
                    window.cfrmdlr = eldCfCL.formHandler;
                }
            let elQem0d = ev('input','DBuf',null, eventListeners, {oninput:[function(e) {component.testCaseType = this.value;}]},`value`,`${fval(component.testCaseType)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elQem0d.value = fval(component.testCaseType);
let el0ncq9 = ev('input','qGVf',null, eventListeners, {oninput:[function(e) {component.testSuit.id = this.value;}]},`value`,`${fval(component.testSuit.id)}`,`name`,`${(`testSuit`).toInputName()}`,`type`,`hidden`);
el0ncq9.value = fval(component.testSuit.id);
let elCw41s = ev('input','jLbf',null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elCw41s.value = fval(component.project.id);
let elphQA1 = eo('h1','y2Wf');
text(component.testCaseHeading);
ec('h1');
let elyONSZ = eo('div','4Z_f',null,`class`,`row`);
let eldkEOg = eo('div','FY8f',null,`class`,`col-sm-6`);
ec('div');
let ele27kr = eo('div','oGrf',null,`class`,`col-sm-6`);
ec('div');
ec('div');
let elIYUJI = eo('div','BqNf',null,`class`,`row`);
let el4CAxd = eo('div','0V_f',null,`class`,`col-sm-12`);
let elNTqph = eo('div','8Pzf',null,`class`,`form-group ${cls({'group-error': !!eldCfCL.formHandler.getError(`title`) })}`);
let el05pZ4 = eo('label','HMQf',null,`for`,`title`);
text(trans('Test case title'));
let el1k3n9 = eo('span','f7Sf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el4x_Vi = ev('input','2ltf',null, eventListeners, {oninput:[function(e) {component.testCase.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eldCfCL.formHandler.addError(`title`, 'required', trans('validation.required'));}return eldCfCL.formHandler.removeError(`title`);}]},`value`,`${fval(component.testCase.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Test case title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el4x_Vi.value = fval(component.testCase.title);
let cndkdOh = eldCfCL.formHandler.getError(`title`);
this.setState('stFlz_Y', cndkdOh);
if (cndkdOh) { 
let elcQ0kn = eo('div','Z2kf',null,`class`,`alert alert-danger`);
text(eldCfCL.formHandler.getError(`title`));
ec('div');
}ec('div');
ec('div');
let elqDN7s = eo('div',null,null,`class`,`col-sm-12`);
let el6Bpki = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!eldCfCL.formHandler.getError(`description`) })}`);
let elKJpX2 = eo('label',null,null,`for`,`description`);
text(trans('Test case description'));
let elT5HZt = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elJrs4r = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eldCfCL.formHandler.addError(`description`, 'required', trans('validation.required'));}return eldCfCL.formHandler.removeError(`description`);}]},`value`,`${fval(component.testCase.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Test case description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elJrs4r.value = fval(component.testCase.description);
ec('textarea');
let cndMNxz = eldCfCL.formHandler.getError(`description`);
this.setState('stkEn0n', cndMNxz);
if (cndMNxz) { 
let elqR8L6 = eo('div','gN6f',null,`class`,`alert alert-danger`);
text(eldCfCL.formHandler.getError(`description`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elOdZe8 = eo('div',null,null,`class`,`row`);
let elyUVgN = eo('div',null,null,`class`,`col-sm-6`);
let elFEZTh = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!eldCfCL.formHandler.getError(`preconditions`) })}`);
let elyYJss = eo('label',null,null,`for`,`preconditions`);
text(trans('Test case Preconditions'));
ec('label');
let el6Nl0Q = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.preconditions = this.value;}]},`value`,`${fval(component.testCase.preconditions)}`,`name`,`${(`preconditions`).toInputName()}`,`placeholder`,`${trans(`Test case Preconditions`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`preconditions`);
el6Nl0Q.value = fval(component.testCase.preconditions);
ec('textarea');
ec('div');
ec('div');
let elhT0k3 = eo('div',null,null,`class`,`col-sm-6`);
let eliEaYU = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!eldCfCL.formHandler.getError(`notes`) })}`);
let elG21dM = eo('label',null,null,`for`,`notes`);
text(trans('Test case notes'));
ec('label');
let elREsxo = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.notes = this.value;}]},`value`,`${fval(component.testCase.notes)}`,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Test case notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
elREsxo.value = fval(component.testCase.notes);
ec('textarea');
ec('div');
ec('div');
ec('div');
let elmSUlM = eo('div',null,null,`class`,`row`);
let elzn9a3 = eo('div',null,null,`class`,`col-sm-6`);
let cmpQo3d = this._lc('chq0Hj6cH', {parent:component,parentTop:projectLayout,props:{multiple:true,lazyLoading:true,except:component.testCase.id,value:component.preConditionsTestCasesIds,request:component.requestTestCases.bind(component)},boolAttrs:{multiple:true},attrs:{name:`${(`preConditionsTestCases[]`).toInputName()}`,label:'Pre Conditions Test Cases'}});
ec('div');
let el1FaxS = eo('div',null,null,`class`,`col-sm-6`);
let cmpha6S = this._lc('cf_VZn525', {parent:component,parentTop:projectLayout,props:{items:PRIORITIES,value:component.testCase.priority},attrs:{name:`${(`priority`).toInputName()}`,label:'Priority',required:''}});
ec('div');
ec('div');
let elyKbjZ = eo('div',null,null,`class`,`row`);
let el2Y_KU = eo('div',null,null,`class`,`col-sm-6`);
let elKWGW5 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!eldCfCL.formHandler.getError(`postConditions`) })}`);
let elmEfjv = eo('label',null,null,`for`,`postConditions`);
text(trans('Test case PostConditions'));
ec('label');
let elNWNM3 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.postConditions = this.value;}]},`value`,`${fval(component.testCase.postConditions)}`,`name`,`${(`postConditions`).toInputName()}`,`placeholder`,`${trans(`Test case PostConditions`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`postConditions`);
elNWNM3.value = fval(component.testCase.postConditions);
ec('textarea');
ec('div');
ec('div');
let elluBEK = eo('div',null,null,`class`,`col-sm-6`);
let elExg9r = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!eldCfCL.formHandler.getError(`data`) })}`);
let eltZnJv = eo('label',null,null,`for`,`data`);
text(trans('Test case data'));
let elTHPyc = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elXDjyo = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.data = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eldCfCL.formHandler.addError(`data`, 'required', trans('validation.required'));}return eldCfCL.formHandler.removeError(`data`);}]},`value`,`${fval(component.testCase.data)}`,`name`,`${(`data`).toInputName()}`,`placeholder`,`${trans(`Test case data`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`data`);
elXDjyo.value = fval(component.testCase.data);
ec('textarea');
let cndwLfB = eldCfCL.formHandler.getError(`data`);
this.setState('st33xIH', cndwLfB);
if (cndwLfB) { 
let elqP6BQ = eo('div','Kyxf',null,`class`,`alert alert-danger`);
text(eldCfCL.formHandler.getError(`data`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elAYQyX = eo('div',null,null,`class`,`row`);
let eleOuoS = eo('div',null,null,`class`,`col-sm-4`);
let elR9ahz = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!eldCfCL.formHandler.getError(`stepsToReproduce`) })}`);
let elJCy5v = eo('label',null,null,`for`,`stepsToReproduce`);
text(trans('Steps To Reproduce'));
let eloYxNS = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elqp5Qq = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.stepsToReproduce = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eldCfCL.formHandler.addError(`stepsToReproduce`, 'required', trans('validation.required'));}return eldCfCL.formHandler.removeError(`stepsToReproduce`);}]},`value`,`${fval(component.testCase.stepsToReproduce)}`,`name`,`${(`stepsToReproduce`).toInputName()}`,`placeholder`,`${trans(`Steps To Reproduce (Each step in one line without numbering the line)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`stepsToReproduce`);
elqp5Qq.value = fval(component.testCase.stepsToReproduce);
ec('textarea');
let cndcSzu = eldCfCL.formHandler.getError(`stepsToReproduce`);
this.setState('st6iDgr', cndcSzu);
if (cndcSzu) { 
let elyZH30 = eo('div','pkEf',null,`class`,`alert alert-danger`);
text(eldCfCL.formHandler.getError(`stepsToReproduce`));
ec('div');
}ec('div');
ec('div');
let el0ZTp4 = eo('div',null,null,`class`,`col-sm-4`);
let elCgt2x = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!eldCfCL.formHandler.getError(`expectedBehavior`) })}`);
let elhnNLf = eo('label',null,null,`for`,`expectedBehavior`);
text(trans('Expected Behavior'));
let elBsRi1 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elAuLn6 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.expectedBehavior = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eldCfCL.formHandler.addError(`expectedBehavior`, 'required', trans('validation.required'));}return eldCfCL.formHandler.removeError(`expectedBehavior`);}]},`value`,`${fval(component.testCase.expectedBehavior)}`,`name`,`${(`expectedBehavior`).toInputName()}`,`placeholder`,`${trans(`Expected Behavior`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`expectedBehavior`);
elAuLn6.value = fval(component.testCase.expectedBehavior);
ec('textarea');
let cndiJN0 = eldCfCL.formHandler.getError(`expectedBehavior`);
this.setState('stagBds', cndiJN0);
if (cndiJN0) { 
let elSTHI2 = eo('div','2aWf',null,`class`,`alert alert-danger`);
text(eldCfCL.formHandler.getError(`expectedBehavior`));
ec('div');
}ec('div');
ec('div');
let elTSgj4 = eo('div',null,null,`class`,`col-sm-4`);
let elXtfmf = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!eldCfCL.formHandler.getError(`actualResult`) })}`);
let el4JP8p = eo('label',null,null,`for`,`actualResult`);
text(trans('Actual Result'));
ec('label');
let elHGPlU = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.actualResult = this.value;}]},`value`,`${fval(component.testCase.actualResult)}`,`name`,`${(`actualResult`).toInputName()}`,`placeholder`,`${trans(`Actual Result`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`actualResult`);
elHGPlU.value = fval(component.testCase.actualResult);
ec('textarea');
ec('div');
ec('div');
ec('div');
let elCGPV8 = eo('div',null,null,`class`,`m-t-2`);
let cmpwj4G = this._lc('ckcIRjFsI', {parent:component,parentTop:projectLayout,content:(flkFileInput) => {let elccmVN = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let eluHVx_ = eo('strong',null,null,`class`,`ml-1`);
text(`Upload Test Case Automation File`);
ec('strong');
},attrs:{name:`${(`attachment`).toInputName()}`,class:'btn btn-cyan bold',label:'Test Case Automation File'}});
ec('div');
let el5vLiH = eo('div',null,null,`class`,`m-t-1 text-center`);
let elh2L_B = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.testCaseIsOpened = false}]}, boolAttrs, {disabled:component.isSending},`type`,`button`,`class`,`btn btn-danger bold`);
text(`Cancel`);
ec('button');
let elJ40Aj = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
}}});
let cndVy_B = component.modalIsOpened;
this.setState('stfFyIA', cndVy_B);
if (cndVy_B) { 
component.modal = this._lc('c_B2P_DiD', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elL_nuV = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elL_nuV.formHandler) {
                    window.cfrmdlr = elL_nuV.formHandler = new FormHandler(elL_nuV, component);
                } else {
                    window.cfrmdlr = elL_nuV.formHandler;
                }
            let elabcoc = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elabcoc.value = fval(component.project.id);
let el1eWr0 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elL_nuV.formHandler.getError(`name`) })}`);
let elHYxuy = eo('label',null,null,`for`,`name`);
text(trans('Test suit Name'));
let el_f8hN = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elZdZLG = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elL_nuV.formHandler.addError(`name`, 'required', trans('validation.required'));}return elL_nuV.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Test suit Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elZdZLG.value = fval(component.record.name);
let cndJktT = elL_nuV.formHandler.getError(`name`);
this.setState('stmitIi', cndJktT);
if (cndJktT) { 
let elhTI4m = eo('div','uRkf',null,`class`,`alert alert-danger`);
text(elL_nuV.formHandler.getError(`name`));
ec('div');
}ec('div');
let cmpXmxl = this._lc('ckrvyQJ98', {parent:component,parentTop:flkModal,props:{required:true,value:Object.get(component.record.userStory, 'id', ''),lazyLoading:true,request:loadUserStories.bind(component)},attrs:{name:`${(`userStory`).toInputName()}`,label:'User Story'},state:'stfFyIA'});
let el9bo2M = eo('div',null,null,`class`,`m-t-1 text-center`);
let elYFCkp = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stfFyIA'});
}let cndKwG8 = component.confirmDelete;
this.setState('st8I0gq', cndKwG8);
if (cndKwG8) { 
let cmp_iZR = this._lc('cJuX8gXkV', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},attrs:{message:'Are you sure you want to delete this test suit? This will delete also all related test cases.'},state:'st8I0gq'});
}let cndc6La = component.confirmDeletingTestCase;
this.setState('stcWP7q', cndc6La);
if (cndc6La) { 
let cmp7Wgj = this._lc('c9ZqumsNr', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDeletingTestCase = null},onconfirm:function(e) {let $el = this; component.removeTestCase()}},state:'stcWP7q'});
}
                    this.isReadyToGo();
                }
        });