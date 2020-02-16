_Component({
                selector: 'project-change-requests-page',
                c: 'ProjectChangeRequestsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','changeRequestTypes','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {c4ODamNkg:'project-layout',cz7PghRbn:'flk-datepicker',cKkIOVSxQ:'flk-dropdown-list',cxQ8tjl4M:'flk-modal',ciyg3H34G:'flk-alert'},
                render: function (component) {
                    let cmplEQR = this._lc('c4ODamNkg', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elzC52q = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elHSC0O = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Change-request`);
ec('button');
let elFCgXW = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Change requests
        (${ Object.get(component.project.changeRequests, 'length', '') })`);
ec('h1');
let elmD68A = eo('table',null,null,`class`,`table table-striped buttoned`);
let elwHdZz = eo('thead');
let el5zpm9 = eo('tr');
let el9Pakf = eo('th');
text(`Title`);
ec('th');
let elBzT0D = eo('th');
text(`Request Date`);
ec('th');
let elOIWIQ = eo('th');
text(`Request Type`);
ec('th');
let elj2KS0 = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elElcev = eo('tbody');
let cnd5i4P = Is.empty(component.project.changeRequests);
this.setState('st0ZuXC', cnd5i4P);
let cndx5t6 = !(cnd5i4P);
this.setState('stZqI8u', cndx5t6);
if (cnd5i4P) { 
let elEnj89 = eo('tr','kqKf');
let elI51Lp = eo('td','RKhf',null, 'style', {textAlign:'center'},`colspan`,`4`);
text(`No Change requests Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.changeRequests) {
let record = component.project.changeRequests[index]; 
 let iineXW = record.id+ index;
let elBOIBD = eo('tr','YTVNLrZaYGpr' + index+iineXW);
let elqbkEK = eo('td','4cwff'+iineXW);
let eloQCCC = eo('a','5QMff'+iineXW,null,`href`,`${URLS.project(component.project, 'change-requests', record)}`);
text(record.title);
ec('a');
ec('td');
let eloeEYD = eo('td','8_Fff'+iineXW);
text(record.requestDate);
ec('td');
let elbQaRv = eo('td','2Zxff'+iineXW,null,`class`,`bold`);
text(component.changeRequestTypes[record.type]);
ec('td');
let el2CGug = eo('td','z9Uff'+iineXW);
let el0lB5r = eo('button','0IVff'+iineXW,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elVRVkX = eo('i','Wl9ff'+iineXW,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el0lB5r;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Change-request')}`});
        ;
                    }, 20);                
                let eldQfXA = eo('button','hFfff'+iineXW,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let eljrcyL = eo('i','buKff'+iineXW,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eldQfXA;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Change-request')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndW3o9 = component.modalIsOpened;
this.setState('stZD4KJ', cndW3o9);
if (cndW3o9) { 
component.modal = this._lc('cxQ8tjl4M', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let eloATZJ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! eloATZJ.formHandler) {
                    window.cfrmdlr = eloATZJ.formHandler = new FormHandler(eloATZJ, component);
                } else {
                    window.cfrmdlr = eloATZJ.formHandler;
                }
            let elfsvG1 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elfsvG1.value = fval(component.project.id);
let elZuQCt = eo('div',null,null,`class`,`form-group`);
elZuQCt.cls = {'group-error': !!eloATZJ.formHandler.getError(`title`) };

            for (let className in elZuQCt.cls) {
                elZuQCt.classList.toggle(className, elZuQCt.cls[className]);
            }  
            let elx8ajp = eo('label',null,null,`for`,`title`);
text(trans('Change request Title'));
let elPi3J1 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el3RIdd = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eloATZJ.formHandler.addError(`title`, 'required', trans('validation.required'));}return eloATZJ.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Change request Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el3RIdd.value = fval(component.record.title);
let cndmEnt = eloATZJ.formHandler.getError(`title`);
this.setState('stryBwn', cndmEnt);
if (cndmEnt) { 
let elbubnj = eo('div','SNMf',null,`class`,`alert alert-danger`);
text(eloATZJ.formHandler.getError(`title`));
ec('div');
}ec('div');
let elgkZj1 = eo('div',null,null,`class`,`form-group`);
elgkZj1.cls = {'group-error': !!eloATZJ.formHandler.getError(`description`) };

            for (let className in elgkZj1.cls) {
                elgkZj1.classList.toggle(className, elgkZj1.cls[className]);
            }  
            let el15LAB = eo('label',null,null,`for`,`description`);
text(trans('Change request Description (Markdown Support)'));
let el_LR99 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elNX1KA = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eloATZJ.formHandler.addError(`description`, 'required', trans('validation.required'));}return eloATZJ.formHandler.removeError(`description`);}]},`value`,`${fval(component.record.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Change request Description (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elNX1KA.value = fval(component.record.description);
ec('textarea');
let cndQk1Z = eloATZJ.formHandler.getError(`description`);
this.setState('stqovr8', cndQk1Z);
if (cndQk1Z) { 
let elyX9jM = eo('div','pCCf',null,`class`,`alert alert-danger`);
text(eloATZJ.formHandler.getError(`description`));
ec('div');
}ec('div');
let cmpm9x3 = this._lc('cz7PghRbn', {parent:component,parentTop:flkModal,props:{value:component.record.requestDate,dateTime:true},attrs:{name:`${(`requestDate`).toInputName()}`,required:'',label:'Request Date',class:'form-control'},state:'stZD4KJ'});
let cmpen0y = this._lc('cKkIOVSxQ', {parent:component,parentTop:flkModal,props:{required:true,value:component.record.type,items:component.changeRequestTypes},attrs:{name:`${(`type`).toInputName()}`,label:'Change Request Type'},state:'stZD4KJ'});
let elZuNh5 = eo('div',null,null,`class`,`m-t-1 text-center`);
let el77xH3 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stZD4KJ'});
}let cndqpOi = component.confirmDelete;
this.setState('stH6uCl', cndqpOi);
if (cndqpOi) { 
let cmp5NyS = this._lc('ciyg3H34G', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stH6uCl'});
}
                    this.isReadyToGo();
                }
        });