_Component({
                selector: 'topics-page',
                c: 'TopicsPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','trackId','formObject','isValidForm','submitting'],
                children: {cIh3L2cPc:'table-actions',cJSR2VSeG:'admin-table',cDIFuSYV5:'flk-checkbox',cbAYr247B:'flk-checkbox',coJFiJMx1:'flk-modal'},
                render: function (component) {
                    let cmpaa6U = this._lc('cJSR2VSeG', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let topic = component.items[index]; 
 let iij9a6 = 'MPkp2w1' + index;
let elKa1on = eo('tr','qIFF43IGSM18' + index+iij9a6,null,`id`,`${ topic.id }`);
let elzwq_l = eo('td','mpNff'+iij9a6);
text(topic.id);
ec('td');
let eloMyMP = eo('td','z1Xff'+iij9a6);
text(topic.title);
ec('td');
let elP_x7u = eo('td','E_Sff'+iij9a6);
text(Boolean(topic.public));
ec('td');
let els9hvm = eo('td','KqCff'+iij9a6);
text( Number(topic.prize).format() );
ec('td');
let elX1n8H = eo('td','hWaff'+iij9a6);
text(topic.sortOrder);
ec('td');
let elDkkTI = eo('td','FHLff'+iij9a6);
let cmpv__Q = this._lc('cIh3L2cPc', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(topic)},ondelete:function(e) {let $el = this; component.deleteItem(topic.id, index)}},insideLoop:true,index:"" +iij9a6});
ec('td');
ec('tr');
}
}});
let cndCRqJ = component.openModal;
this.setState('stgVCrh', cndCRqJ);
if (cndCRqJ) { 
let cmpkylq = this._lc('coJFiJMx1', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let el7Gp2j = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el7Gp2j.formHandler) {
                    window.cfrmdlr = el7Gp2j.formHandler = new FormHandler(el7Gp2j, component);
                } else {
                    window.cfrmdlr = el7Gp2j.formHandler;
                }
            let el1AA9b = ev('input',null,null, eventListeners, {oninput:[function(e) {component.trackId = this.value;}]},`value`,`${fval(component.trackId)}`,`name`,`${(`trackId`).toInputName()}`,`type`,`hidden`);
el1AA9b.value = fval(component.trackId);
let eljskmm = eo('div',null,null,`class`,`form-group`);
let elq6sye = eo('div',null,null,`class`,`form-group`);
elq6sye.cls = {'group-error': !!el7Gp2j.formHandler.getError(`title`) };

            for (let className in elq6sye.cls) {
                elq6sye.classList.toggle(className, elq6sye.cls[className]);
            }  
            let elpq4E0 = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let elSUxBs = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elGHFSg = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7Gp2j.formHandler.addError(`title`, 'required', trans('validation.required'));}return el7Gp2j.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Track name`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elGHFSg.value = fval(component.formObject.title);
let cnd2NEm = el7Gp2j.formHandler.getError(`title`);
this.setState('stq3VVg', cnd2NEm);
if (cnd2NEm) { 
let elmuK_l = eo('div','fFVf',null,`class`,`alert alert-danger`);
text(el7Gp2j.formHandler.getError(`title`));
ec('div');
}ec('div');
ec('div');
let elOhvgj = eo('div',null,null,`class`,`form-group`);
let elfH_Lz = eo('div',null,null,`class`,`form-group`);
elfH_Lz.cls = {'group-error': !!el7Gp2j.formHandler.getError(`slug`) };

            for (let className in elfH_Lz.cls) {
                elfH_Lz.classList.toggle(className, elfH_Lz.cls[className]);
            }  
            let elmSuCk = eo('label',null,null,`for`,`slug`);
text(trans('Slug'));
let elzzdyk = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eleNzCZ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7Gp2j.formHandler.addError(`slug`, 'required', trans('validation.required'));}return el7Gp2j.formHandler.removeError(`slug`);}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`placeholder`,`${trans(`Url slug`)}`,`type`,`text`,`class`,`form-control`,`id`,`slug`);
eleNzCZ.value = fval(component.formObject.slug);
let cndWJC_ = el7Gp2j.formHandler.getError(`slug`);
this.setState('stX8eEe', cndWJC_);
if (cndWJC_) { 
let eljuAiF = eo('div','NZmf',null,`class`,`alert alert-danger`);
text(el7Gp2j.formHandler.getError(`slug`));
ec('div');
}ec('div');
ec('div');
let elPAWUW = eo('div',null,null,`class`,`form-group`);
let elh54Ul = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.shortDescription = this.value;}]},`value`,`${fval(component.formObject.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Write a short description`)}`,`class`,`form-control`,`rows`,`4`);
elh54Ul.value = fval(component.formObject.shortDescription);
ec('textarea');
ec('div');
let elUN4Fw = eo('div',null,null,`class`,`form-group`);
let el2d0WK = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.quest = this.value;}]},`value`,`${fval(component.formObject.quest)}`,`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest`)}`,`rows`,`6`,`error-msg-class`,`alert alert-danger`,`required`,``,`class`,`form-control`);
el2d0WK.value = fval(component.formObject.quest);
ec('textarea');
ec('div');
let el4jpEy = eo('div',null,null,`class`,`form-group`);
let elS2V_u = eo('div',null,null,`class`,`row`);
let el0jbSU = eo('div',null,null,`class`,`col-md-4`);
let elo1Rcl = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7Gp2j.formHandler.addError(`prize`, 'required', trans('validation.required'));}return el7Gp2j.formHandler.removeError(`prize`);}]},`value`,`${fval(component.formObject.prize)}`,`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`Prize`)}`,`class`,`form-control`,`type`,`number`,`id`,`prize`);
elo1Rcl.value = fval(component.formObject.prize);
let cndJj3V = el7Gp2j.formHandler.getError(`prize`);
this.setState('stFMp49', cndJj3V);
if (cndJj3V) { 
let el9UJu9 = eo('div','h8Af',null,`class`,`alert alert-danger`);
text(el7Gp2j.formHandler.getError(`prize`));
ec('div');
}ec('div');
let el8Xepr = eo('div',null,null,`class`,`col-md-4`);
let elxD5BG = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elxD5BG.value = fval(component.formObject.sortOrder);
ec('div');
let els9s7g = eo('div',null,null,`class`,`col-md-2`);
let cmpkJfA = this._lc('cDIFuSYV5', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},events:{onchange:function(e) {let $el = this; component.formObject.display = ! component.formObject.display}},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'display topic',value:1},state:'stgVCrh'});
ec('div');
let el6jdZd = eo('div',null,null,`class`,`col-md-2`);
let cmpGVux = this._lc('cbAYr247B', {parent:component,parentTop:flkModal,props:{checked:component.formObject.public},events:{onchange:function(e) {let $el = this; component.formObject.public = ! component.formObject.public}},boolAttrs:{checked:component.formObject.public},attrs:{name:`${(`public`).toInputName()}`,label:'Public topic',value:1},state:'stgVCrh'});
ec('div');
ec('div');
ec('div');
let elphG39 = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elaVxIl = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stgVCrh'});
}
                    this.isReadyToGo();
                }
        });