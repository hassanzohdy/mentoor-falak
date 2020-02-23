_Component({
                selector: 'answers-page',
                c: 'AnswersPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','openModal','closeModal','formObject','submit','answerStatus','recordSrc','captureRecord','clearRecord','recordData','isValidForm','submitting'],
                children: {c7xk390eU:'flk-time-ago',cwr2QuAbk:'admin-table',chQNf56Tw:'markdown',cRLFW78S8:'gold-icon',c4Jsedu00:'markdown',cm2eqM4io:'flk-audio-player',cMNovwIYi:'flk-audio-recorder',caIJzX_Su:'flk-modal'},
                render: function (component) {
                    let cmpSAiG = this._lc('cwr2QuAbk', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,hideAddBtn:true,tableHeading:component.tableHeading},content:(adminTable) => {for (let i in component.items) {
let answer = component.items[i]; 
 let iijpJE = 'g4bA2ZJ' + i;
let elKRHdT = eo('tr','_ZhAlMX0RX5Y' + i+iijpJE);
let el390zH = eo('td','kfyff'+iijpJE);
text(answer.id);
ec('td');
let elNNWtQ = eo('td','y4Off'+iijpJE);
text(answer.track.name);
ec('td');
let elfD5O_ = eo('td','l1lff'+iijpJE);
text(answer.topic.title);
ec('td');
let elgHVpy = eo('td','yHdff'+iijpJE);
let cmp2Iff = this._lc('c7xk390eU', {parent:component,parentTop:adminTable,props:{timestamp:answer.createdAt.timestamp},insideLoop:true,index:"" +iijpJE});
ec('td');
let elgqvu4 = eo('td','WHAff'+iijpJE);
text(answer.by.name);
ec('td');
let el4ftZW = eo('td','QVnff'+iijpJE);
let elOKez0 = eo('a','dh6ff'+iijpJE,null, eventListeners, {onclick:[function(e) {var $el = this;component.editItem(answer)}]});
text(trans('view-answers'));
ec('a');
ec('td');
ec('tr');
}
}});
let cndbE6A = component.openModal;
this.setState('stvQpeS', cndbE6A);
if (cndbE6A) { 
let cmp3VIE = this._lc('caIJzX_Su', {parent:component,props:{modalHeader:component.crudOptions.hading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elycBL9 = eo('div',null,null,`class`,`row`);
let elaIpY3 = eo('div',null,null,`class`,`col-9`);
let el_vH6k = eo('h1');
text(`Answer`);
ec('h1');
let cmpcSI0 = this._lc('chQNf56Tw', {parent:component,parentTop:flkModal,props:{content:component.formObject.answer},state:'stvQpeS'});
ec('div');
let elQzOlZ = eo('div',null,null,`class`,`col-3`);
let el6m1eS = eo('div',null,null,`class`,`m-v-1`);
let elObzDQ = eo('span');
text(`Answer by`);
ec('span');
let elKhAcy = eo('strong',null,null,`class`,`m-h-1`);
text(component.formObject.by.name);
ec('strong');
ec('div');
let eldBsd8 = eo('div',null,null,`class`,`m-v-1`);
let el4Nax3 = eo('span');
text(`Prize`);
ec('span');
let cmpVhUZ = this._lc('cRLFW78S8', {parent:component,parentTop:flkModal,props:{coins:component.formObject.topic.prize},state:'stvQpeS'});
ec('div');
let elKyDcJ = eo('h4',null,null,`class`,`bold m-v-1`);
text(`Quest`);
ec('h4');
let cmpfaPN = this._lc('c4Jsedu00', {parent:component,parentTop:flkModal,props:{content:component.formObject.topic.quest || component.formObject.topic.shortDescription},state:'stvQpeS'});
ec('div');
ec('div');
let elhVPGR = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elhVPGR.formHandler) {
                    window.cfrmdlr = elhVPGR.formHandler = new FormHandler(elhVPGR, component);
                } else {
                    window.cfrmdlr = elhVPGR.formHandler;
                }
            let elMQdXv = eo('div',null,null,`class`,`form-group`);
let elq4ai3 = eo('div',null,null,`class`,`row`);
let elHwUkB = eo('div',null,null,`class`,`col-md-6`);
let elZEV6x = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.status = this.value;}]},`value`,`${fval(component.formObject.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`);
elZEV6x.value = fval(component.formObject.status);
for (let i in component.answerStatus) {
let type = component.answerStatus[i]; 
 let iiLLX3 = 'JC536nR' + i;
let elbIbqq = eo('option','3bhl9XX1K3yU' + i+iiLLX3,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elbIbqq.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let elvR1ea = eo('div',null,null,`class`,`col-md-6`);
let el8FMA7 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;}]},`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`prize`)}`,`type`,`number`,`value`,`${ component.formObject.prize || component.formObject.topic.prize  }`,`class`,`form-control`,`id`,`prize`);
ec('div');
ec('div');
ec('div');
let ela2fwI = eo('div',null,null,`class`,`form-group`);
let eldBHSd = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.comment = this.value;}]},`value`,`${fval(component.formObject.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`password`,`class`,`form-control`);
eldBHSd.value = fval(component.formObject.comment);
ec('textarea');
ec('div');
let elExyyp = eo('div',null,null,`class`,`form-group`);
let cndQ75S = component.recordSrc || component.formObject.recordNote;
this.setState('stf9GlE', cndQ75S);
if (cndQ75S) { 
let cmpCT4o = this._lc('cm2eqM4io', {parent:component,parentTop:flkModal,props:{src:component.recordSrc || component.formObject.recordNote},attrs:{src:`${component.recordSrc || component.formObject.recordNote}`},state:'stf9GlE'});
}let cmpPWtG = this._lc('cMNovwIYi', {parent:component,parentTop:flkModal,events:{onrecord:function(e) {let $el = this; component.captureRecord(e)},onstart:function(e) {let $el = this; component.formObject.recordNote = null;component.clearRecord()}},state:'stvQpeS'});
let cndx1Q5 = component.recordData;
this.setState('stgZgmv', cndx1Q5);
if (cndx1Q5) { 
let elcO0Em = eo('button','j4Tf',null, eventListeners, {onclick:[function(e) {var $el = this;component.clearRecord(true)}]},`title`,`${trans(`Remove record`)}`,`type`,`button`,`class`,`btn btn-danger btn-sm remove-record-btn`);
let elqX17j = eo('i','G4tf',null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
}ec('div');
let elTgBuz = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elg90Q0 = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stvQpeS'});
}
                    this.isReadyToGo();
                }
        });