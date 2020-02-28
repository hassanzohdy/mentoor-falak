_Component({
                selector: 'tasks-board',
                c: 'TasksBoard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','switchTo','isViewingArchivedTasks','displayMode','modalIsOpened','record','participants','supervisors','project','adjustTaskResponse','confirmDelete','remove','confirmingArchiving','archive','filterOptions','filteredData','filterBy','isInProjectPage','statuses','tasksBoardView','statusIconTitle','statusIcon','draggable','user','confirmArchiving','detectChanges','openModal','confirmRemoving','now','openQuickForm','quickAdd','participantId','usersService','isSubmitting','archivedTasks','tasksList','sortTasksBy','updateTaskStatus'],
                children: {cjoccYsFx:'flk-spinner',cmzvtHxDG:'flk-dropdown-list',c6fr187xM:'flk-dropdown-list',c8UzMx9Uz:'flk-dropdown-list',cVxWu3fba:'flk-dropdown-list',cjMzh7Pkk:'flk-dropdown-list',cRa858LW_:'flk-dropdown-list',clP1BYv8R:'flk-dropdown-list',cAaesMmaE:'flk-time-remaining',cfwNANYjM:'flk-dropdown-list',cOyMFZ8_Q:'flk-dropdown-list',cKPW3mhrd:'flk-dropdown-list',caUXY9AUR:'flk-time-remaining',cURbUl0BE:'task-modal',czn5ZDHnZ:'flk-alert',cdG8fJaVO:'flk-alert'},
                render: function (component) {
                    let elnCtwm = eo('div',null,null,`class`,`row m-t-2 tasks-board`);
let cndcu4M = component.isLoading;
this.setState('stOJ07g', cndcu4M);
let cndz6Vh = !(cndcu4M);
this.setState('stUOKGI', cndz6Vh);
if (cndcu4M) { 
let cmpLbVK = this._lc('cjoccYsFx', {parent:component,state:'stOJ07g'});
}else { 
let el1vqkB = eo('div',null,null,`class`,`style-switcher text-right m-y-2 col-12`);
let el1jkQy = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.switchTo('board')}]},`title`,``,`class`,`btn btn-sm btn-cyan`);
let elj1f8A = eo('i',null,null,`class`,`${fas('th-large')} icon fa-2x`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el1jkQy;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Board Mode')}`});
        ;
                    }, 20);                
                let el7ityu = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.switchTo('list')}]},`title`,``,`class`,`btn btn-sm btn-purple`);
