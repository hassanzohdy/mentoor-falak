_Component({
                selector: 'post-page',
                c: 'PostPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','post','user','editMode','lastP'],
                children: {cHbEGQ1h1:'post-placeholder',c0V629XQ2:'user-online',cSB0ueQWH:'flk-time-ago',c7HEJuDcF:'flk-time-ago',cdfMrdC3F:'flk-facebook-share',cMaYbQQLm:'markdown',cB07HNZvA:'post-comments',cM9KvVghi:'layout',cgXnmhOtZ:'new-post-modal'},
                render: function (component) {
                    let cmpKEpI = this._lc('cM9KvVghi', {parent:component,content:(layout) => {let cnd3W9m = component.isLoading;
this.setState('stBFgy4', cnd3W9m);
let cndWjoj = !(cnd3W9m);
this.setState('stiVF2x', cndWjoj);
if (cnd3W9m) { 
let cmpcvdy = this._lc('cHbEGQ1h1', {parent:component,parentTop:layout,state:'stBFgy4'});
}else { 
let el5f3Ut = eo('div',null,null,`id`,`post-wrapper`);
let cndQZpC = component.post.createdBy.id == component.user.id || component.user.id == 1;
this.setState('stCTqCF', cndQZpC);
if (cndQZpC) { 
let elE2lhc = eo('button','TU8f',null, eventListeners, {onclick:[function(e) {var $el = this;component.editMode = true}]},`class`,`post-edit-btn`);
let eltF0qk = eo('i','4agf',null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}let elbDobr = ev('img',null,null,`src`,`${component.post.createdBy.image}`,`class`,`user-image`,`title`,`${component.post.createdBy.name}`,`alt`,`${component.post.createdBy.name}`);
let eliYww8 = eo('div',null,null,`class`,`meta`);
let elN6Lzy = eo('h1',null,null,`class`,`title m-b-1`);
let elb4Ls4 = eo('span');
text(component.post.title);
ec('span');
let cndZz0B = component.post.status == 'pending';
this.setState('stjYg9f', cndZz0B);
if (cndZz0B) { 
let el50cYd = eo('span','SsEf',null,`class`,`m-l-1 v-middle badge badge-warning`);
text(`Pending`);
ec('span');
}let cndL9ij = component.post.status == 'rejected';
this.setState('stDdpRu', cndL9ij);
if (cndL9ij) { 
let elZB7oV = eo('span','YBGf',null,`class`,`m-l-1 v-middle badge badge-danger`);
text(`Rejected`);
ec('span');
}ec('h1');
let elA5zLw = eo('div',null,null,`class`,`meta-info`);
let eltcVdY = eo('span',null,null,`class`,`user-name`);
text(component.post.createdBy.name);
ec('span');
let cmppIUZ = this._lc('c0V629XQ2', {parent:component,parentTop:layout,props:{id:component.post.createdBy.id},attrs:{id:`${component.post.createdBy.id}`}});
let cndDaD3 = component.lastP && component.lastP.id == component.post.id;
this.setState('stjp2H4', cndDaD3);
let cndv6Ex = !(cndDaD3);
this.setState('stkP90n', cndv6Ex);
if (cndDaD3) { 
let cmpSjlj = this._lc('cSB0ueQWH', {parent:component,parentTop:layout,props:{timestamp:component.lastP.createdAt.timestamp},attrs:{class:'created-at'},state:'stjp2H4'});
}else { 
let cmp30_2 = this._lc('c7HEJuDcF', {parent:component,parentTop:layout,props:{timestamp:component.post.createdAt.timestamp},attrs:{class:'created-at mr-2'},state:'stkP90n'});
}let cmp4wbv = this._lc('cdfMrdC3F', {parent:component,parentTop:layout});
ec('div');
ec('div');
let el8CcAu = eo('article');
let cmpKwn2 = this._lc('cMaYbQQLm', {parent:component,parentTop:layout,props:{content:component.post.content}});
let eleEl29 = eo('section',null,null,`class`,`tags`);
for (let i in component.post.tags) {
let tag = component.post.tags[i]; 
 let iibs7U = 'F1TZcls' + i;
let elSuGC0 = eo('span','rbwp4OOzEjz2' + i+iibs7U,null,`class`,`tag`);
let elAK969 = ev('img','NG6ff'+iibs7U,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elCt9OO = eo('span','AYfff'+iibs7U);
text('#' + tag.name);
ec('span');
ec('span');
}
ec('section');
ec('article');
let cndEEvd = component.post.image;
this.setState('stIXLM7', cndEEvd);
if (cndEEvd) { 
let elF4fGO = ev('img','iyyf',null,`src`,`${component.post.image}`,`class`,`image`,`title`,`${component.post.title}`,`alt`,`${component.post.title}`);
}let cmpFnN0 = this._lc('cB07HNZvA', {parent:component,parentTop:layout,props:{post:component.post}});
ec('div');
}}});
let cnddYWL = component.editMode;
this.setState('staYwEs', cnddYWL);
if (cnddYWL) { 
let cmpwbHc = this._lc('cgXnmhOtZ', {parent:component,props:{post:component.post},events:{onsave:function(e) {let $el = this; component.post = e},onclose:function(e) {let $el = this; component.editMode = false}},state:'staYwEs'});
}
                    this.isReadyToGo();
                }
        });