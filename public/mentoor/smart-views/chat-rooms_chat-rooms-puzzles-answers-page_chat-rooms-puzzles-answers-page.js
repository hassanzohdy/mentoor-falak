_Component({
                selector: 'chat-rooms-puzzles-answers-page',
                c: 'ChatRoomsPuzzlesAnswersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','openModal','closeModal','formObject','submit','answerStatus','isValidForm','submitting'],
                children: {c7OyQwo_C:'flk-time-ago',cuFgiF_hp:'admin-table',ch44HAPJZ:'flk-modal'},
                render: function (component) {
                    let cmpCjKz = this._lc('cuFgiF_hp', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,hideAddBtn:true,tableHeading:component.tableHeading},content:(adminTable) => {for (let i in component.items) {
let user = component.items[i]; 
 let ii1T8u = 'Igybimi' + i;
let el9VzXb = eo('tr','Kigsj0a4DxsU' + i+ii1T8u);
let elZqqyG = eo('td','AoXff'+ii1T8u);
text(user.id);
ec('td');
let elJmJDZ = eo('td','0iVff'+ii1T8u);
text(user.name);
ec('td');
let eldy1a5 = eo('td','IsJff'+ii1T8u);
let cmpTUgX = this._lc('c7OyQwo_C', {parent:component,parentTop:adminTable,props:{timestamp:user.chatRooms.sentAt.timestamp},insideLoop:true,index:"" +ii1T8u});
ec('td');
let elDukt0 = eo('td','xlpff'+ii1T8u);
let el3t4vg = eo('a','AGVff'+ii1T8u,null, eventListeners, {onclick:[function(e) {var $el = this;component.editItem(user)}]});
text(trans('view-answers'));
ec('a');
ec('td');
ec('tr');
}
}});
let cndZeav = component.openModal;
this.setState('sthm3qm', cndZeav);
if (cndZeav) { 
let cmp9OaE = this._lc('ch44HAPJZ', {parent:component,props:{modalHeader:component.crudOptions.hading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elNiJr7 = eo('h1');
text(`Answer URL`);
ec('h1');
let el7SFBO = eo('a',null,null,`href`,`${ component.formObject.chatRooms.answerUrl }`,`target`,`_blank`);
text(`View answer`);
ec('a');
let el5K6Op = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]},`class`,`m-t-1`);

                if (! el5K6Op.formHandler) {
                    window.cfrmdlr = el5K6Op.formHandler = new FormHandler(el5K6Op, component);
                } else {
                    window.cfrmdlr = el5K6Op.formHandler;
                }
            let elk3o2N = eo('div',null,null,`class`,`form-group`);
let elRS7vj = eo('div',null,null,`class`,`row`);
let elaWS49 = eo('div',null,null,`class`,`col-md-6`);
let elyUhjB = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.chatRooms.status = this.value;}]},`value`,`${fval(component.formObject.chatRooms.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`);
elyUhjB.value = fval(component.formObject.chatRooms.status);
for (let i in component.answerStatus) {
let type = component.answerStatus[i]; 
 let ii02yg = 'fZHe2iZ' + i;
let elmCaIY = eo('option','ncJdFg95fd1Y' + i+ii02yg,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elmCaIY.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let el1qoGJ = eo('div',null,null,`class`,`col-md-6`);
let elTGFyU = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.chatRooms.reward = this.value;}]},`value`,`${fval(component.formObject.chatRooms.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward`);
elTGFyU.value = fval(component.formObject.chatRooms.reward);
ec('div');
ec('div');
ec('div');
let elD5H8R = eo('div',null,null,`class`,`form-group`);
let el_HiaH = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.chatRooms.notes = this.value;}]},`value`,`${fval(component.formObject.chatRooms.notes)}`,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`password`,`class`,`form-control`);
el_HiaH.value = fval(component.formObject.chatRooms.notes);
ec('textarea');
ec('div');
let elAU8Dh = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let el675EC = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'sthm3qm'});
}
                    this.isReadyToGo();
                }
        });