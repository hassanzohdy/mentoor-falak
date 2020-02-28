_Component({
                selector: 'project-bugs-page',
                c: 'ProjectBugsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','bugs','detectChanges','confirmRemoving','modalIsOpened','record','onSubmit','confirmDelete','remove','filterOptions','filteredData','filterBy'],
                children: {cxvH4pXVQ:'flk-dropdown-list',c42BZEWGb:'flk-dropdown-list',c8KJUy5iP:'flk-dropdown-list',coPYSdB2M:'flk-dropdown-list',cl78E_RJv:'flk-dropdown-list',cG8mYnMQ_:'flk-time-ago',ce2prBuUp:'project-layout',cHR37LZN0:'bug-modal',cQQEdk_Gf:'flk-alert'},
                render: function (component) {
                    let cmp6yX_ = this._lc('ce2prBuUp', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elJs5pe = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add', {status: 'active'})}]},`class`,`float-right btn btn-success bold`);
let elth61n = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Bug`);
ec('button');
let elFX9dU = eo('h1',null,null,`class`,`m-y-1 purple-text`);
text( component.project.name );
let elfdFVb = ev('img',null,null,`src`,`${assets('images/bug.jpg')}`,`title`,``,`style`,`width: 20px; height: 30px; border-radius: 50%; margin-left: 0.3rem; margin-right: 0.2rem`);

                    setTimeout(function () {
                        let $el = elfdFVb;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('bug')}`});
        ;
                    }, 20);                
                let elIInSF = eo('span',null,null,`class`,`bold red-text mr-2`);
