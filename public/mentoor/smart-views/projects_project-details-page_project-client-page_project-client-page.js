_Component({
                selector: 'project-client-page',
                c: 'ProjectClientPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','updateClientInfo','isValidForm','isSending','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','confirmDelete','remove'],
                children: {c6sxPjNO_:'flk-image-input',czAKQLyDK:'project-layout',c3EQZseFc:'flk-image-input',cSZimbCCb:'flk-modal',cQRwc8IRe:'flk-alert'},
                render: function (component) {
                    let cmpjLvP = this._lc('czAKQLyDK', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elRnU4W = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Client Information`);
ec('h1');
let elZ1xse = eo('ul',null,null,`class`,`nav nav-tabs`);
let el5d8xh = eo('li',null,null,`class`,`nav-item`);
let el2NwrZ = eo('a',null,null,`class`,`nav-link active`,`href`,`#`,`data-toggle`,`tab`,`data-target`,`#company-profile-tab`);
text(`Company Profile`);
ec('a');
ec('li');
let cnd6tVY = component.project.client.id;
this.setState('stW_3Re', cnd6tVY);
if (cnd6tVY) { 
let el9n8a1 = eo('li','jFsf',null,`class`,`nav-item`);
let el4CKRb = eo('a','1Orf',null,`class`,`nav-link`,`data-toggle`,`tab`,`href`,`#`,`data-target`,`#client-representatives-tab`);
text(`Client
                Representatives`);
ec('a');
ec('li');
}ec('ul');
let elPqhNL = eo('div',null,null,`class`,`tab-content`);
let elyJSmP = eo('div',null,null,`class`,`tab-pane fade show active p-1`,`id`,`company-profile-tab`);
let elFLAvH = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.updateClientInfo($el)}]});

                if (! elFLAvH.formHandler) {
                    window.cfrmdlr = elFLAvH.formHandler = new FormHandler(elFLAvH, component);
                } else {
                    window.cfrmdlr = elFLAvH.formHandler;
                }
            let elEHnop = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elEHnop.value = fval(component.project.id);
let elHvU58 = eo('div',null,null,`class`,`form-group`);
elHvU58.cls = {'group-error': !!elFLAvH.formHandler.getError(`name`) };

            for (let className in elHvU58.cls) {
                elHvU58.classList.toggle(className, elHvU58.cls[className]);
            }  
            let el4DxdT = eo('label',null,null,`for`,`name`);
