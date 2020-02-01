_Component({
                selector: 'task-checklist',
                c: 'TaskChecklist', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['task','addChecklistForm','addNewChecklist','submitChecklist','checklistName','items','unsetArrayIndex','isSending','isValidForm','isAddingChecklistItem','addChecklistItem','currentChecklist','isInEditMode','type','currentItem','allowEditing','confirmRemoving','suggestCheckItemModification','unsuggestCheckItemModification','changeItemStatus','isSuggestingItemControl','modifyingChecklistItem','submitItem','isAboutToRemove','remove'],
                children: {ccgeeWfRJ:'flk-mdb-checkbox',c2kpguHTU:'flk-alert'},
                render: function (component) {
                    let elyhXO8 = eo('section',null,null,`class`,`checklists-wrapper`);
let el3gaxY = eo('h3');
text(`Checklists (${ component.task.checklists.length })`);
let cnd15C2 = ! component.addChecklistForm;
this.setState('stnprvn', cnd15C2);
let cndYQ5q = !(cnd15C2);
this.setState('st69N2X', cndYQ5q);
if (cnd15C2) { 
let eliMZl7 = eo('button','n1Gf',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewChecklist()}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-success`);
let el2CZUO = eo('i','6QIf',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eliMZl7;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Checklist')}`});
        ;
                    }, 20);                
                }else { 
let el6IxlU = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.addChecklistForm = false}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elz4F99 = eo('i',null,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el6IxlU;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Close')}`});
        ;
                    }, 20);                
                }let cndwWqg = component.addChecklistForm;
