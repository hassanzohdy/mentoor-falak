_Component({
                selector: 'project-discussion-details-page',
                c: 'ProjectDiscussionDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','discussion','isInEditMode','confirmStatusChange','confirmStatusChanging','changeStatus','confirmDelete','remove'],
                children: {c2idJBYQC:'flk-time-ago',c3mheOPoL:'markdown',cPbxTrW_U:'comments',ca27XNDxW:'project-discussion-form',cokQsJjwp:'project-layout',cJ8SJ7Vi9:'flk-alert',chyEpKkCi:'flk-alert'},
                render: function (component) {
                    let cmp5qhY = this._lc('cokQsJjwp', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndNoWL = component.discussion && ! component.isInEditMode;
this.setState('stoolgH', cndNoWL);
if (cndNoWL) { 
let elYB3Cd = eo('div','eEmf',null,`class`,`discussion`);
let cndA2PA = component.discussion.canBeModified;
this.setState('stthmyn', cndA2PA);
if (cndA2PA) { 
let elUIdVr = eo('div','Kjpf',null,`class`,`status`);
let cnd_MT8 = component.discussion.status == 'opened';
this.setState('stbL0Nc', cnd_MT8);
let cndndJn = !(cnd_MT8);
this.setState('stIrwIn', cndndJn);
if (cnd_MT8) { 
let el1qyo5 = eo('button','gFFf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmStatusChange()}]},`type`,`button`,`class`,`btn bold badge badge-danger`);
let el5rmoK = eo('i','sKuf',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Close`);
ec('button');
}else { 
let elZqzpH = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmStatusChange()}]},`class`,`btn badge badge-primary bold`);
let elZBKfW = eo('i',null,null,`class`,`${fas('unlock') + ' mr-2 icon'}`);
ec('i');
text(`Reopen`);
ec('button');
}let el_p31e = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isInEditMode = true}]},`class`,`btn badge badge-success bold`);
text(`Edit`);
ec('button');
ec('div');
}let elhb74P = eo('h1',null,null,`class`,`m-b-1 title`);
let elx1EBQ = eo('span');
text(component.discussion.title);
ec('span');
let cnd2vo9 = component.discussion.team.type;
this.setState('stT3mBe', cnd2vo9);
let cnd3_VP = component.discussion.status == 'closed';
this.setState('st9qHPC', cnd3_VP);
if (cnd2vo9) { 
let elXsNZQ = eo('small','7fDf',null,`class`,`teal-text bold ml-2`);
text(component.discussion.team.type + ' team');
ec('small');
}let cnddIyD = component.discussion.status == 'opened';
this.setState('stZvN8a', cnddIyD);
let cndeCVL = cnd3_VP;
this.setState('stD5Ixu', cndeCVL);
if (cnddIyD) { 
let elsNDKx = eo('span','0N3f',null,`class`,`badge ml-2 badge-success`);
text(`Opened`);
ec('span');
}else if (cndeCVL) { 
let el9fts8 = eo('span',null,null,`class`,`badge ml-2 badge-danger`);
text(`Closed`);
ec('span');
}ec('h1');
let elQmvEN = ev('img',null,null,`src`,`${component.discussion.createdBy.image}`,`class`,`user-image`,`title`,`${component.discussion.createdBy.name}`,`alt`,`${component.discussion.createdBy.name}`);
let el7IMmD = eo('div',null,null,`class`,`d-inline-block`);
let elTwIHE = eo('div');
text(component.discussion.createdBy.name);
ec('div');
let el6Svp7 = eo('div');
let cmpsaF0 = this._lc('c2idJBYQC', {parent:component,parentTop:projectLayout,props:{timestamp:component.discussion.createdAt.timestamp},attrs:{class:'ago'}});
ec('div');
ec('div');
let elp1V8H = eo('div',null,null,`class`,`simple-card m-y-1`);
let cmpidZD = this._lc('c3mheOPoL', {parent:component,parentTop:projectLayout,props:{content:component.discussion.discussion}});
ec('div');
let cmp2tud = this._lc('cPbxTrW_U', {parent:component,parentTop:projectLayout,props:{disableComments:component.discussion.status == 'closed',project:component.project,comments:component.discussion.comments,typeId:component.discussion.id},attrs:{type:'discussion'}});
ec('div');
}let cndJvQj = component.isInEditMode;
this.setState('stU3RGt', cndJvQj);
if (cndJvQj) { 
let cmp_H5F = this._lc('ca27XNDxW', {parent:component,parentTop:projectLayout,props:{project:component.project,discussion:component.discussion},events:{onclose:function(e) {let $el = this; component.isInEditMode = null}},state:'stU3RGt'});
}}});
let cndTO_4 = component.confirmStatusChanging;
this.setState('stJi2M0', cndTO_4);
if (cndTO_4) { 
let cmpwQfH = this._lc('cJ8SJ7Vi9', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmStatusChanging = null},onconfirm:function(e) {let $el = this; component.changeStatus()}},state:'stJi2M0'});
}let cnd9_zm = component.confirmDelete;
this.setState('stdVTzR', cnd9_zm);
if (cnd9_zm) { 
let cmp2e4b = this._lc('chyEpKkCi', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stdVTzR'});
}
                    this.isReadyToGo();
                }
        });