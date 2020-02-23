_Component({
                selector: 'task-checklist',
                c: 'TaskChecklist', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['task','addChecklistForm','addNewChecklist','submitChecklist','checklistName','items','unsetArrayIndex','isSending','isValidForm','isAddingChecklistItem','addChecklistItem','currentChecklist','isInEditMode','type','currentItem','allowEditing','confirmRemoving','suggestCheckItemModification','unsuggestCheckItemModification','changeItemStatus','isSuggestingItemControl','modifyingChecklistItem','submitItem','isAboutToRemove','remove'],
                children: {cjDAmOwnT:'flk-mdb-checkbox',cjt8GamAl:'flk-alert'},
                render: function (component) {
                    let elDmi4B = eo('section',null,null,`class`,`checklists-wrapper`);
let elCplLw = eo('h3');
text(`Checklists (${ component.task.checklists.length })`);
let cndPBYq = ! component.addChecklistForm;
this.setState('st7PX1S', cndPBYq);
let cndly5J = !(cndPBYq);
this.setState('stDw4sZ', cndly5J);
if (cndPBYq) { 
let elFcmJt = eo('button','aLMf',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewChecklist()}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-success`);
let elwdC3P = eo('i','a6rf',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elFcmJt;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Checklist')}`});
        ;
                    }, 20);                
                }else { 
let eldn0BB = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.addChecklistForm = false}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let el_ai6F = eo('i',null,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eldn0BB;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Close')}`});
        ;
                    }, 20);                
                }let cndfpD3 = component.addChecklistForm;
this.setState('stEEmGS', cndfpD3);
if (cndfpD3) { 
let elE445X = eo('form','aPyf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitChecklist($el)}]},`class`,`m-t-2`);

                if (! elE445X.formHandler) {
                    window.cfrmdlr = elE445X.formHandler = new FormHandler(elE445X, component);
                } else {
                    window.cfrmdlr = elE445X.formHandler;
                }
            let elFj02p = eo('div','wl5f',null,`class`,`row`);
let elmlaeB = ev('input','Os5f',null, eventListeners, {oninput:[function(e) {component.task.id = this.value;}]},`value`,`${fval(component.task.id)}`,`name`,`${(`task`).toInputName()}`,`type`,`hidden`);
elmlaeB.value = fval(component.task.id);
let elI1isR = ev('input','WCAf',null, eventListeners, {oninput:[function(e) {component.task.checklists.length = this.value;}]},`value`,`${fval(component.task.checklists.length)}`,`name`,`${(`sortOrder`).toInputName()}`,`type`,`hidden`);
elI1isR.value = fval(component.task.checklists.length);
let elRRJ_e = eo('div','heXf',null,`class`,`col-sm-4`);
let elVxNUs = eo('div','2ZSf',null,`class`,`form-group`);
elVxNUs.cls = {'group-error': !!elE445X.formHandler.getError(`name`) };

            for (let className in elVxNUs.cls) {
                elVxNUs.classList.toggle(className, elVxNUs.cls[className]);
            }  
            let el1TEjV = eo('label','qrpf',null,`for`,`name`);
text(trans('Checklist Name'));
let eltv9f0 = eo('span','XS2f',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elryALX = ev('input','ksMf',null, eventListeners, {oninput:[function(e) {component.checklistName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elE445X.formHandler.addError(`name`, 'required', trans('validation.required'));}return elE445X.formHandler.removeError(`name`);}]},`value`,`${fval(component.checklistName)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Checklist Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elryALX.value = fval(component.checklistName);
let cnd9LjH = elE445X.formHandler.getError(`name`);
this.setState('stW9Q9m', cnd9LjH);
if (cnd9LjH) { 
let elYH0tq = eo('div','hBKf',null,`class`,`alert alert-danger`);
text(elE445X.formHandler.getError(`name`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elmGVPq = eo('div',null,null,`class`,`row`);
let elOChKB = eo('div',null,null,`class`,`col-sm-8`);
for (let index in component.items) {
let item = component.items[index]; 
 let iigYmB = 'KCQsvRe' + index;
let elEt2UU = eo('div','bL1C_nT5ZNQ6' + index+iigYmB,null,`class`,`row m-0`);
let eltFhMd = ev('input','uQOff'+iigYmB,null, eventListeners, {oninput:[function(e) {component.items[index] = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elE445X.formHandler.addError(`items[]`, 'required', trans('validation.required'));}return elE445X.formHandler.removeError(`items[]`);}]},`value`,`${fval(component.items[index])}`,`name`,`${(`items[]`).toInputName()}`,`placeholder`,`${trans(`Checklist Item`)}`,`type`,`text`,`class`,`form-control col-sm-10`,`id`,`items[]`);
eltFhMd.value = fval(component.items[index]);
let cndBMap = elE445X.formHandler.getError(`items[]`);
this.setState('stUlRmh', cndBMap);
if (cndBMap) { 
let elXLxNq = eo('div','bUXff'+iigYmB,null,`class`,`alert alert-danger`);
text(elE445X.formHandler.getError(`items[]`));
ec('div');
}let elyyXtd = eo('div','ORdff'+iigYmB,null,`class`,`col mt-2`);
let elZKZno = eo('button','ryKff'+iigYmB,null, eventListeners, {onclick:[function(e) {var $el = this;component.unsetArrayIndex('items', index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elhy3Fq = eo('i','XVCff'+iigYmB,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elZKZno;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Item')}`});
        ;
                    }, 20);                
                ec('div');
