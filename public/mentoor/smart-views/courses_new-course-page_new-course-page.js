_Component({
                selector: 'new-course-page',
                c: 'NewCoursePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['submit','data','isValidForm','isLoading'],
                children: {c4iABJTjo:'flk-dropdown-list',cb4M_UlqA:'markdown-input',cHBUPbHtE:'flk-image-input',c1lkiRNCX:'layout'},
                render: function (component) {
                    let cmpPYY1 = this._lc('c1lkiRNCX', {parent:component,content:(layout) => {let elb0tsK = eo('h1');
text(`Add new course`);
ec('h1');
let elcDWUb = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});
component.form = elcDWUb;

                if (! elcDWUb.formHandler) {
                    window.cfrmdlr = elcDWUb.formHandler = new FormHandler(elcDWUb, component);
                } else {
                    window.cfrmdlr = elcDWUb.formHandler;
                }
            let elADA4L = eo('div');
let elgJAmr = eo('div',null,null,`class`,`form-group`);
elgJAmr.cls = {'group-error': !!elcDWUb.formHandler.getError(`title`) };

            for (let className in elgJAmr.cls) {
                elgJAmr.classList.toggle(className, elgJAmr.cls[className]);
            }  
            let el5nkRm = eo('label',null,null,`for`,`title`);
text(trans('Course Title'));
let cndTnJH = true;
this.setState('stnKVx9', cndTnJH);
if (cndTnJH) { 
let elgtAqT = eo('span','bjlf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elffwL0 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.title = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elcDWUb.formHandler.addError(`title`, 'required', trans('validation.required'));}return elcDWUb.formHandler.removeError(`title`);}]},`value`,`${fval(component.data.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Course Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elffwL0.value = fval(component.data.title);
let cnddhgI = elcDWUb.formHandler.getError(`title`);
this.setState('stK8Ulq', cnddhgI);
if (cnddhgI) { 
let elXNSdJ = eo('div','yQff',null,`class`,`alert alert-danger`);
text(elcDWUb.formHandler.getError(`title`));
ec('div');
}ec('div');
let el207Qv = eo('div',null,null,`class`,`form-group`);
el207Qv.cls = {'group-error': !!elcDWUb.formHandler.getError(`price`) };

            for (let className in el207Qv.cls) {
                el207Qv.classList.toggle(className, el207Qv.cls[className]);
            }  
            let els7kXD = eo('label',null,null,`for`,`price`);
text(trans('Course Price (In Gold, i.e 500000)'));
let cndR0bE = true;
this.setState('st8NtE_', cndR0bE);
if (cndR0bE) { 
let elHKwCa = eo('span','qODf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elOzvPi = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.price = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elcDWUb.formHandler.addError(`price`, 'required', trans('validation.required'));}return elcDWUb.formHandler.removeError(`price`);}]},`value`,`${fval(component.data.price)}`,`name`,`${(`price`).toInputName()}`,`placeholder`,`${trans(`Course Price (In Gold, i.e 500000)`)}`,`type`,`number`,`class`,`form-control`,`id`,`price`);
elOzvPi.value = fval(component.data.price);
let cnd_0P3 = elcDWUb.formHandler.getError(`price`);
this.setState('stDwndQ', cnd_0P3);
if (cnd_0P3) { 
let elxA2BL = eo('div','wDrf',null,`class`,`alert alert-danger`);
text(elcDWUb.formHandler.getError(`price`));
ec('div');
}ec('div');
let elVaO9u = eo('div',null,null,`class`,`form-group`);
elVaO9u.cls = {'group-error': !!elcDWUb.formHandler.getError(`shortDescription`) };

            for (let className in elVaO9u.cls) {
                elVaO9u.classList.toggle(className, elVaO9u.cls[className]);
            }  
            let el0pddD = eo('label',null,null,`for`,`shortDescription`);
text(trans('Short Description About the course'));
let cnd3cdM = true;
this.setState('stpoUyD', cnd3cdM);
if (cnd3cdM) { 
let elkmxkI = eo('span','h4nf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elmALdP = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.shortDescription = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elcDWUb.formHandler.addError(`shortDescription`, 'required', trans('validation.required'));}return elcDWUb.formHandler.removeError(`shortDescription`);}]},`value`,`${fval(component.data.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Short Description About the course`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`shortDescription`);
elmALdP.value = fval(component.data.shortDescription);
ec('textarea');
let cndDWnE = elcDWUb.formHandler.getError(`shortDescription`);
this.setState('st6jOWo', cndDWnE);
if (cndDWnE) { 
let elmsHPo = eo('div','WdGf',null,`class`,`alert alert-danger`);
text(elcDWUb.formHandler.getError(`shortDescription`));
ec('div');
}ec('div');
let cmphJrw = this._lc('c4iABJTjo', {parent:component,parentTop:layout,props:{items:['academic', 'practical', 'both'],value:component.data.type,required:true},attrs:{name:`${(`type`).toInputName()}`,label:'Course Type'}});
let cmpn7h_ = this._lc('cb4M_UlqA', {parent:component,parentTop:layout,props:{required:true,value:component.data.description},attrs:{name:`${(`description`).toInputName()}`,label:'Course Description'}});
let cmpdGoH = this._lc('cHBUPbHtE', {parent:component,parentTop:layout,props:{required:true,src:component.data.image},attrs:{src:`${component.data.image}`,name:`${(`image`).toInputName()}`,label:'Course Image'}});
let elYuh_u = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isLoading},`class`,`bold btn btn-success`);
text(`Create Course`);
ec('button');
ec('div');
ec('form');
}});

                    this.isReadyToGo();
                }
        });