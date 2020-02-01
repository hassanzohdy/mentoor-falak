_Component({
                selector: 'project-fund-page',
                c: 'ProjectFundPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','modalIsOpened','submit','fundValue','user','isValidForm','isSending'],
                children: {cCSYqyDPI:'gold-icon',cBvEfZLKN:'flk-time-ago',c8_fmtC3Z:'project-layout',cbWAGXJH2:'flk-modal'},
                render: function (component) {
                    let cmpvmTz = this._lc('c8_fmtC3Z', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elyHEWp = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal()}]},`class`,`float-right btn btn-success bold`);
let elyysyL = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
let cmpFdKO = this._lc('cCSYqyDPI', {parent:component,parentTop:projectLayout,props:{coins:0}});
ec('button');
let eltmscZ = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Project Fund
        ${ component.project.fund.format() }`);
ec('h1');
let elYSrTJ = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elDPXnZ = eo('thead');
let elhY6Ud = eo('tr');
let eliAfFH = eo('th');
text(`Fund`);
ec('th');
let el8URv7 = eo('th');
text(`By`);
ec('th');
let eldLkKg = eo('th');
text(`Donated`);
ec('th');
ec('tr');
ec('thead');
let elfFJOn = eo('tbody');
let cnd0Tf0 = Is.empty(component.project.fundList);
this.setState('stDXxG0', cnd0Tf0);
let cndUPQq = !(cnd0Tf0);
this.setState('stxXHAd', cndUPQq);
if (cnd0Tf0) { 
let elpVhVD = eo('tr','9f2f');
let elRS9cN = eo('td','XLvf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No found yet`);
ec('td');
ec('tr');
}else { 
for (let i in component.project.fundList) {
let fund = component.project.fundList[i]; 
 let iiUX9h = '6KmeROl' + i;
let elshXkg = eo('tr','pHzHmObaG3Tk' + i+iiUX9h);
let elJadOs = eo('td','J8Hff'+iiUX9h,null,`class`,`bold`);
text(fund.fund.format());
ec('td');
let elN_SZG = eo('td','TfAff'+iiUX9h);
text(fund.createdBy.name);
ec('td');
let elo6ZOV = eo('td','Mqaff'+iiUX9h);
let cmplDUU = this._lc('cBvEfZLKN', {parent:component,parentTop:projectLayout,props:{timestamp:fund.createdAt.timestamp},state:'stxXHAd',insideLoop:true,index:"" +iiUX9h});
ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndt5DL = component.modalIsOpened;
this.setState('stqJV1o', cndt5DL);
if (cndt5DL) { 
component.modal = this._lc('cbWAGXJH2', {parent:component,events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elQBJLV = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elQBJLV.formHandler) {
                    window.cfrmdlr = elQBJLV.formHandler = new FormHandler(elQBJLV, component);
                } else {
                    window.cfrmdlr = elQBJLV.formHandler;
                }
            let el20NrE = eo('div',null,null,`class`,`form-group`);
el20NrE.cls = {'group-error': !!elQBJLV.formHandler.getError(`fund`) };

            for (let className in el20NrE.cls) {
                el20NrE.classList.toggle(className, el20NrE.cls[className]);
            }  
            let el5G_QX = eo('label',null,null,`for`,`fund`);
text(trans('Fund Amount'));
let elkKfvL = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eleETaV = ev('input',null,null, eventListeners, {oninput:[function(e) {component.fundValue = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQBJLV.formHandler.addError(`fund`, 'required', trans('validation.required'));}return elQBJLV.formHandler.removeError(`fund`);}]},`value`,`${fval(component.fundValue)}`,`name`,`${(`fund`).toInputName()}`,`placeholder`,`${trans(`Fund Amount`)}`,`type`,`number`,`class`,`form-control`,`id`,`fund`);
eleETaV.value = fval(component.fundValue);
let cndvLEE = elQBJLV.formHandler.getError(`fund`);
this.setState('stjbTSW', cndvLEE);
if (cndvLEE) { 
let elohUE_ = eo('div','A0If',null,`class`,`alert alert-danger`);
text(elQBJLV.formHandler.getError(`fund`));
ec('div');
}ec('div');
let elUugX3 = eo('div',null,null,`class`,`m-t-1 text-center`);
let el7zw3s = eo('button',null,null, boolAttrs, {disabled:component.fundValue > component.user.gold || ! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Donate`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Donate to the project'},state:'stqJV1o'});
}
                    this.isReadyToGo();
                }
        });