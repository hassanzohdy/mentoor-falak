_Component({
                selector: 'timeline-page',
                c: 'TimelinePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','user','addNewPost','posts','lastP','newPostMessage'],
                children: {cRHflZ4eu:'post-placeholder',cf47H8gTz:'user-online',cjREEzoIs:'flk-time-ago',c4Rk3xAir:'flk-time-ago',cmmbZahKm:'markdown',cnuckNIE2:'layout',cUGfcIz9V:'flk-message',cRX4s_7uI:'new-post-modal'},
                render: function (component) {
                    let cmpnNPy = this._lc('cnuckNIE2', {parent:component,content:(layout) => {let cnduLCq = component.isLoading;
this.setState('stjjPf_', cnduLCq);
let cndPWlN = !(cnduLCq);
this.setState('stOhWCX', cndPWlN);
if (cnduLCq) { 
for (let i = 0; i < 4; i++) {
let iiYEvI = '4k7Rr6W' + i;
let cmp_Ruw = this._lc('cRHflZ4eu', {parent:component,parentTop:layout,state:'stjjPf_',insideLoop:true,index:"" +iiYEvI});
}
}else { 
let cndAyyn = component.user.isLoggedIn();
this.setState('st3dK6S', cndAyyn);
let cndjS8Z = !(cndAyyn);
this.setState('st5nLUZ', cndjS8Z);
if (cndAyyn) { 
let elfe_Vb = eo('section','4Vef',null,`class`,`m-b-2`,`id`,`new-post-timeline`);
let elppGz7 = eo('button','aYkf',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewPost = true}]},`class`,`btn btn-success bold`);
let eloObBl = eo('i','nbLf',null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
text(`POST`);
ec('button');
ec('section');
}let cnd_QBn = Is.empty(component.posts);
this.setState('stNATpc', cnd_QBn);
let cndKb0d = !(cnd_QBn);
this.setState('st490vO', cndKb0d);
if (cnd_QBn) { 
let eljiOE3 = eo('h1','FHif',null,`class`,`bold text-center`);
text(`No posts yet!`);
ec('h1');
}else { 
for (let i in component.posts) {
let post = component.posts[i]; 
 let iiSK8G = 'RCLXbKu' + i;
let el9FfqU = eo('div','5NnyCiwksJtA' + i+iiSK8G,null,`class`,`post`);
let el4153g = ev('img','cQzff'+iiSK8G,null,`src`,`${post.createdBy.image}`,`class`,`user-image`,`title`,`${post.createdBy.name}`,`alt`,`${post.createdBy.name}`);
let elI7Ki1 = eo('div','Aamff'+iiSK8G,null,`class`,`meta`);
let elYqOnJ = eo('a','x_8ff'+iiSK8G,null,`href`,`${ URLS.post(post) }`,`class`,`title`);
text(post.title);
ec('a');
let eloQZqG = eo('div','zvDff'+iiSK8G,null,`class`,`meta-info`);
let elt6Edw = eo('span','cjKff'+iiSK8G,null,`class`,`user-name`);
text(post.createdBy.name);
ec('span');
let cmpTH9l = this._lc('cf47H8gTz', {parent:component,parentTop:layout,props:{id:post.createdBy.id},attrs:{id:`${post.createdBy.id}`},state:'st490vO',insideLoop:true,index:"" +iiSK8G});
let cndm7VD = component.lastP && component.lastP.id == post.id;
this.setState('sta0C2H', cndm7VD);
let cnd6N9e = !(cndm7VD);
this.setState('str347e', cnd6N9e);
if (cndm7VD) { 
let cmp_x15 = this._lc('cjREEzoIs', {parent:component,parentTop:layout,props:{timestamp:component.lastP.createdAt.timestamp},attrs:{class:'created-at'},state:'sta0C2H',insideLoop:true,index:"" +iiSK8G});
}else { 
let cmpUKfM = this._lc('c4Rk3xAir', {parent:component,parentTop:layout,props:{timestamp:post.createdAt.timestamp},attrs:{class:'created-at'},state:'str347e',insideLoop:true,index:"" +iiSK8G});
}ec('div');
ec('div');
let elgxK1P = eo('article','hfIff'+iiSK8G);
let cmpYgzA = this._lc('cmmbZahKm', {parent:component,parentTop:layout,props:{content:post.content.split('\n').slice(0, 10).join('\n')},insideLoop:true,index:"" +iiSK8G});
let cndz_Xr = post.content.split('\n').length > 10;
this.setState('st1voJ5', cndz_Xr);
if (cndz_Xr) { 
let elyIvJl = eo('a','YVbff'+iiSK8G,null,`href`,`${ URLS.post(post) }`);
text(`Continue reading`);
ec('a');
}let elaPjp1 = eo('section','G3Hff'+iiSK8G,null,`class`,`tags`);
for (let i in post.tags) {
let tag = post.tags[i]; 
 let ii5jNY = '5aAYrbe' + i;
let elhrkAP = eo('span','WUrUW35vHWf1' + i+iiSK8G+ii5jNY,null,`class`,`tag`);
let elflVdR = ev('img','ugAff'+iiSK8G+ii5jNY,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elyouRC = eo('span','5ldff'+iiSK8G+ii5jNY);
text('#' + tag.name);
ec('span');
ec('span');
}
ec('section');
ec('article');
ec('div');
}
}}}});
let cndBLff = component.newPostMessage;
this.setState('stVsJM0', cndBLff);
if (cndBLff) { 
let cmp6Gc2 = this._lc('cUGfcIz9V', {parent:component,events:{onclose:function(e) {let $el = this; component.newPostMessage = null}},content:(flkMessage) => {text(`Your post has been posted successfully and it will be previewed and posted once approved.`);
let el8qp6i = eo('i',null,null,`class`,`${fas('check-circle')} ml-2 icon`);
ec('i');
},state:'stVsJM0'});
}let cndXN8Z = component.addNewPost;
this.setState('stUhzf8', cndXN8Z);
if (cndXN8Z) { 
let cmpMs0e = this._lc('cRX4s_7uI', {parent:component,events:{onsave:function(e) {let $el = this; component.newPostMessage = true; component.posts.unshift(e); component.lastP = e;},onclose:function(e) {let $el = this; component.addNewPost = false}},state:'stUhzf8'});
}
                    this.isReadyToGo();
                }
        });