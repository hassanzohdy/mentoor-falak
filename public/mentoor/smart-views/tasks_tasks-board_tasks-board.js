_Component({
                selector: 'tasks-board',
                c: 'TasksBoard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','switchTo','isViewingArchivedTasks','displayMode','modalIsOpened','record','participants','supervisors','project','adjustTaskResponse','confirmDelete','remove','confirmingArchiving','archive','filterOptions','filteredData','filterBy','isInProjectPage','statuses','tasksBoardView','statusIconTitle','statusIcon','draggable','user','confirmArchiving','detectChanges','openModal','confirmRemoving','now','openQuickForm','quickAdd','participantId','usersService','isSubmitting','archivedTasks','tasksList','updateTaskStatus'],
                children: {cxUzY2I9J:'flk-spinner',cZWeQAJ63:'flk-dropdown-list',cx8NHAcnU:'flk-dropdown-list',cyb9F_T7H:'flk-dropdown-list',cCWKMCdI3:'flk-dropdown-list',cMFJlVYIo:'flk-dropdown-list',ck8hzvaPj:'flk-dropdown-list',cmSHvgNOL:'flk-time-remaining',cXOgAymJd:'flk-dropdown-list',co568QdXp:'flk-dropdown-list',c8WPy42E2:'flk-dropdown-list',cnZ4AwxlZ:'flk-time-remaining',cyk2_S2JL:'task-modal',ccRO7Jo2x:'flk-alert',cP4gXeoeC:'flk-alert'},
                render: function (component) {
                    let elYSRqe = eo('div',null,null,`class`,`row m-t-2 tasks-board`);
let cndGyQ0 = component.isLoading;
this.setState('stykfgC', cndGyQ0);
let cnd5SWR = !(cndGyQ0);
this.setState('ststdhj', cnd5SWR);
if (cndGyQ0) { 
let cmpOOy6 = this._lc('cxUzY2I9J', {parent:component,state:'stykfgC'});
}else { 
let elg3Dca = eo('div',null,null,`class`,`style-switcher text-right m-y-2 col-12`);
let elfQFnO = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.switchTo('board')}]},`title`,``,`class`,`btn btn-sm btn-cyan`);
let elwJdmv = eo('i',null,null,`class`,`${fas('th-large') + ' icon fa-2x'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elfQFnO;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Board Mode')}`});
        ;
                    }, 20);                
                let eli8eou = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.switchTo('list')}]},`title`,``,`class`,`btn btn-sm btn-purple`);
let el3rbhJ = eo('i',null,null,`class`,`${fas('th-list') + ' icon fa-2x'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eli8eou;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('List Mode')}`});
        ;
                    }, 20);                
                ec('div');
