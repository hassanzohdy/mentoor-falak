_Component({
                selector: 'project-client-page',
                c: 'ProjectClientPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','updateClientInfo','isValidForm','isSending','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','confirmDelete','remove'],
                children: {cBR_B_TPk:'flk-image-input',c4WpZNflu:'project-layout',c8KrkabJI:'flk-image-input',cseY9KapK:'flk-modal',cUrGGQ1Rx:'flk-alert'},
                render: function (component) {
                    let cmpWRbF = this._lc('c4WpZNflu', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elkIQAC = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Client Information`);
ec('h1');
let el8dLN0 = eo('ul',null,null,`class`,`nav nav-tabs`);
let elRKmwz = eo('li',null,null,`class`,`nav-item`);
let elIF3jA = eo('a',null,null,`class`,`nav-link active`,`href`,`#`,`data-toggle`,`tab`,`data-target`,`#company-profile-tab`);
text(`Company Profile`);
ec('a');
ec('li');
let cndbcf3 = component.project.client.id;
this.setState('stjz8PO', cndbcf3);
if (cndbcf3) { 
let eleINm9 = eo('li','Qd7f',null,`class`,`nav-item`);
let el8Q5uN = eo('a','Dryf',null,`class`,`nav-link`,`data-toggle`,`tab`,`href`,`#`,`data-target`,`#client-representatives-tab`);
text(`Client
                Representatives`);
ec('a');
ec('li');
}ec('ul');
let elpFZ68 = eo('div',null,null,`class`,`tab-content`);
let elXdLUt = eo('div',null,null,`class`,`tab-pane fade show active p-1`,`id`,`company-profile-tab`);
let elzeRqN = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.updateClientInfo($el)}]});

                if (! elzeRqN.formHandler) {
                    window.cfrmdlr = elzeRqN.formHandler = new FormHandler(elzeRqN, component);
                } else {
                    window.cfrmdlr = elzeRqN.formHandler;
                }
            let elAl7J7 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elAl7J7.value = fval(component.project.id);
let elv_2KF = eo('div',null,null,`class`,`form-group`);
elv_2KF.cls = {'group-error': !!elzeRqN.formHandler.getError(`name`) };

            for (let className in elv_2KF.cls) {
                elv_2KF.classList.toggle(className, elv_2KF.cls[className]);
            }  
            let elHLAPp = eo('label',null,null,`for`,`name`);
