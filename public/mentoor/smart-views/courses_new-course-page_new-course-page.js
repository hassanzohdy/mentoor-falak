_Component({
                selector: 'new-course-page',
                c: 'NewCoursePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['submit','data','isValidForm','isLoading'],
                children: {c_VT9GSGd:'flk-dropdown-list',cFGZH491J:'markdown-input',cgdonFZCR:'flk-image-input',cuJhb1Upc:'layout'},
                render: function (component) {
                    let cmpwWXK = this._lc('cuJhb1Upc', {parent:component,content:(layout) => {let elQchcA = eo('h1');
text(`Add new course`);
ec('h1');
let elFyZHu = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});
component.form = elFyZHu;

                if (! elFyZHu.formHandler) {
                    window.cfrmdlr = elFyZHu.formHandler = new FormHandler(elFyZHu, component);
                } else {
                    window.cfrmdlr = elFyZHu.formHandler;
                }
            let elC1DjZ = eo('div');
let elJHzqf = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elFyZHu.formHandler.getError(`title`) })}`);
let elkOEn9 = eo('label',null,null,`for`,`title`);
text(trans('Course Title'));
let cndjgVA = true;
this.setState('st5UkEa', cndjgVA);
if (cndjgVA) { 
let elLNHqD = eo('span','8dFf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elI7kkC = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.title = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elFyZHu.formHandler.addError(`title`, 'required', trans('validation.required'));}return elFyZHu.formHandler.removeError(`title`);}]},`value`,`${fval(component.data.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Course Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elI7kkC.value = fval(component.data.title);
let cnd53lE = elFyZHu.formHandler.getError(`title`);
this.setState('stShJUd', cnd53lE);
if (cnd53lE) { 
let el7zkHN = eo('div','Q9Wf',null,`class`,`alert alert-danger`);
text(elFyZHu.formHandler.getError(`title`));
ec('div');
}ec('div');
let elcGLXw = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elFyZHu.formHandler.getError(`price`) })}`);
let elTIBn2 = eo('label',null,null,`for`,`price`);
text(trans('Course Price (In Gold, i.e 500000)'));
let cndNwnv = true;
this.setState('stWpSZk', cndNwnv);
if (cndNwnv) { 
let elc16ab = eo('span','JzCf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elEWS2E = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.price = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elFyZHu.formHandler.addError(`price`, 'required', trans('validation.required'));}return elFyZHu.formHandler.removeError(`price`);}]},`value`,`${fval(component.data.price)}`,`name`,`${(`price`).toInputName()}`,`placeholder`,`${trans(`Course Price (In Gold, i.e 500000)`)}`,`type`,`number`,`class`,`form-control`,`id`,`price`);
elEWS2E.value = fval(component.data.price);
let cndzPSP = elFyZHu.formHandler.getError(`price`);
this.setState('stthAQo', cndzPSP);
if (cndzPSP) { 
let elqMEgT = eo('div','IKVf',null,`class`,`alert alert-danger`);
text(elFyZHu.formHandler.getError(`price`));
ec('div');
}ec('div');
let eldRIJg = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elFyZHu.formHandler.getError(`shortDescription`) })}`);
let elPM665 = eo('label',null,null,`for`,`shortDescription`);
text(trans('Short Description About the course'));
let cndnnr2 = true;
this.setState('stCYg1d', cndnnr2);
if (cndnnr2) { 
let elI0BEA = eo('span','doYf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elixgqt = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.shortDescription = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elFyZHu.formHandler.addError(`shortDescription`, 'required', trans('validation.required'));}return elFyZHu.formHandler.removeError(`shortDescription`);}]},`value`,`${fval(component.data.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Short Description About the course`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`shortDescription`);
elixgqt.value = fval(component.data.shortDescription);
ec('textarea');
let cndRg5e = elFyZHu.formHandler.getError(`shortDescription`);
this.setState('st1mUnm', cndRg5e);
if (cndRg5e) { 
let elXXdCR = eo('div','Banf',null,`class`,`alert alert-danger`);
text(elFyZHu.formHandler.getError(`shortDescription`));
ec('div');
}ec('div');
let cmpz5E1 = this._lc('c_VT9GSGd', {parent:component,parentTop:layout,props:{items:['academic', 'practical', 'both'],value:component.data.type,required:true},attrs:{name:`${(`type`).toInputName()}`,label:'Course Type'}});
let cmps8RE = this._lc('cFGZH491J', {parent:component,parentTop:layout,props:{required:true,value:component.data.description},attrs:{name:`${(`description`).toInputName()}`,label:'Course Description'}});
let cmpg9tt = this._lc('cgdonFZCR', {parent:component,parentTop:layout,props:{required:true,src:component.data.image},attrs:{src:`${component.data.image}`,name:`${(`image`).toInputName()}`,label:'Course Image'}});
let elrMrQU = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isLoading},`class`,`bold btn btn-success`);
text(`Create Course`);
ec('button');
ec('div');
ec('form');
}});

                    this.isReadyToGo();
                }
        });