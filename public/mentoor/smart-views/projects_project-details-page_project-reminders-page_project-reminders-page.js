_Component({
                selector: 'project-reminders-page',
                c: 'ProjectRemindersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cF3Plfffy:'project-layout',cazzfQSsD:'flk-modal',cKmpyKgwc:'flk-alert'},
                render: function (component) {
                    let cmpC1aE = this._lc('cF3Plfffy', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elRQ0IJ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elpe78k = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Reminder`);
ec('button');
let elAW_20 = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Reminders
        (${ component.project.reminders.length })`);
ec('h1');
let elTxOn5 = eo('table',null,null,`class`,`table table-striped buttoned`);
let elY8izJ = eo('thead');
let eldlPch = eo('tr');
let elf985T = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elOwyK2 = eo('tbody');
let cndRXWt = Is.empty(component.project.reminders);
this.setState('stMLkMm', cndRXWt);
let cnd6hCL = !(cndRXWt);
this.setState('stRZLDc', cnd6hCL);
if (cndRXWt) { 
let elFqvHJ = eo('tr','adEf');
let elpLJZd = eo('td','Qudf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Reminders Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.reminders) {
let record = component.project.reminders[index]; 
 let iiuG9f = 'Awzm1VU' + index;
let el2sUiy = eo('tr','HcJUJ7FKyNiJ' + index+iiuG9f);
let elmRInx = eo('td','8R_ff'+iiuG9f);
let elfKm5i = eo('button','nscff'+iiuG9f,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elx8tER = eo('i','fgmff'+iiuG9f,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elfKm5i;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Reminder')}`});
        ;
                    }, 20);                
                let eliuJqN = eo('button','7FQff'+iiuG9f,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elO1UzB = eo('i','WRhff'+iiuG9f,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eliuJqN;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Reminder')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndc4gN = component.modalIsOpened;
this.setState('stTMdHY', cndc4gN);
if (cndc4gN) { 
component.modal = this._lc('cazzfQSsD', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let el_IlhN = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el_IlhN.formHandler) {
                    window.cfrmdlr = el_IlhN.formHandler = new FormHandler(el_IlhN, component);
                } else {
                    window.cfrmdlr = el_IlhN.formHandler;
                }
            let elIjbcw = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elIjbcw.value = fval(component.project.id);
let elpo9zA = eo('div',null,null,`class`,`form-group`);
elpo9zA.cls = {'group-error': !!el_IlhN.formHandler.getError(`name`) };

            for (let className in elpo9zA.cls) {
                elpo9zA.classList.toggle(className, elpo9zA.cls[className]);
            }  
            let elSSdB9 = eo('label',null,null,`for`,`name`);
text(trans('Reminder Name'));
let elI0Nnp = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el5PgyY = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_IlhN.formHandler.addError(`name`, 'required', trans('validation.required'));}return el_IlhN.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Reminder Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el5PgyY.value = fval(component.record.name);
let cndYgX5 = el_IlhN.formHandler.getError(`name`);
this.setState('stQD664', cndYgX5);
if (cndYgX5) { 
let el1u9mO = eo('div','nXUf',null,`class`,`alert alert-danger`);
text(el_IlhN.formHandler.getError(`name`));
ec('div');
}ec('div');
let elYKgtw = eo('div',null,null,`class`,`m-t-1 text-center`);
let elX2D8M = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stTMdHY'});
}let cnd0jLq = component.confirmDelete;
this.setState('stgfGzg', cnd0jLq);
if (cnd0jLq) { 
let cmp9Yzr = this._lc('cKmpyKgwc', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stgfGzg'});
}
                    this.isReadyToGo();
                }
        });