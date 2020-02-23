_Component({
                selector: 'project-bug-details-page',
                c: 'ProjectBugDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','bug','bugCanBeEdited','editBug','bugStatusCanBeChanged','getProperStatuses','oldStatus','confirmStatusChange','newStatus','isRequiringValue','getConfirmingMessage','updateStatus','prepareBug'],
                children: {cw0oUXGVd:'flk-time-ago',cajSWcEeH:'markdown',cPaeuNGbJ:'flk-audio-player',cRpYuotLA:'markdown',ccPjNByY_:'markdown',cHp3Ez6Ss:'comments',cmp351Jz2:'flk-time-ago',cimcDvOLF:'flk-dropdown-list',cgyutJU9O:'project-layout',cfHPyjvhx:'flk-alert',cGc_v5QGz:'bug-modal'},
                render: function (component) {
                    let cmpaLeC = this._lc('cgyutJU9O', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el8cMj9 = eo('div',null,null,`class`,`text-right m-b-1`);
let el75lNi = eo('a',null,null,`href`,`${URLS.project(component.project, 'bugs')}`,`class`,`btn bold btn-purple`);
let elt8Pfh = eo('i',null,null,`class`,`${fas('arrow-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to`);
let elHCSae = eo('span',null,null,`class`,`mx-2`);
let eldpgWi = ev('img',null,null,`src`,`${assets('images/bug.jpg')}`,`style`,`width: 20px; height: 30px; border-radius: 50%;`);
let el4dXwd = eo('span',null,null,`class`,`bold red-text`);
text(`s`);
ec('span');
ec('span');
text(`List`);
ec('a');
ec('div');
let cndK2t_ = component.bug;
this.setState('stoIw21', cndK2t_);
if (cndK2t_) { 
let elvOVtf = eo('div','t41f',null,`class`,`bug row`);
let elQTxFw = eo('div','yEif',null,`class`,`col col-sm-9 order-12 order-sm-1`);
let el6JbwE = eo('h1','etMf',null,`class`,`title`);
text('#' + component.bug.id + ' ' + component.bug.title);
ec('h1');
let elf_8sN = ev('img','qaIf',null,`src`,`${component.bug.createdBy.image}`,`class`,`user-image`,`title`,`${component.bug.createdBy.name}`,`alt`,`${component.bug.createdBy.name}`);
let elDqlLV = eo('div','xZIf',null,`class`,`d-inline-block`);
let elf0WT2 = eo('div','jMwf');
text(component.bug.createdBy.name);
ec('div');
let elO3H8p = eo('div','BESf');
let cmpEUtM = this._lc('cw0oUXGVd', {parent:component,parentTop:projectLayout,props:{timestamp:component.bug.createdAt.timestamp},attrs:{class:'ago'},state:'stoIw21'});
ec('div');
ec('div');
let elq_NsW = eo('div','arsf',null,`class`,`simple-card p-1 m-y-1`);
let el6dGQP = eo('div','WS2f',null,`class`,`result-heading`);
text(`Description`);
ec('div');
let cmpa9Ag = this._lc('cajSWcEeH', {parent:component,parentTop:projectLayout,props:{content:component.bug.description},state:'stoIw21'});
let cndEqoD = component.bug.record;
this.setState('stx0Lhb', cndEqoD);
if (cndEqoD) { 
let cmpVUtL = this._lc('cPaeuNGbJ', {parent:component,parentTop:projectLayout,props:{src:component.bug.record},attrs:{src:`${component.bug.record}`},state:'stx0Lhb'});
}ec('div');
let cndTlZw = component.bug.stepsToReproduce;
this.setState('stv31LD', cndTlZw);
if (cndTlZw) { 
let elz1G69 = eo('div','SPTf',null,`class`,`simple-card p-1 m-b-1`);
let elMk4Fa = eo('div','Rgpf',null,`class`,`result-heading`);
text(`Steps To Reproduce`);
ec('div');
let el_G66x = eo('ol','hlqf',null,`class`,`steps-list`);
for (let i in component.bug.stepsToReproduce.split('\n')) {
let step = component.bug.stepsToReproduce.split('\n')[i]; 
 let iiiG5O = 'vUEd2I4' + i;
let elXq_j4 = eo('li','dyafcJivwUte' + i+iiiG5O);
text(step);
ec('li');
}
ec('ol');
ec('div');
}let cndmp7j = component.bug.expectedBehavior;
this.setState('st_e7YS', cndmp7j);
if (cndmp7j) { 
let el3Jq1D = eo('div','mzXf',null,`class`,`simple-card p-1 m-b-1`);
let elJ74B1 = eo('div','ctaf',null,`class`,`result-heading`);
text(`Expected Result`);
ec('div');
let cmpvbD7 = this._lc('cRpYuotLA', {parent:component,parentTop:projectLayout,props:{content:component.bug.expectedBehavior},state:'st_e7YS'});
ec('div');
}let cndSEM4 = component.bug.actualResult;
this.setState('steGcA8', cndSEM4);
if (cndSEM4) { 
let elVba5G = eo('div','0ahf',null,`class`,`simple-card p-1 m-b-1`);
let elLfDsR = eo('div','A0zf',null,`class`,`result-heading`);
text(`Actual Result`);
ec('div');
let cmpg3bt = this._lc('ccPjNByY_', {parent:component,parentTop:projectLayout,props:{content:component.bug.actualResult},state:'steGcA8'});
ec('div');
}let cndo0E3 = ! Is.empty(component.bug.attachments);
this.setState('stoYM4y', cndo0E3);
if (cndo0E3) { 
let elnDH_M = eo('div','Ebyf',null,`class`,`m-b-2`);
let elNBHz4 = eo('h2','hKbf');
text(`Attachments (${ component.bug.attachments.length })`);
ec('h2');
for (let i in component.bug.attachments) {
let attachment = component.bug.attachments[i]; 
 let iiZPoY = 'JTc4TgX' + i;
let elIjMxi = eo('a','RcDQTgYIYt_B' + i+iiZPoY,null,`href`,`${attachment}`,`target`,`_blank`);
let cndqSBB = isImage(attachment);
this.setState('stABPvT', cndqSBB);
let cndmnIn = !(cndqSBB);
this.setState('stJ7Cch', cndmnIn);
if (cndqSBB) { 
let eleWJt9 = ev('img','kExff'+iiZPoY,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${component.bug.title}`,`alt`,`${component.bug.title}`);
}else { 
let elWJEUh = eo('button','hYbff'+iiZPoY,null,`class`,`btn btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cmpyscQ = this._lc('cHp3Ez6Ss', {parent:component,parentTop:projectLayout,props:{project:component.project,comments:component.bug.comments,typeId:component.bug.id},attrs:{type:'bug'}});
let elmlPke = eo('h3',null,null,`class`,`bold m-t-2 m-b-1`);
text(`Bug Status Change Log`);
ec('h3');
let elRwVvg = eo('table',null,null,`class`,`table table-bordered`);
let elvzvod = eo('thead');
let elqvNZ0 = eo('tr');
let elZTSzV = eo('th');
text(`Status`);
ec('th');
let elQka0R = eo('th');
text(`Created By`);
ec('th');
let elynzi8 = eo('th');
text(`Created`);
ec('th');
let elR9ciy = eo('th');
text(`Extra`);
ec('th');
ec('tr');
ec('thead');
let elTFvWx = eo('tbody');
for (let i in component.bug.statuses) {
let status = component.bug.statuses[i]; 
 let iiEKlU = '6BZRYmF' + i;
let elPlcpm = eo('tr','6Y0R2fG4bC6_' + i+iiEKlU);
let elLBiCU = eo('td','JZEff'+iiEKlU);
text(status.status.capitalize());
ec('td');
let elPupd9 = eo('td','hzzff'+iiEKlU);
text(status.createdBy.name);
ec('td');
let eltGTir = eo('td','GT1ff'+iiEKlU);
let cmpCsN3 = this._lc('cmp351Jz2', {parent:component,parentTop:projectLayout,props:{timestamp:status.createdAt.timestamp},insideLoop:true,index:"" +iiEKlU});
ec('td');
let elBbB6p = eo('td','wBzff'+iiEKlU);
let cnd20eT = status.extra;
this.setState('stLDfUY', cnd20eT);
if (cnd20eT) { 
let cndsHNQ = ['notBug', 'deferred', 'rejected', 'reopened'].includes(status.status);
this.setState('stSsg3q', cndsHNQ);
let cnds2rE = status.status == 'Duplicated';
this.setState('st7v6DJ', cnds2rE);
if (cndsHNQ) { 
let elEbH3N = eo('span','oNxff'+iiEKlU);
text(status.extra);
ec('span');
}else if (cnds2rE) { 
let elR6QOO = eo('a','Afjff'+iiEKlU,null,`href`,`${URLS.project(component.project, 'bugs', {id: status.extra})}`);
text(`Duplicated Bug
                                    #${ status.extra }`);
ec('a');
}}ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
let elR1JB4 = eo('div',null,null,`class`,`col col-sm-3 order-1`);
let el92jpq = eo('div',null,null,`class`,`simple-card`);
let ellJCP5 = eo('h2',null,null,`class`,`text-center`);
text(`Bug Information`);
ec('h2');
let cndrOdg = component.bugCanBeEdited;
this.setState('stLUh4T', cndrOdg);
if (cndrOdg) { 
let el_64iE = eo('div','b0Mf',null,`class`,`text-center`);
let elnO8pC = eo('button','aQvf',null, eventListeners, {onclick:[function(e) {var $el = this;component.editBug = true}]},`type`,`button`,`class`,`btn btn-sm btn-success bold`);
text(`Edit`);
ec('button');
ec('div');
}let el7M6Kw = eo('table',null,null,`class`,`table m-t-2`);
let elfCuJ0 = eo('tbody');
let eljZTdH = eo('tr');
let el0JWZo = eo('td');
text(`Status`);
ec('td');
let el1Ywvc = eo('th',null,null,`class`,`bold status ${ component.bug.status }`);
text(component.bug.status);
ec('th');
ec('tr');
let cndqxYH = component.bug.priority;
this.setState('stcThC0', cndqxYH);
if (cndqxYH) { 
let elUF8Id = eo('tr','zRCf');
let elfqVqt = eo('td','ol4f');
text(`Priority`);
ec('td');
let elhtRPN = eo('th','nnBf',null,`class`,`bold priority ${ component.bug.priority }`);
text(component.bug.priority);
ec('th');
ec('tr');
}let cndMdV3 = component.bug.dueDate;
this.setState('stsIcLw', cndMdV3);
if (cndMdV3) { 
let eldIEmh = eo('tr','QJ6f');
let elZvrfx = eo('td','YL9f');
text(`Due Date`);
ec('td');
let elpq0Nc = eo('th','lMYf',null,`class`,`bold`);
text(trans(component.bug.dueDate));
ec('th');
ec('tr');
}let cndnbfz = component.bug.classification;
this.setState('st38H6B', cndnbfz);
if (cndnbfz) { 
let elX5Mmk = eo('tr','ZMIf');
let elhGGjI = eo('td','9udf');
text(`Classification`);
ec('td');
let elGggTc = eo('th','xTlf',null,`class`,`bold`);
text(trans(component.bug.classification));
ec('th');
ec('tr');
}let cndtObX = component.bug.severity;
this.setState('stO95vz', cndtObX);
if (cndtObX) { 
let elyo2OE = eo('tr','aTlf');
let eld1uVt = eo('td','H7kf');
text(`Severity`);
ec('td');
let elpckQu = eo('th','0Hkf',null,`class`,`bold`);
text(trans(component.bug.severity));
ec('th');
ec('tr');
}let cnd4ZYe = component.bug.reproducible;
this.setState('stVKVgw', cnd4ZYe);
if (cnd4ZYe) { 
let elJjXUD = eo('tr','IvZf');
let elJ7aAs = eo('td','zcYf');
text(`Reproducible`);
ec('td');
let el6ZIoQ = eo('th','xgff',null,`class`,`bold`);
text(trans(component.bug.reproducible));
ec('th');
ec('tr');
}let cndP2nz = component.bug.testingUrl;
this.setState('st0bpRB', cndP2nz);
if (cndP2nz) { 
let elAuyi2 = eo('tr','l8qf');
let elfjq9w = eo('th','8TNf');
text(`Testing Url`);
ec('th');
let el94JpA = eo('td','Xm4f');
let elJ319E = eo('a','dXCf',null,`href`,`${component.bug.testingUrl}`,`class`,`btn btn-sm bold btn-orange`,`target`,`_blank`);
text(`Open Link`);
ec('a');
ec('td');
ec('tr');
}let cndysP2 = component.bug.sprint;
this.setState('st8tUey', cndysP2);
if (cndysP2) { 
let elKmWv5 = eo('tr','9Fof');
let elyZ7If = eo('td','DhPf');
text(`Sprint`);
ec('td');
let elXKdPY = eo('th','Xcbf');
let el0U3zH = eo('a','gb1f',null,`href`,`${URLS.project(component.project, 'sprints', component.bug.sprint)}`,`class`,`bold`);
text(component.bug.sprint.name);
ec('a');
ec('th');
ec('tr');
}let cnd0v9k = Object.get(component.bug.testCase, 'id', '');
this.setState('stAxYFK', cnd0v9k);
if (cnd0v9k) { 
let elbAnUS = eo('tr','eRaf');
let elLji3H = eo('td','TXhf');
text(`Test Case`);
ec('td');
let elMxBWw = eo('th','2ZQf');
let elgM6RM = eo('a','OkGf',null,`href`,`${URLS.project(component.project, 'test-cases', component.bug.testCase)}`,`class`,`bold`);
text(component.bug.testCase.title);
ec('a');
ec('th');
ec('tr');
}let cndBuBF = component.bug.module;
this.setState('stcOZv3', cndBuBF);
if (cndBuBF) { 
let elumCR1 = eo('tr','RMTf');
let elj1VNW = eo('td','Klyf');
text(`Module`);
ec('td');
let elL7tIB = eo('th','rSEf');
let elsa027 = eo('a','BvQf',null,`href`,`${URLS.project(component.project, 'modules', component.bug.module)}`,`class`,`bold`);
text(component.bug.module.name);
ec('a');
ec('th');
ec('tr');
}ec('tbody');
ec('table');
ec('div');
let cndW_wz = ! Is.empty(component.bug.assignee);
this.setState('stu8V2u', cndW_wz);
if (cndW_wz) { 
let elZ8rEU = eo('div','93xf',null,`class`,`simple-card mt-2`);
let elJGLb4 = eo('h2','9Nuf',null,`class`,`text-center`);
text(`Assigned To`);
ec('h2');
for (let i in component.bug.assignee) {
let member = component.bug.assignee[i]; 
 let iiP3C5 = 'PB8vQfn' + i;
let elCpVhL = eo('div','Gjb_IGQSGEV2' + i+iiP3C5,null,`class`,`m-t-1`);
let elufjVG = ev('img','jwnff'+iiP3C5,null, 'style', {width:'60px',height:'60px'},`src`,`${member.image}`,`class`,`rounded-circle`,`title`,`${member.name}`,`alt`,`${member.name}`);
let el99tUv = eo('strong','0G8ff'+iiP3C5,null,`class`,`ml-3 teal-text`);
text(member.name);
ec('strong');
ec('div');
}
ec('div');
}let cndiJvZ = component.bugStatusCanBeChanged();
this.setState('stEPJlY', cndiJvZ);
if (cndiJvZ) { 
let elX5LRu = eo('div','X_Pf',null,`class`,`simple-card mt-2`);
let el3sHJ0 = eo('h2','W4Gf',null,`class`,`text-center m-b-1`);
text(`Bug Status`);
ec('h2');
let cndp64m = component.bug.status == 'fixed' && Object.get(component.project.currentSprint, 'id', '') && Object.get(component.bug.sprint, 'id', '') && Object.get(component.bug.sprint, 'id', '') == Object.get(component.project.currentSprint, 'id', '');
this.setState('stOjXp1', cndp64m);
let cndEH0Z = !(cndp64m);
this.setState('st8t3Fo', cndEH0Z);
if (cndp64m) { 
let elXtPbO = eo('div','I9Of',null,`class`,`red-text text-center bold`);
text(`Can not retest bug in same project sprint.`);
ec('div');
}else { 
let cmpisU3 = this._lc('cimcDvOLF', {parent:component,parentTop:projectLayout,props:{value:component.bug.status,items:component.getProperStatuses()},events:{onselect:function(e) {let $el = this; component.oldStatus = component.bug.status; component.confirmStatusChange = e.value != component.bug.status; component.newStatus = e.value}},attrs:{heading:'Change Bug Status'},state:'st8t3Fo'});
}ec('div');
}ec('div');
ec('div');
}}});
let cndnmmf = component.confirmStatusChange;
this.setState('sty6zDh', cndnmmf);
if (cndnmmf) { 
let cmpR4ji = this._lc('cfHPyjvhx', {parent:component,props:{withInput:component.isRequiringValue(),message:component.getConfirmingMessage(),required:component.isRequiringValue()},events:{onclose:function(e) {let $el = this; component.confirmStatusChange = null;},onconfirm:function(e) {let $el = this; component.updateStatus(e)}},state:'sty6zDh'});
}let cnd24vS = component.editBug;
this.setState('stwia3f', cnd24vS);
if (cnd24vS) { 
let cmpOVAa = this._lc('cGc_v5QGz', {parent:component,props:{record:component.bug,project:component.project},events:{onclose:function(e) {let $el = this; component.editBug = null;},onsave:function(e) {let $el = this; component.prepareBug(e)}},state:'stwia3f'});
}
                    this.isReadyToGo();
                }
        });