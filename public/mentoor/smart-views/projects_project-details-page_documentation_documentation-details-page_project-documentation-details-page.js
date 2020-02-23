_Component({
                selector: 'project-documentation-details-page',
                c: 'ProjectDocumentationDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','documentation'],
                children: {cB7HF0sTG:'markdown',cj0x3qqvz:'project-layout'},
                render: function (component) {
                    let cmpNwSm = this._lc('cj0x3qqvz', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let eluQSYJ = eo('h1',null,null,`class`,`heading`);
text(component.documentation.title);
ec('h1');
let elwyfSh = eo('div',null,null,`class`,`simple-card`);
let cmpTi8A = this._lc('cB7HF0sTG', {parent:component,parentTop:projectLayout,props:{content:component.documentation.content}});
ec('div');
}});

                    this.isReadyToGo();
                }
        });