_Component({
                selector: 'project-change-requests-page',
                c: 'ProjectChangeRequestsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','changeRequestTypes','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cDHycvM5V:'project-layout',cPShkHV6L:'flk-datepicker',c29VdUkSI:'flk-dropdown-list',cLQG8eV8s:'flk-modal',cR7Ju4bVt:'flk-alert'},
                render: function (component) {
                    let cmpqw3_ = this._lc('cDHycvM5V', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elhlrLU = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let el4t3Rs = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Change-request`);
ec('button');
let elb4Fq8 = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Change requests
        (${ Object.get(component.project.changeRequests, 'length', '') })`);
ec('h1');
let elBWksX = eo('table',null,null,`class`,`table table-striped buttoned`);
let elOvnyt = eo('thead');
let elVuRFM = eo('tr');
let elatHv4 = eo('th');
text(`Title`);
ec('th');
let elWR4uE = eo('th');
text(`Request Date`);
ec('th');
let elz8IQd = eo('th');
text(`Request Type`);
ec('th');
let elot7iC = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elBYmMg = eo('tbody');
let cndcgG4 = Is.empty(component.project.changeRequests);
this.setState('stBtu7x', cndcgG4);
let cndhZTL = !(cndcgG4);
this.setState('stvaGb3', cndhZTL);
if (cndcgG4) { 
let eli0Ax7 = eo('tr','cGqf');
let elwjqGT = eo('td','U29f',null, 'style', {textAlign:'center'},`colspan`,`4`);
text(`No Change requests Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.changeRequests) {
let record = component.project.changeRequests[index]; 
 let iiGWZR = record.id+ index;
let elvKoBi = eo('tr','L4OdaQhU9w5U' + index+iiGWZR);
let el7y_2E = eo('td','OAMff'+iiGWZR);
let elIVoe9 = eo('a','T1xff'+iiGWZR,null,`href`,`${URLS.project(component.project, 'change-requests', record)}`);
text(record.title);
ec('a');
ec('td');
let eljp1X3 = eo('td','WV9ff'+iiGWZR);
text(record.requestDate);
ec('td');
let el7MvXZ = eo('td','5qhff'+iiGWZR,null,`class`,`bold`);
text(component.changeRequestTypes[record.type]);
ec('td');
let elS7FWh = eo('td','KhBff'+iiGWZR);
let el9Qm5v = eo('button','p_Lff'+iiGWZR,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elWcdJZ = eo('i','LI6ff'+iiGWZR,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el9Qm5v;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Change-request')}`});
        ;
                    }, 20);                
                let elVQZ36 = eo('button','2VAff'+iiGWZR,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elHcN7p = eo('i','YSnff'+iiGWZR,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elVQZ36;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Change-request')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndd0GJ = component.modalIsOpened;
this.setState('stB_9fO', cndd0GJ);
if (cndd0GJ) { 
component.modal = this._lc('cLQG8eV8s', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elN1XsO = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elN1XsO.formHandler) {
                    window.cfrmdlr = elN1XsO.formHandler = new FormHandler(elN1XsO, component);
                } else {
                    window.cfrmdlr = elN1XsO.formHandler;
                }
            let eluZQAi = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
eluZQAi.value = fval(component.project.id);
let elpNm3p = eo('div',null,null,`class`,`form-group`);
elpNm3p.cls = {'group-error': !!elN1XsO.formHandler.getError(`title`) };

            for (let className in elpNm3p.cls) {
                elpNm3p.classList.toggle(className, elpNm3p.cls[className]);
            }  
            let elCakto = eo('label',null,null,`for`,`title`);
text(trans('Change request Title'));
let elGOJ9T = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elJxTLv = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elN1XsO.formHandler.addError(`title`, 'required', trans('validation.required'));}return elN1XsO.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Change request Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elJxTLv.value = fval(component.record.title);
let cndiGpQ = elN1XsO.formHandler.getError(`title`);
this.setState('stUMKcM', cndiGpQ);
if (cndiGpQ) { 
let elolp02 = eo('div','V3tf',null,`class`,`alert alert-danger`);
text(elN1XsO.formHandler.getError(`title`));
ec('div');
}ec('div');
let el0z64i = eo('div',null,null,`class`,`form-group`);
el0z64i.cls = {'group-error': !!elN1XsO.formHandler.getError(`description`) };

            for (let className in el0z64i.cls) {
                el0z64i.classList.toggle(className, el0z64i.cls[className]);
            }  
            let el6Qy4Y = eo('label',null,null,`for`,`description`);
text(trans('Change request Description (Markdown Support)'));
let eleLA40 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elQTJFF = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elN1XsO.formHandler.addError(`description`, 'required', trans('validation.required'));}return elN1XsO.formHandler.removeError(`description`);}]},`value`,`${fval(component.record.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Change request Description (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elQTJFF.value = fval(component.record.description);
ec('textarea');
let cnd0UaE = elN1XsO.formHandler.getError(`description`);
this.setState('stv9_jl', cnd0UaE);
if (cnd0UaE) { 
let elh5Di7 = eo('div','vTMf',null,`class`,`alert alert-danger`);
text(elN1XsO.formHandler.getError(`description`));
ec('div');
}ec('div');
let cmp9Hd1 = this._lc('cPShkHV6L', {parent:component,parentTop:flkModal,props:{value:component.record.requestDate,dateTime:true},attrs:{name:`${(`requestDate`).toInputName()}`,required:'',label:'Request Date',class:'form-control'},state:'stB_9fO'});
let cmpnX3W = this._lc('c29VdUkSI', {parent:component,parentTop:flkModal,props:{required:true,value:component.record.type,items:component.changeRequestTypes},attrs:{name:`${(`type`).toInputName()}`,label:'Change Request Type'},state:'stB_9fO'});
let elPRdRR = eo('div',null,null,`class`,`m-t-1 text-center`);
let elE2tEj = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stB_9fO'});
}let cndCHI1 = component.confirmDelete;
this.setState('st4PT5o', cndCHI1);
if (cndCHI1) { 
let cmpcmdg = this._lc('cR7Ju4bVt', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st4PT5o'});
}
                    this.isReadyToGo();
                }
        });