_Component({
                selector: 'tasks-board',
                c: 'TasksBoard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','switchTo','isViewingArchivedTasks','displayMode','modalIsOpened','record','participants','supervisors','project','adjustTaskResponse','confirmDelete','remove','confirmingArchiving','archive','filterOptions','filteredData','filterBy','isInProjectPage','statuses','tasksBoardView','statusIconTitle','statusIcon','draggable','user','confirmArchiving','detectChanges','openModal','confirmRemoving','now','openQuickForm','quickAdd','participantId','usersService','isSubmitting','archivedTasks','tasksList','sortTasksBy','updateTaskStatus'],
                children: {clUkCzsiL:'flk-spinner',co5VRpF8g:'flk-dropdown-list',crFueexds:'flk-dropdown-list',cZJjbEhYB:'flk-dropdown-list',ccQWj0LGL:'flk-dropdown-list',c3SEMm0Bq:'flk-dropdown-list',cP6onRFx8:'flk-dropdown-list',cUSROs3ZW:'flk-dropdown-list',cw8uSQ9By:'flk-time-remaining',cX3JgQnmL:'flk-dropdown-list',cfdxjXNGc:'flk-dropdown-list',cFJAqo2bD:'flk-dropdown-list',cP9oSEAxC:'flk-time-remaining',c7a_87A9V:'task-modal',cj2CFuglQ:'flk-alert',cG6kbnfwm:'flk-alert'},
                render: function (component) {
                    let elLQ2kO = eo('div',null,null,`class`,`row m-t-2 tasks-board`);
let cndih0g = component.isLoading;
this.setState('stXsQgn', cndih0g);
let cnddwHU = !(cndih0g);
this.setState('stcbvF1', cnddwHU);
if (cndih0g) { 
let cmpzwE9 = this._lc('clUkCzsiL', {parent:component,state:'stXsQgn'});
}else { 
let elLB2uY = eo('div',null,null,`class`,`style-switcher text-right m-y-2 col-12`);
let elBxMCU = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.switchTo('board')}]},`title`,``,`class`,`btn btn-sm btn-cyan`);
let elSH0bi = eo('i',null,null,`class`,`${fas('th-large')} icon fa-2x`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elBxMCU;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Board Mode')}`});
        ;
                    }, 20);                
                let el2qGXf = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.switchTo('list')}]},`title`,``,`class`,`btn btn-sm btn-purple`);
