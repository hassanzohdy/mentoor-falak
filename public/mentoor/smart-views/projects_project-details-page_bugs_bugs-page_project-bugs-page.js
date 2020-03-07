_Component({
                selector: 'project-bugs-page',
                c: 'ProjectBugsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','bugs','detectChanges','confirmRemoving','modalIsOpened','record','onSubmit','confirmDelete','remove','filterOptions','filteredData','filterBy'],
                children: {cyDuNLQiz:'flk-dropdown-list',clZk7Uo3v:'flk-dropdown-list',cym3Otnf6:'flk-dropdown-list',cTJDzfPIB:'flk-dropdown-list',c_vOc8mtp:'flk-dropdown-list',cxf8eeIlz:'flk-time-ago',cmHvkK3Vn:'project-layout',c_lI7BNTA:'bug-modal',chak48P_9:'flk-alert'},
                render: function (component) {
                    let cmpXmMF = this._lc('cmHvkK3Vn', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elUfLDa = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add', {status: 'active'})}]},`class`,`float-right btn btn-success bold`);
let elbBMao = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Bug`);
ec('button');
let elPjXTy = eo('h1',null,null,`class`,`m-y-1 purple-text`);
text( component.project.name );
let elJRgUm = ev('img',null,null,`src`,`${assets('images/bug.jpg')}`,`title`,``,`style`,`width: 20px; height: 30px; border-radius: 50%; margin-left: 0.3rem; margin-right: 0.2rem`);

                    setTimeout(function () {
                        let $el = elJRgUm;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('bug')}`});
        ;
                    }, 20);                
                let ell2eUa = eo('span',null,null,`class`,`bold red-text mr-2`);
