_Component({
                selector: 'einstein-answers-page',
                c: 'EinsteinAnswers', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','openModal','closeModal','formObject','submit','answerStatus','recordSrc','captureRecord','clearRecord','recordData','isValidForm','submitting'],
                children: {caZ33QUWs:'admin-table',cjUJ9kc_x:'markdown',cCrfYxfH3:'gold-icon',cSZbi3hmu:'markdown',cRBZFbfYI:'flk-audio-player',cTjgd0tid:'flk-audio-recorder',ccwZyQTLW:'flk-modal'},
                render: function (component) {
                    let cmpug8e = this._lc('caZ33QUWs', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,hideAddBtn:true,tableHeading:component.tableHeading},content:(adminTable) => {for (let i in component.items) {
let record = component.items[i]; 
 let iiucBU = 'ZSje7XV' + i;
let elMKyYa = eo('tr','vUyv91hllcjb' + i+iiucBU);
let elFon4Z = eo('td','mBjff'+iiucBU);
text(record.id);
ec('td');
let elYY9ML = eo('td','Qh_ff'+iiucBU);
text(record.category.name);
ec('td');
let elgdkK3 = eo('td','b80ff'+iiucBU);
text(record.title);
ec('td');
let elIg5so = eo('td','HwCff'+iiucBU);
text(record.by.name);
ec('td');
let el6ULdC = eo('td','9K7ff'+iiucBU);
let elyD2eI = eo('a','9vMff'+iiucBU,null, eventListeners, {onclick:[function(e) {var $el = this;component.editItem(record)}]});
text(trans('view'));
ec('a');
ec('td');
ec('tr');
}
}});
let cndKij7 = component.openModal;
this.setState('stLGMGm', cndKij7);
if (cndKij7) { 
let cmppLBo = this._lc('ccwZyQTLW', {parent:component,props:{modalHeader:component.crudOptions.hading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elxfwkU = eo('div',null,null,`class`,`row`);
let elD_X3n = eo('div',null,null,`class`,`col-9`);
let el_sqkp = eo('h1');
text(`Answer`);
ec('h1');
let cndVd0T = component.formObject.answer;
this.setState('stljzrr', cndVd0T);
if (cndVd0T) { 
let cmpCIfx = this._lc('cjUJ9kc_x', {parent:component,parentTop:flkModal,props:{content:component.formObject.answer},state:'stljzrr'});
}ec('div');
let elpMk4R = eo('div',null,null,`class`,`col-3`);
let elv9_Uh = eo('div',null,null,`class`,`m-v-1`);
let elpXBW3 = eo('span');
text(`Answer by`);
ec('span');
let elAR_YI = eo('strong',null,null,`class`,`m-h-1`);
text(component.formObject.by.name);
ec('strong');
ec('div');
let ell9aX7 = eo('div',null,null,`class`,`m-v-1`);
let elaDvhr = eo('span');
text(`Reward`);
ec('span');
let cmpCXUY = this._lc('cCrfYxfH3', {parent:component,parentTop:flkModal,props:{coins:component.formObject.reward},state:'stLGMGm'});
ec('div');
let elxdOWy = eo('h4',null,null,`class`,`bold m-v-1`);
text(`Quest`);
ec('h4');
let cmp4OSW = this._lc('cSZbi3hmu', {parent:component,parentTop:flkModal,props:{content:component.formObject.quest},state:'stLGMGm'});
ec('div');
ec('div');
let elBv53s = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elBv53s.formHandler) {
                    window.cfrmdlr = elBv53s.formHandler = new FormHandler(elBv53s, component);
                } else {
                    window.cfrmdlr = elBv53s.formHandler;
                }
            let elTEnvd = eo('div',null,null,`class`,`form-group`);
let eld4YmA = eo('div',null,null,`class`,`row`);
let elp8fD4 = eo('div',null,null,`class`,`col-md-6`);
let ellk7kK = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.status = this.value;}]},`value`,`${fval(component.formObject.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`,`id`,`pepo`);
ellk7kK.value = fval(component.formObject.status);
for (let i in component.answerStatus) {
let type = component.answerStatus[i]; 
 let ii0reH = 'QkhRcth' + i;
let eln2I_I = eo('option','oFrhVdjTHoR7' + i+ii0reH,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
eln2I_I.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let elu4Fg1 = eo('div',null,null,`class`,`col-md-6`);
let elxr8kt = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.reward = this.value;}]},`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`type`,`number`,`value`,`${ component.formObject.reward  }`,`class`,`form-control`,`id`,`reward`);
ec('div');
ec('div');
ec('div');
let elHnHLy = eo('div',null,null,`class`,`form-group`);
let elbtS5p = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.comment = this.value;}]},`value`,`${fval(component.formObject.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elbtS5p.value = fval(component.formObject.comment);
ec('textarea');
ec('div');
let elyZy3X = eo('div',null,null,`class`,`form-group`);
let cndwsW2 = component.recordSrc || component.formObject.recordNote;
this.setState('st8bUYJ', cndwsW2);
if (cndwsW2) { 
let cmpthAx = this._lc('cRBZFbfYI', {parent:component,parentTop:flkModal,props:{src:component.recordSrc || component.formObject.recordNote},attrs:{src:`${component.recordSrc || component.formObject.recordNote}`},state:'st8bUYJ'});
}let cmpOkY0 = this._lc('cTjgd0tid', {parent:component,parentTop:flkModal,events:{onrecord:function(e) {let $el = this; component.captureRecord(e)},onstart:function(e) {let $el = this; component.formObject.recordNote = null;component.clearRecord()}},state:'stLGMGm'});
let cnd0Bn3 = component.recordData;
this.setState('stooxYS', cnd0Bn3);
if (cnd0Bn3) { 
let ely3xLI = eo('button','SRqf',null, eventListeners, {onclick:[function(e) {var $el = this;component.clearRecord(true)}]},`title`,`${trans(`Remove record`)}`,`type`,`button`,`class`,`btn btn-danger btn-sm remove-record-btn`);
let elkeGAo = eo('i','KqGf',null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');
}ec('div');
let elkirFz = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elFa1Pv = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stLGMGm'});
}
                    this.isReadyToGo();
                }
        });