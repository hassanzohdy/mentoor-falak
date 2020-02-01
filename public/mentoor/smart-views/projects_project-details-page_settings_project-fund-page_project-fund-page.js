_Component({
                selector: 'project-fund-page',
                c: 'ProjectFundPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','modalIsOpened','submit','fundValue','user','isValidForm','isSending'],
                children: {cMFuoookd:'gold-icon',cBD0Jxnyz:'flk-time-ago',coedb4DVQ:'project-layout',cZj990pGd:'flk-modal'},
                render: function (component) {
                    let cmpkXM3 = this._lc('coedb4DVQ', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el3Q1le = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal()}]},`class`,`float-right btn btn-success bold`);
let elkqA47 = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
let cmpiY6v = this._lc('cMFuoookd', {parent:component,parentTop:projectLayout,props:{coins:0}});
ec('button');
let eluNWrW = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Project Fund
        ${ component.project.fund.format() }`);
ec('h1');
let elp98pg = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let eleNbwL = eo('thead');
let el6ujmy = eo('tr');
let elQHcmQ = eo('th');
text(`Fund`);
ec('th');
let elIKXue = eo('th');
text(`By`);
ec('th');
let elI6rCi = eo('th');
text(`Donated`);
ec('th');
ec('tr');
ec('thead');
let elySdoE = eo('tbody');
let cndNzRu = Is.empty(component.project.fundList);
this.setState('stfWHWe', cndNzRu);
let cndUBFZ = !(cndNzRu);
this.setState('stczDZ_', cndUBFZ);
if (cndNzRu) { 
let elYKKR4 = eo('tr','Obvf');
let elH42qj = eo('td','DSPf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No found yet`);
ec('td');
ec('tr');
}else { 
for (let i in component.project.fundList) {
let fund = component.project.fundList[i]; 
 let iiFXWs = 'pbD0nFL' + i;
let elVflbq = eo('tr','KMutKtjkXLMy' + i+iiFXWs);
let elVUGYW = eo('td','YG0ff'+iiFXWs,null,`class`,`bold`);
text(fund.fund.format());
ec('td');
let elPAwps = eo('td','XnFff'+iiFXWs);
text(fund.createdBy.name);
ec('td');
let el5nwr4 = eo('td','wDVff'+iiFXWs);
let cmplaOA = this._lc('cBD0Jxnyz', {parent:component,parentTop:projectLayout,props:{timestamp:fund.createdAt.timestamp},state:'stczDZ_',insideLoop:true,index:"" +iiFXWs});
ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndP1Ix = component.modalIsOpened;
this.setState('stazfA6', cndP1Ix);
if (cndP1Ix) { 
component.modal = this._lc('cZj990pGd', {parent:component,events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elQU5hP = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elQU5hP.formHandler) {
                    window.cfrmdlr = elQU5hP.formHandler = new FormHandler(elQU5hP, component);
                } else {
                    window.cfrmdlr = elQU5hP.formHandler;
                }
            let el2MnYQ = eo('div',null,null,`class`,`form-group`);
el2MnYQ.cls = {'group-error': !!elQU5hP.formHandler.getError(`fund`) };

            for (let className in el2MnYQ.cls) {
                el2MnYQ.classList.toggle(className, el2MnYQ.cls[className]);
            }  
            let elyMxIQ = eo('label',null,null,`for`,`fund`);
text(trans('Fund Amount'));
let elz9uhU = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elJlgBe = ev('input',null,null, eventListeners, {oninput:[function(e) {component.fundValue = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQU5hP.formHandler.addError(`fund`, 'required', trans('validation.required'));}return elQU5hP.formHandler.removeError(`fund`);}]},`value`,`${fval(component.fundValue)}`,`name`,`${(`fund`).toInputName()}`,`placeholder`,`${trans(`Fund Amount`)}`,`type`,`number`,`class`,`form-control`,`id`,`fund`);
elJlgBe.value = fval(component.fundValue);
let cndH0nI = elQU5hP.formHandler.getError(`fund`);
this.setState('st7mCUv', cndH0nI);
if (cndH0nI) { 
let eldCAfd = eo('div','UWAf',null,`class`,`alert alert-danger`);
text(elQU5hP.formHandler.getError(`fund`));
ec('div');
}ec('div');
let elR34eu = eo('div',null,null,`class`,`m-t-1 text-center`);
let elyDwCY = eo('button',null,null, boolAttrs, {disabled:component.fundValue > component.user.gold || ! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Donate`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Donate to the project'},state:'stazfA6'});
}
                    this.isReadyToGo();
                }
        });