_Component({
                selector: 'test-case-page',
                c: 'TestCasePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','testCase','testCaseStatusCanBeChanged','openStatusChangeConfirm','confirmStatusChange','reasonIsRequired','getConfirmingMessage','statusChanger','updateStatus'],
                children: {c5PYL9xIu:'flk-time-ago',cYj5ClC5z:'markdown',cNz35CLFR:'markdown',cAwzOyNt5:'markdown',cxuD9Z_Uq:'markdown',cKNg870NS:'markdown',c3jTpe6DG:'markdown',cVrj0p2_4:'comments',cuhYoX7B5:'flk-time-ago',cdzEv7pTp:'flk-dropdown-list',cIh_6b62n:'project-layout',cvn1ksmxx:'flk-alert'},
                render: function (component) {
                    let cmpx6Qh = this._lc('cIh_6b62n', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elqmZ6Z = eo('div',null,null,`class`,`text-right m-b-1`);
let elxIn1U = eo('a',null,null,`href`,`${URLS.project(component.project, 'test-suits')}`,`class`,`btn bold btn-purple`);
let elDqEuF = eo('i',null,null,`class`,`${fas('arrow-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to
            test suits`);
ec('a');
ec('div');
let cndN6VU = component.testCase;
this.setState('stFKIpT', cndN6VU);
if (cndN6VU) { 
let elkc0hd = eo('div','ccpf',null,`class`,`testCase row`);
let elpIJTY = eo('div','tyvf',null,`class`,`col col-sm-9 order-12 order-sm-1`);
let el1Gk54 = eo('h1','wz3f',null,`class`,`title`);
text('#' + component.testCase.id + ' ' + component.testCase.title);
ec('h1');
let elXXD4R = ev('img','kw1f',null,`src`,`${component.testCase.createdBy.image}`,`class`,`user-image`,`title`,`${component.testCase.createdBy.name}`,`alt`,`${component.testCase.createdBy.name}`);
let elRSqrL = eo('div','YXlf',null,`class`,`d-inline-block`);
let elzM0Qf = eo('div','XuKf');
text(component.testCase.createdBy.name);
ec('div');
let elJDQh_ = eo('div','JmXf');
let cmppHh8 = this._lc('c5PYL9xIu', {parent:component,parentTop:projectLayout,props:{timestamp:component.testCase.createdAt.timestamp},attrs:{class:'ago'},state:'stFKIpT'});
ec('div');
ec('div');
let elp3DMg = eo('div','H5Tf',null,`class`,`simple-card p-1 m-y-1`);
let elB8sYh = eo('div','936f',null,`class`,`result-heading`);
text(`Description`);
ec('div');
let cmp58jp = this._lc('cYj5ClC5z', {parent:component,parentTop:projectLayout,props:{content:component.testCase.description},state:'stFKIpT'});
ec('div');
let elJEFpU = eo('div','EUof',null,`class`,`simple-card p-1 m-y-1`);
let elRldfP = eo('div','0hxf',null,`class`,`result-heading`);
text(`Data`);
ec('div');
let cmp8bfv = this._lc('cNz35CLFR', {parent:component,parentTop:projectLayout,props:{content:component.testCase.data},state:'stFKIpT'});
ec('div');
let cndUFci = component.testCase.preconditions;
this.setState('stTyUY2', cndUFci);
if (cndUFci) { 
let el95dH2 = eo('div','Xcgf',null,`class`,`simple-card p-1 m-y-1`);
let el7sqTw = eo('div','Pkpf',null,`class`,`result-heading`);
text(`Pre Conditions`);
ec('div');
let cmpisTZ = this._lc('cAwzOyNt5', {parent:component,parentTop:projectLayout,props:{content:component.testCase.preconditions},state:'stTyUY2'});
ec('div');
}let cndJ7Ia = ! Is.empty(component.testCase.preConditionsTestCases);
this.setState('stqhiSB', cndJ7Ia);
if (cndJ7Ia) { 
let elNvpV4 = eo('div','_Rqf',null,`class`,`simple-card p-1 m-y-1`);
let elcSO7x = eo('div','HGKf',null,`class`,`result-heading`);
text(`Pre Conditions (Test Cases)`);
ec('div');
for (let i in component.testCase.preConditionsTestCases) {
let testCase = component.testCase.preConditionsTestCases[i]; 
 let iigD_k = 't0eYKc3' + i;
let el4I7PA = eo('a','kD0_PGDn6J9d' + i+iigD_k,null,`href`,`${URLS.project(component.project, 'test-cases', testCase)}`,`class`,`btn bold btn-sm btn-pink`);
text(testCase.title);
ec('a');
}
ec('div');
}let cndp2VB = component.testCase.postConditions;
this.setState('st3MSmT', cndp2VB);
if (cndp2VB) { 
let elxfRt9 = eo('div','u1hf',null,`class`,`simple-card p-1 m-y-1`);
let elJ9fu_ = eo('div','gQSf',null,`class`,`result-heading`);
text(`Post Conditions`);
ec('div');
let cmpwWDg = this._lc('cxuD9Z_Uq', {parent:component,parentTop:projectLayout,props:{content:component.testCase.postConditions},state:'st3MSmT'});
ec('div');
}let el1Rspn = eo('div',null,null,`class`,`simple-card p-1 m-b-1`);
let el1aUKL = eo('div',null,null,`class`,`result-heading`);
text(`Steps To Reproduce`);
ec('div');
let el6zPYU = eo('ol',null,null,`class`,`steps-list`);
for (let i in component.testCase.stepsToReproduce.split('\n')) {
let step = component.testCase.stepsToReproduce.split('\n')[i]; 
 let iir06s = '5q6CI1E' + i;
let elPlVu4 = eo('li','gc74tuaR26Ea' + i+iir06s);
text(step);
ec('li');
}
ec('ol');
ec('div');
let elK3jAC = eo('div',null,null,`class`,`simple-card p-1 m-b-1`);
let elx4Jmj = eo('div',null,null,`class`,`result-heading`);
text(`Expected Result`);
ec('div');
let cmpyVQV = this._lc('cKNg870NS', {parent:component,parentTop:projectLayout,props:{content:component.testCase.expectedBehavior}});
ec('div');
let elRSj1r = eo('div',null,null,`class`,`simple-card p-1 m-b-1`);
let elFHTQz = eo('div',null,null,`class`,`result-heading`);
text(`Actual Result`);
ec('div');
let cmpVd29 = this._lc('c3jTpe6DG', {parent:component,parentTop:projectLayout,props:{content:component.testCase.actualResult}});
ec('div');
let cmpcBvG = this._lc('cVrj0p2_4', {parent:component,parentTop:projectLayout,props:{project:component.project,comments:component.testCase.comments,typeId:component.testCase.id},attrs:{type:'testCase'}});
let elGGlz2 = eo('h3',null,null,`class`,`bold m-t-2 m-b-1`);
text(`Test Case Status Change Log`);
ec('h3');
let elhyDKj = eo('table',null,null,`class`,`table table-bordered`);
let elblt2O = eo('thead');
let elf1XOx = eo('tr');
let elNBBsO = eo('th');
text(`Status`);
ec('th');
let elKTDNC = eo('th');
text(`Created By`);
ec('th');
let elwo4T4 = eo('th');
text(`Created`);
ec('th');
let elbkeVR = eo('th');
text(`Extra`);
ec('th');
ec('tr');
ec('thead');
let elYGNqx = eo('tbody');
for (let i in component.testCase.statuses) {
let status = component.testCase.statuses[i]; 
 let iitIpH = 'N5oLZEB' + i;
let el6SVph = eo('tr','6IVlMQQnm7wC' + i+iitIpH);
let elYWyZ9 = eo('td','cboff'+iitIpH);
text(status.status.capitalize());
ec('td');
let eloaR9q = eo('td','md0ff'+iitIpH);
text(status.createdBy.name);
ec('td');
let elv56YJ = eo('td','492ff'+iitIpH);
let cmpvicD = this._lc('cuhYoX7B5', {parent:component,parentTop:projectLayout,props:{timestamp:status.createdAt.timestamp},insideLoop:true,index:"" +iitIpH});
ec('td');
let elCl6mf = eo('td','Cx1ff'+iitIpH);
let cndRb1i = status.reason;
this.setState('st8p1CB', cndRb1i);
if (cndRb1i) { 
let el940AF = eo('strong','7wwff'+iitIpH);
text(status.reason);
ec('strong');
}let cnd3Zp2 = Object.get(status.bug, 'id', '');
this.setState('stdxmUY', cnd3Zp2);
if (cnd3Zp2) { 
let eltjzsS = eo('a','eQuff'+iitIpH,null,`href`,`${URLS.project(component.project, 'bugs', status.bug)}`);
text(`Bug #${ status.bug.id }`);
ec('a');
}ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
let elL2YSL = eo('div',null,null,`class`,`col col-sm-3 order-1`);
let elpwz7E = eo('div',null,null,`class`,`simple-card`);
let elFNqAT = eo('h2',null,null,`class`,`text-center`);
text(`Test Case Information`);
ec('h2');
let elWID4n = eo('table',null,null,`class`,`table m-t-2`);
let elpegH5 = eo('tbody');
let elE_nYR = eo('tr');
let elYO9dH = eo('td');
text(`Type`);
ec('td');
let el3DgUS = eo('th',null,null,`class`,`bold ${ component.testCase.type } text-capitalize`);
el3DgUS.cls = {'green-text': component.testCase.type == 'positive', 'red-text': component.testCase.type == 'negative'};

            for (let className in el3DgUS.cls) {
                el3DgUS.classList.toggle(className, el3DgUS.cls[className]);
            }  
            text(component.testCase.type);
ec('th');
ec('tr');
let cndN5DQ = component.testCase.status;
this.setState('stmnLu_', cndN5DQ);
if (cndN5DQ) { 
let elFXB4H = eo('tr','vDwf');
let elwKc6W = eo('td','sY0f');
text(`Status`);
ec('td');
let elg86Or = eo('th','he6f',null,`class`,`bold status ${ component.testCase.status } text-capitalize`);
elg86Or.cls = {'orange-text': component.testCase.status == 'blocked', 'green-text': component.testCase.status == 'passed', 'red-text': component.testCase.status == 'failed'};

            for (let className in elg86Or.cls) {
                elg86Or.classList.toggle(className, elg86Or.cls[className]);
            }  
            text(component.testCase.status);
ec('th');
ec('tr');
}let elIhDJv = eo('tr');
let elUMfS7 = eo('td');
text(`Priority`);
ec('td');
let elvupai = eo('th',null,null,`class`,`bold priority ${ component.testCase.priority }`);
text(component.testCase.priority);
ec('th');
ec('tr');
let cndWO8f = component.testCase.status == 'failed';
this.setState('strAZvh', cndWO8f);
if (cndWO8f) { 
let elKUqEc = eo('tr','e_gf');
let elydsss = eo('td','GDvf');
text(`Bug`);
ec('td');
let elGRuFX = eo('th','glmf');
let el3uNlR = eo('a','__df',null,`href`,`${URLS.project(component.project, 'bugs', component.testCase.bug)}`);
text('#' + component.testCase.bug.id);
ec('a');
ec('th');
ec('tr');
}let elRaWi_ = eo('tr');
let elRgA9N = eo('td');
text(`Test Suit`);
ec('td');
let elNbKl2 = eo('th');
text(component.testCase.testSuit.name);
ec('th');
ec('tr');
let cndW5EX = component.testCase.attachment;
this.setState('stxxl37', cndW5EX);
if (cndW5EX) { 
let elmXriV = eo('tr','Iwrf');
let el9SqAE = eo('td','6bNf');
text(`Automation File`);
ec('td');
let elor4Ks = eo('th','lC8f');
let elvBf1X = eo('a','z6Yf',null,`href`,`${component.testCase.attachment}`,`class`,`btn btn-sm btn-bold btn-pink`,`target`,`_blank`);
let elsJE1f = eo('i','BuIf',null,`class`,`${fas('cloud-download-alt') + ' mr-2 icon'}`);
ec('i');
text(`Download`);
ec('a');
ec('th');
ec('tr');
}ec('tbody');
ec('table');
ec('div');
let cndV_Gy = component.testCaseStatusCanBeChanged;
this.setState('stBgrMn', cndV_Gy);
if (cndV_Gy) { 
let el3oqAQ = eo('div','m6Zf',null,`class`,`simple-card mt-2`);
let elQSfkY = eo('h2','0O_f',null,`class`,`text-center m-b-1`);
text(`Test Case Status`);
ec('h2');
component.statusChanger = this._lc('cdzEv7pTp', {parent:component,parentTop:projectLayout,props:{value:component.testCase.status,items:['passed', 'failed', 'blocked', 'dead']},events:{onselect:function(e) {let $el = this; component.openStatusChangeConfirm(e.value)}},attrs:{heading:'Change test case Status'},state:'stBgrMn'});
ec('div');
}ec('div');
ec('div');
}}});
let cndVtMj = component.confirmStatusChange;
this.setState('st7mfpp', cndVtMj);
if (cndVtMj) { 
let cmpankf = this._lc('cvn1ksmxx', {parent:component,props:{withInput:component.reasonIsRequired,message:component.getConfirmingMessage(),required:component.reasonIsRequired},events:{onclose:function(e) {let $el = this; component.statusChanger.currentValue = component.testCase.status; component.confirmStatusChange = null},onconfirm:function(e) {let $el = this; component.updateStatus(e)}},state:'st7mfpp'});
}
                    this.isReadyToGo();
                }
        });