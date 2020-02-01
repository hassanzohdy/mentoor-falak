_Component({
                selector: 'english-top-participants-page',
                c: 'EnglishTopParticipantsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','participants'],
                children: {cYgQ0sZE8:'flk-spinner',cmoYNHMV7:'user-online',ca0iTIG_v:'gold-icon',cm1ILSEkz:'layout'},
                render: function (component) {
                    let cmpmOnB = this._lc('cm1ILSEkz', {parent:component,content:(layout) => {let elQ10Si = eo('h1',null,null,`class`,`p-r-2 text-center text-sm-left`);
text(`English As A Foreigner`);
let elDRXRn = eo('a',null,null,`href`,`/english`,`class`,`float-sm-right mt-sm-0 mt-4 mr-3 d-inline-block btn btn-purple bold`);
let elrHG2A = eo('i',null,null,`class`,`${fas('angle-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to Topics list`);
ec('a');
ec('h1');
let cndh87V = component.isLoading;
this.setState('st11iDZ', cndh87V);
let cndjaIE = !(cndh87V);
this.setState('st9Css3', cndjaIE);
if (cndh87V) { 
let cmpuwUp = this._lc('cYgQ0sZE8', {parent:component,parentTop:layout,state:'st11iDZ'});
}else { 
let elL2W3f = eo('div',null,null,`class`,`m-t-2`);
let el376hM = eo('h1',null,null,`class`,`text-center m-b-2 bold`);
text(`Top Participants`);
ec('h1');
let el6R4dE = eo('table',null,null,`class`,`table table-bordered`);
let elYi7jk = eo('thead');
let elIoKqO = eo('tr');
let elbBP4o = eo('th');
text(`Participant`);
ec('th');
let elGXk5f = eo('th');
text(`Total words`);
ec('th');
let elbX6t0 = eo('th');
text(`Total rewards`);
ec('th');
ec('tr');
ec('thead');
let elHXAKP = eo('tbody');
for (let index in component.participants) {
let participant = component.participants[index]; 
 let iidE_K = 'g3PKTOJ' + index;
let elDE2VK = eo('tr','BPLM58PeP09k' + index+iidE_K);
let elntL1m = eo('td','bwOff'+iidE_K);
let elELC7q = eo('span','r9Rff'+iidE_K,null,`class`,`mr-1`);
let elwh9eO = eo('span','bvcff'+iidE_K);
text(Number(Number(index) + 1).format());
ec('span');
text(`-`);
ec('span');
let elCUCUx = ev('img','Zzcff'+iidE_K,null,`src`,`${userImage(participant.user)}`,`class`,`u-image img-thumbnail`,`title`,`${userName(participant.user)}`,`alt`,`${userName(participant.user)}`);
let el5pdEE = eo('span','m0fff'+iidE_K,null,`class`,`mr-1`);
text(userName(participant.user));
ec('span');
let cmpJcF_ = this._lc('cmoYNHMV7', {parent:component,parentTop:layout,props:{id:participant.user.id},attrs:{id:`${participant.user.id}`},state:'st9Css3',insideLoop:true,index:"" +iidE_K});
ec('td');
let elszzK6 = eo('td','7Fzff'+iidE_K,null,`class`,`total-words`);
text(participant.total.word.format());
ec('td');
let elhS4vr = eo('td','9yPff'+iidE_K,null,`class`,`total-reward`);
let cmpcT0G = this._lc('ca0iTIG_v', {parent:component,parentTop:layout,props:{coins:participant.reward.word},state:'st9Css3',insideLoop:true,index:"" +iidE_K});
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