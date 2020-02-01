_Component({
                selector: 'tasks-board',
                c: 'TasksBoard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','switchTo','isViewingArchivedTasks','displayMode','modalIsOpened','record','participants','supervisors','project','adjustTaskResponse','confirmDelete','remove','confirmingArchiving','archive','filterOptions','filteredData','filterBy','isInProjectPage','statuses','tasksBoardView','statusIconTitle','statusIcon','draggable','user','confirmArchiving','detectChanges','openModal','confirmRemoving','now','openQuickForm','quickAdd','participantId','usersService','isSubmitting','archivedTasks','tasksList','updateTaskStatus'],
                children: {cdQ82yBBD:'flk-spinner',cz9uloC6S:'flk-dropdown-list',cVSB1q2bg:'flk-dropdown-list',cCWuZz1sV:'flk-dropdown-list',cPveORugS:'flk-dropdown-list',c0xGEroLq:'flk-dropdown-list',cdYstieBF:'flk-dropdown-list',ciAWdPqSH:'flk-time-remaining',cINRHL5BC:'flk-dropdown-list',cOryOZWKP:'flk-dropdown-list',cV7WTJ97w:'flk-dropdown-list',c_cZAOLOt:'flk-time-remaining',cmOPYMPgh:'task-modal',ctmaCzIiX:'flk-alert',cPnZBJD7G:'flk-alert'},
                render: function (component) {
                    let elucNia = eo('div',null,null,`class`,`row m-t-2 tasks-board`);
let cndDUmY = component.isLoading;
this.setState('st9qQeL', cndDUmY);
let cndDSOE = !(cndDUmY);
this.setState('stlrz73', cndDSOE);
if (cndDUmY) { 
let cmpdQR8 = this._lc('cdQ82yBBD', {parent:component,state:'st9qQeL'});
}else { 
let elrD4xM = eo('div',null,null,`class`,`style-switcher text-right m-y-2 col-12`);
let elpSs1P = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.switchTo('board')}]},`title`,``,`class`,`btn btn-sm btn-cyan`);
let elzniBD = eo('i',null,null,`class`,`${fas('th-large') + ' icon fa-2x'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elpSs1P;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Board Mode')}`});
        ;
                    }, 20);                
                let elEBxbt = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.switchTo('list')}]},`title`,``,`class`,`btn btn-sm btn-purple`);
let elVoOFD = eo('i',null,null,`class`,`${fas('th-list') + ' icon fa-2x'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elEBxbt;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('List Mode')}`});
        ;
                    }, 20);                
                ec('div');