let elunwfR = eo('i',null,null,`class`,`${fas('th-list')} icon fa-2x`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el7ityu;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('List Mode')}`});
        ;
                    }, 20);                
                ec('div');
let cnd5NN3 = ! component.isViewingArchivedTasks;
this.setState('stFwYQP', cnd5NN3);
let cndm7Lc = !(cnd5NN3);
this.setState('st9eQyt', cndm7Lc);
if (cnd5NN3) { 
let elWcePL = eo('div','QyOf',null,`class`,`row w-100`);
let cnd8Kqq = component.displayMode == 'list';
this.setState('stF3oHS', cnd8Kqq);
let cndYBSq = component.displayMode == 'list';
this.setState('st8fY22', cndYBSq);
if (cnd8Kqq) { 
let elXo1ao = eo('div','Blpf',null,`class`,`simple-card m-b-2 col-12 tasks-list-filter`);
let elXK_YB = eo('div','RGkf',null,`class`,`row`);
let cndaZS1 = ! Is.empty(component.filterOptions.participants);
this.setState('stEYYCA', cndaZS1);
if (cndaZS1) { 
let elXF0R6 = eo('div','Ge5f',null,`class`,`col-sm-3 filter-container`);
let elMdkj0 = eo('div','fUuf',null,`class`,`filter-list`);
let cmpqoD8 = this._lc('cmzvtHxDG', {parent:component,props:{items:component.filterOptions.participants,value:component.filteredData.participants,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('participants', e);}},boolAttrs:{multiple:true},attrs:{heading:'Participants'},state:'stEYYCA'});
ec('div');
ec('div');
}let cndTiYL = ! Is.empty(component.filterOptions.supervisors);
this.setState('sta660r', cndTiYL);
if (cndTiYL) { 
let elQsaOY = eo('div','lfaf',null,`class`,`col-sm-3 filter-container`);
let elOoHXU = eo('div','n4Of',null,`class`,`filter-list`);
let cmpmZyQ = this._lc('c6fr187xM', {parent:component,props:{items:component.filterOptions.supervisors,value:component.filteredData.supervisors,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('supervisors', e);}},boolAttrs:{multiple:true},attrs:{heading:'Supervisors'},state:'sta660r'});
ec('div');
ec('div');
}let cndgoKb = ! component.isInProjectPage && ! Is.empty(component.filterOptions.projects);
this.setState('sttgyIb', cndgoKb);
if (cndgoKb) { 
let el8MvTD = eo('div','aP2f',null,`class`,`col-sm-3 filter-container`);
let elKw8gz = eo('div','6LLf',null,`class`,`filter-list`);
let cmpdfZy = this._lc('c8UzMx9Uz', {parent:component,props:{items:component.filterOptions.projects,value:component.filteredData.projects,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('projects', e);}},boolAttrs:{multiple:true},attrs:{heading:'Projects'},state:'sttgyIb'});
ec('div');
ec('div');
}let cndNK2c = ! Is.empty(component.filterOptions.statuses);
this.setState('st0Smmx', cndNK2c);
if (cndNK2c) { 
let el2vUIm = eo('div','Lqff',null,`class`,`col-sm-3 filter-container`);
let el61g6Z = eo('div','iGlf',null,`class`,`filter-list`);
let cmpm5Ou = this._lc('cVxWu3fba', {parent:component,props:{items:component.filterOptions.statuses,value:component.filteredData.statuses,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('statuses', e);}},boolAttrs:{multiple:true},attrs:{heading:'Task Status'},state:'st0Smmx'});
ec('div');
ec('div');
}let cndBFes = ! Is.empty(component.filterOptions.modules);
this.setState('st_yKTG', cndBFes);
if (cndBFes) { 
let elI3i7v = eo('div','X1df',null,`class`,`col-sm-3 filter-container`);
let elK0WWe = eo('div','hx1f',null,`class`,`filter-list`);
let cmpLHXs = this._lc('cjMzh7Pkk', {parent:component,props:{items:component.filterOptions.modules,value:component.filteredData.modules,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('modules', e);}},boolAttrs:{multiple:true},attrs:{heading:'Project Module'},state:'st_yKTG'});
ec('div');
ec('div');
}let cndMA0E = ! Is.empty(component.filterOptions.userStories);
this.setState('stVeMNc', cndMA0E);
if (cndMA0E) { 
let elxndur = eo('div','Zhzf',null,`class`,`col-sm-3 filter-container`);
let elM7UlM = eo('div','a4uf',null,`class`,`filter-list`);
let cmpDjjC = this._lc('cRa858LW_', {parent:component,props:{items:component.filterOptions.userStories,value:component.filteredData.userStories,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('userStories', e);}},boolAttrs:{multiple:true},attrs:{heading:'User Stories'},state:'stVeMNc'});
ec('div');
ec('div');
}let cndShao = ! Is.empty(component.filterOptions.priorities);
this.setState('stxitGI', cndShao);
if (cndShao) { 
let elY2I5U = eo('div','sVKf',null,`class`,`col-sm-3 filter-container`);
let eln5tnp = eo('div','ZzHf',null,`class`,`filter-list`);
let cmpAeCZ = this._lc('clP1BYv8R', {parent:component,props:{items:component.filterOptions.priorities,value:component.filteredData.priorities,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('priorities', e);}},boolAttrs:{multiple:true},attrs:{heading:'Priority'},state:'stxitGI'});
ec('div');
ec('div');
}ec('div');
ec('div');
}let cndetOm = component.displayMode == 'board';
this.setState('stbckvg', cndetOm);
let cndmTtx = cndYBSq;
this.setState('stTpUZC', cndmTtx);
if (cndetOm) { 
for (let i in component.statuses) {
let status = component.statuses[i]; 
 let iiLYyP = 'DDkPaW2' + i;
let elyDZZl = eo('div','JZLnBu0oRPVk' + i+iiLYyP,null,`class`,`col-12 col-sm-6 col-md-4 col-lg-3`);
let elCwU81 = eo('div','QL7ff'+iiLYyP,null,`class`,`tasks-group ${ status }`);
let elLL23R = eo('h3','wDwff'+iiLYyP,null,`class`,`m-b-2`);
let elR1jnO = eo('span','CpIff'+iiLYyP);
text(trans(status));
ec('span');
let elqWZcl = eo('span','QBaff'+iiLYyP,null,`class`,`ml-2`);
text(`(${ component.tasksBoardView[status] ? component.tasksBoardView[status].toArray().length : 0 })`);
ec('span');
let elpLSbo = eo('span','bCjff'+iiLYyP,null,`title`,``,`class`,`material-icons float-right`);
text(component.statusIcon(status));
ec('span');

                    setTimeout(function () {
                        let $el = elpLSbo;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.statusIconTitle(status)}`});
        ;
                    }, 20);                
                ec('h3');