text(trans('Company Name'));
let elcL7g5 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el0j7TF = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elzeRqN.formHandler.addError(`name`, 'required', trans('validation.required'));}return elzeRqN.formHandler.removeError(`name`);}]},`value`,`${fval(component.project.client.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Company Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el0j7TF.value = fval(component.project.client.name);
let cnd939_ = elzeRqN.formHandler.getError(`name`);
this.setState('stBxoCO', cnd939_);
if (cnd939_) { 
let el2OoOO = eo('div','Pptf',null,`class`,`alert alert-danger`);
text(elzeRqN.formHandler.getError(`name`));
ec('div');
}ec('div');
let elEldyR = eo('div',null,null,`class`,`form-group`);
elEldyR.cls = {'group-error': !!elzeRqN.formHandler.getError(`address`) };

            for (let className in elEldyR.cls) {
                elEldyR.classList.toggle(className, elEldyR.cls[className]);
            }  
            let el30PFL = eo('label',null,null,`for`,`address`);
text(trans('Company Address'));
let ela8SmM = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elG_v7X = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.address = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elzeRqN.formHandler.addError(`address`, 'required', trans('validation.required'));}return elzeRqN.formHandler.removeError(`address`);}]},`value`,`${fval(component.project.client.address)}`,`name`,`${(`address`).toInputName()}`,`placeholder`,`${trans(`Company Address`)}`,`type`,`text`,`class`,`form-control`,`id`,`address`);
elG_v7X.value = fval(component.project.client.address);
let cndWoGZ = elzeRqN.formHandler.getError(`address`);
this.setState('stal7YJ', cndWoGZ);
if (cndWoGZ) { 
let elR907r = eo('div','1UVf',null,`class`,`alert alert-danger`);
text(elzeRqN.formHandler.getError(`address`));
ec('div');
}ec('div');
let elS18EQ = eo('div',null,null,`class`,`form-group`);
elS18EQ.cls = {'group-error': !!elzeRqN.formHandler.getError(`email`) };

            for (let className in elS18EQ.cls) {
                elS18EQ.classList.toggle(className, elS18EQ.cls[className]);
            }  
            let elEsb52 = eo('label',null,null,`for`,`email`);
text(trans('Company Official Email'));
let el9eE1Y = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el6jdxO = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elzeRqN.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elzeRqN.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elzeRqN.formHandler.removeError(`email`);}]},`value`,`${fval(component.project.client.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Company Official Email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
el6jdxO.value = fval(component.project.client.email);
let cndO2Ob = elzeRqN.formHandler.getError(`email`);
this.setState('stWwsEx', cndO2Ob);
if (cndO2Ob) { 
let elJLXBO = eo('div','uxsf',null,`class`,`alert alert-danger`);
text(elzeRqN.formHandler.getError(`email`));
ec('div');
}ec('div');
let elk9j2P = eo('div',null,null,`class`,`form-group`);
elk9j2P.cls = {'group-error': !!elzeRqN.formHandler.getError(`telephones`) };

            for (let className in elk9j2P.cls) {
                elk9j2P.classList.toggle(className, elk9j2P.cls[className]);
            }  
            let elAa2KB = eo('label',null,null,`for`,`telephones`);
text(trans('Company Official telephones'));
let el58FjK = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eljo3mH = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.telephones = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elzeRqN.formHandler.addError(`telephones`, 'required', trans('validation.required'));}return elzeRqN.formHandler.removeError(`telephones`);}]},`value`,`${fval(component.project.client.telephones)}`,`name`,`${(`telephones`).toInputName()}`,`placeholder`,`${trans(`Company Official telephones`)}`,`type`,`text`,`class`,`form-control`,`id`,`telephones`);
eljo3mH.value = fval(component.project.client.telephones);
let cndZrGd = elzeRqN.formHandler.getError(`telephones`);
this.setState('stmU0Y0', cndZrGd);
if (cndZrGd) { 
let elzTN_v = eo('div','wChf',null,`class`,`alert alert-danger`);
text(elzeRqN.formHandler.getError(`telephones`));
ec('div');
}ec('div');
let eliaMc2 = eo('div',null,null,`class`,`form-group`);
let el3wY0V = eo('label',null,null,`for`,`logo`);
text(`Company logo`);
ec('label');
let cmpv2BJ = this._lc('cBR_B_TPk', {parent:component,parentTop:projectLayout,props:{src:component.project.client.logo},attrs:{src:`${component.project.client.logo}`,name:`${(`logo`).toInputName()}`,id:'logo'}});
ec('div');
let elnoDIE = eo('div',null,null,`class`,`m-t-1`);
let eljPgWK = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
ec('div');
let ellk7Hn = eo('div',null,null,`class`,`tab-pane fade`,`id`,`client-representatives-tab`);
let elW48tW = eo('table',null,null,`class`,`table table-striped`);
let elRQv8C = eo('thead');
let eld1wWl = eo('tr');
let elMOXoc = eo('th');
text(`Representative`);
ec('th');
let el5SgnH = eo('th');
text(`Email`);
ec('th');
let elZVL2C = eo('th');
text(`Mobile`);
ec('th');
let elESRBP = eo('th');
text(`Position`);
ec('th');
let elJXQyo = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elmvqy0 = eo('tbody');
let cndkup_ = Is.empty(component.project.client.representatives);
this.setState('stxunnO', cndkup_);
let cnd2D_5 = !(cndkup_);
this.setState('st6R2jr', cnd2D_5);
if (cndkup_) { 
let elc7vhK = eo('tr','SrXf');
let elyk9tl = eo('td','_8Uf',null, 'style', {textAlign:'center'},`colspan`,`5`);
text(`No Representative Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.client.representatives) {
let representative = component.project.client.representatives[index]; 
 let iiWhcy = 'zUYNuBo' + index;
let elr6jtA = eo('tr','x34P6CwaxP62' + index+iiWhcy);
let eljYzpb = eo('td','EXLff'+iiWhcy);
let cndIM4K = representative.image;
this.setState('stwZ4kx', cndIM4K);
if (cndIM4K) { 
let elSH7YL = ev('img','Fm2ff'+iiWhcy,null,`src`,`${representative.image}`,`class`,`medium mr-2 circle`,`title`,`${representative.name}`,`alt`,`${representative.name}`);
}let el1paSl = eo('span','2Niff'+iiWhcy);
text(representative.name);
ec('span');
ec('td');
let els4s9c = eo('td','nXpff'+iiWhcy);
text(representative.email);
ec('td');
let elfUnMo = eo('td','YIcff'+iiWhcy);
text(representative.mobile);
ec('td');
let elQ3U_a = eo('td','gtQff'+iiWhcy);
text(representative.position);
ec('td');
let elNtGe3 = eo('td','spjff'+iiWhcy);
let elkcho1 = eo('button','CnAff'+iiWhcy,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', representative, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elqojqs = eo('i','iV8ff'+iiWhcy,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elkcho1;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Representative')}`});
        ;
                    }, 20);                
                let elJlpLp = eo('button','567ff'+iiWhcy,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(representative, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let el_qDa4 = eo('i','n_4ff'+iiWhcy,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elJlpLp;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Representative')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}let elatXWG = eo('tr');
let elKYfTQ = eo('td',null,null, 'style', {textAlign:'right'},`colspan`,`5`);
let el1wIC7 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elmicpK = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
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
let cndQgxz = component.modalIsOpened;
this.setState('stwEnTB', cndQgxz);
if (cndQgxz) { 
component.modal = this._lc('cseY9KapK', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elGmIqT = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elGmIqT.formHandler) {
                    window.cfrmdlr = elGmIqT.formHandler = new FormHandler(elGmIqT, component);
                } else {
                    window.cfrmdlr = elGmIqT.formHandler;
                }
            let elhw4uK = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elhw4uK.value = fval(component.project.id);
let elx_EY3 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.id = this.value;}]},`value`,`${fval(component.project.client.id)}`,`name`,`${(`client`).toInputName()}`,`type`,`hidden`);
elx_EY3.value = fval(component.project.client.id);
let elM_XZe = eo('div',null,null,`class`,`form-group`);
elM_XZe.cls = {'group-error': !!elGmIqT.formHandler.getError(`name`) };

            for (let className in elM_XZe.cls) {
                elM_XZe.classList.toggle(className, elM_XZe.cls[className]);
            }  
            let el5m69Z = eo('label',null,null,`for`,`name`);
