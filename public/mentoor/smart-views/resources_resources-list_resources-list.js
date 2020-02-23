_Component({
                selector: 'resources-list',
                c: 'ResourcesList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['canAdd','resourceType','availableResources','setNewResource','resourcesList','resourcesTypes','project','openResourceModal','resource','onClose','adjustResource'],
                children: {civQbukmY:'flk-dropdown-list',cVBrUrYyR:'resource-list-item',cY8z2KqpO:'resource-list-item',cIL81QfHZ:'resource-modal'},
                render: function (component) {
                    let elGMqL5 = eo('section',null,null,`id`,`resources-list`);
let cndkaAV = component.canAdd;
this.setState('stkUwnj', cndkaAV);
let cndjvpx = !(cndkaAV);
this.setState('stmHRgT', cndjvpx);
if (cndkaAV) { 
let elN7vWY = eo('div','MUKf',null,`class`,`float-right new-resource-wrapper`);
let cmp3E3m = this._lc('civQbukmY', {parent:component,props:{searchable:false,value:component.resourceType,items:component.availableResources},events:{onselect:function(e) {let $el = this; component.setNewResource(e.value)}},attrs:{heading:'+ Resource'},state:'stkUwnj'});
ec('div');
}let el8IdE1 = eo('div',null,null,`class`,`clearfix`);
ec('div');
let cndGCZF = Is.empty(component.resourcesList);
this.setState('stSSO6a', cndGCZF);
let cndRPIc = !(cndGCZF);
this.setState('stO8XH8', cndRPIc);
if (cndGCZF) { 
let elS0qe1 = eo('div','cXlf',null,`class`,`m-t-2 text-center simple-card bold`);
text(`No Resources Yet`);
ec('div');
}else { 
let eliIKia = eo('div',null,null,`class`,`m-t-2`);
let cndyJOd = ! Is.empty(component.resourcesList.pinned);
this.setState('stPQdce', cndyJOd);
if (cndyJOd) { 
let elk4gEm = eo('section','gP_f',null,`class`,`pinned-resources`);
let elCSUnM = eo('h3','0ldf',null,`class`,`heading`);
text(`Pinned`);
ec('h3');
for (let index in component.resourcesList.pinned) {
let resource = component.resourcesList.pinned[index]; 
 let iiq4vq = resource.id+ index;
let cmpTPjC = this._lc('cVBrUrYyR', {parent:component,props:{resourcesTypes:component.resourcesTypes,project:component.project,resource:resource,index:index},state:'stPQdce',insideLoop:true,index:"" +iiq4vq});
}
ec('section');
}let cndrj6O = ! Is.empty(component.resourcesList.normal);
this.setState('stezPqm', cndrj6O);
if (cndrj6O) { 
for (let index in component.resourcesList.normal) {
let resource = component.resourcesList.normal[index]; 
 let iiuZBK = resource.id+ index;
let cmpbpbG = this._lc('cY8z2KqpO', {parent:component,props:{resourcesTypes:component.resourcesTypes,project:component.project,resource:resource,index:index},state:'stezPqm',insideLoop:true,index:"" +iiuZBK});
}
}ec('div');
}ec('section');
let cndz1Oz = component.openResourceModal;
this.setState('stbyK4N', cndz1Oz);
if (cndz1Oz) { 
let cmp0hVk = this._lc('cIL81QfHZ', {parent:component,props:{type:component.resourceType,resource:component.resource,project:component.project},events:{onclose:function(e) {let $el = this; component.onClose()},onsave:function(e) {let $el = this; component.adjustResource(e)}},state:'stbyK4N'});
}
                    this.isReadyToGo();
                }
        });