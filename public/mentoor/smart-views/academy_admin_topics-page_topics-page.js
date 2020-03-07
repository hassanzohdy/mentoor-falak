_Component({
                selector: 'topics-page',
                c: 'TopicsPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','trackId','formObject','isValidForm','submitting'],
                children: {cervxsNkU:'table-actions',c9_lbGMM8:'admin-table',cS2uVWEIP:'flk-checkbox',ct756HHVw:'flk-checkbox',ckNnEPJgN:'flk-modal'},
                render: function (component) {
                    let cmplvdF = this._lc('c9_lbGMM8', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let topic = component.items[index]; 
 let iiRia9 = 'MmELqk1' + index;
let elp2_dE = eo('tr','1EmJNl9lR1sN' + index+iiRia9,null,`id`,`${ topic.id }`);
let elML0jB = eo('td','KyWff'+iiRia9);
text(topic.id);
ec('td');
let elL0wvc = eo('td','rozff'+iiRia9);
text(topic.title);
ec('td');
let elFSAy5 = eo('td','iaEff'+iiRia9);
text(Boolean(topic.public));
ec('td');
let elPPgL8 = eo('td','yDlff'+iiRia9);
text( Number(topic.prize).format() );
ec('td');
let elLE42B = eo('td','rK5ff'+iiRia9);
text(topic.sortOrder);
ec('td');
let elLmE8i = eo('td','XOyff'+iiRia9);
let cmpFRbv = this._lc('cervxsNkU', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(topic)},ondelete:function(e) {let $el = this; component.deleteItem(topic.id, index)}},insideLoop:true,index:"" +iiRia9});
ec('td');
ec('tr');
}
}});
let cnd6bH1 = component.openModal;
this.setState('staZvLZ', cnd6bH1);
if (cnd6bH1) { 
let cmpv_Ns = this._lc('ckNnEPJgN', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elUY6gn = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elUY6gn.formHandler) {
                    window.cfrmdlr = elUY6gn.formHandler = new FormHandler(elUY6gn, component);
                } else {
                    window.cfrmdlr = elUY6gn.formHandler;
                }
            let elrae6e = ev('input',null,null, eventListeners, {oninput:[function(e) {component.trackId = this.value;}]},`value`,`${fval(component.trackId)}`,`name`,`${(`trackId`).toInputName()}`,`type`,`hidden`);
elrae6e.value = fval(component.trackId);
let elSPOgP = eo('div',null,null,`class`,`form-group`);
let elH_oug = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elUY6gn.formHandler.getError(`title`) })}`);
let elD23jF = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let elzxEHb = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el_w7gR = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUY6gn.formHandler.addError(`title`, 'required', trans('validation.required'));}return elUY6gn.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Track name`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el_w7gR.value = fval(component.formObject.title);
let cndQpXw = elUY6gn.formHandler.getError(`title`);
this.setState('sto47Jb', cndQpXw);
if (cndQpXw) { 
let el7Bhvx = eo('div','Btof',null,`class`,`alert alert-danger`);
text(elUY6gn.formHandler.getError(`title`));
ec('div');
}ec('div');
ec('div');
let el3FH2W = eo('div',null,null,`class`,`form-group`);
let elT9Jg5 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elUY6gn.formHandler.getError(`slug`) })}`);
let el3Mo0u = eo('label',null,null,`for`,`slug`);
text(trans('Slug'));
let elDegM2 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elFepma = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUY6gn.formHandler.addError(`slug`, 'required', trans('validation.required'));}return elUY6gn.formHandler.removeError(`slug`);}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`placeholder`,`${trans(`Url slug`)}`,`type`,`text`,`class`,`form-control`,`id`,`slug`);
elFepma.value = fval(component.formObject.slug);
let cndtPXf = elUY6gn.formHandler.getError(`slug`);
this.setState('staXFNi', cndtPXf);
if (cndtPXf) { 
let ell8lmm = eo('div','nWbf',null,`class`,`alert alert-danger`);
text(elUY6gn.formHandler.getError(`slug`));
ec('div');
}ec('div');
ec('div');
let elmI0wS = eo('div',null,null,`class`,`form-group`);
let elRJLMO = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.shortDescription = this.value;}]},`value`,`${fval(component.formObject.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Write a short description`)}`,`class`,`form-control`,`rows`,`4`);
elRJLMO.value = fval(component.formObject.shortDescription);
ec('textarea');
ec('div');
let elZT5SD = eo('div',null,null,`class`,`form-group`);
let el86Aw1 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.quest = this.value;}]},`value`,`${fval(component.formObject.quest)}`,`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest`)}`,`rows`,`6`,`error-msg-class`,`alert alert-danger`,`required`,``,`class`,`form-control`);
el86Aw1.value = fval(component.formObject.quest);
ec('textarea');
ec('div');
let el6u6GH = eo('div',null,null,`class`,`form-group`);
let elRQi1g = eo('div',null,null,`class`,`row`);
let elaYQp3 = eo('div',null,null,`class`,`col-md-4`);
let elcX7jn = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUY6gn.formHandler.addError(`prize`, 'required', trans('validation.required'));}return elUY6gn.formHandler.removeError(`prize`);}]},`value`,`${fval(component.formObject.prize)}`,`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`Prize`)}`,`class`,`form-control`,`type`,`number`,`id`,`prize`);
elcX7jn.value = fval(component.formObject.prize);
let cndnEdV = elUY6gn.formHandler.getError(`prize`);
this.setState('stezdHO', cndnEdV);
if (cndnEdV) { 
let elfhMSY = eo('div','ZNsf',null,`class`,`alert alert-danger`);
text(elUY6gn.formHandler.getError(`prize`));
ec('div');
}ec('div');
let elJ0p0b = eo('div',null,null,`class`,`col-md-4`);
let elhS6Ma = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elhS6Ma.value = fval(component.formObject.sortOrder);
ec('div');
let elXEtC7 = eo('div',null,null,`class`,`col-md-2`);
let cmpZM_Z = this._lc('cS2uVWEIP', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},events:{onchange:function(e) {let $el = this; component.formObject.display = ! component.formObject.display}},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'display topic',value:1},state:'staZvLZ'});
ec('div');
let elAOuXt = eo('div',null,null,`class`,`col-md-2`);
let cmpzd37 = this._lc('ct756HHVw', {parent:component,parentTop:flkModal,props:{checked:component.formObject.public},events:{onchange:function(e) {let $el = this; component.formObject.public = ! component.formObject.public}},boolAttrs:{checked:component.formObject.public},attrs:{name:`${(`public`).toInputName()}`,label:'Public topic',value:1},state:'staZvLZ'});
ec('div');
ec('div');
ec('div');
let elYgEFu = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let eldafja = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'staZvLZ'});
}
                    this.isReadyToGo();
                }
        });