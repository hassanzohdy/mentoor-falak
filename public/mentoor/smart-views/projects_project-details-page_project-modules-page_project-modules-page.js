_Component({
                selector: 'project-modules-page',
                c: 'ProjectModulesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {coBstzK5Q:'project-layout',cmKUh6w0y:'flk-dropdown-list',csd4ghQ52:'flk-modal',c0Gfw9THf:'flk-alert'},
                render: function (component) {
                    let cmpQqTj = this._lc('coBstzK5Q', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndRdNi = component.project.isHigherAuthority || component.project.isTeamLeader;
this.setState('st3ZO9o', cndRdNi);
if (cndRdNi) { 
let elSI_L8 = eo('button','iSif',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let el5TU9O = eo('i','Lknf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Module`);
ec('button');
}let el7WPrw = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Modules
        (${ component.project.modules.length })`);
ec('h1');
let eleS8Ec = eo('table',null,null,`class`,`table table-striped buttoned`);
let elk6z1A = eo('thead');
let elAwIhV = eo('tr');
let el1jzIK = eo('th');
text(`Name`);
ec('th');
let elzkDSa = eo('th');
text(`Parent`);
ec('th');
let cndO7ME = component.project.isHigherAuthority;
this.setState('stdkSq6', cndO7ME);
if (cndO7ME) { 
let elrYCjk = eo('th','s1Xf');
text(`Control`);
ec('th');
}ec('tr');
ec('thead');
let elHYx0v = eo('tbody');
let cnddESb = Is.empty(component.project.modules);
this.setState('stWVfy_', cnddESb);
let cndmrJ8 = !(cnddESb);
this.setState('stGI7OV', cndmrJ8);
if (cnddESb) { 
let eleLi0w = eo('tr','TMlf');
let eljEpQg = eo('td','WQ3f',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Modules Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.modules) {
let record = component.project.modules[index]; 
 let iiXkwQ = 'XEyKRH3' + index;
let elkpF90 = eo('tr','4Mn40DzIF9vy' + index+iiXkwQ);
let el_Ls4L = eo('td','bswff'+iiXkwQ);
text(record.name);
ec('td');
let elLjCEG = eo('td','qWjff'+iiXkwQ);
text(record.parent.name || 'N/a');
ec('td');
let cndn8h0 = component.project.isHigherAuthority || component.project.isTeamLeader;
this.setState('stY8fZ1', cndn8h0);
if (cndn8h0) { 
let elh6DtK = eo('td','thbff'+iiXkwQ);
let elKBEQu = eo('button','z6xff'+iiXkwQ,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elbPifX = eo('i','klmff'+iiXkwQ,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elKBEQu;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Module')}`});
        ;
                    }, 20);                
                let el7X6Pg = eo('button','9sQff'+iiXkwQ,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elp1AJb = eo('i','XRKff'+iiXkwQ,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el7X6Pg;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Module')}`});
        ;
                    }, 20);                
                ec('td');
}ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndkrVT = component.modalIsOpened;
this.setState('stA4L9e', cndkrVT);
if (cndkrVT) { 
component.modal = this._lc('csd4ghQ52', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elPZOW9 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elPZOW9.formHandler) {
                    window.cfrmdlr = elPZOW9.formHandler = new FormHandler(elPZOW9, component);
                } else {
                    window.cfrmdlr = elPZOW9.formHandler;
                }
            let elhxLXL = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elhxLXL.value = fval(component.project.id);
let elC1cLt = eo('div',null,null,`class`,`form-group`);
elC1cLt.cls = {'group-error': !!elPZOW9.formHandler.getError(`name`) };

            for (let className in elC1cLt.cls) {
                elC1cLt.classList.toggle(className, elC1cLt.cls[className]);
            }  
            let ellD5Cg = eo('label',null,null,`for`,`name`);
text(trans('Module Name'));
let elzFKE8 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let ele2I7N = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elPZOW9.formHandler.addError(`name`, 'required', trans('validation.required'));}return elPZOW9.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Module Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
ele2I7N.value = fval(component.record.name);
let cndJpnv = elPZOW9.formHandler.getError(`name`);
this.setState('stLp1yE', cndJpnv);
if (cndJpnv) { 
let elMvZUK = eo('div','Sr_f',null,`class`,`alert alert-danger`);
text(elPZOW9.formHandler.getError(`name`));
ec('div');
}ec('div');
let cmp_ZjC = this._lc('cmKUh6w0y', {parent:component,parentTop:flkModal,props:{none:true,value:Object.get(component.record.parent, 'id', ''),except:component.record.id,items:component.project.modules},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent Module'},state:'stA4L9e'});
let elieTR3 = eo('div',null,null,`class`,`m-t-1 text-center`);
let elplIHv = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stA4L9e'});
}let cndF5P7 = component.confirmDelete;
this.setState('stkCeRq', cndF5P7);
if (cndF5P7) { 
let cmpBSL5 = this._lc('c0Gfw9THf', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stkCeRq'});
}
                    this.isReadyToGo();
                }
        });