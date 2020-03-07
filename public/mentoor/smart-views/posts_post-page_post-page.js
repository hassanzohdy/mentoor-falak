_Component({
                selector: 'post-page',
                c: 'PostPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','post','user','editMode','lastP'],
                children: {cpRVwqvwC:'post-placeholder',cTMq_JmYG:'user-online',cyu1D1UXO:'flk-time-ago',c59XZKP1S:'flk-time-ago',cbB10wmO7:'flk-facebook-share',cKzEf33O9:'markdown',c2pQ4OsqS:'comments',c7IJsbrKz:'layout',c_8P7DHPw:'new-post-modal'},
                render: function (component) {
                    let cmpokoL = this._lc('c7IJsbrKz', {parent:component,content:(layout) => {let cndSzyN = component.isLoading;
this.setState('stXTc5E', cndSzyN);
let cndTBR8 = !(cndSzyN);
this.setState('stjj_bL', cndTBR8);
if (cndSzyN) { 
let cmpBsz8 = this._lc('cpRVwqvwC', {parent:component,parentTop:layout,state:'stXTc5E'});
}else { 
let el9216M = eo('div',null,null,`id`,`post-wrapper`);
let cndABjX = component.post.createdBy.id == component.user.id || component.user.id == 1;
this.setState('stkRfxz', cndABjX);
if (cndABjX) { 
let el19qFm = eo('button','YTEf',null, eventListeners, {onclick:[function(e) {var $el = this;component.editMode = true}]},`class`,`post-edit-btn`);
let elf4MPV = eo('i','vXBf',null,`class`,`${fas('edit')} icon`);
ec('i');
text(`Edit`);
ec('button');
}let elQuReC = eo('section',null,null,`class`,`mt-4`);
let elGCZ1N = ev('img',null,null,`src`,`${component.post.createdBy.image}`,`class`,`user-image`,`title`,`${component.post.createdBy.name}`,`alt`,`${component.post.createdBy.name}`);
let elHBewi = eo('div',null,null,`class`,`meta`);
let elvm4L0 = eo('h1',null,null,`class`,`title m-b-1`);
let eleywaR = eo('span');
text(component.post.title);
ec('span');
let cndMdWl = component.post.status == 'pending';
this.setState('stXZX8S', cndMdWl);
if (cndMdWl) { 
let els9P06 = eo('span','BeQf',null,`class`,`m-l-1 v-middle badge badge-warning`);
text(`Pending`);
ec('span');
}let cnd1bXH = component.post.status == 'rejected';
this.setState('stvHgwA', cnd1bXH);
if (cnd1bXH) { 
let el4sjC0 = eo('span','PWef',null,`class`,`m-l-1 v-middle badge badge-danger`);
text(`Rejected`);
ec('span');
}ec('h1');
let eldic0b = eo('div',null,null,`class`,`meta-info`);
let elkdVJO = eo('span',null,null,`class`,`user-name`);
text(component.post.createdBy.name);
ec('span');
let cmpImJT = this._lc('cTMq_JmYG', {parent:component,parentTop:layout,props:{id:component.post.createdBy.id},attrs:{id:`${component.post.createdBy.id}`}});
let cndtVaJ = component.lastP && component.lastP.id == component.post.id;
this.setState('stLDz6u', cndtVaJ);
let cndO819 = !(cndtVaJ);
this.setState('stkkCNL', cndO819);
if (cndtVaJ) { 
let cmp5f7h = this._lc('cyu1D1UXO', {parent:component,parentTop:layout,props:{timestamp:component.lastP.createdAt.timestamp},attrs:{class:'created-at'},state:'stLDz6u'});
}else { 
let cmpHXHE = this._lc('c59XZKP1S', {parent:component,parentTop:layout,props:{timestamp:component.post.createdAt.timestamp},attrs:{class:'created-at mr-2'},state:'stkkCNL'});
}let cmpVDb3 = this._lc('cbB10wmO7', {parent:component,parentTop:layout});
ec('div');
ec('div');
let cndrSpx = component.post.image;
this.setState('stAGprk', cndrSpx);
if (cndrSpx) { 
let elvAu_K = ev('img','vjhf',null,`src`,`${component.post.image}`,`class`,`image`,`title`,`${component.post.title}`,`alt`,`${component.post.title}`);
}ec('section');
let elM8F84 = eo('article');
let cmpKeqs = this._lc('cKzEf33O9', {parent:component,parentTop:layout,props:{content:component.post.content}});
let elmK2C6 = eo('section',null,null,`class`,`tags`);
for (let i in component.post.tags) {
let tag = component.post.tags[i]; 
 let iiz7IK = 'ajKMxLw' + i;
let el8mH5V = eo('span','weQYVfI4G1ej' + i+iiz7IK,null,`class`,`tag`);
let elvNcel = ev('img','OKaff'+iiz7IK,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let eliBwVl = eo('span','pq4ff'+iiz7IK);
text('#' + tag.name);
ec('span');
ec('span');
}
ec('section');
ec('article');
let cmpzfx6 = this._lc('c2pQ4OsqS', {parent:component,parentTop:layout,props:{comments:component.post.comments},attrs:{type:'post'}});
ec('div');
}}});
let cndGxJI = component.editMode;
this.setState('stIjker', cndGxJI);
if (cndGxJI) { 
let cmpp9An = this._lc('c_8P7DHPw', {parent:component,props:{post:component.post},events:{onsave:function(e) {let $el = this; component.post = e},onclose:function(e) {let $el = this; component.editMode = false}},state:'stIjker'});
}
                    this.isReadyToGo();
                }
        });