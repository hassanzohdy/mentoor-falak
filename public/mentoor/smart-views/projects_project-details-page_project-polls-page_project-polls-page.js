_Component({
                selector: 'project-polls-page',
                c: 'ProjectPollsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cSLGXjCLP:'project-layout',cbCxkKl0W:'flk-modal',caZmWOr3g:'flk-alert'},
                render: function (component) {
                    let cmpBxX8 = this._lc('cSLGXjCLP', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el2Kaet = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elbeNji = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Poll`);
ec('button');
let elgpAyy = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Polls
        (${ component.project.polls.length })`);
ec('h1');
let el44eTr = eo('table',null,null,`class`,`table table-striped buttoned`);
let elLr8iu = eo('thead');
let elNqaR8 = eo('tr');
let eldj_ZG = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let el6sdZP = eo('tbody');
let cnduY9K = Is.empty(component.project.polls);
this.setState('stCTaa6', cnduY9K);
let cndFNSN = !(cnduY9K);
this.setState('strev1N', cndFNSN);
if (cnduY9K) { 
let el3I1aE = eo('tr','szSf');
let el714Jm = eo('td','kABf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Polls Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.polls) {
let record = component.project.polls[index]; 
 let iiME1h = 'B4iIZCx' + index;
let elGVCx8 = eo('tr','gHBu5HFqs0W3' + index+iiME1h);
let elbhAgf = eo('td','xQuff'+iiME1h);
let elKLd3_ = eo('button','A7Hff'+iiME1h,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elaERaX = eo('i','Cy6ff'+iiME1h,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elKLd3_;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Poll')}`});
        ;
                    }, 20);                
                let el66uiz = eo('button','EtBff'+iiME1h,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let eluDV_I = eo('i','wnOff'+iiME1h,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el66uiz;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Poll')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndpsQo = component.modalIsOpened;
this.setState('stI_bJt', cndpsQo);
if (cndpsQo) { 
component.modal = this._lc('cbCxkKl0W', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elr0fRB = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elr0fRB.formHandler) {
                    window.cfrmdlr = elr0fRB.formHandler = new FormHandler(elr0fRB, component);
                } else {
                    window.cfrmdlr = elr0fRB.formHandler;
                }
            let el7Mxad = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el7Mxad.value = fval(component.project.id);
let eliLhpv = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elr0fRB.formHandler.getError(`name`) })}`);
let elZrcdW = eo('label',null,null,`for`,`name`);
text(trans('Poll Name'));
let elkyyz3 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elfkMGJ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elr0fRB.formHandler.addError(`name`, 'required', trans('validation.required'));}return elr0fRB.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Poll Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elfkMGJ.value = fval(component.record.name);
let cndQIqF = elr0fRB.formHandler.getError(`name`);
this.setState('stcP6Gh', cndQIqF);
if (cndQIqF) { 
let elSUlSj = eo('div','HuTf',null,`class`,`alert alert-danger`);
text(elr0fRB.formHandler.getError(`name`));
ec('div');
}ec('div');
let elQUuNG = eo('div',null,null,`class`,`m-t-1 text-center`);
let elU3UG6 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stI_bJt'});
}let cndYoTL = component.confirmDelete;
this.setState('stKu8AG', cndYoTL);
if (cndYoTL) { 
let cmpb9Rq = this._lc('caZmWOr3g', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stKu8AG'});
}
                    this.isReadyToGo();
                }
        });