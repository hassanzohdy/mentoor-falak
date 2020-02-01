_Component({
                selector: 'new-post-modal',
                c: 'NewPostModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['onClose','heading','submit','data','cache','tagsService','preview','isValidForm','isSending'],
                children: {c3IG8pFNz:'flk-dropdown-list',cX5_d_1ZU:'flk-image-input',cmUSWfjJy:'markdown',cjRCHgKNT:'flk-modal',cL0PHeXaj:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cL0PHeXaj', {parent:component,props:{header:component.heading},events:{onclose:function(e) {let $el = this; component.onClose()}},content:(flkModal) => {let elvMBqs = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elvMBqs.formHandler) {
                    window.cfrmdlr = elvMBqs.formHandler = new FormHandler(elvMBqs, component);
                } else {
                    window.cfrmdlr = elvMBqs.formHandler;
                }
            let elc3ZaL = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.title = this.value;},function(e) {var $el = this;component.data.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elvMBqs.formHandler.addError(`title`, 'required', trans('validation.required'));}return elvMBqs.formHandler.removeError(`title`);}]},`value`,`${fval(component.data.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Post title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elc3ZaL.value = fval(component.data.title);
let cnd7j5s = elvMBqs.formHandler.getError(`title`);
this.setState('st5RvSz', cnd7j5s);
if (cnd7j5s) { 
let eljvNPL = eo('div','2vyf',null,`class`,`alert alert-danger`);
text(elvMBqs.formHandler.getError(`title`));
ec('div');
}let eltDVu4 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.slug = this.value;}]},`value`,`${fval(component.data.slug)}`,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`);
eltDVu4.value = fval(component.data.slug);
let elCjUsS = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.content = this.value;},function(e) {var $el = this;component.cache.set('t-post', $el.value)},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elvMBqs.formHandler.addError(`content`, 'required', trans('validation.required'));}return elvMBqs.formHandler.removeError(`content`);}]},`value`,`${fval(component.data.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Write post content (Markdown)`)}`,`type`,`textarea`,`rows`,`20`,`class`,`form-control m-y-2`,`id`,`content`);
elCjUsS.value = fval(component.data.content);
ec('textarea');
let cndFwgo = elvMBqs.formHandler.getError(`content`);
this.setState('stVyCWh', cndFwgo);
if (cndFwgo) { 
let elR2snn = eo('div','E8kf',null,`class`,`alert alert-danger`);
text(elvMBqs.formHandler.getError(`content`));
ec('div');
}let elGn4kK = eo('div',null,null,`class`,`row`);
let elN1gjR = eo('div',null,null,`class`,`col-6`);
let cmpPdPX = this._lc('c3IG8pFNz', {parent:component,parentTop:flkModal,props:{imageable:true,multiple:true,lazyLoading:true,service:component.tagsService,value:component.data.tags},events:{onselect:function(e) {let $el = this; echo(e);component.data.tags = e.map(tag => tag.value)}},boolAttrs:{multiple:true},attrs:{name:`${(`tagsIds[]`).toInputName()}`,label:'Tags',required:''},style:{position:'top'}});
ec('div');
let eluYvFp = eo('div',null,null,`class`,`col-6`);
let elWcd12 = eo('label',null,null,`for`,`image`);
text(`Post image (Optional)`);
ec('label');
let cmpEoMS = this._lc('cX5_d_1ZU', {parent:component,parentTop:flkModal,props:{src:component.data.image},attrs:{src:`${component.data.image}`,name:`${(`image`).toInputName()}`,id:'image'}});
ec('div');
ec('div');
let elcd7MM = eo('div',null,null,`class`,`text-right`);
let elnMrUg = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = true}]}, boolAttrs, {disabled:! component.data.content || Is.empty(component.data.tags) || ! component.data.title},`type`,`button`,`class`,`btn btn-purple bold`);
text(`Next`);
ec('button');
ec('div');
let cndF9eg = component.preview;
this.setState('sthxnui', cndF9eg);
if (cndF9eg) { 
let cmpjMJv = this._lc('cjRCHgKNT', {parent:component,parentTop:flkModal,events:{onclose:function(e) {let $el = this; component.preview = null}},content:(flkModal) => {let cmpO8LZ = this._lc('cmUSWfjJy', {parent:component,parentTop:flkModal,props:{content:component.data.content},state:'sthxnui'});
let elmRWVz = eo('div',null,null,`class`,`text-right`);
let elK76Y6 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Post`);
ec('button');
ec('div');
},attrs:{header:'Post Preview'},state:'sthxnui'});
}ec('form');
},attrs:{id:'new-post-modal'}});

                    this.isReadyToGo();
                }
        });