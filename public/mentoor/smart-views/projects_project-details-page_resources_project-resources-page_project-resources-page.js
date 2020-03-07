_Component({
                selector: 'project-resources-page',
                c: 'ProjectResourcesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading'],
                children: {cXF2VZQHp:'resources-list',cwtxLJi3L:'project-layout'},
                render: function (component) {
                    let cmpIDS6 = this._lc('cwtxLJi3L', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elj7sYB = eo('h1',null,null,`class`,`m-y-1 purple-text`);
text(`${ component.project.name } Resources
        (${ component.project.resources.length })`);
ec('h1');
let cmpQ_TH = this._lc('cXF2VZQHp', {parent:component,parentTop:projectLayout,props:{resources:component.project.resources,canAdd:true,project:component.project},events:{onremove:function(e) {let $el = this; component.project.resources = e}}});
}});

                    this.isReadyToGo();
                }
        });