_Component({
                selector: 'tasks-board',
                c: 'TasksBoard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','switchTo','isViewingArchivedTasks','displayMode','modalIsOpened','record','participants','supervisors','project','adjustTaskResponse','confirmDelete','remove','confirmingArchiving','archive','filterOptions','filteredData','filterBy','isInProjectPage','statuses','tasksBoardView','statusIconTitle','statusIcon','draggable','user','confirmArchiving','detectChanges','openModal','confirmRemoving','now','openQuickForm','quickAdd','participantId','usersService','isSubmitting','archivedTasks','tasksList','sortTasksBy','updateTaskStatus'],
                children: {c4tccoTve:'flk-spinner',cXJ2KZPK9:'flk-dropdown-list',cgW5_nm_D:'flk-dropdown-list',cd5hlnP8a:'flk-dropdown-list',cYl76Zb2k:'flk-dropdown-list',cHp3Zmorx:'flk-dropdown-list',cS9Q7wYx4:'flk-dropdown-list',cfxad_OQz:'flk-dropdown-list',cJdcqqDld:'flk-time-remaining',cgsNfGMZ1:'flk-dropdown-list',cslNzAXqH:'flk-dropdown-list',c6FLpguwk:'flk-dropdown-list',cXJTICkAN:'flk-time-remaining',cg80F4GWG:'task-modal',ce4IdXigG:'flk-alert',caHNWjuSS:'flk-alert'},
                render: function (component) {
                    let elCpzz2 = eo('div',null,null,`class`,`row m-t-2 tasks-board`);
let cndiE8_ = component.isLoading;
this.setState('st9nvdC', cndiE8_);
let cndWbw1 = !(cndiE8_);
this.setState('stkI7En', cndWbw1);
if (cndiE8_) { 
let cmpXrQI = this._lc('c4tccoTve', {parent:component,state:'st9nvdC'});
}else { 
let el4nP5V = eo('div',null,null,`class`,`style-switcher text-right m-y-2 col-12`);
let elZkgwV = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.switchTo('board')}]},`title`,``,`class`,`btn btn-sm btn-cyan`);
let elh_Iol = eo('i',null,null,`class`,`${fas('th-large')} icon fa-2x`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elZkgwV;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Board Mode')}`});
        ;
                    }, 20);                
                let elTRDSh = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.switchTo('list')}]},`title`,``,`class`,`btn btn-sm btn-purple`);
