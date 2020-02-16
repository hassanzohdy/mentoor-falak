_Component({
                selector: 'resource-details-page',
                c: 'ResourceDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','resource'],
                children: {cIkcFv5F5:'flk-spinner',cuq1u2tWE:'layout'},
                render: function (component) {
                    let cmpurcW = this._lc('cuq1u2tWE', {parent:component,content:(layout) => {let cnddeX0 = component.isLoading;
this.setState('stIXMrr', cnddeX0);
let cndqHnO = !(cnddeX0);
this.setState('stgqcu4', cndqHnO);
if (cnddeX0) { 
let cmpocPB = this._lc('cIkcFv5F5', {parent:component,parentTop:layout,state:'stIXMrr'});
}else { 
let eltrICN = eo('h1');
text(component.resource.title);
ec('h1');
}}});

                    this.isReadyToGo();
                }
        });