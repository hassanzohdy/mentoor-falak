_Component({
                selector: 'home-page',
                c: 'HomePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {cgZoitZko:'timeline-page'},
                render: function (component) {
                    let cmp5FMl = this._lc('cgZoitZko', {parent:component});

                    this.isReadyToGo();
                }
        });