let elMtnUp = eo('div','nbdff'+iiLYyP,null, eventListeners, {onready:[function(e) {var $el = this;component.draggable($el)}]},`class`,`tasks-list`,`data-status`,`${ status }`);
let cndOqRM = component.tasksBoardView[status];
this.setState('stwktkJ', cndOqRM);
if (cndOqRM) { 
for (let index in component.tasksBoardView[status].toArray()) {
let task = component.tasksBoardView[status].toArray()[index]; 
 let ii2VvJ = task.id + status+ index;
let elTNrZn = eo('div','ie5BcaBqHq8p' + index+iiLYyP+ii2VvJ,null,`class`,`task simple-card m-b-1 ${cls({item: task.canUserControl, undraggable: ! task.canUserControl})}`,`data-id`,`${ task.id }`);
let cndDGCi = task.isParticipant || task.isSupervisor || task.project && task.project.is.higherAuthority;
this.setState('sttJO6B', cndDGCi);
let cndHdDF = !(cndDGCi);
this.setState('st_3AnY', cndHdDF);
if (cndDGCi) { 
let elnia15 = eo('a','B7zff'+iiLYyP+ii2VvJ,null,`href`,`${URLS.task(task)}`,`class`,`bold`);
text('#' + task.id + ' ' + task.title);
ec('a');
}else { 
let elAVtb4 = eo('div','em3ff'+iiLYyP+ii2VvJ,null,`class`,`bold`);
text(task.title);
ec('div');
}let cndnMA_ = ['completed', 'autoFailed', 'failed'].includes(status) && (component.user.id == 1 || task.isSupervisor || component.project && component.project.isProjectManager) ;
this.setState('stdktbd', cndnMA_);
if (cndnMA_) { 
let elsm7wi = eo('button','tIQff'+iiLYyP+ii2VvJ,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmArchiving(task)}]},`title`,``,`class`,`float-right pink-text`);
let elmDJtG = eo('i','WjDff'+iiLYyP+ii2VvJ,null,`class`,`${fas('archive')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elsm7wi;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Archive Task')}`});
        ;
                    }, 20);                
                }let cndSACk = component.user.id  == 1 || task.isSupervisor || task.isParticipant || (component.project && component.project.isProjectManager);
this.setState('stemaPm', cndSACk);
if (cndSACk) { 
let elPrBzt = eo('button','8bHff'+iiLYyP+ii2VvJ,null, eventListeners, {onclick:[function(e) {var $el = this;task.dropdown = ! task.dropdown; component.detectChanges();}]},`type`,`button`,`class`,` float-right`);
let elIeXvv = eo('i','Gimff'+iiLYyP+ii2VvJ,null,`title`,``,`class`,`${fas('cog')} fa-spin icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elIeXvv;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Actions')}`});
        ;
                    }, 20);                
                ec('button');
}let el02lY4 = eo('div','1IWff'+iiLYyP+ii2VvJ,null,`class`,`participant bold ${cls({'green-text': task.participant.id == component.user.id})}`,`title`,``);
text(task.participant.name);
ec('div');

                    setTimeout(function () {
                        let $el = el02lY4;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Participant')}`});
        ;
                    }, 20);                
                let cndUYU8 = task.dropdown;
this.setState('stGtCSR', cndUYU8);
if (cndUYU8) { 
let eltMqds = eo('div','qPMff'+iiLYyP+ii2VvJ,null,`class`,`action-btns m-t-1`);
let elBM99B = eo('button','cKsff'+iiLYyP+ii2VvJ,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-cyan`);
let elQ0400 = eo('i','FeWff'+iiLYyP+ii2VvJ,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elBM99B;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Tasks-board')}`});
        ;
                    }, 20);                
                let elErxmT = eo('button','lNaff'+iiLYyP+ii2VvJ,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-danger`);
let elIXaQ1 = eo('i','Vxlff'+iiLYyP+ii2VvJ,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elErxmT;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Tasks-board')}`});
        ;
                    }, 20);                
                ec('div');
}let elDHxN8 = eo('section','GZQff'+iiLYyP+ii2VvJ,null,`class`,`footer`);
let elBZniF = eo('i','kMwff'+iiLYyP+ii2VvJ,null,`title`,``,`class`,`${fas('user-secret')} icon  ${cls({'green-text': task.isSupervisor})}`);
ec('i');

                    setTimeout(function () {
                        let $el = elBZniF;
                        
            true && tippyTooltip($el, {arrow:true,content:`${'<strong>Supervisors</strong><br>' + task.supervisors.map(supervisor => supervisor.name).join('<br/>')}`});
        ;
                    }, 20);                
                let cnd9ut0 = status == 'completed';
