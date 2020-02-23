_Component({
                selector: 'project-reminders-page',
                c: 'ProjectRemindersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cUHdK_6uz:'project-layout',cGa1kjowG:'flk-modal',cFcimZn25:'flk-alert'},
                render: function (component) {
                    let cmpRkYp = this._lc('cUHdK_6uz', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elJoe9Y = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elmWCOE = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Reminder`);
ec('button');
let ela5xkY = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Reminders
        (${ component.project.reminders.length })`);
ec('h1');
let eldJVeJ = eo('table',null,null,`class`,`table table-striped buttoned`);
let elcK8kX = eo('thead');
let el2571p = eo('tr');
let elOHSV1 = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elimJM2 = eo('tbody');
let cndzJ7Y = Is.empty(component.project.reminders);
this.setState('stuf3vk', cndzJ7Y);
let cndCavl = !(cndzJ7Y);
this.setState('st3srXR', cndCavl);
if (cndzJ7Y) { 
let elWu90a = eo('tr','zU9f');
let elUM1u3 = eo('td','GTff',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Reminders Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.reminders) {
let record = component.project.reminders[index]; 
 let iid9Rx = 'xcC7UdA' + index;
let elNMcpP = eo('tr','CxJfhEhhTfu5' + index+iid9Rx);
let elS5lXX = eo('td','LqKff'+iid9Rx);
let elU3wOa = eo('button','6GBff'+iid9Rx,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elYuysn = eo('i','08Nff'+iid9Rx,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elU3wOa;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Reminder')}`});
        ;
                    }, 20);                
                let elK5oi1 = eo('button','bIOff'+iid9Rx,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elK_6zJ = eo('i','doTff'+iid9Rx,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elK5oi1;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Reminder')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndnZta = component.modalIsOpened;
this.setState('st_v5uy', cndnZta);
if (cndnZta) { 
component.modal = this._lc('cGa1kjowG', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elWZTaL = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elWZTaL.formHandler) {
                    window.cfrmdlr = elWZTaL.formHandler = new FormHandler(elWZTaL, component);
                } else {
                    window.cfrmdlr = elWZTaL.formHandler;
                }
            let el5qxTJ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el5qxTJ.value = fval(component.project.id);
let elSgEOB = eo('div',null,null,`class`,`form-group`);
elSgEOB.cls = {'group-error': !!elWZTaL.formHandler.getError(`name`) };

            for (let className in elSgEOB.cls) {
                elSgEOB.classList.toggle(className, elSgEOB.cls[className]);
            }  
            let el3_LE9 = eo('label',null,null,`for`,`name`);
text(trans('Reminder Name'));
let elCWbVJ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elGVkOT = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elWZTaL.formHandler.addError(`name`, 'required', trans('validation.required'));}return elWZTaL.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Reminder Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elGVkOT.value = fval(component.record.name);
let cndOZYJ = elWZTaL.formHandler.getError(`name`);
this.setState('st2hZuL', cndOZYJ);
if (cndOZYJ) { 
let elTxX8w = eo('div','6GBf',null,`class`,`alert alert-danger`);
text(elWZTaL.formHandler.getError(`name`));
ec('div');
}ec('div');
let elAYf02 = eo('div',null,null,`class`,`m-t-1 text-center`);
let el2iM34 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'st_v5uy'});
}let cnd9G_8 = component.confirmDelete;
this.setState('stXaWph', cnd9G_8);
if (cnd9G_8) { 
let cmpjgJ0 = this._lc('cFcimZn25', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stXaWph'});
}
                    this.isReadyToGo();
                }
        });