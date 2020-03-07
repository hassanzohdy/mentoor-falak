_Component({
                selector: 'word-modal',
                c: 'WordModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','heading','submit','sent','type','category','slug','data','user','isValidForm','isSending','submitThenClear'],
                children: {cDNEkjmDV:'flk-checkbox',coPiC5Ipe:'flk-image-input',cm9dMEw_8:'flk-checkbox',cOd7DCkSp:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cOd7DCkSp', {parent:component,props:{header:component.heading},events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let elzN_aL = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});
component.form = elzN_aL;

                if (! elzN_aL.formHandler) {
                    window.cfrmdlr = elzN_aL.formHandler = new FormHandler(elzN_aL, component);
                } else {
                    window.cfrmdlr = elzN_aL.formHandler;
                }
            let el476OO = eo('p',null,null,`class`,`bold teal-text`);
text(`Your word will be previewed after submitting and you'll rewarded once approved.`);
ec('p');
let cndhdBU = component.sent === true;
this.setState('st966xc', cndhdBU);
let cndn7Fp = component.sent === false;
this.setState('stoUjpS', cndn7Fp);
let cndNt4H = !(cndhdBU||cndn7Fp);
this.setState('stv8Xez', cndNt4H);
if (cndhdBU) { 
let el5zEff = eo('div','OXUf',null,`class`,`alert alert-success bold`);
text(`Word has been submitted successfully.`);
ec('div');
}else if (cndn7Fp) { 
let elSApBh = eo('div',null,null,`class`,`alert alert-danger bold`);
text(`Word already exists.`);
ec('div');
}let elhdetw = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elhdetw.value = fval(component.type);
let cndbgHY = component.category;
this.setState('st94FRw', cndbgHY);
let cndeoBy = !(cndbgHY);
this.setState('st5YeXi', cndeoBy);
if (cndbgHY) { 
let elEpFUF = ev('input','UN3f',null, eventListeners, {oninput:[function(e) {component.category.id = this.value;}]},`value`,`${fval(component.category.id)}`,`name`,`${(`categoryId`).toInputName()}`,`type`,`hidden`);
elEpFUF.value = fval(component.category.id);
}let elwxpKn = ev('input',null,null, eventListeners, {oninput:[function(e) {component.slug = this.value;}]},`value`,`${fval(component.slug)}`,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`);
elwxpKn.value = fval(component.slug);
let cndYDFR = component.type == 'category';
this.setState('st0230J', cndYDFR);
let cndRVsg = !(cndYDFR);
this.setState('stmQ3Fp', cndRVsg);
if (cndYDFR) { 
let elkT0RU = eo('div','ffjf',null,`class`,`m-b-1`);
let el3d3Hl = eo('h2','RNDf',null,`class`,`m-b-1`);
text(`Category options`);
ec('h2');
let elP08L4 = ev('hr','Ssaf');
let elJwQc_ = eo('div','6PGf',null,`class`,`form-group ${cls({'group-error': !!elzN_aL.formHandler.getError(`cost`) })}`);
let elYpBv1 = eo('label','p98f',null,`for`,`cost`);
text(trans('Cost'));
let elF8ePY = eo('span','LAxf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elKXt0D = ev('input','Ifof',null, eventListeners, {oninput:[function(e) {component.data.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elzN_aL.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elzN_aL.formHandler.removeError(`cost`);}]},`value`,`${fval(component.data.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`Cost`)}`,`class`,`form-control`,`type`,`text`,`id`,`cost`);
elKXt0D.value = fval(component.data.cost);
let cndjaG3 = elzN_aL.formHandler.getError(`cost`);
this.setState('st8TBg3', cndjaG3);
if (cndjaG3) { 
let elq7ltt = eo('div','FO4f',null,`class`,`alert alert-danger`);
text(elzN_aL.formHandler.getError(`cost`));
ec('div');
}ec('div');
let cmpJE2F = this._lc('cDNEkjmDV', {parent:component,parentTop:flkModal,props:{checked:component.data.incrementalCost},events:{onchange:function(e) {let $el = this; component.data.incrementalCost = $el.checked}},boolAttrs:{checked:component.data.incrementalCost},attrs:{name:`${(`incrementalCost`).toInputName()}`,label:'Incremental Cost'}});
ec('div');
}let elcEyG1 = eo('h2',null,null,`class`,`m-b-1`);
text(`Word`);
ec('h2');
let elLq9o3 = ev('hr');
let el_rHV8 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elzN_aL.formHandler.getError(`word`) })}`);
let elFdDAK = eo('label',null,null,`for`,`word`);
text(trans('Word'));
let elLUsns = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elzwlDj = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.word = this.value;},function(e) {var $el = this;component.slug = seo($el.value); component.data.word = $el.value.capitalize();},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elzN_aL.formHandler.addError(`word`, 'required', trans('validation.required'));}return elzN_aL.formHandler.removeError(`word`);}]},`value`,`${fval(component.data.word)}`,`name`,`${(`word`).toInputName()}`,`placeholder`,`${trans(`Word`)}`,`type`,`text`,`class`,`form-control`,`id`,`word`);
elzwlDj.value = fval(component.data.word);
let cndfSUh = elzN_aL.formHandler.getError(`word`);
this.setState('stAhoD1', cndfSUh);
if (cndfSUh) { 
let el8nDOg = eo('div','NXUf',null,`class`,`alert alert-danger`);
text(elzN_aL.formHandler.getError(`word`));
ec('div');
}ec('div');
let elhonXL = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elzN_aL.formHandler.getError(`translation.word`) })}`);
let elnFhwO = eo('label',null,null,`for`,`translation-word`);
text(trans('Translation'));
let elHdAuj = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elJbQBa = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.translation.word = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elzN_aL.formHandler.addError(`translation.word`, 'required', trans('validation.required'));}return elzN_aL.formHandler.removeError(`translation.word`);}]},`value`,`${fval(component.data.translation.word)}`,`name`,`${(`translation.word`).toInputName()}`,`placeholder`,`${trans(`Translation`)}`,`type`,`text`,`class`,`form-control ar`,`id`,`translation-word`);
elJbQBa.value = fval(component.data.translation.word);
let cndj65_ = elzN_aL.formHandler.getError(`translation.word`);
this.setState('stER11Q', cndj65_);
if (cndj65_) { 
let els7J8I = eo('div','o1jf',null,`class`,`alert alert-danger`);
text(elzN_aL.formHandler.getError(`translation.word`));
ec('div');
}ec('div');
let cnd2k58 = component.type == 'category';
this.setState('stLJY0Q', cnd2k58);
let cndcdGX = !(cnd2k58);
this.setState('sth0i7m', cndcdGX);
if (cnd2k58) { 
let eluji8O = eo('div','2SCf',null,`class`,`form-group ${cls({'group-error': !!elzN_aL.formHandler.getError(`description`) })}`);
let elnC6D4 = eo('label','UJTf',null,`for`,`description`);
text(trans('Description'));
let elhRBNq = eo('span','8vlf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el2KBL8 = eo('textarea','Eyaf',null, eventListeners, {oninput:[function(e) {component.data.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elzN_aL.formHandler.addError(`description`, 'required', trans('validation.required'));}return elzN_aL.formHandler.removeError(`description`);}]},`value`,`${fval(component.data.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
el2KBL8.value = fval(component.data.description);
ec('textarea');
let cndZEJL = elzN_aL.formHandler.getError(`description`);
this.setState('stPjr2_', cndZEJL);
if (cndZEJL) { 
let eluWq7M = eo('div','zyyf',null,`class`,`alert alert-danger`);
text(elzN_aL.formHandler.getError(`description`));
ec('div');
}ec('div');
}let cndhu5E = component.type == 'category';
this.setState('stbPAef', cndhu5E);
let cndQ5RX = !(cndhu5E);
this.setState('sttvLqk', cndQ5RX);
if (cndhu5E) { 
let elXyPfj = eo('div','atHf',null,`class`,`form-group ${cls({'group-error': !!elzN_aL.formHandler.getError(`translation.description`) })}`);
let elWwPru = eo('label','Qdyf',null,`for`,`translation-description`);
text(trans('Translation Description'));
let elgj5pH = eo('span','BcXf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elKxT4Q = eo('textarea','yPJf',null, eventListeners, {oninput:[function(e) {component.data.translation.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elzN_aL.formHandler.addError(`translation.description`, 'required', trans('validation.required'));}return elzN_aL.formHandler.removeError(`translation.description`);}]},`value`,`${fval(component.data.translation.description)}`,`name`,`${(`translation.description`).toInputName()}`,`placeholder`,`${trans(`Translation Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`translation-description`);
elKxT4Q.value = fval(component.data.translation.description);
ec('textarea');
let cndQE6t = elzN_aL.formHandler.getError(`translation.description`);
this.setState('stFrWNo', cndQE6t);
if (cndQE6t) { 
let elfT5ML = eo('div','ko3f',null,`class`,`alert alert-danger`);
text(elzN_aL.formHandler.getError(`translation.description`));
ec('div');
}ec('div');
}let cndDnov = component.type == 'category';
this.setState('stXoQmL', cndDnov);
let cndOrde = !(cndDnov);
this.setState('stT1ykI', cndOrde);
if (cndDnov) { 
let elWlDrx = eo('div','UCtf',null,`class`,`form-group`);
let eliwfZC = eo('label','V5Zf',null,`for`,`image`);
text(`Image`);
ec('label');
component.imageInput = this._lc('coPiC5Ipe', {parent:component,parentTop:flkModal,props:{src:component.data.image},attrs:{src:`${component.data.image}`,name:`${(`image`).toInputName()}`,id:'image',required:''},state:'stXoQmL'});
ec('div');
}let elr9Pp2 = eo('div',null,null,`class`,`form-group`);
let cndz_6f = component.user.accountType == 'admin';
this.setState('stKGk8G', cndz_6f);
if (cndz_6f) { 
let cmpaEaE = this._lc('cm9dMEw_8', {parent:component,parentTop:flkModal,props:{checked:! component.data.id && component.user.id == 1 ? true : component.data.published},events:{onchange:function(e) {let $el = this; component.data.published = $el.checked}},boolAttrs:{checked:! component.data.id && component.user.id == 1 ? true : component.data.published},attrs:{name:`${(`published`).toInputName()}`,label:'Published',value:1},state:'stKGk8G'});
}ec('div');
let cndDak1 = ! component.data.id;
this.setState('stmgqJt', cndDak1);
let cndL1tW = !(cndDak1);
this.setState('st7sIDi', cndL1tW);
if (cndDak1) { 
let elQBjlz = eo('button','uYvf',null, eventListeners, {onclick:[function(e) {var $el = this;component.submitThenClear()}]}, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-purple bold`);
text(`SAVE & RESET`);
ec('button');
}else { 
let elrEAZu = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`SAVE`);
ec('button');
}ec('form');
},attrs:{size:'small'}});

                    this.isReadyToGo();
                }
        });