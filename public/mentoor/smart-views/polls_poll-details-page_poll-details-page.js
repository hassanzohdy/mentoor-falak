_Component({
                selector: 'poll-details-page',
                c: 'PollDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','poll','answersIds','voteAnswer','currentAnswer','votingConfirm','user','confirmClosingPoll','vote','closePoll'],
                children: {c2iYFSFnv:'flk-spinner',ch5GjTm4I:'markdown',cIpXxCHea:'flk-mdb-checkbox',chDHGWL98:'flk-mdb-checkbox',c8F6OHtj0:'layout',cmMSJTDyR:'flk-alert',cQXcxHg4j:'flk-alert'},
                render: function (component) {
                    let cmpAAMc = this._lc('c8F6OHtj0', {parent:component,content:(layout) => {let cndgZDh = component.isLoading;
this.setState('stNCYAg', cndgZDh);
let cnd9Noc = !(cndgZDh);
this.setState('stC2B52', cnd9Noc);
if (cndgZDh) { 
let cmpryNH = this._lc('c2iYFSFnv', {parent:component,parentTop:layout,state:'stNCYAg'});
}else { 
let elvu1jJ = eo('h1');
let elOFRfY = eo('span');
text(component.poll.title);
ec('span');
let elwPZiM = eo('span',null,null,`class`,`btn btn-sm bold ml-2 v-middle`);
elwPZiM.cls = {'btn-success': component.poll.closed === false, 'btn-danger': component.poll.closed === true};

            for (let className in elwPZiM.cls) {
                elwPZiM.classList.toggle(className, elwPZiM.cls[className]);
            }  
            text( component.poll.closed ? 'Closed' : 'Voting' );
ec('span');
ec('h1');
let cmpi3wo = this._lc('ch5GjTm4I', {parent:component,parentTop:layout,props:{content:component.poll.description},state:'stC2B52'});
let elzkmbT = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]},`class`,`m-t-2`);
component.form = elzkmbT;

                if (! elzkmbT.formHandler) {
                    window.cfrmdlr = elzkmbT.formHandler = new FormHandler(elzkmbT, component);
                } else {
                    window.cfrmdlr = elzkmbT.formHandler;
                }
            let elpBQry = eo('ul',null,null,`class`,`answers-list`);
for (let i in component.poll.answers) {
let answer = component.poll.answers[i]; 
 let ii6BOC = 'zVNNCXP' + i;
let el3tcib = eo('li','FjiOiMFLmGVA' + i+ii6BOC,null,`class`,`answer`);
let cndgMNB = answer.votes.length > 0;
this.setState('st3n1Z1', cndgMNB);
let cndJyqe = !(cndgMNB);
this.setState('stqjYWw', cndJyqe);
if (cndgMNB) { 
let el41laC = eo('span','F06ff'+ii6BOC,null, 'style', {width: (answer.votes.length * 100 / component.poll.totalVotes) + '%'},`class`,`bg`);
ec('span');
}let cndgZDb = component.poll.userHasVoted || component.poll.closed;
this.setState('stn5F92', cndgZDb);
let cndKC0T = !(cndgZDb);
this.setState('struKGA', cndKC0T);
if (cndgZDb) { 
let el1oCIL = eo('span','lkvff'+ii6BOC,null,`class`,`text`);
text(answer.answer);
ec('span');
}else { 
let cndgQlg = component.poll.allowMultipleVotes;
this.setState('stfyHeW', cndgQlg);
let cnd7M7R = !(cndgQlg);
this.setState('stbo_eC', cnd7M7R);
if (cndgQlg) { 
let cmpyWmb = this._lc('cIpXxCHea', {parent:component,parentTop:layout,props:{checked:component.answersIds.includes(answer.id),label:answer.answer,value:answer.id},events:{onchange:function(e) {let $el = this; component.voteAnswer(answer)}},boolAttrs:{checked:component.answersIds.includes(answer.id)},attrs:{name:`${(`answersIds[]`).toInputName()}`,type:'checkbox'},state:'stfyHeW',insideLoop:true,index:"" +ii6BOC});
}else { 
let cmpErMA = this._lc('chDHGWL98', {parent:component,parentTop:layout,props:{checked:component.currentAnswer == answer.id,label:answer.answer,value:answer.id},events:{onchange:function(e) {let $el = this; component.voteAnswer(answer)}},boolAttrs:{checked:component.currentAnswer == answer.id},attrs:{name:`${(`answersIds`).toInputName()}`,type:'radio'},state:'stbo_eC',insideLoop:true,index:"" +ii6BOC});
}}let elSC8bG = eo('div','qfjff'+ii6BOC,null,`class`,`voters`);
for (let i in answer.displayedVotes) {
let voter = answer.displayedVotes[i]; 
 let iisMDa = 'rPWmnvP' + i;
let elmHsHs = eo('div','RGigcB8wUPWy' + i+ii6BOC+iisMDa,null,`class`,`voter`);
let elbRrkA = ev('img','77Gff'+ii6BOC+iisMDa,null,`src`,`${voter.createdBy.image}`,`title`,`${voter.createdBy.name}`,`class`,`circle`,`alt`,`${voter.createdBy.name}`);

                    setTimeout(function () {
                        let $el = elbRrkA;
                        
            true && tippyTooltip($el, {arrow:true,content:`${voter.createdBy.name}`});
        ;
                    }, 20);                
                ec('div');
}
let cnd_6JY = answer.remainingVotes > 0;
this.setState('st3xsdw', cnd_6JY);
if (cnd_6JY) { 
let elVjRrD = eo('div','Ff1ff'+ii6BOC,null,`class`,`remaining`);
let elOPX4F = eo('i','DCRff'+ii6BOC,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
text( answer.remainingVotes );
ec('div');
}ec('div');
ec('li');
}
ec('ul');
let cndlz44 = ! component.poll.userHasVoted;
this.setState('stk94uE', cndlz44);
if (cndlz44) { 
let elhTVMb = eo('button','IsXf',null, eventListeners, {onclick:[function(e) {var $el = this;component.votingConfirm = true;}]}, boolAttrs, {disabled:! component.user.isLoggedIn() || Is.empty(component.answersIds) && ! component.currentAnswer},`class`,`btn btn-info bold`,`type`,`button`);
let cndnubi = component.user.isLoggedIn();
this.setState('sthwhOr', cndnubi);
let cndV2vo = !(cndnubi);
this.setState('st8y7I8', cndV2vo);
if (cndnubi) { 
let elLR3zy = eo('span','aagf');
text(`Vote`);
ec('span');
}else { 
let elm_BjH = eo('span');
text(`Login to vote`);
ec('span');
}ec('button');
}ec('form');
let cndduVj = component.user.isLoggedIn() && ! component.poll.closed && [component.poll.createdBy.id, 1].includes(component.user.id);
this.setState('stkiHcP', cndduVj);
if (cndduVj) { 
let elw5Nab = eo('button','mgJf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmClosingPoll = true}]},`class`,`btn btn-danger bold`);
text(`Close Poll`);
ec('button');
}}}});
let cndSFRR = component.votingConfirm;
this.setState('stl1FY2', cndSFRR);
if (cndSFRR) { 
let cmpGYmC = this._lc('cmMSJTDyR', {parent:component,events:{onclose:function(e) {let $el = this; component.votingConfirm = false;},onconfirm:function(e) {let $el = this; component.vote()}},state:'stl1FY2'});
}let cnd52bm = component.confirmClosingPoll;
this.setState('stfFDqB', cnd52bm);
if (cnd52bm) { 
let cmpiXI0 = this._lc('cQXcxHg4j', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmClosingPoll = false;},onconfirm:function(e) {let $el = this; component.closePoll()}},state:'stfFDqB'});
}
                    this.isReadyToGo();
                }
        });