_Component({
                selector: 'timeline-page',
                c: 'TimelinePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','user','addNewPost','posts','pep','lastP','newPostMessage'],
                children: {cihCcJZQB:'post-placeholder',ceoZNAR7O:'user-online',cvhYUvFQO:'flk-time-ago',cYyLKggne:'flk-time-ago',ctc7IwXOJ:'markdown',cHAy8zUss:'post-comments',cjDqcOhsx:'layout',c45lEARTF:'flk-message',c66DYW3nM:'new-post-modal'},
                render: function (component) {
                    let cmpEW2m = this._lc('cjDqcOhsx', {parent:component,content:(layout) => {let cndCZA_ = component.isLoading;
this.setState('st6ZoYB', cndCZA_);
let cndv3yP = !(cndCZA_);
this.setState('stbdd7j', cndv3yP);
if (cndCZA_) { 
for (let i = 0; i < 4; i++) {
let iiFYJ7 = 'N_Os1Nq' + i;
let cmp2vUE = this._lc('cihCcJZQB', {parent:component,parentTop:layout,state:'st6ZoYB',insideLoop:true,index:"" +iiFYJ7});
}
}else { 
let cndtDea = component.user.isLoggedIn();
this.setState('stEHx7O', cndtDea);
let cndn3e1 = !(cndtDea);
this.setState('stujK_f', cndn3e1);
if (cndtDea) { 
let eljCRku = eo('section','x1ff',null,`class`,`m-b-2`,`id`,`new-post-timeline`);
let elbM5NF = eo('button','k9If',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewPost = true}]},`class`,`btn btn-success bold`);
let elkN595 = eo('i','cMqf',null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
text(`POST`);
ec('button');
ec('section');
}let cndzO7W = Is.empty(component.posts);
this.setState('stZVcJo', cndzO7W);
let cndxvJr = !(cndzO7W);
this.setState('stv7V0w', cndxvJr);
if (cndzO7W) { 
let eleUzGS = eo('h1','1rbf',null,`class`,`bold text-center`);
text(`No posts yet!`);
ec('h1');
}else { 
let cndz16E = component.pep;
this.setState('stkOIcS', cndz16E);
if (cndz16E) { 
for (let i in component.posts) {
let post = component.posts[i]; 
 let iiFhl3 = 'xVPRLzQ' + i;
let elmgsdF = eo('div','kXso0xXZg9sP' + i+iiFhl3,null,`class`,`post`);
let elyVm_v = ev('img','Jm0ff'+iiFhl3,null,`src`,`${post.createdBy.image}`,`class`,`user-image`,`title`,`${post.createdBy.name}`,`alt`,`${post.createdBy.name}`);
let elWhJK5 = eo('div','BDwff'+iiFhl3,null,`class`,`meta`);
let el8Iema = eo('a','JG3ff'+iiFhl3,null,`href`,`${ URLS.post(post) }`,`class`,`title`);
text(post.title);
ec('a');
let elj0f2U = eo('div','eVxff'+iiFhl3,null,`class`,`meta-info`);
let elf_ThJ = eo('span','UGtff'+iiFhl3,null,`class`,`user-name`);
text(post.createdBy.name);
ec('span');
let cmpnDoE = this._lc('ceoZNAR7O', {parent:component,parentTop:layout,props:{id:post.createdBy.id},attrs:{id:`${post.createdBy.id}`},state:'stkOIcS',insideLoop:true,index:"" +iiFhl3});
let cndEbJZ = component.lastP && component.lastP.id == post.id;
this.setState('stn6EIg', cndEbJZ);
let cndK69Q = !(cndEbJZ);
this.setState('stGwkQf', cndK69Q);
if (cndEbJZ) { 
let cmp89O4 = this._lc('cvhYUvFQO', {parent:component,parentTop:layout,props:{timestamp:component.lastP.createdAt.timestamp},attrs:{class:'created-at'},state:'stn6EIg',insideLoop:true,index:"" +iiFhl3});
}else { 
let cmpSssl = this._lc('cYyLKggne', {parent:component,parentTop:layout,props:{timestamp:post.createdAt.timestamp},attrs:{class:'created-at'},state:'stGwkQf',insideLoop:true,index:"" +iiFhl3});
}ec('div');
ec('div');
let elwqLwr = eo('article','saVff'+iiFhl3);
let cmpPVoc = this._lc('ctc7IwXOJ', {parent:component,parentTop:layout,props:{content:post.content.split('\n').slice(0, 20).join('\n')},insideLoop:true,index:"" +iiFhl3});
let cndzfpt = post.content.split('\n').length > 20;
this.setState('stDv5VV', cndzfpt);
if (cndzfpt) { 
let elmH109 = eo('a','AJ5ff'+iiFhl3,null,`href`,`${ URLS.post(post) }`);
text(`Continue reading`);
ec('a');
}let elAaJB1 = eo('section','Tzbff'+iiFhl3,null,`class`,`tags`);
for (let i in post.tags) {
let tag = post.tags[i]; 
 let iiOMyw = 'GRT6rPW' + i;
let elRnShi = eo('span','krq1xotgKuoK' + i+iiFhl3+iiOMyw,null,`class`,`tag`);
let elF7_EW = ev('img','CH_ff'+iiFhl3+iiOMyw,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elRrqKT = eo('span','RGgff'+iiFhl3+iiOMyw);
text('#' + tag.name);
ec('span');
ec('span');
}
ec('section');
ec('article');
let cndzvBH = post.image;
this.setState('stNx_Dc', cndzvBH);
if (cndzvBH) { 
let elW82Cz = ev('img','WEkff'+iiFhl3,null,`src`,`${post.image + '?s=o1'}`,`class`,`image`,`title`,`${post.title}`,`alt`,`${post.title}`);
}let cmpiXuj = this._lc('cHAy8zUss', {parent:component,parentTop:layout,props:{post:post,max:5},insideLoop:true,index:"" +iiFhl3});
ec('div');
}
}let el6Oiv8 = eo('div',null,null,`class`,`row posts-list`);
for (let i in component.posts) {
let post = component.posts[i]; 
 let iiMI21 = 'WleTuN0' + i;
let elP7TAX = eo('div','dZfDcfJWKXDg' + i+iiMI21,null,`class`,`col-lg-3 col-md-4 col-sm-6`);
let elp8CLc = eo('div','eepff'+iiMI21,null,`class`,`post`);
let el0TmiU = eo('a','KbGff'+iiMI21,null,`href`,`${URLS.post(post)}`,`class`,`link`);
let elDKAHX = ev('img','7Ucff'+iiMI21,null,`src`,`${post.image ? post.image + '?w=400' : assets('images/default.png')}`,`class`,`image`,`title`,`${post.title}`,`alt`,`${post.title}`);
let elgx2PS = eo('div','Qv6ff'+iiMI21,null,`class`,`title text-center`);
text(post.title);
ec('div');
ec('a');
ec('div');
ec('div');
}
ec('div');
}}}});
let cndddpr = component.newPostMessage;
this.setState('stzVeAk', cndddpr);
if (cndddpr) { 
let cmpmINS = this._lc('c45lEARTF', {parent:component,events:{onclose:function(e) {let $el = this; component.newPostMessage = null}},content:(flkMessage) => {text(`Your post has been posted successfully and it will be previewed and posted once approved.`);
let elheh_0 = eo('i',null,null,`class`,`${fas('check-circle')} ml-2 icon`);
ec('i');
},state:'stzVeAk'});
}let cndy_40 = component.addNewPost;
this.setState('stHUfCO', cndy_40);
if (cndy_40) { 
let cmp6za3 = this._lc('c66DYW3nM', {parent:component,events:{onsave:function(e) {let $el = this; component.newPostMessage = true; component.posts.unshift(e); component.lastP = e;},onclose:function(e) {let $el = this; component.addNewPost = false}},state:'stHUfCO'});
}
                    this.isReadyToGo();
                }
        });