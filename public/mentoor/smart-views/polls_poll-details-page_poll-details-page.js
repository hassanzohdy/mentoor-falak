_Component({
                selector: 'poll-details-page',
                c: 'PollDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','poll','answersIds','voteAnswer','currentAnswer','votingConfirm','user','confirmClosingPoll','vote','closePoll'],
                children: {cuoyXTTAl:'flk-spinner',c_lYcd_W_:'markdown',cSjYdTfwn:'flk-mdb-checkbox',cBe6v1Voy:'flk-mdb-checkbox',cDWgat7dR:'layout',ctN9HlS2j:'flk-alert',c_VdUxkD3:'flk-alert'},
                render: function (component) {
                    let cmpvpmy = this._lc('cDWgat7dR', {parent:component,content:(layout) => {let cnd49mh = component.isLoading;
this.setState('st0o_EO', cnd49mh);
let cndPp1M = !(cnd49mh);
this.setState('stU5pKU', cndPp1M);
if (cnd49mh) { 
let cmpIWh_ = this._lc('cuoyXTTAl', {parent:component,parentTop:layout,state:'st0o_EO'});
}else { 
let elRtVFX = eo('h1');
let eleEFYl = eo('span');
text(component.poll.title);
ec('span');
let elO3IBO = eo('span',null,null,`class`,`btn btn-sm bold ml-2 v-middle ${cls({'btn-success': component.poll.closed === false, 'btn-danger': component.poll.closed === true})}`);
text( component.poll.closed ? 'Closed' : 'Voting' );
ec('span');
ec('h1');
let cmpc1Pi = this._lc('c_lYcd_W_', {parent:component,parentTop:layout,props:{content:component.poll.description},state:'stU5pKU'});
let elk7jsZ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`class`,`m-t-2`);
component.form = elk7jsZ;

                if (! elk7jsZ.formHandler) {
                    window.cfrmdlr = elk7jsZ.formHandler = new FormHandler(elk7jsZ, component);
                } else {
                    window.cfrmdlr = elk7jsZ.formHandler;
                }
            let el6Plwu = eo('ul',null,null,`class`,`answers-list`);
for (let i in component.poll.answers) {
let answer = component.poll.answers[i]; 
 let iik0Th = 'OcS4G8b' + i;
let elnIxi_ = eo('li','5cs0kmTwWw_w' + i+iik0Th,null,`class`,`answer`);
let cndq7ZV = answer.votes.length > 0;
this.setState('stZVILB', cndq7ZV);
let cndcMNs = !(cndq7ZV);
this.setState('stmq92Z', cndcMNs);
if (cndq7ZV) { 
let el2sBq1 = eo('span','_SEff'+iik0Th,null, 'style', {width: (answer.votes.length * 100 / component.poll.totalVotes) + '%'},`class`,`bg`);
ec('span');
}let cndLxwG = component.poll.userHasVoted || component.poll.closed;
this.setState('stqN7q2', cndLxwG);
let cnd3kRT = !(cndLxwG);
this.setState('stcIxUF', cnd3kRT);
if (cndLxwG) { 
let el0HRSS = eo('span','Zojff'+iik0Th,null,`class`,`text`);
text(answer.answer);
ec('span');
}else { 
let cndNBM_ = component.poll.allowMultipleVotes;
this.setState('stnofy8', cndNBM_);
let cnd0kRl = !(cndNBM_);
this.setState('stCjIkB', cnd0kRl);
if (cndNBM_) { 
let cmpjsmm = this._lc('cSjYdTfwn', {parent:component,parentTop:layout,props:{checked:component.answersIds.includes(answer.id),label:answer.answer,value:answer.id},events:{onchange:function(e) {let $el = this; component.voteAnswer(answer)}},boolAttrs:{checked:component.answersIds.includes(answer.id)},attrs:{name:`${(`answersIds[]`).toInputName()}`,type:'checkbox'},state:'stnofy8',insideLoop:true,index:"" +iik0Th});
}else { 
let cmpbgmc = this._lc('cBe6v1Voy', {parent:component,parentTop:layout,props:{checked:component.currentAnswer == answer.id,label:answer.answer,value:answer.id},events:{onchange:function(e) {let $el = this; component.voteAnswer(answer)}},boolAttrs:{checked:component.currentAnswer == answer.id},attrs:{name:`${(`answersIds`).toInputName()}`,type:'radio'},state:'stCjIkB',insideLoop:true,index:"" +iik0Th});
}}let elcfZIf = eo('div','fCfff'+iik0Th,null,`class`,`voters`);
for (let i in answer.displayedVotes) {
let voter = answer.displayedVotes[i]; 
 let iieJSQ = 'IuxYXiL' + i;
let elHSE2C = eo('div','To6n6szW5C8i' + i+iik0Th+iieJSQ,null,`class`,`voter`);
let elxNRIk = ev('img','RUlff'+iik0Th+iieJSQ,null,`src`,`${voter.createdBy.image}`,`title`,`${voter.createdBy.name}`,`class`,`circle`,`alt`,`${voter.createdBy.name}`);

                    setTimeout(function () {
                        let $el = elxNRIk;
                        
            true && tippyTooltip($el, {arrow:true,content:`${voter.createdBy.name}`});
        ;
                    }, 20);                
                ec('div');
}
let cnd9c5a = answer.remainingVotes > 0;
this.setState('stjMx_i', cnd9c5a);
if (cnd9c5a) { 
let el20IXw = eo('div','7vjff'+iik0Th,null,`class`,`remaining`);
let el32Uy5 = eo('i','AMGff'+iik0Th,null,`class`,`${fas('plus')} icon`);
ec('i');
text( answer.remainingVotes );
ec('div');
}ec('div');
ec('li');
}
ec('ul');
let cndmz8A = ! component.poll.userHasVoted;
this.setState('stf2bBK', cndmz8A);
if (cndmz8A) { 
let elViWHR = eo('button','H_Wf',null, eventListeners, {onclick:[function(e) {var $el = this;component.votingConfirm = true;}]}, boolAttrs, {disabled:! component.user.isLoggedIn() || Is.empty(component.answersIds) && ! component.currentAnswer},`class`,`btn btn-info bold`,`type`,`button`);
let cnd4n_2 = component.user.isLoggedIn();
this.setState('st6Y8Fw', cnd4n_2);
let cndCLrO = !(cnd4n_2);
this.setState('st7u3IM', cndCLrO);
if (cnd4n_2) { 
let elnuOKt = eo('span','oKwf');
text(`Vote`);
ec('span');
}else { 
let elFkXpJ = eo('span');
text(`Login to vote`);
ec('span');
}ec('button');
}ec('form');
let cnddZ_0 = component.user.isLoggedIn() && ! component.poll.closed && [component.poll.createdBy.id, 1].includes(component.user.id);
this.setState('stSA_VI', cnddZ_0);
if (cnddZ_0) { 
let elAUoW5 = eo('button','SUFf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmClosingPoll = true}]},`class`,`btn btn-danger bold`);
text(`Close Poll`);
ec('button');
}}}});
let cndcPfB = component.votingConfirm;
this.setState('stF83Dq', cndcPfB);
if (cndcPfB) { 
let cmpN69c = this._lc('ctN9HlS2j', {parent:component,events:{onclose:function(e) {let $el = this; component.votingConfirm = false;},onconfirm:function(e) {let $el = this; component.vote()}},state:'stF83Dq'});
}let cndChk9 = component.confirmClosingPoll;
this.setState('stgGgJP', cndChk9);
if (cndChk9) { 
let cmpmvcS = this._lc('c_VdUxkD3', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmClosingPoll = false;},onconfirm:function(e) {let $el = this; component.closePoll()}},state:'stgGgJP'});
}
                    this.isReadyToGo();
                }
        });