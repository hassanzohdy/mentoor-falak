_Component({
                selector: 'change-log-page',
                c: 'ChangeLogPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openModal','isLoading','changeLogs','modalShouldBeOpened','heading','submit','data'],
                children: {cs4hNROTc:'flk-spinner',cCDY7981D:'markdown',cobJFL6JZ:'layout',cfhuYdxaE:'flk-datepicker',cZtS1hTFs:'flk-checkbox',cJXcU3Kxw:'flk-modal'},
                render: function (component) {
                    let cmpyh6y = this._lc('cobJFL6JZ', {parent:component,content:(layout) => {let elQLPx4 = eo('h1');
text(`Change Log`);
let cndpJTb = component.user.id == 1;
this.setState('st1Wkcl', cndpJTb);
if (cndpJTb) { 
let el4Q0HT = eo('button','rytf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`type`,`button`,`class`,`btn btn-circle btn-success`);
let elxSgqT = eo('i','g3nf',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');
}ec('h1');
let eldvaYv = eo('p',null,null,`class`,`m-b-4 m-t-1`);
text(`All changes happen in`);
let eltn_Sn = eo('strong',null,null,`class`,`mx-2`);
text(`Mentoor.io`);
ec('strong');
text(`are listed here
        chronologically.`);
ec('p');
let cndG5ea = component.isLoading;
this.setState('stOF_wY', cndG5ea);
let cndNayo = !(cndG5ea);
this.setState('stQkD3O', cndNayo);
if (cndG5ea) { 
let cmpoNRm = this._lc('cs4hNROTc', {parent:component,parentTop:layout,state:'stOF_wY'});
}else { 
for (let index in component.changeLogs) {
let version = component.changeLogs[index]; 
 let iideZS = 'YAMEv4E' + index;
let elcTEbv = eo('div','53jrM149E7L7' + index+iideZS,null,`class`,`version`);
let elXEtii = eo('h1','0csff'+iideZS,null,`class`,`m-b-1`);
let ell00kM = eo('span','SW8ff'+iideZS);
text('Version ' + version.version);
ec('span');
let cndHQce = component.user.id == 1;
this.setState('stKxyQr', cndHQce);
if (cndHQce) { 
let elV2UnM = eo('button','SvOff'+iideZS,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', version, index)}]},`class`,`btn btn-circle btn-primary ml-2`);
let elGqS7l = eo('i','qEuff'+iideZS,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');
}ec('h1');
let elXUhZ9 = eo('h3','trCff'+iideZS,null,`class`,`release-date`);
text(version.releaseDate);
ec('h3');
let cmphMKT = this._lc('cCDY7981D', {parent:component,parentTop:layout,props:{content:version.log},insideLoop:true,index:"" +iideZS});
ec('div');
}
}}});
let cnd7rIc = component.modalShouldBeOpened;
this.setState('stihnBT', cnd7rIc);
if (cnd7rIc) { 
component.modal = this._lc('cJXcU3Kxw', {parent:component,props:{header:component.heading},events:{onclose:function(e) {let $el = this; component.modalShouldBeOpened = null}},content:(flkModal) => {let elcpz8B = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elcpz8B.formHandler) {
                    window.cfrmdlr = elcpz8B.formHandler = new FormHandler(elcpz8B, component);
                } else {
                    window.cfrmdlr = elcpz8B.formHandler;
                }
            let elYENWm = eo('div',null,null,`class`,`form-group`);
elYENWm.cls = {'group-error': !!elcpz8B.formHandler.getError(`version`) };

            for (let className in elYENWm.cls) {
                elYENWm.classList.toggle(className, elYENWm.cls[className]);
            }  
            let elwHPzn = eo('label',null,null,`for`,`version`);
text(trans('Version'));
let eluURaa = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elE9tDM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.version = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elcpz8B.formHandler.addError(`version`, 'required', trans('validation.required'));}return elcpz8B.formHandler.removeError(`version`);}]},`value`,`${fval(component.data.version)}`,`name`,`${(`version`).toInputName()}`,`placeholder`,`${trans(`Version`)}`,`type`,`text`,`class`,`form-control`,`id`,`version`);
elE9tDM.value = fval(component.data.version);
let cndzqD4 = elcpz8B.formHandler.getError(`version`);
this.setState('stlf9_K', cndzqD4);
if (cndzqD4) { 
let elYtxX8 = eo('div','Frsf',null,`class`,`alert alert-danger`);
text(elcpz8B.formHandler.getError(`version`));
ec('div');
}ec('div');
let cmp25jA = this._lc('cfhuYdxaE', {parent:component,parentTop:flkModal,props:{value:component.data.releaseDate},attrs:{name:`${(`releaseDate`).toInputName()}`,placeholder:`${trans(`Release date`)}`,label:'Release date',required:'',class:'form-control'},state:'stihnBT'});
let elJYlK5 = eo('div',null,null,`class`,`form-group`);
elJYlK5.cls = {'group-error': !!elcpz8B.formHandler.getError(`log`) };

            for (let className in elJYlK5.cls) {
                elJYlK5.classList.toggle(className, elJYlK5.cls[className]);
            }  
            let elXEDqO = eo('label',null,null,`for`,`log`);
text(trans('Changes'));
let el4642l = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el6JYHb = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.log = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elcpz8B.formHandler.addError(`log`, 'required', trans('validation.required'));}return elcpz8B.formHandler.removeError(`log`);}]},`value`,`${fval(component.data.log)}`,`name`,`${(`log`).toInputName()}`,`placeholder`,`${trans(`Changes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`log`);
el6JYHb.value = fval(component.data.log);
ec('textarea');
let cnd0Kre = elcpz8B.formHandler.getError(`log`);
this.setState('stI_tLr', cnd0Kre);
if (cnd0Kre) { 
let elhyFg1 = eo('div','mNBf',null,`class`,`alert alert-danger`);
text(elcpz8B.formHandler.getError(`log`));
ec('div');
}ec('div');
let elckkxT = eo('div',null,null,`class`,`form-group`);
let cmpiMlL = this._lc('cZtS1hTFs', {parent:component,parentTop:flkModal,props:{checked:component.data.published},events:{onchange:function(e) {let $el = this; component.data.published = $el.checked}},boolAttrs:{checked:component.data.published},attrs:{name:`${(`published`).toInputName()}`,label:'Published',value:1},state:'stihnBT'});
ec('div');
let ela1yvk = eo('button',null,null,`class`,`btn btn-success`);
text(`Save`);
ec('button');
ec('form');
},attrs:{size:'small'},state:'stihnBT'});
}
                    this.isReadyToGo();
                }
        });