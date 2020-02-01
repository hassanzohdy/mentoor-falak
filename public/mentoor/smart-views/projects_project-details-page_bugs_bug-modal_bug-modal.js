_Component({
                selector: 'bug-modal',
                c: 'BugModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['modalHeading','submit','project','record','priorities','loadSprints','departments','loadModules','severities','classifications','reproducibleOptions','isValidForm','isSending'],
                children: {c8eL306vS:'flk-dropdown-list',c0wCPMkyp:'flk-dropdown-list',cytj3rwyb:'flk-dropdown-list',cRCII1OaS:'flk-datepicker',cuq4xZal0:'flk-dropdown-list',cd_9zQJDu:'flk-dropdown-list',cSkbgKxrQ:'flk-dropdown-list',c9uKf1lrr:'flk-dropdown-list',cuuziCM4Q:'flk-file-input',cEbhnV0Tm:'record-audio-input',cmnOqeIav:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cmnOqeIav', {parent:component,props:{overlay:false,esc:false,heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.inputs.getEvent('close')()}},content:(flkModal) => {let elmnQab = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elmnQab.formHandler) {
                    window.cfrmdlr = elmnQab.formHandler = new FormHandler(elmnQab, component);
                } else {
                    window.cfrmdlr = elmnQab.formHandler;
                }
            let el7V7UB = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el7V7UB.value = fval(component.project.id);
let eluCCMa = eo('div',null,null,`class`,`form-group`);
eluCCMa.cls = {'group-error': !!elmnQab.formHandler.getError(`title`) };

            for (let className in eluCCMa.cls) {
                eluCCMa.classList.toggle(className, eluCCMa.cls[className]);
            }  
            let elQZBDK = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let elISUrj = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elV02nD = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elmnQab.formHandler.addError(`title`, 'required', trans('validation.required'));}return elmnQab.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elV02nD.value = fval(component.record.title);
let cnd_fDX = elmnQab.formHandler.getError(`title`);
this.setState('stRlcgE', cnd_fDX);
if (cnd_fDX) { 
let elWYbF7 = eo('div','nw6f',null,`class`,`alert alert-danger`);
text(elmnQab.formHandler.getError(`title`));
ec('div');
}ec('div');
let eln7lV9 = eo('div',null,null,`class`,`form-group`);
eln7lV9.cls = {'group-error': !!elmnQab.formHandler.getError(`description`) };

            for (let className in eln7lV9.cls) {
                eln7lV9.classList.toggle(className, eln7lV9.cls[className]);
            }  
            let ellJrCb = eo('label',null,null,`for`,`description`);
text(trans('Description (Markdown)'));
let el6tGe8 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elz2sDV = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elmnQab.formHandler.addError(`description`, 'required', trans('validation.required'));}return elmnQab.formHandler.removeError(`description`);}]},`value`,`${fval(component.record.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description (Markdown)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elz2sDV.value = fval(component.record.description);
ec('textarea');
let cndOaUk = elmnQab.formHandler.getError(`description`);
this.setState('steWb1O', cndOaUk);
if (cndOaUk) { 
let eleE8Ei = eo('div','93Tf',null,`class`,`alert alert-danger`);
text(elmnQab.formHandler.getError(`description`));
ec('div');
}ec('div');
let elWlRT6 = eo('div',null,null,`class`,`form-group`);
elWlRT6.cls = {'group-error': !!elmnQab.formHandler.getError(`stepsToReproduce`) };

            for (let className in elWlRT6.cls) {
                elWlRT6.classList.toggle(className, elWlRT6.cls[className]);
            }  
            let elJdNpj = eo('label',null,null,`for`,`stepsToReproduce`);
text(trans('Steps To Reproduce (Each step in one line without numbering the line)'));
let elal1Gf = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elfg5VV = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.stepsToReproduce = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elmnQab.formHandler.addError(`stepsToReproduce`, 'required', trans('validation.required'));}return elmnQab.formHandler.removeError(`stepsToReproduce`);}]},`value`,`${fval(component.record.stepsToReproduce)}`,`name`,`${(`stepsToReproduce`).toInputName()}`,`placeholder`,`${trans(`Steps To Reproduce (Each step in one line without numbering the line)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`stepsToReproduce`);
elfg5VV.value = fval(component.record.stepsToReproduce);
ec('textarea');
let cndpI9k = elmnQab.formHandler.getError(`stepsToReproduce`);
this.setState('stm_2UZ', cndpI9k);
if (cndpI9k) { 
let elPYYI2 = eo('div','aw4f',null,`class`,`alert alert-danger`);
text(elmnQab.formHandler.getError(`stepsToReproduce`));
ec('div');
}ec('div');
let el2f8Z7 = eo('div',null,null,`class`,`form-group`);
el2f8Z7.cls = {'group-error': !!elmnQab.formHandler.getError(`expectedBehavior`) };

            for (let className in el2f8Z7.cls) {
                el2f8Z7.classList.toggle(className, el2f8Z7.cls[className]);
            }  
            let el3R2H3 = eo('label',null,null,`for`,`expectedBehavior`);
text(trans('Expected Behavior'));
let elgA5iS = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elf2qes = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.expectedBehavior = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elmnQab.formHandler.addError(`expectedBehavior`, 'required', trans('validation.required'));}return elmnQab.formHandler.removeError(`expectedBehavior`);}]},`value`,`${fval(component.record.expectedBehavior)}`,`name`,`${(`expectedBehavior`).toInputName()}`,`placeholder`,`${trans(`Expected Behavior`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`expectedBehavior`);
elf2qes.value = fval(component.record.expectedBehavior);
ec('textarea');
let cnd4Oh_ = elmnQab.formHandler.getError(`expectedBehavior`);
this.setState('stqjN0g', cnd4Oh_);
if (cnd4Oh_) { 
let elwjfND = eo('div','6ayf',null,`class`,`alert alert-danger`);
text(elmnQab.formHandler.getError(`expectedBehavior`));
ec('div');
}ec('div');
let elEHlFC = eo('div',null,null,`class`,`form-group`);
elEHlFC.cls = {'group-error': !!elmnQab.formHandler.getError(`actualResult`) };

            for (let className in elEHlFC.cls) {
                elEHlFC.classList.toggle(className, elEHlFC.cls[className]);
            }  
            let el56ycx = eo('label',null,null,`for`,`actualResult`);
text(trans('Actual Result'));
let elrbHXS = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let ell4OpE = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.actualResult = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elmnQab.formHandler.addError(`actualResult`, 'required', trans('validation.required'));}return elmnQab.formHandler.removeError(`actualResult`);}]},`value`,`${fval(component.record.actualResult)}`,`name`,`${(`actualResult`).toInputName()}`,`placeholder`,`${trans(`Actual Result`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`actualResult`);
ell4OpE.value = fval(component.record.actualResult);
ec('textarea');
let cnd0oOK = elmnQab.formHandler.getError(`actualResult`);
this.setState('staYrJH', cnd0oOK);
if (cnd0oOK) { 
let el0qoDy = eo('div','ejYf',null,`class`,`alert alert-danger`);
text(elmnQab.formHandler.getError(`actualResult`));
ec('div');
}ec('div');
let elFVSSm = eo('div',null,null,`class`,`form-group`);
elFVSSm.cls = {'group-error': !!elmnQab.formHandler.getError(`testingUrl`) };

            for (let className in elFVSSm.cls) {
                elFVSSm.classList.toggle(className, elFVSSm.cls[className]);
            }  
            let elqn8Ji = eo('label',null,null,`for`,`testingUrl`);
text(trans('Testing Url'));
ec('label');
let elMuiGW = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.testingUrl = this.value;}]},`value`,`${fval(component.record.testingUrl)}`,`name`,`${(`testingUrl`).toInputName()}`,`placeholder`,`${trans(`Testing Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`testingUrl`);
elMuiGW.value = fval(component.record.testingUrl);
ec('div');
let elZKUXh = eo('div',null,null,`class`,`row`);
let el0tEXb = eo('div',null,null,`class`,`col`);
let cmpzMfX = this._lc('c8eL306vS', {parent:component,parentTop:flkModal,props:{multiple:true,items:component.project.membersList,value:component.record.assignee},boolAttrs:{multiple:true},attrs:{name:`${(`assignee[]`).toInputName()}`,label:'Assign To'}});
ec('div');
let elnv5qo = eo('div',null,null,`class`,`col`);
let cmp7cS9 = this._lc('c0wCPMkyp', {parent:component,parentTop:flkModal,props:{items:component.priorities,value:component.record.priority},attrs:{name:`${(`priority`).toInputName()}`,label:'Priority',required:''}});
ec('div');
let elIFLoo = eo('div',null,null,`class`,`col`);
let cmpcfeA = this._lc('cytj3rwyb', {parent:component,parentTop:flkModal,props:{value:Object.get(component.record.sprint, 'id', ''),lazyLoading:true,request:component.loadSprints.bind(component)},attrs:{name:`${(`sprint`).toInputName()}`,label:'Sprint'}});
ec('div');
ec('div');
let elXmo2i = eo('div',null,null,`class`,`row m-y-1`);
let elwBvs2 = eo('div',null,null,`class`,`col`);
let cmpJPOG = this._lc('cRCII1OaS', {parent:component,parentTop:flkModal,props:{value:component.record.dueDate,dateTime:true},attrs:{name:`${(`dueDate`).toInputName()}`,label:'Due Date',class:'form-control'}});
ec('div');
let elw9xoo = eo('div',null,null,`class`,`col`);
let cmp29Em = this._lc('cuq4xZal0', {parent:component,parentTop:flkModal,props:{required:true,value:Object.get(component.record.module, 'id', ''),lazyLoading:true,request:component.loadModules.bind(component)},attrs:{name:`${(`module`).toInputName()}`,label:'Module'}});
ec('div');
ec('div');
let elhg8jO = eo('div',null,null,`class`,`row m-y-1`);
let elzHhqm = eo('div',null,null,`class`,`col`);
let cmpUCnu = this._lc('cd_9zQJDu', {parent:component,parentTop:flkModal,props:{items:component.severities,value:component.record.severity},attrs:{name:`${(`severity`).toInputName()}`,label:'severity'}});
ec('div');
let elcrZf7 = eo('div',null,null,`class`,`col`);
let cmpHJKI = this._lc('cSkbgKxrQ', {parent:component,parentTop:flkModal,props:{items:component.classifications,value:component.record.classification},attrs:{name:`${(`classification`).toInputName()}`,label:'classification'}});
ec('div');
let elOcnnO = eo('div',null,null,`class`,`col`);
let cmp9tZM = this._lc('c9uKf1lrr', {parent:component,parentTop:flkModal,props:{items:component.reproducibleOptions,value:component.record.reproducible},attrs:{name:`${(`reproducible`).toInputName()}`,label:'How Much Reproducible It Is',heading:'Reproducible'}});
ec('div');
ec('div');
let elt4Hw1 = eo('div',null,null,`class`,`m-t-2`);
let cmpRD4C = this._lc('cuuziCM4Q', {parent:component,parentTop:flkModal,props:{multiple:true},content:(flkFileInput) => {let elHRaqq = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let el4Z0k7 = eo('strong',null,null,`class`,`ml-1`);
text(`Add Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-cyan bold',label:'Meeting'}});
let el77dxV = eo('span',null,null,`class`,`ml-3`);
component.recordAudio = this._lc('cEbhnV0Tm', {parent:component,parentTop:flkModal,props:{data:component.record}});
ec('span');
ec('div');
let elBxUx0 = eo('div',null,null,`class`,`m-t-1 text-center`);
let elV1DfW = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'medium'}});

                    this.isReadyToGo();
                }
        });