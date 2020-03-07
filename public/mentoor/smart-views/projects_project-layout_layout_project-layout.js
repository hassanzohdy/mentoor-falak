_Component({
                selector: 'project-layout',
                c: 'ProjectLayout', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['sidebarIsVisible','project'],
                children: {cZrQXxaxA:'project-sidebar',cSejipjUj:'flk-spinner',cLbWyVOA1:'layout'},
                render: function (component) {
                    let cmpNQ2Q = this._lc('cLbWyVOA1', {parent:component,content:(layout) => {let el5emsY = eo('div',null,null,`class`,`row`);
let cndBxs5 = component.sidebarIsVisible;
this.setState('sto89hf', cndBxs5);
if (cndBxs5) { 
let cmpNf0V = this._lc('cZrQXxaxA', {parent:component,parentTop:layout,props:{project:component.project},state:'sto89hf'});
}let elCAYEm = eo('div',null,null,`class`,`col-12 ${cls({'offset-md-2': component.sidebarIsVisible, 'col-md-10': component.sidebarIsVisible})}`);
let cndywbB = ! component.project;
this.setState('sthRRIv', cndywbB);
let cndW76L = !(cndywbB);
this.setState('stOnGh9', cndW76L);
if (cndywbB) { 
let elq8x3Z = eo('div','wepf',null,`class`,`m-t-5`);
let cmp_UAP = this._lc('cSejipjUj', {parent:component,parentTop:layout,state:'sthRRIv'});
ec('div');
}else { 

        if (this.hasContent()) {
            this.content();
        }}ec('div');
ec('div');
}});

                    this.isReadyToGo();
                }
        });