_Component({
                selector: 'einstein-puzzle-page',
                c: 'EinsteinPuzzlePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','puzzle','startQuest','hideForm','submitAnswer','tags','answerData','storeAnswer','getProperBadge','user','isSending'],
                children: {cpNFUzimk:'flk-spinner',cFQQgPtDX:'flk-facebook-share',ckfUI58rA:'markdown',c0H44LyFm:'flk-audio-player',cTTxHrEmr:'markdown',cyq5F7Lwd:'markdown',cvhAScRmh:'flk-dropdown-list',c6yEbZCJM:'markdown-input',cGHxKmtWm:'gold-icon',ccxVk8j0D:'layout'},
                render: function (component) {
                    let cmp3Wx6 = this._lc('ccxVk8j0D', {parent:component,content:(layout) => {let el5KA_L = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elHN4OQ = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let elhDICB = eo('a',null,null,`title`,`${trans(`Shop`)}`,`href`,`/einstein-chamber/shop`,`class`,`m-l-1`);
let eljEWwO = eo('span',null,null,`class`,`shopping-cart`);
ec('span');
ec('a');
let elr1xq8 = eo('a',null,null,`title`,`${trans(`Help`)}`,`href`,`/einstein-chamber/unlock`);
let elTeuCv = eo('i',null,null,`class`,`${fas('question-circle')} fa-2x ml-2 v-middle icon`);
ec('i');
ec('a');
let cndSYvQ = component.isLoading;
this.setState('st_qavH', cndSYvQ);
let cnd3Zhl = !(cndSYvQ);
this.setState('stmLdNe', cnd3Zhl);
if (cndSYvQ) { 
let cmp20S0 = this._lc('cpNFUzimk', {parent:component,parentTop:layout,state:'st_qavH'});
}else { 
let cndE6fn = component.puzzle.public;
this.setState('stGasaV', cndE6fn);
if (cndE6fn) { 
let elrR_bF = eo('span','jKVf',null,`class`,`ml-2 badge badge-primary`);
text(`Public`);
ec('span');
}let cndtyED = component.puzzle && component.puzzle.public;
this.setState('stSUenn', cndtyED);
if (cndtyED) { 
let elcAcZP = eo('div','Yuwf',null,`class`,`m-y-1`);
let cmpdcVf = this._lc('cFQQgPtDX', {parent:component,parentTop:layout,state:'stSUenn'});
ec('div');
}let cndFHgx = component.puzzle.status && component.puzzle.status == 'approved';
this.setState('stxxTIQ', cndFHgx);
if (cndFHgx) { 
let elhmTHI = eo('div','y3df');
let elhp358 = eo('a','2Pyf',null,`href`,`/einstein-chamber/puzzles/${ component.puzzle.id }/answers`,`class`,`btn btn-pink bold`);
text(`See how others
                solved it!`);
ec('a');
ec('div');
}let eluzWxr = eo('div',null,null,`class`,`puzzle row`);
let elQzkgC = eo('div',null,null,`class`,`col-9`);
let elv3l2l = eo('h1',null,null,`class`,`m-v-1`);
text( component.puzzle.title );
let el007IL = eo('strong',null,null,`class`,`green-text ml-2`);
text(component.puzzle.category.name);
ec('strong');
ec('h1');
let cndsFS7 = component.puzzle.status == 'rejected';
this.setState('stiFJuq', cndsFS7);
if (cndsFS7) { 
let eldMe5e = eo('div','_B2f',null,`class`,`card p-1 m-b-1`);
let elYIrxr = eo('div','smzf',null,`class`,`bold red-text`);
text(`You're previous answer had some issues, please check the following
                        comment and act accordingly.`);
ec('div');
let elz2vDT = eo('div','zpuf',null,`class`,`m-y-1`);
let eliIiMt = eo('span','3YLf');
text(`By:`);
ec('span');
let elsjK9n = eo('strong','yref',null,`class`,`ml-2`);
text(component.puzzle.commentBy.name);
ec('strong');
let cnddq9e = component.puzzle.comment;
this.setState('stgaYJD', cnddq9e);
if (cnddq9e) { 
let cmpu2Ya = this._lc('ckfUI58rA', {parent:component,parentTop:layout,props:{content:component.puzzle.comment},state:'stgaYJD'});
}let cndbtX2 = component.puzzle.recordNote;
this.setState('stjP2W3', cndbtX2);
if (cndbtX2) { 
let cmpiACL = this._lc('c0H44LyFm', {parent:component,parentTop:layout,props:{src:component.puzzle.recordNote},attrs:{src:`${component.puzzle.recordNote}`},state:'stjP2W3'});
}ec('div');
ec('div');
}let cmpCJ1T = this._lc('cTTxHrEmr', {parent:component,parentTop:layout,props:{content:component.puzzle.quest}});
let cndDjTO = component.puzzle.answer;
this.setState('st3SjW9', cndDjTO);
if (cndDjTO) { 
let elUEnhN = eo('h1','7Jcf',null,`class`,`m-v-1 teal-text`);
text(`Your previous answer`);
ec('h1');
let elK7xrK = ev('hr','pSwf');
let cmpdqEu = this._lc('cyq5F7Lwd', {parent:component,parentTop:layout,props:{content:component.puzzle.answer},state:'st3SjW9'});
}let cnd7mhI = component.startQuest;
this.setState('st6Zzcn', cnd7mhI);
if (cnd7mhI) { 
let elARSR4 = eo('div','L4df',null,`class`,`m-t-1 ${cls({'d-none': component.hideForm})}`);
let elRN5a1 = eo('h1','w1hf',null,`class`,`m-v-1`);
text(`Notes before answering.`);
ec('h1');
let elrZANJ = eo('ul','MYYf',null,`class`,`font-weight-normal`);
let els60RJ = eo('li','8wjf',null,`class`,`red-text bold`);
text(`Any code without comments makes your answer get rejected!`);
ec('li');
let elTXNLU = eo('li','GU8f',null,`class`,`pink-text bold`);
text(`the code MUST BE WORKING or it will get rejected!`);
ec('li');
let elC2MN2 = eo('li','wRjf');
text(`You can use markdown syntax in your answer, so use it especially in writing code.`);
ec('li');
let elCeMqW = eo('li','3cff');
text(`Add the code in the answer box then put it on`);
let el1JJQp = eo('a','lYZf',null,`href`,`https://codepen.io/`,`class`,`bold m-h-1 teal-text`,`target`,`_blank`);
text(`Codepen`);
ec('a');
text(`if your challenge is
                            about`);
let elGVtJc = eo('strong','8lAf',null,`class`,`mx-2`);
text(`HTML, CSS, Javascript, Typescript or SCSS`);
ec('strong');
text(`and put it on`);
let elWjIzl = eo('a','ofWf',null,`href`,`https://tehplayground.com`,`class`,`bold m-h-1 green-text`,`target`,`_blank`);
text(`Tehplayground`);
ec('a');
text(`If your challenge is about`);
let el8LID7 = eo('strong','xvEf',null,`class`,`mx-2`);
text(`PHP`);
ec('strong');
text(`after that put the link at the bottom of the answer or it will get`);
let elzf4gP = eo('span','UQLf',null,`class`,`ml-1 red-text bold`);
text(`rejected`);
ec('span');
text(`.`);
ec('li');
let elM2anY = eo('li','ogwf');
text(`Stick to the puzzle requirements.`);
ec('li');
let elBAiax = eo('li','Mbsf');
text(`Your answer will be reviewed, you can not edit it again it if it gets`);
let elq_iVQ = eo('span','SiQf',null,`class`,`ml-1 red-text bold`);
text(`rejected`);
ec('span');
text(`.`);
ec('li');
let elhXwDz = eo('li','mc3f');
let elqeUZQ = eo('strong','liTf',null,`class`,`mr-1`);
text(`Double`);
ec('strong');
text(`check the answer before submitting it, you can't change it again.`);
ec('li');
let elHAFQv = eo('li','3kgf');
text(`If the puzzle is about creating a`);
let elUvcTu = eo('strong','5Xzf',null,`class`,`mx-2`);
text(`built in function`);
ec('strong');
text(`in
                            programming language,`);
let elTi95f = eo('strong','kAQf',null,`class`,`mx-2`);
text(`DO NOT`);
ec('strong');
text(`use it, but implement it.`);
ec('li');
let elgJHFD = eo('li','O9Af');
text(`If the answer is`);
let eluv8rL = eo('span','I4vf',null,`class`,`mx-1 red-text bold`);
text(`rejected`);
ec('span');
text(`,
                            the puzzle may appear again later.`);
ec('li');
ec('ul');
let elboT50 = eo('p','RJwf',null,`class`,`orange-text bold`);
text(`If the answer got`);
let elyh6zx = eo('span','EdCf',null,`class`,`mx-1 red-text bold`);
text(`rejected`);
ec('span');
text(`,
                        you will lose the reward of the puzzle from your gold, thus try to understand the quest
                        properly.`);
ec('p');
let el9T2p2 = eo('div','BUcf',null,`class`,`row`);
let el02jIT = eo('form','35Ff',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitAnswer($el)}]},`class`,`col`);

                if (! el02jIT.formHandler) {
                    window.cfrmdlr = el02jIT.formHandler = new FormHandler(el02jIT, component);
                } else {
                    window.cfrmdlr = el02jIT.formHandler;
                }
            let el1Z40Z = eo('section','o4Gf',null,`class`,`tags form-group`);
let cmpx6az = this._lc('cvhAScRmh', {parent:component,parentTop:layout,props:{items:component.tags,multiple:true},boolAttrs:{multiple:true},attrs:{name:`${(`language`).toInputName()}`,label:'Choose a language to answer with',position:'top',required:''},state:'st6Zzcn'});
ec('section');
let cmpF3eE = this._lc('c6yEbZCJM', {parent:component,parentTop:layout,props:{value:component.answerData},events:{onkeyup:function(e) {let $el = this; component.storeAnswer($el.value)}},attrs:{name:`${(`answer`).toInputName()}`,placeholder:`${trans(`Write your answer ;)`)}`,required:''},state:'st6Zzcn'});
let elP7kF9 = eo('button','zLjf',null,`class`,`btn btn-primary float-right`);
text(`Send`);
ec('button');
let elKQ06k = eo('button','lL9f',null, eventListeners, {onclick:[function(e) {var $el = this;component.startQuest = false}]},`class`,`btn btn-danger float-right mr-2`,`type`,`button`);
text(`Cancel`);
ec('button');
ec('form');
ec('div');
ec('div');
}ec('div');
let el8TG4g = eo('div',null,null,`class`,`col`);
let elvCTL7 = eo('div',null,null,`class`,`card m-t-0`);
let elnBVhz = eo('div',null,null,`title`,`${trans(`Level ${ component.puzzle.level }`)}`,`class`,`text-center level`);
text(component.puzzle.level);
ec('div');
let cndskPt = component.puzzle.status == 'active';
this.setState('st1tBLM', cndskPt);
let cndMb4s = component.puzzle.status;
this.setState('stezZ82', cndMb4s);
if (cndskPt) { 
let ellnFD7 = eo('div','1mEf',null,`class`,`text-center bold status active`);
ec('div');
}else if (cndMb4s) { 
let elNHaDO = eo('div',null,null,`class`,`text-center bold status`);
let elwPM8E = eo('span',null,null,`class`,`badge ${cls(component.getProperBadge(component.puzzle.status))}`);
text(component.puzzle.status);
ec('span');
ec('div');
}let eltk2tJ = eo('div',null,null,`class`,`bold text-center m-v-1`);
let elBd7iR = eo('div');
text(`Reward`);
ec('div');
let cmpXYqw = this._lc('cGHxKmtWm', {parent:component,parentTop:layout,props:{coins:component.puzzle.reward}});
ec('div');
let cndFg7i = component.puzzle.status == 'approved';
this.setState('stVtJLH', cndFg7i);
if (cndFg7i) { 
let elBV7ny = eo('i','y32f',null,`title`,`${trans(`Solved`)}`,`class`,`${fas('check')} green-text fa-2x text-center icon`);
ec('i');
}let elUilRj = eo('div',null,null,`class`,`text-center m-b-1`);
let cndOUh3 = component.user.isLoggedIn() && ['active', 'rejected'].includes(component.puzzle.status);
this.setState('staD8GQ', cndOUh3);
if (cndOUh3) { 
let elmTVvY = eo('button','8pGf',null, eventListeners, {onclick:[function(e) {var $el = this;component.startQuest = ! component.startQuest}]}, boolAttrs, {disabled:component.isSending},`class`,`btn text-uppercase ${cls({'btn-primary': ! component.startQuest, 'btn-danger': component.startQuest})}`);
text( component.startQuest ? 'Cancel' : 'Start quest' );
ec('button');
}let cndkEB5 = ! component.user.isLoggedIn();
this.setState('stgFVAZ', cndkEB5);
if (cndkEB5) { 
let elkD4x6 = eo('a','aLWf',null,`href`,`/login`,`class`,`btn bold btn-danger text-uppercase`);
text(`Login to solve!`);
ec('a');
}ec('div');
ec('div');
ec('div');
ec('div');
}}});

                    this.isReadyToGo();
                }
        });