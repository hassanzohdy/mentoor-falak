_Component({
                selector: 'poll-details-page',
                c: 'PollDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','poll','answersIds','voteAnswer','currentAnswer','votingConfirm','user','confirmClosingPoll','vote','closePoll'],
                children: {crmUQ027M:'flk-spinner',c15HzkA3O:'markdown',clB5yDzhl:'flk-mdb-checkbox',cifcCr3Bz:'flk-mdb-checkbox',cUGmdmYxK:'layout',cU2Epc1X4:'flk-alert',ch0JJhPP2:'flk-alert'},
                render: function (component) {
                    let cmpzxCj = this._lc('cUGmdmYxK', {parent:component,content:(layout) => {let cndFJde = component.isLoading;
this.setState('stP5zJF', cndFJde);
let cndgJjY = !(cndFJde);
this.setState('stXmio4', cndgJjY);
if (cndFJde) { 
let cmpvxVM = this._lc('crmUQ027M', {parent:component,parentTop:layout,state:'stP5zJF'});
}else { 
let elA79Ap = eo('h1');
let elZq_vK = eo('span');
text(component.poll.title);
ec('span');
let ele4UBE = eo('span',null,null,`class`,`btn btn-sm bold ml-2 v-middle ${cls({'btn-success': component.poll.closed === false, 'btn-danger': component.poll.closed === true})}`);
text( component.poll.closed ? 'Closed' : 'Voting' );
ec('span');
ec('h1');
let cmphUqi = this._lc('c15HzkA3O', {parent:component,parentTop:layout,props:{content:component.poll.description},state:'stXmio4'});
let elcxN03 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`class`,`m-t-2`);
component.form = elcxN03;

                if (! elcxN03.formHandler) {
                    window.cfrmdlr = elcxN03.formHandler = new FormHandler(elcxN03, component);
                } else {
                    window.cfrmdlr = elcxN03.formHandler;
                }
            let elZq0Og = eo('ul',null,null,`class`,`answers-list`);
for (let i in component.poll.answers) {
let answer = component.poll.answers[i]; 
 let iiVlSr = 'vpg6oEN' + i;
let elnuUfz = eo('li','axHFK5kRejOQ' + i+iiVlSr,null,`class`,`answer`);
let cndcSHm = answer.votes.length > 0;
this.setState('stpZRQj', cndcSHm);
let cndKPfn = !(cndcSHm);
this.setState('stnxr4g', cndKPfn);
if (cndcSHm) { 
let elcL8N5 = eo('span','qPfff'+iiVlSr,null, 'style', {width: (answer.votes.length * 100 / component.poll.totalVotes) + '%'},`class`,`bg`);
ec('span');
}let cnd7WuX = component.poll.userHasVoted || component.poll.closed;
this.setState('sts9Nmi', cnd7WuX);
let cndk4ww = !(cnd7WuX);
this.setState('stZOxuI', cndk4ww);
if (cnd7WuX) { 
let elAitcK = eo('span','bjlff'+iiVlSr,null,`class`,`text`);
text(answer.answer);
ec('span');
}else { 
let cndLbNq = component.poll.allowMultipleVotes;
this.setState('stSV5w2', cndLbNq);
let cnd4SHt = !(cndLbNq);
this.setState('stuPnKE', cnd4SHt);
if (cndLbNq) { 
let cmp6CyP = this._lc('clB5yDzhl', {parent:component,parentTop:layout,props:{checked:component.answersIds.includes(answer.id),label:answer.answer,value:answer.id},events:{onchange:function(e) {let $el = this; component.voteAnswer(answer)}},boolAttrs:{checked:component.answersIds.includes(answer.id)},attrs:{name:`${(`answersIds[]`).toInputName()}`,type:'checkbox'},state:'stSV5w2',insideLoop:true,index:"" +iiVlSr});
}else { 
let cmpOehA = this._lc('cifcCr3Bz', {parent:component,parentTop:layout,props:{checked:component.currentAnswer == answer.id,label:answer.answer,value:answer.id},events:{onchange:function(e) {let $el = this; component.voteAnswer(answer)}},boolAttrs:{checked:component.currentAnswer == answer.id},attrs:{name:`${(`answersIds`).toInputName()}`,type:'radio'},state:'stuPnKE',insideLoop:true,index:"" +iiVlSr});
}}let el031uW = eo('div','ADAff'+iiVlSr,null,`class`,`voters`);
for (let i in answer.displayedVotes) {
let voter = answer.displayedVotes[i]; 
 let iiWdTS = '4zhLd7X' + i;
let elD3qrE = eo('div','ehl_D6n7Z3aZ' + i+iiVlSr+iiWdTS,null,`class`,`voter`);
let elsGxCZ = ev('img','gItff'+iiVlSr+iiWdTS,null,`src`,`${voter.createdBy.image}`,`title`,`${voter.createdBy.name}`,`class`,`circle`,`alt`,`${voter.createdBy.name}`);

                    setTimeout(function () {
                        let $el = elsGxCZ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${voter.createdBy.name}`});
        ;
                    }, 20);                
                ec('div');
}
let cndiGNB = answer.remainingVotes > 0;
this.setState('stHBliP', cndiGNB);
if (cndiGNB) { 
let el2ZSOj = eo('div','sZRff'+iiVlSr,null,`class`,`remaining`);
let eleaYW9 = eo('i','tQxff'+iiVlSr,null,`class`,`${fas('plus')} icon`);
ec('i');
text( answer.remainingVotes );
ec('div');
}ec('div');
ec('li');
}
ec('ul');
let cndeLje = ! component.poll.userHasVoted;
this.setState('st4MD26', cndeLje);
if (cndeLje) { 
let elsqVp7 = eo('button','TEsf',null, eventListeners, {onclick:[function(e) {var $el = this;component.votingConfirm = true;}]}, boolAttrs, {disabled:! component.user.isLoggedIn() || Is.empty(component.answersIds) && ! component.currentAnswer},`class`,`btn btn-info bold`,`type`,`button`);
let cndH9ua = component.user.isLoggedIn();
this.setState('st8sRs8', cndH9ua);
let cnd_21_ = !(cndH9ua);
this.setState('stnmEKg', cnd_21_);
if (cndH9ua) { 
let eloa6Vo = eo('span','ADgf');
text(`Vote`);
ec('span');
}else { 
let elmL7m4 = eo('span');
text(`Login to vote`);
ec('span');
}ec('button');
}ec('form');
let cnd6AtO = component.user.isLoggedIn() && ! component.poll.closed && [component.poll.createdBy.id, 1].includes(component.user.id);
this.setState('stCCr7W', cnd6AtO);
if (cnd6AtO) { 
let el_M7hW = eo('button','1UPf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmClosingPoll = true}]},`class`,`btn btn-danger bold`);
text(`Close Poll`);
ec('button');
}}}});
let cndWXpR = component.votingConfirm;
this.setState('sthXX0U', cndWXpR);
if (cndWXpR) { 
let cmphKRn = this._lc('cU2Epc1X4', {parent:component,events:{onclose:function(e) {let $el = this; component.votingConfirm = false;},onconfirm:function(e) {let $el = this; component.vote()}},state:'sthXX0U'});
}let cndaCoe = component.confirmClosingPoll;
this.setState('stEjvqL', cndaCoe);
if (cndaCoe) { 
let cmptAqp = this._lc('ch0JJhPP2', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmClosingPoll = false;},onconfirm:function(e) {let $el = this; component.closePoll()}},state:'stEjvqL'});
}
                    this.isReadyToGo();
                }
        });