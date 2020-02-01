_Component({
                selector: 'tasks-board',
                c: 'TasksBoard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','switchTo','isViewingArchivedTasks','displayMode','modalIsOpened','record','participants','supervisors','project','adjustTaskResponse','confirmDelete','remove','confirmingArchiving','archive','filterOptions','filteredData','filterBy','isInProjectPage','statuses','tasksBoardView','statusIconTitle','statusIcon','draggable','user','confirmArchiving','detectChanges','openModal','confirmRemoving','now','openQuickForm','quickAdd','participantId','usersService','isSubmitting','archivedTasks','tasksList','updateTaskStatus'],
                children: {c37OBvDqm:'flk-spinner',c19EI8Pog:'flk-dropdown-list',cOOmCpPMf:'flk-dropdown-list',cSdbvc1Tq:'flk-dropdown-list',csIS4IKUS:'flk-dropdown-list',c7JJz5Am9:'flk-dropdown-list',cdpvyg5R1:'flk-dropdown-list',cSxboPcqg:'flk-time-remaining',cQBxJ3dYS:'flk-dropdown-list',cbJzo6UrS:'flk-dropdown-list',caAQG9M8G:'flk-dropdown-list',cfZBDEdoP:'flk-time-remaining',cSgLcy9yO:'task-modal',cS8qICh_d:'flk-alert',cu_HCM2Km:'flk-alert'},
                render: function (component) {
                    let elv4qgc = eo('div',null,null,`class`,`row m-t-2 tasks-board`);
let cndZyGS = component.isLoading;
this.setState('stBCKlv', cndZyGS);
let cndzecX = !(cndZyGS);
this.setState('stR60S0', cndzecX);
if (cndZyGS) { 
let cmpW6Li = this._lc('c37OBvDqm', {parent:component,state:'stBCKlv'});
}else { 
let el7pjHR = eo('div',null,null,`class`,`style-switcher text-right m-y-2 col-12`);
let elwXQMK = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.switchTo('board')}]},`title`,``,`class`,`btn btn-sm btn-cyan`);
let eli3JuX = eo('i',null,null,`class`,`${fas('th-large') + ' icon fa-2x'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elwXQMK;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Board Mode')}`});
        ;
                    }, 20);                
                let eldRoJ2 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.switchTo('list')}]},`title`,``,`class`,`btn btn-sm btn-purple`);
let elymFUj = eo('i',null,null,`class`,`${fas('th-list') + ' icon fa-2x'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eldRoJ2;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('List Mode')}`});
        ;
                    }, 20);                
                ec('div');
