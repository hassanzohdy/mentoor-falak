_Component({
                selector: 'post-page',
                c: 'PostPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','post','user','editMode','lastP'],
                children: {cjpQxJkW0:'post-placeholder',cns_7Loxd:'user-online',cW52DAckH:'flk-time-ago',cP0rOPXoy:'flk-time-ago',cTyqRZ_IN:'flk-facebook-share',c1tI9_8fR:'markdown',cGYlvKWu6:'comments',cG4vE9T0n:'layout',cuPvo5CWa:'new-post-modal'},
                render: function (component) {
                    let cmpQWwc = this._lc('cG4vE9T0n', {parent:component,content:(layout) => {let cndPYif = component.isLoading;
this.setState('st5DQOm', cndPYif);
let cnd6_6s = !(cndPYif);
this.setState('stucdDa', cnd6_6s);
if (cndPYif) { 
let cmpOU6S = this._lc('cjpQxJkW0', {parent:component,parentTop:layout,state:'st5DQOm'});
}else { 
let elt0VFK = eo('div',null,null,`id`,`post-wrapper`);
let cndr9vy = component.post.createdBy.id == component.user.id || component.user.id == 1;
this.setState('st2gOV0', cndr9vy);
if (cndr9vy) { 
let elJCeqG = eo('button','hMrf',null, eventListeners, {onclick:[function(e) {var $el = this;component.editMode = true}]},`class`,`post-edit-btn`);
let elCNhOe = eo('i','9GMf',null,`class`,`${fas('edit')} icon`);
ec('i');
text(`Edit`);
ec('button');
}let cndUK9X = component.post.image;
this.setState('st_JKYm', cndUK9X);
if (cndUK9X) { 
let el8bgGV = ev('img','jW8f',null,`src`,`${component.post.image}`,`class`,`image`,`title`,`${component.post.title}`,`alt`,`${component.post.title}`);
}let elwhuK6 = eo('section',null,null,`class`,`mt-4`);
let elItMeZ = ev('img',null,null,`src`,`${component.post.createdBy.image}`,`class`,`user-image`,`title`,`${component.post.createdBy.name}`,`alt`,`${component.post.createdBy.name}`);
let elLmKFK = eo('div',null,null,`class`,`meta`);
let elk6kBf = eo('h1',null,null,`class`,`title m-b-1`);
let elwrOqO = eo('span');
text(component.post.title);
ec('span');
let cndLrBQ = component.post.status == 'pending';
this.setState('stRlQ7Z', cndLrBQ);
if (cndLrBQ) { 
let elERUmG = eo('span','UNMf',null,`class`,`m-l-1 v-middle badge badge-warning`);
text(`Pending`);
ec('span');
}let cndmkyP = component.post.status == 'rejected';
this.setState('stsV8Eu', cndmkyP);
if (cndmkyP) { 
let elmhnhs = eo('span','9IZf',null,`class`,`m-l-1 v-middle badge badge-danger`);
text(`Rejected`);
ec('span');
}ec('h1');
let el7WirK = eo('div',null,null,`class`,`meta-info`);
let elQzV3P = eo('span',null,null,`class`,`user-name`);
text(component.post.createdBy.name);
ec('span');
let cmpweqH = this._lc('cns_7Loxd', {parent:component,parentTop:layout,props:{id:component.post.createdBy.id},attrs:{id:`${component.post.createdBy.id}`}});
let cndUWvK = component.lastP && component.lastP.id == component.post.id;
this.setState('stTlOp7', cndUWvK);
let cndPGKg = !(cndUWvK);
this.setState('stYJMYS', cndPGKg);
if (cndUWvK) { 
let cmp7S0X = this._lc('cW52DAckH', {parent:component,parentTop:layout,props:{timestamp:component.lastP.createdAt.timestamp},attrs:{class:'created-at'},state:'stTlOp7'});
}else { 
let cmphpm0 = this._lc('cP0rOPXoy', {parent:component,parentTop:layout,props:{timestamp:component.post.createdAt.timestamp},attrs:{class:'created-at mr-2'},state:'stYJMYS'});
}let cmpnYgn = this._lc('cTyqRZ_IN', {parent:component,parentTop:layout});
ec('div');
ec('div');
ec('section');
let elZPzgq = eo('article');
let cmpGaxa = this._lc('c1tI9_8fR', {parent:component,parentTop:layout,props:{content:component.post.content}});
let elfHUfy = eo('section',null,null,`class`,`tags`);
for (let i in component.post.tags) {
let tag = component.post.tags[i]; 
 let iiyble = 'meUrozi' + i;
let elK3kiC = eo('span','y4lHvc8QIKi8' + i+iiyble,null,`class`,`tag`);
let elXFQLI = ev('img','Twrff'+iiyble,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elF4riL = eo('span','Alvff'+iiyble);
text('#' + tag.name);
ec('span');
ec('span');
}
ec('section');
ec('article');
let cmpZImy = this._lc('cGYlvKWu6', {parent:component,parentTop:layout,props:{comments:component.post.comments},attrs:{type:'post'}});
ec('div');
}}});
let cndRL8I = component.editMode;
this.setState('stwT1nO', cndRL8I);
if (cndRL8I) { 
let cmpNstP = this._lc('cuPvo5CWa', {parent:component,props:{post:component.post},events:{onsave:function(e) {let $el = this; component.post = e},onclose:function(e) {let $el = this; component.editMode = false}},state:'stwT1nO'});
}
                    this.isReadyToGo();
                }
        });