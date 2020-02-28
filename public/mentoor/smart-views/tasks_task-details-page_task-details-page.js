_Component({
                selector: 'task-details-page',
                c: 'TaskDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['task','user','rate','getTaskStatus','taskStatusCanBeChanged','getAllowedTaskStatuses','updateTaskStatus'],
                children: {cTbBFYuNY:'flk-spinner',cWOWpok6d:'star-rating',cd9JnohZi:'flk-time-ago',c4L8Enwod:'markdown',cX_2lJXEm:'flk-audio-player',clhx3ByBm:'flk-time-ago',c5N3voh0o:'markdown',cYnjqLJOf:'flk-audio-player',cvSVxUGQk:'task-checklist',cRKfkQP4Y:'comments',cFmDHUOO8:'flk-time-ago',cpVgydgom:'gold-icon',c6lUhPZNw:'flk-time-remaining',cPigq3IDl:'flk-dropdown-list',c9gLkx8Xp:'layout'},
                render: function (component) {
                    let cmpuhq6 = this._lc('c9gLkx8Xp', {parent:component,content:(layout) => {let cndfE9s = ! component.task;
this.setState('stNXIkb', cndfE9s);
let cndekgd = !(cndfE9s);
this.setState('stCNLzm', cndekgd);
if (cndfE9s) { 
let cmpeNdN = this._lc('cTbBFYuNY', {parent:component,parentTop:layout,state:'stNXIkb'});
}else { 
let elMrfHV = eo('div',null,null,`class`,`row`);
let elXnVLi = eo('div',null,null,`class`,`col order-12 order-sm-1`);
let elmsuKp = eo('h1',null,null,`class`,`m-b-1`);
text('#' + component.task.id + ' ' + component.task.title);
ec('h1');
let cnd_d5f = component.task.startsAt;
this.setState('stA4nnU', cnd_d5f);
if (cnd_d5f) { 
let elPHaYK = eo('div','62Tf',null,`class`,`teal-text bold`);
text( component.task.startsAt );
let cndZn_U = component.task.endsAt;
this.setState('stn3d1I', cndZn_U);
if (cndZn_U) { 
text(`-
                    ${ component.task.endsAt }`);
}ec('div');
}let cmpALE0 = this._lc('cWOWpok6d', {parent:component,parentTop:layout,props:{readonly:! component.user.accountType == 'admin'},events:{onselect:function(e) {let $el = this; component.rate(e)}},boolAttrs:{readOnly:! component.user.accountType == 'admin'},attrs:{class:'form-group'}});
let el1vcOT = eo('span',null,null,`title`,``);
let cmpDSOS = this._lc('cd9JnohZi', {parent:component,parentTop:layout,props:{timeFormat:component.task.createdAt.format,timestamp:component.task.createdAt.timestamp}});
ec('span');

                    setTimeout(function () {
                        let $el = el1vcOT;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Created At')}`});
        ;
                    }, 20);                
                let cndYsEB = component.task.description;
this.setState('stTPFTs', cndYsEB);
if (cndYsEB) { 
let elAogIG = eo('h2','1Izf',null,`class`,`bold m-y-2`);
text(`Details`);
ec('h2');
let eldY4Iu = eo('p','XW1f',null,`class`,`description card p-1`);
let cmp1uj6 = this._lc('c4L8Enwod', {parent:component,parentTop:layout,props:{content:component.task.description},state:'stTPFTs'});
ec('p');
}let ela0buF = eo('div',null,null,`class`,`card my-3`);
let cndGyY5 = component.task.descriptionRecord;
this.setState('sthLtcL', cndGyY5);
if (cndGyY5) { 
let cmpLSIz = this._lc('cX_2lJXEm', {parent:component,parentTop:layout,props:{src:component.task.descriptionRecord},attrs:{src:`${component.task.descriptionRecord}`},state:'sthLtcL'});
}ec('div');
let cndV6EK = component.task.participantNotes;
this.setState('st3_mDV', cndV6EK);
if (cndV6EK) { 
let elamBIA = eo('div','7K1f',null,`class`,`card p-1 m-y-2`);
let elstfqT = eo('h3','gzxf',null,`class`,`bold pink-text`);
text( component.task.participant.name );
ec('h3');
let cmpVltc = this._lc('clhx3ByBm', {parent:component,parentTop:layout,props:{timeFormat:component.task.submittedAt.format,timestamp:component.task.submittedAt.timestamp},attrs:{class:'brown-text bold'},state:'st3_mDV'});
let elYAQsX = eo('p','GH2f',null,`class`,`description m-y-2`);
let cmp61Id = this._lc('c5N3voh0o', {parent:component,parentTop:layout,props:{content:component.task.participantNotes},state:'st3_mDV'});
ec('p');
let cndp21t = component.task.participantRecord;
this.setState('stl4y6G', cndp21t);
if (cndp21t) { 
let cmpfCIN = this._lc('cYnjqLJOf', {parent:component,parentTop:layout,props:{src:component.task.participantRecord},attrs:{src:`${component.task.participantRecord}`},state:'stl4y6G'});
}ec('div');
}let cmpXfq1 = this._lc('cvSVxUGQk', {parent:component,parentTop:layout,props:{task:component.task}});
let cmp4pd3 = this._lc('cRKfkQP4Y', {parent:component,parentTop:layout,props:{comments:component.task.comments,project:component.task.project,typeId:component.task.id},attrs:{type:'task'}});
let el3ZVb9 = eo('h3',null,null,`class`,`bold m-t-2 m-b-1`);
text(`Task Status Change Log`);
ec('h3');
let elaatw7 = eo('table',null,null,`class`,`table table-bordered`,`id`,`status-table`);
let el22pQ1 = eo('thead');
let elrVN1k = eo('tr');
let elXgD3T = eo('th');
text(`Status`);
ec('th');
let elkI6Ak = eo('th');
text(`Created By`);
ec('th');
let el2TbQE = eo('th');
text(`Created`);
ec('th');
ec('tr');
ec('thead');
let elWZpsc = eo('tbody');
for (let i in component.task.statusLog) {
let status = component.task.statusLog[i]; 
 let ii_uji = 'plAw6wC' + i;
let elzmARQ = eo('tr','gBpVsr0IxHU1' + i+ii_uji);
let elRWWZi = eo('td','o_Uff'+ii_uji);
let elmekY4 = eo('span','8nWff'+ii_uji,null,`class`,`bold btn btn-sm status ${cls(taskStatus(status))}`);
text(trans(status.status));
ec('span');
ec('td');
let elcmZl2 = eo('td','VwYff'+ii_uji);
text(status.status != 'autoFailed' ? status.createdBy.name : 'System');
ec('td');
let elOw0EA = eo('td','sEfff'+ii_uji);
let cmptyDV = this._lc('cFmDHUOO8', {parent:component,parentTop:layout,props:{timestamp:status.createdAt.timestamp},insideLoop:true,index:"" +ii_uji});
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
let elGJ9QB = eo('div',null,null,`class`,`col-sm-3 order-1`);
let cndrh6u = Object.get(component.task.project, 'id', '');
this.setState('stYk4MS', cndrh6u);
if (cndrh6u) { 
let el2VAjr = eo('a','pK7f',null,`href`,`${URLS.project(component.task.project, 'tasks-board')}`,`class`,`btn bold btn-purple m-b-1`);
text(`Back to Tasks Board`);
ec('a');
}let eloWNxU = eo('div',null,null,`class`,`card`);
let elrVRK0 = eo('div',null,null,`class`,`text-center`);
let el56bAT = eo('div',null,null,`class`,`task-status badge ${cls(component.getTaskStatus())}`);
text(trans(component.task.status));
ec('div');
let elpCadw = eo('div',null,null,`title`,``);
let cmp6DDh = this._lc('cpVgydgom', {parent:component,parentTop:layout,props:{coins:component.task.reward}});
ec('div');

                    setTimeout(function () {
                        let $el = elpCadw;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Task Reward')}`});
        ;
                    }, 20);                
                let ellJ5zd = eo('div',null,null,`title`,``,`class`,`m-b-1`);
let elYTVF5 = eo('strong',null,null,`class`,`red-text`);
text(component.task.penaltyRatio + 'x');
ec('strong');
ec('div');

                    setTimeout(function () {
                        let $el = ellJ5zd;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Penalty ratio')}`});
        ;
                    }, 20);                
                let cndEASq = component.task.endsAtTimestamp;
this.setState('stCZ7Q9', cndEASq);
if (cndEASq) { 
let elpveZN = eo('div','9Cqf',null,`title`,``,`class`,`m-b-2`);
let el3eJLI = eo('i','86Cf',null,`class`,`${fas('clock')} mr-2 icon`);
ec('i');
let cmpQl3c = this._lc('c6lUhPZNw', {parent:component,parentTop:layout,props:{startsAt:component.task.startsAtTimestamp,endsAt:component.task.endsAtTimestamp},attrs:{class:'bold'},state:'stCZ7Q9'});
ec('div');

                    setTimeout(function () {
                        let $el = elpveZN;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.task.endsAtTimestamp - component.task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time'}`});
        ;
                    }, 20);                
                }ec('div');
ec('div');
let cndQ8jj = ! Is.empty(component.task.parent);
this.setState('stV5AC_', cndQ8jj);
if (cndQ8jj) { 
let elskToJ = eo('div','6sDf',null,`class`,`card p-1`);
let el7UM5o = eo('div','6Qsf',null,`class`,`bold text-center m-b-1`);
let el6HenX = eo('i','Xp5f',null,`class`,`${fas('folder-open')} mr-2 icon`);
ec('i');
text(`Parent Task`);
ec('div');
let elhL28k = eo('a','a2Pf',null,`href`,`${URLS.task(component.task.parent)}`,`class`,`btn btn-cyan bold`);
text(component.task.parent.title);
ec('a');
ec('div');
}let elQlEq_ = eo('div',null,null,`class`,`card p-1`);
let el3ptYj = eo('div',null,null,`class`,`bold text-center m-b-1`);
let elw5Bte = eo('i',null,null,`class`,`${fas('user')} mr-2 icon`);
ec('i');
text(`Participant`);
ec('div');
let elnZDUV = eo('div',null,null,`class`,`bold teal-text`);
text(component.task.participant.name);
ec('div');
ec('div');
let el32Qx1 = eo('div',null,null,`class`,`card p-1`);
let elJryG5 = eo('div',null,null,`class`,`bold text-center m-b-1`);
let elmptCV = eo('i',null,null,`class`,`${fas('user-secret')} mr-2 icon`);
ec('i');
text(`Supervisors`);
ec('div');
for (let i in component.task.supervisors) {
let supervisor = component.task.supervisors[i]; 
 let iizJv7 = 'k8tMcJr' + i;
let elw8ZH2 = eo('div','mz2QR2li8ugg' + i+iizJv7,null,`class`,`bold green-text`);
text(supervisor.name);
ec('div');
}
ec('div');
let cnd1ufl = component.task.project;
this.setState('stwYTHt', cnd1ufl);
if (cnd1ufl) { 
let elVhyof = eo('div','_4Of',null,`class`,`card p-1`);
let elzzXSU = eo('div','SORf',null,`class`,`bold text-center m-b-1`);
let elFYjRW = eo('i','cNGf',null,`class`,`${fas('suitcase')} mr-2 icon`);
ec('i');
text(`Project`);
ec('div');
let cnd2sy3 = component.task.module;
this.setState('stzLSK4', cnd2sy3);
if (cnd2sy3) { 
let elYtd6V = eo('div','TYSf');
let elhhBym = eo('span','0nMf',null,`class`,`mr-2`);
text(`Module:`);
ec('span');
let cndLpHe = component.task.module.parent.id;
this.setState('stJWPEh', cndLpHe);
if (cndLpHe) { 
let elqvHY7 = eo('strong','GwLf');
text(`${ component.task.module.parent.name } »`);
ec('strong');
}let ellg4H0 = eo('strong');
text(component.task.module.name);
ec('strong');
ec('div');
}let elcyxml = eo('a',null,null,`href`,`${URLS.project(component.task.project)}`,`class`,`btn btn-teal bold`);
text(component.task.project.name);
ec('a');
ec('div');
}let cndfDQl = component.task.userStory;
this.setState('ste0GOw', cndfDQl);
if (cndfDQl) { 
let elSdELI = eo('div','JLCf',null,`class`,`card p-1`);
let elWflNm = eo('div','G8Zf',null,`class`,`bold text-center m-b-1`);
let elbcwAS = eo('i','k90f',null,`class`,`${fas('sticky-note')} mr-2 icon`);
ec('i');
text(`User Story`);
ec('div');
let elsbtvG = eo('a','7aNf',null,`href`,`${URLS.project(component.task.project, 'user-stories', component.task.userStory)}`,`class`,`btn btn-pink bold`);
text(component.task.userStory.title);
ec('a');
ec('div');
}let cndgHQ1 = component.taskStatusCanBeChanged();
this.setState('sthSvXr', cndgHQ1);
if (cndgHQ1) { 
let eluWe3I = eo('div','44Tf',null,`class`,`card p-1`);
let el1dHRO = eo('div','b0zf',null,`class`,`text-center bold m-b-1 purple-text`);
text(`Mark task as`);
ec('div');
let cmp1a0f = this._lc('cPigq3IDl', {parent:component,parentTop:layout,props:{items:component.getAllowedTaskStatuses(),value:component.task.status},events:{onselect:function(e) {let $el = this; component.updateTaskStatus(e.value)}},attrs:{heading:'Mark Task As..'},state:'sthSvXr'});
ec('div');
}ec('div');
ec('div');
}}});

                    this.isReadyToGo();
                }
        });