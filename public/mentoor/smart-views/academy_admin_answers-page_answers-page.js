_Component({
                selector: 'answers-page',
                c: 'AnswersPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','openModal','closeModal','formObject','submit','answerStatus','recordSrc','captureRecord','clearRecord','recordData','isValidForm','submitting'],
                children: {cbJvEmul2:'flk-time-ago',c27p_Vk6Q:'admin-table',cZwNUDXie:'markdown',cqPUEXnWQ:'gold-icon',c5pIm9_ZU:'markdown',ccwkwht_p:'flk-audio-player',cVGxcjgUd:'flk-audio-recorder',cMYK857ao:'flk-modal'},
                render: function (component) {
                    let cmpvDLU = this._lc('c27p_Vk6Q', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,hideAddBtn:true,tableHeading:component.tableHeading},content:(adminTable) => {for (let i in component.items) {
let answer = component.items[i]; 
 let iiCDgE = 'JRMOboS' + i;
let el1nYcw = eo('tr','ZgLt5fpIgDr6' + i+iiCDgE);
let elQuW0k = eo('td','B1Sff'+iiCDgE);
text(answer.id);
ec('td');
let elHuppv = eo('td','Ogdff'+iiCDgE);
text(answer.track.name);
ec('td');
let elTGwRk = eo('td','k_yff'+iiCDgE);
text(answer.topic.title);
ec('td');
let elD9Csk = eo('td','Qi5ff'+iiCDgE);
let cmp9E8B = this._lc('cbJvEmul2', {parent:component,parentTop:adminTable,props:{timestamp:answer.createdAt.timestamp},insideLoop:true,index:"" +iiCDgE});
ec('td');
let elfIstZ = eo('td','Zwpff'+iiCDgE);
text(answer.by.name);
ec('td');
let elXbL6l = eo('td','qJfff'+iiCDgE);
let elFo79d = eo('a','JYIff'+iiCDgE,null, eventListeners, {onclick:[function(e) {var $el = this;component.editItem(answer)}]});
text(trans('view-answers'));
ec('a');
ec('td');
ec('tr');
}
}});
let cndkFp6 = component.openModal;
this.setState('stUp_ZZ', cndkFp6);
if (cndkFp6) { 
let cmpx5D2 = this._lc('cMYK857ao', {parent:component,props:{modalHeader:component.crudOptions.hading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elAF_KX = eo('div',null,null,`class`,`row`);
let elsSqoR = eo('div',null,null,`class`,`col-9`);
let eluVNYN = eo('h1');
text(`Answer`);
ec('h1');
let cmpKKAH = this._lc('cZwNUDXie', {parent:component,parentTop:flkModal,props:{content:component.formObject.answer},state:'stUp_ZZ'});
ec('div');
let elRcEap = eo('div',null,null,`class`,`col-3`);
let elWFk5m = eo('div',null,null,`class`,`m-v-1`);
let elMpxgc = eo('span');
text(`Answer by`);
ec('span');
let elRQfjB = eo('strong',null,null,`class`,`m-h-1`);
text(component.formObject.by.name);
ec('strong');
ec('div');
let elj7QEk = eo('div',null,null,`class`,`m-v-1`);
let el5QG9H = eo('span');
text(`Prize`);
ec('span');
let cmpj3dD = this._lc('cqPUEXnWQ', {parent:component,parentTop:flkModal,props:{coins:component.formObject.topic.prize},state:'stUp_ZZ'});
ec('div');
let el2FMPF = eo('h4',null,null,`class`,`bold m-v-1`);
text(`Quest`);
ec('h4');
let cmpi6PW = this._lc('c5pIm9_ZU', {parent:component,parentTop:flkModal,props:{content:component.formObject.topic.quest || component.formObject.topic.shortDescription},state:'stUp_ZZ'});
ec('div');
ec('div');
let el3UHRo = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el3UHRo.formHandler) {
                    window.cfrmdlr = el3UHRo.formHandler = new FormHandler(el3UHRo, component);
                } else {
                    window.cfrmdlr = el3UHRo.formHandler;
                }
            let el1O84i = eo('div',null,null,`class`,`form-group`);
let elBXDh5 = eo('div',null,null,`class`,`row`);
let elauVx5 = eo('div',null,null,`class`,`col-md-6`);
let elYKYTy = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.status = this.value;}]},`value`,`${fval(component.formObject.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`);
elYKYTy.value = fval(component.formObject.status);
for (let i in component.answerStatus) {
let type = component.answerStatus[i]; 
 let iisYC5 = 'blmeqAm' + i;
let elwBfm1 = eo('option','0KdPR5VKbOTc' + i+iisYC5,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elwBfm1.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let elJXzid = eo('div',null,null,`class`,`col-md-6`);
let elPNN4_ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;}]},`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`prize`)}`,`type`,`number`,`value`,`${ component.formObject.prize || component.formObject.topic.prize  }`,`class`,`form-control`,`id`,`prize`);
ec('div');
ec('div');
ec('div');
let elPxdYT = eo('div',null,null,`class`,`form-group`);
let el4IEDR = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.comment = this.value;}]},`value`,`${fval(component.formObject.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`password`,`class`,`form-control`);
el4IEDR.value = fval(component.formObject.comment);
ec('textarea');
ec('div');
let el7a6Ae = eo('div',null,null,`class`,`form-group`);
let cndNqW3 = component.recordSrc || component.formObject.recordNote;
this.setState('stcR9yZ', cndNqW3);
if (cndNqW3) { 
let cmpACTP = this._lc('ccwkwht_p', {parent:component,parentTop:flkModal,props:{src:component.recordSrc || component.formObject.recordNote},attrs:{src:`${component.recordSrc || component.formObject.recordNote}`},state:'stcR9yZ'});
}let cmpkb11 = this._lc('cVGxcjgUd', {parent:component,parentTop:flkModal,events:{onrecord:function(e) {let $el = this; component.captureRecord(e)},onstart:function(e) {let $el = this; component.formObject.recordNote = null;component.clearRecord()}},state:'stUp_ZZ'});
let cndAqwb = component.recordData;
this.setState('stVkLYP', cndAqwb);
if (cndAqwb) { 
let elAt7eQ = eo('button','l7Af',null, eventListeners, {onclick:[function(e) {var $el = this;component.clearRecord(true)}]},`title`,`${trans(`Remove record`)}`,`type`,`button`,`class`,`btn btn-danger btn-sm remove-record-btn`);
let elwb65g = eo('i','TXHf',null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
}ec('div');
let el9dXDd = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let ellJY4V = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stUp_ZZ'});
}
                    this.isReadyToGo();
                }
        });