let cndnIyR = ! component.isViewingArchivedTasks;
this.setState('stdEyE3', cndnIyR);
let cndeuZV = !(cndnIyR);
this.setState('stwz1Qf', cndeuZV);
if (cndnIyR) { 
let elJE5jC = eo('div','QCxf',null,`class`,`row w-100`);
let cndnoQi = component.displayMode == 'list';
this.setState('stmlmTU', cndnoQi);
let cndQC_1 = component.displayMode == 'list';
this.setState('styyfSI', cndQC_1);
if (cndnoQi) { 
let elnvkTX = eo('div','Re8f',null,`class`,`simple-card m-b-2 col-12 tasks-list-filter`);
let elwJ5Qk = eo('div','I2Hf',null,`class`,`row`);
let cndM480 = ! Is.empty(component.filterOptions.participants);
this.setState('sttwayw', cndM480);
if (cndM480) { 
let elaFBoW = eo('div','G5If',null,`class`,`col-sm-3 filter-container`);
let eluxz93 = eo('div','iqHf',null,`class`,`filter-list`);
let cmpmdL6 = this._lc('c19EI8Pog', {parent:component,props:{items:component.filterOptions.participants,value:component.filteredData.participants,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('participants', e);}},boolAttrs:{multiple:true},attrs:{heading:'Participants'},state:'sttwayw'});
ec('div');
ec('div');
}let cndnGW7 = ! Is.empty(component.filterOptions.supervisors);
this.setState('st3A9Gf', cndnGW7);
if (cndnGW7) { 
let elZ8NL2 = eo('div','jQef',null,`class`,`col-sm-3 filter-container`);
let el2SVXM = eo('div','v9Vf',null,`class`,`filter-list`);
let cmpCiHI = this._lc('cOOmCpPMf', {parent:component,props:{items:component.filterOptions.supervisors,value:component.filteredData.supervisors,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('supervisors', e);}},boolAttrs:{multiple:true},attrs:{heading:'Supervisors'},state:'st3A9Gf'});
ec('div');
ec('div');
}let cndFGDw = ! component.isInProjectPage && ! Is.empty(component.filterOptions.projects);
this.setState('stm3X7w', cndFGDw);
if (cndFGDw) { 
let el1OmLL = eo('div','OZqf',null,`class`,`col-sm-3 filter-container`);
let eljmtGn = eo('div','5RIf',null,`class`,`filter-list`);
let cmpcAKw = this._lc('cSdbvc1Tq', {parent:component,props:{items:component.filterOptions.projects,value:component.filteredData.projects,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('projects', e);}},boolAttrs:{multiple:true},attrs:{heading:'Projects'},state:'stm3X7w'});
ec('div');
ec('div');
}let cndbI_2 = ! Is.empty(component.filterOptions.statuses);
this.setState('stynBb5', cndbI_2);
if (cndbI_2) { 
let eln7GCt = eo('div','Sw5f',null,`class`,`col-sm-3 filter-container`);
let el1U7hr = eo('div','W26f',null,`class`,`filter-list`);
let cmpaell = this._lc('csIS4IKUS', {parent:component,props:{items:component.filterOptions.statuses,value:component.filteredData.statuses,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('statuses', e);}},boolAttrs:{multiple:true},attrs:{heading:'Task Status'},state:'stynBb5'});
ec('div');
ec('div');
}let cnd6bNi = ! Is.empty(component.filterOptions.modules);
this.setState('stDGO0Z', cnd6bNi);
if (cnd6bNi) { 
let elersdN = eo('div','jwgf',null,`class`,`col-sm-3 filter-container`);
let elgcD7b = eo('div','Azuf',null,`class`,`filter-list`);
let cmpCyUE = this._lc('c7JJz5Am9', {parent:component,props:{items:component.filterOptions.modules,value:component.filteredData.modules,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('modules', e);}},boolAttrs:{multiple:true},attrs:{heading:'Project Module'},state:'stDGO0Z'});
ec('div');
ec('div');
}let cndgsKk = ! Is.empty(component.filterOptions.userStories);
this.setState('st5Xhdn', cndgsKk);
if (cndgsKk) { 
let ellWo83 = eo('div','Tv5f',null,`class`,`col-sm-3 filter-container`);
let eliM0Mt = eo('div','bRUf',null,`class`,`filter-list`);
let cmpe32v = this._lc('cdpvyg5R1', {parent:component,props:{items:component.filterOptions.userStories,value:component.filteredData.userStories,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('userStories', e);}},boolAttrs:{multiple:true},attrs:{heading:'User Stories'},state:'st5Xhdn'});
ec('div');
ec('div');
}ec('div');
ec('div');
}let cnd4LxK = component.displayMode == 'board';
this.setState('st9v4zJ', cnd4LxK);
let cndEYal = cndQC_1;
this.setState('stluO8D', cndEYal);
if (cnd4LxK) { 
for (let i in component.statuses) {
let status = component.statuses[i]; 
 let iioXEE = 'ueeods6' + i;
let el93E3N = eo('div','bhlGquXiT9JU' + i+iioXEE,null,`class`,`col-12 col-sm-6 col-md-4 col-lg-3`);
let elZ0CkK = eo('div','wWsff'+iioXEE,null,`class`,`tasks-group ${ status }`);
let elIZE6Q = eo('h3','gJWff'+iioXEE,null,`class`,`m-b-2`);
let elUL8FI = eo('span','OVVff'+iioXEE);
text(trans(status));
ec('span');
let elBkNT3 = eo('span','MuVff'+iioXEE,null,`class`,`ml-2`);
text(`(${ component.tasksBoardView[status] ? component.tasksBoardView[status].toArray().length : 0 })`);
ec('span');
let elv4Yuo = eo('span','AZPff'+iioXEE,null,`title`,``,`class`,`material-icons float-right`);
text(component.statusIcon(status));
ec('span');

                    setTimeout(function () {
                        let $el = elv4Yuo;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.statusIconTitle(status)}`});
        ;
                    }, 20);                
                ec('h3');
let eljtNiE = eo('div','L3Off'+iioXEE,null, eventListeners, {onready:[function(e) {var $el = this;component.draggable($el)}]},`class`,`tasks-list`,`data-status`,`${ status }`);
let cndX8N1 = component.tasksBoardView[status];
this.setState('staHWEw', cndX8N1);
if (cndX8N1) { 
for (let index in component.tasksBoardView[status].toArray()) {
let task = component.tasksBoardView[status].toArray()[index]; 
 let ii0CO5 = task.id + status+ index;
let elUuHPt = eo('div','IrkLY5ONeeGu' + index+iioXEE+ii0CO5,null,`class`,`task simple-card m-b-1`,`data-id`,`${ task.id }`);
elUuHPt.cls = {item: task.canUserControl, undraggable: ! task.canUserControl};

            for (let className in elUuHPt.cls) {
                elUuHPt.classList.toggle(className, elUuHPt.cls[className]);
            }  
            let cndKi2P = task.isParticipant || task.isSupervisor || task.project && task.project.is.higherAuthority;
this.setState('stvn3dT', cndKi2P);
let cndyPbH = !(cndKi2P);
this.setState('stlNnrq', cndyPbH);
if (cndKi2P) { 
let elH0vnI = eo('a','eG_ff'+iioXEE+ii0CO5,null,`href`,`${URLS.task(task)}`,`class`,`bold`);
text('#' + task.id + ' ' + task.title);
ec('a');
}else { 
let el6DI2Q = eo('div','JbXff'+iioXEE+ii0CO5,null,`class`,`bold`);
text(task.title);
ec('div');
}let cndhNCO = ['completed', 'autoFailed', 'failed'].includes(status) && (component.user.id == 1 || task.isSupervisor || component.project && component.project.isProjectManager) ;
this.setState('stw_89D', cndhNCO);
if (cndhNCO) { 
let elmpt7A = eo('button','lF0ff'+iioXEE+ii0CO5,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmArchiving(task)}]},`title`,``,`class`,`float-right pink-text`);
let elazIJ9 = eo('i','Tf9ff'+iioXEE+ii0CO5,null,`class`,`${fas('archive') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elmpt7A;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Archive Task')}`});
        ;
                    }, 20);                
                }let cndMybC = component.user.id  == 1 || task.isSupervisor || task.isParticipant || (component.project && component.project.isProjectManager);
this.setState('stm0Lnh', cndMybC);
if (cndMybC) { 
let elcDxOh = eo('button','aAoff'+iioXEE+ii0CO5,null, eventListeners, {onclick:[function(e) {var $el = this;task.dropdown = ! task.dropdown; component.detectChanges();}]},`type`,`button`,`class`,` float-right`);
let el1dODI = eo('i','pDQff'+iioXEE+ii0CO5,null,`title`,``,`class`,`${fas('cog') + ' fa-spin icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = el1dODI;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Actions')}`});
        ;
                    }, 20);                
                ec('button');
}let elD3OeC = eo('div','t0Uff'+iioXEE+ii0CO5,null,`title`,``,`class`,`participant bold`);
elD3OeC.cls = {'green-text': task.participant.id == component.user.id};

            for (let className in elD3OeC.cls) {
                elD3OeC.classList.toggle(className, elD3OeC.cls[className]);
            }  
            text(task.participant.name);
