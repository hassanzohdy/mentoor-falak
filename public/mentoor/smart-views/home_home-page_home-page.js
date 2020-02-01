_Component({
                selector: 'home-page',
                c: 'HomePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {cor54E5W3:'timeline-page'},
                render: function (component) {
                    let cmpC32w = this._lc('cor54E5W3', {parent:component});

                    this.isReadyToGo();
                }
        });