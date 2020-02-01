_Component({
                selector: 'topics-page',
                c: 'TopicsPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','trackId','formObject','isValidForm','submitting'],
                children: {cN6DKLLXY:'table-actions',c0qijpKHB:'admin-table',cKXvJHnPb:'flk-checkbox',cBAfgzetr:'flk-checkbox',c8EPSzBED:'flk-modal'},
                render: function (component) {
                    let cmptCGY = this._lc('c0qijpKHB', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let topic = component.items[index]; 
 let iiMrYq = 'omg7FLU' + index;
let elVXGzU = eo('tr','dBmNVwGwOyw2' + index+iiMrYq,null,`id`,`${ topic.id }`);
let el5iwqJ = eo('td','IdMff'+iiMrYq);
text(topic.id);
ec('td');
let elueKBK = eo('td','HNiff'+iiMrYq);
text(topic.title);
ec('td');
let el4nxIO = eo('td','X7Qff'+iiMrYq);
text(Boolean(topic.public));
ec('td');
let elA6puC = eo('td','Hhmff'+iiMrYq);
text( Number(topic.prize).format() );
ec('td');
let elIIMSn = eo('td','ErCff'+iiMrYq);
text(topic.sortOrder);
ec('td');
let elPOhqK = eo('td','dWFff'+iiMrYq);
let cmp0zci = this._lc('cN6DKLLXY', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(topic)},ondelete:function(e) {let $el = this; component.deleteItem(topic.id, index)}},insideLoop:true,index:"" +iiMrYq});
ec('td');
ec('tr');
}
}});
let cndIxSP = component.openModal;
this.setState('stQaU6T', cndIxSP);
if (cndIxSP) { 
let cmpTstp = this._lc('c8EPSzBED', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elsX79w = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elsX79w.formHandler) {
                    window.cfrmdlr = elsX79w.formHandler = new FormHandler(elsX79w, component);
                } else {
                    window.cfrmdlr = elsX79w.formHandler;
                }
            let elf_Dng = ev('input',null,null, eventListeners, {oninput:[function(e) {component.trackId = this.value;}]},`value`,`${fval(component.trackId)}`,`name`,`${(`trackId`).toInputName()}`,`type`,`hidden`);
elf_Dng.value = fval(component.trackId);
let elCPfNU = eo('div',null,null,`class`,`form-group`);
let elkhBE8 = eo('div',null,null,`class`,`form-group`);
elkhBE8.cls = {'group-error': !!elsX79w.formHandler.getError(`title`) };

            for (let className in elkhBE8.cls) {
                elkhBE8.classList.toggle(className, elkhBE8.cls[className]);
            }  
            let elfyVb4 = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let elHO3h6 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el6RxJt = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elsX79w.formHandler.addError(`title`, 'required', trans('validation.required'));}return elsX79w.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Track name`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el6RxJt.value = fval(component.formObject.title);
let cndBUeq = elsX79w.formHandler.getError(`title`);
this.setState('stHpzGZ', cndBUeq);
if (cndBUeq) { 
let elj4Gbs = eo('div','F7pf',null,`class`,`alert alert-danger`);
text(elsX79w.formHandler.getError(`title`));
ec('div');
}ec('div');
ec('div');
let elmkcpG = eo('div',null,null,`class`,`form-group`);
let eldbD80 = eo('div',null,null,`class`,`form-group`);
eldbD80.cls = {'group-error': !!elsX79w.formHandler.getError(`slug`) };

            for (let className in eldbD80.cls) {
                eldbD80.classList.toggle(className, eldbD80.cls[className]);
            }  
            let elCcaaP = eo('label',null,null,`for`,`slug`);
text(trans('Slug'));
let elLlalm = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elUxuzb = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elsX79w.formHandler.addError(`slug`, 'required', trans('validation.required'));}return elsX79w.formHandler.removeError(`slug`);}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`placeholder`,`${trans(`Url slug`)}`,`type`,`text`,`class`,`form-control`,`id`,`slug`);
elUxuzb.value = fval(component.formObject.slug);
let cndKxCe = elsX79w.formHandler.getError(`slug`);
this.setState('st7jyz8', cndKxCe);
if (cndKxCe) { 
let elh5TkM = eo('div','VLzf',null,`class`,`alert alert-danger`);
text(elsX79w.formHandler.getError(`slug`));
ec('div');
}ec('div');
ec('div');
let elVekcX = eo('div',null,null,`class`,`form-group`);
let elVpDrh = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.shortDescription = this.value;}]},`value`,`${fval(component.formObject.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Write a short description`)}`,`class`,`form-control`,`rows`,`4`);
elVpDrh.value = fval(component.formObject.shortDescription);
ec('textarea');
ec('div');
let elDAfzH = eo('div',null,null,`class`,`form-group`);
let elyjIe4 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.quest = this.value;}]},`value`,`${fval(component.formObject.quest)}`,`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest`)}`,`rows`,`6`,`error-msg-class`,`alert alert-danger`,`required`,``,`class`,`form-control`);
elyjIe4.value = fval(component.formObject.quest);
ec('textarea');
ec('div');
let elhVdy6 = eo('div',null,null,`class`,`form-group`);
let elyc5EU = eo('div',null,null,`class`,`row`);
let elIWxat = eo('div',null,null,`class`,`col-md-4`);
let elDQ861 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elsX79w.formHandler.addError(`prize`, 'required', trans('validation.required'));}return elsX79w.formHandler.removeError(`prize`);}]},`value`,`${fval(component.formObject.prize)}`,`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`Prize`)}`,`class`,`form-control`,`type`,`number`,`id`,`prize`);
elDQ861.value = fval(component.formObject.prize);
let cnd9Ea6 = elsX79w.formHandler.getError(`prize`);
this.setState('stCwziU', cnd9Ea6);
if (cnd9Ea6) { 
let el2ASoJ = eo('div','hm6f',null,`class`,`alert alert-danger`);
text(elsX79w.formHandler.getError(`prize`));
ec('div');
}ec('div');
let elNx5Yi = eo('div',null,null,`class`,`col-md-4`);
let eleroZe = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
eleroZe.value = fval(component.formObject.sortOrder);
ec('div');
let elNk64D = eo('div',null,null,`class`,`col-md-2`);
let cmpGagU = this._lc('cKXvJHnPb', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},events:{onchange:function(e) {let $el = this; component.formObject.display = ! component.formObject.display}},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'display topic',value:1},state:'stQaU6T'});
ec('div');
let elRNaL4 = eo('div',null,null,`class`,`col-md-2`);
let cmpOdxO = this._lc('cBAfgzetr', {parent:component,parentTop:flkModal,props:{checked:component.formObject.public},events:{onchange:function(e) {let $el = this; component.formObject.public = ! component.formObject.public}},boolAttrs:{checked:component.formObject.public},attrs:{name:`${(`public`).toInputName()}`,label:'Public topic',value:1},state:'stQaU6T'});
ec('div');
ec('div');
ec('div');
let elxxFUl = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elWqtT0 = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stQaU6T'});
}
                    this.isReadyToGo();
                }
        });