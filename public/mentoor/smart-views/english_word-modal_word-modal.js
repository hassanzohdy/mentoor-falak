_Component({
                selector: 'word-modal',
                c: 'WordModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','heading','submit','sent','type','category','slug','data','user','isValidForm','isSending','submitThenClear'],
                children: {caJC20gur:'flk-checkbox',cCJz80GAF:'flk-image-input',cqHUekuwy:'flk-checkbox',cVaMScm5q:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cVaMScm5q', {parent:component,props:{header:component.heading},events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let eliqL5b = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});
component.form = eliqL5b;

                if (! eliqL5b.formHandler) {
                    window.cfrmdlr = eliqL5b.formHandler = new FormHandler(eliqL5b, component);
                } else {
                    window.cfrmdlr = eliqL5b.formHandler;
                }
            let elCAxXa = eo('p',null,null,`class`,`bold teal-text`);
text(`Your word will be previewed after submitting and you'll rewarded once approved.`);
ec('p');
let cndQiR5 = component.sent === true;
this.setState('stkqisH', cndQiR5);
let cndCYpb = component.sent === false;
this.setState('stolwT5', cndCYpb);
let cndSMjQ = !(cndQiR5||cndCYpb);
this.setState('stEh0h8', cndSMjQ);
if (cndQiR5) { 
let el53rdR = eo('div','U_nf',null,`class`,`alert alert-success bold`);
text(`Word has been submitted successfully.`);
ec('div');
}else if (cndCYpb) { 
let elKkngY = eo('div',null,null,`class`,`alert alert-danger bold`);
text(`Word already exists.`);
ec('div');
}let eloadJU = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
eloadJU.value = fval(component.type);
let cnd1mxy = component.category;
this.setState('stHLNv2', cnd1mxy);
let cndVSZo = !(cnd1mxy);
this.setState('stf4mZG', cndVSZo);
if (cnd1mxy) { 
let elTqf_5 = ev('input','Xm2f',null, eventListeners, {oninput:[function(e) {component.category.id = this.value;}]},`value`,`${fval(component.category.id)}`,`name`,`${(`categoryId`).toInputName()}`,`type`,`hidden`);
elTqf_5.value = fval(component.category.id);
}let elhOXpF = ev('input',null,null, eventListeners, {oninput:[function(e) {component.slug = this.value;}]},`value`,`${fval(component.slug)}`,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`);
elhOXpF.value = fval(component.slug);
let cndKQLc = component.type == 'category';
this.setState('stWV4eH', cndKQLc);
let cndWITu = !(cndKQLc);
this.setState('st6lKs0', cndWITu);
if (cndKQLc) { 
let elLWyg0 = eo('div','cbMf',null,`class`,`m-b-1`);
let eldTTZP = eo('h2','5VHf',null,`class`,`m-b-1`);
text(`Category options`);
ec('h2');
let elhz8ZU = ev('hr','ZDWf');
let el_8GEM = eo('div','fMDf',null,`class`,`form-group`);
el_8GEM.cls = {'group-error': !!eliqL5b.formHandler.getError(`cost`) };

            for (let className in el_8GEM.cls) {
                el_8GEM.classList.toggle(className, el_8GEM.cls[className]);
            }  
            let elDTkZv = eo('label','LN4f',null,`for`,`cost`);
text(trans('Cost'));
let elbLuUD = eo('span','PRDf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eltdFx1 = ev('input','ZHCf',null, eventListeners, {oninput:[function(e) {component.data.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eliqL5b.formHandler.addError(`cost`, 'required', trans('validation.required'));}return eliqL5b.formHandler.removeError(`cost`);}]},`value`,`${fval(component.data.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`Cost`)}`,`class`,`form-control`,`type`,`text`,`id`,`cost`);
eltdFx1.value = fval(component.data.cost);
let cndE1ZE = eliqL5b.formHandler.getError(`cost`);
this.setState('stLyfRt', cndE1ZE);
if (cndE1ZE) { 
let elfxFgk = eo('div','I6lf',null,`class`,`alert alert-danger`);
text(eliqL5b.formHandler.getError(`cost`));
ec('div');
}ec('div');
let cmpYelD = this._lc('caJC20gur', {parent:component,parentTop:flkModal,props:{checked:component.data.incrementalCost},events:{onchange:function(e) {let $el = this; component.data.incrementalCost = $el.checked}},boolAttrs:{checked:component.data.incrementalCost},attrs:{name:`${(`incrementalCost`).toInputName()}`,label:'Incremental Cost'}});
ec('div');
}let elae8Wf = eo('h2',null,null,`class`,`m-b-1`);
text(`Word`);
ec('h2');
let elEL9bC = ev('hr');
let el4woXe = eo('div',null,null,`class`,`form-group`);
el4woXe.cls = {'group-error': !!eliqL5b.formHandler.getError(`word`) };

            for (let className in el4woXe.cls) {
                el4woXe.classList.toggle(className, el4woXe.cls[className]);
            }  
            let elAXG6z = eo('label',null,null,`for`,`word`);
text(trans('Word'));
let elbKbtY = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elUOzoq = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.word = this.value;},function(e) {var $el = this;component.slug = seo($el.value); component.data.word = $el.value.capitalize();},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eliqL5b.formHandler.addError(`word`, 'required', trans('validation.required'));}return eliqL5b.formHandler.removeError(`word`);}]},`value`,`${fval(component.data.word)}`,`name`,`${(`word`).toInputName()}`,`placeholder`,`${trans(`Word`)}`,`type`,`text`,`class`,`form-control`,`id`,`word`);
elUOzoq.value = fval(component.data.word);
let cnddFWq = eliqL5b.formHandler.getError(`word`);
this.setState('stNORaj', cnddFWq);
if (cnddFWq) { 
let el0zyTq = eo('div','XUMf',null,`class`,`alert alert-danger`);
text(eliqL5b.formHandler.getError(`word`));
ec('div');
}ec('div');
let el6yetA = eo('div',null,null,`class`,`form-group`);
el6yetA.cls = {'group-error': !!eliqL5b.formHandler.getError(`translation.word`) };

            for (let className in el6yetA.cls) {
                el6yetA.classList.toggle(className, el6yetA.cls[className]);
            }  
            let elGfYvF = eo('label',null,null,`for`,`translation-word`);
text(trans('Translation'));
let el3PJWL = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elnx7ZJ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.translation.word = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eliqL5b.formHandler.addError(`translation.word`, 'required', trans('validation.required'));}return eliqL5b.formHandler.removeError(`translation.word`);}]},`value`,`${fval(component.data.translation.word)}`,`name`,`${(`translation.word`).toInputName()}`,`placeholder`,`${trans(`Translation`)}`,`type`,`text`,`class`,`form-control ar`,`id`,`translation-word`);
elnx7ZJ.value = fval(component.data.translation.word);
let cndP8ua = eliqL5b.formHandler.getError(`translation.word`);
this.setState('stpZL9Z', cndP8ua);
if (cndP8ua) { 
let elxJsD0 = eo('div','tSTf',null,`class`,`alert alert-danger`);
text(eliqL5b.formHandler.getError(`translation.word`));
ec('div');
}ec('div');
let cnd4mUd = component.type == 'category';
this.setState('stdMGla', cnd4mUd);
let cnd4Tt2 = !(cnd4mUd);
this.setState('sthc4wI', cnd4Tt2);
if (cnd4mUd) { 
let elIi1jf = eo('div','tNif',null,`class`,`form-group`);
elIi1jf.cls = {'group-error': !!eliqL5b.formHandler.getError(`description`) };

            for (let className in elIi1jf.cls) {
                elIi1jf.classList.toggle(className, elIi1jf.cls[className]);
            }  
            let el0MeQ2 = eo('label','Xvhf',null,`for`,`description`);
text(trans('Description'));
let elsAQmV = eo('span','aHHf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elCHXuh = eo('textarea','hmLf',null, eventListeners, {oninput:[function(e) {component.data.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eliqL5b.formHandler.addError(`description`, 'required', trans('validation.required'));}return eliqL5b.formHandler.removeError(`description`);}]},`value`,`${fval(component.data.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elCHXuh.value = fval(component.data.description);
ec('textarea');
let cndnGXq = eliqL5b.formHandler.getError(`description`);
this.setState('stXC32w', cndnGXq);
if (cndnGXq) { 
let elk__gw = eo('div','sxnf',null,`class`,`alert alert-danger`);
text(eliqL5b.formHandler.getError(`description`));
ec('div');
}ec('div');
}let cnd3iiI = component.type == 'category';
this.setState('stH4Omy', cnd3iiI);
let cndsMKu = !(cnd3iiI);
this.setState('stTs7fe', cndsMKu);
if (cnd3iiI) { 
let elc1DkQ = eo('div','UUlf',null,`class`,`form-group`);
elc1DkQ.cls = {'group-error': !!eliqL5b.formHandler.getError(`translation.description`) };

            for (let className in elc1DkQ.cls) {
                elc1DkQ.classList.toggle(className, elc1DkQ.cls[className]);
            }  
            let elYkMsS = eo('label','O8cf',null,`for`,`translation-description`);
text(trans('Translation Description'));
let elCEvkY = eo('span','Mwzf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el3yqbH = eo('textarea','PmKf',null, eventListeners, {oninput:[function(e) {component.data.translation.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eliqL5b.formHandler.addError(`translation.description`, 'required', trans('validation.required'));}return eliqL5b.formHandler.removeError(`translation.description`);}]},`value`,`${fval(component.data.translation.description)}`,`name`,`${(`translation.description`).toInputName()}`,`placeholder`,`${trans(`Translation Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`translation-description`);
el3yqbH.value = fval(component.data.translation.description);
ec('textarea');
let cnd1lUy = eliqL5b.formHandler.getError(`translation.description`);
this.setState('st7FH0B', cnd1lUy);
if (cnd1lUy) { 
let elJoRDh = eo('div','ErVf',null,`class`,`alert alert-danger`);
text(eliqL5b.formHandler.getError(`translation.description`));
ec('div');
}ec('div');
}let cndl8i6 = component.type == 'category';
this.setState('stX3Ige', cndl8i6);
let cnddeIm = !(cndl8i6);
this.setState('stuq0yk', cnddeIm);
if (cndl8i6) { 
let elRLg3N = eo('div','rF3f',null,`class`,`form-group`);
let elo51g6 = eo('label','iHof',null,`for`,`image`);
text(`Image`);
ec('label');
component.imageInput = this._lc('cCJz80GAF', {parent:component,parentTop:flkModal,props:{src:component.data.image},attrs:{src:`${component.data.image}`,name:`${(`image`).toInputName()}`,id:'image',required:''},state:'stX3Ige'});
ec('div');
}let elP5IW8 = eo('div',null,null,`class`,`form-group`);
let cndEuxr = component.user.accountType == 'admin';
this.setState('stOtwnr', cndEuxr);
if (cndEuxr) { 
let cmpncyU = this._lc('cqHUekuwy', {parent:component,parentTop:flkModal,props:{checked:! component.data.id && component.user.id == 1 ? true : component.data.published},events:{onchange:function(e) {let $el = this; component.data.published = $el.checked}},boolAttrs:{checked:! component.data.id && component.user.id == 1 ? true : component.data.published},attrs:{name:`${(`published`).toInputName()}`,label:'Published',value:1},state:'stOtwnr'});
}ec('div');
let cndFz0Q = ! component.data.id;
this.setState('stghZfa', cndFz0Q);
let cndjVxr = !(cndFz0Q);
this.setState('st7mgLa', cndjVxr);
if (cndFz0Q) { 
let elhnjm5 = eo('button','Si_f',null, eventListeners, {onclick:[function(e) {var $el = this;component.submitThenClear()}]}, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-purple bold`);
text(`SAVE & RESET`);
ec('button');
}else { 
let elnD7jI = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`SAVE`);
ec('button');
}ec('form');
},attrs:{size:'small'}});

                    this.isReadyToGo();
                }
        });