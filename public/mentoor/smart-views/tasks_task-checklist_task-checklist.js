_Component({
                selector: 'task-checklist',
                c: 'TaskChecklist', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['task','addChecklistForm','addNewChecklist','submitChecklist','checklistName','items','unsetArrayIndex','isSending','isValidForm','isAddingChecklistItem','addChecklistItem','currentChecklist','isInEditMode','type','currentItem','allowEditing','confirmRemoving','suggestCheckItemModification','unsuggestCheckItemModification','changeItemStatus','isSuggestingItemControl','modifyingChecklistItem','submitItem','isAboutToRemove','remove'],
                children: {cdvuuZOY1:'flk-mdb-checkbox',ciGSrJZiZ:'flk-alert'},
                render: function (component) {
                    let elwSci3 = eo('section',null,null,`class`,`checklists-wrapper`);
let elJCoLq = eo('h3');
text(`Checklists (${ component.task.checklists.length })`);
let cndAt54 = ! component.addChecklistForm;
this.setState('st_VCCL', cndAt54);
let cndVAY2 = !(cndAt54);
this.setState('st3_xGp', cndVAY2);
if (cndAt54) { 
let els42Cx = eo('button','pZ6f',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewChecklist()}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-success`);
let eljGbV3 = eo('i','EH0f',null,`class`,`${fas('plus')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = els42Cx;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Checklist')}`});
        ;
                    }, 20);                
                }else { 
let elKqih7 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.addChecklistForm = false}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elWguUX = eo('i',null,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elKqih7;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Close')}`});
        ;
                    }, 20);                
                }let cndl_I1 = component.addChecklistForm;
this.setState('st_U6vJ', cndl_I1);
if (cndl_I1) { 
let elKZUMs = eo('form','zsVf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitChecklist($el)}]},`class`,`m-t-2`);

                if (! elKZUMs.formHandler) {
                    window.cfrmdlr = elKZUMs.formHandler = new FormHandler(elKZUMs, component);
                } else {
                    window.cfrmdlr = elKZUMs.formHandler;
                }
            let el1IhhL = eo('div','j6pf',null,`class`,`row`);
let elyiR7G = ev('input','Ij3f',null, eventListeners, {oninput:[function(e) {component.task.id = this.value;}]},`value`,`${fval(component.task.id)}`,`name`,`${(`task`).toInputName()}`,`type`,`hidden`);
elyiR7G.value = fval(component.task.id);
let elDxeju = ev('input','Uevf',null, eventListeners, {oninput:[function(e) {component.task.checklists.length = this.value;}]},`value`,`${fval(component.task.checklists.length)}`,`name`,`${(`sortOrder`).toInputName()}`,`type`,`hidden`);
elDxeju.value = fval(component.task.checklists.length);
let ele54Bd = eo('div','Ezyf',null,`class`,`col-sm-4`);
let ellrO_M = eo('div','tZEf',null,`class`,`form-group ${cls({'group-error': !!elKZUMs.formHandler.getError(`name`) })}`);
let elZWg8e = eo('label','g74f',null,`for`,`name`);
text(trans('Checklist Name'));
let elS0edd = eo('span','LO7f',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eljQWwF = ev('input','dwRf',null, eventListeners, {oninput:[function(e) {component.checklistName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elKZUMs.formHandler.addError(`name`, 'required', trans('validation.required'));}return elKZUMs.formHandler.removeError(`name`);}]},`value`,`${fval(component.checklistName)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Checklist Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
eljQWwF.value = fval(component.checklistName);
let cndxofE = elKZUMs.formHandler.getError(`name`);
this.setState('stA1eHn', cndxofE);
if (cndxofE) { 
let elNLLl4 = eo('div','xY_f',null,`class`,`alert alert-danger`);
text(elKZUMs.formHandler.getError(`name`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elHIKUH = eo('div',null,null,`class`,`row`);
let elBFp2n = eo('div',null,null,`class`,`col-sm-8`);
for (let index in component.items) {
let item = component.items[index]; 
 let iiatU8 = '4ZsTI6A' + index;
let elC6N89 = eo('div','qWdcoS0kDatj' + index+iiatU8,null,`class`,`row m-0`);
let elwPJ7a = ev('input','LWPff'+iiatU8,null, eventListeners, {oninput:[function(e) {component.items[index] = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elKZUMs.formHandler.addError(`items[]`, 'required', trans('validation.required'));}return elKZUMs.formHandler.removeError(`items[]`);}]},`value`,`${fval(component.items[index])}`,`name`,`${(`items[]`).toInputName()}`,`placeholder`,`${trans(`Checklist Item`)}`,`type`,`text`,`class`,`form-control col-sm-10`,`id`,`items[]`);
elwPJ7a.value = fval(component.items[index]);
let cndi33Q = elKZUMs.formHandler.getError(`items[]`);
this.setState('stUtmgf', cndi33Q);
if (cndi33Q) { 
let elcAjBM = eo('div','wfSff'+iiatU8,null,`class`,`alert alert-danger`);
text(elKZUMs.formHandler.getError(`items[]`));
ec('div');
}let elTnUwd = eo('div','gEiff'+iiatU8,null,`class`,`col mt-2`);
let elYOcod = eo('button','hgPff'+iiatU8,null, eventListeners, {onclick:[function(e) {var $el = this;component.unsetArrayIndex('items', index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elS5lg5 = eo('i','Tgdff'+iiatU8,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elYOcod;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Item')}`});
        ;
                    }, 20);                
                ec('div');
