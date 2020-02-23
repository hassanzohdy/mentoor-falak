_Component({
                selector: 'suggest-topics-page',
                c: 'SuggestTopicsPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','statusesList','isValidForm','submitting'],
                children: {cmk5I5Klz:'table-actions',c7NrXy2zb:'admin-table',cklHpSQOK:'flk-modal'},
                render: function (component) {
                    let cmp9Lut = this._lc('c7NrXy2zb', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,hideAddBtn:true,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let topic = component.items[index]; 
 let iimOhE = 'pzxXxV4' + index;
let elZatoC = eo('tr','8mU6NJ7XO3f5' + index+iimOhE);
let elTR9b8 = eo('td','bQUff'+iimOhE);
text(topic.id);
ec('td');
let eldTEri = eo('td','QRyff'+iimOhE);
text(topic.track.name);
ec('td');
let elCzPal = eo('td','L4Xff'+iimOhE);
text(topic.by.name);
ec('td');
let elCLG9O = eo('td','Pumff'+iimOhE);
text(topic.title);
ec('td');
let elS1z8Q = eo('td','NWAff'+iimOhE);
text( topic.reward.format() );
ec('td');
let elZmzu9 = eo('td','NZrff'+iimOhE);
let cmpIBKB = this._lc('cmk5I5Klz', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(topic)},ondelete:function(e) {let $el = this; component.deleteItem(topic.id, index)}},insideLoop:true,index:"" +iimOhE});
ec('td');
ec('tr');
}
}});
let cndDH2g = component.openModal;
this.setState('stHn84Y', cndDH2g);
if (cndDH2g) { 
let cmpHHpi = this._lc('cklHpSQOK', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let el7lc7e = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el7lc7e.formHandler) {
                    window.cfrmdlr = el7lc7e.formHandler = new FormHandler(el7lc7e, component);
                } else {
                    window.cfrmdlr = el7lc7e.formHandler;
                }
            let elMKE6i = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.track.id = this.value;}]},`value`,`${fval(component.formObject.track.id)}`,`name`,`${(`trackId`).toInputName()}`,`type`,`hidden`);
elMKE6i.value = fval(component.formObject.track.id);
let el5a40e = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`);
el5a40e.value = fval(component.formObject.slug);
let elq6hTG = eo('div',null,null,`class`,`form-group`);
let elBGd5C = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value)},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7lc7e.formHandler.addError(`title`, 'required', trans('validation.required'));}return el7lc7e.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elBGd5C.value = fval(component.formObject.title);
let cndfDrZ = el7lc7e.formHandler.getError(`title`);
this.setState('stF_Rjj', cndfDrZ);
if (cndfDrZ) { 
let elBsy3G = eo('div','o4nf',null,`class`,`alert alert-danger`);
text(el7lc7e.formHandler.getError(`title`));
ec('div');
}ec('div');
let eloFjWt = eo('div',null,null,`class`,`form-group`);
let elOzPZz = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.shortDescription = this.value;}]},`value`,`${fval(component.formObject.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Write a short description`)}`,`class`,`form-control`,`rows`,`4`);
elOzPZz.value = fval(component.formObject.shortDescription);
ec('textarea');
ec('div');
let elLzPgZ = eo('div',null,null,`class`,`form-group`);
let elXz2AM = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.quest = this.value;}]},`value`,`${fval(component.formObject.quest)}`,`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest`)}`,`rows`,`6`,`required`,``,`class`,`form-control`);
elXz2AM.value = fval(component.formObject.quest);
ec('textarea');
ec('div');
let eloTvuu = eo('div',null,null,`class`,`form-group`);
let elVGFTN = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7lc7e.formHandler.addError(`reward`, 'required', trans('validation.required'));}return el7lc7e.formHandler.removeError(`reward`);}]},`value`,`${fval(component.formObject.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`Reward`)}`,`class`,`form-control`,`type`,`number`,`id`,`reward`);
elVGFTN.value = fval(component.formObject.reward);
let cndWqQW = el7lc7e.formHandler.getError(`reward`);
this.setState('sttbVo0', cndWqQW);
if (cndWqQW) { 
let elwCsPF = eo('div','OOrf',null,`class`,`alert alert-danger`);
text(el7lc7e.formHandler.getError(`reward`));
ec('div');
}ec('div');
let elL8jFV = eo('div',null,null,`class`,`form-group`);
let elk3Wyi = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.status = this.value;}]},`value`,`${fval(component.formObject.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`);
elk3Wyi.value = fval(component.formObject.status);
for (let i in component.statusesList) {
let type = component.statusesList[i]; 
 let iiVInT = 'KYYUGZG' + i;
let elPWle_ = eo('option','wFhkBgyY_igg' + i+iiVInT,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elPWle_.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let elYeEsU = eo('div',null,null,`class`,`row`);
let el2CWOk = eo('div',null,null,`class`,`col-md-4`);
let elu2E1G = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elu2E1G.value = fval(component.formObject.sortOrder);
ec('div');
let elkn594 = eo('div',null,null,`class`,`col-md-4`);
let elGQ8EV = eo('div',null,null,`class`,`form-check m-t-1`);
let eluRtPG = eo('div',null,null,`class`,`custom-control custom-checkbox`);
let ele42GH = ev('input',null,null, eventListeners, {onchange:[function(e) {var $el = this;component.formObject.display = ! component.formObject.display}]}, boolAttrs, {checked:true},`name`,`${(`display`).toInputName()}`,`type`,`checkbox`,`class`,`custom-control-input`,`value`,`1`,`id`,`display`);
let el6p1Ga = eo('label',null,null,`class`,`custom-control-label`,`for`,`display`);
text(trans('display'));
ec('label');
ec('div');
ec('div');
ec('div');
ec('div');
let elrUD8K = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let ela5mmF = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stHn84Y'});
}
                    this.isReadyToGo();
                }
        });