_Component({
                selector: 'project-client-page',
                c: 'ProjectClientPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','updateClientInfo','isValidForm','isSending','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','confirmDelete','remove'],
                children: {cqSuw1oE4:'flk-image-input',c1BiVeSIv:'project-layout',cA2x5l9zQ:'flk-image-input',c2MVsAegI:'flk-modal',c433R_iP2:'flk-alert'},
                render: function (component) {
                    let cmpZfKy = this._lc('c1BiVeSIv', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elCncsl = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Client Information`);
ec('h1');
let elGFY7_ = eo('ul',null,null,`class`,`nav nav-tabs`);
let elfzddl = eo('li',null,null,`class`,`nav-item`);
let el8HYjO = eo('a',null,null,`class`,`nav-link active`,`href`,`#`,`data-toggle`,`tab`,`data-target`,`#company-profile-tab`);
text(`Company Profile`);
ec('a');
ec('li');
let cndN48m = component.project.client.id;
this.setState('stfXPyM', cndN48m);
if (cndN48m) { 
let elHoHsv = eo('li','s7Af',null,`class`,`nav-item`);
let elqmuWF = eo('a','97lf',null,`class`,`nav-link`,`data-toggle`,`tab`,`href`,`#`,`data-target`,`#client-representatives-tab`);
text(`Client
                Representatives`);
ec('a');
ec('li');
}ec('ul');
let elgJ8bp = eo('div',null,null,`class`,`tab-content`);
let eli1GsR = eo('div',null,null,`class`,`tab-pane fade show active p-1`,`id`,`company-profile-tab`);
let el9T6Fl = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.updateClientInfo($el)}]});

                if (! el9T6Fl.formHandler) {
                    window.cfrmdlr = el9T6Fl.formHandler = new FormHandler(el9T6Fl, component);
                } else {
                    window.cfrmdlr = el9T6Fl.formHandler;
                }
            let elH3BMn = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elH3BMn.value = fval(component.project.id);
let elwBle2 = eo('div',null,null,`class`,`form-group`);
elwBle2.cls = {'group-error': !!el9T6Fl.formHandler.getError(`name`) };

            for (let className in elwBle2.cls) {
                elwBle2.classList.toggle(className, elwBle2.cls[className]);
            }  
            let elPOhiW = eo('label',null,null,`for`,`name`);
