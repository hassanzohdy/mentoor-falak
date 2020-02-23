_Component({
                selector: 'project-meetings-page',
                c: 'ProjectMeetingsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','user','confirmRemoving','modalIsOpened','modalHeading','submit','record','meetingMembers','membersList','meetingRepresentatives','isValidForm','isSending','confirmDelete','remove'],
                children: {c6lCGfH52:'project-layout',ceg_YKU1b:'flk-dropdown-list',ck52zUQtI:'flk-datepicker',c2VTDKt0d:'flk-dropdown-list',cNXYJGybD:'flk-dropdown-list',c3ilprCVX:'flk-file-input',c4qhPiPE2:'flk-modal',cixZaY5kr:'flk-alert'},
                render: function (component) {
                    let cmp01l2 = this._lc('c6lCGfH52', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elMkzC_ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elDFSPm = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Meeting`);
ec('button');
let elFsY78 = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } meetings
        (${ component.project.meetings.length })`);
ec('h1');
let elsliap = eo('table',null,null,`class`,`table table-striped buttoned`);
let elHEwND = eo('thead');
let ellF89z = eo('tr');
let el87Rlm = eo('th');
text(`Meeting`);
ec('th');
let elDHbnx = eo('th');
text(`Type`);
ec('th');
let elzhd92 = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elxaP6R = eo('tbody');
let cndjaDX = Is.empty(component.project.meetings);
this.setState('st9eQML', cndjaDX);
let cnd5RSy = !(cndjaDX);
this.setState('sthj_7L', cnd5RSy);
if (cndjaDX) { 
let elOBDfy = eo('tr','BWof');
let elAY25N = eo('td','Yg0f',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Meetings Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.meetings) {
let meeting = component.project.meetings[index]; 
 let iiGH2w = 'lA8PSgQ' + index;
let el1x5Cv = eo('tr','9DyHDMZ6F6Y9' + index+iiGH2w);
let ellJhFB = eo('td','Npsff'+iiGH2w);
let elh4YGT = eo('a','evOff'+iiGH2w,null,`href`,`${URLS.project(component.project, 'meetings', meeting)}`);
text(meeting.title);
ec('a');
ec('td');
let elF8vlX = eo('td','fe8ff'+iiGH2w);
text(meeting.type);
ec('td');
let elPOsMm = eo('td','M3_ff'+iiGH2w);
let cndqZHK = component.project.isHigherAuthority || meeting.createdBy.id == component.user.id;
this.setState('stRN1cq', cndqZHK);
if (cndqZHK) { 
let elco1YX = eo('button','0v2ff'+iiGH2w,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', meeting, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let el3EyF0 = eo('i','zrMff'+iiGH2w,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elco1YX;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit meeting')}`});
        ;
                    }, 20);                
                let elsZr2Z = eo('button','gHhff'+iiGH2w,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(meeting, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elVk7oz = eo('i','NFUff'+iiGH2w,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elsZr2Z;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete meeting')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cnd50sq = component.modalIsOpened;
this.setState('stUI_ik', cnd50sq);
if (cnd50sq) { 
component.modal = this._lc('c4qhPiPE2', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elHJVOT = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elHJVOT.formHandler) {
                    window.cfrmdlr = elHJVOT.formHandler = new FormHandler(elHJVOT, component);
                } else {
                    window.cfrmdlr = elHJVOT.formHandler;
                }
            let elTSHOZ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elTSHOZ.value = fval(component.project.id);
let elPbzYD = eo('div',null,null,`class`,`form-group`);
elPbzYD.cls = {'group-error': !!elHJVOT.formHandler.getError(`title`) };

            for (let className in elPbzYD.cls) {
                elPbzYD.classList.toggle(className, elPbzYD.cls[className]);
            }  
            let eluc6cP = eo('label',null,null,`for`,`title`);
text(trans('Meeting Title'));
let elhyAvJ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elmaBVB = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elHJVOT.formHandler.addError(`title`, 'required', trans('validation.required'));}return elHJVOT.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Meeting Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elmaBVB.value = fval(component.record.title);
let cndn_jx = elHJVOT.formHandler.getError(`title`);
this.setState('stF2Kgr', cndn_jx);
if (cndn_jx) { 
let elS50qX = eo('div','Zkof',null,`class`,`alert alert-danger`);
text(elHJVOT.formHandler.getError(`title`));
ec('div');
}ec('div');
let elr_1UT = eo('div',null,null,`class`,`form-group`);
elr_1UT.cls = {'group-error': !!elHJVOT.formHandler.getError(`mom`) };

            for (let className in elr_1UT.cls) {
                elr_1UT.classList.toggle(className, elr_1UT.cls[className]);
            }  
            let el97LC3 = eo('label',null,null,`for`,`mom`);
text(trans('MoM'));
let elTNwRX = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elmQND0 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.mom = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elHJVOT.formHandler.addError(`mom`, 'required', trans('validation.required'));}return elHJVOT.formHandler.removeError(`mom`);}]},`value`,`${fval(component.record.mom)}`,`name`,`${(`mom`).toInputName()}`,`placeholder`,`${trans(`MoM`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`mom`);
elmQND0.value = fval(component.record.mom);
ec('textarea');
let cndQRKt = elHJVOT.formHandler.getError(`mom`);
this.setState('sthPTEj', cndQRKt);
if (cndQRKt) { 
let elYR0U2 = eo('div','T7Bf',null,`class`,`alert alert-danger`);
text(elHJVOT.formHandler.getError(`mom`));
ec('div');
}ec('div');
let elmA1bd = eo('div',null,null,`class`,`row`);
let elyAXkY = eo('div',null,null,`class`,`col`);
let cmpSO4A = this._lc('ceg_YKU1b', {parent:component,parentTop:flkModal,props:{value:component.record.type,items:['internal', 'external', 'voiceCall']},events:{onselect:function(e) {let $el = this; component.record.type = e.value}},attrs:{name:`${(`type`).toInputName()}`,label:'Meeting Type'},state:'stUI_ik'});
ec('div');
let elt7O4C = eo('div',null,null,`class`,`col`);
let cmp1hkQ = this._lc('ck52zUQtI', {parent:component,parentTop:flkModal,props:{value:component.record.date,dateTime:true,required:true},attrs:{name:`${(`date`).toInputName()}`,placeholder:`${trans(`Meeting Date`)}`,label:'Meeting Date',class:'form-control'},state:'stUI_ik'});
ec('div');
ec('div');
let elZIAod = eo('div',null,null,`class`,`row m-t-1`);
let elD9F4V = eo('div',null,null,`class`,`col`);
let cmp3XxN = this._lc('c2VTDKt0d', {parent:component,parentTop:flkModal,props:{required:true,value:component.meetingMembers(),multiple:true,items:component.membersList},boolAttrs:{multiple:true},attrs:{name:`${(`members[]`).toInputName()}`,label:'Participating Members'},state:'stUI_ik'});
ec('div');
let cndpVH4 = ['external', 'voiceCall'].includes(component.record.type);
this.setState('staifE6', cndpVH4);
if (cndpVH4) { 
let eleYhsq = eo('div','B7bf',null,`class`,`col`);
let cmpBsNE = this._lc('cNXYJGybD', {parent:component,parentTop:flkModal,props:{required:true,value:component.meetingRepresentatives(),multiple:true,items:component.project.client.representatives},boolAttrs:{multiple:true},attrs:{name:`${(`clientRepresentatives[]`).toInputName()}`,label:'Client Representatives'},state:'staifE6'});
ec('div');
}ec('div');
let el9YuOw = eo('div',null,null,`class`,`m-t-2`);
let cmpsmYX = this._lc('c3ilprCVX', {parent:component,parentTop:flkModal,content:(flkFileInput) => {let elXzKa7 = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elnrMkj = eo('strong',null,null,`class`,`ml-1`);
text(`Upload Attachment`);
ec('strong');
},attrs:{name:`${(`attachment`).toInputName()}`,class:'btn btn-cyan bold',label:'Meeting'},state:'stUI_ik'});
ec('div');
let elbLXbo = eo('div',null,null,`class`,`m-t-1 text-center`);
let elcPXVX = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stUI_ik'});
}let cndb_KT = component.confirmDelete;
this.setState('stk5hTM', cndb_KT);
if (cndb_KT) { 
let cmp1d4L = this._lc('cixZaY5kr', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stk5hTM'});
}
                    this.isReadyToGo();
                }
        });