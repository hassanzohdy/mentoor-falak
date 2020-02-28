_Component({
                selector: 'project-reminders-page',
                c: 'ProjectRemindersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {ccdOUfKWc:'project-layout',c6_TUNpDm:'flk-modal',clJRNJLGA:'flk-alert'},
                render: function (component) {
                    let cmpbYjZ = this._lc('ccdOUfKWc', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elqUopz = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let eldriG_ = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Reminder`);
ec('button');
let elgpToh = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Reminders
        (${ component.project.reminders.length })`);
ec('h1');
let elTAoec = eo('table',null,null,`class`,`table table-striped buttoned`);
let elfSXq0 = eo('thead');
let el_a9Sr = eo('tr');
let elADdmr = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elrNUhX = eo('tbody');
let cnd6RXs = Is.empty(component.project.reminders);
this.setState('stuHjbQ', cnd6RXs);
let cndUbhB = !(cnd6RXs);
this.setState('stR4HLp', cndUbhB);
if (cnd6RXs) { 
let el9mvT_ = eo('tr','4YZf');
let eltSBSs = eo('td','6ytf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Reminders Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.reminders) {
let record = component.project.reminders[index]; 
 let iiLENY = '7nOFpVn' + index;
let elewkYo = eo('tr','Ft7ZNNzfGcs4' + index+iiLENY);
let elk2tzy = eo('td','0K9ff'+iiLENY);
let elwVh7d = eo('button','MrCff'+iiLENY,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let el8e7Cj = eo('i','vZQff'+iiLENY,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elwVh7d;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Reminder')}`});
        ;
                    }, 20);                
                let elXE4ek = eo('button','deNff'+iiLENY,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let el9EtcW = eo('i','m7zff'+iiLENY,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elXE4ek;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Reminder')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndtz_l = component.modalIsOpened;
this.setState('st4mEQr', cndtz_l);
if (cndtz_l) { 
component.modal = this._lc('c6_TUNpDm', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elmrTRR = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elmrTRR.formHandler) {
                    window.cfrmdlr = elmrTRR.formHandler = new FormHandler(elmrTRR, component);
                } else {
                    window.cfrmdlr = elmrTRR.formHandler;
                }
            let elqshp0 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elqshp0.value = fval(component.project.id);
let elP4Sjh = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elmrTRR.formHandler.getError(`name`) })}`);
let elXtN0O = eo('label',null,null,`for`,`name`);
text(trans('Reminder Name'));
let elVsqdW = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elS7qER = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elmrTRR.formHandler.addError(`name`, 'required', trans('validation.required'));}return elmrTRR.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Reminder Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elS7qER.value = fval(component.record.name);
let cndnFvQ = elmrTRR.formHandler.getError(`name`);
this.setState('stOzmav', cndnFvQ);
if (cndnFvQ) { 
let eldNjVT = eo('div','woAf',null,`class`,`alert alert-danger`);
text(elmrTRR.formHandler.getError(`name`));
ec('div');
}ec('div');
let elGLtn9 = eo('div',null,null,`class`,`m-t-1 text-center`);
let elwZ_a5 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'st4mEQr'});
}let cndHJ88 = component.confirmDelete;
this.setState('stTIKDk', cndHJ88);
if (cndHJ88) { 
let cmpSkJG = this._lc('clJRNJLGA', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stTIKDk'});
}
                    this.isReadyToGo();
                }
        });