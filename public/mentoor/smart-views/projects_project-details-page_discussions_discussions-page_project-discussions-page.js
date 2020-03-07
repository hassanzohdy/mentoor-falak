_Component({
                selector: 'project-discussions-page',
                c: 'ProjectDiscussionsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','modalIsOpened','openModal','user','confirmRemoving','record','confirmDelete','remove'],
                children: {c9Pbh7AoY:'flk-time-ago',c8Sc0Mozi:'project-discussion-form',cvyUzxIG5:'project-layout',cv8h63ZRg:'flk-alert'},
                render: function (component) {
                    let cmpt_bA = this._lc('cvyUzxIG5', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndZNgo = ! component.modalIsOpened;
this.setState('stwG1ur', cndZNgo);
let cndFgyQ = !(cndZNgo);
this.setState('stieHIX', cndFgyQ);
if (cndZNgo) { 
let elUPsim = eo('button','bjef',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elzFcjw = eo('i','OC3f',null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Discussion`);
ec('button');
let elBj4o5 = eo('h1','sSRf',null,`class`,`m-y-1`);
text(`${ component.project.name } Discussions
            (${ component.project.discussions.length })`);
ec('h1');
let cndKP15 = Is.empty(component.project.discussions);
this.setState('stC4Fgy', cndKP15);
let cndDhQa = !(cndKP15);
this.setState('stYbSvP', cndDhQa);
if (cndKP15) { 
let elEBDRp = eo('h1','Q0ef',null,`class`,`text-center orange-text`);
text(`No Discussions.`);
ec('h1');
}else { 
for (let index in component.project.discussions) {
let discussion = component.project.discussions[index]; 
 let iiQkEz = 'LzSDDs1' + index;
let elfoA9h = eo('div','7pJQvEPWQcm5' + index+iiQkEz,null,`class`,`discussion m-t-2 simple-card row`);
let elBlIT4 = eo('div','lpDff'+iiQkEz,null,`class`,`col-1 text-right`);
let elLbBhL = ev('img','R8Zff'+iiQkEz,null,`src`,`${discussion.createdBy.image}`,`class`,`user-image`,`title`,`${discussion.createdBy.name}`,`alt`,`${discussion.createdBy.name}`);
ec('div');
let elGhnwm = eo('span','ncmff'+iiQkEz,null,`class`,`col`);
let cndQFqU = component.project.isHigherAuthority || discussion.createdBy.id == component.user.id;
this.setState('stXcyM_', cndQFqU);
if (cndQFqU) { 
let el3pKaf = eo('span','Nv6ff'+iiQkEz,null,`class`,`action-btns float-right`);
let elDat5u = eo('button','Madff'+iiQkEz,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', discussion, index)}]},`type`,`button`);
let elOyDuu = eo('i','_0Iff'+iiQkEz,null,`class`,`${fas('edit')} icon`);
ec('i');
text(`Edit`);
ec('button');
let elCP0p3 = eo('button','FQ3ff'+iiQkEz,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(discussion, index)}]},`type`,`button`);
let el05a0X = eo('i','BvTff'+iiQkEz,null,`class`,`${fas('times')} mr-2 icon`);
ec('i');
text(`Delete`);
ec('button');
ec('span');
}let elEzvs0 = eo('div','yZ8ff'+iiQkEz,null,`class`,`clearfix`);
ec('div');
let cndSUt_ = discussion.comments.length > 0;
this.setState('stC4BDU', cndSUt_);
if (cndSUt_) { 
let eloB8E2 = eo('span','AX9ff'+iiQkEz,null,`class`,`petrol-text float-right`);
let elWAxHz = eo('span','K1Yff'+iiQkEz);
text(discussion.comments.length);
ec('span');
let elbEnxq = eo('i','Saeff'+iiQkEz,null,`class`,`${fas('comments')} ml-2 icon`);
ec('i');
ec('span');
}let elqkGnu = eo('h3','nwzff'+iiQkEz,null,`class`,`title`);
let elyNkKf = eo('a','lcNff'+iiQkEz,null,`href`,`${URLS.project(component.project, 'discussions', discussion)}`);
let elRllGT = eo('span','gxvff'+iiQkEz);
text(discussion.title);
ec('span');
let cndL9Hp = discussion.team.type;
this.setState('stqGbSL', cndL9Hp);
if (cndL9Hp) { 
let elQGKq0 = eo('strong','NxQff'+iiQkEz,null,`class`,`ml-2 teal-text`);
text(discussion.team.type + ' team');
ec('strong');
}ec('a');
ec('h3');
let elHhcer = eo('div','JR3ff'+iiQkEz,null,`class`,`petrol-text bold`);
let elfXTzN = eo('span','d2fff'+iiQkEz);
text(discussion.createdBy.name);
ec('span');
let el6bIFW = eo('span','W9gff'+iiQkEz,null,`class`,`badge text-capitalize ml-2 ${cls({'badge-success': discussion.status == 'opened', 'badge-danger': discussion.status == 'closed'})}`);
text(discussion.status);
ec('span');
ec('div');
let el6DX3Z = eo('div','SCaff'+iiQkEz);
let cmpfW8H = this._lc('c9Pbh7AoY', {parent:component,parentTop:projectLayout,props:{timestamp:discussion.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iiQkEz});
ec('div');
let el3uUeg = eo('div','jaMff'+iiQkEz,null,`class`,`m-t-1`);
let elMXiCj = eo('a','OKcff'+iiQkEz,null,`href`,`${URLS.project(component.project, 'discussions', discussion)}`,`class`,`btn btn-purple bold`);
text(`OPEN
                        DISCUSSION`);
ec('a');
ec('div');
ec('span');
ec('div');
}
}}else { 
let cmpHiH2 = this._lc('c8Sc0Mozi', {parent:component,parentTop:projectLayout,props:{project:component.project,discussion:component.record},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},state:'stieHIX'});
}}});
let cnd89Kg = component.confirmDelete;
this.setState('stMGxiU', cnd89Kg);
if (cnd89Kg) { 
let cmpDX7g = this._lc('cv8h63ZRg', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stMGxiU'});
}
                    this.isReadyToGo();
                }
        });