_Component({
                selector: 'english-top-participants-page',
                c: 'EnglishTopParticipantsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','participants'],
                children: {cOn5dmnt6:'flk-spinner',cMbsfpMro:'user-online',c3dV6S3Ou:'gold-icon',croZ8iH4j:'layout'},
                render: function (component) {
                    let cmp5Xb0 = this._lc('croZ8iH4j', {parent:component,content:(layout) => {let elW_IJw = eo('h1',null,null,`class`,`p-r-2 text-center text-sm-left`);
text(`English As A Foreigner`);
let elTKFht = eo('a',null,null,`href`,`/english`,`class`,`float-sm-right mt-sm-0 mt-4 mr-3 d-inline-block btn btn-purple bold`);
let elSo5cH = eo('i',null,null,`class`,`${fas('angle-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to Topics list`);
ec('a');
ec('h1');
let cndCxdv = component.isLoading;
this.setState('st4aXAC', cndCxdv);
let cndIjQU = !(cndCxdv);
this.setState('stfa0Io', cndIjQU);
if (cndCxdv) { 
let cmpI2mt = this._lc('cOn5dmnt6', {parent:component,parentTop:layout,state:'st4aXAC'});
}else { 
let elRS063 = eo('div',null,null,`class`,`m-t-2`);
let eldch9H = eo('h1',null,null,`class`,`text-center m-b-2 bold`);
text(`Top Participants`);
ec('h1');
let el9oty2 = eo('table',null,null,`class`,`table table-bordered`);
let elLsN78 = eo('thead');
let elsA_ZN = eo('tr');
let elNQC1I = eo('th');
text(`Participant`);
ec('th');
let elQfHi7 = eo('th');
text(`Total words`);
ec('th');
let ellkXbt = eo('th');
text(`Total rewards`);
ec('th');
ec('tr');
ec('thead');
let elXJXjb = eo('tbody');
for (let index in component.participants) {
let participant = component.participants[index]; 
 let iiuRB6 = '7LtlsIj' + index;
let elApP3n = eo('tr','FYqy1xax2mgw' + index+iiuRB6);
let elENvPT = eo('td','qGGff'+iiuRB6);
let elY6Qj_ = eo('span','zMvff'+iiuRB6,null,`class`,`mr-1`);
let elgoL4K = eo('span','2A6ff'+iiuRB6);
text(Number(Number(index) + 1).format());
ec('span');
text(`-`);
ec('span');
let el4LVHq = ev('img','Woyff'+iiuRB6,null,`src`,`${userImage(participant.user)}`,`class`,`u-image img-thumbnail`,`title`,`${userName(participant.user)}`,`alt`,`${userName(participant.user)}`);
let elU5zdG = eo('span','jqAff'+iiuRB6,null,`class`,`mr-1`);
text(userName(participant.user));
ec('span');
let cmpHy4t = this._lc('cMbsfpMro', {parent:component,parentTop:layout,props:{id:participant.user.id},attrs:{id:`${participant.user.id}`},state:'stfa0Io',insideLoop:true,index:"" +iiuRB6});
ec('td');
let elzhgop = eo('td','kxMff'+iiuRB6,null,`class`,`total-words`);
text(participant.total.word.format());
ec('td');
let elOlNpZ = eo('td','3GKff'+iiuRB6,null,`class`,`total-reward`);
let cmpYpIA = this._lc('c3dV6S3Ou', {parent:component,parentTop:layout,props:{coins:participant.reward.word},state:'stfa0Io',insideLoop:true,index:"" +iiuRB6});
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