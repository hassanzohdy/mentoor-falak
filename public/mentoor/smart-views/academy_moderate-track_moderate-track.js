_Component({
                selector: 'moderate-track',
                c: 'ModerateTrack', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openModal','track','adminUsersService'],
                children: {cXWFHS76a:'flk-dropdown-list',c6lZCQtyh:'flk-modal'},
                render: function (component) {
                    let cndmsiO = component.user.accountType == 'admin';
this.setState('stJdwz6', cndmsiO);
if (cndmsiO) { 
let elpxH6c = eo('div','jAOf',null,`class`,`text-center`);
let elCgsQv = eo('button','cwef',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal = true;}]},`type`,`button`,`class`,`btn btn-sm bold btn-info`);
text(`Assign
            moderator.`);
ec('button');
ec('div');
}let cndQm2Y = component.openModal;
this.setState('stf_yw7', cndQm2Y);
if (cndQm2Y) { 
let cmpIfTp = this._lc('c6lZCQtyh', {parent:component,content:(flkModal) => {let elOpSP9 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]});

                if (! elOpSP9.formHandler) {
                    window.cfrmdlr = elOpSP9.formHandler = new FormHandler(elOpSP9, component);
                } else {
                    window.cfrmdlr = elOpSP9.formHandler;
                }
            let elo470B = ev('input',null,null, eventListeners, {oninput:[function(e) {component.track.id = this.value;}]},`value`,`${fval(component.track.id)}`,`name`,`${(`trackId`).toInputName()}`,`type`,`hidden`);
elo470B.value = fval(component.track.id);
let cmpjbAX = this._lc('cXWFHS76a', {parent:component,parentTop:flkModal,props:{lazyLoading:true,multiple:true,service:component.adminUsersService},boolAttrs:{multiple:true},attrs:{name:`${(`moderators`).toInputName()}`},state:'stf_yw7'});
let elaxlV0 = eo('div',null,null,`class`,`text-center`);
let eln9uSd = eo('button',null,null,`class`,`btn btn-success`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{id:'moderators-modal',header:'Manage moderators'},state:'stf_yw7'});
}
                    this.isReadyToGo();
                }
        });