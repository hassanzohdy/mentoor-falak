_Component({
                selector: 'chat-rooms-puzzles-answers-page',
                c: 'ChatRoomsPuzzlesAnswersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','openModal','closeModal','formObject','submit','answerStatus','isValidForm','submitting'],
                children: {ccjP5khOm:'flk-time-ago',c2CKUWU1g:'admin-table',crpM1BQuu:'flk-modal'},
                render: function (component) {
                    let cmpDNO3 = this._lc('c2CKUWU1g', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,hideAddBtn:true,tableHeading:component.tableHeading},content:(adminTable) => {for (let i in component.items) {
let user = component.items[i]; 
 let iiEUjw = 'Y9VjG1p' + i;
let elMBc2n = eo('tr','l0Y0omFSUF5T' + i+iiEUjw);
let elCSSa9 = eo('td','P7Tff'+iiEUjw);
text(user.id);
ec('td');
let elnsDdV = eo('td','umlff'+iiEUjw);
text(user.name);
ec('td');
let el5tQtX = eo('td','s5Mff'+iiEUjw);
let cmpSxwH = this._lc('ccjP5khOm', {parent:component,parentTop:adminTable,props:{timestamp:user.chatRooms.sentAt.timestamp},insideLoop:true,index:"" +iiEUjw});
ec('td');
let elKQhrc = eo('td','7moff'+iiEUjw);
let elC0x3r = eo('a','r0kff'+iiEUjw,null, eventListeners, {onclick:[function(e) {var $el = this;component.editItem(user)}]});
text(trans('view-answers'));
ec('a');
ec('td');
ec('tr');
}
}});
let cnd8iK8 = component.openModal;
this.setState('sthjfFm', cnd8iK8);
if (cnd8iK8) { 
let cmp_3Rb = this._lc('crpM1BQuu', {parent:component,props:{modalHeader:component.crudOptions.hading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elpWJJP = eo('h1');
text(`Answer URL`);
ec('h1');
let el_My34 = eo('a',null,null,`href`,`${ component.formObject.chatRooms.answerUrl }`,`target`,`_blank`);
text(`View answer`);
ec('a');
let eliQPjC = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]},`class`,`m-t-1`);

                if (! eliQPjC.formHandler) {
                    window.cfrmdlr = eliQPjC.formHandler = new FormHandler(eliQPjC, component);
                } else {
                    window.cfrmdlr = eliQPjC.formHandler;
                }
            let elQKwdY = eo('div',null,null,`class`,`form-group`);
let elUMsaA = eo('div',null,null,`class`,`row`);
let elxa6OW = eo('div',null,null,`class`,`col-md-6`);
let elvPPkb = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.chatRooms.status = this.value;}]},`value`,`${fval(component.formObject.chatRooms.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`);
elvPPkb.value = fval(component.formObject.chatRooms.status);
for (let i in component.answerStatus) {
let type = component.answerStatus[i]; 
 let iiWt73 = 'hjhyuQA' + i;
let elbKIq1 = eo('option','gKjUAKeBVKnM' + i+iiWt73,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elbKIq1.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let el_X1Aw = eo('div',null,null,`class`,`col-md-6`);
let elLuVwF = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.chatRooms.reward = this.value;}]},`value`,`${fval(component.formObject.chatRooms.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward`);
elLuVwF.value = fval(component.formObject.chatRooms.reward);
ec('div');
ec('div');
ec('div');
let elWXRFd = eo('div',null,null,`class`,`form-group`);
let elQOgUI = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.chatRooms.notes = this.value;}]},`value`,`${fval(component.formObject.chatRooms.notes)}`,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`password`,`class`,`form-control`);
elQOgUI.value = fval(component.formObject.chatRooms.notes);
ec('textarea');
ec('div');
let elV6xOx = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let el8OpiX = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'sthjfFm'});
}
                    this.isReadyToGo();
                }
        });