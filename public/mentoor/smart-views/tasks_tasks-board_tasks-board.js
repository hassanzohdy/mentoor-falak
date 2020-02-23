_Component({
                selector: 'tasks-board',
                c: 'TasksBoard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','switchTo','isViewingArchivedTasks','displayMode','modalIsOpened','record','participants','supervisors','project','adjustTaskResponse','confirmDelete','remove','confirmingArchiving','archive','filterOptions','filteredData','filterBy','isInProjectPage','statuses','tasksBoardView','statusIconTitle','statusIcon','draggable','user','confirmArchiving','detectChanges','openModal','confirmRemoving','now','openQuickForm','quickAdd','participantId','usersService','isSubmitting','archivedTasks','tasksList','sortTasksBy','isStatusSortOpened','sortObjects','isPartSortOpened','isSuperSortOpened','isModuleSortOpened','isPrioritySortOpened','updateTaskStatus'],
                children: {cd69pRDAz:'flk-spinner',cJrXfJelP:'flk-dropdown-list',ck6IdzIvK:'flk-dropdown-list',c1g7sUDpG:'flk-dropdown-list',cZBpYBHap:'flk-dropdown-list',cF776wYhK:'flk-dropdown-list',cQW4eVezM:'flk-dropdown-list',cNTJLl1F7:'flk-dropdown-list',cicQv_Nwc:'flk-time-remaining',cbQ5SZ5ri:'flk-dropdown-list',cJWjSNcfg:'flk-dropdown-list',cu0VK5nqy:'flk-dropdown-list',cO1CLu50Z:'flk-dropdown-list',c5RMUR2tg:'flk-dropdown-list',cISPhGSSo:'flk-dropdown-list',cESoh13Rk:'flk-dropdown-list',c803lVeJP:'flk-dropdown-list',cX2r_fVSH:'flk-time-remaining',c1dnBiVqL:'task-modal',cwsm0p6pu:'flk-alert',cxqphIVYA:'flk-alert'},
                render: function (component) {
                    let elHFq_w = eo('div',null,null,`class`,`row m-t-2 tasks-board`);
let cndp3JF = component.isLoading;
this.setState('stDK_9D', cndp3JF);
let cnd09Oh = !(cndp3JF);
this.setState('stkhuD7', cnd09Oh);
if (cndp3JF) { 
let cmpZyFx = this._lc('cd69pRDAz', {parent:component,state:'stDK_9D'});
}else { 
let elQWfqZ = eo('div',null,null,`class`,`style-switcher text-right m-y-2 col-12`);
let elXFKug = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.switchTo('board')}]},`title`,``,`class`,`btn btn-sm btn-cyan`);
let elq7xGa = eo('i',null,null,`class`,`${fas('th-large') + ' icon fa-2x'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elXFKug;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Board Mode')}`});
        ;
                    }, 20);                
                let eljI6fJ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.switchTo('list')}]},`title`,``,`class`,`btn btn-sm btn-purple`);
let ellr62a = eo('i',null,null,`class`,`${fas('th-list') + ' icon fa-2x'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eljI6fJ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('List Mode')}`});
        ;
                    }, 20);                
                ec('div');
