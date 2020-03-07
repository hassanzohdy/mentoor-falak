_Component({
                selector: 'project-change-requests-page',
                c: 'ProjectChangeRequestsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','changeRequestTypes','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cO58kBclj:'project-layout',c1VHwctoo:'flk-datepicker',cmCbjqw5v:'flk-dropdown-list',cXoSCjTsW:'flk-modal',czc7KTGD2:'flk-alert'},
                render: function (component) {
                    let cmpZHVi = this._lc('cO58kBclj', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el_dGSd = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elFQ7Fp = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Change-request`);
ec('button');
let elTWK48 = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Change requests
        (${ Object.get(component.project.changeRequests, 'length', '') })`);
ec('h1');
let elKRbPH = eo('table',null,null,`class`,`table table-striped buttoned`);
let elFgsmD = eo('thead');
let elM1oB6 = eo('tr');
let elDVElL = eo('th');
text(`Title`);
ec('th');
let ellHuAk = eo('th');
text(`Request Date`);
ec('th');
let eljbYTU = eo('th');
text(`Request Type`);
ec('th');
let eljJU_4 = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elVnmXy = eo('tbody');
let cndK75f = Is.empty(component.project.changeRequests);
this.setState('stxKkFB', cndK75f);
let cndOVFi = !(cndK75f);
this.setState('stN_Zyk', cndOVFi);
if (cndK75f) { 
let el8Oj2J = eo('tr','Bn_f');
let elBblny = eo('td','otIf',null, 'style', {textAlign:'center'},`colspan`,`4`);
text(`No Change requests Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.changeRequests) {
let record = component.project.changeRequests[index]; 
 let ii1iei = record.id+ index;
let el0Q3Zd = eo('tr','FNgFqOeTxloL' + index+ii1iei);
let el2K5nk = eo('td','3ASff'+ii1iei);
let elJH5lJ = eo('a','8Saff'+ii1iei,null,`href`,`${URLS.project(component.project, 'change-requests', record)}`);
text(record.title);
ec('a');
ec('td');
let el1crCP = eo('td','EgFff'+ii1iei);
text(record.requestDate);
ec('td');
let elHaIDC = eo('td','RRoff'+ii1iei,null,`class`,`bold`);
text(component.changeRequestTypes[record.type]);
ec('td');
let elvdaZB = eo('td','SMUff'+ii1iei);
let el_UQvA = eo('button','dHyff'+ii1iei,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elVIMnL = eo('i','w72ff'+ii1iei,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el_UQvA;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Change-request')}`});
        ;
                    }, 20);                
                let elpngw0 = eo('button','ICkff'+ii1iei,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let el9bKQz = eo('i','ZA1ff'+ii1iei,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elpngw0;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Change-request')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cnd9W3v = component.modalIsOpened;
this.setState('stXBKTg', cnd9W3v);
if (cnd9W3v) { 
component.modal = this._lc('cXoSCjTsW', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elwQd44 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elwQd44.formHandler) {
                    window.cfrmdlr = elwQd44.formHandler = new FormHandler(elwQd44, component);
                } else {
                    window.cfrmdlr = elwQd44.formHandler;
                }
            let el_1HbQ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el_1HbQ.value = fval(component.project.id);
let el4vI6O = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elwQd44.formHandler.getError(`title`) })}`);
let elTu_xR = eo('label',null,null,`for`,`title`);
text(trans('Change request Title'));
let elQhLbg = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elx93sO = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elwQd44.formHandler.addError(`title`, 'required', trans('validation.required'));}return elwQd44.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Change request Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elx93sO.value = fval(component.record.title);
let cndJcV_ = elwQd44.formHandler.getError(`title`);
this.setState('st8XziI', cndJcV_);
if (cndJcV_) { 
let elg461j = eo('div','OQcf',null,`class`,`alert alert-danger`);
text(elwQd44.formHandler.getError(`title`));
ec('div');
}ec('div');
let elHOD3t = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elwQd44.formHandler.getError(`description`) })}`);
let elnZ3jH = eo('label',null,null,`for`,`description`);
text(trans('Change request Description (Markdown Support)'));
let elxgakG = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elmwsbj = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elwQd44.formHandler.addError(`description`, 'required', trans('validation.required'));}return elwQd44.formHandler.removeError(`description`);}]},`value`,`${fval(component.record.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Change request Description (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elmwsbj.value = fval(component.record.description);
ec('textarea');
let cndsytF = elwQd44.formHandler.getError(`description`);
this.setState('stRojKQ', cndsytF);
if (cndsytF) { 
let el4N9oM = eo('div','1Csf',null,`class`,`alert alert-danger`);
text(elwQd44.formHandler.getError(`description`));
ec('div');
}ec('div');
let cmpbGAu = this._lc('c1VHwctoo', {parent:component,parentTop:flkModal,props:{value:component.record.requestDate,dateTime:true},attrs:{name:`${(`requestDate`).toInputName()}`,required:'',label:'Request Date',class:'form-control'},state:'stXBKTg'});
let cmpOgQx = this._lc('cmCbjqw5v', {parent:component,parentTop:flkModal,props:{required:true,value:component.record.type,items:component.changeRequestTypes},attrs:{name:`${(`type`).toInputName()}`,label:'Change Request Type'},state:'stXBKTg'});
let el41Y9P = eo('div',null,null,`class`,`m-t-1 text-center`);
let elAtXab = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stXBKTg'});
}let cndzNzO = component.confirmDelete;
this.setState('st43mw6', cndzNzO);
if (cndzNzO) { 
let cmpDjwm = this._lc('czc7KTGD2', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st43mw6'});
}
                    this.isReadyToGo();
                }
        });