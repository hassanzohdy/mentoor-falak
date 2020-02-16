_Component({
                selector: 'chat-rooms-puzzles-answers-page',
                c: 'ChatRoomsPuzzlesAnswersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','openModal','closeModal','formObject','submit','answerStatus','isValidForm','submitting'],
                children: {c4jZNKpaK:'flk-time-ago',c4T39D_dF:'admin-table',c3I9p6Jhk:'flk-modal'},
                render: function (component) {
                    let cmp5vTF = this._lc('c4T39D_dF', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,hideAddBtn:true,tableHeading:component.tableHeading},content:(adminTable) => {for (let i in component.items) {
let user = component.items[i]; 
 let iiyDbr = 'qtXd7FR' + i;
let elvI9NR = eo('tr','lc4wzgTjuBsz' + i+iiyDbr);
let elPvRW2 = eo('td','uRWff'+iiyDbr);
text(user.id);
ec('td');
let elV9HwQ = eo('td','Is8ff'+iiyDbr);
text(user.name);
ec('td');
let elGHM7q = eo('td','3fLff'+iiyDbr);
let cmp6qVq = this._lc('c4jZNKpaK', {parent:component,parentTop:adminTable,props:{timestamp:user.chatRooms.sentAt.timestamp},insideLoop:true,index:"" +iiyDbr});
ec('td');
let elqEzGv = eo('td','zc7ff'+iiyDbr);
let el1eAPv = eo('a','OgXff'+iiyDbr,null, eventListeners, {onclick:[function(e) {var $el = this;component.editItem(user)}]});
text(trans('view-answers'));
ec('a');
ec('td');
ec('tr');
}
}});
let cndNLpM = component.openModal;
this.setState('stVz5xZ', cndNLpM);
if (cndNLpM) { 
let cmpOsCI = this._lc('c3I9p6Jhk', {parent:component,props:{modalHeader:component.crudOptions.hading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elt9410 = eo('h1');
text(`Answer URL`);
ec('h1');
let el6eVU6 = eo('a',null,null,`href`,`${ component.formObject.chatRooms.answerUrl }`,`target`,`_blank`);
text(`View answer`);
ec('a');
let ela6z0y = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]},`class`,`m-t-1`);

                if (! ela6z0y.formHandler) {
                    window.cfrmdlr = ela6z0y.formHandler = new FormHandler(ela6z0y, component);
                } else {
                    window.cfrmdlr = ela6z0y.formHandler;
                }
            let elJRzzc = eo('div',null,null,`class`,`form-group`);
let elmyjpF = eo('div',null,null,`class`,`row`);
let elcX8As = eo('div',null,null,`class`,`col-md-6`);
let elwTNDE = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.chatRooms.status = this.value;}]},`value`,`${fval(component.formObject.chatRooms.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`);
elwTNDE.value = fval(component.formObject.chatRooms.status);
for (let i in component.answerStatus) {
let type = component.answerStatus[i]; 
 let iijf8z = 'iUojLcB' + i;
let elJlenR = eo('option','78BKqNErbKM1' + i+iijf8z,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elJlenR.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let elWvwL1 = eo('div',null,null,`class`,`col-md-6`);
let elZ8F6S = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.chatRooms.reward = this.value;}]},`value`,`${fval(component.formObject.chatRooms.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward`);
elZ8F6S.value = fval(component.formObject.chatRooms.reward);
ec('div');
ec('div');
ec('div');
let el3HnCD = eo('div',null,null,`class`,`form-group`);
let eld2S03 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.chatRooms.notes = this.value;}]},`value`,`${fval(component.formObject.chatRooms.notes)}`,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`password`,`class`,`form-control`);
eld2S03.value = fval(component.formObject.chatRooms.notes);
ec('textarea');
ec('div');
let elNh49C = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elAvx_t = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stVz5xZ'});
}
                    this.isReadyToGo();
                }
        });