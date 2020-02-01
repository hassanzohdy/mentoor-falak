_Component({
                selector: 'timeline-page',
                c: 'TimelinePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','user','addNewPost','posts','pep','lastP','newPostMessage'],
                children: {cJBdLSoHe:'post-placeholder',clDkj8hB0:'user-online',ch_BiIiBZ:'flk-time-ago',cl0PeZtQ9:'flk-time-ago',cc4oTZwSO:'markdown',cixAJu8LA:'post-comments',cPhXG0HP3:'layout',cwktC6mml:'flk-message',co8aj2hDe:'new-post-modal'},
                render: function (component) {
                    let cmpYNDN = this._lc('cPhXG0HP3', {parent:component,content:(layout) => {let cndOesN = component.isLoading;
this.setState('stokg4x', cndOesN);
let cndeobt = !(cndOesN);
this.setState('stgFjgm', cndeobt);
if (cndOesN) { 
for (let i = 0; i < 4; i++) {
let iiVJ58 = 'KYk_5f2' + i;
let cmpkNWq = this._lc('cJBdLSoHe', {parent:component,parentTop:layout,state:'stokg4x',insideLoop:true,index:"" +iiVJ58});
}
}else { 
let cndkZIJ = component.user.isLoggedIn();
this.setState('stB_BwO', cndkZIJ);
let cndbi5x = !(cndkZIJ);
this.setState('st_iZee', cndbi5x);
if (cndkZIJ) { 
let ellPT5o = eo('section','vNIf',null,`class`,`m-b-2`,`id`,`new-post-timeline`);
let elin00N = eo('button','aJPf',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewPost = true}]},`class`,`btn btn-success bold`);
let elFYlji = eo('i','4FWf',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`POST`);
ec('button');
ec('section');
}let cnd69sq = Is.empty(component.posts);
this.setState('stnLLRZ', cnd69sq);
let cndMimr = !(cnd69sq);
this.setState('st98pa_', cndMimr);
if (cnd69sq) { 
let el7skWM = eo('h1','6Vcf',null,`class`,`bold text-center`);
text(`No posts yet!`);
ec('h1');
}else { 
let cndCdHp = component.pep;
this.setState('stdjOgS', cndCdHp);
if (cndCdHp) { 
for (let i in component.posts) {
let post = component.posts[i]; 
 let iirrjr = 'lEWOm72' + i;
let el_Vtxl = eo('div','l1E4Rk9m0GcE' + i+iirrjr,null,`class`,`post`);
let ell5ukj = ev('img','2Awff'+iirrjr,null,`src`,`${post.createdBy.image}`,`class`,`user-image`,`title`,`${post.createdBy.name}`,`alt`,`${post.createdBy.name}`);
let el8dqzT = eo('div','m5rff'+iirrjr,null,`class`,`meta`);
let elkRULB = eo('a','Kh4ff'+iirrjr,null,`href`,`${ URLS.post(post) }`,`class`,`title`);
text(post.title);
ec('a');
let eldL_fq = eo('div','0V3ff'+iirrjr,null,`class`,`meta-info`);
let ellO6lk = eo('span','1Q2ff'+iirrjr,null,`class`,`user-name`);
text(post.createdBy.name);
ec('span');
let cmpwdqy = this._lc('clDkj8hB0', {parent:component,parentTop:layout,props:{id:post.createdBy.id},attrs:{id:`${post.createdBy.id}`},state:'stdjOgS',insideLoop:true,index:"" +iirrjr});
let cndqdqq = component.lastP && component.lastP.id == post.id;
this.setState('stA4Sil', cndqdqq);
let cndlGwe = !(cndqdqq);
this.setState('strnTiY', cndlGwe);
if (cndqdqq) { 
let cmp5HjL = this._lc('ch_BiIiBZ', {parent:component,parentTop:layout,props:{timestamp:component.lastP.createdAt.timestamp},attrs:{class:'created-at'},state:'stA4Sil',insideLoop:true,index:"" +iirrjr});
}else { 
let cmptHLF = this._lc('cl0PeZtQ9', {parent:component,parentTop:layout,props:{timestamp:post.createdAt.timestamp},attrs:{class:'created-at'},state:'strnTiY',insideLoop:true,index:"" +iirrjr});
}ec('div');
ec('div');
let el5iBuu = eo('article','dwFff'+iirrjr);
let cmpeVh6 = this._lc('cc4oTZwSO', {parent:component,parentTop:layout,props:{content:post.content.split('\n').slice(0, 20).join('\n')},insideLoop:true,index:"" +iirrjr});
let cndSEqY = post.content.split('\n').length > 20;
this.setState('sthT_gp', cndSEqY);
if (cndSEqY) { 
let elbms4s = eo('a','S8Bff'+iirrjr,null,`href`,`${ URLS.post(post) }`);
text(`Continue reading`);
ec('a');
}let elaAQ94 = eo('section','MVvff'+iirrjr,null,`class`,`tags`);
for (let i in post.tags) {
let tag = post.tags[i]; 
 let iio9uU = '7TPCH1o' + i;
let elzGGdN = eo('span','cTBOPjHW3Ze7' + i+iirrjr+iio9uU,null,`class`,`tag`);
let elnsKJt = ev('img','z1cff'+iirrjr+iio9uU,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elwciPO = eo('span','xAXff'+iirrjr+iio9uU);
text('#' + tag.name);
ec('span');
ec('span');
}
ec('section');
ec('article');
let cnd2RDK = post.image;
this.setState('st4bfcs', cnd2RDK);
if (cnd2RDK) { 
let elAcxUH = ev('img','NaXff'+iirrjr,null,`src`,`${post.image + '?s=o1'}`,`class`,`image`,`title`,`${post.title}`,`alt`,`${post.title}`);
}let cmp5phI = this._lc('cixAJu8LA', {parent:component,parentTop:layout,props:{post:post,max:5},insideLoop:true,index:"" +iirrjr});
ec('div');
}
}let elwiC1d = eo('div',null,null,`class`,`row posts-list`);
for (let i in component.posts) {
let post = component.posts[i]; 
 let ii0ZUn = 'c1sorSH' + i;
let elPkm4P = eo('div','RwHjIt5tFSkZ' + i+ii0ZUn,null,`class`,`col-lg-3 col-md-4 col-sm-6`);
let eltNXgQ = eo('div','kbvff'+ii0ZUn,null,`class`,`post`);
let elhScoD = eo('a','S_5ff'+ii0ZUn,null,`href`,`${URLS.post(post)}`,`class`,`link`);
let elGzwl7 = ev('img','q8Eff'+ii0ZUn,null,`src`,`${post.image ? post.image + '?w=400' : assets('images/default.png')}`,`class`,`image`,`title`,`${post.title}`,`alt`,`${post.title}`);
let el6jNDh = eo('div','FZFff'+ii0ZUn,null,`class`,`title text-center`);
text(post.title);
ec('div');
ec('a');
ec('div');
ec('div');
}
ec('div');
}}}});
let cnd1PnR = component.newPostMessage;
this.setState('stJocm7', cnd1PnR);
if (cnd1PnR) { 
let cmpJEv3 = this._lc('cwktC6mml', {parent:component,events:{onclose:function(e) {let $el = this; component.newPostMessage = null}},content:(flkMessage) => {text(`Your post has been posted successfully and it will be previewed and posted once approved.`);
let elhOo29 = eo('i',null,null,`class`,`${fas('check-circle') + ' ml-2 icon'}`);
ec('i');
},state:'stJocm7'});
}let cndE9YL = component.addNewPost;
this.setState('stehfax', cndE9YL);
if (cndE9YL) { 
let cmpBz84 = this._lc('co8aj2hDe', {parent:component,events:{onsave:function(e) {let $el = this; component.newPostMessage = true; component.posts.unshift(e); component.lastP = e;},onclose:function(e) {let $el = this; component.addNewPost = false}},state:'stehfax'});
}
                    this.isReadyToGo();
                }
        });