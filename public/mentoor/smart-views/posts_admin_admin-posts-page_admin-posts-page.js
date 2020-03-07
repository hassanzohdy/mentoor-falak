_Component({
                selector: 'admin-posts-page',
                c: 'AdminPostsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','answerStatus','tagsService','isValidForm','submitting'],
                children: {ce5uVlqMt:'gold-icon',cLjl_U4lI:'tag-badge',cB63g9SqE:'table-actions',c846F2XNa:'admin-table',cVaBsDvan:'flk-dropdown-list',cq5SWwz2H:'flk-dropdown-list',cKQ5bGN08:'flk-image-input',cJdMRZPHo:'flk-modal'},
                render: function (component) {
                    let cmpGwHv = this._lc('c846F2XNa', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let post = component.items[index]; 
 let iiXBpU = 'ovcDXSe' + index;
let el5eMUj = eo('tr','pBccDHg6aImI' + index+iiXBpU,null,`id`,`${ post.id }`);
let elPnDys = eo('td','CkSff'+iiXBpU);
text( post.id );
ec('td');
let elm7TJA = eo('td','gd9ff'+iiXBpU);
text(post.title);
ec('td');
let el5MT1g = eo('td','Jm0ff'+iiXBpU);
let eljhYPu = ev('img','bkiff'+iiXBpU,null,`src`,`${post.image}`,`class`,`small-image`,`alt`,``);
ec('td');
let elIbLXj = eo('td','7Vqff'+iiXBpU);
let cmpSRzm = this._lc('ce5uVlqMt', {parent:component,parentTop:adminTable,props:{coins:post.prize},insideLoop:true,index:"" +iiXBpU});
ec('td');
let elLWm5B = eo('td','YuRff'+iiXBpU);
text(post.status);
ec('td');
let elySvPN = eo('td','VrQff'+iiXBpU);
for (let i in post.tags) {
let tag = post.tags[i]; 
 let ii9KyZ = 'M7CNsSz' + i;
let elXiYFz = eo('div','k84QYhxF7FYA' + i+iiXBpU+ii9KyZ,null,`class`,`m-b-1`);
let cmpaBO_ = this._lc('cLjl_U4lI', {parent:component,parentTop:adminTable,props:{small:true,tag:tag},insideLoop:true,index:"" +iiXBpU+ii9KyZ});
ec('div');
}
ec('td');
let elS3eah = eo('td','jfdff'+iiXBpU);
let cmpzRev = this._lc('cB63g9SqE', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(post)},ondelete:function(e) {let $el = this; component.deleteItem(post.id, index)}},insideLoop:true,index:"" +iiXBpU});
ec('td');
ec('tr');
}
}});
let cndT01s = component.openModal;
this.setState('staUvmx', cndT01s);
if (cndT01s) { 
let cmpgMT9 = this._lc('cJdMRZPHo', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elXi8ty = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elXi8ty.formHandler) {
                    window.cfrmdlr = elXi8ty.formHandler = new FormHandler(elXi8ty, component);
                } else {
                    window.cfrmdlr = elXi8ty.formHandler;
                }
            let elemuI1 = eo('div',null,null,`class`,`form-group`);
let elNJkPC = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXi8ty.formHandler.addError(`title`, 'required', trans('validation.required'));}return elXi8ty.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`post title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elNJkPC.value = fval(component.formObject.title);
let cndOJbb = elXi8ty.formHandler.getError(`title`);
this.setState('stTwcIJ', cndOJbb);
if (cndOJbb) { 
let eloUUoj = eo('div','Zijf',null,`class`,`alert alert-danger`);
text(elXi8ty.formHandler.getError(`title`));
ec('div');
}ec('div');
let el5g9Wf = eo('div',null,null,`class`,`form-group`);
let elGIsqY = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXi8ty.formHandler.addError(`slug`, 'required', trans('validation.required'));}return elXi8ty.formHandler.removeError(`slug`);}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`placeholder`,`${trans(`Url slug`)}`,`type`,`text`,`class`,`form-control`,`id`,`slug`);
elGIsqY.value = fval(component.formObject.slug);
let cndL4kf = elXi8ty.formHandler.getError(`slug`);
this.setState('stzm4Fi', cndL4kf);
if (cndL4kf) { 
let elx6TxD = eo('div','B6Ef',null,`class`,`alert alert-danger`);
text(elXi8ty.formHandler.getError(`slug`));
ec('div');
}ec('div');
let el_6vMX = eo('div',null,null,`class`,`form-group`);
let elVKBBo = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.content = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXi8ty.formHandler.addError(`content`, 'required', trans('validation.required'));}return elXi8ty.formHandler.removeError(`content`);}]},`value`,`${fval(component.formObject.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Content`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`content`);
elVKBBo.value = fval(component.formObject.content);
ec('textarea');
let cnddqcQ = elXi8ty.formHandler.getError(`content`);
this.setState('stUXsp9', cnddqcQ);
if (cnddqcQ) { 
let elTQROq = eo('div','BDAf',null,`class`,`alert alert-danger`);
text(elXi8ty.formHandler.getError(`content`));
ec('div');
}ec('div');
let elPRZ5o = eo('div',null,null,`class`,`form-group`);
let elOkPpC = eo('div',null,null,`class`,`row`);
let elu2DKq = eo('div',null,null,`class`,`col-md-6`);
let eleTL8E = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXi8ty.formHandler.addError(`prize`, 'required', trans('validation.required'));}return elXi8ty.formHandler.removeError(`prize`);}]},`value`,`${fval(component.formObject.prize)}`,`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`prize`)}`,`class`,`form-control`,`type`,`number`,`id`,`prize`);
eleTL8E.value = fval(component.formObject.prize);
let cndnKBS = elXi8ty.formHandler.getError(`prize`);
this.setState('stLg8KJ', cndnKBS);
if (cndnKBS) { 
let elyNPyQ = eo('div','msPf',null,`class`,`alert alert-danger`);
text(elXi8ty.formHandler.getError(`prize`));
ec('div');
}ec('div');
let elIu3rx = eo('div',null,null,`class`,`col-md-6`);
let cmphoup = this._lc('cVaBsDvan', {parent:component,parentTop:flkModal,props:{items:component.answerStatus,value:component.formObject.status},attrs:{name:`${(`status`).toInputName()}`,class:'form-control'},state:'staUvmx'});
ec('div');
let elLhTWk = eo('div',null,null,`class`,`col-md-6`);
let cmpl8nX = this._lc('cq5SWwz2H', {parent:component,parentTop:flkModal,props:{service:component.tagsService,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.tags},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,placeholder:`${trans(`Tag`)}`,label:'Tags'},state:'staUvmx'});
ec('div');
let elvdlIl = eo('div',null,null,`class`,`col-md-6`);
let elL2MJt = eo('div',null,null,`class`,`form-group`);
let elLk8fH = eo('label',null,null,`for`,`image`);
text(`Image`);
ec('label');
let cmpA7BM = this._lc('cKQ5bGN08', {parent:component,parentTop:flkModal,props:{src:component.formObject.image},attrs:{src:`${component.formObject.image}`,name:`${(`image`).toInputName()}`,id:'image'},state:'staUvmx'});
ec('div');
ec('div');
ec('div');
ec('div');
let elcEplt = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let el6W4F4 = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'staUvmx'});
}
                    this.isReadyToGo();
                }
        });