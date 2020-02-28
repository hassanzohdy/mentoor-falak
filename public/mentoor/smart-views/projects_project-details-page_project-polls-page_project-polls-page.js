_Component({
                selector: 'project-polls-page',
                c: 'ProjectPollsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cCLQMZBEV:'project-layout',c_UQVcZNC:'flk-modal',cxujaJfWv:'flk-alert'},
                render: function (component) {
                    let cmpb8uj = this._lc('cCLQMZBEV', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elKzAKB = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elq8SoB = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Poll`);
ec('button');
let ele3ekw = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Polls
        (${ component.project.polls.length })`);
ec('h1');
let elJv60N = eo('table',null,null,`class`,`table table-striped buttoned`);
let el3QNcq = eo('thead');
let el3Derb = eo('tr');
let elNtFvp = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let el5pCYE = eo('tbody');
let cndPuVc = Is.empty(component.project.polls);
this.setState('stGFJo7', cndPuVc);
let cnddg33 = !(cndPuVc);
this.setState('stAq1aZ', cnddg33);
if (cndPuVc) { 
let elC0DgY = eo('tr','Oenf');
let eljACAf = eo('td','nsZf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Polls Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.polls) {
let record = component.project.polls[index]; 
 let iiK7bj = 'Gti7vWr' + index;
let eliX7LK = eo('tr','7nqIxlOAv0yd' + index+iiK7bj);
let elwAdBy = eo('td','Dykff'+iiK7bj);
let eluKPGW = eo('button','x3yff'+iiK7bj,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elR6sj9 = eo('i','ZYaff'+iiK7bj,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eluKPGW;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Poll')}`});
        ;
                    }, 20);                
                let elmYt9M = eo('button','SJmff'+iiK7bj,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elP9jbj = eo('i','N8Fff'+iiK7bj,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elmYt9M;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Poll')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cnd3YYi = component.modalIsOpened;
this.setState('stwpLpC', cnd3YYi);
if (cnd3YYi) { 
component.modal = this._lc('c_UQVcZNC', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elkpWlP = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elkpWlP.formHandler) {
                    window.cfrmdlr = elkpWlP.formHandler = new FormHandler(elkpWlP, component);
                } else {
                    window.cfrmdlr = elkpWlP.formHandler;
                }
            let elmJAdB = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elmJAdB.value = fval(component.project.id);
let elClcyq = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elkpWlP.formHandler.getError(`name`) })}`);
let elRKBi9 = eo('label',null,null,`for`,`name`);
text(trans('Poll Name'));
let elaHj6q = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elzb9bL = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elkpWlP.formHandler.addError(`name`, 'required', trans('validation.required'));}return elkpWlP.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Poll Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elzb9bL.value = fval(component.record.name);
let cndwtfD = elkpWlP.formHandler.getError(`name`);
this.setState('sts6K69', cndwtfD);
if (cndwtfD) { 
let elbMPwK = eo('div','6T1f',null,`class`,`alert alert-danger`);
text(elkpWlP.formHandler.getError(`name`));
ec('div');
}ec('div');
let el0w9ho = eo('div',null,null,`class`,`m-t-1 text-center`);
let ellLcBS = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stwpLpC'});
}let cndrLKz = component.confirmDelete;
this.setState('stCmpss', cndrLKz);
if (cndrLKz) { 
let cmpZsG1 = this._lc('cxujaJfWv', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stCmpss'});
}
                    this.isReadyToGo();
                }
        });