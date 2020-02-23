_Component({
                selector: 'admin-tags-page',
                c: 'AdminTagsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {cWk2ApbyN:'table-actions',cadXKJwHs:'admin-table',cHhZ1N3Pw:'flk-image-input',crBgBaPYd:'flk-modal'},
                render: function (component) {
                    let cmp0pqr = this._lc('cadXKJwHs', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let tag = component.items[index]; 
 let ii0q0T = 'wS4KmMm' + index;
let el0Z0Yi = eo('tr','JgOoktF6xQYn' + index+ii0q0T);
let el1JMeu = eo('td','ujuff'+ii0q0T);
text( tag.id );
ec('td');
let elnalZX = eo('td','XMTff'+ii0q0T);
let elUQAJ8 = ev('img','uFuff'+ii0q0T,null,`src`,`${tag.image}`,`class`,`tagImg small-image`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
ec('td');
let elD4UTN = eo('td','QJeff'+ii0q0T);
text(tag.name);
ec('td');
let elduVeb = eo('td','EADff'+ii0q0T);
let cmpcVZ6 = this._lc('cWk2ApbyN', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(tag)},ondelete:function(e) {let $el = this; component.deleteItem(tag.id, index)}},insideLoop:true,index:"" +ii0q0T});
ec('td');
ec('tr');
}
}});
let cndjHAW = component.openModal;
this.setState('st3H3aZ', cndjHAW);
if (cndjHAW) { 
let cmpHoM7 = this._lc('crBgBaPYd', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elCkp0W = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elCkp0W.formHandler) {
                    window.cfrmdlr = elCkp0W.formHandler = new FormHandler(elCkp0W, component);
                } else {
                    window.cfrmdlr = elCkp0W.formHandler;
                }
            let elpoTIj = eo('div',null,null,`class`,`form-group`);
let elPJ6RM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elCkp0W.formHandler.addError(`name`, 'required', trans('validation.required'));}return elCkp0W.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Tag name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elPJ6RM.value = fval(component.formObject.name);
let cndFN2Q = elCkp0W.formHandler.getError(`name`);
this.setState('stWkBAx', cndFN2Q);
if (cndFN2Q) { 
let elWvftM = eo('div','L3Tf',null,`class`,`alert alert-danger`);
text(elCkp0W.formHandler.getError(`name`));
ec('div');
}ec('div');
let elY5Qe2 = eo('div',null,null,`class`,`form-group`);
let elr_YfC = eo('label',null,null,`for`,`image`);
text(`Tag image`);
ec('label');
let cmpryAb = this._lc('cHhZ1N3Pw', {parent:component,parentTop:flkModal,props:{src:component.formObject.image},attrs:{src:`${component.formObject.image}`,name:`${(`image`).toInputName()}`,id:'image',required:''},state:'st3H3aZ'});
ec('div');
let elpg9Zw = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elpHTgK = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'st3H3aZ'});
}
                    this.isReadyToGo();
                }
        });