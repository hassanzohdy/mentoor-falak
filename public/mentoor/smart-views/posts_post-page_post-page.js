_Component({
                selector: 'post-page',
                c: 'PostPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','post','user','editMode','lastP'],
                children: {cWDBhh3Sj:'post-placeholder',co9dbOrun:'user-online',cDtTx0u2N:'flk-time-ago',cYegQmt8I:'flk-time-ago',c0ppSqU8c:'flk-facebook-share',cHMamn0PP:'markdown',c8nGgK4QD:'post-comments',cc0zhAwKY:'layout',cWtO_45wQ:'new-post-modal'},
                render: function (component) {
                    let cmpi3HL = this._lc('cc0zhAwKY', {parent:component,content:(layout) => {let cndWU8L = component.isLoading;
this.setState('stG2MHE', cndWU8L);
let cnd2J1Z = !(cndWU8L);
this.setState('stdFWqI', cnd2J1Z);
if (cndWU8L) { 
let cmp4E9d = this._lc('cWDBhh3Sj', {parent:component,parentTop:layout,state:'stG2MHE'});
}else { 
let elLFlAr = eo('div',null,null,`id`,`post-wrapper`);
let cndnBZG = component.post.createdBy.id == component.user.id || component.user.id == 1;
this.setState('stb22mv', cndnBZG);
if (cndnBZG) { 
let el9PKSV = eo('button','TY8f',null, eventListeners, {onclick:[function(e) {var $el = this;component.editMode = true}]},`class`,`post-edit-btn`);
let elD9pBL = eo('i','FyHf',null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}let elej1Nb = ev('img',null,null,`src`,`${component.post.createdBy.image}`,`class`,`user-image`,`title`,`${component.post.createdBy.name}`,`alt`,`${component.post.createdBy.name}`);
let elS94bN = eo('div',null,null,`class`,`meta`);
let elPOLHB = eo('h1',null,null,`class`,`title m-b-1`);
let elWaCWm = eo('span');
text(component.post.title);
ec('span');
let cndszKU = component.post.status == 'pending';
this.setState('stN9Eq5', cndszKU);
if (cndszKU) { 
let elNy5dp = eo('span','wqtf',null,`class`,`m-l-1 v-middle badge badge-warning`);
text(`Pending`);
ec('span');
}let cndHzUK = component.post.status == 'rejected';
this.setState('stY4cov', cndHzUK);
if (cndHzUK) { 
let elzdYmd = eo('span','2gBf',null,`class`,`m-l-1 v-middle badge badge-danger`);
text(`Rejected`);
ec('span');
}ec('h1');
let elEAjgh = eo('div',null,null,`class`,`meta-info`);
let elPBxk3 = eo('span',null,null,`class`,`user-name`);
text(component.post.createdBy.name);
ec('span');
let cmpPwXO = this._lc('co9dbOrun', {parent:component,parentTop:layout,props:{id:component.post.createdBy.id},attrs:{id:`${component.post.createdBy.id}`}});
let cndmSWW = component.lastP && component.lastP.id == component.post.id;
this.setState('stK2XOp', cndmSWW);
let cnd_sEL = !(cndmSWW);
this.setState('styc8NV', cnd_sEL);
if (cndmSWW) { 
let cmpf7HC = this._lc('cDtTx0u2N', {parent:component,parentTop:layout,props:{timestamp:component.lastP.createdAt.timestamp},attrs:{class:'created-at'},state:'stK2XOp'});
}else { 
let cmpaSM_ = this._lc('cYegQmt8I', {parent:component,parentTop:layout,props:{timestamp:component.post.createdAt.timestamp},attrs:{class:'created-at mr-2'},state:'styc8NV'});
}let cmpS250 = this._lc('c0ppSqU8c', {parent:component,parentTop:layout});
ec('div');
ec('div');
let elzvgtM = eo('article');
let cmpGJN1 = this._lc('cHMamn0PP', {parent:component,parentTop:layout,props:{content:component.post.content}});
let el7lAKV = eo('section',null,null,`class`,`tags`);
for (let i in component.post.tags) {
let tag = component.post.tags[i]; 
 let iipm0G = 'em0JZq1' + i;
let elBfobH = eo('span','SD28TopaETaH' + i+iipm0G,null,`class`,`tag`);
let elq_6Q6 = ev('img','KEXff'+iipm0G,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elPdvzK = eo('span','xBJff'+iipm0G);
text('#' + tag.name);
ec('span');
ec('span');
}
ec('section');
ec('article');
let cndjHAB = component.post.image;
this.setState('stA41op', cndjHAB);
if (cndjHAB) { 
let elfxHQG = ev('img','sAof',null,`src`,`${component.post.image}`,`class`,`image`,`title`,`${component.post.title}`,`alt`,`${component.post.title}`);
}let cmpmNZD = this._lc('c8nGgK4QD', {parent:component,parentTop:layout,props:{post:component.post}});
ec('div');
}}});
let cndWvrW = component.editMode;
this.setState('stDFp8G', cndWvrW);
if (cndWvrW) { 
let cmpkEUv = this._lc('cWtO_45wQ', {parent:component,props:{post:component.post},events:{onsave:function(e) {let $el = this; component.post = e},onclose:function(e) {let $el = this; component.editMode = false}},state:'stDFp8G'});
}
                    this.isReadyToGo();
                }
        });