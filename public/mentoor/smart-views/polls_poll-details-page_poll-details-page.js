_Component({
                selector: 'poll-details-page',
                c: 'PollDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','poll','answersIds','voteAnswer','currentAnswer','votingConfirm','user','confirmClosingPoll','vote','closePoll'],
                children: {cxaEXxbxV:'flk-spinner',cCkEQ9orK:'markdown',cL5pxQJUE:'flk-mdb-checkbox',cl0rzxN6j:'flk-mdb-checkbox',c7ae__FIb:'layout',c53J2OQ7W:'flk-alert',cXFH68vOA:'flk-alert'},
                render: function (component) {
                    let cmpl6VA = this._lc('c7ae__FIb', {parent:component,content:(layout) => {let cndUnow = component.isLoading;
this.setState('stdCtuh', cndUnow);
let cnd39GL = !(cndUnow);
this.setState('stgegz2', cnd39GL);
if (cndUnow) { 
let cmpdbSv = this._lc('cxaEXxbxV', {parent:component,parentTop:layout,state:'stdCtuh'});
}else { 
let elDq70j = eo('h1');
let eleX3EE = eo('span');
text(component.poll.title);
ec('span');
let elQLchi = eo('span',null,null,`class`,`btn btn-sm bold ml-2 v-middle`);
elQLchi.cls = {'btn-success': component.poll.closed === false, 'btn-danger': component.poll.closed === true};

            for (let className in elQLchi.cls) {
                elQLchi.classList.toggle(className, elQLchi.cls[className]);
            }  
            text( component.poll.closed ? 'Closed' : 'Voting' );
ec('span');
ec('h1');
let cmp7HzL = this._lc('cCkEQ9orK', {parent:component,parentTop:layout,props:{content:component.poll.description},state:'stgegz2'});
let elK2Md4 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`class`,`m-t-2`);
component.form = elK2Md4;

                if (! elK2Md4.formHandler) {
                    window.cfrmdlr = elK2Md4.formHandler = new FormHandler(elK2Md4, component);
                } else {
                    window.cfrmdlr = elK2Md4.formHandler;
                }
            let elA9rQU = eo('ul',null,null,`class`,`answers-list`);
for (let i in component.poll.answers) {
let answer = component.poll.answers[i]; 
 let iia9Ai = 'TCWq_k5' + i;
let elvN3Eh = eo('li','uFmp5ZgtQRge' + i+iia9Ai,null,`class`,`answer`);
let cndyuoR = answer.votes.length > 0;
this.setState('stUuH3F', cndyuoR);
let cndPGNc = !(cndyuoR);
this.setState('sti_HJs', cndPGNc);
if (cndyuoR) { 
let elv80ic = eo('span','jnfff'+iia9Ai,null, 'style', {width: (answer.votes.length * 100 / component.poll.totalVotes) + '%'},`class`,`bg`);
ec('span');
}let cndQAH3 = component.poll.userHasVoted || component.poll.closed;
this.setState('stLwTRe', cndQAH3);
let cndMfxb = !(cndQAH3);
this.setState('stFe3CI', cndMfxb);
if (cndQAH3) { 
let elBhKRo = eo('span','sI0ff'+iia9Ai,null,`class`,`text`);
text(answer.answer);
ec('span');
}else { 
let cndResR = component.poll.allowMultipleVotes;
this.setState('stihfz3', cndResR);
let cndPjd5 = !(cndResR);
this.setState('sttj6ru', cndPjd5);
if (cndResR) { 
let cmpv7qU = this._lc('cL5pxQJUE', {parent:component,parentTop:layout,props:{checked:component.answersIds.includes(answer.id),label:answer.answer,value:answer.id},events:{onchange:function(e) {let $el = this; component.voteAnswer(answer)}},boolAttrs:{checked:component.answersIds.includes(answer.id)},attrs:{name:`${(`answersIds[]`).toInputName()}`,type:'checkbox'},state:'stihfz3',insideLoop:true,index:"" +iia9Ai});
}else { 
let cmpxnMm = this._lc('cl0rzxN6j', {parent:component,parentTop:layout,props:{checked:component.currentAnswer == answer.id,label:answer.answer,value:answer.id},events:{onchange:function(e) {let $el = this; component.voteAnswer(answer)}},boolAttrs:{checked:component.currentAnswer == answer.id},attrs:{name:`${(`answersIds`).toInputName()}`,type:'radio'},state:'sttj6ru',insideLoop:true,index:"" +iia9Ai});
}}let elmvckk = eo('div','WhPff'+iia9Ai,null,`class`,`voters`);
for (let i in answer.displayedVotes) {
let voter = answer.displayedVotes[i]; 
 let ii94ds = 'JWrDt9q' + i;
let el0lXId = eo('div','38ZdLuqS6C4B' + i+iia9Ai+ii94ds,null,`class`,`voter`);
let el5ol6H = ev('img','ogEff'+iia9Ai+ii94ds,null,`src`,`${voter.createdBy.image}`,`title`,`${voter.createdBy.name}`,`class`,`circle`,`alt`,`${voter.createdBy.name}`);

                    setTimeout(function () {
                        let $el = el5ol6H;
                        
            true && tippyTooltip($el, {arrow:true,content:`${voter.createdBy.name}`});
        ;
                    }, 20);                
                ec('div');
}
let cnd6eNH = answer.remainingVotes > 0;
this.setState('stY69h5', cnd6eNH);
if (cnd6eNH) { 
let elHjB9P = eo('div','un9ff'+iia9Ai,null,`class`,`remaining`);
let elq2alN = eo('i','Qy5ff'+iia9Ai,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
text( answer.remainingVotes );
ec('div');
}ec('div');
ec('li');
}
ec('ul');
let cndKQ6L = ! component.poll.userHasVoted;
this.setState('stsirrM', cndKQ6L);
if (cndKQ6L) { 
let elc63dN = eo('button','ehof',null, eventListeners, {onclick:[function(e) {var $el = this;component.votingConfirm = true;}]}, boolAttrs, {disabled:! component.user.isLoggedIn() || Is.empty(component.answersIds) && ! component.currentAnswer},`class`,`btn btn-info bold`,`type`,`button`);
let cnd6RD1 = component.user.isLoggedIn();
this.setState('stvN9FI', cnd6RD1);
let cndcnmL = !(cnd6RD1);
this.setState('stM8zyj', cndcnmL);
if (cnd6RD1) { 
let el0kIzB = eo('span','aALf');
text(`Vote`);
ec('span');
}else { 
let el6PUPq = eo('span');
text(`Login to vote`);
ec('span');
}ec('button');
}ec('form');
let cndFfLg = component.user.isLoggedIn() && ! component.poll.closed && [component.poll.createdBy.id, 1].includes(component.user.id);
this.setState('st8dGPT', cndFfLg);
if (cndFfLg) { 
let elMXbN2 = eo('button','ZHAf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmClosingPoll = true}]},`class`,`btn btn-danger bold`);
text(`Close Poll`);
ec('button');
}}}});
let cndVzF1 = component.votingConfirm;
this.setState('sttsWyp', cndVzF1);
if (cndVzF1) { 
let cmpTfOH = this._lc('c53J2OQ7W', {parent:component,events:{onclose:function(e) {let $el = this; component.votingConfirm = false;},onconfirm:function(e) {let $el = this; component.vote()}},state:'sttsWyp'});
}let cnd0utC = component.confirmClosingPoll;
this.setState('stsOjMA', cnd0utC);
if (cnd0utC) { 
let cmpShxc = this._lc('cXFH68vOA', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmClosingPoll = false;},onconfirm:function(e) {let $el = this; component.closePoll()}},state:'stsOjMA'});
}
                    this.isReadyToGo();
                }
        });