let cndA6oq = ! component.isViewingArchivedTasks;
this.setState('stPvha6', cndA6oq);
let cndlnvo = !(cndA6oq);
this.setState('stQo9_E', cndlnvo);
if (cndA6oq) { 
let elXnkLQ = eo('div','KkOf',null,`class`,`row w-100`);
let cndKtg9 = component.displayMode == 'list';
this.setState('stwdPEe', cndKtg9);
let cnd5wdt = component.displayMode == 'list';
this.setState('stBAcO8', cnd5wdt);
if (cndKtg9) { 
let el9MylN = eo('div','yntf',null,`class`,`simple-card m-b-2 col-12 tasks-list-filter`);
let el8b3kR = eo('div','bhPf',null,`class`,`row`);
let cnd2h7l = ! Is.empty(component.filterOptions.participants);
this.setState('stwWcpZ', cnd2h7l);
if (cnd2h7l) { 
let elbgJuD = eo('div','7zxf',null,`class`,`col-sm-3 filter-container`);
let elACIlx = eo('div','nuFf',null,`class`,`filter-list`);
let cmpBN9Z = this._lc('cJrXfJelP', {parent:component,props:{items:component.filterOptions.participants,value:component.filteredData.participants,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('participants', e);}},boolAttrs:{multiple:true},attrs:{heading:'Participants'},state:'stwWcpZ'});
ec('div');
ec('div');
}let cndorRn = ! Is.empty(component.filterOptions.supervisors);
this.setState('st3XFeA', cndorRn);
if (cndorRn) { 
let eld3Gkl = eo('div','2hrf',null,`class`,`col-sm-3 filter-container`);
let elZL8Sd = eo('div','x6Zf',null,`class`,`filter-list`);
let cmpXmfZ = this._lc('ck6IdzIvK', {parent:component,props:{items:component.filterOptions.supervisors,value:component.filteredData.supervisors,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('supervisors', e);}},boolAttrs:{multiple:true},attrs:{heading:'Supervisors'},state:'st3XFeA'});
ec('div');
ec('div');
}let cnd9KUF = ! component.isInProjectPage && ! Is.empty(component.filterOptions.projects);
this.setState('stJ2kB9', cnd9KUF);
if (cnd9KUF) { 
let elmWrCU = eo('div','v0cf',null,`class`,`col-sm-3 filter-container`);
let elVJtwF = eo('div','zZZf',null,`class`,`filter-list`);
let cmp0ryU = this._lc('c1g7sUDpG', {parent:component,props:{items:component.filterOptions.projects,value:component.filteredData.projects,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('projects', e);}},boolAttrs:{multiple:true},attrs:{heading:'Projects'},state:'stJ2kB9'});
ec('div');
ec('div');
}let cnddKS2 = ! Is.empty(component.filterOptions.statuses);
this.setState('sti0LTY', cnddKS2);
if (cnddKS2) { 
let elLztiL = eo('div','gVYf',null,`class`,`col-sm-3 filter-container`);
let elNtyYX = eo('div','EjYf',null,`class`,`filter-list`);
let cmpyEzk = this._lc('cZBpYBHap', {parent:component,props:{items:component.filterOptions.statuses,value:component.filteredData.statuses,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('statuses', e);}},boolAttrs:{multiple:true},attrs:{heading:'Task Status'},state:'sti0LTY'});
ec('div');
ec('div');
}let cndLrQB = ! Is.empty(component.filterOptions.modules);
this.setState('stL44DE', cndLrQB);
if (cndLrQB) { 
let el_hdeU = eo('div','tMGf',null,`class`,`col-sm-3 filter-container`);
let elMV8_9 = eo('div','6Gkf',null,`class`,`filter-list`);
let cmptkZj = this._lc('cF776wYhK', {parent:component,props:{items:component.filterOptions.modules,value:component.filteredData.modules,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('modules', e);}},boolAttrs:{multiple:true},attrs:{heading:'Project Module'},state:'stL44DE'});
ec('div');
ec('div');
}let cndz0km = ! Is.empty(component.filterOptions.userStories);
this.setState('stUDFis', cndz0km);
if (cndz0km) { 
let el_ZgbV = eo('div','9Utf',null,`class`,`col-sm-3 filter-container`);
let elQ3ca9 = eo('div','jJ8f',null,`class`,`filter-list`);
let cmpti2a = this._lc('cQW4eVezM', {parent:component,props:{items:component.filterOptions.userStories,value:component.filteredData.userStories,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('userStories', e);}},boolAttrs:{multiple:true},attrs:{heading:'User Stories'},state:'stUDFis'});
ec('div');
ec('div');
}let cndc_G7 = ! Is.empty(component.filterOptions.priorities);
this.setState('stAY30c', cndc_G7);
if (cndc_G7) { 
let elByeiQ = eo('div','5T5f',null,`class`,`col-sm-3 filter-container`);
let elI_6GS = eo('div','cG7f',null,`class`,`filter-list`);
let cmpK5Ui = this._lc('cNTJLl1F7', {parent:component,props:{items:component.filterOptions.priorities,value:component.filteredData.priorities,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('priorities', e);}},boolAttrs:{multiple:true},attrs:{heading:'Priority'},state:'stAY30c'});
ec('div');
ec('div');
}ec('div');
ec('div');
}let cndyiYA = component.displayMode == 'board';
this.setState('st7GBox', cndyiYA);
let cndIPJV = cnd5wdt;
this.setState('st5a2oP', cndIPJV);
if (cndyiYA) { 
for (let i in component.statuses) {
let status = component.statuses[i]; 
 let iiRIpt = '0wx5TlA' + i;
let elQHRrc = eo('div','ISFgUgKXgwFc' + i+iiRIpt,null,`class`,`col-12 col-sm-6 col-md-4 col-lg-3`);
let elrXI2z = eo('div','mHBff'+iiRIpt,null,`class`,`tasks-group ${ status }`);
let elqbP08 = eo('h3','p2off'+iiRIpt,null,`class`,`m-b-2`);
let elg66Fs = eo('span','_kUff'+iiRIpt);
text(trans(status));
ec('span');
let elsWbOL = eo('span','jQcff'+iiRIpt,null,`class`,`ml-2`);
text(`(${ component.tasksBoardView[status] ? component.tasksBoardView[status].toArray().length : 0 })`);
ec('span');
let elnRmho = eo('span','T6rff'+iiRIpt,null,`title`,``,`class`,`material-icons float-right`);
text(component.statusIcon(status));
ec('span');

                    setTimeout(function () {
                        let $el = elnRmho;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.statusIconTitle(status)}`});
        ;
                    }, 20);                
                ec('h3');
let el_PTAV = eo('div','GWmff'+iiRIpt,null, eventListeners, {onready:[function(e) {var $el = this;component.draggable($el)}]},`class`,`tasks-list`,`data-status`,`${ status }`);
let cndS2ms = component.tasksBoardView[status];
this.setState('stXt6i5', cndS2ms);
if (cndS2ms) { 
for (let index in component.tasksBoardView[status].toArray()) {
let task = component.tasksBoardView[status].toArray()[index]; 
 let iiT048 = task.id + status+ index;
let elgBUSg = eo('div','Ff4jrZfnsBOZ' + index+iiRIpt+iiT048,null,`class`,`task simple-card m-b-1`,`data-id`,`${ task.id }`);
elgBUSg.cls = {item: task.canUserControl, undraggable: ! task.canUserControl};

            for (let className in elgBUSg.cls) {
                elgBUSg.classList.toggle(className, elgBUSg.cls[className]);
            }  
            let cndbuzL = task.isParticipant || task.isSupervisor || task.project && task.project.is.higherAuthority;
this.setState('stuoWev', cndbuzL);
let cndw2NP = !(cndbuzL);
this.setState('stcIVdH', cndw2NP);
if (cndbuzL) { 
let el17tPJ = eo('a','pPbff'+iiRIpt+iiT048,null,`href`,`${URLS.task(task)}`,`class`,`bold`);
text('#' + task.id + ' ' + task.title);
ec('a');
}else { 
let elq0qQw = eo('div','9oFff'+iiRIpt+iiT048,null,`class`,`bold`);
text(task.title);
ec('div');
}let cndNCpt = ['completed', 'autoFailed', 'failed'].includes(status) && (component.user.id == 1 || task.isSupervisor || component.project && component.project.isProjectManager) ;
this.setState('stZpOLc', cndNCpt);
if (cndNCpt) { 
let el9YfoV = eo('button','q8aff'+iiRIpt+iiT048,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmArchiving(task)}]},`title`,``,`class`,`float-right pink-text`);
let elZCQTJ = eo('i','r0Nff'+iiRIpt+iiT048,null,`class`,`${fas('archive') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el9YfoV;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Archive Task')}`});
        ;
                    }, 20);                
                }let cnd1NNZ = component.user.id  == 1 || task.isSupervisor || task.isParticipant || (component.project && component.project.isProjectManager);
this.setState('stb3Ebq', cnd1NNZ);
if (cnd1NNZ) { 
let eluDr3x = eo('button','o2bff'+iiRIpt+iiT048,null, eventListeners, {onclick:[function(e) {var $el = this;task.dropdown = ! task.dropdown; component.detectChanges();}]},`type`,`button`,`class`,` float-right`);
let elJLFGg = eo('i','jFsff'+iiRIpt+iiT048,null,`title`,``,`class`,`${fas('cog') + ' fa-spin icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elJLFGg;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Actions')}`});
        ;
                    }, 20);                
                ec('button');
}let elV3_r_ = eo('div','lPyff'+iiRIpt+iiT048,null,`title`,``,`class`,`participant bold`);
elV3_r_.cls = {'green-text': task.participant.id == component.user.id};

            for (let className in elV3_r_.cls) {
                elV3_r_.classList.toggle(className, elV3_r_.cls[className]);
            }  
            text(task.participant.name);
