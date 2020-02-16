_Component({
                selector: 'topics-page',
                c: 'TopicsPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','trackId','formObject','isValidForm','submitting'],
                children: {crMzFF4tA:'table-actions',cJxk8tWYC:'admin-table',ch2u7FVI8:'flk-checkbox',c5f5gKdUx:'flk-checkbox',cn0S5_HSR:'flk-modal'},
                render: function (component) {
                    let cmpZl6Q = this._lc('cJxk8tWYC', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let topic = component.items[index]; 
 let iiYrTr = 'CINkktP' + index;
let elTezsB = eo('tr','O4aE56BvFZT4' + index+iiYrTr,null,`id`,`${ topic.id }`);
let elGgiH_ = eo('td','iKuff'+iiYrTr);
text(topic.id);
ec('td');
let el7rJHb = eo('td','lveff'+iiYrTr);
text(topic.title);
ec('td');
let elQtgjC = eo('td','icKff'+iiYrTr);
text(Boolean(topic.public));
ec('td');
let eleqsqb = eo('td','7UMff'+iiYrTr);
text( Number(topic.prize).format() );
ec('td');
let elI1bDW = eo('td','rtHff'+iiYrTr);
text(topic.sortOrder);
ec('td');
let elVcYQv = eo('td','2oBff'+iiYrTr);
let cmpnBxA = this._lc('crMzFF4tA', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(topic)},ondelete:function(e) {let $el = this; component.deleteItem(topic.id, index)}},insideLoop:true,index:"" +iiYrTr});
ec('td');
ec('tr');
}
}});
let cnd_1zn = component.openModal;
this.setState('stgmXK6', cnd_1zn);
if (cnd_1zn) { 
let cmpMegd = this._lc('cn0S5_HSR', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elqYsVa = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elqYsVa.formHandler) {
                    window.cfrmdlr = elqYsVa.formHandler = new FormHandler(elqYsVa, component);
                } else {
                    window.cfrmdlr = elqYsVa.formHandler;
                }
            let elQ1d0m = ev('input',null,null, eventListeners, {oninput:[function(e) {component.trackId = this.value;}]},`value`,`${fval(component.trackId)}`,`name`,`${(`trackId`).toInputName()}`,`type`,`hidden`);
elQ1d0m.value = fval(component.trackId);
let elviaMv = eo('div',null,null,`class`,`form-group`);
let el8YAXi = eo('div',null,null,`class`,`form-group`);
el8YAXi.cls = {'group-error': !!elqYsVa.formHandler.getError(`title`) };

            for (let className in el8YAXi.cls) {
                el8YAXi.classList.toggle(className, el8YAXi.cls[className]);
            }  
            let eliT6OL = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let elindR6 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elnsVPb = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqYsVa.formHandler.addError(`title`, 'required', trans('validation.required'));}return elqYsVa.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Track name`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elnsVPb.value = fval(component.formObject.title);
let cndzhKN = elqYsVa.formHandler.getError(`title`);
this.setState('stNH_FC', cndzhKN);
if (cndzhKN) { 
let elY8Oni = eo('div','CCFf',null,`class`,`alert alert-danger`);
text(elqYsVa.formHandler.getError(`title`));
ec('div');
}ec('div');
ec('div');
let elIO4Ys = eo('div',null,null,`class`,`form-group`);
let elA4kUZ = eo('div',null,null,`class`,`form-group`);
elA4kUZ.cls = {'group-error': !!elqYsVa.formHandler.getError(`slug`) };

            for (let className in elA4kUZ.cls) {
                elA4kUZ.classList.toggle(className, elA4kUZ.cls[className]);
            }  
            let elI_Z53 = eo('label',null,null,`for`,`slug`);
text(trans('Slug'));
let elLyqI2 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elblCiU = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqYsVa.formHandler.addError(`slug`, 'required', trans('validation.required'));}return elqYsVa.formHandler.removeError(`slug`);}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`placeholder`,`${trans(`Url slug`)}`,`type`,`text`,`class`,`form-control`,`id`,`slug`);
elblCiU.value = fval(component.formObject.slug);
let cndXntV = elqYsVa.formHandler.getError(`slug`);
this.setState('stEYb5A', cndXntV);
if (cndXntV) { 
let elWD2WG = eo('div','wiwf',null,`class`,`alert alert-danger`);
text(elqYsVa.formHandler.getError(`slug`));
ec('div');
}ec('div');
ec('div');
let elH_izY = eo('div',null,null,`class`,`form-group`);
let elCOoZw = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.shortDescription = this.value;}]},`value`,`${fval(component.formObject.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Write a short description`)}`,`class`,`form-control`,`rows`,`4`);
elCOoZw.value = fval(component.formObject.shortDescription);
ec('textarea');
ec('div');
let elbkyG5 = eo('div',null,null,`class`,`form-group`);
let elQPsPS = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.quest = this.value;}]},`value`,`${fval(component.formObject.quest)}`,`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest`)}`,`rows`,`6`,`error-msg-class`,`alert alert-danger`,`required`,``,`class`,`form-control`);
elQPsPS.value = fval(component.formObject.quest);
ec('textarea');
ec('div');
let elgWhjY = eo('div',null,null,`class`,`form-group`);
let elQZcre = eo('div',null,null,`class`,`row`);
let el6gHHk = eo('div',null,null,`class`,`col-md-4`);
let elZvTpl = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqYsVa.formHandler.addError(`prize`, 'required', trans('validation.required'));}return elqYsVa.formHandler.removeError(`prize`);}]},`value`,`${fval(component.formObject.prize)}`,`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`Prize`)}`,`class`,`form-control`,`type`,`number`,`id`,`prize`);
elZvTpl.value = fval(component.formObject.prize);
let cndoZVP = elqYsVa.formHandler.getError(`prize`);
this.setState('stuStuu', cndoZVP);
if (cndoZVP) { 
let elm0J5s = eo('div','4iRf',null,`class`,`alert alert-danger`);
text(elqYsVa.formHandler.getError(`prize`));
ec('div');
}ec('div');
let el3Cq9W = eo('div',null,null,`class`,`col-md-4`);
let el1Mssw = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
el1Mssw.value = fval(component.formObject.sortOrder);
ec('div');
let elH6SdD = eo('div',null,null,`class`,`col-md-2`);
let cmpKEMi = this._lc('ch2u7FVI8', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},events:{onchange:function(e) {let $el = this; component.formObject.display = ! component.formObject.display}},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'display topic',value:1},state:'stgmXK6'});
ec('div');
let elHGago = eo('div',null,null,`class`,`col-md-2`);
let cmpEl5r = this._lc('c5f5gKdUx', {parent:component,parentTop:flkModal,props:{checked:component.formObject.public},events:{onchange:function(e) {let $el = this; component.formObject.public = ! component.formObject.public}},boolAttrs:{checked:component.formObject.public},attrs:{name:`${(`public`).toInputName()}`,label:'Public topic',value:1},state:'stgmXK6'});
ec('div');
ec('div');
ec('div');
let elIeF2J = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elGXU72 = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stgmXK6'});
}
                    this.isReadyToGo();
                }
        });