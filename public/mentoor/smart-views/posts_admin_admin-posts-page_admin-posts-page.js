_Component({
                selector: 'admin-posts-page',
                c: 'AdminPostsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','answerStatus','tagsService','isValidForm','submitting'],
                children: {cNEBkcwNu:'gold-icon',cv6lXfoGw:'tag-badge',c4AGo5Usp:'table-actions',cjyyBmZOR:'admin-table',cb2m3k09Y:'flk-dropdown-list',c6CPeHaps:'flk-dropdown-list',cRAP8mArA:'flk-image-input',cu8qn97z9:'flk-modal'},
                render: function (component) {
                    let cmp3Ksi = this._lc('cjyyBmZOR', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let post = component.items[index]; 
 let iiuJNL = 'WJxeGi4' + index;
let elIgs6K = eo('tr','jG1ERWk8oMQl' + index+iiuJNL,null,`id`,`${ post.id }`);
let el43wLM = eo('td','noNff'+iiuJNL);
text( post.id );
ec('td');
let elA5uN_ = eo('td','x30ff'+iiuJNL);
text(post.title);
ec('td');
let el0vr0r = eo('td','nMeff'+iiuJNL);
let elNzqYv = ev('img','9wzff'+iiuJNL,null,`src`,`${post.image}`,`class`,`small-image`,`alt`,``);
ec('td');
let elGrhVh = eo('td','pFFff'+iiuJNL);
let cmp3pqQ = this._lc('cNEBkcwNu', {parent:component,parentTop:adminTable,props:{coins:post.prize},insideLoop:true,index:"" +iiuJNL});
ec('td');
let elZpb4F = eo('td','bjgff'+iiuJNL);
text(post.status);
ec('td');
let el6BnAj = eo('td','fDqff'+iiuJNL);
for (let i in post.tags) {
let tag = post.tags[i]; 
 let ii3rgT = 'gcVyVPO' + i;
let el1VTOu = eo('div','rf_NVDYs44rA' + i+iiuJNL+ii3rgT,null,`class`,`m-b-1`);
let cmp8vLm = this._lc('cv6lXfoGw', {parent:component,parentTop:adminTable,props:{small:true,tag:tag},insideLoop:true,index:"" +iiuJNL+ii3rgT});
ec('div');
}
ec('td');
let el3HDhL = eo('td','wINff'+iiuJNL);
let cmpqDnM = this._lc('c4AGo5Usp', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(post)},ondelete:function(e) {let $el = this; component.deleteItem(post.id, index)}},insideLoop:true,index:"" +iiuJNL});
ec('td');
ec('tr');
}
}});
let cnd19NK = component.openModal;
this.setState('stoaGZA', cnd19NK);
if (cnd19NK) { 
let cmpDi2e = this._lc('cu8qn97z9', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elQAu89 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elQAu89.formHandler) {
                    window.cfrmdlr = elQAu89.formHandler = new FormHandler(elQAu89, component);
                } else {
                    window.cfrmdlr = elQAu89.formHandler;
                }
            let elCaGMc = eo('div',null,null,`class`,`form-group`);
let elDUqyW = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQAu89.formHandler.addError(`title`, 'required', trans('validation.required'));}return elQAu89.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`post title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elDUqyW.value = fval(component.formObject.title);
let cnd_lg2 = elQAu89.formHandler.getError(`title`);
this.setState('st3lmTp', cnd_lg2);
if (cnd_lg2) { 
let elFyLAl = eo('div','D87f',null,`class`,`alert alert-danger`);
text(elQAu89.formHandler.getError(`title`));
ec('div');
}ec('div');
let elj9e8I = eo('div',null,null,`class`,`form-group`);
let ellJ2VC = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQAu89.formHandler.addError(`slug`, 'required', trans('validation.required'));}return elQAu89.formHandler.removeError(`slug`);}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`placeholder`,`${trans(`Url slug`)}`,`type`,`text`,`class`,`form-control`,`id`,`slug`);
ellJ2VC.value = fval(component.formObject.slug);
let cndpQib = elQAu89.formHandler.getError(`slug`);
this.setState('st300vb', cndpQib);
if (cndpQib) { 
let elSPhSg = eo('div','hf2f',null,`class`,`alert alert-danger`);
text(elQAu89.formHandler.getError(`slug`));
ec('div');
}ec('div');
let elGYZ_I = eo('div',null,null,`class`,`form-group`);
let el6lEsi = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.content = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQAu89.formHandler.addError(`content`, 'required', trans('validation.required'));}return elQAu89.formHandler.removeError(`content`);}]},`value`,`${fval(component.formObject.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Content`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`content`);
el6lEsi.value = fval(component.formObject.content);
ec('textarea');
let cndaKE4 = elQAu89.formHandler.getError(`content`);
this.setState('stX6DIa', cndaKE4);
if (cndaKE4) { 
let elkrwgk = eo('div','4WTf',null,`class`,`alert alert-danger`);
text(elQAu89.formHandler.getError(`content`));
ec('div');
}ec('div');
let elccB4J = eo('div',null,null,`class`,`form-group`);
let el7gVFG = eo('div',null,null,`class`,`row`);
let elFVgrI = eo('div',null,null,`class`,`col-md-6`);
let elETiF7 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQAu89.formHandler.addError(`prize`, 'required', trans('validation.required'));}return elQAu89.formHandler.removeError(`prize`);}]},`value`,`${fval(component.formObject.prize)}`,`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`prize`)}`,`class`,`form-control`,`type`,`number`,`id`,`prize`);
elETiF7.value = fval(component.formObject.prize);
let cndpRTF = elQAu89.formHandler.getError(`prize`);
this.setState('stfE5bs', cndpRTF);
if (cndpRTF) { 
let elgOrWY = eo('div','zOuf',null,`class`,`alert alert-danger`);
text(elQAu89.formHandler.getError(`prize`));
ec('div');
}ec('div');
let el_KTdR = eo('div',null,null,`class`,`col-md-6`);
let cmp36sk = this._lc('cb2m3k09Y', {parent:component,parentTop:flkModal,props:{items:component.answerStatus,value:component.formObject.status},attrs:{name:`${(`status`).toInputName()}`,class:'form-control'},state:'stoaGZA'});
ec('div');
let elI6uDi = eo('div',null,null,`class`,`col-md-6`);
let cmptTu_ = this._lc('c6CPeHaps', {parent:component,parentTop:flkModal,props:{service:component.tagsService,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.tags},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,placeholder:`${trans(`Tag`)}`,label:'Tags'},state:'stoaGZA'});
ec('div');
let elMHHDB = eo('div',null,null,`class`,`col-md-6`);
let elP1t5a = eo('div',null,null,`class`,`form-group`);
let elT6alY = eo('label',null,null,`for`,`image`);
text(`Image`);
ec('label');
let cmpvsm7 = this._lc('cRAP8mArA', {parent:component,parentTop:flkModal,props:{src:component.formObject.image},attrs:{src:`${component.formObject.image}`,name:`${(`image`).toInputName()}`,id:'image'},state:'stoaGZA'});
ec('div');
ec('div');
ec('div');
ec('div');
let elUUIYB = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elFrxXh = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stoaGZA'});
}
                    this.isReadyToGo();
                }
        });