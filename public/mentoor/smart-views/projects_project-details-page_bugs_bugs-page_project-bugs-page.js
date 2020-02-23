_Component({
                selector: 'project-bugs-page',
                c: 'ProjectBugsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','bugs','detectChanges','confirmRemoving','modalIsOpened','record','onSubmit','confirmDelete','remove','filterOptions','filteredData','filterBy'],
                children: {ciU3nPwm7:'flk-dropdown-list',clypeKkXa:'flk-dropdown-list',ciZNWMS4P:'flk-dropdown-list',cGuHXBi8n:'flk-dropdown-list',cDH6dnsM2:'flk-dropdown-list',cn_4TZGtb:'flk-time-ago',cqT0sUhQz:'project-layout',cKWGYTepg:'bug-modal',cvrNo0HMd:'flk-alert'},
                render: function (component) {
                    let cmpgFte = this._lc('cqT0sUhQz', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elGp3JD = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add', {status: 'active'})}]},`class`,`float-right btn btn-success bold`);
let elcvkMZ = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Bug`);
ec('button');
let ely4lOt = eo('h1',null,null,`class`,`m-y-1 purple-text`);
text( component.project.name );
let elvMGug = ev('img',null,null,`src`,`${assets('images/bug.jpg')}`,`title`,``,`style`,`width: 20px; height: 30px; border-radius: 50%; margin-left: 0.3rem; margin-right: 0.2rem`);

                    setTimeout(function () {
                        let $el = elvMGug;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('bug')}`});
        ;
                    }, 20);                
                let elIdGqQ = eo('span',null,null,`class`,`bold red-text mr-2`);
