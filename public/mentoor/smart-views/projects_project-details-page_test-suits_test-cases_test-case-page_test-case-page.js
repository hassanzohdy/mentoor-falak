_Component({
                selector: 'test-case-page',
                c: 'TestCasePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','testCase','testCaseStatusCanBeChanged','openStatusChangeConfirm','confirmStatusChange','reasonIsRequired','getConfirmingMessage','statusChanger','updateStatus'],
                children: {cpmkSEXsw:'flk-time-ago',cQGX91tSU:'markdown',c3tfnJFjC:'markdown',cDo1TX0j6:'markdown',cyEJ_OcMk:'markdown',ce3Y5l8ox:'markdown',coa1Iec3Y:'markdown',cm03U0JAx:'comments',cd2GkQPeP:'flk-time-ago',c_dbBILBg:'flk-dropdown-list',cnvBsitJL:'project-layout',cNszS4GaR:'flk-alert'},
                render: function (component) {
                    let cmpN22V = this._lc('cnvBsitJL', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elulOXK = eo('div',null,null,`class`,`text-right m-b-1`);
let elIV_bX = eo('a',null,null,`href`,`${URLS.project(component.project, 'test-suits')}`,`class`,`btn bold btn-purple`);
let eldFEv_ = eo('i',null,null,`class`,`${fas('arrow-left')} mr-2 icon`);
ec('i');
text(`Back to
            test suits`);
ec('a');
ec('div');
let cnd_qNg = component.testCase;
this.setState('stYEY3H', cnd_qNg);
if (cnd_qNg) { 
let elReZxd = eo('div','inAf',null,`class`,`testCase row`);
let elqe1n1 = eo('div','eKDf',null,`class`,`col col-sm-9 order-12 order-sm-1`);
let elVh0hW = eo('h1','IFhf',null,`class`,`title`);
text('#' + component.testCase.id + ' ' + component.testCase.title);
ec('h1');
let elQgdZ9 = ev('img','0zEf',null,`src`,`${component.testCase.createdBy.image}`,`class`,`user-image`,`title`,`${component.testCase.createdBy.name}`,`alt`,`${component.testCase.createdBy.name}`);
let elqWcCk = eo('div','Q_8f',null,`class`,`d-inline-block`);
let elK14wP = eo('div','Ysaf');
text(component.testCase.createdBy.name);
ec('div');
let elYyMEj = eo('div','Aqcf');
let cmpk2ap = this._lc('cpmkSEXsw', {parent:component,parentTop:projectLayout,props:{timestamp:component.testCase.createdAt.timestamp},attrs:{class:'ago'},state:'stYEY3H'});
ec('div');
ec('div');
let el0OxZ4 = eo('div','OpWf',null,`class`,`simple-card p-1 m-y-1`);
let elie4TN = eo('div','ooif',null,`class`,`result-heading`);
text(`Description`);
ec('div');
let cmpvcXQ = this._lc('cQGX91tSU', {parent:component,parentTop:projectLayout,props:{content:component.testCase.description},state:'stYEY3H'});
ec('div');
let elUgeff = eo('div','SSSf',null,`class`,`simple-card p-1 m-y-1`);
let ely6xUp = eo('div','l0Zf',null,`class`,`result-heading`);
text(`Data`);
ec('div');
let cmpBGx1 = this._lc('c3tfnJFjC', {parent:component,parentTop:projectLayout,props:{content:component.testCase.data},state:'stYEY3H'});
ec('div');
let cndn2l_ = component.testCase.preconditions;
this.setState('stutukO', cndn2l_);
if (cndn2l_) { 
let elq4Yfw = eo('div','MSWf',null,`class`,`simple-card p-1 m-y-1`);
let elX6tV5 = eo('div','NJ5f',null,`class`,`result-heading`);
text(`Pre Conditions`);
ec('div');
let cmp5253 = this._lc('cDo1TX0j6', {parent:component,parentTop:projectLayout,props:{content:component.testCase.preconditions},state:'stutukO'});
ec('div');
}let cndoF0Y = ! Is.empty(component.testCase.preConditionsTestCases);
this.setState('st_0uEN', cndoF0Y);
if (cndoF0Y) { 
let el8blxS = eo('div','ZRof',null,`class`,`simple-card p-1 m-y-1`);
let elUZS3e = eo('div','ZMZf',null,`class`,`result-heading`);
text(`Pre Conditions (Test Cases)`);
ec('div');
for (let i in component.testCase.preConditionsTestCases) {
let testCase = component.testCase.preConditionsTestCases[i]; 
 let iidKOY = 'peAVgYL' + i;
let elth45y = eo('a','vvkh9BXNW9Aw' + i+iidKOY,null,`href`,`${URLS.project(component.project, 'test-cases', testCase)}`,`class`,`btn bold btn-sm btn-pink`);
text(testCase.title);
ec('a');
}
ec('div');
}let cndsMti = component.testCase.postConditions;
this.setState('stEmD9C', cndsMti);
if (cndsMti) { 
let elawnB8 = eo('div','vEDf',null,`class`,`simple-card p-1 m-y-1`);
let elPzY5A = eo('div','bcMf',null,`class`,`result-heading`);
text(`Post Conditions`);
ec('div');
let cmpcouE = this._lc('cyEJ_OcMk', {parent:component,parentTop:projectLayout,props:{content:component.testCase.postConditions},state:'stEmD9C'});
ec('div');
}let elmCYHK = eo('div',null,null,`class`,`simple-card p-1 m-b-1`);
let elrsYfw = eo('div',null,null,`class`,`result-heading`);
text(`Steps To Reproduce`);
ec('div');
let eljbnbc = eo('ol',null,null,`class`,`steps-list`);
for (let i in component.testCase.stepsToReproduce.split('\n')) {
let step = component.testCase.stepsToReproduce.split('\n')[i]; 
 let iiIXjs = 'kU22J0E' + i;
let elwweb_ = eo('li','JrjhpBvSllFi' + i+iiIXjs);
text(step);
ec('li');
}
ec('ol');
ec('div');
let elvjqq4 = eo('div',null,null,`class`,`simple-card p-1 m-b-1`);
let el7943t = eo('div',null,null,`class`,`result-heading`);
text(`Expected Result`);
ec('div');
let cmphVt9 = this._lc('ce3Y5l8ox', {parent:component,parentTop:projectLayout,props:{content:component.testCase.expectedBehavior}});
ec('div');
let elZWTRJ = eo('div',null,null,`class`,`simple-card p-1 m-b-1`);
let elq944x = eo('div',null,null,`class`,`result-heading`);
text(`Actual Result`);
ec('div');
let cmpZtU7 = this._lc('coa1Iec3Y', {parent:component,parentTop:projectLayout,props:{content:component.testCase.actualResult}});
ec('div');
let cmpNbFz = this._lc('cm03U0JAx', {parent:component,parentTop:projectLayout,props:{project:component.project,comments:component.testCase.comments,typeId:component.testCase.id},attrs:{type:'testCase'}});
let elQV1w7 = eo('h3',null,null,`class`,`bold m-t-2 m-b-1`);
text(`Test Case Status Change Log`);
ec('h3');
let elzJy2v = eo('table',null,null,`class`,`table table-bordered`);
let elz9sCL = eo('thead');
let el_EupM = eo('tr');
let el_LZYx = eo('th');
text(`Status`);
ec('th');
let elOKrC3 = eo('th');
text(`Created By`);
ec('th');
let elFYdw9 = eo('th');
text(`Created`);
ec('th');
let elUxjpM = eo('th');
text(`Extra`);
ec('th');
ec('tr');
ec('thead');
let elxMWQa = eo('tbody');
for (let i in component.testCase.statuses) {
let status = component.testCase.statuses[i]; 
 let iix7xp = '0ti7H_k' + i;
let el0Ai8e = eo('tr','pl6Iw4HpQxba' + i+iix7xp);
let elV5Fj9 = eo('td','NXvff'+iix7xp);
text(status.status.capitalize());
ec('td');
let elgTL28 = eo('td','998ff'+iix7xp);
text(status.createdBy.name);
ec('td');
let el5ErRI = eo('td','902ff'+iix7xp);
let cmpg2NZ = this._lc('cd2GkQPeP', {parent:component,parentTop:projectLayout,props:{timestamp:status.createdAt.timestamp},insideLoop:true,index:"" +iix7xp});
ec('td');
let ellgx59 = eo('td','8rgff'+iix7xp);
let cndDqM3 = status.reason;
this.setState('stCV1ct', cndDqM3);
if (cndDqM3) { 
let elQO9sj = eo('strong','bPRff'+iix7xp);
text(status.reason);
ec('strong');
}let cndYfod = Object.get(status.bug, 'id', '');
this.setState('stFqwNv', cndYfod);
if (cndYfod) { 
let elr0twA = eo('a','qNxff'+iix7xp,null,`href`,`${URLS.project(component.project, 'bugs', status.bug)}`);
text(`Bug #${ status.bug.id }`);
ec('a');
}ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
let elz0SSF = eo('div',null,null,`class`,`col col-sm-3 order-1`);
let elCT8IW = eo('div',null,null,`class`,`simple-card`);
let elG4pNs = eo('h2',null,null,`class`,`text-center`);
text(`Test Case Information`);
ec('h2');
let elKaArw = eo('table',null,null,`class`,`table m-t-2`);
let elwNQgj = eo('tbody');
let elNv29i = eo('tr');
let elzDtpk = eo('td');
text(`Type`);
ec('td');
let el7giNn = eo('th',null,null,`class`,`bold ${ component.testCase.type } text-capitalize ${cls({'green-text': component.testCase.type == 'positive', 'red-text': component.testCase.type == 'negative'})}`);
text(component.testCase.type);
ec('th');
ec('tr');
let cndDX8I = component.testCase.status;
this.setState('stPsIqn', cndDX8I);
if (cndDX8I) { 
let elbF9yo = eo('tr','npff');
let elAg4fL = eo('td','DBxf');
text(`Status`);
ec('td');
let elGeHeY = eo('th','Ey2f',null,`class`,`bold status ${ component.testCase.status } text-capitalize ${cls({'orange-text': component.testCase.status == 'blocked', 'green-text': component.testCase.status == 'passed', 'red-text': component.testCase.status == 'failed'})}`);
text(component.testCase.status);
ec('th');
ec('tr');
}let elCAeOM = eo('tr');
let elIMnYj = eo('td');
text(`Priority`);
ec('td');
let ele0s2u = eo('th',null,null,`class`,`bold priority ${ component.testCase.priority }`);
text(component.testCase.priority);
ec('th');
ec('tr');
let cndluDi = component.testCase.status == 'failed';
this.setState('stBTGem', cndluDi);
if (cndluDi) { 
let elYhLyS = eo('tr','KS6f');
let elblpvZ = eo('td','oqff');
text(`Bug`);
ec('td');
let el1lQMo = eo('th','p0Hf');
let eldyk0u = eo('a','W8nf',null,`href`,`${URLS.project(component.project, 'bugs', component.testCase.bug)}`);
text('#' + component.testCase.bug.id);
ec('a');
ec('th');
ec('tr');
}let elQNM9n = eo('tr');
let elCRe4r = eo('td');
text(`Test Suit`);
ec('td');
let el0Hguq = eo('th');
text(component.testCase.testSuit.name);
ec('th');
ec('tr');
let cndTsVw = component.testCase.attachment;
this.setState('stkUQYp', cndTsVw);
if (cndTsVw) { 
let elRcAuZ = eo('tr','OfFf');
let elefdAO = eo('td','E1Wf');
text(`Automation File`);
ec('td');
let el1Mr7k = eo('th','yY9f');
let elvTsxw = eo('a','SsBf',null,`href`,`${component.testCase.attachment}`,`class`,`btn btn-sm btn-bold btn-pink`,`target`,`_blank`);
let el0h_QQ = eo('i','6qff',null,`class`,`${fas('cloud-download-alt')} mr-2 icon`);
ec('i');
text(`Download`);
ec('a');
ec('th');
ec('tr');
}ec('tbody');
ec('table');
ec('div');
let cndKBQZ = component.testCaseStatusCanBeChanged;
this.setState('stGUkr1', cndKBQZ);
if (cndKBQZ) { 
let elb8Jve = eo('div','lYif',null,`class`,`simple-card mt-2`);
let el6qY1N = eo('h2','KwOf',null,`class`,`text-center m-b-1`);
text(`Test Case Status`);
ec('h2');
component.statusChanger = this._lc('c_dbBILBg', {parent:component,parentTop:projectLayout,props:{value:component.testCase.status,items:['passed', 'failed', 'blocked', 'dead']},events:{onselect:function(e) {let $el = this; component.openStatusChangeConfirm(e.value)}},attrs:{heading:'Change test case Status'},state:'stGUkr1'});
ec('div');
}ec('div');
ec('div');
}}});
let cndPfqa = component.confirmStatusChange;
this.setState('sthvVct', cndPfqa);
if (cndPfqa) { 
let cmpnOT3 = this._lc('cNszS4GaR', {parent:component,props:{withInput:component.reasonIsRequired,message:component.getConfirmingMessage(),required:component.reasonIsRequired},events:{onclose:function(e) {let $el = this; component.statusChanger.currentValue = component.testCase.status; component.confirmStatusChange = null},onconfirm:function(e) {let $el = this; component.updateStatus(e)}},state:'sthvVct'});
}
                    this.isReadyToGo();
                }
        });