let el0mPW3 = eo('i',null,null,`class`,`${fas('th-list')} icon fa-2x`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el2qGXf;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('List Mode')}`});
        ;
                    }, 20);                
                ec('div');
let cndFNqJ = ! component.isViewingArchivedTasks;
this.setState('stbfBP5', cndFNqJ);
let cndXC42 = !(cndFNqJ);
this.setState('stmDkSw', cndXC42);
if (cndFNqJ) { 
let elAy9Zv = eo('div','nZwf',null,`class`,`row w-100`);
let cndyBdl = component.displayMode == 'list';
this.setState('stzwllG', cndyBdl);
let cndkUr6 = component.displayMode == 'list';
this.setState('st1OQ8f', cndkUr6);
if (cndyBdl) { 
let eluh4hG = eo('div','tQhf',null,`class`,`simple-card m-b-2 col-12 tasks-list-filter`);
let elmVixM = eo('div','77lf',null,`class`,`row`);
let cndBSkm = ! Is.empty(component.filterOptions.participants);
this.setState('stmwsmG', cndBSkm);
if (cndBSkm) { 
let elVNFzE = eo('div','cb9f',null,`class`,`col-sm-3 filter-container`);
let el2MktS = eo('div','vnIf',null,`class`,`filter-list`);
let cmpQKf_ = this._lc('co5VRpF8g', {parent:component,props:{items:component.filterOptions.participants,value:component.filteredData.participants,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('participants', e);}},boolAttrs:{multiple:true},attrs:{heading:'Participants'},state:'stmwsmG'});
ec('div');
ec('div');
}let cndRRLL = ! Is.empty(component.filterOptions.supervisors);
this.setState('str814U', cndRRLL);
if (cndRRLL) { 
let elTDFxx = eo('div','gpkf',null,`class`,`col-sm-3 filter-container`);
let elSuFFD = eo('div','MNHf',null,`class`,`filter-list`);
let cmpEQVB = this._lc('crFueexds', {parent:component,props:{items:component.filterOptions.supervisors,value:component.filteredData.supervisors,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('supervisors', e);}},boolAttrs:{multiple:true},attrs:{heading:'Supervisors'},state:'str814U'});
ec('div');
ec('div');
}let cndZU9x = ! component.isInProjectPage && ! Is.empty(component.filterOptions.projects);
this.setState('stjnBEd', cndZU9x);
if (cndZU9x) { 
let elO23vc = eo('div','caVf',null,`class`,`col-sm-3 filter-container`);
let elIOGGv = eo('div','081f',null,`class`,`filter-list`);
let cmpDc2Y = this._lc('cZJjbEhYB', {parent:component,props:{items:component.filterOptions.projects,value:component.filteredData.projects,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('projects', e);}},boolAttrs:{multiple:true},attrs:{heading:'Projects'},state:'stjnBEd'});
ec('div');
ec('div');
}let cndC43k = ! Is.empty(component.filterOptions.statuses);
this.setState('stIqk0W', cndC43k);
if (cndC43k) { 
let elvURO6 = eo('div','TgAf',null,`class`,`col-sm-3 filter-container`);
let eluBYmW = eo('div','FO7f',null,`class`,`filter-list`);
let cmpBSq7 = this._lc('ccQWj0LGL', {parent:component,props:{items:component.filterOptions.statuses,value:component.filteredData.statuses,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('statuses', e);}},boolAttrs:{multiple:true},attrs:{heading:'Task Status'},state:'stIqk0W'});
ec('div');
ec('div');
}let cndruag = ! Is.empty(component.filterOptions.modules);
this.setState('stOTb43', cndruag);
if (cndruag) { 
let elD84PT = eo('div','yCgf',null,`class`,`col-sm-3 filter-container`);
let elyXC4p = eo('div','gCnf',null,`class`,`filter-list`);
let cmpJXu0 = this._lc('c3SEMm0Bq', {parent:component,props:{items:component.filterOptions.modules,value:component.filteredData.modules,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('modules', e);}},boolAttrs:{multiple:true},attrs:{heading:'Project Module'},state:'stOTb43'});
ec('div');
ec('div');
}let cndco7T = ! Is.empty(component.filterOptions.userStories);
this.setState('stkc1kO', cndco7T);
if (cndco7T) { 
let elpt5eg = eo('div','xxyf',null,`class`,`col-sm-3 filter-container`);
let elre1vD = eo('div','xFif',null,`class`,`filter-list`);
let cmp17_S = this._lc('cP6onRFx8', {parent:component,props:{items:component.filterOptions.userStories,value:component.filteredData.userStories,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('userStories', e);}},boolAttrs:{multiple:true},attrs:{heading:'User Stories'},state:'stkc1kO'});
ec('div');
ec('div');
}let cndMoaQ = ! Is.empty(component.filterOptions.priorities);
this.setState('stnNpc0', cndMoaQ);
if (cndMoaQ) { 
let elpTYkF = eo('div','j1Ef',null,`class`,`col-sm-3 filter-container`);
let elJgVZS = eo('div','oi4f',null,`class`,`filter-list`);
let cmpTkxP = this._lc('cUSROs3ZW', {parent:component,props:{items:component.filterOptions.priorities,value:component.filteredData.priorities,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('priorities', e);}},boolAttrs:{multiple:true},attrs:{heading:'Priority'},state:'stnNpc0'});
ec('div');
ec('div');
}ec('div');
ec('div');
}let cnduQbh = component.displayMode == 'board';
this.setState('stW53w2', cnduQbh);
let cndPcHB = cndkUr6;
this.setState('styzYZX', cndPcHB);
if (cnduQbh) { 
for (let i in component.statuses) {
let status = component.statuses[i]; 
 let iin7r8 = '_zkzmao' + i;
let el_KnjA = eo('div','wmYavLKqj4No' + i+iin7r8,null,`class`,`col-12 col-sm-6 col-md-4 col-lg-3`);
let eloKZNI = eo('div','GsTff'+iin7r8,null,`class`,`tasks-group ${ status }`);
let ellXxgS = eo('h3','Iutff'+iin7r8,null,`class`,`m-b-2`);
let elBTMAQ = eo('span','7OQff'+iin7r8);
text(trans(status));
ec('span');
let elDp43H = eo('span','3Wwff'+iin7r8,null,`class`,`ml-2`);
text(`(${ component.tasksBoardView[status] ? component.tasksBoardView[status].toArray().length : 0 })`);
ec('span');
let elrYD0d = eo('span','A5qff'+iin7r8,null,`title`,``,`class`,`material-icons float-right`);
text(component.statusIcon(status));
ec('span');

                    setTimeout(function () {
                        let $el = elrYD0d;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.statusIconTitle(status)}`});
        ;
                    }, 20);                
                ec('h3');
