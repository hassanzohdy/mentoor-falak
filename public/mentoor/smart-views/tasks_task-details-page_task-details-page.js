_Component({
                selector: 'task-details-page',
                c: 'TaskDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['task','getTaskStatus','taskStatusCanBeChanged','getAllowedTaskStatuses','updateTaskStatus'],
                children: {caWVdaroH:'flk-spinner',cI77ZKXrI:'flk-time-ago',clmEGOb8P:'markdown',cnNc3qARE:'flk-audio-player',cYU8t_H0T:'flk-time-ago',cFfHVT2Bm:'markdown',cbIi9pauO:'flk-audio-player',csdRKS0De:'task-checklist',cNug8vZ7H:'comments',cLvKlF7Bz:'flk-time-ago',cUrho4Paz:'gold-icon',cFSUnK3OD:'flk-time-remaining',cr4TdRVnR:'flk-dropdown-list',cc8aAzpE0:'layout'},
                render: function (component) {
                    let cmpvbEW = this._lc('cc8aAzpE0', {parent:component,content:(layout) => {let cndekjO = ! component.task;
this.setState('stUgHkj', cndekjO);
let cndKf1Z = !(cndekjO);
this.setState('stoX4LI', cndKf1Z);
if (cndekjO) { 
let cmpLdQf = this._lc('caWVdaroH', {parent:component,parentTop:layout,state:'stUgHkj'});
}else { 
let el3E_99 = eo('div',null,null,`class`,`row`);
let elXYLAz = eo('div',null,null,`class`,`col order-12 order-sm-1`);
let elPldM3 = eo('h1',null,null,`class`,`m-b-1`);
text('#' + component.task.id + ' ' + component.task.title);
ec('h1');
let cndE_99 = component.task.startsAt;
this.setState('stcvVZj', cndE_99);
if (cndE_99) { 
let elTe5St = eo('div','5Knf',null,`class`,`teal-text bold`);
text( component.task.startsAt );
let cndJS4k = component.task.endsAt;
this.setState('stF21bF', cndJS4k);
if (cndJS4k) { 
text(`-
                    ${ component.task.endsAt }`);
}ec('div');
}let elb9egO = eo('span',null,null,`title`,``);
let cmpDDMB = this._lc('cI77ZKXrI', {parent:component,parentTop:layout,props:{timestamp:component.task.createdAt.timestamp}});
ec('span');

                    setTimeout(function () {
                        let $el = elb9egO;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Created At')}`});
        ;
                    }, 20);                
                let cndP2_p = component.task.description;
this.setState('stj8XOk', cndP2_p);
if (cndP2_p) { 
let el3tjiq = eo('h2','MeYf',null,`class`,`bold m-y-2`);
text(`Details`);
ec('h2');
let elGgeL2 = eo('p','TPNf',null,`class`,`description card p-1`);
let cmpuj4i = this._lc('clmEGOb8P', {parent:component,parentTop:layout,props:{content:component.task.description},state:'stj8XOk'});
let cndvwH_ = component.task.descriptionRecord;
this.setState('stZuOhD', cndvwH_);
if (cndvwH_) { 
let cmplE3p = this._lc('cnNc3qARE', {parent:component,parentTop:layout,props:{src:component.task.descriptionRecord},attrs:{src:`${component.task.descriptionRecord}`},state:'stZuOhD'});
}ec('p');
}let cndRutu = component.task.participantNotes;
this.setState('stmyYKr', cndRutu);
if (cndRutu) { 
let elfyVHA = eo('div','ppkf',null,`class`,`card p-1 m-y-2`);
let elQ5gnK = eo('h3','LXff',null,`class`,`bold pink-text`);
text( component.task.participant.name );
ec('h3');
let cmp6hrj = this._lc('cYU8t_H0T', {parent:component,parentTop:layout,props:{timestamp:component.task.submittedAt.timestamp},attrs:{class:'brown-text bold'},state:'stmyYKr'});
let elZeZ_K = eo('p','fN_f',null,`class`,`description m-y-2`);
let cmpo4ON = this._lc('cFfHVT2Bm', {parent:component,parentTop:layout,props:{content:component.task.participantNotes},state:'stmyYKr'});
ec('p');
let cndlGR3 = component.task.participantRecord;
this.setState('stQtGJO', cndlGR3);
if (cndlGR3) { 
let cmpM0ww = this._lc('cbIi9pauO', {parent:component,parentTop:layout,props:{src:component.task.participantRecord},attrs:{src:`${component.task.participantRecord}`},state:'stQtGJO'});
}ec('div');
}let cmp6921 = this._lc('csdRKS0De', {parent:component,parentTop:layout,props:{task:component.task}});
let cmpMwBF = this._lc('cNug8vZ7H', {parent:component,parentTop:layout,props:{comments:component.task.comments,project:component.task.project,typeId:component.task.id},attrs:{type:'task'}});
let elmg2RB = eo('h3',null,null,`class`,`bold m-t-2 m-b-1`);
text(`Task Status Change Log`);
ec('h3');
let eln0pop = eo('table',null,null,`class`,`table table-bordered`,`id`,`status-table`);
let el1GC4P = eo('thead');
let eldj6OK = eo('tr');
let elV6YK2 = eo('th');
text(`Status`);
ec('th');
let ellknXb = eo('th');
text(`Created By`);
ec('th');
let elNncNU = eo('th');
text(`Created`);
ec('th');
ec('tr');
ec('thead');
let elpTe8A = eo('tbody');
for (let i in component.task.statusLog) {
let status = component.task.statusLog[i]; 
 let iinUS2 = '44qZABR' + i;
let elmcjUR = eo('tr','so1FxWFKAxqO' + i+iinUS2);
let elJh_uB = eo('td','Lbzff'+iinUS2);
let eltrL5T = eo('span','ibfff'+iinUS2,null,`class`,`bold btn btn-sm status`);
eltrL5T.cls = taskStatus(status);

            for (let className in eltrL5T.cls) {
                eltrL5T.classList.toggle(className, eltrL5T.cls[className]);
            }  
            text(trans(status.status));
ec('span');
ec('td');
let elDJgyH = eo('td','t6mff'+iinUS2);
text(status.status != 'autoFailed' ? status.createdBy.name : 'System');
ec('td');
let elwFdi8 = eo('td','wCIff'+iinUS2);
let cmpo0XD = this._lc('cLvKlF7Bz', {parent:component,parentTop:layout,props:{timestamp:status.createdAt.timestamp},insideLoop:true,index:"" +iinUS2});
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
let elfBGql = eo('div',null,null,`class`,`col-sm-3 order-1`);
let cndQ98v = Object.get(component.task.project, 'id', '');
this.setState('stviI5i', cndQ98v);
if (cndQ98v) { 
let els2aLt = eo('a','Kbwf',null,`href`,`${URLS.project(component.task.project, 'tasks-board')}`,`class`,`btn bold btn-purple m-b-1`);
text(`Back to Tasks Board`);
ec('a');
}let elafKeO = eo('div',null,null,`class`,`card`);
let elgmfwA = eo('div',null,null,`class`,`text-center`);
let elJf0rH = eo('div',null,null,`class`,`task-status badge`);
elJf0rH.cls = component.getTaskStatus();

            for (let className in elJf0rH.cls) {
                elJf0rH.classList.toggle(className, elJf0rH.cls[className]);
            }  
            text(trans(component.task.status));
ec('div');
let el7Blt_ = eo('div',null,null,`title`,``);
let cmpkaxc = this._lc('cUrho4Paz', {parent:component,parentTop:layout,props:{coins:component.task.reward}});
ec('div');

                    setTimeout(function () {
                        let $el = el7Blt_;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Task Reward')}`});
        ;
                    }, 20);                
                let elnuZ7L = eo('div',null,null,`title`,``,`class`,`m-b-1`);
let elgRZtC = eo('strong',null,null,`class`,`red-text`);
text(component.task.penaltyRatio + 'x');
ec('strong');
ec('div');

                    setTimeout(function () {
                        let $el = elnuZ7L;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Penalty ratio')}`});
        ;
                    }, 20);                
                let cnd1WcS = component.task.endsAtTimestamp;
this.setState('st2E5FT', cnd1WcS);
if (cnd1WcS) { 
let eleNBm2 = eo('div','KCff',null,`title`,``,`class`,`m-b-2`);
let el6xPGN = eo('i','5ECf',null,`class`,`${fas('clock') + ' mr-2 icon'}`);
ec('i');
let cmpVhBl = this._lc('cFSUnK3OD', {parent:component,parentTop:layout,props:{startsAt:component.task.startsAtTimestamp,endsAt:component.task.endsAtTimestamp},attrs:{class:'bold'},state:'st2E5FT'});
ec('div');

                    setTimeout(function () {
                        let $el = eleNBm2;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.task.endsAtTimestamp - component.task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time'}`});
        ;
                    }, 20);                
                }ec('div');
ec('div');
let cnd6CuH = ! Is.empty(component.task.parent);
this.setState('stATWWu', cnd6CuH);
if (cnd6CuH) { 
let el1SDeH = eo('div','Dq1f',null,`class`,`card p-1`);
let ela_1E9 = eo('div','uDef',null,`class`,`bold text-center m-b-1`);
let elrSHzc = eo('i','AGkf',null,`class`,`${fas('folder-open') + ' mr-2 icon'}`);
ec('i');
text(`Parent Task`);
ec('div');
let elbZH7v = eo('a','wu3f',null,`href`,`${URLS.task(component.task.parent)}`,`class`,`btn btn-cyan bold`);
text(component.task.parent.title);
ec('a');
ec('div');
}let eltYFRz = eo('div',null,null,`class`,`card p-1`);
let el7gtYb = eo('div',null,null,`class`,`bold text-center m-b-1`);
let elD4xca = eo('i',null,null,`class`,`${fas('user') + ' mr-2 icon'}`);
ec('i');
text(`Participant`);
ec('div');
let elmQj5V = eo('div',null,null,`class`,`bold teal-text`);
text(component.task.participant.name);
ec('div');
ec('div');
let elin6HH = eo('div',null,null,`class`,`card p-1`);
let elki6mS = eo('div',null,null,`class`,`bold text-center m-b-1`);
let el8Hoz6 = eo('i',null,null,`class`,`${fas('user-secret') + ' mr-2 icon'}`);
ec('i');
text(`Supervisors`);
ec('div');
for (let i in component.task.supervisors) {
let supervisor = component.task.supervisors[i]; 
 let iisgxF = 'tV28HfV' + i;
let elmTytK = eo('div','TBCIxCaqBuUL' + i+iisgxF,null,`class`,`bold green-text`);
text(supervisor.name);
ec('div');
}
ec('div');
let cnddjnW = component.task.project;
this.setState('stSLDCX', cnddjnW);
if (cnddjnW) { 
let elxLRYu = eo('div','WgWf',null,`class`,`card p-1`);
let elz7ILb = eo('div','qPzf',null,`class`,`bold text-center m-b-1`);
let el1Pi_L = eo('i','Bepf',null,`class`,`${fas('suitcase') + ' mr-2 icon'}`);
ec('i');
text(`Project`);
ec('div');
let cndvS4g = component.task.module;
this.setState('stnhLFj', cndvS4g);
if (cndvS4g) { 
let el6vp7k = eo('div','1Ndf');
let elQN6jT = eo('span','WFQf',null,`class`,`mr-2`);
text(`Module:`);
ec('span');
let cnd3wwY = component.task.module.parent.id;
this.setState('stt9lA6', cnd3wwY);
if (cnd3wwY) { 
let elzDkeS = eo('strong','r7Rf');
text(`${ component.task.module.parent.name } »`);
ec('strong');
}let eloq3O0 = eo('strong');
text(component.task.module.name);
ec('strong');
ec('div');
}let elAMqeL = eo('a',null,null,`href`,`${URLS.project(component.task.project)}`,`class`,`btn btn-teal bold`);
text(component.task.project.name);
ec('a');
ec('div');
}let cnd_pWT = component.task.userStory;
this.setState('stlLS4t', cnd_pWT);
if (cnd_pWT) { 
let elZCntg = eo('div','6GGf',null,`class`,`card p-1`);
let elBO_3j = eo('div','Jrkf',null,`class`,`bold text-center m-b-1`);
let el32KtS = eo('i','9bmf',null,`class`,`${fas('sticky-note') + ' mr-2 icon'}`);
ec('i');
text(`User Story`);
ec('div');
let elTj47v = eo('a','hmcf',null,`href`,`${URLS.project(component.task.project, 'user-stories', component.task.userStory)}`,`class`,`btn btn-pink bold`);
text(component.task.userStory.title);
ec('a');
ec('div');
}let cndssiA = component.taskStatusCanBeChanged();
this.setState('stxeLl8', cndssiA);
if (cndssiA) { 
let elc8Ldp = eo('div','6aCf',null,`class`,`card p-1`);
let elLvz6W = eo('div','Boef',null,`class`,`text-center bold m-b-1 purple-text`);
text(`Mark task as`);
ec('div');
let cmpI2iy = this._lc('cr4TdRVnR', {parent:component,parentTop:layout,props:{items:component.getAllowedTaskStatuses(),value:component.task.status},events:{onselect:function(e) {let $el = this; component.updateTaskStatus(e.value)}},attrs:{heading:'Mark Task As..'},state:'stxeLl8'});
ec('div');
}ec('div');
ec('div');
}}});

                    this.isReadyToGo();
                }
        });