let elkQDAa = eo('i',null,null,`class`,`${fas('th-list')} icon fa-2x`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elTRDSh;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('List Mode')}`});
        ;
                    }, 20);                
                ec('div');
let cndmrz8 = ! component.isViewingArchivedTasks;
this.setState('stBplEY', cndmrz8);
let cndWStx = !(cndmrz8);
this.setState('stnwd1c', cndWStx);
if (cndmrz8) { 
let elLAJu7 = eo('div','MQef',null,`class`,`row w-100`);
let cnd54Sn = component.displayMode == 'list';
this.setState('stVZaz8', cnd54Sn);
let cndbPOp = component.displayMode == 'list';
this.setState('stQBzFg', cndbPOp);
if (cnd54Sn) { 
let elcPJew = eo('div','1Dkf',null,`class`,`simple-card m-b-2 col-12 tasks-list-filter`);
let elT3JJ4 = eo('div','DUNf',null,`class`,`row`);
let cndVjLY = ! Is.empty(component.filterOptions.participants);
this.setState('st2A10x', cndVjLY);
if (cndVjLY) { 
let elOBLqx = eo('div','KGBf',null,`class`,`col-sm-3 filter-container`);
let el_7l74 = eo('div','JhJf',null,`class`,`filter-list`);
let cmpo9cc = this._lc('cXJ2KZPK9', {parent:component,props:{items:component.filterOptions.participants,value:component.filteredData.participants,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('participants', e);}},boolAttrs:{multiple:true},attrs:{heading:'Participants'},state:'st2A10x'});
ec('div');
ec('div');
}let cnd4X1y = ! Is.empty(component.filterOptions.supervisors);
this.setState('stk709N', cnd4X1y);
if (cnd4X1y) { 
let els1yCJ = eo('div','1QIf',null,`class`,`col-sm-3 filter-container`);
let elKh9FA = eo('div','XVvf',null,`class`,`filter-list`);
let cmpIHhX = this._lc('cgW5_nm_D', {parent:component,props:{items:component.filterOptions.supervisors,value:component.filteredData.supervisors,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('supervisors', e);}},boolAttrs:{multiple:true},attrs:{heading:'Supervisors'},state:'stk709N'});
ec('div');
ec('div');
}let cndm6Wj = ! component.isInProjectPage && ! Is.empty(component.filterOptions.projects);
this.setState('stsIC6O', cndm6Wj);
if (cndm6Wj) { 
let elfhkdu = eo('div','8ilf',null,`class`,`col-sm-3 filter-container`);
let elS9eGt = eo('div','0gXf',null,`class`,`filter-list`);
let cmppnkC = this._lc('cd5hlnP8a', {parent:component,props:{items:component.filterOptions.projects,value:component.filteredData.projects,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('projects', e);}},boolAttrs:{multiple:true},attrs:{heading:'Projects'},state:'stsIC6O'});
ec('div');
ec('div');
}let cndJw5H = ! Is.empty(component.filterOptions.statuses);
this.setState('strZJx8', cndJw5H);
if (cndJw5H) { 
let elCP_TA = eo('div','DnIf',null,`class`,`col-sm-3 filter-container`);
let elsGaAN = eo('div','P5Yf',null,`class`,`filter-list`);
let cmphItl = this._lc('cYl76Zb2k', {parent:component,props:{items:component.filterOptions.statuses,value:component.filteredData.statuses,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('statuses', e);}},boolAttrs:{multiple:true},attrs:{heading:'Task Status'},state:'strZJx8'});
ec('div');
ec('div');
}let cndDdKQ = ! Is.empty(component.filterOptions.modules);
this.setState('stOmRcI', cndDdKQ);
if (cndDdKQ) { 
let elN62ss = eo('div','6N0f',null,`class`,`col-sm-3 filter-container`);
let elDmFA4 = eo('div','wG4f',null,`class`,`filter-list`);
let cmphMqk = this._lc('cHp3Zmorx', {parent:component,props:{items:component.filterOptions.modules,value:component.filteredData.modules,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('modules', e);}},boolAttrs:{multiple:true},attrs:{heading:'Project Module'},state:'stOmRcI'});
ec('div');
ec('div');
}let cndshYh = ! Is.empty(component.filterOptions.userStories);
this.setState('st9m5HR', cndshYh);
if (cndshYh) { 
let elSI2JD = eo('div','kXCf',null,`class`,`col-sm-3 filter-container`);
let elrRSnB = eo('div','m36f',null,`class`,`filter-list`);
let cmpJsHT = this._lc('cS9Q7wYx4', {parent:component,props:{items:component.filterOptions.userStories,value:component.filteredData.userStories,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('userStories', e);}},boolAttrs:{multiple:true},attrs:{heading:'User Stories'},state:'st9m5HR'});
ec('div');
ec('div');
}let cndYD4P = ! Is.empty(component.filterOptions.priorities);
this.setState('st8d3ST', cndYD4P);
if (cndYD4P) { 
let elHzXqK = eo('div','L7gf',null,`class`,`col-sm-3 filter-container`);
let el7iI5f = eo('div','A8uf',null,`class`,`filter-list`);
let cmpNzDt = this._lc('cfxad_OQz', {parent:component,props:{items:component.filterOptions.priorities,value:component.filteredData.priorities,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('priorities', e);}},boolAttrs:{multiple:true},attrs:{heading:'Priority'},state:'st8d3ST'});
ec('div');
ec('div');
}ec('div');
ec('div');
}let cndhCn3 = component.displayMode == 'board';
this.setState('stsKxpX', cndhCn3);
let cnd3Zhb = cndbPOp;
this.setState('stCfanK', cnd3Zhb);
if (cndhCn3) { 
for (let i in component.statuses) {
let status = component.statuses[i]; 
 let iiclJz = '_JdX02S' + i;
let elW3mTi = eo('div','e2SSoS9s3L5Q' + i+iiclJz,null,`class`,`col-12 col-sm-6 col-md-4 col-lg-3`);
let elXbrGU = eo('div','G3wff'+iiclJz,null,`class`,`tasks-group ${ status }`);
let elQQOmx = eo('h3','yy1ff'+iiclJz,null,`class`,`m-b-2`);
let elbI88J = eo('span','NiNff'+iiclJz);
text(trans(status));
ec('span');
let elypDYU = eo('span','VuZff'+iiclJz,null,`class`,`ml-2`);
text(`(${ component.tasksBoardView[status] ? component.tasksBoardView[status].toArray().length : 0 })`);
ec('span');
let elFkqqH = eo('span','xEzff'+iiclJz,null,`title`,``,`class`,`material-icons float-right`);
text(component.statusIcon(status));
ec('span');

                    setTimeout(function () {
                        let $el = elFkqqH;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.statusIconTitle(status)}`});
        ;
                    }, 20);                
                ec('h3');
