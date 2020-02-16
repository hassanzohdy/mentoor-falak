_Component({
                selector: 'project-user-story-details-page',
                c: 'ProjectUserStoryDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','userStories','userStory'],
                children: {cYOOBDijP:'user-stories-board',cG7N7bqv8:'markdown',cqvuKQOLe:'markdown',cStwsCiag:'markdown',c6zFaq57J:'project-layout'},
                render: function (component) {
                    let cmpU78w = this._lc('c6zFaq57J', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elRMgQ9 = eo('div',null,null,`class`,`row`);
let cndIiLy = ! Is.empty(component.userStories);
this.setState('ste4I3P', cndIiLy);
if (cndIiLy) { 
let elvjKXY = eo('div','OYEf',null,`class`,`col-sm-9`);
let cmpeoqr = this._lc('cYOOBDijP', {parent:component,parentTop:projectLayout,props:{userStories:component.userStories,project:component.project},events:{onchange:function(e) {let $el = this; component.userStories = e}},state:'ste4I3P'});
ec('div');
}let ely8I2R = eo('div',null,null,`class`,`col-sm`);
let elZ8dUE = eo('div',null,null,`class`,`simple-card`);
let eluw_E_ = eo('h3');
text(component.userStory.title);
ec('h3');
let elkkChi = eo('div',null,null,`class`,`m-t-1`);
let el5my7f = eo('span');
text(`Type:`);
ec('span');
let el6c3LX = eo('strong',null,null,`class`,`ml-2`);
text(component.userStory.type);
ec('strong');
ec('div');
let elm6wFr = eo('div',null,null,`class`,`m-t-1`);
let el_kjqB = eo('span');
text(`Priority:`);
ec('span');
let elqQzZv = eo('strong',null,null,`class`,`ml-2`);
text(component.userStory.priority);
ec('strong');
ec('div');
let cnd43af = component.userStory.parent;
this.setState('stQoU7B', cnd43af);
if (cnd43af) { 
let elAC653 = eo('div','02Cf',null,`class`,`m-t-1`);
let elkYcoR = eo('span','0ZRf');
text(`Parent:`);
ec('span');
let elNcNO3 = eo('a','IhLf',null,`href`,`${URLS.project(component.project, 'user-stories', component.userStory.parent)}`,`class`,`ml-2 bold pink-text`);
text(component.userStory.parent.title);
ec('a');
ec('div');
}let cndji9L = component.userStory.sprint;
this.setState('st9cmGl', cndji9L);
if (cndji9L) { 
let elsUt2k = eo('div','3TBf',null,`class`,`m-t-1`);
let el3QxOB = eo('span','2vJf');
text(`Sprint:`);
ec('span');
let ely1GCV = eo('a','SKaf',null,`href`,`${URLS.project(component.project, 'sprints', component.userStory.sprint)}`,`class`,`ml-2 bold badge pink`);
text(component.userStory.sprint.name);
ec('a');
ec('div');
}let cndUz_O = component.userStory.task;
this.setState('stikZ_w', cndUz_O);
if (cndUz_O) { 
let eltqxEF = eo('div','MeMf',null,`class`,`m-t-1`);
let elqcvci = eo('span','fCsf');
text(`Task:`);
ec('span');
let elDVsxC = eo('a','JDbf',null,`href`,`${URLS.task(component.userStory.task)}`,`class`,`ml-2 bold badge green`);
text(component.userStory.task.title);
ec('a');
ec('div');
}let cndb8y6 = component.userStory.status;
this.setState('stdI27h', cndb8y6);
if (cndb8y6) { 
let elk4qWE = eo('div','Y1of',null,`class`,`m-t-1`);
let elal_HJ = eo('span','BY7f');
text(`Status:`);
ec('span');
let elRPuaE = eo('span','qUlf',null,`class`,`badge ml-2`);
elRPuaE.cls = taskStatus(component.userStory);

            for (let className in elRPuaE.cls) {
                elRPuaE.classList.toggle(className, elRPuaE.cls[className]);
            }  
            text(trans(component.userStory.status));
ec('span');
ec('div');
}let elyb9p4 = eo('div',null,null,`class`,`m-t-1`);
let elnc8ez = eo('span');
text(`As a:`);
ec('span');
let el8_kWy = eo('strong',null,null,`class`,`ml-2`);
text(component.userStory.who);
ec('strong');
ec('div');
let eldKV19 = eo('div',null,null,`class`,`m-t-1`);
let el3d0Yl = eo('strong');
text(`I want to:`);
ec('strong');
let cmp2bbL = this._lc('cG7N7bqv8', {parent:component,parentTop:projectLayout,props:{content:component.userStory.what},attrs:{class:'ml-2'}});
ec('div');
let elLiahW = eo('div',null,null,`class`,`m-t-1`);
let elrrr5j = eo('strong');
text(`So that:`);
ec('strong');
let cmpnIP8 = this._lc('cqvuKQOLe', {parent:component,parentTop:projectLayout,props:{content:component.userStory.why},attrs:{class:'ml-2'}});
ec('div');
let el_yJ8_ = eo('div',null,null,`class`,`m-t-1`);
let elasRYT = eo('strong',null,null,`class`,`teal-text`);
text(`Scenario (Acceptance Criteria):`);
ec('strong');
let cmpa9W_ = this._lc('cStwsCiag', {parent:component,parentTop:projectLayout,props:{content:component.userStory.scenario}});
ec('div');
ec('div');
ec('div');
ec('div');
}});

                    this.isReadyToGo();
                }
        });