_Component({
                selector: 'project-discussion-details-page',
                c: 'ProjectDiscussionDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','discussion','isInEditMode','confirmStatusChange','confirmStatusChanging','changeStatus','confirmDelete','remove'],
                children: {cHcyqrxOw:'flk-time-ago',c8lDFbh35:'markdown',c1TNXGC7L:'comments',cxhyijqZc:'project-discussion-form',cUY_zBxEA:'project-layout',cj7MhtWR4:'flk-alert',cwO3gXuPw:'flk-alert'},
                render: function (component) {
                    let cmpNq6t = this._lc('cUY_zBxEA', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndvAqR = component.discussion && ! component.isInEditMode;
this.setState('st0CXga', cndvAqR);
if (cndvAqR) { 
let el7S8NJ = eo('div','r4mf',null,`class`,`discussion`);
let cndIi4E = component.discussion.canBeModified;
this.setState('stf9KJ0', cndIi4E);
if (cndIi4E) { 
let elwWOyS = eo('div','IVDf',null,`class`,`status`);
let cndcrcs = component.discussion.status == 'opened';
this.setState('stYXGnb', cndcrcs);
let cndlbxJ = !(cndcrcs);
this.setState('stx1pES', cndlbxJ);
if (cndcrcs) { 
let elGnpK1 = eo('button','Tm0f',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmStatusChange()}]},`type`,`button`,`class`,`btn bold badge badge-danger`);
let el03moA = eo('i','ByTf',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Close`);
ec('button');
}else { 
let el2WkuO = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmStatusChange()}]},`class`,`btn badge badge-primary bold`);
let el8mWHg = eo('i',null,null,`class`,`${fas('unlock') + ' mr-2 icon'}`);
ec('i');
text(`Reopen`);
ec('button');
}let elYzS90 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isInEditMode = true}]},`class`,`btn badge badge-success bold`);
text(`Edit`);
ec('button');
ec('div');
}let elaNGzT = eo('h1',null,null,`class`,`m-b-1 title`);
let elUE3uz = eo('span');
text(component.discussion.title);
ec('span');
let cnd4ZQ_ = component.discussion.team.type;
this.setState('stUv68C', cnd4ZQ_);
let cndG7H4 = component.discussion.status == 'closed';
this.setState('st7R0jq', cndG7H4);
if (cnd4ZQ_) { 
let eljq5_s = eo('small','u3bf',null,`class`,`teal-text bold ml-2`);
text(component.discussion.team.type + ' team');
ec('small');
}let cndWati = component.discussion.status == 'opened';
this.setState('stfFetu', cndWati);
let cndc2Hf = cndG7H4;
this.setState('st7NuJP', cndc2Hf);
if (cndWati) { 
let elvLHw1 = eo('span','_bRf',null,`class`,`badge ml-2 badge-success`);
text(`Opened`);
ec('span');
}else if (cndc2Hf) { 
let elf_y2T = eo('span',null,null,`class`,`badge ml-2 badge-danger`);
text(`Closed`);
ec('span');
}ec('h1');
let elxjtp7 = ev('img',null,null,`src`,`${component.discussion.createdBy.image}`,`class`,`user-image`,`title`,`${component.discussion.createdBy.name}`,`alt`,`${component.discussion.createdBy.name}`);
let elgBzHE = eo('div',null,null,`class`,`d-inline-block`);
let elTXcEx = eo('div');
text(component.discussion.createdBy.name);
ec('div');
let elp5MtO = eo('div');
let cmpuAu7 = this._lc('cHcyqrxOw', {parent:component,parentTop:projectLayout,props:{timestamp:component.discussion.createdAt.timestamp},attrs:{class:'ago'}});
ec('div');
ec('div');
let elkc0Ar = eo('div',null,null,`class`,`simple-card m-y-1`);
let cmp0P_7 = this._lc('c8lDFbh35', {parent:component,parentTop:projectLayout,props:{content:component.discussion.discussion}});
ec('div');
let cmp284z = this._lc('c1TNXGC7L', {parent:component,parentTop:projectLayout,props:{disableComments:component.discussion.status == 'closed',project:component.project,comments:component.discussion.comments,typeId:component.discussion.id},attrs:{type:'discussion'}});
ec('div');
}let cndCGC_ = component.isInEditMode;
this.setState('steClbd', cndCGC_);
if (cndCGC_) { 
let cmpOmVX = this._lc('cxhyijqZc', {parent:component,parentTop:projectLayout,props:{project:component.project,discussion:component.discussion},events:{onclose:function(e) {let $el = this; component.isInEditMode = null}},state:'steClbd'});
}}});
let cndJudP = component.confirmStatusChanging;
this.setState('stMYTzz', cndJudP);
if (cndJudP) { 
let cmpgwvn = this._lc('cj7MhtWR4', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmStatusChanging = null},onconfirm:function(e) {let $el = this; component.changeStatus()}},state:'stMYTzz'});
}let cndiwXC = component.confirmDelete;
this.setState('stZk042', cndiwXC);
if (cndiwXC) { 
let cmpgM9p = this._lc('cwO3gXuPw', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stZk042'});
}
                    this.isReadyToGo();
                }
        });