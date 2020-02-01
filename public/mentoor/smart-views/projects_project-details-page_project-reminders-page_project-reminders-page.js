_Component({
                selector: 'project-reminders-page',
                c: 'ProjectRemindersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cM6NvFR6Z:'project-layout',c8s8WKuxG:'flk-modal',c4AqakVD7:'flk-alert'},
                render: function (component) {
                    let cmpTpFf = this._lc('cM6NvFR6Z', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elDFxfJ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let eltSz8h = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Reminder`);
ec('button');
let elvE5KU = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Reminders
        (${ component.project.reminders.length })`);
ec('h1');
let elY2J0U = eo('table',null,null,`class`,`table table-striped buttoned`);
let elqs0YQ = eo('thead');
let elzxE56 = eo('tr');
let el_yP6v = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elGXr7t = eo('tbody');
let cndJ2dm = Is.empty(component.project.reminders);
this.setState('styeLQh', cndJ2dm);
let cndRtnB = !(cndJ2dm);
this.setState('stdaj8k', cndRtnB);
if (cndJ2dm) { 
let elltzJr = eo('tr','eyIf');
let el0lgQt = eo('td','y8Af',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Reminders Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.reminders) {
let record = component.project.reminders[index]; 
 let iiHAIp = 'Q1NLmT1' + index;
let elrYl1O = eo('tr','lbOqapGdLwYf' + index+iiHAIp);
let elo8MMd = eo('td','SeOff'+iiHAIp);
let elWEzq_ = eo('button','6XVff'+iiHAIp,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elIx6aa = eo('i','nOoff'+iiHAIp,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elWEzq_;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Reminder')}`});
        ;
                    }, 20);                
                let elYc4RW = eo('button','yCTff'+iiHAIp,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let eltu9ah = eo('i','2lHff'+iiHAIp,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elYc4RW;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Reminder')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndrDI1 = component.modalIsOpened;
this.setState('stz4Cco', cndrDI1);
if (cndrDI1) { 
component.modal = this._lc('c8s8WKuxG', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let eleJfR2 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! eleJfR2.formHandler) {
                    window.cfrmdlr = eleJfR2.formHandler = new FormHandler(eleJfR2, component);
                } else {
                    window.cfrmdlr = eleJfR2.formHandler;
                }
            let el2CqEw = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el2CqEw.value = fval(component.project.id);
let el6JSQ6 = eo('div',null,null,`class`,`form-group`);
el6JSQ6.cls = {'group-error': !!eleJfR2.formHandler.getError(`name`) };

            for (let className in el6JSQ6.cls) {
                el6JSQ6.classList.toggle(className, el6JSQ6.cls[className]);
            }  
            let elJAqKj = eo('label',null,null,`for`,`name`);
text(trans('Reminder Name'));
let elePFMJ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elic0ww = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eleJfR2.formHandler.addError(`name`, 'required', trans('validation.required'));}return eleJfR2.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Reminder Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elic0ww.value = fval(component.record.name);
let cndUdEQ = eleJfR2.formHandler.getError(`name`);
this.setState('stQ9TO3', cndUdEQ);
if (cndUdEQ) { 
let elwfR2e = eo('div','KUaf',null,`class`,`alert alert-danger`);
text(eleJfR2.formHandler.getError(`name`));
ec('div');
}ec('div');
let elSAMIH = eo('div',null,null,`class`,`m-t-1 text-center`);
let elV6mhE = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stz4Cco'});
}let cndQN9n = component.confirmDelete;
this.setState('stXJER_', cndQN9n);
if (cndQN9n) { 
let cmpQhE1 = this._lc('c4AqakVD7', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stXJER_'});
}
                    this.isReadyToGo();
                }
        });