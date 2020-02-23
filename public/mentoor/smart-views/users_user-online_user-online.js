_Component({
                selector: 'user-online',
                c: 'UserOnline', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['userId'],
                children: {},
                render: function (component) {
                    let cndcbEf = isOnline(component.userId);
this.setState('stNz6k0', cndcbEf);
if (cndcbEf) { 
let eln5Wf7 = eo('i','Lmbf',null,`title`,`${trans(`Online`)}`,`class`,`${fas('circle') + ' on icon'}`);
ec('i');
}
                    this.isReadyToGo();
                }
        });