_Component({
                selector: 'project-discussion-form',
                c: 'ProjectDiscussionForm', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['record','close','submit','project','getTeamsList','isValidForm','isSending'],
                children: {cx4sVTXFi:'flk-dropdown-list',cFWYwSEwW:'markdown-input'},
                render: function (component) {
                    let cndMWTs = ! component.record.id;
this.setState('st5h6Kl', cndMWTs);
if (cndMWTs) { 
let elNJ6JC = eo('h1','MJxf');
text(`Open New Discussion`);
ec('h1');
}let elUV5bc = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.close()}]},`type`,`button`,`class`,`btn btn-pink float-right bold m-b-2`);
text(`Cancel`);
ec('button');
let elsKlHV = eo('div',null,null,`class`,`clearfix`);
ec('div');
let elmmKsS = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elmmKsS.formHandler) {
                    window.cfrmdlr = elmmKsS.formHandler = new FormHandler(elmmKsS, component);
                } else {
                    window.cfrmdlr = elmmKsS.formHandler;
                }
            let el44EJB = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el44EJB.value = fval(component.project.id);
let elGbuBp = eo('div',null,null,`class`,`form-group`);
elGbuBp.cls = {'group-error': !!elmmKsS.formHandler.getError(`title`) };

            for (let className in elGbuBp.cls) {
                elGbuBp.classList.toggle(className, elGbuBp.cls[className]);
            }  
            let el_iMGV = eo('label',null,null,`for`,`title`);
text(trans('Discussion Title'));
let elxJkrg = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el1DKRO = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elmmKsS.formHandler.addError(`title`, 'required', trans('validation.required'));}return elmmKsS.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Discussion Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el1DKRO.value = fval(component.record.title);
let cndT8LO = elmmKsS.formHandler.getError(`title`);
this.setState('stFDktI', cndT8LO);
if (cndT8LO) { 
let elvBjH9 = eo('div','rRyf',null,`class`,`alert alert-danger`);
text(elmmKsS.formHandler.getError(`title`));
ec('div');
}ec('div');
let cmpjIG6 = this._lc('cx4sVTXFi', {parent:component,props:{value:Object.get(component.record.team, 'id', ''),items:component.getTeamsList(),none:true},attrs:{name:`${(`team`).toInputName()}`,label:'Team'}});
let eljuls7 = eo('div',null,null,`class`,`m-t-1`);
let cmpAm7Z = this._lc('cFWYwSEwW', {parent:component,props:{value:component.record.discussion,required:true},attrs:{name:`${(`discussion`).toInputName()}`,label:'Discussion Content'}});
ec('div');
let elypHgk = eo('div',null,null,`class`,`m-t-1 text-right`);
let elq7ViX = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');

                    this.isReadyToGo();
                }
        });