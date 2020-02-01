_Component({
                selector: 'project-polls-page',
                c: 'ProjectPollsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cNrgiBqRy:'project-layout',czR48ol8p:'flk-modal',cuzHV_lpt:'flk-alert'},
                render: function (component) {
                    let cmpf2Kc = this._lc('cNrgiBqRy', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el6K2b2 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elDNWQp = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Poll`);
ec('button');
let elLVQmC = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Polls
        (${ component.project.polls.length })`);
ec('h1');
let elGz2hm = eo('table',null,null,`class`,`table table-striped buttoned`);
let elan0Aa = eo('thead');
let el3nsaI = eo('tr');
let elcaoCn = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elhhJsh = eo('tbody');
let cndZmD2 = Is.empty(component.project.polls);
this.setState('stXkEix', cndZmD2);
let cndxQpA = !(cndZmD2);
this.setState('stj8TIp', cndxQpA);
if (cndZmD2) { 
let elobBSa = eo('tr','Kjpf');
let elfEKZx = eo('td','TMyf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Polls Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.polls) {
let record = component.project.polls[index]; 
 let iiV77M = 'vwDGEBn' + index;
let elUzu6H = eo('tr','qMSudGG0GQYi' + index+iiV77M);
let elrLHZ8 = eo('td','_vFff'+iiV77M);
let elEeMPK = eo('button','pRMff'+iiV77M,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elihusF = eo('i','T6mff'+iiV77M,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elEeMPK;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Poll')}`});
        ;
                    }, 20);                
                let el2zkql = eo('button','6ctff'+iiV77M,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elU3eBu = eo('i','kBTff'+iiV77M,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el2zkql;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Poll')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cnd789t = component.modalIsOpened;
this.setState('stJtCNA', cnd789t);
if (cnd789t) { 
component.modal = this._lc('czR48ol8p', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elSDAQt = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elSDAQt.formHandler) {
                    window.cfrmdlr = elSDAQt.formHandler = new FormHandler(elSDAQt, component);
                } else {
                    window.cfrmdlr = elSDAQt.formHandler;
                }
            let elp59OA = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elp59OA.value = fval(component.project.id);
let eli_S1T = eo('div',null,null,`class`,`form-group`);
eli_S1T.cls = {'group-error': !!elSDAQt.formHandler.getError(`name`) };

            for (let className in eli_S1T.cls) {
                eli_S1T.classList.toggle(className, eli_S1T.cls[className]);
            }  
            let el5OfET = eo('label',null,null,`for`,`name`);
text(trans('Poll Name'));
let el_XSFd = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elhqj7X = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elSDAQt.formHandler.addError(`name`, 'required', trans('validation.required'));}return elSDAQt.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Poll Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elhqj7X.value = fval(component.record.name);
let cndsXfh = elSDAQt.formHandler.getError(`name`);
this.setState('sttwFqY', cndsXfh);
if (cndsXfh) { 
let elsioX2 = eo('div','Ynff',null,`class`,`alert alert-danger`);
text(elSDAQt.formHandler.getError(`name`));
ec('div');
}ec('div');
let elfTEoT = eo('div',null,null,`class`,`m-t-1 text-center`);
let elE4yAs = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stJtCNA'});
}let cnd10qi = component.confirmDelete;
this.setState('stCyPKv', cnd10qi);
if (cnd10qi) { 
let cmpPkMQ = this._lc('cuzHV_lpt', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stCyPKv'});
}
                    this.isReadyToGo();
                }
        });