_Component({
                selector: 'admin-posts-page',
                c: 'AdminPostsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','answerStatus','tagsService','isValidForm','submitting'],
                children: {cTHkDqA3O:'gold-icon',cH8uQwqqj:'tag-badge',c9x29p_em:'table-actions',ch8yUh6l1:'admin-table',czeebxvbs:'flk-dropdown-list',ct29_sjnV:'flk-dropdown-list',crdhdgbSL:'flk-image-input',cve7ZF56y:'flk-modal'},
                render: function (component) {
                    let cmp83nH = this._lc('ch8yUh6l1', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let post = component.items[index]; 
 let iiPlQL = 'OsGx7GB' + index;
let elCRuy0 = eo('tr','Thlo2Jx_8NZC' + index+iiPlQL,null,`id`,`${ post.id }`);
let elLPLkG = eo('td','Thfff'+iiPlQL);
text( post.id );
ec('td');
let el1rYwW = eo('td','xJ6ff'+iiPlQL);
text(post.title);
ec('td');
let elaLAL6 = eo('td','jIBff'+iiPlQL);
let el_6Xu3 = ev('img','MpKff'+iiPlQL,null,`src`,`${post.image}`,`class`,`small-image`,`alt`,``);
ec('td');
let elGn_U7 = eo('td','Z8Zff'+iiPlQL);
let cmprYBD = this._lc('cTHkDqA3O', {parent:component,parentTop:adminTable,props:{coins:post.prize},insideLoop:true,index:"" +iiPlQL});
ec('td');
let elCXTvb = eo('td','q52ff'+iiPlQL);
text(post.status);
ec('td');
let elnNpAw = eo('td','vGNff'+iiPlQL);
for (let i in post.tags) {
let tag = post.tags[i]; 
 let iiRTwd = 'oLXvFjC' + i;
let elVYZ9L = eo('div','xX7oZImk8OJK' + i+iiPlQL+iiRTwd,null,`class`,`m-b-1`);
let cmpmggj = this._lc('cH8uQwqqj', {parent:component,parentTop:adminTable,props:{small:true,tag:tag},insideLoop:true,index:"" +iiPlQL+iiRTwd});
ec('div');
}
ec('td');
let elT7DDT = eo('td','eYEff'+iiPlQL);
let cmplZGv = this._lc('c9x29p_em', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(post)},ondelete:function(e) {let $el = this; component.deleteItem(post.id, index)}},insideLoop:true,index:"" +iiPlQL});
ec('td');
ec('tr');
}
}});
let cndeoJd = component.openModal;
this.setState('stRal2n', cndeoJd);
if (cndeoJd) { 
let cmp9q0g = this._lc('cve7ZF56y', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elyHCqb = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elyHCqb.formHandler) {
                    window.cfrmdlr = elyHCqb.formHandler = new FormHandler(elyHCqb, component);
                } else {
                    window.cfrmdlr = elyHCqb.formHandler;
                }
            let elH0kl6 = eo('div',null,null,`class`,`form-group`);
let el2Hant = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elyHCqb.formHandler.addError(`title`, 'required', trans('validation.required'));}return elyHCqb.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`post title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el2Hant.value = fval(component.formObject.title);
let cndOtdK = elyHCqb.formHandler.getError(`title`);
this.setState('stjudC5', cndOtdK);
if (cndOtdK) { 
let elmjzlP = eo('div','J7pf',null,`class`,`alert alert-danger`);
text(elyHCqb.formHandler.getError(`title`));
ec('div');
}ec('div');
let elCGZF1 = eo('div',null,null,`class`,`form-group`);
let elUbSSp = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elyHCqb.formHandler.addError(`slug`, 'required', trans('validation.required'));}return elyHCqb.formHandler.removeError(`slug`);}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`placeholder`,`${trans(`Url slug`)}`,`type`,`text`,`class`,`form-control`,`id`,`slug`);
elUbSSp.value = fval(component.formObject.slug);
let cndUk4d = elyHCqb.formHandler.getError(`slug`);
this.setState('sto6KAG', cndUk4d);
if (cndUk4d) { 
let elgbLqs = eo('div','B7Ff',null,`class`,`alert alert-danger`);
text(elyHCqb.formHandler.getError(`slug`));
ec('div');
}ec('div');
let elwSfbF = eo('div',null,null,`class`,`form-group`);
let elrMXvK = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.content = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elyHCqb.formHandler.addError(`content`, 'required', trans('validation.required'));}return elyHCqb.formHandler.removeError(`content`);}]},`value`,`${fval(component.formObject.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Content`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`content`);
elrMXvK.value = fval(component.formObject.content);
ec('textarea');
let cnd_YUL = elyHCqb.formHandler.getError(`content`);
this.setState('stmTubB', cnd_YUL);
if (cnd_YUL) { 
let elbbR7u = eo('div','5Ahf',null,`class`,`alert alert-danger`);
text(elyHCqb.formHandler.getError(`content`));
ec('div');
}ec('div');
let elaKWxi = eo('div',null,null,`class`,`form-group`);
let elWr8ob = eo('div',null,null,`class`,`row`);
let elGXbBN = eo('div',null,null,`class`,`col-md-6`);
let el5cz4T = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elyHCqb.formHandler.addError(`prize`, 'required', trans('validation.required'));}return elyHCqb.formHandler.removeError(`prize`);}]},`value`,`${fval(component.formObject.prize)}`,`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`prize`)}`,`class`,`form-control`,`type`,`number`,`id`,`prize`);
el5cz4T.value = fval(component.formObject.prize);
let cndjTEv = elyHCqb.formHandler.getError(`prize`);
this.setState('stmca3Y', cndjTEv);
if (cndjTEv) { 
let elxSt_E = eo('div','COLf',null,`class`,`alert alert-danger`);
text(elyHCqb.formHandler.getError(`prize`));
ec('div');
}ec('div');
let elaAl02 = eo('div',null,null,`class`,`col-md-6`);
let cmpjOvW = this._lc('czeebxvbs', {parent:component,parentTop:flkModal,props:{items:component.answerStatus,value:component.formObject.status},attrs:{name:`${(`status`).toInputName()}`,class:'form-control'},state:'stRal2n'});
ec('div');
let el6prOG = eo('div',null,null,`class`,`col-md-6`);
let cmp25HT = this._lc('ct29_sjnV', {parent:component,parentTop:flkModal,props:{service:component.tagsService,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.tags},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,placeholder:`${trans(`Tag`)}`,label:'Tags'},state:'stRal2n'});
ec('div');
let elluO3R = eo('div',null,null,`class`,`col-md-6`);
let elDxhLt = eo('div',null,null,`class`,`form-group`);
let el3HXSK = eo('label',null,null,`for`,`image`);
text(`Image`);
ec('label');
let cmpGojF = this._lc('crdhdgbSL', {parent:component,parentTop:flkModal,props:{src:component.formObject.image},attrs:{src:`${component.formObject.image}`,name:`${(`image`).toInputName()}`,id:'image'},state:'stRal2n'});
ec('div');
ec('div');
ec('div');
ec('div');
let ellKosf = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elZyY7Y = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stRal2n'});
}
                    this.isReadyToGo();
                }
        });