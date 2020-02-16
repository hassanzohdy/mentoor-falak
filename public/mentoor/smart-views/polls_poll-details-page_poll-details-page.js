_Component({
                selector: 'poll-details-page',
                c: 'PollDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','poll','answersIds','voteAnswer','currentAnswer','votingConfirm','user','confirmClosingPoll','vote','closePoll'],
                children: {c_zuZi4G2:'flk-spinner',c4PB_IWiF:'markdown',c2uPoT9df:'flk-mdb-checkbox',cVkCD5Lpn:'flk-mdb-checkbox',cK5ygRWs8:'layout',cSUw3LbKg:'flk-alert',cvel36VPX:'flk-alert'},
                render: function (component) {
                    let cmpTkDa = this._lc('cK5ygRWs8', {parent:component,content:(layout) => {let cndDyFT = component.isLoading;
this.setState('steAuvv', cndDyFT);
let cndTKsd = !(cndDyFT);
this.setState('st5T7iS', cndTKsd);
if (cndDyFT) { 
let cmplLFS = this._lc('c_zuZi4G2', {parent:component,parentTop:layout,state:'steAuvv'});
}else { 
let elfohO4 = eo('h1');
let elxuzvw = eo('span');
text(component.poll.title);
ec('span');
let el1BMvG = eo('span',null,null,`class`,`btn btn-sm bold ml-2 v-middle`);
el1BMvG.cls = {'btn-success': component.poll.closed === false, 'btn-danger': component.poll.closed === true};

            for (let className in el1BMvG.cls) {
                el1BMvG.classList.toggle(className, el1BMvG.cls[className]);
            }  
            text( component.poll.closed ? 'Closed' : 'Voting' );
ec('span');
ec('h1');
let cmpVZJs = this._lc('c4PB_IWiF', {parent:component,parentTop:layout,props:{content:component.poll.description},state:'st5T7iS'});
let elqqEOZ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`class`,`m-t-2`);
component.form = elqqEOZ;

                if (! elqqEOZ.formHandler) {
                    window.cfrmdlr = elqqEOZ.formHandler = new FormHandler(elqqEOZ, component);
                } else {
                    window.cfrmdlr = elqqEOZ.formHandler;
                }
            let elTJq2W = eo('ul',null,null,`class`,`answers-list`);
for (let i in component.poll.answers) {
let answer = component.poll.answers[i]; 
 let iiAwu3 = 'cfvbrxy' + i;
let elrFq_m = eo('li','ZIB1CdBlaCRv' + i+iiAwu3,null,`class`,`answer`);
let cndYN9w = answer.votes.length > 0;
this.setState('st3Cqfs', cndYN9w);
let cndcufd = !(cndYN9w);
this.setState('st9BXi7', cndcufd);
if (cndYN9w) { 
let elG8ZcI = eo('span','hjnff'+iiAwu3,null, 'style', {width: (answer.votes.length * 100 / component.poll.totalVotes) + '%'},`class`,`bg`);
ec('span');
}let cndVsfz = component.poll.userHasVoted || component.poll.closed;
this.setState('stjNMIr', cndVsfz);
let cndP6dT = !(cndVsfz);
this.setState('stpV_Qr', cndP6dT);
if (cndVsfz) { 
let elRv7Ca = eo('span','Eylff'+iiAwu3,null,`class`,`text`);
text(answer.answer);
ec('span');
}else { 
let cndwHyA = component.poll.allowMultipleVotes;
this.setState('sticiay', cndwHyA);
let cndTlCL = !(cndwHyA);
this.setState('stKlnHh', cndTlCL);
if (cndwHyA) { 
let cmpEnhJ = this._lc('c2uPoT9df', {parent:component,parentTop:layout,props:{checked:component.answersIds.includes(answer.id),label:answer.answer,value:answer.id},events:{onchange:function(e) {let $el = this; component.voteAnswer(answer)}},boolAttrs:{checked:component.answersIds.includes(answer.id)},attrs:{name:`${(`answersIds[]`).toInputName()}`,type:'checkbox'},state:'sticiay',insideLoop:true,index:"" +iiAwu3});
}else { 
let cmp9_eD = this._lc('cVkCD5Lpn', {parent:component,parentTop:layout,props:{checked:component.currentAnswer == answer.id,label:answer.answer,value:answer.id},events:{onchange:function(e) {let $el = this; component.voteAnswer(answer)}},boolAttrs:{checked:component.currentAnswer == answer.id},attrs:{name:`${(`answersIds`).toInputName()}`,type:'radio'},state:'stKlnHh',insideLoop:true,index:"" +iiAwu3});
}}let elYXriF = eo('div','_EGff'+iiAwu3,null,`class`,`voters`);
for (let i in answer.displayedVotes) {
let voter = answer.displayedVotes[i]; 
 let iiAbph = 'mvypB3r' + i;
let elJ6d0h = eo('div','4GT8l8lMp_QC' + i+iiAwu3+iiAbph,null,`class`,`voter`);
let elAFQ8h = ev('img','FcRff'+iiAwu3+iiAbph,null,`src`,`${voter.createdBy.image}`,`title`,`${voter.createdBy.name}`,`class`,`circle`,`alt`,`${voter.createdBy.name}`);

                    setTimeout(function () {
                        let $el = elAFQ8h;
                        
            true && tippyTooltip($el, {arrow:true,content:`${voter.createdBy.name}`});
        ;
                    }, 20);                
                ec('div');
}
let cndjwT5 = answer.remainingVotes > 0;
this.setState('sts7VfO', cndjwT5);
if (cndjwT5) { 
let el182jt = eo('div','Xb_ff'+iiAwu3,null,`class`,`remaining`);
let elWzHXs = eo('i','adJff'+iiAwu3,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
text( answer.remainingVotes );
ec('div');
}ec('div');
ec('li');
}
ec('ul');
let cndCtWL = ! component.poll.userHasVoted;
this.setState('st0aZ46', cndCtWL);
if (cndCtWL) { 
let elZhwDB = eo('button','Loyf',null, eventListeners, {onclick:[function(e) {var $el = this;component.votingConfirm = true;}]}, boolAttrs, {disabled:! component.user.isLoggedIn() || Is.empty(component.answersIds) && ! component.currentAnswer},`class`,`btn btn-info bold`,`type`,`button`);
let cndJxjt = component.user.isLoggedIn();
this.setState('st8JqPM', cndJxjt);
let cnddxvq = !(cndJxjt);
this.setState('stHaHxG', cnddxvq);
if (cndJxjt) { 
let elCE1BL = eo('span','FFMf');
text(`Vote`);
ec('span');
}else { 
let elJtJU_ = eo('span');
text(`Login to vote`);
ec('span');
}ec('button');
}ec('form');
let cndXOmt = component.user.isLoggedIn() && ! component.poll.closed && [component.poll.createdBy.id, 1].includes(component.user.id);
this.setState('stSEXpj', cndXOmt);
if (cndXOmt) { 
let eln52Qh = eo('button','bZHf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmClosingPoll = true}]},`class`,`btn btn-danger bold`);
text(`Close Poll`);
ec('button');
}}}});
let cndWtVO = component.votingConfirm;
this.setState('stjjpmf', cndWtVO);
if (cndWtVO) { 
let cmpfg95 = this._lc('cSUw3LbKg', {parent:component,events:{onclose:function(e) {let $el = this; component.votingConfirm = false;},onconfirm:function(e) {let $el = this; component.vote()}},state:'stjjpmf'});
}let cndHA2g = component.confirmClosingPoll;
this.setState('st_mIMO', cndHA2g);
if (cndHA2g) { 
let cmptCVK = this._lc('cvel36VPX', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmClosingPoll = false;},onconfirm:function(e) {let $el = this; component.closePoll()}},state:'st_mIMO'});
}
                    this.isReadyToGo();
                }
        });