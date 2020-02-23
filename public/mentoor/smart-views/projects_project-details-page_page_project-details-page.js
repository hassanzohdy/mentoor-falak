_Component({
                selector: 'project-details-page',
                c: 'ProjectDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','supervisors','participants'],
                children: {cxvaLk5_K:'markdown',cx9ACinJ1:'tasks-board',cRxT8yNeK:'project-layout'},
                render: function (component) {
                    let cmpeONY = this._lc('cRxT8yNeK', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el0P0SM = eo('div',null,null,`class`,`row`);
let elfoV5w = eo('div',null,null,`class`,`col-sm-3`);
let elltkLf = ev('img',null,null,`src`,`${component.project.image}`,`title`,`${component.project.name}`,`alt`,`${component.project.name}`);
let cndNkLm = ! Is.empty(component.project.tags);
this.setState('st8QlLU', cndNkLm);
if (cndNkLm) { 
let elIJ6D7 = eo('div','AkZf',null,`class`,`tags-list`);
let elxnMeW = eo('h4','Cztf',null,`class`,`bold m-t-2 m-b-1`);
text(`Technologies and Techniques used in this project`);
ec('h4');
for (let i in Array.chunk(component.project.tags, 2)) {
let tags = Array.chunk(component.project.tags, 2)[i]; 
 let iik96_ = 'pyYuykb' + i;
let elnaLsi = eo('div','tF9CG5jIaMvk' + i+iik96_,null,`class`,`row m-b-2 text-justify`);
for (let i in tags) {
let tag = tags[i]; 
 let iiraDC = 'qku6wS5' + i;
let el5w9fk = eo('span','Zx7kxdf57Muk' + i+iik96_+iiraDC,null,`class`,`tag col-sm-6`);
let elm2VBi = ev('img','QlDff'+iik96_+iiraDC,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let el85Vjd = eo('span','AXzff'+iik96_+iiraDC,null,`class`,`name`);
text(tag.name);
ec('span');
ec('span');
}
ec('div');
}
ec('div');
}ec('div');
let el2ZIjb = eo('div',null,null,`class`,`col`);
let el2FLjo = eo('h1');
text(component.project.name);
ec('h1');
let cmpcI6y = this._lc('cxvaLk5_K', {parent:component,parentTop:projectLayout,props:{content:component.project.about},attrs:{class:'m-t-2'}});
ec('div');
ec('div');
let cndrtfb = component.project.isMember;
this.setState('stYIcoX', cndrtfb);
if (cndrtfb) { 
let elCKx3T = eo('div','Wdlf',null,`class`,`m-t-3`);
let elOBChC = eo('h3','97nf');
text(`Tasks Board`);
ec('h3');
let cmpWUi9 = this._lc('cx9ACinJ1', {parent:component,parentTop:projectLayout,props:{project:component.project,tasks:component.project.tasks,supervisors:component.supervisors,participants:component.participants},state:'stYIcoX'});
ec('div');
}}});

                    this.isReadyToGo();
                }
        });