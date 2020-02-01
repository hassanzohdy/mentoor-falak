_Component({
                selector: 'tracks-page',
                c: 'TracksPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {cYyhPtMhH:'gold-icon',cWRmotA94:'table-actions',chFOwr1co:'admin-table',cWaqx0899:'flk-checkbox',c56fPCj4e:'flk-modal'},
                render: function (component) {
                    let cmpfwS1 = this._lc('chFOwr1co', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let track = component.items[index]; 
 let iiaudP = 'kwBJMLY' + index;
let elaDUty = eo('tr','HzjdfpDKsncW' + index+iiaudP,null,`id`,`${ track.id }`);
let eluVUvZ = eo('td','vMnff'+iiaudP);
text( track.id );
ec('td');
let elaqiHF = eo('td','fOzff'+iiaudP);
let elBiv_4 = ev('img','XyNff'+iiaudP,null,`src`,`${track.image}`,`class`,`trackImg small-image`,`alt`,``);
ec('td');
let el_2ySn = eo('td','DJ7ff'+iiaudP);
text(track.name);
ec('td');
let elDfLR9 = eo('td','PyVff'+iiaudP);
let elEvaNL = eo('div','ydMff'+iiaudP);
let el_TV_h = eo('i','2uOff'+iiaudP,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
let eluk3Y0 = eo('strong','9fqff'+iiaudP,null,`class`,`mx-2`);
text(track.suggestTopic.requires.format());
ec('strong');
ec('div');
let elvdXzB = eo('div','D7Tff'+iiaudP);
let cmp_YWD = this._lc('cYyhPtMhH', {parent:component,parentTop:adminTable,props:{coins:track.suggestTopic.reward},insideLoop:true,index:"" +iiaudP});
ec('div');
ec('td');
let elgbdOF = eo('td','tdaff'+iiaudP);
text(track.sortOrder);
ec('td');
let el7wmsr = eo('td','NhXff'+iiaudP);
text(track.display);
ec('td');
let elU3rYM = eo('td','pO2ff'+iiaudP);
let elL0f4i = eo('a','wMCff'+iiaudP,null,`href`,`/admin/academy/tracks/${ track.id }/topics`);
text(`${ track.topics.length.format() }
        topics`);
ec('a');
ec('td');
let elCO6qG = eo('td','4gbff'+iiaudP);
text( Number(track.cost).format() );
ec('td');
let elaGBFT = eo('td','vSWff'+iiaudP);
let cmpq_uP = this._lc('cWRmotA94', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(track)},ondelete:function(e) {let $el = this; component.deleteItem(track.id, index)}},insideLoop:true,index:"" +iiaudP});
ec('td');
ec('tr');
}
}});
let cndnCba = component.openModal;
this.setState('str9R4l', cndnCba);
if (cndnCba) { 
let cmpm5yM = this._lc('c56fPCj4e', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elyE1fu = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elyE1fu.formHandler) {
                    window.cfrmdlr = elyE1fu.formHandler = new FormHandler(elyE1fu, component);
                } else {
                    window.cfrmdlr = elyE1fu.formHandler;
                }
            let elucK0A = eo('div',null,null,`class`,`form-group`);
let el7SAtp = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elyE1fu.formHandler.addError(`name`, 'required', trans('validation.required'));}return elyE1fu.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Track name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el7SAtp.value = fval(component.formObject.name);
let cnd0eLG = elyE1fu.formHandler.getError(`name`);
this.setState('stSZAJ4', cnd0eLG);
if (cnd0eLG) { 
let elSUyKs = eo('div','ph6f',null,`class`,`alert alert-danger`);
text(elyE1fu.formHandler.getError(`name`));
ec('div');
}ec('div');
let el78yyg = eo('div',null,null,`class`,`form-group`);
let elFjEDz = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elyE1fu.formHandler.addError(`slug`, 'required', trans('validation.required'));}return elyE1fu.formHandler.removeError(`slug`);}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`placeholder`,`${trans(`Url slug`)}`,`type`,`text`,`class`,`form-control`,`id`,`slug`);
elFjEDz.value = fval(component.formObject.slug);
let cnddiso = elyE1fu.formHandler.getError(`slug`);
this.setState('stoB6HD', cnddiso);
if (cnddiso) { 
let el66vCD = eo('div','ICdf',null,`class`,`alert alert-danger`);
text(elyE1fu.formHandler.getError(`slug`));
ec('div');
}ec('div');
let elX4yFQ = eo('div',null,null,`class`,`form-group`);
let elNt67z = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elyE1fu.formHandler.addError(`description`, 'required', trans('validation.required'));}return elyE1fu.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elNt67z.value = fval(component.formObject.description);
ec('textarea');
let cnd1t3y = elyE1fu.formHandler.getError(`description`);
this.setState('stkVbfY', cnd1t3y);
if (cnd1t3y) { 
let el0WDgY = eo('div','W_Ff',null,`class`,`alert alert-danger`);
text(elyE1fu.formHandler.getError(`description`));
ec('div');
}ec('div');
let elgsAuy = eo('div',null,null,`class`,`form-group`);
let elDreIo = eo('div',null,null,`class`,`row`);
let elE60Li = eo('div',null,null,`class`,`col-md-4`);
let elkW_VH = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elkW_VH.value = fval(component.formObject.sortOrder);
ec('div');
let elV12ej = eo('div',null,null,`class`,`col-md-4`);
let elf5ng3 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elyE1fu.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elyE1fu.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elf5ng3.value = fval(component.formObject.cost);
let cnd6nXo = elyE1fu.formHandler.getError(`cost`);
this.setState('sti9Ykv', cnd6nXo);
if (cnd6nXo) { 
let elvhjy_ = eo('div','hiGf',null,`class`,`alert alert-danger`);
text(elyE1fu.formHandler.getError(`cost`));
ec('div');
}ec('div');
let el2KXgN = eo('div',null,null,`class`,`col-md-4`);
let cmpl_Uj = this._lc('cWaqx0899', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},events:{onchange:function(e) {let $el = this; component.formObject.display = ! component.formObject.display}},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,value:1,label:'display'},state:'str9R4l'});
ec('div');
ec('div');
let elnwJkz = eo('h3',null,null,`class`,`m-v-1 bold`);
text(`Suggest Topics`);
ec('h3');
let eldYJVQ = eo('div',null,null,`class`,`row`);
let elYW4pl = eo('div',null,null,`class`,`col-md-4`);
let elt72Cp = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.suggestTopic.requires = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elyE1fu.formHandler.addError(`suggestTopic.requires`, 'required', trans('validation.required'));}return elyE1fu.formHandler.removeError(`suggestTopic.requires`);}]},`value`,`${fval(component.formObject.suggestTopic.requires)}`,`name`,`${(`suggestTopic.requires`).toInputName()}`,`placeholder`,`${trans(`Required answers for suggest topic`)}`,`class`,`form-control`,`type`,`number`,`id`,`suggestTopic-requires`);
elt72Cp.value = fval(component.formObject.suggestTopic.requires);
let cnd0rhB = elyE1fu.formHandler.getError(`suggestTopic.requires`);
this.setState('stbum7X', cnd0rhB);
if (cnd0rhB) { 
let elu2v0M = eo('div','3BBf',null,`class`,`alert alert-danger`);
text(elyE1fu.formHandler.getError(`suggestTopic.requires`));
ec('div');
}ec('div');
let elwYxp2 = eo('div',null,null,`class`,`col-md-4`);
let elIai_2 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.suggestTopic.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elyE1fu.formHandler.addError(`suggestTopic.reward`, 'required', trans('validation.required'));}return elyE1fu.formHandler.removeError(`suggestTopic.reward`);}]},`value`,`${fval(component.formObject.suggestTopic.reward)}`,`name`,`${(`suggestTopic.reward`).toInputName()}`,`placeholder`,`${trans(`Reward for suggest topic`)}`,`class`,`form-control`,`type`,`number`,`id`,`suggestTopic-reward`);
elIai_2.value = fval(component.formObject.suggestTopic.reward);
let cndmIau = elyE1fu.formHandler.getError(`suggestTopic.reward`);
this.setState('stS1T1c', cndmIau);
if (cndmIau) { 
let eluM98w = eo('div','3JBf',null,`class`,`alert alert-danger`);
text(elyE1fu.formHandler.getError(`suggestTopic.reward`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elTJ1BT = eo('div',null,null,`class`,`form-group`);
let elGiHt2 = ev('input',null,null,`name`,`${(`image`).toInputName()}`,`type`,`file`);
ec('div');
let elcrJd4 = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elIcIFr = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'str9R4l'});
}
                    this.isReadyToGo();
                }
        });