let elhfIiL = eo('div','ouMff'+iiclJz,null, eventListeners, {onready:[function(e) {var $el = this;component.draggable($el)}]},`class`,`tasks-list`,`data-status`,`${ status }`);
let cndSIZB = component.tasksBoardView[status];
this.setState('st88Oks', cndSIZB);
if (cndSIZB) { 
for (let index in component.tasksBoardView[status].toArray()) {
let task = component.tasksBoardView[status].toArray()[index]; 
 let iiB5mN = task.id + status+ index;
let elvwK0n = eo('div','8sDYEIOQgCf1' + index+iiclJz+iiB5mN,null,`class`,`task simple-card m-b-1 ${cls({item: task.canUserControl, undraggable: ! task.canUserControl})}`,`data-id`,`${ task.id }`);
let cnd3W2G = task.isParticipant || task.isSupervisor || task.project && task.project.is.higherAuthority;
this.setState('stktVfg', cnd3W2G);
let cndMfPg = !(cnd3W2G);
this.setState('steFPLE', cndMfPg);
if (cnd3W2G) { 
let elJzMFW = eo('a','Eyfff'+iiclJz+iiB5mN,null,`href`,`${URLS.task(task)}`,`class`,`bold`);
text('#' + task.id + ' ' + task.title);
ec('a');
}else { 
let elFpWC2 = eo('div','hYwff'+iiclJz+iiB5mN,null,`class`,`bold`);
text(task.title);
ec('div');
}let cnd0cel = ['completed', 'autoFailed', 'failed'].includes(status) && (component.user.id == 1 || task.isSupervisor || component.project && component.project.isProjectManager) ;
this.setState('sttRWFF', cnd0cel);
if (cnd0cel) { 
let elw9kgj = eo('button','4KPff'+iiclJz+iiB5mN,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmArchiving(task)}]},`title`,``,`class`,`float-right pink-text`);
let eloCSxt = eo('i','b4nff'+iiclJz+iiB5mN,null,`class`,`${fas('archive')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elw9kgj;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Archive Task')}`});
        ;
                    }, 20);                
                }let cndqdS4 = component.user.id  == 1 || task.isSupervisor || task.isParticipant || (component.project && component.project.isProjectManager);
this.setState('stwExTj', cndqdS4);
if (cndqdS4) { 
let elwlQTA = eo('button','oD_ff'+iiclJz+iiB5mN,null, eventListeners, {onclick:[function(e) {var $el = this;task.dropdown = ! task.dropdown; component.detectChanges();}]},`type`,`button`,`class`,` float-right`);
let elPmT7Z = eo('i','NuAff'+iiclJz+iiB5mN,null,`title`,``,`class`,`${fas('cog')} fa-spin icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elPmT7Z;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Actions')}`});
        ;
                    }, 20);                
                ec('button');
}let elqsMKb = eo('div','fTJff'+iiclJz+iiB5mN,null,`class`,`participant bold ${cls({'green-text': task.participant.id == component.user.id})}`,`title`,``);
text(task.participant.name);
ec('div');

                    setTimeout(function () {
                        let $el = elqsMKb;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Participant')}`});
        ;
                    }, 20);                
                let cndpDwn = task.dropdown;
this.setState('st7mxMf', cndpDwn);
if (cndpDwn) { 
let elF401H = eo('div','OK9ff'+iiclJz+iiB5mN,null,`class`,`action-btns m-t-1`);
let elZAqmp = eo('button','PSOff'+iiclJz+iiB5mN,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-cyan`);
let elmq5mI = eo('i','rJEff'+iiclJz+iiB5mN,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elZAqmp;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Tasks-board')}`});
        ;
                    }, 20);                
                let elI1_Wn = eo('button','1lWff'+iiclJz+iiB5mN,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-danger`);
let elDqK9D = eo('i','Wszff'+iiclJz+iiB5mN,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elI1_Wn;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Tasks-board')}`});
        ;
                    }, 20);                
                ec('div');
}let elv0lmU = eo('section','Ckbff'+iiclJz+iiB5mN,null,`class`,`footer`);
let eltPebG = eo('i','Pmoff'+iiclJz+iiB5mN,null,`title`,``,`class`,`${fas('user-secret')} icon  ${cls({'green-text': task.isSupervisor})}`);
ec('i');

                    setTimeout(function () {
                        let $el = eltPebG;
                        
            true && tippyTooltip($el, {arrow:true,content:`${'<strong>Supervisors</strong><br>' + task.supervisors.map(supervisor => supervisor.name).join('<br/>')}`});
        ;
                    }, 20);                
                let cndtEe1 = status == 'completed';