ec('div');

                    setTimeout(function () {
                        let $el = elV3_r_;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Participant')}`});
        ;
                    }, 20);                
                let cndUvBm = task.dropdown;
this.setState('st1SEC5', cndUvBm);
if (cndUvBm) { 
let elD3CDD = eo('div','CnQff'+iiRIpt+iiT048,null,`class`,`action-btns m-t-1`);
let elvFnCZ = eo('button','0jUff'+iiRIpt+iiT048,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-cyan`);
let el5LmyG = eo('i','J1fff'+iiRIpt+iiT048,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elvFnCZ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Tasks-board')}`});
        ;
                    }, 20);                
                let elc3wbL = eo('button','xAdff'+iiRIpt+iiT048,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-danger`);
let elSAlOl = eo('i','NwQff'+iiRIpt+iiT048,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elc3wbL;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Tasks-board')}`});
        ;
                    }, 20);                
                ec('div');
}let elDfXmC = eo('section','8XCff'+iiRIpt+iiT048,null,`class`,`footer`);
let elzcGDY = eo('i','NIEff'+iiRIpt+iiT048,null,`title`,``,`class`,`${fas('user-secret') + ' icon'}`);
elzcGDY.cls = {'green-text': task.isSupervisor};

            for (let className in elzcGDY.cls) {
                elzcGDY.classList.toggle(className, elzcGDY.cls[className]);
            }  
            ec('i');

                    setTimeout(function () {
                        let $el = elzcGDY;
                        
            true && tippyTooltip($el, {arrow:true,content:`${'<strong>Supervisors</strong><br>' + task.supervisors.map(supervisor => supervisor.name).join('<br/>')}`});
        ;
                    }, 20);                
                let cndkpyk = status == 'completed';
