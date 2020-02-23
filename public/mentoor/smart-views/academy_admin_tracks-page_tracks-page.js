_Component({
                selector: 'tracks-page',
                c: 'TracksPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {cafRqTmwy:'gold-icon',c0Pi6UBd8:'table-actions',cfzXUzCwv:'admin-table',cVa3S48rK:'flk-checkbox',cXH1YWWfd:'flk-modal'},
                render: function (component) {
                    let cmpwFJE = this._lc('cfzXUzCwv', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let track = component.items[index]; 
 let iij3Jh = 'bVuX0WF' + index;
let elqd1A7 = eo('tr','DMMk3D0RsmG9' + index+iij3Jh,null,`id`,`${ track.id }`);
let eldwbh5 = eo('td','FbAff'+iij3Jh);
text( track.id );
ec('td');
let elXlRAS = eo('td','Hzmff'+iij3Jh);
let elRi7Tx = ev('img','sqhff'+iij3Jh,null,`src`,`${track.image}`,`class`,`trackImg small-image`,`alt`,``);
ec('td');
let elKW4l2 = eo('td','Cz3ff'+iij3Jh);
text(track.name);
ec('td');
let elRFUo0 = eo('td','U9qff'+iij3Jh);
let elsNyuK = eo('div','wm8ff'+iij3Jh);
let el5m2Xz = eo('i','P6jff'+iij3Jh,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
let elfRzGM = eo('strong','t7Cff'+iij3Jh,null,`class`,`mx-2`);
text(track.suggestTopic.requires.format());
ec('strong');
ec('div');
let elE7ww0 = eo('div','TX3ff'+iij3Jh);
let cmphYyJ = this._lc('cafRqTmwy', {parent:component,parentTop:adminTable,props:{coins:track.suggestTopic.reward},insideLoop:true,index:"" +iij3Jh});
ec('div');
ec('td');
let ellQSj0 = eo('td','yCDff'+iij3Jh);
text(track.sortOrder);
ec('td');
let elieYe6 = eo('td','ZA9ff'+iij3Jh);
text(track.display);
ec('td');
let el2ovYm = eo('td','Wtsff'+iij3Jh);
let elPQNO4 = eo('a','WEKff'+iij3Jh,null,`href`,`/admin/academy/tracks/${ track.id }/topics`);
text(`${ track.topics.length.format() }
        topics`);
ec('a');
ec('td');
let elv8CTo = eo('td','zCsff'+iij3Jh);
text( Number(track.cost).format() );
ec('td');
let eln02k7 = eo('td','5TSff'+iij3Jh);
let cmpCMWD = this._lc('c0Pi6UBd8', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(track)},ondelete:function(e) {let $el = this; component.deleteItem(track.id, index)}},insideLoop:true,index:"" +iij3Jh});
ec('td');
ec('tr');
}
}});
let cndqZkj = component.openModal;
this.setState('stxUz_e', cndqZkj);
if (cndqZkj) { 
let cmp5s_A = this._lc('cXH1YWWfd', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elhvRbE = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elhvRbE.formHandler) {
                    window.cfrmdlr = elhvRbE.formHandler = new FormHandler(elhvRbE, component);
                } else {
                    window.cfrmdlr = elhvRbE.formHandler;
                }
            let elPQPE8 = eo('div',null,null,`class`,`form-group`);
let elzMehs = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elhvRbE.formHandler.addError(`name`, 'required', trans('validation.required'));}return elhvRbE.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Track name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elzMehs.value = fval(component.formObject.name);
let cndZT3R = elhvRbE.formHandler.getError(`name`);
this.setState('st8THXr', cndZT3R);
if (cndZT3R) { 
let elCLn2e = eo('div','iBuf',null,`class`,`alert alert-danger`);
text(elhvRbE.formHandler.getError(`name`));
ec('div');
}ec('div');
let elyZv0V = eo('div',null,null,`class`,`form-group`);
let elAiSp3 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elhvRbE.formHandler.addError(`slug`, 'required', trans('validation.required'));}return elhvRbE.formHandler.removeError(`slug`);}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`placeholder`,`${trans(`Url slug`)}`,`type`,`text`,`class`,`form-control`,`id`,`slug`);
elAiSp3.value = fval(component.formObject.slug);
let cnd3Ax1 = elhvRbE.formHandler.getError(`slug`);
this.setState('stHZcD4', cnd3Ax1);
if (cnd3Ax1) { 
let elV5v9l = eo('div','6fif',null,`class`,`alert alert-danger`);
text(elhvRbE.formHandler.getError(`slug`));
ec('div');
}ec('div');
let elS9nfH = eo('div',null,null,`class`,`form-group`);
let elkkBtU = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elhvRbE.formHandler.addError(`description`, 'required', trans('validation.required'));}return elhvRbE.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elkkBtU.value = fval(component.formObject.description);
ec('textarea');
let cndchma = elhvRbE.formHandler.getError(`description`);
this.setState('stf85MM', cndchma);
if (cndchma) { 
let elpW1hh = eo('div','zXif',null,`class`,`alert alert-danger`);
text(elhvRbE.formHandler.getError(`description`));
ec('div');
}ec('div');
let el4YkSW = eo('div',null,null,`class`,`form-group`);
let elY0TVb = eo('div',null,null,`class`,`row`);
let elsavT8 = eo('div',null,null,`class`,`col-md-4`);
let elu9GBN = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elu9GBN.value = fval(component.formObject.sortOrder);
ec('div');
let el2VZdO = eo('div',null,null,`class`,`col-md-4`);
let elKoNqn = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elhvRbE.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elhvRbE.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elKoNqn.value = fval(component.formObject.cost);
let cndlxb8 = elhvRbE.formHandler.getError(`cost`);
this.setState('stQYNnD', cndlxb8);
if (cndlxb8) { 
let elDXbgA = eo('div','W8yf',null,`class`,`alert alert-danger`);
text(elhvRbE.formHandler.getError(`cost`));
ec('div');
}ec('div');
let elpExoI = eo('div',null,null,`class`,`col-md-4`);
let cmpwz9U = this._lc('cVa3S48rK', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},events:{onchange:function(e) {let $el = this; component.formObject.display = ! component.formObject.display}},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,value:1,label:'display'},state:'stxUz_e'});
ec('div');
ec('div');
let elDDp4t = eo('h3',null,null,`class`,`m-v-1 bold`);
text(`Suggest Topics`);
ec('h3');
let elWKz9H = eo('div',null,null,`class`,`row`);
let elCWx7M = eo('div',null,null,`class`,`col-md-4`);
let elPK5fg = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.suggestTopic.requires = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elhvRbE.formHandler.addError(`suggestTopic.requires`, 'required', trans('validation.required'));}return elhvRbE.formHandler.removeError(`suggestTopic.requires`);}]},`value`,`${fval(component.formObject.suggestTopic.requires)}`,`name`,`${(`suggestTopic.requires`).toInputName()}`,`placeholder`,`${trans(`Required answers for suggest topic`)}`,`class`,`form-control`,`type`,`number`,`id`,`suggestTopic-requires`);
elPK5fg.value = fval(component.formObject.suggestTopic.requires);
let cndBfmd = elhvRbE.formHandler.getError(`suggestTopic.requires`);
this.setState('stDpEmr', cndBfmd);
if (cndBfmd) { 
let elU4e2c = eo('div','ftDf',null,`class`,`alert alert-danger`);
text(elhvRbE.formHandler.getError(`suggestTopic.requires`));
ec('div');
}ec('div');
let el9mL9K = eo('div',null,null,`class`,`col-md-4`);
let elWZ8gq = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.suggestTopic.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elhvRbE.formHandler.addError(`suggestTopic.reward`, 'required', trans('validation.required'));}return elhvRbE.formHandler.removeError(`suggestTopic.reward`);}]},`value`,`${fval(component.formObject.suggestTopic.reward)}`,`name`,`${(`suggestTopic.reward`).toInputName()}`,`placeholder`,`${trans(`Reward for suggest topic`)}`,`class`,`form-control`,`type`,`number`,`id`,`suggestTopic-reward`);
elWZ8gq.value = fval(component.formObject.suggestTopic.reward);
let cnd_jPc = elhvRbE.formHandler.getError(`suggestTopic.reward`);
this.setState('stVNeYv', cnd_jPc);
if (cnd_jPc) { 
let elJoN2C = eo('div','gxjf',null,`class`,`alert alert-danger`);
text(elhvRbE.formHandler.getError(`suggestTopic.reward`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elXZz6I = eo('div',null,null,`class`,`form-group`);
let elYcSeo = ev('input',null,null,`name`,`${(`image`).toInputName()}`,`type`,`file`);
ec('div');
let elo1JFL = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elPlL45 = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stxUz_e'});
}
                    this.isReadyToGo();
                }
        });