text(trans('Representative Name'));
let eleZzSm = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elI63rr = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGmIqT.formHandler.addError(`name`, 'required', trans('validation.required'));}return elGmIqT.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Representative Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elI63rr.value = fval(component.record.name);
let cnd1zYP = elGmIqT.formHandler.getError(`name`);
this.setState('stYwCPI', cnd1zYP);
if (cnd1zYP) { 
let elNV7us = eo('div','YXwf',null,`class`,`alert alert-danger`);
text(elGmIqT.formHandler.getError(`name`));
ec('div');
}ec('div');
let elTLmoU = eo('div',null,null,`class`,`form-group`);
elTLmoU.cls = {'group-error': !!elGmIqT.formHandler.getError(`email`) };

            for (let className in elTLmoU.cls) {
                elTLmoU.classList.toggle(className, elTLmoU.cls[className]);
            }  
            let elcTMqz = eo('label',null,null,`for`,`email`);
text(trans('Representative Email Address'));
let el8Efo1 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el5S8iE = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGmIqT.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elGmIqT.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elGmIqT.formHandler.removeError(`email`);}]},`value`,`${fval(component.record.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Representative Email Address`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
el5S8iE.value = fval(component.record.email);
let cndRKdX = elGmIqT.formHandler.getError(`email`);
this.setState('stSiyad', cndRKdX);
if (cndRKdX) { 
let el3KEEA = eo('div','OnLf',null,`class`,`alert alert-danger`);
text(elGmIqT.formHandler.getError(`email`));
ec('div');
}ec('div');
let elglw_F = eo('div',null,null,`class`,`form-group`);
elglw_F.cls = {'group-error': !!elGmIqT.formHandler.getError(`mobile`) };

            for (let className in elglw_F.cls) {
                elglw_F.classList.toggle(className, elglw_F.cls[className]);
            }  
            let elKedNf = eo('label',null,null,`for`,`mobile`);
