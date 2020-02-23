_Component({
                selector: 'tasks-board',
                c: 'TasksBoard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','switchTo','isViewingArchivedTasks','displayMode','modalIsOpened','record','participants','supervisors','project','adjustTaskResponse','confirmDelete','remove','confirmingArchiving','archive','filterOptions','filteredData','filterBy','isInProjectPage','statuses','tasksBoardView','statusIconTitle','statusIcon','draggable','user','confirmArchiving','detectChanges','openModal','confirmRemoving','now','openQuickForm','quickAdd','participantId','usersService','isSubmitting','archivedTasks','tasksList','sortTasksBy','updateTaskStatus'],
                children: {cuT2jxpoZ:'flk-spinner',cJpRShQZ3:'flk-dropdown-list',cI8SqhRim:'flk-dropdown-list',cEYgp8m6z:'flk-dropdown-list',cOIRAIMpm:'flk-dropdown-list',cGHUvHjDi:'flk-dropdown-list',c3kXYObfw:'flk-dropdown-list',cJ0vNw3W5:'flk-dropdown-list',cB34VjqzL:'flk-time-remaining',cQc3KF_AJ:'flk-dropdown-list',cmFTi4Uj3:'flk-dropdown-list',cJ4I0U7NX:'flk-dropdown-list',cwtV31Iu1:'flk-time-remaining',cKt6q22CE:'task-modal',cacWdk98H:'flk-alert',cGxpO9TCY:'flk-alert'},
                render: function (component) {
                    let eleEn6D = eo('div',null,null,`class`,`row m-t-2 tasks-board`);
let cnd29wW = component.isLoading;
this.setState('sttpRgY', cnd29wW);
let cndv8tb = !(cnd29wW);
this.setState('sts6QUY', cndv8tb);
if (cnd29wW) { 
let cmpEMmN = this._lc('cuT2jxpoZ', {parent:component,state:'sttpRgY'});
}else { 
let elgJJ6c = eo('div',null,null,`class`,`style-switcher text-right m-y-2 col-12`);
let elCrQ9f = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.switchTo('board')}]},`title`,``,`class`,`btn btn-sm btn-cyan`);
let elW1BaG = eo('i',null,null,`class`,`${fas('th-large') + ' icon fa-2x'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elCrQ9f;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Board Mode')}`});
        ;
                    }, 20);                
                let elDQngw = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.switchTo('list')}]},`title`,``,`class`,`btn btn-sm btn-purple`);
let eltowSu = eo('i',null,null,`class`,`${fas('th-list') + ' icon fa-2x'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elDQngw;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('List Mode')}`});
        ;
                    }, 20);                
                ec('div');