this.setState('st7NrL_', cndtEe1);
if (cndtEe1) { 
let elj8y8H = eo('i','DxSff'+iiclJz+iiB5mN,null,`class`,`${fas('check-double')} green-text ml-2 icon`);
ec('i');
}let cndvQtt = task.endsAt && ! ['completed'].includes(status);
this.setState('stbFOZE', cndvQtt);
if (cndvQtt) { 
let cmppf_H = this._lc('cJdcqqDld', {parent:component,props:{tooltip:true,title:task.endsAtTimestamp - task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time',endsAt:task.endsAtTimestamp,startsAt:component.now},attrs:{title:`${task.endsAtTimestamp - task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time'}`,class:'ml-4 bold'},state:'stbFOZE',insideLoop:true,index:"" +iiclJz+iiB5mN});
}let cndI3GT = ! Is.empty(task.comments);
this.setState('stNEKpe', cndI3GT);
if (cndI3GT) { 
let elGMlUL = eo('span','BoBff'+iiclJz+iiB5mN,null,`title`,``,`class`,`ml-3`);
let el4aC5p = eo('i','8JSff'+iiclJz+iiB5mN,null,`class`,`${fas('comments')} gray-text mr-2 icon`);
ec('i');
let elqVyVB = eo('strong','A9hff'+iiclJz+iiB5mN);
text(task.comments.length);
ec('strong');
ec('span');

                    setTimeout(function () {
                        let $el = elGMlUL;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Task Comments')}`});
        ;
                    }, 20);                
                }let cndc_K4 = (component.project || task.project) && ! component.isInProjectPage;
this.setState('st5avrR', cndc_K4);
if (cndc_K4) { 
let el7rrNm = eo('a','9vhff'+iiclJz+iiB5mN,null,`href`,`${URLS.project(component.project || task.project)}`,`title`,``,`class`,`ml-3 teal-text`);
let cndXPij = task.project.image;
this.setState('stSRaE4', cndXPij);
let cndKw4p = !(cndXPij);
this.setState('stoGPXm', cndKw4p);
if (cndXPij) { 
let elhYfoo = ev('img','U3_ff'+iiclJz+iiB5mN,null,`src`,`${task.project.image}`,`class`,`small circle`);
}else { 
let elO_9gy = eo('i','P4Cff'+iiclJz+iiB5mN,null,`class`,`${fas('suitcase')} icon`);
ec('i');
}ec('a');

                    setTimeout(function () {
                        let $el = el7rrNm;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.project ? component.project.name : task.project.name}`});
        ;
                    }, 20);                
                }let cndN8Co = ! Is.empty(task.module);
this.setState('stliqIl', cndN8Co);
if (cndN8Co) { 
let elwhFCr = eo('span','Fllff'+iiclJz+iiB5mN,null,`title`,``,`class`,`ml-3`);
let elsYluX = eo('i','_wwff'+iiclJz+iiB5mN,null,`class`,`${fas('cog')} lime-text mr-2 icon`);
ec('i');
let ele7VQB = eo('span','vMGff'+iiclJz+iiB5mN);
text(task.module.name);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elwhFCr;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Module')}`});
        ;
                    }, 20);                
                }ec('section');
ec('div');
}
}ec('div');

                    setTimeout(function () {
                        let $el = elhfIiL;
                        component.draggable($el);
                    }, 20);                
                ec('div');
let cndc1RF = (component.project || component.user.id == 1) && Object.get(component.project, 'isHigherAuthority', '')  && status != 'autoFailed';
this.setState('stxfbnP', cndc1RF);
if (cndc1RF) { 
let elFoHvO = eo('section','7AXff'+iiclJz,null,`class`,`footer text-right m-b-2`);
let cndesCc = ! component.openQuickForm[status];
this.setState('stJmvrd', cndesCc);
if (cndesCc) { 
let el3mABs = eo('button','2ibff'+iiclJz,null, eventListeners, {onclick:[function(e) {var $el = this;component.openQuickForm[status] = true}]},`title`,``,`type`,`button`,`class`,`btn btn-info btn-circle`);
let el5BaCE = eo('i','3Onff'+iiclJz,null,`class`,`${fas('plus')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el3mABs;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Quick add')}`});
        ;
                    }, 20);                
                }let cnd1QA2 = component.openQuickForm[status];
this.setState('stIEMie', cnd1QA2);
if (cnd1QA2) { 
let elQVwkO = eo('form','ovnff'+iiclJz,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.quickAdd($el)}]});

                if (! elQVwkO.formHandler) {
                    window.cfrmdlr = elQVwkO.formHandler = new FormHandler(elQVwkO, component);
                } else {
                    window.cfrmdlr = elQVwkO.formHandler;
                }
            let eliwG6E = ev('input','Byiff'+iiclJz,null, eventListeners, {oninput:[function(e) {status = this.value;}]},`value`,`${fval(status)}`,`name`,`${(`status`).toInputName()}`,`type`,`hidden`);
