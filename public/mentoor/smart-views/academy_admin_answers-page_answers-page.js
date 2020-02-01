_Component({
                selector: 'answers-page',
                c: 'AnswersPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','openModal','closeModal','formObject','submit','answerStatus','recordSrc','captureRecord','clearRecord','recordData','isValidForm','submitting'],
                children: {casvzwOVO:'flk-time-ago',cDkoFno7P:'admin-table',cpbwvmzYN:'markdown',cNiUr18m2:'gold-icon',cYBxJjMMM:'markdown',cExjQawbI:'flk-audio-player',cvD7O2RHO:'flk-audio-recorder',cYHiEAnVD:'flk-modal'},
                render: function (component) {
                    let cmp6Bqo = this._lc('cDkoFno7P', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,hideAddBtn:true,tableHeading:component.tableHeading},content:(adminTable) => {for (let i in component.items) {
let answer = component.items[i]; 
 let iibrd2 = 'dyH9pOq' + i;
let elJimtg = eo('tr','mqxgxmzIS9Kx' + i+iibrd2);
let el95hEd = eo('td','tUXff'+iibrd2);
text(answer.id);
ec('td');
let elbkFbk = eo('td','8raff'+iibrd2);
text(answer.track.name);
ec('td');
let el6RBEA = eo('td','Sl6ff'+iibrd2);
text(answer.topic.title);
ec('td');
let elMuFPW = eo('td','gSVff'+iibrd2);
let cmpE19W = this._lc('casvzwOVO', {parent:component,parentTop:adminTable,props:{timestamp:answer.createdAt.timestamp},insideLoop:true,index:"" +iibrd2});
ec('td');
let el2dbvG = eo('td','SLrff'+iibrd2);
text(answer.by.name);
ec('td');
let elHlFww = eo('td','T6_ff'+iibrd2);
let elCbCaf = eo('a','0rVff'+iibrd2,null, eventListeners, {onclick:[function(e) {var $el = this;component.editItem(answer)}]});
text(trans('view-answers'));
ec('a');
ec('td');
ec('tr');
}
}});
let cndlDz9 = component.openModal;
this.setState('stEmytZ', cndlDz9);
if (cndlDz9) { 
let cmpaTfX = this._lc('cYHiEAnVD', {parent:component,props:{modalHeader:component.crudOptions.hading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elvvV0g = eo('div',null,null,`class`,`row`);
let el9kOuY = eo('div',null,null,`class`,`col-9`);
let elMNwAR = eo('h1');
text(`Answer`);
ec('h1');
let cmpGzyq = this._lc('cpbwvmzYN', {parent:component,parentTop:flkModal,props:{content:component.formObject.answer},state:'stEmytZ'});
ec('div');
let el_JdfR = eo('div',null,null,`class`,`col-3`);
let eluQ6oB = eo('div',null,null,`class`,`m-v-1`);
let elCK9tE = eo('span');
text(`Answer by`);
ec('span');
let elxiijT = eo('strong',null,null,`class`,`m-h-1`);
text(component.formObject.by.name);
ec('strong');
ec('div');
let el_yCDM = eo('div',null,null,`class`,`m-v-1`);
let elyo6UV = eo('span');
text(`Prize`);
ec('span');
let cmpIhuh = this._lc('cNiUr18m2', {parent:component,parentTop:flkModal,props:{coins:component.formObject.topic.prize},state:'stEmytZ'});
ec('div');
let elMSD7H = eo('h4',null,null,`class`,`bold m-v-1`);
text(`Quest`);
ec('h4');
let cmpmvKk = this._lc('cYBxJjMMM', {parent:component,parentTop:flkModal,props:{content:component.formObject.topic.quest || component.formObject.topic.shortDescription},state:'stEmytZ'});
ec('div');
ec('div');
let elfHKL0 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elfHKL0.formHandler) {
                    window.cfrmdlr = elfHKL0.formHandler = new FormHandler(elfHKL0, component);
                } else {
                    window.cfrmdlr = elfHKL0.formHandler;
                }
            let el9V4Ya = eo('div',null,null,`class`,`form-group`);
let elQt_Nd = eo('div',null,null,`class`,`row`);
let elt1jh4 = eo('div',null,null,`class`,`col-md-6`);
let elnmqii = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.status = this.value;}]},`value`,`${fval(component.formObject.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`);
elnmqii.value = fval(component.formObject.status);
for (let i in component.answerStatus) {
let type = component.answerStatus[i]; 
 let ii1Icn = 'toqpG7w' + i;
let eliJ73i = eo('option','tzoHgUokeqne' + i+ii1Icn,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
eliJ73i.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let elDySEQ = eo('div',null,null,`class`,`col-md-6`);
let el90fNM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;}]},`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`prize`)}`,`type`,`number`,`value`,`${ component.formObject.prize || component.formObject.topic.prize  }`,`class`,`form-control`,`id`,`prize`);
ec('div');
ec('div');
ec('div');
let eljFFBX = eo('div',null,null,`class`,`form-group`);
let elH2DSB = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.comment = this.value;}]},`value`,`${fval(component.formObject.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`password`,`class`,`form-control`);
elH2DSB.value = fval(component.formObject.comment);
ec('textarea');
ec('div');
let elPCzmZ = eo('div',null,null,`class`,`form-group`);
let cndlFZK = component.recordSrc || component.formObject.recordNote;
this.setState('stR41PJ', cndlFZK);
if (cndlFZK) { 
let cmprOms = this._lc('cExjQawbI', {parent:component,parentTop:flkModal,props:{src:component.recordSrc || component.formObject.recordNote},attrs:{src:`${component.recordSrc || component.formObject.recordNote}`},state:'stR41PJ'});
}let cmpnO0H = this._lc('cvD7O2RHO', {parent:component,parentTop:flkModal,events:{onrecord:function(e) {let $el = this; component.captureRecord(e)},onstart:function(e) {let $el = this; component.formObject.recordNote = null;component.clearRecord()}},state:'stEmytZ'});
let cndyJYz = component.recordData;
this.setState('stadeZw', cndyJYz);
if (cndyJYz) { 
let elRi90L = eo('button','aBSf',null, eventListeners, {onclick:[function(e) {var $el = this;component.clearRecord(true)}]},`title`,`${trans(`Remove record`)}`,`type`,`button`,`class`,`btn btn-danger btn-sm remove-record-btn`);
let elxouUk = eo('i','muof',null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
}ec('div');
let elJt_J4 = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elkLGRm = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stEmytZ'});
}
                    this.isReadyToGo();
                }
        });