let cndyfxF = ! component.isViewingArchivedTasks;
this.setState('stY5JZg', cndyfxF);
let cnd7Xsc = !(cndyfxF);
this.setState('stzEisY', cnd7Xsc);
if (cndyfxF) { 
let elUbPUh = eo('div','1pHf',null,`class`,`row w-100`);
let cndPLaW = component.displayMode == 'list';
this.setState('st042c1', cndPLaW);
let cndn5Cr = component.displayMode == 'list';
this.setState('st_1PT2', cndn5Cr);
if (cndPLaW) { 
let elefGnH = eo('div','pPqf',null,`class`,`simple-card m-b-2 col-12 tasks-list-filter`);
let el5azNx = eo('div','evff',null,`class`,`row`);
let cndS6vY = ! Is.empty(component.filterOptions.participants);
this.setState('stAn3CT', cndS6vY);
if (cndS6vY) { 
let elOv3p8 = eo('div','yFNf',null,`class`,`col-sm-3 filter-container`);
let elNBISn = eo('div','DcMf',null,`class`,`filter-list`);
let cmpiAyF = this._lc('cz9uloC6S', {parent:component,props:{items:component.filterOptions.participants,value:component.filteredData.participants,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('participants', e);}},boolAttrs:{multiple:true},attrs:{heading:'Participants'},state:'stAn3CT'});
ec('div');
ec('div');
}let cndmqN4 = ! Is.empty(component.filterOptions.supervisors);
this.setState('stqFlEH', cndmqN4);
if (cndmqN4) { 
let el5qpYs = eo('div','Vsff',null,`class`,`col-sm-3 filter-container`);
let eldrJ1c = eo('div','u8hf',null,`class`,`filter-list`);
let cmpHjBo = this._lc('cVSB1q2bg', {parent:component,props:{items:component.filterOptions.supervisors,value:component.filteredData.supervisors,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('supervisors', e);}},boolAttrs:{multiple:true},attrs:{heading:'Supervisors'},state:'stqFlEH'});
ec('div');
ec('div');
}let cndeQMV = ! component.isInProjectPage && ! Is.empty(component.filterOptions.projects);
this.setState('st8dbjT', cndeQMV);
if (cndeQMV) { 
let elG3TK4 = eo('div','Jf3f',null,`class`,`col-sm-3 filter-container`);
let elFHsQA = eo('div','sQQf',null,`class`,`filter-list`);
let cmpbwdj = this._lc('cCWuZz1sV', {parent:component,props:{items:component.filterOptions.projects,value:component.filteredData.projects,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('projects', e);}},boolAttrs:{multiple:true},attrs:{heading:'Projects'},state:'st8dbjT'});
ec('div');
ec('div');
}let cnd5tu9 = ! Is.empty(component.filterOptions.statuses);
this.setState('stoUwPz', cnd5tu9);
if (cnd5tu9) { 
let elVsreM = eo('div','Wbnf',null,`class`,`col-sm-3 filter-container`);
let el9QG_J = eo('div','8bKf',null,`class`,`filter-list`);
let cmpTNBi = this._lc('cPveORugS', {parent:component,props:{items:component.filterOptions.statuses,value:component.filteredData.statuses,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('statuses', e);}},boolAttrs:{multiple:true},attrs:{heading:'Task Status'},state:'stoUwPz'});
ec('div');
ec('div');
}let cndpCuh = ! Is.empty(component.filterOptions.modules);
this.setState('strIbsU', cndpCuh);
if (cndpCuh) { 
let elcNqMR = eo('div','EvGf',null,`class`,`col-sm-3 filter-container`);
let el4N5Q8 = eo('div','RDDf',null,`class`,`filter-list`);
let cmpntSa = this._lc('c0xGEroLq', {parent:component,props:{items:component.filterOptions.modules,value:component.filteredData.modules,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('modules', e);}},boolAttrs:{multiple:true},attrs:{heading:'Project Module'},state:'strIbsU'});
ec('div');
ec('div');
}let cndk5N6 = ! Is.empty(component.filterOptions.userStories);
this.setState('stF3XVG', cndk5N6);
if (cndk5N6) { 
let el47fqd = eo('div','rUcf',null,`class`,`col-sm-3 filter-container`);
let elpg7Tu = eo('div','BPuf',null,`class`,`filter-list`);
let cmpk_Se = this._lc('cdYstieBF', {parent:component,props:{items:component.filterOptions.userStories,value:component.filteredData.userStories,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('userStories', e);}},boolAttrs:{multiple:true},attrs:{heading:'User Stories'},state:'stF3XVG'});
ec('div');
ec('div');
}ec('div');
ec('div');
}let cndaHcW = component.displayMode == 'board';
this.setState('stsANEs', cndaHcW);
let cndydR0 = cndn5Cr;
this.setState('stpBDbB', cndydR0);
if (cndaHcW) { 
for (let i in component.statuses) {
let status = component.statuses[i]; 
 let iiLzCN = 'l1Zl1gx' + i;
let elmSLWX = eo('div','a1aq5afoPFE1' + i+iiLzCN,null,`class`,`col-12 col-sm-6 col-md-4 col-lg-3`);
let elJhH4k = eo('div','2edff'+iiLzCN,null,`class`,`tasks-group ${ status }`);
let elg7d_M = eo('h3','jBNff'+iiLzCN,null,`class`,`m-b-2`);
let elLy1cP = eo('span','rlaff'+iiLzCN);
text(trans(status));
ec('span');
let el_F2OU = eo('span','pQhff'+iiLzCN,null,`class`,`ml-2`);
text(`(${ component.tasksBoardView[status] ? component.tasksBoardView[status].toArray().length : 0 })`);
ec('span');
let elBCJeK = eo('span','6C0ff'+iiLzCN,null,`title`,``,`class`,`material-icons float-right`);
text(component.statusIcon(status));
ec('span');

                    setTimeout(function () {
                        let $el = elBCJeK;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.statusIconTitle(status)}`});
        ;
                    }, 20);                
                ec('h3');
let elbkAcY = eo('div','cRWff'+iiLzCN,null, eventListeners, {onready:[function(e) {var $el = this;component.draggable($el)}]},`class`,`tasks-list`,`data-status`,`${ status }`);
let cndLNA5 = component.tasksBoardView[status];
this.setState('stggGho', cndLNA5);
if (cndLNA5) { 
for (let index in component.tasksBoardView[status].toArray()) {
let task = component.tasksBoardView[status].toArray()[index]; 
 let iibYgc = task.id + status+ index;
let elTRsz6 = eo('div','wr4UZMovJRuG' + index+iiLzCN+iibYgc,null,`class`,`task simple-card m-b-1`,`data-id`,`${ task.id }`);
elTRsz6.cls = {item: task.canUserControl, undraggable: ! task.canUserControl};

            for (let className in elTRsz6.cls) {
                elTRsz6.classList.toggle(className, elTRsz6.cls[className]);
            }  
            let cndsX7S = task.isParticipant || task.isSupervisor || task.project && task.project.is.higherAuthority;
this.setState('stVCYu4', cndsX7S);
let cnd4T0c = !(cndsX7S);
this.setState('stfhjVz', cnd4T0c);
if (cndsX7S) { 
let elhPzdb = eo('a','samff'+iiLzCN+iibYgc,null,`href`,`${URLS.task(task)}`,`class`,`bold`);
text('#' + task.id + ' ' + task.title);
ec('a');
}else { 
let elVOWJz = eo('div','At8ff'+iiLzCN+iibYgc,null,`class`,`bold`);
text(task.title);
ec('div');
}let cndCwuE = ['completed', 'autoFailed', 'failed'].includes(status) && (component.user.id == 1 || task.isSupervisor || component.project && component.project.isProjectManager) ;
this.setState('stNzKFB', cndCwuE);
if (cndCwuE) { 
let elasAOL = eo('button','bLbff'+iiLzCN+iibYgc,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmArchiving(task)}]},`title`,``,`class`,`float-right pink-text`);
let elb8uyW = eo('i','M9Bff'+iiLzCN+iibYgc,null,`class`,`${fas('archive') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elasAOL;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Archive Task')}`});
        ;
                    }, 20);                
                }let cndXdtr = component.user.id  == 1 || task.isSupervisor || task.isParticipant || (component.project && component.project.isProjectManager);
this.setState('stt9Xkp', cndXdtr);
if (cndXdtr) { 
let el5eNMB = eo('button','0sOff'+iiLzCN+iibYgc,null, eventListeners, {onclick:[function(e) {var $el = this;task.dropdown = ! task.dropdown; component.detectChanges();}]},`type`,`button`,`class`,` float-right`);
let elGpRMD = eo('i','ShHff'+iiLzCN+iibYgc,null,`title`,``,`class`,`${fas('cog') + ' fa-spin icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elGpRMD;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Actions')}`});
        ;
                    }, 20);                
                ec('button');
}let elaUwAC = eo('div','hKuff'+iiLzCN+iibYgc,null,`title`,``,`class`,`participant bold`);
elaUwAC.cls = {'green-text': task.participant.id == component.user.id};

            for (let className in elaUwAC.cls) {
                elaUwAC.classList.toggle(className, elaUwAC.cls[className]);
            }  
            text(task.participant.name);
