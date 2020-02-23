_Component({
                selector: 'word-modal',
                c: 'WordModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','heading','submit','sent','type','category','slug','data','user','isValidForm','isSending','submitThenClear'],
                children: {cjJDZjeUS:'flk-checkbox',cqm5Kn6mB:'flk-image-input',cZBgwDdfR:'flk-checkbox',crhL4Cphf:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('crhL4Cphf', {parent:component,props:{header:component.heading},events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let elEwBH1 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});
component.form = elEwBH1;

                if (! elEwBH1.formHandler) {
                    window.cfrmdlr = elEwBH1.formHandler = new FormHandler(elEwBH1, component);
                } else {
                    window.cfrmdlr = elEwBH1.formHandler;
                }
            let elr5kN5 = eo('p',null,null,`class`,`bold teal-text`);
text(`Your word will be previewed after submitting and you'll rewarded once approved.`);
ec('p');
let cndppt_ = component.sent === true;
this.setState('stzZYM6', cndppt_);
let cndVxmF = component.sent === false;
this.setState('stpWxms', cndVxmF);
let cndcntb = !(cndppt_||cndVxmF);
this.setState('st4z2bC', cndcntb);
if (cndppt_) { 
let elPuLEH = eo('div','Pv0f',null,`class`,`alert alert-success bold`);
text(`Word has been submitted successfully.`);
ec('div');
}else if (cndVxmF) { 
let elGkndu = eo('div',null,null,`class`,`alert alert-danger bold`);
text(`Word already exists.`);
ec('div');
}let elaTJRl = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elaTJRl.value = fval(component.type);
let cndodBq = component.category;
this.setState('struJbF', cndodBq);
let cndeZek = !(cndodBq);
this.setState('stxKOFu', cndeZek);
if (cndodBq) { 
let elm5flZ = ev('input','Fgff',null, eventListeners, {oninput:[function(e) {component.category.id = this.value;}]},`value`,`${fval(component.category.id)}`,`name`,`${(`categoryId`).toInputName()}`,`type`,`hidden`);
elm5flZ.value = fval(component.category.id);
}let elsZl7o = ev('input',null,null, eventListeners, {oninput:[function(e) {component.slug = this.value;}]},`value`,`${fval(component.slug)}`,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`);
elsZl7o.value = fval(component.slug);
let cndnwK2 = component.type == 'category';
this.setState('stqKPKS', cndnwK2);
let cnd85L1 = !(cndnwK2);
this.setState('stCU83h', cnd85L1);
if (cndnwK2) { 
let elzOHf9 = eo('div','DjYf',null,`class`,`m-b-1`);
let el7Kefa = eo('h2','M48f',null,`class`,`m-b-1`);
text(`Category options`);
ec('h2');
let elRDWUg = ev('hr','J2If');
let elJ1AL3 = eo('div','IBvf',null,`class`,`form-group`);
elJ1AL3.cls = {'group-error': !!elEwBH1.formHandler.getError(`cost`) };

            for (let className in elJ1AL3.cls) {
                elJ1AL3.classList.toggle(className, elJ1AL3.cls[className]);
            }  
            let elkrzPS = eo('label','aHLf',null,`for`,`cost`);
text(trans('Cost'));
let eldRQ9j = eo('span','dDWf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elUJXqa = ev('input','lnGf',null, eventListeners, {oninput:[function(e) {component.data.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elEwBH1.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elEwBH1.formHandler.removeError(`cost`);}]},`value`,`${fval(component.data.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`Cost`)}`,`class`,`form-control`,`type`,`text`,`id`,`cost`);
elUJXqa.value = fval(component.data.cost);
let cndcG6l = elEwBH1.formHandler.getError(`cost`);
this.setState('stknIw3', cndcG6l);
if (cndcG6l) { 
let elDVIPb = eo('div','Kbwf',null,`class`,`alert alert-danger`);
text(elEwBH1.formHandler.getError(`cost`));
ec('div');
}ec('div');
let cmpuIGD = this._lc('cjJDZjeUS', {parent:component,parentTop:flkModal,props:{checked:component.data.incrementalCost},events:{onchange:function(e) {let $el = this; component.data.incrementalCost = $el.checked}},boolAttrs:{checked:component.data.incrementalCost},attrs:{name:`${(`incrementalCost`).toInputName()}`,label:'Incremental Cost'}});
ec('div');
}let elBAL6u = eo('h2',null,null,`class`,`m-b-1`);
text(`Word`);
ec('h2');
let elyi7VI = ev('hr');
let el3K1gy = eo('div',null,null,`class`,`form-group`);
el3K1gy.cls = {'group-error': !!elEwBH1.formHandler.getError(`word`) };

            for (let className in el3K1gy.cls) {
                el3K1gy.classList.toggle(className, el3K1gy.cls[className]);
            }  
            let elwfa55 = eo('label',null,null,`for`,`word`);
text(trans('Word'));
let elCQmMD = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el2rrbN = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.word = this.value;},function(e) {var $el = this;component.slug = seo($el.value); component.data.word = $el.value.capitalize();},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elEwBH1.formHandler.addError(`word`, 'required', trans('validation.required'));}return elEwBH1.formHandler.removeError(`word`);}]},`value`,`${fval(component.data.word)}`,`name`,`${(`word`).toInputName()}`,`placeholder`,`${trans(`Word`)}`,`type`,`text`,`class`,`form-control`,`id`,`word`);
el2rrbN.value = fval(component.data.word);
let cndEdmp = elEwBH1.formHandler.getError(`word`);
this.setState('stytHSt', cndEdmp);
if (cndEdmp) { 
let elqC9CQ = eo('div','G77f',null,`class`,`alert alert-danger`);
text(elEwBH1.formHandler.getError(`word`));
ec('div');
}ec('div');
let el4jSw6 = eo('div',null,null,`class`,`form-group`);
el4jSw6.cls = {'group-error': !!elEwBH1.formHandler.getError(`translation.word`) };

            for (let className in el4jSw6.cls) {
                el4jSw6.classList.toggle(className, el4jSw6.cls[className]);
            }  
            let elGoF7y = eo('label',null,null,`for`,`translation-word`);
text(trans('Translation'));
let elNefmA = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elsAUcv = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.translation.word = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elEwBH1.formHandler.addError(`translation.word`, 'required', trans('validation.required'));}return elEwBH1.formHandler.removeError(`translation.word`);}]},`value`,`${fval(component.data.translation.word)}`,`name`,`${(`translation.word`).toInputName()}`,`placeholder`,`${trans(`Translation`)}`,`type`,`text`,`class`,`form-control ar`,`id`,`translation-word`);
elsAUcv.value = fval(component.data.translation.word);
let cndb449 = elEwBH1.formHandler.getError(`translation.word`);
this.setState('stFf1WL', cndb449);
if (cndb449) { 
let elAYVFr = eo('div','Kspf',null,`class`,`alert alert-danger`);
text(elEwBH1.formHandler.getError(`translation.word`));
ec('div');
}ec('div');
let cnd3ja9 = component.type == 'category';
this.setState('styOZme', cnd3ja9);
let cndkKjC = !(cnd3ja9);
this.setState('stOSU3h', cndkKjC);
if (cnd3ja9) { 
let elGVU4w = eo('div','uO9f',null,`class`,`form-group`);
elGVU4w.cls = {'group-error': !!elEwBH1.formHandler.getError(`description`) };

            for (let className in elGVU4w.cls) {
                elGVU4w.classList.toggle(className, elGVU4w.cls[className]);
            }  
            let elcAWUu = eo('label','Jdgf',null,`for`,`description`);
text(trans('Description'));
let elwvgG7 = eo('span','dnHf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eloQAMR = eo('textarea','IXRf',null, eventListeners, {oninput:[function(e) {component.data.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elEwBH1.formHandler.addError(`description`, 'required', trans('validation.required'));}return elEwBH1.formHandler.removeError(`description`);}]},`value`,`${fval(component.data.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
eloQAMR.value = fval(component.data.description);
ec('textarea');
let cndX9e1 = elEwBH1.formHandler.getError(`description`);
this.setState('stA9mbp', cndX9e1);
if (cndX9e1) { 
let elHR5GO = eo('div','5uDf',null,`class`,`alert alert-danger`);
text(elEwBH1.formHandler.getError(`description`));
ec('div');
}ec('div');
}let cndwAfg = component.type == 'category';
this.setState('st4DVmf', cndwAfg);
let cndMElb = !(cndwAfg);
this.setState('st2ALlY', cndMElb);
if (cndwAfg) { 
let elgdjKn = eo('div','D_lf',null,`class`,`form-group`);
elgdjKn.cls = {'group-error': !!elEwBH1.formHandler.getError(`translation.description`) };

            for (let className in elgdjKn.cls) {
                elgdjKn.classList.toggle(className, elgdjKn.cls[className]);
            }  
            let el_0KKL = eo('label','Vskf',null,`for`,`translation-description`);
text(trans('Translation Description'));
let elyXyfy = eo('span','Aawf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elrez68 = eo('textarea','dFpf',null, eventListeners, {oninput:[function(e) {component.data.translation.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elEwBH1.formHandler.addError(`translation.description`, 'required', trans('validation.required'));}return elEwBH1.formHandler.removeError(`translation.description`);}]},`value`,`${fval(component.data.translation.description)}`,`name`,`${(`translation.description`).toInputName()}`,`placeholder`,`${trans(`Translation Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`translation-description`);
elrez68.value = fval(component.data.translation.description);
ec('textarea');
let cndA_Xu = elEwBH1.formHandler.getError(`translation.description`);
this.setState('stN9eOM', cndA_Xu);
if (cndA_Xu) { 
let elO9o53 = eo('div','ylHf',null,`class`,`alert alert-danger`);
text(elEwBH1.formHandler.getError(`translation.description`));
ec('div');
}ec('div');
}let cndenLW = component.type == 'category';
this.setState('stc3MhT', cndenLW);
let cnda9C2 = !(cndenLW);
this.setState('stBKzkN', cnda9C2);
if (cndenLW) { 
let eldfduU = eo('div','LD5f',null,`class`,`form-group`);
let elCEC_K = eo('label','SGbf',null,`for`,`image`);
text(`Image`);
ec('label');
component.imageInput = this._lc('cqm5Kn6mB', {parent:component,parentTop:flkModal,props:{src:component.data.image},attrs:{src:`${component.data.image}`,name:`${(`image`).toInputName()}`,id:'image',required:''},state:'stc3MhT'});
ec('div');
}let elzTT_K = eo('div',null,null,`class`,`form-group`);
let cnd7Ao8 = component.user.accountType == 'admin';
this.setState('stKYjcu', cnd7Ao8);
if (cnd7Ao8) { 
let cmpdVpc = this._lc('cZBgwDdfR', {parent:component,parentTop:flkModal,props:{checked:! component.data.id && component.user.id == 1 ? true : component.data.published},events:{onchange:function(e) {let $el = this; component.data.published = $el.checked}},boolAttrs:{checked:! component.data.id && component.user.id == 1 ? true : component.data.published},attrs:{name:`${(`published`).toInputName()}`,label:'Published',value:1},state:'stKYjcu'});
}ec('div');
let cndH8Ge = ! component.data.id;
this.setState('stjF6zX', cndH8Ge);
let cndADiF = !(cndH8Ge);
this.setState('st4JY8M', cndADiF);
if (cndH8Ge) { 
let elcQd2a = eo('button','hoQf',null, eventListeners, {onclick:[function(e) {var $el = this;component.submitThenClear()}]}, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-purple bold`);
text(`SAVE & RESET`);
ec('button');
}else { 
let el8aFUo = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`SAVE`);
ec('button');
}ec('form');
},attrs:{size:'small'}});

                    this.isReadyToGo();
                }
        });