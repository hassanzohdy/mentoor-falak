_Component({
                selector: 'poll-details-page',
                c: 'PollDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','poll','answersIds','voteAnswer','currentAnswer','votingConfirm','user','confirmClosingPoll','vote','closePoll'],
                children: {ceRqwFWvy:'flk-spinner',c5Y0fxX8D:'markdown',cttiqBRD8:'flk-mdb-checkbox',cOFgWoaW4:'flk-mdb-checkbox',c7sDaNdEO:'layout',c4GUCb_t4:'flk-alert',cZ2PkdENw:'flk-alert'},
                render: function (component) {
                    let cmpzKCA = this._lc('c7sDaNdEO', {parent:component,content:(layout) => {let cndZNZF = component.isLoading;
this.setState('steG0W4', cndZNZF);
let cndm4rE = !(cndZNZF);
this.setState('stg0XFO', cndm4rE);
if (cndZNZF) { 
let cmpIGDR = this._lc('ceRqwFWvy', {parent:component,parentTop:layout,state:'steG0W4'});
}else { 
let elLOj2F = eo('h1');
let el6E8oM = eo('span');
text(component.poll.title);
ec('span');
let el1MOxU = eo('span',null,null,`class`,`btn btn-sm bold ml-2 v-middle`);
el1MOxU.cls = {'btn-success': component.poll.closed === false, 'btn-danger': component.poll.closed === true};

            for (let className in el1MOxU.cls) {
                el1MOxU.classList.toggle(className, el1MOxU.cls[className]);
            }  
            text( component.poll.closed ? 'Closed' : 'Voting' );
ec('span');
ec('h1');
let cmpu6Hk = this._lc('c5Y0fxX8D', {parent:component,parentTop:layout,props:{content:component.poll.description},state:'stg0XFO'});
let el6LhtR = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`class`,`m-t-2`);
component.form = el6LhtR;

                if (! el6LhtR.formHandler) {
                    window.cfrmdlr = el6LhtR.formHandler = new FormHandler(el6LhtR, component);
                } else {
                    window.cfrmdlr = el6LhtR.formHandler;
                }
            let elBkebl = eo('ul',null,null,`class`,`answers-list`);
for (let i in component.poll.answers) {
let answer = component.poll.answers[i]; 
 let iiSAEn = 'Q9q8TI2' + i;
let elZ1Nkj = eo('li','AYyd4fDj9GUT' + i+iiSAEn,null,`class`,`answer`);
let cndSJvy = answer.votes.length > 0;
this.setState('stz3B3H', cndSJvy);
let cndsb_r = !(cndSJvy);
this.setState('stcWoHW', cndsb_r);
if (cndSJvy) { 
let elnL6jJ = eo('span','JJ1ff'+iiSAEn,null, 'style', {width: (answer.votes.length * 100 / component.poll.totalVotes) + '%'},`class`,`bg`);
ec('span');
}let cndizvt = component.poll.userHasVoted || component.poll.closed;
this.setState('stCvqSW', cndizvt);
let cnd3QtC = !(cndizvt);
this.setState('stDuO1c', cnd3QtC);
if (cndizvt) { 
let elku6X4 = eo('span','gL9ff'+iiSAEn,null,`class`,`text`);
text(answer.answer);
ec('span');
}else { 
let cnd4xcw = component.poll.allowMultipleVotes;
this.setState('stf6dv4', cnd4xcw);
let cndLX6k = !(cnd4xcw);
this.setState('stmV06r', cndLX6k);
if (cnd4xcw) { 
let cmp0Tl2 = this._lc('cttiqBRD8', {parent:component,parentTop:layout,props:{checked:component.answersIds.includes(answer.id),label:answer.answer,value:answer.id},events:{onchange:function(e) {let $el = this; component.voteAnswer(answer)}},boolAttrs:{checked:component.answersIds.includes(answer.id)},attrs:{name:`${(`answersIds[]`).toInputName()}`,type:'checkbox'},state:'stf6dv4',insideLoop:true,index:"" +iiSAEn});
}else { 
let cmp1nT2 = this._lc('cOFgWoaW4', {parent:component,parentTop:layout,props:{checked:component.currentAnswer == answer.id,label:answer.answer,value:answer.id},events:{onchange:function(e) {let $el = this; component.voteAnswer(answer)}},boolAttrs:{checked:component.currentAnswer == answer.id},attrs:{name:`${(`answersIds`).toInputName()}`,type:'radio'},state:'stmV06r',insideLoop:true,index:"" +iiSAEn});
}}let elSoDZA = eo('div','G_zff'+iiSAEn,null,`class`,`voters`);
for (let i in answer.displayedVotes) {
let voter = answer.displayedVotes[i]; 
 let iivuBy = '0ecebkY' + i;
let elKyQOm = eo('div','OyyhaLmSBEJB' + i+iiSAEn+iivuBy,null,`class`,`voter`);
let elH9g2W = ev('img','peXff'+iiSAEn+iivuBy,null,`src`,`${voter.createdBy.image}`,`title`,`${voter.createdBy.name}`,`class`,`circle`,`alt`,`${voter.createdBy.name}`);

                    setTimeout(function () {
                        let $el = elH9g2W;
                        
            true && tippyTooltip($el, {arrow:true,content:`${voter.createdBy.name}`});
        ;
                    }, 20);                
                ec('div');
}
let cnd1Kt8 = answer.remainingVotes > 0;
this.setState('stotJ_0', cnd1Kt8);
if (cnd1Kt8) { 
let elWUAwn = eo('div','0a3ff'+iiSAEn,null,`class`,`remaining`);
let el1UDF5 = eo('i','qkLff'+iiSAEn,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
text( answer.remainingVotes );
ec('div');
}ec('div');
ec('li');
}
ec('ul');
let cndqPT4 = ! component.poll.userHasVoted;
this.setState('stXQA_i', cndqPT4);
if (cndqPT4) { 
let elZ23Q2 = eo('button','1Ncf',null, eventListeners, {onclick:[function(e) {var $el = this;component.votingConfirm = true;}]}, boolAttrs, {disabled:! component.user.isLoggedIn() || Is.empty(component.answersIds) && ! component.currentAnswer},`class`,`btn btn-info bold`,`type`,`button`);
let cndQ40d = component.user.isLoggedIn();
this.setState('stcz_i2', cndQ40d);
let cndBsoG = !(cndQ40d);
this.setState('stXtlyR', cndBsoG);
if (cndQ40d) { 
let elCfmg7 = eo('span','5e8f');
text(`Vote`);
ec('span');
}else { 
let elyE4eR = eo('span');
text(`Login to vote`);
ec('span');
}ec('button');
}ec('form');
let cndPx8n = component.user.isLoggedIn() && ! component.poll.closed && [component.poll.createdBy.id, 1].includes(component.user.id);
this.setState('st04Qq3', cndPx8n);
if (cndPx8n) { 
let el7gEQN = eo('button','7C6f',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmClosingPoll = true}]},`class`,`btn btn-danger bold`);
text(`Close Poll`);
ec('button');
}}}});
let cndXT23 = component.votingConfirm;
this.setState('stTuAcv', cndXT23);
if (cndXT23) { 
let cmpdaYX = this._lc('c4GUCb_t4', {parent:component,events:{onclose:function(e) {let $el = this; component.votingConfirm = false;},onconfirm:function(e) {let $el = this; component.vote()}},state:'stTuAcv'});
}let cnd1CcA = component.confirmClosingPoll;
this.setState('stFCPKs', cnd1CcA);
if (cnd1CcA) { 
let cmpTYnV = this._lc('cZ2PkdENw', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmClosingPoll = false;},onconfirm:function(e) {let $el = this; component.closePoll()}},state:'stFCPKs'});
}
                    this.isReadyToGo();
                }
        });