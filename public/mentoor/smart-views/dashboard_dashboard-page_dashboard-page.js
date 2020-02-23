_Component({
                selector: 'dashboard-page',
                c: 'DashboardPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','loadPosts','siteName','answers','activeTab','topics','isLoadingPosts','posts'],
                children: {cbRsUmYYX:'flk-spinner',caCSLqwps:'gold-icon',c7zBq95Vb:'markdown',cP4Nz4hxw:'markdown',cHfkxW3Yr:'flk-audio-player',cvg1Sifjq:'gold-icon',cteWC_bZ7:'flk-spinner',cmjNGZLXy:'layout'},
                render: function (component) {
                    let cmp63XF = this._lc('cmjNGZLXy', {parent:component,content:(layout) => {let cndERt6 = component.isLoading;
this.setState('stY35X6', cndERt6);
let cndLkoH = !(cndERt6);
this.setState('st0BTkn', cndLkoH);
if (cndERt6) { 
let cmp5EJX = this._lc('cbRsUmYYX', {parent:component,parentTop:layout,state:'stY35X6'});
}else { 
let elkKwDY = eo('h1',null,null,`class`,`m-b-1`);
text(`Dashboard`);
ec('h1');
let elXEIEe = eo('ul',null,null,`class`,`nav nav-tabs`);
let el8SM0x = eo('li',null,null,`class`,`nav-item`);
let elQHhwZ = eo('a',null,null,`class`,`nav-link active`,`data-toggle`,`tab`,`data-target`,`#academy-tab`);
let elDpXEj = eo('i',null,null,`class`,`${fas('university') + ' mr-1 icon'}`);
ec('i');
text(`Academy`);
ec('a');
ec('li');
let elwKFqt = eo('li',null,null,`class`,`nav-item`);
let elmrsU_ = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.loadPosts()}]},`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#posts-tab`);
let elkAY1c = eo('i',null,null,`class`,`${fas('mug-hot') + ' mr-1 icon'}`);
ec('i');
text(`Timeline Posts`);
ec('a');
ec('li');
ec('ul');
let elxcI66 = eo('div',null,null,`class`,`tab-content`);
let elUAez4 = eo('div',null,null,`class`,`tab-pane fade show active`,`id`,`academy-tab`);
let elydN2y = eo('div',null,null,`class`,`row m-t-1`);
let elwA7r7 = eo('div',null,null,`class`,`col-lg-8 col-md-12`,`id`,`user-answers`);
let el9gdxy = eo('ul',null,null,`class`,`nav nav-tabs`);
for (let index in component.answers) {
let answersCollection = component.answers[index]; 
 let ii69w0 = 'evGPax2' + index;
let elkXCp6 = eo('li','h79MKEqQPax7' + index+ii69w0,null,`class`,`nav-item`);
let elPnXBZ = eo('button','C_uff'+ii69w0,null, eventListeners, {onclick:[function(e) {var $el = this;component.activeTab = index;}]},`class`,`nav-link ${ answersCollection.status }`,`data-target`,`#${ answersCollection.status }-answers`);
elPnXBZ.cls = {active: index == component.activeTab};

            for (let className in elPnXBZ.cls) {
                elPnXBZ.classList.toggle(className, elPnXBZ.cls[className]);
            }  
            text( answersCollection.status );
let elFdTc0 = eo('span','9Vzff'+ii69w0,null,`class`,`badge total-answers`);
elFdTc0.cls = answerStatusClass(answersCollection.status);

            for (let className in elFdTc0.cls) {
                elFdTc0.classList.toggle(className, elFdTc0.cls[className]);
            }  
            text(answersCollection.answers.length);
ec('span');
ec('button');
ec('li');
}
ec('ul');
let elxIZbt = eo('div',null,null,`class`,`tab-content`);
for (let index in component.answers) {
let answersCollection = component.answers[index]; 
 let iiTX3d = 'figUoW3' + index;
let eloNM75 = eo('div','8u2POTuk6q3G' + index+iiTX3d,null,`class`,`tab-pane ${ answersCollection.status }`,`id`,`${ answersCollection.status }-answers`);
eloNM75.cls = {active: index == component.activeTab};

            for (let className in eloNM75.cls) {
                eloNM75.classList.toggle(className, eloNM75.cls[className]);
            }  
            for (let i in answersCollection.answers) {
let answer = answersCollection.answers[i]; 
 let iihFtX = 'Qip04kr' + i;
let elCMBHM = eo('section','aZ4LFathf7mo' + i+iiTX3d+iihFtX,null,`class`,`card p-3 border-0`);
let elXj1Ek = eo('header','k_Rff'+iiTX3d+iihFtX);
let el5KMpn = eo('div','8ZCff'+iiTX3d+iihFtX,null,`class`,`d-flex justify-content-between mb-2 flex-wrap`);
let elq4LdM = eo('div','0tuff'+iiTX3d+iihFtX,null,`class`,`answerMeta`);
let elGIBJ6 = eo('h2','1Xhff'+iiTX3d+iihFtX);
let elmZhS5 = eo('span','QSsff'+iiTX3d+iihFtX,null,`class`,`mr-2`);
text(`Topic`);
ec('span');
let elbTyes = eo('a','21jff'+iiTX3d+iihFtX,null,`href`,`${URLS.topic(answer.topic, answer.track)}`);
text(answer.topic.title);
ec('a');
ec('h2');
let elE7pP7 = eo('div','VS2ff'+iiTX3d+iihFtX,null,`class`,`answerMetaTrack`);
let elIUIlV = eo('span','IWkff'+iiTX3d+iihFtX,null,`class`,`text-muted mr-2`);
text(`Track`);
ec('span');
let el4kSTw = eo('a','0TRff'+iiTX3d+iihFtX,null,`href`,`${URLS.track(answer.track)}`);
text(answer.track.name);
ec('a');
ec('div');
ec('div');
let elQKne5 = eo('div','G8Yff'+iiTX3d+iihFtX);
elQKne5.cls = {'green-text': answer.status == 'approved' && answer.prize > answer.topic.prize, 'red-text': answer.status == 'approved' && answer.prize < answer.topic.prize};

            for (let className in elQKne5.cls) {
                elQKne5.classList.toggle(className, elQKne5.cls[className]);
            }  
            let cndCQWB = answer.status == 'approved' && answer.prize > answer.topic.prize;
this.setState('stEjJWE', cndCQWB);
if (cndCQWB) { 
let el2sjyh = eo('span','Zxaff'+iiTX3d+iihFtX,null,`class`,`reward-status up`);
ec('span');
}let cndjnMW = answer.status == 'approved' && answer.prize < answer.topic.prize;
this.setState('stGqxau', cndjnMW);
if (cndjnMW) { 
let eljImiZ = eo('span','K1tff'+iiTX3d+iihFtX,null,`class`,`reward-status down`);
ec('span');
}let cmpixfh = this._lc('caCSLqwps', {parent:component,parentTop:layout,props:{coins:answer.prize || answer.topic.prize},insideLoop:true,index:"" +iiTX3d+iihFtX});
let cndCYyZ = answer.status == 'approved' && answer.prize != answer.topic.prize;
this.setState('st02x2V', cndCYyZ);
if (cndCYyZ) { 
let eltF4Xt = eo('div','_Cjff'+iiTX3d+iihFtX,null,`class`,`bold text-right`);
let cndW5Pi = answer.prize > answer.topic.prize;
this.setState('st8vGyU', cndW5Pi);
if (cndW5Pi) { 
let el1LMl5 = eo('span','0d2ff'+iiTX3d+iihFtX);
text(`+`);
ec('span');
}text( (answer.prize - answer.topic.prize).format() );
ec('div');
}ec('div');
ec('div');
ec('header');
let elopY5k = eo('div','HCTff'+iiTX3d+iihFtX,null,`class`,`content m-b-2`);
let elrrnnA = eo('small','qi9ff'+iiTX3d+iihFtX,null,`class`,`text-muted date`);
let elEaYVv = eo('i','atdff'+iiTX3d+iihFtX,null,`class`,`ti ti-time`);
ec('i');
text( answer.createdAt.format );
ec('small');
let elk7ZHZ = eo('button','EvZff'+iiTX3d+iihFtX,null, eventListeners, {onclick:[function(e) {var $el = this;answer.display = ! answer.display}]},`type`,`button`,`class`,`d-block bold blue-text`);
text(`Display your answer`);
let elVwDcx = eo('span','q8aff'+iiTX3d+iihFtX,null,`class`,`ml-2`);
let cndeQjF = answer.display;
this.setState('stIh68J', cndeQjF);
let cndGnfH = !(cndeQjF);
this.setState('st61I4m', cndGnfH);
if (cndeQjF) { 
let el3Mzf9 = eo('i','5yoff'+iiTX3d+iihFtX,null,`class`,`${fas('arrow-up') + ' icon'}`);
ec('i');
}else { 
let elrh_41 = eo('i','7VYff'+iiTX3d+iihFtX,null,`class`,`${fas('arrow-down') + ' icon'}`);
ec('i');
}ec('span');
ec('button');
let cnd1aYJ = answer.display;
this.setState('stysTRa', cnd1aYJ);
if (cnd1aYJ) { 
let cmp_Yem = this._lc('c7zBq95Vb', {parent:component,parentTop:layout,props:{content:answer.answer},state:'stysTRa',insideLoop:true,index:"" +iiTX3d+iihFtX});
}ec('div');
let cndzWVX = answer.display;
this.setState('stJsRTx', cndzWVX);
if (cndzWVX) { 
let elHSexw = eo('button','dChff'+iiTX3d+iihFtX,null, eventListeners, {onclick:[function(e) {var $el = this;answer.display = false}]},`type`,`button`,`class`,`text-left bold green-text`);
text(`Hide your answer`);
let cndIa3h = answer.display;
this.setState('stMSs7p', cndIa3h);
if (cndIa3h) { 
let elWr1aL = eo('i','4Y0ff'+iiTX3d+iihFtX,null,`class`,`${fas('arrow-up') + ' ml-2 icon'}`);
ec('i');
}ec('button');
}let cndhETo = answer.status == 'rejected' && (answer.comment || answer.recordNote);
this.setState('stItuGh', cndhETo);
if (cndhETo) { 
let eltltiz = eo('footer','8Trff'+iiTX3d+iihFtX);
text(`Note by:`);
let elBI0Nw = eo('strong','wroff'+iiTX3d+iihFtX);
text(answer.commentBy.name);
ec('strong');
let elRo3B6 = eo('p','k5pff'+iiTX3d+iihFtX,null,`class`,`note`);
let cndgvrt = answer.comment;
this.setState('stjCYHk', cndgvrt);
if (cndgvrt) { 
let cmpe2Wq = this._lc('cP4Nz4hxw', {parent:component,parentTop:layout,props:{content:answer.comment},state:'stjCYHk',insideLoop:true,index:"" +iiTX3d+iihFtX});
}ec('p');
let cndrcq4 = answer.recordNote;
this.setState('stw0XRL', cndrcq4);
if (cndrcq4) { 
let cmp4uks = this._lc('cHfkxW3Yr', {parent:component,parentTop:layout,props:{src:answer.recordNote},attrs:{src:`${answer.recordNote}`},state:'stw0XRL',insideLoop:true,index:"" +iiTX3d+iihFtX});
}ec('footer');
}ec('section');
}
ec('div');
}
ec('div');
ec('div');
let ele4hmU = eo('div',null,null,`class`,`col-lg-4 col-md-12`);
let el1tJVJ = eo('section',null,null,`class`,`card`,`id`,`dashboard-user-topics`);
let elQUOHB = eo('header',null,null,`class`,`card-header`);
let elKUJzY = eo('div',null,null,`class`,`media align-items-center`);
let el6IIMy = eo('div',null,null,`class`,`text-center`,`id`,`total-topics`);
let elrELWA = eo('span',null,null,`class`,`badge purple rounded-circle`);
text(component.topics.length > 99 ? '99+' : component.topics.length);
ec('span');
ec('div');
let elkv42w = eo('div',null,null,`class`,`media-body`);
let elvDibU = eo('h4',null,null,`class`,`card-title`);
text(`Topics`);
ec('h4');
let elaa055 = eo('p',null,null,`class`,`card-subtitle`);
text(`you didn't answer yet.`);
ec('p');
ec('div');
ec('div');
ec('header');
let elAh9KH = eo('ul',null,null,`class`,`list-group list-group-fit topics-list mb-0`);
let elFNzUu = eo('ul');
for (let i in component.topics) {
let topic = component.topics[i]; 
 let iiMiFs = 'e9t_ywB' + i;
let elq7vCB = eo('li','V7WL7WVmY5Nf' + i+iiMiFs,null,`class`,`list-group-item border-left-0 border-right-0`);
let elF7tFY = eo('div','zYbff'+iiMiFs,null,`class`,`media align-items-center`);
let eleh6PK = eo('div','m9Wff'+iiMiFs,null,`class`,`media-body`);
let eltXXlZ = eo('a','n60ff'+iiMiFs,null,`href`,`${URLS.topic(topic)}`,`class`,`text-body bold`);
text( topic.title );
let elFRFiy = eo('span','4Nsff'+iiMiFs,null,`class`,`float-right`);
let cmpiFFa = this._lc('cvg1Sifjq', {parent:component,parentTop:layout,props:{coins:topic.prize},insideLoop:true,index:"" +iiMiFs});
ec('span');
ec('a');
let eli141b = ev('br','raMff'+iiMiFs);
let el6u3wl = eo('a','yHTff'+iiMiFs,null,`href`,`${URLS.track(topic.track)}`,`class`,`d-block`);
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
let elbSYRU = eo('div',null,null,`class`,`tab-pane fade`,`id`,`posts-tab`,`role`,`tabpanel`,`aria-labelledby`,`posts-tab`);
let cndkrIX = ! Is.null(component.isLoadingPosts);
this.setState('stZ0caD', cndkrIX);
if (cndkrIX) { 
let ellAxPx = eo('div','1zVf',null,`id`,`dashboard-posts`,`class`,`p-t-2`);
let cndrgQh = component.isLoadingPosts;
this.setState('stJOg27', cndrgQh);
let cndECrI = !(cndrgQh);
this.setState('stJCwZi', cndECrI);
if (cndrgQh) { 
let cmpTzeI = this._lc('cteWC_bZ7', {parent:component,parentTop:layout,state:'stJOg27'});
}else { 
let elsCDda = eo('div');
let cndtlWU = Is.empty(component.posts);
this.setState('stiPFNQ', cndtlWU);
let cndnFbo = !(cndtlWU);
this.setState('stSvWeT', cndnFbo);
if (cndtlWU) { 
let eln3xLB = eo('h1','6VQf',null,`class`,`text-center`);
text(`No posts yet for you!`);
ec('h1');
}else { 
let elutmSa = eo('div');
for (let i in component.posts) {
let post = component.posts[i]; 
 let iivoxX = 'CZezVEn' + i;
let elbb6B0 = eo('div','zDGVatVRyfcN' + i+iivoxX,null,`class`,`m-b-1`);
let elWMUAs = eo('div','fE9ff'+iivoxX,null,`class`,`post p-2`);
let elgLd91 = eo('a','vP_ff'+iivoxX,null,`href`,`${URLS.post(post)}`);
text(post.title);
ec('a');
let elt4aM0 = eo('span','n7sff'+iivoxX,null,`class`,`badge`);
elt4aM0.cls = {'badge-success': post.status == 'approved', 'badge-warning': post.status == 'pending', 'badge-danger': post.status == 'rejected'};

            for (let className in elt4aM0.cls) {
                elt4aM0.classList.toggle(className, elt4aM0.cls[className]);
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