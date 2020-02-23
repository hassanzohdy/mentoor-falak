_Component({
                selector: 'course-section-form',
                c: 'CourseSectionForm', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['event','heading','submit','course','section','isSending'],
                children: {cVu8Yg1CH:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cVu8Yg1CH', {parent:component,props:{heading:component.heading},events:{onclose:function(e) {let $el = this; component.event('close')()}},content:(flkModal) => {let el3KtNh = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el3KtNh.formHandler) {
                    window.cfrmdlr = el3KtNh.formHandler = new FormHandler(el3KtNh, component);
                } else {
                    window.cfrmdlr = el3KtNh.formHandler;
                }
            let el9jKSv = ev('input',null,null, eventListeners, {oninput:[function(e) {component.course.id = this.value;}]},`value`,`${fval(component.course.id)}`,`name`,`${(`course`).toInputName()}`,`type`,`hidden`);
el9jKSv.value = fval(component.course.id);
let elhnigE = eo('div',null,null,`class`,`form-group`);
elhnigE.cls = {'group-error': !!el3KtNh.formHandler.getError(`title`) };

            for (let className in elhnigE.cls) {
                elhnigE.classList.toggle(className, elhnigE.cls[className]);
            }  
            let elA4EsE = eo('label',null,null,`for`,`title`);
text(trans('Section Title'));
let cndnDcZ = true;
this.setState('sthbRBO', cndnDcZ);
if (cndnDcZ) { 
let el5QUyB = eo('span','Wncf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elVR1Jt = ev('input',null,null, eventListeners, {oninput:[function(e) {component.section.title = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return el3KtNh.formHandler.addError(`title`, 'required', trans('validation.required'));}return el3KtNh.formHandler.removeError(`title`);}]},`value`,`${fval(component.section.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Section Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elVR1Jt.value = fval(component.section.title);
let cndfypg = el3KtNh.formHandler.getError(`title`);
this.setState('stEcrLt', cndfypg);
if (cndfypg) { 
let eljJAuh = eo('div','U7Vf',null,`class`,`alert alert-danger`);
text(el3KtNh.formHandler.getError(`title`));
ec('div');
}ec('div');
let elFBmdf = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn bold btn-primary`);
text(`Save`);
ec('button');
ec('form');
},attrs:{size:'small'}});

                    this.isReadyToGo();
                }
        });