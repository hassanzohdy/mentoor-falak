_Component({
                selector: 'moderate-track',
                c: 'ModerateTrack', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openModal','track','adminUsersService'],
                children: {chCzoTwzV:'flk-dropdown-list',cyDr68IwY:'flk-modal'},
                render: function (component) {
                    let cndL2do = component.user.accountType == 'admin';
this.setState('stD_Qo3', cndL2do);
if (cndL2do) { 
let elawft0 = eo('div','xY8f',null,`class`,`text-center`);
let el90LRz = eo('button','GsVf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal = true;}]},`type`,`button`,`class`,`btn btn-sm bold btn-info`);
text(`Assign
            moderator.`);
ec('button');
ec('div');
}let cndTgBE = component.openModal;
this.setState('std5O05', cndTgBE);
if (cndTgBE) { 
let cmpAZex = this._lc('cyDr68IwY', {parent:component,content:(flkModal) => {let elguBlM = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]});

                if (! elguBlM.formHandler) {
                    window.cfrmdlr = elguBlM.formHandler = new FormHandler(elguBlM, component);
                } else {
                    window.cfrmdlr = elguBlM.formHandler;
                }
            let elMGp1x = ev('input',null,null, eventListeners, {oninput:[function(e) {component.track.id = this.value;}]},`value`,`${fval(component.track.id)}`,`name`,`${(`trackId`).toInputName()}`,`type`,`hidden`);
elMGp1x.value = fval(component.track.id);
let cmpw787 = this._lc('chCzoTwzV', {parent:component,parentTop:flkModal,props:{lazyLoading:true,multiple:true,service:component.adminUsersService},boolAttrs:{multiple:true},attrs:{name:`${(`moderators`).toInputName()}`},state:'std5O05'});
let el5IwBA = eo('div',null,null,`class`,`text-center`);
let ellP6nh = eo('button',null,null,`class`,`btn btn-success`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{id:'moderators-modal',header:'Manage moderators'},state:'std5O05'});
}
                    this.isReadyToGo();
                }
        });