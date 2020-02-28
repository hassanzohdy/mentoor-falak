_Component({
                selector: 'new-course-page',
                c: 'NewCoursePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['submit','data','isValidForm','isLoading'],
                children: {c4YT8r5ZJ:'flk-dropdown-list',cV5MCeLNK:'markdown-input',cvSeaxJZS:'flk-image-input',cFx83lo2E:'layout'},
                render: function (component) {
                    let cmpsaEv = this._lc('cFx83lo2E', {parent:component,content:(layout) => {let elplXgh = eo('h1');
text(`Add new course`);
ec('h1');
let el0SU54 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});
component.form = el0SU54;

                if (! el0SU54.formHandler) {
                    window.cfrmdlr = el0SU54.formHandler = new FormHandler(el0SU54, component);
                } else {
                    window.cfrmdlr = el0SU54.formHandler;
                }
            let elS9eaj = eo('div');
let elhYOpH = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el0SU54.formHandler.getError(`title`) })}`);
let el0ejxy = eo('label',null,null,`for`,`title`);
text(trans('Course Title'));
let cndxrfq = true;
this.setState('stnR991', cndxrfq);
if (cndxrfq) { 
let el3saNr = eo('span','oWEf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elS56Fk = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.title = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return el0SU54.formHandler.addError(`title`, 'required', trans('validation.required'));}return el0SU54.formHandler.removeError(`title`);}]},`value`,`${fval(component.data.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Course Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elS56Fk.value = fval(component.data.title);
let cndhHHy = el0SU54.formHandler.getError(`title`);
this.setState('stRpvGt', cndhHHy);
if (cndhHHy) { 
let elCeyfd = eo('div','4_Bf',null,`class`,`alert alert-danger`);
text(el0SU54.formHandler.getError(`title`));
ec('div');
}ec('div');
let elZvouU = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el0SU54.formHandler.getError(`price`) })}`);
let el1vFX7 = eo('label',null,null,`for`,`price`);
text(trans('Course Price (In Gold, i.e 500000)'));
let cndFPvH = true;
this.setState('stsJJt5', cndFPvH);
if (cndFPvH) { 
let elq5L5n = eo('span','ttdf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let el_iZXO = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.price = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return el0SU54.formHandler.addError(`price`, 'required', trans('validation.required'));}return el0SU54.formHandler.removeError(`price`);}]},`value`,`${fval(component.data.price)}`,`name`,`${(`price`).toInputName()}`,`placeholder`,`${trans(`Course Price (In Gold, i.e 500000)`)}`,`type`,`number`,`class`,`form-control`,`id`,`price`);
el_iZXO.value = fval(component.data.price);
let cndeKuF = el0SU54.formHandler.getError(`price`);
this.setState('stOUf5t', cndeKuF);
if (cndeKuF) { 
let elbkpja = eo('div','LWYf',null,`class`,`alert alert-danger`);
text(el0SU54.formHandler.getError(`price`));
ec('div');
}ec('div');
let elhlHxY = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el0SU54.formHandler.getError(`shortDescription`) })}`);
let elqjh5S = eo('label',null,null,`for`,`shortDescription`);
text(trans('Short Description About the course'));
let cndQIBY = true;
this.setState('staS9m6', cndQIBY);
if (cndQIBY) { 
let elHS9ve = eo('span','1Rmf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elARhUB = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.shortDescription = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return el0SU54.formHandler.addError(`shortDescription`, 'required', trans('validation.required'));}return el0SU54.formHandler.removeError(`shortDescription`);}]},`value`,`${fval(component.data.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Short Description About the course`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`shortDescription`);
elARhUB.value = fval(component.data.shortDescription);
ec('textarea');
let cnd41z_ = el0SU54.formHandler.getError(`shortDescription`);
this.setState('stscZAZ', cnd41z_);
if (cnd41z_) { 
let elBbait = eo('div','CFnf',null,`class`,`alert alert-danger`);
text(el0SU54.formHandler.getError(`shortDescription`));
ec('div');
}ec('div');
let cmpzDhM = this._lc('c4YT8r5ZJ', {parent:component,parentTop:layout,props:{items:['academic', 'practical', 'both'],value:component.data.type,required:true},attrs:{name:`${(`type`).toInputName()}`,label:'Course Type'}});
let cmpenaH = this._lc('cV5MCeLNK', {parent:component,parentTop:layout,props:{required:true,value:component.data.description},attrs:{name:`${(`description`).toInputName()}`,label:'Course Description'}});
let cmpEuqy = this._lc('cvSeaxJZS', {parent:component,parentTop:layout,props:{required:true,src:component.data.image},attrs:{src:`${component.data.image}`,name:`${(`image`).toInputName()}`,label:'Course Image'}});
let el54FNe = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isLoading},`class`,`bold btn btn-success`);
text(`Create Course`);
ec('button');
ec('div');
ec('form');
}});

                    this.isReadyToGo();
                }
        });