let cnd6Cil = ! component.isViewingArchivedTasks;
this.setState('stzAkpx', cnd6Cil);
let cndVCkk = !(cnd6Cil);
this.setState('st5XrC0', cndVCkk);
if (cnd6Cil) { 
let elb_I_K = eo('div','oZ6f',null,`class`,`row w-100`);
let cnd7_X8 = component.displayMode == 'list';
this.setState('stBjcGK', cnd7_X8);
let cndEF4F = component.displayMode == 'list';
this.setState('stLiPn3', cndEF4F);
if (cnd7_X8) { 
let el_zRVb = eo('div','UD6f',null,`class`,`simple-card m-b-2 col-12 tasks-list-filter`);
let elpu9hL = eo('div','xlCf',null,`class`,`row`);
let cndaZ5b = ! Is.empty(component.filterOptions.participants);
this.setState('stF_xDJ', cndaZ5b);
if (cndaZ5b) { 
let elMfUR4 = eo('div','ILlf',null,`class`,`col-sm-3 filter-container`);
let elAtfr4 = eo('div','ORPf',null,`class`,`filter-list`);
let cmpyUV8 = this._lc('cZWeQAJ63', {parent:component,props:{items:component.filterOptions.participants,value:component.filteredData.participants,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('participants', e);}},boolAttrs:{multiple:true},attrs:{heading:'Participants'},state:'stF_xDJ'});
ec('div');
ec('div');
}let cndAhNI = ! Is.empty(component.filterOptions.supervisors);
this.setState('stvElVH', cndAhNI);
if (cndAhNI) { 
let el4f4bq = eo('div','oqyf',null,`class`,`col-sm-3 filter-container`);
let elyMA2D = eo('div','r0Df',null,`class`,`filter-list`);
let cmpdjLh = this._lc('cx8NHAcnU', {parent:component,props:{items:component.filterOptions.supervisors,value:component.filteredData.supervisors,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('supervisors', e);}},boolAttrs:{multiple:true},attrs:{heading:'Supervisors'},state:'stvElVH'});
ec('div');
ec('div');
}let cndVJnp = ! component.isInProjectPage && ! Is.empty(component.filterOptions.projects);
this.setState('st22Iwm', cndVJnp);
if (cndVJnp) { 
let elRJztg = eo('div','anZf',null,`class`,`col-sm-3 filter-container`);
let elaxLoi = eo('div','uR9f',null,`class`,`filter-list`);
let cmpndpK = this._lc('cyb9F_T7H', {parent:component,props:{items:component.filterOptions.projects,value:component.filteredData.projects,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('projects', e);}},boolAttrs:{multiple:true},attrs:{heading:'Projects'},state:'st22Iwm'});
ec('div');
ec('div');
}let cndot8j = ! Is.empty(component.filterOptions.statuses);
this.setState('stQ7kZ4', cndot8j);
if (cndot8j) { 
let elX0ZvF = eo('div','j95f',null,`class`,`col-sm-3 filter-container`);
let el4h9z9 = eo('div','gLyf',null,`class`,`filter-list`);
let cmp6LtH = this._lc('cCWKMCdI3', {parent:component,props:{items:component.filterOptions.statuses,value:component.filteredData.statuses,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('statuses', e);}},boolAttrs:{multiple:true},attrs:{heading:'Task Status'},state:'stQ7kZ4'});
ec('div');
ec('div');
}let cndCwut = ! Is.empty(component.filterOptions.modules);
this.setState('stF9R62', cndCwut);
if (cndCwut) { 
let el_OCQc = eo('div','0dmf',null,`class`,`col-sm-3 filter-container`);
let elPgJZ7 = eo('div','gg2f',null,`class`,`filter-list`);
let cmpDkaW = this._lc('cMFJlVYIo', {parent:component,props:{items:component.filterOptions.modules,value:component.filteredData.modules,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('modules', e);}},boolAttrs:{multiple:true},attrs:{heading:'Project Module'},state:'stF9R62'});
ec('div');
ec('div');
}let cndovVu = ! Is.empty(component.filterOptions.userStories);
this.setState('stSw4xK', cndovVu);
if (cndovVu) { 
let elPN476 = eo('div','BPGf',null,`class`,`col-sm-3 filter-container`);
let elyyGZR = eo('div','y3yf',null,`class`,`filter-list`);
let cmp8S7C = this._lc('ck8hzvaPj', {parent:component,props:{items:component.filterOptions.userStories,value:component.filteredData.userStories,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('userStories', e);}},boolAttrs:{multiple:true},attrs:{heading:'User Stories'},state:'stSw4xK'});
ec('div');
ec('div');
}ec('div');
ec('div');
}let cndeG9c = component.displayMode == 'board';
this.setState('stWCtH0', cndeG9c);
let cnd5LU_ = cndEF4F;
this.setState('strcvzL', cnd5LU_);
if (cndeG9c) { 
for (let i in component.statuses) {
let status = component.statuses[i]; 
 let iiACIC = 'yRZYzOT' + i;
let elcsDsk = eo('div','K6poM7qKHKgk' + i+iiACIC,null,`class`,`col-12 col-sm-6 col-md-4 col-lg-3`);
let elOg37j = eo('div','HJpff'+iiACIC,null,`class`,`tasks-group ${ status }`);
let elfxJGu = eo('h3','AU3ff'+iiACIC,null,`class`,`m-b-2`);
let ellKMFt = eo('span','bpQff'+iiACIC);
text(trans(status));
ec('span');
let elLsLSO = eo('span','HMJff'+iiACIC,null,`class`,`ml-2`);
text(`(${ component.tasksBoardView[status] ? component.tasksBoardView[status].toArray().length : 0 })`);
ec('span');
let el26l2a = eo('span','fmSff'+iiACIC,null,`title`,``,`class`,`material-icons float-right`);
text(component.statusIcon(status));
ec('span');

                    setTimeout(function () {
                        let $el = el26l2a;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.statusIconTitle(status)}`});
        ;
                    }, 20);                
                ec('h3');
let el6OhXp = eo('div','Pnwff'+iiACIC,null, eventListeners, {onready:[function(e) {var $el = this;component.draggable($el)}]},`class`,`tasks-list`,`data-status`,`${ status }`);
let cndx3AB = component.tasksBoardView[status];
this.setState('stWlou9', cndx3AB);
if (cndx3AB) { 
for (let index in component.tasksBoardView[status].toArray()) {
let task = component.tasksBoardView[status].toArray()[index]; 
 let iiG_fz = task.id + status+ index;
let elGhHrn = eo('div','YERi0FJFKUFx' + index+iiACIC+iiG_fz,null,`class`,`task simple-card m-b-1`,`data-id`,`${ task.id }`);
elGhHrn.cls = {item: task.canUserControl, undraggable: ! task.canUserControl};

            for (let className in elGhHrn.cls) {
                elGhHrn.classList.toggle(className, elGhHrn.cls[className]);
            }  
            let cndB1oB = task.isParticipant || task.isSupervisor || task.project && task.project.is.higherAuthority;
this.setState('stKuZgR', cndB1oB);
let cndS_Dt = !(cndB1oB);
this.setState('stbz_z1', cndS_Dt);
if (cndB1oB) { 
let elgBk51 = eo('a','yvRff'+iiACIC+iiG_fz,null,`href`,`${URLS.task(task)}`,`class`,`bold`);
text('#' + task.id + ' ' + task.title);
ec('a');
}else { 
let elzRFu5 = eo('div','YJxff'+iiACIC+iiG_fz,null,`class`,`bold`);
text(task.title);
ec('div');
}let cndLyWT = ['completed', 'autoFailed', 'failed'].includes(status) && (component.user.id == 1 || task.isSupervisor || component.project && component.project.isProjectManager) ;
this.setState('stImbHF', cndLyWT);
if (cndLyWT) { 
let elyNEem = eo('button','ongff'+iiACIC+iiG_fz,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmArchiving(task)}]},`title`,``,`class`,`float-right pink-text`);
let elNmm2I = eo('i','KG9ff'+iiACIC+iiG_fz,null,`class`,`${fas('archive') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elyNEem;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Archive Task')}`});
        ;
                    }, 20);                
                }let cndHq7R = component.user.id  == 1 || task.isSupervisor || task.isParticipant || (component.project && component.project.isProjectManager);
this.setState('stfAraA', cndHq7R);
if (cndHq7R) { 
let elxqw4Z = eo('button','Vouff'+iiACIC+iiG_fz,null, eventListeners, {onclick:[function(e) {var $el = this;task.dropdown = ! task.dropdown; component.detectChanges();}]},`type`,`button`,`class`,` float-right`);
let elrrXo4 = eo('i','U6qff'+iiACIC+iiG_fz,null,`title`,``,`class`,`${fas('cog') + ' fa-spin icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elrrXo4;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Actions')}`});
        ;
                    }, 20);                
                ec('button');
}let eltHGLC = eo('div','ReNff'+iiACIC+iiG_fz,null,`title`,``,`class`,`participant bold`);
eltHGLC.cls = {'green-text': task.participant.id == component.user.id};

            for (let className in eltHGLC.cls) {
                eltHGLC.classList.toggle(className, eltHGLC.cls[className]);
            }  
            text(task.participant.name);
