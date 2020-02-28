_Component({
                selector: 'admin-tags-page',
                c: 'AdminTagsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {cysxSaUsE:'table-actions',cywRdaGat:'admin-table',czXeudBCi:'flk-image-input',cg1EImGxH:'flk-modal'},
                render: function (component) {
                    let cmpzqur = this._lc('cywRdaGat', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let tag = component.items[index]; 
 let iiQcYT = '3pJEQbW' + index;
let elsadZG = eo('tr','1tEOgyvV05Cq' + index+iiQcYT);
let elKOBkW = eo('td','kLvff'+iiQcYT);
text( tag.id );
ec('td');
let eloEahn = eo('td','usPff'+iiQcYT);
let elxVGzr = ev('img','mp5ff'+iiQcYT,null,`src`,`${tag.image}`,`class`,`tagImg small-image`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
ec('td');
let eldpgmX = eo('td','kGeff'+iiQcYT);
text(tag.name);
ec('td');
let elUPHZJ = eo('td','tWRff'+iiQcYT);
let cmpubVP = this._lc('cysxSaUsE', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(tag)},ondelete:function(e) {let $el = this; component.deleteItem(tag.id, index)}},insideLoop:true,index:"" +iiQcYT});
ec('td');
ec('tr');
}
}});
let cndBXSf = component.openModal;
this.setState('stO8oS_', cndBXSf);
if (cndBXSf) { 
let cmpji3T = this._lc('cg1EImGxH', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elkS4pr = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elkS4pr.formHandler) {
                    window.cfrmdlr = elkS4pr.formHandler = new FormHandler(elkS4pr, component);
                } else {
                    window.cfrmdlr = elkS4pr.formHandler;
                }
            let el1Jqyx = eo('div',null,null,`class`,`form-group`);
let el47HxD = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elkS4pr.formHandler.addError(`name`, 'required', trans('validation.required'));}return elkS4pr.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Tag name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el47HxD.value = fval(component.formObject.name);
let cndbuGW = elkS4pr.formHandler.getError(`name`);
this.setState('stk26ge', cndbuGW);
if (cndbuGW) { 
let el1ZSQd = eo('div','3sBf',null,`class`,`alert alert-danger`);
text(elkS4pr.formHandler.getError(`name`));
ec('div');
}ec('div');
let elV2SZ9 = eo('div',null,null,`class`,`form-group`);
let el29xif = eo('label',null,null,`for`,`image`);
text(`Tag image`);
ec('label');
let cmpC9U1 = this._lc('czXeudBCi', {parent:component,parentTop:flkModal,props:{src:component.formObject.image},attrs:{src:`${component.formObject.image}`,name:`${(`image`).toInputName()}`,id:'image',required:''},state:'stO8oS_'});
ec('div');
let elKCwdn = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elb7v32 = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stO8oS_'});
}
                    this.isReadyToGo();
                }
        });