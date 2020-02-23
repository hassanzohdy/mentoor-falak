_Component({
                selector: 'project-resources-page',
                c: 'ProjectResourcesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading'],
                children: {cOcz3puCq:'resources-list',cp_Cs7hOi:'project-layout'},
                render: function (component) {
                    let cmpRJlm = this._lc('cp_Cs7hOi', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elv2z6z = eo('h1',null,null,`class`,`m-y-1 purple-text`);
text(`${ component.project.name } Resources
        (${ component.project.resources.length })`);
ec('h1');
let cmpNIk_ = this._lc('cOcz3puCq', {parent:component,parentTop:projectLayout,props:{resources:component.project.resources,canAdd:true,project:component.project},events:{onremove:function(e) {let $el = this; component.project.resources = e}}});
}});

                    this.isReadyToGo();
                }
        });