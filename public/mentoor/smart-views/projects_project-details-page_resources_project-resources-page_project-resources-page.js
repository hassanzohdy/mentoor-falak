_Component({
                selector: 'project-resources-page',
                c: 'ProjectResourcesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading'],
                children: {cR8BDpbvb:'resources-list',c_oyDn6Z9:'project-layout'},
                render: function (component) {
                    let cmpF626 = this._lc('c_oyDn6Z9', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let eluRV2u = eo('h1',null,null,`class`,`m-y-1 purple-text`);
text(`${ component.project.name } Resources
        (${ component.project.resources.length })`);
ec('h1');
let cmp2ZDT = this._lc('cR8BDpbvb', {parent:component,parentTop:projectLayout,props:{resources:component.project.resources,canAdd:true,project:component.project},events:{onremove:function(e) {let $el = this; component.project.resources = e}}});
}});

                    this.isReadyToGo();
                }
        });