ec('div');

                    setTimeout(function () {
                        let $el = eltHGLC;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Participant')}`});
        ;
                    }, 20);                
                let cndjjOM = task.dropdown;
this.setState('stTkZHW', cndjjOM);
if (cndjjOM) { 
let elAg1sh = eo('div','Ziuff'+iiACIC+iiG_fz,null,`class`,`action-btns m-t-1`);
let el1e79X = eo('button','Ll0ff'+iiACIC+iiG_fz,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-cyan`);
let elfH6pX = eo('i','wgmff'+iiACIC+iiG_fz,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el1e79X;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Tasks-board')}`});
        ;
                    }, 20);                
                let elzp624 = eo('button','YvIff'+iiACIC+iiG_fz,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-danger`);
let elgWl_U = eo('i','O2kff'+iiACIC+iiG_fz,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elzp624;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Tasks-board')}`});
        ;
                    }, 20);                
                ec('div');
}let elrkL96 = eo('section','y2Hff'+iiACIC+iiG_fz,null,`class`,`footer`);
let elbx7Un = eo('i','HiBff'+iiACIC+iiG_fz,null,`title`,``,`class`,`${fas('user-secret') + ' icon'}`);
elbx7Un.cls = {'green-text': task.isSupervisor};

            for (let className in elbx7Un.cls) {
                elbx7Un.classList.toggle(className, elbx7Un.cls[className]);
            }  
            ec('i');

                    setTimeout(function () {
                        let $el = elbx7Un;
                        
            true && tippyTooltip($el, {arrow:true,content:`${'<strong>Supervisors</strong><br>' + task.supervisors.map(supervisor => supervisor.name).join('<br/>')}`});
        ;
                    }, 20);                
                let cndNKR4 = status == 'completed';
