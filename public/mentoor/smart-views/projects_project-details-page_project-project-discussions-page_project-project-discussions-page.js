_Component({
                selector: 'project-project-discussions-page',
                c: 'ProjectProjectDiscussionsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cJQNuXRVI:'project-layout',cfkSLPher:'flk-modal',cRQRHFlja:'flk-alert'},
                render: function (component) {
                    let cmpoqtU = this._lc('cJQNuXRVI', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elzr9FO = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elDq_EY = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Project-discussion`);
ec('button');
let elqE8S7 = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Project-discussions
        (${ component.project.discussions.length })`);
ec('h1');
let elaLtlg = eo('table',null,null,`class`,`table table-striped buttoned`);
let elwtq2N = eo('thead');
let elcBzpI = eo('tr');
let elLaz_K = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elYjFdV = eo('tbody');
let cndxN02 = Is.empty(component.project.discussions);
this.setState('stvy8dz', cndxN02);
let cndpKWY = !(cndxN02);
this.setState('stmmWiT', cndpKWY);
if (cndxN02) { 
let elrQIQs = eo('tr','_Amf');
let elvolcp = eo('td','ascf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Project-discussions Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.projectDiscussions) {
let record = component.project.projectDiscussions[index]; 
 let iiew4D = 'EC_WZ46' + index;
let elQGn7v = eo('tr','lUn4rTbQR7lL' + index+iiew4D);
let el8xKNO = eo('td','DBbff'+iiew4D);
let elnYgyR = eo('button','zRmff'+iiew4D,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elLDpip = eo('i','HoVff'+iiew4D,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elnYgyR;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Project-discussion')}`});
        ;
                    }, 20);                
                let elNtnst = eo('button','Arjff'+iiew4D,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let eliJrED = eo('i','J6Aff'+iiew4D,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elNtnst;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Project-discussion')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndaAbB = component.modalIsOpened;
this.setState('steZBSc', cndaAbB);
if (cndaAbB) { 
component.modal = this._lc('cfkSLPher', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elBBEXU = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elBBEXU.formHandler) {
                    window.cfrmdlr = elBBEXU.formHandler = new FormHandler(elBBEXU, component);
                } else {
                    window.cfrmdlr = elBBEXU.formHandler;
                }
            let elDb7xs = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elDb7xs.value = fval(component.project.id);
let el3VtEi = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elBBEXU.formHandler.getError(`name`) })}`);
let eluyh55 = eo('label',null,null,`for`,`name`);
text(trans('Project-discussion Name'));
let elPEbBQ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el9zSia = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elBBEXU.formHandler.addError(`name`, 'required', trans('validation.required'));}return elBBEXU.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Project-discussion Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el9zSia.value = fval(component.record.name);
let cnd4nYi = elBBEXU.formHandler.getError(`name`);
this.setState('stCGEJF', cnd4nYi);
if (cnd4nYi) { 
let elY4VQ_ = eo('div','5zBf',null,`class`,`alert alert-danger`);
text(elBBEXU.formHandler.getError(`name`));
ec('div');
}ec('div');
let elKKx9O = eo('div',null,null,`class`,`m-t-1 text-center`);
let elZ4PDM = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'steZBSc'});
}let cndbVL1 = component.confirmDelete;
this.setState('st0Ha6E', cndbVL1);
if (cndbVL1) { 
let cmpqrMY = this._lc('cRQRHFlja', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st0Ha6E'});
}
                    this.isReadyToGo();
                }
        });