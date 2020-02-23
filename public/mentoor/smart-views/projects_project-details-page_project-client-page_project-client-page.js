_Component({
                selector: 'project-client-page',
                c: 'ProjectClientPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','updateClientInfo','isValidForm','isSending','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','confirmDelete','remove'],
                children: {cjb9Zue52:'flk-image-input',c4XR1jTl1:'project-layout',cpmSDzq5a:'flk-image-input',cbwpMqzx6:'flk-modal',cBV3X3JEr:'flk-alert'},
                render: function (component) {
                    let cmpV81o = this._lc('c4XR1jTl1', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elwVohi = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Client Information`);
ec('h1');
let eluImv4 = eo('ul',null,null,`class`,`nav nav-tabs`);
let elu4odg = eo('li',null,null,`class`,`nav-item`);
let eluKZs1 = eo('a',null,null,`class`,`nav-link active`,`href`,`#`,`data-toggle`,`tab`,`data-target`,`#company-profile-tab`);
text(`Company Profile`);
ec('a');
ec('li');
let cndmRl9 = component.project.client.id;
this.setState('stnsdB4', cndmRl9);
if (cndmRl9) { 
let elUkpiA = eo('li','1bof',null,`class`,`nav-item`);
let elGifmW = eo('a','dRbf',null,`class`,`nav-link`,`data-toggle`,`tab`,`href`,`#`,`data-target`,`#client-representatives-tab`);
text(`Client
                Representatives`);
ec('a');
ec('li');
}ec('ul');
let eliN8mJ = eo('div',null,null,`class`,`tab-content`);
let elYpT4m = eo('div',null,null,`class`,`tab-pane fade show active p-1`,`id`,`company-profile-tab`);
let elGrWJu = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.updateClientInfo($el)}]});

                if (! elGrWJu.formHandler) {
                    window.cfrmdlr = elGrWJu.formHandler = new FormHandler(elGrWJu, component);
                } else {
                    window.cfrmdlr = elGrWJu.formHandler;
                }
            let el5Ksmj = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el5Ksmj.value = fval(component.project.id);
let elqkCEO = eo('div',null,null,`class`,`form-group`);
elqkCEO.cls = {'group-error': !!elGrWJu.formHandler.getError(`name`) };

            for (let className in elqkCEO.cls) {
                elqkCEO.classList.toggle(className, elqkCEO.cls[className]);
            }  
            let elrooBI = eo('label',null,null,`for`,`name`);
