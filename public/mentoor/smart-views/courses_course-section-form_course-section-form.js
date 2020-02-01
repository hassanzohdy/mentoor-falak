_Component({
                selector: 'course-section-form',
                c: 'CourseSectionForm', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['event','heading','submit','course','section','isSending'],
                children: {cNDlNZoo0:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cNDlNZoo0', {parent:component,props:{heading:component.heading},events:{onclose:function(e) {let $el = this; component.event('close')()}},content:(flkModal) => {let ela5tVt = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! ela5tVt.formHandler) {
                    window.cfrmdlr = ela5tVt.formHandler = new FormHandler(ela5tVt, component);
                } else {
                    window.cfrmdlr = ela5tVt.formHandler;
                }
            let elOkUf2 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.course.id = this.value;}]},`value`,`${fval(component.course.id)}`,`name`,`${(`course`).toInputName()}`,`type`,`hidden`);
elOkUf2.value = fval(component.course.id);
let el7tnOH = eo('div',null,null,`class`,`form-group`);
el7tnOH.cls = {'group-error': !!ela5tVt.formHandler.getError(`title`) };

            for (let className in el7tnOH.cls) {
                el7tnOH.classList.toggle(className, el7tnOH.cls[className]);
            }  
            let elJlDYM = eo('label',null,null,`for`,`title`);
text(trans('Section Title'));
let cndRZ0z = true;
this.setState('staiSzh', cndRZ0z);
if (cndRZ0z) { 
let elZuLkl = eo('span','ucef',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let el15tp7 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.section.title = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return ela5tVt.formHandler.addError(`title`, 'required', trans('validation.required'));}return ela5tVt.formHandler.removeError(`title`);}]},`value`,`${fval(component.section.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Section Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el15tp7.value = fval(component.section.title);
let cnd3IkS = ela5tVt.formHandler.getError(`title`);
this.setState('strN25v', cnd3IkS);
if (cnd3IkS) { 
let el1N1jy = eo('div','DTEf',null,`class`,`alert alert-danger`);
text(ela5tVt.formHandler.getError(`title`));
ec('div');
}ec('div');
let elXgkMc = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn bold btn-primary`);
text(`Save`);
ec('button');
ec('form');
},attrs:{size:'small'}});

                    this.isReadyToGo();
                }
        });