text(trans('Representative Mobile Number'));
let elBlqLN = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elY575M = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.mobile = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGmIqT.formHandler.addError(`mobile`, 'required', trans('validation.required'));}return elGmIqT.formHandler.removeError(`mobile`);}]},`value`,`${fval(component.record.mobile)}`,`name`,`${(`mobile`).toInputName()}`,`placeholder`,`${trans(`Representative Mobile Number`)}`,`type`,`text`,`class`,`form-control`,`id`,`mobile`);
elY575M.value = fval(component.record.mobile);
let cndG6jJ = elGmIqT.formHandler.getError(`mobile`);
this.setState('stNj3LE', cndG6jJ);
if (cndG6jJ) { 
let elXYWFC = eo('div','nvsf',null,`class`,`alert alert-danger`);
text(elGmIqT.formHandler.getError(`mobile`));
ec('div');
}ec('div');
let elhD24C = eo('div',null,null,`class`,`form-group`);
elhD24C.cls = {'group-error': !!elGmIqT.formHandler.getError(`position`) };

            for (let className in elhD24C.cls) {
                elhD24C.classList.toggle(className, elhD24C.cls[className]);
            }  
            let elPUORh = eo('label',null,null,`for`,`position`);
text(trans('Representative Position'));
let elUnh_8 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elVy_jH = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.position = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGmIqT.formHandler.addError(`position`, 'required', trans('validation.required'));}return elGmIqT.formHandler.removeError(`position`);}]},`value`,`${fval(component.record.position)}`,`name`,`${(`position`).toInputName()}`,`placeholder`,`${trans(`Representative Position`)}`,`type`,`text`,`class`,`form-control`,`id`,`position`);
elVy_jH.value = fval(component.record.position);
let cndNaA4 = elGmIqT.formHandler.getError(`position`);
this.setState('strCO82', cndNaA4);
if (cndNaA4) { 
let elrSE6d = eo('div','O6tf',null,`class`,`alert alert-danger`);
text(elGmIqT.formHandler.getError(`position`));
ec('div');
}ec('div');
let elTH_AW = eo('div',null,null,`class`,`form-group`);
let elekBfX = eo('label',null,null,`for`,`image`);
text(`Representative Image`);
ec('label');
let cmpbuYN = this._lc('c8KrkabJI', {parent:component,parentTop:flkModal,props:{src:component.record.image},attrs:{src:`${component.record.image}`,name:`${(`image`).toInputName()}`,id:'image'},state:'stwEnTB'});
ec('div');
let elSzGyr = eo('div',null,null,`class`,`m-t-1 text-center`);
let elpCCkn = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stwEnTB'});
}let cndzJbX = component.confirmDelete;
this.setState('stKysau', cndzJbX);
if (cndzJbX) { 
let cmpFvYP = this._lc('cUrGGQ1Rx', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stKysau'});
}
                    this.isReadyToGo();
                }
        });