let cndnA1j = ! component.isViewingArchivedTasks;
this.setState('stpwFaV', cndnA1j);
let cnd1nBs = !(cndnA1j);
this.setState('stpNfQ7', cnd1nBs);
if (cndnA1j) { 
let elE7YWA = eo('div','ocHf',null,`class`,`row w-100`);
let cndSZwh = component.displayMode == 'list';
this.setState('stot26x', cndSZwh);
let cndpQIn = component.displayMode == 'list';
this.setState('st1Whti', cndpQIn);
if (cndSZwh) { 
let elWPOUq = eo('div','Aitf',null,`class`,`simple-card m-b-2 col-12 tasks-list-filter`);
let el12DnB = eo('div','aM4f',null,`class`,`row`);
let cndlo2t = ! Is.empty(component.filterOptions.participants);
this.setState('stZKeH5', cndlo2t);
if (cndlo2t) { 
let elxQB6M = eo('div','n0vf',null,`class`,`col-sm-3 filter-container`);
let elitMBw = eo('div','s19f',null,`class`,`filter-list`);
let cmpg5m8 = this._lc('cJpRShQZ3', {parent:component,props:{items:component.filterOptions.participants,value:component.filteredData.participants,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('participants', e);}},boolAttrs:{multiple:true},attrs:{heading:'Participants'},state:'stZKeH5'});
ec('div');
ec('div');
}let cndM4P_ = ! Is.empty(component.filterOptions.supervisors);
this.setState('stbwewT', cndM4P_);
if (cndM4P_) { 
let elaUeZt = eo('div','U3lf',null,`class`,`col-sm-3 filter-container`);
let elfCnDO = eo('div','WEQf',null,`class`,`filter-list`);
let cmpRDYg = this._lc('cI8SqhRim', {parent:component,props:{items:component.filterOptions.supervisors,value:component.filteredData.supervisors,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('supervisors', e);}},boolAttrs:{multiple:true},attrs:{heading:'Supervisors'},state:'stbwewT'});
ec('div');
ec('div');
}let cnd69u6 = ! component.isInProjectPage && ! Is.empty(component.filterOptions.projects);
this.setState('stMkQbw', cnd69u6);
if (cnd69u6) { 
let elMBMqX = eo('div','GS0f',null,`class`,`col-sm-3 filter-container`);
let el3TiMh = eo('div','Kzgf',null,`class`,`filter-list`);
let cmpPlZT = this._lc('cEYgp8m6z', {parent:component,props:{items:component.filterOptions.projects,value:component.filteredData.projects,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('projects', e);}},boolAttrs:{multiple:true},attrs:{heading:'Projects'},state:'stMkQbw'});
ec('div');
ec('div');
}let cndLe5S = ! Is.empty(component.filterOptions.statuses);
this.setState('stHVddh', cndLe5S);
if (cndLe5S) { 
let elVv7pB = eo('div','m9Uf',null,`class`,`col-sm-3 filter-container`);
let elrkCBn = eo('div','aSzf',null,`class`,`filter-list`);
let cmpT0l7 = this._lc('cOIRAIMpm', {parent:component,props:{items:component.filterOptions.statuses,value:component.filteredData.statuses,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('statuses', e);}},boolAttrs:{multiple:true},attrs:{heading:'Task Status'},state:'stHVddh'});
ec('div');
ec('div');
}let cndve_O = ! Is.empty(component.filterOptions.modules);
this.setState('stjzLXh', cndve_O);
if (cndve_O) { 
let elhuJJR = eo('div','OXZf',null,`class`,`col-sm-3 filter-container`);
let elzuVRy = eo('div','FN1f',null,`class`,`filter-list`);
let cmphP9t = this._lc('cGHUvHjDi', {parent:component,props:{items:component.filterOptions.modules,value:component.filteredData.modules,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('modules', e);}},boolAttrs:{multiple:true},attrs:{heading:'Project Module'},state:'stjzLXh'});
ec('div');
ec('div');
}let cnd7WGc = ! Is.empty(component.filterOptions.userStories);
this.setState('stZJe5l', cnd7WGc);
if (cnd7WGc) { 
let elbgpWb = eo('div','wBuf',null,`class`,`col-sm-3 filter-container`);
let elMih8g = eo('div','YRcf',null,`class`,`filter-list`);
let cmpK8rc = this._lc('c3kXYObfw', {parent:component,props:{items:component.filterOptions.userStories,value:component.filteredData.userStories,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('userStories', e);}},boolAttrs:{multiple:true},attrs:{heading:'User Stories'},state:'stZJe5l'});
ec('div');
ec('div');
}let cnd5PmA = ! Is.empty(component.filterOptions.priorities);
this.setState('stAcKsF', cnd5PmA);
if (cnd5PmA) { 
let el0pQIp = eo('div','3Sif',null,`class`,`col-sm-3 filter-container`);
let elMpuYZ = eo('div','6rlf',null,`class`,`filter-list`);
let cmpyrF6 = this._lc('cJ0vNw3W5', {parent:component,props:{items:component.filterOptions.priorities,value:component.filteredData.priorities,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('priorities', e);}},boolAttrs:{multiple:true},attrs:{heading:'Priority'},state:'stAcKsF'});
ec('div');
ec('div');
}ec('div');
ec('div');
}let cndfSl_ = component.displayMode == 'board';
this.setState('sthjnqS', cndfSl_);
let cndgSJN = cndpQIn;
this.setState('stuz98O', cndgSJN);
if (cndfSl_) { 
for (let i in component.statuses) {
let status = component.statuses[i]; 
 let iiTUim = 'PZEhF9q' + i;
let elqKBvt = eo('div','4kn8cAMhLnwG' + i+iiTUim,null,`class`,`col-12 col-sm-6 col-md-4 col-lg-3`);
let elJSpd6 = eo('div','gOVff'+iiTUim,null,`class`,`tasks-group ${ status }`);
let elnXFbZ = eo('h3','Ee5ff'+iiTUim,null,`class`,`m-b-2`);
let el6zsTv = eo('span','I_Tff'+iiTUim);
text(trans(status));
ec('span');
let elB5NO8 = eo('span','5ydff'+iiTUim,null,`class`,`ml-2`);
text(`(${ component.tasksBoardView[status] ? component.tasksBoardView[status].toArray().length : 0 })`);
ec('span');
let elQBeEq = eo('span','mGdff'+iiTUim,null,`title`,``,`class`,`material-icons float-right`);
text(component.statusIcon(status));
ec('span');

                    setTimeout(function () {
                        let $el = elQBeEq;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.statusIconTitle(status)}`});
        ;
                    }, 20);                
                ec('h3');
let el_j5NL = eo('div','HR2ff'+iiTUim,null, eventListeners, {onready:[function(e) {var $el = this;component.draggable($el)}]},`class`,`tasks-list`,`data-status`,`${ status }`);
let cndhmaX = component.tasksBoardView[status];
this.setState('stCKO97', cndhmaX);
if (cndhmaX) { 
for (let index in component.tasksBoardView[status].toArray()) {
let task = component.tasksBoardView[status].toArray()[index]; 
 let iiUa5a = task.id + status+ index;
let elC7T4w = eo('div','pJ1_kLwmjohk' + index+iiTUim+iiUa5a,null,`class`,`task simple-card m-b-1`,`data-id`,`${ task.id }`);
elC7T4w.cls = {item: task.canUserControl, undraggable: ! task.canUserControl};

            for (let className in elC7T4w.cls) {
                elC7T4w.classList.toggle(className, elC7T4w.cls[className]);
            }  
            let cndoZWm = task.isParticipant || task.isSupervisor || task.project && task.project.is.higherAuthority;
this.setState('stRjOoU', cndoZWm);
let cndPOR_ = !(cndoZWm);
this.setState('stUE3Kt', cndPOR_);
if (cndoZWm) { 
let eluhNld = eo('a','1u4ff'+iiTUim+iiUa5a,null,`href`,`${URLS.task(task)}`,`class`,`bold`);
text('#' + task.id + ' ' + task.title);
ec('a');
}else { 
let elz1Vyb = eo('div','bY1ff'+iiTUim+iiUa5a,null,`class`,`bold`);
text(task.title);
ec('div');
}let cndvxk5 = ['completed', 'autoFailed', 'failed'].includes(status) && (component.user.id == 1 || task.isSupervisor || component.project && component.project.isProjectManager) ;
this.setState('stT8QqQ', cndvxk5);
if (cndvxk5) { 
let eldetNh = eo('button','QKZff'+iiTUim+iiUa5a,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmArchiving(task)}]},`title`,``,`class`,`float-right pink-text`);
let elDHfsr = eo('i','8BLff'+iiTUim+iiUa5a,null,`class`,`${fas('archive') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eldetNh;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Archive Task')}`});
        ;
                    }, 20);                
                }let cndzJ_O = component.user.id  == 1 || task.isSupervisor || task.isParticipant || (component.project && component.project.isProjectManager);
this.setState('stTPTmB', cndzJ_O);
if (cndzJ_O) { 
let elKT_FZ = eo('button','PbCff'+iiTUim+iiUa5a,null, eventListeners, {onclick:[function(e) {var $el = this;task.dropdown = ! task.dropdown; component.detectChanges();}]},`type`,`button`,`class`,` float-right`);
let elGkeOI = eo('i','DISff'+iiTUim+iiUa5a,null,`title`,``,`class`,`${fas('cog') + ' fa-spin icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elGkeOI;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Actions')}`});
        ;
                    }, 20);                
                ec('button');
}let elJXJb7 = eo('div','Dt7ff'+iiTUim+iiUa5a,null,`title`,``,`class`,`participant bold`);
elJXJb7.cls = {'green-text': task.participant.id == component.user.id};

            for (let className in elJXJb7.cls) {
                elJXJb7.classList.toggle(className, elJXJb7.cls[className]);
            }  
            text(task.participant.name);
