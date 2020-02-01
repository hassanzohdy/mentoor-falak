_Component({
                selector: 'test-case-page',
                c: 'TestCasePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','testCase','testCaseStatusCanBeChanged','openStatusChangeConfirm','confirmStatusChange','reasonIsRequired','getConfirmingMessage','statusChanger','updateStatus'],
                children: {c2puz_RHa:'flk-time-ago',cDuhoHNuI:'markdown',cDJM3g51S:'markdown',cZQ_l3ha_:'markdown',cLdenfh72:'markdown',cG2eBJCJQ:'markdown',cHKBoJiBk:'markdown',cm0xY2ymX:'comments',clsZSipFM:'flk-time-ago',cpZlNRnzr:'flk-dropdown-list',cSYGA3HGt:'project-layout',c6dEjyQJl:'flk-alert'},
                render: function (component) {
                    let cmpaKuz = this._lc('cSYGA3HGt', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elrNIx5 = eo('div',null,null,`class`,`text-right m-b-1`);
let elAvtra = eo('a',null,null,`href`,`${URLS.project(component.project, 'test-suits')}`,`class`,`btn bold btn-purple`);
let elYp1PL = eo('i',null,null,`class`,`${fas('arrow-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to
            test suits`);
ec('a');
ec('div');
let cndYiqj = component.testCase;
this.setState('stLRgc4', cndYiqj);
if (cndYiqj) { 
let elhNZ78 = eo('div','U5Nf',null,`class`,`testCase row`);
let el_2fQQ = eo('div','Oacf',null,`class`,`col col-sm-9 order-12 order-sm-1`);
let el6NATh = eo('h1','DXmf',null,`class`,`title`);
text('#' + component.testCase.id + ' ' + component.testCase.title);
ec('h1');
let elogVeY = ev('img','nr1f',null,`src`,`${component.testCase.createdBy.image}`,`class`,`user-image`,`title`,`${component.testCase.createdBy.name}`,`alt`,`${component.testCase.createdBy.name}`);
let elAmgTZ = eo('div','MPFf',null,`class`,`d-inline-block`);
let el5hYDs = eo('div','vfXf');
text(component.testCase.createdBy.name);
ec('div');
let elxTw39 = eo('div','hWjf');
let cmppszg = this._lc('c2puz_RHa', {parent:component,parentTop:projectLayout,props:{timestamp:component.testCase.createdAt.timestamp},attrs:{class:'ago'},state:'stLRgc4'});
ec('div');
ec('div');
let el75yU9 = eo('div','yROf',null,`class`,`simple-card p-1 m-y-1`);
let elpaUvL = eo('div','cNKf',null,`class`,`result-heading`);
text(`Description`);
ec('div');
let cmppUB4 = this._lc('cDuhoHNuI', {parent:component,parentTop:projectLayout,props:{content:component.testCase.description},state:'stLRgc4'});
ec('div');
let elta0xj = eo('div','wRVf',null,`class`,`simple-card p-1 m-y-1`);
let elh8wMF = eo('div','u8If',null,`class`,`result-heading`);
text(`Data`);
ec('div');
let cmpGcpF = this._lc('cDJM3g51S', {parent:component,parentTop:projectLayout,props:{content:component.testCase.data},state:'stLRgc4'});
ec('div');
let cndR6wH = component.testCase.preconditions;
this.setState('stIIPIq', cndR6wH);
if (cndR6wH) { 
let elJXYGz = eo('div','GOVf',null,`class`,`simple-card p-1 m-y-1`);
let elDiEmC = eo('div','si7f',null,`class`,`result-heading`);
text(`Pre Conditions`);
ec('div');
let cmpV3NH = this._lc('cZQ_l3ha_', {parent:component,parentTop:projectLayout,props:{content:component.testCase.preconditions},state:'stIIPIq'});
ec('div');
}let cndWqNA = ! Is.empty(component.testCase.preConditionsTestCases);
this.setState('st3Ly_U', cndWqNA);
if (cndWqNA) { 
let elxaFav = eo('div','Pfhf',null,`class`,`simple-card p-1 m-y-1`);
let elbYZAm = eo('div','N6jf',null,`class`,`result-heading`);
text(`Pre Conditions (Test Cases)`);
ec('div');
for (let i in component.testCase.preConditionsTestCases) {
let testCase = component.testCase.preConditionsTestCases[i]; 
 let ii65XR = 'soAf_1B' + i;
let elQzLMS = eo('a','z4C4uEpj1JL9' + i+ii65XR,null,`href`,`${URLS.project(component.project, 'test-cases', testCase)}`,`class`,`btn bold btn-sm btn-pink`);
text(testCase.title);
ec('a');
}
ec('div');
}let cndtF_g = component.testCase.postConditions;
this.setState('stbVHoy', cndtF_g);
if (cndtF_g) { 
let elu2yGo = eo('div','R6Sf',null,`class`,`simple-card p-1 m-y-1`);
let elC8r6r = eo('div','Pmlf',null,`class`,`result-heading`);
text(`Post Conditions`);
ec('div');
let cmpIFxF = this._lc('cLdenfh72', {parent:component,parentTop:projectLayout,props:{content:component.testCase.postConditions},state:'stbVHoy'});
ec('div');
}let elTqUwP = eo('div',null,null,`class`,`simple-card p-1 m-b-1`);
let elYuGVB = eo('div',null,null,`class`,`result-heading`);
text(`Steps To Reproduce`);
ec('div');
let elA4Z8x = eo('ol',null,null,`class`,`steps-list`);
for (let i in component.testCase.stepsToReproduce.split('\n')) {
let step = component.testCase.stepsToReproduce.split('\n')[i]; 
 let iiqzVC = 'EGRbJX9' + i;
let elyRNhw = eo('li','FTW0H0D2UK5G' + i+iiqzVC);
text(step);
ec('li');
}
ec('ol');
ec('div');
let elCKhYL = eo('div',null,null,`class`,`simple-card p-1 m-b-1`);
let el68qWj = eo('div',null,null,`class`,`result-heading`);
text(`Expected Result`);
ec('div');
let cmpfjEK = this._lc('cG2eBJCJQ', {parent:component,parentTop:projectLayout,props:{content:component.testCase.expectedBehavior}});
ec('div');
let elnsPLE = eo('div',null,null,`class`,`simple-card p-1 m-b-1`);
let elNWWo9 = eo('div',null,null,`class`,`result-heading`);
text(`Actual Result`);
ec('div');
let cmp7jIS = this._lc('cHKBoJiBk', {parent:component,parentTop:projectLayout,props:{content:component.testCase.actualResult}});
ec('div');
let cmpyShg = this._lc('cm0xY2ymX', {parent:component,parentTop:projectLayout,props:{project:component.project,comments:component.testCase.comments,typeId:component.testCase.id},attrs:{type:'testCase'}});
let el80qju = eo('h3',null,null,`class`,`bold m-t-2 m-b-1`);
text(`Test Case Status Change Log`);
ec('h3');
let elaVoL4 = eo('table',null,null,`class`,`table table-bordered`);
let elCzooP = eo('thead');
let elvsM_h = eo('tr');
let el7ucu5 = eo('th');
text(`Status`);
ec('th');
let elUYnOT = eo('th');
text(`Created By`);
ec('th');
let elqE89V = eo('th');
text(`Created`);
ec('th');
let eldVAtX = eo('th');
text(`Extra`);
ec('th');
ec('tr');
ec('thead');
let elu7Szv = eo('tbody');
for (let i in component.testCase.statuses) {
let status = component.testCase.statuses[i]; 
 let iibWPR = 'pzHpyqz' + i;
let elNBb6q = eo('tr','IMpT2429BIiA' + i+iibWPR);
let elGsayG = eo('td','9lPff'+iibWPR);
text(status.status.capitalize());
ec('td');
let elW0N8P = eo('td','zQ6ff'+iibWPR);
text(status.createdBy.name);
ec('td');
let elvmqDs = eo('td','1ziff'+iibWPR);
let cmpk8bT = this._lc('clsZSipFM', {parent:component,parentTop:projectLayout,props:{timestamp:status.createdAt.timestamp},insideLoop:true,index:"" +iibWPR});
ec('td');
let elxDh8S = eo('td','n1Rff'+iibWPR);
let cndNLs0 = status.reason;
this.setState('st3jUH4', cndNLs0);
if (cndNLs0) { 
let elxggzU = eo('strong','Abuff'+iibWPR);
text(status.reason);
ec('strong');
}let cndsUtG = Object.get(status.bug, 'id', '');
this.setState('strXm8y', cndsUtG);
if (cndsUtG) { 
let el0rKJ6 = eo('a','hDuff'+iibWPR,null,`href`,`${URLS.project(component.project, 'bugs', status.bug)}`);
text(`Bug #${ status.bug.id }`);
ec('a');
}ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
let elC52z4 = eo('div',null,null,`class`,`col col-sm-3 order-1`);
let elXLx0k = eo('div',null,null,`class`,`simple-card`);
let elkVycP = eo('h2',null,null,`class`,`text-center`);
text(`Test Case Information`);
ec('h2');
let el_Y2Sv = eo('table',null,null,`class`,`table m-t-2`);
let elkXfgA = eo('tbody');
let elw90VH = eo('tr');
let elhSH9X = eo('td');
text(`Type`);
ec('td');
let elJOHQz = eo('th',null,null,`class`,`bold ${ component.testCase.type } text-capitalize`);
elJOHQz.cls = {'green-text': component.testCase.type == 'positive', 'red-text': component.testCase.type == 'negative'};

            for (let className in elJOHQz.cls) {
                elJOHQz.classList.toggle(className, elJOHQz.cls[className]);
            }  
            text(component.testCase.type);
ec('th');
ec('tr');
let cndyCFB = component.testCase.status;
this.setState('stJ7PKs', cndyCFB);
if (cndyCFB) { 
let elv3bMv = eo('tr','8Tyf');
let el4ScsX = eo('td','jekf');
text(`Status`);
ec('td');
let elfMMQW = eo('th','A8Af',null,`class`,`bold status ${ component.testCase.status } text-capitalize`);
elfMMQW.cls = {'orange-text': component.testCase.status == 'blocked', 'green-text': component.testCase.status == 'passed', 'red-text': component.testCase.status == 'failed'};

            for (let className in elfMMQW.cls) {
                elfMMQW.classList.toggle(className, elfMMQW.cls[className]);
            }  
            text(component.testCase.status);
ec('th');
ec('tr');
}let elIgkcl = eo('tr');
let el04zlk = eo('td');
text(`Priority`);
ec('td');
let el5r_pD = eo('th',null,null,`class`,`bold priority ${ component.testCase.priority }`);
text(component.testCase.priority);
ec('th');
ec('tr');
let cndW2f0 = component.testCase.status == 'failed';
this.setState('stiS4Pw', cndW2f0);
if (cndW2f0) { 
let elqn36l = eo('tr','latf');
let elXC1Hj = eo('td','JJwf');
text(`Bug`);
ec('td');
let elFSbpy = eo('th','Rf6f');
let ellqDa7 = eo('a','kJxf',null,`href`,`${URLS.project(component.project, 'bugs', component.testCase.bug)}`);
text('#' + component.testCase.bug.id);
ec('a');
ec('th');
ec('tr');
}let elts0Ws = eo('tr');
let elfhwKh = eo('td');
text(`Test Suit`);
ec('td');
let elp3CbL = eo('th');
text(component.testCase.testSuit.name);
ec('th');
ec('tr');
let cnduCu8 = component.testCase.attachment;
this.setState('styJKHp', cnduCu8);
if (cnduCu8) { 
let elB02me = eo('tr','gPNf');
let elXlnV9 = eo('td','s2rf');
text(`Automation File`);
ec('td');
let elSpIWd = eo('th','1Gpf');
let elCfjxD = eo('a','SU2f',null,`href`,`${component.testCase.attachment}`,`class`,`btn btn-sm btn-bold btn-pink`,`target`,`_blank`);
let elJ_mdg = eo('i','QVTf',null,`class`,`${fas('cloud-download-alt') + ' mr-2 icon'}`);
ec('i');
text(`Download`);
ec('a');
ec('th');
ec('tr');
}ec('tbody');
ec('table');
ec('div');
let cnd2YiE = component.testCaseStatusCanBeChanged;
this.setState('st34j7p', cnd2YiE);
if (cnd2YiE) { 
let ell2vNe = eo('div','lMkf',null,`class`,`simple-card mt-2`);
let elAHaDi = eo('h2','A3xf',null,`class`,`text-center m-b-1`);
text(`Test Case Status`);
ec('h2');
component.statusChanger = this._lc('cpZlNRnzr', {parent:component,parentTop:projectLayout,props:{value:component.testCase.status,items:['passed', 'failed', 'blocked', 'dead']},events:{onselect:function(e) {let $el = this; component.openStatusChangeConfirm(e.value)}},attrs:{heading:'Change test case Status'},state:'st34j7p'});
ec('div');
}ec('div');
ec('div');
}}});
let cndYiWQ = component.confirmStatusChange;
this.setState('stCLO9u', cndYiWQ);
if (cndYiWQ) { 
let cmp62Pj = this._lc('c6dEjyQJl', {parent:component,props:{withInput:component.reasonIsRequired,message:component.getConfirmingMessage(),required:component.reasonIsRequired},events:{onclose:function(e) {let $el = this; component.statusChanger.currentValue = component.testCase.status; component.confirmStatusChange = null},onconfirm:function(e) {let $el = this; component.updateStatus(e)}},state:'stCLO9u'});
}
                    this.isReadyToGo();
                }
        });