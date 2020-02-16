_Component({
                selector: 'word-modal',
                c: 'WordModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','heading','submit','sent','type','category','slug','data','user','isValidForm','isSending','submitThenClear'],
                children: {c1R2Q66GL:'flk-checkbox',cakLYLLbd:'flk-image-input',cmgeGuoy8:'flk-checkbox',cE3Aiy0xk:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cE3Aiy0xk', {parent:component,props:{header:component.heading},events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let eliVJwQ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});
component.form = eliVJwQ;

                if (! eliVJwQ.formHandler) {
                    window.cfrmdlr = eliVJwQ.formHandler = new FormHandler(eliVJwQ, component);
                } else {
                    window.cfrmdlr = eliVJwQ.formHandler;
                }
            let elDUOuK = eo('p',null,null,`class`,`bold teal-text`);
text(`Your word will be previewed after submitting and you'll rewarded once approved.`);
ec('p');
let cnd1zM6 = component.sent === true;
this.setState('stDYvrD', cnd1zM6);
let cndlko4 = component.sent === false;
this.setState('stqxwTn', cndlko4);
let cndzz7Q = !(cnd1zM6||cndlko4);
this.setState('st_EigN', cndzz7Q);
if (cnd1zM6) { 
let elb1uKz = eo('div','PGjf',null,`class`,`alert alert-success bold`);
text(`Word has been submitted successfully.`);
ec('div');
}else if (cndlko4) { 
let elAgJGJ = eo('div',null,null,`class`,`alert alert-danger bold`);
text(`Word already exists.`);
ec('div');
}let elvMRN6 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elvMRN6.value = fval(component.type);
let cndBbz9 = component.category;
this.setState('staf7yd', cndBbz9);
let cndnQau = !(cndBbz9);
this.setState('stD33Ua', cndnQau);
if (cndBbz9) { 
let eltWzQt = ev('input','ocof',null, eventListeners, {oninput:[function(e) {component.category.id = this.value;}]},`value`,`${fval(component.category.id)}`,`name`,`${(`categoryId`).toInputName()}`,`type`,`hidden`);
eltWzQt.value = fval(component.category.id);
}let elQ_qpd = ev('input',null,null, eventListeners, {oninput:[function(e) {component.slug = this.value;}]},`value`,`${fval(component.slug)}`,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`);
elQ_qpd.value = fval(component.slug);
let cndhC2v = component.type == 'category';
this.setState('stptsou', cndhC2v);
let cndu3NP = !(cndhC2v);
this.setState('stpPsXm', cndu3NP);
if (cndhC2v) { 
let elcG79I = eo('div','qqQf',null,`class`,`m-b-1`);
let elloDLx = eo('h2','acWf',null,`class`,`m-b-1`);
text(`Category options`);
ec('h2');
let el4SACy = ev('hr','nxSf');
let ellJwIc = eo('div','Wdzf',null,`class`,`form-group`);
ellJwIc.cls = {'group-error': !!eliVJwQ.formHandler.getError(`cost`) };

            for (let className in ellJwIc.cls) {
                ellJwIc.classList.toggle(className, ellJwIc.cls[className]);
            }  
            let elNEecw = eo('label','SJef',null,`for`,`cost`);
text(trans('Cost'));
let elvzR1C = eo('span','7Jff',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eluaMAr = ev('input','kTUf',null, eventListeners, {oninput:[function(e) {component.data.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eliVJwQ.formHandler.addError(`cost`, 'required', trans('validation.required'));}return eliVJwQ.formHandler.removeError(`cost`);}]},`value`,`${fval(component.data.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`Cost`)}`,`class`,`form-control`,`type`,`text`,`id`,`cost`);
eluaMAr.value = fval(component.data.cost);
let cnd6rxw = eliVJwQ.formHandler.getError(`cost`);
this.setState('stewHEi', cnd6rxw);
if (cnd6rxw) { 
let el7IqKd = eo('div','qukf',null,`class`,`alert alert-danger`);
text(eliVJwQ.formHandler.getError(`cost`));
ec('div');
}ec('div');
let cmp2Gsx = this._lc('c1R2Q66GL', {parent:component,parentTop:flkModal,props:{checked:component.data.incrementalCost},events:{onchange:function(e) {let $el = this; component.data.incrementalCost = $el.checked}},boolAttrs:{checked:component.data.incrementalCost},attrs:{name:`${(`incrementalCost`).toInputName()}`,label:'Incremental Cost'}});
ec('div');
}let elWx3BD = eo('h2',null,null,`class`,`m-b-1`);
text(`Word`);
ec('h2');
let elDW_0l = ev('hr');
let elTeMEv = eo('div',null,null,`class`,`form-group`);
elTeMEv.cls = {'group-error': !!eliVJwQ.formHandler.getError(`word`) };

            for (let className in elTeMEv.cls) {
                elTeMEv.classList.toggle(className, elTeMEv.cls[className]);
            }  
            let el9YZJ3 = eo('label',null,null,`for`,`word`);
text(trans('Word'));
let eljMpjT = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el9x4Gj = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.word = this.value;},function(e) {var $el = this;component.slug = seo($el.value); component.data.word = $el.value.capitalize();},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eliVJwQ.formHandler.addError(`word`, 'required', trans('validation.required'));}return eliVJwQ.formHandler.removeError(`word`);}]},`value`,`${fval(component.data.word)}`,`name`,`${(`word`).toInputName()}`,`placeholder`,`${trans(`Word`)}`,`type`,`text`,`class`,`form-control`,`id`,`word`);
el9x4Gj.value = fval(component.data.word);
let cnd1BD0 = eliVJwQ.formHandler.getError(`word`);
this.setState('stWElqp', cnd1BD0);
if (cnd1BD0) { 
let eluwNKB = eo('div','Njmf',null,`class`,`alert alert-danger`);
text(eliVJwQ.formHandler.getError(`word`));
ec('div');
}ec('div');
let elL5FmZ = eo('div',null,null,`class`,`form-group`);
elL5FmZ.cls = {'group-error': !!eliVJwQ.formHandler.getError(`translation.word`) };

            for (let className in elL5FmZ.cls) {
                elL5FmZ.classList.toggle(className, elL5FmZ.cls[className]);
            }  
            let el82Anu = eo('label',null,null,`for`,`translation-word`);
text(trans('Translation'));
let elySslL = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elcI8Np = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.translation.word = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eliVJwQ.formHandler.addError(`translation.word`, 'required', trans('validation.required'));}return eliVJwQ.formHandler.removeError(`translation.word`);}]},`value`,`${fval(component.data.translation.word)}`,`name`,`${(`translation.word`).toInputName()}`,`placeholder`,`${trans(`Translation`)}`,`type`,`text`,`class`,`form-control ar`,`id`,`translation-word`);
elcI8Np.value = fval(component.data.translation.word);
let cnddz6b = eliVJwQ.formHandler.getError(`translation.word`);
this.setState('stzbRoq', cnddz6b);
if (cnddz6b) { 
let elnRz1G = eo('div','xHuf',null,`class`,`alert alert-danger`);
text(eliVJwQ.formHandler.getError(`translation.word`));
ec('div');
}ec('div');
let cnduGx0 = component.type == 'category';
this.setState('stsqAcF', cnduGx0);
let cndYPc2 = !(cnduGx0);
this.setState('stRNBgS', cndYPc2);
if (cnduGx0) { 
let el9yXe0 = eo('div','1Jaf',null,`class`,`form-group`);
el9yXe0.cls = {'group-error': !!eliVJwQ.formHandler.getError(`description`) };

            for (let className in el9yXe0.cls) {
                el9yXe0.classList.toggle(className, el9yXe0.cls[className]);
            }  
            let elhGITX = eo('label','i5Ff',null,`for`,`description`);
text(trans('Description'));
let elVEJbY = eo('span','Svkf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elN3WOS = eo('textarea','1I2f',null, eventListeners, {oninput:[function(e) {component.data.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eliVJwQ.formHandler.addError(`description`, 'required', trans('validation.required'));}return eliVJwQ.formHandler.removeError(`description`);}]},`value`,`${fval(component.data.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elN3WOS.value = fval(component.data.description);
ec('textarea');
let cndqA2b = eliVJwQ.formHandler.getError(`description`);
this.setState('stpPWYl', cndqA2b);
if (cndqA2b) { 
let elPDvhq = eo('div','Uguf',null,`class`,`alert alert-danger`);
text(eliVJwQ.formHandler.getError(`description`));
ec('div');
}ec('div');
}let cndaPgu = component.type == 'category';
this.setState('stg3wHH', cndaPgu);
let cndHRp7 = !(cndaPgu);
this.setState('st1xmcA', cndHRp7);
if (cndaPgu) { 
let elqxLHX = eo('div','BAyf',null,`class`,`form-group`);
elqxLHX.cls = {'group-error': !!eliVJwQ.formHandler.getError(`translation.description`) };

            for (let className in elqxLHX.cls) {
                elqxLHX.classList.toggle(className, elqxLHX.cls[className]);
            }  
            let elQs3Bn = eo('label','2FLf',null,`for`,`translation-description`);
text(trans('Translation Description'));
let elM0MmU = eo('span','mUYf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elqpimj = eo('textarea','T6Uf',null, eventListeners, {oninput:[function(e) {component.data.translation.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eliVJwQ.formHandler.addError(`translation.description`, 'required', trans('validation.required'));}return eliVJwQ.formHandler.removeError(`translation.description`);}]},`value`,`${fval(component.data.translation.description)}`,`name`,`${(`translation.description`).toInputName()}`,`placeholder`,`${trans(`Translation Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`translation-description`);
elqpimj.value = fval(component.data.translation.description);
ec('textarea');
let cndATcW = eliVJwQ.formHandler.getError(`translation.description`);
this.setState('stCZON2', cndATcW);
if (cndATcW) { 
let elj92CO = eo('div','48af',null,`class`,`alert alert-danger`);
text(eliVJwQ.formHandler.getError(`translation.description`));
ec('div');
}ec('div');
}let cndlAee = component.type == 'category';
this.setState('stZihFG', cndlAee);
let cndMnvK = !(cndlAee);
this.setState('stluWAr', cndMnvK);
if (cndlAee) { 
let elRhx5T = eo('div','9nJf',null,`class`,`form-group`);
let elJ6wK6 = eo('label','Bbuf',null,`for`,`image`);
text(`Image`);
ec('label');
component.imageInput = this._lc('cakLYLLbd', {parent:component,parentTop:flkModal,props:{src:component.data.image},attrs:{src:`${component.data.image}`,name:`${(`image`).toInputName()}`,id:'image',required:''},state:'stZihFG'});
ec('div');
}let elVaZEg = eo('div',null,null,`class`,`form-group`);
let cndb5pL = component.user.accountType == 'admin';
this.setState('stUMusT', cndb5pL);
if (cndb5pL) { 
let cmpOElK = this._lc('cmgeGuoy8', {parent:component,parentTop:flkModal,props:{checked:! component.data.id && component.user.id == 1 ? true : component.data.published},events:{onchange:function(e) {let $el = this; component.data.published = $el.checked}},boolAttrs:{checked:! component.data.id && component.user.id == 1 ? true : component.data.published},attrs:{name:`${(`published`).toInputName()}`,label:'Published',value:1},state:'stUMusT'});
}ec('div');
let cndIyHC = ! component.data.id;
this.setState('stEeqLO', cndIyHC);
let cndYHPn = !(cndIyHC);
this.setState('stQrQoK', cndYHPn);
if (cndIyHC) { 
let elWZGjC = eo('button','efmf',null, eventListeners, {onclick:[function(e) {var $el = this;component.submitThenClear()}]}, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-purple bold`);
text(`SAVE & RESET`);
ec('button');
}else { 
let elwuZhn = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`SAVE`);
ec('button');
}ec('form');
},attrs:{size:'small'}});

                    this.isReadyToGo();
                }
        });