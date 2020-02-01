_Component({
                selector: 'word-modal',
                c: 'WordModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','heading','submit','sent','type','category','slug','data','user','isValidForm','isSending','submitThenClear'],
                children: {cFDdJxnQ9:'flk-checkbox',cxNAe2BNw:'flk-image-input',c_mZNwXoD:'flk-checkbox',cy7y8PFxK:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cy7y8PFxK', {parent:component,props:{header:component.heading},events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let elQk2bU = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});
component.form = elQk2bU;

                if (! elQk2bU.formHandler) {
                    window.cfrmdlr = elQk2bU.formHandler = new FormHandler(elQk2bU, component);
                } else {
                    window.cfrmdlr = elQk2bU.formHandler;
                }
            let elg7den = eo('p',null,null,`class`,`bold teal-text`);
text(`Your word will be previewed after submitting and you'll rewarded once approved.`);
ec('p');
let cndRbij = component.sent === true;
this.setState('stk8V8H', cndRbij);
let cndQLJD = component.sent === false;
this.setState('stU_YsR', cndQLJD);
let cndd4v7 = !(cndRbij||cndQLJD);
this.setState('stIsrig', cndd4v7);
if (cndRbij) { 
let eld5jQI = eo('div','TH4f',null,`class`,`alert alert-success bold`);
text(`Word has been submitted successfully.`);
ec('div');
}else if (cndQLJD) { 
let eltWRqc = eo('div',null,null,`class`,`alert alert-danger bold`);
text(`Word already exists.`);
ec('div');
}let elaZaJu = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elaZaJu.value = fval(component.type);
let cndmx6w = component.category;
this.setState('stU9xy1', cndmx6w);
let cndiujZ = !(cndmx6w);
this.setState('stCssW_', cndiujZ);
if (cndmx6w) { 
let el3f3KJ = ev('input','eDDf',null, eventListeners, {oninput:[function(e) {component.category.id = this.value;}]},`value`,`${fval(component.category.id)}`,`name`,`${(`categoryId`).toInputName()}`,`type`,`hidden`);
el3f3KJ.value = fval(component.category.id);
}let elYsgV5 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.slug = this.value;}]},`value`,`${fval(component.slug)}`,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`);
elYsgV5.value = fval(component.slug);
let cnd5Ej5 = component.type == 'category';
this.setState('st7jzX5', cnd5Ej5);
let cndOmmc = !(cnd5Ej5);
this.setState('st2nPAD', cndOmmc);
if (cnd5Ej5) { 
let eli7WDU = eo('div','do2f',null,`class`,`m-b-1`);
let elDEy3u = eo('h2','ppWf',null,`class`,`m-b-1`);
text(`Category options`);
ec('h2');
let elhetJg = ev('hr','ykVf');
let elucz4o = eo('div','U1af',null,`class`,`form-group`);
elucz4o.cls = {'group-error': !!elQk2bU.formHandler.getError(`cost`) };

            for (let className in elucz4o.cls) {
                elucz4o.classList.toggle(className, elucz4o.cls[className]);
            }  
            let elRinJ_ = eo('label','FbDf',null,`for`,`cost`);
text(trans('Cost'));
let elum2Bl = eo('span','5J7f',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elN0aXk = ev('input','p7Sf',null, eventListeners, {oninput:[function(e) {component.data.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQk2bU.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elQk2bU.formHandler.removeError(`cost`);}]},`value`,`${fval(component.data.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`Cost`)}`,`class`,`form-control`,`type`,`text`,`id`,`cost`);
elN0aXk.value = fval(component.data.cost);
let cnd7Tl0 = elQk2bU.formHandler.getError(`cost`);
this.setState('st1dQba', cnd7Tl0);
if (cnd7Tl0) { 
let eljNd4V = eo('div','3tvf',null,`class`,`alert alert-danger`);
text(elQk2bU.formHandler.getError(`cost`));
ec('div');
}ec('div');
let cmpZmjt = this._lc('cFDdJxnQ9', {parent:component,parentTop:flkModal,props:{checked:component.data.incrementalCost},events:{onchange:function(e) {let $el = this; component.data.incrementalCost = $el.checked}},boolAttrs:{checked:component.data.incrementalCost},attrs:{name:`${(`incrementalCost`).toInputName()}`,label:'Incremental Cost'}});
ec('div');
}let elDx5W2 = eo('h2',null,null,`class`,`m-b-1`);
text(`Word`);
ec('h2');
let elPz0eP = ev('hr');
let elohk2t = eo('div',null,null,`class`,`form-group`);
elohk2t.cls = {'group-error': !!elQk2bU.formHandler.getError(`word`) };

            for (let className in elohk2t.cls) {
                elohk2t.classList.toggle(className, elohk2t.cls[className]);
            }  
            let elLhOSX = eo('label',null,null,`for`,`word`);
text(trans('Word'));
let el2_5au = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elpar0y = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.word = this.value;},function(e) {var $el = this;component.slug = seo($el.value); component.data.word = $el.value.capitalize();},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQk2bU.formHandler.addError(`word`, 'required', trans('validation.required'));}return elQk2bU.formHandler.removeError(`word`);}]},`value`,`${fval(component.data.word)}`,`name`,`${(`word`).toInputName()}`,`placeholder`,`${trans(`Word`)}`,`type`,`text`,`class`,`form-control`,`id`,`word`);
elpar0y.value = fval(component.data.word);
let cnd5yNX = elQk2bU.formHandler.getError(`word`);
this.setState('stDzg8M', cnd5yNX);
if (cnd5yNX) { 
let elQqifN = eo('div','t55f',null,`class`,`alert alert-danger`);
text(elQk2bU.formHandler.getError(`word`));
ec('div');
}ec('div');
let elpkGdC = eo('div',null,null,`class`,`form-group`);
elpkGdC.cls = {'group-error': !!elQk2bU.formHandler.getError(`translation.word`) };

            for (let className in elpkGdC.cls) {
                elpkGdC.classList.toggle(className, elpkGdC.cls[className]);
            }  
            let elMa1Vh = eo('label',null,null,`for`,`translation-word`);
text(trans('Translation'));
let elGLfpM = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el9NZKY = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.translation.word = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQk2bU.formHandler.addError(`translation.word`, 'required', trans('validation.required'));}return elQk2bU.formHandler.removeError(`translation.word`);}]},`value`,`${fval(component.data.translation.word)}`,`name`,`${(`translation.word`).toInputName()}`,`placeholder`,`${trans(`Translation`)}`,`type`,`text`,`class`,`form-control ar`,`id`,`translation-word`);
el9NZKY.value = fval(component.data.translation.word);
let cndGJPo = elQk2bU.formHandler.getError(`translation.word`);
this.setState('stpf7aq', cndGJPo);
if (cndGJPo) { 
let elcvHes = eo('div','hjwf',null,`class`,`alert alert-danger`);
text(elQk2bU.formHandler.getError(`translation.word`));
ec('div');
}ec('div');
let cndUbq8 = component.type == 'category';
this.setState('st607B_', cndUbq8);
let cndudBO = !(cndUbq8);
this.setState('stk3nRn', cndudBO);
if (cndUbq8) { 
let elJxvaf = eo('div','M82f',null,`class`,`form-group`);
elJxvaf.cls = {'group-error': !!elQk2bU.formHandler.getError(`description`) };

            for (let className in elJxvaf.cls) {
                elJxvaf.classList.toggle(className, elJxvaf.cls[className]);
            }  
            let elmSfwy = eo('label','Daff',null,`for`,`description`);
text(trans('Description'));
let elA1k6P = eo('span','FbSf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elhUw_A = eo('textarea','3sxf',null, eventListeners, {oninput:[function(e) {component.data.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQk2bU.formHandler.addError(`description`, 'required', trans('validation.required'));}return elQk2bU.formHandler.removeError(`description`);}]},`value`,`${fval(component.data.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elhUw_A.value = fval(component.data.description);
ec('textarea');
let cnd3Ghv = elQk2bU.formHandler.getError(`description`);
this.setState('st_J4nb', cnd3Ghv);
if (cnd3Ghv) { 
let elgCN6J = eo('div','J7Af',null,`class`,`alert alert-danger`);
text(elQk2bU.formHandler.getError(`description`));
ec('div');
}ec('div');
}let cndgBxt = component.type == 'category';
this.setState('st9xXha', cndgBxt);
let cndPJvz = !(cndgBxt);
this.setState('st9V3GU', cndPJvz);
if (cndgBxt) { 
let elEiL47 = eo('div','4XIf',null,`class`,`form-group`);
elEiL47.cls = {'group-error': !!elQk2bU.formHandler.getError(`translation.description`) };

            for (let className in elEiL47.cls) {
                elEiL47.classList.toggle(className, elEiL47.cls[className]);
            }  
            let elsmuVc = eo('label','z36f',null,`for`,`translation-description`);
text(trans('Translation Description'));
let eldEMpQ = eo('span','iVFf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elpLspy = eo('textarea','Lqdf',null, eventListeners, {oninput:[function(e) {component.data.translation.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQk2bU.formHandler.addError(`translation.description`, 'required', trans('validation.required'));}return elQk2bU.formHandler.removeError(`translation.description`);}]},`value`,`${fval(component.data.translation.description)}`,`name`,`${(`translation.description`).toInputName()}`,`placeholder`,`${trans(`Translation Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`translation-description`);
elpLspy.value = fval(component.data.translation.description);
ec('textarea');
let cnd8yU0 = elQk2bU.formHandler.getError(`translation.description`);
this.setState('stIslvS', cnd8yU0);
if (cnd8yU0) { 
let elatjhn = eo('div','0abf',null,`class`,`alert alert-danger`);
text(elQk2bU.formHandler.getError(`translation.description`));
ec('div');
}ec('div');
}let cndybL7 = component.type == 'category';
this.setState('stluqzy', cndybL7);
let cndKzS0 = !(cndybL7);
this.setState('stW4MUx', cndKzS0);
if (cndybL7) { 
let elZQdXY = eo('div','oV2f',null,`class`,`form-group`);
let elNoG55 = eo('label','FCjf',null,`for`,`image`);
text(`Image`);
ec('label');
component.imageInput = this._lc('cxNAe2BNw', {parent:component,parentTop:flkModal,props:{src:component.data.image},attrs:{src:`${component.data.image}`,name:`${(`image`).toInputName()}`,id:'image',required:''},state:'stluqzy'});
ec('div');
}let elDsego = eo('div',null,null,`class`,`form-group`);
let cnd1IX8 = component.user.accountType == 'admin';
this.setState('stAc_V8', cnd1IX8);
if (cnd1IX8) { 
let cmpPkua = this._lc('c_mZNwXoD', {parent:component,parentTop:flkModal,props:{checked:! component.data.id && component.user.id == 1 ? true : component.data.published},events:{onchange:function(e) {let $el = this; component.data.published = $el.checked}},boolAttrs:{checked:! component.data.id && component.user.id == 1 ? true : component.data.published},attrs:{name:`${(`published`).toInputName()}`,label:'Published',value:1},state:'stAc_V8'});
}ec('div');
let cndf6ku = ! component.data.id;
this.setState('sthPDx2', cndf6ku);
let cndPGcU = !(cndf6ku);
this.setState('sttakQx', cndPGcU);
if (cndf6ku) { 
let elFfT4V = eo('button','p03f',null, eventListeners, {onclick:[function(e) {var $el = this;component.submitThenClear()}]}, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-purple bold`);
text(`SAVE & RESET`);
ec('button');
}else { 
let elwuuD2 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`SAVE`);
ec('button');
}ec('form');
},attrs:{size:'small'}});

                    this.isReadyToGo();
                }
        });