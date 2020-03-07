_Component({
                selector: 'project-discussions-page',
                c: 'ProjectDiscussionsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','modalIsOpened','openModal','user','confirmRemoving','record','confirmDelete','remove'],
                children: {cz3cKQQw9:'flk-time-ago',cqv5y8atn:'project-discussion-form',cDqZ47OrG:'project-layout',cY3lLCNsu:'flk-alert'},
                render: function (component) {
                    let cmpj_OJ = this._lc('cDqZ47OrG', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndgXfK = ! component.modalIsOpened;
this.setState('stsBmTO', cndgXfK);
let cndbV8L = !(cndgXfK);
this.setState('sti3lft', cndbV8L);
if (cndgXfK) { 
let el4ROjk = eo('button','sRYf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elJB5ic = eo('i','H5Ef',null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Discussion`);
ec('button');
let elWmP7r = eo('h1','F9tf',null,`class`,`m-y-1`);
text(`${ component.project.name } Discussions
            (${ component.project.discussions.length })`);
ec('h1');
let cndBeij = Is.empty(component.project.discussions);
this.setState('stw5cF0', cndBeij);
let cndR6vN = !(cndBeij);
this.setState('stTT2fP', cndR6vN);
if (cndBeij) { 
let elvn0_R = eo('h1','kOqf',null,`class`,`text-center orange-text`);
text(`No Discussions.`);
ec('h1');
}else { 
for (let index in component.project.discussions) {
let discussion = component.project.discussions[index]; 
 let ii1279 = 'F2Doqj1' + index;
let elhYnTS = eo('div','yzAH7hX5uHCf' + index+ii1279,null,`class`,`discussion m-t-2 simple-card row`);
let el_6_Wd = eo('div','Dzlff'+ii1279,null,`class`,`col-1 text-right`);
let elduxtA = ev('img','2tyff'+ii1279,null,`src`,`${discussion.createdBy.image}`,`class`,`user-image`,`title`,`${discussion.createdBy.name}`,`alt`,`${discussion.createdBy.name}`);
ec('div');
let elM6fZ1 = eo('span','23Bff'+ii1279,null,`class`,`col`);
let cndqW8M = component.project.isHigherAuthority || discussion.createdBy.id == component.user.id;
this.setState('stl_2qy', cndqW8M);
if (cndqW8M) { 
let elqNuqW = eo('span','TWUff'+ii1279,null,`class`,`action-btns float-right`);
let el9cKJu = eo('button','Jruff'+ii1279,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', discussion, index)}]},`type`,`button`);
let el_p6SO = eo('i','Dybff'+ii1279,null,`class`,`${fas('edit')} icon`);
ec('i');
text(`Edit`);
ec('button');
let elvN9bX = eo('button','0NBff'+ii1279,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(discussion, index)}]},`type`,`button`);
let elQFx0s = eo('i','X3qff'+ii1279,null,`class`,`${fas('times')} mr-2 icon`);
ec('i');
text(`Delete`);
ec('button');
ec('span');
}let elDwnar = eo('div','hnxff'+ii1279,null,`class`,`clearfix`);
ec('div');
let cndKQNG = discussion.comments.length > 0;
this.setState('stLWRhn', cndKQNG);
if (cndKQNG) { 
let elNORxq = eo('span','OC0ff'+ii1279,null,`class`,`petrol-text float-right`);
let elpt5EV = eo('span','OSvff'+ii1279);
text(discussion.comments.length);
ec('span');
let elvRqhZ = eo('i','nnIff'+ii1279,null,`class`,`${fas('comments')} ml-2 icon`);
ec('i');
ec('span');
}let el6zJ7D = eo('h3','nY8ff'+ii1279,null,`class`,`title`);
let el5bue7 = eo('a','hivff'+ii1279,null,`href`,`${URLS.project(component.project, 'discussions', discussion)}`);
let eln3KSK = eo('span','DUPff'+ii1279);
text(discussion.title);
ec('span');
let cndkgmF = discussion.team.type;
this.setState('stwCmme', cndkgmF);
if (cndkgmF) { 
let elNDhvZ = eo('strong','vcrff'+ii1279,null,`class`,`ml-2 teal-text`);
text(discussion.team.type + ' team');
ec('strong');
}ec('a');
ec('h3');
let elEKBBg = eo('div','ewBff'+ii1279,null,`class`,`petrol-text bold`);
let elKbLHn = eo('span','Xvzff'+ii1279);
text(discussion.createdBy.name);
ec('span');
let elrM9zq = eo('span','jZGff'+ii1279,null,`class`,`badge text-capitalize ml-2 ${cls({'badge-success': discussion.status == 'opened', 'badge-danger': discussion.status == 'closed'})}`);
text(discussion.status);
ec('span');
ec('div');
let elOUv_e = eo('div','JaDff'+ii1279);
let cmpqjtp = this._lc('cz3cKQQw9', {parent:component,parentTop:projectLayout,props:{timestamp:discussion.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +ii1279});
ec('div');
let elh2OVs = eo('div','lfYff'+ii1279,null,`class`,`m-t-1`);
let elnoi2P = eo('a','Swbff'+ii1279,null,`href`,`${URLS.project(component.project, 'discussions', discussion)}`,`class`,`btn btn-purple bold`);
text(`OPEN
                        DISCUSSION`);
ec('a');
ec('div');
ec('span');
ec('div');
}
}}else { 
let cmp5CA6 = this._lc('cqv5y8atn', {parent:component,parentTop:projectLayout,props:{project:component.project,discussion:component.record},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},state:'sti3lft'});
}}});
let cndnv1I = component.confirmDelete;
this.setState('stdw8vy', cndnv1I);
if (cndnv1I) { 
let cmpwXoI = this._lc('cY3lLCNsu', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stdw8vy'});
}
                    this.isReadyToGo();
                }
        });