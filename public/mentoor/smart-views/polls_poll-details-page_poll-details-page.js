_Component({
                selector: 'poll-details-page',
                c: 'PollDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','poll','answersIds','voteAnswer','currentAnswer','votingConfirm','user','confirmClosingPoll','vote','closePoll'],
                children: {ceU9WPNz5:'flk-spinner',c0o1x1OSd:'markdown',cB6h2eE1d:'flk-mdb-checkbox',c5MVjiOXS:'flk-mdb-checkbox',csYRHf5w1:'layout',cvy1Clk7X:'flk-alert',cF8NcpvZh:'flk-alert'},
                render: function (component) {
                    let cmpwi11 = this._lc('csYRHf5w1', {parent:component,content:(layout) => {let cndyWtf = component.isLoading;
this.setState('stRBkBz', cndyWtf);
let cndPwIa = !(cndyWtf);
this.setState('stj59nD', cndPwIa);
if (cndyWtf) { 
let cmpVW7y = this._lc('ceU9WPNz5', {parent:component,parentTop:layout,state:'stRBkBz'});
}else { 
let elWb6VU = eo('h1');
let elR111S = eo('span');
text(component.poll.title);
ec('span');
let els4Jqs = eo('span',null,null,`class`,`btn btn-sm bold ml-2 v-middle`);
els4Jqs.cls = {'btn-success': component.poll.closed === false, 'btn-danger': component.poll.closed === true};

            for (let className in els4Jqs.cls) {
                els4Jqs.classList.toggle(className, els4Jqs.cls[className]);
            }  
            text( component.poll.closed ? 'Closed' : 'Voting' );
ec('span');
ec('h1');
let cmpMm3F = this._lc('c0o1x1OSd', {parent:component,parentTop:layout,props:{content:component.poll.description},state:'stj59nD'});
let el4F1s9 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`class`,`m-t-2`);
component.form = el4F1s9;

                if (! el4F1s9.formHandler) {
                    window.cfrmdlr = el4F1s9.formHandler = new FormHandler(el4F1s9, component);
                } else {
                    window.cfrmdlr = el4F1s9.formHandler;
                }
            let elmYxoR = eo('ul',null,null,`class`,`answers-list`);
for (let i in component.poll.answers) {
let answer = component.poll.answers[i]; 
 let ii_wzL = 'glLrZSH' + i;
let elLg82G = eo('li','yLUr5rqWCJWN' + i+ii_wzL,null,`class`,`answer`);
let cndB4M7 = answer.votes.length > 0;
this.setState('stfvX4m', cndB4M7);
let cnd7wKm = !(cndB4M7);
this.setState('stYDDsb', cnd7wKm);
if (cndB4M7) { 
let elwMNA4 = eo('span','B21ff'+ii_wzL,null, 'style', {width: (answer.votes.length * 100 / component.poll.totalVotes) + '%'},`class`,`bg`);
ec('span');
}let cndlU6y = component.poll.userHasVoted || component.poll.closed;
this.setState('stfXSLb', cndlU6y);
let cnd4CMq = !(cndlU6y);
this.setState('st7bO_j', cnd4CMq);
if (cndlU6y) { 
let elDpDU2 = eo('span','Lgfff'+ii_wzL,null,`class`,`text`);
text(answer.answer);
ec('span');
}else { 
let cnd7GOp = component.poll.allowMultipleVotes;
this.setState('styNXuP', cnd7GOp);
let cnd1yui = !(cnd7GOp);
this.setState('stkuTT0', cnd1yui);
if (cnd7GOp) { 
let cmpzzVH = this._lc('cB6h2eE1d', {parent:component,parentTop:layout,props:{checked:component.answersIds.includes(answer.id),label:answer.answer,value:answer.id},events:{onchange:function(e) {let $el = this; component.voteAnswer(answer)}},boolAttrs:{checked:component.answersIds.includes(answer.id)},attrs:{name:`${(`answersIds[]`).toInputName()}`,type:'checkbox'},state:'styNXuP',insideLoop:true,index:"" +ii_wzL});
}else { 
let cmpyprU = this._lc('c5MVjiOXS', {parent:component,parentTop:layout,props:{checked:component.currentAnswer == answer.id,label:answer.answer,value:answer.id},events:{onchange:function(e) {let $el = this; component.voteAnswer(answer)}},boolAttrs:{checked:component.currentAnswer == answer.id},attrs:{name:`${(`answersIds`).toInputName()}`,type:'radio'},state:'stkuTT0',insideLoop:true,index:"" +ii_wzL});
}}let elZT6Yj = eo('div','Zdpff'+ii_wzL,null,`class`,`voters`);
for (let i in answer.displayedVotes) {
let voter = answer.displayedVotes[i]; 
 let iifla5 = 'WJk8JwN' + i;
let elBaayy = eo('div','qIQCdsTEhJwv' + i+ii_wzL+iifla5,null,`class`,`voter`);
let el9W7Z6 = ev('img','VLhff'+ii_wzL+iifla5,null,`src`,`${voter.createdBy.image}`,`title`,`${voter.createdBy.name}`,`class`,`circle`,`alt`,`${voter.createdBy.name}`);

                    setTimeout(function () {
                        let $el = el9W7Z6;
                        
            true && tippyTooltip($el, {arrow:true,content:`${voter.createdBy.name}`});
        ;
                    }, 20);                
                ec('div');
}
let cndNGlA = answer.remainingVotes > 0;
this.setState('stSg3DG', cndNGlA);
if (cndNGlA) { 
let el8lzbd = eo('div','8waff'+ii_wzL,null,`class`,`remaining`);
let elxFhh2 = eo('i','W7Qff'+ii_wzL,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
text( answer.remainingVotes );
ec('div');
}ec('div');
ec('li');
}
ec('ul');
let cndBQOF = ! component.poll.userHasVoted;
this.setState('steBdyD', cndBQOF);
if (cndBQOF) { 
let elbPh2s = eo('button','5edf',null, eventListeners, {onclick:[function(e) {var $el = this;component.votingConfirm = true;}]}, boolAttrs, {disabled:! component.user.isLoggedIn() || Is.empty(component.answersIds) && ! component.currentAnswer},`class`,`btn btn-info bold`,`type`,`button`);
let cndP5Vv = component.user.isLoggedIn();
this.setState('stById5', cndP5Vv);
let cnd1YM2 = !(cndP5Vv);
this.setState('stU8lyd', cnd1YM2);
if (cndP5Vv) { 
let elP75SU = eo('span','91Nf');
text(`Vote`);
ec('span');
}else { 
let elPPXGu = eo('span');
text(`Login to vote`);
ec('span');
}ec('button');
}ec('form');
let cndvpZ4 = component.user.isLoggedIn() && ! component.poll.closed && [component.poll.createdBy.id, 1].includes(component.user.id);
this.setState('stbpG1K', cndvpZ4);
if (cndvpZ4) { 
let elFcNSC = eo('button','OtHf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmClosingPoll = true}]},`class`,`btn btn-danger bold`);
text(`Close Poll`);
ec('button');
}}}});
let cndtGZY = component.votingConfirm;
this.setState('str8m5f', cndtGZY);
if (cndtGZY) { 
let cmppRfW = this._lc('cvy1Clk7X', {parent:component,events:{onclose:function(e) {let $el = this; component.votingConfirm = false;},onconfirm:function(e) {let $el = this; component.vote()}},state:'str8m5f'});
}let cndaRFo = component.confirmClosingPoll;
this.setState('stFY7gC', cndaRFo);
if (cndaRFo) { 
let cmpgrWX = this._lc('cF8NcpvZh', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmClosingPoll = false;},onconfirm:function(e) {let $el = this; component.closePoll()}},state:'stFY7gC'});
}
                    this.isReadyToGo();
                }
        });