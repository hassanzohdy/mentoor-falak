_Component({
                selector: 'timeline-page',
                c: 'TimelinePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','user','addNewPost','posts','pep','lastP','newPostMessage'],
                children: {cDWpQkVh1:'post-placeholder',cUXQ9G1Ge:'user-online',cI1Hpx3RB:'flk-time-ago',c6sRJjHRW:'flk-time-ago',cnMZGMRdg:'markdown',cx_OGmMxx:'post-comments',cdp4ENlcd:'layout',c_zCeNnD6:'flk-message',cGc0OQekZ:'new-post-modal'},
                render: function (component) {
                    let cmpl5S0 = this._lc('cdp4ENlcd', {parent:component,content:(layout) => {let cndIflK = component.isLoading;
this.setState('styTsja', cndIflK);
let cnd1K_k = !(cndIflK);
this.setState('stkdo7p', cnd1K_k);
if (cndIflK) { 
for (let i = 0; i < 4; i++) {
let iii4We = 'gAZJ2ai' + i;
let cmpv73X = this._lc('cDWpQkVh1', {parent:component,parentTop:layout,state:'styTsja',insideLoop:true,index:"" +iii4We});
}
}else { 
let cndgRf_ = component.user.isLoggedIn();
this.setState('stGhThd', cndgRf_);
let cndKrfF = !(cndgRf_);
this.setState('stU1Xj5', cndKrfF);
if (cndgRf_) { 
let elDZKfB = eo('section','2s9f',null,`class`,`m-b-2`,`id`,`new-post-timeline`);
let elmMjt7 = eo('button','N9af',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewPost = true}]},`class`,`btn btn-success bold`);
let elzi9HJ = eo('i','5AZf',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`POST`);
ec('button');
ec('section');
}let cndUz8K = Is.empty(component.posts);
this.setState('stLf3Vd', cndUz8K);
let cndxD7b = !(cndUz8K);
this.setState('stDINiC', cndxD7b);
if (cndUz8K) { 
let elEzPIG = eo('h1','mn4f',null,`class`,`bold text-center`);
text(`No posts yet!`);
ec('h1');
}else { 
let cnddJAf = component.pep;
this.setState('stOSWwt', cnddJAf);
if (cnddJAf) { 
for (let i in component.posts) {
let post = component.posts[i]; 
 let iiKDbe = 'ouox8Kn' + i;
let elgKxNW = eo('div','EvDRdCfftupr' + i+iiKDbe,null,`class`,`post`);
let elA7ugo = ev('img','Xfcff'+iiKDbe,null,`src`,`${post.createdBy.image}`,`class`,`user-image`,`title`,`${post.createdBy.name}`,`alt`,`${post.createdBy.name}`);
let elFLFnk = eo('div','VWvff'+iiKDbe,null,`class`,`meta`);
let el3zQqN = eo('a','_IJff'+iiKDbe,null,`href`,`${ URLS.post(post) }`,`class`,`title`);
text(post.title);
ec('a');
let el4Fmd_ = eo('div','vhtff'+iiKDbe,null,`class`,`meta-info`);
let el_cIO5 = eo('span','chbff'+iiKDbe,null,`class`,`user-name`);
text(post.createdBy.name);
ec('span');
let cmpiKg1 = this._lc('cUXQ9G1Ge', {parent:component,parentTop:layout,props:{id:post.createdBy.id},attrs:{id:`${post.createdBy.id}`},state:'stOSWwt',insideLoop:true,index:"" +iiKDbe});
let cndp6fP = component.lastP && component.lastP.id == post.id;
this.setState('stQIRdA', cndp6fP);
let cnd1oux = !(cndp6fP);
this.setState('st5xaly', cnd1oux);
if (cndp6fP) { 
let cmpDGnG = this._lc('cI1Hpx3RB', {parent:component,parentTop:layout,props:{timestamp:component.lastP.createdAt.timestamp},attrs:{class:'created-at'},state:'stQIRdA',insideLoop:true,index:"" +iiKDbe});
}else { 
let cmp5uI9 = this._lc('c6sRJjHRW', {parent:component,parentTop:layout,props:{timestamp:post.createdAt.timestamp},attrs:{class:'created-at'},state:'st5xaly',insideLoop:true,index:"" +iiKDbe});
}ec('div');
ec('div');
let eljiarQ = eo('article','9_tff'+iiKDbe);
let cmplNpU = this._lc('cnMZGMRdg', {parent:component,parentTop:layout,props:{content:post.content.split('\n').slice(0, 20).join('\n')},insideLoop:true,index:"" +iiKDbe});
let cndaTRF = post.content.split('\n').length > 20;
this.setState('stT6GVD', cndaTRF);
if (cndaTRF) { 
let elx7gaI = eo('a','1mYff'+iiKDbe,null,`href`,`${ URLS.post(post) }`);
text(`Continue reading`);
ec('a');
}let elBf42o = eo('section','_qpff'+iiKDbe,null,`class`,`tags`);
for (let i in post.tags) {
let tag = post.tags[i]; 
 let iiEiju = '0e5_hKp' + i;
let elSlcRy = eo('span','ICanWn6aBCUE' + i+iiKDbe+iiEiju,null,`class`,`tag`);
let elwtkb_ = ev('img','XgPff'+iiKDbe+iiEiju,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let el5DmoY = eo('span','vhYff'+iiKDbe+iiEiju);
text('#' + tag.name);
ec('span');
ec('span');
}
ec('section');
ec('article');
let cndQZ8G = post.image;
this.setState('stGepoV', cndQZ8G);
if (cndQZ8G) { 
let elcSC8q = ev('img','nvuff'+iiKDbe,null,`src`,`${post.image + '?s=o1'}`,`class`,`image`,`title`,`${post.title}`,`alt`,`${post.title}`);
}let cmpv2YA = this._lc('cx_OGmMxx', {parent:component,parentTop:layout,props:{post:post,max:5},insideLoop:true,index:"" +iiKDbe});
ec('div');
}
}let elZXrb8 = eo('div',null,null,`class`,`row posts-list`);
for (let i in component.posts) {
let post = component.posts[i]; 
 let iijvE8 = 'N6JGSa0' + i;
let el3qEF0 = eo('div','5UYHCvbBpF93' + i+iijvE8,null,`class`,`col-lg-3 col-md-4 col-sm-6`);
let elR_UUN = eo('div','4y3ff'+iijvE8,null,`class`,`post`);
let elHFvVB = eo('a','VrDff'+iijvE8,null,`href`,`${URLS.post(post)}`,`class`,`link`);
let elzpWfp = ev('img','7nUff'+iijvE8,null,`src`,`${post.image ? post.image + '?w=400' : assets('images/default.png')}`,`class`,`image`,`title`,`${post.title}`,`alt`,`${post.title}`);
let ellbI1z = eo('div','ZCWff'+iijvE8,null,`class`,`title text-center`);
text(post.title);
ec('div');
ec('a');
ec('div');
ec('div');
}
ec('div');
}}}});
let cnd0yuN = component.newPostMessage;
this.setState('stcxvu3', cnd0yuN);
if (cnd0yuN) { 
let cmpu_4k = this._lc('c_zCeNnD6', {parent:component,events:{onclose:function(e) {let $el = this; component.newPostMessage = null}},content:(flkMessage) => {text(`Your post has been posted successfully and it will be previewed and posted once approved.`);
let elH0Mui = eo('i',null,null,`class`,`${fas('check-circle') + ' ml-2 icon'}`);
ec('i');
},state:'stcxvu3'});
}let cndDAW9 = component.addNewPost;
this.setState('stTiba1', cndDAW9);
if (cndDAW9) { 
let cmpBgMY = this._lc('cGc0OQekZ', {parent:component,events:{onsave:function(e) {let $el = this; component.newPostMessage = true; component.posts.unshift(e); component.lastP = e;},onclose:function(e) {let $el = this; component.addNewPost = false}},state:'stTiba1'});
}
                    this.isReadyToGo();
                }
        });