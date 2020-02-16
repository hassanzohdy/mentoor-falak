_Component({
                selector: 'project-details-page',
                c: 'ProjectDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','supervisors','participants'],
                children: {ckGnbrfSp:'markdown',c20cA8LVo:'tasks-board',cxS7195hZ:'project-layout'},
                render: function (component) {
                    let cmpkShV = this._lc('cxS7195hZ', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elHgOjx = eo('div',null,null,`class`,`row`);
let elOGRjY = eo('div',null,null,`class`,`col-sm-3`);
let elToF9g = ev('img',null,null,`src`,`${component.project.image}`,`title`,`${component.project.name}`,`alt`,`${component.project.name}`);
let cndRgIN = ! Is.empty(component.project.tags);
this.setState('stR_hTS', cndRgIN);
if (cndRgIN) { 
let el7F0Rc = eo('div','h4wf',null,`class`,`tags-list`);
let elA0yvC = eo('h4','0RRf',null,`class`,`bold m-t-2 m-b-1`);
text(`Technologies and Techniques used in this project`);
ec('h4');
for (let i in Array.chunk(component.project.tags, 2)) {
let tags = Array.chunk(component.project.tags, 2)[i]; 
 let iiFEzP = '4n_Uj4j' + i;
let elPahH7 = eo('div','xR0zONWMsfk8' + i+iiFEzP,null,`class`,`row m-b-2 text-justify`);
for (let i in tags) {
let tag = tags[i]; 
 let iiN9G3 = '25B9p3g' + i;
let elICsYg = eo('span','MSkQdSB3P2iM' + i+iiFEzP+iiN9G3,null,`class`,`tag col-sm-6`);
let elvqE_S = ev('img','Vr7ff'+iiFEzP+iiN9G3,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elJWVD4 = eo('span','fbIff'+iiFEzP+iiN9G3,null,`class`,`name`);
text(tag.name);
ec('span');
ec('span');
}
ec('div');
}
ec('div');
}ec('div');
let elIh5Xt = eo('div',null,null,`class`,`col`);
let elHo74l = eo('h1');
text(component.project.name);
ec('h1');
let cmpBxN0 = this._lc('ckGnbrfSp', {parent:component,parentTop:projectLayout,props:{content:component.project.about},attrs:{class:'m-t-2'}});
ec('div');
ec('div');
let cndw79m = component.project.isMember;
this.setState('stFcrdu', cndw79m);
if (cndw79m) { 
let elbRo4y = eo('div','n7Pf',null,`class`,`m-t-3`);
let elsLrVL = eo('h3','Hdif');
text(`Tasks Board`);
ec('h3');
let cmpon5M = this._lc('c20cA8LVo', {parent:component,parentTop:projectLayout,props:{project:component.project,tasks:component.project.tasks,supervisors:component.supervisors,participants:component.participants},state:'stFcrdu'});
ec('div');
}}});

                    this.isReadyToGo();
                }
        });