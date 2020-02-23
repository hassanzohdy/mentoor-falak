_Component({
                selector: 'bug-modal',
                c: 'BugModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['modalHeading','submit','project','record','priorities','loadSprints','departments','loadModules','severities','classifications','reproducibleOptions','isValidForm','isSending'],
                children: {ctAT7VxLA:'flk-dropdown-list',cce5w_rxo:'flk-dropdown-list',cyuzjHTVj:'flk-dropdown-list',cVUriIHue:'flk-datepicker',cah4Fr6te:'flk-dropdown-list',chsIGdxZA:'flk-dropdown-list',cQopRRkdd:'flk-dropdown-list',czUJM8HI_:'flk-dropdown-list',cJHdvvwme:'flk-file-input',c_84qR1cr:'record-audio-input',c3kY_nVzt:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('c3kY_nVzt', {parent:component,props:{overlay:false,esc:false,heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.inputs.getEvent('close')()}},content:(flkModal) => {let elNOIdw = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elNOIdw.formHandler) {
                    window.cfrmdlr = elNOIdw.formHandler = new FormHandler(elNOIdw, component);
                } else {
                    window.cfrmdlr = elNOIdw.formHandler;
                }
            let elsxV1Q = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elsxV1Q.value = fval(component.project.id);
let elY_aAF = eo('div',null,null,`class`,`form-group`);
elY_aAF.cls = {'group-error': !!elNOIdw.formHandler.getError(`title`) };

            for (let className in elY_aAF.cls) {
                elY_aAF.classList.toggle(className, elY_aAF.cls[className]);
            }  
            let ellm7NN = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let elcN9dw = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elcKGjv = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elNOIdw.formHandler.addError(`title`, 'required', trans('validation.required'));}return elNOIdw.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elcKGjv.value = fval(component.record.title);
let cndWbLO = elNOIdw.formHandler.getError(`title`);
this.setState('stUk0Fu', cndWbLO);
if (cndWbLO) { 
let elsAML4 = eo('div','46tf',null,`class`,`alert alert-danger`);
text(elNOIdw.formHandler.getError(`title`));
ec('div');
}ec('div');
let elxwxUI = eo('div',null,null,`class`,`form-group`);
elxwxUI.cls = {'group-error': !!elNOIdw.formHandler.getError(`description`) };

            for (let className in elxwxUI.cls) {
                elxwxUI.classList.toggle(className, elxwxUI.cls[className]);
            }  
            let elB3LQq = eo('label',null,null,`for`,`description`);
text(trans('Description (Markdown)'));
let elyOvWZ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eldmuwl = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elNOIdw.formHandler.addError(`description`, 'required', trans('validation.required'));}return elNOIdw.formHandler.removeError(`description`);}]},`value`,`${fval(component.record.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description (Markdown)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
eldmuwl.value = fval(component.record.description);
ec('textarea');
let cndEuTI = elNOIdw.formHandler.getError(`description`);
this.setState('stw33OT', cndEuTI);
if (cndEuTI) { 
let elMlHO2 = eo('div','Blhf',null,`class`,`alert alert-danger`);
text(elNOIdw.formHandler.getError(`description`));
ec('div');
}ec('div');
let elpsE5s = eo('div',null,null,`class`,`form-group`);
elpsE5s.cls = {'group-error': !!elNOIdw.formHandler.getError(`stepsToReproduce`) };

            for (let className in elpsE5s.cls) {
                elpsE5s.classList.toggle(className, elpsE5s.cls[className]);
            }  
            let elvgLlW = eo('label',null,null,`for`,`stepsToReproduce`);
text(trans('Steps To Reproduce (Each step in one line without numbering the line)'));
let elJqA8Y = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elRfrA_ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.stepsToReproduce = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elNOIdw.formHandler.addError(`stepsToReproduce`, 'required', trans('validation.required'));}return elNOIdw.formHandler.removeError(`stepsToReproduce`);}]},`value`,`${fval(component.record.stepsToReproduce)}`,`name`,`${(`stepsToReproduce`).toInputName()}`,`placeholder`,`${trans(`Steps To Reproduce (Each step in one line without numbering the line)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`stepsToReproduce`);
elRfrA_.value = fval(component.record.stepsToReproduce);
ec('textarea');
let cnd0geh = elNOIdw.formHandler.getError(`stepsToReproduce`);
this.setState('st3eah7', cnd0geh);
if (cnd0geh) { 
let elmVlgx = eo('div','7tLf',null,`class`,`alert alert-danger`);
text(elNOIdw.formHandler.getError(`stepsToReproduce`));
ec('div');
}ec('div');
let elbxCWj = eo('div',null,null,`class`,`form-group`);
elbxCWj.cls = {'group-error': !!elNOIdw.formHandler.getError(`expectedBehavior`) };

            for (let className in elbxCWj.cls) {
                elbxCWj.classList.toggle(className, elbxCWj.cls[className]);
            }  
            let elgxK2s = eo('label',null,null,`for`,`expectedBehavior`);
text(trans('Expected Behavior'));
let elm7N9v = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elTKLqb = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.expectedBehavior = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elNOIdw.formHandler.addError(`expectedBehavior`, 'required', trans('validation.required'));}return elNOIdw.formHandler.removeError(`expectedBehavior`);}]},`value`,`${fval(component.record.expectedBehavior)}`,`name`,`${(`expectedBehavior`).toInputName()}`,`placeholder`,`${trans(`Expected Behavior`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`expectedBehavior`);
elTKLqb.value = fval(component.record.expectedBehavior);
ec('textarea');
let cndUhLO = elNOIdw.formHandler.getError(`expectedBehavior`);
this.setState('sty6uW_', cndUhLO);
if (cndUhLO) { 
let elXGCJq = eo('div','JG0f',null,`class`,`alert alert-danger`);
text(elNOIdw.formHandler.getError(`expectedBehavior`));
ec('div');
}ec('div');
let elQaYo6 = eo('div',null,null,`class`,`form-group`);
elQaYo6.cls = {'group-error': !!elNOIdw.formHandler.getError(`actualResult`) };

            for (let className in elQaYo6.cls) {
                elQaYo6.classList.toggle(className, elQaYo6.cls[className]);
            }  
            let elVhTv2 = eo('label',null,null,`for`,`actualResult`);
text(trans('Actual Result'));
let el4yN1j = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elsSD6X = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.actualResult = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elNOIdw.formHandler.addError(`actualResult`, 'required', trans('validation.required'));}return elNOIdw.formHandler.removeError(`actualResult`);}]},`value`,`${fval(component.record.actualResult)}`,`name`,`${(`actualResult`).toInputName()}`,`placeholder`,`${trans(`Actual Result`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`actualResult`);
elsSD6X.value = fval(component.record.actualResult);
ec('textarea');
let cndzvh1 = elNOIdw.formHandler.getError(`actualResult`);
this.setState('st1u_PY', cndzvh1);
if (cndzvh1) { 
let elyjTId = eo('div','NWKf',null,`class`,`alert alert-danger`);
text(elNOIdw.formHandler.getError(`actualResult`));
ec('div');
}ec('div');
let elFkWH3 = eo('div',null,null,`class`,`form-group`);
elFkWH3.cls = {'group-error': !!elNOIdw.formHandler.getError(`testingUrl`) };

            for (let className in elFkWH3.cls) {
                elFkWH3.classList.toggle(className, elFkWH3.cls[className]);
            }  
            let eld64Z5 = eo('label',null,null,`for`,`testingUrl`);
text(trans('Testing Url'));
ec('label');
let el6QWLd = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.testingUrl = this.value;}]},`value`,`${fval(component.record.testingUrl)}`,`name`,`${(`testingUrl`).toInputName()}`,`placeholder`,`${trans(`Testing Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`testingUrl`);
el6QWLd.value = fval(component.record.testingUrl);
ec('div');
let el3T1wP = eo('div',null,null,`class`,`row`);
let elrkiSQ = eo('div',null,null,`class`,`col`);
let cmpyWgS = this._lc('ctAT7VxLA', {parent:component,parentTop:flkModal,props:{multiple:true,items:component.project.membersList,value:component.record.assignee},boolAttrs:{multiple:true},attrs:{name:`${(`assignee[]`).toInputName()}`,label:'Assign To'}});
ec('div');
let eluPJFF = eo('div',null,null,`class`,`col`);
let cmpSYDT = this._lc('cce5w_rxo', {parent:component,parentTop:flkModal,props:{items:component.priorities,value:component.record.priority},attrs:{name:`${(`priority`).toInputName()}`,label:'Priority',required:''}});
ec('div');
let elas4bp = eo('div',null,null,`class`,`col`);
let cmp_dIH = this._lc('cyuzjHTVj', {parent:component,parentTop:flkModal,props:{value:Object.get(component.record.sprint, 'id', ''),lazyLoading:true,request:component.loadSprints.bind(component)},attrs:{name:`${(`sprint`).toInputName()}`,label:'Sprint'}});
ec('div');
ec('div');
let el38CeD = eo('div',null,null,`class`,`row m-y-1`);
let elLoH2w = eo('div',null,null,`class`,`col`);
let cmpK69a = this._lc('cVUriIHue', {parent:component,parentTop:flkModal,props:{value:component.record.dueDate,dateTime:true},attrs:{name:`${(`dueDate`).toInputName()}`,label:'Due Date',class:'form-control'}});
ec('div');
let eltZ_Hs = eo('div',null,null,`class`,`col`);
let cmpJ1I3 = this._lc('cah4Fr6te', {parent:component,parentTop:flkModal,props:{required:true,value:Object.get(component.record.module, 'id', ''),lazyLoading:true,request:component.loadModules.bind(component)},attrs:{name:`${(`module`).toInputName()}`,label:'Module'}});
ec('div');
ec('div');
let eljh9It = eo('div',null,null,`class`,`row m-y-1`);
let elDHOLN = eo('div',null,null,`class`,`col`);
let cmpa2gO = this._lc('chsIGdxZA', {parent:component,parentTop:flkModal,props:{items:component.severities,value:component.record.severity},attrs:{name:`${(`severity`).toInputName()}`,label:'severity'}});
ec('div');
let elJhH5L = eo('div',null,null,`class`,`col`);
let cmpEI47 = this._lc('cQopRRkdd', {parent:component,parentTop:flkModal,props:{items:component.classifications,value:component.record.classification},attrs:{name:`${(`classification`).toInputName()}`,label:'classification'}});
ec('div');
let el4iGNF = eo('div',null,null,`class`,`col`);
let cmp28A1 = this._lc('czUJM8HI_', {parent:component,parentTop:flkModal,props:{items:component.reproducibleOptions,value:component.record.reproducible},attrs:{name:`${(`reproducible`).toInputName()}`,label:'How Much Reproducible It Is',heading:'Reproducible'}});
ec('div');
ec('div');
let elAmjoE = eo('div',null,null,`class`,`m-t-2`);
let cmpjCiX = this._lc('cJHdvvwme', {parent:component,parentTop:flkModal,props:{multiple:true},content:(flkFileInput) => {let elREt3N = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let el9gIR5 = eo('strong',null,null,`class`,`ml-1`);
text(`Add Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-cyan bold',label:'Meeting'}});
let el1_rq_ = eo('span',null,null,`class`,`ml-3`);
component.recordAudio = this._lc('c_84qR1cr', {parent:component,parentTop:flkModal,props:{data:component.record}});
ec('span');
ec('div');
let elCrOpX = eo('div',null,null,`class`,`m-t-1 text-center`);
let elFro3z = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'medium'}});

                    this.isReadyToGo();
                }
        });