text(trans('Company Name'));
let eltVXXR = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elF6YeE = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFLAvH.formHandler.addError(`name`, 'required', trans('validation.required'));}return elFLAvH.formHandler.removeError(`name`);}]},`value`,`${fval(component.project.client.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Company Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elF6YeE.value = fval(component.project.client.name);
let cnd2NFF = elFLAvH.formHandler.getError(`name`);
this.setState('stpCxG8', cnd2NFF);
if (cnd2NFF) { 
let elLdnEP = eo('div','Chqf',null,`class`,`alert alert-danger`);
text(elFLAvH.formHandler.getError(`name`));
ec('div');
}ec('div');
let elXPxFz = eo('div',null,null,`class`,`form-group`);
elXPxFz.cls = {'group-error': !!elFLAvH.formHandler.getError(`address`) };

            for (let className in elXPxFz.cls) {
                elXPxFz.classList.toggle(className, elXPxFz.cls[className]);
            }  
            let elJ9ULP = eo('label',null,null,`for`,`address`);
text(trans('Company Address'));
let elwK3YN = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elVTWHS = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.address = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFLAvH.formHandler.addError(`address`, 'required', trans('validation.required'));}return elFLAvH.formHandler.removeError(`address`);}]},`value`,`${fval(component.project.client.address)}`,`name`,`${(`address`).toInputName()}`,`placeholder`,`${trans(`Company Address`)}`,`type`,`text`,`class`,`form-control`,`id`,`address`);
elVTWHS.value = fval(component.project.client.address);
let cnd4zNh = elFLAvH.formHandler.getError(`address`);
this.setState('stZxKmm', cnd4zNh);
if (cnd4zNh) { 
let elE9gjW = eo('div','Sd9f',null,`class`,`alert alert-danger`);
text(elFLAvH.formHandler.getError(`address`));
ec('div');
}ec('div');
let el6jAPX = eo('div',null,null,`class`,`form-group`);
el6jAPX.cls = {'group-error': !!elFLAvH.formHandler.getError(`email`) };

            for (let className in el6jAPX.cls) {
                el6jAPX.classList.toggle(className, el6jAPX.cls[className]);
            }  
            let elPqLW7 = eo('label',null,null,`for`,`email`);
text(trans('Company Official Email'));
let elZhSBN = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eloVVF0 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFLAvH.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elFLAvH.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elFLAvH.formHandler.removeError(`email`);}]},`value`,`${fval(component.project.client.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Company Official Email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
eloVVF0.value = fval(component.project.client.email);
let cndcaKP = elFLAvH.formHandler.getError(`email`);
this.setState('stPoQGM', cndcaKP);
if (cndcaKP) { 
let elslncw = eo('div','zG_f',null,`class`,`alert alert-danger`);
text(elFLAvH.formHandler.getError(`email`));
ec('div');
}ec('div');
let elEaQeE = eo('div',null,null,`class`,`form-group`);
elEaQeE.cls = {'group-error': !!elFLAvH.formHandler.getError(`telephones`) };

            for (let className in elEaQeE.cls) {
                elEaQeE.classList.toggle(className, elEaQeE.cls[className]);
            }  
            let elArBZ8 = eo('label',null,null,`for`,`telephones`);
text(trans('Company Official telephones'));
let elmVrdi = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elTeHmW = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.telephones = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFLAvH.formHandler.addError(`telephones`, 'required', trans('validation.required'));}return elFLAvH.formHandler.removeError(`telephones`);}]},`value`,`${fval(component.project.client.telephones)}`,`name`,`${(`telephones`).toInputName()}`,`placeholder`,`${trans(`Company Official telephones`)}`,`type`,`text`,`class`,`form-control`,`id`,`telephones`);
elTeHmW.value = fval(component.project.client.telephones);
let cndWQip = elFLAvH.formHandler.getError(`telephones`);
this.setState('st9b04_', cndWQip);
if (cndWQip) { 
let elCOMa_ = eo('div','frRf',null,`class`,`alert alert-danger`);
text(elFLAvH.formHandler.getError(`telephones`));
ec('div');
}ec('div');
let elpdKlM = eo('div',null,null,`class`,`form-group`);
let ela_WfC = eo('label',null,null,`for`,`logo`);
text(`Company logo`);
ec('label');
let cmpciNQ = this._lc('c6sxPjNO_', {parent:component,parentTop:projectLayout,props:{src:component.project.client.logo},attrs:{src:`${component.project.client.logo}`,name:`${(`logo`).toInputName()}`,id:'logo'}});
ec('div');
let elm43et = eo('div',null,null,`class`,`m-t-1`);
let elbL8HN = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
ec('div');
let elbThCs = eo('div',null,null,`class`,`tab-pane fade`,`id`,`client-representatives-tab`);
let elWAPNI = eo('table',null,null,`class`,`table table-striped`);
let el5skfq = eo('thead');
let elsqXBW = eo('tr');
let el75V8x = eo('th');
text(`Representative`);
ec('th');
let elUrB6P = eo('th');
text(`Email`);
ec('th');
let elkioRJ = eo('th');
text(`Mobile`);
ec('th');
let elzNO62 = eo('th');
text(`Position`);
ec('th');
let elEMsuX = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elRXf5y = eo('tbody');
let cndK6Ob = Is.empty(component.project.client.representatives);
this.setState('stLvacf', cndK6Ob);
let cnd5wBI = !(cndK6Ob);
this.setState('stU9CsP', cnd5wBI);
if (cndK6Ob) { 
let elekUvh = eo('tr','lDyf');
let eluviza = eo('td','Y_Mf',null, 'style', {textAlign:'center'},`colspan`,`5`);
text(`No Representative Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.client.representatives) {
let representative = component.project.client.representatives[index]; 
 let ii1hzJ = '7ZXi1eI' + index;
let eloNSUL = eo('tr','FfksOihRHP2o' + index+ii1hzJ);
let eld_dni = eo('td','vOnff'+ii1hzJ);
let cndXyNB = representative.image;
this.setState('stM2_kG', cndXyNB);
if (cndXyNB) { 
let elFld07 = ev('img','pZ8ff'+ii1hzJ,null,`src`,`${representative.image}`,`class`,`medium mr-2 circle`,`title`,`${representative.name}`,`alt`,`${representative.name}`);
}let elzx_cI = eo('span','xmmff'+ii1hzJ);
text(representative.name);
ec('span');
ec('td');
let eliXp_B = eo('td','G4Yff'+ii1hzJ);
text(representative.email);
ec('td');
let els9rHt = eo('td','fvGff'+ii1hzJ);
text(representative.mobile);
ec('td');
let elooT9o = eo('td','m8Uff'+ii1hzJ);
text(representative.position);
ec('td');
let el9pe7i = eo('td','BRgff'+ii1hzJ);
let elDzWWx = eo('button','VNIff'+ii1hzJ,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', representative, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elNhtQy = eo('i','2ukff'+ii1hzJ,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elDzWWx;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Representative')}`});
        ;
                    }, 20);                
                let eldV9fG = eo('button','9I_ff'+ii1hzJ,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(representative, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elCvyBK = eo('i','0Uuff'+ii1hzJ,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eldV9fG;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Representative')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}let elRzb53 = eo('tr');
let el_SGeK = eo('td',null,null, 'style', {textAlign:'right'},`colspan`,`5`);
let eliTLWo = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elQH_71 = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
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
let cndJ0GW = component.modalIsOpened;
this.setState('st72fvg', cndJ0GW);
if (cndJ0GW) { 
component.modal = this._lc('cSZimbCCb', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elXyBwb = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elXyBwb.formHandler) {
                    window.cfrmdlr = elXyBwb.formHandler = new FormHandler(elXyBwb, component);
                } else {
                    window.cfrmdlr = elXyBwb.formHandler;
                }
            let elsYNxs = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elsYNxs.value = fval(component.project.id);
let elAFk2Z = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.id = this.value;}]},`value`,`${fval(component.project.client.id)}`,`name`,`${(`client`).toInputName()}`,`type`,`hidden`);
elAFk2Z.value = fval(component.project.client.id);
let eln4a6H = eo('div',null,null,`class`,`form-group`);
eln4a6H.cls = {'group-error': !!elXyBwb.formHandler.getError(`name`) };

            for (let className in eln4a6H.cls) {
                eln4a6H.classList.toggle(className, eln4a6H.cls[className]);
            }  
            let elzZLZr = eo('label',null,null,`for`,`name`);
