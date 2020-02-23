_Component({
                selector: 'project-documentations-page',
                c: 'ProjectDocumentationsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cLpEu7o6t:'project-layout',cmqmrsIsJ:'markdown-input',ceWVw_mOT:'flk-modal',cFutjPiFb:'flk-alert'},
                render: function (component) {
                    let cmpLBL7 = this._lc('cLpEu7o6t', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elEK7i7 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let els1EqW = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Documentation`);
ec('button');
let elzSnl9 = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Documentations
        (${ component.project.documentations.length })`);
ec('h1');
let elaq7un = eo('table',null,null,`class`,`table table-striped buttoned`);
let elehsg9 = eo('thead');
let elHJ0aB = eo('tr');
let elTjE36 = eo('th');
text(`Title`);
ec('th');
let eltEO5m = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elSwUpO = eo('tbody');
let cndG2H2 = Is.empty(component.project.documentations);
this.setState('stoLooQ', cndG2H2);
let cnd9gjt = !(cndG2H2);
this.setState('stI8JOS', cnd9gjt);
if (cndG2H2) { 
let elZArCT = eo('tr','kL4f');
let eltdoaO = eo('td','yQJf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Documentations Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.documentations) {
let record = component.project.documentations[index]; 
 let iiSoV_ = record.id+ index;
let elrJnff = eo('tr','duxPFJJ7C7oT' + index+iiSoV_);
let elBiKTb = eo('td','pKNff'+iiSoV_);
let elPBiaf = eo('a','52Yff'+iiSoV_,null,`href`,`${URLS.project(component.project, 'documentation', record)}`);
text(record.title);
ec('a');
ec('td');
let eljaN_r = eo('td','cIvff'+iiSoV_);
let elsTyQ5 = eo('button','tKaff'+iiSoV_,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let el6w5lg = eo('i','YEHff'+iiSoV_,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elsTyQ5;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Documentation')}`});
        ;
                    }, 20);                
                let eloWdwh = eo('button','MpJff'+iiSoV_,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elULhCk = eo('i','Pbwff'+iiSoV_,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eloWdwh;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Documentation')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndXSdT = component.modalIsOpened;
this.setState('stHqw8u', cndXSdT);
if (cndXSdT) { 
component.modal = this._lc('ceWVw_mOT', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let eleU67e = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! eleU67e.formHandler) {
                    window.cfrmdlr = eleU67e.formHandler = new FormHandler(eleU67e, component);
                } else {
                    window.cfrmdlr = eleU67e.formHandler;
                }
            let elhbNfo = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elhbNfo.value = fval(component.project.id);
let elqodgI = eo('div',null,null,`class`,`form-group`);
elqodgI.cls = {'group-error': !!eleU67e.formHandler.getError(`title`) };

            for (let className in elqodgI.cls) {
                elqodgI.classList.toggle(className, elqodgI.cls[className]);
            }  
            let el5NQIH = eo('label',null,null,`for`,`title`);
text(trans('Documentation title'));
let elynBmN = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elLLo87 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eleU67e.formHandler.addError(`title`, 'required', trans('validation.required'));}return eleU67e.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Documentation title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elLLo87.value = fval(component.record.title);
let cndAXxN = eleU67e.formHandler.getError(`title`);
this.setState('staF0nf', cndAXxN);
if (cndAXxN) { 
let elvXDG1 = eo('div','WIlf',null,`class`,`alert alert-danger`);
text(eleU67e.formHandler.getError(`title`));
ec('div');
}ec('div');
let elgCqZF = eo('div',null,null,`class`,`m-t-1`);
let cmp0YAt = this._lc('cmqmrsIsJ', {parent:component,parentTop:flkModal,props:{value:component.record.content,required:true},attrs:{name:`${(`content`).toInputName()}`,label:'Documentation content'},state:'stHqw8u'});
ec('div');
let elmFlPk = eo('div',null,null,`class`,`m-t-1 text-center`);
let elHbYR4 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'full'},state:'stHqw8u'});
}let cnd53_T = component.confirmDelete;
this.setState('stXJHZC', cnd53_T);
if (cnd53_T) { 
let cmpBDHG = this._lc('cFutjPiFb', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stXJHZC'});
}
                    this.isReadyToGo();
                }
        });