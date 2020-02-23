_Component({
                selector: 'profile-page',
                c: 'ProfilePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['updateProfile','user','loadTracks','loadEinsteinCategories','updateMessage','requireNameChange','isUpdating','editMode','form','getUserImage','inEditMode','validateUserName','errors','homePages','isLoading','tracks','einsteinCategories','affiliateUrl','copied'],
                children: {cHFe02Gon:'flk-image-input',cNUfanRJO:'gold-icon',cSkcVT9j6:'flk-number-counter',cHCdmW18Z:'flk-number-counter',cYHnhOXjf:'flk-number-counter',cOvjllLW2:'flk-number-counter',czJrTjGSv:'flk-number-counter',cPKNvsBXO:'flk-number-counter',cPY4WhYmJ:'flk-number-counter',crFzZY8jt:'flk-number-counter',cKPtMZRDx:'flk-number-counter',cPuU6B66u:'flk-number-counter',cex79Adiz:'flk-number-counter',cgCPF4Q8S:'flk-number-counter',cWvDPVTVG:'flk-dropdown-list',cIALi0Dcf:'flk-dropdown-list',c6P3J_ddL:'flk-time-ago',chalH9q47:'flk-spinner',cpv8Ory80:'track-card',cdBZzylfZ:'flk-spinner',ctYuc7IQf:'einstein-category-card',cnmehJQnA:'layout',cau9segIJ:'flk-message'},
                render: function (component) {
                    let cmpHL8I = this._lc('cnmehJQnA', {parent:component,content:(layout) => {let elkILsx = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.updateProfile($el)}]});
component.form = elkILsx;

                if (! elkILsx.formHandler) {
                    window.cfrmdlr = elkILsx.formHandler = new FormHandler(elkILsx, component);
                } else {
                    window.cfrmdlr = elkILsx.formHandler;
                }
            let elHtotV = eo('div',null,null,`class`,`rows`);
let elrFlz7 = eo('ul',null,null,`class`,`nav nav-tabs`);
let elvILMi = eo('li',null,null,`class`,`nav-item`);
let elQeys4 = eo('a',null,null,`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#overview-tab`);
let elcTLAd = eo('i',null,null,`class`,`${fas('street-view') + ' mr-1 icon'}`);
ec('i');
text(`Overview`);
ec('a');
ec('li');
let elNHsby = eo('li',null,null,`class`,`nav-item`);
let elGmdcT = eo('a',null,null,`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#account-info-tab`);
let elOQan0 = eo('i',null,null,`class`,`${fas('user') + ' mr-1 icon'}`);
ec('i');
text(`Account info`);
ec('a');
ec('li');
let cnd1vvo = component.user.total.tracks > 0;
this.setState('st9H8aL', cnd1vvo);
if (cnd1vvo) { 
let elod4et = eo('li','9D1f',null,`class`,`nav-item`);
let elM90e7 = eo('a','6Y0f',null, eventListeners, {onclick:[function(e) {var $el = this;component.loadTracks()}]},`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#academy-tracks-tab`);
let elFD0R4 = eo('i','U2ef',null,`class`,`${fas('university') + ' mr-1 icon'}`);
ec('i');
text(`Academy tracks`);
let elQ37wP = eo('span','VQHf',null,`class`,`badge total-answers badge-success`);
text(component.user.total.tracks);
ec('span');
ec('a');
ec('li');
}let cnd24aU = Object.get(component.user.total, 'einstein.categories') > 0;
this.setState('stYtSHf', cnd24aU);
if (cnd24aU) { 
let elnxm4_ = eo('li','CVtf',null,`class`,`nav-item`);
let elQPoPf = eo('a','o69f',null, eventListeners, {onclick:[function(e) {var $el = this;component.loadEinsteinCategories()}]},`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#einstein-categories-tab`);
let elUYCxb = ev('img','4enf',null,`src`,`${assets('images/ein-sm.png')}`,`class`,`einstein-icon`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
text(`Einstein categories`);
let elrf4v3 = eo('span','vS6f',null,`class`,`badge total-answers btn-purple`);
text(component.user.total.einstein.categories);
ec('span');
ec('a');
ec('li');
}let elHFhpC = eo('li',null,null,`class`,`nav-item`);
let elnTEtL = eo('a',null,null,`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#affiliate-tab`);
let elI2cD_ = eo('i',null,null,`class`,`${fas('user-plus') + ' mr-1 icon'}`);
ec('i');
text(`Affiliate program`);
ec('a');
ec('li');
ec('ul');
let elmKwUd = eo('div',null,null,`class`,`cols`);
let eltwU17 = eo('div',null,null,`class`,`tab-content`);
let elkFG19 = eo('div',null,null,`class`,`tab-pane fade`,`id`,`overview-tab`);
let elFOY7h = eo('section',null,null,`id`,`profile-overview-tab`);
let cndB3a_ = component.requireNameChange();
this.setState('stDXYnD', cndB3a_);
if (cndB3a_) { 
let el_tjLO = eo('div','f_Tf',null,`class`,`overlay`);
ec('div');
}let elixlQJ = eo('div',null,null,`class`,`text-center m-b-2`);
let elEewDg = eo('div',null,null,`class`,`relative`);
let cmpI9hh = this._lc('cHFe02Gon', {parent:component,parentTop:layout,props:{disabled:component.isUpdating,src:component.getUserImage()},events:{onmouseover:function(e) {let $el = this; component.editMode = 'image'},onmouseout:function(e) {let $el = this; component.editMode = null},onchange:function(e) {let $el = this; component.updateProfile(component.form);}},boolAttrs:{disabled:component.isUpdating},attrs:{src:`${component.getUserImage()}`,name:`${(`image`).toInputName()}`}});
let cndf6pa = component.user.username;
this.setState('stJHVDd', cndf6pa);
if (cndf6pa) { 
let elvv4HA = eo('span','Rj4f',null,`class`,`grey-text`);
text('@' + component.user.username);
ec('span');
}let cnd2_wW = component.editMode == 'image';
this.setState('sthnSR2', cnd2_wW);
if (cnd2_wW) { 
let elNyg1a = eo('span','xupf',null,`class`,`new-tooltip`);
text(`Click to edit`);
ec('span');
}ec('div');
let elxqRLG = eo('div',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'name'; component.editMode}],onmouseout:[function(e) {var $el = this;component.editMode = null}]},`class`,`m-t-2 relative name-change-wrapper`);
let cnd6wQV = component.requireNameChange();
this.setState('stNWvwU', cnd6wQV);
let cndfpt5 = component.inEditMode == 'name' || component.requireNameChange();
this.setState('stVgZz7', cndfpt5);
if (cnd6wQV) { 
let el0MJJD = eo('span','o2pf',null,`class`,`new-tooltip`);
text(`Add your last name`);
ec('span');
}let cndVxZs = component.inEditMode != 'name' && ! component.requireNameChange();
this.setState('stept3C', cndVxZs);
let cndu9Ce = cndfpt5;
this.setState('stwpqRf', cndu9Ce);
if (cndVxZs) { 
let el_XqhZ = eo('h1','UTjf',null,`class`,`d-inline-block`);
text(component.user.name);
ec('h1');
}else if (cndu9Ce) { 
let elfLuSm = eo('div',null,null,`class`,`m-auto`,`id`,`name-change`);
let elHp1Wg = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.firstName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elkILsx.formHandler.addError(`firstName`, 'required', trans('validation.required'));}return elkILsx.formHandler.removeError(`firstName`);}]},`value`,`${fval(component.user.firstName)}`,`name`,`${(`firstName`).toInputName()}`,`placeholder`,`${trans(`First name`)}`,`type`,`text`,`class`,`form-control d-inline-block`,`id`,`firstName`);
elHp1Wg.value = fval(component.user.firstName);
let cndv07l = elkILsx.formHandler.getError(`firstName`);
this.setState('stNBETY', cndv07l);
if (cndv07l) { 
let elZa5Bu = eo('div','_uLf',null,`class`,`alert alert-danger`);
text(elkILsx.formHandler.getError(`firstName`));
ec('div');
}let elJ5hcu = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.lastName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elkILsx.formHandler.addError(`lastName`, 'required', trans('validation.required'));}return elkILsx.formHandler.removeError(`lastName`);}]},`value`,`${fval(component.user.lastName)}`,`name`,`${(`lastName`).toInputName()}`,`placeholder`,`${trans(`Last name`)}`,`type`,`text`,`class`,`form-control d-inline-block`,`id`,`lastName`);
elJ5hcu.value = fval(component.user.lastName);
let cndbIVk = elkILsx.formHandler.getError(`lastName`);
this.setState('st_5Mo4', cndbIVk);
if (cndbIVk) { 
let elM81LM = eo('div','EGEf',null,`class`,`alert alert-danger`);
text(elkILsx.formHandler.getError(`lastName`));
ec('div');
}let elnV_OV = ev('input',null,null,`name`,`${(`name`).toInputName()}`,`type`,`hidden`,`value`,`${ (component.user.firstName + ' ' + component.user.lastName) || component.user.name }`);
ec('div');
let elFWdNC = eo('div',null,null,`class`,`m-y-1`);
let elKKgjp = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn blue bold save-btn`);
text(`Save changes`);
ec('button');
let elvO8hf = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn white black-text bold`);
text(`Close`);
ec('button');
ec('div');
}let cndF1i8 = component.editMode == 'name' && ! component.inEditMode && ! component.requireNameChange();
this.setState('stDXSUD', cndF1i8);
if (cndF1i8) { 
let elM2sKx = eo('button','LS0f',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'name'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elbP8lq = eo('i','lfcf',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('div');
let cmpPym0 = this._lc('cNUfanRJO', {parent:component,parentTop:layout,props:{coins:component.user.gold}});
ec('div');
let el7avgw = eo('div',null,null,`id`,`totals`,`class`,`text-center`);
let elyTEfe = eo('section',null,null,`class`,`profile-box pb-5 mb-5`);
let elFMaP1 = eo('header',null,null,`class`,`col-12 profile-box-header m-b-5`);
let elc1I7J = eo('h1',null,null,`class`,`pl-5 my-0`);
text(`General Overview`);
ec('h1');
let el57Isk = eo('span',null,null,`class`,`profile-box-header-line`);
ec('span');
ec('header');
let eltqcTC = eo('div',null,null,`class`,`row m-t-5 mx-0`);
let elMMWqG = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpEAoB = this._lc('cSkcVT9j6', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'tracks', '')},attrs:{class:'total-summary bold teal-border'}});
let elTqPwy = eo('div',null,null,`class`,`btn btn-sm btn-teal bold`);
text(`Academy tracks`);
ec('div');
ec('div');
let elGy4dH = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpNnue = this._lc('cHCdmW18Z', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.all', '')},attrs:{class:'total-summary bold navy-border'}});
let el5sz91 = eo('div',null,null,`class`,`btn btn-sm btn-navy bold`);
text(`Academy answers`);
ec('div');
ec('div');
let el_Ky5_ = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpw748 = this._lc('cYHnhOXjf', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.all', '')},attrs:{class:'total-summary bold purple-border'}});
let elrU82R = eo('div',null,null,`class`,`btn btn-sm btn-purple bold`);
text(`Einstein puzzles`);
ec('div');
ec('div');
let el0acXw = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpJ7Xg = this._lc('cOvjllLW2', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'invitations', '') || 0},attrs:{class:'total-summary bold lime-border'}});
let elYSBvi = eo('div',null,null,`class`,`btn btn-sm btn-lime bold`);
text(`Invitations`);
ec('div');
ec('div');
ec('div');
ec('section');
let eluuFyo = eo('section',null,null,`class`,`profile-box py-5 my-5`);
let eljDqJo = eo('header',null,null,`class`,`col-12 m-b-5 profile-box-header`);
let elauYzp = eo('h1',null,null,`class`,`pl-5 my-0`);
text(`Academy`);
ec('h1');
let elKFo6w = eo('span',null,null,`class`,`profile-box-header-line`);
ec('span');
ec('header');
let elBEcRA = eo('div',null,null,`class`,`row m-t-5`);
let elpcc9N = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmplcCr = this._lc('czJrTjGSv', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'tracks', '')},attrs:{class:'total-summary bold light-gray-border'}});
let elrvJl1 = eo('div',null,null,`class`,`btn btn-sm btn-light-gray bold`);
text(`Unlocked tracks`);
ec('div');
ec('div');
let elIDxgi = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpIavs = this._lc('cPKNvsBXO', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.approved', '')},attrs:{class:'total-summary bold success-border'}});
let elA6Rqh = eo('div',null,null,`class`,`btn btn-sm btn-success bold`);
text(`Approved answers`);
ec('div');
ec('div');
let eleFdCj = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmplDIT = this._lc('cPY4WhYmJ', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.pending', '')},attrs:{class:'total-summary bold warning-border'}});
let elgmkKj = eo('div',null,null,`class`,`btn btn-sm btn-warning bold`);
text(`Pending answers`);
ec('div');
ec('div');
let el7oEJq = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpHmkB = this._lc('crFzZY8jt', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.rejected', '')},attrs:{class:'total-summary bold danger-border'}});
let el76za_ = eo('div',null,null,`class`,`btn btn-sm btn-danger bold`);
text(`Rejected answers`);
ec('div');
ec('div');
ec('div');
ec('section');
let elMs17c = eo('section',null,null,`class`,`profile-box py-5 my-5`);
let eluS7hC = eo('header',null,null,`class`,`col-12 m-b-5 profile-box-header`);
let elEtfGS = eo('h1',null,null,`class`,`pl-5 my-0`);
text(`Einstein Chamber`);
ec('h1');
let elx3qcJ = eo('span',null,null,`class`,`profile-box-header-line`);
ec('span');
ec('header');
let elfqVW1 = eo('div',null,null,`class`,`row m-t-5`);
let elLt1kY = eo('div',null,null,`class`,`col-sm-3`);
let cmpxXR7 = this._lc('cKPtMZRDx', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.categories', 0)},attrs:{class:'total-summary bold pencil-border'}});
let elSvQCF = eo('div',null,null,`class`,`btn btn-sm btn-pencil bold`);
text(`Unlocked categories`);
ec('div');
ec('div');
let elYpKSd = eo('div',null,null,`class`,`col-sm-3`);
let cmpVyaw = this._lc('cPuU6B66u', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.approved', 0)},attrs:{class:'total-summary bold emerald-border'}});
let elip7z2 = eo('div',null,null,`class`,`btn btn-sm btn-emerald bold`);
text(`Approved`);
ec('div');
ec('div');
let eltxktM = eo('div',null,null,`class`,`col-sm-3`);
let cmpq8mx = this._lc('cex79Adiz', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.pending', 0)},attrs:{class:'total-summary bold dark-warning-border'}});
let eldidMw = eo('div',null,null,`class`,`btn btn-sm btn-dark-warning bold`);
text(`Pending`);
ec('div');
ec('div');
let elCdnD1 = eo('div',null,null,`class`,`col-sm-3`);
let cmp3mZQ = this._lc('cgCPF4Q8S', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.rejected', 0)},attrs:{class:'total-summary bold dark-danger-border'}});
let el7qXES = eo('div',null,null,`class`,`btn btn-sm btn-dark-danger bold`);
text(`Rejected`);
ec('div');
ec('div');
ec('div');
ec('section');
ec('div');
ec('section');
ec('div');
let elHa9YS = eo('div',null,null,`class`,`tab-pane fade`,`id`,`account-info-tab`,`role`,`tabpanel`,`aria-labelledby`,`account-info-tab`);
let elS_rSj = eo('section',null,null,`id`,`profile-settings-tab`);
let ell1MQo = eo('table',null,null,`class`,`table table-bordered`);
let elOfoVB = eo('tbody');
let elE9Fuv = eo('tr');
let el9d_5z = eo('th');
text(`Account id`);
ec('th');
let elHWADY = eo('td');
text(component.user.id);
ec('td');
ec('tr');
let elJ_sXZ = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'email'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elCeNuy = eo('th');
text(`Email address`);
ec('th');
let elm4Z1W = eo('td');
let cndiidM = component.inEditMode != 'email';
this.setState('stxm770', cndiidM);
let cndB6Mj = !(cndiidM);
this.setState('stJAvSy', cndB6Mj);
if (cndiidM) { 
let elyg2wa = eo('span','e22f');
text(component.user.email);
ec('span');
}else { 
let elT1YK6 = eo('div',null,null,`class`,`row`);
let el6zVoY = eo('div',null,null,`class`,`col-9`);
let elL3Jbd = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elkILsx.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elkILsx.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elkILsx.formHandler.removeError(`email`);}]},`value`,`${fval(component.user.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Email address`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
elL3Jbd.value = fval(component.user.email);
let cndxDKR = elkILsx.formHandler.getError(`email`);
this.setState('stgH_Qb', cndxDKR);
if (cndxDKR) { 
let el4lIeT = eo('div','YTnf',null,`class`,`alert alert-danger`);
text(elkILsx.formHandler.getError(`email`));
ec('div');
}ec('div');
let elZAYT2 = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let elZ_YI8 = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elQBoFg = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cnd66f0 = component.editMode == 'email' && ! component.inEditMode;
this.setState('stmNiTV', cnd66f0);
if (cnd66f0) { 
let elh5Ixv = eo('button','obaf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'email'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elcYc_s = eo('i','ZJkf',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let elsF7Qm = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'username'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elR2kQb = eo('th');
text(`Username`);
ec('th');
let elEYCzn = eo('td');
let cndv7Hc = component.inEditMode != 'username';
this.setState('st2iP95', cndv7Hc);
let cndyAtY = !(cndv7Hc);
this.setState('stbyLG6', cndyAtY);
if (cndv7Hc) { 
let elTYRP2 = eo('span','02gf');
text(component.user.username || 'N/a');
ec('span');
}else { 
let elCtkeX = eo('div',null,null,`class`,`row`);
let elAjYjV = eo('div',null,null,`class`,`col-9`);
text(`@`);
let elkBf3e = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.username = this.value;},function(e) {var $el = this;component.validateUserName($el.value)}]},`value`,`${fval(component.user.username)}`,`name`,`${(`username`).toInputName()}`,`placeholder`,`${trans(`username`)}`,`type`,`text`,`class`,`username-input`,`id`,`username`);
elkBf3e.autocomplete = elkBf3e.name == 'password' && Is.browser('chrome') ? 'new-password' : 'off';
elkBf3e.value = fval(component.user.username);
let cndN8rt = component.errors.username;
this.setState('stz1cm2', cndN8rt);
if (cndN8rt) { 
let elT1ym8 = eo('span','Yyif',null,`class`,`red-text bold`);
text(component.errors.username);
ec('span');
}ec('div');
let el7df9O = eo('div',null,null,`class`,`col-3 p-0`);
let elQgeSF = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let eliRGCn = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
let elNq983 = eo('div',null,null,`class`,`row m-0`);
let el8zaDG = eo('div',null,null,`class`,`col`);
let elr_mYl = eo('div',null,null,`class`,`bold`);
text(`Username creation criteria`);
ec('div');
let elwrebr = eo('small');
text(`Must starts with English letter (lowercase).`);
let elBUjrg = ev('br');
text(`Can contain only English letters, Numbers, dot or underscore.`);
let el1Q7cY = ev('br');
text(`No more than one dot or underscore can be written after each other.`);
let el6vheo = ev('br');
text(`No whitespaces allowed.`);
let elYoUrC = ev('br');
ec('small');
ec('div');
ec('div');
ec('div');
}let cnd4dME = component.editMode == 'username' && ! component.inEditMode;
this.setState('stxVstE', cnd4dME);
if (cnd4dME) { 
let elrBYGw = eo('button','1TVf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'username'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elFUbBY = eo('i','XMXf',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let elaEVGd = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'gender'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let eld1sAI = eo('th');
text(`Gender`);
ec('th');
let elgQeVV = eo('td');
let cndAiK6 = component.inEditMode != 'gender';
this.setState('stjjT0g', cndAiK6);
let cndIsaA = !(cndAiK6);
this.setState('stcn8Cx', cndIsaA);
if (cndAiK6) { 
let el9azlq = eo('span','J_ff',null,`class`,`text-capitalize`);
text(component.user.gender || 'N/a');
ec('span');
}else { 
let elEe5hm = eo('div',null,null,`class`,`row`);
let elfNKzK = eo('div',null,null,`class`,`col-9`);
let cmphYb3 = this._lc('cWvDPVTVG', {parent:component,parentTop:layout,props:{value:component.user.gender,items:['male', 'female'],required:true},attrs:{name:`${(`gender`).toInputName()}`},state:'stcn8Cx'});
let cndCT8d = component.errors.gender;
this.setState('stMOvYs', cndCT8d);
if (cndCT8d) { 
let elSbRTT = eo('span','9e3f',null,`class`,`red-text bold`);
text(component.errors.gender);
ec('span');
}ec('div');
let elCxpDg = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let el6NVHC = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elqpjpg = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cndXtiy = component.editMode == 'gender' && ! component.inEditMode;
this.setState('stKKuln', cndXtiy);
if (cndXtiy) { 
let elYG91z = eo('button','78Cf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'gender'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elDmOAj = eo('i','Hhxf',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let el9YrLA = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'homePage'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elC2n83 = eo('th');
text(`Home Page`);
ec('th');
let elem65P = eo('td');
let cndhPbD = component.inEditMode != 'homePage';
this.setState('stYgnWO', cndhPbD);
let cndp2TD = !(cndhPbD);
this.setState('styUp3y', cndp2TD);
if (cndhPbD) { 
let elxclT2 = eo('span','dzsf',null,`class`,`text-capitalize`);
text(component.user.homePage ? component.homePages[component.user.homePage] : 'N/a');
ec('span');
}else { 
let elUsAnq = eo('div',null,null,`class`,`row`);
let elnasOO = eo('div',null,null,`class`,`col-9`);
let cmpFz47 = this._lc('cIALi0Dcf', {parent:component,parentTop:layout,props:{value:component.user.homePage,items:component.homePages,required:true},attrs:{name:`${(`homePage`).toInputName()}`},state:'styUp3y'});
let cndX45R = component.errors.homePage;
this.setState('stmMhZg', cndX45R);
if (cndX45R) { 
let elMoLdt = eo('span','74Uf',null,`class`,`red-text bold`);
text(component.errors.homePage);
ec('span');
}ec('div');
let elSo2eI = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let elAflM5 = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let el2A3wK = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cndks6b = component.editMode == 'homePage' && ! component.inEditMode;
this.setState('stfkU8f', cndks6b);
if (cndks6b) { 
let elbnn1Q = eo('button','f_Yf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'homePage'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elsifNo = eo('i','f63f',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let elHx0SJ = eo('tr');
let elTCj96 = eo('th');
text(`Joined`);
ec('th');
let elh9sTw = eo('td');
let cmp_fZk = this._lc('c6P3J_ddL', {parent:component,parentTop:layout,props:{timestamp:component.user.createdAt.timestamp}});
ec('td');
ec('tr');
let elkEOk1 = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'mobile'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let el4tLki = eo('th');
text(`Mobile number`);
ec('th');
let elUni9N = eo('td');
let cndZEhH = component.inEditMode != 'mobile';
this.setState('stkyiyg', cndZEhH);
let cndy7e5 = !(cndZEhH);
this.setState('stwuqhf', cndy7e5);
if (cndZEhH) { 
let elNaBnM = eo('span','GXQf');
text(component.user.mobile || 'N/a');
ec('span');
}else { 
let elwM3NS = eo('div',null,null,`class`,`row`);
let el7UAGK = eo('div',null,null,`class`,`col-9`);
let el9eTVI = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.mobile = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elkILsx.formHandler.addError(`mobile`, 'required', trans('validation.required'));}return elkILsx.formHandler.removeError(`mobile`);}]},`value`,`${fval(component.user.mobile)}`,`name`,`${(`mobile`).toInputName()}`,`placeholder`,`${trans(`Mobile number`)}`,`type`,`text`,`class`,`form-control`,`id`,`mobile`);
el9eTVI.value = fval(component.user.mobile);
let cndOhLP = elkILsx.formHandler.getError(`mobile`);
this.setState('stemtFd', cndOhLP);
if (cndOhLP) { 
let el1Diah = eo('div','iLDf',null,`class`,`alert alert-danger`);
text(elkILsx.formHandler.getError(`mobile`));
ec('div');
}ec('div');
let elEKgEQ = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let elWQzvh = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let els9l0c = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cndhe3M = component.editMode == 'mobile' && ! component.inEditMode;
this.setState('stoiPrY', cndhe3M);
if (cndhe3M) { 
let elHwwI5 = eo('button','_Qif',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'mobile'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elR7MjI = eo('i','cD1f',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
ec('tbody');
ec('table');
ec('section');
ec('div');
let elfXW5w = eo('div',null,null,`class`,`tab-pane fade`,`id`,`academy-tracks-tab`,`role`,`tabpanel`,`aria-labelledby`,`academy-tracks-tab`);
let cnd0siN = component.isLoading;
this.setState('stgjjaa', cnd0siN);
let cndo00b = !(cnd0siN);
this.setState('stUdO_z', cndo00b);
if (cnd0siN) { 
let cmp94Xc = this._lc('chalH9q47', {parent:component,parentTop:layout,state:'stgjjaa'});
}else { 
let elPDemz = eo('div');
let el3jQ_v = eo('h1',null,null,`class`,`text-center m-y-1`);
text(`Your subscribed academy tracks`);
ec('h1');
let elvTa37 = eo('div',null,null,`class`,`row`);
for (let i in component.tracks) {
let track = component.tracks[i]; 
 let iiHicE = 'Qr0cfM_' + i;
let cmpI12A = this._lc('cpv8Ory80', {parent:component,parentTop:layout,props:{track:track},attrs:{class:'col-lg-3 col-md-6'},state:'stUdO_z',insideLoop:true,index:"" +iiHicE});
}
ec('div');
ec('div');
}ec('div');
let elrgXTz = eo('div',null,null,`class`,`tab-pane fade`,`id`,`einstein-categories-tab`,`role`,`tabpanel`,`aria-labelledby`,`einstein-categories-tab`);
let cndPBdo = component.isLoading;
this.setState('stGmG6x', cndPBdo);
let cnd3Nt1 = !(cndPBdo);
this.setState('stw_iyQ', cnd3Nt1);
if (cndPBdo) { 
let cmpsGD0 = this._lc('cdBZzylfZ', {parent:component,parentTop:layout,state:'stGmG6x'});
}else { 
let el0QRql = eo('div');
let elH5ycB = eo('h1',null,null,`class`,`text-center m-y-1`);
text(`Einstein Chamber categories`);
ec('h1');
let elURcwa = eo('div',null,null,`class`,`row`);
for (let i in component.einsteinCategories) {
let category = component.einsteinCategories[i]; 
 let iiwxP9 = 'fmTsiLe' + i;
let elc6hw9 = eo('div','jXlxYZW9DK2S' + i+iiwxP9,null,`class`,`col-3`);
let cmpcDWu = this._lc('ctYuc7IQf', {parent:component,parentTop:layout,props:{category:category},state:'stw_iyQ',insideLoop:true,index:"" +iiwxP9});
ec('div');
}
ec('div');
ec('div');
}ec('div');
let eliCmw7 = eo('div',null,null,`class`,`tab-pane fade`,`id`,`affiliate-tab`,`role`,`tabpanel`,`aria-labelledby`,`affiliate-tab`);
let elW35Z5 = eo('div',null,null,`id`,`affiliate`);
let elfJ17R = eo('h1');
text(`Affiliate URL`);
ec('h1');
let elXz0cq = eo('div',null,null,`class`,`m-t-1`);
let elBfM_E = eo('a',null,null,`class`,`bold teal-text mx-2`,`target`,`_blank`,`href`,`${ component.affiliateUrl }`);
text(`Click on the
            following
            icon to copy your affiliate url.`);
ec('a');
let cndsuBD = ! component.copied;
this.setState('stSs3Va', cndsuBD);
if (cndsuBD) { 
let elHCzAf = eo('button','lsQf',null, eventListeners, {onclick:[function(e) {var $el = this;copyToClipboard(component.affiliateUrl); component.copied = true;}]},`title`,`${trans(`Copy`)}`,`class`,`text-primary`,`type`,`button`);
text(`(`);
let elLC6tb = eo('i','A8Bf',null,`class`,`${fas('object-ungroup') + ' icon'}`);
ec('i');
text(`)`);
ec('button');
}let cnduhQL = component.copied;
this.setState('stVVDO5', cnduhQL);
if (cnduhQL) { 
let elva2gH = eo('strong','VwFf',null,`title`,`${trans(`Copied`)}`,`class`,`green-text ml-2`);
let elcJpoD = eo('i','5e4f',null,`class`,`${fas('check') + ' icon'}`);
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
let cndlCrK = component.updateMessage;
this.setState('strLB3j', cndlCrK);
if (cndlCrK) { 
let cmpDW9v = this._lc('cau9segIJ', {parent:component,props:{html:component.updateMessage},events:{onclose:function(e) {let $el = this; component.updateMessage = null}},content:(flkMessage) => {text(component.updateMessage);
},state:'strLB3j'});
}
                    this.isReadyToGo();
                }
        });