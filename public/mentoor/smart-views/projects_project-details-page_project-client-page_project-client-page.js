_Component({
                selector: 'project-client-page',
                c: 'ProjectClientPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','updateClientInfo','isValidForm','isSending','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','confirmDelete','remove'],
                children: {cdr4Zbz0O:'flk-image-input',caIVunEVx:'project-layout',cgbIcNp7Y:'flk-image-input',c6DXcDjiT:'flk-modal',ci8luT8qq:'flk-alert'},
                render: function (component) {
                    let cmpj93d = this._lc('caIVunEVx', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el7KQUT = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Client Information`);
ec('h1');
let eln4vq4 = eo('ul',null,null,`class`,`nav nav-tabs`);
let elZW6X6 = eo('li',null,null,`class`,`nav-item`);
let elJhlXK = eo('a',null,null,`class`,`nav-link active`,`href`,`#`,`data-toggle`,`tab`,`data-target`,`#company-profile-tab`);
text(`Company Profile`);
ec('a');
ec('li');
let cndAu8H = component.project.client.id;
this.setState('staTC7C', cndAu8H);
if (cndAu8H) { 
let elBlqtW = eo('li','xx9f',null,`class`,`nav-item`);
let elIfg0Y = eo('a','VRrf',null,`class`,`nav-link`,`data-toggle`,`tab`,`href`,`#`,`data-target`,`#client-representatives-tab`);
text(`Client
                Representatives`);
ec('a');
ec('li');
}ec('ul');
let elczOF_ = eo('div',null,null,`class`,`tab-content`);
let el_cVBQ = eo('div',null,null,`class`,`tab-pane fade show active p-1`,`id`,`company-profile-tab`);
let elbii_4 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.updateClientInfo($el)}]});

                if (! elbii_4.formHandler) {
                    window.cfrmdlr = elbii_4.formHandler = new FormHandler(elbii_4, component);
                } else {
                    window.cfrmdlr = elbii_4.formHandler;
                }
            let el35bVN = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el35bVN.value = fval(component.project.id);
let elUa5qD = eo('div',null,null,`class`,`form-group`);
elUa5qD.cls = {'group-error': !!elbii_4.formHandler.getError(`name`) };

            for (let className in elUa5qD.cls) {
                elUa5qD.classList.toggle(className, elUa5qD.cls[className]);
            }  
            let eljXzET = eo('label',null,null,`for`,`name`);
