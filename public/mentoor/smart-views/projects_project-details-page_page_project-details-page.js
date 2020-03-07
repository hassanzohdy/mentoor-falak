_Component({
                selector: 'project-details-page',
                c: 'ProjectDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','supervisors','participants'],
                children: {cKT81FlRQ:'markdown',csCGlOr2I:'tasks-board',c1xpWqtW0:'project-layout'},
                render: function (component) {
                    let cmpvRmy = this._lc('c1xpWqtW0', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elW8Lx9 = eo('div',null,null,`class`,`row`);
let elY3SK7 = eo('div',null,null,`class`,`col-sm-3`);
let elRBQZp = ev('img',null,null,`src`,`${component.project.image}`,`title`,`${component.project.name}`,`alt`,`${component.project.name}`);
let cndUVFs = ! Is.empty(component.project.tags);
this.setState('stUtUjw', cndUVFs);
if (cndUVFs) { 
let el6v6bS = eo('div','r8Qf',null,`class`,`tags-list`);
let elX2FJ1 = eo('h4','UKvf',null,`class`,`bold m-t-2 m-b-1`);
text(`Technologies and Techniques used in this project`);
ec('h4');
for (let i in Array.chunk(component.project.tags, 2)) {
let tags = Array.chunk(component.project.tags, 2)[i]; 
 let ii9H4r = 'ZCocrZX' + i;
let elgWWKx = eo('div','OT3kzySxiU5Y' + i+ii9H4r,null,`class`,`row m-b-2 text-justify`);
for (let i in tags) {
let tag = tags[i]; 
 let iiYkXk = 'JB65dUz' + i;
let elkAv0u = eo('span','rvlfLmnlasfc' + i+ii9H4r+iiYkXk,null,`class`,`tag col-sm-6`);
let el1LpMX = ev('img','AZeff'+ii9H4r+iiYkXk,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elRkF4Z = eo('span','AApff'+ii9H4r+iiYkXk,null,`class`,`name`);
text(tag.name);
ec('span');
ec('span');
}
ec('div');
}
ec('div');
}ec('div');
let elYntV9 = eo('div',null,null,`class`,`col`);
let elXCgJU = eo('h1');
text(component.project.name);
ec('h1');
let cmpQDjI = this._lc('cKT81FlRQ', {parent:component,parentTop:projectLayout,props:{content:component.project.about},attrs:{class:'m-t-2'}});
ec('div');
ec('div');
let cndCDX6 = component.project.isMember;
this.setState('stgxNFZ', cndCDX6);
if (cndCDX6) { 
let elWeTWj = eo('div','M6Bf',null,`class`,`m-t-3`);
let elihbuJ = eo('h3','5AGf');
text(`Tasks Board`);
ec('h3');
let cmp086U = this._lc('csCGlOr2I', {parent:component,parentTop:projectLayout,props:{project:component.project,tasks:component.project.tasks,supervisors:component.supervisors,participants:component.participants},state:'stgxNFZ'});
ec('div');
}}});

                    this.isReadyToGo();
                }
        });