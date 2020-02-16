_Component({
                selector: 'project-bugs-page',
                c: 'ProjectBugsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','bugs','detectChanges','confirmRemoving','modalIsOpened','record','onSubmit','confirmDelete','remove','filterOptions','filteredData','filterBy'],
                children: {coewrLiIT:'flk-dropdown-list',czLUuNtjw:'flk-dropdown-list',cjm1gU9GY:'flk-dropdown-list',cJ_eF6YzC:'flk-dropdown-list',cleB8calC:'flk-dropdown-list',cEW3F7ODp:'flk-time-ago',cEKYbnPob:'project-layout',cxFJv0psx:'bug-modal',c8X92Tbsi:'flk-alert'},
                render: function (component) {
                    let cmpa4I4 = this._lc('cEKYbnPob', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elb7JlF = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add', {status: 'active'})}]},`class`,`float-right btn btn-success bold`);
let elA4_Xs = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Bug`);
ec('button');
let elQmlV2 = eo('h1',null,null,`class`,`m-y-1 purple-text`);
text( component.project.name );
let elAUyQr = ev('img',null,null,`src`,`${assets('images/bug.jpg')}`,`title`,``,`style`,`width: 20px; height: 30px; border-radius: 50%; margin-left: 0.3rem; margin-right: 0.2rem`);

                    setTimeout(function () {
                        let $el = elAUyQr;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('bug')}`});
        ;
                    }, 20);                
                let el3lwz_ = eo('span',null,null,`class`,`bold red-text mr-2`);
