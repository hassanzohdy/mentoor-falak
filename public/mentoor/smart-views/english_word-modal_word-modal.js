_Component({
                selector: 'word-modal',
                c: 'WordModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','heading','submit','sent','type','category','slug','data','user','isValidForm','isSending','submitThenClear'],
                children: {cqUf7eLPJ:'flk-checkbox',cn1y6Xfkl:'flk-image-input',ckwaq4pYa:'flk-checkbox',c4_ZclUa5:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('c4_ZclUa5', {parent:component,props:{header:component.heading},events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let elL37iE = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});
component.form = elL37iE;

                if (! elL37iE.formHandler) {
                    window.cfrmdlr = elL37iE.formHandler = new FormHandler(elL37iE, component);
                } else {
                    window.cfrmdlr = elL37iE.formHandler;
                }
            let elM05tF = eo('p',null,null,`class`,`bold teal-text`);
text(`Your word will be previewed after submitting and you'll rewarded once approved.`);
ec('p');
let cndiIFy = component.sent === true;
this.setState('styAlhQ', cndiIFy);
let cndI4wR = component.sent === false;
this.setState('stJcQF_', cndI4wR);
let cndpPTj = !(cndiIFy||cndI4wR);
this.setState('stR_hg7', cndpPTj);
if (cndiIFy) { 
let elaameG = eo('div','ujWf',null,`class`,`alert alert-success bold`);
text(`Word has been submitted successfully.`);
ec('div');
}else if (cndI4wR) { 
let elUpR7H = eo('div',null,null,`class`,`alert alert-danger bold`);
text(`Word already exists.`);
ec('div');
}let elXmu4b = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elXmu4b.value = fval(component.type);
let cndvbjb = component.category;
this.setState('stPVsM3', cndvbjb);
let cndcO8h = !(cndvbjb);
this.setState('st0GgZt', cndcO8h);
if (cndvbjb) { 
let elDaWXL = ev('input','fATf',null, eventListeners, {oninput:[function(e) {component.category.id = this.value;}]},`value`,`${fval(component.category.id)}`,`name`,`${(`categoryId`).toInputName()}`,`type`,`hidden`);
elDaWXL.value = fval(component.category.id);
}let elAX_mA = ev('input',null,null, eventListeners, {oninput:[function(e) {component.slug = this.value;}]},`value`,`${fval(component.slug)}`,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`);
elAX_mA.value = fval(component.slug);
let cndTu7Z = component.type == 'category';
this.setState('stblC_2', cndTu7Z);
let cndA0s8 = !(cndTu7Z);
this.setState('stWesAj', cndA0s8);
if (cndTu7Z) { 
let el1OVF5 = eo('div','3VVf',null,`class`,`m-b-1`);
let el36maA = eo('h2','CG8f',null,`class`,`m-b-1`);
text(`Category options`);
ec('h2');
let elq602o = ev('hr','CWIf');
let elp5U94 = eo('div','hogf',null,`class`,`form-group`);
elp5U94.cls = {'group-error': !!elL37iE.formHandler.getError(`cost`) };

            for (let className in elp5U94.cls) {
                elp5U94.classList.toggle(className, elp5U94.cls[className]);
            }  
            let elUmj5U = eo('label','u09f',null,`for`,`cost`);
text(trans('Cost'));
let elxEOFO = eo('span','wTnf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el1EEhE = ev('input','lLAf',null, eventListeners, {oninput:[function(e) {component.data.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elL37iE.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elL37iE.formHandler.removeError(`cost`);}]},`value`,`${fval(component.data.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`Cost`)}`,`class`,`form-control`,`type`,`text`,`id`,`cost`);
el1EEhE.value = fval(component.data.cost);
let cndWzbH = elL37iE.formHandler.getError(`cost`);
this.setState('stSm8kk', cndWzbH);
if (cndWzbH) { 
let el7D2eI = eo('div','Nqtf',null,`class`,`alert alert-danger`);
text(elL37iE.formHandler.getError(`cost`));
ec('div');
}ec('div');
let cmpkiqN = this._lc('cqUf7eLPJ', {parent:component,parentTop:flkModal,props:{checked:component.data.incrementalCost},events:{onchange:function(e) {let $el = this; component.data.incrementalCost = $el.checked}},boolAttrs:{checked:component.data.incrementalCost},attrs:{name:`${(`incrementalCost`).toInputName()}`,label:'Incremental Cost'}});
ec('div');
}let elEUM1p = eo('h2',null,null,`class`,`m-b-1`);
text(`Word`);
ec('h2');
let elrjQNU = ev('hr');
let elIPHYO = eo('div',null,null,`class`,`form-group`);
elIPHYO.cls = {'group-error': !!elL37iE.formHandler.getError(`word`) };

            for (let className in elIPHYO.cls) {
                elIPHYO.classList.toggle(className, elIPHYO.cls[className]);
            }  
            let elBioQM = eo('label',null,null,`for`,`word`);
text(trans('Word'));
let el0vpcU = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el03M0b = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.word = this.value;},function(e) {var $el = this;component.slug = seo($el.value); component.data.word = $el.value.capitalize();},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elL37iE.formHandler.addError(`word`, 'required', trans('validation.required'));}return elL37iE.formHandler.removeError(`word`);}]},`value`,`${fval(component.data.word)}`,`name`,`${(`word`).toInputName()}`,`placeholder`,`${trans(`Word`)}`,`type`,`text`,`class`,`form-control`,`id`,`word`);
el03M0b.value = fval(component.data.word);
let cndIvBJ = elL37iE.formHandler.getError(`word`);
this.setState('str_a2m', cndIvBJ);
if (cndIvBJ) { 
let elhGoVy = eo('div','YBDf',null,`class`,`alert alert-danger`);
text(elL37iE.formHandler.getError(`word`));
ec('div');
}ec('div');
let elxjJ3u = eo('div',null,null,`class`,`form-group`);
elxjJ3u.cls = {'group-error': !!elL37iE.formHandler.getError(`translation.word`) };

            for (let className in elxjJ3u.cls) {
                elxjJ3u.classList.toggle(className, elxjJ3u.cls[className]);
            }  
            let el_YjYx = eo('label',null,null,`for`,`translation-word`);
text(trans('Translation'));
let elx245r = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el5a0_k = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.translation.word = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elL37iE.formHandler.addError(`translation.word`, 'required', trans('validation.required'));}return elL37iE.formHandler.removeError(`translation.word`);}]},`value`,`${fval(component.data.translation.word)}`,`name`,`${(`translation.word`).toInputName()}`,`placeholder`,`${trans(`Translation`)}`,`type`,`text`,`class`,`form-control ar`,`id`,`translation-word`);
el5a0_k.value = fval(component.data.translation.word);
let cndE10M = elL37iE.formHandler.getError(`translation.word`);
this.setState('st2WZre', cndE10M);
if (cndE10M) { 
let elI73Bk = eo('div','I6_f',null,`class`,`alert alert-danger`);
text(elL37iE.formHandler.getError(`translation.word`));
ec('div');
}ec('div');
let cnd5RES = component.type == 'category';
this.setState('stG6xsO', cnd5RES);
let cndg9t2 = !(cnd5RES);
this.setState('stpTaN5', cndg9t2);
if (cnd5RES) { 
let elTrScw = eo('div','nHff',null,`class`,`form-group`);
elTrScw.cls = {'group-error': !!elL37iE.formHandler.getError(`description`) };

            for (let className in elTrScw.cls) {
                elTrScw.classList.toggle(className, elTrScw.cls[className]);
            }  
            let elpfvNw = eo('label','Uqbf',null,`for`,`description`);
text(trans('Description'));
let eloT2ye = eo('span','I4Cf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elDpoXZ = eo('textarea','UUDf',null, eventListeners, {oninput:[function(e) {component.data.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elL37iE.formHandler.addError(`description`, 'required', trans('validation.required'));}return elL37iE.formHandler.removeError(`description`);}]},`value`,`${fval(component.data.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elDpoXZ.value = fval(component.data.description);
ec('textarea');
let cndwwIv = elL37iE.formHandler.getError(`description`);
this.setState('stt9SoA', cndwwIv);
if (cndwwIv) { 
let elk7myb = eo('div','RpRf',null,`class`,`alert alert-danger`);
text(elL37iE.formHandler.getError(`description`));
ec('div');
}ec('div');
}let cnd7zni = component.type == 'category';
this.setState('stW8Xf2', cnd7zni);
let cnd2hdv = !(cnd7zni);
this.setState('stsSlK9', cnd2hdv);
if (cnd7zni) { 
let elTKVJP = eo('div','ncsf',null,`class`,`form-group`);
elTKVJP.cls = {'group-error': !!elL37iE.formHandler.getError(`translation.description`) };

            for (let className in elTKVJP.cls) {
                elTKVJP.classList.toggle(className, elTKVJP.cls[className]);
            }  
            let el6UnQw = eo('label','Rb4f',null,`for`,`translation-description`);
text(trans('Translation Description'));
let elUtJgd = eo('span','CNff',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elK4vwW = eo('textarea','evKf',null, eventListeners, {oninput:[function(e) {component.data.translation.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elL37iE.formHandler.addError(`translation.description`, 'required', trans('validation.required'));}return elL37iE.formHandler.removeError(`translation.description`);}]},`value`,`${fval(component.data.translation.description)}`,`name`,`${(`translation.description`).toInputName()}`,`placeholder`,`${trans(`Translation Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`translation-description`);
elK4vwW.value = fval(component.data.translation.description);
ec('textarea');
let cnd9_2o = elL37iE.formHandler.getError(`translation.description`);
this.setState('stN5QsB', cnd9_2o);
if (cnd9_2o) { 
let elD2Uvb = eo('div','ztnf',null,`class`,`alert alert-danger`);
text(elL37iE.formHandler.getError(`translation.description`));
ec('div');
}ec('div');
}let cndDvsJ = component.type == 'category';
this.setState('stwKuDR', cndDvsJ);
let cndlpd0 = !(cndDvsJ);
this.setState('stqsu9_', cndlpd0);
if (cndDvsJ) { 
let el_Fg9d = eo('div','5hVf',null,`class`,`form-group`);
let elEvyc5 = eo('label','_TZf',null,`for`,`image`);
text(`Image`);
ec('label');
component.imageInput = this._lc('cn1y6Xfkl', {parent:component,parentTop:flkModal,props:{src:component.data.image},attrs:{src:`${component.data.image}`,name:`${(`image`).toInputName()}`,id:'image',required:''},state:'stwKuDR'});
ec('div');
}let elmkBRe = eo('div',null,null,`class`,`form-group`);
let cndAID1 = component.user.accountType == 'admin';
this.setState('stzTcq_', cndAID1);
if (cndAID1) { 
let cmpbn4j = this._lc('ckwaq4pYa', {parent:component,parentTop:flkModal,props:{checked:! component.data.id && component.user.id == 1 ? true : component.data.published},events:{onchange:function(e) {let $el = this; component.data.published = $el.checked}},boolAttrs:{checked:! component.data.id && component.user.id == 1 ? true : component.data.published},attrs:{name:`${(`published`).toInputName()}`,label:'Published',value:1},state:'stzTcq_'});
}ec('div');
let cnd4UzF = ! component.data.id;
this.setState('st3A5lD', cnd4UzF);
let cnd7B2u = !(cnd4UzF);
this.setState('stRSZXt', cnd7B2u);
if (cnd4UzF) { 
let elrCX7q = eo('button','Xcyf',null, eventListeners, {onclick:[function(e) {var $el = this;component.submitThenClear()}]}, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-purple bold`);
text(`SAVE & RESET`);
ec('button');
}else { 
let elX8Y7W = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`SAVE`);
ec('button');
}ec('form');
},attrs:{size:'small'}});

                    this.isReadyToGo();
                }
        });