this.setState('stYx0sq', cnd9ut0);
if (cnd9ut0) { 
let elWTbbW = eo('i','zAaff'+iiLYyP+ii2VvJ,null,`class`,`${fas('check-double')} green-text ml-2 icon`);
ec('i');
}let cnd3wYD = task.endsAt && ! ['completed'].includes(status);
this.setState('st7gdsf', cnd3wYD);
if (cnd3wYD) { 
let cmpas2h = this._lc('cAaesMmaE', {parent:component,props:{tooltip:true,title:task.endsAtTimestamp - task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time',endsAt:task.endsAtTimestamp,startsAt:component.now},attrs:{title:`${task.endsAtTimestamp - task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time'}`,class:'ml-4 bold'},state:'st7gdsf',insideLoop:true,index:"" +iiLYyP+ii2VvJ});
}let cndb3W6 = ! Is.empty(task.comments);
this.setState('st7mM4E', cndb3W6);
if (cndb3W6) { 
let elxfTWd = eo('span','51sff'+iiLYyP+ii2VvJ,null,`title`,``,`class`,`ml-3`);
let elnXG0g = eo('i','NAsff'+iiLYyP+ii2VvJ,null,`class`,`${fas('comments')} gray-text mr-2 icon`);
ec('i');
let elcsYCN = eo('strong','STKff'+iiLYyP+ii2VvJ);
text(task.comments.length);
ec('strong');
ec('span');

                    setTimeout(function () {
                        let $el = elxfTWd;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Task Comments')}`});
        ;
                    }, 20);                
                }let cndwyB8 = (component.project || task.project) && ! component.isInProjectPage;
this.setState('steLfTW', cndwyB8);
if (cndwyB8) { 
let elqlTsn = eo('a','_z_ff'+iiLYyP+ii2VvJ,null,`href`,`${URLS.project(component.project || task.project)}`,`title`,``,`class`,`ml-3 teal-text`);
let cndGJZ9 = task.project.image;
this.setState('sta0NK8', cndGJZ9);
let cndBvcF = !(cndGJZ9);
this.setState('stqlqxZ', cndBvcF);
if (cndGJZ9) { 
let elfoyiX = ev('img','dP7ff'+iiLYyP+ii2VvJ,null,`src`,`${task.project.image}`,`class`,`small circle`);
}else { 
let elujcpB = eo('i','t4mff'+iiLYyP+ii2VvJ,null,`class`,`${fas('suitcase')} icon`);
ec('i');
}ec('a');

                    setTimeout(function () {
                        let $el = elqlTsn;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.project ? component.project.name : task.project.name}`});
        ;
                    }, 20);                
                }let cndkTv3 = ! Is.empty(task.module);
this.setState('stBGAhK', cndkTv3);
if (cndkTv3) { 
let elhJLCN = eo('span','Dk8ff'+iiLYyP+ii2VvJ,null,`title`,``,`class`,`ml-3`);
let el5BLW6 = eo('i','ywcff'+iiLYyP+ii2VvJ,null,`class`,`${fas('cog')} lime-text mr-2 icon`);
ec('i');
let elj_wOq = eo('span','PJLff'+iiLYyP+ii2VvJ);
text(task.module.name);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elhJLCN;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Module')}`});
        ;
                    }, 20);                
                }ec('section');
ec('div');
}
}ec('div');

                    setTimeout(function () {
                        let $el = elMtnUp;
                        component.draggable($el);
                    }, 20);                
                ec('div');
let cnd2Y4S = (component.project || component.user.id == 1) && Object.get(component.project, 'isHigherAuthority', '')  && status != 'autoFailed';
this.setState('stFO6iM', cnd2Y4S);
if (cnd2Y4S) { 
let el3VAQM = eo('section','Sumff'+iiLYyP,null,`class`,`footer text-right m-b-2`);
let cndxdBQ = ! component.openQuickForm[status];
this.setState('stKRHCL', cndxdBQ);
if (cndxdBQ) { 
let elQx0zd = eo('button','_MVff'+iiLYyP,null, eventListeners, {onclick:[function(e) {var $el = this;component.openQuickForm[status] = true}]},`title`,``,`type`,`button`,`class`,`btn btn-info btn-circle`);
let elhHwen = eo('i','kclff'+iiLYyP,null,`class`,`${fas('plus')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elQx0zd;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Quick add')}`});
        ;
                    }, 20);                
                }let cndt7g3 = component.openQuickForm[status];
this.setState('stXx4i7', cndt7g3);
if (cndt7g3) { 
let elIEFbw = eo('form','1Quff'+iiLYyP,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.quickAdd($el)}]});

                if (! elIEFbw.formHandler) {
                    window.cfrmdlr = elIEFbw.formHandler = new FormHandler(elIEFbw, component);
                } else {
                    window.cfrmdlr = elIEFbw.formHandler;
                }
            let elPxI4_ = ev('input','oEQff'+iiLYyP,null, eventListeners, {oninput:[function(e) {status = this.value;}]},`value`,`${fval(status)}`,`name`,`${(`status`).toInputName()}`,`type`,`hidden`);