ec('div');
}
let elqa57J = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.items.push('')}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-info`);
let elp0ona = eo('i',null,null,`class`,`${fas('plus')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elqa57J;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('add New Item')}`});
        ;
                    }, 20);                
                ec('div');
ec('div');
let elFqOQD = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-sm btn-primary bold`);
text(`Create
                Checklist`);
ec('button');
ec('form');
}let eljbU0Y = eo('div',null,null,`class`,`row`);
for (let index in component.task.checklists) {
let checklist = component.task.checklists[index]; 
 let iiV8K9 = checklist.id+ index;
let elnjMzH = eo('div','rHw5BtRjrsLg' + index+iiV8K9,null,`class`,`col-sm-6 checklist m-t-2 p-0`);
let el4MlWw = eo('div','NuOff'+iiV8K9,null,`class`,`bold`);
let elAPIWN = eo('span','VKaff'+iiV8K9);
text(checklist.name);
ec('span');
text(`(${ checklist.items.length })`);
let cndf6_R = component.task.canBeModified;
this.setState('stknt0H', cndf6_R);
if (cndf6_R) { 
let cndTv3z = ! component.isAddingChecklistItem;
this.setState('stXig6t', cndTv3z);
let cndGSLW = component.isAddingChecklistItem && component.currentChecklist.id == checklist.id;
this.setState('sto1ZV7', cndGSLW);
let cndC8a7 = !(cndTv3z||cndGSLW);
this.setState('stEhGDo', cndC8a7);
if (cndTv3z) { 
let elKxdJp = eo('button','38lff'+iiV8K9,null, eventListeners, {onclick:[function(e) {var $el = this;component.addChecklistItem(checklist)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-success`);
let el2Bg7a = eo('i','_IXff'+iiV8K9,null,`class`,`${fas('plus')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elKxdJp;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add Item')}`});
        ;
                    }, 20);                
                }else if (cndGSLW) { 
let el9qxHW = eo('button','6ULff'+iiV8K9,null, eventListeners, {onclick:[function(e) {var $el = this;component.isAddingChecklistItem = false;}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let el9lXIc = eo('i','Rlpff'+iiV8K9,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el9qxHW;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove')}`});
        ;
                    }, 20);                
                }let cndm5LN = ! component.isInEditMode || component.type != 'checklist' || component.currentItem.id != checklist.id;
this.setState('stNFBts', cndm5LN);
let cndqbJF = !(cndm5LN);
this.setState('sto4DkS', cndqbJF);
if (cndm5LN) { 
let elVVz3I = eo('button','lHgff'+iiV8K9,null, eventListeners, {onclick:[function(e) {var $el = this;component.allowEditing(checklist, index, 'checklist')}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-cyan`);
let elZr9Fo = eo('i','ihFff'+iiV8K9,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elVVz3I;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit')}`});
        ;
                    }, 20);                
                }else { 
let eldP_rN = eo('button','Vq2ff'+iiV8K9,null, eventListeners, {onclick:[function(e) {var $el = this;component.isInEditMode = false}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-orange`);
let elEFhWj = eo('i','HNTff'+iiV8K9,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eldP_rN;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Cancel Editing')}`});
        ;
                    }, 20);                
                }let elGUvBY = eo('button','B5yff'+iiV8K9,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(checklist, index, 'checklist')}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elZ1qhH = eo('i','Xfcff'+iiV8K9,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elGUvBY;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove')}`});
        ;
                    }, 20);                
                }ec('div');
let cndxtIP = component.isInEditMode && component.type == 'checklist' && component.currentItem.id == checklist.id;
this.setState('stMtXCr', cndxtIP);
let cnde3ia = ! component.isInEditMode || !component.currentItem || component.currentItem.id != checklist.id;
this.setState('stm1ERk', cnde3ia);
if (cndxtIP) { 
let elVl888 = eo('form','7sZff'+iiV8K9,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitChecklist($el)}]},`class`,`m-t-2`);

                if (! elVl888.formHandler) {
                    window.cfrmdlr = elVl888.formHandler = new FormHandler(elVl888, component);
                } else {
                    window.cfrmdlr = elVl888.formHandler;
                }
            let elhXyEH = ev('input','Ri3ff'+iiV8K9,null, eventListeners, {oninput:[function(e) {component.task.id = this.value;}]},`value`,`${fval(component.task.id)}`,`name`,`${(`task`).toInputName()}`,`type`,`hidden`);
elhXyEH.value = fval(component.task.id);
let elKg5j6 = ev('input','m3tff'+iiV8K9,null, eventListeners, {oninput:[function(e) {component.currentItem.sortOrder = this.value;}]},`value`,`${fval(component.currentItem.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`type`,`hidden`);
elKg5j6.value = fval(component.currentItem.sortOrder);
let elvtbn0 = eo('div','awJff'+iiV8K9,null,`class`,`form-group ${cls({'group-error': !!elVl888.formHandler.getError(`name`) })}`);
let elJnw_a = eo('label','lP6ff'+iiV8K9,null,`for`,`name`);
text(trans('Checklist Name'));
let elaUTPK = eo('span','FUCff'+iiV8K9,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elgdsKw = ev('input','9YAff'+iiV8K9,null, eventListeners, {oninput:[function(e) {component.currentItem.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elVl888.formHandler.addError(`name`, 'required', trans('validation.required'));}return elVl888.formHandler.removeError(`name`);}]},`value`,`${fval(component.currentItem.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Checklist Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elgdsKw.value = fval(component.currentItem.name);
let cndIQY8 = elVl888.formHandler.getError(`name`);
this.setState('stMvl4o', cndIQY8);
if (cndIQY8) { 
let elJH1Mz = eo('div','QRTff'+iiV8K9,null,`class`,`alert alert-danger`);
text(elVl888.formHandler.getError(`name`));
ec('div');
}ec('div');
let elSU8uf = eo('button','Chqff'+iiV8K9,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn bold btn-success bold`);
text(`Update`);
ec('button');
ec('form');
}else if (cnde3ia) { 
let elHtJEn = eo('ul','Lrxff'+iiV8K9,null,`class`,`items`);
for (let i in checklist.items) {
let item = checklist.items[i]; 
 let ii981N = item.id+ i;
let elIstM6 = eo('li','P9BjxNWuiIHW' + i+iiV8K9+ii981N,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.suggestCheckItemModification(item)}],onmouseout:[function(e) {var $el = this;component.unsuggestCheckItemModification()}]},`class`,`item`);
let cmppn4V = this._lc('cdvuuZOY1', {parent:component,props:{label:item.item,value:item.item,checked:item.done},events:{onchange:function(e) {let $el = this; component.changeItemStatus(item, $el.checked)}},boolAttrs:{checked:item.done},state:'stm1ERk',insideLoop:true,index:"" +iiV8K9+ii981N});
let cnd_bOq = component.isSuggestingItemControl && component.modifyingChecklistItem.id == item.id;
this.setState('stWMf4P', cnd_bOq);
if (cnd_bOq) { 
let elZ4rbJ = eo('button','i8yff'+iiV8K9+ii981N,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(checklist, index, 'item', item, i)}]},`title`,``,`class`,`btn btn-sm btn-danger btn-circle delete-item-btn`);
let el_tgQG = eo('i','6ORff'+iiV8K9+ii981N,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elZ4rbJ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove item')}`});
        ;
                    }, 20);                
                }ec('li');
}
let cndA1kU = component.isAddingChecklistItem && component.currentChecklist.id == checklist.id;
this.setState('stjOnGJ', cndA1kU);
if (cndA1kU) { 
let eloi02_ = eo('li','HWCff'+iiV8K9,null,`class`,`item`);
let el29RYX = eo('form','M9uff'+iiV8K9,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitItem($el)}]});

                if (! el29RYX.formHandler) {
                    window.cfrmdlr = el29RYX.formHandler = new FormHandler(el29RYX, component);
                } else {
                    window.cfrmdlr = el29RYX.formHandler;
                }
            let elDbCHS = ev('input','AbUff'+iiV8K9,null, eventListeners, {oninput:[function(e) {component.task.id = this.value;}]},`value`,`${fval(component.task.id)}`,`name`,`${(`task`).toInputName()}`,`type`,`hidden`);
