_Component({
                selector: 'admin-posts-page',
                c: 'AdminPostsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','answerStatus','tagsService','isValidForm','submitting'],
                children: {crel5qxzg:'gold-icon',cM8iwgMUU:'tag-badge',crHwXZDRe:'table-actions',cJyQNxNsj:'admin-table',cB61LaPnS:'flk-dropdown-list',cdCt__WXf:'flk-dropdown-list',ckVadFk4S:'flk-image-input',czrMvPq3n:'flk-modal'},
                render: function (component) {
                    let cmpC4aa = this._lc('cJyQNxNsj', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let post = component.items[index]; 
 let iiiziq = 'KWU9rvr' + index;
let elWRy80 = eo('tr','C77vt4lhbdi3' + index+iiiziq,null,`id`,`${ post.id }`);
let elyBytI = eo('td','YgCff'+iiiziq);
text( post.id );
ec('td');
let elefA4R = eo('td','hJQff'+iiiziq);
text(post.title);
ec('td');
let elA1BqX = eo('td','vrJff'+iiiziq);
let el0Eara = ev('img','ASOff'+iiiziq,null,`src`,`${post.image}`,`class`,`small-image`,`alt`,``);
ec('td');
let elR0Kl4 = eo('td','Q2hff'+iiiziq);
let cmplpxD = this._lc('crel5qxzg', {parent:component,parentTop:adminTable,props:{coins:post.prize},insideLoop:true,index:"" +iiiziq});
ec('td');
let elh0U_M = eo('td','Z3Qff'+iiiziq);
text(post.status);
ec('td');
let el61ncT = eo('td','h_Vff'+iiiziq);
for (let i in post.tags) {
let tag = post.tags[i]; 
 let iibV3Q = '_qxVDhj' + i;
let elkRR2x = eo('div','PaQKgbm4g2ZF' + i+iiiziq+iibV3Q,null,`class`,`m-b-1`);
let cmpjNgL = this._lc('cM8iwgMUU', {parent:component,parentTop:adminTable,props:{small:true,tag:tag},insideLoop:true,index:"" +iiiziq+iibV3Q});
ec('div');
}
ec('td');
let elwuraR = eo('td','2WKff'+iiiziq);
let cmpTyBi = this._lc('crHwXZDRe', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(post)},ondelete:function(e) {let $el = this; component.deleteItem(post.id, index)}},insideLoop:true,index:"" +iiiziq});
ec('td');
ec('tr');
}
}});
let cndC88F = component.openModal;
this.setState('stI3sNC', cndC88F);
if (cndC88F) { 
let cmpIfTX = this._lc('czrMvPq3n', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elhaKOI = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elhaKOI.formHandler) {
                    window.cfrmdlr = elhaKOI.formHandler = new FormHandler(elhaKOI, component);
                } else {
                    window.cfrmdlr = elhaKOI.formHandler;
                }
            let elT5JlT = eo('div',null,null,`class`,`form-group`);
let el8nNm1 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elhaKOI.formHandler.addError(`title`, 'required', trans('validation.required'));}return elhaKOI.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`post title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el8nNm1.value = fval(component.formObject.title);
let cnd2qSh = elhaKOI.formHandler.getError(`title`);
this.setState('stq_aM0', cnd2qSh);
if (cnd2qSh) { 
let elRuWoZ = eo('div','eecf',null,`class`,`alert alert-danger`);
text(elhaKOI.formHandler.getError(`title`));
ec('div');
}ec('div');
let el9xsWc = eo('div',null,null,`class`,`form-group`);
let ell_IGZ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elhaKOI.formHandler.addError(`slug`, 'required', trans('validation.required'));}return elhaKOI.formHandler.removeError(`slug`);}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`placeholder`,`${trans(`Url slug`)}`,`type`,`text`,`class`,`form-control`,`id`,`slug`);
ell_IGZ.value = fval(component.formObject.slug);
let cndPjkV = elhaKOI.formHandler.getError(`slug`);
this.setState('storbbJ', cndPjkV);
if (cndPjkV) { 
let elsxmGJ = eo('div','At0f',null,`class`,`alert alert-danger`);
text(elhaKOI.formHandler.getError(`slug`));
ec('div');
}ec('div');
let elSfTR9 = eo('div',null,null,`class`,`form-group`);
let elPmImU = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.content = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elhaKOI.formHandler.addError(`content`, 'required', trans('validation.required'));}return elhaKOI.formHandler.removeError(`content`);}]},`value`,`${fval(component.formObject.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Content`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`content`);
elPmImU.value = fval(component.formObject.content);
ec('textarea');
let cndxKto = elhaKOI.formHandler.getError(`content`);
this.setState('stU5OLE', cndxKto);
if (cndxKto) { 
let elEsg4n = eo('div','pVuf',null,`class`,`alert alert-danger`);
text(elhaKOI.formHandler.getError(`content`));
ec('div');
}ec('div');
let elhiGYF = eo('div',null,null,`class`,`form-group`);
let elUlXXB = eo('div',null,null,`class`,`row`);
let elinybi = eo('div',null,null,`class`,`col-md-6`);
let elu5HAQ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elhaKOI.formHandler.addError(`prize`, 'required', trans('validation.required'));}return elhaKOI.formHandler.removeError(`prize`);}]},`value`,`${fval(component.formObject.prize)}`,`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`prize`)}`,`class`,`form-control`,`type`,`number`,`id`,`prize`);
elu5HAQ.value = fval(component.formObject.prize);
let cndY7Ck = elhaKOI.formHandler.getError(`prize`);
this.setState('stANc1o', cndY7Ck);
if (cndY7Ck) { 
let elIBO3i = eo('div','uDlf',null,`class`,`alert alert-danger`);
text(elhaKOI.formHandler.getError(`prize`));
ec('div');
}ec('div');
let elU9Yxx = eo('div',null,null,`class`,`col-md-6`);
let cmpzkhg = this._lc('cB61LaPnS', {parent:component,parentTop:flkModal,props:{items:component.answerStatus,value:component.formObject.status},attrs:{name:`${(`status`).toInputName()}`,class:'form-control'},state:'stI3sNC'});
ec('div');
let ellOjne = eo('div',null,null,`class`,`col-md-6`);
let cmpjaQg = this._lc('cdCt__WXf', {parent:component,parentTop:flkModal,props:{service:component.tagsService,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.tags},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,placeholder:`${trans(`Tag`)}`,label:'Tags'},state:'stI3sNC'});
ec('div');
let elMwMMl = eo('div',null,null,`class`,`col-md-6`);
let elS2SC0 = eo('div',null,null,`class`,`form-group`);
let el6L_bk = eo('label',null,null,`for`,`image`);
text(`Image`);
ec('label');
let cmpxtMC = this._lc('ckVadFk4S', {parent:component,parentTop:flkModal,props:{src:component.formObject.image},attrs:{src:`${component.formObject.image}`,name:`${(`image`).toInputName()}`,id:'image'},state:'stI3sNC'});
ec('div');
ec('div');
ec('div');
ec('div');
let elmq0nu = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elFjY_Z = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stI3sNC'});
}
                    this.isReadyToGo();
                }
        });