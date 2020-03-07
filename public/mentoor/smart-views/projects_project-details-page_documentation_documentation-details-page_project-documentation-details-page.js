_Component({
                selector: 'project-documentation-details-page',
                c: 'ProjectDocumentationDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','documentation'],
                children: {cDI5LJzCj:'markdown',c4IQsgwvW:'project-layout'},
                render: function (component) {
                    let cmpRMov = this._lc('c4IQsgwvW', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elmCSg3 = eo('h1',null,null,`class`,`heading`);
text(component.documentation.title);
ec('h1');
let el0dYYe = eo('div',null,null,`class`,`simple-card`);
let cmp3dzB = this._lc('cDI5LJzCj', {parent:component,parentTop:projectLayout,props:{content:component.documentation.content}});
ec('div');
}});

                    this.isReadyToGo();
                }
        });