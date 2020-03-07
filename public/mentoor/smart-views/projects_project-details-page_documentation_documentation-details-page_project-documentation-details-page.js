_Component({
                selector: 'project-documentation-details-page',
                c: 'ProjectDocumentationDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','documentation'],
                children: {cBybFwRAh:'markdown',cEWoNUSrh:'project-layout'},
                render: function (component) {
                    let cmpS7Vb = this._lc('cEWoNUSrh', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elC1Zzf = eo('h1',null,null,`class`,`heading`);
text(component.documentation.title);
ec('h1');
let el4zYJv = eo('div',null,null,`class`,`simple-card`);
let cmpW_Ge = this._lc('cBybFwRAh', {parent:component,parentTop:projectLayout,props:{content:component.documentation.content}});
ec('div');
}});

                    this.isReadyToGo();
                }
        });