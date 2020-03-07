_Component({
                selector: 'timeline-page',
                c: 'TimelinePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','user','addNewPost','posts','lastP','newPostMessage'],
                children: {cTcnTYF6y:'post-placeholder',cryzIL09s:'user-online',cLBRPc_pk:'flk-time-ago',cO5ieC8zP:'flk-time-ago',cI0Ht4kfL:'markdown',cjqNVNcfy:'layout',cHhHGmc9L:'flk-message',cub2ePgHB:'new-post-modal'},
                render: function (component) {
                    let cmpnaut = this._lc('cjqNVNcfy', {parent:component,content:(layout) => {let cnddJw0 = component.isLoading;
this.setState('stedLCK', cnddJw0);
let cndDuX1 = !(cnddJw0);
this.setState('stKVswl', cndDuX1);
if (cnddJw0) { 
for (let i = 0; i < 4; i++) {
let iiAIQ4 = 'PV7edjG' + i;
let cmpEcIX = this._lc('cTcnTYF6y', {parent:component,parentTop:layout,state:'stedLCK',insideLoop:true,index:"" +iiAIQ4});
}
}else { 
let cnd_O2J = component.user.isLoggedIn();
this.setState('stir67u', cnd_O2J);
let cndOHQB = !(cnd_O2J);
this.setState('stsGKyi', cndOHQB);
if (cnd_O2J) { 
let elzHH59 = eo('section','9nnf',null,`class`,`m-b-2`,`id`,`new-post-timeline`);
let elxciCX = eo('button','6h4f',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewPost = true}]},`class`,`btn btn-success bold`);
let el9ciEl = eo('i','rF_f',null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
text(`POST`);
ec('button');
ec('section');
}let cndVYRS = Is.empty(component.posts);
this.setState('stOm7wq', cndVYRS);
let cndgEpI = !(cndVYRS);
this.setState('stXgA0O', cndgEpI);
if (cndVYRS) { 
let eldn19j = eo('h1','lXWf',null,`class`,`bold text-center`);
text(`No posts yet!`);
ec('h1');
}else { 
let elPyIIk = eo('div',null,null,`class`,`row`);
for (let i in component.posts) {
let post = component.posts[i]; 
 let ii91WY = 'tfXCayR' + i;
let elmj8nc = eo('div','uu5iWVid5oFg' + i+ii91WY,null,`class`,`col-6`);
let eljRBKS = eo('div','aLWff'+ii91WY,null,`class`,`post`);
let elu_VSV = ev('img','l95ff'+ii91WY,null,`src`,`${post.createdBy.image}`,`class`,`user-image`,`title`,`${post.createdBy.name}`,`alt`,`${post.createdBy.name}`);
let elmAfHf = eo('div','SyCff'+ii91WY,null,`class`,`meta`);
let elOX0q0 = eo('a','bseff'+ii91WY,null,`href`,`${ URLS.post(post) }`,`class`,`title`);
text(post.title);
ec('a');
let el76H8D = eo('div','ViMff'+ii91WY,null,`class`,`meta-info`);
let elHdO2u = eo('span','Qfkff'+ii91WY,null,`class`,`user-name`);
text(post.createdBy.name);
ec('span');
let cmp6bjo = this._lc('cryzIL09s', {parent:component,parentTop:layout,props:{id:post.createdBy.id},attrs:{id:`${post.createdBy.id}`},state:'stXgA0O',insideLoop:true,index:"" +ii91WY});
let cnd8RhR = component.lastP && component.lastP.id == post.id;
this.setState('stS4We9', cnd8RhR);
let cndy81W = !(cnd8RhR);
this.setState('st87gEW', cndy81W);
if (cnd8RhR) { 
let cmp3XmQ = this._lc('cLBRPc_pk', {parent:component,parentTop:layout,props:{timestamp:component.lastP.createdAt.timestamp},attrs:{class:'created-at'},state:'stS4We9',insideLoop:true,index:"" +ii91WY});
}else { 
let cmpEn9r = this._lc('cO5ieC8zP', {parent:component,parentTop:layout,props:{timestamp:post.createdAt.timestamp},attrs:{class:'created-at'},state:'st87gEW',insideLoop:true,index:"" +ii91WY});
}ec('div');
ec('div');
let elE6s3m = eo('article','o1Lff'+ii91WY);
let cmpvKul = this._lc('cI0Ht4kfL', {parent:component,parentTop:layout,props:{content:post.content.split('\n').slice(0, 10).join('\n')},insideLoop:true,index:"" +ii91WY});
let cnd9yFT = post.content.split('\n').length > 10;
this.setState('stnXyxS', cnd9yFT);
if (cnd9yFT) { 
let elk_mXH = eo('a','9Zfff'+ii91WY,null,`href`,`${ URLS.post(post) }`);
text(`Continue reading`);
ec('a');
}let elK3yIF = eo('section','OBqff'+ii91WY,null,`class`,`tags`);
for (let i in post.tags) {
let tag = post.tags[i]; 
 let iiwVe1 = 'S67x9YI' + i;
let elNjdEh = eo('span','Dgc3Abwq_hox' + i+ii91WY+iiwVe1,null,`class`,`tag`);
let el2pMNo = ev('img','LXtff'+ii91WY+iiwVe1,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let el5i0Ft = eo('span','srpff'+ii91WY+iiwVe1);
text('#' + tag.name);
ec('span');
ec('span');
}
ec('section');
ec('article');
ec('div');
ec('div');
}
ec('div');
}}}});
let cndPfHv = component.newPostMessage;
this.setState('stpNVUg', cndPfHv);
if (cndPfHv) { 
let cmpQyO3 = this._lc('cHhHGmc9L', {parent:component,events:{onclose:function(e) {let $el = this; component.newPostMessage = null}},content:(flkMessage) => {text(`Your post has been posted successfully and it will be previewed and posted once approved.`);
let elzzF5D = eo('i',null,null,`class`,`${fas('check-circle')} ml-2 icon`);
ec('i');
},state:'stpNVUg'});
}let cndSgkx = component.addNewPost;
this.setState('st4yb4L', cndSgkx);
if (cndSgkx) { 
let cmpveho = this._lc('cub2ePgHB', {parent:component,events:{onsave:function(e) {let $el = this; component.newPostMessage = true; component.posts.unshift(e); component.lastP = e;},onclose:function(e) {let $el = this; component.addNewPost = false}},state:'st4yb4L'});
}
                    this.isReadyToGo();
                }
        });