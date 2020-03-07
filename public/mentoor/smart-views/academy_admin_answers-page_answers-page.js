_Component({
                selector: 'answers-page',
                c: 'AnswersPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','openModal','closeModal','formObject','submit','answerStatus','recordSrc','captureRecord','clearRecord','recordData','isValidForm','submitting'],
                children: {c3xKhnHMU:'flk-time-ago',co7hlNiD8:'admin-table',cOeMki2t_:'markdown',coV61nt7z:'gold-icon',cPvpKF1qv:'markdown',c6Mu87l5p:'flk-audio-player',ceZpLPaF5:'flk-audio-recorder',cXDvNTHSv:'flk-modal'},
                render: function (component) {
                    let cmpFybX = this._lc('co7hlNiD8', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,hideAddBtn:true,tableHeading:component.tableHeading},content:(adminTable) => {for (let i in component.items) {
let answer = component.items[i]; 
 let iixBv9 = 'hhge8ou' + i;
let elHXgMl = eo('tr','4cnSNcuvOaq2' + i+iixBv9);
let elrMSFC = eo('td','nxnff'+iixBv9);
text(answer.id);
ec('td');
let elJOZVG = eo('td','olgff'+iixBv9);
text(answer.track.name);
ec('td');
let elei2cr = eo('td','lfCff'+iixBv9);
text(answer.topic.title);
ec('td');
let elMD4T5 = eo('td','ikLff'+iixBv9);
let cmpAxbv = this._lc('c3xKhnHMU', {parent:component,parentTop:adminTable,props:{timestamp:answer.createdAt.timestamp},insideLoop:true,index:"" +iixBv9});
ec('td');
let elu9vQz = eo('td','N2Iff'+iixBv9);
text(answer.by.name);
ec('td');
let el7iAfc = eo('td','wFcff'+iixBv9);
let elnadlr = eo('a','YL6ff'+iixBv9,null, eventListeners, {onclick:[function(e) {var $el = this;component.editItem(answer)}]});
text(trans('view-answers'));
ec('a');
ec('td');
ec('tr');
}
}});
let cndYul4 = component.openModal;
this.setState('stfUxNh', cndYul4);
if (cndYul4) { 
let cmpB_1h = this._lc('cXDvNTHSv', {parent:component,props:{modalHeader:component.crudOptions.hading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elLIqpb = eo('div',null,null,`class`,`row`);
let elfDmPE = eo('div',null,null,`class`,`col-9`);
let elTDcNM = eo('h1');
text(`Answer`);
ec('h1');
let cmpyIhS = this._lc('cOeMki2t_', {parent:component,parentTop:flkModal,props:{content:component.formObject.answer},state:'stfUxNh'});
ec('div');
let el5U6Ix = eo('div',null,null,`class`,`col-3`);
let elZTIoJ = eo('div',null,null,`class`,`m-v-1`);
let elBddDH = eo('span');
text(`Answer by`);
ec('span');
let elFicyU = eo('strong',null,null,`class`,`m-h-1`);
text(component.formObject.by.name);
ec('strong');
ec('div');
let el9uVT3 = eo('div',null,null,`class`,`m-v-1`);
let elv21pS = eo('span');
text(`Prize`);
ec('span');
let cmpGUl0 = this._lc('coV61nt7z', {parent:component,parentTop:flkModal,props:{coins:component.formObject.topic.prize},state:'stfUxNh'});
ec('div');
let eleqlEa = eo('h4',null,null,`class`,`bold m-v-1`);
text(`Quest`);
ec('h4');
let cmpg06c = this._lc('cPvpKF1qv', {parent:component,parentTop:flkModal,props:{content:component.formObject.topic.quest || component.formObject.topic.shortDescription},state:'stfUxNh'});
ec('div');
ec('div');
let elY7Drr = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elY7Drr.formHandler) {
                    window.cfrmdlr = elY7Drr.formHandler = new FormHandler(elY7Drr, component);
                } else {
                    window.cfrmdlr = elY7Drr.formHandler;
                }
            let eld6H1j = eo('div',null,null,`class`,`form-group`);
let ele9nqQ = eo('div',null,null,`class`,`row`);
let eldp8mJ = eo('div',null,null,`class`,`col-md-6`);
let el4HhvP = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.status = this.value;}]},`value`,`${fval(component.formObject.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`);
el4HhvP.value = fval(component.formObject.status);
for (let i in component.answerStatus) {
let type = component.answerStatus[i]; 
 let iicWQ8 = 'QztTljc' + i;
let elP3Tfe = eo('option','5XJA3jBRwsoL' + i+iicWQ8,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elP3Tfe.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let elvoxfl = eo('div',null,null,`class`,`col-md-6`);
let elk08sI = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;}]},`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`prize`)}`,`type`,`number`,`value`,`${ component.formObject.prize || component.formObject.topic.prize  }`,`class`,`form-control`,`id`,`prize`);
ec('div');
ec('div');
ec('div');
let elPXCw3 = eo('div',null,null,`class`,`form-group`);
let eleBpVV = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.comment = this.value;}]},`value`,`${fval(component.formObject.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`password`,`class`,`form-control`);
eleBpVV.value = fval(component.formObject.comment);
ec('textarea');
ec('div');
let elbLEK1 = eo('div',null,null,`class`,`form-group`);
let cndQO4a = component.recordSrc || component.formObject.recordNote;
this.setState('st6EvKX', cndQO4a);
if (cndQO4a) { 
let cmpWVWu = this._lc('c6Mu87l5p', {parent:component,parentTop:flkModal,props:{src:component.recordSrc || component.formObject.recordNote},attrs:{src:`${component.recordSrc || component.formObject.recordNote}`},state:'st6EvKX'});
}let cmp5eHG = this._lc('ceZpLPaF5', {parent:component,parentTop:flkModal,events:{onrecord:function(e) {let $el = this; component.captureRecord(e)},onstart:function(e) {let $el = this; component.formObject.recordNote = null;component.clearRecord()}},state:'stfUxNh'});
let cnd7xhW = component.recordData;
this.setState('stHsX8P', cnd7xhW);
if (cnd7xhW) { 
let elXiYBw = eo('button','KzMf',null, eventListeners, {onclick:[function(e) {var $el = this;component.clearRecord(true)}]},`title`,`${trans(`Remove record`)}`,`type`,`button`,`class`,`btn btn-danger btn-sm remove-record-btn`);
let elqPIg6 = eo('i','DBqf',null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');
}ec('div');
let elkp7dz = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elzH33R = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stfUxNh'});
}
                    this.isReadyToGo();
                }
        });