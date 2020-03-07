_Component({
                selector: 'home-page',
                c: 'HomePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {c7XvvNUrY:'timeline-page'},
                render: function (component) {
                    let cmptdEn = this._lc('c7XvvNUrY', {parent:component});

                    this.isReadyToGo();
                }
        });