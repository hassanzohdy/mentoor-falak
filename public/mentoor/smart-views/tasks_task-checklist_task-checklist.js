_Component({
                selector: 'task-checklist',
                c: 'TaskChecklist', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['task','addChecklistForm','addNewChecklist','submitChecklist','checklistName','items','unsetArrayIndex','isSending','isValidForm','isAddingChecklistItem','addChecklistItem','currentChecklist','isInEditMode','type','currentItem','allowEditing','confirmRemoving','suggestCheckItemModification','unsuggestCheckItemModification','changeItemStatus','isSuggestingItemControl','modifyingChecklistItem','submitItem','isAboutToRemove','remove'],
                children: {co3vhkGrW:'flk-mdb-checkbox',cu6O1YDl5:'flk-alert'},
                render: function (component) {
                    let elRq_jy = eo('section',null,null,`class`,`checklists-wrapper`);
let elkC45c = eo('h3');
text(`Checklists (${ component.task.checklists.length })`);
let cnd5KZA = ! component.addChecklistForm;
this.setState('stLQEbG', cnd5KZA);
let cndJmqJ = !(cnd5KZA);
this.setState('st15AuA', cndJmqJ);
if (cnd5KZA) { 
let el7sKVh = eo('button','UW_f',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewChecklist()}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-success`);
let el_IJur = eo('i','jS9f',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el7sKVh;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Checklist')}`});
        ;
                    }, 20);                
                }else { 
let elcHsu1 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.addChecklistForm = false}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elZ5LHh = eo('i',null,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elcHsu1;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Close')}`});
        ;
                    }, 20);                
                }let cndBpUa = component.addChecklistForm;
