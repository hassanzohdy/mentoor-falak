_Component({
                selector: 'project-details-page',
                c: 'ProjectDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','supervisors','participants'],
                children: {cSddod8Xt:'markdown',c5FxbfGUy:'tasks-board',ckYlQNsAB:'project-layout'},
                render: function (component) {
                    let cmp7Uts = this._lc('ckYlQNsAB', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elbliv5 = eo('div',null,null,`class`,`row`);
let ellWHuV = eo('div',null,null,`class`,`col-sm-3`);
let el2HLHq = ev('img',null,null,`src`,`${component.project.image}`,`title`,`${component.project.name}`,`alt`,`${component.project.name}`);
let cndAAnu = ! Is.empty(component.project.tags);
this.setState('st8VRxS', cndAAnu);
if (cndAAnu) { 
let eljDOrl = eo('div','tI2f',null,`class`,`tags-list`);
let elHPY6D = eo('h4','0dKf',null,`class`,`bold m-t-2 m-b-1`);
text(`Technologies and Techniques used in this project`);
ec('h4');
for (let i in Array.chunk(component.project.tags, 2)) {
let tags = Array.chunk(component.project.tags, 2)[i]; 
 let iiDS9M = 'YuFCbTn' + i;
let el9ls2R = eo('div','VSmxwbdxa_Bl' + i+iiDS9M,null,`class`,`row m-b-2 text-justify`);
for (let i in tags) {
let tag = tags[i]; 
 let iisyT7 = 'O5z1yTx' + i;
let elypEOe = eo('span','PhTdEtiUV2GG' + i+iiDS9M+iisyT7,null,`class`,`tag col-sm-6`);
let elw5oZd = ev('img','x9Fff'+iiDS9M+iisyT7,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let eliSYSZ = eo('span','HXhff'+iiDS9M+iisyT7,null,`class`,`name`);
text(tag.name);
ec('span');
ec('span');
}
ec('div');
}
ec('div');
}ec('div');
let elQWNll = eo('div',null,null,`class`,`col`);
let elu0l2J = eo('h1');
text(component.project.name);
ec('h1');
let cmpyAz4 = this._lc('cSddod8Xt', {parent:component,parentTop:projectLayout,props:{content:component.project.about},attrs:{class:'m-t-2'}});
ec('div');
ec('div');
let cndcRMK = component.project.isMember;
this.setState('story_P', cndcRMK);
if (cndcRMK) { 
let elveaTZ = eo('div','d8mf',null,`class`,`m-t-3`);
let el0H_js = eo('h3','6aCf');
text(`Tasks Board`);
ec('h3');
let cmp7T7E = this._lc('c5FxbfGUy', {parent:component,parentTop:projectLayout,props:{project:component.project,tasks:component.project.tasks,supervisors:component.supervisors,participants:component.participants},state:'story_P'});
ec('div');
}}});

                    this.isReadyToGo();
                }
        });