text(`s`);
ec('span');
text(`(${ component.project.bugs.length })`);
ec('h1');
let el0EStk = eo('div',null,null,`class`,`simple-card m-b-2 col-12 tasks-list-filter`);
let elvucTd = eo('div',null,null,`class`,`row`);
let cndtrDA = ! Is.empty(component.filterOptions.assignees);
this.setState('strP65s', cndtrDA);
if (cndtrDA) { 
let elFXJ9T = eo('div','Yjyf',null,`class`,`col-sm-3 filter-container`);
let elMYpc2 = eo('div','qTOf',null,`class`,`filter-list`);
let cmpaLxs = this._lc('cyDuNLQiz', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.assignees,value:component.filteredData.assignees,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('assignees', e);}},boolAttrs:{multiple:true},attrs:{heading:'Assignees'},state:'strP65s'});
ec('div');
ec('div');
}let cndHDWR = ! Is.empty(component.filterOptions.testers);
this.setState('stgaTUY', cndHDWR);
if (cndHDWR) { 
let elFvj3H = eo('div','Hwtf',null,`class`,`col-sm-3 filter-container`);
let el6BYrK = eo('div','Fr4f',null,`class`,`filter-list`);
let cmpRm3I = this._lc('clZk7Uo3v', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.testers,value:component.filteredData.testers,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('testers', e);}},boolAttrs:{multiple:true},attrs:{heading:'Testers'},state:'stgaTUY'});
ec('div');
ec('div');
}let cnd5JBe = ! Is.empty(component.filterOptions.priorities);
this.setState('stMSEZ5', cnd5JBe);
if (cnd5JBe) { 
let els2RBa = eo('div','hC9f',null,`class`,`col-sm-3 filter-container`);
let eloHEsB = eo('div','_Mqf',null,`class`,`filter-list`);
let cmpflyb = this._lc('cym3Otnf6', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.priorities,value:component.filteredData.priorities,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('priorities', e);}},boolAttrs:{multiple:true},attrs:{heading:'Priority'},state:'stMSEZ5'});
ec('div');
ec('div');
}let cndqFWV = ! Is.empty(component.filterOptions.modules);
this.setState('stnSscs', cndqFWV);
if (cndqFWV) { 
let eluC12e = eo('div','YSHf',null,`class`,`col-sm-3 filter-container`);
let el8v1Sc = eo('div','zJIf',null,`class`,`filter-list`);
let cmpQQtY = this._lc('cTJDzfPIB', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.modules,value:component.filteredData.modules,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('modules', e);}},boolAttrs:{multiple:true},attrs:{heading:'Module'},state:'stnSscs'});
ec('div');
ec('div');
}let cnd_Ofr = ! Is.empty(component.filterOptions.sprints);
this.setState('stM_fuW', cnd_Ofr);
if (cnd_Ofr) { 
let elYv_Dx = eo('div','Xcff',null,`class`,`col-sm-3 filter-container`);
let elHJ4eI = eo('div','PRBf',null,`class`,`filter-list`);
let cmpQL7l = this._lc('c_vOc8mtp', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.sprints,value:component.filteredData.sprints,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('sprints', e);}},boolAttrs:{multiple:true},attrs:{heading:'Sprints'},state:'stM_fuW'});
ec('div');
ec('div');
}ec('div');
ec('div');
for (let status in component.bugs) {
let bugsOptions = component.bugs[status]; 
 let iiNi4B = 'RnZ7Iok' + status;
let elTSmmM = eo('h4','Cy9179wTGsrL' + status+iiNi4B,null, eventListeners, {onclick:[function(e) {var $el = this;bugsOptions.opened = ! bugsOptions.opened; component.detectChanges();}]},`class`,`text-capitalize m-t-2 pointer gray-text simple-card`);
let el8Jb8H = eo('span','TZ8ff'+iiNi4B);
text(status + ' Bugs (' + bugsOptions.bugs.length + ')');
ec('span');
let cnd0YBh = bugsOptions.opened;
this.setState('st6m13O', cnd0YBh);
let cndKD18 = !(cnd0YBh);
this.setState('stf9d4k', cndKD18);
if (cnd0YBh) { 
let elB865g = eo('i','cc9ff'+iiNi4B,null,`class`,`${fas('angle-down')} ml-2 icon`);
ec('i');
}else { 
let elJuoNu = eo('i','Utuff'+iiNi4B,null,`class`,`${fas('angle-up')} ml-2 icon`);
ec('i');
}ec('h4');
let cnd_EZt = bugsOptions.opened;
this.setState('stOX1lA', cnd_EZt);
if (cnd_EZt) { 
let elqEquu = eo('div','1Buff'+iiNi4B,null,`class`,`table-responsive`);
let eligSpq = eo('table','0KAff'+iiNi4B,null,`class`,`table buttoned simple-card`);
let el1z6qb = eo('thead','j3uff'+iiNi4B);
let elQnzu5 = eo('tr','GS4ff'+iiNi4B);
let el5PuqJ = eo('th','b5kff'+iiNi4B);
text(`#`);
ec('th');
let elGUVHs = eo('th','myVff'+iiNi4B,null,`class`,`title-column`);
text(`Title`);
ec('th');
let el1GiTX = eo('th','JWXff'+iiNi4B);
text(`Created`);
ec('th');
let elhE0Q8 = eo('th','CAdff'+iiNi4B);
text(`Comments`);
ec('th');
let elznvUl = eo('th','zn3ff'+iiNi4B);
text(`Issued By`);
ec('th');
let elbNqqu = eo('th','p1yff'+iiNi4B);
text(`Assigned To`);
ec('th');
let elotQMr = eo('th','xBZff'+iiNi4B);
text(`Module`);
ec('th');
let elu7KXB = eo('th','PETff'+iiNi4B);
text(`Priority`);
ec('th');
let elBArT_ = eo('th','2Gzff'+iiNi4B);
text(`Sprint`);
ec('th');
let elPwZmV = eo('th','qQBff'+iiNi4B);
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elj9auO = eo('tbody','FvOff'+iiNi4B);
for (let index in bugsOptions.bugs) {
let record = bugsOptions.bugs[index]; 
 let ii2Ubq = record.id+ index;
let elwkiwG = eo('tr','gu2mRKQhirWG' + index+iiNi4B+ii2Ubq);
let eledeb8 = eo('td','uubff'+iiNi4B+ii2Ubq);
text(record.id);
ec('td');
let elnMzo1 = eo('td','wILff'+iiNi4B+ii2Ubq,null,`class`,`title-column`);
let elrSyc5 = eo('a','t8Xff'+iiNi4B+ii2Ubq,null,`href`,`${URLS.project(component.project, 'bugs', record)}`,`title`,``,`class`,`bold`);
text(record.title.readMoreChars(20));
ec('a');

                    setTimeout(function () {
                        let $el = elrSyc5;
                        
            true && tippyTooltip($el, {arrow:true,content:`${record.title}`});
        ;
                    }, 20);                
                ec('td');
let elc5gTE = eo('td','O6sff'+iiNi4B+ii2Ubq);
let cmpkJyA = this._lc('cxf8eeIlz', {parent:component,parentTop:projectLayout,props:{timestamp:record.createdAt.timestamp},state:'stOX1lA',insideLoop:true,index:"" +iiNi4B+ii2Ubq});
ec('td');
let elD3qgE = eo('td','WJlff'+iiNi4B+ii2Ubq);
let elBKFFj = eo('strong','42Tff'+iiNi4B+ii2Ubq,null,`class`,`gray-text`);
text(record.comments.length);
ec('strong');
let elppe8H = eo('i','KF6ff'+iiNi4B+ii2Ubq,null,`class`,`${far('comments')} ml-2 gray-text icon`);
ec('i');
ec('td');
let eleyeFD = eo('td','3jvff'+iiNi4B+ii2Ubq,null,`class`,`text-center`);
let el9iGjB = ev('img','BZEff'+iiNi4B+ii2Ubq,null,`src`,`${record.createdBy.image}`,`title`,`${record.createdBy.name}`,`class`,`small mr-2 circle`,`alt`,`${record.createdBy.name}`);

                    setTimeout(function () {
                        let $el = el9iGjB;
                        
            true && tippyTooltip($el, {arrow:true,content:`${record.createdBy.name}`});
        ;
                    }, 20);                
                ec('td');
let els3JXc = eo('td','kxcff'+iiNi4B+ii2Ubq,null,`class`,`text-center`);
for (let i in record.assignee) {
let assignee = record.assignee[i]; 
 let iiWHTm = '3KbP9Bu' + i;
let elCrRNg = eo('span','xFS5d2Htxuen' + i+iiNi4B+ii2Ubq+iiWHTm,null,`class`,`mx-1`);
let eldVnaQ = ev('img','WaQff'+iiNi4B+ii2Ubq+iiWHTm,null,`src`,`${assignee.image}`,`title`,`${assignee.name}`,`class`,`small mr-2 circle`,`alt`,`${assignee.name}`);

                    setTimeout(function () {
                        let $el = eldVnaQ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${assignee.name}`});
        ;
                    }, 20);                
                ec('span');
}
ec('td');
let elf0Gue = eo('td','2DYff'+iiNi4B+ii2Ubq,null,`class`,`bold gray-text`);
text(record.module ? record.module.name : 'N/a');
ec('td');
let elQTj1o = eo('td','wEUff'+iiNi4B+ii2Ubq);
let el6nM59 = eo('span','qomff'+iiNi4B+ii2Ubq,null,`class`,`badge priority ${ record.priority }`);
text(record.priority);
ec('span');
ec('td');
let el4svCN = eo('th','Rf8ff'+iiNi4B+ii2Ubq,null,`class`,`text-center`);
text(record.sprint.name || 'N/a');
ec('th');
let elRCDx0 = eo('td','zB4ff'+iiNi4B+ii2Ubq);
let cndeok3 = record.canBeModified;
this.setState('stYbTrW', cndeok3);
if (cndeok3) { 
let el3qMs0 = eo('button','BTmff'+iiNi4B+ii2Ubq,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-cyan`);
let elzu0lg = eo('i','Pknff'+iiNi4B+ii2Ubq,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el3qMs0;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Bug')}`});
        ;
                    }, 20);                
                let elHYHl5 = eo('button','f8Off'+iiNi4B+ii2Ubq,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-danger`);
let elEBBFe = eo('i','a1Nff'+iiNi4B+ii2Ubq,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elHYHl5;
                        
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
let cndUbg7 = component.modalIsOpened;
this.setState('st1IZdA', cndUbg7);
if (cndUbg7) { 
let cmp8Qnx = this._lc('c_lI7BNTA', {parent:component,props:{record:component.record,project:component.project},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null;},onsave:function(e) {let $el = this; component.onSubmit(e)}},state:'st1IZdA'});
}let cndZWQR = component.confirmDelete;
this.setState('stn8XWn', cndZWQR);
if (cndZWQR) { 
let cmp4k41 = this._lc('chak48P_9', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stn8XWn'});
}
                    this.isReadyToGo();
                }
        });