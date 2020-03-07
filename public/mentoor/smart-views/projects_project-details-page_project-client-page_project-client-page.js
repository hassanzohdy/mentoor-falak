_Component({
                selector: 'project-client-page',
                c: 'ProjectClientPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','updateClientInfo','isValidForm','isSending','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','confirmDelete','remove'],
                children: {cvXzcb0C9:'flk-image-input',ceHWC6dVO:'project-layout',cNN2vwxK5:'flk-image-input',cdUDKQuVR:'flk-modal',cLfXi5Jjp:'flk-alert'},
                render: function (component) {
                    let cmpNStT = this._lc('ceHWC6dVO', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elGnG4s = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Client Information`);
ec('h1');
let el0deeS = eo('ul',null,null,`class`,`nav nav-tabs`);
let elkgkkM = eo('li',null,null,`class`,`nav-item`);
let elIAaqn = eo('a',null,null,`class`,`nav-link active`,`href`,`#`,`data-toggle`,`tab`,`data-target`,`#company-profile-tab`);
text(`Company Profile`);
ec('a');
ec('li');
let cnd807q = component.project.client.id;
this.setState('stl2_RY', cnd807q);
if (cnd807q) { 
let el7TgQ8 = eo('li','i6nf',null,`class`,`nav-item`);
let el5ZC3c = eo('a','88Xf',null,`class`,`nav-link`,`data-toggle`,`tab`,`href`,`#`,`data-target`,`#client-representatives-tab`);
text(`Client
                Representatives`);
ec('a');
ec('li');
}ec('ul');
let eln0KCV = eo('div',null,null,`class`,`tab-content`);
let elSyPLz = eo('div',null,null,`class`,`tab-pane fade show active p-1`,`id`,`company-profile-tab`);
let el8BGRv = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.updateClientInfo($el)}]});

                if (! el8BGRv.formHandler) {
                    window.cfrmdlr = el8BGRv.formHandler = new FormHandler(el8BGRv, component);
                } else {
                    window.cfrmdlr = el8BGRv.formHandler;
                }
            let elbwEW5 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elbwEW5.value = fval(component.project.id);
