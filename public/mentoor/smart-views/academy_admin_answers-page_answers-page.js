_Component({
                selector: 'answers-page',
                c: 'AnswersPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','openModal','closeModal','formObject','submit','answerStatus','recordSrc','captureRecord','clearRecord','recordData','isValidForm','submitting'],
                children: {cVMbtRDFe:'flk-time-ago',cGrQx6y1A:'admin-table',c8Qt_MmIk:'markdown',cTrXDpHoL:'gold-icon',c2EhHW39i:'markdown',c3EQA4mtZ:'flk-audio-player',cNJF8__Q5:'flk-audio-recorder',c0TKQn3Wz:'flk-modal'},
                render: function (component) {
                    let cmpXyCZ = this._lc('cGrQx6y1A', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,hideAddBtn:true,tableHeading:component.tableHeading},content:(adminTable) => {for (let i in component.items) {
let answer = component.items[i]; 
 let iiJTwa = 'V7NGX9A' + i;
let elvL5Ah = eo('tr','skD_5Sy5s8T8' + i+iiJTwa);
let elfI5KP = eo('td','aV3ff'+iiJTwa);
text(answer.id);
ec('td');
let elfOfuE = eo('td','VO5ff'+iiJTwa);
text(answer.track.name);
ec('td');
let elBiiSS = eo('td','Thfff'+iiJTwa);
text(answer.topic.title);
ec('td');
let elkB8s0 = eo('td','HDuff'+iiJTwa);
let cmpDeOL = this._lc('cVMbtRDFe', {parent:component,parentTop:adminTable,props:{timestamp:answer.createdAt.timestamp},insideLoop:true,index:"" +iiJTwa});
ec('td');
let el3csJP = eo('td','C4Dff'+iiJTwa);
text(answer.by.name);
ec('td');
let elqaSVf = eo('td','8Kwff'+iiJTwa);
let elTZ4ry = eo('a','R0fff'+iiJTwa,null, eventListeners, {onclick:[function(e) {var $el = this;component.editItem(answer)}]});
text(trans('view-answers'));
ec('a');
ec('td');
ec('tr');
}
}});
let cnducSM = component.openModal;
this.setState('sttQ970', cnducSM);
if (cnducSM) { 
let cmpzTCP = this._lc('c0TKQn3Wz', {parent:component,props:{modalHeader:component.crudOptions.hading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elmo2FD = eo('div',null,null,`class`,`row`);
let el3gK_0 = eo('div',null,null,`class`,`col-9`);
let elZEPkO = eo('h1');
text(`Answer`);
ec('h1');
let cmpEhmp = this._lc('c8Qt_MmIk', {parent:component,parentTop:flkModal,props:{content:component.formObject.answer},state:'sttQ970'});
ec('div');
let eltxjeb = eo('div',null,null,`class`,`col-3`);
let elhXzK4 = eo('div',null,null,`class`,`m-v-1`);
let elv7vVU = eo('span');
text(`Answer by`);
ec('span');
let elTUrOL = eo('strong',null,null,`class`,`m-h-1`);
text(component.formObject.by.name);
ec('strong');
ec('div');
let eluPdUS = eo('div',null,null,`class`,`m-v-1`);
let elvNio3 = eo('span');
text(`Prize`);
ec('span');
let cmpJZWE = this._lc('cTrXDpHoL', {parent:component,parentTop:flkModal,props:{coins:component.formObject.topic.prize},state:'sttQ970'});
ec('div');
let elsK5th = eo('h4',null,null,`class`,`bold m-v-1`);
text(`Quest`);
ec('h4');
let cmpSnwg = this._lc('c2EhHW39i', {parent:component,parentTop:flkModal,props:{content:component.formObject.topic.quest || component.formObject.topic.shortDescription},state:'sttQ970'});
ec('div');
ec('div');
let elbAtOG = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elbAtOG.formHandler) {
                    window.cfrmdlr = elbAtOG.formHandler = new FormHandler(elbAtOG, component);
                } else {
                    window.cfrmdlr = elbAtOG.formHandler;
                }
            let elJ1q6y = eo('div',null,null,`class`,`form-group`);
let elnk19i = eo('div',null,null,`class`,`row`);
let elfgHzq = eo('div',null,null,`class`,`col-md-6`);
let eltCtxr = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.status = this.value;}]},`value`,`${fval(component.formObject.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`);
eltCtxr.value = fval(component.formObject.status);
for (let i in component.answerStatus) {
let type = component.answerStatus[i]; 
 let iicGTq = 'Gtsxuui' + i;
let elDZ4IR = eo('option','R2fFH2RgIdnj' + i+iicGTq,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elDZ4IR.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let elabtSr = eo('div',null,null,`class`,`col-md-6`);
let elU1NoN = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;}]},`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`prize`)}`,`type`,`number`,`value`,`${ component.formObject.prize || component.formObject.topic.prize  }`,`class`,`form-control`,`id`,`prize`);
ec('div');
ec('div');
ec('div');
let elMSd5E = eo('div',null,null,`class`,`form-group`);
let elGMJkf = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.comment = this.value;}]},`value`,`${fval(component.formObject.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`password`,`class`,`form-control`);
elGMJkf.value = fval(component.formObject.comment);
ec('textarea');
ec('div');
let elf0isN = eo('div',null,null,`class`,`form-group`);
let cndKhWv = component.recordSrc || component.formObject.recordNote;
this.setState('sthJOJc', cndKhWv);
if (cndKhWv) { 
let cmpVShv = this._lc('c3EQA4mtZ', {parent:component,parentTop:flkModal,props:{src:component.recordSrc || component.formObject.recordNote},attrs:{src:`${component.recordSrc || component.formObject.recordNote}`},state:'sthJOJc'});
}let cmp61HC = this._lc('cNJF8__Q5', {parent:component,parentTop:flkModal,events:{onrecord:function(e) {let $el = this; component.captureRecord(e)},onstart:function(e) {let $el = this; component.formObject.recordNote = null;component.clearRecord()}},state:'sttQ970'});
let cnd9SOd = component.recordData;
this.setState('stkkNz3', cnd9SOd);
if (cnd9SOd) { 
let elP9aXW = eo('button','5dDf',null, eventListeners, {onclick:[function(e) {var $el = this;component.clearRecord(true)}]},`title`,`${trans(`Remove record`)}`,`type`,`button`,`class`,`btn btn-danger btn-sm remove-record-btn`);
let elrtAQh = eo('i','JQRf',null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
}ec('div');
let el0ilXy = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elEStD_ = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'sttQ970'});
}
                    this.isReadyToGo();
                }
        });