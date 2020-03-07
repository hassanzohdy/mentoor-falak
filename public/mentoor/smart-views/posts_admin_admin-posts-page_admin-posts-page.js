_Component({
                selector: 'admin-posts-page',
                c: 'AdminPostsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','answerStatus','tagsService','isValidForm','submitting'],
                children: {c_3tHye35:'gold-icon',cZOVlCbyH:'tag-badge',c1r_Rm7iG:'table-actions',calDAwMTq:'admin-table',cVsjcKvLT:'flk-dropdown-list',c9e1iUKCN:'flk-dropdown-list',cw7KqXHkE:'flk-image-input',ccQkFyD9X:'flk-modal'},
                render: function (component) {
                    let cmpPcYf = this._lc('calDAwMTq', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let post = component.items[index]; 
 let iiVKL4 = 'hFpSctW' + index;
let elgKK42 = eo('tr','RNb02KUlxZRM' + index+iiVKL4,null,`id`,`${ post.id }`);
let elIS9Zk = eo('td','HtMff'+iiVKL4);
text( post.id );
ec('td');
let elMmEkD = eo('td','MEhff'+iiVKL4);
text(post.title);
ec('td');
let elTGAWg = eo('td','Hdqff'+iiVKL4);
let elCgQ2o = ev('img','z2xff'+iiVKL4,null,`src`,`${post.image}`,`class`,`small-image`,`alt`,``);
ec('td');
let elsiPvq = eo('td','Nruff'+iiVKL4);
let cmpFqgk = this._lc('c_3tHye35', {parent:component,parentTop:adminTable,props:{coins:post.prize},insideLoop:true,index:"" +iiVKL4});
ec('td');
let elSxmP_ = eo('td','yEJff'+iiVKL4);
text(post.status);
ec('td');
let elKA3Hw = eo('td','zfeff'+iiVKL4);
for (let i in post.tags) {
let tag = post.tags[i]; 
 let ii78x5 = 'raIWGHC' + i;
let elUGf_d = eo('div','iJO_JfR9j6Gr' + i+iiVKL4+ii78x5,null,`class`,`m-b-1`);
let cmpkWl2 = this._lc('cZOVlCbyH', {parent:component,parentTop:adminTable,props:{small:true,tag:tag},insideLoop:true,index:"" +iiVKL4+ii78x5});
ec('div');
}
ec('td');
let elbr1cm = eo('td','iRdff'+iiVKL4);
let cmp_wL4 = this._lc('c1r_Rm7iG', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(post)},ondelete:function(e) {let $el = this; component.deleteItem(post.id, index)}},insideLoop:true,index:"" +iiVKL4});
ec('td');
ec('tr');
}
}});
let cndp_09 = component.openModal;
this.setState('stZWv_L', cndp_09);
if (cndp_09) { 
let cmpAbGq = this._lc('ccQkFyD9X', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elfhYsZ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elfhYsZ.formHandler) {
                    window.cfrmdlr = elfhYsZ.formHandler = new FormHandler(elfhYsZ, component);
                } else {
                    window.cfrmdlr = elfhYsZ.formHandler;
                }
            let elmbuBh = eo('div',null,null,`class`,`form-group`);
let elIFFVe = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elfhYsZ.formHandler.addError(`title`, 'required', trans('validation.required'));}return elfhYsZ.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`post title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elIFFVe.value = fval(component.formObject.title);
let cndJVhl = elfhYsZ.formHandler.getError(`title`);
this.setState('stUNYBK', cndJVhl);
if (cndJVhl) { 
let elkUEAT = eo('div','RjYf',null,`class`,`alert alert-danger`);
text(elfhYsZ.formHandler.getError(`title`));
ec('div');
}ec('div');
let elDX7TT = eo('div',null,null,`class`,`form-group`);
let ellufIu = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elfhYsZ.formHandler.addError(`slug`, 'required', trans('validation.required'));}return elfhYsZ.formHandler.removeError(`slug`);}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`placeholder`,`${trans(`Url slug`)}`,`type`,`text`,`class`,`form-control`,`id`,`slug`);
ellufIu.value = fval(component.formObject.slug);
let cndSHHY = elfhYsZ.formHandler.getError(`slug`);
this.setState('stgCQlb', cndSHHY);
if (cndSHHY) { 
let elSdAyc = eo('div','z_yf',null,`class`,`alert alert-danger`);
text(elfhYsZ.formHandler.getError(`slug`));
ec('div');
}ec('div');
let ell_7Jy = eo('div',null,null,`class`,`form-group`);
let elqbW7D = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.content = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elfhYsZ.formHandler.addError(`content`, 'required', trans('validation.required'));}return elfhYsZ.formHandler.removeError(`content`);}]},`value`,`${fval(component.formObject.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Content`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`content`);
elqbW7D.value = fval(component.formObject.content);
ec('textarea');
let cndUtq_ = elfhYsZ.formHandler.getError(`content`);
this.setState('stF5XPM', cndUtq_);
if (cndUtq_) { 
let el_wog_ = eo('div','qCEf',null,`class`,`alert alert-danger`);
text(elfhYsZ.formHandler.getError(`content`));
ec('div');
}ec('div');
let elVjAQH = eo('div',null,null,`class`,`form-group`);
let elWuCuf = eo('div',null,null,`class`,`row`);
let el9qq9f = eo('div',null,null,`class`,`col-md-6`);
let el42B6y = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elfhYsZ.formHandler.addError(`prize`, 'required', trans('validation.required'));}return elfhYsZ.formHandler.removeError(`prize`);}]},`value`,`${fval(component.formObject.prize)}`,`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`prize`)}`,`class`,`form-control`,`type`,`number`,`id`,`prize`);
el42B6y.value = fval(component.formObject.prize);
let cndn7zJ = elfhYsZ.formHandler.getError(`prize`);
this.setState('stqidr4', cndn7zJ);
if (cndn7zJ) { 
let el6CaVy = eo('div','PoJf',null,`class`,`alert alert-danger`);
text(elfhYsZ.formHandler.getError(`prize`));
ec('div');
}ec('div');
let ellmVsE = eo('div',null,null,`class`,`col-md-6`);
let cmpKyT4 = this._lc('cVsjcKvLT', {parent:component,parentTop:flkModal,props:{items:component.answerStatus,value:component.formObject.status},attrs:{name:`${(`status`).toInputName()}`,class:'form-control'},state:'stZWv_L'});
ec('div');
let elFlafA = eo('div',null,null,`class`,`col-md-6`);
let cmpGRl4 = this._lc('c9e1iUKCN', {parent:component,parentTop:flkModal,props:{service:component.tagsService,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.tags},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,placeholder:`${trans(`Tag`)}`,label:'Tags'},state:'stZWv_L'});
ec('div');
let elLALLr = eo('div',null,null,`class`,`col-md-6`);
let el6oTs_ = eo('div',null,null,`class`,`form-group`);
let el9Htxx = eo('label',null,null,`for`,`image`);
text(`Image`);
ec('label');
let cmpacjL = this._lc('cw7KqXHkE', {parent:component,parentTop:flkModal,props:{src:component.formObject.image},attrs:{src:`${component.formObject.image}`,name:`${(`image`).toInputName()}`,id:'image'},state:'stZWv_L'});
ec('div');
ec('div');
ec('div');
ec('div');
let elmu32T = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elhJp69 = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stZWv_L'});
}
                    this.isReadyToGo();
                }
        });