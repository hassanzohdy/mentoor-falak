_Component({
                selector: 'project-discussion-details-page',
                c: 'ProjectDiscussionDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','discussion','isInEditMode','confirmStatusChange','confirmStatusChanging','changeStatus','confirmDelete','remove'],
                children: {c8PFneoyl:'flk-time-ago',csq8tRepj:'markdown',cDSp_U7Vu:'comments',cZtnxKE29:'project-discussion-form',c6u21fbe9:'project-layout',cpvBbn5yY:'flk-alert',cryq0CvCD:'flk-alert'},
                render: function (component) {
                    let cmpk7uY = this._lc('c6u21fbe9', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cnd4CVD = component.discussion && ! component.isInEditMode;
this.setState('stiYUdc', cnd4CVD);
if (cnd4CVD) { 
let elicDCB = eo('div','sbFf',null,`class`,`discussion`);
let cnduk9L = component.discussion.canBeModified;
this.setState('stifawV', cnduk9L);
if (cnduk9L) { 
let elxUP5R = eo('div','1q1f',null,`class`,`status`);
let cndi3WV = component.discussion.status == 'opened';
this.setState('st0wPBt', cndi3WV);
let cndJx59 = !(cndi3WV);
this.setState('stsn6IE', cndJx59);
if (cndi3WV) { 
let elzJTbp = eo('button','sqHf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmStatusChange()}]},`type`,`button`,`class`,`btn bold badge badge-danger`);
let elLXB03 = eo('i','O3af',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Close`);
ec('button');
}else { 
let elsgSYF = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmStatusChange()}]},`class`,`btn badge badge-primary bold`);
let elurVdq = eo('i',null,null,`class`,`${fas('unlock') + ' mr-2 icon'}`);
ec('i');
text(`Reopen`);
ec('button');
}let elYbldP = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isInEditMode = true}]},`class`,`btn badge badge-success bold`);
text(`Edit`);
ec('button');
ec('div');
}let el0EooV = eo('h1',null,null,`class`,`m-b-1 title`);
let elAZXrc = eo('span');
text(component.discussion.title);
ec('span');
let cndoT5B = component.discussion.team.type;
this.setState('st2yhv_', cndoT5B);
let cnduowY = component.discussion.status == 'closed';
this.setState('stollxO', cnduowY);
if (cndoT5B) { 
let elJaBLh = eo('small','OAWf',null,`class`,`teal-text bold ml-2`);
text(component.discussion.team.type + ' team');
ec('small');
}let cndROtt = component.discussion.status == 'opened';
this.setState('stuZQUV', cndROtt);
let cndPfsi = cnduowY;
this.setState('stZ_IT7', cndPfsi);
if (cndROtt) { 
let elWj2Or = eo('span','BZgf',null,`class`,`badge ml-2 badge-success`);
text(`Opened`);
ec('span');
}else if (cndPfsi) { 
let el8Sfoq = eo('span',null,null,`class`,`badge ml-2 badge-danger`);
text(`Closed`);
ec('span');
}ec('h1');
let el7HQYT = ev('img',null,null,`src`,`${component.discussion.createdBy.image}`,`class`,`user-image`,`title`,`${component.discussion.createdBy.name}`,`alt`,`${component.discussion.createdBy.name}`);
let eljiOkh = eo('div',null,null,`class`,`d-inline-block`);
let elqGcty = eo('div');
text(component.discussion.createdBy.name);
ec('div');
let elhxXm9 = eo('div');
let cmpOkSD = this._lc('c8PFneoyl', {parent:component,parentTop:projectLayout,props:{timestamp:component.discussion.createdAt.timestamp},attrs:{class:'ago'}});
ec('div');
ec('div');
let elrOiO4 = eo('div',null,null,`class`,`simple-card m-y-1`);
let cmpFqgA = this._lc('csq8tRepj', {parent:component,parentTop:projectLayout,props:{content:component.discussion.discussion}});
ec('div');
let cmpWor1 = this._lc('cDSp_U7Vu', {parent:component,parentTop:projectLayout,props:{disableComments:component.discussion.status == 'closed',project:component.project,comments:component.discussion.comments,typeId:component.discussion.id},attrs:{type:'discussion'}});
ec('div');
}let cndqYZ4 = component.isInEditMode;
this.setState('stbtfQu', cndqYZ4);
if (cndqYZ4) { 
let cmpaitA = this._lc('cZtnxKE29', {parent:component,parentTop:projectLayout,props:{project:component.project,discussion:component.discussion},events:{onclose:function(e) {let $el = this; component.isInEditMode = null}},state:'stbtfQu'});
}}});
let cndO_6V = component.confirmStatusChanging;
this.setState('stUfYl3', cndO_6V);
if (cndO_6V) { 
let cmpUUAW = this._lc('cpvBbn5yY', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmStatusChanging = null},onconfirm:function(e) {let $el = this; component.changeStatus()}},state:'stUfYl3'});
}let cnd8ZxF = component.confirmDelete;
this.setState('st8qv30', cnd8ZxF);
if (cnd8ZxF) { 
let cmpWwS7 = this._lc('cryq0CvCD', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st8qv30'});
}
                    this.isReadyToGo();
                }
        });