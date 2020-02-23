_Component({
                selector: 'project-discussion-details-page',
                c: 'ProjectDiscussionDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','discussion','isInEditMode','confirmStatusChange','confirmStatusChanging','changeStatus','confirmDelete','remove'],
                children: {cZrqpyoVN:'flk-time-ago',cGcj5Pcji:'markdown',c2YcC5ZCL:'comments',czG8VNMj1:'project-discussion-form',ch5n82egB:'project-layout',ctTHShTXK:'flk-alert',c4Uh5iqRV:'flk-alert'},
                render: function (component) {
                    let cmpspBA = this._lc('ch5n82egB', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndokxb = component.discussion && ! component.isInEditMode;
this.setState('stTNPfB', cndokxb);
if (cndokxb) { 
let eldKs8C = eo('div','HSNf',null,`class`,`discussion`);
let cndOByS = component.discussion.canBeModified;
this.setState('stH9JBm', cndOByS);
if (cndOByS) { 
let ellqAYT = eo('div','CQWf',null,`class`,`status`);
let cnd9XgP = component.discussion.status == 'opened';
this.setState('stBV5fl', cnd9XgP);
let cndP4GL = !(cnd9XgP);
this.setState('stzpp4j', cndP4GL);
if (cnd9XgP) { 
let elUfvL9 = eo('button','y7Pf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmStatusChange()}]},`type`,`button`,`class`,`btn bold badge badge-danger`);
let elok5js = eo('i','pfif',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Close`);
ec('button');
}else { 
let elZAkk8 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmStatusChange()}]},`class`,`btn badge badge-primary bold`);
let elOf6_q = eo('i',null,null,`class`,`${fas('unlock') + ' mr-2 icon'}`);
ec('i');
text(`Reopen`);
ec('button');
}let elQfWsL = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isInEditMode = true}]},`class`,`btn badge badge-success bold`);
text(`Edit`);
ec('button');
ec('div');
}let elC90ip = eo('h1',null,null,`class`,`m-b-1 title`);
let elr_8ny = eo('span');
text(component.discussion.title);
ec('span');
let cndaje2 = component.discussion.team.type;
this.setState('st8lqeP', cndaje2);
let cndHFLj = component.discussion.status == 'closed';
this.setState('sty98SK', cndHFLj);
if (cndaje2) { 
let elTgm_M = eo('small','DeTf',null,`class`,`teal-text bold ml-2`);
text(component.discussion.team.type + ' team');
ec('small');
}let cnd87AR = component.discussion.status == 'opened';
this.setState('st30BdN', cnd87AR);
let cndUl2m = cndHFLj;
this.setState('stI4fr4', cndUl2m);
if (cnd87AR) { 
let elV19lU = eo('span','e8Hf',null,`class`,`badge ml-2 badge-success`);
text(`Opened`);
ec('span');
}else if (cndUl2m) { 
let elmCE4r = eo('span',null,null,`class`,`badge ml-2 badge-danger`);
text(`Closed`);
ec('span');
}ec('h1');
let elQqVEa = ev('img',null,null,`src`,`${component.discussion.createdBy.image}`,`class`,`user-image`,`title`,`${component.discussion.createdBy.name}`,`alt`,`${component.discussion.createdBy.name}`);
let elruzf7 = eo('div',null,null,`class`,`d-inline-block`);
let elOgsGb = eo('div');
text(component.discussion.createdBy.name);
ec('div');
let el88Kcn = eo('div');
let cmpteyH = this._lc('cZrqpyoVN', {parent:component,parentTop:projectLayout,props:{timestamp:component.discussion.createdAt.timestamp},attrs:{class:'ago'}});
ec('div');
ec('div');
let elutY5z = eo('div',null,null,`class`,`simple-card m-y-1`);
let cmp1Fms = this._lc('cGcj5Pcji', {parent:component,parentTop:projectLayout,props:{content:component.discussion.discussion}});
ec('div');
let cmp53b6 = this._lc('c2YcC5ZCL', {parent:component,parentTop:projectLayout,props:{disableComments:component.discussion.status == 'closed',project:component.project,comments:component.discussion.comments,typeId:component.discussion.id},attrs:{type:'discussion'}});
ec('div');
}let cnd_QHh = component.isInEditMode;
this.setState('sttWgmY', cnd_QHh);
if (cnd_QHh) { 
let cmpIt2d = this._lc('czG8VNMj1', {parent:component,parentTop:projectLayout,props:{project:component.project,discussion:component.discussion},events:{onclose:function(e) {let $el = this; component.isInEditMode = null}},state:'sttWgmY'});
}}});
let cndCIkV = component.confirmStatusChanging;
this.setState('stlPvlq', cndCIkV);
if (cndCIkV) { 
let cmpGdtV = this._lc('ctTHShTXK', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmStatusChanging = null},onconfirm:function(e) {let $el = this; component.changeStatus()}},state:'stlPvlq'});
}let cndZrev = component.confirmDelete;
this.setState('stXIItk', cndZrev);
if (cndZrev) { 
let cmphciI = this._lc('c4Uh5iqRV', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stXIItk'});
}
                    this.isReadyToGo();
                }
        });