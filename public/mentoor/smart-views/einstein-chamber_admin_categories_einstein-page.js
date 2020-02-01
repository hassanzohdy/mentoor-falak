_Component({
                selector: 'einstein-page',
                c: 'EinsteinPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {cRo5_z4vL:'table-actions',cD1D1YxHW:'admin-table',cSR5uvDxy:'flk-modal'},
                render: function (component) {
                    let cmpCKwT = this._lc('cD1D1YxHW', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iiw6rB = 'SORQtLL' + index;
let el1rqYm = eo('tr','leL5Ihc1U2KM' + index+iiw6rB);
let el0Bq57 = eo('td','kNZff'+iiw6rB);
text( record.id );
ec('td');
let el4yXzM = eo('td','ZWbff'+iiw6rB);
text(record.name);
ec('td');
let el0yknB = eo('td','xmHff'+iiw6rB);
let elxnW1A = ev('img','xNcff'+iiw6rB,null,`src`,`${record.image}`,`class`,`small-image`,`title`,`${record.name}`,`alt`,`${record.name}`);
ec('td');
let elvDBXT = eo('td','qZRff'+iiw6rB);
let elUqsm8 = eo('a','G5Bff'+iiw6rB,null,`href`,`/admin/einstein/${ record.id }/puzzles`);
text(`${ record.puzzles.length.format() }
                puzzles`);
ec('a');
ec('td');
let elr55Uh = eo('td','8s8ff'+iiw6rB);
text( Number(record.cost).format() );
ec('td');
let elyWNEx = eo('td','YnLff'+iiw6rB);
text(record.requiredAnswers);
ec('td');
let elsGYCU = eo('td','LAPff'+iiw6rB);
let cmp8WLj = this._lc('cRo5_z4vL', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iiw6rB});
ec('td');
ec('tr');
}
}});
let cndtifs = component.openModal;
this.setState('stc9ePa', cndtifs);
if (cndtifs) { 
let cmpIaUn = this._lc('cSR5uvDxy', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elfQO1n = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elfQO1n.formHandler) {
                    window.cfrmdlr = elfQO1n.formHandler = new FormHandler(elfQO1n, component);
                } else {
                    window.cfrmdlr = elfQO1n.formHandler;
                }
            let elXeiWQ = eo('div',null,null,`class`,`form-group`);
let elKAAFC = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elfQO1n.formHandler.addError(`name`, 'required', trans('validation.required'));}return elfQO1n.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`category`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elKAAFC.value = fval(component.formObject.name);
let cndlu6T = elfQO1n.formHandler.getError(`name`);
this.setState('stnzdCQ', cndlu6T);
if (cndlu6T) { 
let elLUu73 = eo('div','qJPf',null,`class`,`alert alert-danger`);
text(elfQO1n.formHandler.getError(`name`));
ec('div');
}ec('div');
let elqoFlJ = eo('div',null,null,`class`,`form-group`);
let elNIpjq = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elfQO1n.formHandler.addError(`description`, 'required', trans('validation.required'));}return elfQO1n.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elNIpjq.value = fval(component.formObject.description);
ec('textarea');
let cnd_B3m = elfQO1n.formHandler.getError(`description`);
this.setState('st6q8DN', cnd_B3m);
if (cnd_B3m) { 
let elNTDfs = eo('div','QK9f',null,`class`,`alert alert-danger`);
text(elfQO1n.formHandler.getError(`description`));
ec('div');
}ec('div');
let elH2d5c = eo('div',null,null,`class`,`form-group`);
let elcScG4 = eo('div',null,null,`class`,`row`);
let elUvFxk = eo('div',null,null,`class`,`col-md-4`);
let elxGxyT = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elfQO1n.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elfQO1n.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elxGxyT.value = fval(component.formObject.cost);
let cndTK3o = elfQO1n.formHandler.getError(`cost`);
this.setState('st3MBUw', cndTK3o);
if (cndTK3o) { 
let elmyN0H = eo('div','bE6f',null,`class`,`alert alert-danger`);
text(elfQO1n.formHandler.getError(`cost`));
ec('div');
}ec('div');
let elaRkyp = eo('div',null,null,`class`,`col-md-4`);
let elC_rji = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.requiredAnswers = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elfQO1n.formHandler.addError(`requiredAnswers`, 'required', trans('validation.required'));}return elfQO1n.formHandler.removeError(`requiredAnswers`);}]},`value`,`${fval(component.formObject.requiredAnswers)}`,`name`,`${(`requiredAnswers`).toInputName()}`,`placeholder`,`${trans(`required answers`)}`,`class`,`form-control`,`type`,`number`,`id`,`requiredAnswers`);
elC_rji.value = fval(component.formObject.requiredAnswers);
let cndz8uz = elfQO1n.formHandler.getError(`requiredAnswers`);
this.setState('stC17KJ', cndz8uz);
if (cndz8uz) { 
let elcC_VQ = eo('div','rg_f',null,`class`,`alert alert-danger`);
text(elfQO1n.formHandler.getError(`requiredAnswers`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elD1KSf = eo('div',null,null,`class`,`form-group`);
let elFIcEH = ev('input',null,null,`name`,`${(`image`).toInputName()}`,`type`,`file`);
ec('div');
let elKszcE = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elavMVY = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stc9ePa'});
}
                    this.isReadyToGo();
                }
        });