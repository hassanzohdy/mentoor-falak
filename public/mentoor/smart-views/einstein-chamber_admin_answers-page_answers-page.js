_Component({
                selector: 'einstein-answers-page',
                c: 'EinsteinAnswers', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','openModal','closeModal','formObject','submit','answerStatus','recordSrc','captureRecord','clearRecord','recordData','isValidForm','submitting'],
                children: {c97cZF_Q1:'admin-table',cChXc6O5y:'markdown',c9RByVJgb:'gold-icon',cLXTAb0AC:'markdown',cm1Yd4d5E:'flk-audio-player',cywbjg4Xr:'flk-audio-recorder',cDyNFstvz:'flk-modal'},
                render: function (component) {
                    let cmpaYJa = this._lc('c97cZF_Q1', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,hideAddBtn:true,tableHeading:component.tableHeading},content:(adminTable) => {for (let i in component.items) {
let record = component.items[i]; 
 let iiEJv_ = 'nuAnqnS' + i;
let elWAYgu = eo('tr','Be0WyWw7jipc' + i+iiEJv_);
let el8R_U0 = eo('td','MaLff'+iiEJv_);
text(record.id);
ec('td');
let elZTiPe = eo('td','8Lhff'+iiEJv_);
text(record.category.name);
ec('td');
let elYDXme = eo('td','ncrff'+iiEJv_);
text(record.title);
ec('td');
let elA7RdE = eo('td','GIKff'+iiEJv_);
text(record.by.name);
ec('td');
let elFNJXB = eo('td','t4Pff'+iiEJv_);
let elJ1LHd = eo('a','7YFff'+iiEJv_,null, eventListeners, {onclick:[function(e) {var $el = this;component.editItem(record)}]});
text(trans('view'));
ec('a');
ec('td');
ec('tr');
}
}});
let cndoyY5 = component.openModal;
this.setState('stRJLEl', cndoyY5);
if (cndoyY5) { 
let cmprEle = this._lc('cDyNFstvz', {parent:component,props:{modalHeader:component.crudOptions.hading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let ela_GwO = eo('div',null,null,`class`,`row`);
let elPWw4y = eo('div',null,null,`class`,`col-9`);
let el97A6A = eo('h1');
text(`Answer`);
ec('h1');
let cndgsnv = component.formObject.answer;
this.setState('stQpThF', cndgsnv);
if (cndgsnv) { 
let cmpltsC = this._lc('cChXc6O5y', {parent:component,parentTop:flkModal,props:{content:component.formObject.answer},state:'stQpThF'});
}ec('div');
let elZNGaO = eo('div',null,null,`class`,`col-3`);
let elTAdjM = eo('div',null,null,`class`,`m-v-1`);
let elxqQVS = eo('span');
text(`Answer by`);
ec('span');
let elguS0e = eo('strong',null,null,`class`,`m-h-1`);
text(component.formObject.by.name);
ec('strong');
ec('div');
let elhLSUQ = eo('div',null,null,`class`,`m-v-1`);
let el37yrY = eo('span');
text(`Reward`);
ec('span');
let cmp6FON = this._lc('c9RByVJgb', {parent:component,parentTop:flkModal,props:{coins:component.formObject.reward},state:'stRJLEl'});
ec('div');
let ely_FpU = eo('h4',null,null,`class`,`bold m-v-1`);
text(`Quest`);
ec('h4');
let cmptKKS = this._lc('cLXTAb0AC', {parent:component,parentTop:flkModal,props:{content:component.formObject.quest},state:'stRJLEl'});
ec('div');
ec('div');
let el7xFnV = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el7xFnV.formHandler) {
                    window.cfrmdlr = el7xFnV.formHandler = new FormHandler(el7xFnV, component);
                } else {
                    window.cfrmdlr = el7xFnV.formHandler;
                }
            let elseFxa = eo('div',null,null,`class`,`form-group`);
let elkpyA5 = eo('div',null,null,`class`,`row`);
let ellbvh4 = eo('div',null,null,`class`,`col-md-6`);
let elBu4T1 = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.status = this.value;}]},`value`,`${fval(component.formObject.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`,`id`,`pepo`);
elBu4T1.value = fval(component.formObject.status);
for (let i in component.answerStatus) {
let type = component.answerStatus[i]; 
 let iipIJd = 'OlGtvuc' + i;
let elzUCb6 = eo('option','PnYVY4zTZDGR' + i+iipIJd,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elzUCb6.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let eloH7wt = eo('div',null,null,`class`,`col-md-6`);
let elFWJnz = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.reward = this.value;}]},`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`type`,`number`,`value`,`${ component.formObject.reward  }`,`class`,`form-control`,`id`,`reward`);
ec('div');
ec('div');
ec('div');
let elJiCo9 = eo('div',null,null,`class`,`form-group`);
let elria30 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.comment = this.value;}]},`value`,`${fval(component.formObject.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elria30.value = fval(component.formObject.comment);
ec('textarea');
ec('div');
let elUgI00 = eo('div',null,null,`class`,`form-group`);
let cndkt9S = component.recordSrc || component.formObject.recordNote;
this.setState('stzKYD6', cndkt9S);
if (cndkt9S) { 
let cmph7W0 = this._lc('cm1Yd4d5E', {parent:component,parentTop:flkModal,props:{src:component.recordSrc || component.formObject.recordNote},attrs:{src:`${component.recordSrc || component.formObject.recordNote}`},state:'stzKYD6'});
}let cmpzKbq = this._lc('cywbjg4Xr', {parent:component,parentTop:flkModal,events:{onrecord:function(e) {let $el = this; component.captureRecord(e)},onstart:function(e) {let $el = this; component.formObject.recordNote = null;component.clearRecord()}},state:'stRJLEl'});
let cnd6sA7 = component.recordData;
this.setState('steWKnc', cnd6sA7);
if (cnd6sA7) { 
let elMlrQx = eo('button','7wof',null, eventListeners, {onclick:[function(e) {var $el = this;component.clearRecord(true)}]},`title`,`${trans(`Remove record`)}`,`type`,`button`,`class`,`btn btn-danger btn-sm remove-record-btn`);
let elxSgNq = eo('i','Volf',null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
}ec('div');
let elmO_9M = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let el4UypX = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stRJLEl'});
}
                    this.isReadyToGo();
                }
        });