_Component({
                selector: 'task-checklist',
                c: 'TaskChecklist', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['task','addChecklistForm','addNewChecklist','submitChecklist','checklistName','items','unsetArrayIndex','isSending','isValidForm','isAddingChecklistItem','addChecklistItem','currentChecklist','isInEditMode','type','currentItem','allowEditing','confirmRemoving','suggestCheckItemModification','unsuggestCheckItemModification','changeItemStatus','isSuggestingItemControl','modifyingChecklistItem','submitItem','isAboutToRemove','remove'],
                children: {cCegiYqAy:'flk-mdb-checkbox',cwLV8sTn7:'flk-alert'},
                render: function (component) {
                    let elujUtS = eo('section',null,null,`class`,`checklists-wrapper`);
let elb1YN6 = eo('h3');
text(`Checklists (${ component.task.checklists.length })`);
let cndz87n = ! component.addChecklistForm;
this.setState('stfohyP', cndz87n);
let cndhUbg = !(cndz87n);
this.setState('stihDHn', cndhUbg);
if (cndz87n) { 
let el1pCFQ = eo('button','B0Tf',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewChecklist()}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-success`);
let elP9pAB = eo('i','BaXf',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el1pCFQ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Checklist')}`});
        ;
                    }, 20);                
                }else { 
let elP4yfM = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.addChecklistForm = false}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let eliCYCQ = eo('i',null,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elP4yfM;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Close')}`});
        ;
                    }, 20);                
                }let cndOi5e = component.addChecklistForm;
this.setState('st228ua', cndOi5e);
if (cndOi5e) { 
let el9vtcY = eo('form','xyPf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitChecklist($el)}]},`class`,`m-t-2`);

                if (! el9vtcY.formHandler) {
                    window.cfrmdlr = el9vtcY.formHandler = new FormHandler(el9vtcY, component);
                } else {
                    window.cfrmdlr = el9vtcY.formHandler;
                }
            let elLIhLW = eo('div','hDif',null,`class`,`row`);
let elI5wPT = ev('input','16gf',null, eventListeners, {oninput:[function(e) {component.task.id = this.value;}]},`value`,`${fval(component.task.id)}`,`name`,`${(`task`).toInputName()}`,`type`,`hidden`);
elI5wPT.value = fval(component.task.id);
let elHwLg1 = ev('input','bxdf',null, eventListeners, {oninput:[function(e) {component.task.checklists.length = this.value;}]},`value`,`${fval(component.task.checklists.length)}`,`name`,`${(`sortOrder`).toInputName()}`,`type`,`hidden`);
elHwLg1.value = fval(component.task.checklists.length);
let elXajpa = eo('div','WLRf',null,`class`,`col-sm-4`);
let elXkhFz = eo('div','DkAf',null,`class`,`form-group`);
elXkhFz.cls = {'group-error': !!el9vtcY.formHandler.getError(`name`) };

            for (let className in elXkhFz.cls) {
                elXkhFz.classList.toggle(className, elXkhFz.cls[className]);
            }  
            let elK8gMj = eo('label','u68f',null,`for`,`name`);
text(trans('Checklist Name'));
let elPCHQJ = eo('span','yu9f',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elf0OYa = ev('input','TQAf',null, eventListeners, {oninput:[function(e) {component.checklistName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el9vtcY.formHandler.addError(`name`, 'required', trans('validation.required'));}return el9vtcY.formHandler.removeError(`name`);}]},`value`,`${fval(component.checklistName)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Checklist Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elf0OYa.value = fval(component.checklistName);
let cndi3Z9 = el9vtcY.formHandler.getError(`name`);
this.setState('stHsaKY', cndi3Z9);
if (cndi3Z9) { 
let elEeo_p = eo('div','4Ynf',null,`class`,`alert alert-danger`);
text(el9vtcY.formHandler.getError(`name`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elh_Z62 = eo('div',null,null,`class`,`row`);
let el5bRAO = eo('div',null,null,`class`,`col-sm-8`);
for (let index in component.items) {
let item = component.items[index]; 
 let iibWyL = 'ccva44u' + index;
let eleIkIi = eo('div','qNcW_6z2Rge2' + index+iibWyL,null,`class`,`row m-0`);
let el9otd3 = ev('input','dFeff'+iibWyL,null, eventListeners, {oninput:[function(e) {component.items[index] = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el9vtcY.formHandler.addError(`items[]`, 'required', trans('validation.required'));}return el9vtcY.formHandler.removeError(`items[]`);}]},`value`,`${fval(component.items[index])}`,`name`,`${(`items[]`).toInputName()}`,`placeholder`,`${trans(`Checklist Item`)}`,`type`,`text`,`class`,`form-control col-sm-10`,`id`,`items[]`);
el9otd3.value = fval(component.items[index]);
let cndvpxn = el9vtcY.formHandler.getError(`items[]`);
this.setState('stWKZwa', cndvpxn);
if (cndvpxn) { 
let elFvEqt = eo('div','a7kff'+iibWyL,null,`class`,`alert alert-danger`);
text(el9vtcY.formHandler.getError(`items[]`));
ec('div');
}let eleSXBH = eo('div','fwvff'+iibWyL,null,`class`,`col mt-2`);
let elRhw12 = eo('button','vz8ff'+iibWyL,null, eventListeners, {onclick:[function(e) {var $el = this;component.unsetArrayIndex('items', index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elvFY5N = eo('i','vPAff'+iibWyL,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elRhw12;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Item')}`});
        ;
                    }, 20);                
                ec('div');
