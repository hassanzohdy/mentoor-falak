_Component({
                selector: 'project-user-story-details-page',
                c: 'ProjectUserStoryDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','userStories','userStory'],
                children: {czasa_ZJw:'user-stories-board',c68SWXAW2:'markdown',crS5hIkhS:'markdown',cHvNlSPPB:'markdown',cP6gATXsu:'project-layout'},
                render: function (component) {
                    let cmpK5uW = this._lc('cP6gATXsu', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elG_nBn = eo('div',null,null,`class`,`row`);
let cndlOqy = ! Is.empty(component.userStories);
this.setState('stJF7_P', cndlOqy);
if (cndlOqy) { 
let elv5gCl = eo('div','Sicf',null,`class`,`col-sm-9`);
let cmpmOIX = this._lc('czasa_ZJw', {parent:component,parentTop:projectLayout,props:{userStories:component.userStories,project:component.project},events:{onchange:function(e) {let $el = this; component.userStories = e}},state:'stJF7_P'});
ec('div');
}let eli8BjA = eo('div',null,null,`class`,`col-sm`);
let el5IF_1 = eo('div',null,null,`class`,`simple-card`);
let ele8PPt = eo('h3');
text(component.userStory.title);
ec('h3');
let elqk8Gm = eo('div',null,null,`class`,`m-t-1`);
let el8R2pX = eo('span');
text(`Type:`);
ec('span');
let elVvpHu = eo('strong',null,null,`class`,`ml-2`);
text(component.userStory.type);
ec('strong');
ec('div');
let el2SLUy = eo('div',null,null,`class`,`m-t-1`);
let elxi0Uf = eo('span');
text(`Priority:`);
ec('span');
let elAuqP7 = eo('strong',null,null,`class`,`ml-2`);
text(component.userStory.priority);
ec('strong');
ec('div');
let cnd36CI = component.userStory.parent;
this.setState('stlhsAL', cnd36CI);
if (cnd36CI) { 
let elroKlp = eo('div','tZkf',null,`class`,`m-t-1`);
let elkTMHp = eo('span','zAhf');
text(`Parent:`);
ec('span');
let elVckdq = eo('a','PFqf',null,`href`,`${URLS.project(component.project, 'user-stories', component.userStory.parent)}`,`class`,`ml-2 bold pink-text`);
text(component.userStory.parent.title);
ec('a');
ec('div');
}let cndCs6w = component.userStory.sprint;
this.setState('stTyZve', cndCs6w);
if (cndCs6w) { 
let elTwNZj = eo('div','Jo8f',null,`class`,`m-t-1`);
let elQtrJX = eo('span','9Bef');
text(`Sprint:`);
ec('span');
let elPMuQX = eo('a','TE_f',null,`href`,`${URLS.project(component.project, 'sprints', component.userStory.sprint)}`,`class`,`ml-2 bold badge pink`);
text(component.userStory.sprint.name);
ec('a');
ec('div');
}let cndr19n = component.userStory.task;
this.setState('stcv2gd', cndr19n);
if (cndr19n) { 
let elbXIg9 = eo('div','RE_f',null,`class`,`m-t-1`);
let elGHmPW = eo('span','9D8f');
text(`Task:`);
ec('span');
let ely1g43 = eo('a','bpff',null,`href`,`${URLS.task(component.userStory.task)}`,`class`,`ml-2 bold badge green`);
text(component.userStory.task.title);
ec('a');
ec('div');
}let cndApKk = component.userStory.status;
this.setState('st7WODP', cndApKk);
if (cndApKk) { 
let elwt3fm = eo('div','FC4f',null,`class`,`m-t-1`);
let el6BiGQ = eo('span','n9lf');
text(`Status:`);
ec('span');
let elL7jsh = eo('span','vJvf',null,`class`,`badge ml-2 ${cls(taskStatus(component.userStory))}`);
text(trans(component.userStory.status));
ec('span');
ec('div');
}let el33_mE = eo('div',null,null,`class`,`m-t-1`);
let eliOqX7 = eo('span');
text(`As a:`);
ec('span');
let elqK8pJ = eo('strong',null,null,`class`,`ml-2`);
text(component.userStory.who);
ec('strong');
ec('div');
let elPYBnU = eo('div',null,null,`class`,`m-t-1`);
let elWd5_z = eo('strong');
text(`I want to:`);
ec('strong');
let cmpdFKx = this._lc('c68SWXAW2', {parent:component,parentTop:projectLayout,props:{content:component.userStory.what},attrs:{class:'ml-2'}});
ec('div');
let el2KFBK = eo('div',null,null,`class`,`m-t-1`);
let elhhF2y = eo('strong');
text(`So that:`);
ec('strong');
let cmpo1oO = this._lc('crS5hIkhS', {parent:component,parentTop:projectLayout,props:{content:component.userStory.why},attrs:{class:'ml-2'}});
ec('div');
let elNYHnV = eo('div',null,null,`class`,`m-t-1`);
let elOG_NU = eo('strong',null,null,`class`,`teal-text`);
text(`Scenario (Acceptance Criteria):`);
ec('strong');
let cmpZgel = this._lc('cHvNlSPPB', {parent:component,parentTop:projectLayout,props:{content:component.userStory.scenario}});
ec('div');
ec('div');
ec('div');
ec('div');
}});

                    this.isReadyToGo();
                }
        });