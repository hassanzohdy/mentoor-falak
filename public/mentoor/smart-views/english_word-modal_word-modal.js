_Component({
                selector: 'word-modal',
                c: 'WordModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','heading','submit','sent','type','category','slug','data','user','isValidForm','isSending','submitThenClear'],
                children: {cH2PGNlik:'flk-checkbox',cCN4Iv_lR:'flk-image-input',ciyqqizJE:'flk-checkbox',cgIpBNZDd:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cgIpBNZDd', {parent:component,props:{header:component.heading},events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let elPAkkm = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});
component.form = elPAkkm;

                if (! elPAkkm.formHandler) {
                    window.cfrmdlr = elPAkkm.formHandler = new FormHandler(elPAkkm, component);
                } else {
                    window.cfrmdlr = elPAkkm.formHandler;
                }
            let elRyv38 = eo('p',null,null,`class`,`bold teal-text`);
text(`Your word will be previewed after submitting and you'll rewarded once approved.`);
ec('p');
let cndKrgg = component.sent === true;
this.setState('stWZNSB', cndKrgg);
let cndxW2p = component.sent === false;
this.setState('stXqfIN', cndxW2p);
let cndKCNL = !(cndKrgg||cndxW2p);
this.setState('stICJhM', cndKCNL);
if (cndKrgg) { 
let eltckB9 = eo('div','3hQf',null,`class`,`alert alert-success bold`);
text(`Word has been submitted successfully.`);
ec('div');
}else if (cndxW2p) { 
let elqN6h0 = eo('div',null,null,`class`,`alert alert-danger bold`);
text(`Word already exists.`);
ec('div');
}let elgeqra = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elgeqra.value = fval(component.type);
let cndyR1v = component.category;
this.setState('stXhXmY', cndyR1v);
let cndsNC8 = !(cndyR1v);
this.setState('stRey9m', cndsNC8);
if (cndyR1v) { 
let eldd835 = ev('input','DBof',null, eventListeners, {oninput:[function(e) {component.category.id = this.value;}]},`value`,`${fval(component.category.id)}`,`name`,`${(`categoryId`).toInputName()}`,`type`,`hidden`);
eldd835.value = fval(component.category.id);
}let elxCJXE = ev('input',null,null, eventListeners, {oninput:[function(e) {component.slug = this.value;}]},`value`,`${fval(component.slug)}`,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`);
elxCJXE.value = fval(component.slug);
let cndhWYH = component.type == 'category';
this.setState('st_Q3uO', cndhWYH);
let cndpl61 = !(cndhWYH);
this.setState('styTvMU', cndpl61);
if (cndhWYH) { 
let eliVxs9 = eo('div','_uZf',null,`class`,`m-b-1`);
let el46sW8 = eo('h2','NOOf',null,`class`,`m-b-1`);
text(`Category options`);
ec('h2');
let elXBA30 = ev('hr','uYtf');
let elKNLMn = eo('div','zMUf',null,`class`,`form-group ${cls({'group-error': !!elPAkkm.formHandler.getError(`cost`) })}`);
let elz04Ru = eo('label','CGEf',null,`for`,`cost`);
text(trans('Cost'));
let el6Qmyc = eo('span','skVf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eleJg3U = ev('input','3EDf',null, eventListeners, {oninput:[function(e) {component.data.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elPAkkm.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elPAkkm.formHandler.removeError(`cost`);}]},`value`,`${fval(component.data.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`Cost`)}`,`class`,`form-control`,`type`,`text`,`id`,`cost`);
eleJg3U.value = fval(component.data.cost);
let cndabmA = elPAkkm.formHandler.getError(`cost`);
this.setState('stgMv0Y', cndabmA);
if (cndabmA) { 
let elaFwyQ = eo('div','ZgVf',null,`class`,`alert alert-danger`);
text(elPAkkm.formHandler.getError(`cost`));
ec('div');
}ec('div');
let cmpDsYB = this._lc('cH2PGNlik', {parent:component,parentTop:flkModal,props:{checked:component.data.incrementalCost},events:{onchange:function(e) {let $el = this; component.data.incrementalCost = $el.checked}},boolAttrs:{checked:component.data.incrementalCost},attrs:{name:`${(`incrementalCost`).toInputName()}`,label:'Incremental Cost'}});
ec('div');
}let elq2omo = eo('h2',null,null,`class`,`m-b-1`);
text(`Word`);
ec('h2');
let elIjE4C = ev('hr');
let el1794j = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elPAkkm.formHandler.getError(`word`) })}`);
let elthmVm = eo('label',null,null,`for`,`word`);
text(trans('Word'));
let elKun0q = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elsvuWI = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.word = this.value;},function(e) {var $el = this;component.slug = seo($el.value); component.data.word = $el.value.capitalize();},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elPAkkm.formHandler.addError(`word`, 'required', trans('validation.required'));}return elPAkkm.formHandler.removeError(`word`);}]},`value`,`${fval(component.data.word)}`,`name`,`${(`word`).toInputName()}`,`placeholder`,`${trans(`Word`)}`,`type`,`text`,`class`,`form-control`,`id`,`word`);
elsvuWI.value = fval(component.data.word);
let cnd5XwA = elPAkkm.formHandler.getError(`word`);
this.setState('stEnw9h', cnd5XwA);
if (cnd5XwA) { 
let elDQmHy = eo('div','DK7f',null,`class`,`alert alert-danger`);
text(elPAkkm.formHandler.getError(`word`));
ec('div');
}ec('div');
let elPmFH_ = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elPAkkm.formHandler.getError(`translation.word`) })}`);
let elgdz1r = eo('label',null,null,`for`,`translation-word`);
text(trans('Translation'));
let elrNagc = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elGU4tk = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.translation.word = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elPAkkm.formHandler.addError(`translation.word`, 'required', trans('validation.required'));}return elPAkkm.formHandler.removeError(`translation.word`);}]},`value`,`${fval(component.data.translation.word)}`,`name`,`${(`translation.word`).toInputName()}`,`placeholder`,`${trans(`Translation`)}`,`type`,`text`,`class`,`form-control ar`,`id`,`translation-word`);
elGU4tk.value = fval(component.data.translation.word);
let cnd9pdZ = elPAkkm.formHandler.getError(`translation.word`);
this.setState('stleHtJ', cnd9pdZ);
if (cnd9pdZ) { 
let elg8Y8R = eo('div','nwtf',null,`class`,`alert alert-danger`);
text(elPAkkm.formHandler.getError(`translation.word`));
ec('div');
}ec('div');
let cndeKLs = component.type == 'category';
this.setState('steP3o3', cndeKLs);
let cnd4hDt = !(cndeKLs);
this.setState('st9Nd8q', cnd4hDt);
if (cndeKLs) { 
let elzz4B8 = eo('div','8AWf',null,`class`,`form-group ${cls({'group-error': !!elPAkkm.formHandler.getError(`description`) })}`);
let ellOj2e = eo('label','Eycf',null,`for`,`description`);
text(trans('Description'));
let eliZaAG = eo('span','_tnf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elfchCo = eo('textarea','B8rf',null, eventListeners, {oninput:[function(e) {component.data.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elPAkkm.formHandler.addError(`description`, 'required', trans('validation.required'));}return elPAkkm.formHandler.removeError(`description`);}]},`value`,`${fval(component.data.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elfchCo.value = fval(component.data.description);
ec('textarea');
let cndJCEC = elPAkkm.formHandler.getError(`description`);
this.setState('stI3qog', cndJCEC);
if (cndJCEC) { 
let elTk63Y = eo('div','jVyf',null,`class`,`alert alert-danger`);
text(elPAkkm.formHandler.getError(`description`));
ec('div');
}ec('div');
}let cndww_h = component.type == 'category';
this.setState('stXRDNA', cndww_h);
let cnd9pWr = !(cndww_h);
this.setState('st9KI2V', cnd9pWr);
if (cndww_h) { 
let elA5UwF = eo('div','ugDf',null,`class`,`form-group ${cls({'group-error': !!elPAkkm.formHandler.getError(`translation.description`) })}`);
let elEWPia = eo('label','sXmf',null,`for`,`translation-description`);
text(trans('Translation Description'));
let el2A_oi = eo('span','Yg0f',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let els6KGm = eo('textarea','Rfff',null, eventListeners, {oninput:[function(e) {component.data.translation.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elPAkkm.formHandler.addError(`translation.description`, 'required', trans('validation.required'));}return elPAkkm.formHandler.removeError(`translation.description`);}]},`value`,`${fval(component.data.translation.description)}`,`name`,`${(`translation.description`).toInputName()}`,`placeholder`,`${trans(`Translation Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`translation-description`);
els6KGm.value = fval(component.data.translation.description);
ec('textarea');
let cndyig6 = elPAkkm.formHandler.getError(`translation.description`);
this.setState('st9ln08', cndyig6);
if (cndyig6) { 
let elBh5ac = eo('div','DGrf',null,`class`,`alert alert-danger`);
text(elPAkkm.formHandler.getError(`translation.description`));
ec('div');
}ec('div');
}let cnddj5O = component.type == 'category';
this.setState('stxrrrH', cnddj5O);
let cndHwok = !(cnddj5O);
this.setState('stNkqfo', cndHwok);
if (cnddj5O) { 
let elojwER = eo('div','zFHf',null,`class`,`form-group`);
let elHurUj = eo('label','FfWf',null,`for`,`image`);
text(`Image`);
ec('label');
component.imageInput = this._lc('cCN4Iv_lR', {parent:component,parentTop:flkModal,props:{src:component.data.image},attrs:{src:`${component.data.image}`,name:`${(`image`).toInputName()}`,id:'image',required:''},state:'stxrrrH'});
ec('div');
}let elpwdte = eo('div',null,null,`class`,`form-group`);
let cndkcEO = component.user.accountType == 'admin';
this.setState('sty0R9b', cndkcEO);
if (cndkcEO) { 
let cmp0tzA = this._lc('ciyqqizJE', {parent:component,parentTop:flkModal,props:{checked:! component.data.id && component.user.id == 1 ? true : component.data.published},events:{onchange:function(e) {let $el = this; component.data.published = $el.checked}},boolAttrs:{checked:! component.data.id && component.user.id == 1 ? true : component.data.published},attrs:{name:`${(`published`).toInputName()}`,label:'Published',value:1},state:'sty0R9b'});
}ec('div');
let cndoKmJ = ! component.data.id;
this.setState('stqzlor', cndoKmJ);
let cndWYDW = !(cndoKmJ);
this.setState('stc0Yta', cndWYDW);
if (cndoKmJ) { 
let eluOVRo = eo('button','Ycdf',null, eventListeners, {onclick:[function(e) {var $el = this;component.submitThenClear()}]}, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-purple bold`);
text(`SAVE & RESET`);
ec('button');
}else { 
let elzDCio = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`SAVE`);
ec('button');
}ec('form');
},attrs:{size:'small'}});

                    this.isReadyToGo();
                }
        });