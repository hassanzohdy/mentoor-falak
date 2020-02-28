_Component({
                selector: 'bug-modal',
                c: 'BugModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['modalHeading','submit','project','record','priorities','loadSprints','departments','loadModules','severities','classifications','reproducibleOptions','isValidForm','isSending'],
                children: {cIl3GQtx1:'flk-dropdown-list',cPb4wqU5i:'flk-dropdown-list',c_28rb2en:'flk-dropdown-list',cb2f5SuCU:'flk-datepicker',cIXtdgKSd:'flk-dropdown-list',c2viuJRM3:'flk-dropdown-list',ctOVWcb8E:'flk-dropdown-list',cQO3RlFv2:'flk-dropdown-list',cjOiJ_HbC:'flk-file-input',ctAqwmDFm:'record-audio-input',c799sBIBG:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('c799sBIBG', {parent:component,props:{overlay:false,esc:false,heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.inputs.getEvent('close')()}},content:(flkModal) => {let elQ7ed3 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elQ7ed3.formHandler) {
                    window.cfrmdlr = elQ7ed3.formHandler = new FormHandler(elQ7ed3, component);
                } else {
                    window.cfrmdlr = elQ7ed3.formHandler;
                }
            let elpvtmi = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elpvtmi.value = fval(component.project.id);
let eliiKBd = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elQ7ed3.formHandler.getError(`title`) })}`);
let elclrKz = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let eldu15c = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elpHpka = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQ7ed3.formHandler.addError(`title`, 'required', trans('validation.required'));}return elQ7ed3.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elpHpka.value = fval(component.record.title);
let cndzGQb = elQ7ed3.formHandler.getError(`title`);
this.setState('st5WnBa', cndzGQb);
if (cndzGQb) { 
let elrE5dn = eo('div','EOEf',null,`class`,`alert alert-danger`);
text(elQ7ed3.formHandler.getError(`title`));
ec('div');
}ec('div');
let elYpBh6 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elQ7ed3.formHandler.getError(`description`) })}`);
let eljhFRD = eo('label',null,null,`for`,`description`);
text(trans('Description (Markdown)'));
let el_QCGt = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elmhSlo = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQ7ed3.formHandler.addError(`description`, 'required', trans('validation.required'));}return elQ7ed3.formHandler.removeError(`description`);}]},`value`,`${fval(component.record.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description (Markdown)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elmhSlo.value = fval(component.record.description);
ec('textarea');
let cnddREx = elQ7ed3.formHandler.getError(`description`);
this.setState('sthoT6Q', cnddREx);
if (cnddREx) { 
let el21P9U = eo('div','6hMf',null,`class`,`alert alert-danger`);
text(elQ7ed3.formHandler.getError(`description`));
ec('div');
}ec('div');
let elPnWuG = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elQ7ed3.formHandler.getError(`stepsToReproduce`) })}`);
let elzFWPQ = eo('label',null,null,`for`,`stepsToReproduce`);
text(trans('Steps To Reproduce (Each step in one line without numbering the line)'));
let elK2V_c = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elkAr9s = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.stepsToReproduce = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQ7ed3.formHandler.addError(`stepsToReproduce`, 'required', trans('validation.required'));}return elQ7ed3.formHandler.removeError(`stepsToReproduce`);}]},`value`,`${fval(component.record.stepsToReproduce)}`,`name`,`${(`stepsToReproduce`).toInputName()}`,`placeholder`,`${trans(`Steps To Reproduce (Each step in one line without numbering the line)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`stepsToReproduce`);
elkAr9s.value = fval(component.record.stepsToReproduce);
ec('textarea');
let cndxmzy = elQ7ed3.formHandler.getError(`stepsToReproduce`);
this.setState('st5Wlki', cndxmzy);
if (cndxmzy) { 
let elDCNpE = eo('div','QKsf',null,`class`,`alert alert-danger`);
text(elQ7ed3.formHandler.getError(`stepsToReproduce`));
ec('div');
}ec('div');
let elNsKdA = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elQ7ed3.formHandler.getError(`expectedBehavior`) })}`);
let elCw7pO = eo('label',null,null,`for`,`expectedBehavior`);
text(trans('Expected Behavior'));
let elN8o2_ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elRvAGN = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.expectedBehavior = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQ7ed3.formHandler.addError(`expectedBehavior`, 'required', trans('validation.required'));}return elQ7ed3.formHandler.removeError(`expectedBehavior`);}]},`value`,`${fval(component.record.expectedBehavior)}`,`name`,`${(`expectedBehavior`).toInputName()}`,`placeholder`,`${trans(`Expected Behavior`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`expectedBehavior`);
elRvAGN.value = fval(component.record.expectedBehavior);
ec('textarea');
let cnd11G1 = elQ7ed3.formHandler.getError(`expectedBehavior`);
this.setState('stQpXha', cnd11G1);
if (cnd11G1) { 
let el5L9UU = eo('div','AQdf',null,`class`,`alert alert-danger`);
text(elQ7ed3.formHandler.getError(`expectedBehavior`));
ec('div');
}ec('div');
let el8zKWN = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elQ7ed3.formHandler.getError(`actualResult`) })}`);
let elUu_lY = eo('label',null,null,`for`,`actualResult`);
text(trans('Actual Result'));
let elZWn66 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elF0NcW = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.actualResult = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQ7ed3.formHandler.addError(`actualResult`, 'required', trans('validation.required'));}return elQ7ed3.formHandler.removeError(`actualResult`);}]},`value`,`${fval(component.record.actualResult)}`,`name`,`${(`actualResult`).toInputName()}`,`placeholder`,`${trans(`Actual Result`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`actualResult`);
elF0NcW.value = fval(component.record.actualResult);
ec('textarea');
let cndDUaz = elQ7ed3.formHandler.getError(`actualResult`);
this.setState('stVy8uM', cndDUaz);
if (cndDUaz) { 
let elW74db = eo('div','oPjf',null,`class`,`alert alert-danger`);
text(elQ7ed3.formHandler.getError(`actualResult`));
ec('div');
}ec('div');
let elhDOxY = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elQ7ed3.formHandler.getError(`testingUrl`) })}`);
let ellafMt = eo('label',null,null,`for`,`testingUrl`);
text(trans('Testing Url'));
ec('label');
let elmnQ9F = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.testingUrl = this.value;}]},`value`,`${fval(component.record.testingUrl)}`,`name`,`${(`testingUrl`).toInputName()}`,`placeholder`,`${trans(`Testing Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`testingUrl`);
elmnQ9F.value = fval(component.record.testingUrl);
ec('div');
let eltBsL6 = eo('div',null,null,`class`,`row`);
let elSBhjk = eo('div',null,null,`class`,`col`);
let cmp5Yb2 = this._lc('cIl3GQtx1', {parent:component,parentTop:flkModal,props:{multiple:true,items:component.project.membersList,value:component.record.assignee},boolAttrs:{multiple:true},attrs:{name:`${(`assignee[]`).toInputName()}`,label:'Assign To'}});
ec('div');
let elZy1sR = eo('div',null,null,`class`,`col`);
let cmp8PSc = this._lc('cPb4wqU5i', {parent:component,parentTop:flkModal,props:{items:component.priorities,value:component.record.priority},attrs:{name:`${(`priority`).toInputName()}`,label:'Priority',required:''}});
ec('div');
let elUquuI = eo('div',null,null,`class`,`col`);
let cmpK98N = this._lc('c_28rb2en', {parent:component,parentTop:flkModal,props:{value:Object.get(component.record.sprint, 'id', ''),lazyLoading:true,request:component.loadSprints.bind(component)},attrs:{name:`${(`sprint`).toInputName()}`,label:'Sprint'}});
ec('div');
ec('div');
let elTs4cT = eo('div',null,null,`class`,`row m-y-1`);
let elAvfgs = eo('div',null,null,`class`,`col`);
let cmpcUKQ = this._lc('cb2f5SuCU', {parent:component,parentTop:flkModal,props:{value:component.record.dueDate,dateTime:true},attrs:{name:`${(`dueDate`).toInputName()}`,label:'Due Date',class:'form-control'}});
ec('div');
let elOdfil = eo('div',null,null,`class`,`col`);
let cmpMT7I = this._lc('cIXtdgKSd', {parent:component,parentTop:flkModal,props:{required:true,value:Object.get(component.record.module, 'id', ''),lazyLoading:true,request:component.loadModules.bind(component)},attrs:{name:`${(`module`).toInputName()}`,label:'Module'}});
ec('div');
ec('div');
let elsxFQd = eo('div',null,null,`class`,`row m-y-1`);
let ely08gx = eo('div',null,null,`class`,`col`);
let cmp0xJs = this._lc('c2viuJRM3', {parent:component,parentTop:flkModal,props:{items:component.severities,value:component.record.severity},attrs:{name:`${(`severity`).toInputName()}`,label:'severity'}});
ec('div');
let elh6J6f = eo('div',null,null,`class`,`col`);
let cmpd68s = this._lc('ctOVWcb8E', {parent:component,parentTop:flkModal,props:{items:component.classifications,value:component.record.classification},attrs:{name:`${(`classification`).toInputName()}`,label:'classification'}});
ec('div');
let elhQJxW = eo('div',null,null,`class`,`col`);
let cmpflRt = this._lc('cQO3RlFv2', {parent:component,parentTop:flkModal,props:{items:component.reproducibleOptions,value:component.record.reproducible},attrs:{name:`${(`reproducible`).toInputName()}`,label:'How Much Reproducible It Is',heading:'Reproducible'}});
ec('div');
ec('div');
let elQbBdC = eo('div',null,null,`class`,`m-t-2`);
let cmpik3w = this._lc('cjOiJ_HbC', {parent:component,parentTop:flkModal,props:{multiple:true},content:(flkFileInput) => {let elD_YU9 = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let elgssWY = eo('strong',null,null,`class`,`ml-1`);
text(`Add Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-cyan bold',label:'Meeting'}});
let eljCcKf = eo('span',null,null,`class`,`ml-3`);
component.recordAudio = this._lc('ctAqwmDFm', {parent:component,parentTop:flkModal,props:{data:component.record}});
ec('span');
ec('div');
let elLC8vK = eo('div',null,null,`class`,`m-t-1 text-center`);
let elKEl90 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'medium'}});

                    this.isReadyToGo();
                }
        });