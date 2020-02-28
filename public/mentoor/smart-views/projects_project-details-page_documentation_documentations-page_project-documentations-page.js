_Component({
                selector: 'project-documentations-page',
                c: 'ProjectDocumentationsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cFuitxFPS:'project-layout',c9Ru_qa_a:'markdown-input',cnqB2yV3m:'flk-modal',cSVI3HxkP:'flk-alert'},
                render: function (component) {
                    let cmpf0F0 = this._lc('cFuitxFPS', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elROYvp = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elBnuNw = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Documentation`);
ec('button');
let elwAcbh = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Documentations
        (${ component.project.documentations.length })`);
ec('h1');
let elSvF3Y = eo('table',null,null,`class`,`table table-striped buttoned`);
let ellIdTb = eo('thead');
let elanYsH = eo('tr');
let el5_gyR = eo('th');
text(`Title`);
ec('th');
let elCLjvN = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elaK0V_ = eo('tbody');
let cndcJsO = Is.empty(component.project.documentations);
this.setState('st5oNyd', cndcJsO);
let cndGOzI = !(cndcJsO);
this.setState('stRYNtW', cndGOzI);
if (cndcJsO) { 
let eljchdN = eo('tr','Dk9f');
let elheh6j = eo('td','gfDf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Documentations Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.documentations) {
let record = component.project.documentations[index]; 
 let iiIqg0 = record.id+ index;
let elWe9z4 = eo('tr','MdY0YZBpa36Z' + index+iiIqg0);
let elHuxbL = eo('td','fn6ff'+iiIqg0);
let elzK2dM = eo('a','eXSff'+iiIqg0,null,`href`,`${URLS.project(component.project, 'documentation', record)}`);
text(record.title);
ec('a');
ec('td');
let elmpavI = eo('td','Ijzff'+iiIqg0);
let el5cdv7 = eo('button','TbFff'+iiIqg0,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elG0qoK = eo('i','xKBff'+iiIqg0,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el5cdv7;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Documentation')}`});
        ;
                    }, 20);                
                let elSwNcx = eo('button','1CNff'+iiIqg0,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elYDxYS = eo('i','4PXff'+iiIqg0,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elSwNcx;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Documentation')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndiF_L = component.modalIsOpened;
this.setState('st74VPV', cndiF_L);
if (cndiF_L) { 
component.modal = this._lc('cnqB2yV3m', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let el4ETSG = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el4ETSG.formHandler) {
                    window.cfrmdlr = el4ETSG.formHandler = new FormHandler(el4ETSG, component);
                } else {
                    window.cfrmdlr = el4ETSG.formHandler;
                }
            let elqmG1o = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elqmG1o.value = fval(component.project.id);
let elJDi80 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el4ETSG.formHandler.getError(`title`) })}`);
let elLZwHO = eo('label',null,null,`for`,`title`);
text(trans('Documentation title'));
let elg29ow = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el9ezy1 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el4ETSG.formHandler.addError(`title`, 'required', trans('validation.required'));}return el4ETSG.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Documentation title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el9ezy1.value = fval(component.record.title);
let cndIhwY = el4ETSG.formHandler.getError(`title`);
this.setState('sthWwSu', cndIhwY);
if (cndIhwY) { 
let elHnAB9 = eo('div','cH5f',null,`class`,`alert alert-danger`);
text(el4ETSG.formHandler.getError(`title`));
ec('div');
}ec('div');
let el5sEuV = eo('div',null,null,`class`,`m-t-1`);
let cmpuwpD = this._lc('c9Ru_qa_a', {parent:component,parentTop:flkModal,props:{value:component.record.content,required:true},attrs:{name:`${(`content`).toInputName()}`,label:'Documentation content'},state:'st74VPV'});
ec('div');
let eljjF79 = eo('div',null,null,`class`,`m-t-1 text-center`);
let el2MUnB = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'full'},state:'st74VPV'});
}let cndxauf = component.confirmDelete;
this.setState('st6xuNu', cndxauf);
if (cndxauf) { 
let cmpQdFi = this._lc('cSVI3HxkP', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st6xuNu'});
}
                    this.isReadyToGo();
                }
        });