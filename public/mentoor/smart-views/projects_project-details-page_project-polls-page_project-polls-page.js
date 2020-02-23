_Component({
                selector: 'project-polls-page',
                c: 'ProjectPollsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cROC_lV2B:'project-layout',co4PZM6tZ:'flk-modal',ciwGRgYe6:'flk-alert'},
                render: function (component) {
                    let cmpa3L5 = this._lc('cROC_lV2B', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elS1QCX = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let el_BYXp = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Poll`);
ec('button');
let elz5VxV = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Polls
        (${ component.project.polls.length })`);
ec('h1');
let el54fG9 = eo('table',null,null,`class`,`table table-striped buttoned`);
let el9OWIZ = eo('thead');
let eljtu9A = eo('tr');
let eleIKRd = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let el_LXiH = eo('tbody');
let cndpCbP = Is.empty(component.project.polls);
this.setState('stszLHJ', cndpCbP);
let cndctAd = !(cndpCbP);
this.setState('stWqwIp', cndctAd);
if (cndpCbP) { 
let elulCNI = eo('tr','_oLf');
let elq09VM = eo('td','nhUf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Polls Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.polls) {
let record = component.project.polls[index]; 
 let iiE14S = 'zmt1nUO' + index;
let elqzSid = eo('tr','k2CP5unJN_np' + index+iiE14S);
let elBSRay = eo('td','2zrff'+iiE14S);
let el1s80O = eo('button','Po3ff'+iiE14S,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elDXJus = eo('i','h9Kff'+iiE14S,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el1s80O;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Poll')}`});
        ;
                    }, 20);                
                let elNyT_f = eo('button','tYYff'+iiE14S,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elSXm2y = eo('i','8seff'+iiE14S,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elNyT_f;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Poll')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndiX4i = component.modalIsOpened;
this.setState('stOkBoZ', cndiX4i);
if (cndiX4i) { 
component.modal = this._lc('co4PZM6tZ', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elpOVv_ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elpOVv_.formHandler) {
                    window.cfrmdlr = elpOVv_.formHandler = new FormHandler(elpOVv_, component);
                } else {
                    window.cfrmdlr = elpOVv_.formHandler;
                }
            let elgeoib = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elgeoib.value = fval(component.project.id);
let elPqgko = eo('div',null,null,`class`,`form-group`);
elPqgko.cls = {'group-error': !!elpOVv_.formHandler.getError(`name`) };

            for (let className in elPqgko.cls) {
                elPqgko.classList.toggle(className, elPqgko.cls[className]);
            }  
            let elHtO9R = eo('label',null,null,`for`,`name`);
text(trans('Poll Name'));
let eliPjxf = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elWDt8S = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elpOVv_.formHandler.addError(`name`, 'required', trans('validation.required'));}return elpOVv_.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Poll Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elWDt8S.value = fval(component.record.name);
let cnd3kW_ = elpOVv_.formHandler.getError(`name`);
this.setState('st99zyL', cnd3kW_);
if (cnd3kW_) { 
let elf7teP = eo('div','MbTf',null,`class`,`alert alert-danger`);
text(elpOVv_.formHandler.getError(`name`));
ec('div');
}ec('div');
let eleWS08 = eo('div',null,null,`class`,`m-t-1 text-center`);
let el1NBo_ = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stOkBoZ'});
}let cndoqYW = component.confirmDelete;
this.setState('stowyC2', cndoqYW);
if (cndoqYW) { 
let cmp0VrD = this._lc('ciwGRgYe6', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stowyC2'});
}
                    this.isReadyToGo();
                }
        });