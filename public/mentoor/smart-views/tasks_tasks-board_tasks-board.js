_Component({
                selector: 'tasks-board',
                c: 'TasksBoard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','switchTo','isViewingArchivedTasks','displayMode','modalIsOpened','record','participants','supervisors','project','adjustTaskResponse','confirmDelete','remove','confirmingArchiving','archive','filterOptions','filteredData','filterBy','isInProjectPage','statuses','tasksBoardView','statusIconTitle','statusIcon','draggable','user','confirmArchiving','detectChanges','openModal','confirmRemoving','now','openQuickForm','quickAdd','participantId','usersService','isSubmitting','archivedTasks','tasksList','updateTaskStatus'],
                children: {casw3IGcg:'flk-spinner',cThDPxN5i:'flk-dropdown-list',clCTrET6V:'flk-dropdown-list',citzFMi_u:'flk-dropdown-list',cgLIqAudH:'flk-dropdown-list',cOOUKsXRK:'flk-dropdown-list',c2Rxs9OT7:'flk-dropdown-list',cS8_cDuE7:'flk-time-remaining',cVEDXV1ZP:'flk-dropdown-list',c_9MVHu6z:'flk-dropdown-list',c7UUeOFk4:'flk-dropdown-list',cBkOtNC2C:'flk-time-remaining',chCWVB3_e:'task-modal',cRTnmvEeq:'flk-alert',cbUAIuaUu:'flk-alert'},
                render: function (component) {
                    let elNrqbU = eo('div',null,null,`class`,`row m-t-2 tasks-board`);
let cndqgo6 = component.isLoading;
this.setState('st7EVK9', cndqgo6);
let cnd6cFb = !(cndqgo6);
this.setState('stywZRt', cnd6cFb);
if (cndqgo6) { 
let cmp2pap = this._lc('casw3IGcg', {parent:component,state:'st7EVK9'});
}else { 
let el11CZX = eo('div',null,null,`class`,`style-switcher text-right m-y-2 col-12`);
let elFGeAB = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.switchTo('board')}]},`title`,``,`class`,`btn btn-sm btn-cyan`);
let elPkVua = eo('i',null,null,`class`,`${fas('th-large') + ' icon fa-2x'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elFGeAB;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Board Mode')}`});
        ;
                    }, 20);                
                let elizS49 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.switchTo('list')}]},`title`,``,`class`,`btn btn-sm btn-purple`);
let elmHoRM = eo('i',null,null,`class`,`${fas('th-list') + ' icon fa-2x'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elizS49;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('List Mode')}`});
        ;
                    }, 20);                
                ec('div');
