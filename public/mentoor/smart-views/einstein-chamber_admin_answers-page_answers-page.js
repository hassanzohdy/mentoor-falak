_Component({
                selector: 'einstein-answers-page',
                c: 'EinsteinAnswers', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','openModal','closeModal','formObject','submit','answerStatus','recordSrc','captureRecord','clearRecord','recordData','isValidForm','submitting'],
                children: {c0RiKel2P:'admin-table',cpxbPQFCH:'markdown',cLxsNB3Rw:'gold-icon',clQ3YYoHs:'markdown',cM9Gs3v2y:'flk-audio-player',cwlpUVztC:'flk-audio-recorder',cWszvU7KB:'flk-modal'},
                render: function (component) {
                    let cmpmOAb = this._lc('c0RiKel2P', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,hideAddBtn:true,tableHeading:component.tableHeading},content:(adminTable) => {for (let i in component.items) {
let record = component.items[i]; 
 let iibNlQ = 'ecYOqTi' + i;
let elDrxxK = eo('tr','4PX949HOm0Nc' + i+iibNlQ);
let el7FttP = eo('td','MQmff'+iibNlQ);
text(record.id);
ec('td');
let el55XL4 = eo('td','iAiff'+iibNlQ);
text(record.category.name);
ec('td');
let eldR0y8 = eo('td','ANjff'+iibNlQ);
text(record.title);
ec('td');
let elpcf9V = eo('td','4V9ff'+iibNlQ);
text(record.by.name);
ec('td');
let elIbvn7 = eo('td','yQdff'+iibNlQ);
let el1YNa6 = eo('a','OX4ff'+iibNlQ,null, eventListeners, {onclick:[function(e) {var $el = this;component.editItem(record)}]});
text(trans('view'));
ec('a');
ec('td');
ec('tr');
}
}});
let cnd_bR7 = component.openModal;
this.setState('stYl73P', cnd_bR7);
if (cnd_bR7) { 
let cmpC5wE = this._lc('cWszvU7KB', {parent:component,props:{modalHeader:component.crudOptions.hading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elgYXWY = eo('div',null,null,`class`,`row`);
let elERYS8 = eo('div',null,null,`class`,`col-9`);
let eljrRIB = eo('h1');
text(`Answer`);
ec('h1');
let cndhHko = component.formObject.answer;
this.setState('stt81PN', cndhHko);
if (cndhHko) { 
let cmptcvw = this._lc('cpxbPQFCH', {parent:component,parentTop:flkModal,props:{content:component.formObject.answer},state:'stt81PN'});
}ec('div');
let elhd87t = eo('div',null,null,`class`,`col-3`);
let elm1OdH = eo('div',null,null,`class`,`m-v-1`);
let elW7BGt = eo('span');
text(`Answer by`);
ec('span');
let ell1jps = eo('strong',null,null,`class`,`m-h-1`);
text(component.formObject.by.name);
ec('strong');
ec('div');
let el8VraT = eo('div',null,null,`class`,`m-v-1`);
let el9NxDQ = eo('span');
text(`Reward`);
ec('span');
let cmpguZx = this._lc('cLxsNB3Rw', {parent:component,parentTop:flkModal,props:{coins:component.formObject.reward},state:'stYl73P'});
ec('div');
let elKk9m0 = eo('h4',null,null,`class`,`bold m-v-1`);
text(`Quest`);
ec('h4');
let cmpFFJL = this._lc('clQ3YYoHs', {parent:component,parentTop:flkModal,props:{content:component.formObject.quest},state:'stYl73P'});
ec('div');
ec('div');
let elrwaJ4 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elrwaJ4.formHandler) {
                    window.cfrmdlr = elrwaJ4.formHandler = new FormHandler(elrwaJ4, component);
                } else {
                    window.cfrmdlr = elrwaJ4.formHandler;
                }
            let elc7weD = eo('div',null,null,`class`,`form-group`);
let elRjuCE = eo('div',null,null,`class`,`row`);
let el1wocS = eo('div',null,null,`class`,`col-md-6`);
let elPDeXn = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.status = this.value;}]},`value`,`${fval(component.formObject.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`,`id`,`pepo`);
elPDeXn.value = fval(component.formObject.status);
for (let i in component.answerStatus) {
let type = component.answerStatus[i]; 
 let iiHIj4 = 'xPWMAga' + i;
let el1ldmN = eo('option','CWgPuYsSyan9' + i+iiHIj4,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
el1ldmN.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let elW5aKd = eo('div',null,null,`class`,`col-md-6`);
let el5rTOp = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.reward = this.value;}]},`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`type`,`number`,`value`,`${ component.formObject.reward  }`,`class`,`form-control`,`id`,`reward`);
ec('div');
ec('div');
ec('div');
let elUC_cU = eo('div',null,null,`class`,`form-group`);
let elVlOw6 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.comment = this.value;}]},`value`,`${fval(component.formObject.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elVlOw6.value = fval(component.formObject.comment);
ec('textarea');
ec('div');
let elWSCAX = eo('div',null,null,`class`,`form-group`);
let cnd90BH = component.recordSrc || component.formObject.recordNote;
this.setState('stjfkCM', cnd90BH);
if (cnd90BH) { 
let cmp9poF = this._lc('cM9Gs3v2y', {parent:component,parentTop:flkModal,props:{src:component.recordSrc || component.formObject.recordNote},attrs:{src:`${component.recordSrc || component.formObject.recordNote}`},state:'stjfkCM'});
}let cmpo74d = this._lc('cwlpUVztC', {parent:component,parentTop:flkModal,events:{onrecord:function(e) {let $el = this; component.captureRecord(e)},onstart:function(e) {let $el = this; component.formObject.recordNote = null;component.clearRecord()}},state:'stYl73P'});
let cndMlkR = component.recordData;
this.setState('stYti7M', cndMlkR);
if (cndMlkR) { 
let elDjzhZ = eo('button','4jnf',null, eventListeners, {onclick:[function(e) {var $el = this;component.clearRecord(true)}]},`title`,`${trans(`Remove record`)}`,`type`,`button`,`class`,`btn btn-danger btn-sm remove-record-btn`);
let elBMpiJ = eo('i','wKdf',null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');
}ec('div');
let elrDwwo = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elus3M3 = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stYl73P'});
}
                    this.isReadyToGo();
                }
        });