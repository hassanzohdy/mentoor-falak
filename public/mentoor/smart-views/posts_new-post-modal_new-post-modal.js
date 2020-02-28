_Component({
                selector: 'new-post-modal',
                c: 'NewPostModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['onClose','heading','submit','data','cache','tagsService','preview','isValidForm','isSending'],
                children: {cWv4FOpG1:'flk-dropdown-list',cnDvuIlQ6:'flk-image-input',cQsXP0SKV:'markdown',coBqbfx5d:'flk-modal',cxA_rFV9t:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cxA_rFV9t', {parent:component,props:{header:component.heading},events:{onclose:function(e) {let $el = this; component.onClose()}},content:(flkModal) => {let elN9HBY = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elN9HBY.formHandler) {
                    window.cfrmdlr = elN9HBY.formHandler = new FormHandler(elN9HBY, component);
                } else {
                    window.cfrmdlr = elN9HBY.formHandler;
                }
            let elH7ERJ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.title = this.value;},function(e) {var $el = this;component.data.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elN9HBY.formHandler.addError(`title`, 'required', trans('validation.required'));}return elN9HBY.formHandler.removeError(`title`);}]},`value`,`${fval(component.data.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Post title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elH7ERJ.value = fval(component.data.title);
let cnd2aP1 = elN9HBY.formHandler.getError(`title`);
this.setState('stjXpK_', cnd2aP1);
if (cnd2aP1) { 
let elP6hpG = eo('div','cfxf',null,`class`,`alert alert-danger`);
text(elN9HBY.formHandler.getError(`title`));
ec('div');
}let ely9nKt = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.slug = this.value;}]},`value`,`${fval(component.data.slug)}`,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`);
ely9nKt.value = fval(component.data.slug);
let elGxQDZ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.content = this.value;},function(e) {var $el = this;component.cache.set('t-post', $el.value)},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elN9HBY.formHandler.addError(`content`, 'required', trans('validation.required'));}return elN9HBY.formHandler.removeError(`content`);}]},`value`,`${fval(component.data.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Write post content (Markdown)`)}`,`type`,`textarea`,`rows`,`20`,`class`,`form-control m-y-2`,`id`,`content`);
elGxQDZ.value = fval(component.data.content);
ec('textarea');
let cndxksR = elN9HBY.formHandler.getError(`content`);
this.setState('stCOdOS', cndxksR);
if (cndxksR) { 
let elLblfL = eo('div','Wsdf',null,`class`,`alert alert-danger`);
text(elN9HBY.formHandler.getError(`content`));
ec('div');
}let elVfJcs = eo('div',null,null,`class`,`row`);
let el_0eiK = eo('div',null,null,`class`,`col-6`);
let cmpVqqE = this._lc('cWv4FOpG1', {parent:component,parentTop:flkModal,props:{imageable:true,multiple:true,lazyLoading:true,service:component.tagsService,value:component.data.tags},events:{onselect:function(e) {let $el = this; echo(e);component.data.tags = e.map(tag => tag.value)}},boolAttrs:{multiple:true},attrs:{name:`${(`tagsIds[]`).toInputName()}`,label:'Tags',required:''},style:{position:'top'}});
ec('div');
let elV36hu = eo('div',null,null,`class`,`col-6`);
let elcbMo3 = eo('label',null,null,`for`,`image`);
text(`Post image (Optional)`);
ec('label');
let cmpSz_1 = this._lc('cnDvuIlQ6', {parent:component,parentTop:flkModal,props:{src:component.data.image},attrs:{src:`${component.data.image}`,name:`${(`image`).toInputName()}`,id:'image'}});
ec('div');
ec('div');
let elU91dY = eo('div',null,null,`class`,`text-right`);
let elas8cm = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.preview = true}]}, boolAttrs, {disabled:! component.data.content || Is.empty(component.data.tags) || ! component.data.title},`type`,`button`,`class`,`btn btn-purple bold`);
text(`Next`);
ec('button');
ec('div');
let cndd7bl = component.preview;
this.setState('stupVli', cndd7bl);
if (cndd7bl) { 
let cmpISOF = this._lc('coBqbfx5d', {parent:component,parentTop:flkModal,events:{onclose:function(e) {let $el = this; component.preview = null}},content:(flkModal) => {let cmpU0b6 = this._lc('cQsXP0SKV', {parent:component,parentTop:flkModal,props:{content:component.data.content},state:'stupVli'});
let elExdpT = eo('div',null,null,`class`,`text-right`);
let elcchx1 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Post`);
ec('button');
ec('div');
},attrs:{header:'Post Preview'},state:'stupVli'});
}ec('form');
},attrs:{id:'new-post-modal'}});

                    this.isReadyToGo();
                }
        });