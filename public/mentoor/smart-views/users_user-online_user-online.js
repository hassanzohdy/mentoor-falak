_Component({
                selector: 'user-online',
                c: 'UserOnline', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['userId'],
                children: {},
                render: function (component) {
                    let cndOMFY = isOnline(component.userId);
this.setState('stPKr26', cndOMFY);
if (cndOMFY) { 
let elBFvoA = eo('i','H2Yf',null,`title`,`${trans(`Online`)}`,`class`,`${fas('circle')} on icon`);
ec('i');
}
                    this.isReadyToGo();
                }
        });