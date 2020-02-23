_Component({
                selector: 'test-case-page',
                c: 'TestCasePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','testCase','testCaseStatusCanBeChanged','openStatusChangeConfirm','confirmStatusChange','reasonIsRequired','getConfirmingMessage','statusChanger','updateStatus'],
                children: {c5Ma2EOb_:'flk-time-ago',cw65IX5Ap:'markdown',cd7Wh87Pp:'markdown',cNqBsK53H:'markdown',c91BlIO8F:'markdown',crw3w5fnQ:'markdown',cY0zSvwjH:'markdown',crVfbYk5m:'comments',ccjenoxK7:'flk-time-ago',c8htCWUzu:'flk-dropdown-list',cZCdLpK2f:'project-layout',c0LXBBV0k:'flk-alert'},
                render: function (component) {
                    let cmp9U7d = this._lc('cZCdLpK2f', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elRS1el = eo('div',null,null,`class`,`text-right m-b-1`);
let elo3VLb = eo('a',null,null,`href`,`${URLS.project(component.project, 'test-suits')}`,`class`,`btn bold btn-purple`);
let elxjERw = eo('i',null,null,`class`,`${fas('arrow-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to
            test suits`);
ec('a');
ec('div');
let cnddg_y = component.testCase;
this.setState('st34SQA', cnddg_y);
if (cnddg_y) { 
let elQMPlC = eo('div','P7xf',null,`class`,`testCase row`);
let elr9rTR = eo('div','5gQf',null,`class`,`col col-sm-9 order-12 order-sm-1`);
let elCuacR = eo('h1','tL5f',null,`class`,`title`);
text('#' + component.testCase.id + ' ' + component.testCase.title);
ec('h1');
let eleG7NZ = ev('img','C3ef',null,`src`,`${component.testCase.createdBy.image}`,`class`,`user-image`,`title`,`${component.testCase.createdBy.name}`,`alt`,`${component.testCase.createdBy.name}`);
let elkkcRk = eo('div','Oi0f',null,`class`,`d-inline-block`);
let elc08GL = eo('div','uVUf');
text(component.testCase.createdBy.name);
ec('div');
let elLxhBX = eo('div','y6uf');
let cmpF7XY = this._lc('c5Ma2EOb_', {parent:component,parentTop:projectLayout,props:{timestamp:component.testCase.createdAt.timestamp},attrs:{class:'ago'},state:'st34SQA'});
ec('div');
ec('div');
let elMVftc = eo('div','pa_f',null,`class`,`simple-card p-1 m-y-1`);
let eltnH8D = eo('div','vehf',null,`class`,`result-heading`);
text(`Description`);
ec('div');
let cmpSW1P = this._lc('cw65IX5Ap', {parent:component,parentTop:projectLayout,props:{content:component.testCase.description},state:'st34SQA'});
ec('div');
let elLpM6j = eo('div','HsLf',null,`class`,`simple-card p-1 m-y-1`);
let el9e3JR = eo('div','5Ljf',null,`class`,`result-heading`);
text(`Data`);
ec('div');
let cmpAMID = this._lc('cd7Wh87Pp', {parent:component,parentTop:projectLayout,props:{content:component.testCase.data},state:'st34SQA'});
ec('div');
let cnd0sE1 = component.testCase.preconditions;
this.setState('stkwyw2', cnd0sE1);
if (cnd0sE1) { 
let el6CIIn = eo('div','kZgf',null,`class`,`simple-card p-1 m-y-1`);
let eloVhTg = eo('div','Wxff',null,`class`,`result-heading`);
text(`Pre Conditions`);
ec('div');
let cmpkcs_ = this._lc('cNqBsK53H', {parent:component,parentTop:projectLayout,props:{content:component.testCase.preconditions},state:'stkwyw2'});
ec('div');
}let cndX_aS = ! Is.empty(component.testCase.preConditionsTestCases);
this.setState('stXhrCL', cndX_aS);
if (cndX_aS) { 
let elcp1t6 = eo('div','pFSf',null,`class`,`simple-card p-1 m-y-1`);
let elCs6Dj = eo('div','dcTf',null,`class`,`result-heading`);
text(`Pre Conditions (Test Cases)`);
ec('div');
for (let i in component.testCase.preConditionsTestCases) {
let testCase = component.testCase.preConditionsTestCases[i]; 
 let iixi0u = 'G4FgDPA' + i;
let elpNCI2 = eo('a','yRBHESb90v1a' + i+iixi0u,null,`href`,`${URLS.project(component.project, 'test-cases', testCase)}`,`class`,`btn bold btn-sm btn-pink`);
text(testCase.title);
ec('a');
}
ec('div');
}let cndqcgX = component.testCase.postConditions;
this.setState('stLddUj', cndqcgX);
if (cndqcgX) { 
let elh2zVe = eo('div','Nryf',null,`class`,`simple-card p-1 m-y-1`);
let elox3oS = eo('div','6Atf',null,`class`,`result-heading`);
text(`Post Conditions`);
ec('div');
let cmpaCx9 = this._lc('c91BlIO8F', {parent:component,parentTop:projectLayout,props:{content:component.testCase.postConditions},state:'stLddUj'});
ec('div');
}let elv9nRz = eo('div',null,null,`class`,`simple-card p-1 m-b-1`);
let elxAbYa = eo('div',null,null,`class`,`result-heading`);
text(`Steps To Reproduce`);
ec('div');
let elOeVml = eo('ol',null,null,`class`,`steps-list`);
for (let i in component.testCase.stepsToReproduce.split('\n')) {
let step = component.testCase.stepsToReproduce.split('\n')[i]; 
 let iiJwcM = 'Fz3zgfe' + i;
let elbK4mt = eo('li','YV4k3acaGp9m' + i+iiJwcM);
text(step);
ec('li');
}
ec('ol');
ec('div');
let elni8A1 = eo('div',null,null,`class`,`simple-card p-1 m-b-1`);
let el9NUIJ = eo('div',null,null,`class`,`result-heading`);
text(`Expected Result`);
ec('div');
let cmpYROX = this._lc('crw3w5fnQ', {parent:component,parentTop:projectLayout,props:{content:component.testCase.expectedBehavior}});
ec('div');
let el8hw4H = eo('div',null,null,`class`,`simple-card p-1 m-b-1`);
let el5WPCx = eo('div',null,null,`class`,`result-heading`);
text(`Actual Result`);
ec('div');
let cmp7vcg = this._lc('cY0zSvwjH', {parent:component,parentTop:projectLayout,props:{content:component.testCase.actualResult}});
ec('div');
let cmpDfNR = this._lc('crVfbYk5m', {parent:component,parentTop:projectLayout,props:{project:component.project,comments:component.testCase.comments,typeId:component.testCase.id},attrs:{type:'testCase'}});
let elYlo1z = eo('h3',null,null,`class`,`bold m-t-2 m-b-1`);
text(`Test Case Status Change Log`);
ec('h3');
let elGDBdK = eo('table',null,null,`class`,`table table-bordered`);
let elJnKLK = eo('thead');
let elsCEZt = eo('tr');
let ell07zE = eo('th');
text(`Status`);
ec('th');
let el1x6ix = eo('th');
text(`Created By`);
ec('th');
let elDKjbn = eo('th');
text(`Created`);
ec('th');
let elwAspt = eo('th');
text(`Extra`);
ec('th');
ec('tr');
ec('thead');
let elR9sJQ = eo('tbody');
for (let i in component.testCase.statuses) {
let status = component.testCase.statuses[i]; 
 let iiKQin = '4sPlQ3G' + i;
let el3Vdge = eo('tr','Dqd1WYBpXdYb' + i+iiKQin);
let elS6eFZ = eo('td','YQEff'+iiKQin);
text(status.status.capitalize());
ec('td');
let elunAYr = eo('td','UWWff'+iiKQin);
text(status.createdBy.name);
ec('td');
let elVmxA5 = eo('td','A4Yff'+iiKQin);
let cmpo_WR = this._lc('ccjenoxK7', {parent:component,parentTop:projectLayout,props:{timestamp:status.createdAt.timestamp},insideLoop:true,index:"" +iiKQin});
ec('td');
let el1tDKt = eo('td','Yxmff'+iiKQin);
let cnd30U4 = status.reason;
this.setState('stL1bnL', cnd30U4);
if (cnd30U4) { 
let elcNtz6 = eo('strong','ddiff'+iiKQin);
text(status.reason);
ec('strong');
}let cndmPN7 = Object.get(status.bug, 'id', '');
this.setState('stNtE03', cndmPN7);
if (cndmPN7) { 
let el6kPwg = eo('a','GrNff'+iiKQin,null,`href`,`${URLS.project(component.project, 'bugs', status.bug)}`);
text(`Bug #${ status.bug.id }`);
ec('a');
}ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
let eloo2Mz = eo('div',null,null,`class`,`col col-sm-3 order-1`);
let elQiDFd = eo('div',null,null,`class`,`simple-card`);
let el10scx = eo('h2',null,null,`class`,`text-center`);
text(`Test Case Information`);
ec('h2');
let elgu7yI = eo('table',null,null,`class`,`table m-t-2`);
let eli2_2e = eo('tbody');
let elsHrYf = eo('tr');
let elx9tEx = eo('td');
text(`Type`);
ec('td');
let elkQGfn = eo('th',null,null,`class`,`bold ${ component.testCase.type } text-capitalize`);
elkQGfn.cls = {'green-text': component.testCase.type == 'positive', 'red-text': component.testCase.type == 'negative'};

            for (let className in elkQGfn.cls) {
                elkQGfn.classList.toggle(className, elkQGfn.cls[className]);
            }  
            text(component.testCase.type);
ec('th');
ec('tr');
let cndtsv7 = component.testCase.status;
this.setState('stnEKIT', cndtsv7);
if (cndtsv7) { 
let elfx9Il = eo('tr','z4Zf');
let ellUfbe = eo('td','iMqf');
text(`Status`);
ec('td');
let elNxerh = eo('th','yuIf',null,`class`,`bold status ${ component.testCase.status } text-capitalize`);
elNxerh.cls = {'orange-text': component.testCase.status == 'blocked', 'green-text': component.testCase.status == 'passed', 'red-text': component.testCase.status == 'failed'};

            for (let className in elNxerh.cls) {
                elNxerh.classList.toggle(className, elNxerh.cls[className]);
            }  
            text(component.testCase.status);
ec('th');
ec('tr');
}let elfTHWZ = eo('tr');
let eluPb3g = eo('td');
text(`Priority`);
ec('td');
let elQLUIj = eo('th',null,null,`class`,`bold priority ${ component.testCase.priority }`);
text(component.testCase.priority);
ec('th');
ec('tr');
let cndshb2 = component.testCase.status == 'failed';
this.setState('stOnHpo', cndshb2);
if (cndshb2) { 
let elPwzhS = eo('tr','HdMf');
let elMkNhE = eo('td','hblf');
text(`Bug`);
ec('td');
let elxnShq = eo('th','WaYf');
let el5ZyUP = eo('a','ek5f',null,`href`,`${URLS.project(component.project, 'bugs', component.testCase.bug)}`);
text('#' + component.testCase.bug.id);
ec('a');
ec('th');
ec('tr');
}let elBcJRv = eo('tr');
let elc48ds = eo('td');
text(`Test Suit`);
ec('td');
let elg9Kpn = eo('th');
text(component.testCase.testSuit.name);
ec('th');
ec('tr');
let cndHEyr = component.testCase.attachment;
this.setState('stpOsXj', cndHEyr);
if (cndHEyr) { 
let el3_QU2 = eo('tr','LoAf');
let elMaFGa = eo('td','SZLf');
text(`Automation File`);
ec('td');
let elUeve2 = eo('th','Qpof');
let elox253 = eo('a','ckff',null,`href`,`${component.testCase.attachment}`,`class`,`btn btn-sm btn-bold btn-pink`,`target`,`_blank`);
let eleeN7R = eo('i','Td2f',null,`class`,`${fas('cloud-download-alt') + ' mr-2 icon'}`);
ec('i');
text(`Download`);
ec('a');
ec('th');
ec('tr');
}ec('tbody');
ec('table');
ec('div');
let cndGbIH = component.testCaseStatusCanBeChanged;
this.setState('stw3Kje', cndGbIH);
if (cndGbIH) { 
let elt6DCg = eo('div','loFf',null,`class`,`simple-card mt-2`);
let elJIG47 = eo('h2','rigf',null,`class`,`text-center m-b-1`);
text(`Test Case Status`);
ec('h2');
component.statusChanger = this._lc('c8htCWUzu', {parent:component,parentTop:projectLayout,props:{value:component.testCase.status,items:['passed', 'failed', 'blocked', 'dead']},events:{onselect:function(e) {let $el = this; component.openStatusChangeConfirm(e.value)}},attrs:{heading:'Change test case Status'},state:'stw3Kje'});
ec('div');
}ec('div');
ec('div');
}}});
let cndpfkb = component.confirmStatusChange;
this.setState('stBvow1', cndpfkb);
if (cndpfkb) { 
let cmpR7iP = this._lc('c0LXBBV0k', {parent:component,props:{withInput:component.reasonIsRequired,message:component.getConfirmingMessage(),required:component.reasonIsRequired},events:{onclose:function(e) {let $el = this; component.statusChanger.currentValue = component.testCase.status; component.confirmStatusChange = null},onconfirm:function(e) {let $el = this; component.updateStatus(e)}},state:'stBvow1'});
}
                    this.isReadyToGo();
                }
        });