let cnd8CQh = ! component.isViewingArchivedTasks;
this.setState('stBv7Jh', cnd8CQh);
let cnd6XCs = !(cnd8CQh);
this.setState('stqFKPp', cnd6XCs);
if (cnd8CQh) { 
let elZxqXu = eo('div','BM_f',null,`class`,`row w-100`);
let cndgHhG = component.displayMode == 'list';
this.setState('st4jbT7', cndgHhG);
let cnd3nrB = component.displayMode == 'list';
this.setState('stIAFmC', cnd3nrB);
if (cndgHhG) { 
let el8WSOc = eo('div','jnmf',null,`class`,`simple-card m-b-2 col-12 tasks-list-filter`);
let el5OlbA = eo('div','Dygf',null,`class`,`row`);
let cndiLlq = ! Is.empty(component.filterOptions.participants);
this.setState('strCa9p', cndiLlq);
if (cndiLlq) { 
let elFqaBX = eo('div','VzPf',null,`class`,`col-sm-3 filter-container`);
let el_NO_Q = eo('div','4e3f',null,`class`,`filter-list`);
let cmpxKyO = this._lc('cThDPxN5i', {parent:component,props:{items:component.filterOptions.participants,value:component.filteredData.participants,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('participants', e);}},boolAttrs:{multiple:true},attrs:{heading:'Participants'},state:'strCa9p'});
ec('div');
ec('div');
}let cndJ70r = ! Is.empty(component.filterOptions.supervisors);
this.setState('styNz0x', cndJ70r);
if (cndJ70r) { 
let elQRNMp = eo('div','eMkf',null,`class`,`col-sm-3 filter-container`);
let elDwpEI = eo('div','MSPf',null,`class`,`filter-list`);
let cmpcgNk = this._lc('clCTrET6V', {parent:component,props:{items:component.filterOptions.supervisors,value:component.filteredData.supervisors,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('supervisors', e);}},boolAttrs:{multiple:true},attrs:{heading:'Supervisors'},state:'styNz0x'});
ec('div');
ec('div');
}let cndFifB = ! component.isInProjectPage && ! Is.empty(component.filterOptions.projects);
this.setState('stl8ruZ', cndFifB);
if (cndFifB) { 
let elVgo1Q = eo('div','pUrf',null,`class`,`col-sm-3 filter-container`);
let elVrtI9 = eo('div','jcwf',null,`class`,`filter-list`);
let cmpf7TJ = this._lc('citzFMi_u', {parent:component,props:{items:component.filterOptions.projects,value:component.filteredData.projects,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('projects', e);}},boolAttrs:{multiple:true},attrs:{heading:'Projects'},state:'stl8ruZ'});
ec('div');
ec('div');
}let cndkfIq = ! Is.empty(component.filterOptions.statuses);
this.setState('stYwP0Q', cndkfIq);
if (cndkfIq) { 
let el2IMnM = eo('div','oglf',null,`class`,`col-sm-3 filter-container`);
let elFIiZ7 = eo('div','BXCf',null,`class`,`filter-list`);
let cmpjAxL = this._lc('cgLIqAudH', {parent:component,props:{items:component.filterOptions.statuses,value:component.filteredData.statuses,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('statuses', e);}},boolAttrs:{multiple:true},attrs:{heading:'Task Status'},state:'stYwP0Q'});
ec('div');
ec('div');
}let cnd3yZd = ! Is.empty(component.filterOptions.modules);
this.setState('stYffms', cnd3yZd);
if (cnd3yZd) { 
let el2wYHM = eo('div','kZCf',null,`class`,`col-sm-3 filter-container`);
let elHGt1K = eo('div','ZQyf',null,`class`,`filter-list`);
let cmpoeap = this._lc('cOOUKsXRK', {parent:component,props:{items:component.filterOptions.modules,value:component.filteredData.modules,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('modules', e);}},boolAttrs:{multiple:true},attrs:{heading:'Project Module'},state:'stYffms'});
ec('div');
ec('div');
}let cnd5Z0K = ! Is.empty(component.filterOptions.userStories);
this.setState('sthTv6F', cnd5Z0K);
if (cnd5Z0K) { 
let elsjpXa = eo('div','9A_f',null,`class`,`col-sm-3 filter-container`);
let elkUzWO = eo('div','IkMf',null,`class`,`filter-list`);
let cmpoTqe = this._lc('c2Rxs9OT7', {parent:component,props:{items:component.filterOptions.userStories,value:component.filteredData.userStories,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('userStories', e);}},boolAttrs:{multiple:true},attrs:{heading:'User Stories'},state:'sthTv6F'});
ec('div');
ec('div');
}ec('div');
ec('div');
}let cndwwCL = component.displayMode == 'board';
this.setState('st1TEZH', cndwwCL);
let cnd2fWW = cnd3nrB;
this.setState('strH59j', cnd2fWW);
if (cndwwCL) { 
for (let i in component.statuses) {
let status = component.statuses[i]; 
 let iiqk7k = 'lEbgb_c' + i;
let elCB9Gh = eo('div','Q_ByAKAyx5ni' + i+iiqk7k,null,`class`,`col-12 col-sm-6 col-md-4 col-lg-3`);
let elW4u3X = eo('div','WDWff'+iiqk7k,null,`class`,`tasks-group ${ status }`);
let elzKwdH = eo('h3','lbGff'+iiqk7k,null,`class`,`m-b-2`);
let elenJul = eo('span','to_ff'+iiqk7k);
text(trans(status));
ec('span');
let el64ZyU = eo('span','dydff'+iiqk7k,null,`class`,`ml-2`);
text(`(${ component.tasksBoardView[status] ? component.tasksBoardView[status].toArray().length : 0 })`);
ec('span');
let elXRhM7 = eo('span','h4pff'+iiqk7k,null,`title`,``,`class`,`material-icons float-right`);
text(component.statusIcon(status));
ec('span');

                    setTimeout(function () {
                        let $el = elXRhM7;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.statusIconTitle(status)}`});
        ;
                    }, 20);                
                ec('h3');
let elfREcc = eo('div','qsrff'+iiqk7k,null, eventListeners, {onready:[function(e) {var $el = this;component.draggable($el)}]},`class`,`tasks-list`,`data-status`,`${ status }`);
let cndmbUr = component.tasksBoardView[status];
this.setState('stfupD0', cndmbUr);
if (cndmbUr) { 
for (let index in component.tasksBoardView[status].toArray()) {
let task = component.tasksBoardView[status].toArray()[index]; 
 let iif5_8 = task.id + status+ index;
let el7qpxk = eo('div','qGXIf6huphmL' + index+iiqk7k+iif5_8,null,`class`,`task simple-card m-b-1`,`data-id`,`${ task.id }`);
el7qpxk.cls = {item: task.canUserControl, undraggable: ! task.canUserControl};

            for (let className in el7qpxk.cls) {
                el7qpxk.classList.toggle(className, el7qpxk.cls[className]);
            }  
            let cndFJEm = task.isParticipant || task.isSupervisor || task.project && task.project.is.higherAuthority;
this.setState('st3BfvQ', cndFJEm);
let cndz2fa = !(cndFJEm);
this.setState('st9BqJ4', cndz2fa);
if (cndFJEm) { 
let elM5b0L = eo('a','XvSff'+iiqk7k+iif5_8,null,`href`,`${URLS.task(task)}`,`class`,`bold`);
text('#' + task.id + ' ' + task.title);
ec('a');
}else { 
let el1MbjK = eo('div','or_ff'+iiqk7k+iif5_8,null,`class`,`bold`);
text(task.title);
ec('div');
}let cndERSp = ['completed', 'autoFailed', 'failed'].includes(status) && (component.user.id == 1 || task.isSupervisor || component.project && component.project.isProjectManager) ;
this.setState('stoFypQ', cndERSp);
if (cndERSp) { 
let elff455 = eo('button','Muwff'+iiqk7k+iif5_8,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmArchiving(task)}]},`title`,``,`class`,`float-right pink-text`);
let elmU0eS = eo('i','jMzff'+iiqk7k+iif5_8,null,`class`,`${fas('archive') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elff455;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Archive Task')}`});
        ;
                    }, 20);                
                }let cndpyiD = component.user.id  == 1 || task.isSupervisor || task.isParticipant || (component.project && component.project.isProjectManager);
this.setState('stcUw84', cndpyiD);
if (cndpyiD) { 
let el5qFkx = eo('button','zNWff'+iiqk7k+iif5_8,null, eventListeners, {onclick:[function(e) {var $el = this;task.dropdown = ! task.dropdown; component.detectChanges();}]},`type`,`button`,`class`,` float-right`);
let elkVref = eo('i','Hxaff'+iiqk7k+iif5_8,null,`title`,``,`class`,`${fas('cog') + ' fa-spin icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elkVref;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Actions')}`});
        ;
                    }, 20);                
                ec('button');
}let elQXz0O = eo('div','kJ2ff'+iiqk7k+iif5_8,null,`title`,``,`class`,`participant bold`);
elQXz0O.cls = {'green-text': task.participant.id == component.user.id};

            for (let className in elQXz0O.cls) {
                elQXz0O.classList.toggle(className, elQXz0O.cls[className]);
            }  
            text(task.participant.name);
