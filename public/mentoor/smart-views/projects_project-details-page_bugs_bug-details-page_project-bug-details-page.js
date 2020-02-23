_Component({
                selector: 'project-bug-details-page',
                c: 'ProjectBugDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','bug','bugCanBeEdited','editBug','bugStatusCanBeChanged','getProperStatuses','oldStatus','confirmStatusChange','newStatus','isRequiringValue','getConfirmingMessage','updateStatus','prepareBug'],
                children: {caZHS2KIQ:'flk-time-ago',cfHDgpEXo:'markdown',cytB8u57f:'flk-audio-player',cucwrtV6z:'markdown',cCiHBHBSJ:'markdown',cVd4apWoM:'comments',cjF9PMPWR:'flk-time-ago',cVggOUD4S:'flk-dropdown-list',cwuwdnD13:'project-layout',cqtAt__jt:'flk-alert',cT5DW3onk:'bug-modal'},
                render: function (component) {
                    let cmpbeud = this._lc('cwuwdnD13', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elrN97i = eo('div',null,null,`class`,`text-right m-b-1`);
let elY8eUi = eo('a',null,null,`href`,`${URLS.project(component.project, 'bugs')}`,`class`,`btn bold btn-purple`);
let elHOZD7 = eo('i',null,null,`class`,`${fas('arrow-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to`);
let elDSGUK = eo('span',null,null,`class`,`mx-2`);
let elzGPm1 = ev('img',null,null,`src`,`${assets('images/bug.jpg')}`,`style`,`width: 20px; height: 30px; border-radius: 50%;`);
let elsHtjS = eo('span',null,null,`class`,`bold red-text`);
text(`s`);
ec('span');
ec('span');
text(`List`);
ec('a');
ec('div');
let cndOxnj = component.bug;
this.setState('stJCWNP', cndOxnj);
if (cndOxnj) { 
let el1SjrH = eo('div','5bZf',null,`class`,`bug row`);
let elMSvPW = eo('div','Csff',null,`class`,`col col-sm-9 order-12 order-sm-1`);
let elhY7Tj = eo('h1','R7Nf',null,`class`,`title`);
text('#' + component.bug.id + ' ' + component.bug.title);
ec('h1');
let elMZxFY = ev('img','MYLf',null,`src`,`${component.bug.createdBy.image}`,`class`,`user-image`,`title`,`${component.bug.createdBy.name}`,`alt`,`${component.bug.createdBy.name}`);
let eldhv1j = eo('div','spqf',null,`class`,`d-inline-block`);
let elC4v2Q = eo('div','Yptf');
text(component.bug.createdBy.name);
ec('div');
let elEuGAE = eo('div','EyMf');
let cmpp5Zo = this._lc('caZHS2KIQ', {parent:component,parentTop:projectLayout,props:{timestamp:component.bug.createdAt.timestamp},attrs:{class:'ago'},state:'stJCWNP'});
ec('div');
ec('div');
let el6jpaF = eo('div','GCmf',null,`class`,`simple-card p-1 m-y-1`);
let eluS410 = eo('div','slsf',null,`class`,`result-heading`);
text(`Description`);
ec('div');
let cmp_P7e = this._lc('cfHDgpEXo', {parent:component,parentTop:projectLayout,props:{content:component.bug.description},state:'stJCWNP'});
let cndRjCt = component.bug.record;
this.setState('stFKteB', cndRjCt);
if (cndRjCt) { 
let cmpZYR9 = this._lc('cytB8u57f', {parent:component,parentTop:projectLayout,props:{src:component.bug.record},attrs:{src:`${component.bug.record}`},state:'stFKteB'});
}ec('div');
let cndRSLC = component.bug.stepsToReproduce;
this.setState('stw77Tr', cndRSLC);
if (cndRSLC) { 
let elz0vgF = eo('div','Oxcf',null,`class`,`simple-card p-1 m-b-1`);
let elWDbiT = eo('div','A3Jf',null,`class`,`result-heading`);
text(`Steps To Reproduce`);
ec('div');
let elRBr5V = eo('ol','6uXf',null,`class`,`steps-list`);
for (let i in component.bug.stepsToReproduce.split('\n')) {
let step = component.bug.stepsToReproduce.split('\n')[i]; 
 let iiY4gP = '82Z8DSi' + i;
let el7B8KN = eo('li','JFc818NwVC_K' + i+iiY4gP);
text(step);
ec('li');
}
ec('ol');
ec('div');
}let cndjMvn = component.bug.expectedBehavior;
this.setState('stcXKCH', cndjMvn);
if (cndjMvn) { 
let el_yplS = eo('div','prsf',null,`class`,`simple-card p-1 m-b-1`);
let elwQJ5a = eo('div','WZxf',null,`class`,`result-heading`);
text(`Expected Result`);
ec('div');
let cmpzG7A = this._lc('cucwrtV6z', {parent:component,parentTop:projectLayout,props:{content:component.bug.expectedBehavior},state:'stcXKCH'});
ec('div');
}let cnd6323 = component.bug.actualResult;
this.setState('stMby5h', cnd6323);
if (cnd6323) { 
let elqpSbv = eo('div','il5f',null,`class`,`simple-card p-1 m-b-1`);
let el_YOdw = eo('div','tj5f',null,`class`,`result-heading`);
text(`Actual Result`);
ec('div');
let cmpqa8s = this._lc('cCiHBHBSJ', {parent:component,parentTop:projectLayout,props:{content:component.bug.actualResult},state:'stMby5h'});
ec('div');
}let cndKG7U = ! Is.empty(component.bug.attachments);
this.setState('stfSjBR', cndKG7U);
if (cndKG7U) { 
let elIA0aK = eo('div','Xmjf',null,`class`,`m-b-2`);
let elf1ooq = eo('h2','VgYf');
text(`Attachments (${ component.bug.attachments.length })`);
ec('h2');
for (let i in component.bug.attachments) {
let attachment = component.bug.attachments[i]; 
 let iisqF0 = 'n1ddRwe' + i;
let elJqY3N = eo('a','1SrMJ7SLLqXH' + i+iisqF0,null,`href`,`${attachment}`,`target`,`_blank`);
let cndTJuW = isImage(attachment);
this.setState('st8_Am9', cndTJuW);
let cnd_DhJ = !(cndTJuW);
this.setState('st9x01q', cnd_DhJ);
if (cndTJuW) { 
let elYFuLl = ev('img','k2iff'+iisqF0,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${component.bug.title}`,`alt`,`${component.bug.title}`);
}else { 
let el8yhFg = eo('button','qcqff'+iisqF0,null,`class`,`btn btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cmpVsEU = this._lc('cVd4apWoM', {parent:component,parentTop:projectLayout,props:{project:component.project,comments:component.bug.comments,typeId:component.bug.id},attrs:{type:'bug'}});
let elPVIgi = eo('h3',null,null,`class`,`bold m-t-2 m-b-1`);
text(`Bug Status Change Log`);
ec('h3');
let elm6xdx = eo('table',null,null,`class`,`table table-bordered`);
let elYRnRW = eo('thead');
let elInueJ = eo('tr');
let elfYbSe = eo('th');
text(`Status`);
ec('th');
let elveTET = eo('th');
text(`Created By`);
ec('th');
let elzrhbz = eo('th');
text(`Created`);
ec('th');
let elUlxeL = eo('th');
text(`Extra`);
ec('th');
ec('tr');
ec('thead');
let eleFUq5 = eo('tbody');
for (let i in component.bug.statuses) {
let status = component.bug.statuses[i]; 
 let iiR2MH = 'etQtfuE' + i;
let eldLaWC = eo('tr','hyf0cHn_iBy5' + i+iiR2MH);
let elAOvse = eo('td','wTNff'+iiR2MH);
text(status.status.capitalize());
ec('td');
let elNJssS = eo('td','Ijoff'+iiR2MH);
text(status.createdBy.name);
ec('td');
let elgxP9T = eo('td','eKtff'+iiR2MH);
let cmpt5us = this._lc('cjF9PMPWR', {parent:component,parentTop:projectLayout,props:{timestamp:status.createdAt.timestamp},insideLoop:true,index:"" +iiR2MH});
ec('td');
let elSO5MK = eo('td','gUPff'+iiR2MH);
let cndvuH4 = status.extra;
this.setState('sticHng', cndvuH4);
if (cndvuH4) { 
let cndoQPO = ['notBug', 'deferred', 'rejected', 'reopened'].includes(status.status);
this.setState('stB5o19', cndoQPO);
let cndF32P = status.status == 'Duplicated';
this.setState('stQCHLQ', cndF32P);
if (cndoQPO) { 
let elTk6AK = eo('span','1eAff'+iiR2MH);
text(status.extra);
ec('span');
}else if (cndF32P) { 
let eldAmPL = eo('a','ipgff'+iiR2MH,null,`href`,`${URLS.project(component.project, 'bugs', {id: status.extra})}`);
text(`Duplicated Bug
                                    #${ status.extra }`);
ec('a');
}}ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
let el5P7yu = eo('div',null,null,`class`,`col col-sm-3 order-1`);
let el8YdAu = eo('div',null,null,`class`,`simple-card`);
let elOvpRZ = eo('h2',null,null,`class`,`text-center`);
text(`Bug Information`);
ec('h2');
let cndBH6r = component.bugCanBeEdited;
this.setState('stRAfKl', cndBH6r);
if (cndBH6r) { 
let elI5CiF = eo('div','WYJf',null,`class`,`text-center`);
let elkwNH3 = eo('button','J2If',null, eventListeners, {onclick:[function(e) {var $el = this;component.editBug = true}]},`type`,`button`,`class`,`btn btn-sm btn-success bold`);
text(`Edit`);
ec('button');
ec('div');
}let elsd1i9 = eo('table',null,null,`class`,`table m-t-2`);
let elDBEdR = eo('tbody');
let elAAe46 = eo('tr');
let eloeioV = eo('td');
text(`Status`);
ec('td');
let elli0IS = eo('th',null,null,`class`,`bold status ${ component.bug.status }`);
text(component.bug.status);
ec('th');
ec('tr');
let cnd8QB1 = component.bug.priority;
this.setState('stelydl', cnd8QB1);
if (cnd8QB1) { 
let elNczCz = eo('tr','qtYf');
let eltcjPN = eo('td','qDPf');
text(`Priority`);
ec('td');
let elHId8Z = eo('th','8Wff',null,`class`,`bold priority ${ component.bug.priority }`);
text(component.bug.priority);
ec('th');
ec('tr');
}let cndJDFL = component.bug.dueDate;
this.setState('stU5bv1', cndJDFL);
if (cndJDFL) { 
let elCnaSt = eo('tr','oGhf');
let el2ZbR3 = eo('td','yeQf');
text(`Due Date`);
ec('td');
let elBIpBv = eo('th','dnFf',null,`class`,`bold`);
text(trans(component.bug.dueDate));
ec('th');
ec('tr');
}let cndHPDt = component.bug.classification;
this.setState('sttbJL7', cndHPDt);
if (cndHPDt) { 
let elJoIAW = eo('tr','SeGf');
let eloYfy9 = eo('td','c7Ff');
text(`Classification`);
ec('td');
let elcntxv = eo('th','vG6f',null,`class`,`bold`);
text(trans(component.bug.classification));
ec('th');
ec('tr');
}let cndGkEn = component.bug.severity;
this.setState('stgdG5x', cndGkEn);
if (cndGkEn) { 
let elKSiKA = eo('tr','wuyf');
let elFM6yb = eo('td','JDtf');
text(`Severity`);
ec('td');
let el0XoQK = eo('th','8A1f',null,`class`,`bold`);
text(trans(component.bug.severity));
ec('th');
ec('tr');
}let cndOQP2 = component.bug.reproducible;
this.setState('stLFAwF', cndOQP2);
if (cndOQP2) { 
let elG9Sol = eo('tr','AXlf');
let elpa4Po = eo('td','iF8f');
text(`Reproducible`);
ec('td');
let eljbai2 = eo('th','RUzf',null,`class`,`bold`);
text(trans(component.bug.reproducible));
ec('th');
ec('tr');
}let cndVKXs = component.bug.testingUrl;
this.setState('stTbuKy', cndVKXs);
if (cndVKXs) { 
let el7Ca7b = eo('tr','HEGf');
let ellYSj0 = eo('th','7NPf');
text(`Testing Url`);
ec('th');
let elsTxxU = eo('td','C51f');
let elp_vA9 = eo('a','akrf',null,`href`,`${component.bug.testingUrl}`,`class`,`btn btn-sm bold btn-orange`,`target`,`_blank`);
text(`Open Link`);
ec('a');
ec('td');
ec('tr');
}let cndDsTq = component.bug.sprint;
this.setState('st5kkdU', cndDsTq);
if (cndDsTq) { 
let elOaVW6 = eo('tr','T4Nf');
let elriuNA = eo('td','RINf');
text(`Sprint`);
ec('td');
let elS5J_N = eo('th','j6bf');
let ellf599 = eo('a','sjPf',null,`href`,`${URLS.project(component.project, 'sprints', component.bug.sprint)}`,`class`,`bold`);
text(component.bug.sprint.name);
ec('a');
ec('th');
ec('tr');
}let cndrjQA = Object.get(component.bug.testCase, 'id', '');
this.setState('sty4swj', cndrjQA);
if (cndrjQA) { 
let elbX9St = eo('tr','kvuf');
let elZ3zdd = eo('td','EuRf');
text(`Test Case`);
ec('td');
let elFcT5j = eo('th','hryf');
let elns1rm = eo('a','lGmf',null,`href`,`${URLS.project(component.project, 'test-cases', component.bug.testCase)}`,`class`,`bold`);
text(component.bug.testCase.title);
ec('a');
ec('th');
ec('tr');
}let cndxNj0 = component.bug.module;
this.setState('stCCAlb', cndxNj0);
if (cndxNj0) { 
let el7Lplo = eo('tr','jeJf');
let eln6jIS = eo('td','6Nef');
text(`Module`);
ec('td');
let elHkMvm = eo('th','VRZf');
let el8fZ9B = eo('a','Vrmf',null,`href`,`${URLS.project(component.project, 'modules', component.bug.module)}`,`class`,`bold`);
text(component.bug.module.name);
ec('a');
ec('th');
ec('tr');
}ec('tbody');
ec('table');
ec('div');
let cndHH7U = ! Is.empty(component.bug.assignee);
this.setState('sticPcv', cndHH7U);
if (cndHH7U) { 
let el1GBUo = eo('div','2TSf',null,`class`,`simple-card mt-2`);
let elru4z0 = eo('h2','x_8f',null,`class`,`text-center`);
text(`Assigned To`);
ec('h2');
for (let i in component.bug.assignee) {
let member = component.bug.assignee[i]; 
 let iiS_LN = 'SDZKsKl' + i;
let elEjaw2 = eo('div','GrAJFLRnRaIv' + i+iiS_LN,null,`class`,`m-t-1`);
let eltvSby = ev('img','BmKff'+iiS_LN,null, 'style', {width:'60px',height:'60px'},`src`,`${member.image}`,`class`,`rounded-circle`,`title`,`${member.name}`,`alt`,`${member.name}`);
let elYReSw = eo('strong','bdUff'+iiS_LN,null,`class`,`ml-3 teal-text`);
text(member.name);
ec('strong');
ec('div');
}
ec('div');
}let cndvCWl = component.bugStatusCanBeChanged();
this.setState('stbRLUF', cndvCWl);
if (cndvCWl) { 
let elPKfq5 = eo('div','SNJf',null,`class`,`simple-card mt-2`);
let el9lyZp = eo('h2','B2Qf',null,`class`,`text-center m-b-1`);
text(`Bug Status`);
ec('h2');
let cndZK0y = component.bug.status == 'fixed' && Object.get(component.project.currentSprint, 'id', '') && Object.get(component.bug.sprint, 'id', '') && Object.get(component.bug.sprint, 'id', '') == Object.get(component.project.currentSprint, 'id', '');
this.setState('stTsJz3', cndZK0y);
let cndtli9 = !(cndZK0y);
this.setState('stKYTzd', cndtli9);
if (cndZK0y) { 
let el4NkAy = eo('div','XOGf',null,`class`,`red-text text-center bold`);
text(`Can not retest bug in same project sprint.`);
ec('div');
}else { 
let cmpB8B1 = this._lc('cVggOUD4S', {parent:component,parentTop:projectLayout,props:{value:component.bug.status,items:component.getProperStatuses()},events:{onselect:function(e) {let $el = this; component.oldStatus = component.bug.status; component.confirmStatusChange = e.value != component.bug.status; component.newStatus = e.value}},attrs:{heading:'Change Bug Status'},state:'stKYTzd'});
}ec('div');
}ec('div');
ec('div');
}}});
let cndra7j = component.confirmStatusChange;
this.setState('st2s6Gd', cndra7j);
if (cndra7j) { 
let cmp5HUX = this._lc('cqtAt__jt', {parent:component,props:{withInput:component.isRequiringValue(),message:component.getConfirmingMessage(),required:component.isRequiringValue()},events:{onclose:function(e) {let $el = this; component.confirmStatusChange = null;},onconfirm:function(e) {let $el = this; component.updateStatus(e)}},state:'st2s6Gd'});
}let cndjs6i = component.editBug;
this.setState('stzjOI7', cndjs6i);
if (cndjs6i) { 
let cmpuVna = this._lc('cT5DW3onk', {parent:component,props:{record:component.bug,project:component.project},events:{onclose:function(e) {let $el = this; component.editBug = null;},onsave:function(e) {let $el = this; component.prepareBug(e)}},state:'stzjOI7'});
}
                    this.isReadyToGo();
                }
        });