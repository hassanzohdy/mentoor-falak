_Component({
                selector: 'flk-facebook-share',
                c: 'FlkFacebookShare', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['router'],
                children: {},
                render: function (component) {
                    let elc8yeP = eo('span');

                // let elc8yeP = currentElement();

                if (! elc8yeP.__rendered) {
                    elc8yeP.__rendered = true;let el8WcE5 = eo('span',null,null,`class`,`fb-share-button`,`data-href`,`${ component.router.url() }`,`data-layout`,`button_count`);
ec('span');

                } else {
                    skip();
                }
            ec('span');

                    this.isReadyToGo();
                }
        });