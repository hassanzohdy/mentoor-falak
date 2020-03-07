_Component({
                selector: 'english-top-participants-page',
                c: 'EnglishTopParticipantsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','participants'],
                children: {cdGPs4cpG:'flk-spinner',cGTqb2IhJ:'user-online',c02Kd6O4V:'gold-icon',caX37xAgZ:'layout'},
                render: function (component) {
                    let cmpcOTy = this._lc('caX37xAgZ', {parent:component,content:(layout) => {let elVUe4_ = eo('h1',null,null,`class`,`p-r-2 text-center text-sm-left`);
text(`English As A Foreigner`);
let elG7FQH = eo('a',null,null,`href`,`/english`,`class`,`float-sm-right mt-sm-0 mt-4 mr-3 d-inline-block btn btn-purple bold`);
let elC0zYc = eo('i',null,null,`class`,`${fas('angle-left')} mr-2 icon`);
ec('i');
text(`Back to Topics list`);
ec('a');
ec('h1');
let cnd3BUD = component.isLoading;
this.setState('stHyKKF', cnd3BUD);
let cndrC7N = !(cnd3BUD);
this.setState('stEqvk7', cndrC7N);
if (cnd3BUD) { 
let cmpv2JD = this._lc('cdGPs4cpG', {parent:component,parentTop:layout,state:'stHyKKF'});
}else { 
let elMA6rv = eo('div',null,null,`class`,`m-t-2`);
let el5zr8t = eo('h1',null,null,`class`,`text-center m-b-2 bold`);
text(`Top Participants`);
ec('h1');
let elhW6ub = eo('table',null,null,`class`,`table table-bordered`);
let elSLsny = eo('thead');
let elQDwbg = eo('tr');
let elVZcrj = eo('th');
text(`Participant`);
ec('th');
let elEZlYD = eo('th');
text(`Total words`);
ec('th');
let elZPXlg = eo('th');
text(`Total rewards`);
ec('th');
ec('tr');
ec('thead');
let elfnwHW = eo('tbody');
for (let index in component.participants) {
let participant = component.participants[index]; 
 let iiLiAk = 'VU2YCWF' + index;
let el40SjS = eo('tr','T2d3CvuUbmNB' + index+iiLiAk);
let el18YrJ = eo('td','eASff'+iiLiAk);
let elzHvlk = eo('span','xSRff'+iiLiAk,null,`class`,`mr-1`);
let elSv10Q = eo('span','jqiff'+iiLiAk);
text(Number(Number(index) + 1).format());
ec('span');
text(`-`);
ec('span');
let elutNEe = ev('img','nKqff'+iiLiAk,null,`src`,`${userImage(participant.user)}`,`class`,`u-image img-thumbnail`,`title`,`${userName(participant.user)}`,`alt`,`${userName(participant.user)}`);
let elVy7QJ = eo('span','J7Hff'+iiLiAk,null,`class`,`mr-1`);
text(userName(participant.user));
ec('span');
let cmpLzei = this._lc('cGTqb2IhJ', {parent:component,parentTop:layout,props:{id:participant.user.id},attrs:{id:`${participant.user.id}`},state:'stEqvk7',insideLoop:true,index:"" +iiLiAk});
ec('td');
let eluJoZ0 = eo('td','A_8ff'+iiLiAk,null,`class`,`total-words`);
text(participant.total.word.format());
ec('td');
let elbSf_q = eo('td','GFqff'+iiLiAk,null,`class`,`total-reward`);
let cmpaako = this._lc('c02Kd6O4V', {parent:component,parentTop:layout,props:{coins:participant.reward.word},state:'stEqvk7',insideLoop:true,index:"" +iiLiAk});
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