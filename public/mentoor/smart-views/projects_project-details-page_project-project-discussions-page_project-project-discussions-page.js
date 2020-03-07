_Component({
                selector: 'project-project-discussions-page',
                c: 'ProjectProjectDiscussionsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cC47i4Vse:'project-layout',cf4elG6Cd:'flk-modal',cRnofkImC:'flk-alert'},
                render: function (component) {
                    let cmp2_EP = this._lc('cC47i4Vse', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elYlIzg = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elBESFX = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Project-discussion`);
ec('button');
let elAJ_k2 = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Project-discussions
        (${ component.project.discussions.length })`);
ec('h1');
let el7NIRs = eo('table',null,null,`class`,`table table-striped buttoned`);
let elKX7Xn = eo('thead');
let elxBQ8O = eo('tr');
let ely4j1a = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elNlUK4 = eo('tbody');
let cndQC44 = Is.empty(component.project.discussions);
this.setState('stFbald', cndQC44);
let cndx0eH = !(cndQC44);
this.setState('stjKGSX', cndx0eH);
if (cndQC44) { 
let el0yNYQ = eo('tr','9akf');
let elf_Qyl = eo('td','b9Bf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Project-discussions Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.projectDiscussions) {
let record = component.project.projectDiscussions[index]; 
 let iiEfar = 'GSw9C5Z' + index;
let elH6GgC = eo('tr','kLrIJbN3ONfi' + index+iiEfar);
let el4Z1nM = eo('td','ou6ff'+iiEfar);
let elQV93J = eo('button','cWeff'+iiEfar,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elTih0s = eo('i','VVQff'+iiEfar,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elQV93J;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Project-discussion')}`});
        ;
                    }, 20);                
                let elQYpxo = eo('button','Tm4ff'+iiEfar,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elynmOm = eo('i','Z7Aff'+iiEfar,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elQYpxo;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Project-discussion')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndRjF8 = component.modalIsOpened;
this.setState('stzDFz1', cndRjF8);
if (cndRjF8) { 
component.modal = this._lc('cf4elG6Cd', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let el_BnrL = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el_BnrL.formHandler) {
                    window.cfrmdlr = el_BnrL.formHandler = new FormHandler(el_BnrL, component);
                } else {
                    window.cfrmdlr = el_BnrL.formHandler;
                }
            let elbyRwy = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elbyRwy.value = fval(component.project.id);
let elMOw9J = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el_BnrL.formHandler.getError(`name`) })}`);
let elYzNSw = eo('label',null,null,`for`,`name`);
text(trans('Project-discussion Name'));
let elM7ujw = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elCrRgj = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_BnrL.formHandler.addError(`name`, 'required', trans('validation.required'));}return el_BnrL.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Project-discussion Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elCrRgj.value = fval(component.record.name);
let cndUMRz = el_BnrL.formHandler.getError(`name`);
this.setState('stbFIqC', cndUMRz);
if (cndUMRz) { 
let elIUxFj = eo('div','GQNf',null,`class`,`alert alert-danger`);
text(el_BnrL.formHandler.getError(`name`));
ec('div');
}ec('div');
let elYxXlx = eo('div',null,null,`class`,`m-t-1 text-center`);
let elQSdE6 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stzDFz1'});
}let cndq5MJ = component.confirmDelete;
this.setState('stmFO9k', cndq5MJ);
if (cndq5MJ) { 
let cmpj2Qt = this._lc('cRnofkImC', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stmFO9k'});
}
                    this.isReadyToGo();
                }
        });