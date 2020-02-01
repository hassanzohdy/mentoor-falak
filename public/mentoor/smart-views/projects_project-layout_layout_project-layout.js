_Component({
                selector: 'project-layout',
                c: 'ProjectLayout', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['sidebarIsVisible','project'],
                children: {cuvE1b6mp:'project-sidebar',cXd2hJJiw:'flk-spinner',c7bNY07WP:'layout'},
                render: function (component) {
                    let cmpn1Og = this._lc('c7bNY07WP', {parent:component,content:(layout) => {let el9vaYE = eo('div',null,null,`class`,`row`);
let cndzC_1 = component.sidebarIsVisible;
this.setState('stSCkAx', cndzC_1);
if (cndzC_1) { 
let cmpsAVl = this._lc('cuvE1b6mp', {parent:component,parentTop:layout,props:{project:component.project},state:'stSCkAx'});
}let el7ZsGz = eo('div',null,null,`class`,`col-12`);
el7ZsGz.cls = {'offset-md-2': component.sidebarIsVisible, 'col-md-10': component.sidebarIsVisible};

            for (let className in el7ZsGz.cls) {
                el7ZsGz.classList.toggle(className, el7ZsGz.cls[className]);
            }  
            let cndpSkv = ! component.project;
this.setState('steRhJs', cndpSkv);
let cnd4RmR = !(cndpSkv);
this.setState('ste1RO1', cnd4RmR);
if (cndpSkv) { 
let elxHGXW = eo('div','1z9f',null,`class`,`m-t-5`);
let cmpJnMV = this._lc('cXd2hJJiw', {parent:component,parentTop:layout,state:'steRhJs'});
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