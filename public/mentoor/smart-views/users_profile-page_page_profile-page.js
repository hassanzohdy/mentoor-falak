_Component({
                selector: 'profile-page',
                c: 'ProfilePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['updateProfile','user','loadTracks','loadEinsteinCategories','updateMessage','requireNameChange','isUpdating','editMode','form','getUserImage','inEditMode','validateUserName','errors','homePages','isLoading','tracks','einsteinCategories','affiliateUrl','copied'],
                children: {cMBc_FKad:'flk-image-input',cC0wyEQ57:'gold-icon',cUm3zlWPU:'flk-number-counter',c02kK5Rq2:'flk-number-counter',cU7gukFIv:'flk-number-counter',cHBtPeN4t:'flk-number-counter',cMbnHW154:'flk-number-counter',coK42tItY:'flk-number-counter',cbiAszvNG:'flk-number-counter',c1FItyydL:'flk-number-counter',ca2QzJwpK:'flk-number-counter',c0hVdJpG_:'flk-number-counter',cIl1J60J9:'flk-number-counter',cHcNM_oCc:'flk-number-counter',chcbTUqXa:'flk-dropdown-list',c61cbV7KZ:'flk-dropdown-list',crmDYYM0a:'flk-time-ago',c_Y92PsgM:'flk-spinner',ciCUzH14w:'track-card',cY6D0eUDd:'flk-spinner',cmO_H05aX:'einstein-category-card',cVKorudyy:'layout',cS1VNNdrX:'flk-message'},
                render: function (component) {
                    let cmpT7A9 = this._lc('cVKorudyy', {parent:component,content:(layout) => {let elUZMtQ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.updateProfile($el)}]});
component.form = elUZMtQ;

                if (! elUZMtQ.formHandler) {
                    window.cfrmdlr = elUZMtQ.formHandler = new FormHandler(elUZMtQ, component);
                } else {
                    window.cfrmdlr = elUZMtQ.formHandler;
                }
            let eloSdAl = eo('div',null,null,`class`,`rows`);
let elAhf4F = eo('ul',null,null,`class`,`nav nav-tabs`);
let elqoAih = eo('li',null,null,`class`,`nav-item`);
let elM_Nd6 = eo('a',null,null,`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#overview-tab`);
let elUp5pO = eo('i',null,null,`class`,`${fas('street-view') + ' mr-1 icon'}`);
ec('i');
text(`Overview`);
ec('a');
ec('li');
let elGIWAH = eo('li',null,null,`class`,`nav-item`);
let elX8zCd = eo('a',null,null,`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#account-info-tab`);
let el4I4vD = eo('i',null,null,`class`,`${fas('user') + ' mr-1 icon'}`);
ec('i');
text(`Account info`);
ec('a');
ec('li');
let cndf0EI = component.user.total.tracks > 0;
this.setState('stxabOx', cndf0EI);
if (cndf0EI) { 
let elOriLF = eo('li','MoKf',null,`class`,`nav-item`);
let elbSn49 = eo('a','ekbf',null, eventListeners, {onclick:[function(e) {var $el = this;component.loadTracks()}]},`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#academy-tracks-tab`);
let elJAW3C = eo('i','_gOf',null,`class`,`${fas('university') + ' mr-1 icon'}`);
ec('i');
text(`Academy tracks`);
let el32Uhb = eo('span','Hc2f',null,`class`,`badge total-answers badge-success`);
text(component.user.total.tracks);
ec('span');
ec('a');
ec('li');
}let cnd1PgL = Object.get(component.user.total, 'einstein.categories') > 0;
this.setState('st6R1gq', cnd1PgL);
if (cnd1PgL) { 
let elIbuq2 = eo('li','EsTf',null,`class`,`nav-item`);
let elcBgni = eo('a','Jotf',null, eventListeners, {onclick:[function(e) {var $el = this;component.loadEinsteinCategories()}]},`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#einstein-categories-tab`);
let elEVKrP = ev('img','XS4f',null,`src`,`${assets('images/ein-sm.png')}`,`class`,`einstein-icon`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
text(`Einstein categories`);
let eljQxsQ = eo('span','Crcf',null,`class`,`badge total-answers btn-purple`);
text(component.user.total.einstein.categories);
ec('span');
ec('a');
ec('li');
}let elQZZqk = eo('li',null,null,`class`,`nav-item`);
let el2xyy8 = eo('a',null,null,`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#affiliate-tab`);
let el8iXZs = eo('i',null,null,`class`,`${fas('user-plus') + ' mr-1 icon'}`);
ec('i');
text(`Affiliate program`);
ec('a');
ec('li');
ec('ul');
let elQ4OKR = eo('div',null,null,`class`,`cols`);
let elDEtwa = eo('div',null,null,`class`,`tab-content`);
let el3GW9S = eo('div',null,null,`class`,`tab-pane fade`,`id`,`overview-tab`);
let elo3y6y = eo('section',null,null,`id`,`profile-overview-tab`);
let cnd0S2Y = component.requireNameChange();
this.setState('stYO_vt', cnd0S2Y);
if (cnd0S2Y) { 
let el8Li91 = eo('div','0Ghf',null,`class`,`overlay`);
ec('div');
}let elHr5CR = eo('div',null,null,`class`,`text-center m-b-2`);
let elnOpek = eo('div',null,null,`class`,`relative`);
let cmpjKw5 = this._lc('cMBc_FKad', {parent:component,parentTop:layout,props:{disabled:component.isUpdating,src:component.getUserImage()},events:{onmouseover:function(e) {let $el = this; component.editMode = 'image'},onmouseout:function(e) {let $el = this; component.editMode = null},onchange:function(e) {let $el = this; component.updateProfile(component.form);}},boolAttrs:{disabled:component.isUpdating},attrs:{src:`${component.getUserImage()}`,name:`${(`image`).toInputName()}`}});
let cndrxm_ = component.user.username;
this.setState('st5ceIs', cndrxm_);
if (cndrxm_) { 
let elQM9rs = eo('span','YSAf',null,`class`,`grey-text`);
text('@' + component.user.username);
ec('span');
}let cndnFML = component.editMode == 'image';
this.setState('stGHpta', cndnFML);
if (cndnFML) { 
let elZSVPx = eo('span','Dpaf',null,`class`,`new-tooltip`);
text(`Click to edit`);
ec('span');
}ec('div');
let elbu656 = eo('div',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'name'; component.editMode}],onmouseout:[function(e) {var $el = this;component.editMode = null}]},`class`,`m-t-2 relative name-change-wrapper`);
let cndyR87 = component.requireNameChange();
this.setState('stGxfMF', cndyR87);
let cndu46X = component.inEditMode == 'name' || component.requireNameChange();
this.setState('stn1dky', cndu46X);
if (cndyR87) { 
let elVKxiT = eo('span','sQVf',null,`class`,`new-tooltip`);
text(`Add your last name`);
ec('span');
}let cndzwJE = component.inEditMode != 'name' && ! component.requireNameChange();
this.setState('stsY5Nv', cndzwJE);
let cndxFMo = cndu46X;
this.setState('stm0SmS', cndxFMo);
if (cndzwJE) { 
let elED5Sc = eo('h1','_6Af',null,`class`,`d-inline-block`);
text(component.user.name);
ec('h1');
}else if (cndxFMo) { 
let elNpPID = eo('div',null,null,`class`,`m-auto`,`id`,`name-change`);
let eleBVQr = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.firstName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUZMtQ.formHandler.addError(`firstName`, 'required', trans('validation.required'));}return elUZMtQ.formHandler.removeError(`firstName`);}]},`value`,`${fval(component.user.firstName)}`,`name`,`${(`firstName`).toInputName()}`,`placeholder`,`${trans(`First name`)}`,`type`,`text`,`class`,`form-control d-inline-block`,`id`,`firstName`);
eleBVQr.value = fval(component.user.firstName);
let cndNcXe = elUZMtQ.formHandler.getError(`firstName`);
this.setState('stNKgPT', cndNcXe);
if (cndNcXe) { 
let elNvcKu = eo('div','50Df',null,`class`,`alert alert-danger`);
text(elUZMtQ.formHandler.getError(`firstName`));
ec('div');
}let ellySp3 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.lastName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUZMtQ.formHandler.addError(`lastName`, 'required', trans('validation.required'));}return elUZMtQ.formHandler.removeError(`lastName`);}]},`value`,`${fval(component.user.lastName)}`,`name`,`${(`lastName`).toInputName()}`,`placeholder`,`${trans(`Last name`)}`,`type`,`text`,`class`,`form-control d-inline-block`,`id`,`lastName`);
ellySp3.value = fval(component.user.lastName);
let cndVZao = elUZMtQ.formHandler.getError(`lastName`);
this.setState('stGWGMY', cndVZao);
if (cndVZao) { 
let eliu199 = eo('div','oc9f',null,`class`,`alert alert-danger`);
text(elUZMtQ.formHandler.getError(`lastName`));
ec('div');
}let el9CDGp = ev('input',null,null,`name`,`${(`name`).toInputName()}`,`type`,`hidden`,`value`,`${ (component.user.firstName + ' ' + component.user.lastName) || component.user.name }`);
ec('div');
let elKmNAq = eo('div',null,null,`class`,`m-y-1`);
let eldHpMI = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn blue bold save-btn`);
text(`Save changes`);
ec('button');
let elU9ZSC = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn white black-text bold`);
text(`Close`);
ec('button');
ec('div');
}let cndUl23 = component.editMode == 'name' && ! component.inEditMode && ! component.requireNameChange();
this.setState('stL3YFw', cndUl23);
if (cndUl23) { 
let elJQy7E = eo('button','nmxf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'name'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elCpXl8 = eo('i','T2Tf',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('div');
let cmpHSjt = this._lc('cC0wyEQ57', {parent:component,parentTop:layout,props:{coins:component.user.gold}});
ec('div');
let eloBYvj = eo('div',null,null,`id`,`totals`,`class`,`text-center`);
let elJrB7v = eo('section',null,null,`class`,`profile-box pb-5 mb-5`);
let elnEX6w = eo('header',null,null,`class`,`col-12 profile-box-header m-b-5`);
let elSfFXI = eo('h1',null,null,`class`,`pl-5 my-0`);
text(`General Overview`);
ec('h1');
let el_CyJa = eo('span',null,null,`class`,`profile-box-header-line`);
ec('span');
ec('header');
let ellwYCD = eo('div',null,null,`class`,`row m-t-5 mx-0`);
let ellGM20 = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpE5bm = this._lc('cUm3zlWPU', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'tracks', '')},attrs:{class:'total-summary bold teal-border'}});
let elCXBXr = eo('div',null,null,`class`,`btn btn-sm btn-teal bold`);
text(`Academy tracks`);
ec('div');
ec('div');
let el1ZZ1m = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpjwFG = this._lc('c02kK5Rq2', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.all', '')},attrs:{class:'total-summary bold navy-border'}});
let elp_tAM = eo('div',null,null,`class`,`btn btn-sm btn-navy bold`);
text(`Academy answers`);
ec('div');
ec('div');
let elIwz5M = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpmuK3 = this._lc('cU7gukFIv', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.all', '')},attrs:{class:'total-summary bold purple-border'}});
let elXP2BH = eo('div',null,null,`class`,`btn btn-sm btn-purple bold`);
text(`Einstein puzzles`);
ec('div');
ec('div');
let elPdIR7 = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpBzlY = this._lc('cHBtPeN4t', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'invitations', '') || 0},attrs:{class:'total-summary bold lime-border'}});
let elU5eEn = eo('div',null,null,`class`,`btn btn-sm btn-lime bold`);
text(`Invitations`);
ec('div');
ec('div');
ec('div');
ec('section');
let eld3wS3 = eo('section',null,null,`class`,`profile-box py-5 my-5`);
let elGeCci = eo('header',null,null,`class`,`col-12 m-b-5 profile-box-header`);
let elk3Gml = eo('h1',null,null,`class`,`pl-5 my-0`);
text(`Academy`);
ec('h1');
let elA270T = eo('span',null,null,`class`,`profile-box-header-line`);
ec('span');
ec('header');
let elrXe35 = eo('div',null,null,`class`,`row m-t-5`);
let elcPMlB = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpLX9k = this._lc('cMbnHW154', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'tracks', '')},attrs:{class:'total-summary bold light-gray-border'}});
let elQP1OI = eo('div',null,null,`class`,`btn btn-sm btn-light-gray bold`);
text(`Unlocked tracks`);
ec('div');
ec('div');
let el8kCtv = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpmZWo = this._lc('coK42tItY', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.approved', '')},attrs:{class:'total-summary bold success-border'}});
let elnbVBq = eo('div',null,null,`class`,`btn btn-sm btn-success bold`);
text(`Approved answers`);
ec('div');
ec('div');
let el8Fjwv = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmptgzw = this._lc('cbiAszvNG', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.pending', '')},attrs:{class:'total-summary bold warning-border'}});
let elUnRg7 = eo('div',null,null,`class`,`btn btn-sm btn-warning bold`);
text(`Pending answers`);
ec('div');
ec('div');
let elHPQ8X = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpLqj2 = this._lc('c1FItyydL', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.rejected', '')},attrs:{class:'total-summary bold danger-border'}});
let eljG6Y3 = eo('div',null,null,`class`,`btn btn-sm btn-danger bold`);
text(`Rejected answers`);
ec('div');
ec('div');
ec('div');
ec('section');
let elr5EXy = eo('section',null,null,`class`,`profile-box py-5 my-5`);
let elkmJGY = eo('header',null,null,`class`,`col-12 m-b-5 profile-box-header`);
let elHm8mT = eo('h1',null,null,`class`,`pl-5 my-0`);
text(`Einstein Chamber`);
ec('h1');
let el8_R5V = eo('span',null,null,`class`,`profile-box-header-line`);
ec('span');
ec('header');
let el19dTe = eo('div',null,null,`class`,`row m-t-5`);
let elt54s9 = eo('div',null,null,`class`,`col-sm-3`);
let cmpSoiv = this._lc('ca2QzJwpK', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.categories', 0)},attrs:{class:'total-summary bold pencil-border'}});
let eltv5pZ = eo('div',null,null,`class`,`btn btn-sm btn-pencil bold`);
text(`Unlocked categories`);
ec('div');
ec('div');
let elXto1x = eo('div',null,null,`class`,`col-sm-3`);
let cmp2cHH = this._lc('c0hVdJpG_', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.approved', 0)},attrs:{class:'total-summary bold emerald-border'}});
let elsDAmu = eo('div',null,null,`class`,`btn btn-sm btn-emerald bold`);
text(`Approved`);
ec('div');
ec('div');
let elwRrCk = eo('div',null,null,`class`,`col-sm-3`);
let cmpNZJS = this._lc('cIl1J60J9', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.pending', 0)},attrs:{class:'total-summary bold dark-warning-border'}});
let el0ywPC = eo('div',null,null,`class`,`btn btn-sm btn-dark-warning bold`);
text(`Pending`);
ec('div');
ec('div');
let el44ENB = eo('div',null,null,`class`,`col-sm-3`);
let cmpkNMT = this._lc('cHcNM_oCc', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.rejected', 0)},attrs:{class:'total-summary bold dark-danger-border'}});
let elBuWJ0 = eo('div',null,null,`class`,`btn btn-sm btn-dark-danger bold`);
text(`Rejected`);
ec('div');
ec('div');
ec('div');
ec('section');
ec('div');
ec('section');
ec('div');
let elokHs8 = eo('div',null,null,`class`,`tab-pane fade`,`id`,`account-info-tab`,`role`,`tabpanel`,`aria-labelledby`,`account-info-tab`);
let elkM7jc = eo('section',null,null,`id`,`profile-settings-tab`);
let eladAt0 = eo('table',null,null,`class`,`table table-bordered`);
let elBFTfK = eo('tbody');
let elnpeH9 = eo('tr');
let elmN1iC = eo('th');
text(`Account id`);
ec('th');
let elIDUBn = eo('td');
text(component.user.id);
ec('td');
ec('tr');
let eloWU8n = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'email'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elMXnZp = eo('th');
text(`Email address`);
ec('th');
let eldPg_3 = eo('td');
let cndBWtL = component.inEditMode != 'email';
this.setState('st5Xq6R', cndBWtL);
let cnddM6K = !(cndBWtL);
this.setState('stM7Kph', cnddM6K);
if (cndBWtL) { 
let elka0rI = eo('span','TYef');
text(component.user.email);
ec('span');
}else { 
let elSgaAt = eo('div',null,null,`class`,`row`);
let elAz14P = eo('div',null,null,`class`,`col-9`);
let elOhtZa = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUZMtQ.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elUZMtQ.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elUZMtQ.formHandler.removeError(`email`);}]},`value`,`${fval(component.user.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Email address`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
elOhtZa.value = fval(component.user.email);
let cndr0jL = elUZMtQ.formHandler.getError(`email`);
this.setState('stq9OqJ', cndr0jL);
if (cndr0jL) { 
let elay9pH = eo('div','jYLf',null,`class`,`alert alert-danger`);
text(elUZMtQ.formHandler.getError(`email`));
ec('div');
}ec('div');
let el7Mw0p = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let el3Vk7O = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elX7tU6 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cndx24c = component.editMode == 'email' && ! component.inEditMode;
this.setState('stGbmWG', cndx24c);
if (cndx24c) { 
let elSSoiQ = eo('button','zFlf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'email'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elsVgcb = eo('i','iFMf',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let elDS2C8 = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'username'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elcF0Rc = eo('th');
text(`Username`);
ec('th');
let el0XrK3 = eo('td');
let cndYKhg = component.inEditMode != 'username';
this.setState('st0GUk0', cndYKhg);
let cnd0RDT = !(cndYKhg);
this.setState('str765d', cnd0RDT);
if (cndYKhg) { 
let elXkICi = eo('span','Z5Yf');
text(component.user.username || 'N/a');
ec('span');
}else { 
let elJdcyg = eo('div',null,null,`class`,`row`);
let elYN0iK = eo('div',null,null,`class`,`col-9`);
text(`@`);
let el9pgia = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.username = this.value;},function(e) {var $el = this;component.validateUserName($el.value)}]},`value`,`${fval(component.user.username)}`,`name`,`${(`username`).toInputName()}`,`placeholder`,`${trans(`username`)}`,`type`,`text`,`class`,`username-input`,`id`,`username`);
el9pgia.autocomplete = el9pgia.name == 'password' && Is.browser('chrome') ? 'new-password' : 'off';
el9pgia.value = fval(component.user.username);
let cndfcrH = component.errors.username;
this.setState('str2i60', cndfcrH);
if (cndfcrH) { 
let el3PEYA = eo('span','eS1f',null,`class`,`red-text bold`);
text(component.errors.username);
ec('span');
}ec('div');
let elzsSrM = eo('div',null,null,`class`,`col-3 p-0`);
let elsf1XZ = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elNOkEw = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
let elDk00g = eo('div',null,null,`class`,`row m-0`);
let elOmdZq = eo('div',null,null,`class`,`col`);
let el0TRYG = eo('div',null,null,`class`,`bold`);
text(`Username creation criteria`);
ec('div');
let elh7U91 = eo('small');
text(`Must starts with English letter (lowercase).`);
let el69ECG = ev('br');
text(`Can contain only English letters, Numbers, dot or underscore.`);
let elHM5fN = ev('br');
text(`No more than one dot or underscore can be written after each other.`);
let elJXYIW = ev('br');
text(`No whitespaces allowed.`);
let eltDF_u = ev('br');
ec('small');
ec('div');
ec('div');
ec('div');
}let cndEuGi = component.editMode == 'username' && ! component.inEditMode;
this.setState('stoy7J9', cndEuGi);
if (cndEuGi) { 
let el4Ao6J = eo('button','C7Uf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'username'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elLUHY4 = eo('i','Wrtf',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let el_757K = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'gender'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elBuBLQ = eo('th');
text(`Gender`);
ec('th');
let elOWglv = eo('td');
let cndaFjK = component.inEditMode != 'gender';
this.setState('stmrs_U', cndaFjK);
let cndvyeJ = !(cndaFjK);
this.setState('sturLfm', cndvyeJ);
if (cndaFjK) { 
let elu4_R9 = eo('span','P1hf',null,`class`,`text-capitalize`);
text(component.user.gender || 'N/a');
ec('span');
}else { 
let elnyeb4 = eo('div',null,null,`class`,`row`);
let elWgeTF = eo('div',null,null,`class`,`col-9`);
let cmpIqfO = this._lc('chcbTUqXa', {parent:component,parentTop:layout,props:{value:component.user.gender,items:['male', 'female'],required:true},attrs:{name:`${(`gender`).toInputName()}`},state:'sturLfm'});
let cndvcE0 = component.errors.gender;
this.setState('stOlScU', cndvcE0);
if (cndvcE0) { 
let elh7mSU = eo('span','ZpCf',null,`class`,`red-text bold`);
text(component.errors.gender);
ec('span');
}ec('div');
let elKeZST = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let eljeQCt = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elWloka = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cndScYq = component.editMode == 'gender' && ! component.inEditMode;
this.setState('stKy6ty', cndScYq);
if (cndScYq) { 
let ellGusx = eo('button','Ckof',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'gender'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elFxoUQ = eo('i','qa4f',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let elG31Gj = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'homePage'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elgi1FX = eo('th');
text(`Home Page`);
ec('th');
let ela3dh_ = eo('td');
let cndM1ez = component.inEditMode != 'homePage';
this.setState('stDKBE9', cndM1ez);
let cndKpKq = !(cndM1ez);
this.setState('stgQjl5', cndKpKq);
if (cndM1ez) { 
let elCRlun = eo('span','DNNf',null,`class`,`text-capitalize`);
text(component.user.homePage ? component.homePages[component.user.homePage] : 'N/a');
ec('span');
}else { 
let elozMvF = eo('div',null,null,`class`,`row`);
let elmJ0dc = eo('div',null,null,`class`,`col-9`);
let cmpBtJE = this._lc('c61cbV7KZ', {parent:component,parentTop:layout,props:{value:component.user.homePage,items:component.homePages,required:true},attrs:{name:`${(`homePage`).toInputName()}`},state:'stgQjl5'});
let cndEjhw = component.errors.homePage;
this.setState('stsPsbg', cndEjhw);
if (cndEjhw) { 
let eluaTHc = eo('span','Uswf',null,`class`,`red-text bold`);
text(component.errors.homePage);
ec('span');
}ec('div');
let elNMsXU = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let elSyjq6 = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elbSs3U = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cnd6tnV = component.editMode == 'homePage' && ! component.inEditMode;
this.setState('stFJOQ2', cnd6tnV);
if (cnd6tnV) { 
let el8MjnB = eo('button','Wanf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'homePage'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elwRkN2 = eo('i','7Slf',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let elHO6Z6 = eo('tr');
let elqonNR = eo('th');
text(`Joined`);
ec('th');
let ellkMPi = eo('td');
let cmpFYia = this._lc('crmDYYM0a', {parent:component,parentTop:layout,props:{timestamp:component.user.createdAt.timestamp}});
ec('td');
ec('tr');
let elz2lMb = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'mobile'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elN62vo = eo('th');
text(`Mobile number`);
ec('th');
let elIEvol = eo('td');
let cndR9x8 = component.inEditMode != 'mobile';
this.setState('stYQbPH', cndR9x8);
let cndva3V = !(cndR9x8);
this.setState('st2qRqR', cndva3V);
if (cndR9x8) { 
let el6cjb0 = eo('span','QnJf');
text(component.user.mobile || 'N/a');
ec('span');
}else { 
let el7XAVb = eo('div',null,null,`class`,`row`);
let elvcyOS = eo('div',null,null,`class`,`col-9`);
let eluw5C0 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.mobile = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUZMtQ.formHandler.addError(`mobile`, 'required', trans('validation.required'));}return elUZMtQ.formHandler.removeError(`mobile`);}]},`value`,`${fval(component.user.mobile)}`,`name`,`${(`mobile`).toInputName()}`,`placeholder`,`${trans(`Mobile number`)}`,`type`,`text`,`class`,`form-control`,`id`,`mobile`);
eluw5C0.value = fval(component.user.mobile);
let cndfOkV = elUZMtQ.formHandler.getError(`mobile`);
this.setState('st4e6eD', cndfOkV);
if (cndfOkV) { 
let elLeBjg = eo('div','0bQf',null,`class`,`alert alert-danger`);
text(elUZMtQ.formHandler.getError(`mobile`));
ec('div');
}ec('div');
let el6iETI = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let el7kmte = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elUEIEZ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cndiPVr = component.editMode == 'mobile' && ! component.inEditMode;
this.setState('stEFCyZ', cndiPVr);
if (cndiPVr) { 
let elgmZLf = eo('button','Q9df',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'mobile'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let el7EYG9 = eo('i','PVAf',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
ec('tbody');
ec('table');
ec('section');
ec('div');
let eluUJVM = eo('div',null,null,`class`,`tab-pane fade`,`id`,`academy-tracks-tab`,`role`,`tabpanel`,`aria-labelledby`,`academy-tracks-tab`);
let cndyWE5 = component.isLoading;
this.setState('stlNZT9', cndyWE5);
let cndA7bj = !(cndyWE5);
this.setState('stIl0Lj', cndA7bj);
if (cndyWE5) { 
let cmpM9N5 = this._lc('c_Y92PsgM', {parent:component,parentTop:layout,state:'stlNZT9'});
}else { 
let el1QwmA = eo('div');
let ela_Udu = eo('h1',null,null,`class`,`text-center m-y-1`);
text(`Your subscribed academy tracks`);
ec('h1');
let elu0Tyz = eo('div',null,null,`class`,`row`);
for (let i in component.tracks) {
let track = component.tracks[i]; 
 let iiUw8Y = 'QZuxQ8m' + i;
let cmpx9iU = this._lc('ciCUzH14w', {parent:component,parentTop:layout,props:{track:track},attrs:{class:'col-lg-3 col-md-6'},state:'stIl0Lj',insideLoop:true,index:"" +iiUw8Y});
}
ec('div');
ec('div');
}ec('div');
let elwYvcO = eo('div',null,null,`class`,`tab-pane fade`,`id`,`einstein-categories-tab`,`role`,`tabpanel`,`aria-labelledby`,`einstein-categories-tab`);
let cndceZ8 = component.isLoading;
this.setState('stDxAq4', cndceZ8);
let cnd96b0 = !(cndceZ8);
this.setState('stHld9X', cnd96b0);
if (cndceZ8) { 
let cmpv8kE = this._lc('cY6D0eUDd', {parent:component,parentTop:layout,state:'stDxAq4'});
}else { 
let eliuDqn = eo('div');
let elrKn_9 = eo('h1',null,null,`class`,`text-center m-y-1`);
text(`Einstein Chamber categories`);
ec('h1');
let elgjjtQ = eo('div',null,null,`class`,`row`);
for (let i in component.einsteinCategories) {
let category = component.einsteinCategories[i]; 
 let iiMJbq = 'vzZR5le' + i;
let elqRKYb = eo('div','nkO82tGaEIWO' + i+iiMJbq,null,`class`,`col-3`);
let cmpiQby = this._lc('cmO_H05aX', {parent:component,parentTop:layout,props:{category:category},state:'stHld9X',insideLoop:true,index:"" +iiMJbq});
ec('div');
}
ec('div');
ec('div');
}ec('div');
let elFFKeg = eo('div',null,null,`class`,`tab-pane fade`,`id`,`affiliate-tab`,`role`,`tabpanel`,`aria-labelledby`,`affiliate-tab`);
let elDPmfi = eo('div',null,null,`id`,`affiliate`);
let el7zygm = eo('h1');
text(`Affiliate URL`);
ec('h1');
let el1EoXN = eo('div',null,null,`class`,`m-t-1`);
let el4zQHT = eo('a',null,null,`class`,`bold teal-text mx-2`,`target`,`_blank`,`href`,`${ component.affiliateUrl }`);
text(`Click on the
            following
            icon to copy your affiliate url.`);
ec('a');
let cndCqll = ! component.copied;
this.setState('stjAHma', cndCqll);
if (cndCqll) { 
let elL6ovy = eo('button','lUkf',null, eventListeners, {onclick:[function(e) {var $el = this;copyToClipboard(component.affiliateUrl); component.copied = true;}]},`title`,`${trans(`Copy`)}`,`class`,`text-primary`,`type`,`button`);
text(`(`);
let elsN3Me = eo('i','uNkf',null,`class`,`${fas('object-ungroup') + ' icon'}`);
ec('i');
text(`)`);
ec('button');
}let cndGKOS = component.copied;
this.setState('stGLbSQ', cndGKOS);
if (cndGKOS) { 
let elu0tlv = eo('strong','Tmwf',null,`title`,`${trans(`Copied`)}`,`class`,`green-text ml-2`);
let elZdqHW = eo('i','tjaf',null,`class`,`${fas('check') + ' icon'}`);
ec('i');
ec('strong');
}ec('div');
ec('div');
ec('div');
ec('div');
ec('div');
ec('div');
ec('form');
}});
let cnd97zR = component.updateMessage;
this.setState('stqEDYX', cnd97zR);
if (cnd97zR) { 
let cmpK_D9 = this._lc('cS1VNNdrX', {parent:component,props:{html:component.updateMessage},events:{onclose:function(e) {let $el = this; component.updateMessage = null}},content:(flkMessage) => {text(component.updateMessage);
},state:'stqEDYX'});
}
                    this.isReadyToGo();
                }
        });