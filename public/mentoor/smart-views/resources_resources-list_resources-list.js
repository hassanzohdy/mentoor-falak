_Component({
                selector: 'resources-list',
                c: 'ResourcesList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['canAdd','resourceType','availableResources','setNewResource','resourcesList','resourcesTypes','project','openResourceModal','resource','onClose','adjustResource'],
                children: {chYwrWYFC:'flk-dropdown-list',cFoe5aaUP:'resource-list-item',cGdfgbSce:'resource-list-item',czj1SzQ6C:'resource-modal'},
                render: function (component) {
                    let elIN_MU = eo('section',null,null,`id`,`resources-list`);
let cndURXY = component.canAdd;
this.setState('stmg2ly', cndURXY);
let cndjTgS = !(cndURXY);
this.setState('stl31kK', cndjTgS);
if (cndURXY) { 
let elipE_4 = eo('div','8YWf',null,`class`,`float-right new-resource-wrapper`);
let cmpZves = this._lc('chYwrWYFC', {parent:component,props:{searchable:false,value:component.resourceType,items:component.availableResources},events:{onselect:function(e) {let $el = this; component.setNewResource(e.value)}},attrs:{heading:'+ Resource'},state:'stmg2ly'});
ec('div');
}let elp68QQ = eo('div',null,null,`class`,`clearfix`);
ec('div');
let cndklbE = Is.empty(component.resourcesList);
this.setState('sta0GfP', cndklbE);
let cndMalf = !(cndklbE);
this.setState('stg5gZX', cndMalf);
if (cndklbE) { 
let elhrrhE = eo('div','kHWf',null,`class`,`m-t-2 text-center simple-card bold`);
text(`No Resources Yet`);
ec('div');
}else { 
let elNhSOy = eo('div',null,null,`class`,`m-t-2`);
let cndiSPK = ! Is.empty(component.resourcesList.pinned);
this.setState('st09r4H', cndiSPK);
if (cndiSPK) { 
let elo1haM = eo('section','Unkf',null,`class`,`pinned-resources`);
let elhHf3m = eo('h3','5mHf',null,`class`,`heading`);
text(`Pinned`);
ec('h3');
for (let index in component.resourcesList.pinned) {
let resource = component.resourcesList.pinned[index]; 
 let iikOHs = resource.id+ index;
let cmptcfH = this._lc('cFoe5aaUP', {parent:component,props:{resourcesTypes:component.resourcesTypes,project:component.project,resource:resource,index:index},state:'st09r4H',insideLoop:true,index:"" +iikOHs});
}
ec('section');
}let cndKCTQ = ! Is.empty(component.resourcesList.normal);
this.setState('sth96Ol', cndKCTQ);
if (cndKCTQ) { 
for (let index in component.resourcesList.normal) {
let resource = component.resourcesList.normal[index]; 
 let iiGAjF = resource.id+ index;
let cmpMXrB = this._lc('cGdfgbSce', {parent:component,props:{resourcesTypes:component.resourcesTypes,project:component.project,resource:resource,index:index},state:'sth96Ol',insideLoop:true,index:"" +iiGAjF});
}
}ec('div');
}ec('section');
let cndtnjK = component.openResourceModal;
this.setState('stlXpyk', cndtnjK);
if (cndtnjK) { 
let cmpe05f = this._lc('czj1SzQ6C', {parent:component,props:{type:component.resourceType,resource:component.resource,project:component.project},events:{onclose:function(e) {let $el = this; component.onClose()},onsave:function(e) {let $el = this; component.adjustResource(e)}},state:'stlXpyk'});
}
                    this.isReadyToGo();
                }
        });