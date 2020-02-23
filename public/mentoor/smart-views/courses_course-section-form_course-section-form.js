_Component({
                selector: 'course-section-form',
                c: 'CourseSectionForm', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['event','heading','submit','course','section','isSending'],
                children: {cWVbPIYLa:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cWVbPIYLa', {parent:component,props:{heading:component.heading},events:{onclose:function(e) {let $el = this; component.event('close')()}},content:(flkModal) => {let ellZfMH = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! ellZfMH.formHandler) {
                    window.cfrmdlr = ellZfMH.formHandler = new FormHandler(ellZfMH, component);
                } else {
                    window.cfrmdlr = ellZfMH.formHandler;
                }
            let elmMSPp = ev('input',null,null, eventListeners, {oninput:[function(e) {component.course.id = this.value;}]},`value`,`${fval(component.course.id)}`,`name`,`${(`course`).toInputName()}`,`type`,`hidden`);
elmMSPp.value = fval(component.course.id);
let elkPoID = eo('div',null,null,`class`,`form-group`);
elkPoID.cls = {'group-error': !!ellZfMH.formHandler.getError(`title`) };

            for (let className in elkPoID.cls) {
                elkPoID.classList.toggle(className, elkPoID.cls[className]);
            }  
            let elVjTHP = eo('label',null,null,`for`,`title`);
text(trans('Section Title'));
let cnd0olE = true;
this.setState('stUixVS', cnd0olE);
if (cnd0olE) { 
let elULzFQ = eo('span','UWMf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elUUdKS = ev('input',null,null, eventListeners, {oninput:[function(e) {component.section.title = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return ellZfMH.formHandler.addError(`title`, 'required', trans('validation.required'));}return ellZfMH.formHandler.removeError(`title`);}]},`value`,`${fval(component.section.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Section Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elUUdKS.value = fval(component.section.title);
let cndGski = ellZfMH.formHandler.getError(`title`);
this.setState('st49UYK', cndGski);
if (cndGski) { 
let eloFhsA = eo('div','498f',null,`class`,`alert alert-danger`);
text(ellZfMH.formHandler.getError(`title`));
ec('div');
}ec('div');
let elpKZC_ = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn bold btn-primary`);
text(`Save`);
ec('button');
ec('form');
},attrs:{size:'small'}});

                    this.isReadyToGo();
                }
        });