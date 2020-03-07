_Component({
                selector: 'suggest-topics-page',
                c: 'SuggestTopicsPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','statusesList','isValidForm','submitting'],
                children: {cfRzHC0Ii:'table-actions',cxIaEaHGE:'admin-table',cp3zif8KY:'flk-modal'},
                render: function (component) {
                    let cmpf9Xp = this._lc('cxIaEaHGE', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,hideAddBtn:true,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let topic = component.items[index]; 
 let iiVNXX = 'SQRbrFU' + index;
let elAY1x1 = eo('tr','XY6y5grGvPcx' + index+iiVNXX);
let elLxAxn = eo('td','XdSff'+iiVNXX);
text(topic.id);
ec('td');
let elIkDij = eo('td','Pujff'+iiVNXX);
text(topic.track.name);
ec('td');
let elzEKMO = eo('td','BYuff'+iiVNXX);
text(topic.by.name);
ec('td');
let elw1yso = eo('td','Hp_ff'+iiVNXX);
text(topic.title);
ec('td');
let elUamYc = eo('td','9hEff'+iiVNXX);
text( topic.reward.format() );
ec('td');
let el6yHJ3 = eo('td','A1Jff'+iiVNXX);
let cmptJ1x = this._lc('cfRzHC0Ii', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(topic)},ondelete:function(e) {let $el = this; component.deleteItem(topic.id, index)}},insideLoop:true,index:"" +iiVNXX});
ec('td');
ec('tr');
}
}});
let cndpljD = component.openModal;
this.setState('stEz_29', cndpljD);
if (cndpljD) { 
let cmpb0S8 = this._lc('cp3zif8KY', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elHiNN7 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elHiNN7.formHandler) {
                    window.cfrmdlr = elHiNN7.formHandler = new FormHandler(elHiNN7, component);
                } else {
                    window.cfrmdlr = elHiNN7.formHandler;
                }
            let elAaJhf = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.track.id = this.value;}]},`value`,`${fval(component.formObject.track.id)}`,`name`,`${(`trackId`).toInputName()}`,`type`,`hidden`);
elAaJhf.value = fval(component.formObject.track.id);
let elRSBSg = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`);
elRSBSg.value = fval(component.formObject.slug);
let elHkTEo = eo('div',null,null,`class`,`form-group`);
let elc7MrU = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value)},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elHiNN7.formHandler.addError(`title`, 'required', trans('validation.required'));}return elHiNN7.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elc7MrU.value = fval(component.formObject.title);
let cndkGQ5 = elHiNN7.formHandler.getError(`title`);
this.setState('stYjOqP', cndkGQ5);
if (cndkGQ5) { 
let elG0jVT = eo('div','0adf',null,`class`,`alert alert-danger`);
text(elHiNN7.formHandler.getError(`title`));
ec('div');
}ec('div');
let elaK9yW = eo('div',null,null,`class`,`form-group`);
let elKVd0q = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.shortDescription = this.value;}]},`value`,`${fval(component.formObject.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Write a short description`)}`,`class`,`form-control`,`rows`,`4`);
elKVd0q.value = fval(component.formObject.shortDescription);
ec('textarea');
ec('div');
let elzsGBZ = eo('div',null,null,`class`,`form-group`);
let elnZV9t = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.quest = this.value;}]},`value`,`${fval(component.formObject.quest)}`,`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest`)}`,`rows`,`6`,`required`,``,`class`,`form-control`);
elnZV9t.value = fval(component.formObject.quest);
ec('textarea');
ec('div');
let elqwWpd = eo('div',null,null,`class`,`form-group`);
let elYKkTh = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elHiNN7.formHandler.addError(`reward`, 'required', trans('validation.required'));}return elHiNN7.formHandler.removeError(`reward`);}]},`value`,`${fval(component.formObject.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`Reward`)}`,`class`,`form-control`,`type`,`number`,`id`,`reward`);
elYKkTh.value = fval(component.formObject.reward);
let cndNSvA = elHiNN7.formHandler.getError(`reward`);
this.setState('starbFR', cndNSvA);
if (cndNSvA) { 
let elHLaWc = eo('div','p6Ef',null,`class`,`alert alert-danger`);
text(elHiNN7.formHandler.getError(`reward`));
ec('div');
}ec('div');
let elcGJjN = eo('div',null,null,`class`,`form-group`);
let eldVcvc = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.status = this.value;}]},`value`,`${fval(component.formObject.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`);
eldVcvc.value = fval(component.formObject.status);
for (let i in component.statusesList) {
let type = component.statusesList[i]; 
 let iiMenK = 'JDl0gnG' + i;
let elklnPX = eo('option','AyVNGYzjCzoX' + i+iiMenK,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elklnPX.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let elTMnqs = eo('div',null,null,`class`,`row`);
let elcnROq = eo('div',null,null,`class`,`col-md-4`);
let elwstKU = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elwstKU.value = fval(component.formObject.sortOrder);
ec('div');
let el41ai1 = eo('div',null,null,`class`,`col-md-4`);
let elAep50 = eo('div',null,null,`class`,`form-check m-t-1`);
let eljgQBG = eo('div',null,null,`class`,`custom-control custom-checkbox`);
let elPSiiA = ev('input',null,null, eventListeners, {onchange:[function(e) {var $el = this;component.formObject.display = ! component.formObject.display}]}, boolAttrs, {checked:true},`name`,`${(`display`).toInputName()}`,`type`,`checkbox`,`class`,`custom-control-input`,`value`,`1`,`id`,`display`);
let elD4tJu = eo('label',null,null,`class`,`custom-control-label`,`for`,`display`);
text(trans('display'));
ec('label');
ec('div');
ec('div');
ec('div');
ec('div');
let elnMHqc = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elgRl53 = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stEz_29'});
}
                    this.isReadyToGo();
                }
        });