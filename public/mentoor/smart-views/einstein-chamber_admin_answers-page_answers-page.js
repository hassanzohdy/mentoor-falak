_Component({
                selector: 'einstein-answers-page',
                c: 'EinsteinAnswers', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','openModal','closeModal','formObject','submit','answerStatus','recordSrc','captureRecord','clearRecord','recordData','isValidForm','submitting'],
                children: {cijYwzX61:'admin-table',cZkIpgLkW:'markdown',cIzLK5Fvu:'gold-icon',cdwt52_4w:'markdown',cYzcerbTP:'flk-audio-player',c30fACAgt:'flk-audio-recorder',cqxqIhcl7:'flk-modal'},
                render: function (component) {
                    let cmpRIeO = this._lc('cijYwzX61', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,hideAddBtn:true,tableHeading:component.tableHeading},content:(adminTable) => {for (let i in component.items) {
let record = component.items[i]; 
 let iiZSra = 'roB2DpX' + i;
let ely6tOn = eo('tr','R1dDUmAs8YvK' + i+iiZSra);
let el8l67i = eo('td','59jff'+iiZSra);
text(record.id);
ec('td');
let el_ZGx2 = eo('td','c2gff'+iiZSra);
text(record.category.name);
ec('td');
let el9ld1e = eo('td','Mcrff'+iiZSra);
text(record.title);
ec('td');
let elBpXZT = eo('td','wSRff'+iiZSra);
text(record.by.name);
ec('td');
let elQ1qFB = eo('td','jUCff'+iiZSra);
let eldq1Ns = eo('a','7ZBff'+iiZSra,null, eventListeners, {onclick:[function(e) {var $el = this;component.editItem(record)}]});
text(trans('view'));
ec('a');
ec('td');
ec('tr');
}
}});
let cndOgWI = component.openModal;
this.setState('stsQTz1', cndOgWI);
if (cndOgWI) { 
let cmpBdHW = this._lc('cqxqIhcl7', {parent:component,props:{modalHeader:component.crudOptions.hading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elvdp4O = eo('div',null,null,`class`,`row`);
let elv1QGH = eo('div',null,null,`class`,`col-9`);
let elRZ3zz = eo('h1');
text(`Answer`);
ec('h1');
let cndr4Q0 = component.formObject.answer;
this.setState('str8R_X', cndr4Q0);
if (cndr4Q0) { 
let cmpguNa = this._lc('cZkIpgLkW', {parent:component,parentTop:flkModal,props:{content:component.formObject.answer},state:'str8R_X'});
}ec('div');
let eldJk1J = eo('div',null,null,`class`,`col-3`);
let eltApLM = eo('div',null,null,`class`,`m-v-1`);
let elvG72N = eo('span');
text(`Answer by`);
ec('span');
let eloTBeS = eo('strong',null,null,`class`,`m-h-1`);
text(component.formObject.by.name);
ec('strong');
ec('div');
let elW4Ylu = eo('div',null,null,`class`,`m-v-1`);
let eln2tdo = eo('span');
text(`Reward`);
ec('span');
let cmp2JNB = this._lc('cIzLK5Fvu', {parent:component,parentTop:flkModal,props:{coins:component.formObject.reward},state:'stsQTz1'});
ec('div');
let elCSQwf = eo('h4',null,null,`class`,`bold m-v-1`);
text(`Quest`);
ec('h4');
let cmpNHwD = this._lc('cdwt52_4w', {parent:component,parentTop:flkModal,props:{content:component.formObject.quest},state:'stsQTz1'});
ec('div');
ec('div');
let elnCH1A = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elnCH1A.formHandler) {
                    window.cfrmdlr = elnCH1A.formHandler = new FormHandler(elnCH1A, component);
                } else {
                    window.cfrmdlr = elnCH1A.formHandler;
                }
            let elM8vOM = eo('div',null,null,`class`,`form-group`);
let el0CmpL = eo('div',null,null,`class`,`row`);
let eliotWr = eo('div',null,null,`class`,`col-md-6`);
let elVlOWv = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.status = this.value;}]},`value`,`${fval(component.formObject.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`,`id`,`pepo`);
elVlOWv.value = fval(component.formObject.status);
for (let i in component.answerStatus) {
let type = component.answerStatus[i]; 
 let ii1oPH = '_YSrQm0' + i;
let elOD19T = eo('option','51A29M0tkmMc' + i+ii1oPH,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elOD19T.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let elJC0sw = eo('div',null,null,`class`,`col-md-6`);
let elPs8UK = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.reward = this.value;}]},`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`type`,`number`,`value`,`${ component.formObject.reward  }`,`class`,`form-control`,`id`,`reward`);
ec('div');
ec('div');
ec('div');
let el8VJi4 = eo('div',null,null,`class`,`form-group`);
let el9rPpV = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.comment = this.value;}]},`value`,`${fval(component.formObject.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
el9rPpV.value = fval(component.formObject.comment);
ec('textarea');
ec('div');
let elUxThm = eo('div',null,null,`class`,`form-group`);
let cndHWih = component.recordSrc || component.formObject.recordNote;
this.setState('stiFnNk', cndHWih);
if (cndHWih) { 
let cmp5VSh = this._lc('cYzcerbTP', {parent:component,parentTop:flkModal,props:{src:component.recordSrc || component.formObject.recordNote},attrs:{src:`${component.recordSrc || component.formObject.recordNote}`},state:'stiFnNk'});
}let cmpnRxp = this._lc('c30fACAgt', {parent:component,parentTop:flkModal,events:{onrecord:function(e) {let $el = this; component.captureRecord(e)},onstart:function(e) {let $el = this; component.formObject.recordNote = null;component.clearRecord()}},state:'stsQTz1'});
let cnd8Hnh = component.recordData;
this.setState('stIcDcn', cnd8Hnh);
if (cnd8Hnh) { 
let eliqsAU = eo('button','KcSf',null, eventListeners, {onclick:[function(e) {var $el = this;component.clearRecord(true)}]},`title`,`${trans(`Remove record`)}`,`type`,`button`,`class`,`btn btn-danger btn-sm remove-record-btn`);
let elnG45G = eo('i','P6Kf',null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
}ec('div');
let el8oQh7 = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elXegqj = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stsQTz1'});
}
                    this.isReadyToGo();
                }
        });