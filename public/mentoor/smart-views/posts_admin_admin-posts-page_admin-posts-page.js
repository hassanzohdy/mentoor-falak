_Component({
                selector: 'admin-posts-page',
                c: 'AdminPostsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','answerStatus','tagsService','isValidForm','submitting'],
                children: {catAUfLoU:'gold-icon',cVFSFOj2A:'tag-badge',cwmE2loJ7:'table-actions',clyu8grzq:'admin-table',cG8K7tVMm:'flk-dropdown-list',cO9DG9zqd:'flk-dropdown-list',c1rKlOzPs:'flk-image-input',cIwJ4T3mQ:'flk-modal'},
                render: function (component) {
                    let cmp7jpc = this._lc('clyu8grzq', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let post = component.items[index]; 
 let iiXfMw = 'JXbCwDm' + index;
let el6mJwC = eo('tr','d8J4uLSj_kAj' + index+iiXfMw,null,`id`,`${ post.id }`);
let eldLNMz = eo('td','JUIff'+iiXfMw);
text( post.id );
ec('td');
let elyb2__ = eo('td','iSFff'+iiXfMw);
text(post.title);
ec('td');
let elzSAF_ = eo('td','lhyff'+iiXfMw);
let eljoatD = ev('img','suEff'+iiXfMw,null,`src`,`${post.image}`,`class`,`small-image`,`alt`,``);
ec('td');
let elQ1CV0 = eo('td','THLff'+iiXfMw);
let cmpDpcc = this._lc('catAUfLoU', {parent:component,parentTop:adminTable,props:{coins:post.prize},insideLoop:true,index:"" +iiXfMw});
ec('td');
let elF5kk0 = eo('td','dB8ff'+iiXfMw);
text(post.status);
ec('td');
let elroUPO = eo('td','sPQff'+iiXfMw);
for (let i in post.tags) {
let tag = post.tags[i]; 
 let iimeRB = 'Kzsq5g5' + i;
let elQ7sV_ = eo('div','AMieDVabyjQG' + i+iiXfMw+iimeRB,null,`class`,`m-b-1`);
let cmpN0tK = this._lc('cVFSFOj2A', {parent:component,parentTop:adminTable,props:{small:true,tag:tag},insideLoop:true,index:"" +iiXfMw+iimeRB});
ec('div');
}
ec('td');
let elk_dLG = eo('td','bRyff'+iiXfMw);
let cmpaiFW = this._lc('cwmE2loJ7', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(post)},ondelete:function(e) {let $el = this; component.deleteItem(post.id, index)}},insideLoop:true,index:"" +iiXfMw});
ec('td');
ec('tr');
}
}});
let cndhnNw = component.openModal;
this.setState('stKycpb', cndhnNw);
if (cndhnNw) { 
let cmpQMjj = this._lc('cIwJ4T3mQ', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elqbmaa = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elqbmaa.formHandler) {
                    window.cfrmdlr = elqbmaa.formHandler = new FormHandler(elqbmaa, component);
                } else {
                    window.cfrmdlr = elqbmaa.formHandler;
                }
            let elmZpd6 = eo('div',null,null,`class`,`form-group`);
let elq99GT = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqbmaa.formHandler.addError(`title`, 'required', trans('validation.required'));}return elqbmaa.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`post title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elq99GT.value = fval(component.formObject.title);
let cndlwbR = elqbmaa.formHandler.getError(`title`);
this.setState('stHqCBA', cndlwbR);
if (cndlwbR) { 
let elLAG9g = eo('div','PJwf',null,`class`,`alert alert-danger`);
text(elqbmaa.formHandler.getError(`title`));
ec('div');
}ec('div');
let el3EGiA = eo('div',null,null,`class`,`form-group`);
let elo7pu3 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqbmaa.formHandler.addError(`slug`, 'required', trans('validation.required'));}return elqbmaa.formHandler.removeError(`slug`);}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`placeholder`,`${trans(`Url slug`)}`,`type`,`text`,`class`,`form-control`,`id`,`slug`);
elo7pu3.value = fval(component.formObject.slug);
let cndLa8s = elqbmaa.formHandler.getError(`slug`);
this.setState('staqmUw', cndLa8s);
if (cndLa8s) { 
let elFL2fR = eo('div','UPKf',null,`class`,`alert alert-danger`);
text(elqbmaa.formHandler.getError(`slug`));
ec('div');
}ec('div');
let el2rdL0 = eo('div',null,null,`class`,`form-group`);
let elfpMmS = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.content = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqbmaa.formHandler.addError(`content`, 'required', trans('validation.required'));}return elqbmaa.formHandler.removeError(`content`);}]},`value`,`${fval(component.formObject.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Content`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`content`);
elfpMmS.value = fval(component.formObject.content);
ec('textarea');
let cndrQD0 = elqbmaa.formHandler.getError(`content`);
this.setState('st8U_Ip', cndrQD0);
if (cndrQD0) { 
let el11IL0 = eo('div','r5of',null,`class`,`alert alert-danger`);
text(elqbmaa.formHandler.getError(`content`));
ec('div');
}ec('div');
let elfPWQg = eo('div',null,null,`class`,`form-group`);
let elvSM7B = eo('div',null,null,`class`,`row`);
let elu6sWl = eo('div',null,null,`class`,`col-md-6`);
let elnTCW_ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqbmaa.formHandler.addError(`prize`, 'required', trans('validation.required'));}return elqbmaa.formHandler.removeError(`prize`);}]},`value`,`${fval(component.formObject.prize)}`,`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`prize`)}`,`class`,`form-control`,`type`,`number`,`id`,`prize`);
elnTCW_.value = fval(component.formObject.prize);
let cnd2NKM = elqbmaa.formHandler.getError(`prize`);
this.setState('st3cIzo', cnd2NKM);
if (cnd2NKM) { 
let elnnXso = eo('div','jcGf',null,`class`,`alert alert-danger`);
text(elqbmaa.formHandler.getError(`prize`));
ec('div');
}ec('div');
let elZNn5q = eo('div',null,null,`class`,`col-md-6`);
let cmpL1KS = this._lc('cG8K7tVMm', {parent:component,parentTop:flkModal,props:{items:component.answerStatus,value:component.formObject.status},attrs:{name:`${(`status`).toInputName()}`,class:'form-control'},state:'stKycpb'});
ec('div');
let elIRm84 = eo('div',null,null,`class`,`col-md-6`);
let cmpfiYG = this._lc('cO9DG9zqd', {parent:component,parentTop:flkModal,props:{service:component.tagsService,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.tags},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,placeholder:`${trans(`Tag`)}`,label:'Tags'},state:'stKycpb'});
ec('div');
let elCFAmG = eo('div',null,null,`class`,`col-md-6`);
let elr3eIL = eo('div',null,null,`class`,`form-group`);
let ely2rtS = eo('label',null,null,`for`,`image`);
text(`Image`);
ec('label');
let cmpwjZs = this._lc('c1rKlOzPs', {parent:component,parentTop:flkModal,props:{src:component.formObject.image},attrs:{src:`${component.formObject.image}`,name:`${(`image`).toInputName()}`,id:'image'},state:'stKycpb'});
ec('div');
ec('div');
ec('div');
ec('div');
let elC7Vgz = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elzxQGh = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stKycpb'});
}
                    this.isReadyToGo();
                }
        });