let elKOLXO = eo('div','kL6ff'+iin7r8,null, eventListeners, {onready:[function(e) {var $el = this;component.draggable($el)}]},`class`,`tasks-list`,`data-status`,`${ status }`);
let cndjEzA = component.tasksBoardView[status];
this.setState('st7vERw', cndjEzA);
if (cndjEzA) { 
for (let index in component.tasksBoardView[status].toArray()) {
let task = component.tasksBoardView[status].toArray()[index]; 
 let iip0MR = task.id + status+ index;
let elPAVBK = eo('div','6wukGM18NJd1' + index+iin7r8+iip0MR,null,`class`,`task simple-card m-b-1 ${cls({item: task.canUserControl, undraggable: ! task.canUserControl})}`,`data-id`,`${ task.id }`);
let cnd5OJ8 = task.isParticipant || task.isSupervisor || task.project && task.project.is.higherAuthority;
this.setState('stP4RQa', cnd5OJ8);
let cndohsS = !(cnd5OJ8);
this.setState('stuNXNm', cndohsS);
if (cnd5OJ8) { 
let elJLCgh = eo('a','UiTff'+iin7r8+iip0MR,null,`href`,`${URLS.task(task)}`,`class`,`bold`);
text('#' + task.id + ' ' + task.title);
ec('a');
}else { 
let elEFgFi = eo('div','jkkff'+iin7r8+iip0MR,null,`class`,`bold`);
text(task.title);
ec('div');
}let cndttt3 = ['completed', 'autoFailed', 'failed'].includes(status) && (component.user.id == 1 || task.isSupervisor || component.project && component.project.isProjectManager) ;
this.setState('stwvhzy', cndttt3);
if (cndttt3) { 
let elMMfAD = eo('button','exXff'+iin7r8+iip0MR,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmArchiving(task)}]},`title`,``,`class`,`float-right pink-text`);
let eltoup5 = eo('i','CESff'+iin7r8+iip0MR,null,`class`,`${fas('archive')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elMMfAD;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Archive Task')}`});
        ;
                    }, 20);                
                }let cndUPcQ = component.user.id  == 1 || task.isSupervisor || task.isParticipant || (component.project && component.project.isProjectManager);
this.setState('st1hjv1', cndUPcQ);
if (cndUPcQ) { 
let elMZnSc = eo('button','zAsff'+iin7r8+iip0MR,null, eventListeners, {onclick:[function(e) {var $el = this;task.dropdown = ! task.dropdown; component.detectChanges();}]},`type`,`button`,`class`,` float-right`);
let elMOC2u = eo('i','1d1ff'+iin7r8+iip0MR,null,`title`,``,`class`,`${fas('cog')} fa-spin icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elMOC2u;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Actions')}`});
        ;
                    }, 20);                
                ec('button');
}let elqFXBE = eo('div','GMrff'+iin7r8+iip0MR,null,`class`,`participant bold ${cls({'green-text': task.participant.id == component.user.id})}`,`title`,``);
text(task.participant.name);
ec('div');

                    setTimeout(function () {
                        let $el = elqFXBE;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Participant')}`});
        ;
                    }, 20);                
                let cnd9SnW = task.dropdown;
this.setState('st07b0P', cnd9SnW);
if (cnd9SnW) { 
let elD53JK = eo('div','YUAff'+iin7r8+iip0MR,null,`class`,`action-btns m-t-1`);
let el4CJ1g = eo('button','Kxvff'+iin7r8+iip0MR,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-cyan`);
let elR633G = eo('i','SPHff'+iin7r8+iip0MR,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el4CJ1g;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Tasks-board')}`});
        ;
                    }, 20);                
                let elineOP = eo('button','243ff'+iin7r8+iip0MR,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-danger`);
let elZLaav = eo('i','QVSff'+iin7r8+iip0MR,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elineOP;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Tasks-board')}`});
        ;
                    }, 20);                
                ec('div');
}let elRqcVb = eo('section','tdVff'+iin7r8+iip0MR,null,`class`,`footer`);
let el9445r = eo('i','6Fwff'+iin7r8+iip0MR,null,`title`,``,`class`,`${fas('user-secret')} icon  ${cls({'green-text': task.isSupervisor})}`);
ec('i');

                    setTimeout(function () {
                        let $el = el9445r;
                        
            true && tippyTooltip($el, {arrow:true,content:`${'<strong>Supervisors</strong><br>' + task.supervisors.map(supervisor => supervisor.name).join('<br/>')}`});
        ;
                    }, 20);                
                let cndaB4F = status == 'completed';
