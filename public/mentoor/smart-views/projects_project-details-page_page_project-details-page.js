_Component({
                selector: 'project-details-page',
                c: 'ProjectDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','supervisors','participants'],
                children: {cGZ1ODyXe:'markdown',crItvDrvp:'tasks-board',c2a7dOLOy:'project-layout'},
                render: function (component) {
                    let cmpDkX0 = this._lc('c2a7dOLOy', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elHSH15 = eo('div',null,null,`class`,`row`);
let elsRDtG = eo('div',null,null,`class`,`col-sm-3`);
let el9Ay4h = ev('img',null,null,`src`,`${component.project.image}`,`title`,`${component.project.name}`,`alt`,`${component.project.name}`);
let cndXmhL = ! Is.empty(component.project.tags);
this.setState('stty1L9', cndXmhL);
if (cndXmhL) { 
let elsredO = eo('div','vrPf',null,`class`,`tags-list`);
let elrnEUJ = eo('h4','w4Wf',null,`class`,`bold m-t-2 m-b-1`);
text(`Technologies and Techniques used in this project`);
ec('h4');
for (let i in Array.chunk(component.project.tags, 2)) {
let tags = Array.chunk(component.project.tags, 2)[i]; 
 let iiZWPN = 'Vy5aOAG' + i;
let elx9qbZ = eo('div','FTUwETE1Ss4X' + i+iiZWPN,null,`class`,`row m-b-2 text-justify`);
for (let i in tags) {
let tag = tags[i]; 
 let ii8NCH = 'Ns3jyQf' + i;
let elodchB = eo('span','xZJixpNZxL02' + i+iiZWPN+ii8NCH,null,`class`,`tag col-sm-6`);
let elFh9mY = ev('img','q59ff'+iiZWPN+ii8NCH,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elqnqV0 = eo('span','CuJff'+iiZWPN+ii8NCH,null,`class`,`name`);
text(tag.name);
ec('span');
ec('span');
}
ec('div');
}
ec('div');
}ec('div');
let el18ZBe = eo('div',null,null,`class`,`col`);
let ely_vjH = eo('h1');
text(component.project.name);
ec('h1');
let cmprNKZ = this._lc('cGZ1ODyXe', {parent:component,parentTop:projectLayout,props:{content:component.project.about},attrs:{class:'m-t-2'}});
ec('div');
ec('div');
let cndiWlA = component.project.isMember;
this.setState('st12ZuM', cndiWlA);
if (cndiWlA) { 
let elgDvSe = eo('div','lPff',null,`class`,`m-t-3`);
let elPXZXq = eo('h3','7TLf');
text(`Tasks Board`);
ec('h3');
let cmpDlha = this._lc('crItvDrvp', {parent:component,parentTop:projectLayout,props:{project:component.project,tasks:component.project.tasks,supervisors:component.supervisors,participants:component.participants},state:'st12ZuM'});
ec('div');
}}});

                    this.isReadyToGo();
                }
        });