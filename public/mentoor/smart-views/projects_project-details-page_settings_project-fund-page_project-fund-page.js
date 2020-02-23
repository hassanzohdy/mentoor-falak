_Component({
                selector: 'project-fund-page',
                c: 'ProjectFundPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','modalIsOpened','submit','fundValue','user','isValidForm','isSending'],
                children: {cePuJHLdb:'gold-icon',cEE4HYCsb:'flk-time-ago',cjz7R64ny:'project-layout',csSCpNymE:'flk-modal'},
                render: function (component) {
                    let cmp3I6z = this._lc('cjz7R64ny', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elR5Muk = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal()}]},`class`,`float-right btn btn-success bold`);
let el1hOZt = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
let cmpfLIB = this._lc('cePuJHLdb', {parent:component,parentTop:projectLayout,props:{coins:0}});
ec('button');
let el_u5B0 = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Project Fund
        ${ component.project.fund.format() }`);
ec('h1');
let elV5GNw = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elXVrhG = eo('thead');
let elmERwQ = eo('tr');
let elwYZlg = eo('th');
text(`Fund`);
ec('th');
let elZCZNq = eo('th');
text(`By`);
ec('th');
let el3nuo_ = eo('th');
text(`Donated`);
ec('th');
ec('tr');
ec('thead');
let elNfARS = eo('tbody');
let cndJW9W = Is.empty(component.project.fundList);
this.setState('st9sscC', cndJW9W);
let cndwlab = !(cndJW9W);
this.setState('stvjHFz', cndwlab);
if (cndJW9W) { 
let elT6MdD = eo('tr','jcif');
let elHH0_X = eo('td','6uPf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No found yet`);
ec('td');
ec('tr');
}else { 
for (let i in component.project.fundList) {
let fund = component.project.fundList[i]; 
 let iiKYsC = 'OfPDPC2' + i;
let elce8KZ = eo('tr','7GYYz_SlfU1s' + i+iiKYsC);
let eltgiI8 = eo('td','Ybvff'+iiKYsC,null,`class`,`bold`);
text(fund.fund.format());
ec('td');
let elGD4Oy = eo('td','WAYff'+iiKYsC);
text(fund.createdBy.name);
ec('td');
let ellh1Zw = eo('td','ot8ff'+iiKYsC);
let cmplFe_ = this._lc('cEE4HYCsb', {parent:component,parentTop:projectLayout,props:{timestamp:fund.createdAt.timestamp},state:'stvjHFz',insideLoop:true,index:"" +iiKYsC});
ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndNgNb = component.modalIsOpened;
this.setState('st6cMss', cndNgNb);
if (cndNgNb) { 
component.modal = this._lc('csSCpNymE', {parent:component,events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elHRESa = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elHRESa.formHandler) {
                    window.cfrmdlr = elHRESa.formHandler = new FormHandler(elHRESa, component);
                } else {
                    window.cfrmdlr = elHRESa.formHandler;
                }
            let elB8pam = eo('div',null,null,`class`,`form-group`);
elB8pam.cls = {'group-error': !!elHRESa.formHandler.getError(`fund`) };

            for (let className in elB8pam.cls) {
                elB8pam.classList.toggle(className, elB8pam.cls[className]);
            }  
            let el1zsdR = eo('label',null,null,`for`,`fund`);
text(trans('Fund Amount'));
let elxcXtz = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elB8nhi = ev('input',null,null, eventListeners, {oninput:[function(e) {component.fundValue = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elHRESa.formHandler.addError(`fund`, 'required', trans('validation.required'));}return elHRESa.formHandler.removeError(`fund`);}]},`value`,`${fval(component.fundValue)}`,`name`,`${(`fund`).toInputName()}`,`placeholder`,`${trans(`Fund Amount`)}`,`type`,`number`,`class`,`form-control`,`id`,`fund`);
elB8nhi.value = fval(component.fundValue);
let cndzbpb = elHRESa.formHandler.getError(`fund`);
this.setState('stu17nx', cndzbpb);
if (cndzbpb) { 
let el6kzDh = eo('div','SvIf',null,`class`,`alert alert-danger`);
text(elHRESa.formHandler.getError(`fund`));
ec('div');
}ec('div');
let elWDmms = eo('div',null,null,`class`,`m-t-1 text-center`);
let elmB_cg = eo('button',null,null, boolAttrs, {disabled:component.fundValue > component.user.gold || ! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Donate`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Donate to the project'},state:'st6cMss'});
}
                    this.isReadyToGo();
                }
        });