text(trans('Company Name'));
let elnW4Sn = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elg_T63 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGrWJu.formHandler.addError(`name`, 'required', trans('validation.required'));}return elGrWJu.formHandler.removeError(`name`);}]},`value`,`${fval(component.project.client.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Company Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elg_T63.value = fval(component.project.client.name);
let cndfJ_W = elGrWJu.formHandler.getError(`name`);
this.setState('stiSvrA', cndfJ_W);
if (cndfJ_W) { 
let el7Orry = eo('div','y95f',null,`class`,`alert alert-danger`);
text(elGrWJu.formHandler.getError(`name`));
ec('div');
}ec('div');
let el3XBSO = eo('div',null,null,`class`,`form-group`);
el3XBSO.cls = {'group-error': !!elGrWJu.formHandler.getError(`address`) };

            for (let className in el3XBSO.cls) {
                el3XBSO.classList.toggle(className, el3XBSO.cls[className]);
            }  
            let elgsb6w = eo('label',null,null,`for`,`address`);
text(trans('Company Address'));
let elmQu0M = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el5rx2m = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.address = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGrWJu.formHandler.addError(`address`, 'required', trans('validation.required'));}return elGrWJu.formHandler.removeError(`address`);}]},`value`,`${fval(component.project.client.address)}`,`name`,`${(`address`).toInputName()}`,`placeholder`,`${trans(`Company Address`)}`,`type`,`text`,`class`,`form-control`,`id`,`address`);
el5rx2m.value = fval(component.project.client.address);
let cndYrwo = elGrWJu.formHandler.getError(`address`);
this.setState('stvQbAI', cndYrwo);
if (cndYrwo) { 
let elagEPt = eo('div','y26f',null,`class`,`alert alert-danger`);
text(elGrWJu.formHandler.getError(`address`));
ec('div');
}ec('div');
let el3RZnV = eo('div',null,null,`class`,`form-group`);
el3RZnV.cls = {'group-error': !!elGrWJu.formHandler.getError(`email`) };

            for (let className in el3RZnV.cls) {
                el3RZnV.classList.toggle(className, el3RZnV.cls[className]);
            }  
            let elegZ_S = eo('label',null,null,`for`,`email`);
text(trans('Company Official Email'));
let eliF6hM = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el2WYrD = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGrWJu.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elGrWJu.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elGrWJu.formHandler.removeError(`email`);}]},`value`,`${fval(component.project.client.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Company Official Email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
el2WYrD.value = fval(component.project.client.email);
let cndFVFt = elGrWJu.formHandler.getError(`email`);
this.setState('stRu9rI', cndFVFt);
if (cndFVFt) { 
let elnCYRf = eo('div','3Frf',null,`class`,`alert alert-danger`);
text(elGrWJu.formHandler.getError(`email`));
ec('div');
}ec('div');
let elBM9fK = eo('div',null,null,`class`,`form-group`);
elBM9fK.cls = {'group-error': !!elGrWJu.formHandler.getError(`telephones`) };

            for (let className in elBM9fK.cls) {
                elBM9fK.classList.toggle(className, elBM9fK.cls[className]);
            }  
            let elrqWtW = eo('label',null,null,`for`,`telephones`);
text(trans('Company Official telephones'));
let el04ys8 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elhLQOy = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.telephones = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGrWJu.formHandler.addError(`telephones`, 'required', trans('validation.required'));}return elGrWJu.formHandler.removeError(`telephones`);}]},`value`,`${fval(component.project.client.telephones)}`,`name`,`${(`telephones`).toInputName()}`,`placeholder`,`${trans(`Company Official telephones`)}`,`type`,`text`,`class`,`form-control`,`id`,`telephones`);
elhLQOy.value = fval(component.project.client.telephones);
let cnd7cr9 = elGrWJu.formHandler.getError(`telephones`);
this.setState('stcXo54', cnd7cr9);
if (cnd7cr9) { 
let el_nwIJ = eo('div','QtRf',null,`class`,`alert alert-danger`);
text(elGrWJu.formHandler.getError(`telephones`));
ec('div');
}ec('div');
let el7NXQf = eo('div',null,null,`class`,`form-group`);
let elL8riG = eo('label',null,null,`for`,`logo`);
text(`Company logo`);
ec('label');
let cmpuQB7 = this._lc('cjb9Zue52', {parent:component,parentTop:projectLayout,props:{src:component.project.client.logo},attrs:{src:`${component.project.client.logo}`,name:`${(`logo`).toInputName()}`,id:'logo'}});
ec('div');
let el9QYAX = eo('div',null,null,`class`,`m-t-1`);
let elVZuTV = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
ec('div');
let elseTJZ = eo('div',null,null,`class`,`tab-pane fade`,`id`,`client-representatives-tab`);
let eldq0m2 = eo('table',null,null,`class`,`table table-striped`);
let eldQc7j = eo('thead');
let elIeWys = eo('tr');
let elg81Jr = eo('th');
text(`Representative`);
ec('th');
let ellGwOV = eo('th');
text(`Email`);
ec('th');
let elr2ZzS = eo('th');
text(`Mobile`);
ec('th');
let el6XpVR = eo('th');
text(`Position`);
ec('th');
let elGEXIB = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elokwc6 = eo('tbody');
let cndyLGe = Is.empty(component.project.client.representatives);
this.setState('st6K19z', cndyLGe);
let cndOoZb = !(cndyLGe);
this.setState('stYUkFe', cndOoZb);
if (cndyLGe) { 
let elgmv_d = eo('tr','oDgf');
let el07iRZ = eo('td','erNf',null, 'style', {textAlign:'center'},`colspan`,`5`);
text(`No Representative Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.client.representatives) {
let representative = component.project.client.representatives[index]; 
 let ii6FCM = '20IlXt0' + index;
let elnv0kw = eo('tr','SoPLlBzG2p27' + index+ii6FCM);
let el2PwnH = eo('td','dInff'+ii6FCM);
let cndPQQn = representative.image;
this.setState('stsae4o', cndPQQn);
if (cndPQQn) { 
let elSnc2M = ev('img','6dbff'+ii6FCM,null,`src`,`${representative.image}`,`class`,`medium mr-2 circle`,`title`,`${representative.name}`,`alt`,`${representative.name}`);
}let eloo1PL = eo('span','yX8ff'+ii6FCM);
text(representative.name);
ec('span');
ec('td');
let elbig7F = eo('td','68pff'+ii6FCM);
text(representative.email);
ec('td');
let elT0uaZ = eo('td','RIlff'+ii6FCM);
text(representative.mobile);
ec('td');
let eln_303 = eo('td','rv4ff'+ii6FCM);
text(representative.position);
ec('td');
let elz_4kB = eo('td','IPYff'+ii6FCM);
let elN6u7L = eo('button','HKiff'+ii6FCM,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', representative, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elOTmwz = eo('i','g7xff'+ii6FCM,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elN6u7L;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Representative')}`});
        ;
                    }, 20);                
                let elP8AVg = eo('button','m8Iff'+ii6FCM,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(representative, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let el54yMU = eo('i','qMGff'+ii6FCM,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elP8AVg;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Representative')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}let elSvTqY = eo('tr');
let el8lTs2 = eo('td',null,null, 'style', {textAlign:'right'},`colspan`,`5`);
let elCNjiW = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let el4Vfun = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
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
let cndnr_e = component.modalIsOpened;
this.setState('stBhmIK', cndnr_e);
if (cndnr_e) { 
component.modal = this._lc('cbwpMqzx6', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elnNATH = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elnNATH.formHandler) {
                    window.cfrmdlr = elnNATH.formHandler = new FormHandler(elnNATH, component);
                } else {
                    window.cfrmdlr = elnNATH.formHandler;
                }
            let elz1rSE = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elz1rSE.value = fval(component.project.id);
let elNFl12 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.id = this.value;}]},`value`,`${fval(component.project.client.id)}`,`name`,`${(`client`).toInputName()}`,`type`,`hidden`);
elNFl12.value = fval(component.project.client.id);
let elem97x = eo('div',null,null,`class`,`form-group`);
elem97x.cls = {'group-error': !!elnNATH.formHandler.getError(`name`) };

            for (let className in elem97x.cls) {
                elem97x.classList.toggle(className, elem97x.cls[className]);
            }  
            let eloIZi0 = eo('label',null,null,`for`,`name`);
