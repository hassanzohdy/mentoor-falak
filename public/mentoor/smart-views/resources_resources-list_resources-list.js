_Component({
                selector: 'resources-list',
                c: 'ResourcesList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['canAdd','resourceType','availableResources','setNewResource','resourcesList','resourcesTypes','project','openResourceModal','resource','onClose','adjustResource'],
                children: {cjUSQGET_:'flk-dropdown-list',c6OP7Jy7f:'resource-list-item',ceCQm2Dqs:'resource-list-item',cv_ZBPwX9:'resource-modal'},
                render: function (component) {
                    let eld0w53 = eo('section',null,null,`id`,`resources-list`);
let cndpUBq = component.canAdd;
this.setState('stLe0IE', cndpUBq);
let cndWZhT = !(cndpUBq);
this.setState('stxsEJ1', cndWZhT);
if (cndpUBq) { 
let elXAXGy = eo('div','0v9f',null,`class`,`float-right new-resource-wrapper`);
let cmpSRI9 = this._lc('cjUSQGET_', {parent:component,props:{searchable:false,value:component.resourceType,items:component.availableResources},events:{onselect:function(e) {let $el = this; component.setNewResource(e.value)}},attrs:{heading:'+ Resource'},state:'stLe0IE'});
ec('div');
}let elZuV4y = eo('div',null,null,`class`,`clearfix`);
ec('div');
let cndqN4A = Is.empty(component.resourcesList);
this.setState('stPb_lV', cndqN4A);
let cndAQJo = !(cndqN4A);
this.setState('st6oNST', cndAQJo);
if (cndqN4A) { 
let elplCIE = eo('div','XFHf',null,`class`,`m-t-2 text-center simple-card bold`);
text(`No Resources Yet`);
ec('div');
}else { 
let elx9UQF = eo('div',null,null,`class`,`m-t-2`);
let cndJ1jp = ! Is.empty(component.resourcesList.pinned);
this.setState('stZvrb2', cndJ1jp);
if (cndJ1jp) { 
let eliQALZ = eo('section','9cNf',null,`class`,`pinned-resources`);
let el651vr = eo('h3','XMdf',null,`class`,`heading`);
text(`Pinned`);
ec('h3');
for (let index in component.resourcesList.pinned) {
let resource = component.resourcesList.pinned[index]; 
 let iiSkzw = resource.id+ index;
let cmpTo7g = this._lc('c6OP7Jy7f', {parent:component,props:{resourcesTypes:component.resourcesTypes,project:component.project,resource:resource,index:index},state:'stZvrb2',insideLoop:true,index:"" +iiSkzw});
}
ec('section');
}let cndcH8b = ! Is.empty(component.resourcesList.normal);
this.setState('stVbXc8', cndcH8b);
if (cndcH8b) { 
for (let index in component.resourcesList.normal) {
let resource = component.resourcesList.normal[index]; 
 let iiVisA = resource.id+ index;
let cmpnQx9 = this._lc('ceCQm2Dqs', {parent:component,props:{resourcesTypes:component.resourcesTypes,project:component.project,resource:resource,index:index},state:'stVbXc8',insideLoop:true,index:"" +iiVisA});
}
}ec('div');
}ec('section');
let cndjbWF = component.openResourceModal;
this.setState('st2ZMJT', cndjbWF);
if (cndjbWF) { 
let cmp3Ttw = this._lc('cv_ZBPwX9', {parent:component,props:{type:component.resourceType,resource:component.resource,project:component.project},events:{onclose:function(e) {let $el = this; component.onClose()},onsave:function(e) {let $el = this; component.adjustResource(e)}},state:'st2ZMJT'});
}
                    this.isReadyToGo();
                }
        });