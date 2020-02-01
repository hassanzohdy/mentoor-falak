_Component({
                selector: 'project-project-discussions-page',
                c: 'ProjectProjectDiscussionsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cHXZY71z5:'project-layout',cGmWABywY:'flk-modal',clffTUqWx:'flk-alert'},
                render: function (component) {
                    let cmpvnTA = this._lc('cHXZY71z5', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elhNo72 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let el0bcyJ = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Project-discussion`);
ec('button');
let elyWtDH = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Project-discussions
        (${ component.project.discussions.length })`);
ec('h1');
let elNzbg1 = eo('table',null,null,`class`,`table table-striped buttoned`);
let elCxrYc = eo('thead');
let elwBFE_ = eo('tr');
let elMBAWJ = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elbnr1Y = eo('tbody');
let cndwGeA = Is.empty(component.project.discussions);
this.setState('stJwW2F', cndwGeA);
let cnd3zwQ = !(cndwGeA);
this.setState('stS0iV8', cnd3zwQ);
if (cndwGeA) { 
let elHbbzs = eo('tr','GE7f');
let elDmxhM = eo('td','FOaf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Project-discussions Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.projectDiscussions) {
let record = component.project.projectDiscussions[index]; 
 let iiwWev = '5wcsU4Z' + index;
let elaJN1H = eo('tr','g3SvVwCQqNvr' + index+iiwWev);
let elhZ8jW = eo('td','H26ff'+iiwWev);
let elMfou2 = eo('button','etPff'+iiwWev,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elpLkxe = eo('i','5Mrff'+iiwWev,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elMfou2;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Project-discussion')}`});
        ;
                    }, 20);                
                let elb2JDT = eo('button','wsTff'+iiwWev,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elTfA23 = eo('i','XaSff'+iiwWev,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elb2JDT;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Project-discussion')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndhsOf = component.modalIsOpened;
this.setState('stRVRHZ', cndhsOf);
if (cndhsOf) { 
component.modal = this._lc('cGmWABywY', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let el3tgSY = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el3tgSY.formHandler) {
                    window.cfrmdlr = el3tgSY.formHandler = new FormHandler(el3tgSY, component);
                } else {
                    window.cfrmdlr = el3tgSY.formHandler;
                }
            let elgVmXS = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elgVmXS.value = fval(component.project.id);
let elY7TFm = eo('div',null,null,`class`,`form-group`);
elY7TFm.cls = {'group-error': !!el3tgSY.formHandler.getError(`name`) };

            for (let className in elY7TFm.cls) {
                elY7TFm.classList.toggle(className, elY7TFm.cls[className]);
            }  
            let ellAP3Y = eo('label',null,null,`for`,`name`);
text(trans('Project-discussion Name'));
let elxIL1q = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elE0H9i = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el3tgSY.formHandler.addError(`name`, 'required', trans('validation.required'));}return el3tgSY.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Project-discussion Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elE0H9i.value = fval(component.record.name);
let cndnt9Q = el3tgSY.formHandler.getError(`name`);
this.setState('stgNGun', cndnt9Q);
if (cndnt9Q) { 
let elDRxia = eo('div','GUPf',null,`class`,`alert alert-danger`);
text(el3tgSY.formHandler.getError(`name`));
ec('div');
}ec('div');
let elIAN4P = eo('div',null,null,`class`,`m-t-1 text-center`);
let elTo1X2 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stRVRHZ'});
}let cndD1hu = component.confirmDelete;
this.setState('stPZWme', cndD1hu);
if (cndD1hu) { 
let cmpsenl = this._lc('clffTUqWx', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stPZWme'});
}
                    this.isReadyToGo();
                }
        });