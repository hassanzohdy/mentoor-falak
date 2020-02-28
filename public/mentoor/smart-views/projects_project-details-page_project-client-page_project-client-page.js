_Component({
                selector: 'project-client-page',
                c: 'ProjectClientPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','updateClientInfo','isValidForm','isSending','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','confirmDelete','remove'],
                children: {cHCNxU0ws:'flk-image-input',cmo2MthHD:'project-layout',ch3JYHrfq:'flk-image-input',cL9ZPUE1C:'flk-modal',chYDl4HTF:'flk-alert'},
                render: function (component) {
                    let cmpacAB = this._lc('cmo2MthHD', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el1b6oU = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Client Information`);
ec('h1');
let elHmzOg = eo('ul',null,null,`class`,`nav nav-tabs`);
let elDj2tT = eo('li',null,null,`class`,`nav-item`);
let el_SlYv = eo('a',null,null,`class`,`nav-link active`,`href`,`#`,`data-toggle`,`tab`,`data-target`,`#company-profile-tab`);
text(`Company Profile`);
ec('a');
ec('li');
let cndD4_0 = component.project.client.id;
this.setState('staKGs3', cndD4_0);
if (cndD4_0) { 
let elPxA9b = eo('li','aj5f',null,`class`,`nav-item`);
let eld7Xry = eo('a','34df',null,`class`,`nav-link`,`data-toggle`,`tab`,`href`,`#`,`data-target`,`#client-representatives-tab`);
text(`Client
                Representatives`);
ec('a');
ec('li');
}ec('ul');
let elyA7yy = eo('div',null,null,`class`,`tab-content`);
let elujXAJ = eo('div',null,null,`class`,`tab-pane fade show active p-1`,`id`,`company-profile-tab`);
let elmQcXQ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.updateClientInfo($el)}]});

                if (! elmQcXQ.formHandler) {
                    window.cfrmdlr = elmQcXQ.formHandler = new FormHandler(elmQcXQ, component);
                } else {
                    window.cfrmdlr = elmQcXQ.formHandler;
                }
            let elt7MEM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elt7MEM.value = fval(component.project.id);
