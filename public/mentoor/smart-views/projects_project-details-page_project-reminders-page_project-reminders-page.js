_Component({
                selector: 'project-reminders-page',
                c: 'ProjectRemindersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cniENHyXV:'project-layout',c6YEXUMs8:'flk-modal',cJaSxtK7a:'flk-alert'},
                render: function (component) {
                    let cmpbLO1 = this._lc('cniENHyXV', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elbpEVI = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elUAGrf = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Reminder`);
ec('button');
let eli4JRj = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Reminders
        (${ component.project.reminders.length })`);
ec('h1');
let elSd2P0 = eo('table',null,null,`class`,`table table-striped buttoned`);
let elZFsxa = eo('thead');
let elUFT5E = eo('tr');
let elNTAmL = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elVajCs = eo('tbody');
let cndHsGx = Is.empty(component.project.reminders);
this.setState('st7fIL0', cndHsGx);
let cnd9NaU = !(cndHsGx);
this.setState('stWbcZB', cnd9NaU);
if (cndHsGx) { 
let elxnklw = eo('tr','666f');
let elxd2Ac = eo('td','WGef',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Reminders Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.reminders) {
let record = component.project.reminders[index]; 
 let iinF9k = 'z8qRNHQ' + index;
let el7_81M = eo('tr','mOmSAtSfqMmf' + index+iinF9k);
let elgnx2a = eo('td','v0Mff'+iinF9k);
let el1YoiU = eo('button','KgJff'+iinF9k,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elmljvf = eo('i','Mg_ff'+iinF9k,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el1YoiU;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Reminder')}`});
        ;
                    }, 20);                
                let elekTcj = eo('button','13Wff'+iinF9k,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elz6Cto = eo('i','vwnff'+iinF9k,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elekTcj;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Reminder')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndCVzp = component.modalIsOpened;
this.setState('stGmxl8', cndCVzp);
if (cndCVzp) { 
component.modal = this._lc('c6YEXUMs8', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let eliIIhy = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! eliIIhy.formHandler) {
                    window.cfrmdlr = eliIIhy.formHandler = new FormHandler(eliIIhy, component);
                } else {
                    window.cfrmdlr = eliIIhy.formHandler;
                }
            let elFxgnm = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elFxgnm.value = fval(component.project.id);
let el7rJxG = eo('div',null,null,`class`,`form-group`);
el7rJxG.cls = {'group-error': !!eliIIhy.formHandler.getError(`name`) };

            for (let className in el7rJxG.cls) {
                el7rJxG.classList.toggle(className, el7rJxG.cls[className]);
            }  
            let elTTOZF = eo('label',null,null,`for`,`name`);
text(trans('Reminder Name'));
let elU7Tgx = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elQ_hOv = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eliIIhy.formHandler.addError(`name`, 'required', trans('validation.required'));}return eliIIhy.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Reminder Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elQ_hOv.value = fval(component.record.name);
let cndgeY9 = eliIIhy.formHandler.getError(`name`);
this.setState('stIlcWe', cndgeY9);
if (cndgeY9) { 
let elTVeOf = eo('div','6J8f',null,`class`,`alert alert-danger`);
text(eliIIhy.formHandler.getError(`name`));
ec('div');
}ec('div');
let elNl3d8 = eo('div',null,null,`class`,`m-t-1 text-center`);
let elx7Wcr = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stGmxl8'});
}let cndx6xv = component.confirmDelete;
this.setState('stJCBfQ', cndx6xv);
if (cndx6xv) { 
let cmp4gMy = this._lc('cJaSxtK7a', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stJCBfQ'});
}
                    this.isReadyToGo();
                }
        });