ec('div');

                    setTimeout(function () {
                        let $el = elD3OeC;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Participant')}`});
        ;
                    }, 20);                
                let cndV38i = task.dropdown;
this.setState('stj4q9O', cndV38i);
if (cndV38i) { 
let elvQ_XB = eo('div','wX5ff'+iioXEE+ii0CO5,null,`class`,`action-btns m-t-1`);
let elR79ZD = eo('button','7tJff'+iioXEE+ii0CO5,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-cyan`);
let eli_ifw = eo('i','Q2Iff'+iioXEE+ii0CO5,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elR79ZD;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Tasks-board')}`});
        ;
                    }, 20);                
                let elSUzmK = eo('button','TwQff'+iioXEE+ii0CO5,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-danger`);
let elTWPLq = eo('i','HLoff'+iioXEE+ii0CO5,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elSUzmK;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Tasks-board')}`});
        ;
                    }, 20);                
                ec('div');
}let elvkkmW = eo('section','AT1ff'+iioXEE+ii0CO5,null,`class`,`footer`);
let el9IP04 = eo('i','mGJff'+iioXEE+ii0CO5,null,`title`,``,`class`,`${fas('user-secret') + ' icon'}`);
el9IP04.cls = {'green-text': task.isSupervisor};

            for (let className in el9IP04.cls) {
                el9IP04.classList.toggle(className, el9IP04.cls[className]);
            }  
            ec('i');

                    setTimeout(function () {
                        let $el = el9IP04;
                        
            true && tippyTooltip($el, {arrow:true,content:`${'<strong>Supervisors</strong><br>' + task.supervisors.map(supervisor => supervisor.name).join('<br/>')}`});
        ;
                    }, 20);                
                let cnd49ks = status == 'completed';
