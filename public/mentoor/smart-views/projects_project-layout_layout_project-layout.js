_Component({
                selector: 'project-layout',
                c: 'ProjectLayout', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['sidebarIsVisible','project'],
                children: {cWTEYzFLj:'project-sidebar',c6d4ntWGX:'flk-spinner',ci_ik8Flg:'layout'},
                render: function (component) {
                    let cmpl0mK = this._lc('ci_ik8Flg', {parent:component,content:(layout) => {let eluGmu3 = eo('div',null,null,`class`,`row`);
let cndyz2h = component.sidebarIsVisible;
this.setState('ste7y0h', cndyz2h);
if (cndyz2h) { 
let cmpxJAx = this._lc('cWTEYzFLj', {parent:component,parentTop:layout,props:{project:component.project},state:'ste7y0h'});
}let elmPI4s = eo('div',null,null,`class`,`col-12`);
elmPI4s.cls = {'offset-md-2': component.sidebarIsVisible, 'col-md-10': component.sidebarIsVisible};

            for (let className in elmPI4s.cls) {
                elmPI4s.classList.toggle(className, elmPI4s.cls[className]);
            }  
            let cndLJnd = ! component.project;
this.setState('st4jTOz', cndLJnd);
let cndKnCJ = !(cndLJnd);
this.setState('stdjd1f', cndKnCJ);
if (cndLJnd) { 
let elPzXxM = eo('div','CoTf',null,`class`,`m-t-5`);
let cmpnkX6 = this._lc('c6d4ntWGX', {parent:component,parentTop:layout,state:'st4jTOz'});
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