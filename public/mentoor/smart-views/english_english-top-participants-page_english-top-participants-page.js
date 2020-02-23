_Component({
                selector: 'english-top-participants-page',
                c: 'EnglishTopParticipantsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','participants'],
                children: {cNv8KQmmo:'flk-spinner',cvK1oTQOf:'user-online',cwlOHvzVT:'gold-icon',c1GzDWvRX:'layout'},
                render: function (component) {
                    let cmpuYG7 = this._lc('c1GzDWvRX', {parent:component,content:(layout) => {let el3Shwo = eo('h1',null,null,`class`,`p-r-2 text-center text-sm-left`);
text(`English As A Foreigner`);
let elQcCVl = eo('a',null,null,`href`,`/english`,`class`,`float-sm-right mt-sm-0 mt-4 mr-3 d-inline-block btn btn-purple bold`);
let elDR37y = eo('i',null,null,`class`,`${fas('angle-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to Topics list`);
ec('a');
ec('h1');
let cnd62XS = component.isLoading;
this.setState('stXgsd6', cnd62XS);
let cndKWkg = !(cnd62XS);
this.setState('stxIMcG', cndKWkg);
if (cnd62XS) { 
let cmpyo9F = this._lc('cNv8KQmmo', {parent:component,parentTop:layout,state:'stXgsd6'});
}else { 
let el_sldR = eo('div',null,null,`class`,`m-t-2`);
let el1mJr3 = eo('h1',null,null,`class`,`text-center m-b-2 bold`);
text(`Top Participants`);
ec('h1');
let elKg5hK = eo('table',null,null,`class`,`table table-bordered`);
let elkl9nR = eo('thead');
let elyI7Rs = eo('tr');
let elSer9z = eo('th');
text(`Participant`);
ec('th');
let eldS4iw = eo('th');
text(`Total words`);
ec('th');
let elT2nZQ = eo('th');
text(`Total rewards`);
ec('th');
ec('tr');
ec('thead');
let elAoGiJ = eo('tbody');
for (let index in component.participants) {
let participant = component.participants[index]; 
 let iiDcK4 = 'wbjxOhs' + index;
let el2okMi = eo('tr','hDQQ_DTqOCca' + index+iiDcK4);
let elOnc1c = eo('td','IANff'+iiDcK4);
let el7iQKq = eo('span','25hff'+iiDcK4,null,`class`,`mr-1`);
let elhCnfS = eo('span','iQvff'+iiDcK4);
text(Number(Number(index) + 1).format());
ec('span');
text(`-`);
ec('span');
let el3GsfD = ev('img','ru5ff'+iiDcK4,null,`src`,`${userImage(participant.user)}`,`class`,`u-image img-thumbnail`,`title`,`${userName(participant.user)}`,`alt`,`${userName(participant.user)}`);
let elfpPRU = eo('span','mFDff'+iiDcK4,null,`class`,`mr-1`);
text(userName(participant.user));
ec('span');
let cmphHKT = this._lc('cvK1oTQOf', {parent:component,parentTop:layout,props:{id:participant.user.id},attrs:{id:`${participant.user.id}`},state:'stxIMcG',insideLoop:true,index:"" +iiDcK4});
ec('td');
let elLl2AD = eo('td','ovBff'+iiDcK4,null,`class`,`total-words`);
text(participant.total.word.format());
ec('td');
let el3XqzE = eo('td','ZJmff'+iiDcK4,null,`class`,`total-reward`);
let cmphq4V = this._lc('cwlOHvzVT', {parent:component,parentTop:layout,props:{coins:participant.reward.word},state:'stxIMcG',insideLoop:true,index:"" +iiDcK4});
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