ec('div');

                    setTimeout(function () {
                        let $el = elQXz0O;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Participant')}`});
        ;
                    }, 20);                
                let cnd4lJC = task.dropdown;
this.setState('stT7yDI', cnd4lJC);
if (cnd4lJC) { 
let elQFkYe = eo('div','ouwff'+iiqk7k+iif5_8,null,`class`,`action-btns m-t-1`);
let el3ldsW = eo('button','Oqwff'+iiqk7k+iif5_8,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-cyan`);
let el6OBiI = eo('i','ExBff'+iiqk7k+iif5_8,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el3ldsW;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Tasks-board')}`});
        ;
                    }, 20);                
                let elcnNHh = eo('button','VU9ff'+iiqk7k+iif5_8,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-danger`);
let elGwsuU = eo('i','AGVff'+iiqk7k+iif5_8,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elcnNHh;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Tasks-board')}`});
        ;
                    }, 20);                
                ec('div');
}let elIJoAR = eo('section','MzFff'+iiqk7k+iif5_8,null,`class`,`footer`);
let elT60s6 = eo('i','MGeff'+iiqk7k+iif5_8,null,`title`,``,`class`,`${fas('user-secret') + ' icon'}`);
elT60s6.cls = {'green-text': task.isSupervisor};

            for (let className in elT60s6.cls) {
                elT60s6.classList.toggle(className, elT60s6.cls[className]);
            }  
            ec('i');

                    setTimeout(function () {
                        let $el = elT60s6;
                        
            true && tippyTooltip($el, {arrow:true,content:`${'<strong>Supervisors</strong><br>' + task.supervisors.map(supervisor => supervisor.name).join('<br/>')}`});
        ;
                    }, 20);                
                let cndzU5e = status == 'completed';