ec('div');
}
let elDdzGY = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.items.push('')}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-info`);
let elM0mDR = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elDdzGY;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('add New Item')}`});
        ;
                    }, 20);                
                ec('div');
ec('div');
let elQH5PQ = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-sm btn-primary bold`);
text(`Create
                Checklist`);
ec('button');
ec('form');
}let elFw9iz = eo('div',null,null,`class`,`row`);
for (let index in component.task.checklists) {
let checklist = component.task.checklists[index]; 
 let iif9OC = checklist.id+ index;
let elQ9_Pe = eo('div','AnskZLVfBtLk' + index+iif9OC,null,`class`,`col-sm-6 checklist m-t-2 p-0`);
let elnYafq = eo('div','BOgff'+iif9OC,null,`class`,`bold`);
let elDSlrU = eo('span','bycff'+iif9OC);
text(checklist.name);
ec('span');
text(`(${ checklist.items.length })`);
let cndmpxD = component.task.canBeModified;
this.setState('stU_FBa', cndmpxD);
if (cndmpxD) { 
let cnddX3E = ! component.isAddingChecklistItem;
this.setState('sthdrUj', cnddX3E);
let cndha9v = component.isAddingChecklistItem && component.currentChecklist.id == checklist.id;
this.setState('stlSS4L', cndha9v);
let cndUUco = !(cnddX3E||cndha9v);
this.setState('st0Vsi9', cndUUco);
if (cnddX3E) { 
let elZd_3t = eo('button','xeAff'+iif9OC,null, eventListeners, {onclick:[function(e) {var $el = this;component.addChecklistItem(checklist)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-success`);
let elZVgwi = eo('i','4Mfff'+iif9OC,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elZd_3t;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add Item')}`});
        ;
                    }, 20);                
                }else if (cndha9v) { 
let elBspuk = eo('button','VFvff'+iif9OC,null, eventListeners, {onclick:[function(e) {var $el = this;component.isAddingChecklistItem = false;}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let el0I0zo = eo('i','9Brff'+iif9OC,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elBspuk;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove')}`});
        ;
                    }, 20);                
                }let cndpoBw = ! component.isInEditMode || component.type != 'checklist' || component.currentItem.id != checklist.id;
this.setState('stS10xQ', cndpoBw);
let cnd_pYz = !(cndpoBw);
this.setState('stsY52w', cnd_pYz);
if (cndpoBw) { 
let elwsvAt = eo('button','TuUff'+iif9OC,null, eventListeners, {onclick:[function(e) {var $el = this;component.allowEditing(checklist, index, 'checklist')}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-cyan`);
let el2iEFw = eo('i','l3Sff'+iif9OC,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elwsvAt;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit')}`});
        ;
                    }, 20);                
                }else { 
let elPPCdW = eo('button','TCGff'+iif9OC,null, eventListeners, {onclick:[function(e) {var $el = this;component.isInEditMode = false}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-orange`);
let elzy4i9 = eo('i','QY3ff'+iif9OC,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elPPCdW;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Cancel Editing')}`});
        ;
                    }, 20);                
                }let ele6l3u = eo('button','bmpff'+iif9OC,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(checklist, index, 'checklist')}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let el_5KfC = eo('i','iv2ff'+iif9OC,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = ele6l3u;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove')}`});
        ;
                    }, 20);                
                }ec('div');
