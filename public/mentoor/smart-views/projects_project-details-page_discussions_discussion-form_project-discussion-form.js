_Component({
                selector: 'project-discussion-form',
                c: 'ProjectDiscussionForm', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['record','close','submit','project','getTeamsList','isValidForm','isSending'],
                children: {cSTWYGZBk:'flk-dropdown-list',c5Ga9PF9J:'markdown-input'},
                render: function (component) {
                    let cndlfOr = ! component.record.id;
this.setState('st1MIFM', cndlfOr);
if (cndlfOr) { 
let el_QwjW = eo('h1','f07f');
text(`Open New Discussion`);
ec('h1');
}let elC_nmW = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.close()}]},`type`,`button`,`class`,`btn btn-pink float-right bold m-b-2`);
text(`Cancel`);
ec('button');
let el7hWjK = eo('div',null,null,`class`,`clearfix`);
ec('div');
let elOSS5a = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elOSS5a.formHandler) {
                    window.cfrmdlr = elOSS5a.formHandler = new FormHandler(elOSS5a, component);
                } else {
                    window.cfrmdlr = elOSS5a.formHandler;
                }
            let elYD3aZ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elYD3aZ.value = fval(component.project.id);
let eltcWvr = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elOSS5a.formHandler.getError(`title`) })}`);
let elUJiPY = eo('label',null,null,`for`,`title`);
text(trans('Discussion Title'));
let el717vg = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elz6H4u = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elOSS5a.formHandler.addError(`title`, 'required', trans('validation.required'));}return elOSS5a.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Discussion Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elz6H4u.value = fval(component.record.title);
let cndeSsK = elOSS5a.formHandler.getError(`title`);
this.setState('stF2jwB', cndeSsK);
if (cndeSsK) { 
let el7H0YN = eo('div','QJ5f',null,`class`,`alert alert-danger`);
text(elOSS5a.formHandler.getError(`title`));
ec('div');
}ec('div');
let cmpVla9 = this._lc('cSTWYGZBk', {parent:component,props:{value:Object.get(component.record.team, 'id', ''),items:component.getTeamsList(),none:true},attrs:{name:`${(`team`).toInputName()}`,label:'Team'}});
let el9IFWS = eo('div',null,null,`class`,`m-t-1`);
let cmp5RX4 = this._lc('c5Ga9PF9J', {parent:component,props:{value:component.record.discussion,required:true},attrs:{name:`${(`discussion`).toInputName()}`,label:'Discussion Content'}});
ec('div');
let eldlMXJ = eo('div',null,null,`class`,`m-t-1 text-right`);
let elve_yw = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');

                    this.isReadyToGo();
                }
        });