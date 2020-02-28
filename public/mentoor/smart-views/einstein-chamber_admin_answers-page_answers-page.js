_Component({
                selector: 'einstein-answers-page',
                c: 'EinsteinAnswers', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','openModal','closeModal','formObject','submit','answerStatus','recordSrc','captureRecord','clearRecord','recordData','isValidForm','submitting'],
                children: {cJSqMsUDB:'admin-table',cStBLysX1:'markdown',czPFo_BIs:'gold-icon',cZljgaoH6:'markdown',cZeL9ScBu:'flk-audio-player',cEdSNq4_F:'flk-audio-recorder',cdruVrsb0:'flk-modal'},
                render: function (component) {
                    let cmp9zK6 = this._lc('cJSqMsUDB', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,hideAddBtn:true,tableHeading:component.tableHeading},content:(adminTable) => {for (let i in component.items) {
let record = component.items[i]; 
 let iiew1y = 'MtUkzVF' + i;
let eldeppL = eo('tr','Sq3nbIZWxnAW' + i+iiew1y);
let elSJzOt = eo('td','s6Fff'+iiew1y);
text(record.id);
ec('td');
let elaj3nH = eo('td','J_eff'+iiew1y);
text(record.category.name);
ec('td');
let elcGx3C = eo('td','M7yff'+iiew1y);
text(record.title);
ec('td');
let elo52rV = eo('td','A_1ff'+iiew1y);
text(record.by.name);
ec('td');
let elZavq4 = eo('td','_V1ff'+iiew1y);
let elonvIj = eo('a','e17ff'+iiew1y,null, eventListeners, {onclick:[function(e) {var $el = this;component.editItem(record)}]});
text(trans('view'));
ec('a');
ec('td');
ec('tr');
}
}});
let cndAEQ6 = component.openModal;
this.setState('stqlhKs', cndAEQ6);
if (cndAEQ6) { 
let cmpwAuJ = this._lc('cdruVrsb0', {parent:component,props:{modalHeader:component.crudOptions.hading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let eluSWpN = eo('div',null,null,`class`,`row`);
let elXboTt = eo('div',null,null,`class`,`col-9`);
let elpnQAs = eo('h1');
text(`Answer`);
ec('h1');
let cndPENy = component.formObject.answer;
this.setState('stuUECb', cndPENy);
if (cndPENy) { 
let cmpBtIx = this._lc('cStBLysX1', {parent:component,parentTop:flkModal,props:{content:component.formObject.answer},state:'stuUECb'});
}ec('div');
let elrEY6t = eo('div',null,null,`class`,`col-3`);
let elzb3o3 = eo('div',null,null,`class`,`m-v-1`);
let elShXKb = eo('span');
text(`Answer by`);
ec('span');
let elWzhre = eo('strong',null,null,`class`,`m-h-1`);
text(component.formObject.by.name);
ec('strong');
ec('div');
let elbRF7G = eo('div',null,null,`class`,`m-v-1`);
let elfqr0W = eo('span');
text(`Reward`);
ec('span');
let cmp6IoA = this._lc('czPFo_BIs', {parent:component,parentTop:flkModal,props:{coins:component.formObject.reward},state:'stqlhKs'});
ec('div');
let elyrpxD = eo('h4',null,null,`class`,`bold m-v-1`);
text(`Quest`);
ec('h4');
let cmpD_4Q = this._lc('cZljgaoH6', {parent:component,parentTop:flkModal,props:{content:component.formObject.quest},state:'stqlhKs'});
ec('div');
ec('div');
let elKUQFR = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elKUQFR.formHandler) {
                    window.cfrmdlr = elKUQFR.formHandler = new FormHandler(elKUQFR, component);
                } else {
                    window.cfrmdlr = elKUQFR.formHandler;
                }
            let el5PAJ9 = eo('div',null,null,`class`,`form-group`);
let elq_RcC = eo('div',null,null,`class`,`row`);
let elBTJi3 = eo('div',null,null,`class`,`col-md-6`);
let elMB1gh = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.status = this.value;}]},`value`,`${fval(component.formObject.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`,`id`,`pepo`);
elMB1gh.value = fval(component.formObject.status);
for (let i in component.answerStatus) {
let type = component.answerStatus[i]; 
 let iiWI7e = 'NWs8Cgf' + i;
let elpu0Y7 = eo('option','Zz5PNO7msXta' + i+iiWI7e,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elpu0Y7.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let elnUUo8 = eo('div',null,null,`class`,`col-md-6`);
let eljG3TX = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.reward = this.value;}]},`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`type`,`number`,`value`,`${ component.formObject.reward  }`,`class`,`form-control`,`id`,`reward`);
ec('div');
ec('div');
ec('div');
let elzhs1Q = eo('div',null,null,`class`,`form-group`);
let elcCF8m = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.comment = this.value;}]},`value`,`${fval(component.formObject.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elcCF8m.value = fval(component.formObject.comment);
ec('textarea');
ec('div');
let elXx2vE = eo('div',null,null,`class`,`form-group`);
let cnd1riz = component.recordSrc || component.formObject.recordNote;
this.setState('stGWudD', cnd1riz);
if (cnd1riz) { 
let cmpABCY = this._lc('cZeL9ScBu', {parent:component,parentTop:flkModal,props:{src:component.recordSrc || component.formObject.recordNote},attrs:{src:`${component.recordSrc || component.formObject.recordNote}`},state:'stGWudD'});
}let cmp5JnJ = this._lc('cEdSNq4_F', {parent:component,parentTop:flkModal,events:{onrecord:function(e) {let $el = this; component.captureRecord(e)},onstart:function(e) {let $el = this; component.formObject.recordNote = null;component.clearRecord()}},state:'stqlhKs'});
let cnd6T1H = component.recordData;
this.setState('stT9H9b', cnd6T1H);
if (cnd6T1H) { 
let elGTK0T = eo('button','zzvf',null, eventListeners, {onclick:[function(e) {var $el = this;component.clearRecord(true)}]},`title`,`${trans(`Remove record`)}`,`type`,`button`,`class`,`btn btn-danger btn-sm remove-record-btn`);
let elPjo85 = eo('i','UQwf',null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');
}ec('div');
let elEmibf = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elwzyDW = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stqlhKs'});
}
                    this.isReadyToGo();
                }
        });