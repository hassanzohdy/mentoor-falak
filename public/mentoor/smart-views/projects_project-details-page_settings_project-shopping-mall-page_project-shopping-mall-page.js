_Component({
                selector: 'project-shopping-mall-page',
                c: 'ProjectShoppingMallPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {},
                render: function (component) {
                    let elIA1Kg = eo('h1');
text(`project-shopping-mall-page component is ready`);
ec('h1');

                    this.isReadyToGo();
                }
        });