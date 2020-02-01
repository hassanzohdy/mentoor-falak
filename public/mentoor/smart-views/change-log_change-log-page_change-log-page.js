_Component({
                selector: 'change-log-page',
                c: 'ChangeLogPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openModal','isLoading','changeLogs','modalShouldBeOpened','heading','submit','data'],
                children: {cpa0V6_Is:'flk-spinner',cMWKCk24s:'markdown',cyKx29igr:'layout',clXIsdo18:'flk-datepicker',cWgtEtgRw:'flk-checkbox',cM9klC1wj:'flk-modal'},
                render: function (component) {
                    let cmpawuA = this._lc('cyKx29igr', {parent:component,content:(layout) => {let elMbJ7S = eo('h1');
text(`Change Log`);
let cnd9bBE = component.user.id == 1;
this.setState('stpSFb3', cnd9bBE);
if (cnd9bBE) { 
let el3DJMG = eo('button','Exrf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`type`,`button`,`class`,`btn btn-circle btn-success`);
let elxhDE3 = eo('i','nI9f',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');
}ec('h1');
let elQX9PQ = eo('p',null,null,`class`,`m-b-4 m-t-1`);
text(`All changes happen in`);
let elhDExl = eo('strong',null,null,`class`,`mx-2`);
text(`Mentoor.io`);
ec('strong');
text(`are listed here
        chronologically.`);
ec('p');
let cndare4 = component.isLoading;
this.setState('stXLKrI', cndare4);
let cnd8EFf = !(cndare4);
this.setState('stk7F2K', cnd8EFf);
if (cndare4) { 
let cmp8G1z = this._lc('cpa0V6_Is', {parent:component,parentTop:layout,state:'stXLKrI'});
}else { 
for (let index in component.changeLogs) {
let version = component.changeLogs[index]; 
 let iiPyZa = '4BA8MfC' + index;
let elfmrj9 = eo('div','7jDOaO2sTMfE' + index+iiPyZa,null,`class`,`version`);
let elaenJS = eo('h1','8Hyff'+iiPyZa,null,`class`,`m-b-1`);
let ela0r2w = eo('span','2hDff'+iiPyZa);
text('Version ' + version.version);
ec('span');
let cndGawC = component.user.id == 1;
this.setState('stpwsQM', cndGawC);
if (cndGawC) { 
let elBprYG = eo('button','vvbff'+iiPyZa,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', version, index)}]},`class`,`btn btn-circle btn-primary ml-2`);
let elri_8E = eo('i','AMtff'+iiPyZa,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');
}ec('h1');
let elnVmqh = eo('h3','zQoff'+iiPyZa,null,`class`,`release-date`);
text(version.releaseDate);
ec('h3');
let cmpxZut = this._lc('cMWKCk24s', {parent:component,parentTop:layout,props:{content:version.log},insideLoop:true,index:"" +iiPyZa});
ec('div');
}
}}});
let cnddANa = component.modalShouldBeOpened;
this.setState('stKH6Ek', cnddANa);
if (cnddANa) { 
component.modal = this._lc('cM9klC1wj', {parent:component,props:{header:component.heading},events:{onclose:function(e) {let $el = this; component.modalShouldBeOpened = null}},content:(flkModal) => {let elp49Lt = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elp49Lt.formHandler) {
                    window.cfrmdlr = elp49Lt.formHandler = new FormHandler(elp49Lt, component);
                } else {
                    window.cfrmdlr = elp49Lt.formHandler;
                }
            let eleRcGw = eo('div',null,null,`class`,`form-group`);
eleRcGw.cls = {'group-error': !!elp49Lt.formHandler.getError(`version`) };

            for (let className in eleRcGw.cls) {
                eleRcGw.classList.toggle(className, eleRcGw.cls[className]);
            }  
            let elIzN0g = eo('label',null,null,`for`,`version`);
text(trans('Version'));
let elxnDGg = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elRVcfW = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.version = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elp49Lt.formHandler.addError(`version`, 'required', trans('validation.required'));}return elp49Lt.formHandler.removeError(`version`);}]},`value`,`${fval(component.data.version)}`,`name`,`${(`version`).toInputName()}`,`placeholder`,`${trans(`Version`)}`,`type`,`text`,`class`,`form-control`,`id`,`version`);
elRVcfW.value = fval(component.data.version);
let cndG3h3 = elp49Lt.formHandler.getError(`version`);
this.setState('stOWAHo', cndG3h3);
if (cndG3h3) { 
let eleCmib = eo('div','C7Ff',null,`class`,`alert alert-danger`);
text(elp49Lt.formHandler.getError(`version`));
ec('div');
}ec('div');
let cmpVSy7 = this._lc('clXIsdo18', {parent:component,parentTop:flkModal,props:{value:component.data.releaseDate},attrs:{name:`${(`releaseDate`).toInputName()}`,placeholder:`${trans(`Release date`)}`,label:'Release date',required:'',class:'form-control'},state:'stKH6Ek'});
let ellQqBK = eo('div',null,null,`class`,`form-group`);
ellQqBK.cls = {'group-error': !!elp49Lt.formHandler.getError(`log`) };

            for (let className in ellQqBK.cls) {
                ellQqBK.classList.toggle(className, ellQqBK.cls[className]);
            }  
            let ellh7IN = eo('label',null,null,`for`,`log`);
text(trans('Changes'));
let elxulVy = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elDGulT = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.log = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elp49Lt.formHandler.addError(`log`, 'required', trans('validation.required'));}return elp49Lt.formHandler.removeError(`log`);}]},`value`,`${fval(component.data.log)}`,`name`,`${(`log`).toInputName()}`,`placeholder`,`${trans(`Changes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`log`);
elDGulT.value = fval(component.data.log);
ec('textarea');
let cndDVV8 = elp49Lt.formHandler.getError(`log`);
this.setState('stfap5w', cndDVV8);
if (cndDVV8) { 
let elUkAFH = eo('div','tS8f',null,`class`,`alert alert-danger`);
text(elp49Lt.formHandler.getError(`log`));
ec('div');
}ec('div');
let elF781s = eo('div',null,null,`class`,`form-group`);
let cmpFGcN = this._lc('cWgtEtgRw', {parent:component,parentTop:flkModal,props:{checked:component.data.published},events:{onchange:function(e) {let $el = this; component.data.published = $el.checked}},boolAttrs:{checked:component.data.published},attrs:{name:`${(`published`).toInputName()}`,label:'Published',value:1},state:'stKH6Ek'});
ec('div');
let el6KqC5 = eo('button',null,null,`class`,`btn btn-success`);
text(`Save`);
ec('button');
ec('form');
},attrs:{size:'small'},state:'stKH6Ek'});
}
                    this.isReadyToGo();
                }
        });