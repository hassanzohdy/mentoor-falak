_Component({
                selector: 'resources-list',
                c: 'ResourcesList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['canAdd','resourceType','availableResources','setNewResource','resourcesList','resourcesTypes','project','openResourceModal','resource','onClose','adjustResource'],
                children: {caiw22ADd:'flk-dropdown-list',cUfefZcrW:'resource-list-item',co9pa6G7Q:'resource-list-item',cK_DClo8y:'resource-modal'},
                render: function (component) {
                    let el5vSMk = eo('section',null,null,`id`,`resources-list`);
let cndCY7w = component.canAdd;
this.setState('stxPsqx', cndCY7w);
let cndH1jW = !(cndCY7w);
this.setState('stbML3I', cndH1jW);
if (cndCY7w) { 
let eloJi3q = eo('div','TQxf',null,`class`,`float-right new-resource-wrapper`);
let cmp4Cy5 = this._lc('caiw22ADd', {parent:component,props:{searchable:false,value:component.resourceType,items:component.availableResources},events:{onselect:function(e) {let $el = this; component.setNewResource(e.value)}},attrs:{heading:'+ Resource'},state:'stxPsqx'});
ec('div');
}let elqUTvZ = eo('div',null,null,`class`,`clearfix`);
ec('div');
let cndMwxZ = Is.empty(component.resourcesList);
this.setState('stn_Qm_', cndMwxZ);
let cndac_c = !(cndMwxZ);
this.setState('stZHKy3', cndac_c);
if (cndMwxZ) { 
let el3qFl8 = eo('div','ZPlf',null,`class`,`m-t-2 text-center simple-card bold`);
text(`No Resources Yet`);
ec('div');
}else { 
let elDRXwY = eo('div',null,null,`class`,`m-t-2`);
let cnd2bQm = ! Is.empty(component.resourcesList.pinned);
this.setState('st1HkRW', cnd2bQm);
if (cnd2bQm) { 
let el9HFpy = eo('section','ey0f',null,`class`,`pinned-resources`);
let elilgDg = eo('h3','OT0f',null,`class`,`heading`);
text(`Pinned`);
ec('h3');
for (let index in component.resourcesList.pinned) {
let resource = component.resourcesList.pinned[index]; 
 let iil_Ni = resource.id+ index;
let cmpQioU = this._lc('cUfefZcrW', {parent:component,props:{resourcesTypes:component.resourcesTypes,project:component.project,resource:resource,index:index},state:'st1HkRW',insideLoop:true,index:"" +iil_Ni});
}
ec('section');
}let cndNWjS = ! Is.empty(component.resourcesList.normal);
this.setState('stiDHNv', cndNWjS);
if (cndNWjS) { 
for (let index in component.resourcesList.normal) {
let resource = component.resourcesList.normal[index]; 
 let iiLnlf = resource.id+ index;
let cmpxbWr = this._lc('co9pa6G7Q', {parent:component,props:{resourcesTypes:component.resourcesTypes,project:component.project,resource:resource,index:index},state:'stiDHNv',insideLoop:true,index:"" +iiLnlf});
}
}ec('div');
}ec('section');
let cnd1dcw = component.openResourceModal;
this.setState('stdbXTT', cnd1dcw);
if (cnd1dcw) { 
let cmpZSLk = this._lc('cK_DClo8y', {parent:component,props:{type:component.resourceType,resource:component.resource,project:component.project},events:{onclose:function(e) {let $el = this; component.onClose()},onsave:function(e) {let $el = this; component.adjustResource(e)}},state:'stdbXTT'});
}
                    this.isReadyToGo();
                }
        });