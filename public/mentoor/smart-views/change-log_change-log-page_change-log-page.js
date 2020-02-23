_Component({
                selector: 'change-log-page',
                c: 'ChangeLogPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openModal','isLoading','changeLogs','modalShouldBeOpened','heading','submit','data'],
                children: {cG2tRoC8X:'flk-spinner',c5W7fRdJR:'markdown',cXD5ELLvf:'layout',cbrVLw4dJ:'flk-datepicker',cXeamkRyt:'flk-checkbox',cGmivDUx7:'flk-modal'},
                render: function (component) {
                    let cmp0Lmd = this._lc('cXD5ELLvf', {parent:component,content:(layout) => {let elR8mZm = eo('h1');
text(`Change Log`);
let cndGOxG = component.user.id == 1;
this.setState('stZnfKU', cndGOxG);
if (cndGOxG) { 
let el1GVJR = eo('button','u88f',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`type`,`button`,`class`,`btn btn-circle btn-success`);
let elyWM9C = eo('i','n4df',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');
}ec('h1');
let elEvhvW = eo('p',null,null,`class`,`m-b-4 m-t-1`);
text(`All changes happen in`);
let elU6IcA = eo('strong',null,null,`class`,`mx-2`);
text(`Mentoor.io`);
ec('strong');
text(`are listed here
        chronologically.`);
ec('p');
let cndRPcT = component.isLoading;
this.setState('st_g6l2', cndRPcT);
let cndhkHg = !(cndRPcT);
this.setState('stOUvvj', cndhkHg);
if (cndRPcT) { 
let cmpcYCm = this._lc('cG2tRoC8X', {parent:component,parentTop:layout,state:'st_g6l2'});
}else { 
for (let index in component.changeLogs) {
let version = component.changeLogs[index]; 
 let iiHIuI = '6SFGEti' + index;
let elHpUS_ = eo('div','fWucprAcfoNa' + index+iiHIuI,null,`class`,`version`);
let elSZ8nj = eo('h1','XtJff'+iiHIuI,null,`class`,`m-b-1`);
let eldC33k = eo('span','cFyff'+iiHIuI);
text('Version ' + version.version);
ec('span');
let cndSZXb = component.user.id == 1;
this.setState('stY2lhr', cndSZXb);
if (cndSZXb) { 
let elTwVzo = eo('button','44off'+iiHIuI,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', version, index)}]},`class`,`btn btn-circle btn-primary ml-2`);
let elAX3ks = eo('i','Hgiff'+iiHIuI,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');
}ec('h1');
let elUI9uh = eo('h3','Aqmff'+iiHIuI,null,`class`,`release-date`);
text(version.releaseDate);
ec('h3');
let cmp5laK = this._lc('c5W7fRdJR', {parent:component,parentTop:layout,props:{content:version.log},insideLoop:true,index:"" +iiHIuI});
ec('div');
}
}}});
let cndQL7x = component.modalShouldBeOpened;
this.setState('stwgTzb', cndQL7x);
if (cndQL7x) { 
component.modal = this._lc('cGmivDUx7', {parent:component,props:{header:component.heading},events:{onclose:function(e) {let $el = this; component.modalShouldBeOpened = null}},content:(flkModal) => {let elanX4p = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elanX4p.formHandler) {
                    window.cfrmdlr = elanX4p.formHandler = new FormHandler(elanX4p, component);
                } else {
                    window.cfrmdlr = elanX4p.formHandler;
                }
            let ellcdIP = eo('div',null,null,`class`,`form-group`);
ellcdIP.cls = {'group-error': !!elanX4p.formHandler.getError(`version`) };

            for (let className in ellcdIP.cls) {
                ellcdIP.classList.toggle(className, ellcdIP.cls[className]);
            }  
            let elE5zqm = eo('label',null,null,`for`,`version`);
text(trans('Version'));
let elwn8nK = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elWOTOv = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.version = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elanX4p.formHandler.addError(`version`, 'required', trans('validation.required'));}return elanX4p.formHandler.removeError(`version`);}]},`value`,`${fval(component.data.version)}`,`name`,`${(`version`).toInputName()}`,`placeholder`,`${trans(`Version`)}`,`type`,`text`,`class`,`form-control`,`id`,`version`);
elWOTOv.value = fval(component.data.version);
let cnd6aFO = elanX4p.formHandler.getError(`version`);
this.setState('stM3j2E', cnd6aFO);
if (cnd6aFO) { 
let el2tl7m = eo('div','3Y1f',null,`class`,`alert alert-danger`);
text(elanX4p.formHandler.getError(`version`));
ec('div');
}ec('div');
let cmpr0iR = this._lc('cbrVLw4dJ', {parent:component,parentTop:flkModal,props:{value:component.data.releaseDate},attrs:{name:`${(`releaseDate`).toInputName()}`,placeholder:`${trans(`Release date`)}`,label:'Release date',required:'',class:'form-control'},state:'stwgTzb'});
let elVdGf6 = eo('div',null,null,`class`,`form-group`);
elVdGf6.cls = {'group-error': !!elanX4p.formHandler.getError(`log`) };

            for (let className in elVdGf6.cls) {
                elVdGf6.classList.toggle(className, elVdGf6.cls[className]);
            }  
            let elys3B6 = eo('label',null,null,`for`,`log`);
text(trans('Changes'));
let elAACdr = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let ely7BwA = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.log = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elanX4p.formHandler.addError(`log`, 'required', trans('validation.required'));}return elanX4p.formHandler.removeError(`log`);}]},`value`,`${fval(component.data.log)}`,`name`,`${(`log`).toInputName()}`,`placeholder`,`${trans(`Changes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`log`);
ely7BwA.value = fval(component.data.log);
ec('textarea');
let cndSPbp = elanX4p.formHandler.getError(`log`);
this.setState('st7lFSt', cndSPbp);
if (cndSPbp) { 
let eldoCiM = eo('div','GUCf',null,`class`,`alert alert-danger`);
text(elanX4p.formHandler.getError(`log`));
ec('div');
}ec('div');
let elIIkMg = eo('div',null,null,`class`,`form-group`);
let cmpg9L4 = this._lc('cXeamkRyt', {parent:component,parentTop:flkModal,props:{checked:component.data.published},events:{onchange:function(e) {let $el = this; component.data.published = $el.checked}},boolAttrs:{checked:component.data.published},attrs:{name:`${(`published`).toInputName()}`,label:'Published',value:1},state:'stwgTzb'});
ec('div');
let elL5J8Q = eo('button',null,null,`class`,`btn btn-success`);
text(`Save`);
ec('button');
ec('form');
},attrs:{size:'small'},state:'stwgTzb'});
}
                    this.isReadyToGo();
                }
        });