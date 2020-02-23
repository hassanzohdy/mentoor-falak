_Component({
                selector: 'post-page',
                c: 'PostPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','post','user','editMode','lastP'],
                children: {c10rckel8:'post-placeholder',czfM6YHI6:'user-online',cqgorp_L_:'flk-time-ago',cyFWvulkA:'flk-time-ago',cpI6y6vLu:'flk-facebook-share',cHeoBdZOa:'markdown',cjF6mKksB:'post-comments',cZq9HaDlg:'layout',cGAokoX56:'new-post-modal'},
                render: function (component) {
                    let cmp9z0O = this._lc('cZq9HaDlg', {parent:component,content:(layout) => {let cndXeQY = component.isLoading;
this.setState('sttmRNH', cndXeQY);
let cndae1_ = !(cndXeQY);
this.setState('st7P1iE', cndae1_);
if (cndXeQY) { 
let cmp_MkE = this._lc('c10rckel8', {parent:component,parentTop:layout,state:'sttmRNH'});
}else { 
let elXyN9p = eo('div',null,null,`id`,`post-wrapper`);
let cndzNRe = component.post.createdBy.id == component.user.id || component.user.id == 1;
this.setState('st1ccY5', cndzNRe);
if (cndzNRe) { 
let eloNhOj = eo('button','dDHf',null, eventListeners, {onclick:[function(e) {var $el = this;component.editMode = true}]},`class`,`post-edit-btn`);
let el3Lu7E = eo('i','KOef',null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}let elDQwOh = ev('img',null,null,`src`,`${component.post.createdBy.image}`,`class`,`user-image`,`title`,`${component.post.createdBy.name}`,`alt`,`${component.post.createdBy.name}`);
let elg4KTL = eo('div',null,null,`class`,`meta`);
let el2OaVa = eo('h1',null,null,`class`,`title m-b-1`);
let elORCYy = eo('span');
text(component.post.title);
ec('span');
let cndai3z = component.post.status == 'pending';
this.setState('st7oYwR', cndai3z);
if (cndai3z) { 
let elsqfwh = eo('span','mn0f',null,`class`,`m-l-1 v-middle badge badge-warning`);
text(`Pending`);
ec('span');
}let cndgMgT = component.post.status == 'rejected';
this.setState('stgdQNd', cndgMgT);
if (cndgMgT) { 
let elCZGJD = eo('span','sd_f',null,`class`,`m-l-1 v-middle badge badge-danger`);
text(`Rejected`);
ec('span');
}ec('h1');
let eli_kvX = eo('div',null,null,`class`,`meta-info`);
let elRYneW = eo('span',null,null,`class`,`user-name`);
text(component.post.createdBy.name);
ec('span');
let cmplVR3 = this._lc('czfM6YHI6', {parent:component,parentTop:layout,props:{id:component.post.createdBy.id},attrs:{id:`${component.post.createdBy.id}`}});
let cndFClX = component.lastP && component.lastP.id == component.post.id;
this.setState('stUkmir', cndFClX);
let cndVjbp = !(cndFClX);
this.setState('stSm_uO', cndVjbp);
if (cndFClX) { 
let cmpRFhe = this._lc('cqgorp_L_', {parent:component,parentTop:layout,props:{timestamp:component.lastP.createdAt.timestamp},attrs:{class:'created-at'},state:'stUkmir'});
}else { 
let cmpXvZ9 = this._lc('cyFWvulkA', {parent:component,parentTop:layout,props:{timestamp:component.post.createdAt.timestamp},attrs:{class:'created-at mr-2'},state:'stSm_uO'});
}let cmpdFz8 = this._lc('cpI6y6vLu', {parent:component,parentTop:layout});
ec('div');
ec('div');
let el_At3u = eo('article');
let cmpfcWb = this._lc('cHeoBdZOa', {parent:component,parentTop:layout,props:{content:component.post.content}});
let elaCk4J = eo('section',null,null,`class`,`tags`);
for (let i in component.post.tags) {
let tag = component.post.tags[i]; 
 let iinWtz = '5bo4OXB' + i;
let elq35OT = eo('span','f_ca8dGVGs0I' + i+iinWtz,null,`class`,`tag`);
let eln9cqO = ev('img','Kemff'+iinWtz,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elm7Mlo = eo('span','6nJff'+iinWtz);
text('#' + tag.name);
ec('span');
ec('span');
}
ec('section');
ec('article');
let cndhCY4 = component.post.image;
this.setState('st0WCGL', cndhCY4);
if (cndhCY4) { 
let el6sSt8 = ev('img','O4cf',null,`src`,`${component.post.image}`,`class`,`image`,`title`,`${component.post.title}`,`alt`,`${component.post.title}`);
}let cmpEPq9 = this._lc('cjF6mKksB', {parent:component,parentTop:layout,props:{post:component.post}});
ec('div');
}}});
let cndBKBe = component.editMode;
this.setState('st9HxeU', cndBKBe);
if (cndBKBe) { 
let cmphfKN = this._lc('cGAokoX56', {parent:component,props:{post:component.post},events:{onsave:function(e) {let $el = this; component.post = e},onclose:function(e) {let $el = this; component.editMode = false}},state:'st9HxeU'});
}
                    this.isReadyToGo();
                }
        });