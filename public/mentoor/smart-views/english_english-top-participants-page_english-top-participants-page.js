_Component({
                selector: 'english-top-participants-page',
                c: 'EnglishTopParticipantsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','participants'],
                children: {cCfxs8DIy:'flk-spinner',cAgUHHXmC:'user-online',cxUFoPSCl:'gold-icon',c2ab_uOkz:'layout'},
                render: function (component) {
                    let cmp88im = this._lc('c2ab_uOkz', {parent:component,content:(layout) => {let elzuYSV = eo('h1',null,null,`class`,`p-r-2 text-center text-sm-left`);
text(`English As A Foreigner`);
let eluV3QO = eo('a',null,null,`href`,`/english`,`class`,`float-sm-right mt-sm-0 mt-4 mr-3 d-inline-block btn btn-purple bold`);
let elvdt2u = eo('i',null,null,`class`,`${fas('angle-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to Topics list`);
ec('a');
ec('h1');
let cndqwtp = component.isLoading;
this.setState('stFNhk1', cndqwtp);
let cnd4xkz = !(cndqwtp);
this.setState('stQEDBw', cnd4xkz);
if (cndqwtp) { 
let cmpTJBX = this._lc('cCfxs8DIy', {parent:component,parentTop:layout,state:'stFNhk1'});
}else { 
let elorqQz = eo('div',null,null,`class`,`m-t-2`);
let el0YOAd = eo('h1',null,null,`class`,`text-center m-b-2 bold`);
text(`Top Participants`);
ec('h1');
let elBQpTk = eo('table',null,null,`class`,`table table-bordered`);
let elRpjFq = eo('thead');
let elvBIaa = eo('tr');
let elWDMkx = eo('th');
text(`Participant`);
ec('th');
let el_Iu1W = eo('th');
text(`Total words`);
ec('th');
let elFCQXS = eo('th');
text(`Total rewards`);
ec('th');
ec('tr');
ec('thead');
let elKXfx5 = eo('tbody');
for (let index in component.participants) {
let participant = component.participants[index]; 
 let ii2OOH = 'JO0DA0H' + index;
let elhz1FC = eo('tr','PXiQ9rEECJLL' + index+ii2OOH);
let elxecWa = eo('td','mr2ff'+ii2OOH);
let eljHSg1 = eo('span','Yz5ff'+ii2OOH,null,`class`,`mr-1`);
let elCnGRr = eo('span','No0ff'+ii2OOH);
text(Number(Number(index) + 1).format());
ec('span');
text(`-`);
ec('span');
let el5ZWQo = ev('img','cLgff'+ii2OOH,null,`src`,`${userImage(participant.user)}`,`class`,`u-image img-thumbnail`,`title`,`${userName(participant.user)}`,`alt`,`${userName(participant.user)}`);
let elphBYW = eo('span','Dm3ff'+ii2OOH,null,`class`,`mr-1`);
text(userName(participant.user));
ec('span');
let cmpEm6a = this._lc('cAgUHHXmC', {parent:component,parentTop:layout,props:{id:participant.user.id},attrs:{id:`${participant.user.id}`},state:'stQEDBw',insideLoop:true,index:"" +ii2OOH});
ec('td');
let elmuCTv = eo('td','yowff'+ii2OOH,null,`class`,`total-words`);
text(participant.total.word.format());
ec('td');
let elzoVWf = eo('td','qZCff'+ii2OOH,null,`class`,`total-reward`);
let cmpqMhv = this._lc('cxUFoPSCl', {parent:component,parentTop:layout,props:{coins:participant.reward.word},state:'stQEDBw',insideLoop:true,index:"" +ii2OOH});
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