text(`s`);
ec('span');
text(`(${ component.project.bugs.length })`);
ec('h1');
let elCxvyc = eo('div',null,null,`class`,`simple-card m-b-2 col-12 tasks-list-filter`);
let elQpaHS = eo('div',null,null,`class`,`row`);
let cndd2Sq = ! Is.empty(component.filterOptions.assignees);
this.setState('stpdmBi', cndd2Sq);
if (cndd2Sq) { 
let elbDchs = eo('div','U1Mf',null,`class`,`col-sm-3 filter-container`);
let elhCuug = eo('div','d6Nf',null,`class`,`filter-list`);
let cmpABpi = this._lc('cxvH4pXVQ', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.assignees,value:component.filteredData.assignees,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('assignees', e);}},boolAttrs:{multiple:true},attrs:{heading:'Assignees'},state:'stpdmBi'});
ec('div');
ec('div');
}let cndHWyV = ! Is.empty(component.filterOptions.testers);
this.setState('st6ov2q', cndHWyV);
if (cndHWyV) { 
let el2InME = eo('div','ZQHf',null,`class`,`col-sm-3 filter-container`);
let elz5mvw = eo('div','avrf',null,`class`,`filter-list`);
let cmp6l3e = this._lc('c42BZEWGb', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.testers,value:component.filteredData.testers,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('testers', e);}},boolAttrs:{multiple:true},attrs:{heading:'Testers'},state:'st6ov2q'});
ec('div');
ec('div');
}let cnd50Rs = ! Is.empty(component.filterOptions.priorities);
this.setState('st1pwcV', cnd50Rs);
if (cnd50Rs) { 
let el3F7ns = eo('div','Gy2f',null,`class`,`col-sm-3 filter-container`);
let elr5tdc = eo('div','gL_f',null,`class`,`filter-list`);
let cmpk6Tj = this._lc('c8KJUy5iP', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.priorities,value:component.filteredData.priorities,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('priorities', e);}},boolAttrs:{multiple:true},attrs:{heading:'Priority'},state:'st1pwcV'});
ec('div');
ec('div');
}let cndCQXt = ! Is.empty(component.filterOptions.modules);
this.setState('stpS5Al', cndCQXt);
if (cndCQXt) { 
let elmXwHz = eo('div','WoVf',null,`class`,`col-sm-3 filter-container`);
let eluDTOS = eo('div','gV4f',null,`class`,`filter-list`);
let cmpCjIH = this._lc('coPYSdB2M', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.modules,value:component.filteredData.modules,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('modules', e);}},boolAttrs:{multiple:true},attrs:{heading:'Module'},state:'stpS5Al'});
ec('div');
ec('div');
}let cndzixK = ! Is.empty(component.filterOptions.sprints);
this.setState('st8aqye', cndzixK);
if (cndzixK) { 
let elxag3y = eo('div','TWEf',null,`class`,`col-sm-3 filter-container`);
let ellyo34 = eo('div','U52f',null,`class`,`filter-list`);
let cmpQ7vw = this._lc('cl78E_RJv', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.sprints,value:component.filteredData.sprints,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('sprints', e);}},boolAttrs:{multiple:true},attrs:{heading:'Sprints'},state:'st8aqye'});
ec('div');
ec('div');
}ec('div');
ec('div');
for (let status in component.bugs) {
let bugsOptions = component.bugs[status]; 
 let iiiQba = 'mjcHP3K' + status;
let elQzKIe = eo('h4','ypNlJy22_Cvb' + status+iiiQba,null, eventListeners, {onclick:[function(e) {var $el = this;bugsOptions.opened = ! bugsOptions.opened; component.detectChanges();}]},`class`,`text-capitalize m-t-2 pointer gray-text simple-card`);
let elKphhZ = eo('span','oPUff'+iiiQba);
text(status + ' Bugs (' + bugsOptions.bugs.length + ')');
ec('span');
let cndZOt9 = bugsOptions.opened;
this.setState('stDnP5R', cndZOt9);
let cndkIT2 = !(cndZOt9);
this.setState('stYbPCW', cndkIT2);
if (cndZOt9) { 
let elrf75Z = eo('i','npIff'+iiiQba,null,`class`,`${fas('angle-down')} ml-2 icon`);
ec('i');
}else { 
let eltTAHJ = eo('i','Dndff'+iiiQba,null,`class`,`${fas('angle-up')} ml-2 icon`);
ec('i');
}ec('h4');
let cndK3HW = bugsOptions.opened;
this.setState('sttAw9a', cndK3HW);
if (cndK3HW) { 
let elTouKG = eo('div','dxzff'+iiiQba,null,`class`,`table-responsive`);
let eli4wdI = eo('table','gDJff'+iiiQba,null,`class`,`table buttoned simple-card`);
let el6GAvV = eo('thead','IP8ff'+iiiQba);
let el3cwp_ = eo('tr','Rg3ff'+iiiQba);
let elxr3ev = eo('th','ipwff'+iiiQba);
text(`#`);
ec('th');
let elrOnfL = eo('th','xqwff'+iiiQba,null,`class`,`title-column`);
text(`Title`);
ec('th');
let elMv_Nx = eo('th','Pirff'+iiiQba);
text(`Created`);
ec('th');
let elf4UgG = eo('th','9LKff'+iiiQba);
text(`Comments`);
ec('th');
let elF9fCX = eo('th','L4Kff'+iiiQba);
text(`Issued By`);
ec('th');
let elJ6sHr = eo('th','KqLff'+iiiQba);
text(`Assigned To`);
ec('th');
let elmA8yO = eo('th','pz4ff'+iiiQba);
text(`Module`);
ec('th');
let elVj5NF = eo('th','PjQff'+iiiQba);
text(`Priority`);
ec('th');
let elCs4AF = eo('th','q3dff'+iiiQba);
text(`Sprint`);
ec('th');
let el1zDAe = eo('th','_dFff'+iiiQba);
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elpRmXp = eo('tbody','bHyff'+iiiQba);
for (let index in bugsOptions.bugs) {
let record = bugsOptions.bugs[index]; 
 let iiFxOm = record.id+ index;
let el2oVIX = eo('tr','Sww5UsGf3SmL' + index+iiiQba+iiFxOm);
let elKsBAC = eo('td','xA0ff'+iiiQba+iiFxOm);
text(record.id);
ec('td');
let elp0HpE = eo('td','n1Xff'+iiiQba+iiFxOm,null,`class`,`title-column`);
let elgB3_2 = eo('a','zW7ff'+iiiQba+iiFxOm,null,`href`,`${URLS.project(component.project, 'bugs', record)}`,`title`,``,`class`,`bold`);
text(record.title.readMoreChars(20));
ec('a');

                    setTimeout(function () {
                        let $el = elgB3_2;
                        
            true && tippyTooltip($el, {arrow:true,content:`${record.title}`});
        ;
                    }, 20);                
                ec('td');
let elnXrB6 = eo('td','uhNff'+iiiQba+iiFxOm);
let cmp07s3 = this._lc('cG8mYnMQ_', {parent:component,parentTop:projectLayout,props:{timestamp:record.createdAt.timestamp},state:'sttAw9a',insideLoop:true,index:"" +iiiQba+iiFxOm});
ec('td');
let elOCAhf = eo('td','2biff'+iiiQba+iiFxOm);
let ell_ixK = eo('strong','hQjff'+iiiQba+iiFxOm,null,`class`,`gray-text`);
text(record.comments.length);
ec('strong');
let elxNQlB = eo('i','HVhff'+iiiQba+iiFxOm,null,`class`,`${far('comments')} ml-2 gray-text icon`);
ec('i');
ec('td');
let elM1sQW = eo('td','kTAff'+iiiQba+iiFxOm,null,`class`,`text-center`);
let elAfium = ev('img','W3Lff'+iiiQba+iiFxOm,null,`src`,`${record.createdBy.image}`,`title`,`${record.createdBy.name}`,`class`,`small mr-2 circle`,`alt`,`${record.createdBy.name}`);

                    setTimeout(function () {
                        let $el = elAfium;
                        
            true && tippyTooltip($el, {arrow:true,content:`${record.createdBy.name}`});
        ;
                    }, 20);                
                ec('td');
let elllmYL = eo('td','pqJff'+iiiQba+iiFxOm,null,`class`,`text-center`);
for (let i in record.assignee) {
let assignee = record.assignee[i]; 
 let iiOove = 'b8CkENC' + i;
let elc2kYJ = eo('span','ngofhRtfNMc8' + i+iiiQba+iiFxOm+iiOove,null,`class`,`mx-1`);
let elKsrZn = ev('img','2gCff'+iiiQba+iiFxOm+iiOove,null,`src`,`${assignee.image}`,`title`,`${assignee.name}`,`class`,`small mr-2 circle`,`alt`,`${assignee.name}`);

                    setTimeout(function () {
                        let $el = elKsrZn;
                        
            true && tippyTooltip($el, {arrow:true,content:`${assignee.name}`});
        ;
                    }, 20);                
                ec('span');
}
ec('td');
let elpbozA = eo('td','ZjBff'+iiiQba+iiFxOm,null,`class`,`bold gray-text`);
text(record.module ? record.module.name : 'N/a');
ec('td');
let elQzJfn = eo('td','Ey0ff'+iiiQba+iiFxOm);
let elo8_S4 = eo('span','3Xpff'+iiiQba+iiFxOm,null,`class`,`badge priority ${ record.priority }`);
text(record.priority);
ec('span');
ec('td');
let elpFE6v = eo('th','hrGff'+iiiQba+iiFxOm,null,`class`,`text-center`);
text(record.sprint.name || 'N/a');
ec('th');
let elxS_Ml = eo('td','oeZff'+iiiQba+iiFxOm);
let cndoqeG = record.canBeModified;
this.setState('stn6hxS', cndoqeG);
if (cndoqeG) { 
let eleoFQY = eo('button','ntlff'+iiiQba+iiFxOm,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-cyan`);
let elZTeGP = eo('i','QqJff'+iiiQba+iiFxOm,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eleoFQY;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Bug')}`});
        ;
                    }, 20);                
                let elNiRnS = eo('button','zKlff'+iiiQba+iiFxOm,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-danger`);
let elXQYjF = eo('i','pBPff'+iiiQba+iiFxOm,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elNiRnS;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Bug')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
}}
}});
let cnd51Gh = component.modalIsOpened;
this.setState('stLkNJ0', cnd51Gh);
if (cnd51Gh) { 
let cmpnrla = this._lc('cHR37LZN0', {parent:component,props:{record:component.record,project:component.project},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null;},onsave:function(e) {let $el = this; component.onSubmit(e)}},state:'stLkNJ0'});
}let cndtwdx = component.confirmDelete;
this.setState('stGMGE9', cndtwdx);
if (cndtwdx) { 
let cmpuJbN = this._lc('cQQEdk_Gf', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stGMGE9'});
}
                    this.isReadyToGo();
                }
        });