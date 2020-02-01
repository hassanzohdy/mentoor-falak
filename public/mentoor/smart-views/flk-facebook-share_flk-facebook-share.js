_Component({
                selector: 'flk-facebook-share',
                c: 'FlkFacebookShare', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['router'],
                children: {},
                render: function (component) {
                    let elJe6nC = eo('span');

                // let elJe6nC = currentElement();

                if (! elJe6nC.__rendered) {
                    elJe6nC.__rendered = true;let el51pYH = eo('span',null,null,`class`,`fb-share-button`,`data-href`,`${ component.router.url() }`,`data-layout`,`button_count`);
ec('span');

                } else {
                    skip();
                }
            ec('span');

                    this.isReadyToGo();
                }
        });