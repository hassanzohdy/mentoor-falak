_Component({
                selector: 'project-polls-page',
                c: 'ProjectPollsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cBQJenUvY:'project-layout',cP7LJAoMb:'flk-modal',cW2bltC4M:'flk-alert'},
                render: function (component) {
                    let cmp0dDl = this._lc('cBQJenUvY', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elkNOrl = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elMl4LZ = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Poll`);
ec('button');
let elWiYKB = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Polls
        (${ component.project.polls.length })`);
ec('h1');
let elEbTPP = eo('table',null,null,`class`,`table table-striped buttoned`);
let elQu_DX = eo('thead');
let ely7hJ0 = eo('tr');
let elFf0G4 = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elmeyh1 = eo('tbody');
let cndbJvt = Is.empty(component.project.polls);
this.setState('stvkArR', cndbJvt);
let cndhvwk = !(cndbJvt);
this.setState('stg3JKE', cndhvwk);
if (cndbJvt) { 
let elpaezp = eo('tr','0Mrf');
let elzdY5O = eo('td','0H3f',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Polls Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.polls) {
let record = component.project.polls[index]; 
 let iiKD0F = '8kYRxZN' + index;
let eldUqg9 = eo('tr','WAPbH8bE2Iph' + index+iiKD0F);
let el97Lpa = eo('td','HHYff'+iiKD0F);
let elR3kct = eo('button','_CSff'+iiKD0F,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let el1mak6 = eo('i','Ke7ff'+iiKD0F,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elR3kct;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Poll')}`});
        ;
                    }, 20);                
                let elAOciE = eo('button','Ku_ff'+iiKD0F,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elSTSwM = eo('i','WIPff'+iiKD0F,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elAOciE;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Poll')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndKjbQ = component.modalIsOpened;
this.setState('stqOnvF', cndKjbQ);
if (cndKjbQ) { 
component.modal = this._lc('cP7LJAoMb', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elMJiqF = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elMJiqF.formHandler) {
                    window.cfrmdlr = elMJiqF.formHandler = new FormHandler(elMJiqF, component);
                } else {
                    window.cfrmdlr = elMJiqF.formHandler;
                }
            let elYqVGW = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elYqVGW.value = fval(component.project.id);
let el4eczW = eo('div',null,null,`class`,`form-group`);
el4eczW.cls = {'group-error': !!elMJiqF.formHandler.getError(`name`) };

            for (let className in el4eczW.cls) {
                el4eczW.classList.toggle(className, el4eczW.cls[className]);
            }  
            let el46ff5 = eo('label',null,null,`for`,`name`);
text(trans('Poll Name'));
let elKVCDt = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elODmYi = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elMJiqF.formHandler.addError(`name`, 'required', trans('validation.required'));}return elMJiqF.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Poll Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elODmYi.value = fval(component.record.name);
let cndneFx = elMJiqF.formHandler.getError(`name`);
this.setState('st6KfXD', cndneFx);
if (cndneFx) { 
let elOZskV = eo('div','T1nf',null,`class`,`alert alert-danger`);
text(elMJiqF.formHandler.getError(`name`));
ec('div');
}ec('div');
let elrfj8B = eo('div',null,null,`class`,`m-t-1 text-center`);
let elEx9mT = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stqOnvF'});
}let cndGIRC = component.confirmDelete;
this.setState('stur8T_', cndGIRC);
if (cndGIRC) { 
let cmpwQKu = this._lc('cW2bltC4M', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stur8T_'});
}
                    this.isReadyToGo();
                }
        });