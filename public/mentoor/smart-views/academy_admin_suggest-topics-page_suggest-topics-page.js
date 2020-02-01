_Component({
                selector: 'suggest-topics-page',
                c: 'SuggestTopicsPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','statusesList','isValidForm','submitting'],
                children: {cByk0oxGj:'table-actions',cCoLfcYcT:'admin-table',cnJdFeHRB:'flk-modal'},
                render: function (component) {
                    let cmpS_cI = this._lc('cCoLfcYcT', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,hideAddBtn:true,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let topic = component.items[index]; 
 let iiDIhu = '0MOLqSM' + index;
let elrneGR = eo('tr','5AXilpX2IdJH' + index+iiDIhu);
let eldGU3b = eo('td','FGpff'+iiDIhu);
text(topic.id);
ec('td');
let elNe_OJ = eo('td','Nr2ff'+iiDIhu);
text(topic.track.name);
ec('td');
let elFaZ9t = eo('td','dIJff'+iiDIhu);
text(topic.by.name);
ec('td');
let elfkmEZ = eo('td','5izff'+iiDIhu);
text(topic.title);
ec('td');
let el0Th8i = eo('td','i8Rff'+iiDIhu);
text( topic.reward.format() );
ec('td');
let ela3u12 = eo('td','bSgff'+iiDIhu);
let cmprcd9 = this._lc('cByk0oxGj', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(topic)},ondelete:function(e) {let $el = this; component.deleteItem(topic.id, index)}},insideLoop:true,index:"" +iiDIhu});
ec('td');
ec('tr');
}
}});
let cnd816z = component.openModal;
this.setState('stjo4ce', cnd816z);
if (cnd816z) { 
let cmp1W8y = this._lc('cnJdFeHRB', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elUAPnX = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elUAPnX.formHandler) {
                    window.cfrmdlr = elUAPnX.formHandler = new FormHandler(elUAPnX, component);
                } else {
                    window.cfrmdlr = elUAPnX.formHandler;
                }
            let elPVVJl = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.track.id = this.value;}]},`value`,`${fval(component.formObject.track.id)}`,`name`,`${(`trackId`).toInputName()}`,`type`,`hidden`);
elPVVJl.value = fval(component.formObject.track.id);
let elR4a3f = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`);
elR4a3f.value = fval(component.formObject.slug);
let elyUJKA = eo('div',null,null,`class`,`form-group`);
let elxzCIk = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value)},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUAPnX.formHandler.addError(`title`, 'required', trans('validation.required'));}return elUAPnX.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elxzCIk.value = fval(component.formObject.title);
let cndhXxr = elUAPnX.formHandler.getError(`title`);
this.setState('stIhFKl', cndhXxr);
if (cndhXxr) { 
let elAHTF_ = eo('div','I8sf',null,`class`,`alert alert-danger`);
text(elUAPnX.formHandler.getError(`title`));
ec('div');
}ec('div');
let eloPIIn = eo('div',null,null,`class`,`form-group`);
let elUGBdG = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.shortDescription = this.value;}]},`value`,`${fval(component.formObject.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Write a short description`)}`,`class`,`form-control`,`rows`,`4`);
elUGBdG.value = fval(component.formObject.shortDescription);
ec('textarea');
ec('div');
let elxSySC = eo('div',null,null,`class`,`form-group`);
let el101sV = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.quest = this.value;}]},`value`,`${fval(component.formObject.quest)}`,`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest`)}`,`rows`,`6`,`required`,``,`class`,`form-control`);
el101sV.value = fval(component.formObject.quest);
ec('textarea');
ec('div');
let elJsHxB = eo('div',null,null,`class`,`form-group`);
let elr5Qdi = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUAPnX.formHandler.addError(`reward`, 'required', trans('validation.required'));}return elUAPnX.formHandler.removeError(`reward`);}]},`value`,`${fval(component.formObject.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`Reward`)}`,`class`,`form-control`,`type`,`number`,`id`,`reward`);
elr5Qdi.value = fval(component.formObject.reward);
let cndoCtn = elUAPnX.formHandler.getError(`reward`);
this.setState('styuyPm', cndoCtn);
if (cndoCtn) { 
let elZxDfh = eo('div','e3of',null,`class`,`alert alert-danger`);
text(elUAPnX.formHandler.getError(`reward`));
ec('div');
}ec('div');
let elzbVML = eo('div',null,null,`class`,`form-group`);
let eloxnjm = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.status = this.value;}]},`value`,`${fval(component.formObject.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`);
eloxnjm.value = fval(component.formObject.status);
for (let i in component.statusesList) {
let type = component.statusesList[i]; 
 let iiDDOS = 'mrMNOgj' + i;
let el_HmAS = eo('option','_P7u3ZHcIJwj' + i+iiDDOS,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
el_HmAS.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let elbhaDW = eo('div',null,null,`class`,`row`);
let el9NwaE = eo('div',null,null,`class`,`col-md-4`);
let ele8XwH = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
ele8XwH.value = fval(component.formObject.sortOrder);
ec('div');
let elo9wta = eo('div',null,null,`class`,`col-md-4`);
let elS2L9j = eo('div',null,null,`class`,`form-check m-t-1`);
let elQSP2E = eo('div',null,null,`class`,`custom-control custom-checkbox`);
let el9kOOW = ev('input',null,null, eventListeners, {onchange:[function(e) {var $el = this;component.formObject.display = ! component.formObject.display}]}, boolAttrs, {checked:true},`name`,`${(`display`).toInputName()}`,`type`,`checkbox`,`class`,`custom-control-input`,`value`,`1`,`id`,`display`);
let elmv3aU = eo('label',null,null,`class`,`custom-control-label`,`for`,`display`);
text(trans('display'));
ec('label');
ec('div');
ec('div');
ec('div');
ec('div');
let el_SJmm = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elwVfVN = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stjo4ce'});
}
                    this.isReadyToGo();
                }
        });