text(trans('Company Name'));
let elTF2YZ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elaL74V = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el9T6Fl.formHandler.addError(`name`, 'required', trans('validation.required'));}return el9T6Fl.formHandler.removeError(`name`);}]},`value`,`${fval(component.project.client.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Company Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elaL74V.value = fval(component.project.client.name);
let cndonGI = el9T6Fl.formHandler.getError(`name`);
this.setState('stVmdVj', cndonGI);
if (cndonGI) { 
let elOFXfJ = eo('div','tBVf',null,`class`,`alert alert-danger`);
text(el9T6Fl.formHandler.getError(`name`));
ec('div');
}ec('div');
let el0ByF0 = eo('div',null,null,`class`,`form-group`);
el0ByF0.cls = {'group-error': !!el9T6Fl.formHandler.getError(`address`) };

            for (let className in el0ByF0.cls) {
                el0ByF0.classList.toggle(className, el0ByF0.cls[className]);
            }  
            let elyHkpB = eo('label',null,null,`for`,`address`);
text(trans('Company Address'));
let el9nJSp = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el1WxTo = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.address = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el9T6Fl.formHandler.addError(`address`, 'required', trans('validation.required'));}return el9T6Fl.formHandler.removeError(`address`);}]},`value`,`${fval(component.project.client.address)}`,`name`,`${(`address`).toInputName()}`,`placeholder`,`${trans(`Company Address`)}`,`type`,`text`,`class`,`form-control`,`id`,`address`);
el1WxTo.value = fval(component.project.client.address);
let cndC6Zq = el9T6Fl.formHandler.getError(`address`);
this.setState('stNiSLd', cndC6Zq);
if (cndC6Zq) { 
let el0jSIR = eo('div','OBQf',null,`class`,`alert alert-danger`);
text(el9T6Fl.formHandler.getError(`address`));
ec('div');
}ec('div');
let el7WDIZ = eo('div',null,null,`class`,`form-group`);
el7WDIZ.cls = {'group-error': !!el9T6Fl.formHandler.getError(`email`) };

            for (let className in el7WDIZ.cls) {
                el7WDIZ.classList.toggle(className, el7WDIZ.cls[className]);
            }  
            let eloJD7h = eo('label',null,null,`for`,`email`);
text(trans('Company Official Email'));
let eldyI3F = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elYH3HM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el9T6Fl.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return el9T6Fl.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return el9T6Fl.formHandler.removeError(`email`);}]},`value`,`${fval(component.project.client.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Company Official Email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
elYH3HM.value = fval(component.project.client.email);
let cndHman = el9T6Fl.formHandler.getError(`email`);
this.setState('stuhLQX', cndHman);
if (cndHman) { 
let elkl335 = eo('div','Rqkf',null,`class`,`alert alert-danger`);
text(el9T6Fl.formHandler.getError(`email`));
ec('div');
}ec('div');
let elmhbxj = eo('div',null,null,`class`,`form-group`);
elmhbxj.cls = {'group-error': !!el9T6Fl.formHandler.getError(`telephones`) };

            for (let className in elmhbxj.cls) {
                elmhbxj.classList.toggle(className, elmhbxj.cls[className]);
            }  
            let elUwBGL = eo('label',null,null,`for`,`telephones`);
text(trans('Company Official telephones'));
let elDlCdu = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el99yLB = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.telephones = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el9T6Fl.formHandler.addError(`telephones`, 'required', trans('validation.required'));}return el9T6Fl.formHandler.removeError(`telephones`);}]},`value`,`${fval(component.project.client.telephones)}`,`name`,`${(`telephones`).toInputName()}`,`placeholder`,`${trans(`Company Official telephones`)}`,`type`,`text`,`class`,`form-control`,`id`,`telephones`);
el99yLB.value = fval(component.project.client.telephones);
let cndQSYO = el9T6Fl.formHandler.getError(`telephones`);
this.setState('stSBBHi', cndQSYO);
if (cndQSYO) { 
let elKX3fA = eo('div','j1mf',null,`class`,`alert alert-danger`);
text(el9T6Fl.formHandler.getError(`telephones`));
ec('div');
}ec('div');
let el9LMpa = eo('div',null,null,`class`,`form-group`);
let elPaoV2 = eo('label',null,null,`for`,`logo`);
text(`Company logo`);
ec('label');
let cmpEFNJ = this._lc('cqSuw1oE4', {parent:component,parentTop:projectLayout,props:{src:component.project.client.logo},attrs:{src:`${component.project.client.logo}`,name:`${(`logo`).toInputName()}`,id:'logo'}});
ec('div');
let el_MGkc = eo('div',null,null,`class`,`m-t-1`);
let eld6RHL = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
ec('div');
let ell9XBg = eo('div',null,null,`class`,`tab-pane fade`,`id`,`client-representatives-tab`);
let eldkTA9 = eo('table',null,null,`class`,`table table-striped`);
let elTNFkl = eo('thead');
let elEi3XC = eo('tr');
let el_Gc3z = eo('th');
text(`Representative`);
ec('th');
let elupM3G = eo('th');
text(`Email`);
ec('th');
let elGzZTR = eo('th');
text(`Mobile`);
ec('th');
let el_biHK = eo('th');
text(`Position`);
ec('th');
let el5Clm2 = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elxgyEU = eo('tbody');
let cnd2j49 = Is.empty(component.project.client.representatives);
this.setState('st5LHIu', cnd2j49);
let cnd9nkh = !(cnd2j49);
this.setState('stjtx_l', cnd9nkh);
if (cnd2j49) { 
let elN2MT6 = eo('tr','q4mf');
let elzX6WL = eo('td','_0Mf',null, 'style', {textAlign:'center'},`colspan`,`5`);
text(`No Representative Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.client.representatives) {
let representative = component.project.client.representatives[index]; 
 let ii2ZP0 = 'le_qYAB' + index;
let el7Q49a = eo('tr','gqvEaVjxf7hH' + index+ii2ZP0);
let elzTRmg = eo('td','3jiff'+ii2ZP0);
let cndkifs = representative.image;
this.setState('stL_Smd', cndkifs);
if (cndkifs) { 
let el9TBnD = ev('img','lPHff'+ii2ZP0,null,`src`,`${representative.image}`,`class`,`medium mr-2 circle`,`title`,`${representative.name}`,`alt`,`${representative.name}`);
}let el2rAc5 = eo('span','bNtff'+ii2ZP0);
text(representative.name);
ec('span');
ec('td');
let elhfNef = eo('td','L2hff'+ii2ZP0);
text(representative.email);
ec('td');
let elcUTsI = eo('td','NFyff'+ii2ZP0);
text(representative.mobile);
ec('td');
let el1ezCS = eo('td','7Xbff'+ii2ZP0);
text(representative.position);
ec('td');
let elyA_gx = eo('td','5aYff'+ii2ZP0);
let elPZfWJ = eo('button','1TGff'+ii2ZP0,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', representative, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elqLQKK = eo('i','IyRff'+ii2ZP0,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elPZfWJ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Representative')}`});
        ;
                    }, 20);                
                let elw71lG = eo('button','GxLff'+ii2ZP0,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(representative, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elFpQ4W = eo('i','QZ1ff'+ii2ZP0,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elw71lG;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Representative')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}let elBIMKW = eo('tr');
let eluQu64 = eo('td',null,null, 'style', {textAlign:'right'},`colspan`,`5`);
let el52WHO = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elyyCyG = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
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
let cndgJkB = component.modalIsOpened;
this.setState('stnkTJc', cndgJkB);
if (cndgJkB) { 
component.modal = this._lc('c2MVsAegI', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elNPDr7 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elNPDr7.formHandler) {
                    window.cfrmdlr = elNPDr7.formHandler = new FormHandler(elNPDr7, component);
                } else {
                    window.cfrmdlr = elNPDr7.formHandler;
                }
            let el9_Fu0 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el9_Fu0.value = fval(component.project.id);
let elE_rBX = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.id = this.value;}]},`value`,`${fval(component.project.client.id)}`,`name`,`${(`client`).toInputName()}`,`type`,`hidden`);
elE_rBX.value = fval(component.project.client.id);
let elB9Ywy = eo('div',null,null,`class`,`form-group`);
elB9Ywy.cls = {'group-error': !!elNPDr7.formHandler.getError(`name`) };

            for (let className in elB9Ywy.cls) {
                elB9Ywy.classList.toggle(className, elB9Ywy.cls[className]);
            }  
            let el4sNEt = eo('label',null,null,`for`,`name`);
