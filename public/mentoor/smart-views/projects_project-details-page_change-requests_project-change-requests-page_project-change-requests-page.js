_Component({
                selector: 'project-change-requests-page',
                c: 'ProjectChangeRequestsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','changeRequestTypes','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cm1u66S6Y:'project-layout',cIV1Q3e2x:'flk-datepicker',cFd04oi2E:'flk-dropdown-list',cTehJMehd:'flk-modal',cDoa7DCTW:'flk-alert'},
                render: function (component) {
                    let cmpWcjX = this._lc('cm1u66S6Y', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elMqwKV = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let el9b3Ea = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Change-request`);
ec('button');
let elC4hKc = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Change requests
        (${ Object.get(component.project.changeRequests, 'length', '') })`);
ec('h1');
let elMMn6v = eo('table',null,null,`class`,`table table-striped buttoned`);
let elyoZT_ = eo('thead');
let elnczUd = eo('tr');
let elWudBv = eo('th');
text(`Title`);
ec('th');
let elYjc1X = eo('th');
text(`Request Date`);
ec('th');
let eliEzYl = eo('th');
text(`Request Type`);
ec('th');
let el8BQhO = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elogA3E = eo('tbody');
let cndZyre = Is.empty(component.project.changeRequests);
this.setState('stD5488', cndZyre);
let cndsGyi = !(cndZyre);
this.setState('stSUWM1', cndsGyi);
if (cndZyre) { 
let elTYclA = eo('tr','Wcxf');
let el5H8iX = eo('td','qj5f',null, 'style', {textAlign:'center'},`colspan`,`4`);
text(`No Change requests Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.changeRequests) {
let record = component.project.changeRequests[index]; 
 let iifnBq = record.id+ index;
let el6xPCa = eo('tr','1o5esv7WUqwd' + index+iifnBq);
let elPMTrX = eo('td','Y6kff'+iifnBq);
let elOkXgS = eo('a','lGiff'+iifnBq,null,`href`,`${URLS.project(component.project, 'change-requests', record)}`);
text(record.title);
ec('a');
ec('td');
let elIAOY2 = eo('td','GyIff'+iifnBq);
text(record.requestDate);
ec('td');
let elz2m_2 = eo('td','Wutff'+iifnBq,null,`class`,`bold`);
text(component.changeRequestTypes[record.type]);
ec('td');
let eluzuQq = eo('td','BEeff'+iifnBq);
let elAWJlc = eo('button','35wff'+iifnBq,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elsxZNg = eo('i','QVYff'+iifnBq,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elAWJlc;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Change-request')}`});
        ;
                    }, 20);                
                let el_MP7i = eo('button','2YWff'+iifnBq,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let el9dhWM = eo('i','RgCff'+iifnBq,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el_MP7i;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Change-request')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndgcJj = component.modalIsOpened;
this.setState('st8_R1C', cndgcJj);
if (cndgcJj) { 
component.modal = this._lc('cTehJMehd', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elV6h6B = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elV6h6B.formHandler) {
                    window.cfrmdlr = elV6h6B.formHandler = new FormHandler(elV6h6B, component);
                } else {
                    window.cfrmdlr = elV6h6B.formHandler;
                }
            let elhuJTA = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elhuJTA.value = fval(component.project.id);
let elxT0z8 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elV6h6B.formHandler.getError(`title`) })}`);
let ele4ijC = eo('label',null,null,`for`,`title`);
text(trans('Change request Title'));
let el56ZZF = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elxb19s = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elV6h6B.formHandler.addError(`title`, 'required', trans('validation.required'));}return elV6h6B.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Change request Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elxb19s.value = fval(component.record.title);
let cnd3xDn = elV6h6B.formHandler.getError(`title`);
this.setState('st0jSXw', cnd3xDn);
if (cnd3xDn) { 
let ellpU8y = eo('div','fpef',null,`class`,`alert alert-danger`);
text(elV6h6B.formHandler.getError(`title`));
ec('div');
}ec('div');
let elaAJqx = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elV6h6B.formHandler.getError(`description`) })}`);
let elvIOxo = eo('label',null,null,`for`,`description`);
text(trans('Change request Description (Markdown Support)'));
let elwVufg = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elkDOWc = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elV6h6B.formHandler.addError(`description`, 'required', trans('validation.required'));}return elV6h6B.formHandler.removeError(`description`);}]},`value`,`${fval(component.record.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Change request Description (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elkDOWc.value = fval(component.record.description);
ec('textarea');
let cndMwZu = elV6h6B.formHandler.getError(`description`);
this.setState('stBpFs8', cndMwZu);
if (cndMwZu) { 
let elzVsxL = eo('div','f84f',null,`class`,`alert alert-danger`);
text(elV6h6B.formHandler.getError(`description`));
ec('div');
}ec('div');
let cmpQu4P = this._lc('cIV1Q3e2x', {parent:component,parentTop:flkModal,props:{value:component.record.requestDate,dateTime:true},attrs:{name:`${(`requestDate`).toInputName()}`,required:'',label:'Request Date',class:'form-control'},state:'st8_R1C'});
let cmpq99I = this._lc('cFd04oi2E', {parent:component,parentTop:flkModal,props:{required:true,value:component.record.type,items:component.changeRequestTypes},attrs:{name:`${(`type`).toInputName()}`,label:'Change Request Type'},state:'st8_R1C'});
let elB2yNL = eo('div',null,null,`class`,`m-t-1 text-center`);
let elCKNYv = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'st8_R1C'});
}let cndC7A_ = component.confirmDelete;
this.setState('stp1p1Y', cndC7A_);
if (cndC7A_) { 
let cmpXYcl = this._lc('cDoa7DCTW', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stp1p1Y'});
}
                    this.isReadyToGo();
                }
        });