_Component({
                selector: 'poll-details-page',
                c: 'PollDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','poll','answersIds','voteAnswer','currentAnswer','votingConfirm','user','confirmClosingPoll','vote','closePoll'],
                children: {chP2z0efi:'flk-spinner',cHHQdvgku:'markdown',cZdXARNUi:'flk-mdb-checkbox',ctExmyz91:'flk-mdb-checkbox',c6QUgewGS:'layout',cv96SvOts:'flk-alert',cvSDozU7P:'flk-alert'},
                render: function (component) {
                    let cmprcwE = this._lc('c6QUgewGS', {parent:component,content:(layout) => {let cndZhGJ = component.isLoading;
this.setState('stKbcoO', cndZhGJ);
let cndjled = !(cndZhGJ);
this.setState('stKVq_o', cndjled);
if (cndZhGJ) { 
let cmpPmIX = this._lc('chP2z0efi', {parent:component,parentTop:layout,state:'stKbcoO'});
}else { 
let elIJOrF = eo('h1');
let el78q9m = eo('span');
text(component.poll.title);
ec('span');
let elAQZ_j = eo('span',null,null,`class`,`btn btn-sm bold ml-2 v-middle`);
elAQZ_j.cls = {'btn-success': component.poll.closed === false, 'btn-danger': component.poll.closed === true};

            for (let className in elAQZ_j.cls) {
                elAQZ_j.classList.toggle(className, elAQZ_j.cls[className]);
            }  
            text( component.poll.closed ? 'Closed' : 'Voting' );
ec('span');
ec('h1');
let cmpAGel = this._lc('cHHQdvgku', {parent:component,parentTop:layout,props:{content:component.poll.description},state:'stKVq_o'});
let els5vJJ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`class`,`m-t-2`);
component.form = els5vJJ;

                if (! els5vJJ.formHandler) {
                    window.cfrmdlr = els5vJJ.formHandler = new FormHandler(els5vJJ, component);
                } else {
                    window.cfrmdlr = els5vJJ.formHandler;
                }
            let el0lKsh = eo('ul',null,null,`class`,`answers-list`);
for (let i in component.poll.answers) {
let answer = component.poll.answers[i]; 
 let iiQS9a = 'kirdIKf' + i;
let el6QDoC = eo('li','MiipXbsym7EH' + i+iiQS9a,null,`class`,`answer`);
let cndIsnX = answer.votes.length > 0;
this.setState('stnIjpa', cndIsnX);
let cndlPTW = !(cndIsnX);
this.setState('st8tKH1', cndlPTW);
if (cndIsnX) { 
let elrOraI = eo('span','sfQff'+iiQS9a,null, 'style', {width: (answer.votes.length * 100 / component.poll.totalVotes) + '%'},`class`,`bg`);
ec('span');
}let cnditID = component.poll.userHasVoted || component.poll.closed;
this.setState('st6cZlt', cnditID);
let cndKNSP = !(cnditID);
this.setState('stst0aS', cndKNSP);
if (cnditID) { 
let elF4Rm5 = eo('span','mUgff'+iiQS9a,null,`class`,`text`);
text(answer.answer);
ec('span');
}else { 
let cndbZUF = component.poll.allowMultipleVotes;
this.setState('stLMAYR', cndbZUF);
let cndVW3d = !(cndbZUF);
this.setState('stCOKDJ', cndVW3d);
if (cndbZUF) { 
let cmpNPvq = this._lc('cZdXARNUi', {parent:component,parentTop:layout,props:{checked:component.answersIds.includes(answer.id),label:answer.answer,value:answer.id},events:{onchange:function(e) {let $el = this; component.voteAnswer(answer)}},boolAttrs:{checked:component.answersIds.includes(answer.id)},attrs:{name:`${(`answersIds[]`).toInputName()}`,type:'checkbox'},state:'stLMAYR',insideLoop:true,index:"" +iiQS9a});
}else { 
let cmpdI_X = this._lc('ctExmyz91', {parent:component,parentTop:layout,props:{checked:component.currentAnswer == answer.id,label:answer.answer,value:answer.id},events:{onchange:function(e) {let $el = this; component.voteAnswer(answer)}},boolAttrs:{checked:component.currentAnswer == answer.id},attrs:{name:`${(`answersIds`).toInputName()}`,type:'radio'},state:'stCOKDJ',insideLoop:true,index:"" +iiQS9a});
}}let elhIa9M = eo('div','nwFff'+iiQS9a,null,`class`,`voters`);
for (let i in answer.displayedVotes) {
let voter = answer.displayedVotes[i]; 
 let iiVjhd = 'peSbuZh' + i;
let elIimuv = eo('div','MiQL5fgDciYp' + i+iiQS9a+iiVjhd,null,`class`,`voter`);
let elIgzki = ev('img','gTKff'+iiQS9a+iiVjhd,null,`src`,`${voter.createdBy.image}`,`title`,`${voter.createdBy.name}`,`class`,`circle`,`alt`,`${voter.createdBy.name}`);

                    setTimeout(function () {
                        let $el = elIgzki;
                        
            true && tippyTooltip($el, {arrow:true,content:`${voter.createdBy.name}`});
        ;
                    }, 20);                
                ec('div');
}
let cndSbKN = answer.remainingVotes > 0;
this.setState('stNAr4v', cndSbKN);
if (cndSbKN) { 
let elUNm7l = eo('div','qdUff'+iiQS9a,null,`class`,`remaining`);
let elt6vwU = eo('i','Gk9ff'+iiQS9a,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
text( answer.remainingVotes );
ec('div');
}ec('div');
ec('li');
}
ec('ul');
let cnd5DF7 = ! component.poll.userHasVoted;
this.setState('stYVXzY', cnd5DF7);
if (cnd5DF7) { 
let elLqVIW = eo('button','K8tf',null, eventListeners, {onclick:[function(e) {var $el = this;component.votingConfirm = true;}]}, boolAttrs, {disabled:! component.user.isLoggedIn() || Is.empty(component.answersIds) && ! component.currentAnswer},`class`,`btn btn-info bold`,`type`,`button`);
let cnd6QnI = component.user.isLoggedIn();
this.setState('stCz4FN', cnd6QnI);
let cndlcvM = !(cnd6QnI);
this.setState('stBwfcE', cndlcvM);
if (cnd6QnI) { 
let elM24sR = eo('span','nb5f');
text(`Vote`);
ec('span');
}else { 
let elTuHLo = eo('span');
text(`Login to vote`);
ec('span');
}ec('button');
}ec('form');
let cndrs2Q = component.user.isLoggedIn() && ! component.poll.closed && [component.poll.createdBy.id, 1].includes(component.user.id);
this.setState('stLU76j', cndrs2Q);
if (cndrs2Q) { 
let elVpVyP = eo('button','gwZf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmClosingPoll = true}]},`class`,`btn btn-danger bold`);
text(`Close Poll`);
ec('button');
}}}});
let cndV8lu = component.votingConfirm;
this.setState('stDCz6r', cndV8lu);
if (cndV8lu) { 
let cmp1j_x = this._lc('cv96SvOts', {parent:component,events:{onclose:function(e) {let $el = this; component.votingConfirm = false;},onconfirm:function(e) {let $el = this; component.vote()}},state:'stDCz6r'});
}let cndCOiX = component.confirmClosingPoll;
this.setState('stdUQST', cndCOiX);
if (cndCOiX) { 
let cmpktWX = this._lc('cvSDozU7P', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmClosingPoll = false;},onconfirm:function(e) {let $el = this; component.closePoll()}},state:'stdUQST'});
}
                    this.isReadyToGo();
                }
        });