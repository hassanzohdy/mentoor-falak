_Component({
                selector: 'moderate-track',
                c: 'ModerateTrack', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openModal','track','adminUsersService'],
                children: {clIKHOkwW:'flk-dropdown-list',cOpqwHvpP:'flk-modal'},
                render: function (component) {
                    let cndYr1p = component.user.accountType == 'admin';
this.setState('st78l0v', cndYr1p);
if (cndYr1p) { 
let el5Rb6u = eo('div','L_kf',null,`class`,`text-center`);
let elW19nm = eo('button','keqf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal = true;}]},`type`,`button`,`class`,`btn btn-sm bold btn-info`);
text(`Assign
            moderator.`);
ec('button');
ec('div');
}let cndlvmB = component.openModal;
this.setState('stUQIwR', cndlvmB);
if (cndlvmB) { 
let cmpodFq = this._lc('cOpqwHvpP', {parent:component,content:(flkModal) => {let eljaVDD = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]});

                if (! eljaVDD.formHandler) {
                    window.cfrmdlr = eljaVDD.formHandler = new FormHandler(eljaVDD, component);
                } else {
                    window.cfrmdlr = eljaVDD.formHandler;
                }
            let el3t1XO = ev('input',null,null, eventListeners, {oninput:[function(e) {component.track.id = this.value;}]},`value`,`${fval(component.track.id)}`,`name`,`${(`trackId`).toInputName()}`,`type`,`hidden`);
el3t1XO.value = fval(component.track.id);
let cmpUb_v = this._lc('clIKHOkwW', {parent:component,parentTop:flkModal,props:{lazyLoading:true,multiple:true,service:component.adminUsersService},boolAttrs:{multiple:true},attrs:{name:`${(`moderators`).toInputName()}`},state:'stUQIwR'});
let elp24qP = eo('div',null,null,`class`,`text-center`);
let elZRQVz = eo('button',null,null,`class`,`btn btn-success`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{id:'moderators-modal',header:'Manage moderators'},state:'stUQIwR'});
}
                    this.isReadyToGo();
                }
        });