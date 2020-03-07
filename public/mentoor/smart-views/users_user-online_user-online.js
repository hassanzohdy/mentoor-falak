_Component({
                selector: 'user-online',
                c: 'UserOnline', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['userId'],
                children: {},
                render: function (component) {
                    let cndP6ai = isOnline(component.userId);
this.setState('stHbdsG', cndP6ai);
if (cndP6ai) { 
let elcmkH1 = eo('i','LBEf',null,`title`,`${trans(`Online`)}`,`class`,`${fas('circle')} on icon`);
ec('i');
}
                    this.isReadyToGo();
                }
        });