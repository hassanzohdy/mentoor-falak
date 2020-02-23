_Component({
                selector: 'einstein-page',
                c: 'EinsteinPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {cq7f1JcRs:'table-actions',cdlMNajVc:'admin-table',chWvK02Wv:'flk-modal'},
                render: function (component) {
                    let cmpR8n7 = this._lc('cdlMNajVc', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iiUuHR = 'GcFhgrG' + index;
let elKBMx5 = eo('tr','YMnyPQLrj_rY' + index+iiUuHR);
let elZh2Ef = eo('td','Se_ff'+iiUuHR);
text( record.id );
ec('td');
let elZqtjp = eo('td','v71ff'+iiUuHR);
text(record.name);
ec('td');
let elg9qjA = eo('td','kW4ff'+iiUuHR);
let el5zmki = ev('img','5VBff'+iiUuHR,null,`src`,`${record.image}`,`class`,`small-image`,`title`,`${record.name}`,`alt`,`${record.name}`);
ec('td');
let elnGl5L = eo('td','sctff'+iiUuHR);
let elMXEQA = eo('a','ty8ff'+iiUuHR,null,`href`,`/admin/einstein/${ record.id }/puzzles`);
text(`${ record.puzzles.length.format() }
                puzzles`);
ec('a');
ec('td');
let elysLsM = eo('td','B13ff'+iiUuHR);
text( Number(record.cost).format() );
ec('td');
let el5WIKL = eo('td','Rcvff'+iiUuHR);
text(record.requiredAnswers);
ec('td');
let eleE6kB = eo('td','QGpff'+iiUuHR);
let cmpf5_w = this._lc('cq7f1JcRs', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iiUuHR});
ec('td');
ec('tr');
}
}});
let cndeJuP = component.openModal;
this.setState('stCAAdk', cndeJuP);
if (cndeJuP) { 
let cmp_Hj_ = this._lc('chWvK02Wv', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elz_xdu = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elz_xdu.formHandler) {
                    window.cfrmdlr = elz_xdu.formHandler = new FormHandler(elz_xdu, component);
                } else {
                    window.cfrmdlr = elz_xdu.formHandler;
                }
            let eluA2Ex = eo('div',null,null,`class`,`form-group`);
let el8AQNg = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elz_xdu.formHandler.addError(`name`, 'required', trans('validation.required'));}return elz_xdu.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`category`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el8AQNg.value = fval(component.formObject.name);
let cndVGtC = elz_xdu.formHandler.getError(`name`);
this.setState('stxHmWJ', cndVGtC);
if (cndVGtC) { 
let el1vlQf = eo('div','uYAf',null,`class`,`alert alert-danger`);
text(elz_xdu.formHandler.getError(`name`));
ec('div');
}ec('div');
let elFLW_y = eo('div',null,null,`class`,`form-group`);
let elKgcn2 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elz_xdu.formHandler.addError(`description`, 'required', trans('validation.required'));}return elz_xdu.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elKgcn2.value = fval(component.formObject.description);
ec('textarea');
let cnd3tfL = elz_xdu.formHandler.getError(`description`);
this.setState('st_581K', cnd3tfL);
if (cnd3tfL) { 
let eljgRzA = eo('div','ZtBf',null,`class`,`alert alert-danger`);
text(elz_xdu.formHandler.getError(`description`));
ec('div');
}ec('div');
let elig7Te = eo('div',null,null,`class`,`form-group`);
let el6MRbm = eo('div',null,null,`class`,`row`);
let el30PJR = eo('div',null,null,`class`,`col-md-4`);
let elt4djQ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elz_xdu.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elz_xdu.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elt4djQ.value = fval(component.formObject.cost);
let cndvKLT = elz_xdu.formHandler.getError(`cost`);
this.setState('stgKUpV', cndvKLT);
if (cndvKLT) { 
let elXy_Qg = eo('div','N4If',null,`class`,`alert alert-danger`);
text(elz_xdu.formHandler.getError(`cost`));
ec('div');
}ec('div');
let eldJ3dp = eo('div',null,null,`class`,`col-md-4`);
let elest4P = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.requiredAnswers = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elz_xdu.formHandler.addError(`requiredAnswers`, 'required', trans('validation.required'));}return elz_xdu.formHandler.removeError(`requiredAnswers`);}]},`value`,`${fval(component.formObject.requiredAnswers)}`,`name`,`${(`requiredAnswers`).toInputName()}`,`placeholder`,`${trans(`required answers`)}`,`class`,`form-control`,`type`,`number`,`id`,`requiredAnswers`);
elest4P.value = fval(component.formObject.requiredAnswers);
let cndNk20 = elz_xdu.formHandler.getError(`requiredAnswers`);
this.setState('stFr7yK', cndNk20);
if (cndNk20) { 
let el3KQzY = eo('div','F27f',null,`class`,`alert alert-danger`);
text(elz_xdu.formHandler.getError(`requiredAnswers`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elK1B7w = eo('div',null,null,`class`,`form-group`);
let el7tdPk = ev('input',null,null,`name`,`${(`image`).toInputName()}`,`type`,`file`);
ec('div');
let eleW3ol = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let eljVlsT = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stCAAdk'});
}
                    this.isReadyToGo();
                }
        });