this.setState('stMX2Fr', cndNKR4);
if (cndNKR4) { 
let elAl1YZ = eo('i','hQdff'+iiACIC+iiG_fz,null,`class`,`${fas('check-double') + ' green-text ml-2 icon'}`);
ec('i');
}let cndcaQL = task.endsAt && ! ['completed'].includes(status);
this.setState('stT2rXK', cndcaQL);
if (cndcaQL) { 
let cmpJyCM = this._lc('cmSHvgNOL', {parent:component,props:{tooltip:true,title:task.endsAtTimestamp - task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time',endsAt:task.endsAtTimestamp,startsAt:component.now},attrs:{title:`${task.endsAtTimestamp - task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time'}`,class:'ml-4 bold'},state:'stT2rXK',insideLoop:true,index:"" +iiACIC+iiG_fz});
}let cnd8mTC = ! Is.empty(task.comments);
this.setState('stbbYmC', cnd8mTC);
if (cnd8mTC) { 
let el1hVzr = eo('span','diSff'+iiACIC+iiG_fz,null,`title`,``,`class`,`ml-3`);
let eleu2GH = eo('i','d2xff'+iiACIC+iiG_fz,null,`class`,`${fas('comments') + ' gray-text mr-2 icon'}`);
ec('i');
let elWQQsr = eo('strong','qLQff'+iiACIC+iiG_fz);
text(task.comments.length);
ec('strong');
ec('span');

                    setTimeout(function () {
                        let $el = el1hVzr;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Task Comments')}`});
        ;
                    }, 20);                
                }let cndZKmF = (component.project || task.project) && ! component.isInProjectPage;
this.setState('st9AGv5', cndZKmF);
if (cndZKmF) { 
let elZq2e4 = eo('a','I7gff'+iiACIC+iiG_fz,null,`href`,`${URLS.project(component.project || task.project)}`,`title`,``,`class`,`ml-3 teal-text`);
let cnda4TI = task.project.image;
this.setState('stcWDXL', cnda4TI);
let cndCswr = !(cnda4TI);
this.setState('st23PCc', cndCswr);
if (cnda4TI) { 
let elffAvf = ev('img','YPiff'+iiACIC+iiG_fz,null,`src`,`${task.project.image}`,`class`,`small circle`);
}else { 
let elgwu0Q = eo('i','GqIff'+iiACIC+iiG_fz,null,`class`,`${fas('suitcase') + ' icon'}`);
ec('i');
}ec('a');

                    setTimeout(function () {
                        let $el = elZq2e4;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.project ? component.project.name : task.project.name}`});
        ;
                    }, 20);                
                }let cnd1fkC = ! Is.empty(task.module);
this.setState('stWXPhj', cnd1fkC);
if (cnd1fkC) { 
let elHvyVs = eo('span','aCUff'+iiACIC+iiG_fz,null,`title`,``,`class`,`ml-3`);
let eleYDWN = eo('i','Jknff'+iiACIC+iiG_fz,null,`class`,`${fas('cog') + ' lime-text mr-2 icon'}`);
ec('i');
let el7i1FX = eo('span','tQwff'+iiACIC+iiG_fz);
text(task.module.name);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elHvyVs;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Module')}`});
        ;
                    }, 20);                
                }ec('section');
ec('div');
}
}ec('div');

                    setTimeout(function () {
                        let $el = el6OhXp;
                        component.draggable($el);
                    }, 20);                
                ec('div');
let cnd2ksa = (component.project || component.user.id == 1) && Object.get(component.project, 'isHigherAuthority', '')  && status != 'autoFailed';
this.setState('strRkv6', cnd2ksa);
if (cnd2ksa) { 
let elOO2T5 = eo('section','rvCff'+iiACIC,null,`class`,`footer text-right m-b-2`);
let cnds58z = ! component.openQuickForm[status];
this.setState('sta20SK', cnds58z);
if (cnds58z) { 
let eluPvLv = eo('button','F41ff'+iiACIC,null, eventListeners, {onclick:[function(e) {var $el = this;component.openQuickForm[status] = true}]},`title`,``,`type`,`button`,`class`,`btn btn-info btn-circle`);
let elNrEDa = eo('i','K6aff'+iiACIC,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eluPvLv;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Quick add')}`});
        ;
                    }, 20);                
                }let cndNSSI = component.openQuickForm[status];