this.setState('stGqkPO', cndaB4F);
if (cndaB4F) { 
let elC8bpE = eo('i','kYaff'+iin7r8+iip0MR,null,`class`,`${fas('check-double')} green-text ml-2 icon`);
ec('i');
}let cnd8Oki = task.endsAt && ! ['completed'].includes(status);
this.setState('stUpnbr', cnd8Oki);
if (cnd8Oki) { 
let cmpR8TA = this._lc('cw8uSQ9By', {parent:component,props:{tooltip:true,title:task.endsAtTimestamp - task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time',endsAt:task.endsAtTimestamp,startsAt:component.now},attrs:{title:`${task.endsAtTimestamp - task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time'}`,class:'ml-4 bold'},state:'stUpnbr',insideLoop:true,index:"" +iin7r8+iip0MR});
}let cnd1uiC = ! Is.empty(task.comments);
this.setState('stJfmmI', cnd1uiC);
if (cnd1uiC) { 
let el4c0Dm = eo('span','eUKff'+iin7r8+iip0MR,null,`title`,``,`class`,`ml-3`);
let elnRgC4 = eo('i','D3tff'+iin7r8+iip0MR,null,`class`,`${fas('comments')} gray-text mr-2 icon`);
ec('i');
let el3XOjv = eo('strong','tsCff'+iin7r8+iip0MR);
text(task.comments.length);
ec('strong');
ec('span');

                    setTimeout(function () {
                        let $el = el4c0Dm;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Task Comments')}`});
        ;
                    }, 20);                
                }let cndcQgC = (component.project || task.project) && ! component.isInProjectPage;
this.setState('stkusS1', cndcQgC);
if (cndcQgC) { 
let elozitU = eo('a','Ql6ff'+iin7r8+iip0MR,null,`href`,`${URLS.project(component.project || task.project)}`,`title`,``,`class`,`ml-3 teal-text`);
let cndu7fU = task.project.image;
this.setState('strxNTV', cndu7fU);
let cndMchG = !(cndu7fU);
this.setState('stqEiHv', cndMchG);
if (cndu7fU) { 
let elcUMn5 = ev('img','71Zff'+iin7r8+iip0MR,null,`src`,`${task.project.image}`,`class`,`small circle`);
}else { 
let elSqqUx = eo('i','TQVff'+iin7r8+iip0MR,null,`class`,`${fas('suitcase')} icon`);
ec('i');
}ec('a');

                    setTimeout(function () {
                        let $el = elozitU;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.project ? component.project.name : task.project.name}`});
        ;
                    }, 20);                
                }let cndFdOF = ! Is.empty(task.module);
this.setState('st4HN8i', cndFdOF);
if (cndFdOF) { 
let elVgnBW = eo('span','traff'+iin7r8+iip0MR,null,`title`,``,`class`,`ml-3`);
let elC5yZ9 = eo('i','E4qff'+iin7r8+iip0MR,null,`class`,`${fas('cog')} lime-text mr-2 icon`);
ec('i');
let el0DbYl = eo('span','Qcoff'+iin7r8+iip0MR);
text(task.module.name);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elVgnBW;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Module')}`});
        ;
                    }, 20);                
                }ec('section');
ec('div');
}
}ec('div');

                    setTimeout(function () {
                        let $el = elKOLXO;
                        component.draggable($el);
                    }, 20);                
                ec('div');
let cndfklI = (component.project || component.user.id == 1) && Object.get(component.project, 'isHigherAuthority', '')  && status != 'autoFailed';
this.setState('stbumDy', cndfklI);
if (cndfklI) { 
let elFbR7q = eo('section','q4dff'+iin7r8,null,`class`,`footer text-right m-b-2`);
let cndEXtD = ! component.openQuickForm[status];
this.setState('stClqMO', cndEXtD);
if (cndEXtD) { 
let elKvPVJ = eo('button','MJhff'+iin7r8,null, eventListeners, {onclick:[function(e) {var $el = this;component.openQuickForm[status] = true}]},`title`,``,`type`,`button`,`class`,`btn btn-info btn-circle`);
let elv9n9g = eo('i','Jedff'+iin7r8,null,`class`,`${fas('plus')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elKvPVJ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Quick add')}`});
        ;
                    }, 20);                
                }let cndg3Ty = component.openQuickForm[status];
this.setState('stGWs0p', cndg3Ty);
if (cndg3Ty) { 
let elEYChg = eo('form','6Xlff'+iin7r8,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.quickAdd($el)}]});

                if (! elEYChg.formHandler) {
                    window.cfrmdlr = elEYChg.formHandler = new FormHandler(elEYChg, component);
                } else {
                    window.cfrmdlr = elEYChg.formHandler;
                }
            let elbebAK = ev('input','l0Vff'+iin7r8,null, eventListeners, {oninput:[function(e) {status = this.value;}]},`value`,`${fval(status)}`,`name`,`${(`status`).toInputName()}`,`type`,`hidden`);
