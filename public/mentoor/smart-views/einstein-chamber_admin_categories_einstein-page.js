_Component({
                selector: 'einstein-page',
                c: 'EinsteinPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {cAvA4e9jq:'table-actions',cuVf2h32o:'admin-table',cJ0WCOLhf:'flk-modal'},
                render: function (component) {
                    let cmp2yLq = this._lc('cuVf2h32o', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iiexZO = 'Sro6Gkw' + index;
let elZSiys = eo('tr','mryM681TScYt' + index+iiexZO);
let eltQYLn = eo('td','mhKff'+iiexZO);
text( record.id );
ec('td');
let elxyTqw = eo('td','Okwff'+iiexZO);
text(record.name);
ec('td');
let elh6UT_ = eo('td','lSQff'+iiexZO);
let el33nRh = ev('img','71Off'+iiexZO,null,`src`,`${record.image}`,`class`,`small-image`,`title`,`${record.name}`,`alt`,`${record.name}`);
ec('td');
let elWms5F = eo('td','tVQff'+iiexZO);
let elBVz_c = eo('a','DwZff'+iiexZO,null,`href`,`/admin/einstein/${ record.id }/puzzles`);
text(`${ record.puzzles.length.format() }
                puzzles`);
ec('a');
ec('td');
let elxTxuW = eo('td','5Elff'+iiexZO);
text( Number(record.cost).format() );
ec('td');
let elJ9OrQ = eo('td','k5rff'+iiexZO);
text(record.requiredAnswers);
ec('td');
let elsz6Ny = eo('td','9M1ff'+iiexZO);
let cmpamxD = this._lc('cAvA4e9jq', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iiexZO});
ec('td');
ec('tr');
}
}});
let cndVWNo = component.openModal;
this.setState('stHMHij', cndVWNo);
if (cndVWNo) { 
let cmp3DdU = this._lc('cJ0WCOLhf', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elTvdGE = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elTvdGE.formHandler) {
                    window.cfrmdlr = elTvdGE.formHandler = new FormHandler(elTvdGE, component);
                } else {
                    window.cfrmdlr = elTvdGE.formHandler;
                }
            let elBDwe5 = eo('div',null,null,`class`,`form-group`);
let el828eA = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTvdGE.formHandler.addError(`name`, 'required', trans('validation.required'));}return elTvdGE.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`category`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el828eA.value = fval(component.formObject.name);
let cnd3xoD = elTvdGE.formHandler.getError(`name`);
this.setState('stD5obH', cnd3xoD);
if (cnd3xoD) { 
let elt3tuS = eo('div','IGXf',null,`class`,`alert alert-danger`);
text(elTvdGE.formHandler.getError(`name`));
ec('div');
}ec('div');
let elTvwo_ = eo('div',null,null,`class`,`form-group`);
let el0zMyI = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTvdGE.formHandler.addError(`description`, 'required', trans('validation.required'));}return elTvdGE.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
el0zMyI.value = fval(component.formObject.description);
ec('textarea');
let cndrmZe = elTvdGE.formHandler.getError(`description`);
this.setState('stMZoi2', cndrmZe);
if (cndrmZe) { 
let elnjR6N = eo('div','xMZf',null,`class`,`alert alert-danger`);
text(elTvdGE.formHandler.getError(`description`));
ec('div');
}ec('div');
let el1Nh5x = eo('div',null,null,`class`,`form-group`);
let elsN7ZE = eo('div',null,null,`class`,`row`);
let elvhjyR = eo('div',null,null,`class`,`col-md-4`);
let elaQZZB = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTvdGE.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elTvdGE.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elaQZZB.value = fval(component.formObject.cost);
let cnddjUF = elTvdGE.formHandler.getError(`cost`);
this.setState('stYAYIH', cnddjUF);
if (cnddjUF) { 
let el3ialp = eo('div','QbVf',null,`class`,`alert alert-danger`);
text(elTvdGE.formHandler.getError(`cost`));
ec('div');
}ec('div');
let elRrycm = eo('div',null,null,`class`,`col-md-4`);
let elOh2y0 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.requiredAnswers = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTvdGE.formHandler.addError(`requiredAnswers`, 'required', trans('validation.required'));}return elTvdGE.formHandler.removeError(`requiredAnswers`);}]},`value`,`${fval(component.formObject.requiredAnswers)}`,`name`,`${(`requiredAnswers`).toInputName()}`,`placeholder`,`${trans(`required answers`)}`,`class`,`form-control`,`type`,`number`,`id`,`requiredAnswers`);
elOh2y0.value = fval(component.formObject.requiredAnswers);
let cndn8qi = elTvdGE.formHandler.getError(`requiredAnswers`);
this.setState('stDo33M', cndn8qi);
if (cndn8qi) { 
let elobMYR = eo('div','Umnf',null,`class`,`alert alert-danger`);
text(elTvdGE.formHandler.getError(`requiredAnswers`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elLlaIg = eo('div',null,null,`class`,`form-group`);
let elIU0j4 = ev('input',null,null,`name`,`${(`image`).toInputName()}`,`type`,`file`);
ec('div');
let elkjel1 = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let ell6Uph = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stHMHij'});
}
                    this.isReadyToGo();
                }
        });