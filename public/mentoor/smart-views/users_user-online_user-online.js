_Component({
                selector: 'user-online',
                c: 'UserOnline', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['userId'],
                children: {},
                render: function (component) {
                    let cndhZHS = isOnline(component.userId);
this.setState('stCGb7W', cndhZHS);
if (cndhZHS) { 
let elPPewE = eo('i','Yzof',null,`title`,`${trans(`Online`)}`,`class`,`${fas('circle') + ' on icon'}`);
ec('i');
}
                    this.isReadyToGo();
                }
        });