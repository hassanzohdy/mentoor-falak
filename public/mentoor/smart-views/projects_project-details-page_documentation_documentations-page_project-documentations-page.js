_Component({
                selector: 'project-documentations-page',
                c: 'ProjectDocumentationsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cSB3Ws9Ig:'project-layout',ccmX_1u5V:'markdown-input',cyGY0_JW0:'flk-modal',c_bbF_Vxb:'flk-alert'},
                render: function (component) {
                    let cmpEdNj = this._lc('cSB3Ws9Ig', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elOFC2u = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let eliZWKb = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Documentation`);
ec('button');
let elNibOU = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Documentations
        (${ component.project.documentations.length })`);
ec('h1');
let elIpgSZ = eo('table',null,null,`class`,`table table-striped buttoned`);
let elnntNN = eo('thead');
let elBx83b = eo('tr');
let elIWbGi = eo('th');
text(`Title`);
ec('th');
let eleyNJb = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elb4ndt = eo('tbody');
let cnd4svS = Is.empty(component.project.documentations);
this.setState('stUv283', cnd4svS);
let cndKOgJ = !(cnd4svS);
this.setState('stK1uYC', cndKOgJ);
if (cnd4svS) { 
let elxTAvR = eo('tr','KxSf');
let elTCji9 = eo('td','L5sf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Documentations Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.documentations) {
let record = component.project.documentations[index]; 
 let ii89nq = record.id+ index;
let eldjWM1 = eo('tr','ZPupo1UcZcfB' + index+ii89nq);
let ellmltS = eo('td','R7Wff'+ii89nq);
let elR92Xq = eo('a','zVxff'+ii89nq,null,`href`,`${URLS.project(component.project, 'documentation', record)}`);
text(record.title);
ec('a');
ec('td');
let elSKiGK = eo('td','WCnff'+ii89nq);
let elR_Hin = eo('button','Ahiff'+ii89nq,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elfiePl = eo('i','SmGff'+ii89nq,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elR_Hin;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Documentation')}`});
        ;
                    }, 20);                
                let elxK6aA = eo('button','7lOff'+ii89nq,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elLoVc7 = eo('i','jMuff'+ii89nq,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elxK6aA;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Documentation')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndIGzo = component.modalIsOpened;
this.setState('st0_EOr', cndIGzo);
if (cndIGzo) { 
component.modal = this._lc('cyGY0_JW0', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elcBLXN = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elcBLXN.formHandler) {
                    window.cfrmdlr = elcBLXN.formHandler = new FormHandler(elcBLXN, component);
                } else {
                    window.cfrmdlr = elcBLXN.formHandler;
                }
            let el4Jmp0 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el4Jmp0.value = fval(component.project.id);
let elQUaHF = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elcBLXN.formHandler.getError(`title`) })}`);
let elL5Pc_ = eo('label',null,null,`for`,`title`);
text(trans('Documentation title'));
let elzQ4Xa = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elzdPQT = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elcBLXN.formHandler.addError(`title`, 'required', trans('validation.required'));}return elcBLXN.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Documentation title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elzdPQT.value = fval(component.record.title);
let cndSNfC = elcBLXN.formHandler.getError(`title`);
this.setState('stbcZvv', cndSNfC);
if (cndSNfC) { 
let elzi6la = eo('div','ARNf',null,`class`,`alert alert-danger`);
text(elcBLXN.formHandler.getError(`title`));
ec('div');
}ec('div');
let elgD4lT = eo('div',null,null,`class`,`m-t-1`);
let cmpeuDf = this._lc('ccmX_1u5V', {parent:component,parentTop:flkModal,props:{value:component.record.content,required:true},attrs:{name:`${(`content`).toInputName()}`,label:'Documentation content'},state:'st0_EOr'});
ec('div');
let elbOtIt = eo('div',null,null,`class`,`m-t-1 text-center`);
let elS4EzA = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'full'},state:'st0_EOr'});
}let cnd7Oj7 = component.confirmDelete;
this.setState('stojhLK', cnd7Oj7);
if (cnd7Oj7) { 
let cmpuykj = this._lc('c_bbF_Vxb', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stojhLK'});
}
                    this.isReadyToGo();
                }
        });