this.setState('stsukDq', cndNSSI);
if (cndNSSI) { 
let el7coZ1 = eo('form','YrSff'+iiACIC,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.quickAdd($el)}]});

                if (! el7coZ1.formHandler) {
                    window.cfrmdlr = el7coZ1.formHandler = new FormHandler(el7coZ1, component);
                } else {
                    window.cfrmdlr = el7coZ1.formHandler;
                }
            let elnvXoI = ev('input','eSSff'+iiACIC,null, eventListeners, {oninput:[function(e) {status = this.value;}]},`value`,`${fval(status)}`,`name`,`${(`status`).toInputName()}`,`type`,`hidden`);
elnvXoI.value = fval(status);
let cndq9zX = component.project;
this.setState('stq1QKO', cndq9zX);
let cndZ0Q5 = !(cndq9zX);
this.setState('stsSCFM', cndZ0Q5);
if (cndq9zX) { 
let el_fj04 = ev('input','Tygff'+iiACIC,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el_fj04.value = fval(component.project.id);
}let elcAFV4 = ev('input','Cx7ff'+iiACIC,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7coZ1.formHandler.addError(`title`, 'required', trans('validation.required'));}return el7coZ1.formHandler.removeError(`title`);}]},`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Task Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
let cndO6Ei = el7coZ1.formHandler.getError(`title`);
this.setState('stVkbig', cndO6Ei);
let cndbqI3 = !(cndO6Ei);
this.setState('stS9QM8', cndbqI3);
if (cndO6Ei) { 
let elTPz38 = eo('div','PTdff'+iiACIC,null,`class`,`alert alert-danger`);
text(el7coZ1.formHandler.getError(`title`));
ec('div');
}let el8uBdi = ev('input','SY9ff'+iiACIC,null, eventListeners, {oninput:[function(e) {component.user.id = this.value;}]},`value`,`${fval(component.user.id)}`,`name`,`${(`supervisors[]`).toInputName()}`,`type`,`hidden`);
el8uBdi.value = fval(component.user.id);
let cndCLGQ = component.project;
this.setState('stE2myB', cndCLGQ);
let cndpGY_ = !(cndCLGQ);
this.setState('sttrKkt', cndpGY_);
if (cndCLGQ) { 
let cmpl6Un = this._lc('cXOgAymJd', {parent:component,props:{value:component.participantId,required:true,items:component.participants},attrs:{name:`${(`participant`).toInputName()}`,heading:'Assignee'},state:'stE2myB',insideLoop:true,index:"" +iiACIC});
}else { 
let cmpOATJ = this._lc('co568QdXp', {parent:component,props:{remoteSearch:true,value:component.participantId,required:true,lazyLoading:true,service:component.usersService},attrs:{name:`${(`participant`).toInputName()}`,query:'name',heading:'Assignee',required:''},state:'sttrKkt',insideLoop:true,index:"" +iiACIC});
}let elw8wCh = eo('div','cErff'+iiACIC,null,`class`,`text-right m-t-1`);
let elGhTXP = eo('button','HJGff'+iiACIC,null, eventListeners, {onclick:[function(e) {var $el = this;component.openQuickForm[status] = false;}]}, boolAttrs, {disabled:component.isSubmitting},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-warning`);
let el9xF4Y = eo('i','VvAff'+iiACIC,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elGhTXP;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('cancel')}`});
        ;
                    }, 20);                
                let el5AVq8 = eo('button','Bwkff'+iiACIC,null, boolAttrs, {disabled:component.isSubmitting},`title`,``,`class`,`btn btn-circle btn-success`);
let elH9WBt = eo('i','QPrff'+iiACIC,null,`class`,`${fas('check') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el5AVq8;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Create')}`});
        ;
                    }, 20);                
                ec('div');
