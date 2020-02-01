_Component({
                selector: 'project-resources-page',
                c: 'ProjectResourcesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading'],
                children: {cvFrSLAyV:'resources-list',cTjJtycSF:'project-layout'},
                render: function (component) {
                    let cmpZEbE = this._lc('cTjJtycSF', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el_LgNT = eo('h1',null,null,`class`,`m-y-1 purple-text`);
text(`${ component.project.name } Resources
        (${ component.project.resources.length })`);
ec('h1');
let cmpZE_J = this._lc('cvFrSLAyV', {parent:component,parentTop:projectLayout,props:{resources:component.project.resources,canAdd:true,project:component.project},events:{onremove:function(e) {let $el = this; component.project.resources = e}}});
}});

                    this.isReadyToGo();
                }
        });