this.setState('stTPBI9', cnd49ks);
if (cnd49ks) { 
let elDNtBL = eo('i','EmSff'+iioXEE+ii0CO5,null,`class`,`${fas('check-double') + ' green-text ml-2 icon'}`);
ec('i');
}let cndj7eO = task.endsAt && ! ['completed'].includes(status);
this.setState('stEz7Mx', cndj7eO);
if (cndj7eO) { 
let cmp3Lhr = this._lc('cSxboPcqg', {parent:component,props:{tooltip:true,title:task.endsAtTimestamp - task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time',endsAt:task.endsAtTimestamp,startsAt:component.now},attrs:{title:`${task.endsAtTimestamp - task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time'}`,class:'ml-4 bold'},state:'stEz7Mx',insideLoop:true,index:"" +iioXEE+ii0CO5});
}let cndv0fe = ! Is.empty(task.comments);
this.setState('stBbOiP', cndv0fe);
if (cndv0fe) { 
let elaXQra = eo('span','V9kff'+iioXEE+ii0CO5,null,`title`,``,`class`,`ml-3`);
let eljKt7O = eo('i','T8Tff'+iioXEE+ii0CO5,null,`class`,`${fas('comments') + ' gray-text mr-2 icon'}`);
ec('i');
let elkPv5B = eo('strong','suTff'+iioXEE+ii0CO5);
text(task.comments.length);
ec('strong');
ec('span');

                    setTimeout(function () {
                        let $el = elaXQra;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Task Comments')}`});
        ;
                    }, 20);                
                }let cndwYFV = (component.project || task.project) && ! component.isInProjectPage;
this.setState('stYONnT', cndwYFV);
if (cndwYFV) { 
let elYKwOp = eo('a','QX0ff'+iioXEE+ii0CO5,null,`href`,`${URLS.project(component.project || task.project)}`,`title`,``,`class`,`ml-3 teal-text`);
let cndqZJj = task.project.image;
this.setState('stn2Uw6', cndqZJj);
let cnd17Wg = !(cndqZJj);
this.setState('st4af3f', cnd17Wg);
if (cndqZJj) { 
let elYe3V1 = ev('img','PyEff'+iioXEE+ii0CO5,null,`src`,`${task.project.image}`,`class`,`small circle`);
}else { 
let elgi4MR = eo('i','bc_ff'+iioXEE+ii0CO5,null,`class`,`${fas('suitcase') + ' icon'}`);
ec('i');
}ec('a');

                    setTimeout(function () {
                        let $el = elYKwOp;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.project ? component.project.name : task.project.name}`});
        ;
                    }, 20);                
                }let cndWzoN = ! Is.empty(task.module);
this.setState('stg9NWy', cndWzoN);
if (cndWzoN) { 
let elyHa5N = eo('span','SIGff'+iioXEE+ii0CO5,null,`title`,``,`class`,`ml-3`);
let eli1tUD = eo('i','Fznff'+iioXEE+ii0CO5,null,`class`,`${fas('cog') + ' lime-text mr-2 icon'}`);
ec('i');
let elm0chE = eo('span','anfff'+iioXEE+ii0CO5);
text(task.module.name);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elyHa5N;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Module')}`});
        ;
                    }, 20);                
                }ec('section');
ec('div');
}
}ec('div');

                    setTimeout(function () {
                        let $el = eljtNiE;
                        component.draggable($el);
                    }, 20);                
                ec('div');
let cndf1SN = (component.project || component.user.id == 1) && Object.get(component.project, 'isHigherAuthority', '')  && status != 'autoFailed';
this.setState('stFXSgp', cndf1SN);
if (cndf1SN) { 
let elfaBP4 = eo('section','vVoff'+iioXEE,null,`class`,`footer text-right m-b-2`);
let cndn4fm = ! component.openQuickForm[status];
this.setState('stDawkY', cndn4fm);
if (cndn4fm) { 
let elNCKTX = eo('button','X3gff'+iioXEE,null, eventListeners, {onclick:[function(e) {var $el = this;component.openQuickForm[status] = true}]},`title`,``,`type`,`button`,`class`,`btn btn-info btn-circle`);
let elKxmFM = eo('i','7OVff'+iioXEE,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elNCKTX;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Quick add')}`});
        ;
                    }, 20);                
                }let cnd4u0d = component.openQuickForm[status];
