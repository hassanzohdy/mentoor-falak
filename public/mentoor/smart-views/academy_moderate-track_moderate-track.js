_Component({
                selector: 'moderate-track',
                c: 'ModerateTrack', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openModal','track','adminUsersService'],
                children: {c6ZM7iwXs:'flk-dropdown-list',cCgNswgzQ:'flk-modal'},
                render: function (component) {
                    let cndT5kD = component.user.accountType == 'admin';
this.setState('st3Qi2g', cndT5kD);
if (cndT5kD) { 
let elqceio = eo('div','hovf',null,`class`,`text-center`);
let elr7P9N = eo('button','3gXf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal = true;}]},`type`,`button`,`class`,`btn btn-sm bold btn-info`);
text(`Assign
            moderator.`);
ec('button');
ec('div');
}let cndUnGr = component.openModal;
this.setState('stBulKd', cndUnGr);
if (cndUnGr) { 
let cmpXTlD = this._lc('cCgNswgzQ', {parent:component,content:(flkModal) => {let elD6H7M = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]});

                if (! elD6H7M.formHandler) {
                    window.cfrmdlr = elD6H7M.formHandler = new FormHandler(elD6H7M, component);
                } else {
                    window.cfrmdlr = elD6H7M.formHandler;
                }
            let elnlWfC = ev('input',null,null, eventListeners, {oninput:[function(e) {component.track.id = this.value;}]},`value`,`${fval(component.track.id)}`,`name`,`${(`trackId`).toInputName()}`,`type`,`hidden`);
elnlWfC.value = fval(component.track.id);
let cmpYXa_ = this._lc('c6ZM7iwXs', {parent:component,parentTop:flkModal,props:{lazyLoading:true,multiple:true,service:component.adminUsersService},boolAttrs:{multiple:true},attrs:{name:`${(`moderators`).toInputName()}`},state:'stBulKd'});
let elVLPMj = eo('div',null,null,`class`,`text-center`);
let elnlhwk = eo('button',null,null,`class`,`btn btn-success`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{id:'moderators-modal',header:'Manage moderators'},state:'stBulKd'});
}
                    this.isReadyToGo();
                }
        });