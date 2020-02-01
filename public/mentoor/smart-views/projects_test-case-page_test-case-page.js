_Component({
                selector: 'test-case-page',
                c: 'TestCasePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {},
                render: function (component) {
                    let elmth2d = eo('h1');
text(`test-case-page component is ready`);
ec('h1');

                    this.isReadyToGo();
                }
        });