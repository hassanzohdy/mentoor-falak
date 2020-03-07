_Component({
                selector: 'project-bug-details-page',
                c: 'ProjectBugDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','bug','bugCanBeEdited','editBug','bugStatusCanBeChanged','getProperStatuses','oldStatus','confirmStatusChange','newStatus','isRequiringValue','getConfirmingMessage','updateStatus','prepareBug'],
                children: {cjgSQoCG9:'flk-time-ago',cMBOp6vgo:'markdown',cbDVON4aN:'flk-audio-player',c1lt7knV0:'markdown',clLrT8nfB:'markdown',cv28PubhN:'comments',cIvcrvCvp:'flk-time-ago',c3IcrFVc8:'flk-dropdown-list',cUjzcUtRn:'project-layout',c3KsHrrvp:'flk-alert',cKvWFJJpn:'bug-modal'},
                render: function (component) {
                    let cmpQ4se = this._lc('cUjzcUtRn', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el4l4fU = eo('div',null,null,`class`,`text-right m-b-1`);
let eliGi4v = eo('a',null,null,`href`,`${URLS.project(component.project, 'bugs')}`,`class`,`btn bold btn-purple`);
let elpfnv3 = eo('i',null,null,`class`,`${fas('arrow-left')} mr-2 icon`);
ec('i');
text(`Back to`);
let elWxTLz = eo('span',null,null,`class`,`mx-2`);
let els6A1N = ev('img',null,null,`src`,`${assets('images/bug.jpg')}`,`style`,`width: 20px; height: 30px; border-radius: 50%;`);
let elcRinZ = eo('span',null,null,`class`,`bold red-text`);
text(`s`);
ec('span');
ec('span');
text(`List`);
ec('a');
ec('div');
let cndUPmL = component.bug;
this.setState('stjYtGD', cndUPmL);
if (cndUPmL) { 
let elJEdiL = eo('div','J1xf',null,`class`,`bug row`);
let eljSMMn = eo('div','RNlf',null,`class`,`col col-sm-9 order-12 order-sm-1`);
let elkiMNA = eo('h1','SZef',null,`class`,`title`);
text('#' + component.bug.id + ' ' + component.bug.title);
ec('h1');
let elaz3sa = ev('img','qxIf',null,`src`,`${component.bug.createdBy.image}`,`class`,`user-image`,`title`,`${component.bug.createdBy.name}`,`alt`,`${component.bug.createdBy.name}`);
let elkKGZv = eo('div','Tvvf',null,`class`,`d-inline-block`);
let elVDhfK = eo('div','QYnf');
text(component.bug.createdBy.name);
ec('div');
let elUyzPo = eo('div','t49f');
let cmpTDj4 = this._lc('cjgSQoCG9', {parent:component,parentTop:projectLayout,props:{timestamp:component.bug.createdAt.timestamp},attrs:{class:'ago'},state:'stjYtGD'});
ec('div');
ec('div');
let elza4Y7 = eo('div','qhrf',null,`class`,`simple-card p-1 m-y-1`);
let el0afYO = eo('div','8KEf',null,`class`,`result-heading`);
text(`Description`);
ec('div');
let cmp6aDR = this._lc('cMBOp6vgo', {parent:component,parentTop:projectLayout,props:{content:component.bug.description},state:'stjYtGD'});
let cnd4ZY_ = component.bug.record;
this.setState('st8hAmq', cnd4ZY_);
if (cnd4ZY_) { 
let cmpsR72 = this._lc('cbDVON4aN', {parent:component,parentTop:projectLayout,props:{src:component.bug.record},attrs:{src:`${component.bug.record}`},state:'st8hAmq'});
}ec('div');
let cndCWMD = component.bug.stepsToReproduce;
this.setState('stfI9Uc', cndCWMD);
if (cndCWMD) { 
let elqSSaY = eo('div','RjOf',null,`class`,`simple-card p-1 m-b-1`);
let elePm8q = eo('div','f7ff',null,`class`,`result-heading`);
text(`Steps To Reproduce`);
ec('div');
let el4HtwF = eo('ol','73Gf',null,`class`,`steps-list`);
for (let i in component.bug.stepsToReproduce.split('\n')) {
let step = component.bug.stepsToReproduce.split('\n')[i]; 
 let iircF1 = 'hqxnMkD' + i;
let elwxK8C = eo('li','zfLAtGT_43w5' + i+iircF1);
text(step);
ec('li');
}
ec('ol');
ec('div');
}let cndbrFg = component.bug.expectedBehavior;
this.setState('stP8GhL', cndbrFg);
if (cndbrFg) { 
let elCFqnF = eo('div','KKff',null,`class`,`simple-card p-1 m-b-1`);
let el0EmSn = eo('div','2yrf',null,`class`,`result-heading`);
text(`Expected Result`);
ec('div');
let cmpr2BJ = this._lc('c1lt7knV0', {parent:component,parentTop:projectLayout,props:{content:component.bug.expectedBehavior},state:'stP8GhL'});
ec('div');
}let cndeMzW = component.bug.actualResult;
this.setState('stYuFLj', cndeMzW);
if (cndeMzW) { 
let elNn5zf = eo('div','8Edf',null,`class`,`simple-card p-1 m-b-1`);
let el7kz0y = eo('div','4RMf',null,`class`,`result-heading`);
text(`Actual Result`);
ec('div');
let cmpIrhX = this._lc('clLrT8nfB', {parent:component,parentTop:projectLayout,props:{content:component.bug.actualResult},state:'stYuFLj'});
ec('div');
}let cndsboW = ! Is.empty(component.bug.attachments);
this.setState('std6Nhf', cndsboW);
if (cndsboW) { 
let eleUGcj = eo('div','0aIf',null,`class`,`m-b-2`);
let elzuAWH = eo('h2','O9wf');
text(`Attachments (${ component.bug.attachments.length })`);
ec('h2');
for (let i in component.bug.attachments) {
let attachment = component.bug.attachments[i]; 
 let iiF4xV = '2w1pFlq' + i;
let elFCdcv = eo('a','Dstx3qPufhF1' + i+iiF4xV,null,`href`,`${attachment}`,`target`,`_blank`);
let cnd4tv4 = isImage(attachment);
this.setState('stOrNkc', cnd4tv4);
let cndlpt5 = !(cnd4tv4);
this.setState('st7nwtZ', cndlpt5);
if (cnd4tv4) { 
let elfVqUZ = ev('img','5Edff'+iiF4xV,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${component.bug.title}`,`alt`,`${component.bug.title}`);
}else { 
let elIn6SG = eo('button','ejyff'+iiF4xV,null,`class`,`btn btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cmpNJs3 = this._lc('cv28PubhN', {parent:component,parentTop:projectLayout,props:{project:component.project,comments:component.bug.comments,typeId:component.bug.id},attrs:{type:'bug'}});
let elOGc2v = eo('h3',null,null,`class`,`bold m-t-2 m-b-1`);
text(`Bug Status Change Log`);
ec('h3');
let ellkln4 = eo('table',null,null,`class`,`table table-bordered`);
let elYa0pk = eo('thead');
let elghygF = eo('tr');
let elc9Mgo = eo('th');
text(`Status`);
ec('th');
let elr7ly5 = eo('th');
text(`Created By`);
ec('th');
let elWdDs7 = eo('th');
text(`Created`);
ec('th');
let ely6Avd = eo('th');
text(`Extra`);
ec('th');
ec('tr');
ec('thead');
let elBW38G = eo('tbody');
for (let i in component.bug.statuses) {
let status = component.bug.statuses[i]; 
 let iiyTNR = '1rY3Kfv' + i;
let el_6s2x = eo('tr','Ar7DnGj2w7PE' + i+iiyTNR);
let elPkJwA = eo('td','9Mhff'+iiyTNR);
text(status.status.capitalize());
ec('td');
let el5aDQQ = eo('td','AXeff'+iiyTNR);
text(status.createdBy.name);
ec('td');
let el67GMU = eo('td','YPiff'+iiyTNR);
let cmpcxb9 = this._lc('cIvcrvCvp', {parent:component,parentTop:projectLayout,props:{timestamp:status.createdAt.timestamp},insideLoop:true,index:"" +iiyTNR});
ec('td');
let elNn2Er = eo('td','KMKff'+iiyTNR);
let cnd4jG3 = status.extra;
this.setState('stj4LYJ', cnd4jG3);
if (cnd4jG3) { 
let cndAjWV = ['notBug', 'deferred', 'rejected', 'reopened'].includes(status.status);
this.setState('st52_yD', cndAjWV);
let cndvT3q = status.status == 'Duplicated';
this.setState('st1QyIV', cndvT3q);
if (cndAjWV) { 
let elGxOu6 = eo('span','acyff'+iiyTNR);
text(status.extra);
ec('span');
}else if (cndvT3q) { 
let elioy6U = eo('a','CVjff'+iiyTNR,null,`href`,`${URLS.project(component.project, 'bugs', {id: status.extra})}`);
text(`Duplicated Bug
                                    #${ status.extra }`);
ec('a');
}}ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
let elKHSSG = eo('div',null,null,`class`,`col col-sm-3 order-1`);
let elY6eyh = eo('div',null,null,`class`,`simple-card`);
let el5en5F = eo('h2',null,null,`class`,`text-center`);
text(`Bug Information`);
ec('h2');
let cndFhnq = component.bugCanBeEdited;
this.setState('stpEuFm', cndFhnq);
if (cndFhnq) { 
let elUhhf5 = eo('div','F_bf',null,`class`,`text-center`);
let elFZMpG = eo('button','mEXf',null, eventListeners, {onclick:[function(e) {var $el = this;component.editBug = true}]},`type`,`button`,`class`,`btn btn-sm btn-success bold`);
text(`Edit`);
ec('button');
ec('div');
}let elOqYIy = eo('table',null,null,`class`,`table m-t-2`);
let elUhkpT = eo('tbody');
let el1vYld = eo('tr');
let elrMxmd = eo('td');
text(`Status`);
ec('td');
let elceWMU = eo('th',null,null,`class`,`bold status ${ component.bug.status }`);
text(component.bug.status);
ec('th');
ec('tr');
let cndGqKr = component.bug.priority;
this.setState('stubRfG', cndGqKr);
if (cndGqKr) { 
let ellVluM = eo('tr','9Gyf');
let eliqRdZ = eo('td','11yf');
text(`Priority`);
ec('td');
let el2U2Du = eo('th','jh4f',null,`class`,`bold priority ${ component.bug.priority }`);
text(component.bug.priority);
ec('th');
ec('tr');
}let cndTPdA = component.bug.dueDate;
this.setState('stwrTbv', cndTPdA);
if (cndTPdA) { 
let elU2UxU = eo('tr','UbQf');
let elLC1xy = eo('td','qhRf');
text(`Due Date`);
ec('td');
let elAELpO = eo('th','2_vf',null,`class`,`bold`);
text(trans(component.bug.dueDate));
ec('th');
ec('tr');
}let cndTMqy = component.bug.classification;
this.setState('stAjZGv', cndTMqy);
if (cndTMqy) { 
let elmpmce = eo('tr','bG_f');
let elHpAsZ = eo('td','Mdkf');
text(`Classification`);
ec('td');
let elJmoBv = eo('th','E2Nf',null,`class`,`bold`);
text(trans(component.bug.classification));
ec('th');
ec('tr');
}let cndOoij = component.bug.severity;
this.setState('stiLXk_', cndOoij);
if (cndOoij) { 
let elwxT3Y = eo('tr','yJFf');
let elbdz_c = eo('td','fh0f');
text(`Severity`);
ec('td');
let el6RctW = eo('th','OM8f',null,`class`,`bold`);
text(trans(component.bug.severity));
ec('th');
ec('tr');
}let cndTuOu = component.bug.reproducible;
this.setState('stMvj21', cndTuOu);
if (cndTuOu) { 
let elGqxpW = eo('tr','uJ2f');
let el_cLiJ = eo('td','Ohwf');
text(`Reproducible`);
ec('td');
let elAPl49 = eo('th','0XLf',null,`class`,`bold`);
text(trans(component.bug.reproducible));
ec('th');
ec('tr');
}let cndQ31O = component.bug.testingUrl;
this.setState('stkW5A3', cndQ31O);
if (cndQ31O) { 
let el68eJC = eo('tr','xpof');
let elRqOVT = eo('th','Dfff');
text(`Testing Url`);
ec('th');
let elo1gmj = eo('td','3Qrf');
let elRfhIj = eo('a','uaKf',null,`href`,`${component.bug.testingUrl}`,`class`,`btn btn-sm bold btn-orange`,`target`,`_blank`);
text(`Open Link`);
ec('a');
ec('td');
ec('tr');
}let cnd0lqm = component.bug.sprint;
this.setState('stiNEUU', cnd0lqm);
if (cnd0lqm) { 
let elu3pXa = eo('tr','qlZf');
let elmSOS0 = eo('td','5yJf');
text(`Sprint`);
ec('td');
let el3_cqS = eo('th','gb6f');
let elJENPy = eo('a','XrXf',null,`href`,`${URLS.project(component.project, 'sprints', component.bug.sprint)}`,`class`,`bold`);
text(component.bug.sprint.name);
ec('a');
ec('th');
ec('tr');
}let cndIRQ5 = Object.get(component.bug.testCase, 'id', '');
this.setState('st6btCV', cndIRQ5);
if (cndIRQ5) { 
let el2FXJm = eo('tr','E_Pf');
let elZyHtC = eo('td','aHAf');
text(`Test Case`);
ec('td');
let elSBOem = eo('th','Cs4f');
let elYxBgA = eo('a','fQpf',null,`href`,`${URLS.project(component.project, 'test-cases', component.bug.testCase)}`,`class`,`bold`);
text(component.bug.testCase.title);
ec('a');
ec('th');
ec('tr');
}let cndb9L_ = component.bug.module;
this.setState('stV4I0M', cndb9L_);
if (cndb9L_) { 
let elx0Fv5 = eo('tr','kqtf');
let elDMqF7 = eo('td','_Vzf');
text(`Module`);
ec('td');
let elInIrB = eo('th','tlof');
let elljj4r = eo('a','FEpf',null,`href`,`${URLS.project(component.project, 'modules', component.bug.module)}`,`class`,`bold`);
text(component.bug.module.name);
ec('a');
ec('th');
ec('tr');
}ec('tbody');
ec('table');
ec('div');
let cnd7rnQ = ! Is.empty(component.bug.assignee);
this.setState('stPZVPd', cnd7rnQ);
if (cnd7rnQ) { 
let elAwfLg = eo('div','QHzf',null,`class`,`simple-card mt-2`);
let elA169w = eo('h2','Vd5f',null,`class`,`text-center`);
text(`Assigned To`);
ec('h2');
for (let i in component.bug.assignee) {
let member = component.bug.assignee[i]; 
 let ii6q8O = 'IG1UEKy' + i;
let elU5REO = eo('div','Vc6HKGfPeQDX' + i+ii6q8O,null,`class`,`m-t-1`);
let elAu0ua = ev('img','XnVff'+ii6q8O,null, 'style', {width:'60px',height:'60px'},`src`,`${member.image}`,`class`,`rounded-circle`,`title`,`${member.name}`,`alt`,`${member.name}`);
let elB6AKz = eo('strong','a33ff'+ii6q8O,null,`class`,`ml-3 teal-text`);
text(member.name);
ec('strong');
ec('div');
}
ec('div');
}let cndNoOZ = component.bugStatusCanBeChanged();
this.setState('stThH5y', cndNoOZ);
if (cndNoOZ) { 
let elONRnl = eo('div','nmUf',null,`class`,`simple-card mt-2`);
let elreZJQ = eo('h2','Xx0f',null,`class`,`text-center m-b-1`);
text(`Bug Status`);
ec('h2');
let cndYo4Y = component.bug.status == 'fixed' && Object.get(component.project.currentSprint, 'id', '') && Object.get(component.bug.sprint, 'id', '') && Object.get(component.bug.sprint, 'id', '') == Object.get(component.project.currentSprint, 'id', '');
this.setState('stBJHrX', cndYo4Y);
let cnd0MMY = !(cndYo4Y);
this.setState('st0Lbpi', cnd0MMY);
if (cndYo4Y) { 
let elyoSW2 = eo('div','BPkf',null,`class`,`red-text text-center bold`);
text(`Can not retest bug in same project sprint.`);
ec('div');
}else { 
let cmpSH2b = this._lc('c3IcrFVc8', {parent:component,parentTop:projectLayout,props:{value:component.bug.status,items:component.getProperStatuses()},events:{onselect:function(e) {let $el = this; component.oldStatus = component.bug.status; component.confirmStatusChange = e.value != component.bug.status; component.newStatus = e.value}},attrs:{heading:'Change Bug Status'},state:'st0Lbpi'});
}ec('div');
}ec('div');
ec('div');
}}});
let cndvsD8 = component.confirmStatusChange;
this.setState('stsFQNg', cndvsD8);
if (cndvsD8) { 
let cmpxHa1 = this._lc('c3KsHrrvp', {parent:component,props:{withInput:component.isRequiringValue(),message:component.getConfirmingMessage(),required:component.isRequiringValue()},events:{onclose:function(e) {let $el = this; component.confirmStatusChange = null;},onconfirm:function(e) {let $el = this; component.updateStatus(e)}},state:'stsFQNg'});
}let cndtA7_ = component.editBug;
this.setState('stTHReJ', cndtA7_);
if (cndtA7_) { 
let cmpmXqJ = this._lc('cKvWFJJpn', {parent:component,props:{record:component.bug,project:component.project},events:{onclose:function(e) {let $el = this; component.editBug = null;},onsave:function(e) {let $el = this; component.prepareBug(e)}},state:'stTHReJ'});
}
                    this.isReadyToGo();
                }
        });