elbebAK.value = fval(status);
let cndTiVl = component.project;
this.setState('stUZVxz', cndTiVl);
let cnda_Cw = !(cndTiVl);
this.setState('st7SLbs', cnda_Cw);
if (cndTiVl) { 
let elpMgvT = ev('input','Anrff'+iin7r8,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elpMgvT.value = fval(component.project.id);
}let elOhLU2 = ev('input','dBWff'+iin7r8,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elEYChg.formHandler.addError(`title`, 'required', trans('validation.required'));}return elEYChg.formHandler.removeError(`title`);}]},`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Task Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
let cndMYOM = elEYChg.formHandler.getError(`title`);
this.setState('stw5uAU', cndMYOM);
let cndY388 = !(cndMYOM);
this.setState('stTBrZ1', cndY388);
if (cndMYOM) { 
let el129gl = eo('div','Sumff'+iin7r8,null,`class`,`alert alert-danger`);
text(elEYChg.formHandler.getError(`title`));
ec('div');
}let elxEi0p = ev('input','iBxff'+iin7r8,null, eventListeners, {oninput:[function(e) {component.user.id = this.value;}]},`value`,`${fval(component.user.id)}`,`name`,`${(`supervisors[]`).toInputName()}`,`type`,`hidden`);
elxEi0p.value = fval(component.user.id);
let cndBnqT = component.project;
this.setState('stYlPhB', cndBnqT);
let cndhBKb = !(cndBnqT);
this.setState('st9r8OO', cndhBKb);
if (cndBnqT) { 
let cmp9xY8 = this._lc('cX3JgQnmL', {parent:component,props:{value:component.participantId,required:true,items:component.participants},attrs:{name:`${(`participant`).toInputName()}`,heading:'Assignee'},state:'stYlPhB',insideLoop:true,index:"" +iin7r8});
}else { 
let cmpz_TX = this._lc('cfdxjXNGc', {parent:component,props:{remoteSearch:true,value:component.participantId,required:true,lazyLoading:true,service:component.usersService},attrs:{name:`${(`participant`).toInputName()}`,query:'name',heading:'Assignee',required:''},state:'st9r8OO',insideLoop:true,index:"" +iin7r8});
}let elufMI_ = eo('div','uXeff'+iin7r8,null,`class`,`text-right m-t-1`);
let elDGWN1 = eo('button','TZ1ff'+iin7r8,null, eventListeners, {onclick:[function(e) {var $el = this;component.openQuickForm[status] = false;}]}, boolAttrs, {disabled:component.isSubmitting},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-warning`);
let elXW8Qy = eo('i','pbZff'+iin7r8,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elDGWN1;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('cancel')}`});
        ;
                    }, 20);                
                let elytX2o = eo('button','sk4ff'+iin7r8,null, boolAttrs, {disabled:component.isSubmitting},`title`,``,`class`,`btn btn-circle btn-success`);
let ele2j4k = eo('i','qZEff'+iin7r8,null,`class`,`${fas('check')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elytX2o;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Create')}`});
        ;
                    }, 20);                
                ec('div');
ec('form');
}ec('section');
}ec('div');
}
let cndLDBh = ! Is.empty(component.archivedTasks);
this.setState('stTJwyR', cndLDBh);
if (cndLDBh) { 
let eldDFjc = eo('button','28If',null, eventListeners, {onclick:[function(e) {var $el = this;component.isViewingArchivedTasks = true}]},`class`,`col-12 col-sm-4 col-md-3 bold pink-text view-archived-btn`);
text(`View Archived Tasks (${ component.archivedTasks.length.format() })`);
ec('button');
}}else if (cndPcHB) { 
let elJkY0j = eo('div',null,null,`class`,`tasks-list-view`);
let elntxke = eo('h3',null,null,`class`,`task-heading simple-card`);
text(`Tasks List (${component.tasksList.length})`);
ec('h3');
let elTohjz = eo('table',null,null,`class`,`table buttoned simple-card`);
let elxpZfq = eo('thead');
let elb5R4e = eo('tr');
let elrUebK = eo('th',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('id')}]},`title`,``);
text(`#`);
ec('th');

                    setTimeout(function () {
                        let $el = elrUebK;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort By ID')}`});
        ;
                    }, 20);                
                let elDdTAH = eo('th',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('title')}]},`title`,``);
text(`Task`);
ec('th');

                    setTimeout(function () {
                        let $el = elDdTAH;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort By Title')}`});
        ;
                    }, 20);                
                let elYN1ar = eo('th');
let eleYbT7 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('progress.completed')}]},`title`,``);
text(`Progress`);
ec('button');

                    setTimeout(function () {
                        let $el = eleYbT7;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort By Progress')}`});
        ;
                    }, 20);                
                ec('th');