this.setState('stQphCS', cndBpUa);
if (cndBpUa) { 
let elRF1QU = eo('form','5bBf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitChecklist($el)}]},`class`,`m-t-2`);

                if (! elRF1QU.formHandler) {
                    window.cfrmdlr = elRF1QU.formHandler = new FormHandler(elRF1QU, component);
                } else {
                    window.cfrmdlr = elRF1QU.formHandler;
                }
            let el4I5sA = eo('div','vmXf',null,`class`,`row`);
let ele_8m5 = ev('input','Qk3f',null, eventListeners, {oninput:[function(e) {component.task.id = this.value;}]},`value`,`${fval(component.task.id)}`,`name`,`${(`task`).toInputName()}`,`type`,`hidden`);
ele_8m5.value = fval(component.task.id);
let elE1S8t = ev('input','NO8f',null, eventListeners, {oninput:[function(e) {component.task.checklists.length = this.value;}]},`value`,`${fval(component.task.checklists.length)}`,`name`,`${(`sortOrder`).toInputName()}`,`type`,`hidden`);
elE1S8t.value = fval(component.task.checklists.length);
let elHroMd = eo('div','1l3f',null,`class`,`col-sm-4`);
let eli67Qu = eo('div','Jsxf',null,`class`,`form-group`);
eli67Qu.cls = {'group-error': !!elRF1QU.formHandler.getError(`name`) };

            for (let className in eli67Qu.cls) {
                eli67Qu.classList.toggle(className, eli67Qu.cls[className]);
            }  
            let el4qTzq = eo('label','KEdf',null,`for`,`name`);
text(trans('Checklist Name'));
let el3BK_i = eo('span','7omf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elz7v54 = ev('input','jCYf',null, eventListeners, {oninput:[function(e) {component.checklistName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elRF1QU.formHandler.addError(`name`, 'required', trans('validation.required'));}return elRF1QU.formHandler.removeError(`name`);}]},`value`,`${fval(component.checklistName)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Checklist Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elz7v54.value = fval(component.checklistName);
let cndclkl = elRF1QU.formHandler.getError(`name`);
this.setState('styZaS3', cndclkl);
if (cndclkl) { 
let elR7EZg = eo('div','JXxf',null,`class`,`alert alert-danger`);
text(elRF1QU.formHandler.getError(`name`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elNYpGN = eo('div',null,null,`class`,`row`);
let elMLj3M = eo('div',null,null,`class`,`col-sm-8`);
for (let index in component.items) {
let item = component.items[index]; 
 let iiyMj5 = '0utQ3q4' + index;
let el22NDd = eo('div','JktXi7RO3dF9' + index+iiyMj5,null,`class`,`row m-0`);
let elAyIAk = ev('input','lZoff'+iiyMj5,null, eventListeners, {oninput:[function(e) {component.items[index] = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elRF1QU.formHandler.addError(`items[]`, 'required', trans('validation.required'));}return elRF1QU.formHandler.removeError(`items[]`);}]},`value`,`${fval(component.items[index])}`,`name`,`${(`items[]`).toInputName()}`,`placeholder`,`${trans(`Checklist Item`)}`,`type`,`text`,`class`,`form-control col-sm-10`,`id`,`items[]`);
elAyIAk.value = fval(component.items[index]);
let cnd2dux = elRF1QU.formHandler.getError(`items[]`);
this.setState('stiE3jf', cnd2dux);
if (cnd2dux) { 
let elIZfJD = eo('div','pTyff'+iiyMj5,null,`class`,`alert alert-danger`);
text(elRF1QU.formHandler.getError(`items[]`));
ec('div');
}let elau64P = eo('div','l9Jff'+iiyMj5,null,`class`,`col mt-2`);
let elpQ74O = eo('button','A5Uff'+iiyMj5,null, eventListeners, {onclick:[function(e) {var $el = this;component.unsetArrayIndex('items', index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elWPww2 = eo('i','Zn3ff'+iiyMj5,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elpQ74O;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Item')}`});
        ;
                    }, 20);                
                ec('div');
ec('div');
}
let elPKbXk = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.items.push('')}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-info`);
let elhNpSa = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elPKbXk;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('add New Item')}`});
        ;
                    }, 20);                
                ec('div');
ec('div');
let elusb5n = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-sm btn-primary bold`);
text(`Create
                Checklist`);
ec('button');
ec('form');
}let elrQKpx = eo('div',null,null,`class`,`row`);
for (let index in component.task.checklists) {
let checklist = component.task.checklists[index]; 
 let iifpOX = checklist.id+ index;
let elIGEE0 = eo('div','f2zj63Of1uh1' + index+iifpOX,null,`class`,`col-sm-6 checklist m-t-2 p-0`);
let elCuw2O = eo('div','JQBff'+iifpOX,null,`class`,`bold`);
let elWL2hS = eo('span','py2ff'+iifpOX);
text(checklist.name);
ec('span');
text(`(${ checklist.items.length })`);
let cndsejF = component.task.canBeModified;
this.setState('stTDnYa', cndsejF);
if (cndsejF) { 
let cnd1fvG = ! component.isAddingChecklistItem;
this.setState('stuIguZ', cnd1fvG);
let cndEC8h = component.isAddingChecklistItem && component.currentChecklist.id == checklist.id;
this.setState('stZggwS', cndEC8h);
let cndyA7d = !(cnd1fvG||cndEC8h);
this.setState('stJSNHe', cndyA7d);
if (cnd1fvG) { 
let el3JW1L = eo('button','CuKff'+iifpOX,null, eventListeners, {onclick:[function(e) {var $el = this;component.addChecklistItem(checklist)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-success`);
let elhug30 = eo('i','XmQff'+iifpOX,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el3JW1L;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add Item')}`});
        ;
                    }, 20);                
                }else if (cndEC8h) { 
let el8_w_8 = eo('button','Yivff'+iifpOX,null, eventListeners, {onclick:[function(e) {var $el = this;component.isAddingChecklistItem = false;}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elDHN3c = eo('i','DOfff'+iifpOX,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el8_w_8;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove')}`});
        ;
                    }, 20);                
                }let cndiQpQ = ! component.isInEditMode || component.type != 'checklist' || component.currentItem.id != checklist.id;
this.setState('stOvfvD', cndiQpQ);
let cndzFpr = !(cndiQpQ);
this.setState('st4p27Q', cndzFpr);
if (cndiQpQ) { 
let eldmTg7 = eo('button','0ocff'+iifpOX,null, eventListeners, {onclick:[function(e) {var $el = this;component.allowEditing(checklist, index, 'checklist')}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-cyan`);
let elDLPn3 = eo('i','xvWff'+iifpOX,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eldmTg7;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit')}`});
        ;
                    }, 20);                
                }else { 
let elhr6qz = eo('button','wTDff'+iifpOX,null, eventListeners, {onclick:[function(e) {var $el = this;component.isInEditMode = false}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-orange`);
let elfRiSR = eo('i','hInff'+iifpOX,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elhr6qz;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Cancel Editing')}`});
        ;
                    }, 20);                
                }let el6q_pD = eo('button','ywGff'+iifpOX,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(checklist, index, 'checklist')}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elv8Fmv = eo('i','G6gff'+iifpOX,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el6q_pD;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove')}`});
        ;
                    }, 20);                
                }ec('div');
