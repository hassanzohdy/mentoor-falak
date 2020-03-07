_Component({
                selector: 'task-checklist',
                c: 'TaskChecklist', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['task','addChecklistForm','addNewChecklist','submitChecklist','checklistName','items','unsetArrayIndex','isSending','isValidForm','isAddingChecklistItem','addChecklistItem','currentChecklist','isInEditMode','type','currentItem','allowEditing','confirmRemoving','suggestCheckItemModification','unsuggestCheckItemModification','changeItemStatus','isSuggestingItemControl','modifyingChecklistItem','submitItem','isAboutToRemove','remove'],
                children: {c_yxgZ_Ec:'flk-mdb-checkbox',cx6q5qKBC:'flk-alert'},
                render: function (component) {
                    let elWTC1J = eo('section',null,null,`class`,`checklists-wrapper`);
let elhEf5i = eo('h3');
text(`Checklists (${ component.task.checklists.length })`);
let cndyJiO = ! component.addChecklistForm;
this.setState('st9cl_k', cndyJiO);
let cndj3QQ = !(cndyJiO);
this.setState('stETJDF', cndj3QQ);
if (cndyJiO) { 
let elAUN8y = eo('button','4Arf',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewChecklist()}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-success`);
let elYODOZ = eo('i','h1yf',null,`class`,`${fas('plus')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elAUN8y;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Checklist')}`});
        ;
                    }, 20);                
                }else { 
let elZhepK = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.addChecklistForm = false}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let el5JTZ2 = eo('i',null,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elZhepK;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Close')}`});
        ;
                    }, 20);                
                }let cnd0Etf = component.addChecklistForm;
