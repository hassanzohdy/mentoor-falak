_Component({
                selector: 'suggest-topics-page',
                c: 'SuggestTopicsPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','statusesList','isValidForm','submitting'],
                children: {cPCfCkg7A:'table-actions',cHwUO0Oqm:'admin-table',c2wIPOZ6k:'flk-modal'},
                render: function (component) {
                    let cmpsr3J = this._lc('cHwUO0Oqm', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,hideAddBtn:true,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let topic = component.items[index]; 
 let iiHLa9 = 'zXTDWQS' + index;
let elkOECb = eo('tr','mXM5O5JwJiD2' + index+iiHLa9);
let el9rraD = eo('td','4dBff'+iiHLa9);
text(topic.id);
ec('td');
let elMcEbF = eo('td','C7Iff'+iiHLa9);
text(topic.track.name);
ec('td');
let elXkTjc = eo('td','CYGff'+iiHLa9);
text(topic.by.name);
ec('td');
let el6SR78 = eo('td','5vBff'+iiHLa9);
text(topic.title);
ec('td');
let elndAl4 = eo('td','jcWff'+iiHLa9);
text( topic.reward.format() );
ec('td');
let el6Tqp0 = eo('td','QiPff'+iiHLa9);
let cmpP2rc = this._lc('cPCfCkg7A', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(topic)},ondelete:function(e) {let $el = this; component.deleteItem(topic.id, index)}},insideLoop:true,index:"" +iiHLa9});
ec('td');
ec('tr');
}
}});
let cndMvwT = component.openModal;
this.setState('st2ZOP4', cndMvwT);
if (cndMvwT) { 
let cmprXOu = this._lc('c2wIPOZ6k', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elUOXV0 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elUOXV0.formHandler) {
                    window.cfrmdlr = elUOXV0.formHandler = new FormHandler(elUOXV0, component);
                } else {
                    window.cfrmdlr = elUOXV0.formHandler;
                }
            let el1wp5O = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.track.id = this.value;}]},`value`,`${fval(component.formObject.track.id)}`,`name`,`${(`trackId`).toInputName()}`,`type`,`hidden`);
el1wp5O.value = fval(component.formObject.track.id);
let elilld2 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`);
elilld2.value = fval(component.formObject.slug);
let el_LOFc = eo('div',null,null,`class`,`form-group`);
let elmL_Ey = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value)},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUOXV0.formHandler.addError(`title`, 'required', trans('validation.required'));}return elUOXV0.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elmL_Ey.value = fval(component.formObject.title);
let cndXLXz = elUOXV0.formHandler.getError(`title`);
this.setState('stsovXp', cndXLXz);
if (cndXLXz) { 
let elZPldA = eo('div','LNif',null,`class`,`alert alert-danger`);
text(elUOXV0.formHandler.getError(`title`));
ec('div');
}ec('div');
let eluBr2f = eo('div',null,null,`class`,`form-group`);
let elnaqsk = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.shortDescription = this.value;}]},`value`,`${fval(component.formObject.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Write a short description`)}`,`class`,`form-control`,`rows`,`4`);
elnaqsk.value = fval(component.formObject.shortDescription);
ec('textarea');
ec('div');
let elNUViL = eo('div',null,null,`class`,`form-group`);
let elXfRIA = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.quest = this.value;}]},`value`,`${fval(component.formObject.quest)}`,`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest`)}`,`rows`,`6`,`required`,``,`class`,`form-control`);
elXfRIA.value = fval(component.formObject.quest);
ec('textarea');
ec('div');
let el7b8up = eo('div',null,null,`class`,`form-group`);
let elI4vCV = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUOXV0.formHandler.addError(`reward`, 'required', trans('validation.required'));}return elUOXV0.formHandler.removeError(`reward`);}]},`value`,`${fval(component.formObject.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`Reward`)}`,`class`,`form-control`,`type`,`number`,`id`,`reward`);
elI4vCV.value = fval(component.formObject.reward);
let cndG9_s = elUOXV0.formHandler.getError(`reward`);
this.setState('stSHjPu', cndG9_s);
if (cndG9_s) { 
let el6334T = eo('div','VNzf',null,`class`,`alert alert-danger`);
text(elUOXV0.formHandler.getError(`reward`));
ec('div');
}ec('div');
let elE2OAq = eo('div',null,null,`class`,`form-group`);
let elOwdVD = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.status = this.value;}]},`value`,`${fval(component.formObject.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`);
elOwdVD.value = fval(component.formObject.status);
for (let i in component.statusesList) {
let type = component.statusesList[i]; 
 let ii2apY = 'Ex4zwFi' + i;
let el7Kw8E = eo('option','qcfoE2PnbvtS' + i+ii2apY,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
el7Kw8E.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let eldrNz2 = eo('div',null,null,`class`,`row`);
let elx6th8 = eo('div',null,null,`class`,`col-md-4`);
let el9Xvrn = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
el9Xvrn.value = fval(component.formObject.sortOrder);
ec('div');
let elos8YF = eo('div',null,null,`class`,`col-md-4`);
let el86bK4 = eo('div',null,null,`class`,`form-check m-t-1`);
let el1wSPk = eo('div',null,null,`class`,`custom-control custom-checkbox`);
let el_qzsq = ev('input',null,null, eventListeners, {onchange:[function(e) {var $el = this;component.formObject.display = ! component.formObject.display}]}, boolAttrs, {checked:true},`name`,`${(`display`).toInputName()}`,`type`,`checkbox`,`class`,`custom-control-input`,`value`,`1`,`id`,`display`);
let elZZzmT = eo('label',null,null,`class`,`custom-control-label`,`for`,`display`);
text(trans('display'));
ec('label');
ec('div');
ec('div');
ec('div');
ec('div');
let elLiEku = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elCoECW = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'st2ZOP4'});
}
                    this.isReadyToGo();
                }
        });