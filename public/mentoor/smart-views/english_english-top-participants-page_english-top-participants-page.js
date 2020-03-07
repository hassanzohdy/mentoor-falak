_Component({
                selector: 'english-top-participants-page',
                c: 'EnglishTopParticipantsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','participants'],
                children: {coHl1Cbrv:'flk-spinner',c9UOkScN8:'user-online',cAvyqBKcm:'gold-icon',cEPNghswF:'layout'},
                render: function (component) {
                    let cmp1fPF = this._lc('cEPNghswF', {parent:component,content:(layout) => {let elYkO0R = eo('h1',null,null,`class`,`p-r-2 text-center text-sm-left`);
text(`English As A Foreigner`);
let eldSZvw = eo('a',null,null,`href`,`/english`,`class`,`float-sm-right mt-sm-0 mt-4 mr-3 d-inline-block btn btn-purple bold`);
let elgG5HD = eo('i',null,null,`class`,`${fas('angle-left')} mr-2 icon`);
ec('i');
text(`Back to Topics list`);
ec('a');
ec('h1');
let cndYgWF = component.isLoading;
this.setState('staPQtV', cndYgWF);
let cndJpqs = !(cndYgWF);
this.setState('stdujLb', cndJpqs);
if (cndYgWF) { 
let cmpsU8T = this._lc('coHl1Cbrv', {parent:component,parentTop:layout,state:'staPQtV'});
}else { 
let elsyPaM = eo('div',null,null,`class`,`m-t-2`);
let elhc6Iz = eo('h1',null,null,`class`,`text-center m-b-2 bold`);
text(`Top Participants`);
ec('h1');
let elZtm7v = eo('table',null,null,`class`,`table table-bordered`);
let elGcxgL = eo('thead');
let elqk9Dp = eo('tr');
let eluVaui = eo('th');
text(`Participant`);
ec('th');
let elcaNdt = eo('th');
text(`Total words`);
ec('th');
let elYZ2mo = eo('th');
text(`Total rewards`);
ec('th');
ec('tr');
ec('thead');
let elBsWdA = eo('tbody');
for (let index in component.participants) {
let participant = component.participants[index]; 
 let iiTcZP = 'VZhhrjY' + index;
let elq58Do = eo('tr','LBYCEbsx_jEx' + index+iiTcZP);
let eleSGRM = eo('td','42bff'+iiTcZP);
let eltxgCf = eo('span','vCdff'+iiTcZP,null,`class`,`mr-1`);
let eluoOWD = eo('span','xftff'+iiTcZP);
text(Number(Number(index) + 1).format());
ec('span');
text(`-`);
ec('span');
let el_DDkI = ev('img','Blrff'+iiTcZP,null,`src`,`${userImage(participant.user)}`,`class`,`u-image img-thumbnail`,`title`,`${userName(participant.user)}`,`alt`,`${userName(participant.user)}`);
let elp3d8T = eo('span','oITff'+iiTcZP,null,`class`,`mr-1`);
text(userName(participant.user));
ec('span');
let cmpRE25 = this._lc('c9UOkScN8', {parent:component,parentTop:layout,props:{id:participant.user.id},attrs:{id:`${participant.user.id}`},state:'stdujLb',insideLoop:true,index:"" +iiTcZP});
ec('td');
let elFQQsz = eo('td','C2hff'+iiTcZP,null,`class`,`total-words`);
text(participant.total.word.format());
ec('td');
let elsqq6Q = eo('td','scxff'+iiTcZP,null,`class`,`total-reward`);
let cmp1_W8 = this._lc('cAvyqBKcm', {parent:component,parentTop:layout,props:{coins:participant.reward.word},state:'stdujLb',insideLoop:true,index:"" +iiTcZP});
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
}}});

                    this.isReadyToGo();
                }
        });