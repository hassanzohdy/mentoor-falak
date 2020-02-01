_Component({
                selector: 'project-change-requests-page',
                c: 'ProjectChangeRequestsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','changeRequestTypes','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cdoLDbdyO:'project-layout',cqgad0WJR:'flk-datepicker',cP7raJI0J:'flk-dropdown-list',cZFEHVy6g:'flk-modal',clwYB_tTk:'flk-alert'},
                render: function (component) {
                    let cmptTEj = this._lc('cdoLDbdyO', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elWJoj1 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elxiDIb = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Change-request`);
ec('button');
let elSpBZi = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Change requests
        (${ Object.get(component.project.changeRequests, 'length', '') })`);
ec('h1');
let elf0YoN = eo('table',null,null,`class`,`table table-striped buttoned`);
let elCA1ti = eo('thead');
let elw_ph8 = eo('tr');
let elOosBD = eo('th');
text(`Title`);
ec('th');
let elrnuOd = eo('th');
text(`Request Date`);
ec('th');
let elVMvJM = eo('th');
text(`Request Type`);
ec('th');
let elgrBk1 = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elybfpy = eo('tbody');
let cndZaYu = Is.empty(component.project.changeRequests);
this.setState('sttRKAf', cndZaYu);
let cndOtej = !(cndZaYu);
this.setState('stF7Tjo', cndOtej);
if (cndZaYu) { 
let elp16xc = eo('tr','T93f');
let eluEKrH = eo('td','u7rf',null, 'style', {textAlign:'center'},`colspan`,`4`);
text(`No Change requests Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.changeRequests) {
let record = component.project.changeRequests[index]; 
 let iixyGG = record.id+ index;
let el1TF0t = eo('tr','8vzmr88_lFLj' + index+iixyGG);
let elsGpUd = eo('td','lMXff'+iixyGG);
text(record.title);
ec('td');
let elQD7WY = eo('td','o9fff'+iixyGG);
text(record.requestDate);
ec('td');
let elAXvtF = eo('td','S5rff'+iixyGG,null,`class`,`bold`);
text(component.changeRequestTypes[record.type]);
ec('td');
let elPCCbK = eo('td','ijYff'+iixyGG);
let el81SZh = eo('button','wnZff'+iixyGG,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elGKZrI = eo('i','yoLff'+iixyGG,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el81SZh;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Change-request')}`});
        ;
                    }, 0);                
                let elKzC7S = eo('button','iL5ff'+iixyGG,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let el5mxgT = eo('i','JWMff'+iixyGG,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elKzC7S;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Change-request')}`});
        ;
                    }, 0);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndQr1L = component.modalIsOpened;
this.setState('stJnRP8', cndQr1L);
if (cndQr1L) { 
component.modal = this._lc('cZFEHVy6g', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elZmF2z = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elZmF2z.formHandler) {
                    window.cfrmdlr = elZmF2z.formHandler = new FormHandler(elZmF2z, component);
                } else {
                    window.cfrmdlr = elZmF2z.formHandler;
                }
            let elDl0Iu = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elDl0Iu.value = fval(component.project.id);
let elY38qV = eo('div',null,null,`class`,`form-group`);
elY38qV.cls = {'group-error': !!elZmF2z.formHandler.getError(`title`) };

            for (let className in elY38qV.cls) {
                elY38qV.classList.toggle(className, elY38qV.cls[className]);
            }  
            let el8efkz = eo('label',null,null,`for`,`title`);
text(trans('Change request Title'));
let elsMpaP = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elcthul = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elZmF2z.formHandler.addError(`title`, 'required', trans('validation.required'));}return elZmF2z.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Change request Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elcthul.value = fval(component.record.title);
let cndMewS = elZmF2z.formHandler.getError(`title`);
this.setState('stIUQnu', cndMewS);
if (cndMewS) { 
let elaCTbG = eo('div','4QWf',null,`class`,`alert alert-danger`);
text(elZmF2z.formHandler.getError(`title`));
ec('div');
}ec('div');
let eluCwdl = eo('div',null,null,`class`,`form-group`);
eluCwdl.cls = {'group-error': !!elZmF2z.formHandler.getError(`description`) };

            for (let className in eluCwdl.cls) {
                eluCwdl.classList.toggle(className, eluCwdl.cls[className]);
            }  
            let elsitF9 = eo('label',null,null,`for`,`description`);
text(trans('Change request Description (Markdown Support)'));
let elVIFuB = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elOjSPq = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elZmF2z.formHandler.addError(`description`, 'required', trans('validation.required'));}return elZmF2z.formHandler.removeError(`description`);}]},`value`,`${fval(component.record.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Change request Description (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elOjSPq.value = fval(component.record.description);
ec('textarea');
let cndVLLE = elZmF2z.formHandler.getError(`description`);
this.setState('stD2q26', cndVLLE);
if (cndVLLE) { 
let el2nizC = eo('div','8YHf',null,`class`,`alert alert-danger`);
text(elZmF2z.formHandler.getError(`description`));
ec('div');
}ec('div');
let cmpyoik = this._lc('cqgad0WJR', {parent:component,parentTop:flkModal,props:{value:component.record.requestDate,dateTime:true},attrs:{name:`${(`requestDate`).toInputName()}`,required:'',label:'Request Date',class:'form-control'},state:'stJnRP8'});
let cmpZ7dC = this._lc('cP7raJI0J', {parent:component,parentTop:flkModal,props:{required:true,value:component.record.type,items:component.changeRequestTypes},attrs:{name:`${(`type`).toInputName()}`,label:'Change Request Type'},state:'stJnRP8'});
let elMpP16 = eo('div',null,null,`class`,`m-t-1 text-center`);
let elchI4i = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stJnRP8'});
}let cndTODW = component.confirmDelete;
this.setState('stlnGvb', cndTODW);
if (cndTODW) { 
let cmpsjLa = this._lc('clwYB_tTk', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stlnGvb'});
}
                    this.isReadyToGo();
                }
        });