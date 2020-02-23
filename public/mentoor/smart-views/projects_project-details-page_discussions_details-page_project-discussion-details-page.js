_Component({
                selector: 'project-discussion-details-page',
                c: 'ProjectDiscussionDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','discussion','isInEditMode','confirmStatusChange','confirmStatusChanging','changeStatus','confirmDelete','remove'],
                children: {cc0QuNaaF:'flk-time-ago',cVe_tqVo4:'markdown',cQfZfUXPW:'comments',c16kYZflm:'project-discussion-form',c4IbBjfYV:'project-layout',cwmGguE3F:'flk-alert',cplTLIahg:'flk-alert'},
                render: function (component) {
                    let cmpuxhW = this._lc('c4IbBjfYV', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndGUDj = component.discussion && ! component.isInEditMode;
this.setState('stP8lbM', cndGUDj);
if (cndGUDj) { 
let elYupIW = eo('div','kLvf',null,`class`,`discussion`);
let cndsU3m = component.discussion.canBeModified;
this.setState('st3ocop', cndsU3m);
if (cndsU3m) { 
let elngpjw = eo('div','hLqf',null,`class`,`status`);
let cndtXUI = component.discussion.status == 'opened';
this.setState('stSab9I', cndtXUI);
let cnd6eaN = !(cndtXUI);
this.setState('st2J46p', cnd6eaN);
if (cndtXUI) { 
let elQ2Kc3 = eo('button','_nMf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmStatusChange()}]},`type`,`button`,`class`,`btn bold badge badge-danger`);
let elYl5yd = eo('i','kIUf',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Close`);
ec('button');
}else { 
let elgSiRj = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmStatusChange()}]},`class`,`btn badge badge-primary bold`);
let elJjtiY = eo('i',null,null,`class`,`${fas('unlock') + ' mr-2 icon'}`);
ec('i');
text(`Reopen`);
ec('button');
}let elTXuiW = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isInEditMode = true}]},`class`,`btn badge badge-success bold`);
text(`Edit`);
ec('button');
ec('div');
}let elRZNra = eo('h1',null,null,`class`,`m-b-1 title`);
let el2Ji35 = eo('span');
text(component.discussion.title);
ec('span');
let cndtDbJ = component.discussion.team.type;
this.setState('stofpCm', cndtDbJ);
let cnd5aEJ = component.discussion.status == 'closed';
this.setState('stcDaMN', cnd5aEJ);
if (cndtDbJ) { 
let el6spNc = eo('small','cNEf',null,`class`,`teal-text bold ml-2`);
text(component.discussion.team.type + ' team');
ec('small');
}let cndEPUu = component.discussion.status == 'opened';
this.setState('sty9F29', cndEPUu);
let cndfFz1 = cnd5aEJ;
this.setState('stK7PPS', cndfFz1);
if (cndEPUu) { 
let elkUIa9 = eo('span','Re5f',null,`class`,`badge ml-2 badge-success`);
text(`Opened`);
ec('span');
}else if (cndfFz1) { 
let elq0S4w = eo('span',null,null,`class`,`badge ml-2 badge-danger`);
text(`Closed`);
ec('span');
}ec('h1');
let elDLvPz = ev('img',null,null,`src`,`${component.discussion.createdBy.image}`,`class`,`user-image`,`title`,`${component.discussion.createdBy.name}`,`alt`,`${component.discussion.createdBy.name}`);
let elc3y4p = eo('div',null,null,`class`,`d-inline-block`);
let el2d04L = eo('div');
text(component.discussion.createdBy.name);
ec('div');
let elQLxuk = eo('div');
let cmpn7N7 = this._lc('cc0QuNaaF', {parent:component,parentTop:projectLayout,props:{timestamp:component.discussion.createdAt.timestamp},attrs:{class:'ago'}});
ec('div');
ec('div');
let elqDEzU = eo('div',null,null,`class`,`simple-card m-y-1`);
let cmpQlGB = this._lc('cVe_tqVo4', {parent:component,parentTop:projectLayout,props:{content:component.discussion.discussion}});
ec('div');
let cmpoQ9_ = this._lc('cQfZfUXPW', {parent:component,parentTop:projectLayout,props:{disableComments:component.discussion.status == 'closed',project:component.project,comments:component.discussion.comments,typeId:component.discussion.id},attrs:{type:'discussion'}});
ec('div');
}let cndYYN9 = component.isInEditMode;
this.setState('st9ufxI', cndYYN9);
if (cndYYN9) { 
let cmpNihq = this._lc('c16kYZflm', {parent:component,parentTop:projectLayout,props:{project:component.project,discussion:component.discussion},events:{onclose:function(e) {let $el = this; component.isInEditMode = null}},state:'st9ufxI'});
}}});
let cndylMH = component.confirmStatusChanging;
this.setState('stt_hAm', cndylMH);
if (cndylMH) { 
let cmp2yag = this._lc('cwmGguE3F', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmStatusChanging = null},onconfirm:function(e) {let $el = this; component.changeStatus()}},state:'stt_hAm'});
}let cndKxF8 = component.confirmDelete;
this.setState('stj4r8N', cndKxF8);
if (cndKxF8) { 
let cmp7nQe = this._lc('cplTLIahg', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stj4r8N'});
}
                    this.isReadyToGo();
                }
        });