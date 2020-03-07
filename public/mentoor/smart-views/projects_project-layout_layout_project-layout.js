_Component({
                selector: 'project-layout',
                c: 'ProjectLayout', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['sidebarIsVisible','project'],
                children: {c1FNjLwY2:'project-sidebar',cgH1kr5TJ:'flk-spinner',cdlbvUCzz:'layout'},
                render: function (component) {
                    let cmpBFyR = this._lc('cdlbvUCzz', {parent:component,content:(layout) => {let elr5VCu = eo('div',null,null,`class`,`row`);
let cndXhsd = component.sidebarIsVisible;
this.setState('stFmQVR', cndXhsd);
if (cndXhsd) { 
let cmpvMQv = this._lc('c1FNjLwY2', {parent:component,parentTop:layout,props:{project:component.project},state:'stFmQVR'});
}let el9sXvl = eo('div',null,null,`class`,`col-12 ${cls({'offset-md-2': component.sidebarIsVisible, 'col-md-10': component.sidebarIsVisible})}`);
let cndPRpv = ! component.project;
this.setState('stM3XRB', cndPRpv);
let cnd4fmH = !(cndPRpv);
this.setState('stYYBow', cnd4fmH);
if (cndPRpv) { 
let elVFuwV = eo('div','c2df',null,`class`,`m-t-5`);
let cmpGDNE = this._lc('cgH1kr5TJ', {parent:component,parentTop:layout,state:'stM3XRB'});
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