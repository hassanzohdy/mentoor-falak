_Component({
                selector: 'project-bugs-page',
                c: 'ProjectBugsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','bugs','detectChanges','confirmRemoving','modalIsOpened','record','onSubmit','confirmDelete','remove','filterOptions','filteredData','filterBy'],
                children: {czC0vBwgJ:'flk-dropdown-list',cEHJpTBbM:'flk-dropdown-list',cHkW6H20Y:'flk-dropdown-list',cqHa87VNo:'flk-dropdown-list',ch8Gj2BQK:'flk-dropdown-list',cx63lIWVr:'flk-time-ago',cgyieuiR5:'project-layout',c_7rb9Sat:'bug-modal',cbU0RbRAE:'flk-alert'},
                render: function (component) {
                    let cmp6KAS = this._lc('cgyieuiR5', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elE48_F = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add', {status: 'active'})}]},`class`,`float-right btn btn-success bold`);
let elsVeXI = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Bug`);
ec('button');
let el7O7y2 = eo('h1',null,null,`class`,`m-y-1 purple-text`);
text( component.project.name );
let elCPAkG = ev('img',null,null,`src`,`${assets('images/bug.jpg')}`,`title`,``,`style`,`width: 20px; height: 30px; border-radius: 50%; margin-left: 0.3rem; margin-right: 0.2rem`);

                    setTimeout(function () {
                        let $el = elCPAkG;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('bug')}`});
        ;
                    }, 20);                
                let elHXPJL = eo('span',null,null,`class`,`bold red-text mr-2`);