eliwG6E.value = fval(status);
let cndBuSe = component.project;
this.setState('st5uHcy', cndBuSe);
let cnd6aer = !(cndBuSe);
this.setState('stOQKnP', cnd6aer);
if (cndBuSe) { 
let elFmsit = ev('input','8Keff'+iiclJz,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elFmsit.value = fval(component.project.id);
}let elba0ml = ev('input','Msyff'+iiclJz,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQVwkO.formHandler.addError(`title`, 'required', trans('validation.required'));}return elQVwkO.formHandler.removeError(`title`);}]},`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Task Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
let cndbq6c = elQVwkO.formHandler.getError(`title`);
this.setState('stynq6h', cndbq6c);
let cnd1PDa = !(cndbq6c);
this.setState('stdyBhU', cnd1PDa);
if (cndbq6c) { 
let elXwqeT = eo('div','9biff'+iiclJz,null,`class`,`alert alert-danger`);
text(elQVwkO.formHandler.getError(`title`));
ec('div');
}let el8rWnk = ev('input','w5qff'+iiclJz,null, eventListeners, {oninput:[function(e) {component.user.id = this.value;}]},`value`,`${fval(component.user.id)}`,`name`,`${(`supervisors[]`).toInputName()}`,`type`,`hidden`);
el8rWnk.value = fval(component.user.id);
let cndHyWW = component.project;
this.setState('stBiOPP', cndHyWW);
let cndI4ZL = !(cndHyWW);
this.setState('sthWZUp', cndI4ZL);
if (cndHyWW) { 
let cmpqoDI = this._lc('cgsNfGMZ1', {parent:component,props:{value:component.participantId,required:true,items:component.participants},attrs:{name:`${(`participant`).toInputName()}`,heading:'Assignee'},state:'stBiOPP',insideLoop:true,index:"" +iiclJz});
}else { 
let cmpS1b7 = this._lc('cslNzAXqH', {parent:component,props:{remoteSearch:true,value:component.participantId,required:true,lazyLoading:true,service:component.usersService},attrs:{name:`${(`participant`).toInputName()}`,query:'name',heading:'Assignee',required:''},state:'sthWZUp',insideLoop:true,index:"" +iiclJz});
}let elAWart = eo('div','aiVff'+iiclJz,null,`class`,`text-right m-t-1`);
let el5AsS0 = eo('button','iEIff'+iiclJz,null, eventListeners, {onclick:[function(e) {var $el = this;component.openQuickForm[status] = false;}]}, boolAttrs, {disabled:component.isSubmitting},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-warning`);
let elmTR61 = eo('i','_sGff'+iiclJz,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el5AsS0;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('cancel')}`});
        ;
                    }, 20);                
                let elH5Cir = eo('button','TKEff'+iiclJz,null, boolAttrs, {disabled:component.isSubmitting},`title`,``,`class`,`btn btn-circle btn-success`);
let el7RpNv = eo('i','h8xff'+iiclJz,null,`class`,`${fas('check')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elH5Cir;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Create')}`});
        ;
                    }, 20);                
                ec('div');
ec('form');
}ec('section');
}ec('div');
}
let cndT3XR = ! Is.empty(component.archivedTasks);
this.setState('st1_KT2', cndT3XR);
if (cndT3XR) { 
let eljQkQP = eo('button','CDsf',null, eventListeners, {onclick:[function(e) {var $el = this;component.isViewingArchivedTasks = true}]},`class`,`col-12 col-sm-4 col-md-3 bold pink-text view-archived-btn`);
text(`View Archived Tasks (${ component.archivedTasks.length.format() })`);
ec('button');
}}else if (cnd3Zhb) { 
let elM8H2h = eo('div',null,null,`class`,`tasks-list-view`);
let el7m8OB = eo('h3',null,null,`class`,`task-heading simple-card`);
text(`Tasks List (${component.tasksList.length})`);
ec('h3');
let el8WYD9 = eo('table',null,null,`class`,`table buttoned simple-card`);
let elmSsy6 = eo('thead');
let elgmVz3 = eo('tr');
let elP47bT = eo('th',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('id')}]},`title`,``);
text(`#`);
ec('th');

                    setTimeout(function () {
                        let $el = elP47bT;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort By ID')}`});
        ;
                    }, 20);                
                let elWIQJU = eo('th',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('title')}]},`title`,``);
text(`Task`);
ec('th');

                    setTimeout(function () {
                        let $el = elWIQJU;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort By Title')}`});
        ;
                    }, 20);                
                let el8onXV = eo('th');