elPxI4_.value = fval(status);
let cndOkvd = component.project;
this.setState('st8xXd5', cndOkvd);
let cndCOdh = !(cndOkvd);
this.setState('stn2DAi', cndCOdh);
if (cndOkvd) { 
let elsHzYc = ev('input','2j4ff'+iiLYyP,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elsHzYc.value = fval(component.project.id);
}let el9PxMf = ev('input','H6iff'+iiLYyP,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elIEFbw.formHandler.addError(`title`, 'required', trans('validation.required'));}return elIEFbw.formHandler.removeError(`title`);}]},`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Task Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
let cndNftU = elIEFbw.formHandler.getError(`title`);
this.setState('sttmkfU', cndNftU);
let cndVz_b = !(cndNftU);
this.setState('stlFnZJ', cndVz_b);
if (cndNftU) { 
let elaw6Sd = eo('div','9U_ff'+iiLYyP,null,`class`,`alert alert-danger`);
text(elIEFbw.formHandler.getError(`title`));
ec('div');
}let el1dw3U = ev('input','lgvff'+iiLYyP,null, eventListeners, {oninput:[function(e) {component.user.id = this.value;}]},`value`,`${fval(component.user.id)}`,`name`,`${(`supervisors[]`).toInputName()}`,`type`,`hidden`);
el1dw3U.value = fval(component.user.id);
let cnd7gsa = component.project;
this.setState('stwbo2_', cnd7gsa);
let cndITaC = !(cnd7gsa);
this.setState('stAVpnz', cndITaC);
if (cnd7gsa) { 
let cmpIZT7 = this._lc('cfwNANYjM', {parent:component,props:{value:component.participantId,required:true,items:component.participants},attrs:{name:`${(`participant`).toInputName()}`,heading:'Assignee'},state:'stwbo2_',insideLoop:true,index:"" +iiLYyP});
}else { 
let cmp3cE0 = this._lc('cOyMFZ8_Q', {parent:component,props:{remoteSearch:true,value:component.participantId,required:true,lazyLoading:true,service:component.usersService},attrs:{name:`${(`participant`).toInputName()}`,query:'name',heading:'Assignee',required:''},state:'stAVpnz',insideLoop:true,index:"" +iiLYyP});
}let elFV6JQ = eo('div','QiUff'+iiLYyP,null,`class`,`text-right m-t-1`);
let el__nAb = eo('button','Fsnff'+iiLYyP,null, eventListeners, {onclick:[function(e) {var $el = this;component.openQuickForm[status] = false;}]}, boolAttrs, {disabled:component.isSubmitting},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-warning`);
let elc3oIf = eo('i','XqZff'+iiLYyP,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el__nAb;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('cancel')}`});
        ;
                    }, 20);                
                let elpItYb = eo('button','hLzff'+iiLYyP,null, boolAttrs, {disabled:component.isSubmitting},`title`,``,`class`,`btn btn-circle btn-success`);
let elqmqzj = eo('i','0Ncff'+iiLYyP,null,`class`,`${fas('check')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elpItYb;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Create')}`});
        ;
                    }, 20);                
                ec('div');
ec('form');
}ec('section');
}ec('div');
}
let cndhwaq = ! Is.empty(component.archivedTasks);
this.setState('stCYuZX', cndhwaq);
if (cndhwaq) { 
let el_5TOI = eo('button','Hfef',null, eventListeners, {onclick:[function(e) {var $el = this;component.isViewingArchivedTasks = true}]},`class`,`col-12 col-sm-4 col-md-3 bold pink-text view-archived-btn`);
text(`View Archived Tasks (${ component.archivedTasks.length.format() })`);
ec('button');
}}else if (cndmTtx) { 
let elIVlNF = eo('div',null,null,`class`,`tasks-list-view`);
let elT661I = eo('h3',null,null,`class`,`task-heading simple-card`);
text(`Tasks List (${component.tasksList.length})`);
ec('h3');
let elUvkqM = eo('table',null,null,`class`,`table buttoned simple-card`);
let elW_uQi = eo('thead');
let elJWh1m = eo('tr');
let elL7isF = eo('th',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('id')}]},`title`,``);
text(`#`);
ec('th');

                    setTimeout(function () {
                        let $el = elL7isF;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort By ID')}`});
        ;
                    }, 20);                
                let elbdxWi = eo('th',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('title')}]},`title`,``);
