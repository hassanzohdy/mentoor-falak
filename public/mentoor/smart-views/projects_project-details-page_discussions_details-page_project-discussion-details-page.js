_Component({
                selector: 'project-discussion-details-page',
                c: 'ProjectDiscussionDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','discussion','isInEditMode','confirmStatusChange','confirmStatusChanging','changeStatus','confirmDelete','remove'],
                children: {cBklPdH8K:'flk-time-ago',chcB8wv0Q:'markdown',cASw419pt:'comments',cZ5OOayNa:'project-discussion-form',cWAaIE9Px:'project-layout',cPeY2TFX8:'flk-alert',cmyGry_Lw:'flk-alert'},
                render: function (component) {
                    let cmpZzOy = this._lc('cWAaIE9Px', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndlLIu = component.discussion && ! component.isInEditMode;
this.setState('stxF_9k', cndlLIu);
if (cndlLIu) { 
let eloFCRH = eo('div','fJQf',null,`class`,`discussion`);
let cndVnKO = component.discussion.canBeModified;
this.setState('stUCVDl', cndVnKO);
if (cndVnKO) { 
let elNMJuT = eo('div','oslf',null,`class`,`status`);
let cndy1tg = component.discussion.status == 'opened';
this.setState('stLQjYN', cndy1tg);
let cnddzY1 = !(cndy1tg);
this.setState('st4wqCC', cnddzY1);
if (cndy1tg) { 
let elyhmUt = eo('button','QHAf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmStatusChange()}]},`type`,`button`,`class`,`btn bold badge badge-danger`);
let elS2A21 = eo('i','B28f',null,`class`,`${fas('lock')} mr-2 icon`);
ec('i');
text(`Close`);
ec('button');
}else { 
let el3el_P = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmStatusChange()}]},`class`,`btn badge badge-primary bold`);
let elt6UOA = eo('i',null,null,`class`,`${fas('unlock')} mr-2 icon`);
ec('i');
text(`Reopen`);
ec('button');
}let elzCdYt = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isInEditMode = true}]},`class`,`btn badge badge-success bold`);
text(`Edit`);
ec('button');
ec('div');
}let eltUHSk = eo('h1',null,null,`class`,`m-b-1 title`);
let elbfQDt = eo('span');
text(component.discussion.title);
ec('span');
let cndLin_ = component.discussion.team.type;
this.setState('st6qceH', cndLin_);
let cndKEG7 = component.discussion.status == 'closed';
this.setState('stE61E7', cndKEG7);
if (cndLin_) { 
let elEr8BO = eo('small','aL0f',null,`class`,`teal-text bold ml-2`);
text(component.discussion.team.type + ' team');
ec('small');
}let cndNc6h = component.discussion.status == 'opened';
this.setState('stfFmeE', cndNc6h);
let cndzzpw = cndKEG7;
this.setState('stvUhrC', cndzzpw);
if (cndNc6h) { 
let elgFm6D = eo('span','kNFf',null,`class`,`badge ml-2 badge-success`);
text(`Opened`);
ec('span');
}else if (cndzzpw) { 
let el7I3xV = eo('span',null,null,`class`,`badge ml-2 badge-danger`);
text(`Closed`);
ec('span');
}ec('h1');
let elzo2u2 = ev('img',null,null,`src`,`${component.discussion.createdBy.image}`,`class`,`user-image`,`title`,`${component.discussion.createdBy.name}`,`alt`,`${component.discussion.createdBy.name}`);
let elq11rb = eo('div',null,null,`class`,`d-inline-block`);
let elD_rNT = eo('div');
text(component.discussion.createdBy.name);
ec('div');
let elHXxtu = eo('div');
let cmpO_Ap = this._lc('cBklPdH8K', {parent:component,parentTop:projectLayout,props:{timestamp:component.discussion.createdAt.timestamp},attrs:{class:'ago'}});
ec('div');
ec('div');
let el0achE = eo('div',null,null,`class`,`simple-card m-y-1`);
let cmpjn9B = this._lc('chcB8wv0Q', {parent:component,parentTop:projectLayout,props:{content:component.discussion.discussion}});
ec('div');
let cmp9e38 = this._lc('cASw419pt', {parent:component,parentTop:projectLayout,props:{disableComments:component.discussion.status == 'closed',project:component.project,comments:component.discussion.comments,typeId:component.discussion.id},attrs:{type:'discussion'}});
ec('div');
}let cnd5V9M = component.isInEditMode;
this.setState('stRVHRA', cnd5V9M);
if (cnd5V9M) { 
let cmp39TO = this._lc('cZ5OOayNa', {parent:component,parentTop:projectLayout,props:{project:component.project,discussion:component.discussion},events:{onclose:function(e) {let $el = this; component.isInEditMode = null}},state:'stRVHRA'});
}}});
let cndppqv = component.confirmStatusChanging;
this.setState('stcfNXX', cndppqv);
if (cndppqv) { 
let cmpQHFW = this._lc('cPeY2TFX8', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmStatusChanging = null},onconfirm:function(e) {let $el = this; component.changeStatus()}},state:'stcfNXX'});
}let cnd2QDt = component.confirmDelete;
this.setState('stDkARE', cnd2QDt);
if (cnd2QDt) { 
let cmpGVI1 = this._lc('cmyGry_Lw', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stDkARE'});
}
                    this.isReadyToGo();
                }
        });