_Component({
                selector: 'project-project-discussions-page',
                c: 'ProjectProjectDiscussionsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cQVFb_n5b:'project-layout',c8o3zCCQg:'flk-modal',c5LIGmQNA:'flk-alert'},
                render: function (component) {
                    let cmpIOo6 = this._lc('cQVFb_n5b', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elFRkHa = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elNU4o6 = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Project-discussion`);
ec('button');
let elfAYkf = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Project-discussions
        (${ component.project.discussions.length })`);
ec('h1');
let elkge4S = eo('table',null,null,`class`,`table table-striped buttoned`);
let elIryRP = eo('thead');
let elM69_Y = eo('tr');
let eliocIQ = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elCVsqR = eo('tbody');
let cndpmcL = Is.empty(component.project.discussions);
this.setState('stIgemK', cndpmcL);
let cndZ5pF = !(cndpmcL);
this.setState('stSSV7g', cndZ5pF);
if (cndpmcL) { 
let elGcU0w = eo('tr','jNKf');
let el5KeD3 = eo('td','guBf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Project-discussions Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.projectDiscussions) {
let record = component.project.projectDiscussions[index]; 
 let iiEHtQ = 'QF4yLBh' + index;
let elkDiE7 = eo('tr','tU67IrMmHibV' + index+iiEHtQ);
let elNmSCu = eo('td','8gHff'+iiEHtQ);
let elB0kx_ = eo('button','pjhff'+iiEHtQ,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elnMh6L = eo('i','dt9ff'+iiEHtQ,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elB0kx_;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Project-discussion')}`});
        ;
                    }, 20);                
                let elowSqe = eo('button','lfWff'+iiEHtQ,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elK9GP7 = eo('i','7PEff'+iiEHtQ,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elowSqe;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Project-discussion')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cnd05x6 = component.modalIsOpened;
this.setState('stKXXL0', cnd05x6);
if (cnd05x6) { 
component.modal = this._lc('c8o3zCCQg', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elIHR0N = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elIHR0N.formHandler) {
                    window.cfrmdlr = elIHR0N.formHandler = new FormHandler(elIHR0N, component);
                } else {
                    window.cfrmdlr = elIHR0N.formHandler;
                }
            let el0x5gb = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el0x5gb.value = fval(component.project.id);
let elbIlZa = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elIHR0N.formHandler.getError(`name`) })}`);
let elLPhz0 = eo('label',null,null,`for`,`name`);
text(trans('Project-discussion Name'));
let elbH2XB = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elD8wuh = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elIHR0N.formHandler.addError(`name`, 'required', trans('validation.required'));}return elIHR0N.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Project-discussion Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elD8wuh.value = fval(component.record.name);
let cnd8byt = elIHR0N.formHandler.getError(`name`);
this.setState('stLKS6h', cnd8byt);
if (cnd8byt) { 
let el5bKKZ = eo('div','4Pwf',null,`class`,`alert alert-danger`);
text(elIHR0N.formHandler.getError(`name`));
ec('div');
}ec('div');
let elaU6ly = eo('div',null,null,`class`,`m-t-1 text-center`);
let el5NZsb = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stKXXL0'});
}let cndPGv6 = component.confirmDelete;
this.setState('stZ8EZV', cndPGv6);
if (cndPGv6) { 
let cmpeQDc = this._lc('c5LIGmQNA', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stZ8EZV'});
}
                    this.isReadyToGo();
                }
        });