_Component({
                selector: 'task-checklist',
                c: 'TaskChecklist', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['task','addChecklistForm','addNewChecklist','submitChecklist','checklistName','items','unsetArrayIndex','isSending','isValidForm','isAddingChecklistItem','addChecklistItem','currentChecklist','isInEditMode','type','currentItem','allowEditing','confirmRemoving','suggestCheckItemModification','unsuggestCheckItemModification','changeItemStatus','isSuggestingItemControl','modifyingChecklistItem','submitItem','isAboutToRemove','remove'],
                children: {cOILIgLqi:'flk-mdb-checkbox',cDqvcxSLm:'flk-alert'},
                render: function (component) {
                    let elTdVvW = eo('section',null,null,`class`,`checklists-wrapper`);
let elq_wd5 = eo('h3');
text(`Checklists (${ component.task.checklists.length })`);
let cndqfJK = ! component.addChecklistForm;
this.setState('stvtfky', cndqfJK);
let cnd85Pt = !(cndqfJK);
this.setState('st_O9iR', cnd85Pt);
if (cndqfJK) { 
let elwNisL = eo('button','zrPf',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewChecklist()}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-success`);
let elXa1kx = eo('i','Pr7f',null,`class`,`${fas('plus')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elwNisL;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Checklist')}`});
        ;
                    }, 20);                
                }else { 
let elmdFPC = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.addChecklistForm = false}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elB_2xp = eo('i',null,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elmdFPC;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Close')}`});
        ;
                    }, 20);                
                }let cndkXxY = component.addChecklistForm;
