_Component({
                selector: 'course-section-form',
                c: 'CourseSectionForm', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['event','heading','submit','course','section','isSending'],
                children: {cN_9I63nL:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cN_9I63nL', {parent:component,props:{heading:component.heading},events:{onclose:function(e) {let $el = this; component.event('close')()}},content:(flkModal) => {let elIlqEB = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elIlqEB.formHandler) {
                    window.cfrmdlr = elIlqEB.formHandler = new FormHandler(elIlqEB, component);
                } else {
                    window.cfrmdlr = elIlqEB.formHandler;
                }
            let elTJuhF = ev('input',null,null, eventListeners, {oninput:[function(e) {component.course.id = this.value;}]},`value`,`${fval(component.course.id)}`,`name`,`${(`course`).toInputName()}`,`type`,`hidden`);
elTJuhF.value = fval(component.course.id);
let ellN7Yl = eo('div',null,null,`class`,`form-group`);
ellN7Yl.cls = {'group-error': !!elIlqEB.formHandler.getError(`title`) };

            for (let className in ellN7Yl.cls) {
                ellN7Yl.classList.toggle(className, ellN7Yl.cls[className]);
            }  
            let elqDzrq = eo('label',null,null,`for`,`title`);
text(trans('Section Title'));
let cnd_CM5 = true;
this.setState('stQYLhH', cnd_CM5);
if (cnd_CM5) { 
let elr0nUL = eo('span','GNff',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elBGiHJ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.section.title = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elIlqEB.formHandler.addError(`title`, 'required', trans('validation.required'));}return elIlqEB.formHandler.removeError(`title`);}]},`value`,`${fval(component.section.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Section Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elBGiHJ.value = fval(component.section.title);
let cndMl6V = elIlqEB.formHandler.getError(`title`);
this.setState('stwUcii', cndMl6V);
if (cndMl6V) { 
let elZOY0i = eo('div','Vklf',null,`class`,`alert alert-danger`);
text(elIlqEB.formHandler.getError(`title`));
ec('div');
}ec('div');
let elTfHqC = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn bold btn-primary`);
text(`Save`);
ec('button');
ec('form');
},attrs:{size:'small'}});

                    this.isReadyToGo();
                }
        });