text(`Task`);
ec('th');

                    setTimeout(function () {
                        let $el = elbdxWi;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort By Title')}`});
        ;
                    }, 20);                
                let el4QgN7 = eo('th');
let elJJUhf = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('progress.completed')}]},`title`,``);
text(`Progress`);
ec('button');

                    setTimeout(function () {
                        let $el = elJJUhf;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort By Progress')}`});
        ;
                    }, 20);                
                ec('th');
let cndMEGz = ! component.isInProjectPage;
this.setState('stOygAp', cndMEGz);
if (cndMEGz) { 
let elu8Cyz = eo('th','FLXf');
text(`Project`);
ec('th');
}let elbfHge = eo('th',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('status')}]},`title`,``);
text(`Status`);
ec('th');

                    setTimeout(function () {
                        let $el = elbfHge;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort by status')}`});
        ;
                    }, 20);                
                let elq2vAV = eo('th',null,null,`title`,``);
text(`R Time`);
ec('th');

                    setTimeout(function () {
                        let $el = elq2vAV;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remaining Time')}`});
        ;
                    }, 20);                
                let elzhr3A = eo('th',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('participant.name')}]},`title`,``);
text(`Participant`);
ec('th');

                    setTimeout(function () {
                        let $el = elzhr3A;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort By Participant')}`});
        ;
                    }, 20);                
                let elIn8Dr = eo('th');
text(`Supervisors`);
ec('th');
let elJSzSW = eo('th',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('module.name')}]},`title`,``,`class`,`text-center`);
text(`Module`);
ec('th');

                    setTimeout(function () {
                        let $el = elJSzSW;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort by Module')}`});
        ;
                    }, 20);                
                let el5SdG4 = eo('th',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('priority')}]},`title`,``,`class`,`text-center`);
text(`Priority`);
ec('th');

                    setTimeout(function () {
                        let $el = el5SdG4;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort by Priority')}`});
        ;
                    }, 20);                
                let elaZNn7 = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elKIY92 = eo('tbody');