text(trans('Company Name'));
let el5tDPh = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elCqwGV = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbii_4.formHandler.addError(`name`, 'required', trans('validation.required'));}return elbii_4.formHandler.removeError(`name`);}]},`value`,`${fval(component.project.client.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Company Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elCqwGV.value = fval(component.project.client.name);
let cndefmT = elbii_4.formHandler.getError(`name`);
this.setState('stmsI6l', cndefmT);
if (cndefmT) { 
let elneWcx = eo('div','iZ8f',null,`class`,`alert alert-danger`);
text(elbii_4.formHandler.getError(`name`));
ec('div');
}ec('div');
let elbbL3o = eo('div',null,null,`class`,`form-group`);
elbbL3o.cls = {'group-error': !!elbii_4.formHandler.getError(`address`) };

            for (let className in elbbL3o.cls) {
                elbbL3o.classList.toggle(className, elbbL3o.cls[className]);
            }  
            let elmHuqE = eo('label',null,null,`for`,`address`);
text(trans('Company Address'));
let el7YoBF = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elXTrPH = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.address = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbii_4.formHandler.addError(`address`, 'required', trans('validation.required'));}return elbii_4.formHandler.removeError(`address`);}]},`value`,`${fval(component.project.client.address)}`,`name`,`${(`address`).toInputName()}`,`placeholder`,`${trans(`Company Address`)}`,`type`,`text`,`class`,`form-control`,`id`,`address`);
elXTrPH.value = fval(component.project.client.address);
let cndkA01 = elbii_4.formHandler.getError(`address`);
this.setState('stc1Gqc', cndkA01);
if (cndkA01) { 
let elKc8su = eo('div','Dbsf',null,`class`,`alert alert-danger`);
text(elbii_4.formHandler.getError(`address`));
ec('div');
}ec('div');
let elfFeBj = eo('div',null,null,`class`,`form-group`);
elfFeBj.cls = {'group-error': !!elbii_4.formHandler.getError(`email`) };

            for (let className in elfFeBj.cls) {
                elfFeBj.classList.toggle(className, elfFeBj.cls[className]);
            }  
            let el8uFv3 = eo('label',null,null,`for`,`email`);
text(trans('Company Official Email'));
let eljci21 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eltS_3H = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbii_4.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elbii_4.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elbii_4.formHandler.removeError(`email`);}]},`value`,`${fval(component.project.client.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Company Official Email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
eltS_3H.value = fval(component.project.client.email);
let cndif6I = elbii_4.formHandler.getError(`email`);
this.setState('stauLU_', cndif6I);
if (cndif6I) { 
let elbhJxu = eo('div','NqGf',null,`class`,`alert alert-danger`);
text(elbii_4.formHandler.getError(`email`));
ec('div');
}ec('div');
let els_qVB = eo('div',null,null,`class`,`form-group`);
els_qVB.cls = {'group-error': !!elbii_4.formHandler.getError(`telephones`) };

            for (let className in els_qVB.cls) {
                els_qVB.classList.toggle(className, els_qVB.cls[className]);
            }  
            let elwTAua = eo('label',null,null,`for`,`telephones`);
text(trans('Company Official telephones'));
let elrd4B9 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elsqVxN = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.telephones = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbii_4.formHandler.addError(`telephones`, 'required', trans('validation.required'));}return elbii_4.formHandler.removeError(`telephones`);}]},`value`,`${fval(component.project.client.telephones)}`,`name`,`${(`telephones`).toInputName()}`,`placeholder`,`${trans(`Company Official telephones`)}`,`type`,`text`,`class`,`form-control`,`id`,`telephones`);
elsqVxN.value = fval(component.project.client.telephones);
let cndZ1VG = elbii_4.formHandler.getError(`telephones`);
this.setState('stb2ixc', cndZ1VG);
if (cndZ1VG) { 
let elmfQEk = eo('div','2JLf',null,`class`,`alert alert-danger`);
text(elbii_4.formHandler.getError(`telephones`));
ec('div');
}ec('div');
let elSg6A_ = eo('div',null,null,`class`,`form-group`);
let elioDL8 = eo('label',null,null,`for`,`logo`);
text(`Company logo`);
ec('label');
let cmp0VqY = this._lc('cdr4Zbz0O', {parent:component,parentTop:projectLayout,props:{src:component.project.client.logo},attrs:{src:`${component.project.client.logo}`,name:`${(`logo`).toInputName()}`,id:'logo'}});
ec('div');
let elzMYB0 = eo('div',null,null,`class`,`m-t-1`);
let el5AWCA = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
ec('div');
let elaQ9ZN = eo('div',null,null,`class`,`tab-pane fade`,`id`,`client-representatives-tab`);
let elmlxTa = eo('table',null,null,`class`,`table table-striped`);
let elw7psU = eo('thead');
let elXqEyU = eo('tr');
let elCUdSH = eo('th');
text(`Representative`);
ec('th');
let elFR7KZ = eo('th');
text(`Email`);
ec('th');
let elwoLmh = eo('th');
text(`Mobile`);
ec('th');
let elkELAh = eo('th');
text(`Position`);
ec('th');
let elcVYgo = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let eloUEYS = eo('tbody');
let cndiIqu = Is.empty(component.project.client.representatives);
this.setState('stJSnvw', cndiIqu);
let cndo56X = !(cndiIqu);
this.setState('stEObjA', cndo56X);
if (cndiIqu) { 
let elJbqLs = eo('tr','dBJf');
let eljt9yd = eo('td','OU6f',null, 'style', {textAlign:'center'},`colspan`,`5`);
text(`No Representative Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.client.representatives) {
let representative = component.project.client.representatives[index]; 
 let iiTArQ = 'H4v6siu' + index;
let elG9XDl = eo('tr','8W6tooJzrVtJ' + index+iiTArQ);
let elFVNb2 = eo('td','nM4ff'+iiTArQ);
let cndRykJ = representative.image;
this.setState('steAgKs', cndRykJ);
if (cndRykJ) { 
let elZl3Oy = ev('img','4Hoff'+iiTArQ,null,`src`,`${representative.image}`,`class`,`medium mr-2 circle`,`title`,`${representative.name}`,`alt`,`${representative.name}`);
}let el3P2mG = eo('span','gNIff'+iiTArQ);
text(representative.name);
ec('span');
ec('td');
let elpAJE7 = eo('td','sZHff'+iiTArQ);
text(representative.email);
ec('td');
let elVSAHL = eo('td','8KKff'+iiTArQ);
text(representative.mobile);
ec('td');
let elHTFhl = eo('td','4iZff'+iiTArQ);
text(representative.position);
ec('td');
let elMrBzs = eo('td','q7Rff'+iiTArQ);
let eltBO5n = eo('button','s35ff'+iiTArQ,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', representative, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elQgwMn = eo('i','Wx6ff'+iiTArQ,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eltBO5n;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Representative')}`});
        ;
                    }, 20);                
                let elDcmkg = eo('button','c8aff'+iiTArQ,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(representative, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elIw30i = eo('i','g3Dff'+iiTArQ,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elDcmkg;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Representative')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}let elcIkVj = eo('tr');
let elxs2Jz = eo('td',null,null, 'style', {textAlign:'right'},`colspan`,`5`);
let el6a78L = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elIJYwy = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
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
let cndRbSD = component.modalIsOpened;
this.setState('stewarN', cndRbSD);
if (cndRbSD) { 
component.modal = this._lc('c6DXcDjiT', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elTCBbK = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elTCBbK.formHandler) {
                    window.cfrmdlr = elTCBbK.formHandler = new FormHandler(elTCBbK, component);
                } else {
                    window.cfrmdlr = elTCBbK.formHandler;
                }
            let el4rXLj = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el4rXLj.value = fval(component.project.id);
let elLzpG8 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.id = this.value;}]},`value`,`${fval(component.project.client.id)}`,`name`,`${(`client`).toInputName()}`,`type`,`hidden`);
elLzpG8.value = fval(component.project.client.id);
let elj2mt0 = eo('div',null,null,`class`,`form-group`);
elj2mt0.cls = {'group-error': !!elTCBbK.formHandler.getError(`name`) };

            for (let className in elj2mt0.cls) {
                elj2mt0.classList.toggle(className, elj2mt0.cls[className]);
            }  
            let elmM4uA = eo('label',null,null,`for`,`name`);
