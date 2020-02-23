_Component({
                selector: 'admin-tags-page',
                c: 'AdminTagsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {clEiI4C5k:'table-actions',chTkxnnyR:'admin-table',cKzNGdpJh:'flk-image-input',cScmCVHTB:'flk-modal'},
                render: function (component) {
                    let cmpHKhs = this._lc('chTkxnnyR', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let tag = component.items[index]; 
 let iiiveu = 'g5GDPp2' + index;
let elN4scI = eo('tr','Zh0NReIwRuJT' + index+iiiveu);
let elmhQ2h = eo('td','rPSff'+iiiveu);
text( tag.id );
ec('td');
let el3TGpe = eo('td','5XYff'+iiiveu);
let elv_Ev1 = ev('img','jEEff'+iiiveu,null,`src`,`${tag.image}`,`class`,`tagImg small-image`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
ec('td');
let el5bj0d = eo('td','sZ9ff'+iiiveu);
text(tag.name);
ec('td');
let elyeTOk = eo('td','p5Tff'+iiiveu);
let cmpaKOl = this._lc('clEiI4C5k', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(tag)},ondelete:function(e) {let $el = this; component.deleteItem(tag.id, index)}},insideLoop:true,index:"" +iiiveu});
ec('td');
ec('tr');
}
}});
let cndXT2S = component.openModal;
this.setState('staLkVu', cndXT2S);
if (cndXT2S) { 
let cmpZjxj = this._lc('cScmCVHTB', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let el0skqA = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el0skqA.formHandler) {
                    window.cfrmdlr = el0skqA.formHandler = new FormHandler(el0skqA, component);
                } else {
                    window.cfrmdlr = el0skqA.formHandler;
                }
            let elLA7n7 = eo('div',null,null,`class`,`form-group`);
let elMYE4i = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el0skqA.formHandler.addError(`name`, 'required', trans('validation.required'));}return el0skqA.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Tag name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elMYE4i.value = fval(component.formObject.name);
let cndRlWM = el0skqA.formHandler.getError(`name`);
this.setState('st_NI8o', cndRlWM);
if (cndRlWM) { 
let elKUTGq = eo('div','xdqf',null,`class`,`alert alert-danger`);
text(el0skqA.formHandler.getError(`name`));
ec('div');
}ec('div');
let elZWth4 = eo('div',null,null,`class`,`form-group`);
let elwVX5w = eo('label',null,null,`for`,`image`);
text(`Tag image`);
ec('label');
let cmpHv42 = this._lc('cKzNGdpJh', {parent:component,parentTop:flkModal,props:{src:component.formObject.image},attrs:{src:`${component.formObject.image}`,name:`${(`image`).toInputName()}`,id:'image',required:''},state:'staLkVu'});
ec('div');
let el_m8WI = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let eldNXT5 = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'staLkVu'});
}
                    this.isReadyToGo();
                }
        });