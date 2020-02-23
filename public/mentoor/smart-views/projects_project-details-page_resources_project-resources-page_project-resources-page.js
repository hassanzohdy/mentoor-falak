_Component({
                selector: 'project-resources-page',
                c: 'ProjectResourcesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading'],
                children: {cUa1yKiQc:'resources-list',cQAj7Kxfs:'project-layout'},
                render: function (component) {
                    let cmplnuR = this._lc('cQAj7Kxfs', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elqZvwo = eo('h1',null,null,`class`,`m-y-1 purple-text`);
text(`${ component.project.name } Resources
        (${ component.project.resources.length })`);
ec('h1');
let cmphH57 = this._lc('cUa1yKiQc', {parent:component,parentTop:projectLayout,props:{resources:component.project.resources,canAdd:true,project:component.project},events:{onremove:function(e) {let $el = this; component.project.resources = e}}});
}});

                    this.isReadyToGo();
                }
        });