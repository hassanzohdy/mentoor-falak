_Component({
                selector: 'resources-list',
                c: 'ResourcesList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['canAdd','resourceType','availableResources','setNewResource','resourcesList','resourcesTypes','project','openResourceModal','resource','onClose','adjustResource'],
                children: {cb9Jx3dxs:'flk-dropdown-list',cVAuDXeIn:'resource-list-item',cNv97mDNH:'resource-list-item',clzPcT2TF:'resource-modal'},
                render: function (component) {
                    let elcuBSV = eo('section',null,null,`id`,`resources-list`);
let cndRBAv = component.canAdd;
this.setState('stMrBjW', cndRBAv);
let cndZ8Yi = !(cndRBAv);
this.setState('stqYPYE', cndZ8Yi);
if (cndRBAv) { 
let elTWUq2 = eo('div','8mkf',null,`class`,`float-right new-resource-wrapper`);
let cmpzjUt = this._lc('cb9Jx3dxs', {parent:component,props:{searchable:false,value:component.resourceType,items:component.availableResources},events:{onselect:function(e) {let $el = this; component.setNewResource(e.value)}},attrs:{heading:'+ Resource'},state:'stMrBjW'});
ec('div');
}let elHNvMp = eo('div',null,null,`class`,`clearfix`);
ec('div');
let cnd4MSs = Is.empty(component.resourcesList);
this.setState('st42C67', cnd4MSs);
let cndPzuU = !(cnd4MSs);
this.setState('st_iPvt', cndPzuU);
if (cnd4MSs) { 
let elonh0M = eo('div','kyJf',null,`class`,`m-t-2 text-center simple-card bold`);
text(`No Resources Yet`);
ec('div');
}else { 
let elTvnNr = eo('div',null,null,`class`,`m-t-2`);
let cndPODi = ! Is.empty(component.resourcesList.pinned);
this.setState('stPkdfk', cndPODi);
if (cndPODi) { 
let elqNPFo = eo('section','e1Ef',null,`class`,`pinned-resources`);
let el4we2h = eo('h3','YRpf',null,`class`,`heading`);
text(`Pinned`);
ec('h3');
for (let index in component.resourcesList.pinned) {
let resource = component.resourcesList.pinned[index]; 
 let iiQIUO = resource.id+ index;
let cmpu5OM = this._lc('cVAuDXeIn', {parent:component,props:{resourcesTypes:component.resourcesTypes,project:component.project,resource:resource,index:index},state:'stPkdfk',insideLoop:true,index:"" +iiQIUO});
}
ec('section');
}let cndvrU6 = ! Is.empty(component.resourcesList.normal);
this.setState('sto_a48', cndvrU6);
if (cndvrU6) { 
for (let index in component.resourcesList.normal) {
let resource = component.resourcesList.normal[index]; 
 let iiNQzk = resource.id+ index;
let cmpgasf = this._lc('cNv97mDNH', {parent:component,props:{resourcesTypes:component.resourcesTypes,project:component.project,resource:resource,index:index},state:'sto_a48',insideLoop:true,index:"" +iiNQzk});
}
}ec('div');
}ec('section');
let cnd4i6n = component.openResourceModal;
this.setState('stXUw_J', cnd4i6n);
if (cnd4i6n) { 
let cmpSc0M = this._lc('clzPcT2TF', {parent:component,props:{type:component.resourceType,resource:component.resource,project:component.project},events:{onclose:function(e) {let $el = this; component.onClose()},onsave:function(e) {let $el = this; component.adjustResource(e)}},state:'stXUw_J'});
}
                    this.isReadyToGo();
                }
        });