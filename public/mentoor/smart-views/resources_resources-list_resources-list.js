_Component({
                selector: 'resources-list',
                c: 'ResourcesList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['canAdd','resourceType','availableResources','setNewResource','resourcesList','resourcesTypes','project','openResourceModal','resource','onClose','adjustResource'],
                children: {c7uEmjfaA:'flk-dropdown-list',cfwIb7hPa:'resource-list-item',cCHsMILPi:'resource-list-item',c7Vksamyc:'resource-modal'},
                render: function (component) {
                    let elDDJB9 = eo('section',null,null,`id`,`resources-list`);
let cndoBZW = component.canAdd;
this.setState('sttoRXt', cndoBZW);
let cnd2F0X = !(cndoBZW);
this.setState('stW0TYZ', cnd2F0X);
if (cndoBZW) { 
let elgnpsl = eo('div','n_qf',null,`class`,`float-right new-resource-wrapper`);
let cmpATKP = this._lc('c7uEmjfaA', {parent:component,props:{searchable:false,value:component.resourceType,items:component.availableResources},events:{onselect:function(e) {let $el = this; component.setNewResource(e.value)}},attrs:{heading:'+ Resource'},state:'sttoRXt'});
ec('div');
}let elq5l5S = eo('div',null,null,`class`,`clearfix`);
ec('div');
let cndphMm = Is.empty(component.resourcesList);
this.setState('stZkTce', cndphMm);
let cndncWt = !(cndphMm);
this.setState('str16be', cndncWt);
if (cndphMm) { 
let el_Hh7E = eo('div','0DRf',null,`class`,`m-t-2 text-center simple-card bold`);
text(`No Resources Yet`);
ec('div');
}else { 
let elXotnn = eo('div',null,null,`class`,`m-t-2`);
let cndCoMm = ! Is.empty(component.resourcesList.pinned);
this.setState('stERokU', cndCoMm);
if (cndCoMm) { 
let elrfer1 = eo('section','wgyf',null,`class`,`pinned-resources`);
let elEdPHA = eo('h3','9TUf',null,`class`,`heading`);
text(`Pinned`);
ec('h3');
for (let index in component.resourcesList.pinned) {
let resource = component.resourcesList.pinned[index]; 
 let iig_S9 = resource.id+ index;
let cmpw9im = this._lc('cfwIb7hPa', {parent:component,props:{resourcesTypes:component.resourcesTypes,project:component.project,resource:resource,index:index},state:'stERokU',insideLoop:true,index:"" +iig_S9});
}
ec('section');
}let cndEd_R = ! Is.empty(component.resourcesList.normal);
this.setState('stAfMWC', cndEd_R);
if (cndEd_R) { 
for (let index in component.resourcesList.normal) {
let resource = component.resourcesList.normal[index]; 
 let iiWLlX = resource.id+ index;
let cmpoqte = this._lc('cCHsMILPi', {parent:component,props:{resourcesTypes:component.resourcesTypes,project:component.project,resource:resource,index:index},state:'stAfMWC',insideLoop:true,index:"" +iiWLlX});
}
}ec('div');
}ec('section');
let cnd4Xe2 = component.openResourceModal;
this.setState('stqgUhq', cnd4Xe2);
if (cnd4Xe2) { 
let cmpXEyh = this._lc('c7Vksamyc', {parent:component,props:{type:component.resourceType,resource:component.resource,project:component.project},events:{onclose:function(e) {let $el = this; component.onClose()},onsave:function(e) {let $el = this; component.adjustResource(e)}},state:'stqgUhq'});
}
                    this.isReadyToGo();
                }
        });