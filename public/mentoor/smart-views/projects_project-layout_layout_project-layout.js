_Component({
                selector: 'project-layout',
                c: 'ProjectLayout', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['sidebarIsVisible','project'],
                children: {c0FR3br1m:'project-sidebar',cCCM_S703:'flk-spinner',cEKOEuQX1:'layout'},
                render: function (component) {
                    let cmpWFch = this._lc('cEKOEuQX1', {parent:component,content:(layout) => {let el_xcX6 = eo('div',null,null,`class`,`row`);
let cndMlvE = component.sidebarIsVisible;
this.setState('stsFHz2', cndMlvE);
if (cndMlvE) { 
let cmpV0mQ = this._lc('c0FR3br1m', {parent:component,parentTop:layout,props:{project:component.project},state:'stsFHz2'});
}let elq1LSo = eo('div',null,null,`class`,`col-12`);
elq1LSo.cls = {'offset-md-2': component.sidebarIsVisible, 'col-md-10': component.sidebarIsVisible};

            for (let className in elq1LSo.cls) {
                elq1LSo.classList.toggle(className, elq1LSo.cls[className]);
            }  
            let cndLC6a = ! component.project;
this.setState('stlFJdU', cndLC6a);
let cndBDh9 = !(cndLC6a);
this.setState('stLbOPu', cndBDh9);
if (cndLC6a) { 
let elRC7sC = eo('div','3Kzf',null,`class`,`m-t-5`);
let cmpfMVE = this._lc('cCCM_S703', {parent:component,parentTop:layout,state:'stlFJdU'});
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