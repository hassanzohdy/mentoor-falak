_Component({
                selector: 'task-details-page',
                c: 'TaskDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['task','getTaskStatus','taskStatusCanBeChanged','getAllowedTaskStatuses','updateTaskStatus'],
                children: {cLiA2XOHc:'flk-spinner',cmndqpuTU:'flk-time-ago',ciBcXZ37o:'markdown',ccE5gxYus:'flk-audio-player',cpJeCAglx:'flk-time-ago',cXLWgnFVZ:'markdown',coiax2sT1:'flk-audio-player',cUunlhNec:'task-checklist',cLdHUJLAK:'comments',cRPCgUWJk:'flk-time-ago',c8GO7lY18:'gold-icon',cfIyH6GEA:'flk-time-remaining',crVhNwjSC:'flk-dropdown-list',cwoJmSAkK:'layout'},
                render: function (component) {
                    let cmpE3qB = this._lc('cwoJmSAkK', {parent:component,content:(layout) => {let cndpEtu = ! component.task;
this.setState('stRB2tG', cndpEtu);
let cndiWke = !(cndpEtu);
this.setState('stUMVkx', cndiWke);
if (cndpEtu) { 
let cmpFKzJ = this._lc('cLiA2XOHc', {parent:component,parentTop:layout,state:'stRB2tG'});
}else { 
let elv3BFz = eo('div',null,null,`class`,`row`);
let elMvumF = eo('div',null,null,`class`,`col order-12 order-sm-1`);
let el7U8V5 = eo('h1',null,null,`class`,`m-b-1`);
text('#' + component.task.id + ' ' + component.task.title);
ec('h1');
let cnddxAZ = component.task.startsAt;
this.setState('stjp6cj', cnddxAZ);
if (cnddxAZ) { 
let elfAxxk = eo('div','JO6f',null,`class`,`teal-text bold`);
text( component.task.startsAt );
let cndGFmk = component.task.endsAt;
this.setState('stKjo5x', cndGFmk);
if (cndGFmk) { 
text(`-
                    ${ component.task.endsAt }`);
}ec('div');
}let elUfRBq = eo('span',null,null,`title`,``);
let cmp3T_D = this._lc('cmndqpuTU', {parent:component,parentTop:layout,props:{timestamp:component.task.createdAt.timestamp}});
ec('span');

                    setTimeout(function () {
                        let $el = elUfRBq;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Created At')}`});
        ;
                    }, 20);                
                let cndxi2A = component.task.description;
this.setState('stbvlLM', cndxi2A);
if (cndxi2A) { 
let elrPXYg = eo('h2','Kl1f',null,`class`,`bold m-y-2`);
text(`Details`);
ec('h2');
let elZXSEH = eo('p','9SOf',null,`class`,`description card p-1`);
let cmpu9QU = this._lc('ciBcXZ37o', {parent:component,parentTop:layout,props:{content:component.task.description},state:'stbvlLM'});
let cndLZ8q = component.task.descriptionRecord;
this.setState('stRI90x', cndLZ8q);
if (cndLZ8q) { 
let cmpqCOG = this._lc('ccE5gxYus', {parent:component,parentTop:layout,props:{src:component.task.descriptionRecord},attrs:{src:`${component.task.descriptionRecord}`},state:'stRI90x'});
}ec('p');
}let cndlsX1 = component.task.participantNotes;
this.setState('stfpJGP', cndlsX1);
if (cndlsX1) { 
let elvcsVI = eo('div','Pivf',null,`class`,`card p-1 m-y-2`);
let el2Ha9f = eo('h3','znHf',null,`class`,`bold pink-text`);
text( component.task.participant.name );
ec('h3');
let cmpyu9Y = this._lc('cpJeCAglx', {parent:component,parentTop:layout,props:{timestamp:component.task.submittedAt.timestamp},attrs:{class:'brown-text bold'},state:'stfpJGP'});
let elEG2Yh = eo('p','AFuf',null,`class`,`description m-y-2`);
let cmpfa_e = this._lc('cXLWgnFVZ', {parent:component,parentTop:layout,props:{content:component.task.participantNotes},state:'stfpJGP'});
ec('p');
let cndZLZ0 = component.task.participantRecord;
this.setState('stPR7rk', cndZLZ0);
if (cndZLZ0) { 
let cmpYm9B = this._lc('coiax2sT1', {parent:component,parentTop:layout,props:{src:component.task.participantRecord},attrs:{src:`${component.task.participantRecord}`},state:'stPR7rk'});
}ec('div');
}let cmpjMMT = this._lc('cUunlhNec', {parent:component,parentTop:layout,props:{task:component.task}});
let cmpEJ44 = this._lc('cLdHUJLAK', {parent:component,parentTop:layout,props:{comments:component.task.comments,project:component.task.project,typeId:component.task.id},attrs:{type:'task'}});
let elvxGiZ = eo('h3',null,null,`class`,`bold m-t-2 m-b-1`);
text(`Task Status Change Log`);
ec('h3');
let elnLhNZ = eo('table',null,null,`class`,`table table-bordered`,`id`,`status-table`);
let elkIVxv = eo('thead');
let elheu1k = eo('tr');
let elYbpJy = eo('th');
text(`Status`);
ec('th');
let el2E13I = eo('th');
text(`Created By`);
ec('th');
let eliZkFC = eo('th');
text(`Created`);
ec('th');
ec('tr');
ec('thead');
let el9vVkM = eo('tbody');
for (let i in component.task.statusLog) {
let status = component.task.statusLog[i]; 
 let ii__xv = 'FgXF5tJ' + i;
let elST9Dg = eo('tr','WBJXzi8NKzwi' + i+ii__xv);
let eliOUZU = eo('td','jBTff'+ii__xv);
let elVUrT5 = eo('span','LKUff'+ii__xv,null,`class`,`bold btn btn-sm status`);
elVUrT5.cls = taskStatus(status);

            for (let className in elVUrT5.cls) {
                elVUrT5.classList.toggle(className, elVUrT5.cls[className]);
            }  
            text(trans(status.status));
ec('span');
ec('td');
let eldmwen = eo('td','_y4ff'+ii__xv);
text(status.status != 'autoFailed' ? status.createdBy.name : 'System');
ec('td');
let elPLuur = eo('td','DYqff'+ii__xv);
let cmptuS0 = this._lc('cRPCgUWJk', {parent:component,parentTop:layout,props:{timestamp:status.createdAt.timestamp},insideLoop:true,index:"" +ii__xv});
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
let elYjwI_ = eo('div',null,null,`class`,`col-sm-3 order-1`);
let cndns6z = Object.get(component.task.project, 'id', '');
this.setState('stqHLrz', cndns6z);
if (cndns6z) { 
let el17aAR = eo('a','e_Af',null,`href`,`${URLS.project(component.task.project, 'tasks-board')}`,`class`,`btn bold btn-purple m-b-1`);
text(`Back to Tasks Board`);
ec('a');
}let elZccWy = eo('div',null,null,`class`,`card`);
let elj12uh = eo('div',null,null,`class`,`text-center`);
let els67JM = eo('div',null,null,`class`,`task-status badge`);
els67JM.cls = component.getTaskStatus();

            for (let className in els67JM.cls) {
                els67JM.classList.toggle(className, els67JM.cls[className]);
            }  
            text(trans(component.task.status));
ec('div');
let elX3akP = eo('div',null,null,`title`,``);
let cmprHbN = this._lc('c8GO7lY18', {parent:component,parentTop:layout,props:{coins:component.task.reward}});
ec('div');

                    setTimeout(function () {
                        let $el = elX3akP;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Task Reward')}`});
        ;
                    }, 20);                
                let elDZbhZ = eo('div',null,null,`title`,``,`class`,`m-b-1`);
let eluItaV = eo('strong',null,null,`class`,`red-text`);
text(component.task.penaltyRatio + 'x');
ec('strong');
ec('div');

                    setTimeout(function () {
                        let $el = elDZbhZ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Penalty ratio')}`});
        ;
                    }, 20);                
                let cnd394d = component.task.endsAtTimestamp;
this.setState('stLAnQG', cnd394d);
if (cnd394d) { 
let elJRdEg = eo('div','QjLf',null,`title`,``,`class`,`m-b-2`);
let elNUcKi = eo('i','57Cf',null,`class`,`${fas('clock') + ' mr-2 icon'}`);
ec('i');
let cmpwn3G = this._lc('cfIyH6GEA', {parent:component,parentTop:layout,props:{startsAt:component.task.startsAtTimestamp,endsAt:component.task.endsAtTimestamp},attrs:{class:'bold'},state:'stLAnQG'});
ec('div');

                    setTimeout(function () {
                        let $el = elJRdEg;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.task.endsAtTimestamp - component.task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time'}`});
        ;
                    }, 20);                
                }ec('div');
ec('div');
let cndNMWB = ! Is.empty(component.task.parent);
this.setState('st9wn9u', cndNMWB);
if (cndNMWB) { 
let elbmlRI = eo('div','IqQf',null,`class`,`card p-1`);
let ellJGyr = eo('div','uLLf',null,`class`,`bold text-center m-b-1`);
let elsnN6B = eo('i','GDYf',null,`class`,`${fas('folder-open') + ' mr-2 icon'}`);
ec('i');
text(`Parent Task`);
ec('div');
let ellEmZb = eo('a','7eqf',null,`href`,`${URLS.task(component.task.parent)}`,`class`,`btn btn-cyan bold`);
text(component.task.parent.title);
ec('a');
ec('div');
}let elBGmYH = eo('div',null,null,`class`,`card p-1`);
let elCnVme = eo('div',null,null,`class`,`bold text-center m-b-1`);
let elLTC_r = eo('i',null,null,`class`,`${fas('user') + ' mr-2 icon'}`);
ec('i');
text(`Participant`);
ec('div');
let eloglG_ = eo('div',null,null,`class`,`bold teal-text`);
text(component.task.participant.name);
ec('div');
ec('div');
let elZXoQ2 = eo('div',null,null,`class`,`card p-1`);
let elQrlvw = eo('div',null,null,`class`,`bold text-center m-b-1`);
let elAr268 = eo('i',null,null,`class`,`${fas('user-secret') + ' mr-2 icon'}`);
ec('i');
text(`Supervisors`);
ec('div');
for (let i in component.task.supervisors) {
let supervisor = component.task.supervisors[i]; 
 let iixN5x = 'iYqCul2' + i;
let elEDgnx = eo('div','tJCNhIua8fDq' + i+iixN5x,null,`class`,`bold green-text`);
text(supervisor.name);
ec('div');
}
ec('div');
let cndFmJO = component.task.project;
this.setState('stCKNBZ', cndFmJO);
if (cndFmJO) { 
let elEI7ue = eo('div','0TZf',null,`class`,`card p-1`);
let el1ilvz = eo('div','Km9f',null,`class`,`bold text-center m-b-1`);
let el6FQKs = eo('i','JS2f',null,`class`,`${fas('suitcase') + ' mr-2 icon'}`);
ec('i');
text(`Project`);
ec('div');
let cndINin = component.task.module;
this.setState('stF12n9', cndINin);
if (cndINin) { 
let elAzjPZ = eo('div','Gfff');
let elsIquk = eo('span','488f',null,`class`,`mr-2`);
text(`Module:`);
ec('span');
let cndxlzM = component.task.module.parent.id;
this.setState('stCYINo', cndxlzM);
if (cndxlzM) { 
let elquti8 = eo('strong','Au8f');
text(`${ component.task.module.parent.name } »`);
ec('strong');
}let ellfyIe = eo('strong');
text(component.task.module.name);
ec('strong');
ec('div');
}let eluqbFT = eo('a',null,null,`href`,`${URLS.project(component.task.project)}`,`class`,`btn btn-teal bold`);
text(component.task.project.name);
ec('a');
ec('div');
}let cndsIxV = component.task.userStory;
this.setState('stEKzKi', cndsIxV);
if (cndsIxV) { 
let elkL5r8 = eo('div','rBVf',null,`class`,`card p-1`);
let el9GusO = eo('div','5KBf',null,`class`,`bold text-center m-b-1`);
let elcuFcK = eo('i','6mDf',null,`class`,`${fas('sticky-note') + ' mr-2 icon'}`);
ec('i');
text(`User Story`);
ec('div');
let elOR_qI = eo('a','meIf',null,`href`,`${URLS.project(component.task.project, 'user-stories', component.task.userStory)}`,`class`,`btn btn-pink bold`);
text(component.task.userStory.title);
ec('a');
ec('div');
}let cndjpjZ = component.taskStatusCanBeChanged();
this.setState('st7Wbwn', cndjpjZ);
if (cndjpjZ) { 
let elU5ALI = eo('div','EQdf',null,`class`,`card p-1`);
let elrqQgE = eo('div','CK5f',null,`class`,`text-center bold m-b-1 purple-text`);
text(`Mark task as`);
ec('div');
let cmpVVqs = this._lc('crVhNwjSC', {parent:component,parentTop:layout,props:{items:component.getAllowedTaskStatuses(),value:component.task.status},events:{onselect:function(e) {let $el = this; component.updateTaskStatus(e.value)}},attrs:{heading:'Mark Task As..'},state:'st7Wbwn'});
ec('div');
}ec('div');
ec('div');
}}});

                    this.isReadyToGo();
                }
        });