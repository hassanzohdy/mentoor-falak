_Component({
                selector: 'project-discussion-form',
                c: 'ProjectDiscussionForm', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['record','close','submit','project','getTeamsList','isValidForm','isSending'],
                children: {cRmEzZTNK:'flk-dropdown-list',c9BVWqwMM:'markdown-input'},
                render: function (component) {
                    let cndlvL3 = ! component.record.id;
this.setState('stGnbVC', cndlvL3);
if (cndlvL3) { 
let elYzqQX = eo('h1','N6vf');
text(`Open New Discussion`);
ec('h1');
}let el86Eum = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.close()}]},`type`,`button`,`class`,`btn btn-pink float-right bold m-b-2`);
text(`Cancel`);
ec('button');
let el8HIZ0 = eo('div',null,null,`class`,`clearfix`);
ec('div');
let elY_ugQ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elY_ugQ.formHandler) {
                    window.cfrmdlr = elY_ugQ.formHandler = new FormHandler(elY_ugQ, component);
                } else {
                    window.cfrmdlr = elY_ugQ.formHandler;
                }
            let elEti4C = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elEti4C.value = fval(component.project.id);
let elFfWYw = eo('div',null,null,`class`,`form-group`);
elFfWYw.cls = {'group-error': !!elY_ugQ.formHandler.getError(`title`) };

            for (let className in elFfWYw.cls) {
                elFfWYw.classList.toggle(className, elFfWYw.cls[className]);
            }  
            let elG_BuP = eo('label',null,null,`for`,`title`);
text(trans('Discussion Title'));
let elmgwOL = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elqtMd7 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elY_ugQ.formHandler.addError(`title`, 'required', trans('validation.required'));}return elY_ugQ.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Discussion Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elqtMd7.value = fval(component.record.title);
let cndWJ6f = elY_ugQ.formHandler.getError(`title`);
this.setState('st1MaYd', cndWJ6f);
if (cndWJ6f) { 
let eljcoFG = eo('div','Gkwf',null,`class`,`alert alert-danger`);
text(elY_ugQ.formHandler.getError(`title`));
ec('div');
}ec('div');
let cmpwrZT = this._lc('cRmEzZTNK', {parent:component,props:{value:Object.get(component.record.team, 'id', ''),items:component.getTeamsList(),none:true},attrs:{name:`${(`team`).toInputName()}`,label:'Team'}});
let elaVF9m = eo('div',null,null,`class`,`m-t-1`);
let cmpXESH = this._lc('c9BVWqwMM', {parent:component,props:{value:component.record.discussion,required:true},attrs:{name:`${(`discussion`).toInputName()}`,label:'Discussion Content'}});
ec('div');
let elRI0Cp = eo('div',null,null,`class`,`m-t-1 text-right`);
let elPS7kk = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');

                    this.isReadyToGo();
                }
        });