ec('div');

                    setTimeout(function () {
                        let $el = elaUwAC;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Participant')}`});
        ;
                    }, 20);                
                let cndxhNR = task.dropdown;
this.setState('st071nC', cndxhNR);
if (cndxhNR) { 
let elc_PAu = eo('div','NLRff'+iiLzCN+iibYgc,null,`class`,`action-btns m-t-1`);
let eloOBLZ = eo('button','o5Iff'+iiLzCN+iibYgc,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-cyan`);
let elEZFl0 = eo('i','RBwff'+iiLzCN+iibYgc,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eloOBLZ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Tasks-board')}`});
        ;
                    }, 20);                
                let eltEQCM = eo('button','6WQff'+iiLzCN+iibYgc,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-danger`);
let elWJ8x8 = eo('i','tB9ff'+iiLzCN+iibYgc,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eltEQCM;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Tasks-board')}`});
        ;
                    }, 20);                
                ec('div');
}let elM9Ij_ = eo('section','wAmff'+iiLzCN+iibYgc,null,`class`,`footer`);
let elFi2bH = eo('i','SGMff'+iiLzCN+iibYgc,null,`title`,``,`class`,`${fas('user-secret') + ' icon'}`);
elFi2bH.cls = {'green-text': task.isSupervisor};

            for (let className in elFi2bH.cls) {
                elFi2bH.classList.toggle(className, elFi2bH.cls[className]);
            }  
            ec('i');

                    setTimeout(function () {
                        let $el = elFi2bH;
                        
            true && tippyTooltip($el, {arrow:true,content:`${'<strong>Supervisors</strong><br>' + task.supervisors.map(supervisor => supervisor.name).join('<br/>')}`});
        ;
                    }, 20);                
                let cndFA_v = status == 'completed';
