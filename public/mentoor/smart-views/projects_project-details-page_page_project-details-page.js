_Component({
                selector: 'project-details-page',
                c: 'ProjectDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','supervisors','participants'],
                children: {ckg_8gUhj:'markdown',cQ8d4yITS:'tasks-board',cYvVOMGpl:'project-layout'},
                render: function (component) {
                    let cmp2U6T = this._lc('cYvVOMGpl', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elDpaKk = eo('div',null,null,`class`,`row`);
let elSUFVs = eo('div',null,null,`class`,`col-sm-3`);
let elzu3Xb = ev('img',null,null,`src`,`${component.project.image}`,`title`,`${component.project.name}`,`alt`,`${component.project.name}`);
let cnd18bR = ! Is.empty(component.project.tags);
this.setState('stgXy4t', cnd18bR);
if (cnd18bR) { 
let elC5hLY = eo('div','V5pf',null,`class`,`tags-list`);
let eldEWX5 = eo('h4','TvEf',null,`class`,`bold m-t-2 m-b-1`);
text(`Technologies and Techniques used in this project`);
ec('h4');
for (let i in Array.chunk(component.project.tags, 2)) {
let tags = Array.chunk(component.project.tags, 2)[i]; 
 let iiiGvE = 'xy_BQ3x' + i;
let elKUpYL = eo('div','yL3F7hubp33Z' + i+iiiGvE,null,`class`,`row m-b-2 text-justify`);
for (let i in tags) {
let tag = tags[i]; 
 let iiEbI6 = 'B8ci8ws' + i;
let elwUPq4 = eo('span','owujDiKE6wLg' + i+iiiGvE+iiEbI6,null,`class`,`tag col-sm-6`);
let elRI2BI = ev('img','D1Cff'+iiiGvE+iiEbI6,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elvvjSY = eo('span','WVEff'+iiiGvE+iiEbI6,null,`class`,`name`);
text(tag.name);
ec('span');
ec('span');
}
ec('div');
}
ec('div');
}ec('div');
let elrgBJn = eo('div',null,null,`class`,`col`);
let elKKDA6 = eo('h1');
text(component.project.name);
ec('h1');
let cmp_0iM = this._lc('ckg_8gUhj', {parent:component,parentTop:projectLayout,props:{content:component.project.about},attrs:{class:'m-t-2'}});
ec('div');
ec('div');
let cndEGPI = component.project.isMember;
this.setState('styKK3b', cndEGPI);
if (cndEGPI) { 
let elaO_pM = eo('div','MvFf',null,`class`,`m-t-3`);
let elsSUNk = eo('h3','Z1wf');
text(`Tasks Board`);
ec('h3');
let cmpA0AJ = this._lc('cQ8d4yITS', {parent:component,parentTop:projectLayout,props:{project:component.project,tasks:component.project.tasks,supervisors:component.supervisors,participants:component.participants},state:'styKK3b'});
ec('div');
}}});

                    this.isReadyToGo();
                }
        });