let cnd_ef6 = component.isInEditMode && component.type == 'checklist' && component.currentItem.id == checklist.id;
this.setState('stVM5RI', cnd_ef6);
let cndGzLa = ! component.isInEditMode || !component.currentItem || component.currentItem.id != checklist.id;
this.setState('stHMb_0', cndGzLa);
if (cnd_ef6) { 
let elbjcIS = eo('form','zJ7ff'+iif9OC,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitChecklist($el)}]},`class`,`m-t-2`);

                if (! elbjcIS.formHandler) {
                    window.cfrmdlr = elbjcIS.formHandler = new FormHandler(elbjcIS, component);
                } else {
                    window.cfrmdlr = elbjcIS.formHandler;
                }
            let elpvAi2 = ev('input','PE_ff'+iif9OC,null, eventListeners, {oninput:[function(e) {component.task.id = this.value;}]},`value`,`${fval(component.task.id)}`,`name`,`${(`task`).toInputName()}`,`type`,`hidden`);
elpvAi2.value = fval(component.task.id);
let elg6zFO = ev('input','hzsff'+iif9OC,null, eventListeners, {oninput:[function(e) {component.currentItem.sortOrder = this.value;}]},`value`,`${fval(component.currentItem.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`type`,`hidden`);
elg6zFO.value = fval(component.currentItem.sortOrder);
let elTGC1G = eo('div','6aNff'+iif9OC,null,`class`,`form-group`);
elTGC1G.cls = {'group-error': !!elbjcIS.formHandler.getError(`name`) };

            for (let className in elTGC1G.cls) {
                elTGC1G.classList.toggle(className, elTGC1G.cls[className]);
            }  
            let elX16fW = eo('label','4Skff'+iif9OC,null,`for`,`name`);
text(trans('Checklist Name'));
let elunq9Q = eo('span','y9nff'+iif9OC,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elMT2nu = ev('input','3osff'+iif9OC,null, eventListeners, {oninput:[function(e) {component.currentItem.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbjcIS.formHandler.addError(`name`, 'required', trans('validation.required'));}return elbjcIS.formHandler.removeError(`name`);}]},`value`,`${fval(component.currentItem.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Checklist Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elMT2nu.value = fval(component.currentItem.name);
let cnd3YC4 = elbjcIS.formHandler.getError(`name`);
this.setState('stIRcPh', cnd3YC4);
if (cnd3YC4) { 
let elx8cOK = eo('div','T0Rff'+iif9OC,null,`class`,`alert alert-danger`);
text(elbjcIS.formHandler.getError(`name`));
ec('div');
}ec('div');
let elfL_i6 = eo('button','80vff'+iif9OC,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn bold btn-success bold`);
text(`Update`);
ec('button');
ec('form');
}else if (cndGzLa) { 
let el38xpq = eo('ul','_Eyff'+iif9OC,null,`class`,`items`);
for (let i in checklist.items) {
let item = checklist.items[i]; 
 let iiZDx3 = item.id+ i;
let elJjbjH = eo('li','qiNU0kXF1qzK' + i+iif9OC+iiZDx3,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.suggestCheckItemModification(item)}],onmouseout:[function(e) {var $el = this;component.unsuggestCheckItemModification()}]},`class`,`item`);
let cmp98uI = this._lc('cjDAmOwnT', {parent:component,props:{label:item.item,value:item.item,checked:item.done},events:{onchange:function(e) {let $el = this; component.changeItemStatus(item, $el.checked)}},boolAttrs:{checked:item.done},state:'stHMb_0',insideLoop:true,index:"" +iif9OC+iiZDx3});
let cnd2cSU = component.isSuggestingItemControl && component.modifyingChecklistItem.id == item.id;
this.setState('stAqQ8p', cnd2cSU);
if (cnd2cSU) { 
let elMfb6R = eo('button','qbhff'+iif9OC+iiZDx3,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(checklist, index, 'item', item, i)}]},`title`,``,`class`,`btn btn-sm btn-danger btn-circle delete-item-btn`);
let elFWS0i = eo('i','H8Off'+iif9OC+iiZDx3,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elMfb6R;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove item')}`});
        ;
                    }, 20);                
                }ec('li');
}
let cndy84b = component.isAddingChecklistItem && component.currentChecklist.id == checklist.id;
this.setState('stHk8qr', cndy84b);
if (cndy84b) { 
let elhgvvn = eo('li','EzDff'+iif9OC,null,`class`,`item`);
let elogu4p = eo('form','Cikff'+iif9OC,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitItem($el)}]});

                if (! elogu4p.formHandler) {
                    window.cfrmdlr = elogu4p.formHandler = new FormHandler(elogu4p, component);
                } else {
                    window.cfrmdlr = elogu4p.formHandler;
                }
            let el7OWpn = ev('input','RGSff'+iif9OC,null, eventListeners, {oninput:[function(e) {component.task.id = this.value;}]},`value`,`${fval(component.task.id)}`,`name`,`${(`task`).toInputName()}`,`type`,`hidden`);
