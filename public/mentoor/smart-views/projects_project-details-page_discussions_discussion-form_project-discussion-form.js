_Component({
                selector: 'project-discussion-form',
                c: 'ProjectDiscussionForm', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['record','close','submit','project','getTeamsList','isValidForm','isSending'],
                children: {cHsMOfPbW:'flk-dropdown-list',c94c0ZEj6:'markdown-input'},
                render: function (component) {
                    let cnd4IBk = ! component.record.id;
this.setState('stePJto', cnd4IBk);
if (cnd4IBk) { 
let elRQacU = eo('h1','aO5f');
text(`Open New Discussion`);
ec('h1');
}let elojomC = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.close()}]},`type`,`button`,`class`,`btn btn-pink float-right bold m-b-2`);
text(`Cancel`);
ec('button');
let elmWKfn = eo('div',null,null,`class`,`clearfix`);
ec('div');
let elwoMdQ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elwoMdQ.formHandler) {
                    window.cfrmdlr = elwoMdQ.formHandler = new FormHandler(elwoMdQ, component);
                } else {
                    window.cfrmdlr = elwoMdQ.formHandler;
                }
            let elpXj7Y = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elpXj7Y.value = fval(component.project.id);
let eleelL0 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elwoMdQ.formHandler.getError(`title`) })}`);
let elQ7nbe = eo('label',null,null,`for`,`title`);
text(trans('Discussion Title'));
let el6y2il = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elFhP9g = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elwoMdQ.formHandler.addError(`title`, 'required', trans('validation.required'));}return elwoMdQ.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Discussion Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elFhP9g.value = fval(component.record.title);
let cnd_ZSE = elwoMdQ.formHandler.getError(`title`);
this.setState('stNtwB4', cnd_ZSE);
if (cnd_ZSE) { 
let elwAcRr = eo('div','bKff',null,`class`,`alert alert-danger`);
text(elwoMdQ.formHandler.getError(`title`));
ec('div');
}ec('div');
let cmpjbXw = this._lc('cHsMOfPbW', {parent:component,props:{value:Object.get(component.record.team, 'id', ''),items:component.getTeamsList(),none:true},attrs:{name:`${(`team`).toInputName()}`,label:'Team'}});
let elYbY_Z = eo('div',null,null,`class`,`m-t-1`);
let cmpBlsR = this._lc('c94c0ZEj6', {parent:component,props:{value:component.record.discussion,required:true},attrs:{name:`${(`discussion`).toInputName()}`,label:'Discussion Content'}});
ec('div');
let elV3Fk1 = eo('div',null,null,`class`,`m-t-1 text-right`);
let el1lDSv = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');

                    this.isReadyToGo();
                }
        });