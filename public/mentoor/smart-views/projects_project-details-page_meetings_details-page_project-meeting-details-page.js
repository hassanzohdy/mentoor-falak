_Component({
                selector: 'project-meeting-details-page',
                c: 'ProjectMeetingDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','meeting'],
                children: {cn_TIQoyX:'markdown',cBhzCbMma:'comments',c6vkEWtMU:'project-layout'},
                render: function (component) {
                    let cmpXasO = this._lc('c6vkEWtMU', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el3LmHK = eo('h1',null,null,`class`,`heading`);
text(component.meeting.title);
ec('h1');
let el8kmbn = eo('div',null,null,`class`,`row`);
let eldDgGw = eo('div',null,null,`class`,`col-9`);
let elraOsw = eo('div',null,null,`class`,`simple-card`);
let cmp2lcf = this._lc('cn_TIQoyX', {parent:component,parentTop:projectLayout,props:{content:component.meeting.mom}});
ec('div');
let cmpSRo9 = this._lc('cBhzCbMma', {parent:component,parentTop:projectLayout,props:{project:component.project,comments:component.meeting.comments,typeId:component.meeting.id},attrs:{type:'meeting'}});
ec('div');
let elwkCWX = eo('div',null,null,`class`,`col`);
let el_m4eg = eo('div',null,null,`class`,`card p-1`);
let elbIObq = eo('h3',null,null,`class`,`text-center m-b-1`);
text(`Meeting Details`);
ec('h3');
let elo5xHN = eo('div',null,null,`class`,`m-b-1`);
let elpWdvi = eo('span',null,null,`class`,`mr-3`);
text(`Meeting Type`);
ec('span');
let el_EMLG = eo('strong');
text(component.meeting.type.capitalize());
ec('strong');
ec('div');
let elX9Zyd = eo('div',null,null,`class`,`m-b-1`);
let elATabx = eo('span',null,null,`class`,`mr-3`);
text(`Meeting Date`);
ec('span');
let elT7coF = eo('strong');
text(component.meeting.date);
ec('strong');
ec('div');
ec('div');
let elh6MIB = eo('div',null,null,`class`,`card p-1`);
let elKAm2k = eo('h3',null,null,`class`,`text-center m-b-1`);
text(`Participants`);
ec('h3');
for (let i in component.meeting.members) {
let member = component.meeting.members[i]; 
 let iiDcTu = 'V0A9STb' + i;
let elSbmb3 = eo('div','xKmfKbeIN8SF' + i+iiDcTu,null,`class`,`bold m-b-1`);
let ela6NJY = ev('img','Txmff'+iiDcTu,null, 'style', {width:'50px',height:'50px'},`src`,`${member.image}`,`class`,`rounded-circle m-r-1`,`title`,`${member.name}`,`alt`,`${member.name}`);
let elL_I59 = eo('string','8ksff'+iiDcTu);
text(member.name);
ec('string');
ec('div');
}
ec('div');
let cnd6moi = ! Is.empty(component.meeting.clientRepresentatives);
this.setState('stnuzb8', cnd6moi);
if (cnd6moi) { 
let el3z3gX = eo('div','CHnf',null,`class`,`card p-1`);
let elDA98I = eo('h3','bFJf',null,`class`,`text-center`);
text(`Client Representatives`);
ec('h3');
for (let i in component.meeting.clientRepresentatives) {
let representatives = component.meeting.clientRepresentatives[i]; 
 let ii3hve = 'd1OjLhL' + i;
let el7fpl6 = eo('div','_vMSZNTLaBRv' + i+ii3hve,null,`class`,`bold m-b-1`);
let elSTscd = ev('img','a_dff'+ii3hve,null, 'style', {width:'50px',height:'50px'},`src`,`${representatives.image || FAVICON}`,`class`,`rounded-circle m-r-1`,`title`,`${representatives.name}`,`alt`,`${representatives.name}`);
let elwYyDI = eo('string','B6fff'+ii3hve);
text(representatives.name);
ec('string');
ec('div');
}
ec('div');
}let cndG_ub = component.meeting.attachment;
this.setState('stqi_xJ', cndG_ub);
if (cndG_ub) { 
let eltADEW = eo('div','LE7f',null,`class`,`card p-1 text-center`);
let el9AYbk = eo('h3','LVEf',null,`class`,`m-b-1`);
text(`Attachment`);
ec('h3');
let cndscVk = isImage(component.meeting.attachment);
this.setState('stzSC6O', cndscVk);
let cndQBI5 = !(cndscVk);
this.setState('stmNZcx', cndQBI5);
if (cndscVk) { 
let elIgd1K = eo('a','otDf',null,`href`,`${component.meeting.attachment}`,`target`,`_blank`);
let elGJgMP = ev('img','eEcf',null,`src`,`${component.meeting.attachment}`,`title`,`${component.meeting.title}`,`alt`,`${component.meeting.title}`);
ec('a');
}else { 
let elRoVBQ = eo('a',null,null,`href`,`${component.meeting.attachment}`,`class`,`btn btn-cyan bold`,`target`,`_blank`);
let elsmmcO = eo('i',null,null,`class`,`${fas('download')} icon`);
ec('i');
let elklOlb = eo('span',null,null,`class`,`ml-1`);
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