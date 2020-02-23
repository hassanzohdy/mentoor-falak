_Component({
                selector: 'admin-posts-page',
                c: 'AdminPostsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','answerStatus','tagsService','isValidForm','submitting'],
                children: {cahBwMVtv:'gold-icon',cuv5fx5HW:'tag-badge',c0saE_ZGM:'table-actions',cijOE_uGD:'admin-table',cRcA8L9Jt:'flk-dropdown-list',ccyz1h7n8:'flk-dropdown-list',ceZ8UYXcC:'flk-image-input',cEtLYwNqC:'flk-modal'},
                render: function (component) {
                    let cmpVf1Y = this._lc('cijOE_uGD', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let post = component.items[index]; 
 let iidhOR = 'u8j8BxL' + index;
let elaTIeD = eo('tr','4N9EnIs2dYQE' + index+iidhOR,null,`id`,`${ post.id }`);
let elZE6cg = eo('td','kloff'+iidhOR);
text( post.id );
ec('td');
let elJ5VCy = eo('td','aTnff'+iidhOR);
text(post.title);
ec('td');
let elw64Gd = eo('td','S6Hff'+iidhOR);
let elnjWOH = ev('img','msgff'+iidhOR,null,`src`,`${post.image}`,`class`,`small-image`,`alt`,``);
ec('td');
let el92KUx = eo('td','TAWff'+iidhOR);
let cmpuB5q = this._lc('cahBwMVtv', {parent:component,parentTop:adminTable,props:{coins:post.prize},insideLoop:true,index:"" +iidhOR});
ec('td');
let el3y66G = eo('td','1m3ff'+iidhOR);
text(post.status);
ec('td');
let elWVU58 = eo('td','37Rff'+iidhOR);
for (let i in post.tags) {
let tag = post.tags[i]; 
 let iif1TG = 'f6uBPkA' + i;
let eld_Yeu = eo('div','5xPP91jgkhaE' + i+iidhOR+iif1TG,null,`class`,`m-b-1`);
let cmpO4NB = this._lc('cuv5fx5HW', {parent:component,parentTop:adminTable,props:{small:true,tag:tag},insideLoop:true,index:"" +iidhOR+iif1TG});
ec('div');
}
ec('td');
let el_SdcA = eo('td','99iff'+iidhOR);
let cmpLkbd = this._lc('c0saE_ZGM', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(post)},ondelete:function(e) {let $el = this; component.deleteItem(post.id, index)}},insideLoop:true,index:"" +iidhOR});
ec('td');
ec('tr');
}
}});
let cnd5SDu = component.openModal;
this.setState('stRWMdB', cnd5SDu);
if (cnd5SDu) { 
let cmpf8JC = this._lc('cEtLYwNqC', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let el1Of9M = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el1Of9M.formHandler) {
                    window.cfrmdlr = el1Of9M.formHandler = new FormHandler(el1Of9M, component);
                } else {
                    window.cfrmdlr = el1Of9M.formHandler;
                }
            let elx8tHk = eo('div',null,null,`class`,`form-group`);
let elO2D9p = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el1Of9M.formHandler.addError(`title`, 'required', trans('validation.required'));}return el1Of9M.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`post title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elO2D9p.value = fval(component.formObject.title);
let cndfEGz = el1Of9M.formHandler.getError(`title`);
this.setState('st1Yopi', cndfEGz);
if (cndfEGz) { 
let eldBfvu = eo('div','ajYf',null,`class`,`alert alert-danger`);
text(el1Of9M.formHandler.getError(`title`));
ec('div');
}ec('div');
let el9tgmA = eo('div',null,null,`class`,`form-group`);
let elSPzf7 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el1Of9M.formHandler.addError(`slug`, 'required', trans('validation.required'));}return el1Of9M.formHandler.removeError(`slug`);}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`placeholder`,`${trans(`Url slug`)}`,`type`,`text`,`class`,`form-control`,`id`,`slug`);
elSPzf7.value = fval(component.formObject.slug);
let cndnjFm = el1Of9M.formHandler.getError(`slug`);
this.setState('stjY4XU', cndnjFm);
if (cndnjFm) { 
let elWTg_M = eo('div','mwGf',null,`class`,`alert alert-danger`);
text(el1Of9M.formHandler.getError(`slug`));
ec('div');
}ec('div');
let elcl9pD = eo('div',null,null,`class`,`form-group`);
let elfUoZT = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.content = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el1Of9M.formHandler.addError(`content`, 'required', trans('validation.required'));}return el1Of9M.formHandler.removeError(`content`);}]},`value`,`${fval(component.formObject.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Content`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`content`);
elfUoZT.value = fval(component.formObject.content);
ec('textarea');
let cndIXM0 = el1Of9M.formHandler.getError(`content`);
this.setState('stXJXK6', cndIXM0);
if (cndIXM0) { 
let el2i6W9 = eo('div','4dnf',null,`class`,`alert alert-danger`);
text(el1Of9M.formHandler.getError(`content`));
ec('div');
}ec('div');
let elqrnD3 = eo('div',null,null,`class`,`form-group`);
let elhE5RS = eo('div',null,null,`class`,`row`);
let elIpwff = eo('div',null,null,`class`,`col-md-6`);
let el9AS6x = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el1Of9M.formHandler.addError(`prize`, 'required', trans('validation.required'));}return el1Of9M.formHandler.removeError(`prize`);}]},`value`,`${fval(component.formObject.prize)}`,`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`prize`)}`,`class`,`form-control`,`type`,`number`,`id`,`prize`);
el9AS6x.value = fval(component.formObject.prize);
let cnderTi = el1Of9M.formHandler.getError(`prize`);
this.setState('staq5Yq', cnderTi);
if (cnderTi) { 
let elDUjNe = eo('div','BL0f',null,`class`,`alert alert-danger`);
text(el1Of9M.formHandler.getError(`prize`));
ec('div');
}ec('div');
let elgJaqU = eo('div',null,null,`class`,`col-md-6`);
let cmpwu5r = this._lc('cRcA8L9Jt', {parent:component,parentTop:flkModal,props:{items:component.answerStatus,value:component.formObject.status},attrs:{name:`${(`status`).toInputName()}`,class:'form-control'},state:'stRWMdB'});
ec('div');
let elXQ7Fz = eo('div',null,null,`class`,`col-md-6`);
let cmpclwl = this._lc('ccyz1h7n8', {parent:component,parentTop:flkModal,props:{service:component.tagsService,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.tags},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,placeholder:`${trans(`Tag`)}`,label:'Tags'},state:'stRWMdB'});
ec('div');
let elkGqjA = eo('div',null,null,`class`,`col-md-6`);
let elQDP7l = eo('div',null,null,`class`,`form-group`);
let el7Vc0X = eo('label',null,null,`for`,`image`);
text(`Image`);
ec('label');
let cmp6jH2 = this._lc('ceZ8UYXcC', {parent:component,parentTop:flkModal,props:{src:component.formObject.image},attrs:{src:`${component.formObject.image}`,name:`${(`image`).toInputName()}`,id:'image'},state:'stRWMdB'});
ec('div');
ec('div');
ec('div');
ec('div');
let elBvZ1z = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let el2LKNk = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stRWMdB'});
}
                    this.isReadyToGo();
                }
        });