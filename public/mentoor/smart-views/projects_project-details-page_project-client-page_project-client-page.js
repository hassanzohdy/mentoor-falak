_Component({
                selector: 'project-client-page',
                c: 'ProjectClientPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','updateClientInfo','isValidForm','isSending','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','confirmDelete','remove'],
                children: {cgSXO5Tm8:'flk-image-input',cSzQMB93v:'project-layout',cvCTi1ekx:'flk-image-input',cbaTERF8e:'flk-modal',c8HOQN8dk:'flk-alert'},
                render: function (component) {
                    let cmpEreM = this._lc('cSzQMB93v', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elsjcq8 = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Client Information`);
ec('h1');
let eld2Mkf = eo('ul',null,null,`class`,`nav nav-tabs`);
let eliH80c = eo('li',null,null,`class`,`nav-item`);
let elPcEwb = eo('a',null,null,`class`,`nav-link active`,`href`,`#`,`data-toggle`,`tab`,`data-target`,`#company-profile-tab`);
text(`Company Profile`);
ec('a');
ec('li');
let cndVO21 = component.project.client.id;
this.setState('stojcFD', cndVO21);
if (cndVO21) { 
let elCNV5I = eo('li','uzSf',null,`class`,`nav-item`);
let eljX7Xq = eo('a','YO8f',null,`class`,`nav-link`,`data-toggle`,`tab`,`href`,`#`,`data-target`,`#client-representatives-tab`);
text(`Client
                Representatives`);
ec('a');
ec('li');
}ec('ul');
let elw5Qf1 = eo('div',null,null,`class`,`tab-content`);
let elLoJrT = eo('div',null,null,`class`,`tab-pane fade show active p-1`,`id`,`company-profile-tab`);
let elnGgF0 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.updateClientInfo($el)}]});

                if (! elnGgF0.formHandler) {
                    window.cfrmdlr = elnGgF0.formHandler = new FormHandler(elnGgF0, component);
                } else {
                    window.cfrmdlr = elnGgF0.formHandler;
                }
            let elF0Ron = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elF0Ron.value = fval(component.project.id);
let elVHF6Y = eo('div',null,null,`class`,`form-group`);
elVHF6Y.cls = {'group-error': !!elnGgF0.formHandler.getError(`name`) };

            for (let className in elVHF6Y.cls) {
                elVHF6Y.classList.toggle(className, elVHF6Y.cls[className]);
            }  
            let ely51TI = eo('label',null,null,`for`,`name`);
