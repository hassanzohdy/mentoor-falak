_Component({
                selector: 'project-meetings-page',
                c: 'ProjectMeetingsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','user','confirmRemoving','modalIsOpened','modalHeading','submit','record','meetingMembers','membersList','meetingRepresentatives','isValidForm','isSending','confirmDelete','remove'],
                children: {cNYMtVwjN:'project-layout',cW4t0HmOi:'flk-dropdown-list',cymkw_YXC:'flk-datepicker',cQbHJR72T:'flk-dropdown-list',cz_o552Sy:'flk-dropdown-list',c10ZKgv_g:'flk-file-input',cLo8y0fq8:'flk-modal',cyAtW4mmD:'flk-alert'},
                render: function (component) {
                    let cmp4OQ2 = this._lc('cNYMtVwjN', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elUwD96 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elmYZIA = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Meeting`);
ec('button');
let elF1X9U = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } meetings
        (${ component.project.meetings.length })`);
ec('h1');
let elBd69Y = eo('table',null,null,`class`,`table table-striped buttoned`);
let el8OVRz = eo('thead');
let elPztBK = eo('tr');
let elqSZlm = eo('th');
text(`Meeting`);
ec('th');
let elFovte = eo('th');
text(`Type`);
ec('th');
let elcF86g = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elt4snK = eo('tbody');
let cndD7vf = Is.empty(component.project.meetings);
this.setState('st1toYS', cndD7vf);
let cndn7qI = !(cndD7vf);
this.setState('stQAdUm', cndn7qI);
if (cndD7vf) { 
let elm0YuM = eo('tr','Afcf');
let elkne2k = eo('td','OSGf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Meetings Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.meetings) {
let meeting = component.project.meetings[index]; 
 let iii0o7 = '0cecQo2' + index;
let el2RrQq = eo('tr','7NKKbyxqzJaq' + index+iii0o7);
let el6tK9c = eo('td','atAff'+iii0o7);
let elXaDdZ = eo('a','Qpvff'+iii0o7,null,`href`,`${URLS.project(component.project, 'meetings', meeting)}`);
text(meeting.title);
ec('a');
ec('td');
let elau872 = eo('td','Epqff'+iii0o7);
text(meeting.type);
ec('td');
let ellqoSw = eo('td','9HRff'+iii0o7);
let cndZdai = component.project.isHigherAuthority || meeting.createdBy.id == component.user.id;
this.setState('stQ9BR1', cndZdai);
if (cndZdai) { 
let el0PY7q = eo('button','rhwff'+iii0o7,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', meeting, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let ellXAQ9 = eo('i','E_gff'+iii0o7,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el0PY7q;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit meeting')}`});
        ;
                    }, 20);                
                let el6w9jy = eo('button','Aibff'+iii0o7,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(meeting, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let eljDyWT = eo('i','Cuyff'+iii0o7,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el6w9jy;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete meeting')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndcYeV = component.modalIsOpened;
this.setState('st8OwJW', cndcYeV);
if (cndcYeV) { 
component.modal = this._lc('cLo8y0fq8', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elf3hEi = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elf3hEi.formHandler) {
                    window.cfrmdlr = elf3hEi.formHandler = new FormHandler(elf3hEi, component);
                } else {
                    window.cfrmdlr = elf3hEi.formHandler;
                }
            let elHN14R = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elHN14R.value = fval(component.project.id);
let ellP1Wk = eo('div',null,null,`class`,`form-group`);
ellP1Wk.cls = {'group-error': !!elf3hEi.formHandler.getError(`title`) };

            for (let className in ellP1Wk.cls) {
                ellP1Wk.classList.toggle(className, ellP1Wk.cls[className]);
            }  
            let elzL5Nq = eo('label',null,null,`for`,`title`);
text(trans('Meeting Title'));
let elMLwVq = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elb9Rvw = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elf3hEi.formHandler.addError(`title`, 'required', trans('validation.required'));}return elf3hEi.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Meeting Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elb9Rvw.value = fval(component.record.title);
let cndoF5h = elf3hEi.formHandler.getError(`title`);
this.setState('stnJmcU', cndoF5h);
if (cndoF5h) { 
let elmzPIb = eo('div','Rhtf',null,`class`,`alert alert-danger`);
text(elf3hEi.formHandler.getError(`title`));
ec('div');
}ec('div');
let elRQZT0 = eo('div',null,null,`class`,`form-group`);
elRQZT0.cls = {'group-error': !!elf3hEi.formHandler.getError(`mom`) };

            for (let className in elRQZT0.cls) {
                elRQZT0.classList.toggle(className, elRQZT0.cls[className]);
            }  
            let el7FfU5 = eo('label',null,null,`for`,`mom`);
text(trans('MoM'));
let elmEXqI = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elZYiPQ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.mom = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elf3hEi.formHandler.addError(`mom`, 'required', trans('validation.required'));}return elf3hEi.formHandler.removeError(`mom`);}]},`value`,`${fval(component.record.mom)}`,`name`,`${(`mom`).toInputName()}`,`placeholder`,`${trans(`MoM`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`mom`);
elZYiPQ.value = fval(component.record.mom);
ec('textarea');
let cndMPSB = elf3hEi.formHandler.getError(`mom`);
this.setState('stQ9FxT', cndMPSB);
if (cndMPSB) { 
let elgF8Lb = eo('div','C6Lf',null,`class`,`alert alert-danger`);
text(elf3hEi.formHandler.getError(`mom`));
ec('div');
}ec('div');
let elKghLl = eo('div',null,null,`class`,`row`);
let el1c3A3 = eo('div',null,null,`class`,`col`);
let cmpwy03 = this._lc('cW4t0HmOi', {parent:component,parentTop:flkModal,props:{value:component.record.type,items:['internal', 'external', 'voiceCall']},events:{onselect:function(e) {let $el = this; component.record.type = e.value}},attrs:{name:`${(`type`).toInputName()}`,label:'Meeting Type'},state:'st8OwJW'});
ec('div');
let elfR5Vj = eo('div',null,null,`class`,`col`);
let cmpg6ef = this._lc('cymkw_YXC', {parent:component,parentTop:flkModal,props:{value:component.record.date,dateTime:true,required:true},attrs:{name:`${(`date`).toInputName()}`,placeholder:`${trans(`Meeting Date`)}`,label:'Meeting Date',class:'form-control'},state:'st8OwJW'});
ec('div');
ec('div');
let el_MlQP = eo('div',null,null,`class`,`row m-t-1`);
let el48HH5 = eo('div',null,null,`class`,`col`);
let cmplivO = this._lc('cQbHJR72T', {parent:component,parentTop:flkModal,props:{required:true,value:component.meetingMembers(),multiple:true,items:component.membersList},boolAttrs:{multiple:true},attrs:{name:`${(`members[]`).toInputName()}`,label:'Participating Members'},state:'st8OwJW'});
ec('div');
let cndYH0j = ['external', 'voiceCall'].includes(component.record.type);
this.setState('st_SYzs', cndYH0j);
if (cndYH0j) { 
let elqMqTA = eo('div','CKWf',null,`class`,`col`);
let cmpio91 = this._lc('cz_o552Sy', {parent:component,parentTop:flkModal,props:{required:true,value:component.meetingRepresentatives(),multiple:true,items:component.project.client.representatives},boolAttrs:{multiple:true},attrs:{name:`${(`clientRepresentatives[]`).toInputName()}`,label:'Client Representatives'},state:'st_SYzs'});
ec('div');
}ec('div');
let elHpVtV = eo('div',null,null,`class`,`m-t-2`);
let cmpEq9p = this._lc('c10ZKgv_g', {parent:component,parentTop:flkModal,content:(flkFileInput) => {let elnM4qy = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elFoh4u = eo('strong',null,null,`class`,`ml-1`);
text(`Upload Attachment`);
ec('strong');
},attrs:{name:`${(`attachment`).toInputName()}`,class:'btn btn-cyan bold',label:'Meeting'},state:'st8OwJW'});
ec('div');
let eljkrjG = eo('div',null,null,`class`,`m-t-1 text-center`);
let elBauta = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'st8OwJW'});
}let cndP2EX = component.confirmDelete;
this.setState('stqVp0f', cndP2EX);
if (cndP2EX) { 
let cmpfkcE = this._lc('cyAtW4mmD', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stqVp0f'});
}
                    this.isReadyToGo();
                }
        });