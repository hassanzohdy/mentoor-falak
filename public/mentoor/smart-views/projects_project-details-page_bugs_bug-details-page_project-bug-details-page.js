_Component({
                selector: 'project-bug-details-page',
                c: 'ProjectBugDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','bug','bugCanBeEdited','editBug','bugStatusCanBeChanged','getProperStatuses','oldStatus','confirmStatusChange','newStatus','isRequiringValue','getConfirmingMessage','updateStatus','prepareBug'],
                children: {cRwTQPPJz:'flk-time-ago',cK6PHEjUx:'markdown',c6_KPw3LW:'flk-audio-player',cX9PHFIJA:'markdown',cRgfRV245:'markdown',cowPz722A:'comments',csfcoHzcj:'flk-time-ago',cEEkEhlOE:'flk-dropdown-list',chHzStOWp:'project-layout',cMta2Ma7R:'flk-alert',crihxYLQe:'bug-modal'},
                render: function (component) {
                    let cmpjNUn = this._lc('chHzStOWp', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elz4Rcr = eo('div',null,null,`class`,`text-right m-b-1`);
let elUMf7a = eo('a',null,null,`href`,`${URLS.project(component.project, 'bugs')}`,`class`,`btn bold btn-purple`);
let el9Ewuj = eo('i',null,null,`class`,`${fas('arrow-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to`);
let elD4_yd = eo('span',null,null,`class`,`mx-2`);
let elaHr6r = ev('img',null,null,`src`,`${assets('images/bug.jpg')}`,`style`,`width: 20px; height: 30px; border-radius: 50%;`);
let elZbbyW = eo('span',null,null,`class`,`bold red-text`);
text(`s`);
ec('span');
ec('span');
text(`List`);
ec('a');
ec('div');
let cndCIJC = component.bug;
this.setState('stUEiPC', cndCIJC);
if (cndCIJC) { 
let elPAqIr = eo('div','JBvf',null,`class`,`bug row`);
let elzdaOo = eo('div','C0bf',null,`class`,`col col-sm-9 order-12 order-sm-1`);
let elJNSgO = eo('h1','webf',null,`class`,`title`);
text('#' + component.bug.id + ' ' + component.bug.title);
ec('h1');
let elsh4CN = ev('img','HQdf',null,`src`,`${component.bug.createdBy.image}`,`class`,`user-image`,`title`,`${component.bug.createdBy.name}`,`alt`,`${component.bug.createdBy.name}`);
let ellm53F = eo('div','TTuf',null,`class`,`d-inline-block`);
let elS_IK_ = eo('div','A3pf');
text(component.bug.createdBy.name);
ec('div');
let elI0NMJ = eo('div','P0nf');
let cmppoB6 = this._lc('cRwTQPPJz', {parent:component,parentTop:projectLayout,props:{timestamp:component.bug.createdAt.timestamp},attrs:{class:'ago'},state:'stUEiPC'});
ec('div');
ec('div');
let elBLCX9 = eo('div','93Qf',null,`class`,`simple-card p-1 m-y-1`);
let elTTuT8 = eo('div','NkJf',null,`class`,`result-heading`);
text(`Description`);
ec('div');
let cmp0GvX = this._lc('cK6PHEjUx', {parent:component,parentTop:projectLayout,props:{content:component.bug.description},state:'stUEiPC'});
let cndRZDP = component.bug.record;
this.setState('stYnXIs', cndRZDP);
if (cndRZDP) { 
let cmpECLL = this._lc('c6_KPw3LW', {parent:component,parentTop:projectLayout,props:{src:component.bug.record},attrs:{src:`${component.bug.record}`},state:'stYnXIs'});
}ec('div');
let cndfQrG = component.bug.stepsToReproduce;
this.setState('stw_pA3', cndfQrG);
if (cndfQrG) { 
let eljcrJt = eo('div','ABof',null,`class`,`simple-card p-1 m-b-1`);
let elKKpPP = eo('div','LLTf',null,`class`,`result-heading`);
text(`Steps To Reproduce`);
ec('div');
let elpi5et = eo('ol','GLlf',null,`class`,`steps-list`);
for (let i in component.bug.stepsToReproduce.split('\n')) {
let step = component.bug.stepsToReproduce.split('\n')[i]; 
 let iiLuUl = 'houd0c4' + i;
let elK7u5K = eo('li','HPV0S8WPbsvp' + i+iiLuUl);
text(step);
ec('li');
}
ec('ol');
ec('div');
}let cndOOoW = component.bug.expectedBehavior;
this.setState('st6pN1A', cndOOoW);
if (cndOOoW) { 
let elJAuw2 = eo('div','yOJf',null,`class`,`simple-card p-1 m-b-1`);
let elOk9Vm = eo('div','CVXf',null,`class`,`result-heading`);
text(`Expected Result`);
ec('div');
let cmpJtYM = this._lc('cX9PHFIJA', {parent:component,parentTop:projectLayout,props:{content:component.bug.expectedBehavior},state:'st6pN1A'});
ec('div');
}let cnd_GyD = component.bug.actualResult;
this.setState('st11_7R', cnd_GyD);
if (cnd_GyD) { 
let elNQaVq = eo('div','j9Hf',null,`class`,`simple-card p-1 m-b-1`);
let elevIXT = eo('div','_8Bf',null,`class`,`result-heading`);
text(`Actual Result`);
ec('div');
let cmpFmPZ = this._lc('cRgfRV245', {parent:component,parentTop:projectLayout,props:{content:component.bug.actualResult},state:'st11_7R'});
ec('div');
}let cndbSDT = ! Is.empty(component.bug.attachments);
this.setState('st8Y5gt', cndbSDT);
if (cndbSDT) { 
let elvb3jc = eo('div','3wIf',null,`class`,`m-b-2`);
let elhzr2s = eo('h2','PB4f');
text(`Attachments (${ component.bug.attachments.length })`);
ec('h2');
for (let i in component.bug.attachments) {
let attachment = component.bug.attachments[i]; 
 let iiPrue = 'BrgUiyk' + i;
let elXAijN = eo('a','bjPK171ogXR_' + i+iiPrue,null,`href`,`${attachment}`,`target`,`_blank`);
let cndX68g = isImage(attachment);
this.setState('st3NklL', cndX68g);
let cndXlm8 = !(cndX68g);
this.setState('stKMANl', cndXlm8);
if (cndX68g) { 
let elto0os = ev('img','yUWff'+iiPrue,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${component.bug.title}`,`alt`,`${component.bug.title}`);
}else { 
let elpN_5m = eo('button','ljyff'+iiPrue,null,`class`,`btn btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cmpoz_4 = this._lc('cowPz722A', {parent:component,parentTop:projectLayout,props:{project:component.project,comments:component.bug.comments,typeId:component.bug.id},attrs:{type:'bug'}});
let elfsxGV = eo('h3',null,null,`class`,`bold m-t-2 m-b-1`);
text(`Bug Status Change Log`);
ec('h3');
let elH8xlV = eo('table',null,null,`class`,`table table-bordered`);
let elGWmKE = eo('thead');
let elxVStV = eo('tr');
let elDJjC3 = eo('th');
text(`Status`);
ec('th');
let elEcjY1 = eo('th');
text(`Created By`);
ec('th');
let elj1LJT = eo('th');
text(`Created`);
ec('th');
let elMLSTf = eo('th');
text(`Extra`);
ec('th');
ec('tr');
ec('thead');
let elRzB_g = eo('tbody');
for (let i in component.bug.statuses) {
let status = component.bug.statuses[i]; 
 let iiN5YQ = 'C8oM_KB' + i;
let elmdhDt = eo('tr','h5lgbaRleIsC' + i+iiN5YQ);
let eld4zHi = eo('td','ol2ff'+iiN5YQ);
text(status.status.capitalize());
ec('td');
let elNpMOQ = eo('td','MWhff'+iiN5YQ);
text(status.createdBy.name);
ec('td');
let elJzVSZ = eo('td','bvGff'+iiN5YQ);
let cmpE140 = this._lc('csfcoHzcj', {parent:component,parentTop:projectLayout,props:{timestamp:status.createdAt.timestamp},insideLoop:true,index:"" +iiN5YQ});
ec('td');
let elzz1SL = eo('td','rk_ff'+iiN5YQ);
let cnd9Nma = status.extra;
this.setState('stke77C', cnd9Nma);
if (cnd9Nma) { 
let cndp93y = ['notBug', 'deferred', 'rejected', 'reopened'].includes(status.status);
this.setState('stiyoqx', cndp93y);
let cndf0Wb = status.status == 'Duplicated';
this.setState('st0V1cc', cndf0Wb);
if (cndp93y) { 
let el6vlZI = eo('span','552ff'+iiN5YQ);
text(status.extra);
ec('span');
}else if (cndf0Wb) { 
let el5htSy = eo('a','Qw7ff'+iiN5YQ,null,`href`,`${URLS.project(component.project, 'bugs', {id: status.extra})}`);
text(`Duplicated Bug
                                    #${ status.extra }`);
ec('a');
}}ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
let elMWEeC = eo('div',null,null,`class`,`col col-sm-3 order-1`);
let elgmrzf = eo('div',null,null,`class`,`simple-card`);
let elE_Fol = eo('h2',null,null,`class`,`text-center`);
text(`Bug Information`);
ec('h2');
let cnd18_T = component.bugCanBeEdited;
this.setState('stN1rJk', cnd18_T);
if (cnd18_T) { 
let el5MLY1 = eo('div','SZ7f',null,`class`,`text-center`);
let elShe9z = eo('button','4QNf',null, eventListeners, {onclick:[function(e) {var $el = this;component.editBug = true}]},`type`,`button`,`class`,`btn btn-sm btn-success bold`);
text(`Edit`);
ec('button');
ec('div');
}let elXqQfC = eo('table',null,null,`class`,`table m-t-2`);
let elPjyUf = eo('tbody');
let elw18Pj = eo('tr');
let el5c5OW = eo('td');
text(`Status`);
ec('td');
let eliQbNy = eo('th',null,null,`class`,`bold status ${ component.bug.status }`);
text(component.bug.status);
ec('th');
ec('tr');
let cndTF4r = component.bug.priority;
this.setState('stDgbdz', cndTF4r);
if (cndTF4r) { 
let elWfYIG = eo('tr','g_If');
let elO7u8Q = eo('td','Zrdf');
text(`Priority`);
ec('td');
let el9lnBB = eo('th','ufRf',null,`class`,`bold priority ${ component.bug.priority }`);
text(component.bug.priority);
ec('th');
ec('tr');
}let cndPRfP = component.bug.dueDate;
this.setState('stTxW8b', cndPRfP);
if (cndPRfP) { 
let elbMnn3 = eo('tr','Fj8f');
let el6vnVT = eo('td','Td4f');
text(`Due Date`);
ec('td');
let elcLWBG = eo('th','S4vf',null,`class`,`bold`);
text(trans(component.bug.dueDate));
ec('th');
ec('tr');
}let cndgI5j = component.bug.classification;
this.setState('stpjSDi', cndgI5j);
if (cndgI5j) { 
let elU8UqW = eo('tr','yhCf');
let elIeHwY = eo('td','Pfkf');
text(`Classification`);
ec('td');
let elp2YW2 = eo('th','jzlf',null,`class`,`bold`);
text(trans(component.bug.classification));
ec('th');
ec('tr');
}let cndLC5t = component.bug.severity;
this.setState('ste75I_', cndLC5t);
if (cndLC5t) { 
let el0iMXk = eo('tr','1LMf');
let elHeeVq = eo('td','uwRf');
text(`Severity`);
ec('td');
let elSJc3G = eo('th','tYNf',null,`class`,`bold`);
text(trans(component.bug.severity));
ec('th');
ec('tr');
}let cndy_fT = component.bug.reproducible;
this.setState('stSDzvN', cndy_fT);
if (cndy_fT) { 
let elBQcVu = eo('tr','5fEf');
let elx121a = eo('td','8I5f');
text(`Reproducible`);
ec('td');
let elnnfGa = eo('th','R0jf',null,`class`,`bold`);
text(trans(component.bug.reproducible));
ec('th');
ec('tr');
}let cndAlSD = component.bug.testingUrl;
this.setState('stsWxw0', cndAlSD);
if (cndAlSD) { 
let elOZ0mF = eo('tr','h3Qf');
let elCckZj = eo('th','aYZf');
text(`Testing Url`);
ec('th');
let el_owDp = eo('td','wEuf');
let el1KJ9n = eo('a','MRIf',null,`href`,`${component.bug.testingUrl}`,`class`,`btn btn-sm bold btn-orange`,`target`,`_blank`);
text(`Open Link`);
ec('a');
ec('td');
ec('tr');
}let cndjfCN = component.bug.sprint;
this.setState('stluMq9', cndjfCN);
if (cndjfCN) { 
let elhJtUx = eo('tr','6Rif');
let elt0Kmb = eo('td','78Zf');
text(`Sprint`);
ec('td');
let elzLtrM = eo('th','atif');
let elR1gi9 = eo('a','dfDf',null,`href`,`${URLS.project(component.project, 'sprints', component.bug.sprint)}`,`class`,`bold`);
text(component.bug.sprint.name);
ec('a');
ec('th');
ec('tr');
}let cnd0onj = Object.get(component.bug.testCase, 'id', '');
this.setState('stJtsNz', cnd0onj);
if (cnd0onj) { 
let eltC9lk = eo('tr','7dKf');
let elpoRSo = eo('td','Fcgf');
text(`Test Case`);
ec('td');
let elVqzVz = eo('th','33Hf');
let elwhOtT = eo('a','P63f',null,`href`,`${URLS.project(component.project, 'test-cases', component.bug.testCase)}`,`class`,`bold`);
text(component.bug.testCase.title);
ec('a');
ec('th');
ec('tr');
}let cndWgfA = component.bug.module;
this.setState('stdk8Kc', cndWgfA);
if (cndWgfA) { 
let elKR8jJ = eo('tr','Bd5f');
let el7Hbtq = eo('td','spKf');
text(`Module`);
ec('td');
let elH4Aat = eo('th','IYZf');
let elNhBIq = eo('a','BY2f',null,`href`,`${URLS.project(component.project, 'modules', component.bug.module)}`,`class`,`bold`);
text(component.bug.module.name);
ec('a');
ec('th');
ec('tr');
}ec('tbody');
ec('table');
ec('div');
let cnd6oAJ = ! Is.empty(component.bug.assignee);
this.setState('stzPmKB', cnd6oAJ);
if (cnd6oAJ) { 
let elmZa4a = eo('div','nCMf',null,`class`,`simple-card mt-2`);
let el0X6So = eo('h2','z5Af',null,`class`,`text-center`);
text(`Assigned To`);
ec('h2');
for (let i in component.bug.assignee) {
let member = component.bug.assignee[i]; 
 let iiyIeV = '6kk_qlq' + i;
let eluTbpE = eo('div','c9goi_rlhyEW' + i+iiyIeV,null,`class`,`m-t-1`);
let el0Q_vj = ev('img','ymqff'+iiyIeV,null, 'style', {width:'60px',height:'60px'},`src`,`${member.image}`,`class`,`rounded-circle`,`title`,`${member.name}`,`alt`,`${member.name}`);
let elWIcRD = eo('strong','X5yff'+iiyIeV,null,`class`,`ml-3 teal-text`);
text(member.name);
ec('strong');
ec('div');
}
ec('div');
}let cndwWIW = component.bugStatusCanBeChanged();
this.setState('stpEZrQ', cndwWIW);
if (cndwWIW) { 
let elPXbUc = eo('div','HuBf',null,`class`,`simple-card mt-2`);
let eliaRw_ = eo('h2','tHHf',null,`class`,`text-center m-b-1`);
text(`Bug Status`);
ec('h2');
let cndvlTT = component.bug.status == 'fixed' && Object.get(component.project.currentSprint, 'id', '') && Object.get(component.bug.sprint, 'id', '') && Object.get(component.bug.sprint, 'id', '') == Object.get(component.project.currentSprint, 'id', '');
this.setState('stzyseA', cndvlTT);
let cndcbrw = !(cndvlTT);
this.setState('stOLtll', cndcbrw);
if (cndvlTT) { 
let elAyaLy = eo('div','bHxf',null,`class`,`red-text text-center bold`);
text(`Can not retest bug in same project sprint.`);
ec('div');
}else { 
let cmpbR69 = this._lc('cEEkEhlOE', {parent:component,parentTop:projectLayout,props:{value:component.bug.status,items:component.getProperStatuses()},events:{onselect:function(e) {let $el = this; component.oldStatus = component.bug.status; component.confirmStatusChange = e.value != component.bug.status; component.newStatus = e.value}},attrs:{heading:'Change Bug Status'},state:'stOLtll'});
}ec('div');
}ec('div');
ec('div');
}}});
let cndzY1N = component.confirmStatusChange;
this.setState('stqtADi', cndzY1N);
if (cndzY1N) { 
let cmptvX7 = this._lc('cMta2Ma7R', {parent:component,props:{withInput:component.isRequiringValue(),message:component.getConfirmingMessage(),required:component.isRequiringValue()},events:{onclose:function(e) {let $el = this; component.confirmStatusChange = null;},onconfirm:function(e) {let $el = this; component.updateStatus(e)}},state:'stqtADi'});
}let cndyczV = component.editBug;
this.setState('stATNgn', cndyczV);
if (cndyczV) { 
let cmp4rW8 = this._lc('crihxYLQe', {parent:component,props:{record:component.bug,project:component.project},events:{onclose:function(e) {let $el = this; component.editBug = null;},onsave:function(e) {let $el = this; component.prepareBug(e)}},state:'stATNgn'});
}
                    this.isReadyToGo();
                }
        });