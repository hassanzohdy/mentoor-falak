_Component({
                selector: 'test-case-page',
                c: 'TestCasePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','testCase','testCaseStatusCanBeChanged','openStatusChangeConfirm','confirmStatusChange','reasonIsRequired','getConfirmingMessage','statusChanger','updateStatus'],
                children: {c7dcv68kH:'flk-time-ago',cMMN0yiv6:'markdown',cTUhLs2fT:'markdown',cr0Sj5QOb:'markdown',cqj44vsEv:'markdown',cyMl0wLoZ:'markdown',cUNNcG13E:'markdown',cVkrbtYBZ:'comments',c81JKpqLb:'flk-time-ago',c3B8QY4oR:'flk-dropdown-list',c0F4OH3Fr:'project-layout',cLfS0YcSl:'flk-alert'},
                render: function (component) {
                    let cmpTuJO = this._lc('c0F4OH3Fr', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let ellvXE7 = eo('div',null,null,`class`,`text-right m-b-1`);
let elSFst3 = eo('a',null,null,`href`,`${URLS.project(component.project, 'test-suits')}`,`class`,`btn bold btn-purple`);
let elzPadL = eo('i',null,null,`class`,`${fas('arrow-left')} mr-2 icon`);
ec('i');
text(`Back to
            test suits`);
ec('a');
ec('div');
let cnd_Wfl = component.testCase;
this.setState('st6fEpK', cnd_Wfl);
if (cnd_Wfl) { 
let elIkD3L = eo('div','2xTf',null,`class`,`testCase row`);
let elpnZBS = eo('div','Dulf',null,`class`,`col col-sm-9 order-12 order-sm-1`);
let elrMJ13 = eo('h1','92Rf',null,`class`,`title`);
text('#' + component.testCase.id + ' ' + component.testCase.title);
ec('h1');
let el8bKNz = ev('img','sUyf',null,`src`,`${component.testCase.createdBy.image}`,`class`,`user-image`,`title`,`${component.testCase.createdBy.name}`,`alt`,`${component.testCase.createdBy.name}`);
let elIzFRR = eo('div','IFDf',null,`class`,`d-inline-block`);
let eln9Txi = eo('div','Qj1f');
text(component.testCase.createdBy.name);
ec('div');
let elJlfSL = eo('div','SXYf');
let cmpo6d8 = this._lc('c7dcv68kH', {parent:component,parentTop:projectLayout,props:{timestamp:component.testCase.createdAt.timestamp},attrs:{class:'ago'},state:'st6fEpK'});
ec('div');
ec('div');
let el98_Ie = eo('div','nbef',null,`class`,`simple-card p-1 m-y-1`);
let elChjpr = eo('div','_gvf',null,`class`,`result-heading`);
text(`Description`);
ec('div');
let cmpktSf = this._lc('cMMN0yiv6', {parent:component,parentTop:projectLayout,props:{content:component.testCase.description},state:'st6fEpK'});
ec('div');
let elYkN4d = eo('div','Jcsf',null,`class`,`simple-card p-1 m-y-1`);
let elnZDbP = eo('div','kqef',null,`class`,`result-heading`);
text(`Data`);
ec('div');
let cmpU4ud = this._lc('cTUhLs2fT', {parent:component,parentTop:projectLayout,props:{content:component.testCase.data},state:'st6fEpK'});
ec('div');
let cndSaoa = component.testCase.preconditions;
this.setState('stRtH3e', cndSaoa);
if (cndSaoa) { 
let elaVl61 = eo('div','dvDf',null,`class`,`simple-card p-1 m-y-1`);
let eldaeXU = eo('div','sLXf',null,`class`,`result-heading`);
text(`Pre Conditions`);
ec('div');
let cmpmumL = this._lc('cr0Sj5QOb', {parent:component,parentTop:projectLayout,props:{content:component.testCase.preconditions},state:'stRtH3e'});
ec('div');
}let cnd4A5t = ! Is.empty(component.testCase.preConditionsTestCases);
this.setState('stEz86I', cnd4A5t);
if (cnd4A5t) { 
let elqFGl9 = eo('div','D5Of',null,`class`,`simple-card p-1 m-y-1`);
let el4hR8s = eo('div','K1pf',null,`class`,`result-heading`);
text(`Pre Conditions (Test Cases)`);
ec('div');
for (let i in component.testCase.preConditionsTestCases) {
let testCase = component.testCase.preConditionsTestCases[i]; 
 let iigLRY = 'qbu3_4d' + i;
let elrmisg = eo('a','MdPKefQMqjrN' + i+iigLRY,null,`href`,`${URLS.project(component.project, 'test-cases', testCase)}`,`class`,`btn bold btn-sm btn-pink`);
text(testCase.title);
ec('a');
}
ec('div');
}let cndl4NG = component.testCase.postConditions;
this.setState('stvjGpy', cndl4NG);
if (cndl4NG) { 
let elU8fdU = eo('div','Traf',null,`class`,`simple-card p-1 m-y-1`);
let elWZDtF = eo('div','KQLf',null,`class`,`result-heading`);
text(`Post Conditions`);
ec('div');
let cmpr0oV = this._lc('cqj44vsEv', {parent:component,parentTop:projectLayout,props:{content:component.testCase.postConditions},state:'stvjGpy'});
ec('div');
}let elbe2Sa = eo('div',null,null,`class`,`simple-card p-1 m-b-1`);
let elxjPvn = eo('div',null,null,`class`,`result-heading`);
text(`Steps To Reproduce`);
ec('div');
let elykZ3G = eo('ol',null,null,`class`,`steps-list`);
for (let i in component.testCase.stepsToReproduce.split('\n')) {
let step = component.testCase.stepsToReproduce.split('\n')[i]; 
 let iiqukR = '3hKwygX' + i;
let elmBuOJ = eo('li','hlYGJUOT3Ki7' + i+iiqukR);
text(step);
ec('li');
}
ec('ol');
ec('div');
let elXvCYe = eo('div',null,null,`class`,`simple-card p-1 m-b-1`);
let elB4RVt = eo('div',null,null,`class`,`result-heading`);
text(`Expected Result`);
ec('div');
let cmpxhEh = this._lc('cyMl0wLoZ', {parent:component,parentTop:projectLayout,props:{content:component.testCase.expectedBehavior}});
ec('div');
let el1pLJo = eo('div',null,null,`class`,`simple-card p-1 m-b-1`);
let eln3ZyV = eo('div',null,null,`class`,`result-heading`);
text(`Actual Result`);
ec('div');
let cmpXTAW = this._lc('cUNNcG13E', {parent:component,parentTop:projectLayout,props:{content:component.testCase.actualResult}});
ec('div');
let cmpJdEw = this._lc('cVkrbtYBZ', {parent:component,parentTop:projectLayout,props:{project:component.project,comments:component.testCase.comments,typeId:component.testCase.id},attrs:{type:'testCase'}});
let elUG0Zm = eo('h3',null,null,`class`,`bold m-t-2 m-b-1`);
text(`Test Case Status Change Log`);
ec('h3');
let elSWAwW = eo('table',null,null,`class`,`table table-bordered`);
let elmcpY2 = eo('thead');
let elTQRm5 = eo('tr');
let elF7OBr = eo('th');
text(`Status`);
ec('th');
let elBmzyi = eo('th');
text(`Created By`);
ec('th');
let elusXRB = eo('th');
text(`Created`);
ec('th');
let elERAv_ = eo('th');
text(`Extra`);
ec('th');
ec('tr');
ec('thead');
let elEeWhT = eo('tbody');
for (let i in component.testCase.statuses) {
let status = component.testCase.statuses[i]; 
 let iiSwhs = 'ZJZD_8W' + i;
let eldAr_y = eo('tr','73MOm8P8hZvr' + i+iiSwhs);
let elpMF5H = eo('td','aKyff'+iiSwhs);
text(status.status.capitalize());
ec('td');
let elg5JGR = eo('td','1qRff'+iiSwhs);
text(status.createdBy.name);
ec('td');
let elW3kwQ = eo('td','Zcuff'+iiSwhs);
let cmpsX9x = this._lc('c81JKpqLb', {parent:component,parentTop:projectLayout,props:{timestamp:status.createdAt.timestamp},insideLoop:true,index:"" +iiSwhs});
ec('td');
let elgEKOs = eo('td','hgAff'+iiSwhs);
let cndKTN8 = status.reason;
this.setState('stpAkRl', cndKTN8);
if (cndKTN8) { 
let elcPiR4 = eo('strong','Mefff'+iiSwhs);
text(status.reason);
ec('strong');
}let cnd6P_9 = Object.get(status.bug, 'id', '');
this.setState('stdtZDj', cnd6P_9);
if (cnd6P_9) { 
let elhx7iE = eo('a','3Dmff'+iiSwhs,null,`href`,`${URLS.project(component.project, 'bugs', status.bug)}`);
text(`Bug #${ status.bug.id }`);
ec('a');
}ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
let elaXMTg = eo('div',null,null,`class`,`col col-sm-3 order-1`);
let el3sesO = eo('div',null,null,`class`,`simple-card`);
let el3y2DG = eo('h2',null,null,`class`,`text-center`);
text(`Test Case Information`);
ec('h2');
let elcucVy = eo('table',null,null,`class`,`table m-t-2`);
let elKvvpt = eo('tbody');
let elatGl3 = eo('tr');
let el2aeHf = eo('td');
text(`Type`);
ec('td');
let eloW8lg = eo('th',null,null,`class`,`bold ${ component.testCase.type } text-capitalize ${cls({'green-text': component.testCase.type == 'positive', 'red-text': component.testCase.type == 'negative'})}`);
text(component.testCase.type);
ec('th');
ec('tr');
let cndZ553 = component.testCase.status;
this.setState('sthMqZs', cndZ553);
if (cndZ553) { 
let elwmgGO = eo('tr','uz4f');
let el_SGkM = eo('td','ydJf');
text(`Status`);
ec('td');
let el8BwyJ = eo('th','jahf',null,`class`,`bold status ${ component.testCase.status } text-capitalize ${cls({'orange-text': component.testCase.status == 'blocked', 'green-text': component.testCase.status == 'passed', 'red-text': component.testCase.status == 'failed'})}`);
text(component.testCase.status);
ec('th');
ec('tr');
}let elX8BPf = eo('tr');
let elBHqu8 = eo('td');
text(`Priority`);
ec('td');
let elpCyAn = eo('th',null,null,`class`,`bold priority ${ component.testCase.priority }`);
text(component.testCase.priority);
ec('th');
ec('tr');
let cnd18kO = component.testCase.status == 'failed';
this.setState('stMvU2F', cnd18kO);
if (cnd18kO) { 
let elXe4n2 = eo('tr','sXQf');
let elQ_euq = eo('td','0Ryf');
text(`Bug`);
ec('td');
let elRnEHb = eo('th','prbf');
let ellWBzt = eo('a','vH0f',null,`href`,`${URLS.project(component.project, 'bugs', component.testCase.bug)}`);
text('#' + component.testCase.bug.id);
ec('a');
ec('th');
ec('tr');
}let elw1s8B = eo('tr');
let ellrbFO = eo('td');
text(`Test Suit`);
ec('td');
let elNMhwP = eo('th');
text(component.testCase.testSuit.name);
ec('th');
ec('tr');
let cnd__Wb = component.testCase.attachment;
this.setState('stYXbLx', cnd__Wb);
if (cnd__Wb) { 
let elUNszt = eo('tr','X7af');
let elOHqcd = eo('td','Nerf');
text(`Automation File`);
ec('td');
let el1rqEV = eo('th','rSmf');
let elp5_TS = eo('a','Ahkf',null,`href`,`${component.testCase.attachment}`,`class`,`btn btn-sm btn-bold btn-pink`,`target`,`_blank`);
let elUdHC0 = eo('i','p1sf',null,`class`,`${fas('cloud-download-alt')} mr-2 icon`);
ec('i');
text(`Download`);
ec('a');
ec('th');
ec('tr');
}ec('tbody');
ec('table');
ec('div');
let cndD1_G = component.testCaseStatusCanBeChanged;
this.setState('stzwkoB', cndD1_G);
if (cndD1_G) { 
let el73igk = eo('div','R5Wf',null,`class`,`simple-card mt-2`);
let elBQLmr = eo('h2','yq5f',null,`class`,`text-center m-b-1`);
text(`Test Case Status`);
ec('h2');
component.statusChanger = this._lc('c3B8QY4oR', {parent:component,parentTop:projectLayout,props:{value:component.testCase.status,items:['passed', 'failed', 'blocked', 'dead']},events:{onselect:function(e) {let $el = this; component.openStatusChangeConfirm(e.value)}},attrs:{heading:'Change test case Status'},state:'stzwkoB'});
ec('div');
}ec('div');
ec('div');
}}});
let cnduP7E = component.confirmStatusChange;
this.setState('stL3fG4', cnduP7E);
if (cnduP7E) { 
let cmpcAA2 = this._lc('cLfS0YcSl', {parent:component,props:{withInput:component.reasonIsRequired,message:component.getConfirmingMessage(),required:component.reasonIsRequired},events:{onclose:function(e) {let $el = this; component.statusChanger.currentValue = component.testCase.status; component.confirmStatusChange = null},onconfirm:function(e) {let $el = this; component.updateStatus(e)}},state:'stL3fG4'});
}
                    this.isReadyToGo();
                }
        });