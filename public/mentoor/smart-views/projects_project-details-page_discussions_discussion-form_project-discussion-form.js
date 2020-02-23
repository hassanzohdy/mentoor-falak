_Component({
                selector: 'project-discussion-form',
                c: 'ProjectDiscussionForm', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['record','close','submit','project','getTeamsList','isValidForm','isSending'],
                children: {c0LRr92pZ:'flk-dropdown-list',ct6RbGvKM:'markdown-input'},
                render: function (component) {
                    let cndLUyV = ! component.record.id;
this.setState('stuIqFd', cndLUyV);
if (cndLUyV) { 
let elRuNKc = eo('h1','cqzf');
text(`Open New Discussion`);
ec('h1');
}let elXE8jq = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.close()}]},`type`,`button`,`class`,`btn btn-pink float-right bold m-b-2`);
text(`Cancel`);
ec('button');
let elW_aL4 = eo('div',null,null,`class`,`clearfix`);
ec('div');
let elfp9EJ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elfp9EJ.formHandler) {
                    window.cfrmdlr = elfp9EJ.formHandler = new FormHandler(elfp9EJ, component);
                } else {
                    window.cfrmdlr = elfp9EJ.formHandler;
                }
            let elOCTQn = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elOCTQn.value = fval(component.project.id);
let elCxUYN = eo('div',null,null,`class`,`form-group`);
elCxUYN.cls = {'group-error': !!elfp9EJ.formHandler.getError(`title`) };

            for (let className in elCxUYN.cls) {
                elCxUYN.classList.toggle(className, elCxUYN.cls[className]);
            }  
            let elSgxO_ = eo('label',null,null,`for`,`title`);
text(trans('Discussion Title'));
let el9usuz = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elz5tj4 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elfp9EJ.formHandler.addError(`title`, 'required', trans('validation.required'));}return elfp9EJ.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Discussion Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elz5tj4.value = fval(component.record.title);
let cndAY7u = elfp9EJ.formHandler.getError(`title`);
this.setState('stcWmu1', cndAY7u);
if (cndAY7u) { 
let elJxoik = eo('div','9vTf',null,`class`,`alert alert-danger`);
text(elfp9EJ.formHandler.getError(`title`));
ec('div');
}ec('div');
let cmpTWMS = this._lc('c0LRr92pZ', {parent:component,props:{value:Object.get(component.record.team, 'id', ''),items:component.getTeamsList(),none:true},attrs:{name:`${(`team`).toInputName()}`,label:'Team'}});
let elA9oh_ = eo('div',null,null,`class`,`m-t-1`);
let cmpvqEQ = this._lc('ct6RbGvKM', {parent:component,props:{value:component.record.discussion,required:true},attrs:{name:`${(`discussion`).toInputName()}`,label:'Discussion Content'}});
ec('div');
let eljUKK2 = eo('div',null,null,`class`,`m-t-1 text-right`);
let elSO3eO = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');

                    this.isReadyToGo();
                }
        });