_Component({
                selector: 'project-meeting-details-page',
                c: 'ProjectMeetingDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','meeting'],
                children: {cxBN94Upx:'markdown',cHmq5D65K:'comments',cYT_CCYjB:'project-layout'},
                render: function (component) {
                    let cmp4PPL = this._lc('cYT_CCYjB', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elNPrB6 = eo('h1',null,null,`class`,`heading`);
text(component.meeting.title);
ec('h1');
let elQlyXW = eo('div',null,null,`class`,`row`);
let elUreZf = eo('div',null,null,`class`,`col-9`);
let el0pBL_ = eo('div',null,null,`class`,`simple-card`);
let cmp7m7A = this._lc('cxBN94Upx', {parent:component,parentTop:projectLayout,props:{content:component.meeting.mom}});
ec('div');
let cmp5Ngo = this._lc('cHmq5D65K', {parent:component,parentTop:projectLayout,props:{project:component.project,comments:component.meeting.comments,typeId:component.meeting.id},attrs:{type:'meeting'}});
ec('div');
let elu7bMO = eo('div',null,null,`class`,`col`);
let elLxpaf = eo('div',null,null,`class`,`card p-1`);
let elJyPmj = eo('h3',null,null,`class`,`text-center m-b-1`);
text(`Meeting Details`);
ec('h3');
let ellis38 = eo('div',null,null,`class`,`m-b-1`);
let elMR6Fe = eo('span',null,null,`class`,`mr-3`);
text(`Meeting Type`);
ec('span');
let el77i6N = eo('strong');
text(component.meeting.type.capitalize());
ec('strong');
ec('div');
let elGZryW = eo('div',null,null,`class`,`m-b-1`);
let elnkT6O = eo('span',null,null,`class`,`mr-3`);
text(`Meeting Date`);
ec('span');
let elc0yQb = eo('strong');
text(component.meeting.date);
ec('strong');
ec('div');
ec('div');
let el4QDGN = eo('div',null,null,`class`,`card p-1`);
let el6mojP = eo('h3',null,null,`class`,`text-center m-b-1`);
text(`Participants`);
ec('h3');
for (let i in component.meeting.members) {
let member = component.meeting.members[i]; 
 let ii0MCX = 'Ty46dvI' + i;
let elgxoDE = eo('div','e1dZRezIg_KG' + i+ii0MCX,null,`class`,`bold m-b-1`);
let elxvLrw = ev('img','hlyff'+ii0MCX,null, 'style', {width:'50px',height:'50px'},`src`,`${member.image}`,`class`,`rounded-circle m-r-1`,`title`,`${member.name}`,`alt`,`${member.name}`);
let eltwwYP = eo('string','8lxff'+ii0MCX);
text(member.name);
ec('string');
ec('div');
}
ec('div');
let cndb7eM = ! Is.empty(component.meeting.clientRepresentatives);
this.setState('stWcUwI', cndb7eM);
if (cndb7eM) { 
let elThw7T = eo('div','cjGf',null,`class`,`card p-1`);
let elwufVM = eo('h3','qDMf',null,`class`,`text-center`);
text(`Client Representatives`);
ec('h3');
for (let i in component.meeting.clientRepresentatives) {
let representatives = component.meeting.clientRepresentatives[i]; 
 let ii3LZ8 = '1zNp1zq' + i;
let eloUf0H = eo('div','xst2TKXMx9a4' + i+ii3LZ8,null,`class`,`bold m-b-1`);
let elrv6rz = ev('img','p5Lff'+ii3LZ8,null, 'style', {width:'50px',height:'50px'},`src`,`${representatives.image || FAVICON}`,`class`,`rounded-circle m-r-1`,`title`,`${representatives.name}`,`alt`,`${representatives.name}`);
let elA3Xza = eo('string','n9lff'+ii3LZ8);
text(representatives.name);
ec('string');
ec('div');
}
ec('div');
}let cndeUG0 = component.meeting.attachment;
this.setState('stKLmIS', cndeUG0);
if (cndeUG0) { 
let el10uVK = eo('div','8r_f',null,`class`,`card p-1 text-center`);
let el65NKA = eo('h3','kN1f',null,`class`,`m-b-1`);
text(`Attachment`);
ec('h3');
let cnd3ISm = isImage(component.meeting.attachment);
this.setState('stGQumO', cnd3ISm);
let cndjF09 = !(cnd3ISm);
this.setState('stasyFe', cndjF09);
if (cnd3ISm) { 
let elgGewB = eo('a','I3mf',null,`href`,`${component.meeting.attachment}`,`target`,`_blank`);
let elNK80Q = ev('img','lZWf',null,`src`,`${component.meeting.attachment}`,`title`,`${component.meeting.title}`,`alt`,`${component.meeting.title}`);
ec('a');
}else { 
let elQsDI4 = eo('a',null,null,`href`,`${component.meeting.attachment}`,`class`,`btn btn-cyan bold`,`target`,`_blank`);
let elCLzas = eo('i',null,null,`class`,`${fas('download') + ' icon'}`);
ec('i');
let el3K3Jz = eo('span',null,null,`class`,`ml-1`);
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