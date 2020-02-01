_Component({
                selector: 'dashboard-page',
                c: 'DashboardPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','loadPosts','siteName','answers','activeTab','topics','isLoadingPosts','posts'],
                children: {ciPMQ1xQ5:'flk-spinner',c8SF4A0y9:'gold-icon',cgT2MMyGK:'markdown',cyQEZJmlj:'markdown',cEnmprBMg:'flk-audio-player',cOBhjvi4X:'gold-icon',cILrA_tLT:'flk-spinner',c7VXgUWI1:'layout'},
                render: function (component) {
                    let cmpb9wq = this._lc('c7VXgUWI1', {parent:component,content:(layout) => {let cndfPW1 = component.isLoading;
this.setState('stQ0sRB', cndfPW1);
let cndo1Qe = !(cndfPW1);
this.setState('stmDVn9', cndo1Qe);
if (cndfPW1) { 
let cmpg93x = this._lc('ciPMQ1xQ5', {parent:component,parentTop:layout,state:'stQ0sRB'});
}else { 
let elKLqwg = eo('h1',null,null,`class`,`m-b-1`);
text(`Dashboard`);
ec('h1');
let elWrTUA = eo('ul',null,null,`class`,`nav nav-tabs`);
let ela0liK = eo('li',null,null,`class`,`nav-item`);
let elWUI8y = eo('a',null,null,`class`,`nav-link active`,`data-toggle`,`tab`,`data-target`,`#academy-tab`);
let elMjfg9 = eo('i',null,null,`class`,`${fas('university') + ' mr-1 icon'}`);
ec('i');
text(`Academy`);
ec('a');
ec('li');
let elK3S33 = eo('li',null,null,`class`,`nav-item`);
let elc1ANB = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.loadPosts()}]},`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#posts-tab`);
let elQmIbT = eo('i',null,null,`class`,`${fas('mug-hot') + ' mr-1 icon'}`);
ec('i');
text(`Timeline Posts`);
ec('a');
ec('li');
ec('ul');
let elIevSd = eo('div',null,null,`class`,`tab-content`);
let elRCN1p = eo('div',null,null,`class`,`tab-pane fade show active`,`id`,`academy-tab`);
let ela6jfB = eo('div',null,null,`class`,`row m-t-1`);
let elhlSI9 = eo('div',null,null,`class`,`col-lg-8 col-md-12`,`id`,`user-answers`);
let elh5nvn = eo('ul',null,null,`class`,`nav nav-tabs`);
for (let index in component.answers) {
let answersCollection = component.answers[index]; 
 let iiL5Cj = 'BSV9Ia4' + index;
let elM5Mw7 = eo('li','96nv1opC5Jpq' + index+iiL5Cj,null,`class`,`nav-item`);
let el4t3nT = eo('button','j9off'+iiL5Cj,null, eventListeners, {onclick:[function(e) {var $el = this;component.activeTab = index;}]},`class`,`nav-link ${ answersCollection.status }`,`data-target`,`#${ answersCollection.status }-answers`);
el4t3nT.cls = {active: index == component.activeTab};

            for (let className in el4t3nT.cls) {
                el4t3nT.classList.toggle(className, el4t3nT.cls[className]);
            }  
            text( answersCollection.status );
let el5Ajy0 = eo('span','SdDff'+iiL5Cj,null,`class`,`badge total-answers`);
el5Ajy0.cls = answerStatusClass(answersCollection.status);

            for (let className in el5Ajy0.cls) {
                el5Ajy0.classList.toggle(className, el5Ajy0.cls[className]);
            }  
            text(answersCollection.answers.length);
ec('span');
ec('button');
ec('li');
}
ec('ul');
let el30ra7 = eo('div',null,null,`class`,`tab-content`);
for (let index in component.answers) {
let answersCollection = component.answers[index]; 
 let ii4qHI = 'lG5v_cf' + index;
let elJn2Ba = eo('div','8g0bhYB2bCae' + index+ii4qHI,null,`class`,`tab-pane ${ answersCollection.status }`,`id`,`${ answersCollection.status }-answers`);
elJn2Ba.cls = {active: index == component.activeTab};

            for (let className in elJn2Ba.cls) {
                elJn2Ba.classList.toggle(className, elJn2Ba.cls[className]);
            }  
            for (let i in answersCollection.answers) {
let answer = answersCollection.answers[i]; 
 let iiQlly = 'o2vL3S6' + i;
let elgzPn5 = eo('section','4aspuQjRTrVi' + i+ii4qHI+iiQlly,null,`class`,`card p-3 border-0`);
let el605A6 = eo('header','7EAff'+ii4qHI+iiQlly);
let el4g8hF = eo('div','3tOff'+ii4qHI+iiQlly,null,`class`,`d-flex justify-content-between mb-2 flex-wrap`);
let el5nsBg = eo('div','4ybff'+ii4qHI+iiQlly,null,`class`,`answerMeta`);
let elP3WGY = eo('h2','93wff'+ii4qHI+iiQlly);
let elzcRvc = eo('span','D8yff'+ii4qHI+iiQlly,null,`class`,`mr-2`);
text(`Topic`);
ec('span');
let elHjRwa = eo('a','tiYff'+ii4qHI+iiQlly,null,`href`,`${URLS.topic(answer.topic, answer.track)}`);
text(answer.topic.title);
ec('a');
ec('h2');
let elJMCKO = eo('div','bfsff'+ii4qHI+iiQlly,null,`class`,`answerMetaTrack`);
let elu4UUt = eo('span','vEGff'+ii4qHI+iiQlly,null,`class`,`text-muted mr-2`);
text(`Track`);
ec('span');
let el3_Hzd = eo('a','VNhff'+ii4qHI+iiQlly,null,`href`,`${URLS.track(answer.track)}`);
text(answer.track.name);
ec('a');
ec('div');
ec('div');
let el3QPPh = eo('div','gbIff'+ii4qHI+iiQlly);
el3QPPh.cls = {'green-text': answer.status == 'approved' && answer.prize > answer.topic.prize, 'red-text': answer.status == 'approved' && answer.prize < answer.topic.prize};

            for (let className in el3QPPh.cls) {
                el3QPPh.classList.toggle(className, el3QPPh.cls[className]);
            }  
            let cndBypl = answer.status == 'approved' && answer.prize > answer.topic.prize;
this.setState('sttj9nt', cndBypl);
if (cndBypl) { 
let elJtpUx = eo('span','AYXff'+ii4qHI+iiQlly,null,`class`,`reward-status up`);
ec('span');
}let cndzB8j = answer.status == 'approved' && answer.prize < answer.topic.prize;
this.setState('stsEg0N', cndzB8j);
if (cndzB8j) { 
let el1D_sm = eo('span','qUVff'+ii4qHI+iiQlly,null,`class`,`reward-status down`);
ec('span');
}let cmpI5aE = this._lc('c8SF4A0y9', {parent:component,parentTop:layout,props:{coins:answer.prize || answer.topic.prize},insideLoop:true,index:"" +ii4qHI+iiQlly});
let cnd336Y = answer.status == 'approved' && answer.prize != answer.topic.prize;
this.setState('stMpdBH', cnd336Y);
if (cnd336Y) { 
let elh2I6F = eo('div','KgRff'+ii4qHI+iiQlly,null,`class`,`bold text-right`);
let cndaJSx = answer.prize > answer.topic.prize;
this.setState('stghw17', cndaJSx);
if (cndaJSx) { 
let elyd9ge = eo('span','ScOff'+ii4qHI+iiQlly);
text(`+`);
ec('span');
}text( (answer.prize - answer.topic.prize).format() );
ec('div');
}ec('div');
ec('div');
ec('header');
let elmI7fd = eo('div','SXgff'+ii4qHI+iiQlly,null,`class`,`content m-b-2`);
let eldkv3X = eo('small','F81ff'+ii4qHI+iiQlly,null,`class`,`text-muted date`);
let el8itO4 = eo('i','D1gff'+ii4qHI+iiQlly,null,`class`,`ti ti-time`);
ec('i');
text( answer.createdAt.format );
ec('small');
let el6AzVt = eo('button','VJGff'+ii4qHI+iiQlly,null, eventListeners, {onclick:[function(e) {var $el = this;answer.display = ! answer.display}]},`type`,`button`,`class`,`d-block bold blue-text`);
text(`Display your answer`);
let elcyJJ2 = eo('span','UUGff'+ii4qHI+iiQlly,null,`class`,`ml-2`);
let cndzF3T = answer.display;
this.setState('stz5uQX', cndzF3T);
let cndumXB = !(cndzF3T);
this.setState('stU99xn', cndumXB);
if (cndzF3T) { 
let elBuUbY = eo('i','rHyff'+ii4qHI+iiQlly,null,`class`,`${fas('arrow-up') + ' icon'}`);
ec('i');
}else { 
let el6xvMp = eo('i','3Cdff'+ii4qHI+iiQlly,null,`class`,`${fas('arrow-down') + ' icon'}`);
ec('i');
}ec('span');
ec('button');
let cndR3Zc = answer.display;
this.setState('stSC297', cndR3Zc);
if (cndR3Zc) { 
let cmpIKt_ = this._lc('cgT2MMyGK', {parent:component,parentTop:layout,props:{content:answer.answer},state:'stSC297',insideLoop:true,index:"" +ii4qHI+iiQlly});
}ec('div');
let cndaaJU = answer.display;
this.setState('stQOv97', cndaaJU);
if (cndaaJU) { 
let eljI9A9 = eo('button','3_Cff'+ii4qHI+iiQlly,null, eventListeners, {onclick:[function(e) {var $el = this;answer.display = false}]},`type`,`button`,`class`,`text-left bold green-text`);
text(`Hide your answer`);
let cndJ2MQ = answer.display;
this.setState('stnKK_y', cndJ2MQ);
if (cndJ2MQ) { 
let elBot9S = eo('i','JrGff'+ii4qHI+iiQlly,null,`class`,`${fas('arrow-up') + ' ml-2 icon'}`);
ec('i');
}ec('button');
}let cndFK2_ = answer.status == 'rejected' && (answer.comment || answer.recordNote);
this.setState('stBSL_F', cndFK2_);
if (cndFK2_) { 
let elXiwtG = eo('footer','_9Xff'+ii4qHI+iiQlly);
text(`Note by:`);
let el4QvWt = eo('strong','Utiff'+ii4qHI+iiQlly);
text(answer.commentBy.name);
ec('strong');
let elMEv5H = eo('p','sttff'+ii4qHI+iiQlly,null,`class`,`note`);
let cndpSQw = answer.comment;
this.setState('stpxAHe', cndpSQw);
if (cndpSQw) { 
let cmpYGZR = this._lc('cyQEZJmlj', {parent:component,parentTop:layout,props:{content:answer.comment},state:'stpxAHe',insideLoop:true,index:"" +ii4qHI+iiQlly});
}ec('p');
let cndpMxH = answer.recordNote;
this.setState('stSdsLn', cndpMxH);
if (cndpMxH) { 
let cmpPjyy = this._lc('cEnmprBMg', {parent:component,parentTop:layout,props:{src:answer.recordNote},attrs:{src:`${answer.recordNote}`},state:'stSdsLn',insideLoop:true,index:"" +ii4qHI+iiQlly});
}ec('footer');
}ec('section');
}
ec('div');
}
ec('div');
ec('div');
let eltNKKD = eo('div',null,null,`class`,`col-lg-4 col-md-12`);
let elRwcXZ = eo('section',null,null,`class`,`card`,`id`,`dashboard-user-topics`);
let elXHIWs = eo('header',null,null,`class`,`card-header`);
let elF8IcO = eo('div',null,null,`class`,`media align-items-center`);
let eldE64p = eo('div',null,null,`class`,`text-center`,`id`,`total-topics`);
let elNY4xk = eo('span',null,null,`class`,`badge purple rounded-circle`);
text(component.topics.length > 99 ? '99+' : component.topics.length);
ec('span');
ec('div');
let el5YjBL = eo('div',null,null,`class`,`media-body`);
let el8tLHe = eo('h4',null,null,`class`,`card-title`);
text(`Topics`);
ec('h4');
let elQ8NC1 = eo('p',null,null,`class`,`card-subtitle`);
text(`you didn't answer yet.`);
ec('p');
ec('div');
ec('div');
ec('header');
let el9bzdi = eo('ul',null,null,`class`,`list-group list-group-fit topics-list mb-0`);
let elHQLqK = eo('ul');
for (let i in component.topics) {
let topic = component.topics[i]; 
 let ii5MES = 'iX7JQR4' + i;
let elpWJSD = eo('li','8W8cmhlatnmC' + i+ii5MES,null,`class`,`list-group-item border-left-0 border-right-0`);
let elZVuiB = eo('div','oTeff'+ii5MES,null,`class`,`media align-items-center`);
let elwHiCQ = eo('div','OYeff'+ii5MES,null,`class`,`media-body`);
let elYwobs = eo('a','Aulff'+ii5MES,null,`href`,`${URLS.topic(topic)}`,`class`,`text-body bold`);
text( topic.title );
let elhUUln = eo('span','0opff'+ii5MES,null,`class`,`float-right`);
let cmp354C = this._lc('cOBhjvi4X', {parent:component,parentTop:layout,props:{coins:topic.prize},insideLoop:true,index:"" +ii5MES});
ec('span');
ec('a');
let elcKTTs = ev('br','JF8ff'+ii5MES);
let elU3jGV = eo('a','6k2ff'+ii5MES,null,`href`,`${URLS.track(topic.track)}`,`class`,`d-block`);
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
let elRm966 = eo('div',null,null,`class`,`tab-pane fade`,`id`,`posts-tab`,`role`,`tabpanel`,`aria-labelledby`,`posts-tab`);
let cndnfZb = ! Is.null(component.isLoadingPosts);
this.setState('stMtMcj', cndnfZb);
if (cndnfZb) { 
let elHkk8h = eo('div','EHNf',null,`id`,`dashboard-posts`,`class`,`p-t-2`);
let cndBnDR = component.isLoadingPosts;
this.setState('stlVvNa', cndBnDR);
let cnd63U2 = !(cndBnDR);
this.setState('stQEb41', cnd63U2);
if (cndBnDR) { 
let cmpCAV3 = this._lc('cILrA_tLT', {parent:component,parentTop:layout,state:'stlVvNa'});
}else { 
let elU4od6 = eo('div');
let cndl6VZ = Is.empty(component.posts);
this.setState('st3qwHY', cndl6VZ);
let cndO_7O = !(cndl6VZ);
this.setState('stQTWBM', cndO_7O);
if (cndl6VZ) { 
let elaWiN5 = eo('h1','lGAf',null,`class`,`text-center`);
text(`No posts yet for you!`);
ec('h1');
}else { 
let elXQ8T4 = eo('div');
for (let i in component.posts) {
let post = component.posts[i]; 
 let iigJsO = 'NUx_6l_' + i;
let elJGv2d = eo('div','jniegtFfH168' + i+iigJsO,null,`class`,`m-b-1`);
let elWhuv5 = eo('div','I0Tff'+iigJsO,null,`class`,`post p-2`);
let elSXwUE = eo('a','Sq9ff'+iigJsO,null,`href`,`${URLS.post(post)}`);
text(post.title);
ec('a');
let elIIrk1 = eo('span','yKXff'+iigJsO,null,`class`,`badge`);
elIIrk1.cls = {'badge-success': post.status == 'approved', 'badge-warning': post.status == 'pending', 'badge-danger': post.status == 'rejected'};

            for (let className in elIIrk1.cls) {
                elIIrk1.classList.toggle(className, elIIrk1.cls[className]);
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