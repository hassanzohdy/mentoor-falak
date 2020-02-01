_Component({
                selector: 'project-bug-details-page',
                c: 'ProjectBugDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','bug','bugCanBeEdited','editBug','bugStatusCanBeChanged','getProperStatuses','oldStatus','confirmStatusChange','newStatus','isRequiringValue','getConfirmingMessage','updateStatus','prepareBug'],
                children: {czS_Dz7r0:'flk-time-ago',cGgX5grE6:'markdown',chzE_73PS:'flk-audio-player',ckB7dSqrF:'markdown',c7hjy1sK6:'markdown',c5DotT6uI:'comments',c9ozBRrdV:'flk-time-ago',cTpNwl2CV:'flk-dropdown-list',cinPMX5OV:'project-layout',c_quixlt5:'flk-alert',c8aIvgN_h:'bug-modal'},
                render: function (component) {
                    let cmpuwaA = this._lc('cinPMX5OV', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el95YXH = eo('div',null,null,`class`,`text-right m-b-1`);
let elOjo7k = eo('a',null,null,`href`,`${URLS.project(component.project, 'bugs')}`,`class`,`btn bold btn-purple`);
let elEDyFn = eo('i',null,null,`class`,`${fas('arrow-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to`);
let el1Q0wG = eo('span',null,null,`class`,`mx-2`);
let elgMtXw = ev('img',null,null,`src`,`${assets('images/bug.jpg')}`,`style`,`width: 20px; height: 30px; border-radius: 50%;`);
let el8x5_v = eo('span',null,null,`class`,`bold red-text`);
text(`s`);
ec('span');
ec('span');
text(`List`);
ec('a');
ec('div');
let cndkZS4 = component.bug;
this.setState('stgjxxe', cndkZS4);
if (cndkZS4) { 
let elvfIU7 = eo('div','ELvf',null,`class`,`bug row`);
let eliiQqn = eo('div','vPAf',null,`class`,`col col-sm-9 order-12 order-sm-1`);
let elX3H6C = eo('h1','39Jf',null,`class`,`title`);
text('#' + component.bug.id + ' ' + component.bug.title);
ec('h1');
let elSGfVg = ev('img','rHbf',null,`src`,`${component.bug.createdBy.image}`,`class`,`user-image`,`title`,`${component.bug.createdBy.name}`,`alt`,`${component.bug.createdBy.name}`);
let eliQ25x = eo('div','W_if',null,`class`,`d-inline-block`);
let eleO8m6 = eo('div','6Qlf');
text(component.bug.createdBy.name);
ec('div');
let elE6rFS = eo('div','sG3f');
let cmpPW5X = this._lc('czS_Dz7r0', {parent:component,parentTop:projectLayout,props:{timestamp:component.bug.createdAt.timestamp},attrs:{class:'ago'},state:'stgjxxe'});
ec('div');
ec('div');
let elb5G8Y = eo('div','NZKf',null,`class`,`simple-card p-1 m-y-1`);
let el_Tw4U = eo('div','IFtf',null,`class`,`result-heading`);
text(`Description`);
ec('div');
let cmp8Nlt = this._lc('cGgX5grE6', {parent:component,parentTop:projectLayout,props:{content:component.bug.description},state:'stgjxxe'});
let cnd2BK9 = component.bug.record;
this.setState('stlK0Hx', cnd2BK9);
if (cnd2BK9) { 
let cmpWgiw = this._lc('chzE_73PS', {parent:component,parentTop:projectLayout,props:{src:component.bug.record},attrs:{src:`${component.bug.record}`},state:'stlK0Hx'});
}ec('div');
let cndMz0M = component.bug.stepsToReproduce;
this.setState('st3JwBq', cndMz0M);
if (cndMz0M) { 
let elU66Bl = eo('div','BARf',null,`class`,`simple-card p-1 m-b-1`);
let elP9uDa = eo('div','nqHf',null,`class`,`result-heading`);
text(`Steps To Reproduce`);
ec('div');
let eln6IPk = eo('ol','hfxf',null,`class`,`steps-list`);
for (let i in component.bug.stepsToReproduce.split('\n')) {
let step = component.bug.stepsToReproduce.split('\n')[i]; 
 let iizSKy = 'i_tdeIb' + i;
let eliyvNY = eo('li','LaP2Hs98N_KR' + i+iizSKy);
text(step);
ec('li');
}
ec('ol');
ec('div');
}let cndC6Xa = component.bug.expectedBehavior;
this.setState('stzVZqA', cndC6Xa);
if (cndC6Xa) { 
let elBPCan = eo('div','Z1ff',null,`class`,`simple-card p-1 m-b-1`);
let elTtxxT = eo('div','33ef',null,`class`,`result-heading`);
text(`Expected Result`);
ec('div');
let cmpmNUR = this._lc('ckB7dSqrF', {parent:component,parentTop:projectLayout,props:{content:component.bug.expectedBehavior},state:'stzVZqA'});
ec('div');
}let cndIBSc = component.bug.actualResult;
this.setState('stbfT6T', cndIBSc);
if (cndIBSc) { 
let el8avc7 = eo('div','4pvf',null,`class`,`simple-card p-1 m-b-1`);
let ellSLrP = eo('div','KG4f',null,`class`,`result-heading`);
text(`Actual Result`);
ec('div');
let cmpJyYR = this._lc('c7hjy1sK6', {parent:component,parentTop:projectLayout,props:{content:component.bug.actualResult},state:'stbfT6T'});
ec('div');
}let cnd0XBu = ! Is.empty(component.bug.attachments);
this.setState('stHkFej', cnd0XBu);
if (cnd0XBu) { 
let el5eTLA = eo('div','kUAf',null,`class`,`m-b-2`);
let eloRvbo = eo('h2','5eEf');
text(`Attachments (${ component.bug.attachments.length })`);
ec('h2');
for (let i in component.bug.attachments) {
let attachment = component.bug.attachments[i]; 
 let ii1iad = 'TvMqmG5' + i;
let elzj4Wm = eo('a','hlqTEumXsPtY' + i+ii1iad,null,`href`,`${attachment}`,`target`,`_blank`);
let cndS4X4 = isImage(attachment);
this.setState('stYSCys', cndS4X4);
let cndhRww = !(cndS4X4);
this.setState('stK3Kot', cndhRww);
if (cndS4X4) { 
let elQ1KLU = ev('img','iFRff'+ii1iad,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${component.bug.title}`,`alt`,`${component.bug.title}`);
}else { 
let elqArW_ = eo('button','FI6ff'+ii1iad,null,`class`,`btn btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cmpUd4o = this._lc('c5DotT6uI', {parent:component,parentTop:projectLayout,props:{project:component.project,comments:component.bug.comments,typeId:component.bug.id},attrs:{type:'bug'}});
let eltWp6v = eo('h3',null,null,`class`,`bold m-t-2 m-b-1`);
text(`Bug Status Change Log`);
ec('h3');
let eldv4KI = eo('table',null,null,`class`,`table table-bordered`);
let elSUypL = eo('thead');
let elIpceA = eo('tr');
let elZxHcN = eo('th');
text(`Status`);
ec('th');
let elGGMQf = eo('th');
text(`Created By`);
ec('th');
let eltMhuH = eo('th');
text(`Created`);
ec('th');
let elKjYTK = eo('th');
text(`Extra`);
ec('th');
ec('tr');
ec('thead');
let elv3Ide = eo('tbody');
for (let i in component.bug.statuses) {
let status = component.bug.statuses[i]; 
 let iicSjQ = '1V3n6MF' + i;
let el8kJvr = eo('tr','AgKuFWYC44kr' + i+iicSjQ);
let el7ZZU_ = eo('td','vjEff'+iicSjQ);
text(status.status.capitalize());
ec('td');
let elop5YF = eo('td','WzLff'+iicSjQ);
text(status.createdBy.name);
ec('td');
let elSTmkk = eo('td','G9Rff'+iicSjQ);
let cmpvmY4 = this._lc('c9ozBRrdV', {parent:component,parentTop:projectLayout,props:{timestamp:status.createdAt.timestamp},insideLoop:true,index:"" +iicSjQ});
ec('td');
let elqD7tZ = eo('td','RYlff'+iicSjQ);
let cndC8fb = status.extra;
this.setState('stFci1e', cndC8fb);
if (cndC8fb) { 
let cndvzc0 = ['notBug', 'deferred', 'rejected', 'reopened'].includes(status.status);
this.setState('stTuVYS', cndvzc0);
let cndZ7T6 = status.status == 'Duplicated';
this.setState('stv3LF1', cndZ7T6);
if (cndvzc0) { 
let elCeGjh = eo('span','jEOff'+iicSjQ);
text(status.extra);
ec('span');
}else if (cndZ7T6) { 
let el0D8s6 = eo('a','9Isff'+iicSjQ,null,`href`,`${URLS.project(component.project, 'bugs', {id: status.extra})}`);
text(`Duplicated Bug
                                    #${ status.extra }`);
ec('a');
}}ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
let elUASn6 = eo('div',null,null,`class`,`col col-sm-3 order-1`);
let elX3cuS = eo('div',null,null,`class`,`simple-card`);
let elk6Ynt = eo('h2',null,null,`class`,`text-center`);
text(`Bug Information`);
ec('h2');
let cnddsdF = component.bugCanBeEdited;
this.setState('stG2JS9', cnddsdF);
if (cnddsdF) { 
let elThpif = eo('div','zllf',null,`class`,`text-center`);
let elTcAGt = eo('button','U02f',null, eventListeners, {onclick:[function(e) {var $el = this;component.editBug = true}]},`type`,`button`,`class`,`btn btn-sm btn-success bold`);
text(`Edit`);
ec('button');
ec('div');
}let elTNwMx = eo('table',null,null,`class`,`table m-t-2`);
let elAV9Cb = eo('tbody');
let eleCREZ = eo('tr');
let elzXj3D = eo('td');
text(`Status`);
ec('td');
let elM58bK = eo('th',null,null,`class`,`bold status ${ component.bug.status }`);
text(component.bug.status);
ec('th');
ec('tr');
let cndVDCc = component.bug.priority;
this.setState('st5TFiu', cndVDCc);
if (cndVDCc) { 
let elCXVjY = eo('tr','eP2f');
let elcRrIR = eo('td','mSZf');
text(`Priority`);
ec('td');
let ells3TN = eo('th','f28f',null,`class`,`bold priority ${ component.bug.priority }`);
text(component.bug.priority);
ec('th');
ec('tr');
}let cndHynW = component.bug.dueDate;
this.setState('st9iffk', cndHynW);
if (cndHynW) { 
let el0UEB9 = eo('tr','8uvf');
let elGSMZ3 = eo('td','MQ4f');
text(`Due Date`);
ec('td');
let elV4kZ1 = eo('th','VDOf',null,`class`,`bold`);
text(trans(component.bug.dueDate));
ec('th');
ec('tr');
}let cndDjPk = component.bug.classification;
this.setState('sthUf9l', cndDjPk);
if (cndDjPk) { 
let elaz_jk = eo('tr','O2rf');
let elDflP8 = eo('td','kBLf');
text(`Classification`);
ec('td');
let elmStGs = eo('th','EhWf',null,`class`,`bold`);
text(trans(component.bug.classification));
ec('th');
ec('tr');
}let cndcn8_ = component.bug.severity;
this.setState('stJgmsX', cndcn8_);
if (cndcn8_) { 
let elmq9aM = eo('tr','yVWf');
let el7H2aP = eo('td','B_Af');
text(`Severity`);
ec('td');
let el_hWBW = eo('th','KWff',null,`class`,`bold`);
text(trans(component.bug.severity));
ec('th');
ec('tr');
}let cndf7Qo = component.bug.reproducible;
this.setState('stTxbTE', cndf7Qo);
if (cndf7Qo) { 
let el9TPdp = eo('tr','RVof');
let el1qFpc = eo('td','iMVf');
text(`Reproducible`);
ec('td');
let el61xre = eo('th','9Gqf',null,`class`,`bold`);
text(trans(component.bug.reproducible));
ec('th');
ec('tr');
}let cndZ3KP = component.bug.testingUrl;
this.setState('stRgyKt', cndZ3KP);
if (cndZ3KP) { 
let elmW2kr = eo('tr','Gibf');
let elcTk7c = eo('th','kxXf');
text(`Testing Url`);
ec('th');
let el4U5_y = eo('td','qu4f');
let elRhVut = eo('a','RWQf',null,`href`,`${component.bug.testingUrl}`,`class`,`btn btn-sm bold btn-orange`,`target`,`_blank`);
text(`Open Link`);
ec('a');
ec('td');
ec('tr');
}let cnd01Y0 = component.bug.sprint;
this.setState('stdQ4Sl', cnd01Y0);
if (cnd01Y0) { 
let elUYaxA = eo('tr','Bp6f');
let elCO2Z_ = eo('td','ki6f');
text(`Sprint`);
ec('td');
let elYW4hT = eo('th','LrIf');
let elV5nuN = eo('a','nFaf',null,`href`,`${URLS.project(component.project, 'sprints', component.bug.sprint)}`,`class`,`bold`);
text(component.bug.sprint.name);
ec('a');
ec('th');
ec('tr');
}let cndc4t3 = Object.get(component.bug.testCase, 'id', '');
this.setState('stppAaY', cndc4t3);
if (cndc4t3) { 
let elgFqbK = eo('tr','k7rf');
let elK0VjE = eo('td','GqAf');
text(`Test Case`);
ec('td');
let elihi9y = eo('th','VO5f');
let elFvlf2 = eo('a','tI6f',null,`href`,`${URLS.project(component.project, 'test-cases', component.bug.testCase)}`,`class`,`bold`);
text(component.bug.testCase.title);
ec('a');
ec('th');
ec('tr');
}let cndKFvx = component.bug.module;
this.setState('stRmkaR', cndKFvx);
if (cndKFvx) { 
let elV616n = eo('tr','CWbf');
let elKppn0 = eo('td','vwuf');
text(`Module`);
ec('td');
let el4LMFb = eo('th','EMlf');
let elpsH3o = eo('a','KqGf',null,`href`,`${URLS.project(component.project, 'modules', component.bug.module)}`,`class`,`bold`);
text(component.bug.module.name);
ec('a');
ec('th');
ec('tr');
}ec('tbody');
ec('table');
ec('div');
let cnd97yo = ! Is.empty(component.bug.assignee);
this.setState('stiDjQP', cnd97yo);
if (cnd97yo) { 
let elhKJZD = eo('div','jwmf',null,`class`,`simple-card mt-2`);
let elV1Dnc = eo('h2','bTGf',null,`class`,`text-center`);
text(`Assigned To`);
ec('h2');
for (let i in component.bug.assignee) {
let member = component.bug.assignee[i]; 
 let iitFSh = 'MyqiR0n' + i;
let elU3_bA = eo('div','4xYYMJprGvq8' + i+iitFSh,null,`class`,`m-t-1`);
let elQSYH3 = ev('img','1Ipff'+iitFSh,null, 'style', {width:'60px',height:'60px'},`src`,`${member.image}`,`class`,`rounded-circle`,`title`,`${member.name}`,`alt`,`${member.name}`);
let el76LdD = eo('strong','DJzff'+iitFSh,null,`class`,`ml-3 teal-text`);
text(member.name);
ec('strong');
ec('div');
}
ec('div');
}let cnd4VRK = component.bugStatusCanBeChanged();
this.setState('stGNNUP', cnd4VRK);
if (cnd4VRK) { 
let elGB8C5 = eo('div','3vMf',null,`class`,`simple-card mt-2`);
let elsJf_Y = eo('h2','iNZf',null,`class`,`text-center m-b-1`);
text(`Bug Status`);
ec('h2');
let cndPlnP = component.bug.status == 'fixed' && Object.get(component.project.currentSprint, 'id', '') && Object.get(component.bug.sprint, 'id', '') && Object.get(component.bug.sprint, 'id', '') == Object.get(component.project.currentSprint, 'id', '');
this.setState('stD6cHG', cndPlnP);
let cndYbhw = !(cndPlnP);
this.setState('stqoWjO', cndYbhw);
if (cndPlnP) { 
let elGI2lF = eo('div','KzYf',null,`class`,`red-text text-center bold`);
text(`Can not retest bug in same project sprint.`);
ec('div');
}else { 
let cmpHJrC = this._lc('cTpNwl2CV', {parent:component,parentTop:projectLayout,props:{value:component.bug.status,items:component.getProperStatuses()},events:{onselect:function(e) {let $el = this; component.oldStatus = component.bug.status; component.confirmStatusChange = e.value != component.bug.status; component.newStatus = e.value}},attrs:{heading:'Change Bug Status'},state:'stqoWjO'});
}ec('div');
}ec('div');
ec('div');
}}});
let cnd7eGh = component.confirmStatusChange;
this.setState('sthQvEV', cnd7eGh);
if (cnd7eGh) { 
let cmpCng6 = this._lc('c_quixlt5', {parent:component,props:{withInput:component.isRequiringValue(),message:component.getConfirmingMessage(),required:component.isRequiringValue()},events:{onclose:function(e) {let $el = this; component.confirmStatusChange = null;},onconfirm:function(e) {let $el = this; component.updateStatus(e)}},state:'sthQvEV'});
}let cndaE0Z = component.editBug;
this.setState('stqKHJK', cndaE0Z);
if (cndaE0Z) { 
let cmpstWE = this._lc('c8aIvgN_h', {parent:component,props:{record:component.bug,project:component.project},events:{onclose:function(e) {let $el = this; component.editBug = null;},onsave:function(e) {let $el = this; component.prepareBug(e)}},state:'stqKHJK'});
}
                    this.isReadyToGo();
                }
        });