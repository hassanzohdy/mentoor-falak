_Component({
                selector: 'bug-modal',
                c: 'BugModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['modalHeading','submit','project','record','priorities','loadSprints','departments','loadModules','severities','classifications','reproducibleOptions','isValidForm','isSending'],
                children: {ct0Dd8dsX:'flk-dropdown-list',cCgdNrexw:'flk-dropdown-list',cZlw5Ep0H:'flk-dropdown-list',ciN0VIBX3:'flk-datepicker',cG8rWlAdW:'flk-dropdown-list',c1Z9npiMZ:'flk-dropdown-list',cQzxcB4U1:'flk-dropdown-list',cnwlh1vXL:'flk-dropdown-list',cUF6uYO6N:'flk-file-input',cjrdjgk_c:'record-audio-input',cqplbwIxa:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cqplbwIxa', {parent:component,props:{overlay:false,esc:false,heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.inputs.getEvent('close')()}},content:(flkModal) => {let el1M5bl = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el1M5bl.formHandler) {
                    window.cfrmdlr = el1M5bl.formHandler = new FormHandler(el1M5bl, component);
                } else {
                    window.cfrmdlr = el1M5bl.formHandler;
                }
            let el9KvLr = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el9KvLr.value = fval(component.project.id);
let elvN8Qq = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el1M5bl.formHandler.getError(`title`) })}`);
let elh0vez = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let eluzMHA = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el_yPDe = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el1M5bl.formHandler.addError(`title`, 'required', trans('validation.required'));}return el1M5bl.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el_yPDe.value = fval(component.record.title);
let cndG8dw = el1M5bl.formHandler.getError(`title`);
this.setState('stcCOQP', cndG8dw);
if (cndG8dw) { 
let elCyNcc = eo('div','T0Nf',null,`class`,`alert alert-danger`);
text(el1M5bl.formHandler.getError(`title`));
ec('div');
}ec('div');
let elKSFzE = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el1M5bl.formHandler.getError(`description`) })}`);
let elrKa9b = eo('label',null,null,`for`,`description`);
text(trans('Description (Markdown)'));
let elCremH = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elDst3m = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el1M5bl.formHandler.addError(`description`, 'required', trans('validation.required'));}return el1M5bl.formHandler.removeError(`description`);}]},`value`,`${fval(component.record.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description (Markdown)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elDst3m.value = fval(component.record.description);
ec('textarea');
let cndAmli = el1M5bl.formHandler.getError(`description`);
this.setState('stAguEc', cndAmli);
if (cndAmli) { 
let elcr39f = eo('div','wnmf',null,`class`,`alert alert-danger`);
text(el1M5bl.formHandler.getError(`description`));
ec('div');
}ec('div');
let el5iYgj = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el1M5bl.formHandler.getError(`stepsToReproduce`) })}`);
let ele9yph = eo('label',null,null,`for`,`stepsToReproduce`);
text(trans('Steps To Reproduce (Each step in one line without numbering the line)'));
let elYASTi = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elWpjqB = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.stepsToReproduce = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el1M5bl.formHandler.addError(`stepsToReproduce`, 'required', trans('validation.required'));}return el1M5bl.formHandler.removeError(`stepsToReproduce`);}]},`value`,`${fval(component.record.stepsToReproduce)}`,`name`,`${(`stepsToReproduce`).toInputName()}`,`placeholder`,`${trans(`Steps To Reproduce (Each step in one line without numbering the line)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`stepsToReproduce`);
elWpjqB.value = fval(component.record.stepsToReproduce);
ec('textarea');
let cndHMmq = el1M5bl.formHandler.getError(`stepsToReproduce`);
this.setState('stSZ0Qf', cndHMmq);
if (cndHMmq) { 
let elgpc8_ = eo('div','m0Lf',null,`class`,`alert alert-danger`);
text(el1M5bl.formHandler.getError(`stepsToReproduce`));
ec('div');
}ec('div');
let elyEaP8 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el1M5bl.formHandler.getError(`expectedBehavior`) })}`);
let elBANXb = eo('label',null,null,`for`,`expectedBehavior`);
text(trans('Expected Behavior'));
let elmkCV9 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eltO4HZ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.expectedBehavior = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el1M5bl.formHandler.addError(`expectedBehavior`, 'required', trans('validation.required'));}return el1M5bl.formHandler.removeError(`expectedBehavior`);}]},`value`,`${fval(component.record.expectedBehavior)}`,`name`,`${(`expectedBehavior`).toInputName()}`,`placeholder`,`${trans(`Expected Behavior`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`expectedBehavior`);
eltO4HZ.value = fval(component.record.expectedBehavior);
ec('textarea');
let cndOMQ8 = el1M5bl.formHandler.getError(`expectedBehavior`);
this.setState('stv4FCy', cndOMQ8);
if (cndOMQ8) { 
let el1fJ_t = eo('div','dzCf',null,`class`,`alert alert-danger`);
text(el1M5bl.formHandler.getError(`expectedBehavior`));
ec('div');
}ec('div');
let el1ZGPx = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el1M5bl.formHandler.getError(`actualResult`) })}`);
let elOW5Fy = eo('label',null,null,`for`,`actualResult`);
text(trans('Actual Result'));
let elieod0 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el85u95 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.actualResult = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el1M5bl.formHandler.addError(`actualResult`, 'required', trans('validation.required'));}return el1M5bl.formHandler.removeError(`actualResult`);}]},`value`,`${fval(component.record.actualResult)}`,`name`,`${(`actualResult`).toInputName()}`,`placeholder`,`${trans(`Actual Result`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`actualResult`);
el85u95.value = fval(component.record.actualResult);
ec('textarea');
let cndiJ56 = el1M5bl.formHandler.getError(`actualResult`);
this.setState('stqjLZ4', cndiJ56);
if (cndiJ56) { 
let eliBkqT = eo('div','WKaf',null,`class`,`alert alert-danger`);
text(el1M5bl.formHandler.getError(`actualResult`));
ec('div');
}ec('div');
let elU_Nk_ = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el1M5bl.formHandler.getError(`testingUrl`) })}`);
let elmwQLQ = eo('label',null,null,`for`,`testingUrl`);
text(trans('Testing Url'));
ec('label');
let elaVT2j = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.testingUrl = this.value;}]},`value`,`${fval(component.record.testingUrl)}`,`name`,`${(`testingUrl`).toInputName()}`,`placeholder`,`${trans(`Testing Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`testingUrl`);
elaVT2j.value = fval(component.record.testingUrl);
ec('div');
let elVbDox = eo('div',null,null,`class`,`row`);
let elmyiGN = eo('div',null,null,`class`,`col`);
let cmpKr7U = this._lc('ct0Dd8dsX', {parent:component,parentTop:flkModal,props:{multiple:true,items:component.project.membersList,value:component.record.assignee},boolAttrs:{multiple:true},attrs:{name:`${(`assignee[]`).toInputName()}`,label:'Assign To'}});
ec('div');
let elsJLuF = eo('div',null,null,`class`,`col`);
let cmpCD3I = this._lc('cCgdNrexw', {parent:component,parentTop:flkModal,props:{items:component.priorities,value:component.record.priority},attrs:{name:`${(`priority`).toInputName()}`,label:'Priority',required:''}});
ec('div');
let elGDllS = eo('div',null,null,`class`,`col`);
let cmp_I9G = this._lc('cZlw5Ep0H', {parent:component,parentTop:flkModal,props:{value:Object.get(component.record.sprint, 'id', ''),lazyLoading:true,request:component.loadSprints.bind(component)},attrs:{name:`${(`sprint`).toInputName()}`,label:'Sprint'}});
ec('div');
ec('div');
let elV4y4Q = eo('div',null,null,`class`,`row m-y-1`);
let el153q6 = eo('div',null,null,`class`,`col`);
let cmpg1Iz = this._lc('ciN0VIBX3', {parent:component,parentTop:flkModal,props:{value:component.record.dueDate,dateTime:true},attrs:{name:`${(`dueDate`).toInputName()}`,label:'Due Date',class:'form-control'}});
ec('div');
let elyuBNS = eo('div',null,null,`class`,`col`);
let cmpErhB = this._lc('cG8rWlAdW', {parent:component,parentTop:flkModal,props:{required:true,value:Object.get(component.record.module, 'id', ''),lazyLoading:true,request:component.loadModules.bind(component)},attrs:{name:`${(`module`).toInputName()}`,label:'Module'}});
ec('div');
ec('div');
let elhJQWS = eo('div',null,null,`class`,`row m-y-1`);
let elDjK_0 = eo('div',null,null,`class`,`col`);
let cmpRIqL = this._lc('c1Z9npiMZ', {parent:component,parentTop:flkModal,props:{items:component.severities,value:component.record.severity},attrs:{name:`${(`severity`).toInputName()}`,label:'severity'}});
ec('div');
let elTW2JQ = eo('div',null,null,`class`,`col`);
let cmpYsqZ = this._lc('cQzxcB4U1', {parent:component,parentTop:flkModal,props:{items:component.classifications,value:component.record.classification},attrs:{name:`${(`classification`).toInputName()}`,label:'classification'}});
ec('div');
let elm9gTQ = eo('div',null,null,`class`,`col`);
let cmpoFAx = this._lc('cnwlh1vXL', {parent:component,parentTop:flkModal,props:{items:component.reproducibleOptions,value:component.record.reproducible},attrs:{name:`${(`reproducible`).toInputName()}`,label:'How Much Reproducible It Is',heading:'Reproducible'}});
ec('div');
ec('div');
let el_RvXZ = eo('div',null,null,`class`,`m-t-2`);
let cmpIrkN = this._lc('cUF6uYO6N', {parent:component,parentTop:flkModal,props:{multiple:true},content:(flkFileInput) => {let elELQzs = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let elNvU02 = eo('strong',null,null,`class`,`ml-1`);
text(`Add Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-cyan bold',label:'Meeting'}});
let elxU2bC = eo('span',null,null,`class`,`ml-3`);
component.recordAudio = this._lc('cjrdjgk_c', {parent:component,parentTop:flkModal,props:{data:component.record}});
ec('span');
ec('div');
let elRZN7I = eo('div',null,null,`class`,`m-t-1 text-center`);
let ela2dW6 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'medium'}});

                    this.isReadyToGo();
                }
        });