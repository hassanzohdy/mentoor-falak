_Component({
                selector: 'einstein-page',
                c: 'EinsteinPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {cY4eTIYcT:'table-actions',ctPmh_ss4:'admin-table',cAQVISlKz:'flk-modal'},
                render: function (component) {
                    let cmpPLoW = this._lc('ctPmh_ss4', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iijfo0 = 'REpb2Zw' + index;
let elQRpRw = eo('tr','y_EKNwEptMpE' + index+iijfo0);
let eluCRRp = eo('td','aSSff'+iijfo0);
text( record.id );
ec('td');
let elMYUq4 = eo('td','cQKff'+iijfo0);
text(record.name);
ec('td');
let elt1esx = eo('td','TGEff'+iijfo0);
let elcbNox = ev('img','Xwzff'+iijfo0,null,`src`,`${record.image}`,`class`,`small-image`,`title`,`${record.name}`,`alt`,`${record.name}`);
ec('td');
let elFawuK = eo('td','j8pff'+iijfo0);
let elgjmdV = eo('a','E8tff'+iijfo0,null,`href`,`/admin/einstein/${ record.id }/puzzles`);
text(`${ record.puzzles.length.format() }
                puzzles`);
ec('a');
ec('td');
let elBnnW6 = eo('td','BcBff'+iijfo0);
text( Number(record.cost).format() );
ec('td');
let elmmyR1 = eo('td','mfjff'+iijfo0);
text(record.requiredAnswers);
ec('td');
let el45vrS = eo('td','_FYff'+iijfo0);
let cmphpPo = this._lc('cY4eTIYcT', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iijfo0});
ec('td');
ec('tr');
}
}});
let cndx_Dx = component.openModal;
this.setState('stOQ3LD', cndx_Dx);
if (cndx_Dx) { 
let cmp98VV = this._lc('cAQVISlKz', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elJs_5b = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elJs_5b.formHandler) {
                    window.cfrmdlr = elJs_5b.formHandler = new FormHandler(elJs_5b, component);
                } else {
                    window.cfrmdlr = elJs_5b.formHandler;
                }
            let eleXIHg = eo('div',null,null,`class`,`form-group`);
let elJJP_h = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elJs_5b.formHandler.addError(`name`, 'required', trans('validation.required'));}return elJs_5b.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`category`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elJJP_h.value = fval(component.formObject.name);
let cndsvLo = elJs_5b.formHandler.getError(`name`);
this.setState('stRfibD', cndsvLo);
if (cndsvLo) { 
let elzdRxy = eo('div','GvNf',null,`class`,`alert alert-danger`);
text(elJs_5b.formHandler.getError(`name`));
ec('div');
}ec('div');
let elVJFbC = eo('div',null,null,`class`,`form-group`);
let elCqOtq = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elJs_5b.formHandler.addError(`description`, 'required', trans('validation.required'));}return elJs_5b.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elCqOtq.value = fval(component.formObject.description);
ec('textarea');
let cndYpgr = elJs_5b.formHandler.getError(`description`);
this.setState('stfIuOY', cndYpgr);
if (cndYpgr) { 
let elTCKMo = eo('div','7Xvf',null,`class`,`alert alert-danger`);
text(elJs_5b.formHandler.getError(`description`));
ec('div');
}ec('div');
let elweWqi = eo('div',null,null,`class`,`form-group`);
let elT4lY3 = eo('div',null,null,`class`,`row`);
let elA9vYz = eo('div',null,null,`class`,`col-md-4`);
let elWG9Eh = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elJs_5b.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elJs_5b.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elWG9Eh.value = fval(component.formObject.cost);
let cndrGJz = elJs_5b.formHandler.getError(`cost`);
this.setState('stXoQ4l', cndrGJz);
if (cndrGJz) { 
let elomV3D = eo('div','RQRf',null,`class`,`alert alert-danger`);
text(elJs_5b.formHandler.getError(`cost`));
ec('div');
}ec('div');
let el26ztO = eo('div',null,null,`class`,`col-md-4`);
let elvGZ47 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.requiredAnswers = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elJs_5b.formHandler.addError(`requiredAnswers`, 'required', trans('validation.required'));}return elJs_5b.formHandler.removeError(`requiredAnswers`);}]},`value`,`${fval(component.formObject.requiredAnswers)}`,`name`,`${(`requiredAnswers`).toInputName()}`,`placeholder`,`${trans(`required answers`)}`,`class`,`form-control`,`type`,`number`,`id`,`requiredAnswers`);
elvGZ47.value = fval(component.formObject.requiredAnswers);
let cndeGlU = elJs_5b.formHandler.getError(`requiredAnswers`);
this.setState('stxR_IF', cndeGlU);
if (cndeGlU) { 
let elHZFlf = eo('div','6qBf',null,`class`,`alert alert-danger`);
text(elJs_5b.formHandler.getError(`requiredAnswers`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elAXfzj = eo('div',null,null,`class`,`form-group`);
let elsOuG0 = ev('input',null,null,`name`,`${(`image`).toInputName()}`,`type`,`file`);
ec('div');
let elrCJBz = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let el4k0ju = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stOQ3LD'});
}
                    this.isReadyToGo();
                }
        });