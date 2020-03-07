_Component({
                selector: 'project-bug-details-page',
                c: 'ProjectBugDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','bug','bugCanBeEdited','editBug','bugStatusCanBeChanged','getProperStatuses','oldStatus','confirmStatusChange','newStatus','isRequiringValue','getConfirmingMessage','updateStatus','prepareBug'],
                children: {ckScPMNlC:'flk-time-ago',cWmDxPqDS:'markdown',c_1MyRGmV:'flk-audio-player',cdbsb5PiJ:'markdown',cbUmkIZeD:'markdown',cH65pGm3e:'comments',ctEG3leuw:'flk-time-ago',celuz3VjE:'flk-dropdown-list',cBtlVuG0e:'project-layout',cBax1T7qD:'flk-alert',chdM2Ud4t:'bug-modal'},
                render: function (component) {
                    let cmpEJ7V = this._lc('cBtlVuG0e', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elMVj3I = eo('div',null,null,`class`,`text-right m-b-1`);
let ell8aNi = eo('a',null,null,`href`,`${URLS.project(component.project, 'bugs')}`,`class`,`btn bold btn-purple`);
let elog3VG = eo('i',null,null,`class`,`${fas('arrow-left')} mr-2 icon`);
ec('i');
text(`Back to`);
let elf880J = eo('span',null,null,`class`,`mx-2`);
let el0Peks = ev('img',null,null,`src`,`${assets('images/bug.jpg')}`,`style`,`width: 20px; height: 30px; border-radius: 50%;`);
let elJFnq5 = eo('span',null,null,`class`,`bold red-text`);
text(`s`);
ec('span');
ec('span');
text(`List`);
ec('a');
ec('div');
let cndk8eV = component.bug;
this.setState('stqg9d5', cndk8eV);
if (cndk8eV) { 
let elai2_w = eo('div','YsHf',null,`class`,`bug row`);
let elzdGu5 = eo('div','pxGf',null,`class`,`col col-sm-9 order-12 order-sm-1`);
let el9gohX = eo('h1','qhXf',null,`class`,`title`);
text('#' + component.bug.id + ' ' + component.bug.title);
ec('h1');
let elxyhUg = ev('img','Cznf',null,`src`,`${component.bug.createdBy.image}`,`class`,`user-image`,`title`,`${component.bug.createdBy.name}`,`alt`,`${component.bug.createdBy.name}`);
let elXzIiZ = eo('div','n_yf',null,`class`,`d-inline-block`);
let el8ip4U = eo('div','m3wf');
text(component.bug.createdBy.name);
ec('div');
let elAnsOG = eo('div','s5wf');
let cmpMahL = this._lc('ckScPMNlC', {parent:component,parentTop:projectLayout,props:{timestamp:component.bug.createdAt.timestamp},attrs:{class:'ago'},state:'stqg9d5'});
ec('div');
ec('div');
let el3HB42 = eo('div','Y5uf',null,`class`,`simple-card p-1 m-y-1`);
let elum4CY = eo('div','3SUf',null,`class`,`result-heading`);
text(`Description`);
ec('div');
let cmpOGhc = this._lc('cWmDxPqDS', {parent:component,parentTop:projectLayout,props:{content:component.bug.description},state:'stqg9d5'});
let cndLPO6 = component.bug.record;
this.setState('stD2yMM', cndLPO6);
if (cndLPO6) { 
let cmpseU1 = this._lc('c_1MyRGmV', {parent:component,parentTop:projectLayout,props:{src:component.bug.record},attrs:{src:`${component.bug.record}`},state:'stD2yMM'});
}ec('div');
let cndHqor = component.bug.stepsToReproduce;
this.setState('st5v6ME', cndHqor);
if (cndHqor) { 
let elL8xRj = eo('div','jWBf',null,`class`,`simple-card p-1 m-b-1`);
let eljNq8o = eo('div','Xzaf',null,`class`,`result-heading`);
text(`Steps To Reproduce`);
ec('div');
let elZRiIz = eo('ol','o5Mf',null,`class`,`steps-list`);
for (let i in component.bug.stepsToReproduce.split('\n')) {
let step = component.bug.stepsToReproduce.split('\n')[i]; 
 let iiEi59 = 'L4WFwrP' + i;
let elYL5Fi = eo('li','djVR8p3qCKMB' + i+iiEi59);
text(step);
ec('li');
}
ec('ol');
ec('div');
}let cnd1IbQ = component.bug.expectedBehavior;
this.setState('stAAQ09', cnd1IbQ);
if (cnd1IbQ) { 
let elm3xyF = eo('div','H8Wf',null,`class`,`simple-card p-1 m-b-1`);
let ellrACX = eo('div','fOwf',null,`class`,`result-heading`);
text(`Expected Result`);
ec('div');
let cmppzlo = this._lc('cdbsb5PiJ', {parent:component,parentTop:projectLayout,props:{content:component.bug.expectedBehavior},state:'stAAQ09'});
ec('div');
}let cndDAmZ = component.bug.actualResult;
this.setState('strnt8b', cndDAmZ);
if (cndDAmZ) { 
let elGpqkD = eo('div','yJtf',null,`class`,`simple-card p-1 m-b-1`);
let elRTDyC = eo('div','_llf',null,`class`,`result-heading`);
text(`Actual Result`);
ec('div');
let cmpB3xt = this._lc('cbUmkIZeD', {parent:component,parentTop:projectLayout,props:{content:component.bug.actualResult},state:'strnt8b'});
ec('div');
}let cndg1sJ = ! Is.empty(component.bug.attachments);
this.setState('st2iXjO', cndg1sJ);
if (cndg1sJ) { 
let eldSPDc = eo('div','kQ6f',null,`class`,`m-b-2`);
let el0R4ND = eo('h2','b5sf');
text(`Attachments (${ component.bug.attachments.length })`);
ec('h2');
for (let i in component.bug.attachments) {
let attachment = component.bug.attachments[i]; 
 let iigUNv = 'a9s6s7t' + i;
let eloDUiy = eo('a','Gr8BB0yEDPVi' + i+iigUNv,null,`href`,`${attachment}`,`target`,`_blank`);
let cndYJGu = isImage(attachment);
this.setState('st5qEOV', cndYJGu);
let cnd8ygb = !(cndYJGu);
this.setState('stYY52a', cnd8ygb);
if (cndYJGu) { 
let el8XP_h = ev('img','B18ff'+iigUNv,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${component.bug.title}`,`alt`,`${component.bug.title}`);
}else { 
let elPanig = eo('button','mHxff'+iigUNv,null,`class`,`btn btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cmp65Hv = this._lc('cH65pGm3e', {parent:component,parentTop:projectLayout,props:{project:component.project,comments:component.bug.comments,typeId:component.bug.id},attrs:{type:'bug'}});
let elCgHF9 = eo('h3',null,null,`class`,`bold m-t-2 m-b-1`);
text(`Bug Status Change Log`);
ec('h3');
let ellCGiu = eo('table',null,null,`class`,`table table-bordered`);
let elQByEf = eo('thead');
let elHwCYx = eo('tr');
let elgd0ez = eo('th');
text(`Status`);
ec('th');
let elI0tkC = eo('th');
text(`Created By`);
ec('th');
let elQ95K7 = eo('th');
text(`Created`);
ec('th');
let elYYcBA = eo('th');
text(`Extra`);
ec('th');
ec('tr');
ec('thead');
let elcPO0o = eo('tbody');
for (let i in component.bug.statuses) {
let status = component.bug.statuses[i]; 
 let iiYOxj = 'BYNbjGM' + i;
let elT5I5u = eo('tr','10bgsmAMM4M8' + i+iiYOxj);
let elvgpzy = eo('td','teJff'+iiYOxj);
text(status.status.capitalize());
ec('td');
let elwjxAf = eo('td','1L5ff'+iiYOxj);
text(status.createdBy.name);
ec('td');
let elocFMP = eo('td','9irff'+iiYOxj);
let cmpawA1 = this._lc('ctEG3leuw', {parent:component,parentTop:projectLayout,props:{timestamp:status.createdAt.timestamp},insideLoop:true,index:"" +iiYOxj});
ec('td');
let elua2XX = eo('td','3wGff'+iiYOxj);
let cndJVLA = status.extra;
this.setState('st95JH7', cndJVLA);
if (cndJVLA) { 
let cndfbE5 = ['notBug', 'deferred', 'rejected', 'reopened'].includes(status.status);
this.setState('stMpjb4', cndfbE5);
let cndupmk = status.status == 'Duplicated';
this.setState('stwo0Np', cndupmk);
if (cndfbE5) { 
let elO5X_L = eo('span','CiLff'+iiYOxj);
text(status.extra);
ec('span');
}else if (cndupmk) { 
let eluWypn = eo('a','cv5ff'+iiYOxj,null,`href`,`${URLS.project(component.project, 'bugs', {id: status.extra})}`);
text(`Duplicated Bug
                                    #${ status.extra }`);
ec('a');
}}ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
let elIw34O = eo('div',null,null,`class`,`col col-sm-3 order-1`);
let elZ9DcY = eo('div',null,null,`class`,`simple-card`);
let elPRNB4 = eo('h2',null,null,`class`,`text-center`);
text(`Bug Information`);
ec('h2');
let cnd_EuY = component.bugCanBeEdited;
this.setState('st3giGc', cnd_EuY);
if (cnd_EuY) { 
let elHyvY7 = eo('div','s7lf',null,`class`,`text-center`);
let el65umA = eo('button','TNcf',null, eventListeners, {onclick:[function(e) {var $el = this;component.editBug = true}]},`type`,`button`,`class`,`btn btn-sm btn-success bold`);
text(`Edit`);
ec('button');
ec('div');
}let elsDUp_ = eo('table',null,null,`class`,`table m-t-2`);
let el5q6Ee = eo('tbody');
let elDeMMP = eo('tr');
let elsY3lA = eo('td');
text(`Status`);
ec('td');
let elcQeHl = eo('th',null,null,`class`,`bold status ${ component.bug.status }`);
text(component.bug.status);
ec('th');
ec('tr');
let cndw6xT = component.bug.priority;
this.setState('stHJiqo', cndw6xT);
if (cndw6xT) { 
let elSVqcv = eo('tr','v7if');
let elh8QAK = eo('td','6NRf');
text(`Priority`);
ec('td');
let elv_cEO = eo('th','P0yf',null,`class`,`bold priority ${ component.bug.priority }`);
text(component.bug.priority);
ec('th');
ec('tr');
}let cndKNKH = component.bug.dueDate;
this.setState('stLfL2G', cndKNKH);
if (cndKNKH) { 
let elQ8J0J = eo('tr','WpGf');
let elxof1L = eo('td','IdWf');
text(`Due Date`);
ec('td');
let elAvV84 = eo('th','NJyf',null,`class`,`bold`);
text(trans(component.bug.dueDate));
ec('th');
ec('tr');
}let cndMMhf = component.bug.classification;
this.setState('stFwbWW', cndMMhf);
if (cndMMhf) { 
let elpsOuS = eo('tr','fI8f');
let elJTB97 = eo('td','nHuf');
text(`Classification`);
ec('td');
let elsn6kw = eo('th','WURf',null,`class`,`bold`);
text(trans(component.bug.classification));
ec('th');
ec('tr');
}let cndzmjz = component.bug.severity;
this.setState('stSN76H', cndzmjz);
if (cndzmjz) { 
let elfVBNJ = eo('tr','RLff');
let el1s4J9 = eo('td','pVxf');
text(`Severity`);
ec('td');
let elPxgv6 = eo('th','lBWf',null,`class`,`bold`);
text(trans(component.bug.severity));
ec('th');
ec('tr');
}let cnd6O2f = component.bug.reproducible;
this.setState('sttO1za', cnd6O2f);
if (cnd6O2f) { 
let elWoWVL = eo('tr','0IVf');
let elPIIQe = eo('td','g0Lf');
text(`Reproducible`);
ec('td');
let elQmmMF = eo('th','kM6f',null,`class`,`bold`);
text(trans(component.bug.reproducible));
ec('th');
ec('tr');
}let cnddAKr = component.bug.testingUrl;
this.setState('sthFXTY', cnddAKr);
if (cnddAKr) { 
let elQCjeo = eo('tr','Uy_f');
let elKJYzv = eo('th','eZ1f');
text(`Testing Url`);
ec('th');
let eltWGrg = eo('td','7L1f');
let el_D7TM = eo('a','EC8f',null,`href`,`${component.bug.testingUrl}`,`class`,`btn btn-sm bold btn-orange`,`target`,`_blank`);
text(`Open Link`);
ec('a');
ec('td');
ec('tr');
}let cndYJbW = component.bug.sprint;
this.setState('stnxkhL', cndYJbW);
if (cndYJbW) { 
let elc3NUT = eo('tr','Kb5f');
let eltAspJ = eo('td','cQVf');
text(`Sprint`);
ec('td');
let elvDKv0 = eo('th','IFtf');
let elcFf9C = eo('a','QG_f',null,`href`,`${URLS.project(component.project, 'sprints', component.bug.sprint)}`,`class`,`bold`);
text(component.bug.sprint.name);
ec('a');
ec('th');
ec('tr');
}let cndrcca = Object.get(component.bug.testCase, 'id', '');
this.setState('ste5vt4', cndrcca);
if (cndrcca) { 
let elkrZkU = eo('tr','K2Df');
let elX3VzM = eo('td','kX5f');
text(`Test Case`);
ec('td');
let elf7HTF = eo('th','F60f');
let elyZXWk = eo('a','mwyf',null,`href`,`${URLS.project(component.project, 'test-cases', component.bug.testCase)}`,`class`,`bold`);
text(component.bug.testCase.title);
ec('a');
ec('th');
ec('tr');
}let cndbYKg = component.bug.module;
this.setState('styEdlu', cndbYKg);
if (cndbYKg) { 
let elazbVp = eo('tr','gvbf');
let ellvST4 = eo('td','no1f');
text(`Module`);
ec('td');
let elufTVL = eo('th','kR9f');
let elVysIu = eo('a','EErf',null,`href`,`${URLS.project(component.project, 'modules', component.bug.module)}`,`class`,`bold`);
text(component.bug.module.name);
ec('a');
ec('th');
ec('tr');
}ec('tbody');
ec('table');
ec('div');
let cnd0P9e = ! Is.empty(component.bug.assignee);
this.setState('stP2W1O', cnd0P9e);
if (cnd0P9e) { 
let elRGQFy = eo('div','7J4f',null,`class`,`simple-card mt-2`);
let elSl7eI = eo('h2','iJsf',null,`class`,`text-center`);
text(`Assigned To`);
ec('h2');
for (let i in component.bug.assignee) {
let member = component.bug.assignee[i]; 
 let iiCBis = 'jTRpFfq' + i;
let el_GcyS = eo('div','AMGH6E3F1IX4' + i+iiCBis,null,`class`,`m-t-1`);
let elKgvsw = ev('img','oneff'+iiCBis,null, 'style', {width:'60px',height:'60px'},`src`,`${member.image}`,`class`,`rounded-circle`,`title`,`${member.name}`,`alt`,`${member.name}`);
let elA2GhO = eo('strong','0N1ff'+iiCBis,null,`class`,`ml-3 teal-text`);
text(member.name);
ec('strong');
ec('div');
}
ec('div');
}let cnddwop = component.bugStatusCanBeChanged();
this.setState('st1tTf7', cnddwop);
if (cnddwop) { 
let elhDMdZ = eo('div','991f',null,`class`,`simple-card mt-2`);
let elolJH5 = eo('h2','2Eaf',null,`class`,`text-center m-b-1`);
text(`Bug Status`);
ec('h2');
let cndfnId = component.bug.status == 'fixed' && Object.get(component.project.currentSprint, 'id', '') && Object.get(component.bug.sprint, 'id', '') && Object.get(component.bug.sprint, 'id', '') == Object.get(component.project.currentSprint, 'id', '');
this.setState('stycIlL', cndfnId);
let cndZXCF = !(cndfnId);
this.setState('stakBku', cndZXCF);
if (cndfnId) { 
let el65hUB = eo('div','QMtf',null,`class`,`red-text text-center bold`);
text(`Can not retest bug in same project sprint.`);
ec('div');
}else { 
let cmpGjfH = this._lc('celuz3VjE', {parent:component,parentTop:projectLayout,props:{value:component.bug.status,items:component.getProperStatuses()},events:{onselect:function(e) {let $el = this; component.oldStatus = component.bug.status; component.confirmStatusChange = e.value != component.bug.status; component.newStatus = e.value}},attrs:{heading:'Change Bug Status'},state:'stakBku'});
}ec('div');
}ec('div');
ec('div');
}}});
let cnd84JE = component.confirmStatusChange;
this.setState('st9pFRg', cnd84JE);
if (cnd84JE) { 
let cmpVeYE = this._lc('cBax1T7qD', {parent:component,props:{withInput:component.isRequiringValue(),message:component.getConfirmingMessage(),required:component.isRequiringValue()},events:{onclose:function(e) {let $el = this; component.confirmStatusChange = null;},onconfirm:function(e) {let $el = this; component.updateStatus(e)}},state:'st9pFRg'});
}let cndyXEH = component.editBug;
this.setState('stTLvgW', cndyXEH);
if (cndyXEH) { 
let cmpAYt8 = this._lc('chdM2Ud4t', {parent:component,props:{record:component.bug,project:component.project},events:{onclose:function(e) {let $el = this; component.editBug = null;},onsave:function(e) {let $el = this; component.prepareBug(e)}},state:'stTLvgW'});
}
                    this.isReadyToGo();
                }
        });