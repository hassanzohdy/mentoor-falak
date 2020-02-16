_Component({
                selector: 'timeline-page',
                c: 'TimelinePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','user','addNewPost','posts','pep','lastP','newPostMessage'],
                children: {cmil4nrkN:'post-placeholder',cqiGz4Uyt:'user-online',cff02VxxL:'flk-time-ago',c0E4WD49U:'flk-time-ago',coLMdy7Sg:'markdown',c8zOdrPoi:'post-comments',cBwd6kDsZ:'layout',cmZgWGof2:'flk-message',cbB8fr0DF:'new-post-modal'},
                render: function (component) {
                    let cmpuabX = this._lc('cBwd6kDsZ', {parent:component,content:(layout) => {let cndOrog = component.isLoading;
this.setState('st3svjp', cndOrog);
let cnd3xY4 = !(cndOrog);
this.setState('st8VPG9', cnd3xY4);
if (cndOrog) { 
for (let i = 0; i < 4; i++) {
let iiMgKZ = 'V76Vbrw' + i;
let cmpg5q3 = this._lc('cmil4nrkN', {parent:component,parentTop:layout,state:'st3svjp',insideLoop:true,index:"" +iiMgKZ});
}
}else { 
let cnd4QRb = component.user.isLoggedIn();
this.setState('st1kIWN', cnd4QRb);
let cndfGVg = !(cnd4QRb);
this.setState('stELHkq', cndfGVg);
if (cnd4QRb) { 
let elOCJAs = eo('section','TvBf',null,`class`,`m-b-2`,`id`,`new-post-timeline`);
let elOexg6 = eo('button','Ag5f',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewPost = true}]},`class`,`btn btn-success bold`);
let elCSpCj = eo('i','Hsof',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`POST`);
ec('button');
ec('section');
}let cndHNXE = Is.empty(component.posts);
this.setState('stbFiOw', cndHNXE);
let cndgV8c = !(cndHNXE);
this.setState('stukkb6', cndgV8c);
if (cndHNXE) { 
let el1EP3t = eo('h1','yqSf',null,`class`,`bold text-center`);
text(`No posts yet!`);
ec('h1');
}else { 
let cnd515i = component.pep;
this.setState('st0pckL', cnd515i);
if (cnd515i) { 
for (let i in component.posts) {
let post = component.posts[i]; 
 let iiPeET = '6K7AVGy' + i;
let eliARHH = eo('div','Fro8RYuBHJNd' + i+iiPeET,null,`class`,`post`);
let eli46No = ev('img','uSlff'+iiPeET,null,`src`,`${post.createdBy.image}`,`class`,`user-image`,`title`,`${post.createdBy.name}`,`alt`,`${post.createdBy.name}`);
let elW6W57 = eo('div','q6vff'+iiPeET,null,`class`,`meta`);
let elQQyqJ = eo('a','1mjff'+iiPeET,null,`href`,`${ URLS.post(post) }`,`class`,`title`);
text(post.title);
ec('a');
let el_EDLc = eo('div','ZHpff'+iiPeET,null,`class`,`meta-info`);
let elH0X9U = eo('span','w7Off'+iiPeET,null,`class`,`user-name`);
text(post.createdBy.name);
ec('span');
let cmpTAal = this._lc('cqiGz4Uyt', {parent:component,parentTop:layout,props:{id:post.createdBy.id},attrs:{id:`${post.createdBy.id}`},state:'st0pckL',insideLoop:true,index:"" +iiPeET});
let cndJ5zF = component.lastP && component.lastP.id == post.id;
this.setState('stemcHV', cndJ5zF);
let cndQCeu = !(cndJ5zF);
this.setState('stk6C90', cndQCeu);
if (cndJ5zF) { 
let cmpMs2U = this._lc('cff02VxxL', {parent:component,parentTop:layout,props:{timestamp:component.lastP.createdAt.timestamp},attrs:{class:'created-at'},state:'stemcHV',insideLoop:true,index:"" +iiPeET});
}else { 
let cmpp2G8 = this._lc('c0E4WD49U', {parent:component,parentTop:layout,props:{timestamp:post.createdAt.timestamp},attrs:{class:'created-at'},state:'stk6C90',insideLoop:true,index:"" +iiPeET});
}ec('div');
ec('div');
let elSQuEc = eo('article','8hVff'+iiPeET);
let cmpsc8a = this._lc('coLMdy7Sg', {parent:component,parentTop:layout,props:{content:post.content.split('\n').slice(0, 20).join('\n')},insideLoop:true,index:"" +iiPeET});
let cnd9Qec = post.content.split('\n').length > 20;
this.setState('stCx6ZN', cnd9Qec);
if (cnd9Qec) { 
let el26XFc = eo('a','viTff'+iiPeET,null,`href`,`${ URLS.post(post) }`);
text(`Continue reading`);
ec('a');
}let elw1GLu = eo('section','B_hff'+iiPeET,null,`class`,`tags`);
for (let i in post.tags) {
let tag = post.tags[i]; 
 let ii1dLu = 'veuninn' + i;
let el4D3_y = eo('span','Ev6SMMmUnq3X' + i+iiPeET+ii1dLu,null,`class`,`tag`);
let elZsFhi = ev('img','bZlff'+iiPeET+ii1dLu,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let el4CjkE = eo('span','hXIff'+iiPeET+ii1dLu);
text('#' + tag.name);
ec('span');
ec('span');
}
ec('section');
ec('article');
let cndFKt8 = post.image;
this.setState('stDgkxh', cndFKt8);
if (cndFKt8) { 
let eldfbMP = ev('img','tuYff'+iiPeET,null,`src`,`${post.image + '?s=o1'}`,`class`,`image`,`title`,`${post.title}`,`alt`,`${post.title}`);
}let cmpIZn8 = this._lc('c8zOdrPoi', {parent:component,parentTop:layout,props:{post:post,max:5},insideLoop:true,index:"" +iiPeET});
ec('div');
}
}let elaPdck = eo('div',null,null,`class`,`row posts-list`);
for (let i in component.posts) {
let post = component.posts[i]; 
 let iisorK = 'U5XqsRW' + i;
let elmdPEY = eo('div','ChSH_OI6_6IS' + i+iisorK,null,`class`,`col-lg-3 col-md-4 col-sm-6`);
let elgGAEs = eo('div','yMJff'+iisorK,null,`class`,`post`);
let el1elsh = eo('a','6i5ff'+iisorK,null,`href`,`${URLS.post(post)}`,`class`,`link`);
let elQms0Q = ev('img','UZ6ff'+iisorK,null,`src`,`${post.image ? post.image + '?w=400' : assets('images/default.png')}`,`class`,`image`,`title`,`${post.title}`,`alt`,`${post.title}`);
let elwfP_V = eo('div','LgKff'+iisorK,null,`class`,`title text-center`);
text(post.title);
ec('div');
ec('a');
ec('div');
ec('div');
}
ec('div');
}}}});
let cndN_QC = component.newPostMessage;
this.setState('stUQWq9', cndN_QC);
if (cndN_QC) { 
let cmplQe8 = this._lc('cmZgWGof2', {parent:component,events:{onclose:function(e) {let $el = this; component.newPostMessage = null}},content:(flkMessage) => {text(`Your post has been posted successfully and it will be previewed and posted once approved.`);
let el5A1Li = eo('i',null,null,`class`,`${fas('check-circle') + ' ml-2 icon'}`);
ec('i');
},state:'stUQWq9'});
}let cndXlPw = component.addNewPost;
this.setState('stotnh0', cndXlPw);
if (cndXlPw) { 
let cmp9Qqw = this._lc('cbB8fr0DF', {parent:component,events:{onsave:function(e) {let $el = this; component.newPostMessage = true; component.posts.unshift(e); component.lastP = e;},onclose:function(e) {let $el = this; component.addNewPost = false}},state:'stotnh0'});
}
                    this.isReadyToGo();
                }
        });