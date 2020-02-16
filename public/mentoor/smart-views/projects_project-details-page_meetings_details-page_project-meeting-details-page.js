_Component({
                selector: 'project-meeting-details-page',
                c: 'ProjectMeetingDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','meeting'],
                children: {cnJkQgToG:'markdown',cLXStfEdb:'comments',cbvTMk508:'project-layout'},
                render: function (component) {
                    let cmpV0Lt = this._lc('cbvTMk508', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let eleH3c9 = eo('h1',null,null,`class`,`heading`);
text(component.meeting.title);
ec('h1');
let elVnQ8T = eo('div',null,null,`class`,`row`);
let elvGMJ_ = eo('div',null,null,`class`,`col-9`);
let elEaBc1 = eo('div',null,null,`class`,`simple-card`);
let cmpW1S3 = this._lc('cnJkQgToG', {parent:component,parentTop:projectLayout,props:{content:component.meeting.mom}});
ec('div');
let cmpLds5 = this._lc('cLXStfEdb', {parent:component,parentTop:projectLayout,props:{project:component.project,comments:component.meeting.comments,typeId:component.meeting.id},attrs:{type:'meeting'}});
ec('div');
let elyw73Y = eo('div',null,null,`class`,`col`);
let elaquZO = eo('div',null,null,`class`,`card p-1`);
let elYgVz6 = eo('h3',null,null,`class`,`text-center m-b-1`);
text(`Meeting Details`);
ec('h3');
let elxFeND = eo('div',null,null,`class`,`m-b-1`);
let elBeO4s = eo('span',null,null,`class`,`mr-3`);
text(`Meeting Type`);
ec('span');
let elfNz45 = eo('strong');
text(component.meeting.type.capitalize());
ec('strong');
ec('div');
let elMZhh_ = eo('div',null,null,`class`,`m-b-1`);
let elq5Nwa = eo('span',null,null,`class`,`mr-3`);
text(`Meeting Date`);
ec('span');
let elPZASR = eo('strong');
text(component.meeting.date);
ec('strong');
ec('div');
ec('div');
let elZGGtC = eo('div',null,null,`class`,`card p-1`);
let elXfqQH = eo('h3',null,null,`class`,`text-center m-b-1`);
text(`Participants`);
ec('h3');
for (let i in component.meeting.members) {
let member = component.meeting.members[i]; 
 let ii_qfc = 'XfxzxgX' + i;
let elZGdBM = eo('div','SslyohdPwCej' + i+ii_qfc,null,`class`,`bold m-b-1`);
let elOgBiB = ev('img','G3kff'+ii_qfc,null, 'style', {width:'50px',height:'50px'},`src`,`${member.image}`,`class`,`rounded-circle m-r-1`,`title`,`${member.name}`,`alt`,`${member.name}`);
let elFBs8m = eo('string','aVUff'+ii_qfc);
text(member.name);
ec('string');
ec('div');
}
ec('div');
let cndN0eT = ! Is.empty(component.meeting.clientRepresentatives);
this.setState('stWqVm4', cndN0eT);
if (cndN0eT) { 
let elNHxzu = eo('div','vHRf',null,`class`,`card p-1`);
let eln7gIf = eo('h3','mKzf',null,`class`,`text-center`);
text(`Client Representatives`);
ec('h3');
for (let i in component.meeting.clientRepresentatives) {
let representatives = component.meeting.clientRepresentatives[i]; 
 let iiLOwm = 'NkPqWty' + i;
let elkMYXL = eo('div','fiNC8meCFxWR' + i+iiLOwm,null,`class`,`bold m-b-1`);
let elwLstN = ev('img','DHSff'+iiLOwm,null, 'style', {width:'50px',height:'50px'},`src`,`${representatives.image || FAVICON}`,`class`,`rounded-circle m-r-1`,`title`,`${representatives.name}`,`alt`,`${representatives.name}`);
let elZxAQ7 = eo('string','y5Zff'+iiLOwm);
text(representatives.name);
ec('string');
ec('div');
}
ec('div');
}let cndi4Ei = component.meeting.attachment;
this.setState('stWSaj7', cndi4Ei);
if (cndi4Ei) { 
let elZ5EdK = eo('div','tBvf',null,`class`,`card p-1 text-center`);
let el6amN_ = eo('h3','ehff',null,`class`,`m-b-1`);
text(`Attachment`);
ec('h3');
let cndH08H = isImage(component.meeting.attachment);
this.setState('stItTAQ', cndH08H);
let cndtGaX = !(cndH08H);
this.setState('stINCfK', cndtGaX);
if (cndH08H) { 
let eloUwv_ = eo('a','Emif',null,`href`,`${component.meeting.attachment}`,`target`,`_blank`);
let elrameA = ev('img','uUwf',null,`src`,`${component.meeting.attachment}`,`title`,`${component.meeting.title}`,`alt`,`${component.meeting.title}`);
ec('a');
}else { 
let elRSkqI = eo('a',null,null,`href`,`${component.meeting.attachment}`,`class`,`btn btn-cyan bold`,`target`,`_blank`);
let elddCfx = eo('i',null,null,`class`,`${fas('download') + ' icon'}`);
ec('i');
let elcYwSB = eo('span',null,null,`class`,`ml-1`);
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