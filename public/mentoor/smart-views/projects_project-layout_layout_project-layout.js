_Component({
                selector: 'project-layout',
                c: 'ProjectLayout', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['sidebarIsVisible','project'],
                children: {c5VKkn96j:'project-sidebar',c7I6mLXcp:'flk-spinner',cF6xtAM3s:'layout'},
                render: function (component) {
                    let cmpiKzG = this._lc('cF6xtAM3s', {parent:component,content:(layout) => {let elRInTE = eo('div',null,null,`class`,`row`);
let cndEUoe = component.sidebarIsVisible;
this.setState('stb4Cdh', cndEUoe);
if (cndEUoe) { 
let cmpFpHr = this._lc('c5VKkn96j', {parent:component,parentTop:layout,props:{project:component.project},state:'stb4Cdh'});
}let el_N_zT = eo('div',null,null,`class`,`col-12`);
el_N_zT.cls = {'offset-md-2': component.sidebarIsVisible, 'col-md-10': component.sidebarIsVisible};

            for (let className in el_N_zT.cls) {
                el_N_zT.classList.toggle(className, el_N_zT.cls[className]);
            }  
            let cndoJmJ = ! component.project;
this.setState('stiZeDM', cndoJmJ);
let cndoraI = !(cndoJmJ);
this.setState('stSFMyF', cndoraI);
if (cndoJmJ) { 
let el20h3s = eo('div','ZWkf',null,`class`,`m-t-5`);
let cmp9T17 = this._lc('c7I6mLXcp', {parent:component,parentTop:layout,state:'stiZeDM'});
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