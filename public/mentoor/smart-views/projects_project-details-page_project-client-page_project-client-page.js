_Component({
                selector: 'project-client-page',
                c: 'ProjectClientPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','updateClientInfo','isValidForm','isSending','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','confirmDelete','remove'],
                children: {cHOzBPNxP:'flk-image-input',cqwL52gAB:'project-layout',ceDYMPvg7:'flk-image-input',cMZGeUj6F:'flk-modal',cxUU1YKjL:'flk-alert'},
                render: function (component) {
                    let cmpsIOR = this._lc('cqwL52gAB', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el3tmst = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Client Information`);
ec('h1');
let el6bpQD = eo('ul',null,null,`class`,`nav nav-tabs`);
let elMwkGH = eo('li',null,null,`class`,`nav-item`);
let elLyjY9 = eo('a',null,null,`class`,`nav-link active`,`href`,`#`,`data-toggle`,`tab`,`data-target`,`#company-profile-tab`);
text(`Company Profile`);
ec('a');
ec('li');
let cndlyNS = component.project.client.id;
this.setState('st5jGqs', cndlyNS);
if (cndlyNS) { 
let elwudiC = eo('li','nR6f',null,`class`,`nav-item`);
let elq7cpY = eo('a','4g3f',null,`class`,`nav-link`,`data-toggle`,`tab`,`href`,`#`,`data-target`,`#client-representatives-tab`);
text(`Client
                Representatives`);
ec('a');
ec('li');
}ec('ul');
let elIka6M = eo('div',null,null,`class`,`tab-content`);
let elN4AOz = eo('div',null,null,`class`,`tab-pane fade show active p-1`,`id`,`company-profile-tab`);
let elbP6GU = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.updateClientInfo($el)}]});

                if (! elbP6GU.formHandler) {
                    window.cfrmdlr = elbP6GU.formHandler = new FormHandler(elbP6GU, component);
                } else {
                    window.cfrmdlr = elbP6GU.formHandler;
                }
            let elrblhH = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elrblhH.value = fval(component.project.id);
