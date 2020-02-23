_Component({
                selector: 'project-layout',
                c: 'ProjectLayout', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['sidebarIsVisible','project'],
                children: {cWDXQRRXY:'project-sidebar',c8sN7v8ES:'flk-spinner',cNXrQKunW:'layout'},
                render: function (component) {
                    let cmp71SO = this._lc('cNXrQKunW', {parent:component,content:(layout) => {let elO6BAv = eo('div',null,null,`class`,`row`);
let cndxJDT = component.sidebarIsVisible;
this.setState('sthn72X', cndxJDT);
if (cndxJDT) { 
let cmp7VlQ = this._lc('cWDXQRRXY', {parent:component,parentTop:layout,props:{project:component.project},state:'sthn72X'});
}let elkmDP7 = eo('div',null,null,`class`,`col-12`);
elkmDP7.cls = {'offset-md-2': component.sidebarIsVisible, 'col-md-10': component.sidebarIsVisible};

            for (let className in elkmDP7.cls) {
                elkmDP7.classList.toggle(className, elkmDP7.cls[className]);
            }  
            let cndtWbe = ! component.project;
this.setState('stWC3Cb', cndtWbe);
let cndAXz8 = !(cndtWbe);
this.setState('sttUuOH', cndAXz8);
if (cndtWbe) { 
let elP_6F1 = eo('div','s8wf',null,`class`,`m-t-5`);
let cmpwotd = this._lc('c8sN7v8ES', {parent:component,parentTop:layout,state:'stWC3Cb'});
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