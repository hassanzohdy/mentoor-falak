_Component({
                selector: 'project-project-discussions-page',
                c: 'ProjectProjectDiscussionsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cU46dyy1E:'project-layout',cUAp2zpYu:'flk-modal',ccdFA67wK:'flk-alert'},
                render: function (component) {
                    let cmp9ezh = this._lc('cU46dyy1E', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let ellepz3 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elE3QHt = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Project-discussion`);
ec('button');
let eluH9Mq = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Project-discussions
        (${ component.project.discussions.length })`);
ec('h1');
let elZCvTR = eo('table',null,null,`class`,`table table-striped buttoned`);
let elNI0ba = eo('thead');
let elSkhWE = eo('tr');
let elk3pXv = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elkAeDB = eo('tbody');
let cnd6Uf_ = Is.empty(component.project.discussions);
this.setState('sts7T3a', cnd6Uf_);
let cndvetz = !(cnd6Uf_);
this.setState('stnyjs1', cndvetz);
if (cnd6Uf_) { 
let elQhmnv = eo('tr','8jBf');
let elNuGnC = eo('td','eAIf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Project-discussions Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.projectDiscussions) {
let record = component.project.projectDiscussions[index]; 
 let iiKFTG = 'W9mdGiy' + index;
let elxEzHd = eo('tr','qqjFh5nruABe' + index+iiKFTG);
let elSTJmX = eo('td','Swcff'+iiKFTG);
let el468vZ = eo('button','jvdff'+iiKFTG,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let el_I4H3 = eo('i','zYAff'+iiKFTG,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el468vZ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Project-discussion')}`});
        ;
                    }, 20);                
                let elXroC6 = eo('button','sFdff'+iiKFTG,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elcYQrn = eo('i','Xexff'+iiKFTG,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elXroC6;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Project-discussion')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndGeMb = component.modalIsOpened;
this.setState('stAUSUB', cndGeMb);
if (cndGeMb) { 
component.modal = this._lc('cUAp2zpYu', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elMeCMA = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elMeCMA.formHandler) {
                    window.cfrmdlr = elMeCMA.formHandler = new FormHandler(elMeCMA, component);
                } else {
                    window.cfrmdlr = elMeCMA.formHandler;
                }
            let elNRoxO = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elNRoxO.value = fval(component.project.id);
let el5GaMC = eo('div',null,null,`class`,`form-group`);
el5GaMC.cls = {'group-error': !!elMeCMA.formHandler.getError(`name`) };

            for (let className in el5GaMC.cls) {
                el5GaMC.classList.toggle(className, el5GaMC.cls[className]);
            }  
            let elGzuIr = eo('label',null,null,`for`,`name`);
text(trans('Project-discussion Name'));
let elRX7s1 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elvimDw = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elMeCMA.formHandler.addError(`name`, 'required', trans('validation.required'));}return elMeCMA.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Project-discussion Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elvimDw.value = fval(component.record.name);
let cnd7Amg = elMeCMA.formHandler.getError(`name`);
this.setState('stNr6KC', cnd7Amg);
if (cnd7Amg) { 
let elkxm97 = eo('div','f1Ff',null,`class`,`alert alert-danger`);
text(elMeCMA.formHandler.getError(`name`));
ec('div');
}ec('div');
let elqKjeQ = eo('div',null,null,`class`,`m-t-1 text-center`);
let elH9ea8 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stAUSUB'});
}let cndkx4u = component.confirmDelete;
this.setState('stFQ9et', cndkx4u);
if (cndkx4u) { 
let cmpZMq7 = this._lc('ccdFA67wK', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stFQ9et'});
}
                    this.isReadyToGo();
                }
        });