text(trans('Representative Name'));
let elhEGzK = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elaphiu = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXyBwb.formHandler.addError(`name`, 'required', trans('validation.required'));}return elXyBwb.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Representative Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elaphiu.value = fval(component.record.name);
let cndAh35 = elXyBwb.formHandler.getError(`name`);
this.setState('stYflfz', cndAh35);
if (cndAh35) { 
let elDNQNN = eo('div','nWDf',null,`class`,`alert alert-danger`);
text(elXyBwb.formHandler.getError(`name`));
ec('div');
}ec('div');
let elB0X20 = eo('div',null,null,`class`,`form-group`);
elB0X20.cls = {'group-error': !!elXyBwb.formHandler.getError(`email`) };

            for (let className in elB0X20.cls) {
                elB0X20.classList.toggle(className, elB0X20.cls[className]);
            }  
            let el2mNfU = eo('label',null,null,`for`,`email`);
text(trans('Representative Email Address'));
let elTJ5rt = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elX_qTk = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXyBwb.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elXyBwb.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elXyBwb.formHandler.removeError(`email`);}]},`value`,`${fval(component.record.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Representative Email Address`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
elX_qTk.value = fval(component.record.email);
let cndAvna = elXyBwb.formHandler.getError(`email`);
this.setState('stCx6fq', cndAvna);
if (cndAvna) { 
let elicGwm = eo('div','QO2f',null,`class`,`alert alert-danger`);
text(elXyBwb.formHandler.getError(`email`));
ec('div');
}ec('div');
let elgmjZE = eo('div',null,null,`class`,`form-group`);
elgmjZE.cls = {'group-error': !!elXyBwb.formHandler.getError(`mobile`) };

            for (let className in elgmjZE.cls) {
                elgmjZE.classList.toggle(className, elgmjZE.cls[className]);
            }  
            let elWndZS = eo('label',null,null,`for`,`mobile`);