ec('div');
}
let eloaCnx = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.items.push('')}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-info`);
let elipftU = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eloaCnx;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('add New Item')}`});
        ;
                    }, 20);                
                ec('div');
ec('div');
let elY9kPn = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-sm btn-primary bold`);
text(`Create
                Checklist`);
ec('button');
ec('form');
}let elo08xg = eo('div',null,null,`class`,`row`);
for (let index in component.task.checklists) {
let checklist = component.task.checklists[index]; 
 let iinn1J = checklist.id+ index;
let elLG6ic = eo('div','SGgJepzRkl0T' + index+iinn1J,null,`class`,`col-sm-6 checklist m-t-2 p-0`);
let elF5j9q = eo('div','W6Tff'+iinn1J,null,`class`,`bold`);
let elv8soz = eo('span','MPqff'+iinn1J);
text(checklist.name);
ec('span');
text(`(${ checklist.items.length })`);
let cndvL8r = component.task.canBeModified;
this.setState('stEsY3u', cndvL8r);
if (cndvL8r) { 
let cndqhPF = ! component.isAddingChecklistItem;
this.setState('stvt35p', cndqhPF);
let cndfIIc = component.isAddingChecklistItem && component.currentChecklist.id == checklist.id;
this.setState('stNiflg', cndfIIc);
let cnd5BDv = !(cndqhPF||cndfIIc);
this.setState('st9gNvp', cnd5BDv);
if (cndqhPF) { 
let elVsdil = eo('button','cHxff'+iinn1J,null, eventListeners, {onclick:[function(e) {var $el = this;component.addChecklistItem(checklist)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-success`);
let el8LAjM = eo('i','cTwff'+iinn1J,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elVsdil;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add Item')}`});
        ;
                    }, 20);                
                }else if (cndfIIc) { 
let elVZPgc = eo('button','Yq1ff'+iinn1J,null, eventListeners, {onclick:[function(e) {var $el = this;component.isAddingChecklistItem = false;}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let el2n52s = eo('i','O6Jff'+iinn1J,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elVZPgc;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove')}`});
        ;
                    }, 20);                
                }let cndwWSp = ! component.isInEditMode || component.type != 'checklist' || component.currentItem.id != checklist.id;
this.setState('stc_FEu', cndwWSp);
let cnduoGb = !(cndwWSp);
this.setState('sttDFCO', cnduoGb);
if (cndwWSp) { 
let elQTjfx = eo('button','6baff'+iinn1J,null, eventListeners, {onclick:[function(e) {var $el = this;component.allowEditing(checklist, index, 'checklist')}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-cyan`);
let ellxlSI = eo('i','Intff'+iinn1J,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elQTjfx;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit')}`});
        ;
                    }, 20);                
                }else { 
let eloD7pc = eo('button','vUeff'+iinn1J,null, eventListeners, {onclick:[function(e) {var $el = this;component.isInEditMode = false}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-orange`);
let ell0N5u = eo('i','T5off'+iinn1J,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eloD7pc;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Cancel Editing')}`});
        ;
                    }, 20);                
                }let elYLmIa = eo('button','YmGff'+iinn1J,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(checklist, index, 'checklist')}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elTV_1A = eo('i','r_cff'+iinn1J,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elYLmIa;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove')}`});
        ;
                    }, 20);                
                }ec('div');
