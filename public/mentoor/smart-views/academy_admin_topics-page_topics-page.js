_Component({
                selector: 'topics-page',
                c: 'TopicsPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','trackId','formObject','isValidForm','submitting'],
                children: {cCP6L7TpP:'table-actions',c_zNk7QB4:'admin-table',cLXPrKG56:'flk-checkbox',cUBd8JUZ_:'flk-checkbox',cflusJhsr:'flk-modal'},
                render: function (component) {
                    let cmpm_nd = this._lc('c_zNk7QB4', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let topic = component.items[index]; 
 let iiKVYT = 'J66E_36' + index;
let el0AkQG = eo('tr','fjiFya2n3rjw' + index+iiKVYT,null,`id`,`${ topic.id }`);
let elNDeXa = eo('td','hQIff'+iiKVYT);
text(topic.id);
ec('td');
let elL_0zZ = eo('td','rQzff'+iiKVYT);
text(topic.title);
ec('td');
let elVx7JZ = eo('td','cTYff'+iiKVYT);
text(Boolean(topic.public));
ec('td');
let elRsArk = eo('td','La0ff'+iiKVYT);
text( Number(topic.prize).format() );
ec('td');
let elllHvH = eo('td','8V3ff'+iiKVYT);
text(topic.sortOrder);
ec('td');
let elzZV2b = eo('td','jY5ff'+iiKVYT);
let cmpOdLO = this._lc('cCP6L7TpP', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(topic)},ondelete:function(e) {let $el = this; component.deleteItem(topic.id, index)}},insideLoop:true,index:"" +iiKVYT});
ec('td');
ec('tr');
}
}});
let cndQReR = component.openModal;
this.setState('stCVtqu', cndQReR);
if (cndQReR) { 
let cmpdCUm = this._lc('cflusJhsr', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elUnn8l = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elUnn8l.formHandler) {
                    window.cfrmdlr = elUnn8l.formHandler = new FormHandler(elUnn8l, component);
                } else {
                    window.cfrmdlr = elUnn8l.formHandler;
                }
            let ele0EDz = ev('input',null,null, eventListeners, {oninput:[function(e) {component.trackId = this.value;}]},`value`,`${fval(component.trackId)}`,`name`,`${(`trackId`).toInputName()}`,`type`,`hidden`);
ele0EDz.value = fval(component.trackId);
let elmRPPd = eo('div',null,null,`class`,`form-group`);
let eleKswV = eo('div',null,null,`class`,`form-group`);
eleKswV.cls = {'group-error': !!elUnn8l.formHandler.getError(`title`) };

            for (let className in eleKswV.cls) {
                eleKswV.classList.toggle(className, eleKswV.cls[className]);
            }  
            let elCUHdI = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let elmWzSr = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elKZqTb = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUnn8l.formHandler.addError(`title`, 'required', trans('validation.required'));}return elUnn8l.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Track name`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elKZqTb.value = fval(component.formObject.title);
let cndeOF3 = elUnn8l.formHandler.getError(`title`);
this.setState('struMtb', cndeOF3);
if (cndeOF3) { 
let elxBaLk = eo('div','zngf',null,`class`,`alert alert-danger`);
text(elUnn8l.formHandler.getError(`title`));
ec('div');
}ec('div');
ec('div');
let elNQsFV = eo('div',null,null,`class`,`form-group`);
let eltuT44 = eo('div',null,null,`class`,`form-group`);
eltuT44.cls = {'group-error': !!elUnn8l.formHandler.getError(`slug`) };

            for (let className in eltuT44.cls) {
                eltuT44.classList.toggle(className, eltuT44.cls[className]);
            }  
            let elkVeCE = eo('label',null,null,`for`,`slug`);
text(trans('Slug'));
let elVsUpD = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elhi9E5 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUnn8l.formHandler.addError(`slug`, 'required', trans('validation.required'));}return elUnn8l.formHandler.removeError(`slug`);}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`placeholder`,`${trans(`Url slug`)}`,`type`,`text`,`class`,`form-control`,`id`,`slug`);
elhi9E5.value = fval(component.formObject.slug);
let cnd3HFe = elUnn8l.formHandler.getError(`slug`);
this.setState('stOfc1Q', cnd3HFe);
if (cnd3HFe) { 
let elTlWX9 = eo('div','CW7f',null,`class`,`alert alert-danger`);
text(elUnn8l.formHandler.getError(`slug`));
ec('div');
}ec('div');
ec('div');
let eltR7dr = eo('div',null,null,`class`,`form-group`);
let elvUJ_Y = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.shortDescription = this.value;}]},`value`,`${fval(component.formObject.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Write a short description`)}`,`class`,`form-control`,`rows`,`4`);
elvUJ_Y.value = fval(component.formObject.shortDescription);
ec('textarea');
ec('div');
let eluwubw = eo('div',null,null,`class`,`form-group`);
let elmm_X2 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.quest = this.value;}]},`value`,`${fval(component.formObject.quest)}`,`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest`)}`,`rows`,`6`,`error-msg-class`,`alert alert-danger`,`required`,``,`class`,`form-control`);
elmm_X2.value = fval(component.formObject.quest);
ec('textarea');
ec('div');
let elNqrfM = eo('div',null,null,`class`,`form-group`);
let el840QB = eo('div',null,null,`class`,`row`);
let elX4Mjt = eo('div',null,null,`class`,`col-md-4`);
let eldnoBl = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUnn8l.formHandler.addError(`prize`, 'required', trans('validation.required'));}return elUnn8l.formHandler.removeError(`prize`);}]},`value`,`${fval(component.formObject.prize)}`,`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`Prize`)}`,`class`,`form-control`,`type`,`number`,`id`,`prize`);
eldnoBl.value = fval(component.formObject.prize);
let cndulGo = elUnn8l.formHandler.getError(`prize`);
this.setState('stlBnhA', cndulGo);
if (cndulGo) { 
let elhfPgv = eo('div','zUbf',null,`class`,`alert alert-danger`);
text(elUnn8l.formHandler.getError(`prize`));
ec('div');
}ec('div');
let el4VvBt = eo('div',null,null,`class`,`col-md-4`);
let elNFb0m = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elNFb0m.value = fval(component.formObject.sortOrder);
ec('div');
let elD9ajj = eo('div',null,null,`class`,`col-md-2`);
let cmp2Ooz = this._lc('cLXPrKG56', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},events:{onchange:function(e) {let $el = this; component.formObject.display = ! component.formObject.display}},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'display topic',value:1},state:'stCVtqu'});
ec('div');
let elAuSt8 = eo('div',null,null,`class`,`col-md-2`);
let cmpUCHb = this._lc('cUBd8JUZ_', {parent:component,parentTop:flkModal,props:{checked:component.formObject.public},events:{onchange:function(e) {let $el = this; component.formObject.public = ! component.formObject.public}},boolAttrs:{checked:component.formObject.public},attrs:{name:`${(`public`).toInputName()}`,label:'Public topic',value:1},state:'stCVtqu'});
ec('div');
ec('div');
ec('div');
let elwos0M = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elg2jlp = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stCVtqu'});
}
                    this.isReadyToGo();
                }
        });