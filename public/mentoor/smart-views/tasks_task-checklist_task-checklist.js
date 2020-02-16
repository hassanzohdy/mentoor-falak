_Component({
                selector: 'task-checklist',
                c: 'TaskChecklist', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['task','addChecklistForm','addNewChecklist','submitChecklist','checklistName','items','unsetArrayIndex','isSending','isValidForm','isAddingChecklistItem','addChecklistItem','currentChecklist','isInEditMode','type','currentItem','allowEditing','confirmRemoving','suggestCheckItemModification','unsuggestCheckItemModification','changeItemStatus','isSuggestingItemControl','modifyingChecklistItem','submitItem','isAboutToRemove','remove'],
                children: {cC0JyUVui:'flk-mdb-checkbox',cON0QcEtf:'flk-alert'},
                render: function (component) {
                    let elkSvxC = eo('section',null,null,`class`,`checklists-wrapper`);
let elSuW63 = eo('h3');
text(`Checklists (${ component.task.checklists.length })`);
let cndIEsY = ! component.addChecklistForm;
this.setState('ste0iXt', cndIEsY);
let cndLorn = !(cndIEsY);
this.setState('stURRIu', cndLorn);
if (cndIEsY) { 
let elB9rLh = eo('button','c2cf',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewChecklist()}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-success`);
let elkqemO = eo('i','0shf',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elB9rLh;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Checklist')}`});
        ;
                    }, 20);                
                }else { 
let elspERo = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.addChecklistForm = false}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elZQmXE = eo('i',null,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elspERo;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Close')}`});
        ;
                    }, 20);                
                }let cndLsBb = component.addChecklistForm;
