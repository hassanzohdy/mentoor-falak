_Component({
                selector: 'einstein-page',
                c: 'EinsteinPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {comIcHdSf:'table-actions',cTtJgjKlk:'admin-table',cQOWKeUt6:'flk-modal'},
                render: function (component) {
                    let cmpym5m = this._lc('cTtJgjKlk', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iiv3Ky = 'FLKsruD' + index;
let elIlhy6 = eo('tr','aw5DFySdCHhr' + index+iiv3Ky);
let els6DmP = eo('td','oGoff'+iiv3Ky);
text( record.id );
ec('td');
let elrDTio = eo('td','AUCff'+iiv3Ky);
text(record.name);
ec('td');
let elgpyel = eo('td','xrcff'+iiv3Ky);
let elrhH9p = ev('img','VjMff'+iiv3Ky,null,`src`,`${record.image}`,`class`,`small-image`,`title`,`${record.name}`,`alt`,`${record.name}`);
ec('td');
let el1a14h = eo('td','QuDff'+iiv3Ky);
let el49pHn = eo('a','4lMff'+iiv3Ky,null,`href`,`/admin/einstein/${ record.id }/puzzles`);
text(`${ record.puzzles.length.format() }
                puzzles`);
ec('a');
ec('td');
let elFScEX = eo('td','L47ff'+iiv3Ky);
text( Number(record.cost).format() );
ec('td');
let el0lq3W = eo('td','zX6ff'+iiv3Ky);
text(record.requiredAnswers);
ec('td');
let elTMiB9 = eo('td','Kk8ff'+iiv3Ky);
let cmpFN1s = this._lc('comIcHdSf', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iiv3Ky});
ec('td');
ec('tr');
}
}});
let cndzWJl = component.openModal;
this.setState('stPQ03r', cndzWJl);
if (cndzWJl) { 
let cmpN4Mr = this._lc('cQOWKeUt6', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elKC3EI = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elKC3EI.formHandler) {
                    window.cfrmdlr = elKC3EI.formHandler = new FormHandler(elKC3EI, component);
                } else {
                    window.cfrmdlr = elKC3EI.formHandler;
                }
            let ele9Gjb = eo('div',null,null,`class`,`form-group`);
let elMxIXw = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elKC3EI.formHandler.addError(`name`, 'required', trans('validation.required'));}return elKC3EI.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`category`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elMxIXw.value = fval(component.formObject.name);
let cndGxAM = elKC3EI.formHandler.getError(`name`);
this.setState('stsfWpR', cndGxAM);
if (cndGxAM) { 
let elTvcdg = eo('div','4SXf',null,`class`,`alert alert-danger`);
text(elKC3EI.formHandler.getError(`name`));
ec('div');
}ec('div');
let elsChnj = eo('div',null,null,`class`,`form-group`);
let elQ1kpp = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elKC3EI.formHandler.addError(`description`, 'required', trans('validation.required'));}return elKC3EI.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elQ1kpp.value = fval(component.formObject.description);
ec('textarea');
let cndj442 = elKC3EI.formHandler.getError(`description`);
this.setState('stC_ykC', cndj442);
if (cndj442) { 
let elxsFL4 = eo('div','hmrf',null,`class`,`alert alert-danger`);
text(elKC3EI.formHandler.getError(`description`));
ec('div');
}ec('div');
let eluD_8c = eo('div',null,null,`class`,`form-group`);
let elQ1zEg = eo('div',null,null,`class`,`row`);
let elqyPw8 = eo('div',null,null,`class`,`col-md-4`);
let elkyudh = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elKC3EI.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elKC3EI.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elkyudh.value = fval(component.formObject.cost);
let cndNnk8 = elKC3EI.formHandler.getError(`cost`);
this.setState('stjSlZT', cndNnk8);
if (cndNnk8) { 
let elX4KSU = eo('div','4o2f',null,`class`,`alert alert-danger`);
text(elKC3EI.formHandler.getError(`cost`));
ec('div');
}ec('div');
let elTbMYZ = eo('div',null,null,`class`,`col-md-4`);
let elXpZSB = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.requiredAnswers = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elKC3EI.formHandler.addError(`requiredAnswers`, 'required', trans('validation.required'));}return elKC3EI.formHandler.removeError(`requiredAnswers`);}]},`value`,`${fval(component.formObject.requiredAnswers)}`,`name`,`${(`requiredAnswers`).toInputName()}`,`placeholder`,`${trans(`required answers`)}`,`class`,`form-control`,`type`,`number`,`id`,`requiredAnswers`);
elXpZSB.value = fval(component.formObject.requiredAnswers);
let cndgpgO = elKC3EI.formHandler.getError(`requiredAnswers`);
this.setState('stRJteB', cndgpgO);
if (cndgpgO) { 
let elVtAj9 = eo('div','Wf8f',null,`class`,`alert alert-danger`);
text(elKC3EI.formHandler.getError(`requiredAnswers`));
ec('div');
}ec('div');
ec('div');
ec('div');
let el3fZs1 = eo('div',null,null,`class`,`form-group`);
let el67Jm7 = ev('input',null,null,`name`,`${(`image`).toInputName()}`,`type`,`file`);
ec('div');
let elgGKx3 = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let eliRBzY = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stPQ03r'});
}
                    this.isReadyToGo();
                }
        });