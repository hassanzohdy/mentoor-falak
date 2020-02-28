_Component({
                selector: 'project-meeting-details-page',
                c: 'ProjectMeetingDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','meeting'],
                children: {c2EvMonEg:'markdown',cO9o9KhwR:'comments',c3OBKSacd:'project-layout'},
                render: function (component) {
                    let cmpVQd0 = this._lc('c3OBKSacd', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elUWnSn = eo('h1',null,null,`class`,`heading`);
text(component.meeting.title);
ec('h1');
let elACwhc = eo('div',null,null,`class`,`row`);
let el4izlT = eo('div',null,null,`class`,`col-9`);
let elWTOg9 = eo('div',null,null,`class`,`simple-card`);
let cmpBDeh = this._lc('c2EvMonEg', {parent:component,parentTop:projectLayout,props:{content:component.meeting.mom}});
ec('div');
let cmpevu4 = this._lc('cO9o9KhwR', {parent:component,parentTop:projectLayout,props:{project:component.project,comments:component.meeting.comments,typeId:component.meeting.id},attrs:{type:'meeting'}});
ec('div');
let elSSXZJ = eo('div',null,null,`class`,`col`);
let el9LwiC = eo('div',null,null,`class`,`card p-1`);
let elvWuUo = eo('h3',null,null,`class`,`text-center m-b-1`);
text(`Meeting Details`);
ec('h3');
let el0wwlr = eo('div',null,null,`class`,`m-b-1`);
let elbzb4T = eo('span',null,null,`class`,`mr-3`);
text(`Meeting Type`);
ec('span');
let elzctga = eo('strong');
text(component.meeting.type.capitalize());
ec('strong');
ec('div');
let el_br6M = eo('div',null,null,`class`,`m-b-1`);
let elqmXRA = eo('span',null,null,`class`,`mr-3`);
text(`Meeting Date`);
ec('span');
let el2YK6Q = eo('strong');
text(component.meeting.date);
ec('strong');
ec('div');
ec('div');
let elw8GPx = eo('div',null,null,`class`,`card p-1`);
let elCle_y = eo('h3',null,null,`class`,`text-center m-b-1`);
text(`Participants`);
ec('h3');
for (let i in component.meeting.members) {
let member = component.meeting.members[i]; 
 let iiCYFa = 'OHTaf7z' + i;
let elviM5T = eo('div','En2ZsUqF0mpx' + i+iiCYFa,null,`class`,`bold m-b-1`);
let elHtCbg = ev('img','CoOff'+iiCYFa,null, 'style', {width:'50px',height:'50px'},`src`,`${member.image}`,`class`,`rounded-circle m-r-1`,`title`,`${member.name}`,`alt`,`${member.name}`);
let elggTTs = eo('string','83jff'+iiCYFa);
text(member.name);
ec('string');
ec('div');
}
ec('div');
let cnd6hWI = ! Is.empty(component.meeting.clientRepresentatives);
this.setState('stNtc20', cnd6hWI);
if (cnd6hWI) { 
let elhxv54 = eo('div','rmnf',null,`class`,`card p-1`);
let elfqZzd = eo('h3','TCLf',null,`class`,`text-center`);
text(`Client Representatives`);
ec('h3');
for (let i in component.meeting.clientRepresentatives) {
let representatives = component.meeting.clientRepresentatives[i]; 
 let iijcdV = 'XcUWzIJ' + i;
let el71U5f = eo('div','3ZEAWlAfFd7M' + i+iijcdV,null,`class`,`bold m-b-1`);
let eluzTal = ev('img','1RTff'+iijcdV,null, 'style', {width:'50px',height:'50px'},`src`,`${representatives.image || FAVICON}`,`class`,`rounded-circle m-r-1`,`title`,`${representatives.name}`,`alt`,`${representatives.name}`);
let el75XrK = eo('string','7QAff'+iijcdV);
text(representatives.name);
ec('string');
ec('div');
}
ec('div');
}let cndToid = component.meeting.attachment;
this.setState('stHISSO', cndToid);
if (cndToid) { 
let elasao8 = eo('div','3DUf',null,`class`,`card p-1 text-center`);
let elRNvbR = eo('h3','YMdf',null,`class`,`m-b-1`);
text(`Attachment`);
ec('h3');
let cndDBRl = isImage(component.meeting.attachment);
this.setState('stAYa7y', cndDBRl);
let cnd8g9q = !(cndDBRl);
this.setState('st6a74a', cnd8g9q);
if (cndDBRl) { 
let elbMxwu = eo('a','B82f',null,`href`,`${component.meeting.attachment}`,`target`,`_blank`);
let elzOrf7 = ev('img','LNyf',null,`src`,`${component.meeting.attachment}`,`title`,`${component.meeting.title}`,`alt`,`${component.meeting.title}`);
ec('a');
}else { 
let elnTMUv = eo('a',null,null,`href`,`${component.meeting.attachment}`,`class`,`btn btn-cyan bold`,`target`,`_blank`);
let elPKMEU = eo('i',null,null,`class`,`${fas('download')} icon`);
ec('i');
let el8r7vv = eo('span',null,null,`class`,`ml-1`);
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