this.setState('stQoNX8', cndLsBb);
if (cndLsBb) { 
let elMKJUy = eo('form','RCVf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitChecklist($el)}]},`class`,`m-t-2`);

                if (! elMKJUy.formHandler) {
                    window.cfrmdlr = elMKJUy.formHandler = new FormHandler(elMKJUy, component);
                } else {
                    window.cfrmdlr = elMKJUy.formHandler;
                }
            let el4_rR0 = eo('div','i7Tf',null,`class`,`row`);
let el8Otlu = ev('input','_w5f',null, eventListeners, {oninput:[function(e) {component.task.id = this.value;}]},`value`,`${fval(component.task.id)}`,`name`,`${(`task`).toInputName()}`,`type`,`hidden`);
el8Otlu.value = fval(component.task.id);
let elHbYAf = ev('input','EuFf',null, eventListeners, {oninput:[function(e) {component.task.checklists.length = this.value;}]},`value`,`${fval(component.task.checklists.length)}`,`name`,`${(`sortOrder`).toInputName()}`,`type`,`hidden`);
elHbYAf.value = fval(component.task.checklists.length);
let elDhVb1 = eo('div','S7pf',null,`class`,`col-sm-4`);
let elojhs5 = eo('div','RFXf',null,`class`,`form-group`);
elojhs5.cls = {'group-error': !!elMKJUy.formHandler.getError(`name`) };

            for (let className in elojhs5.cls) {
                elojhs5.classList.toggle(className, elojhs5.cls[className]);
            }  
            let elWDKSX = eo('label','zVqf',null,`for`,`name`);
text(trans('Checklist Name'));
let elvJoKb = eo('span','Zxuf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elBLPzs = ev('input','W0jf',null, eventListeners, {oninput:[function(e) {component.checklistName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elMKJUy.formHandler.addError(`name`, 'required', trans('validation.required'));}return elMKJUy.formHandler.removeError(`name`);}]},`value`,`${fval(component.checklistName)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Checklist Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elBLPzs.value = fval(component.checklistName);
let cndMEWS = elMKJUy.formHandler.getError(`name`);
this.setState('stXKfRv', cndMEWS);
if (cndMEWS) { 
let el4FMfL = eo('div','joAf',null,`class`,`alert alert-danger`);
text(elMKJUy.formHandler.getError(`name`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elJO3ag = eo('div',null,null,`class`,`row`);
let elUMGUN = eo('div',null,null,`class`,`col-sm-8`);
for (let index in component.items) {
let item = component.items[index]; 
 let iiRl0R = 'bQO39Kq' + index;
let el71St4 = eo('div','bvIrUCcl9Tg_' + index+iiRl0R,null,`class`,`row m-0`);
let elVVFqN = ev('input','af3ff'+iiRl0R,null, eventListeners, {oninput:[function(e) {component.items[index] = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elMKJUy.formHandler.addError(`items[]`, 'required', trans('validation.required'));}return elMKJUy.formHandler.removeError(`items[]`);}]},`value`,`${fval(component.items[index])}`,`name`,`${(`items[]`).toInputName()}`,`placeholder`,`${trans(`Checklist Item`)}`,`type`,`text`,`class`,`form-control col-sm-10`,`id`,`items[]`);
elVVFqN.value = fval(component.items[index]);
let cndYejC = elMKJUy.formHandler.getError(`items[]`);
this.setState('stHdghP', cndYejC);
if (cndYejC) { 
let el_ZiDt = eo('div','GP5ff'+iiRl0R,null,`class`,`alert alert-danger`);
text(elMKJUy.formHandler.getError(`items[]`));
ec('div');
}let el3_tK_ = eo('div','K4Fff'+iiRl0R,null,`class`,`col mt-2`);
let elKXwCJ = eo('button','zeJff'+iiRl0R,null, eventListeners, {onclick:[function(e) {var $el = this;component.unsetArrayIndex('items', index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let el58Zh3 = eo('i','l5aff'+iiRl0R,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elKXwCJ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Item')}`});
        ;
                    }, 20);                
                ec('div');
ec('div');
}
let eleEcBs = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.items.push('')}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-info`);
let elhY2pv = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eleEcBs;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('add New Item')}`});
        ;
                    }, 20);                
                ec('div');
ec('div');
let elGvyU8 = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-sm btn-primary bold`);
text(`Create
                Checklist`);
ec('button');
ec('form');
}let eleFUdn = eo('div',null,null,`class`,`row`);
for (let index in component.task.checklists) {
let checklist = component.task.checklists[index]; 
 let iioC6X = checklist.id+ index;
let elLstOA = eo('div','NDJSdjKgPd38' + index+iioC6X,null,`class`,`col-sm-6 checklist m-t-2 p-0`);
let elbd1iA = eo('div','CMWff'+iioC6X,null,`class`,`bold`);
let elauMyw = eo('span','n1off'+iioC6X);
text(checklist.name);
ec('span');
text(`(${ checklist.items.length })`);
let cndS5Un = component.task.canBeModified;
this.setState('stzMCgs', cndS5Un);
if (cndS5Un) { 
let cndbZAI = ! component.isAddingChecklistItem;
this.setState('stkPDBH', cndbZAI);
let cndJDLH = component.isAddingChecklistItem && component.currentChecklist.id == checklist.id;
this.setState('stok3fh', cndJDLH);
let cndDwMv = !(cndbZAI||cndJDLH);
this.setState('stFDeH7', cndDwMv);
if (cndbZAI) { 
let elBzoVP = eo('button','GHkff'+iioC6X,null, eventListeners, {onclick:[function(e) {var $el = this;component.addChecklistItem(checklist)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-success`);
let elQZAmx = eo('i','DWYff'+iioC6X,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elBzoVP;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add Item')}`});
        ;
                    }, 20);                
                }else if (cndJDLH) { 
let elpa09H = eo('button','Eqoff'+iioC6X,null, eventListeners, {onclick:[function(e) {var $el = this;component.isAddingChecklistItem = false;}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let el0ADtl = eo('i','Juaff'+iioC6X,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elpa09H;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove')}`});
        ;
                    }, 20);                
                }let cnd1adN = ! component.isInEditMode || component.type != 'checklist' || component.currentItem.id != checklist.id;
this.setState('stCdnF_', cnd1adN);
let cndvDje = !(cnd1adN);
this.setState('stSgOVr', cndvDje);
if (cnd1adN) { 
let eliVebr = eo('button','15Uff'+iioC6X,null, eventListeners, {onclick:[function(e) {var $el = this;component.allowEditing(checklist, index, 'checklist')}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-cyan`);
let elfwea0 = eo('i','SYdff'+iioC6X,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eliVebr;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit')}`});
        ;
                    }, 20);                
                }else { 
let elOmSj4 = eo('button','Mt9ff'+iioC6X,null, eventListeners, {onclick:[function(e) {var $el = this;component.isInEditMode = false}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-orange`);
let elrL3HI = eo('i','QbJff'+iioC6X,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elOmSj4;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Cancel Editing')}`});
        ;
                    }, 20);                
                }let eljB1nF = eo('button','ow6ff'+iioC6X,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(checklist, index, 'checklist')}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elUpnv4 = eo('i','xLSff'+iioC6X,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eljB1nF;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove')}`});
        ;
                    }, 20);                
                }ec('div');
