_Component({
                selector: 'dashboard-page',
                c: 'DashboardPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','loadPosts','siteName','answers','activeTab','topics','isLoadingPosts','posts'],
                children: {c18LW67cM:'flk-spinner',cGNLScu8d:'gold-icon',cNFECLKiu:'markdown',cij9fCnQq:'markdown',czPHJfq1m:'flk-audio-player',cQW39lSkS:'gold-icon',cuM_18e5L:'flk-spinner',cp_8rhrxF:'layout'},
                render: function (component) {
                    let cmpXBl2 = this._lc('cp_8rhrxF', {parent:component,content:(layout) => {let cndJW1x = component.isLoading;
this.setState('stucrj2', cndJW1x);
let cndIiXj = !(cndJW1x);
this.setState('st70qPn', cndIiXj);
if (cndJW1x) { 
let cmpuasX = this._lc('c18LW67cM', {parent:component,parentTop:layout,state:'stucrj2'});
}else { 
let el2UZtt = eo('h1',null,null,`class`,`m-b-1`);
text(`Dashboard`);
ec('h1');
let elHxo7n = eo('ul',null,null,`class`,`nav nav-tabs`);
let el_5NK2 = eo('li',null,null,`class`,`nav-item`);
let elAeHMW = eo('a',null,null,`class`,`nav-link active`,`data-toggle`,`tab`,`data-target`,`#academy-tab`);
let elTEXdB = eo('i',null,null,`class`,`${fas('university')} mr-1 icon`);
ec('i');
text(`Academy`);
ec('a');
ec('li');
let ela30Vd = eo('li',null,null,`class`,`nav-item`);
let elZNwfy = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.loadPosts()}]},`class`,`nav-link`,`data-toggle`,`tab`,`data-target`,`#posts-tab`);
let elLaHDo = eo('i',null,null,`class`,`${fas('mug-hot')} mr-1 icon`);
ec('i');
text(`Timeline Posts`);
ec('a');
ec('li');
ec('ul');
let elixu9g = eo('div',null,null,`class`,`tab-content`);
let elavHGK = eo('div',null,null,`class`,`tab-pane fade show active`,`id`,`academy-tab`);
let elRp3tF = eo('div',null,null,`class`,`row m-t-1`);
let elQ8Q6E = eo('div',null,null,`class`,`col-lg-8 col-md-12`,`id`,`user-answers`);
let elfcHCV = eo('ul',null,null,`class`,`nav nav-tabs`);
for (let index in component.answers) {
let answersCollection = component.answers[index]; 
 let iiQTpy = '7MqcLT6' + index;
let elaz8BH = eo('li','SYe1LtGJCZAc' + index+iiQTpy,null,`class`,`nav-item`);
let ellXg8v = eo('button','7X8ff'+iiQTpy,null, eventListeners, {onclick:[function(e) {var $el = this;component.activeTab = index;}]},`class`,`nav-link ${ answersCollection.status } ${cls({active: index == component.activeTab})}`,`data-target`,`#${ answersCollection.status }-answers`);
text( answersCollection.status );
let el0ztbv = eo('span','sJzff'+iiQTpy,null,`class`,`badge total-answers ${cls(answerStatusClass(answersCollection.status))}`);
text(answersCollection.answers.length);
ec('span');
ec('button');
ec('li');
}
ec('ul');
let ellKh4N = eo('div',null,null,`class`,`tab-content`);
for (let index in component.answers) {
let answersCollection = component.answers[index]; 
 let iivaV2 = 'iOtFtVK' + index;
let el8lClf = eo('div','XVnh7_6qaPUo' + index+iivaV2,null,`class`,`tab-pane ${ answersCollection.status } ${cls({active: index == component.activeTab})}`,`id`,`${ answersCollection.status }-answers`);
for (let i in answersCollection.answers) {
let answer = answersCollection.answers[i]; 
 let iiAjcI = '_H9s6OP' + i;
let elT_cEl = eo('section','m8dNrRUGiFNw' + i+iivaV2+iiAjcI,null,`class`,`card p-3 border-0`);
let elJM9i8 = eo('header','bDsff'+iivaV2+iiAjcI);
let elyn9jE = eo('div','wd9ff'+iivaV2+iiAjcI,null,`class`,`d-flex justify-content-between mb-2 flex-wrap`);
let el00f4H = eo('div','NYkff'+iivaV2+iiAjcI,null,`class`,`answerMeta`);
let elgLDRA = eo('h2','mRzff'+iivaV2+iiAjcI);
let eldZ4a4 = eo('span','N_hff'+iivaV2+iiAjcI,null,`class`,`mr-2`);
text(`Topic`);
ec('span');
let elhLC8M = eo('a','d8qff'+iivaV2+iiAjcI,null,`href`,`${URLS.topic(answer.topic, answer.track)}`);
text(answer.topic.title);
ec('a');
ec('h2');
let elyV92c = eo('div','Mnuff'+iivaV2+iiAjcI,null,`class`,`answerMetaTrack`);
let elYjXLq = eo('span','Wgqff'+iivaV2+iiAjcI,null,`class`,`text-muted mr-2`);
text(`Track`);
ec('span');
let elRO1_C = eo('a','boJff'+iivaV2+iiAjcI,null,`href`,`${URLS.track(answer.track)}`);
text(answer.track.name);
ec('a');
ec('div');
ec('div');
let elwWQVV = eo('div','_6Iff'+iivaV2+iiAjcI,null,`class`,` ${cls({'green-text': answer.status == 'approved' && answer.prize > answer.topic.prize, 'red-text': answer.status == 'approved' && answer.prize < answer.topic.prize})}`);
let cndEe0D = answer.status == 'approved' && answer.prize > answer.topic.prize;
this.setState('stdM0UJ', cndEe0D);
if (cndEe0D) { 
let elAbWxx = eo('span','AnOff'+iivaV2+iiAjcI,null,`class`,`reward-status up`);
ec('span');
}let cndVIsy = answer.status == 'approved' && answer.prize < answer.topic.prize;
this.setState('stznnhj', cndVIsy);
if (cndVIsy) { 
let elVxC4_ = eo('span','S_Yff'+iivaV2+iiAjcI,null,`class`,`reward-status down`);
ec('span');
}let cmpAzL1 = this._lc('cGNLScu8d', {parent:component,parentTop:layout,props:{coins:answer.prize || answer.topic.prize},insideLoop:true,index:"" +iivaV2+iiAjcI});
let cndT8Um = answer.status == 'approved' && answer.prize != answer.topic.prize;
this.setState('stvFToF', cndT8Um);
if (cndT8Um) { 
let elTN1NH = eo('div','VZXff'+iivaV2+iiAjcI,null,`class`,`bold text-right`);
let cndRTZ9 = answer.prize > answer.topic.prize;
this.setState('st7XH0s', cndRTZ9);
if (cndRTZ9) { 
let elrSOp4 = eo('span','7y3ff'+iivaV2+iiAjcI);
text(`+`);
ec('span');
}text( (answer.prize - answer.topic.prize).format() );
ec('div');
}ec('div');
ec('div');
ec('header');
let elxtLdu = eo('div','Sm7ff'+iivaV2+iiAjcI,null,`class`,`content m-b-2`);
let el8uGyb = eo('small','Gvoff'+iivaV2+iiAjcI,null,`class`,`text-muted date`);
let el8NIbd = eo('i','XnZff'+iivaV2+iiAjcI,null,`class`,`ti ti-time`);
ec('i');
text( answer.createdAt.format );
ec('small');
let elW0fzg = eo('button','IYTff'+iivaV2+iiAjcI,null, eventListeners, {onclick:[function(e) {var $el = this;answer.display = ! answer.display}]},`type`,`button`,`class`,`d-block bold blue-text`);
text(`Display your answer`);
let elJ5qZK = eo('span','47gff'+iivaV2+iiAjcI,null,`class`,`ml-2`);
let cndvwnE = answer.display;
this.setState('stLkK9k', cndvwnE);
let cndh4uU = !(cndvwnE);
this.setState('stzZJKs', cndh4uU);
if (cndvwnE) { 
let elBK6aw = eo('i','F3wff'+iivaV2+iiAjcI,null,`class`,`${fas('arrow-up')} icon`);
ec('i');
}else { 
let elUTojV = eo('i','Z1sff'+iivaV2+iiAjcI,null,`class`,`${fas('arrow-down')} icon`);
ec('i');
}ec('span');
ec('button');
let cndogfD = answer.display;
this.setState('stKkDBT', cndogfD);
if (cndogfD) { 
let cmpHlU0 = this._lc('cNFECLKiu', {parent:component,parentTop:layout,props:{content:answer.answer},state:'stKkDBT',insideLoop:true,index:"" +iivaV2+iiAjcI});
}ec('div');
let cnd5bhM = answer.display;
this.setState('stBjr4_', cnd5bhM);
if (cnd5bhM) { 
let elsPCiO = eo('button','UhRff'+iivaV2+iiAjcI,null, eventListeners, {onclick:[function(e) {var $el = this;answer.display = false}]},`type`,`button`,`class`,`text-left bold green-text`);
text(`Hide your answer`);
let cndxUE9 = answer.display;
this.setState('st6UhVi', cndxUE9);
if (cndxUE9) { 
let elps4sC = eo('i','VeFff'+iivaV2+iiAjcI,null,`class`,`${fas('arrow-up')} ml-2 icon`);
ec('i');
}ec('button');
}let cndBDaY = answer.status == 'rejected' && (answer.comment || answer.recordNote);
this.setState('stJON0h', cndBDaY);
if (cndBDaY) { 
let elh1T6L = eo('footer','ceyff'+iivaV2+iiAjcI);
text(`Note by:`);
let eltejSb = eo('strong','_eBff'+iivaV2+iiAjcI);
text(answer.commentBy.name);
ec('strong');
let elOZLZJ = eo('p','Uqoff'+iivaV2+iiAjcI,null,`class`,`note`);
let cndQkiG = answer.comment;
this.setState('stEmbEm', cndQkiG);
if (cndQkiG) { 
let cmpn8xt = this._lc('cij9fCnQq', {parent:component,parentTop:layout,props:{content:answer.comment},state:'stEmbEm',insideLoop:true,index:"" +iivaV2+iiAjcI});
}ec('p');
let cnd_AiM = answer.recordNote;
this.setState('stC_Qio', cnd_AiM);
if (cnd_AiM) { 
let cmpSJXH = this._lc('czPHJfq1m', {parent:component,parentTop:layout,props:{src:answer.recordNote},attrs:{src:`${answer.recordNote}`},state:'stC_Qio',insideLoop:true,index:"" +iivaV2+iiAjcI});
}ec('footer');
}ec('section');
}
ec('div');
}
ec('div');
ec('div');
let elP8QGO = eo('div',null,null,`class`,`col-lg-4 col-md-12`);
let elU1_65 = eo('section',null,null,`class`,`card`,`id`,`dashboard-user-topics`);
let el0Cm6D = eo('header',null,null,`class`,`card-header`);
let el51eqL = eo('div',null,null,`class`,`media align-items-center`);
let elOd0uE = eo('div',null,null,`class`,`text-center`,`id`,`total-topics`);
let elJYPTf = eo('span',null,null,`class`,`badge purple rounded-circle`);
text(component.topics.length > 99 ? '99+' : component.topics.length);
ec('span');
ec('div');
let elq0pSY = eo('div',null,null,`class`,`media-body`);
let elIkGba = eo('h4',null,null,`class`,`card-title`);
text(`Topics`);
ec('h4');
let elyvH1B = eo('p',null,null,`class`,`card-subtitle`);
text(`you didn't answer yet.`);
ec('p');
ec('div');
ec('div');
ec('header');
let eln3UoM = eo('ul',null,null,`class`,`list-group list-group-fit topics-list mb-0`);
let elQ3AQb = eo('ul');
for (let i in component.topics) {
let topic = component.topics[i]; 
 let iiUW9J = 's6gac2W' + i;
let elAGuq7 = eo('li','Nn9NIfweX0QL' + i+iiUW9J,null,`class`,`list-group-item border-left-0 border-right-0`);
let elt6osL = eo('div','cmTff'+iiUW9J,null,`class`,`media align-items-center`);
let elE6Tlg = eo('div','MHjff'+iiUW9J,null,`class`,`media-body`);
let elA4Ijj = eo('a','vd9ff'+iiUW9J,null,`href`,`${URLS.topic(topic)}`,`class`,`text-body bold`);
text( topic.title );
let elfsiD1 = eo('span','G91ff'+iiUW9J,null,`class`,`float-right`);
let cmpwzmO = this._lc('cQW39lSkS', {parent:component,parentTop:layout,props:{coins:topic.prize},insideLoop:true,index:"" +iiUW9J});
ec('span');
ec('a');
let elPDRLR = ev('br','re_ff'+iiUW9J);
let el3Qtrp = eo('a','IrCff'+iiUW9J,null,`href`,`${URLS.track(topic.track)}`,`class`,`d-block`);
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
let eljce3k = eo('div',null,null,`class`,`tab-pane fade`,`id`,`posts-tab`,`role`,`tabpanel`,`aria-labelledby`,`posts-tab`);
let cndATjd = ! Is.null(component.isLoadingPosts);
this.setState('stub88E', cndATjd);
if (cndATjd) { 
let elXSnmb = eo('div','Qeef',null,`id`,`dashboard-posts`,`class`,`p-t-2`);
let cndRDVD = component.isLoadingPosts;
this.setState('stHSnW2', cndRDVD);
let cnd31MW = !(cndRDVD);
this.setState('stf9HXw', cnd31MW);
if (cndRDVD) { 
let cmpt53i = this._lc('cuM_18e5L', {parent:component,parentTop:layout,state:'stHSnW2'});
}else { 
let el05QoP = eo('div');
let cndDOn6 = Is.empty(component.posts);
this.setState('stMzrPU', cndDOn6);
let cndQZ1P = !(cndDOn6);
this.setState('stdxSOx', cndQZ1P);
if (cndDOn6) { 
let elDyPbZ = eo('h1','gnXf',null,`class`,`text-center`);
text(`No posts yet for you!`);
ec('h1');
}else { 
let elHwbz4 = eo('div');
for (let i in component.posts) {
let post = component.posts[i]; 
 let ii6wGk = 'pKxDyT0' + i;
let elvHzw9 = eo('div','hQ4f9LhwSWW2' + i+ii6wGk,null,`class`,`m-b-1`);
let el_xDYU = eo('div','9IJff'+ii6wGk,null,`class`,`post p-2`);
let elRQXEJ = eo('a','DFwff'+ii6wGk,null,`href`,`${URLS.post(post)}`);
text(post.title);
ec('a');
let elaEUi5 = eo('span','IcXff'+ii6wGk,null,`class`,`badge ${cls({'badge-success': post.status == 'approved', 'badge-warning': post.status == 'pending', 'badge-danger': post.status == 'rejected'})}`);
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