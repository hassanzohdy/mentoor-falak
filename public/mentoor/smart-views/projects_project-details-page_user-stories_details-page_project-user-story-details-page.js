_Component({
                selector: 'project-user-story-details-page',
                c: 'ProjectUserStoryDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','userStories','userStory'],
                children: {cB6OcSRPU:'user-stories-board',cWTIsKPr7:'markdown',c49DMJ6NF:'markdown',cBcQakzuX:'markdown',cIhW9kTLE:'project-layout'},
                render: function (component) {
                    let cmpME8U = this._lc('cIhW9kTLE', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el6Ukp5 = eo('div',null,null,`class`,`row`);
let cndSCaz = ! Is.empty(component.userStories);
this.setState('st7kmyi', cndSCaz);
if (cndSCaz) { 
let elSA3zH = eo('div','wOgf',null,`class`,`col-sm-9`);
let cmpI0WP = this._lc('cB6OcSRPU', {parent:component,parentTop:projectLayout,props:{userStories:component.userStories,project:component.project},events:{onchange:function(e) {let $el = this; component.userStories = e}},state:'st7kmyi'});
ec('div');
}let elZu7aa = eo('div',null,null,`class`,`col-sm`);
let elZiQJV = eo('div',null,null,`class`,`simple-card`);
let elOm0_Z = eo('h3');
text(component.userStory.title);
ec('h3');
let elk2yss = eo('div',null,null,`class`,`m-t-1`);
let eleyZ2O = eo('span');
text(`Type:`);
ec('span');
let elTZ29y = eo('strong',null,null,`class`,`ml-2`);
text(component.userStory.type);
ec('strong');
ec('div');
let elf6DOM = eo('div',null,null,`class`,`m-t-1`);
let elQgu8Y = eo('span');
text(`Priority:`);
ec('span');
let elrgxpK = eo('strong',null,null,`class`,`ml-2`);
text(component.userStory.priority);
ec('strong');
ec('div');
let cndDzvI = component.userStory.parent;
this.setState('stOZwfB', cndDzvI);
if (cndDzvI) { 
let elsIgO3 = eo('div','2Zjf',null,`class`,`m-t-1`);
let eld3ojP = eo('span','5wIf');
text(`Parent:`);
ec('span');
let elV12Gg = eo('a','qIQf',null,`href`,`${URLS.project(component.project, 'user-stories', component.userStory.parent)}`,`class`,`ml-2 bold pink-text`);
text(component.userStory.parent.title);
ec('a');
ec('div');
}let cnd0YWQ = component.userStory.sprint;
this.setState('stN5ByA', cnd0YWQ);
if (cnd0YWQ) { 
let elQHZg6 = eo('div','jOSf',null,`class`,`m-t-1`);
let elBuR_e = eo('span','GOyf');
text(`Sprint:`);
ec('span');
let elExKKa = eo('a','LfIf',null,`href`,`${URLS.project(component.project, 'sprints', component.userStory.sprint)}`,`class`,`ml-2 bold badge pink`);
text(component.userStory.sprint.name);
ec('a');
ec('div');
}let cndpShr = component.userStory.task;
this.setState('st4I5dk', cndpShr);
if (cndpShr) { 
let elpHvuN = eo('div','m2Qf',null,`class`,`m-t-1`);
let elaabys = eo('span','dT_f');
text(`Task:`);
ec('span');
let el6cwzM = eo('a','pAof',null,`href`,`${URLS.task(component.userStory.task)}`,`class`,`ml-2 bold badge green`);
text(component.userStory.task.title);
ec('a');
ec('div');
}let cndAMhA = component.userStory.status;
this.setState('st_unci', cndAMhA);
if (cndAMhA) { 
let elzyKpc = eo('div','3sIf',null,`class`,`m-t-1`);
let eljhbGF = eo('span','fn6f');
text(`Status:`);
ec('span');
let elZbZda = eo('span','BOdf',null,`class`,`badge ml-2`);
elZbZda.cls = taskStatus(component.userStory);

            for (let className in elZbZda.cls) {
                elZbZda.classList.toggle(className, elZbZda.cls[className]);
            }  
            text(trans(component.userStory.status));
ec('span');
ec('div');
}let elZEBRd = eo('div',null,null,`class`,`m-t-1`);
let el9JL6P = eo('span');
text(`As a:`);
ec('span');
let elR489Q = eo('strong',null,null,`class`,`ml-2`);
text(component.userStory.who);
ec('strong');
ec('div');
let elb17se = eo('div',null,null,`class`,`m-t-1`);
let elPu85F = eo('strong');
text(`I want to:`);
ec('strong');
let cmpjMei = this._lc('cWTIsKPr7', {parent:component,parentTop:projectLayout,props:{content:component.userStory.what},attrs:{class:'ml-2'}});
ec('div');
let ellkWaW = eo('div',null,null,`class`,`m-t-1`);
let elrKa_M = eo('strong');
text(`So that:`);
ec('strong');
let cmp3wJt = this._lc('c49DMJ6NF', {parent:component,parentTop:projectLayout,props:{content:component.userStory.why},attrs:{class:'ml-2'}});
ec('div');
let el17W6d = eo('div',null,null,`class`,`m-t-1`);
let el7kGN8 = eo('strong',null,null,`class`,`teal-text`);
text(`Scenario (Acceptance Criteria):`);
ec('strong');
let cmp_n1m = this._lc('cBcQakzuX', {parent:component,parentTop:projectLayout,props:{content:component.userStory.scenario}});
ec('div');
ec('div');
ec('div');
ec('div');
}});

                    this.isReadyToGo();
                }
        });