_Component({
                selector: 'project-user-story-details-page',
                c: 'ProjectUserStoryDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','userStories','userStory'],
                children: {cL0JaK7IB:'user-stories-board',cXNAGROQt:'markdown',cZqjrBXQt:'markdown',cghN0x88u:'markdown',cWHy84evq:'project-layout'},
                render: function (component) {
                    let cmpVZST = this._lc('cWHy84evq', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elRFvOZ = eo('div',null,null,`class`,`row`);
let cndm99Q = ! Is.empty(component.userStories);
this.setState('stmJvz4', cndm99Q);
if (cndm99Q) { 
let elXZST5 = eo('div','g4df',null,`class`,`col-sm-9`);
let cmpzswo = this._lc('cL0JaK7IB', {parent:component,parentTop:projectLayout,props:{userStories:component.userStories,project:component.project},events:{onchange:function(e) {let $el = this; component.userStories = e}},state:'stmJvz4'});
ec('div');
}let elaQeHy = eo('div',null,null,`class`,`col-sm`);
let elfU9tw = eo('div',null,null,`class`,`simple-card`);
let elIY3gS = eo('h3');
text(component.userStory.title);
ec('h3');
let el5PvtT = eo('div',null,null,`class`,`m-t-1`);
let elrkzb6 = eo('span');
text(`Type:`);
ec('span');
let elVR8_j = eo('strong',null,null,`class`,`ml-2`);
text(component.userStory.type);
ec('strong');
ec('div');
let elYvWQG = eo('div',null,null,`class`,`m-t-1`);
let elFya20 = eo('span');
text(`Priority:`);
ec('span');
let elTe78T = eo('strong',null,null,`class`,`ml-2`);
text(component.userStory.priority);
ec('strong');
ec('div');
let cnd0x1k = component.userStory.parent;
this.setState('stIw8d1', cnd0x1k);
if (cnd0x1k) { 
let elCDpCV = eo('div','p78f',null,`class`,`m-t-1`);
let elwwvpM = eo('span','yAyf');
text(`Parent:`);
ec('span');
let elDnyWi = eo('a','b3bf',null,`href`,`${URLS.project(component.project, 'user-stories', component.userStory.parent)}`,`class`,`ml-2 bold pink-text`);
text(component.userStory.parent.title);
ec('a');
ec('div');
}let cndqfVM = component.userStory.sprint;
this.setState('stkTSnb', cndqfVM);
if (cndqfVM) { 
let elWgt56 = eo('div','HCkf',null,`class`,`m-t-1`);
let elfEr8S = eo('span','bZPf');
text(`Sprint:`);
ec('span');
let el96q_t = eo('a','CqEf',null,`href`,`${URLS.project(component.project, 'sprints', component.userStory.sprint)}`,`class`,`ml-2 bold badge pink`);
text(component.userStory.sprint.name);
ec('a');
ec('div');
}let cndEE3S = component.userStory.task;
this.setState('stBCg7V', cndEE3S);
if (cndEE3S) { 
let elnoDOQ = eo('div','jUEf',null,`class`,`m-t-1`);
let elPMqfl = eo('span','lBDf');
text(`Task:`);
ec('span');
let elC2Abn = eo('a','eZOf',null,`href`,`${URLS.task(component.userStory.task)}`,`class`,`ml-2 bold badge green`);
text(component.userStory.task.title);
ec('a');
ec('div');
}let cnd_iPh = component.userStory.status;
this.setState('sthUHzQ', cnd_iPh);
if (cnd_iPh) { 
let elmoVZf = eo('div','N0Ff',null,`class`,`m-t-1`);
let elug05o = eo('span','rQef');
text(`Status:`);
ec('span');
let elZICzd = eo('span','lBMf',null,`class`,`badge ml-2 ${cls(taskStatus(component.userStory))}`);
text(trans(component.userStory.status));
ec('span');
ec('div');
}let elIuNHI = eo('div',null,null,`class`,`m-t-1`);
let elcXnKg = eo('span');
text(`As a:`);
ec('span');
let elr_Djt = eo('strong',null,null,`class`,`ml-2`);
text(component.userStory.who);
ec('strong');
ec('div');
let elqjvnS = eo('div',null,null,`class`,`m-t-1`);
let elXyCX_ = eo('strong');
text(`I want to:`);
ec('strong');
let cmpbgEw = this._lc('cXNAGROQt', {parent:component,parentTop:projectLayout,props:{content:component.userStory.what},attrs:{class:'ml-2'}});
ec('div');
let el7KTUj = eo('div',null,null,`class`,`m-t-1`);
let elPsp1D = eo('strong');
text(`So that:`);
ec('strong');
let cmp9axB = this._lc('cZqjrBXQt', {parent:component,parentTop:projectLayout,props:{content:component.userStory.why},attrs:{class:'ml-2'}});
ec('div');
let elDEqoH = eo('div',null,null,`class`,`m-t-1`);
let el1uu8D = eo('strong',null,null,`class`,`teal-text`);
text(`Scenario (Acceptance Criteria):`);
ec('strong');
let cmpBVeB = this._lc('cghN0x88u', {parent:component,parentTop:projectLayout,props:{content:component.userStory.scenario}});
ec('div');
ec('div');
ec('div');
ec('div');
}});

                    this.isReadyToGo();
                }
        });