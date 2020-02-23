_Component({
                selector: 'moderate-track',
                c: 'ModerateTrack', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openModal','track','adminUsersService'],
                children: {cjeUrXH6e:'flk-dropdown-list',c8vxeUr13:'flk-modal'},
                render: function (component) {
                    let cndSmNB = component.user.accountType == 'admin';
this.setState('stefzZt', cndSmNB);
if (cndSmNB) { 
let el4vqNB = eo('div','bDrf',null,`class`,`text-center`);
let elE0JpB = eo('button','usof',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal = true;}]},`type`,`button`,`class`,`btn btn-sm bold btn-info`);
text(`Assign
            moderator.`);
ec('button');
ec('div');
}let cndVO01 = component.openModal;
this.setState('stnBiX1', cndVO01);
if (cndVO01) { 
let cmpYMMO = this._lc('c8vxeUr13', {parent:component,content:(flkModal) => {let elgYDd9 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]});

                if (! elgYDd9.formHandler) {
                    window.cfrmdlr = elgYDd9.formHandler = new FormHandler(elgYDd9, component);
                } else {
                    window.cfrmdlr = elgYDd9.formHandler;
                }
            let elrDdtB = ev('input',null,null, eventListeners, {oninput:[function(e) {component.track.id = this.value;}]},`value`,`${fval(component.track.id)}`,`name`,`${(`trackId`).toInputName()}`,`type`,`hidden`);
elrDdtB.value = fval(component.track.id);
let cmp9add = this._lc('cjeUrXH6e', {parent:component,parentTop:flkModal,props:{lazyLoading:true,multiple:true,service:component.adminUsersService},boolAttrs:{multiple:true},attrs:{name:`${(`moderators`).toInputName()}`},state:'stnBiX1'});
let el6lZh2 = eo('div',null,null,`class`,`text-center`);
let eluW3cF = eo('button',null,null,`class`,`btn btn-success`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{id:'moderators-modal',header:'Manage moderators'},state:'stnBiX1'});
}
                    this.isReadyToGo();
                }
        });