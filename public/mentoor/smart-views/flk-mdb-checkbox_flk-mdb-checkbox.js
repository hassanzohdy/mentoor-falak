_Component({
                selector: 'flk-mdb-checkbox',
                c: 'FlkMdbCheckbox', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['id','label'],
                children: {},
                render: function (component) {
                    let elO1kX2 = eo('div',null,null,`class`,`flk-mdb-checkbox custom-control custom-checkbox`);
let elmYvny = ev('input',null,null, 'style', this.__info.style || {}, eventListeners, mergeEvents({}, this.__info.events), boolAttrs, Object.merge({}, this.__info.boolAttrs || {}),...normalAttrs(Object.merge({id:`${component.id}`,type:'checkbox',class:'custom-control-input'}, this.__info.attrs || {})));
let elGU0iI = eo('label',null,null,`class`,`custom-control-label`,`for`,`${ component.id }`);
text( trans(component.label) );

        if (this.hasContent()) {
            this.content();
        }ec('label');
ec('div');

                    this.isReadyToGo();
                }
        });