this.setState('stPbXfZ', cndzU5e);
if (cndzU5e) { 
let elFcvLE = eo('i','rd_ff'+iiqk7k+iif5_8,null,`class`,`${fas('check-double') + ' green-text ml-2 icon'}`);
ec('i');
}let cndyd3t = task.endsAt && ! ['completed'].includes(status);
this.setState('stg0KvF', cndyd3t);
if (cndyd3t) { 
let cmpkNQM = this._lc('cS8_cDuE7', {parent:component,props:{tooltip:true,title:task.endsAtTimestamp - task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time',endsAt:task.endsAtTimestamp,startsAt:component.now},attrs:{title:`${task.endsAtTimestamp - task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time'}`,class:'ml-4 bold'},state:'stg0KvF',insideLoop:true,index:"" +iiqk7k+iif5_8});
}let cnd3o80 = ! Is.empty(task.comments);
this.setState('sts96GC', cnd3o80);
if (cnd3o80) { 
let el_NEV6 = eo('span','1Rcff'+iiqk7k+iif5_8,null,`title`,``,`class`,`ml-3`);
let elc7y0J = eo('i','9avff'+iiqk7k+iif5_8,null,`class`,`${fas('comments') + ' gray-text mr-2 icon'}`);
ec('i');
let elMIzf_ = eo('strong','Nm_ff'+iiqk7k+iif5_8);
text(task.comments.length);
ec('strong');
ec('span');

                    setTimeout(function () {
                        let $el = el_NEV6;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Task Comments')}`});
        ;
                    }, 20);                
                }let cndekY4 = (component.project || task.project) && ! component.isInProjectPage;
this.setState('stJPBX_', cndekY4);
if (cndekY4) { 
let eloBwG_ = eo('a','bfaff'+iiqk7k+iif5_8,null,`href`,`${URLS.project(component.project || task.project)}`,`title`,``,`class`,`ml-3 teal-text`);
let cndv5Nf = task.project.image;
this.setState('stA9SO9', cndv5Nf);
let cndhQKC = !(cndv5Nf);
this.setState('stoWMlR', cndhQKC);
if (cndv5Nf) { 
let elB0JiX = ev('img','L93ff'+iiqk7k+iif5_8,null,`src`,`${task.project.image}`,`class`,`small circle`);
}else { 
let elJYX2X = eo('i','s0Vff'+iiqk7k+iif5_8,null,`class`,`${fas('suitcase') + ' icon'}`);
ec('i');
}ec('a');

                    setTimeout(function () {
                        let $el = eloBwG_;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.project ? component.project.name : task.project.name}`});
        ;
                    }, 20);                
                }let cnd7gBZ = ! Is.empty(task.module);
this.setState('stbTHfc', cnd7gBZ);
if (cnd7gBZ) { 
let eloX1Mv = eo('span','Gzrff'+iiqk7k+iif5_8,null,`title`,``,`class`,`ml-3`);
let el1bNni = eo('i','naWff'+iiqk7k+iif5_8,null,`class`,`${fas('cog') + ' lime-text mr-2 icon'}`);
ec('i');
let elNMiYD = eo('span','5d_ff'+iiqk7k+iif5_8);
text(task.module.name);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = eloX1Mv;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Module')}`});
        ;
                    }, 20);                
                }ec('section');
ec('div');
}
}ec('div');

                    setTimeout(function () {
                        let $el = elfREcc;
                        component.draggable($el);
                    }, 20);                
                ec('div');
let cndhHVR = (component.project || component.user.id == 1) && Object.get(component.project, 'isHigherAuthority', '')  && status != 'autoFailed';
this.setState('stqoGTj', cndhHVR);
if (cndhHVR) { 
let elEaR1a = eo('section','718ff'+iiqk7k,null,`class`,`footer text-right m-b-2`);
let cndSKkR = ! component.openQuickForm[status];
this.setState('staUpys', cndSKkR);
if (cndSKkR) { 
let elK6RbU = eo('button','uQrff'+iiqk7k,null, eventListeners, {onclick:[function(e) {var $el = this;component.openQuickForm[status] = true}]},`title`,``,`type`,`button`,`class`,`btn btn-info btn-circle`);
let elgeJUH = eo('i','spgff'+iiqk7k,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elK6RbU;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Quick add')}`});
        ;
                    }, 20);                
                }let cndYwck = component.openQuickForm[status];
