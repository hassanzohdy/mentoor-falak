_Component({
                selector: 'answers-page',
                c: 'AnswersPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','openModal','closeModal','formObject','submit','answerStatus','recordSrc','captureRecord','clearRecord','recordData','isValidForm','submitting'],
                children: {cIrMcaNF_:'flk-time-ago',cTLUyaGa1:'admin-table',cJuKou_l9:'markdown',cjjODdm9s:'gold-icon',cp2eAQjsB:'markdown',cFuu8LVUZ:'flk-audio-player',cqkybAXox:'flk-audio-recorder',caqZc7H_p:'flk-modal'},
                render: function (component) {
                    let cmp8Fsf = this._lc('cTLUyaGa1', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,hideAddBtn:true,tableHeading:component.tableHeading},content:(adminTable) => {for (let i in component.items) {
let answer = component.items[i]; 
 let iiq18u = 'osshWsv' + i;
let elGwRqw = eo('tr','QtoYfSPSa95b' + i+iiq18u);
let elharlU = eo('td','oXJff'+iiq18u);
text(answer.id);
ec('td');
let elHF2K3 = eo('td','rVBff'+iiq18u);
text(answer.track.name);
ec('td');
let elu9qfY = eo('td','Vrnff'+iiq18u);
text(answer.topic.title);
ec('td');
let elT9nY8 = eo('td','IhZff'+iiq18u);
let cmpst2S = this._lc('cIrMcaNF_', {parent:component,parentTop:adminTable,props:{timestamp:answer.createdAt.timestamp},insideLoop:true,index:"" +iiq18u});
ec('td');
let elDL4t7 = eo('td','q7Tff'+iiq18u);
text(answer.by.name);
ec('td');
let elqrt_L = eo('td','kG_ff'+iiq18u);
let elYtrzR = eo('a','5olff'+iiq18u,null, eventListeners, {onclick:[function(e) {var $el = this;component.editItem(answer)}]});
text(trans('view-answers'));
ec('a');
ec('td');
ec('tr');
}
}});
let cndzUM7 = component.openModal;
this.setState('stfl9Sl', cndzUM7);
if (cndzUM7) { 
let cmpJmEf = this._lc('caqZc7H_p', {parent:component,props:{modalHeader:component.crudOptions.hading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elG9i7R = eo('div',null,null,`class`,`row`);
let else7Qj = eo('div',null,null,`class`,`col-9`);
let el1GaBW = eo('h1');
text(`Answer`);
ec('h1');
let cmpHVDg = this._lc('cJuKou_l9', {parent:component,parentTop:flkModal,props:{content:component.formObject.answer},state:'stfl9Sl'});
ec('div');
let elO7tz0 = eo('div',null,null,`class`,`col-3`);
let elzxQAb = eo('div',null,null,`class`,`m-v-1`);
let elD55C0 = eo('span');
text(`Answer by`);
ec('span');
let elxGtyb = eo('strong',null,null,`class`,`m-h-1`);
text(component.formObject.by.name);
ec('strong');
ec('div');
let ellXcV8 = eo('div',null,null,`class`,`m-v-1`);
let elzyN_n = eo('span');
text(`Prize`);
ec('span');
let cmpp1ob = this._lc('cjjODdm9s', {parent:component,parentTop:flkModal,props:{coins:component.formObject.topic.prize},state:'stfl9Sl'});
ec('div');
let elWZFkx = eo('h4',null,null,`class`,`bold m-v-1`);
text(`Quest`);
ec('h4');
let cmp0cj5 = this._lc('cp2eAQjsB', {parent:component,parentTop:flkModal,props:{content:component.formObject.topic.quest || component.formObject.topic.shortDescription},state:'stfl9Sl'});
ec('div');
ec('div');
let el4wDi2 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el4wDi2.formHandler) {
                    window.cfrmdlr = el4wDi2.formHandler = new FormHandler(el4wDi2, component);
                } else {
                    window.cfrmdlr = el4wDi2.formHandler;
                }
            let elxPnh_ = eo('div',null,null,`class`,`form-group`);
let elJwTaE = eo('div',null,null,`class`,`row`);
let elUUkwC = eo('div',null,null,`class`,`col-md-6`);
let el3Vj4R = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.status = this.value;}]},`value`,`${fval(component.formObject.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`);
el3Vj4R.value = fval(component.formObject.status);
for (let i in component.answerStatus) {
let type = component.answerStatus[i]; 
 let iiy0PH = '0LQr07E' + i;
let el_QT0x = eo('option','CTAQ_8ZpoGe9' + i+iiy0PH,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
el_QT0x.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let elbbHjL = eo('div',null,null,`class`,`col-md-6`);
let el4NdkK = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;}]},`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`prize`)}`,`type`,`number`,`value`,`${ component.formObject.prize || component.formObject.topic.prize  }`,`class`,`form-control`,`id`,`prize`);
ec('div');
ec('div');
ec('div');
let elDisTM = eo('div',null,null,`class`,`form-group`);
let el2p028 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.comment = this.value;}]},`value`,`${fval(component.formObject.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`password`,`class`,`form-control`);
el2p028.value = fval(component.formObject.comment);
ec('textarea');
ec('div');
let elzbEuG = eo('div',null,null,`class`,`form-group`);
let cndN6__ = component.recordSrc || component.formObject.recordNote;
this.setState('st66JUn', cndN6__);
if (cndN6__) { 
let cmpBwqO = this._lc('cFuu8LVUZ', {parent:component,parentTop:flkModal,props:{src:component.recordSrc || component.formObject.recordNote},attrs:{src:`${component.recordSrc || component.formObject.recordNote}`},state:'st66JUn'});
}let cmp8uQX = this._lc('cqkybAXox', {parent:component,parentTop:flkModal,events:{onrecord:function(e) {let $el = this; component.captureRecord(e)},onstart:function(e) {let $el = this; component.formObject.recordNote = null;component.clearRecord()}},state:'stfl9Sl'});
let cndC6on = component.recordData;
this.setState('stM9W_6', cndC6on);
if (cndC6on) { 
let elsMoDJ = eo('button','A6Yf',null, eventListeners, {onclick:[function(e) {var $el = this;component.clearRecord(true)}]},`title`,`${trans(`Remove record`)}`,`type`,`button`,`class`,`btn btn-danger btn-sm remove-record-btn`);
let elBtVjU = eo('i','Pmpf',null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
}ec('div');
let elDKaRP = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elYJgZp = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stfl9Sl'});
}
                    this.isReadyToGo();
                }
        });