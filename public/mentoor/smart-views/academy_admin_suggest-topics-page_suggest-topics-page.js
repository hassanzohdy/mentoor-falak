_Component({
                selector: 'suggest-topics-page',
                c: 'SuggestTopicsPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','statusesList','isValidForm','submitting'],
                children: {c2N_0sUnJ:'table-actions',ccVwFHhtP:'admin-table',cMo_YYPcQ:'flk-modal'},
                render: function (component) {
                    let cmpXX6O = this._lc('ccVwFHhtP', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,hideAddBtn:true,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let topic = component.items[index]; 
 let iidMXp = 'a_tG2xH' + index;
let elNDIiW = eo('tr','Kko9k1pIjlRg' + index+iidMXp);
let elEriAt = eo('td','VNLff'+iidMXp);
text(topic.id);
ec('td');
let eliRjnE = eo('td','M4cff'+iidMXp);
text(topic.track.name);
ec('td');
let elqdSOa = eo('td','hQnff'+iidMXp);
text(topic.by.name);
ec('td');
let elAfCcV = eo('td','KH_ff'+iidMXp);
text(topic.title);
ec('td');
let elSk3ii = eo('td','Kmpff'+iidMXp);
text( topic.reward.format() );
ec('td');
let elanoVj = eo('td','5m_ff'+iidMXp);
let cmpHg2u = this._lc('c2N_0sUnJ', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(topic)},ondelete:function(e) {let $el = this; component.deleteItem(topic.id, index)}},insideLoop:true,index:"" +iidMXp});
ec('td');
ec('tr');
}
}});
let cndSmAC = component.openModal;
this.setState('stiAd8G', cndSmAC);
if (cndSmAC) { 
let cmpyiwv = this._lc('cMo_YYPcQ', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elUqz4q = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elUqz4q.formHandler) {
                    window.cfrmdlr = elUqz4q.formHandler = new FormHandler(elUqz4q, component);
                } else {
                    window.cfrmdlr = elUqz4q.formHandler;
                }
            let elMDZAK = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.track.id = this.value;}]},`value`,`${fval(component.formObject.track.id)}`,`name`,`${(`trackId`).toInputName()}`,`type`,`hidden`);
elMDZAK.value = fval(component.formObject.track.id);
let elvqiKl = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`);
elvqiKl.value = fval(component.formObject.slug);
let elLbBWX = eo('div',null,null,`class`,`form-group`);
let el6P_ID = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value)},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUqz4q.formHandler.addError(`title`, 'required', trans('validation.required'));}return elUqz4q.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el6P_ID.value = fval(component.formObject.title);
let cndHtLt = elUqz4q.formHandler.getError(`title`);
this.setState('stZEcIl', cndHtLt);
if (cndHtLt) { 
let elXlCtd = eo('div','tWyf',null,`class`,`alert alert-danger`);
text(elUqz4q.formHandler.getError(`title`));
ec('div');
}ec('div');
let elBK37h = eo('div',null,null,`class`,`form-group`);
let elD0CZE = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.shortDescription = this.value;}]},`value`,`${fval(component.formObject.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Write a short description`)}`,`class`,`form-control`,`rows`,`4`);
elD0CZE.value = fval(component.formObject.shortDescription);
ec('textarea');
ec('div');
let el6ra6i = eo('div',null,null,`class`,`form-group`);
let el6vDzx = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.quest = this.value;}]},`value`,`${fval(component.formObject.quest)}`,`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest`)}`,`rows`,`6`,`required`,``,`class`,`form-control`);
el6vDzx.value = fval(component.formObject.quest);
ec('textarea');
ec('div');
let elQq8Q4 = eo('div',null,null,`class`,`form-group`);
let elF026A = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUqz4q.formHandler.addError(`reward`, 'required', trans('validation.required'));}return elUqz4q.formHandler.removeError(`reward`);}]},`value`,`${fval(component.formObject.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`Reward`)}`,`class`,`form-control`,`type`,`number`,`id`,`reward`);
elF026A.value = fval(component.formObject.reward);
let cnduizo = elUqz4q.formHandler.getError(`reward`);
this.setState('st1bXgb', cnduizo);
if (cnduizo) { 
let elgQ2A4 = eo('div','A3Uf',null,`class`,`alert alert-danger`);
text(elUqz4q.formHandler.getError(`reward`));
ec('div');
}ec('div');
let elYg7I7 = eo('div',null,null,`class`,`form-group`);
let el0YbPI = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.status = this.value;}]},`value`,`${fval(component.formObject.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`);
el0YbPI.value = fval(component.formObject.status);
for (let i in component.statusesList) {
let type = component.statusesList[i]; 
 let iiDHBZ = 'izZBRgA' + i;
let elx7AcY = eo('option','2fvncX_ldqoO' + i+iiDHBZ,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elx7AcY.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let elOG2dz = eo('div',null,null,`class`,`row`);
let elVlVYy = eo('div',null,null,`class`,`col-md-4`);
let elxHk9S = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elxHk9S.value = fval(component.formObject.sortOrder);
ec('div');
let eleuzRy = eo('div',null,null,`class`,`col-md-4`);
let el5e_22 = eo('div',null,null,`class`,`form-check m-t-1`);
let elvBeEv = eo('div',null,null,`class`,`custom-control custom-checkbox`);
let elevoJq = ev('input',null,null, eventListeners, {onchange:[function(e) {var $el = this;component.formObject.display = ! component.formObject.display}]}, boolAttrs, {checked:true},`name`,`${(`display`).toInputName()}`,`type`,`checkbox`,`class`,`custom-control-input`,`value`,`1`,`id`,`display`);
let el_ARhp = eo('label',null,null,`class`,`custom-control-label`,`for`,`display`);
text(trans('display'));
ec('label');
ec('div');
ec('div');
ec('div');
ec('div');
let elhw4Y5 = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elmrHb8 = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stiAd8G'});
}
                    this.isReadyToGo();
                }
        });