text(trans('Representative Name'));
let elZwmxD = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elWrdv0 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTCBbK.formHandler.addError(`name`, 'required', trans('validation.required'));}return elTCBbK.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Representative Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elWrdv0.value = fval(component.record.name);
let cndBqaa = elTCBbK.formHandler.getError(`name`);
this.setState('stZQTZb', cndBqaa);
if (cndBqaa) { 
let el0VNXU = eo('div','5NNf',null,`class`,`alert alert-danger`);
text(elTCBbK.formHandler.getError(`name`));
ec('div');
}ec('div');
let elOQSNr = eo('div',null,null,`class`,`form-group`);
elOQSNr.cls = {'group-error': !!elTCBbK.formHandler.getError(`email`) };

            for (let className in elOQSNr.cls) {
                elOQSNr.classList.toggle(className, elOQSNr.cls[className]);
            }  
            let elmEbT4 = eo('label',null,null,`for`,`email`);
text(trans('Representative Email Address'));
let el2ZpIR = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elZ70hz = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTCBbK.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elTCBbK.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elTCBbK.formHandler.removeError(`email`);}]},`value`,`${fval(component.record.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Representative Email Address`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
elZ70hz.value = fval(component.record.email);
let cndn4vg = elTCBbK.formHandler.getError(`email`);
this.setState('stZltMC', cndn4vg);
if (cndn4vg) { 
let elMB4TH = eo('div','h03f',null,`class`,`alert alert-danger`);
text(elTCBbK.formHandler.getError(`email`));
ec('div');
}ec('div');
let el1G4xm = eo('div',null,null,`class`,`form-group`);
el1G4xm.cls = {'group-error': !!elTCBbK.formHandler.getError(`mobile`) };

            for (let className in el1G4xm.cls) {
                el1G4xm.classList.toggle(className, el1G4xm.cls[className]);
            }  
            let elVAJmb = eo('label',null,null,`for`,`mobile`);
