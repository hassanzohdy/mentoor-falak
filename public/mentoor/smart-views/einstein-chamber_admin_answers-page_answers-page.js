_Component({
                selector: 'einstein-answers-page',
                c: 'EinsteinAnswers', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','openModal','closeModal','formObject','submit','answerStatus','recordSrc','captureRecord','clearRecord','recordData','isValidForm','submitting'],
                children: {cZguP3sgD:'admin-table',c87EL4hq8:'markdown',cY35TD41l:'gold-icon',cNoKOoOmz:'markdown',ceTapKZFt:'flk-audio-player',cOLUsNmSL:'flk-audio-recorder',czIQ_PgQC:'flk-modal'},
                render: function (component) {
                    let cmpHceO = this._lc('cZguP3sgD', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,hideAddBtn:true,tableHeading:component.tableHeading},content:(adminTable) => {for (let i in component.items) {
let record = component.items[i]; 
 let iiu3L2 = 'K_TKo7u' + i;
let elMTc8m = eo('tr','tVV4h8IP6xGc' + i+iiu3L2);
let elINEtf = eo('td','Oceff'+iiu3L2);
text(record.id);
ec('td');
let elB5Hap = eo('td','t6uff'+iiu3L2);
text(record.category.name);
ec('td');
let elweEgR = eo('td','Zvzff'+iiu3L2);
text(record.title);
ec('td');
let elqfdWo = eo('td','6ikff'+iiu3L2);
text(record.by.name);
ec('td');
let elE3w8V = eo('td','txlff'+iiu3L2);
let elYoIVK = eo('a','w08ff'+iiu3L2,null, eventListeners, {onclick:[function(e) {var $el = this;component.editItem(record)}]});
text(trans('view'));
ec('a');
ec('td');
ec('tr');
}
}});
let cndq6o4 = component.openModal;
this.setState('st3RbjL', cndq6o4);
if (cndq6o4) { 
let cmpG4jn = this._lc('czIQ_PgQC', {parent:component,props:{modalHeader:component.crudOptions.hading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elIFz9L = eo('div',null,null,`class`,`row`);
let elXr7is = eo('div',null,null,`class`,`col-9`);
let eljMFxT = eo('h1');
text(`Answer`);
ec('h1');
let cndemkJ = component.formObject.answer;
this.setState('stMbtFp', cndemkJ);
if (cndemkJ) { 
let cmpkIGV = this._lc('c87EL4hq8', {parent:component,parentTop:flkModal,props:{content:component.formObject.answer},state:'stMbtFp'});
}ec('div');
let el8NKyT = eo('div',null,null,`class`,`col-3`);
let el9r5Ns = eo('div',null,null,`class`,`m-v-1`);
let elbuKLP = eo('span');
text(`Answer by`);
ec('span');
let el8xprk = eo('strong',null,null,`class`,`m-h-1`);
text(component.formObject.by.name);
ec('strong');
ec('div');
let elVGxpR = eo('div',null,null,`class`,`m-v-1`);
let elP20fS = eo('span');
text(`Reward`);
ec('span');
let cmpTjc1 = this._lc('cY35TD41l', {parent:component,parentTop:flkModal,props:{coins:component.formObject.reward},state:'st3RbjL'});
ec('div');
let elhOEx0 = eo('h4',null,null,`class`,`bold m-v-1`);
text(`Quest`);
ec('h4');
let cmpBEhr = this._lc('cNoKOoOmz', {parent:component,parentTop:flkModal,props:{content:component.formObject.quest},state:'st3RbjL'});
ec('div');
ec('div');
let elVj7xa = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elVj7xa.formHandler) {
                    window.cfrmdlr = elVj7xa.formHandler = new FormHandler(elVj7xa, component);
                } else {
                    window.cfrmdlr = elVj7xa.formHandler;
                }
            let elZyttu = eo('div',null,null,`class`,`form-group`);
let el1ksUe = eo('div',null,null,`class`,`row`);
let el7fiaF = eo('div',null,null,`class`,`col-md-6`);
let eliy7GV = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.status = this.value;}]},`value`,`${fval(component.formObject.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`,`id`,`pepo`);
eliy7GV.value = fval(component.formObject.status);
for (let i in component.answerStatus) {
let type = component.answerStatus[i]; 
 let ii3DeQ = 'j6dZmbz' + i;
let elGZnY7 = eo('option','lIUgZdJUlsGD' + i+ii3DeQ,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elGZnY7.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let elGLKiN = eo('div',null,null,`class`,`col-md-6`);
let elccHzg = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.reward = this.value;}]},`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`type`,`number`,`value`,`${ component.formObject.reward  }`,`class`,`form-control`,`id`,`reward`);
ec('div');
ec('div');
ec('div');
let elU_2LH = eo('div',null,null,`class`,`form-group`);
let elTX1xt = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.comment = this.value;}]},`value`,`${fval(component.formObject.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elTX1xt.value = fval(component.formObject.comment);
ec('textarea');
ec('div');
let eltssiz = eo('div',null,null,`class`,`form-group`);
let cndcdbS = component.recordSrc || component.formObject.recordNote;
this.setState('strD37a', cndcdbS);
if (cndcdbS) { 
let cmpUwSx = this._lc('ceTapKZFt', {parent:component,parentTop:flkModal,props:{src:component.recordSrc || component.formObject.recordNote},attrs:{src:`${component.recordSrc || component.formObject.recordNote}`},state:'strD37a'});
}let cmpX8N8 = this._lc('cOLUsNmSL', {parent:component,parentTop:flkModal,events:{onrecord:function(e) {let $el = this; component.captureRecord(e)},onstart:function(e) {let $el = this; component.formObject.recordNote = null;component.clearRecord()}},state:'st3RbjL'});
let cndrXjV = component.recordData;
this.setState('stMnxC_', cndrXjV);
if (cndrXjV) { 
let elH6cy0 = eo('button','sWJf',null, eventListeners, {onclick:[function(e) {var $el = this;component.clearRecord(true)}]},`title`,`${trans(`Remove record`)}`,`type`,`button`,`class`,`btn btn-danger btn-sm remove-record-btn`);
let ellF9le = eo('i','emHf',null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
}ec('div');
let elBqJgg = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elF5SSj = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'st3RbjL'});
}
                    this.isReadyToGo();
                }
        });