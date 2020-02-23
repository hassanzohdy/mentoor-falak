_Component({
                selector: 'project-discussion-form',
                c: 'ProjectDiscussionForm', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['record','close','submit','project','getTeamsList','isValidForm','isSending'],
                children: {c6L92AgtC:'flk-dropdown-list',cB6Ycz1DV:'markdown-input'},
                render: function (component) {
                    let cndJnYf = ! component.record.id;
this.setState('st0arCN', cndJnYf);
if (cndJnYf) { 
let elSXsRj = eo('h1','L8xf');
text(`Open New Discussion`);
ec('h1');
}let el1ziXj = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.close()}]},`type`,`button`,`class`,`btn btn-pink float-right bold m-b-2`);
text(`Cancel`);
ec('button');
let elhzJJ3 = eo('div',null,null,`class`,`clearfix`);
ec('div');
let elRYbVw = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elRYbVw.formHandler) {
                    window.cfrmdlr = elRYbVw.formHandler = new FormHandler(elRYbVw, component);
                } else {
                    window.cfrmdlr = elRYbVw.formHandler;
                }
            let elzlirD = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elzlirD.value = fval(component.project.id);
let el_du_o = eo('div',null,null,`class`,`form-group`);
el_du_o.cls = {'group-error': !!elRYbVw.formHandler.getError(`title`) };

            for (let className in el_du_o.cls) {
                el_du_o.classList.toggle(className, el_du_o.cls[className]);
            }  
            let elRh2Zj = eo('label',null,null,`for`,`title`);
text(trans('Discussion Title'));
let el6M83M = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el4s63l = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elRYbVw.formHandler.addError(`title`, 'required', trans('validation.required'));}return elRYbVw.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Discussion Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el4s63l.value = fval(component.record.title);
let cndjXGx = elRYbVw.formHandler.getError(`title`);
this.setState('stJ2uf4', cndjXGx);
if (cndjXGx) { 
let elaX5I4 = eo('div','zGhf',null,`class`,`alert alert-danger`);
text(elRYbVw.formHandler.getError(`title`));
ec('div');
}ec('div');
let cmpaEUu = this._lc('c6L92AgtC', {parent:component,props:{value:Object.get(component.record.team, 'id', ''),items:component.getTeamsList(),none:true},attrs:{name:`${(`team`).toInputName()}`,label:'Team'}});
let elP30FV = eo('div',null,null,`class`,`m-t-1`);
let cmpoTOc = this._lc('cB6Ycz1DV', {parent:component,props:{value:component.record.discussion,required:true},attrs:{name:`${(`discussion`).toInputName()}`,label:'Discussion Content'}});
ec('div');
let elcBA8h = eo('div',null,null,`class`,`m-t-1 text-right`);
let elSt_ws = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');

                    this.isReadyToGo();
                }
        });