text(trans('Representative Name'));
let elcEK9d = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elhMhcw = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elNPDr7.formHandler.addError(`name`, 'required', trans('validation.required'));}return elNPDr7.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Representative Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elhMhcw.value = fval(component.record.name);
let cndVzmR = elNPDr7.formHandler.getError(`name`);
this.setState('stIEmh4', cndVzmR);
if (cndVzmR) { 
let elksSLY = eo('div','r7vf',null,`class`,`alert alert-danger`);
text(elNPDr7.formHandler.getError(`name`));
ec('div');
}ec('div');
let elw0T_D = eo('div',null,null,`class`,`form-group`);
elw0T_D.cls = {'group-error': !!elNPDr7.formHandler.getError(`email`) };

            for (let className in elw0T_D.cls) {
                elw0T_D.classList.toggle(className, elw0T_D.cls[className]);
            }  
            let elbTxJj = eo('label',null,null,`for`,`email`);
text(trans('Representative Email Address'));
let elhlxO9 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elCVkDZ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elNPDr7.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elNPDr7.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elNPDr7.formHandler.removeError(`email`);}]},`value`,`${fval(component.record.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Representative Email Address`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
elCVkDZ.value = fval(component.record.email);
let cnd3P2l = elNPDr7.formHandler.getError(`email`);
this.setState('str3Y5O', cnd3P2l);
if (cnd3P2l) { 
let elGTiPl = eo('div','ouCf',null,`class`,`alert alert-danger`);
text(elNPDr7.formHandler.getError(`email`));
ec('div');
}ec('div');
let elbO5M4 = eo('div',null,null,`class`,`form-group`);
elbO5M4.cls = {'group-error': !!elNPDr7.formHandler.getError(`mobile`) };

            for (let className in elbO5M4.cls) {
                elbO5M4.classList.toggle(className, elbO5M4.cls[className]);
            }  
            let elHrbdK = eo('label',null,null,`for`,`mobile`);