this.setState('st8Tc1M', cndkXxY);
if (cndkXxY) { 
let el43Zak = eo('form','EEkf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitChecklist($el)}]},`class`,`m-t-2`);

                if (! el43Zak.formHandler) {
                    window.cfrmdlr = el43Zak.formHandler = new FormHandler(el43Zak, component);
                } else {
                    window.cfrmdlr = el43Zak.formHandler;
                }
            let elyhSfV = eo('div','YL3f',null,`class`,`row`);
let elaeXeN = ev('input','GOhf',null, eventListeners, {oninput:[function(e) {component.task.id = this.value;}]},`value`,`${fval(component.task.id)}`,`name`,`${(`task`).toInputName()}`,`type`,`hidden`);
elaeXeN.value = fval(component.task.id);
let eljsXSS = ev('input','wdjf',null, eventListeners, {oninput:[function(e) {component.task.checklists.length = this.value;}]},`value`,`${fval(component.task.checklists.length)}`,`name`,`${(`sortOrder`).toInputName()}`,`type`,`hidden`);
eljsXSS.value = fval(component.task.checklists.length);
let elOtbzF = eo('div','7h0f',null,`class`,`col-sm-4`);
let elZIuo9 = eo('div','Gulf',null,`class`,`form-group ${cls({'group-error': !!el43Zak.formHandler.getError(`name`) })}`);
let elRFKky = eo('label','dFZf',null,`for`,`name`);
text(trans('Checklist Name'));
let ellJTQ7 = eo('span','NMvf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elqMByA = ev('input','m_nf',null, eventListeners, {oninput:[function(e) {component.checklistName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el43Zak.formHandler.addError(`name`, 'required', trans('validation.required'));}return el43Zak.formHandler.removeError(`name`);}]},`value`,`${fval(component.checklistName)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Checklist Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elqMByA.value = fval(component.checklistName);
let cndlUPw = el43Zak.formHandler.getError(`name`);
this.setState('st9WKKV', cndlUPw);
if (cndlUPw) { 
let eleTfkv = eo('div','9RPf',null,`class`,`alert alert-danger`);
text(el43Zak.formHandler.getError(`name`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elPdOS5 = eo('div',null,null,`class`,`row`);
let elpqY_V = eo('div',null,null,`class`,`col-sm-8`);
for (let index in component.items) {
let item = component.items[index]; 
 let iihJOB = 'vEEHx5t' + index;
let el8E5JD = eo('div','ko15AyClC2Ta' + index+iihJOB,null,`class`,`row m-0`);
let elDm5VG = ev('input','q6iff'+iihJOB,null, eventListeners, {oninput:[function(e) {component.items[index] = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el43Zak.formHandler.addError(`items[]`, 'required', trans('validation.required'));}return el43Zak.formHandler.removeError(`items[]`);}]},`value`,`${fval(component.items[index])}`,`name`,`${(`items[]`).toInputName()}`,`placeholder`,`${trans(`Checklist Item`)}`,`type`,`text`,`class`,`form-control col-sm-10`,`id`,`items[]`);
elDm5VG.value = fval(component.items[index]);
let cndJ168 = el43Zak.formHandler.getError(`items[]`);
this.setState('st4Qqm1', cndJ168);
if (cndJ168) { 
let elKIG5s = eo('div','YR5ff'+iihJOB,null,`class`,`alert alert-danger`);
text(el43Zak.formHandler.getError(`items[]`));
ec('div');
}let elNTNyd = eo('div','yJ1ff'+iihJOB,null,`class`,`col mt-2`);
let elCTnYA = eo('button','VzEff'+iihJOB,null, eventListeners, {onclick:[function(e) {var $el = this;component.unsetArrayIndex('items', index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elZMOOt = eo('i','jPXff'+iihJOB,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elCTnYA;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Item')}`});
        ;
                    }, 20);                
                ec('div');
ec('div');
}
let el_kGYY = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.items.push('')}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-info`);
let elubjq5 = eo('i',null,null,`class`,`${fas('plus')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el_kGYY;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('add New Item')}`});
        ;
                    }, 20);                
                ec('div');
ec('div');
let elwXoiM = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-sm btn-primary bold`);
text(`Create
                Checklist`);
ec('button');
ec('form');
}let eluUj6K = eo('div',null,null,`class`,`row`);
for (let index in component.task.checklists) {
let checklist = component.task.checklists[index]; 
 let iiZacz = checklist.id+ index;
let elxw4ES = eo('div','7iXQtq8TSa80' + index+iiZacz,null,`class`,`col-sm-6 checklist m-t-2 p-0`);
let elfInVu = eo('div','RILff'+iiZacz,null,`class`,`bold`);
let elnYrhs = eo('span','WUgff'+iiZacz);
text(checklist.name);
ec('span');
text(`(${ checklist.items.length })`);
let cndhJZV = component.task.canBeModified;
this.setState('stjhNDM', cndhJZV);
if (cndhJZV) { 
let cnd8MbV = ! component.isAddingChecklistItem;
this.setState('st7KNAN', cnd8MbV);
let cndMVu2 = component.isAddingChecklistItem && component.currentChecklist.id == checklist.id;
this.setState('styajxg', cndMVu2);
let cndEnJQ = !(cnd8MbV||cndMVu2);
this.setState('stm4zqT', cndEnJQ);
if (cnd8MbV) { 
let elGhC3O = eo('button','4BVff'+iiZacz,null, eventListeners, {onclick:[function(e) {var $el = this;component.addChecklistItem(checklist)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-success`);
let elJgplX = eo('i','4ubff'+iiZacz,null,`class`,`${fas('plus')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elGhC3O;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add Item')}`});
        ;
                    }, 20);                
                }else if (cndMVu2) { 
let elpRhae = eo('button','KL6ff'+iiZacz,null, eventListeners, {onclick:[function(e) {var $el = this;component.isAddingChecklistItem = false;}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let el69PO4 = eo('i','oDPff'+iiZacz,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elpRhae;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove')}`});
        ;
                    }, 20);                
                }let cndKOYN = ! component.isInEditMode || component.type != 'checklist' || component.currentItem.id != checklist.id;
this.setState('st3iMdX', cndKOYN);
let cndYbEe = !(cndKOYN);
this.setState('stAEQNl', cndYbEe);
if (cndKOYN) { 
let elmK4x3 = eo('button','N08ff'+iiZacz,null, eventListeners, {onclick:[function(e) {var $el = this;component.allowEditing(checklist, index, 'checklist')}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-cyan`);
let elsCa8Q = eo('i','1rBff'+iiZacz,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elmK4x3;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit')}`});
        ;
                    }, 20);                
                }else { 
let elUPK9j = eo('button','1aqff'+iiZacz,null, eventListeners, {onclick:[function(e) {var $el = this;component.isInEditMode = false}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-orange`);
let eluXgJh = eo('i','L4Iff'+iiZacz,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elUPK9j;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Cancel Editing')}`});
        ;
                    }, 20);                
                }let el5oFtb = eo('button','J29ff'+iiZacz,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(checklist, index, 'checklist')}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elwLDg9 = eo('i','7Rwff'+iiZacz,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el5oFtb;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove')}`});
        ;
                    }, 20);                
                }ec('div');
let cnd3BQo = component.isInEditMode && component.type == 'checklist' && component.currentItem.id == checklist.id;
this.setState('st4UFNx', cnd3BQo);
let cndWsne = ! component.isInEditMode || !component.currentItem || component.currentItem.id != checklist.id;
this.setState('st0vetD', cndWsne);
if (cnd3BQo) { 
let eluOcpF = eo('form','Cj5ff'+iiZacz,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitChecklist($el)}]},`class`,`m-t-2`);

                if (! eluOcpF.formHandler) {
                    window.cfrmdlr = eluOcpF.formHandler = new FormHandler(eluOcpF, component);
                } else {
                    window.cfrmdlr = eluOcpF.formHandler;
                }
            let elWk9qs = ev('input','8DKff'+iiZacz,null, eventListeners, {oninput:[function(e) {component.task.id = this.value;}]},`value`,`${fval(component.task.id)}`,`name`,`${(`task`).toInputName()}`,`type`,`hidden`);
elWk9qs.value = fval(component.task.id);
let elK8wm4 = ev('input','S5kff'+iiZacz,null, eventListeners, {oninput:[function(e) {component.currentItem.sortOrder = this.value;}]},`value`,`${fval(component.currentItem.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`type`,`hidden`);
elK8wm4.value = fval(component.currentItem.sortOrder);
let elCUgPO = eo('div','dYeff'+iiZacz,null,`class`,`form-group ${cls({'group-error': !!eluOcpF.formHandler.getError(`name`) })}`);
let elnhsLi = eo('label','uroff'+iiZacz,null,`for`,`name`);
text(trans('Checklist Name'));
let elaa5ba = eo('span','PXRff'+iiZacz,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el_JwO2 = ev('input','hoGff'+iiZacz,null, eventListeners, {oninput:[function(e) {component.currentItem.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eluOcpF.formHandler.addError(`name`, 'required', trans('validation.required'));}return eluOcpF.formHandler.removeError(`name`);}]},`value`,`${fval(component.currentItem.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Checklist Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el_JwO2.value = fval(component.currentItem.name);
let cndmZcT = eluOcpF.formHandler.getError(`name`);
this.setState('stJeka4', cndmZcT);
if (cndmZcT) { 
let elfTdFW = eo('div','0ZZff'+iiZacz,null,`class`,`alert alert-danger`);
text(eluOcpF.formHandler.getError(`name`));
ec('div');
}ec('div');
let elt5Tbk = eo('button','TbVff'+iiZacz,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn bold btn-success bold`);
text(`Update`);
ec('button');
ec('form');
}else if (cndWsne) { 
let el9V80F = eo('ul','tqIff'+iiZacz,null,`class`,`items`);
for (let i in checklist.items) {
let item = checklist.items[i]; 
 let iivzcF = item.id+ i;
let elczITw = eo('li','D64wULacg4Qx' + i+iiZacz+iivzcF,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.suggestCheckItemModification(item)}],onmouseout:[function(e) {var $el = this;component.unsuggestCheckItemModification()}]},`class`,`item`);
let cmp2H4o = this._lc('cOILIgLqi', {parent:component,props:{label:item.item,value:item.item,checked:item.done},events:{onchange:function(e) {let $el = this; component.changeItemStatus(item, $el.checked)}},boolAttrs:{checked:item.done},state:'st0vetD',insideLoop:true,index:"" +iiZacz+iivzcF});
let cnddqKJ = component.isSuggestingItemControl && component.modifyingChecklistItem.id == item.id;
this.setState('st4aF9_', cnddqKJ);
if (cnddqKJ) { 
let eljQTz9 = eo('button','vJ3ff'+iiZacz+iivzcF,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(checklist, index, 'item', item, i)}]},`title`,``,`class`,`btn btn-sm btn-danger btn-circle delete-item-btn`);
let elxPnv6 = eo('i','Wqkff'+iiZacz+iivzcF,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eljQTz9;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove item')}`});
        ;
                    }, 20);                
                }ec('li');
}
let cnd5_Lt = component.isAddingChecklistItem && component.currentChecklist.id == checklist.id;
this.setState('stbELrS', cnd5_Lt);
if (cnd5_Lt) { 
let elGYvZC = eo('li','SA1ff'+iiZacz,null,`class`,`item`);
let elMLcFc = eo('form','LSKff'+iiZacz,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitItem($el)}]});

                if (! elMLcFc.formHandler) {
                    window.cfrmdlr = elMLcFc.formHandler = new FormHandler(elMLcFc, component);
                } else {
                    window.cfrmdlr = elMLcFc.formHandler;
                }
            let elotz3w = ev('input','Mi1ff'+iiZacz,null, eventListeners, {oninput:[function(e) {component.task.id = this.value;}]},`value`,`${fval(component.task.id)}`,`name`,`${(`task`).toInputName()}`,`type`,`hidden`);
elotz3w.value = fval(component.task.id);
let eloiY8I = ev('input','1cwff'+iiZacz,null, eventListeners, {oninput:[function(e) {component.currentChecklist.id = this.value;}]},`value`,`${fval(component.currentChecklist.id)}`,`name`,`${(`checklist`).toInputName()}`,`type`,`hidden`);
eloiY8I.value = fval(component.currentChecklist.id);
let elmSXmW = ev('input','jz5ff'+iiZacz,null, eventListeners, {oninput:[function(e) {component.currentChecklist.length = this.value;}]},`value`,`${fval(component.currentChecklist.length)}`,`name`,`${(`sortOrder`).toInputName()}`,`type`,`hidden`);
elmSXmW.value = fval(component.currentChecklist.length);
let elTqQG9 = ev('input','lWjff'+iiZacz,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elMLcFc.formHandler.addError(`item`, 'required', trans('validation.required'));}return elMLcFc.formHandler.removeError(`item`);}]},`name`,`${(`item`).toInputName()}`,`placeholder`,`${trans(`Checklist Item`)}`,`type`,`text`,`class`,`form-control`,`id`,`item`);

                    setTimeout(function () {
                        let $el = elTqQG9;
                        
            if (true && ! elTqQG9.focused) {
                elTqQG9.setSelectionRange(elTqQG9.value.length, elTqQG9.value.length)
                elTqQG9.focused = true;
                elTqQG9.focus();
            }
        ;
                    }, 20);                
                let cndfhPp = elMLcFc.formHandler.getError(`item`);
this.setState('stnxyo2', cndfhPp);
if (cndfhPp) { 
let elONX6t = eo('div','Qzkff'+iiZacz,null,`class`,`alert alert-danger`);
text(elMLcFc.formHandler.getError(`item`));
ec('div');
}let elKt8Au = eo('button','V3_ff'+iiZacz,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-sm btn-primary bold`);
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
let cndlxt5 = component.isAboutToRemove;
this.setState('stkyJdG', cndlxt5);
if (cndlxt5) { 
let cmp3Gn3 = this._lc('cDqvcxSLm', {parent:component,events:{onclose:function(e) {let $el = this; component.isAboutToRemove = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stkyJdG'});
}
                    this.isReadyToGo();
                }
        });