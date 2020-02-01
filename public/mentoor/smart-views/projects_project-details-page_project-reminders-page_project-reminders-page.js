_Component({
                selector: 'project-reminders-page',
                c: 'ProjectRemindersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cGQcgidfJ:'project-layout',cXfGArVHb:'flk-modal',ch_YK_mxa:'flk-alert'},
                render: function (component) {
                    let cmpD61P = this._lc('cGQcgidfJ', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elISVUn = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elqDCcc = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Reminder`);
ec('button');
let elguPgB = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Reminders
        (${ component.project.reminders.length })`);
ec('h1');
let elcsc8_ = eo('table',null,null,`class`,`table table-striped buttoned`);
let elKNcm3 = eo('thead');
let elytHMg = eo('tr');
let elLZtUN = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let el1Un4T = eo('tbody');
let cndmWlK = Is.empty(component.project.reminders);
this.setState('stnI7fb', cndmWlK);
let cndJnkn = !(cndmWlK);
this.setState('sthuQUA', cndJnkn);
if (cndmWlK) { 
let elFYIuC = eo('tr','XHMf');
let elPJU9K = eo('td','r2Hf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Reminders Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.reminders) {
let record = component.project.reminders[index]; 
 let iiKA59 = 'V6aCQIT' + index;
let el8BWfx = eo('tr','Is5tD4Jdh62w' + index+iiKA59);
let elRYRWq = eo('td','Eh9ff'+iiKA59);
let elgFGxQ = eo('button','ySKff'+iiKA59,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elmllmf = eo('i','ALQff'+iiKA59,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elgFGxQ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Reminder')}`});
        ;
                    }, 20);                
                let elsWcPe = eo('button','vdqff'+iiKA59,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elysHyF = eo('i','6Fgff'+iiKA59,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elsWcPe;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Reminder')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndQ8R_ = component.modalIsOpened;
this.setState('stMuBG0', cndQ8R_);
if (cndQ8R_) { 
component.modal = this._lc('cXfGArVHb', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let eltZLdF = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! eltZLdF.formHandler) {
                    window.cfrmdlr = eltZLdF.formHandler = new FormHandler(eltZLdF, component);
                } else {
                    window.cfrmdlr = eltZLdF.formHandler;
                }
            let elmje99 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elmje99.value = fval(component.project.id);
let eluSYD8 = eo('div',null,null,`class`,`form-group`);
eluSYD8.cls = {'group-error': !!eltZLdF.formHandler.getError(`name`) };

            for (let className in eluSYD8.cls) {
                eluSYD8.classList.toggle(className, eluSYD8.cls[className]);
            }  
            let elGkYcn = eo('label',null,null,`for`,`name`);
text(trans('Reminder Name'));
let el05oXG = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elLU6Vl = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eltZLdF.formHandler.addError(`name`, 'required', trans('validation.required'));}return eltZLdF.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Reminder Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elLU6Vl.value = fval(component.record.name);
let cnd9YXi = eltZLdF.formHandler.getError(`name`);
this.setState('strwofl', cnd9YXi);
if (cnd9YXi) { 
let elLXHG5 = eo('div','t3Of',null,`class`,`alert alert-danger`);
text(eltZLdF.formHandler.getError(`name`));
ec('div');
}ec('div');
let elb8OIA = eo('div',null,null,`class`,`m-t-1 text-center`);
let elsH7xA = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stMuBG0'});
}let cndK2lR = component.confirmDelete;
this.setState('stXryM0', cndK2lR);
if (cndK2lR) { 
let cmphpBk = this._lc('ch_YK_mxa', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stXryM0'});
}
                    this.isReadyToGo();
                }
        });