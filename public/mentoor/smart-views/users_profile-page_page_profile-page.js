_Component({
                selector: 'profile-page',
                c: 'ProfilePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['updateProfile','user','loadTracks','loadEinsteinCategories','updateMessage','requireNameChange','isUpdating','editMode','form','getUserImage','inEditMode','validateUserName','errors','homePages','isLoading','tracks','einsteinCategories','affiliateUrl','copied'],
                children: {cLivjVZU9:'flk-image-input',ccHAMbMP8:'gold-icon',cMzYt0UfL:'flk-number-counter',cJTYp_dQN:'flk-number-counter',c4tbJayQc:'flk-number-counter',cxxopJm5f:'flk-number-counter',c_51iqNcf:'flk-number-counter',cDtxtYKNG:'flk-number-counter',ceSm2f1wX:'flk-number-counter',cVwl9tY_y:'flk-number-counter',clCPLBixS:'flk-number-counter',cAVcuOBd8:'flk-number-counter',cCUhP85di:'flk-number-counter',cVYzJLy7_:'flk-number-counter',cKPG8J2HK:'flk-dropdown-list',cM3trz4zC:'flk-dropdown-list',cAj0Z43k8:'flk-time-ago',c7wwOMuAY:'flk-spinner',cHypCb6uR:'track-card',c5HHn79Fo:'flk-spinner',cXUMamU2F:'einstein-category-card',cN820B4rA:'layout',c1aVCGkFG:'flk-message'},
                render: function (component) {
                    let cmpdSNT = this._lc('cN820B4rA', {parent:component,content:(layout) => {let elpBo4B = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.updateProfile($el)}]});
component.form = elpBo4B;

                if (! elpBo4B.formHandler) {
                    window.cfrmdlr = elpBo4B.formHandler = new FormHandler(elpBo4B, component);
                } else {
                    window.cfrmdlr = elpBo4B.formHandler;
                }
            let elOgzIV = eo('div',null,null,`class`,`rows`);
let eljbBGs = eo('ul',null,null,`class`,`nav nav-tabs`);
let el782dK = eo('li',null,null,`class`,`nav-item`);
let elBY_eD = eo('a',null,null,`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#overview-tab`);
let elD3Aar = eo('i',null,null,`class`,`${fas('street-view')} mr-1 icon`);
ec('i');
text(`Overview`);
ec('a');
ec('li');
let elKPO_Q = eo('li',null,null,`class`,`nav-item`);
let el0UXi3 = eo('a',null,null,`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#account-info-tab`);
let elSJyUn = eo('i',null,null,`class`,`${fas('user')} mr-1 icon`);
ec('i');
text(`Account info`);
ec('a');
ec('li');
let cndBTdL = component.user.total.tracks > 0;
this.setState('stHPiY3', cndBTdL);
if (cndBTdL) { 
let elVdFrE = eo('li','2W1f',null,`class`,`nav-item`);
let elWSwnU = eo('a','GFof',null, eventListeners, {onclick:[function(e) {var $el = this;component.loadTracks()}]},`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#academy-tracks-tab`);
let elFzz6U = eo('i','MpUf',null,`class`,`${fas('university')} mr-1 icon`);
ec('i');
text(`Academy tracks`);
let elEb8V0 = eo('span','Vnjf',null,`class`,`badge total-answers badge-success`);
text(component.user.total.tracks);
ec('span');
ec('a');
ec('li');
}let cndTVbK = Object.get(component.user.total, 'einstein.categories') > 0;
this.setState('stCGfX4', cndTVbK);
if (cndTVbK) { 
let elg9mQk = eo('li','j4If',null,`class`,`nav-item`);
let elu_Svd = eo('a','nIVf',null, eventListeners, {onclick:[function(e) {var $el = this;component.loadEinsteinCategories()}]},`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#einstein-categories-tab`);
let elJaKCU = ev('img','aYuf',null,`src`,`${assets('images/ein-sm.png')}`,`class`,`einstein-icon`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
text(`Einstein categories`);
let elfkfn2 = eo('span','ro4f',null,`class`,`badge total-answers btn-purple`);
text(component.user.total.einstein.categories);
ec('span');
ec('a');
ec('li');
}let elzgO2e = eo('li',null,null,`class`,`nav-item`);
let elTUJa3 = eo('a',null,null,`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#affiliate-tab`);
let el1g1cd = eo('i',null,null,`class`,`${fas('user-plus')} mr-1 icon`);
ec('i');
text(`Affiliate program`);
ec('a');
ec('li');
ec('ul');
let elXTw7D = eo('div',null,null,`class`,`cols`);
let elMqLLl = eo('div',null,null,`class`,`tab-content`);
let elpKjSr = eo('div',null,null,`class`,`tab-pane fade`,`id`,`overview-tab`);
let elmMPF5 = eo('section',null,null,`id`,`profile-overview-tab`);
let cndfk8f = component.requireNameChange();
this.setState('ste4iTi', cndfk8f);
if (cndfk8f) { 
let eldIQSg = eo('div','8PEf',null,`class`,`overlay`);
ec('div');
}let elWzdju = eo('div',null,null,`class`,`text-center m-b-2`);
let elOXDlu = eo('div',null,null,`class`,`relative`);
let cmpRD4R = this._lc('cLivjVZU9', {parent:component,parentTop:layout,props:{disabled:component.isUpdating,src:component.getUserImage()},events:{onmouseover:function(e) {let $el = this; component.editMode = 'image'},onmouseout:function(e) {let $el = this; component.editMode = null},onchange:function(e) {let $el = this; component.updateProfile(component.form);}},boolAttrs:{disabled:component.isUpdating},attrs:{src:`${component.getUserImage()}`,name:`${(`image`).toInputName()}`}});
let cndoYUJ = component.user.username;
this.setState('sterNjt', cndoYUJ);
if (cndoYUJ) { 
let elYbGF3 = eo('span','atcf',null,`class`,`grey-text`);
text('@' + component.user.username);
ec('span');
}let cndQhMN = component.editMode == 'image';
this.setState('stoAVAi', cndQhMN);
if (cndQhMN) { 
let elutxWs = eo('span','6ihf',null,`class`,`new-tooltip`);
text(`Click to edit`);
ec('span');
}ec('div');
let elCJymh = eo('div',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'name'; component.editMode}],onmouseout:[function(e) {var $el = this;component.editMode = null}]},`class`,`m-t-2 relative name-change-wrapper`);
let cndJ0nt = component.requireNameChange();
this.setState('stROFBf', cndJ0nt);
let cndmKZq = component.inEditMode == 'name' || component.requireNameChange();
this.setState('stjyZBY', cndmKZq);
if (cndJ0nt) { 
let elr5lxW = eo('span','xi2f',null,`class`,`new-tooltip`);
text(`Add your last name`);
ec('span');
}let cnd1I2S = component.inEditMode != 'name' && ! component.requireNameChange();
this.setState('stFjvn2', cnd1I2S);
let cndN7fu = cndmKZq;
this.setState('stR5GLn', cndN7fu);
if (cnd1I2S) { 
let elWKU5x = eo('h1','NQhf',null,`class`,`d-inline-block`);
text(component.user.name);
ec('h1');
}else if (cndN7fu) { 
let elSsdJr = eo('div',null,null,`class`,`m-auto`,`id`,`name-change`);
let elPFJnG = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.firstName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elpBo4B.formHandler.addError(`firstName`, 'required', trans('validation.required'));}return elpBo4B.formHandler.removeError(`firstName`);}]},`value`,`${fval(component.user.firstName)}`,`name`,`${(`firstName`).toInputName()}`,`placeholder`,`${trans(`First name`)}`,`type`,`text`,`class`,`form-control d-inline-block`,`id`,`firstName`);
elPFJnG.value = fval(component.user.firstName);
let cndwJzx = elpBo4B.formHandler.getError(`firstName`);
this.setState('st48OaJ', cndwJzx);
if (cndwJzx) { 
let elIncfM = eo('div','EuUf',null,`class`,`alert alert-danger`);
text(elpBo4B.formHandler.getError(`firstName`));
ec('div');
}let el92XkV = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.lastName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elpBo4B.formHandler.addError(`lastName`, 'required', trans('validation.required'));}return elpBo4B.formHandler.removeError(`lastName`);}]},`value`,`${fval(component.user.lastName)}`,`name`,`${(`lastName`).toInputName()}`,`placeholder`,`${trans(`Last name`)}`,`type`,`text`,`class`,`form-control d-inline-block`,`id`,`lastName`);
el92XkV.value = fval(component.user.lastName);
let cndUzLU = elpBo4B.formHandler.getError(`lastName`);
this.setState('stUknu0', cndUzLU);
if (cndUzLU) { 
let elsSLmz = eo('div','bhYf',null,`class`,`alert alert-danger`);
text(elpBo4B.formHandler.getError(`lastName`));
ec('div');
}let elNERvx = ev('input',null,null,`name`,`${(`name`).toInputName()}`,`type`,`hidden`,`value`,`${ (component.user.firstName + ' ' + component.user.lastName) || component.user.name }`);
ec('div');
let el2lD2I = eo('div',null,null,`class`,`m-y-1`);
let elfi8jF = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn blue bold save-btn`);
text(`Save changes`);
ec('button');
let el6Wnz8 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn white black-text bold`);
text(`Close`);
ec('button');
ec('div');
}let cndXNnZ = component.editMode == 'name' && ! component.inEditMode && ! component.requireNameChange();
this.setState('stXqHZc', cndXNnZ);
if (cndXNnZ) { 
let el5aQec = eo('button','Fyjf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'name'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elIvbRO = eo('i','mkGf',null,`class`,`${fas('pen')} icon`);
ec('i');
text(`Edit`);
ec('button');
}ec('div');
let cmpIQn4 = this._lc('ccHAMbMP8', {parent:component,parentTop:layout,props:{coins:component.user.gold}});
ec('div');
let elHoZsk = eo('div',null,null,`id`,`totals`,`class`,`text-center`);
let elYUfpe = eo('section',null,null,`class`,`profile-box pb-5 mb-5`);
let elrO2xK = eo('header',null,null,`class`,`col-12 profile-box-header m-b-5`);
let elzGcJZ = eo('h1',null,null,`class`,`pl-5 my-0`);
text(`General Overview`);
ec('h1');
let el46Atd = eo('span',null,null,`class`,`profile-box-header-line`);
ec('span');
ec('header');
let elP9amJ = eo('div',null,null,`class`,`row m-t-5 mx-0`);
let elQZAiW = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpmYDQ = this._lc('cMzYt0UfL', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'tracks', '')},attrs:{class:'total-summary bold teal-border'}});
let elc8Lxb = eo('div',null,null,`class`,`btn btn-sm btn-teal bold`);
text(`Academy tracks`);
ec('div');
ec('div');
let eljcjBi = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpnzUq = this._lc('cJTYp_dQN', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.all', '')},attrs:{class:'total-summary bold navy-border'}});
let elAfOCG = eo('div',null,null,`class`,`btn btn-sm btn-navy bold`);
text(`Academy answers`);
ec('div');
ec('div');
let elou6Tb = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpkZL7 = this._lc('c4tbJayQc', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.all', '')},attrs:{class:'total-summary bold purple-border'}});
let elv7BnJ = eo('div',null,null,`class`,`btn btn-sm btn-purple bold`);
text(`Einstein puzzles`);
ec('div');
ec('div');
let elBIxmz = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpIZT6 = this._lc('cxxopJm5f', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'invitations', '') || 0},attrs:{class:'total-summary bold lime-border'}});
let el4Th9D = eo('div',null,null,`class`,`btn btn-sm btn-lime bold`);
text(`Invitations`);
ec('div');
ec('div');
ec('div');
ec('section');
let elNolDu = eo('section',null,null,`class`,`profile-box py-5 my-5`);
let eldqxDw = eo('header',null,null,`class`,`col-12 m-b-5 profile-box-header`);
let elSNczR = eo('h1',null,null,`class`,`pl-5 my-0`);
text(`Academy`);
ec('h1');
let elQdLZp = eo('span',null,null,`class`,`profile-box-header-line`);
ec('span');
ec('header');
let elq2G6R = eo('div',null,null,`class`,`row m-t-5`);
let elHeuse = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmppUJU = this._lc('c_51iqNcf', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'tracks', '')},attrs:{class:'total-summary bold light-gray-border'}});
let elDFqu_ = eo('div',null,null,`class`,`btn btn-sm btn-light-gray bold`);
text(`Unlocked tracks`);
ec('div');
ec('div');
let elHiCp9 = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmp2pn8 = this._lc('cDtxtYKNG', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.approved', '')},attrs:{class:'total-summary bold success-border'}});
let elEqZbC = eo('div',null,null,`class`,`btn btn-sm btn-success bold`);
text(`Approved answers`);
ec('div');
ec('div');
let elx2fVs = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmpdGSt = this._lc('ceSm2f1wX', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.pending', '')},attrs:{class:'total-summary bold warning-border'}});
let el0Rq9b = eo('div',null,null,`class`,`btn btn-sm btn-warning bold`);
text(`Pending answers`);
ec('div');
ec('div');
let el0NMlx = eo('div',null,null,`class`,`col-sm-4 col-md-3`);
let cmp6ZcO = this._lc('cVwl9tY_y', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'academy.answers.rejected', '')},attrs:{class:'total-summary bold danger-border'}});
let el_WtAu = eo('div',null,null,`class`,`btn btn-sm btn-danger bold`);
text(`Rejected answers`);
ec('div');
ec('div');
ec('div');
ec('section');
let elbGeOS = eo('section',null,null,`class`,`profile-box py-5 my-5`);
let elbiY8s = eo('header',null,null,`class`,`col-12 m-b-5 profile-box-header`);
let elt63C0 = eo('h1',null,null,`class`,`pl-5 my-0`);
text(`Einstein Chamber`);
ec('h1');
let eltInY6 = eo('span',null,null,`class`,`profile-box-header-line`);
ec('span');
ec('header');
let elYckHZ = eo('div',null,null,`class`,`row m-t-5`);
let elf898z = eo('div',null,null,`class`,`col-sm-3`);
let cmpvqtn = this._lc('clCPLBixS', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.categories', 0)},attrs:{class:'total-summary bold pencil-border'}});
let ellDzIX = eo('div',null,null,`class`,`btn btn-sm btn-pencil bold`);
text(`Unlocked categories`);
ec('div');
ec('div');
let elpjXs2 = eo('div',null,null,`class`,`col-sm-3`);
let cmpsX4T = this._lc('cAVcuOBd8', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.approved', 0)},attrs:{class:'total-summary bold emerald-border'}});
let elpfReY = eo('div',null,null,`class`,`btn btn-sm btn-emerald bold`);
text(`Approved`);
ec('div');
ec('div');
let elfmqgh = eo('div',null,null,`class`,`col-sm-3`);
let cmpWyV3 = this._lc('cCUhP85di', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.pending', 0)},attrs:{class:'total-summary bold dark-warning-border'}});
let elWbuY1 = eo('div',null,null,`class`,`btn btn-sm btn-dark-warning bold`);
text(`Pending`);
ec('div');
ec('div');
let el1ODML = eo('div',null,null,`class`,`col-sm-3`);
let cmpm6TO = this._lc('cVYzJLy7_', {parent:component,parentTop:layout,props:{number:Object.get(component.user.total, 'einstein.puzzles.rejected', 0)},attrs:{class:'total-summary bold dark-danger-border'}});
let elyujaq = eo('div',null,null,`class`,`btn btn-sm btn-dark-danger bold`);
text(`Rejected`);
ec('div');
ec('div');
ec('div');
ec('section');
ec('div');
ec('section');
ec('div');
let eleXh6k = eo('div',null,null,`class`,`tab-pane fade`,`id`,`account-info-tab`,`role`,`tabpanel`,`aria-labelledby`,`account-info-tab`);
let elQqd9V = eo('section',null,null,`id`,`profile-settings-tab`);
let elhhEuy = eo('table',null,null,`class`,`table table-bordered`);
let elSY2pc = eo('tbody');
let eldTm8K = eo('tr');
let el20TOo = eo('th');
text(`Account id`);
ec('th');
let elvxj5Y = eo('td');
text(component.user.id);
ec('td');
ec('tr');
let ely9G52 = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'email'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elo3yDm = eo('th');
text(`Email address`);
ec('th');
let elo51v7 = eo('td');
let cnd2osE = component.inEditMode != 'email';
this.setState('stVgNFA', cnd2osE);
let cnd1w6w = !(cnd2osE);
this.setState('staLnox', cnd1w6w);
if (cnd2osE) { 
let eldLW_3 = eo('span','B0Bf');
text(component.user.email);
ec('span');
}else { 
let el6rcBg = eo('div',null,null,`class`,`row`);
let ele6zu7 = eo('div',null,null,`class`,`col-9`);
let elMidwj = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elpBo4B.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elpBo4B.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elpBo4B.formHandler.removeError(`email`);}]},`value`,`${fval(component.user.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Email address`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
elMidwj.value = fval(component.user.email);
let cnd3X5t = elpBo4B.formHandler.getError(`email`);
this.setState('stywdu9', cnd3X5t);
if (cnd3X5t) { 
let elkOYGY = eo('div','S3_f',null,`class`,`alert alert-danger`);
text(elpBo4B.formHandler.getError(`email`));
ec('div');
}ec('div');
let elqh9de = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let ely7xT0 = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let el8MCqM = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cndWa5O = component.editMode == 'email' && ! component.inEditMode;
this.setState('stF0TKa', cndWa5O);
if (cndWa5O) { 
let el1mIpJ = eo('button','j4Mf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'email'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let eluwSeN = eo('i','Xqrf',null,`class`,`${fas('pen')} icon`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let elko6bg = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'username'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elSZ5Xf = eo('th');
text(`Username`);
ec('th');
let elqc9wk = eo('td');
let cnd_xtc = component.inEditMode != 'username';
this.setState('stnw9WJ', cnd_xtc);
let cnd7Gi4 = !(cnd_xtc);
this.setState('st13gDV', cnd7Gi4);
if (cnd_xtc) { 
let el2YuZ7 = eo('span','A_uf');
text(component.user.username || 'N/a');
ec('span');
}else { 
let elFAXXk = eo('div',null,null,`class`,`row`);
let elrIxkd = eo('div',null,null,`class`,`col-9`);
text(`@`);
let elgVHrA = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.username = this.value;},function(e) {var $el = this;component.validateUserName($el.value)}]},`value`,`${fval(component.user.username)}`,`name`,`${(`username`).toInputName()}`,`placeholder`,`${trans(`username`)}`,`type`,`text`,`class`,`username-input`,`id`,`username`);
elgVHrA.autocomplete = elgVHrA.name == 'password' && Is.browser('chrome') ? 'new-password' : 'off';
elgVHrA.value = fval(component.user.username);
let cnd9nBv = component.errors.username;
this.setState('stuw_yX', cnd9nBv);
if (cnd9nBv) { 
let el94xIm = eo('span','Ucaf',null,`class`,`red-text bold`);
text(component.errors.username);
ec('span');
}ec('div');
let eliskDv = eo('div',null,null,`class`,`col-3 p-0`);
let elgauR2 = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elBdSMh = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
let elPl_b8 = eo('div',null,null,`class`,`row m-0`);
let elHHrHN = eo('div',null,null,`class`,`col`);
let elf4KgW = eo('div',null,null,`class`,`bold`);
text(`Username creation criteria`);
ec('div');
let elbvZsr = eo('small');
text(`Must starts with English letter (lowercase).`);
let elGvw4J = ev('br');
text(`Can contain only English letters, Numbers, dot or underscore.`);
let elIdpnm = ev('br');
text(`No more than one dot or underscore can be written after each other.`);
let elvfqzI = ev('br');
text(`No whitespaces allowed.`);
let elkjjVX = ev('br');
ec('small');
ec('div');
ec('div');
ec('div');
}let cnd_WtQ = component.editMode == 'username' && ! component.inEditMode;
this.setState('stL6HCv', cnd_WtQ);
if (cnd_WtQ) { 
let el4DG8k = eo('button','Gfcf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'username'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elIuCKg = eo('i','KH5f',null,`class`,`${fas('pen')} icon`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let elxfH6Y = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'gender'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elOPm6p = eo('th');
text(`Gender`);
ec('th');
let elD0B9Q = eo('td');
let cndPiuw = component.inEditMode != 'gender';
this.setState('stt0N4T', cndPiuw);
let cnddukR = !(cndPiuw);
this.setState('stHudZd', cnddukR);
if (cndPiuw) { 
let eliduOL = eo('span','NC3f',null,`class`,`text-capitalize`);
text(component.user.gender || 'N/a');
ec('span');
}else { 
let elptffk = eo('div',null,null,`class`,`row`);
let elMUAc5 = eo('div',null,null,`class`,`col-9`);
let cmpnRQc = this._lc('cKPG8J2HK', {parent:component,parentTop:layout,props:{value:component.user.gender,items:['male', 'female'],required:true},attrs:{name:`${(`gender`).toInputName()}`},state:'stHudZd'});
let cnd8cl7 = component.errors.gender;
this.setState('st72v5x', cnd8cl7);
if (cnd8cl7) { 
let elXI6T0 = eo('span','u5Pf',null,`class`,`red-text bold`);
text(component.errors.gender);
ec('span');
}ec('div');
let elZuxiO = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let elXCvQh = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let el0nIXI = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cndGQcv = component.editMode == 'gender' && ! component.inEditMode;
this.setState('stKBQJZ', cndGQcv);
if (cndGQcv) { 
let elP4uw4 = eo('button','3DQf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'gender'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elIGXhP = eo('i','kTIf',null,`class`,`${fas('pen')} icon`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let elnJX1W = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'homePage'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elG2GO3 = eo('th');
text(`Home Page`);
ec('th');
let elrdRPB = eo('td');
let cndiB6Q = component.inEditMode != 'homePage';
this.setState('st7U7OA', cndiB6Q);
let cndauqh = !(cndiB6Q);
this.setState('stYss8S', cndauqh);
if (cndiB6Q) { 
let elDGQIM = eo('span','LUof',null,`class`,`text-capitalize`);
text(component.user.homePage ? component.homePages[component.user.homePage] : 'N/a');
ec('span');
}else { 
let elEe374 = eo('div',null,null,`class`,`row`);
let elxdXB5 = eo('div',null,null,`class`,`col-9`);
let cmpuW2C = this._lc('cM3trz4zC', {parent:component,parentTop:layout,props:{value:component.user.homePage,items:component.homePages,required:true},attrs:{name:`${(`homePage`).toInputName()}`},state:'stYss8S'});
let cndrtkf = component.errors.homePage;
this.setState('sti373U', cndrtkf);
if (cndrtkf) { 
let elz9gBn = eo('span','x24f',null,`class`,`red-text bold`);
text(component.errors.homePage);
ec('span');
}ec('div');
let elgFiSD = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let el9TVYO = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let ellHDwo = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cnd3OEo = component.editMode == 'homePage' && ! component.inEditMode;
this.setState('st4HVtR', cnd3OEo);
if (cnd3OEo) { 
let el1O8Kk = eo('button','K8zf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'homePage'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elWh25U = eo('i','RYGf',null,`class`,`${fas('pen')} icon`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
let elcPozW = eo('tr');
let eldhGKc = eo('th');
text(`Joined`);
ec('th');
let elfWGfg = eo('td');
let cmpP4Hv = this._lc('cAj0Z43k8', {parent:component,parentTop:layout,props:{timestamp:component.user.createdAt.timestamp}});
ec('td');
ec('tr');
let elpNd0L = eo('tr',null,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.editMode = 'mobile'}],onmouseout:[function(e) {var $el = this;component.editMode = null}]});
let elDYtoi = eo('th');
text(`Mobile number`);
ec('th');
let elWXTJM = eo('td');
let cndrSgu = component.inEditMode != 'mobile';
this.setState('st8IO1x', cndrSgu);
let cndfLwh = !(cndrSgu);
this.setState('stvUoZh', cndfLwh);
if (cndrSgu) { 
let el5Axfb = eo('span','Q4Nf');
text(component.user.mobile || 'N/a');
ec('span');
}else { 
let elgESjq = eo('div',null,null,`class`,`row`);
let elxiJ1b = eo('div',null,null,`class`,`col-9`);
let elafG2j = ev('input',null,null, eventListeners, {oninput:[function(e) {component.user.mobile = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elpBo4B.formHandler.addError(`mobile`, 'required', trans('validation.required'));}return elpBo4B.formHandler.removeError(`mobile`);}]},`value`,`${fval(component.user.mobile)}`,`name`,`${(`mobile`).toInputName()}`,`placeholder`,`${trans(`Mobile number`)}`,`type`,`text`,`class`,`form-control`,`id`,`mobile`);
elafG2j.value = fval(component.user.mobile);
let cndk6j4 = elpBo4B.formHandler.getError(`mobile`);
this.setState('stx0hBI', cndk6j4);
if (cndk6j4) { 
let elsqMKN = eo('div','5eEf',null,`class`,`alert alert-danger`);
text(elpBo4B.formHandler.getError(`mobile`));
ec('div');
}ec('div');
let eliIoRN = eo('div',null,null,`class`,`col-3 p-0 mt-2`);
let elsBGBF = eo('button',null,null, boolAttrs, {disabled:component.isUpdating},`class`,`btn btn-info bold save-btn btn-sm`);
text(`Save
                                changes`);
ec('button');
let elwK3Oc = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`btn gray black-text bold btn-sm`);
text(`Close`);
ec('button');
ec('div');
ec('div');
}let cnd0Fiu = component.editMode == 'mobile' && ! component.inEditMode;
this.setState('stChvyP', cnd0Fiu);
if (cnd0Fiu) { 
let el8nFdL = eo('button','12jf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = 'mobile'}]}, boolAttrs, {disabled:component.isUpdating},`type`,`button`,`class`,`edit-btn`);
let elKwfnO = eo('i','ucyf',null,`class`,`${fas('pen')} icon`);
ec('i');
text(`Edit`);
ec('button');
}ec('td');
ec('tr');
ec('tbody');
ec('table');
ec('section');
ec('div');
let elR3LXB = eo('div',null,null,`class`,`tab-pane fade`,`id`,`academy-tracks-tab`,`role`,`tabpanel`,`aria-labelledby`,`academy-tracks-tab`);
let cndqzBo = component.isLoading;
this.setState('stNEA3y', cndqzBo);
let cndCIFR = !(cndqzBo);
this.setState('stT23rL', cndCIFR);
if (cndqzBo) { 
let cmpdqsY = this._lc('c7wwOMuAY', {parent:component,parentTop:layout,state:'stNEA3y'});
}else { 
let elrcxta = eo('div');
let elEJHZW = eo('h1',null,null,`class`,`text-center m-y-1`);
text(`Your subscribed academy tracks`);
ec('h1');
let elC1ew6 = eo('div',null,null,`class`,`row`);
for (let i in component.tracks) {
let track = component.tracks[i]; 
 let iifTL7 = '0nfaOzk' + i;
let cmpbXEX = this._lc('cHypCb6uR', {parent:component,parentTop:layout,props:{track:track},attrs:{class:'col-lg-3 col-md-6'},state:'stT23rL',insideLoop:true,index:"" +iifTL7});
}
ec('div');
ec('div');
}ec('div');
let elJCllp = eo('div',null,null,`class`,`tab-pane fade`,`id`,`einstein-categories-tab`,`role`,`tabpanel`,`aria-labelledby`,`einstein-categories-tab`);
let cnd4sPP = component.isLoading;
this.setState('stV6N4y', cnd4sPP);
let cnd2REs = !(cnd4sPP);
this.setState('stybDCL', cnd2REs);
if (cnd4sPP) { 
let cmpgx79 = this._lc('c5HHn79Fo', {parent:component,parentTop:layout,state:'stV6N4y'});
}else { 
let elSWGIr = eo('div');
let eluAiW4 = eo('h1',null,null,`class`,`text-center m-y-1`);
text(`Einstein Chamber categories`);
ec('h1');
let elDzpBR = eo('div',null,null,`class`,`row`);
for (let i in component.einsteinCategories) {
let category = component.einsteinCategories[i]; 
 let iiPKpI = 'hpyYA2E' + i;
let elZG7XB = eo('div','59NLqqgLIxt9' + i+iiPKpI,null,`class`,`col-3`);
let cmpt_f5 = this._lc('cXUMamU2F', {parent:component,parentTop:layout,props:{category:category},state:'stybDCL',insideLoop:true,index:"" +iiPKpI});
ec('div');
}
ec('div');
ec('div');
}ec('div');
let elk5dlV = eo('div',null,null,`class`,`tab-pane fade`,`id`,`affiliate-tab`,`role`,`tabpanel`,`aria-labelledby`,`affiliate-tab`);
let elVBz_2 = eo('div',null,null,`id`,`affiliate`);
let eluu4Tc = eo('h1');
text(`Affiliate URL`);
ec('h1');
let elmMhZZ = eo('div',null,null,`class`,`m-t-1`);
let elYd9BN = eo('a',null,null,`class`,`bold teal-text mx-2`,`target`,`_blank`,`href`,`${ component.affiliateUrl }`);
text(`Click on the
            following
            icon to copy your affiliate url.`);
ec('a');
let cndrVwA = ! component.copied;
this.setState('stBVJVt', cndrVwA);
if (cndrVwA) { 
let elK4l9z = eo('button','4QTf',null, eventListeners, {onclick:[function(e) {var $el = this;copyToClipboard(component.affiliateUrl); component.copied = true;}]},`title`,`${trans(`Copy`)}`,`class`,`text-primary`,`type`,`button`);
text(`(`);
let elrAlgv = eo('i','zADf',null,`class`,`${fas('object-ungroup')} icon`);
ec('i');
text(`)`);
ec('button');
}let cnddQHV = component.copied;
this.setState('stNrata', cnddQHV);
if (cnddQHV) { 
let elWs7kE = eo('strong','Dt9f',null,`title`,`${trans(`Copied`)}`,`class`,`green-text ml-2`);
let eliSAKn = eo('i','BSyf',null,`class`,`${fas('check')} icon`);
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
let cndp8X5 = component.updateMessage;
this.setState('stsIxi1', cndp8X5);
if (cndp8X5) { 
let cmpLuP1 = this._lc('c1aVCGkFG', {parent:component,props:{html:component.updateMessage},events:{onclose:function(e) {let $el = this; component.updateMessage = null}},content:(flkMessage) => {text(component.updateMessage);
},state:'stsIxi1'});
}
                    this.isReadyToGo();
                }
        });