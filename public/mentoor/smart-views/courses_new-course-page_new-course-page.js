_Component({
                selector: 'new-course-page',
                c: 'NewCoursePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['submit','data','isValidForm','isLoading'],
                children: {c6baxfVw8:'flk-dropdown-list',c_F1CMWJ1:'markdown-input',cxgPCBq1p:'flk-image-input',cd76o0gPN:'layout'},
                render: function (component) {
                    let cmpPjoY = this._lc('cd76o0gPN', {parent:component,content:(layout) => {let elhPFGc = eo('h1');
text(`Add new course`);
ec('h1');
let elK60rw = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});
component.form = elK60rw;

                if (! elK60rw.formHandler) {
                    window.cfrmdlr = elK60rw.formHandler = new FormHandler(elK60rw, component);
                } else {
                    window.cfrmdlr = elK60rw.formHandler;
                }
            let elzA2jq = eo('div');
let elyleXp = eo('div',null,null,`class`,`form-group`);
elyleXp.cls = {'group-error': !!elK60rw.formHandler.getError(`title`) };

            for (let className in elyleXp.cls) {
                elyleXp.classList.toggle(className, elyleXp.cls[className]);
            }  
            let elEQjLg = eo('label',null,null,`for`,`title`);
text(trans('Course Title'));
let cndA75H = true;
this.setState('stfrI9j', cndA75H);
if (cndA75H) { 
let elLte8Z = eo('span','3xOf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elkbcCa = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.title = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elK60rw.formHandler.addError(`title`, 'required', trans('validation.required'));}return elK60rw.formHandler.removeError(`title`);}]},`value`,`${fval(component.data.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Course Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elkbcCa.value = fval(component.data.title);
let cndGNnN = elK60rw.formHandler.getError(`title`);
this.setState('sthyFRL', cndGNnN);
if (cndGNnN) { 
let el994qj = eo('div','J12f',null,`class`,`alert alert-danger`);
text(elK60rw.formHandler.getError(`title`));
ec('div');
}ec('div');
let elgQ9In = eo('div',null,null,`class`,`form-group`);
elgQ9In.cls = {'group-error': !!elK60rw.formHandler.getError(`price`) };

            for (let className in elgQ9In.cls) {
                elgQ9In.classList.toggle(className, elgQ9In.cls[className]);
            }  
            let el2KKlu = eo('label',null,null,`for`,`price`);
text(trans('Course Price (In Gold, i.e 500000)'));
let cnd3S_o = true;
this.setState('stQocji', cnd3S_o);
if (cnd3S_o) { 
let elPkuu7 = eo('span','LmHf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elyuwMs = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.price = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elK60rw.formHandler.addError(`price`, 'required', trans('validation.required'));}return elK60rw.formHandler.removeError(`price`);}]},`value`,`${fval(component.data.price)}`,`name`,`${(`price`).toInputName()}`,`placeholder`,`${trans(`Course Price (In Gold, i.e 500000)`)}`,`type`,`number`,`class`,`form-control`,`id`,`price`);
elyuwMs.value = fval(component.data.price);
let cndlsEL = elK60rw.formHandler.getError(`price`);
this.setState('st9TcmR', cndlsEL);
if (cndlsEL) { 
let elczXsj = eo('div','0YVf',null,`class`,`alert alert-danger`);
text(elK60rw.formHandler.getError(`price`));
ec('div');
}ec('div');
let eljAWFf = eo('div',null,null,`class`,`form-group`);
eljAWFf.cls = {'group-error': !!elK60rw.formHandler.getError(`shortDescription`) };

            for (let className in eljAWFf.cls) {
                eljAWFf.classList.toggle(className, eljAWFf.cls[className]);
            }  
            let elPk7rt = eo('label',null,null,`for`,`shortDescription`);
text(trans('Short Description About the course'));
let cndsWCh = true;
this.setState('st44Zrg', cndsWCh);
if (cndsWCh) { 
let elZFQDr = eo('span','OUwf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elCMm3L = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.shortDescription = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elK60rw.formHandler.addError(`shortDescription`, 'required', trans('validation.required'));}return elK60rw.formHandler.removeError(`shortDescription`);}]},`value`,`${fval(component.data.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Short Description About the course`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`shortDescription`);
elCMm3L.value = fval(component.data.shortDescription);
ec('textarea');
let cndF_oj = elK60rw.formHandler.getError(`shortDescription`);
this.setState('stQA8us', cndF_oj);
if (cndF_oj) { 
let elcPmhr = eo('div','piZf',null,`class`,`alert alert-danger`);
text(elK60rw.formHandler.getError(`shortDescription`));
ec('div');
}ec('div');
let cmpC2y4 = this._lc('c6baxfVw8', {parent:component,parentTop:layout,props:{items:['academic', 'practical', 'both'],value:component.data.type,required:true},attrs:{name:`${(`type`).toInputName()}`,label:'Course Type'}});
let cmp_jHg = this._lc('c_F1CMWJ1', {parent:component,parentTop:layout,props:{required:true,value:component.data.description},attrs:{name:`${(`description`).toInputName()}`,label:'Course Description'}});
let cmptVPt = this._lc('cxgPCBq1p', {parent:component,parentTop:layout,props:{required:true,src:component.data.image},attrs:{src:`${component.data.image}`,name:`${(`image`).toInputName()}`,label:'Course Image'}});
let elJSTTo = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isLoading},`class`,`bold btn btn-success`);
text(`Create Course`);
ec('button');
ec('div');
ec('form');
}});

                    this.isReadyToGo();
                }
        });