this.setState('stiCSlK', cnd4u0d);
if (cnd4u0d) { 
let el3ocIR = eo('form','7bOff'+iioXEE,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.quickAdd($el)}]});

                if (! el3ocIR.formHandler) {
                    window.cfrmdlr = el3ocIR.formHandler = new FormHandler(el3ocIR, component);
                } else {
                    window.cfrmdlr = el3ocIR.formHandler;
                }
            let eliGtcH = ev('input','41Cff'+iioXEE,null, eventListeners, {oninput:[function(e) {status = this.value;}]},`value`,`${fval(status)}`,`name`,`${(`status`).toInputName()}`,`type`,`hidden`);
eliGtcH.value = fval(status);
let cnd3AvF = component.project;
this.setState('stHurBH', cnd3AvF);
let cndgv9Y = !(cnd3AvF);
this.setState('stRrswt', cndgv9Y);
if (cnd3AvF) { 
let elmGuDx = ev('input','Rm2ff'+iioXEE,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elmGuDx.value = fval(component.project.id);
}let elFzdfF = ev('input','vhLff'+iioXEE,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el3ocIR.formHandler.addError(`title`, 'required', trans('validation.required'));}return el3ocIR.formHandler.removeError(`title`);}]},`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Task Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
let cndnRa7 = el3ocIR.formHandler.getError(`title`);
this.setState('st9A4TO', cndnRa7);
let cndCgUh = !(cndnRa7);
this.setState('st0nAes', cndCgUh);
if (cndnRa7) { 
let elAwiyZ = eo('div','S80ff'+iioXEE,null,`class`,`alert alert-danger`);
text(el3ocIR.formHandler.getError(`title`));
ec('div');
}let elL3V6Z = ev('input','a_bff'+iioXEE,null, eventListeners, {oninput:[function(e) {component.user.id = this.value;}]},`value`,`${fval(component.user.id)}`,`name`,`${(`supervisors[]`).toInputName()}`,`type`,`hidden`);
elL3V6Z.value = fval(component.user.id);
let cndHIaS = component.project;
this.setState('stAzu8P', cndHIaS);
let cnd1krQ = !(cndHIaS);
this.setState('stxnc98', cnd1krQ);
if (cndHIaS) { 
let cmpWIaW = this._lc('cQBxJ3dYS', {parent:component,props:{value:component.participantId,required:true,items:component.participants},attrs:{name:`${(`participant`).toInputName()}`,heading:'Assignee'},state:'stAzu8P',insideLoop:true,index:"" +iioXEE});
}else { 
let cmpCtdW = this._lc('cbJzo6UrS', {parent:component,props:{remoteSearch:true,value:component.participantId,required:true,lazyLoading:true,service:component.usersService},attrs:{name:`${(`participant`).toInputName()}`,query:'name',heading:'Assignee',required:''},state:'stxnc98',insideLoop:true,index:"" +iioXEE});
}let el1yrAE = eo('div','xtPff'+iioXEE,null,`class`,`text-right m-t-1`);
let elB1277 = eo('button','k0zff'+iioXEE,null, eventListeners, {onclick:[function(e) {var $el = this;component.openQuickForm[status] = false;}]}, boolAttrs, {disabled:component.isSubmitting},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-warning`);
let el1TlXJ = eo('i','68lff'+iioXEE,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elB1277;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('cancel')}`});
        ;
                    }, 20);                
                let el8aKtg = eo('button','yw9ff'+iioXEE,null, boolAttrs, {disabled:component.isSubmitting},`title`,``,`class`,`btn btn-circle btn-success`);
let elmW9lp = eo('i','Lgnff'+iioXEE,null,`class`,`${fas('check') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el8aKtg;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Create')}`});
        ;
                    }, 20);                
                ec('div');