this.setState('stfImOX', cndkpyk);
if (cndkpyk) { 
let elWNRHb = eo('i','E0eff'+iiRIpt+iiT048,null,`class`,`${fas('check-double') + ' green-text ml-2 icon'}`);
ec('i');
}let cndqHbh = task.endsAt && ! ['completed'].includes(status);
this.setState('stt4foc', cndqHbh);
if (cndqHbh) { 
let cmpQqeU = this._lc('cicQv_Nwc', {parent:component,props:{tooltip:true,title:task.endsAtTimestamp - task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time',endsAt:task.endsAtTimestamp,startsAt:component.now},attrs:{title:`${task.endsAtTimestamp - task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time'}`,class:'ml-4 bold'},state:'stt4foc',insideLoop:true,index:"" +iiRIpt+iiT048});
}let cndDT3S = ! Is.empty(task.comments);
this.setState('strvxWD', cndDT3S);
if (cndDT3S) { 
let elXzfZ5 = eo('span','7trff'+iiRIpt+iiT048,null,`title`,``,`class`,`ml-3`);
let elMXJJB = eo('i','TpXff'+iiRIpt+iiT048,null,`class`,`${fas('comments') + ' gray-text mr-2 icon'}`);
ec('i');
let elrO9oy = eo('strong','tEQff'+iiRIpt+iiT048);
text(task.comments.length);
ec('strong');
ec('span');

                    setTimeout(function () {
                        let $el = elXzfZ5;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Task Comments')}`});
        ;
                    }, 20);                
                }let cndyL1L = (component.project || task.project) && ! component.isInProjectPage;
this.setState('stIgNmY', cndyL1L);
if (cndyL1L) { 
let elgocde = eo('a','JMoff'+iiRIpt+iiT048,null,`href`,`${URLS.project(component.project || task.project)}`,`title`,``,`class`,`ml-3 teal-text`);
let cnddJu1 = task.project.image;
this.setState('stJA46u', cnddJu1);
let cndplOv = !(cnddJu1);
this.setState('stVUUKL', cndplOv);
if (cnddJu1) { 
let elerUG1 = ev('img','Pccff'+iiRIpt+iiT048,null,`src`,`${task.project.image}`,`class`,`small circle`);
}else { 
let el6Imps = eo('i','yovff'+iiRIpt+iiT048,null,`class`,`${fas('suitcase') + ' icon'}`);
ec('i');
}ec('a');

                    setTimeout(function () {
                        let $el = elgocde;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.project ? component.project.name : task.project.name}`});
        ;
                    }, 20);                
                }let cndSJ6J = ! Is.empty(task.module);
this.setState('stcRmF5', cndSJ6J);
if (cndSJ6J) { 
let el9tbzj = eo('span','F8zff'+iiRIpt+iiT048,null,`title`,``,`class`,`ml-3`);
let eluZjOF = eo('i','2ZRff'+iiRIpt+iiT048,null,`class`,`${fas('cog') + ' lime-text mr-2 icon'}`);
ec('i');
let elNJ1zv = eo('span','xgMff'+iiRIpt+iiT048);
text(task.module.name);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = el9tbzj;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Module')}`});
        ;
                    }, 20);                
                }ec('section');
ec('div');
}
}ec('div');

                    setTimeout(function () {
                        let $el = el_PTAV;
                        component.draggable($el);
                    }, 20);                
                ec('div');
let cndlae1 = (component.project || component.user.id == 1) && Object.get(component.project, 'isHigherAuthority', '')  && status != 'autoFailed';
this.setState('st9kuHc', cndlae1);
if (cndlae1) { 
let el142v1 = eo('section','Eooff'+iiRIpt,null,`class`,`footer text-right m-b-2`);
let cndWM1V = ! component.openQuickForm[status];
this.setState('stOqu2q', cndWM1V);
if (cndWM1V) { 
let elnYfH4 = eo('button','1Piff'+iiRIpt,null, eventListeners, {onclick:[function(e) {var $el = this;component.openQuickForm[status] = true}]},`title`,``,`type`,`button`,`class`,`btn btn-info btn-circle`);
let elsGNww = eo('i','g7Sff'+iiRIpt,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elnYfH4;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Quick add')}`});
        ;
                    }, 20);                
                }let cndajCh = component.openQuickForm[status];
this.setState('stLKcQ6', cndajCh);
if (cndajCh) { 
let eldN9M9 = eo('form','UrSff'+iiRIpt,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.quickAdd($el)}]});

                if (! eldN9M9.formHandler) {
                    window.cfrmdlr = eldN9M9.formHandler = new FormHandler(eldN9M9, component);
                } else {
                    window.cfrmdlr = eldN9M9.formHandler;
                }
            let elT2inl = ev('input','GM0ff'+iiRIpt,null, eventListeners, {oninput:[function(e) {status = this.value;}]},`value`,`${fval(status)}`,`name`,`${(`status`).toInputName()}`,`type`,`hidden`);
