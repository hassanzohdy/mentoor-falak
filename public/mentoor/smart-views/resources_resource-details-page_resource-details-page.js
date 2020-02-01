_Component({
                selector: 'resource-details-page',
                c: 'ResourceDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','resource'],
                children: {cBgCRFfG7:'flk-spinner',cb5t0fqIG:'layout'},
                render: function (component) {
                    let cmpJZ1R = this._lc('cb5t0fqIG', {parent:component,content:(layout) => {let cndO7q5 = component.isLoading;
this.setState('stB5Mwf', cndO7q5);
let cndly_C = !(cndO7q5);
this.setState('stTxdp6', cndly_C);
if (cndO7q5) { 
let cmpynyZ = this._lc('cBgCRFfG7', {parent:component,parentTop:layout,state:'stB5Mwf'});
}else { 
let elyKoIk = eo('h1');
text(component.resource.title);
ec('h1');
}}});

                    this.isReadyToGo();
                }
        });