this.setState('stNshL4', cndwWqg);
if (cndwWqg) { 
let el_bn6P = eo('form','tBdf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitChecklist($el)}]},`class`,`m-t-2`);

                if (! el_bn6P.formHandler) {
                    window.cfrmdlr = el_bn6P.formHandler = new FormHandler(el_bn6P, component);
                } else {
                    window.cfrmdlr = el_bn6P.formHandler;
                }
            let eliARU2 = eo('div','9lyf',null,`class`,`row`);
let elajNWV = ev('input','Ssrf',null, eventListeners, {oninput:[function(e) {component.task.id = this.value;}]},`value`,`${fval(component.task.id)}`,`name`,`${(`task`).toInputName()}`,`type`,`hidden`);
elajNWV.value = fval(component.task.id);
let elehkFl = ev('input','335f',null, eventListeners, {oninput:[function(e) {component.task.checklists.length = this.value;}]},`value`,`${fval(component.task.checklists.length)}`,`name`,`${(`sortOrder`).toInputName()}`,`type`,`hidden`);
elehkFl.value = fval(component.task.checklists.length);
let elJdR3W = eo('div','YGRf',null,`class`,`col-sm-4`);
let elHZxGy = eo('div','yiLf',null,`class`,`form-group`);
elHZxGy.cls = {'group-error': !!el_bn6P.formHandler.getError(`name`) };

            for (let className in elHZxGy.cls) {
                elHZxGy.classList.toggle(className, elHZxGy.cls[className]);
            }  
            let elK_S_t = eo('label','1MGf',null,`for`,`name`);
text(trans('Checklist Name'));
let el9N8d1 = eo('span','Q5Qf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elzSwiA = ev('input','RPUf',null, eventListeners, {oninput:[function(e) {component.checklistName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_bn6P.formHandler.addError(`name`, 'required', trans('validation.required'));}return el_bn6P.formHandler.removeError(`name`);}]},`value`,`${fval(component.checklistName)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Checklist Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elzSwiA.value = fval(component.checklistName);
let cndJ0N9 = el_bn6P.formHandler.getError(`name`);
this.setState('stqYmtd', cndJ0N9);
if (cndJ0N9) { 
let elzqDG9 = eo('div','nvTf',null,`class`,`alert alert-danger`);
text(el_bn6P.formHandler.getError(`name`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elOPEzi = eo('div',null,null,`class`,`row`);
let ela1KnV = eo('div',null,null,`class`,`col-sm-8`);
for (let index in component.items) {
let item = component.items[index]; 
 let ii2XTK = 'FXZDsmS' + index;
let elEi77m = eo('div','JKp8p9SzuKtJ' + index+ii2XTK,null,`class`,`row m-0`);
let elZzsCd = ev('input','XL8ff'+ii2XTK,null, eventListeners, {oninput:[function(e) {component.items[index] = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_bn6P.formHandler.addError(`items[]`, 'required', trans('validation.required'));}return el_bn6P.formHandler.removeError(`items[]`);}]},`value`,`${fval(component.items[index])}`,`name`,`${(`items[]`).toInputName()}`,`placeholder`,`${trans(`Checklist Item`)}`,`type`,`text`,`class`,`form-control col-sm-10`,`id`,`items[]`);
elZzsCd.value = fval(component.items[index]);
let cndquGY = el_bn6P.formHandler.getError(`items[]`);
this.setState('stgU90f', cndquGY);
if (cndquGY) { 
let elYaYnb = eo('div','y5vff'+ii2XTK,null,`class`,`alert alert-danger`);
text(el_bn6P.formHandler.getError(`items[]`));
ec('div');
}let elaLNsR = eo('div','0ciff'+ii2XTK,null,`class`,`col mt-2`);
let elZiP7B = eo('button','7FQff'+ii2XTK,null, eventListeners, {onclick:[function(e) {var $el = this;component.unsetArrayIndex('items', index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elHqwGu = eo('i','y9Fff'+ii2XTK,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elZiP7B;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Item')}`});
        ;
                    }, 20);                
                ec('div');
ec('div');
}
let elthhqH = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.items.push('')}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-info`);
let elwhrNu = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elthhqH;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('add New Item')}`});
        ;
                    }, 20);                
                ec('div');
ec('div');
let elAc7tG = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-sm btn-primary bold`);
text(`Create
                Checklist`);
ec('button');
ec('form');
}let elEY1C0 = eo('div',null,null,`class`,`row`);
for (let index in component.task.checklists) {
let checklist = component.task.checklists[index]; 
 let iiiL8x = checklist.id+ index;
let elR35XP = eo('div','VokEP2pPcRwZ' + index+iiiL8x,null,`class`,`col-sm-6 checklist m-t-2 p-0`);
let elHNqCJ = eo('div','pdMff'+iiiL8x,null,`class`,`bold`);
let el6U0Ve = eo('span','brxff'+iiiL8x);
text(checklist.name);
ec('span');
text(`(${ checklist.items.length })`);
let cndBXTf = component.task.canBeModified;
this.setState('staiciU', cndBXTf);
if (cndBXTf) { 
let cndsfr0 = ! component.isAddingChecklistItem;
this.setState('stDsldK', cndsfr0);
let cndqEcv = component.isAddingChecklistItem && component.currentChecklist.id == checklist.id;
this.setState('stRutr7', cndqEcv);
let cndJDq1 = !(cndsfr0||cndqEcv);
this.setState('st568lY', cndJDq1);
if (cndsfr0) { 
let eliub3w = eo('button','04Pff'+iiiL8x,null, eventListeners, {onclick:[function(e) {var $el = this;component.addChecklistItem(checklist)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-success`);
let elUqVKO = eo('i','Yjqff'+iiiL8x,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eliub3w;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add Item')}`});
        ;
                    }, 20);                
                }else if (cndqEcv) { 
let elxaUI2 = eo('button','NHtff'+iiiL8x,null, eventListeners, {onclick:[function(e) {var $el = this;component.isAddingChecklistItem = false;}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let eljzfmq = eo('i','Cnuff'+iiiL8x,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elxaUI2;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove')}`});
        ;
                    }, 20);                
                }let cndnD7H = ! component.isInEditMode || component.type != 'checklist' || component.currentItem.id != checklist.id;
this.setState('stadMtK', cndnD7H);
let cndwYcp = !(cndnD7H);
this.setState('st5IarZ', cndwYcp);
if (cndnD7H) { 
let elJmlX3 = eo('button','oclff'+iiiL8x,null, eventListeners, {onclick:[function(e) {var $el = this;component.allowEditing(checklist, index, 'checklist')}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-cyan`);
let elStn_m = eo('i','Lvsff'+iiiL8x,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elJmlX3;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit')}`});
        ;
                    }, 20);                
                }else { 
let elEU6hp = eo('button','Whgff'+iiiL8x,null, eventListeners, {onclick:[function(e) {var $el = this;component.isInEditMode = false}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-orange`);
let elmf8VG = eo('i','Hczff'+iiiL8x,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elEU6hp;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Cancel Editing')}`});
        ;
                    }, 20);                
                }let elApXKH = eo('button','uOvff'+iiiL8x,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(checklist, index, 'checklist')}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let ely9bbv = eo('i','7pRff'+iiiL8x,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elApXKH;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove')}`});
        ;
                    }, 20);                
                }ec('div');