ec('div');

                    setTimeout(function () {
                        let $el = elJXJb7;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Participant')}`});
        ;
                    }, 20);                
                let cndsEgL = task.dropdown;
this.setState('stqO97D', cndsEgL);
if (cndsEgL) { 
let el7p3As = eo('div','Fooff'+iiTUim+iiUa5a,null,`class`,`action-btns m-t-1`);
let eladA9J = eo('button','D_3ff'+iiTUim+iiUa5a,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-cyan`);
let elp6o61 = eo('i','i_fff'+iiTUim+iiUa5a,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eladA9J;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Tasks-board')}`});
        ;
                    }, 20);                
                let elzgND2 = eo('button','0POff'+iiTUim+iiUa5a,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-danger`);
let elmutdo = eo('i','nacff'+iiTUim+iiUa5a,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elzgND2;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Tasks-board')}`});
        ;
                    }, 20);                
                ec('div');
}let elqIpgr = eo('section','bT2ff'+iiTUim+iiUa5a,null,`class`,`footer`);
let elKntyc = eo('i','JPcff'+iiTUim+iiUa5a,null,`title`,``,`class`,`${fas('user-secret') + ' icon'}`);
elKntyc.cls = {'green-text': task.isSupervisor};

            for (let className in elKntyc.cls) {
                elKntyc.classList.toggle(className, elKntyc.cls[className]);
            }  
            ec('i');

                    setTimeout(function () {
                        let $el = elKntyc;
                        
            true && tippyTooltip($el, {arrow:true,content:`${'<strong>Supervisors</strong><br>' + task.supervisors.map(supervisor => supervisor.name).join('<br/>')}`});
        ;
                    }, 20);                
                let cnd2OOh = status == 'completed';
