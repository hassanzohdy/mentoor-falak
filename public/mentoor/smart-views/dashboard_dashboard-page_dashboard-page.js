_Component({
                selector: 'dashboard-page',
                c: 'DashboardPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','loadPosts','siteName','answers','activeTab','topics','isLoadingPosts','posts'],
                children: {c6EcuJ_uT:'flk-spinner',ce2TRfoZH:'gold-icon',cJ_5uV9p8:'markdown',cDhFWy62L:'markdown',c4UxP_e_X:'flk-audio-player',cuj3yKA_x:'gold-icon',ciMLe52tW:'flk-spinner',clnyIxuiF:'layout'},
                render: function (component) {
                    let cmp1q3k = this._lc('clnyIxuiF', {parent:component,content:(layout) => {let cndKBbx = component.isLoading;
this.setState('stZvMys', cndKBbx);
let cndEC32 = !(cndKBbx);
this.setState('stiw2Bd', cndEC32);
if (cndKBbx) { 
let cmpUgmP = this._lc('c6EcuJ_uT', {parent:component,parentTop:layout,state:'stZvMys'});
}else { 
let elR2bmv = eo('h1',null,null,`class`,`m-b-1`);
text(`Dashboard`);
ec('h1');
let elebgpo = eo('ul',null,null,`class`,`nav nav-tabs`);
let elByS4o = eo('li',null,null,`class`,`nav-item`);
let elWFJ_H = eo('a',null,null,`class`,`nav-link active`,`data-toggle`,`tab`,`data-target`,`#academy-tab`);
let elO19nM = eo('i',null,null,`class`,`${fas('university') + ' mr-1 icon'}`);
ec('i');
text(`Academy`);
ec('a');
ec('li');
let eloYR5E = eo('li',null,null,`class`,`nav-item`);
let elz5QCa = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.loadPosts()}]},`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#posts-tab`);
let elLmuNI = eo('i',null,null,`class`,`${fas('mug-hot') + ' mr-1 icon'}`);
ec('i');
text(`Timeline Posts`);
ec('a');
ec('li');
ec('ul');
let elBzcsT = eo('div',null,null,`class`,`tab-content`);
let el7gbVZ = eo('div',null,null,`class`,`tab-pane fade show active`,`id`,`academy-tab`);
let elIYEnT = eo('div',null,null,`class`,`row m-t-1`);
let elhKN5b = eo('div',null,null,`class`,`col-lg-8 col-md-12`,`id`,`user-answers`);
let elvJIXR = eo('ul',null,null,`class`,`nav nav-tabs`);
for (let index in component.answers) {
let answersCollection = component.answers[index]; 
 let ii72X2 = 'mRaok67' + index;
let elbXhzQ = eo('li','HB2w3w5RYlt1' + index+ii72X2,null,`class`,`nav-item`);
let elelrEs = eo('button','leaff'+ii72X2,null, eventListeners, {onclick:[function(e) {var $el = this;component.activeTab = index;}]},`class`,`nav-link ${ answersCollection.status }`,`data-target`,`#${ answersCollection.status }-answers`);
elelrEs.cls = {active: index == component.activeTab};

            for (let className in elelrEs.cls) {
                elelrEs.classList.toggle(className, elelrEs.cls[className]);
            }  
            text( answersCollection.status );
let elJRyop = eo('span','B0Uff'+ii72X2,null,`class`,`badge total-answers`);
elJRyop.cls = answerStatusClass(answersCollection.status);

            for (let className in elJRyop.cls) {
                elJRyop.classList.toggle(className, elJRyop.cls[className]);
            }  
            text(answersCollection.answers.length);
ec('span');
ec('button');
ec('li');
}
ec('ul');
let el97EQi = eo('div',null,null,`class`,`tab-content`);
for (let index in component.answers) {
let answersCollection = component.answers[index]; 
 let iiN4gN = 'kdWCj3E' + index;
let elfBlAZ = eo('div','SlKw7qfKdd6U' + index+iiN4gN,null,`class`,`tab-pane ${ answersCollection.status }`,`id`,`${ answersCollection.status }-answers`);
elfBlAZ.cls = {active: index == component.activeTab};

            for (let className in elfBlAZ.cls) {
                elfBlAZ.classList.toggle(className, elfBlAZ.cls[className]);
            }  
            for (let i in answersCollection.answers) {
let answer = answersCollection.answers[i]; 
 let iiX1pQ = 'pHogsFe' + i;
let elkCQQT = eo('section','lqPJMo6KQFXh' + i+iiN4gN+iiX1pQ,null,`class`,`card p-3 border-0`);
let eleyOZg = eo('header','S8lff'+iiN4gN+iiX1pQ);
let elgUj4U = eo('div','Gs_ff'+iiN4gN+iiX1pQ,null,`class`,`d-flex justify-content-between mb-2 flex-wrap`);
let elEEEsW = eo('div','y8dff'+iiN4gN+iiX1pQ,null,`class`,`answerMeta`);
let elLBxlh = eo('h2','hBCff'+iiN4gN+iiX1pQ);
let elbVQI9 = eo('span','3h2ff'+iiN4gN+iiX1pQ,null,`class`,`mr-2`);
text(`Topic`);
ec('span');
let elXwULR = eo('a','97Pff'+iiN4gN+iiX1pQ,null,`href`,`${URLS.topic(answer.topic, answer.track)}`);
text(answer.topic.title);
ec('a');
ec('h2');
let elNYMwy = eo('div','E8wff'+iiN4gN+iiX1pQ,null,`class`,`answerMetaTrack`);
let elMCGcT = eo('span','WXZff'+iiN4gN+iiX1pQ,null,`class`,`text-muted mr-2`);
text(`Track`);
ec('span');
let elvPzTN = eo('a','vGKff'+iiN4gN+iiX1pQ,null,`href`,`${URLS.track(answer.track)}`);
text(answer.track.name);
ec('a');
ec('div');
ec('div');
let elXmjOK = eo('div','aV4ff'+iiN4gN+iiX1pQ);
elXmjOK.cls = {'green-text': answer.status == 'approved' && answer.prize > answer.topic.prize, 'red-text': answer.status == 'approved' && answer.prize < answer.topic.prize};

            for (let className in elXmjOK.cls) {
                elXmjOK.classList.toggle(className, elXmjOK.cls[className]);
            }  
            let cndvlph = answer.status == 'approved' && answer.prize > answer.topic.prize;
this.setState('stOBQI_', cndvlph);
if (cndvlph) { 
let elUsA5Y = eo('span','bUDff'+iiN4gN+iiX1pQ,null,`class`,`reward-status up`);
ec('span');
}let cndDNpk = answer.status == 'approved' && answer.prize < answer.topic.prize;
this.setState('stCS_Oa', cndDNpk);
if (cndDNpk) { 
let elucer7 = eo('span','Hh0ff'+iiN4gN+iiX1pQ,null,`class`,`reward-status down`);
ec('span');
}let cmpaxwv = this._lc('ce2TRfoZH', {parent:component,parentTop:layout,props:{coins:answer.prize || answer.topic.prize},insideLoop:true,index:"" +iiN4gN+iiX1pQ});
let cndGHPE = answer.status == 'approved' && answer.prize != answer.topic.prize;
this.setState('stPKMGq', cndGHPE);
if (cndGHPE) { 
let elGYCum = eo('div','daXff'+iiN4gN+iiX1pQ,null,`class`,`bold text-right`);
let cnd59GZ = answer.prize > answer.topic.prize;
this.setState('staYifi', cnd59GZ);
if (cnd59GZ) { 
let elMxv1G = eo('span','UGlff'+iiN4gN+iiX1pQ);
text(`+`);
ec('span');
}text( (answer.prize - answer.topic.prize).format() );
ec('div');
}ec('div');
ec('div');
ec('header');
let el4YWAi = eo('div','8HUff'+iiN4gN+iiX1pQ,null,`class`,`content m-b-2`);
let elKxoZT = eo('small','muaff'+iiN4gN+iiX1pQ,null,`class`,`text-muted date`);
let elPHfif = eo('i','_F0ff'+iiN4gN+iiX1pQ,null,`class`,`ti ti-time`);
ec('i');
text( answer.createdAt.format );
ec('small');
let el_G8V_ = eo('button','Ag9ff'+iiN4gN+iiX1pQ,null, eventListeners, {onclick:[function(e) {var $el = this;answer.display = ! answer.display}]},`type`,`button`,`class`,`d-block bold blue-text`);
text(`Display your answer`);
let elVRfWd = eo('span','EXWff'+iiN4gN+iiX1pQ,null,`class`,`ml-2`);
let cnd_VoF = answer.display;
this.setState('stfdWxF', cnd_VoF);
let cnd8Dwg = !(cnd_VoF);
this.setState('stcZjRG', cnd8Dwg);
if (cnd_VoF) { 
let elEbdKt = eo('i','fFiff'+iiN4gN+iiX1pQ,null,`class`,`${fas('arrow-up') + ' icon'}`);
ec('i');
}else { 
let el_Ixf3 = eo('i','CMNff'+iiN4gN+iiX1pQ,null,`class`,`${fas('arrow-down') + ' icon'}`);
ec('i');
}ec('span');
ec('button');
let cndnXEZ = answer.display;
this.setState('stQ8K1x', cndnXEZ);
if (cndnXEZ) { 
let cmp04Wc = this._lc('cJ_5uV9p8', {parent:component,parentTop:layout,props:{content:answer.answer},state:'stQ8K1x',insideLoop:true,index:"" +iiN4gN+iiX1pQ});
}ec('div');
let cndNx5S = answer.display;
this.setState('stK5njN', cndNx5S);
if (cndNx5S) { 
let el5oBGf = eo('button','rqqff'+iiN4gN+iiX1pQ,null, eventListeners, {onclick:[function(e) {var $el = this;answer.display = false}]},`type`,`button`,`class`,`text-left bold green-text`);
text(`Hide your answer`);
let cndMD6Q = answer.display;
this.setState('sta7XTG', cndMD6Q);
if (cndMD6Q) { 
let elFUXhp = eo('i','8Ueff'+iiN4gN+iiX1pQ,null,`class`,`${fas('arrow-up') + ' ml-2 icon'}`);
ec('i');
}ec('button');
}let cnddK10 = answer.status == 'rejected' && (answer.comment || answer.recordNote);
this.setState('stpFqys', cnddK10);
if (cnddK10) { 
let ellEXuS = eo('footer','OYLff'+iiN4gN+iiX1pQ);
text(`Note by:`);
let elTjqIC = eo('strong','U0mff'+iiN4gN+iiX1pQ);
text(answer.commentBy.name);
ec('strong');
let eleaTjT = eo('p','4Eoff'+iiN4gN+iiX1pQ,null,`class`,`note`);
let cnddzb4 = answer.comment;
this.setState('st2mJgq', cnddzb4);
if (cnddzb4) { 
let cmphbsI = this._lc('cDhFWy62L', {parent:component,parentTop:layout,props:{content:answer.comment},state:'st2mJgq',insideLoop:true,index:"" +iiN4gN+iiX1pQ});
}ec('p');
let cndlK0P = answer.recordNote;
this.setState('stNp0r2', cndlK0P);
if (cndlK0P) { 
let cmpX0z8 = this._lc('c4UxP_e_X', {parent:component,parentTop:layout,props:{src:answer.recordNote},attrs:{src:`${answer.recordNote}`},state:'stNp0r2',insideLoop:true,index:"" +iiN4gN+iiX1pQ});
}ec('footer');
}ec('section');
}
ec('div');
}
ec('div');
ec('div');
let elHhltd = eo('div',null,null,`class`,`col-lg-4 col-md-12`);
let elFanec = eo('section',null,null,`class`,`card`,`id`,`dashboard-user-topics`);
let el4tBm2 = eo('header',null,null,`class`,`card-header`);
let el13RNr = eo('div',null,null,`class`,`media align-items-center`);
let el7wzLJ = eo('div',null,null,`class`,`text-center`,`id`,`total-topics`);
let elTYkri = eo('span',null,null,`class`,`badge purple rounded-circle`);
text(component.topics.length > 99 ? '99+' : component.topics.length);
ec('span');
ec('div');
let elfvJhO = eo('div',null,null,`class`,`media-body`);
let elhz_v2 = eo('h4',null,null,`class`,`card-title`);
text(`Topics`);
ec('h4');
let elwU2F7 = eo('p',null,null,`class`,`card-subtitle`);
text(`you didn't answer yet.`);
ec('p');
ec('div');
ec('div');
ec('header');
let elN6nvC = eo('ul',null,null,`class`,`list-group list-group-fit topics-list mb-0`);
let elvguKX = eo('ul');
for (let i in component.topics) {
let topic = component.topics[i]; 
 let iisfL4 = 'u5vuBA5' + i;
let elYXNm0 = eo('li','daxdzX9wocLy' + i+iisfL4,null,`class`,`list-group-item border-left-0 border-right-0`);
let elatSCa = eo('div','Sgtff'+iisfL4,null,`class`,`media align-items-center`);
let elwxwyf = eo('div','2DHff'+iisfL4,null,`class`,`media-body`);
let elNIT0Y = eo('a','bmJff'+iisfL4,null,`href`,`${URLS.topic(topic)}`,`class`,`text-body bold`);
text( topic.title );
let el2r1Ka = eo('span','lzjff'+iisfL4,null,`class`,`float-right`);
let cmpg6lT = this._lc('cuj3yKA_x', {parent:component,parentTop:layout,props:{coins:topic.prize},insideLoop:true,index:"" +iisfL4});
ec('span');
ec('a');
let elIdof4 = ev('br','g3dff'+iisfL4);
let ellc8BO = eo('a','hsIff'+iisfL4,null,`href`,`${URLS.track(topic.track)}`,`class`,`d-block`);
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
let elDaIJx = eo('div',null,null,`class`,`tab-pane fade`,`id`,`posts-tab`,`role`,`tabpanel`,`aria-labelledby`,`posts-tab`);
let cnd50FL = ! Is.null(component.isLoadingPosts);
this.setState('stUeex1', cnd50FL);
if (cnd50FL) { 
let eldNloT = eo('div','atkf',null,`id`,`dashboard-posts`,`class`,`p-t-2`);
let cndVPtP = component.isLoadingPosts;
this.setState('st9iTo7', cndVPtP);
let cndGwOJ = !(cndVPtP);
this.setState('stH718M', cndGwOJ);
if (cndVPtP) { 
let cmpIdEh = this._lc('ciMLe52tW', {parent:component,parentTop:layout,state:'st9iTo7'});
}else { 
let elFf0L0 = eo('div');
let cndYI9F = Is.empty(component.posts);
this.setState('stOdCRr', cndYI9F);
let cndZEuI = !(cndYI9F);
this.setState('stCLQr_', cndZEuI);
if (cndYI9F) { 
let elA8Qiu = eo('h1','gH7f',null,`class`,`text-center`);
text(`No posts yet for you!`);
ec('h1');
}else { 
let elDeR_X = eo('div');
for (let i in component.posts) {
let post = component.posts[i]; 
 let ii18iu = 'kWS4pZ2' + i;
let el7ErfU = eo('div','y5NPWQ8cieeo' + i+ii18iu,null,`class`,`m-b-1`);
let elrYIlG = eo('div','4cVff'+ii18iu,null,`class`,`post p-2`);
let el5HJUb = eo('a','vIbff'+ii18iu,null,`href`,`${URLS.post(post)}`);
text(post.title);
ec('a');
let elwKBKy = eo('span','1e1ff'+ii18iu,null,`class`,`badge`);
elwKBKy.cls = {'badge-success': post.status == 'approved', 'badge-warning': post.status == 'pending', 'badge-danger': post.status == 'rejected'};

            for (let className in elwKBKy.cls) {
                elwKBKy.classList.toggle(className, elwKBKy.cls[className]);
            }  
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