text(trans('Company Name'));
let elLWteH = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elxQ6wt = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elnGgF0.formHandler.addError(`name`, 'required', trans('validation.required'));}return elnGgF0.formHandler.removeError(`name`);}]},`value`,`${fval(component.project.client.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Company Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elxQ6wt.value = fval(component.project.client.name);
let cndmXbu = elnGgF0.formHandler.getError(`name`);
this.setState('stVZUGi', cndmXbu);
if (cndmXbu) { 
let elzgMNz = eo('div','GcJf',null,`class`,`alert alert-danger`);
text(elnGgF0.formHandler.getError(`name`));
ec('div');
}ec('div');
let elChWbO = eo('div',null,null,`class`,`form-group`);
elChWbO.cls = {'group-error': !!elnGgF0.formHandler.getError(`address`) };

            for (let className in elChWbO.cls) {
                elChWbO.classList.toggle(className, elChWbO.cls[className]);
            }  
            let eli5P72 = eo('label',null,null,`for`,`address`);
text(trans('Company Address'));
let el9P7nL = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elqd7uz = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.address = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elnGgF0.formHandler.addError(`address`, 'required', trans('validation.required'));}return elnGgF0.formHandler.removeError(`address`);}]},`value`,`${fval(component.project.client.address)}`,`name`,`${(`address`).toInputName()}`,`placeholder`,`${trans(`Company Address`)}`,`type`,`text`,`class`,`form-control`,`id`,`address`);
elqd7uz.value = fval(component.project.client.address);
let cndApgS = elnGgF0.formHandler.getError(`address`);
this.setState('st6rfeU', cndApgS);
if (cndApgS) { 
let el04KMx = eo('div','Z5Rf',null,`class`,`alert alert-danger`);
text(elnGgF0.formHandler.getError(`address`));
ec('div');
}ec('div');
let elcR_8u = eo('div',null,null,`class`,`form-group`);
elcR_8u.cls = {'group-error': !!elnGgF0.formHandler.getError(`email`) };

            for (let className in elcR_8u.cls) {
                elcR_8u.classList.toggle(className, elcR_8u.cls[className]);
            }  
            let elIL5te = eo('label',null,null,`for`,`email`);
text(trans('Company Official Email'));
let elMzway = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elyYJmX = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elnGgF0.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elnGgF0.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elnGgF0.formHandler.removeError(`email`);}]},`value`,`${fval(component.project.client.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Company Official Email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
elyYJmX.value = fval(component.project.client.email);
let cndLzlw = elnGgF0.formHandler.getError(`email`);
this.setState('stjiRst', cndLzlw);
if (cndLzlw) { 
let elZKIRc = eo('div','JLVf',null,`class`,`alert alert-danger`);
text(elnGgF0.formHandler.getError(`email`));
ec('div');
}ec('div');
let el3zJvK = eo('div',null,null,`class`,`form-group`);
el3zJvK.cls = {'group-error': !!elnGgF0.formHandler.getError(`telephones`) };

            for (let className in el3zJvK.cls) {
                el3zJvK.classList.toggle(className, el3zJvK.cls[className]);
            }  
            let el4Z3mM = eo('label',null,null,`for`,`telephones`);
text(trans('Company Official telephones'));
let elWGywN = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elb9BT1 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.telephones = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elnGgF0.formHandler.addError(`telephones`, 'required', trans('validation.required'));}return elnGgF0.formHandler.removeError(`telephones`);}]},`value`,`${fval(component.project.client.telephones)}`,`name`,`${(`telephones`).toInputName()}`,`placeholder`,`${trans(`Company Official telephones`)}`,`type`,`text`,`class`,`form-control`,`id`,`telephones`);
elb9BT1.value = fval(component.project.client.telephones);
let cnd83eq = elnGgF0.formHandler.getError(`telephones`);
this.setState('stshJqX', cnd83eq);
if (cnd83eq) { 
let elbJQCp = eo('div','zTTf',null,`class`,`alert alert-danger`);
text(elnGgF0.formHandler.getError(`telephones`));
ec('div');
}ec('div');
let elIgVly = eo('div',null,null,`class`,`form-group`);
let el_d5Gd = eo('label',null,null,`for`,`logo`);
text(`Company logo`);
ec('label');
let cmpoWU3 = this._lc('cgSXO5Tm8', {parent:component,parentTop:projectLayout,props:{src:component.project.client.logo},attrs:{src:`${component.project.client.logo}`,name:`${(`logo`).toInputName()}`,id:'logo'}});
ec('div');
let elpqcS0 = eo('div',null,null,`class`,`m-t-1`);
let elVnzBP = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
ec('div');
let elAZMni = eo('div',null,null,`class`,`tab-pane fade`,`id`,`client-representatives-tab`);
let elX77fC = eo('table',null,null,`class`,`table table-striped`);
let elbHPfd = eo('thead');
let elkDkf7 = eo('tr');
let elkUBZX = eo('th');
text(`Representative`);
ec('th');
let elyXnry = eo('th');
text(`Email`);
ec('th');
let elEGih3 = eo('th');
text(`Mobile`);
ec('th');
let elzhC_y = eo('th');
text(`Position`);
ec('th');
let els8ZSG = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elGjedZ = eo('tbody');
let cndBGNB = Is.empty(component.project.client.representatives);
this.setState('strhzsB', cndBGNB);
let cndCPj1 = !(cndBGNB);
this.setState('st0fadT', cndCPj1);
if (cndBGNB) { 
let el8QDCZ = eo('tr','IZ7f');
let elXHZcu = eo('td','zFwf',null, 'style', {textAlign:'center'},`colspan`,`5`);
text(`No Representative Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.client.representatives) {
let representative = component.project.client.representatives[index]; 
 let ii3MLJ = 'l5vzuVB' + index;
let elAWpai = eo('tr','a7hIIXcpfVgE' + index+ii3MLJ);
let eletLgg = eo('td','a6Gff'+ii3MLJ);
let cnd0K5q = representative.image;
this.setState('stR40c3', cnd0K5q);
if (cnd0K5q) { 
let eliqtgP = ev('img','Tqzff'+ii3MLJ,null,`src`,`${representative.image}`,`class`,`medium mr-2 circle`,`title`,`${representative.name}`,`alt`,`${representative.name}`);
}let elUd_WP = eo('span','1WWff'+ii3MLJ);
text(representative.name);
ec('span');
ec('td');
let elotfTc = eo('td','41Xff'+ii3MLJ);
text(representative.email);
ec('td');
let elWrea6 = eo('td','USDff'+ii3MLJ);
text(representative.mobile);
ec('td');
let elFXhRO = eo('td','_meff'+ii3MLJ);
text(representative.position);
ec('td');
let elRRejO = eo('td','tcqff'+ii3MLJ);
let elXs0kf = eo('button','Z7jff'+ii3MLJ,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', representative, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elM519I = eo('i','cdSff'+ii3MLJ,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elXs0kf;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Representative')}`});
        ;
                    }, 20);                
                let eldhwD7 = eo('button','kqMff'+ii3MLJ,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(representative, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let el8NLVn = eo('i','T1Sff'+ii3MLJ,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eldhwD7;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Representative')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}let elr8y2O = eo('tr');
let elAe9iq = eo('td',null,null, 'style', {textAlign:'right'},`colspan`,`5`);
let elGkV08 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let eluSZ5A = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
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
let cndJG1R = component.modalIsOpened;
this.setState('stnlOWe', cndJG1R);
if (cndJG1R) { 
component.modal = this._lc('cbaTERF8e', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elzK3Mf = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elzK3Mf.formHandler) {
                    window.cfrmdlr = elzK3Mf.formHandler = new FormHandler(elzK3Mf, component);
                } else {
                    window.cfrmdlr = elzK3Mf.formHandler;
                }
            let el1H0n8 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el1H0n8.value = fval(component.project.id);
let elrr36P = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.id = this.value;}]},`value`,`${fval(component.project.client.id)}`,`name`,`${(`client`).toInputName()}`,`type`,`hidden`);
elrr36P.value = fval(component.project.client.id);
let elh1Rud = eo('div',null,null,`class`,`form-group`);
elh1Rud.cls = {'group-error': !!elzK3Mf.formHandler.getError(`name`) };

            for (let className in elh1Rud.cls) {
                elh1Rud.classList.toggle(className, elh1Rud.cls[className]);
            }  
            let elTYPJG = eo('label',null,null,`for`,`name`);
