_Component({
                selector: 'flk-timer',
                c: 'FlkTimer', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['remainingTime'],
                children: {},
                render: function (component) {
                    let elKMGXw = eo('span',null,null,`class`,`remaining-time`);
text(component.remainingTime);
ec('span');

                    this.isReadyToGo();
                }
        });