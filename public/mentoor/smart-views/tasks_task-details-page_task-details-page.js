_Component({
                selector: 'task-details-page',
                c: 'TaskDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['task','getTaskStatus','taskStatusCanBeChanged','getAllowedTaskStatuses','updateTaskStatus'],
                children: {cJ1h_555F:'flk-spinner',cYLHioekr:'flk-time-ago',cXvQ0JQYd:'markdown',cPifDAzRt:'flk-audio-player',cZl0AMzZA:'flk-time-ago',c_lKMzoxK:'markdown',cTxCjjHxA:'flk-audio-player',cKF6c9XpO:'task-checklist',c_KkyjVPw:'comments',cI2X1nCCI:'flk-time-ago',cBxdWBeon:'gold-icon',cBiR_cH_c:'flk-time-remaining',cGxm1jgG4:'flk-dropdown-list',c1z0YZsdw:'layout'},
                render: function (component) {
                    let cmprkUJ = this._lc('c1z0YZsdw', {parent:component,content:(layout) => {let cndHOd2 = ! component.task;
this.setState('stfejEK', cndHOd2);
let cndYSQi = !(cndHOd2);
this.setState('stiQekl', cndYSQi);
if (cndHOd2) { 
let cmpbPez = this._lc('cJ1h_555F', {parent:component,parentTop:layout,state:'stfejEK'});
}else { 
let elu7HZi = eo('div',null,null,`class`,`row`);
let el3pUEc = eo('div',null,null,`class`,`col order-12 order-sm-1`);
let elUzFPI = eo('h1',null,null,`class`,`m-b-1`);
text('#' + component.task.id + ' ' + component.task.title);
ec('h1');
let cndOewE = component.task.startsAt;
this.setState('stPoK79', cndOewE);
if (cndOewE) { 
let eliy8Ka = eo('div','MrKf',null,`class`,`teal-text bold`);
text( component.task.startsAt );
let cndZSkz = component.task.endsAt;
this.setState('stpmNsf', cndZSkz);
if (cndZSkz) { 
text(`-
                    ${ component.task.endsAt }`);
}ec('div');
}let elwsmMY = eo('span',null,null,`title`,``);
let cmpX9Iz = this._lc('cYLHioekr', {parent:component,parentTop:layout,props:{timestamp:component.task.createdAt.timestamp}});
ec('span');

                    setTimeout(function () {
                        let $el = elwsmMY;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Created At')}`});
        ;
                    }, 20);                
                let cndoVI5 = component.task.description;
this.setState('st0NWj4', cndoVI5);
if (cndoVI5) { 
let elybDeH = eo('h2','DmNf',null,`class`,`bold m-y-2`);
text(`Details`);
ec('h2');
let elIM3nR = eo('p','r5lf',null,`class`,`description card p-1`);
let cmp_Krk = this._lc('cXvQ0JQYd', {parent:component,parentTop:layout,props:{content:component.task.description},state:'st0NWj4'});
let cndxxyN = component.task.descriptionRecord;
this.setState('st3Typp', cndxxyN);
if (cndxxyN) { 
let cmpdeTe = this._lc('cPifDAzRt', {parent:component,parentTop:layout,props:{src:component.task.descriptionRecord},attrs:{src:`${component.task.descriptionRecord}`},state:'st3Typp'});
}ec('p');
}let cndneNC = component.task.participantNotes;
this.setState('st9UVT0', cndneNC);
if (cndneNC) { 
let el52eOd = eo('div','JYzf',null,`class`,`card p-1 m-y-2`);
let elu1v3I = eo('h3','77Vf',null,`class`,`bold pink-text`);
text( component.task.participant.name );
ec('h3');
let cmpNaaj = this._lc('cZl0AMzZA', {parent:component,parentTop:layout,props:{timestamp:component.task.submittedAt.timestamp},attrs:{class:'brown-text bold'},state:'st9UVT0'});
let elwTGck = eo('p','mGgf',null,`class`,`description m-y-2`);
let cmpx3pt = this._lc('c_lKMzoxK', {parent:component,parentTop:layout,props:{content:component.task.participantNotes},state:'st9UVT0'});
ec('p');
let cnd7CHw = component.task.participantRecord;
this.setState('stIPlmz', cnd7CHw);
if (cnd7CHw) { 
let cmpJzX2 = this._lc('cTxCjjHxA', {parent:component,parentTop:layout,props:{src:component.task.participantRecord},attrs:{src:`${component.task.participantRecord}`},state:'stIPlmz'});
}ec('div');
}let cmpZXzo = this._lc('cKF6c9XpO', {parent:component,parentTop:layout,props:{task:component.task}});
let cmpLIAj = this._lc('c_KkyjVPw', {parent:component,parentTop:layout,props:{comments:component.task.comments,project:component.task.project,typeId:component.task.id},attrs:{type:'task'}});
let elRmi5R = eo('h3',null,null,`class`,`bold m-t-2 m-b-1`);
text(`Task Status Change Log`);
ec('h3');
let elmBVMw = eo('table',null,null,`class`,`table table-bordered`,`id`,`status-table`);
let elbaOsS = eo('thead');
let elDZgJ0 = eo('tr');
let el5zqef = eo('th');
text(`Status`);
ec('th');
let elowMob = eo('th');
text(`Created By`);
ec('th');
let elqTtG2 = eo('th');
text(`Created`);
ec('th');
ec('tr');
ec('thead');
let el8VoCo = eo('tbody');
for (let i in component.task.statusLog) {
let status = component.task.statusLog[i]; 
 let iiEQoK = '6L6lzA4' + i;
let eltDXp6 = eo('tr','0Bg7Nmt2aysk' + i+iiEQoK);
let elOsgYe = eo('td','nsDff'+iiEQoK);
let elvv1Ys = eo('span','pvRff'+iiEQoK,null,`class`,`bold btn btn-sm status`);
elvv1Ys.cls = taskStatus(status);

            for (let className in elvv1Ys.cls) {
                elvv1Ys.classList.toggle(className, elvv1Ys.cls[className]);
            }  
            text(trans(status.status));
ec('span');
ec('td');
let eliqMGm = eo('td','z1jff'+iiEQoK);
text(status.status != 'autoFailed' ? status.createdBy.name : 'System');
ec('td');
let elHEAXB = eo('td','pRMff'+iiEQoK);
let cmp17_0 = this._lc('cI2X1nCCI', {parent:component,parentTop:layout,props:{timestamp:status.createdAt.timestamp},insideLoop:true,index:"" +iiEQoK});
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
let elbYSev = eo('div',null,null,`class`,`col-sm-3 order-1`);
let cndEYqz = Object.get(component.task.project, 'id', '');
this.setState('striLrq', cndEYqz);
if (cndEYqz) { 
let el3_Liz = eo('a','e_4f',null,`href`,`${URLS.project(component.task.project, 'tasks-board')}`,`class`,`btn bold btn-purple m-b-1`);
text(`Back to Tasks Board`);
ec('a');
}let elmCk7l = eo('div',null,null,`class`,`card`);
let elePUJs = eo('div',null,null,`class`,`text-center`);
let el3rAZC = eo('div',null,null,`class`,`task-status badge`);
el3rAZC.cls = component.getTaskStatus();

            for (let className in el3rAZC.cls) {
                el3rAZC.classList.toggle(className, el3rAZC.cls[className]);
            }  
            text(trans(component.task.status));
ec('div');
let elP4NEf = eo('div',null,null,`title`,``);
let cmprXoe = this._lc('cBxdWBeon', {parent:component,parentTop:layout,props:{coins:component.task.reward}});
ec('div');

                    setTimeout(function () {
                        let $el = elP4NEf;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Task Reward')}`});
        ;
                    }, 20);                
                let elVozau = eo('div',null,null,`title`,``,`class`,`m-b-1`);
let el1bM0e = eo('strong',null,null,`class`,`red-text`);
text(component.task.penaltyRatio + 'x');
ec('strong');
ec('div');

                    setTimeout(function () {
                        let $el = elVozau;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Penalty ratio')}`});
        ;
                    }, 20);                
                let cndGU_x = component.task.endsAtTimestamp;
this.setState('stlL9aX', cndGU_x);
if (cndGU_x) { 
let elAM1Yf = eo('div','hbvf',null,`title`,``,`class`,`m-b-2`);
let elPoKX5 = eo('i','ecff',null,`class`,`${fas('clock') + ' mr-2 icon'}`);
ec('i');
let cmpic5P = this._lc('cBiR_cH_c', {parent:component,parentTop:layout,props:{startsAt:component.task.startsAtTimestamp,endsAt:component.task.endsAtTimestamp},attrs:{class:'bold'},state:'stlL9aX'});
ec('div');

                    setTimeout(function () {
                        let $el = elAM1Yf;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.task.endsAtTimestamp - component.task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time'}`});
        ;
                    }, 20);                
                }ec('div');
ec('div');
let cndBxva = ! Is.empty(component.task.parent);
this.setState('stKoRuL', cndBxva);
if (cndBxva) { 
let elIIsrw = eo('div','6clf',null,`class`,`card p-1`);
let elR8R_c = eo('div','zQnf',null,`class`,`bold text-center m-b-1`);
let elAi2FJ = eo('i','x6Nf',null,`class`,`${fas('folder-open') + ' mr-2 icon'}`);
ec('i');
text(`Parent Task`);
ec('div');
let elcvY5l = eo('a','qxJf',null,`href`,`${URLS.task(component.task.parent)}`,`class`,`btn btn-cyan bold`);
text(component.task.parent.title);
ec('a');
ec('div');
}let elm0cgs = eo('div',null,null,`class`,`card p-1`);
let elNZbJ_ = eo('div',null,null,`class`,`bold text-center m-b-1`);
let elenMkl = eo('i',null,null,`class`,`${fas('user') + ' mr-2 icon'}`);
ec('i');
text(`Participant`);
ec('div');
let elCMdp5 = eo('div',null,null,`class`,`bold teal-text`);
text(component.task.participant.name);
ec('div');
ec('div');
let elM1hr8 = eo('div',null,null,`class`,`card p-1`);
let elfVuhN = eo('div',null,null,`class`,`bold text-center m-b-1`);
let el7qmwe = eo('i',null,null,`class`,`${fas('user-secret') + ' mr-2 icon'}`);
ec('i');
text(`Supervisors`);
ec('div');
for (let i in component.task.supervisors) {
let supervisor = component.task.supervisors[i]; 
 let iiKw1s = 'Ba4moys' + i;
let elITOmL = eo('div','xd7SuhgcBbkJ' + i+iiKw1s,null,`class`,`bold green-text`);
text(supervisor.name);
ec('div');
}
ec('div');
let cndoP4K = component.task.project;
this.setState('st2S0MA', cndoP4K);
if (cndoP4K) { 
let elrK77o = eo('div','nLuf',null,`class`,`card p-1`);
let elMNVYO = eo('div','CyJf',null,`class`,`bold text-center m-b-1`);
let elEBMOH = eo('i','vCVf',null,`class`,`${fas('suitcase') + ' mr-2 icon'}`);
ec('i');
text(`Project`);
ec('div');
let cnd6LGG = component.task.module;
this.setState('stjduKT', cnd6LGG);
if (cnd6LGG) { 
let elfb92n = eo('div','27Zf');
let elacTWt = eo('span','jYxf',null,`class`,`mr-2`);
text(`Module:`);
ec('span');
let cndYOx8 = component.task.module.parent.id;
this.setState('sthd1nJ', cndYOx8);
if (cndYOx8) { 
let elBdgxW = eo('strong','l0Af');
text(`${ component.task.module.parent.name } »`);
ec('strong');
}let elICkxt = eo('strong');
text(component.task.module.name);
ec('strong');
ec('div');
}let elzdV3d = eo('a',null,null,`href`,`${URLS.project(component.task.project)}`,`class`,`btn btn-teal bold`);
text(component.task.project.name);
ec('a');
ec('div');
}let cndai0e = component.task.userStory;
this.setState('stcFclB', cndai0e);
if (cndai0e) { 
let elk2yWv = eo('div','C0Jf',null,`class`,`card p-1`);
let el3Fs4e = eo('div','ofmf',null,`class`,`bold text-center m-b-1`);
let elftlej = eo('i','Zcwf',null,`class`,`${fas('sticky-note') + ' mr-2 icon'}`);
ec('i');
text(`User Story`);
ec('div');
let elUUV7F = eo('a','bjLf',null,`href`,`${URLS.project(component.task.project, 'user-stories', component.task.userStory)}`,`class`,`btn btn-pink bold`);
text(component.task.userStory.title);
ec('a');
ec('div');
}let cndBg3S = component.taskStatusCanBeChanged();
this.setState('styHzRb', cndBg3S);
if (cndBg3S) { 
let elbjzpB = eo('div','hhff',null,`class`,`card p-1`);
let eldNiaV = eo('div','tplf',null,`class`,`text-center bold m-b-1 purple-text`);
text(`Mark task as`);
ec('div');
let cmpjGvj = this._lc('cGxm1jgG4', {parent:component,parentTop:layout,props:{items:component.getAllowedTaskStatuses(),value:component.task.status},events:{onselect:function(e) {let $el = this; component.updateTaskStatus(e.value)}},attrs:{heading:'Mark Task As..'},state:'styHzRb'});
ec('div');
}ec('div');
ec('div');
}}});

                    this.isReadyToGo();
                }
        });