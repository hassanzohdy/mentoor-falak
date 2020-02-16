_Component({
                selector: 'new-post-modal',
                c: 'NewPostModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['onClose','heading','submit','data','cache','tagsService','preview','isValidForm','isSending'],
                children: {cVK3WTTRc:'flk-dropdown-list',cdfqmMBLl:'flk-image-input',ci0NH7rlS:'markdown',cyry90W2B:'flk-modal',c49ch_YMu:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('c49ch_YMu', {parent:component,props:{header:component.heading},events:{onclose:function(e) {let $el = this; component.onClose()}},content:(flkModal) => {let elK8z45 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elK8z45.formHandler) {
                    window.cfrmdlr = elK8z45.formHandler = new FormHandler(elK8z45, component);
                } else {
                    window.cfrmdlr = elK8z45.formHandler;
                }
            let eleTyTw = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.title = this.value;},function(e) {var $el = this;component.data.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elK8z45.formHandler.addError(`title`, 'required', trans('validation.required'));}return elK8z45.formHandler.removeError(`title`);}]},`value`,`${fval(component.data.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Post title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
eleTyTw.value = fval(component.data.title);
let cndfq5R = elK8z45.formHandler.getError(`title`);
this.setState('stO4c4g', cndfq5R);
if (cndfq5R) { 
let el9lIcZ = eo('div','1l0f',null,`class`,`alert alert-danger`);
text(elK8z45.formHandler.getError(`title`));
ec('div');
}let elKahAg = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.slug = this.value;}]},`value`,`${fval(component.data.slug)}`,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`);
elKahAg.value = fval(component.data.slug);
let elNC80M = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.content = this.value;},function(e) {var $el = this;component.cache.set('t-post', $el.value)},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elK8z45.formHandler.addError(`content`, 'required', trans('validation.required'));}return elK8z45.formHandler.removeError(`content`);}]},`value`,`${fval(component.data.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Write post content (Markdown)`)}`,`type`,`textarea`,`rows`,`20`,`class`,`form-control m-y-2`,`id`,`content`);
elNC80M.value = fval(component.data.content);
ec('textarea');
let cndJgW2 = elK8z45.formHandler.getError(`content`);
this.setState('stnw3PG', cndJgW2);
if (cndJgW2) { 
let el1hkI8 = eo('div','svlf',null,`class`,`alert alert-danger`);
text(elK8z45.formHandler.getError(`content`));
ec('div');
}let elca4GA = eo('div',null,null,`class`,`row`);
let elHxJRB = eo('div',null,null,`class`,`col-6`);
let cmpbzfg = this._lc('cVK3WTTRc', {parent:component,parentTop:flkModal,props:{imageable:true,multiple:true,lazyLoading:true,service:component.tagsService,value:component.data.tags},events:{onselect:function(e) {let $el = this; echo(e);component.data.tags = e.map(tag => tag.value)}},boolAttrs:{multiple:true},attrs:{name:`${(`tagsIds[]`).toInputName()}`,label:'Tags',required:''},style:{position:'top'}});
ec('div');
let elvJRcI = eo('div',null,null,`class`,`col-6`);
let elVMcNT = eo('label',null,null,`for`,`image`);
text(`Post image (Optional)`);
ec('label');
let cmp84al = this._lc('cdfqmMBLl', {parent:component,parentTop:flkModal,props:{src:component.data.image},attrs:{src:`${component.data.image}`,name:`${(`image`).toInputName()}`,id:'image'}});
ec('div');
ec('div');
let el4tWBf = eo('div',null,null,`class`,`text-right`);
let elXB4FP = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = true}]}, boolAttrs, {disabled:! component.data.content || Is.empty(component.data.tags) || ! component.data.title},`type`,`button`,`class`,`btn btn-purple bold`);
text(`Next`);
ec('button');
ec('div');
let cndoJUF = component.preview;
this.setState('stHqGmv', cndoJUF);
if (cndoJUF) { 
let cmpwtQE = this._lc('cyry90W2B', {parent:component,parentTop:flkModal,events:{onclose:function(e) {let $el = this; component.preview = null}},content:(flkModal) => {let cmpVdtT = this._lc('ci0NH7rlS', {parent:component,parentTop:flkModal,props:{content:component.data.content},state:'stHqGmv'});
let el_8kpB = eo('div',null,null,`class`,`text-right`);
let el52ZST = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Post`);
ec('button');
ec('div');
},attrs:{header:'Post Preview'},state:'stHqGmv'});
}ec('form');
},attrs:{id:'new-post-modal'}});

                    this.isReadyToGo();
                }
        });