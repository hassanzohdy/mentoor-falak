_Component({
                selector: 'project-change-requests-page',
                c: 'ProjectChangeRequestsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','changeRequestTypes','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cVdEq7Jdv:'project-layout',cOz9aHK3T:'flk-datepicker',cgGSMQ2qC:'flk-dropdown-list',ctRde7k3z:'flk-modal',cY_FnzBV6:'flk-alert'},
                render: function (component) {
                    let cmpxpmI = this._lc('cVdEq7Jdv', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elYKkVL = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elz5kA1 = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Change-request`);
ec('button');
let elcsQ8q = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Change requests
        (${ Object.get(component.project.changeRequests, 'length', '') })`);
ec('h1');
let ellqh5G = eo('table',null,null,`class`,`table table-striped buttoned`);
let elDR0bC = eo('thead');
let elCYTRY = eo('tr');
let elmwioe = eo('th');
text(`Title`);
ec('th');
let elErMXW = eo('th');
text(`Request Date`);
ec('th');
let elj4kS6 = eo('th');
text(`Request Type`);
ec('th');
let elknjsf = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let el1KtzI = eo('tbody');
let cnd6Ogl = Is.empty(component.project.changeRequests);
this.setState('stUOaTo', cnd6Ogl);
let cndmSqu = !(cnd6Ogl);
this.setState('stlnYe5', cndmSqu);
if (cnd6Ogl) { 
let elPyP_C = eo('tr','UAwf');
let elB_q5C = eo('td','5Yxf',null, 'style', {textAlign:'center'},`colspan`,`4`);
text(`No Change requests Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.changeRequests) {
let record = component.project.changeRequests[index]; 
 let iiUXdy = record.id+ index;
let eltyJnf = eo('tr','wB0UuKl3_g66' + index+iiUXdy);
let elHGwMs = eo('td','rYoff'+iiUXdy);
let elIOcgx = eo('a','D6vff'+iiUXdy,null,`href`,`${URLS.project(component.project, 'change-requests', record)}`);
text(record.title);
ec('a');
ec('td');
let elCu5R3 = eo('td','dzkff'+iiUXdy);
text(record.requestDate);
ec('td');
let elX4gZH = eo('td','R2gff'+iiUXdy,null,`class`,`bold`);
text(component.changeRequestTypes[record.type]);
ec('td');
let elL3vXY = eo('td','jHuff'+iiUXdy);
let elDnliy = eo('button','tiCff'+iiUXdy,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let eldymbA = eo('i','aGiff'+iiUXdy,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elDnliy;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Change-request')}`});
        ;
                    }, 20);                
                let elrs2aN = eo('button','LFgff'+iiUXdy,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elg3wW6 = eo('i','pIgff'+iiUXdy,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elrs2aN;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Change-request')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndNfK2 = component.modalIsOpened;
this.setState('stkSNuE', cndNfK2);
if (cndNfK2) { 
component.modal = this._lc('ctRde7k3z', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elIvBVx = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elIvBVx.formHandler) {
                    window.cfrmdlr = elIvBVx.formHandler = new FormHandler(elIvBVx, component);
                } else {
                    window.cfrmdlr = elIvBVx.formHandler;
                }
            let elDRDZ2 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elDRDZ2.value = fval(component.project.id);
let elrixrp = eo('div',null,null,`class`,`form-group`);
elrixrp.cls = {'group-error': !!elIvBVx.formHandler.getError(`title`) };

            for (let className in elrixrp.cls) {
                elrixrp.classList.toggle(className, elrixrp.cls[className]);
            }  
            let elgYvUz = eo('label',null,null,`for`,`title`);
text(trans('Change request Title'));
let elJ0ij6 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elzOZY3 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elIvBVx.formHandler.addError(`title`, 'required', trans('validation.required'));}return elIvBVx.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Change request Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elzOZY3.value = fval(component.record.title);
let cndHOr3 = elIvBVx.formHandler.getError(`title`);
this.setState('stFrrAU', cndHOr3);
if (cndHOr3) { 
let elDD0Yr = eo('div','4RDf',null,`class`,`alert alert-danger`);
text(elIvBVx.formHandler.getError(`title`));
ec('div');
}ec('div');
let elAcj6G = eo('div',null,null,`class`,`form-group`);
elAcj6G.cls = {'group-error': !!elIvBVx.formHandler.getError(`description`) };

            for (let className in elAcj6G.cls) {
                elAcj6G.classList.toggle(className, elAcj6G.cls[className]);
            }  
            let el4DaIE = eo('label',null,null,`for`,`description`);
text(trans('Change request Description (Markdown Support)'));
let el59txg = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elbBnRn = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elIvBVx.formHandler.addError(`description`, 'required', trans('validation.required'));}return elIvBVx.formHandler.removeError(`description`);}]},`value`,`${fval(component.record.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Change request Description (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elbBnRn.value = fval(component.record.description);
ec('textarea');
let cndAOWS = elIvBVx.formHandler.getError(`description`);
this.setState('st69nMV', cndAOWS);
if (cndAOWS) { 
let elvyI0e = eo('div','BDGf',null,`class`,`alert alert-danger`);
text(elIvBVx.formHandler.getError(`description`));
ec('div');
}ec('div');
let cmplbay = this._lc('cOz9aHK3T', {parent:component,parentTop:flkModal,props:{value:component.record.requestDate,dateTime:true},attrs:{name:`${(`requestDate`).toInputName()}`,required:'',label:'Request Date',class:'form-control'},state:'stkSNuE'});
let cmpUt6K = this._lc('cgGSMQ2qC', {parent:component,parentTop:flkModal,props:{required:true,value:component.record.type,items:component.changeRequestTypes},attrs:{name:`${(`type`).toInputName()}`,label:'Change Request Type'},state:'stkSNuE'});
let elpfwIP = eo('div',null,null,`class`,`m-t-1 text-center`);
let elYU3ST = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stkSNuE'});
}let cndfZwf = component.confirmDelete;
this.setState('st0u9M2', cndfZwf);
if (cndfZwf) { 
let cmpT7wC = this._lc('cY_FnzBV6', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st0u9M2'});
}
                    this.isReadyToGo();
                }
        });