this.setState('stL8r7B', cndFA_v);
if (cndFA_v) { 
let elTNW2G = eo('i','bG0ff'+iiLzCN+iibYgc,null,`class`,`${fas('check-double') + ' green-text ml-2 icon'}`);
ec('i');
}let cnds3t2 = task.endsAt && ! ['completed'].includes(status);
this.setState('stO3xtr', cnds3t2);
if (cnds3t2) { 
let cmp4rGR = this._lc('ciAWdPqSH', {parent:component,props:{tooltip:true,title:task.endsAtTimestamp - task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time',endsAt:task.endsAtTimestamp,startsAt:component.now},attrs:{title:`${task.endsAtTimestamp - task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time'}`,class:'ml-4 bold'},state:'stO3xtr',insideLoop:true,index:"" +iiLzCN+iibYgc});
}let cnddkFz = ! Is.empty(task.comments);
this.setState('stVE879', cnddkFz);
if (cnddkFz) { 
let elILxQe = eo('span','IpXff'+iiLzCN+iibYgc,null,`title`,``,`class`,`ml-3`);
let elr4WpN = eo('i','gZ9ff'+iiLzCN+iibYgc,null,`class`,`${fas('comments') + ' gray-text mr-2 icon'}`);
ec('i');
let elsgnN6 = eo('strong','4YAff'+iiLzCN+iibYgc);
text(task.comments.length);
ec('strong');
ec('span');

                    setTimeout(function () {
                        let $el = elILxQe;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Task Comments')}`});
        ;
                    }, 20);                
                }let cndB_gH = (component.project || task.project) && ! component.isInProjectPage;
this.setState('strbgJ6', cndB_gH);
if (cndB_gH) { 
let elvXpom = eo('a','cXOff'+iiLzCN+iibYgc,null,`href`,`${URLS.project(component.project || task.project)}`,`title`,``,`class`,`ml-3 teal-text`);
let cndhNaj = task.project.image;
this.setState('stJYreQ', cndhNaj);
let cndmYDI = !(cndhNaj);
this.setState('stk1aJs', cndmYDI);
if (cndhNaj) { 
let el23fRU = ev('img','Fvoff'+iiLzCN+iibYgc,null,`src`,`${task.project.image}`,`class`,`small circle`);
}else { 
let elONzJt = eo('i','bGsff'+iiLzCN+iibYgc,null,`class`,`${fas('suitcase') + ' icon'}`);
ec('i');
}ec('a');

                    setTimeout(function () {
                        let $el = elvXpom;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.project ? component.project.name : task.project.name}`});
        ;
                    }, 20);                
                }let cndb_rD = ! Is.empty(task.module);
this.setState('stYxP8z', cndb_rD);
if (cndb_rD) { 
let eluRuGa = eo('span','jqQff'+iiLzCN+iibYgc,null,`title`,``,`class`,`ml-3`);
let elLFVwu = eo('i','KbSff'+iiLzCN+iibYgc,null,`class`,`${fas('cog') + ' lime-text mr-2 icon'}`);
ec('i');
let el1DAB3 = eo('span','spRff'+iiLzCN+iibYgc);
text(task.module.name);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = eluRuGa;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Module')}`});
        ;
                    }, 20);                
                }ec('section');
ec('div');
}
}ec('div');

                    setTimeout(function () {
                        let $el = elbkAcY;
                        component.draggable($el);
                    }, 20);                
                ec('div');
let cndogRb = (component.project || component.user.id == 1) && Object.get(component.project, 'isHigherAuthority', '')  && status != 'autoFailed';
this.setState('stLRtrq', cndogRb);
if (cndogRb) { 
let elx_YBD = eo('section','J6Eff'+iiLzCN,null,`class`,`footer text-right m-b-2`);
let cndU7xY = ! component.openQuickForm[status];
this.setState('stceRlG', cndU7xY);
if (cndU7xY) { 
let elwXhse = eo('button','70eff'+iiLzCN,null, eventListeners, {onclick:[function(e) {var $el = this;component.openQuickForm[status] = true}]},`title`,``,`type`,`button`,`class`,`btn btn-info btn-circle`);
let el75WTq = eo('i','Gemff'+iiLzCN,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elwXhse;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Quick add')}`});
        ;
                    }, 20);                
                }let cndauPK = component.openQuickForm[status];