let elOU1qm = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elbP6GU.formHandler.getError(`name`) })}`);
let elZxDSY = eo('label',null,null,`for`,`name`);
text(trans('Company Name'));
let el5oiEM = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el3NIPv = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbP6GU.formHandler.addError(`name`, 'required', trans('validation.required'));}return elbP6GU.formHandler.removeError(`name`);}]},`value`,`${fval(component.project.client.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Company Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el3NIPv.value = fval(component.project.client.name);
let cnds_sc = elbP6GU.formHandler.getError(`name`);
this.setState('stiYzat', cnds_sc);
if (cnds_sc) { 
let elF16Y_ = eo('div','qvBf',null,`class`,`alert alert-danger`);
text(elbP6GU.formHandler.getError(`name`));
ec('div');
}ec('div');
let el2oq7Y = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elbP6GU.formHandler.getError(`address`) })}`);
let ellpUXQ = eo('label',null,null,`for`,`address`);
text(trans('Company Address'));
let elIrXpl = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elNfpiF = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.address = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbP6GU.formHandler.addError(`address`, 'required', trans('validation.required'));}return elbP6GU.formHandler.removeError(`address`);}]},`value`,`${fval(component.project.client.address)}`,`name`,`${(`address`).toInputName()}`,`placeholder`,`${trans(`Company Address`)}`,`type`,`text`,`class`,`form-control`,`id`,`address`);
elNfpiF.value = fval(component.project.client.address);
let cndGUQf = elbP6GU.formHandler.getError(`address`);
this.setState('stmHvT3', cndGUQf);
if (cndGUQf) { 
let elMmCoG = eo('div','Wt_f',null,`class`,`alert alert-danger`);
text(elbP6GU.formHandler.getError(`address`));
ec('div');
}ec('div');
let elLQR11 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elbP6GU.formHandler.getError(`email`) })}`);
let elsjvOJ = eo('label',null,null,`for`,`email`);
text(trans('Company Official Email'));
let elGwc2e = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el_9B94 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbP6GU.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elbP6GU.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elbP6GU.formHandler.removeError(`email`);}]},`value`,`${fval(component.project.client.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Company Official Email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
el_9B94.value = fval(component.project.client.email);
let cndVkn_ = elbP6GU.formHandler.getError(`email`);
this.setState('st22xa2', cndVkn_);
if (cndVkn_) { 
let elNgwtm = eo('div','B6Qf',null,`class`,`alert alert-danger`);
text(elbP6GU.formHandler.getError(`email`));
ec('div');
}ec('div');
let elcF6kU = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elbP6GU.formHandler.getError(`telephones`) })}`);
let elh1qPP = eo('label',null,null,`for`,`telephones`);
text(trans('Company Official telephones'));
let elMkZtl = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elNJswp = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.telephones = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbP6GU.formHandler.addError(`telephones`, 'required', trans('validation.required'));}return elbP6GU.formHandler.removeError(`telephones`);}]},`value`,`${fval(component.project.client.telephones)}`,`name`,`${(`telephones`).toInputName()}`,`placeholder`,`${trans(`Company Official telephones`)}`,`type`,`text`,`class`,`form-control`,`id`,`telephones`);
elNJswp.value = fval(component.project.client.telephones);
let cndVDMT = elbP6GU.formHandler.getError(`telephones`);
this.setState('sturezi', cndVDMT);
if (cndVDMT) { 
let elMxmOG = eo('div','0Mhf',null,`class`,`alert alert-danger`);
text(elbP6GU.formHandler.getError(`telephones`));
ec('div');
}ec('div');
let el2YM4J = eo('div',null,null,`class`,`form-group`);
let eldgXz6 = eo('label',null,null,`for`,`logo`);
text(`Company logo`);
ec('label');
let cmpYaMJ = this._lc('cHOzBPNxP', {parent:component,parentTop:projectLayout,props:{src:component.project.client.logo},attrs:{src:`${component.project.client.logo}`,name:`${(`logo`).toInputName()}`,id:'logo'}});
ec('div');
let el0VFli = eo('div',null,null,`class`,`m-t-1`);
let el12ph4 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
ec('div');
let elYtNN5 = eo('div',null,null,`class`,`tab-pane fade`,`id`,`client-representatives-tab`);
let elYr0a7 = eo('table',null,null,`class`,`table table-striped`);
let el5sCr9 = eo('thead');
let elEs9Jl = eo('tr');
let elX5m3s = eo('th');
text(`Representative`);
ec('th');
let elNMQYN = eo('th');
text(`Email`);
ec('th');
let elJYwuZ = eo('th');
text(`Mobile`);
ec('th');
let elAR5WX = eo('th');
text(`Position`);
ec('th');
let elyfhe8 = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elsD9ft = eo('tbody');
let cndYWF5 = Is.empty(component.project.client.representatives);
this.setState('stLCbUy', cndYWF5);
let cndkhJH = !(cndYWF5);
this.setState('st2EFrN', cndkhJH);
if (cndYWF5) { 
let elLrzhb = eo('tr','jg_f');
let elWj0TO = eo('td','Fohf',null, 'style', {textAlign:'center'},`colspan`,`5`);
text(`No Representative Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.client.representatives) {
let representative = component.project.client.representatives[index]; 
 let iiOpT9 = 'PDX_vvM' + index;
let elbrX9D = eo('tr','udH7keODoORh' + index+iiOpT9);
let el64xEb = eo('td','8Fnff'+iiOpT9);
let cndJMQu = representative.image;
this.setState('stzXIn9', cndJMQu);
if (cndJMQu) { 
let elJdvD2 = ev('img','Afjff'+iiOpT9,null,`src`,`${representative.image}`,`class`,`medium mr-2 circle`,`title`,`${representative.name}`,`alt`,`${representative.name}`);
}let el0tFmq = eo('span','lk1ff'+iiOpT9);
text(representative.name);
ec('span');
ec('td');
let el3aqzE = eo('td','mRIff'+iiOpT9);
text(representative.email);
ec('td');
let elJSL2i = eo('td','PLgff'+iiOpT9);
text(representative.mobile);
ec('td');
let elcqtHl = eo('td','yYTff'+iiOpT9);
text(representative.position);
ec('td');
let elCsiF3 = eo('td','_pIff'+iiOpT9);
let elsccDp = eo('button','V1_ff'+iiOpT9,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', representative, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let el_isID = eo('i','_6_ff'+iiOpT9,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elsccDp;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Representative')}`});
        ;
                    }, 20);                
                let el_gQuU = eo('button','ed2ff'+iiOpT9,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(representative, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let el6oy0s = eo('i','0UYff'+iiOpT9,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el_gQuU;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Representative')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}let elUU3ju = eo('tr');
let elBXNkF = eo('td',null,null, 'style', {textAlign:'right'},`colspan`,`5`);
let elAPZBJ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elzx7YN = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Representative`);
ec('button');
ec('td');
ec('tr');
ec('tbody');
ec('table');
ec('div');
ec('div');
}});
let cndSIU0 = component.modalIsOpened;
this.setState('st1Iac2', cndSIU0);
if (cndSIU0) { 
component.modal = this._lc('cMZGeUj6F', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elFYV2H = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elFYV2H.formHandler) {
                    window.cfrmdlr = elFYV2H.formHandler = new FormHandler(elFYV2H, component);
                } else {
                    window.cfrmdlr = elFYV2H.formHandler;
                }
            let elQTx7B = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elQTx7B.value = fval(component.project.id);
let elKZy7q = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.id = this.value;}]},`value`,`${fval(component.project.client.id)}`,`name`,`${(`client`).toInputName()}`,`type`,`hidden`);
elKZy7q.value = fval(component.project.client.id);
let elSkO7X = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elFYV2H.formHandler.getError(`name`) })}`);
let el1NiPu = eo('label',null,null,`for`,`name`);
text(trans('Representative Name'));
let eluDklo = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el8U0ML = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFYV2H.formHandler.addError(`name`, 'required', trans('validation.required'));}return elFYV2H.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Representative Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el8U0ML.value = fval(component.record.name);
let cndGv2y = elFYV2H.formHandler.getError(`name`);
this.setState('sts3ybD', cndGv2y);
if (cndGv2y) { 
let el95c6W = eo('div','LvTf',null,`class`,`alert alert-danger`);
text(elFYV2H.formHandler.getError(`name`));
ec('div');
}ec('div');
let elBHleM = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elFYV2H.formHandler.getError(`email`) })}`);
let el_ejkw = eo('label',null,null,`for`,`email`);
text(trans('Representative Email Address'));
let elT0hQH = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elBdbkz = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFYV2H.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elFYV2H.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elFYV2H.formHandler.removeError(`email`);}]},`value`,`${fval(component.record.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Representative Email Address`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
elBdbkz.value = fval(component.record.email);
let cnd61UU = elFYV2H.formHandler.getError(`email`);
this.setState('stos7BO', cnd61UU);
if (cnd61UU) { 
let elGyz_5 = eo('div','aSUf',null,`class`,`alert alert-danger`);
text(elFYV2H.formHandler.getError(`email`));
ec('div');
}ec('div');
let elxynDv = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elFYV2H.formHandler.getError(`mobile`) })}`);
let eln3CYY = eo('label',null,null,`for`,`mobile`);
text(trans('Representative Mobile Number'));
let elYJvie = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el3PC4f = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.mobile = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFYV2H.formHandler.addError(`mobile`, 'required', trans('validation.required'));}return elFYV2H.formHandler.removeError(`mobile`);}]},`value`,`${fval(component.record.mobile)}`,`name`,`${(`mobile`).toInputName()}`,`placeholder`,`${trans(`Representative Mobile Number`)}`,`type`,`text`,`class`,`form-control`,`id`,`mobile`);
el3PC4f.value = fval(component.record.mobile);
let cnd90Yp = elFYV2H.formHandler.getError(`mobile`);
this.setState('stlwDWf', cnd90Yp);
if (cnd90Yp) { 
let el7hE0b = eo('div','sUkf',null,`class`,`alert alert-danger`);
text(elFYV2H.formHandler.getError(`mobile`));
ec('div');
}ec('div');
let elcQhjJ = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elFYV2H.formHandler.getError(`position`) })}`);
let elabJ_t = eo('label',null,null,`for`,`position`);
text(trans('Representative Position'));
let elEEEHm = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el2kUcj = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.position = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFYV2H.formHandler.addError(`position`, 'required', trans('validation.required'));}return elFYV2H.formHandler.removeError(`position`);}]},`value`,`${fval(component.record.position)}`,`name`,`${(`position`).toInputName()}`,`placeholder`,`${trans(`Representative Position`)}`,`type`,`text`,`class`,`form-control`,`id`,`position`);
el2kUcj.value = fval(component.record.position);
let cndsrVD = elFYV2H.formHandler.getError(`position`);
this.setState('stFZrfI', cndsrVD);
if (cndsrVD) { 
let elgugp7 = eo('div','cBTf',null,`class`,`alert alert-danger`);
text(elFYV2H.formHandler.getError(`position`));
ec('div');
}ec('div');
let elIQsdS = eo('div',null,null,`class`,`form-group`);
let el2rix2 = eo('label',null,null,`for`,`image`);
text(`Representative Image`);
ec('label');
let cmpEpHw = this._lc('ceDYMPvg7', {parent:component,parentTop:flkModal,props:{src:component.record.image},attrs:{src:`${component.record.image}`,name:`${(`image`).toInputName()}`,id:'image'},state:'st1Iac2'});
ec('div');
let elV8uZ2 = eo('div',null,null,`class`,`m-t-1 text-center`);
let el7mmeL = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'st1Iac2'});
}let cndraXb = component.confirmDelete;
this.setState('stdmInr', cndraXb);
if (cndraXb) { 
let cmplkUb = this._lc('cxUU1YKjL', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stdmInr'});
}
                    this.isReadyToGo();
                }
        });