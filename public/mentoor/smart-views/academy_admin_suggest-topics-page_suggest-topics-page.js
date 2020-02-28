_Component({
                selector: 'suggest-topics-page',
                c: 'SuggestTopicsPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','statusesList','isValidForm','submitting'],
                children: {cRzkQ5H0I:'table-actions',cXsDcOneP:'admin-table',cGV89rOLl:'flk-modal'},
                render: function (component) {
                    let cmpYkhY = this._lc('cXsDcOneP', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,hideAddBtn:true,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let topic = component.items[index]; 
 let iiPDJE = 'WUAneLE' + index;
let elg218D = eo('tr','j3_rKBsKQcrO' + index+iiPDJE);
let elEfRLD = eo('td','k2bff'+iiPDJE);
text(topic.id);
ec('td');
let el5kzPk = eo('td','ENmff'+iiPDJE);
text(topic.track.name);
ec('td');
let elUhVJW = eo('td','_4fff'+iiPDJE);
text(topic.by.name);
ec('td');
let el60k51 = eo('td','QJ9ff'+iiPDJE);
text(topic.title);
ec('td');
let el2gGi0 = eo('td','JOsff'+iiPDJE);
text( topic.reward.format() );
ec('td');
let el3qVO9 = eo('td','Va4ff'+iiPDJE);
let cmpc1yo = this._lc('cRzkQ5H0I', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(topic)},ondelete:function(e) {let $el = this; component.deleteItem(topic.id, index)}},insideLoop:true,index:"" +iiPDJE});
ec('td');
ec('tr');
}
}});
let cndXxOj = component.openModal;
this.setState('st9oXci', cndXxOj);
if (cndXxOj) { 
let cmpcfUA = this._lc('cGV89rOLl', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elI7os1 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elI7os1.formHandler) {
                    window.cfrmdlr = elI7os1.formHandler = new FormHandler(elI7os1, component);
                } else {
                    window.cfrmdlr = elI7os1.formHandler;
                }
            let elrAGQv = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.track.id = this.value;}]},`value`,`${fval(component.formObject.track.id)}`,`name`,`${(`trackId`).toInputName()}`,`type`,`hidden`);
elrAGQv.value = fval(component.formObject.track.id);
let elXLnjw = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`);
elXLnjw.value = fval(component.formObject.slug);
let elyAIGh = eo('div',null,null,`class`,`form-group`);
let el4pINl = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value)},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elI7os1.formHandler.addError(`title`, 'required', trans('validation.required'));}return elI7os1.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el4pINl.value = fval(component.formObject.title);
let cndkuP2 = elI7os1.formHandler.getError(`title`);
this.setState('st3V4JT', cndkuP2);
if (cndkuP2) { 
let elrXEAL = eo('div','0Igf',null,`class`,`alert alert-danger`);
text(elI7os1.formHandler.getError(`title`));
ec('div');
}ec('div');
let elFZJK9 = eo('div',null,null,`class`,`form-group`);
let elVgONO = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.shortDescription = this.value;}]},`value`,`${fval(component.formObject.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Write a short description`)}`,`class`,`form-control`,`rows`,`4`);
elVgONO.value = fval(component.formObject.shortDescription);
ec('textarea');
ec('div');
let eljJpNI = eo('div',null,null,`class`,`form-group`);
let elOOizC = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.quest = this.value;}]},`value`,`${fval(component.formObject.quest)}`,`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest`)}`,`rows`,`6`,`required`,``,`class`,`form-control`);
elOOizC.value = fval(component.formObject.quest);
ec('textarea');
ec('div');
let elxXOrf = eo('div',null,null,`class`,`form-group`);
let elrqs_l = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elI7os1.formHandler.addError(`reward`, 'required', trans('validation.required'));}return elI7os1.formHandler.removeError(`reward`);}]},`value`,`${fval(component.formObject.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`Reward`)}`,`class`,`form-control`,`type`,`number`,`id`,`reward`);
elrqs_l.value = fval(component.formObject.reward);
let cndg4o2 = elI7os1.formHandler.getError(`reward`);
this.setState('stbBIv4', cndg4o2);
if (cndg4o2) { 
let elnCtOe = eo('div','pJNf',null,`class`,`alert alert-danger`);
text(elI7os1.formHandler.getError(`reward`));
ec('div');
}ec('div');
let elx2IyW = eo('div',null,null,`class`,`form-group`);
let elhJFl7 = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.status = this.value;}]},`value`,`${fval(component.formObject.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`);
elhJFl7.value = fval(component.formObject.status);
for (let i in component.statusesList) {
let type = component.statusesList[i]; 
 let iikhvv = 'zopdFtz' + i;
let elWIyzh = eo('option','nlnnfwgJyMmk' + i+iikhvv,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elWIyzh.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let elJz6FQ = eo('div',null,null,`class`,`row`);
let elUp80r = eo('div',null,null,`class`,`col-md-4`);
let elKTbyN = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elKTbyN.value = fval(component.formObject.sortOrder);
ec('div');
let elaNwAm = eo('div',null,null,`class`,`col-md-4`);
let el3n7nQ = eo('div',null,null,`class`,`form-check m-t-1`);
let elEm9jW = eo('div',null,null,`class`,`custom-control custom-checkbox`);
let elegyxU = ev('input',null,null, eventListeners, {onchange:[function(e) {var $el = this;component.formObject.display = ! component.formObject.display}]}, boolAttrs, {checked:true},`name`,`${(`display`).toInputName()}`,`type`,`checkbox`,`class`,`custom-control-input`,`value`,`1`,`id`,`display`);
let elNwkpe = eo('label',null,null,`class`,`custom-control-label`,`for`,`display`);
text(trans('display'));
ec('label');
ec('div');
ec('div');
ec('div');
ec('div');
let elLH2yd = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elnPrLW = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'st9oXci'});
}
                    this.isReadyToGo();
                }
        });