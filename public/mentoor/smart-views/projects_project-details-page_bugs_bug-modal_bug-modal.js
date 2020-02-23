_Component({
                selector: 'bug-modal',
                c: 'BugModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['modalHeading','submit','project','record','priorities','loadSprints','departments','loadModules','severities','classifications','reproducibleOptions','isValidForm','isSending'],
                children: {c21BI0XQo:'flk-dropdown-list',cN20Y1XBf:'flk-dropdown-list',c1NmXNJdh:'flk-dropdown-list',cuJo4GQVg:'flk-datepicker',cqTlyCbHG:'flk-dropdown-list',ceiqF26Pd:'flk-dropdown-list',cFzTqHitO:'flk-dropdown-list',cXnKWgw9O:'flk-dropdown-list',cJFXB5xC5:'flk-file-input',c4Ym49hBj:'record-audio-input',cQ9JByUty:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cQ9JByUty', {parent:component,props:{overlay:false,esc:false,heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.inputs.getEvent('close')()}},content:(flkModal) => {let elMGrLH = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elMGrLH.formHandler) {
                    window.cfrmdlr = elMGrLH.formHandler = new FormHandler(elMGrLH, component);
                } else {
                    window.cfrmdlr = elMGrLH.formHandler;
                }
            let elcYNa7 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elcYNa7.value = fval(component.project.id);
let elFVE41 = eo('div',null,null,`class`,`form-group`);
elFVE41.cls = {'group-error': !!elMGrLH.formHandler.getError(`title`) };

            for (let className in elFVE41.cls) {
                elFVE41.classList.toggle(className, elFVE41.cls[className]);
            }  
            let elVv_zQ = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let el2kkPV = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elz7NWQ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elMGrLH.formHandler.addError(`title`, 'required', trans('validation.required'));}return elMGrLH.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elz7NWQ.value = fval(component.record.title);
let cnd_zA2 = elMGrLH.formHandler.getError(`title`);
this.setState('stDzMDt', cnd_zA2);
if (cnd_zA2) { 
let elOv62z = eo('div','oGqf',null,`class`,`alert alert-danger`);
text(elMGrLH.formHandler.getError(`title`));
ec('div');
}ec('div');
let elcw4aJ = eo('div',null,null,`class`,`form-group`);
elcw4aJ.cls = {'group-error': !!elMGrLH.formHandler.getError(`description`) };

            for (let className in elcw4aJ.cls) {
                elcw4aJ.classList.toggle(className, elcw4aJ.cls[className]);
            }  
            let elv0gVN = eo('label',null,null,`for`,`description`);
text(trans('Description (Markdown)'));
let elBaszg = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eliPiAt = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elMGrLH.formHandler.addError(`description`, 'required', trans('validation.required'));}return elMGrLH.formHandler.removeError(`description`);}]},`value`,`${fval(component.record.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description (Markdown)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
eliPiAt.value = fval(component.record.description);
ec('textarea');
let cnduFQc = elMGrLH.formHandler.getError(`description`);
this.setState('stS2e2D', cnduFQc);
if (cnduFQc) { 
let elEVrEK = eo('div','7e3f',null,`class`,`alert alert-danger`);
text(elMGrLH.formHandler.getError(`description`));
ec('div');
}ec('div');
let el2igl9 = eo('div',null,null,`class`,`form-group`);
el2igl9.cls = {'group-error': !!elMGrLH.formHandler.getError(`stepsToReproduce`) };

            for (let className in el2igl9.cls) {
                el2igl9.classList.toggle(className, el2igl9.cls[className]);
            }  
            let elNmEIK = eo('label',null,null,`for`,`stepsToReproduce`);
text(trans('Steps To Reproduce (Each step in one line without numbering the line)'));
let el7ZTsh = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eltW2Uj = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.stepsToReproduce = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elMGrLH.formHandler.addError(`stepsToReproduce`, 'required', trans('validation.required'));}return elMGrLH.formHandler.removeError(`stepsToReproduce`);}]},`value`,`${fval(component.record.stepsToReproduce)}`,`name`,`${(`stepsToReproduce`).toInputName()}`,`placeholder`,`${trans(`Steps To Reproduce (Each step in one line without numbering the line)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`stepsToReproduce`);
eltW2Uj.value = fval(component.record.stepsToReproduce);
ec('textarea');
let cndxaW8 = elMGrLH.formHandler.getError(`stepsToReproduce`);
this.setState('stgCtN9', cndxaW8);
if (cndxaW8) { 
let elFR0r8 = eo('div','JF8f',null,`class`,`alert alert-danger`);
text(elMGrLH.formHandler.getError(`stepsToReproduce`));
ec('div');
}ec('div');
let elv5hbU = eo('div',null,null,`class`,`form-group`);
elv5hbU.cls = {'group-error': !!elMGrLH.formHandler.getError(`expectedBehavior`) };

            for (let className in elv5hbU.cls) {
                elv5hbU.classList.toggle(className, elv5hbU.cls[className]);
            }  
            let eluvlvy = eo('label',null,null,`for`,`expectedBehavior`);
text(trans('Expected Behavior'));
let elMeg0T = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elXLfFb = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.expectedBehavior = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elMGrLH.formHandler.addError(`expectedBehavior`, 'required', trans('validation.required'));}return elMGrLH.formHandler.removeError(`expectedBehavior`);}]},`value`,`${fval(component.record.expectedBehavior)}`,`name`,`${(`expectedBehavior`).toInputName()}`,`placeholder`,`${trans(`Expected Behavior`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`expectedBehavior`);
elXLfFb.value = fval(component.record.expectedBehavior);
ec('textarea');
let cnduYVg = elMGrLH.formHandler.getError(`expectedBehavior`);
this.setState('stHg_Dv', cnduYVg);
if (cnduYVg) { 
let el_oju8 = eo('div','IJDf',null,`class`,`alert alert-danger`);
text(elMGrLH.formHandler.getError(`expectedBehavior`));
ec('div');
}ec('div');
let el9tug_ = eo('div',null,null,`class`,`form-group`);
el9tug_.cls = {'group-error': !!elMGrLH.formHandler.getError(`actualResult`) };

            for (let className in el9tug_.cls) {
                el9tug_.classList.toggle(className, el9tug_.cls[className]);
            }  
            let elExT4m = eo('label',null,null,`for`,`actualResult`);
text(trans('Actual Result'));
let elpKuiT = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el6Mxb8 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.actualResult = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elMGrLH.formHandler.addError(`actualResult`, 'required', trans('validation.required'));}return elMGrLH.formHandler.removeError(`actualResult`);}]},`value`,`${fval(component.record.actualResult)}`,`name`,`${(`actualResult`).toInputName()}`,`placeholder`,`${trans(`Actual Result`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`actualResult`);
el6Mxb8.value = fval(component.record.actualResult);
ec('textarea');
let cndweUI = elMGrLH.formHandler.getError(`actualResult`);
this.setState('st5iXap', cndweUI);
if (cndweUI) { 
let el6Y2ya = eo('div','aj8f',null,`class`,`alert alert-danger`);
text(elMGrLH.formHandler.getError(`actualResult`));
ec('div');
}ec('div');
let elHWZi9 = eo('div',null,null,`class`,`form-group`);
elHWZi9.cls = {'group-error': !!elMGrLH.formHandler.getError(`testingUrl`) };

            for (let className in elHWZi9.cls) {
                elHWZi9.classList.toggle(className, elHWZi9.cls[className]);
            }  
            let el5rhkC = eo('label',null,null,`for`,`testingUrl`);
text(trans('Testing Url'));
ec('label');
let eloJE5F = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.testingUrl = this.value;}]},`value`,`${fval(component.record.testingUrl)}`,`name`,`${(`testingUrl`).toInputName()}`,`placeholder`,`${trans(`Testing Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`testingUrl`);
eloJE5F.value = fval(component.record.testingUrl);
ec('div');
let elVW5rk = eo('div',null,null,`class`,`row`);
let elhp1QG = eo('div',null,null,`class`,`col`);
let cmpuRRc = this._lc('c21BI0XQo', {parent:component,parentTop:flkModal,props:{multiple:true,items:component.project.membersList,value:component.record.assignee},boolAttrs:{multiple:true},attrs:{name:`${(`assignee[]`).toInputName()}`,label:'Assign To'}});
ec('div');
let elnaNJr = eo('div',null,null,`class`,`col`);
let cmpFa92 = this._lc('cN20Y1XBf', {parent:component,parentTop:flkModal,props:{items:component.priorities,value:component.record.priority},attrs:{name:`${(`priority`).toInputName()}`,label:'Priority',required:''}});
ec('div');
let elWS2rA = eo('div',null,null,`class`,`col`);
let cmpHQbY = this._lc('c1NmXNJdh', {parent:component,parentTop:flkModal,props:{value:Object.get(component.record.sprint, 'id', ''),lazyLoading:true,request:component.loadSprints.bind(component)},attrs:{name:`${(`sprint`).toInputName()}`,label:'Sprint'}});
ec('div');
ec('div');
let eljVMUx = eo('div',null,null,`class`,`row m-y-1`);
let elGS8Af = eo('div',null,null,`class`,`col`);
let cmprl3p = this._lc('cuJo4GQVg', {parent:component,parentTop:flkModal,props:{value:component.record.dueDate,dateTime:true},attrs:{name:`${(`dueDate`).toInputName()}`,label:'Due Date',class:'form-control'}});
ec('div');
let elSgxFE = eo('div',null,null,`class`,`col`);
let cmppw7o = this._lc('cqTlyCbHG', {parent:component,parentTop:flkModal,props:{required:true,value:Object.get(component.record.module, 'id', ''),lazyLoading:true,request:component.loadModules.bind(component)},attrs:{name:`${(`module`).toInputName()}`,label:'Module'}});
ec('div');
ec('div');
let eltHNpT = eo('div',null,null,`class`,`row m-y-1`);
let elgkFP4 = eo('div',null,null,`class`,`col`);
let cmpXN1z = this._lc('ceiqF26Pd', {parent:component,parentTop:flkModal,props:{items:component.severities,value:component.record.severity},attrs:{name:`${(`severity`).toInputName()}`,label:'severity'}});
ec('div');
let elgfBad = eo('div',null,null,`class`,`col`);
let cmpAAgx = this._lc('cFzTqHitO', {parent:component,parentTop:flkModal,props:{items:component.classifications,value:component.record.classification},attrs:{name:`${(`classification`).toInputName()}`,label:'classification'}});
ec('div');
let elrbpfM = eo('div',null,null,`class`,`col`);
let cmpDbBz = this._lc('cXnKWgw9O', {parent:component,parentTop:flkModal,props:{items:component.reproducibleOptions,value:component.record.reproducible},attrs:{name:`${(`reproducible`).toInputName()}`,label:'How Much Reproducible It Is',heading:'Reproducible'}});
ec('div');
ec('div');
let elJzG1i = eo('div',null,null,`class`,`m-t-2`);
let cmpUlmj = this._lc('cJFXB5xC5', {parent:component,parentTop:flkModal,props:{multiple:true},content:(flkFileInput) => {let elIxCNh = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let eltulPw = eo('strong',null,null,`class`,`ml-1`);
text(`Add Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-cyan bold',label:'Meeting'}});
let el_0ouA = eo('span',null,null,`class`,`ml-3`);
component.recordAudio = this._lc('c4Ym49hBj', {parent:component,parentTop:flkModal,props:{data:component.record}});
ec('span');
ec('div');
let elG2548 = eo('div',null,null,`class`,`m-t-1 text-center`);
let elQcek5 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'medium'}});

                    this.isReadyToGo();
                }
        });