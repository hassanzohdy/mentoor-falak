_Component({
                selector: 'english-top-participants-page',
                c: 'EnglishTopParticipantsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','participants'],
                children: {cUZEbiHcl:'flk-spinner',cjKb1o1So:'user-online',c7NWmhcNW:'gold-icon',cRnTytYEu:'layout'},
                render: function (component) {
                    let cmpg_oR = this._lc('cRnTytYEu', {parent:component,content:(layout) => {let elRcXVe = eo('h1',null,null,`class`,`p-r-2 text-center text-sm-left`);
text(`English As A Foreigner`);
let el5h3eZ = eo('a',null,null,`href`,`/english`,`class`,`float-sm-right mt-sm-0 mt-4 mr-3 d-inline-block btn btn-purple bold`);
let el7OVUb = eo('i',null,null,`class`,`${fas('angle-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to Topics list`);
ec('a');
ec('h1');
let cnd6kUE = component.isLoading;
this.setState('stlqWad', cnd6kUE);
let cnd6FDD = !(cnd6kUE);
this.setState('stU1SWF', cnd6FDD);
if (cnd6kUE) { 
let cmpxtby = this._lc('cUZEbiHcl', {parent:component,parentTop:layout,state:'stlqWad'});
}else { 
let elg_uhE = eo('div',null,null,`class`,`m-t-2`);
let elxeBPa = eo('h1',null,null,`class`,`text-center m-b-2 bold`);
text(`Top Participants`);
ec('h1');
let ellobQB = eo('table',null,null,`class`,`table table-bordered`);
let elF0h0o = eo('thead');
let eliJDcZ = eo('tr');
let elqoejA = eo('th');
text(`Participant`);
ec('th');
let elks_n6 = eo('th');
text(`Total words`);
ec('th');
let elNojDb = eo('th');
text(`Total rewards`);
ec('th');
ec('tr');
ec('thead');
let elhmYrr = eo('tbody');
for (let index in component.participants) {
let participant = component.participants[index]; 
 let iiWCqX = '3cSn7kR' + index;
let elntegK = eo('tr','tBvAqBOAQP5U' + index+iiWCqX);
let elEJaBm = eo('td','EQOff'+iiWCqX);
let elQ_O_u = eo('span','OqOff'+iiWCqX,null,`class`,`mr-1`);
let el3y85T = eo('span','dbLff'+iiWCqX);
text(Number(Number(index) + 1).format());
ec('span');
text(`-`);
ec('span');
let el3hdv9 = ev('img','dzxff'+iiWCqX,null,`src`,`${userImage(participant.user)}`,`class`,`u-image img-thumbnail`,`title`,`${userName(participant.user)}`,`alt`,`${userName(participant.user)}`);
let eluxZxL = eo('span','pB9ff'+iiWCqX,null,`class`,`mr-1`);
text(userName(participant.user));
ec('span');
let cmptodV = this._lc('cjKb1o1So', {parent:component,parentTop:layout,props:{id:participant.user.id},attrs:{id:`${participant.user.id}`},state:'stU1SWF',insideLoop:true,index:"" +iiWCqX});
ec('td');
let el4_pU1 = eo('td','Fw0ff'+iiWCqX,null,`class`,`total-words`);
text(participant.total.word.format());
ec('td');
let elPbizK = eo('td','n65ff'+iiWCqX,null,`class`,`total-reward`);
let cmpaHfo = this._lc('c7NWmhcNW', {parent:component,parentTop:layout,props:{coins:participant.reward.word},state:'stU1SWF',insideLoop:true,index:"" +iiWCqX});
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