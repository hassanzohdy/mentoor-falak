_Component({
                selector: 'project-meeting-details-page',
                c: 'ProjectMeetingDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','meeting'],
                children: {cXf2XaU1h:'markdown',czXKek2JP:'comments',c80Cht2Ng:'project-layout'},
                render: function (component) {
                    let cmpqsLD = this._lc('c80Cht2Ng', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elX0UBA = eo('h1',null,null,`class`,`heading`);
text(component.meeting.title);
ec('h1');
let elnp4m4 = eo('div',null,null,`class`,`row`);
let el8F3Lp = eo('div',null,null,`class`,`col-9`);
let eleo0k2 = eo('div',null,null,`class`,`simple-card`);
let cmpPSdh = this._lc('cXf2XaU1h', {parent:component,parentTop:projectLayout,props:{content:component.meeting.mom}});
ec('div');
let cmpm2di = this._lc('czXKek2JP', {parent:component,parentTop:projectLayout,props:{project:component.project,comments:component.meeting.comments,typeId:component.meeting.id},attrs:{type:'meeting'}});
ec('div');
let el93COj = eo('div',null,null,`class`,`col`);
let elNMF30 = eo('div',null,null,`class`,`card p-1`);
let el7EwFR = eo('h3',null,null,`class`,`text-center m-b-1`);
text(`Meeting Details`);
ec('h3');
let el6jnya = eo('div',null,null,`class`,`m-b-1`);
let el3ESYN = eo('span',null,null,`class`,`mr-3`);
text(`Meeting Type`);
ec('span');
let elzTA7S = eo('strong');
text(component.meeting.type.capitalize());
ec('strong');
ec('div');
let elsoLAJ = eo('div',null,null,`class`,`m-b-1`);
let elGsMkx = eo('span',null,null,`class`,`mr-3`);
text(`Meeting Date`);
ec('span');
let elk6wPL = eo('strong');
text(component.meeting.date);
ec('strong');
ec('div');
ec('div');
let elI92Dz = eo('div',null,null,`class`,`card p-1`);
let eliDOc1 = eo('h3',null,null,`class`,`text-center m-b-1`);
text(`Participants`);
ec('h3');
for (let i in component.meeting.members) {
let member = component.meeting.members[i]; 
 let iilm6Z = 'zJDuUua' + i;
let elbmE68 = eo('div','0V3BEjQqxHRj' + i+iilm6Z,null,`class`,`bold m-b-1`);
let el3jDV6 = ev('img','Aieff'+iilm6Z,null, 'style', {width:'50px',height:'50px'},`src`,`${member.image}`,`class`,`rounded-circle m-r-1`,`title`,`${member.name}`,`alt`,`${member.name}`);
let eloqhDo = eo('string','gTdff'+iilm6Z);
text(member.name);
ec('string');
ec('div');
}
ec('div');
let cnduP2P = ! Is.empty(component.meeting.clientRepresentatives);
this.setState('sth3DdY', cnduP2P);
if (cnduP2P) { 
let elzTNIJ = eo('div','TTSf',null,`class`,`card p-1`);
let ellVElN = eo('h3','XzEf',null,`class`,`text-center`);
text(`Client Representatives`);
ec('h3');
for (let i in component.meeting.clientRepresentatives) {
let representatives = component.meeting.clientRepresentatives[i]; 
 let iin8Fj = '6_SXFSl' + i;
let el8gwam = eo('div','ojPewgmG4qMQ' + i+iin8Fj,null,`class`,`bold m-b-1`);
let el5CLZo = ev('img','PQ0ff'+iin8Fj,null, 'style', {width:'50px',height:'50px'},`src`,`${representatives.image || FAVICON}`,`class`,`rounded-circle m-r-1`,`title`,`${representatives.name}`,`alt`,`${representatives.name}`);
let elX7LFe = eo('string','1CWff'+iin8Fj);
text(representatives.name);
ec('string');
ec('div');
}
ec('div');
}let cndi2iG = component.meeting.attachment;
this.setState('st8IuTS', cndi2iG);
if (cndi2iG) { 
let el1mYdD = eo('div','Ig4f',null,`class`,`card p-1 text-center`);
let eln8_UI = eo('h3','hRXf',null,`class`,`m-b-1`);
text(`Attachment`);
ec('h3');
let cnd0zzE = isImage(component.meeting.attachment);
this.setState('stDHCaj', cnd0zzE);
let cndXjYQ = !(cnd0zzE);
this.setState('sttcguv', cndXjYQ);
if (cnd0zzE) { 
let elLiFQ6 = eo('a','xhTf',null,`href`,`${component.meeting.attachment}`,`target`,`_blank`);
let el8mtYy = ev('img','4I1f',null,`src`,`${component.meeting.attachment}`,`title`,`${component.meeting.title}`,`alt`,`${component.meeting.title}`);
ec('a');
}else { 
let elxZZVx = eo('a',null,null,`href`,`${component.meeting.attachment}`,`class`,`btn btn-cyan bold`,`target`,`_blank`);
let elNGj72 = eo('i',null,null,`class`,`${fas('download')} icon`);
ec('i');
let elA4pVl = eo('span',null,null,`class`,`ml-1`);
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