text(`s`);
ec('span');
text(`(${ component.project.bugs.length })`);
ec('h1');
let elbvBwy = eo('div',null,null,`class`,`simple-card m-b-2 col-12 tasks-list-filter`);
let el5l3ew = eo('div',null,null,`class`,`row`);
let cndyDav = ! Is.empty(component.filterOptions.assignees);
this.setState('stphH8L', cndyDav);
if (cndyDav) { 
let ellWiQ1 = eo('div','sx_f',null,`class`,`col-sm-3 filter-container`);
let elxzu84 = eo('div','YStf',null,`class`,`filter-list`);
let cmpbViq = this._lc('coewrLiIT', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.assignees,value:component.filteredData.assignees,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('assignees', e);}},boolAttrs:{multiple:true},attrs:{heading:'Assignees'},state:'stphH8L'});
ec('div');
ec('div');
}let cndUesd = ! Is.empty(component.filterOptions.testers);
this.setState('stARBly', cndUesd);
if (cndUesd) { 
let ele1FYh = eo('div','vVXf',null,`class`,`col-sm-3 filter-container`);
let el1EdHY = eo('div','9bRf',null,`class`,`filter-list`);
let cmpYvul = this._lc('czLUuNtjw', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.testers,value:component.filteredData.testers,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('testers', e);}},boolAttrs:{multiple:true},attrs:{heading:'Testers'},state:'stARBly'});
ec('div');
ec('div');
}let cndzy4C = ! Is.empty(component.filterOptions.priorities);
this.setState('stXY_K_', cndzy4C);
if (cndzy4C) { 
let elsyLNF = eo('div','WB8f',null,`class`,`col-sm-3 filter-container`);
let elxI8re = eo('div','7h4f',null,`class`,`filter-list`);
let cmpuEsu = this._lc('cjm1gU9GY', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.priorities,value:component.filteredData.priorities,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('priorities', e);}},boolAttrs:{multiple:true},attrs:{heading:'Priority'},state:'stXY_K_'});
ec('div');
ec('div');
}let cnd0uTp = ! Is.empty(component.filterOptions.modules);
this.setState('strSPWv', cnd0uTp);
if (cnd0uTp) { 
let el1SOJK = eo('div','20Zf',null,`class`,`col-sm-3 filter-container`);
let elu2m7O = eo('div','AqCf',null,`class`,`filter-list`);
let cmpDuxH = this._lc('cJ_eF6YzC', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.modules,value:component.filteredData.modules,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('modules', e);}},boolAttrs:{multiple:true},attrs:{heading:'Module'},state:'strSPWv'});
ec('div');
ec('div');
}let cnd5ARE = ! Is.empty(component.filterOptions.sprints);
this.setState('stlHuBW', cnd5ARE);
if (cnd5ARE) { 
let elWN9vR = eo('div','2Qcf',null,`class`,`col-sm-3 filter-container`);
let elzV2gc = eo('div','7J5f',null,`class`,`filter-list`);
let cmpvSLq = this._lc('cleB8calC', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.sprints,value:component.filteredData.sprints,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('sprints', e);}},boolAttrs:{multiple:true},attrs:{heading:'Sprints'},state:'stlHuBW'});
ec('div');
ec('div');
}ec('div');
ec('div');
for (let status in component.bugs) {
let bugsOptions = component.bugs[status]; 
 let iirJ6M = 'VER0m4s' + status;
let elrvNPr = eo('h4','4lzYnwHiRgjt' + status+iirJ6M,null, eventListeners, {onclick:[function(e) {var $el = this;bugsOptions.opened = ! bugsOptions.opened; component.detectChanges();}]},`class`,`text-capitalize m-t-2 pointer gray-text simple-card`);
let elcHHRQ = eo('span','N7Yff'+iirJ6M);
text(status + ' Bugs (' + bugsOptions.bugs.length + ')');
ec('span');
let cndOVyt = bugsOptions.opened;
this.setState('stEXdsZ', cndOVyt);
let cndnKgz = !(cndOVyt);
this.setState('st8FZRH', cndnKgz);
if (cndOVyt) { 
let elMmyC_ = eo('i','sElff'+iirJ6M,null,`class`,`${fas('angle-down') + ' ml-2 icon'}`);
ec('i');
}else { 
let elnCTQs = eo('i','1GJff'+iirJ6M,null,`class`,`${fas('angle-up') + ' ml-2 icon'}`);
ec('i');
}ec('h4');
let cnddL1w = bugsOptions.opened;
this.setState('stYaMKX', cnddL1w);
if (cnddL1w) { 
let elus7hT = eo('div','Yaiff'+iirJ6M,null,`class`,`table-responsive`);
let el3EypN = eo('table','2ZZff'+iirJ6M,null,`class`,`table buttoned simple-card`);
let elNZIG7 = eo('thead','zS6ff'+iirJ6M);
let elqbY6e = eo('tr','o8Uff'+iirJ6M);
let elJpzhW = eo('th','yM4ff'+iirJ6M);
text(`#`);
ec('th');
let elzm_Ie = eo('th','7o4ff'+iirJ6M,null,`class`,`title-column`);
text(`Title`);
ec('th');
let elgnmwe = eo('th','Nl5ff'+iirJ6M);
text(`Created`);
ec('th');
let el4a76w = eo('th','nE3ff'+iirJ6M);
text(`Comments`);
ec('th');
let elVINR3 = eo('th','SCMff'+iirJ6M);
text(`Issued By`);
ec('th');
let el6zcfj = eo('th','LKIff'+iirJ6M);
text(`Assigned To`);
ec('th');
let elt7FyV = eo('th','oy2ff'+iirJ6M);
text(`Module`);
ec('th');
let elb6Rtg = eo('th','h2pff'+iirJ6M);
text(`Priority`);
ec('th');
let elnpRt4 = eo('th','BVNff'+iirJ6M);
text(`Sprint`);
ec('th');
let elUYxqF = eo('th','HEPff'+iirJ6M);
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let eloEmAf = eo('tbody','dhyff'+iirJ6M);
for (let index in bugsOptions.bugs) {
let record = bugsOptions.bugs[index]; 
 let iiWPLL = record.id+ index;
let elgUUaC = eo('tr','G383ehrQk5CW' + index+iirJ6M+iiWPLL);
let elkec_t = eo('td','7lIff'+iirJ6M+iiWPLL);
text(record.id);
ec('td');
let elaOSN5 = eo('td','yAoff'+iirJ6M+iiWPLL,null,`class`,`title-column`);
let elWCL3u = eo('a','ycKff'+iirJ6M+iiWPLL,null,`href`,`${URLS.project(component.project, 'bugs', record)}`,`title`,``,`class`,`bold`);
text(record.title.readMoreChars(20));
ec('a');

                    setTimeout(function () {
                        let $el = elWCL3u;
                        
            true && tippyTooltip($el, {arrow:true,content:`${record.title}`});
        ;
                    }, 20);                
                ec('td');
let elXi0QF = eo('td','Do5ff'+iirJ6M+iiWPLL);
let cmp3d_p = this._lc('cEW3F7ODp', {parent:component,parentTop:projectLayout,props:{timestamp:record.createdAt.timestamp},state:'stYaMKX',insideLoop:true,index:"" +iirJ6M+iiWPLL});
ec('td');
let elzRlA4 = eo('td','1zaff'+iirJ6M+iiWPLL);
let elDqTW3 = eo('strong','LPyff'+iirJ6M+iiWPLL,null,`class`,`gray-text`);
text(record.comments.length);
ec('strong');
let elNVzgB = eo('i','umcff'+iirJ6M+iiWPLL,null,`class`,`${far('comments') + ' ml-2 gray-text icon'}`);
ec('i');
ec('td');
let elZfnnL = eo('td','6e0ff'+iirJ6M+iiWPLL,null,`class`,`text-center`);
let eleg3g6 = ev('img','6qtff'+iirJ6M+iiWPLL,null,`src`,`${record.createdBy.image}`,`title`,`${record.createdBy.name}`,`class`,`small mr-2 circle`,`alt`,`${record.createdBy.name}`);

                    setTimeout(function () {
                        let $el = eleg3g6;
                        
            true && tippyTooltip($el, {arrow:true,content:`${record.createdBy.name}`});
        ;
                    }, 20);                
                ec('td');
let eldta2b = eo('td','7Krff'+iirJ6M+iiWPLL,null,`class`,`text-center`);
for (let i in record.assignee) {
let assignee = record.assignee[i]; 
 let iiw32J = 'B7hP5Fz' + i;
let elwagtG = eo('span','d_GWqNtlYM6_' + i+iirJ6M+iiWPLL+iiw32J,null,`class`,`mx-1`);
let elbemkK = ev('img','lsRff'+iirJ6M+iiWPLL+iiw32J,null,`src`,`${assignee.image}`,`title`,`${assignee.name}`,`class`,`small mr-2 circle`,`alt`,`${assignee.name}`);

                    setTimeout(function () {
                        let $el = elbemkK;
                        
            true && tippyTooltip($el, {arrow:true,content:`${assignee.name}`});
        ;
                    }, 20);                
                ec('span');
}
ec('td');
let el3Xy_b = eo('td','Fmzff'+iirJ6M+iiWPLL,null,`class`,`bold gray-text`);
text(record.module ? record.module.name : 'N/a');
ec('td');
let elNAbOK = eo('td','iuQff'+iirJ6M+iiWPLL);
let el7iOXN = eo('span','enOff'+iirJ6M+iiWPLL,null,`class`,`badge priority ${ record.priority }`);
text(record.priority);
ec('span');
ec('td');
let elILwi8 = eo('th','WB1ff'+iirJ6M+iiWPLL,null,`class`,`text-center`);
text(record.sprint.name || 'N/a');
ec('th');
let elvu4nb = eo('td','4ujff'+iirJ6M+iiWPLL);
let cndCkPp = record.canBeModified;
this.setState('st27igJ', cndCkPp);
if (cndCkPp) { 
let el9lelu = eo('button','163ff'+iirJ6M+iiWPLL,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-cyan`);
let el0HlzV = eo('i','CASff'+iirJ6M+iiWPLL,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el9lelu;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Bug')}`});
        ;
                    }, 20);                
                let el9ZSMv = eo('button','YMMff'+iirJ6M+iiWPLL,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-danger`);
let elhOMgd = eo('i','Vpaff'+iirJ6M+iiWPLL,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el9ZSMv;
                        
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
let cndKwFR = component.modalIsOpened;
this.setState('stZ5lD2', cndKwFR);
if (cndKwFR) { 
let cmpVFVi = this._lc('cxFJv0psx', {parent:component,props:{record:component.record,project:component.project},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null;},onsave:function(e) {let $el = this; component.onSubmit(e)}},state:'stZ5lD2'});
}let cndP5QJ = component.confirmDelete;
this.setState('stLyOsK', cndP5QJ);
if (cndP5QJ) { 
let cmpnJS2 = this._lc('c8X92Tbsi', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stLyOsK'});
}
                    this.isReadyToGo();
                }
        });