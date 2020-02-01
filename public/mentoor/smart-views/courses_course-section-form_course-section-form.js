_Component({
                selector: 'course-section-form',
                c: 'CourseSectionForm', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['event','heading','submit','course','section','isSending'],
                children: {c9Ar9_VL8:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('c9Ar9_VL8', {parent:component,props:{heading:component.heading},events:{onclose:function(e) {let $el = this; component.event('close')()}},content:(flkModal) => {let elLPZmu = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elLPZmu.formHandler) {
                    window.cfrmdlr = elLPZmu.formHandler = new FormHandler(elLPZmu, component);
                } else {
                    window.cfrmdlr = elLPZmu.formHandler;
                }
            let elBeMuL = ev('input',null,null, eventListeners, {oninput:[function(e) {component.course.id = this.value;}]},`value`,`${fval(component.course.id)}`,`name`,`${(`course`).toInputName()}`,`type`,`hidden`);
elBeMuL.value = fval(component.course.id);
let elFh0Fy = eo('div',null,null,`class`,`form-group`);
elFh0Fy.cls = {'group-error': !!elLPZmu.formHandler.getError(`title`) };

            for (let className in elFh0Fy.cls) {
                elFh0Fy.classList.toggle(className, elFh0Fy.cls[className]);
            }  
            let elNlNkH = eo('label',null,null,`for`,`title`);
text(trans('Section Title'));
let cndCBL3 = true;
this.setState('stc7fyO', cndCBL3);
if (cndCBL3) { 
let el9eOAL = eo('span','zDff',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elyFfP5 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.section.title = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elLPZmu.formHandler.addError(`title`, 'required', trans('validation.required'));}return elLPZmu.formHandler.removeError(`title`);}]},`value`,`${fval(component.section.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Section Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elyFfP5.value = fval(component.section.title);
let cndWnes = elLPZmu.formHandler.getError(`title`);
this.setState('st4Hqz8', cndWnes);
if (cndWnes) { 
let el42ob_ = eo('div','lXhf',null,`class`,`alert alert-danger`);
text(elLPZmu.formHandler.getError(`title`));
ec('div');
}ec('div');
let elIJtxC = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn bold btn-primary`);
text(`Save`);
ec('button');
ec('form');
},attrs:{size:'small'}});

                    this.isReadyToGo();
                }
        });