this.setState('stmZjad', cnd2OOh);
if (cnd2OOh) { 
let elHiVf6 = eo('i','Sh7ff'+iiTUim+iiUa5a,null,`class`,`${fas('check-double') + ' green-text ml-2 icon'}`);
ec('i');
}let cndo9Je = task.endsAt && ! ['completed'].includes(status);
this.setState('stDWnBX', cndo9Je);
if (cndo9Je) { 
let cmpmE5y = this._lc('cB34VjqzL', {parent:component,props:{tooltip:true,title:task.endsAtTimestamp - task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time',endsAt:task.endsAtTimestamp,startsAt:component.now},attrs:{title:`${task.endsAtTimestamp - task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time'}`,class:'ml-4 bold'},state:'stDWnBX',insideLoop:true,index:"" +iiTUim+iiUa5a});
}let cndyoKW = ! Is.empty(task.comments);
this.setState('stCsGlS', cndyoKW);
if (cndyoKW) { 
let el4rE1S = eo('span','ozBff'+iiTUim+iiUa5a,null,`title`,``,`class`,`ml-3`);
let elncJZc = eo('i','b2Nff'+iiTUim+iiUa5a,null,`class`,`${fas('comments') + ' gray-text mr-2 icon'}`);
ec('i');
let elexJX4 = eo('strong','dmZff'+iiTUim+iiUa5a);
text(task.comments.length);
ec('strong');
ec('span');

                    setTimeout(function () {
                        let $el = el4rE1S;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Task Comments')}`});
        ;
                    }, 20);                
                }let cnd5UJK = (component.project || task.project) && ! component.isInProjectPage;
this.setState('stTKRtk', cnd5UJK);
if (cnd5UJK) { 
let elpWtEF = eo('a','r8mff'+iiTUim+iiUa5a,null,`href`,`${URLS.project(component.project || task.project)}`,`title`,``,`class`,`ml-3 teal-text`);
let cndjFJf = task.project.image;
this.setState('stixnV1', cndjFJf);
let cndYVqO = !(cndjFJf);
this.setState('stv2AMr', cndYVqO);
if (cndjFJf) { 
let elIRZVe = ev('img','lNtff'+iiTUim+iiUa5a,null,`src`,`${task.project.image}`,`class`,`small circle`);
}else { 
let elYACjc = eo('i','LXIff'+iiTUim+iiUa5a,null,`class`,`${fas('suitcase') + ' icon'}`);
ec('i');
}ec('a');

                    setTimeout(function () {
                        let $el = elpWtEF;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.project ? component.project.name : task.project.name}`});
        ;
                    }, 20);                
                }let cnd_H4j = ! Is.empty(task.module);
this.setState('stUChiN', cnd_H4j);
if (cnd_H4j) { 
let el_cSht = eo('span','KNtff'+iiTUim+iiUa5a,null,`title`,``,`class`,`ml-3`);
let el1ywht = eo('i','0WUff'+iiTUim+iiUa5a,null,`class`,`${fas('cog') + ' lime-text mr-2 icon'}`);
ec('i');
let elhrwKo = eo('span','iUhff'+iiTUim+iiUa5a);
text(task.module.name);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = el_cSht;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Module')}`});
        ;
                    }, 20);                
                }ec('section');
ec('div');
}
}ec('div');

                    setTimeout(function () {
                        let $el = el_j5NL;
                        component.draggable($el);
                    }, 20);                
                ec('div');
let cndW9fZ = (component.project || component.user.id == 1) && Object.get(component.project, 'isHigherAuthority', '')  && status != 'autoFailed';
this.setState('st5wb0L', cndW9fZ);
if (cndW9fZ) { 
let el28ItM = eo('section','PfIff'+iiTUim,null,`class`,`footer text-right m-b-2`);
let cndBp8l = ! component.openQuickForm[status];
this.setState('stJXh1g', cndBp8l);
if (cndBp8l) { 
let elVGRUb = eo('button','xh8ff'+iiTUim,null, eventListeners, {onclick:[function(e) {var $el = this;component.openQuickForm[status] = true}]},`title`,``,`type`,`button`,`class`,`btn btn-info btn-circle`);
let elL7VN5 = eo('i','dM6ff'+iiTUim,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elVGRUb;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Quick add')}`});
        ;
                    }, 20);                
                }let cndyyzC = component.openQuickForm[status];
this.setState('st7c61l', cndyyzC);
if (cndyyzC) { 
let elvVPmJ = eo('form','forff'+iiTUim,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.quickAdd($el)}]});

                if (! elvVPmJ.formHandler) {
                    window.cfrmdlr = elvVPmJ.formHandler = new FormHandler(elvVPmJ, component);
                } else {
                    window.cfrmdlr = elvVPmJ.formHandler;
                }
            let elW250t = ev('input','WiKff'+iiTUim,null, eventListeners, {oninput:[function(e) {status = this.value;}]},`value`,`${fval(status)}`,`name`,`${(`status`).toInputName()}`,`type`,`hidden`);
