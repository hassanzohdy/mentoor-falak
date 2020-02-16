_Component({
                selector: 'project-polls-page',
                c: 'ProjectPollsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {ctOBxWMLa:'project-layout',cb4NuPZX9:'flk-modal',csjD2G24W:'flk-alert'},
                render: function (component) {
                    let cmpuODY = this._lc('ctOBxWMLa', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elrtZPY = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let el9IXtw = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Poll`);
ec('button');
let elgvpTo = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Polls
        (${ component.project.polls.length })`);
ec('h1');
let elHJ6UC = eo('table',null,null,`class`,`table table-striped buttoned`);
let eliHVyz = eo('thead');
let elDXPfO = eo('tr');
let eldGcN9 = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elDnsfx = eo('tbody');
let cndukH5 = Is.empty(component.project.polls);
this.setState('stjiCqz', cndukH5);
let cndlfkM = !(cndukH5);
this.setState('stnjnxM', cndlfkM);
if (cndukH5) { 
let elvaoc8 = eo('tr','TM3f');
let eloHbVY = eo('td','HHbf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Polls Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.polls) {
let record = component.project.polls[index]; 
 let ii2tZF = 'lWkPjhN' + index;
let elXKyCF = eo('tr','NFdjzlkfpL1C' + index+ii2tZF);
let eld1zq_ = eo('td','J5Qff'+ii2tZF);
let el_zV4Y = eo('button','72Pff'+ii2tZF,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elFC5DO = eo('i','qiqff'+ii2tZF,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el_zV4Y;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Poll')}`});
        ;
                    }, 20);                
                let elHBJJ2 = eo('button','FDcff'+ii2tZF,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elMk8KO = eo('i','3Z6ff'+ii2tZF,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elHBJJ2;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Poll')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndvoEa = component.modalIsOpened;
this.setState('st9fNGA', cndvoEa);
if (cndvoEa) { 
component.modal = this._lc('cb4NuPZX9', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elbchRg = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elbchRg.formHandler) {
                    window.cfrmdlr = elbchRg.formHandler = new FormHandler(elbchRg, component);
                } else {
                    window.cfrmdlr = elbchRg.formHandler;
                }
            let el79MBJ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el79MBJ.value = fval(component.project.id);
let elDqCfL = eo('div',null,null,`class`,`form-group`);
elDqCfL.cls = {'group-error': !!elbchRg.formHandler.getError(`name`) };

            for (let className in elDqCfL.cls) {
                elDqCfL.classList.toggle(className, elDqCfL.cls[className]);
            }  
            let elInv0J = eo('label',null,null,`for`,`name`);
text(trans('Poll Name'));
let elpmNCj = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elMKcrp = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbchRg.formHandler.addError(`name`, 'required', trans('validation.required'));}return elbchRg.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Poll Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elMKcrp.value = fval(component.record.name);
let cnd4pTp = elbchRg.formHandler.getError(`name`);
this.setState('stdwhk7', cnd4pTp);
if (cnd4pTp) { 
let el9ty6B = eo('div','gjzf',null,`class`,`alert alert-danger`);
text(elbchRg.formHandler.getError(`name`));
ec('div');
}ec('div');
let elNNy97 = eo('div',null,null,`class`,`m-t-1 text-center`);
let elHCeBx = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'st9fNGA'});
}let cndxgxe = component.confirmDelete;
this.setState('stvwglD', cndxgxe);
if (cndxgxe) { 
let cmpnqGB = this._lc('csjD2G24W', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stvwglD'});
}
                    this.isReadyToGo();
                }
        });