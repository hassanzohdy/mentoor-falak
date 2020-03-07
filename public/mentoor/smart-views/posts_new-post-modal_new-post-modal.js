_Component({
                selector: 'new-post-modal',
                c: 'NewPostModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['onClose','heading','submit','data','cache','tagsService','preview','isValidForm','isSending'],
                children: {cHjOFuOfn:'flk-dropdown-list',c9YO3UV7g:'flk-image-input',cLzw3Ivvp:'markdown',czIvUuItj:'flk-modal',cjDyfbLNX:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cjDyfbLNX', {parent:component,props:{header:component.heading},events:{onclose:function(e) {let $el = this; component.onClose()}},content:(flkModal) => {let elVubJ2 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elVubJ2.formHandler) {
                    window.cfrmdlr = elVubJ2.formHandler = new FormHandler(elVubJ2, component);
                } else {
                    window.cfrmdlr = elVubJ2.formHandler;
                }
            let elE54bM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.title = this.value;},function(e) {var $el = this;component.data.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elVubJ2.formHandler.addError(`title`, 'required', trans('validation.required'));}return elVubJ2.formHandler.removeError(`title`);}]},`value`,`${fval(component.data.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Post title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elE54bM.value = fval(component.data.title);
let cnddcKm = elVubJ2.formHandler.getError(`title`);
this.setState('stzti_H', cnddcKm);
if (cnddcKm) { 
let elC8eSv = eo('div','_0uf',null,`class`,`alert alert-danger`);
text(elVubJ2.formHandler.getError(`title`));
ec('div');
}let elRL2i0 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.slug = this.value;}]},`value`,`${fval(component.data.slug)}`,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`);
elRL2i0.value = fval(component.data.slug);
let elx613g = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.content = this.value;},function(e) {var $el = this;component.cache.set('t-post', $el.value)},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elVubJ2.formHandler.addError(`content`, 'required', trans('validation.required'));}return elVubJ2.formHandler.removeError(`content`);}]},`value`,`${fval(component.data.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Write post content (Markdown)`)}`,`type`,`textarea`,`rows`,`20`,`class`,`form-control m-y-2`,`id`,`content`);
elx613g.value = fval(component.data.content);
ec('textarea');
let cndIiYj = elVubJ2.formHandler.getError(`content`);
this.setState('stDfipD', cndIiYj);
if (cndIiYj) { 
let elWdSnb = eo('div','925f',null,`class`,`alert alert-danger`);
text(elVubJ2.formHandler.getError(`content`));
ec('div');
}let elKSHdb = eo('div',null,null,`class`,`row`);
let el7jMJN = eo('div',null,null,`class`,`col-6`);
let cmpNaHI = this._lc('cHjOFuOfn', {parent:component,parentTop:flkModal,props:{imageable:true,multiple:true,lazyLoading:true,service:component.tagsService,value:component.data.tags},events:{onselect:function(e) {let $el = this; echo(e);component.data.tags = e.map(tag => tag.value)}},boolAttrs:{multiple:true},attrs:{name:`${(`tagsIds[]`).toInputName()}`,label:'Tags',position:'top',required:''}});
ec('div');
let elZjbIF = eo('div',null,null,`class`,`col-6`);
let el72tXj = eo('label',null,null,`for`,`image`);
text(`Post image (Optional)`);
ec('label');
let cmpLMCS = this._lc('c9YO3UV7g', {parent:component,parentTop:flkModal,props:{src:component.data.image},attrs:{src:`${component.data.image}`,name:`${(`image`).toInputName()}`,id:'image'}});
ec('div');
ec('div');
let ellJ6KT = eo('div',null,null,`class`,`text-right`);
let elYnfto = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = true}]}, boolAttrs, {disabled:! component.data.content || Is.empty(component.data.tags) || ! component.data.title},`type`,`button`,`class`,`btn btn-purple bold`);
text(`Next`);
ec('button');
ec('div');
let cnd2xJH = component.preview;
this.setState('st8w6Zq', cnd2xJH);
if (cnd2xJH) { 
let cmpPXBm = this._lc('czIvUuItj', {parent:component,parentTop:flkModal,events:{onclose:function(e) {let $el = this; component.preview = null}},content:(flkModal) => {let cmpd3eG = this._lc('cLzw3Ivvp', {parent:component,parentTop:flkModal,props:{content:component.data.content},state:'st8w6Zq'});
let elIHWdb = eo('div',null,null,`class`,`text-right`);
let elN0nwx = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Post`);
ec('button');
ec('div');
},attrs:{header:'Post Preview'},state:'st8w6Zq'});
}ec('form');
},attrs:{id:'new-post-modal'}});

                    this.isReadyToGo();
                }
        });