let cndcx7z = component.isInEditMode && component.type == 'checklist' && component.currentItem.id == checklist.id;
this.setState('stNx_ka', cndcx7z);
let cndEBDa = ! component.isInEditMode || !component.currentItem || component.currentItem.id != checklist.id;
this.setState('stywfIl', cndEBDa);
if (cndcx7z) { 
let el4AhC0 = eo('form','kXlff'+iiiL8x,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitChecklist($el)}]},`class`,`m-t-2`);

                if (! el4AhC0.formHandler) {
                    window.cfrmdlr = el4AhC0.formHandler = new FormHandler(el4AhC0, component);
                } else {
                    window.cfrmdlr = el4AhC0.formHandler;
                }
            let elFHPX1 = ev('input','Jf2ff'+iiiL8x,null, eventListeners, {oninput:[function(e) {component.task.id = this.value;}]},`value`,`${fval(component.task.id)}`,`name`,`${(`task`).toInputName()}`,`type`,`hidden`);
elFHPX1.value = fval(component.task.id);
let elcAe3t = ev('input','82fff'+iiiL8x,null, eventListeners, {oninput:[function(e) {component.currentItem.sortOrder = this.value;}]},`value`,`${fval(component.currentItem.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`type`,`hidden`);
elcAe3t.value = fval(component.currentItem.sortOrder);
let elyI_uz = eo('div','_b8ff'+iiiL8x,null,`class`,`form-group`);
elyI_uz.cls = {'group-error': !!el4AhC0.formHandler.getError(`name`) };

            for (let className in elyI_uz.cls) {
                elyI_uz.classList.toggle(className, elyI_uz.cls[className]);
            }  
            let elYKe7R = eo('label','2rcff'+iiiL8x,null,`for`,`name`);
text(trans('Checklist Name'));
let eljVOH4 = eo('span','pIPff'+iiiL8x,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el8X6Jt = ev('input','5kHff'+iiiL8x,null, eventListeners, {oninput:[function(e) {component.currentItem.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el4AhC0.formHandler.addError(`name`, 'required', trans('validation.required'));}return el4AhC0.formHandler.removeError(`name`);}]},`value`,`${fval(component.currentItem.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Checklist Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el8X6Jt.value = fval(component.currentItem.name);
let cnd9vWr = el4AhC0.formHandler.getError(`name`);
this.setState('stdCTXX', cnd9vWr);
if (cnd9vWr) { 
let elbCREz = eo('div','y3Mff'+iiiL8x,null,`class`,`alert alert-danger`);
text(el4AhC0.formHandler.getError(`name`));
ec('div');
}ec('div');
let elXbEwb = eo('button','yDoff'+iiiL8x,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn bold btn-success bold`);
text(`Update`);
ec('button');
ec('form');
}else if (cndEBDa) { 
let eljx49V = eo('ul','ZN_ff'+iiiL8x,null,`class`,`items`);
for (let i in checklist.items) {
let item = checklist.items[i]; 
 let iiVwCN = item.id+ i;
let elRegJm = eo('li','14zYWOJdjpjf' + i+iiiL8x+iiVwCN,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.suggestCheckItemModification(item)}],onmouseout:[function(e) {var $el = this;component.unsuggestCheckItemModification()}]},`class`,`item`);
let cmptRLg = this._lc('ccgeeWfRJ', {parent:component,props:{label:item.item,value:item.item,checked:item.done},events:{onchange:function(e) {let $el = this; component.changeItemStatus(item, $el.checked)}},boolAttrs:{checked:item.done},state:'stywfIl',insideLoop:true,index:"" +iiiL8x+iiVwCN});
let cnd8egE = component.isSuggestingItemControl && component.modifyingChecklistItem.id == item.id;
this.setState('stSAZOW', cnd8egE);
if (cnd8egE) { 
let elsQJw1 = eo('button','N7mff'+iiiL8x+iiVwCN,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(checklist, index, 'item', item, i)}]},`title`,``,`class`,`btn btn-sm btn-danger btn-circle delete-item-btn`);
let elu7aN8 = eo('i','zbYff'+iiiL8x+iiVwCN,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elsQJw1;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove item')}`});
        ;
                    }, 20);                
                }ec('li');
}
let cndalAo = component.isAddingChecklistItem && component.currentChecklist.id == checklist.id;
this.setState('stbKLhG', cndalAo);
if (cndalAo) { 
let el5LC_t = eo('li','7cmff'+iiiL8x,null,`class`,`item`);
let elrDAgf = eo('form','b8qff'+iiiL8x,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitItem($el)}]});

                if (! elrDAgf.formHandler) {
                    window.cfrmdlr = elrDAgf.formHandler = new FormHandler(elrDAgf, component);
                } else {
                    window.cfrmdlr = elrDAgf.formHandler;
                }
            let elmGWKk = ev('input','vG0ff'+iiiL8x,null, eventListeners, {oninput:[function(e) {component.task.id = this.value;}]},`value`,`${fval(component.task.id)}`,`name`,`${(`task`).toInputName()}`,`type`,`hidden`);
