_Component({
                selector: 'project-documentations-page',
                c: 'ProjectDocumentationsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {caw7M4b4c:'project-layout',cPCuRTxEG:'markdown-input',cnrIeboAx:'flk-modal',cNy4TqrtM:'flk-alert'},
                render: function (component) {
                    let cmpZaaC = this._lc('caw7M4b4c', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elXJzw5 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elOYet1 = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Documentation`);
ec('button');
let elu3kXP = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Documentations
        (${ component.project.documentations.length })`);
ec('h1');
let eldfuuy = eo('table',null,null,`class`,`table table-striped buttoned`);
let elwY8Po = eo('thead');
let elZTFAO = eo('tr');
let elAmwZe = eo('th');
text(`Title`);
ec('th');
let els2cts = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elyapX8 = eo('tbody');
let cndcGoN = Is.empty(component.project.documentations);
this.setState('stH51gh', cndcGoN);
let cndICVt = !(cndcGoN);
this.setState('stQqrCp', cndICVt);
if (cndcGoN) { 
let elQ00zl = eo('tr','bxif');
let eliglp0 = eo('td','dHrf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Documentations Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.documentations) {
let record = component.project.documentations[index]; 
 let ii3v8y = record.id+ index;
let elLhr3F = eo('tr','3s_0z2g4Yojp' + index+ii3v8y);
let elta3tr = eo('td','Kbvff'+ii3v8y);
let eleCc5n = eo('a','C72ff'+ii3v8y,null,`href`,`${URLS.project(component.project, 'documentation', record)}`);
text(record.title);
ec('a');
ec('td');
let elR9DPT = eo('td','y2Kff'+ii3v8y);
let eltKGe0 = eo('button','fANff'+ii3v8y,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elgX96g = eo('i','j6Off'+ii3v8y,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eltKGe0;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Documentation')}`});
        ;
                    }, 20);                
                let elhhLcP = eo('button','_Diff'+ii3v8y,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let el3bK65 = eo('i','JhCff'+ii3v8y,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elhhLcP;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Documentation')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndUmKt = component.modalIsOpened;
this.setState('stuWOo6', cndUmKt);
if (cndUmKt) { 
component.modal = this._lc('cnrIeboAx', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let eldXnCr = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! eldXnCr.formHandler) {
                    window.cfrmdlr = eldXnCr.formHandler = new FormHandler(eldXnCr, component);
                } else {
                    window.cfrmdlr = eldXnCr.formHandler;
                }
            let elRppxB = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elRppxB.value = fval(component.project.id);
let el9aD5G = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!eldXnCr.formHandler.getError(`title`) })}`);
let elWII16 = eo('label',null,null,`for`,`title`);
text(trans('Documentation title'));
let el9XZn5 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elxmA8h = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eldXnCr.formHandler.addError(`title`, 'required', trans('validation.required'));}return eldXnCr.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Documentation title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elxmA8h.value = fval(component.record.title);
let cndvWuZ = eldXnCr.formHandler.getError(`title`);
this.setState('stKL1TR', cndvWuZ);
if (cndvWuZ) { 
let elo0Bzs = eo('div','IUkf',null,`class`,`alert alert-danger`);
text(eldXnCr.formHandler.getError(`title`));
ec('div');
}ec('div');
let elva3Ii = eo('div',null,null,`class`,`m-t-1`);
let cmpgvsN = this._lc('cPCuRTxEG', {parent:component,parentTop:flkModal,props:{value:component.record.content,required:true},attrs:{name:`${(`content`).toInputName()}`,label:'Documentation content'},state:'stuWOo6'});
ec('div');
let elJusNa = eo('div',null,null,`class`,`m-t-1 text-center`);
let elGrpXN = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'full'},state:'stuWOo6'});
}let cndxJp9 = component.confirmDelete;
this.setState('std60RN', cndxJp9);
if (cndxJp9) { 
let cmpSHJ4 = this._lc('cNy4TqrtM', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'std60RN'});
}
                    this.isReadyToGo();
                }
        });