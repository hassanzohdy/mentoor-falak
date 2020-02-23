_Component({
                selector: 'task-checklist',
                c: 'TaskChecklist', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['task','addChecklistForm','addNewChecklist','submitChecklist','checklistName','items','unsetArrayIndex','isSending','isValidForm','isAddingChecklistItem','addChecklistItem','currentChecklist','isInEditMode','type','currentItem','allowEditing','confirmRemoving','suggestCheckItemModification','unsuggestCheckItemModification','changeItemStatus','isSuggestingItemControl','modifyingChecklistItem','submitItem','isAboutToRemove','remove'],
                children: {cYs9rEOmC:'flk-mdb-checkbox',cWCz8Mixw:'flk-alert'},
                render: function (component) {
                    let elzmyF4 = eo('section',null,null,`class`,`checklists-wrapper`);
let elbxO0m = eo('h3');
text(`Checklists (${ component.task.checklists.length })`);
let cnddwQd = ! component.addChecklistForm;
this.setState('ste87oP', cnddwQd);
let cndzH8b = !(cnddwQd);
this.setState('stGOnWl', cndzH8b);
if (cnddwQd) { 
let elUXCpU = eo('button','KAjf',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewChecklist()}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-success`);
let elP13fR = eo('i','XkCf',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elUXCpU;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Checklist')}`});
        ;
                    }, 20);                
                }else { 
let elWCToX = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.addChecklistForm = false}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elNQ971 = eo('i',null,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elWCToX;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Close')}`});
        ;
                    }, 20);                
                }let cndPEef = component.addChecklistForm;
this.setState('st4ytd_', cndPEef);
if (cndPEef) { 
let el0pK_g = eo('form','6d5f',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitChecklist($el)}]},`class`,`m-t-2`);

                if (! el0pK_g.formHandler) {
                    window.cfrmdlr = el0pK_g.formHandler = new FormHandler(el0pK_g, component);
                } else {
                    window.cfrmdlr = el0pK_g.formHandler;
                }
            let eluSjT1 = eo('div','8p7f',null,`class`,`row`);
let elYPSOX = ev('input','cw6f',null, eventListeners, {oninput:[function(e) {component.task.id = this.value;}]},`value`,`${fval(component.task.id)}`,`name`,`${(`task`).toInputName()}`,`type`,`hidden`);
elYPSOX.value = fval(component.task.id);
let elirvA2 = ev('input','dzvf',null, eventListeners, {oninput:[function(e) {component.task.checklists.length = this.value;}]},`value`,`${fval(component.task.checklists.length)}`,`name`,`${(`sortOrder`).toInputName()}`,`type`,`hidden`);
elirvA2.value = fval(component.task.checklists.length);
let el4Ude6 = eo('div','V7jf',null,`class`,`col-sm-4`);
let elY3U4u = eo('div','fYnf',null,`class`,`form-group`);
elY3U4u.cls = {'group-error': !!el0pK_g.formHandler.getError(`name`) };

            for (let className in elY3U4u.cls) {
                elY3U4u.classList.toggle(className, elY3U4u.cls[className]);
            }  
            let elc5qh7 = eo('label','bXmf',null,`for`,`name`);
