_Component({
                selector: 'task-details-page',
                c: 'TaskDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['task','user','getTaskStatus','taskStatusCanBeChanged','getAllowedTaskStatuses','updateTaskStatus'],
                children: {cU5ZaF9NK:'flk-spinner',cgv3UjmAv:'star-rating',cwpm4N7tw:'flk-time-ago',cpswh0Iyk:'markdown',cDJ2n3OU9:'flk-audio-player',cPwoNByrl:'flk-time-ago',c6U2DIAZv:'markdown',cHzusbPVz:'flk-audio-player',cPdiCxVDi:'task-checklist',cIrXkzY7B:'comments',cnPU1Likt:'flk-time-ago',cZ5rpnBXl:'gold-icon',cU3gEiwZz:'flk-time-remaining',cUQQQHv7i:'flk-dropdown-list',cBwI2fipb:'layout'},
                render: function (component) {
                    let cmpvNUg = this._lc('cBwI2fipb', {parent:component,content:(layout) => {let cnduM1C = ! component.task;
this.setState('stTTLPq', cnduM1C);
let cndpCrj = !(cnduM1C);
this.setState('st6FLzB', cndpCrj);
if (cnduM1C) { 
let cmpNGWy = this._lc('cU5ZaF9NK', {parent:component,parentTop:layout,state:'stTTLPq'});
}else { 
let el37OEQ = eo('div',null,null,`class`,`row`);
let ell4ZOv = eo('div',null,null,`class`,`col order-12 order-sm-1`);
let elpjpvK = eo('h1',null,null,`class`,`m-b-1`);
text('#' + component.task.id + ' ' + component.task.title);
ec('h1');
let cndJbgA = component.task.startsAt;
this.setState('stEIGjd', cndJbgA);
if (cndJbgA) { 
let elshZmj = eo('div','45Hf',null,`class`,`teal-text bold`);
text( component.task.startsAt );
let cndF_Ln = component.task.endsAt;
this.setState('stfzRnK', cndF_Ln);
if (cndF_Ln) { 
text(`-
                    ${ component.task.endsAt }`);
}ec('div');
}let cndFWW2 = component.user.accountType == 'admin';
this.setState('stoS5Dx', cndFWW2);
if (cndFWW2) { 
let cmpLWsv = this._lc('cgv3UjmAv', {parent:component,parentTop:layout,attrs:{name:`${(`stars`).toInputName()}`,class:'form-group',stars:5},state:'stoS5Dx'});
}let elF4BH8 = eo('span',null,null,`title`,``);
let cmp__rS = this._lc('cwpm4N7tw', {parent:component,parentTop:layout,props:{timestamp:component.task.createdAt.timestamp}});
ec('span');

                    setTimeout(function () {
                        let $el = elF4BH8;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Created At')}`});
        ;
                    }, 20);                
                let cndAtBD = component.task.description;
this.setState('stNSFtV', cndAtBD);
if (cndAtBD) { 
let el3Wv0p = eo('h2','jD4f',null,`class`,`bold m-y-2`);
text(`Details`);
ec('h2');
let elrk4bt = eo('p','pqhf',null,`class`,`description card p-1`);
let cmpRRcr = this._lc('cpswh0Iyk', {parent:component,parentTop:layout,props:{content:component.task.description},state:'stNSFtV'});
ec('p');
}let elPUD2I = eo('div',null,null,`class`,`card my-3`);
let cndfuTA = component.task.descriptionRecord;
this.setState('stt219N', cndfuTA);
if (cndfuTA) { 
let cmp6YtZ = this._lc('cDJ2n3OU9', {parent:component,parentTop:layout,props:{src:component.task.descriptionRecord},attrs:{src:`${component.task.descriptionRecord}`},state:'stt219N'});
}ec('div');
let cndewMm = component.task.participantNotes;
this.setState('stQFaKM', cndewMm);
if (cndewMm) { 
let elie7IL = eo('div','4sQf',null,`class`,`card p-1 m-y-2`);
let el3hIPf = eo('h3','vhcf',null,`class`,`bold pink-text`);
text( component.task.participant.name );
ec('h3');
let cmpHHGf = this._lc('cPwoNByrl', {parent:component,parentTop:layout,props:{timestamp:component.task.submittedAt.timestamp},attrs:{class:'brown-text bold'},state:'stQFaKM'});
let elH1upF = eo('p','02Sf',null,`class`,`description m-y-2`);
let cmprHwE = this._lc('c6U2DIAZv', {parent:component,parentTop:layout,props:{content:component.task.participantNotes},state:'stQFaKM'});
ec('p');
let cndemA8 = component.task.participantRecord;
this.setState('st6j50V', cndemA8);
if (cndemA8) { 
let cmpHuJN = this._lc('cHzusbPVz', {parent:component,parentTop:layout,props:{src:component.task.participantRecord},attrs:{src:`${component.task.participantRecord}`},state:'st6j50V'});
}ec('div');
}let cmpmvpC = this._lc('cPdiCxVDi', {parent:component,parentTop:layout,props:{task:component.task}});
let cmphs21 = this._lc('cIrXkzY7B', {parent:component,parentTop:layout,props:{comments:component.task.comments,project:component.task.project,typeId:component.task.id},attrs:{type:'task'}});
let elI5dTM = eo('h3',null,null,`class`,`bold m-t-2 m-b-1`);
text(`Task Status Change Log`);
ec('h3');
let elGi9P_ = eo('table',null,null,`class`,`table table-bordered`,`id`,`status-table`);
let elWlogz = eo('thead');
let elRF3z6 = eo('tr');
let elPUUWZ = eo('th');
text(`Status`);
ec('th');
let elJmCb8 = eo('th');
text(`Created By`);
ec('th');
let elKlzrb = eo('th');
text(`Created`);
ec('th');
ec('tr');
ec('thead');
let elpPzk9 = eo('tbody');
for (let i in component.task.statusLog) {
let status = component.task.statusLog[i]; 
 let iipusO = 'Q0pHHij' + i;
let elil_Ou = eo('tr','8mUuc6tE5Cfv' + i+iipusO);
let ela9NFk = eo('td','g4yff'+iipusO);
let elxFVfc = eo('span','sdWff'+iipusO,null,`class`,`bold btn btn-sm status`);
elxFVfc.cls = taskStatus(status);

            for (let className in elxFVfc.cls) {
                elxFVfc.classList.toggle(className, elxFVfc.cls[className]);
            }  
            text(trans(status.status));
ec('span');
ec('td');
let elKvhCX = eo('td','IVEff'+iipusO);
text(status.status != 'autoFailed' ? status.createdBy.name : 'System');
ec('td');
let elGcuNe = eo('td','kS7ff'+iipusO);
let cmpsSuF = this._lc('cnPU1Likt', {parent:component,parentTop:layout,props:{timestamp:status.createdAt.timestamp},insideLoop:true,index:"" +iipusO});
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
let elYcL7B = eo('div',null,null,`class`,`col-sm-3 order-1`);
let cndTAc8 = Object.get(component.task.project, 'id', '');
this.setState('st88bxh', cndTAc8);
if (cndTAc8) { 
let el5KTx2 = eo('a','S80f',null,`href`,`${URLS.project(component.task.project, 'tasks-board')}`,`class`,`btn bold btn-purple m-b-1`);
text(`Back to Tasks Board`);
ec('a');
}let el21KID = eo('div',null,null,`class`,`card`);
let elQlHq6 = eo('div',null,null,`class`,`text-center`);
let elIUPNW = eo('div',null,null,`class`,`task-status badge`);
elIUPNW.cls = component.getTaskStatus();

            for (let className in elIUPNW.cls) {
                elIUPNW.classList.toggle(className, elIUPNW.cls[className]);
            }  
            text(trans(component.task.status));
ec('div');
let elwA0Gu = eo('div',null,null,`title`,``);
let cmpoPjR = this._lc('cZ5rpnBXl', {parent:component,parentTop:layout,props:{coins:component.task.reward}});
ec('div');

                    setTimeout(function () {
                        let $el = elwA0Gu;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Task Reward')}`});
        ;
                    }, 20);                
                let elAvTvW = eo('div',null,null,`title`,``,`class`,`m-b-1`);
let elneX4g = eo('strong',null,null,`class`,`red-text`);
text(component.task.penaltyRatio + 'x');
ec('strong');
ec('div');

                    setTimeout(function () {
                        let $el = elAvTvW;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Penalty ratio')}`});
        ;
                    }, 20);                
                let cndHk3f = component.task.endsAtTimestamp;
this.setState('st472JK', cndHk3f);
if (cndHk3f) { 
let el8aXQS = eo('div','7qof',null,`title`,``,`class`,`m-b-2`);
let elpK4aa = eo('i','jjRf',null,`class`,`${fas('clock') + ' mr-2 icon'}`);
ec('i');
let cmpaNc7 = this._lc('cU3gEiwZz', {parent:component,parentTop:layout,props:{startsAt:component.task.startsAtTimestamp,endsAt:component.task.endsAtTimestamp},attrs:{class:'bold'},state:'st472JK'});
ec('div');

                    setTimeout(function () {
                        let $el = el8aXQS;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.task.endsAtTimestamp - component.task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time'}`});
        ;
                    }, 20);                
                }ec('div');
ec('div');
let cndk3vB = ! Is.empty(component.task.parent);
this.setState('stnJ1ZR', cndk3vB);
if (cndk3vB) { 
let elNKPWF = eo('div','lL_f',null,`class`,`card p-1`);
let elLVRnB = eo('div','tUPf',null,`class`,`bold text-center m-b-1`);
let elQlHY5 = eo('i','nE4f',null,`class`,`${fas('folder-open') + ' mr-2 icon'}`);
ec('i');
text(`Parent Task`);
ec('div');
let elTvl8d = eo('a','APYf',null,`href`,`${URLS.task(component.task.parent)}`,`class`,`btn btn-cyan bold`);
text(component.task.parent.title);
ec('a');
ec('div');
}let elCj2Wt = eo('div',null,null,`class`,`card p-1`);
let elTrpTR = eo('div',null,null,`class`,`bold text-center m-b-1`);
let elszsBB = eo('i',null,null,`class`,`${fas('user') + ' mr-2 icon'}`);
ec('i');
text(`Participant`);
ec('div');
let elgYWWu = eo('div',null,null,`class`,`bold teal-text`);
text(component.task.participant.name);
ec('div');
ec('div');
let elEUaKk = eo('div',null,null,`class`,`card p-1`);
let elsq7Ds = eo('div',null,null,`class`,`bold text-center m-b-1`);
let el2Cv4W = eo('i',null,null,`class`,`${fas('user-secret') + ' mr-2 icon'}`);
ec('i');
text(`Supervisors`);
ec('div');
for (let i in component.task.supervisors) {
let supervisor = component.task.supervisors[i]; 
 let iiIViR = 'bwiYTMx' + i;
let el6LGfs = eo('div','NjpokMFPcY5j' + i+iiIViR,null,`class`,`bold green-text`);
text(supervisor.name);
ec('div');
}
ec('div');
let cndXRq0 = component.task.project;
this.setState('st5Xrwf', cndXRq0);
if (cndXRq0) { 
let el0tjVe = eo('div','Wacf',null,`class`,`card p-1`);
let elAQRX4 = eo('div','nJqf',null,`class`,`bold text-center m-b-1`);
let elaQmht = eo('i','Bbjf',null,`class`,`${fas('suitcase') + ' mr-2 icon'}`);
ec('i');
text(`Project`);
ec('div');
let cndbGnu = component.task.module;
this.setState('studjLR', cndbGnu);
if (cndbGnu) { 
let el3dPH0 = eo('div','4dOf');
let elV8TGj = eo('span','h_ff',null,`class`,`mr-2`);
text(`Module:`);
ec('span');
let cndD_T0 = component.task.module.parent.id;
this.setState('stHVdep', cndD_T0);
if (cndD_T0) { 
let elq0A_Y = eo('strong','mKff');
text(`${ component.task.module.parent.name } »`);
ec('strong');
}let elwCqvm = eo('strong');
text(component.task.module.name);
ec('strong');
ec('div');
}let elnIMKM = eo('a',null,null,`href`,`${URLS.project(component.task.project)}`,`class`,`btn btn-teal bold`);
text(component.task.project.name);
ec('a');
ec('div');
}let cndE91t = component.task.userStory;
this.setState('stJEg3_', cndE91t);
if (cndE91t) { 
let eldv8wA = eo('div','i4sf',null,`class`,`card p-1`);
let elwQV4D = eo('div','uZBf',null,`class`,`bold text-center m-b-1`);
let elkRHMC = eo('i','dWjf',null,`class`,`${fas('sticky-note') + ' mr-2 icon'}`);
ec('i');
text(`User Story`);
ec('div');
let elSNjcf = eo('a','A6Qf',null,`href`,`${URLS.project(component.task.project, 'user-stories', component.task.userStory)}`,`class`,`btn btn-pink bold`);
text(component.task.userStory.title);
ec('a');
ec('div');
}let cnd46_6 = component.taskStatusCanBeChanged();
this.setState('stmokvw', cnd46_6);
if (cnd46_6) { 
let elLdfBc = eo('div','6_mf',null,`class`,`card p-1`);
let elftkCd = eo('div','wwLf',null,`class`,`text-center bold m-b-1 purple-text`);
text(`Mark task as`);
ec('div');
let cmpJnSZ = this._lc('cUQQQHv7i', {parent:component,parentTop:layout,props:{items:component.getAllowedTaskStatuses(),value:component.task.status},events:{onselect:function(e) {let $el = this; component.updateTaskStatus(e.value)}},attrs:{heading:'Mark Task As..'},state:'stmokvw'});
ec('div');
}ec('div');
ec('div');
}}});

                    this.isReadyToGo();
                }
        });