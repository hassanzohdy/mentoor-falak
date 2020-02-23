_Component({
                selector: 'table-actions',
                c: 'TableActions', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {},
                render: function (component) {
                    let eln602v = eo('span',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inputs.getEvent('edit')()}]},`title`,`${trans('Edit')}`,`class`,`text-info mr-2 ml-2 cursor d-inline-block`);
let el27KN3 = eo('i',null,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('span');
let elAvIku = eo('span',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.inputs.getEvent('delete')()}]},`title`,`${trans('Delete')}`,`class`,`pink-text mr-2 ml-2  cursor d-inline-block`);
let elrfSOW = eo('i',null,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('span');

                    this.isReadyToGo();
                }
        });