ec('form');
}ec('section');
}ec('div');
}
let cndJKe5 = ! Is.empty(component.archivedTasks);
this.setState('st8gsiN', cndJKe5);
if (cndJKe5) { 
let ely9Q8F = eo('button','xAPf',null, eventListeners, {onclick:[function(e) {var $el = this;component.isViewingArchivedTasks = true}]},`class`,`col-12 col-sm-4 col-md-3 bold pink-text view-archived-btn`);
text(`View Archived Tasks (${ component.archivedTasks.length.format() })`);
ec('button');
}}else if (cndEYal) { 
let elH4tpr = eo('div',null,null,`class`,`tasks-list-view`);
let el70ijI = eo('h3',null,null,`class`,`task-heading simple-card`);
text(`Tasks List (${component.tasksList.length})`);
ec('h3');
let ellRWdO = eo('table',null,null,`class`,`table buttoned simple-card`);
let elHAMHT = eo('thead');
let el0GrgM = eo('tr');
let eljM5CP = eo('th');
text(`#`);
ec('th');
let elMt7wD = eo('th');
text(`Task`);
ec('th');
let eljnlMX = eo('th');
text(`Progress`);
ec('th');
let cndM11F = ! component.isInProjectPage;
this.setState('st8LbCi', cndM11F);
if (cndM11F) { 
let elmqZRA = eo('th','l5mf');
text(`Project`);
ec('th');
}let elrQFv_ = eo('th');
text(`Status`);
ec('th');
let elstS3v = eo('th');
text(`Remaining Time`);
ec('th');
let elJgyLz = eo('th');
text(`Participant`);
ec('th');
let el4CnD2 = eo('th');
text(`Supervisors`);
ec('th');
let elJ3xrZ = eo('th',null,null,`class`,`text-center`);
text(`Module`);
ec('th');
let el4xOcV = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elHXh2_ = eo('tbody');
for (let index in component.tasksList) {
let task = component.tasksList[index]; 
 let iiyyic = task.id+ index;
let elw7NVq = eo('tr','14tpW1nBmAM0' + index+iiyyic);
let elM1cwo = eo('td','OfJff'+iiyyic);
text(task.id);
ec('td');
let elAKund = eo('td','qOoff'+iiyyic);
let elp4xFB = eo('a','Ztdff'+iiyyic,null,`href`,`${URLS.task(task)}`,`title`,``,`class`,`title`);
text(task.title.readMoreChars(30));
ec('a');

                    setTimeout(function () {
                        let $el = elp4xFB;
                        
            true && tippyTooltip($el, {arrow:true,content:`${task.title}`});
        ;
                    }, 20);                
                let cndcQzH = ! Is.empty(task.comments);
this.setState('st_z5D9', cndcQzH);
if (cndcQzH) { 
let eld6Wfn = eo('span','Yaiff'+iiyyic,null,`title`,``,`class`,`ml-3`);
let elTzrDi = eo('i','vHWff'+iiyyic,null,`class`,`${fas('comments') + ' gray-text mr-2 icon'}`);
ec('i');
let elvNrlW = eo('strong','PD9ff'+iiyyic);
text(task.comments.length);
ec('strong');
ec('span');

                    setTimeout(function () {
                        let $el = eld6Wfn;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Task Comments')}`});
        ;
                    }, 20);                
                }ec('td');
let elJGpBy = eo('td','4B3ff'+iiyyic);
let cnd3R7B = task.progress;
this.setState('stdteIF', cnd3R7B);
if (cnd3R7B) { 
let elJPoYz = eo('div','8pXff'+iiyyic,null,`title`,``,`class`,`task-progress`);
let elkss0Q = eo('div','u2xff'+iiyyic,null, 'style', {width:`${task.progress.percentage + '%'}`},`class`,`completed`);
ec('div');
let el54Jbm = eo('div','iNPff'+iiyyic,null,`class`,`value`);
text(task.progress.completed + '/' + task.progress.total);
ec('div');
ec('div');

                    setTimeout(function () {
                        let $el = elJPoYz;
                        
            true && tippyTooltip($el, {arrow:true,content:`${Math.floor(task.progress.percentage) + '% Completed'}`});
        ;
                    }, 20);                
                }ec('td');
let cnd0llC = ! component.isInProjectPage;
this.setState('stDpjDi', cnd0llC);
if (cnd0llC) { 
let elzVJWx = eo('td','vlnff'+iiyyic);
let cndSLp6 = component.project || task.project;
this.setState('stuNfKA', cndSLp6);
let cndStnY = !(cndSLp6);
this.setState('stp5ukI', cndStnY);
if (cndSLp6) { 
let elOR9Cu = eo('a','5RPff'+iiyyic,null,`href`,`${URLS.project(component.project || task.project)}`,`title`,``,`class`,`ml-3`);
let cndu7nV = task.project.image;
this.setState('stNR2wx', cndu7nV);
let cndlH3x = !(cndu7nV);
this.setState('stqqRva', cndlH3x);
if (cndu7nV) { 
let elQUQYn = ev('img','Qpyff'+iiyyic,null,`src`,`${task.project.image}`,`class`,`small circle`);
}else { 
let el32d8M = eo('i','vqDff'+iiyyic,null,`class`,`${fas('suitcase') + ' icon'}`);
ec('i');
}ec('a');

                    setTimeout(function () {
                        let $el = elOR9Cu;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.project ? component.project.name : task.project.name}`});
        ;
                    }, 20);                
                }else { 
let eldrU9E = eo('strong','bDcff'+iiyyic);
text(`N/a`);
ec('strong');
}ec('td');
}let elJBul3 = eo('td','23lff'+iiyyic,null,`class`,`status-column`);
let elSExtE = eo('span','giTff'+iiyyic,null, eventListeners, {onclick:[function(e) {var $el = this;task.canUserControl ? task.openStatusChanger = ! task.openStatusChanger : null;}]});
let elNW0DC = eo('span','dlJff'+iiyyic,null,`class`,`badge`);
elNW0DC.cls = taskStatus(task);

            for (let className in elNW0DC.cls) {
                elNW0DC.classList.toggle(className, elNW0DC.cls[className]);
            }  
            text(task.status);
ec('span');
let cndln5O = task.canUserControl;
this.setState('stSNHs5', cndln5O);
if (cndln5O) { 
let elhMZtE = eo('i','Jsyff'+iiyyic,null,`title`,``,`class`,`${fas('caret-down') + ' icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elhMZtE;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Change Task Status')}`});
        ;
                    }, 20);                
                }ec('span');
let cndeTwJ = task.openStatusChanger;
this.setState('stxKHK1', cndeTwJ);
if (cndeTwJ) { 
let ele2b69 = eo('div','diQff'+iiyyic,null,`class`,`status-changer`);
let cmpWD3j = this._lc('caAQG9M8G', {parent:component,props:{items:getAllowedTaskStatuses(task),searchable:false,except:task.status},events:{onselect:function(e) {let $el = this; component.updateTaskStatus(task, e.value)}},state:'stxKHK1',insideLoop:true,index:"" +iiyyic});
ec('div');
}ec('td');
let elPO5eJ = eo('td','2n5ff'+iiyyic);
let cndL0Ur = task.status == 'completed';
this.setState('st0TdVq', cndL0Ur);
let cndtJ06 = task.endsAtTimestamp && ! ['completed', 'archived'].includes(task.status);
this.setState('statA4K', cndtJ06);
if (cndL0Ur) { 
let eluSkbl = eo('div','9UZff'+iiyyic);
let elpJIp3 = eo('i','s2vff'+iiyyic,null,`title`,``,`class`,`${fas('check-double') + ' green-text icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elpJIp3;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Completed')}`});
        ;
                    }, 20);                
                ec('div');
}else if (cndtJ06) { 
let elDDrSQ = eo('span','AyFff'+iiyyic,null,`title`,``);
let elIHCL1 = eo('i','1L1ff'+iiyyic,null,`class`,`${fas('clock') + ' mr-2 icon'}`);
ec('i');
let cmpOnMb = this._lc('cfZBDEdoP', {parent:component,props:{startsAt:task.startsAtTimestamp,endsAt:task.endsAtTimestamp},attrs:{class:'bold'},state:'statA4K',insideLoop:true,index:"" +iiyyic});
ec('span');

                    setTimeout(function () {
                        let $el = elDDrSQ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${task.endsAtTimestamp - task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time'}`});
        ;
                    }, 20);                
                }ec('td');
