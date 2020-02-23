_Component({
                selector: 'bug-modal',
                c: 'BugModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['modalHeading','submit','project','record','priorities','loadSprints','departments','loadModules','severities','classifications','reproducibleOptions','isValidForm','isSending'],
                children: {cMYwIbxdI:'flk-dropdown-list',cb8FsSZpL:'flk-dropdown-list',cwQvQPQoY:'flk-dropdown-list',cKoFd3t5c:'flk-datepicker',cFX4mhwp9:'flk-dropdown-list',c3Q8JpyZT:'flk-dropdown-list',ceCe_VGD8:'flk-dropdown-list',cdw0WRVOf:'flk-dropdown-list',cZcXsETM6:'flk-file-input',cPL86tLex:'record-audio-input',cRe53kPO4:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cRe53kPO4', {parent:component,props:{overlay:false,esc:false,heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.inputs.getEvent('close')()}},content:(flkModal) => {let elmhUns = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elmhUns.formHandler) {
                    window.cfrmdlr = elmhUns.formHandler = new FormHandler(elmhUns, component);
                } else {
                    window.cfrmdlr = elmhUns.formHandler;
                }
            let elqZe7T = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elqZe7T.value = fval(component.project.id);
let elwM0hx = eo('div',null,null,`class`,`form-group`);
elwM0hx.cls = {'group-error': !!elmhUns.formHandler.getError(`title`) };

            for (let className in elwM0hx.cls) {
                elwM0hx.classList.toggle(className, elwM0hx.cls[className]);
            }  
            let el4Va68 = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let el83HIp = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el9Art_ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elmhUns.formHandler.addError(`title`, 'required', trans('validation.required'));}return elmhUns.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el9Art_.value = fval(component.record.title);
let cndvh96 = elmhUns.formHandler.getError(`title`);
this.setState('stormcy', cndvh96);
if (cndvh96) { 
let elQR0NX = eo('div','0lpf',null,`class`,`alert alert-danger`);
text(elmhUns.formHandler.getError(`title`));
ec('div');
}ec('div');
let eluQiYh = eo('div',null,null,`class`,`form-group`);
eluQiYh.cls = {'group-error': !!elmhUns.formHandler.getError(`description`) };

            for (let className in eluQiYh.cls) {
                eluQiYh.classList.toggle(className, eluQiYh.cls[className]);
            }  
            let elD9p3M = eo('label',null,null,`for`,`description`);
text(trans('Description (Markdown)'));
let eldeXcJ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elFgT94 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elmhUns.formHandler.addError(`description`, 'required', trans('validation.required'));}return elmhUns.formHandler.removeError(`description`);}]},`value`,`${fval(component.record.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description (Markdown)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elFgT94.value = fval(component.record.description);
ec('textarea');
let cndgoAM = elmhUns.formHandler.getError(`description`);
this.setState('stdQVuB', cndgoAM);
if (cndgoAM) { 
let elcdksS = eo('div','gg0f',null,`class`,`alert alert-danger`);
text(elmhUns.formHandler.getError(`description`));
ec('div');
}ec('div');
let elcLTmf = eo('div',null,null,`class`,`form-group`);
elcLTmf.cls = {'group-error': !!elmhUns.formHandler.getError(`stepsToReproduce`) };

            for (let className in elcLTmf.cls) {
                elcLTmf.classList.toggle(className, elcLTmf.cls[className]);
            }  
            let elfw5rv = eo('label',null,null,`for`,`stepsToReproduce`);
text(trans('Steps To Reproduce (Each step in one line without numbering the line)'));
let elKAS2s = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el87apo = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.stepsToReproduce = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elmhUns.formHandler.addError(`stepsToReproduce`, 'required', trans('validation.required'));}return elmhUns.formHandler.removeError(`stepsToReproduce`);}]},`value`,`${fval(component.record.stepsToReproduce)}`,`name`,`${(`stepsToReproduce`).toInputName()}`,`placeholder`,`${trans(`Steps To Reproduce (Each step in one line without numbering the line)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`stepsToReproduce`);
el87apo.value = fval(component.record.stepsToReproduce);
ec('textarea');
let cnds4mj = elmhUns.formHandler.getError(`stepsToReproduce`);
this.setState('stGJUxA', cnds4mj);
if (cnds4mj) { 
let el6u6Sd = eo('div','bjef',null,`class`,`alert alert-danger`);
text(elmhUns.formHandler.getError(`stepsToReproduce`));
ec('div');
}ec('div');
let el6WL8b = eo('div',null,null,`class`,`form-group`);
el6WL8b.cls = {'group-error': !!elmhUns.formHandler.getError(`expectedBehavior`) };

            for (let className in el6WL8b.cls) {
                el6WL8b.classList.toggle(className, el6WL8b.cls[className]);
            }  
            let elfBbLU = eo('label',null,null,`for`,`expectedBehavior`);
text(trans('Expected Behavior'));
let elx2KEI = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el9qrn4 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.expectedBehavior = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elmhUns.formHandler.addError(`expectedBehavior`, 'required', trans('validation.required'));}return elmhUns.formHandler.removeError(`expectedBehavior`);}]},`value`,`${fval(component.record.expectedBehavior)}`,`name`,`${(`expectedBehavior`).toInputName()}`,`placeholder`,`${trans(`Expected Behavior`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`expectedBehavior`);
el9qrn4.value = fval(component.record.expectedBehavior);
ec('textarea');
let cnd8Gc8 = elmhUns.formHandler.getError(`expectedBehavior`);
this.setState('stTjTQL', cnd8Gc8);
if (cnd8Gc8) { 
let el60PaS = eo('div','6Kcf',null,`class`,`alert alert-danger`);
text(elmhUns.formHandler.getError(`expectedBehavior`));
ec('div');
}ec('div');
let el0T40A = eo('div',null,null,`class`,`form-group`);
el0T40A.cls = {'group-error': !!elmhUns.formHandler.getError(`actualResult`) };

            for (let className in el0T40A.cls) {
                el0T40A.classList.toggle(className, el0T40A.cls[className]);
            }  
            let el5OEgv = eo('label',null,null,`for`,`actualResult`);
text(trans('Actual Result'));
let elrfgOH = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elDgeqv = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.actualResult = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elmhUns.formHandler.addError(`actualResult`, 'required', trans('validation.required'));}return elmhUns.formHandler.removeError(`actualResult`);}]},`value`,`${fval(component.record.actualResult)}`,`name`,`${(`actualResult`).toInputName()}`,`placeholder`,`${trans(`Actual Result`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`actualResult`);
elDgeqv.value = fval(component.record.actualResult);
ec('textarea');
let cndUBfm = elmhUns.formHandler.getError(`actualResult`);
this.setState('stsFiHD', cndUBfm);
if (cndUBfm) { 
let elBYUtI = eo('div','9h_f',null,`class`,`alert alert-danger`);
text(elmhUns.formHandler.getError(`actualResult`));
ec('div');
}ec('div');
let elYydcJ = eo('div',null,null,`class`,`form-group`);
elYydcJ.cls = {'group-error': !!elmhUns.formHandler.getError(`testingUrl`) };

            for (let className in elYydcJ.cls) {
                elYydcJ.classList.toggle(className, elYydcJ.cls[className]);
            }  
            let elCGYOr = eo('label',null,null,`for`,`testingUrl`);
text(trans('Testing Url'));
ec('label');
let el7tEQw = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.testingUrl = this.value;}]},`value`,`${fval(component.record.testingUrl)}`,`name`,`${(`testingUrl`).toInputName()}`,`placeholder`,`${trans(`Testing Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`testingUrl`);
el7tEQw.value = fval(component.record.testingUrl);
ec('div');
let elODwJU = eo('div',null,null,`class`,`row`);
let elk_XyG = eo('div',null,null,`class`,`col`);
let cmpnwul = this._lc('cMYwIbxdI', {parent:component,parentTop:flkModal,props:{multiple:true,items:component.project.membersList,value:component.record.assignee},boolAttrs:{multiple:true},attrs:{name:`${(`assignee[]`).toInputName()}`,label:'Assign To'}});
ec('div');
let eljY2TX = eo('div',null,null,`class`,`col`);
let cmpqBLH = this._lc('cb8FsSZpL', {parent:component,parentTop:flkModal,props:{items:component.priorities,value:component.record.priority},attrs:{name:`${(`priority`).toInputName()}`,label:'Priority',required:''}});
ec('div');
let elMKUK7 = eo('div',null,null,`class`,`col`);
let cmpNTdT = this._lc('cwQvQPQoY', {parent:component,parentTop:flkModal,props:{value:Object.get(component.record.sprint, 'id', ''),lazyLoading:true,request:component.loadSprints.bind(component)},attrs:{name:`${(`sprint`).toInputName()}`,label:'Sprint'}});
ec('div');
ec('div');
let elChKfV = eo('div',null,null,`class`,`row m-y-1`);
let elVxgK2 = eo('div',null,null,`class`,`col`);
let cmpTiCm = this._lc('cKoFd3t5c', {parent:component,parentTop:flkModal,props:{value:component.record.dueDate,dateTime:true},attrs:{name:`${(`dueDate`).toInputName()}`,label:'Due Date',class:'form-control'}});
ec('div');
let elKEznU = eo('div',null,null,`class`,`col`);
let cmp4Bzn = this._lc('cFX4mhwp9', {parent:component,parentTop:flkModal,props:{required:true,value:Object.get(component.record.module, 'id', ''),lazyLoading:true,request:component.loadModules.bind(component)},attrs:{name:`${(`module`).toInputName()}`,label:'Module'}});
ec('div');
ec('div');
let eldu3hQ = eo('div',null,null,`class`,`row m-y-1`);
let elODqhx = eo('div',null,null,`class`,`col`);
let cmpihTy = this._lc('c3Q8JpyZT', {parent:component,parentTop:flkModal,props:{items:component.severities,value:component.record.severity},attrs:{name:`${(`severity`).toInputName()}`,label:'severity'}});
ec('div');
let elIdBQB = eo('div',null,null,`class`,`col`);
let cmpECnY = this._lc('ceCe_VGD8', {parent:component,parentTop:flkModal,props:{items:component.classifications,value:component.record.classification},attrs:{name:`${(`classification`).toInputName()}`,label:'classification'}});
ec('div');
let elej5Jj = eo('div',null,null,`class`,`col`);
let cmputsn = this._lc('cdw0WRVOf', {parent:component,parentTop:flkModal,props:{items:component.reproducibleOptions,value:component.record.reproducible},attrs:{name:`${(`reproducible`).toInputName()}`,label:'How Much Reproducible It Is',heading:'Reproducible'}});
ec('div');
ec('div');
let elb1Tq9 = eo('div',null,null,`class`,`m-t-2`);
let cmpeK3l = this._lc('cZcXsETM6', {parent:component,parentTop:flkModal,props:{multiple:true},content:(flkFileInput) => {let eltRgAo = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elwvBnW = eo('strong',null,null,`class`,`ml-1`);
text(`Add Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-cyan bold',label:'Meeting'}});
let elFKhny = eo('span',null,null,`class`,`ml-3`);
component.recordAudio = this._lc('cPL86tLex', {parent:component,parentTop:flkModal,props:{data:component.record}});
ec('span');
ec('div');
let elxii5r = eo('div',null,null,`class`,`m-t-1 text-center`);
let elzzYO0 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'medium'}});

                    this.isReadyToGo();
                }
        });