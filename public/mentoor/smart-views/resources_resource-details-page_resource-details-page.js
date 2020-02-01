_Component({
                selector: 'resource-details-page',
                c: 'ResourceDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','resource'],
                children: {ci9irSDFI:'flk-spinner',cdCLZPgXS:'layout'},
                render: function (component) {
                    let cmp1Z6X = this._lc('cdCLZPgXS', {parent:component,content:(layout) => {let cndGMXX = component.isLoading;
this.setState('stzeFjd', cndGMXX);
let cndpecR = !(cndGMXX);
this.setState('stP99it', cndpecR);
if (cndGMXX) { 
let cmppnxB = this._lc('ci9irSDFI', {parent:component,parentTop:layout,state:'stzeFjd'});
}else { 
let el28t5C = eo('h1');
text(component.resource.title);
ec('h1');
}}});

                    this.isReadyToGo();
                }
        });