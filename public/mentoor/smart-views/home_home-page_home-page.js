_Component({
                selector: 'home-page',
                c: 'HomePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {cBTdzrQZs:'timeline-page'},
                render: function (component) {
                    let cmpSgQp = this._lc('cBTdzrQZs', {parent:component});

                    this.isReadyToGo();
                }
        });