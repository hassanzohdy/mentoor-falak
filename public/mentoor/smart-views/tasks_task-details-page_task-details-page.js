_Component({
                selector: 'task-details-page',
                c: 'TaskDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['task','user','rate','getTaskStatus','taskStatusCanBeChanged','getAllowedTaskStatuses','updateTaskStatus'],
                children: {c9_3X42XV:'flk-spinner',c_4E2fu6k:'star-rating',c77av6G3D:'flk-time-ago',cqTQBjNZS:'markdown',co_keHnwM:'flk-audio-player',cU5daF1VN:'flk-time-ago',cpdkr3ozs:'markdown',ccNMdzAzp:'flk-audio-player',cL_xyeIEB:'task-checklist',c_L5Z0UpG:'comments',cc2g9TG1U:'flk-time-ago',ciY20lDjQ:'gold-icon',cpIhw8y3j:'flk-time-remaining',cGoOpC5w9:'flk-dropdown-list',c7yiYpygK:'layout'},
                render: function (component) {
                    let cmpXnjj = this._lc('c7yiYpygK', {parent:component,content:(layout) => {let cndwGRp = ! component.task;
this.setState('stc6J2f', cndwGRp);
let cnd0dhZ = !(cndwGRp);
this.setState('st75X57', cnd0dhZ);
if (cndwGRp) { 
let cmpPtql = this._lc('c9_3X42XV', {parent:component,parentTop:layout,state:'stc6J2f'});
}else { 
let elGoqEM = eo('div',null,null,`class`,`row`);
let elemJnU = eo('div',null,null,`class`,`col order-12 order-sm-1`);
let elCyTqa = eo('h1',null,null,`class`,`m-b-1`);
text('#' + component.task.id + ' ' + component.task.title);
ec('h1');
let cndQShw = component.task.startsAt;
this.setState('stj7MZa', cndQShw);
if (cndQShw) { 
let elqfRwP = eo('div','xLof',null,`class`,`teal-text bold`);
text( component.task.startsAt );
let cndGQGi = component.task.endsAt;
this.setState('stj_cFR', cndGQGi);
if (cndGQGi) { 
text(`-
                    ${ component.task.endsAt }`);
}ec('div');
}let cmpztZO = this._lc('c_4E2fu6k', {parent:component,parentTop:layout,props:{readonly:! component.user.accountType == 'admin'},events:{onselect:function(e) {let $el = this; component.rate(e)}},boolAttrs:{readOnly:! component.user.accountType == 'admin'},attrs:{class:'form-group'}});
let elulr2M = eo('span',null,null,`title`,``);
let cmpCLQd = this._lc('c77av6G3D', {parent:component,parentTop:layout,props:{timeFormat:component.task.createdAt.format,timestamp:component.task.createdAt.timestamp}});
ec('span');

                    setTimeout(function () {
                        let $el = elulr2M;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Created At')}`});
        ;
                    }, 20);                
                let cndlEHN = component.task.description;
this.setState('stFEh7N', cndlEHN);
if (cndlEHN) { 
let el6C1xi = eo('h2','ydef',null,`class`,`bold m-y-2`);
text(`Details`);
ec('h2');
let elySOw_ = eo('p','evvf',null,`class`,`description card p-1`);
let cmp6_Dm = this._lc('cqTQBjNZS', {parent:component,parentTop:layout,props:{content:component.task.description},state:'stFEh7N'});
ec('p');
}let elIgDq2 = eo('div',null,null,`class`,`card my-3`);
let cndvo0c = component.task.descriptionRecord;
this.setState('stIlduJ', cndvo0c);
if (cndvo0c) { 
let cmpgVZS = this._lc('co_keHnwM', {parent:component,parentTop:layout,props:{src:component.task.descriptionRecord},attrs:{src:`${component.task.descriptionRecord}`},state:'stIlduJ'});
}ec('div');
let cnddZF3 = component.task.participantNotes;
this.setState('staKBpq', cnddZF3);
if (cnddZF3) { 
let elSqOHM = eo('div','wGOf',null,`class`,`card p-1 m-y-2`);
let elIjlH_ = eo('h3','hPwf',null,`class`,`bold pink-text`);
text( component.task.participant.name );
ec('h3');
let cmpp4Ad = this._lc('cU5daF1VN', {parent:component,parentTop:layout,props:{timeFormat:component.task.submittedAt.format,timestamp:component.task.submittedAt.timestamp},attrs:{class:'brown-text bold'},state:'staKBpq'});
let el3PJ7a = eo('p','7cyf',null,`class`,`description m-y-2`);
let cmpAqmZ = this._lc('cpdkr3ozs', {parent:component,parentTop:layout,props:{content:component.task.participantNotes},state:'staKBpq'});
ec('p');
let cndvdto = component.task.participantRecord;
this.setState('st7Kp06', cndvdto);
if (cndvdto) { 
let cmpFHbo = this._lc('ccNMdzAzp', {parent:component,parentTop:layout,props:{src:component.task.participantRecord},attrs:{src:`${component.task.participantRecord}`},state:'st7Kp06'});
}ec('div');
}let cmpOEGq = this._lc('cL_xyeIEB', {parent:component,parentTop:layout,props:{task:component.task}});
let cmpJFdn = this._lc('c_L5Z0UpG', {parent:component,parentTop:layout,props:{comments:component.task.comments,project:component.task.project,typeId:component.task.id},attrs:{type:'task'}});
let elwn2iG = eo('h3',null,null,`class`,`bold m-t-2 m-b-1`);
text(`Task Status Change Log`);
ec('h3');
let elrM9oa = eo('table',null,null,`class`,`table table-bordered`,`id`,`status-table`);
let elxSyaD = eo('thead');
let elF6Z93 = eo('tr');
let el2xJfB = eo('th');
text(`Status`);
ec('th');
let eldvF1c = eo('th');
text(`Created By`);
ec('th');
let elD7Eko = eo('th');
text(`Created`);
ec('th');
ec('tr');
ec('thead');
let elnMnqc = eo('tbody');
for (let i in component.task.statusLog) {
let status = component.task.statusLog[i]; 
 let iiwRlJ = 'KHjKU2y' + i;
let elrmDv0 = eo('tr','NMwNrXKs5NRb' + i+iiwRlJ);
let eloPN2c = eo('td','etKff'+iiwRlJ);
let ela6gwA = eo('span','L9Yff'+iiwRlJ,null,`class`,`bold btn btn-sm status ${cls(taskStatus(status))}`);
text(trans(status.status));
ec('span');
ec('td');
let elBMmWv = eo('td','Q2cff'+iiwRlJ);
text(status.status != 'autoFailed' ? status.createdBy.name : 'System');
ec('td');
let elShgts = eo('td','6Wzff'+iiwRlJ);
let cmprreG = this._lc('cc2g9TG1U', {parent:component,parentTop:layout,props:{timestamp:status.createdAt.timestamp},insideLoop:true,index:"" +iiwRlJ});
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
let el5yr2e = eo('div',null,null,`class`,`col-sm-3 order-1`);
let cnd68iW = Object.get(component.task.project, 'id', '');
this.setState('sta4wQA', cnd68iW);
if (cnd68iW) { 
let elYo3Gv = eo('a','4ALf',null,`href`,`${URLS.project(component.task.project, 'tasks-board')}`,`class`,`btn bold btn-purple m-b-1`);
text(`Back to Tasks Board`);
ec('a');
}let el3wOf9 = eo('div',null,null,`class`,`card`);
let el0TOUH = eo('div',null,null,`class`,`text-center`);
let elYA92f = eo('div',null,null,`class`,`task-status badge ${cls(component.getTaskStatus())}`);
text(trans(component.task.status));
ec('div');
let elGW0lK = eo('div',null,null,`title`,``);
let cmpYg6P = this._lc('ciY20lDjQ', {parent:component,parentTop:layout,props:{coins:component.task.reward}});
ec('div');

                    setTimeout(function () {
                        let $el = elGW0lK;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Task Reward')}`});
        ;
                    }, 20);                
                let el4AMcU = eo('div',null,null,`title`,``,`class`,`m-b-1`);
let elzi2kp = eo('strong',null,null,`class`,`red-text`);
text(component.task.penaltyRatio + 'x');
ec('strong');
ec('div');

                    setTimeout(function () {
                        let $el = el4AMcU;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Penalty ratio')}`});
        ;
                    }, 20);                
                let cndLJCA = component.task.endsAtTimestamp;
this.setState('stzBIrA', cndLJCA);
if (cndLJCA) { 
let elCnO1e = eo('div','z5Wf',null,`title`,``,`class`,`m-b-2`);
let elKul8U = eo('i','tJHf',null,`class`,`${fas('clock')} mr-2 icon`);
ec('i');
let cmpERaj = this._lc('cpIhw8y3j', {parent:component,parentTop:layout,props:{startsAt:component.task.startsAtTimestamp,endsAt:component.task.endsAtTimestamp},attrs:{class:'bold'},state:'stzBIrA'});
ec('div');

                    setTimeout(function () {
                        let $el = elCnO1e;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.task.endsAtTimestamp - component.task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time'}`});
        ;
                    }, 20);                
                }ec('div');
ec('div');
let cndWeYn = ! Is.empty(component.task.parent);
this.setState('st9XyRW', cndWeYn);
if (cndWeYn) { 
let elheUXB = eo('div','n2Qf',null,`class`,`card p-1`);
let elA6UN_ = eo('div','NhNf',null,`class`,`bold text-center m-b-1`);
let elNr2vN = eo('i','0kYf',null,`class`,`${fas('folder-open')} mr-2 icon`);
ec('i');
text(`Parent Task`);
ec('div');
let elpkBH8 = eo('a','Evaf',null,`href`,`${URLS.task(component.task.parent)}`,`class`,`btn btn-cyan bold`);
text(component.task.parent.title);
ec('a');
ec('div');
}let el_G_Hk = eo('div',null,null,`class`,`card p-1`);
let elUTBKo = eo('div',null,null,`class`,`bold text-center m-b-1`);
let eldx2_E = eo('i',null,null,`class`,`${fas('user')} mr-2 icon`);
ec('i');
text(`Participant`);
ec('div');
let elWkr9N = eo('div',null,null,`class`,`bold teal-text`);
text(component.task.participant.name);
ec('div');
ec('div');
let elUkZGC = eo('div',null,null,`class`,`card p-1`);
let elOSE7_ = eo('div',null,null,`class`,`bold text-center m-b-1`);
let elgVUvc = eo('i',null,null,`class`,`${fas('user-secret')} mr-2 icon`);
ec('i');
text(`Supervisors`);
ec('div');
for (let i in component.task.supervisors) {
let supervisor = component.task.supervisors[i]; 
 let iiGRjO = 'gUlkgyr' + i;
let elu1GSJ = eo('div','3zAztwHigvAP' + i+iiGRjO,null,`class`,`bold green-text`);
text(supervisor.name);
ec('div');
}
ec('div');
let cndQOCc = component.task.project;
this.setState('st65Kmc', cndQOCc);
if (cndQOCc) { 
let elk_xbQ = eo('div','13Yf',null,`class`,`card p-1`);
let el3HjDz = eo('div','E8Rf',null,`class`,`bold text-center m-b-1`);
let elpJFbi = eo('i','ykrf',null,`class`,`${fas('suitcase')} mr-2 icon`);
ec('i');
text(`Project`);
ec('div');
let cndOX2q = component.task.module;
this.setState('stcMBd1', cndOX2q);
if (cndOX2q) { 
let el15VGp = eo('div','kVkf');
let elCdTBH = eo('span','v_Bf',null,`class`,`mr-2`);
text(`Module:`);
ec('span');
let cndAlf4 = component.task.module.parent.id;
this.setState('st7ltAi', cndAlf4);
if (cndAlf4) { 
let elmYc9Q = eo('strong','TOFf');
text(`${ component.task.module.parent.name } »`);
ec('strong');
}let elSpc6U = eo('strong');
text(component.task.module.name);
ec('strong');
ec('div');
}let elACFMC = eo('a',null,null,`href`,`${URLS.project(component.task.project)}`,`class`,`btn btn-teal bold`);
text(component.task.project.name);
ec('a');
ec('div');
}let cndwNuR = component.task.userStory;
this.setState('stwL6xF', cndwNuR);
if (cndwNuR) { 
let eln4vU6 = eo('div','H8yf',null,`class`,`card p-1`);
let elz8bbj = eo('div','dHYf',null,`class`,`bold text-center m-b-1`);
let elSRZID = eo('i','S_If',null,`class`,`${fas('sticky-note')} mr-2 icon`);
ec('i');
text(`User Story`);
ec('div');
let elK1c27 = eo('a','Jqhf',null,`href`,`${URLS.project(component.task.project, 'user-stories', component.task.userStory)}`,`class`,`btn btn-pink bold`);
text(component.task.userStory.title);
ec('a');
ec('div');
}let cndETNl = component.taskStatusCanBeChanged();
this.setState('sti4_nO', cndETNl);
if (cndETNl) { 
let elpemdz = eo('div','qOVf',null,`class`,`card p-1`);
let elRrYIO = eo('div','Mpuf',null,`class`,`text-center bold m-b-1 purple-text`);
text(`Mark task as`);
ec('div');
let cmppqvm = this._lc('cGoOpC5w9', {parent:component,parentTop:layout,props:{items:component.getAllowedTaskStatuses(),value:component.task.status},events:{onselect:function(e) {let $el = this; component.updateTaskStatus(e.value)}},attrs:{heading:'Mark Task As..'},state:'sti4_nO'});
ec('div');
}ec('div');
ec('div');
}}});

                    this.isReadyToGo();
                }
        });