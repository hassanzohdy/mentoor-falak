_Component({
                selector: 'course-section-form',
                c: 'CourseSectionForm', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['event','heading','submit','course','section','isSending'],
                children: {ck2DJUIJc:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('ck2DJUIJc', {parent:component,props:{heading:component.heading},events:{onclose:function(e) {let $el = this; component.event('close')()}},content:(flkModal) => {let elpJrsT = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elpJrsT.formHandler) {
                    window.cfrmdlr = elpJrsT.formHandler = new FormHandler(elpJrsT, component);
                } else {
                    window.cfrmdlr = elpJrsT.formHandler;
                }
            let elqSKGO = ev('input',null,null, eventListeners, {oninput:[function(e) {component.course.id = this.value;}]},`value`,`${fval(component.course.id)}`,`name`,`${(`course`).toInputName()}`,`type`,`hidden`);
elqSKGO.value = fval(component.course.id);
let elqXVrm = eo('div',null,null,`class`,`form-group`);
elqXVrm.cls = {'group-error': !!elpJrsT.formHandler.getError(`title`) };

            for (let className in elqXVrm.cls) {
                elqXVrm.classList.toggle(className, elqXVrm.cls[className]);
            }  
            let elFX075 = eo('label',null,null,`for`,`title`);
text(trans('Section Title'));
let cndEnOb = true;
this.setState('stOsJlF', cndEnOb);
if (cndEnOb) { 
let elQRh5z = eo('span','jCZf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elaTsVA = ev('input',null,null, eventListeners, {oninput:[function(e) {component.section.title = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elpJrsT.formHandler.addError(`title`, 'required', trans('validation.required'));}return elpJrsT.formHandler.removeError(`title`);}]},`value`,`${fval(component.section.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Section Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elaTsVA.value = fval(component.section.title);
let cndTFvs = elpJrsT.formHandler.getError(`title`);
this.setState('stLcko7', cndTFvs);
if (cndTFvs) { 
let elQP10x = eo('div','9Duf',null,`class`,`alert alert-danger`);
text(elpJrsT.formHandler.getError(`title`));
ec('div');
}ec('div');
let elXa5Qh = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn bold btn-primary`);
text(`Save`);
ec('button');
ec('form');
},attrs:{size:'small'}});

                    this.isReadyToGo();
                }
        });