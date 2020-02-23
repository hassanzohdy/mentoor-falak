_Component({
                selector: 'project-user-story-details-page',
                c: 'ProjectUserStoryDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','userStories','userStory'],
                children: {cgmGalSew:'user-stories-board',criVOw_Uk:'markdown',cBu4Tnfv7:'markdown',cH1xyTfhU:'markdown',cfUJnzFxL:'project-layout'},
                render: function (component) {
                    let cmpDIdu = this._lc('cfUJnzFxL', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el0tsMk = eo('div',null,null,`class`,`row`);
let cndNzt8 = ! Is.empty(component.userStories);
this.setState('stEDKoz', cndNzt8);
if (cndNzt8) { 
let eliQcBW = eo('div','JJ_f',null,`class`,`col-sm-9`);
let cmpstXz = this._lc('cgmGalSew', {parent:component,parentTop:projectLayout,props:{userStories:component.userStories,project:component.project},events:{onchange:function(e) {let $el = this; component.userStories = e}},state:'stEDKoz'});
ec('div');
}let elv014c = eo('div',null,null,`class`,`col-sm`);
let elJ5Ung = eo('div',null,null,`class`,`simple-card`);
let elykopQ = eo('h3');
text(component.userStory.title);
ec('h3');
let eleFdIX = eo('div',null,null,`class`,`m-t-1`);
let el_k42P = eo('span');
text(`Type:`);
ec('span');
let el_CWaH = eo('strong',null,null,`class`,`ml-2`);
text(component.userStory.type);
ec('strong');
ec('div');
let eljcACb = eo('div',null,null,`class`,`m-t-1`);
let elj8M7f = eo('span');
text(`Priority:`);
ec('span');
let elC9IdJ = eo('strong',null,null,`class`,`ml-2`);
text(component.userStory.priority);
ec('strong');
ec('div');
let cndhb2d = component.userStory.parent;
this.setState('stHaoB_', cndhb2d);
if (cndhb2d) { 
let elKWghN = eo('div','Qdsf',null,`class`,`m-t-1`);
let elvqt_j = eo('span','hbpf');
text(`Parent:`);
ec('span');
let elPaTSk = eo('a','JbIf',null,`href`,`${URLS.project(component.project, 'user-stories', component.userStory.parent)}`,`class`,`ml-2 bold pink-text`);
text(component.userStory.parent.title);
ec('a');
ec('div');
}let cndQH3W = component.userStory.sprint;
this.setState('st36bVB', cndQH3W);
if (cndQH3W) { 
let elFR8OX = eo('div','MaSf',null,`class`,`m-t-1`);
let elRrgVg = eo('span','om6f');
text(`Sprint:`);
ec('span');
let eljOJNE = eo('a','Jcnf',null,`href`,`${URLS.project(component.project, 'sprints', component.userStory.sprint)}`,`class`,`ml-2 bold badge pink`);
text(component.userStory.sprint.name);
ec('a');
ec('div');
}let cndYLjg = component.userStory.task;
this.setState('stzzB1t', cndYLjg);
if (cndYLjg) { 
let eltGvsZ = eo('div','JUXf',null,`class`,`m-t-1`);
let elcupoQ = eo('span','39Tf');
text(`Task:`);
ec('span');
let el8Omf3 = eo('a','vywf',null,`href`,`${URLS.task(component.userStory.task)}`,`class`,`ml-2 bold badge green`);
text(component.userStory.task.title);
ec('a');
ec('div');
}let cndNQNR = component.userStory.status;
this.setState('st4HjQu', cndNQNR);
if (cndNQNR) { 
let elMUriU = eo('div','btHf',null,`class`,`m-t-1`);
let elnrgDt = eo('span','yqIf');
text(`Status:`);
ec('span');
let elPIOXg = eo('span','smSf',null,`class`,`badge ml-2`);
elPIOXg.cls = taskStatus(component.userStory);

            for (let className in elPIOXg.cls) {
                elPIOXg.classList.toggle(className, elPIOXg.cls[className]);
            }  
            text(trans(component.userStory.status));
ec('span');
ec('div');
}let eljpFB2 = eo('div',null,null,`class`,`m-t-1`);
let elsluSv = eo('span');
text(`As a:`);
ec('span');
let elzXsbb = eo('strong',null,null,`class`,`ml-2`);
text(component.userStory.who);
ec('strong');
ec('div');
let eljtoXd = eo('div',null,null,`class`,`m-t-1`);
let elzLGxs = eo('strong');
text(`I want to:`);
ec('strong');
let cmpDSWZ = this._lc('criVOw_Uk', {parent:component,parentTop:projectLayout,props:{content:component.userStory.what},attrs:{class:'ml-2'}});
ec('div');
let elvyqk6 = eo('div',null,null,`class`,`m-t-1`);
let elzrXC3 = eo('strong');
text(`So that:`);
ec('strong');
let cmp2TII = this._lc('cBu4Tnfv7', {parent:component,parentTop:projectLayout,props:{content:component.userStory.why},attrs:{class:'ml-2'}});
ec('div');
let el7GPc5 = eo('div',null,null,`class`,`m-t-1`);
let el2UbaB = eo('strong',null,null,`class`,`teal-text`);
text(`Scenario (Acceptance Criteria):`);
ec('strong');
let cmpIk_N = this._lc('cH1xyTfhU', {parent:component,parentTop:projectLayout,props:{content:component.userStory.scenario}});
ec('div');
ec('div');
ec('div');
ec('div');
}});

                    this.isReadyToGo();
                }
        });