text(trans('Checklist Name'));
let elLasx9 = eo('span','hTtf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el3mZxy = ev('input','IlCf',null, eventListeners, {oninput:[function(e) {component.checklistName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el0pK_g.formHandler.addError(`name`, 'required', trans('validation.required'));}return el0pK_g.formHandler.removeError(`name`);}]},`value`,`${fval(component.checklistName)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Checklist Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el3mZxy.value = fval(component.checklistName);
let cndKNLM = el0pK_g.formHandler.getError(`name`);
this.setState('stW7Ztx', cndKNLM);
if (cndKNLM) { 
let elwNQBa = eo('div','H9ff',null,`class`,`alert alert-danger`);
text(el0pK_g.formHandler.getError(`name`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elP56Rr = eo('div',null,null,`class`,`row`);
let elc3oZc = eo('div',null,null,`class`,`col-sm-8`);
for (let index in component.items) {
let item = component.items[index]; 
 let iiz_2k = 'rOJA3y5' + index;
let elGWh6r = eo('div','IFm7FHZ_abIm' + index+iiz_2k,null,`class`,`row m-0`);
let elBgNhV = ev('input','t2Kff'+iiz_2k,null, eventListeners, {oninput:[function(e) {component.items[index] = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el0pK_g.formHandler.addError(`items[]`, 'required', trans('validation.required'));}return el0pK_g.formHandler.removeError(`items[]`);}]},`value`,`${fval(component.items[index])}`,`name`,`${(`items[]`).toInputName()}`,`placeholder`,`${trans(`Checklist Item`)}`,`type`,`text`,`class`,`form-control col-sm-10`,`id`,`items[]`);
elBgNhV.value = fval(component.items[index]);
let cndNJzM = el0pK_g.formHandler.getError(`items[]`);
this.setState('stQiF5U', cndNJzM);
if (cndNJzM) { 
let elsynht = eo('div','FEnff'+iiz_2k,null,`class`,`alert alert-danger`);
text(el0pK_g.formHandler.getError(`items[]`));
ec('div');
}let elC90jD = eo('div','ex4ff'+iiz_2k,null,`class`,`col mt-2`);
let elcW8cW = eo('button','Kadff'+iiz_2k,null, eventListeners, {onclick:[function(e) {var $el = this;component.unsetArrayIndex('items', index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elhShA_ = eo('i','uT2ff'+iiz_2k,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elcW8cW;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Item')}`});
        ;
                    }, 20);                
                ec('div');
ec('div');
}
let elFXlbx = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.items.push('')}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-info`);
let elRbAqt = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elFXlbx;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('add New Item')}`});
        ;
                    }, 20);                
                ec('div');
ec('div');
let elYKOKw = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-sm btn-primary bold`);
text(`Create
                Checklist`);
ec('button');
ec('form');
}let elEs_Ux = eo('div',null,null,`class`,`row`);
for (let index in component.task.checklists) {
let checklist = component.task.checklists[index]; 
 let ii8YOp = checklist.id+ index;
let elmU9Br = eo('div','ZRV_s86vQJ6K' + index+ii8YOp,null,`class`,`col-sm-6 checklist m-t-2 p-0`);
let eldiWv8 = eo('div','d_Sff'+ii8YOp,null,`class`,`bold`);
let elcl5nP = eo('span','UXhff'+ii8YOp);
text(checklist.name);
ec('span');
text(`(${ checklist.items.length })`);
let cndY8cr = component.task.canBeModified;
this.setState('stx1LFc', cndY8cr);
if (cndY8cr) { 
let cnd1TOo = ! component.isAddingChecklistItem;
this.setState('st_G4MA', cnd1TOo);
let cndWkCT = component.isAddingChecklistItem && component.currentChecklist.id == checklist.id;
this.setState('stLPCqa', cndWkCT);
let cndLdsj = !(cnd1TOo||cndWkCT);
this.setState('stLfMpT', cndLdsj);
if (cnd1TOo) { 
let elYPJCw = eo('button','y1vff'+ii8YOp,null, eventListeners, {onclick:[function(e) {var $el = this;component.addChecklistItem(checklist)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-success`);
let ellPqYJ = eo('i','RnMff'+ii8YOp,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elYPJCw;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add Item')}`});
        ;
                    }, 20);                
                }else if (cndWkCT) { 
let elyhGWY = eo('button','1nTff'+ii8YOp,null, eventListeners, {onclick:[function(e) {var $el = this;component.isAddingChecklistItem = false;}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elIduX_ = eo('i','oI6ff'+ii8YOp,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elyhGWY;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove')}`});
        ;
                    }, 20);                
                }let cndWqd9 = ! component.isInEditMode || component.type != 'checklist' || component.currentItem.id != checklist.id;
this.setState('stNIcqD', cndWqd9);
let cnd81q9 = !(cndWqd9);
this.setState('stdZGtp', cnd81q9);
if (cndWqd9) { 
let elPw3Ki = eo('button','GtHff'+ii8YOp,null, eventListeners, {onclick:[function(e) {var $el = this;component.allowEditing(checklist, index, 'checklist')}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-cyan`);
let el8u1tC = eo('i','3ewff'+ii8YOp,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elPw3Ki;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit')}`});
        ;
                    }, 20);                
                }else { 
let elMXdmH = eo('button','smbff'+ii8YOp,null, eventListeners, {onclick:[function(e) {var $el = this;component.isInEditMode = false}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-orange`);
let elY5Jat = eo('i','vUHff'+ii8YOp,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elMXdmH;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Cancel Editing')}`});
        ;
                    }, 20);                
                }let elelwOA = eo('button','iJXff'+ii8YOp,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(checklist, index, 'checklist')}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elUlVh6 = eo('i','YxKff'+ii8YOp,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elelwOA;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove')}`});
        ;
                    }, 20);                
                }ec('div');
