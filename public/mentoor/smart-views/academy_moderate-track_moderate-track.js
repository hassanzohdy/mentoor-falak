_Component({
                selector: 'moderate-track',
                c: 'ModerateTrack', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openModal','track','adminUsersService'],
                children: {cUTDLYcZx:'flk-dropdown-list',cAND8kiBw:'flk-modal'},
                render: function (component) {
                    let cndRekn = component.user.accountType == 'admin';
this.setState('st9qUys', cndRekn);
if (cndRekn) { 
let elNsYbe = eo('div','k7ff',null,`class`,`text-center`);
let elzyyEK = eo('button','yD7f',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal = true;}]},`type`,`button`,`class`,`btn btn-sm bold btn-info`);
text(`Assign
            moderator.`);
ec('button');
ec('div');
}let cndVEQR = component.openModal;
this.setState('stINdtr', cndVEQR);
if (cndVEQR) { 
let cmpn1Nd = this._lc('cAND8kiBw', {parent:component,content:(flkModal) => {let el6haQ1 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]});

                if (! el6haQ1.formHandler) {
                    window.cfrmdlr = el6haQ1.formHandler = new FormHandler(el6haQ1, component);
                } else {
                    window.cfrmdlr = el6haQ1.formHandler;
                }
            let eluyGCJ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.track.id = this.value;}]},`value`,`${fval(component.track.id)}`,`name`,`${(`trackId`).toInputName()}`,`type`,`hidden`);
eluyGCJ.value = fval(component.track.id);
let cmpzBSq = this._lc('cUTDLYcZx', {parent:component,parentTop:flkModal,props:{lazyLoading:true,multiple:true,service:component.adminUsersService},boolAttrs:{multiple:true},attrs:{name:`${(`moderators`).toInputName()}`},state:'stINdtr'});
let elUh6o3 = eo('div',null,null,`class`,`text-center`);
let el4kEQ_ = eo('button',null,null,`class`,`btn btn-success`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{id:'moderators-modal',header:'Manage moderators'},state:'stINdtr'});
}
                    this.isReadyToGo();
                }
        });