_Component({
                selector: 'dashboard-page',
                c: 'DashboardPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','loadPosts','siteName','answers','activeTab','topics','isLoadingPosts','posts'],
                children: {c77qti_y8:'flk-spinner',c3cgKXlox:'gold-icon',cCrpdpyBk:'markdown',cisGeXO48:'markdown',cmynqWa1D:'flk-audio-player',cf3pe_fHF:'gold-icon',clLAp9Fmp:'flk-spinner',cBqwm8POR:'layout'},
                render: function (component) {
                    let cmpwJj8 = this._lc('cBqwm8POR', {parent:component,content:(layout) => {let cndvWJQ = component.isLoading;
this.setState('stozRII', cndvWJQ);
let cndOkAU = !(cndvWJQ);
this.setState('st0S0DB', cndOkAU);
if (cndvWJQ) { 
let cmpDje_ = this._lc('c77qti_y8', {parent:component,parentTop:layout,state:'stozRII'});
}else { 
let elIlpll = eo('h1',null,null,`class`,`m-b-1`);
text(`Dashboard`);
ec('h1');
let elL_8aZ = eo('ul',null,null,`class`,`nav nav-tabs`);
let el07FMC = eo('li',null,null,`class`,`nav-item`);
let elcG1nV = eo('a',null,null,`class`,`nav-link active`,`data-toggle`,`tab`,`data-target`,`#academy-tab`);
let elRWO4k = eo('i',null,null,`class`,`${fas('university') + ' mr-1 icon'}`);
ec('i');
text(`Academy`);
ec('a');
ec('li');
let eljyLRN = eo('li',null,null,`class`,`nav-item`);
let eloVnQQ = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.loadPosts()}]},`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#posts-tab`);
let elF85Gl = eo('i',null,null,`class`,`${fas('mug-hot') + ' mr-1 icon'}`);
ec('i');
text(`Timeline Posts`);
ec('a');
ec('li');
ec('ul');
let elAxysH = eo('div',null,null,`class`,`tab-content`);
let elKP8tl = eo('div',null,null,`class`,`tab-pane fade show active`,`id`,`academy-tab`);
let elpkgUe = eo('div',null,null,`class`,`row m-t-1`);
let elYAKbC = eo('div',null,null,`class`,`col-lg-8 col-md-12`,`id`,`user-answers`);
let elO75cI = eo('ul',null,null,`class`,`nav nav-tabs`);
for (let index in component.answers) {
let answersCollection = component.answers[index]; 
 let ii4f4V = 'JkruUII' + index;
let elTpsxE = eo('li','EoQmGnSmwtOx' + index+ii4f4V,null,`class`,`nav-item`);
let elk4B0I = eo('button','gxHff'+ii4f4V,null, eventListeners, {onclick:[function(e) {var $el = this;component.activeTab = index;}]},`class`,`nav-link ${ answersCollection.status }`,`data-target`,`#${ answersCollection.status }-answers`);
elk4B0I.cls = {active: index == component.activeTab};

            for (let className in elk4B0I.cls) {
                elk4B0I.classList.toggle(className, elk4B0I.cls[className]);
            }  
            text( answersCollection.status );
let elUnk_O = eo('span','2xhff'+ii4f4V,null,`class`,`badge total-answers`);
elUnk_O.cls = answerStatusClass(answersCollection.status);

            for (let className in elUnk_O.cls) {
                elUnk_O.classList.toggle(className, elUnk_O.cls[className]);
            }  
            text(answersCollection.answers.length);
ec('span');
ec('button');
ec('li');
}
ec('ul');
let elu10PA = eo('div',null,null,`class`,`tab-content`);
for (let index in component.answers) {
let answersCollection = component.answers[index]; 
 let iip6_F = 'tkmDfZo' + index;
let el55P6Q = eo('div','spV4QWuatu7c' + index+iip6_F,null,`class`,`tab-pane ${ answersCollection.status }`,`id`,`${ answersCollection.status }-answers`);
el55P6Q.cls = {active: index == component.activeTab};

            for (let className in el55P6Q.cls) {
                el55P6Q.classList.toggle(className, el55P6Q.cls[className]);
            }  
            for (let i in answersCollection.answers) {
let answer = answersCollection.answers[i]; 
 let ii9GBJ = 'd2gouGc' + i;
let el4NpMb = eo('section','YDBbHFBc4NB5' + i+iip6_F+ii9GBJ,null,`class`,`card p-3 border-0`);
let eloQ8Iz = eo('header','SoQff'+iip6_F+ii9GBJ);
let elwUlTw = eo('div','coOff'+iip6_F+ii9GBJ,null,`class`,`d-flex justify-content-between mb-2 flex-wrap`);
let elLVQOW = eo('div','YoOff'+iip6_F+ii9GBJ,null,`class`,`answerMeta`);
let elUVYh4 = eo('h2','edTff'+iip6_F+ii9GBJ);
let elNR2WH = eo('span','txoff'+iip6_F+ii9GBJ,null,`class`,`mr-2`);
text(`Topic`);
ec('span');
let elBFT9A = eo('a','aTLff'+iip6_F+ii9GBJ,null,`href`,`${URLS.topic(answer.topic, answer.track)}`);
text(answer.topic.title);
ec('a');
ec('h2');
let eleCCOh = eo('div','JHnff'+iip6_F+ii9GBJ,null,`class`,`answerMetaTrack`);
let elbhVAO = eo('span','YRnff'+iip6_F+ii9GBJ,null,`class`,`text-muted mr-2`);
text(`Track`);
ec('span');
let elu3ZoU = eo('a','4fYff'+iip6_F+ii9GBJ,null,`href`,`${URLS.track(answer.track)}`);
text(answer.track.name);
ec('a');
ec('div');
ec('div');
let el1kGtW = eo('div','VUyff'+iip6_F+ii9GBJ);
el1kGtW.cls = {'green-text': answer.status == 'approved' && answer.prize > answer.topic.prize, 'red-text': answer.status == 'approved' && answer.prize < answer.topic.prize};

            for (let className in el1kGtW.cls) {
                el1kGtW.classList.toggle(className, el1kGtW.cls[className]);
            }  
            let cndyFgl = answer.status == 'approved' && answer.prize > answer.topic.prize;
this.setState('stJZjqc', cndyFgl);
if (cndyFgl) { 
let elHlfxq = eo('span','g19ff'+iip6_F+ii9GBJ,null,`class`,`reward-status up`);
ec('span');
}let cndsJ94 = answer.status == 'approved' && answer.prize < answer.topic.prize;
this.setState('st1AzRc', cndsJ94);
if (cndsJ94) { 
let elQKQ0F = eo('span','cf_ff'+iip6_F+ii9GBJ,null,`class`,`reward-status down`);
ec('span');
}let cmpv4se = this._lc('c3cgKXlox', {parent:component,parentTop:layout,props:{coins:answer.prize || answer.topic.prize},insideLoop:true,index:"" +iip6_F+ii9GBJ});
let cnd4QlW = answer.status == 'approved' && answer.prize != answer.topic.prize;
this.setState('stzB5G9', cnd4QlW);
if (cnd4QlW) { 
let elhjGEd = eo('div','RJ8ff'+iip6_F+ii9GBJ,null,`class`,`bold text-right`);
let cndKjWB = answer.prize > answer.topic.prize;
this.setState('stInEj8', cndKjWB);
if (cndKjWB) { 
let el3Sbb8 = eo('span','MY8ff'+iip6_F+ii9GBJ);
text(`+`);
ec('span');
}text( (answer.prize - answer.topic.prize).format() );
ec('div');
}ec('div');
ec('div');
ec('header');
let elAUG3Z = eo('div','EOzff'+iip6_F+ii9GBJ,null,`class`,`content m-b-2`);
let eljMps9 = eo('small','MSGff'+iip6_F+ii9GBJ,null,`class`,`text-muted date`);
let elOZkd8 = eo('i','sLmff'+iip6_F+ii9GBJ,null,`class`,`ti ti-time`);
ec('i');
text( answer.createdAt.format );
ec('small');
let elGwMqH = eo('button','I_Qff'+iip6_F+ii9GBJ,null, eventListeners, {onclick:[function(e) {var $el = this;answer.display = ! answer.display}]},`type`,`button`,`class`,`d-block bold blue-text`);
text(`Display your answer`);
let el13wX4 = eo('span','Nb0ff'+iip6_F+ii9GBJ,null,`class`,`ml-2`);
let cndZ0ay = answer.display;
this.setState('st3pN5R', cndZ0ay);
let cndr77O = !(cndZ0ay);
this.setState('stHSrGu', cndr77O);
if (cndZ0ay) { 
let el8n11X = eo('i','Qpaff'+iip6_F+ii9GBJ,null,`class`,`${fas('arrow-up') + ' icon'}`);
ec('i');
}else { 
let elm2oJy = eo('i','3YOff'+iip6_F+ii9GBJ,null,`class`,`${fas('arrow-down') + ' icon'}`);
ec('i');
}ec('span');
ec('button');
let cnd9Yix = answer.display;
this.setState('stXtr41', cnd9Yix);
if (cnd9Yix) { 
let cmpQMZU = this._lc('cCrpdpyBk', {parent:component,parentTop:layout,props:{content:answer.answer},state:'stXtr41',insideLoop:true,index:"" +iip6_F+ii9GBJ});
}ec('div');
let cndWlEO = answer.display;
this.setState('stFQAgI', cndWlEO);
if (cndWlEO) { 
let el5rHwp = eo('button','wxnff'+iip6_F+ii9GBJ,null, eventListeners, {onclick:[function(e) {var $el = this;answer.display = false}]},`type`,`button`,`class`,`text-left bold green-text`);
text(`Hide your answer`);
let cndpiTe = answer.display;
this.setState('stNR_4c', cndpiTe);
if (cndpiTe) { 
let elxEnSr = eo('i','I6Gff'+iip6_F+ii9GBJ,null,`class`,`${fas('arrow-up') + ' ml-2 icon'}`);
ec('i');
}ec('button');
}let cndC3Gr = answer.status == 'rejected' && (answer.comment || answer.recordNote);
this.setState('stKwEXC', cndC3Gr);
if (cndC3Gr) { 
let el8iRzI = eo('footer','E_jff'+iip6_F+ii9GBJ);
text(`Note by:`);
let elhfovS = eo('strong','5A4ff'+iip6_F+ii9GBJ);
text(answer.commentBy.name);
ec('strong');
let elxFOWg = eo('p','Wvoff'+iip6_F+ii9GBJ,null,`class`,`note`);
let cndwSGU = answer.comment;
this.setState('staCdJO', cndwSGU);
if (cndwSGU) { 
let cmpZMaI = this._lc('cisGeXO48', {parent:component,parentTop:layout,props:{content:answer.comment},state:'staCdJO',insideLoop:true,index:"" +iip6_F+ii9GBJ});
}ec('p');
let cndZiHD = answer.recordNote;
this.setState('stSwp2p', cndZiHD);
if (cndZiHD) { 
let cmp72Gb = this._lc('cmynqWa1D', {parent:component,parentTop:layout,props:{src:answer.recordNote},attrs:{src:`${answer.recordNote}`},state:'stSwp2p',insideLoop:true,index:"" +iip6_F+ii9GBJ});
}ec('footer');
}ec('section');
}
ec('div');
}
ec('div');
ec('div');
let eld0iMz = eo('div',null,null,`class`,`col-lg-4 col-md-12`);
let el_n0fe = eo('section',null,null,`class`,`card`,`id`,`dashboard-user-topics`);
let elMtnCf = eo('header',null,null,`class`,`card-header`);
let elr9nf6 = eo('div',null,null,`class`,`media align-items-center`);
let elSVB01 = eo('div',null,null,`class`,`text-center`,`id`,`total-topics`);
let elcQmxS = eo('span',null,null,`class`,`badge purple rounded-circle`);
text(component.topics.length > 99 ? '99+' : component.topics.length);
ec('span');
ec('div');
let elPhbDv = eo('div',null,null,`class`,`media-body`);
let elnSL_s = eo('h4',null,null,`class`,`card-title`);
text(`Topics`);
ec('h4');
let eldzO0D = eo('p',null,null,`class`,`card-subtitle`);
text(`you didn't answer yet.`);
ec('p');
ec('div');
ec('div');
ec('header');
let elJGAxe = eo('ul',null,null,`class`,`list-group list-group-fit topics-list mb-0`);
let elDjbj3 = eo('ul');
for (let i in component.topics) {
let topic = component.topics[i]; 
 let iiUtD5 = '2ZbpKk3' + i;
let elYM4VM = eo('li','Adqmkabck9x_' + i+iiUtD5,null,`class`,`list-group-item border-left-0 border-right-0`);
let eleizSk = eo('div','rC5ff'+iiUtD5,null,`class`,`media align-items-center`);
let el7YspF = eo('div','xbjff'+iiUtD5,null,`class`,`media-body`);
let eloyHnr = eo('a','lQEff'+iiUtD5,null,`href`,`${URLS.topic(topic)}`,`class`,`text-body bold`);
text( topic.title );
let elrHrNE = eo('span','6oCff'+iiUtD5,null,`class`,`float-right`);
let cmpXw6J = this._lc('cf3pe_fHF', {parent:component,parentTop:layout,props:{coins:topic.prize},insideLoop:true,index:"" +iiUtD5});
ec('span');
ec('a');
let eljTD3p = ev('br','1NWff'+iiUtD5);
let elhygG4 = eo('a','WRlff'+iiUtD5,null,`href`,`${URLS.track(topic.track)}`,`class`,`d-block`);
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
let el3bo1d = eo('div',null,null,`class`,`tab-pane fade`,`id`,`posts-tab`,`role`,`tabpanel`,`aria-labelledby`,`posts-tab`);
let cnd7XdX = ! Is.null(component.isLoadingPosts);
this.setState('stYIIri', cnd7XdX);
if (cnd7XdX) { 
let elhh39p = eo('div','q6Jf',null,`id`,`dashboard-posts`,`class`,`p-t-2`);
let cndkogn = component.isLoadingPosts;
this.setState('stJMhip', cndkogn);
let cndRdx3 = !(cndkogn);
this.setState('stPsljr', cndRdx3);
if (cndkogn) { 
let cmpxiBK = this._lc('clLAp9Fmp', {parent:component,parentTop:layout,state:'stJMhip'});
}else { 
let elVSX_G = eo('div');
let cndyqHi = Is.empty(component.posts);
this.setState('stcU1i6', cndyqHi);
let cndVziS = !(cndyqHi);
this.setState('stWyV_d', cndVziS);
if (cndyqHi) { 
let elv5nQF = eo('h1','i1Lf',null,`class`,`text-center`);
text(`No posts yet for you!`);
ec('h1');
}else { 
let elUe9xS = eo('div');
for (let i in component.posts) {
let post = component.posts[i]; 
 let iil_Kl = 'ALgL_FX' + i;
let elztwkN = eo('div','zqoS3VKBVdPy' + i+iil_Kl,null,`class`,`m-b-1`);
let elORmKE = eo('div','ElLff'+iil_Kl,null,`class`,`post p-2`);
let elcU4XB = eo('a','OeJff'+iil_Kl,null,`href`,`${URLS.post(post)}`);
text(post.title);
ec('a');
let elHOJdF = eo('span','Iyxff'+iil_Kl,null,`class`,`badge`);
elHOJdF.cls = {'badge-success': post.status == 'approved', 'badge-warning': post.status == 'pending', 'badge-danger': post.status == 'rejected'};

            for (let className in elHOJdF.cls) {
                elHOJdF.classList.toggle(className, elHOJdF.cls[className]);
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