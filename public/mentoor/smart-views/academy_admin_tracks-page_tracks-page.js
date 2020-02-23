_Component({
                selector: 'tracks-page',
                c: 'TracksPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {cEPqgpIpJ:'gold-icon',cKXdIkTBQ:'table-actions',c3_bsxy8U:'admin-table',cYkfkKTgr:'flk-checkbox',cvj09SvX8:'flk-modal'},
                render: function (component) {
                    let cmp0NIP = this._lc('c3_bsxy8U', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let track = component.items[index]; 
 let ii9tWS = 'XQszMg4' + index;
let el1P9iE = eo('tr','gZeZ7lU974j6' + index+ii9tWS,null,`id`,`${ track.id }`);
let elVTLPj = eo('td','dXdff'+ii9tWS);
text( track.id );
ec('td');
let elwmvkJ = eo('td','ZYSff'+ii9tWS);
let eluhKuC = ev('img','EBmff'+ii9tWS,null,`src`,`${track.image}`,`class`,`trackImg small-image`,`alt`,``);
ec('td');
let elIf_Ru = eo('td','DT0ff'+ii9tWS);
text(track.name);
ec('td');
let elcfNcD = eo('td','SP7ff'+ii9tWS);
let elaZyAM = eo('div','36off'+ii9tWS);
let elTz_cN = eo('i','RLrff'+ii9tWS,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
let elHfBXP = eo('strong','vIRff'+ii9tWS,null,`class`,`mx-2`);
text(track.suggestTopic.requires.format());
ec('strong');
ec('div');
let el04pKk = eo('div','jeiff'+ii9tWS);
let cmpUuG2 = this._lc('cEPqgpIpJ', {parent:component,parentTop:adminTable,props:{coins:track.suggestTopic.reward},insideLoop:true,index:"" +ii9tWS});
ec('div');
ec('td');
let el26FBE = eo('td','Pycff'+ii9tWS);
text(track.sortOrder);
ec('td');
let el93Mko = eo('td','jXwff'+ii9tWS);
text(track.display);
ec('td');
let eleSYbK = eo('td','_NLff'+ii9tWS);
let el1E2IJ = eo('a','aUSff'+ii9tWS,null,`href`,`/admin/academy/tracks/${ track.id }/topics`);
text(`${ track.topics.length.format() }
        topics`);
ec('a');
ec('td');
let el1Fp7v = eo('td','d4cff'+ii9tWS);
text( Number(track.cost).format() );
ec('td');
let el4YLDb = eo('td','1Vuff'+ii9tWS);
let cmpTIeL = this._lc('cKXdIkTBQ', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(track)},ondelete:function(e) {let $el = this; component.deleteItem(track.id, index)}},insideLoop:true,index:"" +ii9tWS});
ec('td');
ec('tr');
}
}});
let cndU2li = component.openModal;
this.setState('stRAiHW', cndU2li);
if (cndU2li) { 
let cmp1eUo = this._lc('cvj09SvX8', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elxzjzc = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elxzjzc.formHandler) {
                    window.cfrmdlr = elxzjzc.formHandler = new FormHandler(elxzjzc, component);
                } else {
                    window.cfrmdlr = elxzjzc.formHandler;
                }
            let el9ojUD = eo('div',null,null,`class`,`form-group`);
let elKM0VI = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elxzjzc.formHandler.addError(`name`, 'required', trans('validation.required'));}return elxzjzc.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Track name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elKM0VI.value = fval(component.formObject.name);
let cnda8HH = elxzjzc.formHandler.getError(`name`);
this.setState('stJMUm5', cnda8HH);
if (cnda8HH) { 
let eld54bN = eo('div','3oGf',null,`class`,`alert alert-danger`);
text(elxzjzc.formHandler.getError(`name`));
ec('div');
}ec('div');
let eluju5o = eo('div',null,null,`class`,`form-group`);
let elfrOzn = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elxzjzc.formHandler.addError(`slug`, 'required', trans('validation.required'));}return elxzjzc.formHandler.removeError(`slug`);}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`placeholder`,`${trans(`Url slug`)}`,`type`,`text`,`class`,`form-control`,`id`,`slug`);
elfrOzn.value = fval(component.formObject.slug);
let cnd31HA = elxzjzc.formHandler.getError(`slug`);
this.setState('stw_2jK', cnd31HA);
if (cnd31HA) { 
let elsmOKv = eo('div','5XCf',null,`class`,`alert alert-danger`);
text(elxzjzc.formHandler.getError(`slug`));
ec('div');
}ec('div');
let ela3ens = eo('div',null,null,`class`,`form-group`);
let el_joRh = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elxzjzc.formHandler.addError(`description`, 'required', trans('validation.required'));}return elxzjzc.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
el_joRh.value = fval(component.formObject.description);
ec('textarea');
let cndJ_4z = elxzjzc.formHandler.getError(`description`);
this.setState('stGHbQt', cndJ_4z);
if (cndJ_4z) { 
let eln701V = eo('div','ZPNf',null,`class`,`alert alert-danger`);
text(elxzjzc.formHandler.getError(`description`));
ec('div');
}ec('div');
let elxFDJE = eo('div',null,null,`class`,`form-group`);
let elvdhhr = eo('div',null,null,`class`,`row`);
let el55rOK = eo('div',null,null,`class`,`col-md-4`);
let elDpNSz = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elDpNSz.value = fval(component.formObject.sortOrder);
ec('div');
let elfx9YP = eo('div',null,null,`class`,`col-md-4`);
let elEePYK = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elxzjzc.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elxzjzc.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elEePYK.value = fval(component.formObject.cost);
let cndKIwk = elxzjzc.formHandler.getError(`cost`);
this.setState('stTBdPa', cndKIwk);
if (cndKIwk) { 
let elsaEJE = eo('div','vwDf',null,`class`,`alert alert-danger`);
text(elxzjzc.formHandler.getError(`cost`));
ec('div');
}ec('div');
let elAEvZd = eo('div',null,null,`class`,`col-md-4`);
let cmpKSsq = this._lc('cYkfkKTgr', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},events:{onchange:function(e) {let $el = this; component.formObject.display = ! component.formObject.display}},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,value:1,label:'display'},state:'stRAiHW'});
ec('div');
ec('div');
let eleRF3K = eo('h3',null,null,`class`,`m-v-1 bold`);
text(`Suggest Topics`);
ec('h3');
let elPW_dA = eo('div',null,null,`class`,`row`);
let elUvhqD = eo('div',null,null,`class`,`col-md-4`);
let elczWK4 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.suggestTopic.requires = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elxzjzc.formHandler.addError(`suggestTopic.requires`, 'required', trans('validation.required'));}return elxzjzc.formHandler.removeError(`suggestTopic.requires`);}]},`value`,`${fval(component.formObject.suggestTopic.requires)}`,`name`,`${(`suggestTopic.requires`).toInputName()}`,`placeholder`,`${trans(`Required answers for suggest topic`)}`,`class`,`form-control`,`type`,`number`,`id`,`suggestTopic-requires`);
elczWK4.value = fval(component.formObject.suggestTopic.requires);
let cnd2UI1 = elxzjzc.formHandler.getError(`suggestTopic.requires`);
this.setState('stvRcIv', cnd2UI1);
if (cnd2UI1) { 
let eluzPFw = eo('div','_yif',null,`class`,`alert alert-danger`);
text(elxzjzc.formHandler.getError(`suggestTopic.requires`));
ec('div');
}ec('div');
let elcPBIl = eo('div',null,null,`class`,`col-md-4`);
let elxKLfi = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.suggestTopic.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elxzjzc.formHandler.addError(`suggestTopic.reward`, 'required', trans('validation.required'));}return elxzjzc.formHandler.removeError(`suggestTopic.reward`);}]},`value`,`${fval(component.formObject.suggestTopic.reward)}`,`name`,`${(`suggestTopic.reward`).toInputName()}`,`placeholder`,`${trans(`Reward for suggest topic`)}`,`class`,`form-control`,`type`,`number`,`id`,`suggestTopic-reward`);
elxKLfi.value = fval(component.formObject.suggestTopic.reward);
let cndhS8w = elxzjzc.formHandler.getError(`suggestTopic.reward`);
this.setState('stN4BaN', cndhS8w);
if (cndhS8w) { 
let elVZiTi = eo('div','v_rf',null,`class`,`alert alert-danger`);
text(elxzjzc.formHandler.getError(`suggestTopic.reward`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elS2Skl = eo('div',null,null,`class`,`form-group`);
let elRPOqz = ev('input',null,null,`name`,`${(`image`).toInputName()}`,`type`,`file`);
ec('div');
let elRa2OI = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elqJhRO = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stRAiHW'});
}
                    this.isReadyToGo();
                }
        });