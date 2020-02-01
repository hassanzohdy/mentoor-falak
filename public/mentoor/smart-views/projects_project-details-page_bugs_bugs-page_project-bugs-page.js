_Component({
                selector: 'project-bugs-page',
                c: 'ProjectBugsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','bugs','detectChanges','confirmRemoving','modalIsOpened','record','onSubmit','confirmDelete','remove','filterOptions','filteredData','filterBy'],
                children: {ccjbo3yTF:'flk-dropdown-list',c0cZYIbf3:'flk-dropdown-list',cj8VoR2bd:'flk-dropdown-list',cjf2fhGfk:'flk-dropdown-list',cNiC50Y_d:'flk-dropdown-list',ccbWZ_zck:'flk-time-ago',cpzN4XOF9:'project-layout',cSdt2_8Cs:'bug-modal',c7MFC0ZUN:'flk-alert'},
                render: function (component) {
                    let cmpVTfh = this._lc('cpzN4XOF9', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elZbOEM = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add', {status: 'active'})}]},`class`,`float-right btn btn-success bold`);
let elzuc1u = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Bug`);
ec('button');
let el_K5WB = eo('h1',null,null,`class`,`m-y-1 purple-text`);
text( component.project.name );
let elUcvN6 = ev('img',null,null,`src`,`${assets('images/bug.jpg')}`,`title`,``,`style`,`width: 20px; height: 30px; border-radius: 50%; margin-left: 0.3rem; margin-right: 0.2rem`);

                    setTimeout(function () {
                        let $el = elUcvN6;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('bug')}`});
        ;
                    }, 20);                
                let elTprzS = eo('span',null,null,`class`,`bold red-text mr-2`);
