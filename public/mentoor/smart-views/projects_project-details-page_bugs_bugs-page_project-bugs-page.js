_Component({
                selector: 'project-bugs-page',
                c: 'ProjectBugsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','bugs','detectChanges','confirmRemoving','modalIsOpened','record','onSubmit','confirmDelete','remove','filterOptions','filteredData','filterBy'],
                children: {cJgvXlp17:'flk-dropdown-list',cCA3OZ3Sn:'flk-dropdown-list',cJrGuJXZn:'flk-dropdown-list',caJ6Ldag4:'flk-dropdown-list',clWiUCKJU:'flk-dropdown-list',cLLCZdyQ8:'flk-time-ago',crtCu8PEK:'project-layout',c6ATvue6l:'bug-modal',c_kE9zPFk:'flk-alert'},
                render: function (component) {
                    let cmpRR5l = this._lc('crtCu8PEK', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elcD4F9 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add', {status: 'active'})}]},`class`,`float-right btn btn-success bold`);
let elUZS53 = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Bug`);
ec('button');
let elZAkHF = eo('h1',null,null,`class`,`m-y-1 purple-text`);
text( component.project.name );
let el4N2Z1 = ev('img',null,null,`src`,`${assets('images/bug.jpg')}`,`title`,``,`style`,`width: 20px; height: 30px; border-radius: 50%; margin-left: 0.3rem; margin-right: 0.2rem`);

                    setTimeout(function () {
                        let $el = el4N2Z1;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('bug')}`});
        ;
                    }, 20);                
                let elt14Lj = eo('span',null,null,`class`,`bold red-text mr-2`);