this.setState('stE85n8', cndYwck);
if (cndYwck) { 
let elxHcMx = eo('form','pxAff'+iiqk7k,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.quickAdd($el)}]});

                if (! elxHcMx.formHandler) {
                    window.cfrmdlr = elxHcMx.formHandler = new FormHandler(elxHcMx, component);
                } else {
                    window.cfrmdlr = elxHcMx.formHandler;
                }
            let eldnyPu = ev('input','G5gff'+iiqk7k,null, eventListeners, {oninput:[function(e) {status = this.value;}]},`value`,`${fval(status)}`,`name`,`${(`status`).toInputName()}`,`type`,`hidden`);
eldnyPu.value = fval(status);
let cnd9gb0 = component.project;
this.setState('stvkj8M', cnd9gb0);
let cnd21mJ = !(cnd9gb0);
this.setState('stsKpnT', cnd21mJ);
if (cnd9gb0) { 
let elpsyPJ = ev('input','dK7ff'+iiqk7k,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elpsyPJ.value = fval(component.project.id);
}let elgB9_6 = ev('input','prUff'+iiqk7k,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elxHcMx.formHandler.addError(`title`, 'required', trans('validation.required'));}return elxHcMx.formHandler.removeError(`title`);}]},`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Task Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
let cndm4Y3 = elxHcMx.formHandler.getError(`title`);
this.setState('st9VEIE', cndm4Y3);
let cndGx8z = !(cndm4Y3);
this.setState('stJH_jr', cndGx8z);
if (cndm4Y3) { 
let elEn8Zp = eo('div','6l_ff'+iiqk7k,null,`class`,`alert alert-danger`);
text(elxHcMx.formHandler.getError(`title`));
ec('div');
}let elnsCaH = ev('input','RT2ff'+iiqk7k,null, eventListeners, {oninput:[function(e) {component.user.id = this.value;}]},`value`,`${fval(component.user.id)}`,`name`,`${(`supervisors[]`).toInputName()}`,`type`,`hidden`);
elnsCaH.value = fval(component.user.id);
let cndmkAM = component.project;
this.setState('sti9iBl', cndmkAM);
let cndvX01 = !(cndmkAM);
this.setState('st05KmE', cndvX01);
if (cndmkAM) { 
let cmpoIXL = this._lc('cVEDXV1ZP', {parent:component,props:{value:component.participantId,required:true,items:component.participants},attrs:{name:`${(`participant`).toInputName()}`,heading:'Assignee'},state:'sti9iBl',insideLoop:true,index:"" +iiqk7k});
}else { 
let cmpOvyD = this._lc('c_9MVHu6z', {parent:component,props:{remoteSearch:true,value:component.participantId,required:true,lazyLoading:true,service:component.usersService},attrs:{name:`${(`participant`).toInputName()}`,query:'name',heading:'Assignee',required:''},state:'st05KmE',insideLoop:true,index:"" +iiqk7k});
}let elJcqAz = eo('div','ePZff'+iiqk7k,null,`class`,`text-right m-t-1`);
let el_pwD2 = eo('button','zlYff'+iiqk7k,null, eventListeners, {onclick:[function(e) {var $el = this;component.openQuickForm[status] = false;}]}, boolAttrs, {disabled:component.isSubmitting},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-warning`);
let elattfm = eo('i','2Weff'+iiqk7k,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el_pwD2;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('cancel')}`});
        ;
                    }, 20);                
                let elFhqls = eo('button','EBTff'+iiqk7k,null, boolAttrs, {disabled:component.isSubmitting},`title`,``,`class`,`btn btn-circle btn-success`);
let el_XAhg = eo('i','srnff'+iiqk7k,null,`class`,`${fas('check') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elFhqls;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Create')}`});
        ;
                    }, 20);                
                ec('div');
