_Component({
                selector: 'puzzles-page',
                c: 'EinsteinAdminPuzzles', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','categoryId','formObject','isValidForm','submitting'],
                children: {cNsLQqE2e:'table-actions',cG_q7JVJF:'admin-table',c3OztjlQz:'flk-checkbox',cEX_uvRTT:'flk-modal'},
                render: function (component) {
                    let cmpiQGR = this._lc('cG_q7JVJF', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iiS7_X = 'nJzH8DO' + index;
let el6stqR = eo('tr','hoyBpJtyzzHn' + index+iiS7_X);
let el7ckz2 = eo('td','D7Vff'+iiS7_X);
text(record.id);
ec('td');
let elDzaoj = eo('td','Yj9ff'+iiS7_X);
text(record.title);
ec('td');
let elEGVjF = eo('td','zBeff'+iiS7_X);
text(record.level);
ec('td');
let elY9TjC = eo('td','nx6ff'+iiS7_X);
text(Boolean(record.public));
ec('td');
let elyN1bI = eo('td','p7cff'+iiS7_X);
text( Number(record.reward).format() );
ec('td');
let el0otww = eo('td','puhff'+iiS7_X);
text(record.duration);
ec('td');
let elz4C96 = eo('td','PzAff'+iiS7_X);
let cmpLznZ = this._lc('cNsLQqE2e', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iiS7_X});
ec('td');
ec('tr');
}
}});
let cnd2GPy = component.openModal;
this.setState('stoGfsy', cnd2GPy);
if (cnd2GPy) { 
let cmp_yyL = this._lc('cEX_uvRTT', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elB9DQL = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elB9DQL.formHandler) {
                    window.cfrmdlr = elB9DQL.formHandler = new FormHandler(elB9DQL, component);
                } else {
                    window.cfrmdlr = elB9DQL.formHandler;
                }
            let el5r89C = ev('input',null,null, eventListeners, {oninput:[function(e) {component.categoryId = this.value;}]},`value`,`${fval(component.categoryId)}`,`name`,`${(`categoryId`).toInputName()}`,`type`,`hidden`);
el5r89C.value = fval(component.categoryId);
let elVfHEi = eo('div',null,null,`class`,`form-group`);
let el85bjE = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elB9DQL.formHandler.addError(`title`, 'required', trans('validation.required'));}return elB9DQL.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el85bjE.value = fval(component.formObject.title);
let cndunT1 = elB9DQL.formHandler.getError(`title`);
this.setState('st8qLYP', cndunT1);
if (cndunT1) { 
let elgEIc9 = eo('div','mRnf',null,`class`,`alert alert-danger`);
text(elB9DQL.formHandler.getError(`title`));
ec('div');
}ec('div');
let elMH50r = eo('div',null,null,`class`,`form-group`);
let elkp4BE = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.quest = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elB9DQL.formHandler.addError(`quest`, 'required', trans('validation.required'));}return elB9DQL.formHandler.removeError(`quest`);}]},`value`,`${fval(component.formObject.quest)}`,`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`quest`);
elkp4BE.value = fval(component.formObject.quest);
ec('textarea');
let cndW4Pe = elB9DQL.formHandler.getError(`quest`);
this.setState('stEiENC', cndW4Pe);
if (cndW4Pe) { 
let elq17VL = eo('div','0g_f',null,`class`,`alert alert-danger`);
text(elB9DQL.formHandler.getError(`quest`));
ec('div');
}ec('div');
let elk88MS = eo('div',null,null,`class`,`form-group`);
let elihsOD = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.level = this.value;}]},`value`,`${fval(component.formObject.level)}`,`name`,`${(`level`).toInputName()}`,`placeholder`,`${trans(`level`)}`,`type`,`number`,`class`,`form-control`,`id`,`level`);
elihsOD.value = fval(component.formObject.level);
ec('div');
let elfCzF0 = eo('div',null,null,`class`,`form-group`);
let el26ztX = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elB9DQL.formHandler.addError(`reward`, 'required', trans('validation.required'));}return elB9DQL.formHandler.removeError(`reward`);}]},`value`,`${fval(component.formObject.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`class`,`form-control`,`type`,`number`,`id`,`reward`);
el26ztX.value = fval(component.formObject.reward);
let cndTAhO = elB9DQL.formHandler.getError(`reward`);
this.setState('studNIv', cndTAhO);
if (cndTAhO) { 
let elmeNvi = eo('div','CyPf',null,`class`,`alert alert-danger`);
text(elB9DQL.formHandler.getError(`reward`));
ec('div');
}ec('div');
let el6oL2n = eo('div',null,null,`class`,`form-group`);
let elj6Ce_ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.duration = this.value;}]},`value`,`${fval(component.formObject.duration)}`,`name`,`${(`duration`).toInputName()}`,`placeholder`,`${trans(`Duration in seconds`)}`,`class`,`form-control`,`type`,`number`,`id`,`duration`);
elj6Ce_.value = fval(component.formObject.duration);
ec('div');
let elvZJkJ = eo('div',null,null,`class`,`form-group`);
let cmpyjKm = this._lc('c3OztjlQz', {parent:component,parentTop:flkModal,props:{checked:component.formObject.public},events:{onchange:function(e) {let $el = this; component.formObject.public = ! component.formObject.public}},boolAttrs:{checked:component.formObject.public},attrs:{name:`${(`public`).toInputName()}`,label:'Public puzzle',value:1},state:'stoGfsy'});
ec('div');
let elGQykw = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let el6gUoK = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stoGfsy'});
}
                    this.isReadyToGo();
                }
        });