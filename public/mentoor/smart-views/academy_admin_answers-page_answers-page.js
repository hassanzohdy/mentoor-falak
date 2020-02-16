_Component({
                selector: 'answers-page',
                c: 'AnswersPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','openModal','closeModal','formObject','submit','answerStatus','recordSrc','captureRecord','clearRecord','recordData','isValidForm','submitting'],
                children: {cxP_QiHkE:'flk-time-ago',cDIo6gbSG:'admin-table',c47QX3aIV:'markdown',ctURnUThm:'gold-icon',ckKxtAZao:'markdown',cnasdXfUh:'flk-audio-player',cgCjTsSfq:'flk-audio-recorder',cXYQaiAjs:'flk-modal'},
                render: function (component) {
                    let cmpjq7p = this._lc('cDIo6gbSG', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,hideAddBtn:true,tableHeading:component.tableHeading},content:(adminTable) => {for (let i in component.items) {
let answer = component.items[i]; 
 let iimq6Q = '_qm7dz4' + i;
let elEl68u = eo('tr','xiCdNMM4u9Lk' + i+iimq6Q);
let elYXlSZ = eo('td','5k2ff'+iimq6Q);
text(answer.id);
ec('td');
let el2z5Mc = eo('td','dhtff'+iimq6Q);
text(answer.track.name);
ec('td');
let elPVk31 = eo('td','uGWff'+iimq6Q);
text(answer.topic.title);
ec('td');
let eliufsk = eo('td','iUTff'+iimq6Q);
let cmpQc6X = this._lc('cxP_QiHkE', {parent:component,parentTop:adminTable,props:{timestamp:answer.createdAt.timestamp},insideLoop:true,index:"" +iimq6Q});
ec('td');
let elQ4Vee = eo('td','eLYff'+iimq6Q);
text(answer.by.name);
ec('td');
let elqD1zH = eo('td','WKcff'+iimq6Q);
let elyURbm = eo('a','OLKff'+iimq6Q,null, eventListeners, {onclick:[function(e) {var $el = this;component.editItem(answer)}]});
text(trans('view-answers'));
ec('a');
ec('td');
ec('tr');
}
}});
let cndEjIP = component.openModal;
this.setState('stmNMM3', cndEjIP);
if (cndEjIP) { 
let cmpViXM = this._lc('cXYQaiAjs', {parent:component,props:{modalHeader:component.crudOptions.hading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elCJmmv = eo('div',null,null,`class`,`row`);
let elE_MyR = eo('div',null,null,`class`,`col-9`);
let el6isMk = eo('h1');
text(`Answer`);
ec('h1');
let cmprL49 = this._lc('c47QX3aIV', {parent:component,parentTop:flkModal,props:{content:component.formObject.answer},state:'stmNMM3'});
ec('div');
let elWYtBI = eo('div',null,null,`class`,`col-3`);
let elZcySp = eo('div',null,null,`class`,`m-v-1`);
let elm5bgw = eo('span');
text(`Answer by`);
ec('span');
let elbaGm9 = eo('strong',null,null,`class`,`m-h-1`);
text(component.formObject.by.name);
ec('strong');
ec('div');
let el5Kq_3 = eo('div',null,null,`class`,`m-v-1`);
let elPfBQY = eo('span');
text(`Prize`);
ec('span');
let cmpxQ75 = this._lc('ctURnUThm', {parent:component,parentTop:flkModal,props:{coins:component.formObject.topic.prize},state:'stmNMM3'});
ec('div');
let eltZi_p = eo('h4',null,null,`class`,`bold m-v-1`);
text(`Quest`);
ec('h4');
let cmpIlGn = this._lc('ckKxtAZao', {parent:component,parentTop:flkModal,props:{content:component.formObject.topic.quest || component.formObject.topic.shortDescription},state:'stmNMM3'});
ec('div');
ec('div');
let elc37Z_ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elc37Z_.formHandler) {
                    window.cfrmdlr = elc37Z_.formHandler = new FormHandler(elc37Z_, component);
                } else {
                    window.cfrmdlr = elc37Z_.formHandler;
                }
            let elkcDuM = eo('div',null,null,`class`,`form-group`);
let elrepO3 = eo('div',null,null,`class`,`row`);
let elu6HyO = eo('div',null,null,`class`,`col-md-6`);
let elMLTQ7 = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.status = this.value;}]},`value`,`${fval(component.formObject.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`);
elMLTQ7.value = fval(component.formObject.status);
for (let i in component.answerStatus) {
let type = component.answerStatus[i]; 
 let ii7AgM = 'Ib2frA5' + i;
let el6Ep0d = eo('option','VhYDRfun3QEj' + i+ii7AgM,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
el6Ep0d.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let elHKQI8 = eo('div',null,null,`class`,`col-md-6`);
let elzfmhL = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;}]},`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`prize`)}`,`type`,`number`,`value`,`${ component.formObject.prize || component.formObject.topic.prize  }`,`class`,`form-control`,`id`,`prize`);
ec('div');
ec('div');
ec('div');
let elEYaDx = eo('div',null,null,`class`,`form-group`);
let elRV4xm = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.comment = this.value;}]},`value`,`${fval(component.formObject.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`password`,`class`,`form-control`);
elRV4xm.value = fval(component.formObject.comment);
ec('textarea');
ec('div');
let ellL8dt = eo('div',null,null,`class`,`form-group`);
let cndI3HD = component.recordSrc || component.formObject.recordNote;
this.setState('st7SDX7', cndI3HD);
if (cndI3HD) { 
let cmpljPZ = this._lc('cnasdXfUh', {parent:component,parentTop:flkModal,props:{src:component.recordSrc || component.formObject.recordNote},attrs:{src:`${component.recordSrc || component.formObject.recordNote}`},state:'st7SDX7'});
}let cmp7FGI = this._lc('cgCjTsSfq', {parent:component,parentTop:flkModal,events:{onrecord:function(e) {let $el = this; component.captureRecord(e)},onstart:function(e) {let $el = this; component.formObject.recordNote = null;component.clearRecord()}},state:'stmNMM3'});
let cndhM9h = component.recordData;
this.setState('stqEaoe', cndhM9h);
if (cndhM9h) { 
let el55AcK = eo('button','eGJf',null, eventListeners, {onclick:[function(e) {var $el = this;component.clearRecord(true)}]},`title`,`${trans(`Remove record`)}`,`type`,`button`,`class`,`btn btn-danger btn-sm remove-record-btn`);
let elS6Wht = eo('i','9IYf',null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
}ec('div');
let el2cLQ6 = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elOG5kK = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stmNMM3'});
}
                    this.isReadyToGo();
                }
        });