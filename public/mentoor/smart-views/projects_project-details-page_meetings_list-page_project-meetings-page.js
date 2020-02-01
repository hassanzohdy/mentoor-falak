_Component({
                selector: 'project-meetings-page',
                c: 'ProjectMeetingsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','user','confirmRemoving','modalIsOpened','modalHeading','submit','record','meetingMembers','membersList','meetingRepresentatives','isValidForm','isSending','confirmDelete','remove'],
                children: {cojxYO_qc:'project-layout',cYBZH4JdN:'flk-dropdown-list',c2JOkRQtO:'flk-datepicker',caJYydQMN:'flk-dropdown-list',cez7OQv30:'flk-dropdown-list',co3NZIkaS:'flk-file-input',cN12IEzxH:'flk-modal',cCWuO0nZm:'flk-alert'},
                render: function (component) {
                    let cmptCiA = this._lc('cojxYO_qc', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elXlPNS = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let els6S9R = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Meeting`);
ec('button');
let elGyYbz = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } meetings
        (${ component.project.meetings.length })`);
ec('h1');
let elb15zX = eo('table',null,null,`class`,`table table-striped buttoned`);
let elqRGbB = eo('thead');
let elL1ov9 = eo('tr');
let el9Mi85 = eo('th');
text(`Meeting`);
ec('th');
let elsUcTJ = eo('th');
text(`Type`);
ec('th');
let elUwVCN = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elvKt9F = eo('tbody');
let cndDlUb = Is.empty(component.project.meetings);
this.setState('stWdCSH', cndDlUb);
let cndFIs7 = !(cndDlUb);
this.setState('stUeJsE', cndFIs7);
if (cndDlUb) { 
let elm9UKo = eo('tr','gxFf');
let elCBzPS = eo('td','Abmf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Meetings Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.meetings) {
let meeting = component.project.meetings[index]; 
 let iiqVKB = '9C5b7Dc' + index;
let elU_NH2 = eo('tr','9WLW20apZRHA' + index+iiqVKB);
let elAHYrT = eo('td','pLqff'+iiqVKB);
let elwu4XB = eo('a','r01ff'+iiqVKB,null,`href`,`${URLS.project(component.project, 'meetings', meeting)}`);
text(meeting.title);
ec('a');
ec('td');
let el8Xv1r = eo('td','LFgff'+iiqVKB);
text(meeting.type);
ec('td');
let eluA37i = eo('td','dv1ff'+iiqVKB);
let cndPVug = component.project.isHigherAuthority || meeting.createdBy.id == component.user.id;
this.setState('stBdjYZ', cndPVug);
if (cndPVug) { 
let eldPJ_c = eo('button','jZ7ff'+iiqVKB,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', meeting, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elL6yLn = eo('i','da_ff'+iiqVKB,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eldPJ_c;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit meeting')}`});
        ;
                    }, 20);                
                let eliPcMA = eo('button','5lsff'+iiqVKB,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(meeting, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let el6_uTa = eo('i','Draff'+iiqVKB,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eliPcMA;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete meeting')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndCEfx = component.modalIsOpened;
this.setState('stFRvpi', cndCEfx);
if (cndCEfx) { 
component.modal = this._lc('cN12IEzxH', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elb56PV = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elb56PV.formHandler) {
                    window.cfrmdlr = elb56PV.formHandler = new FormHandler(elb56PV, component);
                } else {
                    window.cfrmdlr = elb56PV.formHandler;
                }
            let elWq2hA = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elWq2hA.value = fval(component.project.id);
let elZtBZ4 = eo('div',null,null,`class`,`form-group`);
elZtBZ4.cls = {'group-error': !!elb56PV.formHandler.getError(`title`) };

            for (let className in elZtBZ4.cls) {
                elZtBZ4.classList.toggle(className, elZtBZ4.cls[className]);
            }  
            let elbUqzP = eo('label',null,null,`for`,`title`);
text(trans('Meeting Title'));
let eldRXpk = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el0SoYs = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elb56PV.formHandler.addError(`title`, 'required', trans('validation.required'));}return elb56PV.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Meeting Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el0SoYs.value = fval(component.record.title);
let cndm2DD = elb56PV.formHandler.getError(`title`);
this.setState('stuCgf7', cndm2DD);
if (cndm2DD) { 
let elNA6Sb = eo('div','Wy2f',null,`class`,`alert alert-danger`);
text(elb56PV.formHandler.getError(`title`));
ec('div');
}ec('div');
let el9_e7H = eo('div',null,null,`class`,`form-group`);
el9_e7H.cls = {'group-error': !!elb56PV.formHandler.getError(`mom`) };

            for (let className in el9_e7H.cls) {
                el9_e7H.classList.toggle(className, el9_e7H.cls[className]);
            }  
            let elfUQo9 = eo('label',null,null,`for`,`mom`);
text(trans('MoM'));
let elKQ_iW = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elcpPCU = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.mom = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elb56PV.formHandler.addError(`mom`, 'required', trans('validation.required'));}return elb56PV.formHandler.removeError(`mom`);}]},`value`,`${fval(component.record.mom)}`,`name`,`${(`mom`).toInputName()}`,`placeholder`,`${trans(`MoM`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`mom`);
elcpPCU.value = fval(component.record.mom);
ec('textarea');
let cndIEx_ = elb56PV.formHandler.getError(`mom`);
this.setState('stZrcVw', cndIEx_);
if (cndIEx_) { 
let elvrsRw = eo('div','aWsf',null,`class`,`alert alert-danger`);
text(elb56PV.formHandler.getError(`mom`));
ec('div');
}ec('div');
let elkCNRE = eo('div',null,null,`class`,`row`);
let elFHffE = eo('div',null,null,`class`,`col`);
let cmpXc1d = this._lc('cYBZH4JdN', {parent:component,parentTop:flkModal,props:{value:component.record.type,items:['internal', 'external', 'voiceCall']},events:{onselect:function(e) {let $el = this; component.record.type = e.value}},attrs:{name:`${(`type`).toInputName()}`,label:'Meeting Type'},state:'stFRvpi'});
ec('div');
let elHVBXb = eo('div',null,null,`class`,`col`);
let cmpQ66T = this._lc('c2JOkRQtO', {parent:component,parentTop:flkModal,props:{value:component.record.date,dateTime:true,required:true},attrs:{name:`${(`date`).toInputName()}`,placeholder:`${trans(`Meeting Date`)}`,label:'Meeting Date',class:'form-control'},state:'stFRvpi'});
ec('div');
ec('div');
let el90cT5 = eo('div',null,null,`class`,`row m-t-1`);
let elceXG9 = eo('div',null,null,`class`,`col`);
let cmpdo3q = this._lc('caJYydQMN', {parent:component,parentTop:flkModal,props:{required:true,value:component.meetingMembers(),multiple:true,items:component.membersList},boolAttrs:{multiple:true},attrs:{name:`${(`members[]`).toInputName()}`,label:'Participating Members'},state:'stFRvpi'});
ec('div');
let cndxUOT = ['external', 'voiceCall'].includes(component.record.type);
this.setState('stLIS4X', cndxUOT);
if (cndxUOT) { 
let elw49hc = eo('div','VNzf',null,`class`,`col`);
let cmpWQXD = this._lc('cez7OQv30', {parent:component,parentTop:flkModal,props:{required:true,value:component.meetingRepresentatives(),multiple:true,items:component.project.client.representatives},boolAttrs:{multiple:true},attrs:{name:`${(`clientRepresentatives[]`).toInputName()}`,label:'Client Representatives'},state:'stLIS4X'});
ec('div');
}ec('div');
let els849Q = eo('div',null,null,`class`,`m-t-2`);
let cmpEWzR = this._lc('co3NZIkaS', {parent:component,parentTop:flkModal,content:(flkFileInput) => {let eldUxGV = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let el_tWnH = eo('strong',null,null,`class`,`ml-1`);
text(`Upload Attachment`);
ec('strong');
},attrs:{name:`${(`attachment`).toInputName()}`,class:'btn btn-cyan bold',label:'Meeting'},state:'stFRvpi'});
ec('div');
let elmuVMJ = eo('div',null,null,`class`,`m-t-1 text-center`);
let elxSkNH = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stFRvpi'});
}let cndKkUU = component.confirmDelete;
this.setState('stfFFxr', cndKkUU);
if (cndKkUU) { 
let cmpscri = this._lc('cCWuO0nZm', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stfFFxr'});
}
                    this.isReadyToGo();
                }
        });