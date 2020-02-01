_Component({
                selector: 'einstein-page',
                c: 'EinsteinPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {cw5Y4tudt:'table-actions',c3D2qKCVB:'admin-table',cBiFly6HJ:'flk-modal'},
                render: function (component) {
                    let cmpSqnB = this._lc('c3D2qKCVB', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iiTWwE = 'RUvHQlE' + index;
let elRl77Y = eo('tr','8PcOsq679Ngn' + index+iiTWwE);
let elZ18cX = eo('td','7LYff'+iiTWwE);
text( record.id );
ec('td');
let eleVuPn = eo('td','2aQff'+iiTWwE);
text(record.name);
ec('td');
let eltxv4g = eo('td','6j6ff'+iiTWwE);
let elCoJap = ev('img','0kTff'+iiTWwE,null,`src`,`${record.image}`,`class`,`small-image`,`title`,`${record.name}`,`alt`,`${record.name}`);
ec('td');
let elC_xB2 = eo('td','026ff'+iiTWwE);
let el0zPdg = eo('a','oBCff'+iiTWwE,null,`href`,`/admin/einstein/${ record.id }/puzzles`);
text(`${ record.puzzles.length.format() }
                puzzles`);
ec('a');
ec('td');
let eluLdIT = eo('td','R7Kff'+iiTWwE);
text( Number(record.cost).format() );
ec('td');
let elCb0Q4 = eo('td','YBvff'+iiTWwE);
text(record.requiredAnswers);
ec('td');
let elN5K1H = eo('td','CSgff'+iiTWwE);
let cmpN0_B = this._lc('cw5Y4tudt', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iiTWwE});
ec('td');
ec('tr');
}
}});
let cndwEi1 = component.openModal;
this.setState('stSg8QB', cndwEi1);
if (cndwEi1) { 
let cmpLfHl = this._lc('cBiFly6HJ', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elxHCdz = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elxHCdz.formHandler) {
                    window.cfrmdlr = elxHCdz.formHandler = new FormHandler(elxHCdz, component);
                } else {
                    window.cfrmdlr = elxHCdz.formHandler;
                }
            let el33KV5 = eo('div',null,null,`class`,`form-group`);
let elMV7y7 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elxHCdz.formHandler.addError(`name`, 'required', trans('validation.required'));}return elxHCdz.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`category`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elMV7y7.value = fval(component.formObject.name);
let cndCgoP = elxHCdz.formHandler.getError(`name`);
this.setState('sty6S3T', cndCgoP);
if (cndCgoP) { 
let elQAeTT = eo('div','UtLf',null,`class`,`alert alert-danger`);
text(elxHCdz.formHandler.getError(`name`));
ec('div');
}ec('div');
let elpLm2K = eo('div',null,null,`class`,`form-group`);
let elhuvD8 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elxHCdz.formHandler.addError(`description`, 'required', trans('validation.required'));}return elxHCdz.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elhuvD8.value = fval(component.formObject.description);
ec('textarea');
let cndOUzI = elxHCdz.formHandler.getError(`description`);
this.setState('stKZ1Mr', cndOUzI);
if (cndOUzI) { 
let elnhLyX = eo('div','DtYf',null,`class`,`alert alert-danger`);
text(elxHCdz.formHandler.getError(`description`));
ec('div');
}ec('div');
let elJ3OJ9 = eo('div',null,null,`class`,`form-group`);
let el3UFQH = eo('div',null,null,`class`,`row`);
let elRD9uP = eo('div',null,null,`class`,`col-md-4`);
let elDKwFB = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elxHCdz.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elxHCdz.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elDKwFB.value = fval(component.formObject.cost);
let cndqdtP = elxHCdz.formHandler.getError(`cost`);
this.setState('stNw6FB', cndqdtP);
if (cndqdtP) { 
let el41YEv = eo('div','ph0f',null,`class`,`alert alert-danger`);
text(elxHCdz.formHandler.getError(`cost`));
ec('div');
}ec('div');
let eljnoAV = eo('div',null,null,`class`,`col-md-4`);
let eluUiw7 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.requiredAnswers = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elxHCdz.formHandler.addError(`requiredAnswers`, 'required', trans('validation.required'));}return elxHCdz.formHandler.removeError(`requiredAnswers`);}]},`value`,`${fval(component.formObject.requiredAnswers)}`,`name`,`${(`requiredAnswers`).toInputName()}`,`placeholder`,`${trans(`required answers`)}`,`class`,`form-control`,`type`,`number`,`id`,`requiredAnswers`);
eluUiw7.value = fval(component.formObject.requiredAnswers);
let cndoUC3 = elxHCdz.formHandler.getError(`requiredAnswers`);
this.setState('stAz3aM', cndoUC3);
if (cndoUC3) { 
let elLnrCs = eo('div','SBnf',null,`class`,`alert alert-danger`);
text(elxHCdz.formHandler.getError(`requiredAnswers`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elvTtxJ = eo('div',null,null,`class`,`form-group`);
let elHPCFv = ev('input',null,null,`name`,`${(`image`).toInputName()}`,`type`,`file`);
ec('div');
let elncuO5 = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let eljYg_h = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stSg8QB'});
}
                    this.isReadyToGo();
                }
        });