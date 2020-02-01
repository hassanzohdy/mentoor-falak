_Component({
                selector: 'project-user-story-details-page',
                c: 'ProjectUserStoryDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','userStories','userStory'],
                children: {cOKMj5W6v:'user-stories-board',cbm9Ubsff:'markdown',c8v_eUyzr:'markdown',cx8LMn4cW:'markdown',c4Q2lPCNF:'project-layout'},
                render: function (component) {
                    let cmpHVWW = this._lc('c4Q2lPCNF', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elb9ID_ = eo('div',null,null,`class`,`row`);
let cndhNo8 = ! Is.empty(component.userStories);
this.setState('st2GbYx', cndhNo8);
if (cndhNo8) { 
let elCoVAF = eo('div','Ttrf',null,`class`,`col-sm-9`);
let cmpR9yV = this._lc('cOKMj5W6v', {parent:component,parentTop:projectLayout,props:{userStories:component.userStories,project:component.project},events:{onchange:function(e) {let $el = this; component.userStories = e}},state:'st2GbYx'});
ec('div');
}let elA4XUU = eo('div',null,null,`class`,`col-sm`);
let elPxPfl = eo('div',null,null,`class`,`simple-card`);
let elaYml0 = eo('h3');
text(component.userStory.title);
ec('h3');
let elQWmA5 = eo('div',null,null,`class`,`m-t-1`);
let el0r5AW = eo('span');
text(`Type:`);
ec('span');
let elkimpn = eo('strong',null,null,`class`,`ml-2`);
text(component.userStory.type);
ec('strong');
ec('div');
let elHCxgF = eo('div',null,null,`class`,`m-t-1`);
let elLk1dq = eo('span');
text(`Priority:`);
ec('span');
let elykkU0 = eo('strong',null,null,`class`,`ml-2`);
text(component.userStory.priority);
ec('strong');
ec('div');
let cndzhMk = component.userStory.parent;
this.setState('st3GFHt', cndzhMk);
if (cndzhMk) { 
let elHCPO4 = eo('div','Z7Ff',null,`class`,`m-t-1`);
let el4PtZg = eo('span','w7Yf');
text(`Parent:`);
ec('span');
let elNTSBV = eo('a','7_tf',null,`href`,`${URLS.project(component.project, 'user-stories', component.userStory.parent)}`,`class`,`ml-2 bold pink-text`);
text(component.userStory.parent.title);
ec('a');
ec('div');
}let cnde9im = component.userStory.sprint;
this.setState('stxXCcP', cnde9im);
if (cnde9im) { 
let elGN5yP = eo('div','Vaxf',null,`class`,`m-t-1`);
let elyfFuv = eo('span','vsIf');
text(`Sprint:`);
ec('span');
let elkO59e = eo('a','2bif',null,`href`,`${URLS.project(component.project, 'sprints', component.userStory.sprint)}`,`class`,`ml-2 bold badge pink`);
text(component.userStory.sprint.name);
ec('a');
ec('div');
}let cndafb0 = component.userStory.task;
this.setState('stdIG8s', cndafb0);
if (cndafb0) { 
let elAqg6Y = eo('div','_9xf',null,`class`,`m-t-1`);
let el6KU2K = eo('span','Wzzf');
text(`Task:`);
ec('span');
let elkh9hE = eo('a','I9Bf',null,`href`,`${URLS.task(component.userStory.task)}`,`class`,`ml-2 bold badge green`);
text(component.userStory.task.title);
ec('a');
ec('div');
}let cndQQ3K = component.userStory.status;
this.setState('stL3lbh', cndQQ3K);
if (cndQQ3K) { 
let elKnEhY = eo('div','H65f',null,`class`,`m-t-1`);
let elj01bv = eo('span','eKxf');
text(`Status:`);
ec('span');
let elgARkP = eo('span','Uubf',null,`class`,`badge ml-2`);
elgARkP.cls = taskStatus(component.userStory);

            for (let className in elgARkP.cls) {
                elgARkP.classList.toggle(className, elgARkP.cls[className]);
            }  
            text(trans(component.userStory.status));
ec('span');
ec('div');
}let elpVQbh = eo('div',null,null,`class`,`m-t-1`);
let el1ZzvD = eo('span');
text(`As a:`);
ec('span');
let elHBsn4 = eo('strong',null,null,`class`,`ml-2`);
text(component.userStory.who);
ec('strong');
ec('div');
let elywFmW = eo('div',null,null,`class`,`m-t-1`);
let elNJ6ml = eo('strong');
text(`I want to:`);
ec('strong');
let cmpW5Ob = this._lc('cbm9Ubsff', {parent:component,parentTop:projectLayout,props:{content:component.userStory.what},attrs:{class:'ml-2'}});
ec('div');
let el2pOzO = eo('div',null,null,`class`,`m-t-1`);
let el8be0u = eo('strong');
text(`So that:`);
ec('strong');
let cmpMzmR = this._lc('c8v_eUyzr', {parent:component,parentTop:projectLayout,props:{content:component.userStory.why},attrs:{class:'ml-2'}});
ec('div');
let elKwMWm = eo('div',null,null,`class`,`m-t-1`);
let elsPvRX = eo('strong',null,null,`class`,`teal-text`);
text(`Scenario (Acceptance Criteria):`);
ec('strong');
let cmpHzf2 = this._lc('cx8LMn4cW', {parent:component,parentTop:projectLayout,props:{content:component.userStory.scenario}});
ec('div');
ec('div');
ec('div');
ec('div');
}});

                    this.isReadyToGo();
                }
        });