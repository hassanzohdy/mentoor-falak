_Component({
                selector: 'new-course-page',
                c: 'NewCoursePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['submit','data','isValidForm','isLoading'],
                children: {cdGyFu9Bf:'flk-dropdown-list',c2WVX0cnf:'markdown-input',c4OfD7keH:'flk-image-input',cjyrvoQet:'layout'},
                render: function (component) {
                    let cmptTbV = this._lc('cjyrvoQet', {parent:component,content:(layout) => {let elF4kQh = eo('h1');
text(`Add new course`);
ec('h1');
let elyw2ES = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});
component.form = elyw2ES;

                if (! elyw2ES.formHandler) {
                    window.cfrmdlr = elyw2ES.formHandler = new FormHandler(elyw2ES, component);
                } else {
                    window.cfrmdlr = elyw2ES.formHandler;
                }
            let el7kvGc = eo('div');
let elmhdLZ = eo('div',null,null,`class`,`form-group`);
elmhdLZ.cls = {'group-error': !!elyw2ES.formHandler.getError(`title`) };

            for (let className in elmhdLZ.cls) {
                elmhdLZ.classList.toggle(className, elmhdLZ.cls[className]);
            }  
            let elmrmei = eo('label',null,null,`for`,`title`);
text(trans('Course Title'));
let cndjc2G = true;
this.setState('stX2v96', cndjc2G);
if (cndjc2G) { 
let elDGQtc = eo('span','GYvf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let el7SefE = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.title = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elyw2ES.formHandler.addError(`title`, 'required', trans('validation.required'));}return elyw2ES.formHandler.removeError(`title`);}]},`value`,`${fval(component.data.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Course Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el7SefE.value = fval(component.data.title);
let cndPPFb = elyw2ES.formHandler.getError(`title`);
this.setState('stErIuL', cndPPFb);
if (cndPPFb) { 
let el12Wqp = eo('div','QSUf',null,`class`,`alert alert-danger`);
text(elyw2ES.formHandler.getError(`title`));
ec('div');
}ec('div');
let elqDr8f = eo('div',null,null,`class`,`form-group`);
elqDr8f.cls = {'group-error': !!elyw2ES.formHandler.getError(`price`) };

            for (let className in elqDr8f.cls) {
                elqDr8f.classList.toggle(className, elqDr8f.cls[className]);
            }  
            let elgprou = eo('label',null,null,`for`,`price`);
text(trans('Course Price (In Gold, i.e 500000)'));
let cndS0Hh = true;
this.setState('sttUdKS', cndS0Hh);
if (cndS0Hh) { 
let elBdRJX = eo('span','Tohf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elBqaqy = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.price = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elyw2ES.formHandler.addError(`price`, 'required', trans('validation.required'));}return elyw2ES.formHandler.removeError(`price`);}]},`value`,`${fval(component.data.price)}`,`name`,`${(`price`).toInputName()}`,`placeholder`,`${trans(`Course Price (In Gold, i.e 500000)`)}`,`type`,`number`,`class`,`form-control`,`id`,`price`);
elBqaqy.value = fval(component.data.price);
let cndZ1z8 = elyw2ES.formHandler.getError(`price`);
this.setState('stUimcs', cndZ1z8);
if (cndZ1z8) { 
let el_5DEo = eo('div','3Vlf',null,`class`,`alert alert-danger`);
text(elyw2ES.formHandler.getError(`price`));
ec('div');
}ec('div');
let elZdrAE = eo('div',null,null,`class`,`form-group`);
elZdrAE.cls = {'group-error': !!elyw2ES.formHandler.getError(`shortDescription`) };

            for (let className in elZdrAE.cls) {
                elZdrAE.classList.toggle(className, elZdrAE.cls[className]);
            }  
            let elLy4MX = eo('label',null,null,`for`,`shortDescription`);
text(trans('Short Description About the course'));
let cnd07Cr = true;
this.setState('stK6qWk', cnd07Cr);
if (cnd07Cr) { 
let el3oOfL = eo('span','csJf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elL_I47 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.shortDescription = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elyw2ES.formHandler.addError(`shortDescription`, 'required', trans('validation.required'));}return elyw2ES.formHandler.removeError(`shortDescription`);}]},`value`,`${fval(component.data.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Short Description About the course`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`shortDescription`);
elL_I47.value = fval(component.data.shortDescription);
ec('textarea');
let cndtNjH = elyw2ES.formHandler.getError(`shortDescription`);
this.setState('stVXrdt', cndtNjH);
if (cndtNjH) { 
let elZ4_g_ = eo('div','nKUf',null,`class`,`alert alert-danger`);
text(elyw2ES.formHandler.getError(`shortDescription`));
ec('div');
}ec('div');
let cmp8YL7 = this._lc('cdGyFu9Bf', {parent:component,parentTop:layout,props:{items:['academic', 'practical', 'both'],value:component.data.type,required:true},attrs:{name:`${(`type`).toInputName()}`,label:'Course Type'}});
let cmpIHiS = this._lc('c2WVX0cnf', {parent:component,parentTop:layout,props:{required:true,value:component.data.description},attrs:{name:`${(`description`).toInputName()}`,label:'Course Description'}});
let cmpe13I = this._lc('c4OfD7keH', {parent:component,parentTop:layout,props:{required:true,src:component.data.image},attrs:{src:`${component.data.image}`,name:`${(`image`).toInputName()}`,label:'Course Image'}});
let elELWnJ = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isLoading},`class`,`bold btn btn-success`);
text(`Create Course`);
ec('button');
ec('div');
ec('form');
}});

                    this.isReadyToGo();
                }
        });