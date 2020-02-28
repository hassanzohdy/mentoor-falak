_Component({
                selector: 'project-details-page',
                c: 'ProjectDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','supervisors','participants'],
                children: {c4EqQX1aN:'markdown',cA6yJewZK:'tasks-board',cBru1Dbis:'project-layout'},
                render: function (component) {
                    let cmpnxja = this._lc('cBru1Dbis', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elRMarG = eo('div',null,null,`class`,`row`);
let eleYaPG = eo('div',null,null,`class`,`col-sm-3`);
let elRyXxL = ev('img',null,null,`src`,`${component.project.image}`,`title`,`${component.project.name}`,`alt`,`${component.project.name}`);
let cndkw19 = ! Is.empty(component.project.tags);
this.setState('std8EPi', cndkw19);
if (cndkw19) { 
let elG75Ux = eo('div','Gtuf',null,`class`,`tags-list`);
let elPsh0h = eo('h4','L5af',null,`class`,`bold m-t-2 m-b-1`);
text(`Technologies and Techniques used in this project`);
ec('h4');
for (let i in Array.chunk(component.project.tags, 2)) {
let tags = Array.chunk(component.project.tags, 2)[i]; 
 let ii_JWP = 'os3TZVT' + i;
let elSarX5 = eo('div','l38B85FS5INO' + i+ii_JWP,null,`class`,`row m-b-2 text-justify`);
for (let i in tags) {
let tag = tags[i]; 
 let iigYsf = 'wEZS7Vj' + i;
let el8J5Hk = eo('span','bVyWN6oQ1IXi' + i+ii_JWP+iigYsf,null,`class`,`tag col-sm-6`);
let elPtj5T = ev('img','BLmff'+ii_JWP+iigYsf,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elhN9Nj = eo('span','vIBff'+ii_JWP+iigYsf,null,`class`,`name`);
text(tag.name);
ec('span');
ec('span');
}
ec('div');
}
ec('div');
}ec('div');
let els0val = eo('div',null,null,`class`,`col`);
let el7xWGM = eo('h1');
text(component.project.name);
ec('h1');
let cmp99Sy = this._lc('c4EqQX1aN', {parent:component,parentTop:projectLayout,props:{content:component.project.about},attrs:{class:'m-t-2'}});
ec('div');
ec('div');
let cndZG_j = component.project.isMember;
this.setState('st9dpw4', cndZG_j);
if (cndZG_j) { 
let ellfJgi = eo('div','eQIf',null,`class`,`m-t-3`);
let elvLGcZ = eo('h3','y73f');
text(`Tasks Board`);
ec('h3');
let cmpOncd = this._lc('cA6yJewZK', {parent:component,parentTop:projectLayout,props:{project:component.project,tasks:component.project.tasks,supervisors:component.supervisors,participants:component.participants},state:'st9dpw4'});
ec('div');
}}});

                    this.isReadyToGo();
                }
        });