ec('form');
}ec('section');
}ec('div');
}
let cndIgr7 = ! Is.empty(component.archivedTasks);
this.setState('sthonvx', cndIgr7);
if (cndIgr7) { 
let elFvynM = eo('button','stDf',null, eventListeners, {onclick:[function(e) {var $el = this;component.isViewingArchivedTasks = true}]},`class`,`col-12 col-sm-4 col-md-3 bold pink-text view-archived-btn`);
text(`View Archived Tasks (${ component.archivedTasks.length.format() })`);
ec('button');
}}else if (cnd2fWW) { 
let elYPB2q = eo('div',null,null,`class`,`tasks-list-view`);
let elU36Aj = eo('h3',null,null,`class`,`task-heading simple-card`);
text(`Tasks List (${component.tasksList.length})`);
ec('h3');
let el6Avol = eo('table',null,null,`class`,`table buttoned simple-card`);
let eldS8OM = eo('thead');
let el6d8ua = eo('tr');
let elzI0uA = eo('th');
text(`#`);
ec('th');
let elSAIWO = eo('th');
text(`Task`);
ec('th');
let el6ag8B = eo('th');
text(`Progress`);
ec('th');
let cndh5uI = ! component.isInProjectPage;
this.setState('sthVfSn', cndh5uI);
if (cndh5uI) { 
let elWcodY = eo('th','rgSf');
text(`Project`);
ec('th');
}let eltVdpv = eo('th');
text(`Status`);
ec('th');
let elJvAGM = eo('th');
text(`Remaining Time`);
ec('th');
let elU1qe4 = eo('th');
text(`Participant`);
ec('th');
let eliBRwW = eo('th');
text(`Supervisors`);
ec('th');
let elkbEiW = eo('th',null,null,`class`,`text-center`);
text(`Module`);
ec('th');
let elg3nz_ = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elru4fX = eo('tbody');
for (let index in component.tasksList) {
let task = component.tasksList[index]; 
 let iiYjXu = task.id+ index;
let elPv8gD = eo('tr','xRid55kMYFpK' + index+iiYjXu);
let elCCI8d = eo('td','Twsff'+iiYjXu);
text(task.id);
ec('td');
let elM9nZW = eo('td','Bwcff'+iiYjXu);
let elq_Ge2 = eo('a','TVNff'+iiYjXu,null,`href`,`${URLS.task(task)}`,`title`,``,`class`,`title`);
text(task.title.readMoreChars(30));
ec('a');

                    setTimeout(function () {
                        let $el = elq_Ge2;
                        
            true && tippyTooltip($el, {arrow:true,content:`${task.title}`});
        ;
                    }, 20);                
                let cndqO5s = ! Is.empty(task.comments);
this.setState('stL_Xrx', cndqO5s);
if (cndqO5s) { 
let elXhQO8 = eo('span','D42ff'+iiYjXu,null,`title`,``,`class`,`ml-3`);
let elqvOi2 = eo('i','ljvff'+iiYjXu,null,`class`,`${fas('comments') + ' gray-text mr-2 icon'}`);
ec('i');
let elz1bnf = eo('strong','eBjff'+iiYjXu);
text(task.comments.length);
ec('strong');
ec('span');

                    setTimeout(function () {
                        let $el = elXhQO8;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Task Comments')}`});
        ;
                    }, 20);                
                }ec('td');
let el29Zvx = eo('td','xagff'+iiYjXu);
let cndqZxX = task.progress;
this.setState('stdccWj', cndqZxX);
if (cndqZxX) { 
let elKE2HX = eo('div','1Ohff'+iiYjXu,null,`title`,``,`class`,`task-progress`);
let elZClX6 = eo('div','7atff'+iiYjXu,null, 'style', {width:`${task.progress.percentage + '%'}`},`class`,`completed`);
ec('div');
let els1fp3 = eo('div','Zarff'+iiYjXu,null,`class`,`value`);
text(task.progress.completed + '/' + task.progress.total);
ec('div');
ec('div');

                    setTimeout(function () {
                        let $el = elKE2HX;
                        
            true && tippyTooltip($el, {arrow:true,content:`${Math.floor(task.progress.percentage) + '% Completed'}`});
        ;
                    }, 20);                
                }ec('td');
let cndHiYA = ! component.isInProjectPage;
this.setState('stWB_Qm', cndHiYA);
if (cndHiYA) { 
let elBNvQ4 = eo('td','VaBff'+iiYjXu);
let cndiOT0 = component.project || task.project;
this.setState('stBQ7Kl', cndiOT0);
let cndzPVV = !(cndiOT0);
this.setState('strnR_M', cndzPVV);
if (cndiOT0) { 
let elZymTi = eo('a','U6wff'+iiYjXu,null,`href`,`${URLS.project(component.project || task.project)}`,`title`,``,`class`,`ml-3`);
let cndTFcI = task.project.image;
this.setState('stxSkkc', cndTFcI);
let cnd3lCf = !(cndTFcI);
this.setState('sttiWqm', cnd3lCf);
if (cndTFcI) { 
let elFMlLQ = ev('img','1taff'+iiYjXu,null,`src`,`${task.project.image}`,`class`,`small circle`);
}else { 
let elMm7w0 = eo('i','t2gff'+iiYjXu,null,`class`,`${fas('suitcase') + ' icon'}`);
ec('i');
}ec('a');

                    setTimeout(function () {
                        let $el = elZymTi;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.project ? component.project.name : task.project.name}`});
        ;
                    }, 20);                
                }else { 
let elkNC2u = eo('strong','E2Fff'+iiYjXu);
text(`N/a`);
ec('strong');
}ec('td');
}let eljnVbY = eo('td','Okfff'+iiYjXu,null,`class`,`status-column`);
let el4nEu6 = eo('span','4y4ff'+iiYjXu,null, eventListeners, {onclick:[function(e) {var $el = this;task.canUserControl ? task.openStatusChanger = ! task.openStatusChanger : null;}]});
let eljd9GY = eo('span','cgNff'+iiYjXu,null,`class`,`badge`);
eljd9GY.cls = taskStatus(task);

            for (let className in eljd9GY.cls) {
                eljd9GY.classList.toggle(className, eljd9GY.cls[className]);
            }  
            text(task.status);
ec('span');
let cndhMi_ = task.canUserControl;
this.setState('stcKIwd', cndhMi_);
if (cndhMi_) { 
let ele3qUA = eo('i','NF7ff'+iiYjXu,null,`title`,``,`class`,`${fas('caret-down') + ' icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = ele3qUA;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Change Task Status')}`});
        ;
                    }, 20);                
                }ec('span');
let cndVdKs = task.openStatusChanger;
this.setState('stqdMsX', cndVdKs);
if (cndVdKs) { 
let elPNBZA = eo('div','0iKff'+iiYjXu,null,`class`,`status-changer`);
let cmpvih9 = this._lc('c7UUeOFk4', {parent:component,props:{items:getAllowedTaskStatuses(task),searchable:false,except:task.status},events:{onselect:function(e) {let $el = this; component.updateTaskStatus(task, e.value)}},state:'stqdMsX',insideLoop:true,index:"" +iiYjXu});
ec('div');
}ec('td');
let el52vJa = eo('td','SsOff'+iiYjXu);
let cndiION = task.status == 'completed';
this.setState('st_7_EB', cndiION);
let cndJIS7 = task.endsAtTimestamp && ! ['completed', 'archived'].includes(task.status);
this.setState('stnopBa', cndJIS7);
if (cndiION) { 
let elRecWL = eo('div','svoff'+iiYjXu);
let elHTgKg = eo('i','6vXff'+iiYjXu,null,`title`,``,`class`,`${fas('check-double') + ' green-text icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elHTgKg;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Completed')}`});
        ;
                    }, 20);                
                ec('div');
}else if (cndJIS7) { 
let eljFVL8 = eo('span','fI4ff'+iiYjXu,null,`title`,``);
let elWBH6s = eo('i','ztyff'+iiYjXu,null,`class`,`${fas('clock') + ' mr-2 icon'}`);
ec('i');
let cmp4MGZ = this._lc('cBkOtNC2C', {parent:component,props:{startsAt:task.startsAtTimestamp,endsAt:task.endsAtTimestamp},attrs:{class:'bold'},state:'stnopBa',insideLoop:true,index:"" +iiYjXu});
ec('span');

                    setTimeout(function () {
                        let $el = eljFVL8;
                        
            true && tippyTooltip($el, {arrow:true,content:`${task.endsAtTimestamp - task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time'}`});
        ;
                    }, 20);                
                }ec('td');
let elPHS5W = eo('td','gJjff'+iiYjXu,null,`class`,`text-center`);
let elpkfxL = ev('img','OkQff'+iiYjXu,null,`src`,`${task.participant.image}`,`title`,`${task.participant.name}`,`class`,`small mr-2 circle`,`alt`,`${task.participant.name}`);

                    setTimeout(function () {
                        let $el = elpkfxL;
                        
            true && tippyTooltip($el, {arrow:true,content:`${task.participant.name}`});
        ;
                    }, 20);                
                ec('td');
let elGaE_A = eo('td','pTGff'+iiYjXu,null,`class`,`text-center`);
for (let i in task.supervisors) {
let supervisor = task.supervisors[i]; 
 let ii7ig1 = 'BJXLlWM' + i;
let eljDz7O = eo('span','Z4YNIQIKtRYc' + i+iiYjXu+ii7ig1,null,`class`,`mx-1`);
let elyL0rX = ev('img','5Lxff'+iiYjXu+ii7ig1,null,`src`,`${supervisor.image}`,`title`,`${supervisor.name}`,`class`,`small mr-2 circle`,`alt`,`${supervisor.name}`);

                    setTimeout(function () {
                        let $el = elyL0rX;
                        
            true && tippyTooltip($el, {arrow:true,content:`${supervisor.name}`});
        ;
                    }, 20);                
                ec('span');
}
ec('td');
let elKHWxC = eo('th','5PLff'+iiYjXu,null,`class`,`text-center v-middle gray-text`);
let cndEDfT = Object.get(task.module, 'parent.name', '');
this.setState('stchK_S', cndEDfT);
if (cndEDfT) { 
let elxorDS = eo('span','Qh_ff'+iiYjXu);
text(task.module.parent.name);
ec('span');
let eltEbw6 = eo('i','zoyff'+iiYjXu,null,`class`,`${fas('angle-double-right') + ' mx-2 icon'}`);
ec('i');
}let el0VlBc = eo('span','5Xbff'+iiYjXu);
text(Object.get(task.module, 'name', ''));
ec('span');
ec('th');
let elKdUwA = eo('td','AjHff'+iiYjXu);
let cndrauR = true;
this.setState('st4dWig', cndrauR);
if (cndrauR) { 
let elii5aG = eo('button','xPNff'+iiYjXu,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-cyan`);
let elTH_iY = eo('i','3HIff'+iiYjXu,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elii5aG;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Tasks-board')}`});
        ;
                    }, 20);                
                let elegE3r = eo('button','xVFff'+iiYjXu,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let els6879 = eo('i','54Xff'+iiYjXu,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elegE3r;
                        
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
let elGEDCc = eo('div',null,null,`class`,`w-100`);
let elmK9Z2 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isViewingArchivedTasks = false}]},`class`,`m-b-2 bold btn btn-success float-right`);
text(`Back To
        Board`);