this.setState('stCIP15', cndauPK);
if (cndauPK) { 
let elz8KFA = eo('form','V5dff'+iiLzCN,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.quickAdd($el)}]});

                if (! elz8KFA.formHandler) {
                    window.cfrmdlr = elz8KFA.formHandler = new FormHandler(elz8KFA, component);
                } else {
                    window.cfrmdlr = elz8KFA.formHandler;
                }
            let el4kWCQ = ev('input','d3_ff'+iiLzCN,null, eventListeners, {oninput:[function(e) {status = this.value;}]},`value`,`${fval(status)}`,`name`,`${(`status`).toInputName()}`,`type`,`hidden`);
el4kWCQ.value = fval(status);
let cndzOiI = component.project;
this.setState('st4t6a7', cndzOiI);
let cndYv05 = !(cndzOiI);
this.setState('st1eNki', cndYv05);
if (cndzOiI) { 
let elYPHo3 = ev('input','AmFff'+iiLzCN,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elYPHo3.value = fval(component.project.id);
}let elV0v6x = ev('input','l2Sff'+iiLzCN,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elz8KFA.formHandler.addError(`title`, 'required', trans('validation.required'));}return elz8KFA.formHandler.removeError(`title`);}]},`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Task Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
let cndTLhB = elz8KFA.formHandler.getError(`title`);
this.setState('stGf6xg', cndTLhB);
let cndY6jT = !(cndTLhB);
this.setState('stp3SWT', cndY6jT);
if (cndTLhB) { 
let elz1p9L = eo('div','1dRff'+iiLzCN,null,`class`,`alert alert-danger`);
text(elz8KFA.formHandler.getError(`title`));
ec('div');
}let elTGmjk = ev('input','6sFff'+iiLzCN,null, eventListeners, {oninput:[function(e) {component.user.id = this.value;}]},`value`,`${fval(component.user.id)}`,`name`,`${(`supervisors[]`).toInputName()}`,`type`,`hidden`);
elTGmjk.value = fval(component.user.id);
let cndhO2n = component.project;
this.setState('st4XAAr', cndhO2n);
let cnd0ogh = !(cndhO2n);
this.setState('stbwYy8', cnd0ogh);
if (cndhO2n) { 
let cmpZBBd = this._lc('cINRHL5BC', {parent:component,props:{value:component.participantId,required:true,items:component.participants},attrs:{name:`${(`participant`).toInputName()}`,heading:'Assignee'},state:'st4XAAr',insideLoop:true,index:"" +iiLzCN});
}else { 
let cmp2y2D = this._lc('cOryOZWKP', {parent:component,props:{remoteSearch:true,value:component.participantId,required:true,lazyLoading:true,service:component.usersService},attrs:{name:`${(`participant`).toInputName()}`,query:'name',heading:'Assignee',required:''},state:'stbwYy8',insideLoop:true,index:"" +iiLzCN});
}let elcIUqs = eo('div','9JHff'+iiLzCN,null,`class`,`text-right m-t-1`);
let elaEWl2 = eo('button','aAqff'+iiLzCN,null, eventListeners, {onclick:[function(e) {var $el = this;component.openQuickForm[status] = false;}]}, boolAttrs, {disabled:component.isSubmitting},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-warning`);
let elprFWy = eo('i','2Kdff'+iiLzCN,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elaEWl2;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('cancel')}`});
        ;
                    }, 20);                
                let el6IfL0 = eo('button','MVUff'+iiLzCN,null, boolAttrs, {disabled:component.isSubmitting},`title`,``,`class`,`btn btn-circle btn-success`);
let elGonMY = eo('i','9aXff'+iiLzCN,null,`class`,`${fas('check') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el6IfL0;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Create')}`});
        ;
                    }, 20);                
                ec('div');
