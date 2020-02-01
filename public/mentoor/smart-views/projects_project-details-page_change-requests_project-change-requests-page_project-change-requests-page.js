_Component({
                selector: 'project-change-requests-page',
                c: 'ProjectChangeRequestsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','changeRequestTypes','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {camQmyuqm:'project-layout',ccH9vY4kN:'flk-datepicker',cWj7CTRcO:'flk-dropdown-list',c4kRenzFU:'flk-modal',cK1DX813_:'flk-alert'},
                render: function (component) {
                    let cmpCWF3 = this._lc('camQmyuqm', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elptk4F = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elQcR2Z = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Change-request`);
ec('button');
let elRP7fa = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Change requests
        (${ Object.get(component.project.changeRequests, 'length', '') })`);
ec('h1');
let elexGy3 = eo('table',null,null,`class`,`table table-striped buttoned`);
let elITSu1 = eo('thead');
let elleJaD = eo('tr');
let elxb2FV = eo('th');
text(`Title`);
ec('th');
let elCcUcB = eo('th');
text(`Request Date`);
ec('th');
let elVJCZy = eo('th');
text(`Request Type`);
ec('th');
let elVsM_O = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elnaqGT = eo('tbody');
let cndv57r = Is.empty(component.project.changeRequests);
this.setState('st6nqx9', cndv57r);
let cndVomI = !(cndv57r);
this.setState('stYL_0Y', cndVomI);
if (cndv57r) { 
let el_EVDc = eo('tr','1Rrf');
let ellNdkR = eo('td','vGUf',null, 'style', {textAlign:'center'},`colspan`,`4`);
text(`No Change requests Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.changeRequests) {
let record = component.project.changeRequests[index]; 
 let iiqBTe = record.id+ index;
let el6SWJS = eo('tr','hz2IxUgiOpq6' + index+iiqBTe);
let elDwXse = eo('td','d4Wff'+iiqBTe);
let elZ4LRI = eo('a','eViff'+iiqBTe,null,`href`,`${URLS.project(component.project, 'change-requests', record)}`);
text(record.title);
ec('a');
ec('td');
let ela1VaW = eo('td','pgdff'+iiqBTe);
text(record.requestDate);
ec('td');
let el6ro6c = eo('td','kDFff'+iiqBTe,null,`class`,`bold`);
text(component.changeRequestTypes[record.type]);
ec('td');
let elwaNCd = eo('td','HA2ff'+iiqBTe);
let elvHObE = eo('button','oAQff'+iiqBTe,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let el_hfz2 = eo('i','pz_ff'+iiqBTe,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elvHObE;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Change-request')}`});
        ;
                    }, 20);                
                let el4l4AK = eo('button','3yNff'+iiqBTe,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let el50Riy = eo('i','zSJff'+iiqBTe,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el4l4AK;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Change-request')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndbZKV = component.modalIsOpened;
this.setState('stNJ0qT', cndbZKV);
if (cndbZKV) { 
component.modal = this._lc('c4kRenzFU', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elkLWB4 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elkLWB4.formHandler) {
                    window.cfrmdlr = elkLWB4.formHandler = new FormHandler(elkLWB4, component);
                } else {
                    window.cfrmdlr = elkLWB4.formHandler;
                }
            let eldpHb_ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
eldpHb_.value = fval(component.project.id);
let elNyDeZ = eo('div',null,null,`class`,`form-group`);
elNyDeZ.cls = {'group-error': !!elkLWB4.formHandler.getError(`title`) };

            for (let className in elNyDeZ.cls) {
                elNyDeZ.classList.toggle(className, elNyDeZ.cls[className]);
            }  
            let elEJD5R = eo('label',null,null,`for`,`title`);
text(trans('Change request Title'));
let eln4e71 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let ell6vgH = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elkLWB4.formHandler.addError(`title`, 'required', trans('validation.required'));}return elkLWB4.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Change request Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
ell6vgH.value = fval(component.record.title);
let cndQjDV = elkLWB4.formHandler.getError(`title`);
this.setState('stE4893', cndQjDV);
if (cndQjDV) { 
let elUz8nM = eo('div','VBPf',null,`class`,`alert alert-danger`);
text(elkLWB4.formHandler.getError(`title`));
ec('div');
}ec('div');
let el8Rz29 = eo('div',null,null,`class`,`form-group`);
el8Rz29.cls = {'group-error': !!elkLWB4.formHandler.getError(`description`) };

            for (let className in el8Rz29.cls) {
                el8Rz29.classList.toggle(className, el8Rz29.cls[className]);
            }  
            let el4Zsxz = eo('label',null,null,`for`,`description`);
text(trans('Change request Description (Markdown Support)'));
let elg1W9Q = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elGLumn = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elkLWB4.formHandler.addError(`description`, 'required', trans('validation.required'));}return elkLWB4.formHandler.removeError(`description`);}]},`value`,`${fval(component.record.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Change request Description (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elGLumn.value = fval(component.record.description);
ec('textarea');
let cndXIMM = elkLWB4.formHandler.getError(`description`);
this.setState('stTfeYl', cndXIMM);
if (cndXIMM) { 
let el0Vgty = eo('div','3zif',null,`class`,`alert alert-danger`);
text(elkLWB4.formHandler.getError(`description`));
ec('div');
}ec('div');
let cmpGRke = this._lc('ccH9vY4kN', {parent:component,parentTop:flkModal,props:{value:component.record.requestDate,dateTime:true},attrs:{name:`${(`requestDate`).toInputName()}`,required:'',label:'Request Date',class:'form-control'},state:'stNJ0qT'});
let cmp2U3z = this._lc('cWj7CTRcO', {parent:component,parentTop:flkModal,props:{required:true,value:component.record.type,items:component.changeRequestTypes},attrs:{name:`${(`type`).toInputName()}`,label:'Change Request Type'},state:'stNJ0qT'});
let els7zx7 = eo('div',null,null,`class`,`m-t-1 text-center`);
let elvlRcG = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stNJ0qT'});
}let cndZgSR = component.confirmDelete;
this.setState('strXpUZ', cndZgSR);
if (cndZgSR) { 
let cmpJqMJ = this._lc('cK1DX813_', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'strXpUZ'});
}
                    this.isReadyToGo();
                }
        });