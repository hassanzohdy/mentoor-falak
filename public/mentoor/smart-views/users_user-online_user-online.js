_Component({
                selector: 'user-online',
                c: 'UserOnline', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['userId'],
                children: {},
                render: function (component) {
                    let cndo5Tu = isOnline(component.userId);
this.setState('st6vsoU', cndo5Tu);
if (cndo5Tu) { 
let elow9hL = eo('i','kpPf',null,`title`,`${trans(`Online`)}`,`class`,`${fas('circle')} on icon`);
ec('i');
}
                    this.isReadyToGo();
                }
        });