_Component({
                selector: 'test-case-page',
                c: 'TestCasePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','testCase','testCaseStatusCanBeChanged','openStatusChangeConfirm','confirmStatusChange','reasonIsRequired','getConfirmingMessage','statusChanger','updateStatus'],
                children: {cNc0ukmtE:'flk-time-ago',c_3qcIdi0:'markdown',cPDVlJ0r2:'markdown',cSs0Ff8sC:'markdown',cg2552Ueg:'markdown',cemRul5av:'markdown',c8pT6LnIc:'markdown',cCRQ0HtB3:'comments',ctrrxijMi:'flk-time-ago',c7jSEP_Q0:'flk-dropdown-list',cNtyD_JWg:'project-layout',ccim6jPRe:'flk-alert'},
                render: function (component) {
                    let cmp8zCG = this._lc('cNtyD_JWg', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elDDFx6 = eo('div',null,null,`class`,`text-right m-b-1`);
let eloolEV = eo('a',null,null,`href`,`${URLS.project(component.project, 'test-suits')}`,`class`,`btn bold btn-purple`);
let elSrZRZ = eo('i',null,null,`class`,`${fas('arrow-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to
            test suits`);
ec('a');
ec('div');
let cndbFaR = component.testCase;
this.setState('st4lLKk', cndbFaR);
if (cndbFaR) { 
let elu1iE4 = eo('div','NrSf',null,`class`,`testCase row`);
let el99QH9 = eo('div','SQgf',null,`class`,`col col-sm-9 order-12 order-sm-1`);
let elBbpVy = eo('h1','fWxf',null,`class`,`title`);
text('#' + component.testCase.id + ' ' + component.testCase.title);
ec('h1');
let el1ZIkH = ev('img','MQIf',null,`src`,`${component.testCase.createdBy.image}`,`class`,`user-image`,`title`,`${component.testCase.createdBy.name}`,`alt`,`${component.testCase.createdBy.name}`);
let elOYCtA = eo('div','VEUf',null,`class`,`d-inline-block`);
let elGGOBr = eo('div','v2Jf');
text(component.testCase.createdBy.name);
ec('div');
let eljj9I1 = eo('div','iK7f');
let cmp70vL = this._lc('cNc0ukmtE', {parent:component,parentTop:projectLayout,props:{timestamp:component.testCase.createdAt.timestamp},attrs:{class:'ago'},state:'st4lLKk'});
ec('div');
ec('div');
let elE5bjT = eo('div','0q_f',null,`class`,`simple-card p-1 m-y-1`);
let elX9ZWQ = eo('div','Uo5f',null,`class`,`result-heading`);
text(`Description`);
ec('div');
let cmppxzb = this._lc('c_3qcIdi0', {parent:component,parentTop:projectLayout,props:{content:component.testCase.description},state:'st4lLKk'});
ec('div');
let elxToIg = eo('div','vVFf',null,`class`,`simple-card p-1 m-y-1`);
let elFc02Y = eo('div','21Rf',null,`class`,`result-heading`);
text(`Data`);
ec('div');
let cmp8wmj = this._lc('cPDVlJ0r2', {parent:component,parentTop:projectLayout,props:{content:component.testCase.data},state:'st4lLKk'});
ec('div');
let cnd4IMz = component.testCase.preconditions;
this.setState('stYsAnk', cnd4IMz);
if (cnd4IMz) { 
let elUVarO = eo('div','5vRf',null,`class`,`simple-card p-1 m-y-1`);
let elV8pUC = eo('div','L0uf',null,`class`,`result-heading`);
text(`Pre Conditions`);
ec('div');
let cmpbbRU = this._lc('cSs0Ff8sC', {parent:component,parentTop:projectLayout,props:{content:component.testCase.preconditions},state:'stYsAnk'});
ec('div');
}let cndpmyc = ! Is.empty(component.testCase.preConditionsTestCases);
this.setState('stljI1N', cndpmyc);
if (cndpmyc) { 
let eloIf_G = eo('div','Hpnf',null,`class`,`simple-card p-1 m-y-1`);
let elVsbpC = eo('div','XTjf',null,`class`,`result-heading`);
text(`Pre Conditions (Test Cases)`);
ec('div');
for (let i in component.testCase.preConditionsTestCases) {
let testCase = component.testCase.preConditionsTestCases[i]; 
 let iinLro = 'PT8gSnz' + i;
let elojiIk = eo('a','YwEMsMm7cAWg' + i+iinLro,null,`href`,`${URLS.project(component.project, 'test-cases', testCase)}`,`class`,`btn bold btn-sm btn-pink`);
text(testCase.title);
ec('a');
}
ec('div');
}let cndeTes = component.testCase.postConditions;
this.setState('st2mimO', cndeTes);
if (cndeTes) { 
let el8LoA2 = eo('div','99Hf',null,`class`,`simple-card p-1 m-y-1`);
let elADiLR = eo('div','Rv8f',null,`class`,`result-heading`);
text(`Post Conditions`);
ec('div');
let cmpGRYw = this._lc('cg2552Ueg', {parent:component,parentTop:projectLayout,props:{content:component.testCase.postConditions},state:'st2mimO'});
ec('div');
}let elP86oK = eo('div',null,null,`class`,`simple-card p-1 m-b-1`);
let el5d3sl = eo('div',null,null,`class`,`result-heading`);
text(`Steps To Reproduce`);
ec('div');
let el8py9V = eo('ol',null,null,`class`,`steps-list`);
for (let i in component.testCase.stepsToReproduce.split('\n')) {
let step = component.testCase.stepsToReproduce.split('\n')[i]; 
 let ii9L2N = 'yIsfNIo' + i;
let eln30Bz = eo('li','MKsXt64KGWYl' + i+ii9L2N);
text(step);
ec('li');
}
ec('ol');
ec('div');
let elDMKAV = eo('div',null,null,`class`,`simple-card p-1 m-b-1`);
let elaU_Z4 = eo('div',null,null,`class`,`result-heading`);
text(`Expected Result`);
ec('div');
let cmpJRiV = this._lc('cemRul5av', {parent:component,parentTop:projectLayout,props:{content:component.testCase.expectedBehavior}});
ec('div');
let el3S7nP = eo('div',null,null,`class`,`simple-card p-1 m-b-1`);
let eltptAC = eo('div',null,null,`class`,`result-heading`);
text(`Actual Result`);
ec('div');
let cmpe1tp = this._lc('c8pT6LnIc', {parent:component,parentTop:projectLayout,props:{content:component.testCase.actualResult}});
ec('div');
let cmpObSr = this._lc('cCRQ0HtB3', {parent:component,parentTop:projectLayout,props:{project:component.project,comments:component.testCase.comments,typeId:component.testCase.id},attrs:{type:'testCase'}});
let el9xEeA = eo('h3',null,null,`class`,`bold m-t-2 m-b-1`);
text(`Test Case Status Change Log`);
ec('h3');
let elclPO4 = eo('table',null,null,`class`,`table table-bordered`);
let eluO9uh = eo('thead');
let elCrRqZ = eo('tr');
let elvJcM6 = eo('th');
text(`Status`);
ec('th');
let elq4qpX = eo('th');
text(`Created By`);
ec('th');
let el2eFAr = eo('th');
text(`Created`);
ec('th');
let elI1zQ7 = eo('th');
text(`Extra`);
ec('th');
ec('tr');
ec('thead');
let elFDG6c = eo('tbody');
for (let i in component.testCase.statuses) {
let status = component.testCase.statuses[i]; 
 let iiaeRo = 'iFzNIe_' + i;
let elK0j1g = eo('tr','Wnm4T9QGZJsn' + i+iiaeRo);
let el2GZqd = eo('td','Vb0ff'+iiaeRo);
text(status.status.capitalize());
ec('td');
let elV67GC = eo('td','XFzff'+iiaeRo);
text(status.createdBy.name);
ec('td');
let elTRjoP = eo('td','I2jff'+iiaeRo);
let cmps1tj = this._lc('ctrrxijMi', {parent:component,parentTop:projectLayout,props:{timestamp:status.createdAt.timestamp},insideLoop:true,index:"" +iiaeRo});
ec('td');
let elk3QcD = eo('td','E5Yff'+iiaeRo);
let cndwORF = status.reason;
this.setState('stXMw0h', cndwORF);
if (cndwORF) { 
let elTdiSz = eo('strong','4rZff'+iiaeRo);
text(status.reason);
ec('strong');
}let cndTypA = Object.get(status.bug, 'id', '');
this.setState('st_vb9L', cndTypA);
if (cndTypA) { 
let elmBCrN = eo('a','J88ff'+iiaeRo,null,`href`,`${URLS.project(component.project, 'bugs', status.bug)}`);
text(`Bug #${ status.bug.id }`);
ec('a');
}ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
let el7CaPc = eo('div',null,null,`class`,`col col-sm-3 order-1`);
let elvwg6n = eo('div',null,null,`class`,`simple-card`);
let ellfOls = eo('h2',null,null,`class`,`text-center`);
text(`Test Case Information`);
ec('h2');
let eldIE44 = eo('table',null,null,`class`,`table m-t-2`);
let el6wcxf = eo('tbody');
let elEt1aS = eo('tr');
let elWf0jN = eo('td');
text(`Type`);
ec('td');
let elycN8i = eo('th',null,null,`class`,`bold ${ component.testCase.type } text-capitalize`);
elycN8i.cls = {'green-text': component.testCase.type == 'positive', 'red-text': component.testCase.type == 'negative'};

            for (let className in elycN8i.cls) {
                elycN8i.classList.toggle(className, elycN8i.cls[className]);
            }  
            text(component.testCase.type);
ec('th');
ec('tr');
let cndqscI = component.testCase.status;
this.setState('stLHD5S', cndqscI);
if (cndqscI) { 
let elrfmXf = eo('tr','lBqf');
let eliwTK1 = eo('td','PQBf');
text(`Status`);
ec('td');
let elDLuaS = eo('th','SJjf',null,`class`,`bold status ${ component.testCase.status } text-capitalize`);
elDLuaS.cls = {'orange-text': component.testCase.status == 'blocked', 'green-text': component.testCase.status == 'passed', 'red-text': component.testCase.status == 'failed'};

            for (let className in elDLuaS.cls) {
                elDLuaS.classList.toggle(className, elDLuaS.cls[className]);
            }  
            text(component.testCase.status);
ec('th');
ec('tr');
}let elU8E83 = eo('tr');
let el5S8k_ = eo('td');
text(`Priority`);
ec('td');
let elTeE54 = eo('th',null,null,`class`,`bold priority ${ component.testCase.priority }`);
text(component.testCase.priority);
ec('th');
ec('tr');
let cndIhh4 = component.testCase.status == 'failed';
this.setState('stxQhGl', cndIhh4);
if (cndIhh4) { 
let elIVwh5 = eo('tr','bOYf');
let elMkQVA = eo('td','eUxf');
text(`Bug`);
ec('td');
let el2qcwJ = eo('th','a6Pf');
let el5PZxB = eo('a','dyof',null,`href`,`${URLS.project(component.project, 'bugs', component.testCase.bug)}`);
text('#' + component.testCase.bug.id);
ec('a');
ec('th');
ec('tr');
}let elwcU5U = eo('tr');
let elkrxB9 = eo('td');
text(`Test Suit`);
ec('td');
let elB4wSw = eo('th');
text(component.testCase.testSuit.name);
ec('th');
ec('tr');
let cndmyFF = component.testCase.attachment;
this.setState('st9PELt', cndmyFF);
if (cndmyFF) { 
let elxud11 = eo('tr','vuuf');
let elPT6F8 = eo('td','pKhf');
text(`Automation File`);
ec('td');
let elfSPfJ = eo('th','cCKf');
let elD32IX = eo('a','y3cf',null,`href`,`${component.testCase.attachment}`,`class`,`btn btn-sm btn-bold btn-pink`,`target`,`_blank`);
let el5kVnf = eo('i','ryPf',null,`class`,`${fas('cloud-download-alt') + ' mr-2 icon'}`);
ec('i');
text(`Download`);
ec('a');
ec('th');
ec('tr');
}ec('tbody');
ec('table');
ec('div');
let cndCv5U = component.testCaseStatusCanBeChanged;
this.setState('st2ng7c', cndCv5U);
if (cndCv5U) { 
let elhSYUW = eo('div','G5ef',null,`class`,`simple-card mt-2`);
let elh4RY9 = eo('h2','oHmf',null,`class`,`text-center m-b-1`);
text(`Test Case Status`);
ec('h2');
component.statusChanger = this._lc('c7jSEP_Q0', {parent:component,parentTop:projectLayout,props:{value:component.testCase.status,items:['passed', 'failed', 'blocked', 'dead']},events:{onselect:function(e) {let $el = this; component.openStatusChangeConfirm(e.value)}},attrs:{heading:'Change test case Status'},state:'st2ng7c'});
ec('div');
}ec('div');
ec('div');
}}});
let cndLQe8 = component.confirmStatusChange;
this.setState('stDEafF', cndLQe8);
if (cndLQe8) { 
let cmpl3vs = this._lc('ccim6jPRe', {parent:component,props:{withInput:component.reasonIsRequired,message:component.getConfirmingMessage(),required:component.reasonIsRequired},events:{onclose:function(e) {let $el = this; component.statusChanger.currentValue = component.testCase.status; component.confirmStatusChange = null},onconfirm:function(e) {let $el = this; component.updateStatus(e)}},state:'stDEafF'});
}
                    this.isReadyToGo();
                }
        });