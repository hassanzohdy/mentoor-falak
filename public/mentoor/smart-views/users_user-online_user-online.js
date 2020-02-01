_Component({
                selector: 'user-online',
                c: 'UserOnline', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['userId'],
                children: {},
                render: function (component) {
                    let cndx4y9 = isOnline(component.userId);
this.setState('stf8mCY', cndx4y9);
if (cndx4y9) { 
let ele98aT = eo('i','qkwf',null,`title`,`${trans(`Online`)}`,`class`,`${fas('circle') + ' on icon'}`);
ec('i');
}
                    this.isReadyToGo();
                }
        });