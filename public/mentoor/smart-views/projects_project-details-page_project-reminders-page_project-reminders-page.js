_Component({
                selector: 'project-reminders-page',
                c: 'ProjectRemindersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cRqX8aVXL:'project-layout',cHe5nzWTs:'flk-modal',cOXrZyYwF:'flk-alert'},
                render: function (component) {
                    let cmpyAsb = this._lc('cRqX8aVXL', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elnTg06 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let el8wbxM = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Reminder`);
ec('button');
let elUR_nU = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Reminders
        (${ component.project.reminders.length })`);
ec('h1');
let elK8GWM = eo('table',null,null,`class`,`table table-striped buttoned`);
let el59aLB = eo('thead');
let elB8GAx = eo('tr');
let elT1e3h = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elOvgpZ = eo('tbody');
let cndQVT0 = Is.empty(component.project.reminders);
this.setState('sto8Z3Z', cndQVT0);
let cnd3HkG = !(cndQVT0);
this.setState('stLX5N6', cnd3HkG);
if (cndQVT0) { 
let elYjtPZ = eo('tr','U9lf');
let el0oNUD = eo('td','TOPf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Reminders Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.reminders) {
let record = component.project.reminders[index]; 
 let iialPm = '0J72vJX' + index;
let el1wLLJ = eo('tr','7inZOSiY0Vhn' + index+iialPm);
let elEV3dd = eo('td','YwQff'+iialPm);
let elfdcrc = eo('button','aQoff'+iialPm,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elPABn0 = eo('i','8b_ff'+iialPm,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elfdcrc;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Reminder')}`});
        ;
                    }, 20);                
                let elmBUqd = eo('button','EZxff'+iialPm,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elkuE6B = eo('i','J3kff'+iialPm,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elmBUqd;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Reminder')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndPYUa = component.modalIsOpened;
this.setState('sttVRP5', cndPYUa);
if (cndPYUa) { 
component.modal = this._lc('cHe5nzWTs', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let el7sETD = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el7sETD.formHandler) {
                    window.cfrmdlr = el7sETD.formHandler = new FormHandler(el7sETD, component);
                } else {
                    window.cfrmdlr = el7sETD.formHandler;
                }
            let elS4_FV = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elS4_FV.value = fval(component.project.id);
let elOuUD7 = eo('div',null,null,`class`,`form-group`);
elOuUD7.cls = {'group-error': !!el7sETD.formHandler.getError(`name`) };

            for (let className in elOuUD7.cls) {
                elOuUD7.classList.toggle(className, elOuUD7.cls[className]);
            }  
            let elldT7k = eo('label',null,null,`for`,`name`);
text(trans('Reminder Name'));
let elFA1jw = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elvuqJU = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7sETD.formHandler.addError(`name`, 'required', trans('validation.required'));}return el7sETD.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Reminder Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elvuqJU.value = fval(component.record.name);
let cnd8rJL = el7sETD.formHandler.getError(`name`);
this.setState('stmSQLS', cnd8rJL);
if (cnd8rJL) { 
let el_h64F = eo('div','4Yvf',null,`class`,`alert alert-danger`);
text(el7sETD.formHandler.getError(`name`));
ec('div');
}ec('div');
let eliHCSZ = eo('div',null,null,`class`,`m-t-1 text-center`);
let elXGIaw = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'sttVRP5'});
}let cndlwvQ = component.confirmDelete;
this.setState('stiqShG', cndlwvQ);
if (cndlwvQ) { 
let cmpYXxY = this._lc('cOXrZyYwF', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stiqShG'});
}
                    this.isReadyToGo();
                }
        });