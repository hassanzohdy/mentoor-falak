_Component({
                selector: 'project-layout',
                c: 'ProjectLayout', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['sidebarIsVisible','project'],
                children: {cPiwOOVXM:'project-sidebar',c8gP4_v45:'flk-spinner',c95ytqcEr:'layout'},
                render: function (component) {
                    let cmphZPO = this._lc('c95ytqcEr', {parent:component,content:(layout) => {let el7oThj = eo('div',null,null,`class`,`row`);
let cndXfZY = component.sidebarIsVisible;
this.setState('stlmjoB', cndXfZY);
if (cndXfZY) { 
let cmpVBYU = this._lc('cPiwOOVXM', {parent:component,parentTop:layout,props:{project:component.project},state:'stlmjoB'});
}let elbIm0w = eo('div',null,null,`class`,`col-12 ${cls({'offset-md-2': component.sidebarIsVisible, 'col-md-10': component.sidebarIsVisible})}`);
let cndc76Z = ! component.project;
this.setState('stvw4Qg', cndc76Z);
let cndhAB5 = !(cndc76Z);
this.setState('stlfQHO', cndhAB5);
if (cndc76Z) { 
let elLn9e2 = eo('div','03Wf',null,`class`,`m-t-5`);
let cmpocIr = this._lc('c8gP4_v45', {parent:component,parentTop:layout,state:'stvw4Qg'});
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