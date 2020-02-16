_Component({
                selector: 'project-fund-page',
                c: 'ProjectFundPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','modalIsOpened','submit','fundValue','user','isValidForm','isSending'],
                children: {cgJQE3_B0:'gold-icon',cxwe03Wh8:'flk-time-ago',cxHM1QRSn:'project-layout',cAZlbUCxT:'flk-modal'},
                render: function (component) {
                    let cmpNZdc = this._lc('cxHM1QRSn', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elhKDWl = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal()}]},`class`,`float-right btn btn-success bold`);
let el_ZJFX = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
let cmp9Ekt = this._lc('cgJQE3_B0', {parent:component,parentTop:projectLayout,props:{coins:0}});
ec('button');
let elb3jie = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Project Fund
        ${ component.project.fund.format() }`);
ec('h1');
let elC_Fwe = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let eltcy1H = eo('thead');
let elWk6jc = eo('tr');
let elJtYkW = eo('th');
text(`Fund`);
ec('th');
let elq4_ee = eo('th');
text(`By`);
ec('th');
let elbcFqi = eo('th');
text(`Donated`);
ec('th');
ec('tr');
ec('thead');
let elUi_wJ = eo('tbody');
let cndHkiV = Is.empty(component.project.fundList);
this.setState('stDOUpz', cndHkiV);
let cndLNhU = !(cndHkiV);
this.setState('stgAzVs', cndLNhU);
if (cndHkiV) { 
let elCBChl = eo('tr','ThNf');
let el0TbBU = eo('td','7yGf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No found yet`);
ec('td');
ec('tr');
}else { 
for (let i in component.project.fundList) {
let fund = component.project.fundList[i]; 
 let iiYuBE = 'ZE2IVbd' + i;
let elScnV1 = eo('tr','semogOecsA7k' + i+iiYuBE);
let elKsuHP = eo('td','FbAff'+iiYuBE,null,`class`,`bold`);
text(fund.fund.format());
ec('td');
let elYRqZW = eo('td','97dff'+iiYuBE);
text(fund.createdBy.name);
ec('td');
let ellcvDA = eo('td','UIKff'+iiYuBE);
let cmpqoga = this._lc('cxwe03Wh8', {parent:component,parentTop:projectLayout,props:{timestamp:fund.createdAt.timestamp},state:'stgAzVs',insideLoop:true,index:"" +iiYuBE});
ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndDIwB = component.modalIsOpened;
this.setState('stgfU1n', cndDIwB);
if (cndDIwB) { 
component.modal = this._lc('cAZlbUCxT', {parent:component,events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let el3nJ58 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el3nJ58.formHandler) {
                    window.cfrmdlr = el3nJ58.formHandler = new FormHandler(el3nJ58, component);
                } else {
                    window.cfrmdlr = el3nJ58.formHandler;
                }
            let elF2NiA = eo('div',null,null,`class`,`form-group`);
elF2NiA.cls = {'group-error': !!el3nJ58.formHandler.getError(`fund`) };

            for (let className in elF2NiA.cls) {
                elF2NiA.classList.toggle(className, elF2NiA.cls[className]);
            }  
            let elyAKst = eo('label',null,null,`for`,`fund`);
text(trans('Fund Amount'));
let elPph3_ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elUH_ta = ev('input',null,null, eventListeners, {oninput:[function(e) {component.fundValue = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el3nJ58.formHandler.addError(`fund`, 'required', trans('validation.required'));}return el3nJ58.formHandler.removeError(`fund`);}]},`value`,`${fval(component.fundValue)}`,`name`,`${(`fund`).toInputName()}`,`placeholder`,`${trans(`Fund Amount`)}`,`type`,`number`,`class`,`form-control`,`id`,`fund`);
elUH_ta.value = fval(component.fundValue);
let cndURJ2 = el3nJ58.formHandler.getError(`fund`);
this.setState('stu2BS6', cndURJ2);
if (cndURJ2) { 
let el2mpbV = eo('div','tRBf',null,`class`,`alert alert-danger`);
text(el3nJ58.formHandler.getError(`fund`));
ec('div');
}ec('div');
let el1UEEK = eo('div',null,null,`class`,`m-t-1 text-center`);
let el1taAI = eo('button',null,null, boolAttrs, {disabled:component.fundValue > component.user.gold || ! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Donate`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Donate to the project'},state:'stgfU1n'});
}
                    this.isReadyToGo();
                }
        });