text(trans('Representative Name'));
let elVjc1N = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elbu6JA = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elnNATH.formHandler.addError(`name`, 'required', trans('validation.required'));}return elnNATH.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Representative Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elbu6JA.value = fval(component.record.name);
let cndonnL = elnNATH.formHandler.getError(`name`);
this.setState('stR7alj', cndonnL);
if (cndonnL) { 
let el5gJFl = eo('div','xKlf',null,`class`,`alert alert-danger`);
text(elnNATH.formHandler.getError(`name`));
ec('div');
}ec('div');
let elykyfr = eo('div',null,null,`class`,`form-group`);
elykyfr.cls = {'group-error': !!elnNATH.formHandler.getError(`email`) };

            for (let className in elykyfr.cls) {
                elykyfr.classList.toggle(className, elykyfr.cls[className]);
            }  
            let eldv5UU = eo('label',null,null,`for`,`email`);
text(trans('Representative Email Address'));
let el7HTWS = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el7VCn0 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elnNATH.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elnNATH.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elnNATH.formHandler.removeError(`email`);}]},`value`,`${fval(component.record.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Representative Email Address`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
el7VCn0.value = fval(component.record.email);
let cnd8RW8 = elnNATH.formHandler.getError(`email`);
this.setState('stD3Am4', cnd8RW8);
if (cnd8RW8) { 
let elimMHc = eo('div','LF8f',null,`class`,`alert alert-danger`);
text(elnNATH.formHandler.getError(`email`));
ec('div');
}ec('div');
let elqzU19 = eo('div',null,null,`class`,`form-group`);
elqzU19.cls = {'group-error': !!elnNATH.formHandler.getError(`mobile`) };

            for (let className in elqzU19.cls) {
                elqzU19.classList.toggle(className, elqzU19.cls[className]);
            }  
            let elNAWxk = eo('label',null,null,`for`,`mobile`);
