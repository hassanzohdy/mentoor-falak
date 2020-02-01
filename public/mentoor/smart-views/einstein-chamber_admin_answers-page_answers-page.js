_Component({
                selector: 'einstein-answers-page',
                c: 'EinsteinAnswers', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','openModal','closeModal','formObject','submit','answerStatus','recordSrc','captureRecord','clearRecord','recordData','isValidForm','submitting'],
                children: {cef2ZiKkH:'admin-table',c9mMQ2zYw:'markdown',cFrRN049f:'gold-icon',cjDJ_GD91:'markdown',cHiaRvYDZ:'flk-audio-player',cIrgbCInj:'flk-audio-recorder',cmyco_Tm0:'flk-modal'},
                render: function (component) {
                    let cmp8oHb = this._lc('cef2ZiKkH', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,hideAddBtn:true,tableHeading:component.tableHeading},content:(adminTable) => {for (let i in component.items) {
let record = component.items[i]; 
 let iiV8tJ = 'hwIFm48' + i;
let elasmw9 = eo('tr','i8mSACd6Ua4b' + i+iiV8tJ);
let eldD_DC = eo('td','7T7ff'+iiV8tJ);
text(record.id);
ec('td');
let elg5Hyu = eo('td','Ng1ff'+iiV8tJ);
text(record.category.name);
ec('td');
let elsh5Bf = eo('td','m2Wff'+iiV8tJ);
text(record.title);
ec('td');
let elUPj1z = eo('td','Lq3ff'+iiV8tJ);
text(record.by.name);
ec('td');
let ellAgwt = eo('td','NPpff'+iiV8tJ);
let elRbQmo = eo('a','tHEff'+iiV8tJ,null, eventListeners, {onclick:[function(e) {var $el = this;component.editItem(record)}]});
text(trans('view'));
ec('a');
ec('td');
ec('tr');
}
}});
let cndUjac = component.openModal;
this.setState('stpkkTT', cndUjac);
if (cndUjac) { 
let cmpVWlz = this._lc('cmyco_Tm0', {parent:component,props:{modalHeader:component.crudOptions.hading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elSREBt = eo('div',null,null,`class`,`row`);
let elVUCLx = eo('div',null,null,`class`,`col-9`);
let elU1Ifv = eo('h1');
text(`Answer`);
ec('h1');
let cndIejv = component.formObject.answer;
this.setState('stq61LA', cndIejv);
if (cndIejv) { 
let cmp7eSR = this._lc('c9mMQ2zYw', {parent:component,parentTop:flkModal,props:{content:component.formObject.answer},state:'stq61LA'});
}ec('div');
let elGsUgN = eo('div',null,null,`class`,`col-3`);
let elPthkA = eo('div',null,null,`class`,`m-v-1`);
let elr28LQ = eo('span');
text(`Answer by`);
ec('span');
let elHuObE = eo('strong',null,null,`class`,`m-h-1`);
text(component.formObject.by.name);
ec('strong');
ec('div');
let elK60w9 = eo('div',null,null,`class`,`m-v-1`);
let elfkIrC = eo('span');
text(`Reward`);
ec('span');
let cmpvGoB = this._lc('cFrRN049f', {parent:component,parentTop:flkModal,props:{coins:component.formObject.reward},state:'stpkkTT'});
ec('div');
let elBTrUT = eo('h4',null,null,`class`,`bold m-v-1`);
text(`Quest`);
ec('h4');
let cmpHL70 = this._lc('cjDJ_GD91', {parent:component,parentTop:flkModal,props:{content:component.formObject.quest},state:'stpkkTT'});
ec('div');
ec('div');
let ellpEbN = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! ellpEbN.formHandler) {
                    window.cfrmdlr = ellpEbN.formHandler = new FormHandler(ellpEbN, component);
                } else {
                    window.cfrmdlr = ellpEbN.formHandler;
                }
            let elWkbKv = eo('div',null,null,`class`,`form-group`);
let elbgwiZ = eo('div',null,null,`class`,`row`);
let elYlU5r = eo('div',null,null,`class`,`col-md-6`);
let ellm6Kb = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.status = this.value;}]},`value`,`${fval(component.formObject.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`,`id`,`pepo`);
ellm6Kb.value = fval(component.formObject.status);
for (let i in component.answerStatus) {
let type = component.answerStatus[i]; 
 let iicp5n = 'mNAkYRJ' + i;
let elQxQHe = eo('option','9k7Z0_bnemB0' + i+iicp5n,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elQxQHe.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let elKbh65 = eo('div',null,null,`class`,`col-md-6`);
let el36lS_ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.reward = this.value;}]},`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`type`,`number`,`value`,`${ component.formObject.reward  }`,`class`,`form-control`,`id`,`reward`);
ec('div');
ec('div');
ec('div');
let elq8k1_ = eo('div',null,null,`class`,`form-group`);
let elPsv6M = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.comment = this.value;}]},`value`,`${fval(component.formObject.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elPsv6M.value = fval(component.formObject.comment);
ec('textarea');
ec('div');
let elMQPTk = eo('div',null,null,`class`,`form-group`);
let cndJoJ3 = component.recordSrc || component.formObject.recordNote;
this.setState('stO2Jox', cndJoJ3);
if (cndJoJ3) { 
let cmp4uNG = this._lc('cHiaRvYDZ', {parent:component,parentTop:flkModal,props:{src:component.recordSrc || component.formObject.recordNote},attrs:{src:`${component.recordSrc || component.formObject.recordNote}`},state:'stO2Jox'});
}let cmpCdw2 = this._lc('cIrgbCInj', {parent:component,parentTop:flkModal,events:{onrecord:function(e) {let $el = this; component.captureRecord(e)},onstart:function(e) {let $el = this; component.formObject.recordNote = null;component.clearRecord()}},state:'stpkkTT'});
let cndEG0h = component.recordData;
this.setState('stBqZfS', cndEG0h);
if (cndEG0h) { 
let el0WUF_ = eo('button','Iuyf',null, eventListeners, {onclick:[function(e) {var $el = this;component.clearRecord(true)}]},`title`,`${trans(`Remove record`)}`,`type`,`button`,`class`,`btn btn-danger btn-sm remove-record-btn`);
let elRbg_b = eo('i','rXNf',null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
}ec('div');
let elI2YLr = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let eljhBAw = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stpkkTT'});
}
                    this.isReadyToGo();
                }
        });