text(`s`);
ec('span');
text(`(${ component.project.bugs.length })`);
ec('h1');
let elYf6Ep = eo('div',null,null,`class`,`simple-card m-b-2 col-12 tasks-list-filter`);
let elkoOln = eo('div',null,null,`class`,`row`);
let cnd8dKc = ! Is.empty(component.filterOptions.assignees);
this.setState('stXnYuO', cnd8dKc);
if (cnd8dKc) { 
let elGPYbf = eo('div','n2zf',null,`class`,`col-sm-3 filter-container`);
let el0MU6a = eo('div','jD5f',null,`class`,`filter-list`);
let cmpyqZD = this._lc('ciU3nPwm7', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.assignees,value:component.filteredData.assignees,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('assignees', e);}},boolAttrs:{multiple:true},attrs:{heading:'Assignees'},state:'stXnYuO'});
ec('div');
ec('div');
}let cnd2rpJ = ! Is.empty(component.filterOptions.testers);
this.setState('stRt4t2', cnd2rpJ);
if (cnd2rpJ) { 
let elBla0V = eo('div','_kzf',null,`class`,`col-sm-3 filter-container`);
let el5p4gv = eo('div','XRgf',null,`class`,`filter-list`);
let cmp8Wny = this._lc('clypeKkXa', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.testers,value:component.filteredData.testers,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('testers', e);}},boolAttrs:{multiple:true},attrs:{heading:'Testers'},state:'stRt4t2'});
ec('div');
ec('div');
}let cnduMRx = ! Is.empty(component.filterOptions.priorities);
this.setState('stOqx4R', cnduMRx);
if (cnduMRx) { 
let elvYiBC = eo('div','sczf',null,`class`,`col-sm-3 filter-container`);
let el_zufG = eo('div','fdzf',null,`class`,`filter-list`);
let cmpOH5J = this._lc('ciZNWMS4P', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.priorities,value:component.filteredData.priorities,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('priorities', e);}},boolAttrs:{multiple:true},attrs:{heading:'Priority'},state:'stOqx4R'});
ec('div');
ec('div');
}let cndtV9R = ! Is.empty(component.filterOptions.modules);
this.setState('std1h4y', cndtV9R);
if (cndtV9R) { 
let elO7kOG = eo('div','7jvf',null,`class`,`col-sm-3 filter-container`);
let elp2znW = eo('div','TuYf',null,`class`,`filter-list`);
let cmpTX8E = this._lc('cGuHXBi8n', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.modules,value:component.filteredData.modules,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('modules', e);}},boolAttrs:{multiple:true},attrs:{heading:'Module'},state:'std1h4y'});
ec('div');
ec('div');
}let cndwTNg = ! Is.empty(component.filterOptions.sprints);
this.setState('stsvjg2', cndwTNg);
if (cndwTNg) { 
let elJQScP = eo('div','YSKf',null,`class`,`col-sm-3 filter-container`);
let elSnZx6 = eo('div','Pzof',null,`class`,`filter-list`);
let cmpYYn7 = this._lc('cDH6dnsM2', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.sprints,value:component.filteredData.sprints,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('sprints', e);}},boolAttrs:{multiple:true},attrs:{heading:'Sprints'},state:'stsvjg2'});
ec('div');
ec('div');
}ec('div');
ec('div');
for (let status in component.bugs) {
let bugsOptions = component.bugs[status]; 
 let iiIGOB = 'GN7o84B' + status;
let el0iGIw = eo('h4','mPDwwlewGQTf' + status+iiIGOB,null, eventListeners, {onclick:[function(e) {var $el = this;bugsOptions.opened = ! bugsOptions.opened; component.detectChanges();}]},`class`,`text-capitalize m-t-2 pointer gray-text simple-card`);
let elZjsXt = eo('span','sC7ff'+iiIGOB);
text(status + ' Bugs (' + bugsOptions.bugs.length + ')');
ec('span');
let cndFeic = bugsOptions.opened;
this.setState('stcaBUl', cndFeic);
let cndsUT5 = !(cndFeic);
this.setState('stjU_1S', cndsUT5);
if (cndFeic) { 
let eln_SJU = eo('i','WeDff'+iiIGOB,null,`class`,`${fas('angle-down') + ' ml-2 icon'}`);
ec('i');
}else { 
let elhZtlc = eo('i','tBBff'+iiIGOB,null,`class`,`${fas('angle-up') + ' ml-2 icon'}`);
ec('i');
}ec('h4');
let cndyJfD = bugsOptions.opened;
this.setState('stpaqWP', cndyJfD);
if (cndyJfD) { 
let elw14pK = eo('div','U4Gff'+iiIGOB,null,`class`,`table-responsive`);
let el88iAH = eo('table','zkOff'+iiIGOB,null,`class`,`table buttoned simple-card`);
let els81Z0 = eo('thead','qA1ff'+iiIGOB);
let el5Wjd4 = eo('tr','cIUff'+iiIGOB);
let elvq2pc = eo('th','kdIff'+iiIGOB);
text(`#`);
ec('th');
let elliNqh = eo('th','b1aff'+iiIGOB,null,`class`,`title-column`);
text(`Title`);
ec('th');
let elXw1wv = eo('th','fOfff'+iiIGOB);
text(`Created`);
ec('th');
let elKngIs = eo('th','V9sff'+iiIGOB);
text(`Comments`);
ec('th');
let elKnpZ0 = eo('th','DRtff'+iiIGOB);
text(`Issued By`);
ec('th');
let ela1RrU = eo('th','2Xxff'+iiIGOB);
text(`Assigned To`);
ec('th');
let elkl57s = eo('th','3bxff'+iiIGOB);
text(`Module`);
ec('th');
let elMzHJQ = eo('th','Jx4ff'+iiIGOB);
text(`Priority`);
ec('th');
let el4nqZW = eo('th','s0fff'+iiIGOB);
text(`Sprint`);
ec('th');
let elk6Lw4 = eo('th','bEYff'+iiIGOB);
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elageeE = eo('tbody','ilRff'+iiIGOB);
for (let index in bugsOptions.bugs) {
let record = bugsOptions.bugs[index]; 
 let iifich = record.id+ index;
let el2jc1N = eo('tr','VRoCtqrLul0g' + index+iiIGOB+iifich);
let elM0tgu = eo('td','ySqff'+iiIGOB+iifich);
text(record.id);
ec('td');
let elCkG6i = eo('td','9OVff'+iiIGOB+iifich,null,`class`,`title-column`);
let elfW9Ow = eo('a','t1Eff'+iiIGOB+iifich,null,`href`,`${URLS.project(component.project, 'bugs', record)}`,`title`,``,`class`,`bold`);
text(record.title.readMoreChars(20));
ec('a');

                    setTimeout(function () {
                        let $el = elfW9Ow;
                        
            true && tippyTooltip($el, {arrow:true,content:`${record.title}`});
        ;
                    }, 20);                
                ec('td');
let elrxqOa = eo('td','szrff'+iiIGOB+iifich);
let cmpQepg = this._lc('cn_4TZGtb', {parent:component,parentTop:projectLayout,props:{timestamp:record.createdAt.timestamp},state:'stpaqWP',insideLoop:true,index:"" +iiIGOB+iifich});
ec('td');
let el_0PE2 = eo('td','gcXff'+iiIGOB+iifich);
let el8eTb1 = eo('strong','3IBff'+iiIGOB+iifich,null,`class`,`gray-text`);
text(record.comments.length);
ec('strong');
let el8nO5L = eo('i','xdnff'+iiIGOB+iifich,null,`class`,`${far('comments') + ' ml-2 gray-text icon'}`);
ec('i');
ec('td');
let elXQz0d = eo('td','7Sqff'+iiIGOB+iifich,null,`class`,`text-center`);
let el5e1ID = ev('img','Mjrff'+iiIGOB+iifich,null,`src`,`${record.createdBy.image}`,`title`,`${record.createdBy.name}`,`class`,`small mr-2 circle`,`alt`,`${record.createdBy.name}`);

                    setTimeout(function () {
                        let $el = el5e1ID;
                        
            true && tippyTooltip($el, {arrow:true,content:`${record.createdBy.name}`});
        ;
                    }, 20);                
                ec('td');
let el0hOEV = eo('td','37jff'+iiIGOB+iifich,null,`class`,`text-center`);
for (let i in record.assignee) {
let assignee = record.assignee[i]; 
 let iiHKMd = 'yKejrMs' + i;
let elSW_II = eo('span','UPQZmZkkwh2_' + i+iiIGOB+iifich+iiHKMd,null,`class`,`mx-1`);
let elwrQfE = ev('img','O72ff'+iiIGOB+iifich+iiHKMd,null,`src`,`${assignee.image}`,`title`,`${assignee.name}`,`class`,`small mr-2 circle`,`alt`,`${assignee.name}`);

                    setTimeout(function () {
                        let $el = elwrQfE;
                        
            true && tippyTooltip($el, {arrow:true,content:`${assignee.name}`});
        ;
                    }, 20);                
                ec('span');
}
ec('td');
let elBM0LJ = eo('td','YL1ff'+iiIGOB+iifich,null,`class`,`bold gray-text`);
text(record.module ? record.module.name : 'N/a');
ec('td');
let elJAM5E = eo('td','5zAff'+iiIGOB+iifich);
let elflALz = eo('span','5Gpff'+iiIGOB+iifich,null,`class`,`badge priority ${ record.priority }`);
text(record.priority);
ec('span');
ec('td');
let el3eYNR = eo('th','4Lmff'+iiIGOB+iifich,null,`class`,`text-center`);
text(record.sprint.name || 'N/a');
ec('th');
let elJV8bj = eo('td','Ytpff'+iiIGOB+iifich);
let cndK_Kb = record.canBeModified;
this.setState('stXlrc5', cndK_Kb);
if (cndK_Kb) { 
let el8ugJu = eo('button','dJMff'+iiIGOB+iifich,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-cyan`);
let elnzhLp = eo('i','XGtff'+iiIGOB+iifich,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el8ugJu;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Bug')}`});
        ;
                    }, 20);                
                let elRwcnv = eo('button','eADff'+iiIGOB+iifich,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-danger`);
let elMZuHj = eo('i','zFVff'+iiIGOB+iifich,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elRwcnv;
                        
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
let cnd8N13 = component.modalIsOpened;
this.setState('st9Dj5U', cnd8N13);
if (cnd8N13) { 
let cmpNfnG = this._lc('cKWGYTepg', {parent:component,props:{record:component.record,project:component.project},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null;},onsave:function(e) {let $el = this; component.onSubmit(e)}},state:'st9Dj5U'});
}let cndR5Sw = component.confirmDelete;
this.setState('stPIIg1', cndR5Sw);
if (cndR5Sw) { 
let cmph65k = this._lc('cvrNo0HMd', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stPIIg1'});
}
                    this.isReadyToGo();
                }
        });