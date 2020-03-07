_Component({
                selector: 'project-discussion-details-page',
                c: 'ProjectDiscussionDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','discussion','isInEditMode','confirmStatusChange','confirmStatusChanging','changeStatus','confirmDelete','remove'],
                children: {ceIgwsDZJ:'flk-time-ago',c_FvyYCn9:'markdown',cbtI0JzYz:'comments',c074J87UK:'project-discussion-form',cY0JnREIh:'project-layout',ceHSz9mhN:'flk-alert',c1Y97WsgK:'flk-alert'},
                render: function (component) {
                    let cmpOelE = this._lc('cY0JnREIh', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndwE8g = component.discussion && ! component.isInEditMode;
this.setState('stEgcKd', cndwE8g);
if (cndwE8g) { 
let eldcSdz = eo('div','4RXf',null,`class`,`discussion`);
let cndPDhi = component.discussion.canBeModified;
this.setState('sth1Mkj', cndPDhi);
if (cndPDhi) { 
let elhqrX2 = eo('div','jTEf',null,`class`,`status`);
let cndYH1G = component.discussion.status == 'opened';
this.setState('st40vRU', cndYH1G);
let cndWscL = !(cndYH1G);
this.setState('sta7M2q', cndWscL);
if (cndYH1G) { 
let elD3Ytn = eo('button','8m3f',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmStatusChange()}]},`type`,`button`,`class`,`btn bold badge badge-danger`);
let elz_52e = eo('i','1OOf',null,`class`,`${fas('lock')} mr-2 icon`);
ec('i');
text(`Close`);
ec('button');
}else { 
let elvgJ0N = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmStatusChange()}]},`class`,`btn badge badge-primary bold`);
let elingVc = eo('i',null,null,`class`,`${fas('unlock')} mr-2 icon`);
ec('i');
text(`Reopen`);
ec('button');
}let eluhA3c = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isInEditMode = true}]},`class`,`btn badge badge-success bold`);
text(`Edit`);
ec('button');
ec('div');
}let elGKp8o = eo('h1',null,null,`class`,`m-b-1 title`);
let el_5yNf = eo('span');
text(component.discussion.title);
ec('span');
let cndFFGt = component.discussion.team.type;
this.setState('st9ZCmr', cndFFGt);
let cndX3SF = component.discussion.status == 'closed';
this.setState('stjXZmn', cndX3SF);
if (cndFFGt) { 
let elj8463 = eo('small','OZyf',null,`class`,`teal-text bold ml-2`);
text(component.discussion.team.type + ' team');
ec('small');
}let cndG8M2 = component.discussion.status == 'opened';
this.setState('stVAwKn', cndG8M2);
let cndMVEg = cndX3SF;
this.setState('stA7UTI', cndMVEg);
if (cndG8M2) { 
let el9Q2GN = eo('span','idGf',null,`class`,`badge ml-2 badge-success`);
text(`Opened`);
ec('span');
}else if (cndMVEg) { 
let eloGEBO = eo('span',null,null,`class`,`badge ml-2 badge-danger`);
text(`Closed`);
ec('span');
}ec('h1');
let eltcBJN = ev('img',null,null,`src`,`${component.discussion.createdBy.image}`,`class`,`user-image`,`title`,`${component.discussion.createdBy.name}`,`alt`,`${component.discussion.createdBy.name}`);
let elu59UO = eo('div',null,null,`class`,`d-inline-block`);
let elA1MyM = eo('div');
text(component.discussion.createdBy.name);
ec('div');
let elmhN1X = eo('div');
let cmpV9Ps = this._lc('ceIgwsDZJ', {parent:component,parentTop:projectLayout,props:{timestamp:component.discussion.createdAt.timestamp},attrs:{class:'ago'}});
ec('div');
ec('div');
let elP0nuf = eo('div',null,null,`class`,`simple-card m-y-1`);
let cmpp7jM = this._lc('c_FvyYCn9', {parent:component,parentTop:projectLayout,props:{content:component.discussion.discussion}});
ec('div');
let cmptNTB = this._lc('cbtI0JzYz', {parent:component,parentTop:projectLayout,props:{disableComments:component.discussion.status == 'closed',project:component.project,comments:component.discussion.comments,typeId:component.discussion.id},attrs:{type:'discussion'}});
ec('div');
}let cndfrEu = component.isInEditMode;
this.setState('stpjCU4', cndfrEu);
if (cndfrEu) { 
let cmpyXTO = this._lc('c074J87UK', {parent:component,parentTop:projectLayout,props:{project:component.project,discussion:component.discussion},events:{onclose:function(e) {let $el = this; component.isInEditMode = null}},state:'stpjCU4'});
}}});
let cndnVON = component.confirmStatusChanging;
this.setState('stuAiom', cndnVON);
if (cndnVON) { 
let cmpy12U = this._lc('ceHSz9mhN', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmStatusChanging = null},onconfirm:function(e) {let $el = this; component.changeStatus()}},state:'stuAiom'});
}let cndw2cW = component.confirmDelete;
this.setState('stRfMtx', cndw2cW);
if (cndw2cW) { 
let cmppeBE = this._lc('c1Y97WsgK', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stRfMtx'});
}
                    this.isReadyToGo();
                }
        });