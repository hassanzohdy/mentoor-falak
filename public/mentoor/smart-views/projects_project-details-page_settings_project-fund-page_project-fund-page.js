_Component({
                selector: 'project-fund-page',
                c: 'ProjectFundPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','modalIsOpened','submit','fundValue','user','isValidForm','isSending'],
                children: {cHeDBeMfj:'gold-icon',cJ3t1sSHx:'flk-time-ago',cAMYUiHcC:'project-layout',ccHhKNMM8:'flk-modal'},
                render: function (component) {
                    let cmpeJPS = this._lc('cAMYUiHcC', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elocWNu = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal()}]},`class`,`float-right btn btn-success bold`);
let ellmnDJ = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
let cmpsxvP = this._lc('cHeDBeMfj', {parent:component,parentTop:projectLayout,props:{coins:0}});
ec('button');
let el9JolD = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Project Fund
        ${ component.project.fund.format() }`);
ec('h1');
let elv6TfJ = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let eli2HTN = eo('thead');
let el_Jh2W = eo('tr');
let elcVB8x = eo('th');
text(`Fund`);
ec('th');
let elhR3Bz = eo('th');
text(`By`);
ec('th');
let el7gUaW = eo('th');
text(`Donated`);
ec('th');
ec('tr');
ec('thead');
let elVIzTO = eo('tbody');
let cndWfNB = Is.empty(component.project.fundList);
this.setState('stBevw5', cndWfNB);
let cndJUS0 = !(cndWfNB);
this.setState('stQvWpD', cndJUS0);
if (cndWfNB) { 
let elbnlJe = eo('tr','9Nqf');
let el0gpZT = eo('td','75Yf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No found yet`);
ec('td');
ec('tr');
}else { 
for (let i in component.project.fundList) {
let fund = component.project.fundList[i]; 
 let iiSSgn = '2X1X9A3' + i;
let elgDgYk = eo('tr','5kXEvqWFKj5Q' + i+iiSSgn);
let elLBKeJ = eo('td','4SBff'+iiSSgn,null,`class`,`bold`);
text(fund.fund.format());
ec('td');
let elzNjEI = eo('td','XGgff'+iiSSgn);
text(fund.createdBy.name);
ec('td');
let elJS2Et = eo('td','61hff'+iiSSgn);
let cmpdfxh = this._lc('cJ3t1sSHx', {parent:component,parentTop:projectLayout,props:{timestamp:fund.createdAt.timestamp},state:'stQvWpD',insideLoop:true,index:"" +iiSSgn});
ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndtDgF = component.modalIsOpened;
this.setState('stMKx22', cndtDgF);
if (cndtDgF) { 
component.modal = this._lc('ccHhKNMM8', {parent:component,events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elQYpiV = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elQYpiV.formHandler) {
                    window.cfrmdlr = elQYpiV.formHandler = new FormHandler(elQYpiV, component);
                } else {
                    window.cfrmdlr = elQYpiV.formHandler;
                }
            let elXA3bQ = eo('div',null,null,`class`,`form-group`);
elXA3bQ.cls = {'group-error': !!elQYpiV.formHandler.getError(`fund`) };

            for (let className in elXA3bQ.cls) {
                elXA3bQ.classList.toggle(className, elXA3bQ.cls[className]);
            }  
            let elMjhji = eo('label',null,null,`for`,`fund`);
text(trans('Fund Amount'));
let elHlqOW = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elsDcgh = ev('input',null,null, eventListeners, {oninput:[function(e) {component.fundValue = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQYpiV.formHandler.addError(`fund`, 'required', trans('validation.required'));}return elQYpiV.formHandler.removeError(`fund`);}]},`value`,`${fval(component.fundValue)}`,`name`,`${(`fund`).toInputName()}`,`placeholder`,`${trans(`Fund Amount`)}`,`type`,`number`,`class`,`form-control`,`id`,`fund`);
elsDcgh.value = fval(component.fundValue);
let cndKuxi = elQYpiV.formHandler.getError(`fund`);
this.setState('stYSaiv', cndKuxi);
if (cndKuxi) { 
let elv80h8 = eo('div','uSkf',null,`class`,`alert alert-danger`);
text(elQYpiV.formHandler.getError(`fund`));
ec('div');
}ec('div');
let elQbYS7 = eo('div',null,null,`class`,`m-t-1 text-center`);
let elX8Ijw = eo('button',null,null, boolAttrs, {disabled:component.fundValue > component.user.gold || ! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Donate`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Donate to the project'},state:'stMKx22'});
}
                    this.isReadyToGo();
                }
        });