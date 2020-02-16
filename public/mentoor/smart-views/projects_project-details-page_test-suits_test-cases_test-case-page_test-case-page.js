_Component({
                selector: 'test-case-page',
                c: 'TestCasePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','testCase','testCaseStatusCanBeChanged','openStatusChangeConfirm','confirmStatusChange','reasonIsRequired','getConfirmingMessage','statusChanger','updateStatus'],
                children: {c7n6wp41u:'flk-time-ago',c5nRNtuYI:'markdown',c8jDc0j9U:'markdown',c7rGcxUjn:'markdown',cTWR_NR2c:'markdown',cOVreamaw:'markdown',cnVIjKDCM:'markdown',cykJy_8dI:'comments',csMpl6oBr:'flk-time-ago',cKyJfWNPE:'flk-dropdown-list',c0uFMeU0G:'project-layout',ceDJL0KeP:'flk-alert'},
                render: function (component) {
                    let cmpew8V = this._lc('c0uFMeU0G', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elsJDXB = eo('div',null,null,`class`,`text-right m-b-1`);
let elpZV0D = eo('a',null,null,`href`,`${URLS.project(component.project, 'test-suits')}`,`class`,`btn bold btn-purple`);
let elvuQij = eo('i',null,null,`class`,`${fas('arrow-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to
            test suits`);
ec('a');
ec('div');
let cndxnFG = component.testCase;
this.setState('stvtNRz', cndxnFG);
if (cndxnFG) { 
let elEjsih = eo('div','UFpf',null,`class`,`testCase row`);
let el_mEna = eo('div','osTf',null,`class`,`col col-sm-9 order-12 order-sm-1`);
let elBZwvk = eo('h1','XhMf',null,`class`,`title`);
text('#' + component.testCase.id + ' ' + component.testCase.title);
ec('h1');
let elW6bVr = ev('img','H43f',null,`src`,`${component.testCase.createdBy.image}`,`class`,`user-image`,`title`,`${component.testCase.createdBy.name}`,`alt`,`${component.testCase.createdBy.name}`);
let elL80x2 = eo('div','VO3f',null,`class`,`d-inline-block`);
let elsiQ8n = eo('div','2ccf');
text(component.testCase.createdBy.name);
ec('div');
let elEh5Sv = eo('div','9WLf');
let cmp8nxe = this._lc('c7n6wp41u', {parent:component,parentTop:projectLayout,props:{timestamp:component.testCase.createdAt.timestamp},attrs:{class:'ago'},state:'stvtNRz'});
ec('div');
ec('div');
let elk3aGt = eo('div','FSCf',null,`class`,`simple-card p-1 m-y-1`);
let eldhNjb = eo('div','QUSf',null,`class`,`result-heading`);
text(`Description`);
ec('div');
let cmpR7Wh = this._lc('c5nRNtuYI', {parent:component,parentTop:projectLayout,props:{content:component.testCase.description},state:'stvtNRz'});
ec('div');
let elirYq2 = eo('div','nlwf',null,`class`,`simple-card p-1 m-y-1`);
let elb1USt = eo('div','2Utf',null,`class`,`result-heading`);
text(`Data`);
ec('div');
let cmpyC3_ = this._lc('c8jDc0j9U', {parent:component,parentTop:projectLayout,props:{content:component.testCase.data},state:'stvtNRz'});
ec('div');
let cnd07T7 = component.testCase.preconditions;
this.setState('stZDYMS', cnd07T7);
if (cnd07T7) { 
let elwXJpL = eo('div','KXCf',null,`class`,`simple-card p-1 m-y-1`);
let el3GFFV = eo('div','ljQf',null,`class`,`result-heading`);
text(`Pre Conditions`);
ec('div');
let cmpETlo = this._lc('c7rGcxUjn', {parent:component,parentTop:projectLayout,props:{content:component.testCase.preconditions},state:'stZDYMS'});
ec('div');
}let cnd6IOH = ! Is.empty(component.testCase.preConditionsTestCases);
this.setState('stLfx78', cnd6IOH);
if (cnd6IOH) { 
let elnFUM8 = eo('div','2Cof',null,`class`,`simple-card p-1 m-y-1`);
let elmp6sA = eo('div','FJDf',null,`class`,`result-heading`);
text(`Pre Conditions (Test Cases)`);
ec('div');
for (let i in component.testCase.preConditionsTestCases) {
let testCase = component.testCase.preConditionsTestCases[i]; 
 let iiuUG0 = '2c_e08h' + i;
let elIxlFS = eo('a','CyiIUdwoL1O3' + i+iiuUG0,null,`href`,`${URLS.project(component.project, 'test-cases', testCase)}`,`class`,`btn bold btn-sm btn-pink`);
text(testCase.title);
ec('a');
}
ec('div');
}let cndc5uX = component.testCase.postConditions;
this.setState('stLtBMO', cndc5uX);
if (cndc5uX) { 
let elpaJLN = eo('div','vv4f',null,`class`,`simple-card p-1 m-y-1`);
let elNQe3C = eo('div','opWf',null,`class`,`result-heading`);
text(`Post Conditions`);
ec('div');
let cmpbDFl = this._lc('cTWR_NR2c', {parent:component,parentTop:projectLayout,props:{content:component.testCase.postConditions},state:'stLtBMO'});
ec('div');
}let el3TznK = eo('div',null,null,`class`,`simple-card p-1 m-b-1`);
let eli0niN = eo('div',null,null,`class`,`result-heading`);
text(`Steps To Reproduce`);
ec('div');
let el7_Av2 = eo('ol',null,null,`class`,`steps-list`);
for (let i in component.testCase.stepsToReproduce.split('\n')) {
let step = component.testCase.stepsToReproduce.split('\n')[i]; 
 let iiJHlS = 'IjJEOcq' + i;
let elag3_P = eo('li','J_Vbrke86B6C' + i+iiJHlS);
text(step);
ec('li');
}
ec('ol');
ec('div');
let elJF9sY = eo('div',null,null,`class`,`simple-card p-1 m-b-1`);
let elpCCqB = eo('div',null,null,`class`,`result-heading`);
text(`Expected Result`);
ec('div');
let cmpcbk0 = this._lc('cOVreamaw', {parent:component,parentTop:projectLayout,props:{content:component.testCase.expectedBehavior}});
ec('div');
let elOY2QS = eo('div',null,null,`class`,`simple-card p-1 m-b-1`);
let el4G74Q = eo('div',null,null,`class`,`result-heading`);
text(`Actual Result`);
ec('div');
let cmpYhbH = this._lc('cnVIjKDCM', {parent:component,parentTop:projectLayout,props:{content:component.testCase.actualResult}});
ec('div');
let cmpTxgv = this._lc('cykJy_8dI', {parent:component,parentTop:projectLayout,props:{project:component.project,comments:component.testCase.comments,typeId:component.testCase.id},attrs:{type:'testCase'}});
let elpw5ar = eo('h3',null,null,`class`,`bold m-t-2 m-b-1`);
text(`Test Case Status Change Log`);
ec('h3');
let el9brwy = eo('table',null,null,`class`,`table table-bordered`);
let elaNlCi = eo('thead');
let el6W5oE = eo('tr');
let el6Ts5K = eo('th');
text(`Status`);
ec('th');
let elIP0ti = eo('th');
text(`Created By`);
ec('th');
let elqZDl4 = eo('th');
text(`Created`);
ec('th');
let el4BabE = eo('th');
text(`Extra`);
ec('th');
ec('tr');
ec('thead');
let elnY_hZ = eo('tbody');
for (let i in component.testCase.statuses) {
let status = component.testCase.statuses[i]; 
 let iiWf5s = 'NR1Pfcw' + i;
let el75prS = eo('tr','BPvcOXw5PY6N' + i+iiWf5s);
let elBE6tF = eo('td','uCpff'+iiWf5s);
text(status.status.capitalize());
ec('td');
let elRqXBe = eo('td','PtQff'+iiWf5s);
text(status.createdBy.name);
ec('td');
let elFNJsO = eo('td','1Phff'+iiWf5s);
let cmpDtuW = this._lc('csMpl6oBr', {parent:component,parentTop:projectLayout,props:{timestamp:status.createdAt.timestamp},insideLoop:true,index:"" +iiWf5s});
ec('td');
let el3gTbM = eo('td','ghNff'+iiWf5s);
let cndBppa = status.reason;
this.setState('stqsWhg', cndBppa);
if (cndBppa) { 
let elEooI_ = eo('strong','aBIff'+iiWf5s);
text(status.reason);
ec('strong');
}let cndp4d6 = Object.get(status.bug, 'id', '');
this.setState('styqnQe', cndp4d6);
if (cndp4d6) { 
let el7PR9p = eo('a','_Pcff'+iiWf5s,null,`href`,`${URLS.project(component.project, 'bugs', status.bug)}`);
text(`Bug #${ status.bug.id }`);
ec('a');
}ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
let elSeYqT = eo('div',null,null,`class`,`col col-sm-3 order-1`);
let elwbOQm = eo('div',null,null,`class`,`simple-card`);
let elVtW9D = eo('h2',null,null,`class`,`text-center`);
text(`Test Case Information`);
ec('h2');
let elzXX60 = eo('table',null,null,`class`,`table m-t-2`);
let elKWR2N = eo('tbody');
let elx7Shi = eo('tr');
let elOkZlU = eo('td');
text(`Type`);
ec('td');
let elKwce2 = eo('th',null,null,`class`,`bold ${ component.testCase.type } text-capitalize`);
elKwce2.cls = {'green-text': component.testCase.type == 'positive', 'red-text': component.testCase.type == 'negative'};

            for (let className in elKwce2.cls) {
                elKwce2.classList.toggle(className, elKwce2.cls[className]);
            }  
            text(component.testCase.type);
ec('th');
ec('tr');
let cnd3UFe = component.testCase.status;
this.setState('st5PQHj', cnd3UFe);
if (cnd3UFe) { 
let elB3RrP = eo('tr','pRzf');
let eliY2Zq = eo('td','7_4f');
text(`Status`);
ec('td');
let eluooqM = eo('th','54lf',null,`class`,`bold status ${ component.testCase.status } text-capitalize`);
eluooqM.cls = {'orange-text': component.testCase.status == 'blocked', 'green-text': component.testCase.status == 'passed', 'red-text': component.testCase.status == 'failed'};

            for (let className in eluooqM.cls) {
                eluooqM.classList.toggle(className, eluooqM.cls[className]);
            }  
            text(component.testCase.status);
ec('th');
ec('tr');
}let elU3Stz = eo('tr');
let elsJ9pq = eo('td');
text(`Priority`);
ec('td');
let elHL01g = eo('th',null,null,`class`,`bold priority ${ component.testCase.priority }`);
text(component.testCase.priority);
ec('th');
ec('tr');
let cndNwfd = component.testCase.status == 'failed';
this.setState('stEF0aS', cndNwfd);
if (cndNwfd) { 
let el1L1A5 = eo('tr','dycf');
let elz9qT3 = eo('td','Rt5f');
text(`Bug`);
ec('td');
let elIuPid = eo('th','3GPf');
let ely6g3_ = eo('a','g2bf',null,`href`,`${URLS.project(component.project, 'bugs', component.testCase.bug)}`);
text('#' + component.testCase.bug.id);
ec('a');
ec('th');
ec('tr');
}let el6byo1 = eo('tr');
let elYZD0Y = eo('td');
text(`Test Suit`);
ec('td');
let elER1BF = eo('th');
text(component.testCase.testSuit.name);
ec('th');
ec('tr');
let cndTsFA = component.testCase.attachment;
this.setState('stvRoUd', cndTsFA);
if (cndTsFA) { 
let elCdOx9 = eo('tr','COXf');
let elCTBlk = eo('td','NLPf');
text(`Automation File`);
ec('td');
let elVux5H = eo('th','Fahf');
let elHi7Ti = eo('a','2K7f',null,`href`,`${component.testCase.attachment}`,`class`,`btn btn-sm btn-bold btn-pink`,`target`,`_blank`);
let el38pen = eo('i','cKSf',null,`class`,`${fas('cloud-download-alt') + ' mr-2 icon'}`);
ec('i');
text(`Download`);
ec('a');
ec('th');
ec('tr');
}ec('tbody');
ec('table');
ec('div');
let cndala0 = component.testCaseStatusCanBeChanged;
this.setState('stIWyIM', cndala0);
if (cndala0) { 
let el8h3jc = eo('div','l1_f',null,`class`,`simple-card mt-2`);
let elCSesT = eo('h2','Xtqf',null,`class`,`text-center m-b-1`);
text(`Test Case Status`);
ec('h2');
component.statusChanger = this._lc('cKyJfWNPE', {parent:component,parentTop:projectLayout,props:{value:component.testCase.status,items:['passed', 'failed', 'blocked', 'dead']},events:{onselect:function(e) {let $el = this; component.openStatusChangeConfirm(e.value)}},attrs:{heading:'Change test case Status'},state:'stIWyIM'});
ec('div');
}ec('div');
ec('div');
}}});
let cndu2Xk = component.confirmStatusChange;
this.setState('stJ66_p', cndu2Xk);
if (cndu2Xk) { 
let cmpyD3W = this._lc('ceDJL0KeP', {parent:component,props:{withInput:component.reasonIsRequired,message:component.getConfirmingMessage(),required:component.reasonIsRequired},events:{onclose:function(e) {let $el = this; component.statusChanger.currentValue = component.testCase.status; component.confirmStatusChange = null},onconfirm:function(e) {let $el = this; component.updateStatus(e)}},state:'stJ66_p'});
}
                    this.isReadyToGo();
                }
        });