_Component({
                selector: 'dashboard-page',
                c: 'DashboardPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','loadPosts','siteName','answers','activeTab','topics','isLoadingPosts','posts'],
                children: {cXQiGvSuw:'flk-spinner',cuVyjn2UM:'gold-icon',cjImK837s:'markdown',cDqBuegkv:'markdown',cFe5SWujJ:'flk-audio-player',cym7WcUGZ:'gold-icon',cYD3o6uif:'flk-spinner',cAUFpmXql:'layout'},
                render: function (component) {
                    let cmpD1VI = this._lc('cAUFpmXql', {parent:component,content:(layout) => {let cndpW72 = component.isLoading;
this.setState('stmNuMC', cndpW72);
let cndIFol = !(cndpW72);
this.setState('stDWJTC', cndIFol);
if (cndpW72) { 
let cmpzJjb = this._lc('cXQiGvSuw', {parent:component,parentTop:layout,state:'stmNuMC'});
}else { 
let elNDhhV = eo('h1',null,null,`class`,`m-b-1`);
text(`Dashboard`);
ec('h1');
let elryvE0 = eo('ul',null,null,`class`,`nav nav-tabs`);
let eljzJCv = eo('li',null,null,`class`,`nav-item`);
let elzv3AS = eo('a',null,null,`class`,`nav-link active`,`data-toggle`,`tab`,`data-target`,`#academy-tab`);
let elFN8mm = eo('i',null,null,`class`,`${fas('university') + ' mr-1 icon'}`);
ec('i');
text(`Academy`);
ec('a');
ec('li');
let elpiMu4 = eo('li',null,null,`class`,`nav-item`);
let eljsq0z = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.loadPosts()}]},`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#posts-tab`);
let elt1Ah2 = eo('i',null,null,`class`,`${fas('mug-hot') + ' mr-1 icon'}`);
ec('i');
text(`Timeline Posts`);
ec('a');
ec('li');
ec('ul');
let elC6RFR = eo('div',null,null,`class`,`tab-content`);
let elAZz8M = eo('div',null,null,`class`,`tab-pane fade show active`,`id`,`academy-tab`);
let elfvpjP = eo('div',null,null,`class`,`row m-t-1`);
let el1FrGx = eo('div',null,null,`class`,`col-lg-8 col-md-12`,`id`,`user-answers`);
let elQLbha = eo('ul',null,null,`class`,`nav nav-tabs`);
for (let index in component.answers) {
let answersCollection = component.answers[index]; 
 let iiRLzp = 'prTcW4C' + index;
let elgoDNW = eo('li','6ykjGfHgv5W2' + index+iiRLzp,null,`class`,`nav-item`);
let elAVsQ6 = eo('button','Fb3ff'+iiRLzp,null, eventListeners, {onclick:[function(e) {var $el = this;component.activeTab = index;}]},`class`,`nav-link ${ answersCollection.status }`,`data-target`,`#${ answersCollection.status }-answers`);
elAVsQ6.cls = {active: index == component.activeTab};

            for (let className in elAVsQ6.cls) {
                elAVsQ6.classList.toggle(className, elAVsQ6.cls[className]);
            }  
            text( answersCollection.status );
let elZED1_ = eo('span','k01ff'+iiRLzp,null,`class`,`badge total-answers`);
elZED1_.cls = answerStatusClass(answersCollection.status);

            for (let className in elZED1_.cls) {
                elZED1_.classList.toggle(className, elZED1_.cls[className]);
            }  
            text(answersCollection.answers.length);
ec('span');
ec('button');
ec('li');
}
ec('ul');
let elCOIjI = eo('div',null,null,`class`,`tab-content`);
for (let index in component.answers) {
let answersCollection = component.answers[index]; 
 let iiRu2F = 'vbKJoHQ' + index;
let elfuyZ9 = eo('div','dP7DNOstaQyn' + index+iiRu2F,null,`class`,`tab-pane ${ answersCollection.status }`,`id`,`${ answersCollection.status }-answers`);
elfuyZ9.cls = {active: index == component.activeTab};

            for (let className in elfuyZ9.cls) {
                elfuyZ9.classList.toggle(className, elfuyZ9.cls[className]);
            }  
            for (let i in answersCollection.answers) {
let answer = answersCollection.answers[i]; 
 let ii9AUh = 'i1vULgr' + i;
let elhf0Bu = eo('section','j8DaInnO3qtT' + i+iiRu2F+ii9AUh,null,`class`,`card p-3 border-0`);
let elGpaAn = eo('header','3Qbff'+iiRu2F+ii9AUh);
let elZcVf_ = eo('div','mSKff'+iiRu2F+ii9AUh,null,`class`,`d-flex justify-content-between mb-2 flex-wrap`);
let elSLcDq = eo('div','tSUff'+iiRu2F+ii9AUh,null,`class`,`answerMeta`);
let el7ocmW = eo('h2','hlEff'+iiRu2F+ii9AUh);
let elP3Fi5 = eo('span','B7iff'+iiRu2F+ii9AUh,null,`class`,`mr-2`);
text(`Topic`);
ec('span');
let elEIwZl = eo('a','_W0ff'+iiRu2F+ii9AUh,null,`href`,`${URLS.topic(answer.topic, answer.track)}`);
text(answer.topic.title);
ec('a');
ec('h2');
let elmda7D = eo('div','V7Cff'+iiRu2F+ii9AUh,null,`class`,`answerMetaTrack`);
let elVxwP6 = eo('span','Qncff'+iiRu2F+ii9AUh,null,`class`,`text-muted mr-2`);
text(`Track`);
ec('span');
let elHP8M1 = eo('a','bFHff'+iiRu2F+ii9AUh,null,`href`,`${URLS.track(answer.track)}`);
text(answer.track.name);
ec('a');
ec('div');
ec('div');
let elpDSHi = eo('div','SuUff'+iiRu2F+ii9AUh);
elpDSHi.cls = {'green-text': answer.status == 'approved' && answer.prize > answer.topic.prize, 'red-text': answer.status == 'approved' && answer.prize < answer.topic.prize};

            for (let className in elpDSHi.cls) {
                elpDSHi.classList.toggle(className, elpDSHi.cls[className]);
            }  
            let cndWGLy = answer.status == 'approved' && answer.prize > answer.topic.prize;
this.setState('stb98BQ', cndWGLy);
if (cndWGLy) { 
let elyyCzL = eo('span','XnMff'+iiRu2F+ii9AUh,null,`class`,`reward-status up`);
ec('span');
}let cndbK6T = answer.status == 'approved' && answer.prize < answer.topic.prize;
this.setState('stYowqz', cndbK6T);
if (cndbK6T) { 
let elB2INB = eo('span','H0Dff'+iiRu2F+ii9AUh,null,`class`,`reward-status down`);
ec('span');
}let cmpwDtb = this._lc('cuVyjn2UM', {parent:component,parentTop:layout,props:{coins:answer.prize || answer.topic.prize},insideLoop:true,index:"" +iiRu2F+ii9AUh});
let cndMaGV = answer.status == 'approved' && answer.prize != answer.topic.prize;
this.setState('stSJkHg', cndMaGV);
if (cndMaGV) { 
let elCxmuW = eo('div','UIsff'+iiRu2F+ii9AUh,null,`class`,`bold text-right`);
let cnd98aU = answer.prize > answer.topic.prize;
this.setState('st59j1V', cnd98aU);
if (cnd98aU) { 
let elJDCLA = eo('span','1X7ff'+iiRu2F+ii9AUh);
text(`+`);
ec('span');
}text( (answer.prize - answer.topic.prize).format() );
ec('div');
}ec('div');
ec('div');
ec('header');
let elh37yy = eo('div','naOff'+iiRu2F+ii9AUh,null,`class`,`content m-b-2`);
let eldTw6z = eo('small','Glsff'+iiRu2F+ii9AUh,null,`class`,`text-muted date`);
let elWX2P8 = eo('i','VWrff'+iiRu2F+ii9AUh,null,`class`,`ti ti-time`);
ec('i');
text( answer.createdAt.format );
ec('small');
let elZwe6P = eo('button','tE_ff'+iiRu2F+ii9AUh,null, eventListeners, {onclick:[function(e) {var $el = this;answer.display = ! answer.display}]},`type`,`button`,`class`,`d-block bold blue-text`);
text(`Display your answer`);
let el3rOIi = eo('span','_vRff'+iiRu2F+ii9AUh,null,`class`,`ml-2`);
let cndM8u7 = answer.display;
this.setState('st2Hcwp', cndM8u7);
let cndsob7 = !(cndM8u7);
this.setState('stf7SsB', cndsob7);
if (cndM8u7) { 
let elmaJEg = eo('i','cQTff'+iiRu2F+ii9AUh,null,`class`,`${fas('arrow-up') + ' icon'}`);
ec('i');
}else { 
let elc_7ML = eo('i','UbHff'+iiRu2F+ii9AUh,null,`class`,`${fas('arrow-down') + ' icon'}`);
ec('i');
}ec('span');
ec('button');
let cndQJHE = answer.display;
this.setState('stFwpL2', cndQJHE);
if (cndQJHE) { 
let cmpBnXI = this._lc('cjImK837s', {parent:component,parentTop:layout,props:{content:answer.answer},state:'stFwpL2',insideLoop:true,index:"" +iiRu2F+ii9AUh});
}ec('div');
let cnd5xc1 = answer.display;
this.setState('stCZDVX', cnd5xc1);
if (cnd5xc1) { 
let ell3pvQ = eo('button','OOUff'+iiRu2F+ii9AUh,null, eventListeners, {onclick:[function(e) {var $el = this;answer.display = false}]},`type`,`button`,`class`,`text-left bold green-text`);
text(`Hide your answer`);
let cndX2C4 = answer.display;
this.setState('stuuLkE', cndX2C4);
if (cndX2C4) { 
let elfXqcE = eo('i','zQcff'+iiRu2F+ii9AUh,null,`class`,`${fas('arrow-up') + ' ml-2 icon'}`);
ec('i');
}ec('button');
}let cndH_ho = answer.status == 'rejected' && (answer.comment || answer.recordNote);
this.setState('stARuku', cndH_ho);
if (cndH_ho) { 
let elTW9ET = eo('footer','S7wff'+iiRu2F+ii9AUh);
text(`Note by:`);
let el935_Z = eo('strong','9wyff'+iiRu2F+ii9AUh);
text(answer.commentBy.name);
ec('strong');
let elIRLYV = eo('p','WANff'+iiRu2F+ii9AUh,null,`class`,`note`);
let cndu4t5 = answer.comment;
this.setState('stJU7Gj', cndu4t5);
if (cndu4t5) { 
let cmp2xNL = this._lc('cDqBuegkv', {parent:component,parentTop:layout,props:{content:answer.comment},state:'stJU7Gj',insideLoop:true,index:"" +iiRu2F+ii9AUh});
}ec('p');
let cndirEn = answer.recordNote;
this.setState('st0VGMO', cndirEn);
if (cndirEn) { 
let cmpHb2H = this._lc('cFe5SWujJ', {parent:component,parentTop:layout,props:{src:answer.recordNote},attrs:{src:`${answer.recordNote}`},state:'st0VGMO',insideLoop:true,index:"" +iiRu2F+ii9AUh});
}ec('footer');
}ec('section');
}
ec('div');
}
ec('div');
ec('div');
let elBYtKE = eo('div',null,null,`class`,`col-lg-4 col-md-12`);
let elNxukJ = eo('section',null,null,`class`,`card`,`id`,`dashboard-user-topics`);
let elPJbKX = eo('header',null,null,`class`,`card-header`);
let elvuXGp = eo('div',null,null,`class`,`media align-items-center`);
let eloBL1l = eo('div',null,null,`class`,`text-center`,`id`,`total-topics`);
let elsjsuh = eo('span',null,null,`class`,`badge purple rounded-circle`);
text(component.topics.length > 99 ? '99+' : component.topics.length);
ec('span');
ec('div');
let elpOVJq = eo('div',null,null,`class`,`media-body`);
let elC8GzW = eo('h4',null,null,`class`,`card-title`);
text(`Topics`);
ec('h4');
let elsCxXp = eo('p',null,null,`class`,`card-subtitle`);
text(`you didn't answer yet.`);
ec('p');
ec('div');
ec('div');
ec('header');
let el7mI1L = eo('ul',null,null,`class`,`list-group list-group-fit topics-list mb-0`);
let elAHkCa = eo('ul');
for (let i in component.topics) {
let topic = component.topics[i]; 
 let iiI0We = '3nR8yZ2' + i;
let elYclNO = eo('li','vcCxX16wPNHF' + i+iiI0We,null,`class`,`list-group-item border-left-0 border-right-0`);
let elIEhtj = eo('div','QN6ff'+iiI0We,null,`class`,`media align-items-center`);
let elLrIj6 = eo('div','ftQff'+iiI0We,null,`class`,`media-body`);
let elnhx2y = eo('a','IVlff'+iiI0We,null,`href`,`${URLS.topic(topic)}`,`class`,`text-body bold`);
text( topic.title );
let el2BCft = eo('span','Ififf'+iiI0We,null,`class`,`float-right`);
let cmp1eeQ = this._lc('cym7WcUGZ', {parent:component,parentTop:layout,props:{coins:topic.prize},insideLoop:true,index:"" +iiI0We});
ec('span');
ec('a');
let el5BV8j = ev('br','3CDff'+iiI0We);
let el8rngP = eo('a','Idoff'+iiI0We,null,`href`,`${URLS.track(topic.track)}`,`class`,`d-block`);
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
let el3D8VX = eo('div',null,null,`class`,`tab-pane fade`,`id`,`posts-tab`,`role`,`tabpanel`,`aria-labelledby`,`posts-tab`);
let cndbWZA = ! Is.null(component.isLoadingPosts);
this.setState('st4y7Fe', cndbWZA);
if (cndbWZA) { 
let elv1G1w = eo('div','femf',null,`id`,`dashboard-posts`,`class`,`p-t-2`);
let cndMDLl = component.isLoadingPosts;
this.setState('stBr4Z1', cndMDLl);
let cndrJPG = !(cndMDLl);
this.setState('st_pV19', cndrJPG);
if (cndMDLl) { 
let cmpzAJz = this._lc('cYD3o6uif', {parent:component,parentTop:layout,state:'stBr4Z1'});
}else { 
let el7p31g = eo('div');
let cndA8Rh = Is.empty(component.posts);
this.setState('stMyF3w', cndA8Rh);
let cndpl6b = !(cndA8Rh);
this.setState('stCai1h', cndpl6b);
if (cndA8Rh) { 
let elqZ6U4 = eo('h1','58Mf',null,`class`,`text-center`);
text(`No posts yet for you!`);
ec('h1');
}else { 
let elQZ91C = eo('div');
for (let i in component.posts) {
let post = component.posts[i]; 
 let iitQFr = '_1zBBzL' + i;
let ele8Bji = eo('div','tiCpLRAt7sz_' + i+iitQFr,null,`class`,`m-b-1`);
let elQf9MT = eo('div','8Seff'+iitQFr,null,`class`,`post p-2`);
let elqkPxI = eo('a','2D5ff'+iitQFr,null,`href`,`${URLS.post(post)}`);
text(post.title);
ec('a');
let elyENor = eo('span','fmlff'+iitQFr,null,`class`,`badge`);
elyENor.cls = {'badge-success': post.status == 'approved', 'badge-warning': post.status == 'pending', 'badge-danger': post.status == 'rejected'};

            for (let className in elyENor.cls) {
                elyENor.classList.toggle(className, elyENor.cls[className]);
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