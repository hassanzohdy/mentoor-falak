_Component({
                selector: 'admin-posts-page',
                c: 'AdminPostsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','answerStatus','tagsService','isValidForm','submitting'],
                children: {c07CWO9pn:'gold-icon',cTwpfFtoW:'tag-badge',cnypG77jp:'table-actions',cXzU1v_JM:'admin-table',cgoiXmAfK:'flk-dropdown-list',c2kPiVCfD:'flk-dropdown-list',cC79G10dj:'flk-image-input',cOhPvLP_1:'flk-modal'},
                render: function (component) {
                    let cmppBvz = this._lc('cXzU1v_JM', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let post = component.items[index]; 
 let iiRlcQ = 'bEx5EI4' + index;
let elxdPth = eo('tr','83yzfIh7f8uz' + index+iiRlcQ,null,`id`,`${ post.id }`);
let elRvH8q = eo('td','EN7ff'+iiRlcQ);
text( post.id );
ec('td');
let elbeqwJ = eo('td','Ctvff'+iiRlcQ);
text(post.title);
ec('td');
let elRvuk4 = eo('td','Zr_ff'+iiRlcQ);
let el3ODwj = ev('img','nYQff'+iiRlcQ,null,`src`,`${post.image}`,`class`,`small-image`,`alt`,``);
ec('td');
let elyB5Yt = eo('td','8e3ff'+iiRlcQ);
let cmptTdV = this._lc('c07CWO9pn', {parent:component,parentTop:adminTable,props:{coins:post.prize},insideLoop:true,index:"" +iiRlcQ});
ec('td');
let elHvJ6y = eo('td','whhff'+iiRlcQ);
text(post.status);
ec('td');
let elRNWvF = eo('td','iH7ff'+iiRlcQ);
for (let i in post.tags) {
let tag = post.tags[i]; 
 let ii8sF4 = 'bV7SfVy' + i;
let elPs0uw = eo('div','9S0AYLsgcJo7' + i+iiRlcQ+ii8sF4,null,`class`,`m-b-1`);
let cmpb_jz = this._lc('cTwpfFtoW', {parent:component,parentTop:adminTable,props:{small:true,tag:tag},insideLoop:true,index:"" +iiRlcQ+ii8sF4});
ec('div');
}
ec('td');
let elurhMQ = eo('td','hMnff'+iiRlcQ);
let cmpB89b = this._lc('cnypG77jp', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(post)},ondelete:function(e) {let $el = this; component.deleteItem(post.id, index)}},insideLoop:true,index:"" +iiRlcQ});
ec('td');
ec('tr');
}
}});
let cnd2Hzp = component.openModal;
this.setState('styceys', cnd2Hzp);
if (cnd2Hzp) { 
let cmpFahI = this._lc('cOhPvLP_1', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elz9KZB = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elz9KZB.formHandler) {
                    window.cfrmdlr = elz9KZB.formHandler = new FormHandler(elz9KZB, component);
                } else {
                    window.cfrmdlr = elz9KZB.formHandler;
                }
            let elO9WHj = eo('div',null,null,`class`,`form-group`);
let elCfpuw = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elz9KZB.formHandler.addError(`title`, 'required', trans('validation.required'));}return elz9KZB.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`post title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elCfpuw.value = fval(component.formObject.title);
let cndKg_z = elz9KZB.formHandler.getError(`title`);
this.setState('steR_vf', cndKg_z);
if (cndKg_z) { 
let el7DxIv = eo('div','_Gof',null,`class`,`alert alert-danger`);
text(elz9KZB.formHandler.getError(`title`));
ec('div');
}ec('div');
let elbHWdv = eo('div',null,null,`class`,`form-group`);
let elpy6zN = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elz9KZB.formHandler.addError(`slug`, 'required', trans('validation.required'));}return elz9KZB.formHandler.removeError(`slug`);}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`placeholder`,`${trans(`Url slug`)}`,`type`,`text`,`class`,`form-control`,`id`,`slug`);
elpy6zN.value = fval(component.formObject.slug);
let cndvI3R = elz9KZB.formHandler.getError(`slug`);
this.setState('stf6sSU', cndvI3R);
if (cndvI3R) { 
let elFuHiP = eo('div','1I7f',null,`class`,`alert alert-danger`);
text(elz9KZB.formHandler.getError(`slug`));
ec('div');
}ec('div');
let elg5GtY = eo('div',null,null,`class`,`form-group`);
let ela2Phq = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.content = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elz9KZB.formHandler.addError(`content`, 'required', trans('validation.required'));}return elz9KZB.formHandler.removeError(`content`);}]},`value`,`${fval(component.formObject.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Content`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`content`);
ela2Phq.value = fval(component.formObject.content);
ec('textarea');
let cndcgSx = elz9KZB.formHandler.getError(`content`);
this.setState('steYJXK', cndcgSx);
if (cndcgSx) { 
let elltuOi = eo('div','Rusf',null,`class`,`alert alert-danger`);
text(elz9KZB.formHandler.getError(`content`));
ec('div');
}ec('div');
let el1hBdk = eo('div',null,null,`class`,`form-group`);
let elvxFfV = eo('div',null,null,`class`,`row`);
let elizO8y = eo('div',null,null,`class`,`col-md-6`);
let elhFJbY = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elz9KZB.formHandler.addError(`prize`, 'required', trans('validation.required'));}return elz9KZB.formHandler.removeError(`prize`);}]},`value`,`${fval(component.formObject.prize)}`,`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`prize`)}`,`class`,`form-control`,`type`,`number`,`id`,`prize`);
elhFJbY.value = fval(component.formObject.prize);
let cndis6d = elz9KZB.formHandler.getError(`prize`);
this.setState('st8vTae', cndis6d);
if (cndis6d) { 
let elWafwd = eo('div','Vphf',null,`class`,`alert alert-danger`);
text(elz9KZB.formHandler.getError(`prize`));
ec('div');
}ec('div');
let elLb294 = eo('div',null,null,`class`,`col-md-6`);
let cmpreQC = this._lc('cgoiXmAfK', {parent:component,parentTop:flkModal,props:{items:component.answerStatus,value:component.formObject.status},attrs:{name:`${(`status`).toInputName()}`,class:'form-control'},state:'styceys'});
ec('div');
let ellwG63 = eo('div',null,null,`class`,`col-md-6`);
let cmpmJKZ = this._lc('c2kPiVCfD', {parent:component,parentTop:flkModal,props:{service:component.tagsService,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.tags},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,placeholder:`${trans(`Tag`)}`,label:'Tags'},state:'styceys'});
ec('div');
let elq99Q4 = eo('div',null,null,`class`,`col-md-6`);
let elRzT2g = eo('div',null,null,`class`,`form-group`);
let el24IiE = eo('label',null,null,`for`,`image`);
text(`Image`);
ec('label');
let cmpdJly = this._lc('cC79G10dj', {parent:component,parentTop:flkModal,props:{src:component.formObject.image},attrs:{src:`${component.formObject.image}`,name:`${(`image`).toInputName()}`,id:'image'},state:'styceys'});
ec('div');
ec('div');
ec('div');
ec('div');
let elFpH1Z = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let el1XIR3 = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'styceys'});
}
                    this.isReadyToGo();
                }
        });