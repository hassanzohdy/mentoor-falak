_Component({
                selector: 'project-documentation-details-page',
                c: 'ProjectDocumentationDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','documentation'],
                children: {cNvfeDnxn:'markdown',c3bdMFBoY:'project-layout'},
                render: function (component) {
                    let cmph9SU = this._lc('c3bdMFBoY', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elET0Dv = eo('h1',null,null,`class`,`heading`);
text(component.documentation.title);
ec('h1');
let elHu4bs = eo('div',null,null,`class`,`simple-card`);
let cmpgwYB = this._lc('cNvfeDnxn', {parent:component,parentTop:projectLayout,props:{content:component.documentation.content}});
ec('div');
}});

                    this.isReadyToGo();
                }
        });