elT2inl.value = fval(status);
let cndgss0 = component.project;
this.setState('stCV4uv', cndgss0);
let cndLROH = !(cndgss0);
this.setState('stNghtE', cndLROH);
if (cndgss0) { 
let el5TX9W = ev('input','QiPff'+iiRIpt,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el5TX9W.value = fval(component.project.id);
}let ellnZDZ = ev('input','GdWff'+iiRIpt,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return eldN9M9.formHandler.addError(`title`, 'required', trans('validation.required'));}return eldN9M9.formHandler.removeError(`title`);}]},`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Task Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
let cnddTlG = eldN9M9.formHandler.getError(`title`);
this.setState('stKQtX7', cnddTlG);
let cndfvp9 = !(cnddTlG);
this.setState('stiwSH7', cndfvp9);
if (cnddTlG) { 
let elESu0R = eo('div','My_ff'+iiRIpt,null,`class`,`alert alert-danger`);
text(eldN9M9.formHandler.getError(`title`));
ec('div');
}let eloEYuo = ev('input','MBlff'+iiRIpt,null, eventListeners, {oninput:[function(e) {component.user.id = this.value;}]},`value`,`${fval(component.user.id)}`,`name`,`${(`supervisors[]`).toInputName()}`,`type`,`hidden`);
eloEYuo.value = fval(component.user.id);
let cndpcRv = component.project;
this.setState('styiPrs', cndpcRv);
let cndE78k = !(cndpcRv);
this.setState('steuktE', cndE78k);
if (cndpcRv) { 
let cmpuFcY = this._lc('cbQ5SZ5ri', {parent:component,props:{value:component.participantId,required:true,items:component.participants},attrs:{name:`${(`participant`).toInputName()}`,heading:'Assignee'},state:'styiPrs',insideLoop:true,index:"" +iiRIpt});
}else { 
let cmpnr7_ = this._lc('cJWjSNcfg', {parent:component,props:{remoteSearch:true,value:component.participantId,required:true,lazyLoading:true,service:component.usersService},attrs:{name:`${(`participant`).toInputName()}`,query:'name',heading:'Assignee',required:''},state:'steuktE',insideLoop:true,index:"" +iiRIpt});
}let el8ZTaF = eo('div','k2Fff'+iiRIpt,null,`class`,`text-right m-t-1`);
let elZOKBA = eo('button','_reff'+iiRIpt,null, eventListeners, {onclick:[function(e) {var $el = this;component.openQuickForm[status] = false;}]}, boolAttrs, {disabled:component.isSubmitting},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-warning`);
let eldBjHa = eo('i','lO2ff'+iiRIpt,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elZOKBA;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('cancel')}`});
        ;
                    }, 20);                
                let elwjs9G = eo('button','bZ9ff'+iiRIpt,null, boolAttrs, {disabled:component.isSubmitting},`title`,``,`class`,`btn btn-circle btn-success`);
let elvT_Sp = eo('i','i7Yff'+iiRIpt,null,`class`,`${fas('check') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elwjs9G;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Create')}`});
        ;
                    }, 20);                
                ec('div');
ec('form');
}ec('section');
}ec('div');
}
let cndUKzp = ! Is.empty(component.archivedTasks);
this.setState('st5YZuk', cndUKzp);
if (cndUKzp) { 
let elyEoPX = eo('button','nWEf',null, eventListeners, {onclick:[function(e) {var $el = this;component.isViewingArchivedTasks = true}]},`class`,`col-12 col-sm-4 col-md-3 bold pink-text view-archived-btn`);
text(`View Archived Tasks (${ component.archivedTasks.length.format() })`);
ec('button');
}}else if (cndIPJV) { 
let elxu5Aj = eo('div',null,null,`class`,`tasks-list-view`);
let elhJjFg = eo('h3',null,null,`class`,`task-heading simple-card`);
text(`Tasks List (${component.tasksList.length})`);
ec('h3');
let elMzMwe = eo('table',null,null,`class`,`table buttoned simple-card`);
let elSGbCh = eo('thead');
let elehQOb = eo('tr');
let elpg6Cs = eo('th');
let elRwUZX = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('id')}]},`title`,``);
text(`#`);
ec('button');

                    setTimeout(function () {
                        let $el = elRwUZX;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort By ID')}`});
        ;
                    }, 20);                
                ec('th');
let ellZPMp = eo('th');
let elH5r_W = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('title')}]},`title`,``);
text(`Task`);
ec('button');

                    setTimeout(function () {
                        let $el = elH5r_W;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort By Title')}`});
        ;
                    }, 20);                
                ec('th');
let elL5hPX = eo('th');
let elaxsIk = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('progress.completed')}]},`title`,``);
text(`Progress`);
ec('button');

                    setTimeout(function () {
                        let $el = elaxsIk;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort By Progress')}`});
        ;
                    }, 20);                
                ec('th');
let cndioGc = ! component.isInProjectPage;
this.setState('stWwDcl', cndioGc);
if (cndioGc) { 
let elDtNBL = eo('th','e5pf');
text(`Project`);
ec('th');
}let elLKPx1 = eo('th',null,null,`title`,``);
let elASays = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isStatusSortOpened = !component.isStatusSortOpened}]});
text(`Status`);
ec('button');
let elZMfQr = eo('div',null,null,`class`,`dropdown-sort`);
let cndWH0D = component.isStatusSortOpened;
this.setState('stwevUy', cndWH0D);
if (cndWH0D) { 
let cmpAARn = this._lc('cu0VK5nqy', {parent:component,props:{items:component.filterOptions.statuses,searchable:false},events:{onselect:function(e) {let $el = this; component.sortObjects('status', '', e.value)}},state:'stwevUy'});
}ec('div');
ec('th');

                    setTimeout(function () {
                        let $el = elLKPx1;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort by status')}`});
        ;
                    }, 20);                
                let elmKob1 = eo('th',null,null,`title`,``);
text(`R Time`);
ec('th');

                    setTimeout(function () {
                        let $el = elmKob1;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remaining Time')}`});
        ;
                    }, 20);                
                let elIUzXi = eo('th',null,null,`title`,``);
