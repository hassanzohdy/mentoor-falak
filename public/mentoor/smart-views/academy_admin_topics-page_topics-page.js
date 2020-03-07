_Component({
                selector: 'topics-page',
                c: 'TopicsPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','trackId','formObject','isValidForm','submitting'],
                children: {cgxPI5qoY:'table-actions',cgf5OXni7:'admin-table',c6Tt4WqMa:'flk-checkbox',cJGxRL_lX:'flk-checkbox',c4hlimql6:'flk-modal'},
                render: function (component) {
                    let cmpOAOZ = this._lc('cgf5OXni7', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let topic = component.items[index]; 
 let iiknnY = 'Z24MtNP' + index;
let elNCucp = eo('tr','mTRDeYOr0BCj' + index+iiknnY,null,`id`,`${ topic.id }`);
let elSnWR0 = eo('td','pPjff'+iiknnY);
text(topic.id);
ec('td');
let el3rp2v = eo('td','GgAff'+iiknnY);
text(topic.title);
ec('td');
let elpV3JT = eo('td','Xo4ff'+iiknnY);
text(Boolean(topic.public));
ec('td');
let elU60vE = eo('td','5J4ff'+iiknnY);
text( Number(topic.prize).format() );
ec('td');
let elzsxgb = eo('td','bluff'+iiknnY);
text(topic.sortOrder);
ec('td');
let elU330Z = eo('td','HyLff'+iiknnY);
let cmpvT2V = this._lc('cgxPI5qoY', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(topic)},ondelete:function(e) {let $el = this; component.deleteItem(topic.id, index)}},insideLoop:true,index:"" +iiknnY});
ec('td');
ec('tr');
}
}});
let cndICWp = component.openModal;
this.setState('stDGGQz', cndICWp);
if (cndICWp) { 
let cmp1rTm = this._lc('c4hlimql6', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elHapy6 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elHapy6.formHandler) {
                    window.cfrmdlr = elHapy6.formHandler = new FormHandler(elHapy6, component);
                } else {
                    window.cfrmdlr = elHapy6.formHandler;
                }
            let el8C2yg = ev('input',null,null, eventListeners, {oninput:[function(e) {component.trackId = this.value;}]},`value`,`${fval(component.trackId)}`,`name`,`${(`trackId`).toInputName()}`,`type`,`hidden`);
el8C2yg.value = fval(component.trackId);
let elNE5w0 = eo('div',null,null,`class`,`form-group`);
let elcAAet = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elHapy6.formHandler.getError(`title`) })}`);
let elld_0p = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let elMrqcl = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elcRUc1 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elHapy6.formHandler.addError(`title`, 'required', trans('validation.required'));}return elHapy6.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Track name`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elcRUc1.value = fval(component.formObject.title);
let cndSWLR = elHapy6.formHandler.getError(`title`);
this.setState('st3PG6E', cndSWLR);
if (cndSWLR) { 
let elawzC6 = eo('div','Pimf',null,`class`,`alert alert-danger`);
text(elHapy6.formHandler.getError(`title`));
ec('div');
}ec('div');
ec('div');
let elE4DQ5 = eo('div',null,null,`class`,`form-group`);
let elRlClb = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elHapy6.formHandler.getError(`slug`) })}`);
let elaU3nf = eo('label',null,null,`for`,`slug`);
text(trans('Slug'));
let elMdaTw = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elTVpZN = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elHapy6.formHandler.addError(`slug`, 'required', trans('validation.required'));}return elHapy6.formHandler.removeError(`slug`);}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`placeholder`,`${trans(`Url slug`)}`,`type`,`text`,`class`,`form-control`,`id`,`slug`);
elTVpZN.value = fval(component.formObject.slug);
let cndVxYp = elHapy6.formHandler.getError(`slug`);
this.setState('stuL5lb', cndVxYp);
if (cndVxYp) { 
let elgZA5S = eo('div','9izf',null,`class`,`alert alert-danger`);
text(elHapy6.formHandler.getError(`slug`));
ec('div');
}ec('div');
ec('div');
let el7hGTb = eo('div',null,null,`class`,`form-group`);
let elGgpik = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.shortDescription = this.value;}]},`value`,`${fval(component.formObject.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Write a short description`)}`,`class`,`form-control`,`rows`,`4`);
elGgpik.value = fval(component.formObject.shortDescription);
ec('textarea');
ec('div');
let el3V1Sx = eo('div',null,null,`class`,`form-group`);
let elYYwtF = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.quest = this.value;}]},`value`,`${fval(component.formObject.quest)}`,`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest`)}`,`rows`,`6`,`error-msg-class`,`alert alert-danger`,`required`,``,`class`,`form-control`);
elYYwtF.value = fval(component.formObject.quest);
ec('textarea');
ec('div');
let elucFHN = eo('div',null,null,`class`,`form-group`);
let elxM2XT = eo('div',null,null,`class`,`row`);
let elFag04 = eo('div',null,null,`class`,`col-md-4`);
let el2W4rg = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elHapy6.formHandler.addError(`prize`, 'required', trans('validation.required'));}return elHapy6.formHandler.removeError(`prize`);}]},`value`,`${fval(component.formObject.prize)}`,`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`Prize`)}`,`class`,`form-control`,`type`,`number`,`id`,`prize`);
el2W4rg.value = fval(component.formObject.prize);
let cnd7ouU = elHapy6.formHandler.getError(`prize`);
this.setState('stuxpuA', cnd7ouU);
if (cnd7ouU) { 
let el6D6Lp = eo('div','fuvf',null,`class`,`alert alert-danger`);
text(elHapy6.formHandler.getError(`prize`));
ec('div');
}ec('div');
let el_Qev6 = eo('div',null,null,`class`,`col-md-4`);
let el7Fzhs = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
el7Fzhs.value = fval(component.formObject.sortOrder);
ec('div');
let elrHe8m = eo('div',null,null,`class`,`col-md-2`);
let cmpkcM0 = this._lc('c6Tt4WqMa', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},events:{onchange:function(e) {let $el = this; component.formObject.display = ! component.formObject.display}},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'display topic',value:1},state:'stDGGQz'});
ec('div');
let elZ52J0 = eo('div',null,null,`class`,`col-md-2`);
let cmpbAiP = this._lc('cJGxRL_lX', {parent:component,parentTop:flkModal,props:{checked:component.formObject.public},events:{onchange:function(e) {let $el = this; component.formObject.public = ! component.formObject.public}},boolAttrs:{checked:component.formObject.public},attrs:{name:`${(`public`).toInputName()}`,label:'Public topic',value:1},state:'stDGGQz'});
ec('div');
ec('div');
ec('div');
let el5QO9M = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let el5bCfq = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stDGGQz'});
}
                    this.isReadyToGo();
                }
        });