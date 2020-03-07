_Component({
                selector: 'poll-details-page',
                c: 'PollDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','poll','answersIds','voteAnswer','currentAnswer','votingConfirm','user','confirmClosingPoll','vote','closePoll'],
                children: {cjs7nt0Uq:'flk-spinner',covcO4ew8:'markdown',cnNku3Kut:'flk-mdb-checkbox',cNAzJtvSg:'flk-mdb-checkbox',cdVbkOdmw:'layout',cJgZoR5Z4:'flk-alert',cpqQ8a4Yk:'flk-alert'},
                render: function (component) {
                    let cmp37FL = this._lc('cdVbkOdmw', {parent:component,content:(layout) => {let cnd4Mmk = component.isLoading;
this.setState('stOWTtO', cnd4Mmk);
let cnd_oc3 = !(cnd4Mmk);
this.setState('st02IM9', cnd_oc3);
if (cnd4Mmk) { 
let cmpihfS = this._lc('cjs7nt0Uq', {parent:component,parentTop:layout,state:'stOWTtO'});
}else { 
let elPQJK_ = eo('h1');
let elfBfR8 = eo('span');
text(component.poll.title);
ec('span');
let el7INXx = eo('span',null,null,`class`,`btn btn-sm bold ml-2 v-middle ${cls({'btn-success': component.poll.closed === false, 'btn-danger': component.poll.closed === true})}`);
text( component.poll.closed ? 'Closed' : 'Voting' );
ec('span');
ec('h1');
let cmpLBEC = this._lc('covcO4ew8', {parent:component,parentTop:layout,props:{content:component.poll.description},state:'st02IM9'});
let el8Ip5M = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`class`,`m-t-2`);
component.form = el8Ip5M;

                if (! el8Ip5M.formHandler) {
                    window.cfrmdlr = el8Ip5M.formHandler = new FormHandler(el8Ip5M, component);
                } else {
                    window.cfrmdlr = el8Ip5M.formHandler;
                }
            let elQ5oh_ = eo('ul',null,null,`class`,`answers-list`);
for (let i in component.poll.answers) {
let answer = component.poll.answers[i]; 
 let iivtGp = 'agcjjvM' + i;
let el8OmPS = eo('li','xSi3KsTC1rw6' + i+iivtGp,null,`class`,`answer`);
let cndg6va = answer.votes.length > 0;
this.setState('stuTJAb', cndg6va);
let cndwbMD = !(cndg6va);
this.setState('stc5XF0', cndwbMD);
if (cndg6va) { 
let elt9j4l = eo('span','pBTff'+iivtGp,null, 'style', {width: (answer.votes.length * 100 / component.poll.totalVotes) + '%'},`class`,`bg`);
ec('span');
}let cndDvfF = component.poll.userHasVoted || component.poll.closed;
this.setState('st3rpvU', cndDvfF);
let cndcHr3 = !(cndDvfF);
this.setState('stvVtdn', cndcHr3);
if (cndDvfF) { 
let elJIb70 = eo('span','OReff'+iivtGp,null,`class`,`text`);
text(answer.answer);
ec('span');
}else { 
let cndG5Tq = component.poll.allowMultipleVotes;
this.setState('stKTVKX', cndG5Tq);
let cndli_u = !(cndG5Tq);
this.setState('stxFaiu', cndli_u);
if (cndG5Tq) { 
let cmpFGFA = this._lc('cnNku3Kut', {parent:component,parentTop:layout,props:{checked:component.answersIds.includes(answer.id),label:answer.answer,value:answer.id},events:{onchange:function(e) {let $el = this; component.voteAnswer(answer)}},boolAttrs:{checked:component.answersIds.includes(answer.id)},attrs:{name:`${(`answersIds[]`).toInputName()}`,type:'checkbox'},state:'stKTVKX',insideLoop:true,index:"" +iivtGp});
}else { 
let cmpDLS_ = this._lc('cNAzJtvSg', {parent:component,parentTop:layout,props:{checked:component.currentAnswer == answer.id,label:answer.answer,value:answer.id},events:{onchange:function(e) {let $el = this; component.voteAnswer(answer)}},boolAttrs:{checked:component.currentAnswer == answer.id},attrs:{name:`${(`answersIds`).toInputName()}`,type:'radio'},state:'stxFaiu',insideLoop:true,index:"" +iivtGp});
}}let eluPKhG = eo('div','_mvff'+iivtGp,null,`class`,`voters`);
for (let i in answer.displayedVotes) {
let voter = answer.displayedVotes[i]; 
 let ii8Cs0 = 'Jn4Tr9W' + i;
let elZNLQm = eo('div','JupEyT6Qw9Nd' + i+iivtGp+ii8Cs0,null,`class`,`voter`);
let elYr43u = ev('img','S0Qff'+iivtGp+ii8Cs0,null,`src`,`${voter.createdBy.image}`,`title`,`${voter.createdBy.name}`,`class`,`circle`,`alt`,`${voter.createdBy.name}`);

                    setTimeout(function () {
                        let $el = elYr43u;
                        
            true && tippyTooltip($el, {arrow:true,content:`${voter.createdBy.name}`});
        ;
                    }, 20);                
                ec('div');
}
let cndw7qy = answer.remainingVotes > 0;
this.setState('strpxms', cndw7qy);
if (cndw7qy) { 
let el5yUPS = eo('div','oL3ff'+iivtGp,null,`class`,`remaining`);
let elsPwsV = eo('i','Qooff'+iivtGp,null,`class`,`${fas('plus')} icon`);
ec('i');
text( answer.remainingVotes );
ec('div');
}ec('div');
ec('li');
}
ec('ul');
let cndyCyi = ! component.poll.userHasVoted;
this.setState('stsqw1a', cndyCyi);
if (cndyCyi) { 
let elpuLHZ = eo('button','kWOf',null, eventListeners, {onclick:[function(e) {var $el = this;component.votingConfirm = true;}]}, boolAttrs, {disabled:! component.user.isLoggedIn() || Is.empty(component.answersIds) && ! component.currentAnswer},`class`,`btn btn-info bold`,`type`,`button`);
let cndSeRR = component.user.isLoggedIn();
this.setState('stDqxzn', cndSeRR);
let cnd1jqj = !(cndSeRR);
this.setState('stjrd78', cnd1jqj);
if (cndSeRR) { 
let elcGIc6 = eo('span','VaPf');
text(`Vote`);
ec('span');
}else { 
let elYRFqs = eo('span');
text(`Login to vote`);
ec('span');
}ec('button');
}ec('form');
let cndMaRl = component.user.isLoggedIn() && ! component.poll.closed && [component.poll.createdBy.id, 1].includes(component.user.id);
this.setState('st5x4mI', cndMaRl);
if (cndMaRl) { 
let elTPx8t = eo('button','TSxf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmClosingPoll = true}]},`class`,`btn btn-danger bold`);
text(`Close Poll`);
ec('button');
}}}});
let cndLyEa = component.votingConfirm;
this.setState('stZbFD2', cndLyEa);
if (cndLyEa) { 
let cmpeq7S = this._lc('cJgZoR5Z4', {parent:component,events:{onclose:function(e) {let $el = this; component.votingConfirm = false;},onconfirm:function(e) {let $el = this; component.vote()}},state:'stZbFD2'});
}let cndvgMb = component.confirmClosingPoll;
this.setState('sttrEz9', cndvgMb);
if (cndvgMb) { 
let cmpYJMY = this._lc('cpqQ8a4Yk', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmClosingPoll = false;},onconfirm:function(e) {let $el = this; component.closePoll()}},state:'sttrEz9'});
}
                    this.isReadyToGo();
                }
        });