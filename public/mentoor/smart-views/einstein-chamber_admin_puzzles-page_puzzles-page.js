_Component({
                selector: 'puzzles-page',
                c: 'EinsteinAdminPuzzles', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','categoryId','formObject','isValidForm','submitting'],
                children: {c7wUtw78d:'table-actions',cnaDbvx8v:'admin-table',cF3hkZUCr:'flk-checkbox',cs25L_dBw:'flk-modal'},
                render: function (component) {
                    let cmpMS1v = this._lc('cnaDbvx8v', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let ii_CKK = '0lpBuHe' + index;
let elTzFsN = eo('tr','zZz8RhSxUbnZ' + index+ii_CKK);
let elBXQrF = eo('td','qZmff'+ii_CKK);
text(record.id);
ec('td');
let elvbcPG = eo('td','2Gcff'+ii_CKK);
text(record.title);
ec('td');
let elUr_AV = eo('td','ge0ff'+ii_CKK);
text(record.level);
ec('td');
let elXFn4k = eo('td','sXAff'+ii_CKK);
text(Boolean(record.public));
ec('td');
let elrP2S0 = eo('td','rzHff'+ii_CKK);
text( Number(record.reward).format() );
ec('td');
let el7lhZH = eo('td','2ioff'+ii_CKK);
text(record.duration);
ec('td');
let elSwZ9Z = eo('td','2vGff'+ii_CKK);
let cmpwEh9 = this._lc('c7wUtw78d', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +ii_CKK});
ec('td');
ec('tr');
}
}});
let cndEoEX = component.openModal;
this.setState('sttS4Hd', cndEoEX);
if (cndEoEX) { 
let cmpDquo = this._lc('cs25L_dBw', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let ellcvau = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! ellcvau.formHandler) {
                    window.cfrmdlr = ellcvau.formHandler = new FormHandler(ellcvau, component);
                } else {
                    window.cfrmdlr = ellcvau.formHandler;
                }
            let elF6IsP = ev('input',null,null, eventListeners, {oninput:[function(e) {component.categoryId = this.value;}]},`value`,`${fval(component.categoryId)}`,`name`,`${(`categoryId`).toInputName()}`,`type`,`hidden`);
elF6IsP.value = fval(component.categoryId);
let elDi8HP = eo('div',null,null,`class`,`form-group`);
let elq0inO = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return ellcvau.formHandler.addError(`title`, 'required', trans('validation.required'));}return ellcvau.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elq0inO.value = fval(component.formObject.title);
let cndDxT8 = ellcvau.formHandler.getError(`title`);
this.setState('stzij8F', cndDxT8);
if (cndDxT8) { 
let elcvmRT = eo('div','sexf',null,`class`,`alert alert-danger`);
text(ellcvau.formHandler.getError(`title`));
ec('div');
}ec('div');
let elqdQ0O = eo('div',null,null,`class`,`form-group`);
let elZ5AMf = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.quest = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return ellcvau.formHandler.addError(`quest`, 'required', trans('validation.required'));}return ellcvau.formHandler.removeError(`quest`);}]},`value`,`${fval(component.formObject.quest)}`,`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`quest`);
elZ5AMf.value = fval(component.formObject.quest);
ec('textarea');
let cndIvMa = ellcvau.formHandler.getError(`quest`);
this.setState('stnsCNL', cndIvMa);
if (cndIvMa) { 
let elm5Aqi = eo('div','PO5f',null,`class`,`alert alert-danger`);
text(ellcvau.formHandler.getError(`quest`));
ec('div');
}ec('div');
let elPL8eq = eo('div',null,null,`class`,`form-group`);
let elWS8cv = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.level = this.value;}]},`value`,`${fval(component.formObject.level)}`,`name`,`${(`level`).toInputName()}`,`placeholder`,`${trans(`level`)}`,`type`,`number`,`class`,`form-control`,`id`,`level`);
elWS8cv.value = fval(component.formObject.level);
ec('div');
let elafaG1 = eo('div',null,null,`class`,`form-group`);
let elGRK7V = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return ellcvau.formHandler.addError(`reward`, 'required', trans('validation.required'));}return ellcvau.formHandler.removeError(`reward`);}]},`value`,`${fval(component.formObject.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`class`,`form-control`,`type`,`number`,`id`,`reward`);
elGRK7V.value = fval(component.formObject.reward);
let cndY5xB = ellcvau.formHandler.getError(`reward`);
this.setState('st9HsAn', cndY5xB);
if (cndY5xB) { 
let elHsjGB = eo('div','ATKf',null,`class`,`alert alert-danger`);
text(ellcvau.formHandler.getError(`reward`));
ec('div');
}ec('div');
let elO1oIS = eo('div',null,null,`class`,`form-group`);
let elh4XdM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.duration = this.value;}]},`value`,`${fval(component.formObject.duration)}`,`name`,`${(`duration`).toInputName()}`,`placeholder`,`${trans(`Duration in seconds`)}`,`class`,`form-control`,`type`,`number`,`id`,`duration`);
elh4XdM.value = fval(component.formObject.duration);
ec('div');
let elIGfzr = eo('div',null,null,`class`,`form-group`);
let cmpGKfy = this._lc('cF3hkZUCr', {parent:component,parentTop:flkModal,props:{checked:component.formObject.public},events:{onchange:function(e) {let $el = this; component.formObject.public = ! component.formObject.public}},boolAttrs:{checked:component.formObject.public},attrs:{name:`${(`public`).toInputName()}`,label:'Public puzzle',value:1},state:'sttS4Hd'});
ec('div');
let elWRvkg = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let el83Dr6 = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'sttS4Hd'});
}
                    this.isReadyToGo();
                }
        });