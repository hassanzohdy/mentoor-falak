_Component({
                selector: 'resources-list',
                c: 'ResourcesList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['canAdd','resourceType','availableResources','setNewResource','resourcesList','resourcesTypes','project','openResourceModal','resource','onClose','adjustResource'],
                children: {cpzy6v3n5:'flk-dropdown-list',cm4aJroFm:'resource-list-item',cWX4o8au1:'resource-list-item',c0G3tAfX6:'resource-modal'},
                render: function (component) {
                    let elEAd6H = eo('section',null,null,`id`,`resources-list`);
let cndzNAA = component.canAdd;
this.setState('staZcqj', cndzNAA);
let cndSNVZ = !(cndzNAA);
this.setState('stWL2xj', cndSNVZ);
if (cndzNAA) { 
let elbAAHp = eo('div','1xwf',null,`class`,`float-right new-resource-wrapper`);
let cmph1hj = this._lc('cpzy6v3n5', {parent:component,props:{searchable:false,value:component.resourceType,items:component.availableResources},events:{onselect:function(e) {let $el = this; component.setNewResource(e.value)}},attrs:{heading:'+ Resource'},state:'staZcqj'});
ec('div');
}let elODv1Q = eo('div',null,null,`class`,`clearfix`);
ec('div');
let cnd2USl = Is.empty(component.resourcesList);
this.setState('stjOyJU', cnd2USl);
let cnds7_B = !(cnd2USl);
this.setState('stI97oQ', cnds7_B);
if (cnd2USl) { 
let elAefGW = eo('div','1Agf',null,`class`,`m-t-2 text-center simple-card bold`);
text(`No Resources Yet`);
ec('div');
}else { 
let el5Mocu = eo('div',null,null,`class`,`m-t-2`);
let cndgDih = ! Is.empty(component.resourcesList.pinned);
this.setState('stvUUm2', cndgDih);
if (cndgDih) { 
let elRh2mO = eo('section','YYTf',null,`class`,`pinned-resources`);
let el7YCKS = eo('h3','zwzf',null,`class`,`heading`);
text(`Pinned`);
ec('h3');
for (let index in component.resourcesList.pinned) {
let resource = component.resourcesList.pinned[index]; 
 let iiEnHD = resource.id+ index;
let cmpJYxC = this._lc('cm4aJroFm', {parent:component,props:{resourcesTypes:component.resourcesTypes,project:component.project,resource:resource,index:index},state:'stvUUm2',insideLoop:true,index:"" +iiEnHD});
}
ec('section');
}let cndIWZY = ! Is.empty(component.resourcesList.normal);
this.setState('ste_sl5', cndIWZY);
if (cndIWZY) { 
for (let index in component.resourcesList.normal) {
let resource = component.resourcesList.normal[index]; 
 let iiJ0Xz = resource.id+ index;
let cmpt8za = this._lc('cWX4o8au1', {parent:component,props:{resourcesTypes:component.resourcesTypes,project:component.project,resource:resource,index:index},state:'ste_sl5',insideLoop:true,index:"" +iiJ0Xz});
}
}ec('div');
}ec('section');
let cndQBEl = component.openResourceModal;
this.setState('stdcdAB', cndQBEl);
if (cndQBEl) { 
let cmpxAt1 = this._lc('c0G3tAfX6', {parent:component,props:{type:component.resourceType,resource:component.resource,project:component.project},events:{onclose:function(e) {let $el = this; component.onClose()},onsave:function(e) {let $el = this; component.adjustResource(e)}},state:'stdcdAB'});
}
                    this.isReadyToGo();
                }
        });