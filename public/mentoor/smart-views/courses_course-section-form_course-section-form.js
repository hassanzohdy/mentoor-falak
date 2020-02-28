_Component({
                selector: 'course-section-form',
                c: 'CourseSectionForm', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['event','heading','submit','course','section','isSending'],
                children: {cn6ItK5vH:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cn6ItK5vH', {parent:component,props:{heading:component.heading},events:{onclose:function(e) {let $el = this; component.event('close')()}},content:(flkModal) => {let elv9wxy = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elv9wxy.formHandler) {
                    window.cfrmdlr = elv9wxy.formHandler = new FormHandler(elv9wxy, component);
                } else {
                    window.cfrmdlr = elv9wxy.formHandler;
                }
            let elL28L4 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.course.id = this.value;}]},`value`,`${fval(component.course.id)}`,`name`,`${(`course`).toInputName()}`,`type`,`hidden`);
elL28L4.value = fval(component.course.id);
let elMgdwo = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elv9wxy.formHandler.getError(`title`) })}`);
let elXP_cS = eo('label',null,null,`for`,`title`);
text(trans('Section Title'));
let cndJwDQ = true;
this.setState('st3MhdT', cndJwDQ);
if (cndJwDQ) { 
let eljp4xY = eo('span','wtxf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let el8W4cG = ev('input',null,null, eventListeners, {oninput:[function(e) {component.section.title = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elv9wxy.formHandler.addError(`title`, 'required', trans('validation.required'));}return elv9wxy.formHandler.removeError(`title`);}]},`value`,`${fval(component.section.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Section Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el8W4cG.value = fval(component.section.title);
let cndHRih = elv9wxy.formHandler.getError(`title`);
this.setState('st3AoAf', cndHRih);
if (cndHRih) { 
let elaPzp9 = eo('div','APMf',null,`class`,`alert alert-danger`);
text(elv9wxy.formHandler.getError(`title`));
ec('div');
}ec('div');
let el1cl4q = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn bold btn-primary`);
text(`Save`);
ec('button');
ec('form');
},attrs:{size:'small'}});

                    this.isReadyToGo();
                }
        });