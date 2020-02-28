_Component({
                selector: 'topics-page',
                c: 'TopicsPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','trackId','formObject','isValidForm','submitting'],
                children: {cItcTY6rY:'table-actions',cYFOfTeX3:'admin-table',c5l1JbgKv:'flk-checkbox',cbC02lN7w:'flk-checkbox',c596VL5Th:'flk-modal'},
                render: function (component) {
                    let cmpv2de = this._lc('cYFOfTeX3', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let topic = component.items[index]; 
 let iiYAlI = '44IMIac' + index;
let elIvQY2 = eo('tr','HiaBvf96oo9Q' + index+iiYAlI,null,`id`,`${ topic.id }`);
let elYxGqv = eo('td','8V5ff'+iiYAlI);
text(topic.id);
ec('td');
let elcvfC3 = eo('td','h7Hff'+iiYAlI);
text(topic.title);
ec('td');
let el3bjas = eo('td','RqSff'+iiYAlI);
text(Boolean(topic.public));
ec('td');
let elIUfZF = eo('td','xp6ff'+iiYAlI);
text( Number(topic.prize).format() );
ec('td');
let eluQceY = eo('td','a0qff'+iiYAlI);
text(topic.sortOrder);
ec('td');
let el4m7GZ = eo('td','nHKff'+iiYAlI);
let cmpi5Lr = this._lc('cItcTY6rY', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(topic)},ondelete:function(e) {let $el = this; component.deleteItem(topic.id, index)}},insideLoop:true,index:"" +iiYAlI});
ec('td');
ec('tr');
}
}});
let cndIP9p = component.openModal;
this.setState('stHl4lS', cndIP9p);
if (cndIP9p) { 
let cmpldzW = this._lc('c596VL5Th', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let eljlRR2 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! eljlRR2.formHandler) {
                    window.cfrmdlr = eljlRR2.formHandler = new FormHandler(eljlRR2, component);
                } else {
                    window.cfrmdlr = eljlRR2.formHandler;
                }
            let elICDvK = ev('input',null,null, eventListeners, {oninput:[function(e) {component.trackId = this.value;}]},`value`,`${fval(component.trackId)}`,`name`,`${(`trackId`).toInputName()}`,`type`,`hidden`);
elICDvK.value = fval(component.trackId);
let elKgkyZ = eo('div',null,null,`class`,`form-group`);
let elzRIq8 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!eljlRR2.formHandler.getError(`title`) })}`);
let el2nSvR = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let elO6rqp = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elZJjYX = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eljlRR2.formHandler.addError(`title`, 'required', trans('validation.required'));}return eljlRR2.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Track name`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elZJjYX.value = fval(component.formObject.title);
let cndBSZK = eljlRR2.formHandler.getError(`title`);
this.setState('stzbFhU', cndBSZK);
if (cndBSZK) { 
let elUQ6UT = eo('div','YlYf',null,`class`,`alert alert-danger`);
text(eljlRR2.formHandler.getError(`title`));
ec('div');
}ec('div');
ec('div');
let eluztie = eo('div',null,null,`class`,`form-group`);
let elFQkcf = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!eljlRR2.formHandler.getError(`slug`) })}`);
let elboBPT = eo('label',null,null,`for`,`slug`);
text(trans('Slug'));
let el0iBiV = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elY49tD = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eljlRR2.formHandler.addError(`slug`, 'required', trans('validation.required'));}return eljlRR2.formHandler.removeError(`slug`);}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`placeholder`,`${trans(`Url slug`)}`,`type`,`text`,`class`,`form-control`,`id`,`slug`);
elY49tD.value = fval(component.formObject.slug);
let cndQNUM = eljlRR2.formHandler.getError(`slug`);
this.setState('stzafOv', cndQNUM);
if (cndQNUM) { 
let elMl99c = eo('div','UFFf',null,`class`,`alert alert-danger`);
text(eljlRR2.formHandler.getError(`slug`));
ec('div');
}ec('div');
ec('div');
let elUymXF = eo('div',null,null,`class`,`form-group`);
let elMuVIu = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.shortDescription = this.value;}]},`value`,`${fval(component.formObject.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Write a short description`)}`,`class`,`form-control`,`rows`,`4`);
elMuVIu.value = fval(component.formObject.shortDescription);
ec('textarea');
ec('div');
let elC_D8R = eo('div',null,null,`class`,`form-group`);
let elUStEc = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.quest = this.value;}]},`value`,`${fval(component.formObject.quest)}`,`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest`)}`,`rows`,`6`,`error-msg-class`,`alert alert-danger`,`required`,``,`class`,`form-control`);
elUStEc.value = fval(component.formObject.quest);
ec('textarea');
ec('div');
let el4xH4F = eo('div',null,null,`class`,`form-group`);
let elwi8el = eo('div',null,null,`class`,`row`);
let elQJAxM = eo('div',null,null,`class`,`col-md-4`);
let el1irH7 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eljlRR2.formHandler.addError(`prize`, 'required', trans('validation.required'));}return eljlRR2.formHandler.removeError(`prize`);}]},`value`,`${fval(component.formObject.prize)}`,`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`Prize`)}`,`class`,`form-control`,`type`,`number`,`id`,`prize`);
el1irH7.value = fval(component.formObject.prize);
let cndPuxM = eljlRR2.formHandler.getError(`prize`);
this.setState('st22XzH', cndPuxM);
if (cndPuxM) { 
let el7Kf32 = eo('div','TCPf',null,`class`,`alert alert-danger`);
text(eljlRR2.formHandler.getError(`prize`));
ec('div');
}ec('div');
let elqYufx = eo('div',null,null,`class`,`col-md-4`);
let el8LqqL = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
el8LqqL.value = fval(component.formObject.sortOrder);
ec('div');
let elSCrWx = eo('div',null,null,`class`,`col-md-2`);
let cmpX8dD = this._lc('c5l1JbgKv', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},events:{onchange:function(e) {let $el = this; component.formObject.display = ! component.formObject.display}},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'display topic',value:1},state:'stHl4lS'});
ec('div');
let elyK_0r = eo('div',null,null,`class`,`col-md-2`);
let cmpW70C = this._lc('cbC02lN7w', {parent:component,parentTop:flkModal,props:{checked:component.formObject.public},events:{onchange:function(e) {let $el = this; component.formObject.public = ! component.formObject.public}},boolAttrs:{checked:component.formObject.public},attrs:{name:`${(`public`).toInputName()}`,label:'Public topic',value:1},state:'stHl4lS'});
ec('div');
ec('div');
ec('div');
let elBJQsO = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elHFZLP = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stHl4lS'});
}
                    this.isReadyToGo();
                }
        });