text(trans('Representative Mobile Number'));
let elrnEJm = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elW0kJm = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.mobile = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elNPDr7.formHandler.addError(`mobile`, 'required', trans('validation.required'));}return elNPDr7.formHandler.removeError(`mobile`);}]},`value`,`${fval(component.record.mobile)}`,`name`,`${(`mobile`).toInputName()}`,`placeholder`,`${trans(`Representative Mobile Number`)}`,`type`,`text`,`class`,`form-control`,`id`,`mobile`);
elW0kJm.value = fval(component.record.mobile);
let cndDZDA = elNPDr7.formHandler.getError(`mobile`);
this.setState('stfNE03', cndDZDA);
if (cndDZDA) { 
let elSQ5TR = eo('div','xVIf',null,`class`,`alert alert-danger`);
text(elNPDr7.formHandler.getError(`mobile`));
ec('div');
}ec('div');
let elg_e91 = eo('div',null,null,`class`,`form-group`);
elg_e91.cls = {'group-error': !!elNPDr7.formHandler.getError(`position`) };

            for (let className in elg_e91.cls) {
                elg_e91.classList.toggle(className, elg_e91.cls[className]);
            }  
            let elM9KRe = eo('label',null,null,`for`,`position`);
text(trans('Representative Position'));
let elP0r98 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elUzjWp = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.position = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elNPDr7.formHandler.addError(`position`, 'required', trans('validation.required'));}return elNPDr7.formHandler.removeError(`position`);}]},`value`,`${fval(component.record.position)}`,`name`,`${(`position`).toInputName()}`,`placeholder`,`${trans(`Representative Position`)}`,`type`,`text`,`class`,`form-control`,`id`,`position`);
elUzjWp.value = fval(component.record.position);
let cndyDcO = elNPDr7.formHandler.getError(`position`);
this.setState('stIwa96', cndyDcO);
if (cndyDcO) { 
let ellKIfJ = eo('div','7bGf',null,`class`,`alert alert-danger`);
text(elNPDr7.formHandler.getError(`position`));
ec('div');
}ec('div');
let elumJwe = eo('div',null,null,`class`,`form-group`);
let elMnFSR = eo('label',null,null,`for`,`image`);
text(`Representative Image`);
ec('label');
let cmpnm9Z = this._lc('cA2x5l9zQ', {parent:component,parentTop:flkModal,props:{src:component.record.image},attrs:{src:`${component.record.image}`,name:`${(`image`).toInputName()}`,id:'image'},state:'stnkTJc'});
ec('div');
let el1s67p = eo('div',null,null,`class`,`m-t-1 text-center`);
let elcY05v = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stnkTJc'});
}let cndXRdu = component.confirmDelete;
this.setState('stFcIWs', cndXRdu);
if (cndXRdu) { 
let cmpIrnc = this._lc('c433R_iP2', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stFcIWs'});
}
                    this.isReadyToGo();
                }
        });