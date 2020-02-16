_Component({
                selector: 'project-bug-details-page',
                c: 'ProjectBugDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','bug','bugCanBeEdited','editBug','bugStatusCanBeChanged','getProperStatuses','oldStatus','confirmStatusChange','newStatus','isRequiringValue','getConfirmingMessage','updateStatus','prepareBug'],
                children: {cf3lv6azy:'flk-time-ago',cHlBb4OcU:'markdown',cmev6Wn50:'flk-audio-player',cjKxEqLFv:'markdown',cgvmcTbo7:'markdown',cMeDV0l_L:'comments',czFXULyha:'flk-time-ago',cXsCckpAD:'flk-dropdown-list',c90d0j9hn:'project-layout',cmVy5Bon7:'flk-alert',ci8FQyRNL:'bug-modal'},
                render: function (component) {
                    let cmpigZx = this._lc('c90d0j9hn', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elCdyoM = eo('div',null,null,`class`,`text-right m-b-1`);
let elAMz0P = eo('a',null,null,`href`,`${URLS.project(component.project, 'bugs')}`,`class`,`btn bold btn-purple`);
let eljqxkn = eo('i',null,null,`class`,`${fas('arrow-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to`);
let elDAcuB = eo('span',null,null,`class`,`mx-2`);
let elkmyVf = ev('img',null,null,`src`,`${assets('images/bug.jpg')}`,`style`,`width: 20px; height: 30px; border-radius: 50%;`);
let eldK5HC = eo('span',null,null,`class`,`bold red-text`);
text(`s`);
ec('span');
ec('span');
text(`List`);
ec('a');
ec('div');
let cnd1CCL = component.bug;
this.setState('sta4ylA', cnd1CCL);
if (cnd1CCL) { 
let el4nL7S = eo('div','Ppjf',null,`class`,`bug row`);
let elYRqnk = eo('div','vXhf',null,`class`,`col col-sm-9 order-12 order-sm-1`);
let elMdCay = eo('h1','0R9f',null,`class`,`title`);
text('#' + component.bug.id + ' ' + component.bug.title);
ec('h1');
let elh4wWI = ev('img','F35f',null,`src`,`${component.bug.createdBy.image}`,`class`,`user-image`,`title`,`${component.bug.createdBy.name}`,`alt`,`${component.bug.createdBy.name}`);
let elGVnI2 = eo('div','i7Bf',null,`class`,`d-inline-block`);
let elLuWzb = eo('div','HR2f');
text(component.bug.createdBy.name);
ec('div');
let elLd_Ld = eo('div','uEJf');
let cmpFjji = this._lc('cf3lv6azy', {parent:component,parentTop:projectLayout,props:{timestamp:component.bug.createdAt.timestamp},attrs:{class:'ago'},state:'sta4ylA'});
ec('div');
ec('div');
let elNhI2O = eo('div','FOdf',null,`class`,`simple-card p-1 m-y-1`);
let elR8kMM = eo('div','qmRf',null,`class`,`result-heading`);
text(`Description`);
ec('div');
let cmpP9zC = this._lc('cHlBb4OcU', {parent:component,parentTop:projectLayout,props:{content:component.bug.description},state:'sta4ylA'});
let cndwr6A = component.bug.record;
this.setState('stW50uF', cndwr6A);
if (cndwr6A) { 
let cmpLRRA = this._lc('cmev6Wn50', {parent:component,parentTop:projectLayout,props:{src:component.bug.record},attrs:{src:`${component.bug.record}`},state:'stW50uF'});
}ec('div');
let cndp96K = component.bug.stepsToReproduce;
this.setState('st9h_XO', cndp96K);
if (cndp96K) { 
let eljrYU1 = eo('div','MYef',null,`class`,`simple-card p-1 m-b-1`);
let elZAbid = eo('div','AvWf',null,`class`,`result-heading`);
text(`Steps To Reproduce`);
ec('div');
let elcImyh = eo('ol','Tn5f',null,`class`,`steps-list`);
for (let i in component.bug.stepsToReproduce.split('\n')) {
let step = component.bug.stepsToReproduce.split('\n')[i]; 
 let iiGmDJ = 'MnmgQ9v' + i;
let elfxoNP = eo('li','5HFMr1eCfyW3' + i+iiGmDJ);
text(step);
ec('li');
}
ec('ol');
ec('div');
}let cndhzcH = component.bug.expectedBehavior;
this.setState('stvFpzz', cndhzcH);
if (cndhzcH) { 
let eltkD_4 = eo('div','xIOf',null,`class`,`simple-card p-1 m-b-1`);
let elIj7dQ = eo('div','1TPf',null,`class`,`result-heading`);
text(`Expected Result`);
ec('div');
let cmp_kG4 = this._lc('cjKxEqLFv', {parent:component,parentTop:projectLayout,props:{content:component.bug.expectedBehavior},state:'stvFpzz'});
ec('div');
}let cndWNLg = component.bug.actualResult;
this.setState('stnqTQF', cndWNLg);
if (cndWNLg) { 
let elk45dP = eo('div','Zrzf',null,`class`,`simple-card p-1 m-b-1`);
let elWNb7v = eo('div','jYAf',null,`class`,`result-heading`);
text(`Actual Result`);
ec('div');
let cmpMydJ = this._lc('cgvmcTbo7', {parent:component,parentTop:projectLayout,props:{content:component.bug.actualResult},state:'stnqTQF'});
ec('div');
}let cnd1pFD = ! Is.empty(component.bug.attachments);
this.setState('stc9RoZ', cnd1pFD);
if (cnd1pFD) { 
let el2nHIl = eo('div','_aJf',null,`class`,`m-b-2`);
let elpX31X = eo('h2','D2lf');
text(`Attachments (${ component.bug.attachments.length })`);
ec('h2');
for (let i in component.bug.attachments) {
let attachment = component.bug.attachments[i]; 
 let iiUET7 = '2qDhQaE' + i;
let elgrR2o = eo('a','iVcFTVby8ZbW' + i+iiUET7,null,`href`,`${attachment}`,`target`,`_blank`);
let cndv3IN = isImage(attachment);
this.setState('stsJXtZ', cndv3IN);
let cndWN9B = !(cndv3IN);
this.setState('stwPxnw', cndWN9B);
if (cndv3IN) { 
let elcPD1t = ev('img','zXCff'+iiUET7,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${component.bug.title}`,`alt`,`${component.bug.title}`);
}else { 
let elclBdd = eo('button','RF5ff'+iiUET7,null,`class`,`btn btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cmps3gq = this._lc('cMeDV0l_L', {parent:component,parentTop:projectLayout,props:{project:component.project,comments:component.bug.comments,typeId:component.bug.id},attrs:{type:'bug'}});
let eltW3HU = eo('h3',null,null,`class`,`bold m-t-2 m-b-1`);
text(`Bug Status Change Log`);
ec('h3');
let el513nC = eo('table',null,null,`class`,`table table-bordered`);
let elNbsBe = eo('thead');
let elIWdEk = eo('tr');
let el8wCbS = eo('th');
text(`Status`);
ec('th');
let elWenr1 = eo('th');
text(`Created By`);
ec('th');
let elfq47U = eo('th');
text(`Created`);
ec('th');
let eloR5bd = eo('th');
text(`Extra`);
ec('th');
ec('tr');
ec('thead');
let el6Cp_g = eo('tbody');
for (let i in component.bug.statuses) {
let status = component.bug.statuses[i]; 
 let iiBIp8 = 'yPaYSmA' + i;
let elu7l7L = eo('tr','p6z7gtV7EOvU' + i+iiBIp8);
let elxSaxI = eo('td','hC4ff'+iiBIp8);
text(status.status.capitalize());
ec('td');
let elctUrW = eo('td','Cpuff'+iiBIp8);
text(status.createdBy.name);
ec('td');
let elm4ZK1 = eo('td','4hdff'+iiBIp8);
let cmpOHJu = this._lc('czFXULyha', {parent:component,parentTop:projectLayout,props:{timestamp:status.createdAt.timestamp},insideLoop:true,index:"" +iiBIp8});
ec('td');
let el0UHb5 = eo('td','SK5ff'+iiBIp8);
let cndl7uA = status.extra;
this.setState('stjhaTp', cndl7uA);
if (cndl7uA) { 
let cndOfOZ = ['notBug', 'deferred', 'rejected', 'reopened'].includes(status.status);
this.setState('stGFkYP', cndOfOZ);
let cndcTY8 = status.status == 'Duplicated';
this.setState('stWMxbF', cndcTY8);
if (cndOfOZ) { 
let elBQLLY = eo('span','1bxff'+iiBIp8);
text(status.extra);
ec('span');
}else if (cndcTY8) { 
let elprxXm = eo('a','0xIff'+iiBIp8,null,`href`,`${URLS.project(component.project, 'bugs', {id: status.extra})}`);
text(`Duplicated Bug
                                    #${ status.extra }`);
ec('a');
}}ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
let elw0IdW = eo('div',null,null,`class`,`col col-sm-3 order-1`);
let elAT2vj = eo('div',null,null,`class`,`simple-card`);
let el88zJC = eo('h2',null,null,`class`,`text-center`);
text(`Bug Information`);
ec('h2');
let cndGQpr = component.bugCanBeEdited;
this.setState('stL6nco', cndGQpr);
if (cndGQpr) { 
let elUIhcb = eo('div','hnRf',null,`class`,`text-center`);
let el5taAQ = eo('button','5VEf',null, eventListeners, {onclick:[function(e) {var $el = this;component.editBug = true}]},`type`,`button`,`class`,`btn btn-sm btn-success bold`);
text(`Edit`);
ec('button');
ec('div');
}let elyI_r4 = eo('table',null,null,`class`,`table m-t-2`);
let elBLVlg = eo('tbody');
let el2eKdn = eo('tr');
let elDIWI7 = eo('td');
text(`Status`);
ec('td');
let elPXAoR = eo('th',null,null,`class`,`bold status ${ component.bug.status }`);
text(component.bug.status);
ec('th');
ec('tr');
let cndfrgh = component.bug.priority;
this.setState('stBtK6H', cndfrgh);
if (cndfrgh) { 
let eldrklU = eo('tr','gIjf');
let elrFTzX = eo('td','akwf');
text(`Priority`);
ec('td');
let elVjaJA = eo('th','rH6f',null,`class`,`bold priority ${ component.bug.priority }`);
text(component.bug.priority);
ec('th');
ec('tr');
}let cnd6xhP = component.bug.dueDate;
this.setState('sttrwU_', cnd6xhP);
if (cnd6xhP) { 
let eleZPGy = eo('tr','ps8f');
let elUsnuq = eo('td','HKQf');
text(`Due Date`);
ec('td');
let elV6CRW = eo('th','7qKf',null,`class`,`bold`);
text(trans(component.bug.dueDate));
ec('th');
ec('tr');
}let cndwJIy = component.bug.classification;
this.setState('stEDC2v', cndwJIy);
if (cndwJIy) { 
let el55XEA = eo('tr','rqxf');
let elXp26a = eo('td','yFEf');
text(`Classification`);
ec('td');
let elW6fM0 = eo('th','Wnjf',null,`class`,`bold`);
text(trans(component.bug.classification));
ec('th');
ec('tr');
}let cndedi3 = component.bug.severity;
this.setState('st0I2ku', cndedi3);
if (cndedi3) { 
let el4orJK = eo('tr','g5Rf');
let eloz3UK = eo('td','3VHf');
text(`Severity`);
ec('td');
let el1Shrh = eo('th','FNJf',null,`class`,`bold`);
text(trans(component.bug.severity));
ec('th');
ec('tr');
}let cndj9tK = component.bug.reproducible;
this.setState('stQFRRy', cndj9tK);
if (cndj9tK) { 
let elI9Hgt = eo('tr','AV4f');
let elHMv6T = eo('td','DcLf');
text(`Reproducible`);
ec('td');
let elqsQuG = eo('th','hTYf',null,`class`,`bold`);
text(trans(component.bug.reproducible));
ec('th');
ec('tr');
}let cnd7NL2 = component.bug.testingUrl;
this.setState('stoa6Ns', cnd7NL2);
if (cnd7NL2) { 
let elnlsfV = eo('tr','1VMf');
let el6GyEu = eo('th','Cyvf');
text(`Testing Url`);
ec('th');
let elEjwBs = eo('td','5X7f');
let elBd1z1 = eo('a','izqf',null,`href`,`${component.bug.testingUrl}`,`class`,`btn btn-sm bold btn-orange`,`target`,`_blank`);
text(`Open Link`);
ec('a');
ec('td');
ec('tr');
}let cnd05EK = component.bug.sprint;
this.setState('stRqRX3', cnd05EK);
if (cnd05EK) { 
let elx78KD = eo('tr','l4df');
let eltOXA4 = eo('td','Slmf');
text(`Sprint`);
ec('td');
let elk39lD = eo('th','dISf');
let elYjD9x = eo('a','oIef',null,`href`,`${URLS.project(component.project, 'sprints', component.bug.sprint)}`,`class`,`bold`);
text(component.bug.sprint.name);
ec('a');
ec('th');
ec('tr');
}let cndVSbs = Object.get(component.bug.testCase, 'id', '');
this.setState('st2Tby0', cndVSbs);
if (cndVSbs) { 
let elUtkxV = eo('tr','lHNf');
let elJ2GBA = eo('td','kSif');
text(`Test Case`);
ec('td');
let elfWfem = eo('th','D4If');
let elOARr_ = eo('a','K8ef',null,`href`,`${URLS.project(component.project, 'test-cases', component.bug.testCase)}`,`class`,`bold`);
text(component.bug.testCase.title);
ec('a');
ec('th');
ec('tr');
}let cndVNBM = component.bug.module;
this.setState('stTs1kg', cndVNBM);
if (cndVNBM) { 
let eldW6JP = eo('tr','fOFf');
let eliSmAb = eo('td','Y_Gf');
text(`Module`);
ec('td');
let el1Vo1e = eo('th','Np_f');
let elEZ5Dk = eo('a','xWRf',null,`href`,`${URLS.project(component.project, 'modules', component.bug.module)}`,`class`,`bold`);
text(component.bug.module.name);
ec('a');
ec('th');
ec('tr');
}ec('tbody');
ec('table');
ec('div');
let cndo9mG = ! Is.empty(component.bug.assignee);
this.setState('stXb9q0', cndo9mG);
if (cndo9mG) { 
let elbR5oD = eo('div','1KBf',null,`class`,`simple-card mt-2`);
let el6x8hq = eo('h2','NIIf',null,`class`,`text-center`);
text(`Assigned To`);
ec('h2');
for (let i in component.bug.assignee) {
let member = component.bug.assignee[i]; 
 let iiMzBa = 'buNblPo' + i;
let elk5CXw = eo('div','lj9c_Bqo30sL' + i+iiMzBa,null,`class`,`m-t-1`);
let elRRW3Z = ev('img','qlZff'+iiMzBa,null, 'style', {width:'60px',height:'60px'},`src`,`${member.image}`,`class`,`rounded-circle`,`title`,`${member.name}`,`alt`,`${member.name}`);
let elzuc3u = eo('strong','lrtff'+iiMzBa,null,`class`,`ml-3 teal-text`);
text(member.name);
ec('strong');
ec('div');
}
ec('div');
}let cndVPCs = component.bugStatusCanBeChanged();
this.setState('stN0SBf', cndVPCs);
if (cndVPCs) { 
let elRrhTk = eo('div','ABef',null,`class`,`simple-card mt-2`);
let elNrsPr = eo('h2','nbHf',null,`class`,`text-center m-b-1`);
text(`Bug Status`);
ec('h2');
let cndUwyc = component.bug.status == 'fixed' && Object.get(component.project.currentSprint, 'id', '') && Object.get(component.bug.sprint, 'id', '') && Object.get(component.bug.sprint, 'id', '') == Object.get(component.project.currentSprint, 'id', '');
this.setState('stV2oAc', cndUwyc);
let cnd3mF2 = !(cndUwyc);
this.setState('styh9UO', cnd3mF2);
if (cndUwyc) { 
let el09G1k = eo('div','gtWf',null,`class`,`red-text text-center bold`);
text(`Can not retest bug in same project sprint.`);
ec('div');
}else { 
let cmpGLt8 = this._lc('cXsCckpAD', {parent:component,parentTop:projectLayout,props:{value:component.bug.status,items:component.getProperStatuses()},events:{onselect:function(e) {let $el = this; component.oldStatus = component.bug.status; component.confirmStatusChange = e.value != component.bug.status; component.newStatus = e.value}},attrs:{heading:'Change Bug Status'},state:'styh9UO'});
}ec('div');
}ec('div');
ec('div');
}}});
let cndMPRV = component.confirmStatusChange;
this.setState('stLqXjz', cndMPRV);
if (cndMPRV) { 
let cmpFCM4 = this._lc('cmVy5Bon7', {parent:component,props:{withInput:component.isRequiringValue(),message:component.getConfirmingMessage(),required:component.isRequiringValue()},events:{onclose:function(e) {let $el = this; component.confirmStatusChange = null;},onconfirm:function(e) {let $el = this; component.updateStatus(e)}},state:'stLqXjz'});
}let cndixL_ = component.editBug;
this.setState('stHtAzt', cndixL_);
if (cndixL_) { 
let cmpe7tB = this._lc('ci8FQyRNL', {parent:component,props:{record:component.bug,project:component.project},events:{onclose:function(e) {let $el = this; component.editBug = null;},onsave:function(e) {let $el = this; component.prepareBug(e)}},state:'stHtAzt'});
}
                    this.isReadyToGo();
                }
        });