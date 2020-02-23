_Component({
                selector: 'task-details-page',
                c: 'TaskDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['task','user','rate','getTaskStatus','taskStatusCanBeChanged','getAllowedTaskStatuses','updateTaskStatus'],
                children: {c1NIQt31Q:'flk-spinner',cJC3VRWtm:'star-rating',c7vghUYB7:'flk-time-ago',cNKFgP1QF:'markdown',cRT7HCa39:'flk-audio-player',cjLU7bjHT:'flk-time-ago',cW2U43pdS:'markdown',cEj2Si4WJ:'flk-audio-player',c3Maxjzo_:'task-checklist',cvGPZDjbx:'comments',cOrPGCD25:'flk-time-ago',cMNH0hcxZ:'gold-icon',c8LMW1eUQ:'flk-time-remaining',cRoLyuQb3:'flk-dropdown-list',cHjhKpRqC:'layout'},
                render: function (component) {
                    let cmpHHuI = this._lc('cHjhKpRqC', {parent:component,content:(layout) => {let cndwPjg = ! component.task;
this.setState('sttZ6xJ', cndwPjg);
let cnduCDa = !(cndwPjg);
this.setState('stPnpwx', cnduCDa);
if (cndwPjg) { 
let cmphYOV = this._lc('c1NIQt31Q', {parent:component,parentTop:layout,state:'sttZ6xJ'});
}else { 
let elARkSp = eo('div',null,null,`class`,`row`);
let el6Swkz = eo('div',null,null,`class`,`col order-12 order-sm-1`);
let elM5yga = eo('h1',null,null,`class`,`m-b-1`);
text('#' + component.task.id + ' ' + component.task.title);
ec('h1');
let cndz3b3 = component.task.startsAt;
this.setState('stQzOyx', cndz3b3);
if (cndz3b3) { 
let el5_8xz = eo('div','wXDf',null,`class`,`teal-text bold`);
text( component.task.startsAt );
let cnd6GJd = component.task.endsAt;
this.setState('stTd2rs', cnd6GJd);
if (cnd6GJd) { 
text(`-
                    ${ component.task.endsAt }`);
}ec('div');
}let cmpKBLN = this._lc('cJC3VRWtm', {parent:component,parentTop:layout,props:{readonly:! component.user.accountType == 'admin'},events:{onselect:function(e) {let $el = this; component.rate(e)}},boolAttrs:{readOnly:! component.user.accountType == 'admin'},attrs:{class:'form-group'}});
let elEodDo = eo('span',null,null,`title`,``);
let cmph7QY = this._lc('c7vghUYB7', {parent:component,parentTop:layout,props:{timeFormat:component.task.createdAt.format,timestamp:component.task.createdAt.timestamp}});
ec('span');

                    setTimeout(function () {
                        let $el = elEodDo;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Created At')}`});
        ;
                    }, 20);                
                let cndEAFO = component.task.description;
this.setState('stQ1_3Q', cndEAFO);
if (cndEAFO) { 
let elvKpuG = eo('h2','OHYf',null,`class`,`bold m-y-2`);
text(`Details`);
ec('h2');
let el16SQ8 = eo('p','9QKf',null,`class`,`description card p-1`);
let cmpF2yh = this._lc('cNKFgP1QF', {parent:component,parentTop:layout,props:{content:component.task.description},state:'stQ1_3Q'});
ec('p');
}let elMrEqE = eo('div',null,null,`class`,`card my-3`);
let cndZycQ = component.task.descriptionRecord;
this.setState('stpcMKJ', cndZycQ);
if (cndZycQ) { 
let cmpJ0w9 = this._lc('cRT7HCa39', {parent:component,parentTop:layout,props:{src:component.task.descriptionRecord},attrs:{src:`${component.task.descriptionRecord}`},state:'stpcMKJ'});
}ec('div');
let cndoeP2 = component.task.participantNotes;
this.setState('stsqw6m', cndoeP2);
if (cndoeP2) { 
let elza6DO = eo('div','1Onf',null,`class`,`card p-1 m-y-2`);
let elf9dCa = eo('h3','tSOf',null,`class`,`bold pink-text`);
text( component.task.participant.name );
ec('h3');
let cmpPalv = this._lc('cjLU7bjHT', {parent:component,parentTop:layout,props:{timeFormat:component.task.submittedAt.format,timestamp:component.task.submittedAt.timestamp},attrs:{class:'brown-text bold'},state:'stsqw6m'});
let elgHif6 = eo('p','rpdf',null,`class`,`description m-y-2`);
let cmpvedl = this._lc('cW2U43pdS', {parent:component,parentTop:layout,props:{content:component.task.participantNotes},state:'stsqw6m'});
ec('p');
let cndHHZW = component.task.participantRecord;
this.setState('stadXuY', cndHHZW);
if (cndHHZW) { 
let cmpPz2y = this._lc('cEj2Si4WJ', {parent:component,parentTop:layout,props:{src:component.task.participantRecord},attrs:{src:`${component.task.participantRecord}`},state:'stadXuY'});
}ec('div');
}let cmpl3Ms = this._lc('c3Maxjzo_', {parent:component,parentTop:layout,props:{task:component.task}});
let cmpNHjP = this._lc('cvGPZDjbx', {parent:component,parentTop:layout,props:{comments:component.task.comments,project:component.task.project,typeId:component.task.id},attrs:{type:'task'}});
let elPCYj5 = eo('h3',null,null,`class`,`bold m-t-2 m-b-1`);
text(`Task Status Change Log`);
ec('h3');
let elbRUB1 = eo('table',null,null,`class`,`table table-bordered`,`id`,`status-table`);
let elwL2HM = eo('thead');
let elPJ_mI = eo('tr');
let el292El = eo('th');
text(`Status`);
ec('th');
let elLbMAr = eo('th');
text(`Created By`);
ec('th');
let el0NrQE = eo('th');
text(`Created`);
ec('th');
ec('tr');
ec('thead');
let elr1a48 = eo('tbody');
for (let i in component.task.statusLog) {
let status = component.task.statusLog[i]; 
 let iiMuJP = 'PgT1Zp2' + i;
let elxD4Ue = eo('tr','rlI1kowCL3PG' + i+iiMuJP);
let elT3MxT = eo('td','oKEff'+iiMuJP);
let elZhtnV = eo('span','sI6ff'+iiMuJP,null,`class`,`bold btn btn-sm status`);
elZhtnV.cls = taskStatus(status);

            for (let className in elZhtnV.cls) {
                elZhtnV.classList.toggle(className, elZhtnV.cls[className]);
            }  
            text(trans(status.status));
ec('span');
ec('td');
let elw3Hjf = eo('td','fGHff'+iiMuJP);
text(status.status != 'autoFailed' ? status.createdBy.name : 'System');
ec('td');
let elowwq4 = eo('td','Tkqff'+iiMuJP);
let cmpqa9i = this._lc('cOrPGCD25', {parent:component,parentTop:layout,props:{timestamp:status.createdAt.timestamp},insideLoop:true,index:"" +iiMuJP});
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
let elEjdJk = eo('div',null,null,`class`,`col-sm-3 order-1`);
let cnd7zui = Object.get(component.task.project, 'id', '');
this.setState('stETmRo', cnd7zui);
if (cnd7zui) { 
let el949CK = eo('a','w0Vf',null,`href`,`${URLS.project(component.task.project, 'tasks-board')}`,`class`,`btn bold btn-purple m-b-1`);
text(`Back to Tasks Board`);
ec('a');
}let el3b_He = eo('div',null,null,`class`,`card`);
let elsZZtt = eo('div',null,null,`class`,`text-center`);
let elFYY9V = eo('div',null,null,`class`,`task-status badge`);
elFYY9V.cls = component.getTaskStatus();

            for (let className in elFYY9V.cls) {
                elFYY9V.classList.toggle(className, elFYY9V.cls[className]);
            }  
            text(trans(component.task.status));
ec('div');
let elU3m13 = eo('div',null,null,`title`,``);
let cmpQnZy = this._lc('cMNH0hcxZ', {parent:component,parentTop:layout,props:{coins:component.task.reward}});
ec('div');

                    setTimeout(function () {
                        let $el = elU3m13;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Task Reward')}`});
        ;
                    }, 20);                
                let elzPxZc = eo('div',null,null,`title`,``,`class`,`m-b-1`);
let elx503T = eo('strong',null,null,`class`,`red-text`);
text(component.task.penaltyRatio + 'x');
ec('strong');
ec('div');

                    setTimeout(function () {
                        let $el = elzPxZc;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Penalty ratio')}`});
        ;
                    }, 20);                
                let cndfHdl = component.task.endsAtTimestamp;
this.setState('stRN8C7', cndfHdl);
if (cndfHdl) { 
let elMtAXd = eo('div','uGVf',null,`title`,``,`class`,`m-b-2`);
let eleGS9F = eo('i','Qfwf',null,`class`,`${fas('clock') + ' mr-2 icon'}`);
ec('i');
let cmpS5id = this._lc('c8LMW1eUQ', {parent:component,parentTop:layout,props:{startsAt:component.task.startsAtTimestamp,endsAt:component.task.endsAtTimestamp},attrs:{class:'bold'},state:'stRN8C7'});
ec('div');

                    setTimeout(function () {
                        let $el = elMtAXd;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.task.endsAtTimestamp - component.task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time'}`});
        ;
                    }, 20);                
                }ec('div');
ec('div');
let cndCksg = ! Is.empty(component.task.parent);
this.setState('stRw5K_', cndCksg);
if (cndCksg) { 
let el6nWjK = eo('div','U8qf',null,`class`,`card p-1`);
let elHhumu = eo('div','V3Ef',null,`class`,`bold text-center m-b-1`);
let elxfmL3 = eo('i','dFFf',null,`class`,`${fas('folder-open') + ' mr-2 icon'}`);
ec('i');
text(`Parent Task`);
ec('div');
let el1ewU5 = eo('a','LZdf',null,`href`,`${URLS.task(component.task.parent)}`,`class`,`btn btn-cyan bold`);
text(component.task.parent.title);
ec('a');
ec('div');
}let elqb3zF = eo('div',null,null,`class`,`card p-1`);
let elHVpZH = eo('div',null,null,`class`,`bold text-center m-b-1`);
let el9OEVA = eo('i',null,null,`class`,`${fas('user') + ' mr-2 icon'}`);
ec('i');
text(`Participant`);
ec('div');
let elntxwE = eo('div',null,null,`class`,`bold teal-text`);
text(component.task.participant.name);
ec('div');
ec('div');
let elMNPCI = eo('div',null,null,`class`,`card p-1`);
let el4pexS = eo('div',null,null,`class`,`bold text-center m-b-1`);
let elIUjii = eo('i',null,null,`class`,`${fas('user-secret') + ' mr-2 icon'}`);
ec('i');
text(`Supervisors`);
ec('div');
for (let i in component.task.supervisors) {
let supervisor = component.task.supervisors[i]; 
 let iiNsR1 = 'mbhbDaq' + i;
let elzcEgf = eo('div','a3SIujB3qAXO' + i+iiNsR1,null,`class`,`bold green-text`);
text(supervisor.name);
ec('div');
}
ec('div');
let cndgc7M = component.task.project;
this.setState('stDsOCQ', cndgc7M);
if (cndgc7M) { 
let elhk3Tv = eo('div','GIFf',null,`class`,`card p-1`);
let elw6MpK = eo('div','pLNf',null,`class`,`bold text-center m-b-1`);
let elUbg_8 = eo('i','gu1f',null,`class`,`${fas('suitcase') + ' mr-2 icon'}`);
ec('i');
text(`Project`);
ec('div');
let cndEbhR = component.task.module;
this.setState('stAebxX', cndEbhR);
if (cndEbhR) { 
let ellE46e = eo('div','q7wf');
let eloHaCD = eo('span','AtEf',null,`class`,`mr-2`);
text(`Module:`);
ec('span');
let cndp0SA = component.task.module.parent.id;
this.setState('stngExZ', cndp0SA);
if (cndp0SA) { 
let elYSc3e = eo('strong','XW2f');
text(`${ component.task.module.parent.name } »`);
ec('strong');
}let elw1Due = eo('strong');
text(component.task.module.name);
ec('strong');
ec('div');
}let elF6_cf = eo('a',null,null,`href`,`${URLS.project(component.task.project)}`,`class`,`btn btn-teal bold`);
text(component.task.project.name);
ec('a');
ec('div');
}let cnd6vw3 = component.task.userStory;
this.setState('stWSJwC', cnd6vw3);
if (cnd6vw3) { 
let el0R4C2 = eo('div','lzgf',null,`class`,`card p-1`);
let eloTAle = eo('div','KGQf',null,`class`,`bold text-center m-b-1`);
let el2kHPp = eo('i','oKzf',null,`class`,`${fas('sticky-note') + ' mr-2 icon'}`);
ec('i');
text(`User Story`);
ec('div');
let elvUsOP = eo('a','lcUf',null,`href`,`${URLS.project(component.task.project, 'user-stories', component.task.userStory)}`,`class`,`btn btn-pink bold`);
text(component.task.userStory.title);
ec('a');
ec('div');
}let cnd1r4_ = component.taskStatusCanBeChanged();
this.setState('stNd7Mk', cnd1r4_);
if (cnd1r4_) { 
let elBxTRV = eo('div','ZVlf',null,`class`,`card p-1`);
let elL8VW8 = eo('div','TUjf',null,`class`,`text-center bold m-b-1 purple-text`);
text(`Mark task as`);
ec('div');
let cmp3lDE = this._lc('cRoLyuQb3', {parent:component,parentTop:layout,props:{items:component.getAllowedTaskStatuses(),value:component.task.status},events:{onselect:function(e) {let $el = this; component.updateTaskStatus(e.value)}},attrs:{heading:'Mark Task As..'},state:'stNd7Mk'});
ec('div');
}ec('div');
ec('div');
}}});

                    this.isReadyToGo();
                }
        });