let cnd229S = component.isInEditMode && component.type == 'checklist' && component.currentItem.id == checklist.id;
this.setState('stSOjxg', cnd229S);
let cndxfoa = ! component.isInEditMode || !component.currentItem || component.currentItem.id != checklist.id;
this.setState('stb0EvZ', cndxfoa);
if (cnd229S) { 
let elJAsVm = eo('form','c_Mff'+ii8YOp,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitChecklist($el)}]},`class`,`m-t-2`);

                if (! elJAsVm.formHandler) {
                    window.cfrmdlr = elJAsVm.formHandler = new FormHandler(elJAsVm, component);
                } else {
                    window.cfrmdlr = elJAsVm.formHandler;
                }
            let el6Y0vn = ev('input','aGsff'+ii8YOp,null, eventListeners, {oninput:[function(e) {component.task.id = this.value;}]},`value`,`${fval(component.task.id)}`,`name`,`${(`task`).toInputName()}`,`type`,`hidden`);
el6Y0vn.value = fval(component.task.id);
let elTFOtS = ev('input','MTtff'+ii8YOp,null, eventListeners, {oninput:[function(e) {component.currentItem.sortOrder = this.value;}]},`value`,`${fval(component.currentItem.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`type`,`hidden`);
elTFOtS.value = fval(component.currentItem.sortOrder);
let el02tFR = eo('div','xJMff'+ii8YOp,null,`class`,`form-group`);
el02tFR.cls = {'group-error': !!elJAsVm.formHandler.getError(`name`) };

            for (let className in el02tFR.cls) {
                el02tFR.classList.toggle(className, el02tFR.cls[className]);
            }  
            let el1p24c = eo('label','RRoff'+ii8YOp,null,`for`,`name`);
text(trans('Checklist Name'));
let elnqv59 = eo('span','nkbff'+ii8YOp,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el1VjIm = ev('input','wHQff'+ii8YOp,null, eventListeners, {oninput:[function(e) {component.currentItem.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elJAsVm.formHandler.addError(`name`, 'required', trans('validation.required'));}return elJAsVm.formHandler.removeError(`name`);}]},`value`,`${fval(component.currentItem.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Checklist Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el1VjIm.value = fval(component.currentItem.name);
let cnd56fa = elJAsVm.formHandler.getError(`name`);
this.setState('stW7oMj', cnd56fa);
if (cnd56fa) { 
let elPndbb = eo('div','Hbyff'+ii8YOp,null,`class`,`alert alert-danger`);
text(elJAsVm.formHandler.getError(`name`));
ec('div');
}ec('div');
let el1VVsp = eo('button','97fff'+ii8YOp,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn bold btn-success bold`);
text(`Update`);
ec('button');
ec('form');
}else if (cndxfoa) { 
let elqUBoM = eo('ul','5Poff'+ii8YOp,null,`class`,`items`);
for (let i in checklist.items) {
let item = checklist.items[i]; 
 let ii9SdE = item.id+ i;
let eloDZMY = eo('li','hbN9zdy5XtGb' + i+ii8YOp+ii9SdE,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.suggestCheckItemModification(item)}],onmouseout:[function(e) {var $el = this;component.unsuggestCheckItemModification()}]},`class`,`item`);
let cmpeMOW = this._lc('cYs9rEOmC', {parent:component,props:{label:item.item,value:item.item,checked:item.done},events:{onchange:function(e) {let $el = this; component.changeItemStatus(item, $el.checked)}},boolAttrs:{checked:item.done},state:'stb0EvZ',insideLoop:true,index:"" +ii8YOp+ii9SdE});
let cndvT3w = component.isSuggestingItemControl && component.modifyingChecklistItem.id == item.id;
this.setState('stRgmzZ', cndvT3w);
if (cndvT3w) { 
let el8UMc8 = eo('button','REEff'+ii8YOp+ii9SdE,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(checklist, index, 'item', item, i)}]},`title`,``,`class`,`btn btn-sm btn-danger btn-circle delete-item-btn`);
let elzUpw1 = eo('i','9jGff'+ii8YOp+ii9SdE,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el8UMc8;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove item')}`});
        ;
                    }, 20);                
                }ec('li');
}
let cndkPHl = component.isAddingChecklistItem && component.currentChecklist.id == checklist.id;
this.setState('stYL_Xm', cndkPHl);
if (cndkPHl) { 
let elY7Xwy = eo('li','5RXff'+ii8YOp,null,`class`,`item`);
let el5HjmY = eo('form','kVjff'+ii8YOp,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitItem($el)}]});

                if (! el5HjmY.formHandler) {
                    window.cfrmdlr = el5HjmY.formHandler = new FormHandler(el5HjmY, component);
                } else {
                    window.cfrmdlr = el5HjmY.formHandler;
                }
            let elgpEsK = ev('input','kHtff'+ii8YOp,null, eventListeners, {oninput:[function(e) {component.task.id = this.value;}]},`value`,`${fval(component.task.id)}`,`name`,`${(`task`).toInputName()}`,`type`,`hidden`);
