_Component({
                selector: 'topics-page',
                c: 'TopicsPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','trackId','formObject','isValidForm','submitting'],
                children: {cGBDFFNT7:'table-actions',cR9LCykj_:'admin-table',cTVHSH6fx:'flk-checkbox',cYYWTpG1E:'flk-checkbox',cvyBAaul5:'flk-modal'},
                render: function (component) {
                    let cmpA5iD = this._lc('cR9LCykj_', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let topic = component.items[index]; 
 let iioIco = 'teXrhNe' + index;
let elbxJ9Y = eo('tr','LkuIGTDhpjNl' + index+iioIco,null,`id`,`${ topic.id }`);
let elJTWJ8 = eo('td','Ki8ff'+iioIco);
text(topic.id);
ec('td');
let elF0ybk = eo('td','6g3ff'+iioIco);
text(topic.title);
ec('td');
let elmlfS4 = eo('td','S7Jff'+iioIco);
text(Boolean(topic.public));
ec('td');
let elArbrK = eo('td','vqPff'+iioIco);
text( Number(topic.prize).format() );
ec('td');
let elCu_bG = eo('td','kdEff'+iioIco);
text(topic.sortOrder);
ec('td');
let elMcWYC = eo('td','h4uff'+iioIco);
let cmpKtEe = this._lc('cGBDFFNT7', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(topic)},ondelete:function(e) {let $el = this; component.deleteItem(topic.id, index)}},insideLoop:true,index:"" +iioIco});
ec('td');
ec('tr');
}
}});
let cndOm6N = component.openModal;
this.setState('stTxKRK', cndOm6N);
if (cndOm6N) { 
let cmp7KnZ = this._lc('cvyBAaul5', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elG2hVK = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elG2hVK.formHandler) {
                    window.cfrmdlr = elG2hVK.formHandler = new FormHandler(elG2hVK, component);
                } else {
                    window.cfrmdlr = elG2hVK.formHandler;
                }
            let elMJHCf = ev('input',null,null, eventListeners, {oninput:[function(e) {component.trackId = this.value;}]},`value`,`${fval(component.trackId)}`,`name`,`${(`trackId`).toInputName()}`,`type`,`hidden`);
elMJHCf.value = fval(component.trackId);
let eljb_S9 = eo('div',null,null,`class`,`form-group`);
let eluyn_i = eo('div',null,null,`class`,`form-group`);
eluyn_i.cls = {'group-error': !!elG2hVK.formHandler.getError(`title`) };

            for (let className in eluyn_i.cls) {
                eluyn_i.classList.toggle(className, eluyn_i.cls[className]);
            }  
            let eloODuJ = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let elci8df = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elgBz4v = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elG2hVK.formHandler.addError(`title`, 'required', trans('validation.required'));}return elG2hVK.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Track name`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elgBz4v.value = fval(component.formObject.title);
let cnd6GUJ = elG2hVK.formHandler.getError(`title`);
this.setState('stysfW3', cnd6GUJ);
if (cnd6GUJ) { 
let elAenth = eo('div','nUXf',null,`class`,`alert alert-danger`);
text(elG2hVK.formHandler.getError(`title`));
ec('div');
}ec('div');
ec('div');
let el0W8Qr = eo('div',null,null,`class`,`form-group`);
let elTwHVT = eo('div',null,null,`class`,`form-group`);
elTwHVT.cls = {'group-error': !!elG2hVK.formHandler.getError(`slug`) };

            for (let className in elTwHVT.cls) {
                elTwHVT.classList.toggle(className, elTwHVT.cls[className]);
            }  
            let elqV6HR = eo('label',null,null,`for`,`slug`);
text(trans('Slug'));
let elHDzMk = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elDoja_ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elG2hVK.formHandler.addError(`slug`, 'required', trans('validation.required'));}return elG2hVK.formHandler.removeError(`slug`);}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`placeholder`,`${trans(`Url slug`)}`,`type`,`text`,`class`,`form-control`,`id`,`slug`);
elDoja_.value = fval(component.formObject.slug);
let cnd9lWz = elG2hVK.formHandler.getError(`slug`);
this.setState('stxTba5', cnd9lWz);
if (cnd9lWz) { 
let elppEV2 = eo('div','yJ5f',null,`class`,`alert alert-danger`);
text(elG2hVK.formHandler.getError(`slug`));
ec('div');
}ec('div');
ec('div');
let elmH6hS = eo('div',null,null,`class`,`form-group`);
let elgVDLS = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.shortDescription = this.value;}]},`value`,`${fval(component.formObject.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Write a short description`)}`,`class`,`form-control`,`rows`,`4`);
elgVDLS.value = fval(component.formObject.shortDescription);
ec('textarea');
ec('div');
let elOy5rO = eo('div',null,null,`class`,`form-group`);
let elDLMiV = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.quest = this.value;}]},`value`,`${fval(component.formObject.quest)}`,`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest`)}`,`rows`,`6`,`error-msg-class`,`alert alert-danger`,`required`,``,`class`,`form-control`);
elDLMiV.value = fval(component.formObject.quest);
ec('textarea');
ec('div');
let el_vsZI = eo('div',null,null,`class`,`form-group`);
let el96XPv = eo('div',null,null,`class`,`row`);
let elfl4gV = eo('div',null,null,`class`,`col-md-4`);
let elcNo49 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elG2hVK.formHandler.addError(`prize`, 'required', trans('validation.required'));}return elG2hVK.formHandler.removeError(`prize`);}]},`value`,`${fval(component.formObject.prize)}`,`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`Prize`)}`,`class`,`form-control`,`type`,`number`,`id`,`prize`);
elcNo49.value = fval(component.formObject.prize);
let cndoavs = elG2hVK.formHandler.getError(`prize`);
this.setState('stJaNgu', cndoavs);
if (cndoavs) { 
let elBumAW = eo('div','AYxf',null,`class`,`alert alert-danger`);
text(elG2hVK.formHandler.getError(`prize`));
ec('div');
}ec('div');
let elHGbpp = eo('div',null,null,`class`,`col-md-4`);
let elaA96Y = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elaA96Y.value = fval(component.formObject.sortOrder);
ec('div');
let elkvv0y = eo('div',null,null,`class`,`col-md-2`);
let cmpjDRz = this._lc('cTVHSH6fx', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},events:{onchange:function(e) {let $el = this; component.formObject.display = ! component.formObject.display}},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'display topic',value:1},state:'stTxKRK'});
ec('div');
let elrifXR = eo('div',null,null,`class`,`col-md-2`);
let cmpRaVt = this._lc('cYYWTpG1E', {parent:component,parentTop:flkModal,props:{checked:component.formObject.public},events:{onchange:function(e) {let $el = this; component.formObject.public = ! component.formObject.public}},boolAttrs:{checked:component.formObject.public},attrs:{name:`${(`public`).toInputName()}`,label:'Public topic',value:1},state:'stTxKRK'});
ec('div');
ec('div');
ec('div');
let elTAyZ7 = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elIZ9Qb = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stTxKRK'});
}
                    this.isReadyToGo();
                }
        });