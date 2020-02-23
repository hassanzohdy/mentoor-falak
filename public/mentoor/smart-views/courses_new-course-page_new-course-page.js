_Component({
                selector: 'new-course-page',
                c: 'NewCoursePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['submit','data','isValidForm','isLoading'],
                children: {crAt52MU6:'flk-dropdown-list',c_1PiwLei:'markdown-input',cMggGbICA:'flk-image-input',cGVlYa6j0:'layout'},
                render: function (component) {
                    let cmpevo2 = this._lc('cGVlYa6j0', {parent:component,content:(layout) => {let elT6sOq = eo('h1');
text(`Add new course`);
ec('h1');
let elvp3lk = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});
component.form = elvp3lk;

                if (! elvp3lk.formHandler) {
                    window.cfrmdlr = elvp3lk.formHandler = new FormHandler(elvp3lk, component);
                } else {
                    window.cfrmdlr = elvp3lk.formHandler;
                }
            let elwKFJo = eo('div');
let elxNiWo = eo('div',null,null,`class`,`form-group`);
elxNiWo.cls = {'group-error': !!elvp3lk.formHandler.getError(`title`) };

            for (let className in elxNiWo.cls) {
                elxNiWo.classList.toggle(className, elxNiWo.cls[className]);
            }  
            let elPUqEo = eo('label',null,null,`for`,`title`);
text(trans('Course Title'));
let cnda0tL = true;
this.setState('stMqj9y', cnda0tL);
if (cnda0tL) { 
let ele1dKy = eo('span','qb9f',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elsOrw3 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.title = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elvp3lk.formHandler.addError(`title`, 'required', trans('validation.required'));}return elvp3lk.formHandler.removeError(`title`);}]},`value`,`${fval(component.data.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Course Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elsOrw3.value = fval(component.data.title);
let cndwOfG = elvp3lk.formHandler.getError(`title`);
this.setState('stgEfkk', cndwOfG);
if (cndwOfG) { 
let elWaLBD = eo('div','Idaf',null,`class`,`alert alert-danger`);
text(elvp3lk.formHandler.getError(`title`));
ec('div');
}ec('div');
let eloDjmS = eo('div',null,null,`class`,`form-group`);
eloDjmS.cls = {'group-error': !!elvp3lk.formHandler.getError(`price`) };

            for (let className in eloDjmS.cls) {
                eloDjmS.classList.toggle(className, eloDjmS.cls[className]);
            }  
            let elyIaXA = eo('label',null,null,`for`,`price`);
text(trans('Course Price (In Gold, i.e 500000)'));
let cndBff0 = true;
this.setState('stRMtCa', cndBff0);
if (cndBff0) { 
let elx6rDn = eo('span','OVvf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elu4WpK = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.price = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elvp3lk.formHandler.addError(`price`, 'required', trans('validation.required'));}return elvp3lk.formHandler.removeError(`price`);}]},`value`,`${fval(component.data.price)}`,`name`,`${(`price`).toInputName()}`,`placeholder`,`${trans(`Course Price (In Gold, i.e 500000)`)}`,`type`,`number`,`class`,`form-control`,`id`,`price`);
elu4WpK.value = fval(component.data.price);
let cndXqPl = elvp3lk.formHandler.getError(`price`);
this.setState('stltHvB', cndXqPl);
if (cndXqPl) { 
let elVgOgE = eo('div','Zf_f',null,`class`,`alert alert-danger`);
text(elvp3lk.formHandler.getError(`price`));
ec('div');
}ec('div');
let elB14h5 = eo('div',null,null,`class`,`form-group`);
elB14h5.cls = {'group-error': !!elvp3lk.formHandler.getError(`shortDescription`) };

            for (let className in elB14h5.cls) {
                elB14h5.classList.toggle(className, elB14h5.cls[className]);
            }  
            let el2KrGB = eo('label',null,null,`for`,`shortDescription`);
text(trans('Short Description About the course'));
let cnd5d_6 = true;
this.setState('stX2TzN', cnd5d_6);
if (cnd5d_6) { 
let elySeET = eo('span','a9qf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elGRUqt = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.shortDescription = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elvp3lk.formHandler.addError(`shortDescription`, 'required', trans('validation.required'));}return elvp3lk.formHandler.removeError(`shortDescription`);}]},`value`,`${fval(component.data.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Short Description About the course`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`shortDescription`);
elGRUqt.value = fval(component.data.shortDescription);
ec('textarea');
let cnd7xA8 = elvp3lk.formHandler.getError(`shortDescription`);
this.setState('stVd5qq', cnd7xA8);
if (cnd7xA8) { 
let eln7tGA = eo('div','xDhf',null,`class`,`alert alert-danger`);
text(elvp3lk.formHandler.getError(`shortDescription`));
ec('div');
}ec('div');
let cmp2syh = this._lc('crAt52MU6', {parent:component,parentTop:layout,props:{items:['academic', 'practical', 'both'],value:component.data.type,required:true},attrs:{name:`${(`type`).toInputName()}`,label:'Course Type'}});
let cmpagXn = this._lc('c_1PiwLei', {parent:component,parentTop:layout,props:{required:true,value:component.data.description},attrs:{name:`${(`description`).toInputName()}`,label:'Course Description'}});
let cmpbx9p = this._lc('cMggGbICA', {parent:component,parentTop:layout,props:{required:true,src:component.data.image},attrs:{src:`${component.data.image}`,name:`${(`image`).toInputName()}`,label:'Course Image'}});
let ela5vvc = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isLoading},`class`,`bold btn btn-success`);
text(`Create Course`);
ec('button');
ec('div');
ec('form');
}});

                    this.isReadyToGo();
                }
        });