_Component({
                selector: 'test-case-page',
                c: 'TestCasePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','testCase','testCaseStatusCanBeChanged','openStatusChangeConfirm','confirmStatusChange','reasonIsRequired','getConfirmingMessage','statusChanger','updateStatus'],
                children: {crLzvFxoI:'flk-time-ago',cGBFuM_1I:'markdown',cpM5Ap2yR:'markdown',c_16OYyUd:'markdown',cMEuIXU1a:'markdown',cItCuvwX3:'markdown',cwR0ij4U5:'markdown',cEXo8U2ut:'comments',cB4fN1AkB:'flk-time-ago',cK3er0fT9:'flk-dropdown-list',cUltbb4Dh:'project-layout',cjUTRcHXU:'flk-alert'},
                render: function (component) {
                    let cmpJfXk = this._lc('cUltbb4Dh', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let eltTqBv = eo('div',null,null,`class`,`text-right m-b-1`);
let elT11pn = eo('a',null,null,`href`,`${URLS.project(component.project, 'test-suits')}`,`class`,`btn bold btn-purple`);
let elK7E6h = eo('i',null,null,`class`,`${fas('arrow-left')} mr-2 icon`);
ec('i');
text(`Back to
            test suits`);
ec('a');
ec('div');
let cndriMo = component.testCase;
this.setState('stSyh5h', cndriMo);
if (cndriMo) { 
let elfLzQE = eo('div','Squf',null,`class`,`testCase row`);
let elTdkJe = eo('div','eNEf',null,`class`,`col col-sm-9 order-12 order-sm-1`);
let el6VX7D = eo('h1','dcLf',null,`class`,`title`);
text('#' + component.testCase.id + ' ' + component.testCase.title);
ec('h1');
let elzDmqH = ev('img','4MEf',null,`src`,`${component.testCase.createdBy.image}`,`class`,`user-image`,`title`,`${component.testCase.createdBy.name}`,`alt`,`${component.testCase.createdBy.name}`);
let elpu24L = eo('div','q3Af',null,`class`,`d-inline-block`);
let elRINiG = eo('div','okYf');
text(component.testCase.createdBy.name);
ec('div');
let elwC7nZ = eo('div','Dejf');
let cmpiWlN = this._lc('crLzvFxoI', {parent:component,parentTop:projectLayout,props:{timestamp:component.testCase.createdAt.timestamp},attrs:{class:'ago'},state:'stSyh5h'});
ec('div');
ec('div');
let el0rqY3 = eo('div','9Saf',null,`class`,`simple-card p-1 m-y-1`);
let elBCUJK = eo('div','ROpf',null,`class`,`result-heading`);
text(`Description`);
ec('div');
let cmpEsyg = this._lc('cGBFuM_1I', {parent:component,parentTop:projectLayout,props:{content:component.testCase.description},state:'stSyh5h'});
ec('div');
let elVqNy0 = eo('div','6fEf',null,`class`,`simple-card p-1 m-y-1`);
let elFmfQj = eo('div','S_kf',null,`class`,`result-heading`);
text(`Data`);
ec('div');
let cmpW0mE = this._lc('cpM5Ap2yR', {parent:component,parentTop:projectLayout,props:{content:component.testCase.data},state:'stSyh5h'});
ec('div');
let cndoRX0 = component.testCase.preconditions;
this.setState('stLZqwa', cndoRX0);
if (cndoRX0) { 
let elcqvnt = eo('div','RFsf',null,`class`,`simple-card p-1 m-y-1`);
let elClqjE = eo('div','QkNf',null,`class`,`result-heading`);
text(`Pre Conditions`);
ec('div');
let cmpgrkD = this._lc('c_16OYyUd', {parent:component,parentTop:projectLayout,props:{content:component.testCase.preconditions},state:'stLZqwa'});
ec('div');
}let cndeCdG = ! Is.empty(component.testCase.preConditionsTestCases);
this.setState('stSzqU2', cndeCdG);
if (cndeCdG) { 
let elXubLZ = eo('div','CXcf',null,`class`,`simple-card p-1 m-y-1`);
let eliYcLj = eo('div','Wo4f',null,`class`,`result-heading`);
text(`Pre Conditions (Test Cases)`);
ec('div');
for (let i in component.testCase.preConditionsTestCases) {
let testCase = component.testCase.preConditionsTestCases[i]; 
 let iibXfa = 'CSF721v' + i;
let elELT1l = eo('a','KdDyEO7E0laL' + i+iibXfa,null,`href`,`${URLS.project(component.project, 'test-cases', testCase)}`,`class`,`btn bold btn-sm btn-pink`);
text(testCase.title);
ec('a');
}
ec('div');
}let cndVu6y = component.testCase.postConditions;
this.setState('stJ5a4a', cndVu6y);
if (cndVu6y) { 
let elSaj_h = eo('div','LSyf',null,`class`,`simple-card p-1 m-y-1`);
let elJOE3h = eo('div','7PIf',null,`class`,`result-heading`);
text(`Post Conditions`);
ec('div');
let cmpOWN1 = this._lc('cMEuIXU1a', {parent:component,parentTop:projectLayout,props:{content:component.testCase.postConditions},state:'stJ5a4a'});
ec('div');
}let el3cJoi = eo('div',null,null,`class`,`simple-card p-1 m-b-1`);
let elMs8M7 = eo('div',null,null,`class`,`result-heading`);
text(`Steps To Reproduce`);
ec('div');
let elbzOr0 = eo('ol',null,null,`class`,`steps-list`);
for (let i in component.testCase.stepsToReproduce.split('\n')) {
let step = component.testCase.stepsToReproduce.split('\n')[i]; 
 let iiHqRR = 'RKqrSj5' + i;
let elG8ExA = eo('li','lBIi7o0VaFci' + i+iiHqRR);
text(step);
ec('li');
}
ec('ol');
ec('div');
let elWRFmY = eo('div',null,null,`class`,`simple-card p-1 m-b-1`);
let elvo2AG = eo('div',null,null,`class`,`result-heading`);
text(`Expected Result`);
ec('div');
let cmpKhO7 = this._lc('cItCuvwX3', {parent:component,parentTop:projectLayout,props:{content:component.testCase.expectedBehavior}});
ec('div');
let elp4MrF = eo('div',null,null,`class`,`simple-card p-1 m-b-1`);
let el3oQi8 = eo('div',null,null,`class`,`result-heading`);
text(`Actual Result`);
ec('div');
let cmptkWS = this._lc('cwR0ij4U5', {parent:component,parentTop:projectLayout,props:{content:component.testCase.actualResult}});
ec('div');
let cmpJieG = this._lc('cEXo8U2ut', {parent:component,parentTop:projectLayout,props:{project:component.project,comments:component.testCase.comments,typeId:component.testCase.id},attrs:{type:'testCase'}});
let eluvPIn = eo('h3',null,null,`class`,`bold m-t-2 m-b-1`);
text(`Test Case Status Change Log`);
ec('h3');
let elOQzhM = eo('table',null,null,`class`,`table table-bordered`);
let elJUCUC = eo('thead');
let ellSP9E = eo('tr');
let elsmfva = eo('th');
text(`Status`);
ec('th');
let elKV6Fb = eo('th');
text(`Created By`);
ec('th');
let elQYwzs = eo('th');
text(`Created`);
ec('th');
let elD3sjx = eo('th');
text(`Extra`);
ec('th');
ec('tr');
ec('thead');
let elHrnbs = eo('tbody');
for (let i in component.testCase.statuses) {
let status = component.testCase.statuses[i]; 
 let ii4_fP = 'CT82_He' + i;
let elUEiEm = eo('tr','HbVATZWWA1AH' + i+ii4_fP);
let el0sfKg = eo('td','_rxff'+ii4_fP);
text(status.status.capitalize());
ec('td');
let elch9tL = eo('td','so7ff'+ii4_fP);
text(status.createdBy.name);
ec('td');
let el1KxcK = eo('td','Zbcff'+ii4_fP);
let cmp08e_ = this._lc('cB4fN1AkB', {parent:component,parentTop:projectLayout,props:{timestamp:status.createdAt.timestamp},insideLoop:true,index:"" +ii4_fP});
ec('td');
let eljWmdl = eo('td','6vwff'+ii4_fP);
let cndrxOk = status.reason;
this.setState('stq2vT9', cndrxOk);
if (cndrxOk) { 
let el8dpkj = eo('strong','FUbff'+ii4_fP);
text(status.reason);
ec('strong');
}let cnd46nf = Object.get(status.bug, 'id', '');
this.setState('stjljyf', cnd46nf);
if (cnd46nf) { 
let elyxrQP = eo('a','wNUff'+ii4_fP,null,`href`,`${URLS.project(component.project, 'bugs', status.bug)}`);
text(`Bug #${ status.bug.id }`);
ec('a');
}ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
let el1VQUE = eo('div',null,null,`class`,`col col-sm-3 order-1`);
let elmCfOm = eo('div',null,null,`class`,`simple-card`);
let elZMBE9 = eo('h2',null,null,`class`,`text-center`);
text(`Test Case Information`);
ec('h2');
let elZtFXz = eo('table',null,null,`class`,`table m-t-2`);
let ellwTel = eo('tbody');
let eltH2fI = eo('tr');
let elaxdAR = eo('td');
text(`Type`);
ec('td');
let eliqzR4 = eo('th',null,null,`class`,`bold ${ component.testCase.type } text-capitalize ${cls({'green-text': component.testCase.type == 'positive', 'red-text': component.testCase.type == 'negative'})}`);
text(component.testCase.type);
ec('th');
ec('tr');
let cndtPGW = component.testCase.status;
this.setState('st3IkW6', cndtPGW);
if (cndtPGW) { 
let elTYYW7 = eo('tr','YNwf');
let elpMIqO = eo('td','LAIf');
text(`Status`);
ec('td');
let elhyu32 = eo('th','5zCf',null,`class`,`bold status ${ component.testCase.status } text-capitalize ${cls({'orange-text': component.testCase.status == 'blocked', 'green-text': component.testCase.status == 'passed', 'red-text': component.testCase.status == 'failed'})}`);
text(component.testCase.status);
ec('th');
ec('tr');
}let elxzVeK = eo('tr');
let elyLG5h = eo('td');
text(`Priority`);
ec('td');
let elQrBjZ = eo('th',null,null,`class`,`bold priority ${ component.testCase.priority }`);
text(component.testCase.priority);
ec('th');
ec('tr');
let cndxKiT = component.testCase.status == 'failed';
this.setState('stN7ipG', cndxKiT);
if (cndxKiT) { 
let elO3ryQ = eo('tr','FJvf');
let el93QI7 = eo('td','BY8f');
text(`Bug`);
ec('td');
let elyJvdq = eo('th','_HPf');
let elKrf6d = eo('a','zF4f',null,`href`,`${URLS.project(component.project, 'bugs', component.testCase.bug)}`);
text('#' + component.testCase.bug.id);
ec('a');
ec('th');
ec('tr');
}let elbJIkO = eo('tr');
let elNeoUU = eo('td');
text(`Test Suit`);
ec('td');
let elJvwVd = eo('th');
text(component.testCase.testSuit.name);
ec('th');
ec('tr');
let cndZ7Bp = component.testCase.attachment;
this.setState('stExA5a', cndZ7Bp);
if (cndZ7Bp) { 
let elGhVPI = eo('tr','CUwf');
let elgWqkb = eo('td','sX4f');
text(`Automation File`);
ec('td');
let elBr7za = eo('th','un0f');
let elqiObm = eo('a','0kjf',null,`href`,`${component.testCase.attachment}`,`class`,`btn btn-sm btn-bold btn-pink`,`target`,`_blank`);
let elqtjr_ = eo('i','AMZf',null,`class`,`${fas('cloud-download-alt')} mr-2 icon`);
ec('i');
text(`Download`);
ec('a');
ec('th');
ec('tr');
}ec('tbody');
ec('table');
ec('div');
let cndo2z_ = component.testCaseStatusCanBeChanged;
this.setState('stIrJvk', cndo2z_);
if (cndo2z_) { 
let elClNjE = eo('div','N8Hf',null,`class`,`simple-card mt-2`);
let elBmThK = eo('h2','YoAf',null,`class`,`text-center m-b-1`);
text(`Test Case Status`);
ec('h2');
component.statusChanger = this._lc('cK3er0fT9', {parent:component,parentTop:projectLayout,props:{value:component.testCase.status,items:['passed', 'failed', 'blocked', 'dead']},events:{onselect:function(e) {let $el = this; component.openStatusChangeConfirm(e.value)}},attrs:{heading:'Change test case Status'},state:'stIrJvk'});
ec('div');
}ec('div');
ec('div');
}}});
let cndAKLx = component.confirmStatusChange;
this.setState('stg2nZk', cndAKLx);
if (cndAKLx) { 
let cmpxxNR = this._lc('cjUTRcHXU', {parent:component,props:{withInput:component.reasonIsRequired,message:component.getConfirmingMessage(),required:component.reasonIsRequired},events:{onclose:function(e) {let $el = this; component.statusChanger.currentValue = component.testCase.status; component.confirmStatusChange = null},onconfirm:function(e) {let $el = this; component.updateStatus(e)}},state:'stg2nZk'});
}
                    this.isReadyToGo();
                }
        });