_Component({
                selector: 'resources-list',
                c: 'ResourcesList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['canAdd','resourceType','availableResources','setNewResource','resourcesList','resourcesTypes','project','openResourceModal','resource','onClose','adjustResource'],
                children: {cQTmzdruO:'flk-dropdown-list',cT2cLwl6S:'resource-list-item',cgaWG8NBc:'resource-list-item',cJ8j0i0bp:'resource-modal'},
                render: function (component) {
                    let elJaUvT = eo('section',null,null,`id`,`resources-list`);
let cndDRXm = component.canAdd;
this.setState('stVgoCv', cndDRXm);
let cndf4cG = !(cndDRXm);
this.setState('stMPbip', cndf4cG);
if (cndDRXm) { 
let elKPqTl = eo('div','9vif',null,`class`,`float-right new-resource-wrapper`);
let cmp5qkc = this._lc('cQTmzdruO', {parent:component,props:{searchable:false,value:component.resourceType,items:component.availableResources},events:{onselect:function(e) {let $el = this; component.setNewResource(e.value)}},attrs:{heading:'+ Resource'},state:'stVgoCv'});
ec('div');
}let el0iSKr = eo('div',null,null,`class`,`clearfix`);
ec('div');
let cndLo8p = Is.empty(component.resourcesList);
this.setState('stqrF7P', cndLo8p);
let cndo4M_ = !(cndLo8p);
this.setState('stzkFUr', cndo4M_);
if (cndLo8p) { 
let elyl6rp = eo('div','SUef',null,`class`,`m-t-2 text-center simple-card bold`);
text(`No Resources Yet`);
ec('div');
}else { 
let elNZUi6 = eo('div',null,null,`class`,`m-t-2`);
let cndCF4Y = ! Is.empty(component.resourcesList.pinned);
this.setState('stUXHuQ', cndCF4Y);
if (cndCF4Y) { 
let elZmgTM = eo('section','_q1f',null,`class`,`pinned-resources`);
let elsO4jE = eo('h3','ruOf',null,`class`,`heading`);
text(`Pinned`);
ec('h3');
for (let index in component.resourcesList.pinned) {
let resource = component.resourcesList.pinned[index]; 
 let iiBFU5 = resource.id+ index;
let cmpw2Yy = this._lc('cT2cLwl6S', {parent:component,props:{resourcesTypes:component.resourcesTypes,project:component.project,resource:resource,index:index},state:'stUXHuQ',insideLoop:true,index:"" +iiBFU5});
}
ec('section');
}let cnd9aPs = ! Is.empty(component.resourcesList.normal);
this.setState('stW2efM', cnd9aPs);
if (cnd9aPs) { 
for (let index in component.resourcesList.normal) {
let resource = component.resourcesList.normal[index]; 
 let iiU40F = resource.id+ index;
let cmpCwus = this._lc('cgaWG8NBc', {parent:component,props:{resourcesTypes:component.resourcesTypes,project:component.project,resource:resource,index:index},state:'stW2efM',insideLoop:true,index:"" +iiU40F});
}
}ec('div');
}ec('section');
let cndYPm2 = component.openResourceModal;
this.setState('stcCDrf', cndYPm2);
if (cndYPm2) { 
let cmpKjBY = this._lc('cJ8j0i0bp', {parent:component,props:{type:component.resourceType,resource:component.resource,project:component.project},events:{onclose:function(e) {let $el = this; component.onClose()},onsave:function(e) {let $el = this; component.adjustResource(e)}},state:'stcCDrf'});
}
                    this.isReadyToGo();
                }
        });