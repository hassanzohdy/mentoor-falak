_Component({
                selector: 'change-log-page',
                c: 'ChangeLogPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openModal','isLoading','changeLogs','modalShouldBeOpened','heading','submit','data'],
                children: {cbiM9x08s:'flk-spinner',ckOQdeI0q:'markdown',cyE2Bphpu:'layout',cX9id683x:'flk-datepicker',ceT7z65Oi:'flk-checkbox',ciYnvdK_S:'flk-modal'},
                render: function (component) {
                    let cmpx_OI = this._lc('cyE2Bphpu', {parent:component,content:(layout) => {let elCpHbN = eo('h1');
text(`Change Log`);
let cnduqWU = component.user.id == 1;
this.setState('stgk0oJ', cnduqWU);
if (cnduqWU) { 
let eltFEyO = eo('button','wXlf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`type`,`button`,`class`,`btn btn-circle btn-success`);
let eljW_ir = eo('i','DFQf',null,`class`,`${fas('plus')} icon`);
ec('i');
ec('button');
}ec('h1');
let elY63fJ = eo('p',null,null,`class`,`m-b-4 m-t-1`);
text(`All changes happen in`);
let el_khEo = eo('strong',null,null,`class`,`mx-2`);
text(`Mentoor.io`);
ec('strong');
text(`are listed here
        chronologically.`);
ec('p');
let cndWMMo = component.isLoading;
this.setState('stA9L00', cndWMMo);
let cnd_DZx = !(cndWMMo);
this.setState('styHCFO', cnd_DZx);
if (cndWMMo) { 
let cmplxEh = this._lc('cbiM9x08s', {parent:component,parentTop:layout,state:'stA9L00'});
}else { 
for (let index in component.changeLogs) {
let version = component.changeLogs[index]; 
 let iiQtt1 = '9vo7OFV' + index;
let elD0prZ = eo('div','HgUy_AmcTfbw' + index+iiQtt1,null,`class`,`version`);
let elbUYge = eo('h1','682ff'+iiQtt1,null,`class`,`m-b-1`);
let eldFf4N = eo('span','bKGff'+iiQtt1);
text('Version ' + version.version);
ec('span');
let cnddA2c = component.user.id == 1;
this.setState('styOEOq', cnddA2c);
if (cnddA2c) { 
let elg4VV_ = eo('button','ATQff'+iiQtt1,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', version, index)}]},`class`,`btn btn-circle btn-primary ml-2`);
let el7KRuo = eo('i','GCeff'+iiQtt1,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');
}ec('h1');
let elU0jnz = eo('h3','igvff'+iiQtt1,null,`class`,`release-date`);
text(version.releaseDate);
ec('h3');
let cmpXMCp = this._lc('ckOQdeI0q', {parent:component,parentTop:layout,props:{content:version.log},insideLoop:true,index:"" +iiQtt1});
ec('div');
}
}}});
let cndN3ZY = component.modalShouldBeOpened;
this.setState('stbDBoi', cndN3ZY);
if (cndN3ZY) { 
component.modal = this._lc('ciYnvdK_S', {parent:component,props:{header:component.heading},events:{onclose:function(e) {let $el = this; component.modalShouldBeOpened = null}},content:(flkModal) => {let el_tshz = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el_tshz.formHandler) {
                    window.cfrmdlr = el_tshz.formHandler = new FormHandler(el_tshz, component);
                } else {
                    window.cfrmdlr = el_tshz.formHandler;
                }
            let elA4R7o = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el_tshz.formHandler.getError(`version`) })}`);
let elcZgph = eo('label',null,null,`for`,`version`);
text(trans('Version'));
let elmrQaQ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elGsCls = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.version = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_tshz.formHandler.addError(`version`, 'required', trans('validation.required'));}return el_tshz.formHandler.removeError(`version`);}]},`value`,`${fval(component.data.version)}`,`name`,`${(`version`).toInputName()}`,`placeholder`,`${trans(`Version`)}`,`type`,`text`,`class`,`form-control`,`id`,`version`);
elGsCls.value = fval(component.data.version);
let cnd6m_U = el_tshz.formHandler.getError(`version`);
this.setState('sts89Rl', cnd6m_U);
if (cnd6m_U) { 
let eljohK7 = eo('div','6KNf',null,`class`,`alert alert-danger`);
text(el_tshz.formHandler.getError(`version`));
ec('div');
}ec('div');
let cmpmMwb = this._lc('cX9id683x', {parent:component,parentTop:flkModal,props:{value:component.data.releaseDate},attrs:{name:`${(`releaseDate`).toInputName()}`,placeholder:`${trans(`Release date`)}`,label:'Release date',required:'',class:'form-control'},state:'stbDBoi'});
let elEV9e3 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el_tshz.formHandler.getError(`log`) })}`);
let elpw8WZ = eo('label',null,null,`for`,`log`);
text(trans('Changes'));
let elnlZ79 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elolPZx = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.log = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_tshz.formHandler.addError(`log`, 'required', trans('validation.required'));}return el_tshz.formHandler.removeError(`log`);}]},`value`,`${fval(component.data.log)}`,`name`,`${(`log`).toInputName()}`,`placeholder`,`${trans(`Changes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`log`);
elolPZx.value = fval(component.data.log);
ec('textarea');
let cnd8xm5 = el_tshz.formHandler.getError(`log`);
this.setState('sthaXiF', cnd8xm5);
if (cnd8xm5) { 
let elsff0E = eo('div','OxDf',null,`class`,`alert alert-danger`);
text(el_tshz.formHandler.getError(`log`));
ec('div');
}ec('div');
let elSWVv4 = eo('div',null,null,`class`,`form-group`);
let cmpx_jd = this._lc('ceT7z65Oi', {parent:component,parentTop:flkModal,props:{checked:component.data.published},events:{onchange:function(e) {let $el = this; component.data.published = $el.checked}},boolAttrs:{checked:component.data.published},attrs:{name:`${(`published`).toInputName()}`,label:'Published',value:1},state:'stbDBoi'});
ec('div');
let elX4FM6 = eo('button',null,null,`class`,`btn btn-success`);
text(`Save`);
ec('button');
ec('form');
},attrs:{size:'small'},state:'stbDBoi'});
}
                    this.isReadyToGo();
                }
        });