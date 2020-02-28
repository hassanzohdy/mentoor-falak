_Component({
                selector: 'profile-page',
                c: 'ProfilePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['updateProfile','user','loadTracks','loadEinsteinCategories','updateMessage','requireNameChange','isUpdating','editMode','form','getUserImage','inEditMode','validateUserName','errors','homePages','isLoading','tracks','einsteinCategories','affiliateUrl','copied'],
                children: {cFFkrO9Sw:'flk-image-input',caZ80j_zd:'gold-icon',cp149wtqJ:'flk-number-counter',cQIKwD1Gu:'flk-number-counter',cWo5fwaPg:'flk-number-counter',cjPk5pOgh:'flk-number-counter',cma8FzX3O:'flk-number-counter',cmYC7VdAJ:'flk-number-counter',cRr3VMeY7:'flk-number-counter',cPyenWK4h:'flk-number-counter',cY_X18vsK:'flk-number-counter',cGCmNJMWy:'flk-number-counter',coVoy9m5S:'flk-number-counter',chP3hQaGx:'flk-number-counter',cfI0D7_Mb:'flk-dropdown-list',cE2BWVGE0:'flk-dropdown-list',ckd3kFBqE:'flk-time-ago',caXQfjSX_:'flk-spinner',cKT67e_xe:'track-card',ccQ7MEzb7:'flk-spinner',cT6FC_AlN:'einstein-category-card',cBQ_cRpGP:'layout',cshJwQ4WS:'flk-message'},
                render: function (component) {
                    let cmp_XTv = this._lc('cBQ_cRpGP', {parent:component,content:(layout) => {let elonXVu = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.updateProfile($el)}]});
component.form = elonXVu;

                if (! elonXVu.formHandler) {
                    window.cfrmdlr = elonXVu.formHandler = new FormHandler(elonXVu, component);
                } else {
                    window.cfrmdlr = elonXVu.formHandler;
                }
            let elJtBqY = eo('div',null,null,`class`,`rows`);
let elfPv0C = eo('ul',null,null,`class`,`nav nav-tabs`);
let el4QIrO = eo('li',null,null,`class`,`nav-item`);
let elbdWzj = eo('a',null,null,`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#overview-tab`);
let elI8hzq = eo('i',null,null,`class`,`${fas('street-view')} mr-1 icon`);
ec('i');
text(`Overview`);
ec('a');
ec('li');
let elSDg2W = eo('li',null,null,`class`,`nav-item`);
let elbvOhp = eo('a',null,null,`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#account-info-tab`);
let elCECyU = eo('i',null,null,`class`,`${fas('user')} mr-1 icon`);
ec('i');
text(`Account info`);
ec('a');
ec('li');
let cndxUbs = component.user.total.tracks > 0;
this.setState('st2zJs6', cndxUbs);
if (cndxUbs) { 
let elN9nog = eo('li','zBnf',null,`class`,`nav-item`);
let elfZfPA = eo('a','zUwf',null, eventListeners, {onclick:[function(e) {var $el = this;component.loadTracks()}]},`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#academy-tracks-tab`);
let elPlTuw = eo('i','qZSf',null,`class`,`${fas('university')} mr-1 icon`);
ec('i');
text(`Academy tracks`);
let el1F68e = eo('span','YtIf',null,`class`,`badge total-answers badge-success`);
text(component.user.total.tracks);
ec('span');
ec('a');
ec('li');
}let cndMuqc = Object.get(component.user.total, 'einstein.categories') > 0;
this.setState('strqark', cndMuqc);
if (cndMuqc) { 
let elwHXPr = eo('li','lCVf',null,`class`,`nav-item`);
let el0cCqv = eo('a','qoTf',null, eventListeners, {onclick:[function(e) {var $el = this;component.loadEinsteinCategories()}]},`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#einstein-categories-tab`);
let elYGmBC = ev('img','YLPf',null,`src`,`${assets('images/ein-sm.png')}`,`class`,`einstein-icon`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
text(`Einstein categories`);
let elNw8sm = eo('span','Fijf',null,`class`,`badge total-answers btn-purple`);
text(component.user.total.einstein.categories);
ec('span');
ec('a');
ec('li');
}let elEsHwd = eo('li',null,null,`class`,`nav-item`);
let elo9Q8I = eo('a',null,null,`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#affiliate-tab`);
let elN8xqE = eo('i',null,null,`class`,`${fas('user-plus')} mr-1 icon`);
ec('i');
text(`Affiliate program`);
ec('a');
ec('li');
ec('ul');
let elxKzqz = eo('div',null,null,`class`,`cols`);
let elizruW = eo('div',null,null,`class`,`tab-content`);
let elDdIbk = eo('div',null,null,`class`,`tab-pane fade`,`id`,`overview-tab`);
let elJEeS1 = eo('section',null,null,`id`,`profile-overview-tab`);
let cndrnYI = component.requireNameChange();
this.setState('stMR5E7', cndrnYI);
if (cndrnYI) { 
let elyGJTU = eo('div','qALf',null,`class`,`overlay`);
ec('div');
}let elll4Ub = eo('div',null,null,`class`,`text-center m-b-2`);
let el_sial = eo('div',null,null,`class`,`relative`);
let cmpvNcd = this._lc('cFFkrO9Sw', {parent:component,parentTop:layout,props:{disabled:component.isUpdating,src:component.getUserImage()},events:{onmouseover:function(e) {let $el = this; component.editMode = 'image'},onmouseout:function(e) {let $el = this; component.editMode = null},onchange:function(e) {let $el = this; component.updateProfile(component.form);}},boolAttrs:{disabled:component.isUpdating},attrs:{src:`${component.getUserImage()}`,name:`${(`image`).toInputName()}`}});
let cndS2G0 = component.user.username;
this.setState('stGbEzh', cndS2G0);
if (cndS2G0) { 
let elP60bu = eo('span','2dmf',null,`class`,`grey-text`);
text('@' + component.user.username);
ec('span');
}let cndI_wj = component.editMode == 'image';
this.setState('st6Gbn8', cndI_wj);
if (cndI_wj) { 
let el0Lyfb = eo('span','6aff',null,`class`,`new-tooltip`);
text(`Click to edit`);
ec('span');
}ec('div');
let elpKCla = eo('div',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'name'; component.editMode}],onmouseout:[function(e) {var $el = this;component.editMode = null}]},`class`,`m-t-2 relative name-change-wrapper`);
let cnd5a9P = component.requireNameChange();
this.setState('st6ZxA_', cnd5a9P);
let cndsn0V = component.inEditMode == 'name' || component.requireNameChange();
this.setState('strFOqi', cndsn0V);
if (cnd5a9P) { 
let el4xo4J = eo('span','JSHf',null,`class`,`new-tooltip`);
text(`Add your last name`);
ec('span');
}let cndQFoq = component.inEditMode != 'name' && ! component.requireNameChange();
this.setState('stdCEo3', cndQFoq);
let cndThNe = cndsn0V;
this.setState('st6a9sJ', cndThNe);
if (cndQFoq) { 
let el3j4sp = eo('h1','ToUf',null,`class`,`d-inline-block`);
text(component.user.name);
ec('h1');
}else if (cndThNe) { 
let elL_NJL = eo('div',null,null,`class`,`m-auto`,`id`,`name-change`);
let elNsvMM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.firstName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elonXVu.formHandler.addError(`firstName`, 'required', trans('validation.required'));}return elonXVu.formHandler.removeError(`firstName`);}]},`value`,`${fval(component.user.firstName)}`,`name`,`${(`firstName`).toInputName()}`,`placeholder`,`${trans(`First name`)}`,`type`,`text`,`class`,`form-control d-inline-block`,`id`,`firstName`);
elNsvMM.value = fval(component.user.firstName);
let cndb_Aq = elonXVu.formHandler.getError(`firstName`);
this.setState('stignTf', cndb_Aq);
if (cndb_Aq) { 
let elF4w2P = eo('div','qWsf',null,`class`,`alert alert-danger`);
text(elonXVu.formHandler.getError(`firstName`));
ec('div');
}let elzKx1v = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.lastName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elonXVu.formHandler.addError(`lastName`, 'required', trans('validation.required'));}return elonXVu.formHandler.removeError(`lastName`);}]},`value`,`${fval(component.user.lastName)}`,`name`,`${(`lastName`).toInputName()}`,`placeholder`,`${trans(`Last name`)}`,`type`,`text`,`class`,`form-control d-inline-block`,`id`,`lastName`);
elzKx1v.value = fval(component.user.lastName);
let cndV_sO = elonXVu.formHandler.getError(`lastName`);
this.setState('stZrwGT', cndV_sO);
if (cndV_sO) { 
let elhjUvg = eo('div','XTTf',null,`class`,`alert alert-danger`);
text(elonXVu.formHandler.getError(`lastName`));
ec('div');
}let elWrZtG = ev('input',null,null,`name`,`${(`name`).toInputName()}`,`type`,`hidden`,`value`,`${ (component.user.firstName + ' ' + component.user.lastName) || component.user.name }`);
ec('div');
let elfGFyN = eo('div',null,null,`class`,`m-y-1`);
let elUc7bq = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn blue bold save-btn`);
text(`Save changes`);
ec('button');
let elst7Cf = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn white black-text bold`);
text(`Close`);
ec('button');
ec('div');
}let cnd6UD6 = component.editMode == 'name' && ! component.inEditMode && ! component.requireNameChange();
this.setState('stWbKJh', cnd6UD6);
if (cnd6UD6) { 
let el9I9nQ = eo('button','n8of',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'name'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let el400kR = eo('i','JH1f',null,`class`,`${fas('pen')} icon`);
ec('i');
text(`Edit`);
ec('button');
}ec('div');
let cmpAjL5 = this._lc('caZ80j_zd', {parent:component,parentTop:layout,props:{coins:component.user.gold}});
ec('div');
let elXlh5a = eo('div',null,null,`id`,`totals`,`class`,`text-center`);
let el4HgSV = eo('section',null,null,`class`,`profile-box pb-5 mb-5`);
let elxK0T2 = eo('header',null,null,`class`,`col-12 profile-box-header m-b-5`);
let elGRbXa = eo('h1',null,null,`class`,`pl-5 my-0`);
text(`General Overview`);
ec('h1');
let elMRcwJ = eo('span',null,null,`class`,`profile-box-header-line`);
ec('span');
ec('header');
let elb6KlI = eo('div',null,null,`class`,`row m-t-5 mx-0`);
let elf6ww0 = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpEcCE = this._lc('cp149wtqJ', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'tracks', '')},attrs:{class:'total-summary bold teal-border'}});
let elyYSQ3 = eo('div',null,null,`class`,`btn btn-sm btn-teal bold`);
text(`Academy tracks`);
ec('div');
ec('div');
let eleLykW = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpmCHF = this._lc('cQIKwD1Gu', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.all', '')},attrs:{class:'total-summary bold navy-border'}});
let el_5FyQ = eo('div',null,null,`class`,`btn btn-sm btn-navy bold`);
text(`Academy answers`);
ec('div');
ec('div');
let elSSaoS = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpN8fp = this._lc('cWo5fwaPg', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.all', '')},attrs:{class:'total-summary bold purple-border'}});
let elk4eB6 = eo('div',null,null,`class`,`btn btn-sm btn-purple bold`);
text(`Einstein puzzles`);
ec('div');
ec('div');
let elTncxf = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmp1HS8 = this._lc('cjPk5pOgh', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'invitations', '') || 0},attrs:{class:'total-summary bold lime-border'}});
let elhLL1S = eo('div',null,null,`class`,`btn btn-sm btn-lime bold`);
text(`Invitations`);
ec('div');
ec('div');
ec('div');
ec('section');
let elfkiau = eo('section',null,null,`class`,`profile-box py-5 my-5`);
let elIuB5p = eo('header',null,null,`class`,`col-12 m-b-5 profile-box-header`);
let elgWgTt = eo('h1',null,null,`class`,`pl-5 my-0`);
text(`Academy`);
ec('h1');
let elHvmzo = eo('span',null,null,`class`,`profile-box-header-line`);
ec('span');
ec('header');
let elhwWly = eo('div',null,null,`class`,`row m-t-5`);
let elhVLah = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpVhTS = this._lc('cma8FzX3O', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'tracks', '')},attrs:{class:'total-summary bold light-gray-border'}});
let elsxi8Y = eo('div',null,null,`class`,`btn btn-sm btn-light-gray bold`);
text(`Unlocked tracks`);
ec('div');
ec('div');
let elYgtDI = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmplkdK = this._lc('cmYC7VdAJ', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.approved', '')},attrs:{class:'total-summary bold success-border'}});
let elDMwzu = eo('div',null,null,`class`,`btn btn-sm btn-success bold`);
text(`Approved answers`);
ec('div');
ec('div');
let elXLO4t = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpONv0 = this._lc('cRr3VMeY7', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.pending', '')},attrs:{class:'total-summary bold warning-border'}});
let elHqOOy = eo('div',null,null,`class`,`btn btn-sm btn-warning bold`);
text(`Pending answers`);
ec('div');
ec('div');
let elpVWQY = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpyi42 = this._lc('cPyenWK4h', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.rejected', '')},attrs:{class:'total-summary bold danger-border'}});
let elcdvWR = eo('div',null,null,`class`,`btn btn-sm btn-danger bold`);
text(`Rejected answers`);
ec('div');
ec('div');
ec('div');
ec('section');
let el4QrsL = eo('section',null,null,`class`,`profile-box py-5 my-5`);
let elKe8yW = eo('header',null,null,`class`,`col-12 m-b-5 profile-box-header`);
let el94SJv = eo('h1',null,null,`class`,`pl-5 my-0`);
text(`Einstein Chamber`);
ec('h1');
let elDaR6o = eo('span',null,null,`class`,`profile-box-header-line`);
ec('span');
ec('header');
let elaLVxu = eo('div',null,null,`class`,`row m-t-5`);
let elnoD3O = eo('div',null,null,`class`,`col-sm-3`);
let cmpSAvr = this._lc('cY_X18vsK', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.categories', 0)},attrs:{class:'total-summary bold pencil-border'}});
let elO3Nyj = eo('div',null,null,`class`,`btn btn-sm btn-pencil bold`);
text(`Unlocked categories`);
ec('div');
ec('div');
let elxZadF = eo('div',null,null,`class`,`col-sm-3`);
let cmpieS2 = this._lc('cGCmNJMWy', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.approved', 0)},attrs:{class:'total-summary bold emerald-border'}});
let elu_3Xi = eo('div',null,null,`class`,`btn btn-sm btn-emerald bold`);
text(`Approved`);
ec('div');
ec('div');
let elUO3m5 = eo('div',null,null,`class`,`col-sm-3`);
let cmpDEPV = this._lc('coVoy9m5S', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.pending', 0)},attrs:{class:'total-summary bold dark-warning-border'}});
let elo5yEr = eo('div',null,null,`class`,`btn btn-sm btn-dark-warning bold`);
text(`Pending`);
ec('div');
ec('div');
let elmk1u6 = eo('div',null,null,`class`,`col-sm-3`);
let cmp4DHZ = this._lc('chP3hQaGx', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.rejected', 0)},attrs:{class:'total-summary bold dark-danger-border'}});
let elRxfi3 = eo('div',null,null,`class`,`btn btn-sm btn-dark-danger bold`);
text(`Rejected`);
ec('div');
ec('div');
ec('div');
ec('section');
ec('div');
ec('section');
ec('div');
let elfObtv = eo('div',null,null,`class`,`tab-pane fade`,`id`,`account-info-tab`,`role`,`tabpanel`,`aria-labelledby`,`account-info-tab`);
let elszk8n = eo('section',null,null,`id`,`profile-settings-tab`);
let elsNPZU = eo('table',null,null,`class`,`table table-bordered`);
let el5b2bS = eo('tbody');
let elx4Cdw = eo('tr');
let elm2yN6 = eo('th');
text(`Account id`);
ec('th');
let elzQW0R = eo('td');
text(component.user.id);
ec('td');
ec('tr');
let eleeY2Y = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'email'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elP6WSa = eo('th');
text(`Email address`);
ec('th');
let elG_UbZ = eo('td');
let cndtaFX = component.inEditMode != 'email';
this.setState('stG3BVw', cndtaFX);
let cndnTu3 = !(cndtaFX);
this.setState('stwX3dF', cndnTu3);
if (cndtaFX) { 
let elwKlNs = eo('span','KM1f');
text(component.user.email);
ec('span');
}else { 
let elSVs_G = eo('div',null,null,`class`,`row`);
let eliM9Wl = eo('div',null,null,`class`,`col-9`);
let elY1zOE = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elonXVu.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elonXVu.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elonXVu.formHandler.removeError(`email`);}]},`value`,`${fval(component.user.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Email address`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
elY1zOE.value = fval(component.user.email);
let cndLa4J = elonXVu.formHandler.getError(`email`);
this.setState('stvYEfD', cndLa4J);
if (cndLa4J) { 
let elJ3tdN = eo('div','00Jf',null,`class`,`alert alert-danger`);
text(elonXVu.formHandler.getError(`email`));
ec('div');
}ec('div');
let elIZ8Li = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let elO2fcc = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let ell9cW4 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cndMkYq = component.editMode == 'email' && ! component.inEditMode;
this.setState('sten89S', cndMkYq);
if (cndMkYq) { 
let elrXC3r = eo('button','MqEf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'email'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elGvuFP = eo('i','y2Cf',null,`class`,`${fas('pen')} icon`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let elJm7pB = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'username'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let el30Tyo = eo('th');
text(`Username`);
ec('th');
let elDWgWl = eo('td');
let cndNR20 = component.inEditMode != 'username';
this.setState('st91qGQ', cndNR20);
let cndQV_Z = !(cndNR20);
this.setState('stEfzki', cndQV_Z);
if (cndNR20) { 
let elWUs2d = eo('span','_Jnf');
text(component.user.username || 'N/a');
ec('span');
}else { 
let elP39AL = eo('div',null,null,`class`,`row`);
let elDrQOt = eo('div',null,null,`class`,`col-9`);
text(`@`);
let eltySJ_ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.username = this.value;},function(e) {var $el = this;component.validateUserName($el.value)}]},`value`,`${fval(component.user.username)}`,`name`,`${(`username`).toInputName()}`,`placeholder`,`${trans(`username`)}`,`type`,`text`,`class`,`username-input`,`id`,`username`);
eltySJ_.autocomplete = eltySJ_.name == 'password' && Is.browser('chrome') ? 'new-password' : 'off';
eltySJ_.value = fval(component.user.username);
let cndoBdJ = component.errors.username;
this.setState('stCuRgn', cndoBdJ);
if (cndoBdJ) { 
let elp_qQt = eo('span','yjHf',null,`class`,`red-text bold`);
text(component.errors.username);
ec('span');
}ec('div');
let elkxYHL = eo('div',null,null,`class`,`col-3 p-0`);
let elYB43C = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elEdU1u = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
let elWrNYV = eo('div',null,null,`class`,`row m-0`);
let elgyZ3b = eo('div',null,null,`class`,`col`);
let elruhLA = eo('div',null,null,`class`,`bold`);
text(`Username creation criteria`);
ec('div');
let el9YVYE = eo('small');
text(`Must starts with English letter (lowercase).`);
let elzcIrC = ev('br');
text(`Can contain only English letters, Numbers, dot or underscore.`);
let elUO92Q = ev('br');
text(`No more than one dot or underscore can be written after each other.`);
let elfHd03 = ev('br');
text(`No whitespaces allowed.`);
let el1vz5e = ev('br');
ec('small');
ec('div');
ec('div');
ec('div');
}let cndeQJ0 = component.editMode == 'username' && ! component.inEditMode;
this.setState('stMihiO', cndeQJ0);
if (cndeQJ0) { 
let elv5Nyu = eo('button','9nZf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'username'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elcNiEZ = eo('i','1h6f',null,`class`,`${fas('pen')} icon`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let elzHudX = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'gender'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let ele_TFH = eo('th');
text(`Gender`);
ec('th');
let ellI1I5 = eo('td');
let cndY8_U = component.inEditMode != 'gender';
this.setState('stgSO4C', cndY8_U);
let cndlUBN = !(cndY8_U);
this.setState('stlRnb3', cndlUBN);
if (cndY8_U) { 
let eluLQPi = eo('span','9WBf',null,`class`,`text-capitalize`);
text(component.user.gender || 'N/a');
ec('span');
}else { 
let elyqWTE = eo('div',null,null,`class`,`row`);
let elyyzq3 = eo('div',null,null,`class`,`col-9`);
let cmph3L_ = this._lc('cfI0D7_Mb', {parent:component,parentTop:layout,props:{value:component.user.gender,items:['male', 'female'],required:true},attrs:{name:`${(`gender`).toInputName()}`},state:'stlRnb3'});
let cndrPqf = component.errors.gender;
this.setState('stF_Z9e', cndrPqf);
if (cndrPqf) { 
let elMUVAo = eo('span','y3tf',null,`class`,`red-text bold`);
text(component.errors.gender);
ec('span');
}ec('div');
let eldbSTM = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let el71S5G = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let eljVJUp = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cndGLAJ = component.editMode == 'gender' && ! component.inEditMode;
this.setState('stqkamx', cndGLAJ);
if (cndGLAJ) { 
let el36AzY = eo('button','mmZf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'gender'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elRcYch = eo('i','81qf',null,`class`,`${fas('pen')} icon`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let el5whgR = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'homePage'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elxcRYo = eo('th');
text(`Home Page`);
ec('th');
let elrIkRF = eo('td');
let cnd0W7Q = component.inEditMode != 'homePage';
this.setState('stiqxmZ', cnd0W7Q);
let cndnvB3 = !(cnd0W7Q);
this.setState('stbcVYw', cndnvB3);
if (cnd0W7Q) { 
let elFnROE = eo('span','Dsbf',null,`class`,`text-capitalize`);
text(component.user.homePage ? component.homePages[component.user.homePage] : 'N/a');
ec('span');
}else { 
let elCmBJV = eo('div',null,null,`class`,`row`);
let eluvZLP = eo('div',null,null,`class`,`col-9`);
let cmpI9TU = this._lc('cE2BWVGE0', {parent:component,parentTop:layout,props:{value:component.user.homePage,items:component.homePages,required:true},attrs:{name:`${(`homePage`).toInputName()}`},state:'stbcVYw'});
let cndtDSY = component.errors.homePage;
this.setState('stNAqG5', cndtDSY);
if (cndtDSY) { 
let elidV2U = eo('span','C9If',null,`class`,`red-text bold`);
text(component.errors.homePage);
ec('span');
}ec('div');
let elwsQ_q = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let elWMgXL = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elm_a75 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cndV9st = component.editMode == 'homePage' && ! component.inEditMode;
this.setState('stWO2dL', cndV9st);
if (cndV9st) { 
let elifuJq = eo('button','coZf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'homePage'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elyCrlI = eo('i','pkkf',null,`class`,`${fas('pen')} icon`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let elna898 = eo('tr');
let eloZOHJ = eo('th');
text(`Joined`);
ec('th');
let elToXKz = eo('td');
let cmpxqv3 = this._lc('ckd3kFBqE', {parent:component,parentTop:layout,props:{timestamp:component.user.createdAt.timestamp}});
ec('td');
ec('tr');
let elxBr_d = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'mobile'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elG5RVC = eo('th');
text(`Mobile number`);
ec('th');
let elqlsg8 = eo('td');
let cndIViw = component.inEditMode != 'mobile';
this.setState('stUO1Pt', cndIViw);
let cndlAfY = !(cndIViw);
this.setState('stDAOXU', cndlAfY);
if (cndIViw) { 
let elAn5nO = eo('span','WKOf');
text(component.user.mobile || 'N/a');
ec('span');
}else { 
let elG4RMS = eo('div',null,null,`class`,`row`);
let elXEisS = eo('div',null,null,`class`,`col-9`);
let ele7Wz6 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.mobile = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elonXVu.formHandler.addError(`mobile`, 'required', trans('validation.required'));}return elonXVu.formHandler.removeError(`mobile`);}]},`value`,`${fval(component.user.mobile)}`,`name`,`${(`mobile`).toInputName()}`,`placeholder`,`${trans(`Mobile number`)}`,`type`,`text`,`class`,`form-control`,`id`,`mobile`);
ele7Wz6.value = fval(component.user.mobile);
let cndOMGv = elonXVu.formHandler.getError(`mobile`);
this.setState('stS1McR', cndOMGv);
if (cndOMGv) { 
let elc6lCP = eo('div','xemf',null,`class`,`alert alert-danger`);
text(elonXVu.formHandler.getError(`mobile`));
ec('div');
}ec('div');
let eldeGPa = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let el5T91J = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elX2nqQ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cndrMFb = component.editMode == 'mobile' && ! component.inEditMode;
this.setState('stISWGf', cndrMFb);
if (cndrMFb) { 
let elJsWqd = eo('button','53rf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'mobile'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elNjdAa = eo('i','XKDf',null,`class`,`${fas('pen')} icon`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
ec('tbody');
ec('table');
ec('section');
ec('div');
let elyk_g6 = eo('div',null,null,`class`,`tab-pane fade`,`id`,`academy-tracks-tab`,`role`,`tabpanel`,`aria-labelledby`,`academy-tracks-tab`);
let cndGQPI = component.isLoading;
this.setState('stBknyv', cndGQPI);
let cndICex = !(cndGQPI);
this.setState('stwd51i', cndICex);
if (cndGQPI) { 
let cmpfhdg = this._lc('caXQfjSX_', {parent:component,parentTop:layout,state:'stBknyv'});
}else { 
let eldizyk = eo('div');
let ell2Fy5 = eo('h1',null,null,`class`,`text-center m-y-1`);
text(`Your subscribed academy tracks`);
ec('h1');
let elURIt_ = eo('div',null,null,`class`,`row`);
for (let i in component.tracks) {
let track = component.tracks[i]; 
 let iikjeJ = 'QA7WrOS' + i;
let cmpYCUp = this._lc('cKT67e_xe', {parent:component,parentTop:layout,props:{track:track},attrs:{class:'col-lg-3 col-md-6'},state:'stwd51i',insideLoop:true,index:"" +iikjeJ});
}
ec('div');
ec('div');
}ec('div');
let elVmOgA = eo('div',null,null,`class`,`tab-pane fade`,`id`,`einstein-categories-tab`,`role`,`tabpanel`,`aria-labelledby`,`einstein-categories-tab`);
let cndLORl = component.isLoading;
this.setState('stxes7G', cndLORl);
let cndjyK4 = !(cndLORl);
this.setState('stc_IR7', cndjyK4);
if (cndLORl) { 
let cmp6sWB = this._lc('ccQ7MEzb7', {parent:component,parentTop:layout,state:'stxes7G'});
}else { 
let elJrdsp = eo('div');
let elnlTIg = eo('h1',null,null,`class`,`text-center m-y-1`);
text(`Einstein Chamber categories`);
ec('h1');
let elThZQK = eo('div',null,null,`class`,`row`);
for (let i in component.einsteinCategories) {
let category = component.einsteinCategories[i]; 
 let iiNyZv = 'nOCel6H' + i;
let elonqYx = eo('div','Konp94xZ4Etu' + i+iiNyZv,null,`class`,`col-3`);
let cmpN8TH = this._lc('cT6FC_AlN', {parent:component,parentTop:layout,props:{category:category},state:'stc_IR7',insideLoop:true,index:"" +iiNyZv});
ec('div');
}
ec('div');
ec('div');
}ec('div');
let els6X_t = eo('div',null,null,`class`,`tab-pane fade`,`id`,`affiliate-tab`,`role`,`tabpanel`,`aria-labelledby`,`affiliate-tab`);
let elr7ptF = eo('div',null,null,`id`,`affiliate`);
let elAuXYt = eo('h1');
text(`Affiliate URL`);
ec('h1');
let el1Bk5f = eo('div',null,null,`class`,`m-t-1`);
let el0W7tQ = eo('a',null,null,`class`,`bold teal-text mx-2`,`target`,`_blank`,`href`,`${ component.affiliateUrl }`);
text(`Click on the
            following
            icon to copy your affiliate url.`);
ec('a');
let cndTlgy = ! component.copied;
this.setState('stSGHWs', cndTlgy);
if (cndTlgy) { 
let el4RLxK = eo('button','2NTf',null, eventListeners, {onclick:[function(e) {var $el = this;copyToClipboard(component.affiliateUrl); component.copied = true;}]},`title`,`${trans(`Copy`)}`,`class`,`text-primary`,`type`,`button`);
text(`(`);
let elYjWWz = eo('i','Wtif',null,`class`,`${fas('object-ungroup')} icon`);
ec('i');
text(`)`);
ec('button');
}let cndUoC0 = component.copied;
this.setState('st_gTk2', cndUoC0);
if (cndUoC0) { 
let elkmJKg = eo('strong','A3Vf',null,`title`,`${trans(`Copied`)}`,`class`,`green-text ml-2`);
let el9v8F3 = eo('i','H0Nf',null,`class`,`${fas('check')} icon`);
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
let cndpBmH = component.updateMessage;
this.setState('stCj002', cndpBmH);
if (cndpBmH) { 
let cmpRt88 = this._lc('cshJwQ4WS', {parent:component,props:{html:component.updateMessage},events:{onclose:function(e) {let $el = this; component.updateMessage = null}},content:(flkMessage) => {text(component.updateMessage);
},state:'stCj002'});
}
                    this.isReadyToGo();
                }
        });