let cndBswm = component.isInEditMode && component.type == 'checklist' && component.currentItem.id == checklist.id;
this.setState('stF_mXg', cndBswm);
let cnd0W86 = ! component.isInEditMode || !component.currentItem || component.currentItem.id != checklist.id;
this.setState('stFsBAJ', cnd0W86);
if (cndBswm) { 
let elMDs_6 = eo('form','JXhff'+iifpOX,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitChecklist($el)}]},`class`,`m-t-2`);

                if (! elMDs_6.formHandler) {
                    window.cfrmdlr = elMDs_6.formHandler = new FormHandler(elMDs_6, component);
                } else {
                    window.cfrmdlr = elMDs_6.formHandler;
                }
            let elPnfvA = ev('input','0sGff'+iifpOX,null, eventListeners, {oninput:[function(e) {component.task.id = this.value;}]},`value`,`${fval(component.task.id)}`,`name`,`${(`task`).toInputName()}`,`type`,`hidden`);
elPnfvA.value = fval(component.task.id);
let elqI1qY = ev('input','N_6ff'+iifpOX,null, eventListeners, {oninput:[function(e) {component.currentItem.sortOrder = this.value;}]},`value`,`${fval(component.currentItem.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`type`,`hidden`);
elqI1qY.value = fval(component.currentItem.sortOrder);
let elERXTl = eo('div','YnSff'+iifpOX,null,`class`,`form-group`);
elERXTl.cls = {'group-error': !!elMDs_6.formHandler.getError(`name`) };

            for (let className in elERXTl.cls) {
                elERXTl.classList.toggle(className, elERXTl.cls[className]);
            }  
            let elW23tr = eo('label','xucff'+iifpOX,null,`for`,`name`);
text(trans('Checklist Name'));
let elBA9U4 = eo('span','fxmff'+iifpOX,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elf9raU = ev('input','_EAff'+iifpOX,null, eventListeners, {oninput:[function(e) {component.currentItem.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elMDs_6.formHandler.addError(`name`, 'required', trans('validation.required'));}return elMDs_6.formHandler.removeError(`name`);}]},`value`,`${fval(component.currentItem.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Checklist Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elf9raU.value = fval(component.currentItem.name);
let cndPlF5 = elMDs_6.formHandler.getError(`name`);
this.setState('stOEeTF', cndPlF5);
if (cndPlF5) { 
let el7BcIb = eo('div','5qJff'+iifpOX,null,`class`,`alert alert-danger`);
text(elMDs_6.formHandler.getError(`name`));
ec('div');
}ec('div');
let el80l2C = eo('button','eWrff'+iifpOX,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn bold btn-success bold`);
text(`Update`);
ec('button');
ec('form');
}else if (cnd0W86) { 
let el7lVb5 = eo('ul','QPIff'+iifpOX,null,`class`,`items`);
for (let i in checklist.items) {
let item = checklist.items[i]; 
 let iil6g0 = item.id+ i;
let elGafkl = eo('li','eVsYFyuBOgX1' + i+iifpOX+iil6g0,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.suggestCheckItemModification(item)}],onmouseout:[function(e) {var $el = this;component.unsuggestCheckItemModification()}]},`class`,`item`);
let cmpIDjL = this._lc('co3vhkGrW', {parent:component,props:{label:item.item,value:item.item,checked:item.done},events:{onchange:function(e) {let $el = this; component.changeItemStatus(item, $el.checked)}},boolAttrs:{checked:item.done},state:'stFsBAJ',insideLoop:true,index:"" +iifpOX+iil6g0});
let cndSF5Z = component.isSuggestingItemControl && component.modifyingChecklistItem.id == item.id;
this.setState('stm9CLk', cndSF5Z);
if (cndSF5Z) { 
let elEyRhW = eo('button','72Gff'+iifpOX+iil6g0,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(checklist, index, 'item', item, i)}]},`title`,``,`class`,`btn btn-sm btn-danger btn-circle delete-item-btn`);
let elaRhrd = eo('i','_EQff'+iifpOX+iil6g0,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elEyRhW;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove item')}`});
        ;
                    }, 20);                
                }ec('li');
}
let cndra5r = component.isAddingChecklistItem && component.currentChecklist.id == checklist.id;
this.setState('stXCbXo', cndra5r);
if (cndra5r) { 
let el23dWa = eo('li','0_dff'+iifpOX,null,`class`,`item`);
let elprrPx = eo('form','fSkff'+iifpOX,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitItem($el)}]});

                if (! elprrPx.formHandler) {
                    window.cfrmdlr = elprrPx.formHandler = new FormHandler(elprrPx, component);
                } else {
                    window.cfrmdlr = elprrPx.formHandler;
                }
            let elX6VUw = ev('input','j2Hff'+iifpOX,null, eventListeners, {oninput:[function(e) {component.task.id = this.value;}]},`value`,`${fval(component.task.id)}`,`name`,`${(`task`).toInputName()}`,`type`,`hidden`);
