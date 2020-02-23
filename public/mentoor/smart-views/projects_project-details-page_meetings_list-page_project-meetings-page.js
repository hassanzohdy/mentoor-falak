_Component({
                selector: 'project-meetings-page',
                c: 'ProjectMeetingsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','user','confirmRemoving','modalIsOpened','modalHeading','submit','record','meetingMembers','membersList','meetingRepresentatives','isValidForm','isSending','confirmDelete','remove'],
                children: {cylxNs497:'project-layout',clIrBFNGq:'flk-dropdown-list',cZ6GizEsA:'flk-datepicker',cgMqCSHor:'flk-dropdown-list',csNRwxQoD:'flk-dropdown-list',c36RBDgmO:'flk-file-input',cw8ZT0WGu:'flk-modal',cIx0PPvAr:'flk-alert'},
                render: function (component) {
                    let cmpAlIe = this._lc('cylxNs497', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el6kIbl = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elWJqFK = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Meeting`);
ec('button');
let elFqNE3 = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } meetings
        (${ component.project.meetings.length })`);
ec('h1');
let elmBMre = eo('table',null,null,`class`,`table table-striped buttoned`);
let el7DiXw = eo('thead');
let elrjB79 = eo('tr');
let eld2OjH = eo('th');
text(`Meeting`);
ec('th');
let el9ExDR = eo('th');
text(`Type`);
ec('th');
let el20zyI = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elDJ63O = eo('tbody');
let cndlc9_ = Is.empty(component.project.meetings);
this.setState('stnstOr', cndlc9_);
let cndQDrT = !(cndlc9_);
this.setState('stRNn1s', cndQDrT);
if (cndlc9_) { 
let elnX0tk = eo('tr','msOf');
let elt1tKX = eo('td','isif',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Meetings Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.meetings) {
let meeting = component.project.meetings[index]; 
 let iiGKkX = 'LF2RIrP' + index;
let elIyoTC = eo('tr','Ia6uJ7670qQC' + index+iiGKkX);
let elgSScP = eo('td','panff'+iiGKkX);
let elK1MNK = eo('a','ysVff'+iiGKkX,null,`href`,`${URLS.project(component.project, 'meetings', meeting)}`);
text(meeting.title);
ec('a');
ec('td');
let el48Bcf = eo('td','1vhff'+iiGKkX);
text(meeting.type);
ec('td');
let elFTjS3 = eo('td','LZQff'+iiGKkX);
let cnda2nw = component.project.isHigherAuthority || meeting.createdBy.id == component.user.id;
this.setState('stPqg5Z', cnda2nw);
if (cnda2nw) { 
let elDYlxX = eo('button','CC2ff'+iiGKkX,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', meeting, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elTdKnu = eo('i','g3nff'+iiGKkX,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elDYlxX;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit meeting')}`});
        ;
                    }, 20);                
                let elZNMgb = eo('button','6YXff'+iiGKkX,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(meeting, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elDb7ot = eo('i','f6Tff'+iiGKkX,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elZNMgb;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete meeting')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndN1jY = component.modalIsOpened;
this.setState('stMJpHF', cndN1jY);
if (cndN1jY) { 
component.modal = this._lc('cw8ZT0WGu', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elckv8l = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elckv8l.formHandler) {
                    window.cfrmdlr = elckv8l.formHandler = new FormHandler(elckv8l, component);
                } else {
                    window.cfrmdlr = elckv8l.formHandler;
                }
            let elyJFHu = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elyJFHu.value = fval(component.project.id);
let eliZ_on = eo('div',null,null,`class`,`form-group`);
eliZ_on.cls = {'group-error': !!elckv8l.formHandler.getError(`title`) };

            for (let className in eliZ_on.cls) {
                eliZ_on.classList.toggle(className, eliZ_on.cls[className]);
            }  
            let elM_I9D = eo('label',null,null,`for`,`title`);
text(trans('Meeting Title'));
let elxdIun = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elEiRdj = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elckv8l.formHandler.addError(`title`, 'required', trans('validation.required'));}return elckv8l.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Meeting Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elEiRdj.value = fval(component.record.title);
let cnd6Zum = elckv8l.formHandler.getError(`title`);
this.setState('st0BtS8', cnd6Zum);
if (cnd6Zum) { 
let elKVOCP = eo('div','K23f',null,`class`,`alert alert-danger`);
text(elckv8l.formHandler.getError(`title`));
ec('div');
}ec('div');
let elO20yR = eo('div',null,null,`class`,`form-group`);
elO20yR.cls = {'group-error': !!elckv8l.formHandler.getError(`mom`) };

            for (let className in elO20yR.cls) {
                elO20yR.classList.toggle(className, elO20yR.cls[className]);
            }  
            let elHf3mO = eo('label',null,null,`for`,`mom`);
text(trans('MoM'));
let elrZNmg = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el2Smgp = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.mom = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elckv8l.formHandler.addError(`mom`, 'required', trans('validation.required'));}return elckv8l.formHandler.removeError(`mom`);}]},`value`,`${fval(component.record.mom)}`,`name`,`${(`mom`).toInputName()}`,`placeholder`,`${trans(`MoM`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`mom`);
el2Smgp.value = fval(component.record.mom);
ec('textarea');
let cndazi_ = elckv8l.formHandler.getError(`mom`);
this.setState('stnHL16', cndazi_);
if (cndazi_) { 
let elFPrOt = eo('div','1rbf',null,`class`,`alert alert-danger`);
text(elckv8l.formHandler.getError(`mom`));
ec('div');
}ec('div');
let elRh6Br = eo('div',null,null,`class`,`row`);
let el0kVq4 = eo('div',null,null,`class`,`col`);
let cmp9QKU = this._lc('clIrBFNGq', {parent:component,parentTop:flkModal,props:{value:component.record.type,items:['internal', 'external', 'voiceCall']},events:{onselect:function(e) {let $el = this; component.record.type = e.value}},attrs:{name:`${(`type`).toInputName()}`,label:'Meeting Type'},state:'stMJpHF'});
ec('div');
let elcNfLz = eo('div',null,null,`class`,`col`);
let cmpmJ__ = this._lc('cZ6GizEsA', {parent:component,parentTop:flkModal,props:{value:component.record.date,dateTime:true,required:true},attrs:{name:`${(`date`).toInputName()}`,placeholder:`${trans(`Meeting Date`)}`,label:'Meeting Date',class:'form-control'},state:'stMJpHF'});
ec('div');
ec('div');
let eluK_1v = eo('div',null,null,`class`,`row m-t-1`);
let elZbwHL = eo('div',null,null,`class`,`col`);
let cmpAXmB = this._lc('cgMqCSHor', {parent:component,parentTop:flkModal,props:{required:true,value:component.meetingMembers(),multiple:true,items:component.membersList},boolAttrs:{multiple:true},attrs:{name:`${(`members[]`).toInputName()}`,label:'Participating Members'},state:'stMJpHF'});
ec('div');
let cndoPRY = ['external', 'voiceCall'].includes(component.record.type);
this.setState('stXexOI', cndoPRY);
if (cndoPRY) { 
let elDB0mO = eo('div','KXnf',null,`class`,`col`);
let cmpRMUo = this._lc('csNRwxQoD', {parent:component,parentTop:flkModal,props:{required:true,value:component.meetingRepresentatives(),multiple:true,items:component.project.client.representatives},boolAttrs:{multiple:true},attrs:{name:`${(`clientRepresentatives[]`).toInputName()}`,label:'Client Representatives'},state:'stXexOI'});
ec('div');
}ec('div');
let elWNmVt = eo('div',null,null,`class`,`m-t-2`);
let cmpPzey = this._lc('c36RBDgmO', {parent:component,parentTop:flkModal,content:(flkFileInput) => {let elQEWUW = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elIfiGC = eo('strong',null,null,`class`,`ml-1`);
text(`Upload Attachment`);
ec('strong');
},attrs:{name:`${(`attachment`).toInputName()}`,class:'btn btn-cyan bold',label:'Meeting'},state:'stMJpHF'});
ec('div');
let elXFTwY = eo('div',null,null,`class`,`m-t-1 text-center`);
let el303L3 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stMJpHF'});
}let cndbpK3 = component.confirmDelete;
this.setState('stZhRbz', cndbpK3);
if (cndbpK3) { 
let cmpc5cz = this._lc('cIx0PPvAr', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stZhRbz'});
}
                    this.isReadyToGo();
                }
        });