elgpEsK.value = fval(component.task.id);
let elA529U = ev('input','qWzff'+ii8YOp,null, eventListeners, {oninput:[function(e) {component.currentChecklist.id = this.value;}]},`value`,`${fval(component.currentChecklist.id)}`,`name`,`${(`checklist`).toInputName()}`,`type`,`hidden`);
elA529U.value = fval(component.currentChecklist.id);
let elwUNgb = ev('input','cHzff'+ii8YOp,null, eventListeners, {oninput:[function(e) {component.currentChecklist.length = this.value;}]},`value`,`${fval(component.currentChecklist.length)}`,`name`,`${(`sortOrder`).toInputName()}`,`type`,`hidden`);
elwUNgb.value = fval(component.currentChecklist.length);
let elozNJF = ev('input','cbqff'+ii8YOp,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el5HjmY.formHandler.addError(`item`, 'required', trans('validation.required'));}return el5HjmY.formHandler.removeError(`item`);}]},`name`,`${(`item`).toInputName()}`,`placeholder`,`${trans(`Checklist Item`)}`,`type`,`text`,`class`,`form-control`,`id`,`item`);

                    setTimeout(function () {
                        let $el = elozNJF;
                        
            if (true && ! elozNJF.focused) {
                elozNJF.setSelectionRange(elozNJF.value.length, elozNJF.value.length)
                elozNJF.focused = true;
                elozNJF.focus();
            }
        ;
                    }, 20);                
                let cndizGM = el5HjmY.formHandler.getError(`item`);
this.setState('stSBILP', cndizGM);
if (cndizGM) { 
let elsuBwi = eo('div','S2Nff'+ii8YOp,null,`class`,`alert alert-danger`);
text(el5HjmY.formHandler.getError(`item`));
ec('div');
}let ellduLP = eo('button','gPYff'+ii8YOp,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-sm btn-primary bold`);
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
let cnd_MrR = component.isAboutToRemove;
this.setState('st8ryLx', cnd_MrR);
if (cnd_MrR) { 
let cmpDlq0 = this._lc('cWCz8Mixw', {parent:component,events:{onclose:function(e) {let $el = this; component.isAboutToRemove = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st8ryLx'});
}
                    this.isReadyToGo();
                }
        });