elW250t.value = fval(status);
let cndiHjs = component.project;
this.setState('st4psdF', cndiHjs);
let cndJdUp = !(cndiHjs);
this.setState('stnshj3', cndJdUp);
if (cndiHjs) { 
let elOw_1R = ev('input','LCIff'+iiTUim,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elOw_1R.value = fval(component.project.id);
}let elc9kCM = ev('input','ZBIff'+iiTUim,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elvVPmJ.formHandler.addError(`title`, 'required', trans('validation.required'));}return elvVPmJ.formHandler.removeError(`title`);}]},`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Task Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
let cndkojC = elvVPmJ.formHandler.getError(`title`);
this.setState('stPAFss', cndkojC);
let cndIKcY = !(cndkojC);
this.setState('stalrRE', cndIKcY);
if (cndkojC) { 
let elwL1Fu = eo('div','fz9ff'+iiTUim,null,`class`,`alert alert-danger`);
text(elvVPmJ.formHandler.getError(`title`));
ec('div');
}let elVUMhp = ev('input','UNjff'+iiTUim,null, eventListeners, {oninput:[function(e) {component.user.id = this.value;}]},`value`,`${fval(component.user.id)}`,`name`,`${(`supervisors[]`).toInputName()}`,`type`,`hidden`);
elVUMhp.value = fval(component.user.id);
let cndY8G9 = component.project;
this.setState('stmYkBi', cndY8G9);
let cndducC = !(cndY8G9);
this.setState('st5dd6q', cndducC);
if (cndY8G9) { 
let cmpxs6H = this._lc('cQc3KF_AJ', {parent:component,props:{value:component.participantId,required:true,items:component.participants},attrs:{name:`${(`participant`).toInputName()}`,heading:'Assignee'},state:'stmYkBi',insideLoop:true,index:"" +iiTUim});
}else { 
let cmpRdZx = this._lc('cmFTi4Uj3', {parent:component,props:{remoteSearch:true,value:component.participantId,required:true,lazyLoading:true,service:component.usersService},attrs:{name:`${(`participant`).toInputName()}`,query:'name',heading:'Assignee',required:''},state:'st5dd6q',insideLoop:true,index:"" +iiTUim});
}let elITE4K = eo('div','FgVff'+iiTUim,null,`class`,`text-right m-t-1`);
let eloPZq9 = eo('button','7HYff'+iiTUim,null, eventListeners, {onclick:[function(e) {var $el = this;component.openQuickForm[status] = false;}]}, boolAttrs, {disabled:component.isSubmitting},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-warning`);
let elJ7F0B = eo('i','HI1ff'+iiTUim,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eloPZq9;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('cancel')}`});
        ;
                    }, 20);                
                let el1AaXj = eo('button','YYiff'+iiTUim,null, boolAttrs, {disabled:component.isSubmitting},`title`,``,`class`,`btn btn-circle btn-success`);
let el8wmtU = eo('i','o5Mff'+iiTUim,null,`class`,`${fas('check') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el1AaXj;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Create')}`});
        ;
                    }, 20);                
                ec('div');
ec('form');
}ec('section');
}ec('div');
}
let cndeKhE = ! Is.empty(component.archivedTasks);
this.setState('stykWGj', cndeKhE);
if (cndeKhE) { 
let elhkQQo = eo('button','SFif',null, eventListeners, {onclick:[function(e) {var $el = this;component.isViewingArchivedTasks = true}]},`class`,`col-12 col-sm-4 col-md-3 bold pink-text view-archived-btn`);
text(`View Archived Tasks (${ component.archivedTasks.length.format() })`);
ec('button');
}}else if (cndgSJN) { 
let eliEs4B = eo('div',null,null,`class`,`tasks-list-view`);
let elTTgaY = eo('h3',null,null,`class`,`task-heading simple-card`);
text(`Tasks List (${component.tasksList.length})`);
ec('h3');
let el_9mSi = eo('table',null,null,`class`,`table buttoned simple-card`);
let elwsVP0 = eo('thead');
let elV9tF7 = eo('tr');
let elXMiLc = eo('th',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('id')}]},`title`,``);
text(`#`);
ec('th');

                    setTimeout(function () {
                        let $el = elXMiLc;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort By ID')}`});
        ;
                    }, 20);                
                let elhKbFY = eo('th',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('title')}]},`title`,``);
text(`Task`);
ec('th');

                    setTimeout(function () {
                        let $el = elhKbFY;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort By Title')}`});
        ;
                    }, 20);                
                let elula5p = eo('th');
