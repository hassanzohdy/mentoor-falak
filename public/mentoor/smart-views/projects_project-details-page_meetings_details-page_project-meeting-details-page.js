_Component({
                selector: 'project-meeting-details-page',
                c: 'ProjectMeetingDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','meeting'],
                children: {clEBSKvxe:'markdown',cNr5j_puz:'comments',ccCTgquXD:'project-layout'},
                render: function (component) {
                    let cmpve12 = this._lc('ccCTgquXD', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elOPkqR = eo('h1',null,null,`class`,`heading`);
text(component.meeting.title);
ec('h1');
let elnlZyy = eo('div',null,null,`class`,`row`);
let elyAAm6 = eo('div',null,null,`class`,`col-9`);
let elwDhuh = eo('div',null,null,`class`,`simple-card`);
let cmp_1AE = this._lc('clEBSKvxe', {parent:component,parentTop:projectLayout,props:{content:component.meeting.mom}});
ec('div');
let cmp7Apv = this._lc('cNr5j_puz', {parent:component,parentTop:projectLayout,props:{project:component.project,comments:component.meeting.comments,typeId:component.meeting.id},attrs:{type:'meeting'}});
ec('div');
let elkoKWT = eo('div',null,null,`class`,`col`);
let el0SaaR = eo('div',null,null,`class`,`card p-1`);
let elP6czx = eo('h3',null,null,`class`,`text-center m-b-1`);
text(`Meeting Details`);
ec('h3');
let elsAoPe = eo('div',null,null,`class`,`m-b-1`);
let elOgvZI = eo('span',null,null,`class`,`mr-3`);
text(`Meeting Type`);
ec('span');
let ellgzl1 = eo('strong');
text(component.meeting.type.capitalize());
ec('strong');
ec('div');
let elcGZsx = eo('div',null,null,`class`,`m-b-1`);
let elRWAXt = eo('span',null,null,`class`,`mr-3`);
text(`Meeting Date`);
ec('span');
let elLWxvn = eo('strong');
text(component.meeting.date);
ec('strong');
ec('div');
ec('div');
let elRv04Y = eo('div',null,null,`class`,`card p-1`);
let el2i5AC = eo('h3',null,null,`class`,`text-center m-b-1`);
text(`Participants`);
ec('h3');
for (let i in component.meeting.members) {
let member = component.meeting.members[i]; 
 let ii5k5C = 'ygLjLIb' + i;
let elPkKW7 = eo('div','SgVMgTbp8_bP' + i+ii5k5C,null,`class`,`bold m-b-1`);
let elY5ZeL = ev('img','xEHff'+ii5k5C,null, 'style', {width:'50px',height:'50px'},`src`,`${member.image}`,`class`,`rounded-circle m-r-1`,`title`,`${member.name}`,`alt`,`${member.name}`);
let el_2I1j = eo('string','JAwff'+ii5k5C);
text(member.name);
ec('string');
ec('div');
}
ec('div');
let cndGChX = ! Is.empty(component.meeting.clientRepresentatives);
this.setState('stqNZzI', cndGChX);
if (cndGChX) { 
let eliYgu6 = eo('div','XOpf',null,`class`,`card p-1`);
let ellENj7 = eo('h3','wgof',null,`class`,`text-center`);
text(`Client Representatives`);
ec('h3');
for (let i in component.meeting.clientRepresentatives) {
let representatives = component.meeting.clientRepresentatives[i]; 
 let iiYWVo = 'Xk4GuAs' + i;
let el4G1jb = eo('div','6HzhSr7OS9mZ' + i+iiYWVo,null,`class`,`bold m-b-1`);
let elH5nVM = ev('img','z_yff'+iiYWVo,null, 'style', {width:'50px',height:'50px'},`src`,`${representatives.image || FAVICON}`,`class`,`rounded-circle m-r-1`,`title`,`${representatives.name}`,`alt`,`${representatives.name}`);
let elZGVMz = eo('string','PWuff'+iiYWVo);
text(representatives.name);
ec('string');
ec('div');
}
ec('div');
}let cnd5KwG = component.meeting.attachment;
this.setState('stMBL7j', cnd5KwG);
if (cnd5KwG) { 
let elLoLvE = eo('div','2cyf',null,`class`,`card p-1 text-center`);
let elgyfWH = eo('h3','2Kof',null,`class`,`m-b-1`);
text(`Attachment`);
ec('h3');
let cndKhsM = isImage(component.meeting.attachment);
this.setState('stdRxHI', cndKhsM);
let cndzrw2 = !(cndKhsM);
this.setState('stjkZLA', cndzrw2);
if (cndKhsM) { 
let elUIuus = eo('a','FmUf',null,`href`,`${component.meeting.attachment}`,`target`,`_blank`);
let elIPs_v = ev('img','oRmf',null,`src`,`${component.meeting.attachment}`,`title`,`${component.meeting.title}`,`alt`,`${component.meeting.title}`);
ec('a');
}else { 
let elEALLg = eo('a',null,null,`href`,`${component.meeting.attachment}`,`class`,`btn btn-cyan bold`,`target`,`_blank`);
let elntoyx = eo('i',null,null,`class`,`${fas('download') + ' icon'}`);
ec('i');
let el0rBej = eo('span',null,null,`class`,`ml-1`);
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