_Component({
                selector: 'project-discussions-page',
                c: 'ProjectDiscussionsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','modalIsOpened','openModal','user','confirmRemoving','record','confirmDelete','remove'],
                children: {ctAcfI74R:'flk-time-ago',cUMSaQvIz:'project-discussion-form',csZRpn3PV:'project-layout',cj9RDQjJ7:'flk-alert'},
                render: function (component) {
                    let cmpb45R = this._lc('csZRpn3PV', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndVeqE = ! component.modalIsOpened;
this.setState('st6rPez', cndVeqE);
let cndOfWo = !(cndVeqE);
this.setState('stTrkNP', cndOfWo);
if (cndVeqE) { 
let elMrZM0 = eo('button','4qnf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let el2meR9 = eo('i','WqKf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Discussion`);
ec('button');
let elbwZT0 = eo('h1','mXef',null,`class`,`m-y-1`);
text(`${ component.project.name } Discussions
            (${ component.project.discussions.length })`);
ec('h1');
let cnd9I6C = Is.empty(component.project.discussions);
this.setState('st3lrjt', cnd9I6C);
let cndpC5P = !(cnd9I6C);
this.setState('stoRP9d', cndpC5P);
if (cnd9I6C) { 
let el4Bz5e = eo('h1','l8Xf',null,`class`,`text-center orange-text`);
text(`No Discussions.`);
ec('h1');
}else { 
for (let index in component.project.discussions) {
let discussion = component.project.discussions[index]; 
 let iiPGcq = 'D7tybq6' + index;
let elho7A1 = eo('div','5VLWQwfCJw9Z' + index+iiPGcq,null,`class`,`discussion m-t-2 simple-card row`);
let el5esaL = eo('div','jgvff'+iiPGcq,null,`class`,`col-1 text-right`);
let eld3iQc = ev('img','UwDff'+iiPGcq,null,`src`,`${discussion.createdBy.image}`,`class`,`user-image`,`title`,`${discussion.createdBy.name}`,`alt`,`${discussion.createdBy.name}`);
ec('div');
let elAs7vE = eo('span','6qoff'+iiPGcq,null,`class`,`col`);
let cndqi9L = component.project.isHigherAuthority || discussion.createdBy.id == component.user.id;
this.setState('stqqyLb', cndqi9L);
if (cndqi9L) { 
let elppgxT = eo('span','44off'+iiPGcq,null,`class`,`action-btns float-right`);
let elFOg7B = eo('button','vEzff'+iiPGcq,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', discussion, index)}]},`type`,`button`);
let elI4yy7 = eo('i','qLiff'+iiPGcq,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
let elKgEg_ = eo('button','wAHff'+iiPGcq,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(discussion, index)}]},`type`,`button`);
let elIVi_m = eo('i','C5iff'+iiPGcq,null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
ec('span');
}let elm_YQl = eo('div','9ZAff'+iiPGcq,null,`class`,`clearfix`);
ec('div');
let cndK1Vg = discussion.comments.length > 0;
this.setState('stEdLf6', cndK1Vg);
if (cndK1Vg) { 
let eleiF36 = eo('span','ZmMff'+iiPGcq,null,`class`,`petrol-text float-right`);
let elSaX7k = eo('span','gFRff'+iiPGcq);
text(discussion.comments.length);
ec('span');
let elMRnTd = eo('i','dOSff'+iiPGcq,null,`class`,`${fas('comments') + ' ml-2 icon'}`);
ec('i');
ec('span');
}let elDCmdb = eo('h3','Hkcff'+iiPGcq,null,`class`,`title`);
let el_hoTt = eo('a','H7sff'+iiPGcq,null,`href`,`${URLS.project(component.project, 'discussions', discussion)}`);
let eliJH3L = eo('span','sKRff'+iiPGcq);
text(discussion.title);
ec('span');
let cndaQ11 = discussion.team.type;
this.setState('stBCGoc', cndaQ11);
if (cndaQ11) { 
let elcG2uT = eo('strong','5YSff'+iiPGcq,null,`class`,`ml-2 teal-text`);
text(discussion.team.type + ' team');
ec('strong');
}ec('a');
ec('h3');
let elevPBC = eo('div','RB2ff'+iiPGcq,null,`class`,`petrol-text bold`);
let eleNK1h = eo('span','LGFff'+iiPGcq);
text(discussion.createdBy.name);
ec('span');
let el9LRx2 = eo('span','z9zff'+iiPGcq,null,`class`,`badge text-capitalize ml-2`);
el9LRx2.cls = {'badge-success': discussion.status == 'opened', 'badge-danger': discussion.status == 'closed'};

            for (let className in el9LRx2.cls) {
                el9LRx2.classList.toggle(className, el9LRx2.cls[className]);
            }  
            text(discussion.status);
ec('span');
ec('div');
let elVMzTr = eo('div','9CUff'+iiPGcq);
let cmpyvQK = this._lc('ctAcfI74R', {parent:component,parentTop:projectLayout,props:{timestamp:discussion.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iiPGcq});
ec('div');
let elpIGM4 = eo('div','dabff'+iiPGcq,null,`class`,`m-t-1`);
let elG9SPL = eo('a','Trnff'+iiPGcq,null,`href`,`${URLS.project(component.project, 'discussions', discussion)}`,`class`,`btn btn-purple bold`);
text(`OPEN
                        DISCUSSION`);
ec('a');
ec('div');
ec('span');
ec('div');
}
}}else { 
let cmppfi8 = this._lc('cUMSaQvIz', {parent:component,parentTop:projectLayout,props:{project:component.project,discussion:component.record},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},state:'stTrkNP'});
}}});
let cnddiqb = component.confirmDelete;
this.setState('st1JD3m', cnddiqb);
if (cnddiqb) { 
let cmpnUZX = this._lc('cj9RDQjJ7', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st1JD3m'});
}
                    this.isReadyToGo();
                }
        });