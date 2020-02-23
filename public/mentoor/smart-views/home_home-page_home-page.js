_Component({
                selector: 'home-page',
                c: 'HomePage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {cQkSibj3X:'timeline-page'},
                render: function (component) {
                    let cmpR0KT = this._lc('cQkSibj3X', {parent:component});

                    this.isReadyToGo();
                }
        });