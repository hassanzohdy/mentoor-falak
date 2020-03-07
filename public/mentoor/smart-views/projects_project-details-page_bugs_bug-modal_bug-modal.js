_Component({
                selector: 'bug-modal',
                c: 'BugModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['modalHeading','submit','project','record','priorities','loadSprints','departments','loadModules','severities','classifications','reproducibleOptions','isValidForm','isSending'],
                children: {cBeuBBlPv:'flk-dropdown-list',c3Ijp2X8b:'flk-dropdown-list',c4BbVl_oM:'flk-dropdown-list',c3i_5QA9Q:'flk-datepicker',cIKMbyIBe:'flk-dropdown-list',cNFY8BDVZ:'flk-dropdown-list',c1IZ88PGI:'flk-dropdown-list',cNolkmaNN:'flk-dropdown-list',c4wWrYxdD:'flk-file-input',cJa9_k1zQ:'record-audio-input',cHSHkEglp:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cHSHkEglp', {parent:component,props:{overlay:false,esc:false,heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.inputs.getEvent('close')()}},content:(flkModal) => {let elbNEkc = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elbNEkc.formHandler) {
                    window.cfrmdlr = elbNEkc.formHandler = new FormHandler(elbNEkc, component);
                } else {
                    window.cfrmdlr = elbNEkc.formHandler;
                }
            let elUU_L5 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elUU_L5.value = fval(component.project.id);
let elvB_IB = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elbNEkc.formHandler.getError(`title`) })}`);
let elxYM82 = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let elZBopb = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el5WRsz = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbNEkc.formHandler.addError(`title`, 'required', trans('validation.required'));}return elbNEkc.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el5WRsz.value = fval(component.record.title);
let cndFPNh = elbNEkc.formHandler.getError(`title`);
this.setState('stse6do', cndFPNh);
if (cndFPNh) { 
let elNnebx = eo('div','r1Hf',null,`class`,`alert alert-danger`);
text(elbNEkc.formHandler.getError(`title`));
ec('div');
}ec('div');
let elaY18p = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elbNEkc.formHandler.getError(`description`) })}`);
let el4JRls = eo('label',null,null,`for`,`description`);
text(trans('Description (Markdown)'));
let elB8aLw = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elZxFxF = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbNEkc.formHandler.addError(`description`, 'required', trans('validation.required'));}return elbNEkc.formHandler.removeError(`description`);}]},`value`,`${fval(component.record.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description (Markdown)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elZxFxF.value = fval(component.record.description);
ec('textarea');
let cndQ7sF = elbNEkc.formHandler.getError(`description`);
this.setState('stX30jD', cndQ7sF);
if (cndQ7sF) { 
let el3weBt = eo('div','TgCf',null,`class`,`alert alert-danger`);
text(elbNEkc.formHandler.getError(`description`));
ec('div');
}ec('div');
let ellltL_ = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elbNEkc.formHandler.getError(`stepsToReproduce`) })}`);
let elea0o3 = eo('label',null,null,`for`,`stepsToReproduce`);
text(trans('Steps To Reproduce (Each step in one line without numbering the line)'));
let el7d6vP = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el9ri1R = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.stepsToReproduce = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbNEkc.formHandler.addError(`stepsToReproduce`, 'required', trans('validation.required'));}return elbNEkc.formHandler.removeError(`stepsToReproduce`);}]},`value`,`${fval(component.record.stepsToReproduce)}`,`name`,`${(`stepsToReproduce`).toInputName()}`,`placeholder`,`${trans(`Steps To Reproduce (Each step in one line without numbering the line)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`stepsToReproduce`);
el9ri1R.value = fval(component.record.stepsToReproduce);
ec('textarea');
let cndwc8b = elbNEkc.formHandler.getError(`stepsToReproduce`);
this.setState('stKvpa4', cndwc8b);
if (cndwc8b) { 
let elcrW_3 = eo('div','8atf',null,`class`,`alert alert-danger`);
text(elbNEkc.formHandler.getError(`stepsToReproduce`));
ec('div');
}ec('div');
let elG6r8M = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elbNEkc.formHandler.getError(`expectedBehavior`) })}`);
let elZpFnn = eo('label',null,null,`for`,`expectedBehavior`);
text(trans('Expected Behavior'));
let el7cPCE = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elR2msf = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.expectedBehavior = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbNEkc.formHandler.addError(`expectedBehavior`, 'required', trans('validation.required'));}return elbNEkc.formHandler.removeError(`expectedBehavior`);}]},`value`,`${fval(component.record.expectedBehavior)}`,`name`,`${(`expectedBehavior`).toInputName()}`,`placeholder`,`${trans(`Expected Behavior`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`expectedBehavior`);
elR2msf.value = fval(component.record.expectedBehavior);
ec('textarea');
let cnd2weA = elbNEkc.formHandler.getError(`expectedBehavior`);
this.setState('stNXcSH', cnd2weA);
if (cnd2weA) { 
let elhWKWO = eo('div','pJrf',null,`class`,`alert alert-danger`);
text(elbNEkc.formHandler.getError(`expectedBehavior`));
ec('div');
}ec('div');
let el_e9iI = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elbNEkc.formHandler.getError(`actualResult`) })}`);
let eloI3aF = eo('label',null,null,`for`,`actualResult`);
text(trans('Actual Result'));
let el1l2UL = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elXdok1 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.actualResult = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbNEkc.formHandler.addError(`actualResult`, 'required', trans('validation.required'));}return elbNEkc.formHandler.removeError(`actualResult`);}]},`value`,`${fval(component.record.actualResult)}`,`name`,`${(`actualResult`).toInputName()}`,`placeholder`,`${trans(`Actual Result`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`actualResult`);
elXdok1.value = fval(component.record.actualResult);
ec('textarea');
let cnd768T = elbNEkc.formHandler.getError(`actualResult`);
this.setState('stPpBT2', cnd768T);
if (cnd768T) { 
let elnI0O2 = eo('div','mZhf',null,`class`,`alert alert-danger`);
text(elbNEkc.formHandler.getError(`actualResult`));
ec('div');
}ec('div');
let el8kcX2 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elbNEkc.formHandler.getError(`testingUrl`) })}`);
let elAxD91 = eo('label',null,null,`for`,`testingUrl`);
text(trans('Testing Url'));
ec('label');
let el3wgca = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.testingUrl = this.value;}]},`value`,`${fval(component.record.testingUrl)}`,`name`,`${(`testingUrl`).toInputName()}`,`placeholder`,`${trans(`Testing Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`testingUrl`);
el3wgca.value = fval(component.record.testingUrl);
ec('div');
let elmIeP7 = eo('div',null,null,`class`,`row`);
let el1urcy = eo('div',null,null,`class`,`col`);
let cmpiNFi = this._lc('cBeuBBlPv', {parent:component,parentTop:flkModal,props:{multiple:true,items:component.project.membersList,value:component.record.assignee},boolAttrs:{multiple:true},attrs:{name:`${(`assignee[]`).toInputName()}`,label:'Assign To'}});
ec('div');
let elciWT1 = eo('div',null,null,`class`,`col`);
let cmpMI9S = this._lc('c3Ijp2X8b', {parent:component,parentTop:flkModal,props:{items:component.priorities,value:component.record.priority},attrs:{name:`${(`priority`).toInputName()}`,label:'Priority',required:''}});
ec('div');
let elsc3Ut = eo('div',null,null,`class`,`col`);
let cmpy5QR = this._lc('c4BbVl_oM', {parent:component,parentTop:flkModal,props:{value:Object.get(component.record.sprint, 'id', ''),lazyLoading:true,request:component.loadSprints.bind(component)},attrs:{name:`${(`sprint`).toInputName()}`,label:'Sprint'}});
ec('div');
ec('div');
let elfK4_r = eo('div',null,null,`class`,`row m-y-1`);
let el0fRXy = eo('div',null,null,`class`,`col`);
let cmpYhBD = this._lc('c3i_5QA9Q', {parent:component,parentTop:flkModal,props:{value:component.record.dueDate,dateTime:true},attrs:{name:`${(`dueDate`).toInputName()}`,label:'Due Date',class:'form-control'}});
ec('div');
let el0rmib = eo('div',null,null,`class`,`col`);
let cmpUwr7 = this._lc('cIKMbyIBe', {parent:component,parentTop:flkModal,props:{required:true,value:Object.get(component.record.module, 'id', ''),lazyLoading:true,request:component.loadModules.bind(component)},attrs:{name:`${(`module`).toInputName()}`,label:'Module'}});
ec('div');
ec('div');
let el0LcLM = eo('div',null,null,`class`,`row m-y-1`);
let elGOuNn = eo('div',null,null,`class`,`col`);
let cmp1eZV = this._lc('cNFY8BDVZ', {parent:component,parentTop:flkModal,props:{items:component.severities,value:component.record.severity},attrs:{name:`${(`severity`).toInputName()}`,label:'severity'}});
ec('div');
let elYWhP1 = eo('div',null,null,`class`,`col`);
let cmp0K5B = this._lc('c1IZ88PGI', {parent:component,parentTop:flkModal,props:{items:component.classifications,value:component.record.classification},attrs:{name:`${(`classification`).toInputName()}`,label:'classification'}});
ec('div');
let elMENIc = eo('div',null,null,`class`,`col`);
let cmpXe91 = this._lc('cNolkmaNN', {parent:component,parentTop:flkModal,props:{items:component.reproducibleOptions,value:component.record.reproducible},attrs:{name:`${(`reproducible`).toInputName()}`,label:'How Much Reproducible It Is',heading:'Reproducible'}});
ec('div');
ec('div');
let elXXLnM = eo('div',null,null,`class`,`m-t-2`);
let cmpQVEK = this._lc('c4wWrYxdD', {parent:component,parentTop:flkModal,props:{multiple:true},content:(flkFileInput) => {let el4D8Bq = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let elZPh46 = eo('strong',null,null,`class`,`ml-1`);
text(`Add Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-cyan bold',label:'Meeting'}});
let elvkAuP = eo('span',null,null,`class`,`ml-3`);
component.recordAudio = this._lc('cJa9_k1zQ', {parent:component,parentTop:flkModal,props:{data:component.record}});
ec('span');
ec('div');
let elW7A9f = eo('div',null,null,`class`,`m-t-1 text-center`);
let eliGyOv = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'medium'}});

                    this.isReadyToGo();
                }
        });