let el62HJM = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('progress.completed')}]},`title`,``);
text(`Progress`);
ec('button');

                    setTimeout(function () {
                        let $el = el62HJM;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort By Progress')}`});
        ;
                    }, 20);                
                ec('th');
let cndQYLl = ! component.isInProjectPage;
this.setState('st4_6Tp', cndQYLl);
if (cndQYLl) { 
let elw_JqJ = eo('th','psHf');
text(`Project`);
ec('th');
}let elYC5TE = eo('th',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('status')}]},`title`,``);
text(`Status`);
ec('th');

                    setTimeout(function () {
                        let $el = elYC5TE;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort by status')}`});
        ;
                    }, 20);                
                let elAmfmQ = eo('th',null,null,`title`,``);
text(`R Time`);
ec('th');

                    setTimeout(function () {
                        let $el = elAmfmQ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remaining Time')}`});
        ;
                    }, 20);                
                let elZVqyw = eo('th',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('participant.name')}]},`title`,``);
text(`Participant`);
ec('th');

                    setTimeout(function () {
                        let $el = elZVqyw;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort By Participant')}`});
        ;
                    }, 20);                
                let elluUM5 = eo('th');
text(`Supervisors`);
ec('th');
let elPWqa2 = eo('th',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('module.name')}]},`title`,``,`class`,`text-center`);
text(`Module`);
ec('th');

                    setTimeout(function () {
                        let $el = elPWqa2;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort by Module')}`});
        ;
                    }, 20);                
                let elKTwrk = eo('th',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('priority')}]},`title`,``,`class`,`text-center`);
text(`Priority`);
ec('th');

                    setTimeout(function () {
                        let $el = elKTwrk;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort by Priority')}`});
        ;
                    }, 20);                
                let elL09yX = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elWKpDB = eo('tbody');
