_Component({
                selector: 'project-fund-page',
                c: 'ProjectFundPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','modalIsOpened','submit','fundValue','user','isValidForm','isSending'],
                children: {cHDVgd3NA:'gold-icon',cBJOkIzgo:'flk-time-ago',ce1Tveqom:'project-layout',ccXbp8SoM:'flk-modal'},
                render: function (component) {
                    let cmp7gG6 = this._lc('ce1Tveqom', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elZiy4u = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal()}]},`class`,`float-right btn btn-success bold`);
let elWJREm = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
let cmpGwFe = this._lc('cHDVgd3NA', {parent:component,parentTop:projectLayout,props:{coins:0}});
ec('button');
let elmWBdB = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Project Fund
        ${ component.project.fund.format() }`);
ec('h1');
let el6U1VN = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elzjzEp = eo('thead');
let elzFWsv = eo('tr');
let elPiuqi = eo('th');
text(`Fund`);
ec('th');
let el3L8Fy = eo('th');
text(`By`);
ec('th');
let el7rdVf = eo('th');
text(`Donated`);
ec('th');
ec('tr');
ec('thead');
let elKLNaa = eo('tbody');
let cndCeL1 = Is.empty(component.project.fundList);
this.setState('stBnavi', cndCeL1);
let cnd7Eba = !(cndCeL1);
this.setState('st3D1dm', cnd7Eba);
if (cndCeL1) { 
let elncd25 = eo('tr','at6f');
let elxAaoQ = eo('td','slnf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No found yet`);
ec('td');
ec('tr');
}else { 
for (let i in component.project.fundList) {
let fund = component.project.fundList[i]; 
 let ii2pCt = 'nC1W0cm' + i;
let elBvU79 = eo('tr','_uzKGDp2ArcD' + i+ii2pCt);
let el2sfKV = eo('td','7i0ff'+ii2pCt,null,`class`,`bold`);
text(fund.fund.format());
ec('td');
let elWl2o8 = eo('td','mPkff'+ii2pCt);
text(fund.createdBy.name);
ec('td');
let elRnGfT = eo('td','oK5ff'+ii2pCt);
let cmpkus4 = this._lc('cBJOkIzgo', {parent:component,parentTop:projectLayout,props:{timestamp:fund.createdAt.timestamp},state:'st3D1dm',insideLoop:true,index:"" +ii2pCt});
ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndFZFL = component.modalIsOpened;
this.setState('stkQTnS', cndFZFL);
if (cndFZFL) { 
component.modal = this._lc('ccXbp8SoM', {parent:component,events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elCFaQq = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elCFaQq.formHandler) {
                    window.cfrmdlr = elCFaQq.formHandler = new FormHandler(elCFaQq, component);
                } else {
                    window.cfrmdlr = elCFaQq.formHandler;
                }
            let elWp8Qn = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elCFaQq.formHandler.getError(`fund`) })}`);
let elCQ_b3 = eo('label',null,null,`for`,`fund`);
text(trans('Fund Amount'));
let elwiWAz = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elDXkcs = ev('input',null,null, eventListeners, {oninput:[function(e) {component.fundValue = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elCFaQq.formHandler.addError(`fund`, 'required', trans('validation.required'));}return elCFaQq.formHandler.removeError(`fund`);}]},`value`,`${fval(component.fundValue)}`,`name`,`${(`fund`).toInputName()}`,`placeholder`,`${trans(`Fund Amount`)}`,`type`,`number`,`class`,`form-control`,`id`,`fund`);
elDXkcs.value = fval(component.fundValue);
let cndcC_L = elCFaQq.formHandler.getError(`fund`);
this.setState('styIpjx', cndcC_L);
if (cndcC_L) { 
let elQAPnb = eo('div','_Aof',null,`class`,`alert alert-danger`);
text(elCFaQq.formHandler.getError(`fund`));
ec('div');
}ec('div');
let eluVeHH = eo('div',null,null,`class`,`m-t-1 text-center`);
let elyDjSi = eo('button',null,null, boolAttrs, {disabled:component.fundValue > component.user.gold || ! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Donate`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Donate to the project'},state:'stkQTnS'});
}
                    this.isReadyToGo();
                }
        });