text(trans('Representative Mobile Number'));
let elmR1Of = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elk3jdk = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.mobile = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elnNATH.formHandler.addError(`mobile`, 'required', trans('validation.required'));}return elnNATH.formHandler.removeError(`mobile`);}]},`value`,`${fval(component.record.mobile)}`,`name`,`${(`mobile`).toInputName()}`,`placeholder`,`${trans(`Representative Mobile Number`)}`,`type`,`text`,`class`,`form-control`,`id`,`mobile`);
elk3jdk.value = fval(component.record.mobile);
let cndg18_ = elnNATH.formHandler.getError(`mobile`);
this.setState('stWzOYY', cndg18_);
if (cndg18_) { 
let elcG0kK = eo('div','dZZf',null,`class`,`alert alert-danger`);
text(elnNATH.formHandler.getError(`mobile`));
ec('div');
}ec('div');
let elILmCq = eo('div',null,null,`class`,`form-group`);
elILmCq.cls = {'group-error': !!elnNATH.formHandler.getError(`position`) };

            for (let className in elILmCq.cls) {
                elILmCq.classList.toggle(className, elILmCq.cls[className]);
            }  
            let elmf9gB = eo('label',null,null,`for`,`position`);
text(trans('Representative Position'));
let elrJIbN = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elMfQx2 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.position = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elnNATH.formHandler.addError(`position`, 'required', trans('validation.required'));}return elnNATH.formHandler.removeError(`position`);}]},`value`,`${fval(component.record.position)}`,`name`,`${(`position`).toInputName()}`,`placeholder`,`${trans(`Representative Position`)}`,`type`,`text`,`class`,`form-control`,`id`,`position`);
elMfQx2.value = fval(component.record.position);
let cndJLjp = elnNATH.formHandler.getError(`position`);
this.setState('stohYlq', cndJLjp);
if (cndJLjp) { 
let el2QT05 = eo('div','11vf',null,`class`,`alert alert-danger`);
text(elnNATH.formHandler.getError(`position`));
ec('div');
}ec('div');
let elFGg3d = eo('div',null,null,`class`,`form-group`);
let elPiPJS = eo('label',null,null,`for`,`image`);
text(`Representative Image`);
ec('label');
let cmpxtLW = this._lc('cpmSDzq5a', {parent:component,parentTop:flkModal,props:{src:component.record.image},attrs:{src:`${component.record.image}`,name:`${(`image`).toInputName()}`,id:'image'},state:'stBhmIK'});
ec('div');
let eludgCK = eo('div',null,null,`class`,`m-t-1 text-center`);
let elpP18b = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stBhmIK'});
}let cndoEqZ = component.confirmDelete;
this.setState('stgFLfA', cndoEqZ);
if (cndoEqZ) { 
let cmpB371 = this._lc('cBV3X3JEr', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stgFLfA'});
}
                    this.isReadyToGo();
                }
        });