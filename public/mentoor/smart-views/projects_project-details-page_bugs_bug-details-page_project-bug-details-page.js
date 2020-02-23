_Component({
                selector: 'project-bug-details-page',
                c: 'ProjectBugDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','bug','bugCanBeEdited','editBug','bugStatusCanBeChanged','getProperStatuses','oldStatus','confirmStatusChange','newStatus','isRequiringValue','getConfirmingMessage','updateStatus','prepareBug'],
                children: {cuh8PCL20:'flk-time-ago',csXSHJ72A:'markdown',cDTkDA9gE:'flk-audio-player',c_XQDhgP4:'markdown',cJNowiNV_:'markdown',cNhzgHF4r:'comments',cDR9aw5qb:'flk-time-ago',cOJx6Kuq3:'flk-dropdown-list',cU_qXqmMS:'project-layout',cZCrwp_2n:'flk-alert',cPMjbrK_l:'bug-modal'},
                render: function (component) {
                    let cmpuRhQ = this._lc('cU_qXqmMS', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el0Haqd = eo('div',null,null,`class`,`text-right m-b-1`);
let elrufZ5 = eo('a',null,null,`href`,`${URLS.project(component.project, 'bugs')}`,`class`,`btn bold btn-purple`);
let ellVaH_ = eo('i',null,null,`class`,`${fas('arrow-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to`);
let elV39Bx = eo('span',null,null,`class`,`mx-2`);
let ela0DsF = ev('img',null,null,`src`,`${assets('images/bug.jpg')}`,`style`,`width: 20px; height: 30px; border-radius: 50%;`);
let el2sklQ = eo('span',null,null,`class`,`bold red-text`);
text(`s`);
ec('span');
ec('span');
text(`List`);
ec('a');
ec('div');
let cndici4 = component.bug;
this.setState('stMi2Yj', cndici4);
if (cndici4) { 
let elEOx17 = eo('div','xttf',null,`class`,`bug row`);
let elPFSOh = eo('div','Ft1f',null,`class`,`col col-sm-9 order-12 order-sm-1`);
let elpPUvO = eo('h1','quhf',null,`class`,`title`);
text('#' + component.bug.id + ' ' + component.bug.title);
ec('h1');
let elVicBt = ev('img','ESPf',null,`src`,`${component.bug.createdBy.image}`,`class`,`user-image`,`title`,`${component.bug.createdBy.name}`,`alt`,`${component.bug.createdBy.name}`);
let el_M7y7 = eo('div','DQof',null,`class`,`d-inline-block`);
let elEq8JW = eo('div','Gwdf');
text(component.bug.createdBy.name);
ec('div');
let elxtIlG = eo('div','rMnf');
let cmpLKKk = this._lc('cuh8PCL20', {parent:component,parentTop:projectLayout,props:{timestamp:component.bug.createdAt.timestamp},attrs:{class:'ago'},state:'stMi2Yj'});
ec('div');
ec('div');
let el3nAGg = eo('div','apvf',null,`class`,`simple-card p-1 m-y-1`);
let elAVql6 = eo('div','OpSf',null,`class`,`result-heading`);
text(`Description`);
ec('div');
let cmpAqe7 = this._lc('csXSHJ72A', {parent:component,parentTop:projectLayout,props:{content:component.bug.description},state:'stMi2Yj'});
let cndztQW = component.bug.record;
this.setState('stgdqIT', cndztQW);
if (cndztQW) { 
let cmp0PfY = this._lc('cDTkDA9gE', {parent:component,parentTop:projectLayout,props:{src:component.bug.record},attrs:{src:`${component.bug.record}`},state:'stgdqIT'});
}ec('div');
let cndhPgW = component.bug.stepsToReproduce;
this.setState('stnXdwo', cndhPgW);
if (cndhPgW) { 
let el_5V9C = eo('div','PiKf',null,`class`,`simple-card p-1 m-b-1`);
let el5hCED = eo('div','oLof',null,`class`,`result-heading`);
text(`Steps To Reproduce`);
ec('div');
let elxL0JZ = eo('ol','3gRf',null,`class`,`steps-list`);
for (let i in component.bug.stepsToReproduce.split('\n')) {
let step = component.bug.stepsToReproduce.split('\n')[i]; 
 let iisTcw = 'dfg1qEu' + i;
let elBQ9Bf = eo('li','0pOm6E47mBGY' + i+iisTcw);
text(step);
ec('li');
}
ec('ol');
ec('div');
}let cndFsAa = component.bug.expectedBehavior;
this.setState('stt4KIN', cndFsAa);
if (cndFsAa) { 
let el3gCZm = eo('div','v5Wf',null,`class`,`simple-card p-1 m-b-1`);
let elGC_ZH = eo('div','nr2f',null,`class`,`result-heading`);
text(`Expected Result`);
ec('div');
let cmp1JKE = this._lc('c_XQDhgP4', {parent:component,parentTop:projectLayout,props:{content:component.bug.expectedBehavior},state:'stt4KIN'});
ec('div');
}let cndpeQ9 = component.bug.actualResult;
this.setState('sth6LgU', cndpeQ9);
if (cndpeQ9) { 
let elXCyMA = eo('div','HyOf',null,`class`,`simple-card p-1 m-b-1`);
let elWB9wM = eo('div','vetf',null,`class`,`result-heading`);
text(`Actual Result`);
ec('div');
let cmpPkAn = this._lc('cJNowiNV_', {parent:component,parentTop:projectLayout,props:{content:component.bug.actualResult},state:'sth6LgU'});
ec('div');
}let cndcewG = ! Is.empty(component.bug.attachments);
this.setState('stYrOZx', cndcewG);
if (cndcewG) { 
let ellMAQF = eo('div','Dn2f',null,`class`,`m-b-2`);
let elMwvOS = eo('h2','1nBf');
text(`Attachments (${ component.bug.attachments.length })`);
ec('h2');
for (let i in component.bug.attachments) {
let attachment = component.bug.attachments[i]; 
 let iiQgdw = 'CL7368_' + i;
let elDPRYQ = eo('a','pdtECEu3Mu7e' + i+iiQgdw,null,`href`,`${attachment}`,`target`,`_blank`);
let cndI9bb = isImage(attachment);
this.setState('stv1Hq4', cndI9bb);
let cndP8OG = !(cndI9bb);
this.setState('stwBbi3', cndP8OG);
if (cndI9bb) { 
let el4Ttkk = ev('img','yqrff'+iiQgdw,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${component.bug.title}`,`alt`,`${component.bug.title}`);
}else { 
let elth3fh = eo('button','eQfff'+iiQgdw,null,`class`,`btn btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cmp1kZ6 = this._lc('cNhzgHF4r', {parent:component,parentTop:projectLayout,props:{project:component.project,comments:component.bug.comments,typeId:component.bug.id},attrs:{type:'bug'}});
let elMvseF = eo('h3',null,null,`class`,`bold m-t-2 m-b-1`);
text(`Bug Status Change Log`);
ec('h3');
let elWGZJq = eo('table',null,null,`class`,`table table-bordered`);
let elLoCWS = eo('thead');
let el4kZ9M = eo('tr');
let elKhVHp = eo('th');
text(`Status`);
ec('th');
let elkd07o = eo('th');
text(`Created By`);
ec('th');
let el2ipQE = eo('th');
text(`Created`);
ec('th');
let elGtYPa = eo('th');
text(`Extra`);
ec('th');
ec('tr');
ec('thead');
let eltP3Wd = eo('tbody');
for (let i in component.bug.statuses) {
let status = component.bug.statuses[i]; 
 let iiGniA = 'Uv_aPxk' + i;
let eluG1id = eo('tr','py4pdL3Sxbcu' + i+iiGniA);
let elK9NTJ = eo('td','onZff'+iiGniA);
text(status.status.capitalize());
ec('td');
let elis3dD = eo('td','Jb8ff'+iiGniA);
text(status.createdBy.name);
ec('td');
let el6H6bm = eo('td','E1tff'+iiGniA);
let cmp00Ff = this._lc('cDR9aw5qb', {parent:component,parentTop:projectLayout,props:{timestamp:status.createdAt.timestamp},insideLoop:true,index:"" +iiGniA});
ec('td');
let elGGcfm = eo('td','BGjff'+iiGniA);
let cndFAtJ = status.extra;
this.setState('st7JlU3', cndFAtJ);
if (cndFAtJ) { 
let cndYWpM = ['notBug', 'deferred', 'rejected', 'reopened'].includes(status.status);
this.setState('st2p10T', cndYWpM);
let cndz5Mh = status.status == 'Duplicated';
this.setState('stBLLRf', cndz5Mh);
if (cndYWpM) { 
let elxDLqx = eo('span','S7fff'+iiGniA);
text(status.extra);
ec('span');
}else if (cndz5Mh) { 
let elIlTMQ = eo('a','SELff'+iiGniA,null,`href`,`${URLS.project(component.project, 'bugs', {id: status.extra})}`);
text(`Duplicated Bug
                                    #${ status.extra }`);
ec('a');
}}ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
let elKxZpR = eo('div',null,null,`class`,`col col-sm-3 order-1`);
let el_kug8 = eo('div',null,null,`class`,`simple-card`);
let elvnqfY = eo('h2',null,null,`class`,`text-center`);
text(`Bug Information`);
ec('h2');
let cnd5GUe = component.bugCanBeEdited;
this.setState('stMuNti', cnd5GUe);
if (cnd5GUe) { 
let el56Pyj = eo('div','g9Bf',null,`class`,`text-center`);
let elS8n44 = eo('button','Whnf',null, eventListeners, {onclick:[function(e) {var $el = this;component.editBug = true}]},`type`,`button`,`class`,`btn btn-sm btn-success bold`);
text(`Edit`);
ec('button');
ec('div');
}let else76m = eo('table',null,null,`class`,`table m-t-2`);
let elAEzKr = eo('tbody');
let elXmFh1 = eo('tr');
let elK3smf = eo('td');
text(`Status`);
ec('td');
let elj0AkM = eo('th',null,null,`class`,`bold status ${ component.bug.status }`);
text(component.bug.status);
ec('th');
ec('tr');
let cndLETz = component.bug.priority;
this.setState('st51kUZ', cndLETz);
if (cndLETz) { 
let elPSeFc = eo('tr','Qmqf');
let elsFhz0 = eo('td','5B5f');
text(`Priority`);
ec('td');
let ellJs89 = eo('th','mvwf',null,`class`,`bold priority ${ component.bug.priority }`);
text(component.bug.priority);
ec('th');
ec('tr');
}let cndW10f = component.bug.dueDate;
this.setState('stPyfM4', cndW10f);
if (cndW10f) { 
let elczEjG = eo('tr','Py9f');
let elCnFVo = eo('td','OOHf');
text(`Due Date`);
ec('td');
let elFjH5Y = eo('th','WTnf',null,`class`,`bold`);
text(trans(component.bug.dueDate));
ec('th');
ec('tr');
}let cndVMZS = component.bug.classification;
this.setState('stI6a3T', cndVMZS);
if (cndVMZS) { 
let elVo1aa = eo('tr','fs0f');
let elLT7uY = eo('td','0GOf');
text(`Classification`);
ec('td');
let elMlXzX = eo('th','4Ctf',null,`class`,`bold`);
text(trans(component.bug.classification));
ec('th');
ec('tr');
}let cndlhc1 = component.bug.severity;
this.setState('stR4kNW', cndlhc1);
if (cndlhc1) { 
let elP4iyd = eo('tr','cG5f');
let elEYOq2 = eo('td','Ff6f');
text(`Severity`);
ec('td');
let elHgmb8 = eo('th','oEkf',null,`class`,`bold`);
text(trans(component.bug.severity));
ec('th');
ec('tr');
}let cndYuv9 = component.bug.reproducible;
this.setState('stsD60l', cndYuv9);
if (cndYuv9) { 
let elPUa1C = eo('tr','LnOf');
let eldrC5r = eo('td','8w8f');
text(`Reproducible`);
ec('td');
let elH833p = eo('th','V8sf',null,`class`,`bold`);
text(trans(component.bug.reproducible));
ec('th');
ec('tr');
}let cndwu02 = component.bug.testingUrl;
this.setState('stqtxCE', cndwu02);
if (cndwu02) { 
let elmIpRJ = eo('tr','a5df');
let elYp4Xt = eo('th','He9f');
text(`Testing Url`);
ec('th');
let elqwoCj = eo('td','Ws5f');
let ele7YH8 = eo('a','gG5f',null,`href`,`${component.bug.testingUrl}`,`class`,`btn btn-sm bold btn-orange`,`target`,`_blank`);
text(`Open Link`);
ec('a');
ec('td');
ec('tr');
}let cndnuXJ = component.bug.sprint;
this.setState('stIRZ6i', cndnuXJ);
if (cndnuXJ) { 
let eldw1FJ = eo('tr','1AGf');
let el6dEU6 = eo('td','NT3f');
text(`Sprint`);
ec('td');
let elEQdxt = eo('th','2p2f');
let elHNfBx = eo('a','Nzjf',null,`href`,`${URLS.project(component.project, 'sprints', component.bug.sprint)}`,`class`,`bold`);
text(component.bug.sprint.name);
ec('a');
ec('th');
ec('tr');
}let cndZe0c = Object.get(component.bug.testCase, 'id', '');
this.setState('stumK8H', cndZe0c);
if (cndZe0c) { 
let elDv7mr = eo('tr','Zg9f');
let elUDFz9 = eo('td','RLGf');
text(`Test Case`);
ec('td');
let elnWtg2 = eo('th','ax2f');
let elw4jBb = eo('a','QC9f',null,`href`,`${URLS.project(component.project, 'test-cases', component.bug.testCase)}`,`class`,`bold`);
text(component.bug.testCase.title);
ec('a');
ec('th');
ec('tr');
}let cndLTJ3 = component.bug.module;
this.setState('st1Iq1t', cndLTJ3);
if (cndLTJ3) { 
let elgreV6 = eo('tr','WOzf');
let elv8bgZ = eo('td','oj2f');
text(`Module`);
ec('td');
let elQSCDT = eo('th','2vnf');
let elojEtI = eo('a','UKxf',null,`href`,`${URLS.project(component.project, 'modules', component.bug.module)}`,`class`,`bold`);
text(component.bug.module.name);
ec('a');
ec('th');
ec('tr');
}ec('tbody');
ec('table');
ec('div');
let cndHnVN = ! Is.empty(component.bug.assignee);
this.setState('staKMOG', cndHnVN);
if (cndHnVN) { 
let elE3uSA = eo('div','eNGf',null,`class`,`simple-card mt-2`);
let el4Y1PF = eo('h2','NYTf',null,`class`,`text-center`);
text(`Assigned To`);
ec('h2');
for (let i in component.bug.assignee) {
let member = component.bug.assignee[i]; 
 let iifIx4 = 'uR8di8f' + i;
let elKbvjc = eo('div','VXnxslx4GsZR' + i+iifIx4,null,`class`,`m-t-1`);
let elUohA9 = ev('img','zq4ff'+iifIx4,null, 'style', {width:'60px',height:'60px'},`src`,`${member.image}`,`class`,`rounded-circle`,`title`,`${member.name}`,`alt`,`${member.name}`);
let elU170P = eo('strong','TItff'+iifIx4,null,`class`,`ml-3 teal-text`);
text(member.name);
ec('strong');
ec('div');
}
ec('div');
}let cndp5h8 = component.bugStatusCanBeChanged();
this.setState('stgperG', cndp5h8);
if (cndp5h8) { 
let elzREmv = eo('div','mSjf',null,`class`,`simple-card mt-2`);
let elnNUpt = eo('h2','uMkf',null,`class`,`text-center m-b-1`);
text(`Bug Status`);
ec('h2');
let cndTUeU = component.bug.status == 'fixed' && Object.get(component.project.currentSprint, 'id', '') && Object.get(component.bug.sprint, 'id', '') && Object.get(component.bug.sprint, 'id', '') == Object.get(component.project.currentSprint, 'id', '');
this.setState('stDJCi7', cndTUeU);
let cnd_eIg = !(cndTUeU);
this.setState('stmmObs', cnd_eIg);
if (cndTUeU) { 
let elu3yAd = eo('div','S84f',null,`class`,`red-text text-center bold`);
text(`Can not retest bug in same project sprint.`);
ec('div');
}else { 
let cmpRBbL = this._lc('cOJx6Kuq3', {parent:component,parentTop:projectLayout,props:{value:component.bug.status,items:component.getProperStatuses()},events:{onselect:function(e) {let $el = this; component.oldStatus = component.bug.status; component.confirmStatusChange = e.value != component.bug.status; component.newStatus = e.value}},attrs:{heading:'Change Bug Status'},state:'stmmObs'});
}ec('div');
}ec('div');
ec('div');
}}});
let cndweDT = component.confirmStatusChange;
this.setState('stZn862', cndweDT);
if (cndweDT) { 
let cmppw4F = this._lc('cZCrwp_2n', {parent:component,props:{withInput:component.isRequiringValue(),message:component.getConfirmingMessage(),required:component.isRequiringValue()},events:{onclose:function(e) {let $el = this; component.confirmStatusChange = null;},onconfirm:function(e) {let $el = this; component.updateStatus(e)}},state:'stZn862'});
}let cndbSgL = component.editBug;
this.setState('st8czLJ', cndbSgL);
if (cndbSgL) { 
let cmprvBz = this._lc('cPMjbrK_l', {parent:component,props:{record:component.bug,project:component.project},events:{onclose:function(e) {let $el = this; component.editBug = null;},onsave:function(e) {let $el = this; component.prepareBug(e)}},state:'st8czLJ'});
}
                    this.isReadyToGo();
                }
        });