let cndXyvz = component.isInEditMode && component.type == 'checklist' && component.currentItem.id == checklist.id;
this.setState('stRuFTu', cndXyvz);
let cnd2jT5 = ! component.isInEditMode || !component.currentItem || component.currentItem.id != checklist.id;
this.setState('st01KRj', cnd2jT5);
if (cndXyvz) { 
let elBtJFB = eo('form','IByff'+iinn1J,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitChecklist($el)}]},`class`,`m-t-2`);

                if (! elBtJFB.formHandler) {
                    window.cfrmdlr = elBtJFB.formHandler = new FormHandler(elBtJFB, component);
                } else {
                    window.cfrmdlr = elBtJFB.formHandler;
                }
            let elffxZf = ev('input','Q2dff'+iinn1J,null, eventListeners, {oninput:[function(e) {component.task.id = this.value;}]},`value`,`${fval(component.task.id)}`,`name`,`${(`task`).toInputName()}`,`type`,`hidden`);
elffxZf.value = fval(component.task.id);
let elLBTZP = ev('input','O01ff'+iinn1J,null, eventListeners, {oninput:[function(e) {component.currentItem.sortOrder = this.value;}]},`value`,`${fval(component.currentItem.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`type`,`hidden`);
elLBTZP.value = fval(component.currentItem.sortOrder);
let elF6aL9 = eo('div','JiQff'+iinn1J,null,`class`,`form-group`);
elF6aL9.cls = {'group-error': !!elBtJFB.formHandler.getError(`name`) };

            for (let className in elF6aL9.cls) {
                elF6aL9.classList.toggle(className, elF6aL9.cls[className]);
            }  
            let el14Hgg = eo('label','CMGff'+iinn1J,null,`for`,`name`);
text(trans('Checklist Name'));
let el3TjL4 = eo('span','OVBff'+iinn1J,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elVL4Mn = ev('input','cu7ff'+iinn1J,null, eventListeners, {oninput:[function(e) {component.currentItem.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elBtJFB.formHandler.addError(`name`, 'required', trans('validation.required'));}return elBtJFB.formHandler.removeError(`name`);}]},`value`,`${fval(component.currentItem.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Checklist Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elVL4Mn.value = fval(component.currentItem.name);
let cndOPOb = elBtJFB.formHandler.getError(`name`);
this.setState('stNhIF5', cndOPOb);
if (cndOPOb) { 
let el1TBiw = eo('div','qfZff'+iinn1J,null,`class`,`alert alert-danger`);
text(elBtJFB.formHandler.getError(`name`));
ec('div');
}ec('div');
let elutVeX = eo('button','cE3ff'+iinn1J,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn bold btn-success bold`);
text(`Update`);
ec('button');
ec('form');
}else if (cnd2jT5) { 
let elcUKI4 = eo('ul','iHVff'+iinn1J,null,`class`,`items`);
for (let i in checklist.items) {
let item = checklist.items[i]; 
 let iiIrLf = item.id+ i;
let elG8G13 = eo('li','NDOmdGEyiGgj' + i+iinn1J+iiIrLf,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.suggestCheckItemModification(item)}],onmouseout:[function(e) {var $el = this;component.unsuggestCheckItemModification()}]},`class`,`item`);
let cmp1DXO = this._lc('cCegiYqAy', {parent:component,props:{label:item.item,value:item.item,checked:item.done},events:{onchange:function(e) {let $el = this; component.changeItemStatus(item, $el.checked)}},boolAttrs:{checked:item.done},state:'st01KRj',insideLoop:true,index:"" +iinn1J+iiIrLf});
let cnd1vEU = component.isSuggestingItemControl && component.modifyingChecklistItem.id == item.id;
this.setState('stIurPE', cnd1vEU);
if (cnd1vEU) { 
let elnLDg1 = eo('button','zOTff'+iinn1J+iiIrLf,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(checklist, index, 'item', item, i)}]},`title`,``,`class`,`btn btn-sm btn-danger btn-circle delete-item-btn`);
let el9ABCJ = eo('i','gh6ff'+iinn1J+iiIrLf,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elnLDg1;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove item')}`});
        ;
                    }, 20);                
                }ec('li');
}
let cndPMYd = component.isAddingChecklistItem && component.currentChecklist.id == checklist.id;
this.setState('stmTSrg', cndPMYd);
if (cndPMYd) { 
let elfaXIQ = eo('li','Pujff'+iinn1J,null,`class`,`item`);
let elHYNnc = eo('form','zSgff'+iinn1J,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitItem($el)}]});

                if (! elHYNnc.formHandler) {
                    window.cfrmdlr = elHYNnc.formHandler = new FormHandler(elHYNnc, component);
                } else {
                    window.cfrmdlr = elHYNnc.formHandler;
                }
            let elmIFAd = ev('input','xdYff'+iinn1J,null, eventListeners, {oninput:[function(e) {component.task.id = this.value;}]},`value`,`${fval(component.task.id)}`,`name`,`${(`task`).toInputName()}`,`type`,`hidden`);
