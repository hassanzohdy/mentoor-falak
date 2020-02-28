_Component({
                selector: 'puzzles-page',
                c: 'EinsteinAdminPuzzles', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','categoryId','formObject','isValidForm','submitting'],
                children: {cq5eikaNl:'table-actions',co7smMezj:'admin-table',cb04TO18q:'flk-checkbox',cBwho6M9l:'flk-modal'},
                render: function (component) {
                    let cmpiNtS = this._lc('co7smMezj', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iiSBuK = 'M9bdY4g' + index;
let elmdJIR = eo('tr','G98TxD7tHRlA' + index+iiSBuK);
let elzFfJ7 = eo('td','z5cff'+iiSBuK);
text(record.id);
ec('td');
let elWV2Bj = eo('td','QOOff'+iiSBuK);
text(record.title);
ec('td');
let elj_AJz = eo('td','aC8ff'+iiSBuK);
text(record.level);
ec('td');
let elJMFRz = eo('td','gvHff'+iiSBuK);
text(Boolean(record.public));
ec('td');
let el6aDLY = eo('td','7g4ff'+iiSBuK);
text( Number(record.reward).format() );
ec('td');
let elP1dQI = eo('td','kGEff'+iiSBuK);
text(record.duration);
ec('td');
let elDe5Lk = eo('td','Yylff'+iiSBuK);
let cmpgkWB = this._lc('cq5eikaNl', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iiSBuK});
ec('td');
ec('tr');
}
}});
let cndps5F = component.openModal;
this.setState('st6rMhL', cndps5F);
if (cndps5F) { 
let cmpz2yk = this._lc('cBwho6M9l', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elFshxq = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elFshxq.formHandler) {
                    window.cfrmdlr = elFshxq.formHandler = new FormHandler(elFshxq, component);
                } else {
                    window.cfrmdlr = elFshxq.formHandler;
                }
            let elpGcCt = ev('input',null,null, eventListeners, {oninput:[function(e) {component.categoryId = this.value;}]},`value`,`${fval(component.categoryId)}`,`name`,`${(`categoryId`).toInputName()}`,`type`,`hidden`);
elpGcCt.value = fval(component.categoryId);
let elTJ5k6 = eo('div',null,null,`class`,`form-group`);
let elKESFH = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFshxq.formHandler.addError(`title`, 'required', trans('validation.required'));}return elFshxq.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elKESFH.value = fval(component.formObject.title);
let cndOfEc = elFshxq.formHandler.getError(`title`);
this.setState('stHan16', cndOfEc);
if (cndOfEc) { 
let elgttCf = eo('div','cppf',null,`class`,`alert alert-danger`);
text(elFshxq.formHandler.getError(`title`));
ec('div');
}ec('div');
let elh2lrc = eo('div',null,null,`class`,`form-group`);
let el2a5E0 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.quest = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFshxq.formHandler.addError(`quest`, 'required', trans('validation.required'));}return elFshxq.formHandler.removeError(`quest`);}]},`value`,`${fval(component.formObject.quest)}`,`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`quest`);
el2a5E0.value = fval(component.formObject.quest);
ec('textarea');
let cnd7hsi = elFshxq.formHandler.getError(`quest`);
this.setState('stOQOPA', cnd7hsi);
if (cnd7hsi) { 
let el1BVNJ = eo('div','e2Ff',null,`class`,`alert alert-danger`);
text(elFshxq.formHandler.getError(`quest`));
ec('div');
}ec('div');
let ellLWFw = eo('div',null,null,`class`,`form-group`);
let elSef6D = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.level = this.value;}]},`value`,`${fval(component.formObject.level)}`,`name`,`${(`level`).toInputName()}`,`placeholder`,`${trans(`level`)}`,`type`,`number`,`class`,`form-control`,`id`,`level`);
elSef6D.value = fval(component.formObject.level);
ec('div');
let elXptaH = eo('div',null,null,`class`,`form-group`);
let elRuTfO = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFshxq.formHandler.addError(`reward`, 'required', trans('validation.required'));}return elFshxq.formHandler.removeError(`reward`);}]},`value`,`${fval(component.formObject.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`class`,`form-control`,`type`,`number`,`id`,`reward`);
elRuTfO.value = fval(component.formObject.reward);
let cndYFN1 = elFshxq.formHandler.getError(`reward`);
this.setState('st_4Le4', cndYFN1);
if (cndYFN1) { 
let elZEOhR = eo('div','A6zf',null,`class`,`alert alert-danger`);
text(elFshxq.formHandler.getError(`reward`));
ec('div');
}ec('div');
let eljY2PA = eo('div',null,null,`class`,`form-group`);
let el7qmii = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.duration = this.value;}]},`value`,`${fval(component.formObject.duration)}`,`name`,`${(`duration`).toInputName()}`,`placeholder`,`${trans(`Duration in seconds`)}`,`class`,`form-control`,`type`,`number`,`id`,`duration`);
el7qmii.value = fval(component.formObject.duration);
ec('div');
let elovzDR = eo('div',null,null,`class`,`form-group`);
let cmpmdsO = this._lc('cb04TO18q', {parent:component,parentTop:flkModal,props:{checked:component.formObject.public},events:{onchange:function(e) {let $el = this; component.formObject.public = ! component.formObject.public}},boolAttrs:{checked:component.formObject.public},attrs:{name:`${(`public`).toInputName()}`,label:'Public puzzle',value:1},state:'st6rMhL'});
ec('div');
let elySxEt = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elJwAOu = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'st6rMhL'});
}
                    this.isReadyToGo();
                }
        });