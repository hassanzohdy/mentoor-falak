_Component({
                selector: 'new-course-page',
                c: 'NewCoursePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['submit','data','isValidForm','isLoading'],
                children: {c192l8EDs:'flk-dropdown-list',cE3_gm8E2:'markdown-input',cSIiytYHb:'flk-image-input',cwZaOdPRg:'layout'},
                render: function (component) {
                    let cmpkA5J = this._lc('cwZaOdPRg', {parent:component,content:(layout) => {let el7aPfG = eo('h1');
text(`Add new course`);
ec('h1');
let elFYa45 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});
component.form = elFYa45;

                if (! elFYa45.formHandler) {
                    window.cfrmdlr = elFYa45.formHandler = new FormHandler(elFYa45, component);
                } else {
                    window.cfrmdlr = elFYa45.formHandler;
                }
            let elFhKS2 = eo('div');
let elyQijh = eo('div',null,null,`class`,`form-group`);
elyQijh.cls = {'group-error': !!elFYa45.formHandler.getError(`title`) };

            for (let className in elyQijh.cls) {
                elyQijh.classList.toggle(className, elyQijh.cls[className]);
            }  
            let elKdefT = eo('label',null,null,`for`,`title`);
text(trans('Course Title'));
let cndnlnX = true;
this.setState('stAAosB', cndnlnX);
if (cndnlnX) { 
let elgexlq = eo('span','1Vsf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elmMQtS = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.title = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elFYa45.formHandler.addError(`title`, 'required', trans('validation.required'));}return elFYa45.formHandler.removeError(`title`);}]},`value`,`${fval(component.data.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Course Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elmMQtS.value = fval(component.data.title);
let cndlFwR = elFYa45.formHandler.getError(`title`);
this.setState('stn36Cu', cndlFwR);
if (cndlFwR) { 
let elRSbNJ = eo('div','I6Lf',null,`class`,`alert alert-danger`);
text(elFYa45.formHandler.getError(`title`));
ec('div');
}ec('div');
let elTeaKa = eo('div',null,null,`class`,`form-group`);
elTeaKa.cls = {'group-error': !!elFYa45.formHandler.getError(`price`) };

            for (let className in elTeaKa.cls) {
                elTeaKa.classList.toggle(className, elTeaKa.cls[className]);
            }  
            let elg_jMR = eo('label',null,null,`for`,`price`);
text(trans('Course Price (In Gold, i.e 500000)'));
let cndTpXU = true;
this.setState('stk3yLc', cndTpXU);
if (cndTpXU) { 
let elHRhzT = eo('span','Xnxf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elJyh7E = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.price = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elFYa45.formHandler.addError(`price`, 'required', trans('validation.required'));}return elFYa45.formHandler.removeError(`price`);}]},`value`,`${fval(component.data.price)}`,`name`,`${(`price`).toInputName()}`,`placeholder`,`${trans(`Course Price (In Gold, i.e 500000)`)}`,`type`,`number`,`class`,`form-control`,`id`,`price`);
elJyh7E.value = fval(component.data.price);
let cndHY7r = elFYa45.formHandler.getError(`price`);
this.setState('st8Zeho', cndHY7r);
if (cndHY7r) { 
let elFHGnk = eo('div','Zluf',null,`class`,`alert alert-danger`);
text(elFYa45.formHandler.getError(`price`));
ec('div');
}ec('div');
let elGvAcX = eo('div',null,null,`class`,`form-group`);
elGvAcX.cls = {'group-error': !!elFYa45.formHandler.getError(`shortDescription`) };

            for (let className in elGvAcX.cls) {
                elGvAcX.classList.toggle(className, elGvAcX.cls[className]);
            }  
            let elZKvMJ = eo('label',null,null,`for`,`shortDescription`);
text(trans('Short Description About the course'));
let cndn4nL = true;
this.setState('st0GCpk', cndn4nL);
if (cndn4nL) { 
let elDg0s4 = eo('span','O6_f',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elGvqCe = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.shortDescription = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elFYa45.formHandler.addError(`shortDescription`, 'required', trans('validation.required'));}return elFYa45.formHandler.removeError(`shortDescription`);}]},`value`,`${fval(component.data.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Short Description About the course`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`shortDescription`);
elGvqCe.value = fval(component.data.shortDescription);
ec('textarea');
let cndbPnv = elFYa45.formHandler.getError(`shortDescription`);
this.setState('stsAhLV', cndbPnv);
if (cndbPnv) { 
let el89ZYw = eo('div','wrsf',null,`class`,`alert alert-danger`);
text(elFYa45.formHandler.getError(`shortDescription`));
ec('div');
}ec('div');
let cmpmyS1 = this._lc('c192l8EDs', {parent:component,parentTop:layout,props:{items:['academic', 'practical', 'both'],value:component.data.type,required:true},attrs:{name:`${(`type`).toInputName()}`,label:'Course Type'}});
let cmpf_6L = this._lc('cE3_gm8E2', {parent:component,parentTop:layout,props:{required:true,value:component.data.description},attrs:{name:`${(`description`).toInputName()}`,label:'Course Description'}});
let cmpAAPV = this._lc('cSIiytYHb', {parent:component,parentTop:layout,props:{required:true,src:component.data.image},attrs:{src:`${component.data.image}`,name:`${(`image`).toInputName()}`,label:'Course Image'}});
let elq0Z4M = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isLoading},`class`,`bold btn btn-success`);
text(`Create Course`);
ec('button');
ec('div');
ec('form');
}});

                    this.isReadyToGo();
                }
        });