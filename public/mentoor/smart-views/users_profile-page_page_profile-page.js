_Component({
                selector: 'profile-page',
                c: 'ProfilePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['updateProfile','user','loadTracks','loadEinsteinCategories','updateMessage','requireNameChange','isUpdating','editMode','form','getUserImage','inEditMode','validateUserName','errors','homePages','isLoading','tracks','einsteinCategories','affiliateUrl','copied'],
                children: {ct5w3z6b2:'flk-image-input',cspQwL5Dd:'gold-icon',crWrhSTbr:'flk-number-counter',c4jI8LiXB:'flk-number-counter',cJMJw9qJJ:'flk-number-counter',c5VIBnDY3:'flk-number-counter',ccxnI_XeV:'flk-number-counter',cjDu7MWwF:'flk-number-counter',c2KRNlCD4:'flk-number-counter',cppCHW2aT:'flk-number-counter',cBwkjF4Ej:'flk-number-counter',cCd6_nISt:'flk-number-counter',cXn7IzAXd:'flk-number-counter',cE5p9PULd:'flk-number-counter',cBE5Hz_V4:'flk-dropdown-list',cZhkKW3c2:'flk-dropdown-list',cEJBgCNQU:'flk-time-ago',cUyJMCfMk:'flk-spinner',cQqW_XE7V:'track-card',chfZ68xtl:'flk-spinner',c9SPQjTOx:'einstein-category-card',c1pCkfiY_:'layout',cbgtgzqlm:'flk-message'},
                render: function (component) {
                    let cmpmnzl = this._lc('c1pCkfiY_', {parent:component,content:(layout) => {let elun5TR = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.updateProfile($el)}]});
component.form = elun5TR;

                if (! elun5TR.formHandler) {
                    window.cfrmdlr = elun5TR.formHandler = new FormHandler(elun5TR, component);
                } else {
                    window.cfrmdlr = elun5TR.formHandler;
                }
            let el4I1Wg = eo('div',null,null,`class`,`rows`);
let elnYq8h = eo('ul',null,null,`class`,`nav nav-tabs`);
let elTo05j = eo('li',null,null,`class`,`nav-item`);
let elhLcGv = eo('a',null,null,`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#overview-tab`);
let elnqgtC = eo('i',null,null,`class`,`${fas('street-view')} mr-1 icon`);
ec('i');
text(`Overview`);
ec('a');
ec('li');
let elbe8OY = eo('li',null,null,`class`,`nav-item`);
let elJSyli = eo('a',null,null,`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#account-info-tab`);
let eloCpXC = eo('i',null,null,`class`,`${fas('user')} mr-1 icon`);
ec('i');
text(`Account info`);
ec('a');
ec('li');
let cnd0Nun = component.user.total.tracks > 0;
this.setState('stEDRS0', cnd0Nun);
if (cnd0Nun) { 
let elbGBos = eo('li','S2pf',null,`class`,`nav-item`);
let eldA869 = eo('a','siuf',null, eventListeners, {onclick:[function(e) {var $el = this;component.loadTracks()}]},`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#academy-tracks-tab`);
let elO6brJ = eo('i','dC6f',null,`class`,`${fas('university')} mr-1 icon`);
ec('i');
text(`Academy tracks`);
let el5LDVk = eo('span','ZZ8f',null,`class`,`badge total-answers badge-success`);
text(component.user.total.tracks);
ec('span');
ec('a');
ec('li');
}let cndWhsB = Object.get(component.user.total, 'einstein.categories') > 0;
this.setState('staYTpW', cndWhsB);
if (cndWhsB) { 
let elbvlFL = eo('li','JTyf',null,`class`,`nav-item`);
let elWZ3m6 = eo('a','UkWf',null, eventListeners, {onclick:[function(e) {var $el = this;component.loadEinsteinCategories()}]},`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#einstein-categories-tab`);
let elLCltl = ev('img','y0If',null,`src`,`${assets('images/ein-sm.png')}`,`class`,`einstein-icon`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
text(`Einstein categories`);
let elC6rfv = eo('span','I93f',null,`class`,`badge total-answers btn-purple`);
text(component.user.total.einstein.categories);
ec('span');
ec('a');
ec('li');
}let elw7Yva = eo('li',null,null,`class`,`nav-item`);
let elf578M = eo('a',null,null,`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#affiliate-tab`);
let el2KVj_ = eo('i',null,null,`class`,`${fas('user-plus')} mr-1 icon`);
ec('i');
text(`Affiliate program`);
ec('a');
ec('li');
ec('ul');
let elyNsCH = eo('div',null,null,`class`,`cols`);
let elnReAe = eo('div',null,null,`class`,`tab-content`);
let eliLQsx = eo('div',null,null,`class`,`tab-pane fade`,`id`,`overview-tab`);
let eljTelX = eo('section',null,null,`id`,`profile-overview-tab`);
let cndy2Fo = component.requireNameChange();
this.setState('st4aKpB', cndy2Fo);
if (cndy2Fo) { 
let elr2DO4 = eo('div','bEDf',null,`class`,`overlay`);
ec('div');
}let elYHftp = eo('div',null,null,`class`,`text-center m-b-2`);
let el6kFsZ = eo('div',null,null,`class`,`relative`);
let cmpFJFU = this._lc('ct5w3z6b2', {parent:component,parentTop:layout,props:{disabled:component.isUpdating,src:component.getUserImage()},events:{onmouseover:function(e) {let $el = this; component.editMode = 'image'},onmouseout:function(e) {let $el = this; component.editMode = null},onchange:function(e) {let $el = this; component.updateProfile(component.form);}},boolAttrs:{disabled:component.isUpdating},attrs:{src:`${component.getUserImage()}`,name:`${(`image`).toInputName()}`}});
let cnd6bsw = component.user.username;
this.setState('stb_pJy', cnd6bsw);
if (cnd6bsw) { 
let el5JAvF = eo('span','wqhf',null,`class`,`grey-text`);
text('@' + component.user.username);
ec('span');
}let cndVec3 = component.editMode == 'image';
this.setState('stUzzzo', cndVec3);
if (cndVec3) { 
let elB2aod = eo('span','3lVf',null,`class`,`new-tooltip`);
text(`Click to edit`);
ec('span');
}ec('div');
let el6YccK = eo('div',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'name'; component.editMode}],onmouseout:[function(e) {var $el = this;component.editMode = null}]},`class`,`m-t-2 relative name-change-wrapper`);
let cndkbQd = component.requireNameChange();
this.setState('stJJapP', cndkbQd);
let cndjK1q = component.inEditMode == 'name' || component.requireNameChange();
this.setState('stNjAKQ', cndjK1q);
if (cndkbQd) { 
let eltXPrY = eo('span','IqPf',null,`class`,`new-tooltip`);
text(`Add your last name`);
ec('span');
}let cndAsOc = component.inEditMode != 'name' && ! component.requireNameChange();
this.setState('stPWz6z', cndAsOc);
let cnd1J21 = cndjK1q;
this.setState('staDu5I', cnd1J21);
if (cndAsOc) { 
let elaajrT = eo('h1','MJDf',null,`class`,`d-inline-block`);
text(component.user.name);
ec('h1');
}else if (cnd1J21) { 
let elyxW2X = eo('div',null,null,`class`,`m-auto`,`id`,`name-change`);
let elxH4q0 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.firstName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elun5TR.formHandler.addError(`firstName`, 'required', trans('validation.required'));}return elun5TR.formHandler.removeError(`firstName`);}]},`value`,`${fval(component.user.firstName)}`,`name`,`${(`firstName`).toInputName()}`,`placeholder`,`${trans(`First name`)}`,`type`,`text`,`class`,`form-control d-inline-block`,`id`,`firstName`);
elxH4q0.value = fval(component.user.firstName);
let cnd9wmx = elun5TR.formHandler.getError(`firstName`);
this.setState('stspMMO', cnd9wmx);
if (cnd9wmx) { 
let elxtP18 = eo('div','Hyof',null,`class`,`alert alert-danger`);
text(elun5TR.formHandler.getError(`firstName`));
ec('div');
}let el2tIzp = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.lastName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elun5TR.formHandler.addError(`lastName`, 'required', trans('validation.required'));}return elun5TR.formHandler.removeError(`lastName`);}]},`value`,`${fval(component.user.lastName)}`,`name`,`${(`lastName`).toInputName()}`,`placeholder`,`${trans(`Last name`)}`,`type`,`text`,`class`,`form-control d-inline-block`,`id`,`lastName`);
el2tIzp.value = fval(component.user.lastName);
let cndShav = elun5TR.formHandler.getError(`lastName`);
this.setState('stc9sIk', cndShav);
if (cndShav) { 
let elX7eO9 = eo('div','l1Wf',null,`class`,`alert alert-danger`);
text(elun5TR.formHandler.getError(`lastName`));
ec('div');
}let elzlh__ = ev('input',null,null,`name`,`${(`name`).toInputName()}`,`type`,`hidden`,`value`,`${ (component.user.firstName + ' ' + component.user.lastName) || component.user.name }`);
ec('div');
let elYEzh6 = eo('div',null,null,`class`,`m-y-1`);
let elGBiNz = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn blue bold save-btn`);
text(`Save changes`);
ec('button');
let elIswB6 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn white black-text bold`);
text(`Close`);
ec('button');
ec('div');
}let cndOnYe = component.editMode == 'name' && ! component.inEditMode && ! component.requireNameChange();
this.setState('stwyLUd', cndOnYe);
if (cndOnYe) { 
let elyQ1o6 = eo('button','6Y7f',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'name'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elGquI0 = eo('i','pdVf',null,`class`,`${fas('pen')} icon`);
ec('i');
text(`Edit`);
ec('button');
}ec('div');
let cmp9SHJ = this._lc('cspQwL5Dd', {parent:component,parentTop:layout,props:{coins:component.user.gold}});
ec('div');
let elxGX_p = eo('div',null,null,`id`,`totals`,`class`,`text-center`);
let elWorz3 = eo('section',null,null,`class`,`profile-box pb-5 mb-5`);
let ely3gUT = eo('header',null,null,`class`,`col-12 profile-box-header m-b-5`);
let eluo6UO = eo('h1',null,null,`class`,`pl-5 my-0`);
text(`General Overview`);
ec('h1');
let elheeXO = eo('span',null,null,`class`,`profile-box-header-line`);
ec('span');
ec('header');
let elkLnPy = eo('div',null,null,`class`,`row m-t-5 mx-0`);
let elZ5izV = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpbcSz = this._lc('crWrhSTbr', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'tracks', '')},attrs:{class:'total-summary bold teal-border'}});
let el96FBJ = eo('div',null,null,`class`,`btn btn-sm btn-teal bold`);
text(`Academy tracks`);
ec('div');
ec('div');
let elFxR26 = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpX7nS = this._lc('c4jI8LiXB', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.all', '')},attrs:{class:'total-summary bold navy-border'}});
let elaMnLi = eo('div',null,null,`class`,`btn btn-sm btn-navy bold`);
text(`Academy answers`);
ec('div');
ec('div');
let elZ8jMX = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpV637 = this._lc('cJMJw9qJJ', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.all', '')},attrs:{class:'total-summary bold purple-border'}});
let el8aWEV = eo('div',null,null,`class`,`btn btn-sm btn-purple bold`);
text(`Einstein puzzles`);
ec('div');
ec('div');
let el5aSy1 = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpW6Em = this._lc('c5VIBnDY3', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'invitations', '') || 0},attrs:{class:'total-summary bold lime-border'}});
let elydrZb = eo('div',null,null,`class`,`btn btn-sm btn-lime bold`);
text(`Invitations`);
ec('div');
ec('div');
ec('div');
ec('section');
let el02Cnx = eo('section',null,null,`class`,`profile-box py-5 my-5`);
let elW1EuG = eo('header',null,null,`class`,`col-12 m-b-5 profile-box-header`);
let elHD9MM = eo('h1',null,null,`class`,`pl-5 my-0`);
text(`Academy`);
ec('h1');
let elp1cZc = eo('span',null,null,`class`,`profile-box-header-line`);
ec('span');
ec('header');
let elmzQl5 = eo('div',null,null,`class`,`row m-t-5`);
let elpPneE = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmp8jY7 = this._lc('ccxnI_XeV', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'tracks', '')},attrs:{class:'total-summary bold light-gray-border'}});
let elZ5kcd = eo('div',null,null,`class`,`btn btn-sm btn-light-gray bold`);
text(`Unlocked tracks`);
ec('div');
ec('div');
let elwXNAo = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpLIN_ = this._lc('cjDu7MWwF', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.approved', '')},attrs:{class:'total-summary bold success-border'}});
let el4n2kC = eo('div',null,null,`class`,`btn btn-sm btn-success bold`);
text(`Approved answers`);
ec('div');
ec('div');
let elJXFSf = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpTpjv = this._lc('c2KRNlCD4', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.pending', '')},attrs:{class:'total-summary bold warning-border'}});
let elTt8GW = eo('div',null,null,`class`,`btn btn-sm btn-warning bold`);
text(`Pending answers`);
ec('div');
ec('div');
let elMgC9Q = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpNmLj = this._lc('cppCHW2aT', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.rejected', '')},attrs:{class:'total-summary bold danger-border'}});
let elc2Ob5 = eo('div',null,null,`class`,`btn btn-sm btn-danger bold`);
text(`Rejected answers`);
ec('div');
ec('div');
ec('div');
ec('section');
let el27MTS = eo('section',null,null,`class`,`profile-box py-5 my-5`);
let el1l22E = eo('header',null,null,`class`,`col-12 m-b-5 profile-box-header`);
let el4e8uD = eo('h1',null,null,`class`,`pl-5 my-0`);
text(`Einstein Chamber`);
ec('h1');
let elxig3t = eo('span',null,null,`class`,`profile-box-header-line`);
ec('span');
ec('header');
let elQRA5l = eo('div',null,null,`class`,`row m-t-5`);
let elGTYPP = eo('div',null,null,`class`,`col-sm-3`);
let cmpcPa5 = this._lc('cBwkjF4Ej', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.categories', 0)},attrs:{class:'total-summary bold pencil-border'}});
let elmLPki = eo('div',null,null,`class`,`btn btn-sm btn-pencil bold`);
text(`Unlocked categories`);
ec('div');
ec('div');
let eliNqcc = eo('div',null,null,`class`,`col-sm-3`);
let cmpe1kq = this._lc('cCd6_nISt', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.approved', 0)},attrs:{class:'total-summary bold emerald-border'}});
let el4I0dK = eo('div',null,null,`class`,`btn btn-sm btn-emerald bold`);
text(`Approved`);
ec('div');
ec('div');
let eli_3Fo = eo('div',null,null,`class`,`col-sm-3`);
let cmpfpAO = this._lc('cXn7IzAXd', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.pending', 0)},attrs:{class:'total-summary bold dark-warning-border'}});
let eliCGf6 = eo('div',null,null,`class`,`btn btn-sm btn-dark-warning bold`);
text(`Pending`);
ec('div');
ec('div');
let el0z3zW = eo('div',null,null,`class`,`col-sm-3`);
let cmplViA = this._lc('cE5p9PULd', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.rejected', 0)},attrs:{class:'total-summary bold dark-danger-border'}});
let elV5Wk4 = eo('div',null,null,`class`,`btn btn-sm btn-dark-danger bold`);
text(`Rejected`);
ec('div');
ec('div');
ec('div');
ec('section');
ec('div');
ec('section');
ec('div');
let elNLYyF = eo('div',null,null,`class`,`tab-pane fade`,`id`,`account-info-tab`,`role`,`tabpanel`,`aria-labelledby`,`account-info-tab`);
let elnibga = eo('section',null,null,`id`,`profile-settings-tab`);
let elEIG1Z = eo('table',null,null,`class`,`table table-bordered`);
let elPQ0G_ = eo('tbody');
let elmfsR1 = eo('tr');
let elyQRpF = eo('th');
text(`Account id`);
ec('th');
let elGHvIO = eo('td');
text(component.user.id);
ec('td');
ec('tr');
let elNQkwH = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'email'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elLszIF = eo('th');
text(`Email address`);
ec('th');
let eluCn_f = eo('td');
let cndgNvU = component.inEditMode != 'email';
this.setState('st8RoFQ', cndgNvU);
let cndXirW = !(cndgNvU);
this.setState('sttnk6C', cndXirW);
if (cndgNvU) { 
let elWgJ4t = eo('span','VCMf');
text(component.user.email);
ec('span');
}else { 
let elYvgtD = eo('div',null,null,`class`,`row`);
let elufZEC = eo('div',null,null,`class`,`col-9`);
let eloalk6 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elun5TR.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elun5TR.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elun5TR.formHandler.removeError(`email`);}]},`value`,`${fval(component.user.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Email address`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
eloalk6.value = fval(component.user.email);
let cndJLql = elun5TR.formHandler.getError(`email`);
this.setState('st_9dL3', cndJLql);
if (cndJLql) { 
let elzkUt6 = eo('div','xSpf',null,`class`,`alert alert-danger`);
text(elun5TR.formHandler.getError(`email`));
ec('div');
}ec('div');
let elYJk9s = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let elsE94G = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elfThGS = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cnd91l1 = component.editMode == 'email' && ! component.inEditMode;
this.setState('str8z3B', cnd91l1);
if (cnd91l1) { 
let elDTZpD = eo('button','dHrf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'email'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elU6RWV = eo('i','GI_f',null,`class`,`${fas('pen')} icon`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let elWa1Ty = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'username'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let eloujb2 = eo('th');
text(`Username`);
ec('th');
let el1gyDI = eo('td');
let cndEVK9 = component.inEditMode != 'username';
this.setState('stVbHqs', cndEVK9);
let cndF2T_ = !(cndEVK9);
this.setState('stFdd21', cndF2T_);
if (cndEVK9) { 
let elsZ4G6 = eo('span','oaqf');
text(component.user.username || 'N/a');
ec('span');
}else { 
let el0c6EC = eo('div',null,null,`class`,`row`);
let elEyScf = eo('div',null,null,`class`,`col-9`);
text(`@`);
let el2lhGP = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.username = this.value;},function(e) {var $el = this;component.validateUserName($el.value)}]},`value`,`${fval(component.user.username)}`,`name`,`${(`username`).toInputName()}`,`placeholder`,`${trans(`username`)}`,`type`,`text`,`class`,`username-input`,`id`,`username`);
el2lhGP.autocomplete = el2lhGP.name == 'password' && Is.browser('chrome') ? 'new-password' : 'off';
el2lhGP.value = fval(component.user.username);
let cndKmJ6 = component.errors.username;
this.setState('stQwORT', cndKmJ6);
if (cndKmJ6) { 
let elU0huo = eo('span','_ibf',null,`class`,`red-text bold`);
text(component.errors.username);
ec('span');
}ec('div');
let el75pHv = eo('div',null,null,`class`,`col-3 p-0`);
let el3aY3r = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elVrRoA = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
let elxSv6V = eo('div',null,null,`class`,`row m-0`);
let elbpEo_ = eo('div',null,null,`class`,`col`);
let elNPobv = eo('div',null,null,`class`,`bold`);
text(`Username creation criteria`);
ec('div');
let elFe3hV = eo('small');
text(`Must starts with English letter (lowercase).`);
let elaZPNK = ev('br');
text(`Can contain only English letters, Numbers, dot or underscore.`);
let elUnO4w = ev('br');
text(`No more than one dot or underscore can be written after each other.`);
let elVJJA7 = ev('br');
text(`No whitespaces allowed.`);
let elWYUKn = ev('br');
ec('small');
ec('div');
ec('div');
ec('div');
}let cndhUWr = component.editMode == 'username' && ! component.inEditMode;
this.setState('stxnoWx', cndhUWr);
if (cndhUWr) { 
let el2KZUd = eo('button','KWhf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'username'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let eli8TwP = eo('i','on2f',null,`class`,`${fas('pen')} icon`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let eltkAZZ = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'gender'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let el5IfwE = eo('th');
text(`Gender`);
ec('th');
let elF4vwE = eo('td');
let cnd4KKt = component.inEditMode != 'gender';
this.setState('stVKC2_', cnd4KKt);
let cndPQK_ = !(cnd4KKt);
this.setState('stafZ66', cndPQK_);
if (cnd4KKt) { 
let elF3pGv = eo('span','O_7f',null,`class`,`text-capitalize`);
text(component.user.gender || 'N/a');
ec('span');
}else { 
let elkKdLy = eo('div',null,null,`class`,`row`);
let elvIyjR = eo('div',null,null,`class`,`col-9`);
let cmpBngO = this._lc('cBE5Hz_V4', {parent:component,parentTop:layout,props:{value:component.user.gender,items:['male', 'female'],required:true},attrs:{name:`${(`gender`).toInputName()}`},state:'stafZ66'});
let cnd2Sko = component.errors.gender;
this.setState('stKA9v6', cnd2Sko);
if (cnd2Sko) { 
let elsvZI3 = eo('span','zdRf',null,`class`,`red-text bold`);
text(component.errors.gender);
ec('span');
}ec('div');
let elgEfKg = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let elVVLAt = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let eln6_kX = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cnd6zkZ = component.editMode == 'gender' && ! component.inEditMode;
this.setState('stx1SL6', cnd6zkZ);
if (cnd6zkZ) { 
let elbXRXT = eo('button','RW3f',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'gender'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elQxDsj = eo('i','Pegf',null,`class`,`${fas('pen')} icon`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let eldqIDr = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'homePage'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elGBlgR = eo('th');
text(`Home Page`);
ec('th');
let elhwTNr = eo('td');
let cndEd35 = component.inEditMode != 'homePage';
this.setState('stiZrmb', cndEd35);
let cndrk2B = !(cndEd35);
this.setState('st1ijk6', cndrk2B);
if (cndEd35) { 
let el11y_D = eo('span','t13f',null,`class`,`text-capitalize`);
text(component.user.homePage ? component.homePages[component.user.homePage] : 'N/a');
ec('span');
}else { 
let el8GBo8 = eo('div',null,null,`class`,`row`);
let eltKR6g = eo('div',null,null,`class`,`col-9`);
let cmpHJYM = this._lc('cZhkKW3c2', {parent:component,parentTop:layout,props:{value:component.user.homePage,items:component.homePages,required:true},attrs:{name:`${(`homePage`).toInputName()}`},state:'st1ijk6'});
let cndYQFs = component.errors.homePage;
this.setState('stdk4Zu', cndYQFs);
if (cndYQFs) { 
let elP62BN = eo('span','WFVf',null,`class`,`red-text bold`);
text(component.errors.homePage);
ec('span');
}ec('div');
let elL4yXA = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let eltjmuM = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let eltIvq4 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cndHkyN = component.editMode == 'homePage' && ! component.inEditMode;
this.setState('stttqLD', cndHkyN);
if (cndHkyN) { 
let elGJgR7 = eo('button','UqJf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'homePage'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elBsH72 = eo('i','UWYf',null,`class`,`${fas('pen')} icon`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let ellJ0o4 = eo('tr');
let ellwP0p = eo('th');
text(`Joined`);
ec('th');
let elFTWvA = eo('td');
let cmp9X6I = this._lc('cEJBgCNQU', {parent:component,parentTop:layout,props:{timestamp:component.user.createdAt.timestamp}});
ec('td');
ec('tr');
let elBjhSs = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'mobile'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elxD5mM = eo('th');
text(`Mobile number`);
ec('th');
let eldOk5g = eo('td');
let cndwtTX = component.inEditMode != 'mobile';
this.setState('sttWBOV', cndwtTX);
let cndwaEM = !(cndwtTX);
this.setState('st0jekV', cndwaEM);
if (cndwtTX) { 
let elBs_r5 = eo('span','ZjYf');
text(component.user.mobile || 'N/a');
ec('span');
}else { 
let elsqZy1 = eo('div',null,null,`class`,`row`);
let elwvfST = eo('div',null,null,`class`,`col-9`);
let elGoUiM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.mobile = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elun5TR.formHandler.addError(`mobile`, 'required', trans('validation.required'));}return elun5TR.formHandler.removeError(`mobile`);}]},`value`,`${fval(component.user.mobile)}`,`name`,`${(`mobile`).toInputName()}`,`placeholder`,`${trans(`Mobile number`)}`,`type`,`text`,`class`,`form-control`,`id`,`mobile`);
elGoUiM.value = fval(component.user.mobile);
let cnd6C0K = elun5TR.formHandler.getError(`mobile`);
this.setState('stG0z_Q', cnd6C0K);
if (cnd6C0K) { 
let elbixcb = eo('div','kAuf',null,`class`,`alert alert-danger`);
text(elun5TR.formHandler.getError(`mobile`));
ec('div');
}ec('div');
let elwSOSZ = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let elYN4Ti = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elT1X_f = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cnddhBq = component.editMode == 'mobile' && ! component.inEditMode;
this.setState('stHnLqS', cnddhBq);
if (cnddhBq) { 
let elbPxos = eo('button','4Gdf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'mobile'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elg410J = eo('i','7Skf',null,`class`,`${fas('pen')} icon`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
ec('tbody');
ec('table');
ec('section');
ec('div');
let el1vUgn = eo('div',null,null,`class`,`tab-pane fade`,`id`,`academy-tracks-tab`,`role`,`tabpanel`,`aria-labelledby`,`academy-tracks-tab`);
let cndWGWM = component.isLoading;
this.setState('stlgq4h', cndWGWM);
let cndA0NG = !(cndWGWM);
this.setState('stknmlO', cndA0NG);
if (cndWGWM) { 
let cmpD2f8 = this._lc('cUyJMCfMk', {parent:component,parentTop:layout,state:'stlgq4h'});
}else { 
let elN7Qfz = eo('div');
let eloipRy = eo('h1',null,null,`class`,`text-center m-y-1`);
text(`Your subscribed academy tracks`);
ec('h1');
let eleTmQ5 = eo('div',null,null,`class`,`row`);
for (let i in component.tracks) {
let track = component.tracks[i]; 
 let iiyNrn = 'G8iIbff' + i;
let cmp1UJ0 = this._lc('cQqW_XE7V', {parent:component,parentTop:layout,props:{track:track},attrs:{class:'col-lg-3 col-md-6'},state:'stknmlO',insideLoop:true,index:"" +iiyNrn});
}
ec('div');
ec('div');
}ec('div');
let eljZg0s = eo('div',null,null,`class`,`tab-pane fade`,`id`,`einstein-categories-tab`,`role`,`tabpanel`,`aria-labelledby`,`einstein-categories-tab`);
let cndJB5h = component.isLoading;
this.setState('stee3rl', cndJB5h);
let cnd3gpu = !(cndJB5h);
this.setState('stnwYg2', cnd3gpu);
if (cndJB5h) { 
let cmpxhip = this._lc('chfZ68xtl', {parent:component,parentTop:layout,state:'stee3rl'});
}else { 
let elvNxJz = eo('div');
let elmhf9u = eo('h1',null,null,`class`,`text-center m-y-1`);
text(`Einstein Chamber categories`);
ec('h1');
let elwmvX8 = eo('div',null,null,`class`,`row`);
for (let i in component.einsteinCategories) {
let category = component.einsteinCategories[i]; 
 let iiMNL7 = 'qu1wLif' + i;
let elzw8DF = eo('div','Wavidz5UOk0R' + i+iiMNL7,null,`class`,`col-3`);
let cmpq73d = this._lc('c9SPQjTOx', {parent:component,parentTop:layout,props:{category:category},state:'stnwYg2',insideLoop:true,index:"" +iiMNL7});
ec('div');
}
ec('div');
ec('div');
}ec('div');
let eltuTZv = eo('div',null,null,`class`,`tab-pane fade`,`id`,`affiliate-tab`,`role`,`tabpanel`,`aria-labelledby`,`affiliate-tab`);
let elEgoIu = eo('div',null,null,`id`,`affiliate`);
let eljM3G7 = eo('h1');
text(`Affiliate URL`);
ec('h1');
let elriWAP = eo('div',null,null,`class`,`m-t-1`);
let el8FogE = eo('a',null,null,`class`,`bold teal-text mx-2`,`target`,`_blank`,`href`,`${ component.affiliateUrl }`);
text(`Click on the
            following
            icon to copy your affiliate url.`);
ec('a');
let cnd5jil = ! component.copied;
this.setState('stSnVAb', cnd5jil);
if (cnd5jil) { 
let elejNTK = eo('button','wSNf',null, eventListeners, {onclick:[function(e) {var $el = this;copyToClipboard(component.affiliateUrl); component.copied = true;}]},`title`,`${trans(`Copy`)}`,`class`,`text-primary`,`type`,`button`);
text(`(`);
let el_hje7 = eo('i','ANWf',null,`class`,`${fas('object-ungroup')} icon`);
ec('i');
text(`)`);
ec('button');
}let cndYVNo = component.copied;
this.setState('stlsjEA', cndYVNo);
if (cndYVNo) { 
let elG_jbd = eo('strong','hoFf',null,`title`,`${trans(`Copied`)}`,`class`,`green-text ml-2`);
let elDF0tY = eo('i','Oyrf',null,`class`,`${fas('check')} icon`);
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
let cndbmuu = component.updateMessage;
this.setState('st0_9B5', cndbmuu);
if (cndbmuu) { 
let cmpy0CA = this._lc('cbgtgzqlm', {parent:component,props:{html:component.updateMessage},events:{onclose:function(e) {let $el = this; component.updateMessage = null}},content:(flkMessage) => {text(component.updateMessage);
},state:'st0_9B5'});
}
                    this.isReadyToGo();
                }
        });