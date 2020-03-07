_Component({
                selector: 'course-section-form',
                c: 'CourseSectionForm', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['event','heading','submit','course','section','isSending'],
                children: {cRMGKJvQh:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cRMGKJvQh', {parent:component,props:{heading:component.heading},events:{onclose:function(e) {let $el = this; component.event('close')()}},content:(flkModal) => {let elrE5s1 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elrE5s1.formHandler) {
                    window.cfrmdlr = elrE5s1.formHandler = new FormHandler(elrE5s1, component);
                } else {
                    window.cfrmdlr = elrE5s1.formHandler;
                }
            let elU2Z77 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.course.id = this.value;}]},`value`,`${fval(component.course.id)}`,`name`,`${(`course`).toInputName()}`,`type`,`hidden`);
elU2Z77.value = fval(component.course.id);
let elslKHC = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elrE5s1.formHandler.getError(`title`) })}`);
let eln48U6 = eo('label',null,null,`for`,`title`);
text(trans('Section Title'));
let cndDILb = true;
this.setState('ste3_eJ', cndDILb);
if (cndDILb) { 
let eldHtt1 = eo('span','zSpf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elEYZuO = ev('input',null,null, eventListeners, {oninput:[function(e) {component.section.title = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elrE5s1.formHandler.addError(`title`, 'required', trans('validation.required'));}return elrE5s1.formHandler.removeError(`title`);}]},`value`,`${fval(component.section.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Section Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elEYZuO.value = fval(component.section.title);
let cndvRsW = elrE5s1.formHandler.getError(`title`);
this.setState('stzONn8', cndvRsW);
if (cndvRsW) { 
let el7Fgcy = eo('div','jWsf',null,`class`,`alert alert-danger`);
text(elrE5s1.formHandler.getError(`title`));
ec('div');
}ec('div');
let elZxhrU = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn bold btn-primary`);
text(`Save`);
ec('button');
ec('form');
},attrs:{size:'small'}});

                    this.isReadyToGo();
                }
        });