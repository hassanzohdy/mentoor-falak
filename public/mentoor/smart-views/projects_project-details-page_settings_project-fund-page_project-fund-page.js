_Component({
                selector: 'project-fund-page',
                c: 'ProjectFundPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','modalIsOpened','submit','fundValue','user','isValidForm','isSending'],
                children: {cOSqNhJzf:'gold-icon',c7Zan2w9c:'flk-time-ago',cptxy8_2J:'project-layout',cAbwqjIdJ:'flk-modal'},
                render: function (component) {
                    let cmp3asJ = this._lc('cptxy8_2J', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elpdcyf = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal()}]},`class`,`float-right btn btn-success bold`);
let elkJt9u = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
let cmpmPKf = this._lc('cOSqNhJzf', {parent:component,parentTop:projectLayout,props:{coins:0}});
ec('button');
let el95cB4 = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Project Fund
        ${ component.project.fund.format() }`);
ec('h1');
let elV1gZI = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elgW2_c = eo('thead');
let el5nxuI = eo('tr');
let el8i_fi = eo('th');
text(`Fund`);
ec('th');
let elBKk9B = eo('th');
text(`By`);
ec('th');
let elxka5d = eo('th');
text(`Donated`);
ec('th');
ec('tr');
ec('thead');
let elPx3KZ = eo('tbody');
let cnd9ya2 = Is.empty(component.project.fundList);
this.setState('stY9AEM', cnd9ya2);
let cndb8x0 = !(cnd9ya2);
this.setState('st0WO5v', cndb8x0);
if (cnd9ya2) { 
let el7gjMB = eo('tr','WMFf');
let elmk4wZ = eo('td','Cibf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No found yet`);
ec('td');
ec('tr');
}else { 
for (let i in component.project.fundList) {
let fund = component.project.fundList[i]; 
 let iifK0c = 'xvbBl8Z' + i;
let elZ0KIY = eo('tr','iMEQkR3n96mx' + i+iifK0c);
let eliQiZf = eo('td','KfOff'+iifK0c,null,`class`,`bold`);
text(fund.fund.format());
ec('td');
let elMoUcs = eo('td','TfBff'+iifK0c);
text(fund.createdBy.name);
ec('td');
let elcILyv = eo('td','Ic_ff'+iifK0c);
let cmpc3n0 = this._lc('c7Zan2w9c', {parent:component,parentTop:projectLayout,props:{timestamp:fund.createdAt.timestamp},state:'st0WO5v',insideLoop:true,index:"" +iifK0c});
ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndTyXo = component.modalIsOpened;
this.setState('stn0srb', cndTyXo);
if (cndTyXo) { 
component.modal = this._lc('cAbwqjIdJ', {parent:component,events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elQSOat = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elQSOat.formHandler) {
                    window.cfrmdlr = elQSOat.formHandler = new FormHandler(elQSOat, component);
                } else {
                    window.cfrmdlr = elQSOat.formHandler;
                }
            let eltXAi6 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elQSOat.formHandler.getError(`fund`) })}`);
let elxL8Sc = eo('label',null,null,`for`,`fund`);
text(trans('Fund Amount'));
let elKCMH3 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el0pd8A = ev('input',null,null, eventListeners, {oninput:[function(e) {component.fundValue = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQSOat.formHandler.addError(`fund`, 'required', trans('validation.required'));}return elQSOat.formHandler.removeError(`fund`);}]},`value`,`${fval(component.fundValue)}`,`name`,`${(`fund`).toInputName()}`,`placeholder`,`${trans(`Fund Amount`)}`,`type`,`number`,`class`,`form-control`,`id`,`fund`);
el0pd8A.value = fval(component.fundValue);
let cndPZqt = elQSOat.formHandler.getError(`fund`);
this.setState('stSVpFs', cndPZqt);
if (cndPZqt) { 
let elEa6_t = eo('div','y9ff',null,`class`,`alert alert-danger`);
text(elQSOat.formHandler.getError(`fund`));
ec('div');
}ec('div');
let elGt2bG = eo('div',null,null,`class`,`m-t-1 text-center`);
let elHCNVl = eo('button',null,null, boolAttrs, {disabled:component.fundValue > component.user.gold || ! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Donate`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Donate to the project'},state:'stn0srb'});
}
                    this.isReadyToGo();
                }
        });