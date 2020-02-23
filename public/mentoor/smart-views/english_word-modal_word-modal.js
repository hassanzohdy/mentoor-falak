_Component({
                selector: 'word-modal',
                c: 'WordModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','heading','submit','sent','type','category','slug','data','user','isValidForm','isSending','submitThenClear'],
                children: {cHej49P7X:'flk-checkbox',cGuLonR82:'flk-image-input',cbvLaqOcj:'flk-checkbox',cOKwqTFbZ:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cOKwqTFbZ', {parent:component,props:{header:component.heading},events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let el40hbW = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});
component.form = el40hbW;

                if (! el40hbW.formHandler) {
                    window.cfrmdlr = el40hbW.formHandler = new FormHandler(el40hbW, component);
                } else {
                    window.cfrmdlr = el40hbW.formHandler;
                }
            let elSAu0w = eo('p',null,null,`class`,`bold teal-text`);
text(`Your word will be previewed after submitting and you'll rewarded once approved.`);
ec('p');
let cndGyDO = component.sent === true;
this.setState('strw0Do', cndGyDO);
let cnd7sZR = component.sent === false;
this.setState('stBEeMY', cnd7sZR);
let cndhEKp = !(cndGyDO||cnd7sZR);
this.setState('stXdfaf', cndhEKp);
if (cndGyDO) { 
let elclL4W = eo('div','RPTf',null,`class`,`alert alert-success bold`);
text(`Word has been submitted successfully.`);
ec('div');
}else if (cnd7sZR) { 
let elSvQoY = eo('div',null,null,`class`,`alert alert-danger bold`);
text(`Word already exists.`);
ec('div');
}let elEeCjU = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elEeCjU.value = fval(component.type);
let cnd2CDX = component.category;
this.setState('st1RqBQ', cnd2CDX);
let cnd9ype = !(cnd2CDX);
this.setState('stcfHFZ', cnd9ype);
if (cnd2CDX) { 
let elTWSYK = ev('input','HWtf',null, eventListeners, {oninput:[function(e) {component.category.id = this.value;}]},`value`,`${fval(component.category.id)}`,`name`,`${(`categoryId`).toInputName()}`,`type`,`hidden`);
elTWSYK.value = fval(component.category.id);
}let eldbP_0 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.slug = this.value;}]},`value`,`${fval(component.slug)}`,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`);
eldbP_0.value = fval(component.slug);
let cndrtxI = component.type == 'category';
this.setState('strYbLd', cndrtxI);
let cndzUUG = !(cndrtxI);
this.setState('stGwRlk', cndzUUG);
if (cndrtxI) { 
let elYH3Qi = eo('div','MQhf',null,`class`,`m-b-1`);
let elfNHXj = eo('h2','j3Zf',null,`class`,`m-b-1`);
text(`Category options`);
ec('h2');
let elMOtHh = ev('hr','KMVf');
let eldYYBc = eo('div','z8Vf',null,`class`,`form-group`);
eldYYBc.cls = {'group-error': !!el40hbW.formHandler.getError(`cost`) };

            for (let className in eldYYBc.cls) {
                eldYYBc.classList.toggle(className, eldYYBc.cls[className]);
            }  
            let elNbUr0 = eo('label','3gZf',null,`for`,`cost`);
text(trans('Cost'));
let el24PZQ = eo('span','elof',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eluxOPM = ev('input','GEvf',null, eventListeners, {oninput:[function(e) {component.data.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el40hbW.formHandler.addError(`cost`, 'required', trans('validation.required'));}return el40hbW.formHandler.removeError(`cost`);}]},`value`,`${fval(component.data.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`Cost`)}`,`class`,`form-control`,`type`,`text`,`id`,`cost`);
eluxOPM.value = fval(component.data.cost);
let cndMPQa = el40hbW.formHandler.getError(`cost`);
this.setState('stw7DTE', cndMPQa);
if (cndMPQa) { 
let eljZe7p = eo('div','q90f',null,`class`,`alert alert-danger`);
text(el40hbW.formHandler.getError(`cost`));
ec('div');
}ec('div');
let cmpVLaY = this._lc('cHej49P7X', {parent:component,parentTop:flkModal,props:{checked:component.data.incrementalCost},events:{onchange:function(e) {let $el = this; component.data.incrementalCost = $el.checked}},boolAttrs:{checked:component.data.incrementalCost},attrs:{name:`${(`incrementalCost`).toInputName()}`,label:'Incremental Cost'}});
ec('div');
}let el6jjSU = eo('h2',null,null,`class`,`m-b-1`);
text(`Word`);
ec('h2');
let eljrFCm = ev('hr');
let el8CvCW = eo('div',null,null,`class`,`form-group`);
el8CvCW.cls = {'group-error': !!el40hbW.formHandler.getError(`word`) };

            for (let className in el8CvCW.cls) {
                el8CvCW.classList.toggle(className, el8CvCW.cls[className]);
            }  
            let elAf7Dt = eo('label',null,null,`for`,`word`);
text(trans('Word'));
let elPQDIZ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elmuYm9 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.word = this.value;},function(e) {var $el = this;component.slug = seo($el.value); component.data.word = $el.value.capitalize();},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el40hbW.formHandler.addError(`word`, 'required', trans('validation.required'));}return el40hbW.formHandler.removeError(`word`);}]},`value`,`${fval(component.data.word)}`,`name`,`${(`word`).toInputName()}`,`placeholder`,`${trans(`Word`)}`,`type`,`text`,`class`,`form-control`,`id`,`word`);
elmuYm9.value = fval(component.data.word);
let cndqjD2 = el40hbW.formHandler.getError(`word`);
this.setState('stCqDCx', cndqjD2);
if (cndqjD2) { 
let elvLJYM = eo('div','fTWf',null,`class`,`alert alert-danger`);
text(el40hbW.formHandler.getError(`word`));
ec('div');
}ec('div');
let elBMCF5 = eo('div',null,null,`class`,`form-group`);
elBMCF5.cls = {'group-error': !!el40hbW.formHandler.getError(`translation.word`) };

            for (let className in elBMCF5.cls) {
                elBMCF5.classList.toggle(className, elBMCF5.cls[className]);
            }  
            let eloLiMI = eo('label',null,null,`for`,`translation-word`);
text(trans('Translation'));
let elhbz8x = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elwDXQ4 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.translation.word = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el40hbW.formHandler.addError(`translation.word`, 'required', trans('validation.required'));}return el40hbW.formHandler.removeError(`translation.word`);}]},`value`,`${fval(component.data.translation.word)}`,`name`,`${(`translation.word`).toInputName()}`,`placeholder`,`${trans(`Translation`)}`,`type`,`text`,`class`,`form-control ar`,`id`,`translation-word`);
elwDXQ4.value = fval(component.data.translation.word);
let cndJr2s = el40hbW.formHandler.getError(`translation.word`);
this.setState('stfsniG', cndJr2s);
if (cndJr2s) { 
let elaTAsu = eo('div','Qehf',null,`class`,`alert alert-danger`);
text(el40hbW.formHandler.getError(`translation.word`));
ec('div');
}ec('div');
let cndZ7kx = component.type == 'category';
this.setState('stTwk0Q', cndZ7kx);
let cndCUAi = !(cndZ7kx);
this.setState('stMjOpL', cndCUAi);
if (cndZ7kx) { 
let eljbgtG = eo('div','KOmf',null,`class`,`form-group`);
eljbgtG.cls = {'group-error': !!el40hbW.formHandler.getError(`description`) };

            for (let className in eljbgtG.cls) {
                eljbgtG.classList.toggle(className, eljbgtG.cls[className]);
            }  
            let elNT72r = eo('label','v2Yf',null,`for`,`description`);
text(trans('Description'));
let elR5whE = eo('span','Ab5f',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elXEPZF = eo('textarea','JEgf',null, eventListeners, {oninput:[function(e) {component.data.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el40hbW.formHandler.addError(`description`, 'required', trans('validation.required'));}return el40hbW.formHandler.removeError(`description`);}]},`value`,`${fval(component.data.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elXEPZF.value = fval(component.data.description);
ec('textarea');
let cndREFQ = el40hbW.formHandler.getError(`description`);
this.setState('stVth_Q', cndREFQ);
if (cndREFQ) { 
let elA5z1v = eo('div','PmFf',null,`class`,`alert alert-danger`);
text(el40hbW.formHandler.getError(`description`));
ec('div');
}ec('div');
}let cnd85AC = component.type == 'category';
this.setState('stPAXsH', cnd85AC);
let cndIykE = !(cnd85AC);
this.setState('stN9ZsW', cndIykE);
if (cnd85AC) { 
let elnJS9A = eo('div','yRQf',null,`class`,`form-group`);
elnJS9A.cls = {'group-error': !!el40hbW.formHandler.getError(`translation.description`) };

            for (let className in elnJS9A.cls) {
                elnJS9A.classList.toggle(className, elnJS9A.cls[className]);
            }  
            let elfQgww = eo('label','AR2f',null,`for`,`translation-description`);
text(trans('Translation Description'));
let elKkJgP = eo('span','wJcf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elP4ElW = eo('textarea','XXPf',null, eventListeners, {oninput:[function(e) {component.data.translation.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el40hbW.formHandler.addError(`translation.description`, 'required', trans('validation.required'));}return el40hbW.formHandler.removeError(`translation.description`);}]},`value`,`${fval(component.data.translation.description)}`,`name`,`${(`translation.description`).toInputName()}`,`placeholder`,`${trans(`Translation Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`translation-description`);
elP4ElW.value = fval(component.data.translation.description);
ec('textarea');
let cndrjFg = el40hbW.formHandler.getError(`translation.description`);
this.setState('stjSjkP', cndrjFg);
if (cndrjFg) { 
let elSDXG_ = eo('div','A5Jf',null,`class`,`alert alert-danger`);
text(el40hbW.formHandler.getError(`translation.description`));
ec('div');
}ec('div');
}let cndCZD8 = component.type == 'category';
this.setState('stE4pV1', cndCZD8);
let cndjDDK = !(cndCZD8);
this.setState('st4Jd7D', cndjDDK);
if (cndCZD8) { 
let elAEixY = eo('div','5wFf',null,`class`,`form-group`);
let elnAb1a = eo('label','QoXf',null,`for`,`image`);
text(`Image`);
ec('label');
component.imageInput = this._lc('cGuLonR82', {parent:component,parentTop:flkModal,props:{src:component.data.image},attrs:{src:`${component.data.image}`,name:`${(`image`).toInputName()}`,id:'image',required:''},state:'stE4pV1'});
ec('div');
}let elLIslw = eo('div',null,null,`class`,`form-group`);
let cndn97E = component.user.accountType == 'admin';
this.setState('stG7loR', cndn97E);
if (cndn97E) { 
let cmpNSn9 = this._lc('cbvLaqOcj', {parent:component,parentTop:flkModal,props:{checked:! component.data.id && component.user.id == 1 ? true : component.data.published},events:{onchange:function(e) {let $el = this; component.data.published = $el.checked}},boolAttrs:{checked:! component.data.id && component.user.id == 1 ? true : component.data.published},attrs:{name:`${(`published`).toInputName()}`,label:'Published',value:1},state:'stG7loR'});
}ec('div');
let cndbUHo = ! component.data.id;
this.setState('stYu5p5', cndbUHo);
let cndlMwH = !(cndbUHo);
this.setState('stgk3qI', cndlMwH);
if (cndbUHo) { 
let elC1Ojy = eo('button','aaKf',null, eventListeners, {onclick:[function(e) {var $el = this;component.submitThenClear()}]}, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-purple bold`);
text(`SAVE & RESET`);
ec('button');
}else { 
let elyxkDw = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`SAVE`);
ec('button');
}ec('form');
},attrs:{size:'small'}});

                    this.isReadyToGo();
                }
        });