elX6VUw.value = fval(component.task.id);
let eltooRZ = ev('input','xErff'+iifpOX,null, eventListeners, {oninput:[function(e) {component.currentChecklist.id = this.value;}]},`value`,`${fval(component.currentChecklist.id)}`,`name`,`${(`checklist`).toInputName()}`,`type`,`hidden`);
eltooRZ.value = fval(component.currentChecklist.id);
let elaI207 = ev('input','aSzff'+iifpOX,null, eventListeners, {oninput:[function(e) {component.currentChecklist.length = this.value;}]},`value`,`${fval(component.currentChecklist.length)}`,`name`,`${(`sortOrder`).toInputName()}`,`type`,`hidden`);
elaI207.value = fval(component.currentChecklist.length);
let elZ9A6l = ev('input','L9fff'+iifpOX,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elprrPx.formHandler.addError(`item`, 'required', trans('validation.required'));}return elprrPx.formHandler.removeError(`item`);}]},`name`,`${(`item`).toInputName()}`,`placeholder`,`${trans(`Checklist Item`)}`,`type`,`text`,`class`,`form-control`,`id`,`item`);

                    setTimeout(function () {
                        let $el = elZ9A6l;
                        
            if (true && ! elZ9A6l.focused) {
                elZ9A6l.setSelectionRange(elZ9A6l.value.length, elZ9A6l.value.length)
                elZ9A6l.focused = true;
                elZ9A6l.focus();
            }
        ;
                    }, 20);                
                let cnd3zcA = elprrPx.formHandler.getError(`item`);
this.setState('stHX1_d', cnd3zcA);
if (cnd3zcA) { 
let elYGVz7 = eo('div','7S4ff'+iifpOX,null,`class`,`alert alert-danger`);
text(elprrPx.formHandler.getError(`item`));
ec('div');
}let elsvG41 = eo('button','kmVff'+iifpOX,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-sm btn-primary bold`);
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
let cndTINA = component.isAboutToRemove;
this.setState('st61Sfm', cndTINA);
if (cndTINA) { 
let cmpjiXb = this._lc('cu6O1YDl5', {parent:component,events:{onclose:function(e) {let $el = this; component.isAboutToRemove = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st61Sfm'});
}
                    this.isReadyToGo();
                }
        });