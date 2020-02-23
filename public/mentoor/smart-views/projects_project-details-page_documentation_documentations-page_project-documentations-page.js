_Component({
                selector: 'project-documentations-page',
                c: 'ProjectDocumentationsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cSFmNvun4:'project-layout',c2QScCWNT:'markdown-input',cnkr5D6Jy:'flk-modal',czpT_RqQY:'flk-alert'},
                render: function (component) {
                    let cmpbFBn = this._lc('cSFmNvun4', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el_elF8 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elCGuoX = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Documentation`);
ec('button');
let elF5rHu = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Documentations
        (${ component.project.documentations.length })`);
ec('h1');
let elrCJx7 = eo('table',null,null,`class`,`table table-striped buttoned`);
let elfw6HJ = eo('thead');
let elmoyOL = eo('tr');
let elLm8yj = eo('th');
text(`Title`);
ec('th');
let elIndnH = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elQOdXp = eo('tbody');
let cnd7QMU = Is.empty(component.project.documentations);
this.setState('stNKOFW', cnd7QMU);
let cndZajM = !(cnd7QMU);
this.setState('stevKjW', cndZajM);
if (cnd7QMU) { 
let el6OGtR = eo('tr','Acof');
let elNK1ex = eo('td','Uuhf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Documentations Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.documentations) {
let record = component.project.documentations[index]; 
 let iiaRRR = record.id+ index;
let elWOY9m = eo('tr','FWk7Pd8KIECP' + index+iiaRRR);
let elRO2FR = eo('td','4lYff'+iiaRRR);
let elXIRWQ = eo('a','IuWff'+iiaRRR,null,`href`,`${URLS.project(component.project, 'documentation', record)}`);
text(record.title);
ec('a');
ec('td');
let elgf7xa = eo('td','ggMff'+iiaRRR);
let el56j6r = eo('button','uAqff'+iiaRRR,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elzX9fl = eo('i','8lQff'+iiaRRR,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el56j6r;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Documentation')}`});
        ;
                    }, 20);                
                let elWfvpY = eo('button','1t2ff'+iiaRRR,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let eldkPWV = eo('i','7J0ff'+iiaRRR,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elWfvpY;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Documentation')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndkhaM = component.modalIsOpened;
this.setState('stf4cis', cndkhaM);
if (cndkhaM) { 
component.modal = this._lc('cnkr5D6Jy', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elHCG90 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elHCG90.formHandler) {
                    window.cfrmdlr = elHCG90.formHandler = new FormHandler(elHCG90, component);
                } else {
                    window.cfrmdlr = elHCG90.formHandler;
                }
            let elx0vNT = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elx0vNT.value = fval(component.project.id);
let elOiqCY = eo('div',null,null,`class`,`form-group`);
elOiqCY.cls = {'group-error': !!elHCG90.formHandler.getError(`title`) };

            for (let className in elOiqCY.cls) {
                elOiqCY.classList.toggle(className, elOiqCY.cls[className]);
            }  
            let elXHOTL = eo('label',null,null,`for`,`title`);
text(trans('Documentation title'));
let elwuPsD = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elAgjUT = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elHCG90.formHandler.addError(`title`, 'required', trans('validation.required'));}return elHCG90.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Documentation title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elAgjUT.value = fval(component.record.title);
let cndGSjm = elHCG90.formHandler.getError(`title`);
this.setState('stETRqv', cndGSjm);
if (cndGSjm) { 
let elfKnn5 = eo('div','t1Af',null,`class`,`alert alert-danger`);
text(elHCG90.formHandler.getError(`title`));
ec('div');
}ec('div');
let el67rlc = eo('div',null,null,`class`,`m-t-1`);
let cmpfTHf = this._lc('c2QScCWNT', {parent:component,parentTop:flkModal,props:{value:component.record.content,required:true},attrs:{name:`${(`content`).toInputName()}`,label:'Documentation content'},state:'stf4cis'});
ec('div');
let elEBGdB = eo('div',null,null,`class`,`m-t-1 text-center`);
let elTNFg1 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'full'},state:'stf4cis'});
}let cndD7Vo = component.confirmDelete;
this.setState('sttjPe_', cndD7Vo);
if (cndD7Vo) { 
let cmpSaLO = this._lc('czpT_RqQY', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'sttjPe_'});
}
                    this.isReadyToGo();
                }
        });