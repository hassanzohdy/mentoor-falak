_Component({
                selector: 'profile-page',
                c: 'ProfilePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['updateProfile','user','loadTracks','loadEinsteinCategories','updateMessage','requireNameChange','isUpdating','editMode','form','getUserImage','inEditMode','validateUserName','errors','homePages','isLoading','tracks','einsteinCategories','affiliateUrl','copied'],
                children: {c8cexqqmW:'flk-image-input',cdb_6AObf:'gold-icon',cf1cjg9ie:'flk-number-counter',cpfbB_WtW:'flk-number-counter',ccnL7cLoV:'flk-number-counter',cBNDNbnho:'flk-number-counter',cmjZN_MwM:'flk-number-counter',cpNO4y0u7:'flk-number-counter',cx4FtfDf5:'flk-number-counter',c9MwO1jBM:'flk-number-counter',c7YEv9mU6:'flk-number-counter',c3xqt6iEv:'flk-number-counter',ccVO84oKR:'flk-number-counter',cXZu5eJzZ:'flk-number-counter',cP9xhvnOL:'flk-dropdown-list',c02TWdGA6:'flk-dropdown-list',cP3MlEb0p:'flk-time-ago',c6oPWrH4x:'flk-spinner',cnSircXZi:'track-card',c35rqo1Sj:'flk-spinner',cD217PEiE:'einstein-category-card',cD5PwIOj3:'layout',cQ8wR_hFt:'flk-message'},
                render: function (component) {
                    let cmpi9QO = this._lc('cD5PwIOj3', {parent:component,content:(layout) => {let eldkM8D = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.updateProfile($el)}]});
component.form = eldkM8D;

                if (! eldkM8D.formHandler) {
                    window.cfrmdlr = eldkM8D.formHandler = new FormHandler(eldkM8D, component);
                } else {
                    window.cfrmdlr = eldkM8D.formHandler;
                }
            let elDnOy_ = eo('div',null,null,`class`,`rows`);
let elqTBH0 = eo('ul',null,null,`class`,`nav nav-tabs`);
let elAXAsN = eo('li',null,null,`class`,`nav-item`);
let elVqSaH = eo('a',null,null,`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#overview-tab`);
let el0SeVN = eo('i',null,null,`class`,`${fas('street-view') + ' mr-1 icon'}`);
ec('i');
text(`Overview`);
ec('a');
ec('li');
let el7K248 = eo('li',null,null,`class`,`nav-item`);
let elyl7UK = eo('a',null,null,`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#account-info-tab`);
let elHbB9Z = eo('i',null,null,`class`,`${fas('user') + ' mr-1 icon'}`);
ec('i');
text(`Account info`);
ec('a');
ec('li');
let cndPMF6 = component.user.total.tracks > 0;
this.setState('stQ01lQ', cndPMF6);
if (cndPMF6) { 
let elAfPX_ = eo('li','z3af',null,`class`,`nav-item`);
let elZQg_e = eo('a','FBEf',null, eventListeners, {onclick:[function(e) {var $el = this;component.loadTracks()}]},`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#academy-tracks-tab`);
let elmhmhc = eo('i','YeXf',null,`class`,`${fas('university') + ' mr-1 icon'}`);
ec('i');
text(`Academy tracks`);
let eleD4_V = eo('span','x9Ff',null,`class`,`badge total-answers badge-success`);
text(component.user.total.tracks);
ec('span');
ec('a');
ec('li');
}let cnd9K4d = Object.get(component.user.total, 'einstein.categories') > 0;
this.setState('stWRXsp', cnd9K4d);
if (cnd9K4d) { 
let elCkHvI = eo('li','aTQf',null,`class`,`nav-item`);
let elVmH2A = eo('a','dlXf',null, eventListeners, {onclick:[function(e) {var $el = this;component.loadEinsteinCategories()}]},`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#einstein-categories-tab`);
let elJUTB8 = ev('img','oLdf',null,`src`,`${assets('images/ein-sm.png')}`,`class`,`einstein-icon`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
text(`Einstein categories`);
let ellkexJ = eo('span','K6cf',null,`class`,`badge total-answers btn-purple`);
text(component.user.total.einstein.categories);
ec('span');
ec('a');
ec('li');
}let el0KAfc = eo('li',null,null,`class`,`nav-item`);
let elmibYI = eo('a',null,null,`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#affiliate-tab`);
let elWq4PS = eo('i',null,null,`class`,`${fas('user-plus') + ' mr-1 icon'}`);
ec('i');
text(`Affiliate program`);
ec('a');
ec('li');
ec('ul');
let elmXJFL = eo('div',null,null,`class`,`cols`);
let elkykA0 = eo('div',null,null,`class`,`tab-content`);
let elCf2p8 = eo('div',null,null,`class`,`tab-pane fade`,`id`,`overview-tab`);
let el8uf3m = eo('section',null,null,`id`,`profile-overview-tab`);
let cndoBAC = component.requireNameChange();
this.setState('stL37hj', cndoBAC);
if (cndoBAC) { 
let elOd2AY = eo('div','UDTf',null,`class`,`overlay`);
ec('div');
}let ellU7Mq = eo('div',null,null,`class`,`text-center m-b-2`);
let el1TTJY = eo('div',null,null,`class`,`relative`);
let cmp68Yj = this._lc('c8cexqqmW', {parent:component,parentTop:layout,props:{disabled:component.isUpdating,src:component.getUserImage()},events:{onmouseover:function(e) {let $el = this; component.editMode = 'image'},onmouseout:function(e) {let $el = this; component.editMode = null},onchange:function(e) {let $el = this; component.updateProfile(component.form);}},boolAttrs:{disabled:component.isUpdating},attrs:{src:`${component.getUserImage()}`,name:`${(`image`).toInputName()}`}});
let cndGQfX = component.user.username;
this.setState('stAp0Tz', cndGQfX);
if (cndGQfX) { 
let eljEHJh = eo('span','Y9af',null,`class`,`grey-text`);
text('@' + component.user.username);
ec('span');
}let cndXtXK = component.editMode == 'image';
this.setState('stemGuf', cndXtXK);
if (cndXtXK) { 
let elg9zQk = eo('span','teXf',null,`class`,`new-tooltip`);
text(`Click to edit`);
ec('span');
}ec('div');
let elZx_Ci = eo('div',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'name'; component.editMode}],onmouseout:[function(e) {var $el = this;component.editMode = null}]},`class`,`m-t-2 relative name-change-wrapper`);
let cndrTOS = component.requireNameChange();
this.setState('stemjnb', cndrTOS);
let cndZhs4 = component.inEditMode == 'name' || component.requireNameChange();
this.setState('st9PszJ', cndZhs4);
if (cndrTOS) { 
let el4doBX = eo('span','7gjf',null,`class`,`new-tooltip`);
text(`Add your last name`);
ec('span');
}let cnd18uY = component.inEditMode != 'name' && ! component.requireNameChange();
this.setState('stLD5Zh', cnd18uY);
let cndgogv = cndZhs4;
this.setState('stdBzBA', cndgogv);
if (cnd18uY) { 
let eljLFK5 = eo('h1','DKff',null,`class`,`d-inline-block`);
text(component.user.name);
ec('h1');
}else if (cndgogv) { 
let elp4XOO = eo('div',null,null,`class`,`m-auto`,`id`,`name-change`);
let elGaYsj = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.firstName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eldkM8D.formHandler.addError(`firstName`, 'required', trans('validation.required'));}return eldkM8D.formHandler.removeError(`firstName`);}]},`value`,`${fval(component.user.firstName)}`,`name`,`${(`firstName`).toInputName()}`,`placeholder`,`${trans(`First name`)}`,`type`,`text`,`class`,`form-control d-inline-block`,`id`,`firstName`);
elGaYsj.value = fval(component.user.firstName);
let cnd_T5g = eldkM8D.formHandler.getError(`firstName`);
this.setState('stBWyDX', cnd_T5g);
if (cnd_T5g) { 
let elRNI7c = eo('div','R6if',null,`class`,`alert alert-danger`);
text(eldkM8D.formHandler.getError(`firstName`));
ec('div');
}let el16Di3 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.lastName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eldkM8D.formHandler.addError(`lastName`, 'required', trans('validation.required'));}return eldkM8D.formHandler.removeError(`lastName`);}]},`value`,`${fval(component.user.lastName)}`,`name`,`${(`lastName`).toInputName()}`,`placeholder`,`${trans(`Last name`)}`,`type`,`text`,`class`,`form-control d-inline-block`,`id`,`lastName`);
el16Di3.value = fval(component.user.lastName);
let cndtI9F = eldkM8D.formHandler.getError(`lastName`);
this.setState('sttHbJr', cndtI9F);
if (cndtI9F) { 
let el1PnFm = eo('div','LA6f',null,`class`,`alert alert-danger`);
text(eldkM8D.formHandler.getError(`lastName`));
ec('div');
}let elL8yrM = ev('input',null,null,`name`,`${(`name`).toInputName()}`,`type`,`hidden`,`value`,`${ (component.user.firstName + ' ' + component.user.lastName) || component.user.name }`);
ec('div');
let elWAlhz = eo('div',null,null,`class`,`m-y-1`);
let elAecEC = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn blue bold save-btn`);
text(`Save changes`);
ec('button');
let elMfniI = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn white black-text bold`);
text(`Close`);
ec('button');
ec('div');
}let cndUChA = component.editMode == 'name' && ! component.inEditMode && ! component.requireNameChange();
this.setState('stIBfe_', cndUChA);
if (cndUChA) { 
let elijreE = eo('button','b_nf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'name'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elGX9Pl = eo('i','ronf',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('div');
let cmp3RnR = this._lc('cdb_6AObf', {parent:component,parentTop:layout,props:{coins:component.user.gold}});
ec('div');
let elNxbah = eo('div',null,null,`id`,`totals`,`class`,`text-center`);
let el_1wFn = eo('section',null,null,`class`,`profile-box pb-5 mb-5`);
let elEjgAy = eo('header',null,null,`class`,`col-12 profile-box-header m-b-5`);
let elcPx7B = eo('h1',null,null,`class`,`pl-5 my-0`);
text(`General Overview`);
ec('h1');
let elz9HAE = eo('span',null,null,`class`,`profile-box-header-line`);
ec('span');
ec('header');
let elyBDx7 = eo('div',null,null,`class`,`row m-t-5 mx-0`);
let elrIgC0 = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpAq02 = this._lc('cf1cjg9ie', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'tracks', '')},attrs:{class:'total-summary bold teal-border'}});
let elxhug0 = eo('div',null,null,`class`,`btn btn-sm btn-teal bold`);
text(`Academy tracks`);
ec('div');
ec('div');
let el8ZztC = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpzISd = this._lc('cpfbB_WtW', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.all', '')},attrs:{class:'total-summary bold navy-border'}});
let elUftiC = eo('div',null,null,`class`,`btn btn-sm btn-navy bold`);
text(`Academy answers`);
ec('div');
ec('div');
let elCXcwJ = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpeHOI = this._lc('ccnL7cLoV', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.all', '')},attrs:{class:'total-summary bold purple-border'}});
let el7eX9i = eo('div',null,null,`class`,`btn btn-sm btn-purple bold`);
text(`Einstein puzzles`);
ec('div');
ec('div');
let eljssmb = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpTa3I = this._lc('cBNDNbnho', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'invitations', '') || 0},attrs:{class:'total-summary bold lime-border'}});
let elkO_xy = eo('div',null,null,`class`,`btn btn-sm btn-lime bold`);
text(`Invitations`);
ec('div');
ec('div');
ec('div');
ec('section');
let elfLjPi = eo('section',null,null,`class`,`profile-box py-5 my-5`);
let eleQ7rN = eo('header',null,null,`class`,`col-12 m-b-5 profile-box-header`);
let elebLG5 = eo('h1',null,null,`class`,`pl-5 my-0`);
text(`Academy`);
ec('h1');
let elUcWxa = eo('span',null,null,`class`,`profile-box-header-line`);
ec('span');
ec('header');
let elHKxXb = eo('div',null,null,`class`,`row m-t-5`);
let elE4bB2 = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpUEZH = this._lc('cmjZN_MwM', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'tracks', '')},attrs:{class:'total-summary bold light-gray-border'}});
let elwUuwz = eo('div',null,null,`class`,`btn btn-sm btn-light-gray bold`);
text(`Unlocked tracks`);
ec('div');
ec('div');
let el9EzuV = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpkWSU = this._lc('cpNO4y0u7', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.approved', '')},attrs:{class:'total-summary bold success-border'}});
let elfDniG = eo('div',null,null,`class`,`btn btn-sm btn-success bold`);
text(`Approved answers`);
ec('div');
ec('div');
let elDFw2B = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpSXTo = this._lc('cx4FtfDf5', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.pending', '')},attrs:{class:'total-summary bold warning-border'}});
let elS_XhC = eo('div',null,null,`class`,`btn btn-sm btn-warning bold`);
text(`Pending answers`);
ec('div');
ec('div');
let el8i7Cg = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpEB1h = this._lc('c9MwO1jBM', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.rejected', '')},attrs:{class:'total-summary bold danger-border'}});
let elZjzL5 = eo('div',null,null,`class`,`btn btn-sm btn-danger bold`);
text(`Rejected answers`);
ec('div');
ec('div');
ec('div');
ec('section');
let elKVX0j = eo('section',null,null,`class`,`profile-box py-5 my-5`);
let el_yNdQ = eo('header',null,null,`class`,`col-12 m-b-5 profile-box-header`);
let el3XJbM = eo('h1',null,null,`class`,`pl-5 my-0`);
text(`Einstein Chamber`);
ec('h1');
let elt573z = eo('span',null,null,`class`,`profile-box-header-line`);
ec('span');
ec('header');
let el86X4h = eo('div',null,null,`class`,`row m-t-5`);
let elThuxA = eo('div',null,null,`class`,`col-sm-3`);
let cmpXvJo = this._lc('c7YEv9mU6', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.categories', 0)},attrs:{class:'total-summary bold pencil-border'}});
let elncu1c = eo('div',null,null,`class`,`btn btn-sm btn-pencil bold`);
text(`Unlocked categories`);
ec('div');
ec('div');
let ello37a = eo('div',null,null,`class`,`col-sm-3`);
let cmp9bbx = this._lc('c3xqt6iEv', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.approved', 0)},attrs:{class:'total-summary bold emerald-border'}});
let eltipar = eo('div',null,null,`class`,`btn btn-sm btn-emerald bold`);
text(`Approved`);
ec('div');
ec('div');
let elnP_bL = eo('div',null,null,`class`,`col-sm-3`);
let cmpZo7M = this._lc('ccVO84oKR', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.pending', 0)},attrs:{class:'total-summary bold dark-warning-border'}});
let el11a_M = eo('div',null,null,`class`,`btn btn-sm btn-dark-warning bold`);
text(`Pending`);
ec('div');
ec('div');
let eluX_gF = eo('div',null,null,`class`,`col-sm-3`);
let cmpCSQc = this._lc('cXZu5eJzZ', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.rejected', 0)},attrs:{class:'total-summary bold dark-danger-border'}});
let el8INiZ = eo('div',null,null,`class`,`btn btn-sm btn-dark-danger bold`);
text(`Rejected`);
ec('div');
ec('div');
ec('div');
ec('section');
ec('div');
ec('section');
ec('div');
let ellhQwv = eo('div',null,null,`class`,`tab-pane fade`,`id`,`account-info-tab`,`role`,`tabpanel`,`aria-labelledby`,`account-info-tab`);
let el_2lio = eo('section',null,null,`id`,`profile-settings-tab`);
let elkacpF = eo('table',null,null,`class`,`table table-bordered`);
let elGs30e = eo('tbody');
let elF65Jk = eo('tr');
let el4zMro = eo('th');
text(`Account id`);
ec('th');
let eljt1Yf = eo('td');
text(component.user.id);
ec('td');
ec('tr');
let elrPLZN = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'email'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let eltivQk = eo('th');
text(`Email address`);
ec('th');
let el5mg2a = eo('td');
let cndvXl4 = component.inEditMode != 'email';
this.setState('stDfmBp', cndvXl4);
let cndWGgd = !(cndvXl4);
this.setState('stdr0fP', cndWGgd);
if (cndvXl4) { 
let elshOWz = eo('span','f1Mf');
text(component.user.email);
ec('span');
}else { 
let elpCYS1 = eo('div',null,null,`class`,`row`);
let elyGizx = eo('div',null,null,`class`,`col-9`);
let elNqYPX = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eldkM8D.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return eldkM8D.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return eldkM8D.formHandler.removeError(`email`);}]},`value`,`${fval(component.user.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Email address`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
elNqYPX.value = fval(component.user.email);
let cndyw8a = eldkM8D.formHandler.getError(`email`);
this.setState('stDUWoV', cndyw8a);
if (cndyw8a) { 
let elxUMcO = eo('div','vSDf',null,`class`,`alert alert-danger`);
text(eldkM8D.formHandler.getError(`email`));
ec('div');
}ec('div');
let elIJRsn = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let elz66kW = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elfknk_ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cndp56I = component.editMode == 'email' && ! component.inEditMode;
this.setState('sthGutM', cndp56I);
if (cndp56I) { 
let elhAiLv = eo('button','sU2f',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'email'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elYtV_1 = eo('i','2HXf',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let elAoTb4 = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'username'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elCUYrY = eo('th');
text(`Username`);
ec('th');
let elG4Ee4 = eo('td');
let cndYO_i = component.inEditMode != 'username';
this.setState('stMcGWc', cndYO_i);
let cnd5yS8 = !(cndYO_i);
this.setState('st91zbj', cnd5yS8);
if (cndYO_i) { 
let elJLBWS = eo('span','7_lf');
text(component.user.username || 'N/a');
ec('span');
}else { 
let el4XezO = eo('div',null,null,`class`,`row`);
let el4EUkw = eo('div',null,null,`class`,`col-9`);
text(`@`);
let elXrIa9 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.username = this.value;},function(e) {var $el = this;component.validateUserName($el.value)}]},`value`,`${fval(component.user.username)}`,`name`,`${(`username`).toInputName()}`,`placeholder`,`${trans(`username`)}`,`type`,`text`,`class`,`username-input`,`id`,`username`);
elXrIa9.autocomplete = elXrIa9.name == 'password' && Is.browser('chrome') ? 'new-password' : 'off';
elXrIa9.value = fval(component.user.username);
let cndqiMo = component.errors.username;
this.setState('stWHcJx', cndqiMo);
if (cndqiMo) { 
let elAXtBH = eo('span','_xMf',null,`class`,`red-text bold`);
text(component.errors.username);
ec('span');
}ec('div');
let elsFbsA = eo('div',null,null,`class`,`col-3 p-0`);
let elXRKsW = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elKFYKc = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
let elMvj4C = eo('div',null,null,`class`,`row m-0`);
let eltZEJT = eo('div',null,null,`class`,`col`);
let elj4Ka5 = eo('div',null,null,`class`,`bold`);
text(`Username creation criteria`);
ec('div');
let elg2wY9 = eo('small');
text(`Must starts with English letter (lowercase).`);
let elXtNX0 = ev('br');
text(`Can contain only English letters, Numbers, dot or underscore.`);
let elopIFH = ev('br');
text(`No more than one dot or underscore can be written after each other.`);
let elVmlhW = ev('br');
text(`No whitespaces allowed.`);
let elafKCE = ev('br');
ec('small');
ec('div');
ec('div');
ec('div');
}let cndzRou = component.editMode == 'username' && ! component.inEditMode;
this.setState('stc0tAW', cndzRou);
if (cndzRou) { 
let elXfG9M = eo('button','CrMf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'username'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elHaFTa = eo('i','d_5f',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let elmin6i = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'gender'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elUQlrE = eo('th');
text(`Gender`);
ec('th');
let elHiea8 = eo('td');
let cndy9dg = component.inEditMode != 'gender';
this.setState('stMNf0d', cndy9dg);
let cndSMeZ = !(cndy9dg);
this.setState('stlgWEp', cndSMeZ);
if (cndy9dg) { 
let elwvn36 = eo('span','2eHf',null,`class`,`text-capitalize`);
text(component.user.gender || 'N/a');
ec('span');
}else { 
let elCIvQ1 = eo('div',null,null,`class`,`row`);
let elJ7m2e = eo('div',null,null,`class`,`col-9`);
let cmpraIH = this._lc('cP9xhvnOL', {parent:component,parentTop:layout,props:{value:component.user.gender,items:['male', 'female'],required:true},attrs:{name:`${(`gender`).toInputName()}`},state:'stlgWEp'});
let cndM8vP = component.errors.gender;
this.setState('sthxZ68', cndM8vP);
if (cndM8vP) { 
let elBhxVh = eo('span','KZEf',null,`class`,`red-text bold`);
text(component.errors.gender);
ec('span');
}ec('div');
let el4laXY = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let elktB_z = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elXAjPI = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cndZeoN = component.editMode == 'gender' && ! component.inEditMode;
this.setState('stJNDaY', cndZeoN);
if (cndZeoN) { 
let elMmMVD = eo('button','w2Kf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'gender'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elZJUbG = eo('i','NQ1f',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let el6JPBu = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'homePage'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let el9dZ2D = eo('th');
text(`Home Page`);
ec('th');
let elAQ4cg = eo('td');
let cnd4O9q = component.inEditMode != 'homePage';
this.setState('stUqVeu', cnd4O9q);
let cndi2x6 = !(cnd4O9q);
this.setState('stfh3U4', cndi2x6);
if (cnd4O9q) { 
let el14UTd = eo('span','FPof',null,`class`,`text-capitalize`);
text(component.user.homePage ? component.homePages[component.user.homePage] : 'N/a');
ec('span');
}else { 
let elbUDHA = eo('div',null,null,`class`,`row`);
let elHTnOa = eo('div',null,null,`class`,`col-9`);
let cmp4ZTj = this._lc('c02TWdGA6', {parent:component,parentTop:layout,props:{value:component.user.homePage,items:component.homePages,required:true},attrs:{name:`${(`homePage`).toInputName()}`},state:'stfh3U4'});
let cndrsJM = component.errors.homePage;
this.setState('stLw5uz', cndrsJM);
if (cndrsJM) { 
let elhpYB7 = eo('span','QLEf',null,`class`,`red-text bold`);
text(component.errors.homePage);
ec('span');
}ec('div');
let elmbhwB = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let elvpjY5 = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elbtlVe = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cndMw5p = component.editMode == 'homePage' && ! component.inEditMode;
this.setState('stcPDew', cndMw5p);
if (cndMw5p) { 
let el3yluk = eo('button','Mipf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'homePage'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let eljRDzr = eo('i','dCPf',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let eluE9YC = eo('tr');
let el9U9gS = eo('th');
text(`Joined`);
ec('th');
let elA_hZz = eo('td');
let cmpyzdl = this._lc('cP3MlEb0p', {parent:component,parentTop:layout,props:{timestamp:component.user.createdAt.timestamp}});
ec('td');
ec('tr');
let elGgM94 = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'mobile'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elaZ1_o = eo('th');
text(`Mobile number`);
ec('th');
let elgURe5 = eo('td');
let cndpvC9 = component.inEditMode != 'mobile';
this.setState('stEbMf8', cndpvC9);
let cnddlQY = !(cndpvC9);
this.setState('stbmDXI', cnddlQY);
if (cndpvC9) { 
let eldvcgW = eo('span','nqdf');
text(component.user.mobile || 'N/a');
ec('span');
}else { 
let eldoyaF = eo('div',null,null,`class`,`row`);
let eltVFma = eo('div',null,null,`class`,`col-9`);
let elfUwRf = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.mobile = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eldkM8D.formHandler.addError(`mobile`, 'required', trans('validation.required'));}return eldkM8D.formHandler.removeError(`mobile`);}]},`value`,`${fval(component.user.mobile)}`,`name`,`${(`mobile`).toInputName()}`,`placeholder`,`${trans(`Mobile number`)}`,`type`,`text`,`class`,`form-control`,`id`,`mobile`);
elfUwRf.value = fval(component.user.mobile);
let cnd9plG = eldkM8D.formHandler.getError(`mobile`);
this.setState('st9AolH', cnd9plG);
if (cnd9plG) { 
let elJhCEr = eo('div','Sjsf',null,`class`,`alert alert-danger`);
text(eldkM8D.formHandler.getError(`mobile`));
ec('div');
}ec('div');
let elhIyWM = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let elWHlmC = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elCNibf = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cndgvWG = component.editMode == 'mobile' && ! component.inEditMode;
this.setState('stmvSRK', cndgvWG);
if (cndgvWG) { 
let elncZPH = eo('button','Toxf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'mobile'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elhNtQq = eo('i','Bvhf',null,`class`,`${fas('pen') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
ec('tbody');
ec('table');
ec('section');
ec('div');
let elW4ddq = eo('div',null,null,`class`,`tab-pane fade`,`id`,`academy-tracks-tab`,`role`,`tabpanel`,`aria-labelledby`,`academy-tracks-tab`);
let cndG3zf = component.isLoading;
this.setState('stIkDyT', cndG3zf);
let cndktYf = !(cndG3zf);
this.setState('stBeudm', cndktYf);
if (cndG3zf) { 
let cmpRyvR = this._lc('c6oPWrH4x', {parent:component,parentTop:layout,state:'stIkDyT'});
}else { 
let elkBYrC = eo('div');
let eln6iKP = eo('h1',null,null,`class`,`text-center m-y-1`);
text(`Your subscribed academy tracks`);
ec('h1');
let elNVGaW = eo('div',null,null,`class`,`row`);
for (let i in component.tracks) {
let track = component.tracks[i]; 
 let iiHWLr = 'uGM8Tof' + i;
let cmpyawM = this._lc('cnSircXZi', {parent:component,parentTop:layout,props:{track:track},attrs:{class:'col-lg-3 col-md-6'},state:'stBeudm',insideLoop:true,index:"" +iiHWLr});
}
ec('div');
ec('div');
}ec('div');
let elmleMA = eo('div',null,null,`class`,`tab-pane fade`,`id`,`einstein-categories-tab`,`role`,`tabpanel`,`aria-labelledby`,`einstein-categories-tab`);
let cndHfa9 = component.isLoading;
this.setState('stZWxBX', cndHfa9);
let cnd4738 = !(cndHfa9);
this.setState('starnRB', cnd4738);
if (cndHfa9) { 
let cmpmxC7 = this._lc('c35rqo1Sj', {parent:component,parentTop:layout,state:'stZWxBX'});
}else { 
let elocCOa = eo('div');
let ela6CN4 = eo('h1',null,null,`class`,`text-center m-y-1`);
text(`Einstein Chamber categories`);
ec('h1');
let el_o6_B = eo('div',null,null,`class`,`row`);
for (let i in component.einsteinCategories) {
let category = component.einsteinCategories[i]; 
 let iiPlMK = 'zfHFllz' + i;
let elj8Qjp = eo('div','M_4oN2ZyCK3A' + i+iiPlMK,null,`class`,`col-3`);
let cmp5j09 = this._lc('cD217PEiE', {parent:component,parentTop:layout,props:{category:category},state:'starnRB',insideLoop:true,index:"" +iiPlMK});
ec('div');
}
ec('div');
ec('div');
}ec('div');
let elZbu_Z = eo('div',null,null,`class`,`tab-pane fade`,`id`,`affiliate-tab`,`role`,`tabpanel`,`aria-labelledby`,`affiliate-tab`);
let elCNW3o = eo('div',null,null,`id`,`affiliate`);
let elR4ThH = eo('h1');
text(`Affiliate URL`);
ec('h1');
let elvnqiI = eo('div',null,null,`class`,`m-t-1`);
let elGexP4 = eo('a',null,null,`class`,`bold teal-text mx-2`,`target`,`_blank`,`href`,`${ component.affiliateUrl }`);
text(`Click on the
            following
            icon to copy your affiliate url.`);
ec('a');
let cnd_2bf = ! component.copied;
this.setState('stYGN_w', cnd_2bf);
if (cnd_2bf) { 
let elaPvvE = eo('button','K9Mf',null, eventListeners, {onclick:[function(e) {var $el = this;copyToClipboard(component.affiliateUrl); component.copied = true;}]},`title`,`${trans(`Copy`)}`,`class`,`text-primary`,`type`,`button`);
text(`(`);
let elle6uO = eo('i','lNFf',null,`class`,`${fas('object-ungroup') + ' icon'}`);
ec('i');
text(`)`);
ec('button');
}let cndkUPf = component.copied;
this.setState('stzdbO1', cndkUPf);
if (cndkUPf) { 
let elN9cy0 = eo('strong','lWvf',null,`title`,`${trans(`Copied`)}`,`class`,`green-text ml-2`);
let el7yc01 = eo('i','w8rf',null,`class`,`${fas('check') + ' icon'}`);
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
let cndI3ZD = component.updateMessage;
this.setState('stmUzQl', cndI3ZD);
if (cndI3ZD) { 
let cmpjcGi = this._lc('cQ8wR_hFt', {parent:component,props:{html:component.updateMessage},events:{onclose:function(e) {let $el = this; component.updateMessage = null}},content:(flkMessage) => {text(component.updateMessage);
},state:'stmUzQl'});
}
                    this.isReadyToGo();
                }
        });