for (let index in component.tasksList) {
let task = component.tasksList[index]; 
 let iidAva = task.id+ index;
let elVHMdu = eo('tr','KgY1mB_k3H7Z' + index+iidAva,null,`class`,` ${cls({'alert-danger': task.priority == 'high', 'alert-warning': task.priority == 'medium', 'alert-info': task.priority == 'low'})}`);
let elBX2y8 = eo('td','ouXff'+iidAva);
text(task.id);
ec('td');
let eli2bDO = eo('td','2sSff'+iidAva);
let elyb1St = eo('a','vUzff'+iidAva,null,`href`,`${URLS.task(task)}`,`title`,``,`class`,`title`);
text(task.title.readMoreChars(30));
ec('a');

                    setTimeout(function () {
                        let $el = elyb1St;
                        
            true && tippyTooltip($el, {arrow:true,content:`${task.title}`});
        ;
                    }, 20);                
                let cndGjxp = ! Is.empty(task.comments);
this.setState('stGyvoh', cndGjxp);
if (cndGjxp) { 
let eleKFgG = eo('span','LdVff'+iidAva,null,`title`,``,`class`,`ml-3`);
let elMiG8g = eo('i','4Y0ff'+iidAva,null,`class`,`${fas('comments')} gray-text mr-2 icon`);
ec('i');
let el10cDO = eo('strong','3CCff'+iidAva);
text(task.comments.length);
ec('strong');
ec('span');

                    setTimeout(function () {
                        let $el = eleKFgG;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Task Comments')}`});
        ;
                    }, 20);                
                }ec('td');
let elk8FYp = eo('td','dEqff'+iidAva);
let cndiB3_ = task.progress;
this.setState('stfYe5B', cndiB3_);
if (cndiB3_) { 
let el6sUtO = eo('div','hDUff'+iidAva,null,`title`,``,`class`,`task-progress`);
let elPsoHg = eo('div','Yulff'+iidAva,null, 'style', {width:`${task.progress.percentage + '%'}`},`class`,`completed`);
ec('div');
let elxWYPw = eo('div','Mqlff'+iidAva,null,`class`,`value`);
text(task.progress.completed + '/' + task.progress.total);
ec('div');
ec('div');

                    setTimeout(function () {
                        let $el = el6sUtO;
                        
            true && tippyTooltip($el, {arrow:true,content:`${Math.floor(task.progress.percentage) + '% Completed'}`});
        ;
                    }, 20);                
                }ec('td');
let cndQvZc = ! component.isInProjectPage;
this.setState('stpJFjH', cndQvZc);
if (cndQvZc) { 
let eldvRwm = eo('td','OXTff'+iidAva);
let cnd3izG = component.project || task.project;
this.setState('stuxlvd', cnd3izG);
let cndk_oO = !(cnd3izG);
this.setState('stOECrT', cndk_oO);
if (cnd3izG) { 
let elKOiui = eo('a','41Vff'+iidAva,null,`href`,`${URLS.project(component.project || task.project)}`,`title`,``,`class`,`ml-3`);
let cndIlqa = task.project.image;
this.setState('stLtJEM', cndIlqa);
let cndJUQT = !(cndIlqa);
this.setState('st5BKVO', cndJUQT);
if (cndIlqa) { 
let el7H5IU = ev('img','EaRff'+iidAva,null,`src`,`${task.project.image}`,`class`,`small circle`);
}else { 
let el_nazk = eo('i','1lzff'+iidAva,null,`class`,`${fas('suitcase')} icon`);
ec('i');
}ec('a');

                    setTimeout(function () {
                        let $el = elKOiui;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.project ? component.project.name : task.project.name}`});
        ;
                    }, 20);                
                }else { 
let elM93HV = eo('strong','j_2ff'+iidAva);
text(`N/a`);
ec('strong');
}ec('td');
}let el10zsl = eo('td','zL_ff'+iidAva,null,`class`,`status-column`);
let elaq4zt = eo('span','_9Pff'+iidAva,null, eventListeners, {onclick:[function(e) {var $el = this;task.canUserControl ? task.openStatusChanger = ! task.openStatusChanger : null;}]});
let elBNr4y = eo('span','JFkff'+iidAva,null,`class`,`badge ${cls(taskStatus(task))}`);
text(task.status);
ec('span');
let cndgnvU = task.canUserControl;
this.setState('stv4rSQ', cndgnvU);
if (cndgnvU) { 
let elOI6cy = eo('i','sPWff'+iidAva,null,`title`,``,`class`,`${fas('caret-down')} icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elOI6cy;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Change Task Status')}`});
        ;
                    }, 20);                
                }ec('span');
let cndWTd5 = task.openStatusChanger;
this.setState('sttwaNV', cndWTd5);
if (cndWTd5) { 
let elPNvhE = eo('div','2LTff'+iidAva,null,`class`,`status-changer`);
let cmpLlCA = this._lc('cKPW3mhrd', {parent:component,props:{items:getAllowedTaskStatuses(task),searchable:false,except:task.status},events:{onselect:function(e) {let $el = this; component.updateTaskStatus(task, e.value)}},state:'sttwaNV',insideLoop:true,index:"" +iidAva});
ec('div');
}ec('td');
let elXK0Ny = eo('td','6pJff'+iidAva);
let cndpHrn = task.status == 'completed';
this.setState('stpi5kp', cndpHrn);
let cndLwQc = task.endsAtTimestamp && ! ['completed', 'archived'].includes(task.status);
this.setState('sta3giV', cndLwQc);
if (cndpHrn) { 
let elHuO8Y = eo('div','J2Bff'+iidAva);
let eltoBKZ = eo('i','TREff'+iidAva,null,`title`,``,`class`,`${fas('check-double')} green-text icon`);
ec('i');

                    setTimeout(function () {
                        let $el = eltoBKZ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Completed')}`});
        ;
                    }, 20);                
                ec('div');
}else if (cndLwQc) { 
let elJeHAc = eo('span','xMxff'+iidAva,null,`title`,``);
let elEjKNf = eo('i','Q2wff'+iidAva,null,`class`,`${fas('clock')} mr-2 icon`);
ec('i');
let cmp66U6 = this._lc('caUXY9AUR', {parent:component,props:{startsAt:task.startsAtTimestamp,endsAt:task.endsAtTimestamp},attrs:{class:'bold'},state:'sta3giV',insideLoop:true,index:"" +iidAva});
ec('span');

                    setTimeout(function () {
                        let $el = elJeHAc;
                        
            true && tippyTooltip($el, {arrow:true,content:`${task.endsAtTimestamp - task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time'}`});
        ;
                    }, 20);                
                }ec('td');
let el1ozl_ = eo('td','HEXff'+iidAva,null,`class`,`text-center`);
let ely6qty = ev('img','snAff'+iidAva,null,`src`,`${task.participant.image}`,`title`,`${task.participant.name}`,`class`,`small mr-2 circle`,`alt`,`${task.participant.name}`);

                    setTimeout(function () {
                        let $el = ely6qty;
                        
            true && tippyTooltip($el, {arrow:true,content:`${task.participant.name}`});
        ;
                    }, 20);                
                ec('td');
let el3H_qg = eo('td','_Xcff'+iidAva,null,`class`,`text-center`);
for (let i in task.supervisors) {
let supervisor = task.supervisors[i]; 
 let iizqxR = 'wLJrigG' + i;
let elzkGVy = eo('span','umag5ynPmNkR' + i+iidAva+iizqxR,null,`class`,`mx-1`);
let el7EPeN = ev('img','dV2ff'+iidAva+iizqxR,null,`src`,`${supervisor.image}`,`title`,`${supervisor.name}`,`class`,`small mr-2 circle`,`alt`,`${supervisor.name}`);

                    setTimeout(function () {
                        let $el = el7EPeN;
                        
            true && tippyTooltip($el, {arrow:true,content:`${supervisor.name}`});
        ;
                    }, 20);                
                ec('span');
}
ec('td');
let elw0HHm = eo('th','t_gff'+iidAva,null,`class`,`text-center v-middle gray-text`);
let cnd4Cf1 = Object.get(task.module, 'parent.name', '');
this.setState('stVQHXA', cnd4Cf1);
if (cnd4Cf1) { 
let elxG90_ = eo('span','7Voff'+iidAva);
text(task.module.parent.name);
ec('span');
let elDVtTV = eo('i','SiFff'+iidAva,null,`class`,`${fas('angle-double-right')} mx-2 icon`);
ec('i');
}let elPEIQA = eo('span','oSdff'+iidAva);
text(Object.get(task.module, 'name', ''));
ec('span');
ec('th');
let elG7Sfk = eo('th','ROZff'+iidAva,null,`class`,`text-center v-middle gray-text`);
let cndf7oX = task.priority;
this.setState('stnpAFw', cndf7oX);
if (cndf7oX) { 
let el5RCQQ = eo('span','Ayqff'+iidAva);
text(task.priority);
ec('span');
}ec('th');
let elVycFH = eo('td','3Emff'+iidAva);
let cndUVXD = true;
this.setState('stxMxBF', cndUVXD);
if (cndUVXD) { 
let el_qX2M = eo('button','QYrff'+iidAva,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-cyan`);
let elwVcfe = eo('i','hoWff'+iidAva,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el_qX2M;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Tasks-board')}`});
        ;
                    }, 20);                
                let elv8sTx = eo('button','Wntff'+iidAva,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elijEA9 = eo('i','DhDff'+iidAva,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elv8sTx;
                        
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
let elK_NQl = eo('div',null,null,`class`,`w-100`);
let elKUTpg = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isViewingArchivedTasks = false}]},`class`,`m-b-2 bold btn btn-success float-right`);
text(`Back To
        Board`);
