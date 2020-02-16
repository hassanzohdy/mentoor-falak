_Component({
                selector: 'project-meetings-page',
                c: 'ProjectMeetingsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','user','confirmRemoving','modalIsOpened','modalHeading','submit','record','meetingMembers','membersList','meetingRepresentatives','isValidForm','isSending','confirmDelete','remove'],
                children: {cYTIJQKbe:'project-layout',cRfDPIIct:'flk-dropdown-list',cQWgEz1i0:'flk-datepicker',clcg9nykq:'flk-dropdown-list',cK9IAYsSp:'flk-dropdown-list',cWTcASpNN:'flk-file-input',czmnwTb85:'flk-modal',cB1EUo12F:'flk-alert'},
                render: function (component) {
                    let cmptFVi = this._lc('cYTIJQKbe', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elzqJ8H = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elYmA9x = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Meeting`);
ec('button');
let el3K0Hs = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } meetings
        (${ component.project.meetings.length })`);
ec('h1');
let elO8nxi = eo('table',null,null,`class`,`table table-striped buttoned`);
let elK3cAh = eo('thead');
let elRmEMZ = eo('tr');
let elh1jIT = eo('th');
text(`Meeting`);
ec('th');
let elENjpZ = eo('th');
text(`Type`);
ec('th');
let elAeMDx = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elUNLb0 = eo('tbody');
let cndbWPS = Is.empty(component.project.meetings);
this.setState('styUdAm', cndbWPS);
let cndyzeg = !(cndbWPS);
this.setState('stteVsW', cndyzeg);
if (cndbWPS) { 
let el9fALK = eo('tr','99Of');
let elorFtL = eo('td','JJrf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Meetings Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.meetings) {
let meeting = component.project.meetings[index]; 
 let iieDrW = 'fqMYHte' + index;
let elF_2EZ = eo('tr','zDdKjvIf40wQ' + index+iieDrW);
let elTJMr6 = eo('td','nxyff'+iieDrW);
let el43__Z = eo('a','8Epff'+iieDrW,null,`href`,`${URLS.project(component.project, 'meetings', meeting)}`);
text(meeting.title);
ec('a');
ec('td');
let elOyw3K = eo('td','7EQff'+iieDrW);
text(meeting.type);
ec('td');
let elkCvEq = eo('td','Zneff'+iieDrW);
let cndG3px = component.project.isHigherAuthority || meeting.createdBy.id == component.user.id;
this.setState('steP6gC', cndG3px);
if (cndG3px) { 
let elsJeb9 = eo('button','gU7ff'+iieDrW,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', meeting, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elqwD4p = eo('i','DzOff'+iieDrW,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elsJeb9;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit meeting')}`});
        ;
                    }, 20);                
                let elH48bm = eo('button','Xanff'+iieDrW,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(meeting, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let el7JNM0 = eo('i','F8_ff'+iieDrW,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elH48bm;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete meeting')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cnd3eFB = component.modalIsOpened;
this.setState('stsC8Rv', cnd3eFB);
if (cnd3eFB) { 
component.modal = this._lc('czmnwTb85', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let eldiDg9 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! eldiDg9.formHandler) {
                    window.cfrmdlr = eldiDg9.formHandler = new FormHandler(eldiDg9, component);
                } else {
                    window.cfrmdlr = eldiDg9.formHandler;
                }
            let eljQbdv = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
eljQbdv.value = fval(component.project.id);
let eloIAuu = eo('div',null,null,`class`,`form-group`);
eloIAuu.cls = {'group-error': !!eldiDg9.formHandler.getError(`title`) };

            for (let className in eloIAuu.cls) {
                eloIAuu.classList.toggle(className, eloIAuu.cls[className]);
            }  
            let elCHXqY = eo('label',null,null,`for`,`title`);
text(trans('Meeting Title'));
let elpfPVx = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el8wama = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eldiDg9.formHandler.addError(`title`, 'required', trans('validation.required'));}return eldiDg9.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Meeting Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el8wama.value = fval(component.record.title);
let cnduTAK = eldiDg9.formHandler.getError(`title`);
this.setState('stv4ZEk', cnduTAK);
if (cnduTAK) { 
let elZfi0D = eo('div','NK_f',null,`class`,`alert alert-danger`);
text(eldiDg9.formHandler.getError(`title`));
ec('div');
}ec('div');
let elDYQuL = eo('div',null,null,`class`,`form-group`);
elDYQuL.cls = {'group-error': !!eldiDg9.formHandler.getError(`mom`) };

            for (let className in elDYQuL.cls) {
                elDYQuL.classList.toggle(className, elDYQuL.cls[className]);
            }  
            let elSoXcI = eo('label',null,null,`for`,`mom`);
text(trans('MoM'));
let elKbSBF = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elhZK8Y = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.mom = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eldiDg9.formHandler.addError(`mom`, 'required', trans('validation.required'));}return eldiDg9.formHandler.removeError(`mom`);}]},`value`,`${fval(component.record.mom)}`,`name`,`${(`mom`).toInputName()}`,`placeholder`,`${trans(`MoM`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`mom`);
elhZK8Y.value = fval(component.record.mom);
ec('textarea');
let cndAlRI = eldiDg9.formHandler.getError(`mom`);
this.setState('stfXyeH', cndAlRI);
if (cndAlRI) { 
let elFWP7A = eo('div','wJdf',null,`class`,`alert alert-danger`);
text(eldiDg9.formHandler.getError(`mom`));
ec('div');
}ec('div');
let elFIrZL = eo('div',null,null,`class`,`row`);
let eleQhWc = eo('div',null,null,`class`,`col`);
let cmphrwe = this._lc('cRfDPIIct', {parent:component,parentTop:flkModal,props:{value:component.record.type,items:['internal', 'external', 'voiceCall']},events:{onselect:function(e) {let $el = this; component.record.type = e.value}},attrs:{name:`${(`type`).toInputName()}`,label:'Meeting Type'},state:'stsC8Rv'});
ec('div');
let elyuQup = eo('div',null,null,`class`,`col`);
let cmp83O3 = this._lc('cQWgEz1i0', {parent:component,parentTop:flkModal,props:{value:component.record.date,dateTime:true,required:true},attrs:{name:`${(`date`).toInputName()}`,placeholder:`${trans(`Meeting Date`)}`,label:'Meeting Date',class:'form-control'},state:'stsC8Rv'});
ec('div');
ec('div');
let elbt3kR = eo('div',null,null,`class`,`row m-t-1`);
let elxzQIP = eo('div',null,null,`class`,`col`);
let cmpA2kc = this._lc('clcg9nykq', {parent:component,parentTop:flkModal,props:{required:true,value:component.meetingMembers(),multiple:true,items:component.membersList},boolAttrs:{multiple:true},attrs:{name:`${(`members[]`).toInputName()}`,label:'Participating Members'},state:'stsC8Rv'});
ec('div');
let cndgtPI = ['external', 'voiceCall'].includes(component.record.type);
this.setState('stt_niT', cndgtPI);
if (cndgtPI) { 
let elu6IvN = eo('div','zcmf',null,`class`,`col`);
let cmpY8xu = this._lc('cK9IAYsSp', {parent:component,parentTop:flkModal,props:{required:true,value:component.meetingRepresentatives(),multiple:true,items:component.project.client.representatives},boolAttrs:{multiple:true},attrs:{name:`${(`clientRepresentatives[]`).toInputName()}`,label:'Client Representatives'},state:'stt_niT'});
ec('div');
}ec('div');
let elkaZIc = eo('div',null,null,`class`,`m-t-2`);
let cmpNti7 = this._lc('cWTcASpNN', {parent:component,parentTop:flkModal,content:(flkFileInput) => {let elY52dk = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elWw3Pa = eo('strong',null,null,`class`,`ml-1`);
text(`Upload Attachment`);
ec('strong');
},attrs:{name:`${(`attachment`).toInputName()}`,class:'btn btn-cyan bold',label:'Meeting'},state:'stsC8Rv'});
ec('div');
let el6ZupF = eo('div',null,null,`class`,`m-t-1 text-center`);
let eltDKqY = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stsC8Rv'});
}let cndbwJP = component.confirmDelete;
this.setState('stFu4SD', cndbwJP);
if (cndbwJP) { 
let cmpIyO6 = this._lc('cB1EUo12F', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stFu4SD'});
}
                    this.isReadyToGo();
                }
        });