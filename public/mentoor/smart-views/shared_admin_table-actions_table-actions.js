_Component({
                selector: 'table-actions',
                c: 'TableActions', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {},
                render: function (component) {
                    let elOH5rr = eo('span',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inputs.getEvent('edit')()}]},`title`,`${trans('Edit')}`,`class`,`text-info mr-2 ml-2 cursor d-inline-block`);
let elfMaOs = eo('i',null,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('span');
let eleNzok = eo('span',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inputs.getEvent('delete')()}]},`title`,`${trans('Delete')}`,`class`,`pink-text mr-2 ml-2  cursor d-inline-block`);
let elJLXuG = eo('i',null,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('span');

                    this.isReadyToGo();
                }
        });