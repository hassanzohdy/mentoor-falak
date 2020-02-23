_Component({
                selector: 'topics-page',
                c: 'TopicsPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','trackId','formObject','isValidForm','submitting'],
                children: {cfYCRlR8N:'table-actions',ctEYh1bFV:'admin-table',ckfmEoiPY:'flk-checkbox',cppRcstaZ:'flk-checkbox',cFbiy0xdj:'flk-modal'},
                render: function (component) {
                    let cmpx0Fs = this._lc('ctEYh1bFV', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let topic = component.items[index]; 
 let iiZlAh = 'QpvnQcG' + index;
let eljIPgw = eo('tr','zqtxgmqWjCf4' + index+iiZlAh,null,`id`,`${ topic.id }`);
let eloVE0d = eo('td','mRyff'+iiZlAh);
text(topic.id);
ec('td');
let el1Pn49 = eo('td','rA4ff'+iiZlAh);
text(topic.title);
ec('td');
let el0OTsG = eo('td','qoFff'+iiZlAh);
text(Boolean(topic.public));
ec('td');
let elD7f9f = eo('td','8w0ff'+iiZlAh);
text( Number(topic.prize).format() );
ec('td');
let elD77TF = eo('td','uKvff'+iiZlAh);
text(topic.sortOrder);
ec('td');
let elDNye6 = eo('td','AvOff'+iiZlAh);
let cmpR19z = this._lc('cfYCRlR8N', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(topic)},ondelete:function(e) {let $el = this; component.deleteItem(topic.id, index)}},insideLoop:true,index:"" +iiZlAh});
ec('td');
ec('tr');
}
}});
let cndzYhw = component.openModal;
this.setState('stMkT_o', cndzYhw);
if (cndzYhw) { 
let cmpxcO9 = this._lc('cFbiy0xdj', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elbai3u = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elbai3u.formHandler) {
                    window.cfrmdlr = elbai3u.formHandler = new FormHandler(elbai3u, component);
                } else {
                    window.cfrmdlr = elbai3u.formHandler;
                }
            let elpQgSL = ev('input',null,null, eventListeners, {oninput:[function(e) {component.trackId = this.value;}]},`value`,`${fval(component.trackId)}`,`name`,`${(`trackId`).toInputName()}`,`type`,`hidden`);
elpQgSL.value = fval(component.trackId);
let elQVjzJ = eo('div',null,null,`class`,`form-group`);
let el5wXsJ = eo('div',null,null,`class`,`form-group`);
el5wXsJ.cls = {'group-error': !!elbai3u.formHandler.getError(`title`) };

            for (let className in el5wXsJ.cls) {
                el5wXsJ.classList.toggle(className, el5wXsJ.cls[className]);
            }  
            let elRsM4D = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let eliKLwG = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elAVYL6 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbai3u.formHandler.addError(`title`, 'required', trans('validation.required'));}return elbai3u.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Track name`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elAVYL6.value = fval(component.formObject.title);
let cndJBtZ = elbai3u.formHandler.getError(`title`);
this.setState('stNbxjM', cndJBtZ);
if (cndJBtZ) { 
let el3IN5t = eo('div','7Tnf',null,`class`,`alert alert-danger`);
text(elbai3u.formHandler.getError(`title`));
ec('div');
}ec('div');
ec('div');
let elDfNKC = eo('div',null,null,`class`,`form-group`);
let elcluUc = eo('div',null,null,`class`,`form-group`);
elcluUc.cls = {'group-error': !!elbai3u.formHandler.getError(`slug`) };

            for (let className in elcluUc.cls) {
                elcluUc.classList.toggle(className, elcluUc.cls[className]);
            }  
            let elU9Kyc = eo('label',null,null,`for`,`slug`);
text(trans('Slug'));
let elfLLCH = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elcYyrq = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbai3u.formHandler.addError(`slug`, 'required', trans('validation.required'));}return elbai3u.formHandler.removeError(`slug`);}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`placeholder`,`${trans(`Url slug`)}`,`type`,`text`,`class`,`form-control`,`id`,`slug`);
elcYyrq.value = fval(component.formObject.slug);
let cndUmwY = elbai3u.formHandler.getError(`slug`);
this.setState('stixZJc', cndUmwY);
if (cndUmwY) { 
let eldKZz_ = eo('div','b1Pf',null,`class`,`alert alert-danger`);
text(elbai3u.formHandler.getError(`slug`));
ec('div');
}ec('div');
ec('div');
let elZq9ld = eo('div',null,null,`class`,`form-group`);
let elCT77u = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.shortDescription = this.value;}]},`value`,`${fval(component.formObject.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Write a short description`)}`,`class`,`form-control`,`rows`,`4`);
elCT77u.value = fval(component.formObject.shortDescription);
ec('textarea');
ec('div');
let el48bV8 = eo('div',null,null,`class`,`form-group`);
let ele0Te_ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.quest = this.value;}]},`value`,`${fval(component.formObject.quest)}`,`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest`)}`,`rows`,`6`,`error-msg-class`,`alert alert-danger`,`required`,``,`class`,`form-control`);
ele0Te_.value = fval(component.formObject.quest);
ec('textarea');
ec('div');
let elvRokP = eo('div',null,null,`class`,`form-group`);
let eloBbnL = eo('div',null,null,`class`,`row`);
let elZLF9M = eo('div',null,null,`class`,`col-md-4`);
let elHdWdd = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbai3u.formHandler.addError(`prize`, 'required', trans('validation.required'));}return elbai3u.formHandler.removeError(`prize`);}]},`value`,`${fval(component.formObject.prize)}`,`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`Prize`)}`,`class`,`form-control`,`type`,`number`,`id`,`prize`);
elHdWdd.value = fval(component.formObject.prize);
let cnd39P5 = elbai3u.formHandler.getError(`prize`);
this.setState('stpSYP0', cnd39P5);
if (cnd39P5) { 
let elMf6J8 = eo('div','LWOf',null,`class`,`alert alert-danger`);
text(elbai3u.formHandler.getError(`prize`));
ec('div');
}ec('div');
let elg6u9N = eo('div',null,null,`class`,`col-md-4`);
let elzXZf1 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elzXZf1.value = fval(component.formObject.sortOrder);
ec('div');
let ell7nXT = eo('div',null,null,`class`,`col-md-2`);
let cmpd0K0 = this._lc('ckfmEoiPY', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},events:{onchange:function(e) {let $el = this; component.formObject.display = ! component.formObject.display}},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'display topic',value:1},state:'stMkT_o'});
ec('div');
let el7WnEW = eo('div',null,null,`class`,`col-md-2`);
let cmpgfLY = this._lc('cppRcstaZ', {parent:component,parentTop:flkModal,props:{checked:component.formObject.public},events:{onchange:function(e) {let $el = this; component.formObject.public = ! component.formObject.public}},boolAttrs:{checked:component.formObject.public},attrs:{name:`${(`public`).toInputName()}`,label:'Public topic',value:1},state:'stMkT_o'});
ec('div');
ec('div');
ec('div');
let elvXl4S = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elXOG0f = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stMkT_o'});
}
                    this.isReadyToGo();
                }
        });