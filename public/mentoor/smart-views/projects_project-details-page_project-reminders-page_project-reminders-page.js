_Component({
                selector: 'project-reminders-page',
                c: 'ProjectRemindersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cbyYX0WPi:'project-layout',cVVX2p02j:'flk-modal',cVX8knCvy:'flk-alert'},
                render: function (component) {
                    let cmpGcy9 = this._lc('cbyYX0WPi', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el0GdZk = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elBlhOX = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Reminder`);
ec('button');
let elPHEaK = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Reminders
        (${ component.project.reminders.length })`);
ec('h1');
let eldcLAx = eo('table',null,null,`class`,`table table-striped buttoned`);
let elvKUIo = eo('thead');
let eld7VKg = eo('tr');
let elENiZ8 = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let el1fVYY = eo('tbody');
let cnd3_Bl = Is.empty(component.project.reminders);
this.setState('stsAosb', cnd3_Bl);
let cndzrVf = !(cnd3_Bl);
this.setState('stbzy3I', cndzrVf);
if (cnd3_Bl) { 
let elFGfvR = eo('tr','9yNf');
let elkz775 = eo('td','Nnff',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Reminders Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.reminders) {
let record = component.project.reminders[index]; 
 let iiETdf = 'AxLU9lb' + index;
let elWYBqx = eo('tr','SuMPXlJPZk1s' + index+iiETdf);
let el8icPC = eo('td','Vq2ff'+iiETdf);
let eldI47J = eo('button','R5bff'+iiETdf,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elo3o72 = eo('i','fXlff'+iiETdf,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eldI47J;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Reminder')}`});
        ;
                    }, 20);                
                let elxI_MA = eo('button','mcsff'+iiETdf,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elgfmrM = eo('i','SWtff'+iiETdf,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elxI_MA;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Reminder')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndViZj = component.modalIsOpened;
this.setState('stSXZ6q', cndViZj);
if (cndViZj) { 
component.modal = this._lc('cVVX2p02j', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let eliMl2K = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! eliMl2K.formHandler) {
                    window.cfrmdlr = eliMl2K.formHandler = new FormHandler(eliMl2K, component);
                } else {
                    window.cfrmdlr = eliMl2K.formHandler;
                }
            let eltKAff = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
eltKAff.value = fval(component.project.id);
let elXbb2X = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!eliMl2K.formHandler.getError(`name`) })}`);
let elpykVF = eo('label',null,null,`for`,`name`);
text(trans('Reminder Name'));
let elUBEAm = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elW6YKq = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eliMl2K.formHandler.addError(`name`, 'required', trans('validation.required'));}return eliMl2K.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Reminder Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elW6YKq.value = fval(component.record.name);
let cndS9tH = eliMl2K.formHandler.getError(`name`);
this.setState('stJehZP', cndS9tH);
if (cndS9tH) { 
let el7Hq2r = eo('div','5Jwf',null,`class`,`alert alert-danger`);
text(eliMl2K.formHandler.getError(`name`));
ec('div');
}ec('div');
let elD7AL1 = eo('div',null,null,`class`,`m-t-1 text-center`);
let elMFrH6 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stSXZ6q'});
}let cndqHAo = component.confirmDelete;
this.setState('stvgLSv', cndqHAo);
if (cndqHAo) { 
let cmpv1JL = this._lc('cVX8knCvy', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stvgLSv'});
}
                    this.isReadyToGo();
                }
        });