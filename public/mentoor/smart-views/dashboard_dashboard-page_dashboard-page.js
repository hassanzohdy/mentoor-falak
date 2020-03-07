_Component({
                selector: 'dashboard-page',
                c: 'DashboardPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','loadPosts','siteName','answers','activeTab','topics','isLoadingPosts','posts'],
                children: {cc0uoYvB4:'flk-spinner',cSKP4bLXg:'gold-icon',cWqBcmynX:'markdown',cd70_2Bg5:'markdown',ctqDqg0nm:'flk-audio-player',cJOI9odkZ:'gold-icon',cArAWAu8m:'flk-spinner',cwJ_2eDy5:'layout'},
                render: function (component) {
                    let cmpGvKz = this._lc('cwJ_2eDy5', {parent:component,content:(layout) => {let cndFA5R = component.isLoading;
this.setState('stOiF5N', cndFA5R);
let cndlx7K = !(cndFA5R);
this.setState('stISDGr', cndlx7K);
if (cndFA5R) { 
let cmpCNiK = this._lc('cc0uoYvB4', {parent:component,parentTop:layout,state:'stOiF5N'});
}else { 
let elzBExn = eo('h1',null,null,`class`,`m-b-1`);
text(`Dashboard`);
ec('h1');
let elVnc2E = eo('ul',null,null,`class`,`nav nav-tabs`);
let elWgu2w = eo('li',null,null,`class`,`nav-item`);
let elgR6I6 = eo('a',null,null,`class`,`nav-link active`,`data-toggle`,`tab`,`data-target`,`#academy-tab`);
let elHa08a = eo('i',null,null,`class`,`${fas('university')} mr-1 icon`);
ec('i');
text(`Academy`);
ec('a');
ec('li');
let el8OW6D = eo('li',null,null,`class`,`nav-item`);
let elDWcaP = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.loadPosts()}]},`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#posts-tab`);
let elpjGNo = eo('i',null,null,`class`,`${fas('mug-hot')} mr-1 icon`);
ec('i');
text(`Timeline Posts`);
ec('a');
ec('li');
ec('ul');
let el8eP1C = eo('div',null,null,`class`,`tab-content`);
let elvPT_m = eo('div',null,null,`class`,`tab-pane fade show active`,`id`,`academy-tab`);
let elx4pLm = eo('div',null,null,`class`,`row m-t-1`);
let elVJkXp = eo('div',null,null,`class`,`col-lg-8 col-md-12`,`id`,`user-answers`);
let elEBHRR = eo('ul',null,null,`class`,`nav nav-tabs`);
for (let index in component.answers) {
let answersCollection = component.answers[index]; 
 let iiGuMd = 'WSKt0PU' + index;
let elg8y6V = eo('li','drwhJvYAuQY6' + index+iiGuMd,null,`class`,`nav-item`);
let elURCfh = eo('button','Y7Iff'+iiGuMd,null, eventListeners, {onclick:[function(e) {var $el = this;component.activeTab = index;}]},`class`,`nav-link ${ answersCollection.status } ${cls({active: index == component.activeTab})}`,`data-target`,`#${ answersCollection.status }-answers`);
text( answersCollection.status );
let elS6Uk7 = eo('span','xzYff'+iiGuMd,null,`class`,`badge total-answers ${cls(answerStatusClass(answersCollection.status))}`);
text(answersCollection.answers.length);
ec('span');
ec('button');
ec('li');
}
ec('ul');
let el2lz_O = eo('div',null,null,`class`,`tab-content`);
for (let index in component.answers) {
let answersCollection = component.answers[index]; 
 let iiq6Vv = 'VfnZbC0' + index;
let eloNKQE = eo('div','GFCRGasOkUYz' + index+iiq6Vv,null,`class`,`tab-pane ${ answersCollection.status } ${cls({active: index == component.activeTab})}`,`id`,`${ answersCollection.status }-answers`);
for (let i in answersCollection.answers) {
let answer = answersCollection.answers[i]; 
 let iiBQHb = 'poaeeV_' + i;
let eldH8BM = eo('section','pDk5nVSEZ9RZ' + i+iiq6Vv+iiBQHb,null,`class`,`card p-3 border-0`);
let elprEbP = eo('header','B3lff'+iiq6Vv+iiBQHb);
let elYIhlC = eo('div','ISLff'+iiq6Vv+iiBQHb,null,`class`,`d-flex justify-content-between mb-2 flex-wrap`);
let elmItKT = eo('div','oo8ff'+iiq6Vv+iiBQHb,null,`class`,`answerMeta`);
let el6fsO3 = eo('h2','eCGff'+iiq6Vv+iiBQHb);
let el1Mxlu = eo('span','ScIff'+iiq6Vv+iiBQHb,null,`class`,`mr-2`);
text(`Topic`);
ec('span');
let elOvt8n = eo('a','TRQff'+iiq6Vv+iiBQHb,null,`href`,`${URLS.topic(answer.topic, answer.track)}`);
text(answer.topic.title);
ec('a');
ec('h2');
let elelDNQ = eo('div','_jlff'+iiq6Vv+iiBQHb,null,`class`,`answerMetaTrack`);
let elH0ky5 = eo('span','GEmff'+iiq6Vv+iiBQHb,null,`class`,`text-muted mr-2`);
text(`Track`);
ec('span');
let elpjav9 = eo('a','L4Sff'+iiq6Vv+iiBQHb,null,`href`,`${URLS.track(answer.track)}`);
text(answer.track.name);
ec('a');
ec('div');
ec('div');
let elX_pIy = eo('div','BhSff'+iiq6Vv+iiBQHb,null,`class`,` ${cls({'green-text': answer.status == 'approved' && answer.prize > answer.topic.prize, 'red-text': answer.status == 'approved' && answer.prize < answer.topic.prize})}`);
let cnduhM2 = answer.status == 'approved' && answer.prize > answer.topic.prize;
this.setState('st0Zy2Q', cnduhM2);
if (cnduhM2) { 
let elDzq49 = eo('span','8QLff'+iiq6Vv+iiBQHb,null,`class`,`reward-status up`);
ec('span');
}let cnd4KnA = answer.status == 'approved' && answer.prize < answer.topic.prize;
this.setState('stsEJvO', cnd4KnA);
if (cnd4KnA) { 
let el5WOE3 = eo('span','5Qrff'+iiq6Vv+iiBQHb,null,`class`,`reward-status down`);
ec('span');
}let cmpBZBY = this._lc('cSKP4bLXg', {parent:component,parentTop:layout,props:{coins:answer.prize || answer.topic.prize},insideLoop:true,index:"" +iiq6Vv+iiBQHb});
let cndwaHc = answer.status == 'approved' && answer.prize != answer.topic.prize;
this.setState('st10xT2', cndwaHc);
if (cndwaHc) { 
let el6HFsF = eo('div','eu4ff'+iiq6Vv+iiBQHb,null,`class`,`bold text-right`);
let cndUGwT = answer.prize > answer.topic.prize;
this.setState('stBIrLl', cndUGwT);
if (cndUGwT) { 
let elplhYJ = eo('span','CfHff'+iiq6Vv+iiBQHb);
text(`+`);
ec('span');
}text( (answer.prize - answer.topic.prize).format() );
ec('div');
}ec('div');
ec('div');
ec('header');
let elbLY8S = eo('div','8T2ff'+iiq6Vv+iiBQHb,null,`class`,`content m-b-2`);
let elD9IBc = eo('small','szXff'+iiq6Vv+iiBQHb,null,`class`,`text-muted date`);
let elUnCe3 = eo('i','smTff'+iiq6Vv+iiBQHb,null,`class`,`ti ti-time`);
ec('i');
text( answer.createdAt.format );
ec('small');
let elE3Z1E = eo('button','q4fff'+iiq6Vv+iiBQHb,null, eventListeners, {onclick:[function(e) {var $el = this;answer.display = ! answer.display}]},`type`,`button`,`class`,`d-block bold blue-text`);
text(`Display your answer`);
let el6lUva = eo('span','64Iff'+iiq6Vv+iiBQHb,null,`class`,`ml-2`);
let cndsER0 = answer.display;
this.setState('st80dvK', cndsER0);
let cndBrgY = !(cndsER0);
this.setState('stz3tgc', cndBrgY);
if (cndsER0) { 
let eliPg2k = eo('i','Z11ff'+iiq6Vv+iiBQHb,null,`class`,`${fas('arrow-up')} icon`);
ec('i');
}else { 
let eliQyKz = eo('i','Hh8ff'+iiq6Vv+iiBQHb,null,`class`,`${fas('arrow-down')} icon`);
ec('i');
}ec('span');
ec('button');
let cndAjeN = answer.display;
this.setState('stO4mTh', cndAjeN);
if (cndAjeN) { 
let cmp9otz = this._lc('cWqBcmynX', {parent:component,parentTop:layout,props:{content:answer.answer},state:'stO4mTh',insideLoop:true,index:"" +iiq6Vv+iiBQHb});
}ec('div');
let cndahN5 = answer.display;
this.setState('std615k', cndahN5);
if (cndahN5) { 
let el0_uVG = eo('button','rl1ff'+iiq6Vv+iiBQHb,null, eventListeners, {onclick:[function(e) {var $el = this;answer.display = false}]},`type`,`button`,`class`,`text-left bold green-text`);
text(`Hide your answer`);
let cndlJIW = answer.display;
this.setState('stzxiJV', cndlJIW);
if (cndlJIW) { 
let elyv2BL = eo('i','PL_ff'+iiq6Vv+iiBQHb,null,`class`,`${fas('arrow-up')} ml-2 icon`);
ec('i');
}ec('button');
}let cndbm_Z = answer.status == 'rejected' && (answer.comment || answer.recordNote);
this.setState('strh4Zf', cndbm_Z);
if (cndbm_Z) { 
let elPNsvu = eo('footer','8E5ff'+iiq6Vv+iiBQHb);
text(`Note by:`);
let el2hiXJ = eo('strong','Dw7ff'+iiq6Vv+iiBQHb);
text(answer.commentBy.name);
ec('strong');
let elKpcG9 = eo('p','rBiff'+iiq6Vv+iiBQHb,null,`class`,`note`);
let cndDvDv = answer.comment;
this.setState('stVwepQ', cndDvDv);
if (cndDvDv) { 
let cmpPh7y = this._lc('cd70_2Bg5', {parent:component,parentTop:layout,props:{content:answer.comment},state:'stVwepQ',insideLoop:true,index:"" +iiq6Vv+iiBQHb});
}ec('p');
let cnd9gZu = answer.recordNote;
this.setState('stWpGKO', cnd9gZu);
if (cnd9gZu) { 
let cmptxbT = this._lc('ctqDqg0nm', {parent:component,parentTop:layout,props:{src:answer.recordNote},attrs:{src:`${answer.recordNote}`},state:'stWpGKO',insideLoop:true,index:"" +iiq6Vv+iiBQHb});
}ec('footer');
}ec('section');
}
ec('div');
}
ec('div');
ec('div');
let elRSeSY = eo('div',null,null,`class`,`col-lg-4 col-md-12`);
let eliq22O = eo('section',null,null,`class`,`card`,`id`,`dashboard-user-topics`);
let elwMUUM = eo('header',null,null,`class`,`card-header`);
let elGC59y = eo('div',null,null,`class`,`media align-items-center`);
let elluXuz = eo('div',null,null,`class`,`text-center`,`id`,`total-topics`);
let elN27HL = eo('span',null,null,`class`,`badge purple rounded-circle`);
text(component.topics.length > 99 ? '99+' : component.topics.length);
ec('span');
ec('div');
let elqgJG1 = eo('div',null,null,`class`,`media-body`);
let el6Xf2p = eo('h4',null,null,`class`,`card-title`);
text(`Topics`);
ec('h4');
let elLu8Qr = eo('p',null,null,`class`,`card-subtitle`);
text(`you didn't answer yet.`);
ec('p');
ec('div');
ec('div');
ec('header');
let elWopUr = eo('ul',null,null,`class`,`list-group list-group-fit topics-list mb-0`);
let elWzBon = eo('ul');
for (let i in component.topics) {
let topic = component.topics[i]; 
 let ii5LvS = 'lkG4AL1' + i;
let elHxtQT = eo('li','xcXkbYbKc1Cg' + i+ii5LvS,null,`class`,`list-group-item border-left-0 border-right-0`);
let elNS25t = eo('div','qOHff'+ii5LvS,null,`class`,`media align-items-center`);
let el5VZuh = eo('div','yddff'+ii5LvS,null,`class`,`media-body`);
let elsvlwv = eo('a','Ztgff'+ii5LvS,null,`href`,`${URLS.topic(topic)}`,`class`,`text-body bold`);
text( topic.title );
let el9S6mW = eo('span','PEAff'+ii5LvS,null,`class`,`float-right`);
let cmpcJFp = this._lc('cJOI9odkZ', {parent:component,parentTop:layout,props:{coins:topic.prize},insideLoop:true,index:"" +ii5LvS});
ec('span');
ec('a');
let elA3HmW = ev('br','YhOff'+ii5LvS);
let elsIZc7 = eo('a','S5cff'+ii5LvS,null,`href`,`${URLS.track(topic.track)}`,`class`,`d-block`);
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
let el0oJXP = eo('div',null,null,`class`,`tab-pane fade`,`id`,`posts-tab`,`role`,`tabpanel`,`aria-labelledby`,`posts-tab`);
let cndRI5p = ! Is.null(component.isLoadingPosts);
this.setState('stwLIJM', cndRI5p);
if (cndRI5p) { 
let elHggiT = eo('div','P2If',null,`id`,`dashboard-posts`,`class`,`p-t-2`);
let cndmrR_ = component.isLoadingPosts;
this.setState('stIrFi_', cndmrR_);
let cnd7Hae = !(cndmrR_);
this.setState('stNaxQd', cnd7Hae);
if (cndmrR_) { 
let cmpZfba = this._lc('cArAWAu8m', {parent:component,parentTop:layout,state:'stIrFi_'});
}else { 
let ely_n82 = eo('div');
let cndukjA = Is.empty(component.posts);
this.setState('stNHTsu', cndukjA);
let cndIpK8 = !(cndukjA);
this.setState('stCUmgY', cndIpK8);
if (cndukjA) { 
let eluiGne = eo('h1','20Wf',null,`class`,`text-center`);
text(`No posts yet for you!`);
ec('h1');
}else { 
let eljNkfR = eo('div');
for (let i in component.posts) {
let post = component.posts[i]; 
 let iiWwHS = 'qZBD9pL' + i;
let elJIq3i = eo('div','r4xkLB9JF9wa' + i+iiWwHS,null,`class`,`m-b-1`);
let ellt17S = eo('div','T4vff'+iiWwHS,null,`class`,`post p-2`);
let eljCEqf = eo('a','Nj7ff'+iiWwHS,null,`href`,`${URLS.post(post)}`);
text(post.title);
ec('a');
let el0CbKo = eo('span','GCDff'+iiWwHS,null,`class`,`badge ${cls({'badge-success': post.status == 'approved', 'badge-warning': post.status == 'pending', 'badge-danger': post.status == 'rejected'})}`);
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