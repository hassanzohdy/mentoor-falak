_Component({
                selector: 'project-details-page',
                c: 'ProjectDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','supervisors','participants'],
                children: {coY_jSEfr:'markdown',cdGoV_FII:'tasks-board',c9D1p0H7O:'project-layout'},
                render: function (component) {
                    let cmppDa9 = this._lc('c9D1p0H7O', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elC8WoD = eo('div',null,null,`class`,`row`);
let el9XgSq = eo('div',null,null,`class`,`col-sm-3`);
let el7qANW = ev('img',null,null,`src`,`${component.project.image}`,`title`,`${component.project.name}`,`alt`,`${component.project.name}`);
let cndVbE6 = ! Is.empty(component.project.tags);
this.setState('stiZOr9', cndVbE6);
if (cndVbE6) { 
let el_aha8 = eo('div','h5kf',null,`class`,`tags-list`);
let elatCVG = eo('h4','Zd2f',null,`class`,`bold m-t-2 m-b-1`);
text(`Technologies and Techniques used in this project`);
ec('h4');
for (let i in Array.chunk(component.project.tags, 2)) {
let tags = Array.chunk(component.project.tags, 2)[i]; 
 let iiQ0DD = 'AOVXj1d' + i;
let elB_Wnj = eo('div','AjphcQLRS5OA' + i+iiQ0DD,null,`class`,`row m-b-2 text-justify`);
for (let i in tags) {
let tag = tags[i]; 
 let iiyULP = 'fkS5fNE' + i;
let elVbQ1E = eo('span','orNvEsiVD4Sz' + i+iiQ0DD+iiyULP,null,`class`,`tag col-sm-6`);
let elQe52y = ev('img','qbzff'+iiQ0DD+iiyULP,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let el5M7qp = eo('span','I1gff'+iiQ0DD+iiyULP,null,`class`,`name`);
text(tag.name);
ec('span');
ec('span');
}
ec('div');
}
ec('div');
}ec('div');
let elqkqMl = eo('div',null,null,`class`,`col`);
let elE0_zO = eo('h1');
text(component.project.name);
ec('h1');
let cmpidbn = this._lc('coY_jSEfr', {parent:component,parentTop:projectLayout,props:{content:component.project.about},attrs:{class:'m-t-2'}});
ec('div');
ec('div');
let cndJBq_ = component.project.isMember;
this.setState('st2QBDS', cndJBq_);
if (cndJBq_) { 
let elJgLIm = eo('div','mTaf',null,`class`,`m-t-3`);
let el4t16Q = eo('h3','mzpf');
text(`Tasks Board`);
ec('h3');
let cmpkYQd = this._lc('cdGoV_FII', {parent:component,parentTop:projectLayout,props:{project:component.project,tasks:component.project.tasks,supervisors:component.supervisors,participants:component.participants},state:'st2QBDS'});
ec('div');
}}});

                    this.isReadyToGo();
                }
        });