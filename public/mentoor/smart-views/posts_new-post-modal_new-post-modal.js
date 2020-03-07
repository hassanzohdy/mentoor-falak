_Component({
                selector: 'new-post-modal',
                c: 'NewPostModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['onClose','heading','submit','data','cache','tagsService','preview','isValidForm','isSending'],
                children: {cvjMPll8z:'flk-dropdown-list',cSBf3zbBY:'flk-image-input',cxj0okkOI:'markdown',coPrT1tQJ:'flk-modal',cPZGJ77tm:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cPZGJ77tm', {parent:component,props:{header:component.heading},events:{onclose:function(e) {let $el = this; component.onClose()}},content:(flkModal) => {let elBt3Ws = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elBt3Ws.formHandler) {
                    window.cfrmdlr = elBt3Ws.formHandler = new FormHandler(elBt3Ws, component);
                } else {
                    window.cfrmdlr = elBt3Ws.formHandler;
                }
            let elA5hqd = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.title = this.value;},function(e) {var $el = this;component.data.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elBt3Ws.formHandler.addError(`title`, 'required', trans('validation.required'));}return elBt3Ws.formHandler.removeError(`title`);}]},`value`,`${fval(component.data.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Post title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elA5hqd.value = fval(component.data.title);
let cndEb6w = elBt3Ws.formHandler.getError(`title`);
this.setState('stu0J0B', cndEb6w);
if (cndEb6w) { 
let elRLe2A = eo('div','699f',null,`class`,`alert alert-danger`);
text(elBt3Ws.formHandler.getError(`title`));
ec('div');
}let elOA0NF = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.slug = this.value;}]},`value`,`${fval(component.data.slug)}`,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`);
elOA0NF.value = fval(component.data.slug);
let elcKqG5 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.content = this.value;},function(e) {var $el = this;component.cache.set('t-post', $el.value)},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elBt3Ws.formHandler.addError(`content`, 'required', trans('validation.required'));}return elBt3Ws.formHandler.removeError(`content`);}]},`value`,`${fval(component.data.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Write post content (Markdown)`)}`,`type`,`textarea`,`rows`,`20`,`class`,`form-control m-y-2`,`id`,`content`);
elcKqG5.value = fval(component.data.content);
ec('textarea');
let cnd2YCJ = elBt3Ws.formHandler.getError(`content`);
this.setState('stEPOEE', cnd2YCJ);
if (cnd2YCJ) { 
let elD2ikI = eo('div','281f',null,`class`,`alert alert-danger`);
text(elBt3Ws.formHandler.getError(`content`));
ec('div');
}let elwRO1v = eo('div',null,null,`class`,`row`);
let el8qJZS = eo('div',null,null,`class`,`col-6`);
let cmpZVVA = this._lc('cvjMPll8z', {parent:component,parentTop:flkModal,props:{imageable:true,multiple:true,lazyLoading:true,service:component.tagsService,value:component.data.tags},events:{onselect:function(e) {let $el = this; echo(e);component.data.tags = e.map(tag => tag.value)}},boolAttrs:{multiple:true},attrs:{name:`${(`tagsIds[]`).toInputName()}`,label:'Tags',position:'top',required:''}});
ec('div');
let elz7SpB = eo('div',null,null,`class`,`col-6`);
let ell8M1a = eo('label',null,null,`for`,`image`);
text(`Post image (Optional)`);
ec('label');
let cmpWJcw = this._lc('cSBf3zbBY', {parent:component,parentTop:flkModal,props:{src:component.data.image},attrs:{src:`${component.data.image}`,name:`${(`image`).toInputName()}`,id:'image'}});
ec('div');
ec('div');
let el98i6v = eo('div',null,null,`class`,`text-right`);
let elXJF5b = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = true}]}, boolAttrs, {disabled:! component.data.content || Is.empty(component.data.tags) || ! component.data.title},`type`,`button`,`class`,`btn btn-purple bold`);
text(`Next`);
ec('button');
ec('div');
let cndq0l_ = component.preview;
this.setState('stvamPX', cndq0l_);
if (cndq0l_) { 
let cmpU0l5 = this._lc('coPrT1tQJ', {parent:component,parentTop:flkModal,events:{onclose:function(e) {let $el = this; component.preview = null}},content:(flkModal) => {let cmpqxDo = this._lc('cxj0okkOI', {parent:component,parentTop:flkModal,props:{content:component.data.content},state:'stvamPX'});
let elYdF_e = eo('div',null,null,`class`,`text-right`);
let el15Rup = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Post`);
ec('button');
ec('div');
},attrs:{header:'Post Preview'},state:'stvamPX'});
}ec('form');
},attrs:{id:'new-post-modal'}});

                    this.isReadyToGo();
                }
        });