_Component({
                selector: 'new-post-modal',
                c: 'NewPostModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['onClose','heading','submit','data','cache','tagsService','preview','isValidForm','isSending'],
                children: {c3Vt80lti:'flk-dropdown-list',cBy74zYO6:'flk-image-input',clHHzmeFa:'markdown',cYjHPsh_V:'flk-modal',cUMXOpTS3:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cUMXOpTS3', {parent:component,props:{header:component.heading},events:{onclose:function(e) {let $el = this; component.onClose()}},content:(flkModal) => {let elFaA6V = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elFaA6V.formHandler) {
                    window.cfrmdlr = elFaA6V.formHandler = new FormHandler(elFaA6V, component);
                } else {
                    window.cfrmdlr = elFaA6V.formHandler;
                }
            let elFz5qf = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.title = this.value;},function(e) {var $el = this;component.data.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFaA6V.formHandler.addError(`title`, 'required', trans('validation.required'));}return elFaA6V.formHandler.removeError(`title`);}]},`value`,`${fval(component.data.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Post title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elFz5qf.value = fval(component.data.title);
let cnd9YPZ = elFaA6V.formHandler.getError(`title`);
this.setState('sthm7Fy', cnd9YPZ);
if (cnd9YPZ) { 
let elqdXFM = eo('div','4LBf',null,`class`,`alert alert-danger`);
text(elFaA6V.formHandler.getError(`title`));
ec('div');
}let elEMH_3 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.slug = this.value;}]},`value`,`${fval(component.data.slug)}`,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`);
elEMH_3.value = fval(component.data.slug);
let elBM5v0 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.content = this.value;},function(e) {var $el = this;component.cache.set('t-post', $el.value)},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFaA6V.formHandler.addError(`content`, 'required', trans('validation.required'));}return elFaA6V.formHandler.removeError(`content`);}]},`value`,`${fval(component.data.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Write post content (Markdown)`)}`,`type`,`textarea`,`rows`,`20`,`class`,`form-control m-y-2`,`id`,`content`);
elBM5v0.value = fval(component.data.content);
ec('textarea');
let cndFdWF = elFaA6V.formHandler.getError(`content`);
this.setState('st1cbK6', cndFdWF);
if (cndFdWF) { 
let elIWm0L = eo('div','DXFf',null,`class`,`alert alert-danger`);
text(elFaA6V.formHandler.getError(`content`));
ec('div');
}let elZHc_o = eo('div',null,null,`class`,`row`);
let elaho_Z = eo('div',null,null,`class`,`col-6`);
let cmp243j = this._lc('c3Vt80lti', {parent:component,parentTop:flkModal,props:{imageable:true,multiple:true,lazyLoading:true,service:component.tagsService,value:component.data.tags},events:{onselect:function(e) {let $el = this; echo(e);component.data.tags = e.map(tag => tag.value)}},boolAttrs:{multiple:true},attrs:{name:`${(`tagsIds[]`).toInputName()}`,label:'Tags',required:''},style:{position:'top'}});
ec('div');
let elt2OTx = eo('div',null,null,`class`,`col-6`);
let ell4AuY = eo('label',null,null,`for`,`image`);
text(`Post image (Optional)`);
ec('label');
let cmpY9r6 = this._lc('cBy74zYO6', {parent:component,parentTop:flkModal,props:{src:component.data.image},attrs:{src:`${component.data.image}`,name:`${(`image`).toInputName()}`,id:'image'}});
ec('div');
ec('div');
let elJywsC = eo('div',null,null,`class`,`text-right`);
let elhXIRL = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = true}]}, boolAttrs, {disabled:! component.data.content || Is.empty(component.data.tags) || ! component.data.title},`type`,`button`,`class`,`btn btn-purple bold`);
text(`Next`);
ec('button');
ec('div');
let cndF8V_ = component.preview;
this.setState('stHaY5m', cndF8V_);
if (cndF8V_) { 
let cmp8myQ = this._lc('cYjHPsh_V', {parent:component,parentTop:flkModal,events:{onclose:function(e) {let $el = this; component.preview = null}},content:(flkModal) => {let cmpC1Oa = this._lc('clHHzmeFa', {parent:component,parentTop:flkModal,props:{content:component.data.content},state:'stHaY5m'});
let elLHMwc = eo('div',null,null,`class`,`text-right`);
let elZc7WP = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Post`);
ec('button');
ec('div');
},attrs:{header:'Post Preview'},state:'stHaY5m'});
}ec('form');
},attrs:{id:'new-post-modal'}});

                    this.isReadyToGo();
                }
        });