let el9Kboj = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elmQcXQ.formHandler.getError(`name`) })}`);
let elfjBzg = eo('label',null,null,`for`,`name`);
text(trans('Company Name'));
let elUVPJK = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elUkKXG = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elmQcXQ.formHandler.addError(`name`, 'required', trans('validation.required'));}return elmQcXQ.formHandler.removeError(`name`);}]},`value`,`${fval(component.project.client.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Company Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elUkKXG.value = fval(component.project.client.name);
let cndeBuK = elmQcXQ.formHandler.getError(`name`);
this.setState('stgWJYi', cndeBuK);
if (cndeBuK) { 
let elV3Jen = eo('div','sggf',null,`class`,`alert alert-danger`);
text(elmQcXQ.formHandler.getError(`name`));
ec('div');
}ec('div');
let elYsB1j = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elmQcXQ.formHandler.getError(`address`) })}`);
let eloRD8z = eo('label',null,null,`for`,`address`);
text(trans('Company Address'));
let elhwpq6 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elgCdZj = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.address = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elmQcXQ.formHandler.addError(`address`, 'required', trans('validation.required'));}return elmQcXQ.formHandler.removeError(`address`);}]},`value`,`${fval(component.project.client.address)}`,`name`,`${(`address`).toInputName()}`,`placeholder`,`${trans(`Company Address`)}`,`type`,`text`,`class`,`form-control`,`id`,`address`);
elgCdZj.value = fval(component.project.client.address);
let cndilUr = elmQcXQ.formHandler.getError(`address`);
this.setState('st_FIRh', cndilUr);
if (cndilUr) { 
let elKusNp = eo('div','1Gzf',null,`class`,`alert alert-danger`);
text(elmQcXQ.formHandler.getError(`address`));
ec('div');
}ec('div');
let elpGs_1 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elmQcXQ.formHandler.getError(`email`) })}`);
let elNll9Z = eo('label',null,null,`for`,`email`);
text(trans('Company Official Email'));
let elzeh00 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elQtMdH = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elmQcXQ.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elmQcXQ.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elmQcXQ.formHandler.removeError(`email`);}]},`value`,`${fval(component.project.client.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Company Official Email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
elQtMdH.value = fval(component.project.client.email);
let cndvmj7 = elmQcXQ.formHandler.getError(`email`);
this.setState('stGca4j', cndvmj7);
if (cndvmj7) { 
let elQDwXg = eo('div','n31f',null,`class`,`alert alert-danger`);
text(elmQcXQ.formHandler.getError(`email`));
ec('div');
}ec('div');
let elussYT = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elmQcXQ.formHandler.getError(`telephones`) })}`);
let el3VGjc = eo('label',null,null,`for`,`telephones`);
text(trans('Company Official telephones'));
let el2t4Ih = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elxxBiQ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.telephones = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elmQcXQ.formHandler.addError(`telephones`, 'required', trans('validation.required'));}return elmQcXQ.formHandler.removeError(`telephones`);}]},`value`,`${fval(component.project.client.telephones)}`,`name`,`${(`telephones`).toInputName()}`,`placeholder`,`${trans(`Company Official telephones`)}`,`type`,`text`,`class`,`form-control`,`id`,`telephones`);
elxxBiQ.value = fval(component.project.client.telephones);
let cndCCnI = elmQcXQ.formHandler.getError(`telephones`);
this.setState('st7ROMo', cndCCnI);
if (cndCCnI) { 
let elsbRyS = eo('div','drKf',null,`class`,`alert alert-danger`);
text(elmQcXQ.formHandler.getError(`telephones`));
ec('div');
}ec('div');
let elhHEZL = eo('div',null,null,`class`,`form-group`);
let elkiQab = eo('label',null,null,`for`,`logo`);
text(`Company logo`);
ec('label');
let cmpcFIo = this._lc('cHCNxU0ws', {parent:component,parentTop:projectLayout,props:{src:component.project.client.logo},attrs:{src:`${component.project.client.logo}`,name:`${(`logo`).toInputName()}`,id:'logo'}});
ec('div');
let elpngdh = eo('div',null,null,`class`,`m-t-1`);
let el8c29h = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
ec('div');
let elzY5uH = eo('div',null,null,`class`,`tab-pane fade`,`id`,`client-representatives-tab`);
let elcC6VP = eo('table',null,null,`class`,`table table-striped`);
let elOtjai = eo('thead');
let el2NAy_ = eo('tr');
let elozEua = eo('th');
text(`Representative`);
ec('th');
let elTIsuy = eo('th');
text(`Email`);
ec('th');
let elPxJlU = eo('th');
text(`Mobile`);
ec('th');
let elhDuHv = eo('th');
text(`Position`);
ec('th');
let elmzGFZ = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elQyDWp = eo('tbody');
let cndsJ6K = Is.empty(component.project.client.representatives);
this.setState('stdQsmc', cndsJ6K);
let cndsli2 = !(cndsJ6K);
this.setState('st5DS06', cndsli2);
if (cndsJ6K) { 
let eldzyNL = eo('tr','Az0f');
let elGB_Hy = eo('td','5gHf',null, 'style', {textAlign:'center'},`colspan`,`5`);
text(`No Representative Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.client.representatives) {
let representative = component.project.client.representatives[index]; 
 let iiK27M = 'lHkVBI6' + index;
let elHXIhr = eo('tr','6FwqwEFneZ5o' + index+iiK27M);
let elTa94T = eo('td','Rxnff'+iiK27M);
let cndfyW9 = representative.image;
this.setState('stLL6n8', cndfyW9);
if (cndfyW9) { 
let el_Goz4 = ev('img','lIyff'+iiK27M,null,`src`,`${representative.image}`,`class`,`medium mr-2 circle`,`title`,`${representative.name}`,`alt`,`${representative.name}`);
}let el_WH0s = eo('span','KNZff'+iiK27M);
text(representative.name);
ec('span');
ec('td');
let elT_fdJ = eo('td','9lnff'+iiK27M);
text(representative.email);
ec('td');
let elgc9gC = eo('td','ogUff'+iiK27M);
text(representative.mobile);
ec('td');
let elpkHfn = eo('td','vDkff'+iiK27M);
text(representative.position);
ec('td');
let eltsGFA = eo('td','puJff'+iiK27M);
let elGHq78 = eo('button','blKff'+iiK27M,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', representative, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elaNRDz = eo('i','qjOff'+iiK27M,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elGHq78;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Representative')}`});
        ;
                    }, 20);                
                let ele269p = eo('button','9njff'+iiK27M,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(representative, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elchYJp = eo('i','MSbff'+iiK27M,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = ele269p;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Representative')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}let el3Ck3x = eo('tr');
let elsG3ZL = eo('td',null,null, 'style', {textAlign:'right'},`colspan`,`5`);
let el0Su0c = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elljt_z = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
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
let cnd5oae = component.modalIsOpened;
this.setState('stIX9sK', cnd5oae);
if (cnd5oae) { 
component.modal = this._lc('cL9ZPUE1C', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let eljogp0 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! eljogp0.formHandler) {
                    window.cfrmdlr = eljogp0.formHandler = new FormHandler(eljogp0, component);
                } else {
                    window.cfrmdlr = eljogp0.formHandler;
                }
            let elmxn8p = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elmxn8p.value = fval(component.project.id);
let elZkFKj = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.id = this.value;}]},`value`,`${fval(component.project.client.id)}`,`name`,`${(`client`).toInputName()}`,`type`,`hidden`);
elZkFKj.value = fval(component.project.client.id);
let elQYKSo = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!eljogp0.formHandler.getError(`name`) })}`);
let elFuEnK = eo('label',null,null,`for`,`name`);
text(trans('Representative Name'));
let el8eMoL = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elyVSoS = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eljogp0.formHandler.addError(`name`, 'required', trans('validation.required'));}return eljogp0.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Representative Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elyVSoS.value = fval(component.record.name);
let cndSid2 = eljogp0.formHandler.getError(`name`);
this.setState('st6Bcdt', cndSid2);
if (cndSid2) { 
let el5fF9_ = eo('div','Rkff',null,`class`,`alert alert-danger`);
text(eljogp0.formHandler.getError(`name`));
ec('div');
}ec('div');
let el4CCiD = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!eljogp0.formHandler.getError(`email`) })}`);
let elSrOpC = eo('label',null,null,`for`,`email`);
text(trans('Representative Email Address'));
let elVbRVm = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el7Q1f4 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eljogp0.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return eljogp0.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return eljogp0.formHandler.removeError(`email`);}]},`value`,`${fval(component.record.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Representative Email Address`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
el7Q1f4.value = fval(component.record.email);
let cndEZHx = eljogp0.formHandler.getError(`email`);
this.setState('st2sfD5', cndEZHx);
if (cndEZHx) { 
let elS4VZS = eo('div','0m5f',null,`class`,`alert alert-danger`);
text(eljogp0.formHandler.getError(`email`));
ec('div');
}ec('div');
let eltMKbW = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!eljogp0.formHandler.getError(`mobile`) })}`);
let el5gc7X = eo('label',null,null,`for`,`mobile`);
text(trans('Representative Mobile Number'));
let elTorGd = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el2XMto = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.mobile = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eljogp0.formHandler.addError(`mobile`, 'required', trans('validation.required'));}return eljogp0.formHandler.removeError(`mobile`);}]},`value`,`${fval(component.record.mobile)}`,`name`,`${(`mobile`).toInputName()}`,`placeholder`,`${trans(`Representative Mobile Number`)}`,`type`,`text`,`class`,`form-control`,`id`,`mobile`);
el2XMto.value = fval(component.record.mobile);
let cnd_NEG = eljogp0.formHandler.getError(`mobile`);
this.setState('stFD2i_', cnd_NEG);
if (cnd_NEG) { 
let el6xHRc = eo('div','O7yf',null,`class`,`alert alert-danger`);
text(eljogp0.formHandler.getError(`mobile`));
ec('div');
}ec('div');
let elsfMhh = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!eljogp0.formHandler.getError(`position`) })}`);
let elPgZfB = eo('label',null,null,`for`,`position`);
text(trans('Representative Position'));
let el6Hr4P = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elxA6B_ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.position = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eljogp0.formHandler.addError(`position`, 'required', trans('validation.required'));}return eljogp0.formHandler.removeError(`position`);}]},`value`,`${fval(component.record.position)}`,`name`,`${(`position`).toInputName()}`,`placeholder`,`${trans(`Representative Position`)}`,`type`,`text`,`class`,`form-control`,`id`,`position`);
elxA6B_.value = fval(component.record.position);
let cndGST9 = eljogp0.formHandler.getError(`position`);
this.setState('st1oYBy', cndGST9);
if (cndGST9) { 
let elBKJ_q = eo('div','3ijf',null,`class`,`alert alert-danger`);
text(eljogp0.formHandler.getError(`position`));
ec('div');
}ec('div');
let el67gaK = eo('div',null,null,`class`,`form-group`);
let elMKxAj = eo('label',null,null,`for`,`image`);
text(`Representative Image`);
ec('label');
let cmpJw45 = this._lc('ch3JYHrfq', {parent:component,parentTop:flkModal,props:{src:component.record.image},attrs:{src:`${component.record.image}`,name:`${(`image`).toInputName()}`,id:'image'},state:'stIX9sK'});
ec('div');
let elABUP7 = eo('div',null,null,`class`,`m-t-1 text-center`);
let elox6Nd = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stIX9sK'});
}let cndePpl = component.confirmDelete;
this.setState('stUBx89', cndePpl);
if (cndePpl) { 
let cmpLeYH = this._lc('chYDl4HTF', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stUBx89'});
}
                    this.isReadyToGo();
                }
        });