_Component({
                selector: 'project-resources-page',
                c: 'ProjectResourcesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading'],
                children: {cPIF_Q3aC:'resources-list',cpF7NFFdD:'project-layout'},
                render: function (component) {
                    let cmpxRa2 = this._lc('cpF7NFFdD', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elwwztZ = eo('h1',null,null,`class`,`m-y-1 purple-text`);
text(`${ component.project.name } Resources
        (${ component.project.resources.length })`);
ec('h1');
let cmpbzUW = this._lc('cPIF_Q3aC', {parent:component,parentTop:projectLayout,props:{resources:component.project.resources,canAdd:true,project:component.project},events:{onremove:function(e) {let $el = this; component.project.resources = e}}});
}});

                    this.isReadyToGo();
                }
        });