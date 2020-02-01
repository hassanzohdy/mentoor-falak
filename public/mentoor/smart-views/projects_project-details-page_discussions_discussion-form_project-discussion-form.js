_Component({
                selector: 'project-discussion-form',
                c: 'ProjectDiscussionForm', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['record','close','submit','project','getTeamsList','isValidForm','isSending'],
                children: {cwod7AOaV:'flk-dropdown-list'},
                render: function (component) {
                    let cndUpTJ = ! component.record.id;
this.setState('stiCzNz', cndUpTJ);
if (cndUpTJ) { 
let elH4t3U = eo('h1','TTwf');
text(`Open New Discussion`);
ec('h1');
}let el5hag5 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.close()}]},`type`,`button`,`class`,`btn btn-pink float-right bold m-b-2`);
text(`Cancel`);
ec('button');
let elvoe2_ = eo('div',null,null,`class`,`clearfix`);
ec('div');
let el8swmT = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el8swmT.formHandler) {
                    window.cfrmdlr = el8swmT.formHandler = new FormHandler(el8swmT, component);
                } else {
                    window.cfrmdlr = el8swmT.formHandler;
                }
            let el1Y6Pl = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el1Y6Pl.value = fval(component.project.id);
let elx8FAJ = eo('div',null,null,`class`,`form-group`);
elx8FAJ.cls = {'group-error': !!el8swmT.formHandler.getError(`title`) };

            for (let className in elx8FAJ.cls) {
                elx8FAJ.classList.toggle(className, elx8FAJ.cls[className]);
            }  
            let el2F52J = eo('label',null,null,`for`,`title`);
text(trans('Discussion Title'));
let elkg5ad = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elDbfrV = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el8swmT.formHandler.addError(`title`, 'required', trans('validation.required'));}return el8swmT.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Discussion Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elDbfrV.value = fval(component.record.title);
let cndQx3w = el8swmT.formHandler.getError(`title`);
this.setState('st1grNX', cndQx3w);
if (cndQx3w) { 
let ele221p = eo('div','hrNf',null,`class`,`alert alert-danger`);
text(el8swmT.formHandler.getError(`title`));
ec('div');
}ec('div');
let cmpGpww = this._lc('cwod7AOaV', {parent:component,props:{value:Object.get(component.record.team, 'id', ''),items:component.getTeamsList(),none:true},attrs:{name:`${(`team`).toInputName()}`,label:'Team'}});
let el4FsPX = eo('div',null,null,`class`,`form-group`);
el4FsPX.cls = {'group-error': !!el8swmT.formHandler.getError(`discussion`) };

            for (let className in el4FsPX.cls) {
                el4FsPX.classList.toggle(className, el4FsPX.cls[className]);
            }  
            let elXh_Ns = eo('label',null,null,`for`,`discussion`);
text(trans('Discussion Content'));
let elnSQPx = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elVpDU_ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.discussion = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el8swmT.formHandler.addError(`discussion`, 'required', trans('validation.required'));}return el8swmT.formHandler.removeError(`discussion`);}]},`value`,`${fval(component.record.discussion)}`,`name`,`${(`discussion`).toInputName()}`,`placeholder`,`${trans(`Discussion Content`)}`,`type`,`textarea`,`rows`,`15`,`class`,`form-control`,`id`,`discussion`);
elVpDU_.value = fval(component.record.discussion);
ec('textarea');
let cndarLT = el8swmT.formHandler.getError(`discussion`);
this.setState('st4hBQQ', cndarLT);
if (cndarLT) { 
let ellCKX5 = eo('div','XTCf',null,`class`,`alert alert-danger`);
text(el8swmT.formHandler.getError(`discussion`));
ec('div');
}ec('div');
let eli36Hn = eo('div',null,null,`class`,`m-t-1 text-right`);
let el1Howu = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');

                    this.isReadyToGo();
                }
        });