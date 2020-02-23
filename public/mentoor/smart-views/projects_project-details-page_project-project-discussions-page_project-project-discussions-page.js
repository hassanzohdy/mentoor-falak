_Component({
                selector: 'project-project-discussions-page',
                c: 'ProjectProjectDiscussionsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {crK9yK1aZ:'project-layout',cULo4LC3V:'flk-modal',c7yLYYzXK:'flk-alert'},
                render: function (component) {
                    let cmpCbFy = this._lc('crK9yK1aZ', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elOmaC8 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elbglfQ = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Project-discussion`);
ec('button');
let elXn9Sm = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Project-discussions
        (${ component.project.discussions.length })`);
ec('h1');
let elXNdmn = eo('table',null,null,`class`,`table table-striped buttoned`);
let elGsOR1 = eo('thead');
let elqk8gK = eo('tr');
let elzjvvp = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elApokm = eo('tbody');
let cndZMBs = Is.empty(component.project.discussions);
this.setState('stCIL2M', cndZMBs);
let cndB3Qu = !(cndZMBs);
this.setState('stxwTV6', cndB3Qu);
if (cndZMBs) { 
let elIRLzq = eo('tr','fxYf');
let elEbfOy = eo('td','LFQf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Project-discussions Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.projectDiscussions) {
let record = component.project.projectDiscussions[index]; 
 let iiKIZa = 'BFrC6uX' + index;
let elPg7aZ = eo('tr','9E9joK9mJ60J' + index+iiKIZa);
let elPxh9q = eo('td','m6kff'+iiKIZa);
let elv9yuV = eo('button','rnpff'+iiKIZa,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let el5fbyn = eo('i','90Uff'+iiKIZa,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elv9yuV;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Project-discussion')}`});
        ;
                    }, 20);                
                let elRL8U0 = eo('button','c2kff'+iiKIZa,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elwAVW7 = eo('i','3Yzff'+iiKIZa,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elRL8U0;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Project-discussion')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndHSN6 = component.modalIsOpened;
this.setState('stAa_tB', cndHSN6);
if (cndHSN6) { 
component.modal = this._lc('cULo4LC3V', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elVXXoL = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elVXXoL.formHandler) {
                    window.cfrmdlr = elVXXoL.formHandler = new FormHandler(elVXXoL, component);
                } else {
                    window.cfrmdlr = elVXXoL.formHandler;
                }
            let elHsvFf = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elHsvFf.value = fval(component.project.id);
let el8HPgI = eo('div',null,null,`class`,`form-group`);
el8HPgI.cls = {'group-error': !!elVXXoL.formHandler.getError(`name`) };

            for (let className in el8HPgI.cls) {
                el8HPgI.classList.toggle(className, el8HPgI.cls[className]);
            }  
            let el_oWJZ = eo('label',null,null,`for`,`name`);
text(trans('Project-discussion Name'));
let elyAM4w = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elVZIri = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elVXXoL.formHandler.addError(`name`, 'required', trans('validation.required'));}return elVXXoL.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Project-discussion Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elVZIri.value = fval(component.record.name);
let cndS_WU = elVXXoL.formHandler.getError(`name`);
this.setState('stA4De7', cndS_WU);
if (cndS_WU) { 
let elruJJ8 = eo('div','jBef',null,`class`,`alert alert-danger`);
text(elVXXoL.formHandler.getError(`name`));
ec('div');
}ec('div');
let elcuN7X = eo('div',null,null,`class`,`m-t-1 text-center`);
let elsXqRp = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stAa_tB'});
}let cndacvy = component.confirmDelete;
this.setState('stXjwZK', cndacvy);
if (cndacvy) { 
let cmpAnn_ = this._lc('c7yLYYzXK', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stXjwZK'});
}
                    this.isReadyToGo();
                }
        });