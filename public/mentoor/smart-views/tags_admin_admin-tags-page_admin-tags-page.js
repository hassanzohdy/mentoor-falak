_Component({
                selector: 'admin-tags-page',
                c: 'AdminTagsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {ckskJtOGL:'table-actions',cP8JTuyZC:'admin-table',cxuM8L1Jz:'flk-image-input',cjGw4LOG1:'flk-modal'},
                render: function (component) {
                    let cmpdcxB = this._lc('cP8JTuyZC', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let tag = component.items[index]; 
 let ii8BF0 = 'aEUPvpg' + index;
let elusHGN = eo('tr','yy2rbXywmJJG' + index+ii8BF0);
let elhz1ON = eo('td','Cncff'+ii8BF0);
text( tag.id );
ec('td');
let eleD3qH = eo('td','Wprff'+ii8BF0);
let elAobFi = ev('img','rYlff'+ii8BF0,null,`src`,`${tag.image}`,`class`,`tagImg small-image`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
ec('td');
let elg01TR = eo('td','pG1ff'+ii8BF0);
text(tag.name);
ec('td');
let elDmzsh = eo('td','fJVff'+ii8BF0);
let cmpT5uD = this._lc('ckskJtOGL', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(tag)},ondelete:function(e) {let $el = this; component.deleteItem(tag.id, index)}},insideLoop:true,index:"" +ii8BF0});
ec('td');
ec('tr');
}
}});
let cnds5xh = component.openModal;
this.setState('stgr_v0', cnds5xh);
if (cnds5xh) { 
let cmpv5EV = this._lc('cjGw4LOG1', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let ellnpCz = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! ellnpCz.formHandler) {
                    window.cfrmdlr = ellnpCz.formHandler = new FormHandler(ellnpCz, component);
                } else {
                    window.cfrmdlr = ellnpCz.formHandler;
                }
            let elLPIog = eo('div',null,null,`class`,`form-group`);
let elPyKKK = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return ellnpCz.formHandler.addError(`name`, 'required', trans('validation.required'));}return ellnpCz.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Tag name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elPyKKK.value = fval(component.formObject.name);
let cndsdY0 = ellnpCz.formHandler.getError(`name`);
this.setState('sttq69k', cndsdY0);
if (cndsdY0) { 
let eltXH9H = eo('div','_2pf',null,`class`,`alert alert-danger`);
text(ellnpCz.formHandler.getError(`name`));
ec('div');
}ec('div');
let elTRT6B = eo('div',null,null,`class`,`form-group`);
let elduHRN = eo('label',null,null,`for`,`image`);
text(`Tag image`);
ec('label');
let cmp6Tao = this._lc('cxuM8L1Jz', {parent:component,parentTop:flkModal,props:{src:component.formObject.image},attrs:{src:`${component.formObject.image}`,name:`${(`image`).toInputName()}`,id:'image',required:''},state:'stgr_v0'});
ec('div');
let elfkxyA = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elqIRHc = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stgr_v0'});
}
                    this.isReadyToGo();
                }
        });