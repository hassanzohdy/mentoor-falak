_Component({
                selector: 'project-fund-page',
                c: 'ProjectFundPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','modalIsOpened','submit','fundValue','user','isValidForm','isSending'],
                children: {cZA0yCFm4:'gold-icon',csc_4EaG7:'flk-time-ago',ctMphhS3c:'project-layout',cFy4kWOPt:'flk-modal'},
                render: function (component) {
                    let cmpnTtj = this._lc('ctMphhS3c', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elXBDXg = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal()}]},`class`,`float-right btn btn-success bold`);
let elSOTO6 = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
let cmpwYrh = this._lc('cZA0yCFm4', {parent:component,parentTop:projectLayout,props:{coins:0}});
ec('button');
let eldVzY0 = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Project Fund
        ${ component.project.fund.format() }`);
ec('h1');
let elll8sk = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elwZnbe = eo('thead');
let elw94JQ = eo('tr');
let elQTUPc = eo('th');
text(`Fund`);
ec('th');
let elk3ere = eo('th');
text(`By`);
ec('th');
let eljzrIz = eo('th');
text(`Donated`);
ec('th');
ec('tr');
ec('thead');
let elDeYUD = eo('tbody');
let cndeCDh = Is.empty(component.project.fundList);
this.setState('st6EHyY', cndeCDh);
let cndyFiS = !(cndeCDh);
this.setState('st91TLD', cndyFiS);
if (cndeCDh) { 
let elOpgNC = eo('tr','5Maf');
let el81UHJ = eo('td','Hfaf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No found yet`);
ec('td');
ec('tr');
}else { 
for (let i in component.project.fundList) {
let fund = component.project.fundList[i]; 
 let iiR0S9 = '39m7C3w' + i;
let elL8qAy = eo('tr','QhrVYPSINpzU' + i+iiR0S9);
let elaLEmi = eo('td','9TEff'+iiR0S9,null,`class`,`bold`);
text(fund.fund.format());
ec('td');
let elmFNjq = eo('td','uDgff'+iiR0S9);
text(fund.createdBy.name);
ec('td');
let elbCv6P = eo('td','r1Tff'+iiR0S9);
let cmpQE9e = this._lc('csc_4EaG7', {parent:component,parentTop:projectLayout,props:{timestamp:fund.createdAt.timestamp},state:'st91TLD',insideLoop:true,index:"" +iiR0S9});
ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cnd7xy4 = component.modalIsOpened;
this.setState('st9tfzq', cnd7xy4);
if (cnd7xy4) { 
component.modal = this._lc('cFy4kWOPt', {parent:component,events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elydqn5 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elydqn5.formHandler) {
                    window.cfrmdlr = elydqn5.formHandler = new FormHandler(elydqn5, component);
                } else {
                    window.cfrmdlr = elydqn5.formHandler;
                }
            let elQjqu5 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elydqn5.formHandler.getError(`fund`) })}`);
let elQlEVF = eo('label',null,null,`for`,`fund`);
text(trans('Fund Amount'));
let el05Llp = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elWTaK8 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.fundValue = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elydqn5.formHandler.addError(`fund`, 'required', trans('validation.required'));}return elydqn5.formHandler.removeError(`fund`);}]},`value`,`${fval(component.fundValue)}`,`name`,`${(`fund`).toInputName()}`,`placeholder`,`${trans(`Fund Amount`)}`,`type`,`number`,`class`,`form-control`,`id`,`fund`);
elWTaK8.value = fval(component.fundValue);
let cndnga1 = elydqn5.formHandler.getError(`fund`);
this.setState('stPrQQk', cndnga1);
if (cndnga1) { 
let elOkQz0 = eo('div','k3tf',null,`class`,`alert alert-danger`);
text(elydqn5.formHandler.getError(`fund`));
ec('div');
}ec('div');
let elv2eY5 = eo('div',null,null,`class`,`m-t-1 text-center`);
let elELphI = eo('button',null,null, boolAttrs, {disabled:component.fundValue > component.user.gold || ! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Donate`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Donate to the project'},state:'st9tfzq'});
}
                    this.isReadyToGo();
                }
        });