_Component({
                selector: 'project-bugs-page',
                c: 'ProjectBugsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','bugs','detectChanges','confirmRemoving','modalIsOpened','record','onSubmit','confirmDelete','remove','filterOptions','filteredData','filterBy'],
                children: {c2Qtp3Il3:'flk-dropdown-list',c6lowrcRy:'flk-dropdown-list',cqFSNfCjZ:'flk-dropdown-list',cMkjHkpfJ:'flk-dropdown-list',cc5QxxmfZ:'flk-dropdown-list',cm5b2sCSr:'flk-time-ago',cVwVjLRCc:'project-layout',ckesSd_Q9:'bug-modal',c1PcFZYDw:'flk-alert'},
                render: function (component) {
                    let cmpvu2r = this._lc('cVwVjLRCc', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elyudM9 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add', {status: 'active'})}]},`class`,`float-right btn btn-success bold`);
let eltN0M7 = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Bug`);
ec('button');
let elCBK52 = eo('h1',null,null,`class`,`m-y-1 purple-text`);
text( component.project.name );
let elTM8ns = ev('img',null,null,`src`,`${assets('images/bug.jpg')}`,`title`,``,`style`,`width: 20px; height: 30px; border-radius: 50%; margin-left: 0.3rem; margin-right: 0.2rem`);

                    setTimeout(function () {
                        let $el = elTM8ns;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('bug')}`});
        ;
                    }, 20);                
                let elavLjV = eo('span',null,null,`class`,`bold red-text mr-2`);
