_Component({
                selector: 'answers-page',
                c: 'AnswersPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','openModal','closeModal','formObject','submit','answerStatus','recordSrc','captureRecord','clearRecord','recordData','isValidForm','submitting'],
                children: {c4P3Dx12M:'flk-time-ago',cBAVn58Qy:'admin-table',cecv5zf9i:'markdown',cTrrOTRlG:'gold-icon',cpMBRBxAP:'markdown',cVpmebzEq:'flk-audio-player',cRCnBiVSm:'flk-audio-recorder',cNS9tEs20:'flk-modal'},
                render: function (component) {
                    let cmpgnIe = this._lc('cBAVn58Qy', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,hideAddBtn:true,tableHeading:component.tableHeading},content:(adminTable) => {for (let i in component.items) {
let answer = component.items[i]; 
 let iidXDX = 'wyjILu2' + i;
let el5WpgW = eo('tr','Ohucpg2WBTxD' + i+iidXDX);
let elrDsEf = eo('td','9Beff'+iidXDX);
text(answer.id);
ec('td');
let el1GZjw = eo('td','96Eff'+iidXDX);
text(answer.track.name);
ec('td');
let elheNaJ = eo('td','_2nff'+iidXDX);
text(answer.topic.title);
ec('td');
let eluLu5I = eo('td','YKZff'+iidXDX);
let cmpdmND = this._lc('c4P3Dx12M', {parent:component,parentTop:adminTable,props:{timestamp:answer.createdAt.timestamp},insideLoop:true,index:"" +iidXDX});
ec('td');
let elDU_qa = eo('td','sayff'+iidXDX);
text(answer.by.name);
ec('td');
let elSEiWy = eo('td','ungff'+iidXDX);
let ele24Bb = eo('a','hRNff'+iidXDX,null, eventListeners, {onclick:[function(e) {var $el = this;component.editItem(answer)}]});
text(trans('view-answers'));
ec('a');
ec('td');
ec('tr');
}
}});
let cndBJpY = component.openModal;
this.setState('stMMHwa', cndBJpY);
if (cndBJpY) { 
let cmpUEk_ = this._lc('cNS9tEs20', {parent:component,props:{modalHeader:component.crudOptions.hading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elh1d8X = eo('div',null,null,`class`,`row`);
let elr80FU = eo('div',null,null,`class`,`col-9`);
let elN9JUc = eo('h1');
text(`Answer`);
ec('h1');
let cmpvGSZ = this._lc('cecv5zf9i', {parent:component,parentTop:flkModal,props:{content:component.formObject.answer},state:'stMMHwa'});
ec('div');
let ellEZvz = eo('div',null,null,`class`,`col-3`);
let elgHoVw = eo('div',null,null,`class`,`m-v-1`);
let el6hGJ4 = eo('span');
text(`Answer by`);
ec('span');
let elF_x1s = eo('strong',null,null,`class`,`m-h-1`);
text(component.formObject.by.name);
ec('strong');
ec('div');
let elTK1Bh = eo('div',null,null,`class`,`m-v-1`);
let ellc72U = eo('span');
text(`Prize`);
ec('span');
let cmpDaJk = this._lc('cTrrOTRlG', {parent:component,parentTop:flkModal,props:{coins:component.formObject.topic.prize},state:'stMMHwa'});
ec('div');
let elfYqAD = eo('h4',null,null,`class`,`bold m-v-1`);
text(`Quest`);
ec('h4');
let cmpeeKv = this._lc('cpMBRBxAP', {parent:component,parentTop:flkModal,props:{content:component.formObject.topic.quest || component.formObject.topic.shortDescription},state:'stMMHwa'});
ec('div');
ec('div');
let elMmWl3 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elMmWl3.formHandler) {
                    window.cfrmdlr = elMmWl3.formHandler = new FormHandler(elMmWl3, component);
                } else {
                    window.cfrmdlr = elMmWl3.formHandler;
                }
            let elypCba = eo('div',null,null,`class`,`form-group`);
let elbQGfo = eo('div',null,null,`class`,`row`);
let el_Llyz = eo('div',null,null,`class`,`col-md-6`);
let elGJvbW = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.status = this.value;}]},`value`,`${fval(component.formObject.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`);
elGJvbW.value = fval(component.formObject.status);
for (let i in component.answerStatus) {
let type = component.answerStatus[i]; 
 let iipU6L = 'tmDq_uG' + i;
let el4Bnvh = eo('option','6jC9OPZYYMhB' + i+iipU6L,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
el4Bnvh.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let elIO6W2 = eo('div',null,null,`class`,`col-md-6`);
let elyiLHP = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;}]},`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`prize`)}`,`type`,`number`,`value`,`${ component.formObject.prize || component.formObject.topic.prize  }`,`class`,`form-control`,`id`,`prize`);
ec('div');
ec('div');
ec('div');
let elssm23 = eo('div',null,null,`class`,`form-group`);
let eluQ1_r = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.comment = this.value;}]},`value`,`${fval(component.formObject.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`password`,`class`,`form-control`);
eluQ1_r.value = fval(component.formObject.comment);
ec('textarea');
ec('div');
let elPpknS = eo('div',null,null,`class`,`form-group`);
let cndbfQL = component.recordSrc || component.formObject.recordNote;
this.setState('stHiB12', cndbfQL);
if (cndbfQL) { 
let cmpVf5_ = this._lc('cVpmebzEq', {parent:component,parentTop:flkModal,props:{src:component.recordSrc || component.formObject.recordNote},attrs:{src:`${component.recordSrc || component.formObject.recordNote}`},state:'stHiB12'});
}let cmpxpaM = this._lc('cRCnBiVSm', {parent:component,parentTop:flkModal,events:{onrecord:function(e) {let $el = this; component.captureRecord(e)},onstart:function(e) {let $el = this; component.formObject.recordNote = null;component.clearRecord()}},state:'stMMHwa'});
let cndU48o = component.recordData;
this.setState('st5yEjE', cndU48o);
if (cndU48o) { 
let elVjGkV = eo('button','ccRf',null, eventListeners, {onclick:[function(e) {var $el = this;component.clearRecord(true)}]},`title`,`${trans(`Remove record`)}`,`type`,`button`,`class`,`btn btn-danger btn-sm remove-record-btn`);
let elYkAEj = eo('i','_snf',null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');
}ec('div');
let elAg5RG = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elOaGxa = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stMMHwa'});
}
                    this.isReadyToGo();
                }
        });