elmIFAd.value = fval(component.task.id);
let elq6V9l = ev('input','sZ5ff'+iinn1J,null, eventListeners, {oninput:[function(e) {component.currentChecklist.id = this.value;}]},`value`,`${fval(component.currentChecklist.id)}`,`name`,`${(`checklist`).toInputName()}`,`type`,`hidden`);
elq6V9l.value = fval(component.currentChecklist.id);
let elyHKnr = ev('input','cFPff'+iinn1J,null, eventListeners, {oninput:[function(e) {component.currentChecklist.length = this.value;}]},`value`,`${fval(component.currentChecklist.length)}`,`name`,`${(`sortOrder`).toInputName()}`,`type`,`hidden`);
elyHKnr.value = fval(component.currentChecklist.length);
let el9Kgkb = ev('input','mbOff'+iinn1J,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elHYNnc.formHandler.addError(`item`, 'required', trans('validation.required'));}return elHYNnc.formHandler.removeError(`item`);}]},`name`,`${(`item`).toInputName()}`,`placeholder`,`${trans(`Checklist Item`)}`,`type`,`text`,`class`,`form-control`,`id`,`item`);

                    setTimeout(function () {
                        let $el = el9Kgkb;
                        
            if (true && ! el9Kgkb.focused) {
                el9Kgkb.setSelectionRange(el9Kgkb.value.length, el9Kgkb.value.length)
                el9Kgkb.focused = true;
                el9Kgkb.focus();
            }
        ;
                    }, 20);                
                let cnd7a2w = elHYNnc.formHandler.getError(`item`);
this.setState('st30p74', cnd7a2w);
if (cnd7a2w) { 
let elGXdAQ = eo('div','W9zff'+iinn1J,null,`class`,`alert alert-danger`);
text(elHYNnc.formHandler.getError(`item`));
ec('div');
}let elqwd1p = eo('button','_14ff'+iinn1J,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-sm btn-primary bold`);
text(`Add Item`);
ec('button');
ec('form');
ec('li');
}ec('ul');
}ec('div');
}
ec('div');
ec('h3');
ec('section');
let cndRtFf = component.isAboutToRemove;
this.setState('stI4gNS', cndRtFf);
if (cndRtFf) { 
let cmpaeKJ = this._lc('cwLV8sTn7', {parent:component,events:{onclose:function(e) {let $el = this; component.isAboutToRemove = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stI4gNS'});
}
                    this.isReadyToGo();
                }
        });