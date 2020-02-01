_Component({
                selector: 'profile-page',
                c: 'ProfilePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['updateProfile','user','loadTracks','loadEinsteinCategories','updateMessage','requireNameChange','isUpdating','editMode','form','getUserImage','inEditMode','validateUserName','errors','homePages','isLoading','tracks','einsteinCategories','affiliateUrl','copied'],
                children: {c9y9urgsL:'flk-image-input',cVWm2EI4N:'gold-icon',c24hrAZhp:'flk-number-counter',cUvrRrB2n:'flk-number-counter',cVweaVKhl:'flk-number-counter',c3JugyGRb:'flk-number-counter',cVZmxa3GB:'flk-number-counter',cRCXAfpgT:'flk-number-counter',coMbmPFK1:'flk-number-counter',cozRdCY5O:'flk-number-counter',copb5fBrQ:'flk-number-counter',ciLmnXdB8:'flk-number-counter',cbhgINhkV:'flk-number-counter',cu6pALwYT:'flk-number-counter',c52Ir0Lj2:'flk-dropdown-list',cOMWJcPuW:'flk-dropdown-list',cM2FPmMRX:'flk-time-ago',cfjecNDoo:'flk-spinner',cW5_j1FSM:'track-card',cnP_spYyR:'flk-spinner',ciOe3TKzo:'einstein-category-card',cVU66RpY_:'layout',cxq1X6QMk:'flk-message'},
                render: function (component) {
                    let cmpBPL5 = this._lc('cVU66RpY_', {parent:component,content:(layout) => {let elGYXpl = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.updateProfile($el)}]});
component.form = elGYXpl;

                if (! elGYXpl.formHandler) {
                    window.cfrmdlr = elGYXpl.formHandler = new FormHandler(elGYXpl, component);
                } else {
                    window.cfrmdlr = elGYXpl.formHandler;
                }
            let elPc5oN = eo('div',null,null,`class`,`rows`);
let elUOl9E = eo('ul',null,null,`class`,`nav nav-tabs`);
let elW_n61 = eo('li',null,null,`class`,`nav-item`);
let el8txZa = eo('a',null,null,`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#overview-tab`);
let elqrRm9 = eo('i',null,null,`class`,`${fas('street-view') + ' mr-1 icon'}`);
ec('i');
text(`Overview`);
ec('a');
ec('li');
let elO66a4 = eo('li',null,null,`class`,`nav-item`);
let el41Zbd = eo('a',null,null,`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#account-info-tab`);
let elR5rws = eo('i',null,null,`class`,`${fas('user') + ' mr-1 icon'}`);
ec('i');
text(`Account info`);
ec('a');
ec('li');
let cndQ61s = component.user.total.tracks > 0;
this.setState('stp1FOu', cndQ61s);
if (cndQ61s) { 
let elFtD9Y = eo('li','7C8f',null,`class`,`nav-item`);
let el5KRn_ = eo('a','yqJf',null, eventListeners, {onclick:[function(e) {var $el = this;component.loadTracks()}]},`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#academy-tracks-tab`);
let elnROnD = eo('i','4Aff',null,`class`,`${fas('university') + ' mr-1 icon'}`);
ec('i');
text(`Academy tracks`);
let eln_tM0 = eo('span','VIZf',null,`class`,`badge total-answers badge-success`);
text(component.user.total.tracks);
ec('span');
ec('a');
ec('li');
}let cnd922m = Object.get(component.user.total, 'einstein.categories') > 0;
this.setState('stq8KGp', cnd922m);
if (cnd922m) { 
let elrLVWj = eo('li','Tm0f',null,`class`,`nav-item`);
let elMUyTg = eo('a','FDmf',null, eventListeners, {onclick:[function(e) {var $el = this;component.loadEinsteinCategories()}]},`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#einstein-categories-tab`);
let elF5fLA = ev('img','xdyf',null,`src`,`${assets('images/ein-sm.png')}`,`class`,`einstein-icon`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
text(`Einstein categories`);
let elZrnqm = eo('span','n2kf',null,`class`,`badge total-answers btn-purple`);
text(component.user.total.einstein.categories);
ec('span');
ec('a');
ec('li');
}let eliBX6n = eo('li',null,null,`class`,`nav-item`);
let elgQUdS = eo('a',null,null,`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#affiliate-tab`);
let elFN0dh = eo('i',null,null,`class`,`${fas('user-plus') + ' mr-1 icon'}`);
ec('i');
text(`Affiliate program`);
ec('a');
ec('li');
ec('ul');
let elOx15k = eo('div',null,null,`class`,`cols`);
let elf0DzL = eo('div',null,null,`class`,`tab-content`);
let ele3HPn = eo('div',null,null,`class`,`tab-pane fade`,`id`,`overview-tab`);
let elXjpj5 = eo('section',null,null,`id`,`profile-overview-tab`);
let cndrqTs = component.requireNameChange();
this.setState('st8mzoq', cndrqTs);
if (cndrqTs) { 
let el1nF1p = eo('div','_Cdf',null,`class`,`overlay`);
ec('div');
}let eljkozg = eo('div',null,null,`class`,`text-center m-b-2`);
let elQEE5O = eo('div',null,null,`class`,`relative`);
let cmp5OVd = this._lc('c9y9urgsL', {parent:component,parentTop:layout,props:{disabled:component.isUpdating,src:component.getUserImage()},events:{onmouseover:function(e) {let $el = this; component.editMode = 'image'},onmouseout:function(e) {let $el = this; component.editMode = null},onchange:function(e) {let $el = this; component.updateProfile(component.form);}},boolAttrs:{disabled:component.isUpdating},attrs:{src:`${component.getUserImage()}`,name:`${(`image`).toInputName()}`}});
let cndkfmC = component.user.username;
this.setState('ste9fOX', cndkfmC);
if (cndkfmC) { 
let elv8fwJ = eo('span','a1vf',null,`class`,`grey-text`);
text('@' + component.user.username);
ec('span');
}let cndnBoo = component.editMode == 'image';
this.setState('stDqgRk', cndnBoo);
if (cndnBoo) { 
let elNt7Ah = eo('span','81uf',null,`class`,`new-tooltip`);
text(`Click to edit`);
ec('span');
}ec('div');
let elRe4zB = eo('div',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'name'; component.editMode}],onmouseout:[function(e) {var $el = this;component.editMode = null}]},`class`,`m-t-2 relative name-change-wrapper`);
let cndfXrN = component.requireNameChange();
this.setState('stv44Xn', cndfXrN);
let cndQHnS = component.inEditMode == 'name' || component.requireNameChange();
this.setState('stMjX52', cndQHnS);
if (cndfXrN) { 
let elps7Th = eo('span','l8_f',null,`class`,`new-tooltip`);
text(`Add your last name`);
ec('span');
}let cndZOll = component.inEditMode != 'name' && ! component.requireNameChange();
this.setState('st5oKqo', cndZOll);
let cndnWTy = cndQHnS;
this.setState('stDfbx4', cndnWTy);
if (cndZOll) { 
let el6Hfey = eo('h1','YQ0f',null,`class`,`d-inline-block`);
text(component.user.name);
ec('h1');
}else if (cndnWTy) { 
let el3KQ7b = eo('div',null,null,`class`,`m-auto`,`id`,`name-change`);
let elmAE6k = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.firstName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGYXpl.formHandler.addError(`firstName`, 'required', trans('validation.required'));}return elGYXpl.formHandler.removeError(`firstName`);}]},`value`,`${fval(component.user.firstName)}`,`name`,`${(`firstName`).toInputName()}`,`placeholder`,`${trans(`First name`)}`,`type`,`text`,`class`,`form-control d-inline-block`,`id`,`firstName`);
elmAE6k.value = fval(component.user.firstName);
let cnd6DW6 = elGYXpl.formHandler.getError(`firstName`);
this.setState('stGeVn1', cnd6DW6);
if (cnd6DW6) { 
let elPkdG5 = eo('div','V0Df',null,`class`,`alert alert-danger`);
text(elGYXpl.formHandler.getError(`firstName`));
ec('div');
}let eleH7Ml = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.lastName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGYXpl.formHandler.addError(`lastName`, 'required', trans('validation.required'));}return elGYXpl.formHandler.removeError(`lastName`);}]},`value`,`${fval(component.user.lastName)}`,`name`,`${(`lastName`).toInputName()}`,`placeholder`,`${trans(`Last name`)}`,`type`,`text`,`class`,`form-control d-inline-block`,`id`,`lastName`);
eleH7Ml.value = fval(component.user.lastName);
let cndO0sH = elGYXpl.formHandler.getError(`lastName`);
this.setState('stAmWHY', cndO0sH);
if (cndO0sH) { 
let elnMXCR = eo('div','fy9f',null,`class`,`alert alert-danger`);
text(elGYXpl.formHandler.getError(`lastName`));
ec('div');
}let elRecME = ev('input',null,null,`name`,`${(`name`).toInputName()}`,`type`,`hidden`,`value`,`${ (component.user.firstName + ' ' + component.user.lastName) || component.user.name }`);
ec('div');
let elRvuBu = eo('div',null,null,`class`,`m-y-1`);
let elbAVsa = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn blue bold save-btn`);
text(`Save changes`);
ec('button');
let el3wxfn = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn white black-text bold`);
text(`Close`);
ec('button');
ec('div');
}let cnd9szx = component.editMode == 'name' && ! component.inEditMode && ! component.requireNameChange();
this.setState('stGGf65', cnd9szx);
if (cnd9szx) { 
let elvJAqo = eo('button','BQhf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'name'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elApFUA = eo('i','Lz_f',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('div');
let cmpWmoh = this._lc('cVWm2EI4N', {parent:component,parentTop:layout,props:{coins:component.user.gold}});
ec('div');
let elZy8bP = eo('div',null,null,`id`,`totals`,`class`,`text-center`);
let el75PsF = eo('section',null,null,`class`,`profile-box pb-5 mb-5`);
let elxeYmp = eo('header',null,null,`class`,`col-12 profile-box-header m-b-5`);
let elFX7P_ = eo('h1',null,null,`class`,`pl-5 my-0`);
text(`General Overview`);
ec('h1');
let elFINDp = eo('span',null,null,`class`,`profile-box-header-line`);
ec('span');
ec('header');
let elSz8Ow = eo('div',null,null,`class`,`row m-t-5 mx-0`);
let elNahCv = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpSPBs = this._lc('c24hrAZhp', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'tracks', '')},attrs:{class:'total-summary bold teal-border'}});
let eltYLCi = eo('div',null,null,`class`,`btn btn-sm btn-teal bold`);
text(`Academy tracks`);
ec('div');
ec('div');
let elUiVSC = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmp8NZ8 = this._lc('cUvrRrB2n', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.all', '')},attrs:{class:'total-summary bold navy-border'}});
let elpWt7T = eo('div',null,null,`class`,`btn btn-sm btn-navy bold`);
text(`Academy answers`);
ec('div');
ec('div');
let elkdatP = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpCZg5 = this._lc('cVweaVKhl', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.all', '')},attrs:{class:'total-summary bold purple-border'}});
let el3BcN8 = eo('div',null,null,`class`,`btn btn-sm btn-purple bold`);
text(`Einstein puzzles`);
ec('div');
ec('div');
let el_nOYA = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpxysb = this._lc('c3JugyGRb', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'invitations', '') || 0},attrs:{class:'total-summary bold lime-border'}});
let elBe7Uh = eo('div',null,null,`class`,`btn btn-sm btn-lime bold`);
text(`Invitations`);
ec('div');
ec('div');
ec('div');
ec('section');
let elht9Dx = eo('section',null,null,`class`,`profile-box py-5 my-5`);
let el5nGsp = eo('header',null,null,`class`,`col-12 m-b-5 profile-box-header`);
let elDigjC = eo('h1',null,null,`class`,`pl-5 my-0`);
text(`Academy`);
ec('h1');
let elEGt2j = eo('span',null,null,`class`,`profile-box-header-line`);
ec('span');
ec('header');
let elX1XTF = eo('div',null,null,`class`,`row m-t-5`);
let elHxAIJ = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmp0xUw = this._lc('cVZmxa3GB', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'tracks', '')},attrs:{class:'total-summary bold light-gray-border'}});
let elk316Z = eo('div',null,null,`class`,`btn btn-sm btn-light-gray bold`);
text(`Unlocked tracks`);
ec('div');
ec('div');
let eliT8O1 = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpNZeB = this._lc('cRCXAfpgT', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.approved', '')},attrs:{class:'total-summary bold success-border'}});
let elDDKgJ = eo('div',null,null,`class`,`btn btn-sm btn-success bold`);
text(`Approved answers`);
ec('div');
ec('div');
let ellUxZF = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmp2qub = this._lc('coMbmPFK1', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.pending', '')},attrs:{class:'total-summary bold warning-border'}});
let elH1nqK = eo('div',null,null,`class`,`btn btn-sm btn-warning bold`);
text(`Pending answers`);
ec('div');
ec('div');
let elUoQ5B = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpaDRB = this._lc('cozRdCY5O', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.rejected', '')},attrs:{class:'total-summary bold danger-border'}});
let el2vJO8 = eo('div',null,null,`class`,`btn btn-sm btn-danger bold`);
text(`Rejected answers`);
ec('div');
ec('div');
ec('div');
ec('section');
let el4G2CQ = eo('section',null,null,`class`,`profile-box py-5 my-5`);
let elvertU = eo('header',null,null,`class`,`col-12 m-b-5 profile-box-header`);
let eltuiPh = eo('h1',null,null,`class`,`pl-5 my-0`);
text(`Einstein Chamber`);
ec('h1');
let elGl8fD = eo('span',null,null,`class`,`profile-box-header-line`);
ec('span');
ec('header');
let elRewto = eo('div',null,null,`class`,`row m-t-5`);
let elza4bj = eo('div',null,null,`class`,`col-sm-3`);
let cmpBblZ = this._lc('copb5fBrQ', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.categories', 0)},attrs:{class:'total-summary bold pencil-border'}});
let elBEwJ6 = eo('div',null,null,`class`,`btn btn-sm btn-pencil bold`);
text(`Unlocked categories`);
ec('div');
ec('div');
let eldJjW0 = eo('div',null,null,`class`,`col-sm-3`);
let cmpt29I = this._lc('ciLmnXdB8', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.approved', 0)},attrs:{class:'total-summary bold emerald-border'}});
let el8P8lR = eo('div',null,null,`class`,`btn btn-sm btn-emerald bold`);
text(`Approved`);
ec('div');
ec('div');
let elUl73k = eo('div',null,null,`class`,`col-sm-3`);
let cmp0cWh = this._lc('cbhgINhkV', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.pending', 0)},attrs:{class:'total-summary bold dark-warning-border'}});
let elYn0cn = eo('div',null,null,`class`,`btn btn-sm btn-dark-warning bold`);
text(`Pending`);
ec('div');
ec('div');
let elGOydC = eo('div',null,null,`class`,`col-sm-3`);
let cmp07g9 = this._lc('cu6pALwYT', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.rejected', 0)},attrs:{class:'total-summary bold dark-danger-border'}});
let elK9Yza = eo('div',null,null,`class`,`btn btn-sm btn-dark-danger bold`);
text(`Rejected`);
ec('div');
ec('div');
ec('div');
ec('section');
ec('div');
ec('section');
ec('div');
let elr7Umv = eo('div',null,null,`class`,`tab-pane fade`,`id`,`account-info-tab`,`role`,`tabpanel`,`aria-labelledby`,`account-info-tab`);
let elY4yBt = eo('section',null,null,`id`,`profile-settings-tab`);
let el1Suv8 = eo('table',null,null,`class`,`table table-bordered`);
let eljvfgr = eo('tbody');
let eladABE = eo('tr');
let elivjzp = eo('th');
text(`Account id`);
ec('th');
let elXLrnC = eo('td');
text(component.user.id);
ec('td');
ec('tr');
let elzEO67 = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'email'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elE16sR = eo('th');
text(`Email address`);
ec('th');
let el3wSh0 = eo('td');
let cndy7UU = component.inEditMode != 'email';
this.setState('stfN6ir', cndy7UU);
let cnd9xXW = !(cndy7UU);
this.setState('st2521T', cnd9xXW);
if (cndy7UU) { 
let elBz3u3 = eo('span','jacf');
text(component.user.email);
ec('span');
}else { 
let elOsk9s = eo('div',null,null,`class`,`row`);
let elQajNr = eo('div',null,null,`class`,`col-9`);
let elMreQL = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGYXpl.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elGYXpl.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elGYXpl.formHandler.removeError(`email`);}]},`value`,`${fval(component.user.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Email address`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
elMreQL.value = fval(component.user.email);
let cndmJD9 = elGYXpl.formHandler.getError(`email`);
this.setState('st_6YcG', cndmJD9);
if (cndmJD9) { 
let elnD0dJ = eo('div','WJOf',null,`class`,`alert alert-danger`);
text(elGYXpl.formHandler.getError(`email`));
ec('div');
}ec('div');
let elhvr1s = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let elaZxKw = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elJNXMT = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cndIS5_ = component.editMode == 'email' && ! component.inEditMode;
this.setState('stnS4Gk', cndIS5_);
if (cndIS5_) { 
let elDM9cx = eo('button','07lf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'email'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elxaxSF = eo('i','4zef',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let eldozN5 = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'username'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elxqIsd = eo('th');
text(`Username`);
ec('th');
let el9K3U7 = eo('td');
let cndc5F8 = component.inEditMode != 'username';
this.setState('stwoNVn', cndc5F8);
let cndm7_l = !(cndc5F8);
this.setState('stDOOQ4', cndm7_l);
if (cndc5F8) { 
let elO6NCg = eo('span','RKIf');
text(component.user.username || 'N/a');
ec('span');
}else { 
let elIkbfh = eo('div',null,null,`class`,`row`);
let el4AMGW = eo('div',null,null,`class`,`col-9`);
text(`@`);
let elKaPJ6 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.username = this.value;},function(e) {var $el = this;component.validateUserName($el.value)}]},`value`,`${fval(component.user.username)}`,`name`,`${(`username`).toInputName()}`,`placeholder`,`${trans(`username`)}`,`type`,`text`,`class`,`username-input`,`id`,`username`);
elKaPJ6.autocomplete = elKaPJ6.name == 'password' && Is.browser('chrome') ? 'new-password' : 'off';
elKaPJ6.value = fval(component.user.username);
let cndTU4h = component.errors.username;
this.setState('stg5tk7', cndTU4h);
if (cndTU4h) { 
let el2rXlD = eo('span','KoEf',null,`class`,`red-text bold`);
text(component.errors.username);
ec('span');
}ec('div');
let elRSpn4 = eo('div',null,null,`class`,`col-3 p-0`);
let el5wOnc = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let el9H2S1 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
let el3JZWg = eo('div',null,null,`class`,`row m-0`);
let elI85Jt = eo('div',null,null,`class`,`col`);
let elt5WSo = eo('div',null,null,`class`,`bold`);
text(`Username creation criteria`);
ec('div');
let elp0p_9 = eo('small');
text(`Must starts with English letter (lowercase).`);
let el07TTv = ev('br');
text(`Can contain only English letters, Numbers, dot or underscore.`);
let elsbgi7 = ev('br');
text(`No more than one dot or underscore can be written after each other.`);
let elBw7Fu = ev('br');
text(`No whitespaces allowed.`);
let el4Lsq9 = ev('br');
ec('small');
ec('div');
ec('div');
ec('div');
}let cnd96LI = component.editMode == 'username' && ! component.inEditMode;
this.setState('stsorx4', cnd96LI);
if (cnd96LI) { 
let elmgdJF = eo('button','Z7Tf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'username'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elObwdA = eo('i','Qldf',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let el3BJrO = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'gender'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elS3Og9 = eo('th');
text(`Gender`);
ec('th');
let el9aWYu = eo('td');
let cndSsVe = component.inEditMode != 'gender';
this.setState('stTdwAI', cndSsVe);
let cndO3L7 = !(cndSsVe);
this.setState('stss_yb', cndO3L7);
if (cndSsVe) { 
let el0bAof = eo('span','MgUf',null,`class`,`text-capitalize`);
text(component.user.gender || 'N/a');
ec('span');
}else { 
let elfLNwe = eo('div',null,null,`class`,`row`);
let elsjBBM = eo('div',null,null,`class`,`col-9`);
let cmpu3xh = this._lc('c52Ir0Lj2', {parent:component,parentTop:layout,props:{value:component.user.gender,items:['male', 'female'],required:true},attrs:{name:`${(`gender`).toInputName()}`},state:'stss_yb'});
let cndX3FH = component.errors.gender;
this.setState('stYStkS', cndX3FH);
if (cndX3FH) { 
let elyEHZc = eo('span','o8vf',null,`class`,`red-text bold`);
text(component.errors.gender);
ec('span');
}ec('div');
let elWO_Um = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let elNqpUl = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elqg7y9 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cndqC1Y = component.editMode == 'gender' && ! component.inEditMode;
this.setState('stjGfId', cndqC1Y);
if (cndqC1Y) { 
let elpOvs4 = eo('button','K7Qf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'gender'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let eliSOcI = eo('i','ZU9f',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let eluMvVv = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'homePage'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elBOdEn = eo('th');
text(`Home Page`);
ec('th');
let eluaZss = eo('td');
let cnd1UEI = component.inEditMode != 'homePage';
this.setState('stJf_6_', cnd1UEI);
let cndyBsb = !(cnd1UEI);
this.setState('stfJkYu', cndyBsb);
if (cnd1UEI) { 
let elns0OJ = eo('span','xPBf',null,`class`,`text-capitalize`);
text(component.user.homePage ? component.homePages[component.user.homePage] : 'N/a');
ec('span');
}else { 
let eli0cXs = eo('div',null,null,`class`,`row`);
let elewT57 = eo('div',null,null,`class`,`col-9`);
let cmpPQKx = this._lc('cOMWJcPuW', {parent:component,parentTop:layout,props:{value:component.user.homePage,items:component.homePages,required:true},attrs:{name:`${(`homePage`).toInputName()}`},state:'stfJkYu'});
let cndjAyJ = component.errors.homePage;
this.setState('stxYAR9', cndjAyJ);
if (cndjAyJ) { 
let eluc6z8 = eo('span','F15f',null,`class`,`red-text bold`);
text(component.errors.homePage);
ec('span');
}ec('div');
let elocbnE = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let elptl9e = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elwhP8T = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cndgoNB = component.editMode == 'homePage' && ! component.inEditMode;
this.setState('stpk0Da', cndgoNB);
if (cndgoNB) { 
let elGOkCa = eo('button','YgVf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'homePage'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elwiG8f = eo('i','SS0f',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let elpwnAm = eo('tr');
let elv8vcw = eo('th');
text(`Joined`);
ec('th');
let elKnCIW = eo('td');
let cmpsOQj = this._lc('cM2FPmMRX', {parent:component,parentTop:layout,props:{timestamp:component.user.createdAt.timestamp}});
ec('td');
ec('tr');
let elbU5dK = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'mobile'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elZX6Ob = eo('th');
text(`Mobile number`);
ec('th');
let elhpQEX = eo('td');
let cndZTnw = component.inEditMode != 'mobile';
this.setState('styZ9BP', cndZTnw);
let cnd1DlQ = !(cndZTnw);
this.setState('stBuaiD', cnd1DlQ);
if (cndZTnw) { 
let elVCplL = eo('span','wN7f');
text(component.user.mobile || 'N/a');
ec('span');
}else { 
let elM3kOm = eo('div',null,null,`class`,`row`);
let elM0nb8 = eo('div',null,null,`class`,`col-9`);
let eloJVdx = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.mobile = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGYXpl.formHandler.addError(`mobile`, 'required', trans('validation.required'));}return elGYXpl.formHandler.removeError(`mobile`);}]},`value`,`${fval(component.user.mobile)}`,`name`,`${(`mobile`).toInputName()}`,`placeholder`,`${trans(`Mobile number`)}`,`type`,`text`,`class`,`form-control`,`id`,`mobile`);
eloJVdx.value = fval(component.user.mobile);
let cnd9kGB = elGYXpl.formHandler.getError(`mobile`);
this.setState('stOZUTT', cnd9kGB);
if (cnd9kGB) { 
let elizjhX = eo('div','bAYf',null,`class`,`alert alert-danger`);
text(elGYXpl.formHandler.getError(`mobile`));
ec('div');
}ec('div');
let elkqm5l = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let el3En5p = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elDEU5k = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cndzHN3 = component.editMode == 'mobile' && ! component.inEditMode;
this.setState('stPSvsm', cndzHN3);
if (cndzHN3) { 
let elOtHoV = eo('button','IqOf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'mobile'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elRoEc6 = eo('i','p3cf',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
ec('tbody');
ec('table');
ec('section');
ec('div');
let elMzONe = eo('div',null,null,`class`,`tab-pane fade`,`id`,`academy-tracks-tab`,`role`,`tabpanel`,`aria-labelledby`,`academy-tracks-tab`);
let cndJzlr = component.isLoading;
this.setState('stBoioS', cndJzlr);
let cndBomD = !(cndJzlr);
this.setState('stdKGqr', cndBomD);
if (cndJzlr) { 
let cmpnXOb = this._lc('cfjecNDoo', {parent:component,parentTop:layout,state:'stBoioS'});
}else { 
let elza2mx = eo('div');
let elsbCJy = eo('h1',null,null,`class`,`text-center m-y-1`);
text(`Your subscribed academy tracks`);
ec('h1');
let elQ0S86 = eo('div',null,null,`class`,`row`);
for (let i in component.tracks) {
let track = component.tracks[i]; 
 let iiNjDH = 'SqQPReC' + i;
let cmp2MxM = this._lc('cW5_j1FSM', {parent:component,parentTop:layout,props:{track:track},attrs:{class:'col-lg-3 col-md-6'},state:'stdKGqr',insideLoop:true,index:"" +iiNjDH});
}
ec('div');
ec('div');
}ec('div');
let elYlfNa = eo('div',null,null,`class`,`tab-pane fade`,`id`,`einstein-categories-tab`,`role`,`tabpanel`,`aria-labelledby`,`einstein-categories-tab`);
let cndSE2I = component.isLoading;
this.setState('st1V4zo', cndSE2I);
let cnd1TP1 = !(cndSE2I);
this.setState('stbNXSZ', cnd1TP1);
if (cndSE2I) { 
let cmpKyr1 = this._lc('cnP_spYyR', {parent:component,parentTop:layout,state:'st1V4zo'});
}else { 
let el4hUnH = eo('div');
let elBPGsK = eo('h1',null,null,`class`,`text-center m-y-1`);
text(`Einstein Chamber categories`);
ec('h1');
let elIjmCV = eo('div',null,null,`class`,`row`);
for (let i in component.einsteinCategories) {
let category = component.einsteinCategories[i]; 
 let iiQjH8 = 'BsIPRFQ' + i;
let elLjE1d = eo('div','lKwtETmpzycA' + i+iiQjH8,null,`class`,`col-3`);
let cmpVXoX = this._lc('ciOe3TKzo', {parent:component,parentTop:layout,props:{category:category},state:'stbNXSZ',insideLoop:true,index:"" +iiQjH8});
ec('div');
}
ec('div');
ec('div');
}ec('div');
let el7WZdN = eo('div',null,null,`class`,`tab-pane fade`,`id`,`affiliate-tab`,`role`,`tabpanel`,`aria-labelledby`,`affiliate-tab`);
let eldlZNk = eo('div',null,null,`id`,`affiliate`);
let el1zQz1 = eo('h1');
text(`Affiliate URL`);
ec('h1');
let elGc3Ys = eo('div',null,null,`class`,`m-t-1`);
let elArSL8 = eo('a',null,null,`class`,`bold teal-text mx-2`,`target`,`_blank`,`href`,`${ component.affiliateUrl }`);
text(`Click on the
            following
            icon to copy your affiliate url.`);
ec('a');
let cndnEOY = ! component.copied;
this.setState('stcZmOO', cndnEOY);
if (cndnEOY) { 
let el0vjnf = eo('button','emIf',null, eventListeners, {onclick:[function(e) {var $el = this;copyToClipboard(component.affiliateUrl); component.copied = true;}]},`title`,`${trans(`Copy`)}`,`class`,`text-primary`,`type`,`button`);
text(`(`);
let eldYQiE = eo('i','DsNf',null,`class`,`${fas('object-ungroup') + ' icon'}`);
ec('i');
text(`)`);
ec('button');
}let cndfCs2 = component.copied;
this.setState('stVlAYB', cndfCs2);
if (cndfCs2) { 
let el0EetV = eo('strong','BtXf',null,`title`,`${trans(`Copied`)}`,`class`,`green-text ml-2`);
let elvYBWi = eo('i','gU9f',null,`class`,`${fas('check') + ' icon'}`);
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
let cndMBD7 = component.updateMessage;
this.setState('stLoZih', cndMBD7);
if (cndMBD7) { 
let cmpy3Wo = this._lc('cxq1X6QMk', {parent:component,props:{html:component.updateMessage},events:{onclose:function(e) {let $el = this; component.updateMessage = null}},content:(flkMessage) => {text(component.updateMessage);
},state:'stLoZih'});
}
                    this.isReadyToGo();
                }
        });