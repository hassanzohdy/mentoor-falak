_Component({
                selector: 'project-meetings-page',
                c: 'ProjectMeetingsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','user','confirmRemoving','modalIsOpened','modalHeading','submit','record','meetingMembers','membersList','meetingRepresentatives','isValidForm','isSending','confirmDelete','remove'],
                children: {cowZHJxIT:'project-layout',cQh3psjHc:'flk-dropdown-list',cbiowXEn8:'flk-datepicker',cRAN7yx83:'flk-dropdown-list',cENSryfdW:'flk-dropdown-list',cSncbOe8q:'flk-file-input',cQBU0WMYH:'flk-modal',cYnO6MISK:'flk-alert'},
                render: function (component) {
                    let cmp4pym = this._lc('cowZHJxIT', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elhYnMo = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let ellK1nD = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Meeting`);
ec('button');
let el5hUI0 = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } meetings
        (${ component.project.meetings.length })`);
ec('h1');
let eloH5ZL = eo('table',null,null,`class`,`table table-striped buttoned`);
let elaThz6 = eo('thead');
let elnQyvY = eo('tr');
let els4Lrl = eo('th');
text(`Meeting`);
ec('th');
let elSyPes = eo('th');
text(`Type`);
ec('th');
let el9Oe4O = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let ellTtlI = eo('tbody');
let cndcDww = Is.empty(component.project.meetings);
this.setState('st7w1bR', cndcDww);
let cndjabG = !(cndcDww);
this.setState('sthRycm', cndjabG);
if (cndcDww) { 
let elH6_ZB = eo('tr','i6If');
let elEMhSt = eo('td','Vgwf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Meetings Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.meetings) {
let meeting = component.project.meetings[index]; 
 let iiTKLk = 'cRWKdop' + index;
let elVWE0N = eo('tr','Wfj7seFSlLvE' + index+iiTKLk);
let elTFrc0 = eo('td','GxLff'+iiTKLk);
let elh3kgt = eo('a','psHff'+iiTKLk,null,`href`,`${URLS.project(component.project, 'meetings', meeting)}`);
text(meeting.title);
ec('a');
ec('td');
let elFGNYE = eo('td','yuCff'+iiTKLk);
text(meeting.type);
ec('td');
let elX__MG = eo('td','SyMff'+iiTKLk);
let cndGMRt = component.project.isHigherAuthority || meeting.createdBy.id == component.user.id;
this.setState('stg91rM', cndGMRt);
if (cndGMRt) { 
let eldYM4Z = eo('button','W0pff'+iiTKLk,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', meeting, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elaMkM2 = eo('i','rFHff'+iiTKLk,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eldYM4Z;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit meeting')}`});
        ;
                    }, 20);                
                let el0Ojeg = eo('button','4luff'+iiTKLk,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(meeting, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elgLZOD = eo('i','H6Aff'+iiTKLk,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el0Ojeg;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete meeting')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndOYnd = component.modalIsOpened;
this.setState('st5w3Z3', cndOYnd);
if (cndOYnd) { 
component.modal = this._lc('cQBU0WMYH', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elrAVHg = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elrAVHg.formHandler) {
                    window.cfrmdlr = elrAVHg.formHandler = new FormHandler(elrAVHg, component);
                } else {
                    window.cfrmdlr = elrAVHg.formHandler;
                }
            let elvjMH4 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elvjMH4.value = fval(component.project.id);
let elL3o6i = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elrAVHg.formHandler.getError(`title`) })}`);
let el71BWt = eo('label',null,null,`for`,`title`);
text(trans('Meeting Title'));
let elI86ya = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elbio2Z = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elrAVHg.formHandler.addError(`title`, 'required', trans('validation.required'));}return elrAVHg.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Meeting Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elbio2Z.value = fval(component.record.title);
let cnd7R9Z = elrAVHg.formHandler.getError(`title`);
this.setState('stvvmXg', cnd7R9Z);
if (cnd7R9Z) { 
let elnN4TZ = eo('div','eUFf',null,`class`,`alert alert-danger`);
text(elrAVHg.formHandler.getError(`title`));
ec('div');
}ec('div');
let elUhsNH = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elrAVHg.formHandler.getError(`mom`) })}`);
let elOWJ4T = eo('label',null,null,`for`,`mom`);
text(trans('MoM'));
let elJRjGB = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elvtJSU = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.mom = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elrAVHg.formHandler.addError(`mom`, 'required', trans('validation.required'));}return elrAVHg.formHandler.removeError(`mom`);}]},`value`,`${fval(component.record.mom)}`,`name`,`${(`mom`).toInputName()}`,`placeholder`,`${trans(`MoM`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`mom`);
elvtJSU.value = fval(component.record.mom);
ec('textarea');
let cnd5WwE = elrAVHg.formHandler.getError(`mom`);
this.setState('stCMmp_', cnd5WwE);
if (cnd5WwE) { 
let elGxAyw = eo('div','tp9f',null,`class`,`alert alert-danger`);
text(elrAVHg.formHandler.getError(`mom`));
ec('div');
}ec('div');
let ela3jl3 = eo('div',null,null,`class`,`row`);
let elMoyHZ = eo('div',null,null,`class`,`col`);
let cmprOuZ = this._lc('cQh3psjHc', {parent:component,parentTop:flkModal,props:{value:component.record.type,items:['internal', 'external', 'voiceCall']},events:{onselect:function(e) {let $el = this; component.record.type = e.value}},attrs:{name:`${(`type`).toInputName()}`,label:'Meeting Type'},state:'st5w3Z3'});
ec('div');
let elh4cgw = eo('div',null,null,`class`,`col`);
let cmpodLJ = this._lc('cbiowXEn8', {parent:component,parentTop:flkModal,props:{value:component.record.date,dateTime:true,required:true},attrs:{name:`${(`date`).toInputName()}`,placeholder:`${trans(`Meeting Date`)}`,label:'Meeting Date',class:'form-control'},state:'st5w3Z3'});
ec('div');
ec('div');
let elkKxMZ = eo('div',null,null,`class`,`row m-t-1`);
let eldpiYt = eo('div',null,null,`class`,`col`);
let cmpfJhD = this._lc('cRAN7yx83', {parent:component,parentTop:flkModal,props:{required:true,value:component.meetingMembers(),multiple:true,items:component.membersList},boolAttrs:{multiple:true},attrs:{name:`${(`members[]`).toInputName()}`,label:'Participating Members'},state:'st5w3Z3'});
ec('div');
let cndHDqN = ['external', 'voiceCall'].includes(component.record.type);
this.setState('stTOPRJ', cndHDqN);
if (cndHDqN) { 
let elIoP_0 = eo('div','RKKf',null,`class`,`col`);
let cmpY7mk = this._lc('cENSryfdW', {parent:component,parentTop:flkModal,props:{required:true,value:component.meetingRepresentatives(),multiple:true,items:component.project.client.representatives},boolAttrs:{multiple:true},attrs:{name:`${(`clientRepresentatives[]`).toInputName()}`,label:'Client Representatives'},state:'stTOPRJ'});
ec('div');
}ec('div');
let elbZKpg = eo('div',null,null,`class`,`m-t-2`);
let cmpJsgv = this._lc('cSncbOe8q', {parent:component,parentTop:flkModal,content:(flkFileInput) => {let elGmAH7 = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let elKFNuQ = eo('strong',null,null,`class`,`ml-1`);
text(`Upload Attachment`);
ec('strong');
},attrs:{name:`${(`attachment`).toInputName()}`,class:'btn btn-cyan bold',label:'Meeting'},state:'st5w3Z3'});
ec('div');
let elm_d5w = eo('div',null,null,`class`,`m-t-1 text-center`);
let elfdwaF = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'st5w3Z3'});
}let cnd9fEB = component.confirmDelete;
this.setState('stv7FeX', cnd9fEB);
if (cnd9fEB) { 
let cmp1t6q = this._lc('cYnO6MISK', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stv7FeX'});
}
                    this.isReadyToGo();
                }
        });