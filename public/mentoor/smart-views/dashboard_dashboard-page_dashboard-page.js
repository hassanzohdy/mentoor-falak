_Component({
                selector: 'dashboard-page',
                c: 'DashboardPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','loadPosts','siteName','answers','activeTab','topics','isLoadingPosts','posts'],
                children: {cwWG4XcGE:'flk-spinner',cWfgWN7_1:'gold-icon',cQAxnw24Y:'markdown',cVZwPwY2E:'markdown',cHqm8e0hL:'flk-audio-player',c1gv9LSSW:'gold-icon',cCEbRTaBP:'flk-spinner',cEtX06vWs:'layout'},
                render: function (component) {
                    let cmpKzgd = this._lc('cEtX06vWs', {parent:component,content:(layout) => {let cndd49I = component.isLoading;
this.setState('stKl79L', cndd49I);
let cndRJkV = !(cndd49I);
this.setState('staxDKx', cndRJkV);
if (cndd49I) { 
let cmpL22h = this._lc('cwWG4XcGE', {parent:component,parentTop:layout,state:'stKl79L'});
}else { 
let elaA01m = eo('h1',null,null,`class`,`m-b-1`);
text(`Dashboard`);
ec('h1');
let elcdrot = eo('ul',null,null,`class`,`nav nav-tabs`);
let elU4xqS = eo('li',null,null,`class`,`nav-item`);
let eloMweU = eo('a',null,null,`class`,`nav-link active`,`data-toggle`,`tab`,`data-target`,`#academy-tab`);
let elcotG5 = eo('i',null,null,`class`,`${fas('university') + ' mr-1 icon'}`);
ec('i');
text(`Academy`);
ec('a');
ec('li');
let el9eHsW = eo('li',null,null,`class`,`nav-item`);
let elbLbo6 = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.loadPosts()}]},`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#posts-tab`);
let eluZh99 = eo('i',null,null,`class`,`${fas('mug-hot') + ' mr-1 icon'}`);
ec('i');
text(`Timeline Posts`);
ec('a');
ec('li');
ec('ul');
let elLYVrX = eo('div',null,null,`class`,`tab-content`);
let el5RBPw = eo('div',null,null,`class`,`tab-pane fade show active`,`id`,`academy-tab`);
let elhbDvH = eo('div',null,null,`class`,`row m-t-1`);
let eljNcpO = eo('div',null,null,`class`,`col-lg-8 col-md-12`,`id`,`user-answers`);
let elY_m6h = eo('ul',null,null,`class`,`nav nav-tabs`);
for (let index in component.answers) {
let answersCollection = component.answers[index]; 
 let iiuF6c = 'Y28pXjp' + index;
let el6O3ly = eo('li','738sFkBF4FeN' + index+iiuF6c,null,`class`,`nav-item`);
let elW434Z = eo('button','PVuff'+iiuF6c,null, eventListeners, {onclick:[function(e) {var $el = this;component.activeTab = index;}]},`class`,`nav-link ${ answersCollection.status }`,`data-target`,`#${ answersCollection.status }-answers`);
elW434Z.cls = {active: index == component.activeTab};

            for (let className in elW434Z.cls) {
                elW434Z.classList.toggle(className, elW434Z.cls[className]);
            }  
            text( answersCollection.status );
let el0XWSQ = eo('span','od7ff'+iiuF6c,null,`class`,`badge total-answers`);
el0XWSQ.cls = answerStatusClass(answersCollection.status);

            for (let className in el0XWSQ.cls) {
                el0XWSQ.classList.toggle(className, el0XWSQ.cls[className]);
            }  
            text(answersCollection.answers.length);
ec('span');
ec('button');
ec('li');
}
ec('ul');
let elovcTl = eo('div',null,null,`class`,`tab-content`);
for (let index in component.answers) {
let answersCollection = component.answers[index]; 
 let ii8YYb = 'WPP4kE7' + index;
let elXeN6I = eo('div','l8yIf68MBXRt' + index+ii8YYb,null,`class`,`tab-pane ${ answersCollection.status }`,`id`,`${ answersCollection.status }-answers`);
elXeN6I.cls = {active: index == component.activeTab};

            for (let className in elXeN6I.cls) {
                elXeN6I.classList.toggle(className, elXeN6I.cls[className]);
            }  
            for (let i in answersCollection.answers) {
let answer = answersCollection.answers[i]; 
 let ii03lu = 'zJhRt_A' + i;
let el36yxy = eo('section','aewblYD6Drvm' + i+ii8YYb+ii03lu,null,`class`,`card p-3 border-0`);
let el1DfEf = eo('header','wZOff'+ii8YYb+ii03lu);
let elCUAh3 = eo('div','mxgff'+ii8YYb+ii03lu,null,`class`,`d-flex justify-content-between mb-2 flex-wrap`);
let el8Kbvg = eo('div','znhff'+ii8YYb+ii03lu,null,`class`,`answerMeta`);
let elk7AYk = eo('h2','57Wff'+ii8YYb+ii03lu);
let elj0h1g = eo('span','5F_ff'+ii8YYb+ii03lu,null,`class`,`mr-2`);
text(`Topic`);
ec('span');
let el9EUmA = eo('a','z0Aff'+ii8YYb+ii03lu,null,`href`,`${URLS.topic(answer.topic, answer.track)}`);
text(answer.topic.title);
ec('a');
ec('h2');
let el90XhC = eo('div','zjiff'+ii8YYb+ii03lu,null,`class`,`answerMetaTrack`);
let el30rX8 = eo('span','gEtff'+ii8YYb+ii03lu,null,`class`,`text-muted mr-2`);
text(`Track`);
ec('span');
let eld6Wld = eo('a','X4aff'+ii8YYb+ii03lu,null,`href`,`${URLS.track(answer.track)}`);
text(answer.track.name);
ec('a');
ec('div');
ec('div');
let elhaQ5C = eo('div','OY7ff'+ii8YYb+ii03lu);
elhaQ5C.cls = {'green-text': answer.status == 'approved' && answer.prize > answer.topic.prize, 'red-text': answer.status == 'approved' && answer.prize < answer.topic.prize};

            for (let className in elhaQ5C.cls) {
                elhaQ5C.classList.toggle(className, elhaQ5C.cls[className]);
            }  
            let cndPEbR = answer.status == 'approved' && answer.prize > answer.topic.prize;
this.setState('st0eYPM', cndPEbR);
if (cndPEbR) { 
let elBC6Mb = eo('span','2OIff'+ii8YYb+ii03lu,null,`class`,`reward-status up`);
ec('span');
}let cndsond = answer.status == 'approved' && answer.prize < answer.topic.prize;
this.setState('stKDPYi', cndsond);
if (cndsond) { 
let el_7DHb = eo('span','jfoff'+ii8YYb+ii03lu,null,`class`,`reward-status down`);
ec('span');
}let cmp_apb = this._lc('cWfgWN7_1', {parent:component,parentTop:layout,props:{coins:answer.prize || answer.topic.prize},insideLoop:true,index:"" +ii8YYb+ii03lu});
let cndgkAa = answer.status == 'approved' && answer.prize != answer.topic.prize;
this.setState('st5JKeS', cndgkAa);
if (cndgkAa) { 
let eliCa4E = eo('div','mWMff'+ii8YYb+ii03lu,null,`class`,`bold text-right`);
let cndWQuZ = answer.prize > answer.topic.prize;
this.setState('stnEbTJ', cndWQuZ);
if (cndWQuZ) { 
let elj4W91 = eo('span','foKff'+ii8YYb+ii03lu);
text(`+`);
ec('span');
}text( (answer.prize - answer.topic.prize).format() );
ec('div');
}ec('div');
ec('div');
ec('header');
let elSNYTO = eo('div','uInff'+ii8YYb+ii03lu,null,`class`,`content m-b-2`);
let ela0hmR = eo('small','CHGff'+ii8YYb+ii03lu,null,`class`,`text-muted date`);
let el5m1wp = eo('i','Vmtff'+ii8YYb+ii03lu,null,`class`,`ti ti-time`);
ec('i');
text( answer.createdAt.format );
ec('small');
let elKF6PK = eo('button','3ZYff'+ii8YYb+ii03lu,null, eventListeners, {onclick:[function(e) {var $el = this;answer.display = ! answer.display}]},`type`,`button`,`class`,`d-block bold blue-text`);
text(`Display your answer`);
let elHPqBu = eo('span','yKpff'+ii8YYb+ii03lu,null,`class`,`ml-2`);
let cndFmcF = answer.display;
this.setState('stBzsEJ', cndFmcF);
let cndPiER = !(cndFmcF);
this.setState('strHWwY', cndPiER);
if (cndFmcF) { 
let elZeVdg = eo('i','F23ff'+ii8YYb+ii03lu,null,`class`,`${fas('arrow-up') + ' icon'}`);
ec('i');
}else { 
let elL1lzC = eo('i','sdhff'+ii8YYb+ii03lu,null,`class`,`${fas('arrow-down') + ' icon'}`);
ec('i');
}ec('span');
ec('button');
let cndhDyt = answer.display;
this.setState('stUjtV0', cndhDyt);
if (cndhDyt) { 
let cmprem6 = this._lc('cQAxnw24Y', {parent:component,parentTop:layout,props:{content:answer.answer},state:'stUjtV0',insideLoop:true,index:"" +ii8YYb+ii03lu});
}ec('div');
let cnd9yOL = answer.display;
this.setState('st1CJss', cnd9yOL);
if (cnd9yOL) { 
let elFwQV2 = eo('button','4kgff'+ii8YYb+ii03lu,null, eventListeners, {onclick:[function(e) {var $el = this;answer.display = false}]},`type`,`button`,`class`,`text-left bold green-text`);
text(`Hide your answer`);
let cnddaPZ = answer.display;
this.setState('st9SGlW', cnddaPZ);
if (cnddaPZ) { 
let el4AlAC = eo('i','etwff'+ii8YYb+ii03lu,null,`class`,`${fas('arrow-up') + ' ml-2 icon'}`);
ec('i');
}ec('button');
}let cndMBYp = answer.status == 'rejected' && (answer.comment || answer.recordNote);
this.setState('stIPwSX', cndMBYp);
if (cndMBYp) { 
let el_hypD = eo('footer','2lrff'+ii8YYb+ii03lu);
text(`Note by:`);
let el0wNIP = eo('strong','Nm1ff'+ii8YYb+ii03lu);
text(answer.commentBy.name);
ec('strong');
let elFgW82 = eo('p','8uzff'+ii8YYb+ii03lu,null,`class`,`note`);
let cnd3H05 = answer.comment;
this.setState('stihGAb', cnd3H05);
if (cnd3H05) { 
let cmpyv7Q = this._lc('cVZwPwY2E', {parent:component,parentTop:layout,props:{content:answer.comment},state:'stihGAb',insideLoop:true,index:"" +ii8YYb+ii03lu});
}ec('p');
let cndaef6 = answer.recordNote;
this.setState('stISQeB', cndaef6);
if (cndaef6) { 
let cmpxIuV = this._lc('cHqm8e0hL', {parent:component,parentTop:layout,props:{src:answer.recordNote},attrs:{src:`${answer.recordNote}`},state:'stISQeB',insideLoop:true,index:"" +ii8YYb+ii03lu});
}ec('footer');
}ec('section');
}
ec('div');
}
ec('div');
ec('div');
let el6fTlP = eo('div',null,null,`class`,`col-lg-4 col-md-12`);
let eleQgEe = eo('section',null,null,`class`,`card`,`id`,`dashboard-user-topics`);
let elMoQqL = eo('header',null,null,`class`,`card-header`);
let elkRVLY = eo('div',null,null,`class`,`media align-items-center`);
let elYIS0n = eo('div',null,null,`class`,`text-center`,`id`,`total-topics`);
let eldXP2H = eo('span',null,null,`class`,`badge purple rounded-circle`);
text(component.topics.length > 99 ? '99+' : component.topics.length);
ec('span');
ec('div');
let elrmyzM = eo('div',null,null,`class`,`media-body`);
let elGq8FG = eo('h4',null,null,`class`,`card-title`);
text(`Topics`);
ec('h4');
let el4XTXM = eo('p',null,null,`class`,`card-subtitle`);
text(`you didn't answer yet.`);
ec('p');
ec('div');
ec('div');
ec('header');
let el7sMmG = eo('ul',null,null,`class`,`list-group list-group-fit topics-list mb-0`);
let eleVm9v = eo('ul');
for (let i in component.topics) {
let topic = component.topics[i]; 
 let iiypH2 = 'l1IXGBo' + i;
let elYnQYa = eo('li','Di3Y9d959LG8' + i+iiypH2,null,`class`,`list-group-item border-left-0 border-right-0`);
let eld2ipL = eo('div','vrnff'+iiypH2,null,`class`,`media align-items-center`);
let elA8DAz = eo('div','81Xff'+iiypH2,null,`class`,`media-body`);
let elLgyu3 = eo('a','IeOff'+iiypH2,null,`href`,`${URLS.topic(topic)}`,`class`,`text-body bold`);
text( topic.title );
let elTUo83 = eo('span','sTOff'+iiypH2,null,`class`,`float-right`);
let cmpR4EC = this._lc('c1gv9LSSW', {parent:component,parentTop:layout,props:{coins:topic.prize},insideLoop:true,index:"" +iiypH2});
ec('span');
ec('a');
let elsQBHd = ev('br','2Uwff'+iiypH2);
let elbyqMy = eo('a','vUwff'+iiypH2,null,`href`,`${URLS.track(topic.track)}`,`class`,`d-block`);
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
let ellFG1J = eo('div',null,null,`class`,`tab-pane fade`,`id`,`posts-tab`,`role`,`tabpanel`,`aria-labelledby`,`posts-tab`);
let cndVAxf = ! Is.null(component.isLoadingPosts);
this.setState('stIhw67', cndVAxf);
if (cndVAxf) { 
let elo8MQL = eo('div','F8mf',null,`id`,`dashboard-posts`,`class`,`p-t-2`);
let cndHX4H = component.isLoadingPosts;
this.setState('stvVKcG', cndHX4H);
let cnd8__V = !(cndHX4H);
this.setState('st3ieUb', cnd8__V);
if (cndHX4H) { 
let cmpKENn = this._lc('cCEbRTaBP', {parent:component,parentTop:layout,state:'stvVKcG'});
}else { 
let elM15CP = eo('div');
let cnd8cdc = Is.empty(component.posts);
this.setState('strTYWP', cnd8cdc);
let cndlx2T = !(cnd8cdc);
this.setState('stOoAA4', cndlx2T);
if (cnd8cdc) { 
let el_gMNL = eo('h1','4sff',null,`class`,`text-center`);
text(`No posts yet for you!`);
ec('h1');
}else { 
let elaeYD6 = eo('div');
for (let i in component.posts) {
let post = component.posts[i]; 
 let iiguP2 = 'W3BTgXY' + i;
let el4UVVb = eo('div','guwoniQcX5Js' + i+iiguP2,null,`class`,`m-b-1`);
let eldIltj = eo('div','bTfff'+iiguP2,null,`class`,`post p-2`);
let el34vLn = eo('a','OwGff'+iiguP2,null,`href`,`${URLS.post(post)}`);
text(post.title);
ec('a');
let elxPBLy = eo('span','Sjqff'+iiguP2,null,`class`,`badge`);
elxPBLy.cls = {'badge-success': post.status == 'approved', 'badge-warning': post.status == 'pending', 'badge-danger': post.status == 'rejected'};

            for (let className in elxPBLy.cls) {
                elxPBLy.classList.toggle(className, elxPBLy.cls[className]);
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