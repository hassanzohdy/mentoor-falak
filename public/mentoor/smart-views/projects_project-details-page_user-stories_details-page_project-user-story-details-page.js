_Component({
                selector: 'project-user-story-details-page',
                c: 'ProjectUserStoryDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','userStories','userStory'],
                children: {caLAapFjc:'user-stories-board',cCv__8_VP:'markdown',cqEDqbdIL:'markdown',cldcFty7V:'markdown',czrmyNVKW:'project-layout'},
                render: function (component) {
                    let cmpgwgY = this._lc('czrmyNVKW', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elN3kHt = eo('div',null,null,`class`,`row`);
let cndkvoQ = ! Is.empty(component.userStories);
this.setState('stGyOtA', cndkvoQ);
if (cndkvoQ) { 
let el9IzN6 = eo('div','lSuf',null,`class`,`col-sm-9`);
let cmp3x4b = this._lc('caLAapFjc', {parent:component,parentTop:projectLayout,props:{userStories:component.userStories,project:component.project},events:{onchange:function(e) {let $el = this; component.userStories = e}},state:'stGyOtA'});
ec('div');
}let elMyfuO = eo('div',null,null,`class`,`col-sm`);
let elgJUO4 = eo('div',null,null,`class`,`simple-card`);
let el6Rgaw = eo('h3');
text(component.userStory.title);
ec('h3');
let elIvZll = eo('div',null,null,`class`,`m-t-1`);
let eliWv83 = eo('span');
text(`Type:`);
ec('span');
let elg9w1V = eo('strong',null,null,`class`,`ml-2`);
text(component.userStory.type);
ec('strong');
ec('div');
let elaXjsv = eo('div',null,null,`class`,`m-t-1`);
let elgZFmq = eo('span');
text(`Priority:`);
ec('span');
let elUdmLX = eo('strong',null,null,`class`,`ml-2`);
text(component.userStory.priority);
ec('strong');
ec('div');
let cndCP_E = component.userStory.parent;
this.setState('st68mVc', cndCP_E);
if (cndCP_E) { 
let elldtgI = eo('div','S5Lf',null,`class`,`m-t-1`);
let el3etU3 = eo('span','a46f');
text(`Parent:`);
ec('span');
let elexK6Z = eo('a','56yf',null,`href`,`${URLS.project(component.project, 'user-stories', component.userStory.parent)}`,`class`,`ml-2 bold pink-text`);
text(component.userStory.parent.title);
ec('a');
ec('div');
}let cndG2XS = component.userStory.sprint;
this.setState('staV0Yd', cndG2XS);
if (cndG2XS) { 
let elynysk = eo('div','7Pdf',null,`class`,`m-t-1`);
let elkSyi7 = eo('span','KOmf');
text(`Sprint:`);
ec('span');
let elhhEOr = eo('a','Hgdf',null,`href`,`${URLS.project(component.project, 'sprints', component.userStory.sprint)}`,`class`,`ml-2 bold badge pink`);
text(component.userStory.sprint.name);
ec('a');
ec('div');
}let cnd12Xa = component.userStory.task;
this.setState('stZKBaI', cnd12Xa);
if (cnd12Xa) { 
let el1JuFk = eo('div','m2mf',null,`class`,`m-t-1`);
let elx1nuE = eo('span','TOQf');
text(`Task:`);
ec('span');
let elIRVV_ = eo('a','a2xf',null,`href`,`${URLS.task(component.userStory.task)}`,`class`,`ml-2 bold badge green`);
text(component.userStory.task.title);
ec('a');
ec('div');
}let cndkP0k = component.userStory.status;
this.setState('stjRrM8', cndkP0k);
if (cndkP0k) { 
let elqDaoO = eo('div','5UCf',null,`class`,`m-t-1`);
let elBP2g5 = eo('span','ip2f');
text(`Status:`);
ec('span');
let el7pe92 = eo('span','n0sf',null,`class`,`badge ml-2 ${cls(taskStatus(component.userStory))}`);
text(trans(component.userStory.status));
ec('span');
ec('div');
}let elvFra8 = eo('div',null,null,`class`,`m-t-1`);
let elsgnAF = eo('span');
text(`As a:`);
ec('span');
let elsatNf = eo('strong',null,null,`class`,`ml-2`);
text(component.userStory.who);
ec('strong');
ec('div');
let elYkgjN = eo('div',null,null,`class`,`m-t-1`);
let eljtbid = eo('strong');
text(`I want to:`);
ec('strong');
let cmpg1rm = this._lc('cCv__8_VP', {parent:component,parentTop:projectLayout,props:{content:component.userStory.what},attrs:{class:'ml-2'}});
ec('div');
let elQSCXZ = eo('div',null,null,`class`,`m-t-1`);
let el9bxHi = eo('strong');
text(`So that:`);
ec('strong');
let cmp_GHM = this._lc('cqEDqbdIL', {parent:component,parentTop:projectLayout,props:{content:component.userStory.why},attrs:{class:'ml-2'}});
ec('div');
let elOSHYJ = eo('div',null,null,`class`,`m-t-1`);
let elRVokc = eo('strong',null,null,`class`,`teal-text`);
text(`Scenario (Acceptance Criteria):`);
ec('strong');
let cmpj4PV = this._lc('cldcFty7V', {parent:component,parentTop:projectLayout,props:{content:component.userStory.scenario}});
ec('div');
ec('div');
ec('div');
ec('div');
}});

                    this.isReadyToGo();
                }
        });