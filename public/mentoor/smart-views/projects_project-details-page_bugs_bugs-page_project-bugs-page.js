_Component({
                selector: 'project-bugs-page',
                c: 'ProjectBugsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','bugs','detectChanges','confirmRemoving','modalIsOpened','record','onSubmit','confirmDelete','remove','filterOptions','filteredData','filterBy'],
                children: {cpjW4LUlF:'flk-dropdown-list',cxhnobrNd:'flk-dropdown-list',cc2G05rae:'flk-dropdown-list',cKBviBN5r:'flk-dropdown-list',cdQyFmil_:'flk-dropdown-list',cnCUPqz2D:'flk-time-ago',cJhztzn2J:'project-layout',cksYy6mJZ:'bug-modal',cSrVih78H:'flk-alert'},
                render: function (component) {
                    let cmpJaNP = this._lc('cJhztzn2J', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elKiwoj = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add', {status: 'active'})}]},`class`,`float-right btn btn-success bold`);
let el66ovn = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Bug`);
ec('button');
let elNF6Tp = eo('h1',null,null,`class`,`m-y-1 purple-text`);
text( component.project.name );
let elPfRMp = ev('img',null,null,`src`,`${assets('images/bug.jpg')}`,`title`,``,`style`,`width: 20px; height: 30px; border-radius: 50%; margin-left: 0.3rem; margin-right: 0.2rem`);

                    setTimeout(function () {
                        let $el = elPfRMp;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('bug')}`});
        ;
                    }, 20);                
                let elXMYzX = eo('span',null,null,`class`,`bold red-text mr-2`);
