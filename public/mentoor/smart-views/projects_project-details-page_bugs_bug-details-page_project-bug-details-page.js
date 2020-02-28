_Component({
                selector: 'project-bug-details-page',
                c: 'ProjectBugDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','bug','bugCanBeEdited','editBug','bugStatusCanBeChanged','getProperStatuses','oldStatus','confirmStatusChange','newStatus','isRequiringValue','getConfirmingMessage','updateStatus','prepareBug'],
                children: {cqgg7tfCA:'flk-time-ago',cGwljRV_7:'markdown',cc8ZjFBxR:'flk-audio-player',cpJiwowb0:'markdown',c2tuT5PsP:'markdown',cv75Y1CSO:'comments',cvM4BYRoG:'flk-time-ago',cCJ1Ovs0h:'flk-dropdown-list',cMyRszfvK:'project-layout',c4zZVz1_5:'flk-alert',cJZfWfw2M:'bug-modal'},
                render: function (component) {
                    let cmpURcE = this._lc('cMyRszfvK', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elU5sV5 = eo('div',null,null,`class`,`text-right m-b-1`);
let ellckj2 = eo('a',null,null,`href`,`${URLS.project(component.project, 'bugs')}`,`class`,`btn bold btn-purple`);
let elIavof = eo('i',null,null,`class`,`${fas('arrow-left')} mr-2 icon`);
ec('i');
text(`Back to`);
let elXDazD = eo('span',null,null,`class`,`mx-2`);
let elMHj7W = ev('img',null,null,`src`,`${assets('images/bug.jpg')}`,`style`,`width: 20px; height: 30px; border-radius: 50%;`);
let elJwFOq = eo('span',null,null,`class`,`bold red-text`);
text(`s`);
ec('span');
ec('span');
text(`List`);
ec('a');
ec('div');
let cndhmQu = component.bug;
this.setState('sto0qvJ', cndhmQu);
if (cndhmQu) { 
let elp4OW5 = eo('div','PMEf',null,`class`,`bug row`);
let elEfiWd = eo('div','HsIf',null,`class`,`col col-sm-9 order-12 order-sm-1`);
let elS2eX7 = eo('h1','mNNf',null,`class`,`title`);
text('#' + component.bug.id + ' ' + component.bug.title);
ec('h1');
let elwRW8w = ev('img','Q3Mf',null,`src`,`${component.bug.createdBy.image}`,`class`,`user-image`,`title`,`${component.bug.createdBy.name}`,`alt`,`${component.bug.createdBy.name}`);
let elq10pj = eo('div','Gr0f',null,`class`,`d-inline-block`);
let elGvJz6 = eo('div','KbGf');
text(component.bug.createdBy.name);
ec('div');
let eloDx50 = eo('div','z69f');
let cmpBAU3 = this._lc('cqgg7tfCA', {parent:component,parentTop:projectLayout,props:{timestamp:component.bug.createdAt.timestamp},attrs:{class:'ago'},state:'sto0qvJ'});
ec('div');
ec('div');
let elTuKti = eo('div','cW1f',null,`class`,`simple-card p-1 m-y-1`);
let el8GGDY = eo('div','hPYf',null,`class`,`result-heading`);
text(`Description`);
ec('div');
let cmpJVOW = this._lc('cGwljRV_7', {parent:component,parentTop:projectLayout,props:{content:component.bug.description},state:'sto0qvJ'});
let cndcqhZ = component.bug.record;
this.setState('stvoWVZ', cndcqhZ);
if (cndcqhZ) { 
let cmpm4dK = this._lc('cc8ZjFBxR', {parent:component,parentTop:projectLayout,props:{src:component.bug.record},attrs:{src:`${component.bug.record}`},state:'stvoWVZ'});
}ec('div');
let cnddym2 = component.bug.stepsToReproduce;
this.setState('stSZiz2', cnddym2);
if (cnddym2) { 
let elQjBmr = eo('div','kwaf',null,`class`,`simple-card p-1 m-b-1`);
let elYi3PD = eo('div','xKVf',null,`class`,`result-heading`);
text(`Steps To Reproduce`);
ec('div');
let elp3YDi = eo('ol','DmHf',null,`class`,`steps-list`);
for (let i in component.bug.stepsToReproduce.split('\n')) {
let step = component.bug.stepsToReproduce.split('\n')[i]; 
 let iiUlOK = 'JAe_13x' + i;
let ellQilQ = eo('li','1uScsRg6jnml' + i+iiUlOK);
text(step);
ec('li');
}
ec('ol');
ec('div');
}let cndw3Id = component.bug.expectedBehavior;
this.setState('stArfch', cndw3Id);
if (cndw3Id) { 
let elLwwAX = eo('div','oVff',null,`class`,`simple-card p-1 m-b-1`);
let el_rt0s = eo('div','1hLf',null,`class`,`result-heading`);
text(`Expected Result`);
ec('div');
let cmpdQr5 = this._lc('cpJiwowb0', {parent:component,parentTop:projectLayout,props:{content:component.bug.expectedBehavior},state:'stArfch'});
ec('div');
}let cndQ4CJ = component.bug.actualResult;
this.setState('stgQIkt', cndQ4CJ);
if (cndQ4CJ) { 
let elCKXUr = eo('div','WW9f',null,`class`,`simple-card p-1 m-b-1`);
let elbn65i = eo('div','gZLf',null,`class`,`result-heading`);
text(`Actual Result`);
ec('div');
let cmpEKBA = this._lc('c2tuT5PsP', {parent:component,parentTop:projectLayout,props:{content:component.bug.actualResult},state:'stgQIkt'});
ec('div');
}let cndn6A8 = ! Is.empty(component.bug.attachments);
this.setState('stq73da', cndn6A8);
if (cndn6A8) { 
let elWRR5G = eo('div','0Jcf',null,`class`,`m-b-2`);
let elboyd2 = eo('h2','zo1f');
text(`Attachments (${ component.bug.attachments.length })`);
ec('h2');
for (let i in component.bug.attachments) {
let attachment = component.bug.attachments[i]; 
 let ii_QtP = '2EndsWf' + i;
let elGbivC = eo('a','jc5YrxupIq3D' + i+ii_QtP,null,`href`,`${attachment}`,`target`,`_blank`);
let cndVQTS = isImage(attachment);
this.setState('stWXvPS', cndVQTS);
let cndSTRN = !(cndVQTS);
this.setState('stTS2JT', cndSTRN);
if (cndVQTS) { 
let el1ZcBt = ev('img','NJWff'+ii_QtP,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${component.bug.title}`,`alt`,`${component.bug.title}`);
}else { 
let elZX_Vi = eo('button','JiNff'+ii_QtP,null,`class`,`btn btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cmpKqky = this._lc('cv75Y1CSO', {parent:component,parentTop:projectLayout,props:{project:component.project,comments:component.bug.comments,typeId:component.bug.id},attrs:{type:'bug'}});
let elKRZyj = eo('h3',null,null,`class`,`bold m-t-2 m-b-1`);
text(`Bug Status Change Log`);
ec('h3');
let elQ7Hl0 = eo('table',null,null,`class`,`table table-bordered`);
let elDjfjd = eo('thead');
let elufDnf = eo('tr');
let eliQuuq = eo('th');
text(`Status`);
ec('th');
let el1LPxJ = eo('th');
text(`Created By`);
ec('th');
let elaDRiT = eo('th');
text(`Created`);
ec('th');
let elSXm_z = eo('th');
text(`Extra`);
ec('th');
ec('tr');
ec('thead');
let elN0wAs = eo('tbody');
for (let i in component.bug.statuses) {
let status = component.bug.statuses[i]; 
 let iiBasN = '1pxcvNb' + i;
let elAGv4K = eo('tr','7Ns1f7y9vldc' + i+iiBasN);
let eleOV9l = eo('td','Mu1ff'+iiBasN);
text(status.status.capitalize());
ec('td');
let elkZcdn = eo('td','zmmff'+iiBasN);
text(status.createdBy.name);
ec('td');
let elD_pnt = eo('td','oOsff'+iiBasN);
let cmp6MOv = this._lc('cvM4BYRoG', {parent:component,parentTop:projectLayout,props:{timestamp:status.createdAt.timestamp},insideLoop:true,index:"" +iiBasN});
ec('td');
let elF9UQ5 = eo('td','v94ff'+iiBasN);
let cndLf0y = status.extra;
this.setState('stxl2Gb', cndLf0y);
if (cndLf0y) { 
let cnd3ZA2 = ['notBug', 'deferred', 'rejected', 'reopened'].includes(status.status);
this.setState('stDWDAg', cnd3ZA2);
let cndpvKB = status.status == 'Duplicated';
this.setState('stMJkiX', cndpvKB);
if (cnd3ZA2) { 
let el4Pn06 = eo('span','ag3ff'+iiBasN);
text(status.extra);
ec('span');
}else if (cndpvKB) { 
let el94Esh = eo('a','4Hsff'+iiBasN,null,`href`,`${URLS.project(component.project, 'bugs', {id: status.extra})}`);
text(`Duplicated Bug
                                    #${ status.extra }`);
ec('a');
}}ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
let elnbQ6z = eo('div',null,null,`class`,`col col-sm-3 order-1`);
let elhmJk3 = eo('div',null,null,`class`,`simple-card`);
let el3FPaR = eo('h2',null,null,`class`,`text-center`);
text(`Bug Information`);
ec('h2');
let cnd4beB = component.bugCanBeEdited;
this.setState('stnhtJm', cnd4beB);
if (cnd4beB) { 
let el7KHu7 = eo('div','Hvhf',null,`class`,`text-center`);
let elPnsBY = eo('button','Xsmf',null, eventListeners, {onclick:[function(e) {var $el = this;component.editBug = true}]},`type`,`button`,`class`,`btn btn-sm btn-success bold`);
text(`Edit`);
ec('button');
ec('div');
}let elkdMlz = eo('table',null,null,`class`,`table m-t-2`);
let el9kutk = eo('tbody');
let el9S7ZA = eo('tr');
let el5FC1d = eo('td');
text(`Status`);
ec('td');
let elYcR4t = eo('th',null,null,`class`,`bold status ${ component.bug.status }`);
text(component.bug.status);
ec('th');
ec('tr');
let cndkTMx = component.bug.priority;
this.setState('stzTO5L', cndkTMx);
if (cndkTMx) { 
let elNLPbG = eo('tr','LVBf');
let elQoIfw = eo('td','ZVKf');
text(`Priority`);
ec('td');
let elXf2_h = eo('th','Bx9f',null,`class`,`bold priority ${ component.bug.priority }`);
text(component.bug.priority);
ec('th');
ec('tr');
}let cndQgXu = component.bug.dueDate;
this.setState('stLOBI1', cndQgXu);
if (cndQgXu) { 
let eluZ82C = eo('tr','I3Zf');
let el1yuKO = eo('td','r70f');
text(`Due Date`);
ec('td');
let elfpGiX = eo('th','yTUf',null,`class`,`bold`);
text(trans(component.bug.dueDate));
ec('th');
ec('tr');
}let cndVuNG = component.bug.classification;
this.setState('stda9g8', cndVuNG);
if (cndVuNG) { 
let elT4alM = eo('tr','ZFxf');
let elooofG = eo('td','_Jbf');
text(`Classification`);
ec('td');
let elwdd3h = eo('th','eYzf',null,`class`,`bold`);
text(trans(component.bug.classification));
ec('th');
ec('tr');
}let cnd94Wr = component.bug.severity;
this.setState('sttc39o', cnd94Wr);
if (cnd94Wr) { 
let eltwmrr = eo('tr','90qf');
let elh0z_U = eo('td','nqMf');
text(`Severity`);
ec('td');
let ellAJTe = eo('th','2lEf',null,`class`,`bold`);
text(trans(component.bug.severity));
ec('th');
ec('tr');
}let cndWZkG = component.bug.reproducible;
this.setState('stG7Xdr', cndWZkG);
if (cndWZkG) { 
let elheGfb = eo('tr','nb5f');
let elVN265 = eo('td','oa_f');
text(`Reproducible`);
ec('td');
let el2MGHo = eo('th','SUzf',null,`class`,`bold`);
text(trans(component.bug.reproducible));
ec('th');
ec('tr');
}let cnd6Xiv = component.bug.testingUrl;
this.setState('st_PQeT', cnd6Xiv);
if (cnd6Xiv) { 
let elCqgoQ = eo('tr','sTcf');
let el6ovTN = eo('th','qRqf');
text(`Testing Url`);
ec('th');
let elTN5o_ = eo('td','wu4f');
let elcEI6k = eo('a','TFAf',null,`href`,`${component.bug.testingUrl}`,`class`,`btn btn-sm bold btn-orange`,`target`,`_blank`);
text(`Open Link`);
ec('a');
ec('td');
ec('tr');
}let cnd_R72 = component.bug.sprint;
this.setState('stvm6ro', cnd_R72);
if (cnd_R72) { 
let elS2dZC = eo('tr','iuAf');
let elU127b = eo('td','92df');
text(`Sprint`);
ec('td');
let el_THr5 = eo('th','E0mf');
let elZM9nE = eo('a','B2sf',null,`href`,`${URLS.project(component.project, 'sprints', component.bug.sprint)}`,`class`,`bold`);
text(component.bug.sprint.name);
ec('a');
ec('th');
ec('tr');
}let cndpdOW = Object.get(component.bug.testCase, 'id', '');
this.setState('stHYH8c', cndpdOW);
if (cndpdOW) { 
let elE_CVO = eo('tr','atYf');
let elAzCnu = eo('td','gKIf');
text(`Test Case`);
ec('td');
let elUtgPd = eo('th','hZxf');
let eldT44n = eo('a','pthf',null,`href`,`${URLS.project(component.project, 'test-cases', component.bug.testCase)}`,`class`,`bold`);
text(component.bug.testCase.title);
ec('a');
ec('th');
ec('tr');
}let cnd5SDS = component.bug.module;
this.setState('stZwRof', cnd5SDS);
if (cnd5SDS) { 
let el_5Jly = eo('tr','Utif');
let elIgGvW = eo('td','3Vmf');
text(`Module`);
ec('td');
let elgJQ6a = eo('th','V4Bf');
let elcDVqT = eo('a','eouf',null,`href`,`${URLS.project(component.project, 'modules', component.bug.module)}`,`class`,`bold`);
text(component.bug.module.name);
ec('a');
ec('th');
ec('tr');
}ec('tbody');
ec('table');
ec('div');
let cndyCD5 = ! Is.empty(component.bug.assignee);
this.setState('stgNXNO', cndyCD5);
if (cndyCD5) { 
let elIRSA0 = eo('div','0mIf',null,`class`,`simple-card mt-2`);
let el1YZ2z = eo('h2','pQpf',null,`class`,`text-center`);
text(`Assigned To`);
ec('h2');
for (let i in component.bug.assignee) {
let member = component.bug.assignee[i]; 
 let iiCcNW = 'fIiF87s' + i;
let eltXJmU = eo('div','2fvTLA3ShCWc' + i+iiCcNW,null,`class`,`m-t-1`);
let elqd0hP = ev('img','Julff'+iiCcNW,null, 'style', {width:'60px',height:'60px'},`src`,`${member.image}`,`class`,`rounded-circle`,`title`,`${member.name}`,`alt`,`${member.name}`);
let elyv_Oc = eo('strong','OPbff'+iiCcNW,null,`class`,`ml-3 teal-text`);
text(member.name);
ec('strong');
ec('div');
}
ec('div');
}let cndli0F = component.bugStatusCanBeChanged();
this.setState('stLI_FW', cndli0F);
if (cndli0F) { 
let ely9mFH = eo('div','OKNf',null,`class`,`simple-card mt-2`);
let el9r3wW = eo('h2','xhVf',null,`class`,`text-center m-b-1`);
text(`Bug Status`);
ec('h2');
let cndEK3P = component.bug.status == 'fixed' && Object.get(component.project.currentSprint, 'id', '') && Object.get(component.bug.sprint, 'id', '') && Object.get(component.bug.sprint, 'id', '') == Object.get(component.project.currentSprint, 'id', '');
this.setState('stYLgJf', cndEK3P);
let cndqMeM = !(cndEK3P);
this.setState('stZitEj', cndqMeM);
if (cndEK3P) { 
let el61ziR = eo('div','5B7f',null,`class`,`red-text text-center bold`);
text(`Can not retest bug in same project sprint.`);
ec('div');
}else { 
let cmp2oRP = this._lc('cCJ1Ovs0h', {parent:component,parentTop:projectLayout,props:{value:component.bug.status,items:component.getProperStatuses()},events:{onselect:function(e) {let $el = this; component.oldStatus = component.bug.status; component.confirmStatusChange = e.value != component.bug.status; component.newStatus = e.value}},attrs:{heading:'Change Bug Status'},state:'stZitEj'});
}ec('div');
}ec('div');
ec('div');
}}});
let cndjhwT = component.confirmStatusChange;
this.setState('st5cWD4', cndjhwT);
if (cndjhwT) { 
let cmpwqlk = this._lc('c4zZVz1_5', {parent:component,props:{withInput:component.isRequiringValue(),message:component.getConfirmingMessage(),required:component.isRequiringValue()},events:{onclose:function(e) {let $el = this; component.confirmStatusChange = null;},onconfirm:function(e) {let $el = this; component.updateStatus(e)}},state:'st5cWD4'});
}let cndsmXX = component.editBug;
this.setState('stjE7ov', cndsmXX);
if (cndsmXX) { 
let cmpaJcu = this._lc('cJZfWfw2M', {parent:component,props:{record:component.bug,project:component.project},events:{onclose:function(e) {let $el = this; component.editBug = null;},onsave:function(e) {let $el = this; component.prepareBug(e)}},state:'stjE7ov'});
}
                    this.isReadyToGo();
                }
        });