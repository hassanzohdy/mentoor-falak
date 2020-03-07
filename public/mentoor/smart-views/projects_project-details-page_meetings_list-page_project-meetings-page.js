_Component({
                selector: 'project-meetings-page',
                c: 'ProjectMeetingsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','user','confirmRemoving','modalIsOpened','modalHeading','submit','record','meetingMembers','membersList','meetingRepresentatives','isValidForm','isSending','confirmDelete','remove'],
                children: {cHO6RSegw:'project-layout',cnC1iErA_:'markdown-input',cjR20fM_8:'flk-dropdown-list',cEnidHTTl:'flk-datepicker',czANWJzHj:'flk-dropdown-list',cVUoXfoE3:'flk-dropdown-list',cJxPsNjVR:'flk-file-input',cCYl30l8E:'flk-modal',cxndnkOCQ:'flk-alert'},
                render: function (component) {
                    let cmpI104 = this._lc('cHO6RSegw', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elOshl8 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elAMLuF = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Meeting`);
ec('button');
let elznQZg = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } meetings
        (${ component.project.meetings.length })`);
ec('h1');
let elrJQlp = eo('table',null,null,`class`,`table table-striped buttoned`);
let elNZlpO = eo('thead');
let elR2iA6 = eo('tr');
let el6syEH = eo('th');
text(`Meeting`);
ec('th');
let ell6_G5 = eo('th');
text(`Type`);
ec('th');
let elMICw3 = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elSJVAi = eo('tbody');
let cnd1fuq = Is.empty(component.project.meetings);
this.setState('strIkTA', cnd1fuq);
let cndINGV = !(cnd1fuq);
this.setState('stjGGOJ', cndINGV);
if (cnd1fuq) { 
let elSZyX9 = eo('tr','UnDf');
let elhNKqU = eo('td','zAsf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Meetings Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.meetings) {
let meeting = component.project.meetings[index]; 
 let iiYjyG = '6yft8xK' + index;
let el5irzK = eo('tr','qYAkNT39mnex' + index+iiYjyG);
let elOIbeC = eo('td','0UYff'+iiYjyG);
let el2aV8v = eo('a','X1zff'+iiYjyG,null,`href`,`${URLS.project(component.project, 'meetings', meeting)}`);
text(meeting.title);
ec('a');
ec('td');
let elkykxH = eo('td','MPtff'+iiYjyG);
text(meeting.type);
ec('td');
let elI84uk = eo('td','ntGff'+iiYjyG);
let cndYXoe = component.project.isHigherAuthority || meeting.createdBy.id == component.user.id;
this.setState('st_5IKD', cndYXoe);
if (cndYXoe) { 
let elQZx_y = eo('button','1W4ff'+iiYjyG,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', meeting, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let eldrD4r = eo('i','610ff'+iiYjyG,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elQZx_y;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit meeting')}`});
        ;
                    }, 20);                
                let elyoxOQ = eo('button','xjLff'+iiYjyG,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(meeting, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let el6xY7T = eo('i','Ulyff'+iiYjyG,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elyoxOQ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete meeting')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndhkoz = component.modalIsOpened;
this.setState('st0H8Tu', cndhkoz);
if (cndhkoz) { 
component.modal = this._lc('cCYl30l8E', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elcU8Lg = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elcU8Lg.formHandler) {
                    window.cfrmdlr = elcU8Lg.formHandler = new FormHandler(elcU8Lg, component);
                } else {
                    window.cfrmdlr = elcU8Lg.formHandler;
                }
            let elosvoK = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elosvoK.value = fval(component.project.id);
let elLVg97 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elcU8Lg.formHandler.getError(`title`) })}`);
let elivYV2 = eo('label',null,null,`for`,`title`);
text(trans('Meeting Title'));
let elIkqxJ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elF7PoZ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elcU8Lg.formHandler.addError(`title`, 'required', trans('validation.required'));}return elcU8Lg.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Meeting Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elF7PoZ.value = fval(component.record.title);
let cndESZR = elcU8Lg.formHandler.getError(`title`);
this.setState('stoPFhA', cndESZR);
if (cndESZR) { 
let elyEekx = eo('div','homf',null,`class`,`alert alert-danger`);
text(elcU8Lg.formHandler.getError(`title`));
ec('div');
}ec('div');
let cmpgX7M = this._lc('cnC1iErA_', {parent:component,parentTop:flkModal,props:{required:true,value:component.record.mom},attrs:{name:`${(`mom`).toInputName()}`,label:'MoM'},state:'st0H8Tu'});
let elj7AQv = eo('div',null,null,`class`,`row`);
let elkmNCF = eo('div',null,null,`class`,`col`);
let cmpBmhk = this._lc('cjR20fM_8', {parent:component,parentTop:flkModal,props:{value:component.record.type,items:['internal', 'external', 'voiceCall']},events:{onselect:function(e) {let $el = this; component.record.type = e.value}},attrs:{name:`${(`type`).toInputName()}`,label:'Meeting Type'},state:'st0H8Tu'});
ec('div');
let el4KUvT = eo('div',null,null,`class`,`col`);
let cmp1bty = this._lc('cEnidHTTl', {parent:component,parentTop:flkModal,props:{value:component.record.date,dateTime:true,required:true},attrs:{name:`${(`date`).toInputName()}`,placeholder:`${trans(`Meeting Date`)}`,label:'Meeting Date',class:'form-control'},state:'st0H8Tu'});
ec('div');
ec('div');
let elYZCku = eo('div',null,null,`class`,`row m-t-1`);
let elLycln = eo('div',null,null,`class`,`col`);
let cmpwlmv = this._lc('czANWJzHj', {parent:component,parentTop:flkModal,props:{required:true,value:component.meetingMembers(),multiple:true,items:component.membersList},boolAttrs:{multiple:true},attrs:{name:`${(`members[]`).toInputName()}`,label:'Participating Members'},state:'st0H8Tu'});
ec('div');
let cndbXlw = ['external', 'voiceCall'].includes(component.record.type);
this.setState('stwPwSO', cndbXlw);
if (cndbXlw) { 
let el1oFQS = eo('div','_R3f',null,`class`,`col`);
let cmp76cN = this._lc('cVUoXfoE3', {parent:component,parentTop:flkModal,props:{required:true,value:component.meetingRepresentatives(),multiple:true,items:component.project.client.representatives},boolAttrs:{multiple:true},attrs:{name:`${(`clientRepresentatives[]`).toInputName()}`,label:'Client Representatives'},state:'stwPwSO'});
ec('div');
}ec('div');
let elcvQLM = eo('div',null,null,`class`,`m-t-2`);
let cmpTkQw = this._lc('cJxPsNjVR', {parent:component,parentTop:flkModal,content:(flkFileInput) => {let elWOkYR = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let eljWvXD = eo('strong',null,null,`class`,`ml-1`);
text(`Upload Attachment`);
ec('strong');
},attrs:{name:`${(`attachment`).toInputName()}`,class:'btn btn-cyan bold',label:'Meeting'},state:'st0H8Tu'});
ec('div');
let el5YJMx = eo('div',null,null,`class`,`m-t-1 text-center`);
let elksS9n = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'full'},state:'st0H8Tu'});
}let cndcmCW = component.confirmDelete;
this.setState('st4DBKB', cndcmCW);
if (cndcmCW) { 
let cmp7Blv = this._lc('cxndnkOCQ', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st4DBKB'});
}
                    this.isReadyToGo();
                }
        });