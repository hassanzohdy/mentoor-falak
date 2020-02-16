_Component({
                selector: 'bug-modal',
                c: 'BugModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['modalHeading','submit','project','record','priorities','loadSprints','departments','loadModules','severities','classifications','reproducibleOptions','isValidForm','isSending'],
                children: {cyGx3SZ_0:'flk-dropdown-list',cZNpEvTdx:'flk-dropdown-list',cGfgBSNRk:'flk-dropdown-list',cSlPTTGEe:'flk-datepicker',cJmce6S6s:'flk-dropdown-list',cxXFcVrwK:'flk-dropdown-list',ck7krC9kt:'flk-dropdown-list',cKLxv1OpI:'flk-dropdown-list',cYTQ2888l:'flk-file-input',cKCSzry2r:'record-audio-input',chRRxNQMl:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('chRRxNQMl', {parent:component,props:{overlay:false,esc:false,heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.inputs.getEvent('close')()}},content:(flkModal) => {let elW8lXw = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elW8lXw.formHandler) {
                    window.cfrmdlr = elW8lXw.formHandler = new FormHandler(elW8lXw, component);
                } else {
                    window.cfrmdlr = elW8lXw.formHandler;
                }
            let elRa6AK = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elRa6AK.value = fval(component.project.id);
let el2FBaq = eo('div',null,null,`class`,`form-group`);
el2FBaq.cls = {'group-error': !!elW8lXw.formHandler.getError(`title`) };

            for (let className in el2FBaq.cls) {
                el2FBaq.classList.toggle(className, el2FBaq.cls[className]);
            }  
            let el0NKmY = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let el7Aqyk = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el0Igja = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elW8lXw.formHandler.addError(`title`, 'required', trans('validation.required'));}return elW8lXw.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el0Igja.value = fval(component.record.title);
let cndKBCu = elW8lXw.formHandler.getError(`title`);
this.setState('st5Z0yi', cndKBCu);
if (cndKBCu) { 
let elKdxNN = eo('div','OVnf',null,`class`,`alert alert-danger`);
text(elW8lXw.formHandler.getError(`title`));
ec('div');
}ec('div');
let el2wA3V = eo('div',null,null,`class`,`form-group`);
el2wA3V.cls = {'group-error': !!elW8lXw.formHandler.getError(`description`) };

            for (let className in el2wA3V.cls) {
                el2wA3V.classList.toggle(className, el2wA3V.cls[className]);
            }  
            let el2VAtN = eo('label',null,null,`for`,`description`);
text(trans('Description (Markdown)'));
let elzmEhY = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elS0qH6 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elW8lXw.formHandler.addError(`description`, 'required', trans('validation.required'));}return elW8lXw.formHandler.removeError(`description`);}]},`value`,`${fval(component.record.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description (Markdown)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elS0qH6.value = fval(component.record.description);
ec('textarea');
let cndWAOy = elW8lXw.formHandler.getError(`description`);
this.setState('stQB1mn', cndWAOy);
if (cndWAOy) { 
let elbX88y = eo('div','E3Kf',null,`class`,`alert alert-danger`);
text(elW8lXw.formHandler.getError(`description`));
ec('div');
}ec('div');
let elanlfy = eo('div',null,null,`class`,`form-group`);
elanlfy.cls = {'group-error': !!elW8lXw.formHandler.getError(`stepsToReproduce`) };

            for (let className in elanlfy.cls) {
                elanlfy.classList.toggle(className, elanlfy.cls[className]);
            }  
            let elEU9_i = eo('label',null,null,`for`,`stepsToReproduce`);
text(trans('Steps To Reproduce (Each step in one line without numbering the line)'));
let elc0wGd = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el4JdJt = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.stepsToReproduce = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elW8lXw.formHandler.addError(`stepsToReproduce`, 'required', trans('validation.required'));}return elW8lXw.formHandler.removeError(`stepsToReproduce`);}]},`value`,`${fval(component.record.stepsToReproduce)}`,`name`,`${(`stepsToReproduce`).toInputName()}`,`placeholder`,`${trans(`Steps To Reproduce (Each step in one line without numbering the line)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`stepsToReproduce`);
el4JdJt.value = fval(component.record.stepsToReproduce);
ec('textarea');
let cnd1l5Z = elW8lXw.formHandler.getError(`stepsToReproduce`);
this.setState('stXbvEL', cnd1l5Z);
if (cnd1l5Z) { 
let elIdIv7 = eo('div','lMcf',null,`class`,`alert alert-danger`);
text(elW8lXw.formHandler.getError(`stepsToReproduce`));
ec('div');
}ec('div');
let elZn0DK = eo('div',null,null,`class`,`form-group`);
elZn0DK.cls = {'group-error': !!elW8lXw.formHandler.getError(`expectedBehavior`) };

            for (let className in elZn0DK.cls) {
                elZn0DK.classList.toggle(className, elZn0DK.cls[className]);
            }  
            let elIdXEC = eo('label',null,null,`for`,`expectedBehavior`);
text(trans('Expected Behavior'));
let elDkaZI = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el9ZBO7 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.expectedBehavior = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elW8lXw.formHandler.addError(`expectedBehavior`, 'required', trans('validation.required'));}return elW8lXw.formHandler.removeError(`expectedBehavior`);}]},`value`,`${fval(component.record.expectedBehavior)}`,`name`,`${(`expectedBehavior`).toInputName()}`,`placeholder`,`${trans(`Expected Behavior`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`expectedBehavior`);
el9ZBO7.value = fval(component.record.expectedBehavior);
ec('textarea');
let cndnb1d = elW8lXw.formHandler.getError(`expectedBehavior`);
this.setState('stl0xAx', cndnb1d);
if (cndnb1d) { 
let elZ80Gm = eo('div','hNpf',null,`class`,`alert alert-danger`);
text(elW8lXw.formHandler.getError(`expectedBehavior`));
ec('div');
}ec('div');
let elV1ChG = eo('div',null,null,`class`,`form-group`);
elV1ChG.cls = {'group-error': !!elW8lXw.formHandler.getError(`actualResult`) };

            for (let className in elV1ChG.cls) {
                elV1ChG.classList.toggle(className, elV1ChG.cls[className]);
            }  
            let el0bk9J = eo('label',null,null,`for`,`actualResult`);
text(trans('Actual Result'));
let elbMRY_ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elHYinE = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.actualResult = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elW8lXw.formHandler.addError(`actualResult`, 'required', trans('validation.required'));}return elW8lXw.formHandler.removeError(`actualResult`);}]},`value`,`${fval(component.record.actualResult)}`,`name`,`${(`actualResult`).toInputName()}`,`placeholder`,`${trans(`Actual Result`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`actualResult`);
elHYinE.value = fval(component.record.actualResult);
ec('textarea');
let cndQXxp = elW8lXw.formHandler.getError(`actualResult`);
this.setState('st9UWr8', cndQXxp);
if (cndQXxp) { 
let elRaosh = eo('div','u4vf',null,`class`,`alert alert-danger`);
text(elW8lXw.formHandler.getError(`actualResult`));
ec('div');
}ec('div');
let elIwGm_ = eo('div',null,null,`class`,`form-group`);
elIwGm_.cls = {'group-error': !!elW8lXw.formHandler.getError(`testingUrl`) };

            for (let className in elIwGm_.cls) {
                elIwGm_.classList.toggle(className, elIwGm_.cls[className]);
            }  
            let elsNXHk = eo('label',null,null,`for`,`testingUrl`);
text(trans('Testing Url'));
ec('label');
let el0E0vM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.testingUrl = this.value;}]},`value`,`${fval(component.record.testingUrl)}`,`name`,`${(`testingUrl`).toInputName()}`,`placeholder`,`${trans(`Testing Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`testingUrl`);
el0E0vM.value = fval(component.record.testingUrl);
ec('div');
let elbo6zL = eo('div',null,null,`class`,`row`);
let el4Zb6N = eo('div',null,null,`class`,`col`);
let cmpycq0 = this._lc('cyGx3SZ_0', {parent:component,parentTop:flkModal,props:{multiple:true,items:component.project.membersList,value:component.record.assignee},boolAttrs:{multiple:true},attrs:{name:`${(`assignee[]`).toInputName()}`,label:'Assign To'}});
ec('div');
let eliHMtR = eo('div',null,null,`class`,`col`);
let cmp1Raz = this._lc('cZNpEvTdx', {parent:component,parentTop:flkModal,props:{items:component.priorities,value:component.record.priority},attrs:{name:`${(`priority`).toInputName()}`,label:'Priority',required:''}});
ec('div');
let elQE2WW = eo('div',null,null,`class`,`col`);
let cmpZS1w = this._lc('cGfgBSNRk', {parent:component,parentTop:flkModal,props:{value:Object.get(component.record.sprint, 'id', ''),lazyLoading:true,request:component.loadSprints.bind(component)},attrs:{name:`${(`sprint`).toInputName()}`,label:'Sprint'}});
ec('div');
ec('div');
let elodrww = eo('div',null,null,`class`,`row m-y-1`);
let elFbU1V = eo('div',null,null,`class`,`col`);
let cmpx_C8 = this._lc('cSlPTTGEe', {parent:component,parentTop:flkModal,props:{value:component.record.dueDate,dateTime:true},attrs:{name:`${(`dueDate`).toInputName()}`,label:'Due Date',class:'form-control'}});
ec('div');
let ellTht7 = eo('div',null,null,`class`,`col`);
let cmpELnf = this._lc('cJmce6S6s', {parent:component,parentTop:flkModal,props:{required:true,value:Object.get(component.record.module, 'id', ''),lazyLoading:true,request:component.loadModules.bind(component)},attrs:{name:`${(`module`).toInputName()}`,label:'Module'}});
ec('div');
ec('div');
let elXK44Q = eo('div',null,null,`class`,`row m-y-1`);
let el3CXG8 = eo('div',null,null,`class`,`col`);
let cmpMV3H = this._lc('cxXFcVrwK', {parent:component,parentTop:flkModal,props:{items:component.severities,value:component.record.severity},attrs:{name:`${(`severity`).toInputName()}`,label:'severity'}});
ec('div');
let elrwVQi = eo('div',null,null,`class`,`col`);
let cmpDoAz = this._lc('ck7krC9kt', {parent:component,parentTop:flkModal,props:{items:component.classifications,value:component.record.classification},attrs:{name:`${(`classification`).toInputName()}`,label:'classification'}});
ec('div');
let elpVNgv = eo('div',null,null,`class`,`col`);
let cmpajwE = this._lc('cKLxv1OpI', {parent:component,parentTop:flkModal,props:{items:component.reproducibleOptions,value:component.record.reproducible},attrs:{name:`${(`reproducible`).toInputName()}`,label:'How Much Reproducible It Is',heading:'Reproducible'}});
ec('div');
ec('div');
let elmdhvb = eo('div',null,null,`class`,`m-t-2`);
let cmpVr0K = this._lc('cYTQ2888l', {parent:component,parentTop:flkModal,props:{multiple:true},content:(flkFileInput) => {let elQttAH = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elZKBNS = eo('strong',null,null,`class`,`ml-1`);
text(`Add Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-cyan bold',label:'Meeting'}});
let elrb3HO = eo('span',null,null,`class`,`ml-3`);
component.recordAudio = this._lc('cKCSzry2r', {parent:component,parentTop:flkModal,props:{data:component.record}});
ec('span');
ec('div');
let eleQKDe = eo('div',null,null,`class`,`m-t-1 text-center`);
let elaJIUI = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'medium'}});

                    this.isReadyToGo();
                }
        });