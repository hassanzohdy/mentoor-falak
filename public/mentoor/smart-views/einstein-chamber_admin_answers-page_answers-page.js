_Component({
                selector: 'einstein-answers-page',
                c: 'EinsteinAnswers', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','openModal','closeModal','formObject','submit','answerStatus','recordSrc','captureRecord','clearRecord','recordData','isValidForm','submitting'],
                children: {c6haHbLqV:'admin-table',c2pqlHcnW:'markdown',c5m9YpDah:'gold-icon',cFz5DYKtH:'markdown',cPSWMUVku:'flk-audio-player',cMViG5eo_:'flk-audio-recorder',cQxMj39iX:'flk-modal'},
                render: function (component) {
                    let cmpCUYk = this._lc('c6haHbLqV', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,hideAddBtn:true,tableHeading:component.tableHeading},content:(adminTable) => {for (let i in component.items) {
let record = component.items[i]; 
 let iibE4s = 'i9s7fUL' + i;
let elyjL4V = eo('tr','wuT4OweAxyhm' + i+iibE4s);
let elG0e2c = eo('td','Q_9ff'+iibE4s);
text(record.id);
ec('td');
let elNSGRv = eo('td','c4bff'+iibE4s);
text(record.category.name);
ec('td');
let el_Eq2L = eo('td','97pff'+iibE4s);
text(record.title);
ec('td');
let el6_REa = eo('td','a0hff'+iibE4s);
text(record.by.name);
ec('td');
let elw9pYK = eo('td','93Xff'+iibE4s);
let elf7zKT = eo('a','I3Eff'+iibE4s,null, eventListeners, {onclick:[function(e) {var $el = this;component.editItem(record)}]});
text(trans('view'));
ec('a');
ec('td');
ec('tr');
}
}});
let cndeQGZ = component.openModal;
this.setState('stPkN71', cndeQGZ);
if (cndeQGZ) { 
let cmpcrht = this._lc('cQxMj39iX', {parent:component,props:{modalHeader:component.crudOptions.hading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elO8fgs = eo('div',null,null,`class`,`row`);
let elYlAYE = eo('div',null,null,`class`,`col-9`);
let eloDBQk = eo('h1');
text(`Answer`);
ec('h1');
let cndiEb8 = component.formObject.answer;
this.setState('stW8Fx0', cndiEb8);
if (cndiEb8) { 
let cmp_8Lb = this._lc('c2pqlHcnW', {parent:component,parentTop:flkModal,props:{content:component.formObject.answer},state:'stW8Fx0'});
}ec('div');
let elLaxaF = eo('div',null,null,`class`,`col-3`);
let elQOceP = eo('div',null,null,`class`,`m-v-1`);
let elA82Z_ = eo('span');
text(`Answer by`);
ec('span');
let elIYBfR = eo('strong',null,null,`class`,`m-h-1`);
text(component.formObject.by.name);
ec('strong');
ec('div');
let elaMNzl = eo('div',null,null,`class`,`m-v-1`);
let elNFer_ = eo('span');
text(`Reward`);
ec('span');
let cmpx46p = this._lc('c5m9YpDah', {parent:component,parentTop:flkModal,props:{coins:component.formObject.reward},state:'stPkN71'});
ec('div');
let elpyyAy = eo('h4',null,null,`class`,`bold m-v-1`);
text(`Quest`);
ec('h4');
let cmpCjFt = this._lc('cFz5DYKtH', {parent:component,parentTop:flkModal,props:{content:component.formObject.quest},state:'stPkN71'});
ec('div');
ec('div');
let elfgndi = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elfgndi.formHandler) {
                    window.cfrmdlr = elfgndi.formHandler = new FormHandler(elfgndi, component);
                } else {
                    window.cfrmdlr = elfgndi.formHandler;
                }
            let elvxfM0 = eo('div',null,null,`class`,`form-group`);
let elRocyK = eo('div',null,null,`class`,`row`);
let elF4wru = eo('div',null,null,`class`,`col-md-6`);
let elLegXi = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.status = this.value;}]},`value`,`${fval(component.formObject.status)}`,`name`,`${(`status`).toInputName()}`,`required`,``,`class`,`form-control`,`id`,`pepo`);
elLegXi.value = fval(component.formObject.status);
for (let i in component.answerStatus) {
let type = component.answerStatus[i]; 
 let iipVTK = 'kJex5BO' + i;
let el7cpuH = eo('option','G8cwrLD2aG5y' + i+iipVTK,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
el7cpuH.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
let elrEjAV = eo('div',null,null,`class`,`col-md-6`);
let elAtTit = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.reward = this.value;}]},`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`type`,`number`,`value`,`${ component.formObject.reward  }`,`class`,`form-control`,`id`,`reward`);
ec('div');
ec('div');
ec('div');
let elhxqtZ = eo('div',null,null,`class`,`form-group`);
let el1d6Bc = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.comment = this.value;}]},`value`,`${fval(component.formObject.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
el1d6Bc.value = fval(component.formObject.comment);
ec('textarea');
ec('div');
let elC_xVJ = eo('div',null,null,`class`,`form-group`);
let cndUdHg = component.recordSrc || component.formObject.recordNote;
this.setState('stvV02R', cndUdHg);
if (cndUdHg) { 
let cmp08f0 = this._lc('cPSWMUVku', {parent:component,parentTop:flkModal,props:{src:component.recordSrc || component.formObject.recordNote},attrs:{src:`${component.recordSrc || component.formObject.recordNote}`},state:'stvV02R'});
}let cmpnEzr = this._lc('cMViG5eo_', {parent:component,parentTop:flkModal,events:{onrecord:function(e) {let $el = this; component.captureRecord(e)},onstart:function(e) {let $el = this; component.formObject.recordNote = null;component.clearRecord()}},state:'stPkN71'});
let cndeJAm = component.recordData;
this.setState('stUb1wK', cndeJAm);
if (cndeJAm) { 
let elWB08z = eo('button','psQf',null, eventListeners, {onclick:[function(e) {var $el = this;component.clearRecord(true)}]},`title`,`${trans(`Remove record`)}`,`type`,`button`,`class`,`btn btn-danger btn-sm remove-record-btn`);
let el0VL9E = eo('i','6TTf',null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
}ec('div');
let elJKxuu = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elSuOOj = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stPkN71'});
}
                    this.isReadyToGo();
                }
        });