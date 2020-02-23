_Component({
                selector: 'project-documentation-details-page',
                c: 'ProjectDocumentationDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','documentation'],
                children: {cj5AKk2en:'markdown',cwQzLG_fh:'project-layout'},
                render: function (component) {
                    let cmpZwpK = this._lc('cwQzLG_fh', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el2paUf = eo('h1',null,null,`class`,`heading`);
text(component.documentation.title);
ec('h1');
let elEgNFB = eo('div',null,null,`class`,`simple-card`);
let cmpC5dr = this._lc('cj5AKk2en', {parent:component,parentTop:projectLayout,props:{content:component.documentation.content}});
ec('div');
}});

                    this.isReadyToGo();
                }
        });