ec('form');
}ec('section');
}ec('div');
}
let cnd1dyC = ! Is.empty(component.archivedTasks);
this.setState('stlwkiH', cnd1dyC);
if (cnd1dyC) { 
let elBAWMp = eo('button','Dtuf',null, eventListeners, {onclick:[function(e) {var $el = this;component.isViewingArchivedTasks = true}]},`class`,`col-12 col-sm-4 col-md-3 bold pink-text view-archived-btn`);
text(`View Archived Tasks (${ component.archivedTasks.length.format() })`);
ec('button');
}}else if (cndydR0) { 
let elHM4fN = eo('div',null,null,`class`,`tasks-list-view`);
let elVJARv = eo('h3',null,null,`class`,`task-heading simple-card`);
text(`Tasks List (${component.tasksList.length})`);
ec('h3');
let elLMnAt = eo('table',null,null,`class`,`table buttoned simple-card`);
let elq046c = eo('thead');
let elOeOLV = eo('tr');
let elnw9Xt = eo('th');
text(`#`);
ec('th');
let elRW88L = eo('th');
text(`Task`);
ec('th');
let elCorU9 = eo('th');
text(`Progress`);
ec('th');
let cndyc2J = ! component.isInProjectPage;
this.setState('stpF_JE', cndyc2J);
if (cndyc2J) { 
let elj6u5D = eo('th','eSTf');
text(`Project`);
ec('th');
}let ellREwz = eo('th');
text(`Status`);
ec('th');
let eltfs3I = eo('th');
text(`Remaining Time`);
ec('th');
let el__XW_ = eo('th');
text(`Participant`);
ec('th');
let elzrqjb = eo('th');
text(`Supervisors`);
ec('th');
let elZ9ORA = eo('th',null,null,`class`,`text-center`);
text(`Module`);
ec('th');
let elhNb6M = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let el2_wTj = eo('tbody');
for (let index in component.tasksList) {
let task = component.tasksList[index]; 
 let ii6in1 = task.id+ index;
let elpo9AA = eo('tr','dl9kI24HjBAl' + index+ii6in1);
let elwexSB = eo('td','lWoff'+ii6in1);
text(task.id);
ec('td');
let elL5Yvl = eo('td','4L4ff'+ii6in1);
let elMFx_M = eo('a','bqlff'+ii6in1,null,`href`,`${URLS.task(task)}`,`title`,``,`class`,`title`);
text(task.title.readMoreChars(30));
ec('a');

                    setTimeout(function () {
                        let $el = elMFx_M;
                        
            true && tippyTooltip($el, {arrow:true,content:`${task.title}`});
        ;
                    }, 20);                
                let cndEaf6 = ! Is.empty(task.comments);
this.setState('stz5YbD', cndEaf6);
if (cndEaf6) { 
let elEWMmI = eo('span','c5mff'+ii6in1,null,`title`,``,`class`,`ml-3`);
let elBYY8v = eo('i','0J0ff'+ii6in1,null,`class`,`${fas('comments') + ' gray-text mr-2 icon'}`);
ec('i');
let elIkuwS = eo('strong','b2Jff'+ii6in1);
text(task.comments.length);
ec('strong');
ec('span');

                    setTimeout(function () {
                        let $el = elEWMmI;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Task Comments')}`});
        ;
                    }, 20);                
                }ec('td');
let elEqYtI = eo('td','jYTff'+ii6in1);
let cndv5Nr = task.progress;
this.setState('stIjVmU', cndv5Nr);
if (cndv5Nr) { 
let el0r_LD = eo('div','hWjff'+ii6in1,null,`title`,``,`class`,`task-progress`);
let elxyTN0 = eo('div','qUqff'+ii6in1,null, 'style', {width:`${task.progress.percentage + '%'}`},`class`,`completed`);
ec('div');
let elGPG4Q = eo('div','iTaff'+ii6in1,null,`class`,`value`);
text(task.progress.completed + '/' + task.progress.total);
ec('div');
ec('div');

                    setTimeout(function () {
                        let $el = el0r_LD;
                        
            true && tippyTooltip($el, {arrow:true,content:`${Math.floor(task.progress.percentage) + '% Completed'}`});
        ;
                    }, 20);                
                }ec('td');
let cnd0BgE = ! component.isInProjectPage;
this.setState('stZFbRw', cnd0BgE);
if (cnd0BgE) { 
let elRJKlq = eo('td','3Udff'+ii6in1);
let cndzNfz = component.project || task.project;
this.setState('st7RdWj', cndzNfz);
let cndPcwX = !(cndzNfz);
this.setState('stShibX', cndPcwX);
if (cndzNfz) { 
let el3TYBI = eo('a','pWRff'+ii6in1,null,`href`,`${URLS.project(component.project || task.project)}`,`title`,``,`class`,`ml-3`);
let cndD_Xx = task.project.image;
this.setState('stdyMR8', cndD_Xx);
let cndSX0D = !(cndD_Xx);
this.setState('st4UAQa', cndSX0D);
if (cndD_Xx) { 
let eliz1F9 = ev('img','g6Xff'+ii6in1,null,`src`,`${task.project.image}`,`class`,`small circle`);
}else { 
let el0vNyh = eo('i','eJwff'+ii6in1,null,`class`,`${fas('suitcase') + ' icon'}`);
ec('i');
}ec('a');

                    setTimeout(function () {
                        let $el = el3TYBI;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.project ? component.project.name : task.project.name}`});
        ;
                    }, 20);                
                }else { 
let el1jMpN = eo('strong','aNSff'+ii6in1);
text(`N/a`);
ec('strong');
}ec('td');
}let elGigvh = eo('td','6N6ff'+ii6in1,null,`class`,`status-column`);
let el_yRI8 = eo('span','pa8ff'+ii6in1,null, eventListeners, {onclick:[function(e) {var $el = this;task.canUserControl ? task.openStatusChanger = ! task.openStatusChanger : null;}]});
let elTfSL8 = eo('span','9zWff'+ii6in1,null,`class`,`badge`);
elTfSL8.cls = taskStatus(task);

            for (let className in elTfSL8.cls) {
                elTfSL8.classList.toggle(className, elTfSL8.cls[className]);
            }  
            text(task.status);
ec('span');
let cndeRXX = task.canUserControl;
this.setState('stOVQG9', cndeRXX);
if (cndeRXX) { 
let elvriqH = eo('i','NaFff'+ii6in1,null,`title`,``,`class`,`${fas('caret-down') + ' icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elvriqH;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Change Task Status')}`});
        ;
                    }, 20);                
                }ec('span');
let cndGY1c = task.openStatusChanger;
this.setState('styOiu0', cndGY1c);
if (cndGY1c) { 
let elstYTP = eo('div','YIBff'+ii6in1,null,`class`,`status-changer`);
let cmpcg27 = this._lc('cV7WTJ97w', {parent:component,props:{items:getAllowedTaskStatuses(task),searchable:false,except:task.status},events:{onselect:function(e) {let $el = this; component.updateTaskStatus(task, e.value)}},state:'styOiu0',insideLoop:true,index:"" +ii6in1});
ec('div');
}ec('td');
let elMUE0t = eo('td','_Bnff'+ii6in1);
let cndqPtq = task.status == 'completed';
this.setState('stH89OW', cndqPtq);
let cndZ9SO = task.endsAtTimestamp && ! ['completed', 'archived'].includes(task.status);
this.setState('st7k6Je', cndZ9SO);
if (cndqPtq) { 
let eloYHq2 = eo('div','BK4ff'+ii6in1);
let elfnn3s = eo('i','Cd6ff'+ii6in1,null,`title`,``,`class`,`${fas('check-double') + ' green-text icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elfnn3s;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Completed')}`});
        ;
                    }, 20);                
                ec('div');
}else if (cndZ9SO) { 
let elFGFxG = eo('span','klfff'+ii6in1,null,`title`,``);
let elmt0jZ = eo('i','6ntff'+ii6in1,null,`class`,`${fas('clock') + ' mr-2 icon'}`);
ec('i');
let cmpmO02 = this._lc('c_cZAOLOt', {parent:component,props:{startsAt:task.startsAtTimestamp,endsAt:task.endsAtTimestamp},attrs:{class:'bold'},state:'st7k6Je',insideLoop:true,index:"" +ii6in1});
ec('span');

                    setTimeout(function () {
                        let $el = elFGFxG;
                        
            true && tippyTooltip($el, {arrow:true,content:`${task.endsAtTimestamp - task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time'}`});
        ;
                    }, 20);                
                }ec('td');
let elz_E7L = eo('td','KCVff'+ii6in1,null,`class`,`text-center`);
let elMniZi = ev('img','jl2ff'+ii6in1,null,`src`,`${task.participant.image}`,`title`,`${task.participant.name}`,`class`,`small mr-2 circle`,`alt`,`${task.participant.name}`);

                    setTimeout(function () {
                        let $el = elMniZi;
                        
            true && tippyTooltip($el, {arrow:true,content:`${task.participant.name}`});
        ;
                    }, 20);                
                ec('td');
let elPlhM6 = eo('td','aKfff'+ii6in1,null,`class`,`text-center`);
for (let i in task.supervisors) {
let supervisor = task.supervisors[i]; 
 let iimG7h = '3eoW6aT' + i;
let elvr7M1 = eo('span','VfjaZg0WLOmF' + i+ii6in1+iimG7h,null,`class`,`mx-1`);
let elX_ZQ3 = ev('img','UJBff'+ii6in1+iimG7h,null,`src`,`${supervisor.image}`,`title`,`${supervisor.name}`,`class`,`small mr-2 circle`,`alt`,`${supervisor.name}`);

                    setTimeout(function () {
                        let $el = elX_ZQ3;
                        
            true && tippyTooltip($el, {arrow:true,content:`${supervisor.name}`});
        ;
                    }, 20);                
                ec('span');
}
ec('td');
let ellKh8B = eo('th','0v3ff'+ii6in1,null,`class`,`text-center v-middle gray-text`);
let cndPf1l = Object.get(task.module, 'parent.name', '');
this.setState('stHE93o', cndPf1l);
if (cndPf1l) { 
let elMDfHf = eo('span','NJ0ff'+ii6in1);
text(task.module.parent.name);
ec('span');
let el5Qmfm = eo('i','GX0ff'+ii6in1,null,`class`,`${fas('angle-double-right') + ' mx-2 icon'}`);
ec('i');
}let elFgrYE = eo('span','JQuff'+ii6in1);
text(Object.get(task.module, 'name', ''));
ec('span');
ec('th');
let elIXv_9 = eo('td','mp6ff'+ii6in1);
let cnd3nha = true;
this.setState('stLVwnG', cnd3nha);
if (cnd3nha) { 
let elD3uuv = eo('button','YXRff'+ii6in1,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-cyan`);
let elcGH1g = eo('i','DeKff'+ii6in1,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elD3uuv;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Tasks-board')}`});
        ;
                    }, 20);                
                let el_pPYi = eo('button','Ex8ff'+ii6in1,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elWE0Uo = eo('i','3VFff'+ii6in1,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el_pPYi;
                        
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
let el5yErv = eo('div',null,null,`class`,`w-100`);
let elKF1uW = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isViewingArchivedTasks = false}]},`class`,`m-b-2 bold btn btn-success float-right`);
text(`Back To
        Board`);
