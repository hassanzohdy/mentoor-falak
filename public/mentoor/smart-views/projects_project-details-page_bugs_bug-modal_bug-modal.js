_Component({
                selector: 'bug-modal',
                c: 'BugModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['modalHeading','submit','project','record','priorities','loadSprints','departments','loadModules','severities','classifications','reproducibleOptions','isValidForm','isSending'],
                children: {cpNUs4J2a:'flk-dropdown-list',cAx6pJg4O:'flk-dropdown-list',cPOeqEZJr:'flk-dropdown-list',cuOP3m1TG:'flk-datepicker',cYQH6Iyib:'flk-dropdown-list',cyVk3Ihk5:'flk-dropdown-list',cuJ_Vh8c0:'flk-dropdown-list',cZGxMVxkz:'flk-dropdown-list',czqAFlX4i:'flk-file-input',c1AKMrLO0:'record-audio-input',cSXwzZ3A0:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cSXwzZ3A0', {parent:component,props:{overlay:false,esc:false,heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.inputs.getEvent('close')()}},content:(flkModal) => {let elNNDEY = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elNNDEY.formHandler) {
                    window.cfrmdlr = elNNDEY.formHandler = new FormHandler(elNNDEY, component);
                } else {
                    window.cfrmdlr = elNNDEY.formHandler;
                }
            let elHQO17 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elHQO17.value = fval(component.project.id);
let elogpbI = eo('div',null,null,`class`,`form-group`);
elogpbI.cls = {'group-error': !!elNNDEY.formHandler.getError(`title`) };

            for (let className in elogpbI.cls) {
                elogpbI.classList.toggle(className, elogpbI.cls[className]);
            }  
            let elaor1Z = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let el2ncqp = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elvSSQj = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elNNDEY.formHandler.addError(`title`, 'required', trans('validation.required'));}return elNNDEY.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elvSSQj.value = fval(component.record.title);
let cndYPqL = elNNDEY.formHandler.getError(`title`);
this.setState('stN88a7', cndYPqL);
if (cndYPqL) { 
let el2l8K0 = eo('div','XMvf',null,`class`,`alert alert-danger`);
text(elNNDEY.formHandler.getError(`title`));
ec('div');
}ec('div');
let elYA1YG = eo('div',null,null,`class`,`form-group`);
elYA1YG.cls = {'group-error': !!elNNDEY.formHandler.getError(`description`) };

            for (let className in elYA1YG.cls) {
                elYA1YG.classList.toggle(className, elYA1YG.cls[className]);
            }  
            let eljMe03 = eo('label',null,null,`for`,`description`);
text(trans('Description (Markdown)'));
let elRL_Xp = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let els_rdf = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elNNDEY.formHandler.addError(`description`, 'required', trans('validation.required'));}return elNNDEY.formHandler.removeError(`description`);}]},`value`,`${fval(component.record.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description (Markdown)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
els_rdf.value = fval(component.record.description);
ec('textarea');
let cndHQWT = elNNDEY.formHandler.getError(`description`);
this.setState('stRI6Um', cndHQWT);
if (cndHQWT) { 
let eluCThW = eo('div','o58f',null,`class`,`alert alert-danger`);
text(elNNDEY.formHandler.getError(`description`));
ec('div');
}ec('div');
let elnQXP1 = eo('div',null,null,`class`,`form-group`);
elnQXP1.cls = {'group-error': !!elNNDEY.formHandler.getError(`stepsToReproduce`) };

            for (let className in elnQXP1.cls) {
                elnQXP1.classList.toggle(className, elnQXP1.cls[className]);
            }  
            let elbp1om = eo('label',null,null,`for`,`stepsToReproduce`);
text(trans('Steps To Reproduce (Each step in one line without numbering the line)'));
let elmhRad = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elBxice = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.stepsToReproduce = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elNNDEY.formHandler.addError(`stepsToReproduce`, 'required', trans('validation.required'));}return elNNDEY.formHandler.removeError(`stepsToReproduce`);}]},`value`,`${fval(component.record.stepsToReproduce)}`,`name`,`${(`stepsToReproduce`).toInputName()}`,`placeholder`,`${trans(`Steps To Reproduce (Each step in one line without numbering the line)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`stepsToReproduce`);
elBxice.value = fval(component.record.stepsToReproduce);
ec('textarea');
let cnd6jyw = elNNDEY.formHandler.getError(`stepsToReproduce`);
this.setState('stYSygU', cnd6jyw);
if (cnd6jyw) { 
let elDh2Mp = eo('div','WdWf',null,`class`,`alert alert-danger`);
text(elNNDEY.formHandler.getError(`stepsToReproduce`));
ec('div');
}ec('div');
let elSK3oK = eo('div',null,null,`class`,`form-group`);
elSK3oK.cls = {'group-error': !!elNNDEY.formHandler.getError(`expectedBehavior`) };

            for (let className in elSK3oK.cls) {
                elSK3oK.classList.toggle(className, elSK3oK.cls[className]);
            }  
            let el_Ykoz = eo('label',null,null,`for`,`expectedBehavior`);
text(trans('Expected Behavior'));
let eleFaJG = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elEMmnk = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.expectedBehavior = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elNNDEY.formHandler.addError(`expectedBehavior`, 'required', trans('validation.required'));}return elNNDEY.formHandler.removeError(`expectedBehavior`);}]},`value`,`${fval(component.record.expectedBehavior)}`,`name`,`${(`expectedBehavior`).toInputName()}`,`placeholder`,`${trans(`Expected Behavior`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`expectedBehavior`);
elEMmnk.value = fval(component.record.expectedBehavior);
ec('textarea');
let cndpAGY = elNNDEY.formHandler.getError(`expectedBehavior`);
this.setState('stLBP2g', cndpAGY);
if (cndpAGY) { 
let elVeKYq = eo('div','Lynf',null,`class`,`alert alert-danger`);
text(elNNDEY.formHandler.getError(`expectedBehavior`));
ec('div');
}ec('div');
let el9CURn = eo('div',null,null,`class`,`form-group`);
el9CURn.cls = {'group-error': !!elNNDEY.formHandler.getError(`actualResult`) };

            for (let className in el9CURn.cls) {
                el9CURn.classList.toggle(className, el9CURn.cls[className]);
            }  
            let el4Xedk = eo('label',null,null,`for`,`actualResult`);
text(trans('Actual Result'));
let elEjnEu = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elNj43X = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.actualResult = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elNNDEY.formHandler.addError(`actualResult`, 'required', trans('validation.required'));}return elNNDEY.formHandler.removeError(`actualResult`);}]},`value`,`${fval(component.record.actualResult)}`,`name`,`${(`actualResult`).toInputName()}`,`placeholder`,`${trans(`Actual Result`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`actualResult`);
elNj43X.value = fval(component.record.actualResult);
ec('textarea');
let cndBVTP = elNNDEY.formHandler.getError(`actualResult`);
this.setState('sthFsfD', cndBVTP);
if (cndBVTP) { 
let elxAaMI = eo('div','0lpf',null,`class`,`alert alert-danger`);
text(elNNDEY.formHandler.getError(`actualResult`));
ec('div');
}ec('div');
let elV9qsd = eo('div',null,null,`class`,`form-group`);
elV9qsd.cls = {'group-error': !!elNNDEY.formHandler.getError(`testingUrl`) };

            for (let className in elV9qsd.cls) {
                elV9qsd.classList.toggle(className, elV9qsd.cls[className]);
            }  
            let elaKjxC = eo('label',null,null,`for`,`testingUrl`);
text(trans('Testing Url'));
ec('label');
let elchiHN = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.testingUrl = this.value;}]},`value`,`${fval(component.record.testingUrl)}`,`name`,`${(`testingUrl`).toInputName()}`,`placeholder`,`${trans(`Testing Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`testingUrl`);
elchiHN.value = fval(component.record.testingUrl);
ec('div');
let elMTWnB = eo('div',null,null,`class`,`row`);
let elY8k6X = eo('div',null,null,`class`,`col`);
let cmpjaXb = this._lc('cpNUs4J2a', {parent:component,parentTop:flkModal,props:{multiple:true,items:component.project.membersList,value:component.record.assignee},boolAttrs:{multiple:true},attrs:{name:`${(`assignee[]`).toInputName()}`,label:'Assign To'}});
ec('div');
let elcNTQr = eo('div',null,null,`class`,`col`);
let cmpYMYr = this._lc('cAx6pJg4O', {parent:component,parentTop:flkModal,props:{items:component.priorities,value:component.record.priority},attrs:{name:`${(`priority`).toInputName()}`,label:'Priority',required:''}});
ec('div');
let eldDL21 = eo('div',null,null,`class`,`col`);
let cmpISFs = this._lc('cPOeqEZJr', {parent:component,parentTop:flkModal,props:{value:Object.get(component.record.sprint, 'id', ''),lazyLoading:true,request:component.loadSprints.bind(component)},attrs:{name:`${(`sprint`).toInputName()}`,label:'Sprint'}});
ec('div');
ec('div');
let elWygEL = eo('div',null,null,`class`,`row m-y-1`);
let el98aae = eo('div',null,null,`class`,`col`);
let cmpk8Cb = this._lc('cuOP3m1TG', {parent:component,parentTop:flkModal,props:{value:component.record.dueDate,dateTime:true},attrs:{name:`${(`dueDate`).toInputName()}`,label:'Due Date',class:'form-control'}});
ec('div');
let eli28w6 = eo('div',null,null,`class`,`col`);
let cmppoPD = this._lc('cYQH6Iyib', {parent:component,parentTop:flkModal,props:{required:true,value:Object.get(component.record.module, 'id', ''),lazyLoading:true,request:component.loadModules.bind(component)},attrs:{name:`${(`module`).toInputName()}`,label:'Module'}});
ec('div');
ec('div');
let elAzmOC = eo('div',null,null,`class`,`row m-y-1`);
let el8ENsM = eo('div',null,null,`class`,`col`);
let cmpK58e = this._lc('cyVk3Ihk5', {parent:component,parentTop:flkModal,props:{items:component.severities,value:component.record.severity},attrs:{name:`${(`severity`).toInputName()}`,label:'severity'}});
ec('div');
let elL2iFl = eo('div',null,null,`class`,`col`);
let cmpwwDv = this._lc('cuJ_Vh8c0', {parent:component,parentTop:flkModal,props:{items:component.classifications,value:component.record.classification},attrs:{name:`${(`classification`).toInputName()}`,label:'classification'}});
ec('div');
let elgbTnf = eo('div',null,null,`class`,`col`);
let cmpMhNm = this._lc('cZGxMVxkz', {parent:component,parentTop:flkModal,props:{items:component.reproducibleOptions,value:component.record.reproducible},attrs:{name:`${(`reproducible`).toInputName()}`,label:'How Much Reproducible It Is',heading:'Reproducible'}});
ec('div');
ec('div');
let elHrYq1 = eo('div',null,null,`class`,`m-t-2`);
let cmplp5S = this._lc('czqAFlX4i', {parent:component,parentTop:flkModal,props:{multiple:true},content:(flkFileInput) => {let elPewp_ = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let el076Tl = eo('strong',null,null,`class`,`ml-1`);
text(`Add Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-cyan bold',label:'Meeting'}});
let elFCmWI = eo('span',null,null,`class`,`ml-3`);
component.recordAudio = this._lc('c1AKMrLO0', {parent:component,parentTop:flkModal,props:{data:component.record}});
ec('span');
ec('div');
let elJqADz = eo('div',null,null,`class`,`m-t-1 text-center`);
let elZs7bX = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'medium'}});

                    this.isReadyToGo();
                }
        });