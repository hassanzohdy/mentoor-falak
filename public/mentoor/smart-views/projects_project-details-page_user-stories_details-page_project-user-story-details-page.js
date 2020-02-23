_Component({
                selector: 'project-user-story-details-page',
                c: 'ProjectUserStoryDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','userStories','userStory'],
                children: {ca7VQpwLr:'user-stories-board',cKrtVMtIF:'markdown',cagiZRcGq:'markdown',ctj2916Ao:'markdown',c838XwhdT:'project-layout'},
                render: function (component) {
                    let cmpfzKv = this._lc('c838XwhdT', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el7A_2O = eo('div',null,null,`class`,`row`);
let cndRB_K = ! Is.empty(component.userStories);
this.setState('stz5LDx', cndRB_K);
if (cndRB_K) { 
let elt3h2d = eo('div','ag_f',null,`class`,`col-sm-9`);
let cmpDELK = this._lc('ca7VQpwLr', {parent:component,parentTop:projectLayout,props:{userStories:component.userStories,project:component.project},events:{onchange:function(e) {let $el = this; component.userStories = e}},state:'stz5LDx'});
ec('div');
}let elKwbnC = eo('div',null,null,`class`,`col-sm`);
let elLLJ0Z = eo('div',null,null,`class`,`simple-card`);
let ellzvzq = eo('h3');
text(component.userStory.title);
ec('h3');
let ellVKFU = eo('div',null,null,`class`,`m-t-1`);
let el2A8f1 = eo('span');
text(`Type:`);
ec('span');
let elzc1p6 = eo('strong',null,null,`class`,`ml-2`);
text(component.userStory.type);
ec('strong');
ec('div');
let elfdOcr = eo('div',null,null,`class`,`m-t-1`);
let el2mBAz = eo('span');
text(`Priority:`);
ec('span');
let el7iy9q = eo('strong',null,null,`class`,`ml-2`);
text(component.userStory.priority);
ec('strong');
ec('div');
let cndx9zs = component.userStory.parent;
this.setState('stQHdcO', cndx9zs);
if (cndx9zs) { 
let elBTdm8 = eo('div','Aknf',null,`class`,`m-t-1`);
let elsXsrx = eo('span','o1bf');
text(`Parent:`);
ec('span');
let elHn9_y = eo('a','W0Uf',null,`href`,`${URLS.project(component.project, 'user-stories', component.userStory.parent)}`,`class`,`ml-2 bold pink-text`);
text(component.userStory.parent.title);
ec('a');
ec('div');
}let cndJgM4 = component.userStory.sprint;
this.setState('stXiSi5', cndJgM4);
if (cndJgM4) { 
let eli6RSM = eo('div','MB9f',null,`class`,`m-t-1`);
let elH3KC7 = eo('span','9V6f');
text(`Sprint:`);
ec('span');
let elPEIOQ = eo('a','6b0f',null,`href`,`${URLS.project(component.project, 'sprints', component.userStory.sprint)}`,`class`,`ml-2 bold badge pink`);
text(component.userStory.sprint.name);
ec('a');
ec('div');
}let cnd1yIj = component.userStory.task;
this.setState('st7W6dx', cnd1yIj);
if (cnd1yIj) { 
let elbjvFQ = eo('div','HDIf',null,`class`,`m-t-1`);
let elUxrIT = eo('span','tCqf');
text(`Task:`);
ec('span');
let elAuMZg = eo('a','9gDf',null,`href`,`${URLS.task(component.userStory.task)}`,`class`,`ml-2 bold badge green`);
text(component.userStory.task.title);
ec('a');
ec('div');
}let cndyemh = component.userStory.status;
this.setState('stfvAQb', cndyemh);
if (cndyemh) { 
let el0z11O = eo('div','WE7f',null,`class`,`m-t-1`);
let elaZjqF = eo('span','NRcf');
text(`Status:`);
ec('span');
let elVeveW = eo('span','DBkf',null,`class`,`badge ml-2`);
elVeveW.cls = taskStatus(component.userStory);

            for (let className in elVeveW.cls) {
                elVeveW.classList.toggle(className, elVeveW.cls[className]);
            }  
            text(trans(component.userStory.status));
ec('span');
ec('div');
}let elxL1bF = eo('div',null,null,`class`,`m-t-1`);
let eleLuGj = eo('span');
text(`As a:`);
ec('span');
let el53MjF = eo('strong',null,null,`class`,`ml-2`);
text(component.userStory.who);
ec('strong');
ec('div');
let el0B23f = eo('div',null,null,`class`,`m-t-1`);
let elcRAzh = eo('strong');
text(`I want to:`);
ec('strong');
let cmp9APU = this._lc('cKrtVMtIF', {parent:component,parentTop:projectLayout,props:{content:component.userStory.what},attrs:{class:'ml-2'}});
ec('div');
let elF4zWr = eo('div',null,null,`class`,`m-t-1`);
let elZnPYY = eo('strong');
text(`So that:`);
ec('strong');
let cmpBtl7 = this._lc('cagiZRcGq', {parent:component,parentTop:projectLayout,props:{content:component.userStory.why},attrs:{class:'ml-2'}});
ec('div');
let el1EVMV = eo('div',null,null,`class`,`m-t-1`);
let eltJACj = eo('strong',null,null,`class`,`teal-text`);
text(`Scenario (Acceptance Criteria):`);
ec('strong');
let cmpPEbp = this._lc('ctj2916Ao', {parent:component,parentTop:projectLayout,props:{content:component.userStory.scenario}});
ec('div');
ec('div');
ec('div');
ec('div');
}});

                    this.isReadyToGo();
                }
        });