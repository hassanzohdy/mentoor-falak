_Component({
                selector: 'project-documentation-details-page',
                c: 'ProjectDocumentationDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','documentation'],
                children: {cRn1A4wif:'markdown',cTFdA1m5Y:'project-layout'},
                render: function (component) {
                    let cmpJ8wX = this._lc('cTFdA1m5Y', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elC0743 = eo('h1',null,null,`class`,`heading`);
text(component.documentation.title);
ec('h1');
let elzB6Hd = eo('div',null,null,`class`,`simple-card`);
let cmpVlmc = this._lc('cRn1A4wif', {parent:component,parentTop:projectLayout,props:{content:component.documentation.content}});
ec('div');
}});

                    this.isReadyToGo();
                }
        });