ec('form');
}ec('section');
}ec('div');
}
let cnd5SQK = ! Is.empty(component.archivedTasks);
this.setState('stY8J7U', cnd5SQK);
if (cnd5SQK) { 
let elXPehq = eo('button','HfYf',null, eventListeners, {onclick:[function(e) {var $el = this;component.isViewingArchivedTasks = true}]},`class`,`col-12 col-sm-4 col-md-3 bold pink-text view-archived-btn`);
text(`View Archived Tasks (${ component.archivedTasks.length.format() })`);
ec('button');
}}else if (cnd5LU_) { 
let elOeSF_ = eo('div',null,null,`class`,`tasks-list-view`);
let el83iIc = eo('h3',null,null,`class`,`task-heading simple-card`);
text(`Tasks List (${component.tasksList.length})`);
ec('h3');
let elF7jYm = eo('table',null,null,`class`,`table buttoned simple-card`);
let elojs9z = eo('thead');
let elX5ZyQ = eo('tr');
let elX4Eu8 = eo('th');
text(`#`);
ec('th');
let elPOWeq = eo('th');
text(`Task`);
ec('th');
let el38EY7 = eo('th');
text(`Progress`);
ec('th');
let cndO1Pb = ! component.isInProjectPage;
this.setState('stg7XrL', cndO1Pb);
if (cndO1Pb) { 
let elSi1YD = eo('th','qblf');
text(`Project`);
ec('th');
}let elv_Yk0 = eo('th');
text(`Status`);
ec('th');
let el136nV = eo('th');
text(`Remaining Time`);
ec('th');
let elQ4bsZ = eo('th');
text(`Participant`);
ec('th');
let elJkkez = eo('th');
text(`Supervisors`);
ec('th');
let elbIU2k = eo('th',null,null,`class`,`text-center`);
text(`Module`);
ec('th');
let el1ce_i = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elvL6xj = eo('tbody');
for (let index in component.tasksList) {
let task = component.tasksList[index]; 
 let iiRx2o = task.id+ index;
let elLXrzl = eo('tr','XaVzKRwyeSiB' + index+iiRx2o);
let elCoIHv = eo('td','Nz7ff'+iiRx2o);
text(task.id);
ec('td');
let elc8FYV = eo('td','iz1ff'+iiRx2o);
let elfZ1R8 = eo('a','zJDff'+iiRx2o,null,`href`,`${URLS.task(task)}`,`title`,``,`class`,`title`);
text(task.title.readMoreChars(30));
ec('a');

                    setTimeout(function () {
                        let $el = elfZ1R8;
                        
            true && tippyTooltip($el, {arrow:true,content:`${task.title}`});
        ;
                    }, 20);                
                let cnd4mIT = ! Is.empty(task.comments);
this.setState('stVx86q', cnd4mIT);
if (cnd4mIT) { 
let el0lf9m = eo('span','ELMff'+iiRx2o,null,`title`,``,`class`,`ml-3`);
let elFDXQr = eo('i','S1yff'+iiRx2o,null,`class`,`${fas('comments') + ' gray-text mr-2 icon'}`);
ec('i');
let elfTcZY = eo('strong','30pff'+iiRx2o);
text(task.comments.length);
ec('strong');
ec('span');

                    setTimeout(function () {
                        let $el = el0lf9m;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Task Comments')}`});
        ;
                    }, 20);                
                }ec('td');
let el9q09T = eo('td','vBfff'+iiRx2o);
let cndiNEC = task.progress;
this.setState('stDgzf5', cndiNEC);
if (cndiNEC) { 
let elC6z_S = eo('div','yWJff'+iiRx2o,null,`title`,``,`class`,`task-progress`);
let elsSAzJ = eo('div','hD1ff'+iiRx2o,null, 'style', {width:`${task.progress.percentage + '%'}`},`class`,`completed`);
ec('div');
let eluFp8w = eo('div','Pl8ff'+iiRx2o,null,`class`,`value`);
text(task.progress.completed + '/' + task.progress.total);
ec('div');
ec('div');

                    setTimeout(function () {
                        let $el = elC6z_S;
                        
            true && tippyTooltip($el, {arrow:true,content:`${Math.floor(task.progress.percentage) + '% Completed'}`});
        ;
                    }, 20);                
                }ec('td');
let cnd5nm7 = ! component.isInProjectPage;
this.setState('stkBQvd', cnd5nm7);
if (cnd5nm7) { 
let eluVugx = eo('td','IqZff'+iiRx2o);
let cndiB5u = component.project || task.project;
this.setState('st4DSGG', cndiB5u);
let cndXDc0 = !(cndiB5u);
this.setState('stTNSBO', cndXDc0);
if (cndiB5u) { 
let elq4EiK = eo('a','Kojff'+iiRx2o,null,`href`,`${URLS.project(component.project || task.project)}`,`title`,``,`class`,`ml-3`);
let cndkwL3 = task.project.image;
this.setState('stGyatG', cndkwL3);
let cndH2jK = !(cndkwL3);
this.setState('stVQ7ky', cndH2jK);
if (cndkwL3) { 
let el0cqkU = ev('img','DUcff'+iiRx2o,null,`src`,`${task.project.image}`,`class`,`small circle`);
}else { 
let elf8EhI = eo('i','KF2ff'+iiRx2o,null,`class`,`${fas('suitcase') + ' icon'}`);
ec('i');
}ec('a');

                    setTimeout(function () {
                        let $el = elq4EiK;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.project ? component.project.name : task.project.name}`});
        ;
                    }, 20);                
                }else { 
let elgwRSh = eo('strong','aHmff'+iiRx2o);
text(`N/a`);
ec('strong');
}ec('td');
}let elYLL4G = eo('td','lMEff'+iiRx2o,null,`class`,`status-column`);
let elkWlJ_ = eo('span','4dVff'+iiRx2o,null, eventListeners, {onclick:[function(e) {var $el = this;task.canUserControl ? task.openStatusChanger = ! task.openStatusChanger : null;}]});
let elDjJqo = eo('span','x2qff'+iiRx2o,null,`class`,`badge`);
elDjJqo.cls = taskStatus(task);

            for (let className in elDjJqo.cls) {
                elDjJqo.classList.toggle(className, elDjJqo.cls[className]);
            }  
            text(task.status);
ec('span');
let cndy_9z = task.canUserControl;
this.setState('sttLOaD', cndy_9z);
if (cndy_9z) { 
let elOkJUz = eo('i','M5gff'+iiRx2o,null,`title`,``,`class`,`${fas('caret-down') + ' icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elOkJUz;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Change Task Status')}`});
        ;
                    }, 20);                
                }ec('span');
let cnd4dcz = task.openStatusChanger;
this.setState('stDqNiw', cnd4dcz);
if (cnd4dcz) { 
let el5T452 = eo('div','71Fff'+iiRx2o,null,`class`,`status-changer`);
let cmpk5nu = this._lc('c8WPy42E2', {parent:component,props:{items:getAllowedTaskStatuses(task),searchable:false,except:task.status},events:{onselect:function(e) {let $el = this; component.updateTaskStatus(task, e.value)}},state:'stDqNiw',insideLoop:true,index:"" +iiRx2o});
ec('div');
}ec('td');
let el3Tkke = eo('td','bjFff'+iiRx2o);
let cndgykU = task.status == 'completed';
this.setState('stdveUS', cndgykU);
let cndXxtg = task.endsAtTimestamp && ! ['completed', 'archived'].includes(task.status);
this.setState('sthakM6', cndXxtg);
if (cndgykU) { 
let el2IJiV = eo('div','Wx4ff'+iiRx2o);
let elo2Rws = eo('i','e_Tff'+iiRx2o,null,`title`,``,`class`,`${fas('check-double') + ' green-text icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elo2Rws;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Completed')}`});
        ;
                    }, 20);                
                ec('div');
}else if (cndXxtg) { 
let elpIMZM = eo('span','xzKff'+iiRx2o,null,`title`,``);
let elU0sx0 = eo('i','62Cff'+iiRx2o,null,`class`,`${fas('clock') + ' mr-2 icon'}`);
ec('i');
let cmpATzo = this._lc('cnZ4AwxlZ', {parent:component,props:{startsAt:task.startsAtTimestamp,endsAt:task.endsAtTimestamp},attrs:{class:'bold'},state:'sthakM6',insideLoop:true,index:"" +iiRx2o});
ec('span');

                    setTimeout(function () {
                        let $el = elpIMZM;
                        
            true && tippyTooltip($el, {arrow:true,content:`${task.endsAtTimestamp - task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time'}`});
        ;
                    }, 20);                
                }ec('td');
let el2UeHu = eo('td','mbrff'+iiRx2o,null,`class`,`text-center`);
let el0_2SK = ev('img','BYcff'+iiRx2o,null,`src`,`${task.participant.image}`,`title`,`${task.participant.name}`,`class`,`small mr-2 circle`,`alt`,`${task.participant.name}`);

                    setTimeout(function () {
                        let $el = el0_2SK;
                        
            true && tippyTooltip($el, {arrow:true,content:`${task.participant.name}`});
        ;
                    }, 20);                
                ec('td');
let elDCeqd = eo('td','5vlff'+iiRx2o,null,`class`,`text-center`);
for (let i in task.supervisors) {
let supervisor = task.supervisors[i]; 
 let iiXNS2 = '7gQffZi' + i;
let elQPIE0 = eo('span','8fJjWI6qt4z3' + i+iiRx2o+iiXNS2,null,`class`,`mx-1`);
let el8sLT3 = ev('img','0LQff'+iiRx2o+iiXNS2,null,`src`,`${supervisor.image}`,`title`,`${supervisor.name}`,`class`,`small mr-2 circle`,`alt`,`${supervisor.name}`);

                    setTimeout(function () {
                        let $el = el8sLT3;
                        
            true && tippyTooltip($el, {arrow:true,content:`${supervisor.name}`});
        ;
                    }, 20);                
                ec('span');
}
ec('td');
let elPDl0K = eo('th','wRFff'+iiRx2o,null,`class`,`text-center v-middle gray-text`);
let cnd6fU4 = Object.get(task.module, 'parent.name', '');
this.setState('stCDcmf', cnd6fU4);
if (cnd6fU4) { 
let elff0Xn = eo('span','YShff'+iiRx2o);
text(task.module.parent.name);
ec('span');
let elBWtBc = eo('i','mKFff'+iiRx2o,null,`class`,`${fas('angle-double-right') + ' mx-2 icon'}`);
ec('i');
}let elNHjB8 = eo('span','0gjff'+iiRx2o);
text(Object.get(task.module, 'name', ''));
ec('span');
ec('th');
let elJfYJ1 = eo('td','KbIff'+iiRx2o);
let cndstD2 = true;
this.setState('st2feVh', cndstD2);
if (cndstD2) { 
let elpsFA4 = eo('button','ovxff'+iiRx2o,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-cyan`);
let elokC1Y = eo('i','FXfff'+iiRx2o,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elpsFA4;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Tasks-board')}`});
        ;
                    }, 20);                
                let el9aBzr = eo('button','znKff'+iiRx2o,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elB7KCc = eo('i','jL0ff'+iiRx2o,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el9aBzr;
                        
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
let elfe5d4 = eo('div',null,null,`class`,`w-100`);
let el0rfyw = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isViewingArchivedTasks = false}]},`class`,`m-b-2 bold btn btn-success float-right`);
text(`Back To
        Board`);
