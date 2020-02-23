_Component({
                selector: 'project-test-suits-page',
                c: 'ProjectTestSuitsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','testCaseIsOpened','openModal','detectChanges','confirmRemoving','openTestCase','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove','confirmDeletingTestCase','removeTestCase','confirmRemovingTestCase','submitTestCase','testCaseType','testSuit','testCaseHeading','testCase','preConditionsTestCasesIds','requestTestCases'],
                children: {cWJjFO5lp:'flk-dropdown-list',c4VMvBU9b:'flk-dropdown-list',cxaH_P2iA:'flk-file-input',cGYmwFVoC:'project-layout',cspQaxdoQ:'flk-dropdown-list',ctPq4p27M:'flk-modal',cn3ZiosZ0:'flk-alert',cyB5oh_Vj:'flk-alert'},
                render: function (component) {
                    let cmpTuj2 = this._lc('cGYmwFVoC', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndlEjD = ! component.testCaseIsOpened;
this.setState('st9_s_k', cndlEjD);
if (cndlEjD) { 
let elF9iGB = eo('button','0eVf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elIa2S3 = eo('i','tTef',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Test suit`);
ec('button');
let eliSyuS = eo('h1','krVf',null,`class`,`m-y-1`);
text(`${ component.project.name } Test suits
        (${ component.project.testSuits.length })`);
ec('h1');
let elzNkJ4 = eo('table','w1Kf',null,`class`,`table table-striped buttoned`);
let elomxe6 = eo('thead','pC7f');
let elUANir = eo('tr','K2gf');
let elBaLiM = eo('th','g67f');
text(`#`);
ec('th');
let el2pCjr = eo('th','qR3f');
text(`Name`);
ec('th');
let elA_WB9 = eo('th','6I9f');
text(`User Story`);
ec('th');
let elfES2a = eo('th','ZYzf');
text(`Test Cases`);
ec('th');
let el6PAU8 = eo('th','Apjf');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let el6GXqq = eo('tbody','7Iaf');
let cndmC1y = Is.empty(component.project.testSuits);
this.setState('staDPDA', cndmC1y);
if (cndmC1y) { 
let elYyCoR = eo('tr','Y9qf');
let elvIQ4I = eo('td','aSyf',null, 'style', {textAlign:'center'},`colspan`,`5`);
text(`No Test suits Yet`);
ec('td');
ec('tr');
}for (let index in component.project.testSuits) {
let record = component.project.testSuits[index]; 
 let ii6IAw = record.id+ index;
let elsxZg1 = eo('tr','QjsPdlsnob9G' + index+ii6IAw);
let elRnjjx = eo('td','PoQff'+ii6IAw);
text(record.id);
ec('td');
let ellGGi9 = eo('td','HBjff'+ii6IAw);
text(record.name);
ec('td');
let elbUIYF = eo('td','7kVff'+ii6IAw,null,`title`,``);
text(record.userStory.title.readMoreChars(20));
ec('td');

                    setTimeout(function () {
                        let $el = elbUIYF;
                        
            true && tippyTooltip($el, {arrow:true,content:`${record.userStory.title}`});
        ;
                    }, 20);                
                let elXnCDb = eo('td','2eNff'+ii6IAw);
let elY2VrD = eo('a','oGqff'+ii6IAw,null, eventListeners, {onclick:[function(e) {var $el = this;record.viewTestCases = ! record.viewTestCases; component.detectChanges()}]},`href`,`#`);
let eljby59 = eo('span','47Nff'+ii6IAw);
text(record.testCases.length);
ec('span');
ec('a');
ec('td');
let elIQU3p = eo('td','FHDff'+ii6IAw);
let cndDAeQ = record.canBeModified;
this.setState('stNUASN', cndDAeQ);
if (cndDAeQ) { 
let elp2rx3 = eo('button','Qo6ff'+ii6IAw,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elN4gtB = eo('i','1OSff'+ii6IAw,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elp2rx3;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Test suit')}`});
        ;
                    }, 20);                
                let elFVVrL = eo('button','MvHff'+ii6IAw,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elYuPOM = eo('i','L8Bff'+ii6IAw,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elFVVrL;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Test suit')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
let cndUZ9S = record.viewTestCases;
this.setState('stcOMUL', cndUZ9S);
if (cndUZ9S) { 
let elTikaM = eo('tr','tk3ff'+ii6IAw);
for (let i in ['positive', 'negative']) {
let type = ['positive', 'negative'][i]; 
 let ii_FoG = '8aZ29kt' + i;
let el3Spqa = eo('td','DeCDmNdoQbkQ' + i+ii6IAw+ii_FoG,null,`colspan`,`2`,`class`,`test-case-type v-top text-center ${ type }`);
let elq3d25 = eo('h4','WrWff'+ii6IAw+ii_FoG,null,`class`,`bold text-capitalize`);
elq3d25.cls = {'green-text': type == 'positive', 'red-text': type == 'negative'};

            for (let className in elq3d25.cls) {
                elq3d25.classList.toggle(className, elq3d25.cls[className]);
            }  
            text(`${ type }
                            (${ record.testCasesList[type] ? record.testCasesList[type].length : 0 })`);
let elb5c4c = eo('button','t7Nff'+ii6IAw+ii_FoG,null, eventListeners, {onclick:[function(e) {var $el = this;component.openTestCase(type, record, {}, null, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle`);
elb5c4c.cls = {'btn-success': type == 'positive', 'btn-danger': type == 'negative'};

            for (let className in elb5c4c.cls) {
                elb5c4c.classList.toggle(className, elb5c4c.cls[className]);
            }  
            let elsl52f = eo('i','jWBff'+ii6IAw+ii_FoG,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elb5c4c;
                        
            true && tippyTooltip($el, {arrow:true,content:`Add new ${ type } test case`});
        ;
                    }, 20);                
                ec('h4');
let cndmcpT = record.testCasesList[type];
this.setState('stnCxAr', cndmcpT);
if (cndmcpT) { 
let el0rzrx = eo('div','fDHff'+ii6IAw+ii_FoG,null,`class`,`table-responsive test-cases-list`);
let elvs2Kz = eo('table','GfWff'+ii6IAw+ii_FoG,null,`class`,`table table-bordered`);
let elFEisX = eo('thead','bxNff'+ii6IAw+ii_FoG);
let elwsj_e = eo('tr','MjZff'+ii6IAw+ii_FoG);
let eloLnbP = eo('th','VV_ff'+ii6IAw+ii_FoG);
text(`#`);
ec('th');
let elGfOYw = eo('th','Lcxff'+ii6IAw+ii_FoG);
text(`Test Case`);
ec('th');
let elYx0Hj = eo('th','BAZff'+ii6IAw+ii_FoG);
text(`Priority`);
ec('th');
let elO06F7 = eo('th','f6Off'+ii6IAw+ii_FoG);
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elFGxQa = eo('tbody','39Eff'+ii6IAw+ii_FoG);
for (let testCaseIndex in record.testCasesList[type]) {
let testCase = record.testCasesList[type][testCaseIndex]; 
 let iig4uS = 'XUfXdSP' + testCaseIndex;
let eloYSNo = eo('tr','H5VTrK_OF9WT' + testCaseIndex+ii6IAw+ii_FoG+iig4uS);
let elmwL6j = eo('td','4efff'+ii6IAw+ii_FoG+iig4uS);
text(testCase.id);
ec('td');
let elgy3om = eo('td','ZKeff'+ii6IAw+ii_FoG+iig4uS);
let elHjcdc = eo('a','Sdaff'+ii6IAw+ii_FoG+iig4uS,null,`href`,`${URLS.project(component.project, 'test-cases', testCase)}`);
text(testCase.title);
ec('a');
ec('td');
let el6UxuI = eo('td','r6jff'+ii6IAw+ii_FoG+iig4uS);
text(testCase.priority);
ec('td');
let elksMr6 = eo('td','R4Gff'+ii6IAw+ii_FoG+iig4uS);
let cndYN8s = testCase.canBeModified;
this.setState('stUqw79', cndYN8s);
if (cndYN8s) { 
let el2L1ta = eo('button','yEBff'+ii6IAw+ii_FoG+iig4uS,null, eventListeners, {onclick:[function(e) {var $el = this;component.openTestCase(type, record, testCase, testCaseIndex, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-purple btn-sm btn-circle`);
let elEzauV = eo('i','6u9ff'+ii6IAw+ii_FoG+iig4uS,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el2L1ta;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Test case')}`});
        ;
                    }, 20);                
                let elGUYDR = eo('button','Iswff'+ii6IAw+ii_FoG+iig4uS,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemovingTestCase(testCase, testCaseIndex, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elII03E = eo('i','rdyff'+ii6IAw+ii_FoG+iig4uS,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elGUYDR;
                        
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
}let cndMMiG = component.testCaseIsOpened;
this.setState('st30eP_', cndMMiG);
if (cndMMiG) { 
let elGU7GG = eo('form','Wcrf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitTestCase($el)}]});

                if (! elGU7GG.formHandler) {
                    window.cfrmdlr = elGU7GG.formHandler = new FormHandler(elGU7GG, component);
                } else {
                    window.cfrmdlr = elGU7GG.formHandler;
                }
            let elb6sfp = ev('input','QxDf',null, eventListeners, {oninput:[function(e) {component.testCaseType = this.value;}]},`value`,`${fval(component.testCaseType)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elb6sfp.value = fval(component.testCaseType);
let elybDqs = ev('input','sKUf',null, eventListeners, {oninput:[function(e) {component.testSuit.id = this.value;}]},`value`,`${fval(component.testSuit.id)}`,`name`,`${(`testSuit`).toInputName()}`,`type`,`hidden`);
elybDqs.value = fval(component.testSuit.id);
let elGWO5q = ev('input','Xk6f',null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elGWO5q.value = fval(component.project.id);
let elWF6yE = eo('h1','mxuf');
text(component.testCaseHeading);
ec('h1');
let elUNdXg = eo('div','iZ9f',null,`class`,`row`);
let el5wI0j = eo('div','3Agf',null,`class`,`col-sm-6`);
ec('div');
let el13N7Q = eo('div','N96f',null,`class`,`col-sm-6`);
ec('div');
ec('div');
let elJyVmD = eo('div','q5Bf',null,`class`,`row`);
let el1gg5R = eo('div','YQxf',null,`class`,`col-sm-12`);
let el1oB13 = eo('div','csgf',null,`class`,`form-group`);
el1oB13.cls = {'group-error': !!elGU7GG.formHandler.getError(`title`) };

            for (let className in el1oB13.cls) {
                el1oB13.classList.toggle(className, el1oB13.cls[className]);
            }  
            let eli3y8A = eo('label','frRf',null,`for`,`title`);
text(trans('Test case title'));
let elxf77p = eo('span','rqOf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eldZDx4 = ev('input','TOyf',null, eventListeners, {oninput:[function(e) {component.testCase.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGU7GG.formHandler.addError(`title`, 'required', trans('validation.required'));}return elGU7GG.formHandler.removeError(`title`);}]},`value`,`${fval(component.testCase.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Test case title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
eldZDx4.value = fval(component.testCase.title);
let cndi5WF = elGU7GG.formHandler.getError(`title`);
this.setState('stdH8ah', cndi5WF);
if (cndi5WF) { 
let elyNnzl = eo('div','bumf',null,`class`,`alert alert-danger`);
text(elGU7GG.formHandler.getError(`title`));
ec('div');
}ec('div');
ec('div');
let elfCxRg = eo('div',null,null,`class`,`col-sm-12`);
let elA1Bks = eo('div',null,null,`class`,`form-group`);
elA1Bks.cls = {'group-error': !!elGU7GG.formHandler.getError(`description`) };

            for (let className in elA1Bks.cls) {
                elA1Bks.classList.toggle(className, elA1Bks.cls[className]);
            }  
            let el9igIm = eo('label',null,null,`for`,`description`);
text(trans('Test case description'));
let elQMZ0C = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elFdHCs = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGU7GG.formHandler.addError(`description`, 'required', trans('validation.required'));}return elGU7GG.formHandler.removeError(`description`);}]},`value`,`${fval(component.testCase.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Test case description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elFdHCs.value = fval(component.testCase.description);
ec('textarea');
let cndJ6pd = elGU7GG.formHandler.getError(`description`);
this.setState('strxYAx', cndJ6pd);
if (cndJ6pd) { 
let elJ_66f = eo('div','LJOf',null,`class`,`alert alert-danger`);
text(elGU7GG.formHandler.getError(`description`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elPiZYe = eo('div',null,null,`class`,`row`);
let elB2c_p = eo('div',null,null,`class`,`col-sm-6`);
let elPB8ob = eo('div',null,null,`class`,`form-group`);
elPB8ob.cls = {'group-error': !!elGU7GG.formHandler.getError(`preconditions`) };

            for (let className in elPB8ob.cls) {
                elPB8ob.classList.toggle(className, elPB8ob.cls[className]);
            }  
            let elyy72j = eo('label',null,null,`for`,`preconditions`);
text(trans('Test case Preconditions'));
ec('label');
let elxpyCw = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.preconditions = this.value;}]},`value`,`${fval(component.testCase.preconditions)}`,`name`,`${(`preconditions`).toInputName()}`,`placeholder`,`${trans(`Test case Preconditions`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`preconditions`);
elxpyCw.value = fval(component.testCase.preconditions);
ec('textarea');
ec('div');
ec('div');
let elERgP4 = eo('div',null,null,`class`,`col-sm-6`);
let elPI9IC = eo('div',null,null,`class`,`form-group`);
elPI9IC.cls = {'group-error': !!elGU7GG.formHandler.getError(`notes`) };

            for (let className in elPI9IC.cls) {
                elPI9IC.classList.toggle(className, elPI9IC.cls[className]);
            }  
            let el7PJJm = eo('label',null,null,`for`,`notes`);
text(trans('Test case notes'));
ec('label');
let elGYOA9 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.notes = this.value;}]},`value`,`${fval(component.testCase.notes)}`,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Test case notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
elGYOA9.value = fval(component.testCase.notes);
ec('textarea');
ec('div');
ec('div');
ec('div');
let elxqK03 = eo('div',null,null,`class`,`row`);
let el7AHqn = eo('div',null,null,`class`,`col-sm-6`);
let cmpAYmf = this._lc('cWJjFO5lp', {parent:component,parentTop:projectLayout,props:{multiple:true,lazyLoading:true,except:component.testCase.id,value:component.preConditionsTestCasesIds,request:component.requestTestCases.bind(component)},boolAttrs:{multiple:true},attrs:{name:`${(`preConditionsTestCases[]`).toInputName()}`,label:'Pre Conditions Test Cases'}});
ec('div');
let elZNA3r = eo('div',null,null,`class`,`col-sm-6`);
let cmpgF5H = this._lc('c4VMvBU9b', {parent:component,parentTop:projectLayout,props:{items:PRIORITIES,value:component.testCase.priority},attrs:{name:`${(`priority`).toInputName()}`,label:'Priority',required:''}});
ec('div');
ec('div');
let elBLvFi = eo('div',null,null,`class`,`row`);
let ely_5jj = eo('div',null,null,`class`,`col-sm-6`);
let elTAZPW = eo('div',null,null,`class`,`form-group`);
elTAZPW.cls = {'group-error': !!elGU7GG.formHandler.getError(`postConditions`) };

            for (let className in elTAZPW.cls) {
                elTAZPW.classList.toggle(className, elTAZPW.cls[className]);
            }  
            let elf8RgZ = eo('label',null,null,`for`,`postConditions`);
text(trans('Test case PostConditions'));
ec('label');
let elPKdHh = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.postConditions = this.value;}]},`value`,`${fval(component.testCase.postConditions)}`,`name`,`${(`postConditions`).toInputName()}`,`placeholder`,`${trans(`Test case PostConditions`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`postConditions`);
elPKdHh.value = fval(component.testCase.postConditions);
ec('textarea');
ec('div');
ec('div');
let elG9mNW = eo('div',null,null,`class`,`col-sm-6`);
let elr7GcY = eo('div',null,null,`class`,`form-group`);
elr7GcY.cls = {'group-error': !!elGU7GG.formHandler.getError(`data`) };

            for (let className in elr7GcY.cls) {
                elr7GcY.classList.toggle(className, elr7GcY.cls[className]);
            }  
            let elk_rhb = eo('label',null,null,`for`,`data`);
text(trans('Test case data'));
let el7PoWG = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elwm5U2 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.data = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGU7GG.formHandler.addError(`data`, 'required', trans('validation.required'));}return elGU7GG.formHandler.removeError(`data`);}]},`value`,`${fval(component.testCase.data)}`,`name`,`${(`data`).toInputName()}`,`placeholder`,`${trans(`Test case data`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`data`);
elwm5U2.value = fval(component.testCase.data);
ec('textarea');
let cndGJID = elGU7GG.formHandler.getError(`data`);
this.setState('stCjbn7', cndGJID);
if (cndGJID) { 
let elBtfBH = eo('div','E8Pf',null,`class`,`alert alert-danger`);
text(elGU7GG.formHandler.getError(`data`));
ec('div');
}ec('div');
ec('div');
ec('div');
let eltJFNU = eo('div',null,null,`class`,`row`);
let elTAK5U = eo('div',null,null,`class`,`col-sm-4`);
let elN0j04 = eo('div',null,null,`class`,`form-group`);
elN0j04.cls = {'group-error': !!elGU7GG.formHandler.getError(`stepsToReproduce`) };

            for (let className in elN0j04.cls) {
                elN0j04.classList.toggle(className, elN0j04.cls[className]);
            }  
            let eldeL8Q = eo('label',null,null,`for`,`stepsToReproduce`);
text(trans('Steps To Reproduce'));
let elwNHlS = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elgXsiH = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.stepsToReproduce = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGU7GG.formHandler.addError(`stepsToReproduce`, 'required', trans('validation.required'));}return elGU7GG.formHandler.removeError(`stepsToReproduce`);}]},`value`,`${fval(component.testCase.stepsToReproduce)}`,`name`,`${(`stepsToReproduce`).toInputName()}`,`placeholder`,`${trans(`Steps To Reproduce (Each step in one line without numbering the line)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`stepsToReproduce`);
elgXsiH.value = fval(component.testCase.stepsToReproduce);
ec('textarea');
let cndys9J = elGU7GG.formHandler.getError(`stepsToReproduce`);
this.setState('stPybEm', cndys9J);
if (cndys9J) { 
let elTtQg2 = eo('div','MhUf',null,`class`,`alert alert-danger`);
text(elGU7GG.formHandler.getError(`stepsToReproduce`));
ec('div');
}ec('div');
ec('div');
let eliO9SQ = eo('div',null,null,`class`,`col-sm-4`);
let elRMNkd = eo('div',null,null,`class`,`form-group`);
elRMNkd.cls = {'group-error': !!elGU7GG.formHandler.getError(`expectedBehavior`) };

            for (let className in elRMNkd.cls) {
                elRMNkd.classList.toggle(className, elRMNkd.cls[className]);
            }  
            let elCvSQi = eo('label',null,null,`for`,`expectedBehavior`);
text(trans('Expected Behavior'));
let el4s1hr = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elIsBOE = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.expectedBehavior = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGU7GG.formHandler.addError(`expectedBehavior`, 'required', trans('validation.required'));}return elGU7GG.formHandler.removeError(`expectedBehavior`);}]},`value`,`${fval(component.testCase.expectedBehavior)}`,`name`,`${(`expectedBehavior`).toInputName()}`,`placeholder`,`${trans(`Expected Behavior`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`expectedBehavior`);
elIsBOE.value = fval(component.testCase.expectedBehavior);
ec('textarea');
let cnd3RCv = elGU7GG.formHandler.getError(`expectedBehavior`);
this.setState('stvMgtR', cnd3RCv);
if (cnd3RCv) { 
let elsmEh5 = eo('div','VFaf',null,`class`,`alert alert-danger`);
text(elGU7GG.formHandler.getError(`expectedBehavior`));
ec('div');
}ec('div');
ec('div');
let elJMxfj = eo('div',null,null,`class`,`col-sm-4`);
let elU66m4 = eo('div',null,null,`class`,`form-group`);
elU66m4.cls = {'group-error': !!elGU7GG.formHandler.getError(`actualResult`) };

            for (let className in elU66m4.cls) {
                elU66m4.classList.toggle(className, elU66m4.cls[className]);
            }  
            let elkQE74 = eo('label',null,null,`for`,`actualResult`);
text(trans('Actual Result'));
ec('label');
let eloCz8O = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.testCase.actualResult = this.value;}]},`value`,`${fval(component.testCase.actualResult)}`,`name`,`${(`actualResult`).toInputName()}`,`placeholder`,`${trans(`Actual Result`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`actualResult`);
eloCz8O.value = fval(component.testCase.actualResult);
ec('textarea');
ec('div');
ec('div');
ec('div');
let el_Qgs7 = eo('div',null,null,`class`,`m-t-2`);
let cmpc6M7 = this._lc('cxaH_P2iA', {parent:component,parentTop:projectLayout,content:(flkFileInput) => {let elei_KT = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elFuIoi = eo('strong',null,null,`class`,`ml-1`);
text(`Upload Test Case Automation File`);
ec('strong');
},attrs:{name:`${(`attachment`).toInputName()}`,class:'btn btn-cyan bold',label:'Test Case Automation File'}});
ec('div');
let elBdzXL = eo('div',null,null,`class`,`m-t-1 text-center`);
let elHYZMQ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.testCaseIsOpened = false}]}, boolAttrs, {disabled:component.isSending},`type`,`button`,`class`,`btn btn-danger bold`);
text(`Cancel`);
ec('button');
let el2m2nD = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
}}});
let cndwoI1 = component.modalIsOpened;
this.setState('sthWeyI', cndwoI1);
if (cndwoI1) { 
component.modal = this._lc('ctPq4p27M', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elqxbju = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elqxbju.formHandler) {
                    window.cfrmdlr = elqxbju.formHandler = new FormHandler(elqxbju, component);
                } else {
                    window.cfrmdlr = elqxbju.formHandler;
                }
            let elzce4l = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elzce4l.value = fval(component.project.id);
let elISXVC = eo('div',null,null,`class`,`form-group`);
elISXVC.cls = {'group-error': !!elqxbju.formHandler.getError(`name`) };

            for (let className in elISXVC.cls) {
                elISXVC.classList.toggle(className, elISXVC.cls[className]);
            }  
            let elTRFIE = eo('label',null,null,`for`,`name`);
text(trans('Test suit Name'));
let elbdWRC = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el3ztfK = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqxbju.formHandler.addError(`name`, 'required', trans('validation.required'));}return elqxbju.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Test suit Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el3ztfK.value = fval(component.record.name);
let cndxmdu = elqxbju.formHandler.getError(`name`);
this.setState('stSshKo', cndxmdu);
if (cndxmdu) { 
let elxG9V8 = eo('div','Q2Of',null,`class`,`alert alert-danger`);
text(elqxbju.formHandler.getError(`name`));
ec('div');
}ec('div');
let cmpaAFl = this._lc('cspQaxdoQ', {parent:component,parentTop:flkModal,props:{required:true,value:Object.get(component.record.userStory, 'id', ''),lazyLoading:true,request:loadUserStories.bind(component)},attrs:{name:`${(`userStory`).toInputName()}`,label:'User Story'},state:'sthWeyI'});
let elBeMkD = eo('div',null,null,`class`,`m-t-1 text-center`);
let el7a4VK = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'sthWeyI'});
}let cndIxF0 = component.confirmDelete;
this.setState('st5D8Sn', cndIxF0);
if (cndIxF0) { 
let cmpxYm5 = this._lc('cn3ZiosZ0', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},attrs:{message:'Are you sure you want to delete this test suit? This will delete also all related test cases.'},state:'st5D8Sn'});
}let cndruO_ = component.confirmDeletingTestCase;
this.setState('st4_ilK', cndruO_);
if (cndruO_) { 
let cmp62dM = this._lc('cyB5oh_Vj', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDeletingTestCase = null},onconfirm:function(e) {let $el = this; component.removeTestCase()}},state:'st4_ilK'});
}
                    this.isReadyToGo();
                }
        });