_Component({
                selector: 'moderate-track',
                c: 'ModerateTrack', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openModal','track','adminUsersService'],
                children: {caQ0uEJvg:'flk-dropdown-list',co1NnDzk2:'flk-modal'},
                render: function (component) {
                    let cndvLPT = component.user.accountType == 'admin';
this.setState('sto4m38', cndvLPT);
if (cndvLPT) { 
let elRqi2s = eo('div','pG4f',null,`class`,`text-center`);
let elk9h14 = eo('button','Q5Zf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal = true;}]},`type`,`button`,`class`,`btn btn-sm bold btn-info`);
text(`Assign
            moderator.`);
ec('button');
ec('div');
}let cndrw4y = component.openModal;
this.setState('strdmZB', cndrw4y);
if (cndrw4y) { 
let cmpJcXL = this._lc('co1NnDzk2', {parent:component,content:(flkModal) => {let elIoxGH = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]});

                if (! elIoxGH.formHandler) {
                    window.cfrmdlr = elIoxGH.formHandler = new FormHandler(elIoxGH, component);
                } else {
                    window.cfrmdlr = elIoxGH.formHandler;
                }
            let elvZhEV = ev('input',null,null, eventListeners, {oninput:[function(e) {component.track.id = this.value;}]},`value`,`${fval(component.track.id)}`,`name`,`${(`trackId`).toInputName()}`,`type`,`hidden`);
elvZhEV.value = fval(component.track.id);
let cmpvRBD = this._lc('caQ0uEJvg', {parent:component,parentTop:flkModal,props:{lazyLoading:true,multiple:true,service:component.adminUsersService},boolAttrs:{multiple:true},attrs:{name:`${(`moderators`).toInputName()}`},state:'strdmZB'});
let ellHITz = eo('div',null,null,`class`,`text-center`);
let el_AvF_ = eo('button',null,null,`class`,`btn btn-success`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{id:'moderators-modal',header:'Manage moderators'},state:'strdmZB'});
}
                    this.isReadyToGo();
                }
        });