text(`s`);
ec('span');
text(`(${ component.project.bugs.length })`);
ec('h1');
let elNn56X = eo('div',null,null,`class`,`simple-card m-b-2 col-12 tasks-list-filter`);
let el1iCM0 = eo('div',null,null,`class`,`row`);
let cndLiYh = ! Is.empty(component.filterOptions.assignees);
this.setState('stHPDMK', cndLiYh);
if (cndLiYh) { 
let elBCocZ = eo('div','OJ8f',null,`class`,`col-sm-3 filter-container`);
let elkN2ak = eo('div','KzDf',null,`class`,`filter-list`);
let cmpcBAV = this._lc('ccjbo3yTF', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.assignees,value:component.filteredData.assignees,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('assignees', e);}},boolAttrs:{multiple:true},attrs:{heading:'Assignees'},state:'stHPDMK'});
ec('div');
ec('div');
}let cndxANc = ! Is.empty(component.filterOptions.testers);
this.setState('strXw8I', cndxANc);
if (cndxANc) { 
let elxlIxY = eo('div','xeWf',null,`class`,`col-sm-3 filter-container`);
let elFjchs = eo('div','NV2f',null,`class`,`filter-list`);
let cmpj9Vz = this._lc('c0cZYIbf3', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.testers,value:component.filteredData.testers,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('testers', e);}},boolAttrs:{multiple:true},attrs:{heading:'Testers'},state:'strXw8I'});
ec('div');
ec('div');
}let cndXbp4 = ! Is.empty(component.filterOptions.priorities);
this.setState('sttJ454', cndXbp4);
if (cndXbp4) { 
let elQ5Oso = eo('div','sgqf',null,`class`,`col-sm-3 filter-container`);
let el5n_fk = eo('div','SxIf',null,`class`,`filter-list`);
let cmp81Zs = this._lc('cj8VoR2bd', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.priorities,value:component.filteredData.priorities,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('priorities', e);}},boolAttrs:{multiple:true},attrs:{heading:'Priority'},state:'sttJ454'});
ec('div');
ec('div');
}let cnd06IA = ! Is.empty(component.filterOptions.modules);
this.setState('stMwewM', cnd06IA);
if (cnd06IA) { 
let elY7MOZ = eo('div','TkFf',null,`class`,`col-sm-3 filter-container`);
let el7iim_ = eo('div','uwRf',null,`class`,`filter-list`);
let cmpyT7V = this._lc('cjf2fhGfk', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.modules,value:component.filteredData.modules,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('modules', e);}},boolAttrs:{multiple:true},attrs:{heading:'Module'},state:'stMwewM'});
ec('div');
ec('div');
}let cnduMLX = ! Is.empty(component.filterOptions.sprints);
this.setState('st86v_i', cnduMLX);
if (cnduMLX) { 
let el9myPl = eo('div','LaPf',null,`class`,`col-sm-3 filter-container`);
let elF5q_n = eo('div','zTvf',null,`class`,`filter-list`);
let cmp2Fv2 = this._lc('cNiC50Y_d', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.sprints,value:component.filteredData.sprints,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('sprints', e);}},boolAttrs:{multiple:true},attrs:{heading:'Sprints'},state:'st86v_i'});
ec('div');
ec('div');
}ec('div');
ec('div');
for (let status in component.bugs) {
let bugsOptions = component.bugs[status]; 
 let iigPu8 = 'zBEm0jX' + status;
let elImpBp = eo('h4','UdXRO6opVoGq' + status+iigPu8,null, eventListeners, {onclick:[function(e) {var $el = this;bugsOptions.opened = ! bugsOptions.opened; component.detectChanges();}]},`class`,`text-capitalize m-t-2 pointer gray-text simple-card`);
let elt8dq4 = eo('span','DUzff'+iigPu8);
text(status + ' Bugs (' + bugsOptions.bugs.length + ')');
ec('span');
let cndoSWE = bugsOptions.opened;
this.setState('st3CL4X', cndoSWE);
let cnd1Nzo = !(cndoSWE);
this.setState('styD4XN', cnd1Nzo);
if (cndoSWE) { 
let elCoSNR = eo('i','AfZff'+iigPu8,null,`class`,`${fas('angle-down') + ' ml-2 icon'}`);
ec('i');
}else { 
let el_YE7W = eo('i','pZ5ff'+iigPu8,null,`class`,`${fas('angle-up') + ' ml-2 icon'}`);
ec('i');
}ec('h4');
let cnd8FWI = bugsOptions.opened;
this.setState('stQsO7g', cnd8FWI);
if (cnd8FWI) { 
let elIBWYv = eo('div','dAsff'+iigPu8,null,`class`,`table-responsive`);
let eltCZi0 = eo('table','M1jff'+iigPu8,null,`class`,`table buttoned simple-card`);
let elkELr8 = eo('thead','ZNMff'+iigPu8);
let eljzUCe = eo('tr','6Jwff'+iigPu8);
let elNL9pO = eo('th','93cff'+iigPu8);
text(`#`);
ec('th');
let elJJmWK = eo('th','geCff'+iigPu8,null,`class`,`title-column`);
text(`Title`);
ec('th');
let elP7AvJ = eo('th','BqSff'+iigPu8);
text(`Created`);
ec('th');
let elF33Jm = eo('th','LA7ff'+iigPu8);
text(`Comments`);
ec('th');
let el18lom = eo('th','rA5ff'+iigPu8);
text(`Issued By`);
ec('th');
let el4xho4 = eo('th','VSVff'+iigPu8);
text(`Assigned To`);
ec('th');
let elD484d = eo('th','MjPff'+iigPu8);
text(`Module`);
ec('th');
let el4dFN1 = eo('th','n4off'+iigPu8);
text(`Priority`);
ec('th');
let elBRB9R = eo('th','i0pff'+iigPu8);
text(`Sprint`);
ec('th');
let elG5oOI = eo('th','TuAff'+iigPu8);
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let eltDTjA = eo('tbody','3sgff'+iigPu8);
for (let index in bugsOptions.bugs) {
let record = bugsOptions.bugs[index]; 
 let iipoPs = record.id+ index;
let elx5W72 = eo('tr','T5fQzF9iOfZ5' + index+iigPu8+iipoPs);
let elY5v0w = eo('td','TD_ff'+iigPu8+iipoPs);
text(record.id);
ec('td');
let elnY1ub = eo('td','heyff'+iigPu8+iipoPs,null,`class`,`title-column`);
let elZ8fhJ = eo('a','yG2ff'+iigPu8+iipoPs,null,`href`,`${URLS.project(component.project, 'bugs', record)}`,`title`,``,`class`,`bold`);
text(record.title.readMoreChars(20));
ec('a');

                    setTimeout(function () {
                        let $el = elZ8fhJ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${record.title}`});
        ;
                    }, 20);                
                ec('td');
let el0tw0l = eo('td','K7Off'+iigPu8+iipoPs);
let cmppx5t = this._lc('ccbWZ_zck', {parent:component,parentTop:projectLayout,props:{timestamp:record.createdAt.timestamp},state:'stQsO7g',insideLoop:true,index:"" +iigPu8+iipoPs});
ec('td');
let elnWSeW = eo('td','yj3ff'+iigPu8+iipoPs);
let ellPjbN = eo('strong','Raiff'+iigPu8+iipoPs,null,`class`,`gray-text`);
text(record.comments.length);
ec('strong');
let elvIr4m = eo('i','lNBff'+iigPu8+iipoPs,null,`class`,`${far('comments') + ' ml-2 gray-text icon'}`);
ec('i');
ec('td');
let elhFsC2 = eo('td','Z4_ff'+iigPu8+iipoPs,null,`class`,`text-center`);
let elRyVbH = ev('img','9Ogff'+iigPu8+iipoPs,null,`src`,`${record.createdBy.image}`,`title`,`${record.createdBy.name}`,`class`,`small mr-2 circle`,`alt`,`${record.createdBy.name}`);

                    setTimeout(function () {
                        let $el = elRyVbH;
                        
            true && tippyTooltip($el, {arrow:true,content:`${record.createdBy.name}`});
        ;
                    }, 20);                
                ec('td');
let elHaj28 = eo('td','OuFff'+iigPu8+iipoPs,null,`class`,`text-center`);
for (let i in record.assignee) {
let assignee = record.assignee[i]; 
 let iieEF9 = 'cer1KQY' + i;
let elzyxlZ = eo('span','L7LJeHBB8C42' + i+iigPu8+iipoPs+iieEF9,null,`class`,`mx-1`);
let elhUYfy = ev('img','kqyff'+iigPu8+iipoPs+iieEF9,null,`src`,`${assignee.image}`,`title`,`${assignee.name}`,`class`,`small mr-2 circle`,`alt`,`${assignee.name}`);

                    setTimeout(function () {
                        let $el = elhUYfy;
                        
            true && tippyTooltip($el, {arrow:true,content:`${assignee.name}`});
        ;
                    }, 20);                
                ec('span');
}
ec('td');
let elT2YWp = eo('td','nv6ff'+iigPu8+iipoPs,null,`class`,`bold gray-text`);
text(record.module ? record.module.name : 'N/a');
ec('td');
let elIYUFj = eo('td','mWBff'+iigPu8+iipoPs);
let el7bI32 = eo('span','4i4ff'+iigPu8+iipoPs,null,`class`,`badge priority ${ record.priority }`);
text(record.priority);
ec('span');
ec('td');
let elaM7dS = eo('th','Dtcff'+iigPu8+iipoPs,null,`class`,`text-center`);
text(record.sprint.name || 'N/a');
ec('th');
let elEonp3 = eo('td','nhSff'+iigPu8+iipoPs);
let cnd7z2x = record.canBeModified;
this.setState('steUmU8', cnd7z2x);
if (cnd7z2x) { 
let elIRI3q = eo('button','Qr9ff'+iigPu8+iipoPs,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-cyan`);
let elLUSbH = eo('i','7ifff'+iigPu8+iipoPs,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elIRI3q;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Bug')}`});
        ;
                    }, 20);                
                let elmf6xX = eo('button','eBZff'+iigPu8+iipoPs,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-danger`);
let elLV2HP = eo('i','u10ff'+iigPu8+iipoPs,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elmf6xX;
                        
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
let cndKgxz = component.modalIsOpened;
this.setState('st6Dy2N', cndKgxz);
if (cndKgxz) { 
let cmpqjrm = this._lc('cSdt2_8Cs', {parent:component,props:{record:component.record,project:component.project},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null;},onsave:function(e) {let $el = this; component.onSubmit(e)}},state:'st6Dy2N'});
}let cndBw2i = component.confirmDelete;
this.setState('stzgv8f', cndBw2i);
if (cndBw2i) { 
let cmpYX7J = this._lc('c7MFC0ZUN', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stzgv8f'});
}
                    this.isReadyToGo();
                }
        });