let cndU1eV = ! component.isInProjectPage;
this.setState('stkk78C', cndU1eV);
if (cndU1eV) { 
let elW57mt = eo('th','se1f');
text(`Project`);
ec('th');
}let elJ8UzA = eo('th',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('status')}]},`title`,``);
text(`Status`);
ec('th');

                    setTimeout(function () {
                        let $el = elJ8UzA;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort by status')}`});
        ;
                    }, 20);                
                let el1YmGh = eo('th',null,null,`title`,``);
text(`R Time`);
ec('th');

                    setTimeout(function () {
                        let $el = el1YmGh;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remaining Time')}`});
        ;
                    }, 20);                
                let elAPORB = eo('th',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('participant.name')}]},`title`,``);
text(`Participant`);
ec('th');

                    setTimeout(function () {
                        let $el = elAPORB;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort By Participant')}`});
        ;
                    }, 20);                
                let el_RZyE = eo('th');
text(`Supervisors`);
ec('th');
let elWG2UU = eo('th',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('module.name')}]},`title`,``,`class`,`text-center`);
text(`Module`);
ec('th');

                    setTimeout(function () {
                        let $el = elWG2UU;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort by Module')}`});
        ;
                    }, 20);                
                let elOgt_W = eo('th',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('priority')}]},`title`,``,`class`,`text-center`);
text(`Priority`);
ec('th');

                    setTimeout(function () {
                        let $el = elOgt_W;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort by Priority')}`});
        ;
                    }, 20);                
                let el4Pxfv = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elLAys9 = eo('tbody');
