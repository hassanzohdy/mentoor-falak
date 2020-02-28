_Component({
                selector: 'tracks-page',
                c: 'TracksPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {cIprANB2U:'gold-icon',c1xeraj3i:'table-actions',c9NHRyzcC:'admin-table',cjesASTOI:'flk-checkbox',cFkpz5KEL:'flk-modal'},
                render: function (component) {
                    let cmpawdb = this._lc('c9NHRyzcC', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let track = component.items[index]; 
 let ii4x2n = '51_2kFk' + index;
let el_JjCO = eo('tr','K6s1S4PRPHvR' + index+ii4x2n,null,`id`,`${ track.id }`);
let elLDlCK = eo('td','Xyrff'+ii4x2n);
text( track.id );
ec('td');
let elcqhyj = eo('td','gAfff'+ii4x2n);
let elAIY_X = ev('img','w5qff'+ii4x2n,null,`src`,`${track.image}`,`class`,`trackImg small-image`,`alt`,``);
ec('td');
let elnoWnJ = eo('td','yqRff'+ii4x2n);
text(track.name);
ec('td');
let elPxokQ = eo('td','vMmff'+ii4x2n);
let elxUJRk = eo('div','RyFff'+ii4x2n);
let elf0py6 = eo('i','8aHff'+ii4x2n,null,`class`,`${fas('edit')} icon`);
ec('i');
let elNMOXk = eo('strong','bMfff'+ii4x2n,null,`class`,`mx-2`);
text(track.suggestTopic.requires.format());
ec('strong');
ec('div');
let elSG6F1 = eo('div','YVaff'+ii4x2n);
let cmpKFKk = this._lc('cIprANB2U', {parent:component,parentTop:adminTable,props:{coins:track.suggestTopic.reward},insideLoop:true,index:"" +ii4x2n});
ec('div');
ec('td');
let elRw3ua = eo('td','bQmff'+ii4x2n);
text(track.sortOrder);
ec('td');
let elOWmby = eo('td','bowff'+ii4x2n);
text(track.display);
ec('td');
let elByuhV = eo('td','cuJff'+ii4x2n);
let elu2uht = eo('a','xP2ff'+ii4x2n,null,`href`,`/admin/academy/tracks/${ track.id }/topics`);
text(`${ track.topics.length.format() }
        topics`);
ec('a');
ec('td');
let elBVlBA = eo('td','SGVff'+ii4x2n);
text( Number(track.cost).format() );
ec('td');
let elyg3L_ = eo('td','OUiff'+ii4x2n);
let cmpnu_m = this._lc('c1xeraj3i', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(track)},ondelete:function(e) {let $el = this; component.deleteItem(track.id, index)}},insideLoop:true,index:"" +ii4x2n});
ec('td');
ec('tr');
}
}});
let cnduLbC = component.openModal;
this.setState('stPoI4J', cnduLbC);
if (cnduLbC) { 
let cmpUYKF = this._lc('cFkpz5KEL', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let el2r2qX = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el2r2qX.formHandler) {
                    window.cfrmdlr = el2r2qX.formHandler = new FormHandler(el2r2qX, component);
                } else {
                    window.cfrmdlr = el2r2qX.formHandler;
                }
            let elrkbql = eo('div',null,null,`class`,`form-group`);
let elPtIuJ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el2r2qX.formHandler.addError(`name`, 'required', trans('validation.required'));}return el2r2qX.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Track name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elPtIuJ.value = fval(component.formObject.name);
let cndOm0E = el2r2qX.formHandler.getError(`name`);
this.setState('stOB68C', cndOm0E);
if (cndOm0E) { 
let ellrGQ3 = eo('div','pe5f',null,`class`,`alert alert-danger`);
text(el2r2qX.formHandler.getError(`name`));
ec('div');
}ec('div');
let elvpzln = eo('div',null,null,`class`,`form-group`);
let el_noH1 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el2r2qX.formHandler.addError(`slug`, 'required', trans('validation.required'));}return el2r2qX.formHandler.removeError(`slug`);}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`placeholder`,`${trans(`Url slug`)}`,`type`,`text`,`class`,`form-control`,`id`,`slug`);
el_noH1.value = fval(component.formObject.slug);
let cndB9wz = el2r2qX.formHandler.getError(`slug`);
this.setState('stcI4B0', cndB9wz);
if (cndB9wz) { 
let elBJc0a = eo('div','2fUf',null,`class`,`alert alert-danger`);
text(el2r2qX.formHandler.getError(`slug`));
ec('div');
}ec('div');
let el_oL1g = eo('div',null,null,`class`,`form-group`);
let elw3YvZ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el2r2qX.formHandler.addError(`description`, 'required', trans('validation.required'));}return el2r2qX.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elw3YvZ.value = fval(component.formObject.description);
ec('textarea');
let cnd6APp = el2r2qX.formHandler.getError(`description`);
this.setState('stv_ijX', cnd6APp);
if (cnd6APp) { 
let elk9E5V = eo('div','DVIf',null,`class`,`alert alert-danger`);
text(el2r2qX.formHandler.getError(`description`));
ec('div');
}ec('div');
let el03GAy = eo('div',null,null,`class`,`form-group`);
let elPGUv2 = eo('div',null,null,`class`,`row`);
let elcYzTp = eo('div',null,null,`class`,`col-md-4`);
let eliVlLY = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
eliVlLY.value = fval(component.formObject.sortOrder);
ec('div');
let elGamQg = eo('div',null,null,`class`,`col-md-4`);
let el0qeMH = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el2r2qX.formHandler.addError(`cost`, 'required', trans('validation.required'));}return el2r2qX.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
el0qeMH.value = fval(component.formObject.cost);
let cndCCsB = el2r2qX.formHandler.getError(`cost`);
this.setState('stJPRZb', cndCCsB);
if (cndCCsB) { 
let elU3d19 = eo('div','YkMf',null,`class`,`alert alert-danger`);
text(el2r2qX.formHandler.getError(`cost`));
ec('div');
}ec('div');
let el6DF9j = eo('div',null,null,`class`,`col-md-4`);
let cmpfkM6 = this._lc('cjesASTOI', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},events:{onchange:function(e) {let $el = this; component.formObject.display = ! component.formObject.display}},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,value:1,label:'display'},state:'stPoI4J'});
ec('div');
ec('div');
let elTIJZI = eo('h3',null,null,`class`,`m-v-1 bold`);
text(`Suggest Topics`);
ec('h3');
let elvWemP = eo('div',null,null,`class`,`row`);
let elmJtG4 = eo('div',null,null,`class`,`col-md-4`);
let elPzGmO = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.suggestTopic.requires = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el2r2qX.formHandler.addError(`suggestTopic.requires`, 'required', trans('validation.required'));}return el2r2qX.formHandler.removeError(`suggestTopic.requires`);}]},`value`,`${fval(component.formObject.suggestTopic.requires)}`,`name`,`${(`suggestTopic.requires`).toInputName()}`,`placeholder`,`${trans(`Required answers for suggest topic`)}`,`class`,`form-control`,`type`,`number`,`id`,`suggestTopic-requires`);
elPzGmO.value = fval(component.formObject.suggestTopic.requires);
let cndvV6c = el2r2qX.formHandler.getError(`suggestTopic.requires`);
this.setState('st28btZ', cndvV6c);
if (cndvV6c) { 
let elyG2XZ = eo('div','oldf',null,`class`,`alert alert-danger`);
text(el2r2qX.formHandler.getError(`suggestTopic.requires`));
ec('div');
}ec('div');
let elCt4og = eo('div',null,null,`class`,`col-md-4`);
let elrFWk4 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.suggestTopic.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el2r2qX.formHandler.addError(`suggestTopic.reward`, 'required', trans('validation.required'));}return el2r2qX.formHandler.removeError(`suggestTopic.reward`);}]},`value`,`${fval(component.formObject.suggestTopic.reward)}`,`name`,`${(`suggestTopic.reward`).toInputName()}`,`placeholder`,`${trans(`Reward for suggest topic`)}`,`class`,`form-control`,`type`,`number`,`id`,`suggestTopic-reward`);
elrFWk4.value = fval(component.formObject.suggestTopic.reward);
let cndv2cQ = el2r2qX.formHandler.getError(`suggestTopic.reward`);
this.setState('stURk9z', cndv2cQ);
if (cndv2cQ) { 
let el4VTON = eo('div','QfUf',null,`class`,`alert alert-danger`);
text(el2r2qX.formHandler.getError(`suggestTopic.reward`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elV0_q4 = eo('div',null,null,`class`,`form-group`);
let elifYli = ev('input',null,null,`name`,`${(`image`).toInputName()}`,`type`,`file`);
ec('div');
let el7mQV9 = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elrZ1Cz = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stPoI4J'});
}
                    this.isReadyToGo();
                }
        });