let elF0FCk = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isPartSortOpened = !component.isPartSortOpened}]});
text(`Participant`);
ec('button');
let elclj2z = eo('div',null,null,`class`,`dropdown-sort`);
let cnd4htV = component.isPartSortOpened;
this.setState('stR1VXI', cnd4htV);
if (cnd4htV) { 
let cmpmlP6 = this._lc('cO1CLu50Z', {parent:component,props:{items:component.filterOptions.participants,searchable:false},events:{onselect:function(e) {let $el = this; component.sortObjects('participant', 'id', e.value)}},state:'stR1VXI'});
}ec('div');
ec('th');

                    setTimeout(function () {
                        let $el = elIUzXi;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort by participant')}`});
        ;
                    }, 20);                
                let elj4aUc = eo('th',null,null,`title`,``);
let elng7LU = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isSuperSortOpened = !component.isSuperSortOpened}]});
text(`Supervisors`);
ec('button');
let elBRZpH = eo('div',null,null,`class`,`dropdown-sort`);
let cndKvKE = component.isSuperSortOpened;
this.setState('stxCxB8', cndKvKE);
if (cndKvKE) { 
let cmp2SEI = this._lc('c5RMUR2tg', {parent:component,props:{items:component.filterOptions.supervisors,searchable:false},events:{onselect:function(e) {let $el = this; component.sortObjects('supervisors', 'id', e.value)}},state:'stxCxB8'});
}ec('div');
ec('th');

                    setTimeout(function () {
                        let $el = elj4aUc;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort by Supervisor')}`});
        ;
                    }, 20);                
                let elWJ5ij = eo('th',null,null,`title`,``,`class`,`text-center`);
let elFX1Ei = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isModuleSortOpened = !component.isModuleSortOpened}]});
text(`Module`);
ec('button');
let elnnYdQ = eo('div',null,null,`class`,`dropdown-sort`);
let cndvEs6 = component.isModuleSortOpened;
this.setState('stVJTvy', cndvEs6);
if (cndvEs6) { 
let cmpQc6s = this._lc('cISPhGSSo', {parent:component,props:{items:component.filterOptions.modules,searchable:false},events:{onselect:function(e) {let $el = this; component.sortObjects('module', 'id', e.value)}},state:'stVJTvy'});
}ec('div');
ec('th');

                    setTimeout(function () {
                        let $el = elWJ5ij;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort by Module')}`});
        ;
                    }, 20);                
                let elHXmRe = eo('th',null,null,`title`,``,`class`,`text-center`);
let elCBxYZ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isPrioritySortOpened = !component.isPrioritySortOpened}]});
text(`Priority`);
ec('button');
let elB3C4c = eo('div',null,null,`class`,`dropdown-sort`);
let cndg9eX = component.isPrioritySortOpened;
this.setState('stzlbZd', cndg9eX);
if (cndg9eX) { 
let cmp4WWu = this._lc('cESoh13Rk', {parent:component,props:{items:component.filterOptions.priorities,searchable:false},events:{onselect:function(e) {let $el = this; component.sortObjects('priority', '', e.value)}},state:'stzlbZd'});
}ec('div');
ec('th');

                    setTimeout(function () {
                        let $el = elHXmRe;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort by Priority')}`});
        ;
                    }, 20);                
                let elN6h_7 = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let el_p8ab = eo('tbody');
