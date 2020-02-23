_Component({
                selector: 'profile-page',
                c: 'ProfilePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['updateProfile','user','loadTracks','loadEinsteinCategories','updateMessage','requireNameChange','isUpdating','editMode','form','getUserImage','inEditMode','validateUserName','errors','homePages','isLoading','tracks','einsteinCategories','affiliateUrl','copied'],
                children: {cuvy5WwHS:'flk-image-input',cVCEB8F0n:'gold-icon',cDZHJwTIg:'flk-number-counter',ckjuyNyUe:'flk-number-counter',cJ8xfAI1A:'flk-number-counter',cGje_dZqP:'flk-number-counter',cUJwJzHEN:'flk-number-counter',cWvMsc79W:'flk-number-counter',csmhyCpsV:'flk-number-counter',cYxfu8mdh:'flk-number-counter',cwwtDyoq_:'flk-number-counter',cRvDKXE2Y:'flk-number-counter',cysUnFU6R:'flk-number-counter',cY5ow_IK7:'flk-number-counter',ct_9dgVvA:'flk-dropdown-list',cWIV2AftE:'flk-dropdown-list',cLBvuTL3r:'flk-time-ago',c1rDCJlRd:'flk-spinner',ctL5SfysM:'track-card',cRwHYwPW8:'flk-spinner',cNSZIrm2J:'einstein-category-card',cVP_0uHV0:'layout',cQR9T0TFV:'flk-message'},
                render: function (component) {
                    let cmpYwQy = this._lc('cVP_0uHV0', {parent:component,content:(layout) => {let ely_nSn = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.updateProfile($el)}]});
component.form = ely_nSn;

                if (! ely_nSn.formHandler) {
                    window.cfrmdlr = ely_nSn.formHandler = new FormHandler(ely_nSn, component);
                } else {
                    window.cfrmdlr = ely_nSn.formHandler;
                }
            let elZumkB = eo('div',null,null,`class`,`rows`);
let eljsaY7 = eo('ul',null,null,`class`,`nav nav-tabs`);
let el5RXYO = eo('li',null,null,`class`,`nav-item`);
let eleGWMl = eo('a',null,null,`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#overview-tab`);
let elwY26T = eo('i',null,null,`class`,`${fas('street-view') + ' mr-1 icon'}`);
ec('i');
text(`Overview`);
ec('a');
ec('li');
let elJprvM = eo('li',null,null,`class`,`nav-item`);
let elS8mgw = eo('a',null,null,`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#account-info-tab`);
let elLX8yT = eo('i',null,null,`class`,`${fas('user') + ' mr-1 icon'}`);
ec('i');
text(`Account info`);
ec('a');
ec('li');
let cndGyLt = component.user.total.tracks > 0;
this.setState('st970Wo', cndGyLt);
if (cndGyLt) { 
let elTgiTW = eo('li','gEpf',null,`class`,`nav-item`);
let el0mRW_ = eo('a','6TXf',null, eventListeners, {onclick:[function(e) {var $el = this;component.loadTracks()}]},`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#academy-tracks-tab`);
let eliNMxe = eo('i','TBwf',null,`class`,`${fas('university') + ' mr-1 icon'}`);
ec('i');
text(`Academy tracks`);
let elkb6hW = eo('span','qqKf',null,`class`,`badge total-answers badge-success`);
text(component.user.total.tracks);
ec('span');
ec('a');
ec('li');
}let cndjHAI = Object.get(component.user.total, 'einstein.categories') > 0;
this.setState('stxGTRA', cndjHAI);
if (cndjHAI) { 
let elnTjVe = eo('li','9W9f',null,`class`,`nav-item`);
let elmpr0W = eo('a','LJpf',null, eventListeners, {onclick:[function(e) {var $el = this;component.loadEinsteinCategories()}]},`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#einstein-categories-tab`);
let elXXTtZ = ev('img','kJrf',null,`src`,`${assets('images/ein-sm.png')}`,`class`,`einstein-icon`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
text(`Einstein categories`);
let elW74CG = eo('span','88If',null,`class`,`badge total-answers btn-purple`);
text(component.user.total.einstein.categories);
ec('span');
ec('a');
ec('li');
}let elK3_Nw = eo('li',null,null,`class`,`nav-item`);
let elOiS2b = eo('a',null,null,`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#affiliate-tab`);
let el0kWTe = eo('i',null,null,`class`,`${fas('user-plus') + ' mr-1 icon'}`);
ec('i');
text(`Affiliate program`);
ec('a');
ec('li');
ec('ul');
let elr3KRL = eo('div',null,null,`class`,`cols`);
let el4ey_T = eo('div',null,null,`class`,`tab-content`);
let elGMLqX = eo('div',null,null,`class`,`tab-pane fade`,`id`,`overview-tab`);
let elCl0AM = eo('section',null,null,`id`,`profile-overview-tab`);
let cndRX7z = component.requireNameChange();
this.setState('stEW_GQ', cndRX7z);
if (cndRX7z) { 
let elOV3QY = eo('div','VSbf',null,`class`,`overlay`);
ec('div');
}let el1dWqm = eo('div',null,null,`class`,`text-center m-b-2`);
let elXsN28 = eo('div',null,null,`class`,`relative`);
let cmpuLLx = this._lc('cuvy5WwHS', {parent:component,parentTop:layout,props:{disabled:component.isUpdating,src:component.getUserImage()},events:{onmouseover:function(e) {let $el = this; component.editMode = 'image'},onmouseout:function(e) {let $el = this; component.editMode = null},onchange:function(e) {let $el = this; component.updateProfile(component.form);}},boolAttrs:{disabled:component.isUpdating},attrs:{src:`${component.getUserImage()}`,name:`${(`image`).toInputName()}`}});
let cndPfAr = component.user.username;
this.setState('st86MFE', cndPfAr);
if (cndPfAr) { 
let elUKPey = eo('span','L54f',null,`class`,`grey-text`);
text('@' + component.user.username);
ec('span');
}let cndzOAQ = component.editMode == 'image';
this.setState('stBj8Tq', cndzOAQ);
if (cndzOAQ) { 
let elekGFW = eo('span','cRxf',null,`class`,`new-tooltip`);
text(`Click to edit`);
ec('span');
}ec('div');
let el3mxR4 = eo('div',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'name'; component.editMode}],onmouseout:[function(e) {var $el = this;component.editMode = null}]},`class`,`m-t-2 relative name-change-wrapper`);
let cndbxXo = component.requireNameChange();
this.setState('stszJoy', cndbxXo);
let cndLEBB = component.inEditMode == 'name' || component.requireNameChange();
this.setState('stC0ok1', cndLEBB);
if (cndbxXo) { 
let elx7Eid = eo('span','Vnjf',null,`class`,`new-tooltip`);
text(`Add your last name`);
ec('span');
}let cndZuly = component.inEditMode != 'name' && ! component.requireNameChange();
this.setState('st5RJ7O', cndZuly);
let cndZbUq = cndLEBB;
this.setState('stl8EpC', cndZbUq);
if (cndZuly) { 
let elhmu9V = eo('h1','kH9f',null,`class`,`d-inline-block`);
text(component.user.name);
ec('h1');
}else if (cndZbUq) { 
let elXmVaF = eo('div',null,null,`class`,`m-auto`,`id`,`name-change`);
let el5lpxO = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.firstName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return ely_nSn.formHandler.addError(`firstName`, 'required', trans('validation.required'));}return ely_nSn.formHandler.removeError(`firstName`);}]},`value`,`${fval(component.user.firstName)}`,`name`,`${(`firstName`).toInputName()}`,`placeholder`,`${trans(`First name`)}`,`type`,`text`,`class`,`form-control d-inline-block`,`id`,`firstName`);
el5lpxO.value = fval(component.user.firstName);
let cnd3JNl = ely_nSn.formHandler.getError(`firstName`);
this.setState('sta4U2r', cnd3JNl);
if (cnd3JNl) { 
let elSg0DS = eo('div','unuf',null,`class`,`alert alert-danger`);
text(ely_nSn.formHandler.getError(`firstName`));
ec('div');
}let elyPojG = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.lastName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return ely_nSn.formHandler.addError(`lastName`, 'required', trans('validation.required'));}return ely_nSn.formHandler.removeError(`lastName`);}]},`value`,`${fval(component.user.lastName)}`,`name`,`${(`lastName`).toInputName()}`,`placeholder`,`${trans(`Last name`)}`,`type`,`text`,`class`,`form-control d-inline-block`,`id`,`lastName`);
elyPojG.value = fval(component.user.lastName);
let cndmKdR = ely_nSn.formHandler.getError(`lastName`);
this.setState('stBrGcn', cndmKdR);
if (cndmKdR) { 
let el0dMjv = eo('div','zAHf',null,`class`,`alert alert-danger`);
text(ely_nSn.formHandler.getError(`lastName`));
ec('div');
}let elJ7L0W = ev('input',null,null,`name`,`${(`name`).toInputName()}`,`type`,`hidden`,`value`,`${ (component.user.firstName + ' ' + component.user.lastName) || component.user.name }`);
ec('div');
let elPeYgB = eo('div',null,null,`class`,`m-y-1`);
let elKiqvB = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn blue bold save-btn`);
text(`Save changes`);
ec('button');
let el62cIy = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn white black-text bold`);
text(`Close`);
ec('button');
ec('div');
}let cndJUzx = component.editMode == 'name' && ! component.inEditMode && ! component.requireNameChange();
this.setState('staqvQI', cndJUzx);
if (cndJUzx) { 
let el3SLJW = eo('button','5zXf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'name'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elxPGuj = eo('i','lJef',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('div');
let cmpDE8y = this._lc('cVCEB8F0n', {parent:component,parentTop:layout,props:{coins:component.user.gold}});
ec('div');
let elma4FN = eo('div',null,null,`id`,`totals`,`class`,`text-center`);
let ell_7iD = eo('section',null,null,`class`,`profile-box pb-5 mb-5`);
let elrL7s4 = eo('header',null,null,`class`,`col-12 profile-box-header m-b-5`);
let elJf5Ho = eo('h1',null,null,`class`,`pl-5 my-0`);
text(`General Overview`);
ec('h1');
let eltV6lL = eo('span',null,null,`class`,`profile-box-header-line`);
ec('span');
ec('header');
let elvJcjV = eo('div',null,null,`class`,`row m-t-5 mx-0`);
let elTL3NY = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmp9620 = this._lc('cDZHJwTIg', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'tracks', '')},attrs:{class:'total-summary bold teal-border'}});
let elsDbtD = eo('div',null,null,`class`,`btn btn-sm btn-teal bold`);
text(`Academy tracks`);
ec('div');
ec('div');
let elKrGUn = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpnbE3 = this._lc('ckjuyNyUe', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.all', '')},attrs:{class:'total-summary bold navy-border'}});
let elmwfqE = eo('div',null,null,`class`,`btn btn-sm btn-navy bold`);
text(`Academy answers`);
ec('div');
ec('div');
let elsf6tH = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpW9O5 = this._lc('cJ8xfAI1A', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.all', '')},attrs:{class:'total-summary bold purple-border'}});
let elSEYmK = eo('div',null,null,`class`,`btn btn-sm btn-purple bold`);
text(`Einstein puzzles`);
ec('div');
ec('div');
let el9gU8T = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpDMZS = this._lc('cGje_dZqP', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'invitations', '') || 0},attrs:{class:'total-summary bold lime-border'}});
let elJWFpP = eo('div',null,null,`class`,`btn btn-sm btn-lime bold`);
text(`Invitations`);
ec('div');
ec('div');
ec('div');
ec('section');
let el0FjhI = eo('section',null,null,`class`,`profile-box py-5 my-5`);
let elUjE8b = eo('header',null,null,`class`,`col-12 m-b-5 profile-box-header`);
let ellRjww = eo('h1',null,null,`class`,`pl-5 my-0`);
text(`Academy`);
ec('h1');
let el4TwL5 = eo('span',null,null,`class`,`profile-box-header-line`);
ec('span');
ec('header');
let el998T3 = eo('div',null,null,`class`,`row m-t-5`);
let elXhrQf = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpT5nT = this._lc('cUJwJzHEN', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'tracks', '')},attrs:{class:'total-summary bold light-gray-border'}});
let elQCcdF = eo('div',null,null,`class`,`btn btn-sm btn-light-gray bold`);
text(`Unlocked tracks`);
ec('div');
ec('div');
let elh3I4r = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpsSiA = this._lc('cWvMsc79W', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.approved', '')},attrs:{class:'total-summary bold success-border'}});
let eln1IJ1 = eo('div',null,null,`class`,`btn btn-sm btn-success bold`);
text(`Approved answers`);
ec('div');
ec('div');
let elxw8s9 = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpMc9I = this._lc('csmhyCpsV', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.pending', '')},attrs:{class:'total-summary bold warning-border'}});
let el9fp1t = eo('div',null,null,`class`,`btn btn-sm btn-warning bold`);
text(`Pending answers`);
ec('div');
ec('div');
let elZNwKy = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpk9pT = this._lc('cYxfu8mdh', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.rejected', '')},attrs:{class:'total-summary bold danger-border'}});
let el9xRpT = eo('div',null,null,`class`,`btn btn-sm btn-danger bold`);
text(`Rejected answers`);
ec('div');
ec('div');
ec('div');
ec('section');
let elZdEGF = eo('section',null,null,`class`,`profile-box py-5 my-5`);
let elM3rVl = eo('header',null,null,`class`,`col-12 m-b-5 profile-box-header`);
let elbvwJu = eo('h1',null,null,`class`,`pl-5 my-0`);
text(`Einstein Chamber`);
ec('h1');
let elFiu4s = eo('span',null,null,`class`,`profile-box-header-line`);
ec('span');
ec('header');
let elnNNx6 = eo('div',null,null,`class`,`row m-t-5`);
let el3I9K2 = eo('div',null,null,`class`,`col-sm-3`);
let cmpbHSe = this._lc('cwwtDyoq_', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.categories', 0)},attrs:{class:'total-summary bold pencil-border'}});
let el5fa6V = eo('div',null,null,`class`,`btn btn-sm btn-pencil bold`);
text(`Unlocked categories`);
ec('div');
ec('div');
let elXiRkH = eo('div',null,null,`class`,`col-sm-3`);
let cmpdB6w = this._lc('cRvDKXE2Y', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.approved', 0)},attrs:{class:'total-summary bold emerald-border'}});
let elDAaaJ = eo('div',null,null,`class`,`btn btn-sm btn-emerald bold`);
text(`Approved`);
ec('div');
ec('div');
let elkXcNl = eo('div',null,null,`class`,`col-sm-3`);
let cmpKnC5 = this._lc('cysUnFU6R', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.pending', 0)},attrs:{class:'total-summary bold dark-warning-border'}});
let el10xM5 = eo('div',null,null,`class`,`btn btn-sm btn-dark-warning bold`);
text(`Pending`);
ec('div');
ec('div');
let el129L1 = eo('div',null,null,`class`,`col-sm-3`);
let cmpADWR = this._lc('cY5ow_IK7', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.rejected', 0)},attrs:{class:'total-summary bold dark-danger-border'}});
let ellqH_s = eo('div',null,null,`class`,`btn btn-sm btn-dark-danger bold`);
text(`Rejected`);
ec('div');
ec('div');
ec('div');
ec('section');
ec('div');
ec('section');
ec('div');
let elPz_CC = eo('div',null,null,`class`,`tab-pane fade`,`id`,`account-info-tab`,`role`,`tabpanel`,`aria-labelledby`,`account-info-tab`);
let elvv_Lq = eo('section',null,null,`id`,`profile-settings-tab`);
let elbaAgN = eo('table',null,null,`class`,`table table-bordered`);
let elFaAmd = eo('tbody');
let el4t1Iz = eo('tr');
let elx4Sl0 = eo('th');
text(`Account id`);
ec('th');
let elW9fyX = eo('td');
text(component.user.id);
ec('td');
ec('tr');
let elKylxU = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'email'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elbfQtw = eo('th');
text(`Email address`);
ec('th');
let eli5EVY = eo('td');
let cndIdSH = component.inEditMode != 'email';
this.setState('stCJf1T', cndIdSH);
let cndDgqb = !(cndIdSH);
this.setState('strPVXo', cndDgqb);
if (cndIdSH) { 
let elI1MiO = eo('span','WDRf');
text(component.user.email);
ec('span');
}else { 
let elOhlnJ = eo('div',null,null,`class`,`row`);
let elS3My2 = eo('div',null,null,`class`,`col-9`);
let elyXV4d = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return ely_nSn.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return ely_nSn.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return ely_nSn.formHandler.removeError(`email`);}]},`value`,`${fval(component.user.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Email address`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
elyXV4d.value = fval(component.user.email);
let cndgetR = ely_nSn.formHandler.getError(`email`);
this.setState('st7Pe6b', cndgetR);
if (cndgetR) { 
let elYMZ2b = eo('div','njEf',null,`class`,`alert alert-danger`);
text(ely_nSn.formHandler.getError(`email`));
ec('div');
}ec('div');
let elPK7_i = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let eleQjUI = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elUqaUb = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cndRThz = component.editMode == 'email' && ! component.inEditMode;
this.setState('stEQOKa', cndRThz);
if (cndRThz) { 
let elxr8oB = eo('button','4REf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'email'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let el3t9gf = eo('i','Dyrf',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let el3dnMZ = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'username'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let el9pj08 = eo('th');
text(`Username`);
ec('th');
let el2JZVN = eo('td');
let cndZhv3 = component.inEditMode != 'username';
this.setState('stQQnBZ', cndZhv3);
let cndI61U = !(cndZhv3);
this.setState('stVA9pq', cndI61U);
if (cndZhv3) { 
let elrBxm2 = eo('span','2sdf');
text(component.user.username || 'N/a');
ec('span');
}else { 
let elstDbo = eo('div',null,null,`class`,`row`);
let elgA5EH = eo('div',null,null,`class`,`col-9`);
text(`@`);
let el2JUBv = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.username = this.value;},function(e) {var $el = this;component.validateUserName($el.value)}]},`value`,`${fval(component.user.username)}`,`name`,`${(`username`).toInputName()}`,`placeholder`,`${trans(`username`)}`,`type`,`text`,`class`,`username-input`,`id`,`username`);
el2JUBv.autocomplete = el2JUBv.name == 'password' && Is.browser('chrome') ? 'new-password' : 'off';
el2JUBv.value = fval(component.user.username);
let cnd13TW = component.errors.username;
this.setState('stKJdos', cnd13TW);
if (cnd13TW) { 
let elG7AL9 = eo('span','gsHf',null,`class`,`red-text bold`);
text(component.errors.username);
ec('span');
}ec('div');
let elu9Kzw = eo('div',null,null,`class`,`col-3 p-0`);
let elPgb8L = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let el6SD3X = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
let elWoPgb = eo('div',null,null,`class`,`row m-0`);
let elnv99G = eo('div',null,null,`class`,`col`);
let elDohD8 = eo('div',null,null,`class`,`bold`);
text(`Username creation criteria`);
ec('div');
let elr_sEV = eo('small');
text(`Must starts with English letter (lowercase).`);
let elbzEqo = ev('br');
text(`Can contain only English letters, Numbers, dot or underscore.`);
let elHI38W = ev('br');
text(`No more than one dot or underscore can be written after each other.`);
let elTQD4d = ev('br');
text(`No whitespaces allowed.`);
let elIYveO = ev('br');
ec('small');
ec('div');
ec('div');
ec('div');
}let cndXRse = component.editMode == 'username' && ! component.inEditMode;
this.setState('stAxpgP', cndXRse);
if (cndXRse) { 
let elHqbtK = eo('button','6MFf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'username'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elkkL9q = eo('i','FB2f',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let elMCZ6R = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'gender'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elop8l_ = eo('th');
text(`Gender`);
ec('th');
let elW479h = eo('td');
let cndmjax = component.inEditMode != 'gender';
this.setState('stMJKpl', cndmjax);
let cndosqH = !(cndmjax);
this.setState('stsZe2c', cndosqH);
if (cndmjax) { 
let el2ahWf = eo('span','PcPf',null,`class`,`text-capitalize`);
text(component.user.gender || 'N/a');
ec('span');
}else { 
let eliCmAd = eo('div',null,null,`class`,`row`);
let elexsLw = eo('div',null,null,`class`,`col-9`);
let cmpJlDP = this._lc('ct_9dgVvA', {parent:component,parentTop:layout,props:{value:component.user.gender,items:['male', 'female'],required:true},attrs:{name:`${(`gender`).toInputName()}`},state:'stsZe2c'});
let cnd3UOi = component.errors.gender;
this.setState('stX3Yfb', cnd3UOi);
if (cnd3UOi) { 
let elhdMly = eo('span','T3gf',null,`class`,`red-text bold`);
text(component.errors.gender);
ec('span');
}ec('div');
let elfEAYV = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let elUkgMx = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elsqbEy = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cndIWHW = component.editMode == 'gender' && ! component.inEditMode;
this.setState('stVp4PN', cndIWHW);
if (cndIWHW) { 
let elMaWUg = eo('button','7BXf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'gender'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let el0SuIa = eo('i','Du3f',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let elLVLFQ = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'homePage'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elqz4kt = eo('th');
text(`Home Page`);
ec('th');
let elQh14w = eo('td');
let cndnlKO = component.inEditMode != 'homePage';
this.setState('stwEd6U', cndnlKO);
let cndBHHY = !(cndnlKO);
this.setState('stjRdwK', cndBHHY);
if (cndnlKO) { 
let elKVcTs = eo('span','WPef',null,`class`,`text-capitalize`);
text(component.user.homePage ? component.homePages[component.user.homePage] : 'N/a');
ec('span');
}else { 
let elGl6OO = eo('div',null,null,`class`,`row`);
let elNd3ar = eo('div',null,null,`class`,`col-9`);
let cmpJiPx = this._lc('cWIV2AftE', {parent:component,parentTop:layout,props:{value:component.user.homePage,items:component.homePages,required:true},attrs:{name:`${(`homePage`).toInputName()}`},state:'stjRdwK'});
let cndrNS0 = component.errors.homePage;
this.setState('st0ZIoo', cndrNS0);
if (cndrNS0) { 
let elQLG7l = eo('span','gP1f',null,`class`,`red-text bold`);
text(component.errors.homePage);
ec('span');
}ec('div');
let el5HMT_ = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let el7pT2E = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let el1EQzE = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cndEXp6 = component.editMode == 'homePage' && ! component.inEditMode;
this.setState('st2d62W', cndEXp6);
if (cndEXp6) { 
let elohLPk = eo('button','4Dxf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'homePage'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elipJwQ = eo('i','ffRf',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let eliusVe = eo('tr');
let elRGz3N = eo('th');
text(`Joined`);
ec('th');
let elYxvvN = eo('td');
let cmpcVmj = this._lc('cLBvuTL3r', {parent:component,parentTop:layout,props:{timestamp:component.user.createdAt.timestamp}});
ec('td');
ec('tr');
let elFsWZA = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'mobile'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elS4VBr = eo('th');
text(`Mobile number`);
ec('th');
let elbe15c = eo('td');
let cndLbYQ = component.inEditMode != 'mobile';
this.setState('stAodhq', cndLbYQ);
let cndspVo = !(cndLbYQ);
this.setState('stIJYK7', cndspVo);
if (cndLbYQ) { 
let eldg05i = eo('span','MLJf');
text(component.user.mobile || 'N/a');
ec('span');
}else { 
let eljJe4S = eo('div',null,null,`class`,`row`);
let elkcNN6 = eo('div',null,null,`class`,`col-9`);
let eli55pG = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.mobile = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return ely_nSn.formHandler.addError(`mobile`, 'required', trans('validation.required'));}return ely_nSn.formHandler.removeError(`mobile`);}]},`value`,`${fval(component.user.mobile)}`,`name`,`${(`mobile`).toInputName()}`,`placeholder`,`${trans(`Mobile number`)}`,`type`,`text`,`class`,`form-control`,`id`,`mobile`);
eli55pG.value = fval(component.user.mobile);
let cndZ_k4 = ely_nSn.formHandler.getError(`mobile`);
this.setState('st1_krs', cndZ_k4);
if (cndZ_k4) { 
let ell97QP = eo('div','QTKf',null,`class`,`alert alert-danger`);
text(ely_nSn.formHandler.getError(`mobile`));
ec('div');
}ec('div');
let elNfvRL = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let elCPLxv = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let el3eOtb = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cndLjfs = component.editMode == 'mobile' && ! component.inEditMode;
this.setState('stLhFCE', cndLjfs);
if (cndLjfs) { 
let elvVxrB = eo('button','r6Jf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'mobile'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let el4EMNr = eo('i','493f',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
ec('tbody');
ec('table');
ec('section');
ec('div');
let elwFeu2 = eo('div',null,null,`class`,`tab-pane fade`,`id`,`academy-tracks-tab`,`role`,`tabpanel`,`aria-labelledby`,`academy-tracks-tab`);
let cndcwW5 = component.isLoading;
this.setState('st30RfH', cndcwW5);
let cnd79QA = !(cndcwW5);
this.setState('stquiM5', cnd79QA);
if (cndcwW5) { 
let cmphJtj = this._lc('c1rDCJlRd', {parent:component,parentTop:layout,state:'st30RfH'});
}else { 
let elPl_Td = eo('div');
let elPZpD8 = eo('h1',null,null,`class`,`text-center m-y-1`);
text(`Your subscribed academy tracks`);
ec('h1');
let elaEgFz = eo('div',null,null,`class`,`row`);
for (let i in component.tracks) {
let track = component.tracks[i]; 
 let iiw7Ic = 'lNK7QsO' + i;
let cmpgnus = this._lc('ctL5SfysM', {parent:component,parentTop:layout,props:{track:track},attrs:{class:'col-lg-3 col-md-6'},state:'stquiM5',insideLoop:true,index:"" +iiw7Ic});
}
ec('div');
ec('div');
}ec('div');
let elhbEak = eo('div',null,null,`class`,`tab-pane fade`,`id`,`einstein-categories-tab`,`role`,`tabpanel`,`aria-labelledby`,`einstein-categories-tab`);
let cndOWXL = component.isLoading;
this.setState('stVHvKf', cndOWXL);
let cnd3vWN = !(cndOWXL);
this.setState('stIE_0B', cnd3vWN);
if (cndOWXL) { 
let cmp_cJM = this._lc('cRwHYwPW8', {parent:component,parentTop:layout,state:'stVHvKf'});
}else { 
let elf1gky = eo('div');
let elYxeFq = eo('h1',null,null,`class`,`text-center m-y-1`);
text(`Einstein Chamber categories`);
ec('h1');
let elP_4ne = eo('div',null,null,`class`,`row`);
for (let i in component.einsteinCategories) {
let category = component.einsteinCategories[i]; 
 let iihVBI = 'i3GBVcV' + i;
let elUW5zG = eo('div','OnY1R0DoWWvw' + i+iihVBI,null,`class`,`col-3`);
let cmpJAgZ = this._lc('cNSZIrm2J', {parent:component,parentTop:layout,props:{category:category},state:'stIE_0B',insideLoop:true,index:"" +iihVBI});
ec('div');
}
ec('div');
ec('div');
}ec('div');
let elp5_En = eo('div',null,null,`class`,`tab-pane fade`,`id`,`affiliate-tab`,`role`,`tabpanel`,`aria-labelledby`,`affiliate-tab`);
let eltpjn4 = eo('div',null,null,`id`,`affiliate`);
let elO3_kE = eo('h1');
text(`Affiliate URL`);
ec('h1');
let el2YSdf = eo('div',null,null,`class`,`m-t-1`);
let elZzT10 = eo('a',null,null,`class`,`bold teal-text mx-2`,`target`,`_blank`,`href`,`${ component.affiliateUrl }`);
text(`Click on the
            following
            icon to copy your affiliate url.`);
ec('a');
let cndb4Ga = ! component.copied;
this.setState('stA0CCr', cndb4Ga);
if (cndb4Ga) { 
let el_29uq = eo('button','Lrqf',null, eventListeners, {onclick:[function(e) {var $el = this;copyToClipboard(component.affiliateUrl); component.copied = true;}]},`title`,`${trans(`Copy`)}`,`class`,`text-primary`,`type`,`button`);
text(`(`);
let elDheQO = eo('i','uSQf',null,`class`,`${fas('object-ungroup') + ' icon'}`);
ec('i');
text(`)`);
ec('button');
}let cndKRDl = component.copied;
this.setState('stxPKW3', cndKRDl);
if (cndKRDl) { 
let el7M3ag = eo('strong','PB9f',null,`title`,`${trans(`Copied`)}`,`class`,`green-text ml-2`);
let elhWZNJ = eo('i','oppf',null,`class`,`${fas('check') + ' icon'}`);
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
let cndwaGF = component.updateMessage;
this.setState('st5wzpe', cndwaGF);
if (cndwaGF) { 
let cmpZKsu = this._lc('cQR9T0TFV', {parent:component,props:{html:component.updateMessage},events:{onclose:function(e) {let $el = this; component.updateMessage = null}},content:(flkMessage) => {text(component.updateMessage);
},state:'st5wzpe'});
}
                    this.isReadyToGo();
                }
        });