el7OWpn.value = fval(component.task.id);
let elWpeFQ = ev('input','K9Dff'+iif9OC,null, eventListeners, {oninput:[function(e) {component.currentChecklist.id = this.value;}]},`value`,`${fval(component.currentChecklist.id)}`,`name`,`${(`checklist`).toInputName()}`,`type`,`hidden`);
elWpeFQ.value = fval(component.currentChecklist.id);
let elmFihn = ev('input','nHbff'+iif9OC,null, eventListeners, {oninput:[function(e) {component.currentChecklist.length = this.value;}]},`value`,`${fval(component.currentChecklist.length)}`,`name`,`${(`sortOrder`).toInputName()}`,`type`,`hidden`);
elmFihn.value = fval(component.currentChecklist.length);
let elNgjDD = ev('input','wQFff'+iif9OC,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elogu4p.formHandler.addError(`item`, 'required', trans('validation.required'));}return elogu4p.formHandler.removeError(`item`);}]},`name`,`${(`item`).toInputName()}`,`placeholder`,`${trans(`Checklist Item`)}`,`type`,`text`,`class`,`form-control`,`id`,`item`);

                    setTimeout(function () {
                        let $el = elNgjDD;
                        
            if (true && ! elNgjDD.focused) {
                elNgjDD.setSelectionRange(elNgjDD.value.length, elNgjDD.value.length)
                elNgjDD.focused = true;
                elNgjDD.focus();
            }
        ;
                    }, 20);                
                let cnd2wlz = elogu4p.formHandler.getError(`item`);
this.setState('stdPvOG', cnd2wlz);
if (cnd2wlz) { 
let el0cG1Q = eo('div','lI6ff'+iif9OC,null,`class`,`alert alert-danger`);
text(elogu4p.formHandler.getError(`item`));
ec('div');
}let el4myzj = eo('button','_7fff'+iif9OC,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-sm btn-primary bold`);
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
let cndBkdi = component.isAboutToRemove;
this.setState('stlsZ5Q', cndBkdi);
if (cndBkdi) { 
let cmpwaiP = this._lc('cjt8GamAl', {parent:component,events:{onclose:function(e) {let $el = this; component.isAboutToRemove = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stlsZ5Q'});
}
                    this.isReadyToGo();
                }
        });