for (let index in component.tasksList) {
let task = component.tasksList[index]; 
 let iioTg4 = task.id+ index;
let elzb5Oz = eo('tr','tKiwGkF1qk0g' + index+iioTg4);
let el2vlPK = eo('td','ymfff'+iioTg4);
text(task.id);
ec('td');
let elcjkS9 = eo('td','jO5ff'+iioTg4);
let elNKRvk = eo('a','ahOff'+iioTg4,null,`href`,`${URLS.task(task)}`,`title`,``,`class`,`title`);
text(task.title.readMoreChars(30));
ec('a');

                    setTimeout(function () {
                        let $el = elNKRvk;
                        
            true && tippyTooltip($el, {arrow:true,content:`${task.title}`});
        ;
                    }, 20);                
                let cndi9Ud = ! Is.empty(task.comments);
this.setState('sttLFpJ', cndi9Ud);
if (cndi9Ud) { 
let elUTFjG = eo('span','RUJff'+iioTg4,null,`title`,``,`class`,`ml-3`);
let elwUFCm = eo('i','57Kff'+iioTg4,null,`class`,`${fas('comments') + ' gray-text mr-2 icon'}`);
ec('i');
let el3WSD3 = eo('strong','0pNff'+iioTg4);
text(task.comments.length);
ec('strong');
ec('span');

                    setTimeout(function () {
                        let $el = elUTFjG;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Task Comments')}`});
        ;
                    }, 20);                
                }ec('td');
let elIi3FL = eo('td','EJFff'+iioTg4);
let cndDaw9 = task.progress;
this.setState('st2pVSn', cndDaw9);
if (cndDaw9) { 
let elk6Cpb = eo('div','0kGff'+iioTg4,null,`title`,``,`class`,`task-progress`);
let elslObv = eo('div','KrHff'+iioTg4,null, 'style', {width:`${task.progress.percentage + '%'}`},`class`,`completed`);
ec('div');
let elet7_L = eo('div','BbIff'+iioTg4,null,`class`,`value`);
text(task.progress.completed + '/' + task.progress.total);
ec('div');
ec('div');

                    setTimeout(function () {
                        let $el = elk6Cpb;
                        
            true && tippyTooltip($el, {arrow:true,content:`${Math.floor(task.progress.percentage) + '% Completed'}`});
        ;
                    }, 20);                
                }ec('td');
let cndaTX_ = ! component.isInProjectPage;
this.setState('stRlDQ4', cndaTX_);
if (cndaTX_) { 
let elJdjrc = eo('td','OQ1ff'+iioTg4);
let cndxD7M = component.project || task.project;
this.setState('stsLShR', cndxD7M);
let cndMFnj = !(cndxD7M);
this.setState('stk777U', cndMFnj);
if (cndxD7M) { 
let elDS2JU = eo('a','ZlJff'+iioTg4,null,`href`,`${URLS.project(component.project || task.project)}`,`title`,``,`class`,`ml-3`);
let cndk0JK = task.project.image;
this.setState('stBQAhF', cndk0JK);
let cndETqR = !(cndk0JK);
this.setState('stjfutQ', cndETqR);
if (cndk0JK) { 
let elzhtMo = ev('img','n6tff'+iioTg4,null,`src`,`${task.project.image}`,`class`,`small circle`);
}else { 
let elvx5rY = eo('i','ViNff'+iioTg4,null,`class`,`${fas('suitcase') + ' icon'}`);
ec('i');
}ec('a');

                    setTimeout(function () {
                        let $el = elDS2JU;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.project ? component.project.name : task.project.name}`});
        ;
                    }, 20);                
                }else { 
let elCRMAg = eo('strong','MLYff'+iioTg4);
text(`N/a`);
ec('strong');
}ec('td');
}let el183Ld = eo('td','nn8ff'+iioTg4,null,`class`,`status-column`);
let el9cgdY = eo('span','qxiff'+iioTg4,null, eventListeners, {onclick:[function(e) {var $el = this;task.canUserControl ? task.openStatusChanger = ! task.openStatusChanger : null;}]});
let elmMbNC = eo('span','KRVff'+iioTg4,null,`class`,`badge`);
elmMbNC.cls = taskStatus(task);

            for (let className in elmMbNC.cls) {
                elmMbNC.classList.toggle(className, elmMbNC.cls[className]);
            }  
            text(task.status);
ec('span');
let cnd9t8a = task.canUserControl;
this.setState('stOj1k_', cnd9t8a);
if (cnd9t8a) { 
let elWDz0O = eo('i','yUDff'+iioTg4,null,`title`,``,`class`,`${fas('caret-down') + ' icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elWDz0O;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Change Task Status')}`});
        ;
                    }, 20);                
                }ec('span');
let cnds8p0 = task.openStatusChanger;
this.setState('stDNEkY', cnds8p0);
if (cnds8p0) { 
let elebQKD = eo('div','KsMff'+iioTg4,null,`class`,`status-changer`);
let cmpfrA1 = this._lc('c803lVeJP', {parent:component,props:{items:getAllowedTaskStatuses(task),searchable:false,except:task.status},events:{onselect:function(e) {let $el = this; component.updateTaskStatus(task, e.value)}},state:'stDNEkY',insideLoop:true,index:"" +iioTg4});
ec('div');
}ec('td');
let elA7efn = eo('td','xboff'+iioTg4);
let cndDhl7 = task.status == 'completed';
this.setState('std7DHP', cndDhl7);
let cndOnzH = task.endsAtTimestamp && ! ['completed', 'archived'].includes(task.status);
this.setState('st6TziK', cndOnzH);
if (cndDhl7) { 
let elLt2bh = eo('div','86Vff'+iioTg4);
let elG4kfx = eo('i','kB1ff'+iioTg4,null,`title`,``,`class`,`${fas('check-double') + ' green-text icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elG4kfx;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Completed')}`});
        ;
                    }, 20);                
                ec('div');
}else if (cndOnzH) { 
let elyIGUo = eo('span','9ocff'+iioTg4,null,`title`,``);
let elbTfvE = eo('i','XLQff'+iioTg4,null,`class`,`${fas('clock') + ' mr-2 icon'}`);
ec('i');
let cmp2M0H = this._lc('cX2r_fVSH', {parent:component,props:{startsAt:task.startsAtTimestamp,endsAt:task.endsAtTimestamp},attrs:{class:'bold'},state:'st6TziK',insideLoop:true,index:"" +iioTg4});
ec('span');

                    setTimeout(function () {
                        let $el = elyIGUo;
                        
            true && tippyTooltip($el, {arrow:true,content:`${task.endsAtTimestamp - task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time'}`});
        ;
                    }, 20);                
                }ec('td');
let elDJeaI = eo('td','ph3ff'+iioTg4,null,`class`,`text-center`);
let elOucuS = ev('img','J2eff'+iioTg4,null,`src`,`${task.participant.image}`,`title`,`${task.participant.name}`,`class`,`small mr-2 circle`,`alt`,`${task.participant.name}`);

                    setTimeout(function () {
                        let $el = elOucuS;
                        
            true && tippyTooltip($el, {arrow:true,content:`${task.participant.name}`});
        ;
                    }, 20);                
                ec('td');
