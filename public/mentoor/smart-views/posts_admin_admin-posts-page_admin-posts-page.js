_Component({
                selector: 'admin-posts-page',
                c: 'AdminPostsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','answerStatus','tagsService','isValidForm','submitting'],
                children: {czI35wJCx:'gold-icon',ctQDwKxH6:'tag-badge',cIXqGgCss:'table-actions',cRXkv4Sff:'admin-table',cye4zVK1Z:'flk-dropdown-list',czEft0JX7:'flk-dropdown-list',cugg6PZoT:'flk-image-input',cSqqRMZau:'flk-modal'},
                render: function (component) {
                    let cmpmI2J = this._lc('cRXkv4Sff', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let post = component.items[index]; 
 let iiIeAa = 'GMedtYj' + index;
let el5IsMC = eo('tr','OSDdkI4jgEm7' + index+iiIeAa,null,`id`,`${ post.id }`);
let elVCh2H = eo('td','CIZff'+iiIeAa);
text( post.id );
ec('td');
let elm8UEV = eo('td','9v8ff'+iiIeAa);
text(post.title);
ec('td');
let elLfRE3 = eo('td','JGnff'+iiIeAa);
let el5Fh_k = ev('img','4tTff'+iiIeAa,null,`src`,`${post.image}`,`class`,`small-image`,`alt`,``);
ec('td');
let elUo9Il = eo('td','Gn9ff'+iiIeAa);
let cmp_tTI = this._lc('czI35wJCx', {parent:component,parentTop:adminTable,props:{coins:post.prize},insideLoop:true,index:"" +iiIeAa});
ec('td');
let elIuCf0 = eo('td','_LRff'+iiIeAa);
text(post.status);
ec('td');
let el8Dg1A = eo('td','ZByff'+iiIeAa);
for (let i in post.tags) {
let tag = post.tags[i]; 
 let iiODTY = 'wKeMZ4D' + i;
let el7rzFq = eo('div','rkhXzmIZSDWy' + i+iiIeAa+iiODTY,null,`class`,`m-b-1`);
let cmpkGWI = this._lc('ctQDwKxH6', {parent:component,parentTop:adminTable,props:{small:true,tag:tag},insideLoop:true,index:"" +iiIeAa+iiODTY});
ec('div');
}
ec('td');
let elONB6H = eo('td','diRff'+iiIeAa);
let cmpuADC = this._lc('cIXqGgCss', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(post)},ondelete:function(e) {let $el = this; component.deleteItem(post.id, index)}},insideLoop:true,index:"" +iiIeAa});
ec('td');
ec('tr');
}
}});
let cndgQoS = component.openModal;
this.setState('stfmaWJ', cndgQoS);
if (cndgQoS) { 
let cmpyxs6 = this._lc('cSqqRMZau', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elSVdy6 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elSVdy6.formHandler) {
                    window.cfrmdlr = elSVdy6.formHandler = new FormHandler(elSVdy6, component);
                } else {
                    window.cfrmdlr = elSVdy6.formHandler;
                }
            let elhDWc3 = eo('div',null,null,`class`,`form-group`);
let elHIEbT = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elSVdy6.formHandler.addError(`title`, 'required', trans('validation.required'));}return elSVdy6.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`post title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elHIEbT.value = fval(component.formObject.title);
let cndmsAw = elSVdy6.formHandler.getError(`title`);
this.setState('stMgBbm', cndmsAw);
if (cndmsAw) { 
let el7Lsat = eo('div','CD_f',null,`class`,`alert alert-danger`);
text(elSVdy6.formHandler.getError(`title`));
ec('div');
}ec('div');
let el5CpAK = eo('div',null,null,`class`,`form-group`);
let elgEpLD = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elSVdy6.formHandler.addError(`slug`, 'required', trans('validation.required'));}return elSVdy6.formHandler.removeError(`slug`);}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`placeholder`,`${trans(`Url slug`)}`,`type`,`text`,`class`,`form-control`,`id`,`slug`);
elgEpLD.value = fval(component.formObject.slug);
let cnd7wxi = elSVdy6.formHandler.getError(`slug`);
this.setState('stelMZR', cnd7wxi);
if (cnd7wxi) { 
let eld0rnC = eo('div','ycIf',null,`class`,`alert alert-danger`);
text(elSVdy6.formHandler.getError(`slug`));
ec('div');
}ec('div');
let el2qmU3 = eo('div',null,null,`class`,`form-group`);
let elFMr33 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.content = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elSVdy6.formHandler.addError(`content`, 'required', trans('validation.required'));}return elSVdy6.formHandler.removeError(`content`);}]},`value`,`${fval(component.formObject.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Content`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`content`);
elFMr33.value = fval(component.formObject.content);
ec('textarea');
let cnd8jNP = elSVdy6.formHandler.getError(`content`);
this.setState('stw9V6f', cnd8jNP);
if (cnd8jNP) { 
let elD1UZp = eo('div','OG0f',null,`class`,`alert alert-danger`);
text(elSVdy6.formHandler.getError(`content`));
ec('div');
}ec('div');
let elePVG6 = eo('div',null,null,`class`,`form-group`);
let ellBV3L = eo('div',null,null,`class`,`row`);
let elT4oRw = eo('div',null,null,`class`,`col-md-6`);
let elPZ6K5 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elSVdy6.formHandler.addError(`prize`, 'required', trans('validation.required'));}return elSVdy6.formHandler.removeError(`prize`);}]},`value`,`${fval(component.formObject.prize)}`,`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`prize`)}`,`class`,`form-control`,`type`,`number`,`id`,`prize`);
elPZ6K5.value = fval(component.formObject.prize);
let cnd8d3N = elSVdy6.formHandler.getError(`prize`);
this.setState('stDNp3W', cnd8d3N);
if (cnd8d3N) { 
let ellQ1qS = eo('div','TMSf',null,`class`,`alert alert-danger`);
text(elSVdy6.formHandler.getError(`prize`));
ec('div');
}ec('div');
let elE6ZXq = eo('div',null,null,`class`,`col-md-6`);
let cmpUI4V = this._lc('cye4zVK1Z', {parent:component,parentTop:flkModal,props:{items:component.answerStatus,value:component.formObject.status},attrs:{name:`${(`status`).toInputName()}`,class:'form-control'},state:'stfmaWJ'});
ec('div');
let elKCnqE = eo('div',null,null,`class`,`col-md-6`);
let cmpaG0C = this._lc('czEft0JX7', {parent:component,parentTop:flkModal,props:{service:component.tagsService,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.tags},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,placeholder:`${trans(`Tag`)}`,label:'Tags'},state:'stfmaWJ'});
ec('div');
let elq8k8m = eo('div',null,null,`class`,`col-md-6`);
let el5NaQC = eo('div',null,null,`class`,`form-group`);
let el8gCbb = eo('label',null,null,`for`,`image`);
text(`Image`);
ec('label');
let cmpG9ip = this._lc('cugg6PZoT', {parent:component,parentTop:flkModal,props:{src:component.formObject.image},attrs:{src:`${component.formObject.image}`,name:`${(`image`).toInputName()}`,id:'image'},state:'stfmaWJ'});
ec('div');
ec('div');
ec('div');
ec('div');
let elXK_ph = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elOORsw = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stfmaWJ'});
}
                    this.isReadyToGo();
                }
        });