let el8oEPo = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('progress.completed')}]},`title`,``);
text(`Progress`);
ec('button');

                    setTimeout(function () {
                        let $el = el8oEPo;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort By Progress')}`});
        ;
                    }, 20);                
                ec('th');
let cndlZBu = ! component.isInProjectPage;
this.setState('stKx0MV', cndlZBu);
if (cndlZBu) { 
let el4y_V_ = eo('th','mgFf');
text(`Project`);
ec('th');
}let elWCoaH = eo('th',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('status')}]},`title`,``);
text(`Status`);
ec('th');

                    setTimeout(function () {
                        let $el = elWCoaH;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort by status')}`});
        ;
                    }, 20);                
                let elvLMO8 = eo('th',null,null,`title`,``);
text(`R Time`);
ec('th');

                    setTimeout(function () {
                        let $el = elvLMO8;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remaining Time')}`});
        ;
                    }, 20);                
                let elo0bDb = eo('th',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('participant.name')}]},`title`,``);
text(`Participant`);
ec('th');

                    setTimeout(function () {
                        let $el = elo0bDb;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort By Participant')}`});
        ;
                    }, 20);                
                let elyOtUB = eo('th');
text(`Supervisors`);
ec('th');
let elAODPH = eo('th',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('module.name')}]},`title`,``,`class`,`text-center`);
text(`Module`);
ec('th');

                    setTimeout(function () {
                        let $el = elAODPH;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort by Module')}`});
        ;
                    }, 20);                
                let el5sWGN = eo('th',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sortTasksBy('priority')}]},`title`,``,`class`,`text-center`);
text(`Priority`);
ec('th');

                    setTimeout(function () {
                        let $el = el5sWGN;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sort by Priority')}`});
        ;
                    }, 20);                
                let elvNDQB = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elb94np = eo('tbody');
for (let index in component.tasksList) {
let task = component.tasksList[index]; 
 let iirWlw = task.id+ index;
let elxiyNa = eo('tr','rKeudLEvSt_M' + index+iirWlw,null,`class`,` ${cls({'alert-danger': task.priority == 'high', 'alert-warning': task.priority == 'medium', 'alert-info': task.priority == 'low'})}`);
let elFNPqk = eo('td','3W2ff'+iirWlw);
text(task.id);
ec('td');
let elNTu4H = eo('td','loIff'+iirWlw);
let el_4ujM = eo('a','VRiff'+iirWlw,null,`href`,`${URLS.task(task)}`,`title`,``,`class`,`title`);
text(task.title.readMoreChars(30));
ec('a');

                    setTimeout(function () {
                        let $el = el_4ujM;
                        
            true && tippyTooltip($el, {arrow:true,content:`${task.title}`});
        ;
                    }, 20);                
                let cnd_Kvw = ! Is.empty(task.comments);
this.setState('stebI7e', cnd_Kvw);
if (cnd_Kvw) { 
let elVQ7LH = eo('span','R4nff'+iirWlw,null,`title`,``,`class`,`ml-3`);
let elbgrnU = eo('i','SzKff'+iirWlw,null,`class`,`${fas('comments')} gray-text mr-2 icon`);
ec('i');
let elUFWdi = eo('strong','7soff'+iirWlw);
text(task.comments.length);
ec('strong');
ec('span');

                    setTimeout(function () {
                        let $el = elVQ7LH;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Task Comments')}`});
        ;
                    }, 20);                
                }ec('td');
let el8UmY3 = eo('td','kztff'+iirWlw);
let cndtmMA = task.progress;
this.setState('stFPjme', cndtmMA);
if (cndtmMA) { 
let elZAj6W = eo('div','xd5ff'+iirWlw,null,`title`,``,`class`,`task-progress`);
let elj4gSL = eo('div','Rznff'+iirWlw,null, 'style', {width:`${task.progress.percentage + '%'}`},`class`,`completed`);
ec('div');
let elhgeAw = eo('div','H5sff'+iirWlw,null,`class`,`value`);
text(task.progress.completed + '/' + task.progress.total);
ec('div');
ec('div');

                    setTimeout(function () {
                        let $el = elZAj6W;
                        
            true && tippyTooltip($el, {arrow:true,content:`${Math.floor(task.progress.percentage) + '% Completed'}`});
        ;
                    }, 20);                
                }ec('td');
let cndLOs9 = ! component.isInProjectPage;
this.setState('stDCtIa', cndLOs9);
if (cndLOs9) { 
let elc7bJL = eo('td','ZITff'+iirWlw);
let cndP8hg = component.project || task.project;
this.setState('stTUx44', cndP8hg);
let cndLxMF = !(cndP8hg);
this.setState('stLAwsz', cndLxMF);
if (cndP8hg) { 
let elG5BNC = eo('a','uNsff'+iirWlw,null,`href`,`${URLS.project(component.project || task.project)}`,`title`,``,`class`,`ml-3`);
let cndDXjD = task.project.image;
this.setState('stUQWns', cndDXjD);
let cndr8tQ = !(cndDXjD);
this.setState('stplpD_', cndr8tQ);
if (cndDXjD) { 
let elP_rUC = ev('img','00fff'+iirWlw,null,`src`,`${task.project.image}`,`class`,`small circle`);
}else { 
let elHiT81 = eo('i','BpJff'+iirWlw,null,`class`,`${fas('suitcase')} icon`);
ec('i');
}ec('a');

                    setTimeout(function () {
                        let $el = elG5BNC;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.project ? component.project.name : task.project.name}`});
        ;
                    }, 20);                
                }else { 
let elhg10v = eo('strong','Ht3ff'+iirWlw);
text(`N/a`);
ec('strong');
}ec('td');
}let ellrhv3 = eo('td','qebff'+iirWlw,null,`class`,`status-column`);
let elyONEW = eo('span','voTff'+iirWlw,null, eventListeners, {onclick:[function(e) {var $el = this;task.canUserControl ? task.openStatusChanger = ! task.openStatusChanger : null;}]});
let elPVn3X = eo('span','301ff'+iirWlw,null,`class`,`badge ${cls(taskStatus(task))}`);
text(task.status);
ec('span');
let cndRtah = task.canUserControl;
this.setState('stp3hC9', cndRtah);
if (cndRtah) { 
let eliW14e = eo('i','Wyhff'+iirWlw,null,`title`,``,`class`,`${fas('caret-down')} icon`);
ec('i');

                    setTimeout(function () {
                        let $el = eliW14e;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Change Task Status')}`});
        ;
                    }, 20);                
                }ec('span');