let cndUO0Z = component.isInEditMode && component.type == 'checklist' && component.currentItem.id == checklist.id;
this.setState('stDKBJ2', cndUO0Z);
let cndTfhd = ! component.isInEditMode || !component.currentItem || component.currentItem.id != checklist.id;
this.setState('stjoIqM', cndTfhd);
if (cndUO0Z) { 
let elJff8A = eo('form','o1nff'+iioC6X,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitChecklist($el)}]},`class`,`m-t-2`);

                if (! elJff8A.formHandler) {
                    window.cfrmdlr = elJff8A.formHandler = new FormHandler(elJff8A, component);
                } else {
                    window.cfrmdlr = elJff8A.formHandler;
                }
            let el1nwjF = ev('input','T9Hff'+iioC6X,null, eventListeners, {oninput:[function(e) {component.task.id = this.value;}]},`value`,`${fval(component.task.id)}`,`name`,`${(`task`).toInputName()}`,`type`,`hidden`);
el1nwjF.value = fval(component.task.id);
let el_Lpzj = ev('input','NORff'+iioC6X,null, eventListeners, {oninput:[function(e) {component.currentItem.sortOrder = this.value;}]},`value`,`${fval(component.currentItem.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`type`,`hidden`);
el_Lpzj.value = fval(component.currentItem.sortOrder);
let ele8NS7 = eo('div','bAEff'+iioC6X,null,`class`,`form-group`);
ele8NS7.cls = {'group-error': !!elJff8A.formHandler.getError(`name`) };

            for (let className in ele8NS7.cls) {
                ele8NS7.classList.toggle(className, ele8NS7.cls[className]);
            }  
            let elelSVe = eo('label','hsJff'+iioC6X,null,`for`,`name`);
text(trans('Checklist Name'));
let elNB83L = eo('span','_xkff'+iioC6X,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elAuITT = ev('input','OGnff'+iioC6X,null, eventListeners, {oninput:[function(e) {component.currentItem.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elJff8A.formHandler.addError(`name`, 'required', trans('validation.required'));}return elJff8A.formHandler.removeError(`name`);}]},`value`,`${fval(component.currentItem.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Checklist Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elAuITT.value = fval(component.currentItem.name);
let cnd_ovG = elJff8A.formHandler.getError(`name`);
this.setState('stOv3KY', cnd_ovG);
if (cnd_ovG) { 
let elqHIWT = eo('div','A_1ff'+iioC6X,null,`class`,`alert alert-danger`);
text(elJff8A.formHandler.getError(`name`));
ec('div');
}ec('div');
let elz7Zqj = eo('button','Jn7ff'+iioC6X,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn bold btn-success bold`);
text(`Update`);
ec('button');
ec('form');
}else if (cndTfhd) { 
let elkJu6k = eo('ul','Zclff'+iioC6X,null,`class`,`items`);
for (let i in checklist.items) {
let item = checklist.items[i]; 
 let ii2w9P = item.id+ i;
let elIwl2u = eo('li','veDhpzaSSc0c' + i+iioC6X+ii2w9P,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.suggestCheckItemModification(item)}],onmouseout:[function(e) {var $el = this;component.unsuggestCheckItemModification()}]},`class`,`item`);
let cmpGxRh = this._lc('cC0JyUVui', {parent:component,props:{label:item.item,value:item.item,checked:item.done},events:{onchange:function(e) {let $el = this; component.changeItemStatus(item, $el.checked)}},boolAttrs:{checked:item.done},state:'stjoIqM',insideLoop:true,index:"" +iioC6X+ii2w9P});
let cndSxnZ = component.isSuggestingItemControl && component.modifyingChecklistItem.id == item.id;
this.setState('stKDr11', cndSxnZ);
if (cndSxnZ) { 
let elzCZce = eo('button','Cgrff'+iioC6X+ii2w9P,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(checklist, index, 'item', item, i)}]},`title`,``,`class`,`btn btn-sm btn-danger btn-circle delete-item-btn`);
let elbOiYC = eo('i','Yg1ff'+iioC6X+ii2w9P,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elzCZce;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove item')}`});
        ;
                    }, 20);                
                }ec('li');
}
let cndK33D = component.isAddingChecklistItem && component.currentChecklist.id == checklist.id;
this.setState('st6Vg8A', cndK33D);
if (cndK33D) { 
let elOB1_8 = eo('li','9syff'+iioC6X,null,`class`,`item`);
let elBiNwJ = eo('form','_nAff'+iioC6X,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitItem($el)}]});

                if (! elBiNwJ.formHandler) {
                    window.cfrmdlr = elBiNwJ.formHandler = new FormHandler(elBiNwJ, component);
                } else {
                    window.cfrmdlr = elBiNwJ.formHandler;
                }
            let elqcdEw = ev('input','DL0ff'+iioC6X,null, eventListeners, {oninput:[function(e) {component.task.id = this.value;}]},`value`,`${fval(component.task.id)}`,`name`,`${(`task`).toInputName()}`,`type`,`hidden`);