text(`s`);
ec('span');
text(`(${ component.project.bugs.length })`);
ec('h1');
let elgNgpm = eo('div',null,null,`class`,`simple-card m-b-2 col-12 tasks-list-filter`);
let elu5CHT = eo('div',null,null,`class`,`row`);
let cndCJQK = ! Is.empty(component.filterOptions.assignees);
this.setState('sttvjSx', cndCJQK);
if (cndCJQK) { 
let el57EKg = eo('div','A4uf',null,`class`,`col-sm-3 filter-container`);
let el5KRDd = eo('div','9uPf',null,`class`,`filter-list`);
let cmpMikT = this._lc('czC0vBwgJ', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.assignees,value:component.filteredData.assignees,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('assignees', e);}},boolAttrs:{multiple:true},attrs:{heading:'Assignees'},state:'sttvjSx'});
ec('div');
ec('div');
}let cndraiH = ! Is.empty(component.filterOptions.testers);
this.setState('stpEKK4', cndraiH);
if (cndraiH) { 
let els4fa8 = eo('div','oVwf',null,`class`,`col-sm-3 filter-container`);
let elZPDAf = eo('div','3IBf',null,`class`,`filter-list`);
let cmpkyBX = this._lc('cEHJpTBbM', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.testers,value:component.filteredData.testers,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('testers', e);}},boolAttrs:{multiple:true},attrs:{heading:'Testers'},state:'stpEKK4'});
ec('div');
ec('div');
}let cndmd4q = ! Is.empty(component.filterOptions.priorities);
this.setState('st4zhxC', cndmd4q);
if (cndmd4q) { 
let elJyxLT = eo('div','Rwaf',null,`class`,`col-sm-3 filter-container`);
let elVO9ne = eo('div','0cyf',null,`class`,`filter-list`);
let cmp2sKZ = this._lc('cHkW6H20Y', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.priorities,value:component.filteredData.priorities,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('priorities', e);}},boolAttrs:{multiple:true},attrs:{heading:'Priority'},state:'st4zhxC'});
ec('div');
ec('div');
}let cndesOd = ! Is.empty(component.filterOptions.modules);
this.setState('steqyse', cndesOd);
if (cndesOd) { 
let elg4_Fj = eo('div','vlif',null,`class`,`col-sm-3 filter-container`);
let elyIMrq = eo('div','Nrpf',null,`class`,`filter-list`);
let cmp6xoK = this._lc('cqHa87VNo', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.modules,value:component.filteredData.modules,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('modules', e);}},boolAttrs:{multiple:true},attrs:{heading:'Module'},state:'steqyse'});
ec('div');
ec('div');
}let cndJCKz = ! Is.empty(component.filterOptions.sprints);
this.setState('stLW66_', cndJCKz);
if (cndJCKz) { 
let elkKAOB = eo('div','WCNf',null,`class`,`col-sm-3 filter-container`);
let elGiV77 = eo('div','HBLf',null,`class`,`filter-list`);
let cmprykt = this._lc('ch8Gj2BQK', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.sprints,value:component.filteredData.sprints,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('sprints', e);}},boolAttrs:{multiple:true},attrs:{heading:'Sprints'},state:'stLW66_'});
ec('div');
ec('div');
}ec('div');
ec('div');
for (let status in component.bugs) {
let bugsOptions = component.bugs[status]; 
 let iiAIdg = 'Z0ZLeLU' + status;
let eljLgqK = eo('h4','uyC5krH_nsbx' + status+iiAIdg,null, eventListeners, {onclick:[function(e) {var $el = this;bugsOptions.opened = ! bugsOptions.opened; component.detectChanges();}]},`class`,`text-capitalize m-t-2 pointer gray-text simple-card`);
let elB7vxi = eo('span','PLMff'+iiAIdg);
text(status + ' Bugs (' + bugsOptions.bugs.length + ')');
ec('span');
let cnd8k0f = bugsOptions.opened;
this.setState('st0PVVK', cnd8k0f);
let cnda25P = !(cnd8k0f);
this.setState('stykcYA', cnda25P);
if (cnd8k0f) { 
let elF5jmW = eo('i','1msff'+iiAIdg,null,`class`,`${fas('angle-down')} ml-2 icon`);
ec('i');
}else { 
let elJjELE = eo('i','Xvvff'+iiAIdg,null,`class`,`${fas('angle-up')} ml-2 icon`);
ec('i');
}ec('h4');
let cndJiT7 = bugsOptions.opened;
this.setState('strYEsQ', cndJiT7);
if (cndJiT7) { 
let elMhDxo = eo('div','5Xfff'+iiAIdg,null,`class`,`table-responsive`);
let el1vq1W = eo('table','R3Kff'+iiAIdg,null,`class`,`table buttoned simple-card`);
let elOtToD = eo('thead','oRbff'+iiAIdg);
let el97Hq5 = eo('tr','Klfff'+iiAIdg);
let els0Ik1 = eo('th','jsZff'+iiAIdg);
text(`#`);
ec('th');
let elhPPaN = eo('th','QQuff'+iiAIdg,null,`class`,`title-column`);
text(`Title`);
ec('th');
let elxJorN = eo('th','iYfff'+iiAIdg);
text(`Created`);
ec('th');
let elrcjGi = eo('th','QXXff'+iiAIdg);
text(`Comments`);
ec('th');
let elhE5G4 = eo('th','69Sff'+iiAIdg);
text(`Issued By`);
ec('th');
let elSRahX = eo('th','3bpff'+iiAIdg);
text(`Assigned To`);
ec('th');
let elW80u0 = eo('th','NXCff'+iiAIdg);
text(`Module`);
ec('th');
let elP4zkX = eo('th','F9Fff'+iiAIdg);
text(`Priority`);
ec('th');
let elbOAkt = eo('th','iHFff'+iiAIdg);
text(`Sprint`);
ec('th');
let eljA80H = eo('th','FSpff'+iiAIdg);
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let el2XGDI = eo('tbody','0Unff'+iiAIdg);
for (let index in bugsOptions.bugs) {
let record = bugsOptions.bugs[index]; 
 let iiT0U1 = record.id+ index;
let elTv8wJ = eo('tr','QOXZUO7xGAHY' + index+iiAIdg+iiT0U1);
let elN_5yF = eo('td','oxgff'+iiAIdg+iiT0U1);
text(record.id);
ec('td');
let ellASwt = eo('td','lwLff'+iiAIdg+iiT0U1,null,`class`,`title-column`);
let elRfjhT = eo('a','lwEff'+iiAIdg+iiT0U1,null,`href`,`${URLS.project(component.project, 'bugs', record)}`,`title`,``,`class`,`bold`);
text(record.title.readMoreChars(20));
ec('a');

                    setTimeout(function () {
                        let $el = elRfjhT;
                        
            true && tippyTooltip($el, {arrow:true,content:`${record.title}`});
        ;
                    }, 20);                
                ec('td');
let elscGyj = eo('td','5QWff'+iiAIdg+iiT0U1);
let cmpCK5U = this._lc('cx63lIWVr', {parent:component,parentTop:projectLayout,props:{timestamp:record.createdAt.timestamp},state:'strYEsQ',insideLoop:true,index:"" +iiAIdg+iiT0U1});
ec('td');
let elfR4th = eo('td','BIGff'+iiAIdg+iiT0U1);
let ellHxh5 = eo('strong','Lx2ff'+iiAIdg+iiT0U1,null,`class`,`gray-text`);
text(record.comments.length);
ec('strong');
let elVaPXY = eo('i','n0zff'+iiAIdg+iiT0U1,null,`class`,`${far('comments')} ml-2 gray-text icon`);
ec('i');
ec('td');
let elqmasG = eo('td','Kk3ff'+iiAIdg+iiT0U1,null,`class`,`text-center`);
let el73u7z = ev('img','3Csff'+iiAIdg+iiT0U1,null,`src`,`${record.createdBy.image}`,`title`,`${record.createdBy.name}`,`class`,`small mr-2 circle`,`alt`,`${record.createdBy.name}`);

                    setTimeout(function () {
                        let $el = el73u7z;
                        
            true && tippyTooltip($el, {arrow:true,content:`${record.createdBy.name}`});
        ;
                    }, 20);                
                ec('td');
let elebYh9 = eo('td','5vSff'+iiAIdg+iiT0U1,null,`class`,`text-center`);
for (let i in record.assignee) {
let assignee = record.assignee[i]; 
 let ii8Yju = 'W8b8R3t' + i;
let el7xbKY = eo('span','oVAY7ch6jTkO' + i+iiAIdg+iiT0U1+ii8Yju,null,`class`,`mx-1`);
let el8K45i = ev('img','oCbff'+iiAIdg+iiT0U1+ii8Yju,null,`src`,`${assignee.image}`,`title`,`${assignee.name}`,`class`,`small mr-2 circle`,`alt`,`${assignee.name}`);

                    setTimeout(function () {
                        let $el = el8K45i;
                        
            true && tippyTooltip($el, {arrow:true,content:`${assignee.name}`});
        ;
                    }, 20);                
                ec('span');
}
ec('td');
let eldAEwi = eo('td','XcGff'+iiAIdg+iiT0U1,null,`class`,`bold gray-text`);
text(record.module ? record.module.name : 'N/a');
ec('td');
let elkZkir = eo('td','saxff'+iiAIdg+iiT0U1);
let elhgp8n = eo('span','1utff'+iiAIdg+iiT0U1,null,`class`,`badge priority ${ record.priority }`);
text(record.priority);
ec('span');
ec('td');
let elNHthK = eo('th','rIFff'+iiAIdg+iiT0U1,null,`class`,`text-center`);
text(record.sprint.name || 'N/a');
ec('th');
let elhRx2D = eo('td','Fcbff'+iiAIdg+iiT0U1);
let cndaEOC = record.canBeModified;
this.setState('stMbiSJ', cndaEOC);
if (cndaEOC) { 
let elfRPgE = eo('button','mYtff'+iiAIdg+iiT0U1,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-cyan`);
let elL9xyx = eo('i','3Z5ff'+iiAIdg+iiT0U1,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elfRPgE;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Bug')}`});
        ;
                    }, 20);                
                let eluiHg8 = eo('button','mMMff'+iiAIdg+iiT0U1,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-danger`);
let eldKflY = eo('i','Bzuff'+iiAIdg+iiT0U1,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eluiHg8;
                        
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
let cndvUvE = component.modalIsOpened;
this.setState('stWRD2g', cndvUvE);
if (cndvUvE) { 
let cmplhpQ = this._lc('c_7rb9Sat', {parent:component,props:{record:component.record,project:component.project},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null;},onsave:function(e) {let $el = this; component.onSubmit(e)}},state:'stWRD2g'});
}let cnd1jI1 = component.confirmDelete;
this.setState('stb1TWk', cnd1jI1);
if (cnd1jI1) { 
let cmp3kn2 = this._lc('cbU0RbRAE', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stb1TWk'});
}
                    this.isReadyToGo();
                }
        });