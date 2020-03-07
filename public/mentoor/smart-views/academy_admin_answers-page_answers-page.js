_Component({
                selector: 'answers-page',
                c: 'AnswersPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','openModal','closeModal','formObject','submit','answerStatus','recordSrc','captureRecord','clearRecord','recordData','isValidForm','submitting'],
                children: {cFHPtMDBa:'flk-time-ago',cJeImTvVs:'admin-table',cg9YCaZMt:'markdown',cfsAgLeH6:'gold-icon',cu34SH9_a:'markdown',ci7Y75eDv:'flk-audio-player',c2NbOQUWd:'flk-audio-recorder',cD74QTubU:'flk-modal'},
                render: function (component) {
                    let cmpY_qw = this._lc('cJeImTvVs', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,hideAddBtn:true,tableHeading:component.tableHeading},content:(adminTable) => {for (let i in component.items) {
let answer = component.items[i]; 
 let iiZV4l = 'Pxajvto' + i;
let elaUr1u = eo('tr','yqkFDHNAo9qd' + i+iiZV4l);
let elyLQ4l = eo('td','lWDff'+iiZV4l);
text(answer.id);
ec('td');
let el_CN8h = eo('td','Q4bff'+iiZV4l);
text(answer.track.name);
ec('td');
let eliu1Ta = eo('td','KAsff'+iiZV4l);
text(answer.topic.title);
ec('td');
let elRH1ro = eo('td','3Xhff'+iiZV4l);
let cmpOsmQ = this._lc('cFHPtMDBa', {parent:component,parentTop:adminTable,props:{timestamp:answer.createdAt.timestamp},insideLoop:true,index:"" +iiZV4l});
ec('td');
let elzVxaD = eo('td','1r5ff'+iiZV4l);
text(answer.by.name);
ec('td');
let el46K7n = eo('td','dq6ff'+iiZV4l);
let el55ms5 = eo('a','BRGff'+iiZV4l,null, eventListeners, {onclick:[function(e) {var $el = this;component.editItem(answer)}]});
text(trans('view-answers'));
ec('a');
ec('td');
ec('tr');
}
}});
let cndjOAC = component.openModal;
this.setState('st0tJCt', cndjOAC);
if (cndjOAC) { 
let cmpK6KP = this._lc('cD74QTubU', {parent:component,props:{modalHeader:component.crudOptions.hading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elVnpaa = eo('div',null,null,`class`,`row`);
let elI_GUy = eo('div',null,null,`class`,`col-9`);
let elBsIcI = eo('h1');
text(`Answer`);
ec('h1');
let cmpiVMq = this._lc('cg9YCaZMt', {parent:component,parentTop:flkModal,props:{content:component.formObject.answer},state:'st0tJCt'});
ec('div');
let elBFu2e = eo('div',null,null,`class`,`col-3`);
let elkYEPu = eo('div',null,null,`class`,`m-v-1`);
let eljoLpg = eo('span');
text(`Answer by`);
ec('span');
let elJQ0s3 = eo('strong',null,null,`class`,`m-h-1`);
text(component.formObject.by.name);
ec('strong');
ec('div');
let el8bBPR = eo('div',null,null,`class`,`m-v-1`);
let elAyRJ8 = eo('span');
text(`Prize`);
ec('span');
let cmpcwUv = this._lc('cfsAgLeH6', {parent:component,parentTop:flkModal,props:{coins:component.formObject.topic.prize},state:'st0tJCt'});
ec('div');
let elX7lRL = eo('h4',null,null,`class`,`bold m-v-1`);
text(`Quest`);
ec('h4');
let cmpBZdh = this._lc('cu34SH9_a', {parent:component,parentTop:flkModal,props:{content:component.formObject.topic.quest || component.formObject.topic.shortDescription},state:'st0tJCt'});
ec('div');
ec('div');
let elnb7El = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elnb7El.formHandler) {
                    window.cfrmdlr = elnb7El.formHandler = new FormHandler(elnb7El, component);
                } else {
                    window.cfrmdlr = elnb7El.formHandler;
                }
            let elGTHOh = eo('div',null,null,`class`,`form-group`);
let elSnpjw = eo('div',null,null,`class`,`row`);
let elrz7au = eo('div',null,null,`class`,`col-md-6`);
let elxcraE = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.status = this.value;}]},`value`,`${fval(component.formObject.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`);
elxcraE.value = fval(component.formObject.status);
for (let i in component.answerStatus) {
let type = component.answerStatus[i]; 
 let iigA8Q = 'oQhjxgd' + i;
let elqiIV9 = eo('option','5YXkxBL0ga8T' + i+iigA8Q,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elqiIV9.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let elch7Ge = eo('div',null,null,`class`,`col-md-6`);
let el2Y9TH = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;}]},`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`prize`)}`,`type`,`number`,`value`,`${ component.formObject.prize || component.formObject.topic.prize  }`,`class`,`form-control`,`id`,`prize`);
ec('div');
ec('div');
ec('div');
let elGxlcK = eo('div',null,null,`class`,`form-group`);
let elTOL7L = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.comment = this.value;}]},`value`,`${fval(component.formObject.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`password`,`class`,`form-control`);
elTOL7L.value = fval(component.formObject.comment);
ec('textarea');
ec('div');
let elRTmJA = eo('div',null,null,`class`,`form-group`);
let cndybJ3 = component.recordSrc || component.formObject.recordNote;
this.setState('stEZ2yE', cndybJ3);
if (cndybJ3) { 
let cmpKTz_ = this._lc('ci7Y75eDv', {parent:component,parentTop:flkModal,props:{src:component.recordSrc || component.formObject.recordNote},attrs:{src:`${component.recordSrc || component.formObject.recordNote}`},state:'stEZ2yE'});
}let cmpIvgg = this._lc('c2NbOQUWd', {parent:component,parentTop:flkModal,events:{onrecord:function(e) {let $el = this; component.captureRecord(e)},onstart:function(e) {let $el = this; component.formObject.recordNote = null;component.clearRecord()}},state:'st0tJCt'});
let cndl_Xx = component.recordData;
this.setState('st4p74K', cndl_Xx);
if (cndl_Xx) { 
let elZcRUy = eo('button','Alaf',null, eventListeners, {onclick:[function(e) {var $el = this;component.clearRecord(true)}]},`title`,`${trans(`Remove record`)}`,`type`,`button`,`class`,`btn btn-danger btn-sm remove-record-btn`);
let elxK7JR = eo('i','jLAf',null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');
}ec('div');
let elf9Bel = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elByqy3 = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'st0tJCt'});
}
                    this.isReadyToGo();
                }
        });