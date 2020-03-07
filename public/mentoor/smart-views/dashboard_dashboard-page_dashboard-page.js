_Component({
                selector: 'dashboard-page',
                c: 'DashboardPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','loadPosts','siteName','answers','activeTab','topics','isLoadingPosts','posts'],
                children: {crmG0xsvF:'flk-spinner',cwZDeMUKL:'gold-icon',cO_LjcMXQ:'markdown',cvHJQB_hY:'markdown',cQcYJGWWr:'flk-audio-player',cItS7qlcX:'gold-icon',cKTDIEgWj:'flk-spinner',cFEm_3Ab6:'layout'},
                render: function (component) {
                    let cmpJcJ7 = this._lc('cFEm_3Ab6', {parent:component,content:(layout) => {let cndgRn7 = component.isLoading;
this.setState('stSM4BR', cndgRn7);
let cndI0uV = !(cndgRn7);
this.setState('str_AEl', cndI0uV);
if (cndgRn7) { 
let cmp7VCo = this._lc('crmG0xsvF', {parent:component,parentTop:layout,state:'stSM4BR'});
}else { 
let elFsODw = eo('h1',null,null,`class`,`m-b-1`);
text(`Dashboard`);
ec('h1');
let eln_mPh = eo('ul',null,null,`class`,`nav nav-tabs`);
let elEX3ma = eo('li',null,null,`class`,`nav-item`);
let elUBu7q = eo('a',null,null,`class`,`nav-link active`,`data-toggle`,`tab`,`data-target`,`#academy-tab`);
let elo2okI = eo('i',null,null,`class`,`${fas('university')} mr-1 icon`);
ec('i');
text(`Academy`);
ec('a');
ec('li');
let el2qcZa = eo('li',null,null,`class`,`nav-item`);
let elTFo37 = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.loadPosts()}]},`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#posts-tab`);
let elXQzdV = eo('i',null,null,`class`,`${fas('mug-hot')} mr-1 icon`);
ec('i');
text(`Timeline Posts`);
ec('a');
ec('li');
ec('ul');
let elP1hBy = eo('div',null,null,`class`,`tab-content`);
let el9BEzH = eo('div',null,null,`class`,`tab-pane fade show active`,`id`,`academy-tab`);
let el9iSgH = eo('div',null,null,`class`,`row m-t-1`);
let elPKuFF = eo('div',null,null,`class`,`col-lg-8 col-md-12`,`id`,`user-answers`);
let elQMiUh = eo('ul',null,null,`class`,`nav nav-tabs`);
for (let index in component.answers) {
let answersCollection = component.answers[index]; 
 let iisjKW = 'BSi0B8W' + index;
let elgdhJY = eo('li','IlKnzA6DJdQz' + index+iisjKW,null,`class`,`nav-item`);
let el3wlit = eo('button','UZhff'+iisjKW,null, eventListeners, {onclick:[function(e) {var $el = this;component.activeTab = index;}]},`class`,`nav-link ${ answersCollection.status } ${cls({active: index == component.activeTab})}`,`data-target`,`#${ answersCollection.status }-answers`);
text( answersCollection.status );
let elEBy50 = eo('span','Hocff'+iisjKW,null,`class`,`badge total-answers ${cls(answerStatusClass(answersCollection.status))}`);
text(answersCollection.answers.length);
ec('span');
ec('button');
ec('li');
}
ec('ul');
let elAqyJC = eo('div',null,null,`class`,`tab-content`);
for (let index in component.answers) {
let answersCollection = component.answers[index]; 
 let ii5QKC = 'sN_33hu' + index;
let elR18JT = eo('div','LXPa2pN3HMHD' + index+ii5QKC,null,`class`,`tab-pane ${ answersCollection.status } ${cls({active: index == component.activeTab})}`,`id`,`${ answersCollection.status }-answers`);
for (let i in answersCollection.answers) {
let answer = answersCollection.answers[i]; 
 let iikXsr = 'cKGb2uh' + i;
let eltCxPf = eo('section','_VAqPAuBVU2g' + i+ii5QKC+iikXsr,null,`class`,`card p-3 border-0`);
let elbZda8 = eo('header','Vq2ff'+ii5QKC+iikXsr);
let elm6HSM = eo('div','la5ff'+ii5QKC+iikXsr,null,`class`,`d-flex justify-content-between mb-2 flex-wrap`);
let elar1Gd = eo('div','dNnff'+ii5QKC+iikXsr,null,`class`,`answerMeta`);
let elN5jOK = eo('h2','OFOff'+ii5QKC+iikXsr);
let elIrKPb = eo('span','Dy6ff'+ii5QKC+iikXsr,null,`class`,`mr-2`);
text(`Topic`);
ec('span');
let elJVQAe = eo('a','Zkmff'+ii5QKC+iikXsr,null,`href`,`${URLS.topic(answer.topic, answer.track)}`);
text(answer.topic.title);
ec('a');
ec('h2');
let elXMusW = eo('div','8ygff'+ii5QKC+iikXsr,null,`class`,`answerMetaTrack`);
let el4bNAE = eo('span','iOHff'+ii5QKC+iikXsr,null,`class`,`text-muted mr-2`);
text(`Track`);
ec('span');
let el2MNdS = eo('a','NnPff'+ii5QKC+iikXsr,null,`href`,`${URLS.track(answer.track)}`);
text(answer.track.name);
ec('a');
ec('div');
ec('div');
let elSKCIw = eo('div','Iinff'+ii5QKC+iikXsr,null,`class`,` ${cls({'green-text': answer.status == 'approved' && answer.prize > answer.topic.prize, 'red-text': answer.status == 'approved' && answer.prize < answer.topic.prize})}`);
let cndvx1w = answer.status == 'approved' && answer.prize > answer.topic.prize;
this.setState('st_8_Gd', cndvx1w);
if (cndvx1w) { 
let elRHEsv = eo('span','imRff'+ii5QKC+iikXsr,null,`class`,`reward-status up`);
ec('span');
}let cndfPPO = answer.status == 'approved' && answer.prize < answer.topic.prize;
this.setState('stADzr4', cndfPPO);
if (cndfPPO) { 
let elFb1tP = eo('span','rMNff'+ii5QKC+iikXsr,null,`class`,`reward-status down`);
ec('span');
}let cmp1yGA = this._lc('cwZDeMUKL', {parent:component,parentTop:layout,props:{coins:answer.prize || answer.topic.prize},insideLoop:true,index:"" +ii5QKC+iikXsr});
let cndi49Z = answer.status == 'approved' && answer.prize != answer.topic.prize;
this.setState('stRLnTt', cndi49Z);
if (cndi49Z) { 
let el0rF_n = eo('div','8o0ff'+ii5QKC+iikXsr,null,`class`,`bold text-right`);
let cndNfPL = answer.prize > answer.topic.prize;
this.setState('stVJXYE', cndNfPL);
if (cndNfPL) { 
let elGWRcO = eo('span','LU3ff'+ii5QKC+iikXsr);
text(`+`);
ec('span');
}text( (answer.prize - answer.topic.prize).format() );
ec('div');
}ec('div');
ec('div');
ec('header');
let el9SqZO = eo('div','Xv2ff'+ii5QKC+iikXsr,null,`class`,`content m-b-2`);
let elIPey6 = eo('small','1OLff'+ii5QKC+iikXsr,null,`class`,`text-muted date`);
let elCGsFW = eo('i','oAGff'+ii5QKC+iikXsr,null,`class`,`ti ti-time`);
ec('i');
text( answer.createdAt.format );
ec('small');
let elAN4LB = eo('button','vNnff'+ii5QKC+iikXsr,null, eventListeners, {onclick:[function(e) {var $el = this;answer.display = ! answer.display}]},`type`,`button`,`class`,`d-block bold blue-text`);
text(`Display your answer`);
let elr102x = eo('span','9pKff'+ii5QKC+iikXsr,null,`class`,`ml-2`);
let cndp9Bd = answer.display;
this.setState('stDu5NW', cndp9Bd);
let cndG4RS = !(cndp9Bd);
this.setState('stPdNcG', cndG4RS);
if (cndp9Bd) { 
let eldir_2 = eo('i','55bff'+ii5QKC+iikXsr,null,`class`,`${fas('arrow-up')} icon`);
ec('i');
}else { 
let elyL_L4 = eo('i','gcoff'+ii5QKC+iikXsr,null,`class`,`${fas('arrow-down')} icon`);
ec('i');
}ec('span');
ec('button');
let cndXx7f = answer.display;
this.setState('ste_WVw', cndXx7f);
if (cndXx7f) { 
let cmpHSUf = this._lc('cO_LjcMXQ', {parent:component,parentTop:layout,props:{content:answer.answer},state:'ste_WVw',insideLoop:true,index:"" +ii5QKC+iikXsr});
}ec('div');
let cndcSDJ = answer.display;
this.setState('stF7sBY', cndcSDJ);
if (cndcSDJ) { 
let elnEKfJ = eo('button','w9Qff'+ii5QKC+iikXsr,null, eventListeners, {onclick:[function(e) {var $el = this;answer.display = false}]},`type`,`button`,`class`,`text-left bold green-text`);
text(`Hide your answer`);
let cndM9gK = answer.display;
this.setState('stu5VwB', cndM9gK);
if (cndM9gK) { 
let el9k3Ag = eo('i','oOGff'+ii5QKC+iikXsr,null,`class`,`${fas('arrow-up')} ml-2 icon`);
ec('i');
}ec('button');
}let cnd_6k3 = answer.status == 'rejected' && (answer.comment || answer.recordNote);
this.setState('st3w4iB', cnd_6k3);
if (cnd_6k3) { 
let elV1lka = eo('footer','tNFff'+ii5QKC+iikXsr);
text(`Note by:`);
let el8XboB = eo('strong','3lLff'+ii5QKC+iikXsr);
text(answer.commentBy.name);
ec('strong');
let eloYmeH = eo('p','hDeff'+ii5QKC+iikXsr,null,`class`,`note`);
let cndOrQW = answer.comment;
this.setState('strN3Xr', cndOrQW);
if (cndOrQW) { 
let cmpSaIS = this._lc('cvHJQB_hY', {parent:component,parentTop:layout,props:{content:answer.comment},state:'strN3Xr',insideLoop:true,index:"" +ii5QKC+iikXsr});
}ec('p');
let cndy9Jf = answer.recordNote;
this.setState('st7Zga2', cndy9Jf);
if (cndy9Jf) { 
let cmpZyPq = this._lc('cQcYJGWWr', {parent:component,parentTop:layout,props:{src:answer.recordNote},attrs:{src:`${answer.recordNote}`},state:'st7Zga2',insideLoop:true,index:"" +ii5QKC+iikXsr});
}ec('footer');
}ec('section');
}
ec('div');
}
ec('div');
ec('div');
let eltPqoa = eo('div',null,null,`class`,`col-lg-4 col-md-12`);
let elEpzUQ = eo('section',null,null,`class`,`card`,`id`,`dashboard-user-topics`);
let elW_dzN = eo('header',null,null,`class`,`card-header`);
let eltx1aQ = eo('div',null,null,`class`,`media align-items-center`);
let eloX7SU = eo('div',null,null,`class`,`text-center`,`id`,`total-topics`);
let elhKysG = eo('span',null,null,`class`,`badge purple rounded-circle`);
text(component.topics.length > 99 ? '99+' : component.topics.length);
ec('span');
ec('div');
let el8_4Sw = eo('div',null,null,`class`,`media-body`);
let elZ5B0r = eo('h4',null,null,`class`,`card-title`);
text(`Topics`);
ec('h4');
let elOiHdM = eo('p',null,null,`class`,`card-subtitle`);
text(`you didn't answer yet.`);
ec('p');
ec('div');
ec('div');
ec('header');
let elaWopT = eo('ul',null,null,`class`,`list-group list-group-fit topics-list mb-0`);
let eloBkVl = eo('ul');
for (let i in component.topics) {
let topic = component.topics[i]; 
 let iidnLi = 'f4s0dIO' + i;
let elQ8CkH = eo('li','Izyi6Dm54e_x' + i+iidnLi,null,`class`,`list-group-item border-left-0 border-right-0`);
let elX0vRp = eo('div','T6Vff'+iidnLi,null,`class`,`media align-items-center`);
let el8LorK = eo('div','1K3ff'+iidnLi,null,`class`,`media-body`);
let elwXK8n = eo('a','xFfff'+iidnLi,null,`href`,`${URLS.topic(topic)}`,`class`,`text-body bold`);
text( topic.title );
let elQT2Db = eo('span','6Arff'+iidnLi,null,`class`,`float-right`);
let cmpGSc4 = this._lc('cItS7qlcX', {parent:component,parentTop:layout,props:{coins:topic.prize},insideLoop:true,index:"" +iidnLi});
ec('span');
ec('a');
let elyN9eV = ev('br','Feiff'+iidnLi);
let elXtQQA = eo('a','HKKff'+iidnLi,null,`href`,`${URLS.track(topic.track)}`,`class`,`d-block`);
text( topic.track.name );
ec('a');
ec('div');
ec('div');
ec('li');
}
ec('ul');
ec('ul');
ec('section');
ec('div');
ec('div');
ec('div');
let elBWstP = eo('div',null,null,`class`,`tab-pane fade`,`id`,`posts-tab`,`role`,`tabpanel`,`aria-labelledby`,`posts-tab`);
let cndZkYe = ! Is.null(component.isLoadingPosts);
this.setState('sts5_Gq', cndZkYe);
if (cndZkYe) { 
let ellbiX3 = eo('div','Wd5f',null,`id`,`dashboard-posts`,`class`,`p-t-2`);
let cnd7sJv = component.isLoadingPosts;
this.setState('stzmjiq', cnd7sJv);
let cndHqgL = !(cnd7sJv);
this.setState('stLDJR2', cndHqgL);
if (cnd7sJv) { 
let cmps0u2 = this._lc('cKTDIEgWj', {parent:component,parentTop:layout,state:'stzmjiq'});
}else { 
let elXkhgN = eo('div');
let cnd55bE = Is.empty(component.posts);
this.setState('stSJR1D', cnd55bE);
let cndX1Uh = !(cnd55bE);
this.setState('stwKlFf', cndX1Uh);
if (cnd55bE) { 
let elYxw9l = eo('h1','V4Kf',null,`class`,`text-center`);
text(`No posts yet for you!`);
ec('h1');
}else { 
let el8DHDl = eo('div');
for (let i in component.posts) {
let post = component.posts[i]; 
 let ii411p = 'zsvJcIw' + i;
let elx3wHf = eo('div','RWqa4uqXOCDU' + i+ii411p,null,`class`,`m-b-1`);
let elPTsiv = eo('div','1ZRff'+ii411p,null,`class`,`post p-2`);
let elvW9j6 = eo('a','Ctjff'+ii411p,null,`href`,`${URLS.post(post)}`);
text(post.title);
ec('a');
let elO39B1 = eo('span','EXXff'+ii411p,null,`class`,`badge ${cls({'badge-success': post.status == 'approved', 'badge-warning': post.status == 'pending', 'badge-danger': post.status == 'rejected'})}`);
text(post.status);
ec('span');
ec('div');
ec('div');
}
ec('div');
}ec('div');
}ec('div');
}ec('div');
ec('div');
}}});

                    this.isReadyToGo();
                }
        });