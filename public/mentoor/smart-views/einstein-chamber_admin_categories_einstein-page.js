_Component({
                selector: 'einstein-page',
                c: 'EinsteinPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {c7r2U6l56:'table-actions',cx90etwHi:'admin-table',cZpbQTQjm:'flk-modal'},
                render: function (component) {
                    let cmpwDrT = this._lc('cx90etwHi', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iiu_q2 = 'UhmqkTX' + index;
let elJZJGT = eo('tr','9RWqyG_J8MxZ' + index+iiu_q2);
let el8qUNU = eo('td','NUdff'+iiu_q2);
text( record.id );
ec('td');
let elrUunS = eo('td','Cd8ff'+iiu_q2);
text(record.name);
ec('td');
let elV_Szy = eo('td','PzOff'+iiu_q2);
let elf9rAf = ev('img','6JZff'+iiu_q2,null,`src`,`${record.image}`,`class`,`small-image`,`title`,`${record.name}`,`alt`,`${record.name}`);
ec('td');
let elg9UCm = eo('td','dyGff'+iiu_q2);
let elhcTuE = eo('a','XA4ff'+iiu_q2,null,`href`,`/admin/einstein/${ record.id }/puzzles`);
text(`${ record.puzzles.length.format() }
                puzzles`);
ec('a');
ec('td');
let elWqORe = eo('td','gG1ff'+iiu_q2);
text( Number(record.cost).format() );
ec('td');
let el6igs3 = eo('td','J3_ff'+iiu_q2);
text(record.requiredAnswers);
ec('td');
let el0gsCO = eo('td','7jyff'+iiu_q2);
let cmpPkC2 = this._lc('c7r2U6l56', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iiu_q2});
ec('td');
ec('tr');
}
}});
let cndYnBS = component.openModal;
this.setState('st9aUcz', cndYnBS);
if (cndYnBS) { 
let cmpkqPQ = this._lc('cZpbQTQjm', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let eljI9u3 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! eljI9u3.formHandler) {
                    window.cfrmdlr = eljI9u3.formHandler = new FormHandler(eljI9u3, component);
                } else {
                    window.cfrmdlr = eljI9u3.formHandler;
                }
            let elr3OCI = eo('div',null,null,`class`,`form-group`);
let elHTV4Y = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eljI9u3.formHandler.addError(`name`, 'required', trans('validation.required'));}return eljI9u3.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`category`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elHTV4Y.value = fval(component.formObject.name);
let cndXvpZ = eljI9u3.formHandler.getError(`name`);
this.setState('stWKXI1', cndXvpZ);
if (cndXvpZ) { 
let eluaIIK = eo('div','mttf',null,`class`,`alert alert-danger`);
text(eljI9u3.formHandler.getError(`name`));
ec('div');
}ec('div');
let elwN7a8 = eo('div',null,null,`class`,`form-group`);
let elL51oA = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eljI9u3.formHandler.addError(`description`, 'required', trans('validation.required'));}return eljI9u3.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elL51oA.value = fval(component.formObject.description);
ec('textarea');
let cnd6dLh = eljI9u3.formHandler.getError(`description`);
this.setState('stj2kqB', cnd6dLh);
if (cnd6dLh) { 
let elDz8Z4 = eo('div','Y43f',null,`class`,`alert alert-danger`);
text(eljI9u3.formHandler.getError(`description`));
ec('div');
}ec('div');
let elst6SW = eo('div',null,null,`class`,`form-group`);
let elEEAJf = eo('div',null,null,`class`,`row`);
let elHsV2K = eo('div',null,null,`class`,`col-md-4`);
let eloMosx = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eljI9u3.formHandler.addError(`cost`, 'required', trans('validation.required'));}return eljI9u3.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
eloMosx.value = fval(component.formObject.cost);
let cnd0_A5 = eljI9u3.formHandler.getError(`cost`);
this.setState('st3fIJE', cnd0_A5);
if (cnd0_A5) { 
let elY5FdG = eo('div','Elof',null,`class`,`alert alert-danger`);
text(eljI9u3.formHandler.getError(`cost`));
ec('div');
}ec('div');
let el8w3Tz = eo('div',null,null,`class`,`col-md-4`);
let elMjYuP = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.requiredAnswers = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eljI9u3.formHandler.addError(`requiredAnswers`, 'required', trans('validation.required'));}return eljI9u3.formHandler.removeError(`requiredAnswers`);}]},`value`,`${fval(component.formObject.requiredAnswers)}`,`name`,`${(`requiredAnswers`).toInputName()}`,`placeholder`,`${trans(`required answers`)}`,`class`,`form-control`,`type`,`number`,`id`,`requiredAnswers`);
elMjYuP.value = fval(component.formObject.requiredAnswers);
let cndXCia = eljI9u3.formHandler.getError(`requiredAnswers`);
this.setState('stVt5W7', cndXCia);
if (cndXCia) { 
let elASyaJ = eo('div','pVMf',null,`class`,`alert alert-danger`);
text(eljI9u3.formHandler.getError(`requiredAnswers`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elJB2jG = eo('div',null,null,`class`,`form-group`);
let elHYv0o = ev('input',null,null,`name`,`${(`image`).toInputName()}`,`type`,`file`);
ec('div');
let elkN6he = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elZNIq2 = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'st9aUcz'});
}
                    this.isReadyToGo();
                }
        });