text(`s`);
ec('span');
text(`(${ component.project.bugs.length })`);
ec('h1');
let el1rEro = eo('div',null,null,`class`,`simple-card m-b-2 col-12 tasks-list-filter`);
let elsZmmn = eo('div',null,null,`class`,`row`);
let cndVeFA = ! Is.empty(component.filterOptions.assignees);
this.setState('stxOAnS', cndVeFA);
if (cndVeFA) { 
let eldvBhn = eo('div','arnf',null,`class`,`col-sm-3 filter-container`);
let el6pjvR = eo('div','s_0f',null,`class`,`filter-list`);
let cmpLf6N = this._lc('cpjW4LUlF', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.assignees,value:component.filteredData.assignees,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('assignees', e);}},boolAttrs:{multiple:true},attrs:{heading:'Assignees'},state:'stxOAnS'});
ec('div');
ec('div');
}let cnd69Oc = ! Is.empty(component.filterOptions.testers);
this.setState('stIOL6Y', cnd69Oc);
if (cnd69Oc) { 
let elnum0x = eo('div','dcxf',null,`class`,`col-sm-3 filter-container`);
let elj9YmL = eo('div','B7Af',null,`class`,`filter-list`);
let cmpZvm7 = this._lc('cxhnobrNd', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.testers,value:component.filteredData.testers,imageable:true,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('testers', e);}},boolAttrs:{multiple:true},attrs:{heading:'Testers'},state:'stIOL6Y'});
ec('div');
ec('div');
}let cnd7BNe = ! Is.empty(component.filterOptions.priorities);
this.setState('stPl5nt', cnd7BNe);
if (cnd7BNe) { 
let elL6FHw = eo('div','sqnf',null,`class`,`col-sm-3 filter-container`);
let elsj4cL = eo('div','w21f',null,`class`,`filter-list`);
let cmpJVVY = this._lc('cc2G05rae', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.priorities,value:component.filteredData.priorities,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('priorities', e);}},boolAttrs:{multiple:true},attrs:{heading:'Priority'},state:'stPl5nt'});
ec('div');
ec('div');
}let cnd1YUs = ! Is.empty(component.filterOptions.modules);
this.setState('stazsXZ', cnd1YUs);
if (cnd1YUs) { 
let el1vOcS = eo('div','zFLf',null,`class`,`col-sm-3 filter-container`);
let elIj9pP = eo('div','bjFf',null,`class`,`filter-list`);
let cmpO_2F = this._lc('cKBviBN5r', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.modules,value:component.filteredData.modules,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('modules', e);}},boolAttrs:{multiple:true},attrs:{heading:'Module'},state:'stazsXZ'});
ec('div');
ec('div');
}let cnd1q2S = ! Is.empty(component.filterOptions.sprints);
this.setState('stiF7PP', cnd1q2S);
if (cnd1q2S) { 
let el38K1o = eo('div','UQAf',null,`class`,`col-sm-3 filter-container`);
let elwV9S1 = eo('div','2nRf',null,`class`,`filter-list`);
let cmpR8rv = this._lc('cdQyFmil_', {parent:component,parentTop:projectLayout,props:{items:component.filterOptions.sprints,value:component.filteredData.sprints,multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy('sprints', e);}},boolAttrs:{multiple:true},attrs:{heading:'Sprints'},state:'stiF7PP'});
ec('div');
ec('div');
}ec('div');
ec('div');
for (let status in component.bugs) {
let bugsOptions = component.bugs[status]; 
 let iiyaaf = 'qXX3_tI' + status;
let elRQIah = eo('h4','D4WboSrcSa08' + status+iiyaaf,null, eventListeners, {onclick:[function(e) {var $el = this;bugsOptions.opened = ! bugsOptions.opened; component.detectChanges();}]},`class`,`text-capitalize m-t-2 pointer gray-text simple-card`);
let elioBUU = eo('span','69yff'+iiyaaf);
text(status + ' Bugs (' + bugsOptions.bugs.length + ')');
ec('span');
let cndoKVQ = bugsOptions.opened;
this.setState('stKDyN3', cndoKVQ);
let cndzXqj = !(cndoKVQ);
this.setState('stBzFZp', cndzXqj);
if (cndoKVQ) { 
let el_eLsG = eo('i','GMDff'+iiyaaf,null,`class`,`${fas('angle-down') + ' ml-2 icon'}`);
ec('i');
}else { 
let ell5bRD = eo('i','FqEff'+iiyaaf,null,`class`,`${fas('angle-up') + ' ml-2 icon'}`);
ec('i');
}ec('h4');
let cndAWxL = bugsOptions.opened;
this.setState('sttNxHT', cndAWxL);
if (cndAWxL) { 
let elzerZp = eo('div','odeff'+iiyaaf,null,`class`,`table-responsive`);
let el0Lias = eo('table','rBPff'+iiyaaf,null,`class`,`table buttoned simple-card`);
let elQlUMj = eo('thead','5W6ff'+iiyaaf);
let elXXVNl = eo('tr','XXIff'+iiyaaf);
let el0P9bK = eo('th','Unjff'+iiyaaf);
text(`#`);
ec('th');
let elmJown = eo('th','xHWff'+iiyaaf,null,`class`,`title-column`);
text(`Title`);
ec('th');
let elZoEZ3 = eo('th','Uhcff'+iiyaaf);
text(`Created`);
ec('th');
let elK_b9z = eo('th','ThBff'+iiyaaf);
text(`Comments`);
ec('th');
let el0h2ej = eo('th','N1mff'+iiyaaf);
text(`Issued By`);
ec('th');
let el5xXlm = eo('th','LrLff'+iiyaaf);
text(`Assigned To`);
ec('th');
let elm_Jem = eo('th','Lqzff'+iiyaaf);
text(`Module`);
ec('th');
let el_YfbS = eo('th','zjzff'+iiyaaf);
text(`Priority`);
ec('th');
let elcDvBg = eo('th','swsff'+iiyaaf);
text(`Sprint`);
ec('th');
let elIcMRg = eo('th','QSQff'+iiyaaf);
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elW1nfi = eo('tbody','vbbff'+iiyaaf);
for (let index in bugsOptions.bugs) {
let record = bugsOptions.bugs[index]; 
 let ii6vCR = record.id+ index;
let elfh1uU = eo('tr','lAMgBBAvXYaZ' + index+iiyaaf+ii6vCR);
let elMdxvu = eo('td','_56ff'+iiyaaf+ii6vCR);
text(record.id);
ec('td');
let el1_BUP = eo('td','hrMff'+iiyaaf+ii6vCR,null,`class`,`title-column`);
let elkrBoD = eo('a','5TLff'+iiyaaf+ii6vCR,null,`href`,`${URLS.project(component.project, 'bugs', record)}`,`title`,``,`class`,`bold`);
text(record.title.readMoreChars(20));
ec('a');

                    setTimeout(function () {
                        let $el = elkrBoD;
                        
            true && tippyTooltip($el, {arrow:true,content:`${record.title}`});
        ;
                    }, 20);                
                ec('td');
let elsYw15 = eo('td','TAKff'+iiyaaf+ii6vCR);
let cmpshUL = this._lc('cnCUPqz2D', {parent:component,parentTop:projectLayout,props:{timestamp:record.createdAt.timestamp},state:'sttNxHT',insideLoop:true,index:"" +iiyaaf+ii6vCR});
ec('td');
let el1XzjC = eo('td','JI1ff'+iiyaaf+ii6vCR);
let elAxQK7 = eo('strong','AzKff'+iiyaaf+ii6vCR,null,`class`,`gray-text`);
text(record.comments.length);
ec('strong');
let elvTmxK = eo('i','_aQff'+iiyaaf+ii6vCR,null,`class`,`${far('comments') + ' ml-2 gray-text icon'}`);
ec('i');
ec('td');
let elBcuQT = eo('td','4Zuff'+iiyaaf+ii6vCR,null,`class`,`text-center`);
let elrGEfh = ev('img','Q_Vff'+iiyaaf+ii6vCR,null,`src`,`${record.createdBy.image}`,`title`,`${record.createdBy.name}`,`class`,`small mr-2 circle`,`alt`,`${record.createdBy.name}`);

                    setTimeout(function () {
                        let $el = elrGEfh;
                        
            true && tippyTooltip($el, {arrow:true,content:`${record.createdBy.name}`});
        ;
                    }, 20);                
                ec('td');
let elVx8p9 = eo('td','jnhff'+iiyaaf+ii6vCR,null,`class`,`text-center`);
for (let i in record.assignee) {
let assignee = record.assignee[i]; 
 let ii6Cut = 'Bc0dX_1' + i;
let elZNSSN = eo('span','k_PCkk8oRCDa' + i+iiyaaf+ii6vCR+ii6Cut,null,`class`,`mx-1`);
let elpalWc = ev('img','Pcyff'+iiyaaf+ii6vCR+ii6Cut,null,`src`,`${assignee.image}`,`title`,`${assignee.name}`,`class`,`small mr-2 circle`,`alt`,`${assignee.name}`);

                    setTimeout(function () {
                        let $el = elpalWc;
                        
            true && tippyTooltip($el, {arrow:true,content:`${assignee.name}`});
        ;
                    }, 20);                
                ec('span');
}
ec('td');
let elqwxPe = eo('td','qQ1ff'+iiyaaf+ii6vCR,null,`class`,`bold gray-text`);
text(record.module ? record.module.name : 'N/a');
ec('td');
let elDe9vt = eo('td','PUDff'+iiyaaf+ii6vCR);
let el6KmLo = eo('span','k22ff'+iiyaaf+ii6vCR,null,`class`,`badge priority ${ record.priority }`);
text(record.priority);
ec('span');
ec('td');
let elIE0cQ = eo('th','4erff'+iiyaaf+ii6vCR,null,`class`,`text-center`);
text(record.sprint.name || 'N/a');
ec('th');
let elVYDg2 = eo('td','rxtff'+iiyaaf+ii6vCR);
let cnd6T6i = record.canBeModified;
this.setState('stys5OL', cnd6T6i);
if (cnd6T6i) { 
let el7IDXY = eo('button','zX3ff'+iiyaaf+ii6vCR,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-cyan`);
let elmzTG2 = eo('i','gQnff'+iiyaaf+ii6vCR,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el7IDXY;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Bug')}`});
        ;
                    }, 20);                
                let elZ9uYn = eo('button','Soxff'+iiyaaf+ii6vCR,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-danger`);
let elKlMUQ = eo('i','N4Cff'+iiyaaf+ii6vCR,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elZ9uYn;
                        
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
let cndNrlv = component.modalIsOpened;
this.setState('st2cO3X', cndNrlv);
if (cndNrlv) { 
let cmpuBy5 = this._lc('cksYy6mJZ', {parent:component,props:{record:component.record,project:component.project},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null;},onsave:function(e) {let $el = this; component.onSubmit(e)}},state:'st2cO3X'});
}let cndOlKS = component.confirmDelete;
this.setState('stPRSn0', cndOlKS);
if (cndOlKS) { 
let cmpDEGa = this._lc('cSrVih78H', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stPRSn0'});
}
                    this.isReadyToGo();
                }
        });