for (let index in component.tasksList) {
let task = component.tasksList[index]; 
 let iis9KH = task.id+ index;
let elirmya = eo('tr','0DKwGTjlQTi9' + index+iis9KH);
elirmya.cls = {'alert-danger': task.priority == 'high', 'alert-warning': task.priority == 'medium', 'alert-info': task.priority == 'low'};

            for (let className in elirmya.cls) {
                elirmya.classList.toggle(className, elirmya.cls[className]);
            }  
            let elfa2MZ = eo('td','yT8ff'+iis9KH);
text(task.id);
ec('td');
let elWgoAC = eo('td','Oq2ff'+iis9KH);
let elp2WCS = eo('a','0Vdff'+iis9KH,null,`href`,`${URLS.task(task)}`,`title`,``,`class`,`title`);
text(task.title.readMoreChars(30));
ec('a');

                    setTimeout(function () {
                        let $el = elp2WCS;
                        
            true && tippyTooltip($el, {arrow:true,content:`${task.title}`});
        ;
                    }, 20);                
                let cnd7UGW = ! Is.empty(task.comments);
this.setState('stLkdGz', cnd7UGW);
if (cnd7UGW) { 
let elwM6An = eo('span','kTtff'+iis9KH,null,`title`,``,`class`,`ml-3`);
let elnuDw_ = eo('i','UzDff'+iis9KH,null,`class`,`${fas('comments') + ' gray-text mr-2 icon'}`);
ec('i');
let el0j5bZ = eo('strong','IlCff'+iis9KH);
text(task.comments.length);
ec('strong');
ec('span');

                    setTimeout(function () {
                        let $el = elwM6An;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Task Comments')}`});
        ;
                    }, 20);                
                }ec('td');
let elRHnXa = eo('td','Ckvff'+iis9KH);
let cndQP9u = task.progress;
this.setState('stygIdJ', cndQP9u);
if (cndQP9u) { 
let eldJgVn = eo('div','oDIff'+iis9KH,null,`title`,``,`class`,`task-progress`);
let eld0JWG = eo('div','TkCff'+iis9KH,null, 'style', {width:`${task.progress.percentage + '%'}`},`class`,`completed`);
ec('div');
let el4oQ_4 = eo('div','6vrff'+iis9KH,null,`class`,`value`);
text(task.progress.completed + '/' + task.progress.total);
ec('div');
ec('div');

                    setTimeout(function () {
                        let $el = eldJgVn;
                        
            true && tippyTooltip($el, {arrow:true,content:`${Math.floor(task.progress.percentage) + '% Completed'}`});
        ;
                    }, 20);                
                }ec('td');
let cndvIJd = ! component.isInProjectPage;
this.setState('st1xhYc', cndvIJd);
if (cndvIJd) { 
let elrteg9 = eo('td','pZDff'+iis9KH);
let cndVrPW = component.project || task.project;
this.setState('st8pbUX', cndVrPW);
let cndBuCf = !(cndVrPW);
this.setState('st1k_Hr', cndBuCf);
if (cndVrPW) { 
let elEbRz9 = eo('a','ZLjff'+iis9KH,null,`href`,`${URLS.project(component.project || task.project)}`,`title`,``,`class`,`ml-3`);
let cndjTXN = task.project.image;
this.setState('stIsPDT', cndjTXN);
let cndpBvV = !(cndjTXN);
this.setState('st9SWlB', cndpBvV);
if (cndjTXN) { 
let elctGRF = ev('img','7K_ff'+iis9KH,null,`src`,`${task.project.image}`,`class`,`small circle`);
}else { 
let elVAtiM = eo('i','_ukff'+iis9KH,null,`class`,`${fas('suitcase') + ' icon'}`);
ec('i');
}ec('a');

                    setTimeout(function () {
                        let $el = elEbRz9;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.project ? component.project.name : task.project.name}`});
        ;
                    }, 20);                
                }else { 
let elEdq1U = eo('strong','qzjff'+iis9KH);
text(`N/a`);
ec('strong');
}ec('td');
}let el81dOu = eo('td','B3iff'+iis9KH,null,`class`,`status-column`);
let elDuWXD = eo('span','5CYff'+iis9KH,null, eventListeners, {onclick:[function(e) {var $el = this;task.canUserControl ? task.openStatusChanger = ! task.openStatusChanger : null;}]});
let elvEIBW = eo('span','2TLff'+iis9KH,null,`class`,`badge`);
elvEIBW.cls = taskStatus(task);

            for (let className in elvEIBW.cls) {
                elvEIBW.classList.toggle(className, elvEIBW.cls[className]);
            }  
            text(task.status);
ec('span');
let cndqdwd = task.canUserControl;
this.setState('st8dK5K', cndqdwd);
if (cndqdwd) { 
let elcucNG = eo('i','9Vbff'+iis9KH,null,`title`,``,`class`,`${fas('caret-down') + ' icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elcucNG;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Change Task Status')}`});
        ;
                    }, 20);                
                }ec('span');
let cndH9R3 = task.openStatusChanger;
this.setState('stXrVtK', cndH9R3);
if (cndH9R3) { 
let ellmruP = eo('div','eOkff'+iis9KH,null,`class`,`status-changer`);
let cmpGx0o = this._lc('cJ4I0U7NX', {parent:component,props:{items:getAllowedTaskStatuses(task),searchable:false,except:task.status},events:{onselect:function(e) {let $el = this; component.updateTaskStatus(task, e.value)}},state:'stXrVtK',insideLoop:true,index:"" +iis9KH});
ec('div');
}ec('td');
let elYpdiY = eo('td','6Ikff'+iis9KH);
let cndV6K9 = task.status == 'completed';
this.setState('stgUUhD', cndV6K9);
let cndqnl3 = task.endsAtTimestamp && ! ['completed', 'archived'].includes(task.status);
this.setState('st6gKyq', cndqnl3);
if (cndV6K9) { 
let el_05DD = eo('div','bpyff'+iis9KH);
let elRLsGK = eo('i','ob7ff'+iis9KH,null,`title`,``,`class`,`${fas('check-double') + ' green-text icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elRLsGK;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Completed')}`});
        ;
                    }, 20);                
                ec('div');
}else if (cndqnl3) { 
let els_YS4 = eo('span','HgFff'+iis9KH,null,`title`,``);
let eltT8s4 = eo('i','kBIff'+iis9KH,null,`class`,`${fas('clock') + ' mr-2 icon'}`);
ec('i');
let cmpZilO = this._lc('cwtV31Iu1', {parent:component,props:{startsAt:task.startsAtTimestamp,endsAt:task.endsAtTimestamp},attrs:{class:'bold'},state:'st6gKyq',insideLoop:true,index:"" +iis9KH});
ec('span');

                    setTimeout(function () {
                        let $el = els_YS4;
                        
            true && tippyTooltip($el, {arrow:true,content:`${task.endsAtTimestamp - task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time'}`});
        ;
                    }, 20);                
                }ec('td');
let elQd_Nw = eo('td','aFAff'+iis9KH,null,`class`,`text-center`);
let eloRfwO = ev('img','PZfff'+iis9KH,null,`src`,`${task.participant.image}`,`title`,`${task.participant.name}`,`class`,`small mr-2 circle`,`alt`,`${task.participant.name}`);

                    setTimeout(function () {
                        let $el = eloRfwO;
                        
            true && tippyTooltip($el, {arrow:true,content:`${task.participant.name}`});
        ;
                    }, 20);                
                ec('td');
