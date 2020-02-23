_Component({
                selector: 'timeline-page',
                c: 'TimelinePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','user','addNewPost','posts','pep','lastP','newPostMessage'],
                children: {cCYVpF19Z:'post-placeholder',c0YmN0zNE:'user-online',cE_tVxC9j:'flk-time-ago',cb169Ytxy:'flk-time-ago',c8Vijm6ff:'markdown',cChZmc4eT:'post-comments',cvyzMsHTH:'layout',cb_G5OtT5:'flk-message',caiQ42SIc:'new-post-modal'},
                render: function (component) {
                    let cmpLBvN = this._lc('cvyzMsHTH', {parent:component,content:(layout) => {let cnd3_y6 = component.isLoading;
this.setState('stpx7Lh', cnd3_y6);
let cndSZ8o = !(cnd3_y6);
this.setState('std4w0y', cndSZ8o);
if (cnd3_y6) { 
for (let i = 0; i < 4; i++) {
let iiyvAS = 'isakLzY' + i;
let cmpFZ9V = this._lc('cCYVpF19Z', {parent:component,parentTop:layout,state:'stpx7Lh',insideLoop:true,index:"" +iiyvAS});
}
}else { 
let cndyPNQ = component.user.isLoggedIn();
this.setState('stW4Q7h', cndyPNQ);
let cndEoe6 = !(cndyPNQ);
this.setState('stdu90u', cndEoe6);
if (cndyPNQ) { 
let eldtPlN = eo('section','c_5f',null,`class`,`m-b-2`,`id`,`new-post-timeline`);
let el_Vsif = eo('button','7rtf',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewPost = true}]},`class`,`btn btn-success bold`);
let el5huUE = eo('i','Gvgf',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`POST`);
ec('button');
ec('section');
}let cnd1LRa = Is.empty(component.posts);
this.setState('st9ztTB', cnd1LRa);
let cndojVQ = !(cnd1LRa);
this.setState('styl4ga', cndojVQ);
if (cnd1LRa) { 
let elpmj6l = eo('h1','pSsf',null,`class`,`bold text-center`);
text(`No posts yet!`);
ec('h1');
}else { 
let cndRLrd = component.pep;
this.setState('stqwByM', cndRLrd);
if (cndRLrd) { 
for (let i in component.posts) {
let post = component.posts[i]; 
 let ii6jIL = 'Epac9NF' + i;
let elSaMDm = eo('div','bAatxpyuiUjP' + i+ii6jIL,null,`class`,`post`);
let elwZxLI = ev('img','r3Mff'+ii6jIL,null,`src`,`${post.createdBy.image}`,`class`,`user-image`,`title`,`${post.createdBy.name}`,`alt`,`${post.createdBy.name}`);
let el4VVIF = eo('div','OxUff'+ii6jIL,null,`class`,`meta`);
let elVw_w0 = eo('a','mGGff'+ii6jIL,null,`href`,`${ URLS.post(post) }`,`class`,`title`);
text(post.title);
ec('a');
let elJOC4t = eo('div','Yjeff'+ii6jIL,null,`class`,`meta-info`);
let elf0IoH = eo('span','Dz2ff'+ii6jIL,null,`class`,`user-name`);
text(post.createdBy.name);
ec('span');
let cmpDO2J = this._lc('c0YmN0zNE', {parent:component,parentTop:layout,props:{id:post.createdBy.id},attrs:{id:`${post.createdBy.id}`},state:'stqwByM',insideLoop:true,index:"" +ii6jIL});
let cndoyMr = component.lastP && component.lastP.id == post.id;
this.setState('stobpAn', cndoyMr);
let cnd2YuO = !(cndoyMr);
this.setState('stDtof3', cnd2YuO);
if (cndoyMr) { 
let cmpRCO1 = this._lc('cE_tVxC9j', {parent:component,parentTop:layout,props:{timestamp:component.lastP.createdAt.timestamp},attrs:{class:'created-at'},state:'stobpAn',insideLoop:true,index:"" +ii6jIL});
}else { 
let cmp_p6k = this._lc('cb169Ytxy', {parent:component,parentTop:layout,props:{timestamp:post.createdAt.timestamp},attrs:{class:'created-at'},state:'stDtof3',insideLoop:true,index:"" +ii6jIL});
}ec('div');
ec('div');
let el80krf = eo('article','5H_ff'+ii6jIL);
let cmp0twu = this._lc('c8Vijm6ff', {parent:component,parentTop:layout,props:{content:post.content.split('\n').slice(0, 20).join('\n')},insideLoop:true,index:"" +ii6jIL});
let cndBE7e = post.content.split('\n').length > 20;
this.setState('stCeHW4', cndBE7e);
if (cndBE7e) { 
let elCjcuz = eo('a','6gkff'+ii6jIL,null,`href`,`${ URLS.post(post) }`);
text(`Continue reading`);
ec('a');
}let eld6w7I = eo('section','ck9ff'+ii6jIL,null,`class`,`tags`);
for (let i in post.tags) {
let tag = post.tags[i]; 
 let iiyDIY = '1g_mmBq' + i;
let el7HEGp = eo('span','DFWFE1imsk1D' + i+ii6jIL+iiyDIY,null,`class`,`tag`);
let eldkx0q = ev('img','V1Iff'+ii6jIL+iiyDIY,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elpqyvy = eo('span','Ogbff'+ii6jIL+iiyDIY);
text('#' + tag.name);
ec('span');
ec('span');
}
ec('section');
ec('article');
let cnda9Ul = post.image;
this.setState('st36oO_', cnda9Ul);
if (cnda9Ul) { 
let el3occz = ev('img','3wTff'+ii6jIL,null,`src`,`${post.image + '?s=o1'}`,`class`,`image`,`title`,`${post.title}`,`alt`,`${post.title}`);
}let cmphx0I = this._lc('cChZmc4eT', {parent:component,parentTop:layout,props:{post:post,max:5},insideLoop:true,index:"" +ii6jIL});
ec('div');
}
}let elIVqci = eo('div',null,null,`class`,`row posts-list`);
for (let i in component.posts) {
let post = component.posts[i]; 
 let iiDS1P = 'l82Aq_l' + i;
let elcUUxQ = eo('div','tamxsM35RYtF' + i+iiDS1P,null,`class`,`col-lg-3 col-md-4 col-sm-6`);
let elnQUF6 = eo('div','4Hsff'+iiDS1P,null,`class`,`post`);
let elP3_Uw = eo('a','J31ff'+iiDS1P,null,`href`,`${URLS.post(post)}`,`class`,`link`);
let elTi6c0 = ev('img','_Frff'+iiDS1P,null,`src`,`${post.image ? post.image + '?w=400' : assets('images/default.png')}`,`class`,`image`,`title`,`${post.title}`,`alt`,`${post.title}`);
let el9xkkj = eo('div','4oiff'+iiDS1P,null,`class`,`title text-center`);
text(post.title);
ec('div');
ec('a');
ec('div');
ec('div');
}
ec('div');
}}}});
let cnd81CO = component.newPostMessage;
this.setState('stY_CzM', cnd81CO);
if (cnd81CO) { 
let cmpA2Zw = this._lc('cb_G5OtT5', {parent:component,events:{onclose:function(e) {let $el = this; component.newPostMessage = null}},content:(flkMessage) => {text(`Your post has been posted successfully and it will be previewed and posted once approved.`);
let el9qsN1 = eo('i',null,null,`class`,`${fas('check-circle') + ' ml-2 icon'}`);
ec('i');
},state:'stY_CzM'});
}let cndV03Y = component.addNewPost;
this.setState('stR2KYN', cndV03Y);
if (cndV03Y) { 
let cmplkfA = this._lc('caiQ42SIc', {parent:component,events:{onsave:function(e) {let $el = this; component.newPostMessage = true; component.posts.unshift(e); component.lastP = e;},onclose:function(e) {let $el = this; component.addNewPost = false}},state:'stR2KYN'});
}
                    this.isReadyToGo();
                }
        });