ec('button');
let elzYrJm = eo('table',null,null,`class`,`table table-bordered`);
let elbY3R8 = eo('thead');
let el3CVoA = eo('tr');
let ela91kH = eo('th');
text(`Task`);
ec('th');
let elDgXvc = eo('th');
text(`Participant`);
ec('th');
ec('tr');
ec('thead');
let elA5F5S = eo('tbody');
for (let i in component.archivedTasks) {
let task = component.archivedTasks[i]; 
 let iiB6wf = 'i7wzy86' + i;
let el5OfVs = eo('tr','oFtMu9YOgEvm' + i+iiB6wf);
let elbMTP7 = eo('td','ZV5ff'+iiB6wf);
let elIH8vr = eo('a','qKTff'+iiB6wf,null,`href`,`${URLS.task(task)}`);
text(task.title);
ec('a');
ec('td');
let elK3a27 = eo('td','7yhff'+iiB6wf);
let el_PM0y = ev('img','denff'+iiB6wf,null,`src`,`${task.participant.image}`,`class`,`circle small`,`title`,`${task.participant.name}`,`alt`,`${task.participant.name}`);
let elBpdYf = eo('span','E52ff'+iiB6wf,null,`class`,`ml-2 bold`);
text(task.participant.name);
ec('span');
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
}}ec('div');
let cndFiO3 = component.modalIsOpened;
this.setState('sty9uKF', cndFiO3);
if (cndFiO3) { 
component.modal = this._lc('chCWVB3_e', {parent:component,props:{displayStatusList:component.record.id,participants:component.participants,supervisors:component.supervisors,project:component.project,task:component.record},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null},onsave:function(e) {let $el = this; component.adjustTaskResponse(e)}},state:'sty9uKF'});
}let cndfcPy = component.confirmDelete;
this.setState('stxs0my', cndfcPy);
if (cndfcPy) { 
let cmp3juO = this._lc('cRTnmvEeq', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stxs0my'});
}let cndwElq = component.confirmingArchiving;
this.setState('st1grrD', cndwElq);
if (cndwElq) { 
let cmpPb0D = this._lc('cbUAIuaUu', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmingArchiving = null},onconfirm:function(e) {let $el = this; component.archive()}},state:'st1grrD'});
}
                    this.isReadyToGo();
                }
        });