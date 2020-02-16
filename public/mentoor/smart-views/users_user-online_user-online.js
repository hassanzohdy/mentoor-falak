_Component({
                selector: 'user-online',
                c: 'UserOnline', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['userId'],
                children: {},
                render: function (component) {
                    let cndo4WC = isOnline(component.userId);
this.setState('stbqjli', cndo4WC);
if (cndo4WC) { 
let elVCJzp = eo('i','B6pf',null,`title`,`${trans(`Online`)}`,`class`,`${fas('circle') + ' on icon'}`);
ec('i');
}
                    this.isReadyToGo();
                }
        });