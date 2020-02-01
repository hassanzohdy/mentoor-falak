_Component({
                selector: 'project-documentation-details-page',
                c: 'ProjectDocumentationDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','documentation'],
                children: {cNClbCPON:'markdown',cmVrdxcv7:'project-layout'},
                render: function (component) {
                    let cmpfwGU = this._lc('cmVrdxcv7', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elAxreq = eo('h1',null,null,`class`,`heading`);
text(component.documentation.title);
ec('h1');
let elfxfaF = eo('div',null,null,`class`,`simple-card`);
let cmp0ETJ = this._lc('cNClbCPON', {parent:component,parentTop:projectLayout,props:{content:component.documentation.content}});
ec('div');
}});

                    this.isReadyToGo();
                }
        });