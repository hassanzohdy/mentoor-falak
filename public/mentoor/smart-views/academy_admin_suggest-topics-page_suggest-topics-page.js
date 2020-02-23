_Component({
                selector: 'suggest-topics-page',
                c: 'SuggestTopicsPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','statusesList','isValidForm','submitting'],
                children: {cPZMQbnjM:'table-actions',czMJnJTTv:'admin-table',cJqHzN5ic:'flk-modal'},
                render: function (component) {
                    let cmpYFOz = this._lc('czMJnJTTv', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,hideAddBtn:true,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let topic = component.items[index]; 
 let iiNw2o = '7_zQKa8' + index;
let eltanBs = eo('tr','WqMr41x7sWMa' + index+iiNw2o);
let el9x1kq = eo('td','qZhff'+iiNw2o);
text(topic.id);
ec('td');
let elq8q1y = eo('td','5nFff'+iiNw2o);
text(topic.track.name);
ec('td');
let el8BWym = eo('td','ST4ff'+iiNw2o);
text(topic.by.name);
ec('td');
let elzhD77 = eo('td','IMhff'+iiNw2o);
text(topic.title);
ec('td');
let elGjr0T = eo('td','taxff'+iiNw2o);
text( topic.reward.format() );
ec('td');
let el7aJ6b = eo('td','GABff'+iiNw2o);
let cmpYj6j = this._lc('cPZMQbnjM', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(topic)},ondelete:function(e) {let $el = this; component.deleteItem(topic.id, index)}},insideLoop:true,index:"" +iiNw2o});
ec('td');
ec('tr');
}
}});
let cndENX3 = component.openModal;
this.setState('stAFX74', cndENX3);
if (cndENX3) { 
let cmpXqrO = this._lc('cJqHzN5ic', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let eliutS5 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! eliutS5.formHandler) {
                    window.cfrmdlr = eliutS5.formHandler = new FormHandler(eliutS5, component);
                } else {
                    window.cfrmdlr = eliutS5.formHandler;
                }
            let el3R3td = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.track.id = this.value;}]},`value`,`${fval(component.formObject.track.id)}`,`name`,`${(`trackId`).toInputName()}`,`type`,`hidden`);
el3R3td.value = fval(component.formObject.track.id);
let elM6_ZL = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`);
elM6_ZL.value = fval(component.formObject.slug);
let elYMQfR = eo('div',null,null,`class`,`form-group`);
let el7aujV = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value)},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eliutS5.formHandler.addError(`title`, 'required', trans('validation.required'));}return eliutS5.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el7aujV.value = fval(component.formObject.title);
let cndALq1 = eliutS5.formHandler.getError(`title`);
this.setState('stlw9rd', cndALq1);
if (cndALq1) { 
let elbRrfB = eo('div','LTkf',null,`class`,`alert alert-danger`);
text(eliutS5.formHandler.getError(`title`));
ec('div');
}ec('div');
let elhtC__ = eo('div',null,null,`class`,`form-group`);
let elspE2Z = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.shortDescription = this.value;}]},`value`,`${fval(component.formObject.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Write a short description`)}`,`class`,`form-control`,`rows`,`4`);
elspE2Z.value = fval(component.formObject.shortDescription);
ec('textarea');
ec('div');
let elKW054 = eo('div',null,null,`class`,`form-group`);
let elH2RiU = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.quest = this.value;}]},`value`,`${fval(component.formObject.quest)}`,`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest`)}`,`rows`,`6`,`required`,``,`class`,`form-control`);
elH2RiU.value = fval(component.formObject.quest);
ec('textarea');
ec('div');
let elKrRlh = eo('div',null,null,`class`,`form-group`);
let elMsut2 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eliutS5.formHandler.addError(`reward`, 'required', trans('validation.required'));}return eliutS5.formHandler.removeError(`reward`);}]},`value`,`${fval(component.formObject.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`Reward`)}`,`class`,`form-control`,`type`,`number`,`id`,`reward`);
elMsut2.value = fval(component.formObject.reward);
let cnd3Vic = eliutS5.formHandler.getError(`reward`);
this.setState('stVimMY', cnd3Vic);
if (cnd3Vic) { 
let elYmu39 = eo('div','3Xaf',null,`class`,`alert alert-danger`);
text(eliutS5.formHandler.getError(`reward`));
ec('div');
}ec('div');
let elsdfuo = eo('div',null,null,`class`,`form-group`);
let elQgjnt = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.status = this.value;}]},`value`,`${fval(component.formObject.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`);
elQgjnt.value = fval(component.formObject.status);
for (let i in component.statusesList) {
let type = component.statusesList[i]; 
 let ii0tiC = '5AtfkF1' + i;
let elqjwDP = eo('option','mH7F3l8pAwle' + i+ii0tiC,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elqjwDP.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let elTpQdU = eo('div',null,null,`class`,`row`);
let elFNug8 = eo('div',null,null,`class`,`col-md-4`);
let elqtTSC = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elqtTSC.value = fval(component.formObject.sortOrder);
ec('div');
let elQuobZ = eo('div',null,null,`class`,`col-md-4`);
let elXWAOE = eo('div',null,null,`class`,`form-check m-t-1`);
let el3Nx1N = eo('div',null,null,`class`,`custom-control custom-checkbox`);
let elyLy9Q = ev('input',null,null, eventListeners, {onchange:[function(e) {var $el = this;component.formObject.display = ! component.formObject.display}]}, boolAttrs, {checked:true},`name`,`${(`display`).toInputName()}`,`type`,`checkbox`,`class`,`custom-control-input`,`value`,`1`,`id`,`display`);
let el2FcQ_ = eo('label',null,null,`class`,`custom-control-label`,`for`,`display`);
text(trans('display'));
ec('label');
ec('div');
ec('div');
ec('div');
ec('div');
let elaFEVe = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let el7zQqQ = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stAFX74'});
}
                    this.isReadyToGo();
                }
        });