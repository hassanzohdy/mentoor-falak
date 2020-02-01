_Component({
                selector: 'post-page',
                c: 'PostPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','post','user','editMode','lastP'],
                children: {c7FhAzaDo:'post-placeholder',cAIRXhCGW:'user-online',c5F0xsGXX:'flk-time-ago',c6hra0niz:'flk-time-ago',cLb8qKxXR:'flk-facebook-share',c2YSWfa2T:'markdown',c7DUbFH8q:'post-comments',c1sOApn4m:'layout',cxuv7Jdvj:'new-post-modal'},
                render: function (component) {
                    let cmpP4qp = this._lc('c1sOApn4m', {parent:component,content:(layout) => {let cndPaGM = component.isLoading;
this.setState('stfxtdq', cndPaGM);
let cnd1NyO = !(cndPaGM);
this.setState('stQhet2', cnd1NyO);
if (cndPaGM) { 
let cmp_jQL = this._lc('c7FhAzaDo', {parent:component,parentTop:layout,state:'stfxtdq'});
}else { 
let elWyDMr = eo('div',null,null,`id`,`post-wrapper`);
let cndziOR = component.post.createdBy.id == component.user.id || component.user.id == 1;
this.setState('stJgypL', cndziOR);
if (cndziOR) { 
let elbFAiO = eo('button','5s_f',null, eventListeners, {onclick:[function(e) {var $el = this;component.editMode = true}]},`class`,`post-edit-btn`);
let elA90km = eo('i','iI8f',null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}let elaGSMr = ev('img',null,null,`src`,`${component.post.createdBy.image}`,`class`,`user-image`,`title`,`${component.post.createdBy.name}`,`alt`,`${component.post.createdBy.name}`);
let elyWIXm = eo('div',null,null,`class`,`meta`);
let elhjRM9 = eo('h1',null,null,`class`,`title m-b-1`);
let elrMO6s = eo('span');
text(component.post.title);
ec('span');
let cndSlAj = component.post.status == 'pending';
this.setState('stq_tVh', cndSlAj);
if (cndSlAj) { 
let elU4Yop = eo('span','ksPf',null,`class`,`m-l-1 v-middle badge badge-warning`);
text(`Pending`);
ec('span');
}let cndalLn = component.post.status == 'rejected';
this.setState('stGD7oo', cndalLn);
if (cndalLn) { 
let elC4TKb = eo('span','chWf',null,`class`,`m-l-1 v-middle badge badge-danger`);
text(`Rejected`);
ec('span');
}ec('h1');
let eldIgAW = eo('div',null,null,`class`,`meta-info`);
let elUZqfS = eo('span',null,null,`class`,`user-name`);
text(component.post.createdBy.name);
ec('span');
let cmpW_TZ = this._lc('cAIRXhCGW', {parent:component,parentTop:layout,props:{id:component.post.createdBy.id},attrs:{id:`${component.post.createdBy.id}`}});
let cndnRsW = component.lastP && component.lastP.id == component.post.id;
this.setState('st82vZV', cndnRsW);
let cndChKo = !(cndnRsW);
this.setState('st82e58', cndChKo);
if (cndnRsW) { 
let cmpZ6TG = this._lc('c5F0xsGXX', {parent:component,parentTop:layout,props:{timestamp:component.lastP.createdAt.timestamp},attrs:{class:'created-at'},state:'st82vZV'});
}else { 
let cmpXF27 = this._lc('c6hra0niz', {parent:component,parentTop:layout,props:{timestamp:component.post.createdAt.timestamp},attrs:{class:'created-at mr-2'},state:'st82e58'});
}let cmpkSr4 = this._lc('cLb8qKxXR', {parent:component,parentTop:layout});
ec('div');
ec('div');
let elaWMC1 = eo('article');
let cmpaiMD = this._lc('c2YSWfa2T', {parent:component,parentTop:layout,props:{content:component.post.content}});
let elx8b_V = eo('section',null,null,`class`,`tags`);
for (let i in component.post.tags) {
let tag = component.post.tags[i]; 
 let iiB1xS = 'Da045kU' + i;
let elsAeg8 = eo('span','MpZyWK9RRA2X' + i+iiB1xS,null,`class`,`tag`);
let elOlBin = ev('img','0Jkff'+iiB1xS,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elzwOnZ = eo('span','_mdff'+iiB1xS);
text('#' + tag.name);
ec('span');
ec('span');
}
ec('section');
ec('article');
let cndDHaq = component.post.image;
this.setState('st231hY', cndDHaq);
if (cndDHaq) { 
let elx6CVM = ev('img','G7wf',null,`src`,`${component.post.image}`,`class`,`image`,`title`,`${component.post.title}`,`alt`,`${component.post.title}`);
}let cmpZCCE = this._lc('c7DUbFH8q', {parent:component,parentTop:layout,props:{post:component.post}});
ec('div');
}}});
let cndNKHD = component.editMode;
this.setState('stCnhnM', cndNKHD);
if (cndNKHD) { 
let cmpTT98 = this._lc('cxuv7Jdvj', {parent:component,props:{post:component.post},events:{onsave:function(e) {let $el = this; component.post = e},onclose:function(e) {let $el = this; component.editMode = false}},state:'stCnhnM'});
}
                    this.isReadyToGo();
                }
        });