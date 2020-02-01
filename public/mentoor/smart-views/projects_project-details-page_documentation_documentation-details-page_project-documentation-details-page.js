_Component({
                selector: 'project-documentation-details-page',
                c: 'ProjectDocumentationDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','documentation'],
                children: {cQjH6twLP:'markdown',cUGnIDedr:'project-layout'},
                render: function (component) {
                    let cmpSE0D = this._lc('cUGnIDedr', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elrmwd_ = eo('h1',null,null,`class`,`heading`);
text(component.documentation.title);
ec('h1');
let elkIXZE = eo('div',null,null,`class`,`simple-card`);
let cmpgWZ6 = this._lc('cQjH6twLP', {parent:component,parentTop:projectLayout,props:{content:component.documentation.content}});
ec('div');
}});

                    this.isReadyToGo();
                }
        });