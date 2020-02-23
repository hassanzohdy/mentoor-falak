_Component({
                selector: 'change-log-page',
                c: 'ChangeLogPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openModal','isLoading','changeLogs','modalShouldBeOpened','heading','submit','data'],
                children: {c5FurfKdz:'flk-spinner',cDwRFDmJA:'markdown',cOQMOM6GI:'layout',cu78O9Zw0:'flk-datepicker',cikjtgEvB:'flk-checkbox',cZgKQ4UXK:'flk-modal'},
                render: function (component) {
                    let cmpjBbi = this._lc('cOQMOM6GI', {parent:component,content:(layout) => {let elyCqs8 = eo('h1');
text(`Change Log`);
let cnd4f98 = component.user.id == 1;
this.setState('stN4r_V', cnd4f98);
if (cnd4f98) { 
let elZkB3O = eo('button','2dmf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`type`,`button`,`class`,`btn btn-circle btn-success`);
let eloyInE = eo('i','S4Tf',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');
}ec('h1');
let elFaL16 = eo('p',null,null,`class`,`m-b-4 m-t-1`);
text(`All changes happen in`);
let elJPiAM = eo('strong',null,null,`class`,`mx-2`);
text(`Mentoor.io`);
ec('strong');
text(`are listed here
        chronologically.`);
ec('p');
let cnd5myQ = component.isLoading;
this.setState('stm43bz', cnd5myQ);
let cndkIAT = !(cnd5myQ);
this.setState('stnYW1d', cndkIAT);
if (cnd5myQ) { 
let cmpScTF = this._lc('c5FurfKdz', {parent:component,parentTop:layout,state:'stm43bz'});
}else { 
for (let index in component.changeLogs) {
let version = component.changeLogs[index]; 
 let iizk2d = '6DPTNpl' + index;
let el9fa0j = eo('div','bX_OJed7b49a' + index+iizk2d,null,`class`,`version`);
let el9uQon = eo('h1','V5Rff'+iizk2d,null,`class`,`m-b-1`);
let elRJCvM = eo('span','A3off'+iizk2d);
text('Version ' + version.version);
ec('span');
let cnd3UWp = component.user.id == 1;
this.setState('sty3HV9', cnd3UWp);
if (cnd3UWp) { 
let elL7ppB = eo('button','Jrqff'+iizk2d,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', version, index)}]},`class`,`btn btn-circle btn-primary ml-2`);
let elProVe = eo('i','P6uff'+iizk2d,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');
}ec('h1');
let elJnOQd = eo('h3','hSVff'+iizk2d,null,`class`,`release-date`);
text(version.releaseDate);
ec('h3');
let cmpNjyM = this._lc('cDwRFDmJA', {parent:component,parentTop:layout,props:{content:version.log},insideLoop:true,index:"" +iizk2d});
ec('div');
}
}}});
let cnd2VVd = component.modalShouldBeOpened;
this.setState('st4oho3', cnd2VVd);
if (cnd2VVd) { 
component.modal = this._lc('cZgKQ4UXK', {parent:component,props:{header:component.heading},events:{onclose:function(e) {let $el = this; component.modalShouldBeOpened = null}},content:(flkModal) => {let elnXhJ5 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elnXhJ5.formHandler) {
                    window.cfrmdlr = elnXhJ5.formHandler = new FormHandler(elnXhJ5, component);
                } else {
                    window.cfrmdlr = elnXhJ5.formHandler;
                }
            let elHfhSj = eo('div',null,null,`class`,`form-group`);
elHfhSj.cls = {'group-error': !!elnXhJ5.formHandler.getError(`version`) };

            for (let className in elHfhSj.cls) {
                elHfhSj.classList.toggle(className, elHfhSj.cls[className]);
            }  
            let elgXjxT = eo('label',null,null,`for`,`version`);
text(trans('Version'));
let elGhfDJ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elUFpdH = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.version = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elnXhJ5.formHandler.addError(`version`, 'required', trans('validation.required'));}return elnXhJ5.formHandler.removeError(`version`);}]},`value`,`${fval(component.data.version)}`,`name`,`${(`version`).toInputName()}`,`placeholder`,`${trans(`Version`)}`,`type`,`text`,`class`,`form-control`,`id`,`version`);
elUFpdH.value = fval(component.data.version);
let cndjzpb = elnXhJ5.formHandler.getError(`version`);
this.setState('stiXTB4', cndjzpb);
if (cndjzpb) { 
let elZKy3K = eo('div','lRSf',null,`class`,`alert alert-danger`);
text(elnXhJ5.formHandler.getError(`version`));
ec('div');
}ec('div');
let cmpQNen = this._lc('cu78O9Zw0', {parent:component,parentTop:flkModal,props:{value:component.data.releaseDate},attrs:{name:`${(`releaseDate`).toInputName()}`,placeholder:`${trans(`Release date`)}`,label:'Release date',required:'',class:'form-control'},state:'st4oho3'});
let elSg6KG = eo('div',null,null,`class`,`form-group`);
elSg6KG.cls = {'group-error': !!elnXhJ5.formHandler.getError(`log`) };

            for (let className in elSg6KG.cls) {
                elSg6KG.classList.toggle(className, elSg6KG.cls[className]);
            }  
            let elyopjm = eo('label',null,null,`for`,`log`);
text(trans('Changes'));
let elWNWf9 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el8TpIJ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.log = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elnXhJ5.formHandler.addError(`log`, 'required', trans('validation.required'));}return elnXhJ5.formHandler.removeError(`log`);}]},`value`,`${fval(component.data.log)}`,`name`,`${(`log`).toInputName()}`,`placeholder`,`${trans(`Changes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`log`);
el8TpIJ.value = fval(component.data.log);
ec('textarea');
let cndiJwE = elnXhJ5.formHandler.getError(`log`);
this.setState('stog0PJ', cndiJwE);
if (cndiJwE) { 
let elfgqBA = eo('div','QIAf',null,`class`,`alert alert-danger`);
text(elnXhJ5.formHandler.getError(`log`));
ec('div');
}ec('div');
let eljQ9h2 = eo('div',null,null,`class`,`form-group`);
let cmpFDnw = this._lc('cikjtgEvB', {parent:component,parentTop:flkModal,props:{checked:component.data.published},events:{onchange:function(e) {let $el = this; component.data.published = $el.checked}},boolAttrs:{checked:component.data.published},attrs:{name:`${(`published`).toInputName()}`,label:'Published',value:1},state:'st4oho3'});
ec('div');
let elnlrfs = eo('button',null,null,`class`,`btn btn-success`);
text(`Save`);
ec('button');
ec('form');
},attrs:{size:'small'},state:'st4oho3'});
}
                    this.isReadyToGo();
                }
        });