ec('button');
let elpLP2v = eo('table',null,null,`class`,`table table-bordered`);
let elHa0JH = eo('thead');
let elpuVvv = eo('tr');
let elshRje = eo('th');
text(`Task`);
ec('th');
let elovDLB = eo('th');
text(`Participant`);
ec('th');
ec('tr');
ec('thead');
let el6QMHg = eo('tbody');
for (let i in component.archivedTasks) {
let task = component.archivedTasks[i]; 
 let ii3LvK = 'ByLBwr5' + i;
let elo_fA3 = eo('tr','cN0aB2AQPhzV' + i+ii3LvK);
let el2dOZM = eo('td','Vzqff'+ii3LvK);
let elx0_8O = eo('a','2a_ff'+ii3LvK,null,`href`,`${URLS.task(task)}`);
text(task.title);
ec('a');
ec('td');
let el95JN9 = eo('td','yHuff'+ii3LvK);
let elRCjKs = ev('img','VD9ff'+ii3LvK,null,`src`,`${task.participant.image}`,`class`,`circle small`,`title`,`${task.participant.name}`,`alt`,`${task.participant.name}`);
let el5rkSI = eo('span','5Tiff'+ii3LvK,null,`class`,`ml-2 bold`);
text(task.participant.name);
ec('span');
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
}}ec('div');
let cndoaJo = component.modalIsOpened;
this.setState('stb2tdA', cndoaJo);
if (cndoaJo) { 
component.modal = this._lc('cyk2_S2JL', {parent:component,props:{displayStatusList:component.record.id,participants:component.participants,supervisors:component.supervisors,project:component.project,task:component.record},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null},onsave:function(e) {let $el = this; component.adjustTaskResponse(e)}},state:'stb2tdA'});
}let cndwbeV = component.confirmDelete;
this.setState('st9PO8w', cndwbeV);
if (cndwbeV) { 
let cmpbnpX = this._lc('ccRO7Jo2x', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st9PO8w'});
}let cndZ8_E = component.confirmingArchiving;
this.setState('stOmggI', cndZ8_E);
if (cndZ8_E) { 
let cmp58oG = this._lc('cP4gXeoeC', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmingArchiving = null},onconfirm:function(e) {let $el = this; component.archive()}},state:'stOmggI'});
}
                    this.isReadyToGo();
                }
        });