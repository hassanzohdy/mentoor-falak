_Component({
                selector: 'suggest-topics-page',
                c: 'SuggestTopicsPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','statusesList','isValidForm','submitting'],
                children: {cibpsGF5I:'table-actions',cXZyo2xoL:'admin-table',ceWtZt6iv:'flk-modal'},
                render: function (component) {
                    let cmpxaRr = this._lc('cXZyo2xoL', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,hideAddBtn:true,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let topic = component.items[index]; 
 let iif2n7 = '3R763WO' + index;
let eltqH1t = eo('tr','yL3g1Vrh1DsW' + index+iif2n7);
let elWJWbF = eo('td','uzVff'+iif2n7);
text(topic.id);
ec('td');
let elUHXbC = eo('td','tigff'+iif2n7);
text(topic.track.name);
ec('td');
let elk5om8 = eo('td','3H3ff'+iif2n7);
text(topic.by.name);
ec('td');
let elxBT61 = eo('td','I2Tff'+iif2n7);
text(topic.title);
ec('td');
let elEKsVS = eo('td','Xzuff'+iif2n7);
text( topic.reward.format() );
ec('td');
let elfTmqU = eo('td','ljBff'+iif2n7);
let cmppKTF = this._lc('cibpsGF5I', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(topic)},ondelete:function(e) {let $el = this; component.deleteItem(topic.id, index)}},insideLoop:true,index:"" +iif2n7});
ec('td');
ec('tr');
}
}});
let cnd7HJ1 = component.openModal;
this.setState('stTbsTH', cnd7HJ1);
if (cnd7HJ1) { 
let cmpknXV = this._lc('ceWtZt6iv', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elnP2Xw = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elnP2Xw.formHandler) {
                    window.cfrmdlr = elnP2Xw.formHandler = new FormHandler(elnP2Xw, component);
                } else {
                    window.cfrmdlr = elnP2Xw.formHandler;
                }
            let elUNwmX = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.track.id = this.value;}]},`value`,`${fval(component.formObject.track.id)}`,`name`,`${(`trackId`).toInputName()}`,`type`,`hidden`);
elUNwmX.value = fval(component.formObject.track.id);
let el2F094 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`);
el2F094.value = fval(component.formObject.slug);
let eli_LUi = eo('div',null,null,`class`,`form-group`);
let elO9PML = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value)},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elnP2Xw.formHandler.addError(`title`, 'required', trans('validation.required'));}return elnP2Xw.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elO9PML.value = fval(component.formObject.title);
let cndsePx = elnP2Xw.formHandler.getError(`title`);
this.setState('stZqN9H', cndsePx);
if (cndsePx) { 
let elT13nN = eo('div','vjff',null,`class`,`alert alert-danger`);
text(elnP2Xw.formHandler.getError(`title`));
ec('div');
}ec('div');
let el_wETy = eo('div',null,null,`class`,`form-group`);
let elcG4TH = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.shortDescription = this.value;}]},`value`,`${fval(component.formObject.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Write a short description`)}`,`class`,`form-control`,`rows`,`4`);
elcG4TH.value = fval(component.formObject.shortDescription);
ec('textarea');
ec('div');
let elZMl0u = eo('div',null,null,`class`,`form-group`);
let el6ZXdf = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.quest = this.value;}]},`value`,`${fval(component.formObject.quest)}`,`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest`)}`,`rows`,`6`,`required`,``,`class`,`form-control`);
el6ZXdf.value = fval(component.formObject.quest);
ec('textarea');
ec('div');
let elxXL6s = eo('div',null,null,`class`,`form-group`);
let elUOR9I = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elnP2Xw.formHandler.addError(`reward`, 'required', trans('validation.required'));}return elnP2Xw.formHandler.removeError(`reward`);}]},`value`,`${fval(component.formObject.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`Reward`)}`,`class`,`form-control`,`type`,`number`,`id`,`reward`);
elUOR9I.value = fval(component.formObject.reward);
let cndT9NP = elnP2Xw.formHandler.getError(`reward`);
this.setState('strcOk2', cndT9NP);
if (cndT9NP) { 
let elye9Ci = eo('div','ii2f',null,`class`,`alert alert-danger`);
text(elnP2Xw.formHandler.getError(`reward`));
ec('div');
}ec('div');
let elP3CKL = eo('div',null,null,`class`,`form-group`);
let elpU8Ah = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.status = this.value;}]},`value`,`${fval(component.formObject.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`);
elpU8Ah.value = fval(component.formObject.status);
for (let i in component.statusesList) {
let type = component.statusesList[i]; 
 let iia2sl = 'chCtUrU' + i;
let elhFRYo = eo('option','hY2p6mUi92MF' + i+iia2sl,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elhFRYo.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let eloKafX = eo('div',null,null,`class`,`row`);
let elTNzns = eo('div',null,null,`class`,`col-md-4`);
let ely9p0O = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
ely9p0O.value = fval(component.formObject.sortOrder);
ec('div');
let elh3cJG = eo('div',null,null,`class`,`col-md-4`);
let elnKEPI = eo('div',null,null,`class`,`form-check m-t-1`);
let elimLA0 = eo('div',null,null,`class`,`custom-control custom-checkbox`);
let elFwxSP = ev('input',null,null, eventListeners, {onchange:[function(e) {var $el = this;component.formObject.display = ! component.formObject.display}]}, boolAttrs, {checked:true},`name`,`${(`display`).toInputName()}`,`type`,`checkbox`,`class`,`custom-control-input`,`value`,`1`,`id`,`display`);
let elCcJed = eo('label',null,null,`class`,`custom-control-label`,`for`,`display`);
text(trans('display'));
ec('label');
ec('div');
ec('div');
ec('div');
ec('div');
let elLAsPI = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let eldf0dO = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stTbsTH'});
}
                    this.isReadyToGo();
                }
        });