ec('button');
let el3OoZH = eo('table',null,null,`class`,`table table-bordered`);
let elufcts = eo('thead');
let elOVw8O = eo('tr');
let elu1525 = eo('th');
text(`Task`);
ec('th');
let elvRcjv = eo('th');
text(`Participant`);
ec('th');
ec('tr');
ec('thead');
let elRFrTI = eo('tbody');
for (let i in component.archivedTasks) {
let task = component.archivedTasks[i]; 
 let iixVnQ = 'XJxCsIu' + i;
let el5_mR0 = eo('tr','cbucHqfrgoPf' + i+iixVnQ);
let ele1VCk = eo('td','SvLff'+iixVnQ);
let elqHjpm = eo('a','UoSff'+iixVnQ,null,`href`,`${URLS.task(task)}`);
text(task.title);
ec('a');
ec('td');
let elcQZ3H = eo('td','iNmff'+iixVnQ);
let elcJ9ns = ev('img','Qy6ff'+iixVnQ,null,`src`,`${task.participant.image}`,`class`,`circle small`,`title`,`${task.participant.name}`,`alt`,`${task.participant.name}`);
let eloLP78 = eo('span','oAUff'+iixVnQ,null,`class`,`ml-2 bold`);
text(task.participant.name);
ec('span');
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
}}ec('div');
let cnd6uwk = component.modalIsOpened;
this.setState('stTn3sx', cnd6uwk);
if (cnd6uwk) { 
component.modal = this._lc('cmOPYMPgh', {parent:component,props:{displayStatusList:component.record.id,participants:component.participants,supervisors:component.supervisors,project:component.project,task:component.record},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null},onsave:function(e) {let $el = this; component.adjustTaskResponse(e)}},state:'stTn3sx'});
}let cnd5Bxy = component.confirmDelete;
this.setState('stYlQtx', cnd5Bxy);
if (cnd5Bxy) { 
let cmpqdde = this._lc('ctmaCzIiX', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stYlQtx'});
}let cndveUR = component.confirmingArchiving;
this.setState('stYVsbP', cndveUR);
if (cndveUR) { 
let cmpmiaN = this._lc('cPnZBJD7G', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmingArchiving = null},onconfirm:function(e) {let $el = this; component.archive()}},state:'stYVsbP'});
}
                    this.isReadyToGo();
                }
        });