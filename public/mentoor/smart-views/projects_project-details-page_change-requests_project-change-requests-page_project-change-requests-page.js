_Component({
                selector: 'project-change-requests-page',
                c: 'ProjectChangeRequestsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','changeRequestTypes','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cFwpo2dtH:'project-layout',cQI7AXNYG:'flk-datepicker',c1PSadRw9:'flk-dropdown-list',cMVaD_ZQP:'flk-modal',cvapWdWRk:'flk-alert'},
                render: function (component) {
                    let cmpCtIY = this._lc('cFwpo2dtH', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elICf3_ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let eldi5UM = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Change-request`);
ec('button');
let elmGQD3 = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Change requests
        (${ Object.get(component.project.changeRequests, 'length', '') })`);
ec('h1');
let elKW2UE = eo('table',null,null,`class`,`table table-striped buttoned`);
let elWOjEi = eo('thead');
let el730zc = eo('tr');
let elxcoWL = eo('th');
text(`Title`);
ec('th');
let elI9uGd = eo('th');
text(`Request Date`);
ec('th');
let elNFabn = eo('th');
text(`Request Type`);
ec('th');
let elMtZVH = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elJvCwy = eo('tbody');
let cndUue4 = Is.empty(component.project.changeRequests);
this.setState('stX2Obk', cndUue4);
let cnd27Ta = !(cndUue4);
this.setState('stAfg0h', cnd27Ta);
if (cndUue4) { 
let elyBAeH = eo('tr','yUff');
let elryott = eo('td','FaPf',null, 'style', {textAlign:'center'},`colspan`,`4`);
text(`No Change requests Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.changeRequests) {
let record = component.project.changeRequests[index]; 
 let iiJ_B1 = record.id+ index;
let elVoMlH = eo('tr','IW2nMtVorIps' + index+iiJ_B1);
let elrLfNe = eo('td','hplff'+iiJ_B1);
let eleDNqv = eo('a','4N3ff'+iiJ_B1,null,`href`,`${URLS.project(component.project, 'change-requests', record)}`);
text(record.title);
ec('a');
ec('td');
let elifECJ = eo('td','aJuff'+iiJ_B1);
text(record.requestDate);
ec('td');
let el8m8qu = eo('td','x1Jff'+iiJ_B1,null,`class`,`bold`);
text(component.changeRequestTypes[record.type]);
ec('td');
let el302eX = eo('td','vZ4ff'+iiJ_B1);
let elzPGmc = eo('button','sCCff'+iiJ_B1,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elBOfos = eo('i','CqIff'+iiJ_B1,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elzPGmc;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Change-request')}`});
        ;
                    }, 20);                
                let elzrtlG = eo('button','COVff'+iiJ_B1,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elZJrve = eo('i','vg_ff'+iiJ_B1,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elzrtlG;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Change-request')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cnd1lyd = component.modalIsOpened;
this.setState('stW6Fef', cnd1lyd);
if (cnd1lyd) { 
component.modal = this._lc('cMVaD_ZQP', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elHbUyw = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elHbUyw.formHandler) {
                    window.cfrmdlr = elHbUyw.formHandler = new FormHandler(elHbUyw, component);
                } else {
                    window.cfrmdlr = elHbUyw.formHandler;
                }
            let el0mnS_ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el0mnS_.value = fval(component.project.id);
let elsZkd2 = eo('div',null,null,`class`,`form-group`);
elsZkd2.cls = {'group-error': !!elHbUyw.formHandler.getError(`title`) };

            for (let className in elsZkd2.cls) {
                elsZkd2.classList.toggle(className, elsZkd2.cls[className]);
            }  
            let elfxX2H = eo('label',null,null,`for`,`title`);
text(trans('Change request Title'));
let elhLvGR = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eljifAV = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elHbUyw.formHandler.addError(`title`, 'required', trans('validation.required'));}return elHbUyw.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Change request Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
eljifAV.value = fval(component.record.title);
let cndM2cQ = elHbUyw.formHandler.getError(`title`);
this.setState('st4IcUW', cndM2cQ);
if (cndM2cQ) { 
let elKJYvP = eo('div','1hKf',null,`class`,`alert alert-danger`);
text(elHbUyw.formHandler.getError(`title`));
ec('div');
}ec('div');
let elEyk4f = eo('div',null,null,`class`,`form-group`);
elEyk4f.cls = {'group-error': !!elHbUyw.formHandler.getError(`description`) };

            for (let className in elEyk4f.cls) {
                elEyk4f.classList.toggle(className, elEyk4f.cls[className]);
            }  
            let elY87YI = eo('label',null,null,`for`,`description`);
text(trans('Change request Description (Markdown Support)'));
let elpmb_Z = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elMwPkD = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elHbUyw.formHandler.addError(`description`, 'required', trans('validation.required'));}return elHbUyw.formHandler.removeError(`description`);}]},`value`,`${fval(component.record.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Change request Description (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elMwPkD.value = fval(component.record.description);
ec('textarea');
let cndWsnU = elHbUyw.formHandler.getError(`description`);
this.setState('stZPtrY', cndWsnU);
if (cndWsnU) { 
let elluOf8 = eo('div','fyof',null,`class`,`alert alert-danger`);
text(elHbUyw.formHandler.getError(`description`));
ec('div');
}ec('div');
let cmpFoLH = this._lc('cQI7AXNYG', {parent:component,parentTop:flkModal,props:{value:component.record.requestDate,dateTime:true},attrs:{name:`${(`requestDate`).toInputName()}`,required:'',label:'Request Date',class:'form-control'},state:'stW6Fef'});
let cmpFK1_ = this._lc('c1PSadRw9', {parent:component,parentTop:flkModal,props:{required:true,value:component.record.type,items:component.changeRequestTypes},attrs:{name:`${(`type`).toInputName()}`,label:'Change Request Type'},state:'stW6Fef'});
let elltDtZ = eo('div',null,null,`class`,`m-t-1 text-center`);
let elV3DcY = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stW6Fef'});
}let cndbtIq = component.confirmDelete;
this.setState('stzfbSJ', cndbtIq);
if (cndbtIq) { 
let cmpSwqJ = this._lc('cvapWdWRk', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stzfbSJ'});
}
                    this.isReadyToGo();
                }
        });