let cndkY_z = task.openStatusChanger;
this.setState('stvKTRP', cndkY_z);
if (cndkY_z) { 
let eli84n3 = eo('div','b0sff'+iirWlw,null,`class`,`status-changer`);
let cmpb6S5 = this._lc('c6FLpguwk', {parent:component,props:{items:getAllowedTaskStatuses(task),searchable:false,except:task.status},events:{onselect:function(e) {let $el = this; component.updateTaskStatus(task, e.value)}},state:'stvKTRP',insideLoop:true,index:"" +iirWlw});
ec('div');
}ec('td');
let el0oOd0 = eo('td','O_Gff'+iirWlw);
let cndzjjG = task.status == 'completed';
this.setState('st2Q0vQ', cndzjjG);
let cndmfIC = task.endsAtTimestamp && ! ['completed', 'archived'].includes(task.status);
this.setState('stp5nwG', cndmfIC);
if (cndzjjG) { 
let elpBDGp = eo('div','uIMff'+iirWlw);
let eluRjDm = eo('i','koMff'+iirWlw,null,`title`,``,`class`,`${fas('check-double')} green-text icon`);
ec('i');

                    setTimeout(function () {
                        let $el = eluRjDm;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Completed')}`});
        ;
                    }, 20);                
                ec('div');
}else if (cndmfIC) { 
let elMQTCB = eo('span','uKxff'+iirWlw,null,`title`,``);
let el7Xqxo = eo('i','s4off'+iirWlw,null,`class`,`${fas('clock')} mr-2 icon`);
ec('i');
let cmpAYHW = this._lc('cXJTICkAN', {parent:component,props:{startsAt:task.startsAtTimestamp,endsAt:task.endsAtTimestamp},attrs:{class:'bold'},state:'stp5nwG',insideLoop:true,index:"" +iirWlw});
ec('span');

                    setTimeout(function () {
                        let $el = elMQTCB;
                        
            true && tippyTooltip($el, {arrow:true,content:`${task.endsAtTimestamp - task.startsAtTimestamp <= 0 ? 'Time up' : 'Remaining Time'}`});
        ;
                    }, 20);                
                }ec('td');
let el_ReGb = eo('td','8pdff'+iirWlw,null,`class`,`text-center`);
let elvEBBW = ev('img','UCSff'+iirWlw,null,`src`,`${task.participant.image}`,`title`,`${task.participant.name}`,`class`,`small mr-2 circle`,`alt`,`${task.participant.name}`);

                    setTimeout(function () {
                        let $el = elvEBBW;
                        
            true && tippyTooltip($el, {arrow:true,content:`${task.participant.name}`});
        ;
                    }, 20);                
                ec('td');
