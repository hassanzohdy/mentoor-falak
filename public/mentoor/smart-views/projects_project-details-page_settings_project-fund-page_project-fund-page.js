_Component({
                selector: 'project-fund-page',
                c: 'ProjectFundPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','modalIsOpened','submit','fundValue','user','isValidForm','isSending'],
                children: {crQJFJPZF:'gold-icon',cQ9A6X9_0:'flk-time-ago',cLpfViOJP:'project-layout',c5RRDZoa3:'flk-modal'},
                render: function (component) {
                    let cmpV_mN = this._lc('cLpfViOJP', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elXhseC = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal()}]},`class`,`float-right btn btn-success bold`);
let elHgPc8 = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
let cmp7MGi = this._lc('crQJFJPZF', {parent:component,parentTop:projectLayout,props:{coins:0}});
ec('button');
let elwMJha = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Project Fund
        ${ component.project.fund.format() }`);
ec('h1');
let elIfmYy = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let eloecWx = eo('thead');
let elA7F0v = eo('tr');
let elRSK2z = eo('th');
text(`Fund`);
ec('th');
let el66qb0 = eo('th');
text(`By`);
ec('th');
let elSy5LR = eo('th');
text(`Donated`);
ec('th');
ec('tr');
ec('thead');
let el3_4T5 = eo('tbody');
let cndeCd4 = Is.empty(component.project.fundList);
this.setState('steTEbG', cndeCd4);
let cndu8D4 = !(cndeCd4);
this.setState('stNY4vW', cndu8D4);
if (cndeCd4) { 
let elEswQE = eo('tr','QiUf');
let el9NBhD = eo('td','bNgf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No found yet`);
ec('td');
ec('tr');
}else { 
for (let i in component.project.fundList) {
let fund = component.project.fundList[i]; 
 let iiue8G = 'ZmuUqmL' + i;
let el5P9aH = eo('tr','y8gmlPD63Zbn' + i+iiue8G);
let el7T539 = eo('td','VJzff'+iiue8G,null,`class`,`bold`);
text(fund.fund.format());
ec('td');
let elvS932 = eo('td','gPgff'+iiue8G);
text(fund.createdBy.name);
ec('td');
let elVOtd0 = eo('td','iTWff'+iiue8G);
let cmppJQq = this._lc('cQ9A6X9_0', {parent:component,parentTop:projectLayout,props:{timestamp:fund.createdAt.timestamp},state:'stNY4vW',insideLoop:true,index:"" +iiue8G});
ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndf67b = component.modalIsOpened;
this.setState('stWTgih', cndf67b);
if (cndf67b) { 
component.modal = this._lc('c5RRDZoa3', {parent:component,events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elvpYYG = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elvpYYG.formHandler) {
                    window.cfrmdlr = elvpYYG.formHandler = new FormHandler(elvpYYG, component);
                } else {
                    window.cfrmdlr = elvpYYG.formHandler;
                }
            let elGWC6W = eo('div',null,null,`class`,`form-group`);
elGWC6W.cls = {'group-error': !!elvpYYG.formHandler.getError(`fund`) };

            for (let className in elGWC6W.cls) {
                elGWC6W.classList.toggle(className, elGWC6W.cls[className]);
            }  
            let elVeEr_ = eo('label',null,null,`for`,`fund`);
text(trans('Fund Amount'));
let elxcQHw = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elrEhiJ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.fundValue = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elvpYYG.formHandler.addError(`fund`, 'required', trans('validation.required'));}return elvpYYG.formHandler.removeError(`fund`);}]},`value`,`${fval(component.fundValue)}`,`name`,`${(`fund`).toInputName()}`,`placeholder`,`${trans(`Fund Amount`)}`,`type`,`number`,`class`,`form-control`,`id`,`fund`);
elrEhiJ.value = fval(component.fundValue);
let cndch_e = elvpYYG.formHandler.getError(`fund`);
this.setState('stsP1ld', cndch_e);
if (cndch_e) { 
let elbckK9 = eo('div','B9Jf',null,`class`,`alert alert-danger`);
text(elvpYYG.formHandler.getError(`fund`));
ec('div');
}ec('div');
let el03Mkg = eo('div',null,null,`class`,`m-t-1 text-center`);
let elvqn7r = eo('button',null,null, boolAttrs, {disabled:component.fundValue > component.user.gold || ! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Donate`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Donate to the project'},state:'stWTgih'});
}
                    this.isReadyToGo();
                }
        });