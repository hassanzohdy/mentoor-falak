_Component({
                selector: 'english-top-participants-page',
                c: 'EnglishTopParticipantsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','participants'],
                children: {cFVVVN84o:'flk-spinner',cOKv1UAhJ:'user-online',cGMVKsgsw:'gold-icon',ce1uzCsFh:'layout'},
                render: function (component) {
                    let cmpLwaH = this._lc('ce1uzCsFh', {parent:component,content:(layout) => {let elIoQHw = eo('h1',null,null,`class`,`p-r-2 text-center text-sm-left`);
text(`English As A Foreigner`);
let elq_peh = eo('a',null,null,`href`,`/english`,`class`,`float-sm-right mt-sm-0 mt-4 mr-3 d-inline-block btn btn-purple bold`);
let elgxI5y = eo('i',null,null,`class`,`${fas('angle-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to Topics list`);
ec('a');
ec('h1');
let cndJEfF = component.isLoading;
this.setState('stZXlCL', cndJEfF);
let cndPLVE = !(cndJEfF);
this.setState('stKSpl0', cndPLVE);
if (cndJEfF) { 
let cmpnCiz = this._lc('cFVVVN84o', {parent:component,parentTop:layout,state:'stZXlCL'});
}else { 
let elkg_az = eo('div',null,null,`class`,`m-t-2`);
let elJVcr9 = eo('h1',null,null,`class`,`text-center m-b-2 bold`);
text(`Top Participants`);
ec('h1');
let elbFcyZ = eo('table',null,null,`class`,`table table-bordered`);
let elvnERy = eo('thead');
let elAZRbz = eo('tr');
let elHrEVH = eo('th');
text(`Participant`);
ec('th');
let elwhS34 = eo('th');
text(`Total words`);
ec('th');
let elX27xJ = eo('th');
text(`Total rewards`);
ec('th');
ec('tr');
ec('thead');
let el88Goe = eo('tbody');
for (let index in component.participants) {
let participant = component.participants[index]; 
 let iiHbTN = 'xbWyU3t' + index;
let el0skCs = eo('tr','ODKH2nfTlu_s' + index+iiHbTN);
let elEuVuX = eo('td','zk8ff'+iiHbTN);
let elxa8_a = eo('span','iKKff'+iiHbTN,null,`class`,`mr-1`);
let elnD3Ra = eo('span','AK1ff'+iiHbTN);
text(Number(Number(index) + 1).format());
ec('span');
text(`-`);
ec('span');
let el7OLNt = ev('img','YZVff'+iiHbTN,null,`src`,`${userImage(participant.user)}`,`class`,`u-image img-thumbnail`,`title`,`${userName(participant.user)}`,`alt`,`${userName(participant.user)}`);
let elRYKzO = eo('span','7bJff'+iiHbTN,null,`class`,`mr-1`);
text(userName(participant.user));
ec('span');
let cmp2611 = this._lc('cOKv1UAhJ', {parent:component,parentTop:layout,props:{id:participant.user.id},attrs:{id:`${participant.user.id}`},state:'stKSpl0',insideLoop:true,index:"" +iiHbTN});
ec('td');
let elZC8T0 = eo('td','7hhff'+iiHbTN,null,`class`,`total-words`);
text(participant.total.word.format());
ec('td');
let elUHiQl = eo('td','Ul0ff'+iiHbTN,null,`class`,`total-reward`);
let cmpbrRf = this._lc('cGMVKsgsw', {parent:component,parentTop:layout,props:{coins:participant.reward.word},state:'stKSpl0',insideLoop:true,index:"" +iiHbTN});
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