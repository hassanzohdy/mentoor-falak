_Component({
                selector: 'project-documentation-details-page',
                c: 'ProjectDocumentationDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','documentation'],
                children: {crkXgBdGJ:'markdown',ceIxApL5x:'project-layout'},
                render: function (component) {
                    let cmpgoFD = this._lc('ceIxApL5x', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elohpsC = eo('h1',null,null,`class`,`heading`);
text(component.documentation.title);
ec('h1');
let elzHqmZ = eo('div',null,null,`class`,`simple-card`);
let cmpUW3b = this._lc('crkXgBdGJ', {parent:component,parentTop:projectLayout,props:{content:component.documentation.content}});
ec('div');
}});

                    this.isReadyToGo();
                }
        });