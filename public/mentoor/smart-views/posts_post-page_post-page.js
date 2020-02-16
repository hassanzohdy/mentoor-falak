_Component({
                selector: 'post-page',
                c: 'PostPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','post','user','editMode','lastP'],
                children: {cUEyJ7AOl:'post-placeholder',cjLrSNjjT:'user-online',cRD2mKZLB:'flk-time-ago',cxMm_c64p:'flk-time-ago',cjG2DNnmR:'flk-facebook-share',cTVir2MNA:'markdown',cXlRkbKRr:'post-comments',cRNknfAQw:'layout',c6oNELTtf:'new-post-modal'},
                render: function (component) {
                    let cmpAgAi = this._lc('cRNknfAQw', {parent:component,content:(layout) => {let cndQuQF = component.isLoading;
this.setState('stU__8p', cndQuQF);
let cndSzWE = !(cndQuQF);
this.setState('stohagX', cndSzWE);
if (cndQuQF) { 
let cmpQvrK = this._lc('cUEyJ7AOl', {parent:component,parentTop:layout,state:'stU__8p'});
}else { 
let elZMpn4 = eo('div',null,null,`id`,`post-wrapper`);
let cndgOLl = component.post.createdBy.id == component.user.id || component.user.id == 1;
this.setState('stFOsvF', cndgOLl);
if (cndgOLl) { 
let el6qbcA = eo('button','PJyf',null, eventListeners, {onclick:[function(e) {var $el = this;component.editMode = true}]},`class`,`post-edit-btn`);
let elIbL6u = eo('i','Afpf',null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}let elv3elf = ev('img',null,null,`src`,`${component.post.createdBy.image}`,`class`,`user-image`,`title`,`${component.post.createdBy.name}`,`alt`,`${component.post.createdBy.name}`);
let elDV93t = eo('div',null,null,`class`,`meta`);
let eltTDiK = eo('h1',null,null,`class`,`title m-b-1`);
let el8oUF_ = eo('span');
text(component.post.title);
ec('span');
let cndtwXJ = component.post.status == 'pending';
this.setState('steODMw', cndtwXJ);
if (cndtwXJ) { 
let elMnNiu = eo('span','HW3f',null,`class`,`m-l-1 v-middle badge badge-warning`);
text(`Pending`);
ec('span');
}let cndkIQ9 = component.post.status == 'rejected';
this.setState('stDhNHp', cndkIQ9);
if (cndkIQ9) { 
let elxZ1bu = eo('span','aXLf',null,`class`,`m-l-1 v-middle badge badge-danger`);
text(`Rejected`);
ec('span');
}ec('h1');
let elx7WsN = eo('div',null,null,`class`,`meta-info`);
let elp43lJ = eo('span',null,null,`class`,`user-name`);
text(component.post.createdBy.name);
ec('span');
let cmpQOoL = this._lc('cjLrSNjjT', {parent:component,parentTop:layout,props:{id:component.post.createdBy.id},attrs:{id:`${component.post.createdBy.id}`}});
let cndgssB = component.lastP && component.lastP.id == component.post.id;
this.setState('stPvNW3', cndgssB);
let cnd34Oi = !(cndgssB);
this.setState('stxSbDP', cnd34Oi);
if (cndgssB) { 
let cmpAJ5M = this._lc('cRD2mKZLB', {parent:component,parentTop:layout,props:{timestamp:component.lastP.createdAt.timestamp},attrs:{class:'created-at'},state:'stPvNW3'});
}else { 
let cmpv8bj = this._lc('cxMm_c64p', {parent:component,parentTop:layout,props:{timestamp:component.post.createdAt.timestamp},attrs:{class:'created-at mr-2'},state:'stxSbDP'});
}let cmpYDi9 = this._lc('cjG2DNnmR', {parent:component,parentTop:layout});
ec('div');
ec('div');
let el7Y9Fi = eo('article');
let cmpabFa = this._lc('cTVir2MNA', {parent:component,parentTop:layout,props:{content:component.post.content}});
let elrKqU8 = eo('section',null,null,`class`,`tags`);
for (let i in component.post.tags) {
let tag = component.post.tags[i]; 
 let iis5M4 = 'qXHPqM2' + i;
let elDb6_v = eo('span','HTBcYWW_wFs3' + i+iis5M4,null,`class`,`tag`);
let el6cjlZ = ev('img','jHyff'+iis5M4,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elddRrG = eo('span','W9Uff'+iis5M4);
text('#' + tag.name);
ec('span');
ec('span');
}
ec('section');
ec('article');
let cndtNY7 = component.post.image;
this.setState('stUgHZf', cndtNY7);
if (cndtNY7) { 
let elV57Az = ev('img','3Zef',null,`src`,`${component.post.image}`,`class`,`image`,`title`,`${component.post.title}`,`alt`,`${component.post.title}`);
}let cmpgHvD = this._lc('cXlRkbKRr', {parent:component,parentTop:layout,props:{post:component.post}});
ec('div');
}}});
let cndywIf = component.editMode;
this.setState('stO1mYO', cndywIf);
if (cndywIf) { 
let cmpRCtE = this._lc('c6oNELTtf', {parent:component,props:{post:component.post},events:{onsave:function(e) {let $el = this; component.post = e},onclose:function(e) {let $el = this; component.editMode = false}},state:'stO1mYO'});
}
                    this.isReadyToGo();
                }
        });