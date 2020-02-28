_Component({
                selector: 'word-modal',
                c: 'WordModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','heading','submit','sent','type','category','slug','data','user','isValidForm','isSending','submitThenClear'],
                children: {cWU6N26tb:'flk-checkbox',cBHLGGwQP:'flk-image-input',cgzvVW9kM:'flk-checkbox',cOaQROQRd:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cOaQROQRd', {parent:component,props:{header:component.heading},events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let elUxTb2 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});
component.form = elUxTb2;

                if (! elUxTb2.formHandler) {
                    window.cfrmdlr = elUxTb2.formHandler = new FormHandler(elUxTb2, component);
                } else {
                    window.cfrmdlr = elUxTb2.formHandler;
                }
            let elSlP2w = eo('p',null,null,`class`,`bold teal-text`);
text(`Your word will be previewed after submitting and you'll rewarded once approved.`);
ec('p');
let cndABBU = component.sent === true;
this.setState('stlkDSY', cndABBU);
let cndLsOy = component.sent === false;
this.setState('stAd2PX', cndLsOy);
let cnds_GY = !(cndABBU||cndLsOy);
this.setState('stZoRxs', cnds_GY);
if (cndABBU) { 
let el_aBRy = eo('div','TrKf',null,`class`,`alert alert-success bold`);
text(`Word has been submitted successfully.`);
ec('div');
}else if (cndLsOy) { 
let elLpIpc = eo('div',null,null,`class`,`alert alert-danger bold`);
text(`Word already exists.`);
ec('div');
}let elPpIES = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elPpIES.value = fval(component.type);
let cndjbyi = component.category;
this.setState('stQKXwh', cndjbyi);
let cndIYqe = !(cndjbyi);
this.setState('stoNPvd', cndIYqe);
if (cndjbyi) { 
let el5hvVL = ev('input','OgWf',null, eventListeners, {oninput:[function(e) {component.category.id = this.value;}]},`value`,`${fval(component.category.id)}`,`name`,`${(`categoryId`).toInputName()}`,`type`,`hidden`);
el5hvVL.value = fval(component.category.id);
}let elc2Qmy = ev('input',null,null, eventListeners, {oninput:[function(e) {component.slug = this.value;}]},`value`,`${fval(component.slug)}`,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`);
elc2Qmy.value = fval(component.slug);
let cndPJFD = component.type == 'category';
this.setState('st67mMg', cndPJFD);
let cnd22xG = !(cndPJFD);
this.setState('st840hr', cnd22xG);
if (cndPJFD) { 
let elWAy_o = eo('div','1Rhf',null,`class`,`m-b-1`);
let elDssq_ = eo('h2','4SWf',null,`class`,`m-b-1`);
text(`Category options`);
ec('h2');
let eloOg_i = ev('hr','QBSf');
let elKuL5k = eo('div','kMvf',null,`class`,`form-group ${cls({'group-error': !!elUxTb2.formHandler.getError(`cost`) })}`);
let elRQfe3 = eo('label','QB6f',null,`for`,`cost`);
text(trans('Cost'));
let elWRfTD = eo('span','TzXf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elF7Shk = ev('input','5vpf',null, eventListeners, {oninput:[function(e) {component.data.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUxTb2.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elUxTb2.formHandler.removeError(`cost`);}]},`value`,`${fval(component.data.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`Cost`)}`,`class`,`form-control`,`type`,`text`,`id`,`cost`);
elF7Shk.value = fval(component.data.cost);
let cndhiAB = elUxTb2.formHandler.getError(`cost`);
this.setState('stWuPc0', cndhiAB);
if (cndhiAB) { 
let elUSk_G = eo('div','NdGf',null,`class`,`alert alert-danger`);
text(elUxTb2.formHandler.getError(`cost`));
ec('div');
}ec('div');
let cmpwnb2 = this._lc('cWU6N26tb', {parent:component,parentTop:flkModal,props:{checked:component.data.incrementalCost},events:{onchange:function(e) {let $el = this; component.data.incrementalCost = $el.checked}},boolAttrs:{checked:component.data.incrementalCost},attrs:{name:`${(`incrementalCost`).toInputName()}`,label:'Incremental Cost'}});
ec('div');
}let el76yH9 = eo('h2',null,null,`class`,`m-b-1`);
text(`Word`);
ec('h2');
let elKNcJF = ev('hr');
let el3jMma = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elUxTb2.formHandler.getError(`word`) })}`);
let elIBBXH = eo('label',null,null,`for`,`word`);
text(trans('Word'));
let elxwlM7 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eluf6m9 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.word = this.value;},function(e) {var $el = this;component.slug = seo($el.value); component.data.word = $el.value.capitalize();},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUxTb2.formHandler.addError(`word`, 'required', trans('validation.required'));}return elUxTb2.formHandler.removeError(`word`);}]},`value`,`${fval(component.data.word)}`,`name`,`${(`word`).toInputName()}`,`placeholder`,`${trans(`Word`)}`,`type`,`text`,`class`,`form-control`,`id`,`word`);
eluf6m9.value = fval(component.data.word);
let cndGM6v = elUxTb2.formHandler.getError(`word`);
this.setState('stvCI0k', cndGM6v);
if (cndGM6v) { 
let elxiXGp = eo('div','0EEf',null,`class`,`alert alert-danger`);
text(elUxTb2.formHandler.getError(`word`));
ec('div');
}ec('div');
let elVfBXY = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elUxTb2.formHandler.getError(`translation.word`) })}`);
let el_Dj0G = eo('label',null,null,`for`,`translation-word`);
text(trans('Translation'));
let el8eIPy = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elipI2Q = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.translation.word = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUxTb2.formHandler.addError(`translation.word`, 'required', trans('validation.required'));}return elUxTb2.formHandler.removeError(`translation.word`);}]},`value`,`${fval(component.data.translation.word)}`,`name`,`${(`translation.word`).toInputName()}`,`placeholder`,`${trans(`Translation`)}`,`type`,`text`,`class`,`form-control ar`,`id`,`translation-word`);
elipI2Q.value = fval(component.data.translation.word);
let cndK8C6 = elUxTb2.formHandler.getError(`translation.word`);
this.setState('stkrNmE', cndK8C6);
if (cndK8C6) { 
let elpOhV0 = eo('div','36xf',null,`class`,`alert alert-danger`);
text(elUxTb2.formHandler.getError(`translation.word`));
ec('div');
}ec('div');
let cnduQ7R = component.type == 'category';
this.setState('st7N9oN', cnduQ7R);
let cnd088O = !(cnduQ7R);
this.setState('stboESE', cnd088O);
if (cnduQ7R) { 
let elfawHv = eo('div','UAJf',null,`class`,`form-group ${cls({'group-error': !!elUxTb2.formHandler.getError(`description`) })}`);
let eloeNiF = eo('label','5QWf',null,`for`,`description`);
text(trans('Description'));
let elueYoK = eo('span','nVbf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elAtMbp = eo('textarea','4Lqf',null, eventListeners, {oninput:[function(e) {component.data.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUxTb2.formHandler.addError(`description`, 'required', trans('validation.required'));}return elUxTb2.formHandler.removeError(`description`);}]},`value`,`${fval(component.data.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elAtMbp.value = fval(component.data.description);
ec('textarea');
let cndZhTl = elUxTb2.formHandler.getError(`description`);
this.setState('stfa18K', cndZhTl);
if (cndZhTl) { 
let elfGeeZ = eo('div','v4jf',null,`class`,`alert alert-danger`);
text(elUxTb2.formHandler.getError(`description`));
ec('div');
}ec('div');
}let cndZtuZ = component.type == 'category';
this.setState('stXtSAX', cndZtuZ);
let cndEAKW = !(cndZtuZ);
this.setState('st1Rokf', cndEAKW);
if (cndZtuZ) { 
let el4ZrjM = eo('div','7Jaf',null,`class`,`form-group ${cls({'group-error': !!elUxTb2.formHandler.getError(`translation.description`) })}`);
let eldm_g9 = eo('label','sWhf',null,`for`,`translation-description`);
text(trans('Translation Description'));
let elRdO0g = eo('span','bxbf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elVzZzC = eo('textarea','QbDf',null, eventListeners, {oninput:[function(e) {component.data.translation.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUxTb2.formHandler.addError(`translation.description`, 'required', trans('validation.required'));}return elUxTb2.formHandler.removeError(`translation.description`);}]},`value`,`${fval(component.data.translation.description)}`,`name`,`${(`translation.description`).toInputName()}`,`placeholder`,`${trans(`Translation Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`translation-description`);
elVzZzC.value = fval(component.data.translation.description);
ec('textarea');
let cnd2nH8 = elUxTb2.formHandler.getError(`translation.description`);
this.setState('st45RBZ', cnd2nH8);
if (cnd2nH8) { 
let el62ved = eo('div','G_wf',null,`class`,`alert alert-danger`);
text(elUxTb2.formHandler.getError(`translation.description`));
ec('div');
}ec('div');
}let cndJFZv = component.type == 'category';
this.setState('stccmsL', cndJFZv);
let cndxzbJ = !(cndJFZv);
this.setState('stinnuA', cndxzbJ);
if (cndJFZv) { 
let el_KRgQ = eo('div','XEXf',null,`class`,`form-group`);
let elwNwRs = eo('label','7ZOf',null,`for`,`image`);
text(`Image`);
ec('label');
component.imageInput = this._lc('cBHLGGwQP', {parent:component,parentTop:flkModal,props:{src:component.data.image},attrs:{src:`${component.data.image}`,name:`${(`image`).toInputName()}`,id:'image',required:''},state:'stccmsL'});
ec('div');
}let eljL691 = eo('div',null,null,`class`,`form-group`);
let cnd1ZOl = component.user.accountType == 'admin';
this.setState('stLkZ_t', cnd1ZOl);
if (cnd1ZOl) { 
let cmp0kOq = this._lc('cgzvVW9kM', {parent:component,parentTop:flkModal,props:{checked:! component.data.id && component.user.id == 1 ? true : component.data.published},events:{onchange:function(e) {let $el = this; component.data.published = $el.checked}},boolAttrs:{checked:! component.data.id && component.user.id == 1 ? true : component.data.published},attrs:{name:`${(`published`).toInputName()}`,label:'Published',value:1},state:'stLkZ_t'});
}ec('div');
let cndQV2R = ! component.data.id;
this.setState('stZuSrr', cndQV2R);
let cndPKff = !(cndQV2R);
this.setState('stxDmtj', cndPKff);
if (cndQV2R) { 
let elqZbCY = eo('button','qXQf',null, eventListeners, {onclick:[function(e) {var $el = this;component.submitThenClear()}]}, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-purple bold`);
text(`SAVE & RESET`);
ec('button');
}else { 
let elEN2BL = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`SAVE`);
ec('button');
}ec('form');
},attrs:{size:'small'}});

                    this.isReadyToGo();
                }
        });