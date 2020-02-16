_Component({
                selector: 'tracks-page',
                c: 'TracksPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {cZFuAbIsI:'gold-icon',cs7pmI_NW:'table-actions',cf1LvcM8u:'admin-table',cnaTUiWPs:'flk-checkbox',cnPiexV1V:'flk-modal'},
                render: function (component) {
                    let cmpeCDD = this._lc('cf1LvcM8u', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let track = component.items[index]; 
 let iizrKi = 'sfkv1ro' + index;
let elytJMT = eo('tr','AbAocYhxUhkR' + index+iizrKi,null,`id`,`${ track.id }`);
let elCXHy9 = eo('td','F53ff'+iizrKi);
text( track.id );
ec('td');
let elV4pq2 = eo('td','J9Aff'+iizrKi);
let elthsGL = ev('img','Zaoff'+iizrKi,null,`src`,`${track.image}`,`class`,`trackImg small-image`,`alt`,``);
ec('td');
let elXET6X = eo('td','lhHff'+iizrKi);
text(track.name);
ec('td');
let elBCQjo = eo('td','eZaff'+iizrKi);
let el_ei8v = eo('div','T1Qff'+iizrKi);
let elxhpGZ = eo('i','llVff'+iizrKi,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
let elfANZ3 = eo('strong','sskff'+iizrKi,null,`class`,`mx-2`);
text(track.suggestTopic.requires.format());
ec('strong');
ec('div');
let eluHX4n = eo('div','Knhff'+iizrKi);
let cmpayCz = this._lc('cZFuAbIsI', {parent:component,parentTop:adminTable,props:{coins:track.suggestTopic.reward},insideLoop:true,index:"" +iizrKi});
ec('div');
ec('td');
let elp0336 = eo('td','txAff'+iizrKi);
text(track.sortOrder);
ec('td');
let elSOLTI = eo('td','8jjff'+iizrKi);
text(track.display);
ec('td');
let elfFHoM = eo('td','OmVff'+iizrKi);
let eldZ070 = eo('a','GTjff'+iizrKi,null,`href`,`/admin/academy/tracks/${ track.id }/topics`);
text(`${ track.topics.length.format() }
        topics`);
ec('a');
ec('td');
let elO5ulG = eo('td','IVAff'+iizrKi);
text( Number(track.cost).format() );
ec('td');
let el29A9h = eo('td','CRtff'+iizrKi);
let cmp02FM = this._lc('cs7pmI_NW', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(track)},ondelete:function(e) {let $el = this; component.deleteItem(track.id, index)}},insideLoop:true,index:"" +iizrKi});
ec('td');
ec('tr');
}
}});
let cndbJ9B = component.openModal;
this.setState('st9Kt7C', cndbJ9B);
if (cndbJ9B) { 
let cmpvSbn = this._lc('cnPiexV1V', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let el0mbBu = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el0mbBu.formHandler) {
                    window.cfrmdlr = el0mbBu.formHandler = new FormHandler(el0mbBu, component);
                } else {
                    window.cfrmdlr = el0mbBu.formHandler;
                }
            let elU7DvV = eo('div',null,null,`class`,`form-group`);
let elKuXFy = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el0mbBu.formHandler.addError(`name`, 'required', trans('validation.required'));}return el0mbBu.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Track name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elKuXFy.value = fval(component.formObject.name);
let cndRrvK = el0mbBu.formHandler.getError(`name`);
this.setState('stOU690', cndRrvK);
if (cndRrvK) { 
let el3IWUr = eo('div','REuf',null,`class`,`alert alert-danger`);
text(el0mbBu.formHandler.getError(`name`));
ec('div');
}ec('div');
let el_LuUi = eo('div',null,null,`class`,`form-group`);
let eloTvYf = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el0mbBu.formHandler.addError(`slug`, 'required', trans('validation.required'));}return el0mbBu.formHandler.removeError(`slug`);}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`placeholder`,`${trans(`Url slug`)}`,`type`,`text`,`class`,`form-control`,`id`,`slug`);
eloTvYf.value = fval(component.formObject.slug);
let cndMkuj = el0mbBu.formHandler.getError(`slug`);
this.setState('stpEP2u', cndMkuj);
if (cndMkuj) { 
let elcKeIc = eo('div','TTvf',null,`class`,`alert alert-danger`);
text(el0mbBu.formHandler.getError(`slug`));
ec('div');
}ec('div');
let ele1yqq = eo('div',null,null,`class`,`form-group`);
let elLfEoB = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el0mbBu.formHandler.addError(`description`, 'required', trans('validation.required'));}return el0mbBu.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elLfEoB.value = fval(component.formObject.description);
ec('textarea');
let cndeOaY = el0mbBu.formHandler.getError(`description`);
this.setState('str40Pv', cndeOaY);
if (cndeOaY) { 
let eleq0_c = eo('div','VCzf',null,`class`,`alert alert-danger`);
text(el0mbBu.formHandler.getError(`description`));
ec('div');
}ec('div');
let elAI3By = eo('div',null,null,`class`,`form-group`);
let el1D41S = eo('div',null,null,`class`,`row`);
let elx81aD = eo('div',null,null,`class`,`col-md-4`);
let elQfJv1 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elQfJv1.value = fval(component.formObject.sortOrder);
ec('div');
let elHMDsw = eo('div',null,null,`class`,`col-md-4`);
let elY8uMa = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el0mbBu.formHandler.addError(`cost`, 'required', trans('validation.required'));}return el0mbBu.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elY8uMa.value = fval(component.formObject.cost);
let cnd615C = el0mbBu.formHandler.getError(`cost`);
this.setState('stiGrqz', cnd615C);
if (cnd615C) { 
let elsabq2 = eo('div','NCnf',null,`class`,`alert alert-danger`);
text(el0mbBu.formHandler.getError(`cost`));
ec('div');
}ec('div');
let elcchJR = eo('div',null,null,`class`,`col-md-4`);
let cmpWuCS = this._lc('cnaTUiWPs', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},events:{onchange:function(e) {let $el = this; component.formObject.display = ! component.formObject.display}},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,value:1,label:'display'},state:'st9Kt7C'});
ec('div');
ec('div');
let eld0wYK = eo('h3',null,null,`class`,`m-v-1 bold`);
text(`Suggest Topics`);
ec('h3');
let elsS_th = eo('div',null,null,`class`,`row`);
let elNuI2f = eo('div',null,null,`class`,`col-md-4`);
let el15CYx = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.suggestTopic.requires = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el0mbBu.formHandler.addError(`suggestTopic.requires`, 'required', trans('validation.required'));}return el0mbBu.formHandler.removeError(`suggestTopic.requires`);}]},`value`,`${fval(component.formObject.suggestTopic.requires)}`,`name`,`${(`suggestTopic.requires`).toInputName()}`,`placeholder`,`${trans(`Required answers for suggest topic`)}`,`class`,`form-control`,`type`,`number`,`id`,`suggestTopic-requires`);
el15CYx.value = fval(component.formObject.suggestTopic.requires);
let cnds9gl = el0mbBu.formHandler.getError(`suggestTopic.requires`);
this.setState('stBKAzn', cnds9gl);
if (cnds9gl) { 
let el4yyQs = eo('div','gfzf',null,`class`,`alert alert-danger`);
text(el0mbBu.formHandler.getError(`suggestTopic.requires`));
ec('div');
}ec('div');
let eltnVbX = eo('div',null,null,`class`,`col-md-4`);
let elScBcp = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.suggestTopic.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el0mbBu.formHandler.addError(`suggestTopic.reward`, 'required', trans('validation.required'));}return el0mbBu.formHandler.removeError(`suggestTopic.reward`);}]},`value`,`${fval(component.formObject.suggestTopic.reward)}`,`name`,`${(`suggestTopic.reward`).toInputName()}`,`placeholder`,`${trans(`Reward for suggest topic`)}`,`class`,`form-control`,`type`,`number`,`id`,`suggestTopic-reward`);
elScBcp.value = fval(component.formObject.suggestTopic.reward);
let cndUekX = el0mbBu.formHandler.getError(`suggestTopic.reward`);
this.setState('stGTGPo', cndUekX);
if (cndUekX) { 
let el6I81s = eo('div','N7Hf',null,`class`,`alert alert-danger`);
text(el0mbBu.formHandler.getError(`suggestTopic.reward`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elqTNCn = eo('div',null,null,`class`,`form-group`);
let eltzqtl = ev('input',null,null,`name`,`${(`image`).toInputName()}`,`type`,`file`);
ec('div');
let elfablq = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let els14VO = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'st9Kt7C'});
}
                    this.isReadyToGo();
                }
        });