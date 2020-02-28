_Component({
                selector: 'flk-facebook-share',
                c: 'FlkFacebookShare', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['router'],
                children: {},
                render: function (component) {
                    let elXREo9 = eo('span');

                // let elXREo9 = currentElement();

                if (! elXREo9.__rendered) {
                    elXREo9.__rendered = true;let eldJzHq = eo('span',null,null,`class`,`fb-share-button`,`data-href`,`${ component.router.url() }`,`data-layout`,`button_count`);
ec('span');

                } else {
                    skip();
                }
            ec('span');

                    this.isReadyToGo();
                }
        });