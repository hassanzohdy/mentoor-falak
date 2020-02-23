_Component({
                selector: 'einstein-answers-page',
                c: 'EinsteinAnswers', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','openModal','closeModal','formObject','submit','answerStatus','recordSrc','captureRecord','clearRecord','recordData','isValidForm','submitting'],
                children: {cE5zO4gSD:'admin-table',cJeA88G0N:'markdown',clos7MaQY:'gold-icon',ckbp91r70:'markdown',cpPDivwYv:'flk-audio-player',cGHNuxFqJ:'flk-audio-recorder',ch0MN6N4B:'flk-modal'},
                render: function (component) {
                    let cmptAt3 = this._lc('cE5zO4gSD', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,hideAddBtn:true,tableHeading:component.tableHeading},content:(adminTable) => {for (let i in component.items) {
let record = component.items[i]; 
 let iiQ70N = 'VHoFA26' + i;
let elQ0deZ = eo('tr','mrNpug8tFJ4p' + i+iiQ70N);
let elPAFbG = eo('td','Keqff'+iiQ70N);
text(record.id);
ec('td');
let elye4Cg = eo('td','4oNff'+iiQ70N);
text(record.category.name);
ec('td');
let elXwikX = eo('td','aq7ff'+iiQ70N);
text(record.title);
ec('td');
let elEybOF = eo('td','8bkff'+iiQ70N);
text(record.by.name);
ec('td');
let elYHlqB = eo('td','X4jff'+iiQ70N);
let elLguEj = eo('a','przff'+iiQ70N,null, eventListeners, {onclick:[function(e) {var $el = this;component.editItem(record)}]});
text(trans('view'));
ec('a');
ec('td');
ec('tr');
}
}});
let cndwC3B = component.openModal;
this.setState('st6aAX7', cndwC3B);
if (cndwC3B) { 
let cmpAK0Q = this._lc('ch0MN6N4B', {parent:component,props:{modalHeader:component.crudOptions.hading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elPEfkc = eo('div',null,null,`class`,`row`);
let elQnQlg = eo('div',null,null,`class`,`col-9`);
let eln9jqm = eo('h1');
text(`Answer`);
ec('h1');
let cnd9Efn = component.formObject.answer;
this.setState('sthpv65', cnd9Efn);
if (cnd9Efn) { 
let cmpr9Uo = this._lc('cJeA88G0N', {parent:component,parentTop:flkModal,props:{content:component.formObject.answer},state:'sthpv65'});
}ec('div');
let eld79N4 = eo('div',null,null,`class`,`col-3`);
let elIFNZh = eo('div',null,null,`class`,`m-v-1`);
let elNnG0N = eo('span');
text(`Answer by`);
ec('span');
let elKFLkd = eo('strong',null,null,`class`,`m-h-1`);
text(component.formObject.by.name);
ec('strong');
ec('div');
let elaXzlp = eo('div',null,null,`class`,`m-v-1`);
let elsR1ra = eo('span');
text(`Reward`);
ec('span');
let cmp8jTw = this._lc('clos7MaQY', {parent:component,parentTop:flkModal,props:{coins:component.formObject.reward},state:'st6aAX7'});
ec('div');
let elX3zYb = eo('h4',null,null,`class`,`bold m-v-1`);
text(`Quest`);
ec('h4');
let cmp_BrK = this._lc('ckbp91r70', {parent:component,parentTop:flkModal,props:{content:component.formObject.quest},state:'st6aAX7'});
ec('div');
ec('div');
let el4Aiz7 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el4Aiz7.formHandler) {
                    window.cfrmdlr = el4Aiz7.formHandler = new FormHandler(el4Aiz7, component);
                } else {
                    window.cfrmdlr = el4Aiz7.formHandler;
                }
            let elldZLu = eo('div',null,null,`class`,`form-group`);
let el6FXSB = eo('div',null,null,`class`,`row`);
let elKLBCH = eo('div',null,null,`class`,`col-md-6`);
let elBqyKW = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.status = this.value;}]},`value`,`${fval(component.formObject.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`,`id`,`pepo`);
elBqyKW.value = fval(component.formObject.status);
for (let i in component.answerStatus) {
let type = component.answerStatus[i]; 
 let iiQG6e = 'CFWDNbi' + i;
let el694Sz = eo('option','ACNnYaDj0NDu' + i+iiQG6e,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
el694Sz.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let elrPNbb = eo('div',null,null,`class`,`col-md-6`);
let elhzXFj = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.reward = this.value;}]},`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`type`,`number`,`value`,`${ component.formObject.reward  }`,`class`,`form-control`,`id`,`reward`);
ec('div');
ec('div');
ec('div');
let el0fRxY = eo('div',null,null,`class`,`form-group`);
let eljoj7p = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.comment = this.value;}]},`value`,`${fval(component.formObject.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
eljoj7p.value = fval(component.formObject.comment);
ec('textarea');
ec('div');
let eluliXt = eo('div',null,null,`class`,`form-group`);
let cndDXC8 = component.recordSrc || component.formObject.recordNote;
this.setState('st0rwDE', cndDXC8);
if (cndDXC8) { 
let cmpnpgF = this._lc('cpPDivwYv', {parent:component,parentTop:flkModal,props:{src:component.recordSrc || component.formObject.recordNote},attrs:{src:`${component.recordSrc || component.formObject.recordNote}`},state:'st0rwDE'});
}let cmp1Gch = this._lc('cGHNuxFqJ', {parent:component,parentTop:flkModal,events:{onrecord:function(e) {let $el = this; component.captureRecord(e)},onstart:function(e) {let $el = this; component.formObject.recordNote = null;component.clearRecord()}},state:'st6aAX7'});
let cndQIn7 = component.recordData;
this.setState('stCLvRF', cndQIn7);
if (cndQIn7) { 
let eljIhu5 = eo('button','7qgf',null, eventListeners, {onclick:[function(e) {var $el = this;component.clearRecord(true)}]},`title`,`${trans(`Remove record`)}`,`type`,`button`,`class`,`btn btn-danger btn-sm remove-record-btn`);
let elCmvZB = eo('i','9Xrf',null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
}ec('div');
let el1v6TD = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elWBlYH = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'st6aAX7'});
}
                    this.isReadyToGo();
                }
        });