let elyLGE7 = eo('td','r4Vff'+iiyyic,null,`class`,`text-center`);
let elLF2du = ev('img','sUyff'+iiyyic,null,`src`,`${task.participant.image}`,`title`,`${task.participant.name}`,`class`,`small mr-2 circle`,`alt`,`${task.participant.name}`);

                    setTimeout(function () {
                        let $el = elLF2du;
                        
            true && tippyTooltip($el, {arrow:true,content:`${task.participant.name}`});
        ;
                    }, 20);                
                ec('td');
let elNI5S9 = eo('td','Tntff'+iiyyic,null,`class`,`text-center`);
for (let i in task.supervisors) {
let supervisor = task.supervisors[i]; 
 let iicRqa = '1cGASZp' + i;
let eljN42b = eo('span','cIcyqeoxICnH' + i+iiyyic+iicRqa,null,`class`,`mx-1`);
let elDebZd = ev('img','1niff'+iiyyic+iicRqa,null,`src`,`${supervisor.image}`,`title`,`${supervisor.name}`,`class`,`small mr-2 circle`,`alt`,`${supervisor.name}`);

                    setTimeout(function () {
                        let $el = elDebZd;
                        
            true && tippyTooltip($el, {arrow:true,content:`${supervisor.name}`});
        ;
                    }, 20);                
                ec('span');
}
ec('td');
let elAcwfG = eo('th','sKvff'+iiyyic,null,`class`,`text-center v-middle gray-text`);
let cnddO58 = Object.get(task.module, 'parent.name', '');
this.setState('stkQm1_', cnddO58);
if (cnddO58) { 
let elB0IVD = eo('span','4Iqff'+iiyyic);
text(task.module.parent.name);
ec('span');
let elMlYU5 = eo('i','oHnff'+iiyyic,null,`class`,`${fas('angle-double-right') + ' mx-2 icon'}`);
ec('i');
}let elNR2MO = eo('span','J0Jff'+iiyyic);
text(Object.get(task.module, 'name', ''));
ec('span');
ec('th');
let ellZVJ9 = eo('td','zUhff'+iiyyic);
let cnd7iV_ = true;
this.setState('steWi00', cnd7iV_);
if (cnd7iV_) { 
let el1JcV1 = eo('button','0fOff'+iiyyic,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-cyan`);
let elFnWS7 = eo('i','oEtff'+iiyyic,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el1JcV1;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Tasks-board')}`});
        ;
                    }, 20);                
                let elQRvHz = eo('button','Of1ff'+iiyyic,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elrEb2x = eo('i','GF2ff'+iiyyic,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elQRvHz;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Tasks-board')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
}ec('div');
}else { 
let elyqCkZ = eo('div',null,null,`class`,`w-100`);
let elGTfN_ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isViewingArchivedTasks = false}]},`class`,`m-b-2 bold btn btn-success float-right`);
text(`Back To
        Board`);