let elPY1ob = eo('td','bViff'+iirWlw,null,`class`,`text-center`);
for (let i in task.supervisors) {
let supervisor = task.supervisors[i]; 
 let iiCdHm = 'rpAdsDZ' + i;
let el88Oty = eo('span','Zw2hredtgJyJ' + i+iirWlw+iiCdHm,null,`class`,`mx-1`);
let elvkCrf = ev('img','fYgff'+iirWlw+iiCdHm,null,`src`,`${supervisor.image}`,`title`,`${supervisor.name}`,`class`,`small mr-2 circle`,`alt`,`${supervisor.name}`);

                    setTimeout(function () {
                        let $el = elvkCrf;
                        
            true && tippyTooltip($el, {arrow:true,content:`${supervisor.name}`});
        ;
                    }, 20);                
                ec('span');
}
ec('td');
let el_RyOX = eo('th','SRdff'+iirWlw,null,`class`,`text-center v-middle gray-text`);
let cndLdIj = Object.get(task.module, 'parent.name', '');
this.setState('stnLUNx', cndLdIj);
if (cndLdIj) { 
let el3a6gm = eo('span','HKcff'+iirWlw);
text(task.module.parent.name);
ec('span');
let elRrICT = eo('i','DdIff'+iirWlw,null,`class`,`${fas('angle-double-right')} mx-2 icon`);
ec('i');
}let el11ebW = eo('span','PLAff'+iirWlw);
text(Object.get(task.module, 'name', ''));
ec('span');
ec('th');
let elkFcWG = eo('th','8d4ff'+iirWlw,null,`class`,`text-center v-middle gray-text`);
let cndngrx = task.priority;
this.setState('stY4ewO', cndngrx);
if (cndngrx) { 
let elinZnz = eo('span','_Odff'+iirWlw);
text(task.priority);
ec('span');
}ec('th');
let elcYp09 = eo('td','7GBff'+iirWlw);
let cndPVzq = true;
this.setState('stFMw1G', cndPVzq);
if (cndPVzq) { 
let elxQnrH = eo('button','1w7ff'+iirWlw,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-cyan`);
let elfxvZn = eo('i','PRDff'+iirWlw,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elxQnrH;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Tasks-board')}`});
        ;
                    }, 20);                
                let elz8r93 = eo('button','RGIff'+iirWlw,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(task, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let el3ijjp = eo('i','2Y7ff'+iirWlw,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elz8r93;
                        
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
let elu2wB_ = eo('div',null,null,`class`,`w-100`);
let elXfz5P = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isViewingArchivedTasks = false}]},`class`,`m-b-2 bold btn btn-success float-right`);
text(`Back To
        Board`);
ec('button');
let elJUpqM = eo('table',null,null,`class`,`table table-bordered`);
let elucJKr = eo('thead');
let el2MxnN = eo('tr');
let elvwn_p = eo('th');
text(`Task`);
ec('th');
let elYjLzv = eo('th');
text(`Participant`);
ec('th');
ec('tr');
ec('thead');
let elUASbN = eo('tbody');
for (let i in component.archivedTasks) {
let task = component.archivedTasks[i]; 
 let iitQJF = 'Fhx1wdW' + i;
let elRAaV5 = eo('tr','8cDdWXJc6UZc' + i+iitQJF);
let elngjM3 = eo('td','JBJff'+iitQJF);
let el3IUWc = eo('a','Cjbff'+iitQJF,null,`href`,`${URLS.task(task)}`);
text(task.title);
ec('a');
ec('td');
let elL8JkE = eo('td','FY0ff'+iitQJF);
let elIJQZL = ev('img','OWmff'+iitQJF,null,`src`,`${task.participant.image}`,`class`,`circle small`,`title`,`${task.participant.name}`,`alt`,`${task.participant.name}`);
let elpqda4 = eo('span','A6hff'+iitQJF,null,`class`,`ml-2 bold`);
text(task.participant.name);
ec('span');
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
}}ec('div');
let cndQgDu = component.modalIsOpened;
this.setState('st7GnRw', cndQgDu);
if (cndQgDu) { 
component.modal = this._lc('cg80F4GWG', {parent:component,props:{displayStatusList:component.record.id,participants:component.participants,supervisors:component.supervisors,project:component.project,task:component.record},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null},onsave:function(e) {let $el = this; component.adjustTaskResponse(e)}},state:'st7GnRw'});
}let cndgrgP = component.confirmDelete;
this.setState('st86Tlr', cndgrgP);
if (cndgrgP) { 
let cmproTW = this._lc('ce4IdXigG', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st86Tlr'});
}let cndDjiP = component.confirmingArchiving;
this.setState('stOzN98', cndDjiP);
if (cndDjiP) { 
let cmpOFVm = this._lc('caHNWjuSS', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmingArchiving = null},onconfirm:function(e) {let $el = this; component.archive()}},state:'stOzN98'});
}
                    this.isReadyToGo();
                }
        });