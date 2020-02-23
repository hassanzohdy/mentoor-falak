_Component({
                selector: 'tracks-page',
                c: 'TracksPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {cHAYKtPcs:'gold-icon',cdYDnUo5O:'table-actions',ctn1y3oWl:'admin-table',cJcrPmOR_:'flk-checkbox',cNeTghR46:'flk-modal'},
                render: function (component) {
                    let cmpReus = this._lc('ctn1y3oWl', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let track = component.items[index]; 
 let ii4Z2B = '9qLu43c' + index;
let el9opv4 = eo('tr','kV5VIS5pilzJ' + index+ii4Z2B,null,`id`,`${ track.id }`);
let el0unJr = eo('td','Q_Sff'+ii4Z2B);
text( track.id );
ec('td');
let elYFOs1 = eo('td','QkJff'+ii4Z2B);
let elCoDS5 = ev('img','W1Wff'+ii4Z2B,null,`src`,`${track.image}`,`class`,`trackImg small-image`,`alt`,``);
ec('td');
let elPOSqz = eo('td','rqWff'+ii4Z2B);
text(track.name);
ec('td');
let elUpNtb = eo('td','ANYff'+ii4Z2B);
let elPywpX = eo('div','Qw3ff'+ii4Z2B);
let elNNnKo = eo('i','oalff'+ii4Z2B,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
let el8YS8n = eo('strong','QPvff'+ii4Z2B,null,`class`,`mx-2`);
text(track.suggestTopic.requires.format());
ec('strong');
ec('div');
let elRSKAr = eo('div','QGlff'+ii4Z2B);
let cmpAZUt = this._lc('cHAYKtPcs', {parent:component,parentTop:adminTable,props:{coins:track.suggestTopic.reward},insideLoop:true,index:"" +ii4Z2B});
ec('div');
ec('td');
let el92MKn = eo('td','ZBZff'+ii4Z2B);
text(track.sortOrder);
ec('td');
let elWJpVG = eo('td','h6cff'+ii4Z2B);
text(track.display);
ec('td');
let elmS4Z5 = eo('td','GLDff'+ii4Z2B);
let elgNDcq = eo('a','8swff'+ii4Z2B,null,`href`,`/admin/academy/tracks/${ track.id }/topics`);
text(`${ track.topics.length.format() }
        topics`);
ec('a');
ec('td');
let el9yZEg = eo('td','zSvff'+ii4Z2B);
text( Number(track.cost).format() );
ec('td');
let el92Vvp = eo('td','3c5ff'+ii4Z2B);
let cmpU0rR = this._lc('cdYDnUo5O', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(track)},ondelete:function(e) {let $el = this; component.deleteItem(track.id, index)}},insideLoop:true,index:"" +ii4Z2B});
ec('td');
ec('tr');
}
}});
let cndB4pE = component.openModal;
this.setState('stN9U5w', cndB4pE);
if (cndB4pE) { 
let cmpLUGx = this._lc('cNeTghR46', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elb2i4E = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elb2i4E.formHandler) {
                    window.cfrmdlr = elb2i4E.formHandler = new FormHandler(elb2i4E, component);
                } else {
                    window.cfrmdlr = elb2i4E.formHandler;
                }
            let elEXXL_ = eo('div',null,null,`class`,`form-group`);
let elhbDnE = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elb2i4E.formHandler.addError(`name`, 'required', trans('validation.required'));}return elb2i4E.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Track name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elhbDnE.value = fval(component.formObject.name);
let cndYkCd = elb2i4E.formHandler.getError(`name`);
this.setState('stQBPw1', cndYkCd);
if (cndYkCd) { 
let elKEXrP = eo('div','hl1f',null,`class`,`alert alert-danger`);
text(elb2i4E.formHandler.getError(`name`));
ec('div');
}ec('div');
let elPENt4 = eo('div',null,null,`class`,`form-group`);
let elaaTBU = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elb2i4E.formHandler.addError(`slug`, 'required', trans('validation.required'));}return elb2i4E.formHandler.removeError(`slug`);}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`placeholder`,`${trans(`Url slug`)}`,`type`,`text`,`class`,`form-control`,`id`,`slug`);
elaaTBU.value = fval(component.formObject.slug);
let cnd3B54 = elb2i4E.formHandler.getError(`slug`);
this.setState('stP_uRW', cnd3B54);
if (cnd3B54) { 
let elS1DpZ = eo('div','DcIf',null,`class`,`alert alert-danger`);
text(elb2i4E.formHandler.getError(`slug`));
ec('div');
}ec('div');
let elzqdS9 = eo('div',null,null,`class`,`form-group`);
let elbjuhx = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elb2i4E.formHandler.addError(`description`, 'required', trans('validation.required'));}return elb2i4E.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elbjuhx.value = fval(component.formObject.description);
ec('textarea');
let cndN207 = elb2i4E.formHandler.getError(`description`);
this.setState('sto8G4t', cndN207);
if (cndN207) { 
let el7O0za = eo('div','_NPf',null,`class`,`alert alert-danger`);
text(elb2i4E.formHandler.getError(`description`));
ec('div');
}ec('div');
let elG6u8H = eo('div',null,null,`class`,`form-group`);
let eluA2iK = eo('div',null,null,`class`,`row`);
let elRJyE5 = eo('div',null,null,`class`,`col-md-4`);
let elpMqVS = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elpMqVS.value = fval(component.formObject.sortOrder);
ec('div');
let elm0Agp = eo('div',null,null,`class`,`col-md-4`);
let elnGoZI = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elb2i4E.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elb2i4E.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elnGoZI.value = fval(component.formObject.cost);
let cndKncP = elb2i4E.formHandler.getError(`cost`);
this.setState('st8gl90', cndKncP);
if (cndKncP) { 
let elUr3I7 = eo('div','ajQf',null,`class`,`alert alert-danger`);
text(elb2i4E.formHandler.getError(`cost`));
ec('div');
}ec('div');
let elVfWyN = eo('div',null,null,`class`,`col-md-4`);
let cmpWg5h = this._lc('cJcrPmOR_', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},events:{onchange:function(e) {let $el = this; component.formObject.display = ! component.formObject.display}},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,value:1,label:'display'},state:'stN9U5w'});
ec('div');
ec('div');
let elsETlO = eo('h3',null,null,`class`,`m-v-1 bold`);
text(`Suggest Topics`);
ec('h3');
let elo8Y7_ = eo('div',null,null,`class`,`row`);
let elkeeTe = eo('div',null,null,`class`,`col-md-4`);
let elxerTm = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.suggestTopic.requires = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elb2i4E.formHandler.addError(`suggestTopic.requires`, 'required', trans('validation.required'));}return elb2i4E.formHandler.removeError(`suggestTopic.requires`);}]},`value`,`${fval(component.formObject.suggestTopic.requires)}`,`name`,`${(`suggestTopic.requires`).toInputName()}`,`placeholder`,`${trans(`Required answers for suggest topic`)}`,`class`,`form-control`,`type`,`number`,`id`,`suggestTopic-requires`);
elxerTm.value = fval(component.formObject.suggestTopic.requires);
let cndogDA = elb2i4E.formHandler.getError(`suggestTopic.requires`);
this.setState('stc4Mpd', cndogDA);
if (cndogDA) { 
let el93ZxP = eo('div','wB5f',null,`class`,`alert alert-danger`);
text(elb2i4E.formHandler.getError(`suggestTopic.requires`));
ec('div');
}ec('div');
let el0dfCW = eo('div',null,null,`class`,`col-md-4`);
let elHKmDm = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.suggestTopic.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elb2i4E.formHandler.addError(`suggestTopic.reward`, 'required', trans('validation.required'));}return elb2i4E.formHandler.removeError(`suggestTopic.reward`);}]},`value`,`${fval(component.formObject.suggestTopic.reward)}`,`name`,`${(`suggestTopic.reward`).toInputName()}`,`placeholder`,`${trans(`Reward for suggest topic`)}`,`class`,`form-control`,`type`,`number`,`id`,`suggestTopic-reward`);
elHKmDm.value = fval(component.formObject.suggestTopic.reward);
let cnduqDA = elb2i4E.formHandler.getError(`suggestTopic.reward`);
this.setState('st1Dp2S', cnduqDA);
if (cnduqDA) { 
let elPlQbx = eo('div','1ONf',null,`class`,`alert alert-danger`);
text(elb2i4E.formHandler.getError(`suggestTopic.reward`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elqoQNU = eo('div',null,null,`class`,`form-group`);
let ellaJDZ = ev('input',null,null,`name`,`${(`image`).toInputName()}`,`type`,`file`);
ec('div');
let elb2o2B = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elL92e9 = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stN9U5w'});
}
                    this.isReadyToGo();
                }
        });