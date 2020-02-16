_Component({
                selector: 'new-course-page',
                c: 'NewCoursePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['submit','data','isValidForm','isLoading'],
                children: {cO_iRiivC:'flk-dropdown-list',cFKHzollt:'markdown-input',cLbwgr71w:'flk-image-input',cvGtGOZAA:'layout'},
                render: function (component) {
                    let cmpdAdn = this._lc('cvGtGOZAA', {parent:component,content:(layout) => {let elSwZPs = eo('h1');
text(`Add new course`);
ec('h1');
let elNjzPu = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});
component.form = elNjzPu;

                if (! elNjzPu.formHandler) {
                    window.cfrmdlr = elNjzPu.formHandler = new FormHandler(elNjzPu, component);
                } else {
                    window.cfrmdlr = elNjzPu.formHandler;
                }
            let el3gaHm = eo('div');
let eliL7Ac = eo('div',null,null,`class`,`form-group`);
eliL7Ac.cls = {'group-error': !!elNjzPu.formHandler.getError(`title`) };

            for (let className in eliL7Ac.cls) {
                eliL7Ac.classList.toggle(className, eliL7Ac.cls[className]);
            }  
            let elOLPw2 = eo('label',null,null,`for`,`title`);
text(trans('Course Title'));
let cndQYjR = true;
this.setState('st4S2eQ', cndQYjR);
if (cndQYjR) { 
let elTFsDp = eo('span','7S3f',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elx12vS = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.title = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elNjzPu.formHandler.addError(`title`, 'required', trans('validation.required'));}return elNjzPu.formHandler.removeError(`title`);}]},`value`,`${fval(component.data.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Course Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elx12vS.value = fval(component.data.title);
let cndvbqx = elNjzPu.formHandler.getError(`title`);
this.setState('stmXTR7', cndvbqx);
if (cndvbqx) { 
let el4xIwg = eo('div','Swgf',null,`class`,`alert alert-danger`);
text(elNjzPu.formHandler.getError(`title`));
ec('div');
}ec('div');
let elLXExu = eo('div',null,null,`class`,`form-group`);
elLXExu.cls = {'group-error': !!elNjzPu.formHandler.getError(`price`) };

            for (let className in elLXExu.cls) {
                elLXExu.classList.toggle(className, elLXExu.cls[className]);
            }  
            let elrbWsw = eo('label',null,null,`for`,`price`);
text(trans('Course Price (In Gold, i.e 500000)'));
let cndkpFz = true;
this.setState('stwwreF', cndkpFz);
if (cndkpFz) { 
let elW9xwq = eo('span','rTjf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elF7Q9j = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.price = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elNjzPu.formHandler.addError(`price`, 'required', trans('validation.required'));}return elNjzPu.formHandler.removeError(`price`);}]},`value`,`${fval(component.data.price)}`,`name`,`${(`price`).toInputName()}`,`placeholder`,`${trans(`Course Price (In Gold, i.e 500000)`)}`,`type`,`number`,`class`,`form-control`,`id`,`price`);
elF7Q9j.value = fval(component.data.price);
let cndTrh4 = elNjzPu.formHandler.getError(`price`);
this.setState('stYuA41', cndTrh4);
if (cndTrh4) { 
let el5a0w5 = eo('div','sYHf',null,`class`,`alert alert-danger`);
text(elNjzPu.formHandler.getError(`price`));
ec('div');
}ec('div');
let elksKT7 = eo('div',null,null,`class`,`form-group`);
elksKT7.cls = {'group-error': !!elNjzPu.formHandler.getError(`shortDescription`) };

            for (let className in elksKT7.cls) {
                elksKT7.classList.toggle(className, elksKT7.cls[className]);
            }  
            let elsQ9Th = eo('label',null,null,`for`,`shortDescription`);
text(trans('Short Description About the course'));
let cnd0kO8 = true;
this.setState('stopozG', cnd0kO8);
if (cnd0kO8) { 
let elIb1uA = eo('span','V8wf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elH_78q = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.shortDescription = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elNjzPu.formHandler.addError(`shortDescription`, 'required', trans('validation.required'));}return elNjzPu.formHandler.removeError(`shortDescription`);}]},`value`,`${fval(component.data.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Short Description About the course`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`shortDescription`);
elH_78q.value = fval(component.data.shortDescription);
ec('textarea');
let cndpEOI = elNjzPu.formHandler.getError(`shortDescription`);
this.setState('stS3Ye_', cndpEOI);
if (cndpEOI) { 
let elbzCKE = eo('div','6yMf',null,`class`,`alert alert-danger`);
text(elNjzPu.formHandler.getError(`shortDescription`));
ec('div');
}ec('div');
let cmpdXqD = this._lc('cO_iRiivC', {parent:component,parentTop:layout,props:{items:['academic', 'practical', 'both'],value:component.data.type,required:true},attrs:{name:`${(`type`).toInputName()}`,label:'Course Type'}});
let cmpX0wN = this._lc('cFKHzollt', {parent:component,parentTop:layout,props:{required:true,value:component.data.description},attrs:{name:`${(`description`).toInputName()}`,label:'Course Description'}});
let cmpVtJq = this._lc('cLbwgr71w', {parent:component,parentTop:layout,props:{required:true,src:component.data.image},attrs:{src:`${component.data.image}`,name:`${(`image`).toInputName()}`,label:'Course Image'}});
let elrVumI = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isLoading},`class`,`bold btn btn-success`);
text(`Create Course`);
ec('button');
ec('div');
ec('form');
}});

                    this.isReadyToGo();
                }
        });