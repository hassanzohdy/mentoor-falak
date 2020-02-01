_Component({
                selector: 'suggest-topics-page',
                c: 'SuggestTopicsPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','statusesList','isValidForm','submitting'],
                children: {coLWkQ3J3:'table-actions',cQ2iTDVSL:'admin-table',c2Jijx4A8:'flk-modal'},
                render: function (component) {
                    let cmpfbBp = this._lc('cQ2iTDVSL', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,hideAddBtn:true,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let topic = component.items[index]; 
 let iiGDsG = 'R8SGD80' + index;
let eliP0Wx = eo('tr','xxk94l0JY8hx' + index+iiGDsG);
let elihjyL = eo('td','00Tff'+iiGDsG);
text(topic.id);
ec('td');
let elr4YSz = eo('td','YDlff'+iiGDsG);
text(topic.track.name);
ec('td');
let elyu3tf = eo('td','Jsfff'+iiGDsG);
text(topic.by.name);
ec('td');
let elRoFp9 = eo('td','qNlff'+iiGDsG);
text(topic.title);
ec('td');
let elRn_fD = eo('td','Xsyff'+iiGDsG);
text( topic.reward.format() );
ec('td');
let elFIGg5 = eo('td','VLPff'+iiGDsG);
let cmpJ7aG = this._lc('coLWkQ3J3', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(topic)},ondelete:function(e) {let $el = this; component.deleteItem(topic.id, index)}},insideLoop:true,index:"" +iiGDsG});
ec('td');
ec('tr');
}
}});
let cndnNuD = component.openModal;
this.setState('stWmIoz', cndnNuD);
if (cndnNuD) { 
let cmp8qbo = this._lc('c2Jijx4A8', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elbZOF6 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elbZOF6.formHandler) {
                    window.cfrmdlr = elbZOF6.formHandler = new FormHandler(elbZOF6, component);
                } else {
                    window.cfrmdlr = elbZOF6.formHandler;
                }
            let el_EUhZ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.track.id = this.value;}]},`value`,`${fval(component.formObject.track.id)}`,`name`,`${(`trackId`).toInputName()}`,`type`,`hidden`);
el_EUhZ.value = fval(component.formObject.track.id);
let elJM56Y = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`);
elJM56Y.value = fval(component.formObject.slug);
let elWELLR = eo('div',null,null,`class`,`form-group`);
let elUqcBB = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value)},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbZOF6.formHandler.addError(`title`, 'required', trans('validation.required'));}return elbZOF6.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elUqcBB.value = fval(component.formObject.title);
let cndYW7q = elbZOF6.formHandler.getError(`title`);
this.setState('stxaJWk', cndYW7q);
if (cndYW7q) { 
let elu55c7 = eo('div','Mmdf',null,`class`,`alert alert-danger`);
text(elbZOF6.formHandler.getError(`title`));
ec('div');
}ec('div');
let elaQFxi = eo('div',null,null,`class`,`form-group`);
let elD34Mv = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.shortDescription = this.value;}]},`value`,`${fval(component.formObject.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Write a short description`)}`,`class`,`form-control`,`rows`,`4`);
elD34Mv.value = fval(component.formObject.shortDescription);
ec('textarea');
ec('div');
let elorGnI = eo('div',null,null,`class`,`form-group`);
let elhCywi = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.quest = this.value;}]},`value`,`${fval(component.formObject.quest)}`,`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest`)}`,`rows`,`6`,`required`,``,`class`,`form-control`);
elhCywi.value = fval(component.formObject.quest);
ec('textarea');
ec('div');
let elrFJXw = eo('div',null,null,`class`,`form-group`);
let elRnFsh = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbZOF6.formHandler.addError(`reward`, 'required', trans('validation.required'));}return elbZOF6.formHandler.removeError(`reward`);}]},`value`,`${fval(component.formObject.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`Reward`)}`,`class`,`form-control`,`type`,`number`,`id`,`reward`);
elRnFsh.value = fval(component.formObject.reward);
let cnd2HuT = elbZOF6.formHandler.getError(`reward`);
this.setState('stDNP2N', cnd2HuT);
if (cnd2HuT) { 
let elpEDJH = eo('div','dpTf',null,`class`,`alert alert-danger`);
text(elbZOF6.formHandler.getError(`reward`));
ec('div');
}ec('div');
let elR9iz7 = eo('div',null,null,`class`,`form-group`);
let elxXJv2 = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.status = this.value;}]},`value`,`${fval(component.formObject.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`);
elxXJv2.value = fval(component.formObject.status);
for (let i in component.statusesList) {
let type = component.statusesList[i]; 
 let iilAS1 = 'tvKBmZ_' + i;
let elUn4nq = eo('option','eGfjfjstKOCs' + i+iilAS1,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elUn4nq.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let el5bXn4 = eo('div',null,null,`class`,`row`);
let eloHXzi = eo('div',null,null,`class`,`col-md-4`);
let el6KIup = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
el6KIup.value = fval(component.formObject.sortOrder);
ec('div');
let elscYiz = eo('div',null,null,`class`,`col-md-4`);
let elGkMSH = eo('div',null,null,`class`,`form-check m-t-1`);
let elluYWE = eo('div',null,null,`class`,`custom-control custom-checkbox`);
let elnqYZi = ev('input',null,null, eventListeners, {onchange:[function(e) {var $el = this;component.formObject.display = ! component.formObject.display}]}, boolAttrs, {checked:true},`name`,`${(`display`).toInputName()}`,`type`,`checkbox`,`class`,`custom-control-input`,`value`,`1`,`id`,`display`);
let els1KZi = eo('label',null,null,`class`,`custom-control-label`,`for`,`display`);
text(trans('display'));
ec('label');
ec('div');
ec('div');
ec('div');
ec('div');
let elgNomb = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elid4Nz = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stWmIoz'});
}
                    this.isReadyToGo();
                }
        });