text(trans('Representative Name'));
let elBA41k = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elUtX6i = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elzK3Mf.formHandler.addError(`name`, 'required', trans('validation.required'));}return elzK3Mf.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Representative Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elUtX6i.value = fval(component.record.name);
let cndjZOT = elzK3Mf.formHandler.getError(`name`);
this.setState('stc734r', cndjZOT);
if (cndjZOT) { 
let el_pD20 = eo('div','4uCf',null,`class`,`alert alert-danger`);
text(elzK3Mf.formHandler.getError(`name`));
ec('div');
}ec('div');
let elmZveK = eo('div',null,null,`class`,`form-group`);
elmZveK.cls = {'group-error': !!elzK3Mf.formHandler.getError(`email`) };

            for (let className in elmZveK.cls) {
                elmZveK.classList.toggle(className, elmZveK.cls[className]);
            }  
            let elNxNId = eo('label',null,null,`for`,`email`);
text(trans('Representative Email Address'));
let el_SLZj = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elItsjw = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elzK3Mf.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elzK3Mf.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elzK3Mf.formHandler.removeError(`email`);}]},`value`,`${fval(component.record.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Representative Email Address`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
elItsjw.value = fval(component.record.email);
let cndhodR = elzK3Mf.formHandler.getError(`email`);
this.setState('stlLl0A', cndhodR);
if (cndhodR) { 
let elZGdWh = eo('div','sQDf',null,`class`,`alert alert-danger`);
text(elzK3Mf.formHandler.getError(`email`));
ec('div');
}ec('div');
let eln2NAv = eo('div',null,null,`class`,`form-group`);
eln2NAv.cls = {'group-error': !!elzK3Mf.formHandler.getError(`mobile`) };

            for (let className in eln2NAv.cls) {
                eln2NAv.classList.toggle(className, eln2NAv.cls[className]);
            }  
            let elKslrT = eo('label',null,null,`for`,`mobile`);
