_Component({
                selector: 'new-post-modal',
                c: 'NewPostModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['onClose','heading','submit','data','cache','tagsService','preview','isValidForm','isSending'],
                children: {cp0Roj8XL:'flk-dropdown-list',cSaGP_Di6:'flk-image-input',cfw5D8TPD:'markdown',cMgZFOVp_:'flk-modal',cTqLvE5dw:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cTqLvE5dw', {parent:component,props:{header:component.heading},events:{onclose:function(e) {let $el = this; component.onClose()}},content:(flkModal) => {let elohD5C = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elohD5C.formHandler) {
                    window.cfrmdlr = elohD5C.formHandler = new FormHandler(elohD5C, component);
                } else {
                    window.cfrmdlr = elohD5C.formHandler;
                }
            let elFcAmD = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.title = this.value;},function(e) {var $el = this;component.data.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elohD5C.formHandler.addError(`title`, 'required', trans('validation.required'));}return elohD5C.formHandler.removeError(`title`);}]},`value`,`${fval(component.data.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Post title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elFcAmD.value = fval(component.data.title);
let cndljp4 = elohD5C.formHandler.getError(`title`);
this.setState('stUdCcG', cndljp4);
if (cndljp4) { 
let elgQcNV = eo('div','0fof',null,`class`,`alert alert-danger`);
text(elohD5C.formHandler.getError(`title`));
ec('div');
}let elRfIXZ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.slug = this.value;}]},`value`,`${fval(component.data.slug)}`,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`);
elRfIXZ.value = fval(component.data.slug);
let elr_mlx = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.content = this.value;},function(e) {var $el = this;component.cache.set('t-post', $el.value)},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elohD5C.formHandler.addError(`content`, 'required', trans('validation.required'));}return elohD5C.formHandler.removeError(`content`);}]},`value`,`${fval(component.data.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Write post content (Markdown)`)}`,`type`,`textarea`,`rows`,`20`,`class`,`form-control m-y-2`,`id`,`content`);
elr_mlx.value = fval(component.data.content);
ec('textarea');
let cndPIiM = elohD5C.formHandler.getError(`content`);
this.setState('stYhCu3', cndPIiM);
if (cndPIiM) { 
let elzpveK = eo('div','5SVf',null,`class`,`alert alert-danger`);
text(elohD5C.formHandler.getError(`content`));
ec('div');
}let el7IfX5 = eo('div',null,null,`class`,`row`);
let elFjz1L = eo('div',null,null,`class`,`col-6`);
let cmpogGE = this._lc('cp0Roj8XL', {parent:component,parentTop:flkModal,props:{imageable:true,multiple:true,lazyLoading:true,service:component.tagsService,value:component.data.tags},events:{onselect:function(e) {let $el = this; echo(e);component.data.tags = e.map(tag => tag.value)}},boolAttrs:{multiple:true},attrs:{name:`${(`tagsIds[]`).toInputName()}`,label:'Tags',required:''},style:{position:'top'}});
ec('div');
let elWAxUC = eo('div',null,null,`class`,`col-6`);
let elfnSPH = eo('label',null,null,`for`,`image`);
text(`Post image (Optional)`);
ec('label');
let cmpiMEr = this._lc('cSaGP_Di6', {parent:component,parentTop:flkModal,props:{src:component.data.image},attrs:{src:`${component.data.image}`,name:`${(`image`).toInputName()}`,id:'image'}});
ec('div');
ec('div');
let elor5J1 = eo('div',null,null,`class`,`text-right`);
let eltiI0j = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = true}]}, boolAttrs, {disabled:! component.data.content || Is.empty(component.data.tags) || ! component.data.title},`type`,`button`,`class`,`btn btn-purple bold`);
text(`Next`);
ec('button');
ec('div');
let cndlebi = component.preview;
this.setState('stHspYT', cndlebi);
if (cndlebi) { 
let cmpn7vJ = this._lc('cMgZFOVp_', {parent:component,parentTop:flkModal,events:{onclose:function(e) {let $el = this; component.preview = null}},content:(flkModal) => {let cmpwkrQ = this._lc('cfw5D8TPD', {parent:component,parentTop:flkModal,props:{content:component.data.content},state:'stHspYT'});
let elXaab7 = eo('div',null,null,`class`,`text-right`);
let elyJFrD = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Post`);
ec('button');
ec('div');
},attrs:{header:'Post Preview'},state:'stHspYT'});
}ec('form');
},attrs:{id:'new-post-modal'}});

                    this.isReadyToGo();
                }
        });