ec('button');
let elzqNe9 = eo('table',null,null,`class`,`table table-bordered`);
let el58aPv = eo('thead');
let elqhwJx = eo('tr');
let elZ3W2g = eo('th');
text(`Task`);
ec('th');
let elw_dBA = eo('th');
text(`Participant`);
ec('th');
ec('tr');
ec('thead');
let el1JHZV = eo('tbody');
for (let i in component.archivedTasks) {
let task = component.archivedTasks[i]; 
 let iinOL_ = 'WYoQnli' + i;
let elOJDpD = eo('tr','DOh9D9RomGs1' + i+iinOL_);
let elWWpH0 = eo('td','tFfff'+iinOL_);
let elTeWFB = eo('a','kAzff'+iinOL_,null,`href`,`${URLS.task(task)}`);
text(task.title);
ec('a');
ec('td');
let el3SNWq = eo('td','E74ff'+iinOL_);
let el0zC4O = ev('img','Lsgff'+iinOL_,null,`src`,`${task.participant.image}`,`class`,`circle small`,`title`,`${task.participant.name}`,`alt`,`${task.participant.name}`);
let elcuC35 = eo('span','tyFff'+iinOL_,null,`class`,`ml-2 bold`);
text(task.participant.name);
ec('span');
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
}}ec('div');
let cndtoZO = component.modalIsOpened;
this.setState('stFJElK', cndtoZO);
if (cndtoZO) { 
component.modal = this._lc('cURbUl0BE', {parent:component,props:{displayStatusList:component.record.id,participants:component.participants,supervisors:component.supervisors,project:component.project,task:component.record},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null},onsave:function(e) {let $el = this; component.adjustTaskResponse(e)}},state:'stFJElK'});
}let cnd9b80 = component.confirmDelete;
this.setState('ste3eCE', cnd9b80);
if (cnd9b80) { 
let cmps0t0 = this._lc('czn5ZDHnZ', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'ste3eCE'});
}let cndGh3o = component.confirmingArchiving;
this.setState('stzEVds', cndGh3o);
if (cndGh3o) { 
let cmpXdMO = this._lc('cdG8fJaVO', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmingArchiving = null},onconfirm:function(e) {let $el = this; component.archive()}},state:'stzEVds'});
}
                    this.isReadyToGo();
                }
        });