elqcdEw.value = fval(component.task.id);
let elCsYU3 = ev('input','bDxff'+iioC6X,null, eventListeners, {oninput:[function(e) {component.currentChecklist.id = this.value;}]},`value`,`${fval(component.currentChecklist.id)}`,`name`,`${(`checklist`).toInputName()}`,`type`,`hidden`);
elCsYU3.value = fval(component.currentChecklist.id);
let ellyXYV = ev('input','Bm8ff'+iioC6X,null, eventListeners, {oninput:[function(e) {component.currentChecklist.length = this.value;}]},`value`,`${fval(component.currentChecklist.length)}`,`name`,`${(`sortOrder`).toInputName()}`,`type`,`hidden`);
ellyXYV.value = fval(component.currentChecklist.length);
let elxn71U = ev('input','gFzff'+iioC6X,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elBiNwJ.formHandler.addError(`item`, 'required', trans('validation.required'));}return elBiNwJ.formHandler.removeError(`item`);}]},`name`,`${(`item`).toInputName()}`,`placeholder`,`${trans(`Checklist Item`)}`,`type`,`text`,`class`,`form-control`,`id`,`item`);

                    setTimeout(function () {
                        let $el = elxn71U;
                        
            if (true && ! elxn71U.focused) {
                elxn71U.setSelectionRange(elxn71U.value.length, elxn71U.value.length)
                elxn71U.focused = true;
                elxn71U.focus();
            }
        ;
                    }, 20);                
                let cndvjQZ = elBiNwJ.formHandler.getError(`item`);
this.setState('stiFeZT', cndvjQZ);
if (cndvjQZ) { 
let elHxlmh = eo('div','HKvff'+iioC6X,null,`class`,`alert alert-danger`);
text(elBiNwJ.formHandler.getError(`item`));
ec('div');
}let elF4gHz = eo('button','Czvff'+iioC6X,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-sm btn-primary bold`);
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
let cndLNn2 = component.isAboutToRemove;
this.setState('stqYKbF', cndLNn2);
if (cndLNn2) { 
let cmpuitq = this._lc('cON0QcEtf', {parent:component,events:{onclose:function(e) {let $el = this; component.isAboutToRemove = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stqYKbF'});
}
                    this.isReadyToGo();
                }
        });