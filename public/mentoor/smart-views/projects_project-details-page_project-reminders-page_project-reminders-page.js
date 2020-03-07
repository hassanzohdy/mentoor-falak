_Component({
                selector: 'project-reminders-page',
                c: 'ProjectRemindersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cMQSvf7uO:'project-layout',cIWVjAyso:'flk-modal',cSZXRluPL:'flk-alert'},
                render: function (component) {
                    let cmp0Zsf = this._lc('cMQSvf7uO', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elhnGvQ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elKngpx = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Reminder`);
ec('button');
let elEeUDu = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Reminders
        (${ component.project.reminders.length })`);
ec('h1');
let eleo3Jc = eo('table',null,null,`class`,`table table-striped buttoned`);
let ellZCB3 = eo('thead');
let elySw48 = eo('tr');
let elTKb5I = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elOutza = eo('tbody');
let cnd0yul = Is.empty(component.project.reminders);
this.setState('st8MGkY', cnd0yul);
let cndhQu3 = !(cnd0yul);
this.setState('stwo6vH', cndhQu3);
if (cnd0yul) { 
let elrsYSx = eo('tr','RP4f');
let elDfd3Y = eo('td','HqTf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Reminders Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.reminders) {
let record = component.project.reminders[index]; 
 let iilYOw = 'rSKNTLB' + index;
let elO3fXN = eo('tr','UlDAxMmGY0we' + index+iilYOw);
let elwdd_d = eo('td','FNrff'+iilYOw);
let elmX6qt = eo('button','s2gff'+iilYOw,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let eloGy9w = eo('i','fqbff'+iilYOw,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elmX6qt;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Reminder')}`});
        ;
                    }, 20);                
                let elAv9bX = eo('button','5nNff'+iilYOw,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elAXvdo = eo('i','Y9tff'+iilYOw,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elAv9bX;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Reminder')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndVcng = component.modalIsOpened;
this.setState('stHvxNh', cndVcng);
if (cndVcng) { 
component.modal = this._lc('cIWVjAyso', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elqsn_7 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elqsn_7.formHandler) {
                    window.cfrmdlr = elqsn_7.formHandler = new FormHandler(elqsn_7, component);
                } else {
                    window.cfrmdlr = elqsn_7.formHandler;
                }
            let elXdXCv = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elXdXCv.value = fval(component.project.id);
let elfjyvH = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elqsn_7.formHandler.getError(`name`) })}`);
let el2mhyb = eo('label',null,null,`for`,`name`);
text(trans('Reminder Name'));
let elGfTNx = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elkTAAQ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqsn_7.formHandler.addError(`name`, 'required', trans('validation.required'));}return elqsn_7.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Reminder Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elkTAAQ.value = fval(component.record.name);
let cndFW_c = elqsn_7.formHandler.getError(`name`);
this.setState('staW8LH', cndFW_c);
if (cndFW_c) { 
let el8B5kv = eo('div','Yz2f',null,`class`,`alert alert-danger`);
text(elqsn_7.formHandler.getError(`name`));
ec('div');
}ec('div');
let elcvuwA = eo('div',null,null,`class`,`m-t-1 text-center`);
let elyCoM1 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stHvxNh'});
}let cndokum = component.confirmDelete;
this.setState('stRYpDv', cndokum);
if (cndokum) { 
let cmpphf9 = this._lc('cSZXRluPL', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stRYpDv'});
}
                    this.isReadyToGo();
                }
        });