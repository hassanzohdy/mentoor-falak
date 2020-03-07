_Component({
                selector: 'task-details-page',
                c: 'TaskDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['task','isSupervisor','rate','getTaskStatus','taskStatusCanBeChanged','getAllowedTaskStatuses','updateTaskStatus'],
                children: {c4oU4cB3s:'flk-spinner',cqtY0ktu9:'star-rating',c7nnOVVBX:'flk-time-ago',cZpKd68fE:'markdown',cuew9grhG:'flk-audio-player',cfduvDoxd:'flk-time-ago',cNE8IX0bP:'markdown',ciTwRfpWM:'flk-audio-player',c38b_YpZy:'task-checklist',cpGtigRHH:'comments',ceSmCVcXU:'flk-time-ago',ctXnf9eTe:'gold-icon',cWRcrvdeH:'flk-time-remaining',cjUw4Pa_J:'flk-dropdown-list',cfNAkgBjv:'layout'},
                render: function (component) {
                    let cmpXahd = this._lc('cfNAkgBjv', {parent:component,content:(layout) => {let cndPEVU = ! component.task;
this.setState('stm1FgE', cndPEVU);
let cndoZZW = !(cndPEVU);
this.setState('steDLlM', cndoZZW);
if (cndPEVU) { 
let cmp1FKR = this._lc('c4oU4cB3s', {parent:component,parentTop:layout,state:'stm1FgE'});
}else { 
let ely9Wkt = eo('div',null,null,`class`,`row`);
let el7eyin = eo('div',null,null,`class`,`col order-12 order-sm-1`);
let elx9G2Q = eo('h1',null,null,`class`,`m-b-1`);
text('#' + component.task.id + ' ' + component.task.title);
ec('h1');
let cndHkSi = component.task.startsAt;
this.setState('stiRUmH', cndHkSi);
if (cndHkSi) { 
let elelt2K = eo('div','XGOf',null,`class`,`teal-text bold`);
text( component.task.startsAt );
let cndZx4N = component.task.endsAt;
this.setState('st5GV8Y', cndZx4N);
if (cndZx4N) { 
text(`-
                    ${ component.task.endsAt }`);
}ec('div');
}let cmpemLd = this._lc('cqtY0ktu9', {parent:component,parentTop:layout,props:{readonly:! component.isSupervisor()},events:{onselect:function(e) {let $el = this; component.rate(e)}},boolAttrs:{readOnly:! component.isSupervisor()},attrs:{class:'form-group'}});
let elsxLWb = eo('span',null,null,`title`,``);
let cmpmE_G = this._lc('c7nnOVVBX', {parent:component,parentTop:layout,props:{timeFormat:component.task.createdAt.format,timestamp:component.task.createdAt.timestamp}});
ec('span');

                    setTimeout(function () {
                        let $el = elsxLWb;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Created At')}`});
        ;
                    }, 20);                
                let cndLFLo = component.task.description;
this.setState('stzmh9X', cndLFLo);
if (cndLFLo) { 
let el0rypT = eo('h2','HNAf',null,`class`,`bold m-y-2`);
text(`Details`);
ec('h2');
let elo4OlJ = eo('p','279f',null,`class`,`description card p-1`);
let cmpmAcB = this._lc('cZpKd68fE', {parent:component,parentTop:layout,props:{content:component.task.description},state:'stzmh9X'});
ec('p');
}let eltAvy6 = eo('div',null,null,`class`,`card my-3`);
let cnd13bI = component.task.descriptionRecord;
this.setState('stVcSd5', cnd13bI);
if (cnd13bI) { 
let cmpNb2_ = this._lc('cuew9grhG', {parent:component,parentTop:layout,props:{src:component.task.descriptionRecord},attrs:{src:`${component.task.descriptionRecord}`},state:'stVcSd5'});
}ec('div');
let cndLrhF = component.task.participantNotes;
this.setState('st8BcoG', cndLrhF);
if (cndLrhF) { 
let elbj2QR = eo('div','Z8zf',null,`class`,`card p-1 m-y-2`);
let elsWCsE = eo('h3','7TAf',null,`class`,`bold pink-text`);
text( component.task.participant.name );
ec('h3');
let cmppmlN = this._lc('cfduvDoxd', {parent:component,parentTop:layout,props:{timeFormat:component.task.submittedAt.format,timestamp:component.task.submittedAt.timestamp},attrs:{class:'brown-text bold'},state:'st8BcoG'});
let elnj2ys = eo('p','Lnlf',null,`class`,`description m-y-2`);
let cmpf1oM = this._lc('cNE8IX0bP', {parent:component,parentTop:layout,props:{content:component.task.participantNotes},state:'st8BcoG'});
ec('p');
let cnd0wKL = component.task.participantRecord;
this.setState('st8ZpLI', cnd0wKL);
if (cnd0wKL) { 
let cmp6CJo = this._lc('ciTwRfpWM', {parent:component,parentTop:layout,props:{src:component.task.participantRecord},attrs:{src:`${component.task.participantRecord}`},state:'st8ZpLI'});
}ec('div');
}let cmpkEUy = this._lc('c38b_YpZy', {parent:component,parentTop:layout,props:{task:component.task}});
let cmp_kg6 = this._lc('cpGtigRHH', {parent:component,parentTop:layout,props:{comments:component.task.comments,project:component.task.project,typeId:component.task.id},attrs:{type:'task'}});
let el0ALug = eo('h3',null,null,`class`,`bold m-t-2 m-b-1`);
text(`Task Status Change Log`);
ec('h3');
let elubxt4 = eo('table',null,null,`class`,`table table-bordered`,`id`,`status-table`);
let elKrkpu = eo('thead');
let elkxpS1 = eo('tr');
let elEpob0 = eo('th');
text(`Status`);
ec('th');
let elBGGhN = eo('th');
text(`Created By`);
ec('th');
let el5VWh3 = eo('th');
text(`Created`);
ec('th');
ec('tr');
ec('thead');
let elbLYnn = eo('tbody');
for (let i in component.task.statusLog) {
let status = component.task.statusLog[i]; 
 let ii7ATx = 'resGoIV' + i;
let elrMy_c = eo('tr','tKmpN39EdjDl' + i+ii7ATx);
let elV2223 = eo('td','TTEff'+ii7ATx);
let elq8LaV = eo('span','L_lff'+ii7ATx,null,`class`,`bold btn btn-sm status ${cls(taskStatus(status))}`);
text(trans(status.status));
ec('span');
ec('td');
let el6r7vq = eo('td','gA9ff'+ii7ATx);
text(status.status != 'autoFailed' ? status.createdBy.name : 'System');
ec('td');
let elHGQMs = eo('td','4UIff'+ii7ATx);
let cmphmlI = this._lc('ceSmCVcXU', {parent:component,parentTop:layout,props:{timestamp:status.createdAt.timestamp},insideLoop:true,index:"" +ii7ATx});
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
let elHReMN = eo('div',null,null,`class`,`col-sm-3 order-1`);
let cndPHnv = Object.get(component.task.project, 'id', '');
this.setState('stGoSG4', cndPHnv);
if (cndPHnv) { 
let elOYYgF = eo('a','Yfqf',null,`href`,`${URLS.project(component.task.project, 'tasks-board')}`,`class`,`btn bold btn-purple m-b-1`);
text(`Back to Tasks Board`);
ec('a');
}let eledffb = eo('div',null,null,`class`,`card`);
let elUh4q7 = eo('div',null,null,`class`,`text-center`);
let elCWUt1 = eo('div',null,null,`class`,`task-status badge ${cls(component.getTaskStatus())}`);
text(trans(component.task.status));
ec('div');
let elPRV0t = eo('div',null,null,`title`,``);
let cmps7qA = this._lc('ctXnf9eTe', {parent:component,parentTop:layout,props:{coins:component.task.reward}});
ec('div');

                    setTimeout(function () {
                        let $el = elPRV0t;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Task Reward')}`});
        ;
                    }, 20);                
                let elnzzP7 = eo('div',null,null,`title`,``,`class`,`m-b-1`);
let elt6u3e = eo('strong',null,null,`class`,`red-text`);
text(component.task.penaltyRatio + 'x');
ec('strong');
ec('div');

                    setTimeout(function () {
                        let $el = elnzzP7;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Penalty ratio')}`});
        ;
                    }, 20);                
                let cnd7p4o = component.task.endsAtTimestamp;
this.setState('stvzJ2n', cnd7p4o);
if (cnd7p4o) { 
let el8Jp_T = eo('div','hXCf',null,`title`,``,`class`,`m-b-2`);
let elWtKlC = eo('i','2ggf',null,`class`,`${fas('clock')} mr-2 icon`);
ec('i');
let cmpTZqk = this._lc('cWRcrvdeH', {parent:component,parentTop:layout,props:{startsAt:component.task.startsAtTimestamp,endsAt:component.task.endsAtTimestamp},attrs:{class:'bold'},state:'stvzJ2n'});
ec('div');

                    setTimeout(function () {
                        let $el = el8Jp_T;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.task.endsAtTimestamp - component.task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time'}`});
        ;
                    }, 20);                
                }ec('div');
ec('div');
let cndD8yo = ! Is.empty(component.task.parent);
this.setState('stXqTvw', cndD8yo);
if (cndD8yo) { 
let elazgnK = eo('div','IPqf',null,`class`,`card p-1`);
let el1fQTt = eo('div','0oCf',null,`class`,`bold text-center m-b-1`);
let eldKxym = eo('i','LoDf',null,`class`,`${fas('folder-open')} mr-2 icon`);
ec('i');
text(`Parent Task`);
ec('div');
let el7Z6RG = eo('a','jPJf',null,`href`,`${URLS.task(component.task.parent)}`,`class`,`btn btn-cyan bold`);
text(component.task.parent.title);
ec('a');
ec('div');
}let elgcKlD = eo('div',null,null,`class`,`card p-1`);
let el6AlaN = eo('div',null,null,`class`,`bold text-center m-b-1`);
let elQy063 = eo('i',null,null,`class`,`${fas('user')} mr-2 icon`);
ec('i');
text(`Participant`);
ec('div');
let elelJz8 = eo('div',null,null,`class`,`bold teal-text`);
text(component.task.participant.name);
ec('div');
ec('div');
let elwHFaD = eo('div',null,null,`class`,`card p-1`);
let elM6Lp5 = eo('div',null,null,`class`,`bold text-center m-b-1`);
let eldd27C = eo('i',null,null,`class`,`${fas('user-secret')} mr-2 icon`);
ec('i');
text(`Supervisors`);
ec('div');
for (let i in component.task.supervisors) {
let supervisor = component.task.supervisors[i]; 
 let iiIg6V = 'y1f_ipt' + i;
let elD7IYR = eo('div','erELqpzq7MmD' + i+iiIg6V,null,`class`,`bold green-text`);
text(supervisor.name);
ec('div');
}
ec('div');
let cndRU7o = component.task.project;
this.setState('stCieXD', cndRU7o);
if (cndRU7o) { 
let elkCPCh = eo('div','5B9f',null,`class`,`card p-1`);
let el_LuSt = eo('div','oTzf',null,`class`,`bold text-center m-b-1`);
let el6YQiv = eo('i','7owf',null,`class`,`${fas('suitcase')} mr-2 icon`);
ec('i');
text(`Project`);
ec('div');
let cnd7aQ6 = component.task.module;
this.setState('stEYfM8', cnd7aQ6);
if (cnd7aQ6) { 
let elikFdA = eo('div','vylf');
let el_hHiB = eo('span','PF4f',null,`class`,`mr-2`);
text(`Module:`);
ec('span');
let cndYunZ = component.task.module.parent.id;
this.setState('st2GgNK', cndYunZ);
if (cndYunZ) { 
let el4Jj5P = eo('strong','pw6f');
text(`${ component.task.module.parent.name } »`);
ec('strong');
}let elMFVn4 = eo('strong');
text(component.task.module.name);
ec('strong');
ec('div');
}let elVhk9L = eo('a',null,null,`href`,`${URLS.project(component.task.project)}`,`class`,`btn btn-teal bold`);
text(component.task.project.name);
ec('a');
ec('div');
}let cndxgPP = component.task.userStory;
this.setState('sty7ruf', cndxgPP);
if (cndxgPP) { 
let elvjqR8 = eo('div','A1ef',null,`class`,`card p-1`);
let elXasJD = eo('div','7vZf',null,`class`,`bold text-center m-b-1`);
let elUSKui = eo('i','kiDf',null,`class`,`${fas('sticky-note')} mr-2 icon`);
ec('i');
text(`User Story`);
ec('div');
let elwiuv7 = eo('a','cvhf',null,`href`,`${URLS.project(component.task.project, 'user-stories', component.task.userStory)}`,`class`,`btn btn-pink bold`);
text(component.task.userStory.title);
ec('a');
ec('div');
}let cndImHY = component.taskStatusCanBeChanged();
this.setState('stF1AZi', cndImHY);
if (cndImHY) { 
let elZZ9hE = eo('div','4s7f',null,`class`,`card p-1`);
let elVa0Uv = eo('div','1aaf',null,`class`,`text-center bold m-b-1 purple-text`);
text(`Mark task as`);
ec('div');
let cmpHQ8y = this._lc('cjUw4Pa_J', {parent:component,parentTop:layout,props:{items:component.getAllowedTaskStatuses(),value:component.task.status},events:{onselect:function(e) {let $el = this; component.updateTaskStatus(e.value)}},attrs:{heading:'Mark Task As..'},state:'stF1AZi'});
ec('div');
}ec('div');
ec('div');
}}});

                    this.isReadyToGo();
                }
        });