for (let index in component.tasksList) {
let task = component.tasksList[index]; 
 let iiCIW6 = task.id+ index;
let el55w5z = eo('tr','SKWrnkZbfeBI' + index+iiCIW6,null,`class`,` ${cls({'alert-danger': task.priority == 'high', 'alert-warning': task.priority == 'medium', 'alert-info': task.priority == 'low'})}`);
let eltqArJ = eo('td','f3_ff'+iiCIW6);
text(task.id);
ec('td');
let elpSw1E = eo('td','uKOff'+iiCIW6);
let el6C_EF = eo('a','GM0ff'+iiCIW6,null,`href`,`${URLS.task(task)}`,`title`,``,`class`,`title`);
text(task.title.readMoreChars(30));
ec('a');

                    setTimeout(function () {
                        let $el = el6C_EF;
                        
            true && tippyTooltip($el, {arrow:true,content:`${task.title}`});
        ;
                    }, 20);                
                let cndjjv2 = ! Is.empty(task.comments);
this.setState('stIUZtf', cndjjv2);
if (cndjjv2) { 
let elgWKpN = eo('span','mLHff'+iiCIW6,null,`title`,``,`class`,`ml-3`);
let elmet3b = eo('i','ch6ff'+iiCIW6,null,`class`,`${fas('comments')} gray-text mr-2 icon`);
ec('i');
let el02Oxe = eo('strong','YNmff'+iiCIW6);
text(task.comments.length);
ec('strong');
ec('span');

                    setTimeout(function () {
                        let $el = elgWKpN;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Task Comments')}`});
        ;
                    }, 20);                
                }ec('td');
let elgjhe_ = eo('td','JFaff'+iiCIW6);
let cnd8rid = task.progress;
this.setState('stNf3F2', cnd8rid);
if (cnd8rid) { 
let elHv2JA = eo('div','qw1ff'+iiCIW6,null,`title`,``,`class`,`task-progress`);
let elkdt24 = eo('div','8otff'+iiCIW6,null, 'style', {width:`${task.progress.percentage + '%'}`},`class`,`completed`);
ec('div');
let elpJ4tF = eo('div','uq3ff'+iiCIW6,null,`class`,`value`);
text(task.progress.completed + '/' + task.progress.total);
ec('div');
ec('div');

                    setTimeout(function () {
                        let $el = elHv2JA;
                        
            true && tippyTooltip($el, {arrow:true,content:`${Math.floor(task.progress.percentage) + '% Completed'}`});
        ;
                    }, 20);                
                }ec('td');
let cnd0M24 = ! component.isInProjectPage;
this.setState('stafV3j', cnd0M24);
if (cnd0M24) { 
let elaqKGq = eo('td','yeHff'+iiCIW6);
let cndheIW = component.project || task.project;
this.setState('stNQAJV', cndheIW);
let cnd4vCC = !(cndheIW);
this.setState('stNgv1j', cnd4vCC);
if (cndheIW) { 
let elU5osq = eo('a','ovxff'+iiCIW6,null,`href`,`${URLS.project(component.project || task.project)}`,`title`,``,`class`,`ml-3`);
let cndhSCx = task.project.image;
this.setState('stsInrj', cndhSCx);
let cndzNny = !(cndhSCx);
this.setState('stAEUsl', cndzNny);
if (cndhSCx) { 
let elDaqEk = ev('img','2n6ff'+iiCIW6,null,`src`,`${task.project.image}`,`class`,`small circle`);
}else { 
let el1Aqtl = eo('i','7O9ff'+iiCIW6,null,`class`,`${fas('suitcase')} icon`);
ec('i');
}ec('a');

                    setTimeout(function () {
                        let $el = elU5osq;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.project ? component.project.name : task.project.name}`});
        ;
                    }, 20);                
                }else { 
let el0bOiI = eo('strong','r0eff'+iiCIW6);
text(`N/a`);
ec('strong');
}ec('td');
}let elJEsai = eo('td','gEeff'+iiCIW6,null,`class`,`status-column`);
let elZQ5xb = eo('span','pfpff'+iiCIW6,null, eventListeners, {onclick:[function(e) {var $el = this;task.canUserControl ? task.openStatusChanger = ! task.openStatusChanger : null;}]});
let ela8FYg = eo('span','EAfff'+iiCIW6,null,`class`,`badge ${cls(taskStatus(task))}`);
text(task.status);
ec('span');
let cndBP_Q = task.canUserControl;
this.setState('stvqh5E', cndBP_Q);
if (cndBP_Q) { 
let elTOouO = eo('i','aO9ff'+iiCIW6,null,`title`,``,`class`,`${fas('caret-down')} icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elTOouO;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Change Task Status')}`});
        ;
                    }, 20);                
                }ec('span');
let cndSEem = task.openStatusChanger;
this.setState('stD6gJ5', cndSEem);
if (cndSEem) { 
let eli9eSd = eo('div','8_Iff'+iiCIW6,null,`class`,`status-changer`);
let cmp4qHf = this._lc('cFJAqo2bD', {parent:component,props:{items:getAllowedTaskStatuses(task),searchable:false,except:task.status},events:{onselect:function(e) {let $el = this; component.updateTaskStatus(task, e.value)}},state:'stD6gJ5',insideLoop:true,index:"" +iiCIW6});
ec('div');
}ec('td');
let el5zYCV = eo('td','h_off'+iiCIW6);
let cnd5IaV = task.status == 'completed';
this.setState('stXb2ZF', cnd5IaV);
let cndRVE5 = task.endsAtTimestamp && ! ['completed', 'archived'].includes(task.status);
this.setState('stFX3O3', cndRVE5);
if (cnd5IaV) { 
let elh0Esn = eo('div','5hEff'+iiCIW6);
let elFxn1S = eo('i','hAYff'+iiCIW6,null,`title`,``,`class`,`${fas('check-double')} green-text icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elFxn1S;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Completed')}`});
        ;
                    }, 20);                
                ec('div');
}else if (cndRVE5) { 
let elZ3ttk = eo('span','omWff'+iiCIW6,null,`title`,``);
let el_w5hz = eo('i','NLoff'+iiCIW6,null,`class`,`${fas('clock')} mr-2 icon`);
ec('i');
let cmpd_jD = this._lc('cP9oSEAxC', {parent:component,props:{startsAt:task.startsAtTimestamp,endsAt:task.endsAtTimestamp},attrs:{class:'bold'},state:'stFX3O3',insideLoop:true,index:"" +iiCIW6});
ec('span');

                    setTimeout(function () {
                        let $el = elZ3ttk;
                        
            true && tippyTooltip($el, {arrow:true,content:`${task.endsAtTimestamp - task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time'}`});
        ;
                    }, 20);                
                }ec('td');
let elJ2cmh = eo('td','qB7ff'+iiCIW6,null,`class`,`text-center`);
let elQ42Gk = ev('img','t2eff'+iiCIW6,null,`src`,`${task.participant.image}`,`title`,`${task.participant.name}`,`class`,`small mr-2 circle`,`alt`,`${task.participant.name}`);

                    setTimeout(function () {
                        let $el = elQ42Gk;
                        
            true && tippyTooltip($el, {arrow:true,content:`${task.participant.name}`});
        ;
                    }, 20);                
                ec('td');
