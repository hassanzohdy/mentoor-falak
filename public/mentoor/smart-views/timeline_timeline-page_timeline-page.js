_Component({
                selector: 'timeline-page',
                c: 'TimelinePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','user','addNewPost','posts','pep','lastP','newPostMessage'],
                children: {c9boVwRYr:'post-placeholder',cI6S08C1U:'user-online',ctIJHhoWV:'flk-time-ago',cerkSqclT:'flk-time-ago',co99MDCnI:'markdown',cuLWrjkiC:'post-comments',cwWNlyDiU:'layout',caTypuRb8:'flk-message',cKrwCEG_S:'new-post-modal'},
                render: function (component) {
                    let cmpFZY5 = this._lc('cwWNlyDiU', {parent:component,content:(layout) => {let cndBk7z = component.isLoading;
this.setState('stlpYSc', cndBk7z);
let cnd5US7 = !(cndBk7z);
this.setState('stKNuIV', cnd5US7);
if (cndBk7z) { 
for (let i = 0; i < 4; i++) {
let iiozjy = 'xzo9Nfm' + i;
let cmp6oSA = this._lc('c9boVwRYr', {parent:component,parentTop:layout,state:'stlpYSc',insideLoop:true,index:"" +iiozjy});
}
}else { 
let cndXoV1 = component.user.isLoggedIn();
this.setState('stwemlb', cndXoV1);
let cndyOgN = !(cndXoV1);
this.setState('stLSbx1', cndyOgN);
if (cndXoV1) { 
let elHH064 = eo('section','bWaf',null,`class`,`m-b-2`,`id`,`new-post-timeline`);
let elEhaGY = eo('button','kU1f',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewPost = true}]},`class`,`btn btn-success bold`);
let elds0ny = eo('i','9AEf',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`POST`);
ec('button');
ec('section');
}let cndJ37J = Is.empty(component.posts);
this.setState('stkBFri', cndJ37J);
let cndXC74 = !(cndJ37J);
this.setState('stS7P0r', cndXC74);
if (cndJ37J) { 
let elZ3pj3 = eo('h1','taYf',null,`class`,`bold text-center`);
text(`No posts yet!`);
ec('h1');
}else { 
let cnd0vPB = component.pep;
this.setState('stsa0rA', cnd0vPB);
if (cnd0vPB) { 
for (let i in component.posts) {
let post = component.posts[i]; 
 let ii4vyF = '4DehLgk' + i;
let elTkX0n = eo('div','_CrLDus4JlNc' + i+ii4vyF,null,`class`,`post`);
let elkC6Op = ev('img','eNKff'+ii4vyF,null,`src`,`${post.createdBy.image}`,`class`,`user-image`,`title`,`${post.createdBy.name}`,`alt`,`${post.createdBy.name}`);
let elo7Xkh = eo('div','fhLff'+ii4vyF,null,`class`,`meta`);
let eleGK3l = eo('a','34gff'+ii4vyF,null,`href`,`${ URLS.post(post) }`,`class`,`title`);
text(post.title);
ec('a');
let elMJMEX = eo('div','vCzff'+ii4vyF,null,`class`,`meta-info`);
let elDK2z1 = eo('span','QDAff'+ii4vyF,null,`class`,`user-name`);
text(post.createdBy.name);
ec('span');
let cmpMPK_ = this._lc('cI6S08C1U', {parent:component,parentTop:layout,props:{id:post.createdBy.id},attrs:{id:`${post.createdBy.id}`},state:'stsa0rA',insideLoop:true,index:"" +ii4vyF});
let cndvDhT = component.lastP && component.lastP.id == post.id;
this.setState('stlPFjt', cndvDhT);
let cndfSEc = !(cndvDhT);
this.setState('stajx5_', cndfSEc);
if (cndvDhT) { 
let cmpsTvM = this._lc('ctIJHhoWV', {parent:component,parentTop:layout,props:{timestamp:component.lastP.createdAt.timestamp},attrs:{class:'created-at'},state:'stlPFjt',insideLoop:true,index:"" +ii4vyF});
}else { 
let cmp9CdY = this._lc('cerkSqclT', {parent:component,parentTop:layout,props:{timestamp:post.createdAt.timestamp},attrs:{class:'created-at'},state:'stajx5_',insideLoop:true,index:"" +ii4vyF});
}ec('div');
ec('div');
let elrravB = eo('article','3vaff'+ii4vyF);
let cmpg45H = this._lc('co99MDCnI', {parent:component,parentTop:layout,props:{content:post.content.split('\n').slice(0, 20).join('\n')},insideLoop:true,index:"" +ii4vyF});
let cnd6n8A = post.content.split('\n').length > 20;
this.setState('stGefvT', cnd6n8A);
if (cnd6n8A) { 
let elekmKO = eo('a','oKFff'+ii4vyF,null,`href`,`${ URLS.post(post) }`);
text(`Continue reading`);
ec('a');
}let elpMhP3 = eo('section','qfiff'+ii4vyF,null,`class`,`tags`);
for (let i in post.tags) {
let tag = post.tags[i]; 
 let ii17LL = 'vvhDg2R' + i;
let elCRP50 = eo('span','vKfTrWsVsiev' + i+ii4vyF+ii17LL,null,`class`,`tag`);
let elbGiUb = ev('img','inFff'+ii4vyF+ii17LL,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elRuVeZ = eo('span','trqff'+ii4vyF+ii17LL);
text('#' + tag.name);
ec('span');
ec('span');
}
ec('section');
ec('article');
let cnddzMF = post.image;
this.setState('stoulZE', cnddzMF);
if (cnddzMF) { 
let elnwzRf = ev('img','Dxzff'+ii4vyF,null,`src`,`${post.image + '?s=o1'}`,`class`,`image`,`title`,`${post.title}`,`alt`,`${post.title}`);
}let cmp0Ylf = this._lc('cuLWrjkiC', {parent:component,parentTop:layout,props:{post:post,max:5},insideLoop:true,index:"" +ii4vyF});
ec('div');
}
}let elVry5K = eo('div',null,null,`class`,`row posts-list`);
for (let i in component.posts) {
let post = component.posts[i]; 
 let iiJv1C = '9R_buxp' + i;
let elX_zWe = eo('div','4A41nx_o81OJ' + i+iiJv1C,null,`class`,`col-lg-3 col-md-4 col-sm-6`);
let elOMy6w = eo('div','SIgff'+iiJv1C,null,`class`,`post`);
let elkmBCA = eo('a','nfsff'+iiJv1C,null,`href`,`${URLS.post(post)}`,`class`,`link`);
let el89WEg = ev('img','I9kff'+iiJv1C,null,`src`,`${post.image ? post.image + '?w=400' : assets('images/default.png')}`,`class`,`image`,`title`,`${post.title}`,`alt`,`${post.title}`);
let elMGpV_ = eo('div','Lxzff'+iiJv1C,null,`class`,`title text-center`);
text(post.title);
ec('div');
ec('a');
ec('div');
ec('div');
}
ec('div');
}}}});
let cndxud3 = component.newPostMessage;
this.setState('staTMOD', cndxud3);
if (cndxud3) { 
let cmpV4s7 = this._lc('caTypuRb8', {parent:component,events:{onclose:function(e) {let $el = this; component.newPostMessage = null}},content:(flkMessage) => {text(`Your post has been posted successfully and it will be previewed and posted once approved.`);
let elt5jYH = eo('i',null,null,`class`,`${fas('check-circle') + ' ml-2 icon'}`);
ec('i');
},state:'staTMOD'});
}let cndwWpb = component.addNewPost;
this.setState('stNkH7E', cndwWpb);
if (cndwWpb) { 
let cmpIKmK = this._lc('cKrwCEG_S', {parent:component,events:{onsave:function(e) {let $el = this; component.newPostMessage = true; component.posts.unshift(e); component.lastP = e;},onclose:function(e) {let $el = this; component.addNewPost = false}},state:'stNkH7E'});
}
                    this.isReadyToGo();
                }
        });