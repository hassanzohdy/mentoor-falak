_Component({
                selector: 'new-course-page',
                c: 'NewCoursePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['submit','data','isValidForm','isLoading'],
                children: {czgaOWov5:'flk-dropdown-list',cK0TBYMW8:'markdown-input',cskPTRAl1:'flk-image-input',c7PsRFm1h:'layout'},
                render: function (component) {
                    let cmpxll_ = this._lc('c7PsRFm1h', {parent:component,content:(layout) => {let el1cWOD = eo('h1');
text(`Add new course`);
ec('h1');
let elFkrdU = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});
component.form = elFkrdU;

                if (! elFkrdU.formHandler) {
                    window.cfrmdlr = elFkrdU.formHandler = new FormHandler(elFkrdU, component);
                } else {
                    window.cfrmdlr = elFkrdU.formHandler;
                }
            let elz3wv3 = eo('div');
let elV3X8b = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elFkrdU.formHandler.getError(`title`) })}`);
let elWMDcV = eo('label',null,null,`for`,`title`);
text(trans('Course Title'));
let cndPXqm = true;
this.setState('stArgZg', cndPXqm);
if (cndPXqm) { 
let eloKMt8 = eo('span','EyTf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elazs3y = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.title = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elFkrdU.formHandler.addError(`title`, 'required', trans('validation.required'));}return elFkrdU.formHandler.removeError(`title`);}]},`value`,`${fval(component.data.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Course Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elazs3y.value = fval(component.data.title);
let cnd6ESh = elFkrdU.formHandler.getError(`title`);
this.setState('st2uO6Y', cnd6ESh);
if (cnd6ESh) { 
let elWXC1Y = eo('div','HcGf',null,`class`,`alert alert-danger`);
text(elFkrdU.formHandler.getError(`title`));
ec('div');
}ec('div');
let elrzFOk = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elFkrdU.formHandler.getError(`price`) })}`);
let elDnn99 = eo('label',null,null,`for`,`price`);
text(trans('Course Price (In Gold, i.e 500000)'));
let cndmpOv = true;
this.setState('stulzzu', cndmpOv);
if (cndmpOv) { 
let eldg4Gw = eo('span','B7cf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elQPMPi = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.price = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elFkrdU.formHandler.addError(`price`, 'required', trans('validation.required'));}return elFkrdU.formHandler.removeError(`price`);}]},`value`,`${fval(component.data.price)}`,`name`,`${(`price`).toInputName()}`,`placeholder`,`${trans(`Course Price (In Gold, i.e 500000)`)}`,`type`,`number`,`class`,`form-control`,`id`,`price`);
elQPMPi.value = fval(component.data.price);
let cndC62r = elFkrdU.formHandler.getError(`price`);
this.setState('styzKIZ', cndC62r);
if (cndC62r) { 
let elJUx3u = eo('div','g8Rf',null,`class`,`alert alert-danger`);
text(elFkrdU.formHandler.getError(`price`));
ec('div');
}ec('div');
let elZt_PC = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elFkrdU.formHandler.getError(`shortDescription`) })}`);
let elJMvP9 = eo('label',null,null,`for`,`shortDescription`);
text(trans('Short Description About the course'));
let cndAQpw = true;
this.setState('stw_jAi', cndAQpw);
if (cndAQpw) { 
let elQhRIn = eo('span','llAf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elw7Sk5 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.shortDescription = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elFkrdU.formHandler.addError(`shortDescription`, 'required', trans('validation.required'));}return elFkrdU.formHandler.removeError(`shortDescription`);}]},`value`,`${fval(component.data.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Short Description About the course`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`shortDescription`);
elw7Sk5.value = fval(component.data.shortDescription);
ec('textarea');
let cndIUTW = elFkrdU.formHandler.getError(`shortDescription`);
this.setState('st5kqfB', cndIUTW);
if (cndIUTW) { 
let elkA2mP = eo('div','EwZf',null,`class`,`alert alert-danger`);
text(elFkrdU.formHandler.getError(`shortDescription`));
ec('div');
}ec('div');
let cmpV6t5 = this._lc('czgaOWov5', {parent:component,parentTop:layout,props:{items:['academic', 'practical', 'both'],value:component.data.type,required:true},attrs:{name:`${(`type`).toInputName()}`,label:'Course Type'}});
let cmppzuj = this._lc('cK0TBYMW8', {parent:component,parentTop:layout,props:{required:true,value:component.data.description},attrs:{name:`${(`description`).toInputName()}`,label:'Course Description'}});
let cmpjZ6b = this._lc('cskPTRAl1', {parent:component,parentTop:layout,props:{required:true,src:component.data.image},attrs:{src:`${component.data.image}`,name:`${(`image`).toInputName()}`,label:'Course Image'}});
let elNZABN = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isLoading},`class`,`bold btn btn-success`);
text(`Create Course`);
ec('button');
ec('div');
ec('form');
}});

                    this.isReadyToGo();
                }
        });