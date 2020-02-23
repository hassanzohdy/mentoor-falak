_Component({
                selector: 'user-online',
                c: 'UserOnline', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['userId'],
                children: {},
                render: function (component) {
                    let cndkcJi = isOnline(component.userId);
this.setState('stl2vd1', cndkcJi);
if (cndkcJi) { 
let elE7ASs = eo('i','Vxof',null,`title`,`${trans(`Online`)}`,`class`,`${fas('circle') + ' on icon'}`);
ec('i');
}
                    this.isReadyToGo();
                }
        });