_Component({
                selector: 'post-page',
                c: 'PostPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','post','user','editMode','lastP'],
                children: {c9ZnaBSEk:'post-placeholder',c1vh2MFXR:'user-online',cxWdEvJCM:'flk-time-ago',c4a6oGCQT:'flk-time-ago',c_5_pEGAZ:'flk-facebook-share',cbilc607X:'markdown',ck40vezF6:'post-comments',cBCgEHRC1:'layout',cnggKN5XT:'new-post-modal'},
                render: function (component) {
                    let cmpJFQ3 = this._lc('cBCgEHRC1', {parent:component,content:(layout) => {let cndzg8j = component.isLoading;
this.setState('stsTq7g', cndzg8j);
let cndlz3W = !(cndzg8j);
this.setState('ste_iZy', cndlz3W);
if (cndzg8j) { 
let cmpB4Rw = this._lc('c9ZnaBSEk', {parent:component,parentTop:layout,state:'stsTq7g'});
}else { 
let elgfvnq = eo('div',null,null,`id`,`post-wrapper`);
let cndZ7iP = component.post.createdBy.id == component.user.id || component.user.id == 1;
this.setState('stu0Doc', cndZ7iP);
if (cndZ7iP) { 
let els3q_s = eo('button','u_Pf',null, eventListeners, {onclick:[function(e) {var $el = this;component.editMode = true}]},`class`,`post-edit-btn`);
let elLUISO = eo('i','9Uvf',null,`class`,`${fas('edit')} icon`);
ec('i');
text(`Edit`);
ec('button');
}let elxBnUD = ev('img',null,null,`src`,`${component.post.createdBy.image}`,`class`,`user-image`,`title`,`${component.post.createdBy.name}`,`alt`,`${component.post.createdBy.name}`);
let elmjE04 = eo('div',null,null,`class`,`meta`);
let elHLYz8 = eo('h1',null,null,`class`,`title m-b-1`);
let elCT6ku = eo('span');
text(component.post.title);
ec('span');
let cndJ9UR = component.post.status == 'pending';
this.setState('stJ6Xcm', cndJ9UR);
if (cndJ9UR) { 
let eloUOgh = eo('span','Frjf',null,`class`,`m-l-1 v-middle badge badge-warning`);
text(`Pending`);
ec('span');
}let cndw6Dt = component.post.status == 'rejected';
this.setState('stKlgOT', cndw6Dt);
if (cndw6Dt) { 
let elOMy3B = eo('span','bYQf',null,`class`,`m-l-1 v-middle badge badge-danger`);
text(`Rejected`);
ec('span');
}ec('h1');
let elUZ8nN = eo('div',null,null,`class`,`meta-info`);
let el2bYcA = eo('span',null,null,`class`,`user-name`);
text(component.post.createdBy.name);
ec('span');
let cmpnYt0 = this._lc('c1vh2MFXR', {parent:component,parentTop:layout,props:{id:component.post.createdBy.id},attrs:{id:`${component.post.createdBy.id}`}});
let cndgWgP = component.lastP && component.lastP.id == component.post.id;
this.setState('stdvj53', cndgWgP);
let cndQUY3 = !(cndgWgP);
this.setState('st74KhZ', cndQUY3);
if (cndgWgP) { 
let cmpDz7K = this._lc('cxWdEvJCM', {parent:component,parentTop:layout,props:{timestamp:component.lastP.createdAt.timestamp},attrs:{class:'created-at'},state:'stdvj53'});
}else { 
let cmpSYHC = this._lc('c4a6oGCQT', {parent:component,parentTop:layout,props:{timestamp:component.post.createdAt.timestamp},attrs:{class:'created-at mr-2'},state:'st74KhZ'});
}let cmpYaI_ = this._lc('c_5_pEGAZ', {parent:component,parentTop:layout});
ec('div');
ec('div');
let el4W3yU = eo('article');
let cmpO6zq = this._lc('cbilc607X', {parent:component,parentTop:layout,props:{content:component.post.content}});
let elmVDUH = eo('section',null,null,`class`,`tags`);
for (let i in component.post.tags) {
let tag = component.post.tags[i]; 
 let iiwZKj = 'ol5_Zmq' + i;
let eltpoSX = eo('span','VQa9AUaFL7Pz' + i+iiwZKj,null,`class`,`tag`);
let elRgjaE = ev('img','2fmff'+iiwZKj,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elTqWT8 = eo('span','f9nff'+iiwZKj);
text('#' + tag.name);
ec('span');
ec('span');
}
ec('section');
ec('article');
let cndpnKU = component.post.image;
this.setState('stmGg5g', cndpnKU);
if (cndpnKU) { 
let elSDdTe = ev('img','2fef',null,`src`,`${component.post.image}`,`class`,`image`,`title`,`${component.post.title}`,`alt`,`${component.post.title}`);
}let cmpX3Tf = this._lc('ck40vezF6', {parent:component,parentTop:layout,props:{post:component.post}});
ec('div');
}}});
let cndBzk1 = component.editMode;
this.setState('stjzZE3', cndBzk1);
if (cndBzk1) { 
let cmpsnFl = this._lc('cnggKN5XT', {parent:component,props:{post:component.post},events:{onsave:function(e) {let $el = this; component.post = e},onclose:function(e) {let $el = this; component.editMode = false}},state:'stjzZE3'});
}
                    this.isReadyToGo();
                }
        });