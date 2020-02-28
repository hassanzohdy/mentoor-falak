_Component({
                selector: 'project-discussion-form',
                c: 'ProjectDiscussionForm', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['record','close','submit','project','getTeamsList','isValidForm','isSending'],
                children: {cuEGwA71y:'flk-dropdown-list',cSEmnXr8E:'markdown-input'},
                render: function (component) {
                    let cnddQfq = ! component.record.id;
this.setState('stws38b', cnddQfq);
if (cnddQfq) { 
let elqZVhN = eo('h1','EJdf');
text(`Open New Discussion`);
ec('h1');
}let elOhfS9 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.close()}]},`type`,`button`,`class`,`btn btn-pink float-right bold m-b-2`);
text(`Cancel`);
ec('button');
let elNngKS = eo('div',null,null,`class`,`clearfix`);
ec('div');
let elG8iV9 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elG8iV9.formHandler) {
                    window.cfrmdlr = elG8iV9.formHandler = new FormHandler(elG8iV9, component);
                } else {
                    window.cfrmdlr = elG8iV9.formHandler;
                }
            let elG7PaQ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elG7PaQ.value = fval(component.project.id);
let elgduWw = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elG8iV9.formHandler.getError(`title`) })}`);
let elcSsul = eo('label',null,null,`for`,`title`);
text(trans('Discussion Title'));
let elt7_Lq = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elC3M7y = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elG8iV9.formHandler.addError(`title`, 'required', trans('validation.required'));}return elG8iV9.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Discussion Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elC3M7y.value = fval(component.record.title);
let cndqxHn = elG8iV9.formHandler.getError(`title`);
this.setState('st3wwHH', cndqxHn);
if (cndqxHn) { 
let elvL0Xy = eo('div','I0If',null,`class`,`alert alert-danger`);
text(elG8iV9.formHandler.getError(`title`));
ec('div');
}ec('div');
let cmpXCDO = this._lc('cuEGwA71y', {parent:component,props:{value:Object.get(component.record.team, 'id', ''),items:component.getTeamsList(),none:true},attrs:{name:`${(`team`).toInputName()}`,label:'Team'}});
let elfeezz = eo('div',null,null,`class`,`m-t-1`);
let cmpc1Hn = this._lc('cSEmnXr8E', {parent:component,props:{value:component.record.discussion,required:true},attrs:{name:`${(`discussion`).toInputName()}`,label:'Discussion Content'}});
ec('div');
let elHhFXG = eo('div',null,null,`class`,`m-t-1 text-right`);
let elMM1DD = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');

                    this.isReadyToGo();
                }
        });