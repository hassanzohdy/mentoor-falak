_Component({
                selector: 'project-meeting-details-page',
                c: 'ProjectMeetingDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','meeting'],
                children: {cnrIcH_rj:'markdown',cEHTzuo6b:'comments',clrcl4gTj:'project-layout'},
                render: function (component) {
                    let cmpcIJD = this._lc('clrcl4gTj', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elFqHKT = eo('h1',null,null,`class`,`heading`);
text(component.meeting.title);
ec('h1');
let elt9Q3T = eo('div',null,null,`class`,`row`);
let el5iGmv = eo('div',null,null,`class`,`col-9`);
let el5prbi = eo('div',null,null,`class`,`simple-card`);
let cmpgkGF = this._lc('cnrIcH_rj', {parent:component,parentTop:projectLayout,props:{content:component.meeting.mom}});
ec('div');
let cmpDdkY = this._lc('cEHTzuo6b', {parent:component,parentTop:projectLayout,props:{project:component.project,comments:component.meeting.comments,typeId:component.meeting.id},attrs:{type:'meeting'}});
ec('div');
let elElAxI = eo('div',null,null,`class`,`col`);
let elDAvY4 = eo('div',null,null,`class`,`card p-1`);
let elPOnpa = eo('h3',null,null,`class`,`text-center m-b-1`);
text(`Meeting Details`);
ec('h3');
let el9cLaq = eo('div',null,null,`class`,`m-b-1`);
let el1l9Fz = eo('span',null,null,`class`,`mr-3`);
text(`Meeting Type`);
ec('span');
let elRrtVo = eo('strong');
text(component.meeting.type.capitalize());
ec('strong');
ec('div');
let elhYjbC = eo('div',null,null,`class`,`m-b-1`);
let elYT6kj = eo('span',null,null,`class`,`mr-3`);
text(`Meeting Date`);
ec('span');
let elAmDlL = eo('strong');
text(component.meeting.date);
ec('strong');
ec('div');
ec('div');
let elyk2s5 = eo('div',null,null,`class`,`card p-1`);
let eliWkCR = eo('h3',null,null,`class`,`text-center m-b-1`);
text(`Participants`);
ec('h3');
for (let i in component.meeting.members) {
let member = component.meeting.members[i]; 
 let iirC9K = 'JOsuKMZ' + i;
let elPd63S = eo('div','VqQ9W0g3p0FW' + i+iirC9K,null,`class`,`bold m-b-1`);
let elyPQMH = ev('img','Pvgff'+iirC9K,null, 'style', {width:'50px',height:'50px'},`src`,`${member.image}`,`class`,`rounded-circle m-r-1`,`title`,`${member.name}`,`alt`,`${member.name}`);
let elj2Tcs = eo('string','mQ5ff'+iirC9K);
text(member.name);
ec('string');
ec('div');
}
ec('div');
let cndflzA = ! Is.empty(component.meeting.clientRepresentatives);
this.setState('staWcmW', cndflzA);
if (cndflzA) { 
let elsvwBd = eo('div','YbTf',null,`class`,`card p-1`);
let eliCn8p = eo('h3','PJIf',null,`class`,`text-center`);
text(`Client Representatives`);
ec('h3');
for (let i in component.meeting.clientRepresentatives) {
let representatives = component.meeting.clientRepresentatives[i]; 
 let iiN7m0 = 'rfNtyTl' + i;
let elLojGE = eo('div','LMKii16ySS63' + i+iiN7m0,null,`class`,`bold m-b-1`);
let els2VsL = ev('img','370ff'+iiN7m0,null, 'style', {width:'50px',height:'50px'},`src`,`${representatives.image || FAVICON}`,`class`,`rounded-circle m-r-1`,`title`,`${representatives.name}`,`alt`,`${representatives.name}`);
let eltbM7e = eo('string','L_Mff'+iiN7m0);
text(representatives.name);
ec('string');
ec('div');
}
ec('div');
}let cndq2VG = component.meeting.attachment;
this.setState('stdeySr', cndq2VG);
if (cndq2VG) { 
let el9zTwe = eo('div','pdyf',null,`class`,`card p-1 text-center`);
let elYY90a = eo('h3','NUFf',null,`class`,`m-b-1`);
text(`Attachment`);
ec('h3');
let cndruiF = isImage(component.meeting.attachment);
this.setState('stJ4d5P', cndruiF);
let cndVcF2 = !(cndruiF);
this.setState('st4BQVo', cndVcF2);
if (cndruiF) { 
let elkvp64 = eo('a','0PBf',null,`href`,`${component.meeting.attachment}`,`target`,`_blank`);
let elcWeue = ev('img','Hpdf',null,`src`,`${component.meeting.attachment}`,`title`,`${component.meeting.title}`,`alt`,`${component.meeting.title}`);
ec('a');
}else { 
let elnMZH5 = eo('a',null,null,`href`,`${component.meeting.attachment}`,`class`,`btn btn-cyan bold`,`target`,`_blank`);
let elzapHW = eo('i',null,null,`class`,`${fas('download') + ' icon'}`);
ec('i');
let elVEtQK = eo('span',null,null,`class`,`ml-1`);
text(`Download`);
ec('span');
ec('a');
}ec('div');
}ec('div');
ec('div');
}});

                    this.isReadyToGo();
                }
        });