ec('button');
let elbeHdK = eo('table',null,null,`class`,`table table-bordered`);
let el_UWcg = eo('thead');
let el47phN = eo('tr');
let elyAqsJ = eo('th');
text(`Task`);
ec('th');
let elJupjl = eo('th');
text(`Participant`);
ec('th');
ec('tr');
ec('thead');
let elpyZfw = eo('tbody');
for (let i in component.archivedTasks) {
let task = component.archivedTasks[i]; 
 let iiSjXB = 'ZG5LZXi' + i;
let elyvcGD = eo('tr','jDhmz0YTWmTx' + i+iiSjXB);
let el6_do2 = eo('td','1JEff'+iiSjXB);
let elowrke = eo('a','LX5ff'+iiSjXB,null,`href`,`${URLS.task(task)}`);
text(task.title);
ec('a');
ec('td');
let elE9s1r = eo('td','N8Fff'+iiSjXB);
let el3bI1U = ev('img','HiHff'+iiSjXB,null,`src`,`${task.participant.image}`,`class`,`circle small`,`title`,`${task.participant.name}`,`alt`,`${task.participant.name}`);
let elWlRyA = eo('span','3PXff'+iiSjXB,null,`class`,`ml-2 bold`);
text(task.participant.name);
ec('span');
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
}}ec('div');
let cndyCAZ = component.modalIsOpened;
this.setState('stoJyI4', cndyCAZ);
if (cndyCAZ) { 
component.modal = this._lc('cSgLcy9yO', {parent:component,props:{displayStatusList:component.record.id,participants:component.participants,supervisors:component.supervisors,project:component.project,task:component.record},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null},onsave:function(e) {let $el = this; component.adjustTaskResponse(e)}},state:'stoJyI4'});
}let cndttxE = component.confirmDelete;
this.setState('st6Hivi', cndttxE);
if (cndttxE) { 
let cmpYy6w = this._lc('cS8qICh_d', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st6Hivi'});
}let cndiYEV = component.confirmingArchiving;
this.setState('stoXEKd', cndiYEV);
if (cndiYEV) { 
let cmpENZ_ = this._lc('cu_HCM2Km', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmingArchiving = null},onconfirm:function(e) {let $el = this; component.archive()}},state:'stoXEKd'});
}
                    this.isReadyToGo();
                }
        });