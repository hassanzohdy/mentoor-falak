_Component({
                selector: 'project-meetings-page',
                c: 'ProjectMeetingsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','user','confirmRemoving','modalIsOpened','modalHeading','submit','record','meetingMembers','membersList','meetingRepresentatives','isValidForm','isSending','confirmDelete','remove'],
                children: {cGmqIE5cb:'project-layout',ci7e9U9GM:'flk-dropdown-list',cSYni4G_g:'flk-datepicker',cjvRj5PMg:'flk-dropdown-list',cRjPsijq8:'flk-dropdown-list',cqq7aDAUv:'flk-file-input',cIXRj06YU:'flk-modal',cFuYvS2Wg:'flk-alert'},
                render: function (component) {
                    let cmpUSIX = this._lc('cGmqIE5cb', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elc5b2R = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let el2DeJU = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Meeting`);
ec('button');
let elQhuRq = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } meetings
        (${ component.project.meetings.length })`);
ec('h1');
let elocx4a = eo('table',null,null,`class`,`table table-striped buttoned`);
let elcUfNr = eo('thead');
let elAKsxB = eo('tr');
let el3kQER = eo('th');
text(`Meeting`);
ec('th');
let elIhBZh = eo('th');
text(`Type`);
ec('th');
let elMY9Rc = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let el3Yf0g = eo('tbody');
let cnd5vaR = Is.empty(component.project.meetings);
this.setState('st7Rcar', cnd5vaR);
let cndh4_j = !(cnd5vaR);
this.setState('stmo8hu', cndh4_j);
if (cnd5vaR) { 
let elrnUuA = eo('tr','yfRf');
let el7tuVS = eo('td','mOnf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Meetings Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.meetings) {
let meeting = component.project.meetings[index]; 
 let iiEBsB = 'JsFBUmW' + index;
let elvGI8T = eo('tr','NCH807WC_IVA' + index+iiEBsB);
let elrqhlc = eo('td','ON7ff'+iiEBsB);
let elImmii = eo('a','uaEff'+iiEBsB,null,`href`,`${URLS.project(component.project, 'meetings', meeting)}`);
text(meeting.title);
ec('a');
ec('td');
let elk0cRA = eo('td','82aff'+iiEBsB);
text(meeting.type);
ec('td');
let elXrHlm = eo('td','ZTJff'+iiEBsB);
let cndI6Ml = component.project.isHigherAuthority || meeting.createdBy.id == component.user.id;
this.setState('stQXwoy', cndI6Ml);
if (cndI6Ml) { 
let el1C9Qd = eo('button','Vw_ff'+iiEBsB,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', meeting, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elOfy6E = eo('i','Qwnff'+iiEBsB,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el1C9Qd;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit meeting')}`});
        ;
                    }, 20);                
                let ellxDLG = eo('button','XLtff'+iiEBsB,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(meeting, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elZjWHp = eo('i','YEmff'+iiEBsB,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = ellxDLG;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete meeting')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cnd3IDB = component.modalIsOpened;
this.setState('stq5Wwd', cnd3IDB);
if (cnd3IDB) { 
component.modal = this._lc('cIXRj06YU', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let eleXoiN = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! eleXoiN.formHandler) {
                    window.cfrmdlr = eleXoiN.formHandler = new FormHandler(eleXoiN, component);
                } else {
                    window.cfrmdlr = eleXoiN.formHandler;
                }
            let elYLxS3 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elYLxS3.value = fval(component.project.id);
let elGb5dQ = eo('div',null,null,`class`,`form-group`);
elGb5dQ.cls = {'group-error': !!eleXoiN.formHandler.getError(`title`) };

            for (let className in elGb5dQ.cls) {
                elGb5dQ.classList.toggle(className, elGb5dQ.cls[className]);
            }  
            let elW14Oc = eo('label',null,null,`for`,`title`);
text(trans('Meeting Title'));
let elhW0M6 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elwENgy = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eleXoiN.formHandler.addError(`title`, 'required', trans('validation.required'));}return eleXoiN.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Meeting Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elwENgy.value = fval(component.record.title);
let cndmFYN = eleXoiN.formHandler.getError(`title`);
this.setState('stJRfb7', cndmFYN);
if (cndmFYN) { 
let elhXZn0 = eo('div','I6Of',null,`class`,`alert alert-danger`);
text(eleXoiN.formHandler.getError(`title`));
ec('div');
}ec('div');
let elKKbbD = eo('div',null,null,`class`,`form-group`);
elKKbbD.cls = {'group-error': !!eleXoiN.formHandler.getError(`mom`) };

            for (let className in elKKbbD.cls) {
                elKKbbD.classList.toggle(className, elKKbbD.cls[className]);
            }  
            let el2XC0h = eo('label',null,null,`for`,`mom`);
text(trans('MoM'));
let elq5Sfq = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eldFUto = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.mom = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eleXoiN.formHandler.addError(`mom`, 'required', trans('validation.required'));}return eleXoiN.formHandler.removeError(`mom`);}]},`value`,`${fval(component.record.mom)}`,`name`,`${(`mom`).toInputName()}`,`placeholder`,`${trans(`MoM`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`mom`);
eldFUto.value = fval(component.record.mom);
ec('textarea');
let cndkwNu = eleXoiN.formHandler.getError(`mom`);
this.setState('stHZ1hX', cndkwNu);
if (cndkwNu) { 
let eluHTCo = eo('div','IVuf',null,`class`,`alert alert-danger`);
text(eleXoiN.formHandler.getError(`mom`));
ec('div');
}ec('div');
let elpcR8H = eo('div',null,null,`class`,`row`);
let elzSSe4 = eo('div',null,null,`class`,`col`);
let cmpWLHs = this._lc('ci7e9U9GM', {parent:component,parentTop:flkModal,props:{value:component.record.type,items:['internal', 'external', 'voiceCall']},events:{onselect:function(e) {let $el = this; component.record.type = e.value}},attrs:{name:`${(`type`).toInputName()}`,label:'Meeting Type'},state:'stq5Wwd'});
ec('div');
let elmIToa = eo('div',null,null,`class`,`col`);
let cmp2LOi = this._lc('cSYni4G_g', {parent:component,parentTop:flkModal,props:{value:component.record.date,dateTime:true,required:true},attrs:{name:`${(`date`).toInputName()}`,placeholder:`${trans(`Meeting Date`)}`,label:'Meeting Date',class:'form-control'},state:'stq5Wwd'});
ec('div');
ec('div');
let elvFVmF = eo('div',null,null,`class`,`row m-t-1`);
let elh9Pbl = eo('div',null,null,`class`,`col`);
let cmpdNR7 = this._lc('cjvRj5PMg', {parent:component,parentTop:flkModal,props:{required:true,value:component.meetingMembers(),multiple:true,items:component.membersList},boolAttrs:{multiple:true},attrs:{name:`${(`members[]`).toInputName()}`,label:'Participating Members'},state:'stq5Wwd'});
ec('div');
let cndnCy_ = ['external', 'voiceCall'].includes(component.record.type);
this.setState('stKUwk1', cndnCy_);
if (cndnCy_) { 
let elV3g8m = eo('div','BO5f',null,`class`,`col`);
let cmpvnF9 = this._lc('cRjPsijq8', {parent:component,parentTop:flkModal,props:{required:true,value:component.meetingRepresentatives(),multiple:true,items:component.project.client.representatives},boolAttrs:{multiple:true},attrs:{name:`${(`clientRepresentatives[]`).toInputName()}`,label:'Client Representatives'},state:'stKUwk1'});
ec('div');
}ec('div');
let elcsZqV = eo('div',null,null,`class`,`m-t-2`);
let cmpODLX = this._lc('cqq7aDAUv', {parent:component,parentTop:flkModal,content:(flkFileInput) => {let elQrOwK = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elHzADe = eo('strong',null,null,`class`,`ml-1`);
text(`Upload Attachment`);
ec('strong');
},attrs:{name:`${(`attachment`).toInputName()}`,class:'btn btn-cyan bold',label:'Meeting'},state:'stq5Wwd'});
ec('div');
let elaLJuQ = eo('div',null,null,`class`,`m-t-1 text-center`);
let elkKxNs = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stq5Wwd'});
}let cndzraZ = component.confirmDelete;
this.setState('stF4WWs', cndzraZ);
if (cndzraZ) { 
let cmpf_n6 = this._lc('cFuYvS2Wg', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stF4WWs'});
}
                    this.isReadyToGo();
                }
        });