_Component({
                selector: 'profile-page',
                c: 'ProfilePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['updateProfile','user','loadTracks','loadEinsteinCategories','updateMessage','requireNameChange','isUpdating','editMode','form','getUserImage','inEditMode','validateUserName','errors','homePages','isLoading','tracks','einsteinCategories','affiliateUrl','copied'],
                children: {cItXmR6eP:'flk-image-input',cSiMekvMX:'gold-icon',c0n6eRYv1:'flk-number-counter',cC49VKCxO:'flk-number-counter',cooj56AV7:'flk-number-counter',c3hfqaWei:'flk-number-counter',c5wHPehAP:'flk-number-counter',cA4_ubkis:'flk-number-counter',cNmR20hsh:'flk-number-counter',cKQWPf8ET:'flk-number-counter',c4aiwfKIV:'flk-number-counter',cRi8avQ_M:'flk-number-counter',cwly6XXJe:'flk-number-counter',ck7nxJtTp:'flk-number-counter',cFt0auW5X:'flk-dropdown-list',cEtJEPC__:'flk-dropdown-list',cyO1Ox8Ka:'flk-time-ago',c1F8INWzH:'flk-spinner',cuOjlo5_k:'track-card',cKanWwxPP:'flk-spinner',cVGPwBQnM:'einstein-category-card',cnGuPxb5t:'layout',cCACFNq2u:'flk-message'},
                render: function (component) {
                    let cmpu4Oc = this._lc('cnGuPxb5t', {parent:component,content:(layout) => {let eliduQW = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.updateProfile($el)}]});
component.form = eliduQW;

                if (! eliduQW.formHandler) {
                    window.cfrmdlr = eliduQW.formHandler = new FormHandler(eliduQW, component);
                } else {
                    window.cfrmdlr = eliduQW.formHandler;
                }
            let elqbh8z = eo('div',null,null,`class`,`rows`);
let el6nEb0 = eo('ul',null,null,`class`,`nav nav-tabs`);
let el8PDtp = eo('li',null,null,`class`,`nav-item`);
let elVBxS3 = eo('a',null,null,`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#overview-tab`);
let el3P_9y = eo('i',null,null,`class`,`${fas('street-view') + ' mr-1 icon'}`);
ec('i');
text(`Overview`);
ec('a');
ec('li');
let elgLHNK = eo('li',null,null,`class`,`nav-item`);
let elleFNr = eo('a',null,null,`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#account-info-tab`);
let elsbEm8 = eo('i',null,null,`class`,`${fas('user') + ' mr-1 icon'}`);
ec('i');
text(`Account info`);
ec('a');
ec('li');
let cndy4EV = component.user.total.tracks > 0;
this.setState('sto3YKn', cndy4EV);
if (cndy4EV) { 
let elA_G7k = eo('li','1jmf',null,`class`,`nav-item`);
let el7wJZZ = eo('a','XVjf',null, eventListeners, {onclick:[function(e) {var $el = this;component.loadTracks()}]},`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#academy-tracks-tab`);
let elv0tyo = eo('i','cxsf',null,`class`,`${fas('university') + ' mr-1 icon'}`);
ec('i');
text(`Academy tracks`);
let el8cu_S = eo('span','CEUf',null,`class`,`badge total-answers badge-success`);
text(component.user.total.tracks);
ec('span');
ec('a');
ec('li');
}let cndSA4p = Object.get(component.user.total, 'einstein.categories') > 0;
this.setState('stpExcj', cndSA4p);
if (cndSA4p) { 
let elVt_x9 = eo('li','L3Uf',null,`class`,`nav-item`);
let elHlF6b = eo('a','tD6f',null, eventListeners, {onclick:[function(e) {var $el = this;component.loadEinsteinCategories()}]},`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#einstein-categories-tab`);
let elI3EnE = ev('img','6_8f',null,`src`,`${assets('images/ein-sm.png')}`,`class`,`einstein-icon`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
text(`Einstein categories`);
let elxqSda = eo('span','TQCf',null,`class`,`badge total-answers btn-purple`);
text(component.user.total.einstein.categories);
ec('span');
ec('a');
ec('li');
}let elyM5Nd = eo('li',null,null,`class`,`nav-item`);
let elG9slK = eo('a',null,null,`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#affiliate-tab`);
let elGWX1D = eo('i',null,null,`class`,`${fas('user-plus') + ' mr-1 icon'}`);
ec('i');
text(`Affiliate program`);
ec('a');
ec('li');
ec('ul');
let elHfSq6 = eo('div',null,null,`class`,`cols`);
let elOiAs5 = eo('div',null,null,`class`,`tab-content`);
let eltiPVT = eo('div',null,null,`class`,`tab-pane fade`,`id`,`overview-tab`);
let eloZYNA = eo('section',null,null,`id`,`profile-overview-tab`);
let cndhN4y = component.requireNameChange();
this.setState('stDruan', cndhN4y);
if (cndhN4y) { 
let ela2lJe = eo('div','mcCf',null,`class`,`overlay`);
ec('div');
}let elQJ4nl = eo('div',null,null,`class`,`text-center m-b-2`);
let elRwqSo = eo('div',null,null,`class`,`relative`);
let cmpOJ59 = this._lc('cItXmR6eP', {parent:component,parentTop:layout,props:{disabled:component.isUpdating,src:component.getUserImage()},events:{onmouseover:function(e) {let $el = this; component.editMode = 'image'},onmouseout:function(e) {let $el = this; component.editMode = null},onchange:function(e) {let $el = this; component.updateProfile(component.form);}},boolAttrs:{disabled:component.isUpdating},attrs:{src:`${component.getUserImage()}`,name:`${(`image`).toInputName()}`}});
let cndpAso = component.user.username;
this.setState('stI1QED', cndpAso);
if (cndpAso) { 
let elNe7Cg = eo('span','Y0Xf',null,`class`,`grey-text`);
text('@' + component.user.username);
ec('span');
}let cndSC_3 = component.editMode == 'image';
this.setState('stA39E2', cndSC_3);
if (cndSC_3) { 
let elCszWZ = eo('span','ufjf',null,`class`,`new-tooltip`);
text(`Click to edit`);
ec('span');
}ec('div');
let elrVVFH = eo('div',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'name'; component.editMode}],onmouseout:[function(e) {var $el = this;component.editMode = null}]},`class`,`m-t-2 relative name-change-wrapper`);
let cndzIlm = component.requireNameChange();
this.setState('stzYTmq', cndzIlm);
let cndZ9aF = component.inEditMode == 'name' || component.requireNameChange();
this.setState('st_2Fht', cndZ9aF);
if (cndzIlm) { 
let eljeNLL = eo('span','24Kf',null,`class`,`new-tooltip`);
text(`Add your last name`);
ec('span');
}let cnd9UwV = component.inEditMode != 'name' && ! component.requireNameChange();
this.setState('stEplj3', cnd9UwV);
let cndmRL1 = cndZ9aF;
this.setState('stxIEOJ', cndmRL1);
if (cnd9UwV) { 
let elHzUbo = eo('h1','h8cf',null,`class`,`d-inline-block`);
text(component.user.name);
ec('h1');
}else if (cndmRL1) { 
let elTR0sj = eo('div',null,null,`class`,`m-auto`,`id`,`name-change`);
let elsks93 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.firstName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eliduQW.formHandler.addError(`firstName`, 'required', trans('validation.required'));}return eliduQW.formHandler.removeError(`firstName`);}]},`value`,`${fval(component.user.firstName)}`,`name`,`${(`firstName`).toInputName()}`,`placeholder`,`${trans(`First name`)}`,`type`,`text`,`class`,`form-control d-inline-block`,`id`,`firstName`);
elsks93.value = fval(component.user.firstName);
let cnd8SGH = eliduQW.formHandler.getError(`firstName`);
this.setState('stNNixW', cnd8SGH);
if (cnd8SGH) { 
let ello9zz = eo('div','Zm_f',null,`class`,`alert alert-danger`);
text(eliduQW.formHandler.getError(`firstName`));
ec('div');
}let elpM1U8 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.lastName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eliduQW.formHandler.addError(`lastName`, 'required', trans('validation.required'));}return eliduQW.formHandler.removeError(`lastName`);}]},`value`,`${fval(component.user.lastName)}`,`name`,`${(`lastName`).toInputName()}`,`placeholder`,`${trans(`Last name`)}`,`type`,`text`,`class`,`form-control d-inline-block`,`id`,`lastName`);
elpM1U8.value = fval(component.user.lastName);
let cndKmPn = eliduQW.formHandler.getError(`lastName`);
this.setState('st6SUkX', cndKmPn);
if (cndKmPn) { 
let elxzLvq = eo('div','Adjf',null,`class`,`alert alert-danger`);
text(eliduQW.formHandler.getError(`lastName`));
ec('div');
}let elBgijc = ev('input',null,null,`name`,`${(`name`).toInputName()}`,`type`,`hidden`,`value`,`${ (component.user.firstName + ' ' + component.user.lastName) || component.user.name }`);
ec('div');
let elOLECR = eo('div',null,null,`class`,`m-y-1`);
let el7bRVj = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn blue bold save-btn`);
text(`Save changes`);
ec('button');
let elmdwrY = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn white black-text bold`);
text(`Close`);
ec('button');
ec('div');
}let cndMvTY = component.editMode == 'name' && ! component.inEditMode && ! component.requireNameChange();
this.setState('sto_PMh', cndMvTY);
if (cndMvTY) { 
let elPrrdu = eo('button','kTIf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'name'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elIOtrz = eo('i','Lw8f',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('div');
let cmp4fPw = this._lc('cSiMekvMX', {parent:component,parentTop:layout,props:{coins:component.user.gold}});
ec('div');
let elHKxJv = eo('div',null,null,`id`,`totals`,`class`,`text-center`);
let elHuSi4 = eo('section',null,null,`class`,`profile-box pb-5 mb-5`);
let el9oJnw = eo('header',null,null,`class`,`col-12 profile-box-header m-b-5`);
let elMpx95 = eo('h1',null,null,`class`,`pl-5 my-0`);
text(`General Overview`);
ec('h1');
let elBUtaT = eo('span',null,null,`class`,`profile-box-header-line`);
ec('span');
ec('header');
let el_aWzV = eo('div',null,null,`class`,`row m-t-5 mx-0`);
let el8T47F = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpnuZS = this._lc('c0n6eRYv1', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'tracks', '')},attrs:{class:'total-summary bold teal-border'}});
let elZiMMB = eo('div',null,null,`class`,`btn btn-sm btn-teal bold`);
text(`Academy tracks`);
ec('div');
ec('div');
let el7Pt_j = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmp1ZHN = this._lc('cC49VKCxO', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.all', '')},attrs:{class:'total-summary bold navy-border'}});
let eltWzkv = eo('div',null,null,`class`,`btn btn-sm btn-navy bold`);
text(`Academy answers`);
ec('div');
ec('div');
let elSta4l = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmprwgi = this._lc('cooj56AV7', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.all', '')},attrs:{class:'total-summary bold purple-border'}});
let elRSRFJ = eo('div',null,null,`class`,`btn btn-sm btn-purple bold`);
text(`Einstein puzzles`);
ec('div');
ec('div');
let elq3nUJ = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpGc0m = this._lc('c3hfqaWei', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'invitations', '') || 0},attrs:{class:'total-summary bold lime-border'}});
let elIxHUl = eo('div',null,null,`class`,`btn btn-sm btn-lime bold`);
text(`Invitations`);
ec('div');
ec('div');
ec('div');
ec('section');
let el5kY5F = eo('section',null,null,`class`,`profile-box py-5 my-5`);
let elHJu8F = eo('header',null,null,`class`,`col-12 m-b-5 profile-box-header`);
let elabptd = eo('h1',null,null,`class`,`pl-5 my-0`);
text(`Academy`);
ec('h1');
let elWoy2K = eo('span',null,null,`class`,`profile-box-header-line`);
ec('span');
ec('header');
let elOD7Hs = eo('div',null,null,`class`,`row m-t-5`);
let elMAe9g = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpYRdi = this._lc('c5wHPehAP', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'tracks', '')},attrs:{class:'total-summary bold light-gray-border'}});
let el5kRF7 = eo('div',null,null,`class`,`btn btn-sm btn-light-gray bold`);
text(`Unlocked tracks`);
ec('div');
ec('div');
let elX3yBY = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpOX1j = this._lc('cA4_ubkis', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.approved', '')},attrs:{class:'total-summary bold success-border'}});
let eleurLH = eo('div',null,null,`class`,`btn btn-sm btn-success bold`);
text(`Approved answers`);
ec('div');
ec('div');
let el6b1UU = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpt18j = this._lc('cNmR20hsh', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.pending', '')},attrs:{class:'total-summary bold warning-border'}});
let elFhj6u = eo('div',null,null,`class`,`btn btn-sm btn-warning bold`);
text(`Pending answers`);
ec('div');
ec('div');
let el7pF8f = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmppeEo = this._lc('cKQWPf8ET', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.rejected', '')},attrs:{class:'total-summary bold danger-border'}});
let el_M0u8 = eo('div',null,null,`class`,`btn btn-sm btn-danger bold`);
text(`Rejected answers`);
ec('div');
ec('div');
ec('div');
ec('section');
let elvvQTh = eo('section',null,null,`class`,`profile-box py-5 my-5`);
let eljOFBu = eo('header',null,null,`class`,`col-12 m-b-5 profile-box-header`);
let elnhgCk = eo('h1',null,null,`class`,`pl-5 my-0`);
text(`Einstein Chamber`);
ec('h1');
let elriSxu = eo('span',null,null,`class`,`profile-box-header-line`);
ec('span');
ec('header');
let elZ1fM9 = eo('div',null,null,`class`,`row m-t-5`);
let elMhmXT = eo('div',null,null,`class`,`col-sm-3`);
let cmp417c = this._lc('c4aiwfKIV', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.categories', 0)},attrs:{class:'total-summary bold pencil-border'}});
let elVZ_fS = eo('div',null,null,`class`,`btn btn-sm btn-pencil bold`);
text(`Unlocked categories`);
ec('div');
ec('div');
let elchq2r = eo('div',null,null,`class`,`col-sm-3`);
let cmpGoUp = this._lc('cRi8avQ_M', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.approved', 0)},attrs:{class:'total-summary bold emerald-border'}});
let el7_RnN = eo('div',null,null,`class`,`btn btn-sm btn-emerald bold`);
text(`Approved`);
ec('div');
ec('div');
let el73J0E = eo('div',null,null,`class`,`col-sm-3`);
let cmpWAaY = this._lc('cwly6XXJe', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.pending', 0)},attrs:{class:'total-summary bold dark-warning-border'}});
let elAXpHg = eo('div',null,null,`class`,`btn btn-sm btn-dark-warning bold`);
text(`Pending`);
ec('div');
ec('div');
let elPnloo = eo('div',null,null,`class`,`col-sm-3`);
let cmpapWp = this._lc('ck7nxJtTp', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.rejected', 0)},attrs:{class:'total-summary bold dark-danger-border'}});
let elvpiS7 = eo('div',null,null,`class`,`btn btn-sm btn-dark-danger bold`);
text(`Rejected`);
ec('div');
ec('div');
ec('div');
ec('section');
ec('div');
ec('section');
ec('div');
let elbZdoh = eo('div',null,null,`class`,`tab-pane fade`,`id`,`account-info-tab`,`role`,`tabpanel`,`aria-labelledby`,`account-info-tab`);
let el49Ao2 = eo('section',null,null,`id`,`profile-settings-tab`);
let elbD98C = eo('table',null,null,`class`,`table table-bordered`);
let el1Ku7X = eo('tbody');
let el5LJgE = eo('tr');
let elMrNz5 = eo('th');
text(`Account id`);
ec('th');
let elaprLT = eo('td');
text(component.user.id);
ec('td');
ec('tr');
let el3Nw57 = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'email'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elk5LG5 = eo('th');
text(`Email address`);
ec('th');
let elht9Xx = eo('td');
let cndVbR_ = component.inEditMode != 'email';
this.setState('stg9IGP', cndVbR_);
let cndBNvP = !(cndVbR_);
this.setState('stVWXnu', cndBNvP);
if (cndVbR_) { 
let elpYMj_ = eo('span','4ipf');
text(component.user.email);
ec('span');
}else { 
let elxblGt = eo('div',null,null,`class`,`row`);
let elyJkUp = eo('div',null,null,`class`,`col-9`);
let elIUH36 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eliduQW.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return eliduQW.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return eliduQW.formHandler.removeError(`email`);}]},`value`,`${fval(component.user.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Email address`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
elIUH36.value = fval(component.user.email);
let cndDg1K = eliduQW.formHandler.getError(`email`);
this.setState('stmQptR', cndDg1K);
if (cndDg1K) { 
let el8l7td = eo('div','jfvf',null,`class`,`alert alert-danger`);
text(eliduQW.formHandler.getError(`email`));
ec('div');
}ec('div');
let elDpnr0 = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let elUmvxa = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elDweAT = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cnd1OVx = component.editMode == 'email' && ! component.inEditMode;
this.setState('stYY6Fn', cnd1OVx);
if (cnd1OVx) { 
let el9RvRR = eo('button','HlEf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'email'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let el_wc1F = eo('i','Awyf',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let elttrl3 = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'username'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elraCaG = eo('th');
text(`Username`);
ec('th');
let elb7_Pl = eo('td');
let cndImNE = component.inEditMode != 'username';
this.setState('stR1QHX', cndImNE);
let cndMl75 = !(cndImNE);
this.setState('stry5SI', cndMl75);
if (cndImNE) { 
let elBldsQ = eo('span','elKf');
text(component.user.username || 'N/a');
ec('span');
}else { 
let elndqIm = eo('div',null,null,`class`,`row`);
let eln9qx9 = eo('div',null,null,`class`,`col-9`);
text(`@`);
let elibMBZ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.username = this.value;},function(e) {var $el = this;component.validateUserName($el.value)}]},`value`,`${fval(component.user.username)}`,`name`,`${(`username`).toInputName()}`,`placeholder`,`${trans(`username`)}`,`type`,`text`,`class`,`username-input`,`id`,`username`);
elibMBZ.autocomplete = elibMBZ.name == 'password' && Is.browser('chrome') ? 'new-password' : 'off';
elibMBZ.value = fval(component.user.username);
let cndO35e = component.errors.username;
this.setState('stpUnu5', cndO35e);
if (cndO35e) { 
let el2b7VS = eo('span','bjcf',null,`class`,`red-text bold`);
text(component.errors.username);
ec('span');
}ec('div');
let eluQ0Hk = eo('div',null,null,`class`,`col-3 p-0`);
let elt0x37 = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let el4fnZg = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
let elumiNi = eo('div',null,null,`class`,`row m-0`);
let elrkTv5 = eo('div',null,null,`class`,`col`);
let elJ8PUv = eo('div',null,null,`class`,`bold`);
text(`Username creation criteria`);
ec('div');
let elr9EaB = eo('small');
text(`Must starts with English letter (lowercase).`);
let elonfdQ = ev('br');
text(`Can contain only English letters, Numbers, dot or underscore.`);
let elIZQad = ev('br');
text(`No more than one dot or underscore can be written after each other.`);
let elWueek = ev('br');
text(`No whitespaces allowed.`);
let el_XKuS = ev('br');
ec('small');
ec('div');
ec('div');
ec('div');
}let cndk9Uz = component.editMode == 'username' && ! component.inEditMode;
this.setState('stzBUtW', cndk9Uz);
if (cndk9Uz) { 
let elfkW9F = eo('button','81if',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'username'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elQ_SF6 = eo('i','Blaf',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let elnhIgS = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'gender'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let el70grI = eo('th');
text(`Gender`);
ec('th');
let el3F8aM = eo('td');
let cndnezi = component.inEditMode != 'gender';
this.setState('sth63dn', cndnezi);
let cnd4pkw = !(cndnezi);
this.setState('stYtrNd', cnd4pkw);
if (cndnezi) { 
let elceCWJ = eo('span','aRkf',null,`class`,`text-capitalize`);
text(component.user.gender || 'N/a');
ec('span');
}else { 
let eluNHDp = eo('div',null,null,`class`,`row`);
let elAsNlZ = eo('div',null,null,`class`,`col-9`);
let cmpNJcy = this._lc('cFt0auW5X', {parent:component,parentTop:layout,props:{value:component.user.gender,items:['male', 'female'],required:true},attrs:{name:`${(`gender`).toInputName()}`},state:'stYtrNd'});
let cndY6dB = component.errors.gender;
this.setState('stm87G3', cndY6dB);
if (cndY6dB) { 
let elucLrP = eo('span','ZBHf',null,`class`,`red-text bold`);
text(component.errors.gender);
ec('span');
}ec('div');
let elMvS3r = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let elFeoZg = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elFDS6B = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cndBTn4 = component.editMode == 'gender' && ! component.inEditMode;
this.setState('stcjJeB', cndBTn4);
if (cndBTn4) { 
let elW9aBF = eo('button','rrZf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'gender'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elWt8Nd = eo('i','J3df',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let elXPGFf = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'homePage'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elNVLsz = eo('th');
text(`Home Page`);
ec('th');
let el8unEw = eo('td');
let cndo66D = component.inEditMode != 'homePage';
this.setState('sttcx04', cndo66D);
let cndmNyD = !(cndo66D);
this.setState('stiqTQI', cndmNyD);
if (cndo66D) { 
let eltRBsT = eo('span','2cIf',null,`class`,`text-capitalize`);
text(component.user.homePage ? component.homePages[component.user.homePage] : 'N/a');
ec('span');
}else { 
let el5Kbsn = eo('div',null,null,`class`,`row`);
let elg7mrU = eo('div',null,null,`class`,`col-9`);
let cmp22vb = this._lc('cEtJEPC__', {parent:component,parentTop:layout,props:{value:component.user.homePage,items:component.homePages,required:true},attrs:{name:`${(`homePage`).toInputName()}`},state:'stiqTQI'});
let cndGinP = component.errors.homePage;
this.setState('stxuMvl', cndGinP);
if (cndGinP) { 
let el0HnlX = eo('span','xtvf',null,`class`,`red-text bold`);
text(component.errors.homePage);
ec('span');
}ec('div');
let elu8WFa = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let elRrIL7 = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elGYUac = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cndd8RC = component.editMode == 'homePage' && ! component.inEditMode;
this.setState('stJKSku', cndd8RC);
if (cndd8RC) { 
let el4ZtZn = eo('button','jTgf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'homePage'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elmhFn2 = eo('i','Oodf',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let el3v4Qs = eo('tr');
let elnLFM6 = eo('th');
text(`Joined`);
ec('th');
let elVP45j = eo('td');
let cmpzfjG = this._lc('cyO1Ox8Ka', {parent:component,parentTop:layout,props:{timestamp:component.user.createdAt.timestamp}});
ec('td');
ec('tr');
let eluUMxt = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'mobile'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elm8Noc = eo('th');
text(`Mobile number`);
ec('th');
let elWbQ45 = eo('td');
let cndsou7 = component.inEditMode != 'mobile';
this.setState('sttb6pF', cndsou7);
let cndmW3K = !(cndsou7);
this.setState('stJ_Erw', cndmW3K);
if (cndsou7) { 
let elvkZvD = eo('span','4Yvf');
text(component.user.mobile || 'N/a');
ec('span');
}else { 
let elcB_UN = eo('div',null,null,`class`,`row`);
let elEnGn9 = eo('div',null,null,`class`,`col-9`);
let elC3jLB = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.mobile = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eliduQW.formHandler.addError(`mobile`, 'required', trans('validation.required'));}return eliduQW.formHandler.removeError(`mobile`);}]},`value`,`${fval(component.user.mobile)}`,`name`,`${(`mobile`).toInputName()}`,`placeholder`,`${trans(`Mobile number`)}`,`type`,`text`,`class`,`form-control`,`id`,`mobile`);
elC3jLB.value = fval(component.user.mobile);
let cndriSO = eliduQW.formHandler.getError(`mobile`);
this.setState('sti8NYR', cndriSO);
if (cndriSO) { 
let elixrnW = eo('div','Ptlf',null,`class`,`alert alert-danger`);
text(eliduQW.formHandler.getError(`mobile`));
ec('div');
}ec('div');
let elG28Rw = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let el8h3Iw = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elSSyP_ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cndqDCV = component.editMode == 'mobile' && ! component.inEditMode;
this.setState('stJCZ2K', cndqDCV);
if (cndqDCV) { 
let el1dkvJ = eo('button','PXwf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'mobile'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let ellDt43 = eo('i','c1yf',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
ec('tbody');
ec('table');
ec('section');
ec('div');
let elK8Faf = eo('div',null,null,`class`,`tab-pane fade`,`id`,`academy-tracks-tab`,`role`,`tabpanel`,`aria-labelledby`,`academy-tracks-tab`);
let cndQAF_ = component.isLoading;
this.setState('st4UVS5', cndQAF_);
let cndoJpt = !(cndQAF_);
this.setState('stsNklr', cndoJpt);
if (cndQAF_) { 
let cmpkqpp = this._lc('c1F8INWzH', {parent:component,parentTop:layout,state:'st4UVS5'});
}else { 
let elzrKgu = eo('div');
let elXVKza = eo('h1',null,null,`class`,`text-center m-y-1`);
text(`Your subscribed academy tracks`);
ec('h1');
let el1Y081 = eo('div',null,null,`class`,`row`);
for (let i in component.tracks) {
let track = component.tracks[i]; 
 let iiGdkW = 'zpBjzYJ' + i;
let cmpazqH = this._lc('cuOjlo5_k', {parent:component,parentTop:layout,props:{track:track},attrs:{class:'col-lg-3 col-md-6'},state:'stsNklr',insideLoop:true,index:"" +iiGdkW});
}
ec('div');
ec('div');
}ec('div');
let elry5VQ = eo('div',null,null,`class`,`tab-pane fade`,`id`,`einstein-categories-tab`,`role`,`tabpanel`,`aria-labelledby`,`einstein-categories-tab`);
let cndrfrb = component.isLoading;
this.setState('stMv0Yx', cndrfrb);
let cndZmzB = !(cndrfrb);
this.setState('stiqEoT', cndZmzB);
if (cndrfrb) { 
let cmpCHjq = this._lc('cKanWwxPP', {parent:component,parentTop:layout,state:'stMv0Yx'});
}else { 
let el5YG21 = eo('div');
let elTxC3x = eo('h1',null,null,`class`,`text-center m-y-1`);
text(`Einstein Chamber categories`);
ec('h1');
let elg9HU9 = eo('div',null,null,`class`,`row`);
for (let i in component.einsteinCategories) {
let category = component.einsteinCategories[i]; 
 let iiwaHl = 'x_u3UzC' + i;
let elMNjNi = eo('div','MCgVB2rh7AD5' + i+iiwaHl,null,`class`,`col-3`);
let cmpU4KZ = this._lc('cVGPwBQnM', {parent:component,parentTop:layout,props:{category:category},state:'stiqEoT',insideLoop:true,index:"" +iiwaHl});
ec('div');
}
ec('div');
ec('div');
}ec('div');
let el09dwH = eo('div',null,null,`class`,`tab-pane fade`,`id`,`affiliate-tab`,`role`,`tabpanel`,`aria-labelledby`,`affiliate-tab`);
let elXNlHm = eo('div',null,null,`id`,`affiliate`);
let el4okLE = eo('h1');
text(`Affiliate URL`);
ec('h1');
let elPWB5P = eo('div',null,null,`class`,`m-t-1`);
let elm53Ta = eo('a',null,null,`class`,`bold teal-text mx-2`,`target`,`_blank`,`href`,`${ component.affiliateUrl }`);
text(`Click on the
            following
            icon to copy your affiliate url.`);
ec('a');
let cndn71f = ! component.copied;
this.setState('stRbkLf', cndn71f);
if (cndn71f) { 
let elaYqCo = eo('button','1qcf',null, eventListeners, {onclick:[function(e) {var $el = this;copyToClipboard(component.affiliateUrl); component.copied = true;}]},`title`,`${trans(`Copy`)}`,`class`,`text-primary`,`type`,`button`);
text(`(`);
let elKjXZ0 = eo('i','prhf',null,`class`,`${fas('object-ungroup') + ' icon'}`);
ec('i');
text(`)`);
ec('button');
}let cndUYnn = component.copied;
this.setState('stAbk5O', cndUYnn);
if (cndUYnn) { 
let elDxZdf = eo('strong','Sx5f',null,`title`,`${trans(`Copied`)}`,`class`,`green-text ml-2`);
let elWqjDV = eo('i','Rmaf',null,`class`,`${fas('check') + ' icon'}`);
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
let cndXNUD = component.updateMessage;
this.setState('stZlcFX', cndXNUD);
if (cndXNUD) { 
let cmp0gkE = this._lc('cCACFNq2u', {parent:component,props:{html:component.updateMessage},events:{onclose:function(e) {let $el = this; component.updateMessage = null}},content:(flkMessage) => {text(component.updateMessage);
},state:'stZlcFX'});
}
                    this.isReadyToGo();
                }
        });