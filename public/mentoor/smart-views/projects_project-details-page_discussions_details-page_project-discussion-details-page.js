_Component({
                selector: 'project-discussion-details-page',
                c: 'ProjectDiscussionDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','discussion','isInEditMode','confirmStatusChange','confirmStatusChanging','changeStatus','confirmDelete','remove'],
                children: {c5CkZ1WrF:'flk-time-ago',cnwZ_OjCT:'markdown',cqXfS0qjc:'comments',cmYypbqo1:'project-discussion-form',c93FPsE9O:'project-layout',ctMVT4PK3:'flk-alert',cIzXQFrAP:'flk-alert'},
                render: function (component) {
                    let cmpH86j = this._lc('c93FPsE9O', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndcad9 = component.discussion && ! component.isInEditMode;
this.setState('stVCQTV', cndcad9);
if (cndcad9) { 
let elv75Ib = eo('div','E5Of',null,`class`,`discussion`);
let cndcoxi = component.discussion.canBeModified;
this.setState('stU5MGS', cndcoxi);
if (cndcoxi) { 
let elo0VqI = eo('div','jFcf',null,`class`,`status`);
let cndrqfn = component.discussion.status == 'opened';
this.setState('stMenXf', cndrqfn);
let cndlQaB = !(cndrqfn);
this.setState('stvA5yr', cndlQaB);
if (cndrqfn) { 
let elDGoL8 = eo('button','WLXf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmStatusChange()}]},`type`,`button`,`class`,`btn bold badge badge-danger`);
let el8l4CF = eo('i','DWbf',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Close`);
ec('button');
}else { 
let el_kfez = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmStatusChange()}]},`class`,`btn badge badge-primary bold`);
let elVozLW = eo('i',null,null,`class`,`${fas('unlock') + ' mr-2 icon'}`);
ec('i');
text(`Reopen`);
ec('button');
}let elnQVFG = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isInEditMode = true}]},`class`,`btn badge badge-success bold`);
text(`Edit`);
ec('button');
ec('div');
}let eldtkTz = eo('h1',null,null,`class`,`m-b-1 title`);
let eldGPj8 = eo('span');
text(component.discussion.title);
ec('span');
let cndWsOc = component.discussion.team.type;
this.setState('stGObAf', cndWsOc);
let cndnJv2 = component.discussion.status == 'closed';
this.setState('stUHZDG', cndnJv2);
if (cndWsOc) { 
let elgX3oh = eo('small','W2Qf',null,`class`,`teal-text bold ml-2`);
text(component.discussion.team.type + ' team');
ec('small');
}let cndlBdh = component.discussion.status == 'opened';
this.setState('stn8qqw', cndlBdh);
let cndPDwA = cndnJv2;
this.setState('stlNviY', cndPDwA);
if (cndlBdh) { 
let elDCwq9 = eo('span','xZ7f',null,`class`,`badge ml-2 badge-success`);
text(`Opened`);
ec('span');
}else if (cndPDwA) { 
let elbSVhe = eo('span',null,null,`class`,`badge ml-2 badge-danger`);
text(`Closed`);
ec('span');
}ec('h1');
let el3D2Ji = ev('img',null,null,`src`,`${component.discussion.createdBy.image}`,`class`,`user-image`,`title`,`${component.discussion.createdBy.name}`,`alt`,`${component.discussion.createdBy.name}`);
let elBKWvT = eo('div',null,null,`class`,`d-inline-block`);
let elqH8K5 = eo('div');
text(component.discussion.createdBy.name);
ec('div');
let elqIuSN = eo('div');
let cmpAhOL = this._lc('c5CkZ1WrF', {parent:component,parentTop:projectLayout,props:{timestamp:component.discussion.createdAt.timestamp},attrs:{class:'ago'}});
ec('div');
ec('div');
let elNnR9U = eo('div',null,null,`class`,`simple-card m-y-1`);
let cmpGoSd = this._lc('cnwZ_OjCT', {parent:component,parentTop:projectLayout,props:{content:component.discussion.discussion}});
ec('div');
let cmpQSHk = this._lc('cqXfS0qjc', {parent:component,parentTop:projectLayout,props:{disableComments:component.discussion.status == 'closed',project:component.project,comments:component.discussion.comments,typeId:component.discussion.id},attrs:{type:'discussion'}});
ec('div');
}let cnd2Lnu = component.isInEditMode;
this.setState('st8kEIz', cnd2Lnu);
if (cnd2Lnu) { 
let cmp8FuT = this._lc('cmYypbqo1', {parent:component,parentTop:projectLayout,props:{project:component.project,discussion:component.discussion},events:{onclose:function(e) {let $el = this; component.isInEditMode = null}},state:'st8kEIz'});
}}});
let cndLvBK = component.confirmStatusChanging;
this.setState('st0lZTp', cndLvBK);
if (cndLvBK) { 
let cmpMpyd = this._lc('ctMVT4PK3', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmStatusChanging = null},onconfirm:function(e) {let $el = this; component.changeStatus()}},state:'st0lZTp'});
}let cndgngQ = component.confirmDelete;
this.setState('stZTnhj', cndgngQ);
if (cndgngQ) { 
let cmphp80 = this._lc('cIzXQFrAP', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stZTnhj'});
}
                    this.isReadyToGo();
                }
        });