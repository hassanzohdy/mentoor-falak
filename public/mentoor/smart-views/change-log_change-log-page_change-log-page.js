_Component({
                selector: 'change-log-page',
                c: 'ChangeLogPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openModal','isLoading','changeLogs','modalShouldBeOpened','heading','submit','data'],
                children: {cjJbJPMRA:'flk-spinner',c5kc8fLsD:'markdown',cPboHeUz2:'layout',cFvMpmqv5:'flk-datepicker',cH3Ze9dl7:'flk-checkbox',cB4DlEJwH:'flk-modal'},
                render: function (component) {
                    let cmprGwu = this._lc('cPboHeUz2', {parent:component,content:(layout) => {let el2pvhc = eo('h1');
text(`Change Log`);
let cndone2 = component.user.id == 1;
this.setState('stPT7Rz', cndone2);
if (cndone2) { 
let elSwhhH = eo('button','dmQf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`type`,`button`,`class`,`btn btn-circle btn-success`);
let elgcJdh = eo('i','ziZf',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');
}ec('h1');
let elFltzP = eo('p',null,null,`class`,`m-b-4 m-t-1`);
text(`All changes happen in`);
let elNbXXJ = eo('strong',null,null,`class`,`mx-2`);
text(`Mentoor.io`);
ec('strong');
text(`are listed here
        chronologically.`);
ec('p');
let cndQUPw = component.isLoading;
this.setState('stb6EQJ', cndQUPw);
let cnd7z19 = !(cndQUPw);
this.setState('stfuDhm', cnd7z19);
if (cndQUPw) { 
let cmpZARo = this._lc('cjJbJPMRA', {parent:component,parentTop:layout,state:'stb6EQJ'});
}else { 
for (let index in component.changeLogs) {
let version = component.changeLogs[index]; 
 let iiOL7m = '6W6yWKg' + index;
let elRRDyx = eo('div','5cb7lYIOaw7G' + index+iiOL7m,null,`class`,`version`);
let elUkrZ_ = eo('h1','HwJff'+iiOL7m,null,`class`,`m-b-1`);
let el1DXS8 = eo('span','Xewff'+iiOL7m);
text('Version ' + version.version);
ec('span');
let cndPwnh = component.user.id == 1;
this.setState('stxHPWT', cndPwnh);
if (cndPwnh) { 
let eluyFq9 = eo('button','hm0ff'+iiOL7m,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', version, index)}]},`class`,`btn btn-circle btn-primary ml-2`);
let elmezYn = eo('i','f6Rff'+iiOL7m,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');
}ec('h1');
let elZ4TFa = eo('h3','skSff'+iiOL7m,null,`class`,`release-date`);
text(version.releaseDate);
ec('h3');
let cmpBJGo = this._lc('c5kc8fLsD', {parent:component,parentTop:layout,props:{content:version.log},insideLoop:true,index:"" +iiOL7m});
ec('div');
}
}}});
let cndd1re = component.modalShouldBeOpened;
this.setState('st1VIie', cndd1re);
if (cndd1re) { 
component.modal = this._lc('cB4DlEJwH', {parent:component,props:{header:component.heading},events:{onclose:function(e) {let $el = this; component.modalShouldBeOpened = null}},content:(flkModal) => {let elvzAnA = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elvzAnA.formHandler) {
                    window.cfrmdlr = elvzAnA.formHandler = new FormHandler(elvzAnA, component);
                } else {
                    window.cfrmdlr = elvzAnA.formHandler;
                }
            let elU7_un = eo('div',null,null,`class`,`form-group`);
elU7_un.cls = {'group-error': !!elvzAnA.formHandler.getError(`version`) };

            for (let className in elU7_un.cls) {
                elU7_un.classList.toggle(className, elU7_un.cls[className]);
            }  
            let elGDepY = eo('label',null,null,`for`,`version`);
text(trans('Version'));
let el1Wj4i = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elUK1QN = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.version = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elvzAnA.formHandler.addError(`version`, 'required', trans('validation.required'));}return elvzAnA.formHandler.removeError(`version`);}]},`value`,`${fval(component.data.version)}`,`name`,`${(`version`).toInputName()}`,`placeholder`,`${trans(`Version`)}`,`type`,`text`,`class`,`form-control`,`id`,`version`);
elUK1QN.value = fval(component.data.version);
let cndnmYw = elvzAnA.formHandler.getError(`version`);
this.setState('str8FqM', cndnmYw);
if (cndnmYw) { 
let elUdV5k = eo('div','x91f',null,`class`,`alert alert-danger`);
text(elvzAnA.formHandler.getError(`version`));
ec('div');
}ec('div');
let cmpbeW_ = this._lc('cFvMpmqv5', {parent:component,parentTop:flkModal,props:{value:component.data.releaseDate},attrs:{name:`${(`releaseDate`).toInputName()}`,placeholder:`${trans(`Release date`)}`,label:'Release date',required:'',class:'form-control'},state:'st1VIie'});
let el3vLmZ = eo('div',null,null,`class`,`form-group`);
el3vLmZ.cls = {'group-error': !!elvzAnA.formHandler.getError(`log`) };

            for (let className in el3vLmZ.cls) {
                el3vLmZ.classList.toggle(className, el3vLmZ.cls[className]);
            }  
            let elN7stA = eo('label',null,null,`for`,`log`);
text(trans('Changes'));
let elcT9B9 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elmh5Qh = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.log = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elvzAnA.formHandler.addError(`log`, 'required', trans('validation.required'));}return elvzAnA.formHandler.removeError(`log`);}]},`value`,`${fval(component.data.log)}`,`name`,`${(`log`).toInputName()}`,`placeholder`,`${trans(`Changes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`log`);
elmh5Qh.value = fval(component.data.log);
ec('textarea');
let cndnU3F = elvzAnA.formHandler.getError(`log`);
this.setState('stepkYs', cndnU3F);
if (cndnU3F) { 
let elmav6P = eo('div','U7Pf',null,`class`,`alert alert-danger`);
text(elvzAnA.formHandler.getError(`log`));
ec('div');
}ec('div');
let elefh9d = eo('div',null,null,`class`,`form-group`);
let cmp4fX5 = this._lc('cH3Ze9dl7', {parent:component,parentTop:flkModal,props:{checked:component.data.published},events:{onchange:function(e) {let $el = this; component.data.published = $el.checked}},boolAttrs:{checked:component.data.published},attrs:{name:`${(`published`).toInputName()}`,label:'Published',value:1},state:'st1VIie'});
ec('div');
let elhyFN6 = eo('button',null,null,`class`,`btn btn-success`);
text(`Save`);
ec('button');
ec('form');
},attrs:{size:'small'},state:'st1VIie'});
}
                    this.isReadyToGo();
                }
        });