text(trans('Representative Mobile Number'));
let elE8nev = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elAk_sV = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.mobile = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTCBbK.formHandler.addError(`mobile`, 'required', trans('validation.required'));}return elTCBbK.formHandler.removeError(`mobile`);}]},`value`,`${fval(component.record.mobile)}`,`name`,`${(`mobile`).toInputName()}`,`placeholder`,`${trans(`Representative Mobile Number`)}`,`type`,`text`,`class`,`form-control`,`id`,`mobile`);
elAk_sV.value = fval(component.record.mobile);
let cndV8LZ = elTCBbK.formHandler.getError(`mobile`);
this.setState('stRkpq5', cndV8LZ);
if (cndV8LZ) { 
let elZwqia = eo('div','MFKf',null,`class`,`alert alert-danger`);
text(elTCBbK.formHandler.getError(`mobile`));
ec('div');
}ec('div');
let el94hwo = eo('div',null,null,`class`,`form-group`);
el94hwo.cls = {'group-error': !!elTCBbK.formHandler.getError(`position`) };

            for (let className in el94hwo.cls) {
                el94hwo.classList.toggle(className, el94hwo.cls[className]);
            }  
            let eleYQe5 = eo('label',null,null,`for`,`position`);
text(trans('Representative Position'));
let elBe9S8 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el58bca = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.position = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTCBbK.formHandler.addError(`position`, 'required', trans('validation.required'));}return elTCBbK.formHandler.removeError(`position`);}]},`value`,`${fval(component.record.position)}`,`name`,`${(`position`).toInputName()}`,`placeholder`,`${trans(`Representative Position`)}`,`type`,`text`,`class`,`form-control`,`id`,`position`);
el58bca.value = fval(component.record.position);
let cndop5F = elTCBbK.formHandler.getError(`position`);
this.setState('stBklya', cndop5F);
if (cndop5F) { 
let el5XjKx = eo('div','k1Ef',null,`class`,`alert alert-danger`);
text(elTCBbK.formHandler.getError(`position`));
ec('div');
}ec('div');
let elVQDk2 = eo('div',null,null,`class`,`form-group`);
let elQVcr3 = eo('label',null,null,`for`,`image`);
text(`Representative Image`);
ec('label');
let cmpeeKg = this._lc('cgbIcNp7Y', {parent:component,parentTop:flkModal,props:{src:component.record.image},attrs:{src:`${component.record.image}`,name:`${(`image`).toInputName()}`,id:'image'},state:'stewarN'});
ec('div');
let elBtzDA = eo('div',null,null,`class`,`m-t-1 text-center`);
let el21JNr = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stewarN'});
}let cndoawF = component.confirmDelete;
this.setState('stHfbmH', cndoawF);
if (cndoawF) { 
let cmp6mDF = this._lc('ci8luT8qq', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stHfbmH'});
}
                    this.isReadyToGo();
                }
        });