_Component({
                selector: 'project-meeting-details-page',
                c: 'ProjectMeetingDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','meeting'],
                children: {cTz8kiEjO:'markdown',cQ9Ua1QNc:'comments',c7OjTKTy0:'project-layout'},
                render: function (component) {
                    let cmpNTOB = this._lc('c7OjTKTy0', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elqOc0m = eo('h1',null,null,`class`,`heading`);
text(component.meeting.title);
ec('h1');
let elhVo_a = eo('div',null,null,`class`,`row`);
let elYlqEq = eo('div',null,null,`class`,`col-9`);
let elSHSxt = eo('div',null,null,`class`,`simple-card`);
let cmpdcgF = this._lc('cTz8kiEjO', {parent:component,parentTop:projectLayout,props:{content:component.meeting.mom}});
ec('div');
let cmpZoAl = this._lc('cQ9Ua1QNc', {parent:component,parentTop:projectLayout,props:{project:component.project,comments:component.meeting.comments,typeId:component.meeting.id},attrs:{type:'meeting'}});
ec('div');
let el5lGF5 = eo('div',null,null,`class`,`col`);
let el1iRYR = eo('div',null,null,`class`,`card p-1`);
let el9w1cE = eo('h3',null,null,`class`,`text-center m-b-1`);
text(`Meeting Details`);
ec('h3');
let els7qc3 = eo('div',null,null,`class`,`m-b-1`);
let elwp9na = eo('span',null,null,`class`,`mr-3`);
text(`Meeting Type`);
ec('span');
let elqiUpH = eo('strong');
text(component.meeting.type.capitalize());
ec('strong');
ec('div');
let eleLyts = eo('div',null,null,`class`,`m-b-1`);
let elaVIjZ = eo('span',null,null,`class`,`mr-3`);
text(`Meeting Date`);
ec('span');
let elt09q6 = eo('strong');
text(component.meeting.date);
ec('strong');
ec('div');
ec('div');
let elsA6NB = eo('div',null,null,`class`,`card p-1`);
let elTKWFU = eo('h3',null,null,`class`,`text-center m-b-1`);
text(`Participants`);
ec('h3');
for (let i in component.meeting.members) {
let member = component.meeting.members[i]; 
 let iiHpSQ = 'l7FesPE' + i;
let elhecFn = eo('div','ho727hLR1YYI' + i+iiHpSQ,null,`class`,`bold m-b-1`);
let elIXXzq = ev('img','ypqff'+iiHpSQ,null, 'style', {width:'50px',height:'50px'},`src`,`${member.image}`,`class`,`rounded-circle m-r-1`,`title`,`${member.name}`,`alt`,`${member.name}`);
let el3KwmI = eo('string','gypff'+iiHpSQ);
text(member.name);
ec('string');
ec('div');
}
ec('div');
let cndyg9e = ! Is.empty(component.meeting.clientRepresentatives);
this.setState('sty4uSM', cndyg9e);
if (cndyg9e) { 
let elwpl_o = eo('div','Uxvf',null,`class`,`card p-1`);
let elRLgvM = eo('h3','S5Uf',null,`class`,`text-center`);
text(`Client Representatives`);
ec('h3');
for (let i in component.meeting.clientRepresentatives) {
let representatives = component.meeting.clientRepresentatives[i]; 
 let iiIVWG = '17i_1EJ' + i;
let elptOwx = eo('div','HU1iCUGmKega' + i+iiIVWG,null,`class`,`bold m-b-1`);
let el47uEE = ev('img','RRJff'+iiIVWG,null, 'style', {width:'50px',height:'50px'},`src`,`${representatives.image || FAVICON}`,`class`,`rounded-circle m-r-1`,`title`,`${representatives.name}`,`alt`,`${representatives.name}`);
let elevTG8 = eo('string','MFnff'+iiIVWG);
text(representatives.name);
ec('string');
ec('div');
}
ec('div');
}let cndsMJ1 = component.meeting.attachment;
this.setState('staQtzI', cndsMJ1);
if (cndsMJ1) { 
let elNb5P9 = eo('div','Nn5f',null,`class`,`card p-1 text-center`);
let elJoitz = eo('h3','uewf',null,`class`,`m-b-1`);
text(`Attachment`);
ec('h3');
let cndrsRm = isImage(component.meeting.attachment);
this.setState('stN_eR7', cndrsRm);
let cnddCDc = !(cndrsRm);
this.setState('stksTPi', cnddCDc);
if (cndrsRm) { 
let elOxcSk = eo('a','vJ_f',null,`href`,`${component.meeting.attachment}`,`target`,`_blank`);
let elgAuoz = ev('img','lmqf',null,`src`,`${component.meeting.attachment}`,`title`,`${component.meeting.title}`,`alt`,`${component.meeting.title}`);
ec('a');
}else { 
let elPx2yG = eo('a',null,null,`href`,`${component.meeting.attachment}`,`class`,`btn btn-cyan bold`,`target`,`_blank`);
let elE21ds = eo('i',null,null,`class`,`${fas('download') + ' icon'}`);
ec('i');
let elYuckV = eo('span',null,null,`class`,`ml-1`);
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