elDbCHS.value = fval(component.task.id);
let elmL6AQ = ev('input','ATwff'+iiV8K9,null, eventListeners, {oninput:[function(e) {component.currentChecklist.id = this.value;}]},`value`,`${fval(component.currentChecklist.id)}`,`name`,`${(`checklist`).toInputName()}`,`type`,`hidden`);
elmL6AQ.value = fval(component.currentChecklist.id);
let ele2hRh = ev('input','RPdff'+iiV8K9,null, eventListeners, {oninput:[function(e) {component.currentChecklist.length = this.value;}]},`value`,`${fval(component.currentChecklist.length)}`,`name`,`${(`sortOrder`).toInputName()}`,`type`,`hidden`);
ele2hRh.value = fval(component.currentChecklist.length);
let eljU_Wy = ev('input','q3off'+iiV8K9,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el29RYX.formHandler.addError(`item`, 'required', trans('validation.required'));}return el29RYX.formHandler.removeError(`item`);}]},`name`,`${(`item`).toInputName()}`,`placeholder`,`${trans(`Checklist Item`)}`,`type`,`text`,`class`,`form-control`,`id`,`item`);

                    setTimeout(function () {
                        let $el = eljU_Wy;
                        
            if (true && ! eljU_Wy.focused) {
                eljU_Wy.setSelectionRange(eljU_Wy.value.length, eljU_Wy.value.length)
                eljU_Wy.focused = true;
                eljU_Wy.focus();
            }
        ;
                    }, 20);                
                let cndh3AS = el29RYX.formHandler.getError(`item`);
this.setState('stRsDR7', cndh3AS);
if (cndh3AS) { 
let elTJdft = eo('div','rsfff'+iiV8K9,null,`class`,`alert alert-danger`);
text(el29RYX.formHandler.getError(`item`));
ec('div');
}let eltiyMM = eo('button','OP_ff'+iiV8K9,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-sm btn-primary bold`);
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
let cndfx0t = component.isAboutToRemove;
this.setState('stdgmVG', cndfx0t);
if (cndfx0t) { 
let cmpLd4b = this._lc('ciGSrJZiZ', {parent:component,events:{onclose:function(e) {let $el = this; component.isAboutToRemove = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stdgmVG'});
}
                    this.isReadyToGo();
                }
        });