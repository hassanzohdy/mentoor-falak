_Component({
                selector: 'chat-rooms-puzzles-answers-page',
                c: 'ChatRoomsPuzzlesAnswersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','openModal','closeModal','formObject','submit','answerStatus','isValidForm','submitting'],
                children: {cjObSUr6b:'flk-time-ago',cffJwet74:'admin-table',cA3XTSRon:'flk-modal'},
                render: function (component) {
                    let cmpXCQ0 = this._lc('cffJwet74', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,hideAddBtn:true,tableHeading:component.tableHeading},content:(adminTable) => {for (let i in component.items) {
let user = component.items[i]; 
 let iiIPBN = 'fnT3aL5' + i;
let elKeWtM = eo('tr','RMMqfXvi392J' + i+iiIPBN);
let el1rHmP = eo('td','y6Gff'+iiIPBN);
text(user.id);
ec('td');
let elZj5c9 = eo('td','gedff'+iiIPBN);
text(user.name);
ec('td');
let elCVJkI = eo('td','MXTff'+iiIPBN);
let cmpg9kn = this._lc('cjObSUr6b', {parent:component,parentTop:adminTable,props:{timestamp:user.chatRooms.sentAt.timestamp},insideLoop:true,index:"" +iiIPBN});
ec('td');
let elRlHCw = eo('td','e_3ff'+iiIPBN);
let elgcA5g = eo('a','gLsff'+iiIPBN,null, eventListeners, {onclick:[function(e) {var $el = this;component.editItem(user)}]});
text(trans('view-answers'));
ec('a');
ec('td');
ec('tr');
}
}});
let cnd64xu = component.openModal;
this.setState('stzUubi', cnd64xu);
if (cnd64xu) { 
let cmp1jQS = this._lc('cA3XTSRon', {parent:component,props:{modalHeader:component.crudOptions.hading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elTa8L4 = eo('h1');
text(`Answer URL`);
ec('h1');
let el44R2b = eo('a',null,null,`href`,`${ component.formObject.chatRooms.answerUrl }`,`target`,`_blank`);
text(`View answer`);
ec('a');
let elQUODn = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]},`class`,`m-t-1`);

                if (! elQUODn.formHandler) {
                    window.cfrmdlr = elQUODn.formHandler = new FormHandler(elQUODn, component);
                } else {
                    window.cfrmdlr = elQUODn.formHandler;
                }
            let elFJlQ6 = eo('div',null,null,`class`,`form-group`);
let elygkpe = eo('div',null,null,`class`,`row`);
let elr21Gw = eo('div',null,null,`class`,`col-md-6`);
let elG_6zT = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.chatRooms.status = this.value;}]},`value`,`${fval(component.formObject.chatRooms.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`);
elG_6zT.value = fval(component.formObject.chatRooms.status);
for (let i in component.answerStatus) {
let type = component.answerStatus[i]; 
 let iiUXr1 = 'XfaxUZu' + i;
let elwI_Cx = eo('option','zeE5D0JYqdF4' + i+iiUXr1,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elwI_Cx.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let elpkNFe = eo('div',null,null,`class`,`col-md-6`);
let el6JokB = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.chatRooms.reward = this.value;}]},`value`,`${fval(component.formObject.chatRooms.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward`);
el6JokB.value = fval(component.formObject.chatRooms.reward);
ec('div');
ec('div');
ec('div');
let elQlywz = eo('div',null,null,`class`,`form-group`);
let el9Ow3J = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.chatRooms.notes = this.value;}]},`value`,`${fval(component.formObject.chatRooms.notes)}`,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`password`,`class`,`form-control`);
el9Ow3J.value = fval(component.formObject.chatRooms.notes);
ec('textarea');
ec('div');
let elvYtSG = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elP1kHl = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stzUubi'});
}
                    this.isReadyToGo();
                }
        });