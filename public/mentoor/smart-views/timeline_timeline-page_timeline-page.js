_Component({
                selector: 'timeline-page',
                c: 'TimelinePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','user','addNewPost','posts','pep','lastP','newPostMessage'],
                children: {cRy1aNSAF:'post-placeholder',cTTS6pWPy:'user-online',cw9tQZMiL:'flk-time-ago',cwQtGFqNB:'flk-time-ago',cjTIRFpg3:'markdown',cdvlBweuM:'post-comments',cyHhMIiG1:'layout',cy5YVtCJV:'flk-message',ctzsuO0NY:'new-post-modal'},
                render: function (component) {
                    let cmpZgHm = this._lc('cyHhMIiG1', {parent:component,content:(layout) => {let cndJJT_ = component.isLoading;
this.setState('stlgViZ', cndJJT_);
let cndy5Xh = !(cndJJT_);
this.setState('stKdyE5', cndy5Xh);
if (cndJJT_) { 
for (let i = 0; i < 4; i++) {
let ii15F6 = '8gSxGr3' + i;
let cmpudH0 = this._lc('cRy1aNSAF', {parent:component,parentTop:layout,state:'stlgViZ',insideLoop:true,index:"" +ii15F6});
}
}else { 
let cndDkr3 = component.user.isLoggedIn();
this.setState('stea0BK', cndDkr3);
let cndPW5E = !(cndDkr3);
this.setState('stW27oS', cndPW5E);
if (cndDkr3) { 
let elqpLUC = eo('section','Nb5f',null,`class`,`m-b-2`,`id`,`new-post-timeline`);
let elCPZDB = eo('button','0i9f',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewPost = true}]},`class`,`btn btn-success bold`);
let elA50Wy = eo('i','RC7f',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`POST`);
ec('button');
ec('section');
}let cndl08F = Is.empty(component.posts);
this.setState('st6rqpT', cndl08F);
let cndiU3L = !(cndl08F);
this.setState('stObOO7', cndiU3L);
if (cndl08F) { 
let el9s7Dr = eo('h1','qnPf',null,`class`,`bold text-center`);
text(`No posts yet!`);
ec('h1');
}else { 
let cndzlCy = component.pep;
this.setState('stvOPFM', cndzlCy);
if (cndzlCy) { 
for (let i in component.posts) {
let post = component.posts[i]; 
 let iitui8 = 'rxe9jW9' + i;
let el8Zbez = eo('div','b7DCs7onSYTv' + i+iitui8,null,`class`,`post`);
let elHWWmC = ev('img','o6Iff'+iitui8,null,`src`,`${post.createdBy.image}`,`class`,`user-image`,`title`,`${post.createdBy.name}`,`alt`,`${post.createdBy.name}`);
let eloG3Zx = eo('div','Vezff'+iitui8,null,`class`,`meta`);
let elWtC85 = eo('a','AXGff'+iitui8,null,`href`,`${ URLS.post(post) }`,`class`,`title`);
text(post.title);
ec('a');
let eloflRo = eo('div','PC5ff'+iitui8,null,`class`,`meta-info`);
let elv0Lf1 = eo('span','sTfff'+iitui8,null,`class`,`user-name`);
text(post.createdBy.name);
ec('span');
let cmpzF8V = this._lc('cTTS6pWPy', {parent:component,parentTop:layout,props:{id:post.createdBy.id},attrs:{id:`${post.createdBy.id}`},state:'stvOPFM',insideLoop:true,index:"" +iitui8});
let cndJAvQ = component.lastP && component.lastP.id == post.id;
this.setState('styNZCa', cndJAvQ);
let cndnmjo = !(cndJAvQ);
this.setState('stQtIMy', cndnmjo);
if (cndJAvQ) { 
let cmpGaI8 = this._lc('cw9tQZMiL', {parent:component,parentTop:layout,props:{timestamp:component.lastP.createdAt.timestamp},attrs:{class:'created-at'},state:'styNZCa',insideLoop:true,index:"" +iitui8});
}else { 
let cmpAcpH = this._lc('cwQtGFqNB', {parent:component,parentTop:layout,props:{timestamp:post.createdAt.timestamp},attrs:{class:'created-at'},state:'stQtIMy',insideLoop:true,index:"" +iitui8});
}ec('div');
ec('div');
let elYPvkK = eo('article','zIXff'+iitui8);
let cmp2SZm = this._lc('cjTIRFpg3', {parent:component,parentTop:layout,props:{content:post.content.split('\n').slice(0, 20).join('\n')},insideLoop:true,index:"" +iitui8});
let cndQxWm = post.content.split('\n').length > 20;
this.setState('stEKP2S', cndQxWm);
if (cndQxWm) { 
let elrfBDj = eo('a','0rOff'+iitui8,null,`href`,`${ URLS.post(post) }`);
text(`Continue reading`);
ec('a');
}let el_LYtI = eo('section','dkbff'+iitui8,null,`class`,`tags`);
for (let i in post.tags) {
let tag = post.tags[i]; 
 let iiaX2h = 'o9tsYXD' + i;
let elsRidj = eo('span','NuAV4_gupvNy' + i+iitui8+iiaX2h,null,`class`,`tag`);
let elH_Vka = ev('img','JQ4ff'+iitui8+iiaX2h,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elR5upJ = eo('span','zK5ff'+iitui8+iiaX2h);
text('#' + tag.name);
ec('span');
ec('span');
}
ec('section');
ec('article');
let cnd_tPW = post.image;
this.setState('sth7FsC', cnd_tPW);
if (cnd_tPW) { 
let el4PvI3 = ev('img','_iBff'+iitui8,null,`src`,`${post.image + '?s=o1'}`,`class`,`image`,`title`,`${post.title}`,`alt`,`${post.title}`);
}let cmplB89 = this._lc('cdvlBweuM', {parent:component,parentTop:layout,props:{post:post,max:5},insideLoop:true,index:"" +iitui8});
ec('div');
}
}let elUWsR3 = eo('div',null,null,`class`,`row posts-list`);
for (let i in component.posts) {
let post = component.posts[i]; 
 let iigjt3 = 'gPQjVUt' + i;
let elozYPd = eo('div','d2rqahszNHjy' + i+iigjt3,null,`class`,`col-lg-3 col-md-4 col-sm-6`);
let eleR_wH = eo('div','DhVff'+iigjt3,null,`class`,`post`);
let el2TGTt = eo('a','neFff'+iigjt3,null,`href`,`${URLS.post(post)}`,`class`,`link`);
let el7gzhV = ev('img','p0pff'+iigjt3,null,`src`,`${post.image ? post.image + '?w=400' : assets('images/default.png')}`,`class`,`image`,`title`,`${post.title}`,`alt`,`${post.title}`);
let elu0H22 = eo('div','E3Xff'+iigjt3,null,`class`,`title text-center`);
text(post.title);
ec('div');
ec('a');
ec('div');
ec('div');
}
ec('div');
}}}});
let cndeZfl = component.newPostMessage;
this.setState('stTSJkU', cndeZfl);
if (cndeZfl) { 
let cmpcseC = this._lc('cy5YVtCJV', {parent:component,events:{onclose:function(e) {let $el = this; component.newPostMessage = null}},content:(flkMessage) => {text(`Your post has been posted successfully and it will be previewed and posted once approved.`);
let elvfIvk = eo('i',null,null,`class`,`${fas('check-circle') + ' ml-2 icon'}`);
ec('i');
},state:'stTSJkU'});
}let cnd9su_ = component.addNewPost;
this.setState('st3EcHe', cnd9su_);
if (cnd9su_) { 
let cmpFPi_ = this._lc('ctzsuO0NY', {parent:component,events:{onsave:function(e) {let $el = this; component.newPostMessage = true; component.posts.unshift(e); component.lastP = e;},onclose:function(e) {let $el = this; component.addNewPost = false}},state:'st3EcHe'});
}
                    this.isReadyToGo();
                }
        });