let elgFOlQ = eo('td','Azsff'+iis9KH,null,`class`,`text-center`);
for (let i in task.supervisors) {
let supervisor = task.supervisors[i]; 
 let iirt9V = 'b25atQT' + i;
let elgGdk5 = eo('span','iEHmX8dNCf7e' + i+iis9KH+iirt9V,null,`class`,`mx-1`);
let elDeF_p = ev('img','pOCff'+iis9KH+iirt9V,null,`src`,`${supervisor.image}`,`title`,`${supervisor.name}`,`class`,`small mr-2 circle`,`alt`,`${supervisor.name}`);

                    setTimeout(function () {
                        let $el = elDeF_p;
                        
            true && tippyTooltip($el, {arrow:true,content:`${supervisor.name}`});
        ;
                    }, 20);                
                ec('span');
}
ec('td');
let el7M3kI = eo('th','JGBff'+iis9KH,null,`class`,`text-center v-middle gray-text`);
let cndzvrM = Object.get(task.module, 'parent.name', '');
this.setState('stjCe3Z', cndzvrM);
if (cndzvrM) { 
let elAgDT2 = eo('span','0q3ff'+iis9KH);
text(task.module.parent.name);
ec('span');
let elievcT = eo('i','2Gqff'+iis9KH,null,`class`,`${fas('angle-double-right') + ' mx-2 icon'}`);
ec('i');
}let el5nEa2 = eo('span','B4fff'+iis9KH);
text(Object.get(task.module, 'name', ''));
ec('span');
ec('th');
let elxT79e = eo('th','kzSff'+iis9KH,null,`class`,`text-center v-middle gray-text`);
let cndA5fb = task.priority;
this.setState('stnpoYt', cndA5fb);
if (cndA5fb) { 
let elh_ofQ = eo('span','JjVff'+iis9KH);
text(task.priority);
ec('span');
}ec('th');
let elSdn2E = eo('td','VDrff'+iis9KH);
let cndp9Dh = true;
this.setState('st_q64P', cndp9Dh);
if (cndp9Dh) { 
let el839z9 = eo('button','Bvkff'+iis9KH,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-cyan`);
let eluFk_w = eo('i','unkff'+iis9KH,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el839z9;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Tasks-board')}`});
        ;
                    }, 20);                
                let elvByv7 = eo('button','bHkff'+iis9KH,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elqq8rH = eo('i','bhnff'+iis9KH,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elvByv7;
                        
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
let elW0XY5 = eo('div',null,null,`class`,`w-100`);
let elvG9Uj = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isViewingArchivedTasks = false}]},`class`,`m-b-2 bold btn btn-success float-right`);
text(`Back To
        Board`);
ec('button');
let elI48m2 = eo('table',null,null,`class`,`table table-bordered`);
let elMWL0c = eo('thead');
let elbQ637 = eo('tr');
let elgH7zD = eo('th');
text(`Task`);
ec('th');
let elck5RL = eo('th');
text(`Participant`);
ec('th');
ec('tr');
ec('thead');
let elaEhV4 = eo('tbody');
for (let i in component.archivedTasks) {
let task = component.archivedTasks[i]; 
 let iieoly = 'nxyGuyr' + i;
let elEVuRi = eo('tr','AdDHuVIsglrA' + i+iieoly);
let elLIGI2 = eo('td','jUVff'+iieoly);
let elxUglZ = eo('a','j2yff'+iieoly,null,`href`,`${URLS.task(task)}`);
text(task.title);
ec('a');
ec('td');
let elNsK2R = eo('td','GZ2ff'+iieoly);
let elwkLjt = ev('img','LSiff'+iieoly,null,`src`,`${task.participant.image}`,`class`,`circle small`,`title`,`${task.participant.name}`,`alt`,`${task.participant.name}`);
let elfT3ab = eo('span','mN0ff'+iieoly,null,`class`,`ml-2 bold`);
text(task.participant.name);
ec('span');
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
}}ec('div');
let cndHPho = component.modalIsOpened;
this.setState('stUJ3s4', cndHPho);
if (cndHPho) { 
component.modal = this._lc('cKt6q22CE', {parent:component,props:{displayStatusList:component.record.id,participants:component.participants,supervisors:component.supervisors,project:component.project,task:component.record},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null},onsave:function(e) {let $el = this; component.adjustTaskResponse(e)}},state:'stUJ3s4'});
}let cndyapN = component.confirmDelete;
this.setState('stEodV3', cndyapN);
if (cndyapN) { 
let cmpLcY0 = this._lc('cacWdk98H', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stEodV3'});
}let cndkwBf = component.confirmingArchiving;
this.setState('stz8hEz', cndkwBf);
if (cndkwBf) { 
let cmpaZ5F = this._lc('cGxpO9TCY', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmingArchiving = null},onconfirm:function(e) {let $el = this; component.archive()}},state:'stz8hEz'});
}
                    this.isReadyToGo();
                }
        });