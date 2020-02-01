_Component({
                selector: 'new-post-modal',
                c: 'NewPostModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['onClose','heading','submit','data','cache','tagsService','preview','isValidForm','isSending'],
                children: {cV0K1AIny:'flk-dropdown-list',cxxx6_MtJ:'flk-image-input',cM9Ipl96o:'markdown',cWzMWS6GZ:'flk-modal',cR1QJELhz:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cR1QJELhz', {parent:component,props:{header:component.heading},events:{onclose:function(e) {let $el = this; component.onClose()}},content:(flkModal) => {let elZUSl8 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elZUSl8.formHandler) {
                    window.cfrmdlr = elZUSl8.formHandler = new FormHandler(elZUSl8, component);
                } else {
                    window.cfrmdlr = elZUSl8.formHandler;
                }
            let elX3bEK = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.title = this.value;},function(e) {var $el = this;component.data.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elZUSl8.formHandler.addError(`title`, 'required', trans('validation.required'));}return elZUSl8.formHandler.removeError(`title`);}]},`value`,`${fval(component.data.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Post title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elX3bEK.value = fval(component.data.title);
let cndbFnz = elZUSl8.formHandler.getError(`title`);
this.setState('stNSLvC', cndbFnz);
if (cndbFnz) { 
let elfF1vW = eo('div','ZAHf',null,`class`,`alert alert-danger`);
text(elZUSl8.formHandler.getError(`title`));
ec('div');
}let elT9y9L = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.slug = this.value;}]},`value`,`${fval(component.data.slug)}`,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`);
elT9y9L.value = fval(component.data.slug);
let elRTvzR = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.content = this.value;},function(e) {var $el = this;component.cache.set('t-post', $el.value)},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elZUSl8.formHandler.addError(`content`, 'required', trans('validation.required'));}return elZUSl8.formHandler.removeError(`content`);}]},`value`,`${fval(component.data.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Write post content (Markdown)`)}`,`type`,`textarea`,`rows`,`20`,`class`,`form-control m-y-2`,`id`,`content`);
elRTvzR.value = fval(component.data.content);
ec('textarea');
let cndRFXR = elZUSl8.formHandler.getError(`content`);
this.setState('st_T44M', cndRFXR);
if (cndRFXR) { 
let elCY2qP = eo('div','Rluf',null,`class`,`alert alert-danger`);
text(elZUSl8.formHandler.getError(`content`));
ec('div');
}let elga_Bt = eo('div',null,null,`class`,`row`);
let ellOB_e = eo('div',null,null,`class`,`col-6`);
let cmppiuP = this._lc('cV0K1AIny', {parent:component,parentTop:flkModal,props:{imageable:true,multiple:true,lazyLoading:true,service:component.tagsService,value:component.data.tags},events:{onselect:function(e) {let $el = this; echo(e);component.data.tags = e.map(tag => tag.value)}},boolAttrs:{multiple:true},attrs:{name:`${(`tagsIds[]`).toInputName()}`,label:'Tags',required:''},style:{position:'top'}});
ec('div');
let elznNsZ = eo('div',null,null,`class`,`col-6`);
let elMBXhY = eo('label',null,null,`for`,`image`);
text(`Post image (Optional)`);
ec('label');
let cmpUoEb = this._lc('cxxx6_MtJ', {parent:component,parentTop:flkModal,props:{src:component.data.image},attrs:{src:`${component.data.image}`,name:`${(`image`).toInputName()}`,id:'image'}});
ec('div');
ec('div');
let elEewPW = eo('div',null,null,`class`,`text-right`);
let el6PURa = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = true}]}, boolAttrs, {disabled:! component.data.content || Is.empty(component.data.tags) || ! component.data.title},`type`,`button`,`class`,`btn btn-purple bold`);
text(`Next`);
ec('button');
ec('div');
let cndp1qA = component.preview;
this.setState('stjzmqd', cndp1qA);
if (cndp1qA) { 
let cmpYI34 = this._lc('cWzMWS6GZ', {parent:component,parentTop:flkModal,events:{onclose:function(e) {let $el = this; component.preview = null}},content:(flkModal) => {let cmpqjU9 = this._lc('cM9Ipl96o', {parent:component,parentTop:flkModal,props:{content:component.data.content},state:'stjzmqd'});
let elzBxza = eo('div',null,null,`class`,`text-right`);
let elVTI32 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Post`);
ec('button');
ec('div');
},attrs:{header:'Post Preview'},state:'stjzmqd'});
}ec('form');
},attrs:{id:'new-post-modal'}});

                    this.isReadyToGo();
                }
        });