text(`s`);
ec('span');
text(`(${ component.project.bugs.length })`);
ec('h1');
let elN2GCP = eo('div',null,null,`class`,`simple-card m-b-2 col-12 tasks-list-filter`);
let el0gNQ1 = eo('div',null,null,`class`,`row`);
let cndRjUu = ! Is.empty(component.filterOptions.assignees);
this.setState('ststpMk', cndRjUu);
if (cndRjUu) { 
let elGG_Is = eo('div','jQgf',null,`class`,`col-sm-3 filter-container`);
let elQgbBy = eo('div','QjLf',null,`class`,`filter-list`);
let cmprBPX = this._lc('c2Qtp3Il3', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.assignees,value:component.filteredData.assignees,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('assignees', e);}},boolAttrs:{multiple:true},attrs:{heading:'Assignees'},state:'ststpMk'});
ec('div');
ec('div');
}let cndWXHs = ! Is.empty(component.filterOptions.testers);
this.setState('st_X066', cndWXHs);
if (cndWXHs) { 
let elIs7RQ = eo('div','NNaf',null,`class`,`col-sm-3 filter-container`);
let elaTAmM = eo('div','_kmf',null,`class`,`filter-list`);
let cmphyn4 = this._lc('c6lowrcRy', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.testers,value:component.filteredData.testers,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('testers', e);}},boolAttrs:{multiple:true},attrs:{heading:'Testers'},state:'st_X066'});
ec('div');
ec('div');
}let cndfqKH = ! Is.empty(component.filterOptions.priorities);
this.setState('st9zxqs', cndfqKH);
if (cndfqKH) { 
let elHgSYs = eo('div','KH2f',null,`class`,`col-sm-3 filter-container`);
let elHbHvx = eo('div','5CYf',null,`class`,`filter-list`);
let cmpin4P = this._lc('cqFSNfCjZ', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.priorities,value:component.filteredData.priorities,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('priorities', e);}},boolAttrs:{multiple:true},attrs:{heading:'Priority'},state:'st9zxqs'});
ec('div');
ec('div');
}let cndu7h8 = ! Is.empty(component.filterOptions.modules);
this.setState('styPzIw', cndu7h8);
if (cndu7h8) { 
let el1eoz2 = eo('div','kI8f',null,`class`,`col-sm-3 filter-container`);
let eln_5hq = eo('div','RcXf',null,`class`,`filter-list`);
let cmpCti7 = this._lc('cMkjHkpfJ', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.modules,value:component.filteredData.modules,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('modules', e);}},boolAttrs:{multiple:true},attrs:{heading:'Module'},state:'styPzIw'});
ec('div');
ec('div');
}let cndDeHK = ! Is.empty(component.filterOptions.sprints);
this.setState('stpnj0o', cndDeHK);
if (cndDeHK) { 
let elnzs17 = eo('div','9jtf',null,`class`,`col-sm-3 filter-container`);
let el8K7sp = eo('div','6ZNf',null,`class`,`filter-list`);
let cmp876P = this._lc('cc5QxxmfZ', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.sprints,value:component.filteredData.sprints,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('sprints', e);}},boolAttrs:{multiple:true},attrs:{heading:'Sprints'},state:'stpnj0o'});
ec('div');
ec('div');
}ec('div');
ec('div');
for (let status in component.bugs) {
let bugsOptions = component.bugs[status]; 
 let iiuyyZ = 'feN5OTr' + status;
let elvsBsN = eo('h4','P110cgik0o7i' + status+iiuyyZ,null, eventListeners, {onclick:[function(e) {var $el = this;bugsOptions.opened = ! bugsOptions.opened; component.detectChanges();}]},`class`,`text-capitalize m-t-2 pointer gray-text simple-card`);
let eljbocT = eo('span','yWSff'+iiuyyZ);
text(status + ' Bugs (' + bugsOptions.bugs.length + ')');
ec('span');
let cndoNCn = bugsOptions.opened;
this.setState('stGo3lK', cndoNCn);
let cndaT7c = !(cndoNCn);
this.setState('stvCYJY', cndaT7c);
if (cndoNCn) { 
let elE7Yrn = eo('i','9vuff'+iiuyyZ,null,`class`,`${fas('angle-down') + ' ml-2 icon'}`);
ec('i');
}else { 
let elClfdC = eo('i','FACff'+iiuyyZ,null,`class`,`${fas('angle-up') + ' ml-2 icon'}`);
ec('i');
}ec('h4');
let cndTvy9 = bugsOptions.opened;
this.setState('stukV1G', cndTvy9);
if (cndTvy9) { 
let elmYenG = eo('div','nEyff'+iiuyyZ,null,`class`,`table-responsive`);
let el0zI9U = eo('table','5pfff'+iiuyyZ,null,`class`,`table buttoned simple-card`);
let elMb0fT = eo('thead','_LVff'+iiuyyZ);
let elJQQtv = eo('tr','SJ2ff'+iiuyyZ);
let elvFJey = eo('th','3fgff'+iiuyyZ);
text(`#`);
ec('th');
let elbJfta = eo('th','gP0ff'+iiuyyZ,null,`class`,`title-column`);
text(`Title`);
ec('th');
let elmpsN5 = eo('th','I8Sff'+iiuyyZ);
text(`Created`);
ec('th');
let el5ckNd = eo('th','_8sff'+iiuyyZ);
text(`Comments`);
ec('th');
let eluZmJY = eo('th','arPff'+iiuyyZ);
text(`Issued By`);
ec('th');
let elxA0rr = eo('th','K1Iff'+iiuyyZ);
text(`Assigned To`);
ec('th');
let elqBHdW = eo('th','YZ2ff'+iiuyyZ);
text(`Module`);
ec('th');
let eljPsfB = eo('th','anCff'+iiuyyZ);
text(`Priority`);
ec('th');
let el8rg8O = eo('th','q4vff'+iiuyyZ);
text(`Sprint`);
ec('th');
let el8oXfL = eo('th','GJmff'+iiuyyZ);
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elMpnGz = eo('tbody','AUBff'+iiuyyZ);
for (let index in bugsOptions.bugs) {
let record = bugsOptions.bugs[index]; 
 let iiduHV = record.id+ index;
let eltChdL = eo('tr','iH0YAiNrieR9' + index+iiuyyZ+iiduHV);
let el3zR33 = eo('td','cSdff'+iiuyyZ+iiduHV);
text(record.id);
ec('td');
let elayCh6 = eo('td','bksff'+iiuyyZ+iiduHV,null,`class`,`title-column`);
let el3nJRl = eo('a','VP_ff'+iiuyyZ+iiduHV,null,`href`,`${URLS.project(component.project, 'bugs', record)}`,`title`,``,`class`,`bold`);
text(record.title.readMoreChars(20));
ec('a');

                    setTimeout(function () {
                        let $el = el3nJRl;
                        
            true && tippyTooltip($el, {arrow:true,content:`${record.title}`});
        ;
                    }, 20);                
                ec('td');
let elGlS7q = eo('td','KYGff'+iiuyyZ+iiduHV);
let cmpVCYx = this._lc('cm5b2sCSr', {parent:component,parentTop:projectLayout,props:{timestamp:record.createdAt.timestamp},state:'stukV1G',insideLoop:true,index:"" +iiuyyZ+iiduHV});
ec('td');
let elDqMzk = eo('td','5nTff'+iiuyyZ+iiduHV);
let el8Q5Zr = eo('strong','K35ff'+iiuyyZ+iiduHV,null,`class`,`gray-text`);
text(record.comments.length);
ec('strong');
let elVC5g_ = eo('i','DSgff'+iiuyyZ+iiduHV,null,`class`,`${far('comments') + ' ml-2 gray-text icon'}`);
ec('i');
ec('td');
let elWUGI3 = eo('td','5oXff'+iiuyyZ+iiduHV,null,`class`,`text-center`);
let elaZsfZ = ev('img','03gff'+iiuyyZ+iiduHV,null,`src`,`${record.createdBy.image}`,`title`,`${record.createdBy.name}`,`class`,`small mr-2 circle`,`alt`,`${record.createdBy.name}`);

                    setTimeout(function () {
                        let $el = elaZsfZ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${record.createdBy.name}`});
        ;
                    }, 20);                
                ec('td');
let elLo9yz = eo('td','4xEff'+iiuyyZ+iiduHV,null,`class`,`text-center`);
for (let i in record.assignee) {
let assignee = record.assignee[i]; 
 let iiW789 = 'bw9fMV2' + i;
let el56sQr = eo('span','mf2SaPnTSxFp' + i+iiuyyZ+iiduHV+iiW789,null,`class`,`mx-1`);
let elVbJ10 = ev('img','E8yff'+iiuyyZ+iiduHV+iiW789,null,`src`,`${assignee.image}`,`title`,`${assignee.name}`,`class`,`small mr-2 circle`,`alt`,`${assignee.name}`);

                    setTimeout(function () {
                        let $el = elVbJ10;
                        
            true && tippyTooltip($el, {arrow:true,content:`${assignee.name}`});
        ;
                    }, 20);                
                ec('span');
}
ec('td');
let elNChhS = eo('td','sKnff'+iiuyyZ+iiduHV,null,`class`,`bold gray-text`);
text(record.module ? record.module.name : 'N/a');
ec('td');
let el50oN0 = eo('td','1W9ff'+iiuyyZ+iiduHV);
let elFvilw = eo('span','U5fff'+iiuyyZ+iiduHV,null,`class`,`badge priority ${ record.priority }`);
text(record.priority);
ec('span');
ec('td');
let el4wmlv = eo('th','HBlff'+iiuyyZ+iiduHV,null,`class`,`text-center`);
text(record.sprint.name || 'N/a');
ec('th');
let elxfXE6 = eo('td','QVuff'+iiuyyZ+iiduHV);
let cndqkIG = record.canBeModified;
this.setState('stLyzIg', cndqkIG);
if (cndqkIG) { 
let elVngfx = eo('button','R0fff'+iiuyyZ+iiduHV,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-cyan`);
let el3IkYv = eo('i','bv2ff'+iiuyyZ+iiduHV,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elVngfx;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Bug')}`});
        ;
                    }, 20);                
                let elX2P6z = eo('button','KBmff'+iiuyyZ+iiduHV,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-danger`);
let el3xMwP = eo('i','S6mff'+iiuyyZ+iiduHV,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elX2P6z;
                        
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
let cndOKJ7 = component.modalIsOpened;
this.setState('stPNJOh', cndOKJ7);
if (cndOKJ7) { 
let cmpCKuV = this._lc('ckesSd_Q9', {parent:component,props:{record:component.record,project:component.project},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null;},onsave:function(e) {let $el = this; component.onSubmit(e)}},state:'stPNJOh'});
}let cndAT73 = component.confirmDelete;
this.setState('st0HYGM', cndAT73);
if (cndAT73) { 
let cmpbJV4 = this._lc('c1PcFZYDw', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st0HYGM'});
}
                    this.isReadyToGo();
                }
        });