let elKD9aa = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el8BGRv.formHandler.getError(`name`) })}`);
let elqoaHx = eo('label',null,null,`for`,`name`);
text(trans('Company Name'));
let elS5rZ8 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el40WGM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el8BGRv.formHandler.addError(`name`, 'required', trans('validation.required'));}return el8BGRv.formHandler.removeError(`name`);}]},`value`,`${fval(component.project.client.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Company Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el40WGM.value = fval(component.project.client.name);
let cndulvo = el8BGRv.formHandler.getError(`name`);
this.setState('stfUGaW', cndulvo);
if (cndulvo) { 
let elJt_0h = eo('div','hoGf',null,`class`,`alert alert-danger`);
text(el8BGRv.formHandler.getError(`name`));
ec('div');
}ec('div');
let elG7f7R = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el8BGRv.formHandler.getError(`address`) })}`);
let elYiftC = eo('label',null,null,`for`,`address`);
text(trans('Company Address'));
let el2s7xS = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elnDeIG = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.address = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el8BGRv.formHandler.addError(`address`, 'required', trans('validation.required'));}return el8BGRv.formHandler.removeError(`address`);}]},`value`,`${fval(component.project.client.address)}`,`name`,`${(`address`).toInputName()}`,`placeholder`,`${trans(`Company Address`)}`,`type`,`text`,`class`,`form-control`,`id`,`address`);
elnDeIG.value = fval(component.project.client.address);
let cndN9BG = el8BGRv.formHandler.getError(`address`);
this.setState('styPe1C', cndN9BG);
if (cndN9BG) { 
let el9acT2 = eo('div','h24f',null,`class`,`alert alert-danger`);
text(el8BGRv.formHandler.getError(`address`));
ec('div');
}ec('div');
let ell5sHz = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el8BGRv.formHandler.getError(`email`) })}`);
let eltvzgl = eo('label',null,null,`for`,`email`);
text(trans('Company Official Email'));
let elERVfK = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elHgvmm = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el8BGRv.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return el8BGRv.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return el8BGRv.formHandler.removeError(`email`);}]},`value`,`${fval(component.project.client.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Company Official Email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
elHgvmm.value = fval(component.project.client.email);
let cndtiDg = el8BGRv.formHandler.getError(`email`);
this.setState('stfdRKQ', cndtiDg);
if (cndtiDg) { 
let eltLvyW = eo('div','cDuf',null,`class`,`alert alert-danger`);
text(el8BGRv.formHandler.getError(`email`));
ec('div');
}ec('div');
let elsF9v_ = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el8BGRv.formHandler.getError(`telephones`) })}`);
let elbtBOT = eo('label',null,null,`for`,`telephones`);
text(trans('Company Official telephones'));
let eldxdv9 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elpxMgP = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.telephones = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el8BGRv.formHandler.addError(`telephones`, 'required', trans('validation.required'));}return el8BGRv.formHandler.removeError(`telephones`);}]},`value`,`${fval(component.project.client.telephones)}`,`name`,`${(`telephones`).toInputName()}`,`placeholder`,`${trans(`Company Official telephones`)}`,`type`,`text`,`class`,`form-control`,`id`,`telephones`);
elpxMgP.value = fval(component.project.client.telephones);
let cndIbrz = el8BGRv.formHandler.getError(`telephones`);
this.setState('stoQ9sg', cndIbrz);
if (cndIbrz) { 
let elxPUFL = eo('div','j0ff',null,`class`,`alert alert-danger`);
text(el8BGRv.formHandler.getError(`telephones`));
ec('div');
}ec('div');
let elNb7Wh = eo('div',null,null,`class`,`form-group`);
let elXGjpZ = eo('label',null,null,`for`,`logo`);
text(`Company logo`);
ec('label');
let cmpQh3w = this._lc('cvXzcb0C9', {parent:component,parentTop:projectLayout,props:{src:component.project.client.logo},attrs:{src:`${component.project.client.logo}`,name:`${(`logo`).toInputName()}`,id:'logo'}});
ec('div');
let elCLpAY = eo('div',null,null,`class`,`m-t-1`);
let elaMU5Y = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
ec('div');
let elS7QoS = eo('div',null,null,`class`,`tab-pane fade`,`id`,`client-representatives-tab`);
let elV6H99 = eo('table',null,null,`class`,`table table-striped`);
let eli41WC = eo('thead');
let elFO_4f = eo('tr');
let elisqU7 = eo('th');
text(`Representative`);
ec('th');
let eloSVTT = eo('th');
text(`Email`);
ec('th');
let el1qhQ7 = eo('th');
text(`Mobile`);
ec('th');
let elNRWMK = eo('th');
text(`Position`);
ec('th');
let eloMtEV = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let el0sZ7g = eo('tbody');
let cndu1xQ = Is.empty(component.project.client.representatives);
this.setState('stJ228y', cndu1xQ);
let cnd9S1y = !(cndu1xQ);
this.setState('strEMUz', cnd9S1y);
if (cndu1xQ) { 
let elbvETU = eo('tr','JZXf');
let elGNegt = eo('td','1Sof',null, 'style', {textAlign:'center'},`colspan`,`5`);
text(`No Representative Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.client.representatives) {
let representative = component.project.client.representatives[index]; 
 let ii_jMj = '6EJatKz' + index;
let el8WuAb = eo('tr','bqF16NBsU0p9' + index+ii_jMj);
let elkhthV = eo('td','86Gff'+ii_jMj);
let cnd6jPt = representative.image;
this.setState('sthkfxY', cnd6jPt);
if (cnd6jPt) { 
let eludQNs = ev('img','sKRff'+ii_jMj,null,`src`,`${representative.image}`,`class`,`medium mr-2 circle`,`title`,`${representative.name}`,`alt`,`${representative.name}`);
}let ellr7Mw = eo('span','oBmff'+ii_jMj);
text(representative.name);
ec('span');
ec('td');
let elLOmPA = eo('td','BApff'+ii_jMj);
text(representative.email);
ec('td');
let elO5tBo = eo('td','s8Eff'+ii_jMj);
text(representative.mobile);
ec('td');
let elj8E8W = eo('td','9Knff'+ii_jMj);
text(representative.position);
ec('td');
let else29B = eo('td','elDff'+ii_jMj);
let el8Xa2F = eo('button','QMKff'+ii_jMj,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', representative, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let ellyfnm = eo('i','vwaff'+ii_jMj,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el8Xa2F;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Representative')}`});
        ;
                    }, 20);                
                let el1GRB6 = eo('button','xEqff'+ii_jMj,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(representative, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elALk6N = eo('i','kNfff'+ii_jMj,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el1GRB6;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Representative')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}let elWRJ9j = eo('tr');
let elQQRkK = eo('td',null,null, 'style', {textAlign:'right'},`colspan`,`5`);
let elZe0Tl = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let el4sHt9 = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
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
let cnd5IAH = component.modalIsOpened;
this.setState('stqo99V', cnd5IAH);
if (cnd5IAH) { 
component.modal = this._lc('cdUDKQuVR', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elUSr58 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elUSr58.formHandler) {
                    window.cfrmdlr = elUSr58.formHandler = new FormHandler(elUSr58, component);
                } else {
                    window.cfrmdlr = elUSr58.formHandler;
                }
            let elyKzBO = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elyKzBO.value = fval(component.project.id);
let elAqdQA = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.client.id = this.value;}]},`value`,`${fval(component.project.client.id)}`,`name`,`${(`client`).toInputName()}`,`type`,`hidden`);
elAqdQA.value = fval(component.project.client.id);
let elVJUMi = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elUSr58.formHandler.getError(`name`) })}`);
let elG5F0f = eo('label',null,null,`for`,`name`);
text(trans('Representative Name'));
let elHALBn = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elFekT2 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUSr58.formHandler.addError(`name`, 'required', trans('validation.required'));}return elUSr58.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Representative Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elFekT2.value = fval(component.record.name);
let cndpDwt = elUSr58.formHandler.getError(`name`);
this.setState('stBOLsX', cndpDwt);
if (cndpDwt) { 
let elQZHzE = eo('div','eynf',null,`class`,`alert alert-danger`);
text(elUSr58.formHandler.getError(`name`));
ec('div');
}ec('div');
let els9Fuq = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elUSr58.formHandler.getError(`email`) })}`);
let el_LxPH = eo('label',null,null,`for`,`email`);
text(trans('Representative Email Address'));
let elE2jJL = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el64up_ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUSr58.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elUSr58.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elUSr58.formHandler.removeError(`email`);}]},`value`,`${fval(component.record.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Representative Email Address`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
el64up_.value = fval(component.record.email);
let cnd22s6 = elUSr58.formHandler.getError(`email`);
this.setState('stuqdnw', cnd22s6);
if (cnd22s6) { 
let el3k3Mh = eo('div','DU1f',null,`class`,`alert alert-danger`);
text(elUSr58.formHandler.getError(`email`));
ec('div');
}ec('div');
let elW_eEF = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elUSr58.formHandler.getError(`mobile`) })}`);
let el8x6CC = eo('label',null,null,`for`,`mobile`);
text(trans('Representative Mobile Number'));
let elzXDEZ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elUwNv6 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.mobile = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUSr58.formHandler.addError(`mobile`, 'required', trans('validation.required'));}return elUSr58.formHandler.removeError(`mobile`);}]},`value`,`${fval(component.record.mobile)}`,`name`,`${(`mobile`).toInputName()}`,`placeholder`,`${trans(`Representative Mobile Number`)}`,`type`,`text`,`class`,`form-control`,`id`,`mobile`);
elUwNv6.value = fval(component.record.mobile);
let cndn4Ds = elUSr58.formHandler.getError(`mobile`);
this.setState('stgUyKW', cndn4Ds);
if (cndn4Ds) { 
let elRhv0_ = eo('div','CxPf',null,`class`,`alert alert-danger`);
text(elUSr58.formHandler.getError(`mobile`));
ec('div');
}ec('div');
let elKWdmY = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elUSr58.formHandler.getError(`position`) })}`);
let elUvh4w = eo('label',null,null,`for`,`position`);
text(trans('Representative Position'));
let elqdNJ8 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el6Y3Lx = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.position = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUSr58.formHandler.addError(`position`, 'required', trans('validation.required'));}return elUSr58.formHandler.removeError(`position`);}]},`value`,`${fval(component.record.position)}`,`name`,`${(`position`).toInputName()}`,`placeholder`,`${trans(`Representative Position`)}`,`type`,`text`,`class`,`form-control`,`id`,`position`);
el6Y3Lx.value = fval(component.record.position);
let cndZqYn = elUSr58.formHandler.getError(`position`);
this.setState('stwsMCb', cndZqYn);
if (cndZqYn) { 
let elune4d = eo('div','tQTf',null,`class`,`alert alert-danger`);
text(elUSr58.formHandler.getError(`position`));
ec('div');
}ec('div');
let elx5BEf = eo('div',null,null,`class`,`form-group`);
let elpooFu = eo('label',null,null,`for`,`image`);
text(`Representative Image`);
ec('label');
let cmp_Oh5 = this._lc('cNN2vwxK5', {parent:component,parentTop:flkModal,props:{src:component.record.image},attrs:{src:`${component.record.image}`,name:`${(`image`).toInputName()}`,id:'image'},state:'stqo99V'});
ec('div');
let elybbb5 = eo('div',null,null,`class`,`m-t-1 text-center`);
let elRCoYz = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stqo99V'});
}let cndYtL_ = component.confirmDelete;
this.setState('sth1Kwh', cndYtL_);
if (cndYtL_) { 
let cmp8FHg = this._lc('cLfXi5Jjp', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'sth1Kwh'});
}
                    this.isReadyToGo();
                }
        });