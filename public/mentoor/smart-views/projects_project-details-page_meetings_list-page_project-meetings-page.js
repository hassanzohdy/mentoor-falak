_Component({
                selector: 'project-meetings-page',
                c: 'ProjectMeetingsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','user','confirmRemoving','modalIsOpened','modalHeading','submit','record','meetingMembers','membersList','meetingRepresentatives','isValidForm','isSending','confirmDelete','remove'],
                children: {ch1wtHvye:'project-layout',cM5Dxtmoi:'markdown-input',ciIHVpYo4:'flk-dropdown-list',cSmPzESbP:'flk-datepicker',cTLPHc9jW:'flk-dropdown-list',cJhZhqVWQ:'flk-dropdown-list',cbjh4xQoG:'flk-file-input',cZsu39mXG:'flk-modal',cfRFEESck:'flk-alert'},
                render: function (component) {
                    let cmpyYjV = this._lc('ch1wtHvye', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elixQIu = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let eljkQ34 = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Meeting`);
ec('button');
let eliApcz = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } meetings
        (${ component.project.meetings.length })`);
ec('h1');
let elY6srT = eo('table',null,null,`class`,`table table-striped buttoned`);
let elPZXoD = eo('thead');
let elgODds = eo('tr');
let elVxXwt = eo('th');
text(`Meeting`);
ec('th');
let elSEoCy = eo('th');
text(`Type`);
ec('th');
let eldlMkn = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elpzm12 = eo('tbody');
let cndMsvr = Is.empty(component.project.meetings);
this.setState('stUawRl', cndMsvr);
let cndwGGF = !(cndMsvr);
this.setState('stmIlmK', cndwGGF);
if (cndMsvr) { 
let ela6Ban = eo('tr','mu_f');
let elAn8M2 = eo('td','9a6f',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Meetings Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.meetings) {
let meeting = component.project.meetings[index]; 
 let iits4X = 'euX0bcP' + index;
let elMcFy2 = eo('tr','_YIUrSR1MFAw' + index+iits4X);
let elnyZee = eo('td','Bx2ff'+iits4X);
let elt1kJt = eo('a','Wfrff'+iits4X,null,`href`,`${URLS.project(component.project, 'meetings', meeting)}`);
text(meeting.title);
ec('a');
ec('td');
let elytnkX = eo('td','q1Nff'+iits4X);
text(meeting.type);
ec('td');
let elQRpBF = eo('td','4ETff'+iits4X);
let cndmrIt = component.project.isHigherAuthority || meeting.createdBy.id == component.user.id;
this.setState('stXDtdu', cndmrIt);
if (cndmrIt) { 
let elOQHkt = eo('button','61qff'+iits4X,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', meeting, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elhpiiN = eo('i','cSJff'+iits4X,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elOQHkt;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit meeting')}`});
        ;
                    }, 20);                
                let elvELOU = eo('button','CzHff'+iits4X,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(meeting, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elpabx3 = eo('i','yeYff'+iits4X,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elvELOU;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete meeting')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cnd0DqA = component.modalIsOpened;
this.setState('stOtn85', cnd0DqA);
if (cnd0DqA) { 
component.modal = this._lc('cZsu39mXG', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elIlUhY = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elIlUhY.formHandler) {
                    window.cfrmdlr = elIlUhY.formHandler = new FormHandler(elIlUhY, component);
                } else {
                    window.cfrmdlr = elIlUhY.formHandler;
                }
            let elXLiSi = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elXLiSi.value = fval(component.project.id);
let elL3IaY = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elIlUhY.formHandler.getError(`title`) })}`);
let elxSevi = eo('label',null,null,`for`,`title`);
text(trans('Meeting Title'));
let elNP9Gz = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elvtADX = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elIlUhY.formHandler.addError(`title`, 'required', trans('validation.required'));}return elIlUhY.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Meeting Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elvtADX.value = fval(component.record.title);
let cndVhD7 = elIlUhY.formHandler.getError(`title`);
this.setState('st7ghZW', cndVhD7);
if (cndVhD7) { 
let elCJ1iA = eo('div','2nDf',null,`class`,`alert alert-danger`);
text(elIlUhY.formHandler.getError(`title`));
ec('div');
}ec('div');
let cmppK9p = this._lc('cM5Dxtmoi', {parent:component,parentTop:flkModal,props:{required:true,value:component.record.mom},attrs:{name:`${(`mom`).toInputName()}`,label:'MoM'},state:'stOtn85'});
let el7usPw = eo('div',null,null,`class`,`row`);
let elYKd1W = eo('div',null,null,`class`,`col`);
let cmpkEL9 = this._lc('ciIHVpYo4', {parent:component,parentTop:flkModal,props:{value:component.record.type,items:['internal', 'external', 'voiceCall']},events:{onselect:function(e) {let $el = this; component.record.type = e.value}},attrs:{name:`${(`type`).toInputName()}`,label:'Meeting Type'},state:'stOtn85'});
ec('div');
let el67aYG = eo('div',null,null,`class`,`col`);
let cmpC3j8 = this._lc('cSmPzESbP', {parent:component,parentTop:flkModal,props:{value:component.record.date,dateTime:true,required:true},attrs:{name:`${(`date`).toInputName()}`,placeholder:`${trans(`Meeting Date`)}`,label:'Meeting Date',class:'form-control'},state:'stOtn85'});
ec('div');
ec('div');
let elqd8dd = eo('div',null,null,`class`,`row m-t-1`);
let elfcF0P = eo('div',null,null,`class`,`col`);
let cmpVDC2 = this._lc('cTLPHc9jW', {parent:component,parentTop:flkModal,props:{required:true,value:component.meetingMembers(),multiple:true,items:component.membersList},boolAttrs:{multiple:true},attrs:{name:`${(`members[]`).toInputName()}`,label:'Participating Members'},state:'stOtn85'});
ec('div');
let cnd6eb3 = ['external', 'voiceCall'].includes(component.record.type);
this.setState('stdFCso', cnd6eb3);
if (cnd6eb3) { 
let elIU5ou = eo('div','9zmf',null,`class`,`col`);
let cmpm0Gw = this._lc('cJhZhqVWQ', {parent:component,parentTop:flkModal,props:{required:true,value:component.meetingRepresentatives(),multiple:true,items:component.project.client.representatives},boolAttrs:{multiple:true},attrs:{name:`${(`clientRepresentatives[]`).toInputName()}`,label:'Client Representatives'},state:'stdFCso'});
ec('div');
}ec('div');
let el_sm_c = eo('div',null,null,`class`,`m-t-2`);
let cmp_t1U = this._lc('cbjh4xQoG', {parent:component,parentTop:flkModal,content:(flkFileInput) => {let elP2IRR = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let elSFYeD = eo('strong',null,null,`class`,`ml-1`);
text(`Upload Attachment`);
ec('strong');
},attrs:{name:`${(`attachment`).toInputName()}`,class:'btn btn-cyan bold',label:'Meeting'},state:'stOtn85'});
ec('div');
let elggELx = eo('div',null,null,`class`,`m-t-1 text-center`);
let elmpxNh = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'full'},state:'stOtn85'});
}let cndafI7 = component.confirmDelete;
this.setState('st54Sr_', cndafI7);
if (cndafI7) { 
let cmp7OmF = this._lc('cfRFEESck', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st54Sr_'});
}
                    this.isReadyToGo();
                }
        });