text(`s`);
ec('span');
text(`(${ component.project.bugs.length })`);
ec('h1');
let elfZC7_ = eo('div',null,null,`class`,`simple-card m-b-2 col-12 tasks-list-filter`);
let elSgwEQ = eo('div',null,null,`class`,`row`);
let cndnz4q = ! Is.empty(component.filterOptions.assignees);
this.setState('stSAKqX', cndnz4q);
if (cndnz4q) { 
let el8HD4W = eo('div','wDQf',null,`class`,`col-sm-3 filter-container`);
let elV_fkn = eo('div','Txbf',null,`class`,`filter-list`);
let cmpzSqn = this._lc('cJgvXlp17', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.assignees,value:component.filteredData.assignees,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('assignees', e);}},boolAttrs:{multiple:true},attrs:{heading:'Assignees'},state:'stSAKqX'});
ec('div');
ec('div');
}let cndOgqC = ! Is.empty(component.filterOptions.testers);
this.setState('st16SQc', cndOgqC);
if (cndOgqC) { 
let elr8lKN = eo('div','tugf',null,`class`,`col-sm-3 filter-container`);
let elfxCRF = eo('div','fiEf',null,`class`,`filter-list`);
let cmp72pM = this._lc('cCA3OZ3Sn', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.testers,value:component.filteredData.testers,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('testers', e);}},boolAttrs:{multiple:true},attrs:{heading:'Testers'},state:'st16SQc'});
ec('div');
ec('div');
}let cndhNbk = ! Is.empty(component.filterOptions.priorities);
this.setState('stWjwrE', cndhNbk);
if (cndhNbk) { 
let elWpDSw = eo('div','UVCf',null,`class`,`col-sm-3 filter-container`);
let elPCweZ = eo('div','xTff',null,`class`,`filter-list`);
let cmpsd9Y = this._lc('cJrGuJXZn', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.priorities,value:component.filteredData.priorities,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('priorities', e);}},boolAttrs:{multiple:true},attrs:{heading:'Priority'},state:'stWjwrE'});
ec('div');
ec('div');
}let cnda1mX = ! Is.empty(component.filterOptions.modules);
this.setState('st08QBO', cnda1mX);
if (cnda1mX) { 
let elO8hgv = eo('div','Q1ef',null,`class`,`col-sm-3 filter-container`);
let ellYzFl = eo('div','nL_f',null,`class`,`filter-list`);
let cmppFTG = this._lc('caJ6Ldag4', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.modules,value:component.filteredData.modules,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('modules', e);}},boolAttrs:{multiple:true},attrs:{heading:'Module'},state:'st08QBO'});
ec('div');
ec('div');
}let cndFcqN = ! Is.empty(component.filterOptions.sprints);
this.setState('stu1uC9', cndFcqN);
if (cndFcqN) { 
let elnK6ki = eo('div','r4Mf',null,`class`,`col-sm-3 filter-container`);
let elbnuR6 = eo('div','iHNf',null,`class`,`filter-list`);
let cmpPM8a = this._lc('clWiUCKJU', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.sprints,value:component.filteredData.sprints,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('sprints', e);}},boolAttrs:{multiple:true},attrs:{heading:'Sprints'},state:'stu1uC9'});
ec('div');
ec('div');
}ec('div');
ec('div');
for (let status in component.bugs) {
let bugsOptions = component.bugs[status]; 
 let iiIXVm = 'XzGcBI9' + status;
let el9A4YW = eo('h4','yYSqxTyVMMU2' + status+iiIXVm,null, eventListeners, {onclick:[function(e) {var $el = this;bugsOptions.opened = ! bugsOptions.opened; component.detectChanges();}]},`class`,`text-capitalize m-t-2 pointer gray-text simple-card`);
let el5rgvZ = eo('span','XBeff'+iiIXVm);
text(status + ' Bugs (' + bugsOptions.bugs.length + ')');
ec('span');
let cndHvX9 = bugsOptions.opened;
this.setState('stZukWe', cndHvX9);
let cnddJjI = !(cndHvX9);
this.setState('stLrD6G', cnddJjI);
if (cndHvX9) { 
let elp3_rQ = eo('i','jUUff'+iiIXVm,null,`class`,`${fas('angle-down') + ' ml-2 icon'}`);
ec('i');
}else { 
let el8NPIa = eo('i','9C_ff'+iiIXVm,null,`class`,`${fas('angle-up') + ' ml-2 icon'}`);
ec('i');
}ec('h4');
let cndEbjR = bugsOptions.opened;
this.setState('stvOB8M', cndEbjR);
if (cndEbjR) { 
let el60nlA = eo('div','Ws0ff'+iiIXVm,null,`class`,`table-responsive`);
let elZF4eQ = eo('table','Ucoff'+iiIXVm,null,`class`,`table buttoned simple-card`);
let el7wkA0 = eo('thead','qZBff'+iiIXVm);
let elvyOYJ = eo('tr','Kcnff'+iiIXVm);
let el8e1b3 = eo('th','Wjpff'+iiIXVm);
text(`#`);
ec('th');
let eljLSYm = eo('th','dhzff'+iiIXVm,null,`class`,`title-column`);
text(`Title`);
ec('th');
let elo_v9w = eo('th','P9Yff'+iiIXVm);
text(`Created`);
ec('th');
let elk0Q9q = eo('th','M0Wff'+iiIXVm);
text(`Comments`);
ec('th');
let elAFDZQ = eo('th','Vnjff'+iiIXVm);
text(`Issued By`);
ec('th');
let elCUUif = eo('th','0ghff'+iiIXVm);
text(`Assigned To`);
ec('th');
let elNLqUu = eo('th','tU7ff'+iiIXVm);
text(`Module`);
ec('th');
let elrZgxa = eo('th','n6Vff'+iiIXVm);
text(`Priority`);
ec('th');
let elW7ceQ = eo('th','eysff'+iiIXVm);
text(`Sprint`);
ec('th');
let elBLnNc = eo('th','IDjff'+iiIXVm);
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elohSXx = eo('tbody','rXzff'+iiIXVm);
for (let index in bugsOptions.bugs) {
let record = bugsOptions.bugs[index]; 
 let iiabb6 = record.id+ index;
let elAVT1K = eo('tr','89SB2u966ZTt' + index+iiIXVm+iiabb6);
let elPrO5G = eo('td','jNFff'+iiIXVm+iiabb6);
text(record.id);
ec('td');
let elGR5qg = eo('td','6Hwff'+iiIXVm+iiabb6,null,`class`,`title-column`);
let elpUoJZ = eo('a','yZfff'+iiIXVm+iiabb6,null,`href`,`${URLS.project(component.project, 'bugs', record)}`,`title`,``,`class`,`bold`);
text(record.title.readMoreChars(20));
ec('a');

                    setTimeout(function () {
                        let $el = elpUoJZ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${record.title}`});
        ;
                    }, 20);                
                ec('td');
let elrm1Pp = eo('td','0A0ff'+iiIXVm+iiabb6);
let cmp6U9S = this._lc('cLLCZdyQ8', {parent:component,parentTop:projectLayout,props:{timestamp:record.createdAt.timestamp},state:'stvOB8M',insideLoop:true,index:"" +iiIXVm+iiabb6});
ec('td');
let elk21cn = eo('td','vOpff'+iiIXVm+iiabb6);
let eljLfFP = eo('strong','HQfff'+iiIXVm+iiabb6,null,`class`,`gray-text`);
text(record.comments.length);
ec('strong');
let eloXq0h = eo('i','BQIff'+iiIXVm+iiabb6,null,`class`,`${far('comments') + ' ml-2 gray-text icon'}`);
ec('i');
ec('td');
let el3TWPn = eo('td','_ocff'+iiIXVm+iiabb6,null,`class`,`text-center`);
let elZBsVy = ev('img','E80ff'+iiIXVm+iiabb6,null,`src`,`${record.createdBy.image}`,`title`,`${record.createdBy.name}`,`class`,`small mr-2 circle`,`alt`,`${record.createdBy.name}`);

                    setTimeout(function () {
                        let $el = elZBsVy;
                        
            true && tippyTooltip($el, {arrow:true,content:`${record.createdBy.name}`});
        ;
                    }, 20);                
                ec('td');
let el1UXf8 = eo('td','7TYff'+iiIXVm+iiabb6,null,`class`,`text-center`);
for (let i in record.assignee) {
let assignee = record.assignee[i]; 
 let iiq6k6 = 'NPpkTZi' + i;
let elzzqIv = eo('span','tTYu6aNb1EBF' + i+iiIXVm+iiabb6+iiq6k6,null,`class`,`mx-1`);
let elfde90 = ev('img','mc2ff'+iiIXVm+iiabb6+iiq6k6,null,`src`,`${assignee.image}`,`title`,`${assignee.name}`,`class`,`small mr-2 circle`,`alt`,`${assignee.name}`);

                    setTimeout(function () {
                        let $el = elfde90;
                        
            true && tippyTooltip($el, {arrow:true,content:`${assignee.name}`});
        ;
                    }, 20);                
                ec('span');
}
ec('td');
let elSmg0b = eo('td','Urhff'+iiIXVm+iiabb6,null,`class`,`bold gray-text`);
text(record.module ? record.module.name : 'N/a');
ec('td');
let elkosMk = eo('td','STaff'+iiIXVm+iiabb6);
let elf6HSk = eo('span','gXeff'+iiIXVm+iiabb6,null,`class`,`badge priority ${ record.priority }`);
text(record.priority);
ec('span');
ec('td');
let elmpUUT = eo('th','eSsff'+iiIXVm+iiabb6,null,`class`,`text-center`);
text(record.sprint.name || 'N/a');
ec('th');
let elnhiRO = eo('td','xb5ff'+iiIXVm+iiabb6);
let cndLJQk = record.canBeModified;
this.setState('stviwsS', cndLJQk);
if (cndLJQk) { 
let elhqyu6 = eo('button','25yff'+iiIXVm+iiabb6,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-cyan`);
let elwaZK6 = eo('i','uGcff'+iiIXVm+iiabb6,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elhqyu6;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Bug')}`});
        ;
                    }, 20);                
                let eloUui5 = eo('button','v5nff'+iiIXVm+iiabb6,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-danger`);
let elP2t60 = eo('i','qnjff'+iiIXVm+iiabb6,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eloUui5;
                        
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
let cndDGOR = component.modalIsOpened;
this.setState('stL10d5', cndDGOR);
if (cndDGOR) { 
let cmpb8MK = this._lc('c6ATvue6l', {parent:component,props:{record:component.record,project:component.project},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null;},onsave:function(e) {let $el = this; component.onSubmit(e)}},state:'stL10d5'});
}let cndLyFK = component.confirmDelete;
this.setState('stdrkff', cndLyFK);
if (cndLyFK) { 
let cmpVxAf = this._lc('c_kE9zPFk', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stdrkff'});
}
                    this.isReadyToGo();
                }
        });