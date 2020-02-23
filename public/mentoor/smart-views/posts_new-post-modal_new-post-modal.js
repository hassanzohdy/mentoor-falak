_Component({
                selector: 'new-post-modal',
                c: 'NewPostModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['onClose','heading','submit','data','cache','tagsService','preview','isValidForm','isSending'],
                children: {csKRNSStw:'flk-dropdown-list',cYkJgmSUH:'flk-image-input',crgtlLp83:'markdown',ce0TvA5Wb:'flk-modal',cPuwjEDEi:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cPuwjEDEi', {parent:component,props:{header:component.heading},events:{onclose:function(e) {let $el = this; component.onClose()}},content:(flkModal) => {let el1Cs9a = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el1Cs9a.formHandler) {
                    window.cfrmdlr = el1Cs9a.formHandler = new FormHandler(el1Cs9a, component);
                } else {
                    window.cfrmdlr = el1Cs9a.formHandler;
                }
            let el6XusZ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.title = this.value;},function(e) {var $el = this;component.data.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el1Cs9a.formHandler.addError(`title`, 'required', trans('validation.required'));}return el1Cs9a.formHandler.removeError(`title`);}]},`value`,`${fval(component.data.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Post title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el6XusZ.value = fval(component.data.title);
let cndiCr0 = el1Cs9a.formHandler.getError(`title`);
this.setState('st_DU3X', cndiCr0);
if (cndiCr0) { 
let elLbgKS = eo('div','j9bf',null,`class`,`alert alert-danger`);
text(el1Cs9a.formHandler.getError(`title`));
ec('div');
}let elMuTUu = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.slug = this.value;}]},`value`,`${fval(component.data.slug)}`,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`);
elMuTUu.value = fval(component.data.slug);
let elx__KE = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.content = this.value;},function(e) {var $el = this;component.cache.set('t-post', $el.value)},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el1Cs9a.formHandler.addError(`content`, 'required', trans('validation.required'));}return el1Cs9a.formHandler.removeError(`content`);}]},`value`,`${fval(component.data.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Write post content (Markdown)`)}`,`type`,`textarea`,`rows`,`20`,`class`,`form-control m-y-2`,`id`,`content`);
elx__KE.value = fval(component.data.content);
ec('textarea');
let cndzIjn = el1Cs9a.formHandler.getError(`content`);
this.setState('stBSrhu', cndzIjn);
if (cndzIjn) { 
let el185LC = eo('div','xPvf',null,`class`,`alert alert-danger`);
text(el1Cs9a.formHandler.getError(`content`));
ec('div');
}let eljO6oS = eo('div',null,null,`class`,`row`);
let elkilih = eo('div',null,null,`class`,`col-6`);
let cmpNvIe = this._lc('csKRNSStw', {parent:component,parentTop:flkModal,props:{imageable:true,multiple:true,lazyLoading:true,service:component.tagsService,value:component.data.tags},events:{onselect:function(e) {let $el = this; echo(e);component.data.tags = e.map(tag => tag.value)}},boolAttrs:{multiple:true},attrs:{name:`${(`tagsIds[]`).toInputName()}`,label:'Tags',required:''},style:{position:'top'}});
ec('div');
let elcjBDt = eo('div',null,null,`class`,`col-6`);
let elap9Oi = eo('label',null,null,`for`,`image`);
text(`Post image (Optional)`);
ec('label');
let cmp_O6v = this._lc('cYkJgmSUH', {parent:component,parentTop:flkModal,props:{src:component.data.image},attrs:{src:`${component.data.image}`,name:`${(`image`).toInputName()}`,id:'image'}});
ec('div');
ec('div');
let elMmGKx = eo('div',null,null,`class`,`text-right`);
let elO9Tg_ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = true}]}, boolAttrs, {disabled:! component.data.content || Is.empty(component.data.tags) || ! component.data.title},`type`,`button`,`class`,`btn btn-purple bold`);
text(`Next`);
ec('button');
ec('div');
let cnd7nCC = component.preview;
this.setState('stirGCh', cnd7nCC);
if (cnd7nCC) { 
let cmpi1BL = this._lc('ce0TvA5Wb', {parent:component,parentTop:flkModal,events:{onclose:function(e) {let $el = this; component.preview = null}},content:(flkModal) => {let cmpWfHo = this._lc('crgtlLp83', {parent:component,parentTop:flkModal,props:{content:component.data.content},state:'stirGCh'});
let elQ1vne = eo('div',null,null,`class`,`text-right`);
let elv42J5 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Post`);
ec('button');
ec('div');
},attrs:{header:'Post Preview'},state:'stirGCh'});
}ec('form');
},attrs:{id:'new-post-modal'}});

                    this.isReadyToGo();
                }
        });