elmGWKk.value = fval(component.task.id);
let el3LxkA = ev('input','Z6vff'+iiiL8x,null, eventListeners, {oninput:[function(e) {component.currentChecklist.id = this.value;}]},`value`,`${fval(component.currentChecklist.id)}`,`name`,`${(`checklist`).toInputName()}`,`type`,`hidden`);
el3LxkA.value = fval(component.currentChecklist.id);
let elptNGr = ev('input','6qSff'+iiiL8x,null, eventListeners, {oninput:[function(e) {component.currentChecklist.length = this.value;}]},`value`,`${fval(component.currentChecklist.length)}`,`name`,`${(`sortOrder`).toInputName()}`,`type`,`hidden`);
elptNGr.value = fval(component.currentChecklist.length);
let elktK94 = ev('input','YzOff'+iiiL8x,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elrDAgf.formHandler.addError(`item`, 'required', trans('validation.required'));}return elrDAgf.formHandler.removeError(`item`);}]},`name`,`${(`item`).toInputName()}`,`placeholder`,`${trans(`Checklist Item`)}`,`type`,`text`,`class`,`form-control`,`id`,`item`);

                    setTimeout(function () {
                        let $el = elktK94;
                        
            if (true && ! elktK94.focused) {
                elktK94.setSelectionRange(elktK94.value.length, elktK94.value.length)
                elktK94.focused = true;
                elktK94.focus();
            }
        ;
                    }, 20);                
                let cndbFMZ = elrDAgf.formHandler.getError(`item`);
this.setState('stI3kSJ', cndbFMZ);
if (cndbFMZ) { 
let elWuXLg = eo('div','uYPff'+iiiL8x,null,`class`,`alert alert-danger`);
text(elrDAgf.formHandler.getError(`item`));
ec('div');
}let elwbqL7 = eo('button','RVrff'+iiiL8x,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-sm btn-primary bold`);
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
let cndD_eS = component.isAboutToRemove;
this.setState('stD4Oyu', cndD_eS);
if (cndD_eS) { 
let cmp3uK5 = this._lc('c2kpguHTU', {parent:component,events:{onclose:function(e) {let $el = this; component.isAboutToRemove = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stD4Oyu'});
}
                    this.isReadyToGo();
                }
        });