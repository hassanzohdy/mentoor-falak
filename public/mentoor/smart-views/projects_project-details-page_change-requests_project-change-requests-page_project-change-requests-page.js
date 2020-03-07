_Component({
                selector: 'project-change-requests-page',
                c: 'ProjectChangeRequestsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','changeRequestTypes','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {ckFgxqVcV:'project-layout',cDWd38Y9D:'flk-datepicker',cnBoIExOl:'flk-dropdown-list',cL9fB1JvW:'flk-modal',cd5TTslcE:'flk-alert'},
                render: function (component) {
                    let cmpErb3 = this._lc('ckFgxqVcV', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elsNojB = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elk_hP1 = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Change-request`);
ec('button');
let elmVTQ9 = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Change requests
        (${ Object.get(component.project.changeRequests, 'length', '') })`);
ec('h1');
let elhiCpR = eo('table',null,null,`class`,`table table-striped buttoned`);
let elKgasM = eo('thead');
let elK1mQS = eo('tr');
let elBeCyQ = eo('th');
text(`Title`);
ec('th');
let elGWIUX = eo('th');
text(`Request Date`);
ec('th');
let elN9Xe2 = eo('th');
text(`Request Type`);
ec('th');
let el90Y3p = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let el5H9_N = eo('tbody');
let cndaEoE = Is.empty(component.project.changeRequests);
this.setState('stu_JZr', cndaEoE);
let cndD_8z = !(cndaEoE);
this.setState('st6qsLj', cndD_8z);
if (cndaEoE) { 
let elEcq3w = eo('tr','kSjf');
let elfMQci = eo('td','bn8f',null, 'style', {textAlign:'center'},`colspan`,`4`);
text(`No Change requests Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.changeRequests) {
let record = component.project.changeRequests[index]; 
 let iinDdC = record.id+ index;
let ellkehj = eo('tr','PENfJ7sJQpls' + index+iinDdC);
let elLYH5x = eo('td','RZsff'+iinDdC);
let elrlZDF = eo('a','VWoff'+iinDdC,null,`href`,`${URLS.project(component.project, 'change-requests', record)}`);
text(record.title);
ec('a');
ec('td');
let el7Mv9i = eo('td','64Wff'+iinDdC);
text(record.requestDate);
ec('td');
let elfwBQV = eo('td','1S7ff'+iinDdC,null,`class`,`bold`);
text(component.changeRequestTypes[record.type]);
ec('td');
let eld_D_A = eo('td','ckTff'+iinDdC);
let el5Y150 = eo('button','HIFff'+iinDdC,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elKu9in = eo('i','aYpff'+iinDdC,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el5Y150;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Change-request')}`});
        ;
                    }, 20);                
                let elPJJz7 = eo('button','G8Nff'+iinDdC,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elQgXhY = eo('i','sxiff'+iinDdC,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elPJJz7;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Change-request')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cnd8tqH = component.modalIsOpened;
this.setState('st60o2x', cnd8tqH);
if (cnd8tqH) { 
component.modal = this._lc('cL9fB1JvW', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elR_5p7 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elR_5p7.formHandler) {
                    window.cfrmdlr = elR_5p7.formHandler = new FormHandler(elR_5p7, component);
                } else {
                    window.cfrmdlr = elR_5p7.formHandler;
                }
            let eluhWwr = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
eluhWwr.value = fval(component.project.id);
let elaPviA = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elR_5p7.formHandler.getError(`title`) })}`);
let el3YX3y = eo('label',null,null,`for`,`title`);
text(trans('Change request Title'));
let elIE0RX = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el2wXFH = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elR_5p7.formHandler.addError(`title`, 'required', trans('validation.required'));}return elR_5p7.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Change request Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el2wXFH.value = fval(component.record.title);
let cndgT8q = elR_5p7.formHandler.getError(`title`);
this.setState('staQ1S7', cndgT8q);
if (cndgT8q) { 
let elHlRWi = eo('div','OgTf',null,`class`,`alert alert-danger`);
text(elR_5p7.formHandler.getError(`title`));
ec('div');
}ec('div');
let elAaw6y = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elR_5p7.formHandler.getError(`description`) })}`);
let el0iR9h = eo('label',null,null,`for`,`description`);
text(trans('Change request Description (Markdown Support)'));
let elAdOFS = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eloQcz0 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elR_5p7.formHandler.addError(`description`, 'required', trans('validation.required'));}return elR_5p7.formHandler.removeError(`description`);}]},`value`,`${fval(component.record.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Change request Description (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
eloQcz0.value = fval(component.record.description);
ec('textarea');
let cndUxrm = elR_5p7.formHandler.getError(`description`);
this.setState('st8Z2H3', cndUxrm);
if (cndUxrm) { 
let elkKqGT = eo('div','t3Lf',null,`class`,`alert alert-danger`);
text(elR_5p7.formHandler.getError(`description`));
ec('div');
}ec('div');
let cmpeg6a = this._lc('cDWd38Y9D', {parent:component,parentTop:flkModal,props:{value:component.record.requestDate,dateTime:true},attrs:{name:`${(`requestDate`).toInputName()}`,required:'',label:'Request Date',class:'form-control'},state:'st60o2x'});
let cmpkxUz = this._lc('cnBoIExOl', {parent:component,parentTop:flkModal,props:{required:true,value:component.record.type,items:component.changeRequestTypes},attrs:{name:`${(`type`).toInputName()}`,label:'Change Request Type'},state:'st60o2x'});
let eln5U3_ = eo('div',null,null,`class`,`m-t-1 text-center`);
let elV0PkW = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'st60o2x'});
}let cnd3Bxk = component.confirmDelete;
this.setState('st6efhb', cnd3Bxk);
if (cnd3Bxk) { 
let cmpLQgR = this._lc('cd5TTslcE', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st6efhb'});
}
                    this.isReadyToGo();
                }
        });