_Component({
                selector: 'english-top-participants-page',
                c: 'EnglishTopParticipantsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','participants'],
                children: {c_kZWcheU:'flk-spinner',cqHlFw_1I:'user-online',cvfvfIYbY:'gold-icon',csL3kk4cu:'layout'},
                render: function (component) {
                    let cmpEROo = this._lc('csL3kk4cu', {parent:component,content:(layout) => {let elbwoTO = eo('h1',null,null,`class`,`p-r-2 text-center text-sm-left`);
text(`English As A Foreigner`);
let el4WhTu = eo('a',null,null,`href`,`/english`,`class`,`float-sm-right mt-sm-0 mt-4 mr-3 d-inline-block btn btn-purple bold`);
let elROCJX = eo('i',null,null,`class`,`${fas('angle-left')} mr-2 icon`);
ec('i');
text(`Back to Topics list`);
ec('a');
ec('h1');
let cndPqf9 = component.isLoading;
this.setState('stoRYDR', cndPqf9);
let cndXJDW = !(cndPqf9);
this.setState('stHnrrE', cndXJDW);
if (cndPqf9) { 
let cmpDrVC = this._lc('c_kZWcheU', {parent:component,parentTop:layout,state:'stoRYDR'});
}else { 
let elsc7j9 = eo('div',null,null,`class`,`m-t-2`);
let elWxBBI = eo('h1',null,null,`class`,`text-center m-b-2 bold`);
text(`Top Participants`);
ec('h1');
let elhqRzi = eo('table',null,null,`class`,`table table-bordered`);
let el9FTG7 = eo('thead');
let ele7D7l = eo('tr');
let elGIabZ = eo('th');
text(`Participant`);
ec('th');
let elXXFoh = eo('th');
text(`Total words`);
ec('th');
let el6cntq = eo('th');
text(`Total rewards`);
ec('th');
ec('tr');
ec('thead');
let elx1aPc = eo('tbody');
for (let index in component.participants) {
let participant = component.participants[index]; 
 let iiXCrm = 'BD215Qs' + index;
let elKWpXS = eo('tr','q_nLApZF5U2H' + index+iiXCrm);
let eloLK6S = eo('td','I2tff'+iiXCrm);
let elLIizg = eo('span','Awxff'+iiXCrm,null,`class`,`mr-1`);
let eldQJQj = eo('span','07Zff'+iiXCrm);
text(Number(Number(index) + 1).format());
ec('span');
text(`-`);
ec('span');
let elas_ij = ev('img','rT7ff'+iiXCrm,null,`src`,`${userImage(participant.user)}`,`class`,`u-image img-thumbnail`,`title`,`${userName(participant.user)}`,`alt`,`${userName(participant.user)}`);
let ellic5m = eo('span','RhCff'+iiXCrm,null,`class`,`mr-1`);
text(userName(participant.user));
ec('span');
let cmp8Fws = this._lc('cqHlFw_1I', {parent:component,parentTop:layout,props:{id:participant.user.id},attrs:{id:`${participant.user.id}`},state:'stHnrrE',insideLoop:true,index:"" +iiXCrm});
ec('td');
let el6KZFQ = eo('td','bpfff'+iiXCrm,null,`class`,`total-words`);
text(participant.total.word.format());
ec('td');
let el5Cgxk = eo('td','vS6ff'+iiXCrm,null,`class`,`total-reward`);
let cmpc_eJ = this._lc('cvfvfIYbY', {parent:component,parentTop:layout,props:{coins:participant.reward.word},state:'stHnrrE',insideLoop:true,index:"" +iiXCrm});
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