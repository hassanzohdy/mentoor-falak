_Component({
                selector: 'tags-page',
                c: 'TagsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {},
                render: function (component) {
                    let elcrDCs = eo('h1');
text(`tags-page component is ready`);
ec('h1');

                    this.isReadyToGo();
                }
        });