let elF4UIX = eo('td','QEcff'+iiCIW6,null,`class`,`text-center`);
for (let i in task.supervisors) {
let supervisor = task.supervisors[i]; 
 let iisX4l = '8BS2tPq' + i;
let elgoU42 = eo('span','SNV0RVzF_SQH' + i+iiCIW6+iisX4l,null,`class`,`mx-1`);
let elF5OaH = ev('img','hBtff'+iiCIW6+iisX4l,null,`src`,`${supervisor.image}`,`title`,`${supervisor.name}`,`class`,`small mr-2 circle`,`alt`,`${supervisor.name}`);

                    setTimeout(function () {
                        let $el = elF5OaH;
                        
            true && tippyTooltip($el, {arrow:true,content:`${supervisor.name}`});
        ;
                    }, 20);                
                ec('span');
}
ec('td');
let elWJvhS = eo('th','56Jff'+iiCIW6,null,`class`,`text-center v-middle gray-text`);
let cndoYKv = Object.get(task.module, 'parent.name', '');
this.setState('stWrOHq', cndoYKv);
if (cndoYKv) { 
let elDQsIj = eo('span','TUUff'+iiCIW6);
text(task.module.parent.name);
ec('span');
let elDozRv = eo('i','KMcff'+iiCIW6,null,`class`,`${fas('angle-double-right')} mx-2 icon`);
ec('i');
}let elxKXsM = eo('span','3cXff'+iiCIW6);
text(Object.get(task.module, 'name', ''));
ec('span');
ec('th');
let elQeRzt = eo('th','UAgff'+iiCIW6,null,`class`,`text-center v-middle gray-text`);
let cndGF7a = task.priority;
this.setState('stlLuQS', cndGF7a);
if (cndGF7a) { 
let el9gdUa = eo('span','KNfff'+iiCIW6);
text(task.priority);
ec('span');
}ec('th');
let eloV4eN = eo('td','fACff'+iiCIW6);
let cndLD4S = true;
this.setState('stLiRJE', cndLD4S);
if (cndLD4S) { 
let el4j61i = eo('button','pAIff'+iiCIW6,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-cyan`);
let elBlqTr = eo('i','jWbff'+iiCIW6,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el4j61i;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Tasks-board')}`});
        ;
                    }, 20);                
                let el_5C4T = eo('button','Bogff'+iiCIW6,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let el4_dTH = eo('i','lIwff'+iiCIW6,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el_5C4T;
                        
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
let elJHQN3 = eo('div',null,null,`class`,`w-100`);
let elU_agT = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isViewingArchivedTasks = false}]},`class`,`m-b-2 bold btn btn-success float-right`);
text(`Back To
        Board`);
ec('button');
let elgQmlR = eo('table',null,null,`class`,`table table-bordered`);
let el2sBH1 = eo('thead');
let elMyJF4 = eo('tr');
let elxLqMZ = eo('th');
text(`Task`);
ec('th');
let elVZbQP = eo('th');
text(`Participant`);
ec('th');
ec('tr');
ec('thead');
let els5fpO = eo('tbody');
for (let i in component.archivedTasks) {
let task = component.archivedTasks[i]; 
 let iiorQJ = 'AX6ls5Y' + i;
let elUpKDX = eo('tr','hqwz8quGEiZC' + i+iiorQJ);
let el_A5_c = eo('td','5Msff'+iiorQJ);
let elERVa7 = eo('a','g4off'+iiorQJ,null,`href`,`${URLS.task(task)}`);
text(task.title);
ec('a');
ec('td');
let elwVCN2 = eo('td','_Mlff'+iiorQJ);
let el5JqqC = ev('img','xWWff'+iiorQJ,null,`src`,`${task.participant.image}`,`class`,`circle small`,`title`,`${task.participant.name}`,`alt`,`${task.participant.name}`);
let eltW1Wl = eo('span','zRGff'+iiorQJ,null,`class`,`ml-2 bold`);
text(task.participant.name);
ec('span');
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
}}ec('div');
let cnd6Cw4 = component.modalIsOpened;
this.setState('stodDtW', cnd6Cw4);
if (cnd6Cw4) { 
component.modal = this._lc('c7a_87A9V', {parent:component,props:{displayStatusList:component.record.id,participants:component.participants,supervisors:component.supervisors,project:component.project,task:component.record},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null},onsave:function(e) {let $el = this; component.adjustTaskResponse(e)}},state:'stodDtW'});
}let cndf5R0 = component.confirmDelete;
this.setState('strzxzu', cndf5R0);
if (cndf5R0) { 
let cmp81Cw = this._lc('cj2CFuglQ', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'strzxzu'});
}let cndSGNP = component.confirmingArchiving;
this.setState('stq3unR', cndSGNP);
if (cndSGNP) { 
let cmp1kVW = this._lc('cG6kbnfwm', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmingArchiving = null},onconfirm:function(e) {let $el = this; component.archive()}},state:'stq3unR'});
}
                    this.isReadyToGo();
                }
        });