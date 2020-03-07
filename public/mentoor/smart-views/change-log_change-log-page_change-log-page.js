_Component({
                selector: 'change-log-page',
                c: 'ChangeLogPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openModal','isLoading','changeLogs','modalShouldBeOpened','heading','submit','data'],
                children: {czj_wJPA7:'flk-spinner',cP_BgMhl9:'markdown',cMLvT5viI:'layout',cEv4bWjZt:'flk-datepicker',c9IrCTiJn:'flk-checkbox',cbHfo3TOy:'flk-modal'},
                render: function (component) {
                    let cmpZomC = this._lc('cMLvT5viI', {parent:component,content:(layout) => {let elv5bWC = eo('h1');
text(`Change Log`);
let cndv9S8 = component.user.id == 1;
this.setState('stWEdGb', cndv9S8);
if (cndv9S8) { 
let elOJUM1 = eo('button','7F7f',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`type`,`button`,`class`,`btn btn-circle btn-success`);
let el6lDcb = eo('i','Mv7f',null,`class`,`${fas('plus')} icon`);
ec('i');
ec('button');
}ec('h1');
let elVKjx4 = eo('p',null,null,`class`,`m-b-4 m-t-1`);
text(`All changes happen in`);
let elJ1maD = eo('strong',null,null,`class`,`mx-2`);
text(`Mentoor.io`);
ec('strong');
text(`are listed here
        chronologically.`);
ec('p');
let cndR2UN = component.isLoading;
this.setState('stLsfo5', cndR2UN);
let cndbRhP = !(cndR2UN);
this.setState('st5meKb', cndbRhP);
if (cndR2UN) { 
let cmpu2ZO = this._lc('czj_wJPA7', {parent:component,parentTop:layout,state:'stLsfo5'});
}else { 
for (let index in component.changeLogs) {
let version = component.changeLogs[index]; 
 let iipa9W = 'N3pCbLc' + index;
let elJ7Z87 = eo('div','N4lpDqRFpZst' + index+iipa9W,null,`class`,`version`);
let elw6iGz = eo('h1','21Rff'+iipa9W,null,`class`,`m-b-1`);
let elnHmG0 = eo('span','SSfff'+iipa9W);
text('Version ' + version.version);
ec('span');
let cndJDvO = component.user.id == 1;
this.setState('stgqbUw', cndJDvO);
if (cndJDvO) { 
let elB8GrD = eo('button','_CWff'+iipa9W,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', version, index)}]},`class`,`btn btn-circle btn-primary ml-2`);
let elIoBWW = eo('i','OiNff'+iipa9W,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');
}ec('h1');
let elSMISg = eo('h3','7UZff'+iipa9W,null,`class`,`release-date`);
text(version.releaseDate);
ec('h3');
let cmpdWy4 = this._lc('cP_BgMhl9', {parent:component,parentTop:layout,props:{content:version.log},insideLoop:true,index:"" +iipa9W});
ec('div');
}
}}});
let cndWR0B = component.modalShouldBeOpened;
this.setState('stwX4sO', cndWR0B);
if (cndWR0B) { 
component.modal = this._lc('cbHfo3TOy', {parent:component,props:{header:component.heading},events:{onclose:function(e) {let $el = this; component.modalShouldBeOpened = null}},content:(flkModal) => {let elB9zmX = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elB9zmX.formHandler) {
                    window.cfrmdlr = elB9zmX.formHandler = new FormHandler(elB9zmX, component);
                } else {
                    window.cfrmdlr = elB9zmX.formHandler;
                }
            let elXqdqs = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elB9zmX.formHandler.getError(`version`) })}`);
let elcOMy2 = eo('label',null,null,`for`,`version`);
text(trans('Version'));
let elkeB7O = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elAELj1 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.version = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elB9zmX.formHandler.addError(`version`, 'required', trans('validation.required'));}return elB9zmX.formHandler.removeError(`version`);}]},`value`,`${fval(component.data.version)}`,`name`,`${(`version`).toInputName()}`,`placeholder`,`${trans(`Version`)}`,`type`,`text`,`class`,`form-control`,`id`,`version`);
elAELj1.value = fval(component.data.version);
let cnd5JV6 = elB9zmX.formHandler.getError(`version`);
this.setState('stzo9_l', cnd5JV6);
if (cnd5JV6) { 
let elRjTBj = eo('div','GKsf',null,`class`,`alert alert-danger`);
text(elB9zmX.formHandler.getError(`version`));
ec('div');
}ec('div');
let cmpGSvw = this._lc('cEv4bWjZt', {parent:component,parentTop:flkModal,props:{value:component.data.releaseDate},attrs:{name:`${(`releaseDate`).toInputName()}`,placeholder:`${trans(`Release date`)}`,label:'Release date',required:'',class:'form-control'},state:'stwX4sO'});
let elotlRw = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elB9zmX.formHandler.getError(`log`) })}`);
let elmtEdD = eo('label',null,null,`for`,`log`);
text(trans('Changes'));
let el0NUpP = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elYPqFU = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.log = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elB9zmX.formHandler.addError(`log`, 'required', trans('validation.required'));}return elB9zmX.formHandler.removeError(`log`);}]},`value`,`${fval(component.data.log)}`,`name`,`${(`log`).toInputName()}`,`placeholder`,`${trans(`Changes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`log`);
elYPqFU.value = fval(component.data.log);
ec('textarea');
let cndWCsS = elB9zmX.formHandler.getError(`log`);
this.setState('stvrXa0', cndWCsS);
if (cndWCsS) { 
let el0l_bL = eo('div','cqdf',null,`class`,`alert alert-danger`);
text(elB9zmX.formHandler.getError(`log`));
ec('div');
}ec('div');
let elXEF4I = eo('div',null,null,`class`,`form-group`);
let cmp6pi1 = this._lc('c9IrCTiJn', {parent:component,parentTop:flkModal,props:{checked:component.data.published},events:{onchange:function(e) {let $el = this; component.data.published = $el.checked}},boolAttrs:{checked:component.data.published},attrs:{name:`${(`published`).toInputName()}`,label:'Published',value:1},state:'stwX4sO'});
ec('div');
let elM2Upy = eo('button',null,null,`class`,`btn btn-success`);
text(`Save`);
ec('button');
ec('form');
},attrs:{size:'small'},state:'stwX4sO'});
}
                    this.isReadyToGo();
                }
        });