this.setState('stnfW99', cnd0Etf);
if (cnd0Etf) { 
let el6z_Xz = eo('form','zwnf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitChecklist($el)}]},`class`,`m-t-2`);

                if (! el6z_Xz.formHandler) {
                    window.cfrmdlr = el6z_Xz.formHandler = new FormHandler(el6z_Xz, component);
                } else {
                    window.cfrmdlr = el6z_Xz.formHandler;
                }
            let elOX3hs = eo('div','6icf',null,`class`,`row`);
let el6TOhp = ev('input','_v7f',null, eventListeners, {oninput:[function(e) {component.task.id = this.value;}]},`value`,`${fval(component.task.id)}`,`name`,`${(`task`).toInputName()}`,`type`,`hidden`);
el6TOhp.value = fval(component.task.id);
let elkUwSY = ev('input','aJHf',null, eventListeners, {oninput:[function(e) {component.task.checklists.length = this.value;}]},`value`,`${fval(component.task.checklists.length)}`,`name`,`${(`sortOrder`).toInputName()}`,`type`,`hidden`);
elkUwSY.value = fval(component.task.checklists.length);
let elpfaXi = eo('div','SH9f',null,`class`,`col-sm-4`);
let elVxHDM = eo('div','9wIf',null,`class`,`form-group ${cls({'group-error': !!el6z_Xz.formHandler.getError(`name`) })}`);
let elFHHUh = eo('label','AJjf',null,`for`,`name`);
text(trans('Checklist Name'));
let elfuxV1 = eo('span','97Wf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elwjVKQ = ev('input','9Hsf',null, eventListeners, {oninput:[function(e) {component.checklistName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el6z_Xz.formHandler.addError(`name`, 'required', trans('validation.required'));}return el6z_Xz.formHandler.removeError(`name`);}]},`value`,`${fval(component.checklistName)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Checklist Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elwjVKQ.value = fval(component.checklistName);
let cndaCR_ = el6z_Xz.formHandler.getError(`name`);
this.setState('stBYg5z', cndaCR_);
if (cndaCR_) { 
let elr6EYi = eo('div','GiOf',null,`class`,`alert alert-danger`);
text(el6z_Xz.formHandler.getError(`name`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elkBXsE = eo('div',null,null,`class`,`row`);
let eltOyaW = eo('div',null,null,`class`,`col-sm-8`);
for (let index in component.items) {
let item = component.items[index]; 
 let iiVN48 = 'EYMqitH' + index;
let elw7djk = eo('div','TZP96UUzuXJT' + index+iiVN48,null,`class`,`row m-0`);
let elpnu98 = ev('input','7UYff'+iiVN48,null, eventListeners, {oninput:[function(e) {component.items[index] = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el6z_Xz.formHandler.addError(`items[]`, 'required', trans('validation.required'));}return el6z_Xz.formHandler.removeError(`items[]`);}]},`value`,`${fval(component.items[index])}`,`name`,`${(`items[]`).toInputName()}`,`placeholder`,`${trans(`Checklist Item`)}`,`type`,`text`,`class`,`form-control col-sm-10`,`id`,`items[]`);
elpnu98.value = fval(component.items[index]);
let cndrdv_ = el6z_Xz.formHandler.getError(`items[]`);
this.setState('stn8N1S', cndrdv_);
if (cndrdv_) { 
let elwj3Mo = eo('div','wI4ff'+iiVN48,null,`class`,`alert alert-danger`);
text(el6z_Xz.formHandler.getError(`items[]`));
ec('div');
}let elKwTmD = eo('div','vUPff'+iiVN48,null,`class`,`col mt-2`);
let el1KLjr = eo('button','OGWff'+iiVN48,null, eventListeners, {onclick:[function(e) {var $el = this;component.unsetArrayIndex('items', index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let els_zzQ = eo('i','kDHff'+iiVN48,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el1KLjr;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Item')}`});
        ;
                    }, 20);                
                ec('div');
ec('div');
}
let elsSwsy = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.items.push('')}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-info`);
let elhRf2Y = eo('i',null,null,`class`,`${fas('plus')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elsSwsy;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('add New Item')}`});
        ;
                    }, 20);                
                ec('div');
ec('div');
let elSDgby = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-sm btn-primary bold`);
text(`Create
                Checklist`);
ec('button');
ec('form');
}let ell4wFr = eo('div',null,null,`class`,`row`);
for (let index in component.task.checklists) {
let checklist = component.task.checklists[index]; 
 let ii_SCl = checklist.id+ index;
let el34kcI = eo('div','31C1JkrLCC7L' + index+ii_SCl,null,`class`,`col-sm-6 checklist m-t-2 p-0`);
let elZG3lc = eo('div','Y_4ff'+ii_SCl,null,`class`,`bold`);
let elICm4E = eo('span','6Tuff'+ii_SCl);
text(checklist.name);
ec('span');
text(`(${ checklist.items.length })`);
let cndWg1G = component.task.canBeModified;
this.setState('stXVdkw', cndWg1G);
if (cndWg1G) { 
let cndoVYD = ! component.isAddingChecklistItem;
this.setState('stV8cco', cndoVYD);
let cnde2g8 = component.isAddingChecklistItem && component.currentChecklist.id == checklist.id;
this.setState('stSf4HR', cnde2g8);
let cndMc9r = !(cndoVYD||cnde2g8);
this.setState('stoxA79', cndMc9r);
if (cndoVYD) { 
let el4R7s1 = eo('button','BX6ff'+ii_SCl,null, eventListeners, {onclick:[function(e) {var $el = this;component.addChecklistItem(checklist)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-success`);
let elvKUEb = eo('i','d13ff'+ii_SCl,null,`class`,`${fas('plus')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el4R7s1;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add Item')}`});
        ;
                    }, 20);                
                }else if (cnde2g8) { 
let elg0qR8 = eo('button','V1Iff'+ii_SCl,null, eventListeners, {onclick:[function(e) {var $el = this;component.isAddingChecklistItem = false;}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elOmvHy = eo('i','xMGff'+ii_SCl,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elg0qR8;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove')}`});
        ;
                    }, 20);                
                }let cndrjWi = ! component.isInEditMode || component.type != 'checklist' || component.currentItem.id != checklist.id;
this.setState('sttyy3I', cndrjWi);
let cndRtRI = !(cndrjWi);
this.setState('st_TblX', cndRtRI);
if (cndrjWi) { 
let elOdhGC = eo('button','3m4ff'+ii_SCl,null, eventListeners, {onclick:[function(e) {var $el = this;component.allowEditing(checklist, index, 'checklist')}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-cyan`);
let elnibNN = eo('i','Hcmff'+ii_SCl,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elOdhGC;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit')}`});
        ;
                    }, 20);                
                }else { 
let eln936s = eo('button','OBtff'+ii_SCl,null, eventListeners, {onclick:[function(e) {var $el = this;component.isInEditMode = false}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-orange`);
let elJQGJq = eo('i','OsLff'+ii_SCl,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eln936s;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Cancel Editing')}`});
        ;
                    }, 20);                
                }let elgoCVK = eo('button','QKGff'+ii_SCl,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(checklist, index, 'checklist')}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elO1dCR = eo('i','OHFff'+ii_SCl,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elgoCVK;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove')}`});
        ;
                    }, 20);                
                }ec('div');
let cndaJUI = component.isInEditMode && component.type == 'checklist' && component.currentItem.id == checklist.id;
this.setState('stHO6dX', cndaJUI);
let cndNocY = ! component.isInEditMode || !component.currentItem || component.currentItem.id != checklist.id;
this.setState('stqZkZ9', cndNocY);
if (cndaJUI) { 
let elL25D5 = eo('form','51fff'+ii_SCl,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitChecklist($el)}]},`class`,`m-t-2`);

                if (! elL25D5.formHandler) {
                    window.cfrmdlr = elL25D5.formHandler = new FormHandler(elL25D5, component);
                } else {
                    window.cfrmdlr = elL25D5.formHandler;
                }
            let elx4Zy7 = ev('input','PlKff'+ii_SCl,null, eventListeners, {oninput:[function(e) {component.task.id = this.value;}]},`value`,`${fval(component.task.id)}`,`name`,`${(`task`).toInputName()}`,`type`,`hidden`);
elx4Zy7.value = fval(component.task.id);
let elDyl3k = ev('input','dxdff'+ii_SCl,null, eventListeners, {oninput:[function(e) {component.currentItem.sortOrder = this.value;}]},`value`,`${fval(component.currentItem.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`type`,`hidden`);
elDyl3k.value = fval(component.currentItem.sortOrder);
let elbGHzQ = eo('div','eipff'+ii_SCl,null,`class`,`form-group ${cls({'group-error': !!elL25D5.formHandler.getError(`name`) })}`);
let elXdSao = eo('label','G37ff'+ii_SCl,null,`for`,`name`);
text(trans('Checklist Name'));
let elWSUBS = eo('span','C6kff'+ii_SCl,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elu63US = ev('input','jSsff'+ii_SCl,null, eventListeners, {oninput:[function(e) {component.currentItem.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elL25D5.formHandler.addError(`name`, 'required', trans('validation.required'));}return elL25D5.formHandler.removeError(`name`);}]},`value`,`${fval(component.currentItem.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Checklist Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elu63US.value = fval(component.currentItem.name);
let cnd2SkO = elL25D5.formHandler.getError(`name`);
this.setState('stoMpnC', cnd2SkO);
if (cnd2SkO) { 
let elhsv67 = eo('div','PMzff'+ii_SCl,null,`class`,`alert alert-danger`);
text(elL25D5.formHandler.getError(`name`));
ec('div');
}ec('div');
let elgFWoH = eo('button','PWAff'+ii_SCl,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn bold btn-success bold`);
text(`Update`);
ec('button');
ec('form');
}else if (cndNocY) { 
let elcpVcQ = eo('ul','hVpff'+ii_SCl,null,`class`,`items`);
for (let i in checklist.items) {
let item = checklist.items[i]; 
 let iiLxW8 = item.id+ i;
let elOC2b5 = eo('li','qJjSs0ditqYn' + i+ii_SCl+iiLxW8,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.suggestCheckItemModification(item)}],onmouseout:[function(e) {var $el = this;component.unsuggestCheckItemModification()}]},`class`,`item`);
let cmpT8YY = this._lc('c_yxgZ_Ec', {parent:component,props:{label:item.item,value:item.item,checked:item.done},events:{onchange:function(e) {let $el = this; component.changeItemStatus(item, $el.checked)}},boolAttrs:{checked:item.done},state:'stqZkZ9',insideLoop:true,index:"" +ii_SCl+iiLxW8});
let cndG698 = component.isSuggestingItemControl && component.modifyingChecklistItem.id == item.id;
this.setState('st9CAcR', cndG698);
if (cndG698) { 
let ell8O9U = eo('button','u_Iff'+ii_SCl+iiLxW8,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(checklist, index, 'item', item, i)}]},`title`,``,`class`,`btn btn-sm btn-danger btn-circle delete-item-btn`);
let elILh8g = eo('i','7PRff'+ii_SCl+iiLxW8,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = ell8O9U;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove item')}`});
        ;
                    }, 20);                
                }ec('li');
}
let cndn5_d = component.isAddingChecklistItem && component.currentChecklist.id == checklist.id;
this.setState('stLSWcr', cndn5_d);
if (cndn5_d) { 
let elBZjgS = eo('li','Reoff'+ii_SCl,null,`class`,`item`);
let elGPUVS = eo('form','nKDff'+ii_SCl,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitItem($el)}]});

                if (! elGPUVS.formHandler) {
                    window.cfrmdlr = elGPUVS.formHandler = new FormHandler(elGPUVS, component);
                } else {
                    window.cfrmdlr = elGPUVS.formHandler;
                }
            let el3CQQd = ev('input','Uwmff'+ii_SCl,null, eventListeners, {oninput:[function(e) {component.task.id = this.value;}]},`value`,`${fval(component.task.id)}`,`name`,`${(`task`).toInputName()}`,`type`,`hidden`);
el3CQQd.value = fval(component.task.id);
let el8gnK2 = ev('input','_qyff'+ii_SCl,null, eventListeners, {oninput:[function(e) {component.currentChecklist.id = this.value;}]},`value`,`${fval(component.currentChecklist.id)}`,`name`,`${(`checklist`).toInputName()}`,`type`,`hidden`);
el8gnK2.value = fval(component.currentChecklist.id);
let el4WgFa = ev('input','pyAff'+ii_SCl,null, eventListeners, {oninput:[function(e) {component.currentChecklist.length = this.value;}]},`value`,`${fval(component.currentChecklist.length)}`,`name`,`${(`sortOrder`).toInputName()}`,`type`,`hidden`);
el4WgFa.value = fval(component.currentChecklist.length);
let elc_ClT = ev('input','06eff'+ii_SCl,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGPUVS.formHandler.addError(`item`, 'required', trans('validation.required'));}return elGPUVS.formHandler.removeError(`item`);}]},`name`,`${(`item`).toInputName()}`,`placeholder`,`${trans(`Checklist Item`)}`,`type`,`text`,`class`,`form-control`,`id`,`item`);

                    setTimeout(function () {
                        let $el = elc_ClT;
                        
            if (true && ! elc_ClT.focused) {
                elc_ClT.setSelectionRange(elc_ClT.value.length, elc_ClT.value.length)
                elc_ClT.focused = true;
                elc_ClT.focus();
            }
        ;
                    }, 20);                
                let cndOZge = elGPUVS.formHandler.getError(`item`);
this.setState('stTJszW', cndOZge);
if (cndOZge) { 
let elK3Nsd = eo('div','BULff'+ii_SCl,null,`class`,`alert alert-danger`);
text(elGPUVS.formHandler.getError(`item`));
ec('div');
}let elYCv7p = eo('button','wGtff'+ii_SCl,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-sm btn-primary bold`);
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
let cndBGw2 = component.isAboutToRemove;
this.setState('stdRp1S', cndBGw2);
if (cndBGw2) { 
let cmpq9ns = this._lc('cx6q5qKBC', {parent:component,events:{onclose:function(e) {let $el = this; component.isAboutToRemove = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stdRp1S'});
}
                    this.isReadyToGo();
                }
        });