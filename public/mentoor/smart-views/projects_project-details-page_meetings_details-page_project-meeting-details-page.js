_Component({
                selector: 'project-meeting-details-page',
                c: 'ProjectMeetingDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','meeting'],
                children: {cMGsXCDzC:'markdown',ckRpXadn0:'comments',c6WN2IA4Q:'project-layout'},
                render: function (component) {
                    let cmprGBC = this._lc('c6WN2IA4Q', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el9S0OP = eo('h1',null,null,`class`,`heading`);
text(component.meeting.title);
ec('h1');
let elb1eOu = eo('div',null,null,`class`,`row`);
let elqP4FC = eo('div',null,null,`class`,`col-9`);
let elTBYpf = eo('div',null,null,`class`,`simple-card`);
let cmpF9X9 = this._lc('cMGsXCDzC', {parent:component,parentTop:projectLayout,props:{content:component.meeting.mom}});
ec('div');
let cmpU4Gc = this._lc('ckRpXadn0', {parent:component,parentTop:projectLayout,props:{project:component.project,comments:component.meeting.comments,typeId:component.meeting.id},attrs:{type:'meeting'}});
ec('div');
let el6GnXv = eo('div',null,null,`class`,`col`);
let elT90o4 = eo('div',null,null,`class`,`card p-1`);
let elAvWL6 = eo('h3',null,null,`class`,`text-center m-b-1`);
text(`Meeting Details`);
ec('h3');
let elszXDm = eo('div',null,null,`class`,`m-b-1`);
let elT3Hh4 = eo('span',null,null,`class`,`mr-3`);
text(`Meeting Type`);
ec('span');
let eluy05s = eo('strong');
text(component.meeting.type.capitalize());
ec('strong');
ec('div');
let elStvBN = eo('div',null,null,`class`,`m-b-1`);
let elIY5KT = eo('span',null,null,`class`,`mr-3`);
text(`Meeting Date`);
ec('span');
let eldBF0e = eo('strong');
text(component.meeting.date);
ec('strong');
ec('div');
ec('div');
let elwWzyx = eo('div',null,null,`class`,`card p-1`);
let elAAH3Z = eo('h3',null,null,`class`,`text-center m-b-1`);
text(`Participants`);
ec('h3');
for (let i in component.meeting.members) {
let member = component.meeting.members[i]; 
 let ii8rya = 'c0eX1x8' + i;
let elmlSIq = eo('div','K8DjBvu6J6Dk' + i+ii8rya,null,`class`,`bold m-b-1`);
let elX42vk = ev('img','eYEff'+ii8rya,null, 'style', {width:'50px',height:'50px'},`src`,`${member.image}`,`class`,`rounded-circle m-r-1`,`title`,`${member.name}`,`alt`,`${member.name}`);
let elhk1lE = eo('string','PGLff'+ii8rya);
text(member.name);
ec('string');
ec('div');
}
ec('div');
let cndxdkA = ! Is.empty(component.meeting.clientRepresentatives);
this.setState('stV8XUS', cndxdkA);
if (cndxdkA) { 
let elRIA1_ = eo('div','Ouif',null,`class`,`card p-1`);
let eljm8kI = eo('h3','Vn0f',null,`class`,`text-center`);
text(`Client Representatives`);
ec('h3');
for (let i in component.meeting.clientRepresentatives) {
let representatives = component.meeting.clientRepresentatives[i]; 
 let iiKHny = 'u41xhFy' + i;
let el65ear = eo('div','dsd9UtWvYGPC' + i+iiKHny,null,`class`,`bold m-b-1`);
let elgCXS3 = ev('img','faqff'+iiKHny,null, 'style', {width:'50px',height:'50px'},`src`,`${representatives.image || FAVICON}`,`class`,`rounded-circle m-r-1`,`title`,`${representatives.name}`,`alt`,`${representatives.name}`);
let elaJgvE = eo('string','F0sff'+iiKHny);
text(representatives.name);
ec('string');
ec('div');
}
ec('div');
}let cndGiQs = component.meeting.attachment;
this.setState('stYKAvk', cndGiQs);
if (cndGiQs) { 
let elMVSGG = eo('div','TCPf',null,`class`,`card p-1 text-center`);
let elKCUKu = eo('h3','ZUbf',null,`class`,`m-b-1`);
text(`Attachment`);
ec('h3');
let cndsabI = isImage(component.meeting.attachment);
this.setState('stOeohn', cndsabI);
let cndoIjV = !(cndsabI);
this.setState('st5ozQk', cndoIjV);
if (cndsabI) { 
let elk5L95 = eo('a','ixxf',null,`href`,`${component.meeting.attachment}`,`target`,`_blank`);
let eltqIwT = ev('img','5HAf',null,`src`,`${component.meeting.attachment}`,`title`,`${component.meeting.title}`,`alt`,`${component.meeting.title}`);
ec('a');
}else { 
let elXsBr_ = eo('a',null,null,`href`,`${component.meeting.attachment}`,`class`,`btn btn-cyan bold`,`target`,`_blank`);
let elY2jqX = eo('i',null,null,`class`,`${fas('download') + ' icon'}`);
ec('i');
let elKgP03 = eo('span',null,null,`class`,`ml-1`);
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