text(trans('Representative Mobile Number'));
let el_F0Il = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el4XNKw = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.mobile = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXyBwb.formHandler.addError(`mobile`, 'required', trans('validation.required'));}return elXyBwb.formHandler.removeError(`mobile`);}]},`value`,`${fval(component.record.mobile)}`,`name`,`${(`mobile`).toInputName()}`,`placeholder`,`${trans(`Representative Mobile Number`)}`,`type`,`text`,`class`,`form-control`,`id`,`mobile`);
el4XNKw.value = fval(component.record.mobile);
let cndShqT = elXyBwb.formHandler.getError(`mobile`);
this.setState('stIy3Tq', cndShqT);
if (cndShqT) { 
let el89Xxv = eo('div','MSvf',null,`class`,`alert alert-danger`);
text(elXyBwb.formHandler.getError(`mobile`));
ec('div');
}ec('div');
let elwAlC4 = eo('div',null,null,`class`,`form-group`);
elwAlC4.cls = {'group-error': !!elXyBwb.formHandler.getError(`position`) };

            for (let className in elwAlC4.cls) {
                elwAlC4.classList.toggle(className, elwAlC4.cls[className]);
            }  
            let eliW5bd = eo('label',null,null,`for`,`position`);
text(trans('Representative Position'));
let el6L8Dp = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elQkbxa = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.position = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXyBwb.formHandler.addError(`position`, 'required', trans('validation.required'));}return elXyBwb.formHandler.removeError(`position`);}]},`value`,`${fval(component.record.position)}`,`name`,`${(`position`).toInputName()}`,`placeholder`,`${trans(`Representative Position`)}`,`type`,`text`,`class`,`form-control`,`id`,`position`);
elQkbxa.value = fval(component.record.position);
let cndQMeL = elXyBwb.formHandler.getError(`position`);
this.setState('stkfgN1', cndQMeL);
if (cndQMeL) { 
let elKm_LW = eo('div','joOf',null,`class`,`alert alert-danger`);
text(elXyBwb.formHandler.getError(`position`));
ec('div');
}ec('div');
let elRsYoo = eo('div',null,null,`class`,`form-group`);
let elhqTCU = eo('label',null,null,`for`,`image`);
text(`Representative Image`);
ec('label');
let cmpKr6l = this._lc('c3EQZseFc', {parent:component,parentTop:flkModal,props:{src:component.record.image},attrs:{src:`${component.record.image}`,name:`${(`image`).toInputName()}`,id:'image'},state:'st72fvg'});
ec('div');
let elOgdc_ = eo('div',null,null,`class`,`m-t-1 text-center`);
let el0CRTu = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'st72fvg'});
}let cndeCBP = component.confirmDelete;
this.setState('stEBiHa', cndeCBP);
if (cndeCBP) { 
let cmpISJi = this._lc('cQRwc8IRe', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stEBiHa'});
}
                    this.isReadyToGo();
                }
        });