let elGt2rH = eo('td','Ts5ff'+iioTg4,null,`class`,`text-center`);
for (let i in task.supervisors) {
let supervisor = task.supervisors[i]; 
 let iijytP = 'JvFzTZZ' + i;
let elGiRL1 = eo('span','AKS1MMdEbOAL' + i+iioTg4+iijytP,null,`class`,`mx-1`);
let elnTqlV = ev('img','u7Uff'+iioTg4+iijytP,null,`src`,`${supervisor.image}`,`title`,`${supervisor.name}`,`class`,`small mr-2 circle`,`alt`,`${supervisor.name}`);

                    setTimeout(function () {
                        let $el = elnTqlV;
                        
            true && tippyTooltip($el, {arrow:true,content:`${supervisor.name}`});
        ;
                    }, 20);                
                ec('span');
}
ec('td');
let elk4nl_ = eo('th','Gifff'+iioTg4,null,`class`,`text-center v-middle gray-text`);
let cndO_X5 = Object.get(task.module, 'parent.name', '');
this.setState('stQwwpJ', cndO_X5);
if (cndO_X5) { 
let elunrUV = eo('span','hERff'+iioTg4);
text(task.module.parent.name);
ec('span');
let elj761A = eo('i','Byyff'+iioTg4,null,`class`,`${fas('angle-double-right') + ' mx-2 icon'}`);
ec('i');
}let elOG_t4 = eo('span','id2ff'+iioTg4);
text(Object.get(task.module, 'name', ''));
ec('span');
ec('th');
let elYn3Fu = eo('th','4oEff'+iioTg4,null,`class`,`text-center v-middle gray-text`);
let cnd3SAy = task.priority;
this.setState('stTLdcF', cnd3SAy);
if (cnd3SAy) { 
let elkrszY = eo('span','KgHff'+iioTg4);
text(task.priority);
ec('span');
}ec('th');
let elgjfcE = eo('td','EM4ff'+iioTg4);
let cndpQ3m = true;
this.setState('stEmGlD', cndpQ3m);
if (cndpQ3m) { 
let elPNbuu = eo('button','UB0ff'+iioTg4,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-cyan`);
let eldwQqA = eo('i','a17ff'+iioTg4,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elPNbuu;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Tasks-board')}`});
        ;
                    }, 20);                
                let el5cHOe = eo('button','xyoff'+iioTg4,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elDX57r = eo('i','mqtff'+iioTg4,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el5cHOe;
                        
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
let elRq6LM = eo('div',null,null,`class`,`w-100`);
let elSrxwU = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isViewingArchivedTasks = false}]},`class`,`m-b-2 bold btn btn-success float-right`);
text(`Back To
        Board`);
ec('button');
let elEwCcd = eo('table',null,null,`class`,`table table-bordered`);
let eltXxfy = eo('thead');
let elgK58i = eo('tr');
let elyn_xy = eo('th');
text(`Task`);
ec('th');
let elxFEd1 = eo('th');
text(`Participant`);
ec('th');
ec('tr');
ec('thead');
let elzVEck = eo('tbody');
for (let i in component.archivedTasks) {
let task = component.archivedTasks[i]; 
 let iiSwtI = 'G2gzI2T' + i;
let elQom3p = eo('tr','WNAYfbs0bmOX' + i+iiSwtI);
let eljZpTZ = eo('td','g6iff'+iiSwtI);
let ellDGZk = eo('a','UQyff'+iiSwtI,null,`href`,`${URLS.task(task)}`);
text(task.title);
ec('a');
ec('td');
let el_YV5w = eo('td','uBxff'+iiSwtI);
let elqlugd = ev('img','1DMff'+iiSwtI,null,`src`,`${task.participant.image}`,`class`,`circle small`,`title`,`${task.participant.name}`,`alt`,`${task.participant.name}`);
let elr6I4r = eo('span','j52ff'+iiSwtI,null,`class`,`ml-2 bold`);
text(task.participant.name);
ec('span');
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
}}ec('div');
let cndY9gX = component.modalIsOpened;
this.setState('stv5_EY', cndY9gX);
if (cndY9gX) { 
component.modal = this._lc('c1dnBiVqL', {parent:component,props:{displayStatusList:component.record.id,participants:component.participants,supervisors:component.supervisors,project:component.project,task:component.record},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null},onsave:function(e) {let $el = this; component.adjustTaskResponse(e)}},state:'stv5_EY'});
}let cndPv9g = component.confirmDelete;
this.setState('stacWdV', cndPv9g);
if (cndPv9g) { 
let cmpFpuN = this._lc('cwsm0p6pu', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stacWdV'});
}let cndnqF6 = component.confirmingArchiving;
this.setState('stNuhg8', cndnqF6);
if (cndnqF6) { 
let cmphpaa = this._lc('cxqphIVYA', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmingArchiving = null},onconfirm:function(e) {let $el = this; component.archive()}},state:'stNuhg8'});
}
                    this.isReadyToGo();
                }
        });