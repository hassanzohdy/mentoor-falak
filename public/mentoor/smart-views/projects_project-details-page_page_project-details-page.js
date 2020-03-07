_Component({
                selector: 'project-details-page',
                c: 'ProjectDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','supervisors','participants'],
                children: {cDhDTJQiN:'markdown',cvbhjcayo:'tasks-board',cPajT4zY6:'project-layout'},
                render: function (component) {
                    let cmp8dcW = this._lc('cPajT4zY6', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elW8KjN = eo('div',null,null,`class`,`row`);
let elHaA0k = eo('div',null,null,`class`,`col-sm-3`);
let elQAmwt = ev('img',null,null,`src`,`${component.project.image}`,`title`,`${component.project.name}`,`alt`,`${component.project.name}`);
let cndw4R6 = ! Is.empty(component.project.tags);
this.setState('stzzuTu', cndw4R6);
if (cndw4R6) { 
let ely6nkG = eo('div','JtUf',null,`class`,`tags-list`);
let elbUmAI = eo('h4','IS8f',null,`class`,`bold m-t-2 m-b-1`);
text(`Technologies and Techniques used in this project`);
ec('h4');
for (let i in Array.chunk(component.project.tags, 2)) {
let tags = Array.chunk(component.project.tags, 2)[i]; 
 let iiYmQI = 'GNsJM2F' + i;
let elEddd7 = eo('div','yUSeHtXzeSvC' + i+iiYmQI,null,`class`,`row m-b-2 text-justify`);
for (let i in tags) {
let tag = tags[i]; 
 let iiZNLi = 'tYLJMEk' + i;
let elh4tih = eo('span','nlhnLqlbDoi8' + i+iiYmQI+iiZNLi,null,`class`,`tag col-sm-6`);
let elybZow = ev('img','BIoff'+iiYmQI+iiZNLi,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elsjGJA = eo('span','34Yff'+iiYmQI+iiZNLi,null,`class`,`name`);
text(tag.name);
ec('span');
ec('span');
}
ec('div');
}
ec('div');
}ec('div');
let elLPyYz = eo('div',null,null,`class`,`col`);
let elUTmbc = eo('h1');
text(component.project.name);
ec('h1');
let cmpcBAK = this._lc('cDhDTJQiN', {parent:component,parentTop:projectLayout,props:{content:component.project.about},attrs:{class:'m-t-2'}});
ec('div');
ec('div');
let cndHhxN = component.project.isMember;
this.setState('st5avjx', cndHhxN);
if (cndHhxN) { 
let eldZWSA = eo('div','GW8f',null,`class`,`m-t-3`);
let el3xhIC = eo('h3','2Daf');
text(`Tasks Board`);
ec('h3');
let cmprZdy = this._lc('cvbhjcayo', {parent:component,parentTop:projectLayout,props:{project:component.project,tasks:component.project.tasks,supervisors:component.supervisors,participants:component.participants},state:'st5avjx'});
ec('div');
}}});

                    this.isReadyToGo();
                }
        });