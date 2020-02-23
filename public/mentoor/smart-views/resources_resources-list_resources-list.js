_Component({
                selector: 'resources-list',
                c: 'ResourcesList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['canAdd','resourceType','availableResources','setNewResource','resourcesList','resourcesTypes','project','openResourceModal','resource','onClose','adjustResource'],
                children: {cftDaPDjZ:'flk-dropdown-list',c52jXYV4U:'resource-list-item',ch1rFHEnc:'resource-list-item',cADesKjS5:'resource-modal'},
                render: function (component) {
                    let el734Z_ = eo('section',null,null,`id`,`resources-list`);
let cndZgmC = component.canAdd;
this.setState('stZhY50', cndZgmC);
let cndXmKB = !(cndZgmC);
this.setState('stEXvou', cndXmKB);
if (cndZgmC) { 
let elNYYu6 = eo('div','gF_f',null,`class`,`float-right new-resource-wrapper`);
let cmpnQ3b = this._lc('cftDaPDjZ', {parent:component,props:{searchable:false,value:component.resourceType,items:component.availableResources},events:{onselect:function(e) {let $el = this; component.setNewResource(e.value)}},attrs:{heading:'+ Resource'},state:'stZhY50'});
ec('div');
}let el_ObbY = eo('div',null,null,`class`,`clearfix`);
ec('div');
let cnd9ekQ = Is.empty(component.resourcesList);
this.setState('stHAG4k', cnd9ekQ);
let cndHIwb = !(cnd9ekQ);
this.setState('stIhbaA', cndHIwb);
if (cnd9ekQ) { 
let elmhayp = eo('div','TV8f',null,`class`,`m-t-2 text-center simple-card bold`);
text(`No Resources Yet`);
ec('div');
}else { 
let el4N2qY = eo('div',null,null,`class`,`m-t-2`);
let cndyMAc = ! Is.empty(component.resourcesList.pinned);
this.setState('stHFeAU', cndyMAc);
if (cndyMAc) { 
let eluYrOg = eo('section','zlEf',null,`class`,`pinned-resources`);
let elFUY8B = eo('h3','FCrf',null,`class`,`heading`);
text(`Pinned`);
ec('h3');
for (let index in component.resourcesList.pinned) {
let resource = component.resourcesList.pinned[index]; 
 let ii0f6Y = resource.id+ index;
let cmpheBf = this._lc('c52jXYV4U', {parent:component,props:{resourcesTypes:component.resourcesTypes,project:component.project,resource:resource,index:index},state:'stHFeAU',insideLoop:true,index:"" +ii0f6Y});
}
ec('section');
}let cndtdeU = ! Is.empty(component.resourcesList.normal);
this.setState('stA5vQQ', cndtdeU);
if (cndtdeU) { 
for (let index in component.resourcesList.normal) {
let resource = component.resourcesList.normal[index]; 
 let iiMq7J = resource.id+ index;
let cmpDZGo = this._lc('ch1rFHEnc', {parent:component,props:{resourcesTypes:component.resourcesTypes,project:component.project,resource:resource,index:index},state:'stA5vQQ',insideLoop:true,index:"" +iiMq7J});
}
}ec('div');
}ec('section');
let cndTNcp = component.openResourceModal;
this.setState('stgwffR', cndTNcp);
if (cndTNcp) { 
let cmpmJHW = this._lc('cADesKjS5', {parent:component,props:{type:component.resourceType,resource:component.resource,project:component.project},events:{onclose:function(e) {let $el = this; component.onClose()},onsave:function(e) {let $el = this; component.adjustResource(e)}},state:'stgwffR'});
}
                    this.isReadyToGo();
                }
        });