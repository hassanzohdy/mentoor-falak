_Component({
                selector: 'project-user-story-details-page',
                c: 'ProjectUserStoryDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','userStories','userStory'],
                children: {cXOs1mwum:'user-stories-board',c7P_atF7j:'markdown',cEEsDL2H8:'markdown',cpO8Xd_DO:'markdown',c0AsbTUzp:'project-layout'},
                render: function (component) {
                    let cmpgXZG = this._lc('c0AsbTUzp', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elprxRc = eo('div',null,null,`class`,`row`);
let cndBDaW = ! Is.empty(component.userStories);
this.setState('stxdl2I', cndBDaW);
if (cndBDaW) { 
let elhgIq1 = eo('div','QWRf',null,`class`,`col-sm-9`);
let cmpMCbq = this._lc('cXOs1mwum', {parent:component,parentTop:projectLayout,props:{userStories:component.userStories,project:component.project},events:{onchange:function(e) {let $el = this; component.userStories = e}},state:'stxdl2I'});
ec('div');
}let elBzzfq = eo('div',null,null,`class`,`col-sm`);
let elPxiUf = eo('div',null,null,`class`,`simple-card`);
let elIJVI6 = eo('h3');
text(component.userStory.title);
ec('h3');
let elWhsfs = eo('div',null,null,`class`,`m-t-1`);
let el8G5aU = eo('span');
text(`Type:`);
ec('span');
let elg9JBM = eo('strong',null,null,`class`,`ml-2`);
text(component.userStory.type);
ec('strong');
ec('div');
let el9PIju = eo('div',null,null,`class`,`m-t-1`);
let el0vBCh = eo('span');
text(`Priority:`);
ec('span');
let elgy1Co = eo('strong',null,null,`class`,`ml-2`);
text(component.userStory.priority);
ec('strong');
ec('div');
let cndLvuE = component.userStory.parent;
this.setState('stryiif', cndLvuE);
if (cndLvuE) { 
let elKcTQJ = eo('div','BMAf',null,`class`,`m-t-1`);
let ele7L0X = eo('span','ZtMf');
text(`Parent:`);
ec('span');
let elVvYvL = eo('a','T1Sf',null,`href`,`${URLS.project(component.project, 'user-stories', component.userStory.parent)}`,`class`,`ml-2 bold pink-text`);
text(component.userStory.parent.title);
ec('a');
ec('div');
}let cnd_v_I = component.userStory.sprint;
this.setState('st4QCsP', cnd_v_I);
if (cnd_v_I) { 
let elX1Gw_ = eo('div','oPVf',null,`class`,`m-t-1`);
let elOf53T = eo('span','b5Rf');
text(`Sprint:`);
ec('span');
let elToRQH = eo('a','TPZf',null,`href`,`${URLS.project(component.project, 'sprints', component.userStory.sprint)}`,`class`,`ml-2 bold badge pink`);
text(component.userStory.sprint.name);
ec('a');
ec('div');
}let cnduaP2 = component.userStory.task;
this.setState('st6pqn2', cnduaP2);
if (cnduaP2) { 
let el2eVIx = eo('div','ySpf',null,`class`,`m-t-1`);
let elv9DRm = eo('span','L7Zf');
text(`Task:`);
ec('span');
let elzEwUn = eo('a','Fckf',null,`href`,`${URLS.task(component.userStory.task)}`,`class`,`ml-2 bold badge green`);
text(component.userStory.task.title);
ec('a');
ec('div');
}let cndVSqv = component.userStory.status;
this.setState('stXKsYX', cndVSqv);
if (cndVSqv) { 
let elx6H6s = eo('div','9Hvf',null,`class`,`m-t-1`);
let elGElSj = eo('span','eA8f');
text(`Status:`);
ec('span');
let elaaZqG = eo('span','pZFf',null,`class`,`badge ml-2`);
elaaZqG.cls = taskStatus(component.userStory);

            for (let className in elaaZqG.cls) {
                elaaZqG.classList.toggle(className, elaaZqG.cls[className]);
            }  
            text(trans(component.userStory.status));
ec('span');
ec('div');
}let elqle7S = eo('div',null,null,`class`,`m-t-1`);
let elUTohJ = eo('span');
text(`As a:`);
ec('span');
let el00fQJ = eo('strong',null,null,`class`,`ml-2`);
text(component.userStory.who);
ec('strong');
ec('div');
let el0v45H = eo('div',null,null,`class`,`m-t-1`);
let el6CCQn = eo('strong');
text(`I want to:`);
ec('strong');
let cmp6JUC = this._lc('c7P_atF7j', {parent:component,parentTop:projectLayout,props:{content:component.userStory.what},attrs:{class:'ml-2'}});
ec('div');
let elzwHKZ = eo('div',null,null,`class`,`m-t-1`);
let elcWQJY = eo('strong');
text(`So that:`);
ec('strong');
let cmp1iI2 = this._lc('cEEsDL2H8', {parent:component,parentTop:projectLayout,props:{content:component.userStory.why},attrs:{class:'ml-2'}});
ec('div');
let elIWY5V = eo('div',null,null,`class`,`m-t-1`);
let elaBxia = eo('strong',null,null,`class`,`teal-text`);
text(`Scenario (Acceptance Criteria):`);
ec('strong');
let cmpk9WR = this._lc('cpO8Xd_DO', {parent:component,parentTop:projectLayout,props:{content:component.userStory.scenario}});
ec('div');
ec('div');
ec('div');
ec('div');
}});

                    this.isReadyToGo();
                }
        });