text(trans('Representative Mobile Number'));
let el_IVts = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elp8zj6 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.mobile = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elzK3Mf.formHandler.addError(`mobile`, 'required', trans('validation.required'));}return elzK3Mf.formHandler.removeError(`mobile`);}]},`value`,`${fval(component.record.mobile)}`,`name`,`${(`mobile`).toInputName()}`,`placeholder`,`${trans(`Representative Mobile Number`)}`,`type`,`text`,`class`,`form-control`,`id`,`mobile`);
elp8zj6.value = fval(component.record.mobile);
let cndWFWa = elzK3Mf.formHandler.getError(`mobile`);
this.setState('stgULuQ', cndWFWa);
if (cndWFWa) { 
let eluqQkY = eo('div','pBHf',null,`class`,`alert alert-danger`);
text(elzK3Mf.formHandler.getError(`mobile`));
ec('div');
}ec('div');
let el4Jty5 = eo('div',null,null,`class`,`form-group`);
el4Jty5.cls = {'group-error': !!elzK3Mf.formHandler.getError(`position`) };

            for (let className in el4Jty5.cls) {
                el4Jty5.classList.toggle(className, el4Jty5.cls[className]);
            }  
            let eliF30p = eo('label',null,null,`for`,`position`);
text(trans('Representative Position'));
let elOHCys = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eluhh4_ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.position = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elzK3Mf.formHandler.addError(`position`, 'required', trans('validation.required'));}return elzK3Mf.formHandler.removeError(`position`);}]},`value`,`${fval(component.record.position)}`,`name`,`${(`position`).toInputName()}`,`placeholder`,`${trans(`Representative Position`)}`,`type`,`text`,`class`,`form-control`,`id`,`position`);
eluhh4_.value = fval(component.record.position);
let cnd4Csd = elzK3Mf.formHandler.getError(`position`);
this.setState('st_J3Ii', cnd4Csd);
if (cnd4Csd) { 
let elIouli = eo('div','vQtf',null,`class`,`alert alert-danger`);
text(elzK3Mf.formHandler.getError(`position`));
ec('div');
}ec('div');
let elYhHvc = eo('div',null,null,`class`,`form-group`);
let eluP3eM = eo('label',null,null,`for`,`image`);
text(`Representative Image`);
ec('label');
let cmpktZf = this._lc('cvCTi1ekx', {parent:component,parentTop:flkModal,props:{src:component.record.image},attrs:{src:`${component.record.image}`,name:`${(`image`).toInputName()}`,id:'image'},state:'stnlOWe'});
ec('div');
let elXYjKi = eo('div',null,null,`class`,`m-t-1 text-center`);
let el2hS0S = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stnlOWe'});
}let cndUdDC = component.confirmDelete;
this.setState('st4IXcr', cndUdDC);
if (cndUdDC) { 
let cmpQN_X = this._lc('c8HOQN8dk', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st4IXcr'});
}
                    this.isReadyToGo();
                }
        });