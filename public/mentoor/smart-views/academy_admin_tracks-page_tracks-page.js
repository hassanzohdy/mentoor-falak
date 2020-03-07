_Component({
                selector: 'tracks-page',
                c: 'TracksPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {cKWxb46cT:'gold-icon',cqW8wdR22:'table-actions',cYW3fyV2H:'admin-table',ceXHJ1MxH:'flk-checkbox',cEvTaIfb6:'flk-modal'},
                render: function (component) {
                    let cmpzcd3 = this._lc('cYW3fyV2H', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let track = component.items[index]; 
 let iiWbyt = 'qm_Bu45' + index;
let elQlq_N = eo('tr','Q_gh_MthdOpx' + index+iiWbyt,null,`id`,`${ track.id }`);
let eldwrGj = eo('td','8ctff'+iiWbyt);
text( track.id );
ec('td');
let elce3g6 = eo('td','VdNff'+iiWbyt);
let elTOJuF = ev('img','hDgff'+iiWbyt,null,`src`,`${track.image}`,`class`,`trackImg small-image`,`alt`,``);
ec('td');
let elMXipI = eo('td','baBff'+iiWbyt);
text(track.name);
ec('td');
let el7zee_ = eo('td','Zd5ff'+iiWbyt);
let elaaDXD = eo('div','Ssbff'+iiWbyt);
let eltQaxy = eo('i','Mkjff'+iiWbyt,null,`class`,`${fas('edit')} icon`);
ec('i');
let el1iwgk = eo('strong','9dgff'+iiWbyt,null,`class`,`mx-2`);
text(track.suggestTopic.requires.format());
ec('strong');
ec('div');
let el6Do1d = eo('div','vm_ff'+iiWbyt);
let cmpFbFx = this._lc('cKWxb46cT', {parent:component,parentTop:adminTable,props:{coins:track.suggestTopic.reward},insideLoop:true,index:"" +iiWbyt});
ec('div');
ec('td');
let el5dOO0 = eo('td','X1kff'+iiWbyt);
text(track.sortOrder);
ec('td');
let elH4MwK = eo('td','0sUff'+iiWbyt);
text(track.display);
ec('td');
let el7R8a9 = eo('td','od2ff'+iiWbyt);
let elqrIKx = eo('a','Jdqff'+iiWbyt,null,`href`,`/admin/academy/tracks/${ track.id }/topics`);
text(`${ track.topics.length.format() }
        topics`);
ec('a');
ec('td');
let elQtY8M = eo('td','flfff'+iiWbyt);
text( Number(track.cost).format() );
ec('td');
let elAC_Uc = eo('td','XU8ff'+iiWbyt);
let cmpEwv6 = this._lc('cqW8wdR22', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(track)},ondelete:function(e) {let $el = this; component.deleteItem(track.id, index)}},insideLoop:true,index:"" +iiWbyt});
ec('td');
ec('tr');
}
}});
let cnd2sPC = component.openModal;
this.setState('stOZuCo', cnd2sPC);
if (cnd2sPC) { 
let cmpWBkp = this._lc('cEvTaIfb6', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let el_m6ZJ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el_m6ZJ.formHandler) {
                    window.cfrmdlr = el_m6ZJ.formHandler = new FormHandler(el_m6ZJ, component);
                } else {
                    window.cfrmdlr = el_m6ZJ.formHandler;
                }
            let elh4bHR = eo('div',null,null,`class`,`form-group`);
let el1Wt12 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_m6ZJ.formHandler.addError(`name`, 'required', trans('validation.required'));}return el_m6ZJ.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Track name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el1Wt12.value = fval(component.formObject.name);
let cndfLFg = el_m6ZJ.formHandler.getError(`name`);
this.setState('st1pSjW', cndfLFg);
if (cndfLFg) { 
let elm3Zkr = eo('div','tuSf',null,`class`,`alert alert-danger`);
text(el_m6ZJ.formHandler.getError(`name`));
ec('div');
}ec('div');
let eljRL0W = eo('div',null,null,`class`,`form-group`);
let elqDVnk = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_m6ZJ.formHandler.addError(`slug`, 'required', trans('validation.required'));}return el_m6ZJ.formHandler.removeError(`slug`);}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`placeholder`,`${trans(`Url slug`)}`,`type`,`text`,`class`,`form-control`,`id`,`slug`);
elqDVnk.value = fval(component.formObject.slug);
let cndTngz = el_m6ZJ.formHandler.getError(`slug`);
this.setState('stH8c31', cndTngz);
if (cndTngz) { 
let elrE5tr = eo('div','YF2f',null,`class`,`alert alert-danger`);
text(el_m6ZJ.formHandler.getError(`slug`));
ec('div');
}ec('div');
let elDZCbi = eo('div',null,null,`class`,`form-group`);
let elKGHV0 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_m6ZJ.formHandler.addError(`description`, 'required', trans('validation.required'));}return el_m6ZJ.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elKGHV0.value = fval(component.formObject.description);
ec('textarea');
let cndtKoq = el_m6ZJ.formHandler.getError(`description`);
this.setState('stCvWQV', cndtKoq);
if (cndtKoq) { 
let elsvYTx = eo('div','w5Vf',null,`class`,`alert alert-danger`);
text(el_m6ZJ.formHandler.getError(`description`));
ec('div');
}ec('div');
let elX7hYh = eo('div',null,null,`class`,`form-group`);
let el6wHOh = eo('div',null,null,`class`,`row`);
let elw9yNL = eo('div',null,null,`class`,`col-md-4`);
let el0rlFt = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
el0rlFt.value = fval(component.formObject.sortOrder);
ec('div');
let elQyJwp = eo('div',null,null,`class`,`col-md-4`);
let elWIsYs = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_m6ZJ.formHandler.addError(`cost`, 'required', trans('validation.required'));}return el_m6ZJ.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elWIsYs.value = fval(component.formObject.cost);
let cndkRA1 = el_m6ZJ.formHandler.getError(`cost`);
this.setState('stNM1pC', cndkRA1);
if (cndkRA1) { 
let elwAPKq = eo('div','aiLf',null,`class`,`alert alert-danger`);
text(el_m6ZJ.formHandler.getError(`cost`));
ec('div');
}ec('div');
let elmAVLK = eo('div',null,null,`class`,`col-md-4`);
let cmp48E1 = this._lc('ceXHJ1MxH', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},events:{onchange:function(e) {let $el = this; component.formObject.display = ! component.formObject.display}},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,value:1,label:'display'},state:'stOZuCo'});
ec('div');
ec('div');
let elB0dTy = eo('h3',null,null,`class`,`m-v-1 bold`);
text(`Suggest Topics`);
ec('h3');
let elOAknb = eo('div',null,null,`class`,`row`);
let el5oxlf = eo('div',null,null,`class`,`col-md-4`);
let elk4ERX = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.suggestTopic.requires = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_m6ZJ.formHandler.addError(`suggestTopic.requires`, 'required', trans('validation.required'));}return el_m6ZJ.formHandler.removeError(`suggestTopic.requires`);}]},`value`,`${fval(component.formObject.suggestTopic.requires)}`,`name`,`${(`suggestTopic.requires`).toInputName()}`,`placeholder`,`${trans(`Required answers for suggest topic`)}`,`class`,`form-control`,`type`,`number`,`id`,`suggestTopic-requires`);
elk4ERX.value = fval(component.formObject.suggestTopic.requires);
let cndbxPW = el_m6ZJ.formHandler.getError(`suggestTopic.requires`);
this.setState('st4aJJY', cndbxPW);
if (cndbxPW) { 
let elvP1vQ = eo('div','oPRf',null,`class`,`alert alert-danger`);
text(el_m6ZJ.formHandler.getError(`suggestTopic.requires`));
ec('div');
}ec('div');
let elKBF5e = eo('div',null,null,`class`,`col-md-4`);
let elCMQmf = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.suggestTopic.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_m6ZJ.formHandler.addError(`suggestTopic.reward`, 'required', trans('validation.required'));}return el_m6ZJ.formHandler.removeError(`suggestTopic.reward`);}]},`value`,`${fval(component.formObject.suggestTopic.reward)}`,`name`,`${(`suggestTopic.reward`).toInputName()}`,`placeholder`,`${trans(`Reward for suggest topic`)}`,`class`,`form-control`,`type`,`number`,`id`,`suggestTopic-reward`);
elCMQmf.value = fval(component.formObject.suggestTopic.reward);
let cndJlZo = el_m6ZJ.formHandler.getError(`suggestTopic.reward`);
this.setState('stjWhvh', cndJlZo);
if (cndJlZo) { 
let elyyrRM = eo('div','bKUf',null,`class`,`alert alert-danger`);
text(el_m6ZJ.formHandler.getError(`suggestTopic.reward`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elen9JS = eo('div',null,null,`class`,`form-group`);
let elnlp57 = ev('input',null,null,`name`,`${(`image`).toInputName()}`,`type`,`file`);
ec('div');
let elRGsDn = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elovQ7I = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stOZuCo'});
}
                    this.isReadyToGo();
                }
        });