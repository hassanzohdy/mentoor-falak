_Component({
                selector: 'test-case-page',
                c: 'TestCasePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','testCase','testCaseStatusCanBeChanged','openStatusChangeConfirm','confirmStatusChange','reasonIsRequired','getConfirmingMessage','statusChanger','updateStatus'],
                children: {cq0T_wMxH:'flk-time-ago',cS2CXHxr9:'markdown',cn6wrMOkh:'markdown',c4yo7KSxX:'markdown',ce35msf5S:'markdown',caW0z6HYp:'markdown',cerbnHSqw:'markdown',crr5uJOQu:'comments',cueONVMUS:'flk-time-ago',cYhc3pdCb:'flk-dropdown-list',cgFLt3aHY:'project-layout',cWA4yX5ie:'flk-alert'},
                render: function (component) {
                    let cmpjnqw = this._lc('cgFLt3aHY', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let ele2cPD = eo('div',null,null,`class`,`text-right m-b-1`);
let el2InB4 = eo('a',null,null,`href`,`${URLS.project(component.project, 'test-suits')}`,`class`,`btn bold btn-purple`);
let elSK8CB = eo('i',null,null,`class`,`${fas('arrow-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to
            test suits`);
ec('a');
ec('div');
let cndjxxP = component.testCase;
this.setState('stQK48O', cndjxxP);
if (cndjxxP) { 
let elRxevC = eo('div','aBpf',null,`class`,`testCase row`);
let elpJKdz = eo('div','PhMf',null,`class`,`col col-sm-9 order-12 order-sm-1`);
let el7_mVV = eo('h1','99wf',null,`class`,`title`);
text('#' + component.testCase.id + ' ' + component.testCase.title);
ec('h1');
let elww0rT = ev('img','Iybf',null,`src`,`${component.testCase.createdBy.image}`,`class`,`user-image`,`title`,`${component.testCase.createdBy.name}`,`alt`,`${component.testCase.createdBy.name}`);
let elFsfP7 = eo('div','JGrf',null,`class`,`d-inline-block`);
let elZK11p = eo('div','oLNf');
text(component.testCase.createdBy.name);
ec('div');
let eldTK3B = eo('div','mTsf');
let cmpn9Ia = this._lc('cq0T_wMxH', {parent:component,parentTop:projectLayout,props:{timestamp:component.testCase.createdAt.timestamp},attrs:{class:'ago'},state:'stQK48O'});
ec('div');
ec('div');
let elrT09U = eo('div','AYGf',null,`class`,`simple-card p-1 m-y-1`);
let elgFdEW = eo('div','PnAf',null,`class`,`result-heading`);
text(`Description`);
ec('div');
let cmpTCQP = this._lc('cS2CXHxr9', {parent:component,parentTop:projectLayout,props:{content:component.testCase.description},state:'stQK48O'});
ec('div');
let elU0N4L = eo('div','S2zf',null,`class`,`simple-card p-1 m-y-1`);
let elXz9hX = eo('div','MhZf',null,`class`,`result-heading`);
text(`Data`);
ec('div');
let cmpvrum = this._lc('cn6wrMOkh', {parent:component,parentTop:projectLayout,props:{content:component.testCase.data},state:'stQK48O'});
ec('div');
let cndkh5H = component.testCase.preconditions;
this.setState('stf5441', cndkh5H);
if (cndkh5H) { 
let elx1FV9 = eo('div','_Def',null,`class`,`simple-card p-1 m-y-1`);
let elgKpzw = eo('div','f_sf',null,`class`,`result-heading`);
text(`Pre Conditions`);
ec('div');
let cmp3Hav = this._lc('c4yo7KSxX', {parent:component,parentTop:projectLayout,props:{content:component.testCase.preconditions},state:'stf5441'});
ec('div');
}let cndNhJH = ! Is.empty(component.testCase.preConditionsTestCases);
this.setState('stjyCyB', cndNhJH);
if (cndNhJH) { 
let elX8_sF = eo('div','Pygf',null,`class`,`simple-card p-1 m-y-1`);
let el_AxmA = eo('div','zHxf',null,`class`,`result-heading`);
text(`Pre Conditions (Test Cases)`);
ec('div');
for (let i in component.testCase.preConditionsTestCases) {
let testCase = component.testCase.preConditionsTestCases[i]; 
 let iiVYMZ = 'sQRZIYf' + i;
let elsV4qm = eo('a','so6H3DnNyBc_' + i+iiVYMZ,null,`href`,`${URLS.project(component.project, 'test-cases', testCase)}`,`class`,`btn bold btn-sm btn-pink`);
text(testCase.title);
ec('a');
}
ec('div');
}let cnd37XQ = component.testCase.postConditions;
this.setState('st3PHRR', cnd37XQ);
if (cnd37XQ) { 
let elZxGiD = eo('div','8NVf',null,`class`,`simple-card p-1 m-y-1`);
let el9Mcr2 = eo('div','IIpf',null,`class`,`result-heading`);
text(`Post Conditions`);
ec('div');
let cmpQUt6 = this._lc('ce35msf5S', {parent:component,parentTop:projectLayout,props:{content:component.testCase.postConditions},state:'st3PHRR'});
ec('div');
}let elvdq_M = eo('div',null,null,`class`,`simple-card p-1 m-b-1`);
let el_S7CA = eo('div',null,null,`class`,`result-heading`);
text(`Steps To Reproduce`);
ec('div');
let elr63MG = eo('ol',null,null,`class`,`steps-list`);
for (let i in component.testCase.stepsToReproduce.split('\n')) {
let step = component.testCase.stepsToReproduce.split('\n')[i]; 
 let iimB0w = '0vNLdTM' + i;
let elFWdO7 = eo('li','4zcFClt31o3A' + i+iimB0w);
text(step);
ec('li');
}
ec('ol');
ec('div');
let elK8uuQ = eo('div',null,null,`class`,`simple-card p-1 m-b-1`);
let elYqdjM = eo('div',null,null,`class`,`result-heading`);
text(`Expected Result`);
ec('div');
let cmplYnl = this._lc('caW0z6HYp', {parent:component,parentTop:projectLayout,props:{content:component.testCase.expectedBehavior}});
ec('div');
let elw0ZNp = eo('div',null,null,`class`,`simple-card p-1 m-b-1`);
let elQTDOg = eo('div',null,null,`class`,`result-heading`);
text(`Actual Result`);
ec('div');
let cmp0MC3 = this._lc('cerbnHSqw', {parent:component,parentTop:projectLayout,props:{content:component.testCase.actualResult}});
ec('div');
let cmpk_I8 = this._lc('crr5uJOQu', {parent:component,parentTop:projectLayout,props:{project:component.project,comments:component.testCase.comments,typeId:component.testCase.id},attrs:{type:'testCase'}});
let elZ1oki = eo('h3',null,null,`class`,`bold m-t-2 m-b-1`);
text(`Test Case Status Change Log`);
ec('h3');
let elk0MB1 = eo('table',null,null,`class`,`table table-bordered`);
let elKMj6Y = eo('thead');
let elKe9D0 = eo('tr');
let eliZgWa = eo('th');
text(`Status`);
ec('th');
let elC1mj0 = eo('th');
text(`Created By`);
ec('th');
let elMXbMZ = eo('th');
text(`Created`);
ec('th');
let elyS9LB = eo('th');
text(`Extra`);
ec('th');
ec('tr');
ec('thead');
let elBnYyr = eo('tbody');
for (let i in component.testCase.statuses) {
let status = component.testCase.statuses[i]; 
 let iiToG8 = 'h2ifNZC' + i;
let elvfWDl = eo('tr','7_A6sfaKPT5x' + i+iiToG8);
let elFlzsk = eo('td','OUCff'+iiToG8);
text(status.status.capitalize());
ec('td');
let el6u0NL = eo('td','Mmfff'+iiToG8);
text(status.createdBy.name);
ec('td');
let elZWzpw = eo('td','YMgff'+iiToG8);
let cmpAOwn = this._lc('cueONVMUS', {parent:component,parentTop:projectLayout,props:{timestamp:status.createdAt.timestamp},insideLoop:true,index:"" +iiToG8});
ec('td');
let elKgh4i = eo('td','of1ff'+iiToG8);
let cndwmCo = status.reason;
this.setState('steWWZ9', cndwmCo);
if (cndwmCo) { 
let elDzBIK = eo('strong','bxaff'+iiToG8);
text(status.reason);
ec('strong');
}let cndITsT = Object.get(status.bug, 'id', '');
this.setState('stpp0hD', cndITsT);
if (cndITsT) { 
let elktDn7 = eo('a','5JOff'+iiToG8,null,`href`,`${URLS.project(component.project, 'bugs', status.bug)}`);
text(`Bug #${ status.bug.id }`);
ec('a');
}ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
let elZPhFN = eo('div',null,null,`class`,`col col-sm-3 order-1`);
let elTtDQR = eo('div',null,null,`class`,`simple-card`);
let el0WqUO = eo('h2',null,null,`class`,`text-center`);
text(`Test Case Information`);
ec('h2');
let elMbEhI = eo('table',null,null,`class`,`table m-t-2`);
let elPYjhU = eo('tbody');
let elu2ATb = eo('tr');
let elq2PAW = eo('td');
text(`Type`);
ec('td');
let eladpHw = eo('th',null,null,`class`,`bold ${ component.testCase.type } text-capitalize`);
eladpHw.cls = {'green-text': component.testCase.type == 'positive', 'red-text': component.testCase.type == 'negative'};

            for (let className in eladpHw.cls) {
                eladpHw.classList.toggle(className, eladpHw.cls[className]);
            }  
            text(component.testCase.type);
ec('th');
ec('tr');
let cndgUYp = component.testCase.status;
this.setState('stILkVd', cndgUYp);
if (cndgUYp) { 
let elFCNle = eo('tr','0bKf');
let elHACpj = eo('td','Kh0f');
text(`Status`);
ec('td');
let el7cczB = eo('th','U_nf',null,`class`,`bold status ${ component.testCase.status } text-capitalize`);
el7cczB.cls = {'orange-text': component.testCase.status == 'blocked', 'green-text': component.testCase.status == 'passed', 'red-text': component.testCase.status == 'failed'};

            for (let className in el7cczB.cls) {
                el7cczB.classList.toggle(className, el7cczB.cls[className]);
            }  
            text(component.testCase.status);
ec('th');
ec('tr');
}let elmSK0f = eo('tr');
let eltqKVf = eo('td');
text(`Priority`);
ec('td');
let elc92rB = eo('th',null,null,`class`,`bold priority ${ component.testCase.priority }`);
text(component.testCase.priority);
ec('th');
ec('tr');
let cnda_vz = component.testCase.status == 'failed';
this.setState('str2cen', cnda_vz);
if (cnda_vz) { 
let eltDfUk = eo('tr','fUrf');
let elDBCwh = eo('td','Gfif');
text(`Bug`);
ec('td');
let elLkXew = eo('th','dchf');
let eluxd9G = eo('a','lYJf',null,`href`,`${URLS.project(component.project, 'bugs', component.testCase.bug)}`);
text('#' + component.testCase.bug.id);
ec('a');
ec('th');
ec('tr');
}let el9x9l9 = eo('tr');
let elslrbp = eo('td');
text(`Test Suit`);
ec('td');
let el52Yeh = eo('th');
text(component.testCase.testSuit.name);
ec('th');
ec('tr');
let cnddcfx = component.testCase.attachment;
this.setState('stScgMc', cnddcfx);
if (cnddcfx) { 
let elsubBd = eo('tr','ddlf');
let elRQbb6 = eo('td','LXZf');
text(`Automation File`);
ec('td');
let elSo5vF = eo('th','SJOf');
let elrqKpr = eo('a','JRwf',null,`href`,`${component.testCase.attachment}`,`class`,`btn btn-sm btn-bold btn-pink`,`target`,`_blank`);
let el1wE7P = eo('i','TMpf',null,`class`,`${fas('cloud-download-alt') + ' mr-2 icon'}`);
ec('i');
text(`Download`);
ec('a');
ec('th');
ec('tr');
}ec('tbody');
ec('table');
ec('div');
let cndZ1Ny = component.testCaseStatusCanBeChanged;
this.setState('stWuoCX', cndZ1Ny);
if (cndZ1Ny) { 
let elgVXwV = eo('div','LiJf',null,`class`,`simple-card mt-2`);
let elVgAeR = eo('h2','ipvf',null,`class`,`text-center m-b-1`);
text(`Test Case Status`);
ec('h2');
component.statusChanger = this._lc('cYhc3pdCb', {parent:component,parentTop:projectLayout,props:{value:component.testCase.status,items:['passed', 'failed', 'blocked', 'dead']},events:{onselect:function(e) {let $el = this; component.openStatusChangeConfirm(e.value)}},attrs:{heading:'Change test case Status'},state:'stWuoCX'});
ec('div');
}ec('div');
ec('div');
}}});
let cndOknH = component.confirmStatusChange;
this.setState('stbeg4Q', cndOknH);
if (cndOknH) { 
let cmp0NLN = this._lc('cWA4yX5ie', {parent:component,props:{withInput:component.reasonIsRequired,message:component.getConfirmingMessage(),required:component.reasonIsRequired},events:{onclose:function(e) {let $el = this; component.statusChanger.currentValue = component.testCase.status; component.confirmStatusChange = null},onconfirm:function(e) {let $el = this; component.updateStatus(e)}},state:'stbeg4Q'});
}
                    this.isReadyToGo();
                }
        });