_Component({
                selector: 'course-section-form',
                c: 'CourseSectionForm', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['event','heading','submit','course','section','isSending'],
                children: {cwSWFynkx:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cwSWFynkx', {parent:component,props:{heading:component.heading},events:{onclose:function(e) {let $el = this; component.event('close')()}},content:(flkModal) => {let eljLVCy = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! eljLVCy.formHandler) {
                    window.cfrmdlr = eljLVCy.formHandler = new FormHandler(eljLVCy, component);
                } else {
                    window.cfrmdlr = eljLVCy.formHandler;
                }
            let elwbhQX = ev('input',null,null, eventListeners, {oninput:[function(e) {component.course.id = this.value;}]},`value`,`${fval(component.course.id)}`,`name`,`${(`course`).toInputName()}`,`type`,`hidden`);
elwbhQX.value = fval(component.course.id);
let elTMDbs = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!eljLVCy.formHandler.getError(`title`) })}`);
let elOZyn5 = eo('label',null,null,`for`,`title`);
text(trans('Section Title'));
let cndDsX4 = true;
this.setState('stKe1qd', cndDsX4);
if (cndDsX4) { 
let elHnltq = eo('span','VcCf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let el9E8Oz = ev('input',null,null, eventListeners, {oninput:[function(e) {component.section.title = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return eljLVCy.formHandler.addError(`title`, 'required', trans('validation.required'));}return eljLVCy.formHandler.removeError(`title`);}]},`value`,`${fval(component.section.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Section Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el9E8Oz.value = fval(component.section.title);
let cndKRin = eljLVCy.formHandler.getError(`title`);
this.setState('st8W_JH', cndKRin);
if (cndKRin) { 
let elQJRSS = eo('div','Vv7f',null,`class`,`alert alert-danger`);
text(eljLVCy.formHandler.getError(`title`));
ec('div');
}ec('div');
let elULE9k = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn bold btn-primary`);
text(`Save`);
ec('button');
ec('form');
},attrs:{size:'small'}});

                    this.isReadyToGo();
                }
        });