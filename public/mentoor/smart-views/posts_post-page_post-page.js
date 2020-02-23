_Component({
                selector: 'post-page',
                c: 'PostPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','post','user','editMode','lastP'],
                children: {cHs2a4DBP:'post-placeholder',cwANZSXyO:'user-online',cGoAaoEmy:'flk-time-ago',csLpAamEb:'flk-time-ago',cwcFG2EF0:'flk-facebook-share',cBeIaQDTU:'markdown',c_6qjluW8:'post-comments',cpPk2HW29:'layout',cQeTcBBQD:'new-post-modal'},
                render: function (component) {
                    let cmpnyM9 = this._lc('cpPk2HW29', {parent:component,content:(layout) => {let cndRpQy = component.isLoading;
this.setState('stdSwNG', cndRpQy);
let cnd6wU8 = !(cndRpQy);
this.setState('stekpYU', cnd6wU8);
if (cndRpQy) { 
let cmpDHtH = this._lc('cHs2a4DBP', {parent:component,parentTop:layout,state:'stdSwNG'});
}else { 
let el0u83A = eo('div',null,null,`id`,`post-wrapper`);
let cnd_jvR = component.post.createdBy.id == component.user.id || component.user.id == 1;
this.setState('stGOxD4', cnd_jvR);
if (cnd_jvR) { 
let elzMbJX = eo('button','ONmf',null, eventListeners, {onclick:[function(e) {var $el = this;component.editMode = true}]},`class`,`post-edit-btn`);
let elqeQuK = eo('i','BJwf',null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}let elTEQ5S = ev('img',null,null,`src`,`${component.post.createdBy.image}`,`class`,`user-image`,`title`,`${component.post.createdBy.name}`,`alt`,`${component.post.createdBy.name}`);
let elVcIdL = eo('div',null,null,`class`,`meta`);
let el6V6Xl = eo('h1',null,null,`class`,`title m-b-1`);
let elW7lDE = eo('span');
text(component.post.title);
ec('span');
let cnd7pzS = component.post.status == 'pending';
this.setState('stiOhq0', cnd7pzS);
if (cnd7pzS) { 
let eleIMM9 = eo('span','So3f',null,`class`,`m-l-1 v-middle badge badge-warning`);
text(`Pending`);
ec('span');
}let cndN5lt = component.post.status == 'rejected';
this.setState('stXS1_K', cndN5lt);
if (cndN5lt) { 
let elVViJ_ = eo('span','6Ylf',null,`class`,`m-l-1 v-middle badge badge-danger`);
text(`Rejected`);
ec('span');
}ec('h1');
let elsZ2ar = eo('div',null,null,`class`,`meta-info`);
let eljBqqJ = eo('span',null,null,`class`,`user-name`);
text(component.post.createdBy.name);
ec('span');
let cmp4tUI = this._lc('cwANZSXyO', {parent:component,parentTop:layout,props:{id:component.post.createdBy.id},attrs:{id:`${component.post.createdBy.id}`}});
let cndP4jn = component.lastP && component.lastP.id == component.post.id;
this.setState('stZ_LdU', cndP4jn);
let cndOaHg = !(cndP4jn);
this.setState('stUNnME', cndOaHg);
if (cndP4jn) { 
let cmp__7J = this._lc('cGoAaoEmy', {parent:component,parentTop:layout,props:{timestamp:component.lastP.createdAt.timestamp},attrs:{class:'created-at'},state:'stZ_LdU'});
}else { 
let cmpcHry = this._lc('csLpAamEb', {parent:component,parentTop:layout,props:{timestamp:component.post.createdAt.timestamp},attrs:{class:'created-at mr-2'},state:'stUNnME'});
}let cmpI9wG = this._lc('cwcFG2EF0', {parent:component,parentTop:layout});
ec('div');
ec('div');
let elmCbyS = eo('article');
let cmpuFDM = this._lc('cBeIaQDTU', {parent:component,parentTop:layout,props:{content:component.post.content}});
let el02rxY = eo('section',null,null,`class`,`tags`);
for (let i in component.post.tags) {
let tag = component.post.tags[i]; 
 let iivjVI = 'wGm9erF' + i;
let elvO_kX = eo('span','63kU776rSrRh' + i+iivjVI,null,`class`,`tag`);
let elotW47 = ev('img','ss5ff'+iivjVI,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elLXMy1 = eo('span','NRoff'+iivjVI);
text('#' + tag.name);
ec('span');
ec('span');
}
ec('section');
ec('article');
let cndGcEA = component.post.image;
this.setState('st1ROPo', cndGcEA);
if (cndGcEA) { 
let elGC2Gk = ev('img','9Taf',null,`src`,`${component.post.image}`,`class`,`image`,`title`,`${component.post.title}`,`alt`,`${component.post.title}`);
}let cmpUVoa = this._lc('c_6qjluW8', {parent:component,parentTop:layout,props:{post:component.post}});
ec('div');
}}});
let cndN1sE = component.editMode;
this.setState('stMjR1R', cndN1sE);
if (cndN1sE) { 
let cmpFWhN = this._lc('cQeTcBBQD', {parent:component,props:{post:component.post},events:{onsave:function(e) {let $el = this; component.post = e},onclose:function(e) {let $el = this; component.editMode = false}},state:'stMjR1R'});
}
                    this.isReadyToGo();
                }
        });