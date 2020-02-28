_Component({
                selector: 'project-discussion-details-page',
                c: 'ProjectDiscussionDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','discussion','isInEditMode','confirmStatusChange','confirmStatusChanging','changeStatus','confirmDelete','remove'],
                children: {cLmyaXR9d:'flk-time-ago',ce5AuPH5x:'markdown',c011U5jsL:'comments',cREct1q5L:'project-discussion-form',c5DsserfW:'project-layout',cUplo7gJc:'flk-alert',cktAgurUi:'flk-alert'},
                render: function (component) {
                    let cmp5pHf = this._lc('c5DsserfW', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndqEvX = component.discussion && ! component.isInEditMode;
this.setState('st7FT4p', cndqEvX);
if (cndqEvX) { 
let el0522h = eo('div','04if',null,`class`,`discussion`);
let cndYqL2 = component.discussion.canBeModified;
this.setState('stL9ado', cndYqL2);
if (cndYqL2) { 
let elUoiBL = eo('div','A3df',null,`class`,`status`);
let cndLWKq = component.discussion.status == 'opened';
this.setState('stesyhR', cndLWKq);
let cndLM46 = !(cndLWKq);
this.setState('stZQOlm', cndLM46);
if (cndLWKq) { 
let elzeBj_ = eo('button','fDzf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmStatusChange()}]},`type`,`button`,`class`,`btn bold badge badge-danger`);
let ellcet0 = eo('i','aC1f',null,`class`,`${fas('lock')} mr-2 icon`);
ec('i');
text(`Close`);
ec('button');
}else { 
let elbyTQ6 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmStatusChange()}]},`class`,`btn badge badge-primary bold`);
let elvcDpV = eo('i',null,null,`class`,`${fas('unlock')} mr-2 icon`);
ec('i');
text(`Reopen`);
ec('button');
}let elZiuRj = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isInEditMode = true}]},`class`,`btn badge badge-success bold`);
text(`Edit`);
ec('button');
ec('div');
}let elxbe49 = eo('h1',null,null,`class`,`m-b-1 title`);
let elG92yo = eo('span');
text(component.discussion.title);
ec('span');
let cndrTDb = component.discussion.team.type;
this.setState('stXwok0', cndrTDb);
let cndgC8b = component.discussion.status == 'closed';
this.setState('st9oRXt', cndgC8b);
if (cndrTDb) { 
let elz5CY2 = eo('small','7Qhf',null,`class`,`teal-text bold ml-2`);
text(component.discussion.team.type + ' team');
ec('small');
}let cnd4_sS = component.discussion.status == 'opened';
this.setState('stFXwqQ', cnd4_sS);
let cndZYI0 = cndgC8b;
this.setState('sthr43t', cndZYI0);
if (cnd4_sS) { 
let elJhsU2 = eo('span','bqDf',null,`class`,`badge ml-2 badge-success`);
text(`Opened`);
ec('span');
}else if (cndZYI0) { 
let elAIVJO = eo('span',null,null,`class`,`badge ml-2 badge-danger`);
text(`Closed`);
ec('span');
}ec('h1');
let el5YJM2 = ev('img',null,null,`src`,`${component.discussion.createdBy.image}`,`class`,`user-image`,`title`,`${component.discussion.createdBy.name}`,`alt`,`${component.discussion.createdBy.name}`);
let el0X6Tc = eo('div',null,null,`class`,`d-inline-block`);
let eloBxE9 = eo('div');
text(component.discussion.createdBy.name);
ec('div');
let elCK5tg = eo('div');
let cmpCxrv = this._lc('cLmyaXR9d', {parent:component,parentTop:projectLayout,props:{timestamp:component.discussion.createdAt.timestamp},attrs:{class:'ago'}});
ec('div');
ec('div');
let elIpfhU = eo('div',null,null,`class`,`simple-card m-y-1`);
let cmpJy8X = this._lc('ce5AuPH5x', {parent:component,parentTop:projectLayout,props:{content:component.discussion.discussion}});
ec('div');
let cmpyZwW = this._lc('c011U5jsL', {parent:component,parentTop:projectLayout,props:{disableComments:component.discussion.status == 'closed',project:component.project,comments:component.discussion.comments,typeId:component.discussion.id},attrs:{type:'discussion'}});
ec('div');
}let cndOZp4 = component.isInEditMode;
this.setState('stflL12', cndOZp4);
if (cndOZp4) { 
let cmpdM_r = this._lc('cREct1q5L', {parent:component,parentTop:projectLayout,props:{project:component.project,discussion:component.discussion},events:{onclose:function(e) {let $el = this; component.isInEditMode = null}},state:'stflL12'});
}}});
let cndDcTV = component.confirmStatusChanging;
this.setState('stWNFWk', cndDcTV);
if (cndDcTV) { 
let cmpHiWw = this._lc('cUplo7gJc', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmStatusChanging = null},onconfirm:function(e) {let $el = this; component.changeStatus()}},state:'stWNFWk'});
}let cndoR64 = component.confirmDelete;
this.setState('stkvbaD', cndoR64);
if (cndoR64) { 
let cmplxXu = this._lc('cktAgurUi', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stkvbaD'});
}
                    this.isReadyToGo();
                }
        });