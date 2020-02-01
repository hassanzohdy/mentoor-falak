_Component({
                selector: 'project-discussion-form',
                c: 'ProjectDiscussionForm', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['record','close','submit','project','getTeamsList','isValidForm','isSending'],
                children: {cPDsW38r7:'flk-dropdown-list'},
                render: function (component) {
                    let cndrtKw = ! component.record.id;
this.setState('stXt9xg', cndrtKw);
if (cndrtKw) { 
let els11NY = eo('h1','wGjf');
text(`Open New Discussion`);
ec('h1');
}let elB2aF5 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.close()}]},`type`,`button`,`class`,`btn btn-pink float-right bold m-b-2`);
text(`Cancel`);
ec('button');
let elT5haw = eo('div',null,null,`class`,`clearfix`);
ec('div');
let elM1trM = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elM1trM.formHandler) {
                    window.cfrmdlr = elM1trM.formHandler = new FormHandler(elM1trM, component);
                } else {
                    window.cfrmdlr = elM1trM.formHandler;
                }
            let elbyTsO = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elbyTsO.value = fval(component.project.id);
let elZjdSC = eo('div',null,null,`class`,`form-group`);
elZjdSC.cls = {'group-error': !!elM1trM.formHandler.getError(`title`) };

            for (let className in elZjdSC.cls) {
                elZjdSC.classList.toggle(className, elZjdSC.cls[className]);
            }  
            let elfXwbK = eo('label',null,null,`for`,`title`);
text(trans('Discussion Title'));
let elTjx4A = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elA1ylk = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elM1trM.formHandler.addError(`title`, 'required', trans('validation.required'));}return elM1trM.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Discussion Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elA1ylk.value = fval(component.record.title);
let cndMZhB = elM1trM.formHandler.getError(`title`);
this.setState('st2rxnx', cndMZhB);
if (cndMZhB) { 
let elMaPAn = eo('div','Rosf',null,`class`,`alert alert-danger`);
text(elM1trM.formHandler.getError(`title`));
ec('div');
}ec('div');
let cmpHgIi = this._lc('cPDsW38r7', {parent:component,props:{value:Object.get(component.record.team, 'id', ''),items:component.getTeamsList(),none:true},attrs:{name:`${(`team`).toInputName()}`,label:'Team'}});
let ellfKes = eo('div',null,null,`class`,`form-group`);
ellfKes.cls = {'group-error': !!elM1trM.formHandler.getError(`discussion`) };

            for (let className in ellfKes.cls) {
                ellfKes.classList.toggle(className, ellfKes.cls[className]);
            }  
            let elt0rjE = eo('label',null,null,`for`,`discussion`);
text(trans('Discussion Content'));
let ell0TLt = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elgKMKs = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.discussion = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elM1trM.formHandler.addError(`discussion`, 'required', trans('validation.required'));}return elM1trM.formHandler.removeError(`discussion`);}]},`value`,`${fval(component.record.discussion)}`,`name`,`${(`discussion`).toInputName()}`,`placeholder`,`${trans(`Discussion Content`)}`,`type`,`textarea`,`rows`,`15`,`class`,`form-control`,`id`,`discussion`);
elgKMKs.value = fval(component.record.discussion);
ec('textarea');
let cndRINs = elM1trM.formHandler.getError(`discussion`);
this.setState('stpkv_g', cndRINs);
if (cndRINs) { 
let eln2cyF = eo('div','A3Zf',null,`class`,`alert alert-danger`);
text(elM1trM.formHandler.getError(`discussion`));
ec('div');
}ec('div');
let elkNrDc = eo('div',null,null,`class`,`m-t-1 text-right`);
let elPGRJl = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');

                    this.isReadyToGo();
                }
        });