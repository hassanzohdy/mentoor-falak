_Component({
                selector: 'task-details-page',
                c: 'TaskDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['task','user','rate','getTaskStatus','taskStatusCanBeChanged','getAllowedTaskStatuses','updateTaskStatus'],
                children: {cMnJOLwwl:'flk-spinner',cRLpY_kP3:'star-rating',cVUKaGBSl:'flk-time-ago',c8gGLELnb:'markdown',cq4IP_gga:'flk-audio-player',cHZXF5MSL:'flk-time-ago',cJnbXRsPQ:'markdown',cEcm_NIJu:'flk-audio-player',caOeEpkI5:'task-checklist',ckHWmNH3K:'comments',cBKHIbcX9:'flk-time-ago',c8ARK9O02:'gold-icon',c4xra38F5:'flk-time-remaining',c9k0SUnJw:'flk-dropdown-list',coxD6jqiZ:'layout'},
                render: function (component) {
                    let cmpO75p = this._lc('coxD6jqiZ', {parent:component,content:(layout) => {let cndj9rV = ! component.task;
this.setState('stVJJ22', cndj9rV);
let cndtIgO = !(cndj9rV);
this.setState('st0y9pg', cndtIgO);
if (cndj9rV) { 
let cmpgEgf = this._lc('cMnJOLwwl', {parent:component,parentTop:layout,state:'stVJJ22'});
}else { 
let ele_w65 = eo('div',null,null,`class`,`row`);
let el1BZko = eo('div',null,null,`class`,`col order-12 order-sm-1`);
let elelWYy = eo('h1',null,null,`class`,`m-b-1`);
text('#' + component.task.id + ' ' + component.task.title);
ec('h1');
let cndwWx0 = component.task.startsAt;
this.setState('st_eOTw', cndwWx0);
if (cndwWx0) { 
let elmvBTR = eo('div','OAIf',null,`class`,`teal-text bold`);
text( component.task.startsAt );
let cndg6rW = component.task.endsAt;
this.setState('stcS6Pn', cndg6rW);
if (cndg6rW) { 
text(`-
                    ${ component.task.endsAt }`);
}ec('div');
}let cmpUypL = this._lc('cRLpY_kP3', {parent:component,parentTop:layout,props:{readonly:! component.user.accountType == 'admin'},events:{onselect:function(e) {let $el = this; component.rate(e)}},boolAttrs:{readOnly:! component.user.accountType == 'admin'},attrs:{class:'form-group'}});
let eltc0XC = eo('span',null,null,`title`,``);
let cmp06jJ = this._lc('cVUKaGBSl', {parent:component,parentTop:layout,props:{timeFormat:component.task.createdAt.format,timestamp:component.task.createdAt.timestamp}});
ec('span');

                    setTimeout(function () {
                        let $el = eltc0XC;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Created At')}`});
        ;
                    }, 20);                
                let cnd2PNU = component.task.description;
this.setState('stasL4h', cnd2PNU);
if (cnd2PNU) { 
let elNh2Vb = eo('h2','yRxf',null,`class`,`bold m-y-2`);
text(`Details`);
ec('h2');
let elA42fv = eo('p','Bs8f',null,`class`,`description card p-1`);
let cmp7839 = this._lc('c8gGLELnb', {parent:component,parentTop:layout,props:{content:component.task.description},state:'stasL4h'});
ec('p');
}let ellivIK = eo('div',null,null,`class`,`card my-3`);
let cndjOv4 = component.task.descriptionRecord;
this.setState('stE823T', cndjOv4);
if (cndjOv4) { 
let cmpQHvk = this._lc('cq4IP_gga', {parent:component,parentTop:layout,props:{src:component.task.descriptionRecord},attrs:{src:`${component.task.descriptionRecord}`},state:'stE823T'});
}ec('div');
let cndZa7_ = component.task.participantNotes;
this.setState('stgEknW', cndZa7_);
if (cndZa7_) { 
let elZng9b = eo('div','yWff',null,`class`,`card p-1 m-y-2`);
let eluRyG_ = eo('h3','_f6f',null,`class`,`bold pink-text`);
text( component.task.participant.name );
ec('h3');
let cmprmNH = this._lc('cHZXF5MSL', {parent:component,parentTop:layout,props:{timeFormat:component.task.submittedAt.format,timestamp:component.task.submittedAt.timestamp},attrs:{class:'brown-text bold'},state:'stgEknW'});
let el_d1Aq = eo('p','wLyf',null,`class`,`description m-y-2`);
let cmpMLSc = this._lc('cJnbXRsPQ', {parent:component,parentTop:layout,props:{content:component.task.participantNotes},state:'stgEknW'});
ec('p');
let cndkaYD = component.task.participantRecord;
this.setState('stkB2xg', cndkaYD);
if (cndkaYD) { 
let cmpx3Lf = this._lc('cEcm_NIJu', {parent:component,parentTop:layout,props:{src:component.task.participantRecord},attrs:{src:`${component.task.participantRecord}`},state:'stkB2xg'});
}ec('div');
}let cmphXNB = this._lc('caOeEpkI5', {parent:component,parentTop:layout,props:{task:component.task}});
let cmpFakW = this._lc('ckHWmNH3K', {parent:component,parentTop:layout,props:{comments:component.task.comments,project:component.task.project,typeId:component.task.id},attrs:{type:'task'}});
let elK6frD = eo('h3',null,null,`class`,`bold m-t-2 m-b-1`);
text(`Task Status Change Log`);
ec('h3');
let elghUy8 = eo('table',null,null,`class`,`table table-bordered`,`id`,`status-table`);
let elTrpkz = eo('thead');
let elAD4Qs = eo('tr');
let elh9Gec = eo('th');
text(`Status`);
ec('th');
let eln02de = eo('th');
text(`Created By`);
ec('th');
let elemg9H = eo('th');
text(`Created`);
ec('th');
ec('tr');
ec('thead');
let elinK4b = eo('tbody');
for (let i in component.task.statusLog) {
let status = component.task.statusLog[i]; 
 let ii5I_H = 'eNCmgiX' + i;
let elOJUXo = eo('tr','vv31YC2idala' + i+ii5I_H);
let el5Z6MB = eo('td','hxXff'+ii5I_H);
let el7qF0a = eo('span','S1zff'+ii5I_H,null,`class`,`bold btn btn-sm status`);
el7qF0a.cls = taskStatus(status);

            for (let className in el7qF0a.cls) {
                el7qF0a.classList.toggle(className, el7qF0a.cls[className]);
            }  
            text(trans(status.status));
ec('span');
ec('td');
let elUbiwG = eo('td','7f5ff'+ii5I_H);
text(status.status != 'autoFailed' ? status.createdBy.name : 'System');
ec('td');
let el6t3hw = eo('td','uBYff'+ii5I_H);
let cmpaz0a = this._lc('cBKHIbcX9', {parent:component,parentTop:layout,props:{timestamp:status.createdAt.timestamp},insideLoop:true,index:"" +ii5I_H});
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
let elpvJbm = eo('div',null,null,`class`,`col-sm-3 order-1`);
let cnd6LcQ = Object.get(component.task.project, 'id', '');
this.setState('stc9CHZ', cnd6LcQ);
if (cnd6LcQ) { 
let elsCBtA = eo('a','Sdef',null,`href`,`${URLS.project(component.task.project, 'tasks-board')}`,`class`,`btn bold btn-purple m-b-1`);
text(`Back to Tasks Board`);
ec('a');
}let elWs7Jj = eo('div',null,null,`class`,`card`);
let elNU08C = eo('div',null,null,`class`,`text-center`);
let elM15ih = eo('div',null,null,`class`,`task-status badge`);
elM15ih.cls = component.getTaskStatus();

            for (let className in elM15ih.cls) {
                elM15ih.classList.toggle(className, elM15ih.cls[className]);
            }  
            text(trans(component.task.status));
ec('div');
let elZ06Tp = eo('div',null,null,`title`,``);
let cmpSRXy = this._lc('c8ARK9O02', {parent:component,parentTop:layout,props:{coins:component.task.reward}});
ec('div');

                    setTimeout(function () {
                        let $el = elZ06Tp;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Task Reward')}`});
        ;
                    }, 20);                
                let els6kiS = eo('div',null,null,`title`,``,`class`,`m-b-1`);
let el3mHgI = eo('strong',null,null,`class`,`red-text`);
text(component.task.penaltyRatio + 'x');
ec('strong');
ec('div');

                    setTimeout(function () {
                        let $el = els6kiS;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Penalty ratio')}`});
        ;
                    }, 20);                
                let cndVb1S = component.task.endsAtTimestamp;
this.setState('stVbM53', cndVb1S);
if (cndVb1S) { 
let el1NrqX = eo('div','Baff',null,`title`,``,`class`,`m-b-2`);
let el57OQo = eo('i','caDf',null,`class`,`${fas('clock') + ' mr-2 icon'}`);
ec('i');
let cmpDCEe = this._lc('c4xra38F5', {parent:component,parentTop:layout,props:{startsAt:component.task.startsAtTimestamp,endsAt:component.task.endsAtTimestamp},attrs:{class:'bold'},state:'stVbM53'});
ec('div');

                    setTimeout(function () {
                        let $el = el1NrqX;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.task.endsAtTimestamp - component.task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time'}`});
        ;
                    }, 20);                
                }ec('div');
ec('div');
let cnd1aEZ = ! Is.empty(component.task.parent);
this.setState('stjOyBn', cnd1aEZ);
if (cnd1aEZ) { 
let elOkRkn = eo('div','YTvf',null,`class`,`card p-1`);
let elqoACq = eo('div','k5mf',null,`class`,`bold text-center m-b-1`);
let elCXbGT = eo('i','j8Yf',null,`class`,`${fas('folder-open') + ' mr-2 icon'}`);
ec('i');
text(`Parent Task`);
ec('div');
let elur0br = eo('a','RAkf',null,`href`,`${URLS.task(component.task.parent)}`,`class`,`btn btn-cyan bold`);
text(component.task.parent.title);
ec('a');
ec('div');
}let elJ3eHl = eo('div',null,null,`class`,`card p-1`);
let elvTf1U = eo('div',null,null,`class`,`bold text-center m-b-1`);
let elBUD9G = eo('i',null,null,`class`,`${fas('user') + ' mr-2 icon'}`);
ec('i');
text(`Participant`);
ec('div');
let elkja08 = eo('div',null,null,`class`,`bold teal-text`);
text(component.task.participant.name);
ec('div');
ec('div');
let eljxU9Q = eo('div',null,null,`class`,`card p-1`);
let elQkuil = eo('div',null,null,`class`,`bold text-center m-b-1`);
let elj_ejE = eo('i',null,null,`class`,`${fas('user-secret') + ' mr-2 icon'}`);
ec('i');
text(`Supervisors`);
ec('div');
for (let i in component.task.supervisors) {
let supervisor = component.task.supervisors[i]; 
 let iiazWy = 'ptZQ0gA' + i;
let el_Nvw0 = eo('div','KhmFATRub4Y5' + i+iiazWy,null,`class`,`bold green-text`);
text(supervisor.name);
ec('div');
}
ec('div');
let cndFnFQ = component.task.project;
this.setState('st7PMwN', cndFnFQ);
if (cndFnFQ) { 
let elejhPJ = eo('div','_sgf',null,`class`,`card p-1`);
let elaZvL8 = eo('div','nnMf',null,`class`,`bold text-center m-b-1`);
let elWzhFL = eo('i','q9gf',null,`class`,`${fas('suitcase') + ' mr-2 icon'}`);
ec('i');
text(`Project`);
ec('div');
let cndqhYF = component.task.module;
this.setState('sta4m1P', cndqhYF);
if (cndqhYF) { 
let eldHsch = eo('div','hb_f');
let elA7Xmn = eo('span','6l6f',null,`class`,`mr-2`);
text(`Module:`);
ec('span');
let cndCpEb = component.task.module.parent.id;
this.setState('stGMDhp', cndCpEb);
if (cndCpEb) { 
let el8EmEg = eo('strong','En2f');
text(`${ component.task.module.parent.name } »`);
ec('strong');
}let elxAkRX = eo('strong');
text(component.task.module.name);
ec('strong');
ec('div');
}let elivlmo = eo('a',null,null,`href`,`${URLS.project(component.task.project)}`,`class`,`btn btn-teal bold`);
text(component.task.project.name);
ec('a');
ec('div');
}let cndCD44 = component.task.userStory;
this.setState('stkBoRN', cndCD44);
if (cndCD44) { 
let elh84gA = eo('div','165f',null,`class`,`card p-1`);
let el6uIxT = eo('div','Vr2f',null,`class`,`bold text-center m-b-1`);
let elYqqj7 = eo('i','Zx4f',null,`class`,`${fas('sticky-note') + ' mr-2 icon'}`);
ec('i');
text(`User Story`);
ec('div');
let elTle9L = eo('a','3Drf',null,`href`,`${URLS.project(component.task.project, 'user-stories', component.task.userStory)}`,`class`,`btn btn-pink bold`);
text(component.task.userStory.title);
ec('a');
ec('div');
}let cndpl7h = component.taskStatusCanBeChanged();
this.setState('st3u44H', cndpl7h);
if (cndpl7h) { 
let elqOsCR = eo('div','23Zf',null,`class`,`card p-1`);
let elOyko6 = eo('div','t_ff',null,`class`,`text-center bold m-b-1 purple-text`);
text(`Mark task as`);
ec('div');
let cmpEYVA = this._lc('c9k0SUnJw', {parent:component,parentTop:layout,props:{items:component.getAllowedTaskStatuses(),value:component.task.status},events:{onselect:function(e) {let $